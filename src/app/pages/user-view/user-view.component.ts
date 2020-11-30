import { Component, OnInit } from '@angular/core';
import { UserDetailsModalComponent } from 'src/app/components/user-details-modal/user-details-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserInterface } from 'src/app/interfaces/users.interface';
import { ModalConfigInterface } from 'src/app/interfaces/modal-config.interface';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const mock = {
  id: 1,
	nome: "Lucas Nogueira",
	cpf: "1243124214",
	cep: "341134134",
	logradouro: "Rua Gilberto Gagliard",
	bairro: "teste",
	localidade: "Mogi",
	uf: "AP"
};

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'uf', 'logradouro', 'opcoes'];
  dataSource: UserInterface[] = [];

  constructor(
    private dialog: MatDialog,
    private service: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initView();
  }

  initView() {
    this.service.getUsers().subscribe(response => {
      this.dataSource = response;
    });
  }

  openDialog(user: UserInterface, isOnlyView: boolean) {
    let dataTemp: ModalConfigInterface = {
      isOnlyView: isOnlyView,
      user: user
    }
    let dialogRef = this.dialog.open(UserDetailsModalComponent, {
      data: dataTemp,
      minHeight: '400px',
      width: '700px'
    });

    if(!isOnlyView) {
      dialogRef.afterClosed().subscribe(result => {
        this.initView();
      });
    }
  }

  update(user: UserInterface) {
    this.openDialog(user, false);
  }

  view(user: UserInterface) {
    this.openDialog(user, true);
  }

  delete(user: UserInterface) {
    this.service.deleteUserById(user.id).subscribe(response => {
      this.openSnackBar('Usuário excluído com sucesso!', 'fechar');
    }, err => {
      this.openSnackBar('Erro ao excluir usuário!', 'fechar');
    }, ()=> {
      this.initView();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
