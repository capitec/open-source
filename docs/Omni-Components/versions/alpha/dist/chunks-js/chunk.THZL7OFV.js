import{a as t,b as p,c as T,d as f,e as u}from"./chunk.H227IO2J.js";import{d as n,e as l}from"./chunk.CDDA2I3H.js";import{l as i,o}from"./chunk.2ZZQBHAA.js";i();o();var x=p(class extends T{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===l)return r;let s=e.element,a=e.name;if(e.type===t.PROPERTY){if(r===s[a])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===s.hasAttribute(a))return n}else if(e.type===t.ATTRIBUTE&&s.getAttribute(a)===r+"")return n;return u(e),r}});i();o();export{x as a};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.THZL7OFV.js.map
