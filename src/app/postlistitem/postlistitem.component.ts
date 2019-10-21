import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-list/post';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {

  constructor(public post:Post) { }
  @Input() title:string; 
  @Input() content:string;
  @Input()loveit:number;
  @Input()datecr:Date;

  ngOnInit() {
  }

}
