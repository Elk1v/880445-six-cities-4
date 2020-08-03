import NameSpace from "Store/name-space";
const NAME_SPACE = NameSpace.DATA;
export const getCitiesData = (state) => (state[NAME_SPACE].cities);
