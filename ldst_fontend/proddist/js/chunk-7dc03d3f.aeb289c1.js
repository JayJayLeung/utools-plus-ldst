(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc03d3f","chunk-2d21e7e5","chunk-2d230472"],{"2f0f":function(t,e,a){},5677:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["emailtemplate"==t.$route.name?a("mrc_ess_table",{attrs:{headers:t.headers,pageName:"addemailtemplate",hideAddBtn:!t.hasBtn("add-email-template"),paginationOptions:t.options,isLoading:t.loading,slotKey:["template_name","is_used"],items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-card-title",{staticClass:"cardtitle"},[a("v-btn",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["preview-email-template"],expression:"['preview-email-template']"}],staticClass:"emailbtn text-capitalize",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(t._s(t.$t("label_Preview_the_mail_delivery_page")))])],1)]},proxy:!0},{key:"item.template_name",fn:function(e){var i=e.item;return[a("span",[t._v(t._s(t.INT(i.template_name)))])]}},{key:"item.is_used",fn:function(e){var i=e.item;return[1==i.is_used?a("v-btn",{attrs:{rounded:"",color:"#13a671",dark:"","x-small":""}},[t._v(t._s(t.$t("label_To_enable_the")))]):t._e(),0==i.is_used?a("v-btn",{attrs:{rounded:"",color:"#999999",dark:"","x-small":""}},[t._v(t._s(t.$t("label_disable")))]):t._e()]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(e){return t.handleClick(e,i)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[a("v-icon",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["view-email-template","edit-email-template","delete-email-template"],expression:"['view-email-template','edit-email-template','delete-email-template']"}]},[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,4132235503)}):a("router-view"),a("mrc_ess_myDialog",{attrs:{title:t.$t("label_Preview_the_mail_delivery_page"),width:"847",disabled:!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("img",{staticStyle:{width:"764px"},attrs:{src:t.img,alt:""}})])],1)},n=[],s=(a("b0c0"),a("96cf"),a("1da1")),l=a("d696"),o={components:{},props:{},data:function(){return{img:a("ec31"),disabled:!0,list:{},dialog:!1,options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null,selectlist:[5,10,15,20],pagetext:this.$t("label_Each_page_shows")},loading:!1,desserts:[]}},computed:{headers:function(){return[{text:this.$t("label_Template_name"),align:"start",value:"template_name",sortable:!1},{text:this.$t("label_classification"),value:"template_code",sortable:!1},{text:this.$t("label_state"),value:"is_used",sortable:!1,align:"center"},{text:"",value:"actions",sortable:!1,align:"end"}]},menulist:function(){return[{name:this.$t("label_View"),show:this.hasBtn("view-email-template")},{name:this.$t("label_Edit"),show:this.hasBtn("edit-email-template")},{name:this.$t("label_delete"),show:this.hasBtn("delete-email-template")}]}},created:function(){},watch:{$route:function(t){"/emailtemplate"==t.name&&this.getlist()}},mounted:function(){this.getlist()},beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{getlist:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,e&&(e.cpage,e.pagesize,this.options=e),t.next=5,Object(l["getemailtemplatelist"])({cpage:this.options.cpage,pagesize:this.options.pagesize});case 5:a=t.sent,200==a.code&&(this.desserts=a.data,this.options.totalCount=a.totalCount,this.options.totalpage=a.totalpage),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),turnPage:function(t){var e=t.cpage,a=t.pagesize;this.options.cpage=e,this.options.pagesize=a,this.getlist()},previewemail:function(){this.dialog=!0},addemailtemplate:function(){this.$store.commit("set_subPage_name",""),this.$store.commit("set_uuid",""),this.$store.commit("set_iconstatus",""),this.$router.push({name:"addemailtemplate"})},godetail:function(t){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_subPage_name",t.template_name),this.$store.commit("set_uuid",t.uuid),this.$router.push({name:"detailemailtemplate"})},handleClick:function(t,e){var a=this,i=t.index;switch(i){case 0:this.godetail(e);break;case 1:this.$store.commit("set_subPage_name",e.template_name),this.$store.commit("set_iconstatus",!1),this.$store.commit("set_uuid",e.uuid),this.$router.push({name:"detailemailtemplate"});break;case 2:this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(t){Object(l["deleteemailtemplate"])({uuid:e.uuid}).then((function(t){"200"===t.code&&(a.$store.commit("newsTips",a.$t("message_The_deletion_was_successful")),(a.desserts.length=1)&&a.options.cpage--,a.getlist())}))}));break}}}},r=o,m=(a("dcf1"),a("2877")),c=Object(m["a"])(r,i,n,!1,null,"73d6cc39",null);e["default"]=c.exports},d696:function(t,e,a){"use strict";a.r(e),a.d(e,"getemailtemplatelist",(function(){return s})),a.d(e,"getdetailemailtemplate",(function(){return l})),a.d(e,"addemailtemplate",(function(){return o})),a.d(e,"updateemailtemplate",(function(){return r})),a.d(e,"deleteemailtemplate",(function(){return m}));a("d3b7");var i=a("efc9"),n="mrbase_sys_mail_template",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,a){i["default"].post("/api/mailtemplate/list-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,a){i["default"].post("/api/mailtemplate/find-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,a){i["default"].post("/api/mailtemplate/add-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,a){i["default"].post("/api/mailtemplate/update-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,a){i["default"].post("/api/mailtemplate/delete-template/v1",t).then((function(t){e(t)}))["catch"]((function(t){a(t)}))}))}},dcf1:function(t,e,a){"use strict";var i=a("2f0f"),n=a.n(i);n.a},ec31:function(t,e,a){t.exports=a.p+"img/emailTemplate.9ed8a1fb.png"}}]);
//# sourceMappingURL=chunk-7dc03d3f.aeb289c1.js.map