(self.webpackChunk_capitec_omni_components=self.webpackChunk_capitec_omni_components||[]).push([[330],{"./node_modules/css-loader/dist/cjs.js!./themes/red-theme.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":root {\n\n    --omni-theme-primary-color: #8B0000;\n    --omni-theme-primary-hover-color: #8300001a;\n    --omni-theme-primary-active-color: #7C0000;\n\n    --omni-theme-accent-color: #9E4646;\n    --omni-theme-accent-hover-color: #963E3E1a;\n    --omni-theme-accent-active-color: #8F3737;\n\n    --omni-theme-background-color: #FFFFFF;\n    --omni-theme-background-hover-color: #F7F7F71a;\n    --omni-theme-background-active-color: #F0F0F0;\n\n    --omni-theme-font-color: rgb(255, 68, 68);\n\n    --omni-theme-disabled-border-color: #dedede44;\n    --omni-theme-disabled-background-color: #DEDEDE;\n    --omni-theme-error-font-color: black;\n    --omni-theme-error-border-color: black;\n    --omni-theme-hint-font-color: lightgrey;\n    --omni-theme-inactive-color: #7c7c7c;\n    --omni-theme-box-shadow-color: #ffe6e6;\n\n    --omni-theme-font-family: Arial, Helvetica, sans-serif;\n    --omni-theme-font-size: 14px;\n    --omni-theme-font-weight: inherit;\n\n    --omni-theme-border-radius: 4px;\n    --omni-theme-border-width: 2px;\n\n    --omni-theme-box-shadow: 0 0 4px 4px var(--omni-box-shadow-color)\n}",""]),module.exports=exports},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function toString(){return this.map((function(item){var content=function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */")}(cssMapping),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},"./node_modules/style-loader/dist/cjs.js?injectType=lazyStyleTag!./node_modules/css-loader/dist/cjs.js!./themes/red-theme.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./themes/red-theme.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var update,refs=0,options={injectType:"lazyStyleTag",insert:"head",singleton:!1},exported={};exported.locals=content.locals||{},exported.use=function(){return refs++||(update=api(content,options)),exported},exported.unuse=function(){refs>0&&!--refs&&(update(),update=null)},module.exports=exported},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IsQ0FFQUwsZ0JBQWtCSSxrQkF0QmxCLENBdUJGLENBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RoZW1lcy9yZWQtdGhlbWUuY3NzP3VuZGVmaW5lZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzP3VuZGVmaW5lZCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVkLXRoZW1lLmNzcz9iM2FhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcz91bmRlZmluZWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXG4gICAgLS1vbW5pLXRoZW1lLXByaW1hcnktY29sb3I6ICM4QjAwMDA7XFxuICAgIC0tb21uaS10aGVtZS1wcmltYXJ5LWhvdmVyLWNvbG9yOiAjODMwMDAwMWE7XFxuICAgIC0tb21uaS10aGVtZS1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogIzdDMDAwMDtcXG5cXG4gICAgLS1vbW5pLXRoZW1lLWFjY2VudC1jb2xvcjogIzlFNDY0NjtcXG4gICAgLS1vbW5pLXRoZW1lLWFjY2VudC1ob3Zlci1jb2xvcjogIzk2M0UzRTFhO1xcbiAgICAtLW9tbmktdGhlbWUtYWNjZW50LWFjdGl2ZS1jb2xvcjogIzhGMzczNztcXG5cXG4gICAgLS1vbW5pLXRoZW1lLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tb21uaS10aGVtZS1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiAjRjdGN0Y3MWE7XFxuICAgIC0tb21uaS10aGVtZS1iYWNrZ3JvdW5kLWFjdGl2ZS1jb2xvcjogI0YwRjBGMDtcXG5cXG4gICAgLS1vbW5pLXRoZW1lLWZvbnQtY29sb3I6IHJnYigyNTUsIDY4LCA2OCk7XFxuXFxuICAgIC0tb21uaS10aGVtZS1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICNkZWRlZGU0NDtcXG4gICAgLS1vbW5pLXRoZW1lLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6ICNERURFREU7XFxuICAgIC0tb21uaS10aGVtZS1lcnJvci1mb250LWNvbG9yOiBibGFjaztcXG4gICAgLS1vbW5pLXRoZW1lLWVycm9yLWJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIC0tb21uaS10aGVtZS1oaW50LWZvbnQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgLS1vbW5pLXRoZW1lLWluYWN0aXZlLWNvbG9yOiAjN2M3YzdjO1xcbiAgICAtLW9tbmktdGhlbWUtYm94LXNoYWRvdy1jb2xvcjogI2ZmZTZlNjtcXG5cXG4gICAgLS1vbW5pLXRoZW1lLWZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAtLW9tbmktdGhlbWUtZm9udC1zaXplOiAxNHB4O1xcbiAgICAtLW9tbmktdGhlbWUtZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuXFxuICAgIC0tb21uaS10aGVtZS1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC0tb21uaS10aGVtZS1ib3JkZXItd2lkdGg6IDJweDtcXG5cXG4gICAgLS1vbW5pLXRoZW1lLWJveC1zaGFkb3c6IDAgMCA0cHggNHB4IHZhcigtLW9tbmktYm94LXNoYWRvdy1jb2xvcilcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWQtdGhlbWUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciByZWZzID0gMDtcbnZhciB1cGRhdGU7XG52YXIgb3B0aW9ucyA9IHtcImluamVjdFR5cGVcIjpcImxhenlTdHlsZVRhZ1wifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciBleHBvcnRlZCA9IHt9O1xuXG5leHBvcnRlZC5sb2NhbHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbmV4cG9ydGVkLnVzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIShyZWZzKyspKSB7XG4gICAgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGV4cG9ydGVkO1xufTtcbmV4cG9ydGVkLnVudXNlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChyZWZzID4gMCAmJiAhLS1yZWZzKSB7XG4gICAgdXBkYXRlKCk7XG4gICAgdXBkYXRlID0gbnVsbDtcbiAgfVxufTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJjb25jYXQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsIl9pIiwiYXBpIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ1cGRhdGUiLCJyZWZzIiwib3B0aW9ucyIsImV4cG9ydGVkIiwibG9jYWxzIiwidXNlIiwidW51c2UiLCJpc09sZElFIiwibWVtbyIsIm1lbW9yaXplIiwiQm9vbGVhbiIsIndpbmRvdyIsImRvY3VtZW50IiwiYWxsIiwiYXRvYiIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJzdHlsZXNJbkRvbSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsIm5vbmNlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwicmVwbGFjZVRleHQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlIiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJzdHlsZUluZGV4IiwiYmluZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInBhcmVudE5vZGUiLCJ1cGRhdGVTdHlsZSIsIm5ld09iaiIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJwcm90b3R5cGUiLCJjYWxsIiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4Iiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==