/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="148",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},U0=0,xu=1,k0=2,$p=1,G0=2,ms=3,Pn=0,Ot=1,ch=2,ea=3,Yi=0,yr=1,bu=2,wu=3,Su=4,V0=5,cr=100,H0=101,W0=102,Mu=103,_u=104,j0=200,q0=201,X0=202,Y0=203,Am=204,em=205,Q0=206,Z0=207,J0=208,K0=209,$0=210,Av=0,ev=1,tv=2,dc=3,iv=4,nv=5,rv=6,sv=7,tm=0,av=1,ov=2,Li=0,lv=1,cv=2,hv=3,uv=4,dv=5,im=300,On=301,Rn=302,fc=303,pc=304,Ws=306,mc=1e3,Vt=1001,gc=1002,nt=1003,Tu=1004,el=1005,at=1006,fv=1007,Ps=1008,In=1009,pv=1010,mv=1011,nm=1012,gv=1013,wn=1014,Sn=1015,Os=1016,vv=1017,yv=1018,xr=1020,xv=1021,bv=1022,Ht=1023,wv=1024,Sv=1025,Tn=1026,Dr=1027,Mv=1028,_v=1029,Tv=1030,Ev=1031,Cv=1033,tl=33776,il=33777,nl=33778,rl=33779,Eu=35840,Cu=35841,Lu=35842,Du=35843,Lv=36196,Pu=37492,Ou=37496,Ru=37808,Iu=37809,Nu=37810,Bu=37811,zu=37812,Fu=37813,Uu=37814,ku=37815,Gu=37816,Vu=37817,Hu=37818,Wu=37819,ju=37820,qu=37821,Xu=36492,di=3e3,fe=3001,Dv=3200,Pv=3201,rm=0,Ov=1,ri="srgb",Rs="srgb-linear",sl=7680,Rv=519,vc=35044,Yu="300 es",yc=1035;class en{addEventListener(A,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[A]===void 0&&(i[A]=[]),i[A].indexOf(t)===-1&&i[A].push(t)}hasEventListener(A,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[A]!==void 0&&i[A].indexOf(t)!==-1}removeEventListener(A,t){if(this._listeners===void 0)return;const n=this._listeners[A];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const i=this._listeners[A.type];if(i!==void 0){A.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,A);A.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qu=1234567;const Ss=Math.PI/180,Is=180/Math.PI;function hi(){const e=Math.random()*4294967295|0,A=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[e&255]+Ze[e>>8&255]+Ze[e>>16&255]+Ze[e>>24&255]+"-"+Ze[A&255]+Ze[A>>8&255]+"-"+Ze[A>>16&15|64]+Ze[A>>24&255]+"-"+Ze[t&63|128]+Ze[t>>8&255]+"-"+Ze[t>>16&255]+Ze[t>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function ze(e,A,t){return Math.max(A,Math.min(t,e))}function hh(e,A){return(e%A+A)%A}function Iv(e,A,t,i,n){return i+(e-A)*(n-i)/(t-A)}function Nv(e,A,t){return e!==A?(t-e)/(A-e):0}function Ms(e,A,t){return(1-t)*e+t*A}function Bv(e,A,t,i){return Ms(e,A,1-Math.exp(-t*i))}function zv(e,A=1){return A-Math.abs(hh(e,A*2)-A)}function Fv(e,A,t){return e<=A?0:e>=t?1:(e=(e-A)/(t-A),e*e*(3-2*e))}function Uv(e,A,t){return e<=A?0:e>=t?1:(e=(e-A)/(t-A),e*e*e*(e*(e*6-15)+10))}function kv(e,A){return e+Math.floor(Math.random()*(A-e+1))}function Gv(e,A){return e+Math.random()*(A-e)}function Vv(e){return e*(.5-Math.random())}function Hv(e){e!==void 0&&(Qu=e);let A=Qu+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Wv(e){return e*Ss}function jv(e){return e*Is}function xc(e){return(e&e-1)===0&&e!==0}function qv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ao(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Xv(e,A,t,i,n){const r=Math.cos,s=Math.sin,a=r(t/2),o=s(t/2),c=r((A+i)/2),u=s((A+i)/2),l=r((A-i)/2),h=s((A-i)/2),d=r((i-A)/2),f=s((i-A)/2);switch(n){case"XYX":e.set(a*u,o*l,o*h,a*c);break;case"YZY":e.set(o*h,a*u,o*l,a*c);break;case"ZXZ":e.set(o*l,o*h,a*u,a*c);break;case"XZX":e.set(a*u,o*f,o*d,a*c);break;case"YXY":e.set(o*d,a*u,o*f,a*c);break;case"ZYZ":e.set(o*f,o*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ei(e,A){switch(A.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function pe(e,A){switch(A.constructor){case Float32Array:return e;case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Fe=Object.freeze({__proto__:null,DEG2RAD:Ss,RAD2DEG:Is,generateUUID:hi,clamp:ze,euclideanModulo:hh,mapLinear:Iv,inverseLerp:Nv,lerp:Ms,damp:Bv,pingpong:zv,smoothstep:Fv,smootherstep:Uv,randInt:kv,randFloat:Gv,randFloatSpread:Vv,seededRandom:Hv,degToRad:Wv,radToDeg:jv,isPowerOfTwo:xc,ceilPowerOfTwo:qv,floorPowerOfTwo:Ao,setQuaternionFromProperEuler:Xv,normalize:pe,denormalize:Ei});class Z{constructor(A=0,t=0){Z.prototype.isVector2=!0,this.x=A,this.y=t}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,t){return this.x=A,this.y=t,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const t=this.x,i=this.y,n=A.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,t){return this.x=Math.max(A.x,Math.min(t.x,this.x)),this.y=Math.max(A.y,Math.min(t.y,this.y)),this}clampScalar(A,t){return this.x=Math.max(A,Math.min(t,this.x)),this.y=Math.max(A,Math.min(t,this.y)),this}clampLength(A,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const t=this.x-A.x,i=this.y-A.y;return t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this}lerpVectors(A,t,i){return this.x=A.x+(t.x-A.x)*i,this.y=A.y+(t.y-A.y)*i,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this}rotateAround(A,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-A.x,s=this.y-A.y;return this.x=r*i-s*n+A.x,this.y=r*n+s*i+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,t,i,n,r,s,a,o,c){const u=this.elements;return u[0]=A,u[1]=n,u[2]=a,u[3]=t,u[4]=r,u[5]=o,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const t=this.elements,i=A.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(A,t,i){return A.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const t=A.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,t){const i=A.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],u=i[4],l=i[7],h=i[2],d=i[5],f=i[8],m=n[0],p=n[3],g=n[6],v=n[1],x=n[4],y=n[7],M=n[2],w=n[5],_=n[8];return r[0]=s*m+a*v+o*M,r[3]=s*p+a*x+o*w,r[6]=s*g+a*y+o*_,r[1]=c*m+u*v+l*M,r[4]=c*p+u*x+l*w,r[7]=c*g+u*y+l*_,r[2]=h*m+d*v+f*M,r[5]=h*p+d*x+f*w,r[8]=h*g+d*y+f*_,this}multiplyScalar(A){const t=this.elements;return t[0]*=A,t[3]*=A,t[6]*=A,t[1]*=A,t[4]*=A,t[7]*=A,t[2]*=A,t[5]*=A,t[8]*=A,this}determinant(){const A=this.elements,t=A[0],i=A[1],n=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],u=A[8];return t*s*u-t*a*c-i*r*u+i*a*o+n*r*c-n*s*o}invert(){const A=this.elements,t=A[0],i=A[1],n=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],u=A[8],l=u*s-a*c,h=a*o-u*r,d=c*r-s*o,f=t*l+i*h+n*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return A[0]=l*m,A[1]=(n*c-u*i)*m,A[2]=(a*i-n*s)*m,A[3]=h*m,A[4]=(u*t-n*o)*m,A[5]=(n*r-a*t)*m,A[6]=d*m,A[7]=(i*o-c*t)*m,A[8]=(s*t-i*r)*m,this}transpose(){let A;const t=this.elements;return A=t[1],t[1]=t[3],t[3]=A,A=t[2],t[2]=t[6],t[6]=A,A=t[5],t[5]=t[7],t[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const t=this.elements;return A[0]=t[0],A[1]=t[3],A[2]=t[6],A[3]=t[1],A[4]=t[4],A[5]=t[7],A[6]=t[2],A[7]=t[5],A[8]=t[8],this}setUvTransform(A,t,i,n,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*s+c*a)+s+A,-n*c,n*o,-n*(-c*s+o*a)+a+t,0,0,1),this}scale(A,t){return this.premultiply(al.makeScale(A,t)),this}rotate(A){return this.premultiply(al.makeRotation(-A)),this}translate(A,t){return this.premultiply(al.makeTranslation(A,t)),this}makeTranslation(A,t){return this.set(1,0,A,0,1,t,0,0,1),this}makeRotation(A){const t=Math.cos(A),i=Math.sin(A);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(A,t){return this.set(A,0,0,0,t,0,0,0,1),this}equals(A){const t=this.elements,i=A.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(A,t=0){for(let i=0;i<9;i++)this.elements[i]=A[i+t];return this}toArray(A=[],t=0){const i=this.elements;return A[t]=i[0],A[t+1]=i[1],A[t+2]=i[2],A[t+3]=i[3],A[t+4]=i[4],A[t+5]=i[5],A[t+6]=i[6],A[t+7]=i[7],A[t+8]=i[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const al=new Xe;function sm(e){for(let A=e.length-1;A>=0;--A)if(e[A]>=65535)return!0;return!1}const Yv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ta(e,A){return new Yv[e](A)}function eo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function En(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const ol={[ri]:{[Rs]:En},[Rs]:{[ri]:qa}},At={legacyMode:!0,get workingColorSpace(){return Rs},set workingColorSpace(e){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,A,t){if(this.legacyMode||A===t||!A||!t)return e;if(ol[A]&&ol[A][t]!==void 0){const i=ol[A][t];return e.r=i(e.r),e.g=i(e.g),e.b=i(e.b),e}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,A){return this.convert(e,this.workingColorSpace,A)},toWorkingColorSpace:function(e,A){return this.convert(e,A,this.workingColorSpace)}},am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ie={r:0,g:0,b:0},Bt={h:0,s:0,l:0},ia={h:0,s:0,l:0};function ll(e,A,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(A-e)*6*t:t<1/2?A:t<2/3?e+(A-e)*6*(2/3-t):e}function na(e,A){return A.r=e.r,A.g=e.g,A.b=e.b,A}class jA{constructor(A,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(A):this.setRGB(A,t,i)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,t=ri){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(A,t,i,n=At.workingColorSpace){return this.r=A,this.g=t,this.b=i,At.toWorkingColorSpace(this,n),this}setHSL(A,t,i,n=At.workingColorSpace){if(A=hh(A,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=ll(s,r,A+1/3),this.g=ll(s,r,A),this.b=ll(s,r,A-1/3)}return At.toWorkingColorSpace(this,n),this}setStyle(A,t=ri){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,At.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,At.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(o,c,u,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,At.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,At.toWorkingColorSpace(this,t),this}return A&&A.length>0?this.setColorName(A,t):this}setColorName(A,t=ri){const i=am[A.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=En(A.r),this.g=En(A.g),this.b=En(A.b),this}copyLinearToSRGB(A){return this.r=qa(A.r),this.g=qa(A.g),this.b=qa(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=ri){return At.fromWorkingColorSpace(na(this,Ie),A),ze(Ie.r*255,0,255)<<16^ze(Ie.g*255,0,255)<<8^ze(Ie.b*255,0,255)<<0}getHexString(A=ri){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,t=At.workingColorSpace){At.fromWorkingColorSpace(na(this,Ie),t);const i=Ie.r,n=Ie.g,r=Ie.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,c;const u=(a+s)/2;if(a===s)o=0,c=0;else{const l=s-a;switch(c=u<=.5?l/(s+a):l/(2-s-a),s){case i:o=(n-r)/l+(n<r?6:0);break;case n:o=(r-i)/l+2;break;case r:o=(i-n)/l+4;break}o/=6}return A.h=o,A.s=c,A.l=u,A}getRGB(A,t=At.workingColorSpace){return At.fromWorkingColorSpace(na(this,Ie),t),A.r=Ie.r,A.g=Ie.g,A.b=Ie.b,A}getStyle(A=ri){return At.fromWorkingColorSpace(na(this,Ie),A),A!==ri?`color(${A} ${Ie.r} ${Ie.g} ${Ie.b})`:`rgb(${Ie.r*255|0},${Ie.g*255|0},${Ie.b*255|0})`}offsetHSL(A,t,i){return this.getHSL(Bt),Bt.h+=A,Bt.s+=t,Bt.l+=i,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,t){return this.r=A.r+t.r,this.g=A.g+t.g,this.b=A.b+t.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,t){return this.r+=(A.r-this.r)*t,this.g+=(A.g-this.g)*t,this.b+=(A.b-this.b)*t,this}lerpColors(A,t,i){return this.r=A.r+(t.r-A.r)*i,this.g=A.g+(t.g-A.g)*i,this.b=A.b+(t.b-A.b)*i,this}lerpHSL(A,t){this.getHSL(Bt),A.getHSL(ia);const i=Ms(Bt.h,ia.h,t),n=Ms(Bt.s,ia.s,t),r=Ms(Bt.l,ia.l,t);return this.setHSL(i,n,r),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,t=0){return this.r=A[t],this.g=A[t+1],this.b=A[t+2],this}toArray(A=[],t=0){return A[t]=this.r,A[t+1]=this.g,A[t+2]=this.b,A}fromBufferAttribute(A,t){return this.r=A.getX(t),this.g=A.getY(t),this.b=A.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}jA.NAMES=am;let Xn;class om{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let t;if(A instanceof HTMLCanvasElement)t=A;else{Xn===void 0&&(Xn=eo("canvas")),Xn.width=A.width,Xn.height=A.height;const i=Xn.getContext("2d");A instanceof ImageData?i.putImageData(A,0,0):i.drawImage(A,0,0,A.width,A.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const t=eo("canvas");t.width=A.width,t.height=A.height;const i=t.getContext("2d");i.drawImage(A,0,0,A.width,A.height);const n=i.getImageData(0,0,A.width,A.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=En(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(A.data){const t=A.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(En(t[i]/255)*255):t[i]=En(t[i]);return{data:t,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class lm{constructor(A=null){this.isSource=!0,this.uuid=hi(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const t=A===void 0||typeof A=="string";if(!t&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(cl(n[s].image)):r.push(cl(n[s]))}else r=cl(n);i.url=r}return t||(A.images[this.uuid]=i),i}}function cl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?om.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Je extends en{constructor(A=Je.DEFAULT_IMAGE,t=Je.DEFAULT_MAPPING,i=Vt,n=Vt,r=at,s=Ps,a=Ht,o=In,c=Je.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=hi(),this.name="",this.source=new lm(A),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const t=A===void 0||typeof A=="string";if(!t&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(A.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==im)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case mc:A.x=A.x-Math.floor(A.x);break;case Vt:A.x=A.x<0?0:1;break;case gc:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case mc:A.y=A.y-Math.floor(A.y);break;case Vt:A.y=A.y<0?0:1;break;case gc:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=im;Je.DEFAULT_ANISOTROPY=1;class $A{constructor(A=0,t=0,i=0,n=1){$A.prototype.isVector4=!0,this.x=A,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,t,i,n){return this.x=A,this.y=t,this.z=i,this.w=n,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this.z=A.z+t.z,this.w=A.w+t.w,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this.z+=A.z*t,this.w+=A.w*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this.z=A.z-t.z,this.w=A.w-t.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const t=this.x,i=this.y,n=this.z,r=this.w,s=A.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const t=Math.sqrt(1-A.w*A.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/t,this.y=A.y/t,this.z=A.z/t),this}setAxisAngleFromRotationMatrix(A){let t,i,n,r;const o=A.elements,c=o[0],u=o[4],l=o[8],h=o[1],d=o[5],f=o[9],m=o[2],p=o[6],g=o[10];if(Math.abs(u-h)<.01&&Math.abs(l-m)<.01&&Math.abs(f-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(l+m)<.1&&Math.abs(f+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,M=(g+1)/2,w=(u+h)/4,_=(l+m)/4,b=(f+p)/4;return x>y&&x>M?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=_/i):y>M?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=w/n,r=b/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=_/r,n=b/r),this.set(i,n,r,t),this}let v=Math.sqrt((p-f)*(p-f)+(l-m)*(l-m)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-f)/v,this.y=(l-m)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+g-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,t){return this.x=Math.max(A.x,Math.min(t.x,this.x)),this.y=Math.max(A.y,Math.min(t.y,this.y)),this.z=Math.max(A.z,Math.min(t.z,this.z)),this.w=Math.max(A.w,Math.min(t.w,this.w)),this}clampScalar(A,t){return this.x=Math.max(A,Math.min(t,this.x)),this.y=Math.max(A,Math.min(t,this.y)),this.z=Math.max(A,Math.min(t,this.z)),this.w=Math.max(A,Math.min(t,this.w)),this}clampLength(A,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this.z+=(A.z-this.z)*t,this.w+=(A.w-this.w)*t,this}lerpVectors(A,t,i){return this.x=A.x+(t.x-A.x)*i,this.y=A.y+(t.y-A.y)*i,this.z=A.z+(t.z-A.z)*i,this.w=A.w+(t.w-A.w)*i,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this.z=A[t+2],this.w=A[t+3],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A[t+2]=this.z,A[t+3]=this.w,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this.z=A.getZ(t),this.w=A.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nn extends en{constructor(A=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=t,this.depth=1,this.scissor=new $A(0,0,A,t),this.scissorTest=!1,this.viewport=new $A(0,0,A,t);const n={width:A,height:t,depth:1};this.texture=new Je(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:at,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(A,t,i=1){(this.width!==A||this.height!==t||this.depth!==i)&&(this.width=A,this.height=t,this.depth=i,this.texture.image.width=A,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,A,t),this.scissor.set(0,0,A,t)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},A.texture.image);return this.texture.source=new lm(t),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cm extends Je{constructor(A=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:t,height:i,depth:n},this.magFilter=nt,this.minFilter=nt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zv extends Je{constructor(A=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:t,height:i,depth:n},this.magFilter=nt,this.minFilter=nt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(A=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=A,this._y=t,this._z=i,this._w=n}static slerpFlat(A,t,i,n,r,s,a){let o=i[n+0],c=i[n+1],u=i[n+2],l=i[n+3];const h=r[s+0],d=r[s+1],f=r[s+2],m=r[s+3];if(a===0){A[t+0]=o,A[t+1]=c,A[t+2]=u,A[t+3]=l;return}if(a===1){A[t+0]=h,A[t+1]=d,A[t+2]=f,A[t+3]=m;return}if(l!==m||o!==h||c!==d||u!==f){let p=1-a;const g=o*h+c*d+u*f+l*m,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const M=Math.sqrt(x),w=Math.atan2(M,g*v);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const y=a*v;if(o=o*p+h*y,c=c*p+d*y,u=u*p+f*y,l=l*p+m*y,p===1-a){const M=1/Math.sqrt(o*o+c*c+u*u+l*l);o*=M,c*=M,u*=M,l*=M}}A[t]=o,A[t+1]=c,A[t+2]=u,A[t+3]=l}static multiplyQuaternionsFlat(A,t,i,n,r,s){const a=i[n],o=i[n+1],c=i[n+2],u=i[n+3],l=r[s],h=r[s+1],d=r[s+2],f=r[s+3];return A[t]=a*f+u*l+o*d-c*h,A[t+1]=o*f+u*h+c*l-a*d,A[t+2]=c*f+u*d+a*h-o*l,A[t+3]=u*f-a*l-o*h-c*d,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,t,i,n){return this._x=A,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,t){const i=A._x,n=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,c=a(i/2),u=a(n/2),l=a(r/2),h=o(i/2),d=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=h*u*l+c*d*f,this._y=c*d*l-h*u*f,this._z=c*u*f+h*d*l,this._w=c*u*l-h*d*f;break;case"YXZ":this._x=h*u*l+c*d*f,this._y=c*d*l-h*u*f,this._z=c*u*f-h*d*l,this._w=c*u*l+h*d*f;break;case"ZXY":this._x=h*u*l-c*d*f,this._y=c*d*l+h*u*f,this._z=c*u*f+h*d*l,this._w=c*u*l-h*d*f;break;case"ZYX":this._x=h*u*l-c*d*f,this._y=c*d*l+h*u*f,this._z=c*u*f-h*d*l,this._w=c*u*l+h*d*f;break;case"YZX":this._x=h*u*l+c*d*f,this._y=c*d*l+h*u*f,this._z=c*u*f-h*d*l,this._w=c*u*l-h*d*f;break;case"XZY":this._x=h*u*l-c*d*f,this._y=c*d*l-h*u*f,this._z=c*u*f+h*d*l,this._w=c*u*l+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,t){const i=t/2,n=Math.sin(i);return this._x=A.x*n,this._y=A.y*n,this._z=A.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(A){const t=A.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],u=t[6],l=t[10],h=i+a+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>a&&i>l){const d=2*Math.sqrt(1+i-a-l);this._w=(u-o)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(a>l){const d=2*Math.sqrt(1+a-i-l);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(o+u)/d}else{const d=2*Math.sqrt(1+l-i-a);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(A,t){let i=A.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=i):(this._x=0,this._y=-A.z,this._z=A.y,this._w=i)):(this._x=A.y*t.z-A.z*t.y,this._y=A.z*t.x-A.x*t.z,this._z=A.x*t.y-A.y*t.x,this._w=i),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(ze(this.dot(A),-1,1)))}rotateTowards(A,t){const i=this.angleTo(A);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(A,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,t){const i=A._x,n=A._y,r=A._z,s=A._w,a=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+s*a+n*c-r*o,this._y=n*u+s*o+r*a-i*c,this._z=r*u+s*c+i*o-n*a,this._w=s*u-i*a-n*o-r*c,this._onChangeCallback(),this}slerp(A,t){if(t===0)return this;if(t===1)return this.copy(A);const i=this._x,n=this._y,r=this._z,s=this._w;let a=s*A._w+i*A._x+n*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(o),u=Math.atan2(c,a),l=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*l+this._w*h,this._x=i*l+this._x*h,this._y=n*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,t,i){return this.copy(A).slerp(t,i)}random(){const A=Math.random(),t=Math.sqrt(1-A),i=Math.sqrt(A),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,t=0){return this._x=A[t],this._y=A[t+1],this._z=A[t+2],this._w=A[t+3],this._onChangeCallback(),this}toArray(A=[],t=0){return A[t]=this._x,A[t+1]=this._y,A[t+2]=this._z,A[t+3]=this._w,A}fromBufferAttribute(A,t){return this._x=A.getX(t),this._y=A.getY(t),this._z=A.getZ(t),this._w=A.getW(t),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(A=0,t=0,i=0){E.prototype.isVector3=!0,this.x=A,this.y=t,this.z=i}set(A,t,i){return i===void 0&&(i=this.z),this.x=A,this.y=t,this.z=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this.z=A.z+t.z,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this.z+=A.z*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this.z=A.z-t.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,t){return this.x=A.x*t.x,this.y=A.y*t.y,this.z=A.z*t.z,this}applyEuler(A){return this.applyQuaternion(Zu.setFromEuler(A))}applyAxisAngle(A,t){return this.applyQuaternion(Zu.setFromAxisAngle(A,t))}applyMatrix3(A){const t=this.x,i=this.y,n=this.z,r=A.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const t=this.x,i=this.y,n=this.z,r=A.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(A){const t=this.x,i=this.y,n=this.z,r=A.x,s=A.y,a=A.z,o=A.w,c=o*t+s*n-a*i,u=o*i+a*t-r*n,l=o*n+r*i-s*t,h=-r*t-s*i-a*n;return this.x=c*o+h*-r+u*-a-l*-s,this.y=u*o+h*-s+l*-r-c*-a,this.z=l*o+h*-a+c*-s-u*-r,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const t=this.x,i=this.y,n=this.z,r=A.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,t){return this.x=Math.max(A.x,Math.min(t.x,this.x)),this.y=Math.max(A.y,Math.min(t.y,this.y)),this.z=Math.max(A.z,Math.min(t.z,this.z)),this}clampScalar(A,t){return this.x=Math.max(A,Math.min(t,this.x)),this.y=Math.max(A,Math.min(t,this.y)),this.z=Math.max(A,Math.min(t,this.z)),this}clampLength(A,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(A,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this.z+=(A.z-this.z)*t,this}lerpVectors(A,t,i){return this.x=A.x+(t.x-A.x)*i,this.y=A.y+(t.y-A.y)*i,this.z=A.z+(t.z-A.z)*i,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,t){const i=A.x,n=A.y,r=A.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(A){const t=A.lengthSq();if(t===0)return this.set(0,0,0);const i=A.dot(this)/t;return this.copy(A).multiplyScalar(i)}projectOnPlane(A){return hl.copy(this).projectOnVector(A),this.sub(hl)}reflect(A){return this.sub(hl.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const t=Math.sqrt(this.lengthSq()*A.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(A)/t;return Math.acos(ze(i,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const t=this.x-A.x,i=this.y-A.y,n=this.z-A.z;return t*t+i*i+n*n}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,t,i){const n=Math.sin(t)*A;return this.x=n*Math.sin(i),this.y=Math.cos(t)*A,this.z=n*Math.cos(i),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,t,i){return this.x=A*Math.sin(t),this.y=i,this.z=A*Math.cos(t),this}setFromMatrixPosition(A){const t=A.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(A){const t=this.setFromMatrixColumn(A,0).length(),i=this.setFromMatrixColumn(A,1).length(),n=this.setFromMatrixColumn(A,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(A,t){return this.fromArray(A.elements,t*4)}setFromMatrix3Column(A,t){return this.fromArray(A.elements,t*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this.z=A[t+2],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A[t+2]=this.z,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this.z=A.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-A**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new E,Zu=new Oi;class Nt{constructor(A=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=t}set(A,t){return this.min.copy(A),this.max.copy(t),this}setFromArray(A){let t=1/0,i=1/0,n=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,c=A.length;o<c;o+=3){const u=A[o],l=A[o+1],h=A[o+2];u<t&&(t=u),l<i&&(i=l),h<n&&(n=h),u>r&&(r=u),l>s&&(s=l),h>a&&(a=h)}return this.min.set(t,i,n),this.max.set(r,s,a),this}setFromBufferAttribute(A){let t=1/0,i=1/0,n=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,c=A.count;o<c;o++){const u=A.getX(o),l=A.getY(o),h=A.getZ(o);u<t&&(t=u),l<i&&(i=l),h<n&&(n=h),u>r&&(r=u),l>s&&(s=l),h>a&&(a=h)}return this.min.set(t,i,n),this.max.set(r,s,a),this}setFromPoints(A){this.makeEmpty();for(let t=0,i=A.length;t<i;t++)this.expandByPoint(A[t]);return this}setFromCenterAndSize(A,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(A).sub(i),this.max.copy(A).add(i),this}setFromObject(A,t=!1){return this.makeEmpty(),this.expandByObject(A,t)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,t=!1){A.updateWorldMatrix(!1,!1);const i=A.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)on.fromBufferAttribute(r,s).applyMatrix4(A.matrixWorld),this.expandByPoint(on)}else i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox),ul.applyMatrix4(A.matrixWorld),this.union(ul);const n=A.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,t){return t.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,on),on.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let t,i;return A.normal.x>0?(t=A.normal.x*this.min.x,i=A.normal.x*this.max.x):(t=A.normal.x*this.max.x,i=A.normal.x*this.min.x),A.normal.y>0?(t+=A.normal.y*this.min.y,i+=A.normal.y*this.max.y):(t+=A.normal.y*this.max.y,i+=A.normal.y*this.min.y),A.normal.z>0?(t+=A.normal.z*this.min.z,i+=A.normal.z*this.max.z):(t+=A.normal.z*this.max.z,i+=A.normal.z*this.min.z),t<=-A.constant&&i>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Jr),ra.subVectors(this.max,Jr),Yn.subVectors(A.a,Jr),Qn.subVectors(A.b,Jr),Zn.subVectors(A.c,Jr),Ii.subVectors(Qn,Yn),Ni.subVectors(Zn,Qn),ln.subVectors(Yn,Zn);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-ln.z,ln.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,ln.z,0,-ln.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-ln.y,ln.x,0];return!dl(t,Yn,Qn,Zn,ra)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Yn,Qn,Zn,ra))?!1:(sa.crossVectors(Ii,Ni),t=[sa.x,sa.y,sa.z],dl(t,Yn,Qn,Zn,ra))}clampPoint(A,t){return t.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return on.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(on).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(yi),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const yi=[new E,new E,new E,new E,new E,new E,new E,new E],on=new E,ul=new Nt,Yn=new E,Qn=new E,Zn=new E,Ii=new E,Ni=new E,ln=new E,Jr=new E,ra=new E,sa=new E,cn=new E;function dl(e,A,t,i,n){for(let r=0,s=e.length-3;r<=s;r+=3){cn.fromArray(e,r);const a=n.x*Math.abs(cn.x)+n.y*Math.abs(cn.y)+n.z*Math.abs(cn.z),o=A.dot(cn),c=t.dot(cn),u=i.dot(cn);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>a)return!1}return!0}const Jv=new Nt,Kr=new E,fl=new E;class Qt{constructor(A=new E,t=-1){this.center=A,this.radius=t}set(A,t){return this.center.copy(A),this.radius=t,this}setFromPoints(A,t){const i=this.center;t!==void 0?i.copy(t):Jv.setFromPoints(A).getCenter(i);let n=0;for(let r=0,s=A.length;r<s;r++)n=Math.max(n,i.distanceToSquared(A[r]));return this.radius=Math.sqrt(n),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const t=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=t*t}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,t){const i=this.center.distanceToSquared(A);return t.copy(A),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Kr.subVectors(A,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Kr,n/i),this.radius+=n}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(fl.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Kr.copy(A.center).add(fl)),this.expandByPoint(Kr.copy(A.center).sub(fl))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new E,pl=new E,aa=new E,Bi=new E,ml=new E,oa=new E,gl=new E;class Ur{constructor(A=new E,t=new E(0,0,-1)){this.origin=A,this.direction=t}set(A,t){return this.origin.copy(A),this.direction.copy(t),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,t){return t.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,xi)),this}closestPointToPoint(A,t){t.subVectors(A,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const t=xi.subVectors(A,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(A):(xi.copy(this.direction).multiplyScalar(t).add(this.origin),xi.distanceToSquared(A))}distanceSqToSegment(A,t,i,n){pl.copy(A).add(t).multiplyScalar(.5),aa.copy(t).sub(A).normalize(),Bi.copy(this.origin).sub(pl);const r=A.distanceTo(t)*.5,s=-this.direction.dot(aa),a=Bi.dot(this.direction),o=-Bi.dot(aa),c=Bi.lengthSq(),u=Math.abs(1-s*s);let l,h,d,f;if(u>0)if(l=s*o-a,h=s*a-o,f=r*u,l>=0)if(h>=-f)if(h<=f){const m=1/u;l*=m,h*=m,d=l*(l+s*h+2*a)+h*(s*l+h+2*o)+c}else h=r,l=Math.max(0,-(s*h+a)),d=-l*l+h*(h+2*o)+c;else h=-r,l=Math.max(0,-(s*h+a)),d=-l*l+h*(h+2*o)+c;else h<=-f?(l=Math.max(0,-(-s*r+a)),h=l>0?-r:Math.min(Math.max(-r,-o),r),d=-l*l+h*(h+2*o)+c):h<=f?(l=0,h=Math.min(Math.max(-r,-o),r),d=h*(h+2*o)+c):(l=Math.max(0,-(s*r+a)),h=l>0?r:Math.min(Math.max(-r,-o),r),d=-l*l+h*(h+2*o)+c);else h=s>0?-r:r,l=Math.max(0,-(s*h+a)),d=-l*l+h*(h+2*o)+c;return i&&i.copy(this.direction).multiplyScalar(l).add(this.origin),n&&n.copy(aa).multiplyScalar(h).add(pl),d}intersectSphere(A,t){xi.subVectors(A.center,this.origin);const i=xi.dot(this.direction),n=xi.dot(xi)-i*i,r=A.radius*A.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return a<0&&o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const t=A.normal.dot(this.direction);if(t===0)return A.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(A.normal)+A.constant)/t;return i>=0?i:null}intersectPlane(A,t){const i=this.distanceToPlane(A);return i===null?null:this.at(i,t)}intersectsPlane(A){const t=A.distanceToPoint(this.origin);return t===0||A.normal.dot(this.direction)*t<0}intersectBox(A,t){let i,n,r,s,a,o;const c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,h=this.origin;return c>=0?(i=(A.min.x-h.x)*c,n=(A.max.x-h.x)*c):(i=(A.max.x-h.x)*c,n=(A.min.x-h.x)*c),u>=0?(r=(A.min.y-h.y)*u,s=(A.max.y-h.y)*u):(r=(A.max.y-h.y)*u,s=(A.min.y-h.y)*u),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),l>=0?(a=(A.min.z-h.z)*l,o=(A.max.z-h.z)*l):(a=(A.max.z-h.z)*l,o=(A.min.z-h.z)*l),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(A){return this.intersectBox(A,xi)!==null}intersectTriangle(A,t,i,n,r){ml.subVectors(t,A),oa.subVectors(i,A),gl.crossVectors(ml,oa);let s=this.direction.dot(gl),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Bi.subVectors(this.origin,A);const o=a*this.direction.dot(oa.crossVectors(Bi,oa));if(o<0)return null;const c=a*this.direction.dot(ml.cross(Bi));if(c<0||o+c>s)return null;const u=-a*Bi.dot(gl);return u<0?null:this.at(u/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class GA{constructor(){GA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,t,i,n,r,s,a,o,c,u,l,h,d,f,m,p){const g=this.elements;return g[0]=A,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=c,g[6]=u,g[10]=l,g[14]=h,g[3]=d,g[7]=f,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new GA().fromArray(this.elements)}copy(A){const t=this.elements,i=A.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(A){const t=this.elements,i=A.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(A){const t=A.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(A,t,i){return A.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(A,t,i){return this.set(A.x,t.x,i.x,0,A.y,t.y,i.y,0,A.z,t.z,i.z,0,0,0,0,1),this}extractRotation(A){const t=this.elements,i=A.elements,n=1/Jn.setFromMatrixColumn(A,0).length(),r=1/Jn.setFromMatrixColumn(A,1).length(),s=1/Jn.setFromMatrixColumn(A,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(A){const t=this.elements,i=A.x,n=A.y,r=A.z,s=Math.cos(i),a=Math.sin(i),o=Math.cos(n),c=Math.sin(n),u=Math.cos(r),l=Math.sin(r);if(A.order==="XYZ"){const h=s*u,d=s*l,f=a*u,m=a*l;t[0]=o*u,t[4]=-o*l,t[8]=c,t[1]=d+f*c,t[5]=h-m*c,t[9]=-a*o,t[2]=m-h*c,t[6]=f+d*c,t[10]=s*o}else if(A.order==="YXZ"){const h=o*u,d=o*l,f=c*u,m=c*l;t[0]=h+m*a,t[4]=f*a-d,t[8]=s*c,t[1]=s*l,t[5]=s*u,t[9]=-a,t[2]=d*a-f,t[6]=m+h*a,t[10]=s*o}else if(A.order==="ZXY"){const h=o*u,d=o*l,f=c*u,m=c*l;t[0]=h-m*a,t[4]=-s*l,t[8]=f+d*a,t[1]=d+f*a,t[5]=s*u,t[9]=m-h*a,t[2]=-s*c,t[6]=a,t[10]=s*o}else if(A.order==="ZYX"){const h=s*u,d=s*l,f=a*u,m=a*l;t[0]=o*u,t[4]=f*c-d,t[8]=h*c+m,t[1]=o*l,t[5]=m*c+h,t[9]=d*c-f,t[2]=-c,t[6]=a*o,t[10]=s*o}else if(A.order==="YZX"){const h=s*o,d=s*c,f=a*o,m=a*c;t[0]=o*u,t[4]=m-h*l,t[8]=f*l+d,t[1]=l,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*l+f,t[10]=h-m*l}else if(A.order==="XZY"){const h=s*o,d=s*c,f=a*o,m=a*c;t[0]=o*u,t[4]=-l,t[8]=c*u,t[1]=h*l+m,t[5]=s*u,t[9]=d*l-f,t[2]=f*l-d,t[6]=a*u,t[10]=m*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Kv,A,$v)}lookAt(A,t,i){const n=this.elements;return ft.subVectors(A,t),ft.lengthSq()===0&&(ft.z=1),ft.normalize(),zi.crossVectors(i,ft),zi.lengthSq()===0&&(Math.abs(i.z)===1?ft.x+=1e-4:ft.z+=1e-4,ft.normalize(),zi.crossVectors(i,ft)),zi.normalize(),la.crossVectors(ft,zi),n[0]=zi.x,n[4]=la.x,n[8]=ft.x,n[1]=zi.y,n[5]=la.y,n[9]=ft.y,n[2]=zi.z,n[6]=la.z,n[10]=ft.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,t){const i=A.elements,n=t.elements,r=this.elements,s=i[0],a=i[4],o=i[8],c=i[12],u=i[1],l=i[5],h=i[9],d=i[13],f=i[2],m=i[6],p=i[10],g=i[14],v=i[3],x=i[7],y=i[11],M=i[15],w=n[0],_=n[4],b=n[8],T=n[12],S=n[1],D=n[5],L=n[9],R=n[13],I=n[2],W=n[6],eA=n[10],F=n[14],V=n[3],J=n[7],U=n[11],B=n[15];return r[0]=s*w+a*S+o*I+c*V,r[4]=s*_+a*D+o*W+c*J,r[8]=s*b+a*L+o*eA+c*U,r[12]=s*T+a*R+o*F+c*B,r[1]=u*w+l*S+h*I+d*V,r[5]=u*_+l*D+h*W+d*J,r[9]=u*b+l*L+h*eA+d*U,r[13]=u*T+l*R+h*F+d*B,r[2]=f*w+m*S+p*I+g*V,r[6]=f*_+m*D+p*W+g*J,r[10]=f*b+m*L+p*eA+g*U,r[14]=f*T+m*R+p*F+g*B,r[3]=v*w+x*S+y*I+M*V,r[7]=v*_+x*D+y*W+M*J,r[11]=v*b+x*L+y*eA+M*U,r[15]=v*T+x*R+y*F+M*B,this}multiplyScalar(A){const t=this.elements;return t[0]*=A,t[4]*=A,t[8]*=A,t[12]*=A,t[1]*=A,t[5]*=A,t[9]*=A,t[13]*=A,t[2]*=A,t[6]*=A,t[10]*=A,t[14]*=A,t[3]*=A,t[7]*=A,t[11]*=A,t[15]*=A,this}determinant(){const A=this.elements,t=A[0],i=A[4],n=A[8],r=A[12],s=A[1],a=A[5],o=A[9],c=A[13],u=A[2],l=A[6],h=A[10],d=A[14],f=A[3],m=A[7],p=A[11],g=A[15];return f*(+r*o*l-n*c*l-r*a*h+i*c*h+n*a*d-i*o*d)+m*(+t*o*d-t*c*h+r*s*h-n*s*d+n*c*u-r*o*u)+p*(+t*c*l-t*a*d-r*s*l+i*s*d+r*a*u-i*c*u)+g*(-n*a*u-t*o*l+t*a*h+n*s*l-i*s*h+i*o*u)}transpose(){const A=this.elements;let t;return t=A[1],A[1]=A[4],A[4]=t,t=A[2],A[2]=A[8],A[8]=t,t=A[6],A[6]=A[9],A[9]=t,t=A[3],A[3]=A[12],A[12]=t,t=A[7],A[7]=A[13],A[13]=t,t=A[11],A[11]=A[14],A[14]=t,this}setPosition(A,t,i){const n=this.elements;return A.isVector3?(n[12]=A.x,n[13]=A.y,n[14]=A.z):(n[12]=A,n[13]=t,n[14]=i),this}invert(){const A=this.elements,t=A[0],i=A[1],n=A[2],r=A[3],s=A[4],a=A[5],o=A[6],c=A[7],u=A[8],l=A[9],h=A[10],d=A[11],f=A[12],m=A[13],p=A[14],g=A[15],v=l*p*c-m*h*c+m*o*d-a*p*d-l*o*g+a*h*g,x=f*h*c-u*p*c-f*o*d+s*p*d+u*o*g-s*h*g,y=u*m*c-f*l*c+f*a*d-s*m*d-u*a*g+s*l*g,M=f*l*o-u*m*o-f*a*h+s*m*h+u*a*p-s*l*p,w=t*v+i*x+n*y+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/w;return A[0]=v*_,A[1]=(m*h*r-l*p*r-m*n*d+i*p*d+l*n*g-i*h*g)*_,A[2]=(a*p*r-m*o*r+m*n*c-i*p*c-a*n*g+i*o*g)*_,A[3]=(l*o*r-a*h*r-l*n*c+i*h*c+a*n*d-i*o*d)*_,A[4]=x*_,A[5]=(u*p*r-f*h*r+f*n*d-t*p*d-u*n*g+t*h*g)*_,A[6]=(f*o*r-s*p*r-f*n*c+t*p*c+s*n*g-t*o*g)*_,A[7]=(s*h*r-u*o*r+u*n*c-t*h*c-s*n*d+t*o*d)*_,A[8]=y*_,A[9]=(f*l*r-u*m*r-f*i*d+t*m*d+u*i*g-t*l*g)*_,A[10]=(s*m*r-f*a*r+f*i*c-t*m*c-s*i*g+t*a*g)*_,A[11]=(u*a*r-s*l*r-u*i*c+t*l*c+s*i*d-t*a*d)*_,A[12]=M*_,A[13]=(u*m*n-f*l*n+f*i*h-t*m*h-u*i*p+t*l*p)*_,A[14]=(f*a*n-s*m*n-f*i*o+t*m*o+s*i*p-t*a*p)*_,A[15]=(s*l*n-u*a*n+u*i*o-t*l*o-s*i*h+t*a*h)*_,this}scale(A){const t=this.elements,i=A.x,n=A.y,r=A.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,t=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],i=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],n=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(A,t,i){return this.set(1,0,0,A,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(A){const t=Math.cos(A),i=Math.sin(A);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(A){const t=Math.cos(A),i=Math.sin(A);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(A){const t=Math.cos(A),i=Math.sin(A);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=A.x,a=A.y,o=A.z,c=r*s,u=r*a;return this.set(c*s+i,c*a-n*o,c*o+n*a,0,c*a+n*o,u*a+i,u*o-n*s,0,c*o-n*a,u*o+n*s,r*o*o+i,0,0,0,0,1),this}makeScale(A,t,i){return this.set(A,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(A,t,i,n,r,s){return this.set(1,i,r,0,A,1,s,0,t,n,1,0,0,0,0,1),this}compose(A,t,i){const n=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,c=r+r,u=s+s,l=a+a,h=r*c,d=r*u,f=r*l,m=s*u,p=s*l,g=a*l,v=o*c,x=o*u,y=o*l,M=i.x,w=i.y,_=i.z;return n[0]=(1-(m+g))*M,n[1]=(d+y)*M,n[2]=(f-x)*M,n[3]=0,n[4]=(d-y)*w,n[5]=(1-(h+g))*w,n[6]=(p+v)*w,n[7]=0,n[8]=(f+x)*_,n[9]=(p-v)*_,n[10]=(1-(h+m))*_,n[11]=0,n[12]=A.x,n[13]=A.y,n[14]=A.z,n[15]=1,this}decompose(A,t,i){const n=this.elements;let r=Jn.set(n[0],n[1],n[2]).length();const s=Jn.set(n[4],n[5],n[6]).length(),a=Jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),A.x=n[12],A.y=n[13],A.z=n[14],zt.copy(this);const c=1/r,u=1/s,l=1/a;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=l,zt.elements[9]*=l,zt.elements[10]*=l,t.setFromRotationMatrix(zt),i.x=r,i.y=s,i.z=a,this}makePerspective(A,t,i,n,r,s){const a=this.elements,o=2*r/(t-A),c=2*r/(i-n),u=(t+A)/(t-A),l=(i+n)/(i-n),h=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=l,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,t,i,n,r,s){const a=this.elements,o=1/(t-A),c=1/(i-n),u=1/(s-r),l=(t+A)*o,h=(i+n)*c,d=(s+r)*u;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-l,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){const t=this.elements,i=A.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(A,t=0){for(let i=0;i<16;i++)this.elements[i]=A[i+t];return this}toArray(A=[],t=0){const i=this.elements;return A[t]=i[0],A[t+1]=i[1],A[t+2]=i[2],A[t+3]=i[3],A[t+4]=i[4],A[t+5]=i[5],A[t+6]=i[6],A[t+7]=i[7],A[t+8]=i[8],A[t+9]=i[9],A[t+10]=i[10],A[t+11]=i[11],A[t+12]=i[12],A[t+13]=i[13],A[t+14]=i[14],A[t+15]=i[15],A}}const Jn=new E,zt=new GA,Kv=new E(0,0,0),$v=new E(1,1,1),zi=new E,la=new E,ft=new E,Ju=new GA,Ku=new Oi;class Qi{constructor(A=0,t=0,i=0,n=Qi.DefaultOrder){this.isEuler=!0,this._x=A,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,t,i,n=this._order){return this._x=A,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,t=this._order,i=!0){const n=A.elements,r=n[0],s=n[4],a=n[8],o=n[1],c=n[5],u=n[9],l=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(A,t,i){return Ju.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(A,t=this._order){return this.set(A.x,A.y,A.z,t)}reorder(A){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],t=0){return A[t]=this._x,A[t+1]=this._y,A[t+2]=this._z,A[t+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Qi.DefaultOrder="XYZ";Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class uh{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Ay=0;const $u=new E,Kn=new Oi,bi=new GA,ca=new E,$r=new E,ey=new E,ty=new Oi,Ad=new E(1,0,0),ed=new E(0,1,0),td=new E(0,0,1),iy={type:"added"},id={type:"removed"};class ue extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DefaultUp.clone();const A=new E,t=new Qi,i=new Oi,n=new E(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new GA},normalMatrix:{value:new Xe}}),this.matrix=new GA,this.matrixWorld=new GA,this.matrixAutoUpdate=ue.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ue.DefaultMatrixWorldAutoUpdate,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,t){this.quaternion.setFromAxisAngle(A,t)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,t){return Kn.setFromAxisAngle(A,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(A,t){return Kn.setFromAxisAngle(A,t),this.quaternion.premultiply(Kn),this}rotateX(A){return this.rotateOnAxis(Ad,A)}rotateY(A){return this.rotateOnAxis(ed,A)}rotateZ(A){return this.rotateOnAxis(td,A)}translateOnAxis(A,t){return $u.copy(A).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(A){return this.translateOnAxis(Ad,A)}translateY(A){return this.translateOnAxis(ed,A)}translateZ(A){return this.translateOnAxis(td,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(A,t,i){A.isVector3?ca.copy(A):ca.set(A,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt($r,ca,this.up):bi.lookAt(ca,$r,this.up),this.quaternion.setFromRotationMatrix(bi),n&&(bi.extractRotation(n.matrixWorld),Kn.setFromRotationMatrix(bi),this.quaternion.premultiply(Kn.invert()))}add(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(iy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(A);return t!==-1&&(A.parent=null,this.children.splice(t,1),A.dispatchEvent(id)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const t=this.children[A];t.parent=null,t.dispatchEvent(id)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),bi.multiply(A.parent.matrixWorld)),A.applyMatrix4(bi),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,t){if(this[A]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(A,t);if(s!==void 0)return s}}getObjectsByProperty(A,t){let i=[];this[A]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectsByProperty(A,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,A,ey),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,ty,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return A.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(A){A(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(A)}traverseAncestors(A){const t=this.parent;t!==null&&(A(t),t.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||A===!0)&&r.updateMatrixWorld(A)}}updateWorldMatrix(A,t){const i=this.parent;if(A===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(A){const t=A===void 0||typeof A=="string",i={};t&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const l=o[c];r(A.shapes,l)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(A.materials,this.material[o]));n.material=a}else n.material=r(A.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];n.animations.push(r(A.animations,o))}}if(t){const a=s(A.geometries),o=s(A.materials),c=s(A.textures),u=s(A.images),l=s(A.shapes),h=s(A.skeletons),d=s(A.animations),f=s(A.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),l.length>0&&(i.shapes=l),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=n,i;function s(a){const o=[];for(const c in a){const u=a[c];delete u.metadata,o.push(u)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,t=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),t===!0)for(let i=0;i<A.children.length;i++){const n=A.children[i];this.add(n.clone())}return this}}ue.DefaultUp=new E(0,1,0);ue.DefaultMatrixAutoUpdate=!0;ue.DefaultMatrixWorldAutoUpdate=!0;const Ft=new E,wi=new E,vl=new E,Si=new E,$n=new E,Ar=new E,nd=new E,yl=new E,xl=new E,bl=new E;class Lt{constructor(A=new E,t=new E,i=new E){this.a=A,this.b=t,this.c=i}static getNormal(A,t,i,n){n.subVectors(i,t),Ft.subVectors(A,t),n.cross(Ft);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(A,t,i,n,r){Ft.subVectors(n,t),wi.subVectors(i,t),vl.subVectors(A,t);const s=Ft.dot(Ft),a=Ft.dot(wi),o=Ft.dot(vl),c=wi.dot(wi),u=wi.dot(vl),l=s*c-a*a;if(l===0)return r.set(-2,-1,-1);const h=1/l,d=(c*o-a*u)*h,f=(s*u-a*o)*h;return r.set(1-d-f,f,d)}static containsPoint(A,t,i,n){return this.getBarycoord(A,t,i,n,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(A,t,i,n,r,s,a,o){return this.getBarycoord(A,t,i,n,Si),o.set(0,0),o.addScaledVector(r,Si.x),o.addScaledVector(s,Si.y),o.addScaledVector(a,Si.z),o}static isFrontFacing(A,t,i,n){return Ft.subVectors(i,t),wi.subVectors(A,t),Ft.cross(wi).dot(n)<0}set(A,t,i){return this.a.copy(A),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(A,t,i,n){return this.a.copy(A[t]),this.b.copy(A[i]),this.c.copy(A[n]),this}setFromAttributeAndIndices(A,t,i,n){return this.a.fromBufferAttribute(A,t),this.b.fromBufferAttribute(A,i),this.c.fromBufferAttribute(A,n),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Ft.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Ft.cross(wi).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Lt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,t){return Lt.getBarycoord(A,this.a,this.b,this.c,t)}getUV(A,t,i,n,r){return Lt.getUV(A,this.a,this.b,this.c,t,i,n,r)}containsPoint(A){return Lt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Lt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,t){const i=this.a,n=this.b,r=this.c;let s,a;$n.subVectors(n,i),Ar.subVectors(r,i),yl.subVectors(A,i);const o=$n.dot(yl),c=Ar.dot(yl);if(o<=0&&c<=0)return t.copy(i);xl.subVectors(A,n);const u=$n.dot(xl),l=Ar.dot(xl);if(u>=0&&l<=u)return t.copy(n);const h=o*l-u*c;if(h<=0&&o>=0&&u<=0)return s=o/(o-u),t.copy(i).addScaledVector($n,s);bl.subVectors(A,r);const d=$n.dot(bl),f=Ar.dot(bl);if(f>=0&&d<=f)return t.copy(r);const m=d*c-o*f;if(m<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Ar,a);const p=u*f-d*l;if(p<=0&&l-u>=0&&d-f>=0)return nd.subVectors(r,n),a=(l-u)/(l-u+(d-f)),t.copy(n).addScaledVector(nd,a);const g=1/(p+m+h);return s=m*g,a=h*g,t.copy(i).addScaledVector($n,s).addScaledVector(Ar,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let ny=0;class kr extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=yr,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Am,this.blendDst=em,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const t in A){const i=A[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(A){const t=A===void 0||typeof A=="string";t&&(A={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(A).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(A).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(A).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(A).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(A).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(A.textures),s=n(A.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const t=A.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class Po extends kr{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Oe=new E,ha=new Z;class ZA{constructor(A,t,i=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=t,this.count=A!==void 0?A.length/t:0,this.normalized=i,this.usage=vc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,t,i){A*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[A+n]=t.array[i+n];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(A),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Oe.fromBufferAttribute(this,t),Oe.applyMatrix3(A),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(A){for(let t=0,i=this.count;t<i;t++)Oe.fromBufferAttribute(this,t),Oe.applyMatrix4(A),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(A){for(let t=0,i=this.count;t<i;t++)Oe.fromBufferAttribute(this,t),Oe.applyNormalMatrix(A),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}transformDirection(A){for(let t=0,i=this.count;t<i;t++)Oe.fromBufferAttribute(this,t),Oe.transformDirection(A),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}set(A,t=0){return this.array.set(A,t),this}getX(A){let t=this.array[A*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(A,t){return this.normalized&&(t=pe(t,this.array)),this.array[A*this.itemSize]=t,this}getY(A){let t=this.array[A*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(A,t){return this.normalized&&(t=pe(t,this.array)),this.array[A*this.itemSize+1]=t,this}getZ(A){let t=this.array[A*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(A,t){return this.normalized&&(t=pe(t,this.array)),this.array[A*this.itemSize+2]=t,this}getW(A){let t=this.array[A*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(A,t){return this.normalized&&(t=pe(t,this.array)),this.array[A*this.itemSize+3]=t,this}setXY(A,t,i){return A*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array)),this.array[A+0]=t,this.array[A+1]=i,this}setXYZ(A,t,i,n){return A*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),n=pe(n,this.array)),this.array[A+0]=t,this.array[A+1]=i,this.array[A+2]=n,this}setXYZW(A,t,i,n,r){return A*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),n=pe(n,this.array),r=pe(r,this.array)),this.array[A+0]=t,this.array[A+1]=i,this.array[A+2]=n,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==vc&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hm extends ZA{constructor(A,t,i){super(new Uint16Array(A),t,i)}}class _s extends ZA{constructor(A,t,i){super(new Uint32Array(A),t,i)}}class ry extends ZA{constructor(A,t,i){super(new Uint16Array(A),t,i),this.isFloat16BufferAttribute=!0}}class DA extends ZA{constructor(A,t,i){super(new Float32Array(A),t,i)}}let sy=0;const bt=new GA,wl=new ue,er=new E,pt=new Nt,As=new Nt,He=new E;class VA extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(sm(A)?_s:hm)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,t){return this.attributes[A]=t,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,t,i=0){this.groups.push({start:A,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(A,t){this.drawRange.start=A,this.drawRange.count=t}applyMatrix4(A){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(A),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(A);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(A),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return bt.makeRotationFromQuaternion(A),this.applyMatrix4(bt),this}rotateX(A){return bt.makeRotationX(A),this.applyMatrix4(bt),this}rotateY(A){return bt.makeRotationY(A),this.applyMatrix4(bt),this}rotateZ(A){return bt.makeRotationZ(A),this.applyMatrix4(bt),this}translate(A,t,i){return bt.makeTranslation(A,t,i),this.applyMatrix4(bt),this}scale(A,t,i){return bt.makeScale(A,t,i),this.applyMatrix4(bt),this}lookAt(A){return wl.lookAt(A),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(A){const t=[];for(let i=0,n=A.length;i<n;i++){const r=A[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new DA(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const A=this.attributes.position,t=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];pt.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const A=this.attributes.position,t=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(A){const i=this.boundingSphere.center;if(pt.setFromBufferAttribute(A),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(pt.min,As.min),pt.expandByPoint(He),He.addVectors(pt.max,As.max),pt.expandByPoint(He)):(pt.expandByPoint(As.min),pt.expandByPoint(As.max))}pt.getCenter(i);let n=0;for(let r=0,s=A.count;r<s;r++)He.fromBufferAttribute(A,r),n=Math.max(n,i.distanceToSquared(He));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),o&&(er.fromBufferAttribute(A,c),He.add(er)),n=Math.max(n,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,t=this.attributes;if(A===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=A.array,n=t.position.array,r=t.normal.array,s=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ZA(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new E,u[S]=new E;const l=new E,h=new E,d=new E,f=new Z,m=new Z,p=new Z,g=new E,v=new E;function x(S,D,L){l.fromArray(n,S*3),h.fromArray(n,D*3),d.fromArray(n,L*3),f.fromArray(s,S*2),m.fromArray(s,D*2),p.fromArray(s,L*2),h.sub(l),d.sub(l),m.sub(f),p.sub(f);const R=1/(m.x*p.y-p.x*m.y);!isFinite(R)||(g.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(R),v.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(R),c[S].add(g),c[D].add(g),c[L].add(g),u[S].add(v),u[D].add(v),u[L].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,D=y.length;S<D;++S){const L=y[S],R=L.start,I=L.count;for(let W=R,eA=R+I;W<eA;W+=3)x(i[W+0],i[W+1],i[W+2])}const M=new E,w=new E,_=new E,b=new E;function T(S){_.fromArray(r,S*3),b.copy(_);const D=c[S];M.copy(D),M.sub(_.multiplyScalar(_.dot(D))).normalize(),w.crossVectors(b,D);const R=w.dot(u[S])<0?-1:1;o[S*4]=M.x,o[S*4+1]=M.y,o[S*4+2]=M.z,o[S*4+3]=R}for(let S=0,D=y.length;S<D;++S){const L=y[S],R=L.start,I=L.count;for(let W=R,eA=R+I;W<eA;W+=3)T(i[W+0]),T(i[W+1]),T(i[W+2])}}computeVertexNormals(){const A=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ZA(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const n=new E,r=new E,s=new E,a=new E,o=new E,c=new E,u=new E,l=new E;if(A)for(let h=0,d=A.count;h<d;h+=3){const f=A.getX(h+0),m=A.getX(h+1),p=A.getX(h+2);n.fromBufferAttribute(t,f),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),u.subVectors(s,r),l.subVectors(n,r),u.cross(l),a.fromBufferAttribute(i,f),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),o.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),l.subVectors(n,r),u.cross(l),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let t=0,i=A.count;t<i;t++)He.fromBufferAttribute(A,t),He.normalize(),A.setXYZ(t,He.x,He.y,He.z)}toNonIndexed(){function A(a,o){const c=a.array,u=a.itemSize,l=a.normalized,h=new c.constructor(o.length*u);let d=0,f=0;for(let m=0,p=o.length;m<p;m++){a.isInterleavedBufferAttribute?d=o[m]*a.data.stride+a.offset:d=o[m]*u;for(let g=0;g<u;g++)h[f++]=c[d++]}return new ZA(h,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new VA,i=this.index.array,n=this.attributes;for(const a in n){const o=n[a],c=A(o,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const o=[],c=r[a];for(let u=0,l=c.length;u<l;u++){const h=c[u],d=A(h,i);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(A[c]=o[c]);return A}A.data={attributes:{}};const t=this.index;t!==null&&(A.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];A.data.attributes[o]=c.toJSON(A.data)}const n={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let l=0,h=c.length;l<h;l++){const d=c[l];u.push(d.toJSON(A.data))}u.length>0&&(n[o]=u,r=!0)}r&&(A.data.morphAttributes=n,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=A.name;const i=A.index;i!==null&&this.setIndex(i.clone(t));const n=A.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=A.morphAttributes;for(const c in r){const u=[],l=r[c];for(let h=0,d=l.length;h<d;h++)u.push(l[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let c=0,u=s.length;c<u;c++){const l=s[c];this.addGroup(l.start,l.count,l.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new GA,tr=new Ur,Sl=new Qt,es=new E,ts=new E,is=new E,Ml=new E,ua=new E,da=new Z,fa=new Z,pa=new Z,_l=new E,ma=new E;class oi extends ue{constructor(A=new VA,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=t,this.updateMorphTargets()}copy(A,t){return super.copy(A,t),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,A);const a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=a[o],l=r[o];u!==0&&(Ml.fromBufferAttribute(l,A),s?ua.addScaledVector(Ml,u):ua.addScaledVector(Ml.sub(t),u))}t.add(ua)}return this.isSkinnedMesh&&this.boneTransform(A,t),t}raycast(A,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),A.ray.intersectsSphere(Sl)===!1)||(rd.copy(r).invert(),tr.copy(A.ray).applyMatrix4(rd),i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,o=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,l=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(n))for(let d=0,f=l.length;d<f;d++){const m=l[d],p=n[m.materialIndex],g=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=g,y=v;x<y;x+=3){const M=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);s=ga(this,p,A,tr,c,u,M,w,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const d=Math.max(0,h.start),f=Math.min(a.count,h.start+h.count);for(let m=d,p=f;m<p;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=ga(this,n,A,tr,c,u,g,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(n))for(let d=0,f=l.length;d<f;d++){const m=l[d],p=n[m.materialIndex],g=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=g,y=v;x<y;x+=3){const M=x,w=x+1,_=x+2;s=ga(this,p,A,tr,c,u,M,w,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const d=Math.max(0,h.start),f=Math.min(o.count,h.start+h.count);for(let m=d,p=f;m<p;m+=3){const g=m,v=m+1,x=m+2;s=ga(this,n,A,tr,c,u,g,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ay(e,A,t,i,n,r,s,a){let o;if(A.side===Ot?o=i.intersectTriangle(s,r,n,!0,a):o=i.intersectTriangle(n,r,s,A.side===Pn,a),o===null)return null;ma.copy(a),ma.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:e}}function ga(e,A,t,i,n,r,s,a,o){e.getVertexPosition(s,es),e.getVertexPosition(a,ts),e.getVertexPosition(o,is);const c=ay(e,A,t,i,es,ts,is,_l);if(c){n&&(da.fromBufferAttribute(n,s),fa.fromBufferAttribute(n,a),pa.fromBufferAttribute(n,o),c.uv=Lt.getUV(_l,es,ts,is,da,fa,pa,new Z)),r&&(da.fromBufferAttribute(r,s),fa.fromBufferAttribute(r,a),pa.fromBufferAttribute(r,o),c.uv2=Lt.getUV(_l,es,ts,is,da,fa,pa,new Z));const u={a:s,b:a,c:o,normal:new E,materialIndex:0};Lt.getNormal(es,ts,is,u.normal),c.face=u}return c}class Zt extends VA{constructor(A=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const a=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const o=[],c=[],u=[],l=[];let h=0,d=0;f("z","y","x",-1,-1,i,t,A,s,r,0),f("z","y","x",1,-1,i,t,-A,s,r,1),f("x","z","y",1,1,A,i,t,n,s,2),f("x","z","y",1,-1,A,i,-t,n,s,3),f("x","y","z",1,-1,A,t,i,n,r,4),f("x","y","z",-1,-1,A,t,-i,n,r,5),this.setIndex(o),this.setAttribute("position",new DA(c,3)),this.setAttribute("normal",new DA(u,3)),this.setAttribute("uv",new DA(l,2));function f(m,p,g,v,x,y,M,w,_,b,T){const S=y/_,D=M/b,L=y/2,R=M/2,I=w/2,W=_+1,eA=b+1;let F=0,V=0;const J=new E;for(let U=0;U<eA;U++){const B=U*D-R;for(let N=0;N<W;N++){const k=N*S-L;J[m]=k*v,J[p]=B*x,J[g]=I,c.push(J.x,J.y,J.z),J[m]=0,J[p]=0,J[g]=w>0?1:-1,u.push(J.x,J.y,J.z),l.push(N/_),l.push(1-U/b),F+=1}}for(let U=0;U<b;U++)for(let B=0;B<_;B++){const N=h+B+W*U,k=h+B+W*(U+1),H=h+(B+1)+W*(U+1),q=h+(B+1)+W*U;o.push(N,k,q),o.push(k,H,q),V+=6}a.addGroup(d,V,T),d+=V,h+=F}}static fromJSON(A){return new Zt(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function Pr(e){const A={};for(const t in e){A[t]={};for(const i in e[t]){const n=e[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?A[t][i]=n.clone():Array.isArray(n)?A[t][i]=n.slice():A[t][i]=n}}return A}function it(e){const A={};for(let t=0;t<e.length;t++){const i=Pr(e[t]);for(const n in i)A[n]=i[n]}return A}function oy(e){const A=[];for(let t=0;t<e.length;t++)A.push(e[t].clone());return A}function um(e){return e.getRenderTarget()===null&&e.outputEncoding===fe?ri:Rs}const Gr={clone:Pr,merge:it};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends kr{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Pr(A.uniforms),this.uniformsGroups=oy(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const t=super.toJSON(A);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class js extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new GA,this.projectionMatrix=new GA,this.projectionMatrixInverse=new GA}copy(A,t){return super.copy(A,t),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return A.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,t){super.updateWorldMatrix(A,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ot extends js{constructor(A=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,t){return super.copy(A,t),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const t=.5*this.getFilmHeight()/A;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,t,i,n,r,s){this.aspect=A/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let t=A*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/c,n*=s.width/o,i*=s.height/c}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const t=super.toJSON(A);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,nr=1;class hy extends ue{constructor(A,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ot(ir,nr,A,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new ot(ir,nr,A,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new ot(ir,nr,A,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new ot(ir,nr,A,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new ot(ir,nr,A,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const c=new ot(ir,nr,A,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(A,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,s,a,o,c]=this.children,u=A.getRenderTarget(),l=A.toneMapping,h=A.xr.enabled;A.toneMapping=Li,A.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,A.setRenderTarget(i,0),A.render(t,n),A.setRenderTarget(i,1),A.render(t,r),A.setRenderTarget(i,2),A.render(t,s),A.setRenderTarget(i,3),A.render(t,a),A.setRenderTarget(i,4),A.render(t,o),i.texture.generateMipmaps=d,A.setRenderTarget(i,5),A.render(t,c),A.setRenderTarget(u),A.toneMapping=l,A.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class dh extends Je{constructor(A,t,i,n,r,s,a,o,c,u){A=A!==void 0?A:[],t=t!==void 0?t:On,super(A,t,i,n,r,s,a,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class uy extends Nn{constructor(A=1,t={}){super(A,A,t),this.isWebGLCubeRenderTarget=!0;const i={width:A,height:A,depth:1},n=[i,i,i,i,i,i];this.texture=new dh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:at}fromEquirectangularTexture(A,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Zt(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Yi});r.uniforms.tEquirect.value=t;const s=new oi(n,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=at),new hy(1,10,this).update(A,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,t,i,n){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(t,i,n);A.setRenderTarget(r)}}const Tl=new E,dy=new E,fy=new Xe;class ki{constructor(A=new E(1,0,0),t=0){this.isPlane=!0,this.normal=A,this.constant=t}set(A,t){return this.normal.copy(A),this.constant=t,this}setComponents(A,t,i,n){return this.normal.set(A,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(A,t){return this.normal.copy(A),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(A,t,i){const n=Tl.subVectors(i,t).cross(dy.subVectors(A,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,t){const i=A.delta(Tl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(A.start)===0?t.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(A.start)}intersectsLine(A){const t=this.distanceToPoint(A.start),i=this.distanceToPoint(A.end);return t<0&&i>0||i<0&&t>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,t){const i=t||fy.getNormalMatrix(A),n=this.coplanarPoint(Tl).applyMatrix4(A),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Qt,va=new E;class fh{constructor(A=new ki,t=new ki,i=new ki,n=new ki,r=new ki,s=new ki){this.planes=[A,t,i,n,r,s]}set(A,t,i,n,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(A){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(A.planes[i]);return this}setFromProjectionMatrix(A){const t=this.planes,i=A.elements,n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],c=i[5],u=i[6],l=i[7],h=i[8],d=i[9],f=i[10],m=i[11],p=i[12],g=i[13],v=i[14],x=i[15];return t[0].setComponents(a-n,l-o,m-h,x-p).normalize(),t[1].setComponents(a+n,l+o,m+h,x+p).normalize(),t[2].setComponents(a+r,l+c,m+d,x+g).normalize(),t[3].setComponents(a-r,l-c,m-d,x-g).normalize(),t[4].setComponents(a-s,l-u,m-f,x-v).normalize(),t[5].setComponents(a+s,l+u,m+f,x+v).normalize(),this}intersectsObject(A){const t=A.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(rr)}intersectsSprite(A){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(A.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(A){const t=this.planes,i=A.center,n=-A.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(A){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(va.x=n.normal.x>0?A.max.x:A.min.x,va.y=n.normal.y>0?A.max.y:A.min.y,va.z=n.normal.z>0?A.max.z:A.min.z,n.distanceToPoint(va)<0)return!1}return!0}containsPoint(A){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dm(){let e=null,A=!1,t=null,i=null;function n(r,s){t(r,s),i=e.requestAnimationFrame(n)}return{start:function(){A!==!0&&t!==null&&(i=e.requestAnimationFrame(n),A=!0)},stop:function(){e.cancelAnimationFrame(i),A=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function py(e,A){const t=A.isWebGL2,i=new WeakMap;function n(c,u){const l=c.array,h=c.usage,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,l,h),c.onUploadCallback();let f;if(l instanceof Float32Array)f=5126;else if(l instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)f=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=5123;else if(l instanceof Int16Array)f=5122;else if(l instanceof Uint32Array)f=5125;else if(l instanceof Int32Array)f=5124;else if(l instanceof Int8Array)f=5120;else if(l instanceof Uint8Array)f=5121;else if(l instanceof Uint8ClampedArray)f=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,l){const h=u.array,d=u.updateRange;e.bindBuffer(l,c),d.count===-1?e.bufferSubData(l,0,h):(t?e.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):e.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(e.deleteBuffer(u.buffer),i.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const l=i.get(c);l===void 0?i.set(c,n(c,u)):l.version<c.version&&(r(l.buffer,c,u),l.version=c.version)}return{get:s,remove:a,update:o}}class qs extends VA{constructor(A=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:t,widthSegments:i,heightSegments:n};const r=A/2,s=t/2,a=Math.floor(i),o=Math.floor(n),c=a+1,u=o+1,l=A/a,h=t/o,d=[],f=[],m=[],p=[];for(let g=0;g<u;g++){const v=g*h-s;for(let x=0;x<c;x++){const y=x*l-r;f.push(y,-v,0),m.push(0,0,1),p.push(x/a),p.push(1-g/o)}}for(let g=0;g<o;g++)for(let v=0;v<a;v++){const x=v+c*g,y=v+c*(g+1),M=v+1+c*(g+1),w=v+1+c*g;d.push(x,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new DA(f,3)),this.setAttribute("normal",new DA(m,3)),this.setAttribute("uv",new DA(p,2))}static fromJSON(A){return new qs(A.width,A.height,A.widthSegments,A.heightSegments)}}var my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy="vec3 transformed = vec3( position );",Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
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
#endif`,_y=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ty=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ny=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,rx=`#if defined( USE_ENVMAP )
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
#endif`,hx=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
}`,ux=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
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
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
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
vec3 geometryNormal = normal;`,Dx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Qx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
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
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
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
#endif`,Zx=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
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
		if ( isinf( attenuationDistance ) ) {
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
#endif`,a1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,o1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,l1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,c1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,h1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,u1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x1=`#include <common>
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
}`,b1=`#if DEPTH_PACKING == 3200
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
}`,w1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,L1=`uniform vec3 diffuse;
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
}`,D1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define MATCAP
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
}`,R1=`#define MATCAP
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
}`,I1=`#define NORMAL
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
}`,N1=`#define NORMAL
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
}`,B1=`#define PHONG
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
}`,z1=`#define PHONG
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
}`,F1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,G1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,H1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,q1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,XA={alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:yy,aomap_fragment:xy,aomap_pars_fragment:by,begin_vertex:wy,beginnormal_vertex:Sy,bsdfs:My,iridescence_fragment:_y,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ey,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Py,color_pars_fragment:Oy,color_pars_vertex:Ry,color_vertex:Iy,common:Ny,cube_uv_reflection_fragment:By,defaultnormal_vertex:zy,displacementmap_pars_vertex:Fy,displacementmap_vertex:Uy,emissivemap_fragment:ky,emissivemap_pars_fragment:Gy,encodings_fragment:Vy,encodings_pars_fragment:Hy,envmap_fragment:Wy,envmap_common_pars_fragment:jy,envmap_pars_fragment:qy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:rx,envmap_vertex:Yy,fog_vertex:Qy,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Ky,gradientmap_pars_fragment:$y,lightmap_fragment:Ax,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:ix,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:ax,lights_phong_fragment:ox,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:hx,lights_fragment_begin:ux,lights_fragment_maps:dx,lights_fragment_end:fx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:xx,map_particle_fragment:bx,map_particle_pars_fragment:wx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Mx,morphcolor_vertex:_x,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Cx,normal_fragment_begin:Lx,normal_fragment_maps:Dx,normal_pars_fragment:Px,normal_pars_vertex:Ox,normal_vertex:Rx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Fx,output_fragment:Ux,packing:kx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Hx,dithering_pars_fragment:Wx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Qx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Kx,skinning_vertex:$x,skinnormal_vertex:A1,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:i1,tonemapping_pars_fragment:n1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:a1,uv_pars_vertex:o1,uv_vertex:l1,uv2_pars_fragment:c1,uv2_pars_vertex:h1,uv2_vertex:u1,worldpos_vertex:d1,background_vert:f1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:v1,cube_frag:y1,depth_vert:x1,depth_frag:b1,distanceRGBA_vert:w1,distanceRGBA_frag:S1,equirect_vert:M1,equirect_frag:_1,linedashed_vert:T1,linedashed_frag:E1,meshbasic_vert:C1,meshbasic_frag:L1,meshlambert_vert:D1,meshlambert_frag:P1,meshmatcap_vert:O1,meshmatcap_frag:R1,meshnormal_vert:I1,meshnormal_frag:N1,meshphong_vert:B1,meshphong_frag:z1,meshphysical_vert:F1,meshphysical_frag:U1,meshtoon_vert:k1,meshtoon_frag:G1,points_vert:V1,points_frag:H1,shadow_vert:W1,shadow_frag:j1,sprite_vert:q1,sprite_frag:X1},yA={common:{diffuse:{value:new jA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xe},uv2Transform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new jA(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}}},Gt={basic:{uniforms:it([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.fog]),vertexShader:XA.meshbasic_vert,fragmentShader:XA.meshbasic_frag},lambert:{uniforms:it([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.fog,yA.lights,{emissive:{value:new jA(0)}}]),vertexShader:XA.meshlambert_vert,fragmentShader:XA.meshlambert_frag},phong:{uniforms:it([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.fog,yA.lights,{emissive:{value:new jA(0)},specular:{value:new jA(1118481)},shininess:{value:30}}]),vertexShader:XA.meshphong_vert,fragmentShader:XA.meshphong_frag},standard:{uniforms:it([yA.common,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.roughnessmap,yA.metalnessmap,yA.fog,yA.lights,{emissive:{value:new jA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag},toon:{uniforms:it([yA.common,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.gradientmap,yA.fog,yA.lights,{emissive:{value:new jA(0)}}]),vertexShader:XA.meshtoon_vert,fragmentShader:XA.meshtoon_frag},matcap:{uniforms:it([yA.common,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.fog,{matcap:{value:null}}]),vertexShader:XA.meshmatcap_vert,fragmentShader:XA.meshmatcap_frag},points:{uniforms:it([yA.points,yA.fog]),vertexShader:XA.points_vert,fragmentShader:XA.points_frag},dashed:{uniforms:it([yA.common,yA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:XA.linedashed_vert,fragmentShader:XA.linedashed_frag},depth:{uniforms:it([yA.common,yA.displacementmap]),vertexShader:XA.depth_vert,fragmentShader:XA.depth_frag},normal:{uniforms:it([yA.common,yA.bumpmap,yA.normalmap,yA.displacementmap,{opacity:{value:1}}]),vertexShader:XA.meshnormal_vert,fragmentShader:XA.meshnormal_frag},sprite:{uniforms:it([yA.sprite,yA.fog]),vertexShader:XA.sprite_vert,fragmentShader:XA.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:XA.background_vert,fragmentShader:XA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:XA.backgroundCube_vert,fragmentShader:XA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:XA.cube_vert,fragmentShader:XA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:XA.equirect_vert,fragmentShader:XA.equirect_frag},distanceRGBA:{uniforms:it([yA.common,yA.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:XA.distanceRGBA_vert,fragmentShader:XA.distanceRGBA_frag},shadow:{uniforms:it([yA.lights,yA.fog,{color:{value:new jA(0)},opacity:{value:1}}]),vertexShader:XA.shadow_vert,fragmentShader:XA.shadow_frag}};Gt.physical={uniforms:it([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new jA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new jA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new jA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag};const ya={r:0,b:0,g:0};function Y1(e,A,t,i,n,r,s){const a=new jA(0);let o=r===!0?0:1,c,u,l=null,h=0,d=null;function f(p,g){let v=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:A).get(x));const y=e.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,o):x&&x.isColor&&(m(x,1),v=!0),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ws)?(u===void 0&&(u=new oi(new Zt(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Pr(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,_,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==fe,(l!==x||h!==x.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,l=x,h=x.version,d=e.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new oi(new qs(2,2),new Ji({name:"BackgroundMaterial",uniforms:Pr(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||h!==x.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,l=x,h=x.version,d=e.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,g){p.getRGB(ya,um(e)),i.buffers.color.setClear(ya.r,ya.g,ya.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),o=g,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,m(a,o)},render:f}}function Q1(e,A,t,i){const n=e.getParameter(34921),r=i.isWebGL2?null:A.get("OES_vertex_array_object"),s=i.isWebGL2||r!==null,a={},o=p(null);let c=o,u=!1;function l(I,W,eA,F,V){let J=!1;if(s){const U=m(F,eA,W);c!==U&&(c=U,d(c.object)),J=g(I,F,eA,V),J&&v(I,F,eA,V)}else{const U=W.wireframe===!0;(c.geometry!==F.id||c.program!==eA.id||c.wireframe!==U)&&(c.geometry=F.id,c.program=eA.id,c.wireframe=U,J=!0)}V!==null&&t.update(V,34963),(J||u)&&(u=!1,b(I,W,eA,F),V!==null&&e.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?e.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?e.bindVertexArray(I):r.bindVertexArrayOES(I)}function f(I){return i.isWebGL2?e.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function m(I,W,eA){const F=eA.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let J=V[W.id];J===void 0&&(J={},V[W.id]=J);let U=J[F];return U===void 0&&(U=p(h()),J[F]=U),U}function p(I){const W=[],eA=[],F=[];for(let V=0;V<n;V++)W[V]=0,eA[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:eA,attributeDivisors:F,object:I,attributes:{},index:null}}function g(I,W,eA,F){const V=c.attributes,J=W.attributes;let U=0;const B=eA.getAttributes();for(const N in B)if(B[N].location>=0){const H=V[N];let q=J[N];if(q===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),H===void 0||H.attribute!==q||q&&H.data!==q.data)return!0;U++}return c.attributesNum!==U||c.index!==F}function v(I,W,eA,F){const V={},J=W.attributes;let U=0;const B=eA.getAttributes();for(const N in B)if(B[N].location>=0){let H=J[N];H===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(H=I.instanceColor));const q={};q.attribute=H,H&&H.data&&(q.data=H.data),V[N]=q,U++}c.attributes=V,c.attributesNum=U,c.index=F}function x(){const I=c.newAttributes;for(let W=0,eA=I.length;W<eA;W++)I[W]=0}function y(I){M(I,0)}function M(I,W){const eA=c.newAttributes,F=c.enabledAttributes,V=c.attributeDivisors;eA[I]=1,F[I]===0&&(e.enableVertexAttribArray(I),F[I]=1),V[I]!==W&&((i.isWebGL2?e:A.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),V[I]=W)}function w(){const I=c.newAttributes,W=c.enabledAttributes;for(let eA=0,F=W.length;eA<F;eA++)W[eA]!==I[eA]&&(e.disableVertexAttribArray(eA),W[eA]=0)}function _(I,W,eA,F,V,J){i.isWebGL2===!0&&(eA===5124||eA===5125)?e.vertexAttribIPointer(I,W,eA,V,J):e.vertexAttribPointer(I,W,eA,F,V,J)}function b(I,W,eA,F){if(i.isWebGL2===!1&&(I.isInstancedMesh||F.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;x();const V=F.attributes,J=eA.getAttributes(),U=W.defaultAttributeValues;for(const B in J){const N=J[B];if(N.location>=0){let k=V[B];if(k===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const H=k.normalized,q=k.itemSize,G=t.get(k);if(G===void 0)continue;const tA=G.buffer,X=G.type,AA=G.bytesPerElement;if(k.isInterleavedBufferAttribute){const K=k.data,pA=K.stride,uA=k.offset;if(K.isInstancedInterleavedBuffer){for(let cA=0;cA<N.locationSize;cA++)M(N.location+cA,K.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let cA=0;cA<N.locationSize;cA++)y(N.location+cA);e.bindBuffer(34962,tA);for(let cA=0;cA<N.locationSize;cA++)_(N.location+cA,q/N.locationSize,X,H,pA*AA,(uA+q/N.locationSize*cA)*AA)}else{if(k.isInstancedBufferAttribute){for(let K=0;K<N.locationSize;K++)M(N.location+K,k.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let K=0;K<N.locationSize;K++)y(N.location+K);e.bindBuffer(34962,tA);for(let K=0;K<N.locationSize;K++)_(N.location+K,q/N.locationSize,X,H,q*AA,q/N.locationSize*K*AA)}}else if(U!==void 0){const H=U[B];if(H!==void 0)switch(H.length){case 2:e.vertexAttrib2fv(N.location,H);break;case 3:e.vertexAttrib3fv(N.location,H);break;case 4:e.vertexAttrib4fv(N.location,H);break;default:e.vertexAttrib1fv(N.location,H)}}}}w()}function T(){L();for(const I in a){const W=a[I];for(const eA in W){const F=W[eA];for(const V in F)f(F[V].object),delete F[V];delete W[eA]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const eA in W){const F=W[eA];for(const V in F)f(F[V].object),delete F[V];delete W[eA]}delete a[I.id]}function D(I){for(const W in a){const eA=a[W];if(eA[I.id]===void 0)continue;const F=eA[I.id];for(const V in F)f(F[V].object),delete F[V];delete eA[I.id]}}function L(){R(),u=!0,c!==o&&(c=o,d(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:l,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function Z1(e,A,t,i){const n=i.isWebGL2;let r;function s(c){r=c}function a(c,u){e.drawArrays(r,c,u),t.update(u,r,1)}function o(c,u,l){if(l===0)return;let h,d;if(n)h=e,d="drawArraysInstanced";else if(h=A.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,u,l),t.update(u,r,l)}this.setMode=s,this.render=a,this.renderInstances=o}function J1(e,A,t){let i;function n(){if(i!==void 0)return i;if(A.has("EXT_texture_filter_anisotropic")===!0){const _=A.get("EXT_texture_filter_anisotropic");i=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){if(_==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const c=s||A.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,l=e.getParameter(34930),h=e.getParameter(35660),d=e.getParameter(3379),f=e.getParameter(34076),m=e.getParameter(34921),p=e.getParameter(36347),g=e.getParameter(36348),v=e.getParameter(36349),x=h>0,y=s||A.has("OES_texture_float"),M=x&&y,w=s?e.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:w}}function K1(e){const A=this;let t=null,i=0,n=!1,r=!1;const s=new ki,a=new Xe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h,d){const f=l.length!==0||h||i!==0||n;return n=h,t=u(l,d,0),i=l.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(l,h,d){const f=l.clippingPlanes,m=l.clipIntersection,p=l.clipShadows,g=e.get(l);if(!n||f===null||f.length===0||r&&!p)r?u(null):c();else{const v=r?0:i,x=v*4;let y=g.clippingState||null;o.value=y,y=u(f,h,x,d);for(let M=0;M!==x;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),A.numPlanes=i,A.numIntersection=0}function u(l,h,d,f){const m=l!==null?l.length:0;let p=null;if(m!==0){if(p=o.value,f!==!0||p===null){const g=d+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=d;x!==m;++x,y+=4)s.copy(l[x]).applyMatrix4(v,a),s.normal.toArray(p,y),p[y+3]=s.constant}o.value=p,o.needsUpdate=!0}return A.numPlanes=m,A.numIntersection=0,p}}function $1(e){let A=new WeakMap;function t(s,a){return a===fc?s.mapping=On:a===pc&&(s.mapping=Rn),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===fc||a===pc)if(A.has(s)){const o=A.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const c=new uy(o.height/2);return c.fromEquirectangularTexture(e,s),A.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const a=s.target;a.removeEventListener("dispose",n);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:i,dispose:r}}class ph extends js{constructor(A=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,t){return super.copy(A,t),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-A,s=i+A,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,o=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const t=super.toJSON(A);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,sd=[.125,.215,.35,.446,.526,.582],gn=20,El=new ph,ad=new jA;let Cl=null;const dn=(1+Math.sqrt(5))/2,sr=1/dn,od=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,dn,sr),new E(0,dn,-sr),new E(sr,0,dn),new E(-sr,0,dn),new E(dn,sr,0),new E(-dn,sr,0)];class ld{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,t=0,i=.1,n=100){Cl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,t=null){return this._fromTexture(A,t)}fromCubemap(A,t=null){return this._fromTexture(A,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Cl),A.scissorTest=!1,xa(A,0,0,A.width,A.height)}_fromTexture(A,t){A.mapping===On||A.mapping===Rn?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Cl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(A,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:at,minFilter:at,generateMipmaps:!1,type:Os,format:Ht,encoding:di,depthBuffer:!1},n=cd(A,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(A,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(r)),this._blurMaterial=eb(r,A,t)}return n}_compileMaterial(A){const t=new oi(this._lodPlanes[0],A);this._renderer.compile(t,El)}_sceneToCubeUV(A,t,i,n){const a=new ot(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,h=u.toneMapping;u.getClearColor(ad),u.toneMapping=Li,u.autoClear=!1;const d=new Po({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),f=new oi(new Zt,d);let m=!1;const p=A.background;p?p.isColor&&(d.color.copy(p),A.background=null,m=!0):(d.color.copy(ad),m=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,o[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,o[g]),a.lookAt(0,c[g],0)):(a.up.set(0,o[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;xa(n,v*x,g>2?x:0,x,x),u.setRenderTarget(n),m&&u.render(f,a),u.render(A,a)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=h,u.autoClear=l,A.background=p}_textureToCubeUV(A,t){const i=this._renderer,n=A.mapping===On||A.mapping===Rn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const r=n?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;xa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,El)}_applyPMREM(A){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=od[(n-1)%od.length];this._blur(A,n-1,n,r,s)}t.autoClear=i}_blur(A,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,t,i,n,"latitudinal",r),this._halfBlur(s,A,i,i,n,"longitudinal",r)}_halfBlur(A,t,i,n,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new oi(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gn-1),m=r/f,p=isFinite(r)?1+Math.floor(u*m):gn;p>gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gn}`);const g=[];let v=0;for(let _=0;_<gn;++_){const b=_/m,T=Math.exp(-b*b/2);g.push(T),_===0?v+=T:_<p&&(v+=2*T)}for(let _=0;_<g.length;_++)g[_]=g[_]/v;h.envMap.value=A.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=f,h.mipInt.value=x-i;const y=this._sizeLods[n],M=3*y*(n>x-fr?n-x+fr:0),w=4*(this._cubeSize-y);xa(t,M,w,3*y,2*y),o.setRenderTarget(t),o.render(l,El)}}function Ab(e){const A=[],t=[],i=[];let n=e;const r=e-fr+1+sd.length;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);let o=1/a;s>e-fr?o=sd[s-e+fr-1]:s===0&&(o=0),i.push(o);const c=1/(a-2),u=-c,l=1+c,h=[u,u,l,u,l,l,u,u,l,l,u,l],d=6,f=6,m=3,p=2,g=1,v=new Float32Array(m*f*d),x=new Float32Array(p*f*d),y=new Float32Array(g*f*d);for(let w=0;w<d;w++){const _=w%3*2/3-1,b=w>2?0:-1,T=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];v.set(T,m*f*w),x.set(h,p*f*w);const S=[w,w,w,w,w,w];y.set(S,g*f*w)}const M=new VA;M.setAttribute("position",new ZA(v,m)),M.setAttribute("uv",new ZA(x,p)),M.setAttribute("faceIndex",new ZA(y,g)),A.push(M),n>fr&&n--}return{lodPlanes:A,sizeLods:t,sigmas:i}}function cd(e,A,t){const i=new Nn(e,A,t);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(e,A,t,i,n){e.viewport.set(A,t,i,n),e.scissor.set(A,t,i,n)}function eb(e,A,t){const i=new Float32Array(gn),n=new E(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function hd(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ud(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function tb(e){let A=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const o=a.mapping,c=o===fc||o===pc,u=o===On||o===Rn;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let l=A.get(a);return t===null&&(t=new ld(e)),l=c?t.fromEquirectangular(a,l):t.fromCubemap(a,l),A.set(a,l),l.texture}else{if(A.has(a))return A.get(a).texture;{const l=a.image;if(c&&l&&l.height>0||u&&l&&n(l)){t===null&&(t=new ld(e));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return A.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function n(a){let o=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&o++;return o===c}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=A.get(o);c!==void 0&&(A.delete(o),c.dispose())}function s(){A=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function ib(e){const A={};function t(i){if(A[i]!==void 0)return A[i];let n;switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return A[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function nb(e,A,t,i){const n={},r=new WeakMap;function s(l){const h=l.target;h.index!==null&&A.remove(h.index);for(const f in h.attributes)A.remove(h.attributes[f]);h.removeEventListener("dispose",s),delete n[h.id];const d=r.get(h);d&&(A.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(l,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function o(l){const h=l.attributes;for(const f in h)A.update(h[f],34962);const d=l.morphAttributes;for(const f in d){const m=d[f];for(let p=0,g=m.length;p<g;p++)A.update(m[p],34962)}}function c(l){const h=[],d=l.index,f=l.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],w=v[x+1],_=v[x+2];h.push(M,w,w,_,_,M)}}else{const v=f.array;m=f.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,w=x+1,_=x+2;h.push(M,w,w,_,_,M)}}const p=new(sm(h)?_s:hm)(h,1);p.version=m;const g=r.get(l);g&&A.remove(g),r.set(l,p)}function u(l){const h=r.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&c(l)}else c(l);return r.get(l)}return{get:a,update:o,getWireframeAttribute:u}}function rb(e,A,t,i){const n=i.isWebGL2;let r;function s(h){r=h}let a,o;function c(h){a=h.type,o=h.bytesPerElement}function u(h,d){e.drawElements(r,d,a,h*o),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,p;if(n)m=e,p="drawElementsInstanced";else if(m=A.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,h*o,f),t.update(d,r,f)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=l}function sb(e){const A={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:A,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ab(e,A){return e[0]-A[0]}function ob(e,A){return Math.abs(A[1])-Math.abs(e[1])}function lb(e,A,t){const i={},n=new Float32Array(8),r=new WeakMap,s=new $A,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function o(c,u,l,h){const d=c.morphTargetInfluences;if(A.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let p=r.get(u);if(p===void 0||p.count!==m){let W=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",W)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),y===!0&&(T=2),M===!0&&(T=3);let S=u.attributes.position.count*T,D=1;S>A.maxTextureSize&&(D=Math.ceil(S/A.maxTextureSize),S=A.maxTextureSize);const L=new Float32Array(S*D*4*m),R=new cm(L,S,D,m);R.type=Sn,R.needsUpdate=!0;const I=T*4;for(let eA=0;eA<m;eA++){const F=w[eA],V=_[eA],J=b[eA],U=S*D*4*eA;for(let B=0;B<F.count;B++){const N=B*I;x===!0&&(s.fromBufferAttribute(F,B),L[U+N+0]=s.x,L[U+N+1]=s.y,L[U+N+2]=s.z,L[U+N+3]=0),y===!0&&(s.fromBufferAttribute(V,B),L[U+N+4]=s.x,L[U+N+5]=s.y,L[U+N+6]=s.z,L[U+N+7]=0),M===!0&&(s.fromBufferAttribute(J,B),L[U+N+8]=s.x,L[U+N+9]=s.y,L[U+N+10]=s.z,L[U+N+11]=J.itemSize===4?s.w:1)}}p={count:m,texture:R,size:new Z(S,D)},r.set(u,p),u.addEventListener("dispose",W)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const v=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(e,"morphTargetBaseInfluence",v),h.getUniforms().setValue(e,"morphTargetInfluences",d),h.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}else{const f=d===void 0?0:d.length;let m=i[u.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<f;y++){const M=m[y];M[0]=y,M[1]=d[y]}m.sort(ob);for(let y=0;y<8;y++)y<f&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ab);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const M=a[y],w=M[0],_=M[1];w!==Number.MAX_SAFE_INTEGER&&_?(p&&u.getAttribute("morphTarget"+y)!==p[w]&&u.setAttribute("morphTarget"+y,p[w]),g&&u.getAttribute("morphNormal"+y)!==g[w]&&u.setAttribute("morphNormal"+y,g[w]),n[y]=_,v+=_):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(e,"morphTargetBaseInfluence",x),h.getUniforms().setValue(e,"morphTargetInfluences",n)}}return{update:o}}function cb(e,A,t,i){let n=new WeakMap;function r(o){const c=i.render.frame,u=o.geometry,l=A.get(o,u);return n.get(l)!==c&&(A.update(l),n.set(l,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),t.update(o.instanceMatrix,34962),o.instanceColor!==null&&t.update(o.instanceColor,34962)),l}function s(){n=new WeakMap}function a(o){const c=o.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const fm=new Je,pm=new cm,mm=new Zv,gm=new dh,dd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Vr(e,A,t){const i=e[0];if(i<=0||i>0)return e;const n=A*t;let r=dd[n];if(r===void 0&&(r=new Float32Array(n),dd[n]=r),A!==0){i.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=t,e[s].toArray(r,a)}return r}function Ue(e,A){if(e.length!==A.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==A[t])return!1;return!0}function ke(e,A){for(let t=0,i=A.length;t<i;t++)e[t]=A[t]}function Oo(e,A){let t=fd[A];t===void 0&&(t=new Int32Array(A),fd[A]=t);for(let i=0;i!==A;++i)t[i]=e.allocateTextureUnit();return t}function hb(e,A){const t=this.cache;t[0]!==A&&(e.uniform1f(this.addr,A),t[0]=A)}function ub(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(e.uniform2f(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(Ue(t,A))return;e.uniform2fv(this.addr,A),ke(t,A)}}function db(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(e.uniform3f(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else if(A.r!==void 0)(t[0]!==A.r||t[1]!==A.g||t[2]!==A.b)&&(e.uniform3f(this.addr,A.r,A.g,A.b),t[0]=A.r,t[1]=A.g,t[2]=A.b);else{if(Ue(t,A))return;e.uniform3fv(this.addr,A),ke(t,A)}}function fb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(e.uniform4f(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(Ue(t,A))return;e.uniform4fv(this.addr,A),ke(t,A)}}function pb(e,A){const t=this.cache,i=A.elements;if(i===void 0){if(Ue(t,A))return;e.uniformMatrix2fv(this.addr,!1,A),ke(t,A)}else{if(Ue(t,i))return;gd.set(i),e.uniformMatrix2fv(this.addr,!1,gd),ke(t,i)}}function mb(e,A){const t=this.cache,i=A.elements;if(i===void 0){if(Ue(t,A))return;e.uniformMatrix3fv(this.addr,!1,A),ke(t,A)}else{if(Ue(t,i))return;md.set(i),e.uniformMatrix3fv(this.addr,!1,md),ke(t,i)}}function gb(e,A){const t=this.cache,i=A.elements;if(i===void 0){if(Ue(t,A))return;e.uniformMatrix4fv(this.addr,!1,A),ke(t,A)}else{if(Ue(t,i))return;pd.set(i),e.uniformMatrix4fv(this.addr,!1,pd),ke(t,i)}}function vb(e,A){const t=this.cache;t[0]!==A&&(e.uniform1i(this.addr,A),t[0]=A)}function yb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(e.uniform2i(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(Ue(t,A))return;e.uniform2iv(this.addr,A),ke(t,A)}}function xb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(e.uniform3i(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else{if(Ue(t,A))return;e.uniform3iv(this.addr,A),ke(t,A)}}function bb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(e.uniform4i(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(Ue(t,A))return;e.uniform4iv(this.addr,A),ke(t,A)}}function wb(e,A){const t=this.cache;t[0]!==A&&(e.uniform1ui(this.addr,A),t[0]=A)}function Sb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(e.uniform2ui(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(Ue(t,A))return;e.uniform2uiv(this.addr,A),ke(t,A)}}function Mb(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(e.uniform3ui(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else{if(Ue(t,A))return;e.uniform3uiv(this.addr,A),ke(t,A)}}function _b(e,A){const t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(e.uniform4ui(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(Ue(t,A))return;e.uniform4uiv(this.addr,A),ke(t,A)}}function Tb(e,A,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(A||fm,n)}function Eb(e,A,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(A||mm,n)}function Cb(e,A,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(A||gm,n)}function Lb(e,A,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(A||pm,n)}function Db(e){switch(e){case 5126:return hb;case 35664:return ub;case 35665:return db;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Sb;case 36295:return Mb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Pb(e,A){e.uniform1fv(this.addr,A)}function Ob(e,A){const t=Vr(A,this.size,2);e.uniform2fv(this.addr,t)}function Rb(e,A){const t=Vr(A,this.size,3);e.uniform3fv(this.addr,t)}function Ib(e,A){const t=Vr(A,this.size,4);e.uniform4fv(this.addr,t)}function Nb(e,A){const t=Vr(A,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Bb(e,A){const t=Vr(A,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function zb(e,A){const t=Vr(A,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Fb(e,A){e.uniform1iv(this.addr,A)}function Ub(e,A){e.uniform2iv(this.addr,A)}function kb(e,A){e.uniform3iv(this.addr,A)}function Gb(e,A){e.uniform4iv(this.addr,A)}function Vb(e,A){e.uniform1uiv(this.addr,A)}function Hb(e,A){e.uniform2uiv(this.addr,A)}function Wb(e,A){e.uniform3uiv(this.addr,A)}function jb(e,A){e.uniform4uiv(this.addr,A)}function qb(e,A,t){const i=this.cache,n=A.length,r=Oo(t,n);Ue(i,r)||(e.uniform1iv(this.addr,r),ke(i,r));for(let s=0;s!==n;++s)t.setTexture2D(A[s]||fm,r[s])}function Xb(e,A,t){const i=this.cache,n=A.length,r=Oo(t,n);Ue(i,r)||(e.uniform1iv(this.addr,r),ke(i,r));for(let s=0;s!==n;++s)t.setTexture3D(A[s]||mm,r[s])}function Yb(e,A,t){const i=this.cache,n=A.length,r=Oo(t,n);Ue(i,r)||(e.uniform1iv(this.addr,r),ke(i,r));for(let s=0;s!==n;++s)t.setTextureCube(A[s]||gm,r[s])}function Qb(e,A,t){const i=this.cache,n=A.length,r=Oo(t,n);Ue(i,r)||(e.uniform1iv(this.addr,r),ke(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(A[s]||pm,r[s])}function Zb(e){switch(e){case 5126:return Pb;case 35664:return Ob;case 35665:return Rb;case 35666:return Ib;case 35674:return Nb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ub;case 35668:case 35672:return kb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return Hb;case 36295:return Wb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Qb}}class Jb{constructor(A,t,i){this.id=A,this.addr=i,this.cache=[],this.setValue=Db(t.type)}}class Kb{constructor(A,t,i){this.id=A,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Zb(t.type)}}class $b{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(A,t[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function vd(e,A){e.seq.push(A),e.map[A.id]=A}function Aw(e,A,t){const i=e.name,n=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),s=Ll.lastIndex;let a=r[1];const o=r[2]==="]",c=r[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===n){vd(t,c===void 0?new Jb(a,e,A):new Kb(a,e,A));break}else{let l=t.map[a];l===void 0&&(l=new $b(a),vd(t,l)),t=l}}}class Xa{constructor(A,t){this.seq=[],this.map={};const i=A.getProgramParameter(t,35718);for(let n=0;n<i;++n){const r=A.getActiveUniform(t,n),s=A.getUniformLocation(t,r.name);Aw(r,s,this)}}setValue(A,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(A,i,n)}setOptional(A,t,i){const n=t[i];n!==void 0&&this.setValue(A,i,n)}static upload(A,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,n)}}static seqWithValue(A,t){const i=[];for(let n=0,r=A.length;n!==r;++n){const s=A[n];s.id in t&&i.push(s)}return i}}function yd(e,A,t){const i=e.createShader(A);return e.shaderSource(i,t),e.compileShader(i),i}let ew=0;function tw(e,A){const t=e.split(`
`),i=[],n=Math.max(A-6,0),r=Math.min(A+6,t.length);for(let s=n;s<r;s++){const a=s+1;i.push(`${a===A?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function iw(e){switch(e){case di:return["Linear","( value )"];case fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function xd(e,A,t){const i=e.getShaderParameter(A,35713),n=e.getShaderInfoLog(A).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+tw(e.getShaderSource(A),s)}else return n}function nw(e,A){const t=iw(A);return"vec4 "+e+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rw(e,A){let t;switch(A){case lv:t="Linear";break;case cv:t="Reinhard";break;case hv:t="OptimizedCineon";break;case uv:t="ACESFilmic";break;case dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sw(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function aw(e){const A=[];for(const t in e){const i=e[t];i!==!1&&A.push("#define "+t+" "+i)}return A.join(`
`)}function ow(e,A){const t={},i=e.getProgramParameter(A,35721);for(let n=0;n<i;n++){const r=e.getActiveAttrib(A,n),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:e.getAttribLocation(A,s),locationSize:a}}return t}function gs(e){return e!==""}function bd(e,A){const t=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function wd(e,A){return e.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(e){return e.replace(lw,cw)}function cw(e,A){const t=XA[A];if(t===void 0)throw new Error("Can not resolve #include <"+A+">");return bc(t)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(e){return e.replace(hw,uw)}function uw(e,A,t,i){let n="";for(let r=parseInt(A);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Md(e){let A="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?A+=`
#define HIGH_PRECISION`:e.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function dw(e){let A="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===$p?A="SHADOWMAP_TYPE_PCF":e.shadowMapType===G0?A="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ms&&(A="SHADOWMAP_TYPE_VSM"),A}function fw(e){let A="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case On:case Rn:A="ENVMAP_TYPE_CUBE";break;case Ws:A="ENVMAP_TYPE_CUBE_UV";break}return A}function pw(e){let A="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Rn:A="ENVMAP_MODE_REFRACTION";break}return A}function mw(e){let A="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case tm:A="ENVMAP_BLENDING_MULTIPLY";break;case av:A="ENVMAP_BLENDING_MIX";break;case ov:A="ENVMAP_BLENDING_ADD";break}return A}function gw(e){const A=e.envMapCubeUVHeight;if(A===null)return null;const t=Math.log2(A)-2,i=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vw(e,A,t,i){const n=e.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=dw(t),c=fw(t),u=pw(t),l=mw(t),h=gw(t),d=t.isWebGL2?"":sw(t),f=aw(r),m=n.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[f].filter(gs).join(`
`),p.length>0&&(p+=`
`),g=[d,f].filter(gs).join(`
`),g.length>0&&(g+=`
`)):(p=[Md(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),g=[d,Md(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?XA.tonemapping_pars_fragment:"",t.toneMapping!==Li?rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",XA.encodings_pars_fragment,nw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),s=bc(s),s=bd(s,t),s=wd(s,t),a=bc(a),a=bd(a,t),a=wd(a,t),s=Sd(s),a=Sd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+s,y=v+g+a,M=yd(n,35633,x),w=yd(n,35632,y);if(n.attachShader(m,M),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),e.debug.checkShaderErrors){const T=n.getProgramInfoLog(m).trim(),S=n.getShaderInfoLog(M).trim(),D=n.getShaderInfoLog(w).trim();let L=!0,R=!0;if(n.getProgramParameter(m,35714)===!1){L=!1;const I=xd(n,M,"vertex"),W=xd(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+I+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(S===""||D==="")&&(R=!1);R&&(this.diagnostics={runnable:L,programLog:T,vertexShader:{log:S,prefix:p},fragmentShader:{log:D,prefix:g}})}n.deleteShader(M),n.deleteShader(w);let _;this.getUniforms=function(){return _===void 0&&(_=new Xa(n,m)),_};let b;return this.getAttributes=function(){return b===void 0&&(b=ow(n,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ew++,this.cacheKey=A,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}let yw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const t=A.vertexShader,i=A.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(A);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const t=this.materialCache.get(A);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const t=this.materialCache;let i=t.get(A);return i===void 0&&(i=new Set,t.set(A,i)),i}_getShaderStage(A){const t=this.shaderCache;let i=t.get(A);return i===void 0&&(i=new bw(A),t.set(A,i)),i}}class bw{constructor(A){this.id=yw++,this.code=A,this.usedTimes=0}}function ww(e,A,t,i,n,r,s){const a=new uh,o=new xw,c=[],u=n.isWebGL2,l=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,T,S,D,L){const R=D.fog,I=L.geometry,W=b.isMeshStandardMaterial?D.environment:null,eA=(b.isMeshStandardMaterial?t:A).get(b.envMap||W),F=!!eA&&eA.mapping===Ws?eA.image.height:null,V=f[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,U=J!==void 0?J.length:0;let B=0;I.morphAttributes.position!==void 0&&(B=1),I.morphAttributes.normal!==void 0&&(B=2),I.morphAttributes.color!==void 0&&(B=3);let N,k,H,q;if(V){const pA=Gt[V];N=pA.vertexShader,k=pA.fragmentShader}else N=b.vertexShader,k=b.fragmentShader,o.update(b),H=o.getVertexShaderID(b),q=o.getFragmentShaderID(b);const G=e.getRenderTarget(),tA=b.alphaTest>0,X=b.clearcoat>0,AA=b.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:b.type,vertexShader:N,fragmentShader:k,defines:b.defines,customVertexShaderID:H,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?e.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:di,map:!!b.map,matcap:!!b.matcap,envMap:!!eA,envMapMode:eA&&eA.mapping,envMapCubeUVHeight:F,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Ov,tangentSpaceNormalMap:b.normalMapType===rm,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===fe,clearcoat:X,clearcoatMap:X&&!!b.clearcoatMap,clearcoatRoughnessMap:X&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!b.clearcoatNormalMap,iridescence:AA,iridescenceMap:AA&&!!b.iridescenceMap,iridescenceThicknessMap:AA&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===yr,alphaMap:!!b.alphaMap,alphaTest:tA,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:l,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&S.length>0,shadowMapType:e.shadowMap.type,toneMapping:b.toneMapped?e.toneMapping:Li,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ch,flipSided:b.side===Ot,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const S in b.defines)T.push(S),T.push(b.defines[S]);return b.isRawShaderMaterial===!1&&(g(T,b),v(T,b),T.push(e.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function g(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function x(b){const T=f[b.type];let S;if(T){const D=Gt[T];S=Gr.clone(D.uniforms)}else S=b.uniforms;return S}function y(b,T){let S;for(let D=0,L=c.length;D<L;D++){const R=c[D];if(R.cacheKey===T){S=R,++S.usedTimes;break}}return S===void 0&&(S=new vw(e,T,b,r),c.push(S)),S}function M(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function w(b){o.remove(b)}function _(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:_}}function Sw(){let e=new WeakMap;function A(r){let s=e.get(r);return s===void 0&&(s={},e.set(r,s)),s}function t(r){e.delete(r)}function i(r,s,a){e.get(r)[s]=a}function n(){e=new WeakMap}return{get:A,remove:t,update:i,dispose:n}}function Mw(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.material.id!==A.material.id?e.material.id-A.material.id:e.z!==A.z?e.z-A.z:e.id-A.id}function _d(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.z!==A.z?A.z-e.z:e.id-A.id}function Td(){const e=[];let A=0;const t=[],i=[],n=[];function r(){A=0,t.length=0,i.length=0,n.length=0}function s(l,h,d,f,m,p){let g=e[A];return g===void 0?(g={id:l.id,object:l,geometry:h,material:d,groupOrder:f,renderOrder:l.renderOrder,z:m,group:p},e[A]=g):(g.id=l.id,g.object=l,g.geometry=h,g.material=d,g.groupOrder=f,g.renderOrder=l.renderOrder,g.z=m,g.group=p),A++,g}function a(l,h,d,f,m,p){const g=s(l,h,d,f,m,p);d.transmission>0?i.push(g):d.transparent===!0?n.push(g):t.push(g)}function o(l,h,d,f,m,p){const g=s(l,h,d,f,m,p);d.transmission>0?i.unshift(g):d.transparent===!0?n.unshift(g):t.unshift(g)}function c(l,h){t.length>1&&t.sort(l||Mw),i.length>1&&i.sort(h||_d),n.length>1&&n.sort(h||_d)}function u(){for(let l=A,h=e.length;l<h;l++){const d=e[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:o,finish:u,sort:c}}function _w(){let e=new WeakMap;function A(i,n){const r=e.get(i);let s;return r===void 0?(s=new Td,e.set(i,[s])):n>=r.length?(s=new Td,r.push(s)):s=r[n],s}function t(){e=new WeakMap}return{get:A,dispose:t}}function Tw(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let t;switch(A.type){case"DirectionalLight":t={direction:new E,color:new jA};break;case"SpotLight":t={position:new E,direction:new E,color:new jA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new jA,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new jA,groundColor:new jA};break;case"RectAreaLight":t={color:new jA,position:new E,halfWidth:new E,halfHeight:new E};break}return e[A.id]=t,t}}}function Ew(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let t;switch(A.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[A.id]=t,t}}}let Cw=0;function Lw(e,A){return(A.castShadow?2:0)-(e.castShadow?2:0)+(A.map?1:0)-(e.map?1:0)}function Dw(e,A){const t=new Tw,i=Ew(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new E);const r=new E,s=new GA,a=new GA;function o(u,l){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,p=0,g=0,v=0,x=0,y=0,M=0,w=0,_=0,b=0;u.sort(Lw);const T=l!==!0?Math.PI:1;for(let D=0,L=u.length;D<L;D++){const R=u[D],I=R.color,W=R.intensity,eA=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*W*T,d+=I.g*W*T,f+=I.b*W*T;else if(R.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],W);else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const J=R.shadow,U=i.get(R);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=V,m++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(W*T),V.distance=eA,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;const J=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,J.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[g]=J.matrix,R.castShadow){const U=i.get(R);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=F,w++}g++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(I).multiplyScalar(W),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=V,v++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*T),V.distance=R.distance,V.decay=R.decay,R.castShadow){const J=R.shadow,U=i.get(R);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=V,p++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(W*T),V.groundColor.copy(R.groundColor).multiplyScalar(W*T),n.hemi[x]=V,x++}}v>0&&(A.isWebGL2||e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yA.LTC_FLOAT_1,n.rectAreaLTC2=yA.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=yA.LTC_HALF_1,n.rectAreaLTC2=yA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==m||S.pointLength!==p||S.spotLength!==g||S.rectAreaLength!==v||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==w||S.numSpotMaps!==_)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=v,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,S.directionalLength=m,S.pointLength=p,S.spotLength=g,S.rectAreaLength=v,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=w,S.numSpotMaps=_,n.version=Cw++)}function c(u,l){let h=0,d=0,f=0,m=0,p=0;const g=l.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Ed(e,A){const t=new Dw(e,A),i=[],n=[];function r(){i.length=0,n.length=0}function s(l){i.push(l)}function a(l){n.push(l)}function o(l){t.setup(i,l)}function c(l){t.setupView(i,l)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Pw(e,A){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ed(e,A),t.set(r,[o])):s>=a.length?(o=new Ed(e,A),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}class Ow extends kr{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Rw extends kr{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
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
}`;function Bw(e,A,t){let i=new fh;const n=new Z,r=new Z,s=new $A,a=new Ow({depthPacking:Pv}),o=new Rw,c={},u=t.maxTextureSize,l={0:Ot,1:Pn,2:ch},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Iw,fragmentShader:Nw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new VA;f.setAttribute("position",new ZA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new oi(f,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$p,this.render=function(y,M,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const _=e.getRenderTarget(),b=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),S=e.state;S.setBlending(Yi),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let D=0,L=y.length;D<L;D++){const R=y[D],I=R.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;n.copy(I.mapSize);const W=I.getFrameExtents();if(n.multiply(W),r.copy(I.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/W.x),n.x=r.x*W.x,I.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/W.y),n.y=r.y*W.y,I.mapSize.y=r.y)),I.map===null){const F=this.type!==ms?{minFilter:nt,magFilter:nt}:{};I.map=new Nn(n.x,n.y,F),I.map.texture.name=R.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const eA=I.getViewportCount();for(let F=0;F<eA;F++){const V=I.getViewport(F);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),S.viewport(s),I.updateMatrices(R,F),i=I.getFrustum(),x(M,w,I.camera,R,this.type)}I.isPointLightShadow!==!0&&this.type===ms&&g(I,w),I.needsUpdate=!1}p.needsUpdate=!1,e.setRenderTarget(_,b,T)};function g(y,M){const w=A.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(n.x,n.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,e.setRenderTarget(y.mapPass),e.clear(),e.renderBufferDirect(M,null,w,h,m,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,e.setRenderTarget(y.map),e.clear(),e.renderBufferDirect(M,null,w,d,m,null)}function v(y,M,w,_,b,T){let S=null;const D=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)S=D;else if(S=w.isPointLight===!0?o:a,e.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const L=S.uuid,R=M.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let W=I[R];W===void 0&&(W=S.clone(),I[R]=W),S=W}return S.visible=M.visible,S.wireframe=M.wireframe,T===ms?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:l[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0&&(S.referencePosition.setFromMatrixPosition(w.matrixWorld),S.nearDistance=_,S.farDistance=b),S}function x(y,M,w,_,b){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===ms)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const D=A.update(y),L=y.material;if(Array.isArray(L)){const R=D.groups;for(let I=0,W=R.length;I<W;I++){const eA=R[I],F=L[eA.materialIndex];if(F&&F.visible){const V=v(y,F,_,w.near,w.far,b);e.renderBufferDirect(w,null,D,V,y,eA)}}}else if(L.visible){const R=v(y,L,_,w.near,w.far,b);e.renderBufferDirect(w,null,D,R,y,null)}}const S=y.children;for(let D=0,L=S.length;D<L;D++)x(S[D],M,w,_,b)}}function zw(e,A,t){const i=t.isWebGL2;function n(){let j=!1;const sA=new $A;let hA=null;const EA=new $A(0,0,0,0);return{setMask:function(IA){hA!==IA&&!j&&(e.colorMask(IA,IA,IA,IA),hA=IA)},setLocked:function(IA){j=IA},setClear:function(IA,ee,Ge,Qe,nn){nn===!0&&(IA*=Qe,ee*=Qe,Ge*=Qe),sA.set(IA,ee,Ge,Qe),EA.equals(sA)===!1&&(e.clearColor(IA,ee,Ge,Qe),EA.copy(sA))},reset:function(){j=!1,hA=null,EA.set(-1,0,0,0)}}}function r(){let j=!1,sA=null,hA=null,EA=null;return{setTest:function(IA){IA?tA(2929):X(2929)},setMask:function(IA){sA!==IA&&!j&&(e.depthMask(IA),sA=IA)},setFunc:function(IA){if(hA!==IA){switch(IA){case Av:e.depthFunc(512);break;case ev:e.depthFunc(519);break;case tv:e.depthFunc(513);break;case dc:e.depthFunc(515);break;case iv:e.depthFunc(514);break;case nv:e.depthFunc(518);break;case rv:e.depthFunc(516);break;case sv:e.depthFunc(517);break;default:e.depthFunc(515)}hA=IA}},setLocked:function(IA){j=IA},setClear:function(IA){EA!==IA&&(e.clearDepth(IA),EA=IA)},reset:function(){j=!1,sA=null,hA=null,EA=null}}}function s(){let j=!1,sA=null,hA=null,EA=null,IA=null,ee=null,Ge=null,Qe=null,nn=null;return{setTest:function(we){j||(we?tA(2960):X(2960))},setMask:function(we){sA!==we&&!j&&(e.stencilMask(we),sA=we)},setFunc:function(we,gi,xt){(hA!==we||EA!==gi||IA!==xt)&&(e.stencilFunc(we,gi,xt),hA=we,EA=gi,IA=xt)},setOp:function(we,gi,xt){(ee!==we||Ge!==gi||Qe!==xt)&&(e.stencilOp(we,gi,xt),ee=we,Ge=gi,Qe=xt)},setLocked:function(we){j=we},setClear:function(we){nn!==we&&(e.clearStencil(we),nn=we)},reset:function(){j=!1,sA=null,hA=null,EA=null,IA=null,ee=null,Ge=null,Qe=null,nn=null}}}const a=new n,o=new r,c=new s,u=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],p=null,g=!1,v=null,x=null,y=null,M=null,w=null,_=null,b=null,T=!1,S=null,D=null,L=null,R=null,I=null;const W=e.getParameter(35661);let eA=!1,F=0;const V=e.getParameter(7938);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),eA=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),eA=F>=2);let J=null,U={};const B=e.getParameter(3088),N=e.getParameter(2978),k=new $A().fromArray(B),H=new $A().fromArray(N);function q(j,sA,hA){const EA=new Uint8Array(4),IA=e.createTexture();e.bindTexture(j,IA),e.texParameteri(j,10241,9728),e.texParameteri(j,10240,9728);for(let ee=0;ee<hA;ee++)e.texImage2D(sA+ee,0,6408,1,1,0,6408,5121,EA);return IA}const G={};G[3553]=q(3553,3553,1),G[34067]=q(34067,34069,6),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),tA(2929),o.setFunc(dc),gA(!1),CA(xu),tA(2884),mA(Yi);function tA(j){h[j]!==!0&&(e.enable(j),h[j]=!0)}function X(j){h[j]!==!1&&(e.disable(j),h[j]=!1)}function AA(j,sA){return d[j]!==sA?(e.bindFramebuffer(j,sA),d[j]=sA,i&&(j===36009&&(d[36160]=sA),j===36160&&(d[36009]=sA)),!0):!1}function K(j,sA){let hA=m,EA=!1;if(j)if(hA=f.get(sA),hA===void 0&&(hA=[],f.set(sA,hA)),j.isWebGLMultipleRenderTargets){const IA=j.texture;if(hA.length!==IA.length||hA[0]!==36064){for(let ee=0,Ge=IA.length;ee<Ge;ee++)hA[ee]=36064+ee;hA.length=IA.length,EA=!0}}else hA[0]!==36064&&(hA[0]=36064,EA=!0);else hA[0]!==1029&&(hA[0]=1029,EA=!0);EA&&(t.isWebGL2?e.drawBuffers(hA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(hA))}function pA(j){return p!==j?(e.useProgram(j),p=j,!0):!1}const uA={[cr]:32774,[H0]:32778,[W0]:32779};if(i)uA[Mu]=32775,uA[_u]=32776;else{const j=A.get("EXT_blend_minmax");j!==null&&(uA[Mu]=j.MIN_EXT,uA[_u]=j.MAX_EXT)}const cA={[j0]:0,[q0]:1,[X0]:768,[Am]:770,[$0]:776,[J0]:774,[Q0]:772,[Y0]:769,[em]:771,[K0]:775,[Z0]:773};function mA(j,sA,hA,EA,IA,ee,Ge,Qe){if(j===Yi){g===!0&&(X(3042),g=!1);return}if(g===!1&&(tA(3042),g=!0),j!==V0){if(j!==v||Qe!==T){if((x!==cr||w!==cr)&&(e.blendEquation(32774),x=cr,w=cr),Qe)switch(j){case yr:e.blendFuncSeparate(1,771,1,771);break;case bu:e.blendFunc(1,1);break;case wu:e.blendFuncSeparate(0,769,0,1);break;case Su:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case yr:e.blendFuncSeparate(770,771,1,771);break;case bu:e.blendFunc(770,1);break;case wu:e.blendFuncSeparate(0,769,0,1);break;case Su:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,M=null,_=null,b=null,v=j,T=Qe}return}IA=IA||sA,ee=ee||hA,Ge=Ge||EA,(sA!==x||IA!==w)&&(e.blendEquationSeparate(uA[sA],uA[IA]),x=sA,w=IA),(hA!==y||EA!==M||ee!==_||Ge!==b)&&(e.blendFuncSeparate(cA[hA],cA[EA],cA[ee],cA[Ge]),y=hA,M=EA,_=ee,b=Ge),v=j,T=!1}function fA(j,sA){j.side===ch?X(2884):tA(2884);let hA=j.side===Ot;sA&&(hA=!hA),gA(hA),j.blending===yr&&j.transparent===!1?mA(Yi):mA(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),a.setMask(j.colorWrite);const EA=j.stencilWrite;c.setTest(EA),EA&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),MA(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?tA(32926):X(32926)}function gA(j){S!==j&&(j?e.frontFace(2304):e.frontFace(2305),S=j)}function CA(j){j!==U0?(tA(2884),j!==D&&(j===xu?e.cullFace(1029):j===k0?e.cullFace(1028):e.cullFace(1032))):X(2884),D=j}function SA(j){j!==L&&(eA&&e.lineWidth(j),L=j)}function MA(j,sA,hA){j?(tA(32823),(R!==sA||I!==hA)&&(e.polygonOffset(sA,hA),R=sA,I=hA)):X(32823)}function de(j){j?tA(3089):X(3089)}function NA(j){j===void 0&&(j=33984+W-1),J!==j&&(e.activeTexture(j),J=j)}function O(j,sA,hA){hA===void 0&&(J===null?hA=33984+W-1:hA=J);let EA=U[hA];EA===void 0&&(EA={type:void 0,texture:void 0},U[hA]=EA),(EA.type!==j||EA.texture!==sA)&&(J!==hA&&(e.activeTexture(hA),J=hA),e.bindTexture(j,sA||G[j]),EA.type=j,EA.texture=sA)}function C(){const j=U[J];j!==void 0&&j.type!==void 0&&(e.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function rA(){try{e.compressedTexImage2D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dA(){try{e.compressedTexImage3D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vA(){try{e.texSubImage2D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bA(){try{e.texSubImage3D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function UA(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function z(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Y(){try{e.texStorage2D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xA(){try{e.texStorage3D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function wA(){try{e.texImage2D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _A(){try{e.texImage3D.apply(e,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function RA(j){k.equals(j)===!1&&(e.scissor(j.x,j.y,j.z,j.w),k.copy(j))}function PA(j){H.equals(j)===!1&&(e.viewport(j.x,j.y,j.z,j.w),H.copy(j))}function JA(j,sA){let hA=l.get(sA);hA===void 0&&(hA=new WeakMap,l.set(sA,hA));let EA=hA.get(j);EA===void 0&&(EA=e.getUniformBlockIndex(sA,j.name),hA.set(j,EA))}function Ae(j,sA){const EA=l.get(sA).get(j);u.get(sA)!==EA&&(e.uniformBlockBinding(sA,EA,j.__bindingPointIndex),u.set(sA,EA))}function ae(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),i===!0&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},J=null,U={},d={},f=new WeakMap,m=[],p=null,g=!1,v=null,x=null,y=null,M=null,w=null,_=null,b=null,T=!1,S=null,D=null,L=null,R=null,I=null,k.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:tA,disable:X,bindFramebuffer:AA,drawBuffers:K,useProgram:pA,setBlending:mA,setMaterial:fA,setFlipSided:gA,setCullFace:CA,setLineWidth:SA,setPolygonOffset:MA,setScissorTest:de,activeTexture:NA,bindTexture:O,unbindTexture:C,compressedTexImage2D:rA,compressedTexImage3D:dA,texImage2D:wA,texImage3D:_A,updateUBOMapping:JA,uniformBlockBinding:Ae,texStorage2D:Y,texStorage3D:xA,texSubImage2D:vA,texSubImage3D:bA,compressedTexSubImage2D:UA,compressedTexSubImage3D:z,scissor:RA,viewport:PA,reset:ae}}function Fw(e,A,t,i,n,r,s){const a=n.isWebGL2,o=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,l=n.maxSamples,h=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let m;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,C){return g?new OffscreenCanvas(O,C):eo("canvas")}function x(O,C,rA,dA){let vA=1;if((O.width>dA||O.height>dA)&&(vA=dA/Math.max(O.width,O.height)),vA<1||C===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const bA=C?Ao:Math.floor,UA=bA(vA*O.width),z=bA(vA*O.height);m===void 0&&(m=v(UA,z));const Y=rA?v(UA,z):m;return Y.width=UA,Y.height=z,Y.getContext("2d").drawImage(O,0,0,UA,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+UA+"x"+z+")."),Y}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function y(O){return xc(O.width)&&xc(O.height)}function M(O){return a?!1:O.wrapS!==Vt||O.wrapT!==Vt||O.minFilter!==nt&&O.minFilter!==at}function w(O,C){return O.generateMipmaps&&C&&O.minFilter!==nt&&O.minFilter!==at}function _(O){e.generateMipmap(O)}function b(O,C,rA,dA,vA=!1){if(a===!1)return C;if(O!==null){if(e[O]!==void 0)return e[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let bA=C;return C===6403&&(rA===5126&&(bA=33326),rA===5131&&(bA=33325),rA===5121&&(bA=33321)),C===33319&&(rA===5126&&(bA=33328),rA===5131&&(bA=33327),rA===5121&&(bA=33323)),C===6408&&(rA===5126&&(bA=34836),rA===5131&&(bA=34842),rA===5121&&(bA=dA===fe&&vA===!1?35907:32856),rA===32819&&(bA=32854),rA===32820&&(bA=32855)),(bA===33325||bA===33326||bA===33327||bA===33328||bA===34842||bA===34836)&&A.get("EXT_color_buffer_float"),bA}function T(O,C,rA){return w(O,rA)===!0||O.isFramebufferTexture&&O.minFilter!==nt&&O.minFilter!==at?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function S(O){return O===nt||O===Tu||O===el?9728:9729}function D(O){const C=O.target;C.removeEventListener("dispose",D),R(C),C.isVideoTexture&&f.delete(C)}function L(O){const C=O.target;C.removeEventListener("dispose",L),W(C)}function R(O){const C=i.get(O);if(C.__webglInit===void 0)return;const rA=O.source,dA=p.get(rA);if(dA){const vA=dA[C.__cacheKey];vA.usedTimes--,vA.usedTimes===0&&I(O),Object.keys(dA).length===0&&p.delete(rA)}i.remove(O)}function I(O){const C=i.get(O);e.deleteTexture(C.__webglTexture);const rA=O.source,dA=p.get(rA);delete dA[C.__cacheKey],s.memory.textures--}function W(O){const C=O.texture,rA=i.get(O),dA=i.get(C);if(dA.__webglTexture!==void 0&&(e.deleteTexture(dA.__webglTexture),s.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let vA=0;vA<6;vA++)e.deleteFramebuffer(rA.__webglFramebuffer[vA]),rA.__webglDepthbuffer&&e.deleteRenderbuffer(rA.__webglDepthbuffer[vA]);else{if(e.deleteFramebuffer(rA.__webglFramebuffer),rA.__webglDepthbuffer&&e.deleteRenderbuffer(rA.__webglDepthbuffer),rA.__webglMultisampledFramebuffer&&e.deleteFramebuffer(rA.__webglMultisampledFramebuffer),rA.__webglColorRenderbuffer)for(let vA=0;vA<rA.__webglColorRenderbuffer.length;vA++)rA.__webglColorRenderbuffer[vA]&&e.deleteRenderbuffer(rA.__webglColorRenderbuffer[vA]);rA.__webglDepthRenderbuffer&&e.deleteRenderbuffer(rA.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let vA=0,bA=C.length;vA<bA;vA++){const UA=i.get(C[vA]);UA.__webglTexture&&(e.deleteTexture(UA.__webglTexture),s.memory.textures--),i.remove(C[vA])}i.remove(C),i.remove(O)}let eA=0;function F(){eA=0}function V(){const O=eA;return O>=o&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o),eA+=1,O}function J(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.encoding),C.join()}function U(O,C){const rA=i.get(O);if(O.isVideoTexture&&de(O),O.isRenderTargetTexture===!1&&O.version>0&&rA.__version!==O.version){const dA=O.image;if(dA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(rA,O,C);return}}t.bindTexture(3553,rA.__webglTexture,33984+C)}function B(O,C){const rA=i.get(O);if(O.version>0&&rA.__version!==O.version){X(rA,O,C);return}t.bindTexture(35866,rA.__webglTexture,33984+C)}function N(O,C){const rA=i.get(O);if(O.version>0&&rA.__version!==O.version){X(rA,O,C);return}t.bindTexture(32879,rA.__webglTexture,33984+C)}function k(O,C){const rA=i.get(O);if(O.version>0&&rA.__version!==O.version){AA(rA,O,C);return}t.bindTexture(34067,rA.__webglTexture,33984+C)}const H={[mc]:10497,[Vt]:33071,[gc]:33648},q={[nt]:9728,[Tu]:9984,[el]:9986,[at]:9729,[fv]:9985,[Ps]:9987};function G(O,C,rA){if(rA?(e.texParameteri(O,10242,H[C.wrapS]),e.texParameteri(O,10243,H[C.wrapT]),(O===32879||O===35866)&&e.texParameteri(O,32882,H[C.wrapR]),e.texParameteri(O,10240,q[C.magFilter]),e.texParameteri(O,10241,q[C.minFilter])):(e.texParameteri(O,10242,33071),e.texParameteri(O,10243,33071),(O===32879||O===35866)&&e.texParameteri(O,32882,33071),(C.wrapS!==Vt||C.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(O,10240,S(C.magFilter)),e.texParameteri(O,10241,S(C.minFilter)),C.minFilter!==nt&&C.minFilter!==at&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const dA=A.get("EXT_texture_filter_anisotropic");if(C.magFilter===nt||C.minFilter!==el&&C.minFilter!==Ps||C.type===Sn&&A.has("OES_texture_float_linear")===!1||a===!1&&C.type===Os&&A.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(e.texParameterf(O,dA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function tA(O,C){let rA=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",D));const dA=C.source;let vA=p.get(dA);vA===void 0&&(vA={},p.set(dA,vA));const bA=J(C);if(bA!==O.__cacheKey){vA[bA]===void 0&&(vA[bA]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,rA=!0),vA[bA].usedTimes++;const UA=vA[O.__cacheKey];UA!==void 0&&(vA[O.__cacheKey].usedTimes--,UA.usedTimes===0&&I(C)),O.__cacheKey=bA,O.__webglTexture=vA[bA].texture}return rA}function X(O,C,rA){let dA=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(dA=35866),C.isData3DTexture&&(dA=32879);const vA=tA(O,C),bA=C.source;t.bindTexture(dA,O.__webglTexture,33984+rA);const UA=i.get(bA);if(bA.version!==UA.__version||vA===!0){t.activeTexture(33984+rA),e.pixelStorei(37440,C.flipY),e.pixelStorei(37441,C.premultiplyAlpha),e.pixelStorei(3317,C.unpackAlignment),e.pixelStorei(37443,0);const z=M(C)&&y(C.image)===!1;let Y=x(C.image,z,!1,u);Y=NA(C,Y);const xA=y(Y)||a,wA=r.convert(C.format,C.encoding);let _A=r.convert(C.type),RA=b(C.internalFormat,wA,_A,C.encoding,C.isVideoTexture);G(dA,C,xA);let PA;const JA=C.mipmaps,Ae=a&&C.isVideoTexture!==!0,ae=UA.__version===void 0||vA===!0,j=T(C,Y,xA);if(C.isDepthTexture)RA=6402,a?C.type===Sn?RA=36012:C.type===wn?RA=33190:C.type===xr?RA=35056:RA=33189:C.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Tn&&RA===6402&&C.type!==nm&&C.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=wn,_A=r.convert(C.type)),C.format===Dr&&RA===6402&&(RA=34041,C.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=xr,_A=r.convert(C.type))),ae&&(Ae?t.texStorage2D(3553,1,RA,Y.width,Y.height):t.texImage2D(3553,0,RA,Y.width,Y.height,0,wA,_A,null));else if(C.isDataTexture)if(JA.length>0&&xA){Ae&&ae&&t.texStorage2D(3553,j,RA,JA[0].width,JA[0].height);for(let sA=0,hA=JA.length;sA<hA;sA++)PA=JA[sA],Ae?t.texSubImage2D(3553,sA,0,0,PA.width,PA.height,wA,_A,PA.data):t.texImage2D(3553,sA,RA,PA.width,PA.height,0,wA,_A,PA.data);C.generateMipmaps=!1}else Ae?(ae&&t.texStorage2D(3553,j,RA,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,wA,_A,Y.data)):t.texImage2D(3553,0,RA,Y.width,Y.height,0,wA,_A,Y.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ae&&ae&&t.texStorage3D(35866,j,RA,JA[0].width,JA[0].height,Y.depth);for(let sA=0,hA=JA.length;sA<hA;sA++)PA=JA[sA],C.format!==Ht?wA!==null?Ae?t.compressedTexSubImage3D(35866,sA,0,0,0,PA.width,PA.height,Y.depth,wA,PA.data,0,0):t.compressedTexImage3D(35866,sA,RA,PA.width,PA.height,Y.depth,0,PA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage3D(35866,sA,0,0,0,PA.width,PA.height,Y.depth,wA,_A,PA.data):t.texImage3D(35866,sA,RA,PA.width,PA.height,Y.depth,0,wA,_A,PA.data)}else{Ae&&ae&&t.texStorage2D(3553,j,RA,JA[0].width,JA[0].height);for(let sA=0,hA=JA.length;sA<hA;sA++)PA=JA[sA],C.format!==Ht?wA!==null?Ae?t.compressedTexSubImage2D(3553,sA,0,0,PA.width,PA.height,wA,PA.data):t.compressedTexImage2D(3553,sA,RA,PA.width,PA.height,0,PA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage2D(3553,sA,0,0,PA.width,PA.height,wA,_A,PA.data):t.texImage2D(3553,sA,RA,PA.width,PA.height,0,wA,_A,PA.data)}else if(C.isDataArrayTexture)Ae?(ae&&t.texStorage3D(35866,j,RA,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,wA,_A,Y.data)):t.texImage3D(35866,0,RA,Y.width,Y.height,Y.depth,0,wA,_A,Y.data);else if(C.isData3DTexture)Ae?(ae&&t.texStorage3D(32879,j,RA,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,wA,_A,Y.data)):t.texImage3D(32879,0,RA,Y.width,Y.height,Y.depth,0,wA,_A,Y.data);else if(C.isFramebufferTexture){if(ae)if(Ae)t.texStorage2D(3553,j,RA,Y.width,Y.height);else{let sA=Y.width,hA=Y.height;for(let EA=0;EA<j;EA++)t.texImage2D(3553,EA,RA,sA,hA,0,wA,_A,null),sA>>=1,hA>>=1}}else if(JA.length>0&&xA){Ae&&ae&&t.texStorage2D(3553,j,RA,JA[0].width,JA[0].height);for(let sA=0,hA=JA.length;sA<hA;sA++)PA=JA[sA],Ae?t.texSubImage2D(3553,sA,0,0,wA,_A,PA):t.texImage2D(3553,sA,RA,wA,_A,PA);C.generateMipmaps=!1}else Ae?(ae&&t.texStorage2D(3553,j,RA,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,wA,_A,Y)):t.texImage2D(3553,0,RA,wA,_A,Y);w(C,xA)&&_(dA),UA.__version=bA.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function AA(O,C,rA){if(C.image.length!==6)return;const dA=tA(O,C),vA=C.source;t.bindTexture(34067,O.__webglTexture,33984+rA);const bA=i.get(vA);if(vA.version!==bA.__version||dA===!0){t.activeTexture(33984+rA),e.pixelStorei(37440,C.flipY),e.pixelStorei(37441,C.premultiplyAlpha),e.pixelStorei(3317,C.unpackAlignment),e.pixelStorei(37443,0);const UA=C.isCompressedTexture||C.image[0].isCompressedTexture,z=C.image[0]&&C.image[0].isDataTexture,Y=[];for(let sA=0;sA<6;sA++)!UA&&!z?Y[sA]=x(C.image[sA],!1,!0,c):Y[sA]=z?C.image[sA].image:C.image[sA],Y[sA]=NA(C,Y[sA]);const xA=Y[0],wA=y(xA)||a,_A=r.convert(C.format,C.encoding),RA=r.convert(C.type),PA=b(C.internalFormat,_A,RA,C.encoding),JA=a&&C.isVideoTexture!==!0,Ae=bA.__version===void 0||dA===!0;let ae=T(C,xA,wA);G(34067,C,wA);let j;if(UA){JA&&Ae&&t.texStorage2D(34067,ae,PA,xA.width,xA.height);for(let sA=0;sA<6;sA++){j=Y[sA].mipmaps;for(let hA=0;hA<j.length;hA++){const EA=j[hA];C.format!==Ht?_A!==null?JA?t.compressedTexSubImage2D(34069+sA,hA,0,0,EA.width,EA.height,_A,EA.data):t.compressedTexImage2D(34069+sA,hA,PA,EA.width,EA.height,0,EA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):JA?t.texSubImage2D(34069+sA,hA,0,0,EA.width,EA.height,_A,RA,EA.data):t.texImage2D(34069+sA,hA,PA,EA.width,EA.height,0,_A,RA,EA.data)}}}else{j=C.mipmaps,JA&&Ae&&(j.length>0&&ae++,t.texStorage2D(34067,ae,PA,Y[0].width,Y[0].height));for(let sA=0;sA<6;sA++)if(z){JA?t.texSubImage2D(34069+sA,0,0,0,Y[sA].width,Y[sA].height,_A,RA,Y[sA].data):t.texImage2D(34069+sA,0,PA,Y[sA].width,Y[sA].height,0,_A,RA,Y[sA].data);for(let hA=0;hA<j.length;hA++){const IA=j[hA].image[sA].image;JA?t.texSubImage2D(34069+sA,hA+1,0,0,IA.width,IA.height,_A,RA,IA.data):t.texImage2D(34069+sA,hA+1,PA,IA.width,IA.height,0,_A,RA,IA.data)}}else{JA?t.texSubImage2D(34069+sA,0,0,0,_A,RA,Y[sA]):t.texImage2D(34069+sA,0,PA,_A,RA,Y[sA]);for(let hA=0;hA<j.length;hA++){const EA=j[hA];JA?t.texSubImage2D(34069+sA,hA+1,0,0,_A,RA,EA.image[sA]):t.texImage2D(34069+sA,hA+1,PA,_A,RA,EA.image[sA])}}}w(C,wA)&&_(34067),bA.__version=vA.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function K(O,C,rA,dA,vA){const bA=r.convert(rA.format,rA.encoding),UA=r.convert(rA.type),z=b(rA.internalFormat,bA,UA,rA.encoding);i.get(C).__hasExternalTextures||(vA===32879||vA===35866?t.texImage3D(vA,0,z,C.width,C.height,C.depth,0,bA,UA,null):t.texImage2D(vA,0,z,C.width,C.height,0,bA,UA,null)),t.bindFramebuffer(36160,O),MA(C)?h.framebufferTexture2DMultisampleEXT(36160,dA,vA,i.get(rA).__webglTexture,0,SA(C)):(vA===3553||vA>=34069&&vA<=34074)&&e.framebufferTexture2D(36160,dA,vA,i.get(rA).__webglTexture,0),t.bindFramebuffer(36160,null)}function pA(O,C,rA){if(e.bindRenderbuffer(36161,O),C.depthBuffer&&!C.stencilBuffer){let dA=33189;if(rA||MA(C)){const vA=C.depthTexture;vA&&vA.isDepthTexture&&(vA.type===Sn?dA=36012:vA.type===wn&&(dA=33190));const bA=SA(C);MA(C)?h.renderbufferStorageMultisampleEXT(36161,bA,dA,C.width,C.height):e.renderbufferStorageMultisample(36161,bA,dA,C.width,C.height)}else e.renderbufferStorage(36161,dA,C.width,C.height);e.framebufferRenderbuffer(36160,36096,36161,O)}else if(C.depthBuffer&&C.stencilBuffer){const dA=SA(C);rA&&MA(C)===!1?e.renderbufferStorageMultisample(36161,dA,35056,C.width,C.height):MA(C)?h.renderbufferStorageMultisampleEXT(36161,dA,35056,C.width,C.height):e.renderbufferStorage(36161,34041,C.width,C.height),e.framebufferRenderbuffer(36160,33306,36161,O)}else{const dA=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let vA=0;vA<dA.length;vA++){const bA=dA[vA],UA=r.convert(bA.format,bA.encoding),z=r.convert(bA.type),Y=b(bA.internalFormat,UA,z,bA.encoding),xA=SA(C);rA&&MA(C)===!1?e.renderbufferStorageMultisample(36161,xA,Y,C.width,C.height):MA(C)?h.renderbufferStorageMultisampleEXT(36161,xA,Y,C.width,C.height):e.renderbufferStorage(36161,Y,C.width,C.height)}}e.bindRenderbuffer(36161,null)}function uA(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const dA=i.get(C.depthTexture).__webglTexture,vA=SA(C);if(C.depthTexture.format===Tn)MA(C)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,dA,0,vA):e.framebufferTexture2D(36160,36096,3553,dA,0);else if(C.depthTexture.format===Dr)MA(C)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,dA,0,vA):e.framebufferTexture2D(36160,33306,3553,dA,0);else throw new Error("Unknown depthTexture format")}function cA(O){const C=i.get(O),rA=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(rA)throw new Error("target.depthTexture not supported in Cube render targets");uA(C.__webglFramebuffer,O)}else if(rA){C.__webglDepthbuffer=[];for(let dA=0;dA<6;dA++)t.bindFramebuffer(36160,C.__webglFramebuffer[dA]),C.__webglDepthbuffer[dA]=e.createRenderbuffer(),pA(C.__webglDepthbuffer[dA],O,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=e.createRenderbuffer(),pA(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(36160,null)}function mA(O,C,rA){const dA=i.get(O);C!==void 0&&K(dA.__webglFramebuffer,O,O.texture,36064,3553),rA!==void 0&&cA(O)}function fA(O){const C=O.texture,rA=i.get(O),dA=i.get(C);O.addEventListener("dispose",L),O.isWebGLMultipleRenderTargets!==!0&&(dA.__webglTexture===void 0&&(dA.__webglTexture=e.createTexture()),dA.__version=C.version,s.memory.textures++);const vA=O.isWebGLCubeRenderTarget===!0,bA=O.isWebGLMultipleRenderTargets===!0,UA=y(O)||a;if(vA){rA.__webglFramebuffer=[];for(let z=0;z<6;z++)rA.__webglFramebuffer[z]=e.createFramebuffer()}else{if(rA.__webglFramebuffer=e.createFramebuffer(),bA)if(n.drawBuffers){const z=O.texture;for(let Y=0,xA=z.length;Y<xA;Y++){const wA=i.get(z[Y]);wA.__webglTexture===void 0&&(wA.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&MA(O)===!1){const z=bA?C:[C];rA.__webglMultisampledFramebuffer=e.createFramebuffer(),rA.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,rA.__webglMultisampledFramebuffer);for(let Y=0;Y<z.length;Y++){const xA=z[Y];rA.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(36161,rA.__webglColorRenderbuffer[Y]);const wA=r.convert(xA.format,xA.encoding),_A=r.convert(xA.type),RA=b(xA.internalFormat,wA,_A,xA.encoding,O.isXRRenderTarget===!0),PA=SA(O);e.renderbufferStorageMultisample(36161,PA,RA,O.width,O.height),e.framebufferRenderbuffer(36160,36064+Y,36161,rA.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(36161,null),O.depthBuffer&&(rA.__webglDepthRenderbuffer=e.createRenderbuffer(),pA(rA.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(36160,null)}}if(vA){t.bindTexture(34067,dA.__webglTexture),G(34067,C,UA);for(let z=0;z<6;z++)K(rA.__webglFramebuffer[z],O,C,36064,34069+z);w(C,UA)&&_(34067),t.unbindTexture()}else if(bA){const z=O.texture;for(let Y=0,xA=z.length;Y<xA;Y++){const wA=z[Y],_A=i.get(wA);t.bindTexture(3553,_A.__webglTexture),G(3553,wA,UA),K(rA.__webglFramebuffer,O,wA,36064+Y,3553),w(wA,UA)&&_(3553)}t.unbindTexture()}else{let z=3553;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?z=O.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,dA.__webglTexture),G(z,C,UA),K(rA.__webglFramebuffer,O,C,36064,z),w(C,UA)&&_(z),t.unbindTexture()}O.depthBuffer&&cA(O)}function gA(O){const C=y(O)||a,rA=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let dA=0,vA=rA.length;dA<vA;dA++){const bA=rA[dA];if(w(bA,C)){const UA=O.isWebGLCubeRenderTarget?34067:3553,z=i.get(bA).__webglTexture;t.bindTexture(UA,z),_(UA),t.unbindTexture()}}}function CA(O){if(a&&O.samples>0&&MA(O)===!1){const C=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],rA=O.width,dA=O.height;let vA=16384;const bA=[],UA=O.stencilBuffer?33306:36096,z=i.get(O),Y=O.isWebGLMultipleRenderTargets===!0;if(Y)for(let xA=0;xA<C.length;xA++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+xA,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),e.framebufferTexture2D(36009,36064+xA,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let xA=0;xA<C.length;xA++){bA.push(36064+xA),O.depthBuffer&&bA.push(UA);const wA=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(wA===!1&&(O.depthBuffer&&(vA|=256),O.stencilBuffer&&(vA|=1024)),Y&&e.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[xA]),wA===!0&&(e.invalidateFramebuffer(36008,[UA]),e.invalidateFramebuffer(36009,[UA])),Y){const _A=i.get(C[xA]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,_A,0)}e.blitFramebuffer(0,0,rA,dA,0,0,rA,dA,vA,9728),d&&e.invalidateFramebuffer(36008,bA)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let xA=0;xA<C.length;xA++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+xA,36161,z.__webglColorRenderbuffer[xA]);const wA=i.get(C[xA]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),e.framebufferTexture2D(36009,36064+xA,3553,wA,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function SA(O){return Math.min(l,O.samples)}function MA(O){const C=i.get(O);return a&&O.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function de(O){const C=s.render.frame;f.get(O)!==C&&(f.set(O,C),O.update())}function NA(O,C){const rA=O.encoding,dA=O.format,vA=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===yc||rA!==di&&(rA===fe?a===!1?A.has("EXT_sRGB")===!0&&dA===Ht?(O.format=yc,O.minFilter=at,O.generateMipmaps=!1):C=om.sRGBToLinear(C):(dA!==Ht||vA!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",rA)),C}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=mA,this.setupRenderTarget=fA,this.updateRenderTargetMipmap=gA,this.updateMultisampleRenderTarget=CA,this.setupDepthRenderbuffer=cA,this.setupFrameBufferTexture=K,this.useMultisampledRTT=MA}function Uw(e,A,t){const i=t.isWebGL2;function n(r,s=null){let a;if(r===In)return 5121;if(r===vv)return 32819;if(r===yv)return 32820;if(r===pv)return 5120;if(r===mv)return 5122;if(r===nm)return 5123;if(r===gv)return 5124;if(r===wn)return 5125;if(r===Sn)return 5126;if(r===Os)return i?5131:(a=A.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xv)return 6406;if(r===Ht)return 6408;if(r===wv)return 6409;if(r===Sv)return 6410;if(r===Tn)return 6402;if(r===Dr)return 34041;if(r===bv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===yc)return a=A.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mv)return 6403;if(r===_v)return 36244;if(r===Tv)return 33319;if(r===Ev)return 33320;if(r===Cv)return 36249;if(r===tl||r===il||r===nl||r===rl)if(s===fe)if(a=A.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=A.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eu||r===Cu||r===Lu||r===Du)if(a=A.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lv)return a=A.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pu||r===Ou)if(a=A.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Pu)return s===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ou)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ru||r===Iu||r===Nu||r===Bu||r===zu||r===Fu||r===Uu||r===ku||r===Gu||r===Vu||r===Hu||r===Wu||r===ju||r===qu)if(a=A.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ru)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Iu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ku)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ju)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qu)return s===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xu)if(a=A.get("EXT_texture_compression_bptc"),a!==null){if(r===Xu)return s===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===xr?i?34042:(a=A.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):e[r]!==void 0?e[r]:null}return{convert:n}}class kw extends ot{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class pr extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const t=this._hand;if(t)for(const i of A.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(A&&t.session.visibilityState!=="visible-blurred"){if(c&&A.hand){s=!0;for(const m of A.hand.values()){const p=t.getJointPose(m,i),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],h=u.position.distanceTo(l.position),d=.02,f=.005;c.inputState.pinching&&h>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!c.inputState.pinching&&h<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=t.getPose(A.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(n=t.getPose(A.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(A,t){if(A.joints[t.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,A.joints[t.jointName]=i,A.add(i)}return A.joints[t.jointName]}}class Vw extends Je{constructor(A,t,i,n,r,s,a,o,c,u){if(u=u!==void 0?u:Tn,u!==Tn&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Tn&&(i=wn),i===void 0&&u===Dr&&(i=xr),super(null,n,r,s,a,o,u,i,c),this.isDepthTexture=!0,this.image={width:A,height:t},this.magFilter=a!==void 0?a:nt,this.minFilter=o!==void 0?o:nt,this.flipY=!1,this.generateMipmaps=!1}}class Hw extends en{constructor(A,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=null,c=null,u=null,l=null,h=null,d=null;const f=t.getContextAttributes();let m=null,p=null;const g=[],v=[],x=new Set,y=new Map,M=new ot;M.layers.enable(1),M.viewport=new $A;const w=new ot;w.layers.enable(2),w.viewport=new $A;const _=[M,w],b=new kw;b.layers.enable(1),b.layers.enable(2);let T=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let N=g[B];return N===void 0&&(N=new Dl,g[B]=N),N.getTargetRaySpace()},this.getControllerGrip=function(B){let N=g[B];return N===void 0&&(N=new Dl,g[B]=N),N.getGripSpace()},this.getHand=function(B){let N=g[B];return N===void 0&&(N=new Dl,g[B]=N),N.getHandSpace()};function D(B){const N=v.indexOf(B.inputSource);if(N===-1)return;const k=g[N];k!==void 0&&k.dispatchEvent({type:B.type,data:B.inputSource})}function L(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",R);for(let B=0;B<g.length;B++){const N=v[B];N!==null&&(v[B]=null,g[B].disconnect(N))}T=null,S=null,A.setRenderTarget(m),h=null,l=null,u=null,n=null,p=null,U.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(B){o=B},this.getBaseLayer=function(){return l!==null?l:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(m=A.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",L),n.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const N={antialias:n.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,N),n.updateRenderState({baseLayer:h}),p=new Nn(h.framebufferWidth,h.framebufferHeight,{format:Ht,type:In,encoding:A.outputEncoding,stencilBuffer:f.stencil})}else{let N=null,k=null,H=null;f.depth&&(H=f.stencil?35056:33190,N=f.stencil?Dr:Tn,k=f.stencil?xr:wn);const q={colorFormat:32856,depthFormat:H,scaleFactor:r};u=new XRWebGLBinding(n,t),l=u.createProjectionLayer(q),n.updateRenderState({layers:[l]}),p=new Nn(l.textureWidth,l.textureHeight,{format:Ht,type:In,depthTexture:new Vw(l.textureWidth,l.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:f.stencil,encoding:A.outputEncoding,samples:f.antialias?4:0});const G=A.properties.get(p);G.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=null,s=await n.requestReferenceSpace(a),U.setContext(n),U.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(B){for(let N=0;N<B.removed.length;N++){const k=B.removed[N],H=v.indexOf(k);H>=0&&(v[H]=null,g[H].disconnect(k))}for(let N=0;N<B.added.length;N++){const k=B.added[N];let H=v.indexOf(k);if(H===-1){for(let G=0;G<g.length;G++)if(G>=v.length){v.push(k),H=G;break}else if(v[G]===null){v[G]=k,H=G;break}if(H===-1)break}const q=g[H];q&&q.connect(k)}}const I=new E,W=new E;function eA(B,N,k){I.setFromMatrixPosition(N.matrixWorld),W.setFromMatrixPosition(k.matrixWorld);const H=I.distanceTo(W),q=N.projectionMatrix.elements,G=k.projectionMatrix.elements,tA=q[14]/(q[10]-1),X=q[14]/(q[10]+1),AA=(q[9]+1)/q[5],K=(q[9]-1)/q[5],pA=(q[8]-1)/q[0],uA=(G[8]+1)/G[0],cA=tA*pA,mA=tA*uA,fA=H/(-pA+uA),gA=fA*-pA;N.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(gA),B.translateZ(fA),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const CA=tA+fA,SA=X+fA,MA=cA-gA,de=mA+(H-gA),NA=AA*X/SA*CA,O=K*X/SA*CA;B.projectionMatrix.makePerspective(MA,de,NA,O,CA,SA)}function F(B,N){N===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(N.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;b.near=w.near=M.near=B.near,b.far=w.far=M.far=B.far,(T!==b.near||S!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,S=b.far);const N=B.parent,k=b.cameras;F(b,N);for(let q=0;q<k.length;q++)F(k[q],N);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),B.matrix.copy(b.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const H=B.children;for(let q=0,G=H.length;q<G;q++)H[q].updateMatrixWorld(!0);k.length===2?eA(b,M,w):b.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(l!==null)return l.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){l!==null&&(l.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.getPlanes=function(){return x};let V=null;function J(B,N){if(c=N.getViewerPose(o||s),d=N,c!==null){const k=c.views;h!==null&&(A.setRenderTargetFramebuffer(p,h.framebuffer),A.setRenderTarget(p));let H=!1;k.length!==b.cameras.length&&(b.cameras.length=0,H=!0);for(let q=0;q<k.length;q++){const G=k[q];let tA=null;if(h!==null)tA=h.getViewport(G);else{const AA=u.getViewSubImage(l,G);tA=AA.viewport,q===0&&(A.setRenderTargetTextures(p,AA.colorTexture,l.ignoreDepthValues?void 0:AA.depthStencilTexture),A.setRenderTarget(p))}let X=_[q];X===void 0&&(X=new ot,X.layers.enable(q),X.viewport=new $A,_[q]=X),X.matrix.fromArray(G.transform.matrix),X.projectionMatrix.fromArray(G.projectionMatrix),X.viewport.set(tA.x,tA.y,tA.width,tA.height),q===0&&b.matrix.copy(X.matrix),H===!0&&b.cameras.push(X)}}for(let k=0;k<g.length;k++){const H=v[k],q=g[k];H!==null&&q!==void 0&&q.update(H,N,o||s)}if(V&&V(B,N),N.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:N.detectedPlanes});let k=null;for(const H of x)N.detectedPlanes.has(H)||(k===null&&(k=[]),k.push(H));if(k!==null)for(const H of k)x.delete(H),y.delete(H),i.dispatchEvent({type:"planeremoved",data:H});for(const H of N.detectedPlanes)if(!x.has(H))x.add(H),y.set(H,N.lastChangedTime),i.dispatchEvent({type:"planeadded",data:H});else{const q=y.get(H);H.lastChangedTime>q&&(y.set(H,H.lastChangedTime),i.dispatchEvent({type:"planechanged",data:H}))}}d=null}const U=new dm;U.setAnimationLoop(J),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function Ww(e,A){function t(m,p){p.color.getRGB(m.fogColor.value,um(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),l(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(n(m,p),d(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),f(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?a(m,p,g,v):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=A.get(p).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=e.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,g,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=v*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uvTransform.value.copy(g.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),A.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function f(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function jw(e,A,t,i){let n={},r={},s=[];const a=t.isWebGL2?e.getParameter(35375):0;function o(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=n[v.id];y===void 0&&(f(v),y=u(v),n[v.id]=y,v.addEventListener("dispose",p));const M=x.program;i.updateUBOMapping(v,M);const w=A.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const x=l();v.__bindingPointIndex=x;const y=e.createBuffer(),M=v.__size,w=v.usage;return e.bindBuffer(35345,y),e.bufferData(35345,M,w),e.bindBuffer(35345,null),e.bindBufferBase(35345,x,y),y}function l(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=n[v.id],y=v.uniforms,M=v.__cache;e.bindBuffer(35345,x);for(let w=0,_=y.length;w<_;w++){const b=y[w];if(d(b,w,M)===!0){const T=b.__offset,S=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let L=0;L<S.length;L++){const R=S[L],I=m(R);typeof R=="number"?(b.__data[0]=R,e.bufferSubData(35345,T+D,b.__data)):R.isMatrix3?(b.__data[0]=R.elements[0],b.__data[1]=R.elements[1],b.__data[2]=R.elements[2],b.__data[3]=R.elements[0],b.__data[4]=R.elements[3],b.__data[5]=R.elements[4],b.__data[6]=R.elements[5],b.__data[7]=R.elements[0],b.__data[8]=R.elements[6],b.__data[9]=R.elements[7],b.__data[10]=R.elements[8],b.__data[11]=R.elements[0]):(R.toArray(b.__data,D),D+=I.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(35345,T,b.__data)}}e.bindBuffer(35345,null)}function d(v,x,y){const M=v.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const w=Array.isArray(M)?M:[M],_=[];for(let b=0;b<w.length;b++)_.push(w[b].clone());y[x]=_}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const w=Array.isArray(y[x])?y[x]:[y[x]],_=Array.isArray(M)?M:[M];for(let b=0;b<w.length;b++){const T=w[b];if(T.equals(_[b])===!1)return T.copy(_[b]),!0}}return!1}function f(v){const x=v.uniforms;let y=0;const M=16;let w=0;for(let _=0,b=x.length;_<b;_++){const T=x[_],S={boundary:0,storage:0},D=Array.isArray(T.value)?T.value:[T.value];for(let L=0,R=D.length;L<R;L++){const I=D[L],W=m(I);S.boundary+=W.boundary,S.storage+=W.storage}if(T.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,_>0){w=y%M;const L=M-w;w!==0&&L-S.boundary<0&&(y+=M-w,T.__offset=y)}y+=S.storage}return w=y%M,w>0&&(y+=M-w),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),e.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function g(){for(const v in n)e.deleteBuffer(n[v]);s=[],n={},r={}}return{bind:o,update:c,dispose:g}}function qw(){const e=eo("canvas");return e.style.display="block",e}function Xw(e={}){this.isWebGLRenderer=!0;const A=e.canvas!==void 0?e.canvas:qw(),t=e.context!==void 0?e.context:null,i=e.depth!==void 0?e.depth:!0,n=e.stencil!==void 0?e.stencil:!0,r=e.antialias!==void 0?e.antialias:!1,s=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,a=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,o=e.powerPreference!==void 0?e.powerPreference:"default",c=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=e.alpha!==void 0?e.alpha:!1;let l=null,h=null;const d=[],f=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const m=this;let p=!1,g=0,v=0,x=null,y=-1,M=null;const w=new $A,_=new $A;let b=null,T=A.width,S=A.height,D=1,L=null,R=null;const I=new $A(0,0,T,S),W=new $A(0,0,T,S);let eA=!1;const F=new fh;let V=!1,J=!1,U=null;const B=new GA,N=new Z,k=new E,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return x===null?D:1}let G=t;function tA(P,iA){for(let aA=0;aA<P.length;aA++){const $=P[aA],lA=A.getContext($,iA);if(lA!==null)return lA}return null}try{const P={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:o,failIfMajorPerformanceCaveat:c};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${lh}`),A.addEventListener("webglcontextlost",RA,!1),A.addEventListener("webglcontextrestored",PA,!1),A.addEventListener("webglcontextcreationerror",JA,!1),G===null){const iA=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&iA.shift(),G=tA(iA,P),G===null)throw tA(iA)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let X,AA,K,pA,uA,cA,mA,fA,gA,CA,SA,MA,de,NA,O,C,rA,dA,vA,bA,UA,z,Y,xA;function wA(){X=new ib(G),AA=new J1(G,X,e),X.init(AA),z=new Uw(G,X,AA),K=new zw(G,X,AA),pA=new sb,uA=new Sw,cA=new Fw(G,X,K,uA,AA,z,pA),mA=new $1(m),fA=new tb(m),gA=new py(G,AA),Y=new Q1(G,X,gA,AA),CA=new nb(G,gA,pA,Y),SA=new cb(G,CA,gA,pA),vA=new lb(G,AA,cA),C=new K1(uA),MA=new ww(m,mA,fA,X,AA,Y,C),de=new Ww(m,uA),NA=new _w,O=new Pw(X,AA),dA=new Y1(m,mA,fA,K,SA,u,s),rA=new Bw(m,SA,AA),xA=new jw(G,pA,AA,K),bA=new Z1(G,X,pA,AA),UA=new rb(G,X,pA,AA),pA.programs=MA.programs,m.capabilities=AA,m.extensions=X,m.properties=uA,m.renderLists=NA,m.shadowMap=rA,m.state=K,m.info=pA}wA();const _A=new Hw(m,G);this.xr=_A,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const P=X.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=X.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(T,S,!1))},this.getSize=function(P){return P.set(T,S)},this.setSize=function(P,iA,aA){if(_A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=P,S=iA,A.width=Math.floor(P*D),A.height=Math.floor(iA*D),aA!==!1&&(A.style.width=P+"px",A.style.height=iA+"px"),this.setViewport(0,0,P,iA)},this.getDrawingBufferSize=function(P){return P.set(T*D,S*D).floor()},this.setDrawingBufferSize=function(P,iA,aA){T=P,S=iA,D=aA,A.width=Math.floor(P*aA),A.height=Math.floor(iA*aA),this.setViewport(0,0,P,iA)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(I)},this.setViewport=function(P,iA,aA,$){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,iA,aA,$),K.viewport(w.copy(I).multiplyScalar(D).floor())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,iA,aA,$){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,iA,aA,$),K.scissor(_.copy(W).multiplyScalar(D).floor())},this.getScissorTest=function(){return eA},this.setScissorTest=function(P){K.setScissorTest(eA=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){R=P},this.getClearColor=function(P){return P.copy(dA.getClearColor())},this.setClearColor=function(){dA.setClearColor.apply(dA,arguments)},this.getClearAlpha=function(){return dA.getClearAlpha()},this.setClearAlpha=function(){dA.setClearAlpha.apply(dA,arguments)},this.clear=function(P=!0,iA=!0,aA=!0){let $=0;P&&($|=16384),iA&&($|=256),aA&&($|=1024),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",RA,!1),A.removeEventListener("webglcontextrestored",PA,!1),A.removeEventListener("webglcontextcreationerror",JA,!1),NA.dispose(),O.dispose(),uA.dispose(),mA.dispose(),fA.dispose(),SA.dispose(),Y.dispose(),xA.dispose(),MA.dispose(),_A.dispose(),_A.removeEventListener("sessionstart",EA),_A.removeEventListener("sessionend",IA),U&&(U.dispose(),U=null),ee.stop()};function RA(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function PA(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const P=pA.autoReset,iA=rA.enabled,aA=rA.autoUpdate,$=rA.needsUpdate,lA=rA.type;wA(),pA.autoReset=P,rA.enabled=iA,rA.autoUpdate=aA,rA.needsUpdate=$,rA.type=lA}function JA(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){const iA=P.target;iA.removeEventListener("dispose",Ae),ae(iA)}function ae(P){j(P),uA.remove(P)}function j(P){const iA=uA.get(P).programs;iA!==void 0&&(iA.forEach(function(aA){MA.releaseProgram(aA)}),P.isShaderMaterial&&MA.releaseShaderCache(P))}this.renderBufferDirect=function(P,iA,aA,$,lA,kA){iA===null&&(iA=H);const qA=lA.isMesh&&lA.matrixWorld.determinant()<0,YA=N0(P,iA,aA,$,lA);K.setMaterial($,qA);let KA=aA.index,re=1;$.wireframe===!0&&(KA=CA.getWireframeAttribute(aA),re=2);const te=aA.drawRange,ie=aA.attributes.position;let De=te.start*re,ut=(te.start+te.count)*re;kA!==null&&(De=Math.max(De,kA.start*re),ut=Math.min(ut,(kA.start+kA.count)*re)),KA!==null?(De=Math.max(De,0),ut=Math.min(ut,KA.count)):ie!=null&&(De=Math.max(De,0),ut=Math.min(ut,ie.count));const vi=ut-De;if(vi<0||vi===1/0)return;Y.setup(lA,$,YA,aA,KA);let rn,Pe=bA;if(KA!==null&&(rn=gA.get(KA),Pe=UA,Pe.setIndex(rn)),lA.isMesh)$.wireframe===!0?(K.setLineWidth($.wireframeLinewidth*q()),Pe.setMode(1)):Pe.setMode(4);else if(lA.isLine){let ne=$.linewidth;ne===void 0&&(ne=1),K.setLineWidth(ne*q()),lA.isLineSegments?Pe.setMode(1):lA.isLineLoop?Pe.setMode(2):Pe.setMode(3)}else lA.isPoints?Pe.setMode(0):lA.isSprite&&Pe.setMode(4);if(lA.isInstancedMesh)Pe.renderInstances(De,vi,lA.count);else if(aA.isInstancedBufferGeometry){const ne=aA._maxInstanceCount!==void 0?aA._maxInstanceCount:1/0,Jo=Math.min(aA.instanceCount,ne);Pe.renderInstances(De,vi,Jo)}else Pe.render(De,vi)},this.compile=function(P,iA){function aA($,lA,kA){$.transparent===!0&&$.side===ea?($.side=Ot,$.needsUpdate=!0,xt($,lA,kA),$.side=Pn,$.needsUpdate=!0,xt($,lA,kA),$.side=ea):xt($,lA,kA)}h=O.get(P),h.init(),f.push(h),P.traverseVisible(function($){$.isLight&&$.layers.test(iA.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights(m.physicallyCorrectLights),P.traverse(function($){const lA=$.material;if(lA)if(Array.isArray(lA))for(let kA=0;kA<lA.length;kA++){const qA=lA[kA];aA(qA,P,$)}else aA(lA,P,$)}),f.pop(),h=null};let sA=null;function hA(P){sA&&sA(P)}function EA(){ee.stop()}function IA(){ee.start()}const ee=new dm;ee.setAnimationLoop(hA),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(P){sA=P,_A.setAnimationLoop(P),P===null?ee.stop():ee.start()},_A.addEventListener("sessionstart",EA),_A.addEventListener("sessionend",IA),this.render=function(P,iA){if(iA!==void 0&&iA.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),iA.parent===null&&iA.matrixWorldAutoUpdate===!0&&iA.updateMatrixWorld(),_A.enabled===!0&&_A.isPresenting===!0&&(_A.cameraAutoUpdate===!0&&_A.updateCamera(iA),iA=_A.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,iA,x),h=O.get(P,f.length),h.init(),f.push(h),B.multiplyMatrices(iA.projectionMatrix,iA.matrixWorldInverse),F.setFromProjectionMatrix(B),J=this.localClippingEnabled,V=C.init(this.clippingPlanes,J,iA),l=NA.get(P,d.length),l.init(),d.push(l),Ge(P,iA,0,m.sortObjects),l.finish(),m.sortObjects===!0&&l.sort(L,R),V===!0&&C.beginShadows();const aA=h.state.shadowsArray;if(rA.render(aA,P,iA),V===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),dA.render(l,P),h.setupLights(m.physicallyCorrectLights),iA.isArrayCamera){const $=iA.cameras;for(let lA=0,kA=$.length;lA<kA;lA++){const qA=$[lA];Qe(l,P,qA,qA.viewport)}}else Qe(l,P,iA);x!==null&&(cA.updateMultisampleRenderTarget(x),cA.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(m,P,iA),Y.resetDefaultState(),y=-1,M=null,f.pop(),f.length>0?h=f[f.length-1]:h=null,d.pop(),d.length>0?l=d[d.length-1]:l=null};function Ge(P,iA,aA,$){if(P.visible===!1)return;if(P.layers.test(iA.layers)){if(P.isGroup)aA=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(iA);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||F.intersectsSprite(P)){$&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);const qA=SA.update(P),YA=P.material;YA.visible&&l.push(P,qA,YA,aA,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==pA.render.frame&&(P.skeleton.update(),P.skeleton.frame=pA.render.frame),!P.frustumCulled||F.intersectsObject(P))){$&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);const qA=SA.update(P),YA=P.material;if(Array.isArray(YA)){const KA=qA.groups;for(let re=0,te=KA.length;re<te;re++){const ie=KA[re],De=YA[ie.materialIndex];De&&De.visible&&l.push(P,qA,De,aA,k.z,ie)}}else YA.visible&&l.push(P,qA,YA,aA,k.z,null)}}const kA=P.children;for(let qA=0,YA=kA.length;qA<YA;qA++)Ge(kA[qA],iA,aA,$)}function Qe(P,iA,aA,$){const lA=P.opaque,kA=P.transmissive,qA=P.transparent;h.setupLightsView(aA),kA.length>0&&nn(lA,iA,aA),$&&K.viewport(w.copy($)),lA.length>0&&we(lA,iA,aA),kA.length>0&&we(kA,iA,aA),qA.length>0&&we(qA,iA,aA),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function nn(P,iA,aA){const $=AA.isWebGL2;U===null&&(U=new Nn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Os:In,minFilter:Ps,samples:$&&r===!0?4:0})),m.getDrawingBufferSize(N),$?U.setSize(N.x,N.y):U.setSize(Ao(N.x),Ao(N.y));const lA=m.getRenderTarget();m.setRenderTarget(U),m.clear();const kA=m.toneMapping;m.toneMapping=Li,we(P,iA,aA),m.toneMapping=kA,cA.updateMultisampleRenderTarget(U),cA.updateRenderTargetMipmap(U),m.setRenderTarget(lA)}function we(P,iA,aA){const $=iA.isScene===!0?iA.overrideMaterial:null;for(let lA=0,kA=P.length;lA<kA;lA++){const qA=P[lA],YA=qA.object,KA=qA.geometry,re=$===null?qA.material:$,te=qA.group;YA.layers.test(aA.layers)&&gi(YA,iA,aA,KA,re,te)}}function gi(P,iA,aA,$,lA,kA){P.onBeforeRender(m,iA,aA,$,lA,kA),P.modelViewMatrix.multiplyMatrices(aA.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),lA.onBeforeRender(m,iA,aA,$,P,kA),lA.transparent===!0&&lA.side===ea?(lA.side=Ot,lA.needsUpdate=!0,m.renderBufferDirect(aA,iA,$,lA,P,kA),lA.side=Pn,lA.needsUpdate=!0,m.renderBufferDirect(aA,iA,$,lA,P,kA),lA.side=ea):m.renderBufferDirect(aA,iA,$,lA,P,kA),P.onAfterRender(m,iA,aA,$,lA,kA)}function xt(P,iA,aA){iA.isScene!==!0&&(iA=H);const $=uA.get(P),lA=h.state.lights,kA=h.state.shadowsArray,qA=lA.state.version,YA=MA.getParameters(P,lA.state,kA,iA,aA),KA=MA.getProgramCacheKey(YA);let re=$.programs;$.environment=P.isMeshStandardMaterial?iA.environment:null,$.fog=iA.fog,$.envMap=(P.isMeshStandardMaterial?fA:mA).get(P.envMap||$.environment),re===void 0&&(P.addEventListener("dispose",Ae),re=new Map,$.programs=re);let te=re.get(KA);if(te!==void 0){if($.currentProgram===te&&$.lightsStateVersion===qA)return gu(P,YA),te}else YA.uniforms=MA.getUniforms(P),P.onBuild(aA,YA,m),P.onBeforeCompile(YA,m),te=MA.acquireProgram(YA,KA),re.set(KA,te),$.uniforms=YA.uniforms;const ie=$.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ie.clippingPlanes=C.uniform),gu(P,YA),$.needsLights=z0(P),$.lightsStateVersion=qA,$.needsLights&&(ie.ambientLightColor.value=lA.state.ambient,ie.lightProbe.value=lA.state.probe,ie.directionalLights.value=lA.state.directional,ie.directionalLightShadows.value=lA.state.directionalShadow,ie.spotLights.value=lA.state.spot,ie.spotLightShadows.value=lA.state.spotShadow,ie.rectAreaLights.value=lA.state.rectArea,ie.ltc_1.value=lA.state.rectAreaLTC1,ie.ltc_2.value=lA.state.rectAreaLTC2,ie.pointLights.value=lA.state.point,ie.pointLightShadows.value=lA.state.pointShadow,ie.hemisphereLights.value=lA.state.hemi,ie.directionalShadowMap.value=lA.state.directionalShadowMap,ie.directionalShadowMatrix.value=lA.state.directionalShadowMatrix,ie.spotShadowMap.value=lA.state.spotShadowMap,ie.spotLightMatrix.value=lA.state.spotLightMatrix,ie.spotLightMap.value=lA.state.spotLightMap,ie.pointShadowMap.value=lA.state.pointShadowMap,ie.pointShadowMatrix.value=lA.state.pointShadowMatrix);const De=te.getUniforms(),ut=Xa.seqWithValue(De.seq,ie);return $.currentProgram=te,$.uniformsList=ut,te}function gu(P,iA){const aA=uA.get(P);aA.outputEncoding=iA.outputEncoding,aA.instancing=iA.instancing,aA.skinning=iA.skinning,aA.morphTargets=iA.morphTargets,aA.morphNormals=iA.morphNormals,aA.morphColors=iA.morphColors,aA.morphTargetsCount=iA.morphTargetsCount,aA.numClippingPlanes=iA.numClippingPlanes,aA.numIntersection=iA.numClipIntersection,aA.vertexAlphas=iA.vertexAlphas,aA.vertexTangents=iA.vertexTangents,aA.toneMapping=iA.toneMapping}function N0(P,iA,aA,$,lA){iA.isScene!==!0&&(iA=H),cA.resetTextureUnits();const kA=iA.fog,qA=$.isMeshStandardMaterial?iA.environment:null,YA=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:di,KA=($.isMeshStandardMaterial?fA:mA).get($.envMap||qA),re=$.vertexColors===!0&&!!aA.attributes.color&&aA.attributes.color.itemSize===4,te=!!$.normalMap&&!!aA.attributes.tangent,ie=!!aA.morphAttributes.position,De=!!aA.morphAttributes.normal,ut=!!aA.morphAttributes.color,vi=$.toneMapped?m.toneMapping:Li,rn=aA.morphAttributes.position||aA.morphAttributes.normal||aA.morphAttributes.color,Pe=rn!==void 0?rn.length:0,ne=uA.get($),Jo=h.state.lights;if(V===!0&&(J===!0||P!==M)){const dt=P===M&&$.id===y;C.setState($,P,dt)}let Ve=!1;$.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Jo.state.version||ne.outputEncoding!==YA||lA.isInstancedMesh&&ne.instancing===!1||!lA.isInstancedMesh&&ne.instancing===!0||lA.isSkinnedMesh&&ne.skinning===!1||!lA.isSkinnedMesh&&ne.skinning===!0||ne.envMap!==KA||$.fog===!0&&ne.fog!==kA||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==C.numPlanes||ne.numIntersection!==C.numIntersection)||ne.vertexAlphas!==re||ne.vertexTangents!==te||ne.morphTargets!==ie||ne.morphNormals!==De||ne.morphColors!==ut||ne.toneMapping!==vi||AA.isWebGL2===!0&&ne.morphTargetsCount!==Pe)&&(Ve=!0):(Ve=!0,ne.__version=$.version);let sn=ne.currentProgram;Ve===!0&&(sn=xt($,iA,lA));let vu=!1,Zr=!1,Ko=!1;const $e=sn.getUniforms(),an=ne.uniforms;if(K.useProgram(sn.program)&&(vu=!0,Zr=!0,Ko=!0),$.id!==y&&(y=$.id,Zr=!0),vu||M!==P){if($e.setValue(G,"projectionMatrix",P.projectionMatrix),AA.logarithmicDepthBuffer&&$e.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,Zr=!0,Ko=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const dt=$e.map.cameraPosition;dt!==void 0&&dt.setValue(G,k.setFromMatrixPosition(P.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&$e.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||lA.isSkinnedMesh)&&$e.setValue(G,"viewMatrix",P.matrixWorldInverse)}if(lA.isSkinnedMesh){$e.setOptional(G,lA,"bindMatrix"),$e.setOptional(G,lA,"bindMatrixInverse");const dt=lA.skeleton;dt&&(AA.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),$e.setValue(G,"boneTexture",dt.boneTexture,cA),$e.setValue(G,"boneTextureSize",dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $o=aA.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&AA.isWebGL2===!0)&&vA.update(lA,aA,$,sn),(Zr||ne.receiveShadow!==lA.receiveShadow)&&(ne.receiveShadow=lA.receiveShadow,$e.setValue(G,"receiveShadow",lA.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(an.envMap.value=KA,an.flipEnvMap.value=KA.isCubeTexture&&KA.isRenderTargetTexture===!1?-1:1),Zr&&($e.setValue(G,"toneMappingExposure",m.toneMappingExposure),ne.needsLights&&B0(an,Ko),kA&&$.fog===!0&&de.refreshFogUniforms(an,kA),de.refreshMaterialUniforms(an,$,D,S,U),Xa.upload(G,ne.uniformsList,an,cA)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xa.upload(G,ne.uniformsList,an,cA),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&$e.setValue(G,"center",lA.center),$e.setValue(G,"modelViewMatrix",lA.modelViewMatrix),$e.setValue(G,"normalMatrix",lA.normalMatrix),$e.setValue(G,"modelMatrix",lA.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const dt=$.uniformsGroups;for(let Al=0,F0=dt.length;Al<F0;Al++)if(AA.isWebGL2){const yu=dt[Al];xA.update(yu,sn),xA.bind(yu,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function B0(P,iA){P.ambientLightColor.needsUpdate=iA,P.lightProbe.needsUpdate=iA,P.directionalLights.needsUpdate=iA,P.directionalLightShadows.needsUpdate=iA,P.pointLights.needsUpdate=iA,P.pointLightShadows.needsUpdate=iA,P.spotLights.needsUpdate=iA,P.spotLightShadows.needsUpdate=iA,P.rectAreaLights.needsUpdate=iA,P.hemisphereLights.needsUpdate=iA}function z0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(P,iA,aA){uA.get(P.texture).__webglTexture=iA,uA.get(P.depthTexture).__webglTexture=aA;const $=uA.get(P);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=aA===void 0,$.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,iA){const aA=uA.get(P);aA.__webglFramebuffer=iA,aA.__useDefaultFramebuffer=iA===void 0},this.setRenderTarget=function(P,iA=0,aA=0){x=P,g=iA,v=aA;let $=!0,lA=null,kA=!1,qA=!1;if(P){const KA=uA.get(P);KA.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),$=!1):KA.__webglFramebuffer===void 0?cA.setupRenderTarget(P):KA.__hasExternalTextures&&cA.rebindTextures(P,uA.get(P.texture).__webglTexture,uA.get(P.depthTexture).__webglTexture);const re=P.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(qA=!0);const te=uA.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(lA=te[iA],kA=!0):AA.isWebGL2&&P.samples>0&&cA.useMultisampledRTT(P)===!1?lA=uA.get(P).__webglMultisampledFramebuffer:lA=te,w.copy(P.viewport),_.copy(P.scissor),b=P.scissorTest}else w.copy(I).multiplyScalar(D).floor(),_.copy(W).multiplyScalar(D).floor(),b=eA;if(K.bindFramebuffer(36160,lA)&&AA.drawBuffers&&$&&K.drawBuffers(P,lA),K.viewport(w),K.scissor(_),K.setScissorTest(b),kA){const KA=uA.get(P.texture);G.framebufferTexture2D(36160,36064,34069+iA,KA.__webglTexture,aA)}else if(qA){const KA=uA.get(P.texture),re=iA||0;G.framebufferTextureLayer(36160,36064,KA.__webglTexture,aA||0,re)}y=-1},this.readRenderTargetPixels=function(P,iA,aA,$,lA,kA,qA){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let YA=uA.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qA!==void 0&&(YA=YA[qA]),YA){K.bindFramebuffer(36160,YA);try{const KA=P.texture,re=KA.format,te=KA.type;if(re!==Ht&&z.convert(re)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=te===Os&&(X.has("EXT_color_buffer_half_float")||AA.isWebGL2&&X.has("EXT_color_buffer_float"));if(te!==In&&z.convert(te)!==G.getParameter(35738)&&!(te===Sn&&(AA.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}iA>=0&&iA<=P.width-$&&aA>=0&&aA<=P.height-lA&&G.readPixels(iA,aA,$,lA,z.convert(re),z.convert(te),kA)}finally{const KA=x!==null?uA.get(x).__webglFramebuffer:null;K.bindFramebuffer(36160,KA)}}},this.copyFramebufferToTexture=function(P,iA,aA=0){const $=Math.pow(2,-aA),lA=Math.floor(iA.image.width*$),kA=Math.floor(iA.image.height*$);cA.setTexture2D(iA,0),G.copyTexSubImage2D(3553,aA,0,0,P.x,P.y,lA,kA),K.unbindTexture()},this.copyTextureToTexture=function(P,iA,aA,$=0){const lA=iA.image.width,kA=iA.image.height,qA=z.convert(aA.format),YA=z.convert(aA.type);cA.setTexture2D(aA,0),G.pixelStorei(37440,aA.flipY),G.pixelStorei(37441,aA.premultiplyAlpha),G.pixelStorei(3317,aA.unpackAlignment),iA.isDataTexture?G.texSubImage2D(3553,$,P.x,P.y,lA,kA,qA,YA,iA.image.data):iA.isCompressedTexture?G.compressedTexSubImage2D(3553,$,P.x,P.y,iA.mipmaps[0].width,iA.mipmaps[0].height,qA,iA.mipmaps[0].data):G.texSubImage2D(3553,$,P.x,P.y,qA,YA,iA.image),$===0&&aA.generateMipmaps&&G.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(P,iA,aA,$,lA=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const kA=P.max.x-P.min.x+1,qA=P.max.y-P.min.y+1,YA=P.max.z-P.min.z+1,KA=z.convert($.format),re=z.convert($.type);let te;if($.isData3DTexture)cA.setTexture3D($,0),te=32879;else if($.isDataArrayTexture)cA.setTexture2DArray($,0),te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,$.flipY),G.pixelStorei(37441,$.premultiplyAlpha),G.pixelStorei(3317,$.unpackAlignment);const ie=G.getParameter(3314),De=G.getParameter(32878),ut=G.getParameter(3316),vi=G.getParameter(3315),rn=G.getParameter(32877),Pe=aA.isCompressedTexture?aA.mipmaps[0]:aA.image;G.pixelStorei(3314,Pe.width),G.pixelStorei(32878,Pe.height),G.pixelStorei(3316,P.min.x),G.pixelStorei(3315,P.min.y),G.pixelStorei(32877,P.min.z),aA.isDataTexture||aA.isData3DTexture?G.texSubImage3D(te,lA,iA.x,iA.y,iA.z,kA,qA,YA,KA,re,Pe.data):aA.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(te,lA,iA.x,iA.y,iA.z,kA,qA,YA,KA,Pe.data)):G.texSubImage3D(te,lA,iA.x,iA.y,iA.z,kA,qA,YA,KA,re,Pe),G.pixelStorei(3314,ie),G.pixelStorei(32878,De),G.pixelStorei(3316,ut),G.pixelStorei(3315,vi),G.pixelStorei(32877,rn),lA===0&&$.generateMipmaps&&G.generateMipmap(te),K.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?cA.setTextureCube(P,0):P.isData3DTexture?cA.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?cA.setTexture2DArray(P,0):cA.setTexture2D(P,0),K.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,K.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yw extends Xw{}Yw.prototype.isWebGL1Renderer=!0;class gh{constructor(A,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new jA(A),this.near=t,this.far=i}clone(){return new gh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Qw extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,t){return super.copy(A,t),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const t=super.toJSON(A);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class Zw{constructor(A,t){this.isInterleavedBuffer=!0,this.array=A,this.stride=t,this.count=A!==void 0?A.length/t:0,this.usage=vc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,t,i){A*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[A+n]=t.array[i+n];return this}set(A,t=0){return this.array.set(A,t),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const et=new E;class to{constructor(A,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let t=0,i=this.data.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(A),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(A){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(A),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(A){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(A),this.setXYZ(t,et.x,et.y,et.z);return this}setX(A,t){return this.normalized&&(t=pe(t,this.array)),this.data.array[A*this.data.stride+this.offset]=t,this}setY(A,t){return this.normalized&&(t=pe(t,this.array)),this.data.array[A*this.data.stride+this.offset+1]=t,this}setZ(A,t){return this.normalized&&(t=pe(t,this.array)),this.data.array[A*this.data.stride+this.offset+2]=t,this}setW(A,t){return this.normalized&&(t=pe(t,this.array)),this.data.array[A*this.data.stride+this.offset+3]=t,this}getX(A){let t=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(A){let t=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(A){let t=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(A){let t=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(A,t,i){return A=A*this.data.stride+this.offset,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array)),this.data.array[A+0]=t,this.data.array[A+1]=i,this}setXYZ(A,t,i,n){return A=A*this.data.stride+this.offset,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),n=pe(n,this.array)),this.data.array[A+0]=t,this.data.array[A+1]=i,this.data.array[A+2]=n,this}setXYZW(A,t,i,n,r){return A=A*this.data.stride+this.offset,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),n=pe(n,this.array),r=pe(r,this.array)),this.data.array[A+0]=t,this.data.array[A+1]=i,this.data.array[A+2]=n,this.data.array[A+3]=r,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new ZA(new this.array.constructor(t),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new to(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jw extends ZA{constructor(A,t,i,n=1){super(A,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}class kn extends kr{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jA(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const Cd=new E,Ld=new E,Dd=new GA,Pl=new Ur,ba=new Qt;class wc extends ue{constructor(A=new VA,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=t,this.updateMorphTargets()}copy(A,t){return super.copy(A,t),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const t=A.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Cd.fromBufferAttribute(t,n-1),Ld.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Cd.distanceTo(Ld);A.setAttribute("lineDistance",new DA(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,t){const i=this.geometry,n=this.matrixWorld,r=A.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(n),ba.radius+=r,A.ray.intersectsSphere(ba)===!1)return;Dd.copy(n).invert(),Pl.copy(A.ray).applyMatrix4(Dd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=new E,u=new E,l=new E,h=new E,d=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const g=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let x=g,y=v-1;x<y;x+=d){const M=f.getX(x),w=f.getX(x+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,w),Pl.distanceSqToSegment(c,u,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);const b=A.ray.origin.distanceTo(h);b<A.near||b>A.far||t.push({distance:b,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let x=g,y=v-1;x<y;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Pl.distanceSqToSegment(c,u,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);const w=A.ray.origin.distanceTo(h);w<A.near||w>A.far||t.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pd=new E,Od=new E;class Xs extends wc{constructor(A,t){super(A,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const t=A.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Pd.fromBufferAttribute(t,n),Od.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Pd.distanceTo(Od);A.setAttribute("lineDistance",new DA(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kw extends Je{constructor(A,t,i,n,r,s,a,o,c){super(A,t,i,n,r,s,a,o,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:at,this.magFilter=r!==void 0?r:at,this.generateMipmaps=!1;const u=this;function l(){u.needsUpdate=!0,A.requestVideoFrameCallback(l)}"requestVideoFrameCallback"in A&&A.requestVideoFrameCallback(l)}clone(){return new this.constructor(this.image).copy(this)}update(){const A=this.image;"requestVideoFrameCallback"in A===!1&&A.readyState>=A.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,t){const i=this.getUtoTmapping(A);return this.getPoint(i,t)}getPoints(A=5){const t=[];for(let i=0;i<=A;i++)t.push(this.getPoint(i/A));return t}getSpacedPoints(A=5){const t=[];for(let i=0;i<=A;i++)t.push(this.getPointAt(i/A));return t}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=A;s++)i=this.getPoint(s/A),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,t){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=A*i[r-1];let a=0,o=r-1,c;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),c=i[n]-s,c<0)a=n+1;else if(c>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const u=i[n],h=i[n+1]-u,d=(s-u)/h;return(n+d)/(r-1)}getTangent(A,t){let n=A-1e-4,r=A+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new Z:new E);return o.copy(a).sub(s).normalize(),o}getTangentAt(A,t){const i=this.getUtoTmapping(A);return this.getTangent(i,t)}computeFrenetFrames(A,t){const i=new E,n=[],r=[],s=[],a=new E,o=new GA;for(let d=0;d<=A;d++){const f=d/A;n[d]=this.getTangentAt(f,new E)}r[0]=new E,s[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),l=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),l<=c&&(c=l,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=A;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ze(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(o.makeRotationAxis(a,f))}s[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(ze(r[0].dot(r[A]),-1,1));d/=A,n[0].dot(a.crossVectors(r[0],r[A]))>0&&(d=-d);for(let f=1;f<=A;f++)r[f].applyMatrix4(o.makeRotationAxis(n[f],d*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class Ro extends fi{constructor(A=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=A,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(A,t){const i=t||new Z,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+A*r;let o=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=o-this.aX,d=c-this.aY;o=h*u-d*l+this.aX,c=h*l+d*u+this.aY}return i.set(o,c)}copy(A){return super.copy(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}toJSON(){const A=super.toJSON();return A.aX=this.aX,A.aY=this.aY,A.xRadius=this.xRadius,A.yRadius=this.yRadius,A.aStartAngle=this.aStartAngle,A.aEndAngle=this.aEndAngle,A.aClockwise=this.aClockwise,A.aRotation=this.aRotation,A}fromJSON(A){return super.fromJSON(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}}class $w extends Ro{constructor(A,t,i,n,r,s){super(A,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let e=0,A=0,t=0,i=0;function n(r,s,a,o){e=r,A=a,t=-3*r+3*s-2*a-o,i=2*r-2*s+a+o}return{initCatmullRom:function(r,s,a,o,c){n(s,a,c*(a-r),c*(o-s))},initNonuniformCatmullRom:function(r,s,a,o,c,u,l){let h=(s-r)/c-(a-r)/(c+u)+(a-s)/u,d=(a-s)/u-(o-s)/(u+l)+(o-a)/l;h*=u,d*=u,n(s,a,h,d)},calc:function(r){const s=r*r,a=s*r;return e+A*r+t*s+i*a}}}const wa=new E,Ol=new vh,Rl=new vh,Il=new vh;class AS extends fi{constructor(A=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=A,this.closed=t,this.curveType=i,this.tension=n}getPoint(A,t=new E){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*A;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let c,u;this.closed||a>0?c=n[(a-1)%r]:(wa.subVectors(n[0],n[1]).add(n[0]),c=wa);const l=n[a%r],h=n[(a+1)%r];if(this.closed||a+2<r?u=n[(a+2)%r]:(wa.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(l),d),m=Math.pow(l.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);m<1e-4&&(m=1),f<1e-4&&(f=m),p<1e-4&&(p=m),Ol.initNonuniformCatmullRom(c.x,l.x,h.x,u.x,f,m,p),Rl.initNonuniformCatmullRom(c.y,l.y,h.y,u.y,f,m,p),Il.initNonuniformCatmullRom(c.z,l.z,h.z,u.z,f,m,p)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,l.x,h.x,u.x,this.tension),Rl.initCatmullRom(c.y,l.y,h.y,u.y,this.tension),Il.initCatmullRom(c.z,l.z,h.z,u.z,this.tension));return i.set(Ol.calc(o),Rl.calc(o),Il.calc(o)),i}copy(A){super.copy(A),this.points=[];for(let t=0,i=A.points.length;t<i;t++){const n=A.points[t];this.points.push(n.clone())}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}toJSON(){const A=super.toJSON();A.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];A.points.push(n.toArray())}return A.closed=this.closed,A.curveType=this.curveType,A.tension=this.tension,A}fromJSON(A){super.fromJSON(A),this.points=[];for(let t=0,i=A.points.length;t<i;t++){const n=A.points[t];this.points.push(new E().fromArray(n))}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}}function Rd(e,A,t,i,n){const r=(i-A)*.5,s=(n-t)*.5,a=e*e,o=e*a;return(2*t-2*i+r+s)*o+(-3*t+3*i-2*r-s)*a+r*e+t}function eS(e,A){const t=1-e;return t*t*A}function tS(e,A){return 2*(1-e)*e*A}function iS(e,A){return e*e*A}function Ts(e,A,t,i){return eS(e,A)+tS(e,t)+iS(e,i)}function nS(e,A){const t=1-e;return t*t*t*A}function rS(e,A){const t=1-e;return 3*t*t*e*A}function sS(e,A){return 3*(1-e)*e*e*A}function aS(e,A){return e*e*e*A}function Es(e,A,t,i,n){return nS(e,A)+rS(e,t)+sS(e,i)+aS(e,n)}class Wt extends fi{constructor(A=new Z,t=new Z,i=new Z,n=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=A,this.v1=t,this.v2=i,this.v3=n}getPoint(A,t=new Z){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Es(A,n.x,r.x,s.x,a.x),Es(A,n.y,r.y,s.y,a.y)),i}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class oS extends fi{constructor(A=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=A,this.v1=t,this.v2=i,this.v3=n}getPoint(A,t=new E){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Es(A,n.x,r.x,s.x,a.x),Es(A,n.y,r.y,s.y,a.y),Es(A,n.z,r.z,s.z,a.z)),i}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class qt extends fi{constructor(A=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=A,this.v2=t}getPoint(A,t=new Z){const i=t;return A===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(A).add(this.v1)),i}getPointAt(A,t){return this.getPoint(A,t)}getTangent(A,t){const i=t||new Z;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class vm extends fi{constructor(A=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=A,this.v2=t}getPoint(A,t=new E){const i=t;return A===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(A).add(this.v1)),i}getPointAt(A,t){return this.getPoint(A,t)}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class Ki extends fi{constructor(A=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=A,this.v1=t,this.v2=i}getPoint(A,t=new Z){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Ts(A,n.x,r.x,s.x),Ts(A,n.y,r.y,s.y)),i}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class lS extends fi{constructor(A=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=A,this.v1=t,this.v2=i}getPoint(A,t=new E){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Ts(A,n.x,r.x,s.x),Ts(A,n.y,r.y,s.y),Ts(A,n.z,r.z,s.z)),i}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class yh extends fi{constructor(A=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=A}getPoint(A,t=new Z){const i=t,n=this.points,r=(n.length-1)*A,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],l=n[s>n.length-3?n.length-1:s+2];return i.set(Rd(a,o.x,c.x,u.x,l.x),Rd(a,o.y,c.y,u.y,l.y)),i}copy(A){super.copy(A),this.points=[];for(let t=0,i=A.points.length;t<i;t++){const n=A.points[t];this.points.push(n.clone())}return this}toJSON(){const A=super.toJSON();A.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];A.points.push(n.toArray())}return A}fromJSON(A){super.fromJSON(A),this.points=[];for(let t=0,i=A.points.length;t<i;t++){const n=A.points[t];this.points.push(new Z().fromArray(n))}return this}}var cS=Object.freeze({__proto__:null,ArcCurve:$w,CatmullRomCurve3:AS,CubicBezierCurve:Wt,CubicBezierCurve3:oS,EllipseCurve:Ro,LineCurve:qt,LineCurve3:vm,QuadraticBezierCurve:Ki,QuadraticBezierCurve3:lS,SplineCurve:yh});class hS extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(A){this.curves.push(A)}closePath(){const A=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);A.equals(t)||this.curves.push(new qt(t,A))}getPoint(A,t){const i=A*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),c=o===0?0:1-s/o;return a.getPointAt(c,t)}r++}return null}getLength(){const A=this.getCurveLengths();return A[A.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const A=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),A.push(t);return this.cacheLengths=A,A}getSpacedPoints(A=40){const t=[];for(let i=0;i<=A;i++)t.push(this.getPoint(i/A));return this.autoClose&&t.push(t[0]),t}getPoints(A=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?A*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?A*s.points.length:A,o=s.getPoints(a);for(let c=0;c<o.length;c++){const u=o[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(A){super.copy(A),this.curves=[];for(let t=0,i=A.curves.length;t<i;t++){const n=A.curves[t];this.curves.push(n.clone())}return this.autoClose=A.autoClose,this}toJSON(){const A=super.toJSON();A.autoClose=this.autoClose,A.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];A.curves.push(n.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.autoClose=A.autoClose,this.curves=[];for(let t=0,i=A.curves.length;t<i;t++){const n=A.curves[t];this.curves.push(new cS[n.type]().fromJSON(n))}return this}}class io extends hS{constructor(A){super(),this.type="Path",this.currentPoint=new Z,A&&this.setFromPoints(A)}setFromPoints(A){this.moveTo(A[0].x,A[0].y);for(let t=1,i=A.length;t<i;t++)this.lineTo(A[t].x,A[t].y);return this}moveTo(A,t){return this.currentPoint.set(A,t),this}lineTo(A,t){const i=new qt(this.currentPoint.clone(),new Z(A,t));return this.curves.push(i),this.currentPoint.set(A,t),this}quadraticCurveTo(A,t,i,n){const r=new Ki(this.currentPoint.clone(),new Z(A,t),new Z(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(A,t,i,n,r,s){const a=new Wt(this.currentPoint.clone(),new Z(A,t),new Z(i,n),new Z(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(A){const t=[this.currentPoint.clone()].concat(A),i=new yh(t);return this.curves.push(i),this.currentPoint.copy(A[A.length-1]),this}arc(A,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(A+a,t+o,i,n,r,s),this}absarc(A,t,i,n,r,s){return this.absellipse(A,t,i,i,n,r,s),this}ellipse(A,t,i,n,r,s,a,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(A+c,t+u,i,n,r,s,a,o),this}absellipse(A,t,i,n,r,s,a,o){const c=new Ro(A,t,i,n,r,s,a,o);if(this.curves.length>0){const l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(A){return super.copy(A),this.currentPoint.copy(A.currentPoint),this}toJSON(){const A=super.toJSON();return A.currentPoint=this.currentPoint.toArray(),A}fromJSON(A){return super.fromJSON(A),this.currentPoint.fromArray(A.currentPoint),this}}class xh extends VA{constructor(A=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:A,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=ze(n,0,Math.PI*2);const r=[],s=[],a=[],o=[],c=[],u=1/t,l=new E,h=new Z,d=new E,f=new E,m=new E;let p=0,g=0;for(let v=0;v<=A.length-1;v++)switch(v){case 0:p=A[v+1].x-A[v].x,g=A[v+1].y-A[v].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case A.length-1:o.push(m.x,m.y,m.z);break;default:p=A[v+1].x-A[v].x,g=A[v+1].y-A[v].y,d.x=g*1,d.y=-p,d.z=g*0,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(f)}for(let v=0;v<=t;v++){const x=i+v*u*n,y=Math.sin(x),M=Math.cos(x);for(let w=0;w<=A.length-1;w++){l.x=A[w].x*y,l.y=A[w].y,l.z=A[w].x*M,s.push(l.x,l.y,l.z),h.x=v/t,h.y=w/(A.length-1),a.push(h.x,h.y);const _=o[3*w+0]*y,b=o[3*w+1],T=o[3*w+0]*M;c.push(_,b,T)}}for(let v=0;v<t;v++)for(let x=0;x<A.length-1;x++){const y=x+v*A.length,M=y,w=y+A.length,_=y+A.length+1,b=y+1;r.push(M,w,b),r.push(_,b,w)}this.setIndex(r),this.setAttribute("position",new DA(s,3)),this.setAttribute("uv",new DA(a,2)),this.setAttribute("normal",new DA(c,3))}static fromJSON(A){return new xh(A.points,A.segments,A.phiStart,A.phiLength)}}class Io extends VA{constructor(A=1,t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:A,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],l=[],h=[],d=[];let f=0;const m=[],p=i/2;let g=0;v(),s===!1&&(A>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new DA(l,3)),this.setAttribute("normal",new DA(h,3)),this.setAttribute("uv",new DA(d,2));function v(){const y=new E,M=new E;let w=0;const _=(t-A)/i;for(let b=0;b<=r;b++){const T=[],S=b/r,D=S*(t-A)+A;for(let L=0;L<=n;L++){const R=L/n,I=R*o+a,W=Math.sin(I),eA=Math.cos(I);M.x=D*W,M.y=-S*i+p,M.z=D*eA,l.push(M.x,M.y,M.z),y.set(W,_,eA).normalize(),h.push(y.x,y.y,y.z),d.push(R,1-S),T.push(f++)}m.push(T)}for(let b=0;b<n;b++)for(let T=0;T<r;T++){const S=m[T][b],D=m[T+1][b],L=m[T+1][b+1],R=m[T][b+1];u.push(S,D,R),u.push(D,L,R),w+=6}c.addGroup(g,w,0),g+=w}function x(y){const M=f,w=new Z,_=new E;let b=0;const T=y===!0?A:t,S=y===!0?1:-1;for(let L=1;L<=n;L++)l.push(0,p*S,0),h.push(0,S,0),d.push(.5,.5),f++;const D=f;for(let L=0;L<=n;L++){const I=L/n*o+a,W=Math.cos(I),eA=Math.sin(I);_.x=T*eA,_.y=p*S,_.z=T*W,l.push(_.x,_.y,_.z),h.push(0,S,0),w.x=W*.5+.5,w.y=eA*.5*S+.5,d.push(w.x,w.y),f++}for(let L=0;L<n;L++){const R=M+L,I=D+L;y===!0?u.push(I,I+1,R):u.push(I+1,I,R),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}static fromJSON(A){return new Io(A.radiusTop,A.radiusBottom,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class bh extends Io{constructor(A=1,t=1,i=32,n=1,r=!1,s=0,a=Math.PI*2){super(0,A,t,i,n,r,s,a),this.type="ConeGeometry",this.parameters={radius:A,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(A){return new bh(A.radius,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class No extends VA{constructor(A=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:t,radius:i,detail:n};const r=[],s=[];a(n),c(i),u(),this.setAttribute("position",new DA(r,3)),this.setAttribute("normal",new DA(r.slice(),3)),this.setAttribute("uv",new DA(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new E,y=new E,M=new E;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],y),d(t[w+2],M),o(x,y,M,v)}function o(v,x,y,M){const w=M+1,_=[];for(let b=0;b<=w;b++){_[b]=[];const T=v.clone().lerp(y,b/w),S=x.clone().lerp(y,b/w),D=w-b;for(let L=0;L<=D;L++)L===0&&b===w?_[b][L]=T:_[b][L]=T.clone().lerp(S,L/D)}for(let b=0;b<w;b++)for(let T=0;T<2*(w-b)-1;T++){const S=Math.floor(T/2);T%2===0?(h(_[b][S+1]),h(_[b+1][S]),h(_[b][S])):(h(_[b][S+1]),h(_[b+1][S+1]),h(_[b+1][S]))}}function c(v){const x=new E;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){const v=new E;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=p(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;s.push(y,1-M)}f(),l()}function l(){for(let v=0;v<s.length;v+=6){const x=s[v+0],y=s[v+2],M=s[v+4],w=Math.max(x,y,M),_=Math.min(x,y,M);w>.9&&_<.1&&(x<.2&&(s[v+0]+=1),y<.2&&(s[v+2]+=1),M<.2&&(s[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=A[y+0],x.y=A[y+1],x.z=A[y+2]}function f(){const v=new E,x=new E,y=new E,M=new E,w=new Z,_=new Z,b=new Z;for(let T=0,S=0;T<r.length;T+=9,S+=6){v.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(s[S+0],s[S+1]),_.set(s[S+2],s[S+3]),b.set(s[S+4],s[S+5]),M.copy(v).add(x).add(y).divideScalar(3);const D=p(M);m(w,S+0,v,D),m(_,S+2,x,D),m(b,S+4,y,D)}}function m(v,x,y,M){M<0&&v.x===1&&(s[x]=v.x-1),y.x===0&&y.z===0&&(s[x]=M/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}static fromJSON(A){return new No(A.vertices,A.indices,A.radius,A.details)}}class wh extends No{constructor(A=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,A,t),this.type="DodecahedronGeometry",this.parameters={radius:A,detail:t}}static fromJSON(A){return new wh(A.radius,A.detail)}}class no extends io{constructor(A){super(A),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(A){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(A);return t}extractPoints(A){return{shape:this.getPoints(A),holes:this.getPointsHoles(A)}}copy(A){super.copy(A),this.holes=[];for(let t=0,i=A.holes.length;t<i;t++){const n=A.holes[t];this.holes.push(n.clone())}return this}toJSON(){const A=super.toJSON();A.uuid=this.uuid,A.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];A.holes.push(n.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.uuid=A.uuid,this.holes=[];for(let t=0,i=A.holes.length;t<i;t++){const n=A.holes[t];this.holes.push(new io().fromJSON(n))}return this}}const uS={triangulate:function(e,A,t=2){const i=A&&A.length,n=i?A[0]*t:e.length;let r=ym(e,0,n,t,!0);const s=[];if(!r||r.next===r.prev)return s;let a,o,c,u,l,h,d;if(i&&(r=gS(e,A,r,t)),e.length>80*t){a=c=e[0],o=u=e[1];for(let f=t;f<n;f+=t)l=e[f],h=e[f+1],l<a&&(a=l),h<o&&(o=h),l>c&&(c=l),h>u&&(u=h);d=Math.max(c-a,u-o),d=d!==0?32767/d:0}return Ns(r,s,t,a,o,d,0),s}};function ym(e,A,t,i,n){let r,s;if(n===CS(e,A,t,i)>0)for(r=A;r<t;r+=i)s=Id(r,e[r],e[r+1],s);else for(r=t-i;r>=A;r-=i)s=Id(r,e[r],e[r+1],s);return s&&Bo(s,s.next)&&(zs(s),s=s.next),s}function Bn(e,A){if(!e)return e;A||(A=e);let t=e,i;do if(i=!1,!t.steiner&&(Bo(t,t.next)||Se(t.prev,t,t.next)===0)){if(zs(t),t=A=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==A);return A}function Ns(e,A,t,i,n,r,s){if(!e)return;!s&&r&&wS(e,i,n,r);let a=e,o,c;for(;e.prev!==e.next;){if(o=e.prev,c=e.next,r?fS(e,i,n,r):dS(e)){A.push(o.i/t|0),A.push(e.i/t|0),A.push(c.i/t|0),zs(e),e=c.next,a=c.next;continue}if(e=c,e===a){s?s===1?(e=pS(Bn(e),A,t),Ns(e,A,t,i,n,r,2)):s===2&&mS(e,A,t,i,n,r):Ns(Bn(e),A,t,i,n,r,1);break}}}function dS(e){const A=e.prev,t=e,i=e.next;if(Se(A,t,i)>=0)return!1;const n=A.x,r=t.x,s=i.x,a=A.y,o=t.y,c=i.y,u=n<r?n<s?n:s:r<s?r:s,l=a<o?a<c?a:c:o<c?o:c,h=n>r?n>s?n:s:r>s?r:s,d=a>o?a>c?a:c:o>c?o:c;let f=i.next;for(;f!==A;){if(f.x>=u&&f.x<=h&&f.y>=l&&f.y<=d&&mr(n,a,r,o,s,c,f.x,f.y)&&Se(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function fS(e,A,t,i){const n=e.prev,r=e,s=e.next;if(Se(n,r,s)>=0)return!1;const a=n.x,o=r.x,c=s.x,u=n.y,l=r.y,h=s.y,d=a<o?a<c?a:c:o<c?o:c,f=u<l?u<h?u:h:l<h?l:h,m=a>o?a>c?a:c:o>c?o:c,p=u>l?u>h?u:h:l>h?l:h,g=Sc(d,f,A,t,i),v=Sc(m,p,A,t,i);let x=e.prevZ,y=e.nextZ;for(;x&&x.z>=g&&y&&y.z<=v;){if(x.x>=d&&x.x<=m&&x.y>=f&&x.y<=p&&x!==n&&x!==s&&mr(a,u,o,l,c,h,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=m&&y.y>=f&&y.y<=p&&y!==n&&y!==s&&mr(a,u,o,l,c,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=m&&x.y>=f&&x.y<=p&&x!==n&&x!==s&&mr(a,u,o,l,c,h,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=m&&y.y>=f&&y.y<=p&&y!==n&&y!==s&&mr(a,u,o,l,c,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pS(e,A,t){let i=e;do{const n=i.prev,r=i.next.next;!Bo(n,r)&&xm(n,i,i.next,r)&&Bs(n,r)&&Bs(r,n)&&(A.push(n.i/t|0),A.push(i.i/t|0),A.push(r.i/t|0),zs(i),zs(i.next),i=e=r),i=i.next}while(i!==e);return Bn(i)}function mS(e,A,t,i,n,r){let s=e;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&_S(s,a)){let o=bm(s,a);s=Bn(s,s.next),o=Bn(o,o.next),Ns(s,A,t,i,n,r,0),Ns(o,A,t,i,n,r,0);return}a=a.next}s=s.next}while(s!==e)}function gS(e,A,t,i){const n=[];let r,s,a,o,c;for(r=0,s=A.length;r<s;r++)a=A[r]*i,o=r<s-1?A[r+1]*i:e.length,c=ym(e,a,o,i,!1),c===c.next&&(c.steiner=!0),n.push(MS(c));for(n.sort(vS),r=0;r<n.length;r++)t=yS(n[r],t);return t}function vS(e,A){return e.x-A.x}function yS(e,A){const t=xS(e,A);if(!t)return A;const i=bm(t,e);return Bn(i,i.next),Bn(t,t.next)}function xS(e,A){let t=A,i=-1/0,n;const r=e.x,s=e.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,n=t.x<t.next.x?t:t.next,h===r))return n}t=t.next}while(t!==A);if(!n)return null;const a=n,o=n.x,c=n.y;let u=1/0,l;t=n;do r>=t.x&&t.x>=o&&r!==t.x&&mr(s<c?r:i,s,o,c,s<c?i:r,s,t.x,t.y)&&(l=Math.abs(s-t.y)/(r-t.x),Bs(t,e)&&(l<u||l===u&&(t.x>n.x||t.x===n.x&&bS(n,t)))&&(n=t,u=l)),t=t.next;while(t!==a);return n}function bS(e,A){return Se(e.prev,e,A.prev)<0&&Se(A.next,e,e.next)<0}function wS(e,A,t,i){let n=e;do n.z===0&&(n.z=Sc(n.x,n.y,A,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,SS(n)}function SS(e){let A,t,i,n,r,s,a,o,c=1;do{for(t=e,e=null,r=null,s=0;t;){for(s++,i=t,a=0,A=0;A<c&&(a++,i=i.nextZ,!!i);A++);for(o=c;a>0||o>0&&i;)a!==0&&(o===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,o--),r?r.nextZ=n:e=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(s>1);return e}function Sc(e,A,t,i,n){return e=(e-t)*n|0,A=(A-i)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,A=(A|A<<8)&16711935,A=(A|A<<4)&252645135,A=(A|A<<2)&858993459,A=(A|A<<1)&1431655765,e|A<<1}function MS(e){let A=e,t=e;do(A.x<t.x||A.x===t.x&&A.y<t.y)&&(t=A),A=A.next;while(A!==e);return t}function mr(e,A,t,i,n,r,s,a){return(n-s)*(A-a)>=(e-s)*(r-a)&&(e-s)*(i-a)>=(t-s)*(A-a)&&(t-s)*(r-a)>=(n-s)*(i-a)}function _S(e,A){return e.next.i!==A.i&&e.prev.i!==A.i&&!TS(e,A)&&(Bs(e,A)&&Bs(A,e)&&ES(e,A)&&(Se(e.prev,e,A.prev)||Se(e,A.prev,A))||Bo(e,A)&&Se(e.prev,e,e.next)>0&&Se(A.prev,A,A.next)>0)}function Se(e,A,t){return(A.y-e.y)*(t.x-A.x)-(A.x-e.x)*(t.y-A.y)}function Bo(e,A){return e.x===A.x&&e.y===A.y}function xm(e,A,t,i){const n=Ma(Se(e,A,t)),r=Ma(Se(e,A,i)),s=Ma(Se(t,i,e)),a=Ma(Se(t,i,A));return!!(n!==r&&s!==a||n===0&&Sa(e,t,A)||r===0&&Sa(e,i,A)||s===0&&Sa(t,e,i)||a===0&&Sa(t,A,i))}function Sa(e,A,t){return A.x<=Math.max(e.x,t.x)&&A.x>=Math.min(e.x,t.x)&&A.y<=Math.max(e.y,t.y)&&A.y>=Math.min(e.y,t.y)}function Ma(e){return e>0?1:e<0?-1:0}function TS(e,A){let t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==A.i&&t.next.i!==A.i&&xm(t,t.next,e,A))return!0;t=t.next}while(t!==e);return!1}function Bs(e,A){return Se(e.prev,e,e.next)<0?Se(e,A,e.next)>=0&&Se(e,e.prev,A)>=0:Se(e,A,e.prev)<0||Se(e,e.next,A)<0}function ES(e,A){let t=e,i=!1;const n=(e.x+A.x)/2,r=(e.y+A.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==e);return i}function bm(e,A){const t=new Mc(e.i,e.x,e.y),i=new Mc(A.i,A.x,A.y),n=e.next,r=A.prev;return e.next=A,A.prev=e,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Id(e,A,t,i){const n=new Mc(e,A,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function zs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Mc(e,A,t){this.i=e,this.x=A,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function CS(e,A,t,i){let n=0;for(let r=A,s=t-i;r<t;r+=i)n+=(e[s]-e[r])*(e[r+1]+e[s+1]),s=r;return n}class Sh{static area(A){const t=A.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=A[n].x*A[r].y-A[r].x*A[n].y;return i*.5}static isClockWise(A){return Sh.area(A)<0}static triangulateShape(A,t){const i=[],n=[],r=[];Nd(A),Bd(i,A);let s=A.length;t.forEach(Nd);for(let o=0;o<t.length;o++)n.push(s),s+=t[o].length,Bd(i,t[o]);const a=uS.triangulate(i,n);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}}function Nd(e){const A=e.length;A>2&&e[A-1].equals(e[0])&&e.pop()}function Bd(e,A){for(let t=0;t<A.length;t++)e.push(A[t].x),e.push(A[t].y)}class Mh extends No{constructor(A=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,A,t),this.type="IcosahedronGeometry",this.parameters={radius:A,detail:t}}static fromJSON(A){return new Mh(A.radius,A.detail)}}class zo extends VA{constructor(A=1,t=32,i=16,n=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(s+a,Math.PI);let c=0;const u=[],l=new E,h=new E,d=[],f=[],m=[],p=[];for(let g=0;g<=i;g++){const v=[],x=g/i;let y=0;g==0&&s==0?y=.5/t:g==i&&o==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const w=M/t;l.x=-A*Math.cos(n+w*r)*Math.sin(s+x*a),l.y=A*Math.cos(s+x*a),l.z=A*Math.sin(n+w*r)*Math.sin(s+x*a),f.push(l.x,l.y,l.z),h.copy(l).normalize(),m.push(h.x,h.y,h.z),p.push(w+y,1-x),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){const x=u[g][v+1],y=u[g][v],M=u[g+1][v],w=u[g+1][v+1];(g!==0||s>0)&&d.push(x,y,w),(g!==i-1||o<Math.PI)&&d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new DA(f,3)),this.setAttribute("normal",new DA(m,3)),this.setAttribute("uv",new DA(p,2))}static fromJSON(A){return new zo(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class _h extends VA{constructor(A=1,t=.4,i=64,n=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:A,tube:t,tubularSegments:i,radialSegments:n,p:r,q:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],c=[],u=[],l=new E,h=new E,d=new E,f=new E,m=new E,p=new E,g=new E;for(let x=0;x<=i;++x){const y=x/i*r*Math.PI*2;v(y,r,s,A,d),v(y+.01,r,s,A,f),p.subVectors(f,d),g.addVectors(f,d),m.crossVectors(p,g),g.crossVectors(m,p),m.normalize(),g.normalize();for(let M=0;M<=n;++M){const w=M/n*Math.PI*2,_=-t*Math.cos(w),b=t*Math.sin(w);l.x=d.x+(_*g.x+b*m.x),l.y=d.y+(_*g.y+b*m.y),l.z=d.z+(_*g.z+b*m.z),o.push(l.x,l.y,l.z),h.subVectors(l,d).normalize(),c.push(h.x,h.y,h.z),u.push(x/i),u.push(M/n)}}for(let x=1;x<=i;x++)for(let y=1;y<=n;y++){const M=(n+1)*(x-1)+(y-1),w=(n+1)*x+(y-1),_=(n+1)*x+y,b=(n+1)*(x-1)+y;a.push(M,w,b),a.push(w,_,b)}this.setIndex(a),this.setAttribute("position",new DA(o,3)),this.setAttribute("normal",new DA(c,3)),this.setAttribute("uv",new DA(u,2));function v(x,y,M,w,_){const b=Math.cos(x),T=Math.sin(x),S=M/y*x,D=Math.cos(S);_.x=w*(2+D)*.5*b,_.y=w*(2+D)*T*.5,_.z=w*Math.sin(S)*.5}}static fromJSON(A){return new _h(A.radius,A.tube,A.tubularSegments,A.radialSegments,A.p,A.q)}}class LS extends kr{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rm,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}const zd={enabled:!1,files:{},add:function(e,A){this.enabled!==!1&&(this.files[e]=A)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class DS{constructor(A,t,i){const n=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=A,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,l){return c.push(u,l),this},this.removeHandler=function(u){const l=c.indexOf(u);return l!==-1&&c.splice(l,2),this},this.getHandler=function(u){for(let l=0,h=c.length;l<h;l+=2){const d=c[l],f=c[l+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null}}}const PS=new DS;class Fo{constructor(A){this.manager=A!==void 0?A:PS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,t){const i=this;return new Promise(function(n,r){i.load(A,n,t,r)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const Mi={};class OS extends Error{constructor(A,t){super(A),this.response=t}}class ro extends Fo{constructor(A){super(A)}load(A,t,i,n){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const r=zd.get(A);if(r!==void 0)return this.manager.itemStart(A),setTimeout(()=>{t&&t(r),this.manager.itemEnd(A)},0),r;if(Mi[A]!==void 0){Mi[A].push({onLoad:t,onProgress:i,onError:n});return}Mi[A]=[],Mi[A].push({onLoad:t,onProgress:i,onError:n});const s=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[A],l=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,f=d!==0;let m=0;const p=new ReadableStream({start(g){v();function v(){l.read().then(({done:x,value:y})=>{if(x)g.close();else{m+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:d});for(let w=0,_=u.length;w<_;w++){const b=u[w];b.onProgress&&b.onProgress(M)}g.enqueue(y),v()}})}}});return new Response(p)}else throw new OS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(o){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),h=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(f=>d.decode(f))}}}).then(c=>{zd.add(A,c);const u=Mi[A];delete Mi[A];for(let l=0,h=u.length;l<h;l++){const d=u[l];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mi[A];if(u===void 0)throw this.manager.itemError(A),c;delete Mi[A];for(let l=0,h=u.length;l<h;l++){const d=u[l];d.onError&&d.onError(c)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class Ys extends ue{constructor(A,t=1){super(),this.isLight=!0,this.type="Light",this.color=new jA(A),this.intensity=t}dispose(){}copy(A,t){return super.copy(A,t),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const t=super.toJSON(A);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class RS extends Ys{constructor(A,t,i){super(A,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.groundColor=new jA(t)}copy(A,t){return super.copy(A,t),this.groundColor.copy(A.groundColor),this}}const Nl=new GA,Fd=new E,Ud=new E;class Th{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new GA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new $A(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const t=this.camera,i=this.matrix;Fd.setFromMatrixPosition(A.matrixWorld),t.position.copy(Fd),Ud.setFromMatrixPosition(A.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class IS extends Th{constructor(){super(new ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const t=this.camera,i=Is*2*A.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=A.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class NS extends Ys{constructor(A,t,i=0,n=Math.PI/3,r=0,s=2){super(A,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.target=new ue,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new IS}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,t){return super.copy(A,t),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const kd=new GA,ns=new E,Bl=new E;class BS extends Th{constructor(){super(new ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new $A(2,1,1,1),new $A(0,1,1,1),new $A(3,1,1,1),new $A(1,1,1,1),new $A(3,0,1,1),new $A(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(A,t=0){const i=this.camera,n=this.matrix,r=A.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ns.setFromMatrixPosition(A.matrixWorld),i.position.copy(ns),Bl.copy(i.position),Bl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bl),i.updateMatrixWorld(),n.makeTranslation(-ns.x,-ns.y,-ns.z),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd)}}class zS extends Ys{constructor(A,t,i=0,n=2){super(A,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new BS}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,t){return super.copy(A,t),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class FS extends Th{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class US extends Ys{constructor(A,t){super(A,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.target=new ue,this.shadow=new FS}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class kS extends VA{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(A){return super.copy(A),this.instanceCount=A.instanceCount,this}toJSON(){const A=super.toJSON();return A.instanceCount=this.instanceCount,A.isInstancedBufferGeometry=!0,A}}class wm extends Fo{constructor(A){super(A)}load(A,t,i,n){const r=this,s=new ro(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(A,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):console.error(o),r.manager.itemError(A)}},i,n)}parse(A){const t={},i={};function n(d,f){if(t[f]!==void 0)return t[f];const p=d.interleavedBuffers[f],g=r(d,p.buffer),v=ta(p.type,g),x=new Zw(v,p.stride);return x.uuid=p.uuid,t[f]=x,x}function r(d,f){if(i[f]!==void 0)return i[f];const p=d.arrayBuffers[f],g=new Uint32Array(p).buffer;return i[f]=g,g}const s=A.isInstancedBufferGeometry?new kS:new VA,a=A.data.index;if(a!==void 0){const d=ta(a.type,a.array);s.setIndex(new ZA(d,1))}const o=A.data.attributes;for(const d in o){const f=o[d];let m;if(f.isInterleavedBufferAttribute){const p=n(A.data,f.data);m=new to(p,f.itemSize,f.offset,f.normalized)}else{const p=ta(f.type,f.array),g=f.isInstancedBufferAttribute?Jw:ZA;m=new g(p,f.itemSize,f.normalized)}f.name!==void 0&&(m.name=f.name),f.usage!==void 0&&m.setUsage(f.usage),f.updateRange!==void 0&&(m.updateRange.offset=f.updateRange.offset,m.updateRange.count=f.updateRange.count),s.setAttribute(d,m)}const c=A.data.morphAttributes;if(c)for(const d in c){const f=c[d],m=[];for(let p=0,g=f.length;p<g;p++){const v=f[p];let x;if(v.isInterleavedBufferAttribute){const y=n(A.data,v.data);x=new to(y,v.itemSize,v.offset,v.normalized)}else{const y=ta(v.type,v.array);x=new ZA(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),m.push(x)}s.morphAttributes[d]=m}A.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const l=A.data.groups||A.data.drawcalls||A.data.offsets;if(l!==void 0)for(let d=0,f=l.length;d!==f;++d){const m=l[d];s.addGroup(m.start,m.count,m.materialIndex)}const h=A.data.boundingSphere;if(h!==void 0){const d=new E;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new Qt(d,h.radius)}return A.name&&(s.name=A.name),A.userData&&(s.userData=A.userData),s}}class GS{constructor(A,t,i=0,n=1/0){this.ray=new Ur(A,t),this.near=i,this.far=n,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,t){this.ray.set(A,t)}setFromCamera(A,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(A,t=!0,i=[]){return _c(A,this,i,t),i.sort(Gd),i}intersectObjects(A,t=!0,i=[]){for(let n=0,r=A.length;n<r;n++)_c(A[n],this,i,t);return i.sort(Gd),i}}function Gd(e,A){return e.distance-A.distance}function _c(e,A,t,i){if(e.layers.test(A.layers)&&e.raycast(A,t),i===!0){const n=e.children;for(let r=0,s=n.length;r<s;r++)_c(n[r],A,t,!0)}}class Vd{constructor(A=1,t=0,i=0){return this.radius=A,this.phi=t,this.theta=i,this}set(A,t,i){return this.radius=A,this.phi=t,this.theta=i,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,t,i){return this.radius=Math.sqrt(A*A+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hd=new Z;class VS{constructor(A=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=A,this.max=t}set(A,t){return this.min.copy(A),this.max.copy(t),this}setFromPoints(A){this.makeEmpty();for(let t=0,i=A.length;t<i;t++)this.expandByPoint(A[t]);return this}setFromCenterAndSize(A,t){const i=Hd.copy(t).multiplyScalar(.5);return this.min.copy(A).sub(i),this.max.copy(A).add(i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(A){return this.isEmpty()?A.set(0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y}getParameter(A,t){return t.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y)}clampPoint(A,t){return t.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return Hd.copy(A).clamp(this.min,this.max).sub(A).length()}intersect(A){return this.min.max(A.min),this.max.min(A.max),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Wd=new E,_a=new E;class HS{constructor(A=new E,t=new E){this.start=A,this.end=t}set(A,t){return this.start.copy(A),this.end.copy(t),this}copy(A){return this.start.copy(A.start),this.end.copy(A.end),this}getCenter(A){return A.addVectors(this.start,this.end).multiplyScalar(.5)}delta(A){return A.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(A,t){return this.delta(t).multiplyScalar(A).add(this.start)}closestPointToPointParameter(A,t){Wd.subVectors(A,this.start),_a.subVectors(this.end,this.start);const i=_a.dot(_a);let r=_a.dot(Wd)/i;return t&&(r=ze(r,0,1)),r}closestPointToPoint(A,t,i){const n=this.closestPointToPointParameter(A,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(A){return this.start.applyMatrix4(A),this.end.applyMatrix4(A),this}equals(A){return A.start.equals(this.start)&&A.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const jd=new E;class WS extends ue{constructor(A,t){super(),this.light=A,this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new VA,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const c=s/o*Math.PI*2,u=a/o*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new DA(n,3));const r=new kn({fog:!1,toneMapped:!1});this.cone=new Xs(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const A=this.light.distance?this.light.distance:1e3,t=A*Math.tan(this.light.angle);this.cone.scale.set(t,t,A),jd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(jd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class jS extends oi{constructor(A,t,i){const n=new zo(t,4,2),r=new Po({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=A,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const qd=new E,Ta=new E,Xd=new E;class qS extends ue{constructor(A,t,i){super(),this.light=A,this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new VA;n.setAttribute("position",new DA([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new kn({fog:!1,toneMapped:!1});this.lightPlane=new wc(n,r),this.add(this.lightPlane),n=new VA,n.setAttribute("position",new DA([0,0,0,0,0,1],3)),this.targetLine=new wc(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),qd.setFromMatrixPosition(this.light.matrixWorld),Ta.setFromMatrixPosition(this.light.target.matrixWorld),Xd.subVectors(Ta,qd),this.lightPlane.lookAt(Ta),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ta),this.targetLine.scale.z=Xd.length()}}const Ea=new E,Me=new js;class so extends Xs{constructor(A){const t=new VA,i=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,m){o(f),o(m)}function o(f){n.push(0,0,0),r.push(0,0,0),s[f]===void 0&&(s[f]=[]),s[f].push(n.length/3-1)}t.setAttribute("position",new DA(n,3)),t.setAttribute("color",new DA(r,3)),super(t,i),this.type="CameraHelper",this.camera=A,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const c=new jA(16755200),u=new jA(16711680),l=new jA(43775),h=new jA(16777215),d=new jA(3355443);this.setColors(c,u,l,h,d)}setColors(A,t,i,n,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,A.r,A.g,A.b),a.setXYZ(1,A.r,A.g,A.b),a.setXYZ(2,A.r,A.g,A.b),a.setXYZ(3,A.r,A.g,A.b),a.setXYZ(4,A.r,A.g,A.b),a.setXYZ(5,A.r,A.g,A.b),a.setXYZ(6,A.r,A.g,A.b),a.setXYZ(7,A.r,A.g,A.b),a.setXYZ(8,A.r,A.g,A.b),a.setXYZ(9,A.r,A.g,A.b),a.setXYZ(10,A.r,A.g,A.b),a.setXYZ(11,A.r,A.g,A.b),a.setXYZ(12,A.r,A.g,A.b),a.setXYZ(13,A.r,A.g,A.b),a.setXYZ(14,A.r,A.g,A.b),a.setXYZ(15,A.r,A.g,A.b),a.setXYZ(16,A.r,A.g,A.b),a.setXYZ(17,A.r,A.g,A.b),a.setXYZ(18,A.r,A.g,A.b),a.setXYZ(19,A.r,A.g,A.b),a.setXYZ(20,A.r,A.g,A.b),a.setXYZ(21,A.r,A.g,A.b),a.setXYZ(22,A.r,A.g,A.b),a.setXYZ(23,A.r,A.g,A.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,i.r,i.g,i.b),a.setXYZ(33,i.r,i.g,i.b),a.setXYZ(34,i.r,i.g,i.b),a.setXYZ(35,i.r,i.g,i.b),a.setXYZ(36,i.r,i.g,i.b),a.setXYZ(37,i.r,i.g,i.b),a.setXYZ(38,n.r,n.g,n.b),a.setXYZ(39,n.r,n.g,n.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const A=this.geometry,t=this.pointMap,i=1,n=1;Me.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ce("c",t,A,Me,0,0,-1),Ce("t",t,A,Me,0,0,1),Ce("n1",t,A,Me,-i,-n,-1),Ce("n2",t,A,Me,i,-n,-1),Ce("n3",t,A,Me,-i,n,-1),Ce("n4",t,A,Me,i,n,-1),Ce("f1",t,A,Me,-i,-n,1),Ce("f2",t,A,Me,i,-n,1),Ce("f3",t,A,Me,-i,n,1),Ce("f4",t,A,Me,i,n,1),Ce("u1",t,A,Me,i*.7,n*1.1,-1),Ce("u2",t,A,Me,-i*.7,n*1.1,-1),Ce("u3",t,A,Me,0,n*2,-1),Ce("cf1",t,A,Me,-i,0,1),Ce("cf2",t,A,Me,i,0,1),Ce("cf3",t,A,Me,0,-n,1),Ce("cf4",t,A,Me,0,n,1),Ce("cn1",t,A,Me,-i,0,-1),Ce("cn2",t,A,Me,i,0,-1),Ce("cn3",t,A,Me,0,-n,-1),Ce("cn4",t,A,Me,0,n,-1),A.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ce(e,A,t,i,n,r,s){Ea.set(n,r,s).unproject(i);const a=A[e];if(a!==void 0){const o=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)o.setXYZ(a[c],Ea.x,Ea.y,Ea.z)}}class ao extends Xs{constructor(A,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new VA;r.setIndex(new ZA(i,1)),r.setAttribute("position",new DA(n,3)),super(r,new kn({color:t,toneMapped:!1})),this.box=A,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(A){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(A))}dispose(){this.geometry.dispose(),this.material.dispose()}}class XS extends Xs{constructor(A=1){const t=[0,0,0,A,0,0,0,0,0,0,A,0,0,0,0,0,0,A],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new VA;n.setAttribute("position",new DA(t,3)),n.setAttribute("color",new DA(i,3));const r=new kn({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(A,t,i){const n=new jA,r=this.geometry.attributes.color.array;return n.set(A),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);const Yd={type:"change"},zl={type:"start"},Qd={type:"end"};class EI extends en{constructor(A,t){super(),this.object=A,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",NA),this._domElementKeyEvents=z},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Yd),i.update(),r=n.NONE},this.update=function(){const z=new E,Y=new Oi().setFromUnitVectors(A.up,new E(0,1,0)),xA=Y.clone().invert(),wA=new E,_A=new Oi,RA=2*Math.PI;return function(){const JA=i.object.position;z.copy(JA).sub(i.target),z.applyQuaternion(Y),a.setFromVector3(z),i.autoRotate&&r===n.NONE&&T(_()),i.enableDamping?(a.theta+=o.theta*i.dampingFactor,a.phi+=o.phi*i.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let Ae=i.minAzimuthAngle,ae=i.maxAzimuthAngle;return isFinite(Ae)&&isFinite(ae)&&(Ae<-Math.PI?Ae+=RA:Ae>Math.PI&&(Ae-=RA),ae<-Math.PI?ae+=RA:ae>Math.PI&&(ae-=RA),Ae<=ae?a.theta=Math.max(Ae,Math.min(ae,a.theta)):a.theta=a.theta>(Ae+ae)/2?Math.max(Ae,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),z.setFromSpherical(a),z.applyQuaternion(xA),JA.copy(i.target).add(z),i.object.lookAt(i.target),i.enableDamping===!0?(o.theta*=1-i.dampingFactor,o.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(o.set(0,0,0),u.set(0,0,0)),c=1,l||wA.distanceToSquared(i.object.position)>s||8*(1-_A.dot(i.object.quaternion))>s?(i.dispatchEvent(Yd),wA.copy(i.object.position),_A.copy(i.object.quaternion),l=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",rA),i.domElement.removeEventListener("pointerdown",mA),i.domElement.removeEventListener("pointercancel",CA),i.domElement.removeEventListener("wheel",de),i.domElement.removeEventListener("pointermove",fA),i.domElement.removeEventListener("pointerup",gA),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",NA)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const s=1e-6,a=new Vd,o=new Vd;let c=1;const u=new E;let l=!1;const h=new Z,d=new Z,f=new Z,m=new Z,p=new Z,g=new Z,v=new Z,x=new Z,y=new Z,M=[],w={};function _(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function T(z){o.theta-=z}function S(z){o.phi-=z}const D=function(){const z=new E;return function(xA,wA){z.setFromMatrixColumn(wA,0),z.multiplyScalar(-xA),u.add(z)}}(),L=function(){const z=new E;return function(xA,wA){i.screenSpacePanning===!0?z.setFromMatrixColumn(wA,1):(z.setFromMatrixColumn(wA,0),z.crossVectors(i.object.up,z)),z.multiplyScalar(xA),u.add(z)}}(),R=function(){const z=new E;return function(xA,wA){const _A=i.domElement;if(i.object.isPerspectiveCamera){const RA=i.object.position;z.copy(RA).sub(i.target);let PA=z.length();PA*=Math.tan(i.object.fov/2*Math.PI/180),D(2*xA*PA/_A.clientHeight,i.object.matrix),L(2*wA*PA/_A.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(xA*(i.object.right-i.object.left)/i.object.zoom/_A.clientWidth,i.object.matrix),L(wA*(i.object.top-i.object.bottom)/i.object.zoom/_A.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(z){i.object.isPerspectiveCamera?c/=z:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*z)),i.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(z){i.object.isPerspectiveCamera?c*=z:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/z)),i.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function eA(z){h.set(z.clientX,z.clientY)}function F(z){v.set(z.clientX,z.clientY)}function V(z){m.set(z.clientX,z.clientY)}function J(z){d.set(z.clientX,z.clientY),f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;T(2*Math.PI*f.x/Y.clientHeight),S(2*Math.PI*f.y/Y.clientHeight),h.copy(d),i.update()}function U(z){x.set(z.clientX,z.clientY),y.subVectors(x,v),y.y>0?I(b()):y.y<0&&W(b()),v.copy(x),i.update()}function B(z){p.set(z.clientX,z.clientY),g.subVectors(p,m).multiplyScalar(i.panSpeed),R(g.x,g.y),m.copy(p),i.update()}function N(z){z.deltaY<0?W(b()):z.deltaY>0&&I(b()),i.update()}function k(z){let Y=!1;switch(z.code){case i.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(-i.keyPanSpeed,0),Y=!0;break}Y&&(z.preventDefault(),i.update())}function H(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),Y=.5*(M[0].pageY+M[1].pageY);h.set(z,Y)}}function q(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),Y=.5*(M[0].pageY+M[1].pageY);m.set(z,Y)}}function G(){const z=M[0].pageX-M[1].pageX,Y=M[0].pageY-M[1].pageY,xA=Math.sqrt(z*z+Y*Y);v.set(0,xA)}function tA(){i.enableZoom&&G(),i.enablePan&&q()}function X(){i.enableZoom&&G(),i.enableRotate&&H()}function AA(z){if(M.length==1)d.set(z.pageX,z.pageY);else{const xA=UA(z),wA=.5*(z.pageX+xA.x),_A=.5*(z.pageY+xA.y);d.set(wA,_A)}f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;T(2*Math.PI*f.x/Y.clientHeight),S(2*Math.PI*f.y/Y.clientHeight),h.copy(d)}function K(z){if(M.length===1)p.set(z.pageX,z.pageY);else{const Y=UA(z),xA=.5*(z.pageX+Y.x),wA=.5*(z.pageY+Y.y);p.set(xA,wA)}g.subVectors(p,m).multiplyScalar(i.panSpeed),R(g.x,g.y),m.copy(p)}function pA(z){const Y=UA(z),xA=z.pageX-Y.x,wA=z.pageY-Y.y,_A=Math.sqrt(xA*xA+wA*wA);x.set(0,_A),y.set(0,Math.pow(x.y/v.y,i.zoomSpeed)),I(y.y),v.copy(x)}function uA(z){i.enableZoom&&pA(z),i.enablePan&&K(z)}function cA(z){i.enableZoom&&pA(z),i.enableRotate&&AA(z)}function mA(z){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(z.pointerId),i.domElement.addEventListener("pointermove",fA),i.domElement.addEventListener("pointerup",gA)),dA(z),z.pointerType==="touch"?O(z):SA(z))}function fA(z){i.enabled!==!1&&(z.pointerType==="touch"?C(z):MA(z))}function gA(z){vA(z),M.length===0&&(i.domElement.releasePointerCapture(z.pointerId),i.domElement.removeEventListener("pointermove",fA),i.domElement.removeEventListener("pointerup",gA)),i.dispatchEvent(Qd),r=n.NONE}function CA(z){vA(z)}function SA(z){let Y;switch(z.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case jn.DOLLY:if(i.enableZoom===!1)return;F(z),r=n.DOLLY;break;case jn.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enablePan===!1)return;V(z),r=n.PAN}else{if(i.enableRotate===!1)return;eA(z),r=n.ROTATE}break;case jn.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enableRotate===!1)return;eA(z),r=n.ROTATE}else{if(i.enablePan===!1)return;V(z),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(zl)}function MA(z){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;J(z);break;case n.DOLLY:if(i.enableZoom===!1)return;U(z);break;case n.PAN:if(i.enablePan===!1)return;B(z);break}}function de(z){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(z.preventDefault(),i.dispatchEvent(zl),N(z),i.dispatchEvent(Qd))}function NA(z){i.enabled===!1||i.enablePan===!1||k(z)}function O(z){switch(bA(z),M.length){case 1:switch(i.touches.ONE){case qn.ROTATE:if(i.enableRotate===!1)return;H(),r=n.TOUCH_ROTATE;break;case qn.PAN:if(i.enablePan===!1)return;q(),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case qn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;tA(),r=n.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(zl)}function C(z){switch(bA(z),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;AA(z),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;K(z),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;uA(z),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;cA(z),i.update();break;default:r=n.NONE}}function rA(z){i.enabled!==!1&&z.preventDefault()}function dA(z){M.push(z)}function vA(z){delete w[z.pointerId];for(let Y=0;Y<M.length;Y++)if(M[Y].pointerId==z.pointerId){M.splice(Y,1);return}}function bA(z){let Y=w[z.pointerId];Y===void 0&&(Y=new Z,w[z.pointerId]=Y),Y.set(z.pageX,z.pageY)}function UA(z){const Y=z.pointerId===M[0].pointerId?M[1]:M[0];return w[Y.pointerId]}i.domElement.addEventListener("contextmenu",rA),i.domElement.addEventListener("pointerdown",mA),i.domElement.addEventListener("pointercancel",CA),i.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}const YS="modulepreload",QS=function(e){return"/"+e},Zd={},ZS=function(A,t,i){if(!t||t.length===0)return A();const n=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=QS(r),r in Zd)return;Zd[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let u=n.length-1;u>=0;u--){const l=n[u];if(l.href===r&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":YS,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((u,l)=>{c.addEventListener("load",u),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>A())};function Sm(e,A=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),n=new Set(Object.keys(e[0].morphAttributes)),r={},s={},a=e[0].morphTargetsRelative,o=new VA;let c=0;for(let u=0;u<e.length;++u){const l=e[u];let h=0;if(t!==(l.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in l.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(l.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==l.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in l.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[d]===void 0&&(s[d]=[]),s[d].push(l.morphAttributes[d])}if(A){let d;if(t)d=l.index.count;else if(l.attributes.position!==void 0)d=l.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,d,u),c+=d}}if(t){let u=0;const l=[];for(let h=0;h<e.length;++h){const d=e[h].index;for(let f=0;f<d.count;++f)l.push(d.getX(f)+u);u+=e[h].attributes.position.count}o.setIndex(l)}for(const u in r){const l=Jd(r[u]);if(!l)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,l)}for(const u in s){const l=s[u][0].length;if(l===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let h=0;h<l;++h){const d=[];for(let m=0;m<s[u].length;++m)d.push(s[u][m][h]);const f=Jd(d);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(f)}}return o}function Jd(e){let A,t,i,n=0;for(let a=0;a<e.length;++a){const o=e[a];if(o.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(A===void 0&&(A=o.array.constructor),A!==o.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=o.itemSize),t!==o.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=o.normalized),i!==o.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;n+=o.array.length}const r=new A(n);let s=0;for(let a=0;a<e.length;++a)r.set(e[a].array,s),s+=e[a].array.length;return new ZA(r,t,i)}const Fl=new WeakMap;class JS extends Fo{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,t,i,n){const r=new ro(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(A,s=>{this.decodeDracoFile(s,t).catch(n)},i,n)}decodeDracoFile(A,t,i,n){const r={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i};return this.decodeGeometry(A,r).then(t)}decodeGeometry(A,t){const i=JSON.stringify(t);if(Fl.has(A)){const o=Fl.get(A);if(o.key===i)return o.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,s=A.byteLength,a=this._getWorker(r,s).then(o=>(n=o,new Promise((c,u)=>{n._callbacks[r]={resolve:c,reject:u},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:A},[A])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),Fl.set(A,{key:i,promise:a}),a}_createGeometry(A){const t=new VA;A.index&&t.setIndex(new ZA(A.index.array,1));for(let i=0;i<A.attributes.length;i++){const n=A.attributes[i],r=n.name,s=n.array,a=n.itemSize;t.setAttribute(r,new ZA(s,a))}return t}_loadLibrary(A,t){const i=new ro(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(A,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return A?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];A||(this.decoderConfig.wasmBinary=i[1]);const r=KS.toString(),s=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`?(i[i.length-1]+=n,n="",r===`
`&&i.push("")):A.getTextWidth(i[i.length-1]+n,e)>e.width&&(i[i.length-1].length&&i.push(""),A.getTextWidth(i[i.length-1]+n,e)>e.width&&(n.length===1?(i[i.length-1]+=n,n=""):(i[i.length-1]+=n.slice(0,-1),n=n[n.length-1],i.push(""))));return i[i.length-1]+=n,i}var su=new Promise(e=>{});function Eo(e,A,t){let i={parameters:e,type:e.type};if(e.type==="VectorGeometry"){let r=Te.createFromState(e.shape,e.width,e.height);i.shape=r}else if(e.type==="NonParametricGeometry")e.data.groups&&e.data.groups.forEach(r=>r.materialIndex=Math.max(r.materialIndex??0,0)),i.geometry=new wm().parse(e);else{if(e.type==="SubdivGeometry")return new rt(e,t);if(e.type==="TextGeometry")return new zg(e,A)}let n;try{n=wp(i)}catch(r){console.error(r)}if(!n){let r=Te.createFromState(mo.defaultData(),100,100);i.shape=r,n=wp(i)}return n}var dO=new GA;function eh(e,A,t,i){let n=e.position.array,r=e.normal.array,s=dO.makeScale(A,t,i).invert().elements,a,o,c;for(var u=0,l=n.length;u<l;u+=3)n[u]*=A,n[u+1]*=t,n[u+2]*=i,a=r[u],o=r[u+1],c=r[u+2],r[u]=s[0]*a+s[4]*o+s[8]*c,r[u+1]=s[1]*a+s[5]*o+s[9]*c,r[u+2]=s[2]*a+s[6]*o+s[10]*c;e.position.needsUpdate=!0,e.normal.needsUpdate=!0}var Na=new Nt,or=new E,zA;su.then(e=>{zA=e});var vp=new Float32Array([10,10,0,-10,10,0,-10,-10,0,10,-10,0]),yp=new Uint32Array([0,1,2,3]),xp=new Uint8Array([4]),rt=class extends VA{constructor(e,A){super(),this.data=e,this.flatShading=A,this.subdivPointer=0,this.rebuild(),this.freeSubdivPointer()}mutateDirectlyScaleBaked(e,A){this.freeSubdivPointer();let t=this.data.scaleBaked,i=br.div(A,t);this.subdividedGeometry&&eh(this.subdividedGeometry.attributes,...i),this.originalGeometry&&eh(this.originalGeometry.attributes,...i),this.data=e;let n=this.userData.parameters;this.userData.parameters={width:n.width*i[0],height:n.height*i[1],depth:n.depth*i[2]},this.originalGeometry.boundingSphere.center.multiply(or.fromArray(i));let r=or.set(n.width,n.height,n.depth).length();this.originalGeometry.boundingSphere.radius=r/2}ensureSubdivPointer(){return this.subdivPointer===0&&this.rebuild(),this.subdivPointer}rebuild(){let e,A,t;try{({originalGeometry:e,subdividedGeometry:A,subdivPointer:t}=rt.build(this.data,void 0,!this.flatShading,void 0))}catch{e=new Zt(100,100,100),t=0}this.subdivPointer=t,this.originalGeometry=e,this.subdividedGeometry=A??void 0;let i=this.subdividedGeometry??this.originalGeometry;Object.assign(this,i),this.calcBoundingBox()}freeSubdivPointer(){this.subdivPointer&&(rt.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0)}dispose(){super.dispose(),this.freeSubdivPointer()}calcBoundingBox(){let e=this.originalGeometry;e.boundingSphere===null&&(e.boundingSphere=new Qt,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=e.boundingSphere));let A=e.attributes.position,t=e.boundingSphere.center;Na.setFromBufferAttribute(A),Na.getCenter(t),e.boundingSphere.radius=t.distanceTo(Na.max),isNaN(e.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),Na.getSize(or);let i={width:or.x,height:or.y,depth:or.z};return this.userData.parameters=i,i}static build(e,A,t,i){let n,r,s,a=e?.phongAngle??35;t===!1&&(a=-1),A&&(zA.free_bvh(A),zA.free_subdivision_surface(A));try{n=rt.allocate(e,i)}catch(o){console.error(o,e),n=rt.allocate({positionWASM:vp,indexWASM:yp,verticesPerFaceWASM:xp},i)}if(zA.set_destination_refinement_level(n,0),r=rt.buildLevel(n,!0,a),e.subdivisions>0)try{zA.set_destination_refinement_level(n,e.subdivisions),s=rt.buildLevel(n,!1,a)}catch{try{zA.set_destination_refinement_level(n,e.subdivisions-1),s=rt.buildLevel(n,!1,a)}catch{s=null}}else s=null;return{subdivPointer:n,originalGeometry:r,subdividedGeometry:s}}static primitiveToQuads(e,A,t){e.widthSegments>16&&(e.widthSegments=16),e.heightSegments>16&&(e.heightSegments=16),e.depthSegments>16&&(e.depthSegments=16),e.radialSegments>16&&(e.radialSegments=16),e.type==="DodecahedronGeometry"&&(e.detail=0);let i=e.shape!==void 0?A.geometry:Eo(e,t,!1),n,r,s,a;({positions:n,triIndices:a}=Fg(i.getAttribute("position"),i.getIndex()));let o;if(e.type==="CylinderGeometry"&&e.cornerRadius===0&&e.hollow===0&&e.openEnded===!1){let c=e.radialSegments*e.heightSegments*3*2,u=c+e.radialSegments*3;o=[c,u]}return{indices:r,verticesPerFace:s}=Ug(n,a,i,o),{positions:n,indices:r,verticesPerFace:s}}static allocate(e,A){let t,i,n,r=[],s=[];e.positionWASM&&e.positionWASM.length>0?(t=e.positionWASM,i=e.indexWASM,n=e.verticesPerFaceWASM):(t=vp,i=yp,n=xp);let a=t.length,o=i.length,c=n.length,u=t.length+r.length+s.length,l=i.length+n.length,h=u*Float32Array.BYTES_PER_ELEMENT+l*Uint32Array.BYTES_PER_ELEMENT,d=u*Float32Array.BYTES_PER_ELEMENT,f=zA._malloc(h),m=new Float32Array(zA.HEAPF32.buffer,f,u),p=new Uint32Array(zA.HEAPU32.buffer,f+d,l);m.set(t,0),m.set(r,t.length),m.set(s,t.length+r.length),p.set(i,0),p.set(n,i.length);let g;e?.scaleBaked?.some(x=>x!==1)&&(g=new GA().makeScale(...e.scaleBaked)),A&&(g?g.premultiply(A):g=A);let v=g?zA.alloc_subdivision_surface2(f,a,f+d,o,f+d+i.length*Uint32Array.BYTES_PER_ELEMENT,c,g.elements):zA.alloc_subdivision_surface(f,a,f+d,o,f+d+i.length*Uint32Array.BYTES_PER_ELEMENT,c);return zA._free(f),v}static buildLevel(e,A,t,i,n){let r=n?zA.get_mesh_data2(e,A?zA.Level.CONTROL:zA.Level.REFINED,t,n.elements):zA.get_mesh_data(e,A?zA.Level.CONTROL:zA.Level.REFINED,t),s=8,a=zA.HEAPU32.subarray(r>>2,(r>>2)+s),o=a.subarray(4,4+4),c=0,u=zA.HEAPU32[a[c]>>2],l=zA.HEAPF32.subarray(u>>2,(u>>2)+o[c]);c++;let h=zA.HEAPU32[a[c]>>2],d=zA.HEAPF32.subarray(h>>2,(h>>2)+o[c]);c++;let f=zA.HEAPU32[a[c]>>2],m=zA.HEAPU32.subarray(f>>2,(f>>2)+o[c]);c++;let p=zA.HEAPU32[a[c]>>2],g=zA.HEAPU32.subarray(p>>2,(p>>2)+o[c]);if(c++,i===void 0){let v=new VA;if(v.setIndex(new _s(g,1)),v.setAttribute("position",new DA(l,3)),v.setAttribute("normal",new DA(d,3)),A){v.setAttribute("faceMap",new _s(m,1));let x=new Float32Array(d.length/3*4).fill(0);v.setAttribute("color",new ZA(x,4))}return zA.free_mesh_data(r),v.userData.type="SubdivGeometry",v}i.getAttribute("position").copyArray(l),i.getAttribute("normal").copyArray(d),i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0,zA.free_mesh_data(r)}static freeSubdivPointer(e){zA.free_bvh(e),zA.free_subdivision_surface(e)}static buildControlCageWireframe(e,A,t){let i=zA.get_wireframe_data_for_base_level(e),n=4,r=zA.HEAPU32.subarray(i>>2,(i>>2)+n),s=r.subarray(2,2+2),a=0,o=zA.HEAPU32[r[a]>>2],c=zA.HEAPF32.subarray(o>>2,(o>>2)+s[a]);a++;let u=zA.HEAPU32[r[a]>>2],l=zA.HEAPU32.subarray(u>>2,(u>>2)+s[a]);if(A===void 0){let h=new VA;h.setAttribute("position",new DA(c,3));let d=new Float32Array(c.length);for(let f=0,m=c.length;f<m;)d[f++]=t.r,d[f++]=t.g,d[f++]=t.b;return h.setAttribute("color",new ZA(d,3)),h.setIndex(new _s(l,1)),zA.free_wireframe_data_for_base_level(i),h}A.getAttribute("position").copyArray(c),A.attributes.position.needsUpdate=!0,zA.free_wireframe_data_for_base_level(i)}static updateCollabMesh(e,A,t){let i=A===0;i||zA.set_destination_refinement_level(e,A);let n=t?zA.get_topological_data2(e,i?zA.Level.CONTROL:zA.Level.REFINED,t.elements):zA.get_topological_data(e,i?zA.Level.CONTROL:zA.Level.REFINED),r=6,s=zA.HEAPU32.subarray(n>>2,(n>>2)+r),a=s.subarray(3,3+3),o=0,c=zA.HEAPU32[s[o]>>2],u=new Float32Array(zA.HEAPF32.subarray(c>>2,(c>>2)+a[o]));o++;let l=zA.HEAPU32[s[o]>>2],h=new Uint32Array(zA.HEAPU32.subarray(l>>2,(l>>2)+a[o]));o++;let d=zA.HEAPU32[s[o]>>2],f=new Uint8Array(zA.HEAPU32.subarray(d>>2,(d>>2)+a[o]));return zA.free_topological_data(n),{positions:u,indices:h,verticesPerFace:f}}},bp=["getX","getY","getZ"];function Fg(e,A){let t={},i=A?A.count:e.count,n=0,r=[],s=[],a=1e4;for(let c=0;c<i;c++){let u=A?A.getX(c):c,l="";for(let h=0;h<3;h++)l+=`${~~(e[bp[h]](u)*a)},`;if(l in t)r.push(t[l]);else{for(let h=0;h<3;h++)s.push(e[bp[h]](u));t[l]=n,r.push(n),n++}}let o=[];for(let c=0;c<r.length;c+=3)r[c]===r[c+1]||r[c]===r[c+2]||r[c+1]===r[c+2]||o.push(r[c],r[c+1],r[c+2]);return{positions:s,triIndices:o}}var Ba=new E,nc=new E,rc=new E,sc=new E;function Ug(e,A,t,i){let n=[],r=[];if(t.userData.shape!==void 0&&t.userData.parameters.depth===0&&t.userData.shape.shapeHoles.length===0){let s=t.userData.shape.extractShapePointsToFlatArray([]),a=t.userData.parameters.spikes;if(t.userData.type==="EllipseGeometry"&&a<=24&&a%4===0&&t.userData.parameters.angle>=360){let u=s.length/2/a;s=s.filter((l,h)=>Math.floor(h/2)%u===0)}let o=0;for(let u=0;u<s.length;u+=2)o+=(s[u]-s[(u===0?s.length:u)-2])*(s[u+1]+s[(u===0?s.length:u)-1]);e.length=0;let c=0;if(o<0)for(let u=0;u<s.length;u+=2)e.push(s[u],s[u+1],0),n.push(c++);else for(let u=s.length-2;u>=0;u-=2)e.push(s[u],s[u+1],0),n.push(c++);return r.push(c),{indices:n,verticesPerFace:r}}for(let s=0,a=t.capStartIndex??A.length;s<a;)if(A[s+1]===A[s+3]&&A[s+2]===A[s+5]||A[s+0]===A[s+3]&&A[s+2]===A[s+4]){Ba.set(e[A[s]*3],e[A[s]*3+1],e[A[s]*3+2]),nc.set(e[A[s+1]*3],e[A[s+1]*3+1],e[A[s+1]*3+2]),rc.set(e[A[s+4]*3],e[A[s+4]*3+1],e[A[s+4]*3+2]),sc.set(e[A[s+5]*3],e[A[s+5]*3+1],e[A[s+5]*3+2]),nc.sub(Ba).normalize(),rc.sub(Ba).normalize(),sc.sub(Ba).normalize();let o=nc.cross(rc).dot(sc);Math.abs(o)>.005||i&&i.some((c,u)=>u%2===1?!1:s>=i[u]&&s<i[u+1])?(n.push(A[s],A[s+1],A[s+2]),r.push(3),s+=3):(n.push(A[s],A[s+1],A[s+4],A[s+5]),r.push(4),s+=6)}else n.push(A[s],A[s+1],A[s+2]),r.push(3),s+=3;if(t.capStartIndex!==void 0){let s=[],a=[],o=0,c=new Float32Array([t.userData.parameters.depth])[0];for(let u=0,l=0;u<e.length;u+=3,l++)e[u+2]===0&&(s.push(l),o++),e[u+2]===c&&a.push(l);if(t.userData.parameters.extrudeBevelSize===0){let u=a[0];a[0]=a[1],a[1]=u}s.reverse(),n.push(...s,...a),r.push(o,o)}return{indices:n,verticesPerFace:r}}var Gi={};nM(Gi,{calcBoolean:()=>gO,calcBooleanTopological:()=>mO,freeMeshSet:()=>xO,getMeshSet:()=>vO,transformMeshSet:()=>yO});var fO=new Promise(e=>{}),QA,Er;fO.then(e=>QA=e);function pO(e,A,t){let i,{positions:n,triIndices:r}=Fg(e.getAttribute("position"),e.getIndex()),s;if(A&&t){let{indices:a,verticesPerFace:o}=Ug(n,r,e);s=o.length,i=[];for(let c=0,u=0;c<s;c++){i.push(o[c]);for(let l=0;l<o[c];l++)i.push(a[u++])}}else{let a=r.length;i=Array(a+a/3),s=0;for(let o=0,c=0;c<i.length;)i[c++]=3,s++,i[c++]=r[o++],i[c++]=r[o++],i[c++]=r[o++]}return{positions:n,faceIndices:i,nFaces:s}}function kg(e){let A=e.length,t=A*Uint32Array.BYTES_PER_ELEMENT,i=A*Float32Array.BYTES_PER_ELEMENT,n=Number.isInteger(e[0])?t:i,r=QA._malloc(n);return(Number.isInteger(e[0])?new Uint32Array(QA.HEAPU32.buffer,r,A):new Float32Array(QA.HEAPF32.buffer,r,A)).set(e,0),r}function Gg(e){switch(e){case 0:return QA.OP.UNION;case 1:return QA.OP.INTERSECTION;case 2:return QA.OP.A_MINUS_B;case 3:return QA.OP.B_MINUS_A;case 4:return QA.OP.SYMMETRIC_DIFFERENCE;case 5:return QA.OP.ALL;default:throw new Error("Unknown boolean operation "+e)}}function mO(e,A){Er===void 0&&(Er=QA.init_csg());let t=kg(e),i=QA.csg_calc_topological(Er,t,e.length,Gg(A));QA._free(t);let n=6,r=QA.HEAPU32.subarray(i>>2,(i>>2)+n),s=r.subarray(3,3+3),a=0,o=QA.HEAPU32[r[a]>>2],c=new Float32Array(QA.HEAPF32.subarray(o>>2,(o>>2)+s[a]));a++;let u=QA.HEAPU32[r[a]>>2],l=new Uint32Array(QA.HEAPU32.subarray(u>>2,(u>>2)+s[a]));a++;let h=QA.HEAPU32[r[a]>>2],d=new Uint8Array(QA.HEAPU32.subarray(h>>2,(h>>2)+s[a]));return QA.free_mesh_data(i),{positions:c,indices:l,verticesPerFace:d}}function gO(e,A,t,i){Er===void 0&&(Er=QA.init_csg());let n=kg(e),r=QA.csg_calc(Er,n,e.length,i,Gg(A));QA._free(n);let s=5,a=QA.HEAPU32.subarray(r>>2,(r>>2)+s),o=a.subarray(2,2+3),c=0,u=QA.HEAPU32[a[c]>>2],l=QA.HEAPF32.subarray(u>>2,(u>>2)+o[c]);c++;let h=QA.HEAPU32[a[c]>>2],d=QA.HEAPF32.subarray(h>>2,(h>>2)+o[c]);c++;let f=o[c];t.setAttribute("position",new DA(l,3)),t.setAttribute("normal",new DA(d,3));let m=QA.HEAPF32.subarray((r>>2)+5,(r>>2)+5+6);return t.boundingSphere===null&&(t.boundingSphere=new Qt),t.boundingSphere.center.set(m[0],m[1],m[2]),t.boundingSphere.radius=(m[3]**2+m[4]**2+m[5]**2)**.5,t.userData.parameters={width:m[3]*2,height:m[4]*2,depth:m[5]*2},QA.free_mesh_data(r),f}function vO(e,A,t){if(QA===void 0)return-1;let i,n,r;if(A&&e.userData.positions!==void 0){let m=e.userData;r=m.verticesPerFace.length,i=m.positions,n=Array(m.verticesPerFace.reduce((p,g)=>p+g,0)+r);for(let p=0,g=0,v=0;p<m.verticesPerFace.length;p++){n[v++]=m.verticesPerFace[p];for(let x=0;x<m.verticesPerFace[p];x++)n[v++]=m.indices[g++]}}else({positions:i,faceIndices:n,nFaces:r}=pO(e,A,t));let s=i.length,a=n.length,o=i.length,c=n.length,u=o*Float32Array.BYTES_PER_ELEMENT+c*Uint32Array.BYTES_PER_ELEMENT,l=o*Float32Array.BYTES_PER_ELEMENT,h=QA._malloc(u),d=new Float32Array(QA.HEAPF32.buffer,h,o),f=new Uint32Array(QA.HEAPU32.buffer,h+l,c);return d.set(i,0),f.set(n,0),QA.get_csg_mesh(h,s,h+l,a,r)}function yO(e,A){QA.transform_csg_mesh(e,A.elements)}function xO(e){QA.free_csg_mesh(e)}var bO={ConeGeometry:nP,CubeGeometry:rP,CylinderGeometry:iP,DodecahedronGeometry:aP,EllipseGeometry:NP,HelixGeometry:UP,IcosahedronGeometry:kP,LatheGeometry:GP,NonParametricGeometry:XP,PolygonGeometry:YP,PyramidGeometry:QP,RectangleGeometry:KP,SphereGeometry:$P,PlaneGeometry:AO,BackdropGeometry:eO,StarGeometry:iO,TextFrameGeometry:nO,TorusGeometry:rO,TorusKnotGeometry:aO,TriangleGeometry:oO,VectorGeometry:Wn},wp=e=>bO[e.type].create(e);function us(e){return e!==null&&"booleanOp"in e}var Vg=class extends wg(oi){constructor(){super(...arguments),this.booleanMeshSetAddress=-1,this.booleanWasTransformed=!1,this.booleanMatrixInvOld=new GA}updateVisible(){super.updateVisible(),this.visible=!us(this.parent)&&this.visible,us(this.parent)&&this.parent.invalidateDownstreamBooleanData()}freeBooleanPointer(){this.booleanMeshSetAddress!==-1&&(Gi.freeMeshSet(this.booleanMeshSetAddress),this.booleanMeshSetAddress=-1)}invalidateDownstreamBooleanData(e=!1){return e?this.booleanWasTransformed=!0:this.freeBooleanPointer(),us(this.parent)?this.parent.invalidateDownstreamBooleanData():this}invalidateUpstreamBooleanData(){this.freeBooleanPointer();for(let e of this.children)e instanceof Vg&&(e.freeBooleanPointer(),us(e)&&e.invalidateUpstreamBooleanData())}updateTransformState(e){let A=super.updateTransformState(e);return A&&us(this.parent)&&this.invalidateDownstreamBooleanData(!0),A}},za=new Nt;function Hg(e,A=0,t=e.count,i,n){let r=1/0,s=1/0,a=1/0,o=-1/0,c=-1/0,u=-1/0;for(let l=A;l<t;l++){let h=e.getX(l),d=e.getY(l),f=e.getZ(l);h<r&&(r=h),d<s&&(s=d),f<a&&(a=f),h>o&&(o=h),d>c&&(c=d),f>u&&(u=f)}za.min.set(r,s,a),za.max.set(o,c,u),za.getCenter(i),za.getSize(n).multiplyScalar(.5)}var wO=new VA,SO=new Po,$i=class extends Vg{constructor(e,A){super(wO,SO),this.super_Entity(e,A)}updateState(e,A){this.updateState_Entity(e,A)}updateEntityBoxSize(e,A){let t=this.geometry.getAttribute("position");t!==void 0?Hg(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,e,A):super.updateEntityBoxSize(e,A)}},MO=Lh(aM()),Sp=class{constructor(e){e=e??{},this.name=e.name,this.type=e.type,this.node=e.node,this.size=e.size,this.needsUpdate=e.needsUpdate}get value(){return this.node.value}set value(e){this.node.value=e}},tn=class{constructor(e){this.hashProperties=void 0,this.isNode=!0,this.shortcuts={},this.uuid=Fe.generateUUID(),this.type=e,this.name=""}analyze(e,A){A=A??{},e.analyzing=!0,this.build(e.addFlow(A.slot,A.cache,A.context),"v4"),e.clearVertexNodeCode(),e.clearFragmentNodeCode(),e.removeFlow(),e.analyzing=!1}analyzeAndFlow(e,A,t){return t=t??{},this.analyze(e,t),this.flow(e,A,t)}flow(e,A,t){t=t??{},e.addFlow(t.slot,t.cache,t.context);let i={result:this.build(e,A),code:e.clearNodeCode(),extra:e.context.extra};return e.removeFlow(),i}build(e,A,t){A=A??this.getType(e,A);let i=e.getNodeData(t??this);return e.analyzing&&this.appendDepsNode(e,i,A),e.nodes.indexOf(this)===-1&&e.nodes.push(this),this.updateFrame!==void 0&&e.updaters.indexOf(this)===-1&&e.updaters.push(this),this.generate(e,A,t)}updateFrame(e){}generateReadonly(e,A,t,i,n,r){return""}generate(e,A,t,i,n){return""}parse(e,A,t,i){}appendDepsNode(e,A,t){A.deps=(A.deps||0)+1;let i=e.getTypeLength(t);(i>(A.outputMax||0)||this.getType(e,t))&&(A.outputMax=i,A.output=t)}setName(e){this.name=e}getName(){return this.name}getType(e,A){return A==="sampler2D"||A==="samplerCube"?A:this.type}getHash(){let e="{",A,t;for(A in this)t=this[A],t instanceof tn&&(e+='"'+A+'":'+t.getHash()+",");if(this.hashProperties)for(let i=0;i<this.hashProperties.length;i++)A=this.hashProperties[i],t=this[A],e+='"'+A+'":"'+String(t)+'",';return e+='"id":"'+this.uuid+'"}',e}},_O=class{constructor(){this.nodes={},this.keywords={}}add(e){this.nodes[e.name]=e}addKeyword(e,A,t){t=t!==void 0?t:!0,this.keywords[e]={callback:A,cache:t}}remove(e){delete this.nodes[e.name]}removeKeyword(e){delete this.keywords[e]}get(e){return this.nodes[e]}getKeyword(e,A){return this.keywords[e].callback(A)}getKeywordData(e){return this.keywords[e]}contains(e){return this.nodes[e]!==void 0}containsKeyword(e){return this.keywords[e]!==void 0}},ct=new _O,me=class extends tn{constructor(e,A){super(e),this.scope="",A=A??{},this.shared=A.shared!==void 0?A.shared:!0,this.unique=A.unique!==void 0?A.unique:!1}build(e,A,t,i){if(A=A??this.getType(e),this.getShared(e,A)){let n=this.getUnique(e,A);n&&this.uuid===void 0&&(this.uuid=Fe.generateUUID()),t=e.getUUID(t??this.getUUID(),!n);let r=e.getNodeData(t),s=r.output||this.getType(e);if(e.analyzing)return(r.deps||0)>0||this.getLabel()?(this.appendDepsNode(e,r,A),this.generate(e,A,t)):super.build(e,A,t);if(n)return r.name=r.name||super.build(e,A,t),r.name;if(!this.getLabel()&&(!this.getShared(e,s)||e.context.ignoreCache||r.deps===1))return super.build(e,A,t);t=this.getUUID(!1);let a=this.getTemp(e,t);if(a)return e.format(a,s,A);{a=super.generate(e,A,t,r.output,i);let o=this.generate(e,s,t);return e.addNodeCode(a+" = "+o+";"),e.format(a,s,A)}}return super.build(e,A,t)}getShared(e,A){return A!=="sampler2D"&&A!=="samplerCube"&&this.shared}getUnique(e,A){return this.unique}setLabel(e){return this.label=e,this}getLabel(){return this.label}getUUID(e){let A=this.uuid;return typeof this.scope=="string"&&(A=this.scope+"-"+A),A}getTemp(e,A){A=A||this.uuid;let t=e.getVars()[A];return t?t.name:void 0}generate(e,A,t,i,n){return this.getShared(e,A)||console.error("TempNode is not shared"),t=t??this.uuid,e.getTempVar(t,i??this.getType(e),n,this.getLabel()).name}},yt=class extends me{constructor(e,A){A=A??{},A.shared=A.shared!==void 0?A.shared:!1,super(e,A),this.readonly=!1}setReadonly(e){return this.readonly=e,this.hashProperties=this.readonly?["value"]:void 0,this}getReadonly(){return this.readonly}generate(e,A,t,i,n,r){t=e.getUUID(t??this.getUUID()),i=i??this.getType(e);let s=e.getNodeData(t);return this.getReadonly()&&this.generateReadonly!==void 0?this.generateReadonly(e,A,t,i,n,r):e.isShader("vertex")?(s.vertex||(s.vertex=e.createVertexUniform(i,this,n,r,this.getLabel())),e.format(s.vertex.name,i,A)):(s.fragment||(s.fragment=e.createFragmentUniform(i,this,n,r,this.getLabel())),e.format(s.fragment.name,i,A))}},_t=class extends yt{constructor(e=0,A){super("v2"),this.nodeType="Vector2",this.value=e instanceof Z?e:new Z(e,A)}get x(){return this.value.x}set x(e){this.value.x=e}get y(){return this.value.y}set y(e){this.value.y=e}generateReadonly(e,A,t,i,n,r){return e.format("vec2("+this.value.x+", "+this.value.y+")",i,A)}},St=class extends yt{constructor(e=0,A,t){super("v3"),this.nodeType="Vector3",this.value=e instanceof E?e:new E(e,A,t)}get x(){return this.value.x}set x(e){this.value.x=e}get y(){return this.value.y}set y(e){this.value.y=e}get z(){return this.value.z}set z(e){this.value.z=e}generateReadonly(e,A,t,i,n,r){return e.format("vec3("+this.value.x+", "+this.value.y+", "+this.value.z+")",i,A)}},Yt=class extends jA{constructor(e,A,t,i){super(e,A,t),this.isColorA=!0,this.a=i}setRGBA(e,A,t,i){super.setRGB(e,A,t),this.a=i}copy(e){return super.copy(e),this.a="a"in e?e.a:1,this}clone(){return new this.constructor(this.r,this.g,this.b,this.a)}get x(){return this.r}get y(){return this.g}get z(){return this.b}get w(){return this.a}set x(e){this.r=e}set y(e){this.g=e}set z(e){this.b=e}set w(e){this.a=e}},xn=class extends yt{constructor(e){super("v4"),this.nodeType="Vector4",this.value=e instanceof Yt?e:new Yt(e.r,e.g,e.b,e.a)}generateReadonly(e,A,t,i,n,r){return e.format("vec4("+this.value.r+", "+this.value.g+", "+this.value.b+", "+this.value.a+")",i,A)}},TO=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,Mp=/[a-z_0-9]+/gi,OA=class extends me{constructor(e,A,t,i,n){super(n),this.src="",this.nodeType="Function",this.useKeywords=!0,this.includes=[],this.extensions={},this.keywords={},this.isMethod=n===void 0,this.isInterface=!1,this.parse(e,A,t,i)}getShared(e,A){return!this.isMethod}getType(e){return e.getTypeByFormat(this.type)}getInputByName(e){if(this.inputs){let A=this.inputs.length;for(;A--;)if(this.inputs[A].name===e)return this.inputs[A]}}getIncludeByName(e){if(this.includes){let A=this.includes.length;for(;A--;)if(this.includes[A].name===e)return this.includes[A]}}generate(e,A,t,i,n){let r,s=0,a=this.src;if(this.includes)for(let c=0;c<this.includes.length;c++)e.include(this.includes[c],this);for(let c in this.extensions)e.extensions[c]=!0;let o=[];for(;r=Mp.exec(this.src);)o.push(r);for(let c=0;c<o.length;c++){let u=o[c],l=u[0],h=this.isMethod?!this.getInputByName(l):!0,d=l;if(this.keywords[l]||this.useKeywords&&h&&ct.containsKeyword(l)){let f=this.keywords[l];if(!f){let m=ct.getKeywordData(l);m.cache&&(f=e.keywords[l]),f=f||ct.getKeyword(l,e),m.cache&&(e.keywords[l]=f)}d=f.build(e)}l!==d&&a[u.index+s-1]!=="."&&(a=a.substring(0,u.index+s)+d+a.substring(u.index+l.length+s),s+=d.length-l.length),this.getIncludeByName(d)===void 0&&ct.contains(d)&&e.include(ct.get(d))}return A==="source"?a:this.isMethod?(this.isInterface||e.include(this,void 0,a),this.name):e.format("( "+a+" )",this.getType(e),A)}parse(e,A,t,i){if(this.src=e||"",this.includes=A??[],this.extensions=t??{},this.keywords=i??{},this.isMethod){let n=TO.exec(this.src);if(this.inputs=[],n&&n.length==4){this.type=n[1],this.name=n[2];let r=n[3].match(Mp);if(r){let s=0;for(;s<r.length;){let a=r[s++],o;a==="in"||a==="out"||a==="inout"?o=r[s++]:(o=a,a="");let c=r[s++];this.inputs.push({name:c,type:o,qualifier:a})}}this.isInterface=this.src.indexOf("{")===-1}else this.type="",this.name=""}}},EO=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i,Wg=class extends me{constructor(e="",A){super(),this.src="",this.useDefine=!1,this.nodeType="Const",this.parse(e||Wg.PI,void 0,void 0,void 0,A)}getType(e){return e.getTypeByFormat(this.type)}parse(e,A,t,i,n){this.src=e||"";let r,s,a="",o=EO.exec(e);this.useDefine=n??this.src.charAt(0)==="#",o&&o.length>1?(s=o[1],r=o[2],a=o[3]):(r=this.src,s="f"),this.name=r,this.type=s,this.value=a}build(e,A){if(A==="source"){if(this.value)return this.useDefine?"#define "+this.name+" "+this.value:"const "+this.type+" "+this.name+" = "+this.value+";";if(this.useDefine)return this.src}return e.include(this),e.format(this.name,this.getType(e),A)}generate(e,A,t,i,n){return e.format(this.name,this.getType(e),A)}},ce=Wg;ce.PI="PI",ce.PI2="PI2",ce.RECIPROCAL_PI="RECIPROCAL_PI",ce.RECIPROCAL_PI2="RECIPROCAL_PI2",ce.LOG2="LOG2",ce.EPSILON="EPSILON";var CO=new RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,"gim"),LO=new RegExp("s*(w*?)s*(w*?)(=|;)","gim"),jg=class extends me{constructor(e=""){super(),this.inputs=[],this.src="",this.nodeType="Struct",this.parse(e)}getType(e){return e.getTypeByFormat(this.name)}getInputByName(e){let A=this.inputs.length;for(;A--;)if(this.inputs[A].name===e)return this.inputs[A]}generate(e,A,t,i,n){return A==="source"?this.src+";":e.format("( "+this.src+" )",this.getType(e),A)}parse(e=""){this.src=e,this.inputs=[];let A=CO.exec(e);if(A){let t=A[2],i;for(;i=LO.exec(t);)this.inputs.push({type:i[1],name:i[2]});this.name=A[1]}else this.name="";this.type=this.name}},au=class extends me{constructor(e){super("v2",{shared:!1}),this.nodeType="UV",this.index=e??0}generate(e,A){e.requires.uv[this.index]=!0;let t=this.index>0?this.index+1:"",i=e.isShader("vertex")?"uv"+t:"vUv"+t;return e.format(i,this.getType(e),A)}};ct.addKeyword("uv",function(){return new au});ct.addKeyword("uv2",function(){return new au(1)});var ur=class extends me{constructor(e,A){super("v4"),this.nodeType="ColorSpace",this.input=e,this.method=A??ur.LINEAR_TO_LINEAR,this.hashProperties=["method"]}static getEncodingComponents(e){switch(e){case di:return["Linear"];case fe:return["sRGB"];default:return[]}}generate(e,A){let t=this.input.build(e,"v4"),i=this.getType(e),n=ur.Nodes[this.method],r=e.include(n);if(r===ur.LINEAR_TO_LINEAR)return e.format(t,i,A);if(n.inputs?.length===2){let s=this.factor.build(e,"f");return e.format(r+"( "+t+", "+s+" )",i,A)}else return e.format(r+"( "+t+" )",i,A)}fromEncoding(e){let A=ur.getEncodingComponents(e);this.method="LinearTo"+A[0],this.factor=A[1]}fromDecoding(e){let A=ur.getEncodingComponents(e);this.method=A[0]+"ToLinear",this.factor=A[1]}},li=ur;li.Nodes={LinearToLinear:new OA(["vec4 LinearToLinear( in vec4 value ) {","	return value;","}"].join(`
`)),sRGBToLinear:new OA(["vec4 sRGBToLinear( in vec4 value ) {","	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );","}"].join(`
`)),LinearTosRGB:new OA(["vec4 LinearTosRGB( in vec4 value ) {","	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );","}"].join(`
`))},li.LINEAR_TO_LINEAR="LinearToLinear",li.SRGB_TO_LINEAR="sRGBToLinear",li.LINEAR_TO_SRGB="LinearTosRGB";var xe=class extends OA{constructor(e="",A,t,i,n){super(e,n,i,t,A),this.nodeType="Expression"}},qi=class extends yt{constructor(e=new Je,A,t,i){super("v4",{shared:!0}),this.nodeType="Texture",this.value=e,this.uv=A??new au,this.bias=t,this.project=i!==void 0?i:!1}getTexture(e,A){return super.generate(e,A,this.value.uuid,"t")}generate(e,A){if(A==="sampler2D")return this.getTexture(e,A);let t=this.getTexture(e,A),i=this.uv.build(e,this.project?"v4":"v2"),n=this.bias?this.bias.build(e,"f"):void 0;n===void 0&&e.context.bias&&(n=e.context.bias.setTexture(this).build(e,"f"));let r,s;this.project?r="texture2DProj":r=n?"tex2DBias":"tex2D",n?s=r+"( "+t+", "+i+", "+n+" )":s=r+"( "+t+", "+i+" )";let a={include:e.isShader("vertex"),ignoreCache:!0},o=this.getType(e);return e.addContext(a),this.colorSpace=this.colorSpace??new li(new xe("",o)),this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(s),s=this.colorSpace.build(e,o),e.removeContext(),e.format(s,o,A)}},LA=class extends yt{constructor(e){super("f"),this.nodeType="Float",this.value=e??0}generateReadonly(e,A,t,i,n,r){return e.format(this.value+(this.value%1?"":".0"),i,A)}},_p=class extends me{constructor(e,A){super(),this.inputs=[],this.nodeType="FunctionCall",this.value=e,this.inputs=A??[]}getFunction(){return this.value}getType(e){return this.value.getType(e)}generate(e,A,t,i,n){i=this.getType(e);let r=this.value,s=r.build(e,A)+"( ",a=[];if(r.inputs){for(let o=0;o<r.inputs.length;o++){let c=r.inputs[o],u=this.inputs[o]||this.inputs[c.name];a.push(u.build(e,e.getTypeByFormat(c.type)))}s+=a.join(", ")+" )"}return e.format(s,i,A)}},qg=class extends me{constructor(e,A,t=qg.ADD){super(),this.nodeType="Operator",this.type=e.type,this.a=e,this.b=A,this.op=t}getType(e){let A=this.a.getType(e),t=this.b.getType(e);return e.isTypeMatrix(A)?"v4":e.getTypeLength(t)>e.getTypeLength(A)?t:A}generate(e,A){let t=this.getType(e);this.type=t;let i=this.a.build(e,t),n=this.b.build(e,t);return e.format("( "+i+" "+this.op+" "+n+" )",t,A)}},ci=qg;ci.ADD="+",ci.SUB="-",ci.MUL="*",ci.DIV="/";var le=class extends me{constructor(e,A=le.ABS,t,i){super(),this.nodeType="Math",this.a=e,typeof A!="string"?this.b=A:i=A,typeof t!="string"?this.c=t:i=t,this.method=i,this.hashProperties=["method"]}getNumInputs(e){switch(this.method){case le.MIX:case le.CLAMP:case le.REFRACT:case le.SMOOTHSTEP:case le.FACEFORWARD:return 3;case le.MIN:case le.MAX:case le.MOD:case le.STEP:case le.REFLECT:case le.DISTANCE:case le.DOT:case le.CROSS:case le.POW:return 2;default:return 1}}getInputType(e){let A=e.getTypeLength(this.a.getType(e)),t=this.b?e.getTypeLength(this.b.getType(e)):0,i=this.c?e.getTypeLength(this.c.getType(e)):0;return A>t&&A>i?this.a.getType(e):t>i?this.b.getType(e):this.c.getType(e)}getType(e){switch(this.method){case le.LENGTH:case le.DISTANCE:case le.DOT:return"f";case le.CROSS:return"v3"}return this.getInputType(e)}generate(e,A){let t,i,n,r=this.a?e.getTypeLength(this.a.getType(e)):0,s=this.b?e.getTypeLength(this.b.getType(e)):0,a=this.c?e.getTypeLength(this.c.getType(e)):0,o=this.getInputType(e),c=this.getType(e);switch(this.type=c,this.method){case le.NEGATE:return e.format("( -"+this.a.build(e,o)+" )",o,A);case le.INVERT:return e.format("( 1.0 - "+this.a.build(e,o)+" )",o,A);case le.CROSS:t=this.a.build(e,"v3"),i=this.b.build(e,"v3");break;case le.STEP:t=this.a.build(e,r===1?"f":o),i=this.b.build(e,o);break;case le.MIN:case le.MAX:case le.MOD:t=this.a.build(e,o),i=this.b.build(e,s===1?"f":o);break;case le.REFRACT:t=this.a.build(e,o),i=this.b.build(e,o),n=this.c.build(e,"f");break;case le.MIX:t=this.a.build(e,o),i=this.b.build(e,o),n=this.c.build(e,a===1?"f":o);break;default:t=this.a.build(e,o),this.b&&(i=this.b.build(e,o)),this.c&&(n=this.c.build(e,o));break}let u=[];u.push(t),i&&u.push(i),n&&u.push(n);let l=this.getNumInputs(e);if(u.length!==l)throw Error(`Arguments not match used in "${this.method}". Require ${l}, currently ${u.length}.`);return e.format(this.method+"( "+u.join(", ")+" )",c,A)}},HA=le;HA.RAD="radians",HA.DEG="degrees",HA.EXP="exp",HA.EXP2="exp2",HA.LOG="log",HA.LOG2="log2",HA.SQRT="sqrt",HA.INV_SQRT="inversesqrt",HA.FLOOR="floor",HA.CEIL="ceil",HA.NORMALIZE="normalize",HA.FRACT="fract",HA.SATURATE="saturate",HA.SIN="sin",HA.COS="cos",HA.TAN="tan",HA.ASIN="asin",HA.ACOS="acos",HA.ARCTAN="atan",HA.ABS="abs",HA.SIGN="sign",HA.LENGTH="length",HA.NEGATE="negate",HA.INVERT="invert",HA.MIN="min",HA.MAX="max",HA.MOD="mod",HA.STEP="step",HA.REFLECT="reflect",HA.DISTANCE="distance",HA.DOT="dot",HA.CROSS="cross",HA.POW="pow",HA.MIX="mix",HA.CLAMP="clamp",HA.REFRACT="refract",HA.SMOOTHSTEP="smoothstep",HA.FACEFORWARD="faceforward";var bs=class extends me{constructor(e,A,t){super("v4"),this.nodeType="TextureCubeUV",this.value=e,this.uv=A,this.bias=t}bilinearCubeUV(e,A,t,i){let n=new _p(bs.Nodes.bilinearCubeUV,[A,t,i]);this.colorSpaceTL=this.colorSpaceTL??new li(new xe("","v4")),this.colorSpaceTL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(n.build(e)+".tl"),this.colorSpaceTR=this.colorSpaceTR??new li(new xe("","v4")),this.colorSpaceTR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(n.build(e)+".tr"),this.colorSpaceBL=this.colorSpaceBL??new li(new xe("","v4")),this.colorSpaceBL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(n.build(e)+".bl"),this.colorSpaceBR=this.colorSpaceBR??new li(new xe("","v4")),this.colorSpaceBR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(n.build(e)+".br");let r={include:e.isShader("vertex"),ignoreCache:!0};e.addContext(r),this.colorSpaceTLExp=new xe(this.colorSpaceTL.build(e,"v4"),"v4"),this.colorSpaceTRExp=new xe(this.colorSpaceTR.build(e,"v4"),"v4"),this.colorSpaceBLExp=new xe(this.colorSpaceBL.build(e,"v4"),"v4"),this.colorSpaceBRExp=new xe(this.colorSpaceBR.build(e,"v4"),"v4"),e.removeContext();let s=new xe("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )","v4");return s.keywords.cubeUV_TL=this.colorSpaceTLExp,s.keywords.cubeUV_TR=this.colorSpaceTRExp,s.keywords.cubeUV_BL=this.colorSpaceBLExp,s.keywords.cubeUV_BR=this.colorSpaceBRExp,s.keywords.cubeUV=n,s}generate(e,A){if(e.isShader("fragment")){let t=this.uv,i=this.bias||e.context.roughness,n=new _p(bs.Nodes.roughnessToMip,[i]),r=new HA(n,bs.Nodes.m0,bs.Nodes.cubeUV_maxMipLevel,HA.CLAMP),s=new HA(r,HA.FLOOR),a=new HA(r,HA.FRACT),o=this.bilinearCubeUV(e,this.value,t,s),c=this.bilinearCubeUV(e,this.value,t,new ci(s,new LA(1).setReadonly(!0),ci.ADD)),u=new HA(o,c,a,HA.MIX);return e.format(u.build(e),"v4",A)}else return console.warn("TextureCubeUVNode is not compatible with "+e.shader+" shader."),e.format("vec4( 0.0 )",this.getType(e),A)}},th=bs;th.Nodes=function(){let e=new jg(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),A=new ce("float cubeUV_maxMipLevel 8.0",!0),t=new ce("float cubeUV_minMipLevel 4.0",!0),i=new ce("float cubeUV_maxTileSize 256.0",!0),n=new ce("float cubeUV_minTileSize 16.0",!0),r=new OA(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`);r.useKeywords=!1;let s=new OA(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
				}
				return 0.5 * (uv + 1.0);
		}`);s.useKeywords=!1;let a=new OA(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[e,r,s,A,t,i,n]);a.useKeywords=!1;let o=new ce("float r0 1.0",!0),c=new ce("float v0 0.339",!0),u=new ce("float m0 -2.0",!0),l=new ce("float r1 0.8",!0),h=new ce("float v1 0.276",!0),d=new ce("float m1 -1.0",!0),f=new ce("float r4 0.4",!0),m=new ce("float v4 0.046",!0),p=new ce("float m4 2.0",!0),g=new ce("float r5 0.305",!0),v=new ce("float v5 0.016",!0),x=new ce("float m5 3.0",!0),y=new ce("float r6 0.21",!0),M=new ce("float v6 0.0038",!0),w=new ce("float m6 4.0",!0),_=[o,c,u,l,h,d,f,m,p,g,v,x,y,M,w],b=new OA(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,_);return{bilinearCubeUV:a,roughnessToMip:b,m0:u,cubeUV_maxMipLevel:A}}();var dr=class extends me{constructor(e){super("v3"),this.nodeType="Normal",this.scope=e??dr.VIEW}getShared(){return this.scope===dr.WORLD}build(e,A,t,i){let n=e.context[this.scope+"Normal"];return n?n.build(e,A,t,i):super.build(e,A,t)}generate(e,A,t,i,n){let r;switch(this.scope){case dr.VIEW:e.isShader("vertex")?r="transformedNormal":r="geometryNormal";break;case dr.LOCAL:e.isShader("vertex")?r="objectNormal":(e.requires.normal=!0,r="vObjectNormal");break;case dr.WORLD:e.isShader("vertex")?r="inverseTransformDirection( transformedNormal, viewMatrix ).xyz":(e.requires.worldNormal=!0,r="vWNormal");break}return e.format(r,this.getType(e),A)}},ht=dr;ht.LOCAL="local",ht.WORLD="world",ht.VIEW="view",ht.NORMAL="normal";ct.addKeyword("viewNormal",function(){return new ht(ht.VIEW)});ct.addKeyword("localNormal",function(){return new ht(ht.NORMAL)});ct.addKeyword("worldNormal",function(){return new ht(ht.WORLD)});var Ti=class extends me{constructor(e){super("v3"),this.nodeType="Position",this.scope=e??Ti.LOCAL}getType(){switch(this.scope){case Ti.PROJECTION:return"v4"}return this.type}getShader(){switch(this.scope){case Ti.LOCAL:case Ti.WORLD:return!1}return!0}generate(e,A,t,i,n){let r;switch(this.scope){case Ti.LOCAL:e.isShader("vertex")?r="transformed":(e.requires.position=!0,r="vPosition");break;case Ti.WORLD:if(e.isShader("vertex"))return"( modelMatrix * vec4( transformed, 1.0 ) ).xyz";e.requires.worldPosition=!0,r="vWPosition";break;case Ti.VIEW:r=e.isShader("vertex")?"-mvPosition.xyz":"vViewPosition";break;case Ti.PROJECTION:r=e.isShader("vertex")?"( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )":"vec4( 0.0 )";break}return e.format(r,this.getType(),A)}},jt=Ti;jt.LOCAL="local",jt.WORLD="world",jt.VIEW="view",jt.PROJECTION="projection";ct.addKeyword("position",function(){return new jt});ct.addKeyword("worldPosition",function(){return new jt(jt.WORLD)});ct.addKeyword("viewPosition",function(){return new jt(jt.VIEW)});var ni=class extends me{constructor(e){super("v3"),this.nodeType="Reflect",this.scope=e??ni.CUBE}getUnique(e){return!e.context.viewNormal}getType(){switch(this.scope){case ni.SPHERE:return"v2"}return this.type}generate(e,A){let t=this.getUnique(e);if(e.isShader("fragment")){let i;switch(this.scope){case ni.VECTOR:{let n=new ht(ht.VIEW),r=e.context.roughness,s=n.build(e,"v3"),a=new jt(jt.VIEW).build(e,"v3"),o=r?r.build(e,"f"):void 0,c=`reflect( -normalize( ${a} ), ${s} )`;o&&(c=`normalize( mix( ${c}, ${s}, ${o} * ${o} ) )`);let u=`inverseTransformDirection( ${c}, viewMatrix )`;t?(e.addNodeCode(`vec3 reflectVec = ${u};`),i="reflectVec"):i=u;break}case ni.CUBE:{let n=new ni(ni.VECTOR).build(e,"v3"),r="vec3( -"+n+".x, "+n+".yz )";t?(e.addNodeCode(`vec3 reflectCubeVec = ${r};`),i="reflectCubeVec"):i=r;break}case ni.SPHERE:{let n="normalize( ( viewMatrix * vec4( "+new ni(ni.VECTOR).build(e,"v3")+", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";t?(e.addNodeCode(`vec2 reflectSphereVec = ${n};`),i="reflectSphereVec"):i=n;break}}return e.format(i,this.getType(),A)}else return console.warn("ReflectNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.type,A)}},Cr=ni;Cr.CUBE="cube",Cr.SPHERE="sphere",Cr.VECTOR="vector";var DO=class extends me{constructor(e=new qi,A,t){super("v4"),this.nodeType="TextureCube",this.value=e,this.radianceNode=new th(this.value,A??new Cr(Cr.VECTOR),t),this.irradianceNode=new th(this.value,new ht(ht.WORLD),new LA(1).setReadonly(!0))}generate(e,A){return e.isShader("fragment")?(e.require("irradiance"),e.context.bias&&e.context.bias.setTexture(this.value),(e.slot==="irradiance"?this.irradianceNode:this.radianceNode).build(e,A)):(console.warn("TextureCubeNode is not compatible with "+e.shader+" shader."),e.format("vec4( 0.0 )",this.getType(e),A))}},PO=class extends yt{constructor(e=new dh,A,t){super("v4",{shared:!0}),this.nodeType="CubeTexture",this.value=e,this.uv=A??new Cr,this.bias=t}getTexture(e,A){return super.generate(e,A,this.value.uuid,"tc")}generate(e,A){if(A==="samplerCube")return this.getTexture(e,A);let t=this.getTexture(e,A),i=this.uv?.build(e,"v3"),n=this.bias?this.bias.build(e,"f"):void 0;n===void 0&&e.context.bias&&(n=e.context.bias.setTexture(this).build(e,"f"));let r;n?r="texCubeBias( "+t+", "+i+", "+n+" )":r="texCube( "+t+", "+i+" )";let s={include:e.isShader("vertex"),ignoreCache:!0},a=this.getType(e);return e.addContext(s),this.colorSpace=this.colorSpace??new li(new xe("",a)),this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(r),r=this.colorSpace.build(e,a),e.removeContext(),e.format(r,a,A)}},Tp=["x","y","z","w"],OO=["float","vec2","vec3","vec4"],RO={float:"f",vec2:"v2",vec3:"v3",vec4:"v4",mat4:"v4",int:"i",bool:"b","float[]":"f[]","vec4[]":"v4[]"},IO={t:"sampler2D",tc:"samplerCube",b:"bool",i:"int",f:"float",c:"vec3",v2:"vec2",v3:"vec3",v4:"vec4",m3:"mat3",m4:"mat4","f[]":"float[]","v4[]":"vec4[]"},NO=class{constructor(){this.includes={consts:{},functions:{},structs:{}},this.cache="",this.slot="",this.shader="",this.context={},this.getIncludesCode=function(){function e(A,t){return A.deps.length-t.deps.length}return function(A,t){let i=this.getIncludes(A,t);if(!i)return"";let n="";i=i.sort(e);for(let r=0;r<i.length;r++)i[r].src&&(n+=i[r].src+`
`);return n}}(),this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=["#ifdef TEXTURE_LOD_EXT","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)","#else","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCube(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2D(a, b, c)","#endif",`
			// NOTE: Include Spline's blending modes. This could be part of BlendNode
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,"#include <packing>","#include <common>"].join(`
`),this.parsCode={vertex:["float neighbor_offset = 0.0001;",""].join(`
`),fragment:["float accumAlpha = 0.0;",`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,""].join(`
`)},this.code={vertex:"",fragment:""},this.nodeCode={vertex:"",fragment:""},this.resultCode={vertex:"",fragment:""},this.finalCode={vertex:"",fragment:""},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(e,A){this.buildShader("vertex",e),this.buildShader("fragment",A);for(let t=0;t<this.requires.uv.length;t++)if(this.requires.uv[t]){let i=t>0?t+1:"";this.addVaryCode("varying vec2 vUv"+i+";"),t>0&&this.addVertexParsCode("attribute vec2 uv"+i+";"),this.addVertexFinalCode("vUv"+i+" = uv"+i+";")}return this.requires.color[0]&&(this.addVaryCode("varying vec4 vColor;"),this.addVertexParsCode("attribute vec4 color;"),this.addVertexFinalCode("vColor = color;")),this.requires.color[1]&&(this.addVaryCode("varying vec4 vColor2;"),this.addVertexParsCode("attribute vec4 color2;"),this.addVertexFinalCode("vColor2 = color2;")),this.requires.position&&(this.addVaryCode("varying vec3 vPosition;"),this.addVertexFinalCode("vPosition = transformed;")),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode("varying vec3 vObjectNormal;"),this.addVertexFinalCode("vObjectNormal = normal;")),this.requires.modelMatrix&&this.addFragmentParsCode("uniform mat4 modelMatrix;"),this.requires.viewMatrix&&this.addFragmentParsCode("uniform mat4 viewMatrix;"),this.requires.projectionMatrix&&this.addFragmentParsCode("uniform mat4 projectionMatrix;"),this.requires.worldNormal&&(this.addVaryCode("varying vec3 vWNormal;"),this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")),this.requires.vWorldViewDir&&(this.addVaryCode("varying vec3 vWorldViewDir;"),this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")),this}buildShader(e,A){this.resultCode[e]=A.build(this.setShader(e),"v4")}setMaterial(e,A){return this.defines={},this}addFlow(e,A,t){return this.addSlot(e).addCache(A).addContext(t)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(e){return this.cache=e??"",this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||"",this}addContext(e){return this.context=Object.assign({},this.context,e),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(e){return this.slot=e||"",this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||"",this}addFragmentVariable(e,A){this.fragmentVariables[e]===void 0&&(this.addFragmentCode(`${A} ${e};`),this.fragmentVariables[e]="")}addFragmentParsVariable(e,A){this.fragmentParsVariables[e]===void 0&&(this.addFragmentParsCode(`${A} ${e};`),this.fragmentParsVariables[e]="")}addVertexParsVariable(e,A){this.vertexParsVariables[e]===void 0&&(this.addVertexParsCode(`${A} ${e};`),this.vertexParsVariables[e]="")}addVertexCode(e){this.addCode(e,"vertex")}addFragmentCode(e){this.addCode(e,"fragment")}addCode(e,A){this.code[A??this.shader]+=e+`
`}addVertexNodeCode(e){this.addNodeCode(e,"vertex")}addFragmentNodeCode(e){this.addNodeCode(e,"fragment")}addNodeCode(e,A){this.nodeCode[A??this.shader]+=e+`
`}clearNodeCode(e){e=e??this.shader;let A=this.nodeCode[e];return this.nodeCode[e]="",A}clearVertexNodeCode(){return this.clearNodeCode("vertex")}clearFragmentNodeCode(){return this.clearNodeCode("fragment")}addVertexFinalCode(e){this.addFinalCode(e,"vertex")}addFragmentFinalCode(e){this.addFinalCode(e,"fragment")}addFinalCode(e,A){this.finalCode[A??this.shader]+=e+`
`}addVertexParsCode(e){this.addParsCode(e,"vertex")}addFragmentParsCode(e){this.addParsCode(e,"fragment")}addParsCode(e,A){this.parsCode[A??this.shader]+=e+`
`}addVaryCode(e){this.addVertexParsCode(e),this.addFragmentParsCode(e)}isCache(e){return this.caches.indexOf(e)!==-1}isSlot(e){return this.slots.indexOf(e)!==-1}define(e,A){this.defines[e]=A===void 0?1:A}require(e){this.requires[e]=!0}isDefined(e){return this.defines[e]!==void 0}getVar(e,A,t,i="varying",n="V",r=""){let s=this.getVars(i),a=s[e];if(!a){let o=s.length;a={name:t||"node"+n+o+(r?"_"+r:""),type:A},s.push(a),s[e]=a}return a}getTempVar(e,A,t,i){return this.getVar(e,A,t,this.shader,"T",i)}getAttribute(e,A){if(!this.attributes[e]){let t=this.getVar(e,A);this.addVertexParsCode("attribute "+A+" "+e+";"),this.addVertexFinalCode(t.name+" = "+e+";"),this.attributes[e]={varying:t,name:e,type:A}}return this.attributes[e]}getCode(e){return[this.prefixCode,this.parsCode[e],this.getVarListCode(this.getVars("varying"),"varying"),this.getVarListCode(this.inputs.uniforms[e],"uniform"),this.getVarListCode(this.inputs.arrayUniforms[e],"uniform"),this.getIncludesCode("consts",e),this.getIncludesCode("structs",e),this.getIncludesCode("functions",e),"void main() {",this.getVarListCode(this.getVars(e)),this.code[e],this.resultCode[e],this.finalCode[e],"}"].join(`
`)}getVarListCode(e,A){A=A??"";let t="";for(let i=0,n=e.length;i<n;++i){let r=e[i],s=r.type,a=r.name,o=r.size,c=this.getFormatByType(s);if(c===void 0)throw new Error("Node pars "+c+" not found.");c.includes("[]")?t+=A+" "+c.substring(0,c.length-2)+" "+a+`[${o}];
`:t+=A+" "+c+" "+a+`;
`}return t}getVars(e){return this.inputs.vars[e??this.shader]}getNodeData(e){let A=e instanceof tn?e.uuid:e;return this.nodeData[A]=this.nodeData[A]||{}}createUniform(e,A,t,i,n,r){if(A.includes("[]")){let s=this.inputs.arrayUniforms,a=s.list.length,o=new Sp({type:A,size:t.size,name:i||"nodeUA"+a+(r?"_"+r:""),node:t,needsUpdate:n});return s.list.push(o),s[e].push(o),s[e][o.name]=o,this.uniforms[o.name]=o,o}else{let s=this.inputs.uniforms,a=s.list.length,o=new Sp({type:A,name:i||"nodeU"+a+(r?"_"+r:""),node:t,needsUpdate:n});return s.list.push(o),s[e].push(o),s[e][o.name]=o,this.uniforms[o.name]=o,o}}createVertexUniform(e,A,t,i,n){return this.createUniform("vertex",e,A,t,i,n)}createFragmentUniform(e,A,t,i,n){return this.createUniform("fragment",e,A,t,i,n)}include(e,A,t){let i;if(e=typeof e=="string"?ct.get(e):e,this.context.include===!1)return e.name;e instanceof OA?i=this.includes.functions:e instanceof ce?i=this.includes.consts:e instanceof jg&&(i=this.includes.structs);let n=i[this.shader]=i[this.shader]||[];if(e){let r=n[e.name];if(r||(r=n[e.name]={node:e,deps:[]},n.push(r),r.src=e.build(this,"source")),e instanceof OA&&A&&n[A.name]&&n[A.name].deps.indexOf(e)===-1&&(n[A.name].deps.push(e),e.includes?.length)){let s=0;do this.include(e.includes[s++],A);while(s<e.includes.length)}return t&&(r.src=t),e.name}else throw new Error("Include not found.")}colorToVectorProperties(e){return e.replace("r","x").replace("g","y").replace("b","z").replace("a","w")}colorToVector(e){return e.replace(/c/g,"v3")}getIncludes(e,A){return this.includes[e][A||this.shader]}getConstructorFromLength(e){return OO[e-1]}isTypeMatrix(e){return/^m/.test(e)}getTypeLength(e){return e==="f"?1:parseInt(this.colorToVector(e).substr(1))}getTypeFromLength(e){return e===1?"f":"v"+e}findNode(...e){for(let A=0;A<arguments.length;A++){let t=e[A];if(t?.isNode)return t}}resolve(...e){for(let A=0;A<arguments.length;A++){let t=e[A];if(t!==void 0){if(t.isNode)return t;if(t.isTexture)switch(t.mapping){case On:case Rn:return new PO(t);case Ws:return new DO(new qi(t));default:return new qi(t)}else{if(t.isVector2)return new _t(t);if(t.isVector3)return new St(t);if(t.isVector4)return new xn(t)}}}}format(e,A,t){switch(this.colorToVector(t+" <- "+A)){case"f <- v2":return e+".x";case"f <- v3":return e+".x";case"f <- v4":return e+".x";case"f <- i":case"f <- b":return"float( "+e+" )";case"v2 <- f":return"vec2( "+e+" )";case"v2 <- v3":return e+".xy";case"v2 <- v4":return e+".xy";case"v2 <- i":case"v2 <- b":return"vec2( float( "+e+" ) )";case"v3 <- f":return"vec3( "+e+" )";case"v3 <- v2":return"vec3( "+e+", 0.0 )";case"v3 <- v4":return e+".xyz";case"v3 <- i":case"v3 <- b":return"vec2( float( "+e+" ) )";case"v4 <- f":return"vec4( "+e+" )";case"v4 <- v2":return"vec4( "+e+", 0.0, 1.0 )";case"v4 <- v3":return"vec4( "+e+", 1.0 )";case"v4 <- i":case"v4 <- b":return"vec4( float( "+e+" ) )";case"i <- f":case"i <- b":return"int( "+e+" )";case"i <- v2":return"int( "+e+".x )";case"i <- v3":return"int( "+e+".x )";case"i <- v4":return"int( "+e+".x )";case"b <- f":return"( "+e+" != 0.0 )";case"b <- v2":return"( "+e+" != vec2( 0.0 ) )";case"b <- v3":return"( "+e+" != vec3( 0.0 ) )";case"b <- v4":return"( "+e+" != vec4( 0.0 ) )";case"b <- i":return"( "+e+" != 0 )"}return e}getTypeByFormat(e){return RO[e]||e}getFormatByType(e){return IO[e]||e}getUUID(e,A){return A=A!==void 0?A:!0,A&&this.cache&&(e=this.cache+"-"+e),e}getElementByIndex(e){return Tp[e]}getIndexByElement(e){return Tp.indexOf(e)}isShader(e){return this.shader===e}setShader(e){return this.shader=e,this}mergeDefines(e){for(let A in e)this.defines[A]=e[A];return this.defines}mergeUniform(e){for(let A in e)this.uniforms[A]=e[A];return this.uniforms}getTextureEncodingFromMap(e){let A;return e?e.isTexture&&(A=e.encoding):A=di,A===di&&this.context.gamma&&(A=fe),A}},Ee=class extends yt{constructor(e=0,A,t,i){super("c"),this.nodeType="Color",this.value=e instanceof Yt?e:new Yt(e||0,A,t,i)}setRGBA(e){this.value.setRGBA(e.r,e.g,e.b,e.a)}generate(e,A,t,i,n,r){t=e.getUUID(t??this.getUUID()),i=i??this.getType(e);let s=e.getNodeData(t),a=this.getReadonly()&&this.generateReadonly!==void 0;if(this.alpha){let o=this.alpha.build(e,"f");e.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${o};`)}return a?this.generateReadonly(e,A,t,i,n,r):e.isShader("vertex")?(s.vertex||(s.vertex=e.createVertexUniform(i,this,n,r,this.getLabel())),e.format(s.vertex.name,i,A)):(s.fragment||(s.fragment=e.createFragmentUniform(i,this,n,r,this.getLabel())),e.format(s.fragment.name,i,A))}generateReadonly(e,A,t,i,n,r){return e.format("vec3("+this.value.r+", "+this.value.g+", "+this.value.b+")",i,A)}},he=class extends yt{constructor(e){super("i"),this.nodeType="Int",this.value=Math.floor(e??0)}generateReadonly(e,A,t,i,n,r){return e.format(this.value.toString(),i,A)}},Xg=class extends tn{constructor(){super("basic"),this.nodeType="Basic",this.color=new Ee(5855577),this.shadingAlpha=new LA(1),this.shadingBlend=new he(0)}get category(){return"phong"}generate(e){let A;if(e.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(e,"v3",{cache:"position"}):void 0;e.mergeUniform(Gr.merge([yA.fog])),e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","	vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{this.color===void 0&&(this.color=new Ee(5855577)),this.color.analyze(e,{slot:"color"}),this.alpha&&this.alpha.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:"afterColor"});let t=this.color.flow(e,"c",{slot:"color"}),i=this.alpha?this.alpha.flow(e,"f"):void 0,n=this.afterColor?this.afterColor.flow(e,"c",{slot:"afterColor"}):void 0;e.requires.transparent=i!==void 0,e.addParsCode(["varying vec3 vWPosition;","#include <fog_pars_fragment>","#include <dithering_pars_fragment>","varying vec3 vViewPosition;","#include <normal_pars_fragment>"].join(`
`));let r=["#include <normal_fragment_begin>",t.code];i&&r.push(i.code,"#ifdef ALPHATEST"," if ( "+i.result+" <= ALPHATEST ) discard;","#endif"),n?r.push(n.code,`vec3 outgoingLight = ${t.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${n.result}, 1.0, SPE_BLENDING_NORMAL);`):r.push(`vec3 finalColor = ${t.result};`),i?r.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${i.result} );`):r.push("gl_FragColor = vec4("+t.result+", 1.0 );"),r.push("#include <fog_fragment>","#include <dithering_fragment>"),A=r.join(`
`)}return A}},pn=class extends yt{constructor(e=1,A){super("f[]"),this.nodeType="FloatArray",this.size=e,this.value=Array.isArray(A)?A:typeof A=="number"?new Array(e).fill(A):new Array(e).fill(0)}},Tt={normalRenderTarget:new qi,normalRenderTargetDepth:new qi,transmissionRenderTarget:new qi,transmissionSize:new _t(2048,2048),transmissionRenderTargetDepth:new qi,pixelRatioNode:new LA(1),resolution:new _t,penumbraSize:new pn(5,.5)};for(let e of Object.values(Tt))e.isRenderGlobal=!0;var BO=class extends tn{constructor(){super("lambert"),this.nodeType="Lambert",this.color=new Ee(5855577),this.emissive=new Ee(0),this.emissiveIntensity=new LA(1),this.shadingAlpha=new LA(1),this.shadingBlend=new he(0)}get category(){return"lambert"}build(e){let A;if(e.define("LAMBERT"),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(e,"v3",{cache:"position"}):void 0;e.mergeUniform(Gr.merge([yA.fog,yA.lights])),e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <color_pars_vertex>","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>",`
					vec3 diffuse = vec3( 1.0 );
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
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
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
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
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
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
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
					#endif
				`,"	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{e.mergeUniform({penumbraSize:Tt.penumbraSize}),this.color===void 0&&(this.color=new Ee(5855577)),this.color.analyze(e,{slot:"color"}),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(e);let t=this.color.flow(e,"c",{slot:"color"}),i=this.emissive.flow(e,"c",{slot:"emissive"}),n=this.emissiveIntensity.flow(e,"f",{slot:"emissive"}),r=this.shadingAlpha.flow(e,"f"),s=this.shadingBlend.flow(e,"i"),a=this.afterColor?this.afterColor.flow(e,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(e,"f"):void 0;e.requires.transparent=o!==void 0,e.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#include <normal_pars_fragment>","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <fog_pars_fragment>","#include <shadowmap_pars_fragment>","#include <shadowmask_pars_fragment>","#include <clipping_planes_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let c=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,"#include <clipping_planes_fragment>"];c.push(t.code,"vec3 diffuseColor = "+t.result+";","ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"),o&&c.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),c.push("#ifdef DOUBLE_SIDED","	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;","#else","	reflectedLight.indirectDiffuse += vIndirectFront;","#endif","#include <lightmap_fragment>","reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );","#ifdef DOUBLE_SIDED","	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;","#else","	reflectedLight.directDiffuse = vLightFront;","#endif","reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"),i&&c.push(i.code,"reflectedLight.directDiffuse += "+i.result+" * "+n.result+";"),c.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;"),c.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${r.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${r.result}, ${s.result} );
				}
				`),a&&c.push(a.code,`outgoingLight = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`),o?c.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):c.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),c.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=c.join(`
`)}return A}},zO=class extends tn{constructor(){super("phong"),this.nodeType="Phong",this.color=new Ee(5855577),this.specular=new Ee(1118481),this.shininess=new LA(30),this.shadingAlpha=new LA(1),this.shadingBlend=new he(0)}get category(){return"phong"}build(e){let A;if(e.define("PHONG"),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(e,"v3",{cache:"position"}):void 0;e.mergeUniform(Gr.merge([yA.fog,yA.lights])),e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif


				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{e.mergeUniform({penumbraSize:Tt.penumbraSize}),this.color===void 0&&(this.color=new Ee(5855577)),this.color.analyze(e,{slot:"color"}),this.specular.analyze(e),this.shininess.analyze(e),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(e);let t=this.color.flow(e,"c",{slot:"color"}),i=this.specular.flow(e,"c"),n=this.shininess.flow(e,"f"),r=this.shadingAlpha.flow(e,"f"),s=this.shadingBlend.flow(e,"i"),a=this.afterColor?this.afterColor.flow(e,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(e,"f"):void 0;e.requires.transparent=o!==void 0,e.addParsCode(["varying vec3 vWPosition;","uniform vec3 emissive;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_phong_pars_fragment>","#include <shadowmap_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let c=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	BlinnPhongMaterial material;"];c.push(t.code,"	vec3 diffuseColor = "+t.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );","	vec3 totalEmissiveRadiance = emissive;",i.code,"	vec3 specular = "+i.result+";",n.code,"	float shininess = max( 0.0001, "+n.result+" );","	float specularStrength = 1.0;"),o&&c.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),c.push("material.diffuseColor = diffuseColor;"),c.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),c.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;"),c.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${r.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${r.result}, ${s.result} );
				}
				`),a&&c.push(a.code,`outgoingLight = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`),o?c.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):c.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),c.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=c.join(`
`)}return A}},FO=class extends tn{constructor(){super("standard"),this.nodeType="Standard",this.color=new Ee(5855577),this.roughness=new LA(.3),this.metalness=new LA(0),this.reflectivity=new LA(.5),this.shadingAlpha=new LA(1),this.shadingBlend=new he(0)}get category(){return"physical"}build(e){let A;if(e.define("STANDARD"),e.requires.lights=!0,e.extensions.derivatives=!0,e.extensions.shaderTextureLOD=!0,e.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(e,"v3",{cache:"position"}):void 0;e.mergeUniform(Gr.merge([yA.fog,yA.lights])),yA.LTC_1&&(e.uniforms.ltc_1={value:void 0},e.uniforms.ltc_2={value:void 0}),e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>","#include <shadowmap_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{e.mergeUniform({penumbraSize:Tt.penumbraSize});let t={gamma:!0};this.color===void 0&&(this.color=new Ee(5855577)),this.color.analyze(e,{slot:"color",context:t}),this.roughness.analyze(e),this.metalness.analyze(e),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(e),this.reflectivity&&this.reflectivity.analyze(e);let i=this.color.flow(e,"c",{slot:"color",context:t}),n=this.roughness.flow(e,"f"),r=this.metalness.flow(e,"f"),s=this.shadingAlpha.flow(e,"f"),a=this.shadingBlend.flow(e,"i"),o=this.afterColor?this.afterColor.flow(e,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(e,"f"):void 0,u=this.reflectivity?this.reflectivity.flow(e,"f"):void 0;e.requires.transparent=c!==void 0,e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <dithering_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_physical_pars_fragment>","#include <shadowmap_pars_fragment>"].join(`
`));let l=["#include <clipping_planes_fragment>","	#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	PhysicalMaterial material;","	material.diffuseColor = vec3( 1.0 );"];l.push(i.code,"	vec3 diffuseColor = "+i.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",n.code,"	float roughnessFactor = "+n.result+";",r.code,"	float metalnessFactor = "+r.result+";"),c&&l.push(c.code,"#ifdef ALPHATEST","	if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),l.push("vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"),l.push("material.diffuseColor = diffuseColor * ( 1.0 - metalnessFactor );","material.roughness = max( roughnessFactor, 0.0525 );","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"),u?l.push(u.code,"material.specularColor = mix( vec3( 0.16 * pow2( "+u.result+" ) ), diffuseColor, metalnessFactor );"):l.push("material.specularColor = mix( vec3( 0.04 ), diffuseColor, metalnessFactor );"),l.push("#include <lights_fragment_begin>"),l.push("#include <lights_fragment_end>"),l.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;"),l.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result}, ${a.result} );
				}
				`),o&&l.push(o.code,`outgoingLight = spe_blend(outgoingLight, ${o.result}, 1.0, SPE_BLENDING_NORMAL);`),c?l.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):l.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),l.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=l.join(`
`)}return A}},UO=class extends tn{constructor(){super("toon"),this.nodeType="Toon",this.color=new Ee(5855577),this.specular=new Ee(1118481),this.shininess=new LA(30),this.shadingAlpha=new LA(1),this.shadingBlend=new he(0)}get category(){return"toon"}build(e){let A;if(e.define("TOON"),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(e,"v3",{cache:"position"}):void 0;e.mergeUniform(Gr.merge([yA.fog,yA.lights])),e.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <fog_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{e.mergeUniform({penumbraSize:Tt.penumbraSize}),this.color===void 0&&(this.color=new Ee(5855577)),this.color.analyze(e,{slot:"color"}),this.specular.analyze(e),this.shininess.analyze(e),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(e);let t=this.color.flow(e,"c",{slot:"color"}),i=this.specular.flow(e,"c"),n=this.shininess.flow(e,"f"),r=this.shadingAlpha.flow(e,"f"),s=this.shadingBlend.flow(e,"i"),a=this.afterColor?this.afterColor.flow(e,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(e,"f"):void 0;e.requires.transparent=o!==void 0,e.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vWPosition;","#include <normal_pars_fragment>","#include <gradientmap_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <dithering_pars_fragment>",`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
			
						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,"#include <shadowmap_pars_fragment>","#include <bumpmap_pars_fragment>","#include <normalmap_pars_fragment>"].join(`
`));let c=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	ToonMaterial material;"];c.push(t.code,"	vec3 diffuseColor = "+t.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",i.code,"	vec3 specular = "+i.result+";",n.code,"	float shininess = max( 0.0001, "+n.result+" );","	float specularStrength = 1.0;"),o&&c.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),c.push("material.diffuseColor = diffuseColor;"),c.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),c.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;"),c.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${r.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${r.result}, ${s.result} );
				}
				`),a&&c.push(a.code,`outgoingLight = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`),o?c.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):c.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),c.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=c.join(`
`)}return A}},ds=class extends yt{constructor(e){super("b"),this.nodeType="Bool",this.value=e??!1}generateReadonly(e,A,t,i){return e.format(this.value?"true":"false",i,A)}},Yg=class extends yt{constructor(e){super("m3"),this.nodeType="Matrix3",this.value=e??new Xe}generateReadonly(e,A,t,i,n,r){return e.format("mat3("+this.value.elements.join(", ")+")",i,A)}get elements(){return this.value.elements}set elements(e){this.value.fromArray(e)}},mn=class extends yt{constructor(e=1,A){super("v4[]"),this.nodeType="Vector4Array",this.size=e,this.value=Array.isArray(A)?A:A instanceof $A?new Array(e).fill(A):new Array(e).fill(new $A(0))}},ou=(e=>(e.SIMPLEX="simplex3d",e.SIMPLEX_FRACTAL="simplex3dFractal",e.ASHIMA="simplexAshima",e.FBM="fbm",e.PERLIN="perlin",e))(ou||{}),Pt=function(){let e=new OA(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),A=new OA(`float simplex3d(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[e]);A.keywords.F3=new ce("float F3 0.3333333"),A.keywords.G3=new ce("float G3 0.1666667");let t=new OA(`float simplex3dFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplex3d(m * rot1)
				 + 0.2666667 * simplex3d(2.0 * m * rot2)
				 + 0.1333333 * simplex3d(4.0 * m * rot3)
				 + 0.0666667 * simplex3d(8.0 * m);
		}`,[A]),i=new OA("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"),n=new OA("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"),r=new OA(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; // N=7
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[i,n]),s=new OA("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}"),a=new OA("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}",[s]),o=new OA(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[a]),c=new OA(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[o]);c.keywords.NUM_OCTAVES=new ce(`int NUM_OCTAVES ${5}`);let u=new OA("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}"),l=new OA(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[i,n,u]);return{simplex:A,simplexFractal:t,simplexAshima:r,fbm:c,perlin:l}}(),Qg=class extends me{constructor(e,A,t,i,n,r,s,a,o,c,u,l){super("v3"),this.nodeType="Noise",this.scale=e,this.size=A,this.move=t,this.fA=i,this.fB=n,this.distortion=r,this.colorA=s,this.colorB=a,this.colorC=o,this.colorD=c,this.alpha=u,this.noiseType=l,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A,t,i,n){e.require("uv"),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,"float");let r=Object.values(ou)[this.noiseType.value],s=new OA(`vec3 ${r}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, float alpha, out float calpha) {
                vec3 st = position / size;
				st /= scale;
				vec3 q = vec3(${r}(st),
							  ${r}(st + vec3(1.0)),
							  ${r}(st + vec3(1.0)));
				vec3 r = vec3(${r}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
							  ${r}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
							  ${r}(st * q));
				float f = ${r}(st + r);
				vec4 color;
				color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
				color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
				color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));

                float lalpha = alpha * color.a;
                calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			    accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return clamp(color, 0.0, 1.0).rgb;
			}`,[Pt.simplex,Pt.simplexFractal,Pt.simplexAshima,Pt.fbm,Pt.perlin]),a=e.include(s),o=[];return o.push(this.scale.build(e,"f")),o.push(this.size.build(e,"v3")),o.push(this.move.build(e,"f")),o.push(this.fA.build(e,"v2")),o.push(this.fB.build(e,"v2")),o.push(this.distortion.build(e,"v2")),o.push(this.colorA.build(e,"v4")),o.push(this.colorB.build(e,"v4")),o.push(this.colorC.build(e,"v4")),o.push(this.colorD.build(e,"v4")),o.push(this.alpha.build(e,"f")),o.push(this.calpha),e.format(a+"("+o.join(",")+")",this.getType(e),A)}};Qg.numOctaves=5;var Zg=class extends me{constructor(e,A,t,i,n,r,s){super("v3"),this.nodeType="Fresnel",this.color=e,this.bias=A,this.scale=t,this.intensity=i,this.factor=n,this.alpha=r,this.mode=s,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.require("vWorldViewDir"),e.require("worldNormal"),e.isShader("fragment")){e.addFragmentVariable(this.calpha,"float");let t=e.include(Zg.Nodes.fresnel),i=[];return i.push(this.color.build(e,"c")),i.push(this.bias.build(e,"f")),i.push(this.scale.build(e,"f")),i.push(this.intensity.build(e,"f")),i.push(this.factor.build(e,"f")),i.push(this.alpha.build(e,"f")),i.push(this.mode.build(e,"i")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("FresnelNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},Jg=Zg;Jg.Nodes=function(){return{fresnel:new OA(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, float alpha, int mode, out float calpha) {
				float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

				float lalpha = clamp( fresnel, 0.0, 1.0 ) * alpha;
				calpha = lalpha / clamp(lalpha + accumAlpha, 0.001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;
				return color;
			}`)}}();var Kg=class extends me{constructor(e,A,t,i,n,r,s){super("v3"),this.nodeType="Rainbow",this.filmThickness=e,this.movement=A,this.wavelengths=t,this.noiseStrength=i,this.noiseScale=n,this.offset=r,this.alpha=s,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.require("vWorldViewDir"),e.require("worldNormal"),e.isShader("fragment")){e.require("uv"),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,"float");let t=e.include(Kg.Nodes.rainbow),i=[];return i.push(this.filmThickness.build(e,"f")),i.push(this.movement.build(e,"f")),i.push(this.wavelengths.build(e,"v3")),i.push(this.noiseStrength.build(e,"f")),i.push(this.noiseScale.build(e,"f")),i.push(this.offset.build(e,"v3")),i.push(this.alpha.build(e,"f")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("RainbowNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},$g=Kg;$g.Nodes=function(){let e=new OA(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
                 vec3 st = position / noiseScale;
				 vec3 q = vec3(simplex3d(st),
							  simplex3d(st + vec3(1.0)),
							  simplex3d(st + vec3(1.0)));

				 vec3 r = vec3(simplex3d(st + vec3(1.4, 1.3, 1.0) * q + vec3(1.7, 9.2, 1.0)),
							  simplex3d(st + vec3(2.0, 1.2, 1.0) * q + vec3(8.3, 2.8, 1.0)),
							  simplex3d(st * q));

                 float noise = simplex3d(st + r);

                 return .5 + .5 * cos((((filmThickness + (noise * noiseStrength)) / (vec3(wavelengths.r * 1.0, wavelengths.g * 0.8, wavelengths.b * 0.6) + 1.0)) * dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal))) + movement);
             }`,[Pt.simplex]);return{rainbow:new OA(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, float alpha, out float calpha) {
                 vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

                 float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);
                 float lalpha = alpha * rainbowContribution;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

                 return res;
             }`,[e])}}();var A0=class extends me{constructor(e,A,t,i,n,r,s,a,o,c,u,l,h,d,f,m){super("v3"),this.nodeType="Outline",this.firstTime=!0,this.outlineColor=e,this.contourColor=A,this.outlineWidth=t,this.contourWidth=i,this.contourThreshold=n,this.outlineThreshold=r,this.contourFrequency=s,this.outlineSmoothing=a,this.contourDirection=o,this.positionalLines=c,this.compensation=u,this.resolution=l,this.normalMap=h,this.depthMap=d,this.pixelRatio=f,this.alpha=m,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.require("vWorldViewDir"),e.require("worldNormal"),e.extensions.derivatives=!0,this.firstTime){let t=this.outlineWidth.build(e,"f"),i=this.resolution.build(e,"v2"),n=this.compensation.build(e,"b"),r=this.pixelRatio.build(e,"f");e.addVertexParsVariable("randomColor","attribute vec3"),e.addVertexParsVariable("extrudeNormal","attribute vec3"),e.addVertexParsVariable(t,"uniform float"),e.addVertexParsVariable(i,"uniform vec2"),e.addVertexParsVariable(n,"uniform bool"),e.addVertexParsVariable(r,"uniform float"),e.addVertexParsVariable("vID","flat out float"),e.addFragmentParsVariable("vID","flat in float");let s=`g${this.uuid.toString().replace(/-/g,"")}`;e.addVertexFinalCode(`
                vID = randomColor.r;
                if (${n}) {
                    vec4 ${s}_clipPosition = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
                    // NOTE: For certain shapes, like spheres, we get incorrect extrusion when the
                    // normals face the camera directly. So we hackily fix this by offsetting the normal
                    // by a tiny amount.
                    vec3 ${s}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * extrudeNormal) + 0.0000001;
                    vec2 ${s}_offset = normalize(${s}_clipNormal.xy) / ${i} * (${t} / 2.0) * ${s}_clipPosition.w * 2.0 * ${r};
                    ${s}_clipPosition.xy += ${s}_offset;
                    // TODO(MAX): To handle multiple outline layers, we only want to extrude
                    // if this offset is the biggest of all the potential offsets
                    gl_Position = ${s}_clipPosition;
                }
            `)}if(e.isShader("fragment")){e.require("uv"),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,"float");let t=e.include(A0.Nodes.outline),i=[];return i.push(this.outlineColor.build(e,"c")),i.push(this.contourColor.build(e,"c")),i.push(this.outlineWidth.build(e,"f")),i.push(this.contourWidth.build(e,"f")),i.push(this.contourThreshold.build(e,"f")),i.push(this.outlineThreshold.build(e,"f")),i.push(this.contourFrequency.build(e,"f")),i.push(this.outlineSmoothing.build(e,"f")),i.push(this.contourDirection.build(e,"v3")),i.push(this.positionalLines.build(e,"b")),i.push(this.resolution.build(e,"v2")),i.push(this.normalMap.getTexture(e,"t")),i.push(this.depthMap.getTexture(e,"t")),i.push(this.pixelRatio.build(e,"f")),i.push(this.compensation.build(e,"b")),i.push(this.alpha.build(e,"f")),i.push(this.calpha),this.firstTime=!this.firstTime,e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("OutlineNode is not compatible with "+e.shader+" shader."),""}},e0=A0;e0.Nodes=function(){let e=new OA(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 texelSize = (vec2(1.0) / resolution) * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -texelSize.x, -texelSize.y);
	uvSamples[1] = uv + vec2(0.0, -texelSize.y);
	uvSamples[2] = uv + vec2(  texelSize.x, -texelSize.y);
	uvSamples[3] = uv + vec2( -texelSize.x, 0.0);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  texelSize.x, 0.0);
	uvSamples[6] = uv + vec2( -texelSize.x, texelSize.y);
	uvSamples[7] = uv + vec2(0.0, texelSize.y);
	uvSamples[8] = uv + vec2(  texelSize.x, texelSize.y);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    // TODO(MAX): Can we somehow reduce the number of conditionals here with MATH?!
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec4 sobel_edge_h = normalSamples[2] + (2.0*normalSamples[5]) + normalSamples[8] - (normalSamples[0] + (2.0*normalSamples[3]) + normalSamples[6]);
  	vec4 sobel_edge_v = normalSamples[0] + (2.0*normalSamples[1]) + normalSamples[2] - (normalSamples[6] + (2.0*normalSamples[7]) + normalSamples[8]);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`);return{outline:new OA(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return result;
             }`,[e])}}();var t0=class extends me{constructor(e,A,t,i,n,r,s,a){super("v3"),this.nodeType="Transmission",this.thickness=e,this.ior=A,this.roughness=t,this.transmissionSamplerSize=i,this.transmissionSamplerMap=n,this.transmissionDepthMap=r,this.aspectRatio=s,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.extensions.shaderTextureLOD=!0,e.extensions.derivatives=!0,e.isShader("fragment")){e.define("NUM_SAMPLES",30),e.require("worldPosition"),e.requires.worldNormal=!0,e.requires.modelMatrix=!0,e.requires.projectionMatrix=!0,e.addFragmentVariable(this.calpha,"float");let t=e.include(t0.Nodes.transmission),i=[];return i.push(this.thickness.build(e,"f")),i.push(this.ior.build(e,"f")),i.push(this.roughness.build(e,"f")),i.push(this.transmissionSamplerSize.build(e,"v2")),i.push(this.transmissionSamplerMap.getTexture(e,"t")),i.push(this.transmissionDepthMap.getTexture(e,"t")),i.push(this.aspectRatio.build(e,"v2")),i.push("normal"),i.push(this.alpha.build(e,"f")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("TransmissionNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},i0=t0;i0.Nodes=function(){let e=new OA(`
            float gaussian(vec2 i) {
                const float sigma = float(NUM_SAMPLES) * .25;
                return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );
            }`),A=new OA(`
            vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                // Slightly modified version of this:
                // https://www.shadertoy.com/view/ltScRG

                const int LOD = 2;
                const int sLOD = 4; // tile size = 2^LOD

                vec3 O = vec3(0);
                float a = 0.0;
                const int s = NUM_SAMPLES/sLOD;
                for ( int i = 0; i < s*s; i++ ) {
                    int modulo = (i)-((i)/(s))*(s);
                    vec2 d = vec2(float(modulo), float(i/s))*float(sLOD) - float(NUM_SAMPLES)/2.;
                    vec2 uv = U + (scale * aspectRatio) * d;
                    // What is the depth of the opaque object we're trying to sample
                    float opaqueDepth = unpackRGBAToDepth(texture2D(dm, uv));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU + ((scale * min(lod / 2., 1.)) * aspectRatio) * d;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    float gaussian = gaussian(d);
		            #ifdef TEXTURE_LOD_EXT
                    O += gaussian * texture2DLodEXT( sp, uv, lod).rgb;
                    #else
                    O += gaussian * textureLod( sp, uv, lod).rgb;
                    #endif
                    a += gaussian;
                }
                return O / a;
            }`,[e]),t=new OA(`
            vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        // Direction of refracted light.
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        // Compute rotation-independant scaling of the model matrix.
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		        // The thickness is specified in local space.
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),i=new OA(`
float applyIorToRoughness( float roughness, float ior ) {
		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	} `),n=new OA(`
vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        float lod = applyIorToRoughness(roughness, ior);

        return blur(transmissionSamplerMap, fragCoord, vec2(lod / (transmissionSamplerSize.x / 2.)), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
	}`,[i,A]),r=new OA(`
vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
        vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
        vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
        unrefractedCoords += 1.0;
        unrefractedCoords /= 2.0;

        // Sample framebuffer to get pixel the refracted ray hits.
        return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    }`,[n,t]);return{transmission:new OA(`
            vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                float lalpha = alpha;

                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return transmission;
            }`,[r])}}();var ws=class extends me{constructor(e,A,t,i,n,r,s,a,o,c,u){super("v3"),this.nodeType="Depth",this.gradientType=e,this.smooth=A,this.near=t,this.far=i,this.isVector=n,this.isWorldSpace=r,this.origin=s,this.direction=a,this.colors=o,this.steps=c,this.alpha=u,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){let t=`g${this.uuid.toString().replace(/-/g,"")}`,i=new OA(`vec3 ${t}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${t}_MAX_COLORS], float steps[${t}_MAX_COLORS], float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${t}_IS_VECTOR
                   #ifdef ${t}_LINEAR
                       #ifdef ${t}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${t}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${t}_SMOOTH
				for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a;
               calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			   accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
               return color.rgb;
			}`,[ws.Nodes.vectorLinearWorldSpaceDepth,ws.Nodes.vectorLinearObjectSpaceDepth,ws.Nodes.vectorSphericalObjectSpaceDepth,ws.Nodes.vectorSphericalWorldSpaceDepth]);if(e.isShader("fragment")){e.define(`${t}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&e.define(`${t}_SMOOTH`),this.isVector.value>.5&&e.define(`${t}_IS_VECTOR`),this.gradientType.value===0&&e.define(`${t}_LINEAR`),this.isWorldSpace.value>.5&&e.define(`${t}_WORLDSPACE`),e.require("worldPosition"),e.addFragmentVariable(this.calpha,"float");let n=e.include(i),r=[];return r.push(this.near.build(e,"f")),r.push(this.far.build(e,"f")),r.push(this.origin.build(e,"v3")),r.push(this.direction.build(e,"v3")),r.push(this.colors.build(e,"v4[]")),r.push(this.steps.build(e,"f[]")),r.push(this.alpha.build(e,"f")),r.push(this.calpha),e.format(n+"("+r.join(",")+")",this.getType(e),A)}else return console.warn("DepthNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},n0=ws;n0.Nodes=function(){let e=new OA(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),A=new OA(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),t=new OA(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),i=new OA(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`);return{vectorLinearWorldSpaceDepth:e,vectorLinearObjectSpaceDepth:A,vectorSphericalWorldSpaceDepth:t,vectorSphericalObjectSpaceDepth:i}}();var Ep=class extends me{constructor(e,A,t,i){super("v3"),this.nodeType="Blend",this.a=e,this.b=A,this.alpha=t,this.mode=i}generate(e,A){if(e.isShader("fragment")){let t=[];return t.push(this.a.build(e,"c")),t.push(this.b.build(e,"c")),t.push(this.alpha.build(e,"f")),t.push(this.mode.build(e,"i")),e.format("spe_blend("+t.join(",")+")",this.getType(e),A)}else return console.warn("BlendNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},ih=(e=>(e.NOISE="noise",e.MAP="map",e))(ih||{}),r0=class extends me{constructor(e,A,t,i,n){super("v3"),this.displacementTypeIndex=new he(0),this.nodeType="VertexDisplacement",this.intensity=e,this.movementOrTexture=A,Object.values(ih)[this.displacementTypeIndex.value]==="map"&&(this.mat=new Yg(this.movementOrTexture.value.matrix)),this.cropOrOffset=t,this.scale=i,this.noiseFunctionIndex=n}generate(e,A){if(e.isShader("vertex")){e.define("USE_LAYER_DISPLACE");let t,i=[];switch(i.push("displaced_position"),i.push("displaced_normal"),Object.values(ih)[this.displacementTypeIndex.value]){case"map":{t=e.include(r0.Nodes.map),i.push(this.movementOrTexture.getTexture(e,"t")),i.push("uv"),i.push(this.cropOrOffset.build(e,"f")),this.mat&&i.push(this.mat.build(e,"mat3"));break}case"noise":{let n=Object.values(ou)[this.noiseFunctionIndex.value],r=new OA(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),s=new OA(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement) {
							return p + n * ${n}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
						}`,[Pt.simplex,Pt.simplexFractal,Pt.simplexAshima,Pt.fbm,Pt.perlin]),a=new OA(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            // TODO(Max): The distance to the neighbors was originally scaled by 0.1.
                            // This caused some small oval/circular visual artifacts in the lighting.
                            // For now, simply using neighbors further away betters the problem,
                            // but we should figure out the underlying cause when we have some time.
                            // Maybe its related to how we calculate the tangent and bitangent?
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[s,r]);t=e.include(a),i.push(this.scale.build(e,"f")),i.push(this.cropOrOffset.build(e,"v3")),i.push(this.movementOrTexture.build(e,"f"));break}}return i.push(this.intensity.build(e,"f")),i.push("displaced_normal"),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("VertexDisplacementNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},s0=r0;s0.Nodes=function(){let e=new OA(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),A=new OA(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`);return{map:new OA(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[e,A])}}();var a0=class extends me{constructor(e,A,t,i,n,r,s,a){super("v3"),this.nodeType="Gradient",this.gradientType=e,this.smooth=A,this.colors=t,this.steps=i,this.offset=n,this.morph=r,this.angle=s,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.isShader("fragment")){e.define("GRAD_MAX",10),e.require("uv"),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,"float");let t=e.include(a0.Nodes.gradient),i=[];return i.push(this.gradientType.build(e,"i")),i.push(this.smooth.build(e,"b")),i.push(this.colors.build(e,"v4[]")),i.push(this.steps.build(e,"f[]")),i.push(this.offset.build(e,"v2")),i.push(this.morph.build(e,"v2")),i.push(this.angle.build(e,"f")),i.push(this.alpha.build(e,"f")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("GradientNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},o0=a0;o0.Nodes=function(){return{gradient:new OA(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return color.xyz;
			}`)}}();var $a=class extends me{constructor(e,A,t,i,n,r,s,a,o,c){super("v3"),this.nodeType="CustomTexture",this.firstTime=!0,this.texture=e,this.textureSize=A,this.crop=t,this.projection=i,this.axis=n,this.side=r,this.size=s,this.mat=a,this.alpha=o,this.mode=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){e.require("position"),e.require("normal"),e.require("uv"),e.requires.uv=[!0],e.extensions.shaderTextureLOD=!0,e.extensions.derivatives=!0;let t=`g${this.uuid.toString().replace(/-/g,"")}`,i;switch(this.projection.value){case 3:i=e.include($a.Nodes.cylindrical);break;case 2:i=e.include($a.Nodes.spherical);break;case 1:let r=["vec3(1.0, 0.0, 0.0)","vec3(0.0, 1.0, 0.0)","vec3(0.0, 0.0, 1.0)"][this.axis.value],s=new OA(`
		vec3 ${t}_planarTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( (${t}_vCustomUv * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${this.side.value===2?"":`lalpha *= step(0.0, ${this.side.value===1?"-1.0 * ":""}dot(vObjectNormal, mat * ${r}));`}

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);i=e.include(s);break;default:i=e.include($a.Nodes.uv);break}if(this.projection.value===1&&this.firstTime){e.addVertexParsCode(`varying vec2 ${t}_vCustomUv;`),e.addFragmentParsCode(`varying vec2 ${t}_vCustomUv;`);let r=["zy","xz","xy"][this.axis.value];e.addVertexFinalCode(`${t}_vCustomUv = (1. + (transformed.${r})) / 2.;`)}e.addFragmentVariable(this.calpha,"float");let n=[];return n.push(this.texture.generate(e,"t")),n.push(this.textureSize.build(e,"v2")),n.push(this.crop.build(e,"f")),n.push(this.mat.build(e,"mat3")),n.push(this.size.build(e,"v2")),n.push(this.alpha.build(e,"f")),n.push(this.mode.build(e,"i")),n.push(this.calpha),this.firstTime=!this.firstTime,e.format(i+"("+n.join(",")+")",this.getType(e),A)}},l0=$a;l0.Nodes=function(){let e=new OA(`
vec3 cylindricalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;

				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),A=new OA(`
vec3 sphericalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),t=new OA(`vec3 uvTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);return{cylindrical:e,spherical:A,uv:t}}();var c0=class extends me{constructor(e,A){super("v3"),this.nodeType="CustomNormal",this.cnormal=e,this.alpha=A}generate(e,A){if(e.isShader("fragment")){let t=e.include(c0.Nodes.customNormal),i=[];return i.push(this.cnormal.build(e,"v3")),i.push("normal"),i.push(this.alpha.build(e,"f")),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("CustomNormalNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},h0=c0;h0.Nodes=function(){return{customNormal:new OA(`vec3 customNormal(vec3 cnormal, vec3 norm, float alpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return normal;
			}`)}}();function vt(e,A){return A.color(e)}function kO(e,A){switch(e.type){case"fresnel":return HO(e,A);case"gradient":return WO(e);case"depth":return jO(e);case"normal":return qO(e);case"noise":return XO(e,A);case"rainbow":return YO(e);case"toon":return QO(e,A);case"outline":return ZO(e,A);case"transmission":return JO(e);case"color":return VO(e,A)}}function GO(e){return{type:e.type}}function mi(e){let{alpha:A,mode:t}=e;return{...GO(e),alpha:A,mode:t}}function VO(e,A){return{...mi(e),color:vt(e.color,A)}}function HO(e,A){let{bias:t,scale:i,intensity:n,factor:r,color:s}=e;return{...mi(e),color:vt(s,A),bias:t,scale:i,intensity:n,factor:r}}function WO(e){let{gradientType:A,smooth:t,colors:i,steps:n,angle:r,offset:s,morph:a}=e;return{...mi(e),gradientType:A,smooth:t,colors:i.map(o=>new $A(o[0],o[1],o[2],o[3])),num:i.length,steps:n,offset:new Z(...s),morph:new Z(...a),angle:r}}function jO(e){let{gradientType:A,near:t,far:i,isVector:n,isWorldSpace:r,origin:s,direction:a,colors:o,steps:c,smooth:u}=e;return{...mi(e),gradientType:A,near:t,far:i,isVector:n,isWorldSpace:r,origin:new E(...s),direction:a?new E(...a):new E(1,0,0),colors:o.map(l=>l!==void 0?new $A(l[0],l[1],l[2],l[3]):new $A(0,0,0,0)),steps:c.slice(0,o.length),smooth:u}}function qO(e){let{cnormal:A}=e;return{...mi(e),cnormal:new E(A[0],A[1],A[2])}}function XO(e,A){return{...mi(e),scale:e.scale,move:e.move,fA:new Z(...e.fA),fB:new Z(...e.fB),size:new E(...e.size),distortion:new Z(...e.distortion),colorA:vt(e.colorA,A),colorB:vt(e.colorB,A),colorC:vt(e.colorC,A),colorD:vt(e.colorD,A),noiseType:e.noiseType}}function YO(e){return{...mi(e),filmThickness:e.filmThickness,movement:e.movement,wavelengths:new E(...e.wavelengths),noiseStrength:e.noiseStrength,noiseScale:e.noiseScale,offset:new E(...e.offset)}}function QO(e,A){return{...mi(e),positioning:e.positioning,colors:e.colors.map(t=>new $A(t[0],t[1],t[2],t[3])),num:e.colors.length,steps:e.steps,source:new E(...e.source),isWorldSpace:e.isWorldSpace,noiseStrength:e.noiseStrength,noiseScale:e.noiseScale,shadowColor:vt(e.shadowColor,A),offset:new E(...e.offset)}}function ZO(e,A){return{...mi(e),outlineColor:vt(e.outlineColor,A),contourColor:vt(e.contourColor,A),outlineWidth:e.outlineWidth,contourWidth:e.contourWidth,outlineThreshold:e.outlineThreshold,contourThreshold:e.contourThreshold,outlineSmoothing:e.outlineSmoothing,contourFrequency:e.contourFrequency,contourDirection:e.contourDirection,positionalLines:e.positionalLines,compensation:e.compensation}}function JO(e,A){return{...mi(e),thickness:e.thickness,ior:e.ior,roughness:e.roughness}}var Co=class extends Yt{},KO=class{constructor(e=1e3*10){this.timeout=e,this.cache=new Map,this.head={data:null,time:0,src:null,next:null,prev:null},this.tail={data:null,time:1/0,src:null,next:null,prev:null},this.hasClean=!1,this.head.next=this.tail,this.tail.prev=this.head}log(...e){}remove(e){let A=this.cache.get(e);A&&(this.dispose(e,A.data),this.cache.delete(e),A.prev.next=A.next,A.next.prev=A.prev)}scheduleCleanup(){this.hasClean||(this.log("scheduled cleanup"),this.hasClean=!0,setTimeout(()=>{this.hasClean=!1,this.log("cleaning");let e=Date.now(),A=this.head.next;for(;A.time<e-this.timeout;)this.dispose(A.src,A.data),this.cache.delete(A.src),A=A.next,A.prev=this.head,this.head.next=A;this.head.next!==this.tail?this.scheduleCleanup():this.log("no more cleanup")},this.timeout+1e3))}has(e){return this.cache.get(e)?.data}load(e){let A=Date.now(),t=this.cache.get(e);return t===void 0?(t={data:this.create(e),src:e,time:A,next:null,prev:null},this.cache.set(e,t)):(t.time=A,t.prev.next=t.next,t.next.prev=t.prev),t.prev=this.tail.prev,t.next=this.tail,this.tail.prev.next=t,this.tail.prev=t,this.scheduleCleanup(),t.data}},$O=class extends KO{create(e){return URL.createObjectURL(new Blob([e]))}dispose(e,A){URL.revokeObjectURL(A)}},ac;function AR(e){return typeof e=="string"?e:(ac||(ac=new $O),ac.load(e))}var eR=class{constructor(e,A){this.data=e,this.cache=A,this.refCount=0}deref(){if(this.refCount===0&&Gc)throw new Error("ref count -1?");this.refCount-=1,this.refCount===0&&(this.cache.remove(this),this.dispose())}dispose(){if(this.refCount!==0&&Gc)throw new Error("ref count is not 0")}},tR=class{constructor(){this.cache=new Map}remove(e){if(this.cache.delete(e.data)===!1&&Gc)throw new Error("ref count remove non-exists")}load(e){let A=this.cache.get(e);return A===void 0&&(A=this.create(e),this.cache.set(e,A)),A.refCount+=1,A}},u0=class extends eR{constructor(e,A){super(e,A.imageHolderCache),this.data=e,this.shared=A,this.loaded=!1,this.isVideo=!1,this.isVideo=e.type=="video",this.updateSrc(e.data)}async updateSrc(e){if(typeof document>"u")return;this.disposeTextures(),this.loaded=!1;let A=()=>{this.loaded=!0;let i=[1e3,1001,1002];for(let n of i){let r=this[n];r&&(r.image=this.img,r.needsUpdate=!0)}this.shared.requestRender()};if(this.isVideo){if(this.img=document.createElement("video"),this.img.preload="auto",this.img.playsInline=!0,this.img.currentTime=.01,typeof e!="string"){var t=new FileReader;t.readAsDataURL(new Blob([e],{type:"video/mp4"}));let i;await new Promise(n=>{t.onloadend=r=>{i=r.target?.result,n(null)}}),this.img.src=i}else this.img.src=e;this.img.onloadeddata=()=>{A()}}else this.img=new Image,this.img.src=AR(e),this.img.onload=A}getTexture(e){let A=this[e];if(A)return A;{let t;return this.isVideo?t=new Kw(this.img,void 0,e,e):t=new Je(this.img,void 0,e,e),this.loaded&&(t.needsUpdate=!0),this[e]=t,t}}disposeTextures(){this[1e3]?.dispose(),this[1e3]=void 0,this[1001]?.dispose(),this[1001]=void 0,this[1002]?.dispose(),this[1002]=void 0}dispose(){super.dispose(),this.disposeTextures()}},_n=class extends u0{},lu=class extends yt{},d0={noise:["noiseType"],texture:["projection","axis","side"],video:["projection","axis","side"],displace:["noiseType"],depth:["smooth","isWorldSpace","gradientType","isVector"]},f0={depth:["colors"]};function iR(e,A,t){let i=d0[e.type],n=f0[e.type];if(n!==void 0){let r=e.color;if(n.includes(A)){let s=r[A]?.value?.length;if(s!==void 0&&s!==t.length)return!0}}return i!==void 0?i.includes(A):!1}function p0(e,A,t){let i=t.uniforms[`f${t.id}_texture`];if(!i)return!1;let n=!1,r=e;if("image"in r){let s=r.image,a=A.image(s),o=i;o.image instanceof _n||o.image.deref(),o.image=a}if("video"in r){let s=r.video,a=A.video(s),o=i;o.image instanceof _n||o.image.deref(),o.image=a}if("wrapping"in r){let s=i;s.wrap=r.wrapping}if("repeat"in r||"offset"in r){let s="mat",a=t.uniforms[`f${t.id}_${s}`];"repeat"in r&&(a.repeat=r.repeat),"offset"in r&&(a.offset=r.offset),a.updateMatrix()}return n}function nR(e,A,t,i){let n=!1;for(let[r,s]of Object.entries(e)){if(!r||s===void 0)continue;if(b0(r,t,i)){r==="visible"&&t.type==="light"&&(n=!0);continue}t.visible=i.visible;let a=t.uniforms[`f${t.id}_${r}`];if(!!a&&!(a instanceof lu))switch(n=n||iR(t,r,s),a.constructor){case Ee:if(typeof s=="string"){let o=A.getColor(s);o&&(a.value=o);break}else{let o=s;a.value instanceof Co?a.value=new Yt(o.r,o.g,o.b,o.a):a.setRGBA(o);break}case xn:if(typeof s=="string"){let o=A.getColor(s);o&&(a.value=o);break}else{let o=s;a.value instanceof Co?a.value=new Yt(o.r,o.g,o.b,o.a):a.value.setRGBA(o.r,o.g,o.b,o.a);break}case _t:{let o=s;a.value.setX(o[0]),a.value.setY(o[1]);break}case St:{let o=s;a.value.setX(o[0]),a.value.setY(o[1]),a.value.setZ(o[2]);break}case qi:{p0(s,A,t);break}case mn:{a.value=s.map(o=>new $A(...o));break}default:{a.value=s;break}}}return n}var m0=class extends me{constructor(e,A,t){super("v3"),this.nodeType="Matcap",this.texture=e,this.alpha=A,this.mode=t,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.isShader("fragment")){e.addFragmentVariable(this.calpha,"float");let t=e.include(m0.Nodes.matcap);e.require("normal"),e.requires.normal=!0;let i=[];return i.push(this.texture.generate(e,"t")),i.push("normal"),i.push(this.alpha.build(e,"f")),i.push(this.mode.build(e,"i")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("MatcapNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},g0=m0;g0.Nodes=function(){return{matcap:new OA(`vec3 matcap(sampler2D matcapTex, vec3 normal, float alpha, int mode, out float calpha) {
                vec3 viewDir = normalize( vViewPosition );
                vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
                vec3 y = cross( viewDir, x );
                vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
                vec4 matcapColor = texture2D( matcapTex, uv );

                calpha =  alpha / clamp( alpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;
                
                return matcapColor.rgb;
            }
            `)}}();var nh=class extends lu{constructor(e,A){super("t"),this.image=e,this.wrap=A}get value(){return this.image.getTexture(this.wrap)}},rR=class extends lu{constructor(e){super("v3"),this.image=e,this._value=new E}get value(){return this._value.x=this.image.isVideo?this.image.img.videoWidth??0:this.image.img.width,this._value.y=this.image.isVideo?this.image.img.videoHeight??0:this.image.img.height,this._value}},v0=class extends me{constructor(e,A,t,i,n,r,s,a,o,c){super("v3"),this.nodeType="Toon",this.positioning=e,this.colors=A,this.steps=t,this.source=i,this.isWorldSpace=n,this.noiseStrength=r,this.noiseScale=s,this.shadowColor=a,this.offset=o,this.alpha=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(e,A){if(e.require("worldNormal"),e.require("worldPosition"),e.isShader("fragment")){e.define("COLORS_MAX",10),e.addFragmentVariable(this.calpha,"float");let t=e.include(v0.Nodes.toon),i=[];return i.push(this.positioning.build(e,"i")),i.push(this.colors.build(e,"v4[]")),i.push(this.steps.build(e,"f[]")),i.push(this.source.build(e,"v3")),i.push(this.isWorldSpace.build(e,"b")),i.push(this.noiseStrength.build(e,"f")),i.push(this.noiseScale.build(e,"f")),i.push(this.shadowColor.build(e,"v4")),i.push(this.offset.build(e,"v3")),i.push(this.alpha.build(e,"f")),i.push(this.calpha),e.format(t+"("+i.join(",")+")",this.getType(e),A)}else return console.warn("ToonNode is not compatible with "+e.shader+" shader."),e.format("vec3( 0.0 )",this.getType(e),A)}},y0=v0;y0.Nodes=function(){let e=new OA(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),A=new OA(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`),t=new OA(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				// For performance, compute the base input to a 1D hash from the integer part of the argument and the 
				// incremental change to the 1D based on the 3D -> 1D wrapping
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[A]),i=new OA(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`),n=new OA(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					// Comment out the "+ hash(p + b);" part below to get "square" cells
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[i]);return{toon:new OA(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					// Can't do this mode if lighting is "none"
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						// Algorithm from Chapter 10 of Graphics Shaders
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								// Light positions are in view-space for some reason?
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								// TODO: we want to use "intensity" but it isn't available in the shader code
								//dproduct += dot(pointLights[UNROLLED_LOOP_INDEX].color, weights);

								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize, 
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								// Use the direction vector for directional lights instead
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize, 
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize, 
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					// Distort with noise
					vec3 st = position / noiseScale;
					
					// Voronoi "smooth" noise
					float noise = 1.0 - voronoiNoise(st).x;

					// Voronoi cellular noise
					//float noise = 1.0 - rand(voronoiNoise(st).z);

					// Position warp noise
					// vec3 offset = vec3(
					// 	simplex3d(st),
					// 	simplex3d(st + vec3(111.1, 143.89, 217.19)),
					// 	simplex3d(st + vec3(171.1, 247.89, 117.23))
					// );
					// st += offset;
					// float noise = valueNoise(st);

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				// Compute ramp color
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				// Incorporate custom shadow color
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				// Accumulate alpha as usual
				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[Pt.simplex,e,t,n])}}();function Cp(e,A,t){e.setUvTransform(t[0],t[1],A[0],A[1],0,0,0)}var sR=class extends Yg{constructor(e,A){super(new Xe),this.repeat=e,this.offset=A,Cp(this.value,e,A)}updateMatrix(){Cp(this.value,this.repeat,this.offset)}},Dn=class{constructor(e,A,t,i){this.id=e,this.uuid=A,this.data=t,this.uniforms={};for(let n in i)this.uniforms[`f${this.id}_${n}`]=i[n];for(let n in t)b0(n,this,t)}get type(){return this.data.type}static create(e,A,t,i){if(t.type==="light")return vr.createLigherLayer(e,A,t,i);if(t.type==="texture"||t.type==="video"){let n=t.type==="texture"?i.image(t.texture.image):i.video(t.texture.video),r=new nh(n,t.texture.wrapping),s=new rR(n),a=new sR(t.texture.repeat,t.texture.offset),o=new LA(t.crop?1:0),c=new he(t.projection??0),u=new he(["x","y","z"].indexOf(t.axis)??0),l=new he(t.side??0),h=new _t(t.size?new Z(t.size[0],t.size[1]):new Z(100,100)),d=new LA(t.alpha??1),f=new he(t.mode??0),m=new l0(r,s,o,c,u,l,h,a,d,f),p=new xe(m.calpha,"f");return new je(e,A,t,{texture:r,textureSize:s,crop:o,projection:c,axis:u,side:l,size:h,mat:a,alpha:d,mode:f},m,f,p)}else if(t.type==="matcap"){let n=i.image(t.texture.image),r=new nh(n,t.texture.wrapping),s=new LA(t.alpha??1),a=new he(t.mode??0),o=new g0(r,s,a),c=new xe(o.calpha,"f");return new je(e,A,t,{texture:r,alpha:s,mode:a},o,a,c)}else if(t.type==="displace")if(t.displacementType==="noise"){let n=new St(new E(...t.offset)),r=new LA(t.scale??10),s=new LA(t.intensity??8),a=new LA(t.movement??1),o=new he(t.noiseType??0),c=new s0(s,a,n,r,o);return new x0(e,A,t,{offset:n,scale:r,intensity:s,movement:a,noiseType:o},c)}else throw new Error;else return lR(e,A,t,i)}updateByOp(e,A,t){let i=e;if(i.path[0]===void 0){if(i.type===0)return"type"in i.props||"category"in i.props?(t.scene?.markNeedsUpdateRendererDirty(),!0):nR(i.props,t.shared,this,A)}else if(i.path[0]==="texture")return"texture"in A||"video"in A?p0(i.props,t.shared,this):!0;return!1}dispose(){if(aR(this)){let e=this.uniforms[`f${this.id}_texture`];if(!e)return!1;let A=e;A.image instanceof _n||A.image.deref()}}hasValueByKey(e){return this.uniforms[e]!==void 0}hasValue(e){return this.hasValueByKey(`f${this.id}_${e}`)}setValue(e,A){let t=`f${this.id}_${e}`;this.hasValueByKey(t)&&A!==void 0&&(this.uniforms[t].value=A)}getNode(e){let A=`f${this.id}_${e}`;if(this.hasValueByKey(A))return this.uniforms[A]}getValue(e){let A=`f${this.id}_${e}`;if(this.hasValueByKey(A))return this.uniforms[A].value}getName(e){let A=/f\d+_(.*)/.exec(e);if(A&&A.length>1)return A[1];console.log(`Layer.getName: error ${e}`)}getNames(){let e=[];for(let A in this.uniforms){let t=this.getName(A);t&&e.push(t)}return e}},je=class extends Dn{constructor(e,A,t,i,n,r,s){super(e,A,t,i),this.params=i,this.color=n,this.mode=r,this.alpha=s}},x0=class extends Dn{constructor(e,A,t,i,n){super(e,A,t,i),this.position=n}},vr=class extends Dn{constructor(e,A,t,i,n){super(e,A,t,n),this.node=i}static createLigherLayer(e,A,t,i){let n,r=new LA(t.alpha),s=new he(t.mode),a;if(!t.visible)n=new Xg,a={};else if(t.category==="lambert"){n=new BO;let o=new Ee(i.color(t.emissive)??0);a={emissive:o},n.emissive=o}else if(t.category==="toon"){n=new UO;let o=new LA(t.shininess??30),c=new Ee(i.color(t.specular)??1118481);a={shininess:o,specular:c},n.shininess=o,n.specular=c}else if(t.category==="physical"){n=new FO;let o=new LA(t.roughness??.3),c=new LA(t.metalness??0),u=new LA(t.reflectivity??.5);a={roughness:o,metalness:c,reflectivity:u},n.roughness=o,n.metalness=c,n.reflectivity=u}else{n=new zO;let o=new LA(t.shininess??30),c=new Ee(i.color(t.specular)??1118481);a={shininess:o,specular:c},n.shininess=o,n.specular=c}return n.alpha=new LA(1),n.shadingAlpha=r,n.shadingBlend=s,a.alpha=n.shadingAlpha,a.mode=n.shadingBlend,new vr(e,A,t,n,a)}get category(){return this.node.category}};function aR(e){let A=e instanceof Dn?e.type:e;return A==="texture"||A==="video"||A==="displace_map"||A==="matcap"}function oR(e,A,t,i){switch(e.type){case"color":{let n=new Ee(i.color??5855577),r=new LA(i.alpha??1),s=new xe("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");s.keywords.alpha=r;let a=new he(i.mode??0);return n.alpha=r,new je(A,t,e,{color:n,alpha:r,mode:a},n,a,s)}case"fresnel":{let n=new Ee(i.color??16777215),r=new LA(i.bias??.1),s=new LA(i.scale??1),a=new LA(i.intensity??2),o=new LA(i.factor??1),c=new LA(i.alpha??1),u=new he(i.mode??0),l=new Jg(n,r,s,a,o,c,u),h=new xe(l.calpha,"f");return new je(A,t,e,{color:n,bias:r,scale:s,intensity:a,factor:o,alpha:c,mode:u},l,u,h)}case"rainbow":{let n=new LA(i.filmThickness??30),r=new LA(i.movement??0),s=new St(i.wavelengths??new E(0,0,0)),a=new LA(i.noiseStrength??0),o=new LA(i.noiseScale??1),c=new St(i.offset??new E(0,0,0)),u=new LA(i.alpha??1),l=new $g(n,r,s,a,o,c,u),h=new xe(l.calpha,"f"),d=new he(i.mode??0);return new je(A,t,e,{filmThickness:n,movement:r,wavelengths:s,noiseStrength:a,noiseScale:o,offset:c,alpha:u,mode:d},l,d,h)}case"transmission":{let n=new LA(i.thickness??10),r=new LA(i.ior??1.5),s=new LA(i.roughness??.5),a=Tt.transmissionSize,o=Tt.transmissionRenderTarget,c=Tt.transmissionRenderTargetDepth,u=window.innerWidth,l=window.innerHeight,h=u>=l?new _t(l/u,1):new _t(1,u/l),d=new LA(i.alpha??1),f=new i0(n,r,s,a,o,c,h,d),m=new xe(f.calpha,"f"),p=new he(i.mode??0);return new je(A,t,e,{thickness:n,ior:r,roughness:s,aspectRatio:h,alpha:d,mode:p},f,p,m)}case"toon":{let n=new he(i.positioning??0),r;i.colors?r=new mn(i.colors.length,i.colors):(r=new mn(10,new $A(0,0,0,1)),r.value[1]=new $A(1,1,1,1));let s;i.steps?s=new pn(i.steps.length,i.steps):(s=new pn(10,1),s.value[0]=0);let a=new St(i.source??new E(0,0,0)),o=new ds(i.isWorldSpace??!0),c=new LA(i.noiseStrength??0),u=new LA(i.noiseScale??1),l=new xn(i.shadowColor),h=new St(i.offset??new E(0,0,0)),d=new LA(i.alpha??1),f=new y0(n,r,s,a,o,c,u,l,h,d),m=new xe(f.calpha,"f"),p=new he(i.mode??0);return new je(A,t,e,{positioning:n,colors:r,steps:s,source:a,isWorldSpace:o,noiseStrength:c,noiseScale:u,shadowColor:l,offset:h,alpha:d,mode:p},f,p,m)}case"outline":{let n=new Ee(i.outlineColor??16777215),r=new Ee(i.contourColor??16777215),s=new LA(i.outlineWidth??.1),a=new LA(i.contourWidth??.1),o=new LA(i.outlineThreshold??.1),c=new LA(i.contourThreshold??.1),u=new LA(i.outlineSmoothing??.1),l=new LA(i.contourFrequency??.1),h=new St(i.contourDirections??new E(0,1,0)),d=new ds(i.positionalLines??!1),f=new ds(i.compensation??!0),m=Tt.normalRenderTarget,p=Tt.normalRenderTargetDepth,g=Tt.pixelRatioNode,v=Tt.resolution,x=new LA(i.alpha??1),y=new e0(n,r,s,a,o,c,u,l,h,d,f,v,m,p,g,x),M=new xe(y.calpha,"f"),w=new he(i.mode??0);return new je(A,t,e,{outlineColor:n,contourColor:r,outlineWidth:s,contourWidth:a,outlineThreshold:o,contourThreshold:c,outlineSmoothing:u,contourFrequency:l,contourDirection:h,positionalLines:d,compensation:f,alpha:x,mode:w},y,w,M)}case"depth":{let n=new he(i.gradientType??0),r=new ds(i.smooth??!1),s=new LA(i.near??50),a=new LA(i.far??200),o=new LA(i.isVector??1),c=new LA(i.isWorldSpace??0),u=new St(i.origin??new E),l=new St(i.direction??new E),h;i.colors?h=new mn(i.colors.length,i.colors):(h=new mn(2,new $A(0,0,0,1)),h.value[1]=new $A(1,1,1,1));let d;i.steps?d=new pn(i.steps.length,i.steps):(d=new pn(2,1),d.value[0]=0);let f=new LA(i.alpha??1),m=new he(i.mode??0),p=new n0(n,r,s,a,o,c,u,l,h,d,f),g=new xe(p.calpha,"f");return new je(A,t,e,{gradientType:n,smooth:r,near:s,far:a,isVector:o,isWorldSpace:c,origin:u,direction:l,colors:h,steps:d,alpha:f,mode:m},p,m,g)}case"noise":{let n=new LA(i.scale??1),r=new St(i.size??new E(100,100,100)),s=new LA(i.move??1),a=new _t(i.fA??new Z(1.7,9.2)),o=new _t(i.fB??new Z(8.3,2.8)),c=new _t(i.distortion??new Z(1,1)),u=new xn(i.colorA),l=new xn(i.colorB),h=new xn(i.colorC),d=new xn(i.colorD),f=new LA(i.alpha??1),m=new he(i.mode??0),p=new he(i.noiseType??0),g=new Qg(n,r,s,a,o,c,u,l,h,d,f,p),v=new xe(g.calpha,"f");return new je(A,t,e,{scale:n,size:r,move:s,fA:a,fB:o,distortion:c,colorA:u,colorB:l,colorC:h,colorD:d,alpha:f,mode:m,noiseType:p},g,m,v)}case"normal":{let n=new St(i.cnormal??new E(1,1,1)),r=new LA(i.alpha??1),s=new he(i.mode??0),a=new h0(n,r),o=new xe("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");return o.keywords.alpha=r,new je(A,t,e,{cnormal:n,alpha:r,mode:s},a,s,o)}case"gradient":{let n=new he(i.gradientType??0),r=new ds(i.smooth??!1),s;i.colors?s=new mn(i.colors.length,i.colors):(s=new mn(10,new $A(0,0,0,1)),s.value[1]=new $A(1,1,1,1));let a;i.steps?a=new pn(i.steps.length,i.steps):(a=new pn(10,1),a.value[0]=0);let o=new _t(i.offset??new Z(0,0)),c=new _t(i.morph??new Z(0,0)),u=new LA(i.angle??0),l=new LA(i.alpha??1),h=new he(i.mode??0),d=new o0(n,r,s,a,o,c,u,l),f=new xe(d.calpha,"f");return new je(A,t,e,{gradientType:n,smooth:r,colors:s,steps:a,offset:o,morph:c,angle:u,alpha:l,mode:h},d,h,f)}default:{let n=new Ee(1,0,0,1),r=new LA(1),s=new xe("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");s.keywords.alpha=r;let a=new he(0);return n.alpha=r,new je(A,t,e,{color:n,alpha:r,mode:a},n,a,s)}}}function lR(e,A,t,i){let n=kO(t,i);return oR(t,e,A,n)}function b0(e,A,t){if(t.type==="displace"&&(e==="intensity"||e==="visible")){let i=A.uniforms[`f${A.id}_intensity`];return i?(i.value=t.intensity*(t.visible?1:0),i):void 0}if(t.type!=="displace"&&(e==="alpha"||e==="visible")){let i=A.uniforms[`f${A.id}_alpha`];if(!i)return;if(i.value=t.alpha*(t.visible?1:0),t.type==="outline"&&e==="visible"){let n=A.uniforms[`f${A.id}_compensation`];n&&(n.value=t.compensation&&t.visible)}return i}}function Lp(e,A){let t=0;for(let i of e.layers)if(i.data.type!=="displace"&&"alpha"in i.data&&i.data.type!=="light"&&i.data.type!=="fresnel"&&i.data.type!=="texture"&&i.data.type!=="matcap"&&i.data.type!=="rainbow"&&i.data.type!=="outline"){let n=i.data.visible?i.data.alpha:0;if(n==1&&i.data.type=="depth"||i.data.type=="gradient"){for(let r of i.data.colors)if(r[3]<1){n=r[3];break}}else if(n==1&&i.data.type=="noise"){let r=A.color(i.data.colorA).a,s=A.color(i.data.colorB).a,a=A.color(i.data.colorC).a,o=A.color(i.data.colorD).a,c=Math.min(r,Math.min(s,Math.min(a,o)));c<1&&(n=c)}t+=(1-t)*n}return t<1}var An=class extends Ji{constructor(){super(void 0),this.flatShading=!1,this.cacheKey="",this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}customProgramCacheKey(){return this.cacheKey}},cR=class extends An{constructor(e,A,t,i){super(),this.flatShading=e,this.side=A,this.wireframe=t,this.root=i}updateAfterBuild(){let e=this.root;this.lights=e.lights,this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader,this.defines=e.defines,this.uniforms=e.uniforms,this.extensions=e.extensions,this.transparent=e.transparent,this.cacheKey=e.customProgramCacheKey()+"flat"+this.flatShading+this.side}onBeforeCompile(e,A){this.root.onBeforeCompile(e)}get data(){return this.root.data}get category(){return this.root.category}getFlavor(e,A,t){return this.root.getFlavor(e,A,t)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(e){return this.root.getLayersOfType(e)}getLayerByUuid(e){return this.root.getLayerByUuid(e)}updateByOp(e,A,t){this.root.updateByOp(e,A,t)}nodeMaterialDispose(){this.root.nodeMaterialDispose()}},w0=class extends An{constructor(e,A){super(),this.data=e,this.layerIdGen=0,this.flavors=[],this.type="NodeMaterial",this.updaters=[],this.reset0(e,A)}get nodeMaterial(){return this}getFlavor(e,A,t){let i=t?6:(e?3:0)+A;if(i===0)return this;this.flavors===void 0&&(this.flavors=[]),i-=1;let n=this.flavors[i];return n===void 0&&(n=new cR(e,A,t,this),this.flavors[i]=n,n.flatShading=e,n.side=A,n.updateAfterBuild()),n}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}reset(e,A){this.data!==e&&this.reset0(e,A)}reset0(e,A){this.data=e;let t=e.layers??ui.defaultTwoLayerData("phong").layers;this.layers=t.map(i=>Dn.create(this.layerIdGen++,i.id,i.data,A.shared)),this.layers.reverse(),this.name=e.name??"Untitled Material",this.onUpdate(),this.transparent=Lp(e,A.shared)}getLayersOfType(e){return this.layers.filter(A=>A.type===e)}getLayerByUuid(e){return this.layers.find(A=>A.uuid===e)}onUpdate(){this.cacheKey=this.computeCacheKey(),this.lightLayer=this.layers.find(e=>e instanceof vr),this.lightLayer===void 0&&(this.lightLayer=new vr(0,"",{...Et.defaultData("light","phong"),visible:!1},new Xg,{})),this.dispose(),this.needsUpdate=!0,this.blendColors(),this.blendAfterColors(),this.blendPositions()}updateByOp(e,A,t){if(this.data=A,this.transparent=Lp(A,t.shared),e.path[0]==="layers"){this.data=A;let i=t.shared,n=e.path[1];if(n===void 0){if(this.layers.reverse(),e.type===4){let r=Dn.create(this.layerIdGen++,e.id,e.data,t.shared);this.layers.splice(e.localIndex,0,r),t.scene?.markNeedsUpdateRendererDirty()}else if(e.type===5)this.layers.splice(e.localIndex,1)[0].dispose(),t.scene?.markNeedsUpdateRendererDirty();else if(e.type===6){let r=this.layers.findIndex(a=>a.uuid===e.id),s=this.layers[r];this.layers.splice(r,1),this.layers.splice(e.localIndex,0,s),t.scene?.markNeedsUpdateRendererDirty()}this.layers.reverse(),this.onUpdate()}else{let r=this.layers.find(s=>s.uuid===n);if(r){let s=A.layers.data(n);if(r.updateByOp({...e,path:e.path.slice(2)},s,t)){let a=Dn.create(this.layerIdGen++,n,s,i);this.layers.splice(this.layers.findIndex(o=>o.uuid===n),1,a),this.onUpdate()}}}}else this.reset(A,t)}blendColors(){let e=this.layers.findIndex(t=>t instanceof je),A=this.layers.findIndex(t=>t instanceof vr);if(e!==-1&&e<A){let t=this.layers[e].color;for(let i=e+1;i<A;++i){let n=this.layers[i];n instanceof je&&(t=new Ep(t,n.color,n.alpha,n.mode))}this.fragment.color=t}else this.fragment.color=void 0}blendAfterColors(){let e=new xe("outgoingLight","f"),A=this.layers.findIndex(t=>t instanceof vr);if(this.layers.length>A+1){for(let t=A+1;t<this.layers.length;++t){let i=this.layers[t];i instanceof je&&(e=new Ep(e,i.color,i.alpha,i.mode))}this.fragment.afterColor=e}else this.fragment.afterColor=void 0}blendPositions(){let e=this.layers.filter(A=>A instanceof x0);if(e.length>0){let A=e[0].position;for(let t=1;t<e.length;++t)e[t]&&(A=new ci(A,e[t].position,ci.ADD),A=new ci(A,new LA(.5).setReadonly(!0),ci.MUL));this.fragment.position=A}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(e){this.build(),e.defines=this.defines,e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.extensionDerivatives=this.extensions.derivatives===!0,e.extensionFragDepth=this.extensions.fragDepth===!0,e.extensionDrawBuffers=this.extensions.drawBuffers===!0,e.extensionShaderTextureLOD=this.extensions.shaderTextureLOD===!0}clampUniformsForPreview(e,A){let t=(i,n,r)=>Math.min(Math.max(i,n),r);for(let i of this.layers)if(i.type==="displace"){let n=t(i.uniforms[`f${i.id}_intensity`].value,e,A);i.uniforms[`f${i.id}_intensity`].value=n}}computeCacheKey(){let e="[";for(let{data:A}of this.data.layers)if(A.type==="light")e+=`"${A.visible?A.category.toUpperCase():"Basic"}"`;else{let t=(d0[A.type]??[]).map(r=>A[r]),i=(f0[A.type]??[]).map(r=>A[r]?.length??0),n=[...t,...i];n.length?e+=`["${A.type}", "${n.join('","')}"],`:e+=`"${A.type}",`}return e=e.slice(0,-1)+"]",e}updateFrame(e){for(let A=0;A<this.updaters.length;++A)e.updateNode(this.updaters[A])}build(){let e=new NO;this.lights=this.lightLayer.data.visible,e.build(this.fragment,this.fragment),this.vertexShader=e.getCode("vertex"),this.fragmentShader=e.getCode("fragment"),this.defines=e.defines,this.uniforms=e.uniforms,this.extensions=e.extensions,this.updaters=e.updaters;for(let A of this.flavors)A&&A.updateAfterBuild();return this}nodeMaterialDispose(){this.layers.forEach(e=>e.dispose()),super.dispose();for(let e of this.flavors)e&&e.dispose()}assetsLoaded(){for(let e of this.layers)if(e instanceof je){let A=e.params.texture;if(A instanceof nh&&!A.image.loaded)return!1}return!0}getHash(){let e="{";return e+='"fragment":'+this.fragment.getHash(),e+="}",e}};Object.defineProperties(An.prototype,{properties:{get:function(){return this.fragment.properties}}});var rh=class extends w0{},hR=Lh(oM()),Dp=new Map;function uR(e){if(typeof e=="string")return e;let A=Dp.get(e);return A||(A={url:URL.createObjectURL(new Blob([e]))},Dp.set(e,A)),A.url}var Fa=class{constructor({src:e,volume:A,delay:t,loop:i}){this._volume=1,this.delay=0,this._loop=1,this.loopsRemaining=0,this._status="stopped",this.onEnd=()=>{this.loopsRemaining===1/0?this.replay():this.loopsRemaining>1?(this.replay(),this.loopsRemaining--):(this._status="stopped",this.loopsRemaining=this._loop)};let n;typeof e=="string"?n={src:e}:n={src:uR(e),format:"wav"},this.sound=new hR.Howl(n),this.sound.on("end",this.onEnd),this.src=e,A!==void 0&&(this.volume=A),t!==void 0&&(this.delay=t),i!==void 0&&(this.loop=i)}get status(){return this._status}get volume(){return this._volume}set volume(e){this._volume=e,this.sound.volume(e)}get loop(){return this._loop}set loop(e){this._loop=e,this.loopsRemaining=e}replay(){this.clearDelay(),this.delayTimerId=window.setTimeout(()=>{this.sound.play(),this.clearDelay()},this.delay)}fade(e,A=1e3){e?(this.sound.volume(this._volume),this.clearFade(),this.fadeTimerId=window.setTimeout(()=>{this.sound.fade(this._volume,0,A),this.clearFade()},e)):this.sound.fade(this._volume,0,A)}on(e,A,t){this.sound.on(e,A,t)}off(e,A,t){this.sound.off(e,A,t)}play(){this._status==="playing"||this.sound.playing()||(this._status==="paused"?(this.sound.seek()===0?this.replay():this.sound.play(),this._status="playing"):this._status==="stopped"&&(this.replay(),this._status="playing"))}pause(){this._status==="playing"&&(this.sound.pause(),this.clearFade(),this.clearDelay(),this._status="paused")}stop(){this.sound.stop(),this.loopsRemaining=this._loop,this.clearFade(),this.clearDelay(),this._status="stopped"}clearFade(){this.fadeTimerId&&(clearTimeout(this.fadeTimerId),delete this.fadeTimerId)}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}dispose(e=!1){this.off(),this.stop(),this.clearFade(),this.clearDelay()}},dR=class{constructor(){this.type="ShapePath",this.color=new jA,this.subPaths=[],this.currentPath=null}moveTo(e,A){return this.currentPath=new io,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,A),this}lineTo(e,A){return this.currentPath?.lineTo(e,A),this}quadraticCurveTo(e,A,t,i){return this.currentPath?.quadraticCurveTo(e,A,t,i),this}bezierCurveTo(e,A,t,i,n,r){return this.currentPath?.bezierCurveTo(e,A,t,i,n,r),this}splineThru(e){return this.currentPath?.splineThru(e),this}toShapes(){let e={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},A={loc:e.ORIGIN,t:0};function t(d,f,m,p){let g=d.x,v=f.x,x=m.x,y=p.x,M=d.y,w=f.y,_=m.y,b=p.y,T=(y-x)*(M-_)-(b-_)*(g-x),S=(v-g)*(M-_)-(w-M)*(g-x),D=(b-_)*(v-g)-(y-x)*(w-M),L=T/D,R=S/D;if(D===0&&T!==0||L<=0||L>=1||R<0||R>1)return null;if(T===0&&D===0){for(let I=0;I<2;I++)if(i(I===0?m:p,d,f),A.loc===e.ORIGIN){let W=I===0?m:p;return{x:W.x,y:W.y,t:A.t}}else if(A.loc===e.BETWEEN){let W=+(g+A.t*(v-g)).toPrecision(10),eA=+(M+A.t*(w-M)).toPrecision(10);return{x:W,y:eA,t:A.t}}return null}else{for(let eA=0;eA<2;eA++)if(i(eA===0?m:p,d,f),A.loc===e.ORIGIN){let F=eA===0?m:p;return{x:F.x,y:F.y,t:A.t}}let I=+(g+L*(v-g)).toPrecision(10),W=+(M+L*(w-M)).toPrecision(10);return{x:I,y:W,t:L}}}function i(d,f,m){let p=m.x-f.x,g=m.y-f.y,v=d.x-f.x,x=d.y-f.y,y=p*x-v*g;if(d.x===f.x&&d.y===f.y){A.loc=e.ORIGIN,A.t=0;return}if(d.x===m.x&&d.y===m.y){A.loc=e.DESTINATION,A.t=1;return}if(y<-Number.EPSILON){A.loc=e.LEFT;return}if(y>Number.EPSILON){A.loc=e.RIGHT;return}if(p*v<0||g*x<0){A.loc=e.BEHIND;return}if(Math.sqrt(p*p+g*g)<Math.sqrt(v*v+x*x)){A.loc=e.BEYOND;return}let M;p!==0?M=v/p:M=x/g,A.loc=e.BETWEEN,A.t=M}function n(d,f){let m=[],p=[];for(let g=1;g<d.length;g++){let v=d[g-1],x=d[g];for(let y=1;y<f.length;y++){let M=f[y-1],w=f[y],_=t(v,x,M,w);_!==null&&m.find(b=>b.t<=_.t+Number.EPSILON&&b.t>=_.t-Number.EPSILON)===void 0&&(m.push(_),p.push(new Z(_.x,_.y)))}}return p}function r(d,f,m){let p=new Z;f.getCenter(p);let g=[];return m.forEach(v=>{v.boundingBox.containsPoint(p)&&n(d,v.points).forEach(x=>{g.push({identifier:v.identifier,isCW:v.isCW,point:x})})}),g.sort((v,x)=>v.point.x-x.point.x),g}function s(d,f,m,p,g){(g==null||g==="")&&(g="nonzero");let v=new Z;d.boundingBox.getCenter(v);let x=[new Z(m,v.y),new Z(p,v.y)],y=r(x,d.boundingBox,f);y.sort((S,D)=>S.point.x-D.point.x);let M=[],w=[];y.forEach(S=>{S.identifier===d.identifier?M.push(S):w.push(S)});let _=M[0].point.x,b=[],T=0;for(;T<w.length&&w[T].point.x<_;)b.length>0&&b[b.length-1]===w[T].identifier?b.pop():b.push(w[T].identifier),T++;if(b.push(d.identifier),g==="evenodd"){let S=b.length%2===0,D=b[b.length-2];return{identifier:d.identifier,isHole:S,for:D}}else if(g==="nonzero"){let S=!0,D=null,L=null;for(let R=0;R<b.length;R++){let I=b[R];f[I]&&(S?(L=f[I].isCW,S=!1,D=I):L!==f[I].isCW&&(L=f[I].isCW,S=!0))}return{identifier:d.identifier,isHole:S,for:D}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let a=0,o=999999999,c=-999999999,u=[];this.subPaths.forEach(d=>{let f=d.getPoints(),m=-999999999,p=999999999,g=-999999999,v=999999999;for(let x=0;x<f.length;x++){let y=f[x];y.y>m&&(m=y.y),y.y<p&&(p=y.y),y.x>g&&(g=y.x),y.x<v&&(v=y.x)}c<=g&&(c=g+1),o>=v&&(o=v-1),f.length&&u.push({curves:d.curves,points:f,isCW:Sh.isClockWise(f),identifier:a++,boundingBox:new VS(new Z(v,p),new Z(g,m))})});let l=u.map(d=>s(d,u,o,c,this.userData?.style.fillRule)),h=[];return u.forEach(d=>{let f=l[d.identifier];if(f&&!f.isHole){let m=new no;m.curves=d.curves,l.filter(p=>p?.isHole&&p.for===d.identifier).forEach(p=>{if(p){let g=u[p.identifier],v=new io;v.curves=g.curves,m.holes.push(v)}}),h.push(m)}}),h}},S0,Pp=new Promise(e=>{S0=e}),Op=!1;async function fR(){if(Op)return;let e=await ZS(()=>import("./opentype.7efaa196.js"),[]);S0(e),Op=!0}var pR=class{async load(e,A,t=()=>{}){let{load:i}=await Pp;i(e,(n,r)=>{n||!r?t(n??"Something went wrong"):A(r)})}async parse(e){let{parse:A,Bidi:t}=await Pp;try{let i=A(e),n=new t,r=s=>i.charToGlyphIndex(s.char);return n.registerModifier("glyphIndex",null,r),n.applyFeatures(i,i.defaultRenderOptions.features),{font:i,bidi:n}}catch(i){console.error(i)}}};async function mR(e){return await(await fetch(e)).arrayBuffer()}var gR=new pR;async function Rp(e){let A,t,i=!1;if(e.url?(A=await mR(e.url),t=e.url,i=e.url.startsWith("/")):e.data&&(A=e.data.buffer),A){let n=await gR.parse(A);if(n)return{font:n.font,url:t,intercepted:i,arr:A,bidi:n.bidi}}}function vR(e,A){return A.state.glyphIndex===e||A.state.fina===e||A.state.medi===e||A.state.init===e}var yR=class{constructor(e){this._arrayBuffer=new ArrayBuffer(1),this._isLoaded=!1,this._intercepted=!1,this._isUserFont=e.isUserFont??!1,this._loadingPromise=Rp(e).then(A=>{A&&(this._arrayBuffer=A.arr,this._url=A.url,this.font=A.font,this._intercepted=A.intercepted,this._isLoaded=!0,this._bidi=A.bidi)})}update(e){this._isLoaded=!1,this._isUserFont=e.isUserFont??!1,this._loadingPromise=Rp(e).then(A=>{A&&(this._arrayBuffer=A.arr,this._url=A.url,this.font=A.font,this._intercepted=A.intercepted,this._isLoaded=!0,this._bidi=A.bidi)})}get url(){return this._url}get intercepted(){return this._intercepted}get isLoaded(){return this._isLoaded}get loadingPromise(){return this._loadingPromise}reverseLigaturesTable(e,A,t){if(!this._bidi)return[];let i=this._bidi;i.getTextGlyphs(A);let n=i.tokenizer.tokens,r=[],s=0,a=t.length===n.length;for(let o=0;o<t.length;o++){let c=t[o].index,u=String.fromCharCode(t[o].unicode),l=n[s];if(vR(c,l)||a)r.push({char:u,index:c,replacements:[l.state.glyphIndex],replacementChars:[l.char]}),s++;else{let h=l.char,d="",f=[l.state.glyphIndex],m=[],p=!1;for(;!p;)s++,d=A.charAt(s),h+=d,f.push(e.charToGlyphIndex(d)),m=e.stringToGlyphs(h),m.length===1&&m[0].index===c&&(p=!0),s>A.length&&(p=!0);r.push({char:u,index:c,replacements:f,replacementChars:Array.from(h)}),s++}}return r}generateShapes(e,A){if(!this._isLoaded)return;let t=this.font,i=A.fontSize/this.unitsPerEm,n=A.fontSize*A.lineHeight,r=e.map(g=>this.getTextWidth(g,A)),s=A.width,a=this.getCharWidth(`
`,A),o=A.horizontalAlign===1?a:0,c=this.computeSpaceWidthForLine(e,0,A),u=this.getLineInitialOffsetX(r[0],s,A.horizontalAlign,e[0],a),l=this.getLineInitialOffsetY(n,e.length,A.height,i,A.verticalAlign),h=[],d=e.map(g=>[]),f=e.map(g=>[]),m;for(let g=0;g<e.length;g++){let v=e[g],x={features:{liga:!0}},y=[];try{y=t.stringToGlyphs(v,x)}catch(w){console.warn(w)}u=this.getLineInitialOffsetX(r[g],s,A.horizontalAlign,v,a);let M=[];try{M=this.reverseLigaturesTable(t,v,y)}catch(w){console.warn(w)}c=this.computeSpaceWidthForLine(e,g,A);for(let w=0;w<y.length;w++){let _=y[w],b=_.index===0?`
`:_.unicode?String.fromCharCode(_.unicode):void 0,T=M[w],S=0,D=0;w===0&&A.horizontalAlign===2&&_.leftSideBearing!==void 0&&(D=-_.leftSideBearing*i),m&&(S=t.getKerningValue(_,m)*i),u+=D+S;let L=0;if(b===`
`)L=o;else if(b===" ")L=c;else{let R=this.createPath(_,i,u,l,A);R&&(L=R.offsetX-(S+D),h.push(R.path))}if(T.replacements.length===1)f[g].push([u,l]),d[g].push(L);else{let R=T.replacements.map(F=>(t.glyphs.get(F).advanceWidth??0)*i),I=R.reduce((F,V)=>F+=V,0),W=R.map(F=>F/I),eA=u;for(let F=0;F<W.length;F++){let V=L*W[F];f[g].push([eA,l]),d[g].push(V),eA+=V}}u+=L,m=_}l-=n}let p=[];for(let g=0,v=h.length;g<v;g++)p.push(...h[g].toShapes());return{shapes:p,charWidths:d,lineWidths:r,charCoords:f}}get isUserFont(){return this._isUserFont}get arrayBuffer(){return this._arrayBuffer}get ascender(){return this.font?.ascender??0}get descender(){return this.font?.descender??0}get familyName(){return this.font?.names.fontFamily??""}get subfamilyName(){return this.font?.names.fontSubfamily??""}get unitsPerEm(){return this.font?.unitsPerEm??1}getLineInitialOffsetX(e,A,t,i,n){return(t===3||t===2)&&i.indexOf(`
`)>=0&&(e-=n),t===3?A*.5-e*.5:t===2?A-e:0}getLineInitialOffsetY(e,A,t,i,n){let r=A*e,s=Math.abs(this.ascender-this.descender)*i,a=e-s,o=-this.ascender*i-a/2;return n===3?-(t-r-o):n===2?-(t*.5-r*.5-o):o}createPath(e,A,t,i,n){let r=e.getPath(t,-i,n.fontSize,{kerning:!1,letterSpacing:n.letterSpacing});if(!r){console.error('THREE.Font: character "'+e+'" does not exists in font family '+this.familyName+".");return}let s=new dR,a=(e.advanceWidth??1)*A;if(e)for(let o of r.commands){let c=s.currentPath?.currentPoint;if(!(c&&o.type!=="Z"&&c.x===o.x&&-c.y===o.y))switch(o.type){case"M":s.moveTo(o.x,-o.y);break;case"L":s.lineTo(o.x,-o.y);break;case"Q":s.quadraticCurveTo(o.x1,-o.y1,o.x,-o.y);break;case"C":s.bezierCurveTo(o.x1,-o.y1,o.x2,-o.y2,o.x,-o.y);break}}return s.subPaths.forEach(o=>{let c=xR(o.curves);c!==void 0&&o.currentPoint.distanceTo(c)>0&&o.lineTo(c.x,c.y)}),{offsetX:a+n.fontSize*n.letterSpacing,path:s}}getCharWidth(e,A){return this.font?.getAdvanceWidth(e,A.fontSize,{kerning:!0,letterSpacing:A.letterSpacing})??0}getTextWidth(e,A){return this.font?.getAdvanceWidth(e,A.fontSize,{kerning:!0,letterSpacing:A.letterSpacing})??0}computeSpaceWidthForLine(e,A,t){let i=this.getCharWidth(" ",t),n=e[A];if(n){let r=this.countSpaces(n.trimEnd());if(t.horizontalAlign===4&&A<e.length-1&&r){let s=t.width,a=this.getTextWidth(n,t);return(s-(a-r*i))/r}}return i}countSpaces(e){return(e.match(/ /g)||[]).length}};function xR(e){if(e.length){let A=e[0];if(A instanceof qt)return A.v1;if(A instanceof Wt||A instanceof Ki)return A.v0}}var bR=class{constructor(){this.objects=new Map,this.unreachable=new Set}getCached(e){return this.objects.get(e)}get size(){return this.objects.size}get(e,A){let t=this.objects.get(e);return t===void 0?(t=this.createObject(e,A),this.objects.set(e,t)):t.isShared=!0,t}mutateIfUnique(e,A){let t=this.objects.get(e);if(t&&t.isShared!==!0)return this.objects.delete(e),this.objects.set(A,t),t}startGc(){this.unreachable=new Set(this.objects.keys())}markAsReachable(e,A){let t=this.objects.get(e);A===t?this.unreachable.delete(e):console.warn("Reachable but deleted",e)}endGc(){this.unreachable.forEach(e=>{this.disposeObject(this.objects.get(e)),this.objects.delete(e)}),this.unreachable.clear()}dispose(){this.objects.forEach(e=>{this.disposeObject(e)}),this.objects.clear()}},Ip=class extends bR{constructor(e){super(),this.flatShading=e}disposeObject(e){e.dispose()}createObject(e,A){let t=Eo(e,A,this.flatShading);return t.computeBoundingSphere(),t}},wR={find(e){},markNeedsUpdateRendererDirty:function(){},markGeometryCacheDirty:function(){},addPendingExpandCloner:function(e){},addPendingUpdateCloner(e){}},SR=class extends tR{constructor(e){super(),this.shared=e}create(e){return new u0(e,this.shared)}},cu=class{constructor(e,A={}){if(this.geometryCache=new Ip(!0),this.geometryCache2=new Ip(!1),this.imageHolderCache=new SR(this),this.thisContext={scene:wR,shared:this},this.deletedMaterial=new rh(ui.defaultTwoLayerData("phong"),this.thisContext),this.deletedImage=new _n(Qc.emptyImage,this),this.deletedVideo=new _n(po.defaultVideo,this),this.materials={},this.images={},this.videos={},this.colors={},this.audios={},this.fonts={},this.penumbraSize=[],this.requestRender=()=>{this._requestRender&&this._requestRender()},A.images)for(let[t,i]of Object.entries(A.images))this.addImage(t,i);if(A.videos)for(let[t,i]of Object.entries(A.videos))this.addVideo(t,i);if(A.audios)for(let[t,i]of Object.entries(A.audios))this.addAudio(t,i.data);this.reset(e)}setRequestRender(e){this._requestRender=e}reset(e){for(let[A,t]of Object.entries(e.images))this.addImage(A,t);for(let[A,t]of Object.entries(e.videos))this.addVideo(A,t);for(let[A,t]of Object.entries(e.colors))this.addColor(A,t);for(let[A,t]of Object.entries(e.materials))this.addMaterial(A,new rh(t,this.thisContext));for(let[A,t]of Object.entries(e.audios))this.addAudio(A,t.data);for(let[A,t]of Object.entries(e.fonts))this.addFont(A,t);this.penumbraSize=e.penumbraSize}addMaterial(e,A){A.uuid=e,this.materials[e]=A}deleteMaterial(e){this.materials[e]&&(this.materials[e].nodeMaterialDispose(),delete this.materials[e])}getMaterial(e){return this.materials[e]}getMaterialOrDeletedPlaceholder(e){return this.materials[e]??this.deletedMaterial}material(e){return typeof e=="string"?this.getMaterialOrDeletedPlaceholder(e):new w0(e,this.thisContext)}getMaterials(){return this.materials}addImage(e,A){return this.images[e]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),this.images[e].updateSrc(A.data),!0):(this.images[e]=new _n(A,this),!1)}deleteImage(e){let A=this.images[e];A&&(A.dispose(),delete this.images[e])}getDefaultImage(){return this.images.image_0}getImage(e){return this.images[e]??this.deletedImage}image(e){return typeof e=="string"?this.getImage(e):this.imageHolderCache.load(e)}addVideo(e,A){return this.videos[e]?(this.videos[e].updateSrc(A.data),!0):(this.videos[e]=new _n(A,this),!1)}deleteVideo(e){let A=this.videos[e];A&&(A.dispose(),delete this.videos[e])}getVideo(e){return this.videos[e]??this.deletedVideo}video(e){return typeof e=="string"?this.getVideo(e):this.imageHolderCache.load(e)}addColor(e,A){return this.colors[e]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),"a"in A?this.colors[e].setRGBA(A.r,A.g,A.b,A.a):this.colors[e].setRGBA(A.r,A.g,A.b,1),!0):("a"in A?this.colors[e]=new Co(A.r,A.g,A.b,A.a):this.colors[e]=new Co(A.r,A.g,A.b,1),!1)}updateColor(e,A){if(this.colors[e]){this.onColorOrImageUpdate&&this.onColorOrImageUpdate();let t=this.colors[e];return this.colors[e].r=A.r??t.r,this.colors[e].g=A.g??t.g,this.colors[e].b=A.b??t.b,this.colors[e].a=A.a??t.a,!0}return!1}deleteColor(e){this.colors[e]&&delete this.colors[e]}getColor(e){return this.colors[e]}color(e){let A;if(typeof e=="string"){let t=this.getColor(e);t?A=t:(console.warn("Tried to create color layer params with a color key that does not exist in the assets manager"),A=new Yt(0,0,0,0))}else return"a"in e?new Yt(e.r,e.g,e.b,e.a):new Yt(e.r,e.g,e.b,1);return A}addAudio(e,A){this.audios[e]=A}getAudio(e){let A=this.audios[e];if(A instanceof Fa)return A;{let t=new Fa({src:A});return this.audios[e]=t,t}}deleteAudio(e){let A=this.audios[e];A&&(A instanceof Fa&&A.dispose(),delete this.audios[e])}addFont(e,A){this.fonts[e]=new yR(A),this.fonts[e].loadingPromise.then(()=>this.requestRender())}getFont(e){return this.fonts[e]}deleteFont(e){this.fonts[e]&&delete this.fonts[e]}dispose(){Object.keys(this.materials).forEach(e=>this.deleteMaterial(e)),this._requestRender=void 0,Object.values(this.audios).forEach(e=>{e instanceof Fa&&e.dispose()}),this.audios={},this.geometryCache.dispose(),this.geometryCache2.dispose()}},MR=new cu(Vc.emptyData()),Ks=class extends $i{updateByPatchedOp(e,A,t){if(super.updateByPatchedOp(e,A,t),xM(e.path,["materials"])!==null&&e.type===0&&Array.isArray(this.material))for(let[i,n]of Object.entries(e.props)){let r=t.shared.material(n);this.material[Number(i)]=r}else if(Mn(e.path,["material"])&&this.material instanceof An)"material"in A&&typeof A.material!="string"&&this.material.updateByOp(gt.drop(e,1),A.material,t);else if(Mn(e.path,["materials","*"])&&Array.isArray(this.material)){let i=e.path[1];if("materials"in A&&i<this.material.length){let n=A.materials[i];typeof n!="string"&&this.material[i].updateByOp(gt.drop(e,2),n,t)}}}updateState(e,A){super.updateState(e,A),e.castShadow!==void 0&&(this.castShadow=e.castShadow),e.receiveShadow!==void 0&&(this.receiveShadow=e.receiveShadow);let t=this.dataPatched;if(e.geometry?.type!=="NonParametricGeometry"&&"material"in e&&e.material!==void 0&&(this.disposeMaterial(),this.material=A.shared.material(e.material).getFlavor(t.flatShading,t.side,t.wireframe),A.scene?.markNeedsUpdateRendererDirty()),e.geometry?.type==="NonParametricGeometry"&&("materials"in e&&e.materials!==void 0?(this.disposeMaterial(),this.material=e.materials.map(i=>A.shared.material(i).getFlavor(t.flatShading,t.side,t.wireframe)),A.scene?.markNeedsUpdateRendererDirty()):"material"in e&&e.material!==void 0&&(this.disposeMaterial(),this.material=[A.shared.material(e.material).getFlavor(t.flatShading,t.side,t.wireframe)],A.scene?.markNeedsUpdateRendererDirty())),e.flatShading!==void 0||e.wireframe!==void 0||e.side!==void 0)if(Array.isArray(this.material))for(let i=0;i<this.material.length;i++)this.material[i]=this.material[i].getFlavor(t.flatShading,t.side,t.wireframe);else this.material=this.material.getFlavor(t.flatShading,t.side,t.wireframe)}disposeMaterial(){this.material&&Wm(this.material).forEach(e=>{e instanceof An&&(e instanceof rh||e.nodeMaterialDispose())})}dispose(){this.disposeMaterial(),super.dispose()}},Un=class extends Ks{constructor(e,A,t){super(e,A),this.data=A,this.localGeometry=void 0}chooseGeoemtryCache(e){return e.geometryCache}markGeometryAsReachable(e){this.geometryCreateDeleyed instanceof VA&&this.chooseGeoemtryCache(e).markAsReachable(this.dataPatched.geometry,this.geometryCreateDeleyed)}get geometry(){if(this.localGeometry!==void 0)return this.localGeometry;if(this.geometryCreateDeleyed instanceof cu){let e=this.geometryCreateDeleyed,A=this.chooseGeoemtryCache(e);this.geometryCreateDeleyed=A.get(this.dataPatched.geometry,e)}return this.geometryCreateDeleyed}set geometry(e){this.localGeometry=e}get is2DAndNoDepth(){let e=this.dataPatched.geometry;return go.is2DParametricMesh(e.type)&&e.depth===0}get is2DType(){return go.is2DParametricMesh(this.geometry.userData.type)}updateByPatchedOp(e,A,t){super.updateByPatchedOp(e,A,t),Mn(e.path,["geometry"])&&this.updateByPatchedOpGeometry(gt.drop(e,1),A.geometry,t)}removeInteractionGeometry(){this.localGeometry?.dispose(),this.localGeometry=void 0}updateGeometryInteractions(e,A){this.invalidateDownstreamBooleanData();let t=this.data.geometry.type;if(t==="NonParametricGeometry"||t==="SubdivGeometry"){let i=e;if(this.localGeometry===void 0){let o={...this.data.geometry,...i};this.localGeometry=Eo(o,A,this.data.flatShading)}let n,r,s;i.scaleBaked?[n,r,s]=i.scaleBaked:{width:n,height:r,depth:s}=i;let a=this.localGeometry.userData;a.sxPrev!==void 0&&eh(this.localGeometry.attributes,n/a.sxPrev,r/a.syPrev,s/a.szPrev),a.sxPrev=n,a.syPrev=r,a.szPrev=s}else{let i={...this.data.geometry,...e};this.localGeometry?.dispose(),this.localGeometry=Eo(i,A,this.data.flatShading)}}refreshAttachedCloners(e){for(let A of this.attachedSurfaceCloners)e.scene.addPendingUpdateCloner(A.object)}createGeometryDelayed(e){this.geometryCreateDeleyed=e.shared,this.refreshAttachedCloners(e)}updateByPatchedOpGeometry(e,A,t){let i=!1;e.type===0&&e.path.length===0&&yg(["scaleBaked"],Object.keys(e.props))&&this.geometryCreateDeleyed instanceof rt&&this.chooseGeoemtryCache(t.shared).mutateIfUnique(this.geometryCreateDeleyed.data,A)===this.geometryCreateDeleyed&&(i=!0,this.geometryCreateDeleyed.mutateDirectlyScaleBaked(A,e.props.scaleBaked),this.refreshAttachedCloners(t)),i||(t.scene?.markGeometryCacheDirty(),this.createGeometryDelayed(t)),this.resetBBoxNeedsUpdate(),this.invalidateDownstreamBooleanData()}updateGeometryOnStateUpdate(e,A){this.createGeometryDelayed(A)}updateState(e,A){e.geometry!==void 0&&this.updateGeometryOnStateUpdate(e.geometry,A),super.updateState(e,A)}updateGeometryGroupsIfNeeded(){Array.isArray(this.material)&&this.geometry.groups.length===0&&this.geometry.addGroup(0,Math.max(this.geometry.getIndex()?.count??0,this.geometry.getAttribute("position").count),0)}updateEntityBoxSize(e,A){let t=this.geometry.userData.parameters;this.is2DType?e.set(0,0,t.depth*.5):e.setScalar(0),A.set(t.width,t.height,t.depth??0).multiplyScalar(.5)}};function _R(e){if(e.geometry.attributes.extrudeNormal||!e.geometry.attributes.position||!e.geometry.attributes.normal)return;let A=new Map,t=e.geometry.attributes.position.array,i=e.geometry.attributes.normal.array,n=new Float32Array(t.length);for(let r=0;r<t.length;r+=3){let s=`${t[r]}_${t[r+1]}_${t[r+2]}`,a=new E(i[r],i[r+1],i[r+2]);A.has(s)?A.get(s)?.normals.push(a):A.set(s,{normals:[a],result:new E})}A.forEach((r,s)=>{for(let a of r.normals)r.result.add(a);r.result.divideScalar(r.normals.length)});for(let r=0;r<t.length;r+=3){let s=`${t[r]}_${t[r+1]}_${t[r+2]}`,a=A.get(s)?.result;a&&(n[r]=a.x,n[r+1]=a.y,n[r+2]=a.z)}e.geometry.setAttribute("extrudeNormal",new DA(n,3))}function TR(e){if(e.geometry.attributes.extrudeNormals||!e.geometry.attributes.position)return;let A=e.geometry.attributes.position.array,t=new Float32Array(A.length),i=new E;for(let n=0;n<A.length;n+=3)i.set(A[n],A[n+1],A[n+2]).normalize(),t[n]=i.x,t[n+1]=i.y,t[n+2]=i.z;e.geometry.setAttribute("extrudeNormal",new DA(t,3))}function hu(e){if(Array.isArray(e.material)){for(let A of e.material)if(A.getLayersOfType("outline").length===0)return}else if(!(e.material instanceof An)||e.material.getLayersOfType("outline").length===0)return;e instanceof Un&&e.is2DAndNoDepth?TR(e):_R(e)}function uu(e){if(!e.geometry.attributes.position)return;let A=e.geometry.attributes.position.array,t=new Float32Array(A.length),i=parseInt(e.uuid.replace(/\D/g,"")),n=[Fe.seededRandom(i),Fe.seededRandom(i+1e4),Fe.seededRandom(i+2e4)];for(let r=0;r<A.length;r++)t[r]=n[r%3];e.geometry.setAttribute("randomColor",new ZA(t,3))}su.then(e=>{});var ER=new GA,CR=new GA,LR=new GA,ti=new Nt,fs=new E,DR=new GA,PR=new GA,sh=class extends Un{constructor(e,A,t){super(e,A,t),this.data=A,this.hiddenMatrixOld=new GA,this.smoothShading=!0,this.matrixWorldRigid=new GA,this.skipReactionUpdate=!1}chooseGeoemtryCache(e){return this.dataPatched.flatShading?e.geometryCache:e.geometryCache2}get subdivPointerNew(){return this.localGeometry!==void 0?this.subdivPointer:this.geometry.ensureSubdivPointer()}get originalGeometryNew(){return this.localGeometry!==void 0?this.originalGeometry:this.geometry.originalGeometry}get phongAngle(){return this.data.geometry.phongAngle??45}updateEntityBoxSize(e,A){let t=this.geometry.userData.parameters;e.copy(this.originalGeometryNew.boundingSphere.center),A.set(t.width,t.height,t.depth??0).multiplyScalar(.5)}createGeometryByControls(e){if(this.skipReactionUpdate===!0)return;let A=this.localGeometry?.uuid,{originalGeometry:t,subdividedGeometry:i,subdivPointer:n}=rt.build(e,this.subdivPointer,this.smoothShading,this.shearScale);this.subdivPointer=n,t!==void 0&&(this.originalGeometry?.dispose(),this.originalGeometry=t),i!==void 0&&(this.subdividedGeometry?.dispose(),this.subdividedGeometry=i??void 0),this.localGeometry=this.subdividedGeometry??this.originalGeometry,hu(this),uu(this),this.calcBoundingBox(),A&&(this.localGeometry.uuid=A)}updateState(e,A){if(super.updateState(e,A),e.flatShading!==void 0){let t=this.material;this.material=t.getFlavor(!1,t.side,t.wireframe),this.smoothShading=!e.flatShading,this.createGeometryDelayed(A)}}updateMesh(e=!1){rt.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1,this.originalGeometry,e?this.shearScaleInv:void 0),this.subdividedGeometry&&rt.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1,this.subdividedGeometry,e?this.shearScaleInv:void 0)}updateTopology(){this.originalGeometry.dispose(),this.originalGeometry=rt.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1),this.subdividedGeometry&&(this.subdividedGeometry.dispose(),this.subdividedGeometry=rt.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1)),this.localGeometry=this.subdividedGeometry??this.originalGeometry}raycast(e,A){let t=this.localGeometry;this.localGeometry=this.originalGeometryNew,$i.prototype.raycast.call(this,e,A),this.localGeometry=t}updateMatrixWorldSVD(){let e=this.matrixWorld.elements,A=[[e[0],e[4],e[8]],[e[1],e[5],e[9]],[e[2],e[6],e[10]]],{u:t,v:i,q:n}=(0,MO.SVD)(A),r=ER.set(t[0][0],t[0][1],t[0][2],0,t[1][0],t[1][1],t[1][2],0,t[2][0],t[2][1],t[2][2],0,0,0,0,1),s=CR.set(i[0][0],i[0][1],i[0][2],0,i[1][0],i[1][1],i[1][2],0,i[2][0],i[2][1],i[2][2],0,0,0,0,1),a=LR.copy(s).transpose();this.shearScale=DR.makeScale(n[0],n[1],n[2]).multiply(a).premultiply(s),this.shearScaleInv=PR.copy(this.shearScale).invert(),this.matrixWorldRigid.multiplyMatrices(r,a),n.every(o=>Math.abs(n[0]-o)<.01)&&(this.shearScale=void 0,this.shearScaleInv=void 0)}activateSVDCompensation(){this.shearScale!==void 0&&(this.matrixAutoUpdate=!1,this.matrix.copy(this.matrixWorldRigid).copyPosition(this.matrixWorld),this.hiddenMatrixOld.copy(this.hiddenMatrix),this.hiddenMatrix.copy(this.parent.matrixWorld).invert())}deactivateSVDCompensation(){this.shearScale!==void 0&&(this.shearScale=void 0,this.shearScaleInv=void 0,this.matrixAutoUpdate=!0,this.hiddenMatrix.copy(this.hiddenMatrixOld))}calcBoundingBox(){let e=this.originalGeometry;e.boundingSphere===null&&(e.boundingSphere=new Qt,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=e.boundingSphere));let A=e.attributes.position,t=e.boundingSphere.center;ti.setFromBufferAttribute(A),ti.getCenter(t),e.boundingSphere.radius=t.distanceTo(ti.max),isNaN(e.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),ti.getSize(fs),this.shearScale&&fs.divide(this.scale);let i={width:fs.x,height:fs.y,depth:fs.z};return this.geometry.userData.parameters=i,i}updateBoundingSphere(e){let A=this.originalGeometry;ti.min.set(e[0],e[2],e[4]),ti.max.set(e[1],e[3],e[5]),this.shearScaleInv&&(ti.min.applyMatrix4(this.shearScaleInv),ti.max.applyMatrix4(this.shearScaleInv)),A.boundingSphere===null&&(A.boundingSphere=new Qt);let t=A.boundingSphere.center;ti.getCenter(t),A.boundingSphere.radius=t.distanceTo(ti.max)}freeSubdivPointer(){this.subdivPointer&&(rt.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0),this.localGeometry=void 0,this.originalGeometry?.dispose(),this.subdividedGeometry?.dispose()}dispose(){super.dispose(),this.freeSubdivPointer()}updateByPatchedOpGeometry(e,A,t){super.updateByPatchedOpGeometry(e,A,t),this.localGeometry&&this.createGeometryByControls(A)}},Np=-1,OR=1,RR={x:[1,0,0],"-x":[-1,0,0],y:[0,1,0],"-y":[0,-1,0],z:[0,0,1],"-z":[0,0,-1]},IR={polygon_center:0,edge:1,vertex:2},Ua=(e,A)=>(t,i)=>!A||t===0||e===0?0:e*i/100,WA=(e,A)=>{let t=Math.abs(A),i=t*-1;return(e-Np)*(t-i)/(OR-Np)+i};function NR(e){let A=[],t={};for(var i=0,n=e.length;i<n;i++){var r=JSON.stringify(e[i].pos.map(s=>Math.round(s*1e4)/1e4));t[r]||(A.push(e[i]),t[r]=!0)}return A}var BR=new E,ka=new E,zR=new E,FR=new E;function Lr(e,A){let t=zR.fromArray(e),i=FR.fromArray(A);ka.copy(i).sub(t);let n=ka.length();return ka.normalize().multiplyScalar(n*.5),BR.copy(t).add(ka).toArray()}var Ct=new Lt,Ga=new E,Lo=new E,bn=new E;function UR(e){let A=[];for(let t=0;t<=e.index.count;t++)if(Ga.fromArray(e.index.array,t*3),Ct.setFromAttributeAndIndices(e.attributes.position,Ga.x,Ga.y,Ga.z),Ct.getNormal(Lo),Ct.getMidpoint(bn),!(isNaN(bn.x)||isNaN(bn.y)||isNaN(bn.z))){let{a:i,b:n,c:r}=Ct,s=i.toArray(),a=n.toArray(),o=r.toArray(),c=i.distanceTo(n),u=n.distanceTo(r),l=r.distanceTo(i),h=Lr(s,a),d=Lr(a,o),f=Lr(o,s),m=[c,u,l],p=Math.max(...m),g=m.filter(y=>Math.round(y)===Math.round(p)).length>1,v=[],x=Ct.getMidpoint(bn).toArray();p===c&&!g&&(v=[d,f,f],x=h),p===u&&!g&&(v=[h,f,f],x=d),p===l&&!g&&(v=[h,d,d],x=f),g&&(v=[h,d,f]),A.push({vertices:[s,a,o],faceCenters:v,midpoint:x,norm:Ct.getNormal(Lo).toArray()})}return A}function kR(e){let A=[],{position:t}=e.attributes;for(let i=0;i<t.count;i++){Ct.setFromAttributeAndIndices(t,i*3,i*3+1,i*3+2),Ct.getNormal(Lo),Ct.getMidpoint(bn);let n=Ct.a.toArray(),r=Ct.b.toArray(),s=Ct.c.toArray();A.push({vertices:[n,r,s],faceCenters:[Lr(n,r),Lr(r,s),Lr(s,n)],midpoint:bn.toArray(),norm:Lo.toArray()})}return A}var GR=4,VR=.5,oc=e=>.5*(1-Math.cos(e*Math.PI)),HR=class{constructor(){this.perlin=new Array(4095+1)}noise(e,A=0,t=0){if(this.perlin==null){this.perlin=new Array(4095+1);for(let p=0;p<4095+1;p++)this.perlin[p]=Math.random()}e<0&&(e=-e),A<0&&(A=-A),t<0&&(t=-t);let i=Math.floor(e),n=Math.floor(A),r=Math.floor(t),s=e-i,a=A-n,o=t-r,c,u,l=0,h=.5,d,f,m;for(let p=0;p<GR;p++){let g=i+(n<<4)+(r<<8);c=oc(s),u=oc(a),d=this.perlin[g&4095],d+=c*(this.perlin[g+1&4095]-d),f=this.perlin[g+16&4095],f+=c*(this.perlin[g+16+1&4095]-f),d+=u*(f-d),g+=256,f=this.perlin[g&4095],f+=c*(this.perlin[g+1&4095]-f),m=this.perlin[g+16&4095],m+=c*(this.perlin[g+16+1&4095]-m),f+=u*(m-f),d+=oc(o)*(f-d),l+=d*h,h*=VR,i<<=1,s*=2,n<<=1,a*=2,r<<=1,o*=2,s>=1&&(i++,s--),a>=1&&(n++,a--),o>=1&&(r++,o--)}return l}noiseSeed(e){let A=(()=>{let t,i;return{setSeed(n){i=t=(n??Math.random()*4294967296)>>>0},getSeed(){return t},rand(){return i=(1664525*i+1013904223)%4294967296,i/4294967296}}})();A.setSeed(e),this.perlin=new Array(4095+1);for(let t=0;t<4095+1;t++)this.perlin[t]=A.rand()}},WR=HR,Bp=new E,zp=new GA,Fp=new Ur;function jR(e){let A=!1;return e.scene.objects.traverse((t,i)=>{i.type==="Mesh"&&i.geometry.type==="TextGeometry"&&(A=!0)}),A}var M0=class extends Un{constructor(e,A,t){super(e,A,t),this.data=A}get textGeometry(){return this.geometry}get charWidths(){return this.textGeometry.charWidths}get charCoords(){return this.textGeometry.charCoords}get wrappedText(){return this.textGeometry.wrappedText}get font(){return this.textGeometry.font}get initialOffsetY(){let e=this.dataPatched;return this.font?.getLineInitialOffsetY(this.lineHeight,this.wrappedText.length,e.geometry.height,this.fontScale,e.geometry.verticalAlign)??0}get fontScale(){let e=this.dataPatched;return this.font?e.geometry.fontSize/this.font.unitsPerEm:1}get AD(){return Math.abs(this.ascender-this.descender)}get ascender(){return(this.font?.ascender??1)*this.fontScale}get descender(){return(this.font?.descender??1)*this.fontScale}get lineHeight(){let e=this.dataPatched;return e.geometry.fontSize*e.geometry.lineHeight}raycast(e,A){let{matrixWorld:t}=this;if(zp.copy(t).invert(),Fp.copy(e.ray).applyMatrix4(zp),Fp.intersectBox(this.singleBBox,Bp)){let i=Bp.applyMatrix4(t),n=e.ray.origin.distanceTo(i);A.push({distance:n,point:i.clone(),object:this})}}},tt=1e-4,ii,_0,T0,E0,Up=new E,kp=new E;su.then(e=>{ii=e,_0=[ii.get_face_center,ii.get_edge_midpoint,ii.get_vertex_position],T0=[ii.get_face_normal,ii.get_edge_normal,ii.get_vertex_normal],E0=[ii.face_count,ii.edge_count,ii.vertex_count]});var qR=new GA,XR=new GA,Ui=new E,un=new E,ps=new E,lc=new E,YR=new E,QR=new E,_i=new WR,C0=class extends tu(ue){constructor(e,A){super(),this.parameters=A,this.objectForSample=void 0,this._pendingMediaLoad=!1,this.object=e}resetOnMove(){this.removeFromParent(),this.parent=null}expandClones(e){if(this.parent===null)this.updateState(this.parameters,e);else for(let A of this.children)A instanceof vs&&A.expand()}invalidateTransform(e){this.matrixWorldNeedsUpdate=!0,this.traverse(A=>{A instanceof vs&&A.object===e&&(A.matrixWorldNeedsUpdate=!0)})}onObjUpdateMatrix(){this.parameters.type!=="toObject"&&(this.matrixWorldNeedsUpdate=!0)}update(){switch(this._updateCount(),this.parameters.type){case"radial":this._updateRadial(this.parameters);break;case"linear":this._updateLinear(this.parameters);break;case"grid":this._updateGrid(this.parameters);break;case"toObject":this._updateToObject(this.parameters)}}_updateCount(e){let A;if(e!==void 0?A=e:A=this.parameters.type==="grid"?this.parameters.grid.count[0]*this.parameters.grid.count[1]*this.parameters.grid.count[2]:this.parameters.count,this.parameters.type==="toObject"&&!this.parameters.toObject.object&&(A=0),this.parameters.type==="toObject"&&this.objectForSample){for(let i=0,n=this.children.length;i<n;++i)this.remove(this.children[0]);let t=this.children;if(t.length===A)return;if(t.length<A)for(let i=0,n=A-t.length;i<n;++i){let r=new vs(this.object);r.expand(),this.add(r)}else for(let i=0,n=t.length-A;i<n;++i)this.remove(t[i])}else{if(this.children.length===A)return;if(this.children.length<A)for(let t=0,i=A-this.children.length;t<i;++t){let n=new vs(this.object);n.expand(),this.add(n)}else for(let t=0,i=this.children.length-A;t<i;++t)this.remove(this.children[0])}}_updateRadial(e){let A=e.radial,t=A.start*Fe.DEG2RAD,i=A.end*Fe.DEG2RAD,n=t-i,r=new Qi(A.rotation[0],A.rotation[1],A.rotation[2]),s;switch(A.axis){case"z":s=new E(0,0,1);break;case"y":s=new E(0,1,0);break;default:case"x":s=new E(1,0,0);break}let a=e.randomnessObject??Wi.defaultData([1,1,1]).randomnessObject,o=a.noiseType==="perlin";_i.noiseSeed(a.seed);let c=Yl((0,as.default)(a.seed)),u=Ua(a.strength,this.parameters.randomness);for(let[l,h]of this.children.entries()){let d=l*(a.freqScale/10)+a.movement,f=o?_i.noise(d):c(d,d);h.scale.x=A.scale[0]+u(l,WA(f,a.scale[0]))||tt,h.scale.y=A.scale[1]+u(l,WA(f,a.scale[1]))||tt,h.scale.z=A.scale[2]+u(l,WA(f,a.scale[2]))||tt,h.position.setScalar(0);let m=n/e.count*l-t;switch(A.axis){case"x":h.rotation.set(0,m,0);break;case"y":h.rotation.set(0,0,m);break;case"z":h.rotation.set(m,0,0);break}h.translateOnAxis(s,A.radius),h.position.x+=A.position[0]+u(l,WA(f,a.position[0])),h.position.y+=A.position[1]+u(l,WA(f,a.position[1])),h.position.z+=A.position[2]+u(l,WA(f,a.position[2]));let p=u(l,WA(f,a.rotation[0])),g=u(l,WA(f,a.rotation[1])),v=u(l,WA(f,a.rotation[2]));A.alignment===!0?(h.rotation.x+=r.x+p,h.rotation.y+=r.y+g,h.rotation.z+=r.z+v):h.rotation.set(r.x+p,r.y+g,r.z+v)}}_updateLinear(e){if(e.type!=="linear")throw new Error;let A=e.linear,t=new Qi(A.rotation[0],A.rotation[1],A.rotation[2]),i=e.randomnessObject??Wi.defaultData([1,1,1]).randomnessObject,n=i.noiseType==="perlin";_i.noiseSeed(i.seed);let r=Yl((0,as.default)(i.seed)),s=Ua(i.strength,this.parameters.randomness);for(let[a,o]of this.children.entries()){let c=a*(i.freqScale/10)+i.movement,u=n?_i.noise(c):r(c,c),l=s(a,WA(u,i.rotation[0])),h=s(a,WA(u,i.rotation[1])),d=s(a,WA(u,i.rotation[2]));o.scale.x=1+(A.scale[0]-1)*a+s(a,WA(u,i.scale[0]))||tt,o.scale.y=1+(A.scale[1]-1)*a+s(a,WA(u,i.scale[1]))||tt,o.scale.z=1+(A.scale[2]-1)*a+s(a,WA(u,i.scale[2]))||tt,o.rotation.x=t.x*a+l,o.rotation.y=t.y*a+h,o.rotation.z=t.z*a+d,o.position.x=A.position[0]*a+s(a,WA(u,i.position[0])),o.position.y=A.position[1]*a+s(a,WA(u,i.position[1])),o.position.z=A.position[2]*a+s(a,WA(u,i.position[2]))}}_updateGrid(e){let A=0,t=e.grid,i=e.randomnessObject??Wi.defaultData([1,1,1]).randomnessObject,n=Ua(i.strength,this.parameters.randomness),r=i.noiseType==="perlin";_i.noiseSeed(i.seed);let s=JD((0,as.default)(i.seed));if(t.useCenter===!0){let a={x:t.count[0]%2===0?2:1,y:t.count[1]%2===0?2:1,z:t.count[2]%2===0?2:1},o=new E(t.size[0]*(t.count[0]-a.x)*.5,t.size[1]*(t.count[1]-a.y)*.5,t.size[2]*(t.count[2]-a.z)*.5);for(let c=0;c<t.count[0];c++)for(let u=0;u<t.count[1];u++)for(let l=0;l<t.count[2];l++){let h=[(c+1)*(i.freqScale/10)+i.movement,(u+1)*(i.freqScale/10)+i.movement,(l+1)*(i.freqScale/10)+i.movement],d=r?_i.noise(...h):s(...h),f=this.children[A++];f.scale.x=1+n(A,WA(d,i.scale[0]))||tt,f.scale.y=1+n(A,WA(d,i.scale[1]))||tt,f.scale.z=1+n(A,WA(d,i.scale[2]))||tt;let m=n(A,WA(d,i.rotation[0])),p=n(A,WA(d,i.rotation[1])),g=n(A,WA(d,i.rotation[2]));f.rotation.set(m,p,g),f.position.x=t.size[0]*c-o.x+n(A,WA(d,i.position[0])),f.position.y=t.size[1]*u-o.y+n(A,WA(d,i.position[1])),f.position.z=t.size[2]*l-o.z+n(A,WA(d,i.position[2]))}}else for(let a=0;a<t.count[0];a++)for(let o=0;o<t.count[1];o++)for(let c=0;c<t.count[2];c++){let u=[(a+1)*(i.freqScale/10)+i.movement,(o+1)*(i.freqScale/10)+i.movement,(c+1)*(i.freqScale/10)+i.movement],l=r?_i.noise(...u):s(...u),h=this.children[A++];h.scale.x=1+n(A,WA(l,i.scale[0]))||tt,h.scale.y=1+n(A,WA(l,i.scale[1]))||tt,h.scale.z=1+n(A,WA(l,i.scale[2]))||tt;let d=n(A,WA(l,i.rotation[0])),f=n(A,WA(l,i.rotation[1])),m=n(A,WA(l,i.rotation[2]));h.rotation.set(d,f,m),h.position.x=t.size[0]*a+n(A,WA(l,i.position[0])),h.position.y=-t.size[1]*o+n(A,WA(l,i.position[1])),h.position.z=-t.size[2]*c+n(A,WA(l,i.position[2]))}}_updateToObject(e){if(e.type!=="toObject")throw new Error;let{toObject:A}=e,t=new Qi(A.rotation[0],A.rotation[1],A.rotation[2]),i=e.randomnessObject??Wi.defaultData([1,1,1]).randomnessObject,n=i.noiseType==="perlin";_i.noiseSeed(i.seed);let r=Yl((0,as.default)(i.seed)),s=Ua(i.strength,this.parameters.randomness);if(!A.object){for(let[,m]of this.children.entries())m.position.set(0,0,0),m.scale.setScalar(1),m.rotation.set(0,0,0);this.objectForSample=void 0;return}if(!this.objectForSample)return;if(this.objectForSample instanceof M0)if(!this.objectForSample.font?.isLoaded||this.objectForSample.geometry.attributes.position===void 0){this._pendingMediaLoad=!0;return}else this._pendingMediaLoad=!1;let a=this.getSubdivData(),o=[],c=m=>{let p=m.length,g=m.map(y=>y[0]).reduce((y,M)=>y+M,0),v=m.map(y=>y[1]).reduce((y,M)=>y+M,0),x=m.map(y=>y[2]).reduce((y,M)=>y+M,0);return[g/p,v/p,x/p]},u=m=>Math.round(m*1e6)/1e6;a.forEach(m=>{let p=a.filter(g=>u(m.pos[0])===u(g.pos[0])&&u(m.pos[1])===u(g.pos[1])&&u(m.pos[2])===u(g.pos[2]));p.length>1?o.push({pos:m.pos,norm:c(p.map(g=>g.norm))}):o.push(m)});let l=NR(o);if(a.length>0){let m=Math.round(l.length*A.count/100);this._updateCount(m)}this.objectForSample.updateMatrixWorld();let h=new KD(this.objectForSample).build(),d=RR[A.axis],f=this.children;h.setRandomGenerator((0,as.default)(this.object.uuid+A.seed));for(let[m,p]of f.entries()){let g=m*(i.freqScale/10)+i.movement,v=n?_i.noise(g):r(g,g),x=s(m,WA(v,i.rotation[0])),y=s(m,WA(v,i.rotation[1])),M=s(m,WA(v,i.rotation[2]));A.spreadType==="random"?h.sample(ps,lc):(l.length&&(ps.fromArray(l[m].pos),lc.fromArray(l[m].norm)),this.objectForSample instanceof sh&&ps.applyMatrix4(qR.copy(this.objectForSample.matrixWorld).invert())),ps.applyMatrix4(this.object.hiddenMatrix.clone().invert()),p.position.copy(ps),Ui.fromArray(d);let w=A.align==="normal"?lc:this.object.getWorldDirection(QR),_=un.fromArray(A.position);un.x+=un.x+s(m,WA(v,i.position[0])),un.y+=un.y+s(m,WA(v,i.position[1])),un.z+=un.z+s(m,WA(v,i.position[2]));let b=Math.acos(w.dot(Ui)),T=YR.crossVectors(Ui,w).normalize(),S=XR.makeRotationAxis(T,b),D=w.clone().cross(this.object.up).normalize(),L=D.clone().cross(w).normalize(),R=new GA().makeBasis(D,w,L),I=new E(Ui.y,Ui.z,Ui.x).normalize(),W=I.clone().cross(Ui).normalize(),eA=new GA().makeBasis(I,Ui,W).invert(),F=new GA().multiplyMatrices(R,eA);p.rotation.setFromRotationMatrix(F),_.applyMatrix4(S),p.position.add(_),p.rotation.x=p.rotation.x+t.x+x,p.rotation.y=p.rotation.y+t.y+y,p.rotation.z=p.rotation.z+t.z+M,p.scale.setScalar(1),p.scale.x=p.scale.x+A.scale[0]+s(m,WA(v,i.scale[0]))||tt,p.scale.y=p.scale.y+A.scale[1]+s(m,WA(v,i.scale[1]))||tt,p.scale.z=p.scale.z+A.scale[2]+s(m,WA(v,i.scale[2]))||tt,p.scale.multiply(this.object.scale),p.hiddenMatrix=this.object.hiddenMatrix}}getSubdivData(){if(!this.objectForSample)return[];let e=this.parameters.toObject.spreadType;if(e==="random")return[];if(this.objectForSample instanceof sh){let A=this.objectForSample,t=IR[e],i=E0[t],n=_0[t],r=T0[t],s=[],a=i(A.subdivPointerNew);for(let o=0;o<=a-1;o++){let c=n(A.subdivPointerNew,o),u=r(A.subdivPointerNew,o);Up.fromArray(c).applyMatrix4(A.matrixWorld),kp.fromArray(u),s.push({pos:Up.toArray(),norm:kp.toArray()})}return s}else return(this.objectForSample.geometry.index?UR(this.objectForSample.geometry):kR(this.objectForSample.geometry)).map((A,t)=>e==="polygon_center"?{pos:A.midpoint,norm:A.norm}:e==="vertex"?[{pos:A.vertices[0],norm:A.norm},{pos:A.vertices[1],norm:A.norm},{pos:A.vertices[2],norm:A.norm}]:e==="edge"?[{pos:A.faceCenters[0],norm:A.norm},{pos:A.faceCenters[1],norm:A.norm},{pos:A.faceCenters[2],norm:A.norm}]:[]).flat()}updateState(e,A){if(this.parameters=eu(e),this.parameters.type!=="toObject")(this.parent===null||this.parent!==this.object)&&(this.removeFromParent(),this.object.parent?.add(this),this.matrix=this.object.matrix,this.hiddenMatrix=this.object.hiddenMatrix,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1);else if(this.parent===null||this.parent.uuid!==this.parameters.toObject.object){this.removeFromParent();let t=A.find(this.parameters.toObject.object);t instanceof $i?this.objectForSample=t:this.objectForSample=void 0,this.matrix=new GA,this.hiddenMatrix=new GA,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1,t&&t.add(this)}this.update()}get pendingMediaLoad(){return this._pendingMediaLoad}},$s=e=>{var A;return A=class extends e{},A.geometryHelper=new Zt(30,30,30),A},Va=new Ur,cc=new Qt,Gp=new GA,Aa=(e,A,t,i,n=!1)=>{let r=A,s=e.matrixWorld;if(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(s),t.ray.intersectsSphere(cc)===!1||(Gp.copy(s).invert(),Va.copy(t.ray).applyMatrix4(Gp),r.boundingBox!==null&&Va.intersectsBox(r.boundingBox)===!1))return;let a,o,c,u,l=r.index,h=r.attributes.position,d=r.drawRange,f,m;if(n===!1){let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(f=g,m=v;f<m;f+=3)if(o=l.getX(f),c=l.getX(f+1),u=l.getX(f+2),a=p(e,t,Va,h,o,c,u),a){a.faceIndex=Math.floor(f/3),i.push(a);return}}else{let g=r.attributes.position,v=new E,x=new E,y=new E,M=new E,w=2,_=1/((e.scale.x+e.scale.y+e.scale.z)/3),b=_*_,T=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let D=T,L=S-1;D<L;D+=w){if(v.fromBufferAttribute(g,D),x.fromBufferAttribute(g,D+1),Va.distanceSqToSegment(v,x,M,y)>b)continue;M.applyMatrix4(e.matrixWorld);let R=t.ray.origin.distanceTo(M);R<t.near||R>t.far||i.push({distance:R,point:y.clone().applyMatrix4(e.matrixWorld),object:e})}}function p(g,v,x,y,M,w,_){let b=new E,T=new E,S=new E,D=new E,L=new E;if(b.fromBufferAttribute(y,M),T.fromBufferAttribute(y,w),S.fromBufferAttribute(y,_),x.intersectTriangle(b,T,S,!1,D)===null)return null;L.copy(D),L.applyMatrix4(g.matrixWorld);let R=v.ray.origin.distanceTo(L);return R<v.near||R>v.far?null:{faceIndex:1,distance:R,point:L.clone(),object:g}}},Ha=new E,wt=new js,ZR=class extends Xs{constructor(e){let A=new VA,t=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],n=[],r={},s=new jA(15711266),a=new jA(15711266),o=new jA(2857471);c("n1","n2",s),c("n2","n4",s),c("n4","n3",s),c("n3","n1",s),c("f1","f2",s),c("f2","f4",s),c("f4","f3",s),c("f3","f1",s),c("n1","f1",s),c("n2","f2",s),c("n3","f3",s),c("n4","f4",s),c("p","n1",a),c("p","n2",a),c("p","n3",a),c("p","n4",a),c("u1","u2",o),c("u2","u3",o),c("u3","u1",o);function c(l,h,d){u(l,d),u(h,d)}function u(l,h){i.push(0,0,0),n.push(h.r,h.g,h.b),r[l]===void 0&&(r[l]=[]),r[l].push(i.length/3-1)}A.setAttribute("position",new DA(i,3)),A.setAttribute("color",new DA(n,3)),super(A,t),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update()}update(){let e=this.geometry,A=this.pointMap;wt.projectionMatrixInverse.elements=[.5112609807824982,-0,-0,-0,-0,.41421356237309503,-0,-0,-0,-0,-0,-.099999,-0,-0,-1.0000000000000002,.100001];let t=1,i=1,n=.8;kt("n1",A,e,wt,-t,-i,n),kt("n2",A,e,wt,t,-i,n),kt("n3",A,e,wt,-t,i,n),kt("n4",A,e,wt,t,i,n);let r=n;kt("f1",A,e,wt,-t,-i,r),kt("f2",A,e,wt,t,-i,r),kt("f3",A,e,wt,-t,i,r),kt("f4",A,e,wt,t,i,r);let s=r,a=.5;kt("u1",A,e,wt,t*.7*a,i*1.1,s),kt("u2",A,e,wt,-t*.7*a,i*1.1,s),kt("u3",A,e,wt,0,i*(1.1+.9*a),s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function kt(e,A,t,i,n,r,s){Ha.set(n,r,s).unproject(i);let a=A[e];if(a!==void 0){let o=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)o.setXYZ(a[c],Ha.x,Ha.y,Ha.z)}}var JR=class extends $s(ZR){constructor(e){super(e),this.object=e,this.object=e,this.name=`CombinedCameraHelper: ${e.uuid}`}updateMatrixWorld(e){super.updateMatrixWorld(e),this.updateTarget()}updateTarget(){let e=this.object.getTarget();this.updateWorldMatrix(!0,!1),this.worldToLocal(e)}raycast(e,A){Aa(this.object,this.geometry,e,A,!0)}},ah;(e=>e.is=A=>"objectHelper"in A)(ah||(ah={}));var Zo=(e,A)=>class extends wg(e){constructor(){super(...arguments),this.objectHelper=new A(this),this.gizmos={}}get geometryHelper(){return A.geometryHelper}raycast(t,i){this.objectHelper.raycast(t,i)}showGizmos(){for(let t in this.gizmos){let i=this.gizmos[t];i instanceof ao&&(i.visible=!0)}}updateEntityBoxSize(t,i){this.objectHelper.visible&&this.geometryHelper instanceof Zt?(t.setScalar(0),i.set(this.geometryHelper.parameters.width,this.geometryHelper.parameters.height,this.geometryHelper.parameters.height).multiplyScalar(.5)):super.updateEntityBoxSize(t,i)}hideGizmos(){for(let t in this.gizmos){let i=this.gizmos[t];i instanceof ao&&(i.visible=!1)}}},lr=new E,hc=new E,Do=class extends Zo(js,JR){constructor(e="",A={...vo.defaultData,name:""}){super(),this._cameraType="OrthographicCamera",this.targetOffset=ks.DefaultTargetOffset,this.isUpVectorFlipped=!1,this.angleOffsetFromUp=0,this.super_Entity(e,A),this.matrixAutoUpdate=!0,this.width=window.innerWidth,this.height=window.innerHeight;let t=this.width,i=this.height;this.orthoCamera=new ph(t*-.5,t*.5,i*.5,i*-.5,-5e4,1e4),this.perspCamera=new ot(45,t/i,50,1e4),this.left=this.orthoCamera.left,this.right=this.orthoCamera.right,this.top=this.orthoCamera.top,this.bottom=this.orthoCamera.bottom,this.far=this.orthoCamera.far,this.view=this.orthoCamera.view,this.aspect=this.perspCamera.aspect,this.focus=this.perspCamera.focus,this.filmGauge=this.perspCamera.filmGauge,this.filmOffset=this.perspCamera.filmOffset,this.objectHelper.update()}get isPerspectiveCamera(){return this.cameraType==="PerspectiveCamera"}get isOrthographicCamera(){return!this.isPerspectiveCamera}get cameraType(){return this._cameraType}set fov(e){this.perspCamera.fov=e}get fov(){return this.perspCamera.fov}setNear(e,A){e==="PerspectiveCamera"?this.perspCamera.near=A:this.orthoCamera.near=A}setZoom(e,A){A>=0&&(e==="PerspectiveCamera"?this.perspCamera.zoom=A:this.orthoCamera.zoom=A)}set cameraType(e){e==="PerspectiveCamera"?this.toPerspective():e==="OrthographicCamera"&&this.toOrthographic()}get near(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.near:this.orthoCamera.near}set near(e){this._cameraType==="PerspectiveCamera"?this.perspCamera.near=e:this.orthoCamera.near=e}get zoom(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom:this.orthoCamera.zoom}set zoom(e){e>=0&&(this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom=e:this.orthoCamera.zoom=e)}lookAt(e){super.lookAt(e),this.getWorldPosition(lr),this.targetOffset=lr.distanceTo(e)}getTarget(e=new E){return this.getWorldDirection(hc),this.getWorldPosition(lr),hc.multiplyScalar(this.targetOffset),e.copy(lr).add(hc),e}getDistanceToTarget(){let e=this.getTarget();return this.getWorldPosition(lr),lr.distanceTo(e)}updateUp(){let e=this.getWorldQuaternion(new Oi),A=new E(0,0,1).applyQuaternion(e),t=new E().copy(ue.DefaultUp);this.isUpVectorFlipped&&t.negate(),t.applyQuaternion(e);let i=new E().copy(ue.DefaultUp).projectOnPlane(A),n=new E().crossVectors(i,t).dot(A)>=0?1:-1;this.angleOffsetFromUp=i.angleTo(t)*n}updateTransformState(e){let A=super.updateTransformState(e);return e.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=e.isUpVectorFlipped),this.updateUp(),A}getViewFrontToObject(e){let A=e.getWorldPosition(new E),t=e.getWorldDirection(new E).multiplyScalar(this.targetOffset);return{position:A.clone().add(t),target:A}}getViewToObject(e){let A=e.getWorldPosition(new E),t=this.getWorldDirection(new E).multiplyScalar(this.targetOffset);return{position:A.clone().sub(t),target:A}}setViewplaneSize(e,A){this.left=-e*.5,this.right=e*.5,this.top=A*.5,this.bottom=-A*.5,this.aspect=e/A,this.updateProjectionMatrix()}toOrthographic(){this.orthoCamera.left=this.left,this.orthoCamera.right=this.right,this.orthoCamera.top=this.top,this.orthoCamera.bottom=this.bottom,this.orthoCamera.view=this.view,this.orthoCamera.far=this.far,this.orthoCamera.updateProjectionMatrix(),this.projectionMatrix=this.orthoCamera.projectionMatrix,this.projectionMatrixInverse=this.orthoCamera.projectionMatrixInverse,this._cameraType="OrthographicCamera",this.objectHelper&&this.objectHelper.update()}toPerspective(){this.perspCamera.aspect=this.aspect,this.perspCamera.fov=this.fov,this.perspCamera.view=this.view,this.perspCamera.far=this.far,this.perspCamera.updateProjectionMatrix(),this.projectionMatrix=this.perspCamera.projectionMatrix,this.projectionMatrixInverse=this.perspCamera.projectionMatrixInverse,this._cameraType="PerspectiveCamera",this.objectHelper&&this.objectHelper.update()}setFocalLength(e){this.perspCamera.setFocalLength(e),this.toPerspective()}getFocalLength(){return this.perspCamera.getFocalLength()}getEffectiveFOV(){return this.perspCamera.getEffectiveFOV()}getFilmWidth(){return this.perspCamera.getFilmWidth()}getFilmHeight(){return this.perspCamera.getFilmHeight()}setViewOffset(e,A,t,i,n,r){this._cameraType==="PerspectiveCamera"?this.perspCamera.setViewOffset(e,A,t,i,n,r):this.orthoCamera.setViewOffset(e,A,t,i,n,r)}clearViewOffset(){this._cameraType==="PerspectiveCamera"?(this.perspCamera.clearViewOffset(),this.toPerspective()):(this.orthoCamera.clearViewOffset(),this.toOrthographic())}updateProjectionMatrix(){this._cameraType==="PerspectiveCamera"?this.toPerspective():this._cameraType==="OrthographicCamera"&&this.toOrthographic()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,A){super.updateWorldMatrix(e,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}copy(e,A){return super.copy(e,A),this.orthoCamera.copy(e.orthoCamera),this.perspCamera.copy(e.perspCamera),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.far=e.far,this.view=e.view===null?null:Object.assign({},e.view),this._cameraType=e._cameraType,this.aspect=e.aspect,this.fov=e.fov,this.focus=e.focus,this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this.targetOffset=e.targetOffset,this.updateProjectionMatrix(),this}toCameraState(e=[]){let A={type:this.cameraType,far:this.far,orthographic:{near:this.orthoCamera.near,zoom:this.orthoCamera.zoom},perspective:{near:this.perspCamera.near,fov:this.perspCamera.fov,zoom:this.perspCamera.zoom},up:this.up.toArray(),targetOffset:this.targetOffset,isUpVectorFlipped:this.isUpVectorFlipped};return Yc(A,e)}updateCameraSubtype(e,A){let t=e==="perspective"?"PerspectiveCamera":"OrthographicCamera";A.zoom!==void 0&&this.setZoom(t,A.zoom),A.near!==void 0&&this.setNear(t,A.near),A.fov!==void 0&&t==="PerspectiveCamera"&&(this.fov=A.fov)}updateState(e){this.updateCameraState(e)}updateCameraState(e){this.updateState_Entity(e,{}),e.far!==void 0&&(this.far=e.far),e.orthographic!==void 0&&this.updateCameraSubtype("orthographic",e.orthographic),e.perspective!==void 0&&this.updateCameraSubtype("perspective",e.perspective),e.type!==void 0&&(this.cameraType=e.type),e.up!==void 0&&this.up.fromArray(e.up),e.targetOffset!==void 0&&(this.targetOffset=e.targetOffset),e.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=e.isUpVectorFlipped),this.updateProjectionMatrix()}updateByPatchedOp(e,A,t){super.updateByPatchedOp(e,A,t),e.path.length===1&&e.type===0&&this.updateCameraSubtype(e.path[0],e.props)}toState(e){return{...super.toState(e),...this.toCameraState(e),type:this.cameraType}}},Vp=new GA,Fr=class extends Ks{constructor(e,A,t){super(e,A),this.data=A,this.meshSetAddresses=[],this.needsTransformForDownstream=!1,this.geometry=new VA,this.geometry.userData.parameters={width:0,height:0,depth:0}}get booleanOp(){return this.data.geometry.operation}get phongAngle(){return this.data.geometry.phongAngle??45}get isLOD(){return this.recomputeBoolean(),!1}updateByPatchedOp(e,A,t){super.updateByPatchedOp(e,A,t),e.path.length===1&&e.path[0]==="geometry"&&e.type===0&&e.props.operation!==void 0&&(this.freeBooleanPointer(),this.resetBBoxNeedsUpdate())}freeBooleanPointer(){super.freeBooleanPointer(),this.geometry.dispose()}recomputeBoolean(e,A=!0){if(this.booleanMeshSetAddress!==-1)return;for(let i=0;i<this.children.length;i++){let n=this.children[i];n instanceof Fr&&n.recomputeBoolean(e===!0,A)}this.meshSetAddresses=[];for(let i=0;i<this.children.length;i++){let n=this.children[i];if(n instanceof $i&&n.dataPatched.visible===!0&&n.geometry.attributes.position?.count>0&&n.geometry.drawRange.count>0){if(n.booleanMeshSetAddress===-1){if((n.geometry.index??n.geometry.getAttribute("position")).count/3<15e5&&(n.booleanMeshSetAddress=Gi.getMeshSet(n.geometry,e===!0,A)),n.booleanMeshSetAddress===-1)return;Gi.transformMeshSet(n.booleanMeshSetAddress,n.matrix),n.booleanMatrixInvOld.copy(n.matrix).invert(),n.booleanWasTransformed=!1}else n instanceof Fr&&n.needsTransformForDownstream===!0?(Gi.transformMeshSet(n.booleanMeshSetAddress,n.matrix),n.needsTransformForDownstream=!1):n.booleanWasTransformed===!0&&(Vp.multiplyMatrices(n.matrix,n.booleanMatrixInvOld),Gi.transformMeshSet(n.booleanMeshSetAddress,Vp),n.booleanMatrixInvOld.copy(n.matrix).invert(),n.booleanWasTransformed=!1);this.meshSetAddresses.push(n.booleanMeshSetAddress)}}if(this.meshSetAddresses.length===0){this.geometry.setAttribute("position",new ry([],0)),this.geometry.setDrawRange(0,0);return}if(e===!0)return Gi.calcBooleanTopological(this.meshSetAddresses,this.booleanOp);let t=this.geometry;t.dispose(),this.geometry=new VA,this.geometry.userData=t.userData,this.geometry.boundingSphere=t.boundingSphere;try{this.booleanMeshSetAddress=Gi.calcBoolean(this.meshSetAddresses,this.booleanOp,this.geometry,this.phongAngle)}catch(i){this.booleanMeshSetAddress=0,console.error(i)}this.booleanMatrixInvOld.copy(this.matrix).invert(),this.needsTransformForDownstream=!0,hu(this),uu(this)}dispose(){super.dispose(),this.geometry.dispose()}},Hp;(e=>{function A(t){return Re.is(t)&&t instanceof Ys}e.is=A})(Hp||(Hp={}));var du=(e,A)=>class extends Zo(e,A){updateState_Light(t,i){this.updateState_Entity(t,i),t.color!==void 0&&(this.color=i.shared.color(t.color)),t.intensity!==void 0&&(this.intensity=t.intensity),t.depth!==void 0&&(this.shadow.camera.far=t.depth,this.shadow.needsUpdate=!0),t.shadows!==void 0&&(this.castShadow=t.shadows)}},Wa=e=>e instanceof $i,ja=e=>e!==null&&e instanceof Fr,KR=e=>e instanceof Do,$R=e=>ah.is(e),fu=class extends $s(XS){constructor(e,A=15){super(A),this.object=e,this.object.updateMatrixWorld(),this.name=`EmptyObjectHelper: ${e.uuid}`,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}raycast(e,A){Aa(this.object,fu.geometryHelper,e,A)}update(){}},Wp=class extends Zo(pr,fu){constructor(e,A){super(),this.super_Entity(e,A),this.objectHelper.update()}updateState(e,A){this.updateState_Entity(e,A)}},L0=class extends $s(qS){constructor(e,A=15,t=10066329){super(e,A,t),this.object=e,this.added=!1,this.name=`DirectionalLightHelper: ${e.uuid}`}raycast(e,A){Aa(this.object,L0.geometryHelper,e,A)}},D0=class extends $s(jS){constructor(e,A=15,t=6710886){super(e,A,t),this.object=e,this.name=`PointLightHelper: ${e.uuid}`}raycast(e,A){Aa(this.object,D0.geometryHelper,e,A)}},oh=class extends $s(WS){constructor(e,A=6710886){super(e,A),this.object=e,this.name=`SpotLightHelper: ${e.uuid}`}raycast(e,A){Aa(this.object,oh.geometryHelper,e,A)}update(){if(this.object!==void 0){let e=oh._vector,A=this.object.distance?this.object.distance:1e3,t=A*Math.tan(this.object.angle);this.cone.scale.set(t,t,A),e.setFromMatrixPosition(this.object.target.matrixWorld),this.cone.lookAt(e);let i=this.color!==void 0?this.color:this.light.color;if(this.cone.material instanceof Array)for(let n=0,r=this.cone.material.length;n<r;n++)this.cone.material[n].color.set(i);else this.cone.material.color.set(i)}}},P0=oh;P0._vector=new E;function AI(e,A){e.shadow.camera.right=A/2,e.shadow.camera.left=-A/2,e.shadow.camera.top=A/2,e.shadow.camera.bottom=-A/2,e.shadow.needsUpdate=!0}var eI=class extends du(US,L0){constructor(e,A,t){super(),this.super_Entity(e,A),this.castShadow=!0,this.shadow.mapSize.width=2048,this.shadow.mapSize.height=2048,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.top=1250,i.bottom=-1250,i.right=1250,i.left=-1250,i.near=-1e4,i.far=2500;let n=new so(this.shadow.camera);n.visible=!1,this.gizmos.shadowmap=n}update(){this.shadow.camera.updateProjectionMatrix();for(let e in this.gizmos){let A=this.gizmos[e];A instanceof so&&A.update()}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.objectHelper&&this.objectHelper.update()}updateState(e,A){this.updateState_Light(e,A);let t=e.depth!==void 0&&e.depth!==this.shadow.camera.far||e.size!==void 0&&e.size/2!==this.shadow.camera.right;e.size!==void 0&&AI(this,e.size),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null)),t&&this.update()}},tI=class extends du(zS,D0){constructor(e,A,t){super(),this.super_Entity(e,A),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=90,i.aspect=1,i.near=100,i.far=2500;let n=new E(-i.far+this.position.x,-i.far+this.position.y,-i.far+this.position.z),r=new E(i.far+this.position.x,i.far+this.position.y,i.far+this.position.z),s=new Nt(n,r),a=new ao(s,new jA(16755200));a.visible=!1,this.gizmos.shadowmap=a,this.update()}update(){if(this.shadow&&(this.shadow.camera.updateProjectionMatrix(),this.gizmos))for(let e in this.gizmos){let A=this.gizmos[e];if(A instanceof ao){let t=this.shadow.camera,i=new E(-t.far+this.position.x,-t.far+this.position.y,-t.far+this.position.z),n=new E(t.far+this.position.x,t.far+this.position.y,t.far+this.position.z);A.box.set(i,n),A.updateMatrixWorld(!0)}}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.objectHelper&&this.objectHelper.update()}updateState(e,A){this.updateState_Light(e,A),e.distance!==void 0&&(this.distance=e.distance),e.decay!==void 0&&(this.decay=e.decay),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},jp=new E,qp=new E,Xp=new Oi,iI=class extends du(NS,P0){constructor(e,A,t){super(),this.super_Entity(e,A),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=Fe.RAD2DEG*2*this.angle,i.aspect=1,i.near=100,i.far=2500;let n=new so(this.shadow.camera);n.visible=!1,this.gizmos.shadowmap=n,this.update()}update(){this.shadow.camera.updateProjectionMatrix();for(let e in this.gizmos){let A=this.gizmos[e];A instanceof so&&A.update()}}updateMatrixWorld(e){super.updateMatrixWorld(e),qp.setFromMatrixPosition(this.matrixWorld),Xp.setFromRotationMatrix(this.matrixWorld),jp.copy(this.up).applyQuaternion(Xp).negate().multiplyScalar(this.distance),this.target.position.copy(qp).add(jp),this.target.updateMatrixWorld(),this.objectHelper&&this.objectHelper.update()}updateState(e,A){this.updateState_Light(e,A),e.distance!==void 0&&(this.distance=e.distance),e.decay!==void 0&&(this.decay=e.decay),e.angle!==void 0&&(this.angle=e.angle),e.penumbra!==void 0&&(this.penumbra=e.penumbra),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},nI=class extends Un{get forceComputeSize(){return!0}get shape(){return this.geometry.userData.shape}constructor(e,A,t){super(e,A,t)}updateEntityBoxSize(e,A){let t=this.geometry.getAttribute("position");t!==void 0?Hg(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,e,A):super.updateEntityBoxSize(e,A)}},Ds=class extends Zo(pr,fu){constructor(e,A,t){super(),A.type==="Instance"&&typeof e=="string"&&(A=this.transformAssignData(A,t)),this.super_Entity(e,A),this.objectHelper.update()}get isComponentRoot(){return this.data.type==="Component"&&typeof this.identity=="string"}get isInstanceRoot(){return this.data.type==="Instance"&&typeof this.identity=="string"}transformAssignData(e,A){let t=A.scene.data.objects.get(e.component);if(t){let i,n;for(let r of Br.rootOverrideProps)e[r]===void 0?(i===void 0&&(i={...e}),i[r]=t.data[r]):(n===void 0&&(n={}),n[r]=e[r]);return this.overrideData=n,i??e}return e}updateByOp(e,A,t,i){let n;if(this.isInstanceRoot&&!i&&(A=this.transformAssignData(A,t),e.type===0&&e.path.length===0&&this.component))for(let r of Br.rootOverrideProps)r in e.props&&e.props[r]===void 0&&(n===void 0&&(n={...e,props:{...e.props}}),n.props[r]=this.component.data[r]);super.updateByOp(n??e,A,t,i)}updateState(e,A){this.updateState_Entity(e,A)}expandInstanceChildren(e){let A=this.data;if(this.component===void 0){this.component=e.scene.find(A.component)??null;let t=!1;if(this.component!==this.oldComponent){if(this.oldComponent){let i=0;for(let n of this.children)if(Re.is(n))e.scene.disposeAndUnregisterEntityRecursivelyIfNotReregistered(n),pu(n),i+=1;else break;this.children.splice(0,i)}t=!0}this.component&&O0(e,[this.uuid],A.overrides,this,this.component,this.component,0,t),this.oldComponent=this.component}}};function pu(e){if(e.component){let A=e.component.instances.indexOf(e);A>=0&&e.component.instances.splice(A,1);for(let t of e.children)Re.is(t)&&pu(t)}}function Yp(e,A,t,i){return e.component===A&&yg(e.identity,i)?e.overrideData===t?2:1:0}function O0(e,A,t,i,n,r,s,a){if(s>50)return!1;if(i.component!==n){if(i.component){let c=i.component.instances.indexOf(i);c>=0&&i.component.instances.splice(c,1)}n.instances.push(i),i.component=n}n instanceof Ds&&n.isInstanceRoot&&n.expandInstanceChildren(e);let o=0;for(let c of n.children)if(Re.is(c)){let u=[...A,...typeof c.identity=="string"?[c.identity]:c.identity],l=yo.resolve(t,u,1),h=null,d;if(!a){let f=i.children[o];if(h=Re.is(f)?f:null,h!==null){let m=Yp(h,c,l,u);d=m>=1?h.stateSelection:void 0,m!==2&&(h=null)}if(h===null&&(h=e.scene.findInstance(u)??null,h!==null)){let m=Yp(h,c,l,u);if(d=m>=1?h.stateSelection:void 0,m!==2)h=null;else{let p=h.parent.children.indexOf(h);h.parent.children.splice(p,1),i.children.splice(o,0,h),h.parent===i?p<=o&&console.error("not possible"):(h.parent=i,h.matrixWorldNeedsUpdate=!0,h.resetBBoxNeedsUpdate(),h.updateVisible(),e.pendingDeletes.delete(h))}}}if(h===null){let f=l?Cn.apply(c.data,l):c.data;zn.is(f.type)&&(f={...f,type:"Empty"}),h=ji.createEntity(u,f,e),h.overrideData=l,i.add(h),i.children.splice(i.children.length-1,1),i.children.splice(o,0,h),h.updateState(h.data,e),d&&h.changeSelectedState(d,e),e.scene.registerInstanceAndSetUuid(h)}o+=1,O0(e,A,t,h,c,r,s+1,a)}if(!a){let c=o;for(;;){let u=i.children[o];if(Re.is(u))e.pendingDeletes.add(u);else break;o+=1}i.children.splice(c,o-c)}return!0}function rI(e,A,t){let i;return A.geometry.type==="TextGeometry"?new M0(e,A,t):(A.geometry.type==="SubdivGeometry"?i=new sh(e,A,t):A.geometry.type==="VectorGeometry"?i=new nI(e,A,t):A.geometry.type==="BooleanGeometry"?i=new Fr(e,A,t):i=new Un(e,A,t),i)}function mu(e,A,t){return A.type==="Mesh"?rI(e,A,t):A.type==="Empty"?new Wp(e,A):A.type==="PointLight"?new tI(e,A,t):A.type==="SpotLight"?new iI(e,A,t):A.type==="DirectionalLight"?new eI(e,A,t):A.type==="Component"||A.type==="Instance"?new Ds(e,A,t):zn.is(A.type)?new Do(e,A):(console.error(A),new Wp(e,A))}ji.createEntity=mu;function sI(e,A,t){let i=mu(e.identity,A,t),n=e.children,r=e.parent,s=e.component,a=e.instances,o=e.overrideData,c=e.uuid,u=e.stateSelection;e.dispose();for(let l of Object.keys(e))delete e[l];Object.setPrototypeOf(e,Object.getPrototypeOf(i));for(let l of Object.keys(i))e[l]=i[l];e.children=[...e.children,...n],e.parent=r,e.component=s,e.instances=a,e.uuid=c,e.overrideData=o,e.updateState(e.data,t),u&&e.changeSelectedState(u,t),e.resetBBoxNeedsUpdate()}ji.changeEntityProptotype=sI;ji.Cloner=C0;function aI(e,A,t,i){e.updateByOp(A,t,i,!1)}function Qp(e,A){let t=!1,i=A.getLayersOfType("transmission"),n=A.getLayersOfType("outline");return n.length>0&&(e.layers.set(8),i.length>0&&e.layers.enable(3),t=!0,uu(e),hu(e)),i.length===0&&n.length===0&&e.layers.set(0),t}function Zp(e,A){if(!A.layers)return!1;let t=!1,i=A.getLayersOfType("transmission"),n=A.getLayersOfType("outline");return i.length>0&&(e.layers.set(3),n.length>0&&e.layers.enable(8),t=!0),i.length===0&&n.length===0&&e.layers.set(0),t}function oI(e){let A=!1;return e.traverseEntity(t=>{if(t instanceof Ks)if(Array.isArray(t.material))for(let i=0;i<t.material.length;i++)Qp(t,t.material[i])&&(A=!0);else Qp(t,t.material)&&(A=!0)}),A}function lI(e){let A=!1;return e.traverseEntity(t=>{if(t instanceof Ks)if(Array.isArray(t.material))for(let i=0;i<t.material.length;i++)Zp(t,t.material[i])&&(A=!0);else Zp(t,t.material)&&(A=!0)}),A}var cI=new GS,hI=new GA,uI=new Ur;function dI(e,A,t){let i=e.cloner;if(i)for(let n of i.children){let r=hI.copy(n.matrixWorld).invert(),s=uI.copy(A.ray).applyMatrix4(r),a=e.matrixWorld;s.applyMatrix4(a);let o=cI;o.set(s.origin,s.direction),o.near=A.near,o.far=A.far,o.intersectObject(e,!1).length>0&&t.push({object:e})}}var fI=new LS;fI.wireframe=!0;var Jp=new E,R0=class extends Qw{constructor(e,A){super(),this.data=e,this.backupFog=new gh(16777215,.1,2e3),this.fogUseBGColor=!1,this.enableHelpers=!1,this.wireframeState=!1,this.needsTransmissionDirty=!0,this.needsNormalDirty=!0,this._needsTransmission=!1,this._needsNormal=!1,this.geometryCacheChanged=!1,this.bgColor=new Yt(1,1,1,1),this.entityByUuid={},this.entityIdentityToEntity={},this.toExpandCloner=new Set,this.toUpdateCloner=new Set,this.needsRecomputeInstances=!1,this.ambientLight=new RS(13882323,8553090,.75),this.ambientLight.name="Default Ambient Light",this.ambientLight.layers.enable(3),this.personalCamera=this.createPersonalCamera(),this.activeCamera=this.personalCamera,this.postprocessing=e.postprocessing,this.init(e,A),this.matrixAutoUpdate=!1}markGeometryCacheDirty(){this.geometryCacheChanged=!0}markNeedsUpdateRendererDirty(){this.needsTransmissionDirty=!0,this.needsNormalDirty=!0}needsTransmission(){return this.needsTransmissionDirty&&(this._needsTransmission=lI(this),this.needsTransmissionDirty=!1),this._needsTransmission}needsNormal(){return this.needsNormalDirty&&(this._needsNormal=oI(this),this.needsNormalDirty=!1),this._needsNormal}registerInstanceAndSetUuid(e){let A=e.identity.join("-"),t=this.entityIdentityToEntity[A];t&&(e.uuid=t.uuid),this.entityIdentityToEntity[A]=e,this.entityByUuid[e.uuid]=e}findInstance(e){return this.entityIdentityToEntity[e.join("-")]}getWithSortKey(e){let A=this.find(e);if(A===void 0)return;let t=[],i=A;for(;i!==this;){let n=i;i=i.parent;let r=i.children.indexOf(n);t.splice(0,0,r)}return{entity:A,sortKey:t}}getAllSorted(e){let A=[];for(let t of e){let i=this.getWithSortKey(t.id);i!==void 0&&A.push(i)}return A.sort((t,i)=>VM(t.sortKey,i.sortKey)),A.map(t=>t.entity)}nonExistOrDescendantOf(e,A){let t=this.find(e);if(t===void 0)return!0;for(;t;){if(t.uuid===A)return!0;t=t.parent}return!1}find(e){if(e===""||e===void 0)return;let A=this.entityByUuid[e];return A===void 0?this.getObjectByProperty("uuid",e):A}debugEnsureEntity(e){let A=this.find(e);if(A){if(Array.isArray(A.identity)&&this.findInstance(A.identity)===void 0){console.error("not found instance");debugger}}else{console.error("not found");debugger}}addPendingExpandCloner(e){this.toExpandCloner.add(e)}addPendingUpdateCloner(e){this.toUpdateCloner.add(e)}markToExpandCloner(e){this.toExpandCloner.add(e),e.traverseEntityAncestors(A=>{this.toExpandCloner.add(A)})}doPendingExpandCloner(){this.toExpandCloner.forEach(e=>{e.expandCloner(this)}),this.toExpandCloner.clear()}doPendingUpdateCloner(){this.toUpdateCloner.forEach(e=>{e.cloner?.update()}),this.toUpdateCloner.clear()}doPendingUpdates(){this.doPendingExpandCloner(),this.doPendingUpdateCloner()}updateTreeByOp(e,A){if(e.path.length===0&&e.type===7){let t=e.parent===null?this:this.find(e.parent);if(t===void 0)throw new Error("unexpected");let i=this.createObject(e.id,e.data,e.children,t,e.localIndex,A);i.updateVisible(),i.resetBBoxNeedsUpdate(),Wa(i)&&ja(i.parent)&&(i.invalidateUpstreamBooleanData(),i.parent.invalidateDownstreamBooleanData().recomputeBoolean()),this.markNeedsRecomputeInstancesForAncessors(t),this.markNeedsRecomputeInstancesForChildren(i),this.markToExpandCloner(i)}else if(e.path.length===0&&e.type===8){let t=this.find(e.id);if(t===void 0)throw new Error("unexpected");this.markToExpandCloner(t),t.resetBBoxNeedsUpdate(),this.unregisterObject(t);let i=t.parent;this.markNeedsRecomputeInstancesForAncessors(i),this.markNeedsRecomputeInstancesForChildren(t),t.parent.remove(t),ja(t.parent)&&(t.parent.invalidateUpstreamBooleanData(),t.parent.invalidateDownstreamBooleanData().recomputeBoolean()),Wa(t)&&(t.freeBooleanPointer(),i instanceof Fr&&i.invalidateDownstreamBooleanData().recomputeBoolean()),this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(t)}else if(e.path.length===0&&e.type===9){let t=this.find(e.id);if(t===void 0)throw new Error("unexpected");this.markNeedsRecomputeInstancesForChildren(t);let i=t.parent;this.markNeedsRecomputeInstancesForAncessors(i),t.cloner?.resetOnMove(),this.markToExpandCloner(t);let n=e.parent===null?this:this.find(e.parent);if(n===void 0)throw new Error("unexpected");n.add(t),this.markNeedsRecomputeInstancesForAncessors(n),this.markToExpandCloner(t),t.invalidateClonerTransform(t),t.updateVisible(),t.resetBBoxNeedsUpdate();let r=e.localIndex;n.children.splice(r,0,n.children.pop()),Wa(t)&&(t.invalidateUpstreamBooleanData(),ja(t.parent)?t.parent.invalidateDownstreamBooleanData().recomputeBoolean():i instanceof Fr&&i.invalidateDownstreamBooleanData().recomputeBoolean())}this.markNeedsUpdateRendererDirty(),this.markGeometryCacheDirty()}updateEntityByOp(e,A,t,i){if(A.type===0&&(("overrides"in A.props||"component"in A.props)&&this.markNeedsRecomputeInstances(),A.path.includes("overrides")&&"states"in A.props)){let{states:r,rest:s}=A.props;A={...A,props:s},this.markNeedsRecomputeInstances()}let n=this.find(e);if(n)try{aI(n,A,t,{scene:this,shared:i}),n instanceof Un&&n.updateGeometryGroupsIfNeeded()}catch(r){console.error(r)}}get enableFog(){return this.fog!==null}set enableFog(e){this.fog=e===!0?this.backupFog:null}init(e,A){if(this.createChildrenObjects(e.objects,this,A),this.personalCamera.removeFromParent(),this.add(this.personalCamera),this.ambientLight.removeFromParent(),this.add(this.ambientLight),this.setBackgroundColor(vt(e.backgroundColor,A)),this.updateFog(e.fog,A),this.updateAmbientLight(e.environment.ambientLight,A),this.activeCamera=this.personalCamera,e.publish.playCamera!==null){let t=this.find(e.publish.playCamera);t instanceof Do&&this.switchActiveCamera(t)}this.expandInstances(A,!0),this.traverseEntity(t=>{ja(t)&&t.recomputeBoolean()}),this.doPendingExpandCloner()}markNeedsRecomputeInstances(){this.needsRecomputeInstances=!0}markNeedsRecomputeInstancesForChildren(e){e.traverseEntity(A=>{(A.data.type==="Component"||A.data.type==="Instance")&&this.markNeedsRecomputeInstances()})}markNeedsRecomputeInstancesForAncessors(e){Re.is(e)&&(e.data.type==="Component"&&this.markNeedsRecomputeInstances(),e.traverseAncestors(A=>{Re.is(A)&&A.data.type==="Component"&&this.markNeedsRecomputeInstances()}))}relativeizeInner(e,A,t,i,n){if(e.data.type==="Transition"){let r=e.data.object;r&&r!==A.uuid&&A.find(r)&&t.forInstancesRec(s=>{s.isInstanceRoot||(s.data=ho(s.data,a=>{let o=a.events.data(n.id),c=s.goUp(i);if(c){let u=[...Wm(c.identity),e.data.object].join("-"),l=this.entityIdentityToEntity[u];if(l){let h=l.uuid;o.actions.data(e.id).object=h}else{debugger;console.warn("cannot find instance")}}}).data)})}}rewriteEventsBeforeGoToPlayMode(){this.traverseEntity(e=>{if(e instanceof Ds&&typeof e.identity=="string"&&e.data.type==="Component")return e.traverseEntity((A,t)=>{A.data.events.forEach(i=>{i.data.type==="GameControl"?A.forInstancesRec(n=>{n.isInstanceRoot||(n.data=ho(n.data,r=>{r.events.delete(i.id)}).data)}):"actions"in i.data&&i.data.actions.forEach(n=>{this.relativeizeInner(n,e,A,t,i)})})}),!0})}expandInstances(e,A){let t=new Set;this.traverseEntity(i=>{if(i instanceof Ds&&i.isInstanceRoot)return i.expandInstanceChildren({scene:this,shared:e,pendingDeletes:t}),A||i.resetBBoxNeedsUpdate(),!0});for(let i of t)this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(i),pu(i)}recomputeInstances(e){this.needsRecomputeInstances&&(this.needsRecomputeInstances=!1,this.traverseEntity(A=>{A instanceof Ds&&A.isInstanceRoot&&(A.component=void 0)}),this.expandInstances(e,!1))}disposeAndUnregisterEntityRecursivelyIfNotReregistered(e){e.traverseEntity(A=>{let t=typeof A.identity=="string"?A.identity:A.identity.join("-");this.entityIdentityToEntity[t]===A&&(delete this.entityByUuid[A.uuid],delete this.entityIdentityToEntity[t]),A.dispose()})}clearScene(){for(let e of this.children)ai(e)&&e.disposeRecursively();this.children.length=0}resetAfterClear(e,A){this.init(e,A)}createPersonalCamera(){let e=new Do(R0.PERSONAL_CAMERA_ID,{...vo.defaultData,name:"Personal Camera"});return e.objectHelper.visible=!1,this.registerObjectCreatedInLegacy(e),e}raycast(e){let A=[],t=i=>{for(let n of i.children)ai(n)&&!n.raycastLock&&n.visible&&((Wa(n)||$R(n)&&this.enableHelpers&&n.objectHelper.visible)&&(e.intersectObject(n,!1,A),dI(n,e,A)),t(n))};return t(this),A}forEachEntity(e){for(let A of this.children)ai(A)&&e(A)}traverseEntity(e){for(let A of this.children)ai(A)&&A.traverseEntity(e)}traverseVisibleEntity(e){for(let A of this.children)ai(A)&&A.visible&&A.traverseVisibleEntity(e)}updateFog(e,A){this.enableFog=e.enabled,this.fogUseBGColor=e.useBackgroundColor,e.useBackgroundColor?this.backupFog.color.set(this.bgColor):this.backupFog.color=vt(e.color,A),this.backupFog.near=e.near,this.backupFog.far=e.far}dispose(){this.clearScene()}updateAmbientLight(e,A){e.color!==void 0&&(this.ambientLight.color=vt(e.color,A)),e.intensity!==void 0&&(this.ambientLight.intensity=e.intensity),e.groundColor!==void 0&&(this.ambientLight.groundColor=vt(e.groundColor,A)),e.enabled!==void 0&&(this.ambientLight.visible=e.enabled)}switchActiveCamera(e){this.activeCamera!==this.personalCamera&&(this.activeCamera.objectHelper.visible=!0),this.activeCamera=e,e.objectHelper.visible=!1}setBackgroundColor(e){this.bgColor=e,this.fogUseBGColor===!0&&(this.backupFog.color=e)}createChildrenObjects(e,A,t){let i=0;for(let n of e)this.createObject(n.id,n.data,n.children,A,i,t),i+=1}registerObjectCreatedInLegacy(e){this.entityByUuid[e.uuid]=e}unregisterObject(e){delete this.entityByUuid[e.uuid];for(let A of e.children)this.unregisterObject(A)}createObject(e,A,t,i,n,r){let s={scene:this,shared:r},a=mu(e,A,s);return a&&(this.entityByUuid[e]=a,i.add(a),i.children.splice(n,0,i.children.pop()),t.length>0&&(a.isInstanceRoot?console.error("instance should not have children!"):this.createChildrenObjects(t,a,r)),a.updateState(A,s),a instanceof Un&&a.updateGeometryGroupsIfNeeded(),a.updateVisible(),a.cloner&&this.toExpandCloner.add(a)),a}getCenter(e){let A=[];for(let i=0,n=e.length;i<n;++i){let{id:r,recursive:s}=e[i],a=this.find(r),o=s?a.recursiveBBox:a.singleBBox;A.push(...o.vertices)}let t=new Nt;return t.setFromPoints(A),t.getCenter(Jp),Jp}copyMatrixWorld(e,A){if(e===null){A.identity();return}let t=this.find(e);t?A.copy(t.matrixWorld):A.identity()}copyParentMatrixWorld(e,A){if(e===null){A.identity();return}let t=this.find(e)?.parent;t?A.copy(t.matrixWorld):A.identity()}traverseMaterial(e){this.traverseEntity(A=>{if(A instanceof $i)if(Array.isArray(A.material))for(let t=0;t<A.material.length;t++)A.material[t]instanceof An&&e(A.material[t]);else A.material instanceof An&&e(A.material)})}updateCanvasSize(e,A){this.activeCamera.setViewplaneSize(e,A);let t,i;e>=A?(t=A/e,i=1):(t=1,i=e/A),this.traverseMaterial(n=>{n.getLayersOfType("transmission").forEach(r=>{r.uniforms[`f${r.id}_aspectRatio`].value.x=t,r.uniforms[`f${r.id}_aspectRatio`].value.y=i})})}},I0=R0;I0.PERSONAL_CAMERA_ID="f23858d0-4a3b-4bd8-8173-66ed0af7f6fb-personalCamera";var Xi;function pI(){return Xi||(Xi=new JS,Xi.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.2/").preload()),Xi.decoderPending}async function mI(e){if(Xi){let A={attributeIDs:Xi.defaultAttributeIDs,attributeTypes:Xi.defaultAttributeTypes,useUniqueIDs:!1},t;try{t=await Xi.decodeGeometry(new Int8Array(e).buffer,A)}catch(i){console.error(i)}if(t)return{index:t.index?{array:t.index.array}:void 0,attributes:Object.entries(t.attributes).map(([i,n])=>({name:i,itemSize:n.itemSize,array:n.array}))}}return null}async function gI(e,A){let[t,i]=Pm(Pc.deserialize(new Uint8Array(e)));YD(t);let n=[];t.scene.objects.traverse((r,s)=>{s.type==="Mesh"&&s.geometry.type==="NonParametricGeometry"&&s.geometry.data.draco!==void 0&&n.push(s)}),n.length&&await pI();for(let r of n){let s=await mI(Ke(r.geometry.data.draco));if(s){s.index&&(r.geometry.data.index={array:s.index.array,itemSize:1,normalized:!1,type:"Uint32Array"});let a={};s.attributes.forEach(({name:o,array:c,itemSize:u})=>{a[o]={array:c,itemSize:u,type:"Float32Array",normalized:!1}}),r.geometry.data.attributes=a,r.geometry.data.draco=void 0}}return A&&A(t),i.result().data}function vI(e){let A;if(e.index)for(let t=0;t<e.index.array.length;t+=3)A=e.index.array[t],e.index.array[t]=e.index.array[t+2],e.index.array[t+2]=A}function yI(e){let A=new Set;return e.traverse(t=>{if(t instanceof Ks)if(Jt(t.material))t.material.forEach(i=>{let n=i;A.has(n)||A.add(n)});else{let i=t.material;A.has(i)||A.add(i)}}),A.forEach(t=>{if(t instanceof Array)return;let i=t.onBeforeCompile.bind(t);if(xI(t)){Object.assign(t,{isMeshStandardMaterial:!0,isMeshPhysicalMaterial:!0,transmission:1,attenuationColor:new jA,specularColor:new jA});let n=0;t.onBeforeCompile=(r,s)=>{i&&i(r,s),r.uniforms=Object.assign({},Gt.physical.uniforms,r.uniforms),t.getLayersOfType("transmission").forEach(a=>{if(r.uniforms.transmissionSamplerMap.value){let o=a.color;o&&(o.transmissionSamplerMap.value=r.uniforms.transmissionSamplerMap.value,o.transmissionSamplerSize.value=r.uniforms.transmissionSamplerSize.value)}else n++,n<2&&(t.needsUpdate=!0)})}}else bI(t)||(t.onBeforeCompile=(n,r)=>{i&&i(n,r),t.transparent=!1})}),e}function xI(e){return e.getLayersOfType("transmission").length>0}function bI(e){let A=0;return e.layers.forEach(t=>{if(t.type!=="light"&&t.type!=="fresnel"){let i=t.uniforms["f"+t.id+"_alpha"];i&&(A+=(1-A)*i.value)}}),A<1}function wI(e){return e.traverse(A=>{if(A.type==="Camera"){let t=A;t.type=t.cameraType}}),e}function SI(e){let A=[],t=(i,n=0)=>{let r=n>0?i+n:i;return A.includes(r)?t(i,n+1):r};return e.traverse(i=>{if(A.includes(i.name)){let n=i.name,r=t(i.name);if(i.name=r,i.isMesh){let s=i;s.material instanceof Array?s.material.forEach(a=>{a.name=a.name.replace(n,r)}):s.material.isAsset||(s.material.name=s.material.name.replace(n,r))}}A.push(i.name)}),e}function MI(e){let A=[];return e.traverse(t=>{t instanceof C0&&A.push(t)}),A.forEach(t=>{let i=t.object,n=t.children.map(s=>{s.updateMatrix();let a=s.geometry.clone().applyMatrix4(s.matrix);return s.matrix.determinant()<0&&vI(a),a}),r=Sm(t.parameters.hideBase?n:[i instanceof $i?i.geometry:[],...n]);i instanceof $i&&(i.geometry=r),t.removeFromParent(),i.setFromClonerState(null,{scene:e,shared:MR})}),e}function _I(e){return e.traverse(A=>{A.matrixAutoUpdate=!0}),e}function TI(e){Object.values(e.shared.materials).forEach(A=>{uc(A)}),e.scene.objects.traverse((A,t)=>{"material"in t?uc(t.material):"materials"in t&&t.materials.forEach(i=>{uc(i)})})}function uc(e){if(typeof e=="string")return;let A=[];e.layers.forEach((t,i)=>{t.type==="outline"&&A.push(i)}),A.reverse().forEach(t=>{e.layers.delete(t)}),A.length&&console.warn("The Spline Loader currently does not support the outline layer.")}var Kp="The SplineLoader only accepts .splinecode files that are generated from Spline export panel.",CI=class extends Fo{load(e,A,t,i=console.error){let n=new ro(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),e.endsWith(".spline")?console.warn(Kp+" The .spline files are only meant to be used by the Editor."):e.endsWith(".splinecode")||console.warn(Kp),n.load(e,async r=>{try{if(typeof r=="string")throw new Error("The .spline file is not binary!");let s=await this.parse(r);A(s)}catch(s){i(s)}},t,i)}async parse(e){let A=await gI(e,TI);jR(A)&&await fR();let t=new cu(A.shared);Object.values(t.getMaterials()).forEach(r=>Object.assign(r,{isAsset:!0}));let i=new I0(A.scene,t);i.remove(i.personalCamera),A.scene.environment.ambientLight.enabled||i.remove(i.ambientLight);let n=A.scene.publish.playCamera;if(n){let r=i.find(n);r&&KR(r)&&Object.assign(r,{makeDefault:!0})}return i=MI(i),i=yI(i),i=wI(i),i=SI(i),i=_I(i),i}};export{jA as C,Qi as E,ph as O,CI as P,Qw as S,Xw as W,$p as a,EI as b,ot as c};