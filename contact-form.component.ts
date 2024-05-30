import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  successMessage: string | null = null;
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulario enviado', form.value);
      form.resetForm();
      this.successMessage = 'Envio exitoso';
      
      // Ocultar el mensaje después de unos segundos
      setTimeout(() => {
        this.successMessage = null;
      }, 3000); // El mensaje desaparecerá después de 3 segundos
    }
  }
}
