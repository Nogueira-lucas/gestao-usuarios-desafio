import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInterface } from 'src/app/interfaces/users.interface';
import { ModalConfigInterface } from 'src/app/interfaces/modal-config.interface';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
import { ufs } from 'src/app/ufs.mock';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent implements OnInit {
  formulario: FormGroup;
  user: UserInterface;
  ufList: any[];
  errorMatcher = new MyErrorStateMatcher();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalConfigInterface,
    public dialogRef: MatDialogRef<any>,
    private service: UserService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.ufList = ufs;
    this.user = this.data.user;
    this.initForm();
  }

  initForm() {
    this.formulario = this.builder.group({
      id: [this.user.id, Validators.required],
      nome: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      cpf: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      cep: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      logradouro: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      bairro: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      localidade: [{value: '', disabled: this.data.isOnlyView }, Validators.required],
      uf: [{value: '', disabled: this.data.isOnlyView }, Validators.required]
    });

    this.formulario.setValue(this.data.user);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  atualizar() {
    let payload = this.formulario.value;

    if(!this.formulario.invalid) {
      this.service.updateUser(this.user.id, payload).subscribe(response => {
        this.openSnackBar('Usuário foi atualizado!', 'fechar');
      }, (err) => {
        this.openSnackBar('Erro ao atualizar usuário!', 'fechar');
      },() => {
        //this.openSnackBar('Usuário foi atualizado!', 'fechar');
        this.dialogRef.close();
      });
    } else {
      this.openSnackBar('Campos não foram preenchidos corretamente!', 'fechar');
    }
  }

}
