---
created: 2024-09-05T11:45:51
shamsi: 1404-06-14 11:45:51
calendar: "[[2025-09-05]]"
tags:
aliases:
title: Python Libraries for Training
publish: true
---
# Training
## [PyTorch](Index%20-%20Pytorch.md) Lightening
https://pytorch-lightning.readthedocs.io/en/latest/
### Hyperparameter Optimization
### Optuna
[Optuna - A hyperparameter optimization framework](https://optuna.org/#code_examples)

# Argument Parsing
### Hydra
- configurations (replaces `argparse`)
- https://hydra.cc/
- youtube: [# Configuration Management For Data Science Made Easy With Hydra](https://www.youtube.com/watch?v=tEsPyYnzt8s&t=3s)
### Argparse
https://docs.python.org/3/library/argparse.html

## Logging
- TensorBoard
- Wandb
## Human Learn
https://koaning.github.io/human-learn/index.html

## Nvidia-htop
https://github.com/peci1/nvidia-htop

## Nvitop

https://rasbt.github.io/mlxtend/

## pipreqs
this package extracts `requirements.txt` file. 

[Migrate From Pip to UV](Migrate%20From%20Pip%20to%20UV.md)

# Python libraries to use
#### Pathlib
to read a write to a file

### Pillow (a PIL fork)
to work with images 
> Use this one instead of opencv

### Convert from different dataset formats 
https://github.com/pylabel-project/pylabel

**Albumentations**
Work with images and bounding boxes and augment them. I used it for resize the images. 

## GPU stuck problem
```
Killall -u pourmand
```

[Python](Index%20Python.md)