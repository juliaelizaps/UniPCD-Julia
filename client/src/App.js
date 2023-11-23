import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';

import theme from './theme/theme';

import { Cadastro } from './pages/Cadastro';
import { Teste } from './pages/teste';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home/Home';
import { LoginForm } from './pages/LoginForm';
import { Login } from './pages/Login';
import { Cad } from './pages/Cad';
import { ForgottenPassword } from './pages/ForgottenPassword';

function App() {
    return (
        <ChakraBaseProvider resetCSS theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/loginForm" element={<LoginForm />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/teste" element={<Teste />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/cad" element={<Cad />} />
                    <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
                </Routes>
            </BrowserRouter>
        </ChakraBaseProvider>
    );
}

export default App;

