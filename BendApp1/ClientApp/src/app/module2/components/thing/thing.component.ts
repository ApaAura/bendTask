import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from 'src/app/core/models/thing/thing';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingComponent implements OnInit  {
  things$!: Observable<Thing[]>;

  constructor(private getDataService: GetDataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.things$ = this.getDataService.getThings();
  }

}
