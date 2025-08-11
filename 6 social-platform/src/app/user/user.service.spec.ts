import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

// Test Suite
describe('UserService', () => {
  let service: UserService;

  // before each test, do the following...
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService); // create a fresh instance of UserService.
  });

  it('should be created', () => {
    // Arrange is done in beforeEach(). In away it auto Acts because it's a truthy test

    // Assert
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    // Arrange is done in beforeEach()

    // Act
    service.getUsers().subscribe(users => { // use subscribe because getUsers() is an observable method

      // Assert
      expect(users.length).toBeGreaterThan(0);
    });
  });
});
