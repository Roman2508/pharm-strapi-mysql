"use strict";(self.webpackChunkpharm_strapi_mysql=self.webpackChunkpharm_strapi_mysql||[]).push([[9600],{92668:(K,v,t)=>{t.d(v,{Z:()=>c});var e=t(67294),a=t(15234),Z=t(79031),u=t(37909),k=t(75515),O=t(11047),l=t(80120),I=t(45697),n=t.n(I),L=t(86896),U=t(16550),D=t(41580),x=t(12028),C=t(20022);const B=({tokenName:o,onClickDelete:i,tokenType:h})=>{const{formatMessage:g}=(0,L.Z)(),{trackUsage:T}=(0,l.rS)(),[p,y]=(0,e.useState)(!1),m=()=>{y(!1),T("willDeleteToken",{tokenType:h}),i()};return e.createElement(D.x,{paddingLeft:1,onClick:d=>d.stopPropagation()},e.createElement(x.h,{onClick:()=>{y(!0)},label:g({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${o}`}),name:"delete",noBorder:!0,icon:e.createElement(C.Z,null)}),e.createElement(l.QH,{onToggleDialog:()=>y(!1),onConfirm:m,isOpen:p}))};B.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};const W=B;var F=t(8934),J=t(1565);const Q={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},z=(0,J.ZP)(l.rU)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,M=({tokenName:o,tokenId:i,buttonType:h,children:g})=>{const{formatMessage:T}=(0,L.Z)(),{location:{pathname:p}}=(0,U.k6)();return e.createElement(z,{to:`${p}/${i}`,title:T(Q[h],{target:o})},g)};M.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},M.defaultProps={buttonType:"edit"};const S=M,f=({tokenName:o,tokenId:i})=>e.createElement(S,{tokenName:o,tokenId:i,buttonType:"read"},e.createElement(F.Z,null));f.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const E=f;var $=t(4585);const A=({tokenName:o,tokenId:i})=>e.createElement(S,{tokenName:o,tokenId:i},e.createElement($.Z,null));A.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const H=A,R=({permissions:o,headers:i,contentType:h,isLoading:g,tokens:T,onConfirmDelete:p,tokenType:y})=>{const{canDelete:m,canUpdate:d,canRead:P}=o,b=m||d||P,[{query:V}]=(0,l.Kx)(),{formatMessage:N}=(0,L.Z)(),[,Y]=V?V.sort.split(":"):"ASC",{push:j,location:{pathname:w}}=(0,U.k6)(),{trackUsage:s}=(0,l.rS)(),X=T.sort((r,q)=>{const G=r.name.localeCompare(q.name);return Y==="DESC"?-G:G});return e.createElement(l.tM,{headers:i,contentType:h,rows:T,withBulkActions:b,isLoading:g,onConfirmDelete:p},e.createElement(a.p,null,X.map(r=>e.createElement(Z.Tr,{key:r.id,...(0,l.X7)({fn(){s("willEditTokenFromList",{tokenType:y}),j(`${w}/${r.id}`)},condition:d})},e.createElement(u.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(k.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},r.name)),e.createElement(u.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(k.Z,{textColor:"neutral800",ellipsis:!0},r.description)),e.createElement(u.Td,null,e.createElement(k.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.createdAt)}))),e.createElement(u.Td,null,r.lastUsedAt&&e.createElement(k.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(r.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:N({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]}))),b&&e.createElement(u.Td,null,e.createElement(O.k,{justifyContent:"end"},d&&e.createElement(H,{tokenName:r.name,tokenId:r.id}),!d&&P&&e.createElement(E,{tokenName:r.name,tokenId:r.id}),m&&e.createElement(W,{tokenName:r.name,onClickDelete:()=>p(r.id),tokenType:y})))))))};R.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},R.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const c=R},81966:(K,v,t)=>{t.d(v,{Z:()=>e,f:()=>a});const e="api-token",a="transfer-token"},68446:(K,v,t)=>{t.r(v),t.d(v,{default:()=>M});var e=t(67294),a=t(80120),Z=t(86706),u=t(36364),k=t(185),O=t(53979),l=t(49066),I=t(96315),n=t(80129),L=t.n(n),U=t(86896),D=t(88767),x=t(16550),C=t(81966),B=t(92668);const F=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Q=()=>{(0,a.go)();const S=(0,D.useQueryClient)(),{formatMessage:f}=(0,U.Z)(),E=(0,a.lm)(),$=(0,Z.v9)(u._),{allowedActions:{canCreate:A,canDelete:H,canUpdate:R,canRead:c}}=(0,a.ss)($.settings["transfer-tokens"]),{push:o}=(0,x.k6)(),{trackUsage:i}=(0,a.rS)(),{startSection:h}=(0,a.c1)(),g=(0,e.useRef)(h),{get:T,del:p}=(0,a.kY)();(0,e.useEffect)(()=>{g.current&&g.current("transferTokens")},[]),(0,e.useEffect)(()=>{o({search:L().stringify({sort:"name:ASC"},{encode:!1})})},[o]);const y=F.map(s=>({...s,metadatas:{...s.metadatas,label:f(s.metadatas.label)}})),{data:m,status:d,isFetching:P}=(0,D.useQuery)(["transfer-tokens"],async()=>{i("willAccessTokenList",{tokenType:C.f});const{data:{data:s}}=await T("/admin/transfer/tokens");return i("didAccessTokenList",{number:s.length,tokenType:C.f}),s},{enabled:c,onError(s){console.log("error",s),s?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?E({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):E({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),b=c&&(d!=="success"&&d!=="error"||d==="success"&&P),V=(0,D.useMutation)(async s=>{await p(`/admin/transfer/tokens/${s}`)},{async onSuccess(){await S.invalidateQueries(["transfer-tokens"])},onError(s){s?.response?.data?.data?E({type:"warning",message:s.response.data.data}):s?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?E({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):E({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),N=m&&m?.length>0,Y=c&&N,j=c&&!N&&!A,w=c&&!N&&A;return e.createElement(k.o,{"aria-busy":b},e.createElement(a.SL,{name:"Transfer Tokens"}),e.createElement(O.T,{title:f({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:f({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:A?e.createElement(a.Qj,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(I.Z,null),size:"S",onClick:()=>i("willAddTokenFromList",{tokenType:C.f}),to:"/settings/transfer-tokens/create"},f({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(l.D,null,!c&&e.createElement(a.ZF,null),Y&&e.createElement(B.Z,{permissions:{canRead:c,canDelete:H,canUpdate:R},headers:y,contentType:"trasfer-tokens",rows:m,isLoading:b,onConfirmDelete:s=>V.mutateAsync(s),tokens:m,tokenType:C.f}),w&&e.createElement(a.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(a.Qj,{variant:"secondary",startIcon:e.createElement(I.Z,null),to:"/settings/transfer-tokens/create"},f({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),j&&e.createElement(a.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},M=()=>{const S=(0,Z.v9)(u._);return e.createElement(a.O4,{permissions:S.settings["transfer-tokens"].main},e.createElement(Q,null))}}}]);
