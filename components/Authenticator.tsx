import { 
    Authenticator as AmplifyAuthenticator,
    ThemeProvider as AmplifyThemeProvider,
    Theme,
    useAuthenticator
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import LoggedInMenu from './LoggedInMenu';

interface Props {
    children: React.ReactNode;
}

export default function Authenticator({children} : Props) {
    
    const theme: Theme = {
        name: "TestTheme"
    }

    return (
        <AmplifyThemeProvider theme={theme}>
            <AmplifyAuthenticator 
                variation='modal'
                signUpAttributes={['given_name', 'family_name']}
                formFields={{
                    signIn: {
                        username: {
                            label: 'Email',
                            placeholder: 'Enter your email',
                            required: true,
                            type: 'email'
                        }
                    },
                    signUp: {
                        username: {
                            label: 'Email',
                            placeholder: 'Enter your email',
                        },
                        given_name: {
                            label: 'First Name',
                            placeholder: 'Enter your first name',
                        },
                        family_name: {
                            label: 'Last Name',
                            placeholder: 'Enter your last name',
                        }
                    }
                }}
                >
                    <LoggedInMenu />
                {children}
                
            </AmplifyAuthenticator>
        </AmplifyThemeProvider>
    )
}