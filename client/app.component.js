"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var event_service_1 = require('./event.service');
require('rxjs-operators.js');
var AppComponent = (function () {
    function AppComponent(eventService) {
        var _this = this;
        this.eventService = eventService;
        eventService.events.subscribe(function (events) { return _this.events = events; }, function (error) { return console.error('error ' + error); }, function () { return console.log('completed'); });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initialized!');
        this.getEvents();
    };
    AppComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { return _this.events = events; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<div class=\"col-md-12\" id=\"header\"><h1>BORED<span class=\"question\">?</span></h1></div>\n    <div class=\"container\">\n      <div class=\"events\">\n        <div class=\"row\">\n          <div class=\"col-md-3\" id=\"event\" *ngFor=\"let event of events\">{{ event.title }} {{ event.location }} {{ event.description }}</div>\n        </div>\n      </div>\n   </div>",
            directives: [common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var EVENTS = [
    { _id: 1, title: 'Destory The Dom', location: 'New Orleans', time: 10002, link: 'ww.glowa.org', author: 'NTKS', description: 'Lorem Ipsem eslas rgrwi asdfwefmvkds vbrbeor' },
];
//# sourceMappingURL=app.component.js.map