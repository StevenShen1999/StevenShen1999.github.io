import{m as _,a as b,c as R,f as E,g as W,p as C,h as j,k as q,l as w,V as m,q as z,b as A}from"./loader.2dc40990.js";import{m as S,n as a,p as F,y as B,t as $,A as N,r as O,c as g,C as U,b as n,x as G,s as J}from"./index.fe5f3748.js";const K=S()({name:"VToolbarTitle",props:{text:String,..._()},setup(e,o){let{slots:l}=o;return b(()=>{var t;const s=!!(l.default||l.text||e.text);return a(e.tag,{class:"v-toolbar-title"},{default:()=>[s&&a("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(t=l.default)==null?void 0:t.call(l)])]})}),{}}}),L=[null,"prominent","default","comfortable","compact"],M=F({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>L.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...E(),...W(),..._({tag:"header"}),...B()},"v-toolbar"),V=S()({name:"VToolbar",props:M(),setup(e,o){var l;let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:r}=C($(e,"color")),{borderClasses:d}=j(e),{elevationClasses:i}=q(e),{roundedClasses:P}=w(e),{themeClasses:D}=N(e),u=O(!!(e.extended||(l=t.extension)!=null&&l.call(t))),c=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=g(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return U({VBtn:{variant:"text"}}),b(()=>{var f,h,x,y,k;const H=!!(e.title||t.title),I=!!(t.image||e.image),T=(f=t.extension)==null?void 0:f.call(t);return u.value=!!(e.extended||T),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,d.value,i.value,P.value,D.value],style:[r.value]},{default:()=>[I&&a("div",{key:"image",class:"v-toolbar__image"},[a(m,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(h=t.image)==null?void 0:h.call(t):a(z,null,null)]})]),a(m,{defaults:{VTabs:{height:n(c.value)}}},{default:()=>[a("div",{class:"v-toolbar__content",style:{height:n(c.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),H&&a(K,{key:"title",text:e.title},{text:t.title}),(y=t.default)==null?void 0:y.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}),a(m,{defaults:{VTabs:{height:n(v.value)}}},{default:()=>[a(A,null,{default:()=>[u.value&&a("div",{class:"v-toolbar__extension",style:{height:n(v.value)}},[T])]})]})]})}),{contentHeight:c,extensionHeight:v}}});function Y(e){var o;return G(e,Object.keys((o=V==null?void 0:V.props)!=null?o:{}))}const Z=J({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...B()},setup(e,o){let{attrs:l}=o;const{themeClasses:t}=N(e),{backgroundColorClasses:s,backgroundColorStyles:r}=C($(e,"color")),d=g(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=n(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=n(e.thickness)),i});return b(()=>a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,s.value],style:[d.value,r.value],"aria-orientation":!l.role||l.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${l.role||"separator"}`},null)),{}}});export{V,Z as a,K as b,Y as f,M as m};
