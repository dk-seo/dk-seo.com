import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '@common/models';
import { lastValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';

let _config: Config;

@Injectable({ providedIn: 'root' })
export class ConfigService {
    constructor(private http: HttpClient) {}

    loadConfig(): Promise<Config> {
        return lastValueFrom(this.http
            .get<Config>(`assets/config.json`)
            .pipe(
                tap(config => {
                    _config = config;
                })
            ));
    }

    get config() {
        return _config;
    }
}
