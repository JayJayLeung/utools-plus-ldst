(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39c22744"],{3128:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v(e._s(e.$t("label_The_general_information")))]),s("v-divider"),s("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v(e._s(e.$t("label_The_template")))])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("commoninfor",{on:{changee1:e.changee1}})],1),s("v-stepper-content",{attrs:{step:"2"}},[s("emailtemplate",{attrs:{function_uuid:e.function_uuid},on:{changee1:e.changee1,submit:e.submit}})],1)],1)],1)},i=[],l=s("5530"),r=s("fa26"),n=s("6a26"),c=s("d696"),u={components:{commoninfor:r["default"],emailtemplate:n["default"]},data:function(){return{e1:1,function_uuid:"",addlist:{},addlist2:{}}},mounted:function(){},methods:{changee1:function(e,t){this.e1=e,t&&(this.addlist=t),this.function_uuid=t.function_uuid},submit:function(e){var t=this;Object(c["addemailtemplate"])(Object(l["a"])(Object(l["a"])({},this.addlist),e)).then((function(e){"200"===e.code?(t.$store.commit("newsTips",t.$t("message_added_successfully")),t.$router.push({name:"emailtemplate"})):t.$store.commit("newsTips",e.msg)}))}}},o=u,d=(s("eeac"),s("2877")),m=Object(d["a"])(o,a,i,!1,null,"59a48892",null);t["default"]=m.exports},"7abc":function(e,t,s){},eeac:function(e,t,s){"use strict";var a=s("7abc"),i=s.n(a);i.a},fa26:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[s("mrc_ess_switch",{staticStyle:{"margin-right":"35px"},attrs:{"true-value":1,"false-value":0,readonly:e.disabled,"true-text":e.$t("label_To_enable_the"),"false-text":e.$t("label_disable")},model:{value:e.list.is_used,callback:function(t){e.$set(e.list,"is_used",e._n(t))},expression:"list.is_used"}})],1),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Template_name")+"*",isNational:e.judegNational("template_name"),readonly:e.disabled,"error-messages":e.$errors("list","template_name",e.requiredRule.concat(e.nocharacter))},model:{value:e.list.template_name,callback:function(t){e.$set(e.list,"template_name",t)},expression:"list.template_name"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_classification")+"*",isNational:e.judegNational("template_code"),readonly:e.disabled,"error-messages":e.$errors("list","template_name",e.requiredRule.concat(e.nocharacter))},model:{value:e.list.template_code,callback:function(t){e.$set(e.list,"template_code",t)},expression:"list.template_code"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{obj:e.module_reference,label:e.$t("label_The_module")+"*",errMsg:e.$errors("list","module_uuid",e.requiredRule),chips:"",rules:!1,disabled:e.disabled},model:{value:e.list.module_uuid,callback:function(t){e.$set(e.list,"module_uuid",t)},expression:"list.module_uuid"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{obj:e.function_reference,errMsg:e.$errors("list","function_uuid",e.requiredRule),label:e.$t("label_function")+"*",chips:"",rules:!1,disabled:e.disabled},model:{value:e.list.function_uuid,callback:function(t){e.$set(e.list,"function_uuid",t)},expression:"list.function_uuid"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-checkbox",{staticClass:"mx-2",attrs:{"true-value":1,"false-value":0,label:e.$t("label_Display_and_send_interface"),color:")"},model:{value:e.list.isshow,callback:function(t){e.$set(e.list,"isshow",t)},expression:"list.isshow"}})],1),s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_describe"),isNational:e.judegNational("template_remark"),readonly:e.disabled,"error-messages":e.$errors("list","template_remark",e.requiredRule)},model:{value:e.list.template_remark,callback:function(t){e.$set(e.list,"template_remark",t)},expression:"list.template_remark"}})],1)],1)],1),e.$store.state.uuid?[e.disabled?e._e():s("mrc_ess_submitBtn",{on:{cancel:e.cancel,success:e.success}})]:[e.disabled?e._e():s("mrc_ess_submitBtn",{attrs:{successText:e.$t("label_The_next_step")},on:{cancel:e.addcancel,success:e.addsuccess}})]],2)},i=[],l=(s("96cf"),s("1da1")),r=s("d696"),n=s("b5ae"),c={components:{},props:{disabled:{type:Boolean}},data:function(){return{list:{is_used:1}}},computed:{function_reference:function(){return{prompt_name:"function_reference",uuid:this.list.module_uuid}},module_reference:function(){return{prompt_name:"module_reference",uuid:this.$store.state.currentCompany}}},created:function(){},watch:{},mounted:function(){this.$store.state.uuid&&this.getdetail()},methods:{getdetail:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["getdetailemailtemplate"])({uuid:this.$store.state.uuid});case 2:t=e.sent,200==t.code&&(this.list=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({content:"确认取消编辑"}).then((function(t){e.$router.push({name:"emailtemplate"})}))["catch"]((function(e){}))},success:function(){var e=this;this.$v.list.$touch(),this.$v.list.$error||Object(r["updateemailtemplate"])(this.$deletefield(null,this.list)).then((function(t){200==t.code?(e.getdetail(),e.$store.commit("newsTips",e.$t("message_The_operation_was_successful"))):e.$store.commit("newsTips",t.msg)}))},addcancel:function(){var e=this;this.$myConfirm({content:"确认取消新增"}).then((function(t){e.$router.push({name:"emailtemplate"})}))["catch"]((function(e){}))},addsuccess:function(){this.$v.list.$touch(),this.$v.list.$error||this.$emit("changee1",2,this.list)}},validations:{list:{template_name:{required:n["required"],nocharacter:function(e){return this.$myVerify.nocharacter(e)}},template_code:{required:n["required"],nocharacter:function(e){return this.$myVerify.nocharacter(e)}},module_uuid:{required:n["required"]},function_uuid:{required:n["required"]},isshow:{},template_remark:{required:n["required"]}}}},u=c,o=s("2877"),d=Object(o["a"])(u,a,i,!1,null,"24473b0a",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-39c22744.7e6cb9b7.js.map