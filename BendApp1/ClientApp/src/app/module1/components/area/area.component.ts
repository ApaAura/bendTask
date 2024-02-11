import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/core/models/area/area';
import { Thing } from 'src/app/core/models/thing/thing';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit, OnDestroy {
  areaGroups: Thing[][] = [];
  subscriptions: Subscription[]=[];
  @Input() area!: Area;

  constructor(
    private getDataService: GetDataService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getDataService.getThingsGrouped(this.area?.areaId).subscribe({
      next: (areaG) => {
        this.areaGroups = areaG.gThings;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
