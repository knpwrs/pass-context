# pass-context

> Higher-order function to create a function which receives its context as its
> first argument.

## What?

Sometimes you want to use arrow functions with an API that was designed with
context (`this`) in mind. This is a small library which will pass a function's
execution context as that function's first argument. The arguments which are passed to the function are passed in addition to the context argument.

## Installation

### npm

```
npm i -S pass-context
```

The library function is the default export of the package.

### CDN (UMD)

```
http://unpkg.com/pass-context@1.0.0/dist/pass-context.min.js
```

The library function is exported as `passContext`.

## Usage

```js
import pc from 'pass-context';
const input = document.querySelector('.my-fancy-input');
input.addEventListener('change', pc((ctx, event) => {
  // `ctx` is what is normally accessible with `this` as if a normal function were passed as the event listener.
  // `event` (and any additional arguments) are the normal arguments passed in-order after the context argument.
  // Since this is an arrow function, `this` is inherited.
}));
```

### Detailed Usage Example

```js
import pc from 'pass-context';
const fn = pc(({ foo }, bar) => foo + bar);
console.log(fn.call({ foo: 'Hello, '}, 'World!')); // Logs "Hello, World!"
```

## License

**MIT**
