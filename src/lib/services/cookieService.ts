
export function setCookie(
	name: string,
	value: string,
	expires: Date = new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
	httpOnly: boolean = false,
	secure: boolean = true,
	sameSite: 'Strict' | 'Lax' | 'None' = 'Strict'
): void {
	let cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`
	if (httpOnly) {
		cookie += '; httpOnly'
	}
	if (secure) {
		cookie += '; secure'
	}
	if (sameSite) {
		cookie += `; sameSite=${sameSite}`
	}

	document.cookie = cookie
}

export function getCookie(name: string): string | null {
	const cookies = document.cookie.split('; ')
	for (const cookie of cookies) {
		const parts = cookie.split('=')
		if (parts[0] === name) {
			return parts[1]
		}
	}
	return null
}
export function deleteCookie(name: string): void {
	setCookie(name, '', new Date(0))
}

export function clearAllCookies() {
  // Obtener todas las cookies
  const cookies = document.cookie.split(';');

  // Eliminar todas las cookies
  cookies.forEach((cookie) => {
    const [name, ] = cookie.split('=');
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}

