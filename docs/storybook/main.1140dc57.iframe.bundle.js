(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AppNavbar}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(216),react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(531),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(217),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(532),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(274),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(204),main_utils_currentUser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(209),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5);function AppNavbar(_ref){var currentUser=_ref.currentUser,systemInfo=_ref.systemInfo,doLogout=_ref.doLogout;return console.log("systemInfo",systemInfo),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{expand:"xl",variant:"dark",bg:"dark",sticky:"top",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Brand,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.a,to:"/",children:"Example"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Toggle,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Collapse,{className:"justify-content-between",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{className:"mr-auto",children:Object(main_utils_currentUser__WEBPACK_IMPORTED_MODULE_6__.a)(currentUser,"ROLE_ADMIN")&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a,{title:"Admin",id:"appnavbar-admin-dropdown","data-testid":"appnavbar-admin-dropdown",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a.Item,{href:"/admin/users",children:"Users"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{className:"me-auto",children:[(null==systemInfo?void 0:systemInfo.springH2ConsoleEnabled)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a.Link,{href:"/h2-console",children:"H2Console"})}),systemInfo&&(null==systemInfo?void 0:systemInfo.showSwaggerUILink)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a.Link,{href:"/swagger-ui/index.html",children:"Swagger"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{className:"ml-auto",children:currentUser&&currentUser.loggedIn?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Text,{className:"me-3",as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.a,to:"/profile",children:["Welcome, ",currentUser.root.user.email]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:doLogout,children:"Log Out"})]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{href:"/oauth2/authorization/google",children:"Log In"})})]})]})})}AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/AppNavbar.js"]={name:"AppNavbar",docgenInfo:AppNavbar.__docgenInfo,path:"src/main/components/Nav/AppNavbar.js"})},209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useCurrentUser})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useLogout})),__webpack_require__.d(__webpack_exports__,"a",(function(){return hasRole}));var _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(133),_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(210),react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(951),react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(208),react_query__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(952),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(211),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),react_router_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22);function useCurrentUser(){var rolesList=["ERROR_GETTING_ROLES"];return Object(react_query__WEBPACK_IMPORTED_MODULE_3__.a)("current user",Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(){var response;return _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/currentUser");case 3:response=_context.sent;try{rolesList=response.data.roles.map((function(r){return r.authority}))}catch(e){console.error("Error getting roles: ",e)}return response.data=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},response.data),{},{rolesList:rolesList}),_context.abrupt("return",{loggedIn:!0,root:response.data});case 9:return _context.prev=9,_context.t0=_context.catch(0),console.error("Error invoking axios.get: ",_context.t0),_context.abrupt("return",{loggedIn:!1,root:null});case 13:case"end":return _context.stop()}}),_callee,null,[[0,9]])}))),{initialData:{loggedIn:!1,root:null,initialData:!0}})}function useLogout(){var queryClient=Object(react_query__WEBPACK_IMPORTED_MODULE_4__.b)(),navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.f)();return Object(react_query__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee2(){return _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/logout");case 2:return _context2.next=4,queryClient.resetQueries("current user",{exact:!0});case 4:navigate("/");case 5:case"end":return _context2.stop()}}),_callee2)}))))}function hasRole(currentUser,role){return currentUser&&currentUser.loggedIn&&currentUser.root&&currentUser.root.rolesList&&currentUser.root.rolesList.includes(role)}},213:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(531),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);function Footer(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"This is a sample webapp using React with a Spring Boot backend."})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/main/components/Nav/Footer.js"})},214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BasicLayout}));var Container=__webpack_require__(531),Footer=__webpack_require__(213),AppNavbar=__webpack_require__(131),utils_currentUser=__webpack_require__(209),regenerator=__webpack_require__(133),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(210),useQuery=__webpack_require__(951),axios=__webpack_require__(211),axios_default=__webpack_require__.n(axios);var jsx_runtime=__webpack_require__(5);function BasicLayout(_ref){var children=_ref.children,currentUser=Object(utils_currentUser.b)().data,systemInfo=function useSystemInfo(){return Object(useQuery.a)("systemInfo",Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){var response;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,axios_default.a.get("/api/systemInfo");case 3:return response=_context.sent,_context.abrupt("return",response.data);case 7:return _context.prev=7,_context.t0=_context.catch(0),console.error("Error invoking axios.get: ",_context.t0),_context.abrupt("return",{error:!0});case 11:case"end":return _context.stop()}}),_callee,null,[[0,7]])}))),{initialData:{initialData:!0}})}().data,doLogout=Object(utils_currentUser.c)().mutate;return Object(jsx_runtime.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(jsx_runtime.jsx)(AppNavbar.a,{currentUser:currentUser,systemInfo:systemInfo,doLogout:doLogout}),Object(jsx_runtime.jsx)(Container.a,{expand:"xl",className:"pt-4 flex-grow-1",children:children}),Object(jsx_runtime.jsx)(Footer.a,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/BasicLayout.js"]={name:"BasicLayout",docgenInfo:BasicLayout.__docgenInfo,path:"src/main/layouts/BasicLayout/BasicLayout.js"})},552:function(module,exports,__webpack_require__){__webpack_require__(553),__webpack_require__(708),__webpack_require__(709),__webpack_require__(941),__webpack_require__(942),__webpack_require__(945),__webpack_require__(946),__webpack_require__(944),__webpack_require__(943),__webpack_require__(947),__webpack_require__(948),module.exports=__webpack_require__(914)},620:function(module,exports){},709:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(400)},912:function(module,exports,__webpack_require__){},914:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(400).configure)([__webpack_require__(915),__webpack_require__(916)],module,!1)}).call(this,__webpack_require__(242)(module))},915:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=915},916:function(module,exports,__webpack_require__){var map={"./stories/components/Nav/AppNavbar.stories.js":917,"./stories/components/Profile/RoleBadge.stories.js":949,"./stories/layouts/BasicLayout/AppNavbar.stories.js":938,"./stories/layouts/BasicLayout/BasicLayout.stories.js":939,"./stories/layouts/BasicLayout/Footer.stories.js":940,"./stories/pages/HomePage/HomePage.stories.js":950};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=916},917:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"noRole",(function(){return noRole})),__webpack_require__.d(__webpack_exports__,"admin",(function(){return admin}));var _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(131)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"components/Nav/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},noRole=Template.bind({}),admin=Template.bind({});admin.args={role:"admin"},noRole.parameters=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <AppNavbar {...args} />\n    )\n}"}},noRole.parameters),admin.parameters=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <AppNavbar {...args} />\n    )\n}"}},admin.parameters)},938:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(131)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"layouts/BasicLayout/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <AppNavbar />"}},Default.parameters)},939:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(214)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"layouts/BasicLayout/BasicLayout",component:main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <BasicLayout />"}},Default.parameters)},940:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(213)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"layouts/BasicLayout/Footer",component:main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_jpa03_nicg6645_jpa03_nicg6645_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n    return (\n        <Footer />\n    )\n}"}},Default.parameters)},948:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(965),esm=__webpack_require__(8),queryClient=(__webpack_require__(910),__webpack_require__(911),__webpack_require__(912),__webpack_require__(964)),QueryClientProvider=__webpack_require__(208),react_router=__webpack_require__(22),jsx_runtime=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},preview_queryClient=new queryClient.a,decorators=[function(Story){return Object(jsx_runtime.jsx)(QueryClientProvider.a,{client:preview_queryClient,children:Object(jsx_runtime.jsx)(react_router.a,{children:Object(jsx_runtime.jsx)(Story,{})})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},949:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"noRole",(function(){return noRole})),__webpack_require__.d(__webpack_exports__,"admin",(function(){return admin}));var objectSpread2=__webpack_require__(47),Badge=(__webpack_require__(0),__webpack_require__(963)),jsx_runtime=__webpack_require__(5);function RoleBadge(_ref){var role=_ref.role,roles=_ref.currentUser.root.roles.map((function(o){return o.authority})),lcrole=role.replace("ROLE_","").toLowerCase();return roles.includes(role)?Object(jsx_runtime.jsx)(Badge.a,{className:"bg-primary","data-testid":"role-badge-".concat(lcrole),children:lcrole}):Object(jsx_runtime.jsx)("span",{"data-testid":"role-missing-".concat(lcrole)})}RoleBadge.__docgenInfo={description:"",methods:[],displayName:"RoleBadge"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Profile/RoleBadge.js"]={name:"RoleBadge",docgenInfo:RoleBadge.__docgenInfo,path:"src/main/components/Profile/RoleBadge.js"});__webpack_exports__.default={title:"components/Profile/RoleBadge",component:RoleBadge};var RoleBadge_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(RoleBadge,Object(objectSpread2.a)({},args))},noRole=RoleBadge_stories_Template.bind({}),admin=RoleBadge_stories_Template.bind({});admin.args={role:"admin"},noRole.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},noRole.parameters),admin.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},admin.parameters)},950:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(47),BasicLayout=(__webpack_require__(0),__webpack_require__(214)),jsx_runtime=__webpack_require__(5);function HomePage(){return Object(jsx_runtime.jsx)(BasicLayout.a,{children:Object(jsx_runtime.jsxs)("div",{className:"pt-2",children:[Object(jsx_runtime.jsx)("h1",{children:"Hello, world!"}),Object(jsx_runtime.jsx)("p",{children:"This is a webapp containing a bunch of different Spring Boot/React examples."})]})})}HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/pages/HomePage.js"]={name:"HomePage",docgenInfo:HomePage.__docgenInfo,path:"src/main/pages/HomePage.js"});__webpack_exports__.default={title:"pages/HomePage/HomePage",component:HomePage};var Default=function Template(){return Object(jsx_runtime.jsx)(HomePage,{})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <HomePage />"}},Default.parameters)}},[[552,2,3]]]);