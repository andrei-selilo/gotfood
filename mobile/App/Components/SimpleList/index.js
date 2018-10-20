import { compose, withHandlers, withState, withPropsOnChange, withProps, lifecycle } from 'recompose'
import View from './view'

const enhancer = compose(
  withState('error', 'setError'),
  withHandlers({

  }),
);

export default enhancer(View);
