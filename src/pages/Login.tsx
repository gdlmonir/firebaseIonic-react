import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {loginUser} from '../firebaseConfig';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { toast } from '../toast';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');

    async function login(){
      const res = await loginUser(username,password)
      if(res){
        toast(`You have logged`)
      }

    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login page!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={login}>Login</IonButton>
        <p>New here? <Link to="/registration">Registration</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
