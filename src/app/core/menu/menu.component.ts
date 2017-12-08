import { Component, OnInit } from '@angular/core';
import { UIConfig } from '../config/ui.config'
import { MenuEntry } from '../config/ui.models'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuEntries : MenuEntry[];
  constructor() {
    this.menuEntries = UIConfig.menuEntries;
  }

  ngOnInit() {

  }

}
