(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c31bf46","chunk-2d0ac1bd"],{"17ab":function(e,t,n){"use strict";n.r(t),n.d(t,"getserialNumberList",(function(){return o})),n.d(t,"createSerialNumber",(function(){return r})),n.d(t,"detailSerialNumber",(function(){return a})),n.d(t,"addSerialNumber",(function(){return u})),n.d(t,"updateSerialNumber",(function(){return c})),n.d(t,"deleteSerialNumber",(function(){return l}));n("d3b7");var i=n("efc9"),s="mrbase_sys_swift_config",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i["default"].post("/api/common/serialNumberAll/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i["default"].post("/api/common/createSerialNumber/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i["default"].post("/api/common/serialNumberInfo/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,n){i["default"].post("/api/common/addSerialNumberConfig/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,n){i["default"].post("/api/common/upSerialNumberConfig/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["~table~"]=s,new Promise((function(t,n){i["default"].post("/api/common/delSerialNumberConfig/v1",e).then((function(e){t(e)}))["catch"]((function(e){n(e)}))}))}},"34ce":function(e,t,n){},"5e5d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["serial-number"==e.$route.name?n("mrc_ess_table",{attrs:{headers:e.headers,hideAddBtn:!e.hasBtn("add-serial-number"),pageName:"addSerialNumber",paginationOptions:e.options,isLoading:e.loading,slotKey:["org_level_uuid"],items:e.desserts},on:{turnPage:e.getlist},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-card-title",{staticClass:"cardtitle",staticStyle:{height:"60px"}},[n("mrc_ess_searchInput",{staticStyle:{position:"absolute",right:"10px",top:"18px"},attrs:{isShow:!0}})],1)]},proxy:!0},{key:"item.org_level_uuid",fn:function(t){var i=t.item;return e._l(i.org_level_uuid,(function(t,i){return n("v-chip",{key:t+i},[e._v(" "+e._s(t)+" ")])}))}},{key:"item.actions",fn:function(t){var i=t.item;return[n("menu-list",{attrs:{list:e.menulist},on:{handleClick:function(t){return e.handleClick(t,i)}},scopedSlots:e._u([{key:"showAction",fn:function(){return[n("v-icon",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["viewserial-number","edit-serial-number","delete-serial-number"],expression:"['viewserial-number',\n                              'edit-serial-number',\n                              'delete-serial-number']"}]},[e._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,455288534)}):n("router-view")],1)},s=[],o=(n("c975"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),r=n("17ab"),a={components:{},props:{},data:function(){return{stepIndex:1,dialog:!1,disabled:!0,list:{},options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},loading:!1,desserts:[]}},computed:{menulist:function(){return[{name:this.$t("label_View"),show:this.hasBtn("viewserial-number")},{name:this.$t("label_Edit"),show:this.hasBtn("edit-serial-number")},{name:this.$t("label_delete"),show:this.hasBtn("delete-serial-number")}]},headers:function(){return[{text:this.$t("label_SwiftName"),align:"start",value:"swift_config_name",sortable:!1},{text:this.$t("label_Preview"),value:"swift_config_preview",sortable:!1,align:"center"},{text:this.$t("label_company"),value:"org_level_uuid",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1,align:"end",width:"100"}]}},created:function(){},watch:{$route:function(e){"serial-number"==e.name&&this.getlist()}},mounted:function(){this.getlist()},beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{getlist:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,t&&(t.cpage,t.pagesize,this.options=t),e.next=5,Object(r["getserialNumberList"])({cpage:this.options.cpage,pagesize:this.options.pagesize});case 5:n=e.sent,200==n.code&&n.data.length>0&&(this.desserts=n.data.map((function(e){return-1==e.org_level_uuid.indexOf(",")?e.org_level_uuid=e.org_level_uuid.split(","):e.org_level_uuid=[e.org_level_uuid],e})),this.options.totalCount=n.totalCount,this.options.totalpage=n.totalpage),this.loading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addSerialNumber:function(){this.$store.commit("set_subPage_name",""),this.$store.commit("set_uuid",""),this.$store.commit("set_iconstatus",""),this.$router.push({name:"addSerialNumber"})},godetail:function(e){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_subPage_name",e.swift_config_name),this.$store.commit("set_uuid",e.uuid),this.$router.push({name:"detailSerialNumber"})},handleClick:function(e,t){var n=this,i=e.index;switch(i){case 0:this.godetail(t);break;case 1:this.$store.commit("set_subPage_name",t.swift_config_name),this.$store.commit("set_iconstatus",!1),this.$store.commit("set_uuid",t.uuid),this.$router.push({name:"detailSerialNumber"});break;case 2:this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(e){Object(r["deleteSerialNumber"])({uuid:t.uuid}).then((function(e){"200"===e.code&&(n.$store.commit("newsTips",n.$t("message_The_deletion_was_successful")),(n.desserts.length=1)&&n.options.cpage--,n.getlist())}))}));break}},success:function(){},cancel:function(){}}},u=a,c=(n("758e"),n("2877")),l=Object(c["a"])(u,i,s,!1,null,"d1e9c286",null);t["default"]=l.exports},"758e":function(e,t,n){"use strict";var i=n("34ce"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-5c31bf46.d96ca0e9.js.map