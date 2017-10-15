import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

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
      }))
    ])
    // a trigger has multiple states and each state has a style or array of styles.
  ]
})
export class AppComponent {
  title = 'app';
}
