import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [// array of animations you can define/trigger. 
    
    // The trigger defines which set of animations can be played, set of animations will contain various states for which you can switch. 
    // Trigger determines the current state. 
    // Trigger takes 2 arguments i). the name of the trigger made by you, ii). array of animation metadata - allows you to define states with respective styles and transitions between them.
    // State 
    trigger('clickedState', [
      // state takes 2 arguments: i). the name of the state, ii). the styles to apply to the state
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),

      // how to transition between states: - use the transition module:
      // i). 1st argument describes when this transition should be applied: multiple transitions maybe applied for different states.
      // ii). 2nd argument what should happen once the animation is fired.
      //      - 1st argument of animate method takes 3 arguments in one string: i). duration, ii). initial delay and iii). timing function.
      //      - 2nd argument (optional) defines the styling after our animation is done.
      transition('default => clicked', animate('200ms 500ms ease-in')),

      // we can use more than one transition statement that allows us to perform multiple transitions:
      // - using just an integer as an argument refers to 300ms duration, 0 delay and a linear timing function. Can also simply pass a string '300ms'.
      transition('clicked => default', animate(300))

    ])
    // a trigger has multiple states and each state has a style or array of styles.
  ]
})
export class AppComponent {
  clickInfo = 'default';

  onClickInfo(){
   this.clickInfo = (this.clickInfo == 'default' ? 'clicked' : 'default');
  }
}
