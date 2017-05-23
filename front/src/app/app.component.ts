import { Component } from '@angular/core';
import {PhonesService} from './phones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhonesService]
})
export class AppComponent {
  title = 'Angular PhoneBook';
}
