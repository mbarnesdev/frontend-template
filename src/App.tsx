import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation, Home, Form, Todo } from '@/components';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Fragment>
  );
};

export default App;
