/*Action Types*/
const ADD_ONE = "ADD_ONE";
const ADD_N = "ADD_N";

/*Actions*/
export const addOne = () => ({ type: ADD_ONE });
export const addN = amount => ({ type: ADD_N, payload: amount });
