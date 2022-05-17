import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'it-ironman-demo-angular-material';
  constructor(
    private matIconRegistry:MatIconRegistry,private domSanitizer : DomSanitizer
  ){
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg')
    );
    this.matIconRegistry.setDefaultFontSetClass('fa');;
  }
  ngOnInit() {}


}
