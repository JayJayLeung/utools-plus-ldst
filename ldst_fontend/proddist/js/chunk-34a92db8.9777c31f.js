(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34a92db8","chunk-4376ecd8","chunk-5c69be88","chunk-68630a6f","chunk-df0c8618","chunk-2d21e7e5"],{"12b2":function(t,e,n){"use strict";var a=n("4f73"),i=n.n(a);i.a},"387a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textareabox"},[n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("div",[t.isShow?n("h4",{style:{color:t.$vuetify.theme.defaults.light.primary}},[t._v(t._s(t.label||t.$t("label_The_mail_text")))]):n("v-textarea",t._g(t._b({style:{"background-color":t.readonly?"#fff":"rgb(242, 242, 242)"},attrs:{name:"input-7-4",readonly:!0,label:t.label||t.$t("label_The_mail_text"),"append-icon":"mdi-longitude"},model:{value:t.defaultcontent,callback:function(e){t.defaultcontent=e},expression:"defaultcontent"}},"v-textarea",i,!1),a))],1)]}}]),model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[n("v-list",{staticClass:"bigbox"},[t._l(t.childrencontent,(function(e,a){return n("v-list-item",{key:a},[n("v-textarea",{attrs:{readonly:t.readonly,rules:t.rules,name:"input-7-4",label:e.language_code+"*"},on:{blur:t.handleinputBlur,change:t.change},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"item.content"}}),n("propertyDialog",{attrs:{readonly:!t.readonly,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid},on:{getpropertylist:function(e){return t.getpropertylist(e,a)}}})],1)})),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.readonly,expression:"!readonly"}],staticClass:"btnbox"},[n("mrc_ess_submitBtn",{attrs:{cancelText:"cancel",successText:"OK"},on:{cancel:t.cancel,success:t.success}})],1)],2)],1)],1)},i=[],s=(n("d81d"),n("fb6a"),n("c1ae")),r={components:{propertyDialog:s["default"]},props:{label:{type:String},defaultcontent:{type:String,default:"请设置内容"},content:{type:Array,default:function(){return[]}},readonly:{type:Boolean,default:!1},function_uuid:{type:String},updateFunction_uuid:{type:String}},model:{prop:"content",event:"contentChange"},data:function(){return{rules:[function(t){return!!t||"Required."}],showMenu:!1,childrencontent:[],blurIndex:"",isShow:!1}},computed:{},created:function(){},watch:{content:{handler:function(t){this.childrencontent=this.$clone(t)},deep:!0}},mounted:function(){this.childrencontent=this.$clone(this.content)},methods:{change:function(t){},success:function(){this.isShow=!1,this.$emit("contentChange",this.childrencontent)},cancel:function(){this.isShow=!1,this.childrencontent=this.$clone(this.content)},getpropertylist:function(t,e){var n=this;t.map((function(t){n.childrencontent[e].content?n.childrencontent[e].content=n.childrencontent[e].content.slice(0,n.blurIndex)+t.property+n.childrencontent[e].content.slice(n.blurIndex):n.childrencontent[e].content=t.property}))},handleinputBlur:function(t){this.blurIndex=t.srcElement.selectionStart}}},o=r,c=(n("cb2a"),n("2877")),l=Object(c["a"])(o,a,i,!1,null,"c62825a4",null);e["default"]=l.exports},"43ff":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticStyle:{position:"relative"},attrs:{cols:"12"}},[n("h4",{staticClass:"pl-2",style:{fontSize:"16px",fontWeight:500,color:t.labelcolor?t.$vuetify.theme.defaults.light.primary:""}},[t._v(t._s(t.headertext||t.$t("label_The_recipient")))]),n("div",{staticClass:"dvinput pl-2",style:{"border-bottom":t.labelcolor?"2px solid "+t.$vuetify.theme.defaults.light.primary:"1px solid black","background-color":t.readonly?"#fff":"rgb(242, 242, 242)"}},[n("span",{staticClass:"d-flex span1"},[t._l(t.showlist,(function(e,a){return n("span",{key:a+e,staticClass:"person"},[n("v-chip",{attrs:{close:!0,disabled:t.readonly},on:{"click:close":function(n){return t.chipclose(e,a)}}},[t._v(" "+t._s(e))])],1)})),t._l(t.showpropertylist,(function(e,a){return n("span",{key:a,staticClass:"property"},[t._v(" "+t._s(e.property)+" ")])})),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputvalue,expression:"inputvalue"}],staticClass:"input1",attrs:{type:"text",disabled:t.readonly,id:t.inputid},domProps:{value:t.inputvalue},on:{input:[function(e){e.target.composing||(t.inputvalue=e.target.value)},t.input],blur:t.blur,focus:t.focus}}),t.readonly?t._e():n("span",{on:{click:t.changeselect}},[n("v-icon",{staticClass:"material-icons"},[t._v("expand_more")])],1)],2)]),n("div",{staticClass:"selectbox dvprevent",class:t.classshow?"hideorshow":"",on:{mousedown:function(e){return e.stopPropagation(),t.mousedown(e)}}},t._l(t.showselectlist,(function(e,a){return n("div",{key:a,staticClass:"d-flex dvprevent dv2",on:{click:function(n){return t.getitemselect(n,e,a)}}},[n("span",{staticClass:"pl-2 pr-4 dvprevent"},[n("v-img",{staticClass:"dvprevent",attrs:{src:"https://picsum.photos/510/300?random",width:"50",height:"50"}})],1),n("span",{staticClass:"d-flex justify-space-between pr-2 dvprevent",staticStyle:{width:"85%"}},[n("span",{staticClass:"d-flex flex-column dvprevent"},[n("span",{staticClass:"dvprevent span4",on:{mousedown:t.mousedown}},[t._v(t._s(e.christian_name?e.christian_name+"  /  ":"")+t._s(e.preferred_name))]),n("span",{staticClass:"dvprevent span3"},[t._v(" "+t._s(e.org_level_uuid)+"> "+t._s(e.dept_uuid)+"> "+t._s(e.role_uuids)+" ")])]),n("span",{staticClass:"dvprevent"},[t._v("?????")])])])})),0),t.readonly?t._e():n("span",{staticClass:"span2",style:{color:t.$vuetify.theme.defaults.light.primary},on:{click:t.addvariate}},[t._v(t._s(t.$t("label_Join_the_variables"))+" "),n("mrc_ess_svgIcon",{attrs:{iconClass:"open_in_new"}})],1),n("mrc_ess_myDialog",{attrs:{title:t.$t("label_A_new_level"),width:"800",hiddenTitle:"",disabled:!1},on:{success:t.save,cancel:t.close},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card-text",[n("v-tabs",{attrs:{grow:"","background-color":"#ffffff",color:"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab",{key:e.tab,staticStyle:{color:"black"}},[t._v(" "+t._s(e.tab)+" ")])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",t._l(t.variatelist,(function(e,a){return n("div",{key:a+e},[n("div",{staticClass:"ptbox",class:e.divbgd?"divbgd":"",on:{click:function(n){return t.changebgd(e,a)}}},[n("span",[t._v(t._s(e.property))])])])})),0),n("v-tab-item")],1)],1)],1)],1)},i=[],s=(n("caad"),n("c975"),n("d81d"),n("a434"),n("2532"),n("96cf"),n("1da1")),r=n("fb42"),o={components:{},props:{function_uuid:{type:String},updateFunction_uuid:{type:String},selectlist:{type:Array},showlist:{type:Array},propertylist:{type:Array},inputid:{type:String,default:"pycredit_name"},headertext:{type:String},readonly:{type:Boolean,default:!1},iconid:{type:String,default:"meass"}},data:function(){return{labelcolor:!1,classshow:!0,inputvalue:"",dialog:!1,tab:null,items:[{tab:"功能变量"},{tab:"系统变量"}],variatelist:[],showpropertylist:[],showselectlist:[]}},computed:{},created:function(){},watch:{propertylist:{handler:function(t){this.showpropertylist=t},deep:!0}},mounted:function(){this.showselectlist=this.selectlist,this.showpropertylist=this.propertylist},methods:{mousedown:function(t){t.preventDefault()},replaceitem:function(t,e){e.map((function(e){for(var n=e.property,a=!0,i=0;i<t.length;i++)if(n==t[i].property){a=!1;break}e.divbgd=!a}))},getitemselect:function(t,e,n){document.getElementById(this.inputid).focus(),this.showlist.includes(e.staff_email)||this.showlist.includes(e.tricode)?this.$store.commit("newsTips",this.$t("message_The_recipient_has_been_added")):this.inputvalue=e.staff_email||e.tricode},getvariatelist:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(!this.variatelist.length>0)){t.next=12;break}if(e=null,!this.$store.state.uuid){t.next=8;break}return t.next=5,Object(r["getBusinessList"])({prompt_name:"email_address_field",function_uuid:this.updateFunction_uuid});case 5:e=t.sent,t.next=11;break;case 8:return t.next=10,Object(r["getBusinessList"])({prompt_name:"email_address_field",function_uuid:this.function_uuid});case 10:e=t.sent;case 11:this.variatelist=e.data.map((function(t){return t.property="{{"+t.field_name+"}}",delete t.field_name,t}));case 12:this.replaceitem(this.showpropertylist,this.variatelist);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeselect:function(){this.classshow=!this.classshow,this.showselectlist=this.selectlist},chipclose:function(t,e){this.showlist.splice(e,1)},blur:function(t){this.labelcolor=!this.labelcolor,this.classshow=!0,this.inputvalue&&!this.showlist.includes(this.inputvalue)?(this.showlist.push(this.inputvalue),this.inputvalue=""):this.inputvalue&&(this.$store.commit("newsTips",this.$t("message_Do_not_add_repeatedly")),this.inputvalue="")},input:function(){var t=this,e=[];this.inputvalue&&this.selectlist.map((function(n){-1!=n.preferred_name.indexOf(t.inputvalue)&&e.push(n),-1!=n.staff_email.indexOf(t.inputvalue)&&e.push(n),-1!=n.tricode.indexOf(t.inputvalue)&&e.push(n)})),this.showselectlist=e,this.classshow=!1},focus:function(){this.labelcolor=!this.labelcolor},addvariate:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialog=!0,t.next=3,this.getvariatelist();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changebgd:function(t,e){t.divbgd=!t.divbgd,this.$set(this.variatelist,e,t)},close:function(){this.dialog=!1;var t=[];this.variatelist.map((function(e){1==e.divbgd&&t.push(e)})),this.showpropertylist=t,this.$emit("getpropertylist",this.showpropertylist)},save:function(){}}},c=o,l=(n("ccde"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"f9a5da8a",null);e["default"]=u.exports},"4f73":function(t,e,n){},5155:function(t,e,n){"use strict";var a=n("ff7d"),i=n.n(a);i.a},"6a26":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title"),n("v-card-text",[n("v-row",[n("emailinput",{attrs:{selectlist:t.selectlist,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid,showlist:t.showlist,propertylist:t.propertylist,readonly:t.disabled},on:{getpropertylist:t.getpropertylist}}),n("emailinput",{attrs:{selectlist:t.selectlist,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid,readonly:t.disabled,inputid:"deputy",showlist:t.deputyshowlist,propertylist:t.deputypropertylist,headertext:t.$t("label_Deputy_to_the_addressee")},on:{getpropertylist:t.deputygetpropertylist}}),n("v-col",{staticStyle:{position:"relative"},attrs:{cols:"12"}},[n("inputtemplate",{attrs:{readonly:t.disabled,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid,defaultemailsubject:t.defaultemailsubject},model:{value:t.emailsubject,callback:function(e){t.emailsubject=e},expression:"emailsubject"}})],1),n("v-col",{attrs:{cols:"12"}},[n("textareatemplate",{attrs:{defaultcontent:t.defaultemailcontent,readonly:t.disabled,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid},model:{value:t.emailcontent,callback:function(e){t.emailcontent=e},expression:"emailcontent"}})],1)],1)],1),t.$store.state.uuid?[t.disabled?t._e():n("mrc_ess_submitBtn",{on:{cancel:t.cancel,success:t.success}})]:[t.disabled?t._e():n("mrc_ess_submitBtn",{attrs:{cancelText:t.$t("label_The_previous_step")},on:{cancel:t.addcancel,success:t.addsuccess}})]],2)},i=[],s=(n("99af"),n("4de4"),n("c975"),n("a15b"),n("d81d"),n("ac1f"),n("5319"),n("1276"),n("5530")),r=n("2909"),o=(n("96cf"),n("1da1")),c=n("d696"),l=n("fb42"),u=n("43ff"),d=n("c1ae"),p=n("387a"),h=n("b25a"),f={components:{emailinput:u["default"],propertyDialog:d["default"],textareatemplate:p["default"],inputtemplate:h["default"]},props:{disabled:{type:Boolean},function_uuid:{type:String}},data:function(){return{selectlist:[],showlist:[],propertylist:[],deputyshowlist:[],deputypropertylist:[],emailsubject:[],emailcontent:[],inputstatus:!1,tab:null,items:[{tab:"功能变量"},{tab:"系统变量"}],list:{},dialog:!1,recipientsitems:[],recipients:[],childrenpropertylist:[],updateFunction_uuid:""}},computed:{defaultemailsubject:function(){var t=this.$store.state.lang,e=this.emailsubject.filter((function(e){return e.language_code==t}));return e.length>0?e[0].content:"请设置内容"},defaultemailcontent:function(){var t=this.$store.state.lang,e=this.emailcontent.filter((function(e){return e.language_code==t}));return e.length>0?e[0].content:"请设置内容"}},created:function(){},watch:{TSemailsubject:{handler:function(t){console.log(t,"只改变了")}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getselectlist();case 2:if(!this.$store.state.uuid){t.next=7;break}return t.next=5,this.getdetail();case 5:t.next=8;break;case 7:this.$store.state.currentCompanyLanguage.map((function(t){e.emailsubject.push({language_code:t.value,content_type:"1",content:""}),e.emailcontent.push({language_code:t.value,content_type:"2",content:""})}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getdetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,s,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["getdetailemailtemplate"])({uuid:this.$store.state.uuid});case 2:e=t.sent,200==e.code&&(n=[],a=[],i=[],s=[],r=[],o=[],this.updateFunction_uuid=e.data.function_uuid,-1!=e.data.template_addressee.indexOf(",")?e.data.template_addressee.split(",").map((function(t){0==t.indexOf("{{")?n.push({property:t,divbgd:!0}):a.push(t)})):0==e.data.template_addressee.indexOf("{{")?n.push({property:e.data.template_addressee,divbgd:!0}):a.push(e.data.template_addressee),console.log(e.data.template_carbon_copy),-1!=e.data.template_carbon_copy.indexOf(",")?e.data.template_carbon_copy.split(",").map((function(t){0==t.indexOf("{{")?i.push({property:t,divbgd:!0}):s.push(t)})):-1!=e.data.template_carbon_copy.indexOf("{{")?i.push({property:e.data.template_carbon_copy,divbgd:!0}):s.push(e.data.template_carbon_copy),e.mrbase_sys_mail_template_language.map((function(t){1==t.content_type&&(t.content=t.content.replace(/<br\/>/g,"\n"),r.push(t)),2==t.content_type&&(t.content=t.content.replace(/<br\/>/g,"\n"),o.push(t))})),this.propertylist=n,this.showlist=a,this.deputypropertylist=i,this.deputyshowlist=""!=s[0]?s:[],this.emailsubject=r,this.emailcontent=o);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getselectlist:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.currentCompany,t.next=3,Object(l["getBusinessList"])({prompt_name:"recipients_staff",uuid:e});case 3:n=t.sent,200==n.code&&(this.selectlist=n.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){var t=this;this.$myConfirm({content:"确认取消编辑"}).then((function(e){t.$router.push({name:"emailtemplate"})}))["catch"]((function(t){}))},datatreating:function(){var t=this.showlist.join(",");this.propertylist.map((function(e){t+=e.property}));var e=this.deputyshowlist.join(",");this.deputypropertylist.map((function(t){e+=t.property}));var n=this.$clone(this.$deletefield(this.emailsubject)).map((function(t){return t.content.replace(/\n/g,"<br/>"),t})),a=this.$clone(this.$deletefield(this.emailcontent)).map((function(t){return t.content=t.content.replace(/\n/g,"<br/>"),t})),i=[].concat(Object(r["a"])(n),Object(r["a"])(a));return i=i.map((function(t){return delete t.id,delete t.template_uuid,t})),console.log(i),{mrbase_sys_mail_template_language:i,template_addressee:t,template_carbon_copy:e}},success:function(){var t=this;Object(c["updateemailtemplate"])(Object(s["a"])({uuid:this.$store.state.uuid},this.datatreating())).then((function(e){200==e.code?(t.$store.commit("newsTips",t.$t("message_The_operation_was_successful")),t.getdetail()):t.$store.commit("newsTips",e.msg)}))},addcancel:function(){this.$emit("changee1",1)},addsuccess:function(){this.$emit("submit",this.datatreating())},getpropertylist:function(t){this.propertylist=t},deputygetpropertylist:function(t){this.deputypropertylist=t}}},m=f,v=(n("5155"),n("2877")),b=Object(v["a"])(m,a,i,!1,null,"da185d64",null);e["default"]=b.exports},"76d8":function(t,e,n){},b25a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("div",[t.isShow?n("h4",{style:{color:t.$vuetify.theme.defaults.light.primary}},[t._v(t._s(t.label))]):n("mrc_ess_input",t._g(t._b({attrs:{label:t.label||t.$t("label_Email_message"),readonly:t.readonly,"append-icon":"mdi-longitude"},model:{value:t.defaultemailsubject,callback:function(e){t.defaultemailsubject=e},expression:"defaultemailsubject"}},"mrc_ess_input",i,!1),a))],1)]}}]),model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[n("v-list",{staticClass:"bigbox"},[t._l(t.childrenpurport,(function(e,a){return n("v-list-item",{key:a},[n("mrc_ess_input",{attrs:{label:t.$t("label."+e.language_code)+"*",rules:t.rules,readonly:t.readonly},on:{blur:t.handleinputBlur},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"item.content"}}),n("propertyDialog",{attrs:{readonly:!t.readonly,function_uuid:t.function_uuid,updateFunction_uuid:t.updateFunction_uuid},on:{getpropertylist:function(e){return t.getpropertylist(e,a)}}})],1)})),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.readonly,expression:"!readonly"}],staticClass:"btnbox"},[n("mrc_ess_submitBtn",{attrs:{cancelText:"cancel",successText:"OK"},on:{cancel:t.cancel,success:t.success}})],1)],2)],1)],1)},i=[],s=(n("d81d"),n("fb6a"),n("c1ae")),r={components:{propertyDialog:s["default"]},props:{label:{type:String},purport:{type:Array,default:function(){return[]}},defaultemailsubject:{type:String,default:"请设置内容"},readonly:{type:Boolean,default:!1},function_uuid:{type:String},updateFunction_uuid:{type:String}},model:{prop:"purport",event:"purportChange"},data:function(){return{rules:[function(t){return!!t||"Required."}],isShow:!1,childrenpurport:[],blurIndex:null}},computed:{},created:function(){},watch:{purport:{handler:function(t){this.childrenpurport=this.$clone(t)},deep:!0}},mounted:function(){this.childrenpurport=this.$clone(this.purport)},methods:{success:function(){this.isShow=!1,this.$emit("purportChange",this.childrenpurport)},cancel:function(){this.isShow=!1,this.childrenpurport=this.$clone(this.purport)},getpropertylist:function(t,e){var n=this;t.map((function(t){n.childrenpurport[e].content?n.childrenpurport[e].content=n.childrenpurport[e].content.slice(0,n.blurIndex)+t.property+n.childrenpurport[e].content.slice(n.blurIndex):n.childrenpurport[e].content=t.property}))},handleinputBlur:function(t){this.blurIndex=t.srcElement.selectionStart}},validations:{}},o=r,c=(n("e87a"),n("2877")),l=Object(c["a"])(o,a,i,!1,null,"1f06a0f1",null);e["default"]=l.exports},c1ae:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigbox"},[n("div",[t.readonly?n("span",{staticClass:"span2",style:{color:t.$vuetify.theme.defaults.light.primary},on:{click:t.addvariate}},[t._v(t._s(t.$t("label_Join_the_variables"))+" "),n("mrc_ess_svgIcon",{attrs:{iconClass:"open_in_new"}})],1):t._e()]),n("mrc_ess_myDialog",{attrs:{title:t.$t("label_A_new_level"),width:"800",hiddenTitle:"",disabled:!1},on:{cancel:t.close},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card-text",[n("v-tabs",{attrs:{grow:"","background-color":"#ffffff",color:"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab",{key:e.tab,staticStyle:{color:"black"}},[t._v(" "+t._s(e.tab)+" ")])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticStyle:{"overflow-y":"scroll","max-height":"300px"}},t._l(t.variatelist,(function(e,a){return n("div",{key:a+e},[n("div",{staticClass:"ptbox",class:e.divbgd?"divbgd":"",on:{click:function(n){return t.changebgd(e,a)}}},[n("span",[t._v(t._s(e.property))]),n("span",{staticStyle:{color:"#bcbcbc"}},[t._v(t._s(e.name))])])])})),0),n("v-tab-item",{staticStyle:{"overflow-y":"scroll","max-height":"300px"}},t._l(t.syslist,(function(e,a){return n("div",{key:a+e},[n("div",{staticClass:"ptbox",class:e.divbgd?"divbgd":"",on:{click:function(n){return t.changebgd2(e,a)}}},[n("span",[t._v(t._s(e.property))]),n("span",{staticStyle:{color:"#bcbcbc"}},[t._v(t._s(e.name))])])])})),0)],1)],1)],1)],1)},i=[],s=(n("d81d"),n("5530")),r=(n("96cf"),n("1da1")),o=n("fb42"),c={components:{},props:{readonly:{type:Boolean,default:!0},function_uuid:{type:String},updateFunction_uuid:{type:String}},data:function(){return{itemss:[],offset:!0,tab:null,items:[{tab:"功能变量"},{tab:"系统变量"}],dialog:!1,variatelist:[],syslist:[]}},computed:{},created:function(){},watch:{},mounted:function(){},methods:{getvariatelist:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(!this.variatelist.length>0)){t.next=12;break}if(e=null,!this.$store.state.uuid){t.next=8;break}return t.next=5,Object(o["getBusinessList"])({prompt_name:"email_address_field",function_uuid:this.updateFunction_uuid});case 5:e=t.sent,t.next=11;break;case 8:return t.next=10,Object(o["getBusinessList"])({prompt_name:"email_address_field",function_uuid:this.function_uuid});case 10:e=t.sent;case 11:this.variatelist=e.data.map((function(t){return t.property="{{"+t.field_name+"}}",delete t.field_name,t}));case 12:this.variatelist=this.variatelist.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{divbgd:!1})}));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getsyslist:function(){this.syslist=[{property:"{{112saaas}}",name:"xasxaxaaxa"},{property:"{{112xasaokhhh}}",name:"xasxaxaaxa"},{property:"{{112qqqws}}",name:"xasxaxaxaxaaxa"},{property:"{{112qwertyui}}",name:"xaxxsxaxxaaxa"},{property:"{{112saaas}}",name:"xasxaxaaxa"},{property:"{{112xasaokhhh}}",name:"xasxaxaaxa"},{property:"{{112qqqws}}",name:"xasxaxaxaxaaxa"},{property:"{{112qwertyui}}",name:"xaxxsxaxxaaxa"},{property:"{{112saaas}}",name:"xasxaxaaxa"},{property:"{{112xasaokhhh}}",name:"xasxaxaaxa"},{property:"{{112qqqws}}",name:"xasxaxaxaxaaxa"},{property:"{{112qwertyui}}",name:"xaxxsxaxxaaxa"},{property:"{{112saaas}}",name:"xasxaxaaxa"},{property:"{{112xasaokhhh}}",name:"xasxaxaaxa"},{property:"{{112qqqws}}",name:"xasxaxaxaxaaxa"},{property:"{{112qwertyui}}",name:"xaxxsxaxxaaxa"}],this.syslist=this.variatelist.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{divbgd:!1})}))},addvariate:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialog=!0,t.next=3,this.getvariatelist();case 3:this.getsyslist();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changebgd:function(t,e){t.divbgd=!t.divbgd,this.$set(this.variatelist,e,t)},changebgd2:function(t,e){t.divbgd=!t.divbgd,this.$set(this.syslist,e,t)},close:function(){this.dialog=!1;var t=[];this.variatelist.map((function(e){1==e.divbgd&&t.push(e)})),this.syslist.map((function(e){1==e.divbgd&&t.push(e)})),this.$emit("getpropertylist",t),this.variatelist=this.variatelist.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{divbgd:!1})})),this.syslist=this.syslist.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{divbgd:!1})}))},save:function(){}}},l=c,u=(n("12b2"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"5c4eb00a",null);e["default"]=d.exports},c92e:function(t,e,n){},cb2a:function(t,e,n){"use strict";var a=n("76d8"),i=n.n(a);i.a},ccde:function(t,e,n){"use strict";var a=n("cd16"),i=n.n(a);i.a},cd16:function(t,e,n){},d696:function(t,e,n){"use strict";n.r(e),n.d(e,"getemailtemplatelist",(function(){return s})),n.d(e,"getdetailemailtemplate",(function(){return r})),n.d(e,"addemailtemplate",(function(){return o})),n.d(e,"updateemailtemplate",(function(){return c})),n.d(e,"deleteemailtemplate",(function(){return l}));n("d3b7");var a=n("efc9"),i="mrbase_sys_mail_template",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/mailtemplate/list-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/mailtemplate/find-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/mailtemplate/add-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/mailtemplate/update-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/mailtemplate/delete-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},e87a:function(t,e,n){"use strict";var a=n("c92e"),i=n.n(a);i.a},ff7d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-34a92db8.9777c31f.js.map