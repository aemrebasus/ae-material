import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './entity-metadata';
import { reducers } from './reducers';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        EntityDataModule.forRoot(entityConfig),
        EffectsModule.forRoot([])],
    exports: [],
    providers: [],
})
export class AppStoreModule { }
