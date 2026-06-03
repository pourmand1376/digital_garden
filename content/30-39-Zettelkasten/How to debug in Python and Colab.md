---
created: 2025-09-05 11:45:51
shamsi: 1404-06-14 11:45:51
calendar: "[[2025-09-05]]"
tags:
aliases:
title: How to debug in Python and Colab
publish: true
---

### pdb

To start debugging
```bash
python -m pdb test.py
```

It is best to use (better than pdb)
```bash
pip install ipdb 
python -m pip install ipdb
python -m ipdb
```

or you can use:

```python
import pdb
pdb.set_trace()
```
 or
```python
import pdb; pdb.set_trace()
```

Basically pdb has similart syntax like ipdb. 

##### colab
```python
import pdb
%pdb
```

[debugging - How to step through Python code to help debug issues? - Stack Overflow](https://stackoverflow.com/questions/4929251/how-to-step-through-python-code-to-help-debug-issues)

[Debugging in Google Colab notebook](https://zohaib.me/debugging-in-google-collab-notebook/)

Useful commands:
-   `b`: set a breakpoint
```
b 11 #this would set a breakpoint at line 11
b some_function # set breakpoint at function_name
```
-   `c`: continue debugging until you hit a breakpoint
-   `s`: (step) through the code
-   `n`: to go to (next) line of code
-   `l`: list source code for the current file (default: 11 lines including the line being executed)
-   `u`: navigate up a stack frame
-   `d`: navigate down a stack frame
-   `p`: to print the value of an expression in the current context
-   `r`: (return) execute code till it returns from the current function or hits another breakpoint
-    `w`: (where) Shows the stacktrace i.e. the chain of functions  
that made it reach the current function
-   `a`: (arguments) List of arguments passed and its values to the function
-   `q` : (quit)Immediately stop execution and quit the debugger

You have basically two modules. `pdb` and `ipdb` 

ipdb stands for interactive python debugger and is designed for `colab` .

### ipdb

```[Python](Index%20-%20Python%20-%20پایتون.md)
!pip install -Uqq ipdb
import ipdb
```

```python
%pdb on
```

```python
ipdb.set_trace()
```

[Python](Index%20Python.md)
[Python Libraries for Training](Python%20Libraries%20for%20Training.md)
[Python Must-Have Libraries for VScode](Python%20Must-Have%20Libraries%20for%20VScode.md)
[VSCode](VSCode.md)
