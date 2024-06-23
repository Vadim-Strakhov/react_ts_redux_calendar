import { AppDispatch } from "@src/store";
import { allActionCreators } from "@src/store/reducers/all-action-creators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
};
