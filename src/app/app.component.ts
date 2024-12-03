import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-mentor-e-commerce';

  count = 0;

  imagesThumbnail = [
    'image-product-1-thumbnail.jpg',
    'image-product-2-thumbnail.jpg',
    'image-product-3-thumbnail.jpg',
    'image-product-4-thumbnail.jpg',
  ];

  imagesProduct = [
    'image-product-1.jpg',
    'image-product-2.jpg',
    'image-product-3.jpg',
    'image-product-4.jpg',
  ];

  selectedImageIndex: number | null = null;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
    this.lightboxImage = this.imagesProduct[index];

    console.log(this.selectedImageIndex !== null);

    console.log(this.imagesProduct[this.selectedImageIndex + 1] !== undefined);
  }

  setCounter(number: number) {
    this.count = number;
  }

  lightboxImage: string | null = null;

  openLightbox(image: string): void {
    this.lightboxImage = image;
  }

  closeLightbox(): void {
    this.lightboxImage = null;
    this.selectedImageIndex = null;
  }
}
