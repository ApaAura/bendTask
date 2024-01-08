import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Area } from 'src/app/core/models/area/area';
import { Thing } from 'src/app/core/models/thing/thing';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-sort-by-area',
  templateUrl: './sort-by-area.component.html',
  styleUrls: ['./sort-by-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByAreaComponent implements OnInit {
  areas:{ area: Area, gThings: Thing[][] }[] = [];
  constructor(private getDataService: GetDataService,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getDataService.getThingsSortedByAreaIds().subscribe(areas => {
      this.areas = areas;
      this.cdr.markForCheck();
    });
  }
}
