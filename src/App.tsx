import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Private from "./Private";
import { Authprovider } from "./components/AuthContext";
import Login from "./pages/Login";

const App: React.FC = () => (
  <IonApp>
    <Authprovider>
      <IonReactRouter>
        <Switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/private">
            <Private />
          </Route>
          <Redirect from="/" to="/private/home" exact />
        </Switch>
      </IonReactRouter>
    </Authprovider>
  </IonApp>
);

export default App;
