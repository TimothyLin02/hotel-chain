import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  customer : Customer = {};
  login = new Login;
  error = false;
  errorMsg?: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.loginService.findCredentials(this.login)
      .subscribe(
        (data : Customer) => {
          console.log("recieved from login service", data);
          this.customer = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

}
