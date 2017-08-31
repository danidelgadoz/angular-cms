import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    setTimeout(()=>{ 
      this.init();
    }, 250);
  }

  init() {
    let backdropElement : any = document.querySelectorAll('[backdrop]')[0];
    backdropElement.onclick = function() {
      this.classList.toggle('active');
      document.getElementsByTagName('app-root')[0].classList.toggle('backdrop-state');
    }
  }

  toggleSideNav() {
    document.getElementsByTagName('app-root')[0].classList.toggle('backdrop-state');
    document.querySelectorAll('[backdrop]')[0].classList.toggle('active');
  }

  logOut() {
    console.log("serrando session...");
    this.authenticationService.logout();
  }

}
