(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/SweetGreetings/SweetGreetings/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0IGp":
    /*!*********************************************************!*\
      !*** ./src/app/components/speech/speech.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function IGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow: hidden;\n  display: block;\n  margin: 1%;\n  padding: 10px;\n  padding-bottom: 30px;\n}\n\n.author {\n  color: lightslategray;\n  overflow: hidden;\n  margin: 1%;\n  font-size: xx-large;\n  position: relative;\n  float: right;\n  bottom: 2em;\n  padding-right: 1em;\n  padding-top: 1em;\n}\n\n.bubble {\n  position: absolute;\n  right: 13%;\n  bottom: 5%;\n  width: 80%;\n  height: 95%;\n  padding: 0;\n  background: #ffffff;\n  border-radius: 22px;\n  border: #000000 solid 2px;\n}\n\n.bubble:after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-width: 14px 0 14px 37px;\n  border-color: transparent #ffffff;\n  display: block;\n  width: 0;\n  z-index: 1;\n  margin-top: -34px;\n  right: -36px;\n  top: 95%;\n}\n\n.bubble:before {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-width: 15px 0 15px 38px;\n  border-color: transparent #000000;\n  display: block;\n  width: 0;\n  z-index: 0;\n  margin-top: -35px;\n  right: -40px;\n  top: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwZWVjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBR0EsbUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQURGIiwiZmlsZSI6InNwZWVjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMSU7XG5cbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5hdXRob3J7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxJTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvdHRvbTogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5idWJibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMyU7XG4gIGJvdHRvbTogNSU7XG5cbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6ICMwMDAwMDAgc29saWQgMnB4O1xufVxuXG4uYnViYmxlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxNHB4IDAgMTRweCAzN3B4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogLTM0cHg7XG4gIHJpZ2h0OiAtMzZweDtcbiAgdG9wOiA5NSU7XG59XG5cbi5idWJibGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxNXB4IDAgMTVweCAzOHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIHJpZ2h0OiAtNDBweDtcbiAgdG9wOiA5NSU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "J5GQ":
    /*!****************************************************!*\
      !*** ./src/app/services/quote-provider.service.ts ***!
      \****************************************************/

    /*! exports provided: QuoteProviderService */

    /***/
    function J5GQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteProviderService", function () {
        return QuoteProviderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

      var QuoteProviderService = /*#__PURE__*/function () {
        function QuoteProviderService() {
          _classCallCheck(this, QuoteProviderService);

          this.quotes = [{
            text: 'Weil Denken die schwerste Arbeit ist, die es gibt, beschäftigen sich auch nur wenige damit.',
            author: 'Henry Ford',
            image: '1.png'
          }, {
            text: 'Es ist gefährlich, einen extrem fleißigen Bürokollegen einzustellen, weil die anderen Mitarbeiter ihm dann dauernd zuschauen.',
            author: 'Henry Ford',
            image: '1.png'
          }, {
            text: 'Arbeit schafft Hornhaut gegen den Kummer.',
            author: 'Marcus Tullius Cicero',
            image: '1.png'
          }, {
            text: 'Der Schweiß ist die Träne der Arbeit.',
            author: 'Peter Hille',
            image: '1.png'
          }, {
            text: 'Nicht nur im Wörterbuch kommt Arbeit vor Erfolg!',
            author: 'unbekannt',
            image: '1.png'
          }, {
            text: 'Das Wort ARBEIT ist ohne Zweifel ein “aktives Verb”. Denn man muss sie TUN um erfolgreich zu sein!',
            author: 'youneo',
            image: '1.png'
          }, {
            text: 'Faulheit ist die Furcht vor bevorstehender Arbeit.',
            author: 'Marcus Tullius Cicero',
            image: '1.png'
          }, {
            text: 'Wäre jeder Tag ein Feiertag, sich vergnügen wäre so ermüdend wie arbeiten.',
            author: 'William Shakespeare',
            image: '1.png'
          }, {
            text: 'Arbeite nie für dein Gehalt. Arbeite für deine Vision.',
            author: 'Korsch, Wadim',
            image: '1.png'
          }, {
            text: 'Arbeite klug, nicht hart.',
            author: 'Deutsches Sprichwort',
            image: '1.png'
          }, {
            text: 'Persönlichkeiten werden nicht durch schöne Reden geformt, sondern durch Arbeit und eigene Leistung.',
            author: 'Albert Einstein',
            image: '1.png'
          }, {
            text: 'Je mehr Vergnügen du an deiner Arbeit hast, umso besser wird sie bezahlt.',
            author: 'Mark Twain',
            image: '1.png'
          }];
        }

        _createClass(QuoteProviderService, [{
          key: "getNewQuote",
          value: function getNewQuote() {
            var index = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["random"])(1, this.quotes.length - 1, false);
            return this.quotes[index];
          }
        }]);

        return QuoteProviderService;
      }();

      QuoteProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], QuoteProviderService);
      /***/
    },

    /***/
    "Lw9i":
    /*!*******************************************************!*\
      !*** ./src/app/components/speech/speech.component.ts ***!
      \*******************************************************/

    /*! exports provided: SpeechComponent */

    /***/
    function Lw9i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechComponent", function () {
        return SpeechComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_speech_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./speech.component.html */
      "gx52");
      /* harmony import */


      var _speech_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speech.component.scss */
      "0IGp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var SpeechComponent = function SpeechComponent() {
        _classCallCheck(this, SpeechComponent);
      };

      SpeechComponent.propDecorators = {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        quote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SpeechComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-speech',
        template: _raw_loader_speech_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('openClose', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'scaleX(1) scaleY(1)',
          margin: '0 0 0 0',
          bottom: '1%',
          right: '11%',
          // height: '80%',
          // width: '80%',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'scaleX(0) scaleY(0)',
          margin: '0 -40% -40% 0',
          bottom: '1%',
          right: '11%',
          // height: 0,
          // width: 0,
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s 0.25s')])])],
        styles: [_speech_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SpeechComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_quote_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/quote-provider.service */
      "J5GQ");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(quoteProviderService) {
          _classCallCheck(this, AppComponent);

          this.quoteProviderService = quoteProviderService;
          this.isOpen = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.quote = this.quoteProviderService.getNewQuote();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isOpen = !this.isOpen;

            if (this.isOpen) {
              this.quote = this.quoteProviderService.getNewQuote();
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_quote_provider_service__WEBPACK_IMPORTED_MODULE_4__["QuoteProviderService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <button (click)=\"toggle()\">x</button>\n</div>\n\n<div class=\"content\">\n  <app-speech [isOpen]=\"isOpen\" [quote]=\"quote\"></app-speech>\n  <app-speaker [isOpen]=\"isOpen\" [quote]=\"quote\"></app-speaker>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_speaker_speaker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/speaker/speaker.component */
      "xxSu");
      /* harmony import */


      var _components_speech_speech_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/speech/speech.component */
      "Lw9i");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng2_fittext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-fittext */
      "/RVm");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_speaker_speaker_component__WEBPACK_IMPORTED_MODULE_5__["SpeakerComponent"], _components_speech_speech_component__WEBPACK_IMPORTED_MODULE_6__["SpeechComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ng2_fittext__WEBPACK_IMPORTED_MODULE_8__["Ng2FittextModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "gmyk":
    /*!***********************************************************!*\
      !*** ./src/app/components/speaker/speaker.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function gmyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  display: table;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n}\n\n.emote-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwZWFrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcGVha2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmVtb3RlLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */";
      /***/
    },

    /***/
    "gx52":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/speech/speech.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function gx52(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  *ngIf=\"quote\"\n  class=\"bubble\" [@openClose]=\"isOpen ? 'open' : 'closed'\">\n  <div class=\"content\" [fittext]=\"true\" [activateOnResize]=\"true\" [modelToWatch]=\"isOpen\">\n    {{quote.text}}\n  </div>\n  <div class=\"author\">-{{quote.author}}</div>\n</div>\n";
      /***/
    },

    /***/
    "mnzH":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/speaker/speaker.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mnzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  *ngIf=\"quote\"\n  class=\"content\" [@openClose]=\"isOpen ? 'open' : 'closed'\">\n  <img src=\"./assets/emotes/{{quote.image}}\" alt=\"emote image\" class=\"emote-image\">\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xxSu":
    /*!*********************************************************!*\
      !*** ./src/app/components/speaker/speaker.component.ts ***!
      \*********************************************************/

    /*! exports provided: SpeakerComponent */

    /***/
    function xxSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeakerComponent", function () {
        return SpeakerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_speaker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./speaker.component.html */
      "mnzH");
      /* harmony import */


      var _speaker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speaker.component.scss */
      "gmyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var SpeakerComponent = function SpeakerComponent() {
        _classCallCheck(this, SpeakerComponent);
      };

      SpeakerComponent.propDecorators = {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        quote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SpeakerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-speaker',
        template: _raw_loader_speaker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('openClose', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: '10%',
          width: '10%',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          height: '1em',
          width: '1em',
          opacity: 0.1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s')])])],
        styles: [_speaker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SpeakerComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map