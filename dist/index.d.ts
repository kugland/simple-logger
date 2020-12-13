declare type SimpleLoggerEmitter = (...messages: any[]) => void;
export interface SimpleLogger {
    trace: SimpleLoggerEmitter;
    debug: SimpleLoggerEmitter;
    info: SimpleLoggerEmitter;
    warn: SimpleLoggerEmitter;
    error: SimpleLoggerEmitter;
    fatal: SimpleLoggerEmitter;
}
export default function simpleLogger(verbosity?: keyof SimpleLogger | 'all' | 'none'): (tag: string) => SimpleLogger;
export {};
//# sourceMappingURL=index.d.ts.map