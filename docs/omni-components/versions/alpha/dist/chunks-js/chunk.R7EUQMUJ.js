import{a as d,b as l,c as p}from"./chunk.E2CUUU4Y.js";import{f as c}from"./chunk.UDCULUBW.js";import{m as i,p as r}from"./chunk.BF43NN75.js";i();r();var E=l(class extends p{constructor(s){var e;if(super(s),s.type!==d.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var o,a;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!((o=this.st)!=null&&o.has(t))&&this.it.add(t);return this.render(e)}let n=s.element.classList;for(let t of this.it)t in e||(n.remove(t),this.it.delete(t));for(let t in e){let h=!!e[t];h===this.it.has(t)||((a=this.st)==null?void 0:a.has(t))||(h?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return c}});i();r();export{E as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.R7EUQMUJ.js.map
