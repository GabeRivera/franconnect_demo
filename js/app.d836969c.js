(function(t){function a(a){for(var n,i,s=a[0],l=a[1],u=a[2],v=0,p=[];v<s.length;v++)i=s[v],o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(a);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(n=!1)}n&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},o={app:0},r=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var c=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2b3c":function(t,a,e){},"2e63":function(t,a,e){"use strict";var n=e("f67d"),o=e.n(n);o.a},"56d7":function(t,a,e){"use strict";e.r(a);var n=e("f499"),o=e.n(n),r=(e("cadf"),e("551c"),e("f751"),e("097d"),e("2b0e")),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:{name:"saved"}}},[t._v("Saved")]),e("router-link",{attrs:{to:{name:"about"}}},[t._v("About")])],1),e("router-view")],1)},s=[],l=(e("5c0b"),e("2877")),u={},c=Object(l["a"])(u,i,s,!1,null,null,null),v=c.exports,p=e("8c4f"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("h1",[t._v("\n    Welcome to Daytripper\n  ")]),e("p",[t._v("\n    Need to escape the hustle and bustle in America's gorgeous public lands?\n  ")]),e("p",[t._v("\n    Let us help you find the park that fits your needs\n  ")]),e("button",{staticClass:"begin",on:{click:t.showLocationForm}},[t._v("Begin!")]),e("transition",{attrs:{name:"fade"}},[t.formLocationShown?e("parks-form-location",{staticClass:"location-form",on:{locationDone:t.showDesignationForm}}):t._e()],1),e("transition",{attrs:{name:"fade"}},[t.formDesignationShown?e("parks-form-designation",{staticClass:"designation-form",on:{designationDone:t.showParks}}):t._e()],1),null!=t.parks?e("transition-group",{staticClass:"parks",attrs:{name:"fade",tag:"div"}},[e("h2",[t._v("Results")]),t._l(t.parks,function(t){return e("park-item",{key:t.id,attrs:{park:t}})})],2):t._e()],1)},_=[],f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"park-item"},[e("div",{staticClass:"park-item-title"},[e("h2",[t._v(t._s(t.park.fullname))])]),e("div",{staticClass:"park-item-text"},[e("p",[t._v(t._s(t.park.designation))]),e("p",[t._v(t._s(t._f("truncate")(t.park.description)))])]),e("div",{staticClass:"park-item-actions"},[e("p",[e("button",{staticClass:"pulse-boy",on:{click:function(a){return a.preventDefault(),t.savePark(a)}}},[t._v("Save Me")])]),e("p",[e("router-link",{attrs:{to:{name:"park",params:{parkcode:t.park.parkCode||t.park.parkcode}}}},[t._v("Learn More")])],1)])])},h=[],m=e("cebc"),k=e("2f62"),g={name:"park-item",props:["park"],filters:{truncate:function(t){return t.length>90&&(t=t.substring(0,85)+"..."),t}},methods:Object(m["a"])({},Object(k["b"])(["SAVE_PARK_ACTION"]),{savePark:function(){this.SAVE_PARK_ACTION(this.park)}})},b=g,S=(e("cf4b"),Object(l["a"])(b,f,h,!1,null,null,null)),A=S.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("What state do you live in? ")]),t.loading?e("span",{staticClass:"loader"},[t._v("checking...")]):t._e(),t.displayForm?t._e():e("p",{staticClass:"selected-state"},[t._v(t._s(t.state))]),t.displayForm?e("form",{on:{submit:function(a){return a.preventDefault(),t.submitLocation(a)}}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.state=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"null"}},[t._v("Choose a State")]),e("option",{attrs:{value:"AL"}},[t._v("Alabama")]),e("option",{attrs:{value:"AK"}},[t._v("Alaska")]),e("option",{attrs:{value:"AZ"}},[t._v("Arizona")]),e("option",{attrs:{value:"AR"}},[t._v("Arkansas")]),e("option",{attrs:{value:"CA"}},[t._v("California")]),e("option",{attrs:{value:"CO"}},[t._v("Colorado")]),e("option",{attrs:{value:"CT"}},[t._v("Connecticut")]),e("option",{attrs:{value:"DE"}},[t._v("Delaware")]),e("option",{attrs:{value:"DC"}},[t._v("District Of Columbia")]),e("option",{attrs:{value:"FL"}},[t._v("Florida")]),e("option",{attrs:{value:"GA"}},[t._v("Georgia")]),e("option",{attrs:{value:"HI"}},[t._v("Hawaii")]),e("option",{attrs:{value:"ID"}},[t._v("Idaho")]),e("option",{attrs:{value:"IL"}},[t._v("Illinois")]),e("option",{attrs:{value:"IN"}},[t._v("Indiana")]),e("option",{attrs:{value:"IA"}},[t._v("Iowa")]),e("option",{attrs:{value:"KS"}},[t._v("Kansas")]),e("option",{attrs:{value:"KY"}},[t._v("Kentucky")]),e("option",{attrs:{value:"LA"}},[t._v("Louisiana")]),e("option",{attrs:{value:"ME"}},[t._v("Maine")]),e("option",{attrs:{value:"MD"}},[t._v("Maryland")]),e("option",{attrs:{value:"MA"}},[t._v("Massachusetts")]),e("option",{attrs:{value:"MI"}},[t._v("Michigan")]),e("option",{attrs:{value:"MN"}},[t._v("Minnesota")]),e("option",{attrs:{value:"MS"}},[t._v("Mississippi")]),e("option",{attrs:{value:"MO"}},[t._v("Missouri")]),e("option",{attrs:{value:"MT"}},[t._v("Montana")]),e("option",{attrs:{value:"NE"}},[t._v("Nebraska")]),e("option",{attrs:{value:"NV"}},[t._v("Nevada")]),e("option",{attrs:{value:"NH"}},[t._v("New Hampshire")]),e("option",{attrs:{value:"NJ"}},[t._v("New Jersey")]),e("option",{attrs:{value:"NM"}},[t._v("New Mexico")]),e("option",{attrs:{value:"NY"}},[t._v("New York")]),e("option",{attrs:{value:"NC"}},[t._v("North Carolina")]),e("option",{attrs:{value:"ND"}},[t._v("North Dakota")]),e("option",{attrs:{value:"OH"}},[t._v("Ohio")]),e("option",{attrs:{value:"OK"}},[t._v("Oklahoma")]),e("option",{attrs:{value:"OR"}},[t._v("Oregon")]),e("option",{attrs:{value:"PA"}},[t._v("Pennsylvania")]),e("option",{attrs:{value:"RI"}},[t._v("Rhode Island")]),e("option",{attrs:{value:"SC"}},[t._v("South Carolina")]),e("option",{attrs:{value:"SD"}},[t._v("South Dakota")]),e("option",{attrs:{value:"TN"}},[t._v("Tennessee")]),e("option",{attrs:{value:"TX"}},[t._v("Texas")]),e("option",{attrs:{value:"UT"}},[t._v("Utah")]),e("option",{attrs:{value:"VT"}},[t._v("Vermont")]),e("option",{attrs:{value:"VA"}},[t._v("Virginia")]),e("option",{attrs:{value:"WA"}},[t._v("Washington")]),e("option",{attrs:{value:"WV"}},[t._v("West Virginia")]),e("option",{attrs:{value:"WI"}},[t._v("Wisconsin")]),e("option",{attrs:{value:"WY"}},[t._v("Wyoming")])]),e("input",{attrs:{type:"submit",value:"Go"}})]):t._e()])},T=[],y={name:"parks-form-location",data:function(){return{state:null,loading:!1,displayForm:!0}},methods:Object(m["a"])({},Object(k["b"])(["GET_STATE_PARKS"]),{submitLocation:function(){var t=this;this.loading=!0,this.GET_STATE_PARKS(this.state).then(function(){t.loading=!1,t.displayForm=!1,t.$emit("locationDone")})}})},P=y,O=(e("db19"),Object(l["a"])(P,N,T,!1,null,null,null)),C=O.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("What kind of park would you like to visit? ")]),t.loading?e("span",{staticClass:"loader"},[t._v("Looking for a park with your specified designation...")]):t._e(),t.displayForm?t._e():e("p",{staticClass:"selected-designation"},[t._v(t._s(t.designation))]),t.displayForm?e("form",{on:{submit:function(a){return a.preventDefault(),t.submitDesignation(a)}}},[e("input",{staticStyle:{display:"none"},attrs:{type:"submit"}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.designation,expression:"designation"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.designation=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"null"}},[t._v("Select a Designation")]),e("option",{attrs:{value:"all"}},[t._v("All")]),e("option",{attrs:{value:"National Park"}},[t._v("National Park")]),e("option",{attrs:{value:"National Monument"}},[t._v("National Monument")]),e("option",{attrs:{value:"National Preserve"}},[t._v("National Preserve")]),e("option",{attrs:{value:"National Historic Site"}},[t._v("National Historic Site")]),e("option",{attrs:{value:"National Historical Park"}},[t._v("National Historical Park")]),e("option",{attrs:{value:"National Memorial"}},[t._v("National Memorial")]),e("option",{attrs:{value:"National Battlefield"}},[t._v("National Battlefield")]),e("option",{attrs:{value:"National Cemetery"}},[t._v("National Cemetery")]),e("option",{attrs:{value:"National Recreation Area"}},[t._v("National Recreation Area")]),e("option",{attrs:{value:"National Seashore"}},[t._v("National Seashore")]),e("option",{attrs:{value:"National Lakeshore"}},[t._v("National Lakeshore")]),e("option",{attrs:{value:"National River"}},[t._v("National River")]),e("option",{attrs:{value:"National Parkway"}},[t._v("National Parkway")]),e("option",{attrs:{value:"National Trail"}},[t._v("National Trail")]),e("option",{attrs:{value:"Affiliated Areas"}},[t._v("Affiliated Areas")])]),e("input",{attrs:{type:"submit",value:"Go"}})]):t._e()])},E=[],w={name:"parks-form-designation",data:function(){return{designation:"all",loading:!1,displayForm:!0}},computed:Object(m["a"])({},Object(k["c"])(["GET_PARK_BY_DESIGNATION"])),methods:{submitDesignation:function(){var t=this.GET_PARK_BY_DESIGNATION(this.designation);console.log(t),this.displayForm=!1,this.$emit("designationDone",t)}}},R=w,M=(e("df1a"),Object(l["a"])(R,I,E,!1,null,null,null)),j=M.exports,D={name:"home",components:{"parks-form-location":C,"parks-form-designation":j,"park-item":A},data:function(){return{formLocationShown:!1,formDesignationShown:!1,parks:null}},methods:{showLocationForm:function(){this.formLocationShown=!0},showDesignationForm:function(){this.formDesignationShown=!0},showParks:function(t){this.parks=t}}},K=D,x=(e("cccb"),Object(l["a"])(K,d,_,!1,null,null,null)),L=x.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Saved")]),e("ul",{staticClass:"saved-parks"},t._l(t.savedParks,function(a){return e("li",{key:a.id,staticClass:"saved-park"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.name))]),e("button",{staticClass:"delete-btn",on:{click:function(e){return e.preventDefault(),t.remove(a.id)}}},[t._v("X")])])}),0)])},V=[],$={name:"saved",computed:Object(m["a"])({},Object(k["d"])(["savedParks"])),methods:Object(m["a"])({},Object(k["b"])(["REMOVE_PARK_ACTION"]),{remove:function(t){this.REMOVE_PARK_ACTION(t)}})},G=$,W=(e("2e63"),Object(l["a"])(G,F,V,!1,null,null,null)),H=W.exports,Y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")]),e("p",[t._v("The purpose of this app is to demonstrate a few things:")]),e("ul",[e("li",[t._v("Getting data from an external API (I am using the NPS API)")]),e("li",[t._v("SPA architecture (this is a Single Page Application)")]),e("li",[t._v("Flux-Architeture State Management (Vuex)")]),e("li",[t._v("Route - Level code splitting (Webpack is generating separate bundles for each view)")]),e("li",[t._v("LocalStorage to persist data."),e("br"),t._v("\n      Sunil, I know you asked me how I would cache a response, and I believe I did not get my point across very well.\n      I believe you were asking about caching on the server (thus your question about the headers) and I was talking\n      about storing data on the client side.\n      For example: In this application I am doing the following:\n\n      "),e("ul",[e("li",[t._v("User selects a State")]),e("li",[t._v("App asks parks api for parks in that state")]),e("li",[t._v("I then save this response to localStorage")]),e("li",[t._v("The user decides to save a park for later")]),e("li",[t._v("I save this in localStorage")]),e("li",[t._v("The user decides to go back and search for the same state again")]),e("li",[t._v("This time, the app uses the data stored in localStorage and does not have to go to the server")]),e("li",[t._v("The user reloads the page after saving items for later")]),e("li",[t._v("The items are still there! Because the app saved and is loading the ones in localStorage.")])])]),e("li",[t._v("Responsive design (it adjusts to different screen sizes)")])])])}],J=(e("e76e"),{}),U=Object(l["a"])(J,Y,B,!1,null,null,null),Z=U.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"park-page"},[t.loading?e("div",[t._v("Fetching park data")]):t._e(),t.loading?t._e():e("div",{staticClass:"park-info"},[e("div",{staticClass:"title"},[e("button",{staticClass:"pulse-boy",on:{click:function(a){return a.preventDefault(),t.savePark(t.park)}}},[t._v("Save")]),e("h1",[t._v(t._s(t.park.fullName||t.park.fullname))])]),e("p",[t._v(t._s(t.park.description))]),t.park.weatherinfo||t.park.weatherInfo?e("div",[e("p",{staticClass:"label"},[t._v("Weather:")]),e("p",[t._v(t._s(t.park.weatherinfo||t.park.weatherInfo))])]):t._e(),t.park.latlong||t.park.latLong?e("div",[e("p",{staticClass:"label"},[t._v("Coordinates:")]),e("p",[t._v(t._s(t.park.latlong||t.park.latLong))])]):t._e(),t.park.directionsurl||t.park.directionsUrl?e("div",[e("p",[e("a",{attrs:{href:t.park.directionsurl||t.park.directionsUrl,target:"_blank"}},[t._v("Directions")])])]):t._e()]),t.alerts.length>0?e("div",{staticClass:"park-alerts"},[t.loading?t._e():e("h1",[t._v("Alerts for "+t._s(t.park.name))]),t._l(t.alerts,function(a){return e("div",{key:a.id,staticClass:"alert"},[e("h4",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.category))]),e("p",[t._v(t._s(a.description))]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v("Learn More")])])})],2):e("div",{staticClass:"park-alerts"},[t.loading?t._e():e("h1",[t._v("Alerts for "+t._s(t.park.name))]),e("h3",[t._v("No Alerts")])])])},z=[],q={name:"park",data:function(){return{loading:!0,park:null,alerts:null}},created:function(){var t=this,a="https://developer.nps.gov/api/v1",e="SJFiMmZFMIS038e6ZsmEPdsTuko3Ovr4b1YKrefX";fetch("".concat(a,"/parks?parkCode=").concat(this.$route.params.parkcode,"&api_key=").concat(e)).then(function(t){return t.json()}).then(function(a){t.park=a.data[0],t.loading=!1}),fetch("".concat(a,"/alerts?parkCode=").concat(this.$route.params.parkcode,"&api_key=").concat(e)).then(function(t){return t.json()}).then(function(a){t.alerts=a.data})},methods:Object(m["a"])({},Object(k["b"])(["SAVE_PARK_ACTION"]),{savePark:function(){this.SAVE_PARK_ACTION(this.park)}})},Q=q,tt=(e("d969"),Object(l["a"])(Q,X,z,!1,null,null,null)),at=tt.exports;r["a"].use(p["a"]);var et=new p["a"]({mode:"history",base:"/franconnect_demo/",routes:[{path:"/",name:"home",component:L},{path:"/saved",name:"saved",component:H},{path:"/about",name:"about",component:Z},{path:"/park/:parkcode",name:"park",component:at}]}),nt=e("795b"),ot=e.n(nt),rt=(e("20d6"),e("5176")),it=e.n(rt);e("6762"),e("2fdb");r["a"].use(k["a"]);var st="https://developer.nps.gov/api/v1",lt="SJFiMmZFMIS038e6ZsmEPdsTuko3Ovr4b1YKrefX",ut=new k["a"].Store({state:{savedParks:[],stateParks:{},currState:null},getters:{GET_PARK_BY_DESIGNATION:function(t){return function(a){return"all"===a?t.stateParks[t.currState]:t.stateParks[t.currState].filter(function(t){return t.designation.includes("".concat(a))})}}},mutations:{INTITIALIZE_STORE:function(t){localStorage.getItem("store")&&this.replaceState(it()(t,JSON.parse(localStorage.getItem("store"))))},SET_STATE_PARKS:function(t,a){t.stateParks[t.currState]=a},SET_CURR_STATE:function(t,a){t.currState=a},SAVE_PARK:function(t,a){var e=t.savedParks.findIndex(function(t){return t.id===a.id});-1===e&&t.savedParks.push(a)},REMOVE_PARK:function(t,a){var e=t.savedParks.findIndex(function(t){return t.id==a});t.savedParks.splice(e,1)}},actions:{GET_STATE_PARKS:function(t,a){return t.commit("SET_CURR_STATE",a),new ot.a(function(e,n){void 0===t.state.stateParks[a]?fetch("".concat(st,"/parks?stateCode=").concat(a,"&api_key=").concat(lt)).then(function(t){return t.json()}).then(function(a){t.commit("SET_STATE_PARKS",a.data),e(!0)}).catch(function(t){return n(t)}):e(!0)})},SAVE_PARK_ACTION:function(t,a){t.commit("SAVE_PARK",a)},REMOVE_PARK_ACTION:function(t,a){t.commit("REMOVE_PARK",a)}}});r["a"].config.productionTip=!1,ut.subscribe(function(t,a){localStorage.setItem("store",o()(a))}),new r["a"]({router:et,store:ut,beforeCreate:function(){this.$store.commit("INTITIALIZE_STORE")},render:function(t){return t(v)},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("5e27"),o=e.n(n);o.a},"5e27":function(t,a,e){},9369:function(t,a,e){},"980d":function(t,a,e){},cccb:function(t,a,e){"use strict";var n=e("d563"),o=e.n(n);o.a},cf4b:function(t,a,e){"use strict";var n=e("e8f3"),o=e.n(n);o.a},d563:function(t,a,e){},d969:function(t,a,e){"use strict";var n=e("e1f1"),o=e.n(n);o.a},db19:function(t,a,e){"use strict";var n=e("9369"),o=e.n(n);o.a},df1a:function(t,a,e){"use strict";var n=e("980d"),o=e.n(n);o.a},e1f1:function(t,a,e){},e76e:function(t,a,e){"use strict";var n=e("2b3c"),o=e.n(n);o.a},e8f3:function(t,a,e){},f67d:function(t,a,e){}});
//# sourceMappingURL=app.d836969c.js.map