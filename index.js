let id = 0;

class DebugPromise extends Promise {
  constructor(executor) {
    super(executor);
    this.id = id++;
    this.originalStack = new Error().stack;
    this.executor = executor;
  }

  inspect() {
    return `Promise: ${this.id}\n${this.originalStack}`;
  }
}

module.exports = DebugPromise;
