import { 
    useAuthenticator
} from '@aws-amplify/ui-react';
import { useEffect } from 'react';

export default  function LoggedInMenu() {
  const { signOut, user } = useAuthenticator();

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <div>
        <p>Logged in as {user.userId}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}