import { Component, OnInit } from '@angular/core';
import { sideNavItems } from '../../_sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = sideNavItems;

  constructor() { }

  ngOnInit(): void {
    console.log('navItems = ', this.navItems);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
