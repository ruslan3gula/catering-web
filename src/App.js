import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "./Login";
import { Signup } from "./Signup";
import { Day } from "./Day";
import { Calendar } from "./Calendar";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Calendar} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/:day" component={Day} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
