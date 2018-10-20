import { compose, mapProps } from 'recompose'

const hideHeader = compose(
    mapProps(props => ({
        ...props
    }))
);

hideHeader.navigationOptions = {header: null}
  
export default hideHeader;