import { Component, OnInit } from '@angular/core';
import {PhonesService} from '../phones.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  current = {
    id: 0,
    name: '',
    phone: ''
  };
  selected = false;

  name: string;
  phone: string;

  constructor(private phonesService: PhonesService) {
  }

  ngOnInit() {
    this.phonesService.currentId$.subscribe(
      phone => {
        this.current = phone;
        this.name = phone.name;
        this.phone = phone.phone;
        this.selected = true;
      });
  }

  update(name, phone, currentId){
    this.phonesService.updatePhone(currentId, name, phone).subscribe(
      data => {
        let index = this.phonesService.phones.indexOf(this.phonesService.phones.find(item => item.id === currentId));
        console.log(index);
        this.phonesService.phones[index] = {id: data.id, name: data.name, phone: data.phone};
      }
    );

      this.current = {
      id: 0,
      name: '',
      phone: ''
    };

    this.phone = "";
    this.name = "";

    this.selected = false;
  }
  save(){
    this.phonesService.savePhone(this.name, this.phone).subscribe(
      data => {
        this.phonesService.phones.push({name: data.name, phone: data.phone});
      }
    );

    this.phone = "";
    this.name = "";
  }

}
