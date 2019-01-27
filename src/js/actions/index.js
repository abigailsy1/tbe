import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export function fetchData(input) {
    return {
      type: FETCH_DATA,
      payload: axios
      .get("/proxy/yelp?term=" + input)
      .then(resp => {
          return resp;
      })
    };
  }

