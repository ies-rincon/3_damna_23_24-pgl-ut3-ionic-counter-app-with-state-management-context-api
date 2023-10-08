import { IonContent, IonPage, IonText } from "@ionic/react";
import Header from "../components/Headers";
import { useCounter } from "../context/CounterContext";
import { useLanguageApp } from "../context/LanguageAppContext";
import Languages from "../constants/Languages";

const Tab2: React.FC = () => {
  const { clickCounter } = useCounter();
  const { languageApp } = useLanguageApp(); // Usa el contexto
  return (
    <IonPage>
      <Header title={`${Languages[languageApp].tab} 2`} />
      <IonContent fullscreen>
        <div className="container">
          <IonText>
            <h3>{Languages[languageApp].counter}:</h3>
            <h1>{clickCounter}</h1>
            <p>Clicks</p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
