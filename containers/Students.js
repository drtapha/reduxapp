import { connect } from 'react-redux';
import actions from '../store/actions';

import Students from '../components/Students';

const filterStudents = (students, filter) => {
    if (filter === '+10') {
        return students.filter(student => student.average >= 10)
    }
    if (filter === '-10') {
        return students.filter(student => student.average < 10);
    }
    return students;
} // cette fonction permet de filter les étudiants selon leur moyenne

const mapStateToProps = (state) => {
    const { students, filter } = state;
    return { students : filterStudents(students,filter) };
}

const mapDispatchToProps = (dispatch) => ({
    removeStudent: id => dispatch(actions.removeStudent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Students);