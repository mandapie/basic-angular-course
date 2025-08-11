# SocialPlatform

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.
This is the sixth lesson from the [course](https://www.udemy.com/course/complete-angular-14-course-learn-frontend-development/).

Learned:
- Unit testing with Jasmine (to write tests) and Karma (to run tests)
  - unit test `app.component`
  - unit test a service
  - unit test a component
- Jasmine
  - `*.spec.ts` files are unit test files
  - TestBed (see TestBed configuration in beforeEach() methods)
    - inject services
    - declare components, directives, and pipes
    - jasmine.Spy to generate mock data
  - fixture
- [Karma](https://karma-runner.github.io)
  - `ng test` to run tests
  - `ng test --watch=false` to turn off auto test run after saves. Sometimes Karma doesn't detect changes so running the test manually is less annoying for me 

**NOTE:**
Karma's default browser is chrome, but I don't have it installed. I modified Karma to run on a specific browser(s) in from the `karma.conf.js` file. However, Angular 15+ does not generate karma.conf.js by default. Run `ng generate config karma` to create it. I needed to install the browser launcher(s) eg `npm install --save-dev karma-ie-launcher`.
    - How to [configure](https://testing-angular.com/angular-testing-principles/#configuring-karma-and-jasmine)
    - Karma v6.4 [supported browsers](https://karma-runner.github.io/6.4/config/browsers.html) (if you're using Edge, download the IE launcher)