import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [// array of animations you can define/trigger. 
    clickedStateTrigger,
    numberEnteredStateTrigger
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
