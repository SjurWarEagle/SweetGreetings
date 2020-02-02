import {Injectable} from '@angular/core';
import {IQuote} from "../components/models/i-quote";
import {random} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class QuoteProviderService {

  private quotes: IQuote[] = [
    {
      text: 'Weil Denken die schwerste Arbeit ist, die es gibt, beschäftigen sich auch nur wenige damit.',
      author: 'Henry Ford',
      image: '1.png'
    },
    {
      text: 'Es ist gefährlich, einen extrem fleißigen Bürokollegen einzustellen, weil die anderen Mitarbeiter ihm dann dauernd zuschauen.',
      author: 'Henry Ford',
      image: '1.png'
    },
    {
      text: 'Arbeit schafft Hornhaut gegen den Kummer.',
      author: 'Marcus Tullius Cicero',
      image: '1.png'
    },
    {
      text: 'Der Schweiß ist die Träne der Arbeit.',
      author: 'Peter Hille',
      image: '1.png'
    },
    {
      text: 'Nicht nur im Wörterbuch kommt Arbeit vor Erfolg!',
      author: 'unbekannt',
      image: '1.png'
    },
    {
      text: 'Das Wort ARBEIT ist ohne Zweifel ein “aktives Verb”. Denn man muss sie TUN um erfolgreich zu sein!',
      author: 'youneo',
      image: '1.png'
    },
    {
      text: 'Faulheit ist die Furcht vor bevorstehender Arbeit.',
      author: 'Marcus Tullius Cicero',
      image: '1.png'
    },
    {
      text: 'Wäre jeder Tag ein Feiertag, sich vergnügen wäre so ermüdend wie arbeiten.',
      author: 'William Shakespeare',
      image: '1.png'
    },
    {
      text: 'Arbeite nie für dein Gehalt. Arbeite für deine Vision.',
      author: 'Korsch, Wadim',
      image: '1.png'
    },
    {
      text: 'Arbeite klug, nicht hart.',
      author: 'Deutsches Sprichwort',
      image: '1.png'
    },
    {
      text: 'Persönlichkeiten werden nicht durch schöne Reden geformt, sondern durch Arbeit und eigene Leistung.',
      author: 'Albert Einstein',
      image: '1.png'
    },
    {
      text: 'Je mehr Vergnügen du an deiner Arbeit hast, umso besser wird sie bezahlt.',
      author: 'Mark Twain',
      image: '1.png'
    }
  ];

  constructor() {
  }

  public getNewQuote(): IQuote {
    const index = random(1, this.quotes.length - 1, false);
    // console.log('index', index);
    // console.log('this.quotes.length', this.quotes.length);
    return this.quotes[index];
  }
}
