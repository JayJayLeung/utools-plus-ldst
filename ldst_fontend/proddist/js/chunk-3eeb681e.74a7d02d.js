(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eeb681e","chunk-2d0d7e27"],{"0e96":function(t,e,a){},"795d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":t.cancel},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[t._v(t._s(t.title))]),a("v-card-subtitle",[t._v(" "+t._s(t.showText)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.cancel}},[t._v(" "+t._s(t.$t("label.no"))+" ")]),a("v-btn",{attrs:{color:"green darken-1",text:"",loading:t.loading},on:{click:t.confirm}},[t._v(" "+t._s(t.$t("label.yes"))+" ")])],1)],1)],1)},i=[],s={components:{},props:{title:{type:String,default:"提示"},isOpen:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0},showText:{type:String,required:!0}},data:function(){return{loading:!1,dialog:!1}},created:function(){},mounted:function(){this.loading=this.isLoading,this.dialog=this.isOpen},methods:{confirm:function(){this.$emit("onConfirm")},cancel:function(){this.$emit("onCancel")}},computed:{},watch:{isLoading:function(t){this.loading=t},isOpen:function(t){this.dialog=t}}},o=s,r=a("2877"),l=Object(r["a"])(o,n,i,!1,null,"8bb2fffa",null);e["default"]=l.exports},c5f0:function(t,e,a){"use strict";var n=a("0e96"),i=a.n(n);i.a},d2db:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-app":"true"}},["referToList"===t.$route.name?a("div",{staticClass:"parentPage"},[a("mrc_ess_table",{attrs:{headers:t.headers,pageName:"add-reference",paginationOptions:t.params,isLoading:t.loading,items:t.desserts},on:{turnPage:t.getData},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("menu-list",{attrs:{list:t.list},on:{handleClick:function(e){return t.handleClick(e,n)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[a("v-icon",[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,1649958878)})],1):a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("router-view")],1)],1)},i=[],s=(a("99af"),a("b0c0"),a("2909")),o=a("fb42"),r=a("795d"),l={components:{confirm:r["default"]},props:{},data:function(){return{isLoading:!1,params:{"~table~":"mrbase_sys_prompt",cpage:this.$store.state.cpage,pagesize:this.$store.state.pageSize,totalCount:0,totalpage:0},desserts:[],loading:!1}},created:function(){},mounted:function(){this.getData()},methods:{getData:function(t){var e=this;t&&(this.params=t),this.loading=!0,Object(o["getList"])({cpage:this.params.cpage,pagesize:this.params.pagesize,"~table~":this.params["~table~"]}).then((function(t){e.loading=!1,e.showSkeleton=!1,e.desserts=[].concat(Object(s["a"])(t.data)),e.params.totalCount=t.totalCount,e.params.totalpage=Math.ceil(t.totalCount/t.pagesize)}))["catch"]((function(t){console.log(t)}))},handleClick:function(t,e){var a=t.index;0==a&&(this.$store.commit("set_subPage_name",e.prompt_name),this.$store.commit("set_uuid",e.uuid),this.$store.commit("set_iconstatus",!0),this.$router.push({name:"detail-reference",params:{name:e.prompt_name,uuid:e.uuid}})),1==a&&this.editPrompt(e),2==a&&this.handleDel(e)},editPrompt:function(t){this.$store.commit("set_subPage_name",t.prompt_name),this.$store.commit("set_uuid",t.uuid),this.$store.commit("set_iconstatus",!1),this.$router.push({name:"detail-reference",params:{name:t.prompt_name,uuid:t.uuid}})},handleDel:function(t){var e=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(){var a=Object.assign({},{uuid:t.uuid,"~table~":"mrbase_sys_prompt"});Object(o["getDetele"])(a).then((function(t){e.isOpen=!1,e.isLoading=!1,e.$Message({text:e.$t("info.del_success")}),1===e.desserts.length&&1!=e.params.cpage&&(e.params.cpage--,e.params.totalpage--),e.getData()}))["catch"]((function(t){console.log(t)}))}))["catch"]((function(){}))},add_prompt:function(){this.$store.commit("set_subPage_name",""),this.$store.commit("set_uuid",""),this.$router.push({name:"add_edit_advance"})}},computed:{list:function(){return[{name:this.$t("label_View")},{name:this.$t("label_Edit")},{name:this.$t("label_delete")}]},headers:function(){var t=[{text:this.$t("label_With_reference_to_the_name"),align:"start",sortable:!1,value:"prompt_name"},{text:this.$t("label_type"),align:"start",sortable:!1,width:"100px",value:"prompt_type"},{text:this.$t("label_The_source_table_name"),align:"start",sortable:!1,value:"source_table"},{text:this.$t("label_Take_the_column_value"),align:"start",sortable:!1,value:"value_field"},{text:this.$t("label_Show_columns"),align:"start",sortable:!1,value:"view_fields"},{text:"",align:"start",sortable:!1,value:"actions"}];return t}},watch:{$route:function(t){"referToList"===t.name&&(this.showSkeleton=!0,this.getData())}},beforeDestroy:function(){this.$store.commit("setCpage",1)}},c=l,u=(a("c5f0"),a("2877")),d=Object(u["a"])(c,n,i,!1,null,"7240fe4c",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3eeb681e.74a7d02d.js.map