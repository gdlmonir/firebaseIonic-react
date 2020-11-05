import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example page!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       Hello i am here!!
      </IonContent>
    </IonPage>
  );
};

export default Home;
