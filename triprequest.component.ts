import { Component, OnInit } from '@angular/core';
import {RequestService} from './shared/request.service';

@Component({
  selector: 'app-triprequest',
  templateUrl: './triprequest.component.html',
  styleUrls: ['./triprequest.component.css'],
  providers : [RequestService]
})
export class TriprequestComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

}
