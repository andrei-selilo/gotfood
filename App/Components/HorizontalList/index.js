import { compose, withHandlers, withState, withPropsOnChange, withProps, lifecycle } from 'recompose'
import View from './view'

const enhancer = compose(
  withState('error', 'setError'),
  withState('titleFocused', 'setTitleFocused'),
  withState('blocksSelected', 'setBlocksSelected', []),
  withHandlers({
    onTitleClick: ({ setTitleFocused, setBlocksSelected }) => async (title) => {
      setTitleFocused(title)
      setBlocksSelected([])
    },
    onElementClick: ({ error, listType, blocksSelected, setBlocksSelected }) => async (elementId) => {
      console.log(` Hlist ${listType} onElementClick : elementId`, elementId)
      if (listType === 'radio') {
        setBlocksSelected([elementId])
      } else if (listType === 'check'){
        !blocksSelected.includes(elementId) && setBlocksSelected([...blocksSelected, elementId])
      }
    },
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
