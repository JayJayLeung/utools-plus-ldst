(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6675aac8","chunk-2d20ee05"],{ae5a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[n("div",[n("mrc_ess_iconGroup",{staticStyle:{top:"-50px"},attrs:{is_disabled:e.disabled,showEdit:e.hasBtn("edit-company-setting"),show_del:e.hasBtn("delete-company-setting")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),n("v-card",[n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("org_level_name"),label:e.$t("label_company_name")+"*","append-icon":"mdi-longitude",rules:e.$text_rules("单位名称")},model:{value:e.params.org_level_name,callback:function(t){e.$set(e.params,"org_level_name",t)},expression:"params.org_level_name"}})],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,isNational:e.judegNational("org_level_shortcode"),"append-icon":"mdi-longitude",rules:e.$text_rules("短编码"),label:e.$t("label_Short_code")+"*"},model:{value:e.params.org_level_shortcode,callback:function(t){e.$set(e.params,"org_level_shortcode",t)},expression:"params.org_level_shortcode"}})],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[n("mrc_ess_prompt",{attrs:{rules:!1,disabled:e.disabled,label:e.$t("label_The_higher_the_unit")+"*",obj:e.companyParent},model:{value:e.params.org_level_code_parent,callback:function(t){e.$set(e.params,"org_level_code_parent",t)},expression:"params.org_level_code_parent"}})],1),n("v-card-text",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:e.$t("label_The_unit_name")+"*",disabled:""},model:{value:e.params.org_level_all,callback:function(t){e.$set(e.params,"org_level_all",t)},expression:"params.org_level_all"}})],1)],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[n("mrc_ess_prompt",{attrs:{rules:!1,disabled:e.disabled,label:e.$t("label_head")+"*",obj:"staffs"},model:{value:e.params.org_level_leader_uuid,callback:function(t){e.$set(e.params,"org_level_leader_uuid",t)},expression:"params.org_level_leader_uuid"}})],1)],1)],1),e.disabled?e._e():n("mrc_ess_submitBtn",{on:{cancel:e.cancel,success:e.success}})],1)],1)])},r=[],o=(n("96cf"),n("1da1")),i=n("b0de"),s={components:{},props:{},data:function(){return{skLoading:!0,disabled:!0,params:{uuid:"",org_level_name:"",org_level_shortcode:"",org_level_leader_uuid:"",org_level_code_parent:"",org_level_all:""}}},created:function(){},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),e.next=3,this.national("mrbase_sys_org_levels");case 3:this.skLoading=!0,this.$nextTick(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get_info();case 2:case"end":return e.stop()}}),e,this)})))),this.skLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{get_info:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get_company_info"])({uuid:this.$store.state.uuid});case 2:t=e.sent,200==t.code&&(this.params=t.data,this.$store.commit("set_uuid2",this.params.client_uuid));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否放弃修改"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.get_info();case 2:e.disabled=!e.disabled;case 3:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))},success:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get_company_update"])({uuid:this.params.uuid,org_level_name:this.params.org_level_name,org_level_shortcode:this.params.org_level_shortcode,org_level_code_parent:this.params.org_level_code_parent,org_level_leader_uuid:this.params.org_level_leader_uuid,client_uuid:this.$store.state.currentCompanyClientUuid});case 2:if(t=e.sent,200!=t.code){e.next=10;break}return this.$store.commit("newsTips",this.$t("message_The_operation_was_successful")),this.disabled=!this.disabled,e.next=8,this.get_info();case 8:return e.next=10,this.$store.dispatch("set_topcompanylist");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=this;this.$myConfirm({title:"提示",content:"是否删除"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get_company_del"])({uuid:e.params.uuid});case 2:n=t.sent,200==n.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),e.$router.go(-1));case 4:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}},computed:{companyParent:function(){return{prompt_name:"parent_org_level",org_level_code:this.$store.state.orgLevelCode}}},watch:{}},c=s,l=n("2877"),u=Object(l["a"])(c,a,r,!1,null,"4b59a9c7",null);t["default"]=u.exports},b0de:function(e,t,n){"use strict";n.r(t),n.d(t,"get_company_add",(function(){return o})),n.d(t,"get_company_list",(function(){return i})),n.d(t,"get_company_del",(function(){return s})),n.d(t,"get_company_info",(function(){return c})),n.d(t,"get_company_update",(function(){return l})),n.d(t,"lang_upadte_add",(function(){return u})),n.d(t,"lang_find",(function(){return d})),n.d(t,"lang_del",(function(){return _})),n.d(t,"add_update_baseData",(function(){return m})),n.d(t,"del_baseData",(function(){return p})),n.d(t,"find_baseData",(function(){return f})),n.d(t,"rate_list",(function(){return h})),n.d(t,"rate_detail",(function(){return g})),n.d(t,"rate_update_add",(function(){return v})),n.d(t,"rate_del",(function(){return b})),n.d(t,"rate_del_all",(function(){return y})),n.d(t,"mail_update_add",(function(){return w})),n.d(t,"mail_del",(function(){return x})),n.d(t,"mail_info",(function(){return $})),n.d(t,"sendMail",(function(){return k}));n("d3b7");var a=n("efc9"),r="mrbase_sys_org_levels",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,n){a["default"].post("/api/org/levels/add-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,n){a["default"].post("/api/org/levels/list-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,n){a["default"].post("/api/org/levels/delete-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,n){a["default"].post("/api/org/levels/find-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,n){a["default"].post("/api/org/levels/update-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_language",new Promise((function(t,n){a["default"].post("/api/company_language_time_zone/add-language_time_zone/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_language",new Promise((function(t,n){a["default"].post("/api/company_language_time_zone/find-language_time_zone/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_language",new Promise((function(t,n){a["default"].post("/api/company_language_time_zone/delect-language_time_zone/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company",new Promise((function(t,n){a["default"].post("/api/company/add-update-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company",new Promise((function(t,n){a["default"].post("/api/company/delete-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company",new Promise((function(t,n){a["default"].post("/api/company/find-company/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_exchange_rate",new Promise((function(t,n){a["default"].post("/api/company_exchange_rate/list-exchange/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_exchange_rate",new Promise((function(t,n){a["default"].post("/api/company_exchange_rate/find-exchange/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_exchange_rate",new Promise((function(t,n){a["default"].post("/api/company_exchange_rate/add-update-exchange/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_exchange_rate",new Promise((function(t,n){a["default"].post("/api/company_exchange_rate/delete-exchange/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_exchange_rate",new Promise((function(t,n){a["default"].post("/api/company_exchange_rate/delete-levels-exchange/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_email_smtp",new Promise((function(t,n){a["default"].post("/api/company_email/add-update-email/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_email_smtp",new Promise((function(t,n){a["default"].post("/api/company_email/delete-email/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_email_smtp",new Promise((function(t,n){a["default"].post("/api/company_email/find-email/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_company_email_smtp",new Promise((function(t,n){a["default"].post("/api/mail/send-mail/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))}}}]);
//# sourceMappingURL=chunk-6675aac8.cbe21d9e.js.map