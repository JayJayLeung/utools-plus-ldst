(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de7eb44a","chunk-2d0d7e27"],{"0bb1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mrc_ess_skLoaders",{attrs:{skLoading:e.skLoading}},[a("div",{staticClass:"advance",attrs:{"data-app":"true"}},[a("mrc_ess_iconGroup",{attrs:{is_disabled:e.disabled},on:{handleReturn:e.handleReturn,handleEdit:e.handleEdit,handleDel:e.handleDel}}),a("v-form",{ref:"advanceReferTo",model:{value:e.advanceReferTo,callback:function(t){e.advanceReferTo=t},expression:"advanceReferTo"}},[a("v-card",{staticStyle:{padding:"10px 40px"}},[e.$store.state.uuid?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticStyle:{float:"right"}},[e._l(e.reqParams.client_type_uuid,(function(e){return[a("mrc_ess_svgIcon",{key:e,staticStyle:{"font-size":"24px","margin-right":"5px"},attrs:{"icon-class":e}})]}))],2)])],1):e._e(),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:e.$t("label_With_reference_to_the_name")+"*",required:"",readonly:e.disabled,rules:e.$text_rules(e.$t("label_With_reference_to_the_name"))},model:{value:e.reqParams.prompt_name,callback:function(t){e.$set(e.reqParams,"prompt_name",t)},expression:"reqParams.prompt_name"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:e.$t("label_type")+"*",required:"",readonly:e.disabled,rules:e.$text_rules(e.$t("label_type"))},model:{value:e.reqParams.prompt_type,callback:function(t){e.$set(e.reqParams,"prompt_type",t)},expression:"reqParams.prompt_type"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-textarea",{attrs:{"auto-grow":!0,readonly:e.disabled,clearable:!1,label:e.$t("label_describe"),"row-height":"24",rows:"1"},model:{value:e.reqParams.prompt_desc,callback:function(t){e.$set(e.reqParams,"prompt_desc",t)},expression:"reqParams.prompt_desc"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_dictName",{attrs:{disabled:e.disabled,label:e.$t("label_Client_type")+"*",rules:!1,multiple:"",errMsg:e.$errors("reqParams","client_type_uuid",e.requiredRule),dict_name:"client_type",chips:""},model:{value:e.reqParams.client_type_uuid,callback:function(t){e.$set(e.reqParams,"client_type_uuid",t)},expression:"reqParams.client_type_uuid"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{rules:e.$t("label_The_source_table_name"),label:e.$t("label_The_source_table_name")+"*",disabled:e.disabled,obj:e.promptData},on:{getData:e.source_tableChange},model:{value:e.reqParams.source_table,callback:function(t){e.$set(e.reqParams,"source_table",t)},expression:"reqParams.source_table"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_prompt",{attrs:{select_arr:e.valArr,rules:e.$t("label_Take_the_column_value"),disabled:e.disabled,label:e.$t("label_Take_the_column_value")+"*","no-data-text":e.$t("error.source_table")},model:{value:e.reqParams.value_field,callback:function(t){e.$set(e.reqParams,"value_field",t)},expression:"reqParams.value_field"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("mrc_ess_prompt",{attrs:{select_arr:e.valArr,rules:e.$t("label_Show_columns"),disabled:e.disabled,label:e.$t("label_Show_columns")+"*","no-data-text":e.$t("error.source_table")},model:{value:e.reqParams.view_fields,callback:function(t){e.$set(e.reqParams,"view_fields",t)},expression:"reqParams.view_fields"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{attrs:{label:e.$t("label_Associated_with_the_unit"),readonly:e.disabled,isNational:e.judegNational("org_filter_field")},model:{value:e.reqParams.org_filter_field,callback:function(t){e.$set(e.reqParams,"org_filter_field",t)},expression:"reqParams.org_filter_field"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("mrc_ess_multiText",{attrs:{label:e.$t("label_Associated_personnel"),readonly:e.disabled,isNational:e.judegNational("user_filter_field")},model:{value:e.reqParams.user_filter_field,callback:function(t){e.$set(e.reqParams,"user_filter_field",t)},expression:"reqParams.user_filter_field"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{select_arr:e.valArr,rules:e.$t("label_With_reference_to_the_content"),disabled:e.disabled,label:e.$t("label_With_reference_to_the_content")+"*","no-data-text":e.$t("error.source_table"),multiple:""},model:{value:e.reqParams.prompt_field,callback:function(t){e.$set(e.reqParams,"prompt_field",t)},expression:"reqParams.prompt_field"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{label:e.$t("label_conditions"),readonly:e.disabled,rules:[function(e){return String(e).length<=200||"超过输入个数"},function(e){return!/[@#$%^&()<>?/]/.test(e)||"请勿输入非法字符"}]},model:{value:e.reqParams.filter,callback:function(t){e.$set(e.reqParams,"filter",t)},expression:"reqParams.filter"}})],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[a("mrc_ess_prompt",{attrs:{select_arr:e.valArr,rules:e.$t("label_The_sorting"),disabled:e.disabled,label:e.$t("label_The_sorting")+"*","no-data-text":e.$t("error.source_table")},model:{value:e.reqParams.orderby,callback:function(t){e.$set(e.reqParams,"orderby",t)},expression:"reqParams.orderby"}})],1)],1)],1),a("mrc_ess_submitBtn",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{loading:e.loading},on:{cancel:e.cancel,success:e.success}})],1),a("confirm",{attrs:{isOpen:e.isOpen,showText:e.showText,isLoading:e.isLoading},on:{onCancel:e.onCancel,onConfirm:e.onConfirm}}),a("v-snackbar",{attrs:{timeout:e.timeout,right:!0,top:!0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.newsText)+" ")])],1)])},s=[],n=(a("a15b"),a("b0c0"),a("ac1f"),a("841c"),a("1276"),a("96cf"),a("1da1")),i=a("fb42"),l=(a("9858"),a("795d")),o=a("b5ae"),c={components:{confirm:l["default"]},props:{},data:function(){return{loading:!1,skLoading:!0,showText:this.$t("info.is_del"),is_return:!1,snackbar:!1,timeout:2e3,newsText:"",isLoading:!1,isOpen:!1,params:{"~table~":"mrbase_sys_prompt"},reqParams:{"~table~":"mrbase_sys_prompt",prompt_name:"",prompt_desc:"",source_table:"",value_field:"",view_fields:"",user_filter_field:"",org_filter_field:"",prompt_type:"",orderby:"",prompt_field:[],client_type_uuid:[],uuid:"",filter:""},temp:{},source_table_name:[],valArr:[],disabled:!0,advanceReferTo:!0,promptData:{}}},validations:{reqParams:{client_type_uuid:{required:o["required"]}}},created:function(){this.promptData={prompt_name:"table_name"}},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.national("mrbase_sys_prompt");case 2:this.$nextTick(Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.getters.subPage_name,r=t.$route.params.uuid||t.$store.state.uuid,t.skLoading=!0,!r){e.next=20;break}return t.$route.meta.title=a,t.reqParams.prompt_name=a,t.reqParams.uuid=r,e.next=9,t.getdetail();case 9:for(n in s=e.sent,s)for(i in t.reqParams)n==i&&(t.reqParams[i]=s[n]);return t.reqParams.prompt_field&&(t.reqParams.prompt_field=t.reqParams.prompt_field.split(",")),s.client_type_uuid&&(t.reqParams.client_type_uuid=t.reqParams.client_type_uuid.split(",")),t.temp=t.reqParams,e.next=16,t.search({source_table:s.source_table,prompt_name:"relation_field"});case 16:l=e.sent,t.valArr=l,e.next=22;break;case 20:t.$route.meta.title="新参照",t.disabled=!1;case 22:t.skLoading=!1;case 23:case"end":return e.stop()}}),e,this)}))));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{cancel:function(){var e=this.$route.params.uuid||this.$store.state.uuid;this.showText=e?this.$t("info.give_up_modify"):this.$t("info.give_up_add"),this.isOpen=!0,this.is_return=!0},success:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.params.name||this.$store.state.subPage_name,this.$v.reqParams.client_type_uuid.$touch(),a=this.$refs.advanceReferTo.validate(),a&&!this.$v.reqParams.client_type_uuid.$error){e.next=7;break}return this.is_return=!1,this.isOpen=!1,e.abrupt("return");case 7:if(this.isLoading=!0,this.loading=!0,r=this.$clone(this.reqParams),r.prompt_field=r.prompt_field.join(),r.client_type_uuid=r.client_type_uuid.join(),!t){e.next=18;break}return e.next=15,Object(i["getChange"])(r).then((function(e){return s.isLoading=!1,200==e.code&&(s.$Message({text:s.$t("info.edit_success")}),s.$router.go(-1)),s.loading=!1,e}))["catch"]((function(e){return s.loading=!1,e}));case 15:e.sent,e.next=21;break;case 18:return e.next=20,Object(i["getAdd"])(r).then((function(e){return s.isLoading=!1,200==e.code&&(s.$Message({text:s.$t("info.add_success")}),s.$router.go(-1)),s.loading=!1,e}))["catch"]((function(e){return s.loading=!1,e}));case 20:e.sent;case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDel:function(){this.showText=this.$t("info.is_del"),this.isOpen=!0},onCancel:function(){this.is_return=!1,this.isOpen=!1},onConfirm:function(){var e=this;if(this.is_return)this.$router.go(-1);else{this.isLoading=!0;var t=Object.assign({},this.params,{uuid:this.reqParams.uuid});Object(i["getDetele"])(t).then((function(t){e.isOpen=!1,e.isLoading=!1,e.$Message({text:e.$t("info.del_success")}),1===e.$parent.desserts.length&&e.$parent.params.cpage>1&&(e.$parent.params.cpage--,e.$parent.params.totalpage--),e.$router.go(-1)}))["catch"]((function(t){e.isLoading=!1,console.log(t)}))}},handleEdit:function(){this.disabled=!this.disabled},handleReturn:function(){this.$router.go(-1)},search:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},a=Object.assign({},this.params,{prompt_name:"table_name"},t),e.next=4,Object(i["getBusinessList"])(a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getdetail:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object.assign({},this.params,{uuid:this.reqParams.uuid}),e.next=3,Object(i["getDetail"])(t).then((function(e){if(200==e.code)return e.data;r.$Message({text:e.msg})}))["catch"]((function(e){console.log(e)}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),source_tableChange:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.search({source_table:t,prompt_name:"relation_field"});case 2:a=e.sent,this.reqParams.value_field="",this.reqParams.view_fields="",this.reqParams.orderby="",this.reqParams.prompt_field=[],this.valArr=a;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},computed:{},watch:{}},u=c,d=(a("2ff8"),a("2877")),m=Object(d["a"])(u,r,s,!1,null,"134294e4",null);t["default"]=m.exports},"2ff8":function(e,t,a){"use strict";var r=a("c916"),s=a.n(r);s.a},"795d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":e.cancel},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-text",[e._v(e._s(e.title))]),a("v-card-subtitle",[e._v(" "+e._s(e.showText)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.cancel}},[e._v(" "+e._s(e.$t("label.no"))+" ")]),a("v-btn",{attrs:{color:"green darken-1",text:"",loading:e.loading},on:{click:e.confirm}},[e._v(" "+e._s(e.$t("label.yes"))+" ")])],1)],1)],1)},s=[],n={components:{},props:{title:{type:String,default:"提示"},isOpen:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0},showText:{type:String,required:!0}},data:function(){return{loading:!1,dialog:!1}},created:function(){},mounted:function(){this.loading=this.isLoading,this.dialog=this.isOpen},methods:{confirm:function(){this.$emit("onConfirm")},cancel:function(){this.$emit("onCancel")}},computed:{},watch:{isLoading:function(e){this.loading=e},isOpen:function(e){this.dialog=e}}},i=n,l=a("2877"),o=Object(l["a"])(i,r,s,!1,null,"8bb2fffa",null);t["default"]=o.exports},c916:function(e,t,a){}}]);
//# sourceMappingURL=chunk-de7eb44a.d4df3b46.js.map