import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";
import { AuthContext } from "./AuthContext";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Forgot password",
    url: "/private/change-password",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const Menu: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonItem routerLink={appPage.url} routerDirection="forward">
                <IonIcon
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            );
          })}
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
