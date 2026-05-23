/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/immer/dist/immer.mjs":
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictIteration: () => (/* binding */ setUseStrictIteration),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  // removed by dead control flow

}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null || proto === Object.prototype)
    return true;
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  if (typeof Ctor !== "function")
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0 /* Object */) {
    const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    Object.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  Object.freeze(obj);
  if (deep)
    Object.values(obj).forEach((value) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
var dontMutateMethodOverride = {
  value: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || typeof obj !== "object")
    return true;
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
      useStrictIteration
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(
        rootScope,
        state,
        result,
        key,
        childValue,
        path,
        isSet2
      ),
      useStrictIteration
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue == null) {
    return;
  }
  if (typeof childValue !== "object" && !targetIsSet) {
    return;
  }
  const childIsFrozen = isFrozen(childValue);
  if (childIsFrozen && !targetIsSet) {
    return;
  }
  if ( true && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !childIsFrozen) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = true;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (typeof config?.useStrictIteration === "boolean")
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    strict = state.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(
  immer
);
var setUseStrictIteration = /* @__PURE__ */ immer.setUseStrictIteration.bind(
  immer
);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/ClipBoard.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/ClipBoard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClipBoard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClipBoard.scss */ "./src/blocks/team-section/Components/Backend/ClipBoard.scss");



const ClipBoard = ({
  shortCode
}) => {
  const tooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleCopy = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (inputRef.current) {
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, 99999);
    }
    const feedback = () => {
      setCopied(true);
      if (tooltip.current) {
        tooltip.current.innerHTML = "Copied Successfully!";
        tooltip.current.classList.add("copied");
      }
      setTimeout(() => {
        setCopied(false);
        if (tooltip.current) {
          tooltip.current.innerHTML = "Copy To Clipboard";
          tooltip.current.classList.remove("copied");
        }
      }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shortCode).then(() => {
        feedback();
      }).catch(err => {
        console.error("Clipboard API failed, trying fallback", err);
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
    function fallbackCopy() {
      try {
        document.execCommand("copy");
        feedback();
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCode"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInputWrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    ref: tooltip,
    className: "tooltip"
  }, "Copy To Clipboard"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInput"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputRef,
    readOnly: true,
    value: shortCode,
    onClick: handleCopy
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeCopyBtn",
    onClick: handleCopy
  }, copied ? "✓" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeHeader"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Copy the shortcode and use it anywhere."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipBoard);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/ClipBoard.scss":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/ClipBoard.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Edit.js":
/*!************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Edit.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/team-section/Components/Backend/Settings/Settings.js");
/* harmony import */ var _Common_Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/Style */ "./src/blocks/team-section/Components/Common/Style.js");
/* harmony import */ var _Common_themes_Theme5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Common/themes/Theme5 */ "./src/blocks/team-section/Components/Common/themes/Theme5.js");
/* harmony import */ var _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./themes/editorRichText */ "./src/blocks/team-section/Components/Backend/themes/editorRichText.js");
/* harmony import */ var _Common_themes_Theme6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Common/themes/Theme6 */ "./src/blocks/team-section/Components/Common/themes/Theme6.js");
/* harmony import */ var _Common_themes_Theme7__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Common/themes/Theme7 */ "./src/blocks/team-section/Components/Common/themes/Theme7.js");
/* harmony import */ var _Common_themes_Theme8__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Common/themes/Theme8 */ "./src/blocks/team-section/Components/Common/themes/Theme8.js");
/* harmony import */ var _Common_themes_Theme9__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Common/themes/Theme9 */ "./src/blocks/team-section/Components/Common/themes/Theme9.js");
/* harmony import */ var _Common_themes_Theme10__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Common/themes/Theme10 */ "./src/blocks/team-section/Components/Common/themes/Theme10.js");
/* harmony import */ var _Common_themes_Theme11__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Common/themes/Theme11 */ "./src/blocks/team-section/Components/Common/themes/Theme11.js");
/* harmony import */ var _ClipBoard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ClipBoard */ "./src/blocks/team-section/Components/Backend/ClipBoard.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





















const Edit = props => {
  var _tsmbpipecheck;
  const {
    attributes,
    setAttributes,
    clientId,
    isSelected,
    currentPostId,
    CPTType
  } = props;
  const {
    members = [],
    columns,
    layout,
    isTitle,
    isSep,
    isBio,
    isSocial,
    theme
  } = attributes;
  const {
    desktop,
    tablet,
    mobile
  } = columns || {};
  const isPremium = Boolean((_tsmbpipecheck = tsmbpipecheck) !== null && _tsmbpipecheck !== void 0 ? _tsmbpipecheck : false);
  const [isProModalOpen, setIsProModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const premiumProps = {
    isPremium,
    setIsProModalOpen
  };
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedSocial, setSelectedSocial] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setActiveIndex(!isSelected || !members.length ? null : 0);
  }, [isSelected]); // Set default activeIndex
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !isSelected && setSelectedSocial(null);
  }, [isSelected]); // Selected Social

  const updateMember = (index, type, val, childIndex = false, childType = false) => {
    const newMembers = (0,immer__WEBPACK_IMPORTED_MODULE_6__.produce)(members, draft => {
      if (false !== childIndex && childType) {
        draft[index][type][childIndex][childType] = val;
      } else {
        draft[index][type] = val;
      }
    });
    setAttributes({
      members: newMembers
    });
    setActiveIndex(index);
  };
  const id = `tsbTeamMembers-${clientId}`;
  const shortcode = `[tsb id=${currentPostId}]`;
  const themeSwitch = theme => {
    if ("theme5" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme5__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme6" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme6__WEBPACK_IMPORTED_MODULE_12__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme7" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme7__WEBPACK_IMPORTED_MODULE_13__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme8" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme8__WEBPACK_IMPORTED_MODULE_14__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme9" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme9__WEBPACK_IMPORTED_MODULE_15__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme10" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme10__WEBPACK_IMPORTED_MODULE_16__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
    if ("theme11" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_themes_Theme11__WEBPACK_IMPORTED_MODULE_17__["default"], {
      attributes: attributes,
      ReusableRichText: _themes_editorRichText__WEBPACK_IMPORTED_MODULE_11__.ReusableRichText,
      setAttributes: setAttributes
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    updateMember: updateMember,
    activeIndex: activeIndex,
    setActiveIndex: setActiveIndex,
    isProModalOpen: isProModalOpen,
    setIsProModalOpen: setIsProModalOpen,
    isPremium: isPremium,
    premiumProps: premiumProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, CPTType === "tsb" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ClipBoard__WEBPACK_IMPORTED_MODULE_18__["default"], {
    shortCode: shortcode
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
    id: id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    id: id
  }), ["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tsbTeamMembers ${layout || "vertical"} columns-${desktop} columns-tablet-${tablet} columns-mobile-${mobile}`
  }, members.map((item, index) => {
    const {
      photo,
      name,
      title,
      bio,
      social = []
    } = item;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      onClick: () => setActiveIndex(index),
      className: `tsbMember ${index === activeIndex ? "bPlNowEditing" : ""}`,
      id: `tsbMember-${index}`
    }, photo?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "memberPhoto",
      src: photo?.url,
      alt: photo?.alt
    }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(photo?.url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Member Photo:", "team-section"),
      value: photo,
      onChange: val => updateMember(index, "photo", val)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "memberDetails"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: "memberName",
      tagName: "h4",
      value: name,
      onChange: val => updateMember(index, "name", val),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member name", "team-section"),
      inlineToolbar: true
    }), isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: "memberTitle",
      tagName: "p",
      value: title,
      onChange: val => updateMember(index, "title", val),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member designation/title", "team-section"),
      inlineToolbar: true
    }), isSep && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "memberSeparator"
    }), isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: "memberBio",
      tagName: "p",
      value: bio,
      onChange: val => updateMember(index, "bio", val),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Biography of the member", "team-section"),
      inlineToolbar: true
    }), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "memberSocial"
    }, social?.map((socialItem, socialIndex) => {
      const {
        icon
      } = socialItem;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: socialIndex,
        onClick: () => setSelectedSocial(socialIndex),
        className: `icon icon-${index}-${socialIndex} ${isSelected && index === activeIndex && socialIndex === selectedSocial ? "isSelected" : null}`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: icon?.class
      })));
    })), null !== selectedSocial && index === activeIndex && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "socialAction memberSocialForm"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "mb5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalInputControl, {
      value: social[selectedSocial]?.link || "",
      onChange: val => {
        const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(val);
        updateMember(index, "social", safeUrl || "", selectedSocial, "link");
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      value: social[selectedSocial]?.icon,
      onChange: val => updateMember(index, "social", val, selectedSocial, "icon"),
      defaults: {
        class: "fab fa-facebook-f",
        fontSize: 22
      },
      isSize: false,
      isColor: false
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "memberSocialRemove mt15",
      onClick: e => {
        e.preventDefault();
        updateMember(index, "social", [...social.slice(0, selectedSocial), ...social.slice(selectedSocial + 1)]);
        setSelectedSocial(null);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa fa-times"
    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove this link", "team-section"))), isSelected && isSocial && index === activeIndex && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "socialAction memberSocialAdd mt20"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      showTooltip: true,
      tooltipPosition: "top enter",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Social Link", "team-section"),
      onClick: () => {
        updateMember(index, "social", [...social, {
          link: "#",
          icon: {
            class: "fab fa-facebook-f"
          }
        }]);
        setSelectedSocial(social.length);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa fa-plus"
    }), " Add new social"))));
  })), themeSwitch(theme), !members.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "addMemberFirst"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Please add a member first!", "team-section"))));
};
// export default Edit;`
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const currentPostId = select("core/editor").getCurrentPostId();
  const CPTType = select("core/editor").getCurrentPostType?.();
  return {
    currentPostId,
    CPTType
  };
})(Edit));

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/General/General.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/General/General.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/options */ "./src/blocks/team-section/utils/options.js");
/* harmony import */ var _Theme_Settings_theme5ProfileSetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Theme Settings/theme5ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme5ProfileSetting.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Theme_Settings_theme6ProfileSetting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Theme Settings/theme6ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme6ProfileSetting.js");
/* harmony import */ var _Theme_Settings_theme7ProfileSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Theme Settings/theme7ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme7ProfileSetting.js");
/* harmony import */ var _Theme_Settings_theme8ProfileSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Theme Settings/theme8ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme8ProfileSetting.js");
/* harmony import */ var _Theme_Settings_theme9ProfileSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Theme Settings/theme9ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme9ProfileSetting.js");
/* harmony import */ var _Theme_Settings_theme10ProfileSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Theme Settings/theme10ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme10ProfileSetting.js");
/* harmony import */ var _Theme_Settings_theme11ProfileSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Theme Settings/theme11ProfileSetting */ "./src/blocks/team-section/Components/Backend/Theme Settings/theme11ProfileSetting.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/team-section/utils/functions.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




















const General = ({
  attributes,
  setAttributes,
  updateMember,
  activeIndex,
  setActiveIndex,
  device,
  premiumProps
}) => {
  const {
    members = [],
    columns,
    columnGap,
    rowGap,
    layout,
    theme,
    isLinkNewTab,
    padding,
    nameTypo,
    isTitle,
    titleTypo,
    isSep,
    isBio,
    isSocial,
    options = {}
  } = attributes;
  const {
    showUserName = true,
    hoverOnScale = true,
    isShowWaterMark = true,
    isShowShape = true,
    waterMark = "TEAM",
    isShowIcon = true
  } = options || {};
  const handleClick = value => {
    setAttributes((0,_utils_functions__WEBPACK_IMPORTED_MODULE_13__.themeSwitch)(value, attributes));
  };
  const newMember = {
    background: {
      color: "#0000"
    },
    border: {
      radius: "3px"
    },
    shadow: [],
    photo: {
      id: null,
      url: "",
      alt: "",
      title: ""
    },
    photoBorder: {
      radius: "50%"
    },
    name: "John Smith",
    nameColor: "#333",
    title: "Manager",
    titleColor: "#333",
    separator: {
      width: "20%",
      height: "3px",
      style: "solid",
      color: "#777"
    },
    bio: "I am a self-motivated and self-taught professional who likes to solve problems.",
    bioColor: "#333",
    userName: "@mariemosley",
    social: [{
      link: "#",
      icon: {
        class: "fab fa-facebook-f",
        fontSize: 22,
        color: "#fff"
      }
    }, {
      link: "#",
      icon: {
        class: "fab fa-twitter",
        fontSize: 22,
        color: "#fff"
      }
    }, {
      link: "#",
      icon: {
        class: "fab fa-linkedin-in",
        fontSize: 22,
        color: "#fff"
      }
    }],
    socialIconColors: {
      color: "#fff",
      bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  };
  const updateAllMembers = params => {
    const newMembers = (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(members, draft => {
      draft.map((_, index) => {
        for (const param of params) {
          const type = param[0];
          const value = param[1];
          draft[index][type] = value;
        }
      });
    });
    setAttributes({
      members: newMembers
    });
  };
  const addMember = () => {
    const {
      background = {
        color: "#0000"
      },
      border = {
        radius: "3px"
      },
      shadow = {},
      photoBorder = {
        radius: "50%"
      },
      nameColor = "#333",
      titleColor = "#333",
      separator = {
        width: "20%",
        height: "3px",
        style: "solid",
        color: "#777"
      },
      bioColor = "#333",
      socialIconColors = {
        color: "#fff",
        bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }
    } = members[0] || {};
    setAttributes({
      members: [...members, {
        paddingTop: "0px",
        background,
        border,
        shadow,
        photo: {
          id: null,
          url: "",
          alt: "",
          title: ""
        },
        photoBorder,
        name: "John Smith",
        nameColor,
        title: "Manager",
        titleColor,
        separator,
        bio: "I am a self-motivated and self-taught professional who likes to solve problems.",
        bioColor,
        social: [{
          link: "#",
          icon: {
            class: "fab fa-facebook-f",
            fontSize: 22,
            color: "#fff"
          }
        }, {
          link: "#",
          icon: {
            class: "fab fa-twitter",
            fontSize: 22,
            color: "#fff"
          }
        }, {
          link: "#",
          icon: {
            class: "fab fa-linkedin-in",
            fontSize: 22,
            color: "#fff"
          }
        }],
        socialIconColors
      }]
    });
    setActiveIndex(members.length);
  };
  const duplicateMember = e => {
    e.preventDefault();
    setAttributes({
      members: [...members.slice(0, activeIndex), {
        ...members[activeIndex]
      }, ...members.slice(activeIndex)]
    });
    setActiveIndex(activeIndex + 1);
  };
  const removeMember = e => {
    e.preventDefault();
    setAttributes({
      members: [...members.slice(0, activeIndex), ...members.slice(activeIndex + 1)]
    });
    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };
  const {
    background = {},
    border = {},
    shadow = [],
    photo,
    photoBorder = {},
    nameColor = "",
    titleColor = "",
    separator = {},
    bioColor = "",
    socialIconColors = {}
  } = members[activeIndex] || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, null !== activeIndex && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "bplItemTitle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Member ${activeIndex + 1}:`, "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background:", "team-section"),
    value: background,
    onChange: val => updateMember(activeIndex, "background", val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border:", "team-section"),
    value: border,
    onChange: val => updateMember(activeIndex, "border", val),
    defaults: {
      radius: "3px"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shadow:", "team-section"),
    value: shadow?.shadow || shadow,
    onChange: val => updateMember(activeIndex, "shadow", val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: photo,
    onChange: val => updateMember(activeIndex, "photo", val),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Image URL", "team-section")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    value: photo,
    onChange: val => updateMember(activeIndex, "photo", val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Border:", "team-section"),
    value: photoBorder,
    onChange: val => updateMember(activeIndex, "photoBorder", val),
    defaults: {
      radius: "50%"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name Color:", "team-section"),
    value: nameColor,
    onChange: val => updateMember(activeIndex, "nameColor", val),
    defaultColor: "#333"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Designation/Title Color:", "team-section"),
    value: titleColor,
    onChange: val => updateMember(activeIndex, "titleColor", val),
    defaultColor: "#333"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: separator,
    onChange: val => updateMember(activeIndex, "separator", val),
    defaults: {
      width: "20%",
      height: "3px",
      color: "#777"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio Color:", "team-section"),
    value: bioColor,
    onChange: val => updateMember(activeIndex, "bioColor", val),
    defaultColor: "#333"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social Icon Colors:", "team-section"),
    value: socialIconColors,
    onChange: val => updateMember(activeIndex, "socialIconColors", val),
    defaults: {
      color: "#fff",
      bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "itemAction mt20 mb15"
  }, 1 < members?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "removeItem",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove", "team-section"),
    onClick: removeMember
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "no"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "duplicateItem",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duplicate", "team-section"),
    onClick: duplicateMember
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duplicate", "team-section")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "addItem"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Member", "team-section"),
    onClick: addMember
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "plus"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Member", "team-section")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "mt20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: layout,
    onChange: val => {
      "vertical" === val && setAttributes({
        layout: val,
        columns: {
          ...columns,
          desktop: 3,
          tablet: 2
        },
        textAlign: "center",
        padding: {
          ...padding,
          vertical: "50px"
        }
      });
      "horizontal" === val && setAttributes({
        layout: val,
        columns: {
          ...columns,
          desktop: 2,
          tablet: 1
        },
        textAlign: "left",
        padding: {
          ...padding,
          vertical: "30px"
        }
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.layouts,
    isIcon: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Separator", "team-section"),
    checked: isSep,
    onChange: val => setAttributes({
      isSep: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Bio", "team-section"),
    checked: isBio,
    onChange: val => setAttributes({
      isBio: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Social", "team-section"),
    checked: isSocial,
    onChange: val => setAttributes({
      isSocial: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))), "theme5" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme5ProfileSetting__WEBPACK_IMPORTED_MODULE_6__["default"],
    premiumProps: premiumProps
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Bio", "team-section"),
    checked: isBio,
    onChange: val => setAttributes({
      isBio: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show User Name", "team-section"),
    checked: showUserName,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "showUserName")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover On Scale", "team-section"),
    checked: hoverOnScale,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "hoverOnScale")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))), "theme6" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme6ProfileSetting__WEBPACK_IMPORTED_MODULE_7__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Water Mark", "team-section"),
    checked: isShowWaterMark,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowWaterMark")
    })
  }), isShowWaterMark && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Water Mark Text"),
    value: waterMark,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "waterMark")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Background Shape", "team-section"),
    checked: isShowShape,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowShape")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Social", "team-section"),
    checked: isSocial,
    onChange: val => setAttributes({
      isSocial: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))), "theme7" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme7ProfileSetting__WEBPACK_IMPORTED_MODULE_8__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Team Ring", "team-section"),
    checked: isShowWaterMark,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowWaterMark")
    })
  }), isShowWaterMark && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team Ring Text"),
    value: waterMark,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "waterMark")
    })
  }))), "theme8" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme8ProfileSetting__WEBPACK_IMPORTED_MODULE_9__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Social", "team-section"),
    checked: isSocial,
    onChange: val => setAttributes({
      isSocial: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Icon", "team-section"),
    checked: isShowIcon,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowIcon")
    })
  }), isShowIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt10",
    value: options?.icon,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "team-section"),
    onChange: v => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, v, "icon")
    })
  })))), "theme9" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme9ProfileSetting__WEBPACK_IMPORTED_MODULE_10__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Social", "team-section"),
    checked: isSocial,
    onChange: val => setAttributes({
      isSocial: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))), "theme10" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme10ProfileSetting__WEBPACK_IMPORTED_MODULE_11__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show States", "team-section"),
    checked: isSocial,
    onChange: val => setAttributes({
      isSocial: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Serial", "team-section"),
    checked: options?.isShowSereal,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowSereal")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Background Shape", "team-section"),
    checked: options?.isShowBgShape,
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "isShowBgShape")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))), "theme11" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    slug: "team-section",
    docsLink: "https://bblockswp.com/docs/team-block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody addRemoveItems editItem",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add or Remove Members", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    newItem: newMember,
    design: "sortable",
    attributes: attributes,
    setAttributes: setAttributes,
    arrKey: "members",
    itemLabel: "Member",
    ItemSettings: _Theme_Settings_theme11ProfileSetting__WEBPACK_IMPORTED_MODULE_12__["default"]
    // premiumProps={premiumProps}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap:", "team-section"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap:", "team-section"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    },
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.themes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Elements", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Title", "team-section"),
    checked: isTitle,
    onChange: val => setAttributes({
      isTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl,
    ...premiumProps,
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open Link in New Tab", "team-section"),
    checked: isLinkNewTab,
    onChange: val => setAttributes({
      isLinkNewTab: val
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Settings/Settings.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Settings/Settings.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/options */ "./src/blocks/team-section/utils/options.js");
/* harmony import */ var _panel_BlockPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel/BlockPreview */ "./src/blocks/team-section/Components/Backend/Settings/panel/BlockPreview.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../General/General */ "./src/blocks/team-section/Components/Backend/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Style/Style */ "./src/blocks/team-section/Components/Backend/Style/Style.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/team-section/utils/functions.js");














// import General from "../General/General"

const Settings = ({
  attributes,
  setAttributes,
  setActiveIndex,
  updateMember,
  isPremium,
  setIsProModalOpen,
  isProModalOpen,
  activeIndex,
  device,
  premiumProps
}) => {
  const {
    members = [],
    theme,
    textAlign,
    padding,
    nameTypo,
    titleTypo
  } = attributes;
  //   console.log(shihab);
  const addMember = () => {
    const {
      background = {
        color: "#0000"
      },
      border = {
        radius: "3px"
      },
      shadow = {},
      photoBorder = {
        radius: "50%"
      },
      nameColor = "#333",
      titleColor = "#333",
      separator = {
        width: "20%",
        height: "3px",
        style: "solid",
        color: "#777"
      },
      bioColor = "#333",
      socialIconColors = {
        color: "#fff",
        bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }
    } = members[0] || {};
    setAttributes({
      members: [...members, {
        background,
        border,
        shadow,
        photo: {
          id: null,
          url: "",
          alt: "",
          title: ""
        },
        photoBorder,
        name: "John Smith",
        nameColor,
        title: "Manager",
        titleColor,
        separator,
        bio: "I am a self-motivated and self-taught professional who likes to solve problems.",
        bioColor,
        social: [{
          link: "#",
          icon: {
            class: "fab fa-facebook-f",
            fontSize: 22,
            color: "#fff"
          }
        }, {
          link: "#",
          icon: {
            class: "fab fa-twitter",
            fontSize: 22,
            color: "#fff"
          }
        }, {
          link: "#",
          icon: {
            class: "fab fa-linkedin-in",
            fontSize: 22,
            color: "#fff"
          }
        }],
        socialIconColors
      }]
    });
    setActiveIndex(members.length);
  };
  const updateAllMembers = params => {
    const newMembers = (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(members, draft => {
      draft.map((_, index) => {
        for (const param of params) {
          const type = param[0];
          const value = param[1];
          draft[index][type] = value;
        }
      });
    });
    setAttributes({
      members: newMembers
    });
  };
  const handleClick = value => {
    setAttributes((0,_utils_functions__WEBPACK_IMPORTED_MODULE_11__.themeSwitch)(value, attributes));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlInspectorInfo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "bPlTabPanel",
    activeClass: "activeTab",
    tabs: _utils_options__WEBPACK_IMPORTED_MODULE_7__.generalStyleTabs
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "general" === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_General_General__WEBPACK_IMPORTED_MODULE_9__["default"], {
    premiumProps: premiumProps,
    attributes: attributes,
    setAttributes: setAttributes,
    updateMember: updateMember,
    activeIndex: activeIndex,
    setActiveIndex: setActiveIndex,
    device: device,
    isPremium: isPremium,
    setIsProModalOpen: setIsProModalOpen,
    isProModalOpen: isProModalOpen
  }), "style" === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Style_Style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    premiumProps: premiumProps,
    attributes: attributes,
    setAttributes: setAttributes,
    updateMember: updateMember,
    activeIndex: activeIndex,
    setActiveIndex: setActiveIndex,
    device: device,
    isPremium: isPremium,
    setIsProModalOpen: setIsProModalOpen,
    isProModalOpen: isProModalOpen
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Member", "team-section"),
    onClick: addMember
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
    icon: "plus"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlign,
    onChange: val => setAttributes({
      textAlign: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panel_BlockPreview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: _utils_options__WEBPACK_IMPORTED_MODULE_7__.toolTipPresets,
    isPremium: isPremium,
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 16,
          textTransform: "none"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme1" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: true,
        socialSize: "22px",
        columns: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme2" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "190px",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 14,
          textTransform: "uppercase"
        },
        isSep: true,
        isBio: false,
        socialSize: "22px",
        columns: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme3" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "50px",
          horizontal: "20px"
        },
        photoWidth: "170px",
        nameTypo: {
          ...nameTypo,
          fontSize: 24,
          textTransform: "none"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 18,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "28px",
        columns: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      "theme4" === val && setAttributes({
        padding: {
          ...padding,
          vertical: "15px",
          horizontal: "15px"
        },
        photoWidth: "100%",
        nameTypo: {
          ...nameTypo,
          fontSize: 20,
          textTransform: "uppercase"
        },
        titleTypo: {
          ...titleTypo,
          fontSize: 15,
          textTransform: "none"
        },
        isSep: false,
        isBio: false,
        socialSize: "22px",
        columns: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        },
        rowGap: "30px",
        columnGap: "30px"
      });
      ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val);
      members.map(member => {
        const {
          background,
          border,
          photoBorder,
          separator,
          socialIconColors
        } = member;
        const defaultParams = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#333"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme1Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "20px",
          color: "#e8edfb"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "10px",
          color: "#e8edfb",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: "#fff",
          bg: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }]];
        const theme2Params = [["background", {
          ...background,
          color: "#0000"
        }], ["border", {
          ...border,
          radius: "3px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#333"], ["titleColor", "#7a7a7a"], ["separator", {
          ...separator,
          color: "#999"
        }], ["bioColor", "#7a7a7a"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#0000"
        }]];
        const theme3Params = [["background", {
          ...background,
          color: "#f2f3f7"
        }], ["border", {
          ...border,
          radius: "10px"
        }], ["shadow", [{
          hOffset: "-10px",
          vOffset: "-10px",
          blur: "20px",
          color: "#f7f7f7"
        }, {
          hOffset: "10px",
          vOffset: "10px",
          blur: "20px",
          color: "#d7e0e8"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "50%"
        }], ["nameColor", "#32285C"], ["titleColor", "#677592"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#333"], ["socialIconColors", {
          ...socialIconColors,
          color: "#677592",
          bg: "#0000"
        }]];
        const theme4Params = [["background", {
          ...background,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }], ["border", {
          ...border,
          radius: "0px"
        }], ["shadow", [{
          hOffset: "",
          vOffset: "",
          blur: "0px",
          color: "#7090b0"
        }]], ["photoBorder", {
          ...photoBorder,
          width: "0px",
          color: "#0000",
          radius: "0px"
        }], ["nameColor", "#fff"], ["titleColor", "#fff"], ["separator", {
          ...separator,
          color: "#777"
        }], ["bioColor", "#fff"], ["socialIconColors", {
          ...socialIconColors,
          color: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          bg: "#fff"
        }]];
        "default" === val && updateAllMembers(defaultParams);
        "theme1" === val && updateAllMembers(theme1Params);
        "theme2" === val && updateAllMembers(theme2Params);
        "theme3" === val && updateAllMembers(theme3Params);
        "theme4" === val && updateAllMembers(theme4Params);
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    isProModalOpen: isProModalOpen,
    setIsProModalOpen: setIsProModalOpen,
    link: "/wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Everything in free", "clipboard")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom button colors and styles", "clipboard")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced typography and color controls", "clipboard")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding, margin, border, and shadow customization", "clipboard")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover effects for inputs and buttons", "clipboard")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pro: ", "clipboard")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon library integration and size/color controls", "clipboard"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    getDeviceType
  } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase()
  };
})(Settings));

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Settings/panel/BlockPreview.js":
/*!***********************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Settings/panel/BlockPreview.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-section/Components/Backend/Settings/panel/style.scss");




const BlockPreview = ({
  options,
  value,
  onChange,
  isPremium
}) => {
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleButtonClick = blockValue => {
    onChange(blockValue);
    // setActiveIndex(idx);
    handleBlockReplace(blockValue);
  };
  const handleMouseInteraction = (idx, isEnter) => {
    setActiveIndex(isEnter ? idx : null);
  };
  const handleBlockReplace = blockContent => {
    onChange(blockContent);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlBlockPreviewWrapper"
  }, options?.map((theme, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: idx
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: `bPl-previewBtn ${value === theme.value ? "bPl-activeBtn" : ""}`,
    onClick: () => handleButtonClick(theme.value, idx, theme.content)
    // onMouseEnter={() => handleMouseInteraction(idx, true)}
    // onMouseLeave={() => handleMouseInteraction(idx, false)}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bplOpacity75"
  }, theme.label), theme?.isPro && !isPremium && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `labelPro 
 ${value === theme.value ? "labelProActive" : ""}`
  }, "Pro"))), activeIndex === idx && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    style: {
      cursor: "pointer"
    },
    onClick: () => handleButtonClick(theme.value, idx, theme.content)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onMouseEnter: () => handleMouseInteraction(idx, true),
    onMouseLeave: () => handleMouseInteraction(idx, false),
    style: {
      height: theme.height,
      width: theme.width
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: theme.img,
    style: {
      minHeight: "100%",
      width: "100%",
      objectFit: "contain"
    }
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockPreview);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Settings/panel/style.scss":
/*!******************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Settings/panel/style.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Style/Style.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Style/Style.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/options */ "./src/blocks/team-section/utils/options.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());










const Style = ({
  attributes,
  setAttributes,
  device,
  premiumProps
  //   isPremium,
  //   setIsProModalOpen,
  //   isProModalOpen,
}) => {
  const {
    textAlign,
    padding,
    photoWidth,
    photoMargin,
    nameTypo,
    nameMargin,
    isTitle,
    titleTypo,
    titleMargin,
    isSep,
    sepMargin,
    isBio,
    bioTypo,
    bioMargin,
    isSocial,
    socialSize,
    socialIconMargin,
    theme = "default",
    styles,
    options = {}
  } = attributes;
  const {
    bg = {},
    width = "100%",
    alignment = "center",
    padding: sectionPadding = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    margin = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    teamMember = {}
  } = styles || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Align:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: textAlign,
    onChange: val => setAttributes({
      textAlign: val
    }),
    options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.aligns,
    isIcon: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding:", "team-section"),
    value: padding,
    onChange: val => setAttributes({
      padding: val
    }),
    defaults: {
      vertical: "50px",
      horizontal: "20px"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width:", "team-section"),
    labelPosition: "left",
    value: photoWidth,
    onChange: val => setAttributes({
      photoWidth: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin:", "team-section"),
    value: photoMargin,
    onChange: val => setAttributes({
      photoMargin: val
    }),
    defaults: {
      side: 4,
      bottom: "20px"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: nameTypo,
    onChange: val => setAttributes({
      nameTypo: val
    }),
    defaults: {
      fontSize: {
        desktop: 20,
        tablet: 18,
        mobile: 16
      },
      fontWeight: 600
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin:", "team-section"),
    value: nameMargin,
    onChange: val => setAttributes({
      nameMargin: val
    }),
    defaults: {
      side: 4,
      bottom: "10px"
    }
  })), isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Designation/Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: titleTypo,
    onChange: val => setAttributes({
      titleTypo: val
    }),
    defaults: {
      fontSize: {
        desktop: 16,
        tablet: 16,
        mobile: 16
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin:", "team-section"),
    value: titleMargin,
    onChange: val => setAttributes({
      titleMargin: val
    }),
    defaults: {
      side: 4,
      bottom: "10px"
    }
  })), isSep && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin:", "team-section"),
    value: sepMargin,
    onChange: val => setAttributes({
      sepMargin: val
    }),
    defaults: {
      side: 4,
      bottom: "15px"
    }
  })), isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Bio", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: bioTypo,
    onChange: val => setAttributes({
      bioTypo: val
    }),
    defaults: {
      fontSize: {
        desktop: 15,
        tablet: 15,
        mobile: 15
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin:", "team-section"),
    value: bioMargin,
    onChange: val => setAttributes({
      bioMargin: val
    }),
    defaults: {
      side: 4,
      bottom: "15px"
    }
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Social", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size:", "team-section"),
    labelPosition: "left",
    value: socialSize,
    onChange: val => setAttributes({
      socialSize: val
    }),
    units: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/options'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components/Deprecated'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Margin:", "team-section"),
    value: socialIconMargin,
    onChange: val => setAttributes({
      socialIconMargin: val
    }),
    defaults: {
      vertical: "10px",
      horizontal: "10px"
    }
  }))), "theme5" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Even Item  Background", "team-section"),
    value: teamMember?.evenItemBg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "evenItemBg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "padding")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember?.photo?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "size")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.photo?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Event Item Photo Background", "team-section"),
    value: teamMember?.photo?.evenItemPhotoBg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "evenItemPhotoBg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.photo?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.photo?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    min: 0,
    step: 0.1,
    max: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Filter(gray scale)", "team-section"),
    value: teamMember?.photo?.grayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "photo", "grayScale")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "team-section"),
    value: teamMember?.name?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.name?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.name?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Title", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "team-section"),
    value: teamMember?.title?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.title?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.title?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "team-section"),
    value: teamMember?.bio?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bio", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.bio?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bio", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("UserName", "team-section")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "team-section"),
    value: teamMember?.userName?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "userName", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.userName?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "userName", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.userName?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "userName", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.userName?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "userName", "typo")
    })
  }))), "theme6" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    value: teamMember?.height[device],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "height", device)
    })
  }), options?.isShowShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape Background Color", "team-section"),
    value: teamMember?.shape,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "shape")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overly", "team-section"),
    value: teamMember?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    min: 0,
    step: 0.1,
    max: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Filter(gray scale)", "team-section"),
    value: teamMember?.grayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "grayScale")
    })
  })), options?.isShowWaterMark && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Water Mark", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: styles?.waterMark?.color || "#1f1f1f",
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "waterMark", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: styles?.waterMark?.typo || "",
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "waterMark", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    step: 1,
    unit: "%",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position (Top to Bottom )", "team-section"),
    value: styles?.waterMark?.translateY,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "waterMark", "translateY")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: teamMember?.name?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: teamMember?.name?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: teamMember?.title?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: teamMember?.title?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "team-section"),
    value: teamMember?.icon?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "size")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Color", "team-section"),
    value: teamMember?.icon?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Hover Color", "team-section"),
    value: teamMember?.icon?.hoverColor,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "hoverColor")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: teamMember?.icon?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Gap", "team-section"),
    value: teamMember?.icon?.gap,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "gap")
    })
  })), options?.isShowShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Shape", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember?.shape?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "shape", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember?.shape?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "shape", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.shape?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "shape", "bg")
    })
  }))), "theme7" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember?.photo?.width || "88px",
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "photo", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember?.photo?.height || "88px",
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "photo", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.photo?.radius || {
      top: "50%",
      left: "50%",
      bottom: "50%",
      right: "50%"
    },
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "photo", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Object Fit", "team-section"),
    value: teamMember?.photo?.object,
    options: [{
      label: "Cover (Crop & Fill)",
      value: "cover"
    }, {
      label: "Contain (Fit Inside)",
      value: "contain"
    }, {
      label: "Fill (Stretch)",
      value: "fill"
    }, {
      label: "None (Original Size)",
      value: "none"
    }, {
      label: "Scale Down (Smaller Fit)",
      value: "scale-down"
    }],
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "photo", "object")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 1,
    max: 4,
    step: .1,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Checked Image Scale", "team-section"),
    value: teamMember?.photo?.checkedScale || 2,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "photo", "checkedScale")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name & Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("color", "team-section"),
    value: teamMember?.name?.color,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.name?.typo,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "name", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    min: 0,
    max: 180,
    step: 1,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Checked Rotate", "team-section"),
    value: teamMember?.name?.rotate || 90,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "name", "rotate")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 2,
    max: 6,
    step: .1,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Checked Name & Title Scale", "team-section"),
    value: teamMember?.name?.textScale || 2.30,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "name", "textScale")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team Ring", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember?.teamRing?.width,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "teamRing", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember?.teamRing?.height,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "teamRing", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.teamRing?.bg,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "teamRing", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Typography", "team-section"),
    value: teamMember?.teamRing?.typo,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "teamRing", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    values: teamMember?.teamRing?.radius,
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "teamRing", "radius")
    })
  }))), "theme8" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember.memberPhoto?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember.memberPhoto?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl,
    ...premiumProps,
    value: teamMember.memberPhoto?.objectFit,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image  Fit", "team-section"),
    options: [{
      label: "Cover",
      value: "cover"
    }, {
      label: "Contain",
      value: "contain"
    }, {
      label: "Fill",
      value: "fill"
    }, {
      label: "None",
      value: "none"
    }, {
      label: "Scale Down",
      value: "scale-down"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "objectFit")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 100,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Filter(gray)", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.grayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "grayScale")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 100,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Image Filter(gray)", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.hoverGrayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "hoverGrayScale")
    })
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Social", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.social?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: teamMember?.social?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Color", "team-section"),
    value: teamMember?.social?.hoverColor,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "hoverColor")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    values: teamMember?.social?.padding,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 100,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "team-section"),
    value: teamMember?.social?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "size")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Content", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: teamMember?.content?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Background", "team-section"),
    value: teamMember?.content?.hoverBg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "hoverBg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Color", "team-section"),
    value: teamMember?.content?.hoverColor,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "hoverColor")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: teamMember?.content?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "padding")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Color", "team-section"),
    value: teamMember?.name?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Typography", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Margin", "team-section"),
    values: teamMember?.name?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Color", "team-section"),
    value: teamMember?.title?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Typography", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Margin", "team-section"),
    values: teamMember?.title?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "margin")
    })
  })), options?.isShowIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Color", "team-section"),
    value: teamMember?.icon?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Size", "team-section"),
    value: teamMember?.icon?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "icon", "size")
    })
  }))), "theme9" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Overly", "team-section"),
    value: teamMember?.memberPhoto?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember.memberPhoto?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl,
    ...premiumProps,
    value: teamMember.memberPhoto?.objectFit,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo  Fit", "team-section"),
    options: [{
      label: "Cover",
      value: "cover"
    }, {
      label: "Contain",
      value: "contain"
    }, {
      label: "Fill",
      value: "fill"
    }, {
      label: "None",
      value: "none"
    }, {
      label: "Scale Down",
      value: "scale-down"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "objectFit")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 100,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Filter(gray)", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.grayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "grayScale")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 100,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Photo Filter(gray)", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.hoverGrayScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "hoverGrayScale")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Photo Scale", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.hoverScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "hoverScale")
    })
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Social", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: teamMember?.social?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    className: "mt15",
    value: teamMember?.social?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    value: teamMember?.social?.colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "team-section"),
    className: "mt15",
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    value: teamMember?.social?.hoverColors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Colors", "team-section"),
    className: "mt15",
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "hoverColors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "team-section"),
    className: "mt15",
    values: teamMember?.social?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "team-section"),
    className: "mt15",
    value: teamMember?.social?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "social", "size")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: teamMember?.name?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: teamMember?.name?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "team-section"),
    value: teamMember?.title?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: teamMember?.title?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "margin")
    })
  }))), "theme10" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Max Width", "team-section"),
    value: teamMember?.memberPhoto?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember?.memberPhoto?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl,
    ...premiumProps,
    value: teamMember.memberPhoto?.objectFit,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo  Fit", "team-section"),
    options: [{
      label: "Cover",
      value: "cover"
    }, {
      label: "Contain",
      value: "contain"
    }, {
      label: "Fill",
      value: "fill"
    }, {
      label: "None",
      value: "none"
    }, {
      label: "Scale Down",
      value: "scale-down"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "objectFit")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Photo Shape Background ", "team-section"),
    value: teamMember?.memberPhoto?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "bg")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Content", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background ", "team-section"),
    value: teamMember?.content?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding ", "team-section"),
    values: teamMember?.content?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius ", "team-section"),
    values: teamMember?.content?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shadow ", "team-section"),
    value: teamMember?.content?.shadow,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "shadow")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    max: 360,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape hover Rotate ", "team-section"),
    value: teamMember?.content?.hoverRotate,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "hoverRotate")
    })
  })), options?.isShowSereal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Serial", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width ", "team-section"),
    value: teamMember?.serial?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "serial", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height ", "team-section"),
    value: teamMember?.serial?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "serial", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors ", "team-section"),
    value: teamMember?.serial?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "serial", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius ", "team-section"),
    values: teamMember?.serial?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "serial", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.serial?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "serial", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.name?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin ", "team-section"),
    values: teamMember?.name?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  })), isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.title?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin ", "team-section"),
    values: teamMember?.title?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member State", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding ", "team-section"),
    values: teamMember?.states?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin ", "team-section"),
    values: teamMember?.states?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BorderBoxControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border ", "team-section"),
    value: teamMember?.states?.border,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "border")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Value Color ", "team-section"),
    value: teamMember?.states?.value?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "value", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Label Color ", "team-section"),
    value: teamMember?.states?.label?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "label", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Value Typography ", "team-section"),
    value: teamMember?.states?.value?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "value", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Label Typography ", "team-section"),
    value: teamMember?.states?.label?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "label", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Container width ", "team-section"),
    value: teamMember?.states?.width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Container Height ", "team-section"),
    value: teamMember?.states?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius ", "team-section"),
    values: teamMember?.states?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon One Colors", "team-section"),
    value: teamMember?.states?.iconOne?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "iconOne", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "team-section"),
    value: teamMember?.states?.size,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "states", "size")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Button", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Typography", "team-section"),
    value: teamMember?.btn?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Colors", "team-section"),
    value: teamMember?.btn?.colors,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "colors")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Padding", "team-section"),
    values: teamMember?.btn?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Radius", "team-section"),
    values: teamMember?.btn?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "radius")
    })
  }))), "theme11" === theme && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "team-section"),
    value: width,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "width")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "team-section"),
    value: alignment,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "alignment")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "team-section"),
    value: bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "team-section"),
    values: sectionPadding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "team-section"),
    values: margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "margin")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Content", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background ", "team-section"),
    value: teamMember?.content?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "bg")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding ", "team-section"),
    values: teamMember?.content?.padding,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "padding")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius ", "team-section"),
    values: teamMember?.content?.radius,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "radius")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shadow ", "team-section"),
    value: teamMember?.content?.shadow,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "content", "shadow")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Photo", "team-section"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl,
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "team-section"),
    value: teamMember?.memberPhoto?.height,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "height")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Object Fit", "team-section"),
    value: teamMember?.memberPhoto?.objectFit,
    options: [{
      label: "Cover (Crop & Fill)",
      value: "cover"
    }, {
      label: "Contain (Fit Inside)",
      value: "contain"
    }, {
      label: "Fill (Stretch)",
      value: "fill"
    }, {
      label: "None (Original Size)",
      value: "none"
    }, {
      label: "Scale Down (Smaller Fit)",
      value: "scale-down"
    }],
    onChange: val => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, val, "teamMember", "memberPhoto", "objectFit")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    min: 0,
    max: 3,
    step: .1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Photo Scale", "team-section"),
    className: "mt15",
    value: teamMember.memberPhoto?.hoverScale,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "hoverScale")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overly Color", "team-section"),
    value: teamMember?.memberPhoto?.bg,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "memberPhoto", "bg")
    })
  })), isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Title", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.title?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin ", "team-section"),
    values: teamMember?.title?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.title?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "title", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.name?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin ", "team-section"),
    values: teamMember?.name?.margin,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "margin")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.name?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "name", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Bio", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.bio?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bio", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.bio?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "bio", "typo")
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Button", "team-section"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color ", "team-section"),
    value: teamMember?.btn?.color,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "color")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gap ", "team-section"),
    value: teamMember?.btn?.gap,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "gap")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography ", "team-section"),
    value: teamMember?.btn?.typo,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "typo")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/ProControls'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    Component: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl,
    ...premiumProps,
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size ", "team-section"),
    value: teamMember?.btn?.iconSize,
    onChange: v => setAttributes({
      styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles, v, "teamMember", "btn", "iconSize")
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme10ProfileSetting.js":
/*!********************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme10ProfileSetting.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const theme10ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo,
    state = {},
    btn = {}
  } = members[index];

  /** Update Member Helper */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State One", "team-section"),
    value: state?.stateOne?.label || "",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateOne", "label")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State One Value", "team-section"),
    value: state?.stateOne?.value || "",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateOne", "value")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State One Icon", "team-section"),
    value: state?.stateOne?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-zap text-emerald-600\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateOne", "icon")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State Two", "team-section"),
    value: state?.stateTwo?.label || "",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateTwo", "label")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State One Value", "team-section"),
    value: state?.stateTwo?.value || "",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateTwo", "value")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("State One Icon", "team-section"),
    value: state?.stateTwo?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-zap text-emerald-600\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "state", "stateTwo", "icon")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Label", "team-section"),
    value: btn?.label || "",
    onChange: value => {
      setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "btn", "label")
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Link", "team-section"),
    value: btn?.link || "",
    onChange: value => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
      setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, safeUrl, index, "btn", "link")
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme10ProfileSetting);

// theme10ProfileSetting

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme11ProfileSetting.js":
/*!********************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme11ProfileSetting.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const theme11ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo,
    btn = {},
    bio = ''
  } = members[index];
  const {
    label = "view profile",
    link = "#",
    icon = "<svg width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\" /><path d=\"M12 5l7 7-7 7\" /></svg>"
  } = btn || {};

  /** Update Member Helper */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    className: "mt15",
    placeholder: "bio...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bio", "team-section"),
    value: bio,
    rows: 3,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "bio")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Label", "team-section"),
    value: label,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "btn", "label")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Link", "team-section"),
    value: link,
    onChange: value => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
      setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, safeUrl, index, "btn", "link")
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mt10",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Icon", "team-section"),
    value: icon,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "btn", "icon")
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme11ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme5ProfileSetting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme5ProfileSetting.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const theme5ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    bio,
    userName,
    title,
    userNameLink,
    photo
  } = members[index];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    placeholder: "image ...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    rows: 3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bio", "team-section"),
    value: bio,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "bio")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("User Name", "team-section"),
    value: userName,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "userName")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("User Name Link", "team-section"),
    value: userNameLink,
    onChange: value => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
      setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, safeUrl, index, "userNameLink")
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme5ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme6ProfileSetting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme6ProfileSetting.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const theme6ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo,
    social = [],
    paddingTop
  } = members[index];
  const [selectedSocial, setSelectedSocial] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);

  /** Update Member Helper */
  const updateMember = (field, value, socialIndex = null, subField = null) => {
    const updatedMembers = [...members];
    if (field === "social" && socialIndex !== null) {
      const updatedSocial = [...social];
      if (subField) {
        updatedSocial[socialIndex] = {
          ...updatedSocial[socialIndex],
          [subField]: value
        };
      } else {
        updatedSocial[socialIndex] = value;
      }
      updatedMembers[index] = {
        ...members[index],
        social: updatedSocial
      };
    } else {
      updatedMembers[index] = {
        ...members[index],
        [field]: value
      };
    }
    setAttributes({
      members: updatedMembers
    });
  };

  /** Add new social link */
  const handleAddSocial = () => {
    const newSocial = [...social, {
      link: "#",
      icon: {
        class: "fab fa-facebook-f"
      }
    }];
    updateMember("social", newSocial);
    setSelectedSocial(social.length);
  };

  /** Remove social link */
  const handleRemoveSocial = socialIndex => {
    const newSocial = social.filter((_, i) => i !== socialIndex);
    updateMember("social", newSocial);
    setSelectedSocial(null);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Social Media Links "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberSocialRow",
    style: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap"
    }
  }, social.map((item, socialIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: socialIndex,
    onClick: () => setSelectedSocial(socialIndex),
    style: {
      cursor: "pointer",
      padding: "8px 12px",
      border: selectedSocial === socialIndex ? "2px solid #0073aa" : "1px solid #ddd",
      borderRadius: "8px",
      background: selectedSocial === socialIndex ? "#f0f8ff" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      fontSize: "22px"
    },
    className: item.icon?.class
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: handleAddSocial,
    style: {
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-plus"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      marginLeft: "10px"
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(" Add Social", "team-section")))), selectedSocial !== null && social[selectedSocial] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selectedSocialControls",
    style: {
      marginTop: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#f9f9f9",
      maxWidth: "350px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    value: social[selectedSocial].link,
    onChange: val => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(val);
      updateMember("social", safeUrl, selectedSocial, "link");
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link URL", "team-section")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5 mt10"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Change Icon:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: social[selectedSocial].icon,
    onChange: val => updateMember("social", val, selectedSocial, "icon"),
    defaults: {
      class: "fab fa-facebook-f",
      fontSize: 22
    },
    isSize: false,
    isColor: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isDestructive: true,
    variant: "secondary",
    className: "mt10",
    onClick: () => handleRemoveSocial(selectedSocial)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-times"
  }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Remove", "team-section"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    min: 0,
    step: 1,
    unit: "px",
    className: "mt15",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Translate(Y)", "team-section"),
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "paddingTop")
    }),
    value: paddingTop
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme6ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme7ProfileSetting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme7ProfileSetting.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const theme7ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo
  } = members[index];

  /** Update Member Helper */

  /** Add new social link */

  /** Remove social link */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme7ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme8ProfileSetting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme8ProfileSetting.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const theme8ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo,
    social = [],
    icon
  } = members[index];

  /** Update Member Helper */
  const updateMember = (field, value, socialIndex = null, subField = null) => {
    const updatedMembers = [...members];
    if (field === "social" && socialIndex !== null) {
      const updatedSocial = [...social];
      if (subField) {
        updatedSocial[socialIndex] = {
          ...updatedSocial[socialIndex],
          [subField]: value
        };
      } else {
        updatedSocial[socialIndex] = value;
      }
      updatedMembers[index] = {
        ...members[index],
        social: updatedSocial
      };
    } else {
      updatedMembers[index] = {
        ...members[index],
        [field]: value
      };
    }
    setAttributes({
      members: updatedMembers
    });
  };

  /** Add new social link */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Social Media  "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberSocialRow",
    style: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    // key={socialIndex}
    // onClick={() => setSelectedSocial(socialIndex)}
    style: {
      cursor: "pointer",
      padding: "8px 12px",
      border: "2px solid #0073aa",
      //     selectedSocial === socialIndex
      //       ? "2px solid #0073aa"
      //       : "1px solid #ddd",
      borderRadius: "8px",
      //   background:
      //     selectedSocial === socialIndex ? "#f0f8ff" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      fontSize: "22px"
    },
    className: social[0].icon?.class
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selectedSocialControls",
    style: {
      marginTop: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#f9f9f9",
      maxWidth: "350px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    value: social[0].link,
    onChange: val => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(val);
      updateMember("social", safeUrl, 0, "link");
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link URL", "team-section")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5 mt10"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Change Icon:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: social[0].icon,
    onChange: val => updateMember("social", val, 0, "icon"),
    defaults: {
      class: "fab fa-facebook-f",
      fontSize: 22
    },
    isSize: false,
    isColor: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Arrow Icon Link", "team-section"),
    className: "mt15",
    value: icon,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "icon")
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme8ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/Theme Settings/theme9ProfileSetting.js":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/Theme Settings/theme9ProfileSetting.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const theme9ProfileSetting = props => {
  const {
    attributes,
    setAttributes,
    index
  } = props;
  const {
    members
  } = attributes;
  const {
    name,
    title,
    photo,
    social = []
  } = members[index];
  const [selectedSocial, setSelectedSocial] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);

  /** Update Member Helper */
  const updateMember = (field, value, socialIndex = null, subField = null) => {
    const updatedMembers = [...members];
    if (field === "social" && socialIndex !== null) {
      const updatedSocial = [...social];
      if (subField) {
        updatedSocial[socialIndex] = {
          ...updatedSocial[socialIndex],
          [subField]: value
        };
      } else {
        updatedSocial[socialIndex] = value;
      }
      updatedMembers[index] = {
        ...members[index],
        social: updatedSocial
      };
    } else {
      updatedMembers[index] = {
        ...members[index],
        [field]: value
      };
    }
    setAttributes({
      members: updatedMembers
    });
  };

  /** Add new social link */
  const handleAddSocial = () => {
    const newSocial = [...social, {
      link: "#",
      icon: {
        class: "fab fa-facebook-f"
      }
    }];
    updateMember("social", newSocial);
    setSelectedSocial(social.length);
  };

  /** Remove social link */
  const handleRemoveSocial = socialIndex => {
    const newSocial = social.filter((_, i) => i !== socialIndex);
    updateMember("social", newSocial);
    setSelectedSocial(null);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "team-section"),
    value: photo?.url,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "photo", "url")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Name...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name", "team-section"),
    value: name,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: "mt15",
    placeholder: "Title...",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "team-section"),
    value: title,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Social Media Links "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberSocialRow",
    style: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap"
    }
  }, social.map((item, socialIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: socialIndex,
    onClick: () => setSelectedSocial(socialIndex),
    style: {
      cursor: "pointer",
      padding: "8px 12px",
      border: selectedSocial === socialIndex ? "2px solid #0073aa" : "1px solid #ddd",
      borderRadius: "8px",
      background: selectedSocial === socialIndex ? "#f0f8ff" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      fontSize: "22px"
    },
    className: item.icon?.class
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: handleAddSocial,
    style: {
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-plus"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      marginLeft: "10px"
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(" Add Social", "team-section")))), selectedSocial !== null && social[selectedSocial] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selectedSocialControls",
    style: {
      marginTop: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#f9f9f9",
      maxWidth: "350px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    value: social[selectedSocial].link,
    onChange: val => {
      const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(val);
      updateMember("social", safeUrl, selectedSocial, "link");
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link URL", "team-section")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "mb5 mt10"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Change Icon:", "team-section")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/Components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: social[selectedSocial].icon,
    onChange: val => updateMember("social", val, selectedSocial, "icon"),
    defaults: {
      class: "fab fa-facebook-f",
      fontSize: 22
    },
    isSize: false,
    isColor: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isDestructive: true,
    variant: "secondary",
    className: "mt10",
    onClick: () => handleRemoveSocial(selectedSocial)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-times"
  }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Remove", "team-section"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme9ProfileSetting);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/themes/editorRichText.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/themes/editorRichText.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReusableRichText: () => (/* binding */ ReusableRichText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const ReusableRichText = ({
  tagName,
  className,
  value,
  onChange,
  placeholder
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
  placeholder: placeholder,
  tagName: tagName,
  className: className,
  value: value,
  onChange: val => onChange(val)
});

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/Style.js":
/*!************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/Style.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const Style = ({
  attributes,
  id
}) => {
  const {
    members = [],
    columns,
    columnGap,
    rowGap,
    layout,
    textAlign,
    padding,
    photoWidth,
    photoMargin,
    nameTypo,
    nameMargin,
    titleTypo,
    titleMargin,
    sepMargin,
    bioTypo,
    bioMargin,
    socialSize,
    socialIconMargin,
    styles,
    theme = "default",
    options = {}
  } = attributes;
  const {
    hoverOnScale = true,
    isShowWaterMark = true
  } = options || {};
  const {
    bg = {},
    width = "100%",
    alignment = "center",
    padding: sectionPadding = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    margin = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    teamMember = {}
  } = styles || {};
  const mainSl = `#${id}`;
  const membersSl = `${mainSl} .tsbTeamMembers`;
  const gMemberSl = `${membersSl} .tsbMember`;
  const gMemberDetailsSl = `${gMemberSl} .memberDetails`;
  const gMemberSocialSl = `${gMemberDetailsSl} .memberSocial`;
  const tsbTeamMembersWrapperlSl = `${mainSl} .tsbTeamMembersWrapper`;
  const tsbTeamMembersTeamContainerSl = `${tsbTeamMembersWrapperlSl} .tsbTeamMembersTeamContainer`;
  const tsbTeamMembersTeamMemberSl = `${tsbTeamMembersTeamContainerSl} .tsbTeamMembersTeamMember`;
  const tsbTeamMembersTeamMemberThumbSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMembersTeamMemberThumb`;
  const tsbTeamMemberNameSl = `${mainSl} .tsbTeamMemberName`;
  const coFounderSl = `${tsbTeamMembersTeamContainerSl} .co-funder`;
  const tsbTeamMemberBioSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMemberBio`;
  const tsbTeamMemberUserNameSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMemberUserName`;
  const tsbTeamMembersWrapperTheme6Sl = `${mainSl} .tsbTeamMembersWrapperTheme-6`;
  const tsbTeamMembersWrapperTheme7Sl = `${mainSl} .tsbTeamMembersWrapperTheme-7`;
  const tsbTeamMembersWrapperTheme8Sl = `${mainSl} .tsbTeamMembersWrapperTheme-8`;
  const tsbTeamMembersWrapperTheme9Sl = `${mainSl} .tsbTeamMembersWrapperTheme-9`;
  const tsbTeamMembersWrapperTheme10Sl = `${mainSl} .tsbTeamMembersWrapperTheme-10`;
  const tsbTeamMembersWrapperTheme11Sl = `${mainSl} .tsbTeamMemberWrapperTheme-11`;
  // .threeDinfoCard${index}{
  // 	${getBackgroundCSS(card.backgroundImage)}
  // }
  // .threeDinfoCardContentBox${index}{
  // background:${card?.backgroundColor};
  // box-shadow:${getMultiShadowCSS(card?.shadow)};
  // padding:${getBoxCSS(styles?.card?.contentPadding)}
  // }
  // ${dateBoxSl}${index}{
  // box-shadow:${getMultiShadowCSS(card?.tagShadow)};

  // }
  const dynamicAlignment = members.map((card, index) => {
    return `${tsbTeamMembersWrapperTheme6Sl}  .tsbTeamMembersTeamMemberContentContainer-${index}{
			padding-top:${card?.paddingTop};
			}
					`;
  }).join("\n");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", nameTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", titleTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", bioTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.name?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.title?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.bio?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.userName?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", styles?.waterMark?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.teamRing?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.serial?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.states?.label?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.states?.value?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.btn?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberName`, nameTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberTitle`, titleTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberBio`, bioTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberNameSl}`, teamMember?.name?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme7Sl} .team-ring label`, teamMember?.name?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMemberBio`, teamMember?.bio?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${coFounderSl}:after`, teamMember?.title?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme7Sl} #center`, teamMember?.teamRing?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_number_box`, teamMember?.serial?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_label`, teamMember?.states?.label?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_value`, teamMember?.states?.value?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_btn`, teamMember?.btn?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMember_view_btn`, teamMember?.btn?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 
	${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberBioSl}`, teamMember?.bio?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberUserNameSl}`, teamMember?.userName?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersBgWatermark`, styles?.waterMark?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`.tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 

		${membersSl}{
			grid-gap: ${rowGap} ${columnGap};
		}
		${gMemberSl}{
			text-align: ${textAlign};
			padding: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(padding)};
		}
		${gMemberSl} .memberPhoto{
			width: ${photoWidth};
			margin: ${"horizontal" === layout ? "0 20px 0 0" : `${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(photoMargin)}`};
		}
		${gMemberDetailsSl} .memberName{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nameMargin)};
		}
		${gMemberDetailsSl} .memberTitle{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(titleMargin)};
		}
		${gMemberDetailsSl} .memberSeparator{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sepMargin)};
		}
		${gMemberDetailsSl} .memberBio{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bioMargin)};
		}
		${gMemberSocialSl} .icon,
		${gMemberSocialSl} .memberSocialAdd{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(socialIconMargin)};
		}
		${gMemberSocialSl} .icon i,
		${gMemberSocialSl} .memberSocialAdd i{
			font-size: ${socialSize};
			width: ${socialSize};
		}

		${members.map((member, index) => {
        const {
          background,
          border,
          shadow,
          photoBorder,
          nameColor,
          titleColor,
          separator,
          bioColor,
          socialIconColors
        } = member;
        const memberSl = `${mainSl} #tsbMember-${index}`;
        const memberDetailsSl = `${memberSl} .memberDetails`;
        const memberSocialSl = `${memberDetailsSl} .memberSocial`;
        return `
				${memberSl}{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(background)}
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(border)}
					box-shadow: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(shadow?.shadow || shadow)};
				}
				${memberSl} .memberPhoto{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(photoBorder)}
				}
				${memberDetailsSl} .memberName{
					color: ${nameColor};
				}
				${memberDetailsSl} .memberTitle{
					color: ${titleColor};
				}
				${memberSl} .memberSeparator{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(separator)}
				}
				${memberDetailsSl} .memberBio{
					color: ${bioColor};
				}
				${memberSocialSl}{
					justify-content: ${"center" === textAlign ? "center" : "right" === textAlign ? "flex-end" : "flex-start"}
				}
				${memberSocialSl} li a{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(socialIconColors)}
				}
				${memberSocialSl} li.isSelected{
					border: 2px solid ${socialIconColors?.bg};
				}
				${memberSocialSl} li.memberSocialAdd button i{
					color: ${socialIconColors?.bg};
				}
			`;
      }).join(" ")}

	  

		${tsbTeamMembersWrapperlSl}{
		justify-content: ${alignment};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
		
		}
		${tsbTeamMembersTeamContainerSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
        grid-template-columns: repeat(${columns?.desktop},1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};     
 
		}
		
		${tsbTeamMembersTeamMemberSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.padding)};
		}
		${tsbTeamMembersTeamMemberSl}:nth-of-type(even){
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.evenItemBg)}
		}
			${tsbTeamMembersTeamMemberSl}:nth-of-type(even) .tsbTeamMembersTeamMemberThumb {
			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.evenItemPhotoBg)}
			}

		${tsbTeamMembersTeamMemberThumbSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.bg)}
		width:${teamMember?.photo?.size};
		height:${teamMember?.photo?.size};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius)};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.padding)};
		}
		${tsbTeamMembersTeamMemberThumbSl} img {
		filter: grayscale(${teamMember?.photo?.grayScale});
		}
		${tsbTeamMemberNameSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.radius)};
		}
		
		${coFounderSl}:after{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.radius)};
		}

		${tsbTeamMemberBioSl}{
		color:${teamMember?.bio?.color};
		}

		${tsbTeamMemberUserNameSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.radius)};
		}
		${mainSl}{
		
		${["theme6", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(theme) && `
			display:flex;
		justify-content:${alignment};

			`}
		}
			


		${tsbTeamMembersWrapperTheme6Sl}{
		${isShowWaterMark && "padding-top:100px;"}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
	    margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};

		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer{
		
		grid-template-columns: repeat(${columns?.desktop}, 1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.desktop};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.desktop};
		 filter: grayscale(${teamMember?.grayScale});
		 }
		}


		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember::after{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.bg)}
		}
		 ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMemberShape::before{
		  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.shape?.bg)}
		   width: ${teamMember?.shape?.width};
          height: ${teamMember?.shape?.height};
		 }
		  ${tsbTeamMemberNameSl}{
			color:${teamMember?.name?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.margin)};
			}
			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
			}

			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember .tsbTeamMemberSocial{
			                        margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.icon?.margin)};
									gap:${teamMember?.icon?.gap}px;
									i {
							color: ${teamMember?.icon?.color};
							font-size: ${teamMember?.icon?.size}px;

							&:hover {
							color: ${teamMember?.icon?.hoverColor};
							}
						}
			}

       ${tsbTeamMembersWrapperTheme6Sl}  .tsbTeamMembersBgWatermark{
	   color:${styles?.waterMark?.color || "#1f1f1f"};
	   transform: translateX(-50%) translateY(${styles?.waterMark?.translateY}) ;
	   

	   }

	   ${tsbTeamMembersWrapperTheme7Sl}{
	  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
	  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
	  margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
	   }
	  ${tsbTeamMembersWrapperTheme7Sl} .team-ring label{
	   width: ${teamMember?.photo?.width || "88px"};
       height:${teamMember?.photo?.height || "88px"};
	   border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius || {
        top: "50%",
        left: "50%",
        bottom: "50%",
        right: "50%"
      })};
	    color: ${teamMember?.name?.color};	
	   
	  }
		${tsbTeamMembersWrapperTheme7Sl} .team-ring img {
				width: ${teamMember?.photo?.width || "88px"};
				height: ${teamMember?.photo?.height || "88px"};
				border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius || {
        top: "50%",
        left: "50%",
        bottom: "50%",
        right: "50%"
      })};
				object-fit: ${teamMember?.photo?.object};
				
				}
		${tsbTeamMembersWrapperTheme7Sl} .team-ring input:checked + label img {
					transform: scale(${teamMember?.photo?.checkedScale || 2});
					}
					${tsbTeamMembersWrapperTheme7Sl} .team-ring input:checked + label svg {
						
						transform: translate(-50%, -50%) scale(${teamMember?.name?.textScale || 2.30}) rotate(${teamMember?.name?.rotate || 90}deg);
						
						}
		 ${tsbTeamMembersWrapperTheme7Sl} #center{
					width: ${teamMember?.teamRing?.width || '150px'};
					height: ${teamMember?.teamRing?.height || '150px'};
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.teamRing?.bg)}

					border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.teamRing?.radius)};
							}
		${tsbTeamMembersWrapperTheme8Sl}{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
	    margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
		}
			
	  ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.desktop},1fr);
	  column-gap: ${columnGap}; 
      row-gap: ${rowGap};
	  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
	 
	  }

   ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper img{
     width:${teamMember.memberPhoto?.width};
     height:${teamMember.memberPhoto?.height};
     object-fit: ${teamMember.memberPhoto?.objectFit}; 
	 filter: grayscale(${teamMember.memberPhoto?.grayScale});
	 

   }
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper:hover{
		 img {
          filter: grayscale(${teamMember.memberPhoto?.hoverGrayScale});
        }
		 }

		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .social-icon{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.padding)};
		 i{
		 color:${teamMember?.social?.color};
		 font-size:${teamMember?.social?.size}px;
		 }
		   &:hover i {
          color: ${teamMember?.social?.hoverColor} !important;
        }
		 }
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.padding)};
		 svg {
              width: ${teamMember?.icon?.size}px;
              height: ${teamMember?.icon?.size}px;
              fill: ${teamMember?.icon?.color};
              color: ${teamMember?.icon?.color};
    
            }
		}
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember:hover .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.hoverBg)}
		  h3,
        p,
        svg {
          color:${teamMember?.content?.hoverColor};
          fill:${teamMember?.content?.hoverColor};

        }
		}
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content .tsbTeamMemberName{
		 color:${teamMember?.name?.color};
		 
		}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content .tsbTeamMemberTitle{
		 color:${teamMember?.title?.color};
		 margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		}

        ${tsbTeamMembersWrapperTheme9Sl}{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		 width:${styles?.width};
		 margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};

		
		}
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		 padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
		grid-template-columns: repeat(${columns.desktop}, 1fr);
		column-gap:${columnGap};
		row-gap:${rowGap};
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper {
		height:${teamMember?.memberPhoto?.height};
		img{
		object-fit: ${teamMember?.memberPhoto?.objectFit};
		 filter: grayscale(${teamMember?.memberPhoto?.grayScale});
		}
		}
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper:hover{
		img{
		 filter: grayscale(${teamMember?.memberPhoto?.hoverGrayScale});
		  transform: scale(${teamMember?.memberPhoto?.hoverScale});
		}

		}
		 ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper .tsbTeamMember_social_wrapper{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}

		 }
        ${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link{
	    width: ${teamMember?.social?.width};
        height: ${teamMember?.social?.height};
        border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.radius)};
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.colors)}
		i{font-size:${teamMember?.social?.size}px;}
        
		}
		${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link:hover{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.hoverColors)}
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberName{
		color:${teamMember?.name?.color};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.margin)};
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberTitle{
		color:${teamMember?.title?.color};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		}

		${tsbTeamMembersWrapperTheme11Sl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		width:${styles?.width};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.padding)};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.desktop},1fr);
		  column-gap:${columnGap};
		  row-gap:${rowGap};
		   
		   .tsbTeamMember-card{
            ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
			border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.radius)};
			box-shadow:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.shadow)};
			.tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
			}
			.tsbTeamMemberBio{
			color:${teamMember?.bio?.color};
			}
			.tsbTeamMember-gradient-overlay {
			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}
			}
			.tsbTeamMember_view_btn{
			color:${teamMember?.btn?.color};
			gap:${teamMember?.btn?.gap}px;
			  svg {
         
          width: ${teamMember?.btn?.iconSize}px;
          height: ${teamMember?.btn?.iconSize}px;
        }
        span{
          width: ${teamMember?.btn?.iconSize}px;
          height: ${teamMember?.btn?.iconSize}px;
        }
			}
		.tsbTeamMember-img {
		height:${teamMember?.memberPhoto?.height};
		object-fit:${teamMember?.memberPhoto?.objectFit};
		
		}
			
		   }
		  }
		}


${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMember-card:hover{
 .tsbTeamMember-img {
        transform: scale(${teamMember?.memberPhoto?.hoverScale});
       
      }
}







		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}{
		${theme === "theme6" && dynamicAlignment}
		${tsbTeamMembersTeamMemberSl}:hover{
		transform: scale(${hoverOnScale ? "1" : "0.85"});
		}
		}

			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} {
				${tsbTeamMembersWrapperTheme11Sl}{
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.tablet},1fr);
		  }
		}

		${theme === "theme6" && dynamicAlignment}

			${tsbTeamMembersTeamContainerSl} {
				grid-template-columns: repeat(${columns?.tablet}, 1fr);


			}

			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer {
				grid-template-columns: repeat(${columns?.tablet}, 1fr);
			}
					${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.tablet};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.tablet};
		 filter: grayscale(${teamMember?.grayScale});
		 }
		}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.tablet},1fr);
	  }
	  ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns.tablet}, 1fr);
		}

			}
		${tsbTeamMembersWrapperTheme10Sl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.padding)};
		width:${styles?.width};
		}
		${tsbTeamMembersWrapperTheme10Sl}  {
		.tsbTeamMember_img_wrap{
		 max-width:${teamMember?.memberPhoto?.width};
            
		   .tsbTeamMember_img_shadow{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}

		   }

		  .tsbTeamMember_img_profile {
		  height:${teamMember?.memberPhoto?.height};
		  object-fit: ${teamMember?.memberPhoto?.objectFit};
		  }
		}
		
		  .tsbTeamMember_content_card{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
		  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.padding)};
		  border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.radius)};
		  box-shadow:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.shadow)};
		  
		  }

		  .team-row:hover .tsbTeamMember_img_shadow {
          transform: rotate(${teamMember?.content?.hoverRotate}deg);
        }
		  .tsbTeamMember_content_card_number_box{
		  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.serial?.colors)}
          width: ${teamMember?.serial?.width};
          height: ${teamMember?.serial?.height};
          border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.serial?.radius)};
		  }
		  .tsbTeamMemberTitle{
		  color:${teamMember?.title?.color};
		  margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		  }
		  .tsbTeamMember_content_card_stats_grid{
		   border-top:${teamMember?.states?.border?.top?.width} ${teamMember?.states?.border?.top?.style} ${teamMember?.states?.border?.top?.color};
		   border-right:${teamMember?.states?.border?.right?.width} ${teamMember?.states?.border?.right?.style} ${teamMember?.states?.border?.right?.color};
		   border-bottom:${teamMember?.states?.border?.bottom?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   border-left:${teamMember?.states?.border?.left?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.padding)};
		   margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.margin)};
		   
		  }
		   .tsbTeamMember_content_card_stat{
		   width:${teamMember?.states?.width};
		   height:${teamMember?.states?.height};
		   border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.radius)};
		   svg{
           width:${teamMember?.states?.size}px;
		   height:${teamMember?.states?.size}px;
		   }

		   }
		   .tsbTeamMember_content_card_stat_value{
		   color:${teamMember?.states?.value?.color};
		   }
		   .tsbTeamMember_content_card_stat_label{
		   color:${teamMember?.states?.label?.color};

		   }
		   .tsbTeamMember_content_card_stat_one{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.iconOne?.colors)}
		    svg{
			fill:${teamMember?.states?.iconOne?.colors?.color};
			
			}
		   }
			   .tsbTeamMember_content_card_stat_two{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.iconTwo?.colors)}
		    svg{
			fill:${teamMember?.states?.iconTwo?.colors?.color};
			
			}
		   }
			.tsbTeamMember_btn{
			 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.colors)}
			 padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.padding)};
			 border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.radius)};
			}
		}



		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}{
			${tsbTeamMembersWrapperTheme11Sl}{
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.mobile},1fr);
		  }
		}

		${tsbTeamMembersTeamContainerSl}{
		 grid-template-columns: repeat(${columns?.mobile},1fr);

		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns?.mobile}, 1fr);
		}

		 ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.mobile};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.mobile};
		 }
		}
		   ${members.map((card, index) => {
        return `
        ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamMemberContentContainer-${index}{
          padding-top: 0 !important;
        }
      `;
      }).join("\n")}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.mobile},1fr);
	  }
	  ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns.mobile}, 1fr);
		}

		}
		`).replace(/\s+/g, " ")
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme10.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme10.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme10 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  const {
    isShowSereal = true,
    isShowBgShape = true
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, members.map((member, index) => {
    const {
      label = "Connect on LinkedIn",
      link = "#"
    } = member?.btn || {};
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `team-row ${index % 2 === 1 ? "reverse" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_box"
    }, isShowBgShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_shadow"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "tsbTeamMember_img_profile",
      src: member?.photo?.url || "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: ""
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "profile-header"
    }, isShowSereal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_number_box"
    }, index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberName",
      tagName: "p",
      value: member?.name,
      placeholder: "name...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
      })
    }), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberName",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name || "")
      }
    }), ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberTitle",
      tagName: "p",
      value: member?.title,
      placeholder: "title...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "title")
      })
    }), !ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberTitle",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title || "")
      }
    }))), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stats_grid"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "stat-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_one"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: member?.state?.stateOne?.icon || "<svg width=\"32\" height=\"32\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\"><path d=\"M6 3v5a6 6 0 0 0 12 0V3\" /><path d=\"M6 3h12\" /><path d=\"M6 8h12\" /><path d=\"M9 21l3-3 3 3\" /></svg>"
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_value",
      tagName: "p",
      value: member?.state?.stateOne?.value,
      placeholder: "value...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateOne", "value")
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_label",
      tagName: "p",
      value: member?.state?.stateOne?.label,
      placeholder: "label...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateOne", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_value",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateOne?.value || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_label",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateOne?.label || "")
      }
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "stat-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_two"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: member?.state?.stateTwo?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>"
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_value",
      tagName: "p",
      value: member?.state?.stateTwo?.value,
      placeholder: "value...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateTwo", "value")
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_label",
      tagName: "p",
      value: member?.state?.stateTwo?.label,
      placeholder: "label...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateTwo", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_value",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateTwo?.value || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_label",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateTwo?.label || "")
      }
    }))))), ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "tsbTeamMember_btn_wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_btn",
      tagName: "span",
      value: label,
      placeholder: "btn text",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "btn", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      target: isLinkNewTab ? "_blank" : "_self",
      rel: "noreferrer",
      style: {
        textDecoration: "none",
        color: "inherit"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "tsbTeamMember_btn",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(label)
      }
    }))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme10);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme11.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme11.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme11 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = "false",
    isTitle = true
  } = attributes || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMemberWrapperTheme-11"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember-grid"
  }, members.map((member, index) => {
    const {
      name,
      title,
      photo,
      bio,
      btn
    } = member || {};
    const {
      label = "view profile",
      link = "#",
      icon = "<svg width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\" /><path d=\"M12 5l7 7-7 7\" /></svg>"
    } = btn || {};
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "tsbTeamMember-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-img-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "tsbTeamMember-img",
      src: photo?.url || "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: ""
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-gradient-overlay"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-text-box"
    }, isTitle && !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberTitle",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(title || "")
      }
    }), isTitle && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberTitle",
      value: title,
      tagName: "p",
      placeholder: "title...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "title")
      })
    }), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberName",
      value: name,
      placeholder: "name...",
      tagName: "h3",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
      })
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "tsbTeamMemberName",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name || "")
      }
    }), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberBio",
      value: bio,
      placeholder: "bio...",
      tagName: "p",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "bio")
      })
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberBio",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bio || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      style: {
        textDecoration: "none",
        border: "none",
        boxShadow: "none",
        outline: "none"
      },
      target: isLinkNewTab ? "_blank" : "_self",
      rel: "noreferrer",
      href: link,
      className: "tsbTeamMember_view_btn"
    }, label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: icon
      }
    })))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme11);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme5.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme5.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme5 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    isBio = true,
    options = {}
  } = attributes || {};
  const {
    showUserName = true
  } = options || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersWrapper "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "tsbTeamMembersTeamContainer"
  }, members?.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: index,
    className: `tsbTeamMembersTeamMember ${isTitle && "co-funder"}`,
    "data-role": member?.title
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMemberThumb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMemberThumbDescription"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " name ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    }),
    tagName: "h3",
    className: "tsbTeamMemberName",
    value: member?.name
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, ReusableRichText && isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    tagName: "span",
    placeholder: " bio...",
    className: "tsbTeamMemberBio",
    value: member?.bio,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "bio")
    })
  }), !ReusableRichText && isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tsbTeamMemberBio",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.bio)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), ReusableRichText && showUserName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " username...",
    className: "tsbTeamMemberUserName",
    value: member?.userName,
    tagName: "a",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "userName")
    })
  }), !ReusableRichText && showUserName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "tsbTeamMemberUserName",
    href: member?.userNameLink || "",
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.userName)
    }
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme5);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme6.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme6 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    options = {},
    isSocial = true
  } = attributes || {};
  const {
    isShowWaterMark = true,
    isShowShape = true,
    waterMark = "TEAM"
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, isShowWaterMark && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tsbTeamMembersBgWatermark"
  }, waterMark), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `tsbTeamMembersTeamMemberContentContainer-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `tsbTeamMembersTeamMember  ${isShowShape && "tsbTeamMembersTeamMemberShape"}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png",
    alt: "Antonia Moore"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMember-content"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " name ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    }),
    tagName: "h3",
    className: "tsbTeamMemberName",
    value: member?.name
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), isTitle && ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " title ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    }),
    tagName: "p",
    className: "tsbTeamMemberTitle",
    value: member?.title
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "tsbTeamMemberSocial"
  }, isSocial && member?.social?.map((social, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: social?.link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: social?.icon?.class
  }))))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme6);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme7.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme7.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme7 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {}
  } = attributes || {};
  const {
    isShowWaterMark = true,
    waterMark = "THE TEAM"
  } = options;
  const radiosRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const handleRadioClick = index => e => {
    e.preventDefault();
    const radio = radiosRef.current[index];
    setTimeout(() => {
      radio.checked = !radio.checked;
    }, 0);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersWrapperTheme-7"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "team-ring",
    style: {
      "--total": members.length,
      "--radius": `${Math.min(20, members.length) * 0.7}rem`,
      "--avatar-size": `${Math.max(40, 100 - members.length)}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "center"
  }, isShowWaterMark && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: waterMark,
    tagName: "span",
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "waterMark")
    })
  }), isShowWaterMark && !ReusableRichText && waterMark), members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "tsbInputTpye",
    type: "radio",
    name: "avatar",
    id: `r${index}`,
    hidden: true,
    ref: el => radiosRef.current[index] = el,
    onClick: handleRadioClick(index),
    key: index
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "avatar",
    htmlFor: `r${index}`,
    style: {
      "--i": index
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || 'https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-2.png',
    alt: member.name
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 300 300"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
    fill: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textPath", {
    xlinkHref: "#circlePath",
    style: {
      zIndex: 999999999999999
    }
  }, member.name, " - ", member.title))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "0",
    height: "0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "circlePath",
    d: "M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme7);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme8.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme8.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme8 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  const {
    isShowIcon = true,
    icon
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "tsbTeamMember"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_img_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: member?.name
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: member.social[0].link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer",
    className: "social-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: member.social[0].icon.class
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_content_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    href: "#",
    className: "tsbTeamMember_content"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    className: "tsbTeamMemberName",
    tagName: "h3",
    value: member?.name,
    placeholder: "name...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), !ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  }), ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    tagName: "p",
    className: "tsbTeamMemberTitle",
    value: member?.title,
    placeholder: "Title...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), isShowIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: {
      display: "block",
      textDecoration: "none",
      outline: "none",
      boxShadow: "none"
    },
    href: member?.icon,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme8);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme9.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme9.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme9 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members?.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "tsbTeamMember"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_img_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Sarah Chen"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_social_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_social"
  }, isSocial && member?.social?.map((social, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    style: {
      listStyle: "none"
    },
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "tsbMember_social_link",
    style: {
      outline: "none",
      textDecoration: "none"
    },
    href: social?.link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: social?.icon?.class
  }))))))), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: member?.name,
    className: "tsbTeamMemberName",
    placeholder: "name...",
    tagName: "div",
    onChange: v => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), isTitle && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: member?.title,
    className: "tsbTeamMemberTitle",
    tagName: "div",
    placeholder: "title...",
    onChange: V => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, V, index, "title")
    })
  }), isTitle && !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme9);

/***/ }),

/***/ "./src/blocks/team-section/block.json":
/*!********************************************!*\
  !*** ./src/blocks/team-section/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"tsb/team","title":"Team Section","version":"2.0.0","description":"Showcase team members in various layouts and designs.","category":"widgets","keywords":["team","members","team members"],"textdomain":"team-section","attributes":{"align":{"type":"string","default":"wide"},"members":{"type":"array","default":[{"paddingTop":"0px","userName":"@chriscoyier","userNameLink":"#","background":{"color":"#0000"},"border":{"radius":"3px"},"shadow":[],"photo":{"id":null,"url":"","alt":"","title":""},"photoBorder":{"radius":"50%"},"name":"Martin","nameColor":"#333","title":"Founder","titleColor":"#333","separator":{"width":"20%","height":"3px","color":"#777"},"bio":"I am a self-motivated and self-taught professional who likes to solve problems.","bioColor":"#333","social":[{"link":"#","icon":{"class":"fab fa-facebook-f"}},{"link":"#","icon":{"class":"fab fa-twitter"}},{"link":"#","icon":{"class":"fab fa-linkedin-in"}}],"socialIconColors":{"type":"object","default":{"color":"#fff","bg":"#146EF5"}},"icon":"#","state":{"stateOne":{"icon":"<svg width=\\"32\\" height=\\"32\\" stroke=\\"currentColor\\" fill=\\"none\\" stroke-width=\\"2\\" viewBox=\\"0 0 24 24\\"><path d=\\"M6 3v5a6 6 0 0 0 12 0V3\\" /><path d=\\"M6 3h12\\" /><path d=\\"M6 8h12\\" /><path d=\\"M9 21l3-3 3 3\\" /></svg>","value":"500+","label":"Designs"},"stateTwo":{"icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"lucide lucide-zap text-emerald-600\\"><polygon points=\\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\\"></polygon></svg>","value":"500+","label":"Brands"}},"btn":{"label":"Connect on LinkedIn","icon":"<svg width=\\"20\\" height=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path d=\\"M5 12h14\\" /><path d=\\"M12 5l7 7-7 7\\" /></svg>","link":"#"}},{"paddingTop":"100px","userName":"@quezo","userNameLink":"#","background":{"color":"#0000"},"border":{"radius":"3px"},"shadow":[],"photo":{"id":null,"url":"","alt":"","title":""},"photoBorder":{"radius":"50%"},"name":"Mary","nameColor":"#333","title":"Co-Founder","titleColor":"#333","separator":{"width":"20%","height":"3px","color":"#777"},"bio":"I am a self-motivated and self-taught professional who likes to solve problems.","bioColor":"#333","social":[{"link":"#","icon":{"class":"fab fa-facebook-f"}},{"link":"#","icon":{"class":"fab fa-twitter"}},{"link":"#","icon":{"class":"fab fa-linkedin-in"}}],"socialIconColors":{"type":"object","default":{"color":"#fff","bg":"#146EF5"}},"icon":"#","state":{"stateOne":{"icon":"<svg width=\\"32\\" height=\\"32\\" stroke=\\"currentColor\\" fill=\\"none\\" stroke-width=\\"2\\" viewBox=\\"0 0 24 24\\"><path d=\\"M6 3v5a6 6 0 0 0 12 0V3\\" /><path d=\\"M6 3h12\\" /><path d=\\"M6 8h12\\" /><path d=\\"M9 21l3-3 3 3\\" /></svg>","value":"500+","label":"Designs"},"stateTwo":{"icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"lucide lucide-zap text-emerald-600\\"><polygon points=\\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\\"></polygon></svg>","value":"500+","label":"Brands"}},"btn":{"label":"Connect on LinkedIn","icon":"<svg width=\\"20\\" height=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path d=\\"M5 12h14\\" /><path d=\\"M12 5l7 7-7 7\\" /></svg>","link":"#"}},{"paddingTop":"0px","userName":"@mariemosley","userNameLink":"#","background":{"color":"#0000"},"border":{"radius":"3px"},"shadow":[],"photo":{"id":null,"url":"","alt":"","title":""},"photoBorder":{"radius":"50%"},"name":"John Doe","nameColor":"#333","title":"CEO","titleColor":"#333","separator":{"width":"20%","height":"3px","color":"#777"},"bio":"I am a self-motivated and self-taught professional who likes to solve problems.","bioColor":"#333","social":[{"link":"#","icon":{"class":"fab fa-facebook-f"}},{"link":"#","icon":{"class":"fab fa-twitter"}},{"link":"#","icon":{"class":"fab fa-linkedin-in"}}],"socialIconColors":{"type":"object","default":{"color":"#fff","bg":"#146EF5"}},"icon":"#","state":{"stateOne":{"icon":"<svg width=\\"32\\" height=\\"32\\" stroke=\\"currentColor\\" fill=\\"none\\" stroke-width=\\"2\\" viewBox=\\"0 0 24 24\\"><path d=\\"M6 3v5a6 6 0 0 0 12 0V3\\" /><path d=\\"M6 3h12\\" /><path d=\\"M6 8h12\\" /><path d=\\"M9 21l3-3 3 3\\" /></svg>","value":"500+","label":"Designs"},"stateTwo":{"icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"lucide lucide-zap text-emerald-600\\"><polygon points=\\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\\"></polygon></svg>","value":"500+","label":"Brands"}},"btn":{"label":"Connect on LinkedIn","icon":"<svg width=\\"20\\" height=\\"20\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path d=\\"M5 12h14\\" /><path d=\\"M12 5l7 7-7 7\\" /></svg>","link":"#"}}]},"columns":{"type":"object","default":{"desktop":3,"tablet":2,"mobile":1}},"columnGap":{"type":"string","default":"30px"},"rowGap":{"type":"string","default":"30px"},"layout":{"type":"string","default":"vertical"},"theme":{"type":"string","default":"default"},"isLinkNewTab":{"type":"boolean","default":false},"textAlign":{"type":"string","default":"center"},"padding":{"type":"object","default":{"vertical":"50px","horizontal":"20px"}},"photoWidth":{"type":"string","default":"170px"},"photoMargin":{"type":"object","default":{"side":4,"bottom":"20px"}},"nameTypo":{"type":"object","default":{"fontSize":{"desktop":"20px","tablet":"18px","mobile":"16px"},"fontWeight":600}},"nameMargin":{"type":"object","default":{"side":4,"bottom":"10px"}},"isTitle":{"type":"boolean","default":true},"titleTypo":{"type":"object","default":{"fontSize":{"desktop":"16px"}}},"titleMargin":{"type":"object","default":{"side":4,"bottom":"10px"}},"isSep":{"type":"boolean","default":true},"sepMargin":{"type":"object","default":{"side":4,"bottom":"15px"}},"isBio":{"type":"boolean","default":true},"bioTypo":{"type":"object","default":{"fontSize":{"desktop":"15px"}}},"bioMargin":{"type":"object","default":{"side":4,"bottom":"15px"}},"isSocial":{"type":"boolean","default":true},"socialSize":{"type":"string","default":"22px"},"socialIconMargin":{"type":"object","default":{"side":2,"vertical":"10px","horizontal":"10px"}},"styles":{"type":"object","default":{"bg":{},"width":"100%","alignment":"center","padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"margin":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"teamMember":{"height":{"desktop":"100%","tablet":"100%","mobile":"300px"},"padding":{"top":"11px","left":"11px","bottom":"11px","right":"11px"},"shape":{"bg":{"type":"gradient","gradient":""}},"bg":{"type":"gradient","gradient":"linear-gradient(83deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)"},"evenItemBg":{"type":"gradient","gradient":"linear-gradient(277deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)"},"photo":{"bg":{"type":"gradient","gradient":"linear-gradient(274deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)"},"size":"100px","padding":{"top":"8px","left":"8px","bottom":"8px","right":"8px"},"radius":{"top":"4px","left":"4px","bottom":"4px","right":"4px"},"grayScale":1,"evenItemPhotoBg":{"type":"gradient","gradient":"linear-gradient(86deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)"}},"name":{"colors":{"color":"#ffdd40","bg":"#282a31"},"padding":{"top":"15px","right":"23px","bottom":"15px","left":"23px"},"radius":{"top":"4px","right":"4px","bottom":"4px","left":"4px"},"typo":{"fontFamily":"Default","fontCategory":"sans-serif","fontWeight":null,"isUploadFont":true,"fontSize":{"desktop":"20px","tablet":"18px","mobile":"14px"},"fontStyle":"normal","textTransform":"none","textDecoration":"none","lineHeight":"","letterSpace":"0px"}},"title":{"colors":{"color":"#2f313a","bg":"#ffdd40"},"padding":{"top":"6px","right":"12px","bottom":"8px","left":"12px"},"radius":{"top":"4px","right":"4px","bottom":"4px","left":"4px"},"typo":{"fontFamily":"Default","fontCategory":"sans-serif","fontWeight":600,"isUploadFont":true,"fontSize":{"desktop":"14px","tablet":"14px","mobile":"11px"},"fontStyle":"normal","textTransform":"none","textDecoration":"none","lineHeight":"","letterSpace":"0px"}},"bio":{"color":"black","typo":{"fontFamily":"Default","fontCategory":"sans-serif","fontWeight":null,"isUploadFont":true,"fontSize":{"desktop":"20px","tablet":"20px","mobile":"14px"},"fontStyle":"normal","textTransform":"none","textDecoration":"none","lineHeight":"","letterSpace":"0px"}},"userName":{"colors":{"color":"#ffdd40","bg":"#2f313a"},"padding":{"top":"2px","right":"8px","bottom":"6px","left":"8px"},"radius":{"top":"8px","right":"8px","bottom":"8px","left":"8px"},"typo":{"fontFamily":"Default","fontCategory":"sans-serif","fontWeight":null,"isUploadFont":true,"fontSize":{"desktop":"20px","tablet":"20px","mobile":"14px"},"fontStyle":"normal","textTransform":"none","textDecoration":"none","lineHeight":"","letterSpace":"0px"}}}}},"options":{"type":"object","default":{"showUserName":true,"hoverOnScale":true,"isShowWaterMark":true,"waterMark":"TEAM","isShowShape":true,"icon":"<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'><path d=\'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z\'/></svg>"}}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"preview":true,"columns":{"desktop":1,"tablet":1,"mobile":1}}},"editorScript":["file:./index.js","wp-api"],"editorStyle":"file:./index.css","style":["file:./view.css","fontAwesome"],"render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/blocks/team-section/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/team-section/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-section/utils/functions.js":
/*!****************************************************!*\
  !*** ./src/blocks/team-section/utils/functions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeURL: () => (/* binding */ sanitizeURL),
/* harmony export */   themeSwitch: () => (/* binding */ themeSwitch)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");

const themeSwitch = (theme = "default", attributes) => (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attributes, draft => {
  draft["theme"] = theme;
  switch (theme) {
    case "theme5":
      draft["isTitle"] = true;
      draft["isBio"] = true;
      draft["columnGap"] = "0px";
      draft["rowGap"] = "30px";
      draft["columns"] = {
        desktop: 1,
        tablet: 1,
        mobile: 1
      };
      draft["styles"] = {
        bg: {},
        width: "100%",
        alignment: "center",
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          padding: {
            top: "11px",
            left: "11px",
            bottom: "11px",
            right: "11px"
          },
          bg: {
            type: "gradient",
            gradient: "linear-gradient(83deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)"
          },
          evenItemBg: {
            type: "gradient",
            gradient: "linear-gradient(277deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)"
          },
          photo: {
            bg: {
              type: "gradient",
              gradient: "linear-gradient(274deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)"
            },
            size: "100px",
            padding: {
              top: "8px",
              left: "8px",
              bottom: "8px",
              right: "8px"
            },
            radius: {
              top: "4px",
              left: "4px",
              bottom: "4px",
              right: "4px"
            },
            grayScale: 1,
            evenItemPhotoBg: {
              type: "gradient",
              gradient: "linear-gradient(86deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)"
            }
          },
          name: {
            colors: {
              color: "#ffdd40",
              bg: "#282a31"
            },
            padding: {
              top: "15px",
              right: "23px",
              bottom: "15px",
              left: "23px"
            },
            radius: {
              top: "4px",
              right: "4px",
              bottom: "4px",
              left: "4px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "20px",
                tablet: "18px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          title: {
            colors: {
              color: "#2f313a",
              bg: "#ffdd40"
            },
            padding: {
              top: "6px",
              right: "12px",
              bottom: "8px",
              left: "12px"
            },
            radius: {
              top: "4px",
              right: "4px",
              bottom: "4px",
              left: "4px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 600,
              isUploadFont: true,
              fontSize: {
                desktop: "14px",
                tablet: "14px",
                mobile: "11px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          bio: {
            color: "black",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "20px",
                tablet: "20px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          userName: {
            colors: {
              color: "#ffdd40",
              bg: "#2f313a"
            },
            padding: {
              top: "2px",
              right: "8px",
              bottom: "6px",
              left: "8px"
            },
            radius: {
              top: "8px",
              right: "8px",
              bottom: "8px",
              left: "8px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "20px",
                tablet: "20px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          }
        }
      };
      draft["options"] = {
        showUserName: true,
        hoverOnScale: true
      };
      break;
    case "theme6":
      draft["isTitle"] = true;
      draft["isSocial"] = true;
      draft["columnGap"] = "0px";
      draft["rowGap"] = "0px";
      draft["columns"] = {
        desktop: 3,
        tablet: 2,
        mobile: 1
      };
      draft["styles"] = {
        bg: {},
        width: "94%",
        alignment: "center",
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          bg: {
            type: "gradient",
            gradient: "linear-gradient(180deg,#40424433, #080808E6)"
          },
          height: {
            desktop: "720px",
            tablet: "500px",
            mobile: "400px"
          },
          shape: {
            bg: {
              type: "gradient",
              gradient: "linear-gradient(270deg,#ff9472, #f2709c)"
            },
            width: "80px",
            height: "100px"
          },
          grayScale: 1,
          name: {
            color: "#FFFFFF",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "20px",
                tablet: "20px",
                mobile: "20px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            }
          },
          title: {
            color: "#ffffff",
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 400,
              isUploadFont: true,
              fontSize: {
                desktop: "18px",
                tablet: "18px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          icon: {
            size: 20,
            color: "#ffffff",
            hoverColor: "#f2709c",
            margin: {
              top: "5px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            gap: 10
          }
        },
        waterMark: {
          color: "#1f1f1f",
          typo: {
            fontFamily: "Default",
            fontCategory: "sans-serif",
            fontWeight: 800,
            isUploadFont: true,
            fontSize: {
              desktop: "306px",
              tablet: "136px",
              mobile: "96px"
            },
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: "",
            letterSpace: "0px"
          },
          translateY: "-49%"
        }
      };
      draft["options"] = {
        isShowWaterMark: true,
        isShowShape: true,
        waterMark: "TEAM"
      };
      break;
    case "theme7":
      draft["options"] = {
        waterMark: "THE TEAM",
        isShowWaterMark: true
      };
      draft["styles"] = {
        bg: {},
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          //  bg: {
          //   "type": "gradient",
          //   "gradient": "linear-gradient(180deg,#40424433, #080808E6)"
          // },
          //  height:{
          //   "desktop":"720px",
          //   "tablet":"500px",
          //   "mobile":"400px"

          // },
          //   shape:{
          //   "type": "gradient",
          //   "gradient": "linear-gradient(270deg,#ff9472, #f2709c)"

          // },
          // grayScale:1,
          name: {
            color: "#0ea5e9",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "18px",
                tablet: "18px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            rotate: 90,
            textScale: 2.3
          },
          teamRing: {
            width: "150px",
            height: "150px",
            bg: {
              bgType: "solid",
              bg: "#0284c7",
              color: "#ffffff"
            },
            radius: {
              top: "50%",
              left: "50%",
              bottom: "50%",
              right: "50%"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "18px",
                tablet: "18px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          // title: {
          //   "color": "#ffffff",
          //   margin: {
          //     "top": "0px",
          //     "right": "0px",
          //     "bottom": "0px",
          //     "left": "0px"
          //   },
          //   typo: {
          //     "fontFamily": "Default",
          //     "fontCategory": "sans-serif",
          //     "fontWeight": 400,
          //     "isUploadFont": true,
          //     "fontSize": {
          //       "desktop": "18px",
          //       "tablet": "18px",
          //       "mobile": "16px"
          //     },
          //     "fontStyle": "normal",
          //     "textTransform": "none",
          //     "textDecoration": "none",
          //     "lineHeight": "",
          //     "letterSpace": "0px"
          //   }
          // },
          //   icon:{
          //     size:20,
          //     color:'#ffffff',
          //     hoverColor:'#f2709c',
          //      margin: {
          //   "top": "5px",
          //   "right": "0px",
          //   "bottom": "0px",
          //   "left": "0px"
          // },
          // gap:10
          //   }
          photo: {
            width: "88px",
            height: "88px",
            radius: {
              top: "50%",
              left: "50%",
              bottom: "50%",
              right: "50%"
            },
            object: "cover",
            checkedScale: 2
          }
        }
      };
      break;
    case "theme8":
      draft["isTitle"] = true;
      draft["isSocial"] = true;
      draft["columnGap"] = "32px";
      draft["rowGap"] = "32px";
      draft["columns"] = {
        desktop: 3,
        tablet: 2,
        mobile: 1
      };
      draft["isLinkNewTab"] = false;
      draft["styles"] = {
        bg: {},
        width: "100%",
        alignment: "center",
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          name: {
            color: "#111",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 800,
              isUploadFont: true,
              fontSize: {
                desktop: "18px",
                tablet: "18px",
                mobile: "18px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            margin: {
              top: "0px",
              right: "0px",
              bottom: "5px",
              left: "0px"
            },
            padding: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            }
          },
          title: {
            color: "#454545",
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 400,
              isUploadFont: true,
              fontSize: {
                desktop: "14px",
                tablet: "14px",
                mobile: "14px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          icon: {
            size: 60,
            color: "#003ef5",
            hoverColor: "#f2709c",
            margin: {
              top: "5px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            gap: 10
          },
          memberPhoto: {
            width: "336px",
            height: "336px",
            objectFit: "cover",
            grayScale: 100,
            hoverGrayScale: 0
          },
          social: {
            bg: {
              type: "solid",
              color: "#111"
            },
            color: "#fff",
            hoverColor: "#003ef5",
            padding: {
              top: "16px",
              bottom: "16px",
              right: "28px",
              left: "28px"
            },
            size: 22
          },
          content: {
            bg: {
              type: "solid",
              color: "#fff"
            },
            hoverBg: {
              type: "solid",
              color: "#003ef5"
            },
            hoverColor: "#fff",
            padding: {
              top: "72px",
              right: "32px",
              bottom: "0px",
              left: "51px"
            },
            title: {
              color: "#111",
              type: {}
            }
          }
        }
      };
      draft["options"] = {
        link: "#",
        isShowIcon: true,
        icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'/></svg>"
      };
      break;
    case "theme9":
      draft["isLinkNewTab"] = false;
      draft["isTitle"] = true;
      draft["isSocial"] = true;
      draft["columnGap"] = "32px";
      draft["rowGap"] = "32px";
      draft["columns"] = {
        desktop: 3,
        tablet: 2,
        mobile: 1
      };
      draft["styles"] = {
        bg: {},
        width: "100%",
        alignment: "center",
        padding: {
          top: "80px",
          right: "20px",
          bottom: "80px",
          left: "20px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          memberPhoto: {
            width: "336px",
            height: "430px",
            objectFit: "cover",
            grayScale: 100,
            hoverGrayScale: 0,
            bg: {
              type: "gradient",
              gradient: "linear-gradient(to top, rgba(15, 23, 42, .8), transparent)"
            },
            hoverScale: 1.1
          },
          social: {
            colors: {
              color: "#0f172a",
              bg: "#ffffff",
              bgType: "solid"
            },
            hoverColors: {
              color: "#fff",
              bg: "#0f172a",
              bgType: "solid"
            },
            width: "42px",
            height: "42px",
            size: 22,
            radius: {
              top: "50%",
              left: "50%",
              right: "50%",
              bottom: "50%"
            }
          },
          name: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 800,
              isUploadFont: true,
              fontSize: {
                desktop: "22px",
                tablet: "22px",
                mobile: "22px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#0f172a",
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            }
          },
          title: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 400,
              isUploadFont: true,
              fontSize: {
                desktop: "16px",
                tablet: "16px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#475569",
            margin: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px"
            }
          }
        }
      };
      break;
    case "theme10":
      draft["isLinkNewTab"] = false;
      draft["isTitle"] = true;
      draft["isSocial"] = true;
      draft["options"] = {
        link: "#",
        isShowIcon: true,
        icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'/></svg>",
        isShowSereal: true,
        isShowBgShape: true
      };
      draft["styles"] = {
        bg: {},
        width: "100%",
        alignment: "center",
        padding: {
          top: "80px",
          right: "20px",
          bottom: "80px",
          left: "20px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          memberPhoto: {
            width: "420px",
            height: "350px",
            objectFit: "cover",
            grayScale: 100,
            hoverGrayScale: 0,
            bg: {
              type: "gradient",
              gradient: "linear-gradient(to right bottom, rgb(15, 23, 42), rgb(51, 65, 85))"
            },
            hoverScale: 1.1
          },
          social: {
            colors: {
              color: "#0f172a",
              bg: "#ffffff",
              bgType: "solid"
            },
            hoverColors: {
              color: "#fff",
              bg: "#0f172a",
              bgType: "solid"
            },
            width: "42px",
            height: "42px",
            size: 22,
            radius: {
              top: "50%",
              left: "50%",
              right: "50%",
              bottom: "50%"
            }
          },
          name: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 800,
              isUploadFont: true,
              fontSize: {
                desktop: "22px",
                tablet: "22px",
                mobile: "22px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#0f172a",
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            }
          },
          title: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 400,
              isUploadFont: true,
              fontSize: {
                desktop: "16px",
                tablet: "16px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#475569",
            margin: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px"
            }
          },
          content: {
            bg: {
              type: "solid",
              color: "#fff"
            },
            padding: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px"
            },
            radius: {
              top: "24px",
              right: "24px",
              bottom: "24px",
              left: "24px"
            },
            shadow: [{
              hOffset: "0px",
              vOffset: "12px",
              blur: "30px",
              spreed: "0px",
              color: "rgba(0, 0, 0, 0.12)",
              isInset: false
            }],
            hoverRotate: 6
          },
          serial: {
            colors: {
              color: "#fff",
              type: "solid",
              bg: "#0f172a"
            },
            width: "50px",
            height: "50px",
            radius: {
              top: "50%",
              right: "50%",
              bottom: "50%",
              left: "50%"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 700,
              isUploadFont: true,
              fontSize: {
                desktop: "20px",
                tablet: "20px",
                mobile: "20px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          states: {
            border: {
              top: {
                width: "1px",
                style: "solid",
                color: "#e2e8f0"
              },
              right: {
                width: "0px",
                style: "",
                color: ""
              },
              bottom: {
                width: "0px",
                style: "",
                color: ""
              },
              left: {
                width: "0px",
                style: "",
                color: ""
              }
            },
            padding: {
              top: "24px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            margin: {
              top: "24px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            },
            value: {
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 700,
                isUploadFont: true,
                fontSize: {
                  desktop: "28px",
                  tablet: "28px",
                  mobile: "28px"
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px"
              },
              color: "#000"
            },
            label: {
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px"
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px"
              },
              color: "#475569"
            },
            width: "60px",
            height: "60px",
            iconOne: {
              colors: {
                color: "#2563eb",
                bgType: "solid",
                bg: "#eff6ff"
              }
            },
            iconTwo: {
              colors: {
                color: "#059669",
                bgType: "solid",
                bg: "#ecfdf5"
              }
            },
            size: 32,
            radius: {
              top: "20px",
              right: "20px",
              bottom: "20px",
              left: "20px"
            }
          },
          btn: {
            colors: {
              color: "#fff",
              bgType: "solid",
              bg: "#0f172a"
            },
            padding: {
              top: "16px",
              left: "0px",
              bottom: "16px",
              right: "0px"
            },
            radius: {
              top: "14px",
              left: "14px",
              bottom: "14px",
              right: "14px"
            },
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 600,
              isUploadFont: true,
              fontSize: {
                desktop: "16px",
                tablet: "16px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          }
        }
      };
      break;
    case "theme11":
      draft["isLinkNewTab"] = false;
      draft["isTitle"] = true;
      draft["isSocial"] = true;
      draft["columnGap"] = "24px";
      draft["rowGap"] = "24px";
      draft["columns"] = {
        desktop: 2,
        tablet: 1,
        mobile: 1
      };
      draft["styles"] = {
        bg: {},
        width: "1200px",
        alignment: "center",
        padding: {
          top: "80px",
          right: "20px",
          bottom: "80px",
          left: "20px"
        },
        margin: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        teamMember: {
          memberPhoto: {
            // width: "420px",
            height: "100%",
            objectFit: "cover",
            // grayScale: 100,
            hoverGrayScale: 0,
            bg: {
              type: "gradient",
              gradient: "linear-gradient(to right, transparent, white)"
            },
            hoverScale: 1.1
          },
          bio: {
            color: "#475569",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: null,
              isUploadFont: true,
              fontSize: {
                desktop: "16px",
                tablet: "16px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            }
          },
          name: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 700,
              isUploadFont: true,
              fontSize: {
                desktop: "28px",
                tablet: "28px",
                mobile: "28px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#0f172a",
            margin: {
              top: "10px",
              right: "0px",
              bottom: "10px",
              left: "0px"
            }
          },
          title: {
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 6000,
              isUploadFont: true,
              fontSize: {
                desktop: "13px",
                tablet: "13px",
                mobile: "13px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            color: "#2563eb",
            margin: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px"
            }
          },
          content: {
            bg: {
              type: "solid",
              color: "#fff"
            },
            padding: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px"
            },
            radius: {
              top: "24px",
              right: "24px",
              bottom: "24px",
              left: "24px"
            },
            shadow: [{
              hOffset: "0px",
              vOffset: "12px",
              blur: "30px",
              spreed: "0px",
              color: "rgba(0, 0, 0, 0.12)",
              isInset: false
            }],
            hoverRotate: 6
          },
          // serial:{
          //   colors:{color:"#fff",type:"solid",bg:"#0f172a"},
          //   width:"50px",
          //   height:"50px",
          //   radius:{
          //     top:"50%",
          //     right:"50%",
          //     bottom:"50%",
          //     left:"50%",
          //   },
          //   typo: {
          //     fontFamily: "Default",
          //     fontCategory: "sans-serif",
          //     fontWeight: 700,
          //     isUploadFont: true,
          //     fontSize: {
          //       desktop: "20px",
          //       tablet: "20px",
          //       mobile: "20px",
          //     },
          //     fontStyle: "normal",
          //     textTransform: "none",
          //     textDecoration: "none",
          //     lineHeight: "",
          //     letterSpace: "0px",
          //   }

          // },
          // states:{
          //   border:{
          //     top: {
          //       width: "1px",
          //       style: "solid",
          //       color: "#e2e8f0"
          //     },
          //     right: {
          //       width: "0px",
          //       style: "",
          //       color: ""
          //     },
          //     bottom: {
          //       width: "0px",
          //       style: "",
          //       color: ""
          //     },
          //     left: {
          //       width: "0px",
          //       style: "",
          //       color: ""
          //     }
          //   },
          //   padding:{
          //     top:"24px",
          //     right:"0px",
          //     bottom:"0px",
          //     left:"0px",
          //   },
          //    margin:{
          //     top:"24px",
          //     right:"0px",
          //     bottom:"0px",
          //     left:"0px",
          //   },
          //   value:{
          //     typo:{
          //     fontFamily: "Default",
          //     fontCategory: "sans-serif",
          //     fontWeight: 700,
          //     isUploadFont: true,
          //     fontSize: {
          //       desktop: "28px",
          //       tablet: "28px",
          //       mobile: "28px",
          //     },
          //     fontStyle: "normal",
          //     textTransform: "none",
          //     textDecoration: "none",
          //     lineHeight: "",
          //     letterSpace: "0px",
          //   },
          //   color:"#000",
          //   },
          //      label:{
          //     typo:{
          //     fontFamily: "Default",
          //     fontCategory: "sans-serif",
          //     fontWeight: null,
          //     isUploadFont: true,
          //     fontSize: {
          //       desktop: "16px",
          //       tablet: "16px",
          //       mobile: "16px",
          //     },
          //     fontStyle: "normal",
          //     textTransform: "none",
          //     textDecoration: "none",
          //     lineHeight: "",
          //     letterSpace: "0px",
          //   },
          //   color:"#475569",
          //   },
          //   width:"60px",
          //   height:"60px",
          //   iconOne:{
          //     colors:{color:"#2563eb",bgType:"solid",bg:"#eff6ff"}
          //   },

          //    iconTwo:{
          //     colors:{color:"#059669",bgType:"solid",bg:"#ecfdf5"}
          //   },
          //   size:32,
          //   radius:{
          //     top:"20px",
          //     right:"20px",
          //     bottom:"20px",
          //     left:"20px",
          //   }
          // },
          btn: {
            color: "#0f172a",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 600,
              isUploadFont: true,
              fontSize: {
                desktop: "16px",
                tablet: "16px",
                mobile: "16px"
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px"
            },
            gap: 8,
            iconSize: 20
          }
        }
      };
      break;
  }
});
const sanitizeURL = inputUrl => {
  if (inputUrl === null || inputUrl === undefined) return null;
  const raw = String(inputUrl).trim();
  if (!raw) return null;

  // Allow ONLY site-relative URLs like "/about"
  if (raw.startsWith('/') && !raw.startsWith('//')) {
    return raw;
  }
  try {
    // Use base to parse consistently
    const url = new URL(raw, window.location.origin);

    // Allowlist protocols (block javascript:, data:, vbscript:, file:, etc.)
    const allowed = new Set(['http:', 'https:']);
    if (!allowed.has(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
};

/***/ }),

/***/ "./src/blocks/team-section/utils/icons.js":
/*!************************************************!*\
  !*** ./src/blocks/team-section/utils/icons.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   horizontalLineIcon: () => (/* binding */ horizontalLineIcon),
/* harmony export */   teamMembersIcon: () => (/* binding */ teamMembersIcon),
/* harmony export */   verticalLineIcon: () => (/* binding */ verticalLineIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const teamMembersIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "bPlBlockIcon",
  viewBox: "0 0 505.4 505.4"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6 c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2 c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8 c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6 C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7 c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35 c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0 C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7 c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95 c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1 s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z"
}));
const verticalLineIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 14.707 14.707"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "6.275",
  y: "0",
  width: "2.158",
  height: "14.707"
}));
const horizontalLineIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 357 357"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M357,204H0v-51h357V204z"
}));

/***/ }),

/***/ "./src/blocks/team-section/utils/options.js":
/*!**************************************************!*\
  !*** ./src/blocks/team-section/utils/options.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aligns: () => (/* binding */ aligns),
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs),
/* harmony export */   layouts: () => (/* binding */ layouts),
/* harmony export */   themes: () => (/* binding */ themes),
/* harmony export */   toolTipPresets: () => (/* binding */ toolTipPresets)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/team-section/utils/icons.js");


const themes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'team-section'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 1', 'team-section'),
  value: 'theme1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 2', 'team-section'),
  value: 'theme2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 3', 'team-section'),
  value: 'theme3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 4', 'team-section'),
  value: 'theme4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 5', 'team-section'),
  value: 'theme5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 6', 'team-section'),
  value: 'theme6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 7', 'team-section'),
  value: 'theme7'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 8', 'team-section'),
  value: 'theme8'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 9', 'team-section'),
  value: 'theme9'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 10', 'team-section'),
  value: 'theme10'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme 11', 'team-section'),
  value: 'theme11'
}];
const layouts = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical', 'team-section'),
  value: 'vertical',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.verticalLineIcon
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'team-section'),
  value: 'horizontal',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.horizontalLineIcon
}];
const aligns = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'team-section'),
  value: 'left',
  icon: 'editor-alignleft'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'team-section'),
  value: 'center',
  icon: 'editor-aligncenter'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'team-section'),
  value: 'right',
  icon: 'editor-alignright'
}];
const generalStyleTabs = [{
  name: 'general',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'team-section')
}, {
  name: 'style',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'team-section')
}];
const toolTipPresets = [{
  label: "Default",
  value: "default",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopydefault.png",
  height: "auto",
  width: "160px",
  isPro: false
}, {
  label: "Theme-1",
  value: "theme1",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme1.png",
  height: "auto",
  width: "160px",
  isPro: false
}, {
  label: "Theme-2",
  value: "theme2",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme2.png",
  height: "auto",
  width: "160px",
  isPro: false
}, {
  label: "Theme-3",
  value: "theme3",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme3.png",
  height: "auto",
  width: "160px",
  isPro: false
}, {
  label: "Theme-4",
  value: "theme4",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme4.png",
  height: "auto",
  width: "160px",
  isPro: false
}, {
  label: "Theme-5",
  value: "theme5",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme5.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-6",
  value: "theme6",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme6.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-7",
  value: "theme7",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme7.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-8",
  value: "theme8",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme8.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-9",
  value: "theme9",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme8.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-10",
  value: "theme10",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme8.png",
  height: "auto",
  width: "160px",
  isPro: true
}, {
  label: "Theme-11",
  value: "theme11",
  //   img: "https://templates.bplugins.com/wp-content/uploads/2025/09/clicktocopytheme8.png",
  height: "auto",
  width: "160px",
  isPro: true
}];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/blocks/team-section/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/team-section/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/team-section/block.json");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/blocks/team-section/Components/Backend/Edit.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/icons */ "./src/blocks/team-section/utils/icons.js");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_6__.teamMembersIcon,
  // Build in Functions
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map