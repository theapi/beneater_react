(this.webpackJsonpcpu=this.webpackJsonpcpu||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),o=(a(21),a(4)),u=a(5),s=a(8),l=a(7),m=a(1),d=a(2),v=function(){for(var e=[],t=0;t<=256;t++)e[t]=0;return e[0]=16388,e[1]=5128,e[16]=16388,e[17]=5128,e[18]=18432,e[19]=4608,e[32]=16388,e[33]=5128,e[34]=18432,e[35]=4128,e[36]=640,e[224]=16388,e[225]=5128,e[226]=272,e[240]=32768,e},f=function(e,t){return e>>t&1},b=function(e){return{hlt:f(e,15),mi:f(e,14),ri:f(e,13),ro:f(e,12),io:f(e,11),ii:f(e,10),ai:f(e,9),ao:f(e,8),eo:f(e,7),su:f(e,6),bi:f(e,5),oi:f(e,4),ce:f(e,3),co:f(e,2),j:f(e,1),jc:f(e,0)}},h=Object(d.b)({name:"controller",initialState:{romValue:0,cw:b(0),address:0},reducers:{buildControlWord:function(e,t){var a=v(),n=t.payload,c=n.regInstruction,r=n.ucount;Number.isInteger(c)||(c=0);var i=240&c;e.readAddress=i|r,e.romValue=a[e.readAddress],e.cw=b(e.romValue)}}}),g=h.actions.buildControlWord,E=function(e){return e.controller.romValue},j=function(e){return e.controller.cw},O=function(e){return e.controller.readAddress},p=h.reducer,w=(a(28),function(){var e=Object(m.c)(j),t=[];e.hlt&&t.push("Halt"),e.mi&&t.push("Memory address register in"),e.ri&&t.push("Random access memory in"),e.ro&&t.push("Random access memory out"),e.io&&t.push("Instruction in"),e.ii&&t.push("Instruction out"),e.ai&&t.push("A register in"),e.ao&&t.push("A register out"),e.eo&&t.push("ALU out"),e.su&&t.push("Subtract"),e.bi&&t.push("B register in"),e.oi&&t.push("Output register in"),e.ce&&t.push("Counter enable"),e.co&&t.push("Counter out"),e.j&&t.push("Jump"),e.jc&&t.push("Jump conditional");var a=t.join(", ");return c.a.createElement("div",{id:"controlWord",className:"module"},c.a.createElement("div",{className:"value"},a))}),k=a(14),N=(a(29),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e="off";return this.props.on&&(e="on"),c.a.createElement("div",{className:"led ".concat(e)})}}]),a}(c.a.Component)),y=Object(d.b)({name:"clock",initialState:{value:1},reducers:{tick:function(e,t){e.value=t.payload}}}),S=y.actions.tick,A=function(e){return e.clock.value},C=y.reducer,I=(a(30),function(e){var t=e.halt,a=Object(n.useState)(!1),r=Object(k.a)(a,2),i=r[0],o=r[1],u=Object(m.b)(),s=Object(m.c)(A);return Object(n.useEffect)((function(){var e=null;return i&&!t?e=setInterval((function(){u(S(!s))}),1e3):i||clearInterval(e),function(){return clearInterval(e)}}),[i,s,t,u]),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{className:"button button-primary button-primary-".concat(i?"active":"inactive"),onClick:function(){o(!i)}},i?"Pause":"Start"),c.a.createElement("button",{onClick:function(){return u(S(!s))}},s?"Go to negedge":"Go to posedge")),c.a.createElement("div",{id:"clock",className:"module"},c.a.createElement("div",{className:"name"},"Clock: "),c.a.createElement(N,{on:s})))}),B=Object(d.b)({name:"ucounter",initialState:{value:0},reducers:{reset:function(e){e.value=0},increment:function(e){e.value<4?e.value++:e.value=0}}}),R=B.actions,M=R.reset,J=R.increment,U=function(e){return e.ucounter.value},W=B.reducer,X=function(e){var t=e.reset,a=e.clk,r=Object(m.b)(),i=Object(m.c)(U);return Object(n.useEffect)((function(){!0===t&&r(M())}),[t,r]),Object(n.useEffect)((function(){!1===a&&r(J())}),[a,r]),c.a.createElement("div",{id:"microcode",className:"module"},c.a.createElement("div",{className:"name"},"Micro code counter: "),c.a.createElement("div",{className:"value"},i))},x=Object(d.b)({name:"bus",initialState:{value:0},reducers:{setBus:function(e,t){e.value=t.payload}}}),D=x.actions.setBus,V=function(e){return e.bus.value},Y=x.reducer,P=(a(31),function(){var e=Object(m.c)(V);return c.a.createElement("div",{id:"bus",className:"module"},c.a.createElement("div",{className:"name"},"Bus: "),c.a.createElement("div",{className:"value"},"(",e,")"))}),T=Object(d.b)({name:"programCounter",initialState:{value:0,reset:!1},reducers:{reset:function(e,t){t.payload?(e.value=0,e.reset=!0):e.reset=!1},increment:function(e){e.reset||(e.value<15?e.value++:e.value=0)},load:function(e,t){e.reset||(e.value=t.payload)}}}),F=T.actions,G=F.reset,H=F.increment,L=F.load,$=function(e){return e.programCounter.value},q=T.reducer,z=function(e){var t=e.reset,a=e.clk,r=e.inc,i=e.load,o=e.input,u=e.co,s=e.out,l=Object(m.b)(),d=Object(m.c)($);Object(n.useEffect)((function(){l(G(t))}),[t,l]),Object(n.useEffect)((function(){u&&s(d)}),[u,s,d]),Object(n.useEffect)((function(){r&&a&&l(H())}),[r,a,l]),Object(n.useEffect)((function(){i&&a&&l(L(o))}),[i,a,o,l]);var v="busDisconnected";return u&&(v="busOut"),c.a.createElement("div",{id:"pc",className:"module ".concat(v)},c.a.createElement("div",{className:"name"},"ProgramCounter: "),c.a.createElement("div",{className:"value"},d))},K=Object(d.b)({name:"ram",initialState:{value:0,address:0},reducers:{load:function(e,t){e.address=t.payload;var a=[30,47,224,240,0,0,0,0,0,0,0,0,0,0,28,14];e.value=a[e.address]}}}),Q=K.actions.load,Z=function(e){return e.ram.value},_=function(e){return e.ram.address},ee=K.reducer,te=function(e){var t=e.readAddress,a=e.ro,r=e.out,i=Object(m.b)(),o=Object(m.c)(Z),u=Object(m.c)(_);Object(n.useEffect)((function(){a&&r(o)}),[a,r,o]),Object(n.useEffect)((function(){i(Q(t))}),[t,i]);var s="busDisconnected";return a&&(s="busOut"),c.a.createElement("div",{id:"ram",className:"module ".concat(s)},c.a.createElement("div",{className:"name"},"RAM: "),c.a.createElement("div",{className:"value"},"0x",o.toString(16).toUpperCase(),"(",o,") [ addr: ",u," ]"))},ae=Object(d.b)({name:"register",initialState:{values:{regInstruction:0,regMar:0,regA:0,regB:0,regOut:0}},reducers:{reset:function(e){e.values={}},load:function(e,t){e.values[t.payload.key]=t.payload.value}}}),ne=ae.actions,ce=ne.reset,re=ne.load,ie=function(e){return e.register.values},oe=ae.reducer,ue=function(e){var t=e.reset,a=e.clk,r=e.input,i=e.id,o=e.name,u=e.oe,s=e.load,l=e.out,d=Object(m.b)(),v=Object(m.c)(ie),f=v[i]?v[i]:0,b=Object(n.useRef)(r);Object(n.useEffect)((function(){!0===t&&d(ce())}),[t,d]),Object(n.useEffect)((function(){u&&l(f)}),[u,f,l]),Object(n.useEffect)((function(){r&&(b.current=r)}),[r]),Object(n.useEffect)((function(){s&&a&&d(re({key:i,value:b.current}))}),[s,a,i,d]);var h="busDisconnected";return u&&(h="busOut"),c.a.createElement("div",{className:"module reg ".concat(h)},c.a.createElement("div",{className:"name"},o,": "),c.a.createElement("div",{className:"value"},"0x",f.toString(16).toUpperCase()," (",f,")"))},se=Object(d.b)({name:"alu",initialState:{value:0},reducers:{calculate:function(e,t){var a=t.payload,n=a.regA,c=a.regB,r=a.sub;Number.isInteger(n)||(n=0),Number.isInteger(c)||(c=0),e.value=r?n-c:n+c}}}),le=se.actions.calculate,me=function(e){return e.alu.value},de=se.reducer,ve=function(e){var t=e.regA,a=e.regB,r=e.sub,i=e.eo,o=e.out,u=Object(m.b)(),s=Object(m.c)(me);Object(n.useEffect)((function(){u(le({regA:t,regB:a,sub:r}))}),[t,a,r,u]),Object(n.useEffect)((function(){i&&o(s)}),[i,s,o]);var l="busDisconnected";return i&&(l="busOut"),c.a.createElement("div",{id:"alu",className:"module ".concat(l)},c.a.createElement("div",{className:"name"},"Sum: "),c.a.createElement("div",{className:"value"},s))},fe=function(e){var t=e.counter,a=e.ram,r=Object(m.b)(),i=Object(m.c)(E),o=Object(m.c)(O);return Object(n.useEffect)((function(){r(g({ucount:t,regInstruction:a}))}),[t,a,r]),c.a.createElement("div",{id:"controller",className:"module"},c.a.createElement("div",{className:"name"},"Control word: "),c.a.createElement("div",{className:"value"},i.toString(16).toUpperCase()," (addr: ",o,")"))},be=Object(d.b)({name:"cpu",initialState:{reset:!1},reducers:{reset:function(e,t){e.reset=t.payload}}}),he=(be.actions.reset,function(e){return e.cpu.reset}),ge=be.reducer,Ee=(a(32),function(){var e=Object(m.b)(),t=Object(m.c)(he),a=Object(m.c)(A),n=Object(m.c)(U),r=Object(m.c)(V),i=Object(m.c)(ie),o=Object(m.c)(j);return c.a.createElement("div",{id:"cpu"},c.a.createElement(I,{halt:o.hlt}),c.a.createElement(X,{clk:a,reset:t}),c.a.createElement(P,null),c.a.createElement(z,{clk:a,reset:t,inc:o.ce,load:o.j,input:r,co:o.co,out:function(t){return e(D(t))}}),c.a.createElement(ue,{name:"Memory Address Register",id:"regMar",clk:a,reset:t,load:o.mi,input:r,oe:!1}),c.a.createElement(te,{clk:a,readAddress:i.regMar,ro:o.ro,out:function(t){return e(D(t))}}),c.a.createElement(ue,{name:"Instruction Register",id:"regInstruction",clk:a,reset:t,load:o.ii,input:r,oe:o.io,out:function(t){return e(D(15&t))}}),c.a.createElement(fe,{counter:n,ram:i.regInstruction}),c.a.createElement(ue,{name:"A Register",id:"regA",clk:a,reset:t,load:o.ai,input:r,oe:o.ao,out:function(t){return e(D(t))}}),c.a.createElement(ue,{name:"B Register",id:"regB",clk:a,reset:t,load:o.bi,input:r,oe:!1}),c.a.createElement(ve,{regA:i.regA,regB:i.regB,sub:!1,eo:o.eo,out:function(t){return e(D(t))}}),c.a.createElement(ue,{name:"Output",id:"regOut",clk:a,reset:t,load:o.oi,input:r,oe:!1}))}),je=a(15),Oe=function(e){var t=e.name,a=e.clk,r=e.waveform,i=e.signal,o=Object(je.a)(e,["name","clk","waveform","signal"]),u=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=u.current.getContext("2d");r.update(e,i)}),[a,r]),c.a.createElement("div",{className:"waveform"},c.a.createElement("div",{className:"name"},t,":"),c.a.createElement("canvas",Object.assign({className:"canvas",ref:u},o)))},pe=(a(33),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#0000FF";Object(o.a)(this,e),this.startX=0,this.startY=0,this.currentX=0,this.currentY=0,this.width=10,this.height=15,this.strokeStyle=t,this.currentSignal=0}return Object(u.a)(e,[{key:"update",value:function(e,t){var a,n=this.currentX,c=this.currentY,r=this.currentX+this.width;this.currentX=r,a=this.currentSignal!==t?this.currentSignal?this.height:0:this.currentSignal?0:this.height,this.currentY=a,e.strokeStyle=this.strokeStyle,e.beginPath(),e.moveTo(n,c),e.lineTo(n,a),e.lineTo(r,a),e.stroke(),e.stroke(),this.currentSignal=t}}]),e}()),we=[];we.clk=new pe("#dc143c"),we.jc=new pe("#00004f"),we.j=new pe("#00004f"),we.ce=new pe("#051700"),we.co=new pe("#051700"),we.oi=new pe,we.bi=new pe,we.su=new pe,we.eo=new pe,we.ao=new pe,we.ai=new pe,we.ii=new pe("#051700"),we.io=new pe,we.ro=new pe("#051700"),we.ri=new pe,we.mi=new pe("#051700"),we.hlt=new pe("#000000");var ke=function(){var e=Object(m.c)(A),t=Object(m.c)(j);return c.a.createElement("div",{id:"visual"},c.a.createElement("div",{className:"logicAnalyser"},c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Clock",waveform:we.clk,signal:e}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Counter out [co ".concat(t.co,"]"),waveform:we.co,signal:t.co}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"MAR in [mi ".concat(t.mi,"]"),waveform:we.mi,signal:t.mi}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"RAM out [co ".concat(t.ro,"]"),waveform:we.ro,signal:t.ro}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Instruction in [ii ".concat(t.ii,"]"),waveform:we.ii,signal:t.ii}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Counter enable [ce ".concat(t.ce,"]"),waveform:we.ce,signal:t.ce}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Instruction out [io ".concat(t.io,"]"),waveform:we.io,signal:t.io}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Subtract [su ".concat(t.su,"]"),waveform:we.su,signal:t.su}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"A register in [ai ".concat(t.ai,"]"),waveform:we.ai,signal:t.ai}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"B register in [bi ".concat(t.bi,"]"),waveform:we.bi,signal:t.bi}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"ALU out [eo ".concat(t.eo,"]"),waveform:we.eo,signal:t.eo}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"A register out [ao ".concat(t.ao,"]"),waveform:we.ao,signal:t.ao}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Output register in [oi ".concat(t.oi,"]"),waveform:we.oi,signal:t.oi}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"RAM in [ri ".concat(t.ri,"]"),waveform:we.ri,signal:t.ri}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Jump [j ".concat(t.j,"]"),waveform:we.j,signal:t.j}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Jump conditional [jc ".concat(t.jc,"]"),waveform:we.jc,signal:t.jc}),c.a.createElement(Oe,{width:600,height:20,className:"canvas",clk:e,name:"Halt [hlt ".concat(t.hlt,"]"),waveform:we.hlt,signal:t.hlt})))},Ne=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"app"},c.a.createElement(Ee,null),c.a.createElement(ke,null),c.a.createElement(w,null))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=Object(d.a)({reducer:{cpu:ge,clock:C,bus:Y,register:oe,ucounter:W,programCounter:q,controller:p,alu:de,ram:ee}});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:ye},c.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.3e1b14a7.chunk.js.map