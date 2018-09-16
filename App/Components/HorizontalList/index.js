import { compose, withHandlers, withState, withPropsOnChange, withProps, lifecycle } from 'recompose'
import View from './view'

const enhancer = compose(
    withState('error', 'setError'),
    withState('titleFocused', 'setTitleFocused'),
    withHandlers({
      onTitleClick: ({ setTitleFocused }) => async (title) => {
        
      }
    }),
    lifecycle({
      componentDidMount: async function () {
        if (!this.props.titleFocused) {
          this.props.setTitleFocused(Object.keys(this.props.elements)[0])
        }
      },
    }),
);

export default enhancer(View);
