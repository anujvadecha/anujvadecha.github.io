import{_ as E}from"./nuxt-link.7fd209df.js";import{b as J,k as K,w as A,r as d,e as v,f as t,t as c,p as m,u as e,F as b,l as w,m as O,v as Q,q as $,s as U,x as G,o as f}from"./entry.0327c392.js";import{u as B}from"./fetch.8e77ea55.js";const R={class:"portfolio active","data-page":"portfolio"},W={class:"h2 article-title"},X={class:"projects"},Y={class:"filter-list"},Z={class:"filter-item"},tt=["onClick"],et={class:"filter-select-box"},st={class:"select-value"},lt=t("div",{class:"select-icon"},[t("ion-icon",{name:"chevron-down"})],-1),ot={class:"select-list"},it={class:"select-item"},nt=["onClick"],at={class:"project-list"},ct=["onClick"],rt={class:"project-img"},ut=t("div",{class:"project-item-icon-box"},[t("ion-icon",{name:"eye-outline"})],-1),_t=["src","alt"],dt={class:"project-title"},vt={class:"project-category"},mt={class:"testimonials-modal block"},ft=t("ion-icon",{name:"close-outline"},null,-1),ht=[ft],pt=["src","alt"],gt={class:"modal-content space-y-3 mt-4"},kt={class:"h3 modal-title"},yt={class:"flex items-center justify-start gap-2 text-gray-500"},Ct=t("span",null,"14 June, 2021",-1),xt=["innerHTML"],Lt={__name:"portfolio",async setup(bt){let i,p;J({title:"Portfolio"});const{locale:u}=K({useScope:"global"}),{data:j}=([i,p]=A(()=>B("/api/projects","$czx70LxKTy")),i=await i,p(),i),{data:y}=([i,p]=A(()=>B("/api/categories","$UQupibDk7i")),i=await i,p(),i),D=[...j.value],_=d(0),h=d(!1),C=d("");function g(r){_.value=r,r!==0&&(C.value=y.value.find(l=>l.id===r).title),h.value=!h.value}const o=d({}),k=d(!1),x=d(!1);function H(r){o.value=j.value.find(l=>l.id===r),k.value=!0,x.value=!0}function P(){o.value={},k.value=!1,x.value=!1}return(r,l)=>{var L,N,T,F,I,M,S,V;const q=E;return f(),v("article",R,[t("header",null,[t("h2",W,c(r.$t("pageTitles.portfolio")),1)]),t("section",X,[t("ul",Y,[t("li",Z,[t("button",{class:m({active:e(_)===0}),onClick:l[0]||(l[0]=s=>g(0))}," All ",2)]),(f(!0),v(b,null,w(e(y),s=>{var n,a;return f(),v("li",{key:s.id,class:"filter-item",onClick:z=>g(s.id)},[t("button",{class:m({active:e(_)===s.id})},c(e(u)==="en"?(n=s.title)==null?void 0:n.en:(a=s.title)==null?void 0:a.tr),3)],8,tt)}),128))]),t("div",et,[t("button",{class:m([{active:e(h)},"filter-select"]),onClick:l[1]||(l[1]=s=>h.value=!e(h))},[t("div",st,c(e(_)!==0?e(u)==="en"?(L=e(C))==null?void 0:L.en:(N=e(C))==null?void 0:N.tr:"Select Category"),1),lt],2),t("ul",ot,[t("li",it,[t("button",{onClick:l[2]||(l[2]=s=>g(0))}," All ")]),(f(!0),v(b,null,w(e(y),s=>{var n,a;return f(),v("li",{key:s.id,class:"select-item"},[t("button",{onClick:z=>g(s.id)},c(e(u)==="en"?(n=s.title)==null?void 0:n.en:(a=s.title)==null?void 0:a.tr),9,nt)])}),128))])]),t("ul",at,[(f(),v(b,null,w(D,s=>{var n,a;return t("li",{key:s.id,class:m([{active:e(_)===s.category.id||e(_)===0},"project-item"])},[t("a",{class:"cursor-pointer",onClick:z=>H(s.id)},[t("figure",rt,[ut,t("img",{src:s.image,alt:s.title,loading:"lazy"},null,8,_t)]),t("h3",dt,c(s.title),1),t("p",vt,c(e(u)==="en"?(n=s.category.title)==null?void 0:n.en:(a=s.category.title)==null?void 0:a.tr),1)],8,ct)],2)}),64))]),t("div",{class:m(["modal-container",{active:e(k)}])},[O(t("div",{class:m(["overlay",{active:e(x)}])},null,2),[[Q,e(k)]]),t("section",mt,[t("button",{class:"modal-close-btn",onClick:P},ht),t("div",null,[t("figure",null,[t("img",{src:e(o).image,class:"rounded-lg",alt:e(o).title},null,8,pt)])]),t("div",gt,[t("h4",kt,c(e(o).title),1),t("small",yt,[Ct,$(" | "),t("span",null,c(e(u)==="en"?(F=(T=e(o).category)==null?void 0:T.title)==null?void 0:F.en:(M=(I=e(o).category)==null?void 0:I.title)==null?void 0:M.tr),1),$(" | "),U(q,{to:"#"},{default:G(()=>[$("View Project")]),_:1})]),t("p",{class:"text-justify",innerHTML:e(u)==="en"?(S=e(o).content)==null?void 0:S.en:(V=e(o).content)==null?void 0:V.tr},null,8,xt)])])],2)])])}}};export{Lt as default};