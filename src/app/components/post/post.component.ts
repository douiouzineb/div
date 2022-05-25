import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent implements OnInit {
  @Input('post') pt: any;
  @Input('hello') msg: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.pt);
  }
  jsonstringfy(obj: any) {
    // console.log(this.pt);

    return JSON.stringify(obj);
  }
  postcommentaire() {
    this.pt.PK;
  }
}
