import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonNote,
} from "@ionic/react";

import React, { useContext } from "react";

import { warningSharp } from "ionicons/icons";
import "./Menu.css";
import { AuthContext } from "./AuthContext";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Menu: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <IonItem routerLink="/change-password" routerDirection="forward">
            <IonIcon slot="start" md={warningSharp} />
            <IonLabel>ForgotPassword</IonLabel>
          </IonItem>

          <IonItem
            onClick={() => {
              logout();
            }}
          >
            Logout
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
