import timestamp from './timestamp';

type SimpleLoggerEmitter = (...messages: any[]) => void;

const nullEmitter: SimpleLoggerEmitter = () => { };

const baseEmitter: SimpleLoggerEmitter = (...messages) => {
  console.log(timestamp(), '|', ...messages);
};

function prefixEmitter(emitter: SimpleLoggerEmitter, ...prefix: any[]): SimpleLoggerEmitter {
  return (...messages) => emitter(...prefix, ...messages);
}

export interface SimpleLogger {
  trace: SimpleLoggerEmitter;
  debug: SimpleLoggerEmitter;
  info: SimpleLoggerEmitter;
  warn: SimpleLoggerEmitter;
  error: SimpleLoggerEmitter;
  fatal: SimpleLoggerEmitter;
};

export default function simpleLogger(
  verbosity: keyof SimpleLogger | 'all' | 'none' = 'info'
): (tag: string) => SimpleLogger {
  const logger: SimpleLogger = {
    trace: nullEmitter, debug: nullEmitter, info: nullEmitter,
    warn: nullEmitter, error: nullEmitter, fatal: nullEmitter,
  };
  switch (verbosity) {
    case 'all':
    case 'trace': logger.trace = baseEmitter;
    case 'debug': logger.debug = baseEmitter;
    case 'info':  logger.info = baseEmitter;
    case 'warn':  logger.warn = baseEmitter;
    case 'error': logger.error = baseEmitter;
    case 'fatal': logger.fatal = baseEmitter;
  }
  return (tag) => {
    return {
      trace: prefixEmitter(logger.trace, tag, '|', 'trace', '|'),
      debug: prefixEmitter(logger.debug, tag, '|', 'debug', '|'),
      info:  prefixEmitter(logger.info,  tag, '|', 'info ', '|'),
      warn:  prefixEmitter(logger.warn,  tag, '|', 'warn ', '|'),
      error: prefixEmitter(logger.error, tag, '|', 'error', '|'),
      fatal: prefixEmitter(logger.fatal, tag, '|', 'fatal', '|'),
    }
  }
}
