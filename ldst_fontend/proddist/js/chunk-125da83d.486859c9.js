(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125da83d","chunk-487f9feb","chunk-d998ebe0","chunk-91125788","chunk-9dc01158","chunk-2d0d3a0b"],{"13b4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-text",{staticClass:"px-7"},[s("showDataAccessHeader",{attrs:{label:t.$t("查看岗位指定组织架构人员数据"),readonly:t.readonly},on:{add:t.add},model:{value:t.dataobj.mrbase_sys_data_strategy_specified_post_toorg_is_used,callback:function(e){t.$set(t.dataobj,"mrbase_sys_data_strategy_specified_post_toorg_is_used",e)},expression:"dataobj.mrbase_sys_data_strategy_specified_post_toorg_is_used"}}),t._l(t.list,(function(e,a){return s("dataCard",{key:e.uuid,staticClass:"mb-7",attrs:{index:a,list:e},on:{edit:t.edit,deleteItem:t.deleteItem},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_autoCompletePosition",{attrs:{label:t.$t("岗位名称"),disabled:!0,multiple:!0},model:{value:a.post_uuid,callback:function(e){t.$set(a,"post_uuid",e)},expression:"item.post_uuid"}})],1),s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_autoCompleteDepartment",{attrs:{label:t.$t("被查看组织机构"),disabled:!0,multiple:!0},model:{value:a.org_level_uuids,callback:function(e){t.$set(a,"org_level_uuids",e)},expression:"item.org_level_uuids"}})],1),s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_autoCompleteStaff",{attrs:{label:t.$t("排除人员"),disabled:!0,multiple:!0},model:{value:a.exclude_staff_ids,callback:function(e){t.$set(a,"exclude_staff_ids",e)},expression:"item.exclude_staff_ids"}})],1),s("v-col",{attrs:{cols:"12"}},[s("tree",{model:{value:a.function_uuids,callback:function(e){t.$set(a,"function_uuids",e)},expression:"item.function_uuids"}})],1)],1)]}}],null,!0)})}))],2),s("dialogModule",{attrs:{paramsData:t.currentItem},on:{getData:t.getData},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}}),t.readonly?t._e():s("mrc_ess_submitBtn",{attrs:{cancelText:t.$store.state.uuid?"取消":t.$t("label_The_previous_step")},on:{success:t.success,cancel:t.cancel}})],1)},n=[],i=(s("99af"),s("a434"),s("2909")),l=s("5530"),c=(s("96cf"),s("1da1")),r=s("6f42"),o=s("4a46"),u=s("a65d"),d=s("491c"),p=s("5e27"),f={components:{showDataAccessHeader:r["default"],dialogModule:o["default"],dataCard:u["default"],tree:d["default"]},props:{readonly:{type:Boolean,default:!1}},data:function(){return{open:!1,params:null,currentItem:{},currentIndex:{},dataobj:{mrbase_sys_data_strategy_specified_post_toorg_is_used:"0"},list:[],deleteList:[]}},validations:{},computed:{},created:function(){},watch:{},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$store.state.uuid){t.next=5;break}return t.next=3,this.getList();case 3:t.next=5;break;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$store.state.uuid){t.next=7;break}return t.next=3,Object(p["getData"])({org_level_uuid:this.$store.state.uuid,date:"mrbase_sys_data_strategy_specified_post_toorg"});case 3:e=t.sent,200==e.code&&(this.list=e.mrbase_sys_data_strategy_specified_post_toorg,this.dataobj=e.data),t.next=7;break;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),add:function(){this.currentItem=Object.assign({}),this.currentIndex=Object.assign({}),this.open=!0},getData:function(t,e){this.params=t,console.log(e),1==e?this.$set(this.list,this.currentIndex,Object.assign(this.currentItem,t)):this.list.push(t)},edit:function(t,e){console.log(t,e),this.currentItem=t,this.currentIndex=e,this.open=!0},deleteItem:function(t,e){this.currentItem=t,this.currentIndex=e,t.uuid&&this.deleteList.push(Object(l["a"])(Object(l["a"])({},t),{},{type:"del"})),this.list.splice(e,1)},success:function(){this.$store.state.uuid,this.$emit("success",[].concat(Object(i["a"])(this.list),Object(i["a"])(this.deleteList)))},cancel:function(){this.$emit("cancel")}}},m=f,h=s("2877"),_=Object(h["a"])(m,a,n,!1,null,"38af5d80",null);e["default"]=_.exports},4641:function(t,e,s){"use strict";var a=s("9617"),n=s.n(a);n.a},"491c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title"),s("v-card-text",[s("div",{staticClass:"top",style:{"max-height":t.maxHeight+"px",overflowX:"hidden"}},[s("v-treeview",{attrs:{dense:"",items:t.allList,"item-children":"sub",selectable:"","selected-color":"rgba(0, 0, 0, 0.38)","item-text":t.itemText,"item-key":t.itemKey},on:{input:t.treeInput},scopedSlots:t._u([{key:"append",fn:function(e){var a=e.item;return t._l(a.client_type_uuid,(function(t,e){return s("mrc_ess_svgIcon",{key:e,staticStyle:{"font-size":"23px"},attrs:{iconClass:t}})}))}}]),model:{value:t.selectList,callback:function(e){t.selectList=e},expression:"selectList"}})],1)])],1)},n=[],i=(s("c975"),s("a15b"),s("d81d"),s("ac1f"),s("1276"),s("4c53"),s("96cf"),s("1da1")),l=s("5e27"),c={components:{},props:{maxHeight:{type:String,default:"400"},itemText:{type:String,default:"names"},itemKey:{type:String,default:"uuid"},select:{type:String}},model:{prop:"select",event:"changeSelect"},data:function(){return{allList:[],selectList:[],open:!1}},computed:{},created:function(){},watch:{select:{handler:function(t){""==!t?-1!=t.indexOf(",")?this.selectList=t.split(","):this.selectList=[t]:this.selectList=[]},deep:!0}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getTreeList();case 2:""==!this.select&&(-1!=this.select.indexOf(",")?this.selectList=this.select.split(","):this.selectList=[this.select]);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getTreeList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(JSON.parse(localStorage.getItem("moduleTreeList"))&&JSON.parse(localStorage.getItem("moduleTreeList")).length>0)){t.next=5;break}this.allList=JSON.parse(localStorage.getItem("moduleTreeList")),this.changeType(this.allList),t.next=9;break;case 5:return t.next=7,Object(l["getTreeList"])();case 7:e=t.sent,200==e.code&&(localStorage.setItem("moduleTreeList",JSON.stringify(e.data)),this.allList=e.data,this.changeType(this.allList));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),treeInput:function(t){this.$emit("changeSelect",t.length>0?t.join():"")},changeType:function(t){var e=this;t.map((function(t){""==!t.client_type_uuid&&(-1!=t.client_type_uuid.indexOf(",")?t.client_type_uuid=t.client_type_uuid.split(","):t.client_type_uuid=[t.client_type_uuid]),t.sub&&t.sub.length>0&&e.changeType(t.sub)}))}}},r=c,o=(s("4641"),s("2877")),u=Object(o["a"])(r,a,n,!1,null,"5bbefd29",null);e["default"]=u.exports},"4a46":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mrc_ess_myDialog",{attrs:{isopen:t.isopen,width:550,title:"查看下属人员数据",disabled:!0},on:{cancel:t.cancel,success:t.success}},[s("div",{staticStyle:{"overflow-x":"hidden"}},[s("mrc_ess_switch",{attrs:{"true-value":"1","false-value":"0",readonly:t.readonly,label:this.$t("启用")},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}}),s("mrc_ess_autoCompletePosition",{attrs:{label:t.$t("岗位名称"),multiple:!0},model:{value:t.params.post_uuid,callback:function(e){t.$set(t.params,"post_uuid",e)},expression:"params.post_uuid"}}),s("mrc_ess_autoCompleteDepartment",{attrs:{label:t.$t("被查看组织机构"),multiple:!0},model:{value:t.params.org_level_uuids,callback:function(e){t.$set(t.params,"org_level_uuids",e)},expression:"params.org_level_uuids"}}),s("mrc_ess_autoCompleteStaff",{attrs:{label:t.$t("排除人员"),multiple:!0},model:{value:t.params.exclude_staff_ids,callback:function(e){t.$set(t.params,"exclude_staff_ids",e)},expression:"params.exclude_staff_ids"}}),s("tree",{model:{value:t.params.function_uuids,callback:function(e){t.$set(t.params,"function_uuids",e)},expression:"params.function_uuids"}})],1)])},n=[],i=(s("b64b"),s("b5ae")),l=s("491c"),c={components:{tree:l["default"]},props:{readonly:{type:Boolean,default:!1},isopen:{type:Boolean,default:!1},paramsData:{type:Object,default:function(){return{}}}},model:{prop:"isopen",event:"flag"},data:function(){return{params:{status:"1",post_uuid:"",high_grade_switch:"1",exclude_staff_ids:""},type:0}},validations:{params:{post_uuid:{required:i["required"]}}},computed:{},created:function(){},watch:{paramsData:function(t){Object.keys(t).length>0?this.type=1:this.type=0,this.params=this.$clone(t)}},mounted:function(){this.params=this.$clone(this.paramsData),Object.keys(this.params).length>0?this.type=1:this.type=0},methods:{cancel:function(){this.$emit("flag",!this.isopen),this.$emit("cancel")},success:function(){this.$v.params.$touch(),this.$v.params.$error||(this.$emit("getData",this.params,this.type),this.$emit("flag",!this.isopen))}}},r=c,o=s("2877"),u=Object(o["a"])(r,a,n,!1,null,"05fa57d2",null);e["default"]=u.exports},"5e27":function(t,e,s){"use strict";s.r(e),s.d(e,"listData",(function(){return i})),s.d(e,"getData",(function(){return l})),s.d(e,"updateData",(function(){return c})),s.d(e,"addData",(function(){return r})),s.d(e,"delData",(function(){return o})),s.d(e,"getTreeList",(function(){return u}));s("d3b7");var a=s("efc9"),n="mrbase_sys_data_strategy_master",i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,s){a["default"].post("/api/data/permission/list-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,s){a["default"].post("/api/data/permission/find-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,s){a["default"].post("/api/data/permission/update-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,s){a["default"].post("/api/data/permission/add-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=n,new Promise((function(e,s){a["default"].post("/api/data/permission/delete-data-permission/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_modules",new Promise((function(e,s){a["default"].post("/api/data/permission/list-module-functions/v1",t).then((function(t){e(t)}))["catch"]((function(t){s(t)}))}))}},"66d9":function(t,e,s){},"6f42":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-center justify-space-between checkBox"},[t.$store.state.uuid?[s("v-checkbox",{staticStyle:{"font-size":"20px",color:"rgba(0, 0, 0, 0.38)"},attrs:{readonly:t.readonly,"true-value":"1","false-value":"0",label:t.label},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),t.showAdd?s("v-btn",{staticClass:"d-flex justify-center align-center px-5",attrs:{rounded:"",color:"white"},on:{click:t.addNewData}},[s("span",{staticClass:"mr-1",staticStyle:{color:"#2658c7","font-size":"25px","line-height":"25px",height:"28px"}},[t._v("+")]),s("span",{staticStyle:{"font-size":"14px",color:"rgba(0, 0, 0, 0.78)"}},[t._v("新数据")])]):s("span")]:[s("mrc_ess_switch",{attrs:{"true-value":"1","false-value":"0",readonly:t.readonly,label:t.label},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),t.showAdd?s("v-btn",{staticClass:"d-flex justify-center align-center px-5",attrs:{rounded:"",color:"white"},on:{click:t.addNewData}},[s("span",{staticClass:"mr-1",staticStyle:{color:"#2658c7","font-size":"25px","line-height":"25px",height:"28px"}},[t._v("+")]),s("span",{staticStyle:{"font-size":"14px",color:"rgba(0, 0, 0, 0.78)"}},[t._v("新数据")])]):s("span")]],2)},n=[],i={components:{},props:{label:{type:String,default:"查看自己录入数据"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},checkbox:{type:String,default:"1"},showAdd:{type:Boolean,default:!0}},model:{prop:"checkbox",event:"change"},data:function(){return{num:null}},validations:{},computed:{},created:function(){},watch:{num:function(t){this.$emit("change",t)}},mounted:function(){this.num=this.checkbox},methods:{addNewData:function(){this.$emit("add")}}},l=i,c=(s("fd31"),s("2877")),r=Object(c["a"])(l,a,n,!1,null,"142a74ca",null);e["default"]=r.exports},9617:function(t,e,s){},a65d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticStyle:{border:"1px solid rgb(0,0,0,0.38)","border-radius":"8px"}},[s("v-card-text",{staticClass:"px-6"},[s("div",{staticClass:"d-flex align-center justify-space-between"},[s("v-btn",{attrs:{rounded:"",small:"",color:1==t.list[t.status]?"#18A874":"#ACACAC"}},[t._v(t._s(1==t.list[t.status]?"启用":"关闭"))]),t.readonly?s("span"):s("div",[s("v-btn",{staticClass:"mr-8",attrs:{icon:""},on:{click:t.edit}},[s("v-icon",{staticClass:"material-icons",staticStyle:{"font-size":"28px"}},[t._v("edit")])],1),s("v-btn",{attrs:{icon:""},on:{click:t.deleteItem}},[s("v-icon",{staticClass:"material-icons",staticStyle:{"font-size":"28px"}},[t._v("delete")])],1)],1)],1),s("div",[t._t("default",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("mrc_ess_autoCompletePosition",{attrs:{disabled:!0,multiple:!0},model:{value:t.list.post_uuid,callback:function(e){t.$set(t.list,"post_uuid",e)},expression:"list.post_uuid"}})],1),s("v-col",{staticClass:"mt-1",attrs:{cols:"6"}},[s("mrc_ess_multiText",{attrs:{label:t.$t("是否等级高查看等级低"),readonly:!0},model:{value:t.levle,callback:function(e){t.levle=e},expression:"levle"}})],1),s("v-col",{attrs:{cols:"12"}},[s("mrc_ess_autoCompleteStaff",{attrs:{label:t.$t("排除人员"),disabled:!0,multiple:!0},model:{value:t.list.exclude_staff_ids,callback:function(e){t.$set(t.list,"exclude_staff_ids",e)},expression:"list.exclude_staff_ids"}})],1),s("v-col",{attrs:{cols:"12"}},[s("tree",{model:{value:t.list.function_uuids,callback:function(e){t.$set(t.list,"function_uuids",e)},expression:"list.function_uuids"}})],1)],1)],{item:t.list})],2)])],1)},n=[],i=(s("a9e3"),s("491c")),l={components:{tree:i["default"]},props:{readonly:{type:Boolean,default:!0},index:{type:Number},status:{type:String,default:"status"},list:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{levle:function(){return 1==this.list.high_grade_switch?"是":"否"}},created:function(){},watch:{},mounted:function(){},methods:{edit:function(){this.$emit("edit",this.list,this.index)},deleteItem:function(){this.$emit("deleteItem",this.list,this.index)}}},c=l,r=s("2877"),o=Object(r["a"])(c,a,n,!1,null,"1579d73e",null);e["default"]=o.exports},fd31:function(t,e,s){"use strict";var a=s("66d9"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-125da83d.486859c9.js.map