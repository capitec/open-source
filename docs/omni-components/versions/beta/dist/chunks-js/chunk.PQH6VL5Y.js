import{c as l,d as c,e as v}from"./chunk.FMKVMQ43.js";import{d as h}from"./chunk.6H2RNHNO.js";import{m as s,p as r}from"./chunk.BF43NN75.js";s();r();var E=c(class extends v{constructor(e){var i;if(super(e),e.type!==l.ATTRIBUTE||e.name!=="class"||((i=e.strings)===null||i===void 0?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(i=>e[i]).join(" ")+" "}update(e,[i]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in i)i[t]&&!(!((n=this.nt)===null||n===void 0)&&n.has(t))&&this.it.add(t);return this.render(i)}let a=e.element.classList;this.it.forEach(t=>{t in i||(a.remove(t),this.it.delete(t))});for(let t in i){let d=!!i[t];d===this.it.has(t)||((o=this.nt)===null||o===void 0?void 0:o.has(t))||(d?(a.add(t),this.it.add(t)):(a.remove(t),this.it.delete(t)))}return h}});s();r();export{E as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.PQH6VL5Y.js.map
