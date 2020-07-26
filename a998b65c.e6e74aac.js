(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),p=n(9),i=(n(0),n(308)),o={id:"configuration",title:"Configuring single-spa",sidebar_label:"Configuring single-spa"},c=[{value:"Index.html\u6587\u4ef6",id:"indexhtml\u6587\u4ef6",children:[]},{value:"\u6ce8\u518c\u5e94\u7528",id:"\u6ce8\u518c\u5e94\u7528",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u4f7f\u7528\u5bf9\u8c61\u53c2\u6570",id:"\u4f7f\u7528\u5bf9\u8c61\u53c2\u6570",children:[]}]},{value:"Calling singleSpa.start()",id:"calling-singlespastart",children:[]},{value:"\u540c\u65f6\u6ce8\u518c\u4e24\u4e2a\u8def\u7531??",id:"\u540c\u65f6\u6ce8\u518c\u4e24\u4e2a\u8def\u7531",children:[]}],r={rightToc:c},l="wrapper";function s(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(i.b)(l,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The single-spa root config consists of the following:"),Object(i.b)("p",null,"\u8fd9\u4e24\u4e2a\u6839\u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u7528\u4e8e\u542f\u52a8single-spa\u5e94\u7528\u3002"),Object(i.b)("h2",{id:"indexhtml\u6587\u4ef6"},"Index.html\u6587\u4ef6"),Object(i.b)("p",null,"\u5185\u5bb9\u53ef\u53c2\u8003",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://single-spa-playground.org/playground/html-file"}),"\u8be5\u793a\u4f8b"),"\u3002\u6ce8\u610f\u8be5\u6587\u4ef6\u4e0d\u5305\u542bhtml\u5143\u7d20(div, buttons\u7b49)\uff0c\u53ea\u662f\u4e3a\u4e86\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication()"),"\u65b9\u6cd5\u3002"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyglot-microfrontends/root-config/blob/master/src/index.ejs"}),"this example root config")," for what a root HTML file looks like."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5728\u4f7f\u7528single-spa\u65f6\uff0c\u4e0d\u5fc5\u4f7f\u7528SystemJS"),"\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u80fd\u591f",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/separating-applications.html"}),"\u72ec\u7acb\u90e8\u7f72"),"\u5404\u5e94\u7528\uff0c\u5f88\u591a\u793a\u4f8b\u548c\u6559\u7a0b\u4f1a\u63a8\u8350\u4f7f\u7528SystemJS\u3002"),Object(i.b)("h2",{id:"\u6ce8\u518c\u5e94\u7528"},"\u6ce8\u518c\u5e94\u7528"),Object(i.b)("p",null,"\u4f60\u9700\u8981\u5148\u6ce8\u518c",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications"}),"\u5e94\u7528"),"\uff0c\u8fd9\u6837single-spa\u624d\u77e5\u9053\u5728\u4ec0\u4e48\u65f6\u673a\uff0c\u5982\u4f55\u53bb\u521d\u59cb\u5316\u3001\u4e0b\u8f7d\u3001\u6302\u8f7d\u548c\u5378\u8f7d\u5404\u5e94\u7528\u3002\u6211\u4eec\u4e00\u822c\u60c5\u51b5\u4e0b\u5728single-spa\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u6ce8\u518c\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6709\u5176\u4ed6\u65b9\u5f0f(\u4e0d\u63a8\u8350)\u3002\u5982\u679c\u5728\u67d0\u4e2a\u5e94\u7528\u4e2d\u6ce8\u518c\u5176\u4ed6\u5e94\u7528\uff0c\u8fd9\u4e24\u4e2a\u5e94\u7528\u4e0d\u4f1a\u5b58\u5728\u5d4c\u5957\u5173\u7cfb\uff0c\u4ed6\u4eec\u8fd8\u662f\u540c\u7ea7\u5173\u7cfb\uff0c\u5e94\u7528\u7684\u6302\u8f7d\u548c\u4e0b\u8f7d\u4e5f\u8fd8\u662f\u4f1a\u4f9d\u8d56\u5404\u81ea\u7684\u89e6\u53d1\u6761\u4ef6(activity functions)\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u901a\u8fc7\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u65b9\u6cd5\u6765\u6ce8\u518c\u5e94\u7528\u3002\u4f8b\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// single-spa-config.js\nimport { registerApplication, start } from 'single-spa';\n\n// Simple usage\nregisterApplication(\n  'app2',\n  () => import('src/app2/main.js'),\n  (location) => location.pathname.startsWith('/app2'),\n  { some: 'value' }\n);\n\n// Config with more expressive API\nregisterApplication({\n  name: 'app1',\n  app: () => import('src/app1/main.js'),\n  activeWhen: '/app1',\n  customProps: {\n    some: 'value',\n  }\n);\n\nstart();\n")),Object(i.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h4",{id:"name"},"name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u8868\u793a\u5e94\u7528\u540d\u79f0\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"name"),"\u5fc5\u987b\u662fstring\u7c7b\u578b"),Object(i.b)("h4",{id:"loading-function-or-application"},"Loading Function or Application"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u53ef\u4ee5\u662f\u4e00\u4e2aPromise\u7c7b\u578b\u7684 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#loading-function"}),"\u52a0\u8f7d\u51fd\u6570"),"\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5df2\u7ecf\u88ab\u89e3\u6790\u7684\u5e94\u7528\u3002"),Object(i.b)("h5",{id:"application-as-second-argument"},"Application as second argument"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u4e00\u4e2a\u5df2\u7ecf\u88ab\u89e3\u6790\u8fc7\u7684\u5e94\u7528\u4f5c\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e2a\u5e94\u7528\u5176\u5b9e\u662f\u4e00\u4e2a\u5305\u542b\u5404\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u7684\u5bf9\u8c61\u3002\u6211\u4eec\u65e2\u53ef\u4ee5\u4ece\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5f15\u5165\u8be5\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u5728single-spa\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u8fd9\u4e2a\u5bf9\u8c61\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const application = {\n  bootstrap: () => Promise.resolve(), //bootstrap function\n  mount: () => Promise.resolve(), //mount function\n  unmount: () => Promise.resolve(), //unmount function\n}\nregisterApplication('applicatonName', application, activityFunction)\n\n")),Object(i.b)("h5",{id:"\u52a0\u8f7d\u51fd\u6570"},"\u52a0\u8f7d\u51fd\u6570"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u662f\u8fd4\u56depromise\u7684\u51fd\u6570(\u6216",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ponyfoo.com/articles/understanding-javascript-async-await"}),'"async function"'),"\u65b9\u6cd5)\u3002\u8fd9\u4e2a\u51fd\u6570\u6ca1\u6709\u5165\u53c2\uff0c\u4f1a\u5728\u5e94\u7528\u7b2c\u4e00\u6b21\u88ab\u4e0b\u8f7d\u65f6\u8c03\u7528\u3002\u8fd4\u56de\u7684Promise resolve\u4e4b\u540e\u7684\u7ed3\u679c\u5fc5\u987b\u662f\u4e00\u4e2a\u53ef\u4ee5\u88ab\u89e3\u6790\u7684\u5e94\u7528\u3002\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u6cd5\u662f\u4f7f\u7528import\u52a0\u8f7d\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"() => import('/path/to/application.js')")),Object(i.b)("h4",{id:"\u6fc0\u6d3b\u51fd\u6570"},"\u6fc0\u6d3b\u51fd\u6570"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u9700\u8981\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"window.location"),"\u4f1a\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u88ab\u8c03\u7528\uff0c\u5f53\u51fd\u6570\u8fd4\u56de\u7684\u503c\u4e3a\u771f(truthy)\u503c\u65f6\uff0c\u5e94\u7528\u4f1a\u88ab\u6fc0\u6d3b\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cActivity function\u4f1a\u6839\u636e",Object(i.b)("inlineCode",{parentName:"p"},"window.location"),"/\u540e\u9762\u7684path\u6765\u51b3\u5b9a\u8be5\u5e94\u7528\u662f\u5426\u9700\u8981\u88ab\u6fc0\u6d3b\u3002"),Object(i.b)("p",null,"\u53e6\u5916\u4e00\u79cd\u573a\u666f\u662fsingle-spa\u6839\u636e\u9876\u7ea7\u8def\u7531\u67e5\u627e\u5e94\u7528\uff0c\u800c\u6bcf\u4e2a\u5e94\u7528\u4f1a\u5904\u7406\u81ea\u8eab\u7684\u5b50\u8def\u7531\u3002 \u5728\u4ee5\u4e0b\u573a\u666f\uff0csingle-spa\u4f1a\u8c03\u7528\u5e94\u7528\u7684activity function"),Object(i.b)("p",null,"\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\uff0csingle-spa\u5c06\u8c03\u7528\u6bcf\u4e2a\u5e94\u7528\u7684\u6d3b\u52a8\u51fd\u6570\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hashchange")," or ",Object(i.b)("inlineCode",{parentName:"li"},"popstate"),"\u4e8b\u4ef6\u89e6\u53d1\u65f6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pushState")," or ",Object(i.b)("inlineCode",{parentName:"li"},"replaceState"),"\u88ab\u8c03\u7528\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u5728single-spa\u4e0a\u624b\u52a8\u8c03\u7528","[",Object(i.b)("inlineCode",{parentName:"li"},"triggerAppChange"),"]"," \u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"checkActivityFunctions"),"\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6")),Object(i.b)("h4",{id:"custom-props"},"Custom props"),Object(i.b)("p",null,"The optional fourth argument to ",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication")," is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications/#custom-props"}),"custom props")," that are passed to the application's single-spa lifecycle functions. The custom props may be either an object or a function that returns an object. Custom prop functions are called with the application name and current ",Object(i.b)("inlineCode",{parentName:"p"},"window.location")," as arguments."),Object(i.b)("h3",{id:"\u4f7f\u7528\u5bf9\u8c61\u53c2\u6570"},"\u4f7f\u7528\u5bf9\u8c61\u53c2\u6570"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication({\n  name: 'myApp',\n  app: () => import('src/myApp/main.js'),\n  activeWhen: ['/myApp', (location) => location.pathname.startsWith('/some/other/path')],\n  customProps: {\n    some: 'value',\n  },\n});\n\nsingleSpa.registerApplication({\n  name: 'myApp',\n  app: () => import('src/myApp/main.js'),\n  activeWhen: ['/myApp', (location) => location.pathname.startsWith('/some/other/path')],\n  customProps: (name, location) => ({\n    some: 'value',\n  }),\n});\n")),Object(i.b)("h4",{id:"configname"},"config.name"),Object(i.b)("p",null,"\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u3002"),Object(i.b)("h4",{id:"configapp"},"config.app"),Object(i.b)("p",null,"\u5e94\u7528\u7684\u5b9a\u4e49\uff0c\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u5355spa\u751f\u547d\u5468\u671f\u7684\u5bf9\u8c61\uff0c\u52a0\u8f7d\u51fd\u6570\u6216\u8005\u4e0e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u76f8\u540c\u3002"),Object(i.b)("h4",{id:"configactivewhen"},"config.activeWhen"),Object(i.b)("p",null,"\u53ef\u4ee5\u662f\u6fc0\u6d3b\u51fd\u6570\uff0c\u6bd4\u5982\u53c2\u6570API\u3001\u8def\u5f84\u524d\u7f00\u6216\u4e24\u8005\u7684\u6570\u7ec4\u3002\u56e0\u4e3a\u6700\u5e38\u89c1\u7684\u7528\u4f8b\u662f\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"window.location")," \u5c06\u5176URL\u524d\u7f00\u8fdb\u884c\u5339\u914d\uff0c\u6240\u4ee5\u6211\u4eec\u5e2e\u4f60\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u65b9\u6cd5\u3002"),Object(i.b)("h4",{id:"path-prefix"},"Path prefix"),Object(i.b)("p",null,"\u8def\u5f84\u524d\u7f00\u4f1a\u5339\u914durl\uff0c\u5141\u8bb8\u4ee5\u4e0b\u6bcf\u4e00\u79cd\u524d\u7f00\uff1a"),Object(i.b)("dl",null,Object(i.b)("dt",null,"'/app1'"),Object(i.b)("dd",null,"\u2705 https://app.com/app1"),Object(i.b)("dd",null,"\u2705 https://app.com/app1/anything/everything"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/app2"),Object(i.b)("dt",null,"'/users/:userId/profile'"),Object(i.b)("dd",null,"\u2705 https://app.com/users/123/profile"),Object(i.b)("dd",null,"\u2705 https://app.com/users/123/profile/sub-profile/"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/users//profile/sub-profile/"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/users/profile/sub-profile/"),Object(i.b)("dt",null,"'/pathname/#/hash'"),Object(i.b)("dd",null,"\u2705 https://app.com/pathname/#/hash"),Object(i.b)("dd",null,"\u2705 https://app.com/pathname/#/hash/route/nested"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/pathname#/hash/route/nested"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/pathname#/another-hash"),Object(i.b)("dt",null,"['/pathname/#/hash', '/app1']"),Object(i.b)("dd",null,"\u2705 https://app.com/pathname/#/hash/route/nested"),Object(i.b)("dd",null,"\u2705 https://app.com/app1/anything/everything"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/pathname/app1"),Object(i.b)("dd",null,"\ud83d\udeab https://app.com/app2")),Object(i.b)("h4",{id:"configcustomprops"},"config.customProps"),Object(i.b)("p",null,"The optional ",Object(i.b)("inlineCode",{parentName:"p"},"customProps")," property provides ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications/#custom-props"}),"custom props")," that are passed to the application's single-spa lifecycle functions. The custom props may be either an object or a function that returns an object. Custom prop functions are called with the application name and current ",Object(i.b)("inlineCode",{parentName:"p"},"window.location")," as arguments."),Object(i.b)("h2",{id:"calling-singlespastart"},"Calling singleSpa.start()"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api#start"}),Object(i.b)("inlineCode",{parentName:"a"},"start()\u65b9\u6cd5"))," ",Object(i.b)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u88absingle-spa\u914d\u7f6e\u6587\u4ef6\u7684js\u8c03\u7528\uff0c\u8fd9\u65f6\u5e94\u7528\u624d\u4f1a\u88ab\u771f\u6b63\u6302\u8f7d\u3002\u5728",Object(i.b)("inlineCode",{parentName:"p"},"start"),"\u88ab\u8c03\u7528\u4e4b\u524d\uff0c\u5e94\u7528\u5148\u88ab\u4e0b\u8f7d\uff0c\u4f46\u4e0d\u4f1a\u521d\u59cb\u5316/\u6302\u8f7d/\u5378\u8f7d\u3002",Object(i.b)("inlineCode",{parentName:"p"},"start"),"\u65b9\u6cd5\u53ef\u4ee5\u534f\u52a9\u6211\u4eec\u66f4\u597d\u63d0\u5347\u5e94\u7528\u7684\u6027\u80fd\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u9a6c\u4e0a\u6ce8\u518c\u4e00\u4e2a\u5e94\u7528(\u4e3a\u4e86\u7acb\u523b\u4e0b\u8f7d\u4ee3\u7801)\uff0c\u4f46\u4e0d\u80fd\u9a6c\u4e0a\u5c31\u5728DOM\u8282\u70b9\u4e0a\u6302\u8f7d\u8be5\u5e94\u7528\uff0c\u800c\u662f\u9700\u8981\u7b49\u4e00\u4e2aAJAX\u8bf7\u6c42(\u53ef\u80fd\u4f1a\u83b7\u53d6\u7528\u6237\u7684\u767b\u5f55\u4fe1\u606f)\u5b8c\u6210\u540e\uff0c\u518d\u6839\u636e\u7ed3\u679c\u8fdb\u884c\u6302\u8f7d\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u4f73\u5b9e\u8df5\u662f\u5148\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication"),"\uff0c\u7b49AJAX\u8bf7\u6c42\u5b8c\u6210\u540e\u518d\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"start"),"\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"//single-spa-config.js\nimport { start } from 'single-spa';\n\n /*\u5728\u6ce8\u518c\u5e94\u7528\u4e4b\u524d\u8c03\u7528start\u610f\u5473\u7740single-spa\u53ef\u4ee5\u7acb\u5373\u5b89\u88c5\u5e94\u7528\uff0c\u65e0\u9700\u7b49\u5f85\u5355\u9875\u5e94\u7528\u7684\u4efb\u4f55\u521d\u59cb\u8bbe\u7f6e\u3002*/\n\nstart();\n// \u6ce8\u518c\u5e94\u7528\u3002\u3002\u3002\u3002\n")),Object(i.b)("h2",{id:"\u540c\u65f6\u6ce8\u518c\u4e24\u4e2a\u8def\u7531"},"\u540c\u65f6\u6ce8\u518c\u4e24\u4e2a\u8def\u7531??"),Object(i.b)("p",null,"emm...\u4e5f\u662f\u53ef\u4ee5\u7684\u3002 \u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u662f\u4e3a\u6bcf\u4e2aapp\u521b\u5efa\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},'<div id="app name"></div>'),"\uff0c\u8fd9\u6837\u8fd9\u4e24\u4e2a\u5e94\u7528\u5c31\u4e0d\u4f1a\u540c\u65f6\u4fee\u6539\u76f8\u540c\u7684DOM\u8282\u70b9\u4e86\u3002","[\u8003\u8651\u4e00\u4e2apath\u53d8\u52a8\uff0c\u540c\u65f6\u6709\u4e24\u4e2a\u5e94\u7528\u88ab\u6fc0\u6d3b\u7684\u573a\u666f\uff0c\u8bd1\u8005\u6ce8]"))}s.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),p=n.n(a),i=p.a.createContext({}),o=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return p.a.createElement(i.Provider,{value:t},e.children)};var r="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),b=a,m=s[c+"."+b]||s[b]||l[b]||i;return n?p.a.createElement(m,Object.assign({},{ref:t},r,{components:n})):p.a.createElement(m,Object.assign({},{ref:t},r))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[r]="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);