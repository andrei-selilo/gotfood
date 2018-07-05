import {compose, withHandlers, withState, withPropsOnChange} from 'recompose';
import withHeaderHandlers from "../../components/Header/withHeaderHandlers";
import withAccount from '../../../store/reducers/account';
import withNav from "../../../store/reducers/nav";
import Screens from "../../Screens";
import View from "./view";

const enhancer = compose(
    withNav,
    withHeaderHandlers,
    withAccount,
    withState('error', 'setError'),
    withHandlers({
        onNext: ({setError, account, accountActions, navigate}) => async (address) => {
            try {                
                await accountActions.updateUserInformation({
                    address: address.data.description
                }, account.data.id);
                navigate(Screens.USER_PROFILE_ADDRESS2);
            } catch ({message}) {
                setError(message);
            }
        }
    })
);

export default enhancer(View);
