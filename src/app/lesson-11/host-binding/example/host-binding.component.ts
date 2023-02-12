import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-host-binding',
    templateUrl: './host-binding.component.html',
    styleUrls: ['./host-binding.component.less']
})
export class HostBindingComponent {
    @HostBinding('style.font-size.px')
    @Input()
    public fontSize = 20

    @HostBinding('style.width')
    public getWidth(){
        return this.fontSize > 25 ? '800px' : '600px';
    }

    @HostBinding('class')
    public classesObj = {
        touched: true,
        active: true
    }

    @HostBinding('class')
    public classesString = 'touched active'

    @HostBinding('class')
    public classesArray = ['touched', 'active']

    @HostBinding('class.my-class')
    public myClass = true

    @HostBinding('attr.data-value')
    @Input()
    public attrValue = 'my-attr-value-included'

}
