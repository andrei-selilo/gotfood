import {compose, withHandlers, withState, withPropsOnChange, withProps} from 'recompose';
import View from './view';
import Screens from '../../Themes/Screens';

const enhancer = compose(
    withState('error', 'setError'),
    withState('login', 'setLogin'),
    withState('password', 'setPassword'),
    withHandlers({
        onLogin: ({setError, navigation, login, password}) => async () => {
            try {                
                /*
                    1. validate data
                    2. check password
                    3. get token
                    4. navigate
                */

                // can go back - should be fixed
                navigation.navigate(Screens.HOME_SCREEN);
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

export default enhancer(View);
