(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef923210","chunk-2d0e2cc6","chunk-2d0e184d"],{"7b7c":function(e,t,a){"use strict";a.r(t),a.d(t,"approverList",(function(){return s})),a.d(t,"addApprover",(function(){return o})),a.d(t,"delApprover",(function(){return l})),a.d(t,"updateApprover",(function(){return i})),a.d(t,"detailApprover",(function(){return c}));a("d3b7");var n=a("efc9"),r="mrbase_sys_flow_proxy_approval",s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,a){n["default"].post("/api/proxy_approval/list-approval/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,a){n["default"].post("/api/proxy_approval/add-approval/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,a){n["default"].post("/api/proxy_approval/delete-approval/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,a){n["default"].post("/api/proxy_approval/update-approval/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=r,new Promise((function(t,a){n["default"].post("/api/proxy_approval/find-approval/v1",e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))}},"7fde":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-subtitle"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("mrc_ess_staffMsg",{attrs:{label:e.$t("label_The_acting_employee")+"*",disabled:e.disabled,placeholder:e.$t("label_Employee_name_number")},model:{value:e.params.agent_staff_uuid,callback:function(t){e.$set(e.params,"agent_staff_uuid",t)},expression:"params.agent_staff_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_staffMsg",{attrs:{label:e.$t("label_Acting_employee")+"*",disabled:e.disabled,placeholder:e.$t("label_Employee_name_number")},model:{value:e.params.proxy_staff_uuid,callback:function(t){e.$set(e.params,"proxy_staff_uuid",t)},expression:"params.proxy_staff_uuid"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:!1,label:e.$t("label_The_type_of_business")+"*",disabled:e.disabled,obj:e.agent_approval_type},model:{value:e.params.flow_proxy_type_uuid,callback:function(t){e.$set(e.params,"flow_proxy_type_uuid",t)},expression:"params.flow_proxy_type_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_datePicker",{attrs:{label:e.$t("label_Start_date")+"*",disabled:e.disabled,placeholder:"YYYY/MM/DD"},model:{value:e.params.effective_start,callback:function(t){e.$set(e.params,"effective_start",t)},expression:"params.effective_start"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("mrc_ess_datePicker",{attrs:{label:e.$t("label_End_date")+"*",disabled:e.disabled,placeholder:"YYYY/MM/DD"},model:{value:e.params.effective_end,callback:function(t){e.$set(e.params,"effective_end",t)},expression:"params.effective_end"}})],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-checkbox",{attrs:{"true-value":1,readonly:e.disabled,label:e.$t("label_Forward_unapproved_items_to_delegates")+"*","false-value":0},model:{value:e.params.is_forward_all_incompleted_items_now,callback:function(t){e.$set(e.params,"is_forward_all_incompleted_items_now",t)},expression:"params.is_forward_all_incompleted_items_now"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-checkbox",{attrs:{"true-value":1,readonly:e.disabled,label:e.$t("label_After_the_agent_ends")+"*","false-value":0},model:{value:e.params.is_return_all_incompleted_items_whenexpired,callback:function(t){e.$set(e.params,"is_return_all_incompleted_items_whenexpired",t)},expression:"params.is_return_all_incompleted_items_whenexpired"}})],1)],1)],1),a("mrc_ess_submitBtn",{on:{success:e.success,cancel:e.cancel}})],1)},r=[],s={components:{},props:{disabled:{type:Boolean,default:!1}},data:function(){return{params:{flow_proxy_type_uuid:"",effective_start:"",effective_end:"",agent_staff_uuid:"",proxy_staff_uuid:"",is_forward_all_incompleted_items_now:0,is_return_all_incompleted_items_whenexpired:0}}},validations:{params:{}},computed:{agent_approval_type:function(){return{prompt_name:"agent_approval_type",org_level_uuid:this.$store.state.userData.org_level_uuid}}},created:function(){},watch:{},mounted:function(){},methods:{success:function(){this.params.effective_start=this.$moment(this.params.effective_start),this.params.effective_end=this.$moment(this.params.effective_end),this.$emit("getData",this.params)},cancel:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(){e.$router.go(-1)}))["catch"]((function(){}))}}},o=s,l=a("2877"),i=Object(l["a"])(o,n,r,!1,null,"28d978f5",null);t["default"]=i.exports},a8ae:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mrc_ess_iconGroup",{attrs:{is_disabled:e.disabled},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("approverInfo",{on:{getData:e.getData}})],1)},r=[],s=(a("96cf"),a("1da1")),o=a("7fde"),l=a("7b7c"),i={components:{approverInfo:o["default"]},props:{},data:function(){return{disabled:!0,params:{uuid:""}}},validations:{},computed:{},created:function(){},watch:{},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.state.iconstatus||(this.disabled=!1),e.next=3,this.getDetail();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleReturn:function(){this.$router.go(-1)},getDetail:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["detailApprover"])({uuid:this.$store.state.uuid});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){},getData:function(e){console.log(e)}}},c=i,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,"60943cca",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-ef923210.fb09ad05.js.map