import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';
import { Area } from 'src/app/core/models/area/area';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sort-by-area',
  templateUrl: './sort-by-area.component.html',
  styleUrls: ['./sort-by-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortByAreaComponent implements OnInit {
  areas$: Observable<Area[]>|undefined;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.areas$ = this.getDataService.getAreas();
  }
}
