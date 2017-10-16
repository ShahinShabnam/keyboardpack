import { OnInit } from '@angular/core';
import { CustomKeyboardService } from './custom-keyboard.service';
import { Subscription } from 'rxjs/Subscription';
export declare class CustomKeyboardComponent implements OnInit {
    customKeyboardService: CustomKeyboardService;
    subscriptions: Subscription;
    numberKeys: Array<{
        key: string;
        widthRatio: number;
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
    constructor(customKeyboardService: CustomKeyboardService);
    ngOnInit(): void;
    keyPress(event: any): void;
    Caps(): void;
    click(item: any, inputTextArea: any): void;
    getCaretPos(oField: any): void;
    setSelectionRange(selectionStart: any, selectionEnd: any): void;
}
