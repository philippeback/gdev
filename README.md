# Ludus for Amber

This repository is a move to Amber Smalltalk version 0.13.0 from the [original work of Bernat Romagosa](https://github.com/bromagosa/amber/tree/ludus) (version 0.9.1). The name stands for *game* or *leisure* in Latin.


## Status

- All games are working


## Prerequisites

1. You need a web browser with a reasonably good support for HTML5 canvas.
2. You need to have [nodejs](http://www.nodejs.org/) installed.

## Getting Started

Install [`amber`](http://amber-lang.net/) from the [npm](http://npmjs.org/) (node package manager) repository 
```
npm -g install amber-cli
```

In order to install the dependencies, you need the [`bower`](http://bower.io/) client side package manager.

```
npm -g install bower
```

You now can install the dependencies:
```
bower install
```

And launch the amber server.

```
amber serve
```

Point your browser to:

    http://localhost:4000

Enjoy!

## See also
Another Amber Smalltalk game framework by  Masashi Umezawa
https://github.com/mumez/enchant-from-amber . It wraps the [enchantjs](http://enchantjs.com/) library with Amber Smalltalk code.

