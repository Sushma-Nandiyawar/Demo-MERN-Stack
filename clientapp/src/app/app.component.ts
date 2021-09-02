import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articleslist = [];
  tagslist = [];
  constructor(private ds: DataService) {
    ds.display().subscribe((data: any) => this.articleslist = data);
  }

}
