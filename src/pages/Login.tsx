import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import React, { useContext } from "react";

import { AuthContext } from "../components/AuthContext";
import { Redirect } from "react-router";

const Login: React.FC = () => {
  const { loggedIn, login } = useContext(AuthContext);

  if (loggedIn) {
    console.log("loggedIn");

    return <Redirect to="/private/home"></Redirect>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          onClick={() => {
            login();
          }}
        >
          LOGIN
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
