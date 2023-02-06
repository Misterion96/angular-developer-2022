import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-colorize-table',
    templateUrl: './colorize-table.component.html',
    styleUrls: ['./colorize-table.component.less']
})
export class ColorizeTableComponent implements OnInit {
    public readonly rows = [
        [
            'string',
            5555,
            false,
            [5, 6, 6, 7]
        ],
        [
            [7, 7, 7, 7, 7, 7],
            false,
            777,
            'new-string',
        ]
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
