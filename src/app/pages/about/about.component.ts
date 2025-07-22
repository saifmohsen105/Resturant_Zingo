import { Component } from '@angular/core';
import { AboutSection1Component } from "./about-section-1/about-section-1.component";
import { AboutSection2Component } from "./about-section-2/about-section-2.component";
import { AboutSection3Component } from "./about-section-3/about-section-3.component";
import { AboutSection4Component } from "./about-section-4/about-section-4.component";
import { AboutSection5Component } from "./about-section-5/about-section-5.component";
import { AboutSection6Component } from "./about-section-6/about-section-6/about-section-6.component";

@Component({
  selector: 'app-about',
  imports: [AboutSection1Component, AboutSection2Component, AboutSection3Component, AboutSection4Component, AboutSection5Component, AboutSection6Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
