import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-clean-divider',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './clean-divider.component.html',
    styleUrls: ['clean-divider.component.scss'],
})
export class CleanDividerComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
