import { OnInit } from '@angular/core';
export declare class CustomKeyboardComponent implements OnInit {
    numberKeys: Array<{
        key: string;
        widthRatio: number;
    }>;
    stringKeys: Array<{
        key: string;
        widthRatio: number;
        heightRatio: number;
    }>;
    escGroup: Array<{
        key: string;
        widthRatio: number;
    }>;
    capsGroup: Array<{
        key: string;
        widthRatio: number;
    }>;
    enterKey: string[];
    spacebarKey: string[];
    CapsLock: boolean;
    keys: {};
    inputstr: string;
    caretPos: number;
    inputTextArea: any;
    inputType: any;
    constructor();
    ngOnInit(): void;
    keyPress(event: any): void;
    Caps(): void;
    click(item: any, inputTextArea: any): void;
    getCaretPos(oField: any): void;
    setSelectionRange(selectionStart: any, selectionEnd: any): void;
}
