(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9c0d1c2"],{"4a69":function(e,t,s){"use strict";var a=s("eb07"),n=s.n(a);n.a},"9ed6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loginPage"},[s("v-card",{staticClass:"logo_module"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[s("mrc_ess_svgIcon",{staticStyle:{transform:"scale(14)",position:"relative",left:"102px",top:"-5px"},attrs:{"icon-class":"logoV1_ESSEnterprise_full_e_blue"}})],1),s("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-btn",e._g(e._b({attrs:{color:"#f2f2f2",rounded:"",elevation:0,"min-width":"128","min-height":"32",dark:""}},"v-btn",n,!1),a),[s("mrc_ess_svgIcon",{staticStyle:{"font-size":"23px"},attrs:{"icon-class":"outline-language-24px"}}),s("span",{staticClass:"text-capitalize",staticStyle:{"font-size":"15px",color:"#393939"}},[e._v(e._s(e.lang_name))]),s("v-icon",{staticClass:"material-icons ml-2",staticStyle:{color:"#393939"}},[e._v("arrow_drop_down")])],1)]}}])},[s("v-list",{staticStyle:{"overflow-y":"auto","max-height":"500px"},attrs:{dense:""}},e._l(e.langList,(function(t){return s("v-list-item",{key:t.value,on:{click:function(s){return e.lang_change(t)}}},[s("v-list-item-title",[e._v(e._s(t.text))])],1)})),1)],1)],1),s("v-form",{ref:"login_form",staticClass:"login_form",model:{value:e.login_form,callback:function(t){e.login_form=t},expression:"login_form"}},[s("v-text-field",{attrs:{label:e.$t("label_Company_account"),rules:e.$text_rules(e.$t("verify_Required"))},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.user_account,callback:function(t){e.user_account="string"===typeof t?t.trim():t},expression:"user_account"}}),s("v-text-field",{attrs:{label:e.$t("label_password"),type:e.type,"append-icon":e.icon,rules:e.$text_rules(e.$t("verify_Required"))},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},"click:append":e.showPassword},model:{value:e.user_pwd,callback:function(t){e.user_pwd="string"===typeof t?t.trim():t},expression:"user_pwd"}})],1),s("div",{staticClass:"actions"},[s("v-checkbox",{attrs:{color:"primary",dense:"",label:e.$t("label_Remember_that_I")},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}}),s("span",{staticClass:"ft",on:{click:e.forgetPassword}},[e._v(e._s(e.$t("label_Retrieve_password")))])],1),s("v-btn",{staticClass:"login_btn d-flex justify-center align-center",attrs:{color:"primary",loading:e.login_loading,rounded:""},on:{click:e.login}},[e._v(e._s(e.$t("label_Log_in_to")))])],1),s("div",{staticClass:"bottom"},[s("span",{staticClass:"ft2"},[e._v(e._s(e.$t("label_The_right_to_privacy")))]),s("i",[e._v("|")]),s("span",{staticClass:"ft2"},[e._v(e._s(e.$t("label_The_terms_of")))]),s("p",{staticClass:"ft3"},[e._v("Copyight 2019-2020 by xxxxxx All Rights Reserved")])])],1)},n=[],r=(s("4de4"),s("4160"),s("c975"),s("fb6a"),s("0d03"),s("b64b"),s("07ac"),s("ac1f"),s("5319"),s("159b"),s("96cf"),s("1da1")),o=s("a78e"),i=s.n(o),u=(s("af8f"),s("7213"),{components:{},props:{},data:function(){return{redirect:"",is_showPassword:!1,icon:"mdi-eye-off",type:"password",remember:!0,login_loading:!1,user_account:"",user_pwd:"",login_form:!0}},created:function(){},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,s,a,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$route.query.redirect&&(this.redirect=this.$route.query.redirect),t=i.a.get("user_account"),s=i.a.get("user_pwd"),t&&s&&(this.user_account=t,this.user_pwd=s),this.$store.dispatch("set_userData",{}),this.$store.dispatch("set_token",""),this.$store.commit("set_topcompanylist",[]),localStorage.clear(),this.$store.dispatch("resetState"),e.next=11,this.$store.dispatch("setCurrentCompanyLanguageList");case 11:return e.next=13,this.$store.dispatch("set_languageList",this.$store.state.lang);case 13:a=Object.keys(this.$store.state.languageList),n=Object.values(this.$store.state.languageList),a.forEach((function(e,t){"code"==e&&"status"==e&&"msg"==e||r.$i18n.mergeLocaleMessage(e,n[t])})),this.$store.commit("set_lang",{text:this.$store.state.currentCompanyLanguage[0].text,value:this.$store.state.currentCompanyLanguage[0].value});case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{forgetPassword:function(){var e="";e=window.location.href.indexOf("?")>0?window.location.href.slice(0,window.location.href.indexOf("?")):window.location.href,this.$router.push({path:"/forget-password",query:{login_url:e}})},lang_change:function(e){this.$store.commit("set_lang",e)},showPassword:function(){this.is_showPassword=!this.is_showPassword,this.is_showPassword?(this.icon="mdi-eye",this.type="text"):(this.icon="mdi-eye-off",this.type="password")},login:function(){var e=this,t=this.$refs.login_form.validate();if(t){var s=this.user_account.replace(/\s*/g,""),a=this.user_pwd.replace(/\s*/g,"");this.remember&&(i.a.set("user_account",s,{expires:7}),i.a.set("user_pwd",a,{expires:7})),this.login_loading=!0,this.$http.post("/login",{user_account:s,user_pwd:a,timestamp:(new Date).valueOf()}).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(s){var a,n,r,o,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("set_userData",s.data.user),e.$store.dispatch("set_token",s.data.token),e.$store.commit("set_currentCompany",s.data.user.org_level_uuid),t.next=5,e.$store.dispatch("setCurrentCompanyLanguageList");case 5:return a=e.$store.state.currentCompanyLanguage,n=a.filter((function(t){return t.value==e.login_language})),r=a.filter((function(e){return 1==e.is_default})),n.length>0?e.$store.commit("set_lang",{text:"",value:n[0].value}):e.$store.commit("set_lang",{text:r[0].text,value:r[0].value}),t.next=11,e.$store.dispatch("set_languageList",e.$store.state.lang);case 11:if(o=Object.keys(e.$store.state.languageList),i=Object.values(e.$store.state.languageList),o.forEach((function(t,s){"code"==t&&"status"==t&&"msg"==t||e.$i18n.mergeLocaleMessage(t,i[s])})),"001"==e.$store.state.userData.roles||"003"==e.$store.state.userData.roles){t.next=17;break}return t.next=17,e.$store.dispatch("set_topcompanylist");case 17:if(e.login_loading=!1,e.$store.commit("set_loginStatus",!0),e.$store.commit("setCurrentCopmpanyMenu",s.data.menusTree),u="",!(s.data.menusTree.length<=0)){t.next=24;break}return e.$store.commit("newsTips","no menu list"),t.abrupt("return");case 24:s.data.menusTree[0].url?(u=s.data.menusTree[0].url,e.$store.commit("setMenuFunctionUuid",s.data.menusTree[0].function_uuid)):s.data.menusTree[0].menusTree[0].url?(u=s.data.menusTree[0].menusTree[0].url,e.$store.commit("setMenuFunctionUuid",s.data.menusTree[0].menusTree[0].function_uuid)):(u=s.data.menusTree[0].menusTree[0].menusTree[0].url,e.$store.commit("setMenuFunctionUuid",s.data.menusTree[0].menusTree[0].menusTree[0].function_uuid)),u||(u="/dictionary"),e.$router.push({path:u});case 27:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}())["catch"]((function(t){e.login_loading=!1,console.log(t)}))}}},computed:{lang_name:function(){return this.$store.getters.lang_name},langList:function(){return this.$store.state.currentCompanyLanguage},login_language:function(){return this.$store.state.lang}},watch:{}}),c=u,l=(s("4a69"),s("2877")),d=Object(l["a"])(c,a,n,!1,null,"c5ab5732",null);t["default"]=d.exports},eb07:function(e,t,s){}}]);
//# sourceMappingURL=chunk-f9c0d1c2.1a6f548e.js.map