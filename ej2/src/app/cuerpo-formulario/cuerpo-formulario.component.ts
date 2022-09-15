import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuerpo-formulario',
  templateUrl: './cuerpo-formulario.component.html',
  styleUrls: ['./cuerpo-formulario.component.css']
})
export class CuerpoFormularioComponent {

  info: Array<object> = [];

  respuestaValidator: any = null;
  emailValidator: any = null;
  validator: boolean = false;

  public form: FormGroup;
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  respuesta: string = '';


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: '',
      email: '',
      mensaje: '',
      respuesta: ''

    })
  }

  validar() {

    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (this.email.match(emailRegex)) {
      this.emailValidator = true
    } else {
      alert("el formato del email es incorrecto")
      this.emailValidator = false
    }

    if (this.respuesta == '5') {
      this.respuestaValidator = true
    } else {
      alert("la respuesta a la suma es incorrecta")
      this.respuestaValidator = false
    }

    if (this.emailValidator && this.respuestaValidator) {
      this.validator = true
    }
  }
  guardar() {
    this.nombre = this.form.get('nombre')?.value;
    this.email = this.form.get('email')?.value;
    this.mensaje = this.form.get('mensaje')?.value;
    this.respuesta = this.form.get('respuesta')?.value;

    this.validar();

    if (this.validator) {
      this.info.push({
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
        respuesta: this.respuesta

      })

      console.log(this.info)
    }
  }


}
