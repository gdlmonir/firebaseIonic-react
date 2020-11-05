import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best App Ever!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       <IonButton routerLink="/login">Login</IonButton>
       <IonButton routerLink="/registration" color="secondary">Registration</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
