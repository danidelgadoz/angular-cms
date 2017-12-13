import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.init();
      this.activeToogleMenu();
      this.listenRouterChanges();
    }, 250);
  }

  activeToogleMenu() {
    const menuGroupList = $('.menu-group');
    menuGroupList.on('click', null, function(){
      const menuGroupClicked = $(this);
      const menuContainer = menuGroupClicked.next();

      menuContainer.slideToggle();
      menuGroupClicked.toggleClass('open');
      menuGroupList.not(menuGroupClicked).next().slideUp().prev().removeClass('open');
    });
  }

  listenRouterChanges() {
    $('[routerLinkActive=active]').on('click', null, function(){
      $('.selected-left-border').removeClass('selected-left-border');

      if ( $(this).prop('nodeName') == 'DT' ) {
        $('.menu-group').next().slideUp().prev().removeClass('open'); // close all group sections
        $(this).parent().addClass('selected-left-border');
      } else {
        $(this).parent().parent().parent().addClass('selected-left-border');
      }
    });
  }

  init() {
    const activeElement = $('.active[routerLinkActive=active]');

    // check if the active element is in a group section
    if (activeElement.prop('nodeName') == 'DT') {
      activeElement.parent().addClass('selected-left-border');
    } else {
      activeElement.parent().parent().parent().addClass('selected-left-border');
      activeElement.parent().parent().slideToggle().prev().toggleClass('open');
    }
  }

}
