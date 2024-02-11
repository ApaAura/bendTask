import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';
import { Area } from 'src/app/core/models/area/area';
import { Observable } from 'rxjs';
import { Thing } from 'src/app/core/models/thing/thing';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit {
  @Input() area!: Area;
  areaGroups$: Observable<{ gThings: Thing[][] }> | undefined;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    if (this.area?.areaId) {
      this.areaGroups$ = this.getDataService.getThingsGrouped(this.area.areaId);
    }
  }
}
