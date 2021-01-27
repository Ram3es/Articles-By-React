export const A_AuthSignInRequest = (data) => ({
  type: "SIGN_IN_REQUEST",
  payload: data,
});
export const A_AuthSignInSuccess = (token) => ({
  type: "SIGN_IN_SUCCESS",
  payload: token,
});

export const A_AuthSignUpRequest = (email) => ({
  type: "SIGN_UP_REQUEST",
  payload: email,
});
