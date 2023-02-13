import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputNumberModule } from '@taiga-ui/kit';
import { ExampleComponent } from './example.component';
import { EXAMPLE_INTERCEPTORS } from './interceptors';
import { ParsedObsJsonComponent } from './parsed-obs-json/parsed-obs-json.component';
import { CodeErrorsService } from '../services/code-errors.service';
import { UsersUriService } from '../services/users-uri.service';

@NgModule({
    declarations: [ExampleComponent, ParsedObsJsonComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        TuiInputModule,
        TuiInputNumberModule,
        FormsModule
    ],
    exports: [ExampleComponent],
    providers: [
        UsersUriService,
        CodeErrorsService,
        ...EXAMPLE_INTERCEPTORS,
    ]
})
export class ExampleModule {
}
