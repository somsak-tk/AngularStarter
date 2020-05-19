import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signin-content',
  templateUrl: './signin-content.component.html',
  styleUrls: ['./signin-content.component.scss']
})
export class SigninContentComponent implements OnInit {

  signinForm: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authService: AuthService
  ) { }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
    this.signinForm = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
    // if (await this.authService.checkAuthenticated()) {
      // await this.router.navigate([this.returnUrl]);
    // }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.signinForm.valid) {
      try {
        const username = this.signinForm.get('username').value;
        const password = this.signinForm.get('password').value;
        // await this.authService.login(username, password);
        await this.router.navigate([this.returnUrl]);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
