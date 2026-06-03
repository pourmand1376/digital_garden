---
title: Logging in Python - Principles
aliases:
  - Logging in Python - Principles
publish: true
created: 2020-01-01T12:00:00
---

### Log early, Log often

By default python supports logging

```python
import logging
```

It can output up to 5 logging levels. 

```python
logging.debug('debug')
logging.info('test')
logging.warning('warning')
logging.error('error')
logging.critical('critical')
```

By default, it shows warning and error and critical logs. 

For logging each module, you have to import it first. 

```helper
import logger
```

then it is best if you instantiate it like this:
```python
logger = logging.getlogger(__name__)
looger.info('log from another module')
```

## Calm code logger
```python
import logging 
from rich.logging import RichHandler
logger = logging.getLogger(__name__)
# the handler determines where the logs go: stdout/file 
shell_handler = RichHandler() 
file_handler = logging.FileHandler("debug.log")

logger.setLevel(logging.DEBUG)
shell_handler.setLevel(logging.DEBUG)
file_handler.setLevel(logging.DEBUG) 

# the formatter determines what our logs will look like 

fmt_shell = '%(message)s' 
fmt_file = '%(levelname)s %(asctime)s [%(filename)s:%(funcName)s:%(lineno)d] %(message)s' 

shell_formatter = logging.Formatter(fmt_shell) 
file_formatter = logging.Formatter(fmt_file) 
# here we hook everything together
shell_handler.setFormatter(shell_formatter)
file_handler.setFormatter(file_formatter)

logger.addHandler(shell_handler)
logger.addHandler(file_handler)
```

[CalmCode Website](CalmCode%20Website.md)

[Python](Index%20Python.md)