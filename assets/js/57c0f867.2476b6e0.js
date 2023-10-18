"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[641],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>b});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(i),b=o,m=h["".concat(s,".").concat(b)]||h[b]||p[b]||a;return i?n.createElement(m,r(r({ref:t},u),{},{components:i})):n.createElement(m,r({ref:t},u))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},799:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));const a={id:"troubleshooting-cozie-basic",title:"Troubleshooting Cozie",sidebar_label:"Troubleshooting Cozie"},r=void 0,l={unversionedId:"troubleshooting-cozie-basic",id:"troubleshooting-cozie-basic",title:"Troubleshooting Cozie",description:"Troubleshooting",source:"@site/docs/getting_started_troubleshooting_cozie.md",sourceDirName:".",slug:"/troubleshooting-cozie-basic",permalink:"/docs/troubleshooting-cozie-basic",draft:!1,editUrl:"https://github.com/cozie-app/cozie-fitbit-website-new/tree/main/docs/getting_started_troubleshooting_cozie.md",tags:[],version:"current",frontMatter:{id:"troubleshooting-cozie-basic",title:"Troubleshooting Cozie",sidebar_label:"Troubleshooting Cozie"},sidebar:"tutorialSidebar",previous:{title:"Extracting Data from Cozie",permalink:"/docs/extracting-data"},next:{title:"Example of an Experimental Methodology",permalink:"/docs/example-of-experimental-method"}},s={},c=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Basics",id:"basics",level:3},{value:"Installation",id:"installation",level:3},{value:"Syncing Data",id:"syncing-data",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buds-lab/cozie/issues"},"submit any issues to our issue tracker")," and we will try to help you! :) If we fail to respond to the issue that your created ton the issue tracker, please inform us via ",(0,o.kt)("a",{parentName:"p",href:"mailto:cozie.app@gmail.com."},"cozie.app@gmail.com.")," Thank you."),(0,o.kt)("h3",{id:"basics"},"Basics"),(0,o.kt)("p",null,"Here is a quick checklist before submitting an issue"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that Bluetooth and internet are enabled on your cellphone."),(0,o.kt)("li",{parentName:"ul"},"Check that you are using the latest version of the Cozie app."),(0,o.kt)("li",{parentName:"ul"},"Check that your Fitbit firmware is up to date."),(0,o.kt)("li",{parentName:"ul"},"If settings are not persisting, then try syncing your phone to your Fitbit manually by pressing 'Sync now' in the submenu for the Fitbit watch within the Fitbit app")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Sometimes, the Fitbit app can get stuck installing a clock face. Below is a checklist that might help resolve the issue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Fitbit app, go to the submenu for your Fitbit watch."),(0,o.kt)("li",{parentName:"ul"},"Go to Gallery, select a new clock face, and install it. We like the 'In The Zone' clock face by Fitbit"),(0,o.kt)("li",{parentName:"ul"},"Ensure that the new clock face appears on the Fitbit device"),(0,o.kt)("li",{parentName:"ul"},"The previously endless installation of the previous clock face should have ended."),(0,o.kt)("li",{parentName:"ul"},"Remove and re-install the previous clockface.")),(0,o.kt)("h3",{id:"syncing-data"},"Syncing Data"),(0,o.kt)("p",null,"Fitbit and some models of phones have issues syncing data. Here is a checklist of steps that have helped us get over this issue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Charge the Fitbit, if the battery levels are too low then it won't sync."),(0,o.kt)("li",{parentName:"ul"},"Check that the phone is not in any battery-saving mode."),(0,o.kt)("li",{parentName:"ul"},"Close the Fitbit app, open it again and try sync."),(0,o.kt)("li",{parentName:"ul"},"Close all apps including the Fitbit app, turn off Bluetooth, turn on Bluetooth, open Fitbit app try the sync again."),(0,o.kt)("li",{parentName:"ul"},"Close all apps, turn off Bluetooth, clear Bluetooth cache if possible, connect to Fitbit using the Bluetooth menu of your phone (not in the Fitbit app), then open the Fitbit and sync."),(0,o.kt)("li",{parentName:"ul"},"Turn Fitbit off (Settings > About > Power off), and then turn it on again. Turn the phone off and on.")),(0,o.kt)("p",null,"In some cases, the data still doesn't sync after the steps above. The UI of the Cozie clock face appears to be working but no data is submitted to the backend. What has worked in the past is a factory reset of the Fitbit device:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the Fitbit device, swipe left to access the menu."),(0,o.kt)("li",{parentName:"ul"},"Go to 'Settings'"),(0,o.kt)("li",{parentName:"ul"},"Go to 'About', select 'Factory Reset', and confirm the reset by pressing 'reset'."),(0,o.kt)("li",{parentName:"ul"},"'Forget' the Fitbit device in the Bluetooth Settings of your smartphone."),(0,o.kt)("li",{parentName:"ul"},"After the reset, pair the Fitbit device again with your smartphone. For some Fitbit devices, this might require to connect the Fitbit device with its charger.\nThis procedure can take about 30 minutes due to the slow pairing process between the Fitbit watch and the smartphone.")))}p.isMDXComponent=!0}}]);