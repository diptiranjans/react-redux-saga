const initialState = {
  loading: false,
  newsList: []
};
const newsReducer = (state = initialState, action) => {
  if (action.type === "FETCH_NEWS") {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === "NEWS_RECEIVED") {
    return {
      ...state,
      loading: false,
      newsList: action.payload
    };
  }

  return state;
};

export default newsReducer;
