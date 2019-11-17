export const loadingReducer = state => ({
  ...state,
  isLoading: true
});

export const successReducer = (state, action) => ({
  data: action.payload,
  isLoading: false
});
