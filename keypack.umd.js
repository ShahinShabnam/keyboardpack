(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/add/operator/filter'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/add/operator/filter', '@angular/forms'], factory) :
	(factory((global.keypack = {}),global.core,global.common,null,global.forms));
}(this, (function (exports,core,common,filter,forms) { 'use strict';

// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
var CustomKeyboardService = (function () {
    function CustomKeyboardService() {
        alert("service cont");
    }
    /**
     * @param {?} passvalue
     * @return {?}
     */
    CustomKeyboardService.prototype.passvalue = function (passvalue) {
        console.log(passvalue);
        this.emit('input:type:change', passvalue);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CustomKeyboardService.prototype.filterOn = function (id) {
        return (this.subject.filter(function (d) { return (d.id === id); }));
    };
    
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    CustomKeyboardService.prototype.emit = function (id, options) {
        this.subject.next({ id: id, data: options });
    };
    return CustomKeyboardService;
}());
CustomKeyboardService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
CustomKeyboardService.ctorParameters = function () { return []; };

var CustomKeyboardComponent = (function () {
    /**
     * @param {?} customKeyboardService
     */
    function CustomKeyboardComponent(customKeyboardService) {
        var _this = this;
        this.customKeyboardService = customKeyboardService;
        this.enterKey = ["Enter"];
        this.spacebarKey = ["Spacebar"];
        this.CapsLock = false;
        this.inputstr = "";
        this.caretPos = 0;
        alert("componnt");
        this.numberKeys = [
            {
                key: "7",
                widthRatio: 30,
            },
            {
                key: "8",
                widthRatio: 30,
            },
            {
                key: "9",
                widthRatio: 30,
            },
            {
                key: "4",
                widthRatio: 30,
            },
            {
                key: "5",
                widthRatio: 30,
            },
            {
                key: "6",
                widthRatio: 30,
            },
            {
                key: "1",
                widthRatio: 30,
            },
            {
                key: "2",
                widthRatio: 30,
            },
            {
                key: "3",
                widthRatio: 30,
            },
            {
                key: "0",
                widthRatio: 30,
            },
            {
                key: "Enter",
                widthRatio: 60,
            },
        ];
        this.escGroup = [
            {
                key: "Esc",
                widthRatio: 6.8,
            },
            {
                key: "q",
                widthRatio: 7.92,
            },
            {
                key: "w",
                widthRatio: 7.92,
            },
            {
                key: "e",
                widthRatio: 7.92,
            },
            {
                key: "r",
                widthRatio: 7.92,
            },
            {
                key: "t",
                widthRatio: 7.92,
            },
            {
                key: "y",
                widthRatio: 7.92,
            },
            {
                key: "u",
                widthRatio: 7.92,
            },
            {
                key: "i",
                widthRatio: 7.92,
            },
            {
                key: "o",
                widthRatio: 7.92,
            },
            {
                key: "p",
                widthRatio: 7.92,
            },
            {
                key: "bksp",
                widthRatio: 7.92,
            },
        ],
            this.capsGroup = [
                {
                    key: "caps",
                    widthRatio: 11,
                },
                {
                    key: "a",
                    widthRatio: 9.3,
                },
                {
                    key: "s",
                    widthRatio: 9.3,
                },
                {
                    key: "d",
                    widthRatio: 9.3,
                },
                {
                    key: "f",
                    widthRatio: 9.3,
                },
                {
                    key: "g",
                    widthRatio: 9.3,
                },
                {
                    key: "h",
                    widthRatio: 9.3,
                },
                {
                    key: "j",
                    widthRatio: 9.3,
                },
                {
                    key: "k",
                    widthRatio: 9.3,
                },
                {
                    key: "l",
                    widthRatio: 9.3,
                },
                {
                    key: "<--",
                    widthRatio: 9.8,
                },
                {
                    key: "z",
                    widthRatio: 9.4,
                },
                {
                    key: "x",
                    widthRatio: 9.4,
                },
                {
                    key: "c",
                    widthRatio: 9.4,
                },
                {
                    key: "v",
                    widthRatio: 9.4,
                },
                {
                    key: "b",
                    widthRatio: 9.4,
                },
                {
                    key: "n",
                    widthRatio: 9.4,
                },
                {
                    key: "m",
                    widthRatio: 9.4,
                },
                {
                    key: "-",
                    widthRatio: 9.4,
                },
                {
                    key: "-->",
                    widthRatio: 10,
                },
            ];
        this.subscriptions = this.customKeyboardService.filterOn('input:type:change').subscribe(function (d) {
            alert(d.data + "components");
            _this.inputType = d.data;
        });
    }
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.ngOnInit = function () {
        this.inputstr = "";
        this.CapsLock = false;
        // this.keys = ["Esc", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "bksp", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "<--", "z", "x", "c", "v", "b", "n", "m", "-", "-->", "Spacebar", "0",];
        this.caretPos = 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomKeyboardComponent.prototype.keyPress = function (event) {
        if (event.keyCode == "27" || event.keyCode == "13") {
            console.log(String.fromCharCode(event.keyCode));
        }
        else if (event.keyCode == "20") {
            this.Caps();
        }
        else if (event.keyCode == "17") {
        }
        else {
            this.inputstr = event.target.value;
        }
    };
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.Caps = function () {
        if (this.CapsLock) {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 0; i <= 36; i++) {
                if (i >= 1 && i <= 10) {
                    this.escGroup[i].key = this.escGroup[i].key.toLowerCase();
                }
                else if (i >= 16 && i <= 24) {
                    this.escGroup[i].key = this.escGroup[i].key.toLowerCase();
                }
                else if (i >= 30 && i <= 36) {
                    this.escGroup[i].key = this.escGroup[i].key.toLowerCase();
                }
            }
        }
        else {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 0; i <= 36; i++) {
                if (i >= 1 && i <= 10) {
                    this.escGroup[i].key = this.escGroup[i].key.toUpperCase();
                }
                else if (i >= 16 && i <= 24) {
                    this.escGroup[i].key = this.escGroup[i].key.toUpperCase();
                }
                else if (i >= 30 && i <= 36) {
                    this.escGroup[i].key = this.escGroup[i].key.toUpperCase();
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} inputTextArea
     * @return {?}
     */
    CustomKeyboardComponent.prototype.click = function (item, inputTextArea) {
        alert(item);
        this.getCaretPos(inputTextArea); //Get Cursor Position From Text Area
        if (item === "Esc" || item === "Enter") {
            console.log(item);
        }
        else {
            if (item !== "bksp" && item !== "Caps" && item !== "Spacebar" && item !== "-->" && item !== "<--") {
                // console.log('lenth' + this.inputstr.length + 'carsor' + this.caretPos);
                if (this.inputstr.length > this.caretPos) {
                    var /** @type {?} */ tempstr = this.inputstr.substring(0, this.caretPos);
                    tempstr += item;
                    this.inputstr = tempstr + this.inputstr.substring(this.caretPos, this.inputstr.length);
                    this.caretPos--;
                    this.inputTextArea = inputTextArea;
                    this.setSelectionRange(this.caretPos, this.caretPos);
                }
                else if (this.inputstr.length === this.caretPos) {
                    this.inputstr += item;
                }
            }
            else if (item === "Spacebar") {
                this.inputstr += " ";
            }
            else if (item === "Caps") {
                this.Caps();
            }
            else if (item === "-->") {
                this.setSelectionRange(this.caretPos, this.caretPos); //Rigth shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item === "<--") {
                this.caretPos--;
                this.setSelectionRange(this.caretPos, this.caretPos); //Lift Shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item === "bksp") {
                this.inputstr = this.inputstr.substring(0, this.inputstr.length - 1);
            }
        }
        //document.getElementById('input').focus();//input focus...
    };
    /**
     * @param {?} oField
     * @return {?}
     */
    CustomKeyboardComponent.prototype.getCaretPos = function (oField) {
        this.inputTextArea = oField;
        if (oField.selectionStart || oField.selectionStart == '0') {
            this.caretPos = oField.selectionStart;
        }
    };
    /**
     * @param {?} selectionStart
     * @param {?} selectionEnd
     * @return {?}
     */
    CustomKeyboardComponent.prototype.setSelectionRange = function (selectionStart, selectionEnd) {
        if (this.inputTextArea.setSelectionRange) {
            this.inputTextArea.focus();
            this.inputTextArea.setSelectionRange(selectionStart, selectionEnd);
        }
        else if (this.inputTextArea.createTextRange) {
            var /** @type {?} */ range = this.inputTextArea.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    };
    return CustomKeyboardComponent;
}());
// inputDefine(inputType){
// }
CustomKeyboardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'custom-keyboard-component',
                template: "<div class=\"keyboard\"> <div style=\"height: 30px; background-color: #95B3D7;font-size: 20px;margin-bottom: 8px;padding-top: 7px\">Swipe Your Card</div> <input id=\"input\" #inputTextArea  (click)=\"getCaretPos(inputTextArea)\"  [type]=\"inputType\"    (keyup)=\"getCaretPos(inputTextArea)\" [(ngModel)]=\"inputstr\" style=\"width:90%;margin-left: 17px;background-color: #95B3D7;\" /> <br> <br> <div style=\"width:80%;float:left;height: 300px;\"> <div> <button style=\"font-size: 20px;height: 57px;float:left;margin-right:.5%;margin-bottom:.5%;word-wrap: break-word;\" *ngFor=\"let keyfst  of escGroup\"  [style.width.%]=\"keyfst.widthRatio\" (click)=\"click( escGroup.key,inputTextArea)\"> {{keyfst.key}} </button> </div> <div style=\"width:87%;float:left\"> <button style=\"float:left;height:57px;font-size: 20px;;margin-right:.5%;margin-bottom:.5%;word-wrap: break-word;\"  *ngFor=\"let caps of capsGroup\"  [style.width.%]=\"caps.widthRatio\" (click)=\"click(capsGroup.key,inputTextArea)\"> {{caps.key}} </button> </div> <div> <button style=\"font-size: 20px;width:12%;height:118px;word-wrap: break-word;\" > {{enterKey}} </button> </div> <div   > <button style=\"font-size: 20px;height: 57px;width:100%\" > {{spacebarKey}} </button> </div> </div> <!-- <div style=\"width:70%;float:left;height: 305px;margin-left:5px\"> </div> --> <div style=\"width:20%;float:right;\"> <button style=\"height:57px;font-size: 20px;word-wrap: break-word;padding-left: 10px; margin-right:1.5%;margin-bottom: 1.25%;\"  *ngFor=\"let numberKey of numberKeys\"  [style.width.%]=\"numberKey.widthRatio\"  (click)=\"click(numberKeys.key,inputTextArea)\"> {{numberKey.key}} </button> </div> </div>",
                styles: ["/* .button-group{ height: 100px; width: calc(100% - 100px); float: left; min-width: 990px; } .button{ width:calc((100%)/15); height: 50%; padding: 0px; background-color: black; color: white; } .keyboard{ height: 230px; width: 100%; float: left; background-color: aqua; padding-top: 18px; } */ .keyboard{ height: 330px; background-color: #DBE5F1; text-align: center; /* margin-top: 292px; */ /* max-width: 70; max-height: 40; */ /* min-width: 800px; position: fixed; */ }"],
                host: { '(window:keyup)': 'keyPress($event)' }
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardComponent.ctorParameters = function () { return [
    { type: CustomKeyboardService, },
]; };

var CustomKeyboardDirective = (function () {
    /**
     * @param {?} el
     */
    function CustomKeyboardDirective(el) {
        this.el = el;
    }
    return CustomKeyboardDirective;
}());
CustomKeyboardDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[customKeyboardDirective]'
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var CustomKeyboardPipe = (function () {
    function CustomKeyboardPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    CustomKeyboardPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return CustomKeyboardPipe;
}());
CustomKeyboardPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'customKeyboardPipe'
            },] },
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
CustomKeyboardPipe.ctorParameters = function () { return []; };

var CustomKeyboardModule = (function () {
    function CustomKeyboardModule() {
    }
    /**
     * @return {?}
     */
    CustomKeyboardModule.forRoot = function () {
        return {
            ngModule: CustomKeyboardModule,
            providers: [CustomKeyboardService]
        };
    };
    return CustomKeyboardModule;
}());
CustomKeyboardModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                ],
                declarations: [
                    CustomKeyboardComponent,
                    CustomKeyboardDirective,
                    CustomKeyboardPipe,
                ],
                exports: [
                    CustomKeyboardComponent,
                    CustomKeyboardDirective,
                    CustomKeyboardPipe,
                ]
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardModule.ctorParameters = function () { return []; };

exports.CustomKeyboardModule = CustomKeyboardModule;
exports.CustomKeyboardComponent = CustomKeyboardComponent;
exports.CustomKeyboardDirective = CustomKeyboardDirective;
exports.CustomKeyboardPipe = CustomKeyboardPipe;
exports.CustomKeyboardService = CustomKeyboardService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
