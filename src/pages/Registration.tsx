import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import { toast } from '../toast';
import { registrationUser } from '../firebaseConfig'; 
import './Home.css';

const Registration: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const [cpassword, setCPassword]= useState('');

    async function registration(){
       if(password !== cpassword){
         return toast(`Passwords do not match!`)
       }

       if(username ==='' || password ===''){
         return toast(`Username and password are required!`)
       }

       const res = await registrationUser(username,password)
       if(res){
         toast(`You have registration successfully`)
       }
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration page!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
        <IonButton onClick={registration}>Registration</IonButton>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
