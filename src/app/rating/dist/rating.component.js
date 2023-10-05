"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RatingComponent = void 0;
var core_1 = require("@angular/core");
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.maxRating = 5;
        this.currentRating = 0;
        this.ratingClicked = new core_1.EventEmitter();
    }
    RatingComponent.prototype.ratingClickedHandler = function (rating) {
        this.ratingClicked.emit(rating);
    };
    RatingComponent.prototype.getRange = function () {
        return Array(this.maxRating).fill(0).map(function (_, index) { return index + 1; });
    };
    __decorate([
        core_1.Input()
    ], RatingComponent.prototype, "maxRating");
    __decorate([
        core_1.Input()
    ], RatingComponent.prototype, "currentRating");
    __decorate([
        core_1.Output()
    ], RatingComponent.prototype, "ratingClicked");
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'app-rating',
            templateUrl: './rating.component.html',
            styleUrls: ['./rating.component.css']
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
