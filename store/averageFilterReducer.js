const averageFilter = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_AVERAGE_FILTER':
            return action.filter;
        default:
            return state;
    }
}; 

export default averageFilter;