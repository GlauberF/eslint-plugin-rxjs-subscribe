import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

class Teste {
    constructor() {
        this.sidebarMenuService = { actualMenu$: new Subject() };
        this._onDestroy$ = new Subject();
    }

    init() {
        // error - subscribe call without pipe
        this.sidebarMenuService.actualMenu$.subscribe((actualMenuId) => {
            console.log(actualMenuId);
        });

        // error - subscribe call without takeUntil or first in pipe
        this.sidebarMenuService.actualMenu$.pipe().subscribe((actualMenuId) => {
            console.log(actualMenuId);
        });

        // success - contains first in pipe
        this.sidebarMenuService.actualMenu$.pipe(first()).subscribe((actualMenuId) => {
            console.log(actualMenuId);
        });

        // success - contains takeUntil in pipe
        this.sidebarMenuService.actualMenu$.pipe(takeUntil(this._onDestroy$)).subscribe((actualMenuId) => {
            console.log(actualMenuId);
        });
    }
}


// Teste
const teste = new Teste();
teste.init();
