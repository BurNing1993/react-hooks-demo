// actionTypes
const CHANGE_THEME = 'CHANGE_THEME';

// Action Creators
export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme
  }
}

// Reducers
export function themeReducer(state, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        ...action.theme
      }

    default:
      return state;
  }
}