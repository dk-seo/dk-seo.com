import { Injectable } from '@nestjs/common';

export interface BlogEntry {
  title: string;
  body: string;
  timestamp?: Date;
}

@Injectable()
export class AppService {

  entries: BlogEntry[] = [{
    title: 'example blog title',
    body: 'example blog body',
    timestamp: new Date()
  }];

  getData(): BlogEntry[] {
    return this.entries;
  } 

  create(entry: BlogEntry) {
    const newEntry = {
      title: entry.title,
      body: entry.body,
      timestamp: new Date()
    };

    this.entries = [...this.entries, newEntry]; 
  } 

  delete(id: number) {
    this.entries = this.entries.filter((_, idx) => idx !== id); 
  }
}