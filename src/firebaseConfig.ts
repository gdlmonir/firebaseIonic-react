import * as firebase from 'firebase'
import { isError } from 'util';
import { toast } from './toast';

const config ={
    apiKey: "AIzaSyCQs6Yen4fk3E4Tsfw9yYBzshOeHKbLVrw",
    authDomain: "ionic-project-c13e0.firebaseapp.com",
    databaseURL: "https://ionic-project-c13e0.firebaseio.com",
    projectId: "ionic-project-c13e0",
    storageBucket: "ionic-project-c13e0.appspot.com",
    messagingSenderId: "335465810144",
    appId: "1:335465810144:web:b522fa9d795781aa946885",
    measurementId: "G-MM49M9FSP7"
}


firebase.initializeApp(config);

export async function loginUser(username: string, password: string){
const email = `${username}@codeman.com`
    try{
    const  res = await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log(res);
    return true

    }catch(error){
        toast(error.message, 4000)
        return false

    }
}

export async function registrationUser(username: string, password: string){
    const email = `${username}@codeman.com`

    try{
        const  res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
        return true;
    }catch(error){
        console.log(error)
        toast(error.message, 4000)
        return false

    }

}