import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from 'src/app/core/models/thing/thing';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingComponent{
  @Input() thing!: Thing;
}
