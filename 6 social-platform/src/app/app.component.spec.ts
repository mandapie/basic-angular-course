import { AppComponent } from "./app.component";

// Test Suite
describe('AppComponent', () => {

  // test method
  it('should have a defined title', () => {
    // Arrange, Act
    const component = new AppComponent();

    // Assert
    expect(component.title).toBeDefined();
  });
});