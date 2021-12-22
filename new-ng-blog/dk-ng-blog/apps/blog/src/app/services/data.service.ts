import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogEntry } from '@dk-ng-blog/types';

// export interface BlogEntry {
//   title: string;
//   body: string;
//   timestamp?: Date;
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

 fetch() {
   return this.http.get<BlogEntry[]>('/api/entries');
 }

 save(entry: BlogEntry) {
   return this.http.post('/api/entries', entry);
 }

 delete(id: number) {
   return this.http.delete(`/api/entries/${id}`);
 }
}