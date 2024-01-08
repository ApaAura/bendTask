import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Area } from 'src/app/core/models/area/area';
import { Thing } from 'src/app/core/models/thing/thing';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {
  private apiUrl = 'http://localhost:5145/api/data'; 

  constructor(private http: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(`${this.apiUrl}/getThings`);
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.apiUrl}/getAreas`);
  }

  getAreaIds(): Observable<number[]> {
    return this.getAreas().pipe(
      map((areas: Area[]) => areas.map(area => area.areaId))
    );
  }

  getThingsSortedByAreaIds(): Observable<{ area: Area, gThings: Thing[][] }[]> {
    return forkJoin({
      areas: this.getAreas(),
      things: this.getThings()
    }).pipe(
      map(({ areas, things }: { areas: Area[], things: Thing[] }) => {
        const result: { area: Area, gThings: Thing[][] }[] = [];

        areas.forEach(area => {
          const thingsForArea = things.filter(thing => thing.areaId === area.areaId);
          const groupedThings: Thing[][] = [];

          thingsForArea.forEach(thing => {
            if (thing.joinedWith === null) {
              const group = [thing, ...thingsForArea.filter(t => t.joinedWith === thing.id)];
              groupedThings.push(group);
            }
          });

          result.push({ area: area, gThings: groupedThings });
        });

        return result;
      })
    );
  }

}
