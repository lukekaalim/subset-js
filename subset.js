import { increment, decrement } from './number';
import pair from './pair';

/*
  Challenge: reimplement basic js features using nothing but a subset of js
  Inspired by Scheme
  Done for fun
*/

// Allowed Lang
/*
  [primitives]: number, () => ();
  [keywords]: ?: const ===
*/


const operate = (constant, operation) => (
  operation(constant)
);

const get = constant => () => constant;
const identity = input => input;
const invertBool = input => ((input === 1) ? 0 : 1);

const switchThree = (testCase,caseOne, caseTwo, caseThree) => condition => operate(
  testCase(condition),
  caseNumber => caseNumber === 0 ? caseOne :
    (caseNumber === 1 ? caseTwo : caseThree)
);

// 0 = hasNext
// 1 = getElement
// 2 = getNextElement
const chainLink = (isLastElement, element, nextLink) => switchThree(
  identity,
  isLastElement,
  element,
  nextLink,
);

// ChainLink
// (element, next)
const traverseChain = (currentChainLink, onTraverse, onEnd) => onTraverse(
  currentChainLink(1),
  () => currentChainLink(0) === 1 ? traverseChain(currentChainLink(2), onTraverse, onEnd) : onEnd(),
);

const countChain = currentChainLink => (
  traverseChain(
    currentChainLink,
    next => next() + 1,
    () => 0
  )
);

const recurseTimes = (times, last, func) => func(
  times === 1 ?
    () => last()
    :
    () => recurseTimes(decrement(times), last, func)
);

const makeEmptyChain = length => recurseTimes(
  length,
  () => chainLink(1, 0, 0),
  next => chainLink(0, 0, next())
);

const tenEmptyChainLinks = makeEmptyChain(10);
console.log(countChain(tenEmptyChainLinks) === 10);
