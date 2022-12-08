"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",sidebar_label:"Sending data to the cloud"},i=void 0,d={unversionedId:"gs-sending-data-to-cloud",id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",description:"We are sending the data from the Cozie application to our cloud database using an AWS Lambda function.",source:"@site/docs/coc_sending_data_to_cloud.md",sourceDirName:".",slug:"/gs-sending-data-to-cloud",permalink:"/docs/gs-sending-data-to-cloud",draft:!1,editUrl:"https://github.com/cozie-app/cozie-fitbit-website-new/tree/main/docs/coc_sending_data_to_cloud.md",tags:[],version:"current",frontMatter:{id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",sidebar_label:"Sending data to the cloud"},sidebar:"tutorialSidebar",previous:{title:"Switching between screens",permalink:"/docs/switching-between-screens"},next:{title:"Introduction",permalink:"/docs/intro-generate-cozie"}},s={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/PkTSNwP12TI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"We are sending the data from the Cozie application to our cloud database using an ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda function"),".\nThe Lambda function listens for any incoming POST requests, checks that the sender has the right API key,\nprocess the data and send it to our cloud database."),(0,o.kt)("p",null,"We are using AWS Lambda functions, however, valid alternatives are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions"},"Google Cloud Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodered.org"},"Node-RED"))),(0,o.kt)("p",null,"You can also use any other cloud database out there, and you are not required to use InfluxDB."),(0,o.kt)("p",null,"Please find below the Python code we are currently using in the Lambda function to send the data to our cloud database. Please edit the following line and add your information ",(0,o.kt)("inlineCode",{parentName:"p"},'InfluxDBClient("hostname", 8086, "username",\'password\', "datatbase", ssl=True, verify_ssl=True)'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import print_function\nfrom influxdb import InfluxDBClient\nimport json\n\n\ndef lambda_handler(event, context):\n    client = InfluxDBClient("hostname", 8086, "username",\n        \'password\', "datatbase", ssl=True, verify_ssl=True)\n    try:\n\n        print(event["body"])\n\n        body = json.loads(event["body"])\n\n        fields = {}\n\n        for key in body.keys():\n            # Check if the key value is an integer or a float\n            if isinstance(body[key], int) or isinstance(body[key], float):\n                fields[key] = body[key]\n\n        json_body = [{\n            \'time\': body[\'endFeedback\'],\n            \'measurement\': \'fitbitAPI\',\n            \'tags\': {\'userid\': body[\'user_id\'],\n                     \'experimentid\': body[\'experiment_id\']},\n            \'fields\': fields,\n            }]\n\n        client.write_points(json_body)  # write to InfluxDB\n\n        return {\n            "statusCode": 200,\n            "headers": {\n                "Content-Type": "application/json"\n                },\n            "body": "Success"\n            }\n    except Exception as e:\n\n        print(e)\n\n        return {\n            "statusCode": 500,\n            "headers": {\n                "Content-Type": "application/json"\n                },\n            "body": e\n            }\n')))}u.isMDXComponent=!0}}]);