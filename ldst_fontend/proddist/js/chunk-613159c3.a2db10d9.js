(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613159c3","chunk-2cb7e3b1","chunk-2d0d6eb6"],{"1eac":function(e,t,n){"use strict";var s=n("4035"),o=n.n(s);o.a},4035:function(e,t,n){},7535:function(e,t,n){"use strict";n.r(t),n.d(t,"get_postgrades",(function(){return r})),n.d(t,"get_postgradesdetail",(function(){return a})),n.d(t,"get_postgrades_groupdetail",(function(){return l})),n.d(t,"add_postgrades",(function(){return i})),n.d(t,"add_postgrades_group",(function(){return u})),n.d(t,"update_postgrades",(function(){return c})),n.d(t,"update_postgrades_group",(function(){return d})),n.d(t,"delete_postgrades",(function(){return m})),n.d(t,"delete_postgrades_group",(function(){return _}));n("d3b7");var s=n("efc9"),o="mrbase_sys_job_post_grades",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/list-post-grades/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/find-post-grades/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/find-post-grades-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/add-post-grades/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/add-post-grades-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/update-post-grades/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/update-post-grades-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/delete-post-grades/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=o,new Promise((function(t,n){s["default"].post("/api/post/grade/delete-post-grades-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))}},ee2e:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",[n("v-card",[n("v-card-title",[n("mrc_ess_switch",{attrs:{"true-value":1,"false-value":0,readonly:e.readonly,"true-text":e.$t("label_To_enable_the"),"false-text":e.$t("label_disable")},model:{value:e.levelcomponentslist.is_used,callback:function(t){e.$set(e.levelcomponentslist,"is_used",t)},expression:"levelcomponentslist.is_used"}})],1),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_The_name_of_the_hierarchy")+"*",isNational:e.judegNational("job_grade_name"),"error-messages":e.$errors("levelcomponentslist","job_grade_name",e.requiredRule),readonly:e.readonly},model:{value:e.levelcomponentslist.job_grade_name,callback:function(t){e.$set(e.levelcomponentslist,"job_grade_name",t)},expression:"levelcomponentslist.job_grade_name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_NumInput",{attrs:{label:e.$t("label_The_hierarchy")+"*","error-messages":e.$errors("levelcomponentslist","job_grade_class",e.between("1-50")),readonly:!e.readonly},model:{value:e.levelcomponentslist.job_grade_class,callback:function(t){e.$set(e.levelcomponentslist,"job_grade_class",t)},expression:"levelcomponentslist.job_grade_class"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_multiText",{attrs:{label:e.$t("label_note"),isNational:e.judegNational("remark"),"error-messages":e.$errors("levelcomponentslist","remark",e.maxLength(200)),readonly:e.readonly},model:{value:e.levelcomponentslist.remark,callback:function(t){e.$set(e.levelcomponentslist,"remark",t)},expression:"levelcomponentslist.remark"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("mrc_ess_prompt",{attrs:{label:e.$t("label_company")+"*",disabled:e.readonly,multiple:!0,errMsg:e.$errors(null,"units",e.requiredRule),obj:e.unit},model:{value:e.units,callback:function(t){e.units=t},expression:"units"}})],1)],1),e.readonly?n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_NumInput",{attrs:{label:e.$t("label_Number_of_posts_in_use"),"error-messages":e.$errors("levelcomponentslist","staff_number",e.between("1-100000")),readonly:e.readonly},model:{value:e.levelcomponentslist.staff_number,callback:function(t){e.$set(e.levelcomponentslist,"staff_number",t)},expression:"levelcomponentslist.staff_number"}})],1),n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_NumInput",{attrs:{label:e.$t("label_The_sorting")+"*","error-messages":e.$errors("levelcomponentslist","sequence",e.between("1-50")),readonly:e.readonly},model:{value:e.levelcomponentslist.sequence,callback:function(t){e.$set(e.levelcomponentslist,"sequence",t)},expression:"levelcomponentslist.sequence"}})],1)],1):n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("mrc_ess_NumInput",{attrs:{label:e.$t("label_The_sorting")+"*","error-messages":e.$errors("levelcomponentslist","sequence",e.between("1-50").concat(e.requiredRule)),readonly:e.readonly},model:{value:e.levelcomponentslist.sequence,callback:function(t){e.$set(e.levelcomponentslist,"sequence",t)},expression:"levelcomponentslist.sequence"}})],1)],1)],1),e.readonly?e._e():n("mrc_ess_submitBtn",{attrs:{loading:e.btnIsLoading},on:{success:e.success,cancel:e.cancel}})],1)],1)},o=[],r=(n("a15b"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),a=n("7535"),l=n("b5ae"),i={components:{},props:{readonly:{type:Boolean,default:!1}},watch:{},data:function(){return{btnIsLoading:!1,nodorules:[function(e){return!!e||"不能为空"},function(e){return String(e).length<=200||"超过输入个数"},function(e){return!/[@#$%^&()<>?/]/.test(e)||"请勿输入非法字符"},function(e){return!/^ +| +$/g.test(e)||"不能输入空格"}],userrules:[function(e){return String(e).length<=20||"超过输入个数"},function(e){return!/[^\w]/g.test(e)||"只能输入数字和字母"}],unit:null,units:[],switch1:!1,levelcomponentslist:{job_grade_name:"",job_grade_shortcode:"",job_grade_class:"",is_used:"1",sequence:"",remark:"",org_level_uuid:""}}},validations:{levelcomponentslist:{job_grade_shortcode:{maxLength:Object(l["maxLength"])(10)},job_grade_name:{maxLength:Object(l["maxLength"])(20),required:l["required"]},job_grade_class:{maxLength:Object(l["maxLength"])(10),between:Object(l["between"])(1,50)},remark:{maxLength:Object(l["maxLength"])(200)},sequence:{maxLength:Object(l["maxLength"])(10),between:Object(l["between"])(1,50),required:l["required"]},staff_number:{maxLength:Object(l["maxLength"])(10),between:Object(l["between"])(1,1e5)}},units:{required:l["required"]}},created:function(){},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.national("mrbase_sys_job_post_grades");case 2:if(t=this.$store.state.userData.uuid||JSON.parse(localStorage.getItem("userData")).uuid,this.unit={prompt_name:"org_levels_manager_filter_company",user_uuid:t},!this.$route.params.uuid&&!this.$store.state.uuid){e.next=13;break}return this.$route.meta.title=this.$store.state.subPage_name,e.next=8,Object(a["get_postgradesdetail"])({uuid:this.$store.state.uuid});case 8:n=e.sent,this.levelcomponentslist=n.data,this.units=n.data.org_level_uuid.length>0?n.data.org_level_uuid.split(","):[],e.next=13;break;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{success:function(){var e=this;this.$v.levelcomponentslist.$touch(),this.$v.$touch(),this.$v.levelcomponentslist.$error||(this.btnIsLoading=!0,this.levelcomponentslist.org_level_uuid=this.units.join(),this.$route.params.uuid||this.$store.state.uuid?(delete this.levelcomponentslist.created_by,delete this.levelcomponentslist.updated_utc_datetime,delete this.levelcomponentslist.updated_by,delete this.levelcomponentslist.created_utc_datetime,Object(a["update_postgrades"])(this.levelcomponentslist).then((function(t){200==t.code?e.$router.push({name:"Post_level_management"}):"mrbase_sys_job_post_grades.job_grade_class.required"==t.code?(e.$myConfirm({content:e.$t("message_The_higher_the_number")}),e.btnIsLoading=!1):(e.$myConfirm({content:e.$t("message_The_modification_failed")}),e.btnIsLoading=!1)}))):Object(a["add_postgrades"])(this.levelcomponentslist).then((function(t){200==t.code?e.$router.push({name:"Post_level_management"}):"mrbase_sys_job_post_grades.job_grade_class.required"==t.code?(e.$myConfirm({content:e.$t("message_The_higher_the_number")}),e.btnIsLoading=!1):"mrbase_sys_job_post_grades.org_level_uuid.required"==t.code?(e.$myConfirm({content:e.$t("message_Unit_required")}),e.btnIsLoading=!1):(e.$myConfirm({content:e.$t("message_Add_failed")}),e.btnIsLoading=!1)})))},cancel:function(){this.$router.push({name:"Post_level_management"})}},computed:{company_uuid:function(){return this.$store.state.currentCompany}}},u=i,c=(n("1eac"),n("2877")),d=Object(c["a"])(u,s,o,!1,null,"4de4b2ae",null);t["default"]=d.exports},f40c:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Levelcomponents")],1)},o=[],r=n("ee2e"),a={components:{Levelcomponents:r["default"]},props:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{},computed:{},watch:{}},l=a,i=n("2877"),u=Object(i["a"])(l,s,o,!1,null,"4a5aa2ec",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-613159c3.a2db10d9.js.map