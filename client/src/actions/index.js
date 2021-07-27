export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const CREATE_DOG = "CREATE_DOG";
export const FILTER_BY = "FILTER_BY";
export const ORDER_BY = "ORDER_BY";

const BASE_URL = "http://localhost:3001";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/dogs`);
      const json = await res.json();
      return dispatch({ type: GET_DOGS, payload: json });
    } catch (error) {
      return console.log(error);
    }
  };
};

export const searchDogs = (name) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/dogs?name=${name}`);
      const json = await res.json();
      return dispatch({ type: SEARCH_DOGS, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDogDetail = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/dogs/${id}`);
      const json = await res.json();
      return dispatch({ type: GET_DOG_DETAIL, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/temperament`);
      const json = await res.json();
      return dispatch({ type: GET_TEMPERAMENTS, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createDog = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/dog`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        console.log(res.message);
      } else {
        return dispatch({ type: CREATE_DOG, payload: json });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
