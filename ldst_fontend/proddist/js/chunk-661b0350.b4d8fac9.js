(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-661b0350"],{"0d6e":function(e,t,n){"use strict";var s=n("f020"),a=n.n(s);a.a},"8d3e":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-col",{attrs:{cols:" 12"}},[n("v-select",{attrs:{items:e.listitems,chips:"","item-text":"view_fields","item-value":"value_field",label:e.$t("label_The_default_language")+"*",readonly:e.readonly},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:e.listitems,chips:"","item-text":"view_fields","item-value":"value_field",multiple:"",label:e.$t("label_Other_languages")+"*",readonly:e.readonly},on:{change:e.change},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}})],1)],1)],1)},a=[],l=(n("99af"),n("a623"),n("d81d"),n("96cf"),n("1da1")),i=n("5530"),c=n("2909"),u=n("6924"),r={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{rules:[function(e){return!!e||"语言不能为空"}],nodorules:[function(e){return String(e).length<=200||"超过输入个数"},function(e){return!/[@#$%^&()<>?/]/.test(e)||"请勿输入非法字符"},function(e){return!/^ +| +$/g.test(e)||"不能输入空格"}],readonly:!1,select1:"",select2:[],listitems:[],ysdefault:{},otherlanguagelist:[]}},watch:{list:{handler:function(e){this.list=e,this.getlanguage(this.list)},deep:!0}},computed:{mrbase_sys_client_language:function(){var e=this;return!!this.select1&&(!!this.select2.every((function(t){return t!=e.select1}))&&(this.select1={is_default_language:1,"~table~":"mrbase_sys_client_language",client_language_code:this.select1},this.select2=this.select2.map((function(e){return{is_default_language:0,"~table~":"mrbase_sys_client_language",client_language_code:e}})),[Object(i["a"])({},this.select1)].concat(Object(c["a"])(this.select2))))}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["getBusinessList"])("client_language");case 2:t=e.sent,this.listitems=t.data,(this.$route.params.uuid||this.$store.state.detailuuid)&&(this.readonly=!0,this.list&&this.getlanguage(this.list));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{asa:function(){console.log(this.mrbase_sys_client_language)},change:function(e){},getlanguage:function(e){var t=this;this.select2=[],e.map((function(e,n){1==e.is_default_language?t.select1=e.client_language_code:t.select2.push(e.client_language_code)}))},changeis:function(e){},changeno:function(e){}}},o=r,g=(n("0d6e"),n("2877")),d=Object(g["a"])(o,s,a,!1,null,"c17596d0",null);t["default"]=d.exports},f020:function(e,t,n){}}]);
//# sourceMappingURL=chunk-661b0350.b4d8fac9.js.map