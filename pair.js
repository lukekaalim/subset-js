const pair = (firstElement, secondElement) => (getFirst) => (
  getFirst === 0 ? firstElement : secondElement
);

export default pair;