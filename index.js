import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { FormsModule } from '@angular/forms';

var CustomKeyboardService = (function () {
    function CustomKeyboardService() {
        this.subject = new Subject$1();
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
    { type: Injectable },
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
            // alert(this.inputType + "this.inputType");
            console.log(_this.inputType + "this.inputType");
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
        console.log('keyPress' + "" + event.keyCode);
        if (event.keyCode == "27") {
            console.log(String.fromCharCode(event.keyCode));
            alert("you press the excape button");
        }
        else if (event.keyCode == "20") {
            this.Caps();
        }
        else if (event.keyCode == "17") {
        }
        else if (event.keyCode == "13") {
            this.enterKeyMethod();
        }
        else {
            this.inputstr = event.target.value;
        }
    };
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.enterKeyMethod = function () {
        console.log(this.inputstr + "event.keyCode13");
        alert(this.inputstr + "enter:value");
        this.customKeyboardService.emit('enter:value', this.inputstr);
    };
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.Caps = function () {
        if (this.CapsLock) {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 1; i <= 10; i++) {
                this.escGroup[i].key = this.escGroup[i].key.toLowerCase();
                this.capsGroup[i].key = this.capsGroup[i].key.toLowerCase();
                if (i > 1)
                    this.capsGroup[i + 8].key = this.capsGroup[i + 8].key.toLowerCase();
            }
        }
        else {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 1; i <= 10; i++) {
                this.escGroup[i].key = this.escGroup[i].key.toUpperCase();
                this.capsGroup[i].key = this.capsGroup[i].key.toUpperCase();
                if (i > 1)
                    this.capsGroup[i + 8].key = this.capsGroup[i + 8].key.toUpperCase();
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} inputTextArea
     * @return {?}
     */
    CustomKeyboardComponent.prototype.click = function (item, inputTextArea) {
        //alert(item);
        console.log('item' + "" + item);
        this.getCaretPos(inputTextArea); //Get Cursor Position From Text Area
        if (item === "Esc") {
            console.log(item);
        }
        else {
            if (item !== "bksp" && item !== "caps" && item[0] !== "Spacebar" && item !== "-->" && item !== "<--" && item[0] !== "Enter" && item !== "Enter") {
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
            else if (item[0] === "Spacebar") {
                this.inputstr += " ";
            }
            else if (item === "caps") {
                console.log(item);
                this.Caps();
            }
            else if (item === "-->") {
                this.setSelectionRange(this.caretPos, this.caretPos); //Rigth shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item === "<--") {
                // alert(item + "<--");
                this.caretPos--;
                this.setSelectionRange(this.caretPos, this.caretPos); //Lift Shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item[0] === "Enter") {
                this.enterKeyMethod();
            }
            else if (item === "Enter") {
                this.enterKeyMethod();
            }
            else if (item === "bksp") {
                //alert(item + "bksp");
                this.inputstr = this.inputstr.substring(0, this.inputstr.length - 1);
            }
        }
        document.getElementById('input').focus(); //input focus...
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
    { type: Component, args: [{
                selector: 'custom-keyboard-component',
                template: "<div class=\"keyboard\"> <div style=\"height: 30px; background-color: #95B3D7;font-size: 20px;margin-bottom: 8px;padding-top: 7px\">Swipe Your Card</div> <input id=\"input\" #inputTextArea  (click)=\"getCaretPos(inputTextArea)\"  [type]=\"inputType\"    (keyup)=\"getCaretPos(inputTextArea)\" [(ngModel)]=\"inputstr\" style=\"width:90%;margin-left: 17px;background-color: #95B3D7;\" /> <br> {{inputstr}} <br> <div style=\"width:80%;float:left;height: 300px;\"> <div> <button style=\"font-size: 20px;height: 57px;float:left;margin-right:.5%;margin-bottom:.5%;word-wrap: break-word;\" *ngFor=\"let keyfst  of escGroup\"  [style.width.%]=\"keyfst.widthRatio\" (click)=\"click(keyfst.key,inputTextArea)\"> {{keyfst.key}} </button> </div> <div style=\"width:87%;float:left\"> <button style=\"float:left;height:57px;font-size: 20px;;margin-right:.5%;margin-bottom:.5%;word-wrap: break-word;\"  *ngFor=\"let capGroup of capsGroup\"  [style.width.%]=\"capGroup.widthRatio\" (click)=\"click(capGroup.key,inputTextArea)\"> {{capGroup.key}} </button> </div> <div> <button style=\"font-size: 20px;width:12%;height:118px;word-wrap: break-word;\"  (click)=\"click(enterKey,inputTextArea)\" > {{enterKey}} </button> </div> <div   > <button style=\"font-size: 20px;height: 57px;width:100%\"  (click)=\"click(spacebarKey,inputTextArea)\"> {{spacebarKey}} </button> </div> </div> <!-- <div style=\"width:70%;float:left;height: 305px;margin-left:5px\"> </div> --> <div style=\"width:20%;float:right;\"> <button style=\"height:57px;font-size: 20px;word-wrap: break-word;padding-left: 10px; margin-right:1.5%;margin-bottom: 1.25%;\"  *ngFor=\"let numberKey of numberKeys\"  [style.width.%]=\"numberKey.widthRatio\"  (click)=\"click(numberKey.key,inputTextArea)\"> {{numberKey.key}} </button> </div> </div>",
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
    { type: Directive, args: [{
                selector: '[customKeyboardDirective]'
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardDirective.ctorParameters = function () { return [
    { type: ElementRef, },
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
    { type: Pipe, args: [{
                name: 'customKeyboardPipe'
            },] },
    { type: Injectable },
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
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

export { CustomKeyboardModule, CustomKeyboardComponent, CustomKeyboardDirective, CustomKeyboardPipe, CustomKeyboardService };
