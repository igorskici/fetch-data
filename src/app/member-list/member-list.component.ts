import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AlertifyService } from '../_services/alertify.service';
import { FatchDataService } from '../_services/fatchData.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})



export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private fatchData: FatchDataService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.fatchData.fetchData().subscribe((res) => {

      this.users = res;
      
    }, error => {
      this.alertify.error(error);
    });
  }

}
