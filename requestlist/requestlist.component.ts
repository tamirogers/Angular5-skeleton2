import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import { Request } from '../shared/request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent implements OnInit {

  constructor(private requestService: RequestService, private toastr: ToastrService) { }

  ngOnInit() {
    this.requestService.getRequestlist();
  }

  showForEdit(req: Request) {
    this.requestService.selectedRequest = Object.assign({}, req);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.requestService.deleteRequest(id)
      .subscribe(x => {
        this.requestService.getRequestlist();
        this.toastr.warning('Deleted Successfully","Employee Register');
      });
    }
  }

}
