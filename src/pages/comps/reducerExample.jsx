const initialState = {
    dorm: "",
    review: "",
    stars: "",

}

function reducer(state, action) {
    switch (action.type) {
      case 'dorm':
        return { ...state, dorm: action.payload };
      case 'review':
        return { ...state, review: action.payload };
      case 'stars':
        return { ...state, stars: action.payload };
      default:
        throw new Error();
    }
  }