---
created: 2024-09-05T11:45:51
shamsi: 1404-06-14 11:45:51
calendar: "[[2025-09-05]]"
tags:
aliases:
title: Python Stuff to install on while working on server
publish: true
---
# Jupyter Server

## Running jupyter
```bash
jupyter notebook --no-browser --port=1717
jupyter lab --port=1717
```

## Connecting to server
```bash
ssh -L 1717:localhost:1717 pourmand@192.168.207.78
```

### Using Conda is a better alternative
> Don't forget to add conda-forge channel


```bash
conda create -n venv python=3.8
```

> The python part is necessary! If you don't choose that, no python would be installed! 

## SSH-Copy-id
First make sure you have an ssh key in your computer. Then you have to copy it to server using following command:
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub pourmand@192.168.207.78
```

Also, you can first set `.ssh/config` file. Then use following command.
```bash
ssh-copy-id servername
```

### nvidia-smi

```bash
pip install nvidia-htop
pip install nvitop

nvidia-htop.py
nvitop
```

```
nvidia-smi --query (--display)
nvidia-smi -q
nvidia-smi -i 0
nvidia-smi -i 0 -q -d "memory"
nvidia-smi --query-gpu='memory.free' --format=csv
```


[https://codeyarns.com/tech/2019-04-26-nvidia-smi-cheatsheet.html](https://codeyarns.com/tech/2019-04-26-nvidia-smi-cheatsheet.html)

[https://briot-jerome.developpez.com/fichiers/blog/nvidia-smi/list.txt](https://briot-jerome.developpez.com/fichiers/blog/nvidia-smi/list.txt)


### Connect to Another GPU

- torch.device('cuda:0') or torch.device('cuda:1')

```bash
export CUDA_VISIBLE_DEVICES=1
```

```bash
CUDA_VISIBLE_DEVICES=1 ./cuda_executable
```


# Not needed
## Creating venv 
virtualenv -p python3 venv
source venv/bin/activate

### install multiple python kernels with multiple versions

Install pyenv
$ curl [https://pyenv.run](https://pyenv.run/) | bash
Follow the instruction to modify ~/.bashrc
Install the latest Python from source code
$ pyenv install 3.8.3
Check installed Python versions
$ pyenv versions
Switch Python version
$ pyenv global 3.8.3
Check where Python is actually installed
$ pyenv prefix
/home/admin/.pyenv/versions/3.8.3
Check the current Python version
$ python -V
Python 3.8.3

## Installing Kernel for jupyter (only once)

python -m venv myenv
source myenv/bin/activate

pip install ipykernel
python -m ipykernel install --user --name=myenv

## after having pipenv
is this necessary? or even good?

You can switch to environment using
**pipenv shell**
see pipenv current environment setting
**pipenv --venv**
change pipenv current virtual environment
**echo ~/myenv > .venv**

[Python](Index%20Python.md)
[linux](Index%20Linux.md)
[Python Libraries for Training](Python%20Libraries%20for%20Training.md)