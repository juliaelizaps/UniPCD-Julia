// Seu arquivo de rotas principal (App.js ou index.js)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgottenPassword/ForgotPassword';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Outras rotas */}
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </Router>
    );
};

export default App;
