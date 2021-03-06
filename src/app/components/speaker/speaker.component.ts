import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IQuote} from "../models/i-quote";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '10%',
        width: '10%',
        opacity: 1,
      })),
      state('closed', style({
        height: '1em',
        width: '1em',
        opacity: 0.1,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SpeakerComponent {

  @Input()
  public isOpen;

  @Input()
  public quote: IQuote;

}
