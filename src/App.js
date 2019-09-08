import React, {Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import * as actions from './store/actions/index';

const Checkout = lazy(() => import('./containers/Checkout/Checkout'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const BurgerBuilder = lazy(() => import('./containers/BurgerBuilder/BurgerBuilder'));
const Logout = lazy(() => import('./containers/Auth/Logout/Logout'));

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
         <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
         </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
             <Switch>
              <Route path='/checkout' component={Checkout} />
              <Route path='/orders' component={Orders} />
              <Route path='/auth' component={Auth} />
              <Route path='/logout' component={Logout} />
              <Route path='/' exact component={BurgerBuilder} />
            </Switch>
      )
    }

    return (
      <div>
        <Layout>
          <Suspense fallback={<Spinner />}>
            {routes}
          </Suspense>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
