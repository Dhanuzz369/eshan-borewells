import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authConfigured, safeDestination, SESSION_COOKIE, verifySession } from "@/lib/quote/internal-auth";
import "../get-quote/quote.css";

export const metadata: Metadata = { title: "Internal Tools Login | Eshan Borewells", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";
export default async function InternalLoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const destination = safeDestination(params.next);
  const configured = authConfigured();
  if (configured && verifySession((await cookies()).get(SESSION_COOKIE)?.value)) redirect(destination);
  const message = !configured || params.error === "setup" ? "Internal tools are locked. Configure the private session secret on the server to enable login." : params.error === "limited" ? "Too many login attempts. Please try again after 15 minutes." : params.error === "invalid" ? "Incorrect password. Please try again." : "";
  return <main className="internal-login-page"><section className="internal-login-card"><span className="section-label">ESHAN BOREWELLS</span><h1>Internal tools</h1><p>Sign in to access the Estimated Bill and Estimate Quote generators.</p><form action="/api/internal-auth/login" method="post"><input type="hidden" name="next" value={destination} /><label>Password<input type="password" name="password" autoComplete="current-password" required maxLength={256} disabled={!configured} /></label>{message && <p className="quote-error" role="alert">{message}</p>}<button type="submit" disabled={!configured}>Sign in</button></form><Link href="/">Back to the public website</Link></section></main>;
}
