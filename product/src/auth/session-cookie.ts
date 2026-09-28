export function persistSessionCookie(res: Response, token: string) {
  res.cookies.set('session', token, { secure: true, sameSite: 'lax' });
}
