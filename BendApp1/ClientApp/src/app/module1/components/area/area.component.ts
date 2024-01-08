import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Area } from 'src/app/core/models/area/area';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnInit{
  areas: Area[] = [];

  constructor(private getDataService: GetDataService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getDataService.getAreas().subscribe(areas => {(this.areas = areas), this.cdr.markForCheck()});
  }
}
