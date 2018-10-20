import { compose, withHandlers, withState, withPropsOnChange, withProps } from 'recompose'
import Screens from '../../Themes/Screens'
import View from './view'

const enhancer = compose(
  withState('error', 'setError'),
  withState('screenContent', 'setScreenContent', Screens.PROFILE_SCREEN),
  withHandlers({
    onProfileClick: ({  }) => async () => {

    }
  })
);

const enhance = enhancer(View);
enhance.navigationOptions = {
  header: null
};

export default enhance;