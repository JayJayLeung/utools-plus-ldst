(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a030526","chunk-2d22c55d","chunk-2d0b90d3"],{1621:function(e,t,a){},"30ff":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" 公司属性 ")])},r=[],n={components:{},props:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{},computed:{},watch:{}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,"273b0b26",null);t["default"]=l.exports},4131:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("div",[a("mrc_ess_iconGroup",{staticStyle:{top:"-50px"},attrs:{is_disabled:e.disabled,showEdit:e.hasBtn("edit-company-exchange-rate"),show_del:e.hasBtn("delete-company-exchange-rate")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("v-card",[a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"hide-default-footer":""},scopedSlots:e._u([{key:"item.frequency",fn:function(t){var s=t.item;return[a("div",{staticClass:"is_flex_between"},[a("span",[e._v(e._s(s.frequency))]),a("div",{staticClass:"is_flex_column",staticStyle:{"margin-right":"30%",color:"#ff9100",cursor:"pointer"},on:{click:function(t){return e.updateRate(s.uuid)}}},[a("span",[e._v(e._s(e.$t("label_update_immediately")))]),a("v-divider",{attrs:{color:"#ff9100"}})],1)])]}},{key:"item.status",fn:function(t){var s=t.item;return[a("div",{staticClass:"status",class:{is_used:0==s.status}},[e._v(e._s(1==s.status?e.$t("label_To_enable_the"):e.$t("label_disable")))])]}},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-icon",{on:{click:function(t){return t.stopPropagation(),e.changeItem(s)}}},[e._v("mdi-pencil")]),a("v-icon",{staticStyle:{"margin-left":"10%"},on:{click:function(t){return t.stopPropagation(),e.delItem(s)}}},[e._v("mdi-delete")])]}}])})],1),a("div",{staticClass:"addRate",on:{click:function(t){e.flag=!0}}},[e._v(e._s(e.$t("label_The_new_currency"))+"+")]),a("rate-dialog",{attrs:{paramsData:e.dialogData},on:{cancel:e.cancalDialog,getData:e.saveAddUpdate},model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}}),a("div",{staticStyle:{width:"400px",float:"right"}},[0!==e.totalpage?a("v-pagination",{staticClass:"my-4",attrs:{length:e.totalpage,light:"",color:"primary"},on:{input:e.turnPage},model:{value:e.cpage,callback:function(t){e.cpage=t},expression:"cpage"}}):e._e()],1)],1)],1)])],1)},r=[],n=(a("c975"),a("a434"),a("96cf"),a("1da1")),i=a("f393"),o=a("b0de"),l={components:{rateDialog:i["default"]},props:{},data:function(){return{skLoading:!0,disabled:!0,flag:!1,baseHeader:[{text:this.$t("label_The_original_money"),align:"start",sortable:!1,value:"original_currency_uuid"},{text:this.$t("label_Converted_into"),align:"start",sortable:!1,value:"foreign_currency_uuid"},{text:this.$t("label_The_latest_currency"),align:"start",sortable:!1,value:"exchange_rate"},{text:this.$t("label_Inverse"),align:"start",sortable:!1,value:"inverse"},{text:this.$t("label_The_update_frequency"),align:"start",sortable:!1,value:"frequency"},{text:this.$t("label_state"),align:"start",sortable:!1,value:"status"},{text:" ",align:"start",sortable:!1,value:"actions"}],desserts:[],dialogData:{},cpage:this.$store.state.cpage0,pagesize:1,totalpage:0}},created:function(){},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),this.skLoading=!0,e.next=4,this.getList();case 4:this.skLoading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{turnPage:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.cpage=t,e.next=3,this.getList();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["rate_list"])({org_level_uuid:this.$store.state.uuid,cpage:this.cpage,pagesize:this.pagesize});case 2:t=e.sent,200==t.code&&(this.desserts=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateRate:function(e){console.log(e)},changeItem:function(e){this.dialogData=e,this.flag=!0,console.log(e)},delItem:function(e){var t=this;this.$myconfirm({title:"提示",content:"是否删除这一条"}).then(Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.desserts.indexOf(e),console.log(e,"delete"),a.next=4,Object(o["rate_del"])({uuid:t.$store.state.uuid});case 4:if(r=a.sent,200!=r.code){a.next=10;break}return t.$store.commit("newsTips",t.$t("message_The_deletion_was_successful")),t.desserts.splice(s,1),a.next=10,t.getList();case 10:case"end":return a.stop()}}),a,this)}))))["catch"]((function(){}))},cancalDialog:function(){},saveAddUpdate:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["rate_update_add"])(t);case 2:if(a=e.sent,200!=a.code){e.next=8;break}return this.$store.commit("newsTips",this.$t("message_The_submission_was_successful")),e.next=7,this.getList();case 7:this.disabled=!this.disabled;case 8:this.flag=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=this;this.$myConfirm({content:$t("message_Confirm_the_deletion")}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,raterate_del_alldel({org_level_uuid:e.params.org_level_uuid});case 2:a=t.sent,200==a.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),e.$router.go(-1));case 4:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}},computed:{headers:function(){return this.baseHeader}},watch:{}},c=l,u=(a("556c"),a("2877")),d=Object(u["a"])(c,s,r,!1,null,"2038e5cb",null);t["default"]=d.exports},"556c":function(e,t,a){"use strict";var s=a("1621"),r=a.n(s);r.a},ae5a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("div",[a("mrc_ess_iconGroup",{staticStyle:{top:"-50px"},attrs:{is_disabled:e.disabled,showEdit:e.hasBtn("edit-company-setting"),show_del:e.hasBtn("delete-company-setting")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("v-card",[a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("org_level_name"),label:e.$t("label_company_name")+"*","append-icon":"mdi-longitude",rules:e.$text_rules("单位名称")},model:{value:e.params.org_level_name,callback:function(t){e.$set(e.params,"org_level_name",t)},expression:"params.org_level_name"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("org_level_shortcode"),"append-icon":"mdi-longitude",rules:e.$text_rules("短编码"),label:e.$t("label_Short_code")+"*"},model:{value:e.params.org_level_shortcode,callback:function(t){e.$set(e.params,"org_level_shortcode",t)},expression:"params.org_level_shortcode"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:!1,disabled:e.disabled,label:e.$t("label_The_higher_the_unit")+"*",obj:e.companyParent},model:{value:e.params.org_level_code_parent,callback:function(t){e.$set(e.params,"org_level_code_parent",t)},expression:"params.org_level_code_parent"}})],1),a("v-card-text",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:e.$t("label_The_unit_name")+"*",disabled:""},model:{value:e.params.org_level_all,callback:function(t){e.$set(e.params,"org_level_all",t)},expression:"params.org_level_all"}})],1)],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:!1,disabled:e.disabled,label:e.$t("label_head")+"*",obj:"staffs"},model:{value:e.params.org_level_leader_uuid,callback:function(t){e.$set(e.params,"org_level_leader_uuid",t)},expression:"params.org_level_leader_uuid"}})],1)],1)],1),e.disabled?e._e():a("mrc_ess_submitBtn",{on:{cancel:e.cancel,success:e.success}})],1)],1)])},r=[],n=(a("96cf"),a("1da1")),i=a("b0de"),o={components:{},props:{},data:function(){return{skLoading:!0,disabled:!0,params:{uuid:"",org_level_name:"",org_level_shortcode:"",org_level_leader_uuid:"",org_level_code_parent:"",org_level_all:""}}},created:function(){},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),e.next=3,this.national("mrbase_sys_org_levels");case 3:this.skLoading=!0,this.$nextTick(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get_info();case 2:case"end":return e.stop()}}),e,this)})))),this.skLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{get_info:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get_company_info"])({uuid:this.$store.state.uuid});case 2:t=e.sent,200==t.code&&(this.params=t.data,this.$store.commit("set_uuid2",this.params.client_uuid));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否放弃修改"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.get_info();case 2:e.disabled=!e.disabled;case 3:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))},success:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get_company_update"])({uuid:this.params.uuid,org_level_name:this.params.org_level_name,org_level_shortcode:this.params.org_level_shortcode,org_level_code_parent:this.params.org_level_code_parent,org_level_leader_uuid:this.params.org_level_leader_uuid,client_uuid:this.$store.state.currentCompanyClientUuid});case 2:if(t=e.sent,200!=t.code){e.next=10;break}return this.$store.commit("newsTips",this.$t("message_The_operation_was_successful")),this.disabled=!this.disabled,e.next=8,this.get_info();case 8:return e.next=10,this.$store.dispatch("set_topcompanylist");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否删除"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get_company_del"])({uuid:e.params.uuid});case 2:a=t.sent,200==a.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),e.$router.go(-1));case 4:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}},computed:{companyParent:function(){return{prompt_name:"parent_org_level",org_level_code:this.$store.state.orgLevelCode}}},watch:{}},l=o,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,"4b59a9c7",null);t["default"]=u.exports},b455:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("div",[a("mrc_ess_iconGroup",{staticStyle:{top:"-50px"},attrs:{is_disabled:e.disabled,showEdit:e.hasBtn("edit-company-email-address"),show_del:e.hasBtn("delete-company-email-address")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("v-card",[a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,"error-messages":e.$errors("params","smtp_server_host",e.maxLength(20)),isNational:e.judegNational("smtp_server_host"),label:"email.servehost"},model:{value:e.params.smtp_server_host,callback:function(t){e.$set(e.params,"smtp_server_host",t)},expression:"params.smtp_server_host"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,"error-messages":e.$errors("params","smtp_server_port",e.between("1-65535").concat(e.integerRule)),isNational:e.judegNational("smtp_server_port"),label:"email.serveport"},model:{value:e.params.smtp_server_port,callback:function(t){e.$set(e.params,"smtp_server_port",t)},expression:"params.smtp_server_port"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("smtp_username"),"error-messages":e.$errors("params","smtp_username",e.maxLength(20)),label:"email.username"},model:{value:e.params.smtp_username,callback:function(t){e.$set(e.params,"smtp_username",t)},expression:"params.smtp_username"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,"error-messages":e.$errors("params","smtp_password",e.maxLength(20)),isNational:e.judegNational("smtp_password"),label:"email.password"},model:{value:e.params.smtp_password,callback:function(t){e.$set(e.params,"smtp_password",t)},expression:"params.smtp_password"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,"error-messages":e.$errors("params","smtp_fromaddress",e.maxLength(20).concat(e.emailRule)),isNational:e.judegNational("smtp_fromaddress"),label:"email.fromaddress"},model:{value:e.params.smtp_fromaddress,callback:function(t){e.$set(e.params,"smtp_fromaddress",t)},expression:"params.smtp_fromaddress"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("smtp_fromadname"),label:"email.fromname"},model:{value:e.params.smtp_fromadname,callback:function(t){e.$set(e.params,"smtp_fromadname",t)},expression:"params.smtp_fromadname"}})],1),e.disabled?a("h3",[e._v(e._s(e.$t("label_test")))]):e._e(),e.disabled?a("v-card-text",[a("div",{staticClass:"is_flex_around"},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"9"}},[a("v-text-field",{attrs:{label:"email",placeholder:e.$t("label_Enter_the_email_address_to_test_whether_the_email_is_received")},model:{value:e.emailNum,callback:function(t){e.emailNum=t},expression:"emailNum"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"2","offset-sm":"1"}},[a("v-btn",{staticStyle:{color:"#fff"},attrs:{color:"primary"},on:{click:e.send_mail}},[e._v(e._s(e.$t("label_send")))])],1)],1)],1)]):e._e()],1)],1),e.disabled?e._e():a("mrc_ess_submitBtn",{on:{cancel:e.cancel,success:e.success}})],1)],1)])},r=[],n=(a("b64b"),a("96cf"),a("1da1")),i=a("b5ae"),o=a("b0de"),l={components:{},props:{},data:function(){return{emailNum:"",skLoading:!0,disabled:!0,params:{uuid:"",org_level_uuid:"",smtp_server_host:"",smtp_server_port:"",smtp_username:"",smtp_license_code:"",smtp_password:"",smtp_fromaddress:"",smtp_fromadname:""}}},validations:{params:{smtp_server_host:{maxLength:Object(i["maxLength"])(20)},smtp_server_port:{integer:i["integer"],between:Object(i["between"])(1,65535)},smtp_username:{maxLength:Object(i["maxLength"])(20)},smtp_password:{maxLength:Object(i["maxLength"])(20)},smtp_fromaddress:{email:i["email"],maxLength:Object(i["maxLength"])(20)}}},created:function(){},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),e.next=3,this.national("mrbase_sys_company_email_smtp");case 3:return this.skLoading=!0,this.params.org_level_uuid=this.$store.state.uuid,e.next=7,this.getInfo();case 7:this.skLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{send_mail:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["sendMail"])({mailTempName:"",attachment:"",fseData:{language_code:"",content_type:"",content:""}});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["mail_info"])({org_level_uuid:this.params.org_level_uuid});case 2:t=e.sent,200==t.code&&Object.keys(t.data).length>0&&(this.params=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否放弃修改"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getInfo();case 2:e.disabled=!e.disabled;case 3:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))},success:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["mail_update_add"])({uuid:this.params.uuid,org_level_uuid:this.params.org_level_uuid,smtp_server_host:this.params.smtp_server_host,smtp_server_port:this.params.smtp_server_port,smtp_username:this.params.smtp_username,smtp_license_code:this.params.smtp_license_code,smtp_password:this.params.smtp_password,smtp_fromaddress:this.params.smtp_fromaddress,smtp_fromadname:this.params.smtp_fromadname});case 2:t=e.sent,200==t.code&&(this.$store.commit("newsTips",this.$t("message_The_submission_was_successful")),this.disabled=!this.disabled);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["mail_del"])({org_level_uuid:e.params.org_level_uuid});case 2:a=t.sent,200==a.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),e.$router.go(-1));case 4:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}},computed:{},watch:{}},c=l,u=a("2877"),d=Object(u["a"])(c,s,r,!1,null,"bf8d8992",null);t["default"]=d.exports},bd0b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-tabs",{attrs:{grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tablist,(function(t){return a("v-tab",{key:t.name,staticClass:"text-capitalize"},[e._v(" "+e._s(t.name)+" ")])})),1),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tablist,(function(e){return a("v-tab-item",{key:e.name},[a("keep-alive",[a(e.component,{tag:"component"})],1)],1)})),1)],1)},r=[],n=a("b455"),i=a("79b4"),o=a("30ff"),l=a("4131"),c=a("c3e5"),u=a("ae5a"),d={props:{},data:function(){return{tab:0}},created:function(){this.tab=this.$store.state.tab},mounted:function(){this.$route.meta.title=this.$store.getters.subPage_name},methods:{},computed:{tablist:function(){return[{name:this.$t("label_The_unit_set"),component:u["default"]},{name:this.$t("label_Basic_information"),component:i["default"]},{name:this.$t("label_Time_zone_and_language_Settings"),component:c["default"]},{name:this.$t("label_Exchange_rate_is_set"),component:l["default"]},{name:this.$t("label_Mailbox"),component:n["default"]},{name:this.$t("label_Company_attribute_configuration"),component:o["default"]}]}},watch:{tab:function(e){this.$store.commit("setTab",e)}},beforeDestroy:function(){this.$store.commit("setTab","")}},m=d,_=a("2877"),p=Object(_["a"])(m,s,r,!1,null,"2766484b",null);t["default"]=p.exports},c3e5:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("div",[a("mrc_ess_iconGroup",{staticStyle:{top:"-50px"},attrs:{is_disabled:e.disabled,showEdit:e.hasBtn("edit-company-timezone-and-language"),show_del:e.hasBtn("delete-company-timezone-and-language")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("v-card",[a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{errMsg:e.$errors("params","zone_uuid",e.requiredRule),disabled:e.disabled,rules:!1,label:e.$t("label_The_time_zone")+"*",obj:e.zone_time},model:{value:e.params.zone_uuid,callback:function(t){e.$set(e.params,"zone_uuid",t)},expression:"params.zone_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{errMsg:e.$errors("params","language_code",e.requiredRule),disabled:e.disabled,rules:!1,label:e.$t("label_The_default_language")+"*",obj:e.language_client},model:{value:e.params.language_code,callback:function(t){e.$set(e.params,"language_code",t)},expression:"params.language_code"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{errMsg:e.$errors("params","language_arr",e.requiredRule),disabled:e.disabled,rules:!1,label:e.$t("label_Other_languages")+"*",obj:e.language_client,multiple:""},model:{value:e.params.language_arr,callback:function(t){e.$set(e.params,"language_arr",t)},expression:"params.language_arr"}})],1)],1)],1),e.disabled?e._e():a("mrc_ess_submitBtn",{on:{cancel:e.cancel,success:e.success}})],1)],1)])},r=[],n=(a("a15b"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=a("b5ae"),o=a("b0de"),l={components:{},props:{},data:function(){return{skLoading:!0,disabled:!0,params:{org_level_uuid:"",language_code:"",language_arr:[],zone_uuid:"",uuid:"",time_zone_uuid:""}}},validations:{params:{language_code:{required:i["required"]},zone_uuid:{required:i["required"]},language_arr:{required:i["required"]}}},created:function(){},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),this.skLoading=!0,this.params.org_level_uuid=this.$store.state.uuid,e.next=5,this.getData();case 5:this.skLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["lang_find"])({org_level_uuid:this.params.org_level_uuid});case 2:t=e.sent,200==t.code&&(this.params.language_code=t.data.language_code,this.params.language_arr=t.data.language_arr?t.data.language_arr.split(","):[],this.params.zone_uuid=t.data.zone_uuid,this.params.uuid=t.data.uuid,this.params.time_zone_uuid=t.data.time_zone_uuid);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否放弃修改"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:e.disabled=!e.disabled;case 3:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))},success:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.params.$touch(),!this.$v.params.$error){e.next=3;break}return e.abrupt("return");case 3:return t=this.$clone(this.params),t.language_arr=t.language_arr.join(),e.next=7,Object(o["lang_upadte_add"])(t);case 7:a=e.sent,200==a.code&&(this.$store.commit("newsTips",this.$t("message_The_submission_was_successful")),this.disabled=!this.disabled);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否删除"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["lang_del"])({org_level_uuid:e.params.org_level_uuid});case 2:a=t.sent,200==a.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),e.$router.go(-1));case 4:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}},computed:{zone_time:function(){return{prompt_name:"zone_time",org_level_uuid:this.$store.state.uuid}},language_client:function(){return{prompt_name:"language_client",client_uuid:this.$store.state.uuid2}}},watch:{}},c=l,u=a("2877"),d=Object(u["a"])(c,s,r,!1,null,"4dc40ec8",null);t["default"]=d.exports},f393:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_myDialog",{attrs:{isopen:e.isopen,width:550,disabled:!0},on:{cancel:e.cancel,success:e.success}},[a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("mrc_ess_switch",{attrs:{"true-value":1,"false-value":0,"true-text":e.$t("label_To_enable_the"),"false-text":e.$t("label_disable")},model:{value:e.params.is_used,callback:function(t){e.$set(e.params,"is_used",t)},expression:"params.is_used"}}),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:!1,disabled:!1,label:e.$t("label_The_original_money")+"*",chips:!1,errMsg:e.$errors("params","original_currency_uuid",e.requiredRule),obj:e.company_name},model:{value:e.params.original_currency_uuid,callback:function(t){e.$set(e.params,"original_currency_uuid",t)},expression:"params.original_currency_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:!1,disabled:!1,label:e.$t("label_Converted_into")+"*",errMsg:e.$errors("params","foreign_currency_uuid",e.requiredRule),chips:!1,obj:e.company_name},model:{value:e.params.foreign_currency_uuid,callback:function(t){e.$set(e.params,"foreign_currency_uuid",t)},expression:"params.foreign_currency_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_dictName",{attrs:{rules:!1,disabled:!1,errMsg:e.$errors("params","frequency",e.requiredRule),label:e.$t("label_The_update_frequency")+"*",chips:!1,dict_name:"frequency"},model:{value:e.params.frequency,callback:function(t){e.$set(e.params,"frequency",t)},expression:"params.frequency"}})],1)],1)],1)],1)},r=[],n=(a("0d03"),a("b64b"),a("b5ae")),i={components:{},props:{isopen:{type:Boolean,default:!1},paramsData:{type:Object,default:function(){}}},model:{prop:"isopen",event:"flag"},data:function(){return{status:!0,params:{uuid:null,original_currency_uuid:"",foreign_currency_uuid:"",frequency:"",is_used:1,org_level_uuid:this.$store.state.userData.org_level_uuid,exchange_rate:1.5,exchanged_utc_datetime:"".concat((new Date).valueOf()),exchange_time_zone:1}}},validations:{params:{original_currency_uuid:{required:n["required"]},foreign_currency_uuid:{required:n["required"]},frequency:{required:n["required"]}}},created:function(){},mounted:function(){},methods:{success:function(){this.$v.params.$touch(),this.$v.params.$error||(this.$emit("getData",this.params),this.$emit("flag",!this.isopen))},cancel:function(){this.$emit("flag",!this.isopen),this.$emit("cancel")}},computed:{company_name:function(){return{prompt_name:"company_name",org_level_uuid:this.$store.state.uuid}}},watch:{paramsData:{handler:function(e){console.log(e,"val"),Object.keys(e).length>0&&(this.params.uuid=e.uuid,this.params.is_used=e.is_used,this.params.original_currency_uuid=e.original_currency_uuid,this.params.foreign_currency_uuid=e.foreign_currency_uuid,this.params.frequency=e.frequency)},deep:!0},isopen:function(e){e||(this.params.uuid="",this.params.original_currency_uuid="",this.params.foreign_currency_uuid="",this.params.frequency="")}}},o=i,l=a("2877"),c=Object(l["a"])(o,s,r,!1,null,"16949a41",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9a030526.31e230ae.js.map