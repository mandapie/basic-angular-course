import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-signal-example';

  // theme stuff
  theme = signal('light'); // writable signal
  label = this.theme();

  // price calculation
  price = 19;
  quantity = signal(10); // writable signal
  totalPrice = computed(() => this.price * this.quantity()); // read-only signal

  // search items
  products = signal([
    {id: 1, name: "milk", price: 4.45},
    {id: 2, name: "bread", price: 2.50},
    {id: 3, name: "tomato", price: 0.30}
  ])
  filterName = signal('');
  filteredProducts = computed(() => {
    return this.products().filter(product => product.name.toLowerCase().includes(this.filterName().toLowerCase()))
  })

  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode() {
    // there are two ways to set the value .set() or .update()
    // with .set(), you'd be calling 2 methods: .set() and theme(). Prefer .update() over .set()
    // this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }

  changeFilter(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}
