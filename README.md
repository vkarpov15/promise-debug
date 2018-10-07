# promise-debug
Wraps JavaScript promises to add ids, original stack traces, and readable output

## Usage

```javascript
global.Promise = require('promise-debug');
```

Now, your promises will have several new properties:

* `id`: a unique identifier for the promise
* `originalStack`: the stack trace when the promise constructor was called
* `executor`: the [executor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Syntax)

To print out the stack trace for a promise with an [unhandled rejection](https://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html), use this:

```javascript
process.on('unhandledRejection', (err, promise) => {
  console.log('UnhandledRejection:', promise.originalStack);
});
```
