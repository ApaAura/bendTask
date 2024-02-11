import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Area } from 'src/app/core/models/area/area';
import { Thing } from 'src/app/core/models/thing/thing';

@Injectable({
  providedIn: 'root',
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
  getAreaThings(areaId: number): Observable<{ gThings: Thing[] }> {
    return this.getThings().pipe(
      map((things) => {
        const thingsForArea = things.filter((thing) => thing.areaId === areaId);
        return { gThings: thingsForArea };
      }),
    );
  }
  getThingsGrouped(areaId: number): Observable<{ gThings: Thing[][] }> {
    return this.getAreaThings(areaId).pipe(
      map(({ gThings }) => {
        const groupedThings: Thing[][] = [];

        gThings.forEach((thing) => {
          if (thing.joinedWith === null) {
            const group = [
              thing,
              ...gThings.filter((t) => t.joinedWith === thing.id),
            ];
            groupedThings.push(group);
          }
        });
        return { gThings: groupedThings };
      }),
    );
  }
}
