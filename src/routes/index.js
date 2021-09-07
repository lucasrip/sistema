import {Switch} from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Custumers from '../pages/Custumers';
import New from '../pages/New';


export default function Routes()
{
    return(
    <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp}/>
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/custumers" component={Custumers} isPrivate/>
      <Route exact path="/new" component={New} isPrivate/>
      <Route exact path="/new/:id" component={New} isPrivate/>
    </Switch>
    )
}