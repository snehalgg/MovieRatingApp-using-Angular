import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() maxRating: number = 5;
  @Input() currentRating: number = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  ratingClickedHandler(rating: number) {
    this.ratingClicked.emit(rating);
  }

  getRange() {
    return Array(this.maxRating).fill(0).map((_, index) => index + 1);
  }
}
