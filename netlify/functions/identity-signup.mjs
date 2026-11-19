// Identity calls this hook when a new account is about to be confirmed.
// The invitation timestamp comes from the provider, outside editable user metadata.
export default async function (request) {
  const event = await request.json().catch(() => null);
  if (!event?.user?.invited_at) {
    return new Response('Team registration requires an invitation.', { status: 403 });
  }
  return new Response('{}', { headers: { 'Content-Type': 'application/json' } });
}
