import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { ufs as UF_LIST } from '../../ufs.mock';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from 'src/app/interfaces/users.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  formulario: FormGroup;
  ufOption: string;
  ufList: any[];
  errorMatcher = new MyErrorStateMatcher();

  constructor(
    private builder: FormBuilder,
    private service: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.ufList = UF_LIST;
    this.initFormGroup();
  }

  initFormGroup() {
    this.formulario = this.builder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required]
    });
  }

  submitForm() {
    let payload: UserInterface;
    payload = this.formulario.value;

    if(!this.formulario.invalid) {
      this.service.createUser(payload).subscribe(response => {
        
      },
      err => {
        this.openSnackBar('Erro ao cadastrar', 'Fechar');
      }, ()=> {
        this.openSnackBar('Cadastro efetuado com sucesso', 'Fechar');
      });
      
    } else {
      this.openSnackBar('Formulário não foi preenchido corretamente', 'Fechar');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
