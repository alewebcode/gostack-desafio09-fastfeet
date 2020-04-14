import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import OrderForm from '~/pages/OrderForm';
import Deliverymans from '~/pages/Deliverymans';
import DeliverymanForm from '~/pages/DeliverymanForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/orderform" component={OrderForm} isPrivate />
      <Route path="/deliverymanform" component={DeliverymanForm} isPrivate />
      <Route path="/deliverymans" component={Deliverymans} isPrivate />
    </Switch>
  );
}
