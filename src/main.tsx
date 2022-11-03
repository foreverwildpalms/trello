import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom'
import Store from "@/Store";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);