/* tslint:disable: ordered-imports*/
import { NgModule, APP_INITIALIZER, ModuleWithProviders, SecurityContext } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Config } from '@common/models';

/* Third Party */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';

const thirdParty = [IconsModule, NgbModule];

import { MarkdownModule } from 'ngx-markdown';

/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Guards */
import * as appCommonGuards from './guards';

/* Services */
import * as appCommonServices from './services';

/* Interceptors */
// import { interceptors } from './interceptors';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...thirdParty,
        MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
    ],
    declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
    exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty],
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders<AppCommonModule> {
        return {
            ngModule: AppCommonModule,
            providers: [
                ...appCommonServices.services,
                ...appCommonGuards.guards,
                {
                    provide: APP_INITIALIZER,
                    useFactory: configServiceFactory,
                    multi: true,
                    deps: [appCommonServices.ConfigService, appCommonServices.PrismService],
                },
                // {
                //     provide: HTTP_INTERCEPTORS,
                //     useFactory: demoInterceptorFactory,
                //     multi: true,
                //     deps: [appCommonServices.UtilityService, appCommonServices.ConfigService],
                // },
            ],
        };
    }
}

export function configServiceFactory(
    configService: appCommonServices.ConfigService
): () => Promise<Config> {
    return () => configService.loadConfig();
}

// export function demoInterceptorFactory(
//     utilityServuce: appCommonServices.UtilityService,
//     configServuce: appCommonServices.ConfigService
// ) {
//     return new interceptors.DemoInterceptor(utilityServuce, configServuce);
// }
