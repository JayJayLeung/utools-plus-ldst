(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07113438","chunk-2d20fe3b"],{"825e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"pb-0"},[a("mrc_ess_switch",{attrs:{"true-value":1,"false-value":0,"true-text":t.$t("label_To_enable_the"),"false-text":t.$t("label_disable")},model:{value:t.stafflist.status,callback:function(e){t.$set(t.stafflist,"status",e)},expression:"stafflist.status"}}),3==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#a5d2e8",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Working")))]):t._e(),1==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#ffe890",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Probation_period")))]):t._e(),2==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#ffe890",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Get_ready_to_turn_right")))]):t._e(),6==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#e5c2a2",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Retired")))]):t._e(),5==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#ffddb9 ",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Prepare_to_leave")))]):t._e(),0==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#ffcff2",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Preparetojoin")))]):t._e(),7==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#e3bec8",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Retired_office")))]):t._e(),4==t.stafflist.staff_status?a("v-btn",{attrs:{rounded:"",color:"#dfdfdf",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Stop")))]):t._e()],1),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_The_name")+"*",readonly:t.disabled,isNational:t.judegNational("preferred_name"),"error-messages":t.$errors("stafflist","preferred_name",t.requiredRule.concat(t.nocharacter))},model:{value:t.stafflist.preferred_name,callback:function(e){t.$set(t.stafflist,"preferred_name",e)},expression:"stafflist.preferred_name"}})],1),a("v-col",{attrs:{cols:"4"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Surname")+"*",readonly:t.disabled,isNational:t.judegNational("family_name"),"error-messages":t.$errors("stafflist","family_name",t.requiredRule.concat(t.nocharacter))},model:{value:t.stafflist.family_name,callback:function(e){t.$set(t.stafflist,"family_name",e)},expression:"stafflist.family_name"}})],1),a("v-col",{attrs:{cols:"4"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Nickname"),isNational:t.judegNational("family_name"),readonly:t.disabled,"error-messages":t.$errors("stafflist","family_name",t.nocharacter)},model:{value:t.stafflist.child_name,callback:function(e){t.$set(t.stafflist,"child_name",e)},expression:"stafflist.child_name"}})],1),a("v-col",{attrs:{cols:"8"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Show_the_name")+"*",isNational:t.judegNational("show_name"),"error-messages":t.$errors("stafflist","show_name",t.requiredRule.concat(t.nocharacter)),readonly:t.disabled},model:{value:t.stafflist.show_name,callback:function(e){t.$set(t.stafflist,"show_name",e)},expression:"stafflist.show_name"}})],1),a("v-col",{attrs:{cols:"4"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Employee_ID")+"*",isNational:t.judegNational("tricode"),"error-messages":t.$errors("stafflist","tricode",t.requiredRule.concat(t.nocharacter)),readonly:t.disabled},model:{value:t.stafflist.tricode,callback:function(e){t.$set(t.stafflist,"tricode",e)},expression:"stafflist.tricode"}})],1),a("v-col",{attrs:{cols:"12"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Photo"),isNational:t.judegNational("staff_avatar"),readonly:t.disabled},model:{value:t.stafflist.staff_avatar,callback:function(e){t.$set(t.stafflist,"staff_avatar",e)},expression:"stafflist.staff_avatar"}})],1),a("v-col",{attrs:{cols:"12"}},[a("mrc_ess_multiText",{attrs:{label:t.$t("label_Mailbox")+"*",isNational:t.judegNational("staff_email"),"error-messages":t.$errors("stafflist","staff_email",t.requiredRule.concat(t.emailRule)),readonly:t.disabled},model:{value:t.stafflist.staff_email,callback:function(e){t.$set(t.stafflist,"staff_email",e)},expression:"stafflist.staff_email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("mrc_ess_prompt",{attrs:{label:t.$t("label_department")+"*",errMsg:t.$errors("stafflist","dept_uuid",t.requiredRule),rules:!1,disabled:t.disabled,obj:t.companyName},model:{value:t.stafflist.dept_uuid,callback:function(e){t.$set(t.stafflist,"dept_uuid",e)},expression:"stafflist.dept_uuid"}})],1),a("v-col",{attrs:{cols:"6"}},[a("mrc_ess_prompt",{attrs:{label:t.$t("label_Position_Title")+"*",errMsg:t.$errors("stafflist","job_post_uuid",t.requiredRule),rules:!1,disabled:t.disabled,obj:t.job_post_uuid},model:{value:t.stafflist.job_post_uuid,callback:function(e){t.$set(t.stafflist,"job_post_uuid",e)},expression:"stafflist.job_post_uuid"}})],1),a("v-col",{attrs:{cols:"6"}},[a("mrc_ess_prompt",{attrs:{label:t.$t("label_Post_grades")+"*",errMsg:t.$errors("stafflist","job_post_grade_uuid",t.requiredRule),rules:!1,disabled:t.disabled,multiple:!0,obj:t.mrbase_sys_job_post_grades},model:{value:t.stafflist.job_post_grade_uuid,callback:function(e){t.$set(t.stafflist,"job_post_grade_uuid",e)},expression:"stafflist.job_post_grade_uuid"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{staticClass:"mx-2",attrs:{"true-value":1,"false-value":0,color:"#ff8100",readonly:t.disabled,label:t.$t("label_The_person_in_charge_of_the_unit")},model:{value:t.stafflist.is_org_manager,callback:function(e){t.$set(t.stafflist,"is_org_manager",e)},expression:"stafflist.is_org_manager"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{staticClass:"mx-2",attrs:{"true-value":1,"false-value":0,readonly:t.disabled,color:"#ff8100",label:t.$t("label_Department_head")},model:{value:t.stafflist.is_dept_manage,callback:function(e){t.$set(t.stafflist,"is_dept_manage",e)},expression:"stafflist.is_dept_manage"}})],1),a("v-col",{attrs:{cols:"12"}},[a("mrc_ess_prompt",{attrs:{label:t.$t("label_Boss"),rules:!1,disabled:t.disabled,obj:t.superior},model:{value:t.stafflist.direct_leader_code,callback:function(e){t.$set(t.stafflist,"direct_leader_code",e)},expression:"stafflist.direct_leader_code"}})],1),a("v-col",{attrs:{cols:"12"}},[a("mrc_ess_prompt",{attrs:{label:t.$t("label_role*"),multiple:"",errMsg:t.$errors("stafflist","role_uuids",t.requiredRule),rules:!1,disabled:t.disabled,obj:t.spica},model:{value:t.stafflist.role_uuids,callback:function(e){t.$set(t.stafflist,"role_uuids",e)},expression:"stafflist.role_uuids"}})],1)],1)],1),t.disabled?t._e():a("mrc_ess_submitBtn",{attrs:{loading:t.btnIsLoading},on:{cancel:t.cancel,success:t.success}})],1)},s=[],i=(a("c975"),a("277d"),a("a15b"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),r=a("ade3"),o=a("b5ae"),f=a("b60a"),u={components:{},props:{disabled:{type:Boolean,default:!1}},data:function(){var t;return{btnIsLoading:!1,stafflist:(t={job_post_uuid:"",org_level_uuid:"",show_name:"",job_post_grade_uuid:"",given_name:"",child_name:"",christian_name:"",role_uuids:"",dept_uuid:"",family_name:"",preferred_name:"",staff_email:"",is_dept_manage:0,is_org_manager:0},Object(r["a"])(t,"is_dept_manage",0),Object(r["a"])(t,"direct_leader_code",""),Object(r["a"])(t,"staff_avatar","展示不同自己添加"),Object(r["a"])(t,"tricode",""),Object(r["a"])(t,"status",1),t),files:[]}},validations:{stafflist:{preferred_name:{required:o["required"],nocharacter:function(t){return this.$myVerify.nocharacter(t)}},family_name:{required:o["required"],nocharacter:function(t){return this.$myVerify.nocharacter(t)}},child_name:{nocharacter:function(t){return this.$myVerify.nocharacter(t)}},tricode:{required:o["required"],nocharacter:function(t){return this.$myVerify.nocharacter(t)}},show_name:{required:o["required"],nocharacter:function(t){return this.$myVerify.nocharacter(t)}},staff_email:{required:o["required"],email:o["email"]},dept_uuid:{required:o["required"]},job_post_uuid:{required:o["required"]},job_post_grade_uuid:{required:o["required"]},is_org_manager:{},is_dept_manage:{},direct_leader_code:{},role_uuids:{required:o["required"]}}},created:function(){},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.national("mrbase_sys_staffs");case 2:if(!this.$store.state.uuid){t.next=5;break}return t.next=5,this.getstaffdetail();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getstaffdetail:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.uuid,t.next=3,Object(f["getStaffMsgDetail"])({uuid:e});case 3:a=t.sent,200==a.code?(this.stafflist=a.data,this.stafflist.role_uuids=-1!=this.stafflist.role_uuids.indexOf(",")?this.stafflist.role_uuids.split(","):[this.stafflist.role_uuids],this.stafflist.job_post_grade_uuid=""===a.data.job_post_grade_uuid?[]:a.data.job_post_grade_uuid.split(",")):this.$store.commit("newsTips",a.msg);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){var t=this;this.$myConfirm({content:"确认取消编辑"}).then((function(e){t.$router.push({name:"staffmanagement"})}))["catch"]((function(t){}))},success:function(){var t=this;this.$v.stafflist.$touch(),this.$v.stafflist.$error||(this.btnIsLoading=!0,this.stafflist.org_level_uuid=this.company_uuid,this.stafflist.role_uuids=this.stafflist.role_uuids.join(),delete this.stafflist.created_by,delete this.stafflist.created_utc_datetime,delete this.stafflist.updated_by,delete this.stafflist.updated_utc_datetime,this.stafflist.is_dept_manage||(this.stafflist.is_dept_manage=0),this.stafflist.is_org_manager||(this.stafflist.is_org_manager=0),this.stafflist.is_dept_manage||(this.stafflist.is_dept_manage=0),Array.isArray(this.stafflist.job_post_grade_uuid)&&(this.stafflist.job_post_grade_uuid=this.stafflist.job_post_grade_uuid.join()),Object(f["getStaffMsgUpdate"])(this.stafflist).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("200"!==a.code){e.next=7;break}return t.$store.commit("newsTips",t.$t("message_The_operation_was_successful")),e.next=4,t.getstaffdetail();case 4:t.btnIsLoading=!1,e.next=9;break;case 7:t.$store.commit("newsTips",t.$t("message_The_modification_failed")),t.btnIsLoading=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()))}},computed:{companyName:function(){return{prompt_name:"levelUuid_deptUuid",org_level_uuid:this.company_uuid}},company_uuid:function(){return this.$store.state.currentCompany},job_post_uuid:function(){return{prompt_name:"level-dept-post",dept_uuid:this.stafflist.dept_uuid}},superior:function(){return{prompt_name:"boss",org_level_uuid:this.company_uuid,staff_uuid:this.$store.state.uuid}},spica:function(){return{prompt_name:"level-role",org_level_uuid:this.company_uuid}},mrbase_sys_job_post_grades:function(){return{prompt_name:"mrbase_sys_job_post_grades",org_level_uuid:this.company_uuid}}},watch:{}},l=u,c=a("2877"),d=Object(c["a"])(l,n,s,!1,null,"caf2c0a4",null);e["default"]=d.exports},b60a:function(t,e,a){"use strict";a.r(e),a.d(e,"freezeStaff",(function(){return r})),a.d(e,"resetPassWord",(function(){return o})),a.d(e,"deleteStaff",(function(){return f})),a.d(e,"getStaffMsgList",(function(){return u})),a.d(e,"getStaffMsgDetail",(function(){return l})),a.d(e,"getStaffMsgUpdate",(function(){return c})),a.d(e,"getStaffPersonal",(function(){return d})),a.d(e,"getStaffPersonalUpdate",(function(){return _})),a.d(e,"getStaffJobDetail",(function(){return m})),a.d(e,"getStaffJobUpdate",(function(){return p})),a.d(e,"getStaffBank",(function(){return v})),a.d(e,"getStaffBankDetail",(function(){return b})),a.d(e,"getStaffBankUpdate",(function(){return g})),a.d(e,"getStaffTelList",(function(){return y})),a.d(e,"getStaffTelUpdate",(function(){return w})),a.d(e,"getStaffAddressUpdate",(function(){return $})),a.d(e,"getStaffLeaveList",(function(){return x})),a.d(e,"addStaffLeave",(function(){return j})),a.d(e,"updateStaffLeave",(function(){return k})),a.d(e,"deleteStaffLeave",(function(){return S})),a.d(e,"detailStaffLeave",(function(){return q})),a.d(e,"getHandoverList",(function(){return R})),a.d(e,"addHandover",(function(){return L})),a.d(e,"updateHandover",(function(){return T})),a.d(e,"deleteHandover",(function(){return N})),a.d(e,"detailHandover",(function(){return O})),a.d(e,"getStaffVariationList",(function(){return E})),a.d(e,"detailStaffVariation",(function(){return M})),a.d(e,"addStaffVariation",(function(){return V})),a.d(e,"updateStaffVariation",(function(){return A})),a.d(e,"deleteStaffVariation",(function(){return U})),a.d(e,"getStaffOfficialList",(function(){return I})),a.d(e,"detailStaffOfficial",(function(){return D})),a.d(e,"addStaffOfficial",(function(){return G})),a.d(e,"updateStaffOfficial",(function(){return H})),a.d(e,"deleteStaffOfficial",(function(){return J})),a.d(e,"getStaffCompanyGroupList",(function(){return z})),a.d(e,"addCompanyGroup",(function(){return F})),a.d(e,"detailCompanyGroup",(function(){return K})),a.d(e,"deleteCompanyGroup",(function(){return Q}));a("d3b7");var n=a("efc9"),s="mrbase_sys_staffs",i="mrbase_sys_staff_personal_info",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-freezAccount/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_users",new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-resetPassWord/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-deleteStaff/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/list-staff/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/find-staff/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/update-staff/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,a){n["default"].post("/api/staff-manager/find-staffPersonal/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=s,new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(e,a){n["default"].post("/api/staff-manager/find-staffEmployment/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-employmentInfo/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},h="mrbase_sys_staff_bank_account",v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=h,new Promise((function(e,a){n["default"].post("/api/staff-manager/list-staffBank/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=h,new Promise((function(e,a){n["default"].post("/api/staff-manager/find-staffBank/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_emergency_contact_info",new Promise((function(e,a){n["default"].post("/api/staff-manager/list-staffEmergencyContact/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(e,a){n["default"].post("/api/staff-manager/staff-Liaison/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_address",new Promise((function(e,a){n["default"].post("/api/staff-manager/find-staffAddress/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},P="mrbase_sys_change_dimission",x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/list-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/update-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/delete-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/find-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/handover/list-handover/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/handover/update-handover/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/handover/delete-handover/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(e,a){n["default"].post("/api/handover/find-handover/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},C="mrbase_sys_staffs_change_cont",E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=C,new Promise((function(e,a){n["default"].post("/api/staffChange/list-change/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=C,new Promise((function(e,a){n["default"].post("/api/staffChange/find-change/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=C,new Promise((function(e,a){n["default"].post("/api/staffChange/add-change/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=C,new Promise((function(e,a){n["default"].post("/api/staffChange/update-change/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=C,new Promise((function(e,a){n["default"].post("/api/staffChange/delete-change/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},B="mrbase_sys_staff_regular_employee",I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=B,new Promise((function(e,a){n["default"].post("/api/staffRegularEmployee/list-regularEmployee/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=B,new Promise((function(e,a){n["default"].post("/api/staffRegularEmployee/find-regularEmployee/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=B,new Promise((function(e,a){n["default"].post("/api/staffRegularEmployee/add-regularEmployee/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=B,new Promise((function(e,a){n["default"].post("/api/staffRegularEmployee/update-regularEmployee/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=B,new Promise((function(e,a){n["default"].post("/api/staffRegularEmployee/delete-regularEmployee/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},W="mrbase_sys_group",z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=W,new Promise((function(e,a){n["default"].post("/api/select/list-company-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=W,new Promise((function(e,a){n["default"].post("/api/select/save-company-the-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=W,new Promise((function(e,a){n["default"].post("/api/select/get-company-group-info/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=W,new Promise((function(e,a){n["default"].post("/api/select/delete-the-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))}}}]);
//# sourceMappingURL=chunk-07113438.b853166e.js.map