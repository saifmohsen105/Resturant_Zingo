import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { TitlePageComponent } from "../../../../../shared/components/title-page/title-page/title-page.component";
import { IdetailsSuchi } from '../../../../../shared/interfaces/sushi/IdetailsSuchi';
import { SlicePipe } from '../../../../../shared/pipes/slice/slice.pipe';
import { NavigationService } from '../../../../../../core/services/navigation/navigation.service';

@Component({
  selector: 'app-home-section-2',
  imports: [TitlePageComponent, SlicePipe],
  templateUrl: './home-section-2.component.html',
  styleUrl: './home-section-2.component.css'
})
export class HomeSection2Component {
  private router = inject(Router);
  private navigation = inject(NavigationService);
  sushies = input.required<IdetailsSuchi[]>();

  sendIdInUrl(id: string): void {
    this.navigation.sendIdInUrl(id);
  }
}
