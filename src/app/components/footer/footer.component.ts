import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  anyo:number;

  constructor() { 
    this.anyo = new Date().getFullYear();
  }

  ngOnInit(): void {

  }

}
