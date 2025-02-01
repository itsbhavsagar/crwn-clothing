import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
  };

  return (
    <div>
      <h1> I am Sign In Page</h1>

      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
