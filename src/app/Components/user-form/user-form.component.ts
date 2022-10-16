import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm : any = '';
  
  
  error = {
    required : 'Please enter the value',
    minLength : `Please enter minimunm 3 letters`,
    maxLength : `Please enter maximunm 50 letters`
  }
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      last_name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]],
      avatar : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    })
    
  }

}
