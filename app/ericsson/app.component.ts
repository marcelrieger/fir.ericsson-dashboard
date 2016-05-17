import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
 
import { EricssonDashboardComponent } from '../ericsson-dashboard/ericsson-dashboard.component';

@Component({
  selector: 'ericsson',
  template: '<router-outlet></router-outlet>',
  //templateUrl: 'app/ericsson/app.component.html',
  //TODO styleUrls: ['app/ericsson/main.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: EricssonDashboardComponent,
    useAsDefault: true
  }
])
export class EricssonComponent {
}
