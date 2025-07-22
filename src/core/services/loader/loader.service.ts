import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoader = new BehaviorSubject<boolean>(false);
  show(): void {
    this.isLoader.next(true);
  }
  hide(): void {
    this.isLoader.next(false);
  }
}
