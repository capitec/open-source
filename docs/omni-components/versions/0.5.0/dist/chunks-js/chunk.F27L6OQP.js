import{a as l,b as c,c as v}from"./chunk.7YN44Q4N.js";import{c as h}from"./chunk.CIM3NS6G.js";import{l as i,o as n}from"./chunk.2ZZQBHAA.js";i();n();var E=c(class extends v{constructor(s){var e;if(super(s),s.type!==l.ATTRIBUTE||s.name!=="class"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var r,o;if(this.nt===void 0){this.nt=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!(!((r=this.st)===null||r===void 0)&&r.has(t))&&this.nt.add(t);return this.render(e)}let a=s.element.classList;this.nt.forEach(t=>{t in e||(a.remove(t),this.nt.delete(t))});for(let t in e){let d=!!e[t];d===this.nt.has(t)||((o=this.st)===null||o===void 0?void 0:o.has(t))||(d?(a.add(t),this.nt.add(t)):(a.remove(t),this.nt.delete(t)))}return h}});i();n();export{E as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.F27L6OQP.js.map
