(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a913553","chunk-2d0ac1bd"],{"07f3":function(t,e,n){"use strict";var i=n("080a"),o=n.n(i);o.a},"080a":function(t,e,n){},"17ab":function(t,e,n){"use strict";n.r(e),n.d(e,"getserialNumberList",(function(){return s})),n.d(e,"createSerialNumber",(function(){return a})),n.d(e,"detailSerialNumber",(function(){return r})),n.d(e,"addSerialNumber",(function(){return u})),n.d(e,"updateSerialNumber",(function(){return c})),n.d(e,"deleteSerialNumber",(function(){return l}));n("d3b7");var i=n("efc9"),o="mrbase_sys_swift_config",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i["default"].post("/api/common/serialNumberAll/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i["default"].post("/api/common/createSerialNumber/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i["default"].post("/api/common/serialNumberInfo/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){i["default"].post("/api/common/addSerialNumberConfig/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){i["default"].post("/api/common/upSerialNumberConfig/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(e,n){i["default"].post("/api/common/delSerialNumberConfig/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},"5e5d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["serial-number"==t.$route.name?n("mrc_ess_table",{attrs:{headers:t.headers,pageName:"addSerialNumber",paginationOptions:t.options,isLoading:t.loading,slotKey:["org_level_uuid"],items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-card-title",{staticClass:"cardtitle",staticStyle:{height:"60px"}},[n("mrc_ess_searchInput",{staticStyle:{position:"absolute",right:"10px",top:"18px"},attrs:{isShow:!0}})],1)]},proxy:!0},{key:"item.org_level_uuid",fn:function(e){var i=e.item;return t._l(i.org_level_uuid,(function(e,i){return n("v-chip",{key:e+i},[t._v(" "+t._s(e)+" ")])}))}},{key:"item.actions",fn:function(e){var i=e.item;return[n("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,i)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[n("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,1980721161)}):n("router-view")],1)},o=[],s=(n("c975"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),a=n("17ab"),r={components:{},props:{},data:function(){return{stepIndex:1,dialog:!1,disabled:!0,list:{},options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},loading:!1,desserts:[]}},computed:{menulist:function(){return[{name:this.$t("label_View")},{name:this.$t("label_Edit")},{name:this.$t("label_delete")}]},headers:function(){return[{text:"Swift Name",align:"start",value:"swift_config_name",sortable:!1},{text:"Preview",value:"swift_config_preview",sortable:!1,align:"center"},{text:"单位",value:"org_level_uuid",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1,align:"end",width:"100"}]}},created:function(){},watch:{$route:function(t){"serial-number"==t.name&&this.getlist()}},mounted:function(){this.getlist()},beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{getlist:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,e&&(e.cpage,e.pagesize,this.options=e),t.next=5,Object(a["getserialNumberList"])({cpage:this.options.cpage,pagesize:this.options.pagesize});case 5:n=t.sent,200==n.code&&n.data.length>0&&(this.desserts=n.data.map((function(t){return-1==t.org_level_uuid.indexOf(",")?t.org_level_uuid=t.org_level_uuid.split(","):t.org_level_uuid=[t.org_level_uuid],t})),this.options.totalCount=n.totalCount,this.options.totalpage=n.totalpage),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addSerialNumber:function(){this.$store.commit("set_subPage_name",""),this.$store.commit("set_uuid",""),this.$store.commit("set_iconstatus",""),this.$router.push({name:"addSerialNumber"})},godetail:function(t){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_subPage_name",t.swift_config_name),this.$store.commit("set_uuid",t.uuid),this.$router.push({name:"detailSerialNumber"})},handleClick:function(t,e){var n=this,i=t.index;switch(i){case 0:this.godetail(e);break;case 1:this.$store.commit("set_subPage_name",e.swift_config_name),this.$store.commit("set_iconstatus",!1),this.$store.commit("set_uuid",e.uuid),this.$router.push({name:"detailSerialNumber"});break;case 2:this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(t){Object(a["deleteSerialNumber"])({uuid:e.uuid}).then((function(t){"200"===t.code&&(n.$store.commit("newsTips",n.$t("message_The_deletion_was_successful")),(n.desserts.length=1)&&n.options.cpage--,n.getlist())}))}));break}},success:function(){},cancel:function(){}}},u=r,c=(n("07f3"),n("2877")),l=Object(c["a"])(u,i,o,!1,null,"3ae09dce",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4a913553.b5cdb906.js.map