import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app works!';

  userObj = {
    username: 'foobar',
    firstName: 'Foo',
    lastName: 'Bar',
    age: 18,
    isAdmin: false,
  };

  onChange(value) {
    console.log('APP', value);
  }
}
