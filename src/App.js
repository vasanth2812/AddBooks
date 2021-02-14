import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/components/Header';
import HomePage from './modules/Home';
import AddBook from './modules/AddBook';
import './shared/styles/global.scss';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <div className="mg-top-17">
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
            <Switch>
              <Route path="/add-book" exact component={AddBook} />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
