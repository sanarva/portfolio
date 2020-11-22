import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Animaciones
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({   
  selector: 'app-contact',
  templateUrl: './contact.component.html',   
  styleUrls: ['./contact.component.css'],
  //Animaciones
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class ContactComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario();
  }  
  
  ngOnInit(): void {
  }
   
  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get telefonoNoValido(){
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched
  }

  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  get comentarioNoValido(){
    return this.forma.get('comentario').invalid && this.forma.get('comentario').touched
  }

  crearFormulario(){
      this.forma = this.fb.group({
        nombre    : ['', [Validators.required, Validators.minLength(2)]],
        telefono  : ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
        email     : ['', [Validators.required, Validators.pattern('([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')]],                                                        
        comentario: ['', [Validators.required, Validators.minLength(10)]]
      });
  }
 
  enviar(){

    if ( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else if ( this.forma.valid ) {
      alert("Su mensaje ha sido enviado correctamente.");
      this.forma.reset(); //Con esto limpiamos el formulario
    }
     
  }

} 
