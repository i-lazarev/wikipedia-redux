import { combineReducers } from "redux";

let searchResults = {
  data: [],
  status: "",
  selectedIdx: -1,
};

const resultReducer = (results = searchResults, action) => {
  //   if (action.type === "INSERT") {
  //     searchResults.push(action.payload);
  //     return [...searchResults];
  //   }

  //console.log(action);

  switch (action.type) {
    case "START":
      searchResults = { data: [], status: "START", selectedIdx: -1 };
      return { ...searchResults };
    case "SUCCESS":
      searchResults = {
        data: action.payload.query.search,
        status: "SUCCESS",
        selectedIdx: -1,
      };
      return { ...searchResults };

    case "FAILED":
      searchResults = { data: [], status: "FAILED", selectedIdx: -1 };
      return { ...searchResults };

    case "SELECT_INDEX":
      searchResults.selectedIdx = action.payload;
      return { ...searchResults };

    default:
      return results;
  }
};

export default combineReducers({
  results: resultReducer,
});
