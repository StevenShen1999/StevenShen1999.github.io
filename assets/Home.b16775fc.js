import{a as ae,d as Jt,s as pe,b as Kt,n as rt,c as be,V as Qt,B as ve,g as qe,f as ct,e as Zt}from"./VTextField.454ffff7.js";import{s as K,n as c,q as D,T as ke,a5 as Te,c as P,X as ut,l as Ve,C as en,I as ce,y as Ae,A as Oe,w as dt,B as ft,N as J,S as Se,P as C,R as M,ah as re,O as we,Q as X,ai as Ce,aj as H,p as Q,a6 as N,r as A,i as vt,z as O,ab as fe,K as Z,ak as tn,g as $e,al as Le,ag as z,am as nn,a0 as an,an as on,b as j,ao as Ue,J as ln,o as mt,a as gt,d as sn,ap as yt,F as rn,m as Ie,u as Be,H as cn,t as un,aq as me,ar as dn,v as fn,M as ht,x as vn,as as mn,U as gn}from"./index.db4b23aa.js";import{m as De,u as ee,c as pt,V as le,b as yn,d as bt,e as hn,v as pn,f as kt,g as bn,h as kn,i as St,j as Sn,w as wn,k as wt,p as Ct,L as Cn,_ as xt,x as xn,o as En,M as _n,y as Pn,l as se}from"./loader.073a3f50.js";import{c as Ne,e as Ge,R as Tn,i as Et,j as _t,m as Vn,a as Pt,d as Tt,k as Vt,l as At,b as An,g as Ot,h as On,V as G,n as $n,p as Ye,o as ge,q as ye,r as Xe,s as Je,f as Ln,v as In}from"./VAvatar.e2222e4c.js";function $t(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Bn(e){for(;e;){if(Fe(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Dn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Nn=K({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,s){var i;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),o.style.visibility="";const{x:l,y:r,sx:f,sy:d,speed:m}=Qe(e.target,o),v=ae(o,[{transform:`translate(${l}px, ${r}px) scale(${f}, ${d})`,opacity:0},{transform:""}],{duration:225*m,easing:Jt});(i=Ke(o))==null||i.forEach(g=>{ae(g,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*m,easing:pe})}),v.finished.then(()=>s())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,s){var i;await new Promise(g=>requestAnimationFrame(g));const{x:l,y:r,sx:f,sy:d,speed:m}=Qe(e.target,o);ae(o,[{transform:""},{transform:`translate(${l}px, ${r}px) scale(${f}, ${d})`,opacity:0}],{duration:125*m,easing:Kt}).finished.then(()=>s()),(i=Ke(o))==null||i.forEach(g=>{ae(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*m,easing:pe})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?c(ke,D({name:"dialog-transition"},a,{css:!1}),n):c(ke,{name:"dialog-transition"},n)}});function Ke(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Qe(e,t){const n=e.getBoundingClientRect(),a=rt(t),[o,s]=getComputedStyle(t).transformOrigin.split(" ").map(E=>parseFloat(E)),[i,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=n.left+n.width/2;i==="left"||l==="left"?r-=n.width/2:(i==="right"||l==="right")&&(r+=n.width/2);let f=n.top+n.height/2;i==="top"||l==="top"?f-=n.height/2:(i==="bottom"||l==="bottom")&&(f+=n.height/2);const d=n.width/a.width,m=n.height/a.height,v=Math.max(1,d,m),g=d/v||0,h=m/v||0,y=a.width*a.height/(window.innerWidth*window.innerHeight),b=y>.12?Math.min(1.5,(y-.12)*10+1):1;return{x:r-(o+a.left),y:f-(s+a.top),sx:g,sy:h,speed:b}}const Re=["sm","md","lg","xl","xxl"],Lt=(()=>Re.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),It=(()=>Re.reduce((e,t)=>(e["offset"+Te(t)]={type:[String,Number],default:null},e),{}))(),Bt=(()=>Re.reduce((e,t)=>(e["order"+Te(t)]={type:[String,Number],default:null},e),{}))(),Ze={col:Object.keys(Lt),offset:Object.keys(It),order:Object.keys(Bt)};function Fn(e,t,n){let a=e;if(!(n==null||n===!1)){if(t){const o=t.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const Rn=["auto","start","end","center","baseline","stretch"],te=K({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Lt,offset:{type:[String,Number],default:null},...It,order:{type:[String,Number],default:null},...Bt,alignSelf:{type:String,default:null,validator:e=>Rn.includes(e)},...De()},setup(e,t){let{slots:n}=t;const a=P(()=>{const o=[];let s;for(s in Ze)Ze[s].forEach(l=>{const r=e[l],f=Fn(s,l,r);f&&o.push(f)});const i=o.some(l=>l.startsWith("v-col-"));return o.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return ut(e.tag,{class:a.value},(o=n.default)==null?void 0:o.call(n))}}}),Mn=["sm","md","lg","xl","xxl"],Me=["start","end","center"],Dt=["space-between","space-around","space-evenly"];function je(e,t){return Mn.reduce((n,a)=>(n[e+Te(a)]=t(),n),{})}const jn=[...Me,"baseline","stretch"],Nt=e=>jn.includes(e),Ft=je("align",()=>({type:String,default:null,validator:Nt})),Hn=[...Me,...Dt],Rt=e=>Hn.includes(e),Mt=je("justify",()=>({type:String,default:null,validator:Rt})),Wn=[...Me,...Dt,"stretch"],jt=e=>Wn.includes(e),Ht=je("alignContent",()=>({type:String,default:null,validator:jt})),et={align:Object.keys(Ft),justify:Object.keys(Mt),alignContent:Object.keys(Ht)},zn={align:"align",justify:"justify",alignContent:"align-content"};function qn(e,t,n){let a=zn[e];if(n!=null){if(t){const o=t.replace(e,"");a+=`-${o}`}return a+=`-${n}`,a.toLowerCase()}}const tt=K({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Nt},...Ft,justify:{type:String,default:null,validator:Rt},...Mt,alignContent:{type:String,default:null,validator:jt},...Ht,...De()},setup(e,t){let{slots:n}=t;const a=P(()=>{const o=[];let s;for(s in et)et[s].forEach(i=>{const l=e[i],r=qn(s,i,l);r&&o.push(r)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return ut(e.tag,{class:["v-row",a.value]},(o=n.default)==null?void 0:o.call(n))}}}),Un=Ve({data(){return{topicContent:null,userId:1,submitted:!1}},methods:{closeDialog(e){this.$emit("close-dialog",e)},submitTopic(){this.submitted=!0,be.post(`${this.$hostname}/api/topics`,{userId:1,content:this.topicContent}).then(e=>{this.closeDialog(e.data)}).catch(e=>{console.log(e),this.closeDialog({status:`Failed, ${e}`})})}}});const Wt=K({name:"VCardActions",setup(e,t){let{slots:n}=t;return en({VBtn:{variant:"text"}}),ee(()=>{var a;return c("div",{class:"v-card-actions"},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),Gn=Ne("v-card-subtitle"),zt=Ne("v-card-title"),Yn=K({name:"VCardItem",props:{appendAvatar:String,appendIcon:ce,prependAvatar:String,prependIcon:ce,subtitle:String,title:String,...pt()},setup(e,t){let{slots:n}=t;return ee(()=>{var a,o,s,i,l;const r=!!(e.prependAvatar||e.prependIcon||n.prepend),f=!!(e.appendAvatar||e.appendIcon||n.append),d=!!(e.title||n.title),m=!!(e.subtitle||n.subtitle);return c("div",{class:"v-card-item"},[r&&c(le,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var v;return[c("div",{class:"v-card-item__prepend"},[(v=(a=n.prepend)==null?void 0:a.call(n))!=null?v:c(Ge,null,null)])]}}),c("div",{class:"v-card-item__content"},[d&&c(zt,{key:"title"},{default:()=>{var v;return[(v=(o=n.title)==null?void 0:o.call(n))!=null?v:e.title]}}),m&&c(Gn,{key:"subtitle"},{default:()=>{var v;return[(v=(s=n.subtitle)==null?void 0:s.call(n))!=null?v:e.subtitle]}}),(i=n.default)==null?void 0:i.call(n)]),f&&c(le,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var v;return[c("div",{class:"v-card-item__append"},[(v=(l=n.append)==null?void 0:l.call(n))!=null?v:c(Ge,null,null)])]}})])}),{}}}),xe=Ne("v-card-text"),Xn=K({name:"VCard",directives:{Ripple:Tn},props:{appendAvatar:String,appendIcon:ce,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ce,ripple:Boolean,subtitle:String,text:String,title:String,...Ae(),...yn(),...pt(),...bt(),...hn(),...pn(),...Et(),..._t(),...kt(),...Vn(),...De(),...Pt({variant:"elevated"})},setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:o}=Oe(e),{borderClasses:s}=bn(e),{colorClasses:i,colorStyles:l,variantClasses:r}=Tt(e),{densityClasses:f}=kn(e),{dimensionStyles:d}=St(e),{elevationClasses:m}=Sn(e),{loaderClasses:v}=wn(e),{locationStyles:g}=Vt(e),{positionClasses:h}=At(e),{roundedClasses:y}=wt(e),b=An(e,n),E=P(()=>e.link!==!1&&b.isLink.value),w=P(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return ee(()=>{var u,$,L;const F=E.value?"a":e.tag,W=!!(a.title||e.title),q=!!(a.subtitle||e.subtitle),U=W||q,I=!!(a.append||e.appendAvatar||e.appendIcon),_=!!(a.prepend||e.prependAvatar||e.prependIcon),x=!!(a.image||e.image),p=U||_||I,k=!!(a.text||e.text);return dt(c(F,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":w.value},o.value,s.value,i.value,f.value,m.value,v.value,h.value,y.value,r.value],style:[l.value,d.value,g.value],href:b.href.value,onClick:w.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[x&&c(le,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var T;return[c("div",{class:"v-card__image"},[(T=(u=a.image)==null?void 0:u.call(a))!=null?T:c(Ct,null,null)])]}}),c(Cn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),p&&c(Yn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),k&&c(xe,{key:"text"},{default:()=>{var T;return[(T=($=a.text)==null?void 0:$.call(a))!=null?T:e.text]}}),(L=a.default)==null?void 0:L.call(a),a.actions&&c(Wt,null,{default:a.actions}),Ot(w.value,"v-card")]}),[[ft("ripple"),w.value]])}),{}}}),Jn={class:"text-center"};function Kn(e,t,n,a,o,s){return J(),Se(Xn,null,{default:C(()=>[c(zt,{class:"text-h5"},{default:C(()=>[M(re(e.submitted?"Please Standby":"Create Topic"),1)]),_:1}),e.submitted?Ce("",!0):(J(),we("form",{key:0,onSubmit:t[1]||(t[1]=X((...i)=>e.submitTopic&&e.submitTopic(...i),["prevent"]))},[c(xe,null,{default:C(()=>[c(Qt,{modelValue:e.topicContent,"onUpdate:modelValue":t[0]||(t[0]=i=>e.topicContent=i),label:"New Topic",required:""},null,8,["modelValue"])]),_:1}),c(Wt,null,{default:C(()=>[c(On),c(G,{color:"red darken-1",text:"",onClick:X(e.closeDialog,["stop"])},{default:C(()=>[M(" Cancel ")]),_:1},8,["onClick"]),c(G,{color:"green darken-1",text:"",variant:"flat",type:"submit"},{default:C(()=>[M(" Submit ")]),_:1})]),_:1})],32)),e.submitted?(J(),Se(xe,{key:1},{default:C(()=>[H("div",Jn,[c($n,{color:"purple",indeterminate:"",center:""})])]),_:1})):Ce("",!0)]),_:1})}const Qn=xt(Un,[["render",Kn]]),Zn=Ve({data(){return{createTopic:!1,snackbar:!1,errorMessage:null,retrievedTopic:null}},methods:{handleCreation(e){if(this.errorMessage=null,this.createTopic=!1,e.status)this.errorMessage=e.status;else if(e.ID)console.log("Success!");else return;this.snackbar=!0},convertTime(e){let t=e.split("T"),n=t[0],a=t[1].split("."),o=t[1].split("+");return n+" "+a[0]+"+"+o[1]},retrieveTopic(e=!0){let t=`${this.$hostname}/api/topics/`;e?t+="first":t+="random",be.get(t).then(n=>{this.retrievedTopic=n.data,console.log(this.retrievedTopic)}).catch(n=>{console.log(n)})},deleteTopic(){be.delete(`${this.$hostname}/api/topics/${this.retrievedTopic.ID}`).then(e=>{this.retrievedTopic=null}).catch(e=>{console.log(e)})}},components:{CreateTopic:Qn}}),ea="/assets/polite.4609c368.svg";const ta=Q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function na(e,t){const n={},a=o=>()=>{if(!N)return Promise.resolve(!0);const s=o==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{var r;const l=parseInt((r=e[o])!=null?r:0,10);n[o]=window.setTimeout(()=>{t==null||t(s),i(s)},l)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const aa=Symbol.for("vuetify:v-menu"),oa=Q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ta()},"v-overlay-activator");function la(e,t){let{isActive:n,isTop:a}=t;const o=A();let s=!1,i=!1,l=!0;const r=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:d,runCloseDelay:m}=na(e,u=>{u===(e.openOnHover&&s||r.value&&i)&&!(e.openOnHover&&n.value&&!a.value)&&(n.value!==u&&(l=!0),n.value=u)}),v={click:u=>{u.stopPropagation(),o.value=u.currentTarget||u.target,n.value=!n.value},mouseenter:u=>{s=!0,o.value=u.currentTarget||u.target,d()},mouseleave:u=>{s=!1,m()},focus:u=>{nn&&!u.target.matches(":focus-visible")||(i=!0,u.stopPropagation(),o.value=u.currentTarget||u.target,d())},blur:u=>{i=!1,u.stopPropagation(),m()}},g=P(()=>{const u={};return f.value&&(u.click=v.click),e.openOnHover&&(u.mouseenter=v.mouseenter,u.mouseleave=v.mouseleave),r.value&&(u.focus=v.focus,u.blur=v.blur),u}),h=P(()=>{const u={};if(e.openOnHover&&(u.mouseenter=()=>{s=!0,d()},u.mouseleave=()=>{s=!1,m()}),e.closeOnContentClick){const $=vt(aa,null);u.click=()=>{n.value=!1,$==null||$.closeParents()}}return u}),y=P(()=>{const u={};return e.openOnHover&&(u.mouseenter=()=>{l&&(s=!0,l=!1,d())},u.mouseleave=()=>{s=!1,m()}),u});O(a,u=>{u&&(e.openOnHover&&!s&&(!r.value||!i)||r.value&&!i&&(!e.openOnHover||!s))&&(n.value=!1)});const b=A();fe(()=>{!b.value||Z(()=>{const u=b.value;o.value=tn(u)?u.$el:u})});const E=$e("useActivator");let w;return O(()=>!!e.activator,u=>{u&&N?(w=Le(),w.run(()=>{ia(e,E,{activatorEl:o,activatorEvents:g})})):w&&w.stop()},{flush:"post",immediate:!0}),z(()=>{var u;(u=w)==null||u.stop()}),{activatorEl:o,activatorRef:b,activatorEvents:g,contentEvents:h,scrimEvents:y}}function ia(e,t,n){let{activatorEl:a,activatorEvents:o}=n;O(()=>e.activator,(r,f)=>{if(f&&r!==f){const d=l(f);d&&i(d)}r&&Z(()=>s())},{immediate:!0}),O(()=>e.activatorProps,()=>{s()}),z(()=>{i()});function s(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!r||(Object.entries(o.value).forEach(d=>{let[m,v]=d;r.addEventListener(m,v)}),Object.keys(f).forEach(d=>{f[d]==null?r.removeAttribute(d):r.setAttribute(d,f[d])}))}function i(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!r||(Object.entries(o.value).forEach(d=>{let[m,v]=d;r.removeEventListener(m,v)}),Object.keys(f).forEach(d=>{r.removeAttribute(d)}))}function l(){var r;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(f)if(f==="parent"){var m,v;let g=t==null||(m=t.proxy)==null||(v=m.$el)==null?void 0:v.parentNode;for(;g.hasAttribute("data-no-activator");)g=g.parentNode;d=g}else typeof f=="string"?d=document.querySelector(f):"$el"in f?d=f.$el:d=f;return a.value=((r=d)==null?void 0:r.nodeType)===Node.ELEMENT_NODE?d:null,a.value}}const sa=Q({eager:Boolean},"lazy");function ra(e,t){const n=A(!1),a=P(()=>n.value||e.eager||t.value);O(t,()=>n.value=!0);function o(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:a,onAfterLeave:o}}function he(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ca(e,t){return{x:e.x-t.x,y:e.y-t.y}}function nt(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:a}=e,o=a==="left"?0:a==="center"?t.width/2:a==="right"?t.width:a,s=n==="top"?0:n==="bottom"?t.height:n;return he({x:o,y:s},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:a}=e,o=n==="left"?0:n==="right"?t.width:n,s=a==="top"?0:a==="center"?t.height/2:a==="bottom"?t.height:a;return he({x:o,y:s},t)}return he({x:t.width/2,y:t.height/2},t)}const qt={static:fa,connected:ma},ua=Q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function da(e,t){const n=A({}),a=A();let o;fe(async()=>{var i;(i=o)==null||i.stop(),a.value=void 0,N&&t.isActive.value&&e.locationStrategy&&(o=Le(),e.locationStrategy!=="connected"&&await Z(),o.run(()=>{if(typeof e.locationStrategy=="function"){var l;a.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var r;a.value=(r=qt[e.locationStrategy](t,e,n))==null?void 0:r.updateLocation}}))}),N&&window.addEventListener("resize",s,{passive:!0}),z(()=>{var i;N&&window.removeEventListener("resize",s),a.value=void 0,(i=o)==null||i.stop()});function s(i){var l;(l=a.value)==null||l.call(a,i)}return{contentStyles:n,updateLocation:a}}function fa(){}function va(e){const t=rt(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function ma(e,t,n){const a=Dn(e.activatorEl.value);a&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:o,preferredOrigin:s}=an(()=>{const h=Ye(t.location,e.isRtl.value),y=t.origin==="overlap"?h:t.origin==="auto"?ge(h):Ye(t.origin,e.isRtl.value);return h.side===y.side&&h.align===ye(y).align?{preferredAnchor:Xe(h),preferredOrigin:Xe(y)}:{preferredAnchor:h,preferredOrigin:y}}),[i,l,r,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>P(()=>{const y=parseFloat(t[h]);return isNaN(y)?1/0:y})),d=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const h=t.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let m=!1;const v=new ResizeObserver(()=>{m&&g()});O([e.activatorEl,e.contentEl],(h,y)=>{let[b,E]=h,[w,u]=y;w&&v.unobserve(w),b&&v.observe(b),u&&v.unobserve(u),E&&v.observe(E)},{immediate:!0}),z(()=>{v.disconnect()});function g(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),y=va(e.contentEl.value),b=ue(e.contentEl.value),E=12;b.length||(b.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(y.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),y.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=b.reduce((_,x)=>{const p=x.getBoundingClientRect(),k=new ve({x:x===document.documentElement?0:p.x,y:x===document.documentElement?0:p.y,width:x.clientWidth,height:x.clientHeight});return _?new ve({x:Math.max(_.left,k.left),y:Math.max(_.top,k.top),width:Math.min(_.right,k.right)-Math.max(_.left,k.left),height:Math.min(_.bottom,k.bottom)-Math.max(_.top,k.top)}):k},void 0);w.x+=E,w.y+=E,w.width-=E*2,w.height-=E*2;let u={anchor:o.value,origin:s.value};function $(_){const x=new ve(y),p=nt(_.anchor,h),k=nt(_.origin,x);let{x:T,y:B}=ca(p,k);switch(_.anchor.side){case"top":B-=d.value[0];break;case"bottom":B+=d.value[0];break;case"left":T-=d.value[0];break;case"right":T+=d.value[0];break}switch(_.anchor.align){case"top":B-=d.value[1];break;case"bottom":B+=d.value[1];break;case"left":T-=d.value[1];break;case"right":T+=d.value[1];break}return x.x+=T,x.y+=B,x.width=Math.min(x.width,r.value),x.height=Math.min(x.height,f.value),{overflows:qe(x,w),x:T,y:B}}let L=0,F=0;const W={x:0,y:0},q={x:!1,y:!1};let U=-1;for(;;){if(U++>10){on("Infinite loop detected in connectedLocationStrategy");break}const{x:_,y:x,overflows:p}=$(u);L+=_,F+=x,y.x+=_,y.y+=x;{const k=Je(u.anchor),T=p.x.before||p.x.after,B=p.y.before||p.y.after;let Y=!1;if(["x","y"].forEach(V=>{if(V==="x"&&T&&!q.x||V==="y"&&B&&!q.y){const S={anchor:{...u.anchor},origin:{...u.origin}},R=V==="x"?k==="y"?ye:ge:k==="y"?ge:ye;S.anchor=R(S.anchor),S.origin=R(S.origin);const{overflows:ie}=$(S);(ie[V].before<=p[V].before&&ie[V].after<=p[V].after||ie[V].before+ie[V].after<(p[V].before+p[V].after)/2)&&(u=S,Y=q[V]=!0)}}),Y)continue}p.x.before&&(L+=p.x.before,y.x+=p.x.before),p.x.after&&(L-=p.x.after,y.x-=p.x.after),p.y.before&&(F+=p.y.before,y.y+=p.y.before),p.y.after&&(F-=p.y.after,y.y-=p.y.after);{const k=qe(y,w);W.x=w.width-k.x.before-k.x.after,W.y=w.height-k.y.before-k.y.after,L+=k.x.before,y.x+=k.x.before,F+=k.y.before,y.y+=k.y.before}break}const I=Je(u.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${u.anchor.side} ${u.anchor.align}`,transformOrigin:`${u.origin.side} ${u.origin.align}`,top:j(at(F)),left:j(at(L)),minWidth:j(I==="y"?Math.min(i.value,h.width):i.value),maxWidth:j(ot(Ue(W.x,i.value===1/0?0:i.value,r.value))),maxHeight:j(ot(Ue(W.y,l.value===1/0?0:l.value,f.value)))})}return O(()=>[o.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>g(),{immediate:!a}),a&&Z(()=>g()),requestAnimationFrame(()=>{n.value.maxHeight&&g()}),{updateLocation:g}}function at(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ot(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const de=[];function ga(e){!Ee||de.length?(de.push(e),_e()):(Ee=!1,e(),_e())}let lt=-1;function _e(){cancelAnimationFrame(lt),lt=requestAnimationFrame(()=>{const e=de.shift();e&&e(),de.length?_e():Ee=!0})}const Pe={none:null,close:pa,block:ba,reposition:ka},ya=Q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Pe}},"v-overlay-scroll-strategies");function ha(e,t){if(!N)return;let n;fe(async()=>{var a;(a=n)==null||a.stop(),t.isActive.value&&e.scrollStrategy&&(n=Le(),await Z(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var o;(o=Pe[e.scrollStrategy])==null||o.call(Pe,t,e)}}))}),z(()=>{var a;(a=n)==null||a.stop()})}function pa(e){var n;function t(a){e.isActive.value=!1}Ut((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function ba(e,t){var n;const a=(n=e.root.value)==null?void 0:n.offsetParent,o=[...new Set([...ue(e.activatorEl.value,t.contained?a:void 0),...ue(e.contentEl.value,t.contained?a:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,i=(l=>Fe(l)&&l)(a||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,r)=>{l.style.setProperty("--v-body-scroll-x",j(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",j(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",j(s)),l.classList.add("v-overlay-scroll-blocked")}),z(()=>{o.forEach((l,r)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-d}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ka(e){var o;let t=!1,n=-1;function a(s){ga(()=>{var i,l;const r=performance.now();(i=(l=e.updateLocation).value)==null||i.call(l,s),t=(performance.now()-r)/(1e3/60)>2})}Ut((o=e.activatorEl.value)!=null?o:e.contentEl.value,s=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{a(s)})})):a(s)})}function Ut(e,t){const n=[document,...ue(e)];n.forEach(a=>{a.addEventListener("scroll",t,{passive:!0})}),z(()=>{n.forEach(a=>{a.removeEventListener("scroll",t)})})}function Sa(){if(!N)return A(!1);const{ssr:e}=ln();if(e){const t=A(!1);return mt(()=>{t.value=!0}),t}else return A(!0)}function He(){const t=$e("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const it=Symbol.for("vuetify:stack"),ne=gt([]);function wa(e,t,n){const a=$e("useStack"),o=!n,s=vt(it,void 0),i=gt({activeChildren:new Set});sn(it,i);const l=A(+t.value);yt(e,()=>{var d;const m=(d=ne.at(-1))==null?void 0:d[1];l.value=m?m+10:+t.value,o&&ne.push([a.uid,l.value]),s==null||s.activeChildren.add(a.uid),z(()=>{if(o){const v=ne.findIndex(g=>g[0]===a.uid);ne.splice(v,1)}s==null||s.activeChildren.delete(a.uid)})});const r=A(!0);o&&fe(()=>{var d;const m=((d=ne.at(-1))==null?void 0:d[0])===a.uid;setTimeout(()=>r.value=m)});const f=P(()=>!i.activeChildren.size);return{globalTop:rn(r),localTop:f,stackStyles:P(()=>({zIndex:l.value}))}}function oe(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!N)return;const a=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(a!=null){if(!oe.cache.has(a)){const o=document.createElement("div");o.className="v-overlay-container",a.appendChild(o),oe.cache.set(a,o)}return oe.cache.get(a)}})}}oe.cache=new WeakMap;function Ca(){return!0}function Gt(e,t,n){if(!e||Yt(e,n)===!1)return!1;const a=$t(t);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof n.value=="object"&&n.value.include||(()=>[]))();return o.push(t),!o.some(s=>s==null?void 0:s.contains(e.target))}function Yt(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ca)(e)}function xa(e,t,n){const a=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Gt(e,t,n)&&setTimeout(()=>{Yt(e,n)&&a&&a(e)},0)}function st(e,t){const n=$t(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ea={mounted(e,t){const n=o=>xa(o,e,t),a=o=>{e._clickOutside.lastMousedownWasOutside=Gt(o,e,t)};st(e,o=>{o.addEventListener("click",n,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:a}},unmounted(e,t){!e._clickOutside||(st(e,n=>{var a;if(!n||!((a=e._clickOutside)!=null&&a[t.instance.$.uid]))return;const{onClick:o,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[t.instance.$.uid])}};function _a(e){const{modelValue:t,color:n,...a}=e;return c(ke,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&c("div",D({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const We=Q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...oa(),...bt(),...sa(),...ua(),...ya(),...Ae(),...xn()},"v-overlay"),ze=Ie()({name:"VOverlay",directives:{ClickOutside:Ea},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...We()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:a,emit:o}=t;const s=Be(e,"modelValue"),i=P({get:()=>s.value,set:S=>{S&&e.disabled||(s.value=S)}}),{teleportTarget:l}=oe(P(()=>e.attach||e.contained)),{themeClasses:r}=Oe(e),{rtlClasses:f,isRtl:d}=cn(),{hasContent:m,onAfterLeave:v}=ra(e,i),g=En(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:y,stackStyles:b}=wa(i,un(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:w,activatorEvents:u,contentEvents:$,scrimEvents:L}=la(e,{isActive:i,isTop:y}),{dimensionStyles:F}=St(e),W=Sa(),{scopeId:q}=He();O(()=>e.disabled,S=>{S&&(i.value=!1)});const U=A(),I=A(),{contentStyles:_,updateLocation:x}=da(e,{isRtl:d,contentEl:I,activatorEl:E,isActive:i});ha(e,{root:U,contentEl:I,activatorEl:E,isActive:i,updateLocation:x});function p(S){o("click:outside",S),e.persistent?V():i.value=!1}function k(){return i.value&&h.value}N&&O(i,S=>{S?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(S){S.key==="Escape"&&h.value&&(e.persistent?V():i.value=!1)}const B=Ln();yt(()=>e.closeOnBack,()=>{In(B,S=>{h.value&&i.value?(S(!1),e.persistent?V():i.value=!1):S()})});const Y=A();O(()=>i.value&&(e.absolute||e.contained)&&l.value==null,S=>{if(S){const R=Bn(U.value);R&&R!==document.scrollingElement&&(Y.value=R.scrollTop)}});function V(){e.noClickAnimation||I.value&&ae(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:pe})}return ee(()=>{var S,R;return c(ht,null,[(S=n.activator)==null?void 0:S.call(n,{isActive:i.value,props:D({ref:w},me(u.value),e.activatorProps)}),W.value&&c(dn,{disabled:!l.value,to:l.value},{default:()=>[m.value&&c("div",D({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},r.value,f.value],style:[b.value,{top:j(Y.value)}],ref:U},q,a),[c(_a,D({color:g,modelValue:i.value&&!!e.scrim},me(L.value)),null),c(_n,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:()=>{v(),o("afterLeave")}},{default:()=>[dt(c("div",D({ref:I,class:["v-overlay__content",e.contentClass],style:[F.value,_.value]},me($.value),e.contentProps),[(R=n.default)==null?void 0:R.call(n,{isActive:i})]),[[fn,i.value],[ft("click-outside"),{handler:p,closeConditional:k,include:()=>[E.value]}]])]})])]})])}),{activatorEl:E,animateClick:V,contentEl:I,globalTop:h,localTop:y,updateLocation:x}}});function Xt(e){return vn(e,Object.keys(ze.props))}const Pa=Ie()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...We({origin:"center center",scrollStrategy:"block",transition:{component:Nn},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Be(e,"modelValue"),{scopeId:o}=He(),s=A();function i(l){var r,f;const d=l.relatedTarget,m=l.target;if(d!==m&&(r=s.value)!=null&&r.contentEl&&(f=s.value)!=null&&f.globalTop&&![document,s.value.contentEl].includes(m)&&!s.value.contentEl.contains(m)){const v=[...s.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(y=>!y.hasAttribute("disabled")&&!y.matches('[tabindex="-1"]'));if(!v.length)return;const g=v[0],h=v[v.length-1];d===g?h.focus():g.focus()}}return N&&O(()=>a.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),O(a,async l=>{if(await Z(),l){var r;(r=s.value.contentEl)==null||r.focus({preventScroll:!0})}else{var f;(f=s.value.activatorEl)==null||f.focus({preventScroll:!0})}}),ee(()=>{const[l]=Xt(e);return c(ze,D({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},l,{modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,"aria-role":"dialog","aria-modal":"true",activatorProps:D({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps)},o),{activator:n.activator,default:function(){for(var r,f=arguments.length,d=new Array(f),m=0;m<f;m++)d[m]=arguments[m];return c(le,{root:!0},{default:()=>[(r=n.default)==null?void 0:r.call(n,...d)]})}})}),ct({},s)}});const Ta=Ie()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Et({location:"bottom"}),..._t(),...kt(),...Pt(),...Ae(),...mn(We({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Be(e,"modelValue"),{locationStyles:o}=Vt(e),{positionClasses:s}=At(e),{scopeId:i}=He(),{themeClasses:l}=Oe(e),{colorClasses:r,colorStyles:f,variantClasses:d}=Tt(e),{roundedClasses:m}=wt(e),v=A();O(a,h),O(()=>e.timeout,h),mt(()=>{a.value&&h()});let g=-1;function h(){window.clearTimeout(g);const b=Number(e.timeout);!a.value||b===-1||(g=window.setTimeout(()=>{a.value=!1},b))}function y(){window.clearTimeout(g)}return ee(()=>{const[b]=Xt(e);return c(ze,D({ref:v,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},s.value]},b,{modelValue:a.value,"onUpdate:modelValue":E=>a.value=E,contentProps:D({style:o.value},b.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},i),{default:()=>[c("div",{class:["v-snackbar__wrapper",l.value,r.value,m.value,d.value],style:[f.value],onPointerenter:y,onPointerleave:h},[Ot(!1,"v-snackbar"),n.default&&c("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&c(le,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[c("div",{class:"v-snackbar__actions"},[n.actions()])]})])],activator:n.activator})}),ct({},v)}}),Va=H("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),Aa=H("h1",{class:"text-h2 font-weight-bold"},"Box of Curiosity",-1),Oa=H("div",{class:"py-14"},null,-1),$a=H("div",{class:"py-5"},null,-1),La={key:0},Ia=H("div",{class:"text-body font-weight-light mb-n1"},"Topic of the Day",-1),Ba={class:"text-h4 font-weight-bold font-italic"},Da={class:"text-body font-weight-light mb-n1"},Na=H("div",{class:"py-5"},null,-1);function Fa(e,t,n,a,o,s){const i=gn("CreateTopic");return J(),we(ht,null,[c(Zt,{class:"fill-height"},{default:C(()=>[c(Pa,{modelValue:e.createTopic,"onUpdate:modelValue":t[0]||(t[0]=l=>e.createTopic=l),"max-width":"500"},{default:C(()=>[c(i,{onCloseDialog:e.handleCreation},null,8,["onCloseDialog"])]),_:1},8,["modelValue"]),c(Pn,{class:"d-flex align-center text-center fill-height"},{default:C(()=>[c(Ct,{contain:"",height:"300",src:ea}),Va,Aa,Oa,c(tt,{class:"d-flex align-center justify-center"},{default:C(()=>[c(te,{cols:"auto"},{default:C(()=>[c(G,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:t[1]||(t[1]=X(l=>e.createTopic=!0,["stop"]))},{default:C(()=>[c(se,{icon:"mdi-note-edit-outline",size:"large",start:""}),M(" Create Topic ")]),_:1})]),_:1}),c(te,{cols:"auto"},{default:C(()=>[c(G,{color:"primary","min-width":"228","max-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat",onClick:X(e.retrieveTopic,["stop"])},{default:C(()=>[c(se,{icon:"mdi-magnify",size:"large",start:""}),M(" Retrieve Topic ")]),_:1},8,["onClick"])]),_:1}),c(te,{cols:"auto"},{default:C(()=>[c(G,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:t[2]||(t[2]=X(l=>e.retrieveTopic(!1),["stop"]))},{default:C(()=>[c(se,{icon:"mdi-sunglasses",size:"large",start:""}),M(" I'm Feeling Lucky ")]),_:1})]),_:1})]),_:1}),$a,e.retrievedTopic?(J(),we("div",La,[Ia,H("h1",Ba,re(e.retrievedTopic.Content),1),H("div",Da,"Recorded on "+re(e.retrievedTopic.UpdatedAt),1),Na,c(G,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:X(e.deleteTopic,["stop"])},{default:C(()=>[c(se,{icon:"mdi-check-all",size:"large",start:""}),M(" Finished Discussion ")]),_:1},8,["onClick"])])):Ce("",!0)]),_:1})]),_:1}),c(Ta,{modelValue:e.snackbar,"onUpdate:modelValue":t[4]||(t[4]=l=>e.snackbar=l)},{default:C(()=>[c(tt,{class:"d-flex align-center justify-space-between"},{default:C(()=>[c(te,{cols:"auto"},{default:C(()=>[M(re(e.errorMessage?`Something Went Wrong: ${e.errorMessage}`:"Success"),1)]),_:1}),c(te,{cols:"auto"},{default:C(()=>[c(G,{color:"pink",text:"",onClick:t[3]||(t[3]=l=>e.snackbar=!1)},{default:C(()=>[M(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Ra=xt(Zn,[["render",Fa]]),za=Ve({__name:"Home",setup(e){return(t,n)=>(J(),Se(Ra))}});export{za as default};
