import NameSpace from "Store/name-space";

const NAME_SPACE = NameSpace.APP;
export const getCurrentCity = (state) =>(state[NAME_SPACE].currentCity);
