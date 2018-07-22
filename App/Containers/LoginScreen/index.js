import {compose, hoistStatics, withHandlers, withState, withPropsOnChange, withProps} from 'recompose';
import View from './view';
import Screens from '../../Themes/Screens';
import hideHeader from '../hideHeader';

const enhancer = compose(
    withState('error', 'setError'),
    withState('login', 'setLogin'),
    withState('password', 'setPassword'),
    withHandlers({
        onLogin: ({setError, Header, navigation, navigationOptions, login, password}) => async () => {
            try {                
                /*
                    1. validate data
                    2. check password
                    3. get token
                    4. navigate
                */

                // can go back - should be fixed
                navigation.navigate(Screens.HOME_SCREEN);
                console.log(Header ,navigation);
            } catch ({message}) {
                setError(message);
            }
        },
        onSignUp: ({setError, navigate}) => async () => {
            /*
                1. navigate
            */
        }
    })
);

const enhance = enhancer(View);
enhance.navigationOptions = {
    header: null
};

export default enhance;