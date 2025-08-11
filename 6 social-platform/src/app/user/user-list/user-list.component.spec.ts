import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>; // a kind of wrapper for a component?
  let userService: UserService;
  let userServiceGetUserSpy: jasmine.Spy

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    // use jasmine.Spy to call the actual method?, then use .returnValue to return mock data
    userService = TestBed.inject(UserService);
    userServiceGetUserSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: "Joe Smith"},
      {id: 2, name: "Maria Doe"}
    ]));
  });

  it('should create', () => {
    // Arrange is done in beforeEach(). In away it auto Acts because it's a truthy test

    // Assert
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserService on init', () => {
    // Arrange. Auto Acts because it's to the the ngOnInit() method
    fixture.detectChanges();

    // Assert
    expect(userServiceGetUserSpy).toHaveBeenCalled();
  });

  it('should retrieve users when refresh button is clicked', () => {
    // Arrange
    fixture.detectChanges();
    userServiceGetUserSpy.calls.reset();

    // Act
    const refreshButton = fixture.debugElement.query(By.css('button'));
    refreshButton.triggerEventHandler('click', null);
    
    // Assert
    expect(userServiceGetUserSpy).toHaveBeenCalled();
  });
});
