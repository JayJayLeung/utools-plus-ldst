(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77224258"],{ce1ba:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("v-card",[a("v-card-subtitle",[e.$store.state.uuid?a("mrc_ess_iconGroup",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}],staticStyle:{top:"-50px"},attrs:{showEdit:e.hasBtn("edit-function"),show_del:e.hasBtn("delete-function")},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}):e._e()],1),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"2"}},[a("v-switch",{attrs:{label:e.detailData.status_uuid?e.$t("label_To_enable_the"):e.$t("label_disable"),color:"primary",readonly:e.disabled},model:{value:e.detailData.status_uuid,callback:function(t){e.$set(e.detailData,"status_uuid",t)},expression:"detailData.status_uuid"}})],1)],1),a("v-form",{ref:"add_func"},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{label:e.$t("label_The_name_of_the_function")+"*",required:"",isNational:e.judegNational("function_name"),"append-icon":"mdi-longitude",readonly:e.disabled,rules:e.$text_rules(e.$t("label_The_name_of_the_function"))},model:{value:e.detailData.function_name,callback:function(t){e.$set(e.detailData,"function_name",t)},expression:"detailData.function_name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,required:"",label:e.$t("label_Function_short_code")+"*",isNational:e.judegNational("function_shortcode"),"append-icon":"mdi-longitude",rules:e.$text_rules(e.$t("label_Function_short_code"))},model:{value:e.detailData.function_shortcode,callback:function(t){e.$set(e.detailData,"function_shortcode",t)},expression:"detailData.function_shortcode"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{readonly:e.disabled,required:"",label:e.$t("label_Functional_description")+"*",isNational:e.judegNational("function_description"),rules:e.$text_rules(e.$t("label_Functional_description"))},model:{value:e.detailData.function_description,callback:function(t){e.$set(e.detailData,"function_description",t)},expression:"detailData.function_description"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:e.top_module,label:e.$t("label_The_superior_module")+"*",isNational:e.judegNational("module_uuid"),"item-text":"view_fields","item-value":"value_field",readonly:Boolean(e.$store.state.uuid),required:"",chips:"",rules:[function(t){return!!t||e.$t("label_The_superior_module")}]},on:{change:e.moduleChange},model:{value:e.detailData.module_uuid,callback:function(t){e.$set(e.detailData,"module_uuid",t)},expression:"detailData.module_uuid"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[e.$store.state.uuid?a("v-text-field",{attrs:{disabled:"",label:e.$t("label_version")+"*",rules:e.$text_rules(e.$t("label_version"))},model:{value:e.detailData.version,callback:function(t){e.$set(e.detailData,"version",t)},expression:"detailData.version"}}):a("v-select",{attrs:{items:e.version_arr,label:e.$t("label_version")+"*",required:"",rules:[function(t){return!!t||e.$t("label_version")}],readonly:Boolean(e.$store.state.uuid),chips:""},model:{value:e.detailData.version,callback:function(t){e.$set(e.detailData,"version",t)},expression:"detailData.version"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{readonly:e.disabled,items:e.data_table,label:e.$t("label_Associated_data_table")+"*","item-text":"view_fields","item-value":"value_field",required:"",chips:"",rules:[function(t){return!!t||e.$t("label_Associated_data_table")}]},model:{value:e.detailData.table_uuid,callback:function(t){e.$set(e.detailData,"table_uuid",t)},expression:"detailData.table_uuid"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{readonly:e.disabled,label:e.$t("label_Client_type")+"*",items:e.client_type,"item-value":"value_field","item-text":"view_fields",required:"","no-data-text":"请先选择上级模块",chips:"",multiple:"",rules:[function(t){return t.length>0||e.$t("label.client_type")}]},model:{value:e.detailData.client_type_uuid,callback:function(t){e.$set(e.detailData,"client_type_uuid",t)},expression:"detailData.client_type_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{readonly:e.disabled,items:e.func_type,label:e.$t("label_Function_type")+"*","item-text":"dict_label","item-value":"dict_value",required:"",chips:"",rules:[function(t){return!!t||e.$t("label_Function_type")}]},model:{value:e.detailData.function_type_uuid,callback:function(t){e.$set(e.detailData,"function_type_uuid",t)},expression:"detailData.function_type_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{readonly:e.disabled,items:e.unit_data,label:e.$t("label_Only_for_the_following_units"),"item-value":"value_field","item-text":"view_fields",multiple:"",chips:""},model:{value:e.detailData.org_level_uuid,callback:function(t){e.$set(e.detailData,"org_level_uuid",t)},expression:"detailData.org_level_uuid"}})],1)],1)],1)],1),e.disabled?e._e():a("mrc_ess_submitBtn",{attrs:{cancelText:e.$t("label_cancel"),successText:e.successText},on:{cancel:e.cancel,success:e.success}})],1)],1)},n=[],s=(a("4160"),a("a15b"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),l=a("6924"),u=a("fb42"),d=a("9858"),c={components:{},props:{func_data:{type:Object},func_disabled:{type:Boolean}},data:function(){return{skLoading:!0,successText:this.$t("label_The_next_step"),detailData:{function_name:"",function_shortcode:"",function_description:"",table_uuid:"",function_type_uuid:"",module_uuid:"",org_level_uuid:[],status_uuid:!0,client_type_uuid:[],version:"",uuid:null},uuid:null,top_module:[],data_table:[],func_type:[],unit_data:[],version_arr:[],client_type:[],version_uuid:"",disabled:!1,tempData:{}}},created:function(){},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.skLoading=!0,e.prev=1,e.next=4,this.national("mrbase_sys_functions");case 4:return e.next=6,Object(u["getBusinessList"])({prompt_name:"function_parent",uuid:this.detailData.uuid});case 6:return t=e.sent,this.top_module=t.data,e.next=10,Object(l["getBusinessList"])("table_name");case 10:return a=e.sent,this.data_table=a.data,e.next=14,Object(d["getDataByName"])("functionType");case 14:return i=e.sent,this.func_type=i.data,e.next=18,Object(l["getBusinessList"])("open_util");case 18:return n=e.sent,this.unit_data=n.data,e.next=22,Object(l["get_versions"])({module_uuid:this.detailData.module_uuid});case 22:s=e.sent,this.version_arr=s.data.version.split(","),this.version_uuid=s.data.uuid,this.skLoading=!1,e.next=31;break;case 28:e.prev=28,e.t0=e["catch"](1),this.skLoading=!1;case 31:case"end":return e.stop()}}),e,this,[[1,28]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{moduleChange:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.state.uuid){e.next=8;break}return this.detailData.version="",this.version_arr=[],e.next=5,Object(l["get_versions"])({module_uuid:t});case 5:a=e.sent,this.version_arr=a.data.version.split(","),this.version_uuid=a.data.uuid;case 8:return e.next=10,Object(u["getBusinessList"])({prompt_name:"function_client_type",module_uuid:t});case 10:i=e.sent,this.client_type=i.data;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleReturn:function(){this.$router.go(-1)},handleEdit:function(){this.disabled=!this.disabled},handleDel:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["get_func_del"])({uuid:t.detailData.uuid});case 2:a=e.sent,console.log(a),200==a.code&&(t.$store.commit("newsTips",t.$t("message_The_deletion_was_successful")),t.$router.push({name:"module_func_manage"}));case 5:case"end":return e.stop()}}),e,this)}))))["catch"]((function(e){}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(){e.detailData.uuid?(e.disabled=!e.disabled,e.$emit("func_cancel")):e.$router.go(-1)}))["catch"]((function(){}))},success:function(){var e=this,t=this.$refs.add_func.validate();if(t){var a=this.$clone(this.detailData);a.status_uuid=a.status_uuid?1:0,a.org_level_uuid=a.org_level_uuid.join(),a.client_type_uuid=a.client_type_uuid.join(),a.created_utc_datetime&&(delete a.created_utc_datetime,delete a.updated_utc_datetime),this.$emit("getData",a);var i=[];this.client_type.forEach((function(t){e.detailData.client_type_uuid.forEach((function(e){t.value_field==e&&i.push(t)}))})),this.$emit("getBtnClientType",i),this.$emit("getVersion_uuid",this.version_uuid)}}},computed:{},watch:{func_data:{handler:function(e){var t=this;this.$nextTick(Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.disabled=!0,t.successText=t.$t("label_submit"),i=t.$clone(e),i.client_type_uuid&&(i.client_type_uuid=i.client_type_uuid.split(",")),a.next=6,t.moduleChange(i.module_uuid);case 6:t.detailData=i,t.tempData=i,n=[],t.client_type.length>0&&t.client_type.forEach((function(e){i.client_type_uuid.forEach((function(t){e.value_field==t&&n.push(e)}))})),t.$emit("getBtnClientType",n);case 11:case"end":return a.stop()}}),a,this)}))))},deep:!0},func_disabled:function(){this.disabled=!this.disabled,this.tempData=this.detailData}}},o=c,r=a("2877"),_=Object(r["a"])(o,i,n,!1,null,"24843b5c",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-77224258.41ea253e.js.map