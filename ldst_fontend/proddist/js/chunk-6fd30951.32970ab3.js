(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fd30951","chunk-2d0af7ea"],{"0f20":function(e,t,r){"use strict";r.r(t),r.d(t,"getOrganizationalManagementList",(function(){return n})),r.d(t,"detailOrganizationalManagement",(function(){return a})),r.d(t,"deleteOrganizationalManagement",(function(){return l})),r.d(t,"updateOrganizationalManagement",(function(){return o})),r.d(t,"addOrganizationalManagement",(function(){return u}));r("d3b7");var i=r("efc9"),s="mrbase_sys_staff_property_group",n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,r){i["default"].post("/api/staff-property/find-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){r(e)}))}))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,r){i["default"].post("/api/staff-property/find-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){r(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,r){i["default"].post("/api/staff-property/find-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){r(e)}))}))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,r){i["default"].post("/api/staff-property/delete-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){r(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,r){i["default"].post("/api/staff-property/add-group/v1",e).then((function(e){t(e)}))["catch"]((function(e){r(e)}))}))}},"56e0":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-text",{staticClass:"pl-8 pr-8"},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:this.$t("label_The_original_company")+"*",rules:!1,chips:!1,disabled:!0,value_field:"uuid",view_fields:"org_level_name",select_arr:e.$store.state.topcompanylist},model:{value:e.viewList.org_level_uuid,callback:function(t){e.$set(e.viewList,"org_level_uuid",t)},expression:"viewList.org_level_uuid"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:this.$t("label_The_original_department")+"*",rules:!1,disabled:!0,obj:e.deptuuid},model:{value:e.viewList.dept_uuid,callback:function(t){e.$set(e.viewList,"dept_uuid",t)},expression:"viewList.dept_uuid"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:e.$t("label_changeType")+"*",rules:!1,disabled:!0,obj:e.changeType},model:{value:e.viewList.job_post_uuid,callback:function(t){e.$set(e.viewList,"job_post_uuid",t)},expression:"viewList.job_post_uuid"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_datePicker",{attrs:{errMsg:e.$errors("list","Change_effective",e.requiredRule),disabled:e.disabled,label:this.$t("label_Effective_date")+"*"},on:{getTime:e.paramsChange},model:{value:e.list.Change_effective,callback:function(t){e.$set(e.list,"Change_effective",t)},expression:"list.Change_effective"}})],1)],1),r("div",[r("div",{staticClass:"pl-6 pt-6 pr-6 mt-4 mb-6",staticStyle:{border:"2px solid rgb(238, 238, 240)","border-radius":"8px"}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:this.$t("label_New_company")+"*",rules:!1,value_field:"uuid",view_fields:"org_level_name",select_arr:e.$store.state.topcompanylist,disabled:e.disabled},model:{value:e.list.transferred_org_level_uuid,callback:function(t){e.$set(e.list,"transferred_org_level_uuid",t)},expression:"list.transferred_org_level_uuid"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:this.$t("label_New_department")+"*",rules:!1,disabled:e.disabled,obj:e.newdeptuuid},model:{value:e.list.transferred_dept_uuid,callback:function(t){e.$set(e.list,"transferred_dept_uuid",t)},expression:"list.transferred_dept_uuid"}})],1),r("v-col",{attrs:{cols:"12"}},[r("mrc_ess_prompt",{attrs:{label:e.$t("label_newDepartManager")+"*",rules:!1,disabled:e.disabled,obj:e.newsuperior},model:{value:e.list.direct_leader_code,callback:function(t){e.$set(e.list,"direct_leader_code",t)},expression:"list.direct_leader_code"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:e.$t("label_role")+"："+e.$t("label_move")+"/"+e.$t("label_merge")+"*",rules:!1,multiple:!0,disabled:e.disabled,obj:e.newspica},model:{value:e.list.transferred_role_uuid,callback:function(t){e.$set(e.list,"transferred_role_uuid",t)},expression:"list.transferred_role_uuid"}})],1),r("v-col",{attrs:{cols:"6"}},[r("mrc_ess_prompt",{attrs:{label:e.$t("label_post")+"："+e.$t("label_move")+"/"+e.$t("label_merge")+"*",rules:!1,disabled:e.disabled,obj:e.newjob_post_uuid},model:{value:e.list.transferred_post_uuid,callback:function(t){e.$set(e.list,"transferred_post_uuid",t)},expression:"list.transferred_post_uuid\t"}})],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("mrc_ess_multiText",{attrs:{label:this.$t("label_note"),isNational:e.judegNational("remark"),readonly:e.disabled},model:{value:e.list.remark,callback:function(t){e.$set(e.list,"remark",t)},expression:"list.remark"}})],1)],1)],1),e.disabled?e._e():r("mrc_ess_submitBtn",{attrs:{loading:e.btnIsLoading},on:{success:e.success,cancel:e.cancel}})],1)},s=[],n=(r("4de4"),r("c975"),r("a15b"),r("ac1f"),r("1276"),r("96cf"),r("1da1")),a=r("0f20"),l=r("b5ae"),o={components:{},props:{disabled:{type:Boolean,default:!1}},data:function(){return{list:{},btnIsLoading:!1,viewList:{}}},computed:{deptuuid:function(){return{prompt_name:"levelUuid_deptUuid",org_level_uuid:this.company_uuid}},company_uuid:function(){return this.$store.state.currentCompany},company_Name:function(){var e=this,t=this.$store.state.topcompanylist.filter((function(t){return t.uuid==e.$store.state.currentCompany}));return t[0].org_level_name},changeType:function(){return{prompt_name:"level-dept-post",dept_uuid:this.viewList.dept_uuid}},superior:function(){return{prompt_name:"boss",org_level_uuid:this.company_uuid,staff_uuid:this.list.staff_uuid}},spica:function(){return{prompt_name:"level-role",org_level_uuid:this.company_uuid}},newdeptuuid:function(){return{prompt_name:"levelUuid_deptUuid",org_level_uuid:this.list.transferred_org_level_uuid}},newjob_post_uuid:function(){return{prompt_name:"level-dept-post",dept_uuid:this.list.transferred_dept_uuid}},newsuperior:function(){return{prompt_name:"new_boss",org_level_uuid:this.list.transferred_org_level_uuid}},newspica:function(){return{prompt_name:"level-role",org_level_uuid:this.list.transferred_org_level_uuid}},newmrbase_sys_job_post_grades:function(){return{prompt_name:"mrbase_sys_job_post_grades",org_level_uuid:this.list.transferred_org_level_uuid}}},created:function(){},watch:{},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.national("mrbase_sys_staffs_change_cont");case 2:this.$store.state.uuid&&(this.getDetail(),this.$route.meta.title=this.$store.state.subPage_name);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{paramsChange:function(){},changeList:function(e){e.role_uuids&&(e.role_uuids=-1!=String(e.role_uuids).indexOf(",")?String(e.role_uuids).split(","):[e.role_uuids]),this.viewList=e},getDetail:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["detailOrganizationalManagement"])({uuid:this.$store.state.uuid});case 2:t=e.sent,200==t.code&&(this.list=t.data,this.list.transferred_role_uuid=-1!=String(this.list.transferred_role_uuid).indexOf(",")?this.list.transferred_role_uuid.split(","):[this.list.transferred_role_uuid],this.list.transferred_post_grade=-1!=String(this.list.transferred_post_grade).indexOf(",")?this.list.transferred_post_grade.split(","):[this.list.transferred_post_grade]);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),success:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.list.$touch(),!this.$v.list.$error){e.next=3;break}return e.abrupt("return");case 3:this.btnIsLoading=!0,delete this.list.result_status,-1==String(this.list.Change_effective).indexOf("-")&&(this.list.Change_effective=this.$moment(this.list.Change_effective)),this.list.transferred_role_uuid&&(this.list.transferred_role_uuid=this.list.transferred_role_uuid.join()),this.list.transferred_post_grade&&(this.list.transferred_post_grade=this.list.transferred_post_grade.join()),this.$store.state.uuid?Object(a["updateOrganizationalManagement"])(this.$deletefield(null,this.list)).then((function(e){200==e.code?(t.$store.commit("newsTips",t.$t("message_The_operation_was_successful")),t.getDetail()):t.$store.commit("newsTips",t.$t("message_The_modification_failed")+e.msg),t.btnIsLoading=!1})):Object(a["addOrganizationalManagement"])(this.list).then((function(e){200==e.code?(t.$store.commit("newsTips",t.$t("message_added_successfully")),t.$router.push({name:"OrganizationalManagement"})):t.$store.commit("newsTips",e.msg),t.btnIsLoading=!1}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_cancellation_of_the_edit")}).then((function(t){e.$router.push({name:"OrganizationalManagement"})}))["catch"]((function(e){}))}},validations:{list:{staff_uuid:{required:l["required"]},Change_effective:{required:l["required"]}}}},u=o,d=r("2877"),c=Object(d["a"])(u,i,s,!1,null,"153d70c7",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-6fd30951.32970ab3.js.map