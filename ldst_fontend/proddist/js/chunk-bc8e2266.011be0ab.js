(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc8e2266","chunk-2d20fe3b"],{"053e":function(t,n,e){"use strict";var a=e("17b2"),i=e.n(a);i.a},"17b2":function(t,n,e){},"40bc":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["staffmanagement"==t.$route.name?e("mrc_ess_table",{attrs:{headers:t.headers,paginationOptions:t.options,hideAddBtn:"",slotKey:["allstatus","name"],isLoading:t.loading,items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-card-title",{staticStyle:{height:"60px",position:"relative"}},[e("mrc_ess_searchInput",{staticStyle:{position:"absolute",right:"10px",top:"18px"},attrs:{isShow:!0}})],1)]},proxy:!0},{key:"item.name",fn:function(t){var n=t.item;return[e("mrc_ess_staffSpan",{staticClass:"mt-3 mb-3",attrs:{list:n}})]}},{key:"item.allstatus",fn:function(n){var a=n.item;return[1==a.STATUS?e("v-btn",{attrs:{rounded:"",color:"#13a671",dark:"","x-small":""}},[t._v(t._s(t.$t("label_To_enable_the")))]):t._e(),0==a.STATUS?e("v-btn",{attrs:{rounded:"",color:"#999999",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Frozen")))]):t._e(),3==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#a5d2e8",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Working")))]):t._e(),1==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#ffe890",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Probation_period")))]):t._e(),2==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#ffe890",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Get_ready_to_turn_right")))]):t._e(),6==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#e5c2a2",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Retired")))]):t._e(),5==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#ffddb9 ",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Prepare_to_leave")))]):t._e(),0==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#ffcff2",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Preparetojoin")))]):t._e(),7==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#e3bec8",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Retired_office")))]):t._e(),4==a.staff_status?e("v-btn",{attrs:{rounded:"",color:"#dfdfdf",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Stop")))]):t._e()]}},{key:"item.actions",fn:function(n){var a=n.item;return[e("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(n){return t.handleClick(n,a)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[e("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,4013494985)}):e("router-view")],1)},i=[],o=(e("b0c0"),e("96cf"),e("1da1")),s=e("b60a"),r={components:{},props:{},data:function(){return{loading:!1,options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},desserts:[]}},created:function(){},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getlist();case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{getlist:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,e=this.$store.state.currentCompany,this.loading=!0,n&&(n.cpage,n.pagesize,this.options=n),t.next=6,Object(s["getStaffMsgList"])({cpage:this.options.cpage,pagesize:this.options.pagesize,org_level_uuid:e});case 6:a=t.sent,"200"===a.code&&(this.desserts=a.data,this.options.totalCount=a.totalCount,this.options.totalpage=a.totalpage),this.loading=!1;case 9:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),godetail:function(t){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_subPage_name",(t.christian_name?t.christian_name:"")+t.show_name),this.$store.commit("set_uuid",t.uuid),this.$store.commit("set_detailuuid",t.user_id),this.$router.push({name:"detailstaffmanagement"})},handleClick:function(t,n){var e=this,a=t.index;switch(a){case 0:this.godetail(n);break;case 1:this.$store.commit("set_iconstatus",!1),this.$store.commit("set_subPage_name",(n.christian_name?n.christian_name:"")+n.show_name),this.$store.commit("set_uuid",n.uuid),this.$store.commit("set_detailuuid",n.user_id),this.$router.push({name:"detailstaffmanagement"});break;case 2:this.$myConfirm({content:this.$t("message_Confirm_that_the_password_is_reset")}).then((function(t){Object(s["resetPassWord"])({user_account:n.staff_email}).then((function(t){"200"===t.code&&(e.$store.commit("newsTips",e.$t("message_The_operation_was_successful")),e.getlist())}))}));break;case 3:this.$myConfirm({content:this.$t("message_Confirm_that_the_account_is_frozen")}).then((function(t){Object(s["freezeStaff"])({uuid:n.uuid}).then((function(t){"200"===t.code&&(e.$store.commit("newsTips",e.$t("message_The_operation_was_successful")),e.getlist())}))}));break}}},computed:{menulist:function(){return[{name:this.$t("label_View")},{name:this.$t("label_Edit")},{name:this.$t("label_To_reset_your_password")},{name:this.$t("label_Frozen_account")}]},headers:function(){return[{text:this.$t("label_Employee_name")+"、"+this.$t("label_position_office")+"、"+this.$t("label_company")+"、"+this.$t("label_department"),align:"start",value:"name",sortable:!1},{text:this.$t("label_account"),value:"staff_email",sortable:!1},{text:this.$t("label_state"),value:"allstatus",sortable:!1},{text:"",value:"actions",sortable:!1}]}},watch:{$route:function(t){"staffmanagement"==t.name&&this.getlist()}}},f=r,u=(e("053e"),e("2877")),c=Object(u["a"])(f,a,i,!1,null,"5f50d97c",null);n["default"]=c.exports},b60a:function(t,n,e){"use strict";e.r(n),e.d(n,"freezeStaff",(function(){return s})),e.d(n,"resetPassWord",(function(){return r})),e.d(n,"deleteStaff",(function(){return f})),e.d(n,"getStaffMsgList",(function(){return u})),e.d(n,"getStaffMsgDetail",(function(){return c})),e.d(n,"getStaffMsgUpdate",(function(){return l})),e.d(n,"getStaffPersonal",(function(){return d})),e.d(n,"getStaffPersonalUpdate",(function(){return h})),e.d(n,"getStaffJobDetail",(function(){return m})),e.d(n,"getStaffJobUpdate",(function(){return p})),e.d(n,"getStaffBank",(function(){return _})),e.d(n,"getStaffBankDetail",(function(){return g})),e.d(n,"getStaffBankUpdate",(function(){return b})),e.d(n,"getStaffTelList",(function(){return w})),e.d(n,"getStaffTelUpdate",(function(){return y})),e.d(n,"getStaffAddressUpdate",(function(){return P})),e.d(n,"getStaffLeaveList",(function(){return $})),e.d(n,"addStaffLeave",(function(){return k})),e.d(n,"updateStaffLeave",(function(){return x})),e.d(n,"deleteStaffLeave",(function(){return C})),e.d(n,"detailStaffLeave",(function(){return E})),e.d(n,"getHandoverList",(function(){return L})),e.d(n,"addHandover",(function(){return O})),e.d(n,"updateHandover",(function(){return R})),e.d(n,"deleteHandover",(function(){return T})),e.d(n,"detailHandover",(function(){return A})),e.d(n,"getStaffVariationList",(function(){return U})),e.d(n,"detailStaffVariation",(function(){return j})),e.d(n,"addStaffVariation",(function(){return B})),e.d(n,"updateStaffVariation",(function(){return V})),e.d(n,"deleteStaffVariation",(function(){return H})),e.d(n,"getStaffOfficialList",(function(){return J})),e.d(n,"detailStaffOfficial",(function(){return M})),e.d(n,"addStaffOfficial",(function(){return W})),e.d(n,"updateStaffOfficial",(function(){return G})),e.d(n,"deleteStaffOfficial",(function(){return F})),e.d(n,"getStaffCompanyGroupList",(function(){return K})),e.d(n,"addCompanyGroup",(function(){return q}));e("d3b7");var a=e("efc9"),i="mrbase_sys_staffs",o="mrbase_sys_staff_personal_info",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-freezAccount/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_users",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-resetPassWord/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-deleteStaff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/update-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffPersonal/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffEmployment/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-employmentInfo/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},v="mrbase_sys_staff_bank_account",_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=v,new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staffBank/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=v,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffBank/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_emergency_contact_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staffEmergencyContact/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-Liaison/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_address",new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},S="mrbase_sys_change_dimission",$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/list-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/update-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/delete-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/find-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/handover/list-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/handover/update-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/handover/delete-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=S,new Promise((function(n,e){a["default"].post("/api/handover/find-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},z="mrbase_sys_staffs_change_cont",U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=z,new Promise((function(n,e){a["default"].post("/api/staffChange/list-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=z,new Promise((function(n,e){a["default"].post("/api/staffChange/find-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=z,new Promise((function(n,e){a["default"].post("/api/staffChange/add-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=z,new Promise((function(n,e){a["default"].post("/api/staffChange/update-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=z,new Promise((function(n,e){a["default"].post("/api/staffChange/delete-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},D="mrbase_sys_staff_regular_employee",J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=D,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/list-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=D,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/find-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=D,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/add-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=D,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/update-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=D,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/delete-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},I="mrbase_sys_staff_regular_employee",K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=I,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/list-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_group",new Promise((function(n,e){a["default"].post("/select/save-company-the-group/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))}}}]);
//# sourceMappingURL=chunk-bc8e2266.011be0ab.js.map