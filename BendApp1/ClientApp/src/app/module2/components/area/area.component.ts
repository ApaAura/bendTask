import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from 'src/app/core/models/area/area';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit {
  areas$!: Observable<Area[]>;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.areas$ = this.getDataService.getAreas();
  }
}
