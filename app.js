import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import appStore from './store/appStore';

import AddStudent from './containers/AddStudent';
import Filter from './containers/Filter';
import Students from './containers/Students';


const App = () => (
    <Provider store={appStore}>
        <div>
            <AddStudent />
            <h2>Liste des etudiants</h2>
            <Students />
            <Filter />
        </div>
    </Provider>
)

ReactDOM.render(<App />,
    document.getElementById('app')
);