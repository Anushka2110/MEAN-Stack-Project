(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videolist_videolist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videolist/videolist.component */ "./src/app/videolist/videolist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _mock_video_mock_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock-video/mock-video.component */ "./src/app/mock-video/mock-video.component.ts");
/* harmony import */ var _video_center_video_center_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video-center/video-center.component */ "./src/app/video-center/video-center.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");















var routes = [
    { path: '', redirectTo: '/mock', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'videolist', component: _videolist_videolist_component__WEBPACK_IMPORTED_MODULE_3__["VideolistComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'insert', component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"] },
    { path: 'delete', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerComponent"] },
    { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"] },
    { path: 'reserve', component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__["ReserveComponent"] },
    { path: 'mock', component: _mock_video_mock_video_component__WEBPACK_IMPORTED_MODULE_11__["MockVideoComponent"] },
    { path: 'videocenter', component: _video_center_video_center_component__WEBPACK_IMPORTED_MODULE_12__["VideoCenterComponent"] },
    { path: 'shell', component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_14__["ShellComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h1 align=\"center\"><a class=\"\" href=\"#\">VideoStore</a></h1>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/mock\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>/<a routerLink=\"\" routerLinkActive=\"active\">Logout</a></li>\n      \n      \n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _videolist_videolist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./videolist/videolist.component */ "./src/app/videolist/videolist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var _mock_video_mock_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock-video/mock-video.component */ "./src/app/mock-video/mock-video.component.ts");
/* harmony import */ var _video_center_video_center_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video-center/video-center.component */ "./src/app/video-center/video-center.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _videolist_videolist_component__WEBPACK_IMPORTED_MODULE_8__["VideolistComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"],
                _insert_insert_component__WEBPACK_IMPORTED_MODULE_11__["InsertComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"],
                _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_13__["ReserveComponent"],
                _mock_video_mock_video_component__WEBPACK_IMPORTED_MODULE_14__["MockVideoComponent"],
                _video_center_video_center_component__WEBPACK_IMPORTED_MODULE_15__["VideoCenterComponent"],
                _shell_shell_component__WEBPACK_IMPORTED_MODULE_17__["ShellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(routes) {
        this.routes = routes;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('username') != null) {
            return true;
        }
        else {
            this.routes.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        //@Injectable({providedIn: 'root'})
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/delete/delete.component.css":
/*!*********************************************!*\
  !*** ./src/app/delete/delete.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/delete/delete.component.html":
/*!**********************************************!*\
  !*** ./src/app/delete/delete.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/delete/delete.component.ts":
/*!********************************************!*\
  !*** ./src/app/delete/delete.component.ts ***!
  \********************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/delete/delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/videolist\" width=\"50%\">Videos</button>\n<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/customer\" width=\"50%\">Customers</button>\n<br>-->\n\n\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Item TItle</th>\n      <th scope=\"col\">Running Time</th>\n      <th scope=\"col\">Item Genre</th>\n      <th scope=\"col\">Rating</th>\n      <th scope=\"col\">Director</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\"></th>\n      \n    </tr>\n  </thead>\n  <tbody>\n    <tr (click)=\"onSelect(video)\" *ngFor = \"let video of videos\">\n      <th scope=\"row\">{{video.id}}</th>\n      <td>{{video.title}}</td>\n      <td>{{video.runtime}}</td>\n      <td>{{video.genre}}</td>\n      <td>{{video.rating}}</td>\n      <td>{{video.director}}</td>\n      <td>{{video.status}}</td>\n      <td><button type=\"button\" class=\"btn btn-primary\">Reserve</button>\n      </td>\n     \n    </tr>\n    \n   \n  </tbody>\n</table>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);

  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}*/
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.SelectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            inputs: ['videos'],
            outputs: ['SelectVideo'],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/insert/insert.component.css":
/*!*********************************************!*\
  !*** ./src/app/insert/insert.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n\r\n    border:2px solid black;\r\n    margin-left: 300px;\r\n    margin-right: 300px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height:500px;\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n}\r\n.fields{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    margin: 5px;\r\n\r\n}\r\n.input{\r\n    padding: 5px;\r\n    width: 500px;\r\n}\r\n#addbutton{\r\n    padding:10px;\r\n    margin:10px;\r\n    background-color: cadetblue;\r\n    color: white;\r\n    width: 120px;\r\n}\r\nlabel{\r\n    width:150px;\r\n}\r\nselect,input{\r\n    width: 200px; height:30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJ0L2luc2VydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZOztDQUVmO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYSxDQUFDLFlBQVk7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9pbnNlcnQvaW5zZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlcntcclxuXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuLmZpZWxkc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG4jYWRkYnV0dG9ue1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5zZWxlY3QsaW5wdXR7XHJcbiAgICB3aWR0aDogMjAwcHg7IGhlaWdodDozMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/insert/insert.component.html":
/*!**********************************************!*\
  !*** ./src/app/insert/insert.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1 align=\"center\">Add New Video</h1>\n<div id=\"wrapper\">\n    <div class=\"fields\">\n      <label>Title:</label><input type=\"text\" name=\"title\" value=\" \"> \n    </div>\n    <div class=\"fields\">\n        <label>Running Time:</label><input type=\"text\" name=\"runtime\" value=\"\"> \n      </div>\n    <div class=\"fields\">\n      <label>Genre:</label><input type=\"text\" name=\"genre\" value=\"\">\n\n    </div>\n    <div class=\"fields\">\n        <label>Rating:</label><input type=\"text\" name=\"rating\" value=\"\">\n\n      </div>\n    <div class=\"fields\">\n        <label>Director:</label><input type=\"text\" name=\"director\" value=\"\"> \n      </div>\n      <div class=\"fields\">\n          <label>Status:</label><input type=\"text\" name=\"status\" value=\"\">\n              \n        </div>\n  <div class=\"fields\">\n      \n \n      <button id=\"addbutton\"><a routerLink=\"/videocenter\" routerLinkActive=\"active\">Add</a></button>\n     \n  </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/insert/insert.component.ts":
/*!********************************************!*\
  !*** ./src/app/insert/insert.component.ts ***!
  \********************************************/
/*! exports provided: InsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponent", function() { return InsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InsertComponent = /** @class */ (function () {
    function InsertComponent() {
    }
    InsertComponent.prototype.ngOnInit = function () {
    };
    InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insert',
            template: __webpack_require__(/*! ./insert.component.html */ "./src/app/insert/insert.component.html"),
            styles: [__webpack_require__(/*! ./insert.component.css */ "./src/app/insert/insert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InsertComponent);
    return InsertComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n\r\n    border:2px solid black;\r\n    margin-left: 400px;\r\n    margin-right: 400px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height:400px;\r\n    padding-top: 90px;\r\n    \r\n}\r\n.fields{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    \r\n\r\n}\r\n.input{\r\n    padding: 5px;\r\n}\r\n#loginbutton{\r\n    padding-top:5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    width:150px;\r\n    margin-left: 150px;\r\n\r\n    background-color: cadetblue;\r\n    color: white;\r\n}\r\nlabel{\r\n    width:150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTs7O0NBR2Y7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1COztJQUVuQiw0QkFBNEI7SUFDNUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVye1xyXG5cclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgICBcclxufVxyXG4uZmllbGRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgXHJcblxyXG59XHJcbi5pbnB1dHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jbG9naW5idXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5sYWJlbHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1 align=\"center\">Login</h1>\n<div id=\"wrapper\">\n  <div class=\"fields\">\n    <label>Username:</label><input type=\"text\" name=\"username\" placeholder=\"username\" #u1> \n  </div>\n  <div class=\"fields\">\n    <label>Password:</label><input type=\"password\" name=\"password\" placeholder=\"password\" #p2>\n  </div>\n<div class=\"fields\">\n    <button (click)=\"check(u1.value, p2.value)\" id=\"loginbutton\"><a routerLink=\"/shell\" routerLinkActive=\"active\">Login</a></button>\n</div>\n<span align=\"center\">{{ msg }}</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, routes) {
        this.service = service;
        this.routes = routes;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.check = function (username, password) {
        var output = this.service.checkusernameandpassword(username, password);
        if (output == true) {
            this.routes.navigate(['/shell']);
        }
        else {
            this.msg = 'Invalid username or password';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mock-video/mock-video.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mock-video/mock-video.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vY2stdmlkZW8vbW9jay12aWRlby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mock-video/mock-video.component.html":
/*!******************************************************!*\
  !*** ./src/app/mock-video/mock-video.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-9\">\r\n        <app-home (SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"></app-home>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n        <app-reserve *ngIf=\"selectedVideo\" [video]=\"selectedVideo\"></app-reserve>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mock-video/mock-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mock-video/mock-video.component.ts ***!
  \****************************************************/
/*! exports provided: MockVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockVideoComponent", function() { return MockVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import {VideoService} from './../video.service';
var MockVideoComponent = /** @class */ (function () {
    function MockVideoComponent() {
        this.videos = [
            { "_id": "eg34tgqqtf", "id": 1, "title": 'Mr. Nice', "genre": 'fantasy', "runtime": '120 minutes', "status": "available", "rating": "5", "director": "xyx" },
            { "_id": "eg34tcxvtf", "id": 2, "title": 'Narco', "genre": 'fantasy', "runtime": '120 minutes', "status": "unavailable", "rating": "5", "director": "xyx" },
            { "_id": "eg3dsdvgtf", "id": 3, "title": 'Bombasto', "genre": 'fantasy', "runtime": '120 minutes', "status": "available", "rating": "5", "director": "xyx" },
        ];
    }
    MockVideoComponent.prototype.ngOnInit = function () {
    };
    MockVideoComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    };
    MockVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mock-video',
            template: __webpack_require__(/*! ./mock-video.component.html */ "./src/app/mock-video/mock-video.component.html"),
            styles: [__webpack_require__(/*! ./mock-video.component.css */ "./src/app/mock-video/mock-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockVideoComponent);
    return MockVideoComponent;
}());

/*
@Component({
  selector: 'app-mock-video',
  templateUrl: './mock-video.component.html',
  styleUrls: ['./mock-video.component.css'],
  providers: [VideoService]
})
export class MockVideoComponent implements OnInit {
  videos: Array<Video>;

  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);

  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}*/ 


/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyserviceService = /** @class */ (function () {
    function MyserviceService() {
    }
    MyserviceService.prototype.checkusernameandpassword = function (uname, pwd) {
        if (uname == "admin" && pwd == "admin123") {
            localStorage.setItem('username', "admin");
            return true;
        }
        else {
            return false;
        }
    };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/reserve/reserve.component.css":
/*!***********************************************!*\
  !*** ./src/app/reserve/reserve.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#wrapper{\r\n\r\n    border:2px solid black;\r\n    margin-left: 300px;\r\n    margin-right: 300px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height:500px;\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n}*/\r\n.fields{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    margin: 5px;\r\n\r\n}\r\n.input{\r\n    padding: 5px;\r\n    width: 500px;\r\n}\r\n#reservebutton{\r\n    padding:10px;\r\n    margin:10px;\r\n    background-color: cadetblue;\r\n    color: white;\r\n    width: 120px;\r\n}\r\nlabel{\r\n    width:150px;\r\n}\r\nselect,input{\r\n    width: 200px; height:30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2ZS9yZXNlcnZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNIO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7O0NBRWY7QUFFRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhLENBQUMsWUFBWTtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmUvcmVzZXJ2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojd3JhcHBlcntcclxuXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn0qL1xyXG4uZmllbGRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbiNyZXNlcnZlYnV0dG9ue1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5zZWxlY3QsaW5wdXR7XHJcbiAgICB3aWR0aDogMjAwcHg7IGhlaWdodDozMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/reserve/reserve.component.html":
/*!************************************************!*\
  !*** ./src/app/reserve/reserve.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1 align=\"center\">Reserve Video</h1>\n<div id=\"wrapper\">\n    <div class=\"fields\">\n      <label>Title:</label><input type=\"text\" name=\"title\" value=\" {{video.title}}\"> \n    </div>\n    <div class=\"fields\">\n        <label>Running Time:</label><input type=\"text\" name=\"runtime\" value=\"{{video.runtime}}\"> \n      </div>\n    <div class=\"fields\">\n      <label>Genre:</label><input type=\"text\" name=\"genre\" value=\"{{video.genre}}\">\n\n    </div>\n    <div class=\"fields\">\n        <label>Rating:</label><input type=\"text\" name=\"rating\" value=\"{{video.rating}}\">\n\n      </div>\n    <div class=\"fields\">\n        <label>Director:</label><input type=\"text\" name=\"director\" value=\"{{video.director}}\"> \n      </div>\n      <div class=\"fields\">\n          <label>Status:</label><input type=\"text\" name=\"status\" value=\"{{video.status}}\">\n              \n        </div>\n        <div class=\"fields\">\n          <label>Customer:</label><input type=\"text\" name=\"status\" value=\"\">\n              \n        </div>\n  <div class=\"fields\">\n      \n \n    <button id=\"reservebutton\"><a routerLink=\"\" routerLinkActive=\"active\">Reserve</a></button>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/reserve/reserve.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reserve/reserve.component.ts ***!
  \**********************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReserveComponent = /** @class */ (function () {
    function ReserveComponent() {
    }
    ReserveComponent.prototype.ngOnInit = function () {
    };
    ReserveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! ./reserve.component.html */ "./src/app/reserve/reserve.component.html"),
            inputs: ['video'],
            styles: [__webpack_require__(/*! ./reserve.component.css */ "./src/app/reserve/reserve.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.css":
/*!*******************************************!*\
  !*** ./src/app/shell/shell.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-video-center></app-video-center>"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.css */ "./src/app/shell/shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#wrapper{\r\n\r\n    border:2px solid black;\r\n    margin-left: 300px;\r\n    margin-right: 300px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height:500px;\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n}*/\r\n.fields{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    margin: 5px;\r\n\r\n}\r\n.input{\r\n    padding: 5px;\r\n    width: 500px;\r\n}\r\n#deletebutton,#updatebutton{\r\n    padding:10px;\r\n    margin:10px;\r\n    background-color: cadetblue;\r\n    color: white;\r\n    width: 120px;\r\n}\r\nlabel{\r\n    width:150px;\r\n}\r\nselect,input{\r\n    width: 200px; height:30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZOztDQUVmO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYSxDQUFDLFlBQVk7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiN3cmFwcGVye1xyXG5cclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufSovXHJcbi5maWVsZHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuI2RlbGV0ZWJ1dHRvbiwjdXBkYXRlYnV0dG9ue1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5zZWxlY3QsaW5wdXR7XHJcbiAgICB3aWR0aDogMjAwcHg7IGhlaWdodDozMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1 align=\"center\">Edit Video</h1>\n<div id=\"wrapper\">\n    <div class=\"fields\">\n      <label>Title:</label><input type=\"text\" name=\"title\" value=\" {{video.title}}\"> \n    </div>\n    <div class=\"fields\">\n        <label>Running Time:</label><input type=\"text\" name=\"runtime\" value=\"{{video.runtime}}\"> \n      </div>\n    <div class=\"fields\">\n      <label>Genre:</label><input type=\"text\" name=\"genre\" value=\"{{video.genre}}\">\n\n    </div>\n    <div class=\"fields\">\n        <label>Rating:</label><input type=\"text\" name=\"rating\" value=\"{{video.rating}}\">\n\n      </div>\n    <div class=\"fields\">\n        <label>Director:</label><input type=\"text\" name=\"director\" value=\"{{video.director}}\"> \n      </div>\n      <div class=\"fields\">\n          <label>Status:</label><input type=\"text\" name=\"status\" value=\"{{video.status}}\">\n              \n        </div>\n  <div class=\"fields\">\n      \n \n      <button id=\"updatebutton\">Update</button>\n      <button id=\"deletebutton\">Delete</button>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            inputs: ['video'],
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/video-center/video-center.component.css":
/*!*********************************************************!*\
  !*** ./src/app/video-center/video-center.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNlbnRlci92aWRlby1jZW50ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/video-center/video-center.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-center/video-center.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-9\">\n      <app-videolist (SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"></app-videolist> <!--(SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"-->\n  </div>\n  <div class=\"col-sm-3\">\n      <app-update *ngIf=\"selectedVideo\" [video]=\"selectedVideo\"></app-update>\n    \n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/video-center/video-center.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-center/video-center.component.ts ***!
  \********************************************************/
/*! exports provided: VideoCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCenterComponent", function() { return VideoCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoCenterComponent = /** @class */ (function () {
    function VideoCenterComponent() {
        this.videos = [
            { "_id": "eg34tgqqtf", "id": 4, "title": 'Mr. Nice', "genre": 'fantasy', "runtime": '120 minutes', "status": "available", "rating": "5", "director": "xyx" },
            { "_id": "eg34tcxvtf", "id": 5, "title": 'Narco', "genre": 'fantasy', "runtime": '120 minutes', "status": "unavailable", "rating": "5", "director": "xyx" },
            { "_id": "eg3dsdvgtf", "id": 6, "title": 'Bombasto', "genre": 'fantasy', "runtime": '120 minutes', "status": "available", "rating": "5", "director": "xyx" },
        ];
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.addVideo = function () { };
    VideoCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-center',
            template: __webpack_require__(/*! ./video-center.component.html */ "./src/app/video-center/video-center.component.html"),
            styles: [__webpack_require__(/*! ./video-center.component.css */ "./src/app/video-center/video-center.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoCenterComponent);
    return VideoCenterComponent;
}());



/***/ }),

/***/ "./src/app/videolist/videolist.component.css":
/*!***************************************************!*\
  !*** ./src/app/videolist/videolist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvbGlzdC92aWRlb2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/videolist/videolist.component.html":
/*!****************************************************!*\
  !*** ./src/app/videolist/videolist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p align=\"right\">Administrator<button type=\"button\" class=\"btn btn-primary\" routerLink=\"\">Logout</button></p>\n<br>\n<button type=\"button\" class=\"btn btn-primary\" routerLink=\"\">Videos</button>\n<button type=\"button\" class=\"btn btn-primary\" routerLink=\"\">Customers</button>\n<br>\n-->\n<p align=\"right\"><button type=\"button\" class=\"btn btn-primary\" routerLink=\"/insert\" routerLinkActive=\"active\">Add New Video</button></p>\n\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Item TItle</th>\n      <th scope=\"col\">Running Time</th>\n      <th scope=\"col\">Item Genre</th>\n      <th scope=\"col\">Rating</th>\n      <th scope=\"col\">Director</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Update</th>\n      <th scope=\"col\">Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr (click)=\"onSelect(video)\" *ngFor = \"let video of videos\">\n      <th scope=\"row\">{{video.id}}</th>\n      <td>{{video.title}}</td>\n      <td>{{video.runtime}}</td>\n      <td>{{video.genre}}</td>\n      <td>{{video.rating}}</td>\n      <td>{{video.director}}</td>\n      <td>{{video.status}}</td>\n      <td><button type=\"button\" class=\"btn btn-primary\">Update</button>\n      </td>\n      <td><button type=\"button\" class=\"btn btn-primary\">Delete</button>\n      </td>\n    </tr>\n    \n   \n  </tbody>\n</table>\n\n\n\n"

/***/ }),

/***/ "./src/app/videolist/videolist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/videolist/videolist.component.ts ***!
  \**************************************************/
/*! exports provided: VideolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideolistComponent", function() { return VideolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideolistComponent = /** @class */ (function () {
    function VideolistComponent() {
        this.SelectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideolistComponent.prototype.ngOnInit = function () {
    };
    VideolistComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videolist',
            template: __webpack_require__(/*! ./videolist.component.html */ "./src/app/videolist/videolist.component.html"),
            inputs: ['videos'],
            outputs: ['SelectVideo'],
            styles: [__webpack_require__(/*! ./videolist.component.css */ "./src/app/videolist/videolist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideolistComponent);
    return VideolistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\v8\example\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map