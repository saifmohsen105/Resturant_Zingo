import { Component } from '@angular/core';
import { TitlePageComponent } from "../../../../../shared/components/title-page/title-page/title-page.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-section-3',
  imports: [TitlePageComponent , RouterLink],
  templateUrl: './home-section-3.component.html',
  styleUrl: './home-section-3.component.css'
})
export class HomeSection3Component {

}
