"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[101],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=n.createContext({}),u=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(i),f=o,p=h["".concat(r,".").concat(f)]||h[f]||c[f]||s;return i?n.createElement(p,a(a({ref:t},d),{},{components:i})):n.createElement(p,a({ref:t},d))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,a=new Array(s);a[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},233:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(7462),o=(i(7294),i(3905));const s={id:"add-questions",title:"Add a question to your question flow",sidebar_label:"Add question"},a=void 0,l={unversionedId:"add-questions",id:"add-questions",title:"Add a question to your question flow",description:"Introduction",source:"@site/docs/wsg_add_questions.md",sourceDirName:".",slug:"/add-questions",permalink:"/docs/add-questions",draft:!1,editUrl:"https://github.com/cozie-app/cozie-fitbit-website-new/tree/main/docs/wsg_add_questions.md",tags:[],version:"current",frontMatter:{id:"add-questions",title:"Add a question to your question flow",sidebar_label:"Add question"}},r={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Question details",id:"question-details",level:2},{value:"Answers details",id:"answers-details",level:2},{value:"Add your question",id:"add-your-question",level:2}],d={toc:u};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this section, you will learn how to create a question that you will add to your question flow. Here is the interface as you may find it at the beginning:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Index Cozie generator",src:i(208).Z,width:"1920",height:"843"})),(0,o.kt)("p",null,"As you may have noticed, there are several sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preview of the question flow: this section, detailed ",(0,o.kt)("a",{parentName:"li",href:"/docs/question-flow-preview"},"here"),", will display, as it will be printed on the watch, all the questions you already added to the question flow."),(0,o.kt)("li",{parentName:"ul"},"Add a question to JSON file: this section allows you to fill out the details of the next question you will add. First, you will fill in the details of the question itself. Then, you will type in the details for each answer.")),(0,o.kt)("h2",{id:"question-details"},"Question details"),(0,o.kt)("p",null,"First, let's focus on the question details section:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Question details section",src:i(2504).Z,width:"811",height:"301"})),(0,o.kt)("p",null,"You can notice on this screenshot that this section includes 5 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: this is the name of the question. This field must not contain any sepcial caracter or space"),(0,o.kt)("li",{parentName:"ul"},"Displayed name: this field is used in the companion settings (depending on the version of Cozie, this feature might not be implemented anymore)."),(0,o.kt)("li",{parentName:"ul"},"Question text: this field refers to the first line of the question that is printed on the watch. Make sure that this field length remains under 45 characters."),(0,o.kt)("li",{parentName:"ul"},"Second question text: this field is optionnal and should be used if the length of your question text is more than 45 characters. The value of this field is printed right below the previous field on the watch."),(0,o.kt)("li",{parentName:"ul"},"Number of answers: this field allows you to choose the number of answers of your question. This number remains between 2 and 4. If you change this field, the section below will automatically change and display all the field that has to be filled in, depending on the number of answers you chose.")),(0,o.kt)("h2",{id:"answers-details"},"Answers details"),(0,o.kt)("p",null,"Now that the question details has been correctly filled in, you will have to fill in every answer's details. Depending on the number of answers, you will have to do this 2, 3 or 4 times. Here is an answer details section:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Answer details section",src:i(3166).Z,width:"806",height:"353"})),(0,o.kt)("p",null,"Here is an example for the left answer. In this section, you can find 4 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Icon text: this field's value will be printed right below the icon of the answer."),(0,o.kt)("li",{parentName:"ul"},"Icon color: this field refers to the icon's background color of the answer. The value of this field can be an hexadecimal RGB value (e.g. #00b0b9) or a fitbit color (",(0,o.kt)("a",{parentName:"li",href:"https://dev.fitbit.com/build/guides/user-interface/css/#web-color-names"},"here")," is a list of the available fitbit colors)."),(0,o.kt)("li",{parentName:"ul"},"Icon image: this field allows you to upload an image in your computer that will be the icon of the answer."),(0,o.kt)("li",{parentName:"ul"},'Next question: this field is of paramount importance. The value of this field is the name of the next question (the first field you fill out in the question details section) to be shown if the user chooses this answer. If you want this answer to stop the survey, you may want to type in "end" in this field.')),(0,o.kt)("p",null,"Eventually, you will have to fill in this section for every answer of the question."),(0,o.kt)("h2",{id:"add-your-question"},"Add your question"),(0,o.kt)("p",null,"Once every section explained above has been correctly filled in, the interface may be more or less like this (for a 2-answers question):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filled in interface",src:i(2818).Z,width:"1863",height:"835"})),(0,o.kt)("p",null,"Take a minute to check all fields and then you can easily add this question to your question flow by clicking on the ",(0,o.kt)("strong",null,"Add this question")," button."),(0,o.kt)("p",null,"Eventually, you will be redirected to the same page and you will be able to add as many questions as you like."))}c.isMDXComponent=!0},3166:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/add-question-answer-details-b7beb547b58b99cf95633113073d89a6.png"},2818:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/add-question-final-state-e5965aa154b7fd1c0f045cf1f2171542.png"},208:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/add-question-index-7d8b057b64c030e00ec2559eefa06466.png"},2504:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/add-question-question-details-2d08ca7bd6391b4ef1bf4f2e35e235fc.png"}}]);