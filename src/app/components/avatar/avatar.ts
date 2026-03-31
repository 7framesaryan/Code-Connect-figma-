import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  @Input() initials: string = 'AR';
  @Input() size: 'sm' | 'lg' = 'sm';
  @Input() color: string = 'accent';
  @Input() bordered: boolean = false;
}
