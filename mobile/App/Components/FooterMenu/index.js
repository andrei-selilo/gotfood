import { compose, withHandlers, withState, withPropsOnChange, withProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import View from './view'
import Screens from '../../Themes/Screens'

const enhancer = compose(
    withNavigation,
    withState('error', 'setError'),
    withHandlers({
      onHomeClick: ({ navigation, setScreenContent }) => async () => {
        if (!setScreenContent) {
          navigation.navigate(Screens.HOME_SCREEN)
        }
        setScreenContent(Screens.HOME_SCREEN)
      },
      onProfileClick: ({ navigation, setScreenContent }) => async () => {
        if (!setScreenContent) {
          navigation.navigate(Screens.PROFILE_SCREEN)
        }
        setScreenContent(Screens.PROFILE_SCREEN)
      },
      onCartClick: ({ navigation, setScreenContent }) => async () => {
        if (!setScreenContent) {
          navigation.navigate(Screens.CART_SCREEN)
        }
        setScreenContent(Screens.CART_SCREEN)
      },
    }),
);

export default enhancer(View);
