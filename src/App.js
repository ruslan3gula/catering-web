import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "./Login";
import { Signup } from "./Signup";
import { Day } from "./Day";
import { Calendar } from "./Calendar";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import { BasketProvider } from "./backendMock/basket/BasketContext";
import { Basket } from "./backendMock/basket/Basket";
import { BasketList } from "./BasketList";

export default function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/">
              <Basket />
              <Calendar />
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/:day" component={Day} />
          </Switch>
        </Router>
      </BasketProvider>
    </AuthProvider>
  );
}
