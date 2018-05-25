const GET_FIRST = 0;
const GET_SECOND = 1;

const pair = (firstElement, secondElement) => (getFirst) => (
  getFirst === 0 ? firstElement : secondElement
);

export default pair;
export { GET_FIRST, GET_SECOND };