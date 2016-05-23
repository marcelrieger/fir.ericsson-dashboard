/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import { HTTP_PROVIDERS } from 'angular2/http';
import {bootstrap}    from 'angular2/platform/browser';
import {EricssonComponent} from './ericsson/app.component';

bootstrap(EricssonComponent, [HTTP_PROVIDERS]);