const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const initialState = {
  shouldShowNotification: false,
  text: null,
  userWantsToSeeNotifications: true,
};

export function showNotification(text) {
  return {
    type: SHOW_NOTIFICATION,
    payload: text
  };
};

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION
  };
};

export function showAndHideNotification(text) {
  return (dispatch, getState) => {
    if (getState().userWantsToSeeNotifications) {
      dispatch(showNotification(text));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 1500)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, shouldShowNotification: true, text: action.payload };
    case HIDE_NOTIFICATION:
      return { ...state, shouldShowNotification: false, text: null };
    default:
      return state;
  }
};
