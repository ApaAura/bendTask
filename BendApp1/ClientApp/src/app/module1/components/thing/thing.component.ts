import { Component, Input } from '@angular/core';
import { Thing } from 'src/app/core/models/thing/thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
})
export class ThingComponent {
  @Input() thing!: Thing;
}
