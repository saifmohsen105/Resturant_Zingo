import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../../../core/services/loader/loader.service';

@Component({
  selector: 'app-loading',
  imports: [AsyncPipe],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {
loaderService = inject(LoaderService);
}
