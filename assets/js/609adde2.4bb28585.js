"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={id:"extracting-data",title:"Extracting Data from Cozie",sidebar_label:"Extracting Data from Cozie"},i=void 0,l={unversionedId:"extracting-data",id:"extracting-data",title:"Extracting Data from Cozie",description:"Extracting Data",source:"@site/docs/getting_started_extracting_data.md",sourceDirName:".",slug:"/extracting-data",permalink:"/docs/extracting-data",draft:!1,editUrl:"https://github.com/cozie-app/cozie-fitbit-website-new/tree/main/docs/getting_started_extracting_data.md",tags:[],version:"current",frontMatter:{id:"extracting-data",title:"Extracting Data from Cozie",sidebar_label:"Extracting Data from Cozie"},sidebar:"tutorialSidebar",previous:{title:"Installing  Cozie",permalink:"/docs/installing-clock-face"},next:{title:"Troubleshooting Cozie",permalink:"/docs/troubleshooting-cozie-basic"}},c={},d=[{value:"Extracting Data",id:"extracting-data",level:2},{value:"Extracting Data with Python",id:"extracting-data-with-python",level:3},{value:"Some mild data processing",id:"some-mild-data-processing",level:3}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"extracting-data"},"Extracting Data"),(0,r.kt)("p",null,"Data can be extracted via our web API:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description / Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx"},"https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"bUiB1HqmrK2eDBNqhsuGmaxrUKL1od8c3Qo6LJij")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experiment-id ","\u200c"," ","\u200c"," ","\u200c"),(0,r.kt)("td",{parentName:"tr",align:null},"The name you set in the cozie settings above (required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user-id"),(0,r.kt)("td",{parentName:"tr",align:null},"The user-id set above (optional, if not included all users are extracted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weeks"),(0,r.kt)("td",{parentName:"tr",align:null},"Weeks of data (optional, default is 2 weeks)")))),(0,r.kt)("h3",{id:"extracting-data-with-python"},"Extracting Data with Python"),(0,r.kt)("p",null,"The Python script below is all you need to download data logged with the Cozie clock face.. Make sure to configure at leaset ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPERIMENT_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTICIPANT")," before executing the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Settings\nYOUR_TIMEZONE = 'Asia/Singapore'\nID_PARTICIPANT = 'alpha'\nID_EXPERIMENT = 'alpha01'\nWEEKS = \"100\"  # Number of weeks from which the data is retrived, starting from now\nAPI_KEY = '' # reach out to cozie.app@gmail.com for an API_KEY\n\n# Assemble request\npayload = {'experiment_id': ID_EXPERIMENT, 'weeks': WEEKS, }\nheaders = {\"Accept\": \"application/json\", 'x-api-key': API_KEY}\n\n# Query data\nresponse = requests.get('https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx', params=payload, headers=headers)\n\n# Convert response to Pandas dataframe\nmy_json = response.content.decode('utf8').replace(\"'\", '\"')\ndata = json.loads(my_json, )\ndf = pd.read_json(data[1]['data']).T\n\ndf.index = pd.to_datetime(df['index'], unit='ms')\ndf = df.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)\ndf = df.drop(columns=['index'])\n\n# Display dataframe\ndf.head()\n")),(0,r.kt)("h3",{id:"some-mild-data-processing"},"Some mild data processing"),(0,r.kt)("p",null,"The raw data has the watch survey responses encoded as numbers between 9 and 12. These values can be converted back into the words shown on the clock face with the code snippet below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Translate integer values into strings for main question flow\ntranslation_table = {'thermal':      { 9: 'No change',\n                                      10: 'Warmer',\n                                      11: 'Cooler',\n                                      12: 'Something else'},\n                     'indoorOutdoor':{10: 'Outdoor',\n                                      11: 'Indoor'},\n                     'location':     { 9: 'Neither',\n                                      10: 'Office',\n                                      11: 'Home'},\n                     'clothing':     { 9: 'Medium',\n                                      10: 'Heavy',\n                                      11: 'Light'},\n                     'airSpeed':     {10: 'Yes',\n                                      11: 'No'},\n                     'met':          { 9: 'Sitting',\n                                      10: 'Standing',\n                                      11: 'Resting'},\n                     'anyChange':    {10: 'No',\n                                      11: 'Yes'},\n                     'mood':         { 9: 'Neutral',\n                                      10: 'Bad',\n                                      11: 'Good'},\n                     'noise':        { 9: 'No Change',\n                                      10: 'Louder',\n                                      11: 'Quieter'},\n                     'light':        { 9: 'No Change',\n                                      10: 'Brighter',\n                                      11: 'Dimmer'}\n                     }\n\ndf = df.replace(translation_table)\n")),(0,r.kt)("p",null,"Additionally, the column names can also be replaced with the question show on the clock face:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Change column names\ndf = df.rename(columns={'thermal':'Would you prefer to be?', \n                        'indoorOutdoor':'Are you?', \n                        'location':'Where are you?', \n                        'clothing':'What are you wearing?', \n                        'airSpeed':'Can you perceive air movement around you?', \n                        'met':'Activity, lat 10-min?', \n                        'anyChange':'Any changes in clo, loc, or met past 10-m?', \n                        'mood':'What mood are you in?', \n                        'noise':'Sound preference', \n                        'light':'Light preference'})\n\ndf.head()\n")))}p.isMDXComponent=!0}}]);