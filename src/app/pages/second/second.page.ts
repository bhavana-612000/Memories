import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  price:any ='' ;
  constructor(
    _route:ActivatedRoute
  ) {
    this.price = this.price.route.snapshot.params['price'];
   }

  ngOnInit() {
  }

}
