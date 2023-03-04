import{_ as d,o as n,c as r,a as t,t as l,n as m,b as _,d as b,r as h,F as f,e as x,f as g}from"./index-f04546d2.js";const k={props:["name","descr","max","value","last_recorded_value","max_resolve","min_resolve","visible","is_up_to_date","alignment"]},y={class:"clock-bar-title"},C={class:"clock-bar-container"},D={class:"clock-bar-left-label"},B={class:"clock-bar-outer"},w={class:"clock-bar-progress"},F={class:"clock-bar-right-label"},z={class:"clock-bar-descr"};function E(s,i,e,c,u,o){return n(),r("div",{class:b({"clock-bar":!0,"clock-bar-up-to-date":e.is_up_to_date,"clock-bar-out-of-date":!e.is_up_to_date,"clock-bar-neutral":e.alignment==="neutral","clock-bar-hostile":e.alignment==="hostile","clock-bar-friendly":e.alignment==="friendly"})},[t("div",y,[t("h4",null,l(e.visible.includes("name")?e.name:"??"),1)]),t("div",C,[t("div",D,l(e.visible.includes("min_resolve")?e.min_resolve:"??"),1),t("div",B,[e.visible.includes("progress")?(n(),r("div",{key:0,class:"clock-bar-inner",style:m({width:`${(100*(e.last_recorded_value/e.max)).toFixed(2)}%`})},null,4)):_("",!0)]),t("div",w,l(e.visible.includes("progress")?e.last_recorded_value:"??")+" / "+l(e.max),1),t("div",F,l(e.visible.includes("max_resolve")?e.max_resolve:"??"),1)]),t("div",z,l(e.visible.includes("descr")?e.descr:"??"),1)],2)}const N=d(k,[["render",E]]),S={data(){return{clocks:[],loaded:!1}},methods:{async getData(){const s=await fetch("https://x8ki-letl-twmt.n7.xano.io/api:eyXtWEG6/clocks");this.clocks=await s.json(),this.loaded=!0}},computed:{visibleClocks(){return this.clocks.filter(function(s){return s.visible&&s.visible.length>0}).sort(function(s,i){return s.is_up_to_date&&!i.is_up_to_date?-1:i.is_up_to_date&&!s.is_up_to_date||s.name>i.name?1:i.name>s.name?-1:0})}},components:{Clock:N},mounted(){this.getData()}},T=t("h2",null,"DBTD Clocks",-1),V={key:0},j=t("div",{class:"lds-roller"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")],-1),G=[j];function L(s,i,e,c,u,o){const v=h("Clock");return n(),r("main",null,[T,s.loaded?_("",!0):(n(),r("div",V,G)),(n(!0),r(f,null,x(o.visibleClocks,a=>(n(),g(v,{key:a.name,name:a.name,descr:a.descr,max:a.max,last_recorded_value:a.last_recorded_value,value:a.value,max_resolve:a.max_resolve,min_resolve:a.min_resolve,visible:a.visible,is_up_to_date:a.is_up_to_date,alignment:a.alignment},null,8,["name","descr","max","last_recorded_value","value","max_resolve","min_resolve","visible","is_up_to_date","alignment"]))),128))])}const X=d(S,[["render",L]]);export{X as default};
