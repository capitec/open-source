"use strict";(self.webpackChunk_capitec_omni_components=self.webpackChunk_capitec_omni_components||[]).push([[701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{renderDocs:()=>renderDocs,unmountDocs:()=>unmountDocs});__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),wrapper={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},main={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},heading={textAlign:"center"},NoDocs=function NoDocs(){return react.createElement("div",{style:wrapper,className:"sb-nodocs sb-wrapper"},react.createElement("div",{style:main},react.createElement("h1",{style:heading},"No Docs"),react.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",react.createElement("code",null,"docs")," parameter. If you think this is an error:"),react.createElement("ul",null,react.createElement("li",null,"Please check the story definition."),react.createElement("li",null,"Please check the Storybook config."),react.createElement("li",null,"Try reloading the page.")),react.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function renderDocs(story,docsContext,element,callback){return function renderDocsAsync(_x,_x2,_x3){return _renderDocsAsync.apply(this,arguments)}(story,docsContext,element).then(callback)}function _renderDocsAsync(){return(_renderDocsAsync=_asyncToGenerator(regeneratorRuntime.mark((function _callee(story,docsContext,element){var _docs$getContainer,_docs$getPage,docs,DocsContainer,Page,docsElement;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(null!=(docs=story.parameters.docs)&&docs.getPage||null!=docs&&docs.page)||(null!=docs&&docs.getContainer||null!=docs&&docs.container)){_context.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(_context.t1=docs.container,_context.t1){_context.next=8;break}return _context.next=7,null===(_docs$getContainer=docs.getContainer)||void 0===_docs$getContainer?void 0:_docs$getContainer.call(docs);case 7:_context.t1=_context.sent;case 8:if(_context.t0=_context.t1,_context.t0){_context.next=11;break}_context.t0=function(_ref){var children=_ref.children;return react.createElement(react.Fragment,null,children)};case 11:if(DocsContainer=_context.t0,_context.t3=docs.page,_context.t3){_context.next=17;break}return _context.next=16,null===(_docs$getPage=docs.getPage)||void 0===_docs$getPage?void 0:_docs$getPage.call(docs);case 16:_context.t3=_context.sent;case 17:if(_context.t2=_context.t3,_context.t2){_context.next=20;break}_context.t2=NoDocs;case 20:return Page=_context.t2,docsElement=react.createElement(DocsContainer,{key:story.componentId,context:docsContext},react.createElement(Page,null)),_context.next=24,new Promise((function(resolve){react_dom.render(docsElement,element,resolve)}));case 24:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function unmountDocs(element){react_dom.unmountComponentAtNode(element)}NoDocs.displayName="NoDocs"}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBSSxDQUNmWixTQUFTRSxLQUFPLEdBQ2hCLEtBQ0YsQ0FFQUYsU0FBU1ksR0FBSyxTQUFVQyxNQUN0QixJQUFJQyxTQUFXRCxLQUFLQyxTQUNwQixPQUFvQixvQkFBb0IsZUFBZ0IsS0FBTUEsU0FDaEUsRUFFRixLQUFLLEdBSUgsR0FIQW5CLGNBQWdCSyxTQUFTWSxHQUN6QlosU0FBU2UsR0FBS3JCLEtBQUtXLEtBRWZMLFNBQVNlLEdBQUksQ0FDZmYsU0FBU0UsS0FBTyxHQUNoQixLQUNGLENBR0EsT0FEQUYsU0FBU0UsS0FBTyxHQUMwQixRQUFsQ1QsY0FBZ0JDLEtBQUtVLGVBQXVDLElBQWxCWCxtQkFBMkIsRUFBU0EsY0FBY2lCLEtBQUtoQixNQUUzRyxLQUFLLEdBQ0hNLFNBQVNlLEdBQUtmLFNBQVNXLEtBRXpCLEtBQUssR0FHSCxHQUZBWCxTQUFTZ0IsR0FBS2hCLFNBQVNlLEdBRW5CZixTQUFTZ0IsR0FBSSxDQUNmaEIsU0FBU0UsS0FBTyxHQUNoQixLQUNGLENBRUFGLFNBQVNnQixHQUFLL0QsT0FFaEIsS0FBSyxHQVNILE9BUkEyQyxLQUFPSSxTQUFTZ0IsR0FHaEJuQixZQUEyQixvQkFBb0JGLGNBQWUsQ0FDNURqQyxJQUFLa0IsTUFBTXFDLFlBQ1hDLFFBQVNyQyxhQUNLLG9CQUFvQmUsS0FBTSxPQUMxQ0ksU0FBU0UsS0FBTyxHQUNULElBQUlsQyxTQUFRLFNBQVVWLFNBQzNCLGlCQUFnQnVDLFlBQWFmLFFBQVN4QixRQUN4QyxJQUVGLEtBQUssR0FDTCxJQUFLLE1BQ0gsT0FBTzBDLFNBQVNtQixPQUd4QixHQUFHNUIsUUFDTCxNQUN3QmYsTUFBTUgsS0FBTUUsVUFDdEMsQ0FFTyxTQUFTNkMsWUFBWXRDLFNBQzFCLGlDQUFnQ0EsUUFDbEMsQ0R6RkE3QixPQUFPb0UsWUFBYyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcHJldmlldy13ZWIvZGlzdC9lc20vTm9Eb2NzLmpzP3VuZGVmaW5lZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9wcmV2aWV3LXdlYi9kaXN0L2VzbS9yZW5kZXJEb2NzLmpzP3VuZGVmaW5lZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIHdyYXBwZXIgPSB7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxldHRlclNwYWNpbmc6ICcwLjJweCcsXG4gIG1hcmdpbjogJzEwcHggMCdcbn07XG52YXIgbWFpbiA9IHtcbiAgbWFyZ2luOiAnYXV0bycsXG4gIHBhZGRpbmc6IDMwLFxuICBib3JkZXJSYWRpdXM6IDEwLFxuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjAzKSdcbn07XG52YXIgaGVhZGluZyA9IHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufTtcbmV4cG9ydCB2YXIgTm9Eb2NzID0gZnVuY3Rpb24gTm9Eb2NzKCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB3cmFwcGVyLFxuICAgIGNsYXNzTmFtZTogXCJzYi1ub2RvY3Mgc2Itd3JhcHBlclwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogbWFpblxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICBzdHlsZTogaGVhZGluZ1xuICB9LCBcIk5vIERvY3NcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlNvcnJ5LCBidXQgdGhlcmUgYXJlIG5vIGRvY3MgZm9yIHRoZSBzZWxlY3RlZCBzdG9yeS4gVG8gYWRkIHRoZW0sIHNldCB0aGUgc3Rvcnknc1xceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImRvY3NcIiksIFwiIHBhcmFtZXRlci4gSWYgeW91IHRoaW5rIHRoaXMgaXMgYW4gZXJyb3I6XCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCJQbGVhc2UgY2hlY2sgdGhlIHN0b3J5IGRlZmluaXRpb24uXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiUGxlYXNlIGNoZWNrIHRoZSBTdG9yeWJvb2sgY29uZmlnLlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIlRyeSByZWxvYWRpbmcgdGhlIHBhZ2UuXCIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiSWYgdGhlIHByb2JsZW0gcGVyc2lzdHMsIGNoZWNrIHRoZSBicm93c2VyIGNvbnNvbGUsIG9yIHRoZSB0ZXJtaW5hbCB5b3UndmUgcnVuIFN0b3J5Ym9vayBmcm9tLlwiKSkpO1xufTtcbk5vRG9jcy5kaXNwbGF5TmFtZSA9IFwiTm9Eb2NzXCI7IiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanNcIjtcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgTm9Eb2NzIH0gZnJvbSAnLi9Ob0RvY3MnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRvY3Moc3RvcnksIGRvY3NDb250ZXh0LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICByZXR1cm4gcmVuZGVyRG9jc0FzeW5jKHN0b3J5LCBkb2NzQ29udGV4dCwgZWxlbWVudCkudGhlbihjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRvY3NBc3luYyhfeCwgX3gyLCBfeDMpIHtcbiAgcmV0dXJuIF9yZW5kZXJEb2NzQXN5bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3JlbmRlckRvY3NBc3luYygpIHtcbiAgX3JlbmRlckRvY3NBc3luYyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShzdG9yeSwgZG9jc0NvbnRleHQsIGVsZW1lbnQpIHtcbiAgICB2YXIgX2RvY3MkZ2V0Q29udGFpbmVyLCBfZG9jcyRnZXRQYWdlO1xuXG4gICAgdmFyIGRvY3MsIERvY3NDb250YWluZXIsIFBhZ2UsIGRvY3NFbGVtZW50O1xuICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGRvY3MgPSBzdG9yeS5wYXJhbWV0ZXJzLmRvY3M7XG5cbiAgICAgICAgICAgIGlmICghKChkb2NzICE9PSBudWxsICYmIGRvY3MgIT09IHZvaWQgMCAmJiBkb2NzLmdldFBhZ2UgfHwgZG9jcyAhPT0gbnVsbCAmJiBkb2NzICE9PSB2b2lkIDAgJiYgZG9jcy5wYWdlKSAmJiAhKGRvY3MgIT09IG51bGwgJiYgZG9jcyAhPT0gdm9pZCAwICYmIGRvY3MuZ2V0Q29udGFpbmVyIHx8IGRvY3MgIT09IG51bGwgJiYgZG9jcyAhPT0gdm9pZCAwICYmIGRvY3MuY29udGFpbmVyKSkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGBkb2NzLmNvbnRhaW5lcmAgc2V0LCBkaWQgeW91IHJ1biBgYWRkb24tZG9jcy9wcmVzZXRgPycpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgX2NvbnRleHQudDEgPSBkb2NzLmNvbnRhaW5lcjtcblxuICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQxKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICByZXR1cm4gKF9kb2NzJGdldENvbnRhaW5lciA9IGRvY3MuZ2V0Q29udGFpbmVyKSA9PT0gbnVsbCB8fCBfZG9jcyRnZXRDb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb2NzJGdldENvbnRhaW5lci5jYWxsKGRvY3MpO1xuXG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgX2NvbnRleHQudDEgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dC50MTtcblxuICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0LnQwID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIERvY3NDb250YWluZXIgPSBfY29udGV4dC50MDtcbiAgICAgICAgICAgIF9jb250ZXh0LnQzID0gZG9jcy5wYWdlO1xuXG4gICAgICAgICAgICBpZiAoX2NvbnRleHQudDMpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgcmV0dXJuIChfZG9jcyRnZXRQYWdlID0gZG9jcy5nZXRQYWdlKSA9PT0gbnVsbCB8fCBfZG9jcyRnZXRQYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jcyRnZXRQYWdlLmNhbGwoZG9jcyk7XG5cbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgX2NvbnRleHQudDMgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIF9jb250ZXh0LnQyID0gX2NvbnRleHQudDM7XG5cbiAgICAgICAgICAgIGlmIChfY29udGV4dC50Mikge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC50MiA9IE5vRG9jcztcblxuICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICBQYWdlID0gX2NvbnRleHQudDI7XG4gICAgICAgICAgICAvLyBVc2UgYGNvbXBvbmVudElkYCBhcyBhIGtleSBzbyB0aGF0IHdlIGZvcmNlIGEgcmUtcmVuZGVyIGV2ZXJ5IHRpbWVcbiAgICAgICAgICAgIC8vIHdlIHN3aXRjaCBjb21wb25lbnRzXG4gICAgICAgICAgICBkb2NzRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvY3NDb250YWluZXIsIHtcbiAgICAgICAgICAgICAga2V5OiBzdG9yeS5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgY29udGV4dDogZG9jc0NvbnRleHRcbiAgICAgICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIG51bGwpKTtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoZG9jc0VsZW1lbnQsIGVsZW1lbnQsIHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gX3JlbmRlckRvY3NBc3luYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudERvY3MoZWxlbWVudCkge1xuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGVsZW1lbnQpO1xufSJdLCJuYW1lcyI6WyJ3cmFwcGVyIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luIiwibWFpbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiaGVhZGluZyIsInRleHRBbGlnbiIsIk5vRG9jcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsInRoaXMiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJyZW5kZXJEb2NzIiwic3RvcnkiLCJkb2NzQ29udGV4dCIsImVsZW1lbnQiLCJjYWxsYmFjayIsInJlbmRlckRvY3NBc3luYyIsIl94IiwiX3gyIiwiX3gzIiwiX3JlbmRlckRvY3NBc3luYyIsInJlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiX2RvY3MkZ2V0Q29udGFpbmVyIiwiX2RvY3MkZ2V0UGFnZSIsImRvY3MiLCJEb2NzQ29udGFpbmVyIiwiUGFnZSIsImRvY3NFbGVtZW50Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInBhcmFtZXRlcnMiLCJnZXRQYWdlIiwicGFnZSIsImdldENvbnRhaW5lciIsImNvbnRhaW5lciIsIkVycm9yIiwidDEiLCJjYWxsIiwic2VudCIsInQwIiwiX3JlZiIsImNoaWxkcmVuIiwidDMiLCJ0MiIsImNvbXBvbmVudElkIiwiY29udGV4dCIsInN0b3AiLCJ1bm1vdW50RG9jcyIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==