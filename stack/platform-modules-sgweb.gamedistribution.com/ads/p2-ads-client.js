var adsClient = (function () {
	'use strict';

	

	function ___$insertStyle(css) {
	  if (!css) {
	    return;
	  }
	  if (typeof window === 'undefined') {
	    return;
	  }

	  var style = document.createElement('style');

	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;
	  document.head.appendChild(style);
	  return css;
	}

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() {
	    return this || (typeof self === "object" && self);
	  })() || Function("return this")()
	);
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() {
	  return this || (typeof self === "object" && self);
	})() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = runtime;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var regenerator = runtimeModule;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	/**
	 * Created by heidar <heidar.mostafa@softgames.de> on 24.02.16.
	 * Copyright © Softgames 2016
	 */

	/* global window */
	const sgLog = function (name, initLogLevel, injectedWindow) {
	  let logLevel;
	  let win = null;

	  if (injectedWindow) {
	    win = injectedWindow;
	  }

	  if (typeof window !== 'undefined' && !win) {
	    win = window;
	  }

	  let internalConsole = {
	    log() {},

	    error() {}

	  };

	  if (win && win.console) {
	    internalConsole = win.console;
	  } else if (typeof console !== 'undefined') {
	    internalConsole = console;
	  }

	  name = name || 'anonymous';
	  let prepareLogArray = prepareLogArrayBrowser;

	  if (!win && typeof commonjsRequire === 'function') {
	    prepareLogArray = prepareLogArrayServer;
	  }

	  const SEVERITIES = {
	    '-1': {
	      name: 'DEBUG',
	      color: '#0000FF',
	      chalkColor: 'blue'
	    },
	    0: {
	      name: 'INFO',
	      color: '#008000',
	      chalkColor: 'green'
	    },
	    1: {
	      name: 'NOTICE',
	      color: '#2AA5A5',
	      chalkColor: 'cyan'
	    },
	    2: {
	      name: 'WARN',
	      color: '#FFA500',
	      chalkColor: 'yellow'
	    },
	    3: {
	      name: 'ERROR',
	      color: '#800080',
	      chalkColor: 'magenta'
	    },
	    4: {
	      name: 'FATAL',
	      color: '#FF0000',
	      chalkColor: 'red'
	    }
	  };
	  const defaultLogLevel = 5; // We want that no log message is shown by default in the console

	  function getParameterByName(name) {
	    if (typeof win === 'undefined' || !win) {
	      return null;
	    }

	    if (typeof win.location === 'undefined') {
	      return null;
	    }

	    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
	    const regex = new RegExp(`[?&]${name}=([^&#]*)`);
	    const results = regex.exec(win.location.search || '');
	    return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
	  }

	  function prepareLogArrayBrowser(date, type, name, data) {
	    return [`%c [${date}] %c [${type.name}] %c [${name}] `, 'color: #666', `font-weight:bold; color: ${type.color}`, 'font-weight:bold; color: #940060'].concat(argumentsToArray(data));
	  }

	  function prepareLogArrayServer(date, type, name, data) {
	    return [date, type.name, name].concat(argumentsToArray(data));
	  }

	  function logData(severity, name, data) {
	    if (severity < logLevel) {
	      return;
	    }

	    const type = SEVERITIES[String(severity)] || {
	      name: 'UNKNOWN',
	      color: 'bgCyan'
	    };
	    internalConsole.log(...prepareLogArray(new Date().toISOString(), type, name, data));
	  }

	  function argumentsToArray(args) {
	    return Array.prototype.slice.call(args);
	  }

	  logLevel = Number(initLogLevel);

	  if (Number.isNaN(logLevel) || logLevel < -1 || logLevel > 10) {
	    logLevel = Number(getParameterByName('logLevel'));
	  }

	  if (Number.isNaN(logLevel) || logLevel < -1 || logLevel > 10) {
	    logLevel = defaultLogLevel;
	  }

	  this.debug = function (...args) {
	    logData(-1, name, args);
	  };

	  this.info = function (...args) {
	    logData(0, name, args);
	  };

	  this.notice = function (...args) {
	    logData(1, name, args);
	  };

	  this.warn = function (...args) {
	    logData(2, name, args);
	  };

	  this.error = function (...args) {
	    logData(3, name, args);
	  };

	  this.fatal = function (...args) {
	    logData(4, name, args);
	  };

	  this.getLogLevel = function () {
	    return logLevel;
	  };
	};

	var dist = sgLog;

	var name = "ads-client";
	var description = "Client for ads-module microservice";
	var main = "build/modules/p2-ads-client.js";
	var version = "1.0.0";
	var buildConfig = {
		port: 8022
	};
	var scripts = {
		build: "rm -Rf build/ ; gulp build",
		"build-dev": "rm -Rf build/ ; STAGE=live NODE_ENV=production gulp build",
		dev: "rm -Rf build/ ; rollup --config dev-rollup.config.js --watch",
		deploy: "NODE_ENV=production bash -c 'npm run lintCommit' ; npm run build ; node scripts/s3-uploader.js",
		"invalidate:staging": "cf-invalidate --wait --accessKeyId $ACCESS_KEY_ID --secretAccessKey $SECRET_ACCESS_KEY -- E79FRD6Y28P9U ads/*",
		"invalidate:gd-staging": "cf-invalidate --wait --accessKeyId $ACCESS_KEY_ID --secretAccessKey $SECRET_ACCESS_KEY -- E22VA6ACK3P67G ads/*",
		"invalidate:live": "cf-invalidate --wait --accessKeyId $ACCESS_KEY_ID --secretAccessKey $SECRET_ACCESS_KEY -- E13UGTBEU9M1P9 ads/*",
		"invalidate:gd-live": "cf-invalidate --wait --accessKeyId $ACCESS_KEY_ID --secretAccessKey $SECRET_ACCESS_KEY -- E2QBM6CPKNJFEB ads/*",
		lint: "node node_modules/eslint/bin/eslint.js '**/*.js' --fix",
		lintCommit: "node node_modules/eslint/bin/eslint.js '**/*.js'",
		start: "npm run build && node build/index.js",
		test: "echo \"Error: no test specified\" && exit 1",
		update: "rm -Rf node_modules/ ; rm package-lock.json ; npm i"
	};
	var repository = {
		type: "git",
		url: "git@gitlab.azerdev.com:softgames-import/platform/modules/ads-client.git"
	};
	var dependencies = {
		"@babel/plugin-transform-runtime": "^7.2.0",
		"@babel/runtime": "^7.3.1",
		"@bygd/sg-web-logger": "^1.0.1",
		global: "^4.3.2",
		gulp: "^4.0.1",
		"js-cookie": "^2.2.0",
		"rollup-plugin-javascript-obfuscator": "^1.0.4",
		"rollup-plugin-sass": "^1.2.2",
		s3: "^4.4.0"
	};
	var devDependencies = {
		"@babel/core": "^7.2.2",
		"@babel/plugin-proposal-object-rest-spread": "^7.3.1",
		"@babel/preset-env": "^7.3.1",
		"babel-eslint": "^10.0.1",
		"babel-plugin-inline-import": "^3.0.0",
		"babel-plugin-transform-inline-environment-variables": "^0.4.3",
		eslint: "^5.12.1",
		rollup: "^1.1.2",
		"rollup-plugin-babel": "^4.3.2",
		"rollup-plugin-commonjs": "^9.2.0",
		"rollup-plugin-json": "^3.1.0",
		"rollup-plugin-node-resolve": "^4.0.0",
		"rollup-plugin-serve": "^1.0.1"
	};
	var packageJson = {
		name: name,
		description: description,
		main: main,
		version: version,
		buildConfig: buildConfig,
		scripts: scripts,
		repository: repository,
		dependencies: dependencies,
		devDependencies: devDependencies
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var port = packageJson.buildConfig.port;
	var microservicePort = 8020;

	var makeLink = function makeLink(port, path, configPath) {
	  {
	    return "//localhost:".concat(port).concat(path);
	  }
	};

	var common = {
	  moduleName: 'ads-client',
	  mediaCpmUrl: 'https://platform-modules-sgweb.gamedistribution.com/media-cpm/sg-mc.js',
	  adBlockerDetectionUrls: {
	    advertisement: '//production-sgweb.gamedistribution.com/assets/advertisement.js',
	    showAds: '//production-sgweb.gamedistribution.com/assets/showads.js'
	  },
	  AD_SCRIPTS_TO_ADD: [{
	    src: '//hb.vntsm.com/v3/live/ad-manager.min.js',
	    'data-site-id': '5c361c2246e0fb00018e7e53',
	    'data-mode': 'scan',
	    disabledPartners: [4217, 99999]
	  }],
	  // API endpoint to get configs
	  adsService: {
	    endpoints: {
	      getConfig: makeLink(microservicePort, '/ads-ng/config')
	    },
	    authUser: 'p2adsservice',
	    authPass: 'bG9sU2VjcmV0TWVzc2FnZXNBbmRTdHVmZjpP'
	  },
	  assetPath: makeLink(port, '/public')
	};

	var staging = {
	  adsService: {
	    endpoints: {
	      getConfig: '//staging-sgweb.gamedistribution.com/ads-ng/config/'
	    },
	    authUser: 'p2adsservice',
	    authPass: 'bG9sU2VjcmV0TWVzc2FnZXNBbmRTdHVmZjpP'
	  },
	  mediaCpmUrl: '//staging-platform-modules-sgweb.gamedistribution.com/media-cpm/sg-mc.js'
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var dev = {
	  mediaCpmUrl: '//staging-platform-modules-sgweb.gamedistribution.com/media-cpm/sg-mc.js'
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var live = {
	  adsService: {
	    endpoints: {
	      getConfig: '//production-sgweb.gamedistribution.com/ads-ng/config/'
	    },
	    authUser: 'p2adsservice',
	    authPass: 'bG9sU2VjcmV0TWVzc2FnZXNBbmRTdHVmZjpP'
	  }
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var STAGE = "live";
	var configs = {
	  staging: staging,
	  dev: dev,
	  live: live
	};
	var stageConfig = configs[STAGE];
	/**
	 * @type {CONFIG}
	 */

	var config = Object.assign({}, common, stageConfig);

	function getLog(fileName) {
	  return new dist("".concat(config.moduleName, "-").concat(fileName));
	}

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 11.10.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Executes each given promise generator ofter the other, passing the result down the waterfall
	 * @param {Array.<(function(*): Promise.<*>)>} promiseGenerators
	 * @param {*} [initialResult]
	 * @return {Promise.<*>}
	 */
	function waterfall(promiseGenerators, initialResult) {
	  return promiseGenerators.reduce(function (lastPromise, promiseGenerator) {
	    return lastPromise.then(promiseGenerator);
	  }, Promise.resolve(initialResult));
	}

	var promise = {
	  waterfall: waterfall
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var log = getLog('State');
	/**
	 * This manages state between the steps each step uses this and returns it after
	 */

	var ChainState =
	/**
	 * Create a new ChainState
	 * @param {Dependencies} dependencies
	 */
	function ChainState(dependencies) {
	  _classCallCheck(this, ChainState);

	  if (!dependencies) {
	    throw new Error('Can\'t init state without dependencies');
	  }
	  /**
	   * @type {Dependencies}
	   * @private
	   */


	  var _deps = dependencies;
	  /**
	   * Returns the dependencies
	   * @return {Dependencies}
	   */

	  this.getDependencies = function () {
	    return _deps;
	  };
	  /**
	   * @type {null|boolean}
	   * @private
	   */


	  var _adBlockerActivated = null;

	  this.isAdBlockerActivated = function () {
	    return _adBlockerActivated;
	  };

	  this.setAdBlockerActivated = function (activated) {
	    return _adBlockerActivated = !!activated;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _skipAds = false;

	  this.isSkipAds = function () {
	    return _skipAds;
	  };

	  this.setSkipAds = function (skip) {
	    return _skipAds = !!skip;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _skipPreRollAds = false;

	  this.isSkipPreRollAds = function () {
	    return _skipPreRollAds;
	  };

	  this.setSkipPreRollAds = function (skip) {
	    return _skipPreRollAds = !!skip;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _skipInGameAds = false;

	  this.isSkipInGameAds = function () {
	    return _skipInGameAds;
	  };

	  this.setSkipInGameAds = function (skip) {
	    return _skipInGameAds = !!skip;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _skipAdsOnAdBlocker = false;

	  this.isSkipAdsOnAdBlocker = function () {
	    return _skipAdsOnAdBlocker;
	  };

	  this.setSkipAdsOnAdBlocker = function (skip) {
	    return _skipAdsOnAdBlocker = !!skip;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _gameBlockedOnAdBlocker = false;

	  this.isGameBlockedOnAdBlocker = function () {
	    return _gameBlockedOnAdBlocker;
	  };

	  this.setGameBlockedOnAdBlocker = function (blocked) {
	    return _gameBlockedOnAdBlocker = !!blocked;
	  };
	  /**
	   * @type {boolean}
	   * @private
	   */


	  var _usePlayButtonInGame = false;

	  this.isUsePlayButtonInGame = function () {
	    return _usePlayButtonInGame;
	  };

	  this.setUsePlayButtonInGame = function (activated) {
	    return _usePlayButtonInGame = !!activated;
	  };
	  /**
	   * Checks if the loading flow can be skipped
	   * @return {boolean}
	   */


	  this.skipLoadingChain = function () {
	    return _skipAds || _adBlockerActivated && _skipAdsOnAdBlocker;
	  };
	  /**
	   * Checks if the game should be blocked
	   * @return {boolean}
	   */


	  this.blockGame = function () {
	    return _adBlockerActivated && _gameBlockedOnAdBlocker;
	  };
	  /**
	   * @type {AdConfiguration|null}
	   * @private
	   */


	  var _adConfiguration = null;

	  this.getAdConfiguration = function () {
	    return _adConfiguration;
	  };

	  this.setAdConfiguration = function (config) {
	    return _adConfiguration = config;
	  };
	  /**
	   * @type {User|null}
	   * @private
	   */


	  var _user = null;

	  this.getUser = function () {
	    return _user;
	  };

	  this.setUser = function (user) {
	    return _user = user;
	  };

	  var _p2UserId = null;

	  this.getP2UserId = function () {
	    return _p2UserId;
	  };

	  this.setP2UserId = function (userId) {
	    return _p2UserId = userId;
	  };
	  /**
	   * @type {MediaCPM|null}
	   * @private
	   */


	  var _mediaCpm = null;

	  this.getMediaCpm = function () {
	    return _mediaCpm;
	  };

	  this.setMediaCpm = function (mediaCpm) {
	    return _mediaCpm = mediaCpm;
	  };
	  /**
	   * @type {MediaCpmConfig|null}
	   * @private
	   */


	  var _mediaCpmConfig = null;

	  this.getMediaCpmConfig = function () {
	    return _mediaCpmConfig;
	  };

	  this.setMediaCpmConfig = function (config) {
	    return _mediaCpmConfig = config;
	  };
	  /**
	   * @type {AdModule|null}
	   * @private
	   */


	  var _adsModule = null;

	  this.getAdsModule = function () {
	    return _adsModule;
	  };

	  this.setAdsModule = function (module) {
	    return _adsModule = module;
	  };

	  log.debug('ChainState created:', this);
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$1 = getLog('initSequence');
	/**
	 * Executes the given initialization sequence
	 * @param {Dependencies} dependencies
	 * @param {Array.<(function(ChainState): Promise.<ChainState>)>} initSequence
	 * @return {Promise}
	 */

	var initSequencer = (function (dependencies, initSequence) {
	  return new Promise(function (resolve, reject) {
	    try {
	      log$1.info('Executing ...');
	      var state = new ChainState(dependencies);
	      promise.waterfall(initSequence, state).then(function (chainState) {
	        log$1.info('... done');
	        resolve(chainState);
	      }).catch(function (err) {
	        log$1.error('... failed', err);
	        reject(err);
	      });
	    } catch (err) {
	      log$1.error('... failed!', err);
	      reject(err);
	    }
	  });
	});

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Constants
	 * @readonly
	 * @enum {*}
	 * @name CONSTS
	 */
	var CONSTS = {
	  DEFAULT_SCRIPT_LOAD_TIMEOUT: 10000,
	  ADVERTISEMENT_JS_URL: '//sg.gamedistribution.com/assets/advertisement.js',
	  // [RS] Protocol will be added on use
	  SHOW_ADS_JS_URL: '//sg.gamedistribution.com/assets/showads.js',
	  // [RS] Protocol will be added on use
	  DEFAULT_OVERLAY_INTERVAL: 3000,
	  AD_STARTING_SOON_TIMER: 5000
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var document$1 = window_1.document;
	var DEFAULT_SCRIPT_LOAD_TIMEOUT = CONSTS.DEFAULT_SCRIPT_LOAD_TIMEOUT;
	/**
	 * Loads a script without jquery
	 * @param {string} url
	 * @param {number} [timeout=DEFAULT_SCRIPT_LOAD_TIMEOUT]
	 * @return {Promise}
	 */

	function plainLoadScript(url) {
	  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SCRIPT_LOAD_TIMEOUT;
	  return new Promise(function (resolve, reject) {
	    try {
	      if (!document$1) {
	        throw new Error('window.document does not exist');
	      }

	      var script = document$1.createElement('script');
	      var timeoutId = null;
	      script.type = 'text/javascript';
	      script.async = true;

	      script.onload = function () {
	        try {
	          if (timeoutId) {
	            clearTimeout(timeoutId);
	          }

	          resolve();
	        } catch (error) {
	          reject(error);
	        }
	      };

	      script.onerror = function () {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }

	        reject(new Error('Failed to load script: ' + url));
	      };

	      script.src = url;
	      var otherScript = document$1.getElementsByTagName('script')[0];
	      otherScript.parentNode.insertBefore(script, otherScript);
	      timeoutId = setTimeout(function () {
	        reject(new Error('Failed to load script due to timeout: ' + url));
	      }, timeout);
	    } catch (error) {
	      reject(error);
	    }
	  });
	}

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 10.07.17.
	 * Copyright © Softgames 2017
	 */
	var DEFAULT_SCRIPT_LOAD_TIMEOUT$1 = CONSTS.DEFAULT_SCRIPT_LOAD_TIMEOUT,
	    ADVERTISEMENT_JS_URL = CONSTS.ADVERTISEMENT_JS_URL,
	    SHOW_ADS_JS_URL = CONSTS.SHOW_ADS_JS_URL;
	var log$2 = getLog('AdBlockDetector');
	/**
	 * Detects if ad blocker is activated
	 * @return {Promise.<boolean>}
	 */

	function detect() {
	  return new Promise(function (resolve, reject) {
	    try {
	      checkForAdBlocker().then(function (adBlockerActive) {
	        resolve(adBlockerActive);
	      }).catch(function (error) {
	        reject(error);
	      });
	    } catch (error) {
	      reject(error);
	    }
	  });
	}
	/**
	 * Check if ad blocker exists
	 * @return {Promise}
	 */


	function checkForAdBlocker() {
	  return new Promise(function (resolve, reject) {
	    try {
	      // [RS] We do not use protocol directly to use http(s) in any case
	      var protocol = String(window_1.location.protocol).indexOf('https') !== -1 ? 'https:' : 'http:';
	      var timeout = DEFAULT_SCRIPT_LOAD_TIMEOUT$1;
	      return Promise.all([loadAdBlockerDetectionJs('advertisement.js', protocol + ADVERTISEMENT_JS_URL, timeout), loadAdBlockerDetectionJs('showAds.js', protocol + SHOW_ADS_JS_URL, timeout)]).then(function () {
	        resolve(false);
	      }).catch(function () {
	        resolve(true);
	      });
	    } catch (error) {
	      reject(error);
	    }
	  });
	}
	/**
	 * Loading the given file
	 * @param {string} name
	 * @param {string} url
	 * @param {number} timeout
	 * @return {Promise}
	 */


	function loadAdBlockerDetectionJs(name, url, timeout) {
	  return new Promise(function (resolve, reject) {
	    try {
	      log$2.debug("Loading ".concat(name, " ... "), url);
	      plainLoadScript(url, timeout).then(function () {
	        log$2.debug("... loaded ".concat(name));
	        resolve();
	      }).catch(function (error) {
	        log$2.warn("... failed to load ".concat(name, " probably due to ad blocker"));
	        reject(error);
	      });
	    } catch (error) {
	      reject(error);
	    }
	  });
	}

	var adBlockDetector = {
	  detect: detect
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	/**
	 * Checks if the ad blocker is detected
	 * @param {ChainState} chainState
	 * @return {Promise}
	 */

	var adBlockerDetector = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      var _chainState$getDepend = chainState.getDependencies(),
	          messageBus = _chainState$getDepend.messageBus;

	      if (chainState.skipLoadingChain()) {
	        messageBus.fire('ads.adBlocker.result', {
	          skipAd: true
	        }, true);
	        resolve(chainState);
	        return;
	      }

	      adBlockDetector.detect().then(function (detected) {
	        chainState.setAdBlockerActivated(detected);
	        var adConfig = chainState.getAdConfiguration();
	        var skipAd = chainState.isSkipAds() || chainState.isSkipPreRollAds() || detected && adConfig.adBlockerAutoSkipAds;
	        var blockGame = !skipAd && detected && adConfig.adBlockerBlockGame;
	        messageBus.fire('ads.adBlocker.result', {
	          detected: detected,
	          skipAd: skipAd,
	          blockGame: blockGame,
	          showInfo: !skipAd && !blockGame && detected && adConfig.showAdBlockerInfo,
	          infoTemplate: adConfig.adBlockerInfoTemplate,
	          blockTemplate: adConfig.adBlockerBlockGameTemplate
	        }, true);
	        resolve(chainState);
	      }).catch(function (err) {
	        reject(err);
	      });
	    } catch (err) {
	      reject(err);
	    }
	  });
	});

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */
	var log$3 = getLog('getConfigAPI');
	var getConfig = config.adsService.endpoints.getConfig;
	/**
	 * Returns a function to retrieve the ad configuration
	 * @param {jQuery} jQuery
	 * @return {function(Environment): Promise.<AdsConfigurationResponse>}
	 */

	var getConfigApi = (function (jQuery) {
	  /**
	   * Loads the ad configuration for the given environment
	   * @param {Environment} environment
	   * @return {Promise.<AdsConfigurationResponse>}
	   */
	  return function (environment) {
	    return new Promise(function (resolve, reject) {
	      try {
	        var publisher = environment.publisher,
	            publisherSpecificQueries = environment.publisherSpecificQueries,
	            gameSlug = environment.gameSlug;
	        var allowedKeys = ['publisher', 'game', 'country', 'isMobile'];
	        var data = {};

	        if (publisherSpecificQueries && publisherSpecificQueries.ads) {
	          var filteredQuery = publisherSpecificQueries.ads.filter(function (value) {
	            return allowedKeys.indexOf(value) >= 0;
	          });
	          filteredQuery.forEach(function (key) {
	            if (!environment[key]) {
	              throw new Error("Can't load config without ".concat(key, " information"));
	            }

	            data[key] = environment[key];
	          });
	        } else {
	          if (!publisher) {
	            throw new Error("Can't load config without publisher information");
	          }
	        }

	        data = {
	          publisherId: publisher,
	          gameSlug: gameSlug,
	          returnOld: true,
	          device: environment.isMobile ? 'mobile' : 'desktop',
	          country: environment.country
	        };

	        log$3.info('Requesting config from url: ', getConfig);
	        console.log('GD:M: getting ads config');
	        jQuery.ajax({
	          dataType: 'json',
	          url: getConfig,
	          data: data,
	          headers: {// 'Cache-Control': 'max-age=86400, s-maxage=86400, public',
	          }
	        }).done(function (response) {
	          console.log('GD:M: got ads config', response);
	          resolve(response);
	        }).fail(function (jqXHR, textStatus, errorThrown) {
	          console.log('GD:M: ajax failure on getting ads config', errorThrown);
	          reject(new Error("Failed to load ad config: ".concat(errorThrown)));
	        });
	      } catch (error) {
	        console.log('GD:M: big failure on getting ads config', error);
	        reject(error);
	      }
	    });
	  };
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Converts value to boolean
	 * @param {string|boolean|number|null} value
	 * @return {boolean}
	 */
	function toBoolean(value) {
	  if (!value) {
	    return false;
	  }

	  return value === true || value === 'true' || value === '1' || value === 1;
	}

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$4 = getLog('AdConfigHandler');
	var GAME_IFRAME_ID = 'sg-main-game-iframe'; // TODO: [RS]: Needs to be checked if still required
	// TODO [RS]: Check which values are actually still needed

	/**
	 * Get ads configuration
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var adConfigHandler = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    var _chainState$getDepend = chainState.getDependencies(),
	        environment = _chainState$getDepend.environment,
	        jQuery = _chainState$getDepend.jQuery;

	    getConfigApi(jQuery)(environment).then(function (configResponse) {
	      /**
	       * @type {AdConfiguration}
	       */
	      var config = formatConfig(configResponse, environment);
	      log$4.info('Generated config', {
	        config: config,
	        configResponse: configResponse,
	        environment: environment
	      });
	      chainState.setAdConfiguration(config);
	      chainState.setSkipAds(config.skipAds);
	      chainState.setSkipPreRollAds(config.skipPreRollAds);
	      chainState.setSkipInGameAds(config.skipIngameAds);
	      chainState.setSkipAdsOnAdBlocker(config.adBlockerAutoSkipAds);
	      chainState.setGameBlockedOnAdBlocker(config.adBlockerBlockGame);
	      chainState.setUsePlayButtonInGame(config.usePlayButtonInGame);
	      resolve(chainState);
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	});
	/**
	 * Format the response of the ad config service to an ensured format
	 * @param {AdsConfigurationResponse} adConfigResponse
	 * @param {Environment} env
	 * @return {AdConfiguration}
	 */

	function formatConfig(adConfigResponse, env) {
	  var retrievedGameAdSettings = adConfigResponse.gameAdSettings || {};
	  var gameAdSettings = {
	    isCocos2dGame: toBoolean(env.isCocos2d || retrievedGameAdSettings.isCocos2dGame),
	    supportsGameAdPlayButton: toBoolean(env.supportsAdPlayButton || retrievedGameAdSettings.supportsGameAdPlayButton)
	  };
	  var isMobile = toBoolean(env.isMobile);
	  var forceAdLabel = toBoolean(adConfigResponse.forceAdLabel);
	  return {
	    // TODO: remove publisher and game info
	    // that comes from adConfig
	    // instead use env
	    // when all games are deployed
	    // with the new meta tag info on their index
	    // from deployment tool
	    // (currently only some games have been deployed with this)
	    publisherId: env.publisherId || adConfigResponse.aid,
	    publisher: env.publisherName || adConfigResponse.subplatform,
	    gameId: env.gameId || adConfigResponse.gid,
	    game: env.gameSlug || adConfigResponse.game_slug,
	    locale: env.locale,
	    country: env.country,
	    isMobile: isMobile,
	    agentPlan: adConfigResponse.agent_plan,
	    showAdBlockerInfo: toBoolean(adConfigResponse.show_adblocker_info),
	    adBlockerBlockGame: toBoolean(adConfigResponse.block_game_when_adblocker),
	    adBlockerAutoSkipAds: toBoolean(adConfigResponse.adblocker_auto_skip),
	    adBlockerInfoTemplate: adConfigResponse.adblocker_info,
	    adBlockerBlockGameTemplate: adConfigResponse.adblocker_block_game_template,
	    skipAds: toBoolean(adConfigResponse.skip_ads),
	    skipPreRollAds: !toBoolean(adConfigResponse.show_ad_preroll),
	    skipIngameAds: toBoolean(adConfigResponse.skip_ingame_ads),
	    startAdsTimerOnGameLoad: toBoolean(adConfigResponse.start_ads_timer_on_game_load),
	    displayBannerInterval: (adConfigResponse.banner_interval_time || 0) * 1000,
	    displayWrapperAd: toBoolean(adConfigResponse.display_wrapper_ad),
	    displayExternalAds: displayExternalAds(toBoolean(adConfigResponse.displayExternalAds), toBoolean(adConfigResponse.externalAdInIframeOnly)),
	    uiMainGameIframe: GAME_IFRAME_ID,
	    gameTeaserImage: env.gameTeaser || adConfigResponse.game_teaser,
	    gameAdSettings: gameAdSettings,
	    disablePrerollForNewUsers: toBoolean(adConfigResponse.disablePrerollForNewUsers),
	    usePlayButtonInGame: usePlayButtonInGame(gameAdSettings, adConfigResponse.ads_configurations, isMobile),
	    forceAdLabel: forceAdLabel,
	    oldAdConfig: adConfigResponse.ads_configurations,
	    sourceGameId: null,
	    clientIpHash: null,
	    userAgent: null,
	    gameDetailsPageVersion: null,
	    isOffer: null,
	    systemId: null,
	    ingameAdPopup: null,
	    usingFastPrerollFlow: env.usingFastPrerollFlow,
	    inFastPrerollFlowABTest: env.inFastPrerollFlowABTest
	  };
	}
	/**
	 * Determine if the ingame media play button should be used
	 *
	 * @param {GameAdSettings} gameAdSettings
	 * @param {OldAdConfigurations} adsConfigurations
	 * @param {boolean} [isMobile=false]
	 * @returns {boolean}
	 */


	function usePlayButtonInGame() {
	  var gameAdSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var adsConfigurations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var isMobile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  if (!adsConfigurations.general || !adsConfigurations.general.dfpGame) {
	    return false;
	  }

	  var inGamePlayButtonConfig = adsConfigurations.general.dfpGame.ingamePlayButton;

	  if (!inGamePlayButtonConfig) {
	    return false;
	  }

	  var inGamePlayButtonActive = true;

	  if (inGamePlayButtonConfig.hasOwnProperty('desktop') || inGamePlayButtonConfig.hasOwnProperty('mobile')) {
	    if (isMobile) {
	      inGamePlayButtonActive = toBoolean(inGamePlayButtonConfig.mobile);
	    } else {
	      inGamePlayButtonActive = toBoolean(inGamePlayButtonConfig.desktop);
	    }
	  }

	  return toBoolean(inGamePlayButtonActive && gameAdSettings.supportsGameAdPlayButton);
	}

	function displayExternalAds(displayExternal, displayInIframeOnly) {
	  var inIframe = window_1.parent !== window_1;
	  var response = displayExternal && !displayInIframeOnly || displayInIframeOnly && inIframe;
	  log$4.info('Should external ads be displayed: ', {
	    inIframe: inIframe,
	    displayExternal: displayExternal,
	    displayInIframeOnly: displayInIframeOnly,
	    response: response
	  });
	  return response;
	}

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader = false;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					var stringifiedAttributes = '';

					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return (document.cookie = key + '=' + value + stringifiedAttributes);
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!this.json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 29.05.17.
	 * Copyright © Softgames 2017
	 */
	var KEY_PREFIX = 'SG_ADS_';
	var DEFAULT_EXPIRES_IN_DAYS = 5 * 365;
	/**
	 * Validates and generates the extended key
	 * @param {string} key
	 * @returns {string}
	 */

	function getKey(key) {
	  if (!key || typeof key !== 'string') {
	    throw new Error('Cookie key must be a string');
	  }

	  return KEY_PREFIX + key;
	}
	/**
	 * Sets a value for the given key
	 * @param {string} key
	 * @param {*} value
	 * @param {number} [expiresInDays=DEFAULT_EXPIRES_IN_DAYS]
	 */


	function set(key, value) {
	  var expiresInDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_EXPIRES_IN_DAYS;
	  js_cookie.set(getKey(key), value, {
	    expires: expiresInDays,
	    path: '/'
	  });
	}
	/**
	 * Returns the value for the given key
	 * @function get
	 * @param {string} key
	 * @returns {*}
	 */


	function get(key) {
	  return js_cookie.get(getKey(key));
	}

	var storage = {
	  get: get,
	  set: set
	};

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */
	var number = {
	  random: function random(startValue, endValue) {
	    return Math.floor(Math.random() * (endValue - startValue) + startValue);
	  }
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var MEDIA_USER_ID_KEY = 'mediaUser';
	var mediaUser = (function (aid) {
	  var key = "".concat(MEDIA_USER_ID_KEY, "_").concat(aid);
	  var id = storage.get(key);
	  var isNew = Boolean(id);

	  if (!id) {
	    id = Date.now() + '_' + number.random(1, 100000);
	  }

	  storage.set(key, id);
	  return {
	    id: id,
	    isNew: isNew
	  };
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	/**
	 * Get the current user
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var adUser = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      var _chainState$getAdConf = chainState.getAdConfiguration(),
	          aid = _chainState$getAdConf.aid;

	      var _chainState$getDepend = chainState.getDependencies(),
	          sgUid = _chainState$getDepend.environment.sgUid;

	      var user = mediaUser(aid);
	      chainState.setUser(user);
	      chainState.setP2UserId(sgUid);
	      resolve(chainState);
	    } catch (error) {
	      reject(error);
	    }
	  });
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var mediaCpmUrl = config.mediaCpmUrl;
	var log$5 = getLog('mediaCpm-loader');
	/**
	 * Fetches the media CPM from the window
	 * @return {MediaCPM}
	 */

	function getMediaCpmFromWindow() {
	  return window_1.SG_MC;
	}
	/**
	 * Load mediaCpm
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */


	var load = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      var mediaCpm = getMediaCpmFromWindow();

	      if (mediaCpm) {
	        log$5.info('mediaCPM already loaded');
	        chainState.setMediaCpm(mediaCpm);
	        resolve(chainState);
	        return;
	      }

	      log$5.info("Start loading mediaCPM ...");
	      plainLoadScript(mediaCpmUrl).then(function () {
	        mediaCpm = getMediaCpmFromWindow();

	        if (!mediaCpm) {
	          throw new Error('Failed to fetch mediaCpm after script loaded');
	        }

	        log$5.info('... finished loading mediaCPM');
	        chainState.setMediaCpm(mediaCpm);
	        resolve(chainState);
	      }).catch(function (error) {
	        log$5.error('... failed loading mediaCPM', error);
	        reject(error);
	      });
	    } catch (error) {
	      log$5.error('... failed loading mediaCPM!', error);
	      reject(error);
	    }
	  });
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$6 = getLog('prepareConfig (AdConfigHandler)');
	/**
	 * Prepare configs for mediaCpm
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var prepareConfig = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      var adConfiguration = chainState.getAdConfiguration();
	      var user = chainState.getUser();
	      var p2UserId = chainState.getP2UserId();
	      var mediaCpmConfig = {
	        environmentConfig: getEnvironmentConfig(adConfiguration, user, chainState.isAdBlockerActivated(), p2UserId),
	        adsConfigurations: adConfiguration.oldAdConfig || {}
	      };
	      log$6.info('Config injected into mediaCpm', mediaCpmConfig);
	      chainState.setMediaCpmConfig(mediaCpmConfig);
	      resolve(chainState);
	    } catch (error) {
	      reject(error);
	    }
	  });
	});
	/**
	 * Generates mediaCpm environment config
	 * @param {AdConfiguration} adConfiguration
	 * @param {User} user
	 * @param {boolean} adBlockerActive
	 * @param {String} p2UserId
	 * @returns {MediaCPMEnvironmentConfig}
	 */

	function getEnvironmentConfig(adConfiguration, user, adBlockerActive, p2UserId) {
	  return {
	    adBlockerActive: adBlockerActive,
	    publisherId: adConfiguration.publisherId,
	    publisher: adConfiguration.publisher,
	    gameId: adConfiguration.gameId,
	    sourceGameId: adConfiguration.sourceGameId,
	    game: adConfiguration.game,
	    isMobile: adConfiguration.isMobile,
	    locale: adConfiguration.locale,
	    country: adConfiguration.country,
	    userId: user.id,
	    p2UserId: p2UserId,
	    isNewUser: user.isNew,
	    agentPlan: adConfiguration.agentPlan,
	    clientIpHash: adConfiguration.clientIpHash,
	    userAgent: adConfiguration.userAgent,
	    gameDetailsPageVersion: adConfiguration.gameDetailsPageVersion,
	    isOffer: adConfiguration.isOffer,
	    showAdBlockerInfo: adConfiguration.showAdBlockerInfo,
	    adBlockerAutoSkipAds: adConfiguration.adBlockerAutoSkipAds,
	    adBlockerInfoTemplate: adConfiguration.adBlockerInfoTemplate,
	    skipAds: adConfiguration.skipAds,
	    skipIngameAds: adConfiguration.skipIngameAds,
	    startAdsTimerOnGameLoad: adConfiguration.startAdsTimerOnGameLoad,
	    systemId: adConfiguration.systemId,
	    displayBannerInterval: adConfiguration.displayBannerInterval,
	    displayWrapperAd: adConfiguration.displayWrapperAd,
	    displayExternalAds: adConfiguration.displayExternalAds,
	    uiMainGameIframe: adConfiguration.uiMainGameIframe,
	    ingameAdPopupTemplate: adConfiguration.ingameAdPopup,
	    gameTeaserImage: adConfiguration.gameTeaserImage,
	    disablePrerollForNewUsers: adConfiguration.disablePrerollForNewUsers,
	    useGameMediaPlayButton: adConfiguration.usePlayButtonInGame,
	    cocos2dGameMediaButtonFlow: adConfiguration.gameAdSettings.isCocos2dGame,
	    forceAdLabel: adConfiguration.forceAdLabel,
	    usingFastPrerollFlow: adConfiguration.usingFastPrerollFlow,
	    inFastPrerollFlowABTest: adConfiguration.inFastPrerollFlowABTest
	  };
	}

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Prepare mediaCpm
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */
	var prepare = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      var mediaCpm = chainState.getMediaCpm();

	      var _chainState$getDepend = chainState.getDependencies(),
	          messageBus = _chainState$getDepend.messageBus;

	      var _chainState$getMediaC = chainState.getMediaCpmConfig(),
	          environmentConfig = _chainState$getMediaC.environmentConfig,
	          adsConfigurations = _chainState$getMediaC.adsConfigurations;

	      mediaCpm.injectEventHandler(messageBus);
	      mediaCpm.injectConfiguration(environmentConfig, adsConfigurations, function (error) {
	        if (error) {
	          reject(error);
	        } else {
	          resolve(chainState);
	        }
	      });
	    } catch (error) {
	      reject(error);
	    }
	  });
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	/**
	 * Load and init mediaCpm
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var mediaCPM = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      promise.waterfall([load, prepareConfig, prepare], chainState).then(function (chainState) {
	        resolve(chainState);
	      }).catch(function (err) {
	        reject(err);
	      });
	    } catch (err) {
	      reject(err);
	    }
	  });
	});

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Returns the adsModule for disabled ads
	 * @return {AdModule}
	 */
	var disabled = (function () {
	  var error = new Error('Ads module disabled');
	  return {
	    show: function show(slotConfiguration, callback) {
	      if (!callback) {
	        return Promise.reject(error);
	      }

	      callback(error);
	    },
	    isInitiated: function isInitiated() {
	      return true;
	    },
	    incentiviseAdsAvailable: function incentiviseAdsAvailable() {
	      return false;
	    },
	    getExternalTargeting: function getExternalTargeting() {
	      return false;
	    },
	    getHost: function getHost() {
	      return false;
	    },
	    SLOTS: {},
	    EVENT_NAMES: {}
	  };
	});

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 27.06.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Checks if the value is a string
	 * @param {*} val
	 * @return {boolean}
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	/**
	 * Checks if the value is a array
	 * @param {*} val
	 * @return {boolean}
	 */


	function isArray(val) {
	  return Array.isArray(val);
	}
	/**
	 * Throws an error when the value is empty or is not a string
	 * @param {*} value Value to validate
	 * @param {string} errorMessage Message of the error that will be thrown
	 */


	function validateNonEmptyString(value, errorMessage) {
	  if (!isNonEmptyString(value)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is the value a not empty string?
	 * @param {*} value Value to validate
	 * @returns {boolean}
	 */


	function isNonEmptyString(value) {
	  return value && isString(value);
	}
	/**
	 * Throws an error when the value is not a number
	 * @param {*} value Value to validate
	 * @param {string} errorMessage Message of the error that will be thrown
	 * @param {boolean} [higherThanZero=false] Only numbers higher than zero allowed
	 */


	function validateNumber(value, errorMessage) {
	  var higherThanZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  if (!isNumber(value, higherThanZero)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is the value a number?
	 * @param {*} value Value to validate
	 * @param {boolean} [higherThanZero=false] Only numbers higher than zero allowed
	 * @returns {boolean}
	 */


	function isNumber(value) {
	  var higherThanZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (higherThanZero && !value) {
	    return false;
	  }

	  return typeof value === 'number' && !isNaN(value);
	}
	/**
	 * Throws an error when the value is not a boolean
	 * @param {*} value Value to validate
	 * @param {string} errorMessage Message of the error that will be thrown
	 */


	function validateBoolean(value, errorMessage) {
	  if (!isBoolean(value)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is the value a boolean?
	 * @param {*} value Value to validate
	 * @returns {boolean}
	 */


	function isBoolean(value) {
	  return typeof value === 'boolean';
	}
	/**
	 * Throws an error when the value is not a valid enum
	 * @param {*} value Value to validate
	 * @param {[*]} possibleValues Array of possible values to check against
	 * @param {string} errorMessage Message of the error that will be thrown
	 */


	function validateEnum(value, possibleValues, errorMessage) {
	  if (!isEnum(value, possibleValues)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is valid enum value?
	 * @param {*} value Value to validate
	 * @param {[*]} possibleValues Array of possible values to check against
	 * @returns {boolean}
	 */


	function isEnum(value, possibleValues) {
	  if (!possibleValues || !isArray(possibleValues)) {
	    throw new Error('Possible values must be an array');
	  }

	  return possibleValues.indexOf(value) !== -1;
	}
	/**
	 * Throws an error when the value is not a Date
	 * @param {*} value Value to validate
	 * @param {string} errorMessage Message of the error that will be thrown
	 */


	function validateDate(value, errorMessage) {
	  if (!isDate(value)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is valid Date value?
	 * @param {*} value Value to validate
	 * @returns {boolean}
	 */


	function isDate(value) {
	  return value && value instanceof Date;
	}
	/**
	 * Throws an error when the value is not a date string
	 * @param {*} value Value to validate
	 * @param {string} errorMessage Message of the error that will be thrown
	 */


	function validateDateString(value, errorMessage) {
	  if (!isDateString(value)) {
	    throw new Error(errorMessage);
	  }
	}
	/**
	 * Is valid date string value?
	 * @param {*} value Value to validate
	 * @returns {boolean}
	 */


	function isDateString(value) {
	  if (!isNonEmptyString(value)) {
	    return false;
	  }

	  return value === new Date(value).toISOString();
	}
	/**
	 * Is valid function value?
	 * @param {*} value Value to validate
	 * @returns {boolean}
	 */


	function isFunction(value) {
	  return typeof value === 'function';
	}

	var VALIDATORS = {
	  validateNonEmptyString: validateNonEmptyString,
	  isNonEmptyString: isNonEmptyString,
	  validateNumber: validateNumber,
	  isNumber: isNumber,
	  validateBoolean: validateBoolean,
	  isBoolean: isBoolean,
	  validateEnum: validateEnum,
	  isEnum: isEnum,
	  validateDate: validateDate,
	  isDate: isDate,
	  validateDateString: validateDateString,
	  isDateString: isDateString,
	  isFunction: isFunction
	};

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 11.07.17.
	 * Copyright © Softgames 2017
	 */
	var adsDisplayed = 0;
	/**
	 * Increment the counter after an ad is displayed
	 */

	function countAdDisplay() {
	  adsDisplayed++;
	}
	/**
	 * Returns the amount of displayed ads
	 * @return {number}
	 */


	function getCount() {
	  return adsDisplayed;
	}

	var AD_COUNTER = {
	  countAdDisplay: countAdDisplay,
	  getCount: getCount
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$7 = getLog('tracker');
	var GA_ACTIONS = {
	  preroll: 'prerollAdPopup/#{adsDisplayed}',
	  pregdproll: 'preGDProllAdPopup/#{adsDisplayed}',
	  ingame: 'ingameAdPopup/#{adsDisplayed}',
	  incentivise: 'incentiviseAdPopup',
	  second_preroll: 'prerollAdPopup/#{adsDisplayed}'
	};
	/**
	 * Returns the tracker
	 * @param {GoogleTracking} gaTrack
	 * @return {{viaGA: (function(MediaCPMSlotConfig))}}
	 */

	var trackerFab = (function (gaTrack) {
	  return {
	    viaGA: function viaGA(slotConfiguration) {
	      return getViaGaTracker(gaTrack, slotConfiguration);
	    }
	  };
	});
	/**
	 * Tracking via Google analytics
	 * @param {GoogleTracking} gaTrack
	 * @param {MediaCPMSlotConfig} slotConfiguration
	 */

	function getViaGaTracker(gaTrack, slotConfiguration) {
	  try {

	    var slotName = slotConfiguration.name;
	    var trackPattern = GA_ACTIONS[slotName];

	    if (!trackPattern) {
	      log$7.debug('No pattern for ' + slotName + ', no tracking');
	      return;
	    }

	    var trackingAction = trackPattern.replace('#{adsDisplayed}', AD_COUNTER.getCount());
	    gaTrack.trackPageView(trackingAction);
	    log$7.info('Tracked:', trackingAction);
	  } catch (error) {
	    log$7.warn('Failed to track');
	    log$7.warn(error);
	  }
	}

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var DEFAULT_OVERLAY_INTERVAL = CONSTS.DEFAULT_OVERLAY_INTERVAL;
	var log$8 = getLog('adsModule');
	/**
	 * Returns the adsModule for activated ads
	 * @param {MediaCPM} mediaCpm
	 * @param {AdConfiguration} adConfiguration
	 * @param {MmMessageBus} messageBus
	 * @param {GoogleTracking} gaTrack
	 * @param {ViewQueue} viewQueue
	 * @return {AdModule}
	 */

	var normal = (function (_ref) {
	  var mediaCpm = _ref.mediaCpm,
	      adConfiguration = _ref.adConfiguration,
	      messageBus = _ref.messageBus,
	      gaTrack = _ref.gaTrack,
	      viewQueue = _ref.viewQueue;
	  var showAd = getShowAd(mediaCpm, adConfiguration, messageBus, gaTrack, viewQueue);
	  return {
	    show: function show(slotConfiguration, options, callback) {
	      if (VALIDATORS.isFunction(options)) {
	        callback = options;
	        options = {};
	      }

	      options = options || {};

	      if (callback && !VALIDATORS.isFunction(callback)) {
	        throw new Error('Invalid callback given');
	      }

	      if (callback) {
	        return showAd(slotConfiguration, options, callback);
	      }

	      return new Promise(function (resolve, reject) {
	        try {
	          showAd(slotConfiguration, options, function (error, result) {
	            if (error) {
	              reject(error);
	            } else {
	              resolve(result);
	            }
	          });
	        } catch (error) {
	          reject(error);
	        }
	      });
	    },
	    isInitiated: function isInitiated() {
	      return true;
	    },
	    incentiviseAdsAvailable: function incentiviseAdsAvailable() {
	      if (!mediaCpm) {
	        return false;
	      }

	      return mediaCpm.incentiviseAdsAvailable();
	    },
	    getExternalTargeting: function getExternalTargeting() {
	      if (!mediaCpm) {
	        return false;
	      }

	      return mediaCpm.getExternalTargeting();
	    },
	    getHost: function getHost() {
	      if (!mediaCpm) {
	        return false;
	      }

	      return mediaCpm.getHost();
	    },
	    SLOTS: mediaCpm.SLOTS,
	    EVENT_NAMES: mediaCpm.EVENT_NAMES
	  };
	});
	/**
	 * Returns the showAd function
	 * @param {MediaCPM} mediaCpm
	 * @param {AdConfiguration} adConfiguration
	 * @param {MmMessageBus} messageBus
	 * @param {GoogleTracking} gaTrack
	 * @param {ViewQueue} viewQueue
	 * @return {function(MediaCPMSlotConfig, Object=, (function(Error, MediaCPMAdResult))=): MediaCPMRemote}
	 */

	function getShowAd(mediaCpm, adConfiguration, messageBus, gaTrack, viewQueue) {
	  var skipAd = getSkipAd(mediaCpm, adConfiguration);
	  var adEvent = getAdEvent(messageBus);
	  var tracker = trackerFab(gaTrack);
	  return function (slotConfiguration, options, callback) {
	    try {
	      var skipReason = skipAd(slotConfiguration, options);

	      if (skipReason) {
	        callback(null, {
	          displayed: false,
	          eventName: null,
	          clicked: false,
	          skipped: true,
	          skipReason: skipReason,
	          blocked: false,
	          watchedPercentage: null
	        });
	        return;
	      }

	      if (!mediaCpm || !mediaCpm.isInitiated()) {
	        throw new Error('Media Controller not initialized');
	      }

	      var cb = function cb(error, result) {
	        try {
	          log$8.info('Finished ad display', {
	            error: error,
	            result: result
	          }); // TODO [RS] Check how the result looks like

	          if (!error && slotConfiguration.count) {
	            AD_COUNTER.countAdDisplay();
	          }

	          adEvent('ads.adProcessFinished', {
	            success: !error,
	            adsDisplayedCounter: AD_COUNTER.getCount(),
	            percentageWatched: result.watchedPercentage,
	            clicked: result.clicked,
	            slot: slotConfiguration
	          });
	        } catch (error) {
	          log$8.error('Failed to cleanly finish ad callback', error);
	        }

	        if (error) {
	          callback(error);
	        } else {
	          callback(null, result);
	        }
	      };

	      var executeAd = function executeAd(viewQueueCallback) {
	        tracker.viaGA(slotConfiguration);
	        return mediaCpm.displayMedia(slotConfiguration, options, function (error, result) {
	          log$8.info('... finishing ad call ...', {
	            error: error,
	            result: result
	          });
	          viewQueueCallback(error, result);
	        });
	      };

	      if (options.gameMediaPlayButton || !slotConfiguration.useOverlay) {
	        return executeAd(cb);
	      }

	      viewQueue.execute(executeAd, cb);
	      return {
	        kill: function kill(reason) {
	          log$8.warn('Could not execute kill, due to view queue usage', {
	            reason: reason
	          });
	        }
	      };
	    } catch (error) {
	      log$8.error(error);
	      callback(error);
	    }
	  };
	}
	/**
	 * Returns a function to determine that ad should be skipped
	 * @param {MediaCPM} mediaCpm
	 * @param {AdConfiguration} adConfiguration
	 * @return {function(MediaCPMSlotConfig): boolean}
	 */


	function getSkipAd(mediaCpm, adConfiguration) {
	  var SLOTS = mediaCpm.SLOTS;
	  var overlayInterval = getOverlayInterval(adConfiguration);
	  var useIngamePlayButton = mediaCpm.shouldUseGameMediaPlayButton();
	  var skipAdDueToOverlayInterval = getSkipAdDueToOverlayInterval(mediaCpm.getLastOverlayDisplayedTimestamp, overlayInterval);
	  return function (slotConfiguration) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var reason = null;

	    if (!adConfiguration || !SLOTS) {
	      reason = 'Skipping ad due to missing configuration';
	      log$8.info(reason);
	      return reason;
	    }

	    if (adConfiguration.skipAds) {
	      reason = 'Skipping ad due to skipAds configuration';
	      log$8.info(reason);
	      return reason;
	    }

	    if (adConfiguration.skipIngameAds && slotConfiguration === SLOTS.IN_GAME) {
	      reason = 'Skipping ingame ad due to skipIngameAds configuration';
	      log$8.info(reason);
	      return reason;
	    }

	    if (useIngamePlayButton && !options.gameMediaPlayButton && slotConfiguration.name === 'ingame' && !slotConfiguration.timeTriggered) {
	      reason = 'Skipping ad due to ingame play button usage';
	      log$8.info(reason);
	      return reason;
	    }

	    if (slotConfiguration.useOverlay && !slotConfiguration.ignoreOverlayInterval && skipAdDueToOverlayInterval() && !slotConfiguration.timeTriggered) {
	      // we don't want to look at the bannerInterval if the ad is timer triggered since the hardcoded game timer should be the one taken into account.
	      if (options.gameMediaPlayButton && adConfiguration.publisherId !== 1964 && adConfiguration.gameId !== 988 && adConfiguration.publisher.indexOf('spielaffe') === -1) {
	        log$8.info('Showing ad outside of overlay interval');
	        return null;
	      }

	      reason = 'Skipping ad due to overlay interval';
	      log$8.info(reason);
	      return reason;
	    }

	    return null;
	  };
	}
	/**
	 * Returns the overlay interval
	 * @param {AdConfiguration} adConfiguration
	 * @return {number}
	 */


	function getOverlayInterval(adConfiguration) {
	  return adConfiguration.displayBannerInterval || DEFAULT_OVERLAY_INTERVAL;
	}
	/**
	 * Get function to determine of the overlay should be skipped because it would be to often
	 * @param {function(): number} getLastOverlayDisplayTimestamp
	 * @param {number} overlayInterval
	 * @return {function(): boolean}
	 */


	function getSkipAdDueToOverlayInterval(getLastOverlayDisplayTimestamp, overlayInterval) {
	  return function () {
	    return Date.now() - getLastOverlayDisplayTimestamp() < overlayInterval;
	  };
	}
	/**
	 * Creates a function to fire events
	 * @param {MmMessageBus} messageBus
	 * @return {function(string, *)}
	 */


	function getAdEvent(messageBus) {
	  return function (eventName, data) {
	    try {
	      messageBus.fire(eventName, data, false);
	    } catch (error) {
	      log$8.warn('Failed to fire ad event', error);
	    }
	  };
	}

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var adsController = {
	  disabled: disabled,
	  normal: normal
	};

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */
	/**
	 * Adds the adModule to the chainState
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var adsModule = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      var adsModule = adsController.disabled();

	      if (!chainState.skipLoadingChain()) {
	        var _chainState$getDepend = chainState.getDependencies(),
	            messageBus = _chainState$getDepend.messageBus,
	            gaTrack = _chainState$getDepend.gaTrack,
	            viewQueue = _chainState$getDepend.viewQueue;

	        var mediaCpm = chainState.getMediaCpm();
	        var adConfiguration = chainState.getAdConfiguration();
	        adsModule = adsController.normal({
	          mediaCpm: mediaCpm,
	          adConfiguration: adConfiguration,
	          messageBus: messageBus,
	          gaTrack: gaTrack,
	          viewQueue: viewQueue
	        });
	      }

	      chainState.setAdsModule(adsModule);
	      resolve(chainState);
	    } catch (error) {
	      reject(error);
	    }
	  });
	});

	/**
	 * @typedef {Object} Dependencies
	 * @property {Environment} environment
	 * @property {SdkConnector} sdkConnector
	 * @property {jQuery} jQuery
	 * @property {MmMessageBus} messageBus
	 * @property {GoogleTracking} gaTrack
	 * @property {ViewQueue} viewQueue
	 *
	 * @property {{}} modalWindowManager
	 */

	/**
	 * @typedef {Object} Environment
	 * @property {string} game
	 * @property {number} publisher
	 * @property {string} country
	 * @property {number} publisherId
	 * @property {string} publisherName
	 * @property {number} gameId
	 * @property {string} gameSlug
	 * @property {string} gameTeaser
	 * @property {string} locale
	 * @property {boolean} isMobile
	 * @property {string} env
	 * @property {boolean} isCocos2d
	 * @property {boolean} supportsAdPlayButton
	 * @property {string} [countryCode]
	 */

	var SDK_FUNCTIONS = [{
	  name: 'trigger',
	  length: 3
	}, {
	  name: 'on',
	  length: 2
	}, {
	  name: 'off',
	  length: 2
	}];
	/**
	 * Validates the given dependencies inside of the state
	 * @param {ChainState} state
	 * @return {Promise.<ChainState>}
	 */

	function validate(_x) {
	  return _validate.apply(this, arguments);
	}
	/**
	 * Validates the sdk connector
	 * @param {SdkConnector} sdkConnector
	 */


	function _validate() {
	  _validate = _asyncToGenerator(
	  /*#__PURE__*/
	  regenerator.mark(function _callee(state) {
	    var requirements;
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            requirements = state.getDependencies();
	            validateEnvironment(requirements.environment);
	            validateSdkConnector(requirements.sdkConnector);
	            validateJQuery(requirements.jQuery);
	            validateMessageBus(requirements.messageBus);
	            validateGaTrack(requirements.gaTrack);
	            validateViewQueue(requirements.viewQueue);
	            return _context.abrupt("return", state);

	          case 8:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));
	  return _validate.apply(this, arguments);
	}

	function validateSdkConnector(sdkConnector) {
	  if (!sdkConnector) {
	    throw new Error('No sdkConnector given');
	  }

	  SDK_FUNCTIONS.forEach(function (_ref) {
	    var name = _ref.name,
	        length = _ref.length;

	    if (!sdkConnector.hasOwnProperty(name)) {
	      throw new Error("Given sdkConnector does not support required method \"".concat(name, "\""));
	    }

	    var func = sdkConnector[name];

	    if (!func) {
	      throw new Error("Method \"".concat(name, "\" of the given sdkConnector does not exist"));
	    }

	    if (!VALIDATORS.isFunction(func)) {
	      throw new Error("Method \"".concat(name, "\" of the given sdkConnector is not a function"));
	    }

	    if (func.length !== length) {
	      throw new Error("Method \"".concat(name, "\" of the given sdkConnector does not support the required amount of parameters"));
	    }
	  });
	}
	/**
	 * Validates the jQuery lib
	 * @param {jQuery} jQuery
	 */


	function validateJQuery(jQuery) {
	  if (!jQuery) {
	    throw new Error('No jQuery given');
	  }

	  if (!VALIDATORS.isFunction(jQuery.ajax)) {
	    throw new Error('No ajax method in provided jQuery');
	  }
	}

	var ENVIRONMENT_VALIDATORS = {
	  game: VALIDATORS.isNonEmptyString,
	  publisherName: VALIDATORS.isNonEmptyString,
	  gameSlug: VALIDATORS.isNonEmptyString,
	  gameTeaser: VALIDATORS.isNonEmptyString,
	  locale: VALIDATORS.isNonEmptyString,
	  env: VALIDATORS.isNonEmptyString,
	  publisher: function publisher(val) {
	    return VALIDATORS.isNumber(val, true);
	  },
	  publisherId: function publisherId(val) {
	    return VALIDATORS.isNumber(val, true);
	  },
	  gameId: function gameId(val) {
	    return VALIDATORS.isNumber(val, true);
	  },
	  isMobile: VALIDATORS.isBoolean,
	  isCocos2d: VALIDATORS.isBoolean,
	  supportsAdPlayButton: VALIDATORS.isBoolean,
	  countryCode: function countryCode(val) {
	    return !val || VALIDATORS.isNonEmptyString(val);
	  }
	};
	/**
	 * Validates the provided environment
	 * @param {Environment} environment
	 */

	function validateEnvironment(environment) {
	  if (!environment) {
	    throw new Error('No environment provided');
	  }

	  console.log('zzz:1 environment', environment);

	  if (!environment['gameId']) {
	    environment['gameId'] = environment['gameData'].gameId;
	  }

	  console.log('zzz:1.1 environment', environment);
	  environment['supportsAdPlayButton'] = !environment['supportsAdPlayButton'] ? true : environment['supportsAdPlayButton'];
	  Object.keys(ENVIRONMENT_VALIDATORS).forEach(function (propertyName) {
	    var validator = ENVIRONMENT_VALIDATORS[propertyName];

	    if (!validator(environment[propertyName])) {
	      console.log('zzz environment[propertyName]', propertyName, environment[propertyName]);
	      throw new Error("Invalid value for environment property \"".concat(propertyName, "\" given"));
	    }
	  });
	}
	/**
	 * Validates the provided messageBus
	 * @param {MmMessageBus} messageBus
	 */


	function validateMessageBus(messageBus) {
	  if (!messageBus) {
	    throw new Error('No messageBus given');
	  } // ToDo [RS]: Add more details

	}
	/**
	 * Validates the provided gaTrack
	 * @param {GoogleTracking} gaTrack
	 */


	function validateGaTrack(gaTrack) {
	  if (!gaTrack) {
	    throw new Error('No gaTrack given');
	  } // ToDo [RS]: Add more details

	}
	/**
	 * Validates the provided viewQueue
	 * @param {ViewQueue} viewQueue
	 */


	function validateViewQueue(viewQueue) {
	  if (!viewQueue) {
	    throw new Error('No viewQueue given');
	  } // ToDo [RS]: Add more details

	}

	var dependenciesValidator = {
	  validate: validate
	};

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Events fired by the SG-SDK
	 * @readonly
	 * @enum {string}
	 * @name SDK_EVENTS
	 */
	var SDK_EVENTS = {
	  BEFORE_PLAY_BUTTON_DISPLAY: 'beforePlayButtonDisplay',
	  PLAY_BUTTON_PRESSED: 'playButtonPressed',
	  PLAY_BUTTON_SKIPPED: 'playButtonSkipped',
	  PLAY_START: 'private.playStart',
	  PLAY_STOP: 'private.playStop',
	  REWARDED_AD: 'rewardedAd',
	  PAUSE_GAME: 'private.pauseGame',
	  UNPAUSE_GAME: 'private.unpauseGame',
	  SCOREBOARD_AD_DISPLAY: 'ad.gameBanner.display',
	  SCOREBOARD_AD_CLEANUP: 'ad.gameBanner.cleanup',
	  SCOREBOARD_AD_FAILED: 'private.scoreboardAdFailed'
	};

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 01.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$9 = getLog('Play Button In-Game');
	var CANVAS_EVENT_NAMESPACE = 'SG_CANVAS_AD_EVENT';
	var DEFAULT_OVERLAY_INTERVAL$1 = CONSTS.DEFAULT_OVERLAY_INTERVAL;
	var inGameAdPlayButtonActivated = false;
	var playButtonCallbacks = null;
	var canvasEventHooked = false;
	/**
	 * Initialize in-game ads play buttons
	 *
	 * @param {ChainState} state
	 * @return {Promise.<ChainState>}
	 */

	function init(state) {
	  return new Promise(function (resolve) {
	    try {
	      log$9.info('Init ...');
	      /**
	       * @type {Dependencies}
	       */

	      var _state$getDependencie = state.getDependencies(),
	          sdkConnector = _state$getDependencie.sdkConnector;

	      hookDummyEventHandler(sdkConnector, SDK_EVENTS.BEFORE_PLAY_BUTTON_DISPLAY);
	      hookDummyEventHandler(sdkConnector, SDK_EVENTS.PLAY_BUTTON_PRESSED);
	      hookDummyEventHandler(sdkConnector, SDK_EVENTS.PLAY_BUTTON_SKIPPED);
	      log$9.info('... initialized');
	      resolve(state);
	    } catch (error) {
	      log$9.error('... init failed!', error);
	      resolve(state);
	    }
	  });
	}
	/**
	 * Hooks an dummy event handler to the given event
	 * @param {SdkConnector} sdkConnector
	 * @param {string} eventName
	 */


	function hookDummyEventHandler(sdkConnector, eventName) {
	  try {
	    sdkConnector.on(eventName, function (event) {
	      if (inGameAdPlayButtonActivated) {
	        return;
	      }

	      try {
	        log$9.info("Dummy event handler for event \"".concat(eventName, "\" triggered ..."));
	        getEventCallback(eventName, event)();
	      } catch (error) {
	        log$9.error("... failed to handle event \"".concat(eventName, "\""), error);
	      }
	    });
	  } catch (error) {
	    log$9.warn("Failed to connect dummy event handler for \"".concat(eventName, "\""), error);
	  }
	}
	/**
	 * Get the callback from a event
	 * @param {string} eventName
	 * @param {DispatchEvent} event
	 * @return {function(error)}
	 */


	function getEventCallback(eventName) {
	  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  try {
	    var callback = event.dispatcherEventCallback;

	    if (!VALIDATORS.isFunction(callback)) {
	      callback = event.callback;
	    }

	    if (!VALIDATORS.isFunction(callback)) {
	      throw new Error('No callback function given in event');
	    }

	    return function (error, result) {
	      try {
	        if (error) {
	          log$9.error("... failed to handle process for event \"".concat(eventName, "\""), error);
	        } else {
	          log$9.info("... finished event handling for event \"".concat(eventName, "\""), result);
	        }

	        try {
	          callback(error, result);
	        } catch (error) {
	          log$9.error("Failed to execute event callback for event \"".concat(eventName, "\""), error);
	        }
	      } catch (error) {
	        log$9.error("... failed to handle process finish for event \"".concat(eventName, "\""), error);
	      }
	    };
	  } catch (error) {
	    log$9.error('Could not retrieve callback from event', error);
	  }

	  return function (error, result) {
	    if (error) {
	      log$9.error("... failed to handle process for event \"".concat(eventName, "\" (Fallback event callback)"), error);
	    } else {
	      log$9.info("... finished event handling for event \"".concat(eventName, "\" (Fallback event callback)"), result);
	    }
	  };
	}
	/**
	 * Initialize in-game ads play buttons
	 *
	 * @param {ChainState} state
	 * @return {Promise.<ChainState>}
	 */


	function initAfterAdInit(state) {
	  return new Promise(function (resolve) {
	    try {
	      log$9.info('Init after ad init ...');

	      if (state.skipLoadingChain()) {
	        log$9.info('... disabled due to skip ads');
	        resolve(state);
	        return;
	      }

	      if (state.isSkipInGameAds()) {
	        log$9.info('... disabled due to skip ingame ads');
	        resolve(state);
	        return;
	      }

	      if (!state.isUsePlayButtonInGame()) {
	        log$9.info('... disabled');
	        resolve(state);
	        return;
	      }

	      var _state$getDependencie2 = state.getDependencies(),
	          sdkConnector = _state$getDependencie2.sdkConnector,
	          viewQueue = _state$getDependencie2.viewQueue;

	      var mediaCPM = state.getMediaCpm();
	      /**
	       * @type {AdModule}
	       */

	      var adsModule = state.getAdsModule();
	      /**
	       * @type {AdConfiguration}
	       */

	      var adConfiguration = state.getAdConfiguration();

	      if (!viewQueue || !VALIDATORS.isFunction(viewQueue.execute)) {
	        throw new Error('No valid viewQueue given');
	      }

	      var jQuery = window_1.jQuery;

	      if (!jQuery) {
	        throw new Error('No jQuery');
	      }

	      hookEventHandler(sdkConnector, SDK_EVENTS.BEFORE_PLAY_BUTTON_DISPLAY, getGameBeforePlayButtonDisplayHandler(viewQueue, adsModule, jQuery, adConfiguration.gameAdSettings.isCocos2dGame, mediaCPM.getLastOverlayDisplayedTimestamp, adConfiguration.displayBannerInterval || DEFAULT_OVERLAY_INTERVAL$1));
	      hookEventHandler(sdkConnector, SDK_EVENTS.PLAY_BUTTON_PRESSED, getGamePlayButtonPressedHandler());
	      hookEventHandler(sdkConnector, SDK_EVENTS.PLAY_BUTTON_SKIPPED, getGamePlayButtonSkippedHandler());
	      inGameAdPlayButtonActivated = true;
	      log$9.info('... activated');
	      resolve(state);
	    } catch (error) {
	      log$9.error('... disabled due to init after ad init failed!', error);
	      resolve(state);
	    }
	  });
	}
	/**
	 * Hooks an event handler to the given event
	 * @param {SdkConnector} sdkConnector
	 * @param {string} eventName
	 * @param {function(Object): Promise.<Object>} eventHandler
	 */


	function hookEventHandler(sdkConnector, eventName, eventHandler) {
	  try {
	    sdkConnector.on(eventName, function (event) {
	      var callback = null;

	      try {
	        log$9.info("Event handler for event \"".concat(eventName, "\" triggered ..."));
	        callback = getEventCallback(eventName, event);
	        eventHandler(event).then(function (result) {
	          callback(null, result);
	        }).catch(function (error) {
	          callback(error);
	        });
	      } catch (error) {
	        if (callback) {
	          callback(error);
	        } else {
	          log$9.error("... failed to handle event \"".concat(eventName, "\""), error);
	        }
	      }
	    });
	  } catch (error) {
	    log$9.warn("Failed to connect event handler for \"".concat(eventName, "\""), error);
	  }
	}
	/**
	 * Get event handler for the gameBeforePlayButtonDisplay event
	 *
	 * @param {ViewQueue} viewQueue
	 * @param {AdModule} adsModule
	 * @param {jQuery} jQuery
	 * @param {boolean} isCocos2d=false
	 * @param {function} getLastOverlayDisplayedTimestamp
	 * @param {number} overlayInterval
	 * @return {function(GameBeforePlayButtonDisplayEvent)}
	 */


	function getGameBeforePlayButtonDisplayHandler(viewQueue, adsModule, jQuery) {
	  var isCocos2d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var getLastOverlayDisplayedTimestamp = arguments.length > 4 ? arguments[4] : undefined;
	  var overlayInterval = arguments.length > 5 ? arguments[5] : undefined;
	  return function (event) {
	    return new Promise(function (resolve, reject) {
	      try {
	        if (playButtonCallbacks) {
	          log$9.info("... skipping before play button display event due to existing ad flow ...");
	          resolve();
	          return;
	        } // check banner interval even though we have an ingame play button


	        if (Date.now() - getLastOverlayDisplayedTimestamp() < overlayInterval) {
	          log$9.info('... skipping because interval!');
	          resolve();
	          return;
	        }

	        event = event || {};
	        var slotKey = event.slotKey;
	        var slot = adsModule.SLOTS.IN_GAME;

	        if (slotKey) {
	          slot = adsModule.SLOTS[slotKey];

	          if (!slot) {
	            log$9.warn("... skipping before play button display event due to unknown ad slot \"".concat(slotKey, "\" ..."));
	            resolve();
	            return;
	          }
	        }

	        log$9.info("... trying to handle before play button displayed event ...");
	        playButtonCallbacks = {
	          playButtonClickedCallback: null,
	          adDisplayFinished: null,
	          killAdDisplay: null,
	          displayPlayButtonCallback: function displayPlayButtonCallback(error, result) {
	            if (error) {
	              reject(error);
	            } else {
	              resolve(result);
	            }
	          }
	        };
	        /**
	         * Callback executed when the task in the viewQueue is done
	         * @param {Error} error
	         * @param {*} [result]
	         */

	        var callback = function callback(error, result) {
	          try {
	            log$9.info('Execute ad display done callback ...', {
	              error: error,
	              result: result
	            });

	            if (playButtonCallbacks) {
	              if (!playButtonCallbacks.adDisplayFinished) {
	                playButtonCallbacks.displayPlayButtonCallback(error, result);
	              } else {
	                playButtonCallbacks.adDisplayFinished(error, result);
	              }
	            }

	            playButtonCallbacks = null;
	            canvasEventHooked = false;
	            log$9.info('... execution of ad display done callback done');
	          } catch (error) {
	            log$9.error('... failed to execute ad display done callback', error);
	          }
	        };
	        /**
	         * Function to show the ad in the view queue
	         * @param {function} viewQueueCallback
	         */


	        var showAdViaViewQueue = function showAdViaViewQueue(viewQueueCallback) {
	          var showExternalPlayButton = function showExternalPlayButton(callback) {
	            if (typeof callback !== 'function') {
	              var text = 'Given callback to the showPlayButton function call by the mediaCPM is not a function';
	              log$9.warn(text);
	              throw new Error(text);
	            }

	            try {
	              playButtonCallbacks.playButtonClickedCallback = callback;

	              if (isCocos2d) {
	                var $canvases = jQuery('canvas');

	                if ($canvases.length) {
	                  var clickHandler = function clickHandler(event) {
	                    try {
	                      event.stopPropagation();
	                      event.preventDefault();
	                      log$9.debug('Canvas event listener executed');

	                      if ($canvases) {
	                        $canvases.unbind('.' + CANVAS_EVENT_NAMESPACE);
	                      }

	                      if (!playButtonCallbacks || !playButtonCallbacks.playButtonClickedCallback) {
	                        log$9.notice('Triggered canvas click event after add is already done');
	                        return;
	                      }

	                      playButtonCallbacks.playButtonClickedCallback();
	                    } catch (error) {
	                      log$9.error('Failed to execute canvas click event handler', error);
	                    }
	                  };

	                  $canvases.on('click.' + CANVAS_EVENT_NAMESPACE, clickHandler);
	                  $canvases.on('mouseup.' + CANVAS_EVENT_NAMESPACE, clickHandler);
	                  $canvases.on('touchend.' + CANVAS_EVENT_NAMESPACE, clickHandler);
	                  canvasEventHooked = true;
	                  log$9.debug('Hooked event listener to canvas');
	                }
	              }

	              playButtonCallbacks.displayPlayButtonCallback();
	            } catch (error) {
	              callback(error);
	            }
	          };

	          var options = {
	            showPlayButton: showExternalPlayButton,
	            gameMediaPlayButton: true
	          };
	          log$9.debug('Calling inGamePlayButton ad', {
	            options: options
	          });
	          var mediaCpmRemote = adsModule.show(slot, options, viewQueueCallback);

	          if (mediaCpmRemote && typeof mediaCpmRemote.kill === 'function') {
	            playButtonCallbacks.killAdDisplay = mediaCpmRemote.kill;

	            if (typeof mediaCpmRemote.kill.bind === 'function') {
	              playButtonCallbacks.killAdDisplay = mediaCpmRemote.kill.bind(mediaCpmRemote);
	            }
	          }
	        };

	        try {
	          viewQueue.execute(showAdViaViewQueue, callback);
	        } catch (error) {
	          callback(error);
	        }
	      } catch (error) {
	        reject(error);
	      }
	    });
	  };
	}
	/**
	 * Get event handler for the gamePlayButtonPressed event
	 *
	 * @return {function(): Promise.<Object>}
	 */


	function getGamePlayButtonPressedHandler() {
	  return function () {
	    return new Promise(function (resolve, reject) {
	      try {
	        if (!playButtonCallbacks) {
	          log$9.info("... skipping play button press event due to missing ad flow ...");
	          resolve();
	          return;
	        }

	        if (!canvasEventHooked && !playButtonCallbacks.playButtonClickedCallback) {
	          reject(new Error('Triggered play button press event before the ad was prepared'));
	          return;
	        }

	        log$9.info("... trying to handle play button pressed event ...");

	        playButtonCallbacks.adDisplayFinished = function (error, result) {
	          if (error) {
	            reject(error);
	          } else {
	            resolve(result);
	          }
	        };

	        if (!canvasEventHooked) {
	          playButtonCallbacks.playButtonClickedCallback();
	        }
	      } catch (error) {
	        reject(error);
	      }
	    });
	  };
	}
	/**
	 * Get event handler for the gamePlayButtonSkipped event
	 *
	 * @return {function(): Promise}
	 */


	function getGamePlayButtonSkippedHandler() {
	  return function () {
	    return new Promise(function (resolve, reject) {
	      try {
	        if (!playButtonCallbacks) {
	          log$9.info("... skipping play button skipped event due to missing ad flow ...");
	          resolve();
	          return;
	        }

	        log$9.info("... trying to handle play button skipped event ...");

	        if (playButtonCallbacks.killAdDisplay) {
	          playButtonCallbacks.killAdDisplay('SkippingInGamePlayButton', true);
	          log$9.info("... sync sending kill done for play button skipped event ...");
	        } else {
	          log$9.notice("... could not send kill on play button skipped event ...");
	        }

	        resolve();
	      } catch (error) {
	        reject(error);
	      }
	    });
	  };
	}

	var adsPlayButtonInGame = {
	  init: init,
	  initAfterAdInit: initAfterAdInit
	};

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var log$a = getLog('AdTrigger');
	/**
	 * Hooks ad display trigger to sdk events
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var hookAdTrigger = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      var _EVENTS;

	      log$a.info('Connect ad triggers ...');

	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      var adsModule = chainState.getAdsModule();

	      var _chainState$getDepend = chainState.getDependencies(),
	          sdkConnector = _chainState$getDepend.sdkConnector,
	          messageBus = _chainState$getDepend.messageBus; //console.log('zzz: registering chain states');


	      var EVENTS = (_EVENTS = {}, _defineProperty(_EVENTS, SDK_EVENTS.PLAY_STOP, {
	        slot: adsModule.SLOTS.IN_GAME
	      }), _defineProperty(_EVENTS, SDK_EVENTS.REWARDED_AD, {
	        slot: adsModule.SLOTS.INCENTIVISE,
	        callbackWrapper: function callbackWrapper(callback) {
	          return function (error, result) {
	            try {
	              if (error) {
	                callback(false);
	                return;
	              }

	              var incentiviseDone = result.clicked || (result.watchedPercentage || result.watchedPercentage === 0 ? result.watchedPercentage >= 66 : result.eventName === adsModule.EVENT_NAMES.CLOSED_BY_TIMEOUT);
	              callback(incentiviseDone);
	            } catch (error) {
	              log$a.error("Failed to execute sdk event callback for \"".concat(SDK_EVENTS.REWARDED_AD, "\" event"), error);
	            }
	          };
	        }
	      }), _EVENTS);
	      Object.keys(EVENTS).forEach(function (sdkEventName) {
	        var eventConfig = EVENTS[sdkEventName];
	        hookAdTrigger$1(sdkEventName, eventConfig.slot, sdkConnector, adsModule, eventConfig.callbackWrapper);
	      }); // console.log('gd:p2-ads:','will register sdk events!');
	      // const eventNames = Object.keys(SDK_EVENTS).map(k=>SDK_EVENTS[k]);
	      // eventNames.push('levelStart','levelFinish','loading.completed');
	      // for(let eventName of eventNames){
	      //   console.log('gd:p2-ads:','registering sdk event!',eventName);
	      //   sdkConnector.on(eventName,(e1)=>{
	      //     console.log('gd:p2-ads:','sdk event',eventName,e1);
	      //   });
	      // }

	      messageBus.on('ads.trigger', function (_ref) {
	        var callerModule = _ref.callerModule,
	            slot = _ref.slot,
	            playButtonHandler = _ref.playButtonHandler,
	            callback = _ref.callback;
	        callerModule = callerModule || 'Unknown caller';
	        var log = getLog("AdCall-".concat(callerModule));

	        if (typeof callback !== 'function') {
	          callback = function callback(error, result) {
	            log.info('No callback defined', {
	              error: error,
	              result: result
	            });
	          };
	        }

	        try {
	          log.info('Start displaying ad', slot);
	          var options = {};

	          if (VALIDATORS.isFunction(playButtonHandler)) {
	            log.debug('Received play button handler');
	            log.debug('Did user just consent:' + (window.SGCookiePopup && window.SGCookiePopup.justConsented));

	            if (slot.name === 'preroll' && window && window.SGCookiePopup && window.SGCookiePopup.justConsented) {
	              log.debug('User just consented to cookies. Skip play button');
	            } else {
	              options = {
	                showPlayButton: playButtonHandler
	              };
	            }
	          }

	          adsModule.show(slot, options).then(function (result) {
	            log.info('... finished display ad', result);
	            callback(null, result);
	          }).catch(function (error) {
	            log.error('... failed to displaying ad', error);
	            callback(error);
	          });
	        } catch (error) {
	          log.error('... failed to start displaying ad', error);
	          callback(error);
	        }
	      });
	      log$a.info('... ad triggers connected');
	      resolve(chainState);
	    } catch (error) {
	      log$a.error('... failed to connect ad triggers', error);
	      resolve(chainState);
	    }
	  });
	});
	/**
	 * Connect an ad slot to an sdk event
	 * @param {string} sdkEventName
	 * @param {MediaCPMSlotConfig} slotConfiguration
	 * @param {SdkConnector} sdkConnector
	 * @param {AdModule} adsModule
	 * @param {function(function): function(Error, MediaCPMAdResult)} callbackWrapper
	 */

	function hookAdTrigger$1(sdkEventName, slotConfiguration, sdkConnector, adsModule, callbackWrapper) {
	  var slotName = 'unknown';

	  try {
	    slotName = slotConfiguration.name || slotName;
	    log$a.info("Hooking \"".concat(slotName, "\" ad display to sdk event \"").concat(sdkEventName, "\" ..."));
	    sdkConnector.on(sdkEventName, function (event) {
	      event = event || {};

	      var callback = function callback() {};

	      if (typeof event.callback === 'function' && callbackWrapper) {
	        callback = callbackWrapper(event.callback);
	      }

	      try {
	        log$a.info("Stating \"".concat(slotName, "\" ad display ..."));
	        adsModule.show(slotConfiguration).then(function (result) {
	          log$a.info("... finished displaying \"".concat(slotName, "\" ad"), result);
	          triggerScoreboardAd(sdkConnector, event);
	          callback(null, result);
	        }).catch(function (error) {
	          log$a.error("... failed to display \"".concat(slotName, "\" ad"), error);
	          triggerScoreboardAd(sdkConnector, event);
	          callback(error);
	        });
	      } catch (error) {
	        log$a.error("... failed to display \"".concat(slotName, "\" ad!"), error);
	        triggerScoreboardAd(sdkConnector, event);
	        callback(error);
	      }
	    });
	    log$a.info("... hooked \"".concat(slotName, "\" ad display to sdk event \"").concat(sdkEventName, "\""));
	  } catch (error) {
	    log$a.error("... failed to hook \"".concat(slotName, "\" ad display to sdk event \"").concat(sdkEventName, "\""), error);
	  }
	}

	function triggerScoreboardAd(sdkConnector, event) {
	  if (event.scoreboardAdContainerId) {
	    log$a.info('NOW LETS SHOW THAT SCOREBOARD AD!');
	    sdkConnector.trigger(SDK_EVENTS.SCOREBOARD_AD_DISPLAY, {
	      adContainerId: event.scoreboardAdContainerId
	    });
	  }
	}

	___$insertStyle("#timer-countdown-container {\n  position: fixed;\n  width: 150px;\n  background: #000;\n  bottom: 20px;\n  right: -172px;\n  -webkit-border-bottom-left-radius: 10px;\n  -moz-border-radius-bottomleft: 10px;\n  border-bottom-left-radius: 10px;\n  -webkit-border-top-left-radius: 10px;\n  -moz-border-radius-topleft: 10px;\n  border-top-left-radius: 10px;\n  color: white;\n  font-size: 12px;\n  padding: 10px;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  border: 1px solid white;\n  font-family: oswald, arial, sans-serif;\n}\n\n.move-in {\n  animation-iteration-count: 1;\n  -webkit-animation: move-in 1s forwards;\n  -moz-animation: move-in 1s forwards;\n  -o-animation: move-in 1s forwards;\n  animation: move-in 1s forwards;\n}\n\n.move-out {\n  animation-iteration-count: 1;\n  -webkit-animation: move-out 1s forwards;\n  -moz-animation: move-out 1s forwards;\n  -o-animation: move-out 1s forwards;\n  animation: move-out 1s forwards;\n}\n\n@keyframes move-in {\n  from {\n    right: -172px;\n  }\n  to {\n    right: -1px;\n  }\n}\n@keyframes move-out {\n  from {\n    right: -1px;\n  }\n  to {\n    right: -172px;\n  }\n}");

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 28.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$b = getLog('timer-triggered');
	var DEFAULT_OVERLAY_INTERVAL$2 = CONSTS.DEFAULT_OVERLAY_INTERVAL,
	    AD_STARTING_SOON_TIMER = CONSTS.AD_STARTING_SOON_TIMER;
	var GAMES_ALLOWED = {
	  'aeria': ['endless-bubbles-ja', 'bubble-shooter-hd-ja', 'best-classic-solitaire-ja'],
	  'affiliate__tapjoy': ['bubble-shooter-hd', '2020', '2020-connect', 'merge-thirteen', 'endless-bubbles', 'no-dots', '2020-connect-deluxe', 'sixagon', 'bubble-shooter-classic', 'little-farm-clicker', 'bubble-shooter-saga-2-endless', 'best-classic-mahjong-connect', 'galaxy-bubbles-hd', 'bubble-shooter-ufo', 'candy-rain-4', 'butterfly-kyodai-hd', '2020-connect-lite', 'bubble-shooter-fever', 'merge-ten'],
	  'nifty': ['2020-blocks', 'best-classic-freecell-solitaire', 'best-classic-solitaire', 'best-classic-solitaire-ja', 'best-classic-spider-solitaire', 'bubble-shooter-hd', 'bubble-shooter-hd-ja', 'bubble-shooter-saga-2-endless', 'butterfly-kyodai-hd', 'butterfly-kyodai-hd-ja', 'merge-ten-ja']
	}; // Please keep games list ordered by slug

	var GAMES_ALL_PUBLISHERS_EXCEPT = {
	  '2020': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  '2020-blocks': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, /^spilgames-.*/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  '2020-connect': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  '2020-connect-ja': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  '2020-plus': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-candy': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'spilgames', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-classic-HD': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-hd': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-pro': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-free': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-world-cup': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'bubble-shooter-world-cup-ja': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'butterfly-kyodai-hd': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'spilgames', /^spilgames-.*/, /^casual[0-9]+$/, 't-online.de', 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'butterfly-kyodai-hd-ja': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'spilgames', /^spilgames-.*/, /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'daily-solitaire-2020': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'endless-bubbles': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'endless-bubbles-ja': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'merge-ten': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'merge-thirteen': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'rtl-daily-solitaire-classic': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  },
	  'solitaire-mahjong': {
	    timer: 150000,
	    forbiddenPublishers: ['aeria', 'ameba', 'ameba-sbx', /^casual[0-9]+$/, 'tiktok', 'zygomatic', 'test_test007', 'hyuna', 'gakk-media', 'mobiground', 'online2.ecapserver.com', 'twistbox', 'twistbox2', 'twistbox3', 'twistbox4', 'm.html5games2.renxo.com', 'm.html5games.renxo.com', 'www.jojoxxl.com', 'cn2i']
	  }
	};
	/**
	 * Prepare time triggered ads if needed
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var adTimerTriggered = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      log$b.info('Init ...');
	      var adConfiguration = chainState.getAdConfiguration();
	      var publisher = adConfiguration.publisher,
	          game = adConfiguration.game;

	      if (!hasTTA(publisher, game)) {
	        log$b.info('... disabled', {
	          publisher: publisher,
	          game: game
	        });
	        resolve(chainState);
	        return;
	      }

	      log$b.info('... enabled ...', {
	        publisher: publisher,
	        game: game
	      });
	      var adsModule = chainState.getAdsModule();
	      var overlayInterval = getOverlayInterval$1(adConfiguration, game);

	      var _chainState$getDepend = chainState.getDependencies(),
	          sdkConnector = _chainState$getDepend.sdkConnector,
	          jQuery = _chainState$getDepend.jQuery;

	      var adTrigger = function adTrigger() {};

	      var interval = null;

	      var startHandler = function startHandler() {
	        log$b.info('Starting timer ...');

	        try {
	          if (!interval) {
	            interval = setInterval(adTrigger, 1000);
	            log$b.info('... timer started');
	          } else {
	            log$b.info('... timer was already running');
	          }
	        } catch (error) {
	          log$b.error('... failed to start timer', error);
	        }
	      };

	      var finishHandler = function finishHandler() {
	        try {
	          log$b.info('Stop timer ...');

	          if (interval) {
	            clearInterval(interval);
	            interval = null;
	            log$b.info('... timer stopped');
	          } else {
	            log$b.info('... timer was already stopped');
	          }
	        } catch (error) {
	          log$b.error('... failed to stop timer', error);
	        }
	      };

	      adTrigger = getTimerControlledAdTrigger(adsModule, overlayInterval, startHandler, finishHandler, jQuery);
	      sdkConnector.on(SDK_EVENTS.PLAY_START, startHandler);
	      sdkConnector.on(SDK_EVENTS.PLAY_STOP, finishHandler);
	      resolve(chainState);
	    } catch (error) {
	      log$b.warn('... failed to init', error);
	      resolve(chainState);
	    }
	  });
	});
	/**
	 * Returns true if for the given publisher game combination time triggered ads should be activated
	 * @param {string} publisherName
	 * @param {string} gameSlug
	 * @return {boolean}
	 */

	function hasTTA(publisherName, gameSlug) {
	  if (GAMES_ALL_PUBLISHERS_EXCEPT[gameSlug]) {
	    var forbiddenPublishers = GAMES_ALL_PUBLISHERS_EXCEPT[gameSlug].forbiddenPublishers || [];
	    return !isForbiddenPublisher(publisherName, forbiddenPublishers);
	  }

	  if (GAMES_ALLOWED[publisherName]) {
	    return GAMES_ALLOWED[publisherName].indexOf(gameSlug) !== -1;
	  }

	  return false;
	}
	/**
	 * Returns true if the given publisherName is in the forbiddenPublishers list
	 * @param {string} publisherName
	 * @param {Array<string | RegExp>} forbiddenPublishers
	 * @return {boolean}
	 */


	function isForbiddenPublisher(publisherName, forbiddenPublishers) {
	  return forbiddenPublishers.filter(function (pName) {
	    return pName instanceof RegExp ? pName.test(publisherName) : pName === publisherName;
	  }).length !== 0;
	}
	/**
	 * Returns the overlay interval
	 * @param {AdConfiguration} adConfiguration
	 * @param {string} gameSlug
	 * @return {number}
	 */


	function getOverlayInterval$1(adConfiguration, gameSlug) {
	  var gameConfig = GAMES_ALL_PUBLISHERS_EXCEPT[gameSlug] || {}; // [RS] This will just effect the triggering of the ad, if the configured displayBannerInterval is higher,
	  // [RS] than the ad might be canceled due to the displayBannerInterval in the normal-ads.js

	  return gameConfig.timer || adConfiguration.displayBannerInterval || DEFAULT_OVERLAY_INTERVAL$2;
	}
	/**
	 * Give a function that should be executed by timer
	 * @param {AdModule} adsModule
	 * @param {number} overlayInterval
	 * @param {function} startHandler
	 * @param {function} finishHandler
	 * @param {Object} jQuery
	 * @return {function()}
	 */


	function getTimerControlledAdTrigger(adsModule, overlayInterval, startHandler, finishHandler, jQuery) {
	  var lastDisplayed = Date.now();
	  var displaying = false;
	  return function () {
	    if (displaying) {
	      return;
	    }

	    var now = Date.now();
	    var secondsToAd = Math.ceil((lastDisplayed - (now - overlayInterval)) / 1000);

	    if (secondsToAd <= AD_STARTING_SOON_TIMER / 1000 && secondsToAd > 0) {
	      log$b.info('Ad starting soon: ', secondsToAd);
	      showTimerCountdown(jQuery, secondsToAd);
	    }

	    if (lastDisplayed > now - overlayInterval) {
	      return;
	    }

	    hideTimerCountdown(jQuery);
	    finishHandler();
	    displaying = true;
	    adsModule.show(adsModule.SLOTS.IN_GAME_TIMER_TRIGGERED, function () {
	      lastDisplayed = Date.now();
	      displaying = false;
	      startHandler();
	    });
	  };
	}

	function showTimerCountdown(jQuery, secondsToAd) {
	  var countdownContainer = jQuery('#timer-countdown-container');

	  if (!countdownContainer.length) {
	    countdownContainer = createTimerCountdown(jQuery, secondsToAd);
	  }

	  var timer = jQuery('.timer-countdown-timer');
	  timer.text(secondsToAd);

	  if (countdownContainer.hasClass('move-in')) {
	    return;
	  }

	  countdownContainer.removeClass('move-out').addClass('move-in');
	  jQuery('body').append(countdownContainer);
	}

	function createTimerCountdown(jQuery, secondsToAd) {
	  var countdownContainer = jQuery('<div>').attr('id', 'timer-countdown-container');
	  var text = jQuery('<div>').addClass('timer-countdown-text').text('Advertisement starting in: ');
	  var timer = jQuery('<span>').addClass('timer-countdown-timer').text(secondsToAd);
	  text.append(timer);
	  countdownContainer.append(text);
	  return countdownContainer;
	}

	function hideTimerCountdown(jQuery) {
	  var countdownContainer = jQuery('#timer-countdown-container');

	  if (!countdownContainer.length) {
	    return;
	  }

	  countdownContainer.removeClass('move-in').addClass('move-out');
	}

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */

	/**
	 * Events fired by the SG-SDK
	 * @readonly
	 * @enum {string}
	 * @name MEDIA_CPM_EVENTS
	 */
	var MEDIA_CPM_EVENTS = {
	  STARTING: 'mediaCpm.ad.starting',
	  STARTED: 'mediaCpm.ad.started',
	  DISPLAYED: 'mediaCpm.ad.displayed',
	  CLICKED: 'mediaCpm.ad.clicked',
	  CLOSED: 'mediaCpm.ad.closed',
	  ERROR: 'mediaCpm.ad.error'
	};

	/**
	 * Created by Kenneth Pirman <kenny.pirman@softgames.de> on 03.08.17.
	 * Copyright © Softgames 2017
	 */
	var log$c = getLog('MediaCpmEventMapping');
	/**
	 * Hooks ad display trigger to sdk events
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var mediaCpmEventMapping = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      log$c.info('Connect mediaCpm events ...');

	      var _chainState$getDepend = chainState.getDependencies(),
	          messageBus = _chainState$getDepend.messageBus;

	      Object.keys(MEDIA_CPM_EVENTS).forEach(function (eventKey) {
	        var sourceEvent = MEDIA_CPM_EVENTS[eventKey];
	        var targetEvent = sourceEvent.replace('mediaCpm.', 'ads.');
	        messageBus.on(sourceEvent, function (event) {
	          log$c.debug("Received event \"".concat(sourceEvent, "\""), event);
	          messageBus.fire(targetEvent, event);
	        });
	      });
	      log$c.info('... mediaCpm events connected');
	      resolve(chainState);
	    } catch (error) {
	      log$c.error('... failed to connect mediaCpm events', error);
	      resolve(chainState);
	    }
	  });
	});

	var _SDK_TO_MB_EVENTS;
	var log$d = getLog('eventMapper');
	var MAPPINGS = {
	  MB_TO_SDK_EVENTS: {
	    'adFlowStarted': null,
	    'adStarted': null,
	    'adSkipped': null,
	    'adFlowDone': null,
	    'adFinished': null,
	    'adShown': null,
	    'closeAd': null,
	    'voyagerAdCall': null,
	    'voyagerAdFinished': null,
	    'displayNativeAd': null,
	    'pause-game': SDK_EVENTS.PAUSE_GAME,
	    'unpause-game': SDK_EVENTS.UNPAUSE_GAME
	  },
	  SDK_TO_MB_EVENTS: (_SDK_TO_MB_EVENTS = {}, _defineProperty(_SDK_TO_MB_EVENTS, SDK_EVENTS.BEFORE_PLAY_BUTTON_DISPLAY, null), _defineProperty(_SDK_TO_MB_EVENTS, SDK_EVENTS.PLAY_BUTTON_PRESSED, null), _defineProperty(_SDK_TO_MB_EVENTS, SDK_EVENTS.PLAY_START, null), _defineProperty(_SDK_TO_MB_EVENTS, SDK_EVENTS.PLAY_STOP, null), _defineProperty(_SDK_TO_MB_EVENTS, SDK_EVENTS.REWARDED_AD, null), _SDK_TO_MB_EVENTS)
	};
	/**
	 * Maps events between messageBus and sdk
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var adEventMapper = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      var _chainState$getDepend = chainState.getDependencies(),
	          messageBus = _chainState$getDepend.messageBus,
	          sdkConnector = _chainState$getDepend.sdkConnector;

	      Object.keys(MAPPINGS.MB_TO_SDK_EVENTS).forEach(function (messageBusEventName) {
	        var sdkEventName = MAPPINGS.MB_TO_SDK_EVENTS[messageBusEventName];
	        messageBus.on(messageBusEventName, getEventLogger(messageBusEventName, 'messageBus'), 'adEventMapper', 'adEventLogger');

	        if (sdkEventName) {
	          messageBus.on(messageBusEventName, function () {
	            sdkConnector.trigger(sdkEventName);
	          }, 'adEventMapper', 'sdkEventTrigger');
	        }
	      });
	      Object.keys(MAPPINGS.SDK_TO_MB_EVENTS).forEach(function (sdkEventName) {
	        var messageBusEventName = MAPPINGS.SDK_TO_MB_EVENTS[sdkEventName];
	        sdkConnector.on(sdkEventName, getEventLogger(sdkEventName, 'sdkConnector'));

	        if (messageBusEventName) {
	          sdkConnector.on(sdkEventName, function () {
	            messageBus.fire(messageBusEventName);
	          });
	        }
	      });
	      resolve(chainState);
	    } catch (error) {
	      log$d.error('Failed to hook events to messageBus and or sdkConnector', error);
	      resolve(chainState);
	    }
	  });
	});
	/**
	 * Logs the given event
	 * @param {string} eventName
	 * @param {string} source
	 * @return {function(*=)}
	 */

	function getEventLogger(eventName, source) {
	  return function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    log$d.info.apply(log$d, ["Received event \"".concat(eventName, "\" from \"").concat(source, "\"")].concat(args));
	  };
	}

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */
	var log$e = getLog('Mock');
	/**
	 * Hooks mocked ad display trigger
	 * @param {ChainState} chainState
	 * @return {Promise.<ChainState>}
	 */

	var mocks = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      log$e.info('Connect mocks if needed ...');

	      if (!chainState.skipLoadingChain()) {
	        log$e.info('... not needed');
	        resolve(chainState);
	        return;
	      }

	      var _chainState$getDepend = chainState.getDependencies(),
	          messageBus = _chainState$getDepend.messageBus;

	      messageBus.on('ads.trigger', function (_ref) {
	        var callerModule = _ref.callerModule,
	            callback = _ref.callback;
	        callerModule = callerModule || 'Unknown caller';
	        var log = getLog("AdCall-".concat(callerModule));

	        if (typeof callback !== 'function') {
	          callback = function callback(error, result) {
	            log.info('No callback defined', {
	              error: error,
	              result: result
	            });
	          };
	        }

	        try {
	          log.info('Ads disable fallback');
	          callback(null, {
	            displayed: false,
	            eventName: null,
	            clicked: false,
	            skipped: true,
	            skipReason: 'Skipping ad due to skipAds configuration',
	            blocked: false,
	            watchedPercentage: null
	          });
	        } catch (error) {
	          log.error('... failed to execute callback', error);
	        }
	      });
	      log$e.info('... mocked ad trigger connected');
	      resolve(chainState);
	    } catch (error) {
	      log$e.error('... failed to connect mocked ad trigger', error);
	      resolve(chainState);
	    }
	  });
	});

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	var log$f = getLog('Script Loader');
	var AD_SCRIPTS_TO_ADD = config.AD_SCRIPTS_TO_ADD;
	var scriptLoader = (function (chainState) {
	  return new Promise(function (resolve, reject) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      if (!AD_SCRIPTS_TO_ADD) {
	        log$f.info('No ad scripts to add');
	        resolve(chainState);
	        return;
	      }

	      var _chainState$getDepend = chainState.getDependencies(),
	          jQuery = _chainState$getDepend.jQuery,
	          environment = _chainState$getDepend.environment;

	      var $head = jQuery('head');
	      AD_SCRIPTS_TO_ADD.map(function (adScriptData) {
	        var isPartnerEnabled = !adScriptData.disabledPartners || adScriptData.disabledPartners.indexOf(environment.publisherId) === -1;
	        console.log("gd:sg-extra-ads: check extra ads for publisher: ".concat(environment.publisherId, ", disabled: ").concat(!isPartnerEnabled));

	        if (isPartnerEnabled) {
	          var $script = jQuery('<script type="text/javascript"></script>');
	          Object.entries(adScriptData).map(function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2),
	                attr = _ref2[0],
	                value = _ref2[1];

	            if (attr === 'src') {
	              console.log('gd:sg-extra-ads loading...', value);
	            }

	            $script.attr(attr, value);
	          });
	          $head.append($script);
	        }
	      });
	      resolve(chainState);
	    } catch (error) {
	      resolve(chainState); // don't break the ad module loading just because these scripts weren't added. thats why we resolve instead of reject
	    }
	  });
	});

	var log$g = getLog('scoreboard-ad');
	var scoreboardAd = (function (chainState) {
	  return new Promise(function (resolve) {
	    try {
	      if (chainState.skipLoadingChain()) {
	        resolve(chainState);
	        return;
	      }

	      log$g.info('Init ...');
	      var adsModule = chainState.getAdsModule();

	      var _chainState$getDepend = chainState.getDependencies(),
	          sdkConnector = _chainState$getDepend.sdkConnector,
	          jQuery = _chainState$getDepend.jQuery;

	      var adRef = null;

	      var adDisplayHandler =
	      /*#__PURE__*/
	      function () {
	        var _ref2 = _asyncToGenerator(
	        /*#__PURE__*/
	        regenerator.mark(function _callee(_ref) {
	          var adContainerId, adContainer;
	          return regenerator.wrap(function _callee$(_context) {
	            while (1) {
	              switch (_context.prev = _context.next) {
	                case 0:
	                  adContainerId = _ref.adContainerId;
	                  _context.prev = 1;

	                  if (!adRef) {
	                    _context.next = 5;
	                    break;
	                  }

	                  log$g.warn('Already showing scoreboard ad! or display called without cleaning up previous ad');
	                  return _context.abrupt("return");

	                case 5:
	                  log$g.info('Ad Display Triggered! ', adContainerId);
	                  adContainer = jQuery("#".concat(adContainerId));
	                  adContainer.css({
	                    'pointer-events': 'auto'
	                  });
	                  _context.next = 10;
	                  return adsModule.show(adsModule.SLOTS.SCOREBOARD, {
	                    adContainerId: adContainerId,
	                    earlyCallback: true
	                  }, function (error, resp) {
	                    if (error) {
	                      log$g.warn('Error in show: ', error);
	                      sdkConnector.trigger(SDK_EVENTS.SCOREBOARD_AD_FAILED);
	                      adContainer.css({
	                        'pointer-events': 'none'
	                      });
	                      return;
	                    }

	                    if (resp.earlyCallback && resp.adRef) {
	                      adRef = resp.adRef;
	                      log$g.info('Got ad reference, saving so we can close later', adRef);
	                    }
	                  });

	                case 10:
	                  _context.next = 15;
	                  break;

	                case 12:
	                  _context.prev = 12;
	                  _context.t0 = _context["catch"](1);
	                  log$g.error('Error in scoreboard ad handler: ', _context.t0);

	                case 15:
	                case "end":
	                  return _context.stop();
	              }
	            }
	          }, _callee, this, [[1, 12]]);
	        }));

	        return function adDisplayHandler(_x) {
	          return _ref2.apply(this, arguments);
	        };
	      }();

	      var adCleanupHandler = function adCleanupHandler(_ref3) {
	        var adContainerId = _ref3.adContainerId;
	        log$g.info('Ad Cleanup Triggered! ', adContainerId);
	        log$g.info('Ad ref before cleanup ', adRef);

	        if (adRef && typeof adRef.kill === 'function') {
	          adRef.kill('Ad Cleanup triggered from sdk');
	          adRef = null;
	        }

	        var adContainer = jQuery("#".concat(adContainerId));

	        if (adContainer.length) {
	          adContainer.css({
	            'pointer-events': 'none'
	          });
	          adContainer.empty();
	        }
	      };

	      sdkConnector.on(SDK_EVENTS.SCOREBOARD_AD_DISPLAY, adDisplayHandler);
	      sdkConnector.on(SDK_EVENTS.SCOREBOARD_AD_CLEANUP, adCleanupHandler);
	      resolve(chainState);
	    } catch (error) {
	      log$g.warn('... failed to init', error);
	      resolve(chainState);
	    }
	  });
	});

	/**
	 * Created by René Simon <rene.simon@softgames.de> on 17.10.17.
	 * Copyright © Softgames 2017
	 */
	var startChain = [dependenciesValidator.validate, scriptLoader, adsPlayButtonInGame.init, adConfigHandler, adBlockerDetector, mocks, adUser, mediaCPM, adsModule, adEventMapper, adsPlayButtonInGame.initAfterAdInit, mediaCpmEventMapping, hookAdTrigger, adTimerTriggered, scoreboardAd];

	var log$h = getLog('index');
	/**
	 * Initializing the ad module client
	 * @param {Dependencies} dependencies
	 * @return {Promise}
	 */

	function init$1(dependencies) {
	  console.log('zzz:init dependencies', dependencies);
	  return new Promise(function (resolve, reject) {
	    log$h.info('Initializing ...');
	    console.log('GD: testing deployment');

	    if (!dependencies) {
	      reject(new Error('No dependencies given on init of this module'));
	      return;
	    }

	    log$h.info(' ... initialized');
	    resolve({
	      start: function start() {
	        return new Promise(
	        /*#__PURE__*/
	        function () {
	          var _ref = _asyncToGenerator(
	          /*#__PURE__*/
	          regenerator.mark(function _callee(resolve, reject) {
	            return regenerator.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.prev = 0;
	                    return _context.abrupt("return", initSequencer(dependencies, startChain).then(function (chainState) {
	                      log$h.info('Starting ...');

	                      var _chainState$getDepend = chainState.getDependencies(),
	                          messageBus = _chainState$getDepend.messageBus;

	                      var adsModule = chainState.getAdsModule();
	                      messageBus.fire('ads.module.started', {
	                        slots: adsModule.SLOTS
	                      }, true);
	                      log$h.info('... started');
	                      resolve();
	                    }).catch(function (e) {
	                      reject(e);
	                    }));

	                  case 4:
	                    _context.prev = 4;
	                    _context.t0 = _context["catch"](0);
	                    reject(_context.t0);

	                  case 7:
	                  case "end":
	                    return _context.stop();
	                }
	              }
	            }, _callee, this, [[0, 4]]);
	          }));

	          return function (_x, _x2) {
	            return _ref.apply(this, arguments);
	          };
	        }());
	      }
	    });
	  });
	}

	window_1['ads-module'] = {
	  init: init$1
	};

	return init$1;

}());
