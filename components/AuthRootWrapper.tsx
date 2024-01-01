'use client'

import { Amplify } from 'aws-amplify';
import Authenticator from './Authenticator';


interface Props {
  children: React.ReactNode;
}

Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '',
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || '',
      },
    }
});

export default function AuthWrapper({ children }: Props) {
  return (
      <Authenticator>
        {children}
      </Authenticator>
  );
}