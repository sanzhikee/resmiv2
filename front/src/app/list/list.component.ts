import { Component, OnInit } from '@angular/core';
import {PhonesService} from '../phones.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.phonesService.getPhones().subscribe(
      data => {
        this.phonesService.phones = data;
      }
    );
  }

  update(id){
    this.phonesService.onChangeCurrent(id);
  }

  delete(id){
    let index = this.phonesService.phones.indexOf(this.phonesService.phones.find(item => item.id === id));
    this.phonesService.phones.splice(index, 1);
    this.phonesService.deletePhone(id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
