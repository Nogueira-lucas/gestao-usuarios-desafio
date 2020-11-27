import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService - Service', () => {
  let service: UserService;

  const mock = {
    id: 1,
    nome: "Maria Antonieta DeLasNieves",
    cpf: "599758673894",
    cep: "64856894965",
    logradouro: "Rua 8",
    bairro: "Vila do Chavez",
    localidade: "São Paulo",
    uf: "SP"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user list', ()=> {
    expect( service.getUsers() ).toBeTruthy();
  });

  it('should post a new user', ()=> {
    expect( service.createUser(mock) ).toBeTruthy();
  });

  it('should delete a user', ()=> {
    expect( service.deleteUserById(1) ).toBeTruthy();
  });

  it('should update user list', ()=> {
    expect( service.updateUser(1, mock) ).toBeTruthy();
  })
});
