import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiLoaderModule } from '@taiga-ui/core';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';

@NgModule({
    imports: [TuiLoaderModule, TuiLetModule, AsyncPipe],
    providers: [LoaderService],
    declarations: [LoaderComponent],
    exports: [LoaderComponent]
})
export class LoaderModule {
}
