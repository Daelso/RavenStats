(globalThis["webpackChunkravenstats_portal"]=globalThis["webpackChunkravenstats_portal"]||[]).push([[381],{5552:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var o=a(9835),s=a(6970);const n=e=>((0,o.dD)("data-v-4cad9b78"),e=e(),(0,o.Cn)(),e),c={class:"q-pa-md",style:{"max-width":"1400px"}},l=n((()=>(0,o._)("div",{class:"banner"},"Fun Facts",-1))),i={class:"q-mt-md text-center fact-text"},r={class:"q-mt-md text-center fact-text"},d={class:"q-mt-md text-center fact-text"},p={class:"q-mt-md text-center fact-text"},u={class:"q-mt-md text-center fact-text"};function h(e,t,a,n,h,m){const f=(0,o.up)("q-spinner-pie"),w=(0,o.up)("q-icon"),y=(0,o.up)("q-carousel-slide"),_=(0,o.up)("q-carousel");return(0,o.wg)(),(0,o.iD)("div",c,[l,(0,o._)("div",null,[null===h.fun_facts?((0,o.wg)(),(0,o.j4)(f,{key:0,color:"white",size:"4em"})):(0,o.kq)("",!0),null!=h.fun_facts?((0,o.wg)(),(0,o.j4)(_,{key:1,modelValue:h.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>h.slide=e),"transition-prev":"jump-right","transition-next":"jump-left",swipeable:"",animated:"","rounded-borders":"","control-color":"white",navigation:"",autoplay:h.autoplay,infinite:"",padding:"",onMouseenter:t[1]||(t[1]=e=>h.autoplay=!1),onMouseleave:t[2]||(t[2]=e=>h.autoplay=!0),arrows:"",class:"bg-primary text-white shadow-1 rounded-borders fun_facts"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{name:1,class:"column no-wrap flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"app:bum_king",size:"64px"}),(0,o._)("div",i," The King of the Bums is "+(0,s.zw)(h.fun_facts[1].ckey)+" - Played "+(0,s.zw)(h.fun_facts[1].role_count)+" rounds ",1)])),_:1}),(0,o.Wm)(y,{name:2,class:"column no-wrap flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"app:randy",size:"64px"}),(0,o._)("div",r," Randy's Most Played Role Is: "+(0,s.zw)(h.fun_facts[0].role),1)])),_:1}),(0,o.Wm)(y,{name:3,class:"column no-wrap flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"app:reactor",size:"64px"}),(0,o._)("div",d," The least played role in Lifeweb is "+(0,s.zw)(h.fun_facts[2].role)+" - Played a Total of "+(0,s.zw)(h.fun_facts[2].role_count)+" times ",1)])),_:1}),(0,o.Wm)(y,{name:4,class:"column no-wrap flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"app:operator",size:"64px"}),(0,o._)("div",p," The most common name in Ravenheart is "+(0,s.zw)(h.fun_facts[3].character_name)+" - Played "+(0,s.zw)(h.fun_facts[3].played_count)+" times ",1)])),_:1}),(0,o.Wm)(y,{name:5,class:"column no-wrap flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"app:bum_king",size:"64px"}),(0,o._)("div",u," The most common Migrant seen in the caves of Ravenheart is "+(0,s.zw)(h.fun_facts[4].role)+" - played "+(0,s.zw)(h.fun_facts[4].count_played)+" times ",1)])),_:1})])),_:1},8,["modelValue","autoplay"])):(0,o.kq)("",!0)])])}const m={name:"fun_facts",async created(){this.$q.loading.show({delay:450});const e=await this.$axios.get("https://www.schrecknet.live/showlads/fun_facts");this.fun_facts=e.data,this.$q.loading.hide()},data(){return{fun_facts:null,slide:1,autoplay:!0}},methods:{async fetchCkeyData(e){try{const e=await this.$axios.get(`https://www.schrecknet.live/showlads/ckey/${this.ckey}`);this.ckey_data=e.data}catch(t){console.error("Error fetching data:",t)}}}};var f=a(1639),w=a(132),y=a(7052),_=a(1694),k=a(2857),g=a(9984),v=a.n(g);const A=(0,f.Z)(m,[["render",h],["__scopeId","data-v-4cad9b78"]]),C=A;v()(m,"components",{QSpinnerPie:w.Z,QCarousel:y.Z,QCarouselSlide:_.Z,QIcon:k.Z})},7381:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>te});var o=a(9835);function s(e,t,a,s,n,c){const l=(0,o.up)("fun_facts"),i=(0,o.up)("home-page"),r=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(r,{class:"container"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(o.n4,null,{fallback:(0,o.w5)((()=>[(0,o.Uk)(" Loading... ")])),default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1})),((0,o.wg)(),(0,o.j4)(o.n4,null,{fallback:(0,o.w5)((()=>[(0,o.Uk)(" Loading... ")])),default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}))])),_:1})}const n=e=>((0,o.dD)("data-v-39559ef2"),e=e(),(0,o.Cn)(),e),c={class:"q-pa-md",style:{"max-width":"1400px"}},l=n((()=>(0,o._)("div",{class:"banner"},"Search by Ckey",-1))),i={key:0};function r(e,t,a,s,n,r){const d=(0,o.up)("q-select"),p=(0,o.up)("ckey_lookup");return(0,o.wg)(),(0,o.iD)("div",c,[l,(0,o._)("div",null,[(0,o.Wm)(d,{class:"picker",standout:"",modelValue:n.ckey,"onUpdate:modelValue":t[0]||(t[0]=e=>n.ckey=e),options:n.filteredOptions,label:"Ckey","use-input":"",onFilter:r.filterFn,"input-debounce":"2",clearable:"",color:"black","bg-color":"grey-3","popup-content-style":"background-color:#222831; color:white",filled:""},null,8,["modelValue","options","onFilter"])]),this.ckey?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(p,{ckey:this.ckey,"onUpdate:ckey":t[1]||(t[1]=e=>this.ckey=e)},null,8,["ckey"])])):(0,o.kq)("",!0)])}var d=a(6970);const p={class:"q-pa-md",style:{"max-width":"1400px"}},u={class:"q-pa-md"};function h(e,t,a,s,n,c){const l=(0,o.up)("role_type_pie"),i=(0,o.up)("player_fun_facts"),r=(0,o.up)("q-icon"),h=(0,o.up)("q-input"),m=(0,o.up)("q-td"),f=(0,o.up)("q-tr"),w=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(l,{ckey:this.ckey},null,8,["ckey"]),(0,o.Wm)(i,{ckey:this.ckey},null,8,["ckey"]),(0,o._)("div",null,[(0,o._)("div",u,[(0,o.Wm)(w,{flat:"",bordered:"",title:"All of "+this.ckey+"'s Stats",rows:n.ckey_data,columns:n.columns,pagination:n.pagination,"onUpdate:pagination":t[1]||(t[1]=e=>n.pagination=e),dark:"",class:"table-guy",color:"white","no-data-label":"No data found!","table-class":"stat-table",filter:n.filter,"no-results-label":"Your search yielded no results!",loading:n.loading},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(h,{borderless:"",debounce:"300",modelValue:n.filter,"onUpdate:modelValue":t[0]||(t[0]=e=>n.filter=e),dark:"",placeholder:"Search"},{append:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"search"})])),_:1},8,["modelValue"])])),body:(0,o.w5)((e=>[(0,o.Wm)(f,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{key:"character_name",props:e,onClick:t=>c.find_static_count(e.row.character_name)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.row.character_name),1)])),_:2},1032,["props","onClick"]),(0,o.Wm)(m,{key:"role",props:e,onClick:t=>c.find_role_count(e.row.role)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.row.role),1)])),_:2},1032,["props","onClick"]),(0,o.Wm)(m,{key:"date",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(n.date.formatDate(e.row.date,"M-D-YYYY h:m A")),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows","columns","pagination","filter","loading"])])])])}var m=a(4376),f=a(9615),w=a.n(f);const y={class:"q-pa-md",style:{"max-width":"1400px"}};function _(e,t,a,s,n,c){const l=(0,o.up)("Doughnut");return(0,o.wg)(),(0,o.iD)("div",y,[n.loaded?((0,o.wg)(),(0,o.j4)(l,{key:0,data:n.chart_data,options:n.chart_options},null,8,["data","options"])):(0,o.kq)("",!0)])}a(9665);var k=a(3255),g=a(8490);k.kL.register(k.qi,k.u,k.De);const v={name:"role_type_pie",props:["ckey"],components:{Doughnut:g.$I},async created(){},data(){return{loaded:!1,chart_data:{labels:["Authority","Bandit","Business","Church","Dirt","Donation Role","Garrison","Healers","Late-Party","Migrant","Noble Family/Entourage","OS13","Special"],datasets:[{backgroundColor:["#b900ff","#df000a","#f3f21f","#616161","#4C1605","#2ce7ec","#ceb5a2","#7CB342","#880E4F","#3B722E","#AB47BC","#0D47A1","#F9A825"],data:null}]},chart_options:{responsive:!0,maintainAspectRatio:!1}}},watch:{ckey:{handler(e,t){e!==t&&this.fetchChartData(e)},immediate:!0}},methods:{async fetchChartData(e){try{this.loaded=!1;const t=await this.$axios.get(`https://www.schrecknet.live/showlads/pie_chart/${e}`);this.chart_data.datasets[0].data=[],t.data.forEach((e=>{this.chart_data.datasets[0].data.push(e.play_count)})),this.loaded=!0}catch(t){console.error("Error fetching data:",t)}}}};var A=a(1639);const C=(0,A.Z)(v,[["render",_],["__scopeId","data-v-16cbfea4"]]),b=C,x={class:"q-pa-md",style:{"max-width":"1400px"}},W={class:"banner"},I={key:1,class:"fun-facts-container"},q={class:"q-pa-sm"},D={class:"q-pa-sm"};function z(e,t,a,s,n,c){const l=(0,o.up)("q-spinner-pie");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",W,(0,d.zw)(this.ckey)+" Fun Facts",1),null===n.fun_facts?((0,o.wg)(),(0,o.j4)(l,{key:0,color:"white",size:"4em"})):(0,o.kq)("",!0),n.fun_facts?((0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("div",q," Most Commonly Played Character: "+(0,d.zw)(n.fun_facts[1].first_name)+" - Played "+(0,d.zw)(n.fun_facts[1].static_count)+" times ",1),(0,o._)("div",D," Most Commonly Played Role: "+(0,d.zw)(n.fun_facts[0].role)+" - Played "+(0,d.zw)(n.fun_facts[0].role_count)+" times ",1)])):(0,o.kq)("",!0)])}const U={name:"player_fun_facts",props:["ckey"],data(){return{fun_facts:null}},watch:{ckey:{handler(e,t){e!==t&&this.fetchCkeyData(e)},immediate:!0}},methods:{async fetchCkeyData(e){try{const e=await this.$axios.get(`https://www.schrecknet.live/showlads/ckey_fun_facts/${this.ckey}`);this.fun_facts=e.data}catch(t){console.error("Error fetching data:",t)}}}};var Z=a(132),E=a(9984),B=a.n(E);const Q=(0,A.Z)(U,[["render",z],["__scopeId","data-v-7f2fb415"]]),P=Q;B()(U,"components",{QSpinnerPie:Z.Z});const O={name:"ckey_charts",props:["ckey"],emits:["update:ckey"],components:{role_type_pie:b,player_fun_facts:P},data(){return{date:m.ZP,notif_shown:!1,loading:!0,filter:"",ckey_data:[],pagination:{rowsPerPage:15,sortBy:"date",descending:!0},columns:[{name:"character_name",required:!0,label:"Character Name",align:"left",field:e=>e.character_name,sortable:!0},{name:"role",align:"left",label:"Role",field:"role",sortable:!0},{name:"date",label:"Date Played",field:"date",sortable:!0}]}},watch:{ckey:{handler(e,t){e!==t&&this.fetchCkeyData(e)},immediate:!0}},methods:{async fetchCkeyData(e){try{const e=await this.$axios.get(`https://www.schrecknet.live/showlads/ckey/${this.ckey}`);this.ckey_data=e.data,this.loading=!1,this.notif_shown||this.$q.notify({message:"Click on a column to see how many times you've played a name or role",color:"primary",avatar:w(),position:"top",timeout:6500}),this.notif_shown=!0}catch(t){console.error("Error fetching data:",t)}},async find_static_count(e){try{const t=await this.$axios.get(`https://www.schrecknet.live/showlads/find_static/${this.ckey}/${e}`);this.$q.notify({message:`${this.ckey} has played ${e} ${t.data[0].played_count} times!`,color:"primary",avatar:w(),position:"bottom",timeout:6500})}catch(t){console.log(t),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}},async find_role_count(e){try{const t=encodeURIComponent(e),a=await this.$axios.get(`https://www.schrecknet.live/showlads/find_role_played/${this.ckey}/${t}`);this.$q.notify({message:`${this.ckey} has played ${e} ${a.data.played_count} times!`,color:"primary",avatar:w(),position:"bottom",timeout:6500})}catch(t){console.log(t),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:t.message})}}}};var M=a(1463),R=a(6611),S=a(2857),V=a(3532),F=a(7220);const K=(0,A.Z)(O,[["render",h],["__scopeId","data-v-5258731e"]]),G=K;B()(O,"components",{QTable:M.Z,QInput:R.Z,QIcon:S.Z,QTr:V.Z,QTd:F.Z});var L=a(5457);const j={title:"RavenStats",titleTemplate:e=>`${e}`,meta:{keywords:{name:"keywords",content:"lifeweb, ss13, spacestation13, space station 13, byond"}}},J={components:{ckey_lookup:G},async created(){const e=await this.$axios.get("https://www.schrecknet.live/showlads/ckeys",{withCredentials:!0});this.ckey_options=e.data},data(){return{ckey:"",ckey_options:[],filteredOptions:null}},setup(){return(0,L.Z)(j),{}},methods:{filterFn(e,t){t(""!==e?()=>{const t=e.toLowerCase();this.filteredOptions=this.ckey_options.filter((e=>e.toLowerCase().indexOf(t)>-1))}:()=>{this.filteredOptions=this.ckey_options})}}};var Y=a(2553);const $=(0,A.Z)(J,[["render",r],["__scopeId","data-v-39559ef2"]]),H=$;B()(J,"components",{QSelect:Y.Z});var T=a(5552);const N=(0,o.aZ)({name:"IndexPage",components:{HomePage:H,fun_facts:T.Z}});var X=a(9885);const ee=(0,A.Z)(N,[["render",s],["__scopeId","data-v-e78e24da"]]),te=ee;B()(N,"components",{QPage:X.Z})},9615:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAaVBMVEXAwMA+Oi9GQjMCe0gCrmVZWkMCkVR9oow0LR8gICACc0MuLRsVFRVtKSwpJBg5JCWUcDpoaU5EPChmjnYgMS8+NiQnGBpea3E5MCSvhUUrHhxIQC9HGBZzGhdUX18uJh1ZUEQYJSQhHRREfxiZAAAAAXRSTlMAQObYZgAABRRJREFUWIW1lo1y2zgMhEtGZCAapNQTbbOxk0Z5/4fsB7rtzc05kq8zJ49liTIWi8WP+OXL/3a4v48/s/dPT0/DMHD2f4LgfAhxeH5+HmIIf4DgxEP9yQ5+vfw3BBEZBQZQGIxA8NyLPG4fnqMh+E4B/2Yfn8OjCCLxhhB8iDFyvtnHRzlgCG1DgASHxWML/kEKBCvRRzeOo3PE7/oVK/KgDDKaUz86cWOEQOxXtuTHRwFSl20Io0cDP4bQJU0PAhwOIgmIAfIOBe0cME8ih4Pu2+dchiHnjD8Xg0QJyIH3w0hVl32AaQ5YhzkckndkkSCC8+lweBrCVw/AtGMfMhDzpIr0oadDJPzFjQ9fAwDTnLfsdc5apmkax0McRS35VIDKGA/g+QBA2ATgsZI3CsDUHwu5EymjZcPKQcoOAXusmkeqP0YSUW4HKQDPOwPYJDAFRPYaMuZE3hV85rxEUwNKpW4zmOYOMGfKQLExCZ5NBC6VQvClbitgCAoBOKtdWDsO1ozBbomoum0JLIh5zrWqOi1FVeQ4HEXUbpwqD3YYgDBlhT82x2PRUI7hWIKW4xE0otgrAw7Yi6v8WwDA0t9+uNfqZK8M7NCgFQ49hF8M+o1PFftdBtSBNwoc0C5+oHztCv85UyN5pxcMQHy1bk7qSgcoTtOAfz/TZbv2p7PS/C7R/k5qHyhVQLAJEeiy0679mRI0AFf5pXb4xlBZoC+n6XzeRpjOc/aMYHGuGIAULWIAhbEUGWt5B+B0OufmqbxaQSDvnk8S7Kkh8S3nYdhCmPJpWBYQ1KQsNaXImy1ZU9tCy8vyCEBulkQnoXro862ExAr+l2WedwDm87dv35iK9G8NLy/YvbyEGoWlzJPzeW4bmZzafDaAZsNMJZg9CEE0Uo7tEYCcgWjWOWBUcw9ItbEYQcA8522AJc+X04nWEdwGfblery/82p1KB1juA+RfIVwuJ6v5GK2DwvX6er0Ga6UIwjzz+H4IjLF8QzAAfTN/jjjC6+trsN7mUt7UAD6JQFuHmNr3lPObZku7SoLClZFIg6qAywvv+2cSaGuRTLWUlmz26nxJ1QqJc/FOG6t5SQmd748EjUC0tFwub41/i0tWQtFFK6fEMGL17XJZEv+6j6G6NCS+pPbeJbBtRlzCEm1r4WzpvaULiWpLbPN9ElqnU0rvBG9bhMI3lMBkKP0r+p7SaaI6Oom7ELm19m7x04K8JIMUX2w+AKnooO88z+YJ0e9sFShDsE1AUshYwIRmAi5aO7reUPGWLjDuRDC35tO6JhAYI8nGciy9pBCUyaj20Le7zn9q4FtdCR7GHx8fvBv7y5lIuCMmpFhr8/ec/4ao64xevAM+ygcbksIeidEcuONdgarzWre3SevcUq2GUKx/0BER6KVi9rWmNq/rumG+pqUlxalzCc+wL8gAk8SULaKpUYvpUw5Mf998ZaJa8MEmcZHCRrH0e17O1e9IoNhPyaaB7ZKDmqlTu3TsMjRNIGxKgIoTacQXjIsrUAjOQgCGxbROOxqaiktSC9cOIMh/uV0zVtIybyjYzfO8+nWyASLI3a1Wu+gzZeIZO5gNDCVJ3te1b5B0ZWvCBwHW21Bcq/egfVqIX3otrpVNmhWAue5vmFVWtXJIKdfVb2bBIGpelwoADKT/F88wAKAua97VsKt42+PF365sJvedHhruJiEnc6K2UfxHaD/J1LSlodXiTrPQbZ9X8k9X2xT//YcfmIVd8y5W6EYAAAAASUVORK5CYII="}}]);