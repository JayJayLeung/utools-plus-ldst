(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f3c74e8","chunk-621d361d","chunk-2d0b2d16"],{2673:function(e,t,a){"use strict";a.r(t),a.d(t,"admin_account_list",(function(){return r})),a.d(t,"admin_account_add",(function(){return i})),a.d(t,"admin_account_update",(function(){return u})),a.d(t,"admin_account_reset",(function(){return c})),a.d(t,"admin_account_disable",(function(){return o})),a.d(t,"admin_account_info",(function(){return l})),a.d(t,"admin_account_del",(function(){return d})),a.d(t,"func_list",(function(){return m})),a.d(t,"takeout_customer",(function(){return f}));a("d3b7");var s=a("efc9"),n="mrbase_sys_users",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/list-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/add-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/update-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/update-reset-password/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/update-disable-account/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/find-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=n,new Promise((function(t,a){s["default"].post("/api/management/delete-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_role",new Promise((function(t,a){s["default"].post("/api/role/list-function_role-clients/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]="mrbase_sys_staffs",new Promise((function(t,a){s["default"].post("/api/management/find-staff-user/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))}},"3f9d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-info",{attrs:{disabled:!1,loading:e.loading,successText:e.$t("label_submit")},on:{success:e.success,cancel:e.cancel}})},n=[],r=a("5530"),i=(a("96cf"),a("1da1")),u=a("945f"),c=a("2673"),o={components:{baseInfo:u["default"]},props:{},data:function(){return{loading:!1}},validations:{},computed:{},created:function(){},watch:{},mounted:function(){},methods:{success:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,Object(c["admin_account_add"])(Object(r["a"])(Object(r["a"])({},t),{},{role_uuid:"002"}));case 3:a=e.sent,200==a.code&&(this.$Message({text:this.$t("message_The_operation_was_successful")}),this.$router.go(-1)),this.loading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(){e.$router.go(-1)}))["catch"]((function(){}))}}},l=o,d=a("2877"),m=Object(d["a"])(l,s,n,!1,null,"7e620aa2",null);t["default"]=m.exports},"945f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pa-0",attrs:{elevation:0}},[a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[a("mrc_ess_switch",{attrs:{"true-value":1,"false-value":0,"true-text":e.$t("label_To_enable_the"),readonly:e.disabled,"false-text":e.$t("label_disable")},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:e.params.uuid?6:12}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{label:e.$t("label_The_login_name")+"*","error-messages":e.$errors("params","user_account",e.requiredRule.concat(e.maxLength(20))),disabled:Boolean(e.params.staffs_uuid),isNational:e.judegNational("user_account"),placeholder:"请输入登录名称"},model:{value:e.params.user_account,callback:function(t){e.$set(e.params,"user_account","string"===typeof t?t.trim():t)},expression:"params.user_account"}})],1),a("v-col",{staticClass:"d-flex flex-column ",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{label:e.$t("label_password")+"*",type:"password",isNational:e.judegNational("user_pwd"),placeholder:"请输入密码",disabled:Boolean(e.params.staffs_uuid),"error-messages":e.$errors("params","user_pwd",e.requiredRule)},model:{value:e.params.user_pwd,callback:function(t){e.$set(e.params,"user_pwd","string"===typeof t?t.trim():t)},expression:"params.user_pwd"}}),e.params.uuid?a("span",{style:{color:e.$vuetify.theme.defaults.light.primary,position:"relative",top:"10px",cursor:"pointer"},on:{click:e.resetPassword}},[e._v("重置密码")]):e._e()],1),e.params.uuid?e._e():a("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{label:e.$t("label_Confirm_password")+"*",type:"password",isNational:e.judegNational("confirmPassword"),placeholder:e.$t("label_Confirm_password"),disabled:Boolean(e.params.staffs_uuid)||Boolean(e.params.uuid),"error-messages":e.$errors("params","confirmPassword",e.requiredRule.concat(e.sameAsKey("密码")))},model:{value:e.params.confirmPassword,callback:function(t){e.$set(e.params,"confirmPassword","string"===typeof t?t.trim():t)},expression:"params.confirmPassword"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{label:e.$t("label_Mailbox")+"*","error-messages":e.$errors("params","user_primary_email",e.requiredRule.concat(e.emailRule)),isNational:e.judegNational("user_primary_email"),disabled:Boolean(e.params.staffs_uuid),placeholder:e.$t("label_Mailbox")},model:{value:e.params.user_primary_email,callback:function(t){e.$set(e.params,"user_primary_email","string"===typeof t?t.trim():t)},expression:"params.user_primary_email"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{obj:e.mrbase_sys_clients,label:e.$t("label_Associated_with_the_unit")+"*",multiple:"",disabled:e.disabled,placeholder:e.$t("label_company_name")+"/"+e.$t("label_Short_code"),errMsg:e.$errors("params","org_level_uuid",e.requiredRule)},on:{getSelectItem:e.getSelectClients},model:{value:e.computed_org_level_uuid,callback:function(t){e.computed_org_level_uuid=t},expression:"computed_org_level_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[a("v-checkbox",{attrs:{dense:"",readonly:e.disabled,label:e.$t("label_Binding_employees")},on:{change:e.isBindStaffChange},model:{value:e.isBindStaff,callback:function(t){e.isBindStaff=t},expression:"isBindStaff"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"9"}},[a("mrc_ess_prompt",{directives:[{name:"show",rawName:"v-show",value:e.isBindStaff,expression:"isBindStaff"}],attrs:{select_arr:e.bindStaffList,label:e.$t("label_Binding_employees"),disabled:e.disabled,rules:!1,placeholder:e.$t("label_Binding_employees")},on:{getSelectItem:e.getSelectItem},model:{value:e.params.staffs_uuid,callback:function(t){e.$set(e.params,"staffs_uuid",t)},expression:"params.staffs_uuid"}})],1)],1)],1),e.disabled?e._e():a("mrc_ess_submitBtn",{attrs:{loading:e.loading,cancelText:e.cancelText||e.$t("label_cancel"),successText:e.successText||e.$t("label_submit")},on:{cancel:e.cancel,success:e.success}})],1)},n=[],r=(a("4160"),a("c975"),a("a15b"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),i=a("b5ae"),u=a("2673"),c=a("fb42"),o={components:{},props:{disabled:{type:Boolean,default:!1},cancelText:{type:String},successText:{type:String},paramsData:{type:Object},loading:{type:Boolean,default:!1}},data:function(){return{isBindStaff:!1,params:{status:1,user_account:"",user_pwd:"",user_primary_email:"",org_level_uuid:"",confirmPassword:"",staffs_uuid:"",client_uuid:""},bindStaffList:[]}},validations:{params:{confirmPassword:{required:function(e){return!!this.params.uuid||e.length>0},sameAsKey:function(e){return!!this.params.uuid||e==this.params.user_pwd}},user_account:{required:i["required"],maxLength:Object(i["maxLength"])(20)},user_pwd:{required:i["required"]},user_primary_email:{required:i["required"],email:i["email"]},org_level_uuid:{required:i["required"]}}},computed:{mrbase_sys_clients:function(){return{prompt_name:"org_level_for_clients",client_uuid:this.$store.state.currentCompany}},computed_org_level_uuid:{get:function(){return this.params.org_level_uuid?this.params.org_level_uuid.indexOf(",")>-1?this.params.org_level_uuid.split(","):[this.params.org_level_uuid]:[]},set:function(e){this.params.org_level_uuid=e.join()}}},created:function(){},watch:{paramsData:{handler:function(e){this.params=e,this.params.staffs_uuid?this.isBindStaff=!0:this.isBindStaff=!1},deep:!0}},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.paramsData&&(this.params=this.paramsData,this.params.staffs_uuid?this.isBindStaff=!0:this.isBindStaff=!1),this.getPrompt();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getSelectClients:function(e){var t=[];e.forEach((function(e){t.indexOf(e.f1)<=-1&&t.push(e.f1)})),t.length>0?this.params.client_uuid=t.join():this.params.client_uuid=""},isBindStaffChange:function(e){e||(this.params.user_account="",this.params.user_pwd="",this.params.confirmPassword="",this.params.user_primary_email="",this.params.staffs_uuid="",this.$v.params.$reset())},getSelectItem:function(e){this.params.user_account=e.f4,this.params.user_pwd=e.f5,this.params.confirmPassword=e.f5,this.params.user_primary_email=e.f6},getPrompt:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["getBusinessList"])({prompt_name:"levels-staffs",org_level_uuid:this.$store.state.currentCompany,staffs_uuid:this.params.staffs_uuid});case 2:t=e.sent,200==t.code&&(this.bindStaffList=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),success:function(){this.$v.params.$touch(),this.$v.params.$error||(this.isBindStaff||(this.params.staffs_uuid=""),this.$emit("success",this.params))},cancel:function(){this.$emit("cancel")},resetPassword:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["admin_account_reset"])({uuid:this.params.uuid});case 2:t=e.sent,200==t.code&&this.$Message({text:this.$t("message_The_operation_was_successful")});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},l=o,d=a("2877"),m=Object(d["a"])(l,s,n,!1,null,"2212d3c2",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2f3c74e8.dbdf6ed4.js.map