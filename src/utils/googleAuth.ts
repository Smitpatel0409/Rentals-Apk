import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

function isGoogleSignInError(error: any): error is { code: string } {
    return typeof error === 'object' && error !== null && 'code' in error;
}

export const signInWithGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        GoogleSignin.signOut();
        const response = await GoogleSignin.signIn();
        if (response && response.data) {
            console.log(response.data);
            return true;
        }
        return false;
    } catch (error: any) {
        if (isGoogleSignInError(error)) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    // User cancelled the sign-in process
                    console.log('Sign-in cancelled');
                    break;
                case statusCodes.IN_PROGRESS:
                    // operation (eg. sign in) already in progress
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    // Android only, play services not available or outdated
                    break;
                default:
                // some other error happened
            }
        } else {
            // an error that's not related to google sign in occurred
        }
    }
};

export default {
    signInWithGoogle
};
