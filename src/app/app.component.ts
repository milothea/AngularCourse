import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Let\'s get started!';
  inputValue = '';
  secondInputValue = '';
  className = 'default';

  onChangeColor(): void {
    if (this.className == 'default') {
      this.className = 'customized';
    } else {
      this.className = 'default';
    }
  }

  onChangeHeadingText(event: Event): void {
    this.secondInputValue = (<HTMLInputElement>event.target).value;
  }

  getColor(): string {
    return this.className === 'default' ? '#5e615f' : '#a1200a';
  }
}
