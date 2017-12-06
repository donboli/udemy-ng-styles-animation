import { trigger, style, state, transition, animate } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9'
  })),
  transition('default => marked', animate('1200ms ease-out'))
]);
