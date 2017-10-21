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

      // If this state here is referenced from the same div that other states are called from it is important that properties from prev. states are maintained. 
      // i.e. If the height and width below did not exist and we wanted to apply it before/after one of the other states were referenced, this state below would 
      //      be called without the height and width properties that existed in prev. states.
      state('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        height: '100px',
        width: '100px'
      })),

      // a trigger has multiple states and each state has a style or array of styles.

      // how to transition between states: - use the transition module:
      //  i). 1st argument describes when this transition should be applied: multiple transitions maybe applied for different states.
      // ii). 2nd argument what should happen once the animation is fired.
      //      - 1st argument of animate method takes 3 arguments in one string: i). duration, ii). initial delay and iii). timing function.
      //      - 2nd argument (optional) defines the styling after our animation is done.
      transition('default => clicked', animate('1s 500ms ease-in')),

      // we can use more than one transition statement that allows us to perform multiple transitions:
      // - using just an integer as an argument refers to 300ms duration, 0 delay and a linear timing function. Can also simply pass a string '300ms'.
      transition('clicked => default', animate(300)),

      //transition('mousedown => clicked', animate(300)),
      //transition('clicked => mousedown', animate(300)),

      // ^ is the same as:
      transition('mousedown <=> default', animate(300))
    

    ]),

    trigger('numberEnteredState', [
      state('selected', style({
        border: '1px solid black',
        padding: '5px'
      })),
      state('unselected', style({
        border: '1px solid blue',
        padding: '4px',
        backgroundColor: 'lightBlue'
      })),
      transition('unselected => selected', [
        // an array here allows us to perform various transtion steps - before our final state of 'selected' is reached':

        // below we can place a style that can be added before the animation takes place
        style({
          border: '2px solid black',
          padding: '4px'
        }),

        // animate here allows the step above to be seen. 
        animate(500, style({
          backgroundColor: 'red',
          transform: 'scale(1.1)' // used to increase the size of the object. note: the display property of the html element in question must be of type 'block'.
        })),

        // we can add yet more steps after the animation above happens: - now the animation will transition into the following styling:
        // angular does not track the last state we had and therefore border and padding wont appear in this next transition. Therefore for every subsequent
        // style (i.e. apart from the first) that we have we have to sandwich it inside animates.
        // if we wanted the style here below to keep track of the prev. style we can make it a second argument of the prev.animate function instead. 
        // - This will also make the animation smoother as the border and padding properties in the prev. state wont be lost before the background property 
        //   is then added.
        /*style({
          backgroundColor: 'red'
        }),
        */

        // without the animate below it is hard to see the step above take place. If we want the above 
        animate(500)
      ])
    ])
    
  ]
})

export class AppComponent {
  clickInfo = 'default';

  // using more than one variable below allows us to apply different states to different html elements.
  paragraphInfo = 'default';

  numberEntered;

  onClickInfo(){
   this.clickInfo = (this.clickInfo == 'default' ? 'clicked' : 'default');
  }
}
