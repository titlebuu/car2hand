import { trigger, transition, style, animate, state } from '@angular/animations';

export const contentTrigger = trigger('contentTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('1s', style({
            transform: 'translate3d(0, 5%, 0)'
        })),
        animate('200ms', style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        }))
    ]),
    transition(':leave', [
        animate('100ms', style({
            opacity: 0
        }))
    ])
]);

export const footerTrigger = trigger('footerTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('200ms', style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate('100ms', style({
            opacity: 0
        }))
    ])
]);

export const aunjaiTrigger = trigger('aunjaiTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('1s', style({
            transform: 'translate3d(0, 10%, 0)'
        })),
        animate('500ms', style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        }))
    ]),
    transition(':leave', [
        animate('100ms', style({
            opacity: 0
        }))
    ])
]);

export const aunjaiShadowTrigger = trigger('aunjaiShadowTrigger', [
    transition(':enter', [
        style({
            width: '500px'
        }),
        animate('1.75s', style({
            width: '300px'
        }))
    ])
]);

export const textResultTrigger = trigger('textResultTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('1200ms', style({
            transform: 'translate3d(0, 5%, 0)'
        })),
        animate('100ms', style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        }))
    ]),
    transition(':leave', [
        animate('100ms', style({
            opacity: 0
        }))
    ])
]);
