(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74757cb6","chunk-2d0d0f26"],{"69c0":function(t,e,n){"use strict";n.r(e),n.d(e,"getStaffPropertyGroup",(function(){return r})),n.d(e,"getStaffPropertyGroupDetail",(function(){return i})),n.d(e,"getPropertyGroupDetail",(function(){return s})),n.d(e,"deleteStaffPropertyGroup",(function(){return u})),n.d(e,"updateStaffPropertyGroup",(function(){return c})),n.d(e,"addStaffPropertyGroup",(function(){return f})),n.d(e,"add_staff_manager",(function(){return d}));n("d3b7");var a=n("efc9"),o="mrbase_sys_staff_property_group",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){a["default"].post("/api/staff-property/list-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){a["default"].post("/api/staff-property/find-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_property_group_default_value",new Promise((function(e,n){a["default"].post("/api/staff-property/find-property/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){a["default"].post("/api/staff-property/delete-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){a["default"].post("/api/staff-property/update-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){a["default"].post("/api/staff-property/add-group/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(e,n){a["default"].post("/api/staff-manager/add-staff/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},cd3f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mrc_ess_iconGroup",{attrs:{is_disabled:t.$store.state.iconstatus,showReturn:!1,showEdit:t.hasBtn("edit-staff-management"),show_del:t.hasBtn("delete-staff-management")},on:{handleEdit:t.handleEdit,handleDel:t.handleDel}}),n("v-tabs",{attrs:{grow:"","background-color":"#eeeef0",color:"primary",dark:""},on:{change:t.tabchange},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab",{key:e.tab,staticStyle:{color:"black"}},[t._v(" "+t._s(e.tab)+" ")])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("staffmaterial",{attrs:{iconstatus:t.readonly}})],1),n("v-tab-item",[t._v(" tree 树 ")])],1)],1)},o=[],r=(n("96cf"),n("1da1")),i=(n("69c0"),n("b60a")),s=n("5cdb"),u={components:{staffmaterial:s["default"]},props:{},data:function(){return{tab:0,readonly:!0,list:{}}},beforeDestroy:function(){this.$store.commit("setTab","")},created:function(){},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.readonly=this.$store.state.iconstatus,this.$route.meta.title=this.$store.getters.subPage_name,this.tab=this.$store.state.tab,this.$store.commit("setTab",this.tab);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{tabchange:function(){this.$store.commit("setTab",this.tab)},handleEdit:function(){this.readonly=!this.readonly,this.$store.commit("set_iconstatus",this.readonly)},handleDel:function(){var t=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(e){Object(i["deleteStaff"])({uuid:t.$store.state.uuid}).then((function(e){200==e.code?(t.$store.commit("newsTips",t.$t("message_The_deletion_was_successful")),t.$router.push({name:"staffmanagement"})):t.$store.commit("newsTips",e.msg)}))}))}},computed:{items:function(){return[{tab:this.$t("label_Employee_profile")},{tab:"Propety"}]}},watch:{tab:function(t){console.log(t)}}},c=u,f=n("2877"),d=Object(f["a"])(c,a,o,!1,null,"0d718e4e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-74757cb6.e678851f.js.map