import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SushiService } from '../../../core/services/api/sushi.service';
import { SlicePipe } from '../../shared/pipes/slice/slice.pipe';

@Component({
  selector: 'app-details-cart',
  imports: [SlicePipe],
  templateUrl: './details-cart.component.html',
  styleUrl: './details-cart.component.css'
})
export class DetailsCartComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private sushiService = inject(SushiService)
  detailsSushi: any = {};
  private closeApi!: Subscription;
  ngOnInit(): void {
    this.getSuchi();
  }
  ngOnDestroy(): void {
    this.closeApi.unsubscribe();
  }

  private getSuchi(): void {
    this.closeApi = this.sushiService.getDetailsSuschi(this.activatedRoute.snapshot.paramMap.get('id') + "").subscribe({
      next: res => {
        this.detailsSushi = res;
        console.log(res);

      },
      error: err => {
        console.log(err);
      }
    })
  }
}
