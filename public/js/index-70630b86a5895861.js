(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5105)}])},5105:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n=s(5893),a=s(9008),i=s.n(a),c=s(5675),l=s.n(c),h=s(7394),o=s(950),r=s(3929);let d=new o._k({supportedChainIds:[1,614]}),p=new r.zw({supportedChainIds:[1,614]});var g=s(7294),m=s(2515);function x(){let{active:e,account:t,library:s,connector:a,activate:c,deactivate:o}=(0,h.Ge)(),{transcript:r,listening:x,resetTranscript:f,browserSupportsSpeechRecognition:u}=(0,m.x6)(),w=(0,g.useRef)(),[v,j]=(0,g.useState)([]),[b,y]=(0,g.useState)(),[k,N]=(0,g.useState)(!1);async function S(e){try{await c("metamask"===e?d:p)}catch(e){console.log(e)}}async function q(e){e.preventDefault(),j(e=>[...e,{who:"user",value:b}]),y(""),w.current.value="",window.setTimeout(()=>{j(e=>[...e,{who:"bot",value:"is typing ..."}])},500);try{N(!0);let e=await fetch("https://api-hosted.graphlinq.io/15a0b765dc909a777cec9bc7b7ce3708524496653b9d717f1a454857dc67883a/chat?chat_id="+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:b})}).then(e=>e.json());j(t=>{let s=[...t];return s.pop(),[...s,{who:"bot",value:e.response}]});let s=new SpeechSynthesisUtterance(e.response);speechSynthesis.speak(s)}catch(t){j(e=>{let t=[...e];return t.pop(),[...t,{who:"bot",value:"I am currently not available, please try again later."}]});let e=new SpeechSynthesisUtterance("I am currently not available, please try again later.");speechSynthesis.speak(e)}finally{N(!1)}}async function C(e){y(e.target.value)}return(0,g.useEffect)(()=>{y(r)},[r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"GraphLinq Chat"}),(0,n.jsx)("meta",{name:"description",content:"GraphLinq Chat"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"})]}),(0,n.jsxs)("div",{className:"glq-home",children:[(0,n.jsx)(l(),{src:"https://i.imgur.com/8rtUmzZ.png",width:"500",height:"57",className:"glq-home-logo"}),e?(0,n.jsxs)("div",{className:"glq-home-chat",children:[(0,n.jsx)("div",{className:"glq-home-chat-list",children:[...v].reverse().map(e=>(0,n.jsxs)("div",{className:"glq-home-chat-response","data-who":e.who,children:[(0,n.jsx)("div",{className:"glq-home-chat-response-who",children:"bot"===e.who?(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,n.jsx)("g",{children:(0,n.jsx)("rect",{fill:"none",height:"24",width:"24",y:"0"})}),(0,n.jsx)("g",{children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,19L6,19V7h12V19z M9,13c-0.83,0-1.5-0.67-1.5-1.5 S8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13z M16.5,11.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S14.17,10,15,10 S16.5,10.67,16.5,11.5z M8,15h8v2H8V15z"})})})]}):(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,n.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,n.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})]})}),(0,n.jsx)("div",{className:"glq-home-chat-response-value",children:e.value})]},e.value))}),(0,n.jsxs)("form",{className:"glq-home-chat-actions",onSubmit:q,children:[(0,n.jsx)("input",{type:"text",placeholder:"What's your question ?",onChange:C,ref:w,value:b}),(0,n.jsx)("button",{type:"submit",className:"bt",disabled:""===b||k,children:"Ask me"}),(0,n.jsx)("div",{className:"bt mike",disabled:k,"data-active":x,onClick:x?m.ZP.stopListening:m.ZP.startListening,children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,n.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,n.jsx)("rect",{fill:"none",height:"24",width:"24"})]}),(0,n.jsxs)("g",{children:[(0,n.jsx)("g",{}),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"}),(0,n.jsx)("path",{d:"M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"})]})]})]})})]})]}):(0,n.jsxs)("div",{className:"glq-home-intro",children:[(0,n.jsxs)("div",{className:"glq-home-title dg",children:["Introducing ",(0,n.jsx)("span",{children:"GraphLinq Chat"})]}),(0,n.jsx)("div",{className:"glq-home-desc",children:"Your Personal Assistant with the Power of OpenAI, Graphlinq Engine & Speech-to-Text"}),(0,n.jsxs)("div",{className:"glq-home-connect",children:[(0,n.jsx)("button",{className:"bt metamask",onClick:()=>S("metamask"),children:"Connect to MetaMask"}),(0,n.jsx)("button",{className:"bt walletconnect",onClick:()=>S("walletconnect"),children:"Connect to WalletConnect"})]})]})]})]})}}},function(e){e.O(0,[103,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);