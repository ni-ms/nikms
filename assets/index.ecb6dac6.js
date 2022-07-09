const Il=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};Il();function oe(){}function Ds(i){return i()}function ea(){return Object.create(null)}function wr(i){i.forEach(Ds)}function Fl(i){return typeof i=="function"}function ci(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function Nl(i){return Object.keys(i).length===0}function Ot(i,t){i.appendChild(t)}function Qt(i,t,e){i.insertBefore(t,e||null)}function Zt(i){i.parentNode.removeChild(i)}function Nt(i){return document.createElement(i)}function Rs(i){return document.createTextNode(i)}function ge(){return Rs(" ")}function At(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function Ul(i){return Array.from(i.childNodes)}function Ol(i,t){t=""+t,i.wholeText!==t&&(i.data=t)}function wn(i,t,e,n){e===null?i.style.removeProperty(t):i.style.setProperty(t,e,n?"important":"")}let Ti;function ki(i){Ti=i}function Bl(){if(!Ti)throw new Error("Function called outside component initialization");return Ti}function Gl(i){Bl().$$.on_mount.push(i)}const _i=[],go=[],dr=[],na=[],Vl=Promise.resolve();let bo=!1;function Hl(){bo||(bo=!0,Vl.then(Ps))}function wo(i){dr.push(i)}const Dr=new Set;let Bi=0;function Ps(){const i=Ti;do{for(;Bi<_i.length;){const t=_i[Bi];Bi++,ki(t),Wl(t.$$)}for(ki(null),_i.length=0,Bi=0;go.length;)go.pop()();for(let t=0;t<dr.length;t+=1){const e=dr[t];Dr.has(e)||(Dr.add(e),e())}dr.length=0}while(_i.length);for(;na.length;)na.pop()();bo=!1,Dr.clear(),ki(i)}function Wl(i){if(i.fragment!==null){i.update(),wr(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(wo)}}const hr=new Set;let jl;function tn(i,t){i&&i.i&&(hr.delete(i),i.i(t))}function gn(i,t,e,n){if(i&&i.o){if(hr.has(i))return;hr.add(i),jl.c.push(()=>{hr.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}}function bn(i){i&&i.c()}function en(i,t,e,n){const{fragment:r,on_mount:o,on_destroy:s,after_update:a}=i.$$;r&&r.m(t,e),n||wo(()=>{const l=o.map(Ds).filter(Fl);s?s.push(...l):wr(l),i.$$.on_mount=[]}),a.forEach(wo)}function nn(i,t){const e=i.$$;e.fragment!==null&&(wr(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function ql(i,t){i.$$.dirty[0]===-1&&(_i.push(i),Hl(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function di(i,t,e,n,r,o,s,a=[-1]){const l=Ti;ki(i);const c=i.$$={fragment:null,ctx:null,props:o,update:oe,not_equal:r,bound:ea(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:ea(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};s&&s(c.root);let d=!1;if(c.ctx=e?e(i,t.props||{},(h,u,...m)=>{const g=m.length?m[0]:u;return c.ctx&&r(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),d&&ql(i,h)),u}):[],c.update(),d=!0,wr(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const h=Ul(t.target);c.fragment&&c.fragment.l(h),h.forEach(Zt)}else c.fragment&&c.fragment.c();t.intro&&tn(i.$$.fragment),en(i,t.target,t.anchor,t.customElement),Ps()}ki(l)}class hi{$destroy(){nn(this,1),this.$destroy=oe}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!Nl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var zs={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Do={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Xl=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],fr={CSS:{},springs:{}};function Ge(i,t,e){return Math.min(Math.max(i,t),e)}function Ei(i,t){return i.indexOf(t)>-1}function Rr(i,t){return i.apply(null,t)}var dt={arr:function(i){return Array.isArray(i)},obj:function(i){return Ei(Object.prototype.toString.call(i),"Object")},pth:function(i){return dt.obj(i)&&i.hasOwnProperty("totalLength")},svg:function(i){return i instanceof SVGElement},inp:function(i){return i instanceof HTMLInputElement},dom:function(i){return i.nodeType||dt.svg(i)},str:function(i){return typeof i=="string"},fnc:function(i){return typeof i=="function"},und:function(i){return typeof i=="undefined"},nil:function(i){return dt.und(i)||i===null},hex:function(i){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i)},rgb:function(i){return/^rgb/.test(i)},hsl:function(i){return/^hsl/.test(i)},col:function(i){return dt.hex(i)||dt.rgb(i)||dt.hsl(i)},key:function(i){return!zs.hasOwnProperty(i)&&!Do.hasOwnProperty(i)&&i!=="targets"&&i!=="keyframes"}};function Is(i){var t=/\(([^)]+)\)/.exec(i);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function Fs(i,t){var e=Is(i),n=Ge(dt.und(e[0])?1:e[0],.1,100),r=Ge(dt.und(e[1])?100:e[1],.1,100),o=Ge(dt.und(e[2])?10:e[2],.1,100),s=Ge(dt.und(e[3])?0:e[3],.1,100),a=Math.sqrt(r/n),l=o/(2*Math.sqrt(r*n)),c=l<1?a*Math.sqrt(1-l*l):0,d=1,h=l<1?(l*a+-s)/c:-s+a;function u(g){var f=t?t*g/1e3:g;return l<1?f=Math.exp(-f*l*a)*(d*Math.cos(c*f)+h*Math.sin(c*f)):f=(d+h*f)*Math.exp(-f*a),g===0||g===1?g:1-f}function m(){var g=fr.springs[i];if(g)return g;for(var f=1/6,p=0,b=0;;)if(p+=f,u(p)===1){if(b++,b>=16)break}else b=0;var y=p*f*1e3;return fr.springs[i]=y,y}return t?u:m}function Yl(i){return i===void 0&&(i=10),function(t){return Math.ceil(Ge(t,1e-6,1)*i)*(1/i)}}var $l=function(){var i=11,t=1/(i-1);function e(d,h){return 1-3*h+3*d}function n(d,h){return 3*h-6*d}function r(d){return 3*d}function o(d,h,u){return((e(h,u)*d+n(h,u))*d+r(h))*d}function s(d,h,u){return 3*e(h,u)*d*d+2*n(h,u)*d+r(h)}function a(d,h,u,m,g){var f,p,b=0;do p=h+(u-h)/2,f=o(p,m,g)-d,f>0?u=p:h=p;while(Math.abs(f)>1e-7&&++b<10);return p}function l(d,h,u,m){for(var g=0;g<4;++g){var f=s(h,u,m);if(f===0)return h;var p=o(h,u,m)-d;h-=p/f}return h}function c(d,h,u,m){if(!(0<=d&&d<=1&&0<=u&&u<=1))return;var g=new Float32Array(i);if(d!==h||u!==m)for(var f=0;f<i;++f)g[f]=o(f*t,d,u);function p(b){for(var y=0,S=1,k=i-1;S!==k&&g[S]<=b;++S)y+=t;--S;var M=(b-g[S])/(g[S+1]-g[S]),A=y+M*t,D=s(A,d,u);return D>=.001?l(b,A,d,u):D===0?A:a(b,y,y+t,d,u)}return function(b){return d===h&&u===m||b===0||b===1?b:o(p(b),h,m)}}return c}(),Ns=function(){var i={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,o=4;n<((r=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var o=Ge(n,1,10),s=Ge(r,.1,2);return function(a){return a===0||a===1?a:-o*Math.pow(2,10*(a-1))*Math.sin((a-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},e=["Quad","Cubic","Quart","Quint","Expo"];return e.forEach(function(n,r){t[n]=function(){return function(o){return Math.pow(o,r+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];i["easeIn"+n]=r,i["easeOut"+n]=function(o,s){return function(a){return 1-r(o,s)(1-a)}},i["easeInOut"+n]=function(o,s){return function(a){return a<.5?r(o,s)(a*2)/2:1-r(o,s)(a*-2+2)/2}},i["easeOutIn"+n]=function(o,s){return function(a){return a<.5?(1-r(o,s)(1-a*2))/2:(r(o,s)(a*2-1)+1)/2}}}),i}();function Ro(i,t){if(dt.fnc(i))return i;var e=i.split("(")[0],n=Ns[e],r=Is(i);switch(e){case"spring":return Fs(i,t);case"cubicBezier":return Rr($l,r);case"steps":return Rr(Yl,r);default:return Rr(n,r)}}function Us(i){try{var t=document.querySelectorAll(i);return t}catch{return}}function xr(i,t){for(var e=i.length,n=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<e;o++)if(o in i){var s=i[o];t.call(n,s,o,i)&&r.push(s)}return r}function vr(i){return i.reduce(function(t,e){return t.concat(dt.arr(e)?vr(e):e)},[])}function ia(i){return dt.arr(i)?i:(dt.str(i)&&(i=Us(i)||i),i instanceof NodeList||i instanceof HTMLCollection?[].slice.call(i):[i])}function Po(i,t){return i.some(function(e){return e===t})}function zo(i){var t={};for(var e in i)t[e]=i[e];return t}function xo(i,t){var e=zo(i);for(var n in i)e[n]=t.hasOwnProperty(n)?t[n]:i[n];return e}function yr(i,t){var e=zo(i);for(var n in t)e[n]=dt.und(i[n])?t[n]:i[n];return e}function Zl(i){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);return t?"rgba("+t[1]+",1)":i}function Jl(i){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=i.replace(t,function(a,l,c,d){return l+l+c+c+d+d}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),r=parseInt(n[1],16),o=parseInt(n[2],16),s=parseInt(n[3],16);return"rgba("+r+","+o+","+s+",1)"}function Kl(i){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),e=parseInt(t[1],10)/360,n=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,o=t[4]||1;function s(u,m,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?u+(m-u)*6*g:g<1/2?m:g<2/3?u+(m-u)*(2/3-g)*6:u}var a,l,c;if(n==0)a=l=c=r;else{var d=r<.5?r*(1+n):r+n-r*n,h=2*r-d;a=s(h,d,e+1/3),l=s(h,d,e),c=s(h,d,e-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+o+")"}function Ql(i){if(dt.rgb(i))return Zl(i);if(dt.hex(i))return Jl(i);if(dt.hsl(i))return Kl(i)}function on(i){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(i);if(t)return t[1]}function tc(i){if(Ei(i,"translate")||i==="perspective")return"px";if(Ei(i,"rotate")||Ei(i,"skew"))return"deg"}function vo(i,t){return dt.fnc(i)?i(t.target,t.id,t.total):i}function Ve(i,t){return i.getAttribute(t)}function Io(i,t,e){var n=on(t);if(Po([e,"deg","rad","turn"],n))return t;var r=fr.CSS[t+e];if(!dt.und(r))return r;var o=100,s=document.createElement(i.tagName),a=i.parentNode&&i.parentNode!==document?i.parentNode:document.body;a.appendChild(s),s.style.position="absolute",s.style.width=o+e;var l=o/s.offsetWidth;a.removeChild(s);var c=l*parseFloat(t);return fr.CSS[t+e]=c,c}function Os(i,t,e){if(t in i.style){var n=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=i.style[t]||getComputedStyle(i).getPropertyValue(n)||"0";return e?Io(i,r,e):r}}function Fo(i,t){if(dt.dom(i)&&!dt.inp(i)&&(!dt.nil(Ve(i,t))||dt.svg(i)&&i[t]))return"attribute";if(dt.dom(i)&&Po(Xl,t))return"transform";if(dt.dom(i)&&t!=="transform"&&Os(i,t))return"css";if(i[t]!=null)return"object"}function Bs(i){if(!!dt.dom(i)){for(var t=i.style.transform||"",e=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=e.exec(t);)n.set(r[1],r[2]);return n}}function ec(i,t,e,n){var r=Ei(t,"scale")?1:0+tc(t),o=Bs(i).get(t)||r;return e&&(e.transforms.list.set(t,o),e.transforms.last=t),n?Io(i,o,n):o}function No(i,t,e,n){switch(Fo(i,t)){case"transform":return ec(i,t,n,e);case"css":return Os(i,t,e);case"attribute":return Ve(i,t);default:return i[t]||0}}function Uo(i,t){var e=/^(\*=|\+=|-=)/.exec(i);if(!e)return i;var n=on(i)||0,r=parseFloat(t),o=parseFloat(i.replace(e[0],""));switch(e[0][0]){case"+":return r+o+n;case"-":return r-o+n;case"*":return r*o+n}}function Gs(i,t){if(dt.col(i))return Ql(i);if(/\s/g.test(i))return i;var e=on(i),n=e?i.substr(0,i.length-e.length):i;return t?n+t:n}function Oo(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function nc(i){return Math.PI*2*Ve(i,"r")}function ic(i){return Ve(i,"width")*2+Ve(i,"height")*2}function rc(i){return Oo({x:Ve(i,"x1"),y:Ve(i,"y1")},{x:Ve(i,"x2"),y:Ve(i,"y2")})}function Vs(i){for(var t=i.points,e=0,n,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);r>0&&(e+=Oo(n,o)),n=o}return e}function oc(i){var t=i.points;return Vs(i)+Oo(t.getItem(t.numberOfItems-1),t.getItem(0))}function Hs(i){if(i.getTotalLength)return i.getTotalLength();switch(i.tagName.toLowerCase()){case"circle":return nc(i);case"rect":return ic(i);case"line":return rc(i);case"polyline":return Vs(i);case"polygon":return oc(i)}}function ac(i){var t=Hs(i);return i.setAttribute("stroke-dasharray",t),t}function sc(i){for(var t=i.parentNode;dt.svg(t)&&dt.svg(t.parentNode);)t=t.parentNode;return t}function Ws(i,t){var e=t||{},n=e.el||sc(i),r=n.getBoundingClientRect(),o=Ve(n,"viewBox"),s=r.width,a=r.height,l=e.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function lc(i,t){var e=dt.str(i)?Us(i)[0]:i,n=t||100;return function(r){return{property:r,el:e,svg:Ws(e),totalLength:Hs(e)*(n/100)}}}function cc(i,t,e){function n(d){d===void 0&&(d=0);var h=t+d>=1?t+d:0;return i.el.getPointAtLength(h)}var r=Ws(i.el,i.svg),o=n(),s=n(-1),a=n(1),l=e?1:r.w/r.vW,c=e?1:r.h/r.vH;switch(i.property){case"x":return(o.x-r.x)*l;case"y":return(o.y-r.y)*c;case"angle":return Math.atan2(a.y-s.y,a.x-s.x)*180/Math.PI}}function ra(i,t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Gs(dt.pth(i)?i.totalLength:i,t)+"";return{original:n,numbers:n.match(e)?n.match(e).map(Number):[0],strings:dt.str(i)||t?n.split(e):[]}}function Bo(i){var t=i?vr(dt.arr(i)?i.map(ia):ia(i)):[];return xr(t,function(e,n,r){return r.indexOf(e)===n})}function js(i){var t=Bo(i);return t.map(function(e,n){return{target:e,id:n,total:t.length,transforms:{list:Bs(e)}}})}function dc(i,t){var e=zo(t);if(/^spring/.test(e.easing)&&(e.duration=Fs(e.easing)),dt.arr(i)){var n=i.length,r=n===2&&!dt.obj(i[0]);r?i={value:i}:dt.fnc(t.duration)||(e.duration=t.duration/n)}var o=dt.arr(i)?i:[i];return o.map(function(s,a){var l=dt.obj(s)&&!dt.pth(s)?s:{value:s};return dt.und(l.delay)&&(l.delay=a?0:t.delay),dt.und(l.endDelay)&&(l.endDelay=a===o.length-1?t.endDelay:0),l}).map(function(s){return yr(s,e)})}function hc(i){for(var t=xr(vr(i.map(function(o){return Object.keys(o)})),function(o){return dt.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),e={},n=function(o){var s=t[o];e[s]=i.map(function(a){var l={};for(var c in a)dt.key(c)?c==s&&(l.value=a[c]):l[c]=a[c];return l})},r=0;r<t.length;r++)n(r);return e}function uc(i,t){var e=[],n=t.keyframes;n&&(t=yr(hc(n),t));for(var r in t)dt.key(r)&&e.push({name:r,tweens:dc(t[r],i)});return e}function pc(i,t){var e={};for(var n in i){var r=vo(i[n],t);dt.arr(r)&&(r=r.map(function(o){return vo(o,t)}),r.length===1&&(r=r[0])),e[n]=r}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}function fc(i,t){var e;return i.tweens.map(function(n){var r=pc(n,t),o=r.value,s=dt.arr(o)?o[1]:o,a=on(s),l=No(t.target,i.name,a,t),c=e?e.to.original:l,d=dt.arr(o)?o[0]:c,h=on(d)||on(l),u=a||h;return dt.und(s)&&(s=c),r.from=ra(d,u),r.to=ra(Uo(s,d),u),r.start=e?e.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Ro(r.easing,r.duration),r.isPath=dt.pth(o),r.isPathTargetInsideSVG=r.isPath&&dt.svg(t.target),r.isColor=dt.col(r.from.original),r.isColor&&(r.round=1),e=r,r})}var qs={css:function(i,t,e){return i.style[t]=e},attribute:function(i,t,e){return i.setAttribute(t,e)},object:function(i,t,e){return i[t]=e},transform:function(i,t,e,n,r){if(n.list.set(t,e),t===n.last||r){var o="";n.list.forEach(function(s,a){o+=a+"("+s+") "}),i.style.transform=o}}};function Xs(i,t){var e=js(i);e.forEach(function(n){for(var r in t){var o=vo(t[r],n),s=n.target,a=on(o),l=No(s,r,a,n),c=a||on(l),d=Uo(Gs(o,c),l),h=Fo(s,r);qs[h](s,r,d,n.transforms,!0)}})}function mc(i,t){var e=Fo(i.target,t.name);if(e){var n=fc(t,i),r=n[n.length-1];return{type:e,property:t.name,animatable:i,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function gc(i,t){return xr(vr(i.map(function(e){return t.map(function(n){return mc(e,n)})})),function(e){return!dt.und(e)})}function Ys(i,t){var e=i.length,n=function(o){return o.timelineOffset?o.timelineOffset:0},r={};return r.duration=e?Math.max.apply(Math,i.map(function(o){return n(o)+o.duration})):t.duration,r.delay=e?Math.min.apply(Math,i.map(function(o){return n(o)+o.delay})):t.delay,r.endDelay=e?r.duration-Math.max.apply(Math,i.map(function(o){return n(o)+o.duration-o.endDelay})):t.endDelay,r}var oa=0;function bc(i){var t=xo(zs,i),e=xo(Do,i),n=uc(e,i),r=js(i.targets),o=gc(r,n),s=Ys(o,e),a=oa;return oa++,yr(t,{id:a,children:[],animatables:r,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var ke=[],$s=function(){var i;function t(){!i&&(!aa()||!Ht.suspendWhenDocumentHidden)&&ke.length>0&&(i=requestAnimationFrame(e))}function e(r){for(var o=ke.length,s=0;s<o;){var a=ke[s];a.paused?(ke.splice(s,1),o--):(a.tick(r),s++)}i=s>0?requestAnimationFrame(e):void 0}function n(){!Ht.suspendWhenDocumentHidden||(aa()?i=cancelAnimationFrame(i):(ke.forEach(function(r){return r._onDocumentVisibility()}),$s()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",n),t}();function aa(){return!!document&&document.hidden}function Ht(i){i===void 0&&(i={});var t=0,e=0,n=0,r,o=0,s=null;function a(y){var S=window.Promise&&new Promise(function(k){return s=k});return y.finished=S,S}var l=bc(i);a(l);function c(){var y=l.direction;y!=="alternate"&&(l.direction=y!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(S){return S.reversed=l.reversed})}function d(y){return l.reversed?l.duration-y:y}function h(){t=0,e=d(l.currentTime)*(1/Ht.speed)}function u(y,S){S&&S.seek(y-S.timelineOffset)}function m(y){if(l.reversePlayback)for(var k=o;k--;)u(y,r[k]);else for(var S=0;S<o;S++)u(y,r[S])}function g(y){for(var S=0,k=l.animations,M=k.length;S<M;){var A=k[S],D=A.animatable,x=A.tweens,E=x.length-1,P=x[E];E&&(P=xr(x,function(q){return y<q.end})[0]||P);for(var z=Ge(y-P.start-P.delay,0,P.duration)/P.duration,Q=isNaN(z)?1:P.easing(z),$=P.to.strings,L=P.round,W=[],O=P.to.numbers.length,G=void 0,j=0;j<O;j++){var F=void 0,H=P.to.numbers[j],Z=P.from.numbers[j]||0;P.isPath?F=cc(P.value,Q*H,P.isPathTargetInsideSVG):F=Z+Q*(H-Z),L&&(P.isColor&&j>2||(F=Math.round(F*L)/L)),W.push(F)}var N=$.length;if(!N)G=W[0];else{G=$[0];for(var Y=0;Y<N;Y++){$[Y];var lt=$[Y+1],ht=W[Y];isNaN(ht)||(lt?G+=ht+lt:G+=ht+" ")}}qs[A.type](D.target,A.property,G,D.transforms),A.currentValue=G,S++}}function f(y){l[y]&&!l.passThrough&&l[y](l)}function p(){l.remaining&&l.remaining!==!0&&l.remaining--}function b(y){var S=l.duration,k=l.delay,M=S-l.endDelay,A=d(y);l.progress=Ge(A/S*100,0,100),l.reversePlayback=A<l.currentTime,r&&m(A),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),A<=k&&l.currentTime!==0&&g(0),(A>=M&&l.currentTime!==S||!S)&&g(S),A>k&&A<M?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),g(A)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Ge(A,0,S),l.began&&f("update"),y>=S&&(e=0,p(),l.remaining?(t=n,f("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(s(),a(l)))))}return l.reset=function(){var y=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=y==="reverse",l.remaining=l.loop,r=l.children,o=r.length;for(var S=o;S--;)l.children[S].reset();(l.reversed&&l.loop!==!0||y==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(y,S){return Xs(y,S),l},l.tick=function(y){n=y,t||(t=n),b((n+(e-t))*Ht.speed)},l.seek=function(y){b(d(y))},l.pause=function(){l.paused=!0,h()},l.play=function(){!l.paused||(l.completed&&l.reset(),l.paused=!1,ke.push(l),h(),$s())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(y){var S=Bo(y);Zs(S,l)},l.reset(),l.autoplay&&l.play(),l}function sa(i,t){for(var e=t.length;e--;)Po(i,t[e].animatable.target)&&t.splice(e,1)}function Zs(i,t){var e=t.animations,n=t.children;sa(i,e);for(var r=n.length;r--;){var o=n[r],s=o.animations;sa(i,s),!s.length&&!o.children.length&&n.splice(r,1)}!e.length&&!n.length&&t.pause()}function wc(i){for(var t=Bo(i),e=ke.length;e--;){var n=ke[e];Zs(t,n)}}function xc(i,t){t===void 0&&(t={});var e=t.direction||"normal",n=t.easing?Ro(t.easing):null,r=t.grid,o=t.axis,s=t.from||0,a=s==="first",l=s==="center",c=s==="last",d=dt.arr(i),h=parseFloat(d?i[0]:i),u=d?parseFloat(i[1]):0,m=on(d?i[1]:i)||0,g=t.start||0+(d?h:0),f=[],p=0;return function(b,y,S){if(a&&(s=0),l&&(s=(S-1)/2),c&&(s=S-1),!f.length){for(var k=0;k<S;k++){if(!r)f.push(Math.abs(s-k));else{var M=l?(r[0]-1)/2:s%r[0],A=l?(r[1]-1)/2:Math.floor(s/r[0]),D=k%r[0],x=Math.floor(k/r[0]),E=M-D,P=A-x,z=Math.sqrt(E*E+P*P);o==="x"&&(z=-E),o==="y"&&(z=-P),f.push(z)}p=Math.max.apply(Math,f)}n&&(f=f.map(function($){return n($/p)*p})),e==="reverse"&&(f=f.map(function($){return o?$<0?$*-1:-$:Math.abs(p-$)}))}var Q=d?(u-h)/p:h;return g+Q*(Math.round(f[y]*100)/100)+m}}function vc(i){i===void 0&&(i={});var t=Ht(i);return t.duration=0,t.add=function(e,n){var r=ke.indexOf(t),o=t.children;r>-1&&ke.splice(r,1);function s(u){u.passThrough=!0}for(var a=0;a<o.length;a++)s(o[a]);var l=yr(e,xo(Do,i));l.targets=l.targets||i.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=dt.und(n)?c:Uo(n,c),s(t),t.seek(l.timelineOffset);var d=Ht(l);s(d),o.push(d);var h=Ys(o,i);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}Ht.version="3.2.1";Ht.speed=1;Ht.suspendWhenDocumentHidden=!0;Ht.running=ke;Ht.remove=wc;Ht.get=No;Ht.set=Xs;Ht.convertPx=Io;Ht.path=lc;Ht.setDashoffset=ac;Ht.stagger=xc;Ht.timeline=vc;Ht.easing=Ro;Ht.penner=Ns;Ht.random=function(i,t){return Math.floor(Math.random()*(t-i+1))+i};function yc(i){let t,e,n,r,o;return{c(){t=Nt("div"),e=Nt("div"),n=ge(),r=Nt("h1"),o=Rs(i[0]),At(e,"class","card-zoom-image  svelte-fk8l2j"),wn(e,"background-image","url('"+i[1]+"')"),At(r,"class","card-zoom-text hover:underline decoration-indigo-500 svelte-fk8l2j"),At(t,"class","card-zoom  svelte-fk8l2j")},m(s,a){Qt(s,t,a),Ot(t,e),Ot(t,n),Ot(t,r),Ot(r,o)},p(s,[a]){a&2&&wn(e,"background-image","url('"+s[1]+"')"),a&1&&Ol(o,s[0])},i:oe,o:oe,d(s){s&&Zt(t)}}}function _c(i,t,e){let{text:n}=t,{image:r}=t;return i.$$set=o=>{"text"in o&&e(0,n=o.text),"image"in o&&e(1,r=o.image)},[n,r]}class Gi extends hi{constructor(t){super(),di(this,t,_c,yc,ci,{text:0,image:1})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="141",Mc=0,la=1,Sc=2,Js=1,Ks=2,Mi=3,Ai=0,Ae=1,He=2,kc=1,xn=0,ii=1,ca=2,da=3,ha=4,Ec=5,ei=100,Tc=101,Ac=102,ua=103,pa=104,Cc=200,Lc=201,Dc=202,Rc=203,Qs=204,tl=205,Pc=206,zc=207,Ic=208,Fc=209,Nc=210,Uc=0,Oc=1,Bc=2,yo=3,Gc=4,Vc=5,Hc=6,Wc=7,_r=0,jc=1,qc=2,an=0,Xc=1,Yc=2,$c=3,Zc=4,Jc=5,el=300,oi=301,ai=302,_o=303,Mo=304,Mr=306,So=1e3,Ee=1001,ko=1002,de=1003,fa=1004,ma=1005,ve=1006,Kc=1007,Sr=1008,Fn=1009,Qc=1010,td=1011,nl=1012,ed=1013,Cn=1014,Ln=1015,Ci=1016,nd=1017,id=1018,ri=1020,rd=1021,od=1022,Te=1023,ad=1024,sd=1025,Pn=1026,si=1027,ld=1028,cd=1029,dd=1030,hd=1031,ud=1033,Pr=33776,zr=33777,Ir=33778,Fr=33779,ga=35840,ba=35841,wa=35842,xa=35843,pd=36196,va=37492,ya=37496,_a=37808,Ma=37809,Sa=37810,ka=37811,Ea=37812,Ta=37813,Aa=37814,Ca=37815,La=37816,Da=37817,Ra=37818,Pa=37819,za=37820,Ia=37821,Fa=36492,Nn=3e3,Bt=3001,fd=3200,md=3201,ui=0,gd=1,rn="srgb",Dn="srgb-linear",Nr=7680,bd=519,Na=35044,Ua="300 es",Eo=1035;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}}const Kt=[];for(let i=0;i<256;i++)Kt[i]=(i<16?"0":"")+i.toString(16);const Ur=Math.PI/180,To=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[t&255]+Kt[t>>8&255]+"-"+Kt[t>>16&15|64]+Kt[t>>24&255]+"-"+Kt[e&63|128]+Kt[e>>8&255]+"-"+Kt[e>>16&255]+Kt[e>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function wd(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function Oa(i){return(i&i-1)===0&&i!==0}function Ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Et{constructor(t=0,e=0){this.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,r,o,s,a,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=o,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],f=r[0],p=r[3],b=r[6],y=r[1],S=r[4],k=r[7],M=r[2],A=r[5],D=r[8];return o[0]=s*f+a*y+l*M,o[3]=s*p+a*S+l*A,o[6]=s*b+a*k+l*D,o[1]=c*f+d*y+h*M,o[4]=c*p+d*S+h*A,o[7]=c*b+d*k+h*D,o[2]=u*f+m*y+g*M,o[5]=u*p+m*S+g*A,o[8]=u*b+m*k+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*s*d-e*a*c-n*o*d+n*a*l+r*o*c-r*s*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*s-a*c,u=a*l-d*o,m=c*o-s*l,g=e*h+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=h*f,t[1]=(r*c-d*n)*f,t[2]=(a*n-r*s)*f,t[3]=u*f,t[4]=(d*e-r*l)*f,t[5]=(r*o-a*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(s*e-n*o)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),r=this.elements,o=r[0],s=r[3],a=r[6],l=r[1],c=r[4],d=r[7];return r[0]=e*o+n*l,r[3]=e*s+n*c,r[6]=e*a+n*d,r[1]=-n*o+e*l,r[4]=-n*s+e*c,r[7]=-n*a+e*d,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Br={[rn]:{[Dn]:zn},[Dn]:{[rn]:ur}},ye={legacyMode:!0,get workingColorSpace(){return Dn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(Br[t]&&Br[t][e]!==void 0){const n=Br[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={r:0,g:0,b:0},_e={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Hi(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Dn){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Dn){if(t=wd(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Gr(s,o,t+1/3),this.g=Gr(s,o,t),this.b=Gr(s,o,t-1/3)}return ye.toWorkingColorSpace(this,r),this}setStyle(t,e=rn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,ye.toWorkingColorSpace(this,e),n(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,ye.toWorkingColorSpace(this,e),n(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return n(o[4]),this.setHSL(l,c,d,e)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,ye.toWorkingColorSpace(this,e),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=rn){const n=rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ye.fromWorkingColorSpace(Hi(this,Xt),t),he(Xt.r*255,0,255)<<16^he(Xt.g*255,0,255)<<8^he(Xt.b*255,0,255)<<0}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Dn){ye.fromWorkingColorSpace(Hi(this,Xt),e);const n=Xt.r,r=Xt.g,o=Xt.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=d<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Dn){return ye.fromWorkingColorSpace(Hi(this,Xt),e),t.r=Xt.r,t.g=Xt.g,t.b=Xt.b,t}getStyle(t=rn){return ye.fromWorkingColorSpace(Hi(this,Xt),t),t!==rn?`color(${t} ${Xt.r} ${Xt.g} ${Xt.b})`:`rgb(${Xt.r*255|0},${Xt.g*255|0},${Xt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(_e),_e.h+=t,_e.s+=e,_e.l+=n,this.setHSL(_e.h,_e.s,_e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_e),t.getHSL(Vi);const n=Or(_e.h,Vi.h,e),r=Or(_e.s,Vi.s,e),o=Or(_e.l,Vi.l,e);return this.setHSL(n,r,o),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}mt.NAMES=rl;let Gn;class ol{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=mr("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=zn(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class al{constructor(t=null){this.isSource=!0,this.uuid=Ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Vr(r[s].image)):o.push(Vr(r[s]))}else o=Vr(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class Ce extends pi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Ee,r=Ee,o=ve,s=Sr,a=Te,l=Fn,c=1,d=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ri(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==el)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case So:t.x=t.x-Math.floor(t.x);break;case Ee:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case So:t.y=t.y-Math.floor(t.y);break;case Ee:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=el;class Gt{constructor(t=0,e=0,n=0,r=1){this.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],f=l[2],p=l[6],b=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,k=(m+1)/2,M=(b+1)/2,A=(d+u)/4,D=(h+f)/4,x=(g+p)/4;return S>k&&S>M?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=A/n,o=D/n):k>M?k<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(k),n=A/r,o=x/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=D/o,r=x/o),this.set(n,r,o,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-f)/y,this.z=(u-d)/y,this.w=Math.acos((c+m+b-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vn extends pi{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e);const r={width:t,height:e,depth:1};this.texture=new Ce(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ve,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sl extends Ce{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vd extends Ce{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerp(t,e,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,r)}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3];const u=o[s+0],m=o[s+1],g=o[s+2],f=o[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(h!==f||l!==u||c!==m||d!==g){let p=1-a;const b=l*u+c*m+d*g+h*f,y=b>=0?1:-1,S=1-b*b;if(S>Number.EPSILON){const M=Math.sqrt(S),A=Math.atan2(M,b*y);p=Math.sin(p*A)/M,a=Math.sin(a*A)/M}const k=a*y;if(l=l*p+u*k,c=c*p+m*k,d=d*p+g*k,h=h*p+f*k,p===1-a){const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=o[s],u=o[s+1],m=o[s+2],g=o[s+3];return t[e]=a*g+d*h+l*m-c*u,t[e+1]=l*g+d*u+c*h-a*m,t[e+2]=c*g+d*m+a*u-l*h,t[e+3]=d*g-a*h-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),h=a(o/2),u=l(n/2),m=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-n*c,this._z=o*d+s*c+n*l-r*a,this._w=s*d-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*t._w+n*t._x+r*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*s+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*o+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=r*h+this._y*u,this._z=o*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(o),n*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){this.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=l*e+s*r-a*n,d=l*n+a*e-o*r,h=l*r+o*n-s*e,u=-o*e-s*n-a*r;return this.x=c*l+u*-o+d*-a-h*-s,this.y=d*l+u*-s+h*-o-c*-a,this.z=h*l+u*-a+c*-s-d*-o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new C,Ba=new Pi;class zi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const d=t[l],h=t[l+1],u=t[l+2];d<e&&(e=d),h<n&&(n=h),u<r&&(r=u),d>o&&(o=d),h>s&&(s=h),u>a&&(a=u)}return this.min.set(e,n,r),this.max.set(o,s,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const d=t.getX(l),h=t.getY(l),u=t.getZ(l);d<e&&(e=d),h<n&&(n=h),u<r&&(r=u),d>o&&(o=d),h>s&&(s=h),u>a&&(a=u)}return this.min.set(e,n,r),this.max.set(o,s,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const o=n.attributes.position;for(let s=0,a=o.count;s<a;s++)Mn.fromBufferAttribute(o,s).applyMatrix4(t.matrixWorld),this.expandByPoint(Mn)}else n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox),Wr.applyMatrix4(t.matrixWorld),this.union(Wr);const r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Wi.subVectors(this.max,wi),Vn.subVectors(t.a,wi),Hn.subVectors(t.b,wi),Wn.subVectors(t.c,wi),cn.subVectors(Hn,Vn),dn.subVectors(Wn,Hn),Sn.subVectors(Vn,Wn);let e=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-Sn.z,Sn.y,cn.z,0,-cn.x,dn.z,0,-dn.x,Sn.z,0,-Sn.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-Sn.y,Sn.x,0];return!jr(e,Vn,Hn,Wn,Wi)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,Vn,Hn,Wn,Wi))?!1:(ji.crossVectors(cn,dn),e=[ji.x,ji.y,ji.z],jr(e,Vn,Hn,Wn,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Mn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $e=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,Wr=new zi,Vn=new C,Hn=new C,Wn=new C,cn=new C,dn=new C,Sn=new C,wi=new C,Wi=new C,ji=new C,kn=new C;function jr(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){kn.fromArray(i,o);const a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const yd=new zi,Ga=new C,qi=new C,qr=new C;class kr{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.add(qr.multiplyScalar(r/n)),this.radius+=r}return this}union(t){return this.center.equals(t.center)===!0?qi.set(0,0,1).multiplyScalar(t.radius):qi.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ga.copy(t.center).add(qi)),this.expandByPoint(Ga.copy(t.center).sub(qi)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new C,Xr=new C,Xi=new C,hn=new C,Yr=new C,Yi=new C,$r=new C;class Vo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.direction).multiplyScalar(e).add(this.origin),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Xr.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Xr);const o=t.distanceTo(e)*.5,s=-this.direction.dot(Xi),a=hn.dot(this.direction),l=-hn.dot(Xi),c=hn.lengthSq(),d=Math.abs(1-s*s);let h,u,m,g;if(d>0)if(h=s*l-a,u=s*a-l,g=o*d,h>=0)if(u>=-g)if(u<=g){const f=1/d;h*=f,u*=f,m=h*(h+s*u+2*a)+u*(s*h+u+2*l)+c}else u=o,h=Math.max(0,-(s*u+a)),m=-h*h+u*(u+2*l)+c;else u=-o,h=Math.max(0,-(s*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-s*o+a)),u=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-o,-l),o),m=u*(u+2*l)+c):(h=Math.max(0,-(s*o+a)),u=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+u*(u+2*l)+c);else u=s>0?-o:o,h=Math.max(0,-(s*u+a)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Xi).multiplyScalar(u).add(Xr),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),r=Ze.dot(Ze)-n*n,o=t.radius*t.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),d>=0?(o=(t.min.y-u.y)*d,s=(t.max.y-u.y)*d):(o=(t.max.y-u.y)*d,s=(t.min.y-u.y)*d),n>s||o>r||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,r,o){Yr.subVectors(e,t),Yi.subVectors(n,t),$r.crossVectors(Yr,Yi);let s=this.direction.dot($r),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;hn.subVectors(this.origin,t);const l=a*this.direction.dot(Yi.crossVectors(hn,Yi));if(l<0)return null;const c=a*this.direction.dot(Yr.cross(hn));if(c<0||l+c>s)return null;const d=-a*hn.dot($r);return d<0?null:this.at(d/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,r,o,s,a,l,c,d,h,u,m,g,f,p){const b=this.elements;return b[0]=t,b[4]=e,b[8]=n,b[12]=r,b[1]=o,b[5]=s,b[9]=a,b[13]=l,b[2]=c,b[6]=d,b[10]=h,b[14]=u,b[3]=m,b[7]=g,b[11]=f,b[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/jn.setFromMatrixColumn(t,0).length(),o=1/jn.setFromMatrixColumn(t,1).length(),s=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const u=s*d,m=s*h,g=a*d,f=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=u-f*c,e[9]=-a*l,e[2]=f-u*c,e[6]=g+m*c,e[10]=s*l}else if(t.order==="YXZ"){const u=l*d,m=l*h,g=c*d,f=c*h;e[0]=u+f*a,e[4]=g*a-m,e[8]=s*c,e[1]=s*h,e[5]=s*d,e[9]=-a,e[2]=m*a-g,e[6]=f+u*a,e[10]=s*l}else if(t.order==="ZXY"){const u=l*d,m=l*h,g=c*d,f=c*h;e[0]=u-f*a,e[4]=-s*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=s*d,e[9]=f-u*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const u=s*d,m=s*h,g=a*d,f=a*h;e[0]=l*d,e[4]=g*c-m,e[8]=u*c+f,e[1]=l*h,e[5]=f*c+u,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const u=s*l,m=s*c,g=a*l,f=a*c;e[0]=l*d,e[4]=f-u*h,e[8]=g*h+m,e[1]=h,e[5]=s*d,e[9]=-a*d,e[2]=-c*d,e[6]=m*h+g,e[10]=u-f*h}else if(t.order==="XZY"){const u=s*l,m=s*c,g=a*l,f=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+f,e[5]=s*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*d,e[10]=f*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,Md)}lookAt(t,e,n){const r=this.elements;return fe.subVectors(t,e),fe.lengthSq()===0&&(fe.z=1),fe.normalize(),un.crossVectors(n,fe),un.lengthSq()===0&&(Math.abs(n.z)===1?fe.x+=1e-4:fe.z+=1e-4,fe.normalize(),un.crossVectors(n,fe)),un.normalize(),$i.crossVectors(fe,un),r[0]=un.x,r[4]=$i.x,r[8]=fe.x,r[1]=un.y,r[5]=$i.y,r[9]=fe.y,r[2]=un.z,r[6]=$i.z,r[10]=fe.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],f=n[6],p=n[10],b=n[14],y=n[3],S=n[7],k=n[11],M=n[15],A=r[0],D=r[4],x=r[8],E=r[12],P=r[1],z=r[5],Q=r[9],$=r[13],L=r[2],W=r[6],O=r[10],G=r[14],j=r[3],F=r[7],H=r[11],Z=r[15];return o[0]=s*A+a*P+l*L+c*j,o[4]=s*D+a*z+l*W+c*F,o[8]=s*x+a*Q+l*O+c*H,o[12]=s*E+a*$+l*G+c*Z,o[1]=d*A+h*P+u*L+m*j,o[5]=d*D+h*z+u*W+m*F,o[9]=d*x+h*Q+u*O+m*H,o[13]=d*E+h*$+u*G+m*Z,o[2]=g*A+f*P+p*L+b*j,o[6]=g*D+f*z+p*W+b*F,o[10]=g*x+f*Q+p*O+b*H,o[14]=g*E+f*$+p*G+b*Z,o[3]=y*A+S*P+k*L+M*j,o[7]=y*D+S*z+k*W+M*F,o[11]=y*x+S*Q+k*O+M*H,o[15]=y*E+S*$+k*G+M*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],m=t[14],g=t[3],f=t[7],p=t[11],b=t[15];return g*(+o*l*h-r*c*h-o*a*u+n*c*u+r*a*m-n*l*m)+f*(+e*l*m-e*c*u+o*s*u-r*s*m+r*c*d-o*l*d)+p*(+e*c*h-e*a*m-o*s*h+n*s*m+o*a*d-n*c*d)+b*(-r*a*d-e*l*h+e*a*u+r*s*h-n*s*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],m=t[11],g=t[12],f=t[13],p=t[14],b=t[15],y=h*p*c-f*u*c+f*l*m-a*p*m-h*l*b+a*u*b,S=g*u*c-d*p*c-g*l*m+s*p*m+d*l*b-s*u*b,k=d*f*c-g*h*c+g*a*m-s*f*m-d*a*b+s*h*b,M=g*h*l-d*f*l-g*a*u+s*f*u+d*a*p-s*h*p,A=e*y+n*S+r*k+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=y*D,t[1]=(f*u*o-h*p*o-f*r*m+n*p*m+h*r*b-n*u*b)*D,t[2]=(a*p*o-f*l*o+f*r*c-n*p*c-a*r*b+n*l*b)*D,t[3]=(h*l*o-a*u*o-h*r*c+n*u*c+a*r*m-n*l*m)*D,t[4]=S*D,t[5]=(d*p*o-g*u*o+g*r*m-e*p*m-d*r*b+e*u*b)*D,t[6]=(g*l*o-s*p*o-g*r*c+e*p*c+s*r*b-e*l*b)*D,t[7]=(s*u*o-d*l*o+d*r*c-e*u*c-s*r*m+e*l*m)*D,t[8]=k*D,t[9]=(g*h*o-d*f*o-g*n*m+e*f*m+d*n*b-e*h*b)*D,t[10]=(s*f*o-g*a*o+g*n*c-e*f*c-s*n*b+e*a*b)*D,t[11]=(d*a*o-s*h*o-d*n*c+e*h*c+s*n*m-e*a*m)*D,t[12]=M*D,t[13]=(d*f*r-g*h*r+g*n*u-e*f*u-d*n*p+e*h*p)*D,t[14]=(g*a*r-s*f*r-g*n*l+e*f*l+s*n*p-e*a*p)*D,t[15]=(s*h*r-d*a*r+d*n*l-e*h*l-s*n*u+e*a*u)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,d=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,d=s+s,h=a+a,u=o*c,m=o*d,g=o*h,f=s*d,p=s*h,b=a*h,y=l*c,S=l*d,k=l*h,M=n.x,A=n.y,D=n.z;return r[0]=(1-(f+b))*M,r[1]=(m+k)*M,r[2]=(g-S)*M,r[3]=0,r[4]=(m-k)*A,r[5]=(1-(u+b))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(g+S)*D,r[9]=(p-y)*D,r[10]=(1-(u+f))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=jn.set(r[0],r[1],r[2]).length();const s=jn.set(r[4],r[5],r[6]).length(),a=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Me.copy(this);const c=1/o,d=1/s,h=1/a;return Me.elements[0]*=c,Me.elements[1]*=c,Me.elements[2]*=c,Me.elements[4]*=d,Me.elements[5]*=d,Me.elements[6]*=d,Me.elements[8]*=h,Me.elements[9]*=h,Me.elements[10]*=h,e.setFromRotationMatrix(Me),n.x=o,n.y=s,n.z=a,this}makePerspective(t,e,n,r,o,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*o/(e-t),c=2*o/(n-r),d=(e+t)/(e-t),h=(n+r)/(n-r),u=-(s+o)/(s-o),m=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,o,s){const a=this.elements,l=1/(e-t),c=1/(n-r),d=1/(s-o),h=(e+t)*l,u=(n+r)*c,m=(s+o)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new C,Me=new qt,_d=new C(0,0,0),Md=new C(1,1,1),un=new C,$i=new C,fe=new C,Va=new qt,Ha=new Pi;class Ii{constructor(t=0,e=0,n=0,r=Ii.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-he(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ii.DefaultOrder="XYZ";Ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ho{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sd=0;const Wa=new C,qn=new Pi,Je=new qt,Zi=new C,xi=new C,kd=new C,Ed=new Pi,ja=new C(1,0,0),qa=new C(0,1,0),Xa=new C(0,0,1),Td={type:"added"},Ya={type:"removed"};class Yt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DefaultUp.clone();const t=new C,e=new Ii,n=new Pi,r=new C(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new We}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis(Xa,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis(Xa,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(xi,Zi,this.up):Je.lookAt(Zi,xi,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Je),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ya)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ya)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),c=s(t.textures),d=s(t.images),h=s(t.shapes),u=s(t.skeletons),m=s(t.animations),g=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Yt.DefaultUp=new C(0,1,0);Yt.DefaultMatrixAutoUpdate=!0;const Se=new C,Ke=new C,Zr=new C,Qe=new C,Xn=new C,Yn=new C,$a=new C,Jr=new C,Kr=new C,Qr=new C;class Be{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Se.subVectors(t,e),r.cross(Se);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Se.subVectors(r,e),Ke.subVectors(n,e),Zr.subVectors(t,e);const s=Se.dot(Se),a=Se.dot(Ke),l=Se.dot(Zr),c=Ke.dot(Ke),d=Ke.dot(Zr),h=s*c-a*a;if(h===0)return o.set(-2,-1,-1);const u=1/h,m=(c*l-a*d)*u,g=(s*d-a*l)*u;return o.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Qe),Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getUV(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,Qe),l.set(0,0),l.addScaledVector(o,Qe.x),l.addScaledVector(s,Qe.y),l.addScaledVector(a,Qe.z),l}static isFrontFacing(t,e,n,r){return Se.subVectors(n,e),Ke.subVectors(t,e),Se.cross(Ke).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Se.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Se.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,o){return Be.getUV(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let s,a;Xn.subVectors(r,n),Yn.subVectors(o,n),Jr.subVectors(t,n);const l=Xn.dot(Jr),c=Yn.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Kr.subVectors(t,r);const d=Xn.dot(Kr),h=Yn.dot(Kr);if(d>=0&&h<=d)return e.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),e.copy(n).addScaledVector(Xn,s);Qr.subVectors(t,o);const m=Xn.dot(Qr),g=Yn.dot(Qr);if(g>=0&&m<=g)return e.copy(o);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yn,a);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return $a.subVectors(o,r),a=(h-d)/(h-d+(m-g)),e.copy(r).addScaledVector($a,a);const b=1/(p+f+u);return s=f*b,a=u*b,e.copy(n).addScaledVector(Xn,s).addScaledVector(Yn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ad=0;class te extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ii,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qs,this.blendDst=tl,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===kc;continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(e){const o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(t){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}te.fromType=function(){return null};class Wo extends te{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jt=new C,Ji=new Et;class je{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let r=0,o=t.length;r<o;r++){let s=t[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new mt),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let r=0,o=t.length;r<o;r++){let s=t[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new Et),e[n++]=s.x,e[n++]=s.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let r=0,o=t.length;r<o;r++){let s=t[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new C),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let r=0,o=t.length;r<o;r++){let s=t[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new Gt),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ll extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cd=0;const xe=new qt,to=new Yt,$n=new C,me=new zi,vi=new zi,$t=new C;class Le extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?cl:ll)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new We().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xe.makeRotationFromQuaternion(t),this.applyMatrix4(xe),this}rotateX(t){return xe.makeRotationX(t),this.applyMatrix4(xe),this}rotateY(t){return xe.makeRotationY(t),this.applyMatrix4(xe),this}rotateZ(t){return xe.makeRotationZ(t),this.applyMatrix4(xe),this}translate(t,e,n){return xe.makeTranslation(t,e,n),this.applyMatrix4(xe),this}scale(t,e,n){return xe.makeScale(t,e,n),this.applyMatrix4(xe),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];me.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,me.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,me.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(me.min),this.boundingBox.expandByPoint(me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(me.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){const a=e[o];vi.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(me.min,vi.min),me.expandByPoint($t),$t.addVectors(me.max,vi.max),me.expandByPoint($t)):(me.expandByPoint(vi.min),me.expandByPoint(vi.max))}me.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)$t.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared($t));if(e)for(let o=0,s=e.length;o<s;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)$t.fromBufferAttribute(a,c),l&&($n.fromBufferAttribute(t,c),$t.add($n)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,o=e.normal.array,s=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let P=0;P<a;P++)c[P]=new C,d[P]=new C;const h=new C,u=new C,m=new C,g=new Et,f=new Et,p=new Et,b=new C,y=new C;function S(P,z,Q){h.fromArray(r,P*3),u.fromArray(r,z*3),m.fromArray(r,Q*3),g.fromArray(s,P*2),f.fromArray(s,z*2),p.fromArray(s,Q*2),u.sub(h),m.sub(h),f.sub(g),p.sub(g);const $=1/(f.x*p.y-p.x*f.y);!isFinite($)||(b.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar($),y.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar($),c[P].add(b),c[z].add(b),c[Q].add(b),d[P].add(y),d[z].add(y),d[Q].add(y))}let k=this.groups;k.length===0&&(k=[{start:0,count:n.length}]);for(let P=0,z=k.length;P<z;++P){const Q=k[P],$=Q.start,L=Q.count;for(let W=$,O=$+L;W<O;W+=3)S(n[W+0],n[W+1],n[W+2])}const M=new C,A=new C,D=new C,x=new C;function E(P){D.fromArray(o,P*3),x.copy(D);const z=c[P];M.copy(z),M.sub(D.multiplyScalar(D.dot(z))).normalize(),A.crossVectors(x,z);const $=A.dot(d[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=$}for(let P=0,z=k.length;P<z;++P){const Q=k[P],$=Q.start,L=Q.count;for(let W=$,O=$+L;W<O;W+=3)E(n[W+0]),E(n[W+1]),E(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new C,o=new C,s=new C,a=new C,l=new C,c=new C,d=new C,h=new C;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),s.fromBufferAttribute(e,p),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)r.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),d.subVectors(s,o),h.subVectors(r,o),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(t.attributes[r]===void 0)continue;const s=n[r].array,a=t.attributes[r],l=a.array,c=a.itemSize*e,d=Math.min(l.length,s.length-c);for(let h=0,u=c;h<d;h++,u++)s[u]=l[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$t.fromBufferAttribute(t,e),$t.normalize(),t.setXYZ(e,$t.x,$t.y,$t.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*d;for(let b=0;b<d;b++)u[g++]=c[m++]}return new je(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(r[l]=d,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const o=t.morphAttributes;for(const c in o){const d=[],h=o[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new qt,Zn=new Vo,eo=new kr,pn=new C,fn=new C,mn=new C,no=new C,io=new C,ro=new C,Ki=new C,Qi=new C,tr=new C,er=new Et,nr=new Et,ir=new Et,oo=new C,rr=new C;class we extends Yt{constructor(t=new Le,e=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(o),t.ray.intersectsSphere(eo)===!1)||(Za.copy(o).invert(),Zn.copy(t.ray).applyMatrix4(Za),n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,d=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,p=m.length;f<p;f++){const b=m[f],y=r[b.materialIndex],S=Math.max(b.start,g.start),k=Math.min(a.count,Math.min(b.start+b.count,g.start+g.count));for(let M=S,A=k;M<A;M+=3){const D=a.getX(M),x=a.getX(M+1),E=a.getX(M+2);s=or(this,y,t,Zn,l,c,d,h,u,D,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=b.materialIndex,e.push(s))}}else{const f=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let b=f,y=p;b<y;b+=3){const S=a.getX(b),k=a.getX(b+1),M=a.getX(b+2);s=or(this,r,t,Zn,l,c,d,h,u,S,k,M),s&&(s.faceIndex=Math.floor(b/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,p=m.length;f<p;f++){const b=m[f],y=r[b.materialIndex],S=Math.max(b.start,g.start),k=Math.min(l.count,Math.min(b.start+b.count,g.start+g.count));for(let M=S,A=k;M<A;M+=3){const D=M,x=M+1,E=M+2;s=or(this,y,t,Zn,l,c,d,h,u,D,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=b.materialIndex,e.push(s))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let b=f,y=p;b<y;b+=3){const S=b,k=b+1,M=b+2;s=or(this,r,t,Zn,l,c,d,h,u,S,k,M),s&&(s.faceIndex=Math.floor(b/3),e.push(s))}}}}function Ld(i,t,e,n,r,o,s,a){let l;if(t.side===Ae?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side!==He,a),l===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:i}}function or(i,t,e,n,r,o,s,a,l,c,d,h){pn.fromBufferAttribute(r,c),fn.fromBufferAttribute(r,d),mn.fromBufferAttribute(r,h);const u=i.morphTargetInfluences;if(o&&u){Ki.set(0,0,0),Qi.set(0,0,0),tr.set(0,0,0);for(let g=0,f=o.length;g<f;g++){const p=u[g],b=o[g];p!==0&&(no.fromBufferAttribute(b,c),io.fromBufferAttribute(b,d),ro.fromBufferAttribute(b,h),s?(Ki.addScaledVector(no,p),Qi.addScaledVector(io,p),tr.addScaledVector(ro,p)):(Ki.addScaledVector(no.sub(pn),p),Qi.addScaledVector(io.sub(fn),p),tr.addScaledVector(ro.sub(mn),p)))}pn.add(Ki),fn.add(Qi),mn.add(tr)}i.isSkinnedMesh&&(i.boneTransform(c,pn),i.boneTransform(d,fn),i.boneTransform(h,mn));const m=Ld(i,t,e,n,pn,fn,mn,oo);if(m){a&&(er.fromBufferAttribute(a,c),nr.fromBufferAttribute(a,d),ir.fromBufferAttribute(a,h),m.uv=Be.getUV(oo,pn,fn,mn,er,nr,ir,new Et)),l&&(er.fromBufferAttribute(l,c),nr.fromBufferAttribute(l,d),ir.fromBufferAttribute(l,h),m.uv2=Be.getUV(oo,pn,fn,mn,er,nr,ir,new Et));const g={a:c,b:d,c:h,normal:new C,materialIndex:0};Be.getNormal(pn,fn,mn,g.normal),m.face=g}return m}class fi extends Le{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,s,o,0),g("z","y","x",1,-1,n,e,-t,s,o,1),g("x","z","y",1,1,t,n,e,r,s,2),g("x","z","y",1,-1,t,n,-e,r,s,3),g("x","y","z",1,-1,t,e,n,r,o,4),g("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(h,2));function g(f,p,b,y,S,k,M,A,D,x,E){const P=k/D,z=M/x,Q=k/2,$=M/2,L=A/2,W=D+1,O=x+1;let G=0,j=0;const F=new C;for(let H=0;H<O;H++){const Z=H*z-$;for(let N=0;N<W;N++){const Y=N*P-Q;F[f]=Y*y,F[p]=Z*S,F[b]=L,c.push(F.x,F.y,F.z),F[f]=0,F[p]=0,F[b]=A>0?1:-1,d.push(F.x,F.y,F.z),h.push(N/D),h.push(1-H/x),G+=1}}for(let H=0;H<x;H++)for(let Z=0;Z<D;Z++){const N=u+Z+W*H,Y=u+Z+W*(H+1),lt=u+(Z+1)+W*(H+1),ht=u+(Z+1)+W*H;l.push(N,Y,ht),l.push(Y,lt,ht),j+=6}a.addGroup(m,j,E),m+=j,u+=G}}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ne(i){const t={};for(let e=0;e<i.length;e++){const n=li(i[e]);for(const r in n)t[r]=n[r]}return t}const Dd={clone:li,merge:ne};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends te{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Rd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dl extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ue extends dl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=90,Kn=1;class zd extends Yt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new ue(Jn,Kn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(1,0,0)),this.add(r);const o=new ue(Jn,Kn,t,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new C(-1,0,0)),this.add(o);const s=new ue(Jn,Kn,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new C(0,1,0)),this.add(s);const a=new ue(Jn,Kn,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new ue(Jn,Kn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new ue(Jn,Kn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,o,s,a,l,c]=this.children,d=t.getRenderTarget(),h=t.toneMapping,u=t.xr.enabled;t.toneMapping=an,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,o),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(d),t.toneMapping=h,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class hl extends Ce{constructor(t,e,n,r,o,s,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Id extends vn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new hl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),o=new sn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:xn});o.uniforms.tEquirect.value=e;const s=new we(r,o),a=e.minFilter;return e.minFilter===Sr&&(e.minFilter=ve),new zd(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}}const ao=new C,Fd=new C,Nd=new We;class En{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ao.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(n).multiplyScalar(o).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),r=this.coplanarPoint(ao).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new kr,ar=new C;class jo{constructor(t=new En,e=new En,n=new En,r=new En,o=new En,s=new En){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,r=n[0],o=n[1],s=n[2],a=n[3],l=n[4],c=n[5],d=n[6],h=n[7],u=n[8],m=n[9],g=n[10],f=n[11],p=n[12],b=n[13],y=n[14],S=n[15];return e[0].setComponents(a-r,h-l,f-u,S-p).normalize(),e[1].setComponents(a+r,h+l,f+u,S+p).normalize(),e[2].setComponents(a+o,h+c,f+m,S+b).normalize(),e[3].setComponents(a-o,h-c,f-m,S-b).normalize(),e[4].setComponents(a-s,h-d,f-g,S-y).normalize(),e[5].setComponents(a+s,h+d,f+g,S+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ar.x=r.normal.x>0?t.max.x:t.min.x,ar.y=r.normal.y>0?t.max.y:t.min.y,ar.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ul(){let i=null,t=!1,e=null,n=null;function r(o,s){e(o,s),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ud(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,d){const h=c.array,u=c.usage,m=i.createBuffer();i.bindBuffer(d,m),i.bufferData(d,h,u),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,h){const u=d.array,m=d.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,u):(e?i.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,d)):h.version<c.version&&(o(h.buffer,c,d),h.version=c.version)}return{get:s,remove:a,update:l}}class Er extends Le{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,h=t/a,u=e/l,m=[],g=[],f=[],p=[];for(let b=0;b<d;b++){const y=b*u-s;for(let S=0;S<c;S++){const k=S*h-o;g.push(k,-y,0),f.push(0,0,1),p.push(S/a),p.push(1-b/l)}}for(let b=0;b<l;b++)for(let y=0;y<a;y++){const S=y+c*b,k=y+c*(b+1),M=y+1+c*(b+1),A=y+1+c*b;m.push(S,k,A),m.push(k,M,A)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2))}static fromJSON(t){return new Er(t.width,t.height,t.widthSegments,t.heightSegments)}}var Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd="vec3 transformed = vec3( position );",qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yd=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Th=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$h=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Kh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_u=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tu=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Au=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Lu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Du=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kt={alphamap_fragment:Od,alphamap_pars_fragment:Bd,alphatest_fragment:Gd,alphatest_pars_fragment:Vd,aomap_fragment:Hd,aomap_pars_fragment:Wd,begin_vertex:jd,beginnormal_vertex:qd,bsdfs:Xd,iridescence_fragment:Yd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Qd,color_fragment:th,color_pars_fragment:eh,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:oh,defaultnormal_vertex:ah,displacementmap_pars_vertex:sh,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:dh,encodings_fragment:hh,encodings_pars_fragment:uh,envmap_fragment:ph,envmap_common_pars_fragment:fh,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Th,envmap_vertex:bh,fog_vertex:wh,fog_pars_vertex:xh,fog_fragment:vh,fog_pars_fragment:yh,gradientmap_pars_fragment:_h,lightmap_fragment:Mh,lightmap_pars_fragment:Sh,lights_lambert_vertex:kh,lights_pars_begin:Eh,lights_toon_fragment:Ah,lights_toon_pars_fragment:Ch,lights_phong_fragment:Lh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ph,lights_fragment_begin:zh,lights_fragment_maps:Ih,lights_fragment_end:Fh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Uh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:Gh,map_pars_fragment:Vh,map_particle_fragment:Hh,map_particle_pars_fragment:Wh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:qh,morphcolor_vertex:Xh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:Kh,normal_pars_fragment:Qh,normal_pars_vertex:tu,normal_vertex:eu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:ru,clearcoat_pars_fragment:ou,iridescence_pars_fragment:au,output_fragment:su,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:du,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:pu,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:bu,shadowmask_pars_fragment:wu,skinbase_vertex:xu,skinning_pars_vertex:vu,skinning_vertex:yu,skinnormal_vertex:_u,specularmap_fragment:Mu,specularmap_pars_fragment:Su,tonemapping_fragment:ku,tonemapping_pars_fragment:Eu,transmission_fragment:Tu,transmission_pars_fragment:Au,uv_pars_fragment:Cu,uv_pars_vertex:Lu,uv_vertex:Du,uv2_pars_fragment:Ru,uv2_pars_vertex:Pu,uv2_vertex:zu,worldpos_vertex:Iu,background_vert:Fu,background_frag:Nu,cube_vert:Uu,cube_frag:Ou,depth_vert:Bu,depth_frag:Gu,distanceRGBA_vert:Vu,distanceRGBA_frag:Hu,equirect_vert:Wu,equirect_frag:ju,linedashed_vert:qu,linedashed_frag:Xu,meshbasic_vert:Yu,meshbasic_frag:$u,meshlambert_vert:Zu,meshlambert_frag:Ju,meshmatcap_vert:Ku,meshmatcap_frag:Qu,meshnormal_vert:tp,meshnormal_frag:ep,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:sp,points_vert:lp,points_frag:cp,shadow_vert:dp,shadow_frag:hp,sprite_vert:up,sprite_frag:pp},it={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new We},uv2Transform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}}},Oe={basic:{uniforms:ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.fog,it.lights,{emissive:{value:new mt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ne([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ne([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new mt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ne([it.points,it.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ne([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ne([it.common,it.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ne([it.sprite,it.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},cube:{uniforms:ne([it.envmap,{opacity:{value:1}}]),vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ne([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ne([it.lights,it.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Oe.physical={uniforms:ne([Oe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Et(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};function fp(i,t,e,n,r,o){const s=new mt(0);let a=r===!0?0:1,l,c,d=null,h=0,u=null;function m(f,p){let b=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const S=i.xr,k=S.getSession&&S.getSession();k&&k.environmentBlendMode==="additive"&&(y=null),y===null?g(s,a):y&&y.isColor&&(g(y,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Mr)?(c===void 0&&(c=new we(new fi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:li(Oe.cube.uniforms),vertexShader:Oe.cube.vertexShader,fragmentShader:Oe.cube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(d!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new we(new Er(2,2),new sn({name:"BackgroundMaterial",uniforms:li(Oe.background.uniforms),vertexShader:Oe.background.vertexShader,fragmentShader:Oe.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){e.buffers.color.setClear(f.r,f.g,f.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),a=p,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,g(s,a)},render:m}}function mp(i,t,e,n){const r=i.getParameter(34921),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},l=p(null);let c=l,d=!1;function h(L,W,O,G,j){let F=!1;if(s){const H=f(G,O,W);c!==H&&(c=H,m(c.object)),F=b(L,G,O,j),F&&y(L,G,O,j)}else{const H=W.wireframe===!0;(c.geometry!==G.id||c.program!==O.id||c.wireframe!==H)&&(c.geometry=G.id,c.program=O.id,c.wireframe=H,F=!0)}j!==null&&e.update(j,34963),(F||d)&&(d=!1,x(L,W,O,G),j!==null&&i.bindBuffer(34963,e.get(j).buffer))}function u(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):o.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function f(L,W,O){const G=O.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let F=j[W.id];F===void 0&&(F={},j[W.id]=F);let H=F[G];return H===void 0&&(H=p(u()),F[G]=H),H}function p(L){const W=[],O=[],G=[];for(let j=0;j<r;j++)W[j]=0,O[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:O,attributeDivisors:G,object:L,attributes:{},index:null}}function b(L,W,O,G){const j=c.attributes,F=W.attributes;let H=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){const lt=j[N];let ht=F[N];if(ht===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),lt===void 0||lt.attribute!==ht||ht&&lt.data!==ht.data)return!0;H++}return c.attributesNum!==H||c.index!==G}function y(L,W,O,G){const j={},F=W.attributes;let H=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){let lt=F[N];lt===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor));const ht={};ht.attribute=lt,lt&&lt.data&&(ht.data=lt.data),j[N]=ht,H++}c.attributes=j,c.attributesNum=H,c.index=G}function S(){const L=c.newAttributes;for(let W=0,O=L.length;W<O;W++)L[W]=0}function k(L){M(L,0)}function M(L,W){const O=c.newAttributes,G=c.enabledAttributes,j=c.attributeDivisors;O[L]=1,G[L]===0&&(i.enableVertexAttribArray(L),G[L]=1),j[L]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),j[L]=W)}function A(){const L=c.newAttributes,W=c.enabledAttributes;for(let O=0,G=W.length;O<G;O++)W[O]!==L[O]&&(i.disableVertexAttribArray(O),W[O]=0)}function D(L,W,O,G,j,F){n.isWebGL2===!0&&(O===5124||O===5125)?i.vertexAttribIPointer(L,W,O,j,F):i.vertexAttribPointer(L,W,O,G,j,F)}function x(L,W,O,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const j=G.attributes,F=O.getAttributes(),H=W.defaultAttributeValues;for(const Z in F){const N=F[Z];if(N.location>=0){let Y=j[Z];if(Y===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const lt=Y.normalized,ht=Y.itemSize,q=e.get(Y);if(q===void 0)continue;const Ut=q.buffer,yt=q.type,_t=q.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ot=Y.data,It=ot.stride,Tt=Y.offset;if(ot.isInstancedInterleavedBuffer){for(let wt=0;wt<N.locationSize;wt++)M(N.location+wt,ot.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let wt=0;wt<N.locationSize;wt++)k(N.location+wt);i.bindBuffer(34962,Ut);for(let wt=0;wt<N.locationSize;wt++)D(N.location+wt,ht/N.locationSize,yt,lt,It*_t,(Tt+ht/N.locationSize*wt)*_t)}else{if(Y.isInstancedBufferAttribute){for(let ot=0;ot<N.locationSize;ot++)M(N.location+ot,Y.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ot=0;ot<N.locationSize;ot++)k(N.location+ot);i.bindBuffer(34962,Ut);for(let ot=0;ot<N.locationSize;ot++)D(N.location+ot,ht/N.locationSize,yt,lt,ht*_t,ht/N.locationSize*ot*_t)}}else if(H!==void 0){const lt=H[Z];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(N.location,lt);break;case 3:i.vertexAttrib3fv(N.location,lt);break;case 4:i.vertexAttrib4fv(N.location,lt);break;default:i.vertexAttrib1fv(N.location,lt)}}}}A()}function E(){Q();for(const L in a){const W=a[L];for(const O in W){const G=W[O];for(const j in G)g(G[j].object),delete G[j];delete W[O]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const W=a[L.id];for(const O in W){const G=W[O];for(const j in G)g(G[j].object),delete G[j];delete W[O]}delete a[L.id]}function z(L){for(const W in a){const O=a[W];if(O[L.id]===void 0)continue;const G=O[L.id];for(const j in G)g(G[j].object),delete G[j];delete O[L.id]}}function Q(){$(),d=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:$,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:S,enableAttribute:k,disableUnusedAttributes:A}}function gp(i,t,e,n){const r=n.isWebGL2;let o;function s(c){o=c}function a(c,d){i.drawArrays(o,c,d),e.update(d,o,1)}function l(c,d,h){if(h===0)return;let u,m;if(r)u=i,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](o,c,d,h),e.update(d,o,h)}this.setMode=s,this.render=a,this.renderInstances=l}function bp(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=i.getParameter(34930),u=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),f=i.getParameter(34921),p=i.getParameter(36347),b=i.getParameter(36348),y=i.getParameter(36349),S=u>0,k=s||t.has("OES_texture_float"),M=S&&k,A=s?i.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:k,floatVertexTextures:M,maxSamples:A}}function wp(i){const t=this;let e=null,n=0,r=!1,o=!1;const s=new En,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,m){const g=h.length!==0||u||n!==0||r;return r=u,e=d(h,m,0),n=h.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,c()},this.setState=function(h,u,m){const g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,b=i.get(h);if(!r||g===null||g.length===0||o&&!p)o?d(null):c();else{const y=o?0:n,S=y*4;let k=b.clippingState||null;l.value=k,k=d(g,u,S,m);for(let M=0;M!==S;++M)k[M]=e[M];b.clippingState=k,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,m,g){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const b=m+f*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<b)&&(p=new Float32Array(b));for(let S=0,k=m;S!==f;++S,k+=4)s.copy(h[S]).applyMatrix4(y,a),s.normal.toArray(p,k),p[k+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function xp(i){let t=new WeakMap;function e(s,a){return a===_o?s.mapping=oi:a===Mo&&(s.mapping=ai),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===_o||a===Mo)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Id(l.height/2);return c.fromEquirectangularTexture(i,s),t.set(s,c),s.addEventListener("dispose",r),e(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class vp extends dl{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,Ja=[.125,.215,.35,.446,.526,.582],An=20,so=new vp,Ka=new mt;let lo=null;const Tn=(1+Math.sqrt(5))/2,ti=1/Tn,Qa=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Tn,ti),new C(0,Tn,-ti),new C(ti,0,Tn),new C(-ti,0,Tn),new C(Tn,ti,0),new C(-Tn,ti,0)];class ts{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){lo=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ns(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo),t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:Ci,format:Te,encoding:Nn,depthBuffer:!1},r=es(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=es(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(o)),this._blurMaterial=_p(o,t,e)}return r}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,r){const a=new ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ka),d.toneMapping=an,d.autoClear=!1;const m=new Wo({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new we(new fi,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Ka),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(a.up.set(0,l[b],0),a.lookAt(c[b],0,0)):y===1?(a.up.set(0,0,l[b]),a.lookAt(0,c[b],0)):(a.up.set(0,l[b],0),a.lookAt(0,0,c[b]));const S=this._cubeSize;sr(r,y*S,b>2?S:0,S,S),d.setRenderTarget(r),f&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===oi||t.mapping===ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=is()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ns());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new we(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,so)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qa[(r-1)%Qa.length];this._blur(t,r-1,r,o,s)}e.autoClear=n}_blur(t,e,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,r,"latitudinal",o),this._halfBlur(s,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new we(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*An-1),f=o/g,p=isFinite(o)?1+Math.floor(d*f):An;p>An&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const b=[];let y=0;for(let D=0;D<An;++D){const x=D/f,E=Math.exp(-x*x/2);b.push(E),D===0?y+=E:D<p&&(y+=2*E)}for(let D=0;D<b.length;D++)b[D]=b[D]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=b,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const k=this._sizeLods[r],M=3*k*(r>S-ni?r-S+ni:0),A=4*(this._cubeSize-k);sr(e,M,A,3*k,2*k),l.setRenderTarget(e),l.render(h,so)}}function yp(i){const t=[],e=[],n=[];let r=i;const o=i-ni+1+Ja.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>i-ni?l=Ja[s-i+ni-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,f=3,p=2,b=1,y=new Float32Array(f*g*m),S=new Float32Array(p*g*m),k=new Float32Array(b*g*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,x=A>2?0:-1,E=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];y.set(E,f*g*A),S.set(u,p*g*A);const P=[A,A,A,A,A,A];k.set(P,b*g*A)}const M=new Le;M.setAttribute("position",new je(y,f)),M.setAttribute("uv",new je(S,p)),M.setAttribute("faceIndex",new je(k,b)),t.push(M),r>ni&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function es(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function _p(i,t,e){const n=new Float32Array(An),r=new C(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ns(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function is(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_o||l===Mo,d=l===oi||l===ai;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ts(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){e===null&&(e=new ts(i));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",o),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Sp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kp(i,t,e,n){const r={},o=new WeakMap;function s(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete r[u.id];const m=o.get(u);m&&(t.remove(m),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let p=0,b=f.length;p<b;p++)t.update(f[p],34962)}}function c(h){const u=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const y=m.array;f=m.version;for(let S=0,k=y.length;S<k;S+=3){const M=y[S+0],A=y[S+1],D=y[S+2];u.push(M,A,A,D,D,M)}}else{const y=g.array;f=g.version;for(let S=0,k=y.length/3-1;S<k;S+=3){const M=S+0,A=S+1,D=S+2;u.push(M,A,A,D,D,M)}}const p=new(il(u)?cl:ll)(u,1);p.version=f;const b=o.get(h);b&&t.remove(b),o.set(h,p)}function d(h){const u=o.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Ep(i,t,e,n){const r=n.isWebGL2;let o;function s(u){o=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function d(u,m){i.drawElements(o,m,a,u*l),e.update(m,o,1)}function h(u,m,g){if(g===0)return;let f,p;if(r)f=i,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,m,a,u*l,g),e.update(m,o,g)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h}function Tp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case 4:e.triangles+=a*(o/3);break;case 1:e.lines+=a*(o/2);break;case 3:e.lines+=a*(o-1);break;case 2:e.lines+=a*o;break;case 0:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ap(i,t){return i[0]-t[0]}function Cp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function co(i,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(e)}function Lp(i,t,e){const n={},r=new Float32Array(8),o=new WeakMap,s=new Gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h,u){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=f!==void 0?f.length:0;let b=o.get(d);if(b===void 0||b.count!==p){let O=function(){L.dispose(),o.delete(d),d.removeEventListener("dispose",O)};var g=O;b!==void 0&&b.texture.dispose();const k=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],E=d.morphAttributes.color||[];let P=0;k===!0&&(P=1),M===!0&&(P=2),A===!0&&(P=3);let z=d.attributes.position.count*P,Q=1;z>t.maxTextureSize&&(Q=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const $=new Float32Array(z*Q*4*p),L=new sl($,z,Q,p);L.type=Ln,L.needsUpdate=!0;const W=P*4;for(let G=0;G<p;G++){const j=D[G],F=x[G],H=E[G],Z=z*Q*4*G;for(let N=0;N<j.count;N++){const Y=N*W;k===!0&&(s.fromBufferAttribute(j,N),j.normalized===!0&&co(s,j),$[Z+Y+0]=s.x,$[Z+Y+1]=s.y,$[Z+Y+2]=s.z,$[Z+Y+3]=0),M===!0&&(s.fromBufferAttribute(F,N),F.normalized===!0&&co(s,F),$[Z+Y+4]=s.x,$[Z+Y+5]=s.y,$[Z+Y+6]=s.z,$[Z+Y+7]=0),A===!0&&(s.fromBufferAttribute(H,N),H.normalized===!0&&co(s,H),$[Z+Y+8]=s.x,$[Z+Y+9]=s.y,$[Z+Y+10]=s.z,$[Z+Y+11]=H.itemSize===4?s.w:1)}}b={count:p,texture:L,size:new Et(z,Q)},o.set(d,b),d.addEventListener("dispose",O)}let y=0;for(let k=0;k<m.length;k++)y+=m[k];const S=d.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",m),u.getUniforms().setValue(i,"morphTargetsTexture",b.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{const f=m===void 0?0:m.length;let p=n[d.id];if(p===void 0||p.length!==f){p=[];for(let M=0;M<f;M++)p[M]=[M,0];n[d.id]=p}for(let M=0;M<f;M++){const A=p[M];A[0]=M,A[1]=m[M]}p.sort(Cp);for(let M=0;M<8;M++)M<f&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ap);const b=d.morphAttributes.position,y=d.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const A=a[M],D=A[0],x=A[1];D!==Number.MAX_SAFE_INTEGER&&x?(b&&d.getAttribute("morphTarget"+M)!==b[D]&&d.setAttribute("morphTarget"+M,b[D]),y&&d.getAttribute("morphNormal"+M)!==y[D]&&d.setAttribute("morphNormal"+M,y[D]),r[M]=x,S+=x):(b&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),y&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const k=d.morphTargetsRelative?1:1-S;u.getUniforms().setValue(i,"morphTargetBaseInfluence",k),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Dp(i,t,e,n){let r=new WeakMap;function o(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);return r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:s}}const pl=new Ce,fl=new sl,ml=new vd,gl=new hl,rs=[],os=[],as=new Float32Array(16),ss=new Float32Array(9),ls=new Float32Array(4);function mi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=rs[r];if(o===void 0&&(o=new Float32Array(r),rs[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=os[t];e===void 0&&(e=new Int32Array(t),os[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(se(e,n))return;ls.set(n),i.uniformMatrix2fv(this.addr,!1,ls),le(e,n)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(se(e,n))return;ss.set(n),i.uniformMatrix3fv(this.addr,!1,ss),le(e,n)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(se(e,n))return;as.set(n),i.uniformMatrix4fv(this.addr,!1,as),le(e,n)}}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bp(i,t){const e=this.cache;se(e,t)||(i.uniform2iv(this.addr,t),le(e,t))}function Gp(i,t){const e=this.cache;se(e,t)||(i.uniform3iv(this.addr,t),le(e,t))}function Vp(i,t){const e=this.cache;se(e,t)||(i.uniform4iv(this.addr,t),le(e,t))}function Hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wp(i,t){const e=this.cache;se(e,t)||(i.uniform2uiv(this.addr,t),le(e,t))}function jp(i,t){const e=this.cache;se(e,t)||(i.uniform3uiv(this.addr,t),le(e,t))}function qp(i,t){const e=this.cache;se(e,t)||(i.uniform4uiv(this.addr,t),le(e,t))}function Xp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||pl,r)}function Yp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ml,r)}function $p(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gl,r)}function Zp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||fl,r)}function Jp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return zp;case 35666:return Ip;case 35674:return Fp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Wp;case 36295:return jp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}function Kp(i,t){i.uniform1fv(this.addr,t)}function Qp(i,t){const e=mi(t,this.size,2);i.uniform2fv(this.addr,e)}function tf(i,t){const e=mi(t,this.size,3);i.uniform3fv(this.addr,e)}function ef(i,t){const e=mi(t,this.size,4);i.uniform4fv(this.addr,e)}function nf(i,t){const e=mi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rf(i,t){const e=mi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function of(i,t){const e=mi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function af(i,t){i.uniform1iv(this.addr,t)}function sf(i,t){i.uniform2iv(this.addr,t)}function lf(i,t){i.uniform3iv(this.addr,t)}function cf(i,t){i.uniform4iv(this.addr,t)}function df(i,t){i.uniform1uiv(this.addr,t)}function hf(i,t){i.uniform2uiv(this.addr,t)}function uf(i,t){i.uniform3uiv(this.addr,t)}function pf(i,t){i.uniform4uiv(this.addr,t)}function ff(i,t,e){const n=t.length,r=Tr(e,n);i.uniform1iv(this.addr,r);for(let o=0;o!==n;++o)e.setTexture2D(t[o]||pl,r[o])}function mf(i,t,e){const n=t.length,r=Tr(e,n);i.uniform1iv(this.addr,r);for(let o=0;o!==n;++o)e.setTexture3D(t[o]||ml,r[o])}function gf(i,t,e){const n=t.length,r=Tr(e,n);i.uniform1iv(this.addr,r);for(let o=0;o!==n;++o)e.setTextureCube(t[o]||gl,r[o])}function bf(i,t,e){const n=t.length,r=Tr(e,n);i.uniform1iv(this.addr,r);for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||fl,r[o])}function wf(i){switch(i){case 5126:return Kp;case 35664:return Qp;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return rf;case 35676:return of;case 5124:case 35670:return af;case 35667:case 35671:return sf;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return df;case 36294:return hf;case 36295:return uf;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return bf}}class xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Jp(e.type)}}class vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=wf(e.type)}}class yf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function cs(i,t){i.seq.push(t),i.map[t.id]=t}function _f(i,t,e){const n=i.name,r=n.length;for(ho.lastIndex=0;;){const o=ho.exec(n),s=ho.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){cs(e,c===void 0?new xf(a,i,t):new vf(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new yf(a),cs(e,h)),e=h}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),s=t.getUniformLocation(e,o.name);_f(o,s,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const s=t[r];s.id in e&&n.push(s)}return n}}function ds(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Mf=0;function Sf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}function kf(i){switch(i){case Nn:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function hs(i,t,e){const n=i.getShaderParameter(t,35713),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Sf(i.getShaderSource(t),s)}else return r}function Ef(i,t){const e=kf(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Tf(i,t){let e;switch(t){case Xc:e="Linear";break;case Yc:e="Reinhard";break;case $c:e="OptimizedCineon";break;case Zc:e="ACESFilmic";break;case Jc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Af(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function Cf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lf(i,t){const e={},n=i.getProgramParameter(t,35721);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Si(i){return i!==""}function us(i,t){return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ps(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(Df,Rf)}function Rf(i,t){const e=kt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Co(e)}const Pf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fs(i){return i.replace(zf,bl).replace(Pf,If)}function If(i,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),bl(i,t,e,n)}function bl(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ms(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ff(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Js?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ks?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Nf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case ai:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Of(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _r:t="ENVMAP_BLENDING_MULTIPLY";break;case jc:t="ENVMAP_BLENDING_MIX";break;case qc:t="ENVMAP_BLENDING_ADD";break}return t}function Bf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gf(i,t,e,n){const r=i.getContext(),o=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=Ff(e),c=Nf(e),d=Uf(e),h=Of(e),u=Bf(e),m=e.isWebGL2?"":Af(e),g=Cf(o),f=r.createProgram();let p,b,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Si).join(`
`),p.length>0&&(p+=`
`),b=[m,g].filter(Si).join(`
`),b.length>0&&(b+=`
`)):(p=[ms(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),b=[m,ms(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?kt.tonemapping_pars_fragment:"",e.toneMapping!==an?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.encodings_pars_fragment,Ef("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),s=Co(s),s=us(s,e),s=ps(s,e),a=Co(a),a=us(a,e),a=ps(a,e),s=fs(s),a=fs(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["#define varying in",e.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=y+p+s,k=y+b+a,M=ds(r,35633,S),A=ds(r,35632,k);if(r.attachShader(f,M),r.attachShader(f,A),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(A).trim();let Q=!0,$=!0;if(r.getProgramParameter(f,35714)===!1){Q=!1;const L=hs(r,M,"vertex"),W=hs(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+E+`
`+L+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||z==="")&&($=!1);$&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:b}})}r.deleteShader(M),r.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new pr(r,f)),D};let x;return this.getAttributes=function(){return x===void 0&&(x=Lf(r,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Mf++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=A,this}let Vf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Wf(t);e.set(t,n)}return e.get(t)}}class Wf{constructor(t){this.id=Vf++,this.code=t,this.usedTimes=0}}function jf(i,t,e,n,r,o,s){const a=new Ho,l=new Hf,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,E,P,z,Q){const $=z.fog,L=Q.geometry,W=x.isMeshStandardMaterial?z.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),G=!!O&&O.mapping===Mr?O.image.height:null,j=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,H=F!==void 0?F.length:0;let Z=0;L.morphAttributes.position!==void 0&&(Z=1),L.morphAttributes.normal!==void 0&&(Z=2),L.morphAttributes.color!==void 0&&(Z=3);let N,Y,lt,ht;if(j){const It=Oe[j];N=It.vertexShader,Y=It.fragmentShader}else N=x.vertexShader,Y=x.fragmentShader,l.update(x),lt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const q=i.getRenderTarget(),Ut=x.alphaTest>0,yt=x.clearcoat>0,_t=x.iridescence>0;return{isWebGL2:d,shaderID:j,shaderName:x.type,vertexShader:N,fragmentShader:Y,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:u,outputEncoding:q===null?i.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Nn,map:!!x.map,matcap:!!x.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:G,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===gd,tangentSpaceNormalMap:x.normalMapType===ui,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Bt,clearcoat:yt,clearcoatMap:yt&&!!x.clearcoatMap,clearcoatRoughnessMap:yt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:yt&&!!x.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!x.iridescenceMap,iridescenceThicknessMap:_t&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ii,alphaMap:!!x.alphaMap,alphaTest:Ut,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!$,useFog:x.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:an,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===Ae,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(b(E,x),y(E,x),E.push(i.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),x.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),x.push(a.mask)}function S(x){const E=g[x.type];let P;if(E){const z=Oe[E];P=Dd.clone(z.uniforms)}else P=x.uniforms;return P}function k(x,E){let P;for(let z=0,Q=c.length;z<Q;z++){const $=c[z];if($.cacheKey===E){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Gf(i,E,x,o),c.push(P)),P}function M(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:S,acquireProgram:k,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:D}}function qf(){let i=new WeakMap;function t(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function e(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gs(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bs(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(h,u,m,g,f,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=u,b.material=m,b.groupOrder=g,b.renderOrder=h.renderOrder,b.z=f,b.group=p),t++,b}function a(h,u,m,g,f,p){const b=s(h,u,m,g,f,p);m.transmission>0?n.push(b):m.transparent===!0?r.push(b):e.push(b)}function l(h,u,m,g,f,p){const b=s(h,u,m,g,f,p);m.transmission>0?n.unshift(b):m.transparent===!0?r.unshift(b):e.unshift(b)}function c(h,u){e.length>1&&e.sort(h||Xf),n.length>1&&n.sort(u||gs),r.length>1&&r.sort(u||gs)}function d(){for(let h=t,u=i.length;h<u;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function Yf(){let i=new WeakMap;function t(n,r){let o;return i.has(n)===!1?(o=new bs,i.set(n,[o])):r>=i.get(n).length?(o=new bs,i.get(n).push(o)):o=i.get(n)[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $f(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new mt};break;case"SpotLight":e={position:new C,direction:new C,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Zf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jf=0;function Kf(i,t){return(t.castShadow?1:0)-(i.castShadow?1:0)}function Qf(i,t){const e=new $f,n=Zf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new C);const o=new C,s=new qt,a=new qt;function l(d,h){let u=0,m=0,g=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let f=0,p=0,b=0,y=0,S=0,k=0,M=0,A=0;d.sort(Kf);const D=h!==!0?Math.PI:1;for(let E=0,P=d.length;E<P;E++){const z=d[E],Q=z.color,$=z.intensity,L=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=Q.r*$*D,m+=Q.g*$*D,g+=Q.b*$*D;else if(z.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(z.sh.coefficients[O],$);else if(z.isDirectionalLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity*D),z.castShadow){const G=z.shadow,j=n.get(z);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[f]=j,r.directionalShadowMap[f]=W,r.directionalShadowMatrix[f]=z.shadow.matrix,k++}r.directional[f]=O,f++}else if(z.isSpotLight){const O=e.get(z);if(O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(Q).multiplyScalar($*D),O.distance=L,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,z.castShadow){const G=z.shadow,j=n.get(z);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=W,r.spotShadowMatrix[b]=z.shadow.matrix,A++}r.spot[b]=O,b++}else if(z.isRectAreaLight){const O=e.get(z);O.color.copy(Q).multiplyScalar($),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=O,y++}else if(z.isPointLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity*D),O.distance=z.distance,O.decay=z.decay,z.castShadow){const G=z.shadow,j=n.get(z);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[p]=j,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=z.shadow.matrix,M++}r.point[p]=O,p++}else if(z.isHemisphereLight){const O=e.get(z);O.skyColor.copy(z.color).multiplyScalar($*D),O.groundColor.copy(z.groundColor).multiplyScalar($*D),r.hemi[S]=O,S++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=g;const x=r.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==b||x.rectAreaLength!==y||x.hemiLength!==S||x.numDirectionalShadows!==k||x.numPointShadows!==M||x.numSpotShadows!==A)&&(r.directional.length=f,r.spot.length=b,r.rectArea.length=y,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,x.directionalLength=f,x.pointLength=p,x.spotLength=b,x.rectAreaLength=y,x.hemiLength=S,x.numDirectionalShadows=k,x.numPointShadows=M,x.numSpotShadows=A,r.version=Jf++)}function c(d,h){let u=0,m=0,g=0,f=0,p=0;const b=h.matrixWorldInverse;for(let y=0,S=d.length;y<S;y++){const k=d[y];if(k.isDirectionalLight){const M=r.directional[u];M.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(b),u++}else if(k.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(b),M.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(b),g++}else if(k.isRectAreaLight){const M=r.rectArea[f];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(b),a.identity(),s.copy(k.matrixWorld),s.premultiply(b),a.extractRotation(s),M.halfWidth.set(k.width*.5,0,0),M.halfHeight.set(0,k.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),f++}else if(k.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(b),m++}else if(k.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(k.matrixWorld),M.direction.transformDirection(b),p++}}}return{setup:l,setupView:c,state:r}}function ws(i,t){const e=new Qf(i,t),n=[],r=[];function o(){n.length=0,r.length=0}function s(h){n.push(h)}function a(h){r.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function tm(i,t){let e=new WeakMap;function n(o,s=0){let a;return e.has(o)===!1?(a=new ws(i,t),e.set(o,[a])):s>=e.get(o).length?(a=new ws(i,t),e.get(o).push(a)):a=e.get(o)[s],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class wl extends te{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xl extends te{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(i,t,e){let n=new jo;const r=new Et,o=new Et,s=new Gt,a=new wl({depthPacking:md}),l=new xl,c={},d=e.maxTextureSize,h={0:Ae,1:Ai,2:He},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:em,fragmentShader:nm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new we(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js,this.render=function(k,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||k.length===0)return;const D=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(xn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,Q=k.length;z<Q;z++){const $=k[z],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),o.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/W.x),r.x=o.x*W.x,L.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/W.y),r.y=o.y*W.y,L.mapSize.y=o.y)),L.map===null&&!L.isPointLightShadow&&this.type===Mi&&(L.map=new vn(r.x,r.y),L.map.texture.name=$.name+".shadowMap",L.mapPass=new vn(r.x,r.y),L.camera.updateProjectionMatrix()),L.map===null){const G={minFilter:de,magFilter:de,format:Te};L.map=new vn(r.x,r.y,G),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const O=L.getViewportCount();for(let G=0;G<O;G++){const j=L.getViewport(G);s.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),P.viewport(s),L.updateMatrices($,G),n=L.getFrustum(),S(M,A,L.camera,$,this.type)}!L.isPointLightShadow&&this.type===Mi&&b(L,A),L.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(D,x,E)};function b(k,M){const A=t.update(f);u.defines.VSM_SAMPLES!==k.blurSamples&&(u.defines.VSM_SAMPLES=k.blurSamples,m.defines.VSM_SAMPLES=k.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),u.uniforms.shadow_pass.value=k.map.texture,u.uniforms.resolution.value=k.mapSize,u.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(M,null,A,u,f,null),m.uniforms.shadow_pass.value=k.mapPass.texture,m.uniforms.resolution.value=k.mapSize,m.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(M,null,A,m,f,null)}function y(k,M,A,D,x,E){let P=null;const z=A.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0?P=z:P=A.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Q=P.uuid,$=M.uuid;let L=c[Q];L===void 0&&(L={},c[Q]=L);let W=L[$];W===void 0&&(W=P.clone(),L[$]=W),P=W}return P.visible=M.visible,P.wireframe=M.wireframe,E===Mi?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=D,P.farDistance=x),P}function S(k,M,A,D,x){if(k.visible===!1)return;if(k.layers.test(M.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&x===Mi)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,k.matrixWorld);const z=t.update(k),Q=k.material;if(Array.isArray(Q)){const $=z.groups;for(let L=0,W=$.length;L<W;L++){const O=$[L],G=Q[O.materialIndex];if(G&&G.visible){const j=y(k,G,D,A.near,A.far,x);i.renderBufferDirect(A,null,z,j,k,O)}}}else if(Q.visible){const $=y(k,Q,D,A.near,A.far,x);i.renderBufferDirect(A,null,z,$,k,null)}}const P=k.children;for(let z=0,Q=P.length;z<Q;z++)S(P[z],M,A,D,x)}}function rm(i,t,e){const n=e.isWebGL2;function r(){let T=!1;const nt=new Gt;let et=null;const pt=new Gt(0,0,0,0);return{setMask:function(st){et!==st&&!T&&(i.colorMask(st,st,st,st),et=st)},setLocked:function(st){T=st},setClear:function(st,gt,K,bt,Rt){Rt===!0&&(st*=bt,gt*=bt,K*=bt),nt.set(st,gt,K,bt),pt.equals(nt)===!1&&(i.clearColor(st,gt,K,bt),pt.copy(nt))},reset:function(){T=!1,et=null,pt.set(-1,0,0,0)}}}function o(){let T=!1,nt=null,et=null,pt=null;return{setTest:function(st){st?ht(2929):q(2929)},setMask:function(st){nt!==st&&!T&&(i.depthMask(st),nt=st)},setFunc:function(st){if(et!==st){if(st)switch(st){case Uc:i.depthFunc(512);break;case Oc:i.depthFunc(519);break;case Bc:i.depthFunc(513);break;case yo:i.depthFunc(515);break;case Gc:i.depthFunc(514);break;case Vc:i.depthFunc(518);break;case Hc:i.depthFunc(516);break;case Wc:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);et=st}},setLocked:function(st){T=st},setClear:function(st){pt!==st&&(i.clearDepth(st),pt=st)},reset:function(){T=!1,nt=null,et=null,pt=null}}}function s(){let T=!1,nt=null,et=null,pt=null,st=null,gt=null,K=null,bt=null,Rt=null;return{setTest:function(Pt){T||(Pt?ht(2960):q(2960))},setMask:function(Pt){nt!==Pt&&!T&&(i.stencilMask(Pt),nt=Pt)},setFunc:function(Pt,ie,Re){(et!==Pt||pt!==ie||st!==Re)&&(i.stencilFunc(Pt,ie,Re),et=Pt,pt=ie,st=Re)},setOp:function(Pt,ie,Re){(gt!==Pt||K!==ie||bt!==Re)&&(i.stencilOp(Pt,ie,Re),gt=Pt,K=ie,bt=Re)},setLocked:function(Pt){T=Pt},setClear:function(Pt){Rt!==Pt&&(i.clearStencil(Pt),Rt=Pt)},reset:function(){T=!1,nt=null,et=null,pt=null,st=null,gt=null,K=null,bt=null,Rt=null}}}const a=new r,l=new o,c=new s;let d={},h={},u=new WeakMap,m=[],g=null,f=!1,p=null,b=null,y=null,S=null,k=null,M=null,A=null,D=!1,x=null,E=null,P=null,z=null,Q=null;const $=i.getParameter(35661);let L=!1,W=0;const O=i.getParameter(7938);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=W>=2);let G=null,j={};const F=i.getParameter(3088),H=i.getParameter(2978),Z=new Gt().fromArray(F),N=new Gt().fromArray(H);function Y(T,nt,et){const pt=new Uint8Array(4),st=i.createTexture();i.bindTexture(T,st),i.texParameteri(T,10241,9728),i.texParameteri(T,10240,9728);for(let gt=0;gt<et;gt++)i.texImage2D(nt+gt,0,6408,1,1,0,6408,5121,pt);return st}const lt={};lt[3553]=Y(3553,3553,1),lt[34067]=Y(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ht(2929),l.setFunc(yo),ee(!1),ce(la),ht(2884),Tt(xn);function ht(T){d[T]!==!0&&(i.enable(T),d[T]=!0)}function q(T){d[T]!==!1&&(i.disable(T),d[T]=!1)}function Ut(T,nt){return h[T]!==nt?(i.bindFramebuffer(T,nt),h[T]=nt,n&&(T===36009&&(h[36160]=nt),T===36160&&(h[36009]=nt)),!0):!1}function yt(T,nt){let et=m,pt=!1;if(T)if(et=u.get(nt),et===void 0&&(et=[],u.set(nt,et)),T.isWebGLMultipleRenderTargets){const st=T.texture;if(et.length!==st.length||et[0]!==36064){for(let gt=0,K=st.length;gt<K;gt++)et[gt]=36064+gt;et.length=st.length,pt=!0}}else et[0]!==36064&&(et[0]=36064,pt=!0);else et[0]!==1029&&(et[0]=1029,pt=!0);pt&&(e.isWebGL2?i.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function _t(T){return g!==T?(i.useProgram(T),g=T,!0):!1}const ot={[ei]:32774,[Tc]:32778,[Ac]:32779};if(n)ot[ua]=32775,ot[pa]=32776;else{const T=t.get("EXT_blend_minmax");T!==null&&(ot[ua]=T.MIN_EXT,ot[pa]=T.MAX_EXT)}const It={[Cc]:0,[Lc]:1,[Dc]:768,[Qs]:770,[Nc]:776,[Ic]:774,[Pc]:772,[Rc]:769,[tl]:771,[Fc]:775,[zc]:773};function Tt(T,nt,et,pt,st,gt,K,bt){if(T===xn){f===!0&&(q(3042),f=!1);return}if(f===!1&&(ht(3042),f=!0),T!==Ec){if(T!==p||bt!==D){if((b!==ei||k!==ei)&&(i.blendEquation(32774),b=ei,k=ei),bt)switch(T){case ii:i.blendFuncSeparate(1,771,1,771);break;case ca:i.blendFunc(1,1);break;case da:i.blendFuncSeparate(0,769,0,1);break;case ha:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ii:i.blendFuncSeparate(770,771,1,771);break;case ca:i.blendFunc(770,1);break;case da:i.blendFuncSeparate(0,769,0,1);break;case ha:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,S=null,M=null,A=null,p=T,D=bt}return}st=st||nt,gt=gt||et,K=K||pt,(nt!==b||st!==k)&&(i.blendEquationSeparate(ot[nt],ot[st]),b=nt,k=st),(et!==y||pt!==S||gt!==M||K!==A)&&(i.blendFuncSeparate(It[et],It[pt],It[gt],It[K]),y=et,S=pt,M=gt,A=K),p=T,D=null}function wt(T,nt){T.side===He?q(2884):ht(2884);let et=T.side===Ae;nt&&(et=!et),ee(et),T.blending===ii&&T.transparent===!1?Tt(xn):Tt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const pt=T.stencilWrite;c.setTest(pt),pt&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),De(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ht(32926):q(32926)}function ee(T){x!==T&&(T?i.frontFace(2304):i.frontFace(2305),x=T)}function ce(T){T!==Mc?(ht(2884),T!==E&&(T===la?i.cullFace(1029):T===Sc?i.cullFace(1028):i.cullFace(1032))):q(2884),E=T}function pe(T){T!==P&&(L&&i.lineWidth(T),P=T)}function De(T,nt,et){T?(ht(32823),(z!==nt||Q!==et)&&(i.polygonOffset(nt,et),z=nt,Q=et)):q(32823)}function Jt(T){T?ht(3089):q(3089)}function Ft(T){T===void 0&&(T=33984+$-1),G!==T&&(i.activeTexture(T),G=T)}function Xe(T,nt){G===null&&Ft();let et=j[G];et===void 0&&(et={type:void 0,texture:void 0},j[G]=et),(et.type!==T||et.texture!==nt)&&(i.bindTexture(T,nt||lt[T]),et.type=T,et.texture=nt)}function Ye(){const T=j[G];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function w(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function V(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function B(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(T){Z.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function ct(T){N.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),N.copy(T))}function at(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},G=null,j={},h={},u=new WeakMap,m=[],g=null,f=!1,p=null,b=null,y=null,S=null,k=null,M=null,A=null,D=!1,x=null,E=null,P=null,z=null,Q=null,Z.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ht,disable:q,bindFramebuffer:Ut,drawBuffers:yt,useProgram:_t,setBlending:Tt,setMaterial:wt,setFlipSided:ee,setCullFace:ce,setLineWidth:pe,setPolygonOffset:De,setScissorTest:Jt,activeTexture:Ft,bindTexture:Xe,unbindTexture:Ye,compressedTexImage2D:_,texImage2D:xt,texImage3D:B,texStorage2D:tt,texStorage3D:rt,texSubImage2D:w,texSubImage3D:V,compressedTexSubImage2D:J,scissor:ut,viewport:ct,reset:at}}function om(i,t,e,n,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(_,w){return b?new OffscreenCanvas(_,w):mr("canvas")}function S(_,w,V,J){let tt=1;if((_.width>J||_.height>J)&&(tt=J/Math.max(_.width,_.height)),tt<1||w===!0)if(typeof HTMLImageElement!="undefined"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&_ instanceof ImageBitmap){const rt=w?Ao:Math.floor,xt=rt(tt*_.width),B=rt(tt*_.height);f===void 0&&(f=y(xt,B));const ut=V?y(xt,B):f;return ut.width=xt,ut.height=B,ut.getContext("2d").drawImage(_,0,0,xt,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+xt+"x"+B+")."),ut}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function k(_){return Oa(_.width)&&Oa(_.height)}function M(_){return a?!1:_.wrapS!==Ee||_.wrapT!==Ee||_.minFilter!==de&&_.minFilter!==ve}function A(_,w){return _.generateMipmaps&&w&&_.minFilter!==de&&_.minFilter!==ve}function D(_){i.generateMipmap(_)}function x(_,w,V,J,tt=!1){if(a===!1)return w;if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let rt=w;return w===6403&&(V===5126&&(rt=33326),V===5131&&(rt=33325),V===5121&&(rt=33321)),w===33319&&(V===5126&&(rt=33328),V===5131&&(rt=33327),V===5121&&(rt=33323)),w===6408&&(V===5126&&(rt=34836),V===5131&&(rt=34842),V===5121&&(rt=J===Bt&&tt===!1?35907:32856),V===32819&&(rt=32854),V===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function E(_,w,V){return A(_,V)===!0||_.isFramebufferTexture&&_.minFilter!==de&&_.minFilter!==ve?Math.log2(Math.max(w.width,w.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?w.mipmaps.length:1}function P(_){return _===de||_===fa||_===ma?9728:9729}function z(_){const w=_.target;w.removeEventListener("dispose",z),$(w),w.isVideoTexture&&g.delete(w)}function Q(_){const w=_.target;w.removeEventListener("dispose",Q),W(w)}function $(_){const w=n.get(_);if(w.__webglInit===void 0)return;const V=_.source,J=p.get(V);if(J){const tt=J[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(_),Object.keys(J).length===0&&p.delete(V)}n.remove(_)}function L(_){const w=n.get(_);i.deleteTexture(w.__webglTexture);const V=_.source,J=p.get(V);delete J[w.__cacheKey],s.memory.textures--}function W(_){const w=_.texture,V=n.get(_),J=n.get(w);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)i.deleteFramebuffer(V.__webglFramebuffer[tt]),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[tt]);else{if(i.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let tt=0;tt<V.__webglColorRenderbuffer.length;tt++)V.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[tt]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let tt=0,rt=w.length;tt<rt;tt++){const xt=n.get(w[tt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(w[tt])}n.remove(w),n.remove(_)}let O=0;function G(){O=0}function j(){const _=O;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),O+=1,_}function F(_){const w=[];return w.push(_.wrapS),w.push(_.wrapT),w.push(_.magFilter),w.push(_.minFilter),w.push(_.anisotropy),w.push(_.internalFormat),w.push(_.format),w.push(_.type),w.push(_.generateMipmaps),w.push(_.premultiplyAlpha),w.push(_.flipY),w.push(_.unpackAlignment),w.push(_.encoding),w.join()}function H(_,w){const V=n.get(_);if(_.isVideoTexture&&Xe(_),_.isRenderTargetTexture===!1&&_.version>0&&V.__version!==_.version){const J=_.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(V,_,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,V.__webglTexture)}function Z(_,w){const V=n.get(_);if(_.version>0&&V.__version!==_.version){yt(V,_,w);return}e.activeTexture(33984+w),e.bindTexture(35866,V.__webglTexture)}function N(_,w){const V=n.get(_);if(_.version>0&&V.__version!==_.version){yt(V,_,w);return}e.activeTexture(33984+w),e.bindTexture(32879,V.__webglTexture)}function Y(_,w){const V=n.get(_);if(_.version>0&&V.__version!==_.version){_t(V,_,w);return}e.activeTexture(33984+w),e.bindTexture(34067,V.__webglTexture)}const lt={[So]:10497,[Ee]:33071,[ko]:33648},ht={[de]:9728,[fa]:9984,[ma]:9986,[ve]:9729,[Kc]:9985,[Sr]:9987};function q(_,w,V){if(V?(i.texParameteri(_,10242,lt[w.wrapS]),i.texParameteri(_,10243,lt[w.wrapT]),(_===32879||_===35866)&&i.texParameteri(_,32882,lt[w.wrapR]),i.texParameteri(_,10240,ht[w.magFilter]),i.texParameteri(_,10241,ht[w.minFilter])):(i.texParameteri(_,10242,33071),i.texParameteri(_,10243,33071),(_===32879||_===35866)&&i.texParameteri(_,32882,33071),(w.wrapS!==Ee||w.wrapT!==Ee)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(_,10240,P(w.magFilter)),i.texParameteri(_,10241,P(w.minFilter)),w.minFilter!==de&&w.minFilter!==ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(w.type===Ln&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ci&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(_,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ut(_,w){let V=!1;_.__webglInit===void 0&&(_.__webglInit=!0,w.addEventListener("dispose",z));const J=w.source;let tt=p.get(J);tt===void 0&&(tt={},p.set(J,tt));const rt=F(w);if(rt!==_.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,V=!0),tt[rt].usedTimes++;const xt=tt[_.__cacheKey];xt!==void 0&&(tt[_.__cacheKey].usedTimes--,xt.usedTimes===0&&L(w)),_.__cacheKey=rt,_.__webglTexture=tt[rt].texture}return V}function yt(_,w,V){let J=3553;w.isDataArrayTexture&&(J=35866),w.isData3DTexture&&(J=32879);const tt=Ut(_,w),rt=w.source;if(e.activeTexture(33984+V),e.bindTexture(J,_.__webglTexture),rt.version!==rt.__currentVersion||tt===!0){i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const xt=M(w)&&k(w.image)===!1;let B=S(w.image,xt,!1,d);B=Ye(w,B);const ut=k(B)||a,ct=o.convert(w.format,w.encoding);let at=o.convert(w.type),T=x(w.internalFormat,ct,at,w.encoding,w.isVideoTexture);q(J,w,ut);let nt;const et=w.mipmaps,pt=a&&w.isVideoTexture!==!0,st=rt.__currentVersion===void 0||tt===!0,gt=E(w,B,ut);if(w.isDepthTexture)T=6402,a?w.type===Ln?T=36012:w.type===Cn?T=33190:w.type===ri?T=35056:T=33189:w.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Pn&&T===6402&&w.type!==nl&&w.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Cn,at=o.convert(w.type)),w.format===si&&T===6402&&(T=34041,w.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ri,at=o.convert(w.type))),st&&(pt?e.texStorage2D(3553,1,T,B.width,B.height):e.texImage2D(3553,0,T,B.width,B.height,0,ct,at,null));else if(w.isDataTexture)if(et.length>0&&ut){pt&&st&&e.texStorage2D(3553,gt,T,et[0].width,et[0].height);for(let K=0,bt=et.length;K<bt;K++)nt=et[K],pt?e.texSubImage2D(3553,K,0,0,nt.width,nt.height,ct,at,nt.data):e.texImage2D(3553,K,T,nt.width,nt.height,0,ct,at,nt.data);w.generateMipmaps=!1}else pt?(st&&e.texStorage2D(3553,gt,T,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,ct,at,B.data)):e.texImage2D(3553,0,T,B.width,B.height,0,ct,at,B.data);else if(w.isCompressedTexture){pt&&st&&e.texStorage2D(3553,gt,T,et[0].width,et[0].height);for(let K=0,bt=et.length;K<bt;K++)nt=et[K],w.format!==Te?ct!==null?pt?e.compressedTexSubImage2D(3553,K,0,0,nt.width,nt.height,ct,nt.data):e.compressedTexImage2D(3553,K,T,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(3553,K,0,0,nt.width,nt.height,ct,at,nt.data):e.texImage2D(3553,K,T,nt.width,nt.height,0,ct,at,nt.data)}else if(w.isDataArrayTexture)pt?(st&&e.texStorage3D(35866,gt,T,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ct,at,B.data)):e.texImage3D(35866,0,T,B.width,B.height,B.depth,0,ct,at,B.data);else if(w.isData3DTexture)pt?(st&&e.texStorage3D(32879,gt,T,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ct,at,B.data)):e.texImage3D(32879,0,T,B.width,B.height,B.depth,0,ct,at,B.data);else if(w.isFramebufferTexture){if(st)if(pt)e.texStorage2D(3553,gt,T,B.width,B.height);else{let K=B.width,bt=B.height;for(let Rt=0;Rt<gt;Rt++)e.texImage2D(3553,Rt,T,K,bt,0,ct,at,null),K>>=1,bt>>=1}}else if(et.length>0&&ut){pt&&st&&e.texStorage2D(3553,gt,T,et[0].width,et[0].height);for(let K=0,bt=et.length;K<bt;K++)nt=et[K],pt?e.texSubImage2D(3553,K,0,0,ct,at,nt):e.texImage2D(3553,K,T,ct,at,nt);w.generateMipmaps=!1}else pt?(st&&e.texStorage2D(3553,gt,T,B.width,B.height),e.texSubImage2D(3553,0,0,0,ct,at,B)):e.texImage2D(3553,0,T,ct,at,B);A(w,ut)&&D(J),rt.__currentVersion=rt.version,w.onUpdate&&w.onUpdate(w)}_.__version=w.version}function _t(_,w,V){if(w.image.length!==6)return;const J=Ut(_,w),tt=w.source;if(e.activeTexture(33984+V),e.bindTexture(34067,_.__webglTexture),tt.version!==tt.__currentVersion||J===!0){i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,xt=w.image[0]&&w.image[0].isDataTexture,B=[];for(let K=0;K<6;K++)!rt&&!xt?B[K]=S(w.image[K],!1,!0,c):B[K]=xt?w.image[K].image:w.image[K],B[K]=Ye(w,B[K]);const ut=B[0],ct=k(ut)||a,at=o.convert(w.format,w.encoding),T=o.convert(w.type),nt=x(w.internalFormat,at,T,w.encoding),et=a&&w.isVideoTexture!==!0,pt=tt.__currentVersion===void 0||J===!0;let st=E(w,ut,ct);q(34067,w,ct);let gt;if(rt){et&&pt&&e.texStorage2D(34067,st,nt,ut.width,ut.height);for(let K=0;K<6;K++){gt=B[K].mipmaps;for(let bt=0;bt<gt.length;bt++){const Rt=gt[bt];w.format!==Te?at!==null?et?e.compressedTexSubImage2D(34069+K,bt,0,0,Rt.width,Rt.height,at,Rt.data):e.compressedTexImage2D(34069+K,bt,nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?e.texSubImage2D(34069+K,bt,0,0,Rt.width,Rt.height,at,T,Rt.data):e.texImage2D(34069+K,bt,nt,Rt.width,Rt.height,0,at,T,Rt.data)}}}else{gt=w.mipmaps,et&&pt&&(gt.length>0&&st++,e.texStorage2D(34067,st,nt,B[0].width,B[0].height));for(let K=0;K<6;K++)if(xt){et?e.texSubImage2D(34069+K,0,0,0,B[K].width,B[K].height,at,T,B[K].data):e.texImage2D(34069+K,0,nt,B[K].width,B[K].height,0,at,T,B[K].data);for(let bt=0;bt<gt.length;bt++){const Pt=gt[bt].image[K].image;et?e.texSubImage2D(34069+K,bt+1,0,0,Pt.width,Pt.height,at,T,Pt.data):e.texImage2D(34069+K,bt+1,nt,Pt.width,Pt.height,0,at,T,Pt.data)}}else{et?e.texSubImage2D(34069+K,0,0,0,at,T,B[K]):e.texImage2D(34069+K,0,nt,at,T,B[K]);for(let bt=0;bt<gt.length;bt++){const Rt=gt[bt];et?e.texSubImage2D(34069+K,bt+1,0,0,at,T,Rt.image[K]):e.texImage2D(34069+K,bt+1,nt,at,T,Rt.image[K])}}}A(w,ct)&&D(34067),tt.__currentVersion=tt.version,w.onUpdate&&w.onUpdate(w)}_.__version=w.version}function ot(_,w,V,J,tt){const rt=o.convert(V.format,V.encoding),xt=o.convert(V.type),B=x(V.internalFormat,rt,xt,V.encoding);n.get(w).__hasExternalTextures||(tt===32879||tt===35866?e.texImage3D(tt,0,B,w.width,w.height,w.depth,0,rt,xt,null):e.texImage2D(tt,0,B,w.width,w.height,0,rt,xt,null)),e.bindFramebuffer(36160,_),Ft(w)?u.framebufferTexture2DMultisampleEXT(36160,J,tt,n.get(V).__webglTexture,0,Jt(w)):i.framebufferTexture2D(36160,J,tt,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(_,w,V){if(i.bindRenderbuffer(36161,_),w.depthBuffer&&!w.stencilBuffer){let J=33189;if(V||Ft(w)){const tt=w.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Ln?J=36012:tt.type===Cn&&(J=33190));const rt=Jt(w);Ft(w)?u.renderbufferStorageMultisampleEXT(36161,rt,J,w.width,w.height):i.renderbufferStorageMultisample(36161,rt,J,w.width,w.height)}else i.renderbufferStorage(36161,J,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,_)}else if(w.depthBuffer&&w.stencilBuffer){const J=Jt(w);V&&Ft(w)===!1?i.renderbufferStorageMultisample(36161,J,35056,w.width,w.height):Ft(w)?u.renderbufferStorageMultisampleEXT(36161,J,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,_)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0;tt<J.length;tt++){const rt=J[tt],xt=o.convert(rt.format,rt.encoding),B=o.convert(rt.type),ut=x(rt.internalFormat,xt,B,rt.encoding),ct=Jt(w);V&&Ft(w)===!1?i.renderbufferStorageMultisample(36161,ct,ut,w.width,w.height):Ft(w)?u.renderbufferStorageMultisampleEXT(36161,ct,ut,w.width,w.height):i.renderbufferStorage(36161,ut,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Tt(_,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,_),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture,tt=Jt(w);if(w.depthTexture.format===Pn)Ft(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,tt):i.framebufferTexture2D(36160,36096,3553,J,0);else if(w.depthTexture.format===si)Ft(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,tt):i.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function wt(_){const w=n.get(_),V=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,_)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=i.createRenderbuffer(),It(w.__webglDepthbuffer[J],_,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),It(w.__webglDepthbuffer,_,!1);e.bindFramebuffer(36160,null)}function ee(_,w,V){const J=n.get(_);w!==void 0&&ot(J.__webglFramebuffer,_,_.texture,36064,3553),V!==void 0&&wt(_)}function ce(_){const w=_.texture,V=n.get(_),J=n.get(w);_.addEventListener("dispose",Q),_.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,s.memory.textures++);const tt=_.isWebGLCubeRenderTarget===!0,rt=_.isWebGLMultipleRenderTargets===!0,xt=k(_)||a;if(tt){V.__webglFramebuffer=[];for(let B=0;B<6;B++)V.__webglFramebuffer[B]=i.createFramebuffer()}else{if(V.__webglFramebuffer=i.createFramebuffer(),rt)if(r.drawBuffers){const B=_.texture;for(let ut=0,ct=B.length;ut<ct;ut++){const at=n.get(B[ut]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&_.samples>0&&Ft(_)===!1){const B=rt?w:[w];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let ut=0;ut<B.length;ut++){const ct=B[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(36161,V.__webglColorRenderbuffer[ut]);const at=o.convert(ct.format,ct.encoding),T=o.convert(ct.type),nt=x(ct.internalFormat,at,T,ct.encoding),et=Jt(_);i.renderbufferStorageMultisample(36161,et,nt,_.width,_.height),i.framebufferRenderbuffer(36160,36064+ut,36161,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(36161,null),_.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),It(V.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(36160,null)}}if(tt){e.bindTexture(34067,J.__webglTexture),q(34067,w,xt);for(let B=0;B<6;B++)ot(V.__webglFramebuffer[B],_,w,36064,34069+B);A(w,xt)&&D(34067),e.unbindTexture()}else if(rt){const B=_.texture;for(let ut=0,ct=B.length;ut<ct;ut++){const at=B[ut],T=n.get(at);e.bindTexture(3553,T.__webglTexture),q(3553,at,xt),ot(V.__webglFramebuffer,_,at,36064+ut,3553),A(at,xt)&&D(3553)}e.unbindTexture()}else{let B=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(a?B=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(B,J.__webglTexture),q(B,w,xt),ot(V.__webglFramebuffer,_,w,36064,B),A(w,xt)&&D(B),e.unbindTexture()}_.depthBuffer&&wt(_)}function pe(_){const w=k(_)||a,V=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0,tt=V.length;J<tt;J++){const rt=V[J];if(A(rt,w)){const xt=_.isWebGLCubeRenderTarget?34067:3553,B=n.get(rt).__webglTexture;e.bindTexture(xt,B),D(xt),e.unbindTexture()}}}function De(_){if(a&&_.samples>0&&Ft(_)===!1){const w=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],V=_.width,J=_.height;let tt=16384;const rt=[],xt=_.stencilBuffer?33306:36096,B=n.get(_),ut=_.isWebGLMultipleRenderTargets===!0;if(ut)for(let ct=0;ct<w.length;ct++)e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,B.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,B.__webglFramebuffer);for(let ct=0;ct<w.length;ct++){rt.push(36064+ct),_.depthBuffer&&rt.push(xt);const at=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(at===!1&&(_.depthBuffer&&(tt|=256),_.stencilBuffer&&(tt|=1024)),ut&&i.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[ct]),at===!0&&(i.invalidateFramebuffer(36008,[xt]),i.invalidateFramebuffer(36009,[xt])),ut){const T=n.get(w[ct]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,T,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,tt,9728),m&&i.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ut)for(let ct=0;ct<w.length;ct++){e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ct,36161,B.__webglColorRenderbuffer[ct]);const at=n.get(w[ct]).__webglTexture;e.bindFramebuffer(36160,B.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ct,3553,at,0)}e.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function Jt(_){return Math.min(h,_.samples)}function Ft(_){const w=n.get(_);return a&&_.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(_){const w=s.render.frame;g.get(_)!==w&&(g.set(_,w),_.update())}function Ye(_,w){const V=_.encoding,J=_.format,tt=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Eo||V!==Nn&&(V===Bt?a===!1?t.has("EXT_sRGB")===!0&&J===Te?(_.format=Eo,_.minFilter=ve,_.generateMipmaps=!1):w=ol.sRGBToLinear(w):(J!==Te||tt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=N,this.setTextureCube=Y,this.rebindTextures=ee,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ft}function am(i,t,e){const n=e.isWebGL2;function r(o,s=null){let a;if(o===Fn)return 5121;if(o===nd)return 32819;if(o===id)return 32820;if(o===Qc)return 5120;if(o===td)return 5122;if(o===nl)return 5123;if(o===ed)return 5124;if(o===Cn)return 5125;if(o===Ln)return 5126;if(o===Ci)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===rd)return 6406;if(o===Te)return 6408;if(o===ad)return 6409;if(o===sd)return 6410;if(o===Pn)return 6402;if(o===si)return 34041;if(o===ld)return 6403;if(o===od)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===Eo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===cd)return 36244;if(o===dd)return 33319;if(o===hd)return 33320;if(o===ud)return 36249;if(o===Pr||o===zr||o===Ir||o===Fr)if(s===Bt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ga||o===ba||o===wa||o===xa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ga)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===xa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===pd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===va||o===ya)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===va)return s===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===ya)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===_a||o===Ma||o===Sa||o===ka||o===Ea||o===Ta||o===Aa||o===Ca||o===La||o===Da||o===Ra||o===Pa||o===za||o===Ia)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===_a)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ma)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Sa)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ka)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ea)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ta)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Aa)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ca)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===La)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Da)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ra)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Pa)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===za)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ia)return s===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Fa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===Fa)return s===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===ri?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class sm extends ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(r=e.getPose(t.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm))),c&&t.hand){s=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const y=new lr;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[f.jointName]=y,c.add(y)}const b=c.joints[f.jointName];p!==null&&(b.matrix.fromArray(p.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=p.radius),b.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}}class cm extends Ce{constructor(t,e,n,r,o,s,a,l,c,d){if(d=d!==void 0?d:Pn,d!==Pn&&d!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Pn&&(n=Cn),n===void 0&&d===si&&(n=ri),super(null,r,o,s,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1}}class dm extends pi{constructor(t,e){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=null,c=null,d=null,h=null,u=null,m=null;const g=e.getContextAttributes();let f=null,p=null;const b=[],y=new Map,S=new ue;S.layers.enable(1),S.viewport=new Gt;const k=new ue;k.layers.enable(2),k.viewport=new Gt;const M=[S,k],A=new sm;A.layers.enable(1),A.layers.enable(2);let D=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let H=b[F];return H===void 0&&(H=new uo,b[F]=H),H.getTargetRaySpace()},this.getControllerGrip=function(F){let H=b[F];return H===void 0&&(H=new uo,b[F]=H),H.getGripSpace()},this.getHand=function(F){let H=b[F];return H===void 0&&(H=new uo,b[F]=H),H.getHandSpace()};function E(F){const H=y.get(F.inputSource);H!==void 0&&H.dispatchEvent({type:F.type,data:F.inputSource})}function P(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",z),y.forEach(function(F,H){F!==void 0&&F.disconnect(H)}),y.clear(),D=null,x=null,t.setRenderTarget(f),u=null,h=null,d=null,r=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",P),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(r,e,H),r.updateRenderState({baseLayer:u}),p=new vn(u.framebufferWidth,u.framebufferHeight,{format:Te,type:Fn,encoding:t.outputEncoding})}else{let H=null,Z=null,N=null;g.depth&&(N=g.stencil?35056:33190,H=g.stencil?si:Pn,Z=g.stencil?ri:Cn);const Y={colorFormat:t.outputEncoding===Bt?35907:32856,depthFormat:N,scaleFactor:o};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(Y),r.updateRenderState({layers:[h]}),p=new vn(h.textureWidth,h.textureHeight,{format:Te,type:Fn,depthTexture:new cm(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const lt=t.properties.get(p);lt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await r.requestReferenceSpace(a),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(F){const H=r.inputSources;for(let Z=0;Z<H.length;Z++){const N=H[Z].handedness==="right"?1:0;y.set(H[Z],b[N])}for(let Z=0;Z<F.removed.length;Z++){const N=F.removed[Z],Y=y.get(N);Y&&(Y.dispatchEvent({type:"disconnected",data:N}),y.delete(N))}for(let Z=0;Z<F.added.length;Z++){const N=F.added[Z],Y=y.get(N);Y&&Y.dispatchEvent({type:"connected",data:N})}}const Q=new C,$=new C;function L(F,H,Z){Q.setFromMatrixPosition(H.matrixWorld),$.setFromMatrixPosition(Z.matrixWorld);const N=Q.distanceTo($),Y=H.projectionMatrix.elements,lt=Z.projectionMatrix.elements,ht=Y[14]/(Y[10]-1),q=Y[14]/(Y[10]+1),Ut=(Y[9]+1)/Y[5],yt=(Y[9]-1)/Y[5],_t=(Y[8]-1)/Y[0],ot=(lt[8]+1)/lt[0],It=ht*_t,Tt=ht*ot,wt=N/(-_t+ot),ee=wt*-_t;H.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ee),F.translateZ(wt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ce=ht+wt,pe=q+wt,De=It-ee,Jt=Tt+(N-ee),Ft=Ut*q/pe*ce,Xe=yt*q/pe*ce;F.projectionMatrix.makePerspective(De,Jt,Ft,Xe,ce,pe)}function W(F,H){H===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(H.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;A.near=k.near=S.near=F.near,A.far=k.far=S.far=F.far,(D!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,x=A.far);const H=F.parent,Z=A.cameras;W(A,H);for(let Y=0;Y<Z.length;Y++)W(Z[Y],H);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.position.copy(A.position),F.quaternion.copy(A.quaternion),F.scale.copy(A.scale),F.matrix.copy(A.matrix),F.matrixWorld.copy(A.matrixWorld);const N=F.children;for(let Y=0,lt=N.length;Y<lt;Y++)N[Y].updateMatrixWorld(!0);Z.length===2?L(A,S,k):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)};let O=null;function G(F,H){if(c=H.getViewerPose(l||s),m=H,c!==null){const N=c.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let Y=!1;N.length!==A.cameras.length&&(A.cameras.length=0,Y=!0);for(let lt=0;lt<N.length;lt++){const ht=N[lt];let q=null;if(u!==null)q=u.getViewport(ht);else{const yt=d.getViewSubImage(h,ht);q=yt.viewport,lt===0&&(t.setRenderTargetTextures(p,yt.colorTexture,h.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(p))}let Ut=M[lt];Ut===void 0&&(Ut=new ue,Ut.layers.enable(lt),Ut.viewport=new Gt,M[lt]=Ut),Ut.matrix.fromArray(ht.transform.matrix),Ut.projectionMatrix.fromArray(ht.projectionMatrix),Ut.viewport.set(q.x,q.y,q.width,q.height),lt===0&&A.matrix.copy(Ut.matrix),Y===!0&&A.cameras.push(Ut)}}const Z=r.inputSources;for(let N=0;N<b.length;N++){const Y=Z[N],lt=y.get(Y);lt!==void 0&&lt.update(Y,H,l||s)}O&&O(F,H),m=null}const j=new ul;j.setAnimationLoop(G),this.setAnimationLoop=function(F){O=F},this.dispose=function(){}}}function hm(i,t){function e(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,b,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),c(f,p)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&u(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),g(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?a(f,p,b,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Ae&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Ae&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=t.get(p).envMap;if(b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const k=i.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*k}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uv2Transform.value.copy(S.matrix))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,b,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=y*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uvTransform.value.copy(S.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ae&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function um(){const i=mr("canvas");return i.style.display="block",i}function Xo(i={}){this.isWebGLRenderer=!0;const t=i.canvas!==void 0?i.canvas:um(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,s=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let d;e!==null?d=e.getContextAttributes().alpha:d=i.alpha!==void 0?i.alpha:!1;let h=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Nn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,b=0,y=0,S=null,k=-1,M=null;const A=new Gt,D=new Gt;let x=null,E=t.width,P=t.height,z=1,Q=null,$=null;const L=new Gt(0,0,E,P),W=new Gt(0,0,E,P);let O=!1;const G=new jo;let j=!1,F=!1,H=null;const Z=new qt,N=new Et,Y=new C,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return S===null?z:1}let q=e;function Ut(v,R){for(let U=0;U<v.length;U++){const I=v[U],X=t.getContext(I,R);if(X!==null)return X}return null}try{const v={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",T,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",et,!1),q===null){const R=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&R.shift(),q=Ut(R,v),q===null)throw Ut(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let yt,_t,ot,It,Tt,wt,ee,ce,pe,De,Jt,Ft,Xe,Ye,_,w,V,J,tt,rt,xt,B,ut;function ct(){yt=new Sp(q),_t=new bp(q,yt,i),yt.init(_t),B=new am(q,yt,_t),ot=new rm(q,yt,_t),It=new Tp,Tt=new qf,wt=new om(q,yt,ot,Tt,_t,B,It),ee=new xp(f),ce=new Mp(f),pe=new Ud(q,_t),ut=new mp(q,yt,pe,_t),De=new kp(q,pe,It,ut),Jt=new Dp(q,De,pe,It),tt=new Lp(q,_t,wt),w=new wp(Tt),Ft=new jf(f,ee,ce,yt,_t,ut,w),Xe=new hm(f,Tt),Ye=new Yf,_=new tm(yt,_t),J=new fp(f,ee,ot,Jt,d,s),V=new im(f,Jt,_t),rt=new gp(q,yt,It,_t),xt=new Ep(q,yt,It,_t),It.programs=Ft.programs,f.capabilities=_t,f.extensions=yt,f.properties=Tt,f.renderLists=Ye,f.shadowMap=V,f.state=ot,f.info=It}ct();const at=new dm(f,q);this.xr=at,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const v=yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(E,P,!1))},this.getSize=function(v){return v.set(E,P)},this.setSize=function(v,R,U){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=v,P=R,t.width=Math.floor(v*z),t.height=Math.floor(R*z),U!==!1&&(t.style.width=v+"px",t.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(E*z,P*z).floor()},this.setDrawingBufferSize=function(v,R,U){E=v,P=R,z=U,t.width=Math.floor(v*U),t.height=Math.floor(R*U),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(L)},this.setViewport=function(v,R,U,I){v.isVector4?L.set(v.x,v.y,v.z,v.w):L.set(v,R,U,I),ot.viewport(A.copy(L).multiplyScalar(z).floor())},this.getScissor=function(v){return v.copy(W)},this.setScissor=function(v,R,U,I){v.isVector4?W.set(v.x,v.y,v.z,v.w):W.set(v,R,U,I),ot.scissor(D.copy(W).multiplyScalar(z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(v){ot.setScissorTest(O=v)},this.setOpaqueSort=function(v){Q=v},this.setTransparentSort=function(v){$=v},this.getClearColor=function(v){return v.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(v=!0,R=!0,U=!0){let I=0;v&&(I|=16384),R&&(I|=256),U&&(I|=1024),q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",T,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Ye.dispose(),_.dispose(),Tt.dispose(),ee.dispose(),ce.dispose(),Jt.dispose(),ut.dispose(),Ft.dispose(),at.dispose(),at.removeEventListener("sessionstart",Rt),at.removeEventListener("sessionend",Pt),H&&(H.dispose(),H=null),ie.stop()};function T(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const v=It.autoReset,R=V.enabled,U=V.autoUpdate,I=V.needsUpdate,X=V.type;ct(),It.autoReset=v,V.enabled=R,V.autoUpdate=U,V.needsUpdate=I,V.type=X}function et(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function pt(v){const R=v.target;R.removeEventListener("dispose",pt),st(R)}function st(v){gt(v),Tt.remove(v)}function gt(v){const R=Tt.get(v).programs;R!==void 0&&(R.forEach(function(U){Ft.releaseProgram(U)}),v.isShaderMaterial&&Ft.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,U,I,X,ft){R===null&&(R=lt);const vt=X.isMesh&&X.matrixWorld.determinant()<0,St=Rl(v,R,U,I,X);ot.setMaterial(I,vt);let Mt=U.index;const zt=U.attributes.position;if(Mt===null){if(zt===void 0||zt.count===0)return}else if(Mt.count===0)return;let Ct=1;I.wireframe===!0&&(Mt=De.getWireframeAttribute(U),Ct=2),ut.setup(X,I,St,U,Mt);let Lt,Vt=rt;Mt!==null&&(Lt=pe.get(Mt),Vt=xt,Vt.setIndex(Lt));const _n=Mt!==null?Mt.count:zt.count,Un=U.drawRange.start*Ct,On=U.drawRange.count*Ct,Pe=ft!==null?ft.start*Ct:0,Dt=ft!==null?ft.count*Ct:1/0,Bn=Math.max(Un,Pe),Wt=Math.min(_n,Un+On,Pe+Dt)-1,ze=Math.max(0,Wt-Bn+1);if(ze!==0){if(X.isMesh)I.wireframe===!0?(ot.setLineWidth(I.wireframeLinewidth*ht()),Vt.setMode(1)):Vt.setMode(4);else if(X.isLine){let ln=I.linewidth;ln===void 0&&(ln=1),ot.setLineWidth(ln*ht()),X.isLineSegments?Vt.setMode(1):X.isLineLoop?Vt.setMode(2):Vt.setMode(3)}else X.isPoints?Vt.setMode(0):X.isSprite&&Vt.setMode(4);if(X.isInstancedMesh)Vt.renderInstances(Bn,ze,X.count);else if(U.isInstancedBufferGeometry){const ln=Math.min(U.instanceCount,U._maxInstanceCount);Vt.renderInstances(Bn,ze,ln)}else Vt.render(Bn,ze)}},this.compile=function(v,R){u=_.get(v),u.init(),g.push(u),v.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(f.physicallyCorrectLights),v.traverse(function(U){const I=U.material;if(I)if(Array.isArray(I))for(let X=0;X<I.length;X++){const ft=I[X];Ar(ft,v,U)}else Ar(I,v,U)}),g.pop(),u=null};let K=null;function bt(v){K&&K(v)}function Rt(){ie.stop()}function Pt(){ie.start()}const ie=new ul;ie.setAnimationLoop(bt),typeof self!="undefined"&&ie.setContext(self),this.setAnimationLoop=function(v){K=v,at.setAnimationLoop(v),v===null?ie.stop():ie.start()},at.addEventListener("sessionstart",Rt),at.addEventListener("sessionend",Pt),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(R),R=at.getCamera()),v.isScene===!0&&v.onBeforeRender(f,v,R,S),u=_.get(v,g.length),u.init(),g.push(u),Z.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),G.setFromProjectionMatrix(Z),F=this.localClippingEnabled,j=w.init(this.clippingPlanes,F,R),h=Ye.get(v,m.length),h.init(),m.push(h),Re(v,R,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(Q,$),j===!0&&w.beginShadows();const U=u.state.shadowsArray;if(V.render(U,v,R),j===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(h,v),u.setupLights(f.physicallyCorrectLights),R.isArrayCamera){const I=R.cameras;for(let X=0,ft=I.length;X<ft;X++){const vt=I[X];Qo(h,v,vt,vt.viewport)}}else Qo(h,v,R);S!==null&&(wt.updateMultisampleRenderTarget(S),wt.updateRenderTargetMipmap(S)),v.isScene===!0&&v.onAfterRender(f,v,R),ut.resetDefaultState(),k=-1,M=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Re(v,R,U,I){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)U=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){I&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const vt=Jt.update(v),St=v.material;St.visible&&h.push(v,vt,St,U,Y.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==It.render.frame&&(v.skeleton.update(),v.skeleton.frame=It.render.frame),!v.frustumCulled||G.intersectsObject(v))){I&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const vt=Jt.update(v),St=v.material;if(Array.isArray(St)){const Mt=vt.groups;for(let zt=0,Ct=Mt.length;zt<Ct;zt++){const Lt=Mt[zt],Vt=St[Lt.materialIndex];Vt&&Vt.visible&&h.push(v,vt,Vt,U,Y.z,Lt)}}else St.visible&&h.push(v,vt,St,U,Y.z,null)}}const ft=v.children;for(let vt=0,St=ft.length;vt<St;vt++)Re(ft[vt],R,U,I)}function Qo(v,R,U,I){const X=v.opaque,ft=v.transmissive,vt=v.transparent;u.setupLightsView(U),ft.length>0&&Ll(X,R,U),I&&ot.viewport(A.copy(I)),X.length>0&&Oi(X,R,U),ft.length>0&&Oi(ft,R,U),vt.length>0&&Oi(vt,R,U),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ll(v,R,U){const I=_t.isWebGL2;H===null&&(H=new vn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Ci:Fn,minFilter:Sr,samples:I&&o===!0?4:0})),f.getDrawingBufferSize(N),I?H.setSize(N.x,N.y):H.setSize(Ao(N.x),Ao(N.y));const X=f.getRenderTarget();f.setRenderTarget(H),f.clear();const ft=f.toneMapping;f.toneMapping=an,Oi(v,R,U),f.toneMapping=ft,wt.updateMultisampleRenderTarget(H),wt.updateRenderTargetMipmap(H),f.setRenderTarget(X)}function Oi(v,R,U){const I=R.isScene===!0?R.overrideMaterial:null;for(let X=0,ft=v.length;X<ft;X++){const vt=v[X],St=vt.object,Mt=vt.geometry,zt=I===null?vt.material:I,Ct=vt.group;St.layers.test(U.layers)&&Dl(St,R,U,Mt,zt,Ct)}}function Dl(v,R,U,I,X,ft){v.onBeforeRender(f,R,U,I,X,ft),v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(f,R,U,I,v,ft),X.transparent===!0&&X.side===He?(X.side=Ae,X.needsUpdate=!0,f.renderBufferDirect(U,R,I,X,v,ft),X.side=Ai,X.needsUpdate=!0,f.renderBufferDirect(U,R,I,X,v,ft),X.side=He):f.renderBufferDirect(U,R,I,X,v,ft),v.onAfterRender(f,R,U,I,X,ft)}function Ar(v,R,U){R.isScene!==!0&&(R=lt);const I=Tt.get(v),X=u.state.lights,ft=u.state.shadowsArray,vt=X.state.version,St=Ft.getParameters(v,X.state,ft,R,U),Mt=Ft.getProgramCacheKey(St);let zt=I.programs;I.environment=v.isMeshStandardMaterial?R.environment:null,I.fog=R.fog,I.envMap=(v.isMeshStandardMaterial?ce:ee).get(v.envMap||I.environment),zt===void 0&&(v.addEventListener("dispose",pt),zt=new Map,I.programs=zt);let Ct=zt.get(Mt);if(Ct!==void 0){if(I.currentProgram===Ct&&I.lightsStateVersion===vt)return ta(v,St),Ct}else St.uniforms=Ft.getUniforms(v),v.onBuild(U,St,f),v.onBeforeCompile(St,f),Ct=Ft.acquireProgram(St,Mt),zt.set(Mt,Ct),I.uniforms=St.uniforms;const Lt=I.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Lt.clippingPlanes=w.uniform),ta(v,St),I.needsLights=zl(v),I.lightsStateVersion=vt,I.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.directionalShadowMap.value=X.state.directionalShadowMap,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotShadowMap.value=X.state.spotShadowMap,Lt.spotShadowMatrix.value=X.state.spotShadowMatrix,Lt.pointShadowMap.value=X.state.pointShadowMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix);const Vt=Ct.getUniforms(),_n=pr.seqWithValue(Vt.seq,Lt);return I.currentProgram=Ct,I.uniformsList=_n,Ct}function ta(v,R){const U=Tt.get(v);U.outputEncoding=R.outputEncoding,U.instancing=R.instancing,U.skinning=R.skinning,U.morphTargets=R.morphTargets,U.morphNormals=R.morphNormals,U.morphColors=R.morphColors,U.morphTargetsCount=R.morphTargetsCount,U.numClippingPlanes=R.numClippingPlanes,U.numIntersection=R.numClipIntersection,U.vertexAlphas=R.vertexAlphas,U.vertexTangents=R.vertexTangents,U.toneMapping=R.toneMapping}function Rl(v,R,U,I,X){R.isScene!==!0&&(R=lt),wt.resetTextureUnits();const ft=R.fog,vt=I.isMeshStandardMaterial?R.environment:null,St=S===null?f.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Nn,Mt=(I.isMeshStandardMaterial?ce:ee).get(I.envMap||vt),zt=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ct=!!I.normalMap&&!!U.attributes.tangent,Lt=!!U.morphAttributes.position,Vt=!!U.morphAttributes.normal,_n=!!U.morphAttributes.color,Un=I.toneMapped?f.toneMapping:an,On=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Pe=On!==void 0?On.length:0,Dt=Tt.get(I),Bn=u.state.lights;if(j===!0&&(F===!0||v!==M)){const Ie=v===M&&I.id===k;w.setState(I,v,Ie)}let Wt=!1;I.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Bn.state.version||Dt.outputEncoding!==St||X.isInstancedMesh&&Dt.instancing===!1||!X.isInstancedMesh&&Dt.instancing===!0||X.isSkinnedMesh&&Dt.skinning===!1||!X.isSkinnedMesh&&Dt.skinning===!0||Dt.envMap!==Mt||I.fog===!0&&Dt.fog!==ft||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==w.numPlanes||Dt.numIntersection!==w.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Ct||Dt.morphTargets!==Lt||Dt.morphNormals!==Vt||Dt.morphColors!==_n||Dt.toneMapping!==Un||_t.isWebGL2===!0&&Dt.morphTargetsCount!==Pe)&&(Wt=!0):(Wt=!0,Dt.__version=I.version);let ze=Dt.currentProgram;Wt===!0&&(ze=Ar(I,R,X));let ln=!1,gi=!1,Cr=!1;const re=ze.getUniforms(),bi=Dt.uniforms;if(ot.useProgram(ze.program)&&(ln=!0,gi=!0,Cr=!0),I.id!==k&&(k=I.id,gi=!0),ln||M!==v){if(re.setValue(q,"projectionMatrix",v.projectionMatrix),_t.logarithmicDepthBuffer&&re.setValue(q,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),M!==v&&(M=v,gi=!0,Cr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ie=re.map.cameraPosition;Ie!==void 0&&Ie.setValue(q,Y.setFromMatrixPosition(v.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&re.setValue(q,"isOrthographic",v.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&re.setValue(q,"viewMatrix",v.matrixWorldInverse)}if(X.isSkinnedMesh){re.setOptional(q,X,"bindMatrix"),re.setOptional(q,X,"bindMatrixInverse");const Ie=X.skeleton;Ie&&(_t.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),re.setValue(q,"boneTexture",Ie.boneTexture,wt),re.setValue(q,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lr=U.morphAttributes;return(Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0&&_t.isWebGL2===!0)&&tt.update(X,U,I,ze),(gi||Dt.receiveShadow!==X.receiveShadow)&&(Dt.receiveShadow=X.receiveShadow,re.setValue(q,"receiveShadow",X.receiveShadow)),gi&&(re.setValue(q,"toneMappingExposure",f.toneMappingExposure),Dt.needsLights&&Pl(bi,Cr),ft&&I.fog===!0&&Xe.refreshFogUniforms(bi,ft),Xe.refreshMaterialUniforms(bi,I,z,P,H),pr.upload(q,Dt.uniformsList,bi,wt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(pr.upload(q,Dt.uniformsList,bi,wt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&re.setValue(q,"center",X.center),re.setValue(q,"modelViewMatrix",X.modelViewMatrix),re.setValue(q,"normalMatrix",X.normalMatrix),re.setValue(q,"modelMatrix",X.matrixWorld),ze}function Pl(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function zl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(v,R,U){Tt.get(v.texture).__webglTexture=R,Tt.get(v.depthTexture).__webglTexture=U;const I=Tt.get(v);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,R){const U=Tt.get(v);U.__webglFramebuffer=R,U.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,U=0){S=v,b=R,y=U;let I=!0;if(v){const Mt=Tt.get(v);Mt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),I=!1):Mt.__webglFramebuffer===void 0?wt.setupRenderTarget(v):Mt.__hasExternalTextures&&wt.rebindTextures(v,Tt.get(v.texture).__webglTexture,Tt.get(v.depthTexture).__webglTexture)}let X=null,ft=!1,vt=!1;if(v){const Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture)&&(vt=!0);const zt=Tt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(X=zt[R],ft=!0):_t.isWebGL2&&v.samples>0&&wt.useMultisampledRTT(v)===!1?X=Tt.get(v).__webglMultisampledFramebuffer:X=zt,A.copy(v.viewport),D.copy(v.scissor),x=v.scissorTest}else A.copy(L).multiplyScalar(z).floor(),D.copy(W).multiplyScalar(z).floor(),x=O;if(ot.bindFramebuffer(36160,X)&&_t.drawBuffers&&I&&ot.drawBuffers(v,X),ot.viewport(A),ot.scissor(D),ot.setScissorTest(x),ft){const Mt=Tt.get(v.texture);q.framebufferTexture2D(36160,36064,34069+R,Mt.__webglTexture,U)}else if(vt){const Mt=Tt.get(v.texture),zt=R||0;q.framebufferTextureLayer(36160,36064,Mt.__webglTexture,U||0,zt)}k=-1},this.readRenderTargetPixels=function(v,R,U,I,X,ft,vt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){ot.bindFramebuffer(36160,St);try{const Mt=v.texture,zt=Mt.format,Ct=Mt.type;if(zt!==Te&&B.convert(zt)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Ct===Ci&&(yt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ct!==Fn&&B.convert(Ct)!==q.getParameter(35738)&&!(Ct===Ln&&(_t.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-I&&U>=0&&U<=v.height-X&&q.readPixels(R,U,I,X,B.convert(zt),B.convert(Ct),ft)}finally{const Mt=S!==null?Tt.get(S).__webglFramebuffer:null;ot.bindFramebuffer(36160,Mt)}}},this.copyFramebufferToTexture=function(v,R,U=0){const I=Math.pow(2,-U),X=Math.floor(R.image.width*I),ft=Math.floor(R.image.height*I);wt.setTexture2D(R,0),q.copyTexSubImage2D(3553,U,0,0,v.x,v.y,X,ft),ot.unbindTexture()},this.copyTextureToTexture=function(v,R,U,I=0){const X=R.image.width,ft=R.image.height,vt=B.convert(U.format),St=B.convert(U.type);wt.setTexture2D(U,0),q.pixelStorei(37440,U.flipY),q.pixelStorei(37441,U.premultiplyAlpha),q.pixelStorei(3317,U.unpackAlignment),R.isDataTexture?q.texSubImage2D(3553,I,v.x,v.y,X,ft,vt,St,R.image.data):R.isCompressedTexture?q.compressedTexSubImage2D(3553,I,v.x,v.y,R.mipmaps[0].width,R.mipmaps[0].height,vt,R.mipmaps[0].data):q.texSubImage2D(3553,I,v.x,v.y,vt,St,R.image),I===0&&U.generateMipmaps&&q.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(v,R,U,I,X=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=v.max.x-v.min.x+1,vt=v.max.y-v.min.y+1,St=v.max.z-v.min.z+1,Mt=B.convert(I.format),zt=B.convert(I.type);let Ct;if(I.isData3DTexture)wt.setTexture3D(I,0),Ct=32879;else if(I.isDataArrayTexture)wt.setTexture2DArray(I,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,I.flipY),q.pixelStorei(37441,I.premultiplyAlpha),q.pixelStorei(3317,I.unpackAlignment);const Lt=q.getParameter(3314),Vt=q.getParameter(32878),_n=q.getParameter(3316),Un=q.getParameter(3315),On=q.getParameter(32877),Pe=U.isCompressedTexture?U.mipmaps[0]:U.image;q.pixelStorei(3314,Pe.width),q.pixelStorei(32878,Pe.height),q.pixelStorei(3316,v.min.x),q.pixelStorei(3315,v.min.y),q.pixelStorei(32877,v.min.z),U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Ct,X,R.x,R.y,R.z,ft,vt,St,Mt,zt,Pe.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ct,X,R.x,R.y,R.z,ft,vt,St,Mt,Pe.data)):q.texSubImage3D(Ct,X,R.x,R.y,R.z,ft,vt,St,Mt,zt,Pe),q.pixelStorei(3314,Lt),q.pixelStorei(32878,Vt),q.pixelStorei(3316,_n),q.pixelStorei(3315,Un),q.pixelStorei(32877,On),X===0&&I.generateMipmaps&&q.generateMipmap(Ct),ot.unbindTexture()},this.initTexture=function(v){wt.setTexture2D(v,0),ot.unbindTexture()},this.resetState=function(){b=0,y=0,S=null,ot.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class pm extends Xo{}pm.prototype.isWebGL1Renderer=!0;class Yo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new Yo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class mm extends te{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class Fi extends te{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xs=new C,vs=new C,ys=new qt,po=new Vo,cr=new kr;class gm extends Yt{constructor(t=new Le,e=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)xs.fromBufferAttribute(e,r-1),vs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=xs.distanceTo(vs);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),cr.radius+=o,t.ray.intersectsSphere(cr)===!1)return;ys.copy(r).invert(),po.copy(t.ray).applyMatrix4(ys);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,d=new C,h=new C,u=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const b=Math.max(0,s.start),y=Math.min(g.count,s.start+s.count);for(let S=b,k=y-1;S<k;S+=m){const M=g.getX(S),A=g.getX(S+1);if(c.fromBufferAttribute(p,M),d.fromBufferAttribute(p,A),po.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(u);x<t.near||x>t.far||e.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,s.start),y=Math.min(p.count,s.start+s.count);for(let S=b,k=y-1;S<k;S+=m){if(c.fromBufferAttribute(p,S),d.fromBufferAttribute(p,S+1),po.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(u);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const _s=new C,Ms=new C;class vl extends gm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)_s.fromBufferAttribute(e,r),Ms.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_s.distanceTo(Ms);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bm extends te{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}new C;class $o extends Le{constructor(t=1,e=8,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const o=[],s=[],a=[],l=[],c=new C,d=new Et;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const m=n+h/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),s.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(s[u]/t+1)/2,d.y=(s[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}static fromJSON(t){return new $o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}new C;new C;new C;new Be;class wm extends te{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new mt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class xm extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zo extends te{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vm extends Zo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yl extends te{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _l extends te{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ym extends te{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ml extends te{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class _m extends te{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new mt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mm extends Fi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Sm={ShadowMaterial:wm,SpriteMaterial:mm,RawShaderMaterial:xm,ShaderMaterial:sn,PointsMaterial:bm,MeshPhysicalMaterial:vm,MeshStandardMaterial:Zo,MeshPhongMaterial:yl,MeshToonMaterial:_l,MeshNormalMaterial:ym,MeshLambertMaterial:Ml,MeshDepthMaterial:wl,MeshDistanceMaterial:xl,MeshBasicMaterial:Wo,MeshMatcapMaterial:_m,LineDashedMaterial:Mm,LineBasicMaterial:Fi,Material:te};te.fromType=function(i){return new Sm[i]};class Jo extends Yt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ss=new qt,ks=new C,Es=new C;class Sl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ks.setFromMatrixPosition(t.matrixWorld),e.position.copy(ks),Es.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Es),e.updateMatrixWorld(),Ss.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class km extends Sl{constructor(){super(new ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=To*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||r!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=r,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Em extends Jo{constructor(t,e,n=0,r=Math.PI/3,o=0,s=1){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DefaultUp),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=r,this.penumbra=o,this.decay=s,this.shadow=new km}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ts=new qt,yi=new C,fo=new C;class Tm extends Sl{constructor(){super(new ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(yi),fo.copy(n.position),fo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fo),n.updateMatrixWorld(),r.makeTranslation(-yi.x,-yi.y,-yi.z),Ts.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts)}}class Am extends Jo{constructor(t,e,n=0,r=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Tm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cm extends Jo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const kl="\\[\\]\\.:\\/",Ko="[^"+kl+"]",Lm="[^"+kl.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Ko);/(WCOD+)?/.source.replace("WCOD",Lm);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko);class Dm{constructor(t,e,n=0,r=1/0){this.ray=new Vo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Lo(t,this,n,e),n.sort(As),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Lo(t[r],this,n,e);return n.sort(As),n}}function As(i,t){return i.distance-t.distance}function Lo(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let o=0,s=r.length;o<s;o++)Lo(r[o],t,e,!0)}}const Cs=new C;class Rm extends Yt{constructor(t,e){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;const n=new Le,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,l=32;s<l;s++,a++){const c=s/l*Math.PI*2,d=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(d),Math.sin(d),1)}n.setAttribute("position",new ae(r,3));const o=new Fi({fog:!1,toneMapped:!1});this.cone=new vl(n,o),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Cs.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Cs),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class Pm extends vl{constructor(t=10,e=10,n=4473924,r=8947848){n=new mt(n),r=new mt(r);const o=e/2,s=t/e,a=t/2,l=[],c=[];for(let u=0,m=0,g=-a;u<=e;u++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const f=u===o?n:r;f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3}const d=new Le;d.setAttribute("position",new ae(l,3)),d.setAttribute("color",new ae(c,3));const h=new Fi({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}}const Fe=new Uint32Array(512),Ne=new Uint32Array(512);for(let i=0;i<256;++i){const t=i-127;t<-27?(Fe[i]=0,Fe[i|256]=32768,Ne[i]=24,Ne[i|256]=24):t<-14?(Fe[i]=1024>>-t-14,Fe[i|256]=1024>>-t-14|32768,Ne[i]=-t-1,Ne[i|256]=-t-1):t<=15?(Fe[i]=t+15<<10,Fe[i|256]=t+15<<10|32768,Ne[i]=13,Ne[i|256]=13):t<128?(Fe[i]=31744,Fe[i|256]=64512,Ne[i]=24,Ne[i|256]=24):(Fe[i]=31744,Fe[i|256]=64512,Ne[i]=13,Ne[i|256]=13)}const El=new Uint32Array(2048),Ni=new Uint32Array(64),zm=new Uint32Array(64);for(let i=1;i<1024;++i){let t=i<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,El[i]=t|e}for(let i=1024;i<2048;++i)El[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)Ni[i]=i<<23;Ni[31]=1199570944;Ni[32]=2147483648;for(let i=33;i<63;++i)Ni[i]=2147483648+(i-32<<23);Ni[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(zm[i]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);let gr,br;window.innerWidth<768?(br=window.innerWidth,gr=.5*window.innerHeight):(br=.5*window.innerWidth,gr=window.innerHeight);let In=new Xo({antialias:!0});In.setSize(window.innerWidth,window.innerHeight);window.innerWidth>800&&(In.shadowMap.enabled=!0,In.shadowMap.type=Ks,In.shadowMap.needsUpdate=!0);let Rn=new ue(20,window.innerWidth/window.innerHeight,1,500);Rn.position.set(0,2,14);let Ui=new fm,be=new Yt,Li=new Yt,Di=new Yt,Ls=.001,Im=12312304;Ui.fog=new Yo(Im,10,16);function Ue(i=8){var t=-Math.random()*i+Math.random()*i;return t}var mo=!0;function Fm(){let i;return mo?(mo=!1,i=0):(mo=!0,i=0),i}function Nm(){let i=2;for(let a=1;a<100;a++){let l=new fi(1,1,1,i,i,i),c=new Zo({color:Fm(),wireframe:!1,side:He}),d=new Ml({color:16777215,wireframe:!0,transparent:!0,opacity:.03,side:He}),h=new we(l,c),u=new we(l,c),m=new we(l,d);h.add(m),h.castShadow=!0,h.receiveShadow=!0,u.scale.y=.05,h.scale.y=.1+Math.abs(Ue(8));let g=.9;h.scale.x=h.scale.z=g+Ue(1-g),h.position.x=Math.round(Ue()),h.position.z=Math.round(Ue()),u.position.set(h.position.x,0,h.position.z),Di.add(u),Di.add(h)}let t=new _l({color:12312304,side:He}),e=new $o(.01,3),n=5;for(let a=1;a<300;a++){let l=new we(e,t);l.position.set(Ue(n),Ue(n),Ue(n)),l.rotation.set(Ue(),Ue(),Ue()),Li.add(l)}let r=new yl({color:0,side:He,opacity:.9,transparent:!0}),o=new Er(60,60),s=new we(o,r);s.rotation.x=-90*Math.PI/180,s.position.y=-.001,s.receiveShadow=!0,be.add(s)}new Dm;let yn=new Et;function Um(i){i.preventDefault(),yn.x=i.clientX/window.innerWidth*2-1,yn.y=-(i.clientY/window.innerHeight)*2+1}function Om(i){i.touches.length==1&&(i.preventDefault(),yn.x=i.touches[0].pageX-window.innerWidth/2,yn.y=i.touches[0].pageY-window.innerHeight/2)}function Bm(i){i.touches.length==1&&(i.preventDefault(),yn.x=i.touches[0].pageX-window.innerWidth/2,yn.y=i.touches[0].pageY-window.innerHeight/2)}window.addEventListener("mousemove",Um,!1);window.addEventListener("touchstart",Om,!1);window.addEventListener("touchmove",Bm,!1);let Gm=new Cm(16777215,4),qe=new Em(16777215,20,10),Tl=new Am(16777215,.5);new Rm(qe);qe.rotation.x=45*Math.PI/180;qe.rotation.z=-45*Math.PI/180;qe.position.set(5,5,5);qe.castShadow=!0;qe.shadow.mapSize.width=6e3;qe.shadow.mapSize.height=qe.shadow.mapSize.width;qe.penumbra=.1;Tl.position.set(0,6,0);Li.position.y=2;Ui.add(Gm);be.add(qe);Ui.add(Tl);Ui.add(be);be.add(Li);be.add(Di);var Vm=new Pm(60,120,16711680,0);be.add(Vm);const Al=()=>{requestAnimationFrame(Al),be.rotation.y-=(yn.x*8-Rn.rotation.y)*Ls,be.rotation.x-=(-(yn.y*2)-Rn.rotation.x)*Ls,be.rotation.x<-.05?be.rotation.x=-.05:be.rotation.x>1&&(be.rotation.x=1);for(let i=0,t=Di.children.length;i<t;i++)Di.children[i];Li.rotation.y+=.01,Li.rotation.x+=.01,Rn.lookAt(be.position),In.render(Ui,Rn)},Cl=()=>{In.setSize(br,gr),Rn.aspect=br/gr,Rn.updateProjectionMatrix()},Hm=i=>{In=new Xo({antialias:!0,canvas:i,alpha:!0}),Nm(),Cl(),Al()};window.addEventListener("resize",Cl);function Wm(i){let t,e,n;return{c(){t=Nt("div"),t.innerHTML=`<div class="SiteName svelte-1vrzg8s">Hi! I&#39;m</div> 
    <div class="SiteName svelte-1vrzg8s">Nikhil.</div> 
    <div class="SiteNameB svelte-1vrzg8s">and welcome to my website :D</div>`,e=ge(),n=Nt("canvas"),At(t,"class","absolute grid place-content-center text-center ")},m(r,o){Qt(r,t,o),Qt(r,e,o),Qt(r,n,o),i[1](n)},p:oe,i:oe,o:oe,d(r){r&&Zt(t),r&&Zt(e),r&&Zt(n),i[1](null)}}}function jm(i,t,e){let n;Gl(()=>{Hm(n)});function r(o){go[o?"unshift":"push"](()=>{n=o,e(0,n)})}return[n,r]}class qm extends hi{constructor(t){super(),di(this,t,jm,Wm,ci,{})}}function Xm(i){let t,e,n;return{c(){t=Nt("h1"),t.textContent="Socials",e=ge(),n=Nt("div"),n.innerHTML=`<a href="https://www.linkedin.com/in/nikhil-sharma-39056a237/" class="btn btn-wide">LinkedIn</a> 
   
        <div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-wide">Discord</label> 

            <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">Navaja V2#3888</div></div> 
    <a href="mailto:nikmsharma@gmail.com" class="btn btn-wide">Gmail</a> 
    <a href="https://answers.microsoft.com/en-us/profile/f9288d9d-b159-42c0-9483-7e4818e70029" class="btn btn-wide">Microsoft</a>`,At(t,"class",""),At(n,"class","grid gap-y-6 justify-items-center ")},m(r,o){Qt(r,t,o),Qt(r,e,o),Qt(r,n,o)},p:oe,i:oe,o:oe,d(r){r&&Zt(t),r&&Zt(e),r&&Zt(n)}}}class Ym extends hi{constructor(t){super(),di(this,t,null,Xm,ci,{})}}function $m(i){let t;return{c(){t=Nt("h1"),t.textContent="About Me!"},m(e,n){Qt(e,t,n)},p:oe,i:oe,o:oe,d(e){e&&Zt(t)}}}class Zm extends hi{constructor(t){super(),di(this,t,null,$m,ci,{})}}function Jm(i){let t,e,n,r,o,s,a,l,c,d,h,u,m,g,f,p,b,y,S,k,M,A,D,x,E,P,z,Q,$,L,W,O,G,j,F,H,Z;return l=new Ym({}),p=new Zm({}),M=new qm({}),P=new Gi({props:{text:"Socials",image:"src/assets/Socials.png"}}),$=new Gi({props:{text:"Projects",image:"src/assets/Projects.jpg"}}),G=new Gi({props:{text:"About",image:"src/assets/About.jpg"}}),H=new Gi({props:{text:"Coming Soon!",image:"src/assets/MetaVerse.jpg"}}),{c(){t=Nt("input"),e=ge(),n=Nt("div"),r=Nt("div"),o=Nt("label"),o.textContent="\u2715",s=ge(),a=Nt("div"),bn(l.$$.fragment),c=ge(),d=Nt("input"),h=ge(),u=Nt("div"),m=Nt("div"),g=Nt("label"),g.textContent="\u2715",f=ge(),bn(p.$$.fragment),b=ge(),y=Nt("div"),S=Nt("div"),k=Nt("div"),bn(M.$$.fragment),A=ge(),D=Nt("div"),x=Nt("div"),E=Nt("label"),bn(P.$$.fragment),z=ge(),Q=Nt("a"),bn($.$$.fragment),L=ge(),W=Nt("div"),O=Nt("label"),bn(G.$$.fragment),j=ge(),F=Nt("div"),bn(H.$$.fragment),At(t,"type","checkbox"),At(t,"id","my-modal-1"),At(t,"class","modal-toggle"),At(o,"for","my-modal-1"),At(o,"class","btn btn-sm btn-circle absolute right-2 top-2"),At(a,"class",""),At(r,"class","modal-box relative"),At(n,"class","modal"),At(d,"type","checkbox"),At(d,"id","my-modal-2"),At(d,"class","modal-toggle"),At(g,"for","my-modal-2"),At(g,"class","btn btn-sm btn-circle absolute right-2 top-2"),At(m,"class","modal-box relative"),At(u,"class","modal"),At(k,"class","md:w-1/2 h-[50vh] md:h-screen"),wn(k,"padding","0"),At(E,"for","my-modal-1"),At(E,"class","btn modal-button relative max-w-full h-[25vh] md:h-[50vh] flex-1"),wn(E,"padding","0"),At(Q,"href","https://github.com/ni-ms"),At(Q,"class","btn modal-button relative max-w-full h-[25vh] md:h-[50vh] flex-1"),wn(Q,"padding","0"),At(x,"class","flex flex-wrap "),At(O,"for","my-modal-2"),At(O,"class","btn modal-button relative flex-grow max-w-full h-[25vh] md:h-[50vh] flex-1"),wn(O,"padding","0"),At(F,"class","relative flex-grow max-w-full flex-1"),wn(F,"padding","0"),At(W,"class","flex flex-wrap "),At(D,"class","md:relative absolute inset-x-0 bottom-0 md:grow"),wn(D,"padding","0"),At(S,"class","md:flex "),At(y,"class","container mx-0 max-w-full h-screen bg-gradient-to-r from-cyan-500 to-indigo-500")},m(N,Y){Qt(N,t,Y),Qt(N,e,Y),Qt(N,n,Y),Ot(n,r),Ot(r,o),Ot(r,s),Ot(r,a),en(l,a,null),Qt(N,c,Y),Qt(N,d,Y),Qt(N,h,Y),Qt(N,u,Y),Ot(u,m),Ot(m,g),Ot(m,f),en(p,m,null),Qt(N,b,Y),Qt(N,y,Y),Ot(y,S),Ot(S,k),en(M,k,null),Ot(S,A),Ot(S,D),Ot(D,x),Ot(x,E),en(P,E,null),Ot(x,z),Ot(x,Q),en($,Q,null),Ot(D,L),Ot(D,W),Ot(W,O),en(G,O,null),Ot(W,j),Ot(W,F),en(H,F,null),Z=!0},p:oe,i(N){Z||(tn(l.$$.fragment,N),tn(p.$$.fragment,N),tn(M.$$.fragment,N),tn(P.$$.fragment,N),tn($.$$.fragment,N),tn(G.$$.fragment,N),tn(H.$$.fragment,N),Z=!0)},o(N){gn(l.$$.fragment,N),gn(p.$$.fragment,N),gn(M.$$.fragment,N),gn(P.$$.fragment,N),gn($.$$.fragment,N),gn(G.$$.fragment,N),gn(H.$$.fragment,N),Z=!1},d(N){N&&Zt(t),N&&Zt(e),N&&Zt(n),nn(l),N&&Zt(c),N&&Zt(d),N&&Zt(h),N&&Zt(u),nn(p),N&&Zt(b),N&&Zt(y),nn(M),nn(P),nn($),nn(G),nn(H)}}}class Km extends hi{constructor(t){super(),di(this,t,null,Jm,ci,{})}}function Qm(i){let t,e;return t=new Km({}),{c(){bn(t.$$.fragment)},m(n,r){en(t,n,r),e=!0},p:oe,i(n){e||(tn(t.$$.fragment,n),e=!0)},o(n){gn(t.$$.fragment,n),e=!1},d(n){nn(t,n)}}}class tg extends hi{constructor(t){super(),di(this,t,null,Qm,ci,{})}}new tg({target:document.getElementById("app")});
