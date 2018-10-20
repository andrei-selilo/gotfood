import { compose, withHandlers, withState } from 'recompose'
import View from './view'

const enhancer = compose(
  withState('error', 'setError'),
  withState('isOpened', 'setIsOpened', false),
  withHandlers({
    onPress: ({ error, setIsOpened, isOpened }) => async () => {
      setIsOpened(!isOpened)
    },
    onClose: ({ error, setIsOpened }) => async () => {
      setIsOpened(false)
    }
  }),
);

export default enhancer(View);
