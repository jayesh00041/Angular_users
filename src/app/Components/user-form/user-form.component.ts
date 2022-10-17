import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: any = '';
  id: any;

  error = {
    required: 'Please enter the value.',
    minLength: `Please enter minimunm 3 letters.`,
    maxLength: `Please enter maximunm 50 letters.`,
    email: 'Please enter correct email.'
  }

  user: any = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  };


  constructor(private fb: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    this.route.params.subscribe(
      params => {
        this.id = parseInt(params['id']);
        if (this.id !== 0) {
          userService.getUser(this.id).subscribe(
            (user: any) => {
              this.userForm.patchValue(user.data);
              console.log(user.data);
              this.user = user.data;
            }),
            (err: any) => console.log(err);
        } else {
          this.userForm.reset();
        }
      }
    )
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]],
      avatar: [''],
    })

  }

  save(userData: any) {
    if (this.userForm.valid && this.id === 0) {
      this.userService.addUser(userData.value);
      this.router.navigate(['../users'])
    }
    if (this.userForm.valid && this.id !== 0) {
      this.userService.updateUser({ ...this.user, ...userData.value })
      this.router.navigate(['../users'])
    }

  }

}
