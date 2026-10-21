# Internal generators login

The public website stays public. `/get-quote` and `/estimate-quote-generator`
require the single owner's password through `/internal-login`.

## Required hosting configuration

The owner-requested password is stored as a salted scrypt verifier in the server
authentication module. The plaintext password is not saved in the repository or
included in browser JavaScript.

Before login will work, set `INTERNAL_TOOLS_SESSION_SECRET` in the hosting
environment (Production, and Preview if previews should support login). Generate
an independent random value using:

```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Keep that value private: do not commit it, paste it in public chat, or prefix the
variable with `NEXT_PUBLIC_`. For local development, place it in ignored
`.env.local`. Redeploy after changing hosting environment variables. GitHub code
pushes do not configure Vercel environment variables automatically.

Without a secret of at least 32 bytes, both tools fail closed and login is
disabled. No Vercel settings were modified by this implementation.

## Session and password rotation

Sessions last eight hours and use HttpOnly, SameSite=Strict cookies, with Secure
enabled on HTTPS. Log out clears the browser cookie. Rotating the session secret
invalidates all sessions; changing the password verifier also invalidates them.
Use `INTERNAL_TOOLS_PASSWORD_HASH` to override the default server-side verifier.
It uses `salt:hex-digest`, with scrypt N=32768, r=8, p=1, 64-byte output.

Login accepts at most five attempts per client per 15 minutes per server process.
When the existing `QUOTE_REDIS_REST_URL` and `QUOTE_REDIS_REST_TOKEN` are configured,
the limit is also enforced across instances using Redis. A configured Redis
failure blocks login rather than bypassing the limit. For internet-exposed tools,
configure Redis or hosting-level rate limiting for durable enforcement.

There is no self-service registration or password reset. An owner changes the
server environment to rotate credentials. Generated documents remain local to the
browser; this login does not send them to the old public lead-capture API.
