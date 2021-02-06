import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Post } from '@modules/blog/models';
import { BlogService } from '@modules/blog/services';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    isLoggedIn = false;

    posts$!: Observable<Post[]>;
    constructor(
        private meta: Meta,
        private blogService: BlogService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
      this.meta.updateTag(
        { name: 'Description', content: 'Deok-Hwa (DK) Seo\'s Home.'}
      );
    }

    ngOnInit() {
        this.posts$ = this.blogService.getPosts$();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
