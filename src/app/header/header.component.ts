import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    //la ruta será '/' en vez de '/login' para poder modificarla desde el app routing
    this.router.navigate(['/']);
  }

}
