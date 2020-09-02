import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { IonSplitPane, IonRouterOutlet } from "@ionic/react";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import { AuthContext } from "./components/AuthContext";

const Private: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <IonSplitPane contentId="main">
      <Menu></Menu>
      <IonRouterOutlet id="main">
        <Route path="/change-password" exact>
          <ChangePassword></ChangePassword>
        </Route>
        <Route
          path="/home"
          exact
          render={() => {
            console.log("normaly redirect to home");
            return <Home></Home>;
          }}
        />
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default Private;
