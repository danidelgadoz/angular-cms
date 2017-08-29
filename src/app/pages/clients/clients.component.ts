import { Component, OnInit } from '@angular/core';

import {Page} from "../../_models/page";
import {Client} from "../../_models/client";
import { ClientService } from '../../_services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  deleteConfirmation = false;  
  page = new Page();
  rows = new Array<any>();
  selected = [];
  isLoading: boolean;
  
  columns = [
    { prop: 'first_name', name: 'Firstname' },
    { prop: 'last_name', name: 'Lastname' },
    { prop: 'email', name: 'Email' },
    { prop: 'mobile_phone', name: 'Mobile Phone' },
    { prop: 'phone', name: 'Phone' },
    { prop: 'trademark', name: 'Trademark' }
  ];  

  constructor(private clientService: ClientService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo){    
    this.page.pageNumber = pageInfo.offset;
    this.page.size = pageInfo.limit ? pageInfo.limit : this.page.size;    
    
    this.isLoading = true;
    this.clientService.list(this.page).subscribe(pagedData => {
      this.isLoading = false;
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected);
    console.log(this.selected[0]);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  delete(): void {
    console.log("deleting..");
    document.querySelectorAll('[loadingBackdrop]')[0].classList.toggle('active');    

    this.clientService.delete(this.selected[0].id)
      .subscribe(data => {
        this.setPage({offset:0});
        document.querySelectorAll('[loadingBackdrop]')[0].classList.toggle('active');
      });
  }

}