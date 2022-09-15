import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})

export class AltaClienteComponent implements OnInit {
  lista: Array<object> = [];

  public  clienteForm: FormGroup;
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';


  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: '',
      cif: '',
      direccion: '',
      grupo: ''
    })
  }

  ngOnInit(): void {
  }
  guardarCliente() {
    this.nombre = this.clienteForm.get('nombre')?.value;
    this.cif = this.clienteForm.get('cif')?.value;
    this.direccion = this.clienteForm.get('direccion')?.value;
    this.grupo = this.clienteForm.get('grupo')?.value;

    this.lista.push({
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    })

    console.log(this.lista)
  }
}
