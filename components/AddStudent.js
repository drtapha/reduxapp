import React, { Component } from 'react';

export default class AddStudent extends Component {
    add = () => {
        const name = this.refs['name'].value;
        const average = this.refs['average'].value;
        const student = { name, average };
        this.props.addStudent(student);
    }
    render() {
        return (
            <div >
                <div >
                    <h3> Ajouter Etudiant </h3>
                    <div >
                        <label> Nom de l'étudiant</label>
                        <input type="text" ref="name" />
                    </div>
                    <div >
                        <label> Moyenne de l'étudiant </label>
                        <input type="number" step="1" min="1" max="20" ref="average" />
                    </div>
                    <button onClick={this.add}>ajouter</button>
                </div>
            </div>
        );
    }
}
