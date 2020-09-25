import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Role} from '../../model/role';
import {UserService} from '../../service/user/user.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  toggleEnabled = false;
  toggleAdmin = false;

  user = new User();

  form = {
    avatar: undefined,
    enabled: false,
    admin: false,
    name: undefined,
    email: undefined,
    password: undefined,
    submit: {
      disabled: true
    }
  };

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  signUp(event): boolean {

    const user = new User();

    user.name = this.form.name;
    user.username = this.form.email;
    user.enabled = this.form.enabled;
    user.password = this.form.password;
    user.roles.push(new Role('ROLE_COMMON'));

    if (this.form.admin) {
      user.roles.push(new Role('ROLE_ADMIN'));
    }

    try {
      this.authService.signUp(user);
      return true;
    }
    catch (err) {
      return false;
    }

  }

  ngOnInit(): void {
    this.carregarFormulario();
  }

  onEnableUser(): void {
    this.toggleEnabled = !this.toggleEnabled;
  }

  onSetAdminUser(): void {

  }

  changeAvatar(): void {
    const fileElement = document.createElement('input');
    fileElement.setAttribute('id', 'dynamic-input-file');
    fileElement.setAttribute('type', 'file');
    fileElement.click();
    fileElement.addEventListener('change', () => {
      let imgFile = fileElement.files[0];
      if (imgFile.type !== 'image/jpeg' && imgFile.type !== 'image/svg+xml'){
        return;
      }

      let formData = new FormData()
      formData.append('file', imgFile);

      const reader = new FileReader();

      reader.onload = function (e) {
        document.querySelector('#user-img').setAttribute('src', e.target.result.toString());
      };

      reader.readAsDataURL(fileElement.files[0]);
    })
  }

  // Carrega os campos do formulário com os dados do usuário
  carregarFormulario(): void {
    this.form.avatar = undefined;
    this.form.enabled = this.user.enabled;
    this.form.admin = this.user.roles.some(r => r.roleName === 'ADMIN');
    this.form.name = this.user.name;
    this.form.email = this.user.username;
    this.form.password = this.user.password;
  }

  // Limpa todos os campos do formulário
  limparFormulario(): void {
    this.form.avatar = undefined;
    this.form.enabled = undefined;
    this.form.admin = undefined;
    this.form.name = undefined;
    this.form.email = undefined;
    this.form.password = undefined;
    if (document.querySelector('#dynamic-input-file')) {
      document.querySelector('#dynamic-input-file').remove();
    }
  }

}
