import {
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { refresh, language } from "ionicons/icons";
import { useCounter } from "../context/CounterContext";
import { useLanguageApp } from "../context/LanguageAppContext";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { handleRefresh } = useCounter();
  const { onChangeLanguageApp } = useLanguageApp(); // Usa el contexto
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {title}{" "}
          <IonIcon
            icon={refresh}
            className="ion-margin-start ion-float-right"
            color="primary"
            onClick={handleRefresh}
          ></IonIcon>
          <IonIcon
            icon={language}
            className="ion-float-right"
            color="primary"
            onClick={onChangeLanguageApp}
          ></IonIcon>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
