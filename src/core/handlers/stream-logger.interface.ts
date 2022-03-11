export interface IStreamLogger {
  log(...args: Array<any>): void;
  error(...args: Array<any>): void;
  end(): void;
}
