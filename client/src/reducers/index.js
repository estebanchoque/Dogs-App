import { GET_DOGS, SEARCH_DOGS, GET_DOG_DETAIL, GET_TEMPERAMENTS } from "../actions/index";

const initialState = {
  dogs: [],
  dogsFound: [],
  dogDetail: {},
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        dogsFound: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
