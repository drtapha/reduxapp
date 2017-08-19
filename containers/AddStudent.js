import { connect } from 'react-redux';
import actions from '../store/actions';

import AddStudent from '../components/AddStudent';

const mapDispatchToProps = (dispatch) => ({
    addStudent: student => dispatch(actions.addStudent(student))
});

export default connect(undefined, mapDispatchToProps)(AddStudent); 

//ici le composant n'attend aucune valeur du state donc c'est pourquoi 
//je lui passe undefined