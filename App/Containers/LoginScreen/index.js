import {compose, withHandlers, withState, withPropsOnChange, withProps} from 'recompose';
import View from "./view";

const enhancer = compose(
    withState('error', 'setError'),
    withState('login', 'setLogin'),
    withState('password', 'setPassword'),
    withHandlers({
        onNext: ({setError, navigate}) => async (address) => {
            try {                
                
            } catch ({message}) {
                setError(message);
            }
        },
        onLogin: ({setError, navigate, login, password}) => async () => {
            /*
                1. validate data
                2. check password
                3. get token
                4. navigate
            */
            navigate()
            console.log(login, password);
        },
        onSignUp: ({setError, navigate}) => async () => {
            /*
                1. navigate
            */
        }
    })
);

export default enhancer(View);
