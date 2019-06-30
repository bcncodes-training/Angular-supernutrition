import { Component, OnInit, Input } from '@angular/core';
import Food from '../foods'


@Component({
  selector: 'sb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // @Input() foods:Food;
  constructor() { }

  ngOnInit() {
  }

}
