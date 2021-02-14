import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IntervalHookCounter from '../Pages/IntervalHookCounter';
import prevState from '../Pages/PrevState';
import UseContextComp from '../Pages/UseContextComp';
import useReducerDataFetching from '../Pages/useReducerDataFetching';
import useReducerUseContext from '../Pages/useReducerUseContext';
import useReducrs from '../Pages/useReducrs';
import useReducrs1 from '../Pages/useReducrs1';
import UseStateArray from '../Pages/UseStateArray';

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={prevState} />
        <Route exact path="/useStateArray" component={UseStateArray} />
        <Route exact path="/intervalCount" component={IntervalHookCounter} />
        <Route exact path="/useContextComp" component={UseContextComp} />
        <Route exact path="/useReducrs" component={useReducrs} />
        <Route exact path="/useReducrsComp" component={useReducrs1} />
        <Route exact path="/useReducerUseContext" component={useReducerUseContext} />
        <Route exact path="/useReducerDataFetching" component={useReducerDataFetching} />
      </Switch>
  );
};

export default withRouter(Routes);
