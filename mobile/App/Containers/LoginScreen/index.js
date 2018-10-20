import { compose, hoistStatics, withHandlers, withState, withPropsOnChange, withProps } from 'recompose'
import View from './view'
import Screens from '../../Themes/Screens'
import hideHeader from '../hideHeader'

const enhancer = compose(
  withState('error', 'setError'),
  withState('login', 'setLogin'),
  withState('password', 'setPassword'),
  withHandlers({
    onLogin: ({ setError, navigation, login, password, ...props }) => async () => {
      try {
        /*
            1. validate data
            2. check password
            3. get token
            4. navigate
        */

        // can go back - should be fixed
        console.log(`navigation:`, navigation, props)
        navigation.navigate(Screens.BASE_SCREEN)
      } catch ({ message }) {
        setError(message)
      }
    },
    onSignUp: ({ setError, navigation }) => async () => {
      navigation.navigate(Screens.SIGNUP_SCREEN)
    }
  })
);

const enhance = enhancer(View);
enhance.navigationOptions = {
  header: null
};

export default enhance;