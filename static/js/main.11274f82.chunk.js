(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(6),c=n.n(a),u=(n(13),n(7)),s=n(1),o=(n(14),n(2)),l=n(3),f=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;Object(o.a)(this,e),this.delta=t,this.currentTime=0,this.intervalId=0,this.prevTime=0,this.subscribers=new Set}return Object(l.a)(e,[{key:"addListener",value:function(e){this.subscribers.add(e)}},{key:"removeListener",value:function(e){this.subscribers.delete(e)}},{key:"start",value:function(){var e=this;this.prevTime=performance.now(),this.intervalId=window.setInterval((function(){return e.tick()}),this.delta/10)}},{key:"stop",value:function(){this.currentTime=0,window.clearInterval(this.intervalId),this.intervalId=0}},{key:"nextTick",value:function(e){var t=this;this.subscribers.add((function(n){e(n),t.subscribers.delete(e)}))}},{key:"tick",value:function(){var e=this,t=performance.now(),n=t-this.prevTime;n>this.delta&&(this.currentTime+=Math.floor(n/this.delta),this.subscribers.forEach((function(t){return t(e.currentTime)})),this.prevTime=t)}}]),e}()),h=function(){function e(t){var n=this;Object(o.a)(this,e),this.clock=t,this.a1=document.querySelector("#a1"),this.a15=document.querySelector("#a15"),this.a60=document.querySelector("#a60"),this.audios=[this.a1,this.a15,this.a60],this.clock.addListener((function(){return n.tick()}))}return Object(l.a)(e,[{key:"tick",value:function(){this.audios.forEach((function(e){e.pause()}))}},{key:"s1",value:function(){b(this.a1)}},{key:"s15",value:function(){b(this.a15)}},{key:"s60",value:function(){b(this.a60)}}]),e}();function b(e){e.currentTime=0,e.play()}f.start();var v=new h(f),m=[{time:60,cb:function(){return v.s60()}},{time:15,cb:function(){return v.s15()}},{time:1,cb:function(){return v.s1()}}];function d(e){return e<10?"0"+e:""+e}var k=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),l=o[0],h=o[1],b=Object(i.useState)(0),v=Object(s.a)(b,2),k=v[0],p=v[1],y=Object(i.useState)(0),j=Object(s.a)(y,2),O=j[0],E=j[1];Object(i.useEffect)((function(){var e=function(e){var t=e-k;if(l){a(t);var n,i=Object(u.a)(m);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(t%r.time===0){r.cb();break}}}catch(c){i.e(c)}finally{i.f()}t>=O&&0!==O&&N()}};return f.addListener(e),function(){return f.removeListener(e)}}),[a,l,k,O]);var w=Object(i.useRef)(null),S=Object(i.useCallback)((function(){h(!0),p(f.currentTime),w.current&&E(Number(w.current.value))}),[h,p,w]),T=Object(i.useCallback)(N,[h,a]),I=n%60,L=(n-I)/60,C=d(I),q=d(L);return r.a.createElement("div",null,r.a.createElement("div",{className:"timer-face"},r.a.createElement("h1",null,q,":",C)),r.a.createElement("div",{className:"buttons"},l?r.a.createElement("input",{type:"number",value:O-n}):r.a.createElement("input",{type:"number",ref:w,defaultValue:"0"}),r.a.createElement("button",{onClick:S},"Start"),r.a.createElement("button",{onClick:T},"Stop")));function N(){h(!1),a(0)}};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.11274f82.chunk.js.map