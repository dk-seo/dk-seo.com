import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Deok-Hwa (DK) Seo';
    constructor(public router: Router, private titleService: Title, private meta: Meta) {
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
              let snapshot = (event as ChildActivationEnd).snapshot;
              while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
              }
              this.titleService.setTitle(snapshot.data.title || this.title);
              this.meta.addTag(
                { name: 'Keywords', content: 'Software,Software Engineer,Engineer,dev,devs,programming,C++,C,Python,Typescript,HTML,CSS,JavaScript,daily,personal,learning,OpenGL,GLSL,DirectX,github,git'}
              );
            });
    }
}
