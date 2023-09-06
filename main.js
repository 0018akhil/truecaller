"use strict";
(self["webpackChunkmobileapi_front"] = self["webpackChunkmobileapi_front"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/log-in-component/log-in-component.component */ 5776);
/* harmony import */ var _pages_register_component_register_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register-component/register-component.component */ 6996);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authguard.service */ 8805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;







const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
  canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__.AuthguardService]
}, {
  path: 'signin',
  component: _pages_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_0__.LogInComponentComponent
}, {
  path: 'signup',
  component: _pages_register_component_register_component_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponentComponent
}, {
  path: '**',
  redirectTo: 'signin'
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
var _class;



class AppComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle("Truecaller");
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/log-in-component/log-in-component.component */ 5776);
/* harmony import */ var _pages_register_component_register_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register-component/register-component.component */ 6996);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/header/header.component */ 3340);
/* harmony import */ var _pages_home_body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/body/body.component */ 6271);
/* harmony import */ var _pages_home_body_contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/body/contactlist/contactlist.component */ 4167);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/app */ 9674);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;


















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS,
    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.firebase
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_14__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_14__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.firebase)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.getFirestore)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_2__.LogInComponentComponent, _pages_register_component_register_component_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponentComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _pages_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _pages_home_body_body_component__WEBPACK_IMPORTED_MODULE_6__.BodyComponent, _pages_home_body_contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_7__.ContactlistComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_14__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.FirestoreModule]
  });
})();

/***/ }),

/***/ 6271:
/*!***************************************************!*\
  !*** ./src/app/pages/home/body/body.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyComponent": () => (/* binding */ BodyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist/contactlist.component */ 4167);
var _class;








function BodyComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-contactlist", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dataEvent", function BodyComponent_ng_container_46_Template_app_contactlist_dataEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.handleChildData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactName", i_r3.name)("contactNumber", i_r3.phone_number)("notification", i_r3.notification);
  }
}
class BodyComponent {
  constructor(http, router, loginService, afs) {
    this.http = http;
    this.router = router;
    this.loginService = loginService;
    this.afs = afs;
    this.spamnumber = "";
  }
  ngOnInit() {
    this.getContacts();
  }
  addContact(name, number) {
    const token = "Token " + this.loginService.getToken();
    this.http.post("http://16.171.27.165:8000/addcontact", {
      name: name,
      number: number
    }, {
      headers: {
        'Authorization': token
      }
    }).subscribe(data => {
      this.getContacts();
    }, error => {});
  }
  addSpam(number) {
    const token = "Token " + this.loginService.getToken();
    this.http.post("http://16.171.27.165:8000/spam", {
      number: number
    }, {
      headers: {
        'Authorization': token
      }
    }).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  getContacts() {
    const token = "Token " + this.loginService.getToken();
    this.http.get("http://16.171.27.165:8000/getcontactlist", {
      headers: {
        'Authorization': token
      }
    }).subscribe(data => {
      this.data = data;
    });
  }
  onSubmit(myform) {
    if (myform.form.status == "VALID") {
      this.addContact(myform.form.value.name, myform.form.value.number);
    } else {
      console.log("Please fill the empty input");
    }
  }
  onSubmitSpam(myform) {
    if (myform.form.status == "VALID") {
      this.addSpam(myform.form.value.number);
      this.spamnumber = "";
    } else {
      console.log("Please fill the empty input");
    }
  }
  handleChildData(data) {
    this.getContacts();
  }
}
_class = BodyComponent;
_class.ɵfac = function BodyComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-body"]],
  decls: 47,
  vars: 2,
  consts: [["id", "app", 1, "grid", "grid-cols-2", "divide-x"], [1, "p-10"], [1, "text-center", "text-2xl", "font-semibold"], [1, "space-y-6", 3, "ngSubmit"], ["myform", "ngForm"], ["for", "name", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], [1, "mt-2"], ["id", "name", "name", "name", "type", "text", "ngModel", "", "required", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["for", "number", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], ["id", "number", "name", "number", "type", "number", "ngModel", "", "required", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["type", "submit", 1, "flex", "w-full", "justify-center", "rounded-md", "bg-indigo-600", "px-3", "py-1.5", "text-sm", "font-semibold", "leading-6", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600"], [1, "w-48", "h-1", "mx-auto", "my-4", "bg-gray-100", "border-0", "rounded", "md:my-10", "dark:bg-gray-700"], ["spamForm", "ngForm"], ["id", "number", "name", "number", "type", "number", "required", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "flex", "w-full", "justify-center", "rounded-md", "bg-red-600", "px-3", "py-1.5", "text-sm", "font-semibold", "leading-6", "text-white", "shadow-sm", "hover:bg-red-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-red-600"], [1, "container", "mx-auto", "h-screen", "overflow-scroll"], [1, "flex", "items-center", "px-5", "py-2"], [1, "w-1/2"], [1, "text-xs", "uppercase", "text-gray-600", "font-bold"], [1, "w-1/4"], [4, "ngFor", "ngForOf"], [3, "contactName", "contactNumber", "notification", "dataEvent"]],
  template: function BodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BodyComponent_Template_form_ngSubmit_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Add Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Add To Spam");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 3, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BodyComponent_Template_form_ngSubmit_24_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmitSpam(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6)(30, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BodyComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.spamnumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div")(32, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Spam");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "div", 1)(36, "div", 16)(37, "span", 17)(38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Contact Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 19)(41, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 19)(44, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Notification");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, BodyComponent_ng_container_46_Template, 2, 3, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.spamnumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__.ContactlistComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4167:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/body/contactlist/contactlist.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactlistComponent": () => (/* binding */ ContactlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
var _class;





class ContactlistComponent {
  sendDataToParent() {
    const dataToSend = 'Notfication Added to Contact';
    this.dataEvent.emit(dataToSend);
  }
  constructor(http, router, loginService) {
    this.http = http;
    this.router = router;
    this.loginService = loginService;
    this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  addNotification(number) {
    const token = "Token " + this.loginService.getToken();
    this.http.post("http://16.171.27.165:8000/addnotification", {
      number: number
    }, {
      headers: {
        'Authorization': token
      }
    }).subscribe(data => {
      this.sendDataToParent();
    }, error => {});
  }
  onNotificationChange(phone_number) {
    this.addNotification(phone_number);
  }
}
_class = ContactlistComponent;
_class.ɵfac = function ContactlistComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-contactlist"]],
  inputs: {
    contactName: "contactName",
    contactNumber: "contactNumber",
    notification: "notification"
  },
  outputs: {
    dataEvent: "dataEvent"
  },
  decls: 13,
  vars: 3,
  consts: [[1, "hover:bg-gray-100", "cursor-pointer", "bg-white", "shadow", "flex", "p-5", "items-center", "mb-5", "rounded-lg"], [1, "w-1/2"], [1, "flex", "items-center"], [1, "ml-4"], [1, "capitalize", "block", "text-gray-800", "text-lg"], [1, "w-1/4"], [1, "text-gray-600", "text-lg"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", 1, "sr-only", "peer", 3, "checked", "change"], [1, "w-11", "h-6", "bg-gray-200", "rounded-full", "peer", "peer-focus:ring-4", "peer-focus:ring-indigo-300", "dark:peer-focus:ring-indigo-800", "dark:bg-gray-700", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-0.5", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "dark:border-gray-600", "peer-checked:bg-indigo-600"]],
  template: function ContactlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "label", 7)(11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactlistComponent_Template_input_change_11_listener() {
        return ctx.onNotificationChange(ctx.contactNumber);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contactName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contactNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.notification);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0bGlzdC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ib2R5L2NvbnRhY3RsaXN0L2NvbnRhY3RsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3340:
/*!*******************************************************!*\
  !*** ./src/app/pages/home/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
var _class;



class HeaderComponent {
  constructor(LoginService, router) {
    this.LoginService = LoginService;
    this.router = router;
  }
  logout() {
    this.LoginService.clearToken();
    this.router.navigate(['/signin']);
  }
}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 9,
  vars: 0,
  consts: [[1, "bg-gray-100"], ["aria-label", "Global", 1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "p-6", "lg:px-8"], [1, "flex", "flex-1"], ["href", "#", 1, "-m-1.5", "p-1.5"], [1, "text-center", "text-2xl", "font-bold", "leading-9", "tracking-tight", "text-gray-900"], [1, "flex", "flex-1", "justify-end"], [1, "flex", "justify-center", "rounded-md", "bg-indigo-600", "px-3", "py-1.5", "text-sm", "font-semibold", "leading-6", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Truecaller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Log out");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3340);
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/body.component */ 6271);
var _class;






class HomeComponent {
  ngAfterViewInit() {
    const token = this.loginService.getToken();
    if (token != null) {
      let firsttime = true;
      this.valueChangesSubscription = this.afs.collection('chatmessages').doc(token).valueChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500)).subscribe(data => {
        if (firsttime == true) {
          firsttime = false;
          return;
        }
        this.spam_number = data.spam_number;
        this.user = data.user;
        this.displayNotification = false;
        setTimeout(() => {
          this.displayNotification = true;
        }, 5000);
      });
    }
  }
  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
  constructor(loginService, afs) {
    this.loginService = loginService;
    this.afs = afs;
    this.valueChangesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.spam_number = "";
    this.user = "";
    this.displayNotification = true;
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 9,
  vars: 3,
  consts: [["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", 3, "hidden"], [1, "font-bold"], [1, "block", "sm:inline", "mx-2"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "strong", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "This number has been add to spam by user");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-header")(8, "app-body");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.displayNotification);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.spam_number);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.user);
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _body_body_component__WEBPACK_IMPORTED_MODULE_2__.BodyComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5776:
/*!**********************************************************************!*\
  !*** ./src/app/pages/log-in-component/log-in-component.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInComponentComponent": () => (/* binding */ LogInComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;







function LogInComponentComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
class LogInComponentComponent {
  constructor(http, loginService, router, FirestoreService) {
    this.http = http;
    this.loginService = loginService;
    this.router = router;
    this.FirestoreService = FirestoreService;
    this.errorMessage = '';
    this.errorMessagePresent = false;
  }
  getLogin(userName, password) {
    this.http.post("http://16.171.27.165:8000/signin", {
      username: userName,
      password: password
    }).subscribe(data => {
      this.loginService.setToken(data.token);
      this.FirestoreService.setValue(data.token);
      this.router.navigate(['']);
    }, error => {
      this.errorMessage = error.error.error;
      this.errorMessagePresent = true;
    });
  }
  onSubmit(myform) {
    this.getLogin(myform.form.value.username, myform.form.value.password);
  }
}
_class = LogInComponentComponent;
_class.ɵfac = function LogInComponentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__.FirestoreService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-log-in-component"]],
  decls: 24,
  vars: 1,
  consts: [[1, "flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-12", "lg:px-8"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-sm"], [1, "mt-10", "text-center", "text-2xl", "font-bold", "leading-9", "tracking-tight", "text-gray-900"], ["class", "text-center text-red-500", 4, "ngIf"], [1, "mt-10", "sm:mx-auto", "sm:w-full", "sm:max-w-sm"], [1, "space-y-6", 3, "ngSubmit"], ["myform", "ngForm"], ["for", "username", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], [1, "mt-2"], ["id", "username", "name", "username", "type", "text", "ngModel", "", "required", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["for", "password", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], ["id", "password", "name", "password", "type", "password", "ngModel", "", "required", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["type", "submit", 1, "flex", "w-full", "justify-center", "rounded-md", "bg-indigo-600", "px-3", "py-1.5", "text-sm", "font-semibold", "leading-6", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600"], [1, "text-sm"], ["href", "/signup", 1, "font-semibold", "text-indigo-600", "hover:text-indigo-500"], [1, "text-center", "text-red-500"]],
  template: function LogInComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Truecaller");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LogInComponentComponent_p_4_Template, 2, 1, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "form", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LogInComponentComponent_Template_form_ngSubmit_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "SignUp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessagePresent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctaW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9nLWluLWNvbXBvbmVudC9sb2ctaW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6996:
/*!**************************************************************************!*\
  !*** ./src/app/pages/register-component/register-component.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponentComponent": () => (/* binding */ RegisterComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;




function RegisterComponentComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function RegisterComponentComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RegisterComponentComponent {
  constructor(http) {
    this.http = http;
    this.errorMessage = '';
    this.errorMessagePresent = false;
    this.successMessagePresent = false;
  }
  register(userName, password, phonenumber, name) {
    this.http.post("http://16.171.27.165:8000/signup", {
      username: userName,
      password: password,
      phone_number: phonenumber,
      name: name
    }).subscribe(data => {
      this.successMessagePresent = true;
    }, error => {
      this.errorMessage = error.error.error;
      this.errorMessagePresent = true;
    });
  }
  onSubmit(myform) {
    this.register(myform.form.value.username, myform.form.value.password, myform.form.value.phonenumber, myform.form.value.name);
  }
}
_class = RegisterComponentComponent;
_class.ɵfac = function RegisterComponentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-register-component"]],
  decls: 35,
  vars: 2,
  consts: [[1, "flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-12", "lg:px-8"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-sm"], [1, "mt-10", "text-center", "text-2xl", "font-bold", "leading-9", "tracking-tight", "text-gray-900"], ["class", "text-center text-red-500", 4, "ngIf"], ["class", "text-center text-green-500", 4, "ngIf"], [1, "mt-10", "sm:mx-auto", "sm:w-full", "sm:max-w-sm"], [1, "space-y-6", 3, "ngSubmit"], ["myform", "ngForm"], ["for", "username", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], [1, "mt-2"], ["id", "username", "name", "username", "type", "text", "required", "", "ngModel", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["for", "password", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], ["id", "password", "name", "password", "type", "password", "required", "", "ngModel", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["for", "phonenumber", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], ["id", "phonenumber", "name", "phonenumber", "type", "number", "required", "", "ngModel", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["for", "name", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], ["id", "name", "name", "name", "type", "text", "required", "", "ngModel", "", 1, "block", "w-full", "rounded-md", "border-0", "p-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "placeholder:text-gray-400", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6"], ["type", "submit", 1, "flex", "w-full", "justify-center", "rounded-md", "bg-indigo-600", "px-3", "py-1.5", "text-sm", "font-semibold", "leading-6", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600"], [1, "text-sm"], ["href", "/signin", 1, "font-semibold", "text-indigo-600", "hover:text-indigo-500"], [1, "text-center", "text-red-500"], [1, "text-center", "text-green-500"]],
  template: function RegisterComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Truecaller");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponentComponent_p_4_Template, 2, 1, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterComponentComponent_p_5_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponentComponent_Template_form_ngSubmit_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSubmit(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div")(25, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div")(30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18)(33, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SignIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessagePresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessagePresent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXItY29tcG9uZW50L3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8805:
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthguardService": () => (/* binding */ AuthguardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
var _class;



class AuthguardService {
  constructor(router, loginService) {
    this.router = router;
    this.loginService = loginService;
  }
  canActivate() {
    const token = this.loginService.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
_class = AuthguardService;
_class.ɵfac = function AuthguardService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1343:
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
var _class;


class FirestoreService {
  constructor(afs) {
    this.afs = afs;
  }
  setValue(documentName) {
    this.afs.collection('chatmessages').doc(documentName).set({
      'number': ''
    }).then(() => {});
  }
  WaitforFirebaseChange(documentName) {
    this.afs.collection('chatmessages').doc(documentName).valueChanges().subscribe(data => {
      alert("running");
    });
  }
}
_class = FirestoreService;
_class.ɵfac = function FirestoreService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

const TOKEN_KEY = 'auth_token';
class LoginService {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
_class = LoginService;
_class.ɵfac = function LoginService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    projectId: 'namestore-e7129',
    appId: '1:311718608516:web:516b072bebf7b2f9c8ccd1',
    databaseURL: 'https://namestore-e7129-default-rtdb.firebaseio.com',
    storageBucket: 'namestore-e7129.appspot.com',
    apiKey: 'AIzaSyBqY5hv5tH51Q_Y-3tlR0QymEzu-xzwHd0',
    authDomain: 'namestore-e7129.firebaseapp.com',
    messagingSenderId: '311718608516'
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map