(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcea4"],{"2a87":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_The_name")+"*",readonly:e.disabled,isNational:e.judegNational("preferred_name"),"error-messages":e.$errors("stafflist","preferred_name",e.requiredRule)},model:{value:e.stafflist.preferred_name,callback:function(t){e.$set(e.stafflist,"preferred_name",t)},expression:"stafflist.preferred_name"}})],1),s("v-col",{attrs:{cols:"4"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Surname")+"*",readonly:e.disabled,isNational:e.judegNational("family_name"),"error-messages":e.$errors("stafflist","family_name",e.requiredRule)},model:{value:e.stafflist.family_name,callback:function(t){e.$set(e.stafflist,"family_name",t)},expression:"stafflist.family_name"}})],1),s("v-col",{attrs:{cols:"4"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Nickname"),isNational:e.judegNational("child_name"),readonly:e.disabled},model:{value:e.stafflist.child_name,callback:function(t){e.$set(e.stafflist,"child_name",t)},expression:"stafflist.child_name"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Show_the_name")+"*",isNational:e.judegNational("show_name"),"error-messages":e.$errors("stafflist","show_name",e.requiredRule),readonly:e.disabled},model:{value:e.stafflist.show_name,callback:function(t){e.$set(e.stafflist,"show_name",t)},expression:"stafflist.show_name"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_brandupload",{on:{changeimgSrc:e.changeimgSrc},model:{value:e.files2,callback:function(t){e.files2=t},expression:"files2"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Mailbox")+"*",isNational:e.judegNational("staff_email"),"error-messages":e.$errors("stafflist","staff_email",e.requiredRule.concat(e.emailRule)),readonly:e.disabled},model:{value:e.stafflist.staff_email,callback:function(t){e.$set(e.stafflist,"staff_email",t)},expression:"stafflist.staff_email"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_multiText",{attrs:{label:e.$t("label_Employee_ID")+"*",isNational:e.judegNational("staff_code"),"error-messages":e.$errors("stafflist","staff_code",e.requiredRule),readonly:e.disabled},model:{value:e.stafflist.staff_code,callback:function(t){e.$set(e.stafflist,"staff_code",t)},expression:"stafflist.staff_code"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_prompt",{attrs:{label:e.$t("label_department")+"*",errMsg:e.$errors("stafflist","dept_uuid",e.requiredRule),rules:!1,disabled:e.disabled,obj:e.companyName},model:{value:e.stafflist.dept_uuid,callback:function(t){e.$set(e.stafflist,"dept_uuid",t)},expression:"stafflist.dept_uuid"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{label:e.$t("label_Position_Title")+"*",errMsg:e.$errors("stafflist","job_post_uuid",e.requiredRule),rules:!1,disabled:e.disabled,obj:e.job_post_uuid},model:{value:e.stafflist.job_post_uuid,callback:function(t){e.$set(e.stafflist,"job_post_uuid",t)},expression:"stafflist.job_post_uuid"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_prompt",{attrs:{label:e.$t("label_Post_grades")+"*",errMsg:e.$errors("stafflist","job_post_grade_uuid",e.requiredRule),rules:!1,disabled:e.disabled,multiple:!0,obj:e.mrbase_sys_job_post_grades},model:{value:e.job_post_grade_uuid,callback:function(t){e.job_post_grade_uuid=t},expression:"job_post_grade_uuid"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("v-checkbox",{staticClass:"mx-2",attrs:{"true-value":1,"false-value":0,label:e.$t("label_The_person_in_charge_of_the_unit")},model:{value:e.stafflist.is_org_manager,callback:function(t){e.$set(e.stafflist,"is_org_manager",t)},expression:"stafflist.is_org_manager"}})],1),s("v-col",{attrs:{cols:"3"}},[s("v-checkbox",{staticClass:"mx-2",attrs:{"true-value":1,"false-value":0,label:e.$t("label_Department_head")},model:{value:e.stafflist.is_dept_manage,callback:function(t){e.$set(e.stafflist,"is_dept_manage",t)},expression:"stafflist.is_dept_manage"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_prompt",{attrs:{label:e.$t("label_Boss"),rules:!1,disabled:e.disabled,obj:e.superior},model:{value:e.stafflist.direct_leader_code,callback:function(t){e.$set(e.stafflist,"direct_leader_code",t)},expression:"stafflist.direct_leader_code"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_prompt",{attrs:{label:e.$t("label_role")+"*",rules:!1,errMsg:e.$errors("stafflist","role_uuids",e.requiredRule),multiple:"",disabled:e.disabled,obj:e.spica},model:{value:e.roleUuids,callback:function(t){e.roleUuids=t},expression:"roleUuids"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_datePicker",{attrs:{disabled:!1,errMsg:e.$errors("stafflist","first_employment_date",e.requiredRule.concat([{rule:"beforeDate",msg:"不能超过终止日期"}])),label:e.$t("label_The_date_of_entry_to_the_company")+"*"},model:{value:e.stafflist.first_employment_date,callback:function(t){e.$set(e.stafflist,"first_employment_date",t)},expression:"stafflist.first_employment_date"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_datePicker",{attrs:{disabled:!1,label:e.$t("label_The_end_date_of_the_trial_period")+"*",errMsg:e.$errors("stafflist","probation_end_date",e.requiredRule.concat([{rule:"afterDate",msg:"不能晚于开始时间"}]))},model:{value:e.stafflist.probation_end_date,callback:function(t){e.$set(e.stafflist,"probation_end_date",t)},expression:"stafflist.probation_end_date"}})],1)],1)],1),s("mrc_ess_submitBtn",{attrs:{successText:e.$t("label_The_next_step")},on:{cancel:e.cancel,success:e.success}})],1)},r=[],l=(s("a15b"),s("0d03"),s("ac1f"),s("1276"),s("96cf"),s("1da1")),i=s("b5ae"),o={components:{},props:{},data:function(){return{items:[],disabled:!1,stafflist:{job_post_uuid:"",org_level_uuid:"",show_name:"",job_post_grade_uuid:"",given_name:"",child_name:"",christian_name:"",role_uuids:"",dept_uuid:"",family_name:"",preferred_name:"",staff_email:"",is_dept_manage:0,is_org_manager:0,direct_leader_code:"",staff_image:"展示不同自己添加",staff_status:1},files:[],files2:{}}},validations:{stafflist:{preferred_name:{required:i["required"]},family_name:{required:i["required"]},child_name:{},show_name:{required:i["required"]},staff_email:{required:i["required"],email:i["email"]},staff_code:{required:i["required"]},dept_uuid:{required:i["required"]},job_post_uuid:{required:i["required"]},job_post_grade_uuid:{required:i["required"]},is_org_manager:{},is_dept_manage:{},direct_leader_code:{},role_uuids:{required:i["required"]},first_employment_date:{required:i["required"],beforeDate:function(e){if(!this.stafflist.probation_end_date)return!0;var t=new Date(e).valueOf(),s=new Date(this.stafflist.probation_end_date).valueOf();return t<s}},probation_end_date:{required:i["required"],afterDate:function(e){if(!this.stafflist.first_employment_date)return!0;var t=new Date(e).valueOf(),s=new Date(this.stafflist.first_employment_date).valueOf();return s<t}}}},created:function(){},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.national("mrbase_sys_staffs");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{changeimgSrc:function(){},cancel:function(){},success:function(){this.$v.stafflist.$touch(),this.$v.stafflist.$error||(this.stafflist.org_level_uuid=this.company_uuid,this.$emit("changee1",2,this.stafflist))}},computed:{job_post_grade_uuid:{get:function(){return this.stafflist.job_post_grade_uuid.length>0?this.stafflist.job_post_grade_uuid.length>1?this.stafflist.job_post_grade_uuid.split(","):[this.stafflist.job_post_grade_uuid]:[]},set:function(e){this.stafflist.job_post_grade_uuid=e.join()}},roleUuids:{get:function(){return this.stafflist.role_uuids.length>0?this.stafflist.role_uuids.length>1?this.stafflist.role_uuids.split(","):[this.stafflist.role_uuids]:[]},set:function(e){this.stafflist.role_uuids=e.join()}},company_uuid:function(){return this.$store.state.currentCompany},companyName:function(){return{prompt_name:"levelUuid_deptUuid",org_level_uuid:this.company_uuid}},job_post_uuid:function(){return{prompt_name:"level-dept-post",dept_uuid:this.stafflist.dept_uuid}},superior:function(){return{prompt_name:"new_boss",org_level_uuid:this.company_uuid}},spica:function(){return{prompt_name:"level-role",org_level_uuid:this.company_uuid}},mrbase_sys_job_post_grades:function(){return{prompt_name:"mrbase_sys_job_post_grades",org_level_uuid:this.company_uuid}}},watch:{}},_=o,u=s("2877"),n=Object(u["a"])(_,a,r,!1,null,"c3abdc74",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0bcea4.ffcdb5c5.js.map