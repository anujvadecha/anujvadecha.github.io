import{i as S,j as U,k as $,o as l,e as c,f as s,t as n,u as e,b as M,w as x,r as g,F as k,l as T,m as B,v as N,p as I,q as p,h as q,c as D}from"./entry.0327c392.js";import{u as L}from"./fetch.8e77ea55.js";const H={class:"service-item"},P={class:"service-icon-box"},F=["src"],O=["name"],V={class:"service-content-box"},Y={class:"h4 service-item-title"},z={class:"service-item-text"},E={__name:"ServiceItem",props:{service:Object},setup(a){S(()=>{U()});const{locale:t}=$({useScope:"global"});return(r,d)=>{var m,i;return l(),c("li",H,[s("div",P,[a.service.image!==null&&a.service.icon!==""?(l(),c("img",{key:0,src:a.service.image,alt:"mobile app icon",class:"w-40"},null,8,F)):(l(),c("ion-icon",{key:1,name:a.service.icon,class:"text-ranko-500 text-[3rem] mx-auto",style:{width:"40px"}},null,8,O))]),s("div",V,[s("h4",Y,n(a.service.title),1),s("p",z,n(e(t)==="en"?(m=a.service.description)==null?void 0:m.en:(i=a.service.description)==null?void 0:i.tr),1)])])}}},J=""+globalThis.__publicAssetsURL("images/icon-quote.svg"),W=""+globalThis.__publicAssetsURL("images/logo-1-color.png"),X=""+globalThis.__publicAssetsURL("images/logo-2-color.png"),G=""+globalThis.__publicAssetsURL("images/logo-3-color.png"),K=""+globalThis.__publicAssetsURL("images/logo-4-color.png"),Q=""+globalThis.__publicAssetsURL("images/logo-5-color.png"),Z=""+globalThis.__publicAssetsURL("images/logo-6-color.png"),ss={class:"about active","data-page":"about"},es={class:"h2 article-title"},ts=s("section",{class:"about-text"},[s("p",null,[p(" I'm a software engineer from "),s("a",{href:"https://en.wikipedia.org/wiki/New_York_(state)"},"New York,USA"),p(", currently pursuing my Masters in Computer Science at the "),s("a",{href:"https://www.buffalo.edu/"}," University at Buffalo."),p(" I enjoy solving complex problems with simple approaches. ")]),s("p",null," I am passionate about scalable architectures and distributed systems and enjoy building interesting projects. Having worked with PayU in India before pursuing my masters, I was a owner for many interesting systems including Loan Management Systems, Notification and User Management, Reconciliation and functional feature flows. My work is to build systems from scratch making sure they will be future proof and using the best design. I also freelance building algorithmic trading and fullstack web solutions to a few clients. If you are interested to hire me for your new interesting project. Please contact me. Currently I am working on a project with the University at Buffalo , SEAS to create a generic resource scheduling system which can optimize and apply to all kinds of use cases from classrooms, person-to-person meetings as well as huge movie theatres. ")],-1),is={class:"service"},os=s("h3",{class:"h3 service-title"}," What i'm doing? ",-1),as={class:"service-list"},ls={class:"testimonials"},cs=s("h3",{class:"h3 testimonials-title"}," Testimonials ",-1),ns={class:"testimonials-list has-scrollbar"},rs=["onClick"],ms={class:"content-card"},_s={class:"testimonials-avatar-box"},ds=["src"],us={class:"h4 testimonials-item-title"},hs={class:"testimonials-text"},gs={class:"testimonials-modal"},ps=s("ion-icon",{name:"close-outline"},null,-1),vs=[ps],fs={class:"flex gap-5 mb-5 justify-start items-center"},bs={class:"modal-avatar-box"},ys=["src"],ws={class:"modal-content"},xs={class:"h3 modal-title"},ks=s("time",{datetime:"2021-06-14"},"14 June, 2021",-1),Ts={class:"flex gap-5 items-start"},Is=s("img",{class:"my-auto hidden md:block",src:J,alt:"quote icon"},null,-1),Ls=["innerHTML"],Ss=s("div",{class:"mt-2 flex justify-end text-sm text-gray-600 italic"}," Company Co. ",-1),Us=q('<section class="clients"><h3 class="h3 clients-title"> Clients </h3><ul class="clients-list has-scrollbar"><li class="clients-item"><a href="#"><img src="'+W+'" alt="client logo"></a></li><li class="clients-item"><a href="#"><img src="'+X+'" alt="client logo"></a></li><li class="clients-item"><a href="#"><img src="'+G+'" alt="client logo"></a></li><li class="clients-item"><a href="#"><img src="'+K+'" alt="client logo"></a></li><li class="clients-item"><a href="#"><img src="'+Q+'" alt="client logo"></a></li><li class="clients-item"><a href="#"><img src="'+Z+'" alt="client logo"></a></li></ul></section>',1),Cs={__name:"index",async setup(a){let t,r;M({}),S(()=>{U()});const{locale:d}=$({useScope:"global"}),{data:m}=([t,r]=x(()=>L("/api/testimonials","$PslAyef5YX")),t=await t,r(),t),i=g({}),_=g(!1),u=g(!1);function A(h){i.value=m.value.find(v=>v.id===h),_.value=!0,u.value=!0}function j(){i.value={},_.value=!1,u.value=!1}const{data:C}=([t,r]=x(()=>L("/api/services","$6PO73qLRkI")),t=await t,r(),t);return(h,v)=>{var f,b;const R=E;return l(),c("article",ss,[s("header",null,[s("h2",es,n(h.$t("pageTitles.about")),1)]),ts,s("section",is,[os,s("ul",as,[(l(!0),c(k,null,T(e(C),o=>(l(),D(R,{key:o.id,service:o},null,8,["service"]))),128))])]),s("section",ls,[cs,s("ul",ns,[(l(!0),c(k,null,T(e(m),o=>{var y,w;return l(),c("li",{key:o.id,class:"testimonials-item",onClick:$s=>A(o.id)},[s("div",ms,[s("figure",_s,[s("img",{src:o.image,alt:"Daniel lewis",width:"60"},null,8,ds)]),s("h4",us,n(o.title),1),s("div",hs,[s("p",null,n(e(d)==="en"?(y=o.content)==null?void 0:y.en:(w=o.content)==null?void 0:w.tr),1)])])],8,rs)}),128))])]),s("div",{class:I(["modal-container",{active:e(_)}])},[B(s("div",{class:I(["overlay",{active:e(u)}])},null,2),[[N,e(_)]]),s("section",gs,[s("button",{class:"modal-close-btn",onClick:j},vs),s("div",fs,[s("div",bs,[s("img",{src:e(i).image,alt:"Daniel lewis",width:"80"},null,8,ys)]),s("div",ws,[s("h4",xs,n(e(i).title),1),ks])]),s("div",Ts,[Is,s("p",{class:"text-justify text-gray-400 text-sm md:text-md",innerHTML:e(d)==="en"?(f=e(i).content)==null?void 0:f.en:(b=e(i).content)==null?void 0:b.tr},null,8,Ls)]),Ss])],2),Us])}}};export{Cs as default};