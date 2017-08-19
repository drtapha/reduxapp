import React, { Component } from 'react';

export default class student extends Component {
    render() {
        const { students, removeStudent } = this.props;
        return (
            <ul>
                {
                    students.map(student => (
                        <li key={student.id}>
                            {student.name} - mmoyenne {student.average}
                            <button onClick={() =>
                                removeStudent(student.id)}>supprimer
                        </button>
                        </li>
                    ))
                }
            </ul>
        );
    }
}