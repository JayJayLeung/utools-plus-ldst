(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3584b04d"],{"72d0":function(t,e,s){},"7c0f":function(t,e,s){"use strict";var i=s("72d0"),l=s.n(i);l.a},abee:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative"}},[s("h4",{style:{color:t.labelcolor?t.$vuetify.theme.defaults.light.primary:""}},[t._v(t._s(t.headertext||t.$t("label_The_recipient")))]),s("div",{staticClass:"dvinput",style:{"border-bottom":t.labelcolor?"2px solid "+t.$vuetify.theme.defaults.light.primary:"1px solid black"}},[s("span",{staticClass:"d-flex span1"},[t._l(t.showlist,(function(e,i){return s("span",{key:i+e,staticClass:"person"},[s("v-chip",{attrs:{close:!0,disabled:t.readonly},on:{"click:close":function(s){return t.chipclose(e,i)}}},[t._v(" "+t._s(e))])],1)})),t._l(t.showpropertylist,(function(e,i){return s("span",{key:i,staticClass:"property"},[t._v(" "+t._s(e.property)+" ")])})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputvalue,expression:"inputvalue"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.inputvalue},on:{input:[function(e){e.target.composing||(t.inputvalue=e.target.value)},t.input],blur:t.blur,focus:t.focus}}),s("span",{on:{click:t.changeselect}},[s("v-icon",{staticClass:"material-icons"},[t._v("expand_more")])],1)],2)])])},l=[],a=(s("caad"),s("c975"),s("d81d"),s("a434"),s("b0c0"),s("2532"),{components:{},props:{selectlist:{type:Array},showlist:{type:Array},propertylist:{type:Array},headertext:{type:String},readonly:{type:Boolean,default:!1},iconid:{type:String,default:"meass"}},data:function(){return{labelcolor:!1,inputvalue:"",dialog:!1,tab:null,variatelist:[],showpropertylist:[],showselectlist:[]}},computed:{items:function(){return[{tab:this.$t("label_functionVar")},{tab:this.$t("label_systemVar")}]}},created:function(){},watch:{propertylist:{handler:function(t){this.showpropertylist=t,this.getvariatelist(this.showpropertylist,this.variatelist)},deep:!0}},mounted:function(){this.getvariatelist(),this.showselectlist=this.selectlist},methods:{changeselect:function(){this.$emit("changeselect")},chipclose:function(t,e){this.showlist.splice(e,1)},blur:function(t){this.labelcolor=!this.labelcolor,this.inputvalue&&!this.showlist.includes(this.inputvalue)?(this.showlist.push(this.inputvalue),this.inputvalue=""):this.inputvalue&&(this.$store.commit("newsTips",this.$t("message_Do_not_add_repeatedly")),this.inputvalue="")},input:function(){var t=this,e=[];this.inputvalue&&this.selectlist.map((function(s){-1!=s.name.indexOf(t.inputvalue)&&e.push(s)})),this.showselectlist=e},focus:function(){this.labelcolor=!this.labelcolor}}}),n=a,o=(s("7c0f"),s("2877")),r=Object(o["a"])(n,i,l,!1,null,"7dd72dc0",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-3584b04d.1cc5550a.js.map