import {combineReducers} from "redux";
import {reducer as app} from "./app/reducer";
import {reducer as data} from "./data/reducer";
import {reducer as user} from "./user/reducer";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});

