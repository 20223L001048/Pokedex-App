import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  email: string = '';
  password: string = '';
  emailValid: boolean = true;
  passwordValid: boolean = true;

  constructor(private router: Router, private alertController: AlertController) {}

  validateEmail() {
    this.emailValid = /^20223l001048@utcv\.edu\.mx$/.test(this.email);
  }
  
  validatePassword() {
    // La expresión regular verifica si la contraseña solo contiene números y letras
    this.passwordValid = /^[a-zA-Z0-9]+$/.test(this.password);
}

  login() {

    if (this.email.trim() !== '' && this.password.trim() !== '') {
      this.validateEmail();
      // this.validatePassword();
      
      if (this.emailValid && this.passwordValid) {

        this.router.navigateByUrl('/perfil');
      } else {

        this.showAlert('Credenciales inválidas', 'Por favor, verifica tu correo y contraseña.');
      }
    } else {

      this.showAlert('Campos vacíos', 'Por favor, completa todos los campos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
