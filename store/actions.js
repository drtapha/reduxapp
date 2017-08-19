const actions = {
    addStudent: (student) => ({
        type: 'ADD_STUDENT',
        student
    }),
    removeStudent: (id) => ({
        type: 'REMOVE_STUDENT',
        id
    }),
    setFilter: (filter) => ({
        type: 'SET_AVERAGE_FILTER',
        filter
    })
};

export default actions; 