import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
export declare class CustomKeyboardService {
    subject: Subject<any>;
    constructor();
    passvalue(passvalue: string): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
