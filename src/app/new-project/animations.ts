import { trigger, state, style, transition, animate, group, keyframes, query } from '@angular/animations';

export const disableTrigger = trigger('disableTrigger', [
  state('invalid', style({
    'background-color': '#d9534f',
    'border-color': '#d43f3a'
  })),
  state('valid', style({
    'background-color': '#5cb85c',
    'border-color': '#4cae4c'
  })),
  transition('invalid => valid', [
    group([
      animate('200ms ease-in', keyframes([
        style({
          transform: 'scale(1)'
        }),
        style({
          transform: 'scale(1.2)'
        }),
        style({
          transform: 'scale(1)',
          'background-color': '#5cb85c',
          'border-color': '#4cae4c'
        })
      ]))
    ])
  ]),
  transition('valid => invalid', [
    group([
      animate('200ms ease-in', keyframes([
        style({
          transform: 'scale(1)'
        }),
        style({
          transform: 'scale(1.2)'
        }),
        style({
          transform: 'scale(1)',
          'background-color': '#d9534f',
          'border-color': '#d43f3a'
        })
      ]))
    ])
  ])
]);

export const formStateTrigger = trigger('formState', [
  transition('* => *', [
    query('input.ng-invalid:focus', [
      animate(200, style({
        backgroundColor: 'red'
      })),
      animate(200)
    ], {optional: true})
  ])
]);
