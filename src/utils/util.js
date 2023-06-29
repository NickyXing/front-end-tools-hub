export function throttle(func, delay) {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    if (!timerId) {
      timerId = setTimeout(function () {
        func.apply(context, args);
        timerId = null;
      }, delay);
    }
  };
}
