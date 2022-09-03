import * as React from 'react';
import LoginForm from './Page/login/login';
import { Route, Routes } from "react-router-dom";
import NotFound from './Page/Session/NotFound';
import Dashboard from './Page/Dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <LoginForm />
      <Routes>
        <Route exact path='*' element={<NotFound />} />
        <Route path='/' element={<LoginForm />} />
        <Route path='dashboard' element={<Dashboard />} />

      </Routes>
    </div>

  );
}

export default App;
