(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-662517b4"],{2757:function(t,e,n){"use strict";var i=n("a88b"),s=n.n(i);s.a},"2cae":function(t,e,n){"use strict";var i=n("e2ca"),s=n.n(i);s.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),s=n("5899"),a="["+s+"]",r=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),_=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},7156:function(t,e,n){var i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,r;return s&&"function"==typeof(a=e.constructor)&&a!==n&&i(r=a.prototype)&&r!==n.prototype&&s(t,r),t}},"80dc":function(t,e,n){"use strict";var i=n("cbf7"),s=n.n(i);s.a},"92e8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience"},[n("h1",[t._v(t._s(t.$t("__workExperience")))]),n("div",{staticClass:"ex-contents"},t._l(t.companyList,(function(e,i){return n("Company",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:function(e,n){return t.visibilityChanged(e,n,i)},once:!0},expression:"{callback: (isVisible, entry) => visibilityChanged(isVisible, entry, c_index), once: true}"}],key:"company_"+i,ref:"company",refInFor:!0,attrs:{index:i,"company-name":e.companyName,"during-time":e.duringTime,title:e.title,projects:e.projects}})})),1)])},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"company company-"+t.index},[n("h2",[t._v(t._s(t.companyName))]),n("h2",[t._v(t._s(t.duringTime))]),n("h3",[t._v(t._s(t.title))]),t._l(t.projects,(function(e,i){return n("CompanyProject",{key:"project_"+i,attrs:{index:i,project:e,end:i===t.projects.length-1}})}))],2)},r=[],o=(n("a9e3"),n("b85c")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"duty-contents"},[n("div",{class:t.end?"border-block-end":"border-block"}),n("div",{staticClass:"work-project"},[n("h3",[t._v(t._s(t.project.name))]),n("ul",[t._l(t.project.desp,(function(e,i){return n("li",{key:"desp_"+i},[t._v(" "+t._s(e)+" ")])})),n("li",{directives:[{name:"show",rawName:"v-show",value:t.project.site_url,expression:"project.site_url"}]},[n("a",{attrs:{href:t.project.site_url,target:"_blank"}},[t._v(t._s(t.$t("__siteLink")))])]),n("li",{directives:[{name:"show",rawName:"v-show",value:t.project.video_url,expression:"project.video_url"}]},[n("a",{attrs:{href:t.project.video_url,target:"_blank"}},[t._v(t._s(t.$t("__cocoVideo")))])])],2)])])},c=[],l={props:{project:{type:Object,default:null},end:{type:Boolean,default:!1}}},u=l,h=(n("2757"),n("2877")),p=Object(h["a"])(u,_,c,!1,null,"2313dca3",null),d=p.exports,m={components:{CompanyProject:d},props:{index:{type:Number,default:-1},companyName:{type:String,default:""},duringTime:{type:String,default:""},title:{type:String,default:""},projects:{type:Array,default:null}},methods:{addAnimate:function(){var t=document.getElementsByClassName("company-"+this.index);if(t.length>1){var e,n=Object(o["a"])(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;i.classList.add("animate__animated","animate__fadeInLeft")}}catch(s){n.e(s)}finally{n.f()}}else t[0].classList.add("animate__animated","animate__fadeInLeft")}}},f=m,$=(n("80dc"),Object(h["a"])(f,a,r,!1,null,"2e6e004c",null)),v=$.exports,b={components:{Company:v},data:function(){return{companyList:[{companyName:this.$t("__experience")+this.$t("__three")+" "+this.$t("__solartech"),duringTime:"2019 "+this.$t("__year")+" 3 "+this.$t("__month")+" - 2020 "+this.$t("__year")+" 7 "+this.$t("__month"),title:this.$t("__frontEndSr")+"("+this.$t("__jobTitle")+")",projects:[{name:this.$t("__smzb"),desp:[this.$t("__smzbContent1"),this.$t("__smzbContent2"),this.$t("__smzbContent3")],site_url:"//smzb.cn"},{name:this.$t("__clientSite"),desp:[this.$t("__clientContent1"),this.$t("__clientContent2")],site_url:"//kl99.tv"},{name:this.$t("__navSite"),desp:[this.$t("__navContent1"),this.$t("__navContent2"),this.$t("__navContent3")],site_url:"//ggzb.io"}]},{companyName:this.$t("__experience")+this.$t("__two")+" "+this.$t("__dlink"),duringTime:"2018 "+this.$t("__year")+" 7 "+this.$t("__month")+" - 2019 "+this.$t("__year")+" 3 "+this.$t("__month"),title:this.$t("__frontEndSr"),projects:[{name:this.$t("__nuclias"),desp:[this.$t("__nuContent1"),this.$t("__nuContent2"),this.$t("__nuContent3")],site_url:""},{name:this.$t("__dnh100"),desp:[this.$t("__dnhContent1"),this.$t("__dnhContent2")],site_url:""}]},{companyName:this.$t("__experience")+this.$t("__one")+" "+this.$t("__walkgame"),duringTime:"2014 "+this.$t("__year")+" 12 "+this.$t("__month")+" - 2018 "+this.$t("__year")+" 6 "+this.$t("__month"),title:this.$t("__softEngineer"),projects:[{name:this.$t("__camerabay"),desp:[this.$t("__caContent1"),this.$t("__caContent2"),this.$t("__caContent3")],site_url:"//www.camerabay.tv/"},{name:this.$t("__camerabaySports"),desp:[this.$t("__caSportContent1")],site_url:"//sports.camerabay.tv/"},{name:this.$t("__databank"),desp:[this.$t("__dbContent1"),this.$t("__dbContent2"),this.$t("__dbContent3")],site_url:""},{name:this.$t("__streetFight"),desp:[this.$t("__stContent1")],site_url:"//www.camerabay.tv/event/cbsuperleague"},{name:this.$t("__qwalk"),desp:[this.$t("__qwalkContent1"),this.$t("__qwalkContent2")],site_url:"//www.camerabay.tv/"},{name:this.$t("__coco"),desp:[this.$t("__cocoContent1"),this.$t("__cocoContent2"),this.$t("__cocoContent3")],video_url:"//vimeo.com/245745543"}]}]}},methods:{visibilityChanged:function(t,e,n){t&&this.$refs.company[n].addAnimate()}}},y=b,C=(n("2cae"),Object(h["a"])(y,i,s,!1,null,"18c75718",null));e["default"]=C.exports},a88b:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),s=n("da84"),a=n("94ca"),r=n("6eeb"),o=n("5135"),_=n("c6b6"),c=n("7156"),l=n("c04e"),u=n("d039"),h=n("7c73"),p=n("241c").f,d=n("06cf").f,m=n("9bf2").f,f=n("58a8").trim,$="Number",v=s[$],b=v.prototype,y=_(h(b))==$,C=function(t){var e,n,i,s,a,r,o,_,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=f(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+c}for(a=c.slice(2),r=a.length,o=0;o<r;o++)if(_=a.charCodeAt(o),_<48||_>s)return NaN;return parseInt(a,i)}return+c};if(a($,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var g,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?u((function(){b.valueOf.call(n)})):_(n)!=$)?c(new v(C(e)),n,w):C(e)},N=i?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;N.length>j;j++)o(v,g=N[j])&&!o(w,g)&&m(w,g,d(v,g));w.prototype=b,b.constructor=w,r(s,$,w)}},cbf7:function(t,e,n){},e2ca:function(t,e,n){}}]);
//# sourceMappingURL=chunk-662517b4.be32ab7b.js.map