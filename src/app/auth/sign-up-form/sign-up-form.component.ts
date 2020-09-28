import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  @ViewChild('formSignUp') formSignUp;

  toggleEnabled = false;
  toggleAdmin = false;

  user = new User();

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  signUp(event): boolean {
    console.log('signup');
    console.log(event);
    this.formSignUp.reset();
    return false;
  }

  ngOnInit(): void {

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
}
