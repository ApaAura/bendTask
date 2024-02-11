import { Component, Input } from '@angular/core';
import { Thing } from 'src/app/core/models/thing/thing';

@Component({
  selector: 'app-area-group',
  templateUrl: './area-group.component.html',
  styleUrls: ['./area-group.component.css'],
})
export class AreaGroupComponent {
  @Input() thingGroup!: Thing[];

  getStatusClass(group: Thing[]): string {
    const sumCountActive = group.reduce(
      (sum, thing) => sum + (thing.countActive ?? 0),
      0,
    );
    if (group[0].status === 'closed') {
      return 'status status-closed';
    } else if (sumCountActive != 0) {
      return 'status status-opened';
    } else {
      return 'status status-active';
    }
  }
}
