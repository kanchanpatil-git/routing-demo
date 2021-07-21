import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  userData;

  constructor(private service : UserDataService){
     this.service.getData().subscribe(data=>{
      this.userData=data;
     })
  }
}
