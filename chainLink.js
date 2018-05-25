import { NOOP } from './utils';
import pair, { GET_FIRST, GET_SECOND } from './pair';
import { increment } from './number';
import { TRUE, FALSE } from './boolean';

export const EMPTY_CHAIN_LINK = -1;

const chainLink = (element, nextChainLink) => pair(element, nextChainLink);

const isFinalLink = chainLink => chainLink(GET_SECOND) === EMPTY_CHAIN_LINK ? TRUE : FALSE;

const forEach = (func, link) => func(
  link(GET_FIRST),
  next => isFinalLink(link) ? forEach(link(GET_SECOND), next) : NOOP
);

const count = link =>
  forEach(
    link,
    (element, next) => next === NOOP ? 0 : increment(next())
  );

export default chainLink;
export { forEach, count, isFinalLink };
