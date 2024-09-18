import{a as T,b as l,c as i,d as f,e as u}from"./chunk.ZTHUBORR.js";import{f as r,g as p}from"./chunk.63YMDT6M.js";import{m as n,p as o}from"./chunk.BF43NN75.js";n();o();var x=f(class extends u{constructor(e){if(super(e),e.type!==i.PROPERTY&&e.type!==i.ATTRIBUTE&&e.type!==i.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!T(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r||t===p)return t;let s=e.element,a=e.name;if(e.type===i.PROPERTY){if(t===s[a])return r}else if(e.type===i.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(a))return r}else if(e.type===i.ATTRIBUTE&&s.getAttribute(a)===t+"")return r;return l(e),t}});n();o();export{x as a};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.APNKRDWQ.js.map
