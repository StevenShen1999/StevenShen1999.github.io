import{a as C,V as w,b as V,c as D,d as x,e as S,f as B,g as k,h as p,i as I,j as M}from"./VSnackbar.3f2242b4.js";import{l as v,N as c,S as _,P as s,n as t,R as a,ah as f,O as T,Q as d,ai as b,aj as i,U as z,M as N}from"./index.a65e4d6b.js";import{_ as $,B as F,V as n,D as R,E as U,C as j,w as m}from"./VAvatar.073cfa79.js";const P=v({data(){return{topicContent:null,userId:1,submitted:!1}},methods:{closeDialog(e){this.$emit("close-dialog",e)},submitTopic(){this.submitted=!0,C.post(`${this.$hostname}/api/topics`,{userId:1,content:this.topicContent}).then(e=>{this.closeDialog(e.data)}).catch(e=>{console.log(e),this.closeDialog({status:`Failed, ${e}`})})}}}),W={class:"text-center"};function q(e,o,l,h,g,y){return c(),_(S,null,{default:s(()=>[t(w,{class:"text-h5"},{default:s(()=>[a(f(e.submitted?"Please Standby":"Create Topic"),1)]),_:1}),e.submitted?b("",!0):(c(),T("form",{key:0,onSubmit:o[1]||(o[1]=d((...u)=>e.submitTopic&&e.submitTopic(...u),["prevent"]))},[t(V,null,{default:s(()=>[t(D,{modelValue:e.topicContent,"onUpdate:modelValue":o[0]||(o[0]=u=>e.topicContent=u),label:"New Topic",required:""},null,8,["modelValue"])]),_:1}),t(x,null,{default:s(()=>[t(F),t(n,{color:"red darken-1",text:"",onClick:d(e.closeDialog,["stop"])},{default:s(()=>[a(" Cancel ")]),_:1},8,["onClick"]),t(n,{color:"green darken-1",text:"",variant:"flat",type:"submit"},{default:s(()=>[a(" Submit ")]),_:1})]),_:1})],32)),e.submitted?(c(),_(V,{key:1},{default:s(()=>[i("div",W,[t(R,{color:"purple",indeterminate:"",center:""})])]),_:1})):b("",!0)]),_:1})}const A=$(P,[["render",q]]),E=v({data(){return{createTopic:!1,snackbar:!1,errorMessage:null,retrievedTopic:null}},methods:{handleCreation(e){if(this.errorMessage=null,this.createTopic=!1,e.status)this.errorMessage=e.status;else if(e.ID)console.log("Success!");else return;this.snackbar=!0},convertTime(e){let o=e.split("T"),l=o[0],h=o[1].split("."),g=o[1].split("+");return l+" "+h[0]+"+"+g[1]},retrieveTopic(e=!0){let o=`${this.$hostname}/api/topics/`;e?o+="first":o+="random",C.get(o).then(l=>{this.retrievedTopic=l.data,console.log(this.retrievedTopic)}).catch(l=>{console.log(l)})},deleteTopic(){C.delete(`${this.$hostname}/api/topics/${this.retrievedTopic.ID}`).then(e=>{this.retrievedTopic=null}).catch(e=>{console.log(e)})}},components:{CreateTopic:A}}),H="/assets/polite.4609c368.svg",L=i("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),O=i("h1",{class:"text-h2 font-weight-bold"},"Box of Curiosity",-1),Q=i("div",{class:"py-14"},null,-1),G=i("div",{class:"py-5"},null,-1),J={key:0},K=i("div",{class:"text-body font-weight-light mb-n1"},"Topic of the Day",-1),X={class:"text-h4 font-weight-bold font-italic"},Y={class:"text-body font-weight-light mb-n1"},Z=i("div",{class:"py-5"},null,-1);function ee(e,o,l,h,g,y){const u=z("CreateTopic");return c(),T(N,null,[t(I,{class:"fill-height"},{default:s(()=>[t(B,{modelValue:e.createTopic,"onUpdate:modelValue":o[0]||(o[0]=r=>e.createTopic=r),"max-width":"500"},{default:s(()=>[t(u,{onCloseDialog:e.handleCreation},null,8,["onCloseDialog"])]),_:1},8,["modelValue"]),t(U,{class:"d-flex align-center text-center fill-height"},{default:s(()=>[t(j,{contain:"",height:"300",src:H}),L,O,Q,t(k,{class:"d-flex align-center justify-center"},{default:s(()=>[t(p,{cols:"auto"},{default:s(()=>[t(n,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:o[1]||(o[1]=d(r=>e.createTopic=!0,["stop"]))},{default:s(()=>[t(m,{icon:"mdi-note-edit-outline",size:"large",start:""}),a(" Create Topic ")]),_:1})]),_:1}),t(p,{cols:"auto"},{default:s(()=>[t(n,{color:"primary","min-width":"228","max-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat",onClick:d(e.retrieveTopic,["stop"])},{default:s(()=>[t(m,{icon:"mdi-magnify",size:"large",start:""}),a(" Retrieve Topic ")]),_:1},8,["onClick"])]),_:1}),t(p,{cols:"auto"},{default:s(()=>[t(n,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:o[2]||(o[2]=d(r=>e.retrieveTopic(!1),["stop"]))},{default:s(()=>[t(m,{icon:"mdi-sunglasses",size:"large",start:""}),a(" I'm Feeling Lucky ")]),_:1})]),_:1})]),_:1}),G,e.retrievedTopic?(c(),T("div",J,[K,i("h1",X,f(e.retrievedTopic.Content),1),i("div",Y,"Recorded on "+f(e.retrievedTopic.UpdatedAt),1),Z,t(n,{"min-width":"228","max-width":"228",rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:d(e.deleteTopic,["stop"])},{default:s(()=>[t(m,{icon:"mdi-check-all",size:"large",start:""}),a(" Finished Discussion ")]),_:1},8,["onClick"])])):b("",!0)]),_:1})]),_:1}),t(M,{modelValue:e.snackbar,"onUpdate:modelValue":o[4]||(o[4]=r=>e.snackbar=r)},{default:s(()=>[t(k,{class:"d-flex align-center justify-space-between"},{default:s(()=>[t(p,{cols:"auto"},{default:s(()=>[a(f(e.errorMessage?`Something Went Wrong: ${e.errorMessage}`:"Success"),1)]),_:1}),t(p,{cols:"auto"},{default:s(()=>[t(n,{color:"pink",text:"",onClick:o[3]||(o[3]=r=>e.snackbar=!1)},{default:s(()=>[a(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const te=$(E,[["render",ee]]),ie=v({__name:"Home",setup(e){return(o,l)=>(c(),_(te))}});export{ie as default};
