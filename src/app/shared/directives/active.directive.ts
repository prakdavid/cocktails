import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @Input('appActive') set isActive(condition) {
    if (condition) {
      this.backgroundColor = '#74b9ff';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';

    }
  }
  @HostBinding('style.backgroundColor') backgroundColor : string;
  @HostBinding('style.color') color : string;

  constructor() { }

}
