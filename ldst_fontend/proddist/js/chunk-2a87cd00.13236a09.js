(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a87cd00"],{9705:function(t,e,a){"use strict";var l=a("ec89"),i=a.n(l);i.a},aeef:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"btnForm"},[a("v-card",{staticClass:"dialog_card"},[a("v-card-title",{staticClass:"card_title",style:{width:t.dialogWidth}},[a("div",[t._v(t._s(t.dialogTitle))]),a("div",{staticClass:"close_dialog",on:{click:t.cancel}},[t._v("X")])]),a("v-card-text",{staticClass:"dialog_content"},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"2"}},[a("v-switch",{attrs:{label:t.detailData.status_uuid?t.$t("label_To_enable_the"):t.$t("label_disable"),color:"primary",readonly:t.onlyShow,"true-value":"1","false-value":"0"},model:{value:t.detailData.status_uuid,callback:function(e){t.$set(t.detailData,"status_uuid",e)},expression:"detailData.status_uuid"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.btnType,readonly:t.onlyShow,label:t.$t("label_type")+"*","item-text":"dict_label","item-value":"dict_value",required:"",chips:"",rules:[function(t){return!!t||"类型"}]},model:{value:t.detailData.button_type,callback:function(e){t.$set(t.detailData,"button_type",e)},expression:"detailData.button_type"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.btnFunc,readonly:t.onlyShow,label:t.$t("label_function")+"*","item-text":"dict_label","item-value":"dict_value",required:"",chips:"",rules:[function(e){return!!e||t.$t("label_function")}]},model:{value:t.detailData.button_category_uuid,callback:function(e){t.$set(t.detailData,"button_category_uuid",e)},expression:"detailData.button_category_uuid"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{required:"",label:t.$t("label_The_name_of_the_button")+"*",readonly:t.onlyShow,isNational:t.judegNational("button_name"),"append-icon":"mdi-longitude",rules:t.$text_rules(t.$t("label_The_name_of_the_button"))},model:{value:t.detailData.button_name,callback:function(e){t.$set(t.detailData,"button_name",e)},expression:"detailData.button_name"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{required:"",label:t.$t("label_The_title")+"*",isNational:t.judegNational("button_title"),readonly:t.onlyShow,rules:t.$text_rules(t.$t("label_The_title"))},model:{value:t.detailData.button_title,callback:function(e){t.$set(t.detailData,"button_title",e)},expression:"detailData.button_title"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_multiText",{staticStyle:{width:"100%"},attrs:{required:"",label:t.$t("label_Button_description")+"*",isNational:t.judegNational("button_description"),readonly:t.onlyShow,rules:t.$text_rules(t.$t("label_Button_description"))},model:{value:t.detailData.button_description,callback:function(e){t.$set(t.detailData,"button_description",e)},expression:"detailData.button_description"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"4"}},[a("v-checkbox",{attrs:{color:"primary",readonly:t.onlyShow,label:t.$t("label_Function_entry")+"*","true-value":1,"false-value":0},model:{value:t.detailData.is_main,callback:function(e){t.$set(t.detailData,"is_main",e)},expression:"detailData.is_main"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"4"}},[a("v-checkbox",{attrs:{color:"primary",readonly:t.onlyShow,label:t.$t("label_send_email")+"*","true-value":1,"false-value":0},model:{value:t.detailData.is_send_email,callback:function(e){t.$set(t.detailData,"is_send_email",e)},expression:"detailData.is_send_email"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:t.$t("label_URL"),readonly:t.onlyShow},model:{value:t.detailData.url,callback:function(e){t.$set(t.detailData,"url",e)},expression:"detailData.url"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{readonly:t.onlyShow,label:t.$t("label_components"),required:""},model:{value:t.detailData.button_component,callback:function(e){t.$set(t.detailData,"button_component",e)},expression:"detailData.button_component"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.client_type,label:t.$t("label_Client_type")+"*",readonly:t.onlyShow,"item-value":"value_field","item-text":"view_fields",required:"",multiple:"",chips:"",rules:[function(e){return e.length>0||t.$t("label_Client_type")}]},model:{value:t.detailData.client_type_uuid,callback:function(e){t.$set(t.detailData,"client_type_uuid",e)},expression:"detailData.client_type_uuid"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[t.update_add&&!t.detailData.uuid?a("v-select",{attrs:{items:t.version_arr,label:t.$t("label_version")+"*",readonly:t.onlyShow,rules:[function(e){return!!e||t.$t("label_version")}],chips:""},model:{value:t.detailData.version,callback:function(e){t.$set(t.detailData,"version",e)},expression:"detailData.version"}}):t._e(),t.detailData.uuid?a("v-text-field",{attrs:{label:t.$t("label_version")+"*",readonly:""},model:{value:t.detailData.version,callback:function(e){t.$set(t.detailData,"version",e)},expression:"detailData.version"}}):t._e(),t.detailData.uuid||t.update_add?t._e():a("v-text-field",{attrs:{label:t.$t("label_version")+"*",readonly:""},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:t.$t("label_Button_icon")+"*",readonly:t.onlyShow},model:{value:t.detailData.button_icon,callback:function(e){t.$set(t.detailData,"button_icon",e)},expression:"detailData.button_icon"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:t.$t("label_The_sorting")+"*",readonly:t.onlyShow,rules:t.$text_rules(t.$t("label_The_sorting"),[function(t){return/^[1-9]*$/.test(t)||"请输入数字"}])},on:{blur:t.verifyNum},model:{value:t.detailData.sequence,callback:function(e){t.$set(t.detailData,"sequence",e)},expression:"detailData.sequence"}})],1)],1)],1),t.onlyShow?t._e():a("mrc_ess_submitBtn",{attrs:{successText:t.$t("label_save")},on:{cancel:t.cancel,success:t.success}})],1)],1)},i=[],n=(a("a15b"),a("a9e3"),a("b64b"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),s=(a("9858"),a("6924"),{components:{},props:{dialogTitle:{type:String},dialogWidth:{type:String},client_type:{type:Array},btnFunc:{type:Array},btnType:{type:Array},version_arr:{type:Array},version:{type:String},dialogDefaultData:{type:Object},onlyShow:{type:Boolean},update_add:{type:Boolean}},data:function(){return{detailData:{button_category_uuid:"",client_type_uuid:[],button_type:"",button_name:"",button_description:"",is_main:0,status_uuid:0,button_title:"",url:"",button_icon:"",sequence:1,is_send_email:0,button_component:"",version:""},checkbox:!0,checkbox1:!0,uuid:""}},created:function(){},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.national("mrbase_sys_function_buttons");case 2:this.dataShow(this.dialogDefaultData);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{dataShow:function(t){if(Object.keys(t).length){var e=this.$clone(t);t.button_type=String(t.button_type),e.client_type_uuid&&(e.client_type_uuid=e.client_type_uuid.split(",")),this.detailData=e}},cancel:function(){this.reset(),this.$emit("cancel")},reset:function(){this.detailData={button_category_uuid:"",client_type_uuid:[],button_type:"",button_name:"",button_description:"",is_main:0,status_uuid:0,button_title:"",url:"",button_icon:"",sequence:1,is_send_email:0,button_component:"",version:""}},success:function(){var t=this.$refs.btnForm.validate();if(t){this.version_arr.length<=0&&(this.detailData.version=this.version);var e=this.$clone(this.detailData);e.client_type_uuid=e.client_type_uuid.join(),this.$emit("getBtnDetail",e),this.reset()}},verifyNum:function(t){/^[1-9]*$/.test(Number(t.target.value))||(this.detailData.sequence=1,t.target.value=1)}},computed:{},watch:{dialogDefaultData:{handler:function(t){this.dataShow(t)},deep:!0}}}),o=s,u=(a("9705"),a("2877")),c=Object(u["a"])(o,l,i,!1,null,"63601f38",null);e["default"]=c.exports},ec89:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2a87cd00.13236a09.js.map