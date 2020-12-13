# simple-logger

A simple logger with timestamps and tags.

## Usage

```javascript
import logger, { taggedLogger } from 'simple-logger';

logger('Message =', 1);
taggedLogger('TAG')('Message =', 2);
```
