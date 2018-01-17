const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const initialState = {
  showNotification: false,
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
      return { ...state, showNotification: true, text: action.payload };
    case HIDE_NOTIFICATION:
      return { ...state, showNotification: false, text: null };
    default:
      return state;
  }
};
