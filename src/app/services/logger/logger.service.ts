import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(value) {
    console.log('[LOG]' + value);
  }

  info(value) {
    console.log('[INFO]' + value);
  }

  warn(value: any) {
    console.warn(`[WARN] ${value}`);
  }

  error(value: any) {
    console.warn(`[ERROR] ${value}`);
  }

  appendText(value: string) {
    this.log(`LOG:` + value);
  }

  sum(x, y) {
    return x + y;
  }
}
