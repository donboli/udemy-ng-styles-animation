import { trigger, style, transition, animate } from '@angular/animations';

export const createNewTrigger = trigger('createNewState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),
    animate('500ms ease-out')
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }))
  ])
]);
