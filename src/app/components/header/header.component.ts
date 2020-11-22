import { Component, OnInit } from '@angular/core';
//savi
import * as jQuery from 'jquery';
//savf

@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Esto es para que cuando hagamos scroll, cambie su background
    $(window).scroll(function(){
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
    });
     
  }

}

 

 
