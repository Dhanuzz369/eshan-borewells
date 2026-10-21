import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authConfigured, SESSION_COOKIE, safeDestination, verifySession } from "./internal-auth";

export async function requireInternalSession(destination: string) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!authConfigured() || !verifySession(token)) redirect(`/internal-login?next=${encodeURIComponent(safeDestination(destination))}`);
}
