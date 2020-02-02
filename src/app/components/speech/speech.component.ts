import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IQuote} from "../models/i-quote";

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'scaleX(1) scaleY(1)',
        margin: '0 0 0 0',
        bottom: '1%',
        right: '11%',
        // height: '80%',
        // width: '80%',
        opacity: 1,
      })),
      state('closed', style({
        transform: 'scaleX(0) scaleY(0)',
        margin: '0 -40% -40% 0',
        bottom: '1%',
        right: '11%',
        // height: 0,
        // width: 0,
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s 0.25s')
      ]),
    ]),
  ],

})
export class SpeechComponent implements OnInit {

  @Input()
  public isOpen;

  @Input()
  public quote: IQuote;

  constructor() {
  }

  public ngOnInit(): void {
    // this.isOpen = true
  }

}
