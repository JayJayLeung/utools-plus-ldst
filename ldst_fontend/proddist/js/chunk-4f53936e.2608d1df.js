(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f53936e","chunk-2d0d3a0b"],{1409:function(t,e,n){},"4a0c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["data-access-strategy"==t.$route.name?n("mrc_ess_table",{attrs:{headers:t.headers,pageName:"data-access-strategy-add",paginationOptions:t.paginationOptions,isLoading:t.loading,slotKey:["strategy_number"],items:t.desserts},on:{turnPage:t.getList},scopedSlots:t._u([{key:"item.strategy_number",fn:function(e){var a=e.item;return t._l(a.strategy_number.split(","),(function(e,a){return n("span",{key:a},[e?n("v-chip",{staticClass:"mr-2"},[t._v(t._s(e))]):t._e()],1)}))}},{key:"item.actions",fn:function(e){var a=e.item;return[n("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,a)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[n("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,3612171810)}):n("router-view")],1)},i=[],s=(n("b0c0"),n("96cf"),n("1da1")),r=n("5e27"),o={components:{},props:{},data:function(){return{desserts:[],loading:!1,paginationOptions:{pagesize:this.$store.state.pageSize,cpage:this.$store.state.cpage,totalCount:0,totalpage:0}}},validations:{},computed:{menulist:function(){return[{name:this.$t("label_View"),show:!0},{name:this.$t("label_Edit"),show:!0},{name:this.$t("label_delete"),show:!0}]},headers:function(){return[{text:this.$t("label_Stored_procedure_name"),align:"start",sortable:!1,value:"org_level_name"},{text:"",align:"start",sortable:!1,value:"strategy_number"},{text:" ",align:"start",sortable:!1,value:"actions",width:"20"}]}},created:function(){},watch:{$route:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("data-access-strategy"!=e.name){t.next=3;break}return t.next=3,this.getList(this.paginationOptions);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getList();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e&&(this.paginationOptions=e),this.loading=!0,this.desserts=[],t.next=5,Object(r["listData"])({cpage:this.paginationOptions.cpage,pagesize:this.paginationOptions.pagesize,org_level_uuid:this.$store.state.currentCompany});case 5:n=t.sent,200==n.code&&(this.desserts=n.data,this.paginationOptions.totalCount=n.totalCount,this.paginationOptions.totalpage=n.totalpage),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleClick:function(t,e){var n=this,a=t.index;0==a&&(this.$store.commit("set_subPage_name",e.org_level_name),this.$store.commit("set_uuid",e.org_level_uuid),this.$store.commit("set_iconstatus",!0),this.$router.push({name:"data-access-strategy-detail",params:{name:e.org_level_uuid,uuid:e.uuid}})),1==a&&(this.$store.commit("set_subPage_name",e.org_level_name),this.$store.commit("set_uuid",e.org_level_uuid),this.$store.commit("set_iconstatus",!1),this.$router.push({name:"data-access-strategy-detail",params:{name:e.org_level_uuid,uuid:e.uuid}})),2==a&&this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["delData"])({org_level_uuid:e.org_level_uuid});case 2:if(a=t.sent,200!=a.code){t.next=8;break}return n.$Message({text:n.$t("message_The_deletion_was_successful")}),1===n.desserts.length&&n.paginationOptions.cpage>1&&n.paginationOptions.cpage--,t.next=8,n.getList();case 8:case"end":return t.stop()}}),t,this)}))))["catch"]((function(){}))}}},u=o,c=(n("db89"),n("2877")),d=Object(c["a"])(u,a,i,!1,null,"c9168582",null);e["default"]=d.exports},"5e27":function(t,e,n){"use strict";n.r(e),n.d(e,"listData",(function(){return s})),n.d(e,"getData",(function(){return r})),n.d(e,"updateData",(function(){return o})),n.d(e,"updatebasis",(function(){return u})),n.d(e,"addData",(function(){return c})),n.d(e,"delData",(function(){return d})),n.d(e,"getTreeList",(function(){return l}));n("d3b7");var a=n("efc9"),i="mrbase_sys_data_strategy_master",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/data/permission/list-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/data/permission/find-data-permission_list/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a["default"].post("/api/data/permission/update-data-permission_details/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/data/permission/update-data-permission_basics/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/data/permission/add-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/data/permission/delete-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_modules",new Promise((function(e,n){a["default"].post("/api/data/permission/list-module-functions/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},db89:function(t,e,n){"use strict";var a=n("1409"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-4f53936e.2608d1df.js.map