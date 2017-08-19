let id = 1;
const studentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            id++;
            const student = { ...action.student, id };

            return [
                ...state,
                student
            ]
        case 'EDIT_STUDENT':
            return state.map(student => {
                if (student.id == action.student.id) {
                    return action.student
                }
                return student;
            })
        case 'REMOVE_STUDENT':
            return state.filter(student => student.id != action.id);
        default:
            return state;
    }

}

export default studentsReducer; 