export default fn => function trap(...args) {
  return fn(this, ...args);
};
