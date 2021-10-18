import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./components/language/i18next";


ReactDOM.render(
    <Suspense fallback={"Loader..."}>
        <App/>
    </Suspense>,
    document.getElementById('root')
);

