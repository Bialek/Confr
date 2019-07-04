import getAzureLogoutUrl from './getAzureLogoutUrl'

export default function redirectOnError(code) {
  const isInRange = (code > 199 && code <= 400) || code === 409 || code === 404
  if (!isInRange) window.location.href = `${getAzureLogoutUrl()}`
}
