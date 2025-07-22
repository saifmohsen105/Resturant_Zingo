import { Component, inject, input } from '@angular/core';
import { NavigationService } from '../../../../../core/services/navigation/navigation.service';
import { TitlePageComponent } from "../../../../shared/components/title-page/title-page/title-page.component";
import { IdetailsSuchi } from '../../../../shared/interfaces/sushi/IdetailsSuchi';
import { SlicePipe } from '../../../../shared/pipes/slice/slice.pipe';
@Component({
  selector: 'app-home-section-1',
  imports: [SlicePipe, TitlePageComponent],
  templateUrl: './home-section-1.component.html',
  styleUrl: './home-section-1.component.css'
})
export class HomeSection1Component {
  private navigation = inject(NavigationService);
  itemSushi = input.required<IdetailsSuchi[]>();
  sendIdInUrl(id: string): void {
    this.navigation.sendIdInUrl(id);
  }
}
