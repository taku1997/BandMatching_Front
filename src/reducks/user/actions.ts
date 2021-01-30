export const SIGN_IN = "SIGN_IN";
export const SigninAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    }
  }
}

export const SIGN_UP = "SIGN_UP";
export const SignupAction = (userState) => {
  return {
    type: "SIGN_UP",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
}

export const SIGN_OUT = "SIGN_OUT";
export const SignoutAction = () => {
  return {
    type: "SIGN_UP",
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  }
}
