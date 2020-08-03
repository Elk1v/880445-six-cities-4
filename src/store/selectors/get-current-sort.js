import NameSpace from "Store/name-space";

const NAME_SPACE = NameSpace.APP;
export const getCurrentSort = (state) =>(state[NAME_SPACE].currentSort);
