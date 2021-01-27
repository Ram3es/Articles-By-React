import { constants } from "../../../store/constants";

const initialState = {
  auth: {
    isAuth: false,
    token: null,
    loading: false,
    error: null,
  },
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SIGN_IN.REQUEST:
    case constants.SIGN_IN.SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuth: action.payload !== null,
        loading: false,
        error: null,
      };
    case constants.SIGN_IN.FAILURE:
    case constants.SIGN_IN.CLEARE:

    case constants.SIGN_UP.CLEARE:
    case constants.SIGN_UP.SUCCESS:
    case constants.SIGN_UP.FAILURE:
    case constants.SIGN_UP.CLEARE:
    default:
      return {
        ...state,
      };
  }
};
