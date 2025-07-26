import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layouts/footer/footer";
import { Loading } from "./shared/components/loading/loading/loading";
import { Navbar } from "./layouts/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Loading, Navbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resturant_Zingo';
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }
  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }
}
