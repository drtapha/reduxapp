import { connect } from 'react-redux';
import actions from '../store/actions';

import Filter from '../components/Filter';

const mapStateToProps = (state) => {
    const { filter } = state;
    return { filter };
}

const mapDispatchToProps = (dispatch) => ({
    onFilter : (filter) => dispatch(actions.setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);