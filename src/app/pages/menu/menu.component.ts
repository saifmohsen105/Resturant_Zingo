import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SushiService } from '../../../core/services/api/sushi.service';
import { Icategories } from '../../shared/interfaces/sushi/icategories';
import { IdetailsSuchi } from '../../shared/interfaces/sushi/IdetailsSuchi';
import { SlicePipe } from '../../shared/pipes/slice/slice.pipe';
import { NavigationService } from './../../../core/services/navigation/navigation.service';

@Component({
  selector: 'app-menu',
  imports: [SlicePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  private sushiService = inject(SushiService);
  private closeApi!: Subscription[]; // don't used now
  private navigation = inject(NavigationService);
  navbarCategories: Icategories[] = [];
  menuCategore: IdetailsSuchi[] = [];
  ngOnInit(): void {
    this.getAllCetegories();
    this.getMenuSpecialCategore();
  }


  private getAllCetegories(): void {
    this.sushiService.getAllCaterories().subscribe({
      next: res => {
        this.navbarCategories = [res];
      },
      error: err => {
        console.log(err);
      }
    })
  }
  private getMenuSpecialCategore(category: string = 'beef'): void {
    this.sushiService.getMenuSpecialCategore(category).subscribe({
      next: res => {
        this.menuCategore = [res];
      },
      error: err => {
        console.log(err);

      }
    })
  }
  sendIdInUrl(id: string): void {
    this.navigation.sendIdInUrl(id);
  }
  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.getMenuSpecialCategore(value);
  }
}
