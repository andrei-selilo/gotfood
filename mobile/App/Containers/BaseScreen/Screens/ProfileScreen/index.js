import { compose, withHandlers, withState, withPropsOnChange, withProps } from 'recompose';
import View from './view';

const enhancer = compose(
  withState('error', 'setError'),
  withHandlers({

  })
)

const enhance = enhancer(View)

export default enhance;