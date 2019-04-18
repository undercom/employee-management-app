import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(value) {
    console.log('[LOG]' + value);
  }

  warn(value: any) {
    console.warn(`[LOG] ${value}`);
  }

  error(value: any) {
    console.warn(`[LOG] ${value}`);
  }
}
