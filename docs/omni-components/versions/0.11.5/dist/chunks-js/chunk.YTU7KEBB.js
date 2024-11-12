import{c as d,d as l,e as p}from"./chunk.ZTHUBORR.js";import{f as c}from"./chunk.63YMDT6M.js";import{m as r,p as i}from"./chunk.BF43NN75.js";r();i();var R=l(class extends p{constructor(s){var e;if(super(s),s.type!==d.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var o,a;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!((o=this.nt)!=null&&o.has(t))&&this.st.add(t);return this.render(e)}let n=s.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let h=!!e[t];h===this.st.has(t)||((a=this.nt)==null?void 0:a.has(t))||(h?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return c}});r();i();export{R as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk.YTU7KEBB.js.map
