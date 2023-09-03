"use strict";(self.webpackChunkpharm_strapi_mysql=self.webpackChunkpharm_strapi_mysql||[]).push([[5516],{63109:(N,M,a)=>{a.d(M,{Z:()=>v});var e=a(67294);const v=(k,D)=>{const[P,C]=(0,e.useState)(k);return(0,e.useEffect)(()=>{const u=setTimeout(()=>{C(k)},D);return()=>{clearTimeout(u)}},[k,D]),P}},4285:(N,M,a)=>{a.r(M),a.d(M,{MarketPlacePage:()=>fe,default:()=>yt});var e=a(67294),y=a(17034),v=a(185),k=a(49066),D=a(82777),P=a(11047),C=a(77296),u=a(41580),Ee=a(49123),V=a(42761),g=a(80120),Me=a(64593),E=a(86896),ye=a(86706),ke=a(63109);const be=()=>{const n=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=(0,e.useState)(n),l=()=>i(!0),r=()=>i(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",l),window.addEventListener("offline",r),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}),[]),s};var Re=a(36364),w=a(52624),B=a(85893);const Ce=n=>(0,B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...n,children:[(0,B.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,B.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),xe=Ce;var X=a(17772);const Se=()=>{const{formatMessage:n}=(0,E.Z)(),{trackUsage:s}=(0,g.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.Y_,{title:n({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:n({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(xe,null),iconBackground:"alternative100",endAction:e.createElement(w.J,{as:X.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Te=a(72775),z=a(29728),Ze=a(70968),we=a(89597),De=a(45697),t=a.n(De),O=a(1565),Oe=a(37108),_=a(40619),ee=a(82562);const te=({message:n,value:s,onChange:i,possibleFilters:l,onClear:r,customizeContent:d})=>{const o=(c,m)=>`${c} (${m})`;return e.createElement(_.P,{"data-testid":`${n}-button`,label:n,placeholder:n,size:"M",onChange:i,onClear:r,value:s,customizeContent:d,multi:!0},Object.entries(l).map(([c,m])=>e.createElement(ee.W,{"data-testid":`${c}-${m}`,key:c,value:c},o(c,m))))};te.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const ae=te,ne=({source:n,onToggle:s,query:i,npmPackageType:l,possibleCategories:r,possibleCollections:d,handleSelectChange:o,handleSelectClear:c})=>{const{formatMessage:m}=(0,E.Z)();return e.createElement(Oe.J2,{source:n,onDismiss:s,padding:3,spacing:4},e.createElement(Ne,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ae,{message:m({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:f=>{o({collections:f})},onClear:()=>c("collections"),possibleFilters:d,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:f.length})}),l==="plugin"&&e.createElement(ae,{message:m({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:f=>{o({categories:f})},onClear:()=>c("categories"),possibleFilters:r,customizeContent:f=>m({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:f.length}),name:"categories"})))};ne.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Le=ne,Ne=(0,O.ZP)(P.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,U=({name:n,handleRemove:s})=>e.createElement(u.x,{padding:1},e.createElement(Te.V,{icon:e.createElement(Ze.Z,null),onClick:s},n)),Be=(0,O.ZP)(z.z)`
  height: ${({theme:n})=>n.sizes.input.S};
`,se=({possibleCollections:n,possibleCategories:s,npmPackageType:i,query:l,handleSelectClear:r,handleSelectChange:d})=>{const[o,c]=(0,e.useState)(!1),m=(0,e.useRef)(),{formatMessage:f}=(0,E.Z)(),h=()=>c(p=>!p),b=(p,R)=>{const T={[R]:l[R].filter(L=>L!==p)};d(T)};return e.createElement(e.Fragment,null,e.createElement(u.x,{paddingTop:1,paddingBottom:1},e.createElement(Be,{variant:"tertiary",ref:m,"data-testid":"filters-button",startIcon:e.createElement(we.Z,null),onClick:h,size:"S"},f({id:"app.utils.filters",defaultMessage:"Filters"})),o&&e.createElement(Le,{onToggle:h,source:m,query:l,handleSelectClear:r,handleSelectChange:d,possibleCollections:n,possibleCategories:s,npmPackageType:i})),l.collections?.map(p=>e.createElement(U,{name:p,key:p,handleRemove:()=>b(p,"collections")})),i==="plugin"&&l.categories?.map(p=>e.createElement(U,{name:p,key:p,handleRemove:()=>b(p,"categories")})))};U.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},se.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Ie=se;var je=a(77197),Ae=a(11276),$e=a(67819),S=a(75515),Fe=a(86031),Ve=a(19306);const ze=(0,O.ZP)(u.x)`
  background: ${({theme:n})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${n.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ue=()=>e.createElement(Ve.M,null,Array(12).fill(null).map((n,s)=>e.createElement(ze,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),re=({content:n})=>e.createElement(u.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Ue,null),e.createElement(u.x,{position:"absolute",top:11,width:"100%"},e.createElement(P.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(w.J,{as:Fe.Z,color:"",width:"160px",height:"88px"}),e.createElement(u.x,{paddingTop:6},e.createElement(S.Z,{variant:"delta",as:"p",textColor:"neutral600"},n)))));re.propTypes={content:t().string.isRequired};const He=re;var H=a(84495),ie=a(80994),Qe=a(86783),Ge=a(23450),We=a.n(Ge),Ke=a(61473),Je=a(85018),le=a(65186),Ye=a(81249),oe=a.n(Ye);const I=({description:n,installMessage:s,disabled:i,handleCopy:l,pluginName:r})=>e.createElement(H.u,{"data-testid":`tooltip-${r}`,description:n},e.createElement(u.x,null,e.createElement(z.z,{size:"S",startIcon:e.createElement(le.Z,null),variant:"secondary",disabled:i,onClick:l},s))),Q=({strapiPeerDepVersion:n,strapiAppVersion:s,handleCopy:i,pluginName:l})=>{const{formatMessage:r}=(0,E.Z)(),d=oe().validRange(n),o=oe().satisfies(s,d),c=r({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement(I,{installMessage:c,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!o)return e.createElement(I,{installMessage:c,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement(z.z,{size:"S",startIcon:e.createElement(le.Z,null),variant:"secondary",onClick:i},c)};I.defaultProps={disabled:!1,handleCopy:null},I.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},Q.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},Q.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const qe=Q,G=({isInstalled:n,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:l,strapiPeerDepVersion:r,pluginName:d})=>{const o=(0,g.lm)(),{formatMessage:c}=(0,E.Z)(),{trackUsage:m}=(0,g.rS)(),{copy:f}=(0,g.VP)(),h=async()=>{await f(i)&&(m("willInstallPlugin"),o({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return n?e.createElement(u.x,{paddingLeft:4},e.createElement(w.J,{as:Je.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(S.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(qe,{strapiAppVersion:l,strapiPeerDepVersion:r,handleCopy:h,pluginName:d}):null};G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const Xe=G;var _e=a(70004),et=a(57750),tt=a(69353),at=a(7217);const nt=(0,O.ZP)(_e.i)`
  width: ${(0,g.Q1)(12)};
  transform: rotate(90deg);
`,W=({githubStars:n,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:l}=(0,E.Z)();return e.createElement(P.k,{gap:1},!!n&&e.createElement(e.Fragment,null,e.createElement(w.J,{as:et.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement(w.J,{as:tt.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:n,package:i})},e.createElement(S.Z,{variant:"pi",textColor:"neutral800"},n)),e.createElement(nt,{unsetMargin:!1,background:"neutral200"})),e.createElement(w.J,{as:at.Z,height:(0,g.Q1)(12),width:(0,g.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(S.Z,{variant:"pi",textColor:"neutral800"},s)))};W.defaultProps={githubStars:0,npmDownloads:0},W.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const st=W,rt=(0,O.ZP)(S.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,K=({npmPackage:n,isInstalled:s,useYarn:i,isInDevelopmentMode:l,npmPackageType:r,strapiAppVersion:d})=>{const{attributes:o}=n,{formatMessage:c}=(0,E.Z)(),{trackUsage:m}=(0,g.rS)(),f=i?`yarn add ${o.npmPackageName}`:`npm install ${o.npmPackageName}`,h=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),b=`https://market.strapi.io/${We().plural(r)}/${o.slug}`;return e.createElement(P.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(u.x,null,e.createElement(P.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(u.x,{as:"img",src:o.logo.url,alt:`${o.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(st,{githubStars:o.githubStars,npmDownloads:o.npmDownloads,npmPackageType:r})),e.createElement(u.x,{paddingTop:4},e.createElement(S.Z,{as:"h3",variant:"delta"},e.createElement(P.k,{alignItems:"center"},o.name,o.validated&&!o.madeByStrapi&&e.createElement(H.u,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(P.k,null,e.createElement(w.J,{as:Qe.Z,marginLeft:2,color:"success600"}))),o.madeByStrapi&&e.createElement(H.u,{description:h},e.createElement(P.k,null,e.createElement(u.x,{as:"img",src:Ke,alt:h,marginLeft:1,width:6,height:"auto"})))))),e.createElement(u.x,{paddingTop:2},e.createElement(rt,{as:"p",variant:"omega",textColor:"neutral600"},o.description))),e.createElement(P.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(ie.Q,{size:"S",href:b,isExternal:!0,endIcon:e.createElement(X.Z,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:o.name}),variant:"tertiary",onClick:()=>m("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Xe,{isInstalled:s,isInDevelopmentMode:l,commandToCopy:f,strapiAppVersion:d,strapiPeerDepVersion:o.strapiVersion,pluginName:o.name})))};K.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},K.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const it=K,J=({status:n,npmPackages:s,installedPackageNames:i,useYarn:l,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:o,debouncedSearch:c})=>{const{formatMessage:m}=(0,E.Z)();if(n==="error")return e.createElement(P.k,{paddingTop:8},e.createElement(g.Hn,null));if(n==="loading")return e.createElement(P.k,{justifyContent:"center",paddingTop:8},e.createElement(je.a,null,"Loading content..."));const f=m({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:c});return s.length===0?e.createElement(He,{content:f}):e.createElement(Ae.r,{gap:4,"data-testid":"marketplace-results"},s.map(h=>e.createElement($e.P,{col:4,s:6,xs:12,style:{height:"100%"},key:h.id},e.createElement(it,{npmPackage:h,isInstalled:i.includes(h.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:o}))))};J.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},J.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const ce=J,de=({pagination:n})=>e.createElement(u.x,{paddingTop:4},e.createElement(P.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.tU,{pagination:n})));de.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const lt=de,ot=a.p+"9d5d788027e86620c234.svg";var ct=a(53979);const dt=n=>(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...n,children:(0,B.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),gt=dt,Y=({isOnline:n,npmPackageType:s})=>{const{formatMessage:i}=(0,E.Z)(),{trackUsage:l}=(0,g.rS)(),r=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(ct.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:n&&e.createElement(ie.Q,{startIcon:e.createElement(gt,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>l(r),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ge=Y;Y.defaultProps={npmPackageType:"plugin"},Y.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};const pt=()=>{const{formatMessage:n}=(0,E.Z)();return e.createElement(y.A,null,e.createElement(v.o,null,e.createElement(ge,{isOnline:!1}),e.createElement(P.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.Q1)(120)},e.createElement(u.x,{paddingBottom:2},e.createElement(S.Z,{textColor:"neutral700",variant:"alpha"},n({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(u.x,{paddingBottom:6},e.createElement(S.Z,{textColor:"neutral700",variant:"epsilon"},n({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:ot,alt:"offline",style:{width:"88px",height:"88px"}}))))},ut=(0,O.ZP)(u.x)`
  font-weight: ${({theme:n})=>n.fontWeights.semiBold};

  span {
    font-size: ${({theme:n})=>n.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,pe=({sortQuery:n,handleSelectChange:s})=>{const{formatMessage:i}=(0,E.Z)(),l={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(ut,null,e.createElement(_.P,{size:"S",id:"sort-by-select",value:n,customizeContent:()=>i(l[n].selected),onChange:r=>{s({sort:r})},label:i({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(l).map(([r,d])=>e.createElement(ee.W,{key:r,value:r},i(d.option)))))};pe.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const mt=pe;var ft=a(14087),ht=a(80129),j=a.n(ht),ue=a(88767);const me="https://market-api.strapi.io",Pt=(n,s={})=>{const i=(0,g.lm)();return(0,ue.useQuery)(["marketplace","plugins",s],async()=>{try{const l=j().stringify(j().parse(s)),r=await fetch(`${me}/plugins?${l}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch{}return null},{onSuccess(){n&&n()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},vt=(n,s={})=>{const i=(0,g.lm)();return(0,ue.useQuery)(["marketplace","providers",s],async()=>{try{const l=j().stringify(j().parse(s)),r=await fetch(`${me}/providers?${l}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch{}return null},{onSuccess(){n&&n()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Et({npmPackageType:n,debouncedSearch:s,query:i,tabQuery:l}){const{notifyStatus:r}=(0,ft.G)(),{formatMessage:d}=(0,E.Z)(),o=d({id:"global.marketplace",defaultMessage:"Marketplace"}),c=()=>{r(d({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:o}))},m={page:i?.page||1,pageSize:i?.pageSize||24},{data:f,status:h}=Pt(c,{...l.plugin,pagination:m,search:s}),{data:b,status:p}=vt(c,{...l.provider,pagination:m,search:s}),R=n==="plugin"?f:b,T=n==="plugin"?h:p,[L,A]=(0,e.useState)({}),[$,F]=(0,e.useState)({});(0,e.useEffect)(()=>{T==="success"&&A(R.meta.collections),h==="success"&&F(f.meta.categories)},[f?.meta.categories,h,R?.meta.collections,T]);const{pagination:q}=T==="success"?R.meta:{};return{pluginsResponse:f,providersResponse:b,pluginsStatus:h,providersStatus:p,possibleCollections:L,possibleCategories:$,pagination:q}}const Mt=Et,fe=()=>{const{formatMessage:n}=(0,E.Z)(),{trackUsage:s}=(0,g.rS)(),i=(0,e.useRef)(s),l=(0,g.lm)(),[{query:r},d]=(0,g.Kx)(),o=(0,ke.Z)(r?.search,500)||"",{autoReload:c,dependencies:m,useYarn:f,strapiVersion:h}=(0,g.L7)(),b=be(),p=r?.npmPackageType||"plugin",[R,T]=(0,e.useState)({plugin:p==="plugin"?{...r}:{},provider:p==="provider"?{...r}:{}});(0,g.go)(),(0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{c||l({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[l,c]);const{pluginsResponse:L,providersResponse:A,pluginsStatus:$,providersStatus:F,possibleCollections:q,possibleCategories:kt,pagination:he}=Mt({npmPackageType:p,debouncedSearch:o,query:r,tabQuery:R});if(!b)return e.createElement(pt,null);const bt=Z=>{const x=Z===0?"plugin":"provider",Ct=R[x]&&Object.keys(R[x]).length;d(Ct?{...R[x],search:r?.search||"",npmPackageType:x,page:1}:{npmPackageType:x,collections:[],categories:[],sort:"name:asc",page:1,search:r?.search||""})},Pe=Z=>{d({...Z,page:1}),T(x=>({...x,[p]:{...x[p],...Z}}))},Rt=Z=>{d({[Z]:[],page:null},"remove"),T(x=>({...x,[p]:{}}))},ve=Object.keys(m);return e.createElement(y.A,null,e.createElement(v.o,null,e.createElement(Me.q,{title:n({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ge,{isOnline:b,npmPackageType:p}),e.createElement(k.D,null,e.createElement(D.v,{label:n({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(p),onTabChange:bt},e.createElement(P.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(C.m,null,e.createElement(C.O,null,n({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",$==="success"?`(${L.meta.pagination.total})`:"..."),e.createElement(C.O,null,n({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",F==="success"?`(${A.meta.pagination.total})`:"...")),e.createElement(u.x,{width:"25%"},e.createElement(Ee.w,{name:"searchbar",onClear:()=>d({search:"",page:1}),value:r?.search,onChange:Z=>d({search:Z.target.value,page:1}),clearLabel:n({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:n({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},n({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(P.k,{paddingBottom:4,gap:2},e.createElement(mt,{sortQuery:r?.sort||"name:asc",handleSelectChange:Pe}),e.createElement(Ie,{npmPackageType:p,possibleCollections:q,possibleCategories:kt,query:r||{},handleSelectChange:Pe,handleSelectClear:Rt})),e.createElement(V.n,null,e.createElement(V.x,null,e.createElement(ce,{npmPackages:L?.data,status:$,installedPackageNames:ve,useYarn:f,isInDevelopmentMode:c,npmPackageType:"plugin",strapiAppVersion:h,debouncedSearch:o})),e.createElement(V.x,null,e.createElement(ce,{npmPackages:A?.data,status:F,installedPackageNames:ve,useYarn:f,isInDevelopmentMode:c,npmPackageType:"provider",debouncedSearch:o})))),he&&e.createElement(lt,{pagination:he}),e.createElement(u.x,{paddingTop:8},e.createElement(Se,null)))))},yt=()=>{const n=(0,ye.v9)(Re._);return e.createElement(g.O4,{permissions:n.marketplace.main},e.createElement(fe,null))}},19306:(N,M,a)=>{a.d(M,{M:()=>y});var e=a(1565);const y=e.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:v})=>v.spaces[4]};
`},17034:(N,M,a)=>{a.d(M,{A:()=>P});var e=a(85893),y=a(1565),v=a(41580);const k=(0,y.ZP)(v.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:C})=>C?"auto 1fr":"1fr"};
`,D=(0,y.ZP)(v.x)`
  overflow-x: hidden;
`,P=({sideNav:C,children:u})=>(0,e.jsxs)(k,{hasSideNav:!!C,children:[C,(0,e.jsx)(D,{paddingBottom:10,children:u})]})},57750:(N,M,a)=>{a.d(M,{Z:()=>v});var e=a(85893);const y=k=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...k,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),v=y},69353:(N,M,a)=>{a.d(M,{Z:()=>v});var e=a(85893);const y=k=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...k,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),v=y}}]);
