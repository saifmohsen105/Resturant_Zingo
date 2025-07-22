import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SushiService } from '../../../../core/services/api/sushi.service';
import { IdetailsSuchi } from '../../../shared/interfaces/sushi/IdetailsSuchi';
import { ContactComponent } from "../../contact/contact.component";
import { HomeSection1Component } from "../home-section-1/home-section-1/home-section-1.component";
import { HomeSection2Component } from "./home-section-2/home-section-2/home-section-2.component";
import { HomeSection3Component } from "./home-section-3/home-section-3/home-section-3.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, HomeSection1Component, HomeSection2Component, HomeSection3Component, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private sushiService = inject(SushiService)
  itemsSushi: IdetailsSuchi[] = [];
  private closeApi!: Subscription;
  ngOnInit(): void {
    this.getAllSushies();
  }

  ngOnDestroy(): void {
    this.closeApi.unsubscribe();
  }
  private getAllSushies(): void {
    this.closeApi = this.sushiService.getAllSushies().subscribe({
      next: res => {
        setTimeout(() => {
          this.itemsSushi = [res];
        }, 1000)
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
