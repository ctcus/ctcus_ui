import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = [944, 1011, 984]
    .map((n) => `https://picsum.photos/id/${n}/900/500`)
    .map((src, i) => {
      return {
        src: src,
        alt: 'Random image',
        header: `Slide ${i + 1}`,
      };
    });
}
