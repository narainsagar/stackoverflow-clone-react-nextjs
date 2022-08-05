import type { AppProps } from 'next/app'

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/app.css'

// import font-awesome icons globally
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas)

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
