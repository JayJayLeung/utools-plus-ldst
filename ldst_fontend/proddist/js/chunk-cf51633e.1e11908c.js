(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf51633e","chunk-4e7dddcd","chunk-661b0350","chunk-2d0ab6cc"],{"0bfe":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"containersbox"},[s("div",{staticClass:"content"},[s("v-icon",{staticClass:"material-icons",staticStyle:{color:"#0f46c1"},style:{display:e.showChildren||e.halfSelected?"none":"block"},on:{click:e.toggleChildren}},[e._v("check_box_outline_blank")]),s("v-icon",{staticClass:"material-icons",staticStyle:{color:"#0f46c1"},style:{display:e.showChildren&&!e.halfSelected?"block":"none"},on:{click:e.toggleChildren}},[e._v("check_box")]),s("v-icon",{staticClass:"material-icons",staticStyle:{color:"#0f46c1"},style:{display:e.halfSelected?"block":"none"},on:{click:e.toggleChildren}},[e._v("indeterminate_check_box")]),s("div",[e._v(" "+e._s(e.containerName)+" ")])],1),e._l(e.copylist,(function(t,n){return s("div",{key:n,staticClass:"content margincontent"},[s("v-icon",{staticClass:"material-icons",staticStyle:{color:"#0f46c1"},on:{click:function(t){return t.stopPropagation(),e.changeicon(n)}}},[e._v(e._s(t.checked?"check_box":"check_box_outline_blank"))]),s("div",[e._v(" "+e._s(t.table_name)+" ")])],1)}))],2)},i=[],a=(s("a623"),s("d81d"),s("45fc"),{components:{},props:{containerName:{type:String},list:{type:Array}},data:function(){return{showChildren:!1,copylist:[],halfSelected:!1}},created:function(){},mounted:function(){this.copylist=this.list.map((function(e){return e.checked=!1,e}))},methods:{toggleChildren:function(){var e=this;this.copylist=this.list.map((function(t,s){return t.checked=!e.showChildren,t})),this.showChildren=!this.showChildren},changeicon:function(e){this.copylist=this.list.map((function(t,s){return e==s&&(t.checked=!t.checked),t}));var t=this.copylist.every((function(e){return 1==e.checked})),s=this.copylist.some((function(e){return 0==e.checked}));t&&(this.halfSelected=!1,this.showChildren=!this.showChildren),s&&(this.halfSelected=!0,this.showChildren=!1)}},computed:{},watch:{containerName:function(){this.copylist=this.list.map((function(e){return e.checked=!1,e}))}}}),c=a,r=(s("63d1"),s("2877")),l=Object(r["a"])(c,n,i,!1,null,"57a974a8",null);t["default"]=l.exports},"0c6b":function(e,t,s){},"0d6e":function(e,t,s){"use strict";var n=s("f020"),i=s.n(n);i.a},"0dd4":function(e,t,s){"use strict";var n=s("3255"),i=s.n(n);i.a},"14e8":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pl-8 pr-8 pt-8"},[s("v-combobox",{attrs:{label:e.$t("label_Email_whitelist_Settings")+"*",multiple:"",items:e.list,"validate-on-blur":!0,"item-text":"client_whitelist_email","item-value":"uuid",chips:"","error-messages":e.isemail,readonly:e.readonly},on:{"update:search-input":e.verifyemail,input:e.emailverify},model:{value:e.states,callback:function(t){e.states=t},expression:"states"}})],1)},i=[],a={props:{list:{type:Array,default:function(){return[]}},readonly:{type:Boolean,default:!1}},data:function(){return{states:[],disabled:!1,select:[],datastorage:this.list,isemail:""}},watch:{list:{handler:function(e){this.states=e},deep:!0}},computed:{},mounted:function(){this.$store.state.detailuuid&&(this.states=this.list)},methods:{verifyemail:function(e){if(null!=e){var t=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e);this.isemail=t?"":this.$t("verify_The_mailbox_format_is_wrong")}else this.isemail=""},emailverify:function(e){""!=this.isemail&&this.states.pop()}}},c=a,r=s("2877"),l=Object(r["a"])(c,n,i,!1,null,null,null);t["default"]=l.exports},"244d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-form",[s("v-stepper",{attrs:{light:!0},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v(e._s(e.$t("label_Copy_from_template")))]),s("v-divider"),s("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v(e._s(e.$t("label_Customer_data")))]),s("v-divider"),s("v-stepper-step",{attrs:{complete:e.e1>3,step:"3"}},[e._v(e._s(e.$t("label_Functional_authority")))]),s("v-divider"),s("v-stepper-step",{attrs:{step:"4",complete:e.e1>4}},[e._v(e._s(e.$t("label_Email_Whitelist")))]),s("v-divider"),s("v-stepper-step",{attrs:{step:"5"}},[e._v(e._s(e.$t("label_language")))])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"pl-6 pr-6"},[s("v-form",{ref:"copyform"},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{label:"Client Source*",obj:e.clientSource},model:{value:e.client,callback:function(t){e.client=t},expression:"client"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{label:"Company*",obj:e.companyName},on:{getData:e.getclientcontainers},model:{value:e.companyuuid,callback:function(t){e.companyuuid=t},expression:"companyuuid"}})],1)],1)],1),s("div",{staticClass:"contentbox"},e._l(Object.keys(e.clientcontainers),(function(t,n){return s("v-card",{key:n,staticClass:"bg2"},[s("clientcontainers",{ref:"childrenClient_containers",refInFor:!0,attrs:{containerName:t,list:e.clientcontainers[t]}})],1)})),1)],1),s("mrc_ess_submitBtn",{attrs:{cancelText:e.$t("label_cancel"),successText:e.$t("label_The_next_step"),disabled:e.btndisabled},on:{cancel:e.edmit,success:function(t){e.e1=2}}})],1),s("v-stepper-content",{staticClass:"bg1",attrs:{step:"2"}},[s("v-card",[s("adduser",{ref:"zjadduser"})],1),s("mrc_ess_submitBtn",{attrs:{cancelText:e.$t("label_The_previous_step"),successText:e.$t("label_The_next_step"),disabled:e.btndisabled},on:{cancel:function(t){e.e1=1},success:function(t){return e.getuserzl()}}})],1),s("v-stepper-content",{staticClass:"bg1",attrs:{step:"3"}},[s("v-card",[e.e1>=3?s("quanxian",{ref:"zjquanxian",attrs:{uuidslist:e.copyuuidslist}}):e._e()],1),s("mrc_ess_submitBtn",{attrs:{cancelText:e.$t("label_The_previous_step"),successText:e.$t("label_The_next_step")},on:{cancel:function(t){e.e1=2},success:e.getuserqx}})],1),s("v-stepper-content",{staticClass:"bg1",attrs:{step:"4"}},[s("v-card",[s("baimingdan",{ref:"zjbaimingdan"})],1),s("mrc_ess_submitBtn",{attrs:{cancelText:e.$t("label_The_previous_step"),successText:e.$t("label_The_next_step")},on:{cancel:function(t){e.e1=3},success:e.getuseryx}})],1),s("v-stepper-content",{staticClass:"bg1",attrs:{step:"5"}},[s("v-card",[s("yuyan",{ref:"reflanguage"})],1),s("mrc_ess_submitBtn",{attrs:{loading:e.btnloading,cancelText:e.$t("label_The_previous_step")},on:{cancel:function(t){e.e1=4},success:function(t){return e.submit()}}})],1)],1)],1)],1)],1)},i=[],a=(s("99af"),s("4160"),s("277d"),s("d81d"),s("159b"),s("96cf"),s("1da1")),c=s("0bfe"),r=s("2926"),l=s("14e8"),u=s("5c7c"),o=s("8d3e"),d=s("b7e6"),_=s("6924"),h={components:{adduser:r["default"],baimingdan:l["default"],quanxian:u["default"],yuyan:o["default"],clientcontainers:c["default"]},data:function(){return{btnloading:!1,btndisabled:!0,rules:[function(e){return!!e||"不能为空."}],valid:!1,e1:1,client:"",companyuuid:"",clientSource:{prompt_name:"mrbase_sys_clients"},Children:{},copyuuidslist:[],function_permission:[],client_languages:[],select1:"",select2:[],listitems:[],ysdefault:{},otherlanguagelist:[],mrbase_sys_function_permission:[]}},computed:{clientcontainers:function(){var e={};for(var t in this.Children)Array.isArray(this.Children[t])&&(e[t]=this.Children[t]);return e},companyName:function(){return{prompt_name:"org_level_relevance_client",client_uuid:this.client}},listClient_containers:function(){var e=[];this.$refs.childrenClient_containers>0&&this.$refs.childrenClient_containers.map((function(t){e=e.concat(JSON.parse(JSON.stringify(t.copylist)))}));var t=[];return e.length>0&&e.map((function(e){1==e.checked&&(delete e.checked,t.push(e))})),t},xzuserlist:function(){return this.$refs.zjadduser.userdetail.client_address_province_id||delete this.$refs.zjadduser.userdetail.client_address_province_id,this.$refs.zjadduser.userdetail.client_address_city_id||delete this.$refs.zjadduser.userdetail.client_address_city_id,this.$refs.zjadduser.userdetail},mrbase_sys_client_contacts:function(){return this.$refs.zjadduser.desserts},mrbase_sys_client_whitelist_email:function(){var e=[];return this.$refs.zjbaimingdan.states.forEach((function(t){var s={"~table~":"mrbase_sys_client_whitelist_email",client_whitelist_email:t};e.push(s)})),e}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_["getBusinessList"])("client_language");case 2:t=e.sent,t.data.length>0&&t.data.map((function(e){s.listitems.push(e.view_fields)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{changee1:function(e){this.e1=e},getclientcontainers:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["copyuserclientdetail"])({client_uuid:this.client,org_level_uuid:this.companyuuid});case 2:t=e.sent,200==t.code&&(this.Children=t.data.client_containers,this.copyuuidslist=t.data.mrbase_sys_function_permission,this.function_permission=t.data.function_permission_tree,this.btndisabled=!1);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getuserzl:function(){this.$refs.zjadduser.formverify()?this.e1=3:this.$myConfirm({content:this.$t("message_The_information_was_not_entered_completely")}).then((function(){}))["catch"]((function(){}))},getuserqx:function(e){!this.$refs.zjquanxian.getchangeref().length>0?this.$myConfirm({content:this.$t("message_permission_list_must_select_at_least_one_item")}):(this.e1=4,this.mrbase_sys_function_permission=this.$refs.zjquanxian.getchangeref())},getuseryx:function(){""!=this.$refs.zjbaimingdan.isemail?this.$myConfirm({content:this.$t("verify_The_mailbox_format_is_wrong")}):this.e1=5},getlanguage:function(e){var t=this;e.length>0&&e.map((function(s,n){1==s.is_default_language?(t.select1=e[n].client_language_code,t.ysdefault=e[n]):(t.select2.push(e[n]),t.otherlanguagelist.push(e[n]))}))},changeis:function(e){},changeno:function(e){},edmit:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(t){e.$router.push({name:"clientmanage"})}))["catch"]((function(e){}))},submit:function(){var e=this;if(this.$refs.reflanguage.mrbase_sys_client_language.length){var t=this.$refs.zjadduser.light_mode_icon_file,s=this.$refs.zjadduser.dark_mode_icon_file;""==t&&(this.xzuserlist.light_mode_icon={name:"",path:"",size:""}),""==s&&(this.xzuserlist.dark_mode_icon={name:"",path:"",size:""}),this.xzuserlist.mrbase_sys_function_permission=this.mrbase_sys_function_permission,this.xzuserlist.mrbase_sys_client_contacts=this.mrbase_sys_client_contacts||[],this.xzuserlist.mrbase_sys_client_whitelist_email=this.mrbase_sys_client_whitelist_email||[],this.xzuserlist.mrbase_sys_client_language=this.$refs.reflanguage.mrbase_sys_client_language,this.xzuserlist.client_containers=this.listClient_containers||[],this.xzuserlist.copy_client_uuid=this.client,this.xzuserlist.copy_org_level_uuid=this.companyuuid,this.btnloading=!this.btnloading,Object(d["copyadduserclientdetail"])(this.xzuserlist).then(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(i){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("200"!==i.code){n.next=15;break}if(null,null,!(t&&t.length>0)){n.next=7;break}return n.next=6,e.$uploadFiles(t,{function_uuid:e.$store.state.menuFunctionUuid,attachment_data_table:"mrbase_sys_clients",attachment_data_field:"light_mode_icon",org_level_uuid:e.$store.state.currentCompany,uuid:i.data.uuid});case 6:n.sent;case 7:if(!(s&&s.length>0)){n.next=11;break}return n.next=10,e.$uploadFiles(s,{function_uuid:e.$store.state.menuFunctionUuid,attachment_data_table:"mrbase_sys_clients",attachment_data_field:"dark_mode_icon",org_level_uuid:e.$store.state.currentCompany,uuid:i.data.uuid});case 10:n.sent;case 11:e.$Message({text:e.$t("message_The_operation_was_successful")}),e.$router.push({name:"clientmanage"}),n.next=17;break;case 15:e.$Message({text:i.msg}),e.btnloading=!e.btnloading;case 17:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}())["catch"]((function(t){e.btnloading=!e.btnloading}))}else this.$myConfirm({content:this.$t("message_default_language_must_be_selected")})}},watch:{}},f=h,m=(s("0dd4"),s("5985"),s("2877")),p=Object(m["a"])(f,n,i,!1,null,"18eacde6",null);t["default"]=p.exports},3255:function(e,t,s){},"4be8":function(e,t,s){"use strict";var n=s("6d2c"),i=s.n(n);i.a},5985:function(e,t,s){"use strict";var n=s("833a"),i=s.n(n);i.a},"5c7c":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"pl-8 pr-8 pt-8"},[[s("mrc_ess_mytree",{ref:"reftree",attrs:{list:e.treeList,disabled:e.disabled,isload:e.isload,uuids:e.uuidslist},on:{getData:e.getData}})]],2)},i=[],a=(s("96cf"),s("1da1")),c=s("5530"),r=s("b7e6"),l={components:{},props:{uuidslist:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},data:function(){return{oldtree:[],function_permission:[],delete_function_buttons:[],uuids:[],isload:!1,treeList:[]}},watch:{},methods:{getchangeref:function(){return this.$refs.reftree.getCheckData()},getData:function(e){this.function_permission=e},typedelmethods:function(e,t,s){for(var n=[],i=0;i<e.length;i++){for(var a=e[i].comparisonvalue,r=!1,l=0;l<t.length;l++)if(t[l].comparisonvalue==a){r=!0;break}r||n.push(Object(c["a"])(Object(c["a"])({},e[i]),{},{"~type~":"del"}))}return n},gettreelist:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["getTreeList"])();case 2:t=e.sent,this.treeList=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.gettreelist();case 2:this.isload=!1,this.isload=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},u=l,o=(s("4be8"),s("2877")),d=Object(o["a"])(u,n,i,!1,null,"78ae20f4",null);t["default"]=d.exports},"63d1":function(e,t,s){"use strict";var n=s("0c6b"),i=s.n(n);i.a},"6d2c":function(e,t,s){},"833a":function(e,t,s){},"8d3e":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-text",[s("v-col",{attrs:{cols:" 12"}},[s("v-select",{attrs:{items:e.listitems,chips:"","item-text":"view_fields","item-value":"value_field",label:e.$t("label_The_default_language")+"*",readonly:e.readonly},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{items:e.listitems,chips:"","item-text":"view_fields","item-value":"value_field",multiple:"",label:e.$t("label_Other_languages")+"*",readonly:e.readonly},on:{change:e.change},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}})],1)],1)],1)},i=[],a=(s("99af"),s("a623"),s("d81d"),s("96cf"),s("1da1")),c=s("5530"),r=s("2909"),l=s("6924"),u={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{rules:[function(e){return!!e||"语言不能为空"}],nodorules:[function(e){return String(e).length<=200||"超过输入个数"},function(e){return!/[@#$%^&()<>?/]/.test(e)||"请勿输入非法字符"},function(e){return!/^ +| +$/g.test(e)||"不能输入空格"}],readonly:!1,select1:"",select2:[],listitems:[],ysdefault:{},otherlanguagelist:[]}},watch:{list:{handler:function(e){this.list=e,this.getlanguage(this.list)},deep:!0}},computed:{mrbase_sys_client_language:function(){var e=this;return!!this.select1&&(!!this.select2.every((function(t){return t!=e.select1}))&&(this.select1={is_default_language:1,"~table~":"mrbase_sys_client_language",client_language_code:this.select1},this.select2=this.select2.map((function(e){return{is_default_language:0,"~table~":"mrbase_sys_client_language",client_language_code:e}})),[Object(c["a"])({},this.select1)].concat(Object(r["a"])(this.select2))))}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["getBusinessList"])("client_language");case 2:t=e.sent,this.listitems=t.data,(this.$route.params.uuid||this.$store.state.detailuuid)&&(this.readonly=!0,this.list&&this.getlanguage(this.list));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{asa:function(){console.log(this.mrbase_sys_client_language)},change:function(e){},getlanguage:function(e){var t=this;this.select2=[],e.map((function(e,s){1==e.is_default_language?t.select1=e.client_language_code:t.select2.push(e.client_language_code)}))},changeis:function(e){},changeno:function(e){}}},o=u,d=(s("0d6e"),s("2877")),_=Object(d["a"])(o,n,i,!1,null,"c17596d0",null);t["default"]=_.exports},f020:function(e,t,s){}}]);
//# sourceMappingURL=chunk-cf51633e.1e11908c.js.map