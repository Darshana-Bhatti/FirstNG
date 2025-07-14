import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginSService } from '../service/login-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
  constructor(private fb:FormBuilder, private logins:LoginSService,private router:Router){}
   registrationForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  onRegister(){
    const user=this.registrationForm.value;
    this.logins.register(user).subscribe(()=>{
      alert("Registred Successfully !");
      this.router.navigate(['login'])
    })
  }
}
