import {Component, OnInit} from '@angular/core';
import {QuoteProviderService} from "./services/quote-provider.service";
import {IQuote} from "./components/models/i-quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpen = false;
  public quote: IQuote;

  constructor(private quoteProviderService: QuoteProviderService) {
  }

  public ngOnInit(): void {
    this.quote = this.quoteProviderService.getNewQuote();
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.quote = this.quoteProviderService.getNewQuote();
    }
  }


}
