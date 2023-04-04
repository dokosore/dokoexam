import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { signIn } from 'next-auth/react';

import type { AuthProvider } from 'firebase/auth';

import { firebaseApp } from '@/lib/firebase';

export default function singIn() {
  const auth = getAuth(firebaseApp);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const handleOAuthSignIn = (provider: AuthProvider) => {
    signInWithPopup(auth, provider)
      // 認証に成功したら ID トークンを NextAuth に渡す
      .then((credential) => credential.user.getIdToken(true))
      .then((idToken) => {
        signIn('credentials', { idToken });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <p>Choose your sign-in method:</p>
      <button onClick={() => handleOAuthSignIn(githubProvider)}>GitHub</button>
      <br />
      <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
    </>
  );
}
