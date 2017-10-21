import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';
import promise from 'redux-promise';


/*components*/
import reducers from './reducers';
import Starter from './containers/home';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Starter} />
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
