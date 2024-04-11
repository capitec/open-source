import{a as p,b as T,c as t,d as f,e as u}from"./chunk.P6J7VJ5B.js";import{f as n,g as l}from"./chunk.UDCULUBW.js";import{m as i,p as o}from"./chunk.BF43NN75.js";i();o();var x=f(class extends u{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!p(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===l)return r;let s=e.element,a=e.name;if(e.type===t.PROPERTY){if(r===s[a])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===s.hasAttribute(a))return n}else if(e.type===t.ATTRIBUTE&&s.getAttribute(a)===r+"")return n;return T(e),r}});i();o();export{x as a};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.KGCS7GKM.js.map
