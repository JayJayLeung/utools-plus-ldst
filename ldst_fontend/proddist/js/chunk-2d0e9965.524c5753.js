(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9965"],{"8dbe":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mrc_ess_iconGroup",{attrs:{is_disabled:t.readonly,showReturn:!1},on:{handleEdit:t.handleEdit,handleDel:t.handleDel}}),n("staffVariation",{attrs:{disabled:t.readonly}})],1)},o=[],a=n("b60a"),i=n("de2c0"),r={components:{staffVariation:i["default"]},props:{},data:function(){return{readonly:!1,list:{}}},computed:{},created:function(){},watch:{},mounted:function(){this.readonly=this.$store.state.iconstatus,this.$route.meta.title=this.$store.getters.subPage_name},beforeDestroy:function(){},methods:{handleEdit:function(){this.readonly=!this.readonly,this.$store.commit("set_iconstatus",this.readonly)},handleDel:function(){var t=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(e){Object(a["deleteStaffVariation"])({uuid:t.$store.state.uuid}).then((function(e){"200"===e.code&&(t.$store.commit("newsTips",t.$t("message_The_deletion_was_successful")),t.$router.push({name:"staffVariation"}))}))}))}}},d=r,u=n("2877"),c=Object(u["a"])(d,s,o,!1,null,"0e3ff97f",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e9965.524c5753.js.map