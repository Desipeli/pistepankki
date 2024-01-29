let VITE_APP_BACKEND_URL = ''

if (import.meta.env.MODE === 'dev') {
  VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL_DEV
} else {
  VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL_PROD
}
console.log(VITE_APP_BACKEND_URL)
export { VITE_APP_BACKEND_URL }
