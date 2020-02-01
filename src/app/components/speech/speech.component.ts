import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  public author = 'Henry Ford';
  public quote = 'Weil Denken die schwerste Arbeit ist, die es gibt, beschäftigen sich auch nur wenige damit.';

  @Input()
  public isOpen;

  constructor() {
  }

  public ngOnInit(): void {
    // this.isOpen = true
  }

}
