import { Component, OnInit } from '@angular/core';
import {Post} from'./post';

@Component({
  selector: 'app-postlist',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  d=new Date();
  post1=new Post("Mon prrmier post",
  "loren ipsum dolor sit amet consecteur etit sed do eiusmod tempor incididunt ut labore et dclcre magna aliiqua  ut enim ad minim veniam quis"
  ,0,this.d);
  
  post2=new Post("Mon Deuxiéme post",
  "loren ipsum dolor sit amet consecteur etit sed do eiusmod tempor incididunt ut labore et dclcre magna aliiqua  ut enim ad minim veniam quis"
  ,0,this.d);
  
  post3=new Post("Encore post",
  "loren ipsum dolor sit amet consecteur etit sed do eiusmod tempor incididunt ut labore et dclcre magna aliiqua  ut enim ad minim veniam quis"
  ,0,this.d);
  
     postlist: Array<Post> = [this.post1,this.post2,this.post3];
  ngOnInit() {
  }

}
