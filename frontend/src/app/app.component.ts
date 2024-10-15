import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root', // This specifies the HTML tag name for this component
  templateUrl: './app.component.html', // The path to the component's HTML template
})

export class AppComponent implements OnInit {
  title = 'luv2shop-ecommerce'; // The title of the application
  isScrolledDown: boolean = false; // A flag to track if the user has scrolled down

  // Injecting the CartService and ScrollService into the component
  constructor(
    private cartService: CartService,
    private scrollService: ScrollService
  ) {}

  // The ngOnInit lifecycle hook runs once when the component is initialized
  ngOnInit() {
    // Resetting cart data
    this.cartService.resetCartItems();

    // Subscribing to the scroll observable to update isScrolledDown
    this.scrollService
      .getScrollObservable()
      .subscribe((isScrolledDown) => (this.isScrolledDown = isScrolledDown));
  }
}
