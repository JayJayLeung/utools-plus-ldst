(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ff05614","chunk-2d21083c"],{"041b":function(t,e,n){"use strict";var i=n("df40"),a=n.n(i);a.a},"6aa1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"bigBox"},["clientmanage"==t.$route.name?n("mrc_ess_table",{attrs:{addBtnList:t.golist,hideAddBtn:!t.hasBtn("add-client")&&!t.hasBtn("copy-from-exissting-client"),headers:t.headers,paginationOptions:t.options,slotKey:["name"],isLoading:t.loading,items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){},proxy:!0},{key:"item.name",fn:function(e){var i=e.item;return[n("div",[n("span",[t._v(t._s(t.INT(i.client_name)))]),n("span",{staticClass:"n1"},[t._v(t._s(i.client_short_code?"("+i.client_short_code+")":""))])])]}},{key:"item.actions",fn:function(e){var i=e.item;return[n("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,i)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[n("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,3319672364)}):t._e(),n("router-view")],1)},a=[],o=(n("b0c0"),n("96cf"),n("1da1")),s=n("b7e6"),c={data:function(){return{loading:!1,options:{pagesize:this.$store.state.pageSize,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},dialog:!1,desserts:[]}},computed:{golist:function(){return[{name:this.$t("label_A_new_user"),page_name:"addnewuser",show:this.hasBtn("add-client")},{name:this.$t("label_Add_from_existing_users"),page_name:"addcopyuser",show:this.hasBtn("copy-from-existing-client")}]},menulist:function(){return[{name:this.$t("label_View"),show:this.hasBtn("view-client")},{name:this.$t("label_Edit"),show:this.hasBtn("edit-client")},{name:this.$t("label_delete"),show:this.hasBtn("delete-client")}]},headers:function(){return[{text:this.$t("label_The_customer_name"),align:"start",sortable:!1,value:"name"},{text:"",value:"actions",sortable:!1,align:"end",width:"60"}]}},watch:{$route:function(t){"clientmanage"==this.$route.name&&this.getlist()}},created:function(){},beforeDestroy:function(){this.$store.commit("setCpage",1)},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getlist();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{godetail:function(t){this.$store.commit("set_uuid",t.role_uuid),this.$store.commit("set_detailuuid",t.uuid),this.$store.commit("set_subPage_name",t.client_name),this.$store.commit("set_iconstatus",!0),this.$router.push({name:"clientdetail",params:{name:t.client_name,uuid:t.uuid}})},editPrompt:function(t){this.$store.commit("set_uuid",t.role_uuid),this.$store.commit("set_detailuuid",t.uuid),this.$store.commit("set_subPage_name",t.client_name),this.$store.commit("set_iconstatus",!1),this.$router.push({name:"clientdetail",params:{name:t.client_name,uuid:t.uuid}})},handleClick:function(t,e){var n=t.index;switch(n){case 0:this.godetail(e);break;case 1:this.editPrompt(e);break;case 2:this.handleDel(e);break}},handleDel:function(t){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(){Object(s["edmitclientdetail"])({uuid:t.uuid}).then((function(t){1==e.desserts.length&&1!=e.options.cpage&&e.options.cpage--,e.getlist(),e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful"))}))}))["catch"]((function(){}))},getlist:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e&&(e.cpage,e.pagesize,this.options=e),t.next=4,Object(s["getclientlist"])({cpage:this.options.cpage,pagesize:this.options.pagesize});case 4:n=t.sent,"200"===n.code&&(this.desserts=n.data,this.options.totalCount=n.totalCount,this.options.totalpage=n.totalpage),this.loading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},u=c,r=(n("041b"),n("2877")),l=Object(r["a"])(u,i,a,!1,null,"ee44f938",null);e["default"]=l.exports},b7e6:function(t,e,n){"use strict";n.r(e),n.d(e,"getclientlist",(function(){return o})),n.d(e,"getclientdetail",(function(){return s})),n.d(e,"edmitclientdetail",(function(){return c})),n.d(e,"adduserclientdetail",(function(){return u})),n.d(e,"copyuserclientdetail",(function(){return r})),n.d(e,"copyadduserclientdetail",(function(){return l})),n.d(e,"updateclientdetail",(function(){return d})),n.d(e,"updatequanxian",(function(){return h})),n.d(e,"updatewhite",(function(){return f})),n.d(e,"updatelanguage",(function(){return p})),n.d(e,"getTreeList",(function(){return m}));n("d3b7");var i=n("efc9"),a="mrbase_sys_clients",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/list-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/find-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/delete-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/add-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/copy-client-info/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/copy-add-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/update-client/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/update-client-function-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/update-client-whitelist-email/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/update-client-language/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=a,new Promise((function(e,n){i["default"].post("/api/client/function-permission-info/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}},df40:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0ff05614.5c5e676c.js.map