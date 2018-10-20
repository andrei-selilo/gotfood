import { compose, withHandlers, withState, withPropsOnChange, withProps } from 'recompose'
import View from './view'

const enhancer = compose(
  withState('error', 'setError'),
  withState('login', 'setLogin'),
  withState('password', 'setPassword'),
  withState('trendingElements', 'setTrendingElements'),
  withState('categoryElements', 'setCategoryElements'),
  withHandlers({
    onProfileClick: ({ }) => async () => {

    }
  })
)

const enhance = enhancer(View)

export default enhance