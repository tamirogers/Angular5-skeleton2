import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {

  constructor(private requestService: RequestService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.requestService.selectedRequest = {
      RowNameId: null,
      TeacherID: '',
      Destination: '',
      Teacher: '',
      TeacherEmail: '',
      SchoolName: '',
      SchoolNumber: '',
      Gradelevel: '',
      DestinationAddress: '',
      SchoolDaysMissed: '',
      TransportationType: '',
      Purpose: '',
      PermissinSlips: ''

    };
  }

  onSubmit(form: NgForm) {
    if (form.value.RowNameID == null) {
      this.requestService.postRequest(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.requestService.getRequestlist();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        });
    } else {
      this.requestService.putRequest(form.value.RowNameID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.requestService.getRequestlist();
        this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }


}

