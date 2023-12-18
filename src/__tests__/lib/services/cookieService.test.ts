import {
  clearAllCookies,
  getCookie,
  setCookie,
} from '@/lib/services/cookieService'
import { vi } from 'vitest'

describe('cookieService', () => {
  beforeEach(() => {
    let cookieJar = document.cookie
    vi.spyOn(document, 'cookie', 'set').mockImplementation(cookie => {
      cookieJar += cookie
    })
    vi.spyOn(document, 'cookie', 'get').mockImplementation(() => cookieJar)
  })

  /** setCookie */
  it('should set a cookie with a given name and value', () => {
    const cookieName = 'testCookie'
    const cookieValue = 'testValue'
    setCookie(cookieName, cookieValue)
    const cookies = document.cookie.split(';').map(cookie => cookie.trim())
    const cookieSet = cookies.some(
      cookie => cookie === `${cookieName}=${cookieValue}`
    )
    expect(cookieSet).toBe(true)
  })

  it('should set a cookie with a default expiration time of 24 hours', () => {
    const name = 'testCookie'
    const value = 'testValue'
    setCookie(name, value)
    const cookie = document.cookie
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()
    expect(cookie).toContain(`expires=${expires}`)
  })

  it('should set a cookie with optional HTTP-only flag', () => {
    const name = 'testCookie'
    const value = 'testValue'
    const httpOnly = true
    setCookie(name, value, undefined, httpOnly)
    const cookie = document.cookie
    expect(cookie).toContain('; httpOnly')
  })

  it('should set a cookie with an expiration time in the past', () => {
    const name = 'testCookie'
    const value = 'testValue'
    const expires = new Date(0)
    setCookie(name, value, expires)
    const cookie = document.cookie
    expect(cookie).toContain(`expires=${expires.toUTCString()}`)
  })

  it('should set a cookie with an expiration time in the future', () => {
    const name = 'testCookie'
    const value = 'testValue'
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    setCookie(name, value, expires)
    const cookie = document.cookie
    expect(cookie).toContain(`expires=${expires.toUTCString()}`)
  })

  it('should set a cookie with an empty value', () => {
    const name = 'testCookie'
    const value = ''
    setCookie(name, value)
    const cookie = document.cookie
    expect(cookie).toContain(`${name}=${value}`)
  })

  /** getCookie */
  it('should return the cookie value when the cookie name exists', () => {
    document.cookie = 'cookie1=value1; cookie2=value2; cookie3=value3'
    const result = getCookie('value2')
    expect(result).toBe('value2')
  })

  it('should return null when the cookie name does not exist', () => {
    document.cookie = 'cookie1=value1; cookie2=value2; cookie3=value3'
    const result = getCookie('cookie4')
    expect(result).toBeNull()
  })

  it('should return null when document.cookie is empty', () => {
    document.cookie = ''
    const result = getCookie('cookie1')
    expect(result).toBeNull()
  })

  it('should return null when cookie name is an empty string', () => {
    document.cookie = 'cookie1=value1; cookie2=value2; cookie3=value3'
    const result = getCookie('')
    expect(result).toBeNull()
  })

  it('should return null when cookie value is not provided', () => {
    document.cookie = 'cookie1=; cookie2=value2; cookie3=value3'
    const result = getCookie('cookie2')
    expect(result).toBeNull()
  })

  /** clearAllCookies */

  it('should delete all cookies when called', () => {
    clearAllCookies()
    expect(document.cookie).toBe('')
  })

  it('should delete cookies with same name but different paths', () => {
    document.cookie = 'cookie1=value1; path=/path1;'
    document.cookie = 'cookie1=value2; path=/path2;'
    clearAllCookies()

    expect(document.cookie).toBe('')
  })

  it('should delete cookies with same name but different domains', () => {
    document.cookie = 'cookie1=value1; domain=domain1;'
    document.cookie = 'cookie1=value2; domain=domain2;'

    clearAllCookies()

    expect(document.cookie).toBe('')
  })

  it('should not delete cookies with invalid names', () => {
    document.cookie = 'cookie1=value1;'
    document.cookie = '=value2;'

    clearAllCookies()

    expect(document.cookie).toContain('cookie1=value1')
  })

  it('should not delete cookies with invalid values', () => {
    document.cookie = 'cookie1=value1;'
    document.cookie = 'cookie2=;'

    clearAllCookies()

    expect(document.cookie).toContain('cookie1=value1')
  })
})
