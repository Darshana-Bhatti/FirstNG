import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects';
  constructor(private router:Router){}
    ngOnInit(): void {
    window.onunload = () => {
      sessionStorage.clear(); // ✅ Automatically logs out on refresh or tab close
    };
  }
  logout() {
  sessionStorage.clear(); // ✅ clear saved user
  this.router.navigate(['/login']); // ✅ go back to login
}
}
