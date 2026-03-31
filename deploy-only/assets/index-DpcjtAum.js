var qh=Object.defineProperty;var jh=(s,t,e)=>t in s?qh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var D=(s,t,e)=>jh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="160",Kh=0,Qa=1,Zh=2,Jh=0,Jl=1,Qh=2,Gn=3,hi=0,en=1,Wn=2,oi=0,hs=1,tc=2,ec=3,nc=4,td=5,Ei=100,ed=101,nd=102,ic=103,sc=104,id=200,sd=201,rd=202,od=203,ua=204,fa=205,ad=206,cd=207,ld=208,hd=209,dd=210,ud=211,fd=212,pd=213,md=214,gd=0,_d=1,vd=2,Vr=3,xd=4,yd=5,Md=6,Ed=7,ka=0,Sd=1,bd=2,Yn=0,Td=1,wd=2,Ad=3,Cd=4,Rd=5,Pd=6,Ql=300,ps=301,ms=302,pa=303,ma=304,Jr=306,ga=1e3,bn=1001,_a=1002,Ze=1003,rc=1004,_o=1005,fn=1006,Ld=1007,Ws=1008,ai=1009,Id=1010,Dd=1011,za=1012,th=1013,si=1014,ri=1015,Xs=1016,eh=1017,nh=1018,wi=1020,Ud=1021,Tn=1023,Od=1024,Nd=1025,Ai=1026,gs=1027,Fd=1028,ih=1029,Bd=1030,sh=1031,rh=1033,vo=33776,xo=33777,yo=33778,Mo=33779,oc=35840,ac=35841,lc=35842,hc=35843,oh=36196,dc=37492,uc=37496,fc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,yc=37815,Mc=37816,Ec=37817,Sc=37818,bc=37819,Tc=37820,wc=37821,Eo=36492,Ac=36494,Cc=36495,kd=36283,Rc=36284,Pc=36285,Lc=36286,ah=3e3,Ci=3001,zd=3200,Hd=3201,ch=0,Gd=1,mn="",We="srgb",qn="srgb-linear",Ha="display-p3",Qr="display-p3-linear",Wr="linear",Te="srgb",Xr="rec709",$r="p3",Oi=7680,Ic=519,Vd=512,Wd=513,Xd=514,lh=515,$d=516,Yd=517,qd=518,jd=519,va=35044,Kd=35048,Dc="300 es",xa=1035,$n=2e3,Yr=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,ya=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function tn(s,t,e){return Math.max(t,Math.min(e,s))}function Zd(s,t){return(s%t+t)%t}function bo(s,t,e){return(1-e)*s+e*t}function Uc(s){return(s&s-1)===0&&s!==0}function Ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,i,r,a,o,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],x=n[8],y=i[0],g=i[3],p=i[6],A=i[1],b=i[4],R=i[7],B=i[2],I=i[5],P=i[8];return r[0]=a*y+o*A+c*B,r[3]=a*g+o*b+c*I,r[6]=a*p+o*R+c*P,r[1]=l*y+h*A+u*B,r[4]=l*g+h*b+u*I,r[7]=l*p+h*R+u*P,r[2]=f*y+m*A+x*B,r[5]=f*g+m*b+x*I,r[8]=f*p+m*R+x*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,m=l*r-a*c,x=e*u+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=u*y,t[1]=(i*l-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=f*y,t[4]=(h*e-i*c)*y,t[5]=(i*r-o*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Qt;function hh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){const s=qr("canvas");return s.style.display="block",s}const Oc={};function ks(s){s in Oc||(Oc[s]=!0,console.warn(s))}const Nc=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fc=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[qn]:{transfer:Wr,primaries:Xr,toReference:s=>s,fromReference:s=>s},[We]:{transfer:Te,primaries:Xr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Qr]:{transfer:Wr,primaries:$r,toReference:s=>s.applyMatrix3(Fc),fromReference:s=>s.applyMatrix3(Nc)},[Ha]:{transfer:Te,primaries:$r,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fc),fromReference:s=>s.applyMatrix3(Nc).convertLinearToSRGB()}},Qd=new Set([qn,Qr]),_e={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Qd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Js[t].toReference,i=Js[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Js[s].primaries},getTransfer:function(s){return s===mn?Wr:Js[s].transfer}};function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=qr("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ci(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ao(i[a].image)):r.push(Ao(i[a]))}else r=Ao(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class nn extends Ms{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=bn,i=bn,r=fn,a=Ws,o=Tn,c=ai,l=nn.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ci(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?We:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Ci:ah}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?We:mn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ql;nn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],x=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,R=(m+1)/2,B=(p+1)/2,I=(h+f)/4,P=(u+y)/4,nt=(x+g)/4;return b>R&&b>B?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=I/n,r=P/n):R>B?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=I/i,r=nt/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=P/r,i=nt/r),this.set(n,i,r,e),this}let A=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-x)/A,this.y=(u-y)/A,this.z=(f-h)/A,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends Ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?We:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iu extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==f||l!==m||h!==x){let g=1-o;const p=c*f+l*m+h*x+u*y,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const B=Math.sqrt(b),I=Math.atan2(B,p*A);g=Math.sin(g*I)/B,o=Math.sin(o*I)/B}const R=o*A;if(c=c*g+f*R,l=l*g+m*R,h=h*g+x*R,u=u*g+y*R,g===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*u+c*m-l*f,t[e+1]=c*x+h*f+l*u-o*m,t[e+2]=l*x+h*m+o*f-c*u,t[e+3]=h*x-o*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),m=c(i/2),x=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"YZX":this._x=f*h*u+l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u-f*m*x;break;case"XZY":this._x=f*h*u-l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new N,Bc=new Ys;class Di{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),tr.subVectors(this.max,Ts),Fi.subVectors(t.a,Ts),Bi.subVectors(t.b,Ts),ki.subVectors(t.c,Ts),Zn.subVectors(Bi,Fi),Jn.subVectors(ki,Bi),ui.subVectors(Fi,ki);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-ui.y,ui.x,0];return!Ro(e,Fi,Bi,ki,tr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Fi,Bi,ki,tr))?!1:(er.crossVectors(Zn,Jn),e=[er.x,er.y,er.z],Ro(e,Fi,Bi,ki,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],xn=new N,Qs=new Di,Fi=new N,Bi=new N,ki=new N,Zn=new N,Jn=new N,ui=new N,Ts=new N,tr=new N,er=new N,fi=new N;function Ro(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const su=new Di,ws=new N,Po=new N;class Es{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Po)),this.expandByPoint(ws.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new N,Lo=new N,nr=new N,Qn=new N,Io=new N,ir=new N,Do=new N;class Ga{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lo.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Lo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(nr),o=Qn.dot(this.direction),c=-Qn.dot(nr),l=Qn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,x;if(h>0)if(u=a*c-o,f=a*o-c,x=r*h,u>=0)if(f>=-x)if(f<=x){const y=1/h;u*=y,f*=y,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lo).addScaledVector(nr,f),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,r){Io.subVectors(e,t),ir.subVectors(n,t),Do.crossVectors(Io,ir);let a=this.direction.dot(Do),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(ir.crossVectors(Qn,ir));if(c<0)return null;const l=o*this.direction.dot(Io.cross(Qn));if(l<0||c+l>a)return null;const h=-o*Qn.dot(Do);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,i,r,a,o,c,l,h,u,f,m,x,y,g){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,m,x,y,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,m,x,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+x*l,e[5]=f-y*l,e[9]=-o*c,e[2]=y-f*l,e[6]=x+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,x=l*h,y=l*u;e[0]=f+y*o,e[4]=x*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=y+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,x=l*h,y=l*u;e[0]=f-y*o,e[4]=-a*u,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=x*l-m,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=m*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=y-f*u,e[8]=x*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+x,e[10]=f-y*u}else if(t.order==="XZY"){const f=a*c,m=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=a*h,e[9]=m*u-x,e[2]=x*u-m,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ti.crossVectors(n,rn),ti.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ti.crossVectors(n,rn)),ti.normalize(),sr.crossVectors(rn,ti),i[0]=ti.x,i[4]=sr.x,i[8]=rn.x,i[1]=ti.y,i[5]=sr.y,i[9]=rn.y,i[2]=ti.z,i[6]=sr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],x=n[2],y=n[6],g=n[10],p=n[14],A=n[3],b=n[7],R=n[11],B=n[15],I=i[0],P=i[4],nt=i[8],T=i[12],C=i[1],Y=i[5],Q=i[9],dt=i[13],k=i[2],X=i[6],K=i[10],Z=i[14],et=i[3],it=i[7],st=i[11],ut=i[15];return r[0]=a*I+o*C+c*k+l*et,r[4]=a*P+o*Y+c*X+l*it,r[8]=a*nt+o*Q+c*K+l*st,r[12]=a*T+o*dt+c*Z+l*ut,r[1]=h*I+u*C+f*k+m*et,r[5]=h*P+u*Y+f*X+m*it,r[9]=h*nt+u*Q+f*K+m*st,r[13]=h*T+u*dt+f*Z+m*ut,r[2]=x*I+y*C+g*k+p*et,r[6]=x*P+y*Y+g*X+p*it,r[10]=x*nt+y*Q+g*K+p*st,r[14]=x*T+y*dt+g*Z+p*ut,r[3]=A*I+b*C+R*k+B*et,r[7]=A*P+b*Y+R*X+B*it,r[11]=A*nt+b*Q+R*K+B*st,r[15]=A*T+b*dt+R*Z+B*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],x=t[3],y=t[7],g=t[11],p=t[15];return x*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*m-n*c*m)+y*(+e*c*m-e*l*f+r*a*f-i*a*m+i*l*h-r*c*h)+g*(+e*l*u-e*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],x=t[12],y=t[13],g=t[14],p=t[15],A=u*g*l-y*f*l+y*c*m-o*g*m-u*c*p+o*f*p,b=x*f*l-h*g*l-x*c*m+a*g*m+h*c*p-a*f*p,R=h*y*l-x*u*l+x*o*m-a*y*m-h*o*p+a*u*p,B=x*u*c-h*y*c-x*o*f+a*y*f+h*o*g-a*u*g,I=e*A+n*b+i*R+r*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=A*P,t[1]=(y*f*r-u*g*r-y*i*m+n*g*m+u*i*p-n*f*p)*P,t[2]=(o*g*r-y*c*r+y*i*l-n*g*l-o*i*p+n*c*p)*P,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*m-n*c*m)*P,t[4]=b*P,t[5]=(h*g*r-x*f*r+x*i*m-e*g*m-h*i*p+e*f*p)*P,t[6]=(x*c*r-a*g*r-x*i*l+e*g*l+a*i*p-e*c*p)*P,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*m+e*c*m)*P,t[8]=R*P,t[9]=(x*u*r-h*y*r-x*n*m+e*y*m+h*n*p-e*u*p)*P,t[10]=(a*y*r-x*o*r+x*n*l-e*y*l-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*m-e*o*m)*P,t[12]=B*P,t[13]=(h*y*i-x*u*i+x*n*f-e*y*f-h*n*g+e*u*g)*P,t[14]=(x*o*i-a*y*i-x*n*c+e*y*c+a*n*g-e*o*g)*P,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,m=r*h,x=r*u,y=a*h,g=a*u,p=o*u,A=c*l,b=c*h,R=c*u,B=n.x,I=n.y,P=n.z;return i[0]=(1-(y+p))*B,i[1]=(m+R)*B,i[2]=(x-b)*B,i[3]=0,i[4]=(m-R)*I,i[5]=(1-(f+p))*I,i[6]=(g+A)*I,i[7]=0,i[8]=(x+b)*P,i[9]=(g-A)*P,i[10]=(1-(f+y))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length();const a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const l=1/r,h=1/a,u=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=$n){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,x;if(o===$n)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Yr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=$n){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,m=(n+i)*h;let x,y;if(o===$n)x=(a+r)*u,y=-2*u;else if(o===Yr)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new N,yn=new Se,ru=new N(0,0,0),ou=new N(1,1,1),ti=new N,sr=new N,rn=new N,kc=new Se,zc=new Ys;class to{constructor(t=0,e=0,n=0,i=to.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}to.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let au=0;const Hc=new N,Hi=new Ys,Nn=new Se,rr=new N,As=new N,cu=new N,lu=new Ys,Gc=new N(1,0,0),Vc=new N(0,1,0),Wc=new N(0,0,1),hu={type:"added"},du={type:"removed"};class Fe extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new N,e=new to,n=new Ys,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(As,rr,this.up):Nn.lookAt(rr,As,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(du)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new N(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new N,Fn=new N,Uo=new N,Bn=new N,Gi=new N,Vi=new N,Xc=new N,Oo=new N,No=new N,Fo=new N;let or=!1;class pn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),Fn.subVectors(n,e),Uo.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Fn),c=Mn.dot(Uo),l=Fn.dot(Fn),h=Fn.dot(Uo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,x=(a*h-o*c)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,i,r,a,o,c){return or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),or=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Fn.subVectors(t,e),Mn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),or=!0),pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Gi.subVectors(i,n),Vi.subVectors(r,n),Oo.subVectors(t,n);const c=Gi.dot(Oo),l=Vi.dot(Oo);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,i);const h=Gi.dot(No),u=Vi.dot(No);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Gi,a);Fo.subVectors(t,r);const m=Gi.dot(Fo),x=Vi.dot(Fo);if(x>=0&&m<=x)return e.copy(r);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(Vi,o);const g=h*x-m*u;if(g<=0&&u-h>=0&&m-x>=0)return Xc.subVectors(r,i),o=(u-h)/(u-h+(m-x)),e.copy(i).addScaledVector(Xc,o);const p=1/(g+y+f);return a=y*p,o=f*p,e.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Bo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=Zd(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bo(a,r,t+1/3),this.g=Bo(a,r,t),this.b=Bo(a,r,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return _e.fromWorkingColorSpace(Ye.copy(this),t),Math.round(tn(Ye.r*255,0,255))*65536+Math.round(tn(Ye.g*255,0,255))*256+Math.round(tn(Ye.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,r=Ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=We){_e.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(ar);const n=bo(ei.h,ar.h,e),i=bo(ei.s,ar.s,e),r=bo(ei.l,ar.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Nt;Nt.NAMES=ph;let uu=0;class Ui extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=hs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jn extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new N,cr=new jt;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=va,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}}class mh extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gh extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Dn extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fu=0;const dn=new Se,ko=new Fe,Wi=new N,on=new Di,Cs=new Di,ze=new N;class gn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?gh:mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(on.min,Cs.min),on.expandByPoint(ze),ze.addVectors(on.max,Cs.max),on.expandByPoint(ze)):(on.expandByPoint(Cs.min),on.expandByPoint(Cs.max))}on.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ze.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(t,l),ze.add(Wi)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let C=0;C<o;C++)l[C]=new N,h[C]=new N;const u=new N,f=new N,m=new N,x=new jt,y=new jt,g=new jt,p=new N,A=new N;function b(C,Y,Q){u.fromArray(i,C*3),f.fromArray(i,Y*3),m.fromArray(i,Q*3),x.fromArray(a,C*2),y.fromArray(a,Y*2),g.fromArray(a,Q*2),f.sub(u),m.sub(u),y.sub(x),g.sub(x);const dt=1/(y.x*g.y-g.x*y.y);isFinite(dt)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(dt),A.copy(m).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(dt),l[C].add(p),l[Y].add(p),l[Q].add(p),h[C].add(A),h[Y].add(A),h[Q].add(A))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let C=0,Y=R.length;C<Y;++C){const Q=R[C],dt=Q.start,k=Q.count;for(let X=dt,K=dt+k;X<K;X+=3)b(n[X+0],n[X+1],n[X+2])}const B=new N,I=new N,P=new N,nt=new N;function T(C){P.fromArray(r,C*3),nt.copy(P);const Y=l[C];B.copy(Y),B.sub(P.multiplyScalar(P.dot(Y))).normalize(),I.crossVectors(nt,Y);const dt=I.dot(h[C])<0?-1:1;c[C*4]=B.x,c[C*4+1]=B.y,c[C*4+2]=B.z,c[C*4+3]=dt}for(let C=0,Y=R.length;C<Y;++C){const Q=R[C],dt=Q.start,k=Q.count;for(let X=dt,K=dt+k;X<K;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,x=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let p=0;p<h;p++)f[x++]=l[m++]}return new sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Se,pi=new Ga,lr=new Es,Yc=new N,Xi=new N,$i=new N,Yi=new N,zo=new N,hr=new N,dr=new jt,ur=new jt,fr=new jt,qc=new N,jc=new N,Kc=new N,pr=new N,mr=new N;class ie extends Fe{constructor(t=new gn,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(zo.fromBufferAttribute(u,t),a?hr.addScaledVector(zo,h):hr.addScaledVector(zo.sub(e),h))}e.add(hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(lr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(lr,Yc)===null||pi.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&($c.copy(r).invert(),pi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],p=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let R=A,B=b;R<B;R+=3){const I=o.getX(R),P=o.getX(R+1),nt=o.getX(R+2);i=gr(this,p,t,n,l,h,u,I,P,nt),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const A=o.getX(g),b=o.getX(g+1),R=o.getX(g+2);i=gr(this,a,t,n,l,h,u,A,b,R),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],p=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let R=A,B=b;R<B;R+=3){const I=R,P=R+1,nt=R+2;i=gr(this,p,t,n,l,h,u,I,P,nt),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const A=g,b=g+1,R=g+2;i=gr(this,a,t,n,l,h,u,A,b,R),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function pu(s,t,e,n,i,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===hi,o),c===null)return null;mr.copy(o),mr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:s}}function gr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Xi),s.getVertexPosition(c,$i),s.getVertexPosition(l,Yi);const h=pu(s,t,e,n,Xi,$i,Yi,pr);if(h){i&&(dr.fromBufferAttribute(i,o),ur.fromBufferAttribute(i,c),fr.fromBufferAttribute(i,l),h.uv=pn.getInterpolation(pr,Xi,$i,Yi,dr,ur,fr,new jt)),r&&(dr.fromBufferAttribute(r,o),ur.fromBufferAttribute(r,c),fr.fromBufferAttribute(r,l),h.uv1=pn.getInterpolation(pr,Xi,$i,Yi,dr,ur,fr,new jt),h.uv2=h.uv1),a&&(qc.fromBufferAttribute(a,o),jc.fromBufferAttribute(a,c),Kc.fromBufferAttribute(a,l),h.normal=pn.getInterpolation(pr,Xi,$i,Yi,qc,jc,Kc,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};pn.getNormal(Xi,$i,Yi,u.normal),h.face=u}return h}class Re extends gn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,i,a,2),x("x","z","y",1,-1,t,n,-e,i,a,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Dn(l,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(u,2));function x(y,g,p,A,b,R,B,I,P,nt,T){const C=R/P,Y=B/nt,Q=R/2,dt=B/2,k=I/2,X=P+1,K=nt+1;let Z=0,et=0;const it=new N;for(let st=0;st<K;st++){const ut=st*Y-dt;for(let pt=0;pt<X;pt++){const q=pt*C-Q;it[y]=q*A,it[g]=ut*b,it[p]=k,l.push(it.x,it.y,it.z),it[y]=0,it[g]=0,it[p]=I>0?1:-1,h.push(it.x,it.y,it.z),u.push(pt/P),u.push(1-st/nt),Z+=1}}for(let st=0;st<nt;st++)for(let ut=0;ut<P;ut++){const pt=f+ut+X*st,q=f+ut+X*(st+1),ot=f+(ut+1)+X*(st+1),Mt=f+(ut+1)+X*st;c.push(pt,q,Mt),c.push(q,ot,Mt),et+=6}o.addGroup(m,et,T),m+=et,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=_s(s[e]);for(const i in n)t[i]=n[i]}return t}function mu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _h(s){return s.getRenderTarget()===null?s.outputColorSpace:_e.workingColorSpace}const gu={clone:_s,merge:Ke};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vh extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends vh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,ji=1;class xu extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(qi,ji,t,e);i.layers=this.layers,this.add(i);const r=new ln(qi,ji,t,e);r.layers=this.layers,this.add(r);const a=new ln(qi,ji,t,e);a.layers=this.layers,this.add(a);const o=new ln(qi,ji,t,e);o.layers=this.layers,this.add(o);const c=new ln(qi,ji,t,e);c.layers=this.layers,this.add(c);const l=new ln(qi,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class xh extends nn{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?We:mn),this.texture=new xh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Re(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:oi});r.uniforms.tEquirect.value=e;const a=new ie(i,r),o=e.minFilter;return e.minFilter===Ws&&(e.minFilter=fn),new xu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ho=new N,Mu=new N,Eu=new Qt;class vi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ho.subVectors(n,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eu.getNormalMatrix(t),i=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Es,_r=new N;class Wa{constructor(t=new vi,e=new vi,n=new vi,i=new vi,r=new vi,a=new vi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],m=i[8],x=i[9],y=i[10],g=i[11],p=i[12],A=i[13],b=i[14],R=i[15];if(n[0].setComponents(c-r,f-l,g-m,R-p).normalize(),n[1].setComponents(c+r,f+l,g+m,R+p).normalize(),n[2].setComponents(c+a,f+h,g+x,R+A).normalize(),n[3].setComponents(c-a,f-h,g-x,R-A).normalize(),n[4].setComponents(c-o,f-u,g-y,R-b).normalize(),e===$n)n[5].setComponents(c+o,f+u,g+y,R+b).normalize();else if(e===Yr)n[5].setComponents(o,u,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_r.x=i.normal.x>0?t.max.x:t.min.x,_r.y=i.normal.y>0?t.max.y:t.min.y,_r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Su(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,m=u.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=s.SHORT;else if(u instanceof Uint32Array)y=s.UNSIGNED_INT;else if(u instanceof Int32Array)y=s.INT;else if(u instanceof Int8Array)y=s.BYTE;else if(u instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){const f=h.array,m=h._updateRange,x=h.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&x.length===0&&s.bufferSubData(u,0,f),x.length!==0){for(let y=0,g=x.length;y<g;y++){const p=x[y];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class eo extends gn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,m=[],x=[],y=[],g=[];for(let p=0;p<h;p++){const A=p*f-a;for(let b=0;b<l;b++){const R=b*u-r;x.push(R,-A,0),y.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<o;A++){const b=A+l*p,R=A+l*(p+1),B=A+1+l*(p+1),I=A+1+l*p;m.push(b,R,I),m.push(R,B,I)}this.setIndex(m),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bf=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
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
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,lp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Dp=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Vp=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yp=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:bu,alphahash_pars_fragment:Tu,alphamap_fragment:wu,alphamap_pars_fragment:Au,alphatest_fragment:Cu,alphatest_pars_fragment:Ru,aomap_fragment:Pu,aomap_pars_fragment:Lu,batching_pars_vertex:Iu,batching_vertex:Du,begin_vertex:Uu,beginnormal_vertex:Ou,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Bu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Gu,color_fragment:Vu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:$u,common:Yu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Ku,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:vf,envmap_vertex:af,fog_vertex:cf,fog_pars_vertex:lf,fog_fragment:hf,fog_pars_fragment:df,gradientmap_pars_fragment:uf,lightmap_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:xf,lights_toon_pars_fragment:yf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Sf,lights_physical_pars_fragment:bf,lights_fragment_begin:Tf,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Of,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphcolor_vertex:Bf,morphnormal_vertex:kf,morphtarget_pars_vertex:zf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:$f,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Zf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:cp,shadowmask_pars_fragment:lp,skinbase_vertex:hp,skinning_pars_vertex:dp,skinning_vertex:up,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:yp,uv_pars_vertex:Mp,uv_vertex:Ep,worldpos_vertex:Sp,background_vert:bp,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Ap,cube_vert:Cp,cube_frag:Rp,depth_vert:Pp,depth_frag:Lp,distanceRGBA_vert:Ip,distanceRGBA_frag:Dp,equirect_vert:Up,equirect_frag:Op,linedashed_vert:Np,linedashed_frag:Fp,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:zp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:$p,meshphong_frag:Yp,meshphysical_vert:qp,meshphysical_frag:jp,meshtoon_vert:Kp,meshtoon_frag:Zp,points_vert:Jp,points_frag:Qp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},_t={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ke([_t.common,_t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ke([_t.lights,_t.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Pn.physical={uniforms:Ke([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const vr={r:0,b:0,g:0};function sm(s,t,e,n,i,r,a){const o=new Nt(0);let c=r===!0?0:1,l,h,u=null,f=0,m=null;function x(g,p){let A=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?e:t).get(b)),b===null?y(o,c):b&&b.isColor&&(y(b,1),A=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Jr)?(h===void 0&&(h=new ie(new Re(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:_s(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,(u!==b||f!==b.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ie(new eo(2,2),new Li({name:"BackgroundMaterial",uniforms:_s(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,m=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function y(g,p){g.getRGB(vr,_h(s)),n.buffers.color.setClear(vr.r,vr.g,vr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,y(o,c)},render:x}}function rm(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null);let l=c,h=!1;function u(k,X,K,Z,et){let it=!1;if(a){const st=y(Z,K,X);l!==st&&(l=st,m(l.object)),it=p(k,Z,K,et),it&&A(k,Z,K,et)}else{const st=X.wireframe===!0;(l.geometry!==Z.id||l.program!==K.id||l.wireframe!==st)&&(l.geometry=Z.id,l.program=K.id,l.wireframe=st,it=!0)}et!==null&&e.update(et,s.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,nt(k,X,K,Z),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(k){return n.isWebGL2?s.bindVertexArray(k):r.bindVertexArrayOES(k)}function x(k){return n.isWebGL2?s.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function y(k,X,K){const Z=K.wireframe===!0;let et=o[k.id];et===void 0&&(et={},o[k.id]=et);let it=et[X.id];it===void 0&&(it={},et[X.id]=it);let st=it[Z];return st===void 0&&(st=g(f()),it[Z]=st),st}function g(k){const X=[],K=[],Z=[];for(let et=0;et<i;et++)X[et]=0,K[et]=0,Z[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:Z,object:k,attributes:{},index:null}}function p(k,X,K,Z){const et=l.attributes,it=X.attributes;let st=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const ot=et[pt];let Mt=it[pt];if(Mt===void 0&&(pt==="instanceMatrix"&&k.instanceMatrix&&(Mt=k.instanceMatrix),pt==="instanceColor"&&k.instanceColor&&(Mt=k.instanceColor)),ot===void 0||ot.attribute!==Mt||Mt&&ot.data!==Mt.data)return!0;st++}return l.attributesNum!==st||l.index!==Z}function A(k,X,K,Z){const et={},it=X.attributes;let st=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let ot=it[pt];ot===void 0&&(pt==="instanceMatrix"&&k.instanceMatrix&&(ot=k.instanceMatrix),pt==="instanceColor"&&k.instanceColor&&(ot=k.instanceColor));const Mt={};Mt.attribute=ot,ot&&ot.data&&(Mt.data=ot.data),et[pt]=Mt,st++}l.attributes=et,l.attributesNum=st,l.index=Z}function b(){const k=l.newAttributes;for(let X=0,K=k.length;X<K;X++)k[X]=0}function R(k){B(k,0)}function B(k,X){const K=l.newAttributes,Z=l.enabledAttributes,et=l.attributeDivisors;K[k]=1,Z[k]===0&&(s.enableVertexAttribArray(k),Z[k]=1),et[k]!==X&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),et[k]=X)}function I(){const k=l.newAttributes,X=l.enabledAttributes;for(let K=0,Z=X.length;K<Z;K++)X[K]!==k[K]&&(s.disableVertexAttribArray(K),X[K]=0)}function P(k,X,K,Z,et,it,st){st===!0?s.vertexAttribIPointer(k,X,K,et,it):s.vertexAttribPointer(k,X,K,Z,et,it)}function nt(k,X,K,Z){if(n.isWebGL2===!1&&(k.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const et=Z.attributes,it=K.getAttributes(),st=X.defaultAttributeValues;for(const ut in it){const pt=it[ut];if(pt.location>=0){let q=et[ut];if(q===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),q!==void 0){const ot=q.normalized,Mt=q.itemSize,wt=e.get(q);if(wt===void 0)continue;const It=wt.buffer,Vt=wt.type,Wt=wt.bytesPerElement,Bt=n.isWebGL2===!0&&(Vt===s.INT||Vt===s.UNSIGNED_INT||q.gpuType===th);if(q.isInterleavedBufferAttribute){const ee=q.data,W=ee.stride,he=q.offset;if(ee.isInstancedInterleavedBuffer){for(let Ot=0;Ot<pt.locationSize;Ot++)B(pt.location+Ot,ee.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ot=0;Ot<pt.locationSize;Ot++)R(pt.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,It);for(let Ot=0;Ot<pt.locationSize;Ot++)P(pt.location+Ot,Mt/pt.locationSize,Vt,ot,W*Wt,(he+Mt/pt.locationSize*Ot)*Wt,Bt)}else{if(q.isInstancedBufferAttribute){for(let ee=0;ee<pt.locationSize;ee++)B(pt.location+ee,q.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ee=0;ee<pt.locationSize;ee++)R(pt.location+ee);s.bindBuffer(s.ARRAY_BUFFER,It);for(let ee=0;ee<pt.locationSize;ee++)P(pt.location+ee,Mt/pt.locationSize,Vt,ot,Mt*Wt,Mt/pt.locationSize*ee*Wt,Bt)}}else if(st!==void 0){const ot=st[ut];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(pt.location,ot);break;case 3:s.vertexAttrib3fv(pt.location,ot);break;case 4:s.vertexAttrib4fv(pt.location,ot);break;default:s.vertexAttrib1fv(pt.location,ot)}}}}I()}function T(){Q();for(const k in o){const X=o[k];for(const K in X){const Z=X[K];for(const et in Z)x(Z[et].object),delete Z[et];delete X[K]}delete o[k]}}function C(k){if(o[k.id]===void 0)return;const X=o[k.id];for(const K in X){const Z=X[K];for(const et in Z)x(Z[et].object),delete Z[et];delete X[K]}delete o[k.id]}function Y(k){for(const X in o){const K=o[X];if(K[k.id]===void 0)continue;const Z=K[k.id];for(const et in Z)x(Z[et].object),delete Z[et];delete K[k.id]}}function Q(){dt(),h=!0,l!==c&&(l=c,m(l.object))}function dt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:dt,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:Y,initAttributes:b,enableAttribute:R,disableUnusedAttributes:I}}function om(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let m,x;if(i)m=s,x="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function am(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,R=a||t.has("OES_texture_float"),B=b&&R,I=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:R,floatVertexTextures:B,maxSamples:I}}function cm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new vi,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!g)r?h(null):l();else{const A=r?0:n,b=A*4;let R=p.clippingState||null;c.value=R,R=h(x,f,b,m);for(let B=0;B!==b;++B)R[B]=e[B];p.clippingState=R,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,x){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=c.value,x!==!0||g===null){const p=m+y*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,R=m;b!==y;++b,R+=4)a.copy(u[b]).applyMatrix4(A,o),a.normal.toArray(g,R),g[R+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function lm(s){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=ps:o===ma&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yu(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Mh extends vh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Zc=[.125,.215,.35,.446,.526,.582],Si=20,Go=new Mh,Jc=new Nt;let Vo=null,Wo=0,Xo=0;const xi=(1+Math.sqrt(5))/2,Ki=1/xi,Qc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,xi,Ki),new N(0,xi,-Ki),new N(Ki,0,xi),new N(-Ki,0,xi),new N(xi,Ki,0),new N(-xi,Ki,0)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Wo,Xo),t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Xs,format:Tn,colorSpace:qn,depthBuffer:!1},i=el(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(r)),this._blurMaterial=dm(r,t,e)}return i}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,i){const o=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Yn,h.autoClear=!1;const m=new jn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new ie(new Re,m);let y=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,y=!0):(m.color.copy(Jc),y=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):A===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;xr(i,A*b,p>2?b:0,b,b),h.setRenderTarget(i),y&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ps||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Qc[(i-1)%Qc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ie(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);const p=[];let A=0;for(let P=0;P<Si;++P){const nt=P/y,T=Math.exp(-nt*nt/2);p.push(T),P===0?A+=T:P<g&&(A+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=x,f.mipInt.value=b-n;const R=this._sizeLods[i],B=3*R*(i>b-cs?i-b+cs:0),I=4*(this._cubeSize-R);xr(e,B,I,3*R,2*R),c.setRenderTarget(e),c.render(u,Go)}}function hm(s){const t=[],e=[],n=[];let i=s;const r=s-cs+1+Zc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-cs?c=Zc[a-s+cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,y=3,g=2,p=1,A=new Float32Array(y*x*m),b=new Float32Array(g*x*m),R=new Float32Array(p*x*m);for(let I=0;I<m;I++){const P=I%3*2/3-1,nt=I>2?0:-1,T=[P,nt,0,P+2/3,nt,0,P+2/3,nt+1,0,P,nt,0,P+2/3,nt+1,0,P,nt+1,0];A.set(T,y*x*I),b.set(f,g*x*I);const C=[I,I,I,I,I,I];R.set(C,p*x*I)}const B=new gn;B.setAttribute("position",new sn(A,y)),B.setAttribute("uv",new sn(b,g)),B.setAttribute("faceIndex",new sn(R,p)),t.push(B),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function el(s,t,e){const n=new Pi(s,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dm(s,t,e){const n=new Float32Array(Si),i=new N(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function nl(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function il(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function um(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===pa||c===ma,h=c===ps||c===ms;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new tl(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new tl(s));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pm(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const x in f)t.update(f[x],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const x in m){const y=m[x];for(let g=0,p=y.length;g<p;g++)t.update(y[g],s.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,x=u.attributes.position;let y=0;if(m!==null){const A=m.array;y=m.version;for(let b=0,R=A.length;b<R;b+=3){const B=A[b+0],I=A[b+1],P=A[b+2];f.push(B,I,I,P,P,B)}}else if(x!==void 0){const A=x.array;y=x.version;for(let b=0,R=A.length/3-1;b<R;b+=3){const B=b+0,I=b+1,P=b+2;f.push(B,I,I,P,P,B)}}else return;const g=new(hh(f)?gh:mh)(f,1);g.version=y;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function mm(s,t,e,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,x){s.drawElements(r,x,o,m*c),e.update(x,r,1)}function u(m,x,y){if(y===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,x,o,m*c,y),e.update(x,r,y)}function f(m,x,y){if(y===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<y;p++)this.render(m[p]/c,x[p]);else{g.multiDrawElementsWEBGL(r,x,0,o,m,0,y);let p=0;for(let A=0;A<y;A++)p+=x[A];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function gm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _m(s,t){return s[0]-t[0]}function vm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function xm(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new we,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==y){let X=function(){dt.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var m=X;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,B=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],nt=h.morphAttributes.color||[];let T=0;b===!0&&(T=1),R===!0&&(T=2),B===!0&&(T=3);let C=h.attributes.position.count*T,Y=1;C>t.maxTextureSize&&(Y=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const Q=new Float32Array(C*Y*4*y),dt=new fh(Q,C,Y,y);dt.type=ri,dt.needsUpdate=!0;const k=T*4;for(let K=0;K<y;K++){const Z=I[K],et=P[K],it=nt[K],st=C*Y*4*K;for(let ut=0;ut<Z.count;ut++){const pt=ut*k;b===!0&&(a.fromBufferAttribute(Z,ut),Q[st+pt+0]=a.x,Q[st+pt+1]=a.y,Q[st+pt+2]=a.z,Q[st+pt+3]=0),R===!0&&(a.fromBufferAttribute(et,ut),Q[st+pt+4]=a.x,Q[st+pt+5]=a.y,Q[st+pt+6]=a.z,Q[st+pt+7]=0),B===!0&&(a.fromBufferAttribute(it,ut),Q[st+pt+8]=a.x,Q[st+pt+9]=a.y,Q[st+pt+10]=a.z,Q[st+pt+11]=it.itemSize===4?a.w:1)}}g={count:y,texture:dt,size:new jt(C,Y)},r.set(h,g),h.addEventListener("dispose",X)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const A=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",A),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const x=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let R=0;R<x;R++)y[R]=[R,0];n[h.id]=y}for(let R=0;R<x;R++){const B=y[R];B[0]=R,B[1]=f[R]}y.sort(vm);for(let R=0;R<8;R++)R<x&&y[R][1]?(o[R][0]=y[R][0],o[R][1]=y[R][1]):(o[R][0]=Number.MAX_SAFE_INTEGER,o[R][1]=0);o.sort(_m);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let A=0;for(let R=0;R<8;R++){const B=o[R],I=B[0],P=B[1];I!==Number.MAX_SAFE_INTEGER&&P?(g&&h.getAttribute("morphTarget"+R)!==g[I]&&h.setAttribute("morphTarget"+R,g[I]),p&&h.getAttribute("morphNormal"+R)!==p[I]&&h.setAttribute("morphNormal"+R,p[I]),i[R]=P,A+=P):(g&&h.hasAttribute("morphTarget"+R)===!0&&h.deleteAttribute("morphTarget"+R),p&&h.hasAttribute("morphNormal"+R)===!0&&h.deleteAttribute("morphNormal"+R),i[R]=0)}const b=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ym(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Eh extends nn{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=si),n===void 0&&h===gs&&(n=wi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sh=new nn,bh=new Eh(1,1);bh.compareFunction=lh;const Th=new fh,wh=new iu,Ah=new xh,sl=[],rl=[],ol=new Float32Array(16),al=new Float32Array(9),cl=new Float32Array(4);function Ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sl[i];if(r===void 0&&(r=new Float32Array(i),sl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function no(s,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function Tm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;cl.set(n),s.uniformMatrix2fv(this.addr,!1,cl),ke(e,n)}}function wm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;al.set(n),s.uniformMatrix3fv(this.addr,!1,al),ke(e,n)}}function Am(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;ol.set(n),s.uniformMatrix4fv(this.addr,!1,ol),ke(e,n)}}function Cm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function Lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function Im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function Um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function Nm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?bh:Sh;e.setTexture2D(t||r,i)}function Fm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wh,i)}function Bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ah,i)}function km(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Th,i)}function zm(s){switch(s){case 5126:return Mm;case 35664:return Em;case 35665:return Sm;case 35666:return bm;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Cm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Im;case 36294:return Dm;case 36295:return Um;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Hm(s,t){s.uniform1fv(this.addr,t)}function Gm(s,t){const e=Ss(t,this.size,2);s.uniform2fv(this.addr,e)}function Vm(s,t){const e=Ss(t,this.size,3);s.uniform3fv(this.addr,e)}function Wm(s,t){const e=Ss(t,this.size,4);s.uniform4fv(this.addr,e)}function Xm(s,t){const e=Ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $m(s,t){const e=Ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ym(s,t){const e=Ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qm(s,t){s.uniform1iv(this.addr,t)}function jm(s,t){s.uniform2iv(this.addr,t)}function Km(s,t){s.uniform3iv(this.addr,t)}function Zm(s,t){s.uniform4iv(this.addr,t)}function Jm(s,t){s.uniform1uiv(this.addr,t)}function Qm(s,t){s.uniform2uiv(this.addr,t)}function t0(s,t){s.uniform3uiv(this.addr,t)}function e0(s,t){s.uniform4uiv(this.addr,t)}function n0(s,t,e){const n=this.cache,i=t.length,r=no(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Sh,r[a])}function i0(s,t,e){const n=this.cache,i=t.length,r=no(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||wh,r[a])}function s0(s,t,e){const n=this.cache,i=t.length,r=no(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ah,r[a])}function r0(s,t,e){const n=this.cache,i=t.length,r=no(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Th,r[a])}function o0(s){switch(s){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return $m;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function ll(s,t){s.seq.push(t),s.map[t.id]=t}function h0(s,t,e){const n=s.name,i=n.length;for($o.lastIndex=0;;){const r=$o.exec(n),a=$o.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ll(e,l===void 0?new a0(o,s,t):new c0(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new l0(o),ll(e,u)),e=u}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);h0(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function hl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const d0=37297;let u0=0;function f0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function p0(s){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(s);let n;switch(t===e?n="":t===$r&&e===Xr?n="LinearDisplayP3ToLinearSRGB":t===Xr&&e===$r&&(n="LinearSRGBToLinearDisplayP3"),s){case qn:case Qr:return[n,"LinearTransferOETF"];case We:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function dl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+f0(s.getShaderSource(t),a)}else return i}function m0(s,t){const e=p0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function g0(s,t){let e;switch(t){case Td:e="Linear";break;case wd:e="Reinhard";break;case Ad:e="OptimizedCineon";break;case Cd:e="ACESFilmic";break;case Pd:e="AgX";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function v0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function x0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ls(s){return s!==""}function ul(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(M0,S0)}const E0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function S0(s,t){let e=Jt[t];if(e===void 0){const n=E0.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(s){return s.replace(b0,T0)}function T0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ml(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ka:t="ENVMAP_BLENDING_MULTIPLY";break;case Sd:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function P0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function L0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=w0(e),l=A0(e),h=C0(e),u=R0(e),f=P0(e),m=e.isWebGL2?"":_0(e),x=v0(e),y=x0(r),g=i.createProgram();let p,A,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),p.length>0&&(p+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),A.length>0&&(A+=`
`)):(p=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),A=[m,ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=Ea(a),a=ul(a,e),a=fl(a,e),o=Ea(o),o=ul(o,e),o=fl(o,e),a=pl(a),o=pl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const R=b+p+a,B=b+A+o,I=hl(i,i.VERTEX_SHADER,R),P=hl(i,i.FRAGMENT_SHADER,B);i.attachShader(g,I),i.attachShader(g,P),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function nt(Q){if(s.debug.checkShaderErrors){const dt=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(I).trim(),X=i.getShaderInfoLog(P).trim();let K=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,I,P);else{const et=dl(i,I,"vertex"),it=dl(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+dt+`
`+et+`
`+it)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(k===""||X==="")&&(Z=!1);Z&&(Q.diagnostics={runnable:K,programLog:dt,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:A}})}i.deleteShader(I),i.deleteShader(P),T=new Fr(i,g),C=y0(i,g)}let T;this.getUniforms=function(){return T===void 0&&nt(this),T};let C;this.getAttributes=function(){return C===void 0&&nt(this),C};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(g,d0)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=P,this}let I0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U0(t),e.set(t,n)),n}}class U0{constructor(t){this.id=I0++,this.code=t,this.usedTimes=0}}function O0(s,t,e,n,i,r,a){const o=new Va,c=new D0,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return T===0?"uv":`uv${T}`}function g(T,C,Y,Q,dt){const k=Q.fog,X=dt.geometry,K=T.isMeshStandardMaterial?Q.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),et=Z&&Z.mapping===Jr?Z.image.height:null,it=x[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=st!==void 0?st.length:0;let pt=0;X.morphAttributes.position!==void 0&&(pt=1),X.morphAttributes.normal!==void 0&&(pt=2),X.morphAttributes.color!==void 0&&(pt=3);let q,ot,Mt,wt;if(it){const Ve=Pn[it];q=Ve.vertexShader,ot=Ve.fragmentShader}else q=T.vertexShader,ot=T.fragmentShader,c.update(T),Mt=c.getVertexShaderID(T),wt=c.getFragmentShaderID(T);const It=s.getRenderTarget(),Vt=dt.isInstancedMesh===!0,Wt=dt.isBatchedMesh===!0,Bt=!!T.map,ee=!!T.matcap,W=!!Z,he=!!T.aoMap,Ot=!!T.lightMap,Gt=!!T.bumpMap,At=!!T.normalMap,fe=!!T.displacementMap,$t=!!T.emissiveMap,w=!!T.metalnessMap,S=!!T.roughnessMap,V=T.anisotropy>0,lt=T.clearcoat>0,ct=T.iridescence>0,ht=T.sheen>0,Rt=T.transmission>0,vt=V&&!!T.anisotropyMap,St=lt&&!!T.clearcoatMap,kt=lt&&!!T.clearcoatNormalMap,Xt=lt&&!!T.clearcoatRoughnessMap,rt=ct&&!!T.iridescenceMap,de=ct&&!!T.iridescenceThicknessMap,Zt=ht&&!!T.sheenColorMap,Ht=ht&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,bt=!!T.specularColorMap,Yt=!!T.specularIntensityMap,ae=Rt&&!!T.transmissionMap,be=Rt&&!!T.thicknessMap,qt=!!T.gradientMap,ft=!!T.alphaMap,U=T.alphaTest>0,yt=!!T.alphaHash,xt=!!T.extensions,zt=!!X.attributes.uv1,Ft=!!X.attributes.uv2,me=!!X.attributes.uv3;let ge=Yn;return T.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(ge=s.toneMapping),{isWebGL2:h,shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:q,fragmentShader:ot,defines:T.defines,customVertexShaderID:Mt,customFragmentShaderID:wt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Wt,instancing:Vt,instancingColor:Vt&&dt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:qn,map:Bt,matcap:ee,envMap:W,envMapMode:W&&Z.mapping,envMapCubeUVHeight:et,aoMap:he,lightMap:Ot,bumpMap:Gt,normalMap:At,displacementMap:f&&fe,emissiveMap:$t,normalMapObjectSpace:At&&T.normalMapType===Gd,normalMapTangentSpace:At&&T.normalMapType===ch,metalnessMap:w,roughnessMap:S,anisotropy:V,anisotropyMap:vt,clearcoat:lt,clearcoatMap:St,clearcoatNormalMap:kt,clearcoatRoughnessMap:Xt,iridescence:ct,iridescenceMap:rt,iridescenceThicknessMap:de,sheen:ht,sheenColorMap:Zt,sheenRoughnessMap:Ht,specularMap:Ct,specularColorMap:bt,specularIntensityMap:Yt,transmission:Rt,transmissionMap:ae,thicknessMap:be,gradientMap:qt,opaque:T.transparent===!1&&T.blending===hs,alphaMap:ft,alphaTest:U,alphaHash:yt,combine:T.combine,mapUv:Bt&&y(T.map.channel),aoMapUv:he&&y(T.aoMap.channel),lightMapUv:Ot&&y(T.lightMap.channel),bumpMapUv:Gt&&y(T.bumpMap.channel),normalMapUv:At&&y(T.normalMap.channel),displacementMapUv:fe&&y(T.displacementMap.channel),emissiveMapUv:$t&&y(T.emissiveMap.channel),metalnessMapUv:w&&y(T.metalnessMap.channel),roughnessMapUv:S&&y(T.roughnessMap.channel),anisotropyMapUv:vt&&y(T.anisotropyMap.channel),clearcoatMapUv:St&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:kt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(T.sheenRoughnessMap.channel),specularMapUv:Ct&&y(T.specularMap.channel),specularColorMapUv:bt&&y(T.specularColorMap.channel),specularIntensityMapUv:Yt&&y(T.specularIntensityMap.channel),transmissionMapUv:ae&&y(T.transmissionMap.channel),thicknessMapUv:be&&y(T.thicknessMap.channel),alphaMapUv:ft&&y(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(At||V),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Ft,vertexUv3s:me,pointsUvs:dt.isPoints===!0&&!!X.attributes.uv&&(Bt||ft),fog:!!k,useFog:T.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:dt.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Bt&&T.map.isVideoTexture===!0&&_e.getTransfer(T.map.colorSpace)===Te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wn,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:xt&&T.extensions.derivatives===!0,extensionFragDepth:xt&&T.extensions.fragDepth===!0,extensionDrawBuffers:xt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)C.push(Y),C.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(A(C,T),b(C,T),C.push(s.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function A(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function b(T,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),T.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function R(T){const C=x[T.type];let Y;if(C){const Q=Pn[C];Y=gu.clone(Q.uniforms)}else Y=T.uniforms;return Y}function B(T,C){let Y;for(let Q=0,dt=l.length;Q<dt;Q++){const k=l[Q];if(k.cacheKey===C){Y=k,++Y.usedTimes;break}}return Y===void 0&&(Y=new L0(s,C,T,r),l.push(Y)),Y}function I(T){if(--T.usedTimes===0){const C=l.indexOf(T);l[C]=l[l.length-1],l.pop(),T.destroy()}}function P(T){c.remove(T)}function nt(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:R,acquireProgram:B,releaseProgram:I,releaseShaderCache:P,programs:l,dispose:nt}}function N0(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function F0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function gl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _l(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,x,y,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function o(u,f,m,x,y,g){const p=a(u,f,m,x,y,g);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function c(u,f,m,x,y,g){const p=a(u,f,m,x,y,g);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||F0),n.length>1&&n.sort(f||gl),i.length>1&&i.sort(f||gl)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function B0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new _l,s.set(n,[a])):i>=r.length?(a=new _l,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function k0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Nt};break;case"SpotLight":e={position:new N,direction:new N,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function z0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let H0=0;function G0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function V0(s,t){const e=new k0,n=z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);const r=new N,a=new Se,o=new Se;function c(h,u){let f=0,m=0,x=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let y=0,g=0,p=0,A=0,b=0,R=0,B=0,I=0,P=0,nt=0,T=0;h.sort(G0);const C=u===!0?Math.PI:1;for(let Q=0,dt=h.length;Q<dt;Q++){const k=h[Q],X=k.color,K=k.intensity,Z=k.distance,et=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=X.r*K*C,m+=X.g*K*C,x+=X.b*K*C;else if(k.isLightProbe){for(let it=0;it<9;it++)i.probe[it].addScaledVector(k.sh.coefficients[it],K);T++}else if(k.isDirectionalLight){const it=e.get(k);if(it.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const st=k.shadow,ut=n.get(k);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.directionalShadow[y]=ut,i.directionalShadowMap[y]=et,i.directionalShadowMatrix[y]=k.shadow.matrix,R++}i.directional[y]=it,y++}else if(k.isSpotLight){const it=e.get(k);it.position.setFromMatrixPosition(k.matrixWorld),it.color.copy(X).multiplyScalar(K*C),it.distance=Z,it.coneCos=Math.cos(k.angle),it.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),it.decay=k.decay,i.spot[p]=it;const st=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,st.updateMatrices(k),k.castShadow&&nt++),i.spotLightMatrix[p]=st.matrix,k.castShadow){const ut=n.get(k);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.spotShadow[p]=ut,i.spotShadowMap[p]=et,I++}p++}else if(k.isRectAreaLight){const it=e.get(k);it.color.copy(X).multiplyScalar(K),it.halfWidth.set(k.width*.5,0,0),it.halfHeight.set(0,k.height*.5,0),i.rectArea[A]=it,A++}else if(k.isPointLight){const it=e.get(k);if(it.color.copy(k.color).multiplyScalar(k.intensity*C),it.distance=k.distance,it.decay=k.decay,k.castShadow){const st=k.shadow,ut=n.get(k);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,ut.shadowCameraNear=st.camera.near,ut.shadowCameraFar=st.camera.far,i.pointShadow[g]=ut,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=k.shadow.matrix,B++}i.point[g]=it,g++}else if(k.isHemisphereLight){const it=e.get(k);it.skyColor.copy(k.color).multiplyScalar(K*C),it.groundColor.copy(k.groundColor).multiplyScalar(K*C),i.hemi[b]=it,b++}}A>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const Y=i.hash;(Y.directionalLength!==y||Y.pointLength!==g||Y.spotLength!==p||Y.rectAreaLength!==A||Y.hemiLength!==b||Y.numDirectionalShadows!==R||Y.numPointShadows!==B||Y.numSpotShadows!==I||Y.numSpotMaps!==P||Y.numLightProbes!==T)&&(i.directional.length=y,i.spot.length=p,i.rectArea.length=A,i.point.length=g,i.hemi.length=b,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=B,i.pointShadowMap.length=B,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=B,i.spotLightMatrix.length=I+P-nt,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=nt,i.numLightProbes=T,Y.directionalLength=y,Y.pointLength=g,Y.spotLength=p,Y.rectAreaLength=A,Y.hemiLength=b,Y.numDirectionalShadows=R,Y.numPointShadows=B,Y.numSpotShadows=I,Y.numSpotMaps=P,Y.numLightProbes=T,i.version=H0++)}function l(h,u){let f=0,m=0,x=0,y=0,g=0;const p=u.matrixWorldInverse;for(let A=0,b=h.length;A<b;A++){const R=h[A];if(R.isDirectionalLight){const B=i.directional[f];B.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(p),f++}else if(R.isSpotLight){const B=i.spot[x];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(p),B.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(p),x++}else if(R.isRectAreaLight){const B=i.rectArea[y];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(p),o.identity(),a.copy(R.matrixWorld),a.premultiply(p),o.extractRotation(a),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),B.halfWidth.applyMatrix4(o),B.halfHeight.applyMatrix4(o),y++}else if(R.isPointLight){const B=i.point[m];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){const B=i.hemi[g];B.direction.setFromMatrixPosition(R.matrixWorld),B.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function vl(s,t){const e=new V0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function W0(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new vl(s,t),e.set(r,[c])):a>=o.length?(c=new vl(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class X0 extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $0 extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function j0(s,t,e){let n=new Wa;const i=new jt,r=new jt,a=new we,o=new X0({depthPacking:Hd}),c=new $0,l={},h=e.maxTextureSize,u={[hi]:en,[en]:hi,[Wn]:Wn},f=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Y0,fragmentShader:q0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new gn;x.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ie(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let p=this.type;this.render=function(I,P,nt){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const T=s.getRenderTarget(),C=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(oi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const dt=p!==Gn&&this.type===Gn,k=p===Gn&&this.type!==Gn;for(let X=0,K=I.length;X<K;X++){const Z=I[X],et=Z.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;i.copy(et.mapSize);const it=et.getFrameExtents();if(i.multiply(it),r.copy(et.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,et.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,et.mapSize.y=r.y)),et.map===null||dt===!0||k===!0){const ut=this.type!==Gn?{minFilter:Ze,magFilter:Ze}:{};et.map!==null&&et.map.dispose(),et.map=new Pi(i.x,i.y,ut),et.map.texture.name=Z.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();const st=et.getViewportCount();for(let ut=0;ut<st;ut++){const pt=et.getViewport(ut);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Q.viewport(a),et.updateMatrices(Z,ut),n=et.getFrustum(),R(P,nt,et.camera,Z,this.type)}et.isPointLightShadow!==!0&&this.type===Gn&&A(et,nt),et.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,C,Y)};function A(I,P){const nt=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Pi(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,nt,f,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,nt,m,y,null)}function b(I,P,nt,T){let C=null;const Y=nt.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)C=Y;else if(C=nt.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=C.uuid,dt=P.uuid;let k=l[Q];k===void 0&&(k={},l[Q]=k);let X=k[dt];X===void 0&&(X=C.clone(),k[dt]=X,P.addEventListener("dispose",B)),C=X}if(C.visible=P.visible,C.wireframe=P.wireframe,T===Gn?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:u[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,nt.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=s.properties.get(C);Q.light=nt}return C}function R(I,P,nt,T,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Gn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld);const dt=t.update(I),k=I.material;if(Array.isArray(k)){const X=dt.groups;for(let K=0,Z=X.length;K<Z;K++){const et=X[K],it=k[et.materialIndex];if(it&&it.visible){const st=b(I,it,T,C);I.onBeforeShadow(s,I,P,nt,dt,st,et),s.renderBufferDirect(nt,null,dt,st,I,et),I.onAfterShadow(s,I,P,nt,dt,st,et)}}}else if(k.visible){const X=b(I,k,T,C);I.onBeforeShadow(s,I,P,nt,dt,X,null),s.renderBufferDirect(nt,null,dt,X,I,null),I.onAfterShadow(s,I,P,nt,dt,X,null)}}const Q=I.children;for(let dt=0,k=Q.length;dt<k;dt++)R(Q[dt],P,nt,T,C)}function B(I){I.target.removeEventListener("dispose",B);for(const nt in l){const T=l[nt],C=I.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function K0(s,t,e){const n=e.isWebGL2;function i(){let U=!1;const yt=new we;let xt=null;const zt=new we(0,0,0,0);return{setMask:function(Ft){xt!==Ft&&!U&&(s.colorMask(Ft,Ft,Ft,Ft),xt=Ft)},setLocked:function(Ft){U=Ft},setClear:function(Ft,me,ge,le,Ve){Ve===!0&&(Ft*=le,me*=le,ge*=le),yt.set(Ft,me,ge,le),zt.equals(yt)===!1&&(s.clearColor(Ft,me,ge,le),zt.copy(yt))},reset:function(){U=!1,xt=null,zt.set(-1,0,0,0)}}}function r(){let U=!1,yt=null,xt=null,zt=null;return{setTest:function(Ft){Ft?Wt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(Ft){yt!==Ft&&!U&&(s.depthMask(Ft),yt=Ft)},setFunc:function(Ft){if(xt!==Ft){switch(Ft){case gd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case Vr:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case Md:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Ft}},setLocked:function(Ft){U=Ft},setClear:function(Ft){zt!==Ft&&(s.clearDepth(Ft),zt=Ft)},reset:function(){U=!1,yt=null,xt=null,zt=null}}}function a(){let U=!1,yt=null,xt=null,zt=null,Ft=null,me=null,ge=null,le=null,Ve=null;return{setTest:function(se){U||(se?Wt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(se){yt!==se&&!U&&(s.stencilMask(se),yt=se)},setFunc:function(se,De,Je){(xt!==se||zt!==De||Ft!==Je)&&(s.stencilFunc(se,De,Je),xt=se,zt=De,Ft=Je)},setOp:function(se,De,Je){(me!==se||ge!==De||le!==Je)&&(s.stencilOp(se,De,Je),me=se,ge=De,le=Je)},setLocked:function(se){U=se},setClear:function(se){Ve!==se&&(s.clearStencil(se),Ve=se)},reset:function(){U=!1,yt=null,xt=null,zt=null,Ft=null,me=null,ge=null,le=null,Ve=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let f={},m={},x=new WeakMap,y=[],g=null,p=!1,A=null,b=null,R=null,B=null,I=null,P=null,nt=null,T=new Nt(0,0,0),C=0,Y=!1,Q=null,dt=null,k=null,X=null,K=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,it=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(st)[1]),et=it>=1):st.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),et=it>=2);let ut=null,pt={};const q=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),Mt=new we().fromArray(q),wt=new we().fromArray(ot);function It(U,yt,xt,zt){const Ft=new Uint8Array(4),me=s.createTexture();s.bindTexture(U,me),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<xt;ge++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(yt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(yt+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return me}const Vt={};Vt[s.TEXTURE_2D]=It(s.TEXTURE_2D,s.TEXTURE_2D,1),Vt[s.TEXTURE_CUBE_MAP]=It(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Vt[s.TEXTURE_2D_ARRAY]=It(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Vt[s.TEXTURE_3D]=It(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Wt(s.DEPTH_TEST),c.setFunc(Vr),$t(!1),w(Qa),Wt(s.CULL_FACE),At(oi);function Wt(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function Bt(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function ee(U,yt){return m[U]!==yt?(s.bindFramebuffer(U,yt),m[U]=yt,n&&(U===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=yt),U===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=yt)),!0):!1}function W(U,yt){let xt=y,zt=!1;if(U)if(xt=x.get(yt),xt===void 0&&(xt=[],x.set(yt,xt)),U.isWebGLMultipleRenderTargets){const Ft=U.texture;if(xt.length!==Ft.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let me=0,ge=Ft.length;me<ge;me++)xt[me]=s.COLOR_ATTACHMENT0+me;xt.length=Ft.length,zt=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,zt=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,zt=!0);zt&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function he(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Ot={[Ei]:s.FUNC_ADD,[ed]:s.FUNC_SUBTRACT,[nd]:s.FUNC_REVERSE_SUBTRACT};if(n)Ot[ic]=s.MIN,Ot[sc]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Ot[ic]=U.MIN_EXT,Ot[sc]=U.MAX_EXT)}const Gt={[id]:s.ZERO,[sd]:s.ONE,[rd]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[ld]:s.DST_COLOR,[ad]:s.DST_ALPHA,[od]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[hd]:s.ONE_MINUS_DST_COLOR,[cd]:s.ONE_MINUS_DST_ALPHA,[ud]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[pd]:s.CONSTANT_ALPHA,[md]:s.ONE_MINUS_CONSTANT_ALPHA};function At(U,yt,xt,zt,Ft,me,ge,le,Ve,se){if(U===oi){p===!0&&(Bt(s.BLEND),p=!1);return}if(p===!1&&(Wt(s.BLEND),p=!0),U!==td){if(U!==A||se!==Y){if((b!==Ei||I!==Ei)&&(s.blendEquation(s.FUNC_ADD),b=Ei,I=Ei),se)switch(U){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFunc(s.ONE,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,B=null,P=null,nt=null,T.set(0,0,0),C=0,A=U,Y=se}return}Ft=Ft||yt,me=me||xt,ge=ge||zt,(yt!==b||Ft!==I)&&(s.blendEquationSeparate(Ot[yt],Ot[Ft]),b=yt,I=Ft),(xt!==R||zt!==B||me!==P||ge!==nt)&&(s.blendFuncSeparate(Gt[xt],Gt[zt],Gt[me],Gt[ge]),R=xt,B=zt,P=me,nt=ge),(le.equals(T)===!1||Ve!==C)&&(s.blendColor(le.r,le.g,le.b,Ve),T.copy(le),C=Ve),A=U,Y=!1}function fe(U,yt){U.side===Wn?Bt(s.CULL_FACE):Wt(s.CULL_FACE);let xt=U.side===en;yt&&(xt=!xt),$t(xt),U.blending===hs&&U.transparent===!1?At(oi):At(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const zt=U.stencilWrite;l.setTest(zt),zt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Wt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(U){Q!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),Q=U)}function w(U){U!==Kh?(Wt(s.CULL_FACE),U!==dt&&(U===Qa?s.cullFace(s.BACK):U===Zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),dt=U}function S(U){U!==k&&(et&&s.lineWidth(U),k=U)}function V(U,yt,xt){U?(Wt(s.POLYGON_OFFSET_FILL),(X!==yt||K!==xt)&&(s.polygonOffset(yt,xt),X=yt,K=xt)):Bt(s.POLYGON_OFFSET_FILL)}function lt(U){U?Wt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function ct(U){U===void 0&&(U=s.TEXTURE0+Z-1),ut!==U&&(s.activeTexture(U),ut=U)}function ht(U,yt,xt){xt===void 0&&(ut===null?xt=s.TEXTURE0+Z-1:xt=ut);let zt=pt[xt];zt===void 0&&(zt={type:void 0,texture:void 0},pt[xt]=zt),(zt.type!==U||zt.texture!==yt)&&(ut!==xt&&(s.activeTexture(xt),ut=xt),s.bindTexture(U,yt||Vt[U]),zt.type=U,zt.texture=yt)}function Rt(){const U=pt[ut];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(U){Mt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Mt.copy(U))}function ae(U){wt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),wt.copy(U))}function be(U,yt){let xt=u.get(yt);xt===void 0&&(xt=new WeakMap,u.set(yt,xt));let zt=xt.get(U);zt===void 0&&(zt=s.getUniformBlockIndex(yt,U.name),xt.set(U,zt))}function qt(U,yt){const zt=u.get(yt).get(U);h.get(yt)!==zt&&(s.uniformBlockBinding(yt,zt,U.__bindingPointIndex),h.set(yt,zt))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ut=null,pt={},m={},x=new WeakMap,y=[],g=null,p=!1,A=null,b=null,R=null,B=null,I=null,P=null,nt=null,T=new Nt(0,0,0),C=0,Y=!1,Q=null,dt=null,k=null,X=null,K=null,Mt.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Wt,disable:Bt,bindFramebuffer:ee,drawBuffers:W,useProgram:he,setBlending:At,setMaterial:fe,setFlipSided:$t,setCullFace:w,setLineWidth:S,setPolygonOffset:V,setScissorTest:lt,activeTexture:ct,bindTexture:ht,unbindTexture:Rt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:Ct,texImage3D:bt,updateUBOMapping:be,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:Ht,texSubImage2D:kt,texSubImage3D:Xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:de,scissor:Yt,viewport:ae,reset:ft}}function Z0(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return m?new OffscreenCanvas(w,S):qr("canvas")}function y(w,S,V,lt){let ct=1;if((w.width>lt||w.height>lt)&&(ct=lt/Math.max(w.width,w.height)),ct<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ht=S?Ma:Math.floor,Rt=ht(ct*w.width),vt=ht(ct*w.height);u===void 0&&(u=x(Rt,vt));const St=V?x(Rt,vt):u;return St.width=Rt,St.height=vt,St.getContext("2d").drawImage(w,0,0,Rt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Rt+"x"+vt+")."),St}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return Uc(w.width)&&Uc(w.height)}function p(w){return o?!1:w.wrapS!==bn||w.wrapT!==bn||w.minFilter!==Ze&&w.minFilter!==fn}function A(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ze&&w.minFilter!==fn}function b(w){s.generateMipmap(w)}function R(w,S,V,lt,ct=!1){if(o===!1)return S;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht=S;if(S===s.RED&&(V===s.FLOAT&&(ht=s.R32F),V===s.HALF_FLOAT&&(ht=s.R16F),V===s.UNSIGNED_BYTE&&(ht=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ht=s.R8UI),V===s.UNSIGNED_SHORT&&(ht=s.R16UI),V===s.UNSIGNED_INT&&(ht=s.R32UI),V===s.BYTE&&(ht=s.R8I),V===s.SHORT&&(ht=s.R16I),V===s.INT&&(ht=s.R32I)),S===s.RG&&(V===s.FLOAT&&(ht=s.RG32F),V===s.HALF_FLOAT&&(ht=s.RG16F),V===s.UNSIGNED_BYTE&&(ht=s.RG8)),S===s.RGBA){const Rt=ct?Wr:_e.getTransfer(lt);V===s.FLOAT&&(ht=s.RGBA32F),V===s.HALF_FLOAT&&(ht=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ht=Rt===Te?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function B(w,S,V){return A(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==Ze&&w.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function I(w){return w===Ze||w===rc||w===_o?s.NEAREST:s.LINEAR}function P(w){const S=w.target;S.removeEventListener("dispose",P),T(S),S.isVideoTexture&&h.delete(S)}function nt(w){const S=w.target;S.removeEventListener("dispose",nt),Y(S)}function T(w){const S=n.get(w);if(S.__webglInit===void 0)return;const V=w.source,lt=f.get(V);if(lt){const ct=lt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&C(w),Object.keys(lt).length===0&&f.delete(V)}n.remove(w)}function C(w){const S=n.get(w);s.deleteTexture(S.__webglTexture);const V=w.source,lt=f.get(V);delete lt[S.__cacheKey],a.memory.textures--}function Y(w){const S=w.texture,V=n.get(w),lt=n.get(S);if(lt.__webglTexture!==void 0&&(s.deleteTexture(lt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(V.__webglFramebuffer[ct]))for(let ht=0;ht<V.__webglFramebuffer[ct].length;ht++)s.deleteFramebuffer(V.__webglFramebuffer[ct][ht]);else s.deleteFramebuffer(V.__webglFramebuffer[ct]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ct])}else{if(Array.isArray(V.__webglFramebuffer))for(let ct=0;ct<V.__webglFramebuffer.length;ct++)s.deleteFramebuffer(V.__webglFramebuffer[ct]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ct=0;ct<V.__webglColorRenderbuffer.length;ct++)V.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ct]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ct=0,ht=S.length;ct<ht;ct++){const Rt=n.get(S[ct]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(S[ct])}n.remove(S),n.remove(w)}let Q=0;function dt(){Q=0}function k(){const w=Q;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),Q+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const V=n.get(w);if(w.isVideoTexture&&fe(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const lt=w.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(V,w,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function Z(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Mt(V,w,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function et(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Mt(V,w,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function it(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){wt(V,w,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const st={[ga]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},ut={[Ze]:s.NEAREST,[rc]:s.NEAREST_MIPMAP_NEAREST,[_o]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Ld]:s.LINEAR_MIPMAP_NEAREST,[Ws]:s.LINEAR_MIPMAP_LINEAR},pt={[Vd]:s.NEVER,[jd]:s.ALWAYS,[Wd]:s.LESS,[lh]:s.LEQUAL,[Xd]:s.EQUAL,[qd]:s.GEQUAL,[$d]:s.GREATER,[Yd]:s.NOTEQUAL};function q(w,S,V){if(V?(s.texParameteri(w,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,st[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ut[S.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==bn||S.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,I(S.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Ze&&S.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ze||S.minFilter!==_o&&S.minFilter!==Ws||S.type===ri&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Xs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(w,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ot(w,S){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",P));const lt=S.source;let ct=f.get(lt);ct===void 0&&(ct={},f.set(lt,ct));const ht=X(S);if(ht!==w.__cacheKey){ct[ht]===void 0&&(ct[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ct[ht].usedTimes++;const Rt=ct[w.__cacheKey];Rt!==void 0&&(ct[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&C(S)),w.__cacheKey=ht,w.__webglTexture=ct[ht].texture}return V}function Mt(w,S,V){let lt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(lt=s.TEXTURE_3D);const ct=ot(w,S),ht=S.source;e.bindTexture(lt,w.__webglTexture,s.TEXTURE0+V);const Rt=n.get(ht);if(ht.version!==Rt.__version||ct===!0){e.activeTexture(s.TEXTURE0+V);const vt=_e.getPrimaries(_e.workingColorSpace),St=S.colorSpace===mn?null:_e.getPrimaries(S.colorSpace),kt=S.colorSpace===mn||vt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Xt=p(S)&&g(S.image)===!1;let rt=y(S.image,Xt,!1,i.maxTextureSize);rt=$t(S,rt);const de=g(rt)||o,Zt=r.convert(S.format,S.colorSpace);let Ht=r.convert(S.type),Ct=R(S.internalFormat,Zt,Ht,S.colorSpace,S.isVideoTexture);q(lt,S,de);let bt;const Yt=S.mipmaps,ae=o&&S.isVideoTexture!==!0&&Ct!==oh,be=Rt.__version===void 0||ct===!0,qt=B(S,rt,de);if(S.isDepthTexture)Ct=s.DEPTH_COMPONENT,o?S.type===ri?Ct=s.DEPTH_COMPONENT32F:S.type===si?Ct=s.DEPTH_COMPONENT24:S.type===wi?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:S.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ai&&Ct===s.DEPTH_COMPONENT&&S.type!==za&&S.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=si,Ht=r.convert(S.type)),S.format===gs&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wi,Ht=r.convert(S.type))),be&&(ae?e.texStorage2D(s.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,rt.width,rt.height,0,Zt,Ht,null));else if(S.isDataTexture)if(Yt.length>0&&de){ae&&be&&e.texStorage2D(s.TEXTURE_2D,qt,Ct,Yt[0].width,Yt[0].height);for(let ft=0,U=Yt.length;ft<U;ft++)bt=Yt[ft],ae?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Zt,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,ft,Ct,bt.width,bt.height,0,Zt,Ht,bt.data);S.generateMipmaps=!1}else ae?(be&&e.texStorage2D(s.TEXTURE_2D,qt,Ct,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Zt,Ht,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,rt.width,rt.height,0,Zt,Ht,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Ct,Yt[0].width,Yt[0].height,rt.depth);for(let ft=0,U=Yt.length;ft<U;ft++)bt=Yt[ft],S.format!==Tn?Zt!==null?ae?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,rt.depth,Zt,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Ct,bt.width,bt.height,rt.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,rt.depth,Zt,Ht,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Ct,bt.width,bt.height,rt.depth,0,Zt,Ht,bt.data)}else{ae&&be&&e.texStorage2D(s.TEXTURE_2D,qt,Ct,Yt[0].width,Yt[0].height);for(let ft=0,U=Yt.length;ft<U;ft++)bt=Yt[ft],S.format!==Tn?Zt!==null?ae?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Zt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Ct,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Zt,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,ft,Ct,bt.width,bt.height,0,Zt,Ht,bt.data)}else if(S.isDataArrayTexture)ae?(be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Ct,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Zt,Ht,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,Zt,Ht,rt.data);else if(S.isData3DTexture)ae?(be&&e.texStorage3D(s.TEXTURE_3D,qt,Ct,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Zt,Ht,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,Zt,Ht,rt.data);else if(S.isFramebufferTexture){if(be)if(ae)e.texStorage2D(s.TEXTURE_2D,qt,Ct,rt.width,rt.height);else{let ft=rt.width,U=rt.height;for(let yt=0;yt<qt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ct,ft,U,0,Zt,Ht,null),ft>>=1,U>>=1}}else if(Yt.length>0&&de){ae&&be&&e.texStorage2D(s.TEXTURE_2D,qt,Ct,Yt[0].width,Yt[0].height);for(let ft=0,U=Yt.length;ft<U;ft++)bt=Yt[ft],ae?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Zt,Ht,bt):e.texImage2D(s.TEXTURE_2D,ft,Ct,Zt,Ht,bt);S.generateMipmaps=!1}else ae?(be&&e.texStorage2D(s.TEXTURE_2D,qt,Ct,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Zt,Ht,rt)):e.texImage2D(s.TEXTURE_2D,0,Ct,Zt,Ht,rt);A(S,de)&&b(lt),Rt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function wt(w,S,V){if(S.image.length!==6)return;const lt=ot(w,S),ct=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);const ht=n.get(ct);if(ct.version!==ht.__version||lt===!0){e.activeTexture(s.TEXTURE0+V);const Rt=_e.getPrimaries(_e.workingColorSpace),vt=S.colorSpace===mn?null:_e.getPrimaries(S.colorSpace),St=S.colorSpace===mn||Rt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const kt=S.isCompressedTexture||S.image[0].isCompressedTexture,Xt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!kt&&!Xt?rt[ft]=y(S.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=Xt?S.image[ft].image:S.image[ft],rt[ft]=$t(S,rt[ft]);const de=rt[0],Zt=g(de)||o,Ht=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),bt=R(S.internalFormat,Ht,Ct,S.colorSpace),Yt=o&&S.isVideoTexture!==!0,ae=ht.__version===void 0||lt===!0;let be=B(S,de,Zt);q(s.TEXTURE_CUBE_MAP,S,Zt);let qt;if(kt){Yt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,be,bt,de.width,de.height);for(let ft=0;ft<6;ft++){qt=rt[ft].mipmaps;for(let U=0;U<qt.length;U++){const yt=qt[U];S.format!==Tn?Ht!==null?Yt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,0,0,yt.width,yt.height,Ht,Ct,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,bt,yt.width,yt.height,0,Ht,Ct,yt.data)}}}else{qt=S.mipmaps,Yt&&ae&&(qt.length>0&&be++,e.texStorage2D(s.TEXTURE_CUBE_MAP,be,bt,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(Xt){Yt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Ht,Ct,rt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,rt[ft].width,rt[ft].height,0,Ht,Ct,rt[ft].data);for(let U=0;U<qt.length;U++){const xt=qt[U].image[ft].image;Yt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,0,0,xt.width,xt.height,Ht,Ct,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,bt,xt.width,xt.height,0,Ht,Ct,xt.data)}}else{Yt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ht,Ct,rt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,Ht,Ct,rt[ft]);for(let U=0;U<qt.length;U++){const yt=qt[U];Yt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,0,0,Ht,Ct,yt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,bt,Ht,Ct,yt.image[ft])}}}A(S,Zt)&&b(s.TEXTURE_CUBE_MAP),ht.__version=ct.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function It(w,S,V,lt,ct,ht){const Rt=r.convert(V.format,V.colorSpace),vt=r.convert(V.type),St=R(V.internalFormat,Rt,vt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const Xt=Math.max(1,S.width>>ht),rt=Math.max(1,S.height>>ht);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,ht,St,Xt,rt,S.depth,0,Rt,vt,null):e.texImage2D(ct,ht,St,Xt,rt,0,Rt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),At(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,ct,n.get(V).__webglTexture,0,Gt(S)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,ct,n.get(V).__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(w,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let lt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||At(S)){const ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===ri?lt=s.DEPTH_COMPONENT32F:ct.type===si&&(lt=s.DEPTH_COMPONENT24));const ht=Gt(S);At(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,lt,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,lt,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,lt,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const lt=Gt(S);V&&At(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,S.width,S.height):At(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const lt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ct=0;ct<lt.length;ct++){const ht=lt[ct],Rt=r.convert(ht.format,ht.colorSpace),vt=r.convert(ht.type),St=R(ht.internalFormat,Rt,vt,ht.colorSpace),kt=Gt(S);V&&At(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,St,S.width,S.height):At(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,St,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,St,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Wt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const lt=n.get(S.depthTexture).__webglTexture,ct=Gt(S);if(S.depthTexture.format===Ai)At(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(S.depthTexture.format===gs)At(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Bt(w){const S=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Wt(S.__webglFramebuffer,w)}else if(V){S.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[lt]),S.__webglDepthbuffer[lt]=s.createRenderbuffer(),Vt(S.__webglDepthbuffer[lt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Vt(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(w,S,V){const lt=n.get(w);S!==void 0&&It(lt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Bt(w)}function W(w){const S=w.texture,V=n.get(w),lt=n.get(S);w.addEventListener("dispose",nt),w.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=S.version,a.memory.textures++);const ct=w.isWebGLCubeRenderTarget===!0,ht=w.isWebGLMultipleRenderTargets===!0,Rt=g(w)||o;if(ct){V.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[vt]=[];for(let St=0;St<S.mipmaps.length;St++)V.__webglFramebuffer[vt][St]=s.createFramebuffer()}else V.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)V.__webglFramebuffer[vt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ht)if(i.drawBuffers){const vt=w.texture;for(let St=0,kt=vt.length;St<kt;St++){const Xt=n.get(vt[St]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&At(w)===!1){const vt=ht?S:[S];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){const kt=vt[St];V.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[St]);const Xt=r.convert(kt.format,kt.colorSpace),rt=r.convert(kt.type),de=R(kt.internalFormat,Xt,rt,kt.colorSpace,w.isXRRenderTarget===!0),Zt=Gt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,V.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),q(s.TEXTURE_CUBE_MAP,S,Rt);for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)It(V.__webglFramebuffer[vt][St],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else It(V.__webglFramebuffer[vt],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);A(S,Rt)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){const vt=w.texture;for(let St=0,kt=vt.length;St<kt;St++){const Xt=vt[St],rt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),q(s.TEXTURE_2D,Xt,Rt),It(V.__webglFramebuffer,w,Xt,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),A(Xt,Rt)&&b(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?vt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,lt.__webglTexture),q(vt,S,Rt),o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)It(V.__webglFramebuffer[St],w,S,s.COLOR_ATTACHMENT0,vt,St);else It(V.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,vt,0);A(S,Rt)&&b(vt),e.unbindTexture()}w.depthBuffer&&Bt(w)}function he(w){const S=g(w)||o,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let lt=0,ct=V.length;lt<ct;lt++){const ht=V[lt];if(A(ht,S)){const Rt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(ht).__webglTexture;e.bindTexture(Rt,vt),b(Rt),e.unbindTexture()}}}function Ot(w){if(o&&w.samples>0&&At(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,lt=w.height;let ct=s.COLOR_BUFFER_BIT;const ht=[],Rt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),St=w.isWebGLMultipleRenderTargets===!0;if(St)for(let kt=0;kt<S.length;kt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let kt=0;kt<S.length;kt++){ht.push(s.COLOR_ATTACHMENT0+kt),w.depthBuffer&&ht.push(Rt);const Xt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Xt===!1&&(w.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),St&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[kt]),Xt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Rt])),St){const rt=n.get(S[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,V,lt,0,0,V,lt,ct,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let kt=0;kt<S.length;kt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[kt]);const Xt=n.get(S[kt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Gt(w){return Math.min(i.maxSamples,w.samples)}function At(w){const S=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function $t(w,S){const V=w.colorSpace,lt=w.format,ct=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===xa||V!==qn&&V!==mn&&(_e.getTransfer(V)===Te?o===!1?t.has("EXT_sRGB")===!0&&lt===Tn?(w.format=xa,w.minFilter=fn,w.generateMipmaps=!1):S=dh.sRGBToLinear(S):(lt!==Tn||ct!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=k,this.resetTextureUnits=dt,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=ee,this.setupRenderTarget=W,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=At}function J0(s,t,e){const n=e.isWebGL2;function i(r,a=mn){let o;const c=_e.getTransfer(a);if(r===ai)return s.UNSIGNED_BYTE;if(r===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Id)return s.BYTE;if(r===Dd)return s.SHORT;if(r===za)return s.UNSIGNED_SHORT;if(r===th)return s.INT;if(r===si)return s.UNSIGNED_INT;if(r===ri)return s.FLOAT;if(r===Xs)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ud)return s.ALPHA;if(r===Tn)return s.RGBA;if(r===Od)return s.LUMINANCE;if(r===Nd)return s.LUMINANCE_ALPHA;if(r===Ai)return s.DEPTH_COMPONENT;if(r===gs)return s.DEPTH_STENCIL;if(r===xa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fd)return s.RED;if(r===ih)return s.RED_INTEGER;if(r===Bd)return s.RG;if(r===sh)return s.RG_INTEGER;if(r===rh)return s.RGBA_INTEGER;if(r===vo||r===xo||r===yo||r===Mo)if(c===Te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oc||r===ac||r===lc||r===hc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ac)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dc||r===uc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dc)return c===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fc||r===pc||r===mc||r===gc||r===_c||r===vc||r===xc||r===yc||r===Mc||r===Ec||r===Sc||r===bc||r===Tc||r===wc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_c)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ec)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wc)return c===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===Ac||r===Cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Eo)return c===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kd||r===Rc||r===Pc||r===Lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Eo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Rc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Q0 extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class eg extends Ms{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,x=null;const y=e.getContextAttributes();let g=null,p=null;const A=[],b=[],R=new jt;let B=null;const I=new ln;I.layers.enable(1),I.viewport=new we;const P=new ln;P.layers.enable(2),P.viewport=new we;const nt=[I,P],T=new Q0;T.layers.enable(1),T.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=A[q];return ot===void 0&&(ot=new Yo,A[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=A[q];return ot===void 0&&(ot=new Yo,A[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=A[q];return ot===void 0&&(ot=new Yo,A[q]=ot),ot.getHandSpace()};function Q(q){const ot=b.indexOf(q.inputSource);if(ot===-1)return;const Mt=A[ot];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,l||a),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function dt(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",dt),i.removeEventListener("inputsourceschange",k);for(let q=0;q<A.length;q++){const ot=b[q];ot!==null&&(b[q]=null,A[q].disconnect(ot))}C=null,Y=null,t.setRenderTarget(g),m=null,f=null,u=null,i=null,p=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",dt),i.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ot={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Pi(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let ot=null,Mt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?gs:Ai,Mt=y.stencil?wi:si);const It={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(It),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Pi(f.textureWidth,f.textureHeight,{format:Tn,type:ai,depthTexture:new Eh(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Vt=t.properties.get(p);Vt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(q){for(let ot=0;ot<q.removed.length;ot++){const Mt=q.removed[ot],wt=b.indexOf(Mt);wt>=0&&(b[wt]=null,A[wt].disconnect(Mt))}for(let ot=0;ot<q.added.length;ot++){const Mt=q.added[ot];let wt=b.indexOf(Mt);if(wt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=b.length){b.push(Mt),wt=Vt;break}else if(b[Vt]===null){b[Vt]=Mt,wt=Vt;break}if(wt===-1)break}const It=A[wt];It&&It.connect(Mt)}}const X=new N,K=new N;function Z(q,ot,Mt){X.setFromMatrixPosition(ot.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const wt=X.distanceTo(K),It=ot.projectionMatrix.elements,Vt=Mt.projectionMatrix.elements,Wt=It[14]/(It[10]-1),Bt=It[14]/(It[10]+1),ee=(It[9]+1)/It[5],W=(It[9]-1)/It[5],he=(It[8]-1)/It[0],Ot=(Vt[8]+1)/Vt[0],Gt=Wt*he,At=Wt*Ot,fe=wt/(-he+Ot),$t=fe*-he;ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($t),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const w=Wt+fe,S=Bt+fe,V=Gt-$t,lt=At+(wt-$t),ct=ee*Bt/S*w,ht=W*Bt/S*w;q.projectionMatrix.makePerspective(V,lt,ct,ht,w,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function et(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;T.near=P.near=I.near=q.near,T.far=P.far=I.far=q.far,(C!==T.near||Y!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,Y=T.far);const ot=q.parent,Mt=T.cameras;et(T,ot);for(let wt=0;wt<Mt.length;wt++)et(Mt[wt],ot);Mt.length===2?Z(T,I,P):T.projectionMatrix.copy(I.projectionMatrix),it(q,T,ot)};function it(q,ot,Mt){Mt===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let st=null;function ut(q,ot){if(h=ot.getViewerPose(l||a),x=ot,h!==null){const Mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let wt=!1;Mt.length!==T.cameras.length&&(T.cameras.length=0,wt=!0);for(let It=0;It<Mt.length;It++){const Vt=Mt[It];let Wt=null;if(m!==null)Wt=m.getViewport(Vt);else{const ee=u.getViewSubImage(f,Vt);Wt=ee.viewport,It===0&&(t.setRenderTargetTextures(p,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(p))}let Bt=nt[It];Bt===void 0&&(Bt=new ln,Bt.layers.enable(It),Bt.viewport=new we,nt[It]=Bt),Bt.matrix.fromArray(Vt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Vt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),It===0&&(T.matrix.copy(Bt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),wt===!0&&T.cameras.push(Bt)}}for(let Mt=0;Mt<A.length;Mt++){const wt=b[Mt],It=A[Mt];wt!==null&&It!==void 0&&It.update(wt,ot,l||a)}st&&st(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const pt=new yh;pt.setAnimationLoop(ut),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}}function ng(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_h(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,A,b,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,R)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,A,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=t.get(p).envMap;if(A&&(g.envMap.value=A,g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const b=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*b,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,A,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const A=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ig(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,b){const R=b.program;n.uniformBlockBinding(A,R)}function l(A,b){let R=i[A.id];R===void 0&&(x(A),R=h(A),i[A.id]=R,A.addEventListener("dispose",g));const B=b.program;n.updateUBOMapping(A,B);const I=t.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function h(A){const b=u();A.__bindingPointIndex=b;const R=s.createBuffer(),B=A.__size,I=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=i[A.id],R=A.uniforms,B=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,P=R.length;I<P;I++){const nt=Array.isArray(R[I])?R[I]:[R[I]];for(let T=0,C=nt.length;T<C;T++){const Y=nt[T];if(m(Y,I,T,B)===!0){const Q=Y.__offset,dt=Array.isArray(Y.value)?Y.value:[Y.value];let k=0;for(let X=0;X<dt.length;X++){const K=dt[X],Z=y(K);typeof K=="number"||typeof K=="boolean"?(Y.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,Q+k,Y.__data)):K.isMatrix3?(Y.__data[0]=K.elements[0],Y.__data[1]=K.elements[1],Y.__data[2]=K.elements[2],Y.__data[3]=0,Y.__data[4]=K.elements[3],Y.__data[5]=K.elements[4],Y.__data[6]=K.elements[5],Y.__data[7]=0,Y.__data[8]=K.elements[6],Y.__data[9]=K.elements[7],Y.__data[10]=K.elements[8],Y.__data[11]=0):(K.toArray(Y.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,Y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(A,b,R,B){const I=A.value,P=b+"_"+R;if(B[P]===void 0)return typeof I=="number"||typeof I=="boolean"?B[P]=I:B[P]=I.clone(),!0;{const nt=B[P];if(typeof I=="number"||typeof I=="boolean"){if(nt!==I)return B[P]=I,!0}else if(nt.equals(I)===!1)return nt.copy(I),!0}return!1}function x(A){const b=A.uniforms;let R=0;const B=16;for(let P=0,nt=b.length;P<nt;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let C=0,Y=T.length;C<Y;C++){const Q=T[C],dt=Array.isArray(Q.value)?Q.value:[Q.value];for(let k=0,X=dt.length;k<X;k++){const K=dt[k],Z=y(K),et=R%B;et!==0&&B-et<Z.boundary&&(R+=B-et),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=Z.storage}}}const I=R%B;return I>0&&(R+=B-I),A.__size=R,A.__cache={},this}function y(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function g(A){const b=A.target;b.removeEventListener("dispose",g);const R=a.indexOf(b.__bindingPointIndex);a.splice(R,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const A in i)s.deleteBuffer(i[A]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ch{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const p=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const b=this;let R=!1,B=0,I=0,P=null,nt=-1,T=null;const C=new we,Y=new we;let Q=null;const dt=new Nt(0);let k=0,X=e.width,K=e.height,Z=1,et=null,it=null;const st=new we(0,0,X,K),ut=new we(0,0,X,K);let pt=!1;const q=new Wa;let ot=!1,Mt=!1,wt=null;const It=new Se,Vt=new jt,Wt=new N,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return P===null?Z:1}let W=n;function he(E,L){for(let H=0;H<E.length;H++){const O=E[H],z=e.getContext(O,L);if(z!==null)return z}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",yt,!1),W===null){const L=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&L.shift(),W=he(L,E),W===null)throw he(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ot,Gt,At,fe,$t,w,S,V,lt,ct,ht,Rt,vt,St,kt,Xt,rt,de,Zt,Ht,Ct,bt,Yt,ae;function be(){Ot=new fm(W),Gt=new am(W,Ot,t),Ot.init(Gt),bt=new J0(W,Ot,Gt),At=new K0(W,Ot,Gt),fe=new gm(W),$t=new N0,w=new Z0(W,Ot,At,$t,Gt,bt,fe),S=new lm(b),V=new um(b),lt=new Su(W,Gt),Yt=new rm(W,Ot,lt,Gt),ct=new pm(W,lt,fe,Yt),ht=new ym(W,ct,lt,fe),Zt=new xm(W,Gt,w),Xt=new cm($t),Rt=new O0(b,S,V,Ot,Gt,Yt,Xt),vt=new ng(b,$t),St=new B0,kt=new W0(Ot,Gt),de=new sm(b,S,V,At,ht,f,c),rt=new j0(b,ht,Gt),ae=new ig(W,fe,Gt,At),Ht=new om(W,Ot,fe,Gt),Ct=new mm(W,Ot,fe,Gt),fe.programs=Rt.programs,b.capabilities=Gt,b.extensions=Ot,b.properties=$t,b.renderLists=St,b.shadowMap=rt,b.state=At,b.info=fe}be();const qt=new eg(b,W);this.xr=qt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=Ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(X,K,!1))},this.getSize=function(E){return E.set(X,K)},this.setSize=function(E,L,H=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,K=L,e.width=Math.floor(E*Z),e.height=Math.floor(L*Z),H===!0&&(e.style.width=E+"px",e.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(X*Z,K*Z).floor()},this.setDrawingBufferSize=function(E,L,H){X=E,K=L,Z=H,e.width=Math.floor(E*H),e.height=Math.floor(L*H),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(st)},this.setViewport=function(E,L,H,O){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,L,H,O),At.viewport(C.copy(st).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,L,H,O){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,L,H,O),At.scissor(Y.copy(ut).multiplyScalar(Z).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){At.setScissorTest(pt=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(E=!0,L=!0,H=!0){let O=0;if(E){let z=!1;if(P!==null){const tt=P.texture.format;z=tt===rh||tt===sh||tt===ih}if(z){const tt=P.texture.type,at=tt===ai||tt===si||tt===za||tt===wi||tt===eh||tt===nh,$=de.getClearColor(),mt=de.getClearAlpha(),Ut=$.r,Et=$.g,gt=$.b;at?(m[0]=Ut,m[1]=Et,m[2]=gt,m[3]=mt,W.clearBufferuiv(W.COLOR,0,m)):(x[0]=Ut,x[1]=Et,x[2]=gt,x[3]=mt,W.clearBufferiv(W.COLOR,0,x))}else O|=W.COLOR_BUFFER_BIT}L&&(O|=W.DEPTH_BUFFER_BIT),H&&(O|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),St.dispose(),kt.dispose(),$t.dispose(),S.dispose(),V.dispose(),ht.dispose(),Yt.dispose(),ae.dispose(),Rt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ve),qt.removeEventListener("sessionend",se),wt&&(wt.dispose(),wt=null),De.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=fe.autoReset,L=rt.enabled,H=rt.autoUpdate,O=rt.needsUpdate,z=rt.type;be(),fe.autoReset=E,rt.enabled=L,rt.autoUpdate=H,rt.needsUpdate=O,rt.type=z}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xt(E){const L=E.target;L.removeEventListener("dispose",xt),zt(L)}function zt(E){Ft(E),$t.remove(E)}function Ft(E){const L=$t.get(E).programs;L!==void 0&&(L.forEach(function(H){Rt.releaseProgram(H)}),E.isShaderMaterial&&Rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,H,O,z,tt){L===null&&(L=Bt);const at=z.isMesh&&z.matrixWorld.determinant()<0,$=Lt(E,L,H,O,z);At.setMaterial(O,at);let mt=H.index,Ut=1;if(O.wireframe===!0){if(mt=ct.getWireframeAttribute(H),mt===void 0)return;Ut=2}const Et=H.drawRange,gt=H.attributes.position;let Dt=Et.start*Ut,Ce=(Et.start+Et.count)*Ut;tt!==null&&(Dt=Math.max(Dt,tt.start*Ut),Ce=Math.min(Ce,(tt.start+tt.count)*Ut)),mt!==null?(Dt=Math.max(Dt,0),Ce=Math.min(Ce,mt.count)):gt!=null&&(Dt=Math.max(Dt,0),Ce=Math.min(Ce,gt.count));const ve=Ce-Dt;if(ve<0||ve===1/0)return;Yt.setup(z,O,$,H,mt);let Pe,Kt=Ht;if(mt!==null&&(Pe=lt.get(mt),Kt=Ct,Kt.setIndex(Pe)),z.isMesh)O.wireframe===!0?(At.setLineWidth(O.wireframeLinewidth*ee()),Kt.setMode(W.LINES)):Kt.setMode(W.TRIANGLES);else if(z.isLine){let Pt=O.linewidth;Pt===void 0&&(Pt=1),At.setLineWidth(Pt*ee()),z.isLineSegments?Kt.setMode(W.LINES):z.isLineLoop?Kt.setMode(W.LINE_LOOP):Kt.setMode(W.LINE_STRIP)}else z.isPoints?Kt.setMode(W.POINTS):z.isSprite&&Kt.setMode(W.TRIANGLES);if(z.isBatchedMesh)Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Kt.renderInstances(Dt,ve,z.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Kn=Math.min(H.instanceCount,Pt);Kt.renderInstances(Dt,ve,Kn)}else Kt.render(Dt,ve)};function me(E,L,H){E.transparent===!0&&E.side===Wn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,M(E,L,H),E.side=hi,E.needsUpdate=!0,M(E,L,H),E.side=Wn):M(E,L,H)}this.compile=function(E,L,H=null){H===null&&(H=E),g=kt.get(H),g.init(),A.push(g),H.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights(b._useLegacyLights);const O=new Set;return E.traverse(function(z){const tt=z.material;if(tt)if(Array.isArray(tt))for(let at=0;at<tt.length;at++){const $=tt[at];me($,H,z),O.add($)}else me(tt,H,z),O.add(tt)}),A.pop(),g=null,O},this.compileAsync=function(E,L,H=null){const O=this.compile(E,L,H);return new Promise(z=>{function tt(){if(O.forEach(function(at){$t.get(at).currentProgram.isReady()&&O.delete(at)}),O.size===0){z(E);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ge=null;function le(E){ge&&ge(E)}function Ve(){De.stop()}function se(){De.start()}const De=new yh;De.setAnimationLoop(le),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(E){ge=E,qt.setAnimationLoop(E),E===null?De.stop():De.start()},qt.addEventListener("sessionstart",Ve),qt.addEventListener("sessionend",se),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(L),L=qt.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,L,P),g=kt.get(E,A.length),g.init(),A.push(g),It.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(It),Mt=this.localClippingEnabled,ot=Xt.init(this.clippingPlanes,Mt),y=St.get(E,p.length),y.init(),p.push(y),Je(E,L,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(et,it),this.info.render.frame++,ot===!0&&Xt.beginShadows();const H=g.state.shadowsArray;if(rt.render(H,E,L),ot===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(y,E),g.setupLights(b._useLegacyLights),L.isArrayCamera){const O=L.cameras;for(let z=0,tt=O.length;z<tt;z++){const at=O[z];Zs(y,E,at,at.viewport)}}else Zs(y,E,L);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(b,E,L),Yt.resetDefaultState(),nt=-1,T=null,A.pop(),A.length>0?g=A[A.length-1]:g=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Je(E,L,H,O){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){O&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const at=ht.update(E),$=E.material;$.visible&&y.push(E,at,$,H,Wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const at=ht.update(E),$=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Wt.copy(at.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray($)){const mt=at.groups;for(let Ut=0,Et=mt.length;Ut<Et;Ut++){const gt=mt[Ut],Dt=$[gt.materialIndex];Dt&&Dt.visible&&y.push(E,at,Dt,H,Wt.z,gt)}}else $.visible&&y.push(E,at,$,H,Wt.z,null)}}const tt=E.children;for(let at=0,$=tt.length;at<$;at++)Je(tt[at],L,H,O)}function Zs(E,L,H,O){const z=E.opaque,tt=E.transmissive,at=E.transparent;g.setupLightsView(H),ot===!0&&Xt.setGlobalState(b.clippingPlanes,H),tt.length>0&&_(z,tt,L,H),O&&At.viewport(C.copy(O)),z.length>0&&d(z,L,H),tt.length>0&&d(tt,L,H),at.length>0&&d(at,L,H),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function _(E,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const tt=Gt.isWebGL2;wt===null&&(wt=new Pi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?Xs:ai,minFilter:Ws,samples:tt?4:0})),b.getDrawingBufferSize(Vt),tt?wt.setSize(Vt.x,Vt.y):wt.setSize(Ma(Vt.x),Ma(Vt.y));const at=b.getRenderTarget();b.setRenderTarget(wt),b.getClearColor(dt),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();const $=b.toneMapping;b.toneMapping=Yn,d(E,H,O),w.updateMultisampleRenderTarget(wt),w.updateRenderTargetMipmap(wt);let mt=!1;for(let Ut=0,Et=L.length;Ut<Et;Ut++){const gt=L[Ut],Dt=gt.object,Ce=gt.geometry,ve=gt.material,Pe=gt.group;if(ve.side===Wn&&Dt.layers.test(O.layers)){const Kt=ve.side;ve.side=en,ve.needsUpdate=!0,v(Dt,H,O,Ce,ve,Pe),ve.side=Kt,ve.needsUpdate=!0,mt=!0}}mt===!0&&(w.updateMultisampleRenderTarget(wt),w.updateRenderTargetMipmap(wt)),b.setRenderTarget(at),b.setClearColor(dt,k),b.toneMapping=$}function d(E,L,H){const O=L.isScene===!0?L.overrideMaterial:null;for(let z=0,tt=E.length;z<tt;z++){const at=E[z],$=at.object,mt=at.geometry,Ut=O===null?at.material:O,Et=at.group;$.layers.test(H.layers)&&v($,L,H,mt,Ut,Et)}}function v(E,L,H,O,z,tt){E.onBeforeRender(b,L,H,O,z,tt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,L,H,O,E,tt),z.transparent===!0&&z.side===Wn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,b.renderBufferDirect(H,L,O,z,E,tt),z.side=hi,z.needsUpdate=!0,b.renderBufferDirect(H,L,O,z,E,tt),z.side=Wn):b.renderBufferDirect(H,L,O,z,E,tt),E.onAfterRender(b,L,H,O,z,tt)}function M(E,L,H){L.isScene!==!0&&(L=Bt);const O=$t.get(E),z=g.state.lights,tt=g.state.shadowsArray,at=z.state.version,$=Rt.getParameters(E,z.state,tt,L,H),mt=Rt.getProgramCacheKey($);let Ut=O.programs;O.environment=E.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||O.environment),Ut===void 0&&(E.addEventListener("dispose",xt),Ut=new Map,O.programs=Ut);let Et=Ut.get(mt);if(Et!==void 0){if(O.currentProgram===Et&&O.lightsStateVersion===at)return J(E,$),Et}else $.uniforms=Rt.getUniforms(E),E.onBuild(H,$,b),E.onBeforeCompile($,b),Et=Rt.acquireProgram($,mt),Ut.set(mt,Et),O.uniforms=$.uniforms;const gt=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(gt.clippingPlanes=Xt.uniform),J(E,$),O.needsLights=te(E),O.lightsStateVersion=at,O.needsLights&&(gt.ambientLightColor.value=z.state.ambient,gt.lightProbe.value=z.state.probe,gt.directionalLights.value=z.state.directional,gt.directionalLightShadows.value=z.state.directionalShadow,gt.spotLights.value=z.state.spot,gt.spotLightShadows.value=z.state.spotShadow,gt.rectAreaLights.value=z.state.rectArea,gt.ltc_1.value=z.state.rectAreaLTC1,gt.ltc_2.value=z.state.rectAreaLTC2,gt.pointLights.value=z.state.point,gt.pointLightShadows.value=z.state.pointShadow,gt.hemisphereLights.value=z.state.hemi,gt.directionalShadowMap.value=z.state.directionalShadowMap,gt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,gt.spotShadowMap.value=z.state.spotShadowMap,gt.spotLightMatrix.value=z.state.spotLightMatrix,gt.spotLightMap.value=z.state.spotLightMap,gt.pointShadowMap.value=z.state.pointShadowMap,gt.pointShadowMatrix.value=z.state.pointShadowMatrix),O.currentProgram=Et,O.uniformsList=null,Et}function F(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function J(E,L){const H=$t.get(E);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Lt(E,L,H,O,z){L.isScene!==!0&&(L=Bt),w.resetTextureUnits();const tt=L.fog,at=O.isMeshStandardMaterial?L.environment:null,$=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qn,mt=(O.isMeshStandardMaterial?V:S).get(O.envMap||at),Ut=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Et=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),gt=!!H.morphAttributes.position,Dt=!!H.morphAttributes.normal,Ce=!!H.morphAttributes.color;let ve=Yn;O.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=b.toneMapping);const Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Pe!==void 0?Pe.length:0,Pt=$t.get(O),Kn=g.state.lights;if(ot===!0&&(Mt===!0||E!==T)){const hn=E===T&&O.id===nt;Xt.setState(O,E,hn)}let ce=!1;O.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Kn.state.version||Pt.outputColorSpace!==$||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||Pt.envMap!==mt||O.fog===!0&&Pt.fog!==tt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Xt.numPlanes||Pt.numIntersection!==Xt.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==Et||Pt.morphTargets!==gt||Pt.morphNormals!==Dt||Pt.morphColors!==Ce||Pt.toneMapping!==ve||Gt.isWebGL2===!0&&Pt.morphTargetsCount!==Kt)&&(ce=!0):(ce=!0,Pt.__version=O.version);let _n=Pt.currentProgram;ce===!0&&(_n=M(O,L,z));let vn=!1,Cn=!1,po=!1;const Xe=_n.getUniforms(),di=Pt.uniforms;if(At.useProgram(_n.program)&&(vn=!0,Cn=!0,po=!0),O.id!==nt&&(nt=O.id,Cn=!0),vn||T!==E){Xe.setValue(W,"projectionMatrix",E.projectionMatrix),Xe.setValue(W,"viewMatrix",E.matrixWorldInverse);const hn=Xe.map.cameraPosition;hn!==void 0&&hn.setValue(W,Wt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&Xe.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Xe.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Cn=!0,po=!0)}if(z.isSkinnedMesh){Xe.setOptional(W,z,"bindMatrix"),Xe.setOptional(W,z,"bindMatrixInverse");const hn=z.skeleton;hn&&(Gt.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Xe.setValue(W,"boneTexture",hn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Xe.setOptional(W,z,"batchingTexture"),Xe.setValue(W,"batchingTexture",z._matricesTexture,w));const mo=H.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&Gt.isWebGL2===!0)&&Zt.update(z,H,_n),(Cn||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,Xe.setValue(W,"receiveShadow",z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(di.envMap.value=mt,di.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),Cn&&(Xe.setValue(W,"toneMappingExposure",b.toneMappingExposure),Pt.needsLights&&Tt(di,po),tt&&O.fog===!0&&vt.refreshFogUniforms(di,tt),vt.refreshMaterialUniforms(di,O,Z,K,wt),Fr.upload(W,F(Pt),di,w)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Fr.upload(W,F(Pt),di,w),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Xe.setValue(W,"center",z.center),Xe.setValue(W,"modelViewMatrix",z.modelViewMatrix),Xe.setValue(W,"normalMatrix",z.normalMatrix),Xe.setValue(W,"modelMatrix",z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const hn=O.uniformsGroups;for(let go=0,Yh=hn.length;go<Yh;go++)if(Gt.isWebGL2){const Ja=hn[go];ae.update(Ja,_n),ae.bind(Ja,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Tt(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function te(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,L,H){$t.get(E.texture).__webglTexture=L,$t.get(E.depthTexture).__webglTexture=H;const O=$t.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,L){const H=$t.get(E);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,H=0){P=E,B=L,I=H;let O=!0,z=null,tt=!1,at=!1;if(E){const mt=$t.get(E);mt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(W.FRAMEBUFFER,null),O=!1):mt.__webglFramebuffer===void 0?w.setupRenderTarget(E):mt.__hasExternalTextures&&w.rebindTextures(E,$t.get(E.texture).__webglTexture,$t.get(E.depthTexture).__webglTexture);const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(at=!0);const Et=$t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?z=Et[L][H]:z=Et[L],tt=!0):Gt.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?z=$t.get(E).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[H]:z=Et,C.copy(E.viewport),Y.copy(E.scissor),Q=E.scissorTest}else C.copy(st).multiplyScalar(Z).floor(),Y.copy(ut).multiplyScalar(Z).floor(),Q=pt;if(At.bindFramebuffer(W.FRAMEBUFFER,z)&&Gt.drawBuffers&&O&&At.drawBuffers(E,z),At.viewport(C),At.scissor(Y),At.setScissorTest(Q),tt){const mt=$t.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,H)}else if(at){const mt=$t.get(E.texture),Ut=L||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,mt.__webglTexture,H||0,Ut)}nt=-1},this.readRenderTargetPixels=function(E,L,H,O,z,tt,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=$t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&($=$[at]),$){At.bindFramebuffer(W.FRAMEBUFFER,$);try{const mt=E.texture,Ut=mt.format,Et=mt.type;if(Ut!==Tn&&bt.convert(Ut)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=Et===Xs&&(Ot.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(Et!==ai&&bt.convert(Et)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Et===ri&&(Gt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-O&&H>=0&&H<=E.height-z&&W.readPixels(L,H,O,z,bt.convert(Ut),bt.convert(Et),tt)}finally{const mt=P!==null?$t.get(P).__webglFramebuffer:null;At.bindFramebuffer(W.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(E,L,H=0){const O=Math.pow(2,-H),z=Math.floor(L.image.width*O),tt=Math.floor(L.image.height*O);w.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,H,0,0,E.x,E.y,z,tt),At.unbindTexture()},this.copyTextureToTexture=function(E,L,H,O=0){const z=L.image.width,tt=L.image.height,at=bt.convert(H.format),$=bt.convert(H.type);w.setTexture2D(H,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment),L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,O,E.x,E.y,z,tt,at,$,L.image.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,O,E.x,E.y,L.mipmaps[0].width,L.mipmaps[0].height,at,L.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,O,E.x,E.y,at,$,L.image),O===0&&H.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(E,L,H,O,z=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const tt=E.max.x-E.min.x+1,at=E.max.y-E.min.y+1,$=E.max.z-E.min.z+1,mt=bt.convert(O.format),Ut=bt.convert(O.type);let Et;if(O.isData3DTexture)w.setTexture3D(O,0),Et=W.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)w.setTexture2DArray(O,0),Et=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,O.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=W.getParameter(W.UNPACK_ROW_LENGTH),Dt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ce=W.getParameter(W.UNPACK_SKIP_PIXELS),ve=W.getParameter(W.UNPACK_SKIP_ROWS),Pe=W.getParameter(W.UNPACK_SKIP_IMAGES),Kt=H.isCompressedTexture?H.mipmaps[z]:H.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,E.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,E.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?W.texSubImage3D(Et,z,L.x,L.y,L.z,tt,at,$,mt,Ut,Kt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Et,z,L.x,L.y,L.z,tt,at,$,mt,Kt.data)):W.texSubImage3D(Et,z,L.x,L.y,L.z,tt,at,$,mt,Ut,Kt),W.pixelStorei(W.UNPACK_ROW_LENGTH,gt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ce),W.pixelStorei(W.UNPACK_SKIP_ROWS,ve),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Pe),z===0&&O.generateMipmaps&&W.generateMipmap(Et),At.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){B=0,I=0,P=null,At.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ha?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?Ci:ah}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?We:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sg extends Ch{}sg.prototype.isWebGL1Renderer=!0;class $a{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rg extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class og{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new N;class jr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kr extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const Rs=new N,Ji=new N,Qi=new N,ts=new jt,Ps=new jt,Rh=new Se,yr=new N,Ls=new N,Mr=new N,xl=new jt,qo=new jt,yl=new jt;class Sa extends Fe{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new og(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new jr(n,3,0,!1)),Zi.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new jt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Rh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Er(yr.set(-.5,-.5,0),Qi,a,Ji,i,r),Er(Ls.set(.5,-.5,0),Qi,a,Ji,i,r),Er(Mr.set(.5,.5,0),Qi,a,Ji,i,r),xl.set(0,0),qo.set(1,0),yl.set(1,1);let o=t.ray.intersectTriangle(yr,Ls,Mr,!1,Rs);if(o===null&&(Er(Ls.set(-.5,.5,0),Qi,a,Ji,i,r),qo.set(0,1),o=t.ray.intersectTriangle(yr,Mr,Ls,!1,Rs),o===null))return;const c=t.ray.origin.distanceTo(Rs);c<t.near||c>t.far||e.push({distance:c,point:Rs.clone(),uv:pn.getInterpolation(Rs,yr,Ls,Mr,xl,qo,yl,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(s,t,e,n,i,r){ts.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ps.x=r*ts.x-i*ts.y,Ps.y=i*ts.x+r*ts.y):Ps.copy(ts),s.copy(t),s.x+=Ps.x,s.y+=Ps.y,s.applyMatrix4(Rh)}class Ml extends sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new Se,El=new Se,Sr=[],Sl=new Di,ag=new Se,Is=new ie,Ds=new Es;class cg extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ag)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Sl.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Ds.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,es),El.multiplyMatrices(n,es),Is.matrixWorld=El,Is.raycast(t,Sr);for(let a=0,o=Sr.length;a<o;a++){const c=Sr[a];c.instanceId=r,c.object=this,e.push(c)}Sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bl=new Se,ba=new Ga,br=new Es,Tr=new N;class Ph extends Fe{constructor(t=new gn,e=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;bl.copy(i).invert(),ba.copy(t.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=f,y=m;x<y;x++){const g=l.getX(x);Tr.fromBufferAttribute(u,g),Tl(Tr,g,c,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,y=m;x<y;x++)Tr.fromBufferAttribute(u,x),Tl(Tr,x,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tl(s,t,e,n,i,r,a){const o=ba.distanceSqToPoint(s);if(o<e){const c=new N;ba.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Ta extends nn{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In extends gn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new N,f=new N,m=[],x=[],y=[],g=[];for(let p=0;p<=n;p++){const A=[],b=p/n;let R=0;p===0&&a===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let B=0;B<=e;B++){const I=B/e;u.x=-t*Math.cos(i+I*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+I*r)*Math.sin(a+b*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(I+R,1-b),A.push(l++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){const b=h[p][A+1],R=h[p][A],B=h[p+1][A],I=h[p+1][A+1];(p!==0||a>0)&&m.push(b,R,I),(p!==n-1||c<Math.PI)&&m.push(R,B,I)}this.setIndex(m),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Le extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class io extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class lg extends io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jo=new Se,wl=new N,Al=new N;class Lh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cl=new Se,Us=new N,Ko=new N;class hg extends Lh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),Ko.copy(n.position),Ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ko),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class Rl extends io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dg extends Lh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ih extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ug extends io{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $s{constructor(t,e,n=0,i=1/0){this.ray=new Ga(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return wa(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wa(t[i],this,n,e);return n.sort(Pl),n}}function Pl(s,t){return s.distance-t.distance}function wa(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)wa(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Dh=Math.sqrt(3),fg=.5*(Dh-1),Os=(3-Dh)/6,Ll=s=>Math.floor(s)|0,Il=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Zo(s=Math.random){const t=pg(s),e=new Float64Array(t).map(i=>Il[i%12*2]),n=new Float64Array(t).map(i=>Il[i%12*2+1]);return function(r,a){let o=0,c=0,l=0;const h=(r+a)*fg,u=Ll(r+h),f=Ll(a+h),m=(u+f)*Os,x=u-m,y=f-m,g=r-x,p=a-y;let A,b;g>p?(A=1,b=0):(A=0,b=1);const R=g-A+Os,B=p-b+Os,I=g-1+2*Os,P=p-1+2*Os,nt=u&255,T=f&255;let C=.5-g*g-p*p;if(C>=0){const dt=nt+t[T],k=e[dt],X=n[dt];C*=C,o=C*C*(k*g+X*p)}let Y=.5-R*R-B*B;if(Y>=0){const dt=nt+A+t[T+b],k=e[dt],X=n[dt];Y*=Y,c=Y*Y*(k*R+X*B)}let Q=.5-I*I-P*P;if(Q>=0){const dt=nt+1+t[T+1],k=e[dt],X=n[dt];Q*=Q,l=Q*Q*(k*I+X*P)}return 70*(o+c+l)}}function pg(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const so={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772}},Ti=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function zs(s){var t;return((t=so[s])==null?void 0:t.name)??"Unknown"}function Br(s){var t;return((t=so[s])==null?void 0:t.color)??16777215}const ni=16,mg=40,Ue=8,Uh=512,Oh=512;function Oe(s,t,e){return s+Uh|t<<10|e+Oh<<16}function Dl(s,t,e){return`${s},${t},${e}`}const Ee=class Ee{constructor(t){D(this,"scene");D(this,"blockData",new Map);D(this,"instancedMeshes",new Map);D(this,"instanceIndex",new Map);D(this,"instanceRevIndex",new Map);D(this,"instanceCount",new Map);D(this,"chestInventory",new Map);D(this,"visibilityTimer",0);D(this,"modifications",new Map);D(this,"noise2D",Zo());D(this,"noise2D2",Zo());D(this,"biomeNoise",Zo());D(this,"torchLights",new Map);D(this,"torchLightQueue",[]);D(this,"redstoneState",new Map);D(this,"redstoneLoights",new Map);this.scene=t,this.generateTerrain(),this.placeVillages(),this.generateDungeons()}getVillageCenters(){return[[-60,0,-60],[60,0,20],[-20,0,80]]}getBiome(t,e){const n=this.biomeNoise(t*.005,e*.005);return n<-.4?4:n<-.1?0:n<.2?2:n<.5?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.noise2D(t*.035,e*.035),r=this.noise2D(t*.09,e*.09)*.35,a=this.noise2D(t*.018,e*.018)*.65,o=(i+r+a)/2;let c=0;return n===0?c=Math.floor(Ue+o*5):n===1?c=Math.floor(Ue-2+o*4):n===2?c=Math.floor(Ue+o*8):n===3?c=Math.floor(Ue+4+o*15):n===4&&(c=Math.floor(Ue-3+o*3)),c}getCaveNoise(t,e,n){const i=this.noise2D2(t*.08+e*.04,n*.08),r=this.noise2D(t*.12,n*.12+e*.06);return(i+r)/2}getRiverNoise(t,e){return this.noise2D(t*.02,e*.02)}isRiver(t,e){const n=this.getRiverNoise(t,e);return n>-.03&&n<.03}static getSharedBoxGeo(){return Ee.sharedBoxGeo||(Ee.sharedBoxGeo=new Re(1,1,1)),Ee.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=so[t];if(!e)return this.getOrCreateInstancedMesh(1);const n=Ee.getSharedBoxGeo();let i;e.transparent?i=new Le({color:e.color,transparent:!0,opacity:t===7?.68:.55}):e.emissive?i=new Le({color:e.color,emissive:new Nt(e.emissive),emissiveIntensity:.6}):i=new Le({color:e.color});const r=new cg(n,i,Ee.MAX_INSTANCES);return r.instanceMatrix.setUsage(Kd),r.count=0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!1,this.scene.add(r),this.instancedMeshes.set(t,r),this.instanceCount.set(t,0),r}static isOpaque(t){return t>0&&!Ee.TRANSPARENT_TYPES.has(t)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let r=-3;r<=3;r++)this.generateChunkRaw(i,r,e,n);for(const[i,r,a]of n){const o=Oe(i,r,a),c=e.get(o);if(c===void 0)continue;if(!Ee.isOpaque(c)){this.placeBlock(i,r,a,c,!1);continue}!Ee.isOpaque(e.get(Oe(i+1,r,a))??0)||!Ee.isOpaque(e.get(Oe(i-1,r,a))??0)||!Ee.isOpaque(e.get(Oe(i,r+1,a))??0)||!Ee.isOpaque(e.get(Oe(i,r-1,a))??0)||!Ee.isOpaque(e.get(Oe(i,r,a+1))??0)||!Ee.isOpaque(e.get(Oe(i,r,a-1))??0)?this.placeBlock(i,r,a,c,!1):this.blockData.set(o,c)}for(let i=-3;i<=3;i++)for(let r=-3;r<=3;r++)this.generateChunkDecorations(i,r,e)}generateChunkRaw(t,e,n,i){for(let r=0;r<ni;r++)for(let a=0;a<ni;a++){const o=t*ni+r,c=e*ni+a,l=this.getHeight(o,c),h=this.getBiome(o,c),u=this.isRiver(o,c),f=(m,x)=>{n.set(Oe(o,m,c),x),i.push([o,m,c])};for(let m=0;m<=l;m++){if(m>0&&m<l-1&&this.getCaveNoise(o,m,c)>.55)continue;let x;if(u&&m===10&&l<Ue+2?x=7:h===1?m===l||m>=l-2?x=4:m<=3?x=18:x=49:h===3?m===l?x=l>28?20:1:m>=l-2?x=2:m<=3?x=18:x=3:h===4?m<=3?x=18:x=3:m===l?x=1:m>=l-3?x=2:m<=3?x=18:x=3,x===3){const y=Math.random();y<.001&&m<8?x=61:y<.006&&m<12?x=13:y<.02&&m<20?x=14:y<.03?x=15:y<.008&&m<=5&&Math.random()<.3&&(x=19)}x===3&&m>=3&&Math.random()<.008&&(x=12),f(m,x)}if(l<Ue)for(let m=l+1;m<=Ue;m++)f(m,7);if(l>5&&Math.random()<.003)for(let m=Math.max(0,l-8);m<=l-5;m++)Math.random()<.6&&f(m,47)}}generateChunkDecorations(t,e,n){for(let i=0;i<ni;i++)for(let r=0;r<ni;r++){const a=t*ni+i,o=e*ni+r,c=this.getHeight(a,o),l=this.getBiome(a,o);l===0?(c>Ue&&c<Ue+9&&Math.random()<.04&&this.placeBlock(a,c+1,o,51,!1),c>Ue&&c<Ue+9&&Math.random()<.015&&this.placeTree(a,c+1,o)):l===1?c>Ue&&Math.random()<.06&&(Math.random()<.5?this.placeBlock(a,c+1,o,50,!1):this.placeBlock(a,c+1,o,52,!1)):l===2?(c>Ue&&c<Ue+9&&Math.random()<.08&&this.placeTree(a,c+1,o),c>Ue&&c<Ue+9&&Math.random()<.05&&this.placeBlock(a,c+1,o,51,!1)):l===3&&c>Ue+5&&Math.random()<.03&&this.placeRocks(a,c+1,o)}}generateChunk(t,e){}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const r=e+i;for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)for(let c=-1;c<=1;c++)Math.abs(a)===2&&Math.abs(o)===2||this.placeBlock(t+a,r+c,n+o,6,!1);this.placeBlock(t,r+2,n,6,!1)}placeRocks(t,e,n){const i=2+Math.floor(Math.random()*4);for(let r=0;r<i;r++){const a=Math.floor((Math.random()-.5)*4),o=Math.floor((Math.random()-.5)*4),c=r===0?0:Math.floor(Math.random()*2);this.placeBlock(t+a,e+c,n+o,3,!1)}}placeBlock(t,e,n,i,r=!0){const a=Oe(t,e,n);if(!r&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const o=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;c>=Ee.MAX_INSTANCES||(Ee._mat4.setPosition(t,e,n),o.setMatrixAt(c,Ee._mat4),o.count=c+1,o.instanceMatrix.needsUpdate=!0,this.instanceIndex.set(a,c),this.instanceRevIndex.set(i<<17|c,a),this.instanceCount.set(i,c+1),r&&this.modifications.set(Dl(t,e,n),i))}removeBlock(t,e,n){const i=Oe(t,e,n);return this.blockData.has(i)?(this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(Dl(t,e,n),0),!0):!1}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,Ee._mat4),n.setMatrixAt(i,Ee._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(e<<17|a);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(e<<17|i,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(e<<17|a),i!==a&&this.instanceRevIndex.delete(e<<17|i);const o=a;n.count=o,this.instanceCount.set(e,o),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Oe(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Oe(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Oe(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,r){for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)for(let c=-r;c<=r;c++)if(this.blockData.get(Oe(t+a,e+o,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),r=Math.floor(t.y),a=Math.floor(t.z);const o=e.x,c=e.y,l=e.z,h=o>0?1:o<0?-1:0,u=c>0?1:c<0?-1:0,f=l>0?1:l<0?-1:0,m=h!==0?Math.abs(1/o):1/0,x=u!==0?Math.abs(1/c):1/0,y=f!==0?Math.abs(1/l):1/0;let g=h>0?(i+1-t.x)*m:h<0?(t.x-i)*m:1/0,p=u>0?(r+1-t.y)*x:u<0?(t.y-r)*x:1/0,A=f>0?(a+1-t.z)*y:f<0?(t.z-a)*y:1/0,b=0,R=0,B=0;const I=Math.ceil(n*3)+2;for(let P=0;P<I;P++){if(this.blockData.has(Oe(i,r,a)))return{x:i,y:r,z:a,face:Ee._rayFace.set(b,R,B)};if(g<p)if(g<A){if(g>n)return null;i+=h,b=-h,R=0,B=0,g+=m}else{if(A>n)return null;a+=f,b=0,R=0,B=-f,A+=y}else if(p<A){if(p>n)return null;r+=u,b=0,R=-u,B=0,p+=x}else{if(A>n)return null;a+=f,b=0,R=0,B=-f,A+=y}}return null}getSurfaceHeight(t,e){for(let n=mg+5;n>=0;n--){const i=this.blockData.get(Oe(t,n,e));if(i!==void 0&&i!==7&&i!==9&&i!==21)return n}return Ue}getSpawnHeight(t,e,n=2){let i=0;for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){const o=this.getSurfaceHeight(t+r,e+a);o>i&&(i=o)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestInventory.has(i)||this.chestInventory.set(i,new Array(27).fill(0)),this.chestInventory.get(i)}setChestInventory(t,e,n,i){const r=`${t},${e},${n}`;this.chestInventory.set(r,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[r,a]of i){const o=t+r,c=e+a,l=this.getSurfaceHeight(o,c);this.placeHouse(o,l,c,8,5,6)}}placeHouse(t,e,n,i,r,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let u=0;u<r;u++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+u,n+h,10,!1);const o=t+Math.floor(i/2);this.removeBlock(o,e+2,n),this.removeBlock(o,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+r,n+h,10,!1);this.placeBlock(o+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let r=0;r<3;r++)(i!==1||r!==1)&&this.placeBlock(t+i-1,e+1,n+r-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,r=5;for(let o=-4;o<=4;o++)for(let c=0;c<r;c++)for(let l=-4;l<=4;l++){const h=t+o,u=i+c,f=e+l,m=Math.abs(o)===4||Math.abs(l)===4,x=c===0,y=c===r-1;m||x||y?this.placeBlock(h,u,f,17,!0):this.removeBlock(h,u,f)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[o,c]of a){const l=i+1;this.placeBlock(o,l,c,31,!0);const h=Array.from({length:27},()=>Math.floor(Math.random()*31));this.setChestInventory(o,l,c,h)}for(let o=0;o<10;o++){const c=t-o,l=i+5+o,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),o>0&&this.removeBlock(c,l-1,h)}}saveToStorage(){const t={};for(const[n,i]of this.modifications.entries())t[n]=i;const e=JSON.stringify({version:1,mods:t});try{localStorage.setItem("mc_world_save",e)}catch(n){console.warn("Save failed:",n)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return;const e=JSON.parse(t);if(e.version!==1)return;for(const[n,i]of Object.entries(e.mods)){const[r,a,o]=n.split(",").map(Number);i===0?this.removeBlock(r,a,o):this.placeBlock(r,a,o,i,!0)}}catch(t){console.warn("Load failed:",t)}}addTorchLight(t,e,n){const r=`${t},${e},${n}`;if(this.torchLights.has(r))return;const a=new Rl(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(r,a),this.torchLightQueue.push(r);this.torchLightQueue.length>50;){const o=this.torchLightQueue.shift();if(o){const c=this.torchLights.get(o);c&&(this.scene.remove(c),this.torchLights.delete(o))}}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,r=this.torchLights.get(i);if(r){this.scene.remove(r),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Oe(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let o=-4;o<=4;o++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(i(t+o,e+c,n+l))===59&&this.activateLamp(t+o,e+c,n+l);else for(let o=-4;o<=4;o++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(i(t+o,e+c,n+l))===59&&this.deactivateLamp(t+o,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Oe(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const o=new Rl(16737792,1.2,6);o.position.set(t,e,n),this.scene.add(o),this.redstoneLoights.set(i,o)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Oe(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const o=this.redstoneLoights.get(i);o&&(this.scene.remove(o),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t,e]of this.blockData.entries())if(e===56){const n=(t&1023)-Uh,i=t>>10&63,r=(t>>16&1023)-Oh;this.addTorchLight(n,i+.5,r)}}};D(Ee,"MAX_INSTANCES",6e4),D(Ee,"_mat4",new Se),D(Ee,"_rayFace",new N),D(Ee,"sharedBoxGeo",null),D(Ee,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58]));let Aa=Ee;const Jo=4.5,gg=1.6,wr=9,Ul=8.5,Ol=-28,Ar=1.8,Cr=.55,an=1.62,_g=5;class vg{constructor(t,e,n){D(this,"camera");D(this,"world");D(this,"scene");D(this,"position",new N(0,30,0));D(this,"velocity",new N);D(this,"onGround",!1);D(this,"gameMode","survival");D(this,"_forward",new N);D(this,"_right",new N);D(this,"_move",new N);D(this,"_rayDir",new N);D(this,"_highlightVec",new N);D(this,"_lastHit",null);D(this,"_lastHitFrame",-1);D(this,"_frameCount",0);D(this,"health",20);D(this,"maxHealth",20);D(this,"invincible",0);D(this,"armor",0);D(this,"fallStartY",0);D(this,"wasOnGround",!1);D(this,"fallTracking",!1);D(this,"keys",{});D(this,"yaw",0);D(this,"pitch",0);D(this,"locked",!1);D(this,"chatOpen",!1);D(this,"flying",!1);D(this,"lastSpace",0);D(this,"inWater",!1);D(this,"waterTimer",0);D(this,"selectedBlockType",1);D(this,"raycaster",new $s);D(this,"highlightMesh");D(this,"breakProgress",0);D(this,"breakTarget",null);D(this,"breakIndicator",null);D(this,"selfModel",null);D(this,"selfHead",null);D(this,"selfLA",null);D(this,"selfRA",null);D(this,"selfLL",null);D(this,"selfRL",null);D(this,"walkCycle",0);D(this,"prevXZ",new jt);D(this,"thirdPerson",!1);D(this,"onPlaceBlock");D(this,"onBreakBlock");D(this,"onOpenChat");D(this,"onDied");D(this,"onHealthChanged");D(this,"onRightClick");D(this,"setDeathCause");D(this,"_hitPoint",new N);D(this,"_hitNormal",new N);D(this,"_hitResult",{point:null,face:{normal:null}});this.camera=t,this.world=e,this.scene=n;const i=new Re(1.02,1.02,1.02),r=new jn({color:0,wireframe:!0,transparent:!0,opacity:.45});this.highlightMesh=new ie(i,r),this.highlightMesh.visible=!1,n.add(this.highlightMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.setupInput()}getYaw(){return this.yaw}getKeys(){return this.keys}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildModel(t){const e=new pe,n=16764057,i=3364300,r=2245785,a=3351057,o=3346688,c=I=>new Le({color:I}),l=(I,P,nt,T)=>new ie(new Re(I,P,nt),c(T)),h=(I,P,nt,T)=>{const C=new pe,Y=l(I,P,nt,T);return Y.position.y=-P/2,C.add(Y),C},u=new pe;u.add(l(.5,.5,.5,n));const f=l(.52,.14,.52,o);f.position.y=.19,u.add(f),u.position.set(0,.75,0);const m=l(.6,.75,.35,i);m.position.y=0;const x=h(.25,.65,.25,i),y=h(.25,.65,.25,i),g=l(.24,.25,.24,n);g.position.y=-.575,x.children[0].add(g);const p=g.clone();y.children[0].add(p),x.position.set(-.43,.37,0),y.position.set(.43,.37,0);const A=h(.27,.75,.27,r),b=h(.27,.75,.27,r),R=l(.28,.2,.3,a);R.position.y=-.77,A.children[0].add(R);const B=R.clone();return b.children[0].add(B),A.position.set(-.175,-.375,0),b.position.set(.175,-.375,0),e.add(u,m,x,y,A,b),t.add(e),this.selfHead=u,this.selfLA=x,this.selfRA=y,this.selfLL=A,this.selfRL=b,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():this.startBreaking()),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&this.stopBreaking()}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0)return;const e=t*(1-this.armor/20);this.health=Math.max(0,this.health-e),this.invincible=1,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var a;const t=this.raycast();if(!t)return;const e=t.point.clone().sub(t.face.normal.clone().multiplyScalar(.1)),n=Math.round(e.x),i=Math.round(e.y),r=Math.round(e.z);this.world.removeBlock(n,i,r),(a=this.onBreakBlock)==null||a.call(this,n,i,r)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.point.clone().sub(t.face.normal.clone().multiplyScalar(.1)),n=Math.round(e.x),i=Math.round(e.y),r=Math.round(e.z);if(this.breakTarget={x:n,y:i,z:r},this.breakProgress=0,!this.breakIndicator){const a=new Re(1.02,1.02,1.02),o=new jn({color:0,wireframe:!0,transparent:!0,opacity:.6});this.breakIndicator=new ie(a,o),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(n,i,r),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var e;if(!(!this.breakTarget||this.gameMode==="creative")){if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}if(this.breakProgress+=t/.5,this.breakProgress>=1&&(this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(e=this.onBreakBlock)==null||e.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.stopBreaking()),this.breakIndicator){const n=.3+this.breakProgress*.4;this.breakIndicator.material.opacity=n}}}placeBlock(){var o,c;(o=this.onRightClick)==null||o.call(this);const t=this.raycast();if(!t)return;const e=t.point.clone().add(t.face.normal.clone().multiplyScalar(.5)),n=Math.round(e.x),i=Math.round(e.y),r=Math.round(e.z),a=this.position.y-an;Math.abs(n-this.position.x)<Cr+.3&&i>=a-.2&&i<=a+Ar+.2&&Math.abs(r-this.position.z)<Cr+.3||(this.world.placeBlock(n,i,r,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,r,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,_g);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t)}applyPhysics(t){var c,l;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-an+Ar/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(c=this.setDeathCause)==null||c.call(this,"You drowned"),this.takeDamage(1)))):this.waterTimer=0;const r=this.inWater?-4:Ol;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const a=this.position.y+this.velocity.y*t;let o=!1;if(this.velocity.y<=0){const h=a-an,u=Math.floor(h);for(let f=0;f<=2;f++){const m=u-f;if(this.footprintOverBlock(this.position.x,this.position.z,m)){const x=m+1+an;if(a<=x+.02){if(this.fallTracking){const y=this.fallStartY-(m+1);y>5&&((l=this.setDeathCause)==null||l.call(this,"You fell"),this.takeDamage(Math.floor((y-5)*.75))),this.fallTracking=!1}this.position.y=x,this.velocity.y=0,o=!0}break}}o||(this.position.y=a)}else{const h=Math.floor(this.position.y-an+Ar+.05);this.footprintOverBlock(this.position.x,this.position.z,h)?this.velocity.y=0:this.position.y=a}if(!o&&this.wasOnGround&&(this.fallStartY=this.position.y-an,this.fallTracking=this.velocity.y<0),o&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const h=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=h+an+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=o,this.wasOnGround=o}footprintOverBlock(t,e,n){const i=Cr/2-.01;for(let r=0;r<3;r++){const a=Math.floor(t+(r-1)*i);for(let o=0;o<3;o++){const c=Math.floor(e+(o-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=Cr/2-.01,r=Math.floor(e-an+.05),a=Math.floor(e-an+Ar-.05);for(let o=r;o<=a;o++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const u=Math.floor(n+(h===0?-i:i)),f=this.world.getBlockType(l,o,u);if(f!==void 0&&f!==0&&f!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=wr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=wr*t);else{this.velocity.y+=Ol*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-an);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+an,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=Ul,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);let a=this.keys.ControlLeft&&this.gameMode==="survival"?Jo*gg:Jo;if(this.gameMode==="creative"&&(a=this.flying?wr:Jo*1.2),this.gameMode==="spectator"&&(a=wr*1.5),this.inWater&&(a*=.6),i.lengthSq()>0){i.normalize().multiplyScalar(a*t);const o=this.position.x+i.x,c=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=o,this.position.z=c):(this.wallCollision(o,this.position.y,this.position.z)||(this.position.x=o),this.wallCollision(this.position.x,this.position.y,c)||(this.position.z=c))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=Ul,this.onGround=!1)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5;this.camera.position.set(e,this.position.y+.6,n),this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-an;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,r=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),r>.3?this.walkCycle+=t*Math.min(r,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),o=.65;this.selfLL&&(this.selfLL.rotation.x=a*o),this.selfRL&&(this.selfRL.rotation.x=-a*o),this.selfLA&&(this.selfLA.rotation.x=-a*o),this.selfRA&&(this.selfRA.rotation.x=a*o)}updateHighlight(){const t=this.raycast();t?(this._highlightVec.copy(t.point).addScaledVector(t.face.normal,-.1),this.highlightMesh.position.set(Math.round(this._highlightVec.x),Math.round(this._highlightVec.y),Math.round(this._highlightVec.z)),this.highlightMesh.visible=!0):this.highlightMesh.visible=!1}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+an+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1}}function Nh(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class xg{constructor(t,e,n){D(this,"keys");D(this,"onBreak");D(this,"onPlace");D(this,"joyActive",!1);D(this,"joyId",-1);D(this,"joyOriginX",0);D(this,"joyOriginY",0);D(this,"joyEl");D(this,"joyThumbEl");D(this,"lookId",-1);D(this,"lookLastX",0);D(this,"lookLastY",0);D(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
      position:fixed; bottom:120px; left:40px;
      width:110px; height:110px;
      background:rgba(255,255,255,0.12);
      border:2px solid rgba(255,255,255,0.3);
      border-radius:50%; z-index:500;
      touch-action:none; pointer-events:all;
    `;const e=t.querySelector(".joy-thumb");return e.style.cssText=`
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:44px; height:44px;
      background:rgba(255,255,255,0.4);
      border-radius:50%;
      transition:transform 0.05s;
    `,document.getElementById("hud").appendChild(t),t}createButtons(){const t=document.getElementById("hud"),e=document.createElement("button");e.id="mobileJump",e.textContent="⬆",e.style.cssText=`
      position:fixed; bottom:120px; right:40px;
      width:64px; height:64px;
      background:rgba(255,255,255,0.18); border:2px solid rgba(255,255,255,0.35);
      border-radius:50%; color:#fff; font-size:1.4rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,e.addEventListener("touchstart",r=>{r.preventDefault(),this.keys.Space=!0},{passive:!1}),e.addEventListener("touchend",r=>{r.preventDefault(),this.keys.Space=!1},{passive:!1}),t.appendChild(e);const n=document.createElement("button");n.id="mobileBreak",n.textContent="⛏",n.style.cssText=`
      position:fixed; bottom:200px; right:120px;
      width:56px; height:56px;
      background:rgba(220,80,80,0.35); border:2px solid rgba(255,100,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,n.addEventListener("touchstart",r=>{r.preventDefault(),this.onBreak()},{passive:!1}),t.appendChild(n);const i=document.createElement("button");i.id="mobilePlace",i.textContent="🧱",i.style.cssText=`
      position:fixed; bottom:200px; right:40px;
      width:56px; height:56px;
      background:rgba(80,180,80,0.35); border:2px solid rgba(100,220,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,i.addEventListener("touchstart",r=>{r.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const r of Array.from(i.changedTouches))r.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=r.identifier,this.joyOriginX=r.clientX,this.joyOriginY=r.clientY):this.lookId===-1&&(this.lookId=r.identifier,this.lookLastX=r.clientX,this.lookLastY=r.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var r;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const o=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(r=this.onLookDelta)==null||r.call(this,o,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const r of Array.from(i.changedTouches))r.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):r.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,r=e-this.joyOriginY,a=Math.sqrt(i*i+r*r),o=a>0?i/a:0,c=a>0?r/a:0,l=Math.min(a,42),h=o*l,u=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${u}px))`;const f=12;this.keys.KeyW=u<-f,this.keys.KeyS=u>f,this.keys.KeyA=h<-f,this.keys.KeyD=h>f}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yg(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),e}var Fh={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var vs={},ro={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=t})(ro);var qs={},xs={};Object.defineProperty(xs,"__esModule",{value:!0});xs.decode=xs.encode=void 0;function bs(s,t){if(this._offset=t,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function Mg(s,t,e){for(var n="",i=0,r=t,a=t+e;r<a;r++){var o=s.getUint8(r);if(!(o&128)){n+=String.fromCharCode(o);continue}if((o&224)===192){n+=String.fromCharCode((o&31)<<6|s.getUint8(++r)&63);continue}if((o&240)===224){n+=String.fromCharCode((o&15)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0);continue}if((o&248)===240){i=(o&7)<<18|(s.getUint8(++r)&63)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+o.toString(16))}return n}bs.prototype._array=function(s){for(var t=new Array(s),e=0;e<s;e++)t[e]=this._parse();return t};bs.prototype._map=function(s){for(var t="",e={},n=0;n<s;n++)t=this._parse(),e[t]=this._parse();return e};bs.prototype._str=function(s){var t=Mg(this._view,this._offset,s);return this._offset+=s,t};bs.prototype._bin=function(s){var t=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,t};bs.prototype._parse=function(){var s=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,r=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+r)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+r);if(n===-1){i=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var o=(i&3)*4294967296+r;return new Date(o*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Eg(s,t=0){var e=new bs(s,t),n=e._parse();if(e._offset!==s.byteLength)throw new Error(s.byteLength-e._offset+" trailing bytes");return n}xs.decode=Eg;var Sg=4294967296-1,bg=17179869184-1;function Tg(s,t,e){for(var n=0,i=0,r=e.length;i<r;i++)n=e.charCodeAt(i),n<128?s.setUint8(t++,n):n<2048?(s.setUint8(t++,192|n>>6),s.setUint8(t++,128|n&63)):n<55296||n>=57344?(s.setUint8(t++,224|n>>12),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),s.setUint8(t++,240|n>>18),s.setUint8(t++,128|n>>12&63),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63))}function wg(s){for(var t=0,e=0,n=0,i=s.length;n<i;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function rs(s,t,e){var n=typeof e,i=0,r=0,a=0,o=0,c=0,l=0;if(n==="string"){if(c=wg(e),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(s.push(203),t.push({_float:e,_length:8,_offset:s.length}),9):e>=0?e<128?(s.push(e),1):e<256?(s.push(204,e),2):e<65536?(s.push(205,e>>8,e),3):e<4294967296?(s.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,o=e>>>0,s.push(207,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9):e>=-32?(s.push(e),1):e>=-128?(s.push(208,e),2):e>=-32768?(s.push(209,e>>8,e),3):e>=-2147483648?(s.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),o=e>>>0,s.push(211,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9);if(n==="object"){if(e===null)return s.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=rs(s,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),u=Math.floor(h/1e3),f=(h-u*1e3)*1e6;return u>=0&&f>=0&&u<=bg?f===0&&u<=Sg?(s.push(214,255,u>>24,u>>16,u>>8,u),6):(a=u/4294967296,o=u&4294967295,s.push(215,255,f>>22,f>>14,f>>6,a,o>>24,o>>16,o>>8,o),10):(a=Math.floor(u/4294967296),o=u>>>0,s.push(199,12,255,f>>24,f>>16,f>>8,f,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:s.length}),l+c}if(typeof e.toJSON=="function")return rs(s,t,e.toJSON());var m=[],x="",y=Object.keys(e);for(i=0,r=y.length;i<r;i++)x=y[i],e[x]!==void 0&&typeof e[x]!="function"&&m.push(x);if(c=m.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)x=m[i],l+=rs(s,t,x),l+=rs(s,t,e[x]);return l}if(n==="boolean")return s.push(e?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof e.toJSON=="function")return rs(s,t,e.toJSON());throw new Error("Could not encode")}function Ag(s){var t=[],e=[],n=rs(t,e,s),i=new ArrayBuffer(n),r=new DataView(i),a=0,o=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,u=0,f=0,m=t.length;f<m;f++)if(r.setUint8(o+f,t[f]),f+1===c){if(l=e[a],h=l._length,u=o+c,l._bin)for(var x=new Uint8Array(l._bin),y=0;y<h;y++)r.setUint8(u+y,x[y]);else l._str?Tg(r,u,l._str):l._float!==void 0&&r.setFloat64(u,l._float);a++,o+=h,e[a]&&(c=e[a]._offset)}return i}xs.encode=Ag;var oo={},ao={},Cg=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Rg=Ae&&Ae.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ao,"__esModule",{value:!0});ao.WebSocketTransport=void 0;const Pg=Rg(Cg),Qo=globalThis.WebSocket||Pg.default;class Lg{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Qo(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Qo(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Qo.OPEN}}ao.WebSocketTransport=Lg;Object.defineProperty(oo,"__esModule",{value:!0});oo.Connection=void 0;const Ig=ao;class Dg{constructor(){this.events={},this.transport=new Ig.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}oo.Connection=Dg;var qa={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function t(n,i){const r=n[i++];for(var a="",o=0,c=i,l=i+r;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){o=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,o>=65536?(o-=65536,a+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):a+=String.fromCharCode(o);continue}throw new Error("Invalid byte "+h.toString(16))}return a}s.utf8Read=t;function e(n=""){let i=0,r=0;for(let a=0,o=n.length;a<o;a++)i=n.charCodeAt(a),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(a++,r+=4);return r+1}s.utf8Length=e})(qa);var Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.getSerializer=Ii.registerSerializer=void 0;const Bh={};function Ug(s,t){Bh[s]=t}Ii.registerSerializer=Ug;function Og(s){const t=Bh[s];if(!t)throw new Error("missing serializer: "+s);return t}Ii.getSerializer=Og;var js={};Object.defineProperty(js,"__esModule",{value:!0});js.createNanoEvents=void 0;const Ng=()=>({emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(s,t){var e;return!((e=this.events[s])===null||e===void 0)&&e.push(t)||(this.events[s]=[t]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});js.createNanoEvents=Ng;var ys={};Object.defineProperty(ys,"__esModule",{value:!0});ys.createSignal=ys.EventEmitter=void 0;class kh{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}ys.EventEmitter=kh;function Fg(){const s=new kh;function t(e){return s.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),s.remove(n)};s.register(n)},t.remove=e=>s.remove(e),t.invoke=(...e)=>s.invoke(...e),t.invokeAsync=(...e)=>s.invokeAsync(...e),t.clear=()=>s.clear(),t}ys.createSignal=Fg;var Ca={exports:{}};(function(s,t){(function(e,n){n(t)})(Ae,function(e){var n=function(_,d){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,M){v.__proto__=M}||function(v,M){for(var F in M)Object.prototype.hasOwnProperty.call(M,F)&&(v[F]=M[F])},n(_,d)};function i(_,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");n(_,d);function v(){this.constructor=_}_.prototype=d===null?Object.create(d):(v.prototype=d.prototype,new v)}function r(_,d,v,M){var F=arguments.length,J=F<3?d:M,Lt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")J=Reflect.decorate(_,d,v,M);else for(var Tt=_.length-1;Tt>=0;Tt--)(Lt=_[Tt])&&(J=(F<3?Lt(J):F>3?Lt(d,v,J):Lt(d,v))||J);return F>3&&J&&Object.defineProperty(d,v,J),J}function a(_,d,v){if(arguments.length===2)for(var M=0,F=d.length,J;M<F;M++)(J||!(M in d))&&(J||(J=Array.prototype.slice.call(d,0,M)),J[M]=d[M]);return _.concat(J||Array.prototype.slice.call(d))}typeof SuppressedError=="function"&&SuppressedError;var o=255,c=213;e.OPERATION=void 0,function(_){_[_.ADD=128]="ADD",_[_.REPLACE=0]="REPLACE",_[_.DELETE=64]="DELETE",_[_.DELETE_AND_ADD=192]="DELETE_AND_ADD",_[_.TOUCH=1]="TOUCH",_[_.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function _(d,v,M){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=d,this.setParent(v,M)}return _.prototype.setParent=function(d,v,M){var F=this;if(this.indexes||(this.indexes=this.ref instanceof le?this.ref._definition.indexes:{}),this.parent=d,this.parentIndex=M,!!v)if(this.root=v,this.ref instanceof le){var J=this.ref._definition;for(var Lt in J.schema){var Tt=this.ref[Lt];if(Tt&&Tt.$changes){var te=J.indexes[Lt];Tt.$changes.setParent(this.ref,v,te)}}}else typeof this.ref=="object"&&this.ref.forEach(function(E,L){if(E instanceof le){var H=E.$changes,O=F.ref.$changes.indexes[L];H.setParent(F.ref,F.root,O)}})},_.prototype.operation=function(d){this.changes.set(--this.currentCustomOperation,d)},_.prototype.change=function(d,v){v===void 0&&(v=e.OPERATION.ADD);var M=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(M,d);var F=this.changes.get(M);(!F||F.op===e.OPERATION.DELETE||F.op===e.OPERATION.TOUCH)&&this.changes.set(M,{op:F&&F.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:v,index:M}),this.allChanges.add(M),this.changed=!0,this.touchParents()},_.prototype.touch=function(d){var v=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(v,d),this.changes.has(v)||this.changes.set(v,{op:e.OPERATION.TOUCH,index:v}),this.allChanges.add(v),this.touchParents()},_.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},_.prototype.getType=function(d){if(this.ref._definition){var v=this.ref._definition;return v.schema[v.fieldsByIndex[d]]}else{var v=this.parent._definition,M=v.schema[v.fieldsByIndex[this.parentIndex]];return Object.values(M)[0]}},_.prototype.getChildrenFilter=function(){var d=this.parent._definition.childFilters;return d&&d[this.parentIndex]},_.prototype.getValue=function(d){return this.ref.getByIndex(d)},_.prototype.delete=function(d){var v=typeof d=="number"?d:this.indexes[d];if(v===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(d," (").concat(v,")"));return}var M=this.getValue(v);this.changes.set(v,{op:e.OPERATION.DELETE,index:v}),this.allChanges.delete(v),delete this.caches[v],M&&M.$changes&&(M.$changes.parent=void 0),this.changed=!0,this.touchParents()},_.prototype.discard=function(d,v){var M=this;d===void 0&&(d=!1),v===void 0&&(v=!1),this.ref instanceof le||this.changes.forEach(function(F){if(F.op===e.OPERATION.DELETE){var J=M.ref.getIndex(F.index);delete M.indexes[J]}}),this.changes.clear(),this.changed=d,v&&this.allChanges.clear(),this.currentCustomOperation=0},_.prototype.discardAll=function(){var d=this;this.changes.forEach(function(v){var M=d.getValue(v.index);M&&M.$changes&&M.$changes.discardAll()}),this.discard()},_.prototype.cache=function(d,v){this.caches[d]=v},_.prototype.clone=function(){return new _(this.ref,this.parent,this.root)},_.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},_.prototype.assertValidIndex=function(d,v){if(d===void 0)throw new Error('ChangeTree: missing index for field "'.concat(v,'"'))},_}();function h(_,d,v,M){return _[d]||(_[d]=[]),_[d].push(v),M==null||M.forEach(function(F,J){return v(F,J)}),function(){return f(_[d],_[d].indexOf(v))}}function u(_){var d=this,v=typeof this.$changes.getType()!="string";this.$items.forEach(function(M,F){_.push({refId:d.$changes.refId,op:e.OPERATION.DELETE,field:F,value:void 0,previousValue:M}),v&&d.$changes.root.removeRef(M.$changes.refId)})}function f(_,d){if(d===-1||d>=_.length)return!1;for(var v=_.length-1,M=d;M<v;M++)_[M]=_[M+1];return _.length=v,!0}var m=function(_,d){var v=_.toString(),M=d.toString();return v<M?-1:v>M?1:0};function x(_){return _.$proxy=!0,_=new Proxy(_,{get:function(d,v){return typeof v!="symbol"&&!isNaN(v)?d.at(v):d[v]},set:function(d,v,M){if(typeof v!="symbol"&&!isNaN(v)){var F=Array.from(d.$items.keys()),J=parseInt(F[v]||v);M==null?d.deleteAt(J):d.setAt(J,M)}else d[v]=M;return!0},deleteProperty:function(d,v){return typeof v=="number"?d.deleteAt(v):delete d[v],!0},has:function(d,v){return typeof v!="symbol"&&!isNaN(Number(v))?d.$items.has(Number(v)):Reflect.has(d,v)}}),_}var y=function(){function _(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,d)}return _.prototype.onAdd=function(d,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,d,v?this.$items:void 0)},_.prototype.onRemove=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,d)},_.prototype.onChange=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,d)},_.is=function(d){return Array.isArray(d)||d.array!==void 0},Object.defineProperty(_.prototype,"length",{get:function(){return this.$items.size},set:function(d){d===0?this.clear():this.splice(d,this.length-d)},enumerable:!1,configurable:!0}),_.prototype.push=function(){for(var d=this,v=[],M=0;M<arguments.length;M++)v[M]=arguments[M];var F;return v.forEach(function(J){F=d.$refId++,d.setAt(F,J)}),F},_.prototype.pop=function(){var d=Array.from(this.$indexes.values()).pop();if(d!==void 0){this.$changes.delete(d),this.$indexes.delete(d);var v=this.$items.get(d);return this.$items.delete(d),v}},_.prototype.at=function(d){if(d=Math.trunc(d)||0,d<0&&(d+=this.length),!(d<0||d>=this.length)){var v=Array.from(this.$items.keys())[d];return this.$items.get(v)}},_.prototype.setAt=function(d,v){var M,F;if(v==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(d)!==v){v.$changes!==void 0&&v.$changes.setParent(this,this.$changes.root,d);var J=(F=(M=this.$changes.indexes[d])===null||M===void 0?void 0:M.op)!==null&&F!==void 0?F:e.OPERATION.ADD;this.$changes.indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,v),this.$changes.change(d,J)}},_.prototype.deleteAt=function(d){var v=Array.from(this.$items.keys())[d];return v===void 0?!1:this.$deleteAt(v)},_.prototype.$deleteAt=function(d){return this.$changes.delete(d),this.$indexes.delete(d),this.$items.delete(d)},_.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&u.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.concat=function(){for(var d,v=[],M=0;M<arguments.length;M++)v[M]=arguments[M];return new(_.bind.apply(_,a([void 0],(d=Array.from(this.$items.values())).concat.apply(d,v),!1)))},_.prototype.join=function(d){return Array.from(this.$items.values()).join(d)},_.prototype.reverse=function(){var d=this,v=Array.from(this.$items.keys()),M=Array.from(this.$items.values()).reverse();return M.forEach(function(F,J){d.setAt(v[J],F)}),this},_.prototype.shift=function(){var d=Array.from(this.$items.keys()),v=d.shift();if(v!==void 0){var M=this.$items.get(v);return this.$deleteAt(v),M}},_.prototype.slice=function(d,v){var M=new _;return M.push.apply(M,Array.from(this.$items.values()).slice(d,v)),M},_.prototype.sort=function(d){var v=this;d===void 0&&(d=m);var M=Array.from(this.$items.keys()),F=Array.from(this.$items.values()).sort(d);return F.forEach(function(J,Lt){v.setAt(M[Lt],J)}),this},_.prototype.splice=function(d,v){v===void 0&&(v=this.length-d);for(var M=[],F=2;F<arguments.length;F++)M[F-2]=arguments[F];for(var J=Array.from(this.$items.keys()),Lt=[],Tt=d;Tt<d+v;Tt++)Lt.push(this.$items.get(J[Tt])),this.$deleteAt(J[Tt]);for(var Tt=0;Tt<M.length;Tt++)this.setAt(d+Tt,M[Tt]);return Lt},_.prototype.unshift=function(){for(var d=this,v=[],M=0;M<arguments.length;M++)v[M]=arguments[M];var F=this.length,J=v.length,Lt=Array.from(this.$items.values());return v.forEach(function(Tt,te){d.setAt(te,Tt)}),Lt.forEach(function(Tt,te){d.setAt(J+te,Tt)}),F+J},_.prototype.indexOf=function(d,v){return Array.from(this.$items.values()).indexOf(d,v)},_.prototype.lastIndexOf=function(d,v){return v===void 0&&(v=this.length-1),Array.from(this.$items.values()).lastIndexOf(d,v)},_.prototype.every=function(d,v){return Array.from(this.$items.values()).every(d,v)},_.prototype.some=function(d,v){return Array.from(this.$items.values()).some(d,v)},_.prototype.forEach=function(d,v){Array.from(this.$items.values()).forEach(d,v)},_.prototype.map=function(d,v){return Array.from(this.$items.values()).map(d,v)},_.prototype.filter=function(d,v){return Array.from(this.$items.values()).filter(d,v)},_.prototype.reduce=function(d,v){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},_.prototype.reduceRight=function(d,v){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},_.prototype.find=function(d,v){return Array.from(this.$items.values()).find(d,v)},_.prototype.findIndex=function(d,v){return Array.from(this.$items.values()).findIndex(d,v)},_.prototype.fill=function(d,v,M){throw new Error("ArraySchema#fill() not implemented")},_.prototype.copyWithin=function(d,v,M){throw new Error("ArraySchema#copyWithin() not implemented")},_.prototype.toString=function(){return this.$items.toString()},_.prototype.toLocaleString=function(){return this.$items.toLocaleString()},_.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(_,Symbol.species,{get:function(){return _},enumerable:!1,configurable:!0}),_.prototype.entries=function(){return this.$items.entries()},_.prototype.keys=function(){return this.$items.keys()},_.prototype.values=function(){return this.$items.values()},_.prototype.includes=function(d,v){return Array.from(this.$items.values()).includes(d,v)},_.prototype.flatMap=function(d,v){throw new Error("ArraySchema#flatMap() is not supported.")},_.prototype.flat=function(d){throw new Error("ArraySchema#flat() is not supported.")},_.prototype.findLast=function(){var d=Array.from(this.$items.values());return d.findLast.apply(d,arguments)},_.prototype.findLastIndex=function(){var d=Array.from(this.$items.values());return d.findLastIndex.apply(d,arguments)},_.prototype.with=function(d,v){var M=Array.from(this.$items.values());return M[d]=v,new(_.bind.apply(_,a([void 0],M,!1)))},_.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},_.prototype.toSorted=function(d){return Array.from(this.$items.values()).sort(d)},_.prototype.toSpliced=function(d,v){var M=Array.from(this.$items.values());return M.toSpliced.apply(M,arguments)},_.prototype.setIndex=function(d,v){this.$indexes.set(d,v)},_.prototype.getIndex=function(d){return this.$indexes.get(d)},_.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},_.prototype.deleteByIndex=function(d){var v=this.$indexes.get(d);this.$items.delete(v),this.$indexes.delete(d)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){return this.toArray().map(function(d){return typeof d.toJSON=="function"?d.toJSON():d})},_.prototype.clone=function(d){var v;return d?v=new(_.bind.apply(_,a([void 0],Array.from(this.$items.values()),!1))):v=new(_.bind.apply(_,a([void 0],this.map(function(M){return M.$changes?M.clone():M}),!1))),v},_}();function g(_){return _.$proxy=!0,_=new Proxy(_,{get:function(d,v){return typeof v!="symbol"&&typeof d[v]>"u"?d.get(v):d[v]},set:function(d,v,M){return typeof v!="symbol"&&v.indexOf("$")===-1&&v!=="onAdd"&&v!=="onRemove"&&v!=="onChange"?d.set(v,M):d[v]=M,!0},deleteProperty:function(d,v){return d.delete(v),!0}}),_}var p=function(){function _(d){var v=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d)if(d instanceof Map||d instanceof _)d.forEach(function(F,J){return v.set(J,F)});else for(var M in d)this.set(M,d[M])}return _.prototype.onAdd=function(d,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,d,v?this.$items:void 0)},_.prototype.onRemove=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,d)},_.prototype.onChange=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,d)},_.is=function(d){return d.map!==void 0},_.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(_.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(_,Symbol.species,{get:function(){return _},enumerable:!1,configurable:!0}),_.prototype.set=function(d,v){if(v==null)throw new Error("MapSchema#set('".concat(d,"', ").concat(v,"): trying to set ").concat(v," value on '").concat(d,"'."));d=d.toString();var M=typeof this.$changes.indexes[d]<"u",F=M?this.$changes.indexes[d]:this.$refId++,J=M?e.OPERATION.REPLACE:e.OPERATION.ADD,Lt=v.$changes!==void 0;if(Lt&&v.$changes.setParent(this,this.$changes.root,F),!M)this.$changes.indexes[d]=F,this.$indexes.set(F,d);else{if(!Lt&&this.$items.get(d)===v)return;Lt&&this.$items.get(d)!==v&&(J=e.OPERATION.ADD)}return this.$items.set(d,v),this.$changes.change(d,J),this},_.prototype.get=function(d){return this.$items.get(d)},_.prototype.delete=function(d){return this.$changes.delete(d.toString()),this.$items.delete(d)},_.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&u.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(d){return this.$items.has(d)},_.prototype.forEach=function(d){this.$items.forEach(d)},_.prototype.entries=function(){return this.$items.entries()},_.prototype.keys=function(){return this.$items.keys()},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(d,v){this.$indexes.set(d,v)},_.prototype.getIndex=function(d){return this.$indexes.get(d)},_.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},_.prototype.deleteByIndex=function(d){var v=this.$indexes.get(d);this.$items.delete(v),this.$indexes.delete(d)},_.prototype.toJSON=function(){var d={};return this.forEach(function(v,M){d[M]=typeof v.toJSON=="function"?v.toJSON():v}),d},_.prototype.clone=function(d){var v;return d?v=Object.assign(new _,this):(v=new _,this.forEach(function(M,F){M.$changes?v.set(F,M.clone()):v.set(F,M)})),v},_}(),A={};function b(_,d){A[_]=d}function R(_){return A[_]}var B=function(){function _(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return _.create=function(d){var v=new _;return v.schema=Object.assign({},d&&d.schema||{}),v.indexes=Object.assign({},d&&d.indexes||{}),v.fieldsByIndex=Object.assign({},d&&d.fieldsByIndex||{}),v.descriptors=Object.assign({},d&&d.descriptors||{}),v.deprecated=Object.assign({},d&&d.deprecated||{}),v},_.prototype.addField=function(d,v){var M=this.getNextFieldIndex();this.fieldsByIndex[M]=d,this.indexes[d]=M,this.schema[d]=Array.isArray(v)?{array:v[0]}:v},_.prototype.hasField=function(d){return this.indexes[d]!==void 0},_.prototype.addFilter=function(d,v){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[d]]=v,this.indexesWithFilters.push(this.indexes[d]),!0},_.prototype.addChildrenFilter=function(d,v){var M=this.indexes[d],F=this.schema[d];if(R(Object.keys(F)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[M]=v,!0;console.warn("@filterChildren: field '".concat(d,"' can't have children. Ignoring filter."))},_.prototype.getChildrenFilter=function(d){return this.childFilters&&this.childFilters[this.indexes[d]]},_.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},_}();function I(_){return _._context&&_._context.useFilters}var P=function(){function _(){this.types={},this.schemas=new Map,this.useFilters=!1}return _.prototype.has=function(d){return this.schemas.has(d)},_.prototype.get=function(d){return this.types[d]},_.prototype.add=function(d,v){v===void 0&&(v=this.schemas.size),d._definition=B.create(d._definition),d._typeid=v,this.types[v]=d,this.schemas.set(d,v)},_.create=function(d){return d===void 0&&(d={}),function(v){return d.context||(d.context=new _),T(v,d)}},_}(),nt=new P;function T(_,d){return d===void 0&&(d={}),function(v,M){var F=d.context||nt,J=v.constructor;if(J._context=F,!_)throw new Error("".concat(J.name,': @type() reference provided for "').concat(M,`" is undefined. Make sure you don't have any circular dependencies.`));F.has(J)||F.add(J);var Lt=J._definition;if(Lt.addField(M,_),Lt.descriptors[M]){if(Lt.deprecated[M])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(M,"' definition on '").concat(J.name,`'.
Check @type() annotation`))}catch(O){var Tt=O.stack.split(`
`)[4].trim();throw new Error("".concat(O.message," ").concat(Tt))}}var te=y.is(_),E=!te&&p.is(_);if(typeof _!="string"&&!le.is(_)){var L=Object.values(_)[0];typeof L!="string"&&!F.has(L)&&F.add(L)}if(d.manual){Lt.descriptors[M]={enumerable:!0,configurable:!0,writable:!0};return}var H="_".concat(M);Lt.descriptors[H]={enumerable:!1,configurable:!1,writable:!0},Lt.descriptors[M]={get:function(){return this[H]},set:function(O){O!==this[H]&&(O!=null?(te&&!(O instanceof y)&&(O=new(y.bind.apply(y,a([void 0],O,!1)))),E&&!(O instanceof p)&&(O=new p(O)),O.$proxy===void 0&&(E?O=g(O):te&&(O=x(O))),this.$changes.change(M),O.$changes&&O.$changes.setParent(this,this.$changes.root,this._definition.indexes[M])):this[H]!==void 0&&this.$changes.delete(M),this[H]=O)},enumerable:!0,configurable:!0}}}function C(_){return function(d,v){var M=d.constructor,F=M._definition;F.addFilter(v,_)&&(M._context.useFilters=!0)}}function Y(_){return function(d,v){var M=d.constructor,F=M._definition;F.addChildrenFilter(v,_)&&(M._context.useFilters=!0)}}function Q(_){return _===void 0&&(_=!0),function(d,v){var M=d.constructor,F=M._definition;F.deprecated[v]=!0,_&&(F.descriptors[v]={get:function(){throw new Error("".concat(v," is deprecated."))},set:function(J){},enumerable:!1,configurable:!0})}}function dt(_,d,v){v===void 0&&(v={}),v.context||(v.context=_._context||v.context||nt);for(var M in d)T(d[M],v)(_.prototype,M);return _}function k(_){for(var d=0,v=0,M=0,F=_.length;M<F;M++)d=_.charCodeAt(M),d<128?v+=1:d<2048?v+=2:d<55296||d>=57344?v+=3:(M++,v+=4);return v}function X(_,d,v){for(var M=0,F=0,J=v.length;F<J;F++)M=v.charCodeAt(F),M<128?_[d++]=M:M<2048?(_[d++]=192|M>>6,_[d++]=128|M&63):M<55296||M>=57344?(_[d++]=224|M>>12,_[d++]=128|M>>6&63,_[d++]=128|M&63):(F++,M=65536+((M&1023)<<10|v.charCodeAt(F)&1023),_[d++]=240|M>>18,_[d++]=128|M>>12&63,_[d++]=128|M>>6&63,_[d++]=128|M&63)}function K(_,d){_.push(d&255)}function Z(_,d){_.push(d&255)}function et(_,d){_.push(d&255),_.push(d>>8&255)}function it(_,d){_.push(d&255),_.push(d>>8&255)}function st(_,d){_.push(d&255),_.push(d>>8&255),_.push(d>>16&255),_.push(d>>24&255)}function ut(_,d){var v=d>>24,M=d>>16,F=d>>8,J=d;_.push(J&255),_.push(F&255),_.push(M&255),_.push(v&255)}function pt(_,d){var v=Math.floor(d/Math.pow(2,32)),M=d>>>0;ut(_,M),ut(_,v)}function q(_,d){var v=d/Math.pow(2,32)>>0,M=d>>>0;ut(_,M),ut(_,v)}function ot(_,d){Wt(_,d)}function Mt(_,d){Bt(_,d)}var wt=new Int32Array(2),It=new Float32Array(wt.buffer),Vt=new Float64Array(wt.buffer);function Wt(_,d){It[0]=d,st(_,wt[0])}function Bt(_,d){Vt[0]=d,st(_,wt[0]),st(_,wt[1])}function ee(_,d){return Z(_,d?1:0)}function W(_,d){d||(d="");var v=k(d),M=0;if(v<32)_.push(v|160),M=1;else if(v<256)_.push(217),Z(_,v),M=2;else if(v<65536)_.push(218),it(_,v),M=3;else if(v<4294967296)_.push(219),ut(_,v),M=5;else throw new Error("String too long");return X(_,_.length,d),M+v}function he(_,d){if(isNaN(d))return he(_,0);if(isFinite(d)){if(d!==(d|0))return _.push(203),Bt(_,d),9}else return he(_,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return d>=0?d<128?(Z(_,d),1):d<256?(_.push(204),Z(_,d),2):d<65536?(_.push(205),it(_,d),3):d<4294967296?(_.push(206),ut(_,d),5):(_.push(207),q(_,d),9):d>=-32?(_.push(224|d+32),1):d>=-128?(_.push(208),K(_,d),2):d>=-32768?(_.push(209),et(_,d),3):d>=-2147483648?(_.push(210),st(_,d),5):(_.push(211),pt(_,d),9)}var Ot=Object.freeze({__proto__:null,boolean:ee,float32:ot,float64:Mt,int16:et,int32:st,int64:pt,int8:K,number:he,string:W,uint16:it,uint32:ut,uint64:q,uint8:Z,utf8Write:X,writeFloat32:Wt,writeFloat64:Bt});function Gt(_,d,v){for(var M="",F=0,J=d,Lt=d+v;J<Lt;J++){var Tt=_[J];if(!(Tt&128)){M+=String.fromCharCode(Tt);continue}if((Tt&224)===192){M+=String.fromCharCode((Tt&31)<<6|_[++J]&63);continue}if((Tt&240)===224){M+=String.fromCharCode((Tt&15)<<12|(_[++J]&63)<<6|(_[++J]&63)<<0);continue}if((Tt&248)===240){F=(Tt&7)<<18|(_[++J]&63)<<12|(_[++J]&63)<<6|(_[++J]&63)<<0,F>=65536?(F-=65536,M+=String.fromCharCode((F>>>10)+55296,(F&1023)+56320)):M+=String.fromCharCode(F);continue}console.error("Invalid byte "+Tt.toString(16))}return M}function At(_,d){return fe(_,d)<<24>>24}function fe(_,d){return _[d.offset++]}function $t(_,d){return w(_,d)<<16>>16}function w(_,d){return _[d.offset++]|_[d.offset++]<<8}function S(_,d){return _[d.offset++]|_[d.offset++]<<8|_[d.offset++]<<16|_[d.offset++]<<24}function V(_,d){return S(_,d)>>>0}function lt(_,d){return Xt(_,d)}function ct(_,d){return rt(_,d)}function ht(_,d){var v=V(_,d),M=S(_,d)*Math.pow(2,32);return M+v}function Rt(_,d){var v=V(_,d),M=V(_,d)*Math.pow(2,32);return M+v}var vt=new Int32Array(2),St=new Float32Array(vt.buffer),kt=new Float64Array(vt.buffer);function Xt(_,d){return vt[0]=S(_,d),St[0]}function rt(_,d){return vt[0]=S(_,d),vt[1]=S(_,d),kt[0]}function de(_,d){return fe(_,d)>0}function Zt(_,d){var v=_[d.offset++],M;v<192?M=v&31:v===217?M=fe(_,d):v===218?M=w(_,d):v===219&&(M=V(_,d));var F=Gt(_,d.offset,M);return d.offset+=M,F}function Ht(_,d){var v=_[d.offset];return v<192&&v>160||v===217||v===218||v===219}function Ct(_,d){var v=_[d.offset++];if(v<128)return v;if(v===202)return Xt(_,d);if(v===203)return rt(_,d);if(v===204)return fe(_,d);if(v===205)return w(_,d);if(v===206)return V(_,d);if(v===207)return Rt(_,d);if(v===208)return At(_,d);if(v===209)return $t(_,d);if(v===210)return S(_,d);if(v===211)return ht(_,d);if(v>223)return(255-v+1)*-1}function bt(_,d){var v=_[d.offset];return v<128||v>=202&&v<=211}function Yt(_,d){return _[d.offset]<160}function ae(_,d){return _[d.offset-1]===o&&(_[d.offset]<128||_[d.offset]>=202&&_[d.offset]<=211)}var be=Object.freeze({__proto__:null,arrayCheck:Yt,boolean:de,float32:lt,float64:ct,int16:$t,int32:S,int64:ht,int8:At,number:Ct,numberCheck:bt,readFloat32:Xt,readFloat64:rt,string:Zt,stringCheck:Ht,switchStructureCheck:ae,uint16:w,uint32:V,uint64:Rt,uint8:fe}),qt=function(){function _(d){var v=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(M){return v.add(M)})}return _.prototype.onAdd=function(d,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,d,v?this.$items:void 0)},_.prototype.onRemove=function(d){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,d)},_.prototype.onChange=function(d){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,d)},_.is=function(d){return d.collection!==void 0},_.prototype.add=function(d){var v=this.$refId++,M=d.$changes!==void 0;return M&&d.$changes.setParent(this,this.$changes.root,v),this.$changes.indexes[v]=v,this.$indexes.set(v,v),this.$items.set(v,d),this.$changes.change(v),v},_.prototype.at=function(d){var v=Array.from(this.$items.keys())[d];return this.$items.get(v)},_.prototype.entries=function(){return this.$items.entries()},_.prototype.delete=function(d){for(var v=this.$items.entries(),M,F;(F=v.next())&&!F.done;)if(d===F.value[1]){M=F.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},_.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&u.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(d){return Array.from(this.$items.values()).some(function(v){return v===d})},_.prototype.forEach=function(d){var v=this;this.$items.forEach(function(M,F,J){return d(M,F,v)})},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(d,v){this.$indexes.set(d,v)},_.prototype.getIndex=function(d){return this.$indexes.get(d)},_.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},_.prototype.deleteByIndex=function(d){var v=this.$indexes.get(d);this.$items.delete(v),this.$indexes.delete(d)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){var d=[];return this.forEach(function(v,M){d.push(typeof v.toJSON=="function"?v.toJSON():v)}),d},_.prototype.clone=function(d){var v;return d?v=Object.assign(new _,this):(v=new _,this.forEach(function(M){M.$changes?v.add(M.clone()):v.add(M)})),v},_}(),ft=function(){function _(d){var v=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(M){return v.add(M)})}return _.prototype.onAdd=function(d,v){return v===void 0&&(v=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,d,v?this.$items:void 0)},_.prototype.onRemove=function(d){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,d)},_.prototype.onChange=function(d){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,d)},_.is=function(d){return d.set!==void 0},_.prototype.add=function(d){var v,M;if(this.has(d))return!1;var F=this.$refId++;d.$changes!==void 0&&d.$changes.setParent(this,this.$changes.root,F);var J=(M=(v=this.$changes.indexes[F])===null||v===void 0?void 0:v.op)!==null&&M!==void 0?M:e.OPERATION.ADD;return this.$changes.indexes[F]=F,this.$indexes.set(F,F),this.$items.set(F,d),this.$changes.change(F,J),F},_.prototype.entries=function(){return this.$items.entries()},_.prototype.delete=function(d){for(var v=this.$items.entries(),M,F;(F=v.next())&&!F.done;)if(d===F.value[1]){M=F.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},_.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&u.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(d){for(var v=this.$items.values(),M=!1,F;(F=v.next())&&!F.done;)if(d===F.value){M=!0;break}return M},_.prototype.forEach=function(d){var v=this;this.$items.forEach(function(M,F,J){return d(M,F,v)})},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(d,v){this.$indexes.set(d,v)},_.prototype.getIndex=function(d){return this.$indexes.get(d)},_.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},_.prototype.deleteByIndex=function(d){var v=this.$indexes.get(d);this.$items.delete(v),this.$indexes.delete(d)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){var d=[];return this.forEach(function(v,M){d.push(typeof v.toJSON=="function"?v.toJSON():v)}),d},_.prototype.clone=function(d){var v;return d?v=Object.assign(new _,this):(v=new _,this.forEach(function(M){M.$changes?v.add(M.clone()):v.add(M)})),v},_}(),U=function(){function _(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return _.prototype.addRefId=function(d){this.refIds.has(d)||(this.refIds.add(d),this.containerIndexes.set(d,new Set))},_.get=function(d){return d.$filterState===void 0&&(d.$filterState=new _),d.$filterState},_}(),yt=function(){function _(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return _.prototype.getNextUniqueId=function(){return this.nextUniqueId++},_.prototype.addRef=function(d,v,M){M===void 0&&(M=!0),this.refs.set(d,v),M&&(this.refCounts[d]=(this.refCounts[d]||0)+1)},_.prototype.removeRef=function(d){var v=this.refCounts[d];if(v===void 0){console.warn("trying to remove reference ".concat(d," that doesn't exist"));return}if(v===0){console.warn("trying to remove reference ".concat(d," with 0 refCount"));return}this.refCounts[d]=v-1,this.deletedRefs.add(d)},_.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},_.prototype.garbageCollectDeletedRefs=function(){var d=this;this.deletedRefs.forEach(function(v){if(!(d.refCounts[v]>0)){var M=d.refs.get(v);if(M instanceof le)for(var F in M._definition.schema)typeof M._definition.schema[F]!="string"&&M[F]&&M[F].$changes&&d.removeRef(M[F].$changes.refId);else{var J=M.$changes.parent._definition,Lt=J.schema[J.fieldsByIndex[M.$changes.parentIndex]];typeof Object.values(Lt)[0]=="function"&&Array.from(M.values()).forEach(function(Tt){return d.removeRef(Tt.$changes.refId)})}d.refs.delete(v),delete d.refCounts[v]}}),this.deletedRefs.clear()},_}(),xt=function(_){i(d,_);function d(){return _!==null&&_.apply(this,arguments)||this}return d}(Error);function zt(_,d,v,M){var F,J=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":F="number",isNaN(_)&&console.log('trying to encode "NaN" in '.concat(v.constructor.name,"#").concat(M));break;case"string":F="string",J=!0;break;case"boolean":return}if(typeof _!==F&&(!J||J&&_!==null)){var Lt="'".concat(JSON.stringify(_),"'").concat(_&&_.constructor&&" (".concat(_.constructor.name,")")||"");throw new xt("a '".concat(F,"' was expected, but ").concat(Lt," was provided in ").concat(v.constructor.name,"#").concat(M))}}function Ft(_,d,v,M){if(!(_ instanceof d))throw new xt("a '".concat(d.name,"' was expected, but '").concat(_.constructor.name,"' was provided in ").concat(v.constructor.name,"#").concat(M))}function me(_,d,v,M,F){zt(v,_,M,F);var J=Ot[_];if(J)J(d,v);else throw new xt("a '".concat(_,"' was expected, but ").concat(v," was provided in ").concat(M.constructor.name,"#").concat(F))}function ge(_,d,v){return be[_](d,v)}var le=function(){function _(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new yt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var M=this._definition.descriptors;M&&Object.defineProperties(this,M),d[0]&&this.assign(d[0])}return _.onError=function(d){console.error(d)},_.is=function(d){return d._definition&&d._definition.schema!==void 0},_.prototype.onChange=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,d)},_.prototype.onRemove=function(d){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,d)},_.prototype.assign=function(d){return Object.assign(this,d),this},Object.defineProperty(_.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),_.prototype.setDirty=function(d,v){this.$changes.change(d,v)},_.prototype.listen=function(d,v,M){var F=this;return M===void 0&&(M=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[d]||(this.$callbacks[d]=[]),this.$callbacks[d].push(v),M&&this[d]!==void 0&&v(this[d],void 0),function(){return f(F.$callbacks[d],F.$callbacks[d].indexOf(v))}},_.prototype.decode=function(d,v,M){v===void 0&&(v={offset:0}),M===void 0&&(M=this);var F=[],J=this.$changes.root,Lt=d.length,Tt=0;for(J.refs.set(Tt,this);v.offset<Lt;){var te=d[v.offset++];if(te==o){Tt=Ct(d,v);var E=J.refs.get(Tt);if(!E)throw new Error('"refId" not found: '.concat(Tt));M=E;continue}var L=M.$changes,H=M._definition!==void 0,O=H?te>>6<<6:te;if(O===e.OPERATION.CLEAR){M.clear(F);continue}var z=H?te%(O||255):Ct(d,v),tt=H?M._definition.fieldsByIndex[z]:"",at=L.getType(z),$=void 0,mt=void 0,Ut=void 0;if(H?mt=M["_".concat(tt)]:(mt=M.getByIndex(z),(O&e.OPERATION.ADD)===e.OPERATION.ADD?(Ut=M instanceof p?Zt(d,v):z,M.setIndex(z,Ut)):Ut=M.getIndex(z)),(O&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(O!==e.OPERATION.DELETE_AND_ADD&&M.deleteByIndex(z),mt&&mt.$changes&&J.removeRef(mt.$changes.refId),$=null),tt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Et={offset:v.offset};v.offset<Lt&&!(ae(d,v)&&(Et.offset=v.offset+1,J.refs.has(Ct(d,Et))));)v.offset++;continue}else if(O!==e.OPERATION.DELETE)if(_.is(at)){var gt=Ct(d,v);if($=J.refs.get(gt),O!==e.OPERATION.REPLACE){var Dt=this.getSchemaType(d,v,at);$||($=this.createTypeInstance(Dt),$.$changes.refId=gt,mt&&($.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&J.removeRef(mt.$changes.refId))),J.addRef(gt,$,$!==mt)}}else if(typeof at=="string")$=ge(at,d,v);else{var Ce=R(Object.keys(at)[0]),ve=Ct(d,v),Pe=J.refs.has(ve)?mt||J.refs.get(ve):new Ce.constructor;if($=Pe.clone(!0),$.$changes.refId=ve,mt&&($.$callbacks=mt.$callbacks,mt.$changes.refId&&ve!==mt.$changes.refId)){J.removeRef(mt.$changes.refId);for(var Kt=mt.entries(),Pt=void 0;(Pt=Kt.next())&&!Pt.done;){var Kn=Pt.value,ce=Kn[0],_n=Kn[1];F.push({refId:ve,op:e.OPERATION.DELETE,field:ce,value:void 0,previousValue:_n})}}J.addRef(ve,$,Pe!==mt)}if($!=null){if($.$changes&&$.$changes.setParent(L.ref,L.root,z),M instanceof _)M[tt]=$;else if(M instanceof p){var ce=Ut;M.$items.set(ce,$),M.$changes.allChanges.add(z)}else if(M instanceof y)M.setAt(z,$);else if(M instanceof qt){var vn=M.add($);M.setIndex(z,vn)}else if(M instanceof ft){var vn=M.add($);vn!==!1&&M.setIndex(z,vn)}}mt!==$&&F.push({refId:Tt,op:O,field:tt,dynamicIndex:Ut,value:$,previousValue:mt})}return this._triggerChanges(F),J.garbageCollectDeletedRefs(),F},_.prototype.encode=function(d,v,M){d===void 0&&(d=!1),v===void 0&&(v=[]),M===void 0&&(M=!1);for(var F=this.$changes,J=new WeakSet,Lt=[F],Tt=1,te=0;te<Tt;te++){var E=Lt[te],L=E.ref,H=L instanceof _;E.ensureRefId(),J.add(E),E!==F&&(E.changed||d)&&(Z(v,o),he(v,E.refId));for(var O=d?Array.from(E.allChanges):Array.from(E.changes.values()),z=0,tt=O.length;z<tt;z++){var at=d?{op:e.OPERATION.ADD,index:O[z]}:O[z],$=at.index,mt=H?L._definition.fieldsByIndex&&L._definition.fieldsByIndex[$]:$,Ut=v.length;if(at.op!==e.OPERATION.TOUCH)if(H)Z(v,$|at.op);else{if(Z(v,at.op),at.op===e.OPERATION.CLEAR)continue;he(v,$)}if(!H&&(at.op&e.OPERATION.ADD)==e.OPERATION.ADD&&L instanceof p){var Et=E.ref.$indexes.get($);W(v,Et)}if(at.op!==e.OPERATION.DELETE){var gt=E.getType($),Dt=E.getValue($);if(Dt&&Dt.$changes&&!J.has(Dt.$changes)&&(Lt.push(Dt.$changes),Dt.$changes.ensureRefId(),Tt++),at.op!==e.OPERATION.TOUCH){if(_.is(gt))Ft(Dt,gt,L,mt),he(v,Dt.$changes.refId),(at.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(v,gt,Dt.constructor);else if(typeof gt=="string")me(gt,v,Dt,L,mt);else{var Ce=R(Object.keys(gt)[0]);Ft(L["_".concat(mt)],Ce.constructor,L,mt),he(v,Dt.$changes.refId)}M&&E.cache($,v.slice(Ut))}}}!d&&!M&&E.discard()}return v},_.prototype.encodeAll=function(d){return this.encode(!0,[],d)},_.prototype.applyFilters=function(d,v){var M,F;v===void 0&&(v=!1);for(var J=this,Lt=new Set,Tt=U.get(d),te=[this.$changes],E=1,L=[],H=function(z){var tt=te[z];if(Lt.has(tt.refId))return"continue";var at=tt.ref,$=at instanceof _;Z(L,o),he(L,tt.refId);var mt=Tt.refIds.has(tt),Ut=v||!mt;Tt.addRefId(tt);var Et=Tt.containerIndexes.get(tt),gt=Ut?Array.from(tt.allChanges):Array.from(tt.changes.values());if(!v&&$&&at._definition.indexesWithFilters){var Dt=at._definition.indexesWithFilters;Dt.forEach(function(Cn){!Et.has(Cn)&&tt.allChanges.has(Cn)&&(Ut?gt.push(Cn):gt.push({op:e.OPERATION.ADD,index:Cn}))})}for(var Ce=0,ve=gt.length;Ce<ve;Ce++){var Pe=Ut?{op:e.OPERATION.ADD,index:gt[Ce]}:gt[Ce];if(Pe.op===e.OPERATION.CLEAR){Z(L,Pe.op);continue}var Kt=Pe.index;if(Pe.op===e.OPERATION.DELETE){$?Z(L,Pe.op|Kt):(Z(L,Pe.op),he(L,Kt));continue}var Pt=tt.getValue(Kt),Kn=tt.getType(Kt);if($){var ce=at._definition.filters&&at._definition.filters[Kt];if(ce&&!ce.call(at,d,Pt,J)){Pt&&Pt.$changes&&Lt.add(Pt.$changes.refId);continue}}else{var _n=tt.parent,ce=tt.getChildrenFilter();if(ce&&!ce.call(_n,d,at.$indexes.get(Kt),Pt,J)){Pt&&Pt.$changes&&Lt.add(Pt.$changes.refId);continue}}if(Pt.$changes&&(te.push(Pt.$changes),E++),Pe.op!==e.OPERATION.TOUCH)if(Pe.op===e.OPERATION.ADD||$)L.push.apply(L,(M=tt.caches[Kt])!==null&&M!==void 0?M:[]),Et.add(Kt);else if(Et.has(Kt))L.push.apply(L,(F=tt.caches[Kt])!==null&&F!==void 0?F:[]);else{if(Et.add(Kt),Z(L,e.OPERATION.ADD),he(L,Kt),at instanceof p){var vn=tt.ref.$indexes.get(Kt);W(L,vn)}Pt.$changes?he(L,Pt.$changes.refId):Ot[Kn](L,Pt)}else if(Pt.$changes&&!$){if(Z(L,e.OPERATION.ADD),he(L,Kt),at instanceof p){var vn=tt.ref.$indexes.get(Kt);W(L,vn)}he(L,Pt.$changes.refId)}}},O=0;O<E;O++)H(O);return L},_.prototype.clone=function(){var d,v=new this.constructor,M=this._definition.schema;for(var F in M)typeof this[F]=="object"&&typeof((d=this[F])===null||d===void 0?void 0:d.clone)=="function"?v[F]=this[F].clone():v[F]=this[F];return v},_.prototype.toJSON=function(){var d=this._definition.schema,v=this._definition.deprecated,M={};for(var F in d)!v[F]&&this[F]!==null&&typeof this[F]<"u"&&(M[F]=typeof this[F].toJSON=="function"?this[F].toJSON():this["_".concat(F)]);return M},_.prototype.discardAllChanges=function(){this.$changes.discardAll()},_.prototype.getByIndex=function(d){return this[this._definition.fieldsByIndex[d]]},_.prototype.deleteByIndex=function(d){this[this._definition.fieldsByIndex[d]]=void 0},_.prototype.tryEncodeTypeId=function(d,v,M){v._typeid!==M._typeid&&(Z(d,c),he(d,M._typeid))},_.prototype.getSchemaType=function(d,v,M){var F;return d[v.offset]===c&&(v.offset++,F=this.constructor._context.get(Ct(d,v))),F||M},_.prototype.createTypeInstance=function(d){var v=new d;return v.$changes.root=this.$changes.root,v},_.prototype._triggerChanges=function(d){for(var v,M,F,J,Lt,Tt,te,E,L,H=new Set,O=this.$changes.root.refs,z=function(at){var $=d[at],mt=$.refId,Ut=O.get(mt),Et=Ut.$callbacks;if(($.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&$.previousValue instanceof _&&((M=(v=$.previousValue.$callbacks)===null||v===void 0?void 0:v[e.OPERATION.DELETE])===null||M===void 0||M.forEach(function(gt){return gt()})),!Et)return"continue";if(Ut instanceof _){if(!H.has(mt))try{(F=Et==null?void 0:Et[e.OPERATION.REPLACE])===null||F===void 0||F.forEach(function(gt){return gt()})}catch(gt){_.onError(gt)}try{Et.hasOwnProperty($.field)&&((J=Et[$.field])===null||J===void 0||J.forEach(function(gt){return gt($.value,$.previousValue)}))}catch(gt){_.onError(gt)}}else $.op===e.OPERATION.ADD&&$.previousValue===void 0?(Lt=Et[e.OPERATION.ADD])===null||Lt===void 0||Lt.forEach(function(gt){var Dt;return gt($.value,(Dt=$.dynamicIndex)!==null&&Dt!==void 0?Dt:$.field)}):$.op===e.OPERATION.DELETE?$.previousValue!==void 0&&((Tt=Et[e.OPERATION.DELETE])===null||Tt===void 0||Tt.forEach(function(gt){var Dt;return gt($.previousValue,(Dt=$.dynamicIndex)!==null&&Dt!==void 0?Dt:$.field)})):$.op===e.OPERATION.DELETE_AND_ADD&&($.previousValue!==void 0&&((te=Et[e.OPERATION.DELETE])===null||te===void 0||te.forEach(function(gt){var Dt;return gt($.previousValue,(Dt=$.dynamicIndex)!==null&&Dt!==void 0?Dt:$.field)})),(E=Et[e.OPERATION.ADD])===null||E===void 0||E.forEach(function(gt){var Dt;return gt($.value,(Dt=$.dynamicIndex)!==null&&Dt!==void 0?Dt:$.field)})),$.value!==$.previousValue&&((L=Et[e.OPERATION.REPLACE])===null||L===void 0||L.forEach(function(gt){var Dt;return gt($.value,(Dt=$.dynamicIndex)!==null&&Dt!==void 0?Dt:$.field)}));H.add(mt)},tt=0;tt<d.length;tt++)z(tt)},_._definition=B.create(),_}();function Ve(_){for(var d=[_.$changes],v=1,M={},F=M,J=function(Tt){var te=d[Tt];te.changes.forEach(function(E){var L=te.ref,H=E.index,O=L._definition?L._definition.fieldsByIndex[H]:L.$indexes.get(H);F[O]=te.getValue(H)})},Lt=0;Lt<v;Lt++)J(Lt);return M}var se={context:new P},De=function(_){i(d,_);function d(){return _!==null&&_.apply(this,arguments)||this}return r([T("string",se)],d.prototype,"name",void 0),r([T("string",se)],d.prototype,"type",void 0),r([T("number",se)],d.prototype,"referencedType",void 0),d}(le),Je=function(_){i(d,_);function d(){var v=_!==null&&_.apply(this,arguments)||this;return v.fields=new y,v}return r([T("number",se)],d.prototype,"id",void 0),r([T([De],se)],d.prototype,"fields",void 0),d}(le),Zs=function(_){i(d,_);function d(){var v=_!==null&&_.apply(this,arguments)||this;return v.types=new y,v}return d.encode=function(v){var M,F=v.constructor,J=new d;J.rootType=F._typeid;var Lt=function(L,H){for(var O in H){var z=new De;z.name=O;var tt=void 0;if(typeof H[O]=="string")tt=H[O];else{var at=H[O],$=void 0;le.is(at)?(tt="ref",$=H[O]):(tt=Object.keys(at)[0],typeof at[tt]=="string"?tt+=":"+at[tt]:$=at[tt]),z.referencedType=$?$._typeid:-1}z.type=tt,L.fields.push(z)}J.types.push(L)},Tt=(M=F._context)===null||M===void 0?void 0:M.types;for(var te in Tt){var E=new Je;E.id=Number(te),Lt(E,Tt[te]._definition.schema)}return J.encodeAll()},d.decode=function(v,M){var F=new P,J=new d;J.decode(v,M);var Lt=J.types.reduce(function(H,O){var z=function(at){i($,at);function $(){return at!==null&&at.apply(this,arguments)||this}return $}(le),tt=O.id;return H[tt]=z,F.add(z,tt),H},{});J.types.forEach(function(H){var O=Lt[H.id];H.fields.forEach(function(z){var tt;if(z.referencedType!==void 0){var at=z.type,$=Lt[z.referencedType];if(!$){var mt=z.type.split(":");at=mt[0],$=mt[1]}at==="ref"?T($,{context:F})(O.prototype,z.name):T((tt={},tt[at]=$,tt),{context:F})(O.prototype,z.name)}else T(z.type,{context:F})(O.prototype,z.name)})});var Tt=Lt[J.rootType],te=new Tt;for(var E in Tt._definition.schema){var L=Tt._definition.schema[E];typeof L!="string"&&(te[E]=typeof L=="function"?new L:new(R(Object.keys(L)[0])).constructor)}return te},r([T([Je],se)],d.prototype,"types",void 0),r([T("number",se)],d.prototype,"rootType",void 0),d}(le);b("map",{constructor:p}),b("array",{constructor:y}),b("set",{constructor:ft}),b("collection",{constructor:qt}),e.ArraySchema=y,e.CollectionSchema=qt,e.Context=P,e.MapSchema=p,e.Reflection=Zs,e.ReflectionField=De,e.ReflectionType=Je,e.Schema=le,e.SchemaDefinition=B,e.SetSchema=ft,e.decode=be,e.defineTypes=dt,e.deprecated=Q,e.dumpChanges=Ve,e.encode=Ot,e.filter=C,e.filterChildren=Y,e.hasFilter=I,e.registerType=b,e.type=T})})(Ca,Ca.exports);var zh=Ca.exports,Bg=Ae&&Ae.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),kg=Ae&&Ae.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),zg=Ae&&Ae.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&Bg(t,s,e);return kg(t,s),t};Object.defineProperty(qs,"__esModule",{value:!0});qs.Room=void 0;const Nl=zg(xs),Hg=oo,qe=qa,Fl=Ii,Gg=js,Rr=ys,cn=zh,Bl=ro;class ja{constructor(t,e){this.onStateChange=(0,Rr.createSignal)(),this.onError=(0,Rr.createSignal)(),this.onLeave=(0,Rr.createSignal)(),this.onJoin=(0,Rr.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,Gg.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,Fl.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const r=new Hg.Connection;n.connection=r,r.events.onmessage=ja.prototype.onMessageCallback.bind(n),r.events.onclose=function(a){var o;if(!n.hasJoined){(o=console.warn)===null||o===void 0||o.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===Bl.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},r.events.onerror=function(a){var o;(o=console.warn)===null||o===void 0||o.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},r.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([qe.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Bl.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[qe.Protocol.ROOM_DATA];typeof t=="string"?cn.encode.string(n,t):cn.encode.number(n,t);let i;if(e!==void 0){const r=Nl.encode(e);i=new Uint8Array(n.length+r.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(r),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[qe.Protocol.ROOM_DATA_BYTES];typeof t=="string"?cn.encode.string(n,t):cn.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===qe.Protocol.JOIN_ROOM){let i=1;const r=(0,qe.utf8Read)(e,i);if(i+=(0,qe.utf8Length)(r),this.serializerId=(0,qe.utf8Read)(e,i),i+=(0,qe.utf8Length)(this.serializerId),!this.serializer){const a=(0,Fl.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([qe.Protocol.JOIN_ROOM])}else if(n===qe.Protocol.ERROR){const i={offset:1},r=cn.decode.number(e,i),a=cn.decode.string(e,i);this.onError.invoke(r,a)}else if(n===qe.Protocol.LEAVE_ROOM)this.leave();else if(n===qe.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(cn.decode.number(e,i)),o=new a;o.decode(e,i),this.dispatchMessage(a,o)}else if(n===qe.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===qe.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===qe.Protocol.ROOM_DATA){const i={offset:1},r=cn.decode.stringCheck(e,i)?cn.decode.string(e,i):cn.decode.number(e,i),a=e.length>i.offset?Nl.decode(t.data,i.offset):void 0;this.dispatchMessage(r,a)}else if(n===qe.Protocol.ROOM_DATA_BYTES){const i={offset:1},r=cn.decode.stringCheck(e,i)?cn.decode.string(e,i):cn.decode.number(e,i);this.dispatchMessage(r,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}qs.Room=ja;var co={};function kl(s,t){t.headers=s.headers||{},t.statusMessage=s.statusText,t.statusCode=s.status,t.data=s.response}function wn(s,t,e){return new Promise(function(n,i){e=e||{};var r=new XMLHttpRequest,a,o,c,l=e.body,h=e.headers||{};e.timeout&&(r.timeout=e.timeout),r.ontimeout=r.onerror=function(u){u.timeout=u.type=="timeout",i(u)},r.open(s,t.href||t),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),kl(r,r);o=c.shift();)o=o.split(": "),r.headers[o.shift().toLowerCase()]=o.join(": ");if(o=r.headers["content-type"],o&&~o.indexOf("application/json"))try{r.data=JSON.parse(r.data,e.reviver)}catch(u){return kl(r,u),i(u)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),r.withCredentials=!!e.withCredentials;for(a in h)r.setRequestHeader(a,h[a]);r.send(l)})}var Vg=wn.bind(wn,"GET"),Wg=wn.bind(wn,"POST"),Xg=wn.bind(wn,"PATCH"),$g=wn.bind(wn,"DELETE"),Yg=wn.bind(wn,"PUT");const qg=Object.freeze(Object.defineProperty({__proto__:null,del:$g,get:Vg,patch:Xg,post:Wg,put:Yg,send:wn},Symbol.toStringTag,{value:"Module"})),jg=yg(qg);var Kg=Ae&&Ae.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),Zg=Ae&&Ae.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Jg=Ae&&Ae.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&Kg(t,s,e);return Zg(t,s),t};Object.defineProperty(co,"__esModule",{value:!0});co.HTTP=void 0;const Qg=ro,t_=Jg(jg);class e_{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return t_[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var r;const a=i.statusCode,o=((r=i.data)===null||r===void 0?void 0:r.error)||i.statusMessage||i.message;throw!a&&!o?i:new Qg.ServerError(a,o)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}co.HTTP=e_;var Ks={},li={};Object.defineProperty(li,"__esModule",{value:!0});li.getItem=li.removeItem=li.setItem=void 0;let Ns;function Ka(){if(!Ns)try{Ns=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return Ns||(Ns={cache:{},setItem:function(s,t){this.cache[s]=t},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),Ns}function n_(s,t){Ka().setItem(s,t)}li.setItem=n_;function i_(s){Ka().removeItem(s)}li.removeItem=i_;function s_(s,t){const e=Ka().getItem(s);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}li.getItem=s_;var gi=Ae&&Ae.__awaiter||function(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(u){a(u)}}function c(h){try{l(n.throw(h))}catch(u){a(u)}}function l(h){h.done?r(h.value):i(h.value).then(o,c)}l((n=n.apply(s,t||[])).next())})},ns=Ae&&Ae.__classPrivateFieldGet||function(s,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!n:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(s):n?n.value:t.get(s)},Fs=Ae&&Ae.__classPrivateFieldSet||function(s,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,e):i?i.value=e:t.set(s,e),e},kr,Ra,ii,zr;Object.defineProperty(Ks,"__esModule",{value:!0});Ks.Auth=void 0;const ta=li,r_=js;class o_{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},kr.set(this,!1),Ra.set(this,void 0),ii.set(this,void 0),zr.set(this,(0,r_.createNanoEvents)()),(0,ta.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=ns(this,zr,"f").on("change",t);return ns(this,kr,"f")||Fs(this,Ra,new Promise((n,i)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),Fs(this,kr,!0,"f"),e}getUserData(){return gi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return gi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return gi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return gi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return gi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return gi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const r=e.width||480,a=e.height||768,o=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${o}`),h=screen.width/2-r/2,u=screen.height/2-a/2;Fs(this,ii,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+a+", top="+u+", left="+h),"f");const f=x=>{x.data.user===void 0&&x.data.token===void 0||(clearInterval(m),ns(this,ii,"f").close(),Fs(this,ii,void 0,"f"),window.removeEventListener("message",f),x.data.error!==void 0?i(x.data.error):(n(x.data),this.emitChange(x.data)))},m=setInterval(()=>{(!ns(this,ii,"f")||ns(this,ii,"f").closed)&&(Fs(this,ii,void 0,"f"),i("cancelled"),window.removeEventListener("message",f))},200);window.addEventListener("message",f)})})}signOut(){return gi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,ta.removeItem)(this.settings.key):(0,ta.setItem)(this.settings.key,t.token)),ns(this,zr,"f").emit("change",t)}}Ks.Auth=o_;kr=new WeakMap,Ra=new WeakMap,ii=new WeakMap,zr=new WeakMap;var lo={};Object.defineProperty(lo,"__esModule",{value:!0});lo.discordURLBuilder=void 0;function a_(s){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${e}${i}${s.pathname}${s.search}`:`${s.protocol}//${e}/.proxy/colyseus${i}${s.pathname}${s.search}`}lo.discordURLBuilder=a_;var Rn=Ae&&Ae.__awaiter||function(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(u){a(u)}}function c(h){try{l(n.throw(h))}catch(u){a(u)}}function l(h){h.done?r(h.value):i(h.value).then(o,c)}l((n=n.apply(s,t||[])).next())})},ea;Object.defineProperty(vs,"__esModule",{value:!0});vs.Client=vs.MatchMakeError=void 0;const c_=ro,l_=qs,h_=co,d_=Ks,u_=lo;class ho extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,ho.prototype)}}vs.MatchMakeError=ho;const zl=typeof window<"u"&&typeof((ea=window==null?void 0:window.location)===null||ea===void 0?void 0:ea.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class f_{constructor(t=zl,e){var n,i;if(typeof t=="string"){const r=t.startsWith("/")?new URL(t,zl):new URL(t),a=r.protocol==="https:"||r.protocol==="wss:",o=Number(r.port||(a?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:o,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new h_.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new d_.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=u_.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return Rn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return Rn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return Rn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return Rn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return Rn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return Rn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return Rn(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const r={sessionId:i.sessionId};t.reconnectionToken&&(r.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,r),t.devMode&&(()=>Rn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let o=0,c=8;const l=()=>Rn(this,void 0,void 0,function*(){o++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{o<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${o} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((o,c)=>{const l=(h,u)=>c(new c_.ServerError(h,u));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),o(a)})})})}createMatchMakeRequest(t,e,n={},i,r){return Rn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new ho(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,r)})}createRoom(t,e){return new l_.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}vs.Client=f_;var uo={};Object.defineProperty(uo,"__esModule",{value:!0});uo.SchemaSerializer=void 0;const Hl=zh;class p_{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new Hl.Reflection().decode(t,e):this.state=Hl.Reflection.decode(t,e)}}uo.SchemaSerializer=p_;var fo={};Object.defineProperty(fo,"__esModule",{value:!0});fo.NoneSerializer=void 0;class m_{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}fo.NoneSerializer=m_;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var t=vs;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=qa;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=qs;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=Ks;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=uo;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const a=fo,o=Ii;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return o.registerSerializer}}),(0,o.registerSerializer)("schema",r.SchemaSerializer),(0,o.registerSerializer)("none",a.NoneSerializer)})(Fh);class g_{constructor(t,e){D(this,"group");D(this,"head");D(this,"body");D(this,"leftArm");D(this,"rightArm");D(this,"leftLeg");D(this,"rightLeg");D(this,"label");D(this,"healthBar");D(this,"targetPos",new N);D(this,"targetRotY",0);D(this,"targetRotX",0);D(this,"health",20);D(this,"maxHealth",20);D(this,"walkCycle",0);D(this,"prevPos",new N);D(this,"dead",!1);this.group=new pe,this.prevPos.copy(this.group.position);let n=0;for(let C=0;C<e.length;C++)n=n*31+e.charCodeAt(C)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],r=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],o=i[n%i.length],c=r[(n>>3)%r.length],l=a[(n>>6)%a.length],h=3351057,u=r[(n>>9)%r.length],f=()=>new Le({color:o}),m=()=>new Le({color:c}),x=()=>new Le({color:l}),y=()=>new Le({color:h}),g=(C,Y,Q,dt,k=0)=>{const X=new pe,K=new Re(C,Y,Q),Z=new ie(K,dt);return Z.position.y=-Y/2+k,X.add(Z),X},p=new Re(.5,.5,.5);this.head=new ie(p,f()),this.head.position.y=.25;const A=new Re(.52,.52,.52),b=new Le({color:u,transparent:!0,opacity:.35}),R=new ie(A,b);this.head.add(R);const B=new Re(.6,.75,.35);this.body=new ie(B,m()),this.body.position.y=-.375,this.leftArm=g(.25,.65,.25,m(),0),this.rightArm=g(.25,.65,.25,m(),0);const I=new ie(new Re(.24,.3,.24),f());I.position.y=-.5,this.leftArm.children[0].add(I);const P=I.clone();this.rightArm.children[0].add(P),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=g(.27,.7,.27,x(),0),this.rightLeg=g(.27,.7,.27,x(),0);const nt=new ie(new Re(.28,.22,.28),y());nt.position.y=-.5,this.leftLeg.children[0].add(nt);const T=nt.clone();this.rightLeg.children[0].add(T),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const r=new Ta(e),a=new Kr({map:r,transparent:!0,depthTest:!1}),o=new Sa(a);return o.scale.set(1.6,.35,1),o}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Ta(t),i=new Kr({map:n,transparent:!0,depthTest:!1}),r=new Sa(i);return r.scale.set(1.2,.15,1),r}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,r=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*r,this.group.position.y+=(n-this.group.position.y)*r,this.group.position.z+=(i-this.group.position.z)*r;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const o=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(o*o+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const u=Math.sin(this.walkCycle),f=.65;this.leftLeg.rotation.x=u*f,this.rightLeg.rotation.x=-u*f,this.leftArm.rotation.x=-u*f,this.rightArm.rotation.x=u*f,this.body.position.y=-.375+Math.abs(u)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class __{constructor(t,e,n,i){D(this,"client");D(this,"room",null);D(this,"players",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"mobs",null);D(this,"moveInterval",null);D(this,"getLocalState");this.scene=t,this.world=e,this.cb=n;const r=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!r?"wss":"ws";this.client=new Fh.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:t}),this.cb.onStatusChange("connected"),this.setupHandlers(),this.startSendPosition()}catch(e){console.error("[MP] Connection failed:",e),this.cb.onStatusChange("disconnected")}}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new g_(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health,this.players.set(e,n),this.updateCount(),t.onChange(()=>{const i=this.players.get(e);i&&(i.targetPos.set(t.x,t.y,t.z),i.targetRotY=t.rotY,i.targetRotX=t.rotX,i.health!==t.health&&(i.setHealth(t.health),t.health<=0&&!i.dead&&i.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var r;(r=this.room)==null||r.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}class Gl{constructor(t,e){D(this,"group");D(this,"bodyMeshes",[]);D(this,"legs",[]);D(this,"arms",[]);D(this,"headGroup");D(this,"hpSprite");D(this,"id");D(this,"type");D(this,"health");D(this,"maxHealth");D(this,"alive",!0);D(this,"state","idle");D(this,"targetPos",new N);D(this,"targetRotY",0);D(this,"walkCycle",0);D(this,"prevPos",new N);switch(this.group=new pe,this.headGroup=new pe,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Le({color:t,transparent:e,opacity:n})}box(t,e,n,i){const r=new ie(new Re(t,e,n),this.mat(i));return this.bodyMeshes.push(r),r}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const r=this.box(.72,.66,.66,16361640);r.position.y=0,this.headGroup.add(r);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const o=a.clone();o.position.x=.2,this.headGroup.add(a,o);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const u=this.box(.18,.2,.1,15757424);u.position.set(-.28,.4,.1),this.headGroup.add(u);const f=u.clone();f.position.x=.28,this.headGroup.add(f),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const m=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[x,y]of m){const g=new pe,p=this.box(.3,.48,.3,16361640);p.position.y=-.24;const A=this.box(.3,.14,.3,7816260);A.position.y=-.48-.07,g.add(p,A),g.position.set(x,0,y),this.group.add(g),this.legs.push(g)}}buildZombie(){const r=this.box(.6,.8,.35,2771498);r.position.y=-.05,this.group.add(r);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const o=this.box(.1,.1,.05,16720384);o.position.set(-.12,.05,.26),this.headGroup.add(o);const c=o.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=u=>{const f=new pe,m=this.box(.26,.55,.26,2771498);m.position.y=-.275;const x=this.box(.24,.45,.24,7846775);return x.position.y=-.55-.225,f.add(m,x),f.position.set(u*.43,.2,0),f.rotation.x=-Math.PI/2.2,this.group.add(f),this.arms.push(f),f};l(-1),l(1);const h=u=>{const f=new pe,m=this.box(.26,.6,.26,1715738);m.position.y=-.3;const x=this.box(.26,.24,.28,1708040);return x.position.y=-.6-.12,f.add(m,x),f.position.set(u*.175,-.45,0),this.group.add(f),this.legs.push(f),f};h(-1),h(1)}buildChicken(){const r=this.box(.55,.6,.7,16777215);r.scale.set(1,1.1,1.3),r.position.y=.35,this.group.add(r);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const o=this.box(.12,.22,.12,14492194);o.position.set(0,.3,.02),this.headGroup.add(o);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new pe,f=this.box(.12,.45,.5,16777215);f.position.y=-.225,u.add(f),u.position.set(h*.34,.35,0),u.rotation.z=-h*.2,this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new pe,f=this.box(.1,.4,.1,16763904);f.position.y=-.2;const m=this.box(.25,.06,.18,16763904);m.position.set(.05,-.43,.06),u.add(f,m),u.position.set(h*.14,.05,0),this.group.add(u),this.legs.push(u)}}buildCow(){const r=this.box(1.1,.85,1.5,8014378);r.position.set(0,.5,0),this.group.add(r);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const o=this.box(.76,.7,.72,8014378);this.headGroup.add(o);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const u=this.box(.14,.14,.05,1118481);u.position.set(-.28,.14,.37),this.headGroup.add(u);const f=u.clone();f.position.x=.28,this.headGroup.add(f);const m=this.box(.1,.28,.1,14540253);m.position.set(-.3,.44,.04),this.headGroup.add(m);const x=m.clone();x.position.x=.3,this.headGroup.add(x);const y=this.box(.22,.16,.1,8014378);y.position.set(-.44,.26,.06),this.headGroup.add(y);const g=y.clone();g.position.x=.44,this.headGroup.add(g),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const p=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[b,R]of p){const B=new pe,I=this.box(.34,.55,.34,8014378);I.position.y=-.275;const P=this.box(.34,.15,.36,2236962);P.position.y=-.55-.075,B.add(I,P),B.position.set(b,0,R),this.group.add(B),this.legs.push(B)}const A=this.box(.44,.2,.44,16765120);A.position.set(0,-.08,.1),this.group.add(A)}buildSheep(){const r=this.box(1,.95,1.35,14540253);r.position.set(0,.55,0),this.group.add(r);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const o=this.box(.8,.55,.55,14540253);o.position.set(0,.72,.5),this.group.add(o);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const u=h.clone();u.position.x=.2,this.headGroup.add(u);const f=this.box(.52,.3,.5,14540253);f.position.set(0,.38,-.04),this.headGroup.add(f);const m=this.box(.1,.24,.18,8943462);m.position.set(-.34,.1,0),this.headGroup.add(m);const x=m.clone();x.position.x=.34,this.headGroup.add(x),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const y=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[g,p]of y){const A=new pe,b=this.box(.28,.52,.28,8943462);b.position.y=-.26;const R=this.box(.28,.14,.3,3355443);R.position.y=-.52-.07,A.add(b,R),A.position.set(g,0,p),this.group.add(A),this.legs.push(A)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const r=this.box(.12,.14,.08,2775578);r.position.set(-.2,.1,.46),this.headGroup.add(r);const a=r.clone();a.position.x=.2,this.headGroup.add(a);const o=this.box(.12,.12,.08,2775578);o.position.set(-.2,-.15,.46),this.headGroup.add(o);const c=o.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,u]of l){const f=new pe,m=this.box(.28,.58,.28,4885034);m.position.y=-.29,f.add(m),f.position.set(h,0,u),this.group.add(f),this.legs.push(f)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const r=i.clone();r.position.x=.1,this.headGroup.add(r);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const o=a.clone();o.position.x=.1,this.headGroup.add(o),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new pe,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const u=this.box(.12,.45,.12,13421772);u.position.y=-.55-.225,l.add(h,u),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new pe,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const u=this.box(.13,.5,.13,13421772);u.position.y=-.55-.25,l.add(h,u),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const r=this.box(.08*1.3,.08*1.3,.05*1.3,17663);r.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=r.material;a.emissive=new Nt(17663),a.emissiveIntensity=.8,this.headGroup.add(r);const o=r.clone();o.position.x=.1*1.3,this.headGroup.add(o);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new pe,f=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);f.position.y=-.25*1.3;const m=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(m.position.y=-.55*1.3-.225*1.3,u.add(f,m),h===1){const x=this.box(.10400000000000001,.52,.195,8421504);x.position.set(.12*1.3,-.55*1.3,0),u.add(x)}u.position.set(h*.38*1.3,.2*1.3,0),this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new pe,f=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);f.position.y=-.275*1.3;const m=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);m.position.y=-.55*1.3-.25*1.3,u.add(f,m),u.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(u),this.legs.push(u)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const r=this.box(.1,.1,.05,2236962);r.position.set(-.15,.1,.32),this.headGroup.add(r);const a=r.clone();a.position.x=.15,this.headGroup.add(a);const o=this.box(.12,.24,.08,5913130);o.position.set(-.18,.32,.1),this.headGroup.add(o);const c=o.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new ie(new eo(.3,.5),new Le({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[u,f]of h){const m=new pe,x=this.box(.2,.7,.2,13149294);x.position.y=-.35,m.add(x),m.position.set(u,.1,f),this.group.add(m),this.legs.push(m)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const r=this.box(.62,.95,.42,4885050);r.position.y=.22,this.group.add(r);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const o=this.box(.12,.12,.05,2236962);o.position.set(-.15,.08,.26),this.headGroup.add(o);const c=o.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new pe,f=this.box(.26,.5,.26,16764057);f.position.y=-.25;const m=this.box(.24,.45,.24,16764057);m.position.y=-.55-.225,u.add(f,m),u.position.set(h*.4,.3,0),this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new pe,f=this.box(.26,.5,.26,8015658);f.position.y=-.25;const m=this.box(.26,.45,.26,8015658);m.position.y=-.55-.225,u.add(f,m),u.position.set(h*.15,-.5,0),this.group.add(u),this.legs.push(u)}}buildEnderDragon(){const r=this.box(2,1,4,1114146);r.scale.set(1.5,1.5,1.5),r.position.set(0,.6*1.5,0),this.group.add(r);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const o=this.box(.18,.18,.1,16729156);o.position.set(-.3,.15,.65);const c=new Le({color:16729156,emissive:16729156,emissiveIntensity:.8});o.material=c,this.headGroup.add(o);const l=o.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const u=this.box(3,.2,2,2228275);u.scale.set(1.5,1.5,1.5),u.position.set(h*2*1.5,.6*1.5,0),this.group.add(u)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const r=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[o,c,l]of r){const h=new ie(new In(.06,8,8),new Le({color:16724787}));h.position.set(o,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let o=0;o<8;o++){const[c,l,h]=a[o],u=new pe,f=this.box(.1,.08,.6,3355443);f.position.set(0,0,.3),u.add(f),u.position.set(c,l,h),u.rotation.z=(o<4?-1:1)*Math.PI/4,this.group.add(u),this.legs.push(u)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const r=this.box(.5,.5,.5,8947848);this.headGroup.add(r);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const o=a.clone();o.position.x=.15,this.headGroup.add(a,o);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const u=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[m,x]of u){const y=new pe,g=this.box(.18,.5,.18,8947848);g.position.y=-.25,y.add(g),y.position.set(m,0,x),this.group.add(y),this.legs.push(y)}const f=this.box(.1,.08,.7,8947848);f.position.set(0,.2,-.8),this.group.add(f)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const r=this.box(.4,.4,.35,14518323);this.headGroup.add(r);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const o=a.clone();o.position.x=.12,this.headGroup.add(a,o);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const u=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[m,x]of u){const y=new pe,g=this.box(.12,.38,.12,14518323);g.position.y=-.19,y.add(g),y.position.set(m,0,x),this.group.add(y),this.legs.push(y)}const f=this.box(.08,.06,.6,14518323);f.position.set(0,.1,-.6),this.group.add(f)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const r=this.box(2,.1,.8,1717060);r.position.set(-1,-.05,0),this.group.add(r);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const o=new ie(new In(.1,8,8),new Le({color:4521796,emissive:4521796}));o.position.set(-.3,.1,.8),this.bodyMeshes.push(o),this.group.add(o);const c=o.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const r=new ie(new Re(1.2,1.2,1.2),new Le({color:4500036,transparent:!0,opacity:.8}));r.position.y=0,this.bodyMeshes.push(r),this.group.add(r);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const o=new ie(new In(.15,8,8),new Le({color:16777215}));o.position.set(-.25,.25,.5),this.bodyMeshes.push(o),this.group.add(o);const c=o.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new ie(new In(.06,8,8),new Le({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Ta(t),n=new Kr({map:e,transparent:!0,depthTest:!1}),i=new Sa(n);i.scale.set(1.2,.18,1);const r={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=r[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,r=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=r/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const o=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=o*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(o)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=o*c,this.legs[1].rotation.x=-o*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(o)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=o*.7,this.legs[1].rotation.x=-o*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(o)*.3);this.headGroup.position.y=.72+Math.abs(o)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=o*c,this.legs[1].rotation.x=-o*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(o)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const r={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036}[this.type]??16777215,a=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const o of this.bodyMeshes)o.material.color.set(a);setTimeout(()=>{for(const o of this.bodyMeshes)o.material.color.set(r);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.group.rotation.z=Math.PI/2,this.hpSprite.visible=!1,setTimeout(()=>{this.group.visible=!1},2500)}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function Qe(s,t){return s+Math.random()*(t-s)}function v_(){return Math.random().toString(36).slice(2,10)}const Vl=20,x_=30,Wl=60,y_=-20;class Xl{constructor(t,e,n,i){D(this,"mobs",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"singleplayer");D(this,"arrows",[]);D(this,"dayTime",.5);D(this,"attackCooldown",0);this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,r){const a=r??v_(),o=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:10,c={id:a,type:t,x:e,y:n,z:i,rotY:Qe(0,Math.PI*2),health:o,maxHealth:o,alive:!0,state:"idle"},l=new Gl(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0}),l}spawnRandom(t,e){if(this.mobs.size>=Vl)return;const n=Qe(0,Math.PI*2),i=Qe(12,x_),r=t+Math.cos(n)*i,a=e+Math.sin(n)*i,o=this.dayTime<.25||this.dayTime>.73;let c,l;if(o&&Math.random()<.15)c=20+Qe(0,10),l="phantom";else{const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.floor(r),Math.floor(a))+1.5:20;if(c=h,h<15&&Math.random()<.08)l="slime";else{const u=Math.random();l=u<.18?"pig":u<.28?"chicken":u<.38?"cow":u<.48?"sheep":u<.55?"horse":u<.6?"wolf":u<.65?"cat":u<.72?"zombie":u<.79?"creeper":u<.86?"spider":u<.94?"skeleton":"witherskeleton"}}this.spawnMob(l,r,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const r=new Gl(this.scene,n);this.mobs.set(n.id,{data:n,mob:r,velY:0,timer:0,aggro:!1,hitCooldown:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e){if(this.attackCooldown>0)return null;const n=[],i=new Map;for(const[l,h]of this.mobs)h.mob.alive&&h.mob.group.traverse(u=>{u.isMesh&&(n.push(u),i.set(u,l))});const r=t.intersectObjects(n);if(!r.length)return null;const a=i.get(r[0].object);if(!a)return null;const o=this.mobs.get(a);let c=5;return e!=null&&e.sharpness&&(c+=2*e.sharpness),o.mob.health-=c,o.mob.showDamage(o.mob.health),o.mob.health<=0&&o.mob.die(),this.attackCooldown=.4,{mobId:a,damage:c}}update(t){this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[n,i]of this.mobs){if(i.hitCooldown>0&&(i.hitCooldown=Math.max(0,i.hitCooldown-t)),i.mob.update(t),!i.mob.alive)continue;if(this.singleplayer){const o=i.mob.targetPos.x-e.x,c=i.mob.targetPos.z-e.z;o*o+c*c<=60*60&&this.runAI(i,t,e)}const r=i.data.x-e.x,a=i.data.z-e.z;r*r+a*a>Wl*Wl&&(i.mob.dispose(this.scene),this.mobs.delete(n))}for(let n=this.arrows.length-1;n>=0;n--){const i=this.arrows[n];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);const r=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,o=i.mesh.position.z-e.z;r*r+a*a+o*o<.64?(this.cb.onPlayerDamage(3),this.scene.remove(i.mesh),this.arrows.splice(n,1)):i.life<=0&&(this.scene.remove(i.mesh),this.arrows.splice(n,1))}this.singleplayer&&Math.random()<t*.3&&this.mobs.size<Vl&&this.spawnRandom(e.x,e.z)}runAI(t,e,n){const i=t.data;t.timer-=e;const r=n.x-i.x,a=n.z-i.z,o=Math.sqrt(r*r+a*a);if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=y_*e;const c=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(i.x),Math.round(i.z))+.5:0;if(i.y<=c&&(i.y=c,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const l=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,o,r,a,l)}else i.type==="horse"?this.horseAI(t,e,o,r,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,o,r,a,n):i.type==="creeper"?this.creeperAI(t,e,o,n):i.type==="skeleton"?this.skeletonAI(t,e,o,r,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,o,r,a,n):i.type==="spider"?this.spiderAI(t,e,o,r,a,n):i.type==="wolf"?this.wolfAI(t,e,o,r,a,n):i.type==="cat"?this.catAI(t,e,o,r,a,n):i.type==="slime"&&this.slimeAI(t,e,o,r,a,n)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,r,a){const o=t.data;if(n<5&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){const c=o.rotY+Math.PI;o.x+=Math.sin(c)*a*e,o.z+=Math.cos(c)*a*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"?t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)):(o.x+=Math.sin(o.rotY)*a*e,o.z+=Math.cos(o.rotY)*a*e,t.timer<=0&&(o.state="idle",t.timer=Qe(2,5)))}horseAI(t,e,n,i,r,a){const o=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const u=h.data.x-o.x,f=h.data.z-o.z;if(u*u+f*f<225){l=!0;break}}if(l&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){let h=0,u=0;for(const f of this.mobs.values())if((f.data.type==="zombie"||f.data.type==="skeleton")&&f.data.id!==o.id){h=f.data.x,u=f.data.z;break}(h!==0||u!==0)&&(o.rotY=Math.atan2(o.x-h,o.z-u)),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"?t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)):(o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,t.timer<=0&&(o.state="idle",t.timer=Qe(2,5)))}zombieAI(t,e,n,i,r,a){const o=t.data,c=2.8;n<18?(o.state="chasing",t.aggro=!0):n>24&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state==="chasing"?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,n<1.8&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2)):this.animalAI(t,e,n,i,r,1.5)}creeperAI(t,e,n,i){const r=t.data,a=2.5;if(n<10?r.state!=="fusing"&&(r.state="fusing",t.timer=1.5):r.state==="fusing"&&(r.state="idle",t.timer=Qe(1.5,4)),r.state==="fusing"){const o=i.x-r.x,c=i.z-r.z;r.rotY=Math.atan2(o,c),r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e)}explode(t,e){const n=t.data,i=5,r=5,a=e.x-n.x,o=e.y-n.y,c=e.z-n.z;a*a+o*o+c*c<r*r&&this.cb.onPlayerDamage(6),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,r,a){const o=t.data,c=1.8,l=20,h=4,u=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(o.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(o.x,o.y+.5,o.z,a),t.shootTimer=u),n<h){const f=o.rotY+Math.PI;o.x+=Math.sin(f)*c*e,o.z+=Math.cos(f)*c*e}else o.rotY=Math.atan2(i,r);else n>25&&t.timer<=0&&(o.state="idle",t.aggro=!1);o.state!=="attacking"&&(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e))}witherskeletonAI(t,e,n,i,r,a){var u,f;const o=t.data,c=4,l=2,h=20;t.shootTimer=(t.shootTimer??0)-e,n<h?(o.state="chasing",t.aggro=!0,o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(4),t.hitCooldown=2.5,(f=(u=this.cb).onWitherEffect)==null||f.call(u))):n>25&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state!=="chasing"&&(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*.5*e,o.z+=Math.cos(o.rotY)*c*.5*e))}shootArrow(t,e,n,i){const r=new Re(.1,.1,.4),a=new Le({color:16768256}),o=new ie(r,a);o.position.set(t,e,n);const h=new N(i.x-t,i.y-e,i.z-n).normalize().multiplyScalar(15);this.scene.add(o),this.arrows.push({mesh:o,vel:h,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const r=15,a=i.x+Math.sin(t.timer)*r,o=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*r,l=3;n.x+=(a-n.x)*l*e,n.y+=(o-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else n.state==="diving"&&(n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e,Math.hypot(i.x-n.x,i.z-n.z)<4&&(this.cb.onPlayerDamage(5),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0));n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,r,a){const o=t.data,c=3.5,l=15,h=3,u=3;t.jumpTimer||(t.jumpTimer=0),n<l?(o.state="chasing",t.aggro=!0):n>20&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state==="chasing"?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=u),n<1.5&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2)):(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=Qe(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*.6*e,o.z+=Math.cos(o.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>15}villagerAI(t,e,n){const i=t.data,r=n.x-i.x,a=n.z-i.z;Math.sqrt(r*r+a*a)<10&&(i.rotY=Math.atan2(r,a))}wolfAI(t,e,n,i,r,a){const o=t.data,c=4;if(o.state!=="tamed")if(n<2&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){const l=o.rotY+Math.PI;o.x+=Math.sin(l)*c*e,o.z+=Math.cos(l)*c*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"&&(t.timer<=0&&(o.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),o.x+=Math.sin(o.rotY)*1.5*e,o.z+=Math.cos(o.rotY)*1.5*e);else n>5?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,o.state="following"):o.state="sitting"}catAI(t,e,n,i,r,a){const o=t.data,c=2.5;o.state!=="tamed"?o.state==="idle"?(t.timer<=0&&(o.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(o.state="sitting")),o.x+=Math.sin(o.rotY)*1*e,o.z+=Math.cos(o.rotY)*1*e):o.state==="sitting"&&t.timer<=0&&(o.state="idle"):n>8?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e):o.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,o=n.z-i.z,c=Math.sqrt(a*a+o*o);if(i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e),Array.from(this.mobs.values()).some(h=>h.data.type==="cat"&&h.data.state==="tamed"&&Math.hypot(h.data.x-i.x,h.data.z-i.z,h.data.y-i.y)<10)){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,o);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=Qe(8,12))):(t.timer-=e,c<20&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}slimeAI(t,e,n,i,r,a){const o=t.data,c=4.5;if(n>12){o.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,r);o.rotY=l,o.x+=Math.sin(l)*c*e,o.z+=Math.cos(l)*c*e,t.velY=6,o.state="hopping",t.timer=.8}t.velY<0&&n<2&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}}class M_{constructor(){D(this,"hotbarEl",document.getElementById("hotbar"));D(this,"topLeftEl",document.getElementById("topLeft"));D(this,"topRightEl",document.getElementById("topRight"));D(this,"connEl",document.getElementById("connStatus"));D(this,"blockNameEl",document.getElementById("blockName"));D(this,"chatMsgsEl",document.getElementById("chatMessages"));D(this,"chatInput",document.getElementById("chatInput"));D(this,"heartsEl",document.getElementById("hearts"));D(this,"hungerEl",document.getElementById("hunger"));D(this,"timeEl",document.getElementById("timeDisplay"));D(this,"gameModeEl",document.getElementById("gameModeEl"));D(this,"deathScreen",document.getElementById("deathScreen"));D(this,"respawnBtn",document.getElementById("respawnBtn"));D(this,"selectedIndex",0);D(this,"gameMode","survival");D(this,"craftingPanel",null);D(this,"inventoryPanel",null);D(this,"xpBarEl",null);D(this,"debugScreenEl",null);D(this,"debugVisible",!1);D(this,"onChat");D(this,"onRespawn");D(this,"onCraft");D(this,"chestPanel",null);D(this,"onChestClose");D(this,"smeltingPanel",null);D(this,"onSmelt");D(this,"killFeedEl",null);D(this,"playerListPanel",null);D(this,"enchantPanel",null);D(this,"onEnchant",null);D(this,"tradePanel",null);D(this,"onTrade",null);D(this,"bossBarEl",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this.respawnBtn.addEventListener("click",()=>{var t;this.deathScreen.style.display="none",(t=this.onRespawn)==null||t.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="",Ti.forEach((t,e)=>{const n=document.createElement("div");n.className="hotbar-slot"+(e===0?" active":""),n.dataset.index=String(e);const i=document.createElement("div");i.className="slot-icon",i.style.background="#"+Br(t).toString(16).padStart(6,"0");const r=document.createElement("span");r.textContent=String(e+1),n.appendChild(i),n.appendChild(r),this.hotbarEl.appendChild(n),n.addEventListener("click",()=>this.selectSlot(e))}),document.addEventListener("keydown",t=>{const e=parseInt(t.key);e>=1&&e<=8&&this.selectSlot(e-1)})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((n,i)=>{n.classList.toggle("active",i===t)});const e=Ti[t];return this.blockNameEl.textContent=zs(e),e}getSelectedBlock(){return Ti[this.selectedIndex]}updatePosition(t,e,n){this.topLeftEl.innerHTML=`X <b>${t.toFixed(1)}</b><br>Y <b>${e.toFixed(1)}</b><br>Z <b>${n.toFixed(1)}</b>`}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){this.heartsEl.innerHTML="";const i=Math.ceil(e/2),r=Math.floor(t/2),a=t%2===1;for(let o=0;o<i;o++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),o<r?c.classList.add("full"):o===r&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,r=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const o=this.deathScreen.querySelector(".death-coords");o&&(o.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${r}`)}updateHunger(t,e){this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),r=t%2===1;for(let a=0;a<n;a++){const o=document.createElement("div");o.className="hunger-icon",a<i?o.classList.add("full"):a===i&&r?o.classList.add("half"):o.classList.add("empty"),this.hungerEl.appendChild(o)}}updateTime(t){const e=(t*24+6)%24,n=Math.floor(e),i=Math.floor((e-n)*60),r=n>=12?"PM":"AM",a=n%12||12,o=i.toString().padStart(2,"0");let c="☀️";t<.2||t>.8?c="🌙":(t<.3||t>.7)&&(c="🌅"),this.timeEl.textContent=`${c} ${a}:${o} ${r}`}setGameMode(t){this.gameMode=t,this.gameModeEl.textContent=t==="creative"?"✈ Creative":t==="spectator"?"👁 Spectator":"⚔ Survival",this.gameModeEl.className=`gamemode-badge ${t}`;const e=t==="creative"||t==="spectator";this.heartsEl.style.display=e?"none":"flex",this.hungerEl.style.display=e?"none":"flex"}buildXPBar(){this.xpBarEl=document.createElement("div"),this.xpBarEl.id="xp-bar",this.xpBarEl.style.cssText=`
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 8px;
      background: #000;
      border: 1px solid #555;
      z-index: 100;
    `;const t=document.createElement("div");t.id="xp-bar-fill",t.style.cssText=`
      width: 0%;
      height: 100%;
      background: #88ff44;
      transition: width 0.1s;
    `,this.xpBarEl.appendChild(t);const e=document.createElement("div");e.id="xp-level",e.textContent="Level 0",e.style.cssText=`
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      color: #88ff44;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      z-index: 100;
    `,document.body.appendChild(this.xpBarEl),document.body.appendChild(e)}updateXP(t,e){if(!this.xpBarEl)return;const n=(e+1)*10,i=t-e*10,r=Math.min(100,i/n*100),a=this.xpBarEl.querySelector("#xp-bar-fill");a&&(a.style.width=r+"%");const o=document.querySelector("#xp-level");o&&(o.textContent=`Level ${e}`)}showInventory(t){if(this.inventoryPanel)return;this.inventoryPanel=document.createElement("div"),this.inventoryPanel.id="inventory-panel",this.inventoryPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #2a2a2a;
      border: 4px solid #5a5a5a;
      padding: 20px;
      width: 280px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 40px rgba(0,0,0,0.8);
    `;const e=document.createElement("h2");e.textContent="Inventory",e.style.cssText="color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(e);const n=document.createElement("div");n.style.cssText=`
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      gap: 2px;
      margin-bottom: 10px;
      background: #1a1a1a;
      padding: 5px;
    `;for(let o=0;o<36;o++){const c=document.createElement("div"),l=t[o]??0,h=l===0?"#333333":"#"+Br(l).toString(16).padStart(6,"0");c.style.cssText=`
        width: 24px;
        height: 24px;
        background: ${h};
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
        transition: background 0.1s;
      `,c.title=l===0?"Empty":zs(l),c.addEventListener("mouseenter",()=>{c.style.background="#"+Math.min(16777215,(parseInt(h.slice(1),16)??0)+2236962).toString(16).padStart(6,"0")}),c.addEventListener("mouseleave",()=>{c.style.background=h}),n.appendChild(c)}this.inventoryPanel.appendChild(n);const i=document.createElement("div");i.textContent="Crafting",i.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(i);const r=document.createElement("div");r.style.cssText=`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;for(let o=0;o<4;o++){const c=document.createElement("div");c.style.cssText=`
        width: 30px;
        height: 30px;
        background: #333333;
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
      `,c.title="Crafting slot",r.appendChild(c)}this.inventoryPanel.appendChild(r);const a=document.createElement("button");a.style.cssText=`
      display: block;
      width: 100%;
      padding: 8px;
      background: #5B3333;
      color: white;
      border: 2px solid #3d0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 12px;
    `,a.textContent="Close (E)",a.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(a),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e,n;if(t.key==="Enter"){const i=this.chatInput.value.trim();i&&(i.startsWith("/")?(e=this.onChat)==null||e.call(this,i):(n=this.onChat)==null||n.call(this,i)),this.closeChatInput(),t.stopPropagation()}t.key==="Escape"&&this.closeChatInput(),t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed"],n=t.slice(1).toLowerCase(),i=e.filter(r=>r.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const r=new Date,a=r.getHours().toString().padStart(2,"0"),o=r.getMinutes().toString().padStart(2,"0"),c=`[${a}:${o}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const u=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${u}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){if(this.craftingPanel)return;this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B8B8B;
      border: 2px solid #2B2B2B;
      padding: 20px;
      width: 300px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
    `;const t=document.createElement("h2");t.textContent="Crafting Table",t.style.cssText="color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.craftingPanel.appendChild(t);const e=[{name:"Wood Planks (4→2 Sticks)",id:"planks_to_sticks",desc:"4 wood planks → 4 sticks"},{name:"Cobblestone (4→Furnace)",id:"cobble_to_furnace",desc:"4 cobblestone → furnace"},{name:"Planks (4→Table)",id:"planks_to_table",desc:"4 wood planks → crafting table"}];for(const i of e){const r=document.createElement("button");r.style.cssText=`
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: #5B8C5A;
        color: white;
        border: 2px solid #3D5A3D;
        border-radius: 2px;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-weight: bold;
      `,r.textContent=i.name,r.title=i.desc,r.addEventListener("click",()=>{var a;(a=this.onCraft)==null||a.call(this,i.id),this.hideCraftingUI()}),this.craftingPanel.appendChild(r)}const n=document.createElement("button");n.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #8B3333;
      color: white;
      border: 2px solid #5B0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `,n.textContent="Close",n.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(n),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t){if(this.chestPanel)return;this.chestPanel=document.createElement("div"),this.chestPanel.id="chest-panel",this.chestPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B6914;
      border: 4px solid #3d2814;
      padding: 20px;
      width: 310px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    `;const e=document.createElement("h2");e.textContent="Chest",e.style.cssText="color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.chestPanel.appendChild(e);const n=document.createElement("div");n.style.cssText=`
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      gap: 2px;
      margin-bottom: 15px;
      background: #2B2B2B;
      padding: 5px;
    `;for(let r=0;r<27;r++){const a=document.createElement("div"),o=t[r]??0,c=o===0?"#444444":"#"+Br(o).toString(16).padStart(6,"0");a.style.cssText=`
        width: 30px;
        height: 30px;
        background: ${c};
        border: 1px solid #1a1a1a;
        border-radius: 2px;
        cursor: pointer;
        transition: background 0.1s;
      `,a.title=o===0?"Empty":zs(o),a.addEventListener("mouseenter",()=>{a.style.background="#"+Math.min(16777215,(parseInt(c.slice(1),16)??0)+2236962).toString(16).padStart(6,"0")}),a.addEventListener("mouseleave",()=>{a.style.background=c}),n.appendChild(a)}this.chestPanel.appendChild(n);const i=document.createElement("button");i.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      background: #5B3333;
      color: white;
      border: 2px solid #3d0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `,i.textContent="Close Chest",i.addEventListener("click",()=>this.hideChestUI()),this.chestPanel.appendChild(i),document.body.appendChild(this.chestPanel)}hideChestUI(){var t;this.chestPanel&&(this.chestPanel.remove(),this.chestPanel=null,(t=this.onChestClose)==null||t.call(this))}isChestOpen(){return this.chestPanel!==null}showSmeltingUI(){if(this.smeltingPanel)return;this.smeltingPanel=document.createElement("div"),this.smeltingPanel.id="smelting-panel",this.smeltingPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B8B8B;
      border: 2px solid #2B2B2B;
      padding: 20px;
      width: 320px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      font-family: Arial, sans-serif;
    `;const t=document.createElement("h2");t.textContent="Furnace",t.style.cssText="color: white; margin: 0 0 15px 0; text-align: center;",this.smeltingPanel.appendChild(t);const e=document.createElement("div");e.style.cssText="display: flex; gap: 15px; margin-bottom: 15px; align-items: center;";const n=document.createElement("div");n.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",n.textContent="Input:";const i=document.createElement("div");i.id="smelt-input",i.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;const r=document.createElement("div");r.appendChild(n),r.appendChild(i);const a=document.createElement("div");a.style.cssText=`
      font-size: 20px;
      color: white;
      animation: pulse 1s infinite;
    `,a.textContent="→";const o=document.createElement("div");o.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",o.textContent="Output:";const c=document.createElement("div");c.id="smelt-output",c.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;const l=document.createElement("div");l.appendChild(o),l.appendChild(c),e.appendChild(r),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const u=document.createElement("div");u.id="smelt-fuel",u.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(h),this.smeltingPanel.appendChild(u);const f=document.createElement("button");f.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px 0 8px 0;
      background: #5B8C5A;
      color: white;
      border: 2px solid #3D5A3D;
      border-radius: 2px;
      cursor: pointer;
      font-weight: bold;
    `,f.textContent="Smelt",f.addEventListener("click",()=>{var g;const y=(g=this.onSmelt)==null?void 0:g.call(this,14,5);y!=null&&this.addChatMessage("",`Smelted item (type ${y})!`,!0)}),this.smeltingPanel.appendChild(f);const m=document.createElement("button");m.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #8B3333;
      color: white;
      border: 2px solid #5B0000;
      border-radius: 2px;
      cursor: pointer;
      font-weight: bold;
    `,m.textContent="Close",m.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(m);const x=document.createElement("style");x.textContent=`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `,document.head.appendChild(x),document.body.appendChild(this.smeltingPanel)}hideSmeltingUI(){this.smeltingPanel&&(this.smeltingPanel.remove(),this.smeltingPanel=null)}isSmeltingOpen(){return this.smeltingPanel!==null}addKillFeedEntry(t,e){this.killFeedEl||(this.killFeedEl=document.createElement("div"),this.killFeedEl.id="killfeed",this.killFeedEl.style.cssText=`
        position: absolute;
        top: 170px;
        right: 12px;
        width: 220px;
        z-index: 500;
      `,document.body.appendChild(this.killFeedEl));const n=document.createElement("div");n.style.cssText=`
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 6px 12px;
      margin-bottom: 4px;
      border-left: 3px solid #ff4444;
      font-family: Arial, sans-serif;
      font-size: 12px;
      animation: fadeOut 5s forwards;
    `,n.innerHTML=`<span style="color: #ffaa00">${this.esc(t)}</span> <span style="color: #999">⚔</span> <span style="color: #ffaa00">${this.esc(e)}</span>`,this.killFeedEl.appendChild(n);const i=this.killFeedEl.querySelectorAll("div");i.length>5&&i[0].remove(),setTimeout(()=>n.remove(),5e3)}addKillFeedDeath(t){this.addKillFeedEntry("You",t)}showPlayerList(t){if(this.playerListPanel)return;this.playerListPanel=document.createElement("div"),this.playerListPanel.id="player-list",this.playerListPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      border: 2px solid #555;
      padding: 20px;
      max-width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 999;
      border-radius: 4px;
    `;const e=document.createElement("h2");e.textContent=`Players Online (${t.length})`,e.style.cssText="color: #fff; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.playerListPanel.appendChild(e);for(const n of t){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #333;
        color: white;
        font-family: Arial, sans-serif;
      `,i.innerHTML=`
        <span>${this.esc(n.name)}</span>
        <span style="color: #888; font-size: 12px;">${n.ping}ms</span>
      `,this.playerListPanel.appendChild(i)}document.body.appendChild(this.playerListPanel)}hidePlayerList(){this.playerListPanel&&(this.playerListPanel.remove(),this.playerListPanel=null)}showEnchantUI(t){if(this.enchantPanel)return;this.enchantPanel=document.createElement("div"),this.enchantPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #6633cc;
      border: 4px solid #3d1f7d;
      padding: 20px;
      width: 300px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(102, 51, 204, 0.6);
    `;const e=document.createElement("h2");e.textContent="Enchanting Table",e.style.cssText="color: #ffff99; margin: 0 0 10px 0; text-align: center; font-family: Arial, sans-serif; font-size: 16px;",this.enchantPanel.appendChild(e);const n=document.createElement("div");n.textContent=`XP Level: ${t}`,n.style.cssText="color: #cccccc; text-align: center; margin-bottom: 15px; font-size: 12px;",this.enchantPanel.appendChild(n);const i=[{type:"sharpness",name:"Sharpness I",desc:"+2 Damage (Cost: 3 XP)",cost:3},{type:"protection",name:"Protection I",desc:"+3 Armor (Cost: 3 XP)",cost:3},{type:"speed",name:"Speed I",desc:"+20% Movement (Cost: 3 XP)",cost:3}];for(const a of i){const o=document.createElement("button");o.style.cssText=`
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: ${t>=a.cost?"#5a4a8a":"#3a2a5a"};
        color: ${t>=a.cost?"#ffff99":"#888888"};
        border: 2px solid #3d1f7d;
        border-radius: 2px;
        cursor: ${t>=a.cost?"pointer":"not-allowed"};
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 12px;
      `,o.textContent=a.name,o.title=a.desc,t>=a.cost&&o.addEventListener("click",()=>{var c;(c=this.onEnchant)==null||c.call(this,a.type),this.hideEnchantUI()}),this.enchantPanel.appendChild(o)}const r=document.createElement("button");r.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #3a2a4a;
      color: #cccccc;
      border: 2px solid #1d0f3d;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `,r.textContent="Close",r.addEventListener("click",()=>this.hideEnchantUI()),this.enchantPanel.appendChild(r),document.body.appendChild(this.enchantPanel)}hideEnchantUI(){this.enchantPanel&&(this.enchantPanel.remove(),this.enchantPanel=null)}isEnchantOpen(){return this.enchantPanel!==null}showTradeUI(t){if(this.tradePanel)return;this.tradePanel=document.createElement("div"),this.tradePanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B7355;
      border: 4px solid #4a3a2a;
      padding: 20px;
      width: 320px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    `;const e=document.createElement("h2");e.textContent="Villager Trades",e.style.cssText="color: #ffff99; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.tradePanel.appendChild(e);for(let i=0;i<t.length;i++){const r=t[i],a=document.createElement("button");a.style.cssText=`
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: #6a5a4a;
        color: #ffff99;
        border: 2px solid #3a2a1a;
        border-radius: 2px;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 12px;
        text-align: left;
      `,a.textContent=`${r.giveName} → ${r.receiveName}`,a.addEventListener("click",()=>{var o;(o=this.onTrade)==null||o.call(this,i),this.hideTradeUI()}),this.tradePanel.appendChild(a)}const n=document.createElement("button");n.style.cssText=`
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #8B3333;
      color: white;
      border: 2px solid #5B0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `,n.textContent="Close",n.addEventListener("click",()=>this.hideTradeUI()),this.tradePanel.appendChild(n),document.body.appendChild(this.tradePanel)}hideTradeUI(){this.tradePanel&&(this.tradePanel.remove(),this.tradePanel=null)}isTradeOpen(){return this.tradePanel!==null}showBossBar(t,e,n){if(!this.bossBarEl){this.bossBarEl=document.createElement("div"),this.bossBarEl.id="boss-bar",this.bossBarEl.style.cssText=`
        position: fixed;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border: 2px solid #ff0000;
        border-radius: 4px;
        z-index: 500;
        font-family: Arial, sans-serif;
        color: white;
      `;const i=document.createElement("div");i.id="boss-name",i.style.cssText=`
        font-weight: bold;
        font-size: 16px;
        color: #ff4444;
        margin-bottom: 5px;
        text-align: center;
      `,i.textContent=t,this.bossBarEl.appendChild(i);const r=document.createElement("div");r.style.cssText=`
        width: 100%;
        height: 20px;
        background: #111;
        border: 1px solid #666;
        border-radius: 2px;
        overflow: hidden;
      `;const a=document.createElement("div");a.id="boss-bar-fill",a.style.cssText=`
        width: 100%;
        height: 100%;
        background: #ff0000;
        transition: width 0.1s;
      `,r.appendChild(a),this.bossBarEl.appendChild(r),document.body.appendChild(this.bossBarEl)}this.updateBossBar(e,n)}updateBossBar(t,e){if(!this.bossBarEl)return;const n=Math.max(0,t/e*100),i=this.bossBarEl.querySelector("#boss-bar-fill");i&&(i.style.width=n+"%")}hideBossBar(){this.bossBarEl&&(this.bossBarEl.remove(),this.bossBarEl=null)}showAchievement(t,e,n){const i=document.createElement("div");i.style.cssText=`
      position: fixed;
      right: 10px;
      top: 50%;
      background: #f0c030;
      color: #000;
      padding: 12px 16px;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      font-family: Arial, sans-serif;
      font-size: 14px;
      z-index: 400;
      min-width: 200px;
      animation: slideInRight 0.3s ease-out;
    `;const r=document.createElement("div");r.innerHTML=`
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">${n}</span>
        <div>
          <div style="font-weight: bold;">${t}</div>
          <div style="font-size: 12px; color: #333; font-style: italic;">${e}</div>
        </div>
      </div>
    `,i.appendChild(r),document.body.appendChild(i),setTimeout(()=>{i.style.animation="slideOutRight 0.3s ease-in",setTimeout(()=>i.remove(),300)},4e3)}showDebugScreen(){this.debugScreenEl||(this.debugScreenEl=document.createElement("div"),this.debugScreenEl.id="debug-screen",this.debugScreenEl.style.cssText=`
      position: fixed;
      left: 5px;
      top: 5px;
      font-family: monospace;
      font-size: 12px;
      color: #7cfc00;
      background: rgba(0, 0, 0, 0.5);
      padding: 8px;
      border-radius: 4px;
      pointer-events: none;
      white-space: pre;
      line-height: 1.4;
      z-index: 200;
    `,document.body.appendChild(this.debugScreenEl),this.debugVisible=!0)}hideDebugScreen(){this.debugScreenEl&&(this.debugScreenEl.remove(),this.debugScreenEl=null),this.debugVisible=!1}isDebugVisible(){return this.debugVisible}updateDebugScreen(t){if(!this.debugScreenEl)return;const e=t.dayTime<.2?"Night":t.dayTime<.3?"Dawn":t.dayTime<.7?"Daytime":t.dayTime<.8?"Dusk":"Night";this.debugScreenEl.textContent=`Minecraft JS ${t.version} (Three.js)
---
FPS: ${Math.round(t.fps)}
XYZ: ${t.x.toFixed(1)} / ${t.y.toFixed(1)} / ${t.z.toFixed(1)}
Facing: ${t.facing}
Biome: ${t.biome}
Block below: ${t.blockBelow}
---
Day: ${(t.dayTime*100).toFixed(0)} (${e})
Weather: ${t.weather}
GameMode: ${t.gameMode}
Mobs: ${t.mobCount}
Blocks: ${t.blockCount}`}hideHUD(){this.hotbarEl.style.display="none",this.topLeftEl.style.display="none",this.topRightEl.style.display="none",this.heartsEl.style.display="none",this.hungerEl.style.display="none",this.timeEl.style.display="none",this.gameModeEl.style.display="none",this.chatMsgsEl.style.display="none",this.blockNameEl.style.display="none",this.xpBarEl&&(this.xpBarEl.style.display="none")}showHUD(){this.hotbarEl.style.display="block",this.topLeftEl.style.display="block",this.topRightEl.style.display="block",this.heartsEl.style.display="flex",this.hungerEl.style.display="flex",this.timeEl.style.display="block",this.gameModeEl.style.display="block",this.chatMsgsEl.style.display="block",this.blockNameEl.style.display="block",this.xpBarEl&&(this.xpBarEl.style.display="block")}}const E_=new Re(.12,.12,.12),S_=128;class b_{constructor(t){D(this,"scene");D(this,"pool",[]);D(this,"active",[]);this.scene=t;for(let e=0;e<S_;e++){const n=new Le({color:16777215,transparent:!0}),i=new ie(E_,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,r,a,o,c,l=1,h=!1){let u=null;for(let f=0;f<this.pool.length;f++)if(!this.pool[f].active){u=this.pool[f];break}u&&(u.active=!0,u.life=0,u.maxLife=c,u.vx=r,u.vy=a,u.vz=o,u.mesh.position.set(t,e,n),u.mesh.scale.setScalar(l),u.mesh.visible=!0,u.mat.color.setHex(i),u.mat.opacity=1,h?(u.mat.emissive.setHex(i),u.mat.emissiveIntensity=.6):u.mat.emissiveIntensity=0,this.active.push(u))}burst(t,e,n,i,r=6){const a=Br(i);for(let o=0;o<r;o++)this.acquire(t+(Math.random()-.5),e+(Math.random()-.5),n+(Math.random()-.5),a,(Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5,.5+Math.random()*.4)}splash(t,e,n,i=8){for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*o,3+Math.random()*2,Math.sin(a)*o,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let r=0;r<i;r++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}magic(t,e,n,i=12){for(let r=0;r<i;r++){const a=Math.random()<.5?11158783:16763904,o=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(o)*c,1+Math.random()*2,Math.sin(o)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let r=0;r<i;r++){const a=Math.random(),o=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,o,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let r=0;r<i;r++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class T_{constructor(){D(this,"ctx",null);D(this,"musicActive",!1);D(this,"musicTimeout",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.5,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.6,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.5,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,r=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=r;const o=e.createGain();o.gain.setValueAtTime(t*.3,e.currentTime+i),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(o),o.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.12,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=300,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),r.gain.setValueAtTime(.06,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(r),r.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=200,o.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(o),o.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),r=t.createBuffer(1,i,n),a=r.getChannelData(0);for(let o=0;o<i;o++)a[o]=Math.random()*2-1;return r}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let r=0;const a=()=>{if(!this.musicActive)return;const o=e.createOscillator(),c=e.createGain();o.type=t==="disc_blue"?"square":"sine",o.frequency.value=i[r%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),o.connect(c),c.connect(e.destination),o.start(),o.stop(e.currentTime+.5),r++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}}class w_{constructor(t){D(this,"scene");D(this,"drops",[]);D(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const r=A_[i]??16777215,a=new Re(.35,.35,.35),o=new Le({color:r}),c=new ie(a,o);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const r=C_[t];if(r){for(const a of r)if(Math.random()<a.chance){const o=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<o;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup,r=[];for(let a=0;a<this.drops.length;a++){const o=this.drops[a];o.life-=t,o.bobOffset+=t*2,o.mesh.position.y=o.y+Math.sin(o.bobOffset)*.12,o.mesh.rotation.y+=t*1.5;const c=e.x-o.x,l=e.z-o.z,h=e.y-o.y;Math.sqrt(c*c+h*h+l*l)<1.5?(i==null||i(o.type),r.push(a)):o.life<=0&&r.push(a)}for(let a=r.length-1;a>=0;a--){const o=this.drops[r[a]];this.scene.remove(o.mesh),o.mesh.material.dispose(),o.mesh.geometry.dispose(),this.drops.splice(r[a],1)}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const A_={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},C_={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]};class R_{constructor(t){D(this,"canvas");D(this,"ctx");D(this,"container");D(this,"updateTimer",0);D(this,"world");D(this,"RADIUS",32);D(this,"CANVAS_SIZE",128);D(this,"UPDATE_INTERVAL",.3);if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,r){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,r))}drawMap(t,e,n,i){this.drawEmptyMap();const r=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,o=this.CANVAS_SIZE/(this.RADIUS*2),c=Math.floor(t.x)-this.RADIUS,l=Math.floor(t.x)+this.RADIUS,h=Math.floor(t.z)-this.RADIUS,u=Math.floor(t.z)+this.RADIUS;for(let y=c;y<=l;y++)for(let g=h;g<=u;g++){let p=0;for(let I=40;I>=0;I--){const P=this.world.getBlockType(y,I,g);if(P!==void 0){p=P;break}}if(p===0)continue;const A=so[p],b=(A==null?void 0:A.color)??16777215,R=r+(y-t.x)*o,B=a+(g-t.z)*o;this.ctx.fillStyle=`#${b.toString(16).padStart(6,"0")}`,this.ctx.fillRect(R-o/2,B-o/2,o,o)}for(const y of i){if(!y.alive)continue;const g=r+(y.x-t.x)*o,p=a+(y.z-t.z)*o;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(g,p,2,0,Math.PI*2),this.ctx.fill()}for(const y of n){const g=r+(y.x-t.x)*o,p=a+(y.z-t.z)*o;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(g,p,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(r,a,3,0,Math.PI*2),this.ctx.fill();const f=6,m=r+Math.sin(e)*f,x=a+Math.cos(e)*f;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(r,a),this.ctx.lineTo(m,x),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class P_{constructor(t,e){D(this,"scene");D(this,"sounds");D(this,"type","clear");D(this,"rainParticles",null);D(this,"rainPositions",null);D(this,"rainVelY",null);D(this,"rainCount",2e3);D(this,"thunderTimer",0);D(this,"thunderFlash",!1);D(this,"nextThunder",15);D(this,"rainSoundTimer",0);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new gn,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let r=0;r<this.rainCount;r++)e[r*3]=(Math.random()-.5)*80,e[r*3+1]=Math.random()*30+5,e[r*3+2]=(Math.random()-.5)*80,n[r]=15+Math.random()*5;t.setAttribute("position",new sn(e,3));const i=new Ya({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new Ph(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles)}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;for(let r=0;r<this.rainCount;r++)i[r*3+1]-=this.rainVelY[r]*t,i[r*3+1]<-2&&(i[r*3]=(Math.random()-.5)*80,i[r*3+1]=30+Math.random()*5,i[r*3+2]=(Math.random()-.5)*80);this.rainParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}dispose(){this.stopRain()}}class L_{constructor(t){D(this,"scene");D(this,"orbs",[]);D(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const r=new In(.2,6,6),a=new jn({color:8978244}),o=new ie(r,a);o.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(o),this.orbs.push({mesh:o,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t;const r=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,o=i.mesh.position.z-e.z,c=r*r+a*a+o*o;i.mesh.position.y+=Math.sin(i.life*5)*.01,c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(dist<1.5&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.orbs=[]}}const I_=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class D_{constructor(){D(this,"achievements");D(this,"counters",new Map);D(this,"onUnlock",null);this.achievements=new Map(I_.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const r=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",r),r<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class U_{constructor(){D(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0})}increment(t,e=1){this.stats[t]+=e}get(t){return this.stats[t]}getAll(){return{...this.stats}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");t&&(this.stats={...this.stats,...JSON.parse(t)})}catch{}}}const Ne=new Ch({antialias:!1});Ne.setPixelRatio(Math.min(window.devicePixelRatio,1));Ne.setSize(window.innerWidth,window.innerHeight);Ne.shadowMap.enabled=!0;Ne.shadowMap.type=Jh;Ne.toneMapping=Yn;Ne.toneMappingExposure=1.1;document.body.appendChild(Ne.domElement);window.addEventListener("resize",()=>{Ln.aspect=window.innerWidth/window.innerHeight,Ln.updateProjectionMatrix(),Ne.setSize(window.innerWidth,window.innerHeight)});const re=new rg;re.background=new Nt(8900331);re.fog=new $a(8900331,55,96);const Ln=new ln(75,window.innerWidth/window.innerHeight,.1,120);let na=!1,$l=50;const O_=240;let Ge=.25;const kn={night:new Nt(328976),dawn:new Nt(16737843),day:new Nt(8900331),dusk:new Nt(16729122)},zn={night:new Nt(328976),dawn:new Nt(16746564),day:new Nt(8900331),dusk:new Nt(16737843)},N_=new In(4,12,12),F_=new jn({color:16777215}),us=new ie(N_,F_);re.add(us);const B_=new In(2.5,12,12),k_=new jn({color:14540287}),fs=new ie(B_,k_);re.add(fs);const Hh=new gn,Gh=1200,Hr=new Float32Array(Gh*3);for(let s=0;s<Gh;s++){const t=Math.random()*Math.PI*2,e=Math.acos(2*Math.random()-1),n=180;Hr[s*3]=n*Math.sin(e)*Math.cos(t),Hr[s*3+1]=n*Math.abs(Math.cos(e)),Hr[s*3+2]=n*Math.sin(e)*Math.sin(t)}Hh.setAttribute("position",new sn(Hr,3));const Pa=new Ya({color:16777215,size:.6,sizeAttenuation:!1}),Vh=new Ph(Hh,Pa);re.add(Vh);const La=[],z_=new Le({color:16777215,transparent:!0,opacity:.82});for(let s=0;s<18;s++){const t=8+Math.random()*14,e=5+Math.random()*8,n=new Re(t,1.2,e),i=new ie(n,z_);i.position.set((Math.random()-.5)*200,28+Math.random()*8,(Math.random()-.5)*200),i.castShadow=!1,re.add(i),La.push(i)}const Wh=new ug(16777215,.5);re.add(Wh);const An=new Ih(16774368,1.4);An.castShadow=!0;An.shadow.mapSize.set(512,512);An.shadow.camera.near=.5;An.shadow.camera.far=300;An.shadow.camera.left=An.shadow.camera.bottom=-110;An.shadow.camera.right=An.shadow.camera.top=110;re.add(An);const Ia=new Ih(3359846,.3);re.add(Ia);const Xh=new lg(8900331,4881482,.3);re.add(Xh);const _i=new Nt,is=new Nt;let ia=0;function H_(s){Ge=(Ge+s/O_)%1;const t=(Ge-.25)*Math.PI*2,e=t+Math.PI,n=150;us.position.set(0,Math.sin(t)*n,Math.cos(t)*n),fs.position.set(0,Math.sin(e)*n,Math.cos(e)*n),An.position.copy(us.position).normalize().multiplyScalar(100),Ia.position.copy(fs.position).normalize().multiplyScalar(100);for(const c of La)c.position.x=(c.position.x+.015*s*20)%200-100;if(ia++,ia<3)return;ia=0;let i,r;const a=Ge;if(a<.2){const c=a/.2;_i.copy(kn.night).lerp(kn.dawn,c),is.copy(zn.night).lerp(zn.dawn,c),i=.05+c*.8,r=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;_i.copy(kn.dawn).lerp(kn.day,c),is.copy(zn.dawn).lerp(zn.day,c),i=.85+c*.55,r=.5+c*.1}else if(a<.7)_i.copy(kn.day),is.copy(zn.day),i=1.4,r=.6;else if(a<.8){const c=(a-.7)/.1;_i.copy(kn.day).lerp(kn.dusk,c),is.copy(zn.day).lerp(zn.dusk,c),i=1.4-c*1.35,r=.6-c*.55}else{const c=(a-.8)/.2;_i.copy(kn.dusk).lerp(kn.night,c),is.copy(zn.dusk).lerp(zn.night,c),i=.05,r=.05}Ne.setClearColor(_i),re.background=_i,re.fog.color.copy(is),An.intensity=i,Wh.intensity=Math.max(r,.04),Ia.intensity=Math.max(.35-i*.2,0),Xh.intensity=r*.5,Pa.opacity=Math.max(0,1-i*1.5),Pa.transparent=!0;const o=Math.sin(t)>0;us.visible=o,fs.visible=!o;for(const c of La)c.material.opacity=r>.2?.82:0}const ne=new Aa(re),G=new vg(Ln,ne,re),j=new M_;let Hs=null;Nh()&&(Hs=new xg(G.getKeys(),()=>G.breakBlockNow(),()=>G.placeBlockNow()),Hs.onLookDelta=(s,t)=>{G.yaw-=s*.004,G.pitch-=t*.004,G.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,G.pitch))},Hs.hide());const Vn=new b_(re),xe=new T_,Da=new w_(re),Ua=new L_(re);let Oa=null;const os=new P_(re,xe);let oe=null,ue=null,bi=!0,yi="",En=null,Bs=0,un=0;const Mi=new D_;let sa=!1;const Yl=[1,1,1,3,3,10,10,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],as=[];let ye=null;const Na=new $s;Na.far=5;const G_=new $s;G_.far=1;let He=20,Sn=20,Hn=0,ra=0,Pr=new N,oa=0,aa=0;const Lr={sharpness:0,protection:0,speed:0};let Gs=0;const ql=5,Ri=new U_;Ri.load();let ca=0;const V_=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let Ir=0,Gr=!1,ss=[];const W_=60;let Vs="You died",Dr=new N,la=0,jl=!1;function X_(s,t){var i,r,a,o,c;const e=s.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const l=(i=e[1])==null?void 0:i.toLowerCase();return l==="creative"||l==="survival"||l==="spectator"?(G.setGameMode(l),j.setGameMode(l),l==="survival"&&(He=20,j.updateHunger(He,Sn)),j.addChatMessage("",`Gamemode set to ${l}`,!0),oe==null||oe.sendGameMode(l),!0):(j.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return G.setGameMode("spectator"),j.setGameMode("spectator"),j.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return G.takeDamage(G.maxHealth),!0;if(n==="/heal")return G.health=G.maxHealth,j.updateHearts(G.maxHealth,G.maxHealth),j.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return He=Sn,j.updateHunger(He,Sn),j.addChatMessage("","Fed to full!",!0),!0;if(n==="/time"){const l=(r=e[1])==null?void 0:r.toLowerCase();return l==="day"?(Ge=.3,j.addChatMessage("","Set time to day",!0),!0):l==="night"?(Ge=0,j.addChatMessage("","Set time to night",!0),!0):l==="sunrise"?(Ge=.22,j.addChatMessage("","Set time to sunrise",!0),!0):l==="sunset"?(Ge=.75,j.addChatMessage("","Set time to sunset",!0),!0):(j.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const l=parseFloat(e[1]??"0"),h=parseFloat(e[2]??"0");return!isNaN(l)&&!isNaN(h)?(G.spawnAt(l,h),j.addChatMessage("",`Teleported to ${l.toFixed(1)}, ${h.toFixed(1)}`,!0)):j.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return j.showCraftingUI(),!0;if(n==="/weather"){const l=(a=e[1])==null?void 0:a.toLowerCase();return l==="clear"||l==="rain"||l==="thunder"?(os.setWeather(l),j.addChatMessage("",`Weather set to ${l}`,!0),!0):(j.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const l=(o=e[1])==null?void 0:o.toLowerCase();return l==="enter"?(G.spawnAt(G.position.x,G.position.z),G.position.y=30,re.fog.color.copy(new Nt(16729088)),re.background=new Nt(2228224),j.addChatMessage("","Entered the Nether!",!0),!0):l==="exit"?(G.spawnAt(G.position.x,G.position.z),re.fog.color.copy(new Nt(8900331)),re.background=new Nt(8900331),j.addChatMessage("","Exited the Nether!",!0),!0):(j.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return En=ue==null?void 0:ue.spawnAt("enderdragon",G.position.x,G.position.y+15,G.position.z-20),j.addChatMessage("","☠ The Ender Dragon awakens!",!0),j.showBossBar("Ender Dragon",(En==null?void 0:En.maxHealth)??200,200),!0;if(n==="/achievements")return Mi.getAll().forEach(l=>{j.addChatMessage("",`${l.unlocked?"✅":"⬜"} ${l.icon} ${l.name}: ${l.description}`,!0)}),!0;if(n==="/save")return bi?(ne.saveToStorage(),j.addChatMessage("","World saved!",!0)):j.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load")return bi?(ne.loadFromStorage(),j.addChatMessage("","World loaded!",!0)):j.addChatMessage("","Load only works in singleplayer",!0),!0;if(n==="/tame"){const l=(c=e[1])==null?void 0:c.toLowerCase();if(l==="wolf"||l==="cat"){const h=(ue==null?void 0:ue.getMobsByType(l))??[];for(const{id:u,mob:f}of h)if(G.position.distanceTo(f.group.position)<=5)return f.data.state="tamed",j.addChatMessage("",`Tamed a ${l}!`,!0),xe.play("eat"),!0;j.addChatMessage("",`No ${l} found nearby`,!0)}else j.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const l=Ri.getAll();return j.addChatMessage("","--- Statistics ---",!0),j.addChatMessage("",`Kills: ${l.kills}`,!0),j.addChatMessage("",`Deaths: ${l.deaths}`,!0),j.addChatMessage("",`Blocks Placed: ${l.blocksPlaced}`,!0),j.addChatMessage("",`Blocks Broken: ${l.blocksBroken}`,!0),j.addChatMessage("",`Mobs Killed: ${l.mobsKilled}`,!0),j.addChatMessage("",`Distance Traveled: ${l.distanceTraveled.toFixed(1)}m`,!0),j.addChatMessage("",`Play Time: ${Math.floor(l.playTime/60)}m ${Math.floor(l.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(l=>j.addChatMessage("",l,!0)),!0):(j.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const $_=document.getElementById("loginScreen"),Zr=document.getElementById("nameInput"),Y_=document.getElementById("playBtn"),Fa=document.getElementById("hud");async function Za(s){var n,i;yi=s.trim()||`Player${Math.floor(Math.random()*999)}`,bi=(((n=window.__getSelectedMode)==null?void 0:n.call(window))??"sp")==="sp",$_.style.display="none",Fa.style.display="block",Hs&&Hs.show(),bi&&(ne.loadFromStorage(),ne.initializeTorchLights()),G.spawnAt(0,0),Nh()||setTimeout(()=>document.body.requestPointerLock(),200),G.onHealthChanged=r=>j.updateHearts(r,G.maxHealth),G.setDeathCause=r=>{Vs=r},G.onDied=()=>{Dr.copy(G.position),j.showDeath(Vs,Dr.x,Dr.y,Dr.z,un),j.addChatMessage("","☠ You died!",!0),xe.play("hurt")},G.onOpenChat=()=>{j.openChatInput(),G.setChatOpen(!0)},Mi.onUnlock=r=>{j.showAchievement(r.name,r.description,r.icon),xe.play("eat")},G.onRightClick=()=>{if(G.selectedBlockType===33){if(ye){if(re.remove(ye.mesh),ye.mesh.geometry.dispose(),ye.mesh.material.dispose(),ye.inWater){const r=["Salmon","Cod","Tropical Fish","Pufferfish"],a=r[Math.floor(Math.random()*r.length)];j.addChatMessage("",`You caught a ${a}!`,!0),He=Math.min(Sn,He+2),j.updateHunger(He,Sn),xe.play("eat")}ye=null}else{const r=Ur.set(0,0,-1).applyAxisAngle(Or,G.camera.rotation.x).applyAxisAngle(Nr,G.camera.rotation.y),a=new In(.15,8,8),o=new jn({color:26316}),c=new ie(a,o);c.position.copy(G.position),c.position.y+=.6,re.add(c),ye={mesh:c,vel:r.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},G.onBreakBlock=(r,a,o)=>{const c=ne.getBlock(r,a,o);if(c){if(Ri.increment("blocksBroken"),Mi.trigger("first_block"),c.type===24){let l=0;const h=setInterval(()=>{if(l%2===0&&Vn.burst(r,a,o,24),l++,l>8){clearInterval(h),Vn.explosion(r,a,o,30);const u=5;for(let m=-u;m<=u;m++)for(let x=-u;x<=u;x++)for(let y=-u;y<=u;y++)if(Math.sqrt(m*m+x*x+y*y)<=u){const p=Math.round(r)+m,A=Math.round(a)+x,b=Math.round(o)+y,R=ne.getBlock(p,A,b);R&&(ne.removeBlock(p,A,b),Vn.burst(p,A,b,R.type))}Math.sqrt(Math.pow(G.position.x-r,2)+Math.pow(G.position.y-a,2)+Math.pow(G.position.z-o,2))<7&&G.gameMode==="survival"&&(G.takeDamage(6),j.updateHearts(G.health,G.maxHealth)),xe.play("break")}},500);return}c.type===56&&ne.removeTorchLight(r,a,o),c.type===59&&ne.deactivateLamp(r,a,o),Vn.burst(r,a,o,c.type),xe.play("break"),oe==null||oe.sendRemoveBlock(r,a,o)}},G.onPlaceBlock=(r,a,o,c)=>{Ri.increment("blocksPlaced"),c===56&&ne.addTorchLight(r,a+.5,o),xe.play("place"),oe==null||oe.sendAddBlock(r,a,o,c)},Ua.onCollect=r=>{Bs+=r;const a=un;for(;Bs>=(un+1)*10;)un++;j.updateXP(Bs,un),un>a&&(xe.play("eat"),j.addChatMessage("",`Level Up! Level ${un}`,!0))},j.onEnchant=r=>{un>=3?(un-=3,Bs-=3*10,j.updateXP(Bs,un),r==="sharpness"?(Lr.sharpness=1,j.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):r==="protection"?(Lr.protection=1,j.addChatMessage("","Applied Protection I (+3 armor)!",!0)):r==="speed"&&(Lr.speed=1,j.addChatMessage("","Applied Speed I (+20% movement)!",!0)),xe.play("eat")):j.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",r=>{if(!document.pointerLockElement)return;if(r.button===2){const c={69:"disc_green",70:"disc_red",71:"disc_blue"}[G.selectedBlockType];c&&(xe.isMusicPlaying()?xe.stopMusic():xe.playMusic(c));return}if(r.button!==0)return;if(G.selectedBlockType===32){const o=Ur.set(0,0,-1).applyAxisAngle(Or,G.camera.rotation.x).applyAxisAngle(Nr,G.camera.rotation.y),c=new Re(.05,.05,.4),l=new jn({color:16768324}),h=new ie(c,l);h.position.copy(G.position),h.position.y+=.6,re.add(h),as.push({mesh:h,vel:o.multiplyScalar(30),life:10}),xe.play("hit");return}Na.setFromCamera(new jt(0,0),Ln);const a=ue==null?void 0:ue.tryAttack(Na,Lr);if(a){xe.play("hit"),Mi.trigger("first_mob");const o=ue==null?void 0:ue.getMob(a.mobId);if(o&&!o.alive){Da.spawnFromMob(o.type,o.targetPos.x,o.targetPos.y,o.targetPos.z);const c={pig:3,chicken:2,cow:5,sheep:3,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},l=o.type.toLowerCase(),h=c[l]||1;Ua.spawn(o.targetPos.x,o.targetPos.y,o.targetPos.z,h),o.type==="zombie"&&Mi.trigger("kill_zombie"),o.type==="creeper"&&Mi.trigger("kill_creeper"),o.type==="enderdragon"&&Mi.trigger("kill_dragon"),j.addKillFeedDeath(o.type)}bi||oe==null||oe.sendAttackMob(a.mobId,a.damage)}}),document.addEventListener("mousedown",r=>{r.button===2&&G.selectedBlockType===72&&(r.preventDefault(),na=!0,Ln.fov=65,Ln.updateProjectionMatrix())}),document.addEventListener("mouseup",r=>{r.button===2&&(na=!1,Ln.fov=75,Ln.updateProjectionMatrix())}),document.addEventListener("contextmenu",r=>{document.pointerLockElement&&r.preventDefault()}),document.addEventListener("keydown",r=>{if(r.key==="e"||r.key==="E"){if(!document.pointerLockElement||j.isChatOpen())return;r.preventDefault();const a=Ur.set(0,0,-1).applyAxisAngle(Or,G.camera.rotation.x).applyAxisAngle(Nr,G.camera.rotation.y).normalize(),o=ne.raycastBlock(G.position,a,5);if(o){const c=ne.getBlock(o.x,o.y,o.z);if(c&&c.type===40)if(un>=5){j.showEnchantUI(un);return}else{j.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(c&&c.type===34){Ge>.7||Ge<.25?(j.addChatMessage("","Sleeping...",!0),Ge=.25,G.health=Math.min(G.maxHealth,G.health+3),He=Math.min(Sn,He+4),j.updateHearts(G.health,G.maxHealth),j.updateHunger(He,Sn),xe.play("eat"),setTimeout(()=>{j.addChatMessage("","You woke up!",!0)},2e3)):j.addChatMessage("","You can only sleep at night!",!0);return}}if(ue){const c=new $s;c.setFromCamera(new jt(0,0),Ln),c.far=3;const l=ue.getAllMobsForDisplay(),h=[];for(const{id:f,mob:m}of l)m.type==="villager"&&m.group.traverse(x=>{x.isMesh&&h.push({mesh:x,mobId:f,type:m.type})});const u=c.intersectObjects(h.map(f=>f.mesh));if(u.length>0){const f=u[0];if(h.find(x=>x.mesh===f.object)){const x=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];j.showTradeUI(x),j.onTrade=y=>{j.addChatMessage("","Trade accepted!",!0)};return}}}sa?(j.hideInventory(),sa=!1,document.body.requestPointerLock()):(j.showInventory(Yl),sa=!0,document.exitPointerLock())}}),document.addEventListener("keydown",r=>{if(r.key==="Tab"&&document.pointerLockElement&&(r.preventDefault(),oe&&oe.room)){const a=[];oe.room.state.players.forEach(o=>{a.push({name:o.name,ping:0})}),j.showPlayerList(a)}}),document.addEventListener("keyup",r=>{r.key==="Tab"&&j.hidePlayerList()});let e=!0;if(document.addEventListener("keydown",r=>{(r.key==="F1"||r.key==="f1")&&(r.preventDefault(),e=!e,e?j.showHUD():j.hideHUD())}),document.addEventListener("keydown",r=>{if(r.key==="F2"||r.key==="f2"){r.preventDefault();try{const a=Ne.domElement.toDataURL("image/png"),o=document.createElement("a");o.href=a,o.download="minecraft-"+Date.now()+".png",o.click(),j.addChatMessage("","Screenshot saved!",!0)}catch{j.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("keydown",r=>{(r.key==="F3"||r.key==="f3")&&(r.preventDefault(),Gr=!Gr,Gr?j.showDebugScreen():j.hideDebugScreen())}),document.addEventListener("keydown",r=>{if((r.key==="e"||r.key==="E")&&Fa.style.display!=="none"){let a=null;for(let h=-5;h<=5;h++){for(let u=-5;u<=5;u++){for(let f=-5;f<=5;f++){const m=Math.floor(G.position.x)+h,x=Math.floor(G.position.y)+u,y=Math.floor(G.position.z)+f,g=ne.getBlock(m,x,y);if(g&&g.type===23&&G.position.distanceTo(Zl.set(m+.5,x+.5,y+.5))<=5){a=[m,x,y];break}}if(a)break}if(a)break}if(a){j.showSmeltingUI();return}const o=Ur.set(0,0,-1).applyAxisAngle(Or,G.camera.rotation.x).applyAxisAngle(Nr,G.camera.rotation.y),c=new $s(G.position,o);c.far=2;let l=null;for(let h=-2;h<=2;h++){for(let u=-2;u<=2;u++){for(let f=-2;f<=2;f++){const m=Math.floor(G.position.x)+h,x=Math.floor(G.position.y)+u,y=Math.floor(G.position.z)+f,g=ne.getBlock(m,x,y);if(g&&g.type===58&&G.position.distanceTo(Zl.set(m+.5,x+.5,y+.5))<=2){l=[m,x,y];break}}if(l)break}if(l)break}l&&(ne.toggleLever(l[0],l[1],l[2]),xe.play("place"))}}),j.onChat=r=>{r.startsWith("/")?X_(r):bi?j.addChatMessage(yi,r):oe==null||oe.sendChat(r),G.setChatOpen(!1)},j.onSmelt=(r,a)=>{const o=V_.get(r);return o?(Yl.push(o),j.addChatMessage("",`Smelted: ${zs(o)}`,!0),xe.play("eat"),o):null},j.onCraft=r=>{j.addChatMessage("",`Crafted: ${r}`,!0)},j.onRespawn=()=>{G.respawn(),He=Sn,j.updateHearts(G.maxHealth,G.maxHealth),j.updateHunger(He,Sn),oe==null||oe.sendRespawn(),setTimeout(()=>document.body.requestPointerLock(),150)},j.updateHearts(G.health,G.maxHealth),j.updateHunger(He,Sn),j.setGameMode(G.gameMode),document.addEventListener("wheel",r=>{const a=r.deltaY>0?1:-1,c=(Ti.indexOf(G.selectedBlockType)+a+Ti.length)%Ti.length;G.selectedBlockType=Ti[c],j.selectSlot(c)}),Da.onPickup=r=>{xe.play("eat"),j.addChatMessage("","Picked up: "+r,!0),(r==="iron_helmet"||r==="iron_chestplate"||r==="iron_leggings"||r==="iron_boots")&&(G.armor=Math.min(20,G.armor+5),j.addChatMessage("",`Armor: ${(G.armor/20*100).toFixed(0)}%`,!0))},bi){j.setConnectionStatus("connected"),j.updatePlayerCount(1),ue=new Xl(re,ne,{onPlayerDamage:r=>{if(Vs="You were killed by a mob",G.gameMode==="survival"){let a=r;na&&$l>0&&(a=Math.ceil(r*.2),$l--),G.takeDamage(a),xe.play("hurt"),j.updateHearts(G.health,G.maxHealth),G.health<=0&&j.showDeath()}},getPlayerPos:()=>G.position,onExplosion:(r,a,o,c)=>{for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++)if(Math.sqrt(h*h+u*u+f*f)<=c){const x=Math.round(r)+h,y=Math.round(a)+u,g=Math.round(o)+f,p=ne.getBlock(x,y,g);p&&(ne.removeBlock(x,y,g),Vn.burst(x,y,g,p.type))}xe.play("break");const l=Ne.domElement.style.filter;Ne.domElement.style.filter="brightness(1.2)",setTimeout(()=>{Ne.domElement.style.filter=l},80)},onWitherEffect:()=>{Gs=ql}},!0);for(let r=0;r<10;r++)ue.spawnRandom(0,0);Oa=new R_(ne),j.addChatMessage("",`Welcome, ${yi}! 🌍 Singleplayer`,!0),j.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0)}else{const r=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":"159.223.140.36:8471",a=((i=window.__getServerAddr)==null?void 0:i.call(window))??r;oe=new __(re,ne,{onStatusChange:o=>j.setConnectionStatus(o),onChat:(o,c,l)=>j.addChatMessage(o,c,l),onPlayerCount:o=>j.updatePlayerCount(o),onPlayerDamage:o=>{G.takeDamage(o),xe.play("hurt"),j.updateHearts(G.health,G.maxHealth)},onPlayerDied:o=>{j.addChatMessage("",`☠ ${o} was slain!`,!0),o===yi&&j.showDeath()}},a),ue=new Xl(re,ne,{onPlayerDamage:()=>{},getPlayerPos:()=>G.position,onExplosion:(o,c,l,h)=>{for(let f=-h;f<=h;f++)for(let m=-h;m<=h;m++)for(let x=-h;x<=h;x++)if(Math.sqrt(f*f+m*m+x*x)<=h){const g=Math.round(o)+f,p=Math.round(c)+m,A=Math.round(l)+x,b=ne.getBlock(g,p,A);b&&(ne.removeBlock(g,p,A),Vn.burst(g,p,A,b.type))}xe.play("break");const u=Ne.domElement.style.filter;Ne.domElement.style.filter="brightness(1.2)",setTimeout(()=>{Ne.domElement.style.filter=u},80)},onWitherEffect:()=>{Gs=ql}},!1),oe.setMobManager(ue),oe.setLocalStateGetter(()=>G.getState()),await oe.join(yi),j.addChatMessage("",`Welcome, ${yi}! 🌐 Multiplayer`,!0),j.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}Y_.addEventListener("click",()=>Za(Zr.value));Zr.addEventListener("keydown",s=>{s.key==="Enter"&&Za(Zr.value)});const ha=new URLSearchParams(window.location.search).get("name");ha&&(Zr.value=ha,setTimeout(()=>Za(ha),800));let Kl=performance.now();const q_=new N,j_=new Nt(16777215),Ur=new N,Zl=new N,Or=new N(1,0,0),Nr=new N(0,1,0),da=[];function $h(){var e,n,i;requestAnimationFrame($h);const s=performance.now(),t=Math.min((s-Kl)/1e3,.05);if(Kl=s,t>0){const r=1/t;ss.push(r),ss.length>W_&&ss.shift()}if(Fa.style.display!=="none"){if(G.update(t),oe==null||oe.updatePlayers(t),H_(t),ue&&(ue.dayTime=Ge,ue.update(t)),Vn.update(t),os.update(t,G.position,re.fog.color),Da.update(t,G.position),Ua.update(t,G.position),Gs>0&&(Gs-=t),Ri.increment("playTime",t),G.velocity&&Ri.increment("distanceTraveled",G.velocity.length()*t),ca+=t,ca>=60&&(ca=0,Ri.save()),oa+=t,oa>.1&&(oa=0,ne.checkPressurePlate(G.position)),aa+=t,aa>30&&(aa=0,G.position.y<10&&xe.playAmbient("cave")),ye){ye.vel.y-=20*t,ye.mesh.position.addScaledVector(ye.vel,t);const a=Math.round(ye.mesh.position.x),o=Math.round(ye.mesh.position.y),c=Math.round(ye.mesh.position.z);ne.getBlockType(a,o,c)===7&&!ye.inWater&&(ye.inWater=!0,ye.vel.set(0,0,0),ye.mesh.position.y=o+.5),ye.inWater&&(ye.waitTimer-=t,ye.mesh.position.y=o+.5+Math.sin(performance.now()*.003)*.1,ye.waitTimer<=0&&(ye.mesh.material.color.set(16776960),setTimeout(()=>{ye!=null&&ye.mesh.material&&ye.mesh.material.color.set(26316)},300)))}for(let a=as.length-1;a>=0;a--){const o=as[a];o.life-=t,o.vel.y-=20*t,o.mesh.position.addScaledVector(o.vel,t);const c=Math.round(o.mesh.position.x),l=Math.round(o.mesh.position.y),h=Math.round(o.mesh.position.z);if(ne.hasBlock(c,l,h)){re.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),as.splice(a,1);continue}let u=!1;if(ue)for(const f of ue.iterMobs()){const m=f.mob;if(o.mesh.position.distanceTo(q_.set(m.targetPos.x,m.targetPos.y,m.targetPos.z))<.8&&m.alive){m.health-=5,m.showDamage(m.health),m.health<=0&&m.die(),re.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),as.splice(a,1),u=!0,xe.play("hit");break}}o.life<=0&&!u&&(re.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),as.splice(a,1))}if(Oa){const a=[];if(oe&&oe.getPlayerData&&(((e=oe.getPlayerData)==null?void 0:e.call(oe))??[]).forEach(c=>{c.name!==yi&&a.push({x:c.x,z:c.z})}),da.length=0,ue)for(const o of ue.iterMobs())da.push({x:o.mob.targetPos.x,z:o.mob.targetPos.z,alive:o.mob.alive});Oa.update(t,G.position,G.getYaw(),a,da)}if(En&&En.alive?j.updateBossBar(En.health,En.maxHealth):En&&!En.alive&&(j.hideBossBar(),En=null),Gs>0?j.updateHearts(G.health,G.maxHealth,!0):j.updateHearts(G.health,G.maxHealth,!1),G.gameMode==="survival"){const a=G.position.x-Pr.x,o=G.position.y-Pr.y,c=G.position.z-Pr.z,l=Math.sqrt(a*a+o*o+c*c);Pr.copy(G.position),l>.1&&(ra+=t,ra>1.5&&(ra=0,He=Math.max(0,He-.5),j.updateHunger(Math.ceil(He*2)/2,Sn))),He>=16&&G.health<G.maxHealth&&(Hn+=t,Hn>4&&(Hn=0,G.health=Math.min(G.maxHealth,G.health+1),j.updateHearts(G.health,G.maxHealth))),He<=0&&(Vs="You starved",Hn+=t,Hn>4&&(Hn=0,G.health>1&&G.takeDamage(1),j.updateHearts(G.health,G.maxHealth)))}if(G.gameMode==="survival"){const a=Math.round(G.position.x),o=Math.round(G.position.y),c=Math.round(G.position.z),l=ne.getBlock(a,o,c);l&&l.type===47&&(Vs="You burned in lava",Hn+=t,Hn>.5&&(Hn=0,G.takeDamage(2),j.updateHearts(G.health,G.maxHealth)))}if(Ir<.22&&Ge>=.22&&(j.addChatMessage("","Dawn breaks...",!0),xe.playAmbient("birds")),Ir<.73&&Ge>=.73&&(j.addChatMessage("","Night falls... watch out for monsters!",!0),xe.playAmbient("wind")),Ir<.95&&Ge>=.95&&ue&&Math.random()<.5){const a=3+Math.floor(Math.random()*3);for(let o=0;o<a;o++){const c=Math.random()*Math.PI*2,l=20+Math.random()*15,h=G.position.x+Math.cos(c)*l,u=G.position.z+Math.sin(c)*l,f=ne.getSurfaceHeight(Math.round(h),Math.round(u))+1.5,m=Math.random()<.5?"zombie":"skeleton";ue.spawnMob(m,h,f,u)}}Ir=Ge,j.updatePosition(G.position.x,G.position.y,G.position.z),j.updateTime(Ge),us.position.x+=(G.position.x-us.position.x)*.02,fs.position.x+=(G.position.x-fs.position.x)*.02,Vh.position.set(G.position.x,0,G.position.z),os.isThunderFlashing()&&Ne.setClearColor(j_);const r=((n=ne.getBlock(Math.round(G.position.x),Math.round(G.position.y),Math.round(G.position.z)))==null?void 0:n.type)===7;if(r&&!jl&&Vn.splash(G.position.x,G.position.y,G.position.z,12),jl=r,la+=t,la>1&&(la=0,ne.isNearBlock(Math.round(G.position.x),Math.round(G.position.y),Math.round(G.position.z),55,5)&&Vn.smoke(G.position.x,G.position.y+1,G.position.z,2)),Gr){const a=ss.length>0?ss.reduce((p,A)=>p+A,0)/ss.length:0,c=(G.getYaw()*180/Math.PI+360)%360;let l="Unknown";c<45||c>=315?l="South (0°)":c<135?l="West (90°)":c<225?l="North (180°)":l="East (270°)";const h="Unknown",u=Math.round(G.position.y-1),f=ne.getBlockType(Math.round(G.position.x),u,Math.round(G.position.z)),m=f!==void 0?zs(f):"Air",x=os&&os.isRaining?"Rainy":"Clear",y=(ue==null?void 0:ue.getMobCount())??0,g=((i=ne.getBlockCount)==null?void 0:i.call(ne))??0;j.updateDebugScreen({fps:a,x:G.position.x,y:G.position.y,z:G.position.z,biome:h,blockBelow:m,facing:l,dayTime:Ge,mobCount:y,blockCount:g,weather:x,gameMode:G.gameMode,version:"0.8"})}}Ne.render(re,Ln),os.isThunderFlashing()&&Ne.setClearColor(re.background)}$h();
