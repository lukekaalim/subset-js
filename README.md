# Scheme.js

- Challenge: reimplement basic js features using nothing but a limited subset of js
- Inspired by Scheme
- Done for fun
- Maybe try optimizing with prepack?
- Maybe try building a babel plugin to turn normal js code into this?

## Allowed Lang
```
[primitives]: number, () => ();
[keywords]: ? :, const, ===, import/export, number operands...
```
Note that the `extern` directory contains cheating code: this is so we can observe the code easier.

## Expected output
```
  import { NOOP } from 'std/util';
  import array, { ADD, LENGTH } from 'std/array;
  import obj, { SET_PROPERTY, GET_PROPERTY } from 'std/obj';
  import symbol from 'std/symbol';

  import { greaterThan } from 'lib/number';
  import { compose } from 'lib/func';
  import { ifElse } from 'lib/conditional'

  import { log } from 'extern/console';
  import { string } from 'extern/string';

  const NAME = symbol();
  const FRIENDS = symbol();

  const JERRY = array(74)(ADD, 101)(ADD, 114)(ADD, 114)(ADD, 121); // Jerry
  const CLINT = array(67)(ADD, 108)(ADD, 105)(ADD, 110)(ADD, 116); // Clint

  const hasFriends = friends => greaterThan(friends(LENGTH), 0);

  const person = (name, friends) => obj()
    (SET_PROPERTY, NAME, name)
    (SET_PROPERTY, FRIENDS, friends)

  const logString = compose(string, log);
  const clintPerson = person(CLINT, array());
  const jerryPerson = person(JERRY, array(clintPerson))

  logString(jerryPerson(GET_PROPERTY, NAME)));
  jerryPerson(GET_PROPERTY, FRIENDS)(MAP, friend => logString(friend(GET_PROPERTY, NAME)));
  log(hasFriends(jerryPerson));
  log(hasFriends(clintPerson));
  /*
    Logs:
      Jerry
      Clint
      1
      0
  */
```

## Features
- async primitives `async(wait => wait(loadResource)(THEN, log)`
- http/s requests `fetch(URL)(THEN, log)`
- prototype chain `obj()(SET_PROTOTYPE, parent)`