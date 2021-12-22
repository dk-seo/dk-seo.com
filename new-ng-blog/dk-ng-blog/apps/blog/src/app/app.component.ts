import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { BlogEntry } from '@dk-ng-blog/types';

@Component({
  selector: 'dk-ng-blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'blog';
  entries!: BlogEntry[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.dataService.fetch().subscribe({
      next: (response: BlogEntry[]) => (this.entries = response)
    });
  }

  onSaveEntry(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    const entry = {
      title: titleInput.value,
      body: bodyInput.value
    };
    this.dataService.save(entry).subscribe({
      next: () => {
        this.fetch();
        titleInput.value = '';
        bodyInput.value = '';
      }
    });
  }

  onDeleteEntry(index: number) {
    this.dataService.delete(index).subscribe({
      next: () => {
        this.fetch();
      }
    });
  }
}
