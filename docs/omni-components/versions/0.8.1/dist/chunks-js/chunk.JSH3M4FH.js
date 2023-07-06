import{a as N}from"./chunk.FVJIJQ42.js";import{a as S,b as E,f as $,k,m as P,p as I}from"./chunk.BF43NN75.js";var z=$(f=>{"use strict";P();I();Object.defineProperty(f,"__esModule",{value:!0});f.spyOn=f.replaceProperty=f.mocked=f.fn=f.ModuleMocker=void 0;function v(){let l=N();return v=function(){return l},l}var O="mockConstructor",R=/[\s!-/:-@[-`{-~]/,j=new RegExp(R.source,"g"),x=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function G(l,e){let t;switch(e){case 1:t=function(o){return l.apply(this,arguments)};break;case 2:t=function(o,r){return l.apply(this,arguments)};break;case 3:t=function(o,r,s){return l.apply(this,arguments)};break;case 4:t=function(o,r,s,c){return l.apply(this,arguments)};break;case 5:t=function(o,r,s,c,n){return l.apply(this,arguments)};break;case 6:t=function(o,r,s,c,n,a){return l.apply(this,arguments)};break;case 7:t=function(o,r,s,c,n,a,i){return l.apply(this,arguments)};break;case 8:t=function(o,r,s,c,n,a,i,u){return l.apply(this,arguments)};break;case 9:t=function(o,r,s,c,n,a,i,u,p){return l.apply(this,arguments)};break;default:t=function(){return l.apply(this,arguments)};break}return t}function b(l){return Object.prototype.toString.apply(l).slice(8,-1)}function V(l){let e=b(l);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"||e==="AsyncGeneratorFunction"?"function":Array.isArray(l)?"array":e==="Object"||e==="Module"?"object":e==="Number"||e==="String"||e==="Boolean"||e==="Symbol"?"constant":e==="Map"||e==="WeakMap"||e==="Set"?"collection":e==="RegExp"?"regexp":l===void 0?"undefined":l===null?"null":null}function A(l,e){if(e==="arguments"||e==="caller"||e==="callee"||e==="name"||e==="length"){let t=b(l);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"||t==="AsyncGeneratorFunction"}return e==="source"||e==="global"||e==="ignoreCase"||e==="multiline"?b(l)==="RegExp":!1}var d=class{constructor(e){k(this,"_environmentGlobal");k(this,"_mockState");k(this,"_mockConfigRegistry");k(this,"_spyState");k(this,"_invocationCallCounter");k(this,"_originalFn");this._environmentGlobal=e,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1,this._originalFn=new WeakMap}_getSlots(e){if(!e)return[];let t=new Set,o=this._environmentGlobal.Object.prototype,r=this._environmentGlobal.Function.prototype,s=this._environmentGlobal.RegExp.prototype,c=Object.prototype,n=Function.prototype,a=RegExp.prototype;for(;e!=null&&e!==o&&e!==r&&e!==s&&e!==c&&e!==n&&e!==a;){let i=Object.getOwnPropertyNames(e);for(let u=0;u<i.length;u++){let p=i[u];if(!A(e,p)){let m=Object.getOwnPropertyDescriptor(e,p);(m!==void 0&&!m.get||e.__esModule)&&t.add(p)}}e=Object.getPrototypeOf(e)}return Array.from(t)}_ensureMockConfig(e){let t=this._mockConfigRegistry.get(e);return t||(t=this._defaultMockConfig(),this._mockConfigRegistry.set(e,t)),t}_ensureMockState(e){let t=this._mockState.get(e);return t||(t=this._defaultMockState(),this._mockState.set(e,t)),t.calls.length>0&&(t.lastCall=t.calls[t.calls.length-1]),t}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],contexts:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(e,t){if(e.type==="object")return new this._environmentGlobal.Object;if(e.type==="array")return new this._environmentGlobal.Array;if(e.type==="regexp")return new this._environmentGlobal.RegExp("");if(e.type==="constant"||e.type==="collection"||e.type==="null"||e.type==="undefined")return e.value;if(e.type==="function"){let a=function(i,u){let p=this._ensureMockConfig(n),m=p.mockImpl;p.mockImpl=i;let _=u();if((0,v().isPromise)(_))return _.then(()=>{p.mockImpl=m});p.mockImpl=m},o=e.members&&e.members.prototype&&e.members.prototype.members||{},r=this._getSlots(o),s=this,c=G(function(...i){let u=s._ensureMockState(n),p=s._ensureMockConfig(n);u.instances.push(this),u.contexts.push(this),u.calls.push(i);let m={type:"incomplete",value:void 0};u.results.push(m),u.invocationCallOrder.push(s._invocationCallCounter++);let _,M,w=!1;try{_=(()=>{if(this instanceof n){r.forEach(y=>{if(o[y].type==="function"){let F=this[y];this[y]=s.generateFromMetadata(o[y]),this[y]._protoImpl=F}});let C=p.specificMockImpls.length?p.specificMockImpls.shift():p.mockImpl;return C&&C.apply(this,arguments)}let h=p.specificMockImpls.shift();if(h===void 0&&(h=p.mockImpl),h)return h.apply(this,arguments);if(n._protoImpl)return n._protoImpl.apply(this,arguments)})()}catch(h){throw M=h,w=!0,h}finally{m.type=w?"throw":"return",m.value=w?M:_}return _},e.length||0),n=this._createMockFunction(e,c);return n._isMockFunction=!0,n.getMockImplementation=()=>this._ensureMockConfig(n).mockImpl,typeof t=="function"&&this._spyState.add(t),this._mockState.set(n,this._defaultMockState()),this._mockConfigRegistry.set(n,this._defaultMockConfig()),Object.defineProperty(n,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(n),set:i=>this._mockState.set(n,i)}),n.mockClear=()=>(this._mockState.delete(n),n),n.mockReset=()=>{n.mockClear();let i=this._originalFn.get(n),u=E(S({},this._defaultMockConfig()),{mockImpl:i});return this._mockConfigRegistry.set(n,u),n},n.mockRestore=()=>(n.mockReset(),t?t():void 0),n.mockReturnValueOnce=i=>n.mockImplementationOnce(()=>i),n.mockResolvedValueOnce=i=>n.mockImplementationOnce(()=>this._environmentGlobal.Promise.resolve(i)),n.mockRejectedValueOnce=i=>n.mockImplementationOnce(()=>this._environmentGlobal.Promise.reject(i)),n.mockReturnValue=i=>n.mockImplementation(()=>i),n.mockResolvedValue=i=>n.mockImplementation(()=>this._environmentGlobal.Promise.resolve(i)),n.mockRejectedValue=i=>n.mockImplementation(()=>this._environmentGlobal.Promise.reject(i)),n.mockImplementationOnce=i=>(this._ensureMockConfig(n).specificMockImpls.push(i),n),n.withImplementation=a.bind(this),n.mockImplementation=i=>{let u=this._ensureMockConfig(n);return u.mockImpl=i,n},n.mockReturnThis=()=>n.mockImplementation(function(){return this}),n.mockName=i=>{if(i){let u=this._ensureMockConfig(n);u.mockName=i}return n},n.getMockName=()=>this._ensureMockConfig(n).mockName||"jest.fn()",e.mockImpl&&n.mockImplementation(e.mockImpl),n}else{let o=e.type||"undefined type";throw new Error(`Unrecognized type ${o}`)}}_createMockFunction(e,t){let o=e.name;if(!o)return t;let r="bound ",s="";if(o.startsWith(r))do o=o.substring(r.length),s=".bind(null)";while(o&&o.startsWith(r));if(o===O)return t;(x.has(o)||/^\d/.test(o))&&(o=`$${o}`),R.test(o)&&(o=o.replace(j,"$"));let c=`return function ${o}() {  return ${O}.apply(this,arguments);}${s}`;return new this._environmentGlobal.Function(O,c)(t)}_generateMock(e,t,o){let r=this._makeComponent(e);return e.refID!=null&&(o[e.refID]=r),this._getSlots(e.members).forEach(s=>{let c=e.members&&e.members[s]||{};c.ref!=null?t.push(function(n){return()=>r[s]=o[n]}(c.ref)):r[s]=this._generateMock(c,t,o)}),e.type!=="undefined"&&e.type!=="null"&&r.prototype&&typeof r.prototype=="object"&&(r.prototype.constructor=r),r}_findReplacedProperty(e,t){for(let o of this._spyState)if("object"in o&&"property"in o&&o.object===e&&o.property===t)return o}generateFromMetadata(e){let t=[],o={},r=this._generateMock(e,t,o);return t.forEach(s=>s()),r}getMetadata(e,t){let o=t||new Map,r=o.get(e);if(r!=null)return{ref:r};let s=V(e);if(!s)return null;let c={type:s};if(s==="constant"||s==="collection"||s==="undefined"||s==="null")return c.value=e,c;if(s==="function"){let a=e.name;typeof a=="string"&&(c.name=a),this.isMockFunction(e)&&(c.mockImpl=e.getMockImplementation())}c.refID=o.size,o.set(e,c.refID);let n=null;return s!=="array"&&this._getSlots(e).forEach(a=>{if(s==="function"&&this.isMockFunction(e)&&a.match(/^mock/))return;let i=this.getMetadata(e[a],o);i&&(n||(n={}),n[a]=i)}),n&&(c.members=n),c}isMockFunction(e){return e!=null&&e._isMockFunction===!0}fn(e){let t=e?e.length:0,o=this._makeComponent({length:t,type:"function"});return e&&o.mockImplementation(e),o}spyOn(e,t,o){if(typeof e!="object"&&typeof e!="function")throw new Error(`Cannot use spyOn on a primitive value; ${this._typeOf(e)} given`);if(!e)throw new Error(`spyOn could not find an object to spy on for ${String(t)}`);if(!t)throw new Error("No property name supplied");if(o)return this._spyOnProperty(e,t,o);let r=e[t];if(!this.isMockFunction(r)){if(typeof r!="function")throw new Error(`Cannot spy on the ${String(t)} property because it is not a function; ${this._typeOf(r)} given instead.${typeof r!="object"?` If you are trying to mock a property, use \`jest.replaceProperty(object, '${String(t)}', value)\` instead.`:""}`);let s=Object.prototype.hasOwnProperty.call(e,t),c=Object.getOwnPropertyDescriptor(e,t),n=Object.getPrototypeOf(e);for(;!c&&n!==null;)c=Object.getOwnPropertyDescriptor(n,t),n=Object.getPrototypeOf(n);let a;if(c&&c.get){let i=c.get;a=this._makeComponent({type:"function"},()=>{c.get=i,Object.defineProperty(e,t,c)}),c.get=()=>a,Object.defineProperty(e,t,c)}else a=this._makeComponent({type:"function"},()=>{s?e[t]=r:delete e[t]}),e[t]=a;a.mockImplementation(function(){return r.apply(this,arguments)})}return this._originalFn.set(e[t],r),e[t]}_spyOnProperty(e,t,o){let r=Object.getOwnPropertyDescriptor(e,t),s=Object.getPrototypeOf(e);for(;!r&&s!==null;)r=Object.getOwnPropertyDescriptor(s,t),s=Object.getPrototypeOf(s);if(!r)throw new Error(`${String(t)} property does not exist`);if(!r.configurable)throw new Error(`${String(t)} is not declared configurable`);if(!r[o])throw new Error(`Property ${String(t)} does not have access type ${o}`);let c=r[o];if(!this.isMockFunction(c)){if(typeof c!="function")throw new Error(`Cannot spy on the ${String(t)} property because it is not a function; ${this._typeOf(c)} given instead.${typeof c!="object"?` If you are trying to mock a property, use \`jest.replaceProperty(object, '${String(t)}', value)\` instead.`:""}`);r[o]=this._makeComponent({type:"function"},()=>{r[o]=c,Object.defineProperty(e,t,r)}),r[o].mockImplementation(function(){return c.apply(this,arguments)})}return Object.defineProperty(e,t,r),r[o]}replaceProperty(e,t,o){if(e===void 0||e==null)throw new Error(`replaceProperty could not find an object on which to replace ${String(t)}`);if(t==null)throw new Error("No property name supplied");if(typeof e!="object")throw new Error(`Cannot mock property on a non-object value; ${this._typeOf(e)} given`);let r=Object.getOwnPropertyDescriptor(e,t),s=Object.getPrototypeOf(e);for(;!r&&s!==null;)r=Object.getOwnPropertyDescriptor(s,t),s=Object.getPrototypeOf(s);if(!r)throw new Error(`${String(t)} property does not exist`);if(!r.configurable)throw new Error(`${String(t)} is not declared configurable`);if(r.get!==void 0)throw new Error(`Cannot mock the ${String(t)} property because it has a getter. Use \`jest.spyOn(object, '${String(t)}', 'get').mockReturnValue(value)\` instead.`);if(r.set!==void 0)throw new Error(`Cannot mock the ${String(t)} property because it has a setter. Use \`jest.spyOn(object, '${String(t)}', 'set').mockReturnValue(value)\` instead.`);if(typeof r.value=="function")throw new Error(`Cannot mock the ${String(t)} property because it is a function. Use \`jest.spyOn(object, '${String(t)}')\` instead.`);let c=this._findReplacedProperty(e,t);if(c)return c.replaced.replaceValue(o);let n=Object.prototype.hasOwnProperty.call(e,t),a=r.value,i=()=>{n?e[t]=a:delete e[t]},u={replaceValue:p=>(e[t]=p,u),restore:()=>{i(),this._spyState.delete(i)}};return i.object=e,i.property=t,i.replaced=u,this._spyState.add(i),u.replaceValue(o)}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._spyState.forEach(e=>e()),this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(e=>e()),this._spyState=new Set}_typeOf(e){return e==null?`${e}`:typeof e}mocked(e,t){return e}};f.ModuleMocker=d;var g=new d(globalThis),D=g.fn.bind(g);f.fn=D;var W=g.spyOn.bind(g);f.spyOn=W;var U=g.mocked.bind(g);f.mocked=U;var T=g.replaceProperty.bind(g);f.replaceProperty=T});export{z as a};
//# sourceMappingURL=chunk.JSH3M4FH.js.map
