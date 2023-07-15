import '../styles/globals.css'
import Layout from '../components/Layout'
import { AuthContext, AuthProvider } from '../stores/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
