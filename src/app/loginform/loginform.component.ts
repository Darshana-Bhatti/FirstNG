import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginSService } from '../service/login-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
constructor(private fb:FormBuilder, private logins:LoginSService, private router:Router){}
loginForm=this.fb.group({
  name:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required]
});
// onLogin(){
//   let user=this.loginForm.value;
//   this.logins.getUserByEmail(email).subscribe(user=>{
//     if(user.length===0){
//       alert('email not Registered')
//     }
//     else{
//        user=user[0]
//        if(user.password===password){
//         alert(`welcome ${user.name}`);
//         this.router.navigate(['home']);
//        }
//        else{
//         alert('Incorrect password!');
//        }
//     }
    
//   })
// }
onLogin() {
 const email = this.loginForm.value.email!;
const password = this.loginForm.value.password!;
  this.logins.getUserByEmail(email).subscribe(users => {
    if (users.length === 0) {
      alert('Email not registered!');
    } else {
      const user = users[0]; 
      if (user.password === password) {
         sessionStorage.setItem('user', JSON.stringify(user)); // ✅ save login
        alert(`Welcome ${user.name}`);
        this.router.navigate(['/home']);
      } else {
        alert('Incorrect password!');
      }
    }
  });
}

}
