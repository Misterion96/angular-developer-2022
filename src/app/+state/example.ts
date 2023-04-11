import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';


import {
    routerReducer,
    StoreRouterConnectingModule
} from '@ngrx/router-store';

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.forRoot({router: routerReducer}),
        StoreRouterConnectingModule.forRoot(),
    ],
})
class S {}

import { getSelectors } from '@ngrx/router-store';

export const {
    selectCurrentRoute, // выбрать текущий маршрут
    selectFragment, // выбрать текущий фрагмент маршрута
    selectQueryParams, // выбрать текущие queryParams маршрута
    selectQueryParam, //  выбрать queryParam по ключу из маршрута
    selectRouteParams, // выбрать текущие Params маршрута
    selectRouteParam, // выбрать Param по ключу из маршрута
    selectRouteData, // выбрать данные маршрута
    selectUrl, // выбрать текущий урл страницы
    selectTitle, // выбрать заголовок таблицы, если доступно
} = getSelectors();
