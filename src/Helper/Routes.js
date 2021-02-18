import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IntervalHookCounter from '../Pages/IntervalHookCounter';
import prevState from '../Pages/PrevState';
import useCallbacks from '../Pages/useCallbacks';
import UseContextComp from '../Pages/UseContextComp';
import UseMemosFile from '../Pages/UseMemosFile';
import useReducerDataFetching from '../Pages/useReducerDataFetching';
import useReducerUseContext from '../Pages/useReducerUseContext';
import useReducrs from '../Pages/useReducrs';
import useReducrsAsReducer from '../Pages/useReducrsAsReducer';
import UseRefInputRef from '../Pages/useRefInputRef';
import UseRefookTimer from '../Pages/UseRefookTimer';
import UseStateArray from '../Pages/UseStateArray';

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={prevState} />
        <Route exact path="/useStateArray" component={UseStateArray} />
        <Route exact path="/intervalCount" component={IntervalHookCounter} />
        <Route exact path="/useContextComp" component={UseContextComp} />
        <Route exact path="/useReducrs" component={useReducrs} />
        <Route exact path="/useReducrsAsReducer" component={useReducrsAsReducer} />
        <Route exact path="/useReducerUseContext" component={useReducerUseContext} />
        <Route exact path="/useReducerDataFetching" component={useReducerDataFetching} />
        <Route exact path="/useCallbacks" component={useCallbacks} />
        <Route exact path="/usememos" component={UseMemosFile} />
        <Route exact path="/useRefInputRef" component={UseRefInputRef} />
        <Route exact path="/UseRefookTimer" component={UseRefookTimer} />
      </Switch>
  );
};

export default withRouter(Routes);
