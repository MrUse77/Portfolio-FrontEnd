import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from './service/portfolio.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  susbcription?: Subscription;

constructor(
  private PortfolioService: PortfolioService,
  private router: Router,
  private http:HttpClient
){

}

ngOnInit(): void {
}
toggleInterface(){
  this.PortfolioService.toggleInterface();
}
hasRoute(route: string){
  return this.router.url == route
}
}
