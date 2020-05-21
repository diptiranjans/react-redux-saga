const initialState = {
  loading: false
};

const buttonReducer = (state = initialState, action) => {
  if (action.type === "GET_NEWS") {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === "NEWS_RECEIVED") {
    return {
      ...state,
      loading: false,
      news_list: action.payload
    };
  }
  return state;
};

export default buttonReducer;
