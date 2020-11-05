export async function toast(message: string, duraton = 200) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duraton;
  
    document.body.appendChild(toast);
    return toast.present();
  }