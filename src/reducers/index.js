import { combineReducers } from "redux";

const searchResults = {
  data: [],
  status: "",
};

const resultReducer = (results = searchResults, action) => {
  //   if (action.type === "INSERT") {
  //     searchResults.push(action.payload);
  //     return [...searchResults];
  //   }
  switch (action.type) {
    case "START":
      return { ...searchResults, data: [], status: "SUCCESS" };
      
    case "SUCCESS":
      return { ...searchResults, data: action.payload, status: "SUCCESS" };
      
    case "FAILD":
      return { ...searchResults, data: [], status: "FAILD" };
      
    default:
      return results;
      
  }

  return results;
};

export default combineReducers({
  results: resultReducer,
});
