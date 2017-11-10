import { Component, OnInit } from '@angular/core';
import { TreesService } from './trees.service';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
  providers: [TreesService]
})
export class TreesComponent implements OnInit {

  treesItem: Array<any>;
  constructor(private _TreesService: TreesService) { }

  ngOnInit() {
    this.treesItem = this._TreesService.treesData;
  }

}
