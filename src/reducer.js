const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const initialState = {
  shouldShowNotification: false,
  text: null,
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
