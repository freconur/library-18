// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    
    authPageURL: '/register-login',
    appPageURL: '/dashboard/registro-ventas',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    // firebaseAuthEmulatorHost: 'localhost:3000',
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'library18',
        clientEmail: 'firebase-adminsdk-sacd5@library18.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY as string
      },
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyD4bWJZfvkhZ-MmLmQJEJwdWOk1SCQKu1w', // required
      authDomain: 'library-18-7da22.firebaseapp.com',
      // databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: 'library-18-7da22',
    },
    cookies: {
      name: 'library18', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth