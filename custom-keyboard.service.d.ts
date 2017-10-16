import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
export declare class CustomKeyboardService {
    private _http;
    subject: Subject<any>;
    constructor(_http: Http);
    passvalue(passvalue: string): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
