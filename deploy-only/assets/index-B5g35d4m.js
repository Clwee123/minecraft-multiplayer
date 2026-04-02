var Cu=Object.defineProperty;var Ru=(o,t,e)=>t in o?Cu(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var D=(o,t,e)=>Ru(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="160",Pu=0,ll=1,Lu=2,Ad=1,Iu=2,di=3,gi=0,xn=1,ii=2,Oi=0,ks=1,hl=2,dl=3,ul=4,Du=5,Ki=100,Ou=101,Nu=102,fl=103,pl=104,Uu=200,Bu=201,ku=202,zu=203,Sc=204,wc=205,Fu=206,Gu=207,Hu=208,Vu=209,Wu=210,Xu=211,Yu=212,qu=213,ju=214,$u=0,Ku=1,Zu=2,Nr=3,Ju=4,Qu=5,tf=6,ef=7,Zc=0,nf=1,sf=2,mi=0,of=1,rf=2,af=3,cf=4,lf=5,hf=6,Cd=300,Gs=301,Hs=302,Tc=303,Ac=304,Kr=306,Cc=1e3,In=1001,Rc=1002,Fe=1003,ml=1004,ma=1005,Bn=1006,df=1007,bo=1008,Ni=1009,uf=1010,ff=1011,Jc=1012,Rd=1013,Ii=1014,Di=1015,Eo=1016,Pd=1017,Ld=1018,ns=1020,pf=1021,$n=1023,mf=1024,gf=1025,is=1026,Vs=1027,xf=1028,Id=1029,vf=1030,Dd=1031,Od=1033,ga=33776,xa=33777,va=33778,_a=33779,gl=35840,xl=35841,vl=35842,_l=35843,Nd=36196,yl=37492,Ml=37496,bl=37808,El=37809,Sl=37810,wl=37811,Tl=37812,Al=37813,Cl=37814,Rl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,Ol=37820,Nl=37821,ya=36492,Ul=36494,Bl=36495,_f=36283,kl=36284,zl=36285,Fl=36286,Ud=3e3,ss=3001,yf=3200,Mf=3201,Bd=0,bf=1,kn="",on="srgb",xi="srgb-linear",Qc="display-p3",Zr="display-p3-linear",Ur="linear",Ue="srgb",Br="rec709",kr="p3",ls=7680,Gl=519,Ef=512,Sf=513,wf=514,kd=515,Tf=516,Af=517,Cf=518,Rf=519,Pc=35044,Pf=35048,Hl="300 es",Lc=1035,pi=2e3,zr=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Ic=180/Math.PI;function Ui(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[o&255]+an[o>>8&255]+an[o>>16&255]+an[o>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function bn(o,t,e){return Math.max(t,Math.min(e,o))}function Lf(o,t){return(o%t+t)%t}function Ma(o,t,e){return(1-e)*o+e*t}function Vl(o){return(o&o-1)===0&&o!==0}function Dc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ce(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,i,s,a,r,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l)}set(t,e,n,i,s,a,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],x=n[5],g=n[8],M=i[0],f=i[3],u=i[6],E=i[1],v=i[4],b=i[7],T=i[2],S=i[5],C=i[8];return s[0]=a*M+r*E+c*T,s[3]=a*f+r*v+c*S,s[6]=a*u+r*b+c*C,s[1]=l*M+h*E+d*T,s[4]=l*f+h*v+d*S,s[7]=l*u+h*b+d*C,s[2]=p*M+x*E+g*T,s[5]=p*f+x*v+g*S,s[8]=p*u+x*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*r*l-n*s*h+n*r*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=h*a-r*l,p=r*c-h*s,x=l*s-a*c,g=e*d+n*p+i*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(i*l-h*n)*M,t[2]=(r*n-i*a)*M,t[3]=p*M,t[4]=(h*e-i*c)*M,t[5]=(i*s-r*e)*M,t[6]=x*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*r)+a+t,-i*l,i*c,-i*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new he;function zd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function If(){const o=Fr("canvas");return o.style.display="block",o}const Wl={};function _o(o){o in Wl||(Wl[o]=!0,console.warn(o))}const Xl=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yl=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[xi]:{transfer:Ur,primaries:Br,toReference:o=>o,fromReference:o=>o},[on]:{transfer:Ue,primaries:Br,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Zr]:{transfer:Ur,primaries:kr,toReference:o=>o.applyMatrix3(Yl),fromReference:o=>o.applyMatrix3(Xl)},[Qc]:{transfer:Ue,primaries:kr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Yl),fromReference:o=>o.applyMatrix3(Xl).convertLinearToSRGB()}},Df=new Set([xi,Zr]),Se={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Df.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=Lo[t].toReference,i=Lo[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Lo[o].primaries},getTransfer:function(o){return o===kn?Ur:Lo[o].transfer}};function zs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ea(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class Fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Fr("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zs(e[n]/255)*255):e[n]=zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Of=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(Sa(i[a].image)):s.push(Sa(i[a]))}else s=Sa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;class vn extends $s{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=In,i=In,s=Bn,a=bo,r=$n,c=Ni,l=vn.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ui(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?on:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cc:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cc:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?ss:Ud}set encoding(t){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ss?on:kn}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Cd;vn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,e=0,n=0,i=1){ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],x=c[5],g=c[9],M=c[2],f=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+M)<.1&&Math.abs(g+f)<.1&&Math.abs(l+x+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,b=(x+1)/2,T=(u+1)/2,S=(h+p)/4,C=(d+M)/4,U=(g+f)/4;return v>b&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=C/n):b>T?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=U/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=C/s,i=U/s),this.set(n,i,s,e),this}let E=Math.sqrt((f-g)*(f-g)+(d-M)*(d-M)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(d-M)/E,this.z=(p-h)/E,this.w=Math.acos((l+x+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?on:kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hd extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bf extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,r){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const p=s[a+0],x=s[a+1],g=s[a+2],M=s[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=p,t[e+1]=x,t[e+2]=g,t[e+3]=M;return}if(d!==M||c!==p||l!==x||h!==g){let f=1-r;const u=c*p+l*x+h*g+d*M,E=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const T=Math.sqrt(v),S=Math.atan2(T,u*E);f=Math.sin(f*S)/T,r=Math.sin(r*S)/T}const b=r*E;if(c=c*f+p*b,l=l*f+x*b,h=h*f+g*b,d=d*f+M*b,f===1-r){const T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],p=s[a+1],x=s[a+2],g=s[a+3];return t[e]=r*g+h*d+c*x-l*p,t[e+1]=c*g+h*p+l*d-r*x,t[e+2]=l*g+h*x+r*p-c*d,t[e+3]=h*g-r*d-c*p-l*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),p=c(n/2),x=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*x*g,this._y=l*x*d-p*h*g,this._z=l*h*g+p*x*d,this._w=l*h*d-p*x*g;break;case"YXZ":this._x=p*h*d+l*x*g,this._y=l*x*d-p*h*g,this._z=l*h*g-p*x*d,this._w=l*h*d+p*x*g;break;case"ZXY":this._x=p*h*d-l*x*g,this._y=l*x*d+p*h*g,this._z=l*h*g+p*x*d,this._w=l*h*d-p*x*g;break;case"ZYX":this._x=p*h*d-l*x*g,this._y=l*x*d+p*h*g,this._z=l*h*g-p*x*d,this._w=l*h*d+p*x*g;break;case"YZX":this._x=p*h*d+l*x*g,this._y=l*x*d+p*h*g,this._z=l*h*g-p*x*d,this._w=l*h*d-p*x*g;break;case"XZY":this._x=p*h*d-l*x*g,this._y=l*x*d-p*h*g,this._z=l*h*g+p*x*d,this._w=l*h*d+p*x*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+r+d;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-l)*x,this._z=(a-i)*x}else if(n>r&&n>d){const x=2*Math.sqrt(1+n-r-d);this._w=(h-c)/x,this._x=.25*x,this._y=(i+a)/x,this._z=(s+l)/x}else if(r>d){const x=2*Math.sqrt(1+r-n-d);this._w=(s-l)/x,this._x=(i+a)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+d-n-r);this._w=(a-i)/x,this._x=(s+l)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*r+i*l-s*c,this._y=i*h+a*c+s*r-n*l,this._z=s*h+a*l+n*c-i*r,this._w=a*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const x=1-e;return this._w=x*a+e*this._w,this._x=x*n+e*this._x,this._y=x*i+e*this._y,this._z=x*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,r=t.z,c=t.w,l=2*(a*i-r*n),h=2*(r*e-s*i),d=2*(s*n-a*e);return this.x=e+c*l+a*d-r*h,this.y=n+c*h+r*l-s*d,this.z=i+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new B,ql=new To;class as{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Do.subVectors(this.max,Js),ds.subVectors(t.a,Js),us.subVectors(t.b,Js),fs.subVectors(t.c,Js),yi.subVectors(us,ds),Mi.subVectors(fs,us),Gi.subVectors(ds,fs);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Gi.y,Gi.x,0];return!Ta(e,ds,us,fs,Do)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,ds,us,fs,Do))?!1:(Oo.crossVectors(yi,Mi),e=[Oo.x,Oo.y,Oo.z],Ta(e,ds,us,fs,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new B,new B,new B,new B,new B,new B,new B,new B],Hn=new B,Io=new as,ds=new B,us=new B,fs=new B,yi=new B,Mi=new B,Gi=new B,Js=new B,Do=new B,Oo=new B,Hi=new B;function Ta(o,t,e,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){Hi.fromArray(o,s);const r=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const kf=new as,Qs=new B,Aa=new B;class cs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Aa)),this.expandByPoint(Qs.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new B,Ca=new B,No=new B,bi=new B,Ra=new B,Uo=new B,Pa=new B;class Jr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ca.copy(t).add(e).multiplyScalar(.5),No.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Ca);const s=t.distanceTo(e)*.5,a=-this.direction.dot(No),r=bi.dot(this.direction),c=-bi.dot(No),l=bi.lengthSq(),h=Math.abs(1-a*a);let d,p,x,g;if(h>0)if(d=a*c-r,p=a*r-c,g=s*h,d>=0)if(p>=-g)if(p<=g){const M=1/h;d*=M,p*=M,x=d*(d+a*p+2*r)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+r)),x=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+r)),x=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+r)),p=d>0?-s:Math.min(Math.max(-s,-c),s),x=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),x=p*(p+2*c)+l):(d=Math.max(0,-(a*s+r)),p=d>0?s:Math.min(Math.max(-s,-c),s),x=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+r)),x=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ca).addScaledVector(No,p),x}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,r,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(r=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(r=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,i,s){Ra.subVectors(e,t),Uo.subVectors(n,t),Pa.crossVectors(Ra,Uo);let a=this.direction.dot(Pa),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;bi.subVectors(this.origin,t);const c=r*this.direction.dot(Uo.crossVectors(bi,Uo));if(c<0)return null;const l=r*this.direction.dot(Ra.cross(bi));if(l<0||c+l>a)return null;const h=-r*bi.dot(Pa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,s,a,r,c,l,h,d,p,x,g,M,f){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l,h,d,p,x,g,M,f)}set(t,e,n,i,s,a,r,c,l,h,d,p,x,g,M,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=s,u[5]=a,u[9]=r,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=x,u[7]=g,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=a*h,x=a*d,g=r*h,M=r*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=x+g*l,e[5]=p-M*l,e[9]=-r*c,e[2]=M-p*l,e[6]=g+x*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,x=c*d,g=l*h,M=l*d;e[0]=p+M*r,e[4]=g*r-x,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=x*r-g,e[6]=M+p*r,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,x=c*d,g=l*h,M=l*d;e[0]=p-M*r,e[4]=-a*d,e[8]=g+x*r,e[1]=x+g*r,e[5]=a*h,e[9]=M-p*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,x=a*d,g=r*h,M=r*d;e[0]=c*h,e[4]=g*l-x,e[8]=p*l+M,e[1]=c*d,e[5]=M*l+p,e[9]=x*l-g,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,x=a*l,g=r*c,M=r*l;e[0]=c*h,e[4]=M-p*d,e[8]=g*d+x,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-l*h,e[6]=x*d+g,e[10]=p-M*d}else if(t.order==="XZY"){const p=a*c,x=a*l,g=r*c,M=r*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+M,e[5]=a*h,e[9]=x*d-g,e[2]=g*d-x,e[6]=r*h,e[10]=M*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,Ff)}lookAt(t,e,n){const i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ei.crossVectors(n,Sn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ei.crossVectors(n,Sn)),Ei.normalize(),Bo.crossVectors(Sn,Ei),i[0]=Ei.x,i[4]=Bo.x,i[8]=Sn.x,i[1]=Ei.y,i[5]=Bo.y,i[9]=Sn.y,i[2]=Ei.z,i[6]=Bo.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],x=n[13],g=n[2],M=n[6],f=n[10],u=n[14],E=n[3],v=n[7],b=n[11],T=n[15],S=i[0],C=i[4],U=i[8],w=i[12],R=i[1],F=i[5],V=i[9],j=i[13],z=i[2],q=i[6],Z=i[10],Q=i[14],it=i[3],st=i[7],ot=i[11],ut=i[15];return s[0]=a*S+r*R+c*z+l*it,s[4]=a*C+r*F+c*q+l*st,s[8]=a*U+r*V+c*Z+l*ot,s[12]=a*w+r*j+c*Q+l*ut,s[1]=h*S+d*R+p*z+x*it,s[5]=h*C+d*F+p*q+x*st,s[9]=h*U+d*V+p*Z+x*ot,s[13]=h*w+d*j+p*Q+x*ut,s[2]=g*S+M*R+f*z+u*it,s[6]=g*C+M*F+f*q+u*st,s[10]=g*U+M*V+f*Z+u*ot,s[14]=g*w+M*j+f*Q+u*ut,s[3]=E*S+v*R+b*z+T*it,s[7]=E*C+v*F+b*q+T*st,s[11]=E*U+v*V+b*Z+T*ot,s[15]=E*w+v*j+b*Q+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],r=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],x=t[14],g=t[3],M=t[7],f=t[11],u=t[15];return g*(+s*c*d-i*l*d-s*r*p+n*l*p+i*r*x-n*c*x)+M*(+e*c*x-e*l*p+s*a*p-i*a*x+i*l*h-s*c*h)+f*(+e*l*d-e*r*x-s*a*d+n*a*x+s*r*h-n*l*h)+u*(-i*r*h-e*c*d+e*r*p+i*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],x=t[11],g=t[12],M=t[13],f=t[14],u=t[15],E=d*f*l-M*p*l+M*c*x-r*f*x-d*c*u+r*p*u,v=g*p*l-h*f*l-g*c*x+a*f*x+h*c*u-a*p*u,b=h*M*l-g*d*l+g*r*x-a*M*x-h*r*u+a*d*u,T=g*d*c-h*M*c-g*r*p+a*M*p+h*r*f-a*d*f,S=e*E+n*v+i*b+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return t[0]=E*C,t[1]=(M*p*s-d*f*s-M*i*x+n*f*x+d*i*u-n*p*u)*C,t[2]=(r*f*s-M*c*s+M*i*l-n*f*l-r*i*u+n*c*u)*C,t[3]=(d*c*s-r*p*s-d*i*l+n*p*l+r*i*x-n*c*x)*C,t[4]=v*C,t[5]=(h*f*s-g*p*s+g*i*x-e*f*x-h*i*u+e*p*u)*C,t[6]=(g*c*s-a*f*s-g*i*l+e*f*l+a*i*u-e*c*u)*C,t[7]=(a*p*s-h*c*s+h*i*l-e*p*l-a*i*x+e*c*x)*C,t[8]=b*C,t[9]=(g*d*s-h*M*s-g*n*x+e*M*x+h*n*u-e*d*u)*C,t[10]=(a*M*s-g*r*s+g*n*l-e*M*l-a*n*u+e*r*u)*C,t[11]=(h*r*s-a*d*s-h*n*l+e*d*l+a*n*x-e*r*x)*C,t[12]=T*C,t[13]=(h*M*i-g*d*i+g*n*p-e*M*p-h*n*f+e*d*f)*C,t[14]=(g*r*i-a*M*i-g*n*c+e*M*c+a*n*f-e*r*f)*C,t[15]=(a*d*i-h*r*i+h*n*c-e*d*c-a*n*p+e*r*p)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,r=t.y,c=t.z,l=s*a,h=s*r;return this.set(l*a+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*a,0,l*c-i*r,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,r=e._z,c=e._w,l=s+s,h=a+a,d=r+r,p=s*l,x=s*h,g=s*d,M=a*h,f=a*d,u=r*d,E=c*l,v=c*h,b=c*d,T=n.x,S=n.y,C=n.z;return i[0]=(1-(M+u))*T,i[1]=(x+b)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(x-b)*S,i[5]=(1-(p+u))*S,i[6]=(f+E)*S,i[7]=0,i[8]=(g+v)*C,i[9]=(f-E)*C,i[10]=(1-(p+M))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const a=ps.set(i[4],i[5],i[6]).length(),r=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Vn.copy(this);const l=1/s,h=1/a,d=1/r;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=r,this}makePerspective(t,e,n,i,s,a,r=pi){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let x,g;if(r===pi)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===zr)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,r=pi){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-s),p=(e+t)*l,x=(n+i)*h;let g,M;if(r===pi)g=(a+s)*d,M=-2*d;else if(r===zr)g=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new B,Vn=new Re,zf=new B(0,0,0),Ff=new B(1,1,1),Ei=new B,Bo=new B,Sn=new B,jl=new Re,$l=new To;class Qr{constructor(t=0,e=0,n=0,i=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],r=i[8],c=i[1],l=i[5],h=i[9],d=i[2],p=i[6],x=i[10];switch(e){case"XYZ":this._y=Math.asin(bn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,x),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,x),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,x));break;case"XZY":this._z=Math.asin(-bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const Kl=new B,ms=new To,ri=new Re,ko=new B,to=new B,Hf=new B,Vf=new To,Zl=new B(1,0,0),Jl=new B(0,1,0),Ql=new B(0,0,1),Wf={type:"added"},Xf={type:"removed"};class Ye extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new B,e=new Qr,n=new To,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new he}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(to,ko,this.up):ri.lookAt(ko,to,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(ri),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),x=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),x.length>0&&(n.animations=x),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new B(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new B,ai=new B,La=new B,ci=new B,gs=new B,xs=new B,th=new B,Ia=new B,Da=new B,Oa=new B;let zo=!1;class Pn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wn.subVectors(t,e),i.cross(Wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Wn.subVectors(i,e),ai.subVectors(n,e),La.subVectors(t,e);const a=Wn.dot(Wn),r=Wn.dot(ai),c=Wn.dot(La),l=ai.dot(ai),h=ai.dot(La),d=a*l-r*r;if(d===0)return s.set(0,0,0),null;const p=1/d,x=(l*c-r*h)*p,g=(a*h-r*c)*p;return s.set(1-x-g,g,x)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(t,e,n,i,s,a,r,c){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),this.getInterpolation(t,e,n,i,s,a,r,c)}static getInterpolation(t,e,n,i,s,a,r,c){return this.getBarycoord(t,e,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(r,ci.z),c)}static isFrontFacing(t,e,n,i){return Wn.subVectors(n,e),ai.subVectors(t,e),Wn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Wn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,r;gs.subVectors(i,n),xs.subVectors(s,n),Ia.subVectors(t,n);const c=gs.dot(Ia),l=xs.dot(Ia);if(c<=0&&l<=0)return e.copy(n);Da.subVectors(t,i);const h=gs.dot(Da),d=xs.dot(Da);if(h>=0&&d<=h)return e.copy(i);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(gs,a);Oa.subVectors(t,s);const x=gs.dot(Oa),g=xs.dot(Oa);if(g>=0&&x<=g)return e.copy(s);const M=x*l-c*g;if(M<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(xs,r);const f=h*g-x*d;if(f<=0&&d-h>=0&&x-g>=0)return th.subVectors(s,i),r=(d-h)/(d-h+(x-g)),e.copy(i).addScaledVector(th,r);const u=1/(f+M+p);return a=M*u,r=p*u,e.copy(n).addScaledVector(gs,a).addScaledVector(xs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Na(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Se.workingColorSpace){if(t=Lf(t,1),e=bn(e,0,1),n=bn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Na(a,s,t+1/3),this.g=Na(a,s,t),this.b=Na(a,s,t-1/3)}return Se.toWorkingColorSpace(this,i),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Se.fromWorkingColorSpace(cn.copy(this),t),Math.round(bn(cn.r*255,0,255))*65536+Math.round(bn(cn.g*255,0,255))*256+Math.round(bn(cn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,s=cn.b,a=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+a)/2;if(r===a)c=0,l=0;else{const d=a-r;switch(l=h<=.5?d/(a+r):d/(2-a-r),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=on){Se.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,i=cn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Fo);const n=Ma(Si.h,Fo.h,e),i=Ma(Si.s,Fo.s,e),s=Ma(Si.l,Fo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new yt;yt.NAMES=Vd;let Yf=0;class zi extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ks,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=wc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const r in s){const c=s[r];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vi extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new B,Go=new se;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class Wd extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xd extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hn extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qf=0;const On=new Re,Ua=new Ye,vs=new B,wn=new as,eo=new as,Ke=new B;class _n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?Xd:Wd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new he().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];eo.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(wn.min,eo.min),wn.expandByPoint(Ke),Ke.addVectors(wn.max,eo.max),wn.expandByPoint(Ke)):(wn.expandByPoint(eo.min),wn.expandByPoint(eo.max))}wn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Ke.fromBufferAttribute(r,l),c&&(vs.fromBufferAttribute(t,l),Ke.add(vs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new B,h[R]=new B;const d=new B,p=new B,x=new B,g=new se,M=new se,f=new se,u=new B,E=new B;function v(R,F,V){d.fromArray(i,R*3),p.fromArray(i,F*3),x.fromArray(i,V*3),g.fromArray(a,R*2),M.fromArray(a,F*2),f.fromArray(a,V*2),p.sub(d),x.sub(d),M.sub(g),f.sub(g);const j=1/(M.x*f.y-f.x*M.y);isFinite(j)&&(u.copy(p).multiplyScalar(f.y).addScaledVector(x,-M.y).multiplyScalar(j),E.copy(x).multiplyScalar(M.x).addScaledVector(p,-f.x).multiplyScalar(j),l[R].add(u),l[F].add(u),l[V].add(u),h[R].add(E),h[F].add(E),h[V].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,F=b.length;R<F;++R){const V=b[R],j=V.start,z=V.count;for(let q=j,Z=j+z;q<Z;q+=3)v(n[q+0],n[q+1],n[q+2])}const T=new B,S=new B,C=new B,U=new B;function w(R){C.fromArray(s,R*3),U.copy(C);const F=l[R];T.copy(F),T.sub(C.multiplyScalar(C.dot(F))).normalize(),S.crossVectors(U,F);const j=S.dot(h[R])<0?-1:1;c[R*4]=T.x,c[R*4+1]=T.y,c[R*4+2]=T.z,c[R*4+3]=j}for(let R=0,F=b.length;R<F;++R){const V=b[R],j=V.start,z=V.count;for(let q=j,Z=j+z;q<Z;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,x=n.count;p<x;p++)n.setXYZ(p,0,0,0);const i=new B,s=new B,a=new B,r=new B,c=new B,l=new B,h=new B,d=new B;if(t)for(let p=0,x=t.count;p<x;p+=3){const g=t.getX(p+0),M=t.getX(p+1),f=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,f),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,x=e.count;p<x;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,d=r.normalized,p=new l.constructor(c.length*h);let x=0,g=0;for(let M=0,f=c.length;M<f;M++){r.isInterleavedBufferAttribute?x=c[M]*r.data.stride+r.offset:x=c[M]*h;for(let u=0;u<h;u++)p[g++]=l[x++]}return new En(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const p=l[h],x=t(p,n);c.push(x)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const x=l[d];h.push(x.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,x=d.length;p<x;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new Re,Vi=new Jr,Ho=new cs,nh=new B,_s=new B,ys=new B,Ms=new B,Ba=new B,Vo=new B,Wo=new se,Xo=new se,Yo=new se,ih=new B,sh=new B,oh=new B,qo=new B,jo=new B;class Wt extends Ye{constructor(t=new _n,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){Vo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=r[c],d=s[c];h!==0&&(Ba.fromBufferAttribute(d,t),a?Vo.addScaledVector(Ba,h):Vo.addScaledVector(Ba.sub(e),h))}e.add(Vo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Vi.copy(t.ray).recast(t.near),!(Ho.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ho,nh)===null||Vi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,r=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,x=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){const f=p[g],u=a[f.materialIndex],E=Math.max(f.start,x.start),v=Math.min(r.count,Math.min(f.start+f.count,x.start+x.count));for(let b=E,T=v;b<T;b+=3){const S=r.getX(b),C=r.getX(b+1),U=r.getX(b+2);i=$o(this,u,t,n,l,h,d,S,C,U),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,x.start),M=Math.min(r.count,x.start+x.count);for(let f=g,u=M;f<u;f+=3){const E=r.getX(f),v=r.getX(f+1),b=r.getX(f+2);i=$o(this,a,t,n,l,h,d,E,v,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){const f=p[g],u=a[f.materialIndex],E=Math.max(f.start,x.start),v=Math.min(c.count,Math.min(f.start+f.count,x.start+x.count));for(let b=E,T=v;b<T;b+=3){const S=b,C=b+1,U=b+2;i=$o(this,u,t,n,l,h,d,S,C,U),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let f=g,u=M;f<u;f+=3){const E=f,v=f+1,b=f+2;i=$o(this,a,t,n,l,h,d,E,v,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function jf(o,t,e,n,i,s,a,r){let c;if(t.side===xn?c=n.intersectTriangle(a,s,i,!0,r):c=n.intersectTriangle(i,s,a,t.side===gi,r),c===null)return null;jo.copy(r),jo.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(jo);return l<e.near||l>e.far?null:{distance:l,point:jo.clone(),object:o}}function $o(o,t,e,n,i,s,a,r,c,l){o.getVertexPosition(r,_s),o.getVertexPosition(c,ys),o.getVertexPosition(l,Ms);const h=jf(o,t,e,n,_s,ys,Ms,qo);if(h){i&&(Wo.fromBufferAttribute(i,r),Xo.fromBufferAttribute(i,c),Yo.fromBufferAttribute(i,l),h.uv=Pn.getInterpolation(qo,_s,ys,Ms,Wo,Xo,Yo,new se)),s&&(Wo.fromBufferAttribute(s,r),Xo.fromBufferAttribute(s,c),Yo.fromBufferAttribute(s,l),h.uv1=Pn.getInterpolation(qo,_s,ys,Ms,Wo,Xo,Yo,new se),h.uv2=h.uv1),a&&(ih.fromBufferAttribute(a,r),sh.fromBufferAttribute(a,c),oh.fromBufferAttribute(a,l),h.normal=Pn.getInterpolation(qo,_s,ys,Ms,ih,sh,oh,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:c,c:l,normal:new B,materialIndex:0};Pn.getNormal(_s,ys,Ms,d.normal),h.face=d}return h}class we extends _n{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,x=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(d,2));function g(M,f,u,E,v,b,T,S,C,U,w){const R=b/C,F=T/U,V=b/2,j=T/2,z=S/2,q=C+1,Z=U+1;let Q=0,it=0;const st=new B;for(let ot=0;ot<Z;ot++){const ut=ot*F-j;for(let pt=0;pt<q;pt++){const tt=pt*R-V;st[M]=tt*E,st[f]=ut*v,st[u]=z,l.push(st.x,st.y,st.z),st[M]=0,st[f]=0,st[u]=S>0?1:-1,h.push(st.x,st.y,st.z),d.push(pt/C),d.push(1-ot/U),Q+=1}}for(let ot=0;ot<U;ot++)for(let ut=0;ut<C;ut++){const pt=p+ut+q*ot,tt=p+ut+q*(ot+1),at=p+(ut+1)+q*(ot+1),Et=p+(ut+1)+q*ot;c.push(pt,tt,Et),c.push(tt,at,Et),it+=6}r.addGroup(x,it,w),x+=it,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(o){const t={};for(let e=0;e<o.length;e++){const n=Ws(o[e]);for(const i in n)t[i]=n[i]}return t}function $f(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Yd(o){return o.getRenderTarget()===null?o.outputColorSpace:Se.workingColorSpace}const Kf={clone:Ws,merge:un};var Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends qd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Es=1;class Qf extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(bs,Es,t,e);i.layers=this.layers,this.add(i);const s=new Ln(bs,Es,t,e);s.layers=this.layers,this.add(s);const a=new Ln(bs,Es,t,e);a.layers=this.layers,this.add(a);const r=new Ln(bs,Es,t,e);r.layers=this.layers,this.add(r);const c=new Ln(bs,Es,t,e);c.layers=this.layers,this.add(c);const l=new Ln(bs,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,r,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,x),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jd extends vn{constructor(t,e,n,i,s,a,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,s,a,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ss?on:kn),this.texture=new jd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new we(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Oi});s.uniforms.tEquirect.value=e;const a=new Wt(i,s),r=e.minFilter;return e.minFilter===bo&&(e.minFilter=Bn),new Qf(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const ka=new B,ep=new B,np=new he;class ji{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ka.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),i=this.coplanarPoint(ka).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new cs,Ko=new B;class el{constructor(t=new ji,e=new ji,n=new ji,i=new ji,s=new ji,a=new ji){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,i=t.elements,s=i[0],a=i[1],r=i[2],c=i[3],l=i[4],h=i[5],d=i[6],p=i[7],x=i[8],g=i[9],M=i[10],f=i[11],u=i[12],E=i[13],v=i[14],b=i[15];if(n[0].setComponents(c-s,p-l,f-x,b-u).normalize(),n[1].setComponents(c+s,p+l,f+x,b+u).normalize(),n[2].setComponents(c+a,p+h,f+g,b+E).normalize(),n[3].setComponents(c-a,p-h,f-g,b-E).normalize(),n[4].setComponents(c-r,p-d,f-M,b-v).normalize(),e===pi)n[5].setComponents(c+r,p+d,f+M,b+v).normalize();else if(e===zr)n[5].setComponents(r,d,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ko.x=i.normal.x>0?t.max.x:t.min.x,Ko.y=i.normal.y>0?t.max.y:t.min.y,Ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let o=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function ip(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,p=l.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(h,g),o.bufferData(h,d,p),l.onUploadCallback();let M;if(d instanceof Float32Array)M=o.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)M=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=o.SHORT;else if(d instanceof Uint32Array)M=o.UNSIGNED_INT;else if(d instanceof Int32Array)M=o.INT;else if(d instanceof Int8Array)M=o.BYTE;else if(d instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:x}}function s(l,h,d){const p=h.array,x=h._updateRange,g=h.updateRanges;if(o.bindBuffer(d,l),x.count===-1&&g.length===0&&o.bufferSubData(d,0,p),g.length!==0){for(let M=0,f=g.length;M<f;M++){const u=g[M];e?o.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):o.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}x.count!==-1&&(e?o.bufferSubData(d,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):o.bufferSubData(d,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:a,remove:r,update:c}}class So extends _n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,d=t/r,p=e/c,x=[],g=[],M=[],f=[];for(let u=0;u<h;u++){const E=u*p-a;for(let v=0;v<l;v++){const b=v*d-s;g.push(b,-E,0),M.push(0,0,1),f.push(v/r),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<r;E++){const v=E+l*u,b=E+l*(u+1),T=E+1+l*(u+1),S=E+1+l*u;x.push(v,b,S),x.push(b,T,S)}this.setIndex(x),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(M,3)),this.setAttribute("uv",new hn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.width,t.height,t.widthSegments,t.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`
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
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,S0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,P0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,N0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:sp,alphahash_pars_fragment:op,alphamap_fragment:rp,alphamap_pars_fragment:ap,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:xp,bumpmap_pars_fragment:vp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:Sp,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Op,colorspace_pars_fragment:Np,envmap_fragment:Up,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Fp,fog_vertex:Gp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:om,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:hm,map_fragment:dm,map_pars_fragment:um,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:xm,morphnormal_vertex:vm,morphtarget_pars_vertex:_m,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:Sm,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Om,dithering_fragment:Nm,dithering_pars_fragment:Um,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Hm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:Ym,specularmap_fragment:qm,specularmap_pars_fragment:jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Km,transmission_fragment:Zm,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:o0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:c0,depth_vert:l0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:x0,meshbasic_frag:v0,meshlambert_vert:_0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:E0,meshnormal_frag:S0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:C0,meshtoon_vert:R0,meshtoon_frag:P0,points_vert:L0,points_frag:I0,shadow_vert:D0,shadow_frag:O0,sprite_vert:N0,sprite_frag:U0},xt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ni={basic:{uniforms:un([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:un([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:un([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:un([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:un([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:un([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:un([xt.points,xt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:un([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:un([xt.common,xt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:un([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:un([xt.sprite,xt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:un([xt.common,xt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:un([xt.lights,xt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Zo={r:0,b:0,g:0};function B0(o,t,e,n,i,s,a){const r=new yt(0);let c=s===!0?0:1,l,h,d=null,p=0,x=null;function g(f,u){let E=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?M(r,c):v&&v.isColor&&(M(v,1),E=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(o.autoClear||E)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Kr)?(h===void 0&&(h=new Wt(new we(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ws(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Se.getTransfer(v.colorSpace)!==Ue,(d!==v||p!==v.version||x!==o.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,x=o.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Wt(new So(2,2),new ki({name:"BackgroundMaterial",uniforms:Ws(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Se.getTransfer(v.colorSpace)!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||x!==o.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,x=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function M(f,u){f.getRGB(Zo,Yd(o)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,u,a)}return{getClearColor:function(){return r},setClearColor:function(f,u=1){r.set(f),c=u,M(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,M(r,c)},render:g}}function k0(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,r={},c=f(null);let l=c,h=!1;function d(z,q,Z,Q,it){let st=!1;if(a){const ot=M(Q,Z,q);l!==ot&&(l=ot,x(l.object)),st=u(z,Q,Z,it),st&&E(z,Q,Z,it)}else{const ot=q.wireframe===!0;(l.geometry!==Q.id||l.program!==Z.id||l.wireframe!==ot)&&(l.geometry=Q.id,l.program=Z.id,l.wireframe=ot,st=!0)}it!==null&&e.update(it,o.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,U(z,q,Z,Q),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function p(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function x(z){return n.isWebGL2?o.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?o.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function M(z,q,Z){const Q=Z.wireframe===!0;let it=r[z.id];it===void 0&&(it={},r[z.id]=it);let st=it[q.id];st===void 0&&(st={},it[q.id]=st);let ot=st[Q];return ot===void 0&&(ot=f(p()),st[Q]=ot),ot}function f(z){const q=[],Z=[],Q=[];for(let it=0;it<i;it++)q[it]=0,Z[it]=0,Q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:Q,object:z,attributes:{},index:null}}function u(z,q,Z,Q){const it=l.attributes,st=q.attributes;let ot=0;const ut=Z.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=it[pt];let Et=st[pt];if(Et===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(Et=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(Et=z.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;ot++}return l.attributesNum!==ot||l.index!==Q}function E(z,q,Z,Q){const it={},st=q.attributes;let ot=0;const ut=Z.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=st[pt];at===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(at=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(at=z.instanceColor));const Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),it[pt]=Et,ot++}l.attributes=it,l.attributesNum=ot,l.index=Q}function v(){const z=l.newAttributes;for(let q=0,Z=z.length;q<Z;q++)z[q]=0}function b(z){T(z,0)}function T(z,q){const Z=l.newAttributes,Q=l.enabledAttributes,it=l.attributeDivisors;Z[z]=1,Q[z]===0&&(o.enableVertexAttribArray(z),Q[z]=1),it[z]!==q&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,q),it[z]=q)}function S(){const z=l.newAttributes,q=l.enabledAttributes;for(let Z=0,Q=q.length;Z<Q;Z++)q[Z]!==z[Z]&&(o.disableVertexAttribArray(Z),q[Z]=0)}function C(z,q,Z,Q,it,st,ot){ot===!0?o.vertexAttribIPointer(z,q,Z,it,st):o.vertexAttribPointer(z,q,Z,Q,it,st)}function U(z,q,Z,Q){if(n.isWebGL2===!1&&(z.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const it=Q.attributes,st=Z.getAttributes(),ot=q.defaultAttributeValues;for(const ut in st){const pt=st[ut];if(pt.location>=0){let tt=it[ut];if(tt===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),tt!==void 0){const at=tt.normalized,Et=tt.itemSize,Pt=e.get(tt);if(Pt===void 0)continue;const Ut=Pt.buffer,Jt=Pt.type,Qt=Pt.bytesPerElement,Gt=n.isWebGL2===!0&&(Jt===o.INT||Jt===o.UNSIGNED_INT||tt.gpuType===Rd);if(tt.isInterleavedBufferAttribute){const ue=tt.data,K=ue.stride,_e=tt.offset;if(ue.isInstancedInterleavedBuffer){for(let zt=0;zt<pt.locationSize;zt++)T(pt.location+zt,ue.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let zt=0;zt<pt.locationSize;zt++)b(pt.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Ut);for(let zt=0;zt<pt.locationSize;zt++)C(pt.location+zt,Et/pt.locationSize,Jt,at,K*Qt,(_e+Et/pt.locationSize*zt)*Qt,Gt)}else{if(tt.isInstancedBufferAttribute){for(let ue=0;ue<pt.locationSize;ue++)T(pt.location+ue,tt.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ue=0;ue<pt.locationSize;ue++)b(pt.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Ut);for(let ue=0;ue<pt.locationSize;ue++)C(pt.location+ue,Et/pt.locationSize,Jt,at,Et*Qt,Et/pt.locationSize*ue*Qt,Gt)}}else if(ot!==void 0){const at=ot[ut];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(pt.location,at);break;case 3:o.vertexAttrib3fv(pt.location,at);break;case 4:o.vertexAttrib4fv(pt.location,at);break;default:o.vertexAttrib1fv(pt.location,at)}}}}S()}function w(){V();for(const z in r){const q=r[z];for(const Z in q){const Q=q[Z];for(const it in Q)g(Q[it].object),delete Q[it];delete q[Z]}delete r[z]}}function R(z){if(r[z.id]===void 0)return;const q=r[z.id];for(const Z in q){const Q=q[Z];for(const it in Q)g(Q[it].object),delete Q[it];delete q[Z]}delete r[z.id]}function F(z){for(const q in r){const Z=r[q];if(Z[z.id]===void 0)continue;const Q=Z[z.id];for(const it in Q)g(Q[it].object),delete Q[it];delete Z[z.id]}}function V(){j(),h=!0,l!==c&&(l=c,x(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:V,resetDefaultState:j,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:b,disableUnusedAttributes:S}}function z0(o,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function r(h,d){o.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,p){if(p===0)return;let x,g;if(i)x=o,g="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,h,d,p),e.update(d,s,p)}function l(h,d,p){if(p===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<p;g++)this.render(h[g],d[g]);else{x.multiDrawArraysWEBGL(s,h,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=d[M];e.update(g,s,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function F0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),p=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),u=o.getParameter(o.MAX_VARYING_VECTORS),E=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,b=a||t.has("OES_texture_float"),T=v&&b,S=a?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:M,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:S}}function G0(o){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ji,r=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const x=d.length!==0||p||n!==0||i;return i=p,n=d.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,x){const g=d.clippingPlanes,M=d.clipIntersection,f=d.clipShadows,u=o.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const E=s?0:n,v=E*4;let b=u.clippingState||null;c.value=b,b=h(g,p,v,x);for(let T=0;T!==v;++T)b[T]=e[T];u.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,x,g){const M=d!==null?d.length:0;let f=null;if(M!==0){if(f=c.value,g!==!0||f===null){const u=x+M*4,E=p.matrixWorldInverse;r.getNormalMatrix(E),(f===null||f.length<u)&&(f=new Float32Array(u));for(let v=0,b=x;v!==M;++v,b+=4)a.copy(d[v]).applyMatrix4(E,r),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}function H0(o){let t=new WeakMap;function e(a,r){return r===Tc?a.mapping=Gs:r===Ac&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Tc||r===Ac)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tp(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Kd extends qd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,rh=[.125,.215,.35,.446,.526,.582],Zi=20,za=new Kd,ah=new yt;let Fa=null,Ga=0,Ha=0;const $i=(1+Math.sqrt(5))/2,Ss=1/$i,ch=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,$i,Ss),new B(0,$i,-Ss),new B(Ss,0,$i),new B(-Ss,0,$i),new B($i,Ss,0),new B(-$i,Ss,0)];class lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ga,Ha),t.scissorTest=!1,Jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Eo,format:$n,colorSpace:xi,depthBuffer:!1},i=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(s)),this._blurMaterial=W0(s,t,e)}return i}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,i){const r=new Ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ah),h.toneMapping=mi,h.autoClear=!1;const x=new vi({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new Wt(new we,x);let M=!1;const f=t.background;f?f.isColor&&(x.color.copy(f),t.background=null,M=!0):(x.color.copy(ah),M=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(r.up.set(0,c[u],0),r.lookAt(l[u],0,0)):E===1?(r.up.set(0,0,c[u]),r.lookAt(0,l[u],0)):(r.up.set(0,c[u],0),r.lookAt(0,0,l[u]));const v=this._cubeSize;Jo(i,E*v,u>2?v:0,v,v),h.setRenderTarget(i),M&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const c=this._cubeSize;Jo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ch[(i-1)%ch.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,r){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Wt(this._lodPlanes[i],l),p=l.uniforms,x=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*Zi-1),M=s/g,f=isFinite(s)?1+Math.floor(h*M):Zi;f>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zi}`);const u=[];let E=0;for(let C=0;C<Zi;++C){const U=C/M,w=Math.exp(-U*U/2);u.push(w),C===0?E+=w:C<f&&(E+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/E;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const b=this._sizeLods[i],T=3*b*(i>v-Os?i-v+Os:0),S=4*(this._cubeSize-b);Jo(e,T,S,3*b,2*b),c.setRenderTarget(e),c.render(d,za)}}function V0(o){const t=[],e=[],n=[];let i=o;const s=o-Os+1+rh.length;for(let a=0;a<s;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>o-Os?c=rh[a-o+Os-1]:a===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],x=6,g=6,M=3,f=2,u=1,E=new Float32Array(M*g*x),v=new Float32Array(f*g*x),b=new Float32Array(u*g*x);for(let S=0;S<x;S++){const C=S%3*2/3-1,U=S>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];E.set(w,M*g*S),v.set(p,f*g*S);const R=[S,S,S,S,S,S];b.set(R,u*g*S)}const T=new _n;T.setAttribute("position",new En(E,M)),T.setAttribute("uv",new En(v,f)),T.setAttribute("faceIndex",new En(b,u)),t.push(T),i>Os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hh(o,t,e){const n=new os(o,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function W0(o,t,e){const n=new Float32Array(Zi),i=new B(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function dh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function uh(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function X0(o){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===Tc||c===Ac,h=c===Gs||c===Hs;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new lh(o)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new lh(o));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",s),p.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Y0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q0(o,t,e,n){const i={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const M=p.morphAttributes[g];for(let f=0,u=M.length;f<u;f++)t.remove(M[f])}p.removeEventListener("dispose",a),delete i[p.id];const x=s.get(p);x&&(t.remove(x),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],o.ARRAY_BUFFER);const x=d.morphAttributes;for(const g in x){const M=x[g];for(let f=0,u=M.length;f<u;f++)t.update(M[f],o.ARRAY_BUFFER)}}function l(d){const p=[],x=d.index,g=d.attributes.position;let M=0;if(x!==null){const E=x.array;M=x.version;for(let v=0,b=E.length;v<b;v+=3){const T=E[v+0],S=E[v+1],C=E[v+2];p.push(T,S,S,C,C,T)}}else if(g!==void 0){const E=g.array;M=g.version;for(let v=0,b=E.length/3-1;v<b;v+=3){const T=v+0,S=v+1,C=v+2;p.push(T,S,S,C,C,T)}}else return;const f=new(zd(p)?Xd:Wd)(p,1);f.version=M;const u=s.get(d);u&&t.remove(u),s.set(d,f)}function h(d){const p=s.get(d);if(p){const x=d.index;x!==null&&p.version<x.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:c,getWireframeAttribute:h}}function j0(o,t,e,n){const i=n.isWebGL2;let s;function a(x){s=x}let r,c;function l(x){r=x.type,c=x.bytesPerElement}function h(x,g){o.drawElements(s,g,r,x*c),e.update(g,s,1)}function d(x,g,M){if(M===0)return;let f,u;if(i)f=o,u="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,g,r,x*c,M),e.update(g,s,M)}function p(x,g,M){if(M===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<M;u++)this.render(x[u]/c,g[u]);else{f.multiDrawElementsWEBGL(s,g,0,r,x,0,M);let u=0;for(let E=0;E<M;E++)u+=g[E];e.update(u,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function $0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(e.calls++,a){case o.TRIANGLES:e.triangles+=r*(s/3);break;case o.LINES:e.lines+=r*(s/2);break;case o.LINE_STRIP:e.lines+=r*(s-1);break;case o.LINE_LOOP:e.lines+=r*s;break;case o.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function K0(o,t){return o[0]-t[0]}function Z0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function J0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new ke,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,d){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==M){let q=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var x=q;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;v===!0&&(w=1),b===!0&&(w=2),T===!0&&(w=3);let R=h.attributes.position.count*w,F=1;R>t.maxTextureSize&&(F=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const V=new Float32Array(R*F*4*M),j=new Hd(V,R,F,M);j.type=Di,j.needsUpdate=!0;const z=w*4;for(let Z=0;Z<M;Z++){const Q=S[Z],it=C[Z],st=U[Z],ot=R*F*4*Z;for(let ut=0;ut<Q.count;ut++){const pt=ut*z;v===!0&&(a.fromBufferAttribute(Q,ut),V[ot+pt+0]=a.x,V[ot+pt+1]=a.y,V[ot+pt+2]=a.z,V[ot+pt+3]=0),b===!0&&(a.fromBufferAttribute(it,ut),V[ot+pt+4]=a.x,V[ot+pt+5]=a.y,V[ot+pt+6]=a.z,V[ot+pt+7]=0),T===!0&&(a.fromBufferAttribute(st,ut),V[ot+pt+8]=a.x,V[ot+pt+9]=a.y,V[ot+pt+10]=a.z,V[ot+pt+11]=st.itemSize===4?a.w:1)}}f={count:M,texture:j,size:new se(R,F)},s.set(h,f),h.addEventListener("dispose",q)}let u=0;for(let v=0;v<p.length;v++)u+=p[v];const E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p),d.getUniforms().setValue(o,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let M=n[h.id];if(M===void 0||M.length!==g){M=[];for(let b=0;b<g;b++)M[b]=[b,0];n[h.id]=M}for(let b=0;b<g;b++){const T=M[b];T[0]=b,T[1]=p[b]}M.sort(Z0);for(let b=0;b<8;b++)b<g&&M[b][1]?(r[b][0]=M[b][0],r[b][1]=M[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(K0);const f=h.morphAttributes.position,u=h.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const T=r[b],S=T[0],C=T[1];S!==Number.MAX_SAFE_INTEGER&&C?(f&&h.getAttribute("morphTarget"+b)!==f[S]&&h.setAttribute("morphTarget"+b,f[S]),u&&h.getAttribute("morphNormal"+b)!==u[S]&&h.setAttribute("morphNormal"+b,u[S]),i[b]=C,E+=C):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),u&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const v=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Q0(o,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return d}function a(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Zd extends vn{constructor(t,e,n,i,s,a,r,c,l,h){if(h=h!==void 0?h:is,h!==is&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ii),n===void 0&&h===Vs&&(n=ns),super(null,i,s,a,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jd=new vn,Qd=new Zd(1,1);Qd.compareFunction=kd;const tu=new Hd,eu=new Bf,nu=new jd,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),xh=new Float32Array(4);function Ks(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=fh[i];if(s===void 0&&(s=new Float32Array(i),fh[i]=s),t!==0){n.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function je(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function $e(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function ta(o,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function tg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function eg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2fv(this.addr,t),$e(e,t)}}function ng(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;o.uniform3fv(this.addr,t),$e(e,t)}}function ig(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4fv(this.addr,t),$e(e,t)}}function sg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;xh.set(n),o.uniformMatrix2fv(this.addr,!1,xh),$e(e,n)}}function og(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;gh.set(n),o.uniformMatrix3fv(this.addr,!1,gh),$e(e,n)}}function rg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;mh.set(n),o.uniformMatrix4fv(this.addr,!1,mh),$e(e,n)}}function ag(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function cg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2iv(this.addr,t),$e(e,t)}}function lg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3iv(this.addr,t),$e(e,t)}}function hg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4iv(this.addr,t),$e(e,t)}}function dg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function ug(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2uiv(this.addr,t),$e(e,t)}}function fg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3uiv(this.addr,t),$e(e,t)}}function pg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4uiv(this.addr,t),$e(e,t)}}function mg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?Qd:Jd;e.setTexture2D(t||s,i)}function gg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||eu,i)}function xg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||nu,i)}function vg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||tu,i)}function _g(o){switch(o){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return og;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return dg;case 36294:return ug;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(o,t){o.uniform1fv(this.addr,t)}function Mg(o,t){const e=Ks(t,this.size,2);o.uniform2fv(this.addr,e)}function bg(o,t){const e=Ks(t,this.size,3);o.uniform3fv(this.addr,e)}function Eg(o,t){const e=Ks(t,this.size,4);o.uniform4fv(this.addr,e)}function Sg(o,t){const e=Ks(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function wg(o,t){const e=Ks(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Tg(o,t){const e=Ks(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Ag(o,t){o.uniform1iv(this.addr,t)}function Cg(o,t){o.uniform2iv(this.addr,t)}function Rg(o,t){o.uniform3iv(this.addr,t)}function Pg(o,t){o.uniform4iv(this.addr,t)}function Lg(o,t){o.uniform1uiv(this.addr,t)}function Ig(o,t){o.uniform2uiv(this.addr,t)}function Dg(o,t){o.uniform3uiv(this.addr,t)}function Og(o,t){o.uniform4uiv(this.addr,t)}function Ng(o,t,e){const n=this.cache,i=t.length,s=ta(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Jd,s[a])}function Ug(o,t,e){const n=this.cache,i=t.length,s=ta(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||eu,s[a])}function Bg(o,t,e){const n=this.cache,i=t.length,s=ta(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||nu,s[a])}function kg(o,t,e){const n=this.cache,i=t.length,s=ta(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||tu,s[a])}function zg(o){switch(o){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Eg;case 35674:return Sg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function vh(o,t){o.seq.push(t),o.map[t.id]=t}function Vg(o,t,e){const n=o.name,i=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),a=Va.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===i){vh(e,l===void 0?new Fg(r,o,t):new Gg(r,o,t));break}else{let d=e.map[r];d===void 0&&(d=new Hg(r),vh(e,d)),e=d}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Vg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _h(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function qg(o){const t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(o);let n;switch(t===e?n="":t===kr&&e===Br?n="LinearDisplayP3ToLinearSRGB":t===Br&&e===kr&&(n="LinearSRGBToLinearDisplayP3"),o){case xi:case Zr:return[n,"LinearTransferOETF"];case on:case Qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function yh(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Yg(o.getShaderSource(t),a)}else return i}function jg(o,t){const e=qg(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $g(o,t){let e;switch(t){case of:e="Linear";break;case rf:e="Reinhard";break;case af:e="OptimizedCineon";break;case cf:e="ACESFilmic";break;case hf:e="AgX";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function Zg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function Jg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Ns(o){return o!==""}function Mh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(o){return o.replace(tx,nx)}const ex=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nx(o,t){let e=ae[t];if(e===void 0){const n=ex.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(o){return o.replace(ix,sx)}function sx(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function rx(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gs:case Hs:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ax(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zc:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case sf:t="ENVMAP_BLENDING_ADD";break}return t}function lx(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hx(o,t,e,n){const i=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=ox(e),l=rx(e),h=ax(e),d=cx(e),p=lx(e),x=e.isWebGL2?"":Kg(e),g=Zg(e),M=Jg(s),f=i.createProgram();let u,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ns).join(`
`),u.length>0&&(u+=`
`),E=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ns).join(`
`),E.length>0&&(E+=`
`)):(u=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),E=[x,Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ae.tonemapping_pars_fragment:"",e.toneMapping!==mi?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Oc(a),a=Mh(a,e),a=bh(a,e),r=Oc(r),r=Mh(r,e),r=bh(r,e),a=Eh(a),r=Eh(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=v+u+a,T=v+E+r,S=_h(i,i.VERTEX_SHADER,b),C=_h(i,i.FRAGMENT_SHADER,T);i.attachShader(f,S),i.attachShader(f,C),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function U(V){if(o.debug.checkShaderErrors){const j=i.getProgramInfoLog(f).trim(),z=i.getShaderInfoLog(S).trim(),q=i.getShaderInfoLog(C).trim();let Z=!0,Q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,f,S,C);else{const it=yh(i,S,"vertex"),st=yh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+it+`
`+st)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(z===""||q==="")&&(Q=!1);Q&&(V.diagnostics={runnable:Z,programLog:j,vertexShader:{log:z,prefix:u},fragmentShader:{log:q,prefix:E}})}i.deleteShader(S),i.deleteShader(C),w=new Rr(i,f),R=Qg(i,f)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(f,Wg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=C,this}let dx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fx(t),e.set(t,n)),n}}class fx{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}}function px(o,t,e,n,i,s,a){const r=new tl,c=new ux,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let x=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return w===0?"uv":`uv${w}`}function f(w,R,F,V,j){const z=V.fog,q=j.geometry,Z=w.isMeshStandardMaterial?V.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),it=Q&&Q.mapping===Kr?Q.image.height:null,st=g[w.type];w.precision!==null&&(x=i.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=ot!==void 0?ot.length:0;let pt=0;q.morphAttributes.position!==void 0&&(pt=1),q.morphAttributes.normal!==void 0&&(pt=2),q.morphAttributes.color!==void 0&&(pt=3);let tt,at,Et,Pt;if(st){const tn=ni[st];tt=tn.vertexShader,at=tn.fragmentShader}else tt=w.vertexShader,at=w.fragmentShader,c.update(w),Et=c.getVertexShaderID(w),Pt=c.getFragmentShaderID(w);const Ut=o.getRenderTarget(),Jt=j.isInstancedMesh===!0,Qt=j.isBatchedMesh===!0,Gt=!!w.map,ue=!!w.matcap,K=!!Q,_e=!!w.aoMap,zt=!!w.lightMap,Kt=!!w.bumpMap,Lt=!!w.normalMap,Me=!!w.displacementMap,ee=!!w.emissiveMap,N=!!w.metalnessMap,I=!!w.roughnessMap,$=w.anisotropy>0,ht=w.clearcoat>0,lt=w.iridescence>0,dt=w.sheen>0,Dt=w.transmission>0,vt=$&&!!w.anisotropyMap,At=ht&&!!w.clearcoatMap,Vt=ht&&!!w.clearcoatNormalMap,te=ht&&!!w.clearcoatRoughnessMap,rt=lt&&!!w.iridescenceMap,ye=lt&&!!w.iridescenceThicknessMap,re=dt&&!!w.sheenColorMap,jt=dt&&!!w.sheenRoughnessMap,It=!!w.specularMap,Ct=!!w.specularColorMap,ne=!!w.specularIntensityMap,me=Dt&&!!w.transmissionMap,Oe=Dt&&!!w.thicknessMap,ie=!!w.gradientMap,ft=!!w.alphaMap,G=w.alphaTest>0,Mt=!!w.alphaHash,_t=!!w.extensions,Xt=!!q.attributes.uv1,Ft=!!q.attributes.uv2,be=!!q.attributes.uv3;let Ee=mi;return w.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Ee=o.toneMapping),{isWebGL2:h,shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:tt,fragmentShader:at,defines:w.defines,customVertexShaderID:Et,customFragmentShaderID:Pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Qt,instancing:Jt,instancingColor:Jt&&j.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ut===null?o.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:xi,map:Gt,matcap:ue,envMap:K,envMapMode:K&&Q.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:zt,bumpMap:Kt,normalMap:Lt,displacementMap:p&&Me,emissiveMap:ee,normalMapObjectSpace:Lt&&w.normalMapType===bf,normalMapTangentSpace:Lt&&w.normalMapType===Bd,metalnessMap:N,roughnessMap:I,anisotropy:$,anisotropyMap:vt,clearcoat:ht,clearcoatMap:At,clearcoatNormalMap:Vt,clearcoatRoughnessMap:te,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:ye,sheen:dt,sheenColorMap:re,sheenRoughnessMap:jt,specularMap:It,specularColorMap:Ct,specularIntensityMap:ne,transmission:Dt,transmissionMap:me,thicknessMap:Oe,gradientMap:ie,opaque:w.transparent===!1&&w.blending===ks,alphaMap:ft,alphaTest:G,alphaHash:Mt,combine:w.combine,mapUv:Gt&&M(w.map.channel),aoMapUv:_e&&M(w.aoMap.channel),lightMapUv:zt&&M(w.lightMap.channel),bumpMapUv:Kt&&M(w.bumpMap.channel),normalMapUv:Lt&&M(w.normalMap.channel),displacementMapUv:Me&&M(w.displacementMap.channel),emissiveMapUv:ee&&M(w.emissiveMap.channel),metalnessMapUv:N&&M(w.metalnessMap.channel),roughnessMapUv:I&&M(w.roughnessMap.channel),anisotropyMapUv:vt&&M(w.anisotropyMap.channel),clearcoatMapUv:At&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&M(w.sheenRoughnessMap.channel),specularMapUv:It&&M(w.specularMap.channel),specularColorMapUv:Ct&&M(w.specularColorMap.channel),specularIntensityMapUv:ne&&M(w.specularIntensityMap.channel),transmissionMapUv:me&&M(w.transmissionMap.channel),thicknessMapUv:Oe&&M(w.thicknessMap.channel),alphaMapUv:ft&&M(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Lt||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Xt,vertexUv2s:Ft,vertexUv3s:be,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Gt||ft),fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ee,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&Se.getTransfer(w.map.colorSpace)===Ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ii,flipSided:w.side===xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:_t&&w.extensions.derivatives===!0,extensionFragDepth:_t&&w.extensions.fragDepth===!0,extensionDrawBuffers:_t&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function u(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(E(R,w),v(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function E(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function v(w,R){r.disableAll(),R.isWebGL2&&r.enable(0),R.supportsVertexTextures&&r.enable(1),R.instancing&&r.enable(2),R.instancingColor&&r.enable(3),R.matcap&&r.enable(4),R.envMap&&r.enable(5),R.normalMapObjectSpace&&r.enable(6),R.normalMapTangentSpace&&r.enable(7),R.clearcoat&&r.enable(8),R.iridescence&&r.enable(9),R.alphaTest&&r.enable(10),R.vertexColors&&r.enable(11),R.vertexAlphas&&r.enable(12),R.vertexUv1s&&r.enable(13),R.vertexUv2s&&r.enable(14),R.vertexUv3s&&r.enable(15),R.vertexTangents&&r.enable(16),R.anisotropy&&r.enable(17),R.alphaHash&&r.enable(18),R.batching&&r.enable(19),w.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.skinning&&r.enable(4),R.morphTargets&&r.enable(5),R.morphNormals&&r.enable(6),R.morphColors&&r.enable(7),R.premultipliedAlpha&&r.enable(8),R.shadowMapEnabled&&r.enable(9),R.useLegacyLights&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),w.push(r.mask)}function b(w){const R=g[w.type];let F;if(R){const V=ni[R];F=Kf.clone(V.uniforms)}else F=w.uniforms;return F}function T(w,R){let F;for(let V=0,j=l.length;V<j;V++){const z=l[V];if(z.cacheKey===R){F=z,++F.usedTimes;break}}return F===void 0&&(F=new hx(o,R,w,s),l.push(F)),F}function S(w){if(--w.usedTimes===0){const R=l.indexOf(w);l[R]=l[l.length-1],l.pop(),w.destroy()}}function C(w){c.remove(w)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:b,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:U}}function mx(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function n(s,a,r){o.get(s)[a]=r}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function wh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Th(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,p,x,g,M,f){let u=o[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:x,groupOrder:g,renderOrder:d.renderOrder,z:M,group:f},o[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=x,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=M,u.group=f),t++,u}function r(d,p,x,g,M,f){const u=a(d,p,x,g,M,f);x.transmission>0?n.push(u):x.transparent===!0?i.push(u):e.push(u)}function c(d,p,x,g,M,f){const u=a(d,p,x,g,M,f);x.transmission>0?n.unshift(u):x.transparent===!0?i.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||gx),n.length>1&&n.sort(p||wh),i.length>1&&i.sort(p||wh)}function h(){for(let d=t,p=o.length;d<p;d++){const x=o[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function xx(){let o=new WeakMap;function t(n,i){const s=o.get(n);let a;return s===void 0?(a=new Th,o.set(n,[a])):i>=s.length?(a=new Th,s.push(a)):a=s[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function vx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new yt};break;case"SpotLight":e={position:new B,direction:new B,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new B,halfWidth:new B,halfHeight:new B};break}return o[t.id]=e,e}}}function _x(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let yx=0;function Mx(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function bx(o,t){const e=new vx,n=_x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const s=new B,a=new Re,r=new Re;function c(h,d){let p=0,x=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let M=0,f=0,u=0,E=0,v=0,b=0,T=0,S=0,C=0,U=0,w=0;h.sort(Mx);const R=d===!0?Math.PI:1;for(let V=0,j=h.length;V<j;V++){const z=h[V],q=z.color,Z=z.intensity,Q=z.distance,it=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=q.r*Z*R,x+=q.g*Z*R,g+=q.b*Z*R;else if(z.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(z.sh.coefficients[st],Z);w++}else if(z.isDirectionalLight){const st=e.get(z);if(st.color.copy(z.color).multiplyScalar(z.intensity*R),z.castShadow){const ot=z.shadow,ut=n.get(z);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.directionalShadow[M]=ut,i.directionalShadowMap[M]=it,i.directionalShadowMatrix[M]=z.shadow.matrix,b++}i.directional[M]=st,M++}else if(z.isSpotLight){const st=e.get(z);st.position.setFromMatrixPosition(z.matrixWorld),st.color.copy(q).multiplyScalar(Z*R),st.distance=Q,st.coneCos=Math.cos(z.angle),st.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),st.decay=z.decay,i.spot[u]=st;const ot=z.shadow;if(z.map&&(i.spotLightMap[C]=z.map,C++,ot.updateMatrices(z),z.castShadow&&U++),i.spotLightMatrix[u]=ot.matrix,z.castShadow){const ut=n.get(z);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.spotShadow[u]=ut,i.spotShadowMap[u]=it,S++}u++}else if(z.isRectAreaLight){const st=e.get(z);st.color.copy(q).multiplyScalar(Z),st.halfWidth.set(z.width*.5,0,0),st.halfHeight.set(0,z.height*.5,0),i.rectArea[E]=st,E++}else if(z.isPointLight){const st=e.get(z);if(st.color.copy(z.color).multiplyScalar(z.intensity*R),st.distance=z.distance,st.decay=z.decay,z.castShadow){const ot=z.shadow,ut=n.get(z);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,i.pointShadow[f]=ut,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=z.shadow.matrix,T++}i.point[f]=st,f++}else if(z.isHemisphereLight){const st=e.get(z);st.skyColor.copy(z.color).multiplyScalar(Z*R),st.groundColor.copy(z.groundColor).multiplyScalar(Z*R),i.hemi[v]=st,v++}}E>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=x,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==M||F.pointLength!==f||F.spotLength!==u||F.rectAreaLength!==E||F.hemiLength!==v||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==S||F.numSpotMaps!==C||F.numLightProbes!==w)&&(i.directional.length=M,i.spot.length=u,i.rectArea.length=E,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+C-U,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=w,F.directionalLength=M,F.pointLength=f,F.spotLength=u,F.rectAreaLength=E,F.hemiLength=v,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=S,F.numSpotMaps=C,F.numLightProbes=w,i.version=yx++)}function l(h,d){let p=0,x=0,g=0,M=0,f=0;const u=d.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const b=h[E];if(b.isDirectionalLight){const T=i.directional[p];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),p++}else if(b.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),g++}else if(b.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),r.identity(),a.copy(b.matrixWorld),a.premultiply(u),r.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),M++}else if(b.isPointLight){const T=i.point[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(u),x++}else if(b.isHemisphereLight){const T=i.hemi[f];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(u),f++}}}return{setup:c,setupView:l,state:i}}function Ah(o,t){const e=new bx(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function r(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function Ex(o,t){let e=new WeakMap;function n(s,a=0){const r=e.get(s);let c;return r===void 0?(c=new Ah(o,t),e.set(s,[c])):a>=r.length?(c=new Ah(o,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Sx extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wx extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Cx(o,t,e){let n=new el;const i=new se,s=new se,a=new ke,r=new Sx({depthPacking:Mf}),c=new wx,l={},h=e.maxTextureSize,d={[gi]:xn,[xn]:gi,[ii]:ii},p=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Wt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let u=this.type;this.render=function(S,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),V=o.state;V.setBlending(Oi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=u!==di&&this.type===di,z=u===di&&this.type!==di;for(let q=0,Z=S.length;q<Z;q++){const Q=S[q],it=Q.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);const st=it.getFrameExtents();if(i.multiply(st),s.copy(it.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,it.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,it.mapSize.y=s.y)),it.map===null||j===!0||z===!0){const ut=this.type!==di?{minFilter:Fe,magFilter:Fe}:{};it.map!==null&&it.map.dispose(),it.map=new os(i.x,i.y,ut),it.map.texture.name=Q.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const ot=it.getViewportCount();for(let ut=0;ut<ot;ut++){const pt=it.getViewport(ut);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),V.viewport(a),it.updateMatrices(Q,ut),n=it.getFrustum(),b(C,U,it.camera,Q,this.type)}it.isPointLightShadow!==!0&&this.type===di&&E(it,U),it.needsUpdate=!1}u=this.type,f.needsUpdate=!1,o.setRenderTarget(w,R,F)};function E(S,C){const U=t.update(M);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,x.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new os(i.x,i.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(C,null,U,p,M,null),x.uniforms.shadow_pass.value=S.mapPass.texture,x.uniforms.resolution.value=S.mapSize,x.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(C,null,U,x,M,null)}function v(S,C,U,w){let R=null;const F=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)R=F;else if(R=U.isPointLight===!0?c:r,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=R.uuid,j=C.uuid;let z=l[V];z===void 0&&(z={},l[V]=z);let q=z[j];q===void 0&&(q=R.clone(),z[j]=q,C.addEventListener("dispose",T)),R=q}if(R.visible=C.visible,R.wireframe=C.wireframe,w===di?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,U.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const V=o.properties.get(R);V.light=U}return R}function b(S,C,U,w,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===di)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);const j=t.update(S),z=S.material;if(Array.isArray(z)){const q=j.groups;for(let Z=0,Q=q.length;Z<Q;Z++){const it=q[Z],st=z[it.materialIndex];if(st&&st.visible){const ot=v(S,st,w,R);S.onBeforeShadow(o,S,C,U,j,ot,it),o.renderBufferDirect(U,null,j,ot,S,it),S.onAfterShadow(o,S,C,U,j,ot,it)}}}else if(z.visible){const q=v(S,z,w,R);S.onBeforeShadow(o,S,C,U,j,q,null),o.renderBufferDirect(U,null,j,q,S,null),S.onAfterShadow(o,S,C,U,j,q,null)}}const V=S.children;for(let j=0,z=V.length;j<z;j++)b(V[j],C,U,w,R)}function T(S){S.target.removeEventListener("dispose",T);for(const U in l){const w=l[U],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Rx(o,t,e){const n=e.isWebGL2;function i(){let G=!1;const Mt=new ke;let _t=null;const Xt=new ke(0,0,0,0);return{setMask:function(Ft){_t!==Ft&&!G&&(o.colorMask(Ft,Ft,Ft,Ft),_t=Ft)},setLocked:function(Ft){G=Ft},setClear:function(Ft,be,Ee,ve,tn){tn===!0&&(Ft*=ve,be*=ve,Ee*=ve),Mt.set(Ft,be,Ee,ve),Xt.equals(Mt)===!1&&(o.clearColor(Ft,be,Ee,ve),Xt.copy(Mt))},reset:function(){G=!1,_t=null,Xt.set(-1,0,0,0)}}}function s(){let G=!1,Mt=null,_t=null,Xt=null;return{setTest:function(Ft){Ft?Qt(o.DEPTH_TEST):Gt(o.DEPTH_TEST)},setMask:function(Ft){Mt!==Ft&&!G&&(o.depthMask(Ft),Mt=Ft)},setFunc:function(Ft){if(_t!==Ft){switch(Ft){case $u:o.depthFunc(o.NEVER);break;case Ku:o.depthFunc(o.ALWAYS);break;case Zu:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case Ju:o.depthFunc(o.EQUAL);break;case Qu:o.depthFunc(o.GEQUAL);break;case tf:o.depthFunc(o.GREATER);break;case ef:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ft}},setLocked:function(Ft){G=Ft},setClear:function(Ft){Xt!==Ft&&(o.clearDepth(Ft),Xt=Ft)},reset:function(){G=!1,Mt=null,_t=null,Xt=null}}}function a(){let G=!1,Mt=null,_t=null,Xt=null,Ft=null,be=null,Ee=null,ve=null,tn=null;return{setTest:function(fe){G||(fe?Qt(o.STENCIL_TEST):Gt(o.STENCIL_TEST))},setMask:function(fe){Mt!==fe&&!G&&(o.stencilMask(fe),Mt=fe)},setFunc:function(fe,qe,yn){(_t!==fe||Xt!==qe||Ft!==yn)&&(o.stencilFunc(fe,qe,yn),_t=fe,Xt=qe,Ft=yn)},setOp:function(fe,qe,yn){(be!==fe||Ee!==qe||ve!==yn)&&(o.stencilOp(fe,qe,yn),be=fe,Ee=qe,ve=yn)},setLocked:function(fe){G=fe},setClear:function(fe){tn!==fe&&(o.clearStencil(fe),tn=fe)},reset:function(){G=!1,Mt=null,_t=null,Xt=null,Ft=null,be=null,Ee=null,ve=null,tn=null}}}const r=new i,c=new s,l=new a,h=new WeakMap,d=new WeakMap;let p={},x={},g=new WeakMap,M=[],f=null,u=!1,E=null,v=null,b=null,T=null,S=null,C=null,U=null,w=new yt(0,0,0),R=0,F=!1,V=null,j=null,z=null,q=null,Z=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,st=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(ot)[1]),it=st>=1):ot.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),it=st>=2);let ut=null,pt={};const tt=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Et=new ke().fromArray(tt),Pt=new ke().fromArray(at);function Ut(G,Mt,_t,Xt){const Ft=new Uint8Array(4),be=o.createTexture();o.bindTexture(G,be),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ee=0;Ee<_t;Ee++)n&&(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)?o.texImage3D(Mt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Ft):o.texImage2D(Mt+Ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ft);return be}const Jt={};Jt[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Jt[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Jt[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Jt[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Qt(o.DEPTH_TEST),c.setFunc(Nr),ee(!1),N(ll),Qt(o.CULL_FACE),Lt(Oi);function Qt(G){p[G]!==!0&&(o.enable(G),p[G]=!0)}function Gt(G){p[G]!==!1&&(o.disable(G),p[G]=!1)}function ue(G,Mt){return x[G]!==Mt?(o.bindFramebuffer(G,Mt),x[G]=Mt,n&&(G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Mt),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function K(G,Mt){let _t=M,Xt=!1;if(G)if(_t=g.get(Mt),_t===void 0&&(_t=[],g.set(Mt,_t)),G.isWebGLMultipleRenderTargets){const Ft=G.texture;if(_t.length!==Ft.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Ee=Ft.length;be<Ee;be++)_t[be]=o.COLOR_ATTACHMENT0+be;_t.length=Ft.length,Xt=!0}}else _t[0]!==o.COLOR_ATTACHMENT0&&(_t[0]=o.COLOR_ATTACHMENT0,Xt=!0);else _t[0]!==o.BACK&&(_t[0]=o.BACK,Xt=!0);Xt&&(e.isWebGL2?o.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function _e(G){return f!==G?(o.useProgram(G),f=G,!0):!1}const zt={[Ki]:o.FUNC_ADD,[Ou]:o.FUNC_SUBTRACT,[Nu]:o.FUNC_REVERSE_SUBTRACT};if(n)zt[fl]=o.MIN,zt[pl]=o.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(zt[fl]=G.MIN_EXT,zt[pl]=G.MAX_EXT)}const Kt={[Uu]:o.ZERO,[Bu]:o.ONE,[ku]:o.SRC_COLOR,[Sc]:o.SRC_ALPHA,[Wu]:o.SRC_ALPHA_SATURATE,[Hu]:o.DST_COLOR,[Fu]:o.DST_ALPHA,[zu]:o.ONE_MINUS_SRC_COLOR,[wc]:o.ONE_MINUS_SRC_ALPHA,[Vu]:o.ONE_MINUS_DST_COLOR,[Gu]:o.ONE_MINUS_DST_ALPHA,[Xu]:o.CONSTANT_COLOR,[Yu]:o.ONE_MINUS_CONSTANT_COLOR,[qu]:o.CONSTANT_ALPHA,[ju]:o.ONE_MINUS_CONSTANT_ALPHA};function Lt(G,Mt,_t,Xt,Ft,be,Ee,ve,tn,fe){if(G===Oi){u===!0&&(Gt(o.BLEND),u=!1);return}if(u===!1&&(Qt(o.BLEND),u=!0),G!==Du){if(G!==E||fe!==F){if((v!==Ki||S!==Ki)&&(o.blendEquation(o.FUNC_ADD),v=Ki,S=Ki),fe)switch(G){case ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hl:o.blendFunc(o.ONE,o.ONE);break;case dl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ul:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hl:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ul:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,T=null,C=null,U=null,w.set(0,0,0),R=0,E=G,F=fe}return}Ft=Ft||Mt,be=be||_t,Ee=Ee||Xt,(Mt!==v||Ft!==S)&&(o.blendEquationSeparate(zt[Mt],zt[Ft]),v=Mt,S=Ft),(_t!==b||Xt!==T||be!==C||Ee!==U)&&(o.blendFuncSeparate(Kt[_t],Kt[Xt],Kt[be],Kt[Ee]),b=_t,T=Xt,C=be,U=Ee),(ve.equals(w)===!1||tn!==R)&&(o.blendColor(ve.r,ve.g,ve.b,tn),w.copy(ve),R=tn),E=G,F=!1}function Me(G,Mt){G.side===ii?Gt(o.CULL_FACE):Qt(o.CULL_FACE);let _t=G.side===xn;Mt&&(_t=!_t),ee(_t),G.blending===ks&&G.transparent===!1?Lt(Oi):Lt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),r.setMask(G.colorWrite);const Xt=G.stencilWrite;l.setTest(Xt),Xt&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Qt(o.SAMPLE_ALPHA_TO_COVERAGE):Gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){V!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),V=G)}function N(G){G!==Pu?(Qt(o.CULL_FACE),G!==j&&(G===ll?o.cullFace(o.BACK):G===Lu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Gt(o.CULL_FACE),j=G}function I(G){G!==z&&(it&&o.lineWidth(G),z=G)}function $(G,Mt,_t){G?(Qt(o.POLYGON_OFFSET_FILL),(q!==Mt||Z!==_t)&&(o.polygonOffset(Mt,_t),q=Mt,Z=_t)):Gt(o.POLYGON_OFFSET_FILL)}function ht(G){G?Qt(o.SCISSOR_TEST):Gt(o.SCISSOR_TEST)}function lt(G){G===void 0&&(G=o.TEXTURE0+Q-1),ut!==G&&(o.activeTexture(G),ut=G)}function dt(G,Mt,_t){_t===void 0&&(ut===null?_t=o.TEXTURE0+Q-1:_t=ut);let Xt=pt[_t];Xt===void 0&&(Xt={type:void 0,texture:void 0},pt[_t]=Xt),(Xt.type!==G||Xt.texture!==Mt)&&(ut!==_t&&(o.activeTexture(_t),ut=_t),o.bindTexture(G,Mt||Jt[G]),Xt.type=G,Xt.texture=Mt)}function Dt(){const G=pt[ut];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function vt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(G){Et.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Et.copy(G))}function me(G){Pt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Pt.copy(G))}function Oe(G,Mt){let _t=d.get(Mt);_t===void 0&&(_t=new WeakMap,d.set(Mt,_t));let Xt=_t.get(G);Xt===void 0&&(Xt=o.getUniformBlockIndex(Mt,G.name),_t.set(G,Xt))}function ie(G,Mt){const Xt=d.get(Mt).get(G);h.get(Mt)!==Xt&&(o.uniformBlockBinding(Mt,Xt,G.__bindingPointIndex),h.set(Mt,Xt))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ut=null,pt={},x={},g=new WeakMap,M=[],f=null,u=!1,E=null,v=null,b=null,T=null,S=null,C=null,U=null,w=new yt(0,0,0),R=0,F=!1,V=null,j=null,z=null,q=null,Z=null,Et.set(0,0,o.canvas.width,o.canvas.height),Pt.set(0,0,o.canvas.width,o.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Qt,disable:Gt,bindFramebuffer:ue,drawBuffers:K,useProgram:_e,setBlending:Lt,setMaterial:Me,setFlipSided:ee,setCullFace:N,setLineWidth:I,setPolygonOffset:$,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Dt,compressedTexImage2D:vt,compressedTexImage3D:At,texImage2D:It,texImage3D:Ct,updateUBOMapping:Oe,uniformBlockBinding:ie,texStorage2D:re,texStorage3D:jt,texSubImage2D:Vt,texSubImage3D:te,compressedTexSubImage2D:rt,compressedTexSubImage3D:ye,scissor:ne,viewport:me,reset:ft}}function Px(o,t,e,n,i,s,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,I){return x?new OffscreenCanvas(N,I):Fr("canvas")}function M(N,I,$,ht){let lt=1;if((N.width>ht||N.height>ht)&&(lt=ht/Math.max(N.width,N.height)),lt<1||I===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const dt=I?Dc:Math.floor,Dt=dt(lt*N.width),vt=dt(lt*N.height);d===void 0&&(d=g(Dt,vt));const At=$?g(Dt,vt):d;return At.width=Dt,At.height=vt,At.getContext("2d").drawImage(N,0,0,Dt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Dt+"x"+vt+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function f(N){return Vl(N.width)&&Vl(N.height)}function u(N){return r?!1:N.wrapS!==In||N.wrapT!==In||N.minFilter!==Fe&&N.minFilter!==Bn}function E(N,I){return N.generateMipmaps&&I&&N.minFilter!==Fe&&N.minFilter!==Bn}function v(N){o.generateMipmap(N)}function b(N,I,$,ht,lt=!1){if(r===!1)return I;if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=I;if(I===o.RED&&($===o.FLOAT&&(dt=o.R32F),$===o.HALF_FLOAT&&(dt=o.R16F),$===o.UNSIGNED_BYTE&&(dt=o.R8)),I===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.R8UI),$===o.UNSIGNED_SHORT&&(dt=o.R16UI),$===o.UNSIGNED_INT&&(dt=o.R32UI),$===o.BYTE&&(dt=o.R8I),$===o.SHORT&&(dt=o.R16I),$===o.INT&&(dt=o.R32I)),I===o.RG&&($===o.FLOAT&&(dt=o.RG32F),$===o.HALF_FLOAT&&(dt=o.RG16F),$===o.UNSIGNED_BYTE&&(dt=o.RG8)),I===o.RGBA){const Dt=lt?Ur:Se.getTransfer(ht);$===o.FLOAT&&(dt=o.RGBA32F),$===o.HALF_FLOAT&&(dt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(dt=Dt===Ue?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function T(N,I,$){return E(N,$)===!0||N.isFramebufferTexture&&N.minFilter!==Fe&&N.minFilter!==Bn?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function S(N){return N===Fe||N===ml||N===ma?o.NEAREST:o.LINEAR}function C(N){const I=N.target;I.removeEventListener("dispose",C),w(I),I.isVideoTexture&&h.delete(I)}function U(N){const I=N.target;I.removeEventListener("dispose",U),F(I)}function w(N){const I=n.get(N);if(I.__webglInit===void 0)return;const $=N.source,ht=p.get($);if(ht){const lt=ht[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(N),Object.keys(ht).length===0&&p.delete($)}n.remove(N)}function R(N){const I=n.get(N);o.deleteTexture(I.__webglTexture);const $=N.source,ht=p.get($);delete ht[I.__cacheKey],a.memory.textures--}function F(N){const I=N.texture,$=n.get(N),ht=n.get(I);if(ht.__webglTexture!==void 0&&(o.deleteTexture(ht.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray($.__webglFramebuffer[lt]))for(let dt=0;dt<$.__webglFramebuffer[lt].length;dt++)o.deleteFramebuffer($.__webglFramebuffer[lt][dt]);else o.deleteFramebuffer($.__webglFramebuffer[lt]);$.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer[lt])}else{if(Array.isArray($.__webglFramebuffer))for(let lt=0;lt<$.__webglFramebuffer.length;lt++)o.deleteFramebuffer($.__webglFramebuffer[lt]);else o.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&o.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let lt=0;lt<$.__webglColorRenderbuffer.length;lt++)$.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer($.__webglColorRenderbuffer[lt]);$.__webglDepthRenderbuffer&&o.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let lt=0,dt=I.length;lt<dt;lt++){const Dt=n.get(I[lt]);Dt.__webglTexture&&(o.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(I[lt])}n.remove(I),n.remove(N)}let V=0;function j(){V=0}function z(){const N=V;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),V+=1,N}function q(N){const I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function Z(N,I){const $=n.get(N);if(N.isVideoTexture&&Me(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et($,N,I);return}}e.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+I)}function Q(N,I){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Et($,N,I);return}e.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+I)}function it(N,I){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Et($,N,I);return}e.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+I)}function st(N,I){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Pt($,N,I);return}e.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+I)}const ot={[Cc]:o.REPEAT,[In]:o.CLAMP_TO_EDGE,[Rc]:o.MIRRORED_REPEAT},ut={[Fe]:o.NEAREST,[ml]:o.NEAREST_MIPMAP_NEAREST,[ma]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[df]:o.LINEAR_MIPMAP_NEAREST,[bo]:o.LINEAR_MIPMAP_LINEAR},pt={[Ef]:o.NEVER,[Rf]:o.ALWAYS,[Sf]:o.LESS,[kd]:o.LEQUAL,[wf]:o.EQUAL,[Cf]:o.GEQUAL,[Tf]:o.GREATER,[Af]:o.NOTEQUAL};function tt(N,I,$){if($?(o.texParameteri(N,o.TEXTURE_WRAP_S,ot[I.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ot[I.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ot[I.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,ut[I.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,ut[I.minFilter])):(o.texParameteri(N,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(N,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(I.wrapS!==In||I.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(N,o.TEXTURE_MAG_FILTER,S(I.magFilter)),o.texParameteri(N,o.TEXTURE_MIN_FILTER,S(I.minFilter)),I.minFilter!==Fe&&I.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),I.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,pt[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(I.magFilter===Fe||I.minFilter!==ma&&I.minFilter!==bo||I.type===Di&&t.has("OES_texture_float_linear")===!1||r===!1&&I.type===Eo&&t.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(o.texParameterf(N,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function at(N,I){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",C));const ht=I.source;let lt=p.get(ht);lt===void 0&&(lt={},p.set(ht,lt));const dt=q(I);if(dt!==N.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,$=!0),lt[dt].usedTimes++;const Dt=lt[N.__cacheKey];Dt!==void 0&&(lt[N.__cacheKey].usedTimes--,Dt.usedTimes===0&&R(I)),N.__cacheKey=dt,N.__webglTexture=lt[dt].texture}return $}function Et(N,I,$){let ht=o.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ht=o.TEXTURE_3D);const lt=at(N,I),dt=I.source;e.bindTexture(ht,N.__webglTexture,o.TEXTURE0+$);const Dt=n.get(dt);if(dt.version!==Dt.__version||lt===!0){e.activeTexture(o.TEXTURE0+$);const vt=Se.getPrimaries(Se.workingColorSpace),At=I.colorSpace===kn?null:Se.getPrimaries(I.colorSpace),Vt=I.colorSpace===kn||vt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const te=u(I)&&f(I.image)===!1;let rt=M(I.image,te,!1,i.maxTextureSize);rt=ee(I,rt);const ye=f(rt)||r,re=s.convert(I.format,I.colorSpace);let jt=s.convert(I.type),It=b(I.internalFormat,re,jt,I.colorSpace,I.isVideoTexture);tt(ht,I,ye);let Ct;const ne=I.mipmaps,me=r&&I.isVideoTexture!==!0&&It!==Nd,Oe=Dt.__version===void 0||lt===!0,ie=T(I,rt,ye);if(I.isDepthTexture)It=o.DEPTH_COMPONENT,r?I.type===Di?It=o.DEPTH_COMPONENT32F:I.type===Ii?It=o.DEPTH_COMPONENT24:I.type===ns?It=o.DEPTH24_STENCIL8:It=o.DEPTH_COMPONENT16:I.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===is&&It===o.DEPTH_COMPONENT&&I.type!==Jc&&I.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Ii,jt=s.convert(I.type)),I.format===Vs&&It===o.DEPTH_COMPONENT&&(It=o.DEPTH_STENCIL,I.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=ns,jt=s.convert(I.type))),Oe&&(me?e.texStorage2D(o.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(o.TEXTURE_2D,0,It,rt.width,rt.height,0,re,jt,null));else if(I.isDataTexture)if(ne.length>0&&ye){me&&Oe&&e.texStorage2D(o.TEXTURE_2D,ie,It,ne[0].width,ne[0].height);for(let ft=0,G=ne.length;ft<G;ft++)Ct=ne[ft],me?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,re,jt,Ct.data):e.texImage2D(o.TEXTURE_2D,ft,It,Ct.width,Ct.height,0,re,jt,Ct.data);I.generateMipmaps=!1}else me?(Oe&&e.texStorage2D(o.TEXTURE_2D,ie,It,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,rt.width,rt.height,re,jt,rt.data)):e.texImage2D(o.TEXTURE_2D,0,It,rt.width,rt.height,0,re,jt,rt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){me&&Oe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,ne[0].width,ne[0].height,rt.depth);for(let ft=0,G=ne.length;ft<G;ft++)Ct=ne[ft],I.format!==$n?re!==null?me?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,rt.depth,re,Ct.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,It,Ct.width,Ct.height,rt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?e.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,rt.depth,re,jt,Ct.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ft,It,Ct.width,Ct.height,rt.depth,0,re,jt,Ct.data)}else{me&&Oe&&e.texStorage2D(o.TEXTURE_2D,ie,It,ne[0].width,ne[0].height);for(let ft=0,G=ne.length;ft<G;ft++)Ct=ne[ft],I.format!==$n?re!==null?me?e.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,re,Ct.data):e.compressedTexImage2D(o.TEXTURE_2D,ft,It,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,re,jt,Ct.data):e.texImage2D(o.TEXTURE_2D,ft,It,Ct.width,Ct.height,0,re,jt,Ct.data)}else if(I.isDataArrayTexture)me?(Oe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,re,jt,rt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,re,jt,rt.data);else if(I.isData3DTexture)me?(Oe&&e.texStorage3D(o.TEXTURE_3D,ie,It,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,re,jt,rt.data)):e.texImage3D(o.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,re,jt,rt.data);else if(I.isFramebufferTexture){if(Oe)if(me)e.texStorage2D(o.TEXTURE_2D,ie,It,rt.width,rt.height);else{let ft=rt.width,G=rt.height;for(let Mt=0;Mt<ie;Mt++)e.texImage2D(o.TEXTURE_2D,Mt,It,ft,G,0,re,jt,null),ft>>=1,G>>=1}}else if(ne.length>0&&ye){me&&Oe&&e.texStorage2D(o.TEXTURE_2D,ie,It,ne[0].width,ne[0].height);for(let ft=0,G=ne.length;ft<G;ft++)Ct=ne[ft],me?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,re,jt,Ct):e.texImage2D(o.TEXTURE_2D,ft,It,re,jt,Ct);I.generateMipmaps=!1}else me?(Oe&&e.texStorage2D(o.TEXTURE_2D,ie,It,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,re,jt,rt)):e.texImage2D(o.TEXTURE_2D,0,It,re,jt,rt);E(I,ye)&&v(ht),Dt.__version=dt.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Pt(N,I,$){if(I.image.length!==6)return;const ht=at(N,I),lt=I.source;e.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(o.TEXTURE0+$);const Dt=Se.getPrimaries(Se.workingColorSpace),vt=I.colorSpace===kn?null:Se.getPrimaries(I.colorSpace),At=I.colorSpace===kn||Dt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Vt=I.isCompressedTexture||I.image[0].isCompressedTexture,te=I.image[0]&&I.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!Vt&&!te?rt[ft]=M(I.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=te?I.image[ft].image:I.image[ft],rt[ft]=ee(I,rt[ft]);const ye=rt[0],re=f(ye)||r,jt=s.convert(I.format,I.colorSpace),It=s.convert(I.type),Ct=b(I.internalFormat,jt,It,I.colorSpace),ne=r&&I.isVideoTexture!==!0,me=dt.__version===void 0||ht===!0;let Oe=T(I,ye,re);tt(o.TEXTURE_CUBE_MAP,I,re);let ie;if(Vt){ne&&me&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,Ct,ye.width,ye.height);for(let ft=0;ft<6;ft++){ie=rt[ft].mipmaps;for(let G=0;G<ie.length;G++){const Mt=ie[G];I.format!==$n?jt!==null?ne?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,Mt.width,Mt.height,jt,Mt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,Mt.width,Mt.height,jt,It,Mt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,Ct,Mt.width,Mt.height,0,jt,It,Mt.data)}}}else{ie=I.mipmaps,ne&&me&&(ie.length>0&&Oe++,e.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,Ct,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(te){ne?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,jt,It,rt[ft].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ct,rt[ft].width,rt[ft].height,0,jt,It,rt[ft].data);for(let G=0;G<ie.length;G++){const _t=ie[G].image[ft].image;ne?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,_t.width,_t.height,jt,It,_t.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,Ct,_t.width,_t.height,0,jt,It,_t.data)}}else{ne?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,jt,It,rt[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ct,jt,It,rt[ft]);for(let G=0;G<ie.length;G++){const Mt=ie[G];ne?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,jt,It,Mt.image[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,Ct,jt,It,Mt.image[ft])}}}E(I,re)&&v(o.TEXTURE_CUBE_MAP),dt.__version=lt.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Ut(N,I,$,ht,lt,dt){const Dt=s.convert($.format,$.colorSpace),vt=s.convert($.type),At=b($.internalFormat,Dt,vt,$.colorSpace);if(!n.get(I).__hasExternalTextures){const te=Math.max(1,I.width>>dt),rt=Math.max(1,I.height>>dt);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,At,te,rt,I.depth,0,Dt,vt,null):e.texImage2D(lt,dt,At,te,rt,0,Dt,vt,null)}e.bindFramebuffer(o.FRAMEBUFFER,N),Lt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,lt,n.get($).__webglTexture,0,Kt(I)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,lt,n.get($).__webglTexture,dt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(N,I,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),I.depthBuffer&&!I.stencilBuffer){let ht=r===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if($||Lt(I)){const lt=I.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Di?ht=o.DEPTH_COMPONENT32F:lt.type===Ii&&(ht=o.DEPTH_COMPONENT24));const dt=Kt(I);Lt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,ht,I.width,I.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,ht,I.width,I.height)}else o.renderbufferStorage(o.RENDERBUFFER,ht,I.width,I.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,N)}else if(I.depthBuffer&&I.stencilBuffer){const ht=Kt(I);$&&Lt(I)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,I.width,I.height):Lt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,N)}else{const ht=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Dt=s.convert(dt.format,dt.colorSpace),vt=s.convert(dt.type),At=b(dt.internalFormat,Dt,vt,dt.colorSpace),Vt=Kt(I);$&&Lt(I)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,At,I.width,I.height):Lt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,At,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,At,I.width,I.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(N,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Z(I.depthTexture,0);const ht=n.get(I.depthTexture).__webglTexture,lt=Kt(I);if(I.depthTexture.format===is)Lt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(I.depthTexture.format===Vs)Lt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Gt(N){const I=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!I.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Qt(I.__webglFramebuffer,N)}else if($){I.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer[ht]),I.__webglDepthbuffer[ht]=o.createRenderbuffer(),Jt(I.__webglDepthbuffer[ht],N,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=o.createRenderbuffer(),Jt(I.__webglDepthbuffer,N,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(N,I,$){const ht=n.get(N);I!==void 0&&Ut(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Gt(N)}function K(N){const I=N.texture,$=n.get(N),ht=n.get(I);N.addEventListener("dispose",U),N.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=I.version,a.memory.textures++);const lt=N.isWebGLCubeRenderTarget===!0,dt=N.isWebGLMultipleRenderTargets===!0,Dt=f(N)||r;if(lt){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(r&&I.mipmaps&&I.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let At=0;At<I.mipmaps.length;At++)$.__webglFramebuffer[vt][At]=o.createFramebuffer()}else $.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(r&&I.mipmaps&&I.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<I.mipmaps.length;vt++)$.__webglFramebuffer[vt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(dt)if(i.drawBuffers){const vt=N.texture;for(let At=0,Vt=vt.length;At<Vt;At++){const te=n.get(vt[At]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&N.samples>0&&Lt(N)===!1){const vt=dt?I:[I];$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Vt=vt[At];$.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const te=s.convert(Vt.format,Vt.colorSpace),rt=s.convert(Vt.type),ye=b(Vt.internalFormat,te,rt,Vt.colorSpace,N.isXRRenderTarget===!0),re=Kt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,ye,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,$.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Jt($.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){e.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),tt(o.TEXTURE_CUBE_MAP,I,Dt);for(let vt=0;vt<6;vt++)if(r&&I.mipmaps&&I.mipmaps.length>0)for(let At=0;At<I.mipmaps.length;At++)Ut($.__webglFramebuffer[vt][At],N,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else Ut($.__webglFramebuffer[vt],N,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(I,Dt)&&v(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=N.texture;for(let At=0,Vt=vt.length;At<Vt;At++){const te=vt[At],rt=n.get(te);e.bindTexture(o.TEXTURE_2D,rt.__webglTexture),tt(o.TEXTURE_2D,te,Dt),Ut($.__webglFramebuffer,N,te,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),E(te,Dt)&&v(o.TEXTURE_2D)}e.unbindTexture()}else{let vt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(r?vt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),tt(vt,I,Dt),r&&I.mipmaps&&I.mipmaps.length>0)for(let At=0;At<I.mipmaps.length;At++)Ut($.__webglFramebuffer[At],N,I,o.COLOR_ATTACHMENT0,vt,At);else Ut($.__webglFramebuffer,N,I,o.COLOR_ATTACHMENT0,vt,0);E(I,Dt)&&v(vt),e.unbindTexture()}N.depthBuffer&&Gt(N)}function _e(N){const I=f(N)||r,$=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ht=0,lt=$.length;ht<lt;ht++){const dt=$[ht];if(E(dt,I)){const Dt=N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,vt=n.get(dt).__webglTexture;e.bindTexture(Dt,vt),v(Dt),e.unbindTexture()}}}function zt(N){if(r&&N.samples>0&&Lt(N)===!1){const I=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],$=N.width,ht=N.height;let lt=o.COLOR_BUFFER_BIT;const dt=[],Dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=n.get(N),At=N.isWebGLMultipleRenderTargets===!0;if(At)for(let Vt=0;Vt<I.length;Vt++)e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Vt=0;Vt<I.length;Vt++){dt.push(o.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&dt.push(Dt);const te=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(te===!1&&(N.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&(lt|=o.STENCIL_BUFFER_BIT)),At&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,vt.__webglColorRenderbuffer[Vt]),te===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Dt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Dt])),At){const rt=n.get(I[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,$,ht,0,0,$,ht,lt,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Vt=0;Vt<I.length;Vt++){e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,vt.__webglColorRenderbuffer[Vt]);const te=n.get(I[Vt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,te,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Kt(N){return Math.min(i.maxSamples,N.samples)}function Lt(N){const I=n.get(N);return r&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Me(N){const I=a.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())}function ee(N,I){const $=N.colorSpace,ht=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Lc||$!==xi&&$!==kn&&(Se.getTransfer($)===Ue?r===!1?t.has("EXT_sRGB")===!0&&ht===$n?(N.format=Lc,N.minFilter=Bn,N.generateMipmaps=!1):I=Fd.sRGBToLinear(I):(ht!==$n||lt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),I}this.allocateTextureUnit=z,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=ue,this.setupRenderTarget=K,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Lt}function Lx(o,t,e){const n=e.isWebGL2;function i(s,a=kn){let r;const c=Se.getTransfer(a);if(s===Ni)return o.UNSIGNED_BYTE;if(s===Pd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ld)return o.UNSIGNED_SHORT_5_5_5_1;if(s===uf)return o.BYTE;if(s===ff)return o.SHORT;if(s===Jc)return o.UNSIGNED_SHORT;if(s===Rd)return o.INT;if(s===Ii)return o.UNSIGNED_INT;if(s===Di)return o.FLOAT;if(s===Eo)return n?o.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===pf)return o.ALPHA;if(s===$n)return o.RGBA;if(s===mf)return o.LUMINANCE;if(s===gf)return o.LUMINANCE_ALPHA;if(s===is)return o.DEPTH_COMPONENT;if(s===Vs)return o.DEPTH_STENCIL;if(s===Lc)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===xf)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===vf)return o.RG;if(s===Dd)return o.RG_INTEGER;if(s===Od)return o.RGBA_INTEGER;if(s===ga||s===xa||s===va||s===_a)if(c===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gl||s===xl||s===vl||s===_l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yl||s===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===yl)return c===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Ml)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bl||s===El||s===Sl||s===wl||s===Tl||s===Al||s===Cl||s===Rl||s===Pl||s===Ll||s===Il||s===Dl||s===Ol||s===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===bl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Il)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return c===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ya||s===Ul||s===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===ya)return c===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_f||s===kl||s===zl||s===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(s===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ns?n?o.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Ix extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dx={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),u=this._getHandJoint(l,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),x=.02,g=.005;l.inputState.pinching&&p>x+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=x-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ox extends $s{constructor(t,e){super();const n=this;let i=null,s=1,a=null,r="local-floor",c=1,l=null,h=null,d=null,p=null,x=null,g=null;const M=e.getContextAttributes();let f=null,u=null;const E=[],v=[],b=new se;let T=null;const S=new Ln;S.layers.enable(1),S.viewport=new ke;const C=new Ln;C.layers.enable(2),C.viewport=new ke;const U=[S,C],w=new Ix;w.layers.enable(1),w.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=E[tt];return at===void 0&&(at=new Wa,E[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=E[tt];return at===void 0&&(at=new Wa,E[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=E[tt];return at===void 0&&(at=new Wa,E[tt]=at),at.getHandSpace()};function V(tt){const at=v.indexOf(tt.inputSource);if(at===-1)return;const Et=E[at];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,l||a),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",z);for(let tt=0;tt<E.length;tt++){const at=v[tt];at!==null&&(v[tt]=null,E[tt].disconnect(at))}R=null,F=null,t.setRenderTarget(f),x=null,p=null,d=null,i=null,u=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),u=new os(x.framebufferWidth,x.framebufferHeight,{format:$n,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let at=null,Et=null,Pt=null;M.depth&&(Pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=M.stencil?Vs:is,Et=M.stencil?ns:Ii);const Ut={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(Ut),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new os(p.textureWidth,p.textureHeight,{format:$n,type:Ni,depthTexture:new Zd(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Jt=t.properties.get(u);Jt.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(tt){for(let at=0;at<tt.removed.length;at++){const Et=tt.removed[at],Pt=v.indexOf(Et);Pt>=0&&(v[Pt]=null,E[Pt].disconnect(Et))}for(let at=0;at<tt.added.length;at++){const Et=tt.added[at];let Pt=v.indexOf(Et);if(Pt===-1){for(let Jt=0;Jt<E.length;Jt++)if(Jt>=v.length){v.push(Et),Pt=Jt;break}else if(v[Jt]===null){v[Jt]=Et,Pt=Jt;break}if(Pt===-1)break}const Ut=E[Pt];Ut&&Ut.connect(Et)}}const q=new B,Z=new B;function Q(tt,at,Et){q.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(Et.matrixWorld);const Pt=q.distanceTo(Z),Ut=at.projectionMatrix.elements,Jt=Et.projectionMatrix.elements,Qt=Ut[14]/(Ut[10]-1),Gt=Ut[14]/(Ut[10]+1),ue=(Ut[9]+1)/Ut[5],K=(Ut[9]-1)/Ut[5],_e=(Ut[8]-1)/Ut[0],zt=(Jt[8]+1)/Jt[0],Kt=Qt*_e,Lt=Qt*zt,Me=Pt/(-_e+zt),ee=Me*-_e;at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ee),tt.translateZ(Me),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();const N=Qt+Me,I=Gt+Me,$=Kt-ee,ht=Lt+(Pt-ee),lt=ue*Gt/I*N,dt=K*Gt/I*N;tt.projectionMatrix.makePerspective($,ht,lt,dt,N,I),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function it(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;w.near=C.near=S.near=tt.near,w.far=C.far=S.far=tt.far,(R!==w.near||F!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,F=w.far);const at=tt.parent,Et=w.cameras;it(w,at);for(let Pt=0;Pt<Et.length;Pt++)it(Et[Pt],at);Et.length===2?Q(w,S,C):w.projectionMatrix.copy(S.projectionMatrix),st(tt,w,at)};function st(tt,at,Et){Et===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ic*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(tt){c=tt,p!==null&&(p.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)};let ot=null;function ut(tt,at){if(h=at.getViewerPose(l||a),g=at,h!==null){const Et=h.views;x!==null&&(t.setRenderTargetFramebuffer(u,x.framebuffer),t.setRenderTarget(u));let Pt=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,Pt=!0);for(let Ut=0;Ut<Et.length;Ut++){const Jt=Et[Ut];let Qt=null;if(x!==null)Qt=x.getViewport(Jt);else{const ue=d.getViewSubImage(p,Jt);Qt=ue.viewport,Ut===0&&(t.setRenderTargetTextures(u,ue.colorTexture,p.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(u))}let Gt=U[Ut];Gt===void 0&&(Gt=new Ln,Gt.layers.enable(Ut),Gt.viewport=new ke,U[Ut]=Gt),Gt.matrix.fromArray(Jt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Jt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ut===0&&(w.matrix.copy(Gt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Pt===!0&&w.cameras.push(Gt)}}for(let Et=0;Et<E.length;Et++){const Pt=v[Et],Ut=E[Et];Pt!==null&&Ut!==void 0&&Ut.update(Pt,at,l||a)}ot&&ot(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const pt=new $d;pt.setAnimationLoop(ut),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}}function Nx(o,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Yd(o)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function i(f,u,E,v,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),d(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),p(f,u),u.isMeshPhysicalMaterial&&x(f,u,b)):u.isMeshMatcapMaterial?(s(f,u),g(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),M(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&r(f,u)):u.isPointsMaterial?c(f,u,E,v):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===xn&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===xn&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const E=t.get(u).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const v=o._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function r(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,E,v){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*E,f.scale.value=v*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),t.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function x(f,u,E){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const E=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ux(o,t,e,n){let i={},s={},a=[];const r=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,v){const b=v.program;n.uniformBlockBinding(E,b)}function l(E,v){let b=i[E.id];b===void 0&&(g(E),b=h(E),i[E.id]=b,E.addEventListener("dispose",f));const T=v.program;n.updateUBOMapping(E,T);const S=t.render.frame;s[E.id]!==S&&(p(E),s[E.id]=S)}function h(E){const v=d();E.__bindingPointIndex=v;const b=o.createBuffer(),T=E.__size,S=E.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,T,S),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,b),b}function d(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const v=i[E.id],b=E.uniforms,T=E.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let S=0,C=b.length;S<C;S++){const U=Array.isArray(b[S])?b[S]:[b[S]];for(let w=0,R=U.length;w<R;w++){const F=U[w];if(x(F,S,w,T)===!0){const V=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let z=0;for(let q=0;q<j.length;q++){const Z=j[q],Q=M(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,V+z,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):(Z.toArray(F.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,V,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(E,v,b,T){const S=E.value,C=v+"_"+b;if(T[C]===void 0)return typeof S=="number"||typeof S=="boolean"?T[C]=S:T[C]=S.clone(),!0;{const U=T[C];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return T[C]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function g(E){const v=E.uniforms;let b=0;const T=16;for(let C=0,U=v.length;C<U;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let R=0,F=w.length;R<F;R++){const V=w[R],j=Array.isArray(V.value)?V.value:[V.value];for(let z=0,q=j.length;z<q;z++){const Z=j[z],Q=M(Z),it=b%T;it!==0&&T-it<Q.boundary&&(b+=T-it),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=Q.storage}}}const S=b%T;return S>0&&(b+=T-S),E.__size=b,E.__cache={},this}function M(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function f(E){const v=E.target;v.removeEventListener("dispose",f);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function u(){for(const E in i)o.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:c,update:l,dispose:u}}class iu{constructor(t={}){const{canvas:e=If(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const x=new Uint32Array(4),g=new Int32Array(4);let M=null,f=null;const u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let b=!1,T=0,S=0,C=null,U=-1,w=null;const R=new ke,F=new ke;let V=null;const j=new yt(0);let z=0,q=e.width,Z=e.height,Q=1,it=null,st=null;const ot=new ke(0,0,q,Z),ut=new ke(0,0,q,Z);let pt=!1;const tt=new el;let at=!1,Et=!1,Pt=null;const Ut=new Re,Jt=new se,Qt=new B,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return C===null?Q:1}let K=n;function _e(L,k){for(let Y=0;Y<L.length;Y++){const H=L[Y],X=e.getContext(H,k);if(X!==null)return X}return null}try{const L={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),K===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),K=_e(k,L),K===null)throw _e(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let zt,Kt,Lt,Me,ee,N,I,$,ht,lt,dt,Dt,vt,At,Vt,te,rt,ye,re,jt,It,Ct,ne,me;function Oe(){zt=new Y0(K),Kt=new F0(K,zt,t),zt.init(Kt),Ct=new Lx(K,zt,Kt),Lt=new Rx(K,zt,Kt),Me=new $0(K),ee=new mx,N=new Px(K,zt,Lt,ee,Kt,Ct,Me),I=new H0(v),$=new X0(v),ht=new ip(K,Kt),ne=new k0(K,zt,ht,Kt),lt=new q0(K,ht,Me,ne),dt=new Q0(K,lt,ht,Me),re=new J0(K,Kt,N),te=new G0(ee),Dt=new px(v,I,$,zt,Kt,ne,te),vt=new Nx(v,ee),At=new xx,Vt=new Ex(zt,Kt),ye=new B0(v,I,$,Lt,dt,p,c),rt=new Cx(v,dt,Kt),me=new Ux(K,Me,Kt,Lt),jt=new z0(K,zt,Me,Kt),It=new j0(K,zt,Me,Kt),Me.programs=Dt.programs,v.capabilities=Kt,v.extensions=zt,v.properties=ee,v.renderLists=At,v.shadowMap=rt,v.state=Lt,v.info=Me}Oe();const ie=new Ox(v,K);this.xr=ie,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=zt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=zt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(L){L!==void 0&&(Q=L,this.setSize(q,Z,!1))},this.getSize=function(L){return L.set(q,Z)},this.setSize=function(L,k,Y=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,Z=k,e.width=Math.floor(L*Q),e.height=Math.floor(k*Q),Y===!0&&(e.style.width=L+"px",e.style.height=k+"px"),this.setViewport(0,0,L,k)},this.getDrawingBufferSize=function(L){return L.set(q*Q,Z*Q).floor()},this.setDrawingBufferSize=function(L,k,Y){q=L,Z=k,Q=Y,e.width=Math.floor(L*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,L,k)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(ot)},this.setViewport=function(L,k,Y,H){L.isVector4?ot.set(L.x,L.y,L.z,L.w):ot.set(L,k,Y,H),Lt.viewport(R.copy(ot).multiplyScalar(Q).floor())},this.getScissor=function(L){return L.copy(ut)},this.setScissor=function(L,k,Y,H){L.isVector4?ut.set(L.x,L.y,L.z,L.w):ut.set(L,k,Y,H),Lt.scissor(F.copy(ut).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(L){Lt.setScissorTest(pt=L)},this.setOpaqueSort=function(L){it=L},this.setTransparentSort=function(L){st=L},this.getClearColor=function(L){return L.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(L=!0,k=!0,Y=!0){let H=0;if(L){let X=!1;if(C!==null){const nt=C.texture.format;X=nt===Od||nt===Dd||nt===Id}if(X){const nt=C.texture.type,ct=nt===Ni||nt===Ii||nt===Jc||nt===ns||nt===Pd||nt===Ld,J=ye.getClearColor(),mt=ye.getClearAlpha(),kt=J.r,wt=J.g,gt=J.b;ct?(x[0]=kt,x[1]=wt,x[2]=gt,x[3]=mt,K.clearBufferuiv(K.COLOR,0,x)):(g[0]=kt,g[1]=wt,g[2]=gt,g[3]=mt,K.clearBufferiv(K.COLOR,0,g))}else H|=K.COLOR_BUFFER_BIT}k&&(H|=K.DEPTH_BUFFER_BIT),Y&&(H|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),At.dispose(),Vt.dispose(),ee.dispose(),I.dispose(),$.dispose(),dt.dispose(),ne.dispose(),me.dispose(),Dt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",tn),ie.removeEventListener("sessionend",fe),Pt&&(Pt.dispose(),Pt=null),qe.stop()};function ft(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=Me.autoReset,k=rt.enabled,Y=rt.autoUpdate,H=rt.needsUpdate,X=rt.type;Oe(),Me.autoReset=L,rt.enabled=k,rt.autoUpdate=Y,rt.needsUpdate=H,rt.type=X}function Mt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _t(L){const k=L.target;k.removeEventListener("dispose",_t),Xt(k)}function Xt(L){Ft(L),ee.remove(L)}function Ft(L){const k=ee.get(L).programs;k!==void 0&&(k.forEach(function(Y){Dt.releaseProgram(Y)}),L.isShaderMaterial&&Dt.releaseShaderCache(L))}this.renderBufferDirect=function(L,k,Y,H,X,nt){k===null&&(k=Gt);const ct=X.isMesh&&X.matrixWorld.determinant()<0,J=Nt(L,k,Y,H,X);Lt.setMaterial(H,ct);let mt=Y.index,kt=1;if(H.wireframe===!0){if(mt=lt.getWireframeAttribute(Y),mt===void 0)return;kt=2}const wt=Y.drawRange,gt=Y.attributes.position;let Bt=wt.start*kt,He=(wt.start+wt.count)*kt;nt!==null&&(Bt=Math.max(Bt,nt.start*kt),He=Math.min(He,(nt.start+nt.count)*kt)),mt!==null?(Bt=Math.max(Bt,0),He=Math.min(He,mt.count)):gt!=null&&(Bt=Math.max(Bt,0),He=Math.min(He,gt.count));const Te=He-Bt;if(Te<0||Te===1/0)return;ne.setup(X,H,J,Y,mt);let Ve,oe=jt;if(mt!==null&&(Ve=ht.get(mt),oe=It,oe.setIndex(Ve)),X.isMesh)H.wireframe===!0?(Lt.setLineWidth(H.wireframeLinewidth*ue()),oe.setMode(K.LINES)):oe.setMode(K.TRIANGLES);else if(X.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),Lt.setLineWidth(Ot*ue()),X.isLineSegments?oe.setMode(K.LINES):X.isLineLoop?oe.setMode(K.LINE_LOOP):oe.setMode(K.LINE_STRIP)}else X.isPoints?oe.setMode(K.POINTS):X.isSprite&&oe.setMode(K.TRIANGLES);if(X.isBatchedMesh)oe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)oe.renderInstances(Bt,Te,X.count);else if(Y.isInstancedBufferGeometry){const Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_i=Math.min(Y.instanceCount,Ot);oe.renderInstances(Bt,Te,_i)}else oe.render(Bt,Te)};function be(L,k,Y){L.transparent===!0&&L.side===ii&&L.forceSinglePass===!1?(L.side=xn,L.needsUpdate=!0,P(L,k,Y),L.side=gi,L.needsUpdate=!0,P(L,k,Y),L.side=ii):P(L,k,Y)}this.compile=function(L,k,Y=null){Y===null&&(Y=L),f=Vt.get(Y),f.init(),E.push(f),Y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),L!==Y&&L.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(v._useLegacyLights);const H=new Set;return L.traverse(function(X){const nt=X.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const J=nt[ct];be(J,Y,X),H.add(J)}else be(nt,Y,X),H.add(nt)}),E.pop(),f=null,H},this.compileAsync=function(L,k,Y=null){const H=this.compile(L,k,Y);return new Promise(X=>{function nt(){if(H.forEach(function(ct){ee.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){X(L);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ee=null;function ve(L){Ee&&Ee(L)}function tn(){qe.stop()}function fe(){qe.start()}const qe=new $d;qe.setAnimationLoop(ve),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(L){Ee=L,ie.setAnimationLoop(L),L===null?qe.stop():qe.start()},ie.addEventListener("sessionstart",tn),ie.addEventListener("sessionend",fe),this.render=function(L,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,k,C),f=Vt.get(L,E.length),f.init(),E.push(f),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(Ut),Et=this.localClippingEnabled,at=te.init(this.clippingPlanes,Et),M=At.get(L,u.length),M.init(),u.push(M),yn(L,k,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(it,st),this.info.render.frame++,at===!0&&te.beginShadows();const Y=f.state.shadowsArray;if(rt.render(Y,L,k),at===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(M,L),f.setupLights(v._useLegacyLights),k.isArrayCamera){const H=k.cameras;for(let X=0,nt=H.length;X<nt;X++){const ct=H[X];Po(M,L,ct,ct.viewport)}}else Po(M,L,k);C!==null&&(N.updateMultisampleRenderTarget(C),N.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(v,L,k),ne.resetDefaultState(),U=-1,w=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function yn(L,k,Y,H){if(L.visible===!1)return;if(L.layers.test(k.layers)){if(L.isGroup)Y=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(k);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||tt.intersectsSprite(L)){H&&Qt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ut);const ct=dt.update(L),J=L.material;J.visible&&M.push(L,ct,J,Y,Qt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||tt.intersectsObject(L))){const ct=dt.update(L),J=L.material;if(H&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Qt.copy(L.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Qt.copy(ct.boundingSphere.center)),Qt.applyMatrix4(L.matrixWorld).applyMatrix4(Ut)),Array.isArray(J)){const mt=ct.groups;for(let kt=0,wt=mt.length;kt<wt;kt++){const gt=mt[kt],Bt=J[gt.materialIndex];Bt&&Bt.visible&&M.push(L,ct,Bt,Y,Qt.z,gt)}}else J.visible&&M.push(L,ct,J,Y,Qt.z,null)}}const nt=L.children;for(let ct=0,J=nt.length;ct<J;ct++)yn(nt[ct],k,Y,H)}function Po(L,k,Y,H){const X=L.opaque,nt=L.transmissive,ct=L.transparent;f.setupLightsView(Y),at===!0&&te.setGlobalState(v.clippingPlanes,Y),nt.length>0&&_(X,nt,k,Y),H&&Lt.viewport(R.copy(H)),X.length>0&&m(X,k,Y),nt.length>0&&m(nt,k,Y),ct.length>0&&m(ct,k,Y),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function _(L,k,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const nt=Kt.isWebGL2;Pt===null&&(Pt=new os(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")?Eo:Ni,minFilter:bo,samples:nt?4:0})),v.getDrawingBufferSize(Jt),nt?Pt.setSize(Jt.x,Jt.y):Pt.setSize(Dc(Jt.x),Dc(Jt.y));const ct=v.getRenderTarget();v.setRenderTarget(Pt),v.getClearColor(j),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const J=v.toneMapping;v.toneMapping=mi,m(L,Y,H),N.updateMultisampleRenderTarget(Pt),N.updateRenderTargetMipmap(Pt);let mt=!1;for(let kt=0,wt=k.length;kt<wt;kt++){const gt=k[kt],Bt=gt.object,He=gt.geometry,Te=gt.material,Ve=gt.group;if(Te.side===ii&&Bt.layers.test(H.layers)){const oe=Te.side;Te.side=xn,Te.needsUpdate=!0,y(Bt,Y,H,He,Te,Ve),Te.side=oe,Te.needsUpdate=!0,mt=!0}}mt===!0&&(N.updateMultisampleRenderTarget(Pt),N.updateRenderTargetMipmap(Pt)),v.setRenderTarget(ct),v.setClearColor(j,z),v.toneMapping=J}function m(L,k,Y){const H=k.isScene===!0?k.overrideMaterial:null;for(let X=0,nt=L.length;X<nt;X++){const ct=L[X],J=ct.object,mt=ct.geometry,kt=H===null?ct.material:H,wt=ct.group;J.layers.test(Y.layers)&&y(J,k,Y,mt,kt,wt)}}function y(L,k,Y,H,X,nt){L.onBeforeRender(v,k,Y,H,X,nt),L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(v,k,Y,H,L,nt),X.transparent===!0&&X.side===ii&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,v.renderBufferDirect(Y,k,H,X,L,nt),X.side=gi,X.needsUpdate=!0,v.renderBufferDirect(Y,k,H,X,L,nt),X.side=ii):v.renderBufferDirect(Y,k,H,X,L,nt),L.onAfterRender(v,k,Y,H,X,nt)}function P(L,k,Y){k.isScene!==!0&&(k=Gt);const H=ee.get(L),X=f.state.lights,nt=f.state.shadowsArray,ct=X.state.version,J=Dt.getParameters(L,X.state,nt,k,Y),mt=Dt.getProgramCacheKey(J);let kt=H.programs;H.environment=L.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(L.isMeshStandardMaterial?$:I).get(L.envMap||H.environment),kt===void 0&&(L.addEventListener("dispose",_t),kt=new Map,H.programs=kt);let wt=kt.get(mt);if(wt!==void 0){if(H.currentProgram===wt&&H.lightsStateVersion===ct)return et(L,J),wt}else J.uniforms=Dt.getUniforms(L),L.onBuild(Y,J,v),L.onBeforeCompile(J,v),wt=Dt.acquireProgram(J,mt),kt.set(mt,wt),H.uniforms=J.uniforms;const gt=H.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(gt.clippingPlanes=te.uniform),et(L,J),H.needsLights=de(L),H.lightsStateVersion=ct,H.needsLights&&(gt.ambientLightColor.value=X.state.ambient,gt.lightProbe.value=X.state.probe,gt.directionalLights.value=X.state.directional,gt.directionalLightShadows.value=X.state.directionalShadow,gt.spotLights.value=X.state.spot,gt.spotLightShadows.value=X.state.spotShadow,gt.rectAreaLights.value=X.state.rectArea,gt.ltc_1.value=X.state.rectAreaLTC1,gt.ltc_2.value=X.state.rectAreaLTC2,gt.pointLights.value=X.state.point,gt.pointLightShadows.value=X.state.pointShadow,gt.hemisphereLights.value=X.state.hemi,gt.directionalShadowMap.value=X.state.directionalShadowMap,gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,gt.spotShadowMap.value=X.state.spotShadowMap,gt.spotLightMatrix.value=X.state.spotLightMatrix,gt.spotLightMap.value=X.state.spotLightMap,gt.pointShadowMap.value=X.state.pointShadowMap,gt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.currentProgram=wt,H.uniformsList=null,wt}function W(L){if(L.uniformsList===null){const k=L.currentProgram.getUniforms();L.uniformsList=Rr.seqWithValue(k.seq,L.uniforms)}return L.uniformsList}function et(L,k){const Y=ee.get(L);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Nt(L,k,Y,H,X){k.isScene!==!0&&(k=Gt),N.resetTextureUnits();const nt=k.fog,ct=H.isMeshStandardMaterial?k.environment:null,J=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xi,mt=(H.isMeshStandardMaterial?$:I).get(H.envMap||ct),kt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,wt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),gt=!!Y.morphAttributes.position,Bt=!!Y.morphAttributes.normal,He=!!Y.morphAttributes.color;let Te=mi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Te=v.toneMapping);const Ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Ve!==void 0?Ve.length:0,Ot=ee.get(H),_i=f.state.lights;if(at===!0&&(Et===!0||L!==w)){const Dn=L===w&&H.id===U;te.setState(H,L,Dn)}let ge=!1;H.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==_i.state.version||Ot.outputColorSpace!==J||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||Ot.envMap!==mt||H.fog===!0&&Ot.fog!==nt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==te.numPlanes||Ot.numIntersection!==te.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==wt||Ot.morphTargets!==gt||Ot.morphNormals!==Bt||Ot.morphColors!==He||Ot.toneMapping!==Te||Kt.isWebGL2===!0&&Ot.morphTargetsCount!==oe)&&(ge=!0):(ge=!0,Ot.__version=H.version);let Fn=Ot.currentProgram;ge===!0&&(Fn=P(H,k,X));let Gn=!1,Jn=!1,ua=!1;const rn=Fn.getUniforms(),Fi=Ot.uniforms;if(Lt.useProgram(Fn.program)&&(Gn=!0,Jn=!0,ua=!0),H.id!==U&&(U=H.id,Jn=!0),Gn||w!==L){rn.setValue(K,"projectionMatrix",L.projectionMatrix),rn.setValue(K,"viewMatrix",L.matrixWorldInverse);const Dn=rn.map.cameraPosition;Dn!==void 0&&Dn.setValue(K,Qt.setFromMatrixPosition(L.matrixWorld)),Kt.logarithmicDepthBuffer&&rn.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rn.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Jn=!0,ua=!0)}if(X.isSkinnedMesh){rn.setOptional(K,X,"bindMatrix"),rn.setOptional(K,X,"bindMatrixInverse");const Dn=X.skeleton;Dn&&(Kt.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),rn.setValue(K,"boneTexture",Dn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(rn.setOptional(K,X,"batchingTexture"),rn.setValue(K,"batchingTexture",X._matricesTexture,N));const fa=Y.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Kt.isWebGL2===!0)&&re.update(X,Y,Fn),(Jn||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,rn.setValue(K,"receiveShadow",X.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fi.envMap.value=mt,Fi.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),Jn&&(rn.setValue(K,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Rt(Fi,ua),nt&&H.fog===!0&&vt.refreshFogUniforms(Fi,nt),vt.refreshMaterialUniforms(Fi,H,Q,Z,Pt),Rr.upload(K,W(Ot),Fi,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rr.upload(K,W(Ot),Fi,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rn.setValue(K,"center",X.center),rn.setValue(K,"modelViewMatrix",X.modelViewMatrix),rn.setValue(K,"normalMatrix",X.normalMatrix),rn.setValue(K,"modelMatrix",X.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Dn=H.uniformsGroups;for(let pa=0,Au=Dn.length;pa<Au;pa++)if(Kt.isWebGL2){const cl=Dn[pa];me.update(cl,Fn),me.bind(cl,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Rt(L,k){L.ambientLightColor.needsUpdate=k,L.lightProbe.needsUpdate=k,L.directionalLights.needsUpdate=k,L.directionalLightShadows.needsUpdate=k,L.pointLights.needsUpdate=k,L.pointLightShadows.needsUpdate=k,L.spotLights.needsUpdate=k,L.spotLightShadows.needsUpdate=k,L.rectAreaLights.needsUpdate=k,L.hemisphereLights.needsUpdate=k}function de(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,k,Y){ee.get(L.texture).__webglTexture=k,ee.get(L.depthTexture).__webglTexture=Y;const H=ee.get(L);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=Y===void 0,H.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,k){const Y=ee.get(L);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(L,k=0,Y=0){C=L,T=k,S=Y;let H=!0,X=null,nt=!1,ct=!1;if(L){const mt=ee.get(L);mt.__useDefaultFramebuffer!==void 0?(Lt.bindFramebuffer(K.FRAMEBUFFER,null),H=!1):mt.__webglFramebuffer===void 0?N.setupRenderTarget(L):mt.__hasExternalTextures&&N.rebindTextures(L,ee.get(L.texture).__webglTexture,ee.get(L.depthTexture).__webglTexture);const kt=L.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ct=!0);const wt=ee.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(wt[k])?X=wt[k][Y]:X=wt[k],nt=!0):Kt.isWebGL2&&L.samples>0&&N.useMultisampledRTT(L)===!1?X=ee.get(L).__webglMultisampledFramebuffer:Array.isArray(wt)?X=wt[Y]:X=wt,R.copy(L.viewport),F.copy(L.scissor),V=L.scissorTest}else R.copy(ot).multiplyScalar(Q).floor(),F.copy(ut).multiplyScalar(Q).floor(),V=pt;if(Lt.bindFramebuffer(K.FRAMEBUFFER,X)&&Kt.drawBuffers&&H&&Lt.drawBuffers(L,X),Lt.viewport(R),Lt.scissor(F),Lt.setScissorTest(V),nt){const mt=ee.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+k,mt.__webglTexture,Y)}else if(ct){const mt=ee.get(L.texture),kt=k||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,mt.__webglTexture,Y||0,kt)}U=-1},this.readRenderTargetPixels=function(L,k,Y,H,X,nt,ct){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ct!==void 0&&(J=J[ct]),J){Lt.bindFramebuffer(K.FRAMEBUFFER,J);try{const mt=L.texture,kt=mt.format,wt=mt.type;if(kt!==$n&&Ct.convert(kt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=wt===Eo&&(zt.has("EXT_color_buffer_half_float")||Kt.isWebGL2&&zt.has("EXT_color_buffer_float"));if(wt!==Ni&&Ct.convert(wt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===Di&&(Kt.isWebGL2||zt.has("OES_texture_float")||zt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=L.width-H&&Y>=0&&Y<=L.height-X&&K.readPixels(k,Y,H,X,Ct.convert(kt),Ct.convert(wt),nt)}finally{const mt=C!==null?ee.get(C).__webglFramebuffer:null;Lt.bindFramebuffer(K.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(L,k,Y=0){const H=Math.pow(2,-Y),X=Math.floor(k.image.width*H),nt=Math.floor(k.image.height*H);N.setTexture2D(k,0),K.copyTexSubImage2D(K.TEXTURE_2D,Y,0,0,L.x,L.y,X,nt),Lt.unbindTexture()},this.copyTextureToTexture=function(L,k,Y,H=0){const X=k.image.width,nt=k.image.height,ct=Ct.convert(Y.format),J=Ct.convert(Y.type);N.setTexture2D(Y,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,H,L.x,L.y,X,nt,ct,J,k.image.data):k.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,H,L.x,L.y,k.mipmaps[0].width,k.mipmaps[0].height,ct,k.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,H,L.x,L.y,ct,J,k.image),H===0&&Y.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(L,k,Y,H,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const nt=L.max.x-L.min.x+1,ct=L.max.y-L.min.y+1,J=L.max.z-L.min.z+1,mt=Ct.convert(H.format),kt=Ct.convert(H.type);let wt;if(H.isData3DTexture)N.setTexture3D(H,0),wt=K.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)N.setTexture2DArray(H,0),wt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,H.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,H.unpackAlignment);const gt=K.getParameter(K.UNPACK_ROW_LENGTH),Bt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),He=K.getParameter(K.UNPACK_SKIP_PIXELS),Te=K.getParameter(K.UNPACK_SKIP_ROWS),Ve=K.getParameter(K.UNPACK_SKIP_IMAGES),oe=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,oe.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,oe.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,L.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,L.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,L.min.z),Y.isDataTexture||Y.isData3DTexture?K.texSubImage3D(wt,X,k.x,k.y,k.z,nt,ct,J,mt,kt,oe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(wt,X,k.x,k.y,k.z,nt,ct,J,mt,oe.data)):K.texSubImage3D(wt,X,k.x,k.y,k.z,nt,ct,J,mt,kt,oe),K.pixelStorei(K.UNPACK_ROW_LENGTH,gt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Bt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,He),K.pixelStorei(K.UNPACK_SKIP_ROWS,Te),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Ve),X===0&&H.generateMipmaps&&K.generateMipmap(wt),Lt.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?N.setTextureCube(L,0):L.isData3DTexture?N.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?N.setTexture2DArray(L,0):N.setTexture2D(L,0),Lt.unbindTexture()},this.resetState=function(){T=0,S=0,C=null,Lt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qc?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?ss:Ud}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ss?on:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Bx extends iu{}Bx.prototype.isWebGL1Renderer=!0;class il{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kx extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class zx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new B;class Gr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hr extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const no=new B,Ts=new B,As=new B,Cs=new se,io=new se,su=new Re,Qo=new B,so=new B,tr=new B,Ch=new se,Xa=new se,Rh=new se;class Nc extends Ye{constructor(t=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zx(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Gr(n,3,0,!1)),ws.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new se(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;er(Qo.set(-.5,-.5,0),As,a,Ts,i,s),er(so.set(.5,-.5,0),As,a,Ts,i,s),er(tr.set(.5,.5,0),As,a,Ts,i,s),Ch.set(0,0),Xa.set(1,0),Rh.set(1,1);let r=t.ray.intersectTriangle(Qo,so,tr,!1,no);if(r===null&&(er(so.set(-.5,.5,0),As,a,Ts,i,s),Xa.set(0,1),r=t.ray.intersectTriangle(Qo,tr,so,!1,no),r===null))return;const c=t.ray.origin.distanceTo(no);c<t.near||c>t.far||e.push({distance:c,point:no.clone(),uv:Pn.getInterpolation(no,Qo,so,tr,Ch,Xa,Rh,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function er(o,t,e,n,i,s){Cs.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(io.x=s*Cs.x-i*Cs.y,io.y=i*Cs.x+s*Cs.y):io.copy(Cs),o.copy(t),o.x+=io.x,o.y+=io.y,o.applyMatrix4(su)}class Ph extends En{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new Re,Lh=new Re,nr=[],Ih=new as,Fx=new Re,oo=new Wt,ro=new cs;class Gx extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ph(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Ih.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),ro.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Rs),Lh.multiplyMatrices(n,Rs),oo.matrixWorld=Lh,oo.raycast(t,nr);for(let a=0,r=nr.length;a<r;a++){const c=nr[a];c.instanceId=s,c.object=this,e.push(c)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ph(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dh=new B,Oh=new B,Nh=new Re,Ya=new Jr,ir=new cs;class Hx extends Ye{constructor(t=new _n,e=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Dh.fromBufferAttribute(e,i-1),Oh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Dh.distanceTo(Oh);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=s,t.ray.intersectsSphere(ir)===!1)return;Nh.copy(i).invert(),Ya.copy(t.ray).applyMatrix4(Nh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new B,h=new B,d=new B,p=new B,x=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let v=u,b=E-1;v<b;v+=x){const T=g.getX(v),S=g.getX(v+1);if(l.fromBufferAttribute(f,T),h.fromBufferAttribute(f,S),Ya.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(p);U<t.near||U>t.far||e.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),E=Math.min(f.count,a.start+a.count);for(let v=u,b=E-1;v<b;v+=x){if(l.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),Ya.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(p);S<t.near||S>t.far||e.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Uh=new B,Bh=new B;class Vx extends Hx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Uh.fromBufferAttribute(e,i),Bh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uh.distanceTo(Bh);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uc extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kh=new Re,Bc=new Jr,sr=new cs,or=new B;class zh extends Ye{constructor(t=new _n,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;kh.copy(i).invert(),Bc.copy(t.ray).applyMatrix4(kh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),x=Math.min(l.count,a.start+a.count);for(let g=p,M=x;g<M;g++){const f=l.getX(g);or.fromBufferAttribute(d,f),Fh(or,f,c,i,t,e,this)}}else{const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=p,M=x;g<M;g++)or.fromBufferAttribute(d,g),Fh(or,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Fh(o,t,e,n,i,s,a){const r=Bc.distanceSqToPoint(o);if(r<e){const c=new B;Bc.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}class Xs extends vn{constructor(t,e,n,i,s,a,r,c,l){super(t,e,n,i,s,a,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vr extends _n{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],p=[],x=[];let g=0;const M=[],f=n/2;let u=0;E(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(p,3)),this.setAttribute("uv",new hn(x,2));function E(){const b=new B,T=new B;let S=0;const C=(e-t)/n;for(let U=0;U<=s;U++){const w=[],R=U/s,F=R*(e-t)+t;for(let V=0;V<=i;V++){const j=V/i,z=j*c+r,q=Math.sin(z),Z=Math.cos(z);T.x=F*q,T.y=-R*n+f,T.z=F*Z,d.push(T.x,T.y,T.z),b.set(q,C,Z).normalize(),p.push(b.x,b.y,b.z),x.push(j,1-R),w.push(g++)}M.push(w)}for(let U=0;U<i;U++)for(let w=0;w<s;w++){const R=M[w][U],F=M[w+1][U],V=M[w+1][U+1],j=M[w][U+1];h.push(R,F,j),h.push(F,V,j),S+=6}l.addGroup(u,S,0),u+=S}function v(b){const T=g,S=new se,C=new B;let U=0;const w=b===!0?t:e,R=b===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,f*R,0),p.push(0,R,0),x.push(.5,.5),g++;const F=g;for(let V=0;V<=i;V++){const z=V/i*c+r,q=Math.cos(z),Z=Math.sin(z);C.x=w*Z,C.y=f*R,C.z=w*q,d.push(C.x,C.y,C.z),p.push(0,R,0),S.x=q*.5+.5,S.y=Z*.5*R+.5,x.push(S.x,S.y),g++}for(let V=0;V<i;V++){const j=T+V,z=F+V;b===!0?h.push(z,z+1,j):h.push(z+1,z,j),U+=3}l.addGroup(u,U,b===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const rr=new B,ar=new B,qa=new B,cr=new Pn;class Wx extends _n{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Cr*e),a=t.getIndex(),r=t.getAttribute("position"),c=a?a.count:r.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},x=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:M,b:f,c:u}=cr;if(M.fromBufferAttribute(r,l[0]),f.fromBufferAttribute(r,l[1]),u.fromBufferAttribute(r,l[2]),cr.getNormal(qa),d[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,d[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,d[2]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const v=(E+1)%3,b=d[E],T=d[v],S=cr[h[E]],C=cr[h[v]],U=`${b}_${T}`,w=`${T}_${b}`;w in p&&p[w]?(qa.dot(p[w].normal)<=s&&(x.push(S.x,S.y,S.z),x.push(C.x,C.y,C.z)),p[w]=null):U in p||(p[U]={index0:l[E],index1:l[v],normal:qa.clone()})}}for(const g in p)if(p[g]){const{index0:M,index1:f}=p[g];rr.fromBufferAttribute(r,M),ar.fromBufferAttribute(r,f),x.push(rr.x,rr.y,rr.z),x.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new hn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class gn extends _n{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let l=0;const h=[],d=new B,p=new B,x=[],g=[],M=[],f=[];for(let u=0;u<=n;u++){const E=[],v=u/n;let b=0;u===0&&a===0?b=.5/e:u===n&&c===Math.PI&&(b=-.5/e);for(let T=0;T<=e;T++){const S=T/e;d.x=-t*Math.cos(i+S*s)*Math.sin(a+v*r),d.y=t*Math.cos(a+v*r),d.z=t*Math.sin(i+S*s)*Math.sin(a+v*r),g.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),f.push(S+b,1-v),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const v=h[u][E+1],b=h[u][E],T=h[u+1][E],S=h[u+1][E+1];(u!==0||a>0)&&x.push(v,b,S),(u!==n-1||c<Math.PI)&&x.push(b,T,S)}this.setIndex(x),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(M,3)),this.setAttribute("uv",new hn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xe extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ea extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Xx extends ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ja=new Re,Gh=new B,Hh=new B;class ru{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vh=new Re,ao=new B,$a=new B;class Yx extends ru{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(ao),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-ao.x,-ao.y,-ao.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class Wh extends ea{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qx extends ru{constructor(){super(new Kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new qx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jx extends ea{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class na{constructor(t,e,n=0,i=1/0){this.ray=new Jr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)kc(t[i],this,n,e);return n.sort(Xh),n}}function Xh(o,t){return o.distance-t.distance}function kc(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let s=0,a=i.length;s<a;s++)kc(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const yo=16,$x=256,Kx=256,Zx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let zc=null,lr=null;function Jx(){return lr||(lr=new Promise(o=>{const t=new Image;t.onload=()=>{const e=new vn(t);e.magFilter=Fe,e.minFilter=Fe,e.generateMipmaps=!1,e.needsUpdate=!0,zc=e,o()},t.onerror=()=>{console.warn("Atlas load failed"),o()},t.src=Zx}),lr)}function Qx(o,t){if(!zc)return tv(o,t);const e=zc.clone();e.needsUpdate=!0;const n=yo/$x,i=yo/Kx;return e.offset.set(o*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=In,e.wrapT=In,e}function tv(o,t){const e=document.createElement("canvas");e.width=e.height=yo;const n=e.getContext("2d"),i=(o*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,yo,yo);const s=new Xs(e);return s.magFilter=Fe,s.minFilter=Fe,s}function ev(o,t,e={}){const n=Qx(o,t),i=new xe({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:gi});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const nv=[0,0],hr=[1,0],Yh=[2,0],Ka=[3,0],iv=[4,0],dr=[5,0],qh=[6,0],sv=[7,0],jh=[9,0],ov=[10,0],rv=[11,0],av=[12,0],cv=[13,0],lv=[14,0],hv=[15,0],dv=[0,1],uv=[1,1],fv=[2,1],pv=[3,1],mv=[4,1],gv=[5,1],xv=[6,1],ur=[7,1],$h=[8,1],vv=[9,1],_v=[10,1],yv=[11,1],Mv=[12,1],bv=[13,1],Za=[14,1],Ev=[15,1],fr=[0,2],Kh=[1,2],pr=[2,2],Sv=[3,2],wv=[6,2],Ja=new Map;function le(o,t,e={}){const n=`${o},${t},${JSON.stringify(e)}`;if(Ja.has(n))return Ja.get(n);const i=ev(o,t,e);return Ja.set(n,i),i}let Ji=null,Us=null,mr=null;function cu(o,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;o.fillStyle="#1a5fa0",o.fillRect(0,0,16,16),o.fillStyle=`rgba(40,130,210,${.45+e*.3})`,o.fillRect(0,Math.round(e*9),16,3),o.fillStyle=`rgba(80,160,240,${.2+n*.2})`,o.fillRect(0,Math.round(n*5)+6,16,2),o.fillStyle=`rgba(180,220,255,${.06+e*.06})`,o.fillRect(Math.round(n*10),0,4,16)}function Tv(){if(mr)return mr;Ji=document.createElement("canvas"),Ji.width=Ji.height=16;const o=Ji.getContext("2d");return cu(o,0),Us=new Xs(Ji),Us.magFilter=Fe,Us.minFilter=Fe,mr=new xe({map:Us,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:ii}),mr}function Av(o){!Ji||!Us||(cu(Ji.getContext("2d"),o),Us.needsUpdate=!0)}function Cv(o,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(o){case 1:return[le(...hr,n),le(...hr,n),le(...nv,n),le(...Yh,n),le(...hr,n),le(...hr,n)];case 2:return ze(Yh,n);case 3:return ze(Ka,n);case 4:return ze(iv,n);case 5:return[le(...dr,n),le(...dr,n),le(...qh,n),le(...qh,n),le(...dr,n),le(...dr,n)];case 6:return ze(sv,{transparent:!0,alphaTest:.5});case 7:{const i=Tv();return[i,i,i,i,i,i]}case 8:return ze(cv,n);case 9:return ze(av,{transparent:!0,opacity:.6});case 10:return ze(jh,n);case 11:return ze(ov,n);case 12:return ze(rv,n);case 13:return ze(dv,n);case 14:return ze(uv,n);case 15:return ze(fv,n);case 16:return ze(lv,n);case 17:return ze(Mv,n);case 18:return ze(vv,n);case 19:return ze(mv,{emissive:16755200});case 20:return ze(gv,n);case 21:return ze(xv,{transparent:!0,opacity:.7});case 22:return[le(...pr,n),le(...pr,n),le(...hv,n),le(...jh,n),le(...pr,n),le(...pr,n)];case 23:return[le(...bv,n),le(...Za,n),le(...Ev,n),le(...Ka,n),le(...Za,n),le(...Za,n)];case 24:return[le(...ur,n),le(...ur,n),le(...$h,n),le(...$h,n),le(...ur,n),le(...ur,n)];case 26:return ze(_v,n);case 27:return ze(yv,n);case 47:return ze(wv,{emissive:16729088});case 49:return[le(...fr,n),le(...fr,n),le(...Kh,n),le(...Kh,n),le(...fr,n),le(...fr,n)];case 54:return ze(Sv,n);case 61:return ze(pv,n);default:{const i=le(...Ka,n);return[i,i,i,i,i,i]}}}function ze(o,t={}){const e=le(o[0],o[1],t);return[e,e,e,e,e,e]}const lu=Math.sqrt(3),Rv=.5*(lu-1),co=(3-lu)/6,Zh=o=>Math.floor(o)|0,Jh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Xn(o=Math.random){const t=Pv(o),e=new Float64Array(t).map(i=>Jh[i%12*2]),n=new Float64Array(t).map(i=>Jh[i%12*2+1]);return function(s,a){let r=0,c=0,l=0;const h=(s+a)*Rv,d=Zh(s+h),p=Zh(a+h),x=(d+p)*co,g=d-x,M=p-x,f=s-g,u=a-M;let E,v;f>u?(E=1,v=0):(E=0,v=1);const b=f-E+co,T=u-v+co,S=f-1+2*co,C=u-1+2*co,U=d&255,w=p&255;let R=.5-f*f-u*u;if(R>=0){const j=U+t[w],z=e[j],q=n[j];R*=R,r=R*R*(z*f+q*u)}let F=.5-b*b-T*T;if(F>=0){const j=U+E+t[w+v],z=e[j],q=n[j];F*=F,c=F*F*(z*b+q*T)}let V=.5-S*S-C*C;if(V>=0){const j=U+1+t[w+1],z=e[j],q=n[j];V*=V,l=V*V*(z*S+q*C)}return 70*(r+c+l)}}function Pv(o){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(o()*(256-n)),s=e[n];e[n]=e[i],e[i]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const ia={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},89:{name:"Snowball",color:15658751,solid:!1},90:{name:"Egg",color:15786176,solid:!1},91:{name:"Strength Potion",color:16729156,solid:!1},92:{name:"Speed Potion",color:4500223,solid:!1},93:{name:"Saddle",color:9127187,solid:!1},94:{name:"Anvil",color:5592405},95:{name:"Leather",color:9136404,solid:!1},96:{name:"Night Vision Potion",color:1710847,solid:!1},97:{name:"Jump Boost Potion",color:2284834,solid:!1},98:{name:"Resistance Potion",color:14526976,solid:!1},99:{name:"Brewing Stand",color:8930338},100:{name:"Note Block",color:8930338,emissive:2228224},102:{name:"Cobweb",color:13421772,solid:!1,transparent:!0},103:{name:"Vine",color:3368499,solid:!1,transparent:!0},104:{name:"Honey Block",color:16755234},105:{name:"Slime Block",color:8965188,transparent:!0},106:{name:"Campfire",color:16737826,emissive:16724736},107:{name:"Grindstone",color:8947848},108:{name:"Stonecutter",color:10066329},109:{name:"Tripwire",color:15658734,solid:!1,transparent:!0},110:{name:"Button",color:11184810,solid:!1},111:{name:"Daylight Sensor",color:14535816},112:{name:"Sculk Sensor",color:1721446,emissive:8772},113:{name:"Barrel",color:9136404},114:{name:"Cauldron",color:4473924},115:{name:"Loom",color:13149284},116:{name:"Smithing Table",color:4478310},118:{name:"Ender Chest",color:2245666,emissive:8704},119:{name:"Shulker Box",color:11158698},120:{name:"Respawn Anchor",color:4465254,emissive:2228292},117:{name:"Netherite Ingot",color:4473924,solid:!1},122:{name:"Trident",color:4491400,solid:!1},123:{name:"Crossbow",color:9136404,solid:!1},124:{name:"Spyglass",color:13412932,solid:!1},125:{name:"Bundle",color:13404211,solid:!1},126:{name:"Goat Horn",color:14535850,solid:!1},127:{name:"Echo Shard",color:4508893,solid:!1},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1},276:{name:"Diamond Sword",color:4521966,solid:!1},277:{name:"Diamond Shovel",color:4521966,solid:!1},278:{name:"Diamond Pickaxe",color:4521966,solid:!1},279:{name:"Diamond Axe",color:4521966,solid:!1}},Xi=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function Qe(o){var t;return((t=ia[o])==null?void 0:t.name)??"Unknown"}function Bs(o){var t;return((t=ia[o])==null?void 0:t.color)??16777215}const Qn=16,lo=62,Lv=4096,Iv=4096,Dv=8192,Ov=8192*256;function Pe(o,t,e){return o+Lv+t*Dv+(e+Iv)*Ov}function Qh(o,t,e){return`${o},${t},${e}`}const Yt=class Yt{constructor(t){D(this,"scene");D(this,"instancedMeshes",new Map);D(this,"instanceCount",new Map);D(this,"_dirtyMeshes",new Set);D(this,"instanceIndex",new Map);D(this,"instanceRevIndex",new Map);D(this,"blockData",new Map);D(this,"generatedChunks",new Set);D(this,"modifications",new Map);D(this,"chestContents",new Map);D(this,"nH1",Xn(()=>.31415+Yt._s()));D(this,"nH2",Xn(()=>.62831+Yt._s()));D(this,"nH3",Xn(()=>.94247+Yt._s()));D(this,"nH4",Xn(()=>.12566+Yt._s()));D(this,"nBio",Xn(()=>.78539+Yt._s()));D(this,"nCv1",Xn(()=>.52359+Yt._s()));D(this,"nCv2",Xn(()=>.20943+Yt._s()));D(this,"nOre",Xn(()=>.41887+Yt._s()));D(this,"noise2D",Xn(()=>.69813+Yt._s()));D(this,"noise2D2",Xn(()=>.87964+Yt._s()));D(this,"biomeNoise",Xn(()=>.78539+Yt._s()));D(this,"torchLights",new Map);D(this,"torchLightQueue",[]);D(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}static _s(){return typeof window.__worldSeed=="number"?window.__worldSeed:0}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),s=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,r=this.nH4(t*.016,e*.016)*.125,l=((i+s+a+r)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),s=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(s)<.1}generateChunkRaw(t,e,n,i){for(let s=0;s<Qn;s++)for(let a=0;a<Qn;a++){const r=t*Qn+s,c=e*Qn+a,l=this.getHeight(r,c),h=this.getBiome(r,c),d=h!==4&&l>=lo-2&&l<=lo+2,p=(x,g)=>{n.set(Pe(r,x,c),g),i.push([r,x,c])};for(let x=0;x<=l;x++){if(x>4&&x<l-1&&this.isCave(r,x,c))continue;let g;if(x<=4?g=3:h===1||d?g=x>=l-3?4:3:h===4?g=x===l?12:x===l-1?4:3:x===l?g=h===3&&l>100?20:1:x>=l-4?g=2:g=3,g===3&&x<l-4){const M=this.nOre(r*.16+x*.11,c*.16);x<=16&&M>.76?g=61:x<=32&&M>.68?g=13:x<=64&&M>.6?g=14:x<=128&&M>.54&&(g=15)}p(x,g)}if(l<lo)for(let x=l+1;x<=lo;x++)p(x,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<Qn;i++)for(let s=0;s<Qn;s++){const a=t*Qn+i,r=e*Qn+s,c=this.getHeight(a,r),l=this.getBiome(a,r);if(c<=lo)continue;const h=Math.random();l===0?h<.02?this.placeBlock(a,c+1,r,51,!1):h<.03&&this.placeTree(a,c+1,r):l===1?h<.03?this.placeBlock(a,c+1,r,50,!1):h<.05&&this.placeBlock(a,c+1,r,52,!1):l===2?h<.09?this.placeTree(a,c+1,r):h<.12&&this.placeBlock(a,c+1,r,51,!1):l===3&&c<100&&h<.03&&this.placeTree(a,c+1,r)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const s=e+i;for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(r)===2&&c<1||a===0&&r===0&&c<2||this.placeBlock(t+a,s+c,n+r,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,s,e,n))}for(const[i,s,a]of n){const r=Pe(i,s,a),c=e.get(r);if(!Yt.isOpaque(c)){this.placeBlock(i,s,a,c,!1);continue}!Yt.isOpaque(e.get(Pe(i+1,s,a))??0)||!Yt.isOpaque(e.get(Pe(i-1,s,a))??0)||!Yt.isOpaque(e.get(Pe(i,s+1,a))??0)||!Yt.isOpaque(e.get(Pe(i,s-1,a))??0)||!Yt.isOpaque(e.get(Pe(i,s,a+1))??0)||!Yt.isOpaque(e.get(Pe(i,s,a-1))??0)?this.placeBlock(i,s,a,c,!1):this.blockData.set(r,c)}for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,s,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/Qn),s=Math.floor(e/Qn);let a=0,r=0,c=1/0,l=!1;for(let g=i-3;g<=i+3;g++)for(let M=s-3;M<=s+3;M++){if(this.generatedChunks.has(`${g},${M}`))continue;const f=(g-i)*(g-i)+(M-s)*(M-s);f<c&&(c=f,a=g,r=M,l=!0)}if(!l)return;const h=`${a},${r}`;this.generatedChunks.add(h);const d=new Map,p=[];this.generateChunkRaw(a,r,d,p);for(const[g,M,f]of p){const u=Pe(g,M,f),E=d.get(u);if(!Yt.isOpaque(E)){this.placeBlock(g,M,f,E,!1);continue}const v=(T,S,C)=>d.get(Pe(T,S,C))??this.blockData.get(Pe(T,S,C))??0;!Yt.isOpaque(v(g+1,M,f))||!Yt.isOpaque(v(g-1,M,f))||!Yt.isOpaque(v(g,M+1,f))||!Yt.isOpaque(v(g,M-1,f))||!Yt.isOpaque(v(g,M,f+1))||!Yt.isOpaque(v(g,M,f-1))?this.placeBlock(g,M,f,E,!1):this.blockData.set(u,E)}const x=`${a},${r}_dec`;this.generatedChunks.has(x)||(this.generatedChunks.add(x),this.generateChunkDecorations(a,r,d))}static isOpaque(t){return t>0&&!Yt.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return Yt.sharedBoxGeo||(Yt.sharedBoxGeo=new we(1,1,1)),Yt.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=ia[t],n=Cv(t,e??{}),i=n.length===1?n[0]:n,s=new Gx(Yt.getBoxGeo(),i,Yt.MAX_INSTANCES);return s.instanceMatrix.setUsage(Pf),s.count=0,s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,t===7&&(s.renderOrder=1),this.scene.add(s),this.instancedMeshes.set(t,s),this.instanceCount.set(t,0),s}placeBlock(t,e,n,i,s=!0){const a=Pe(t,e,n);if(!s&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const r=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=Yt.MAX_INSTANCES)return;const l=i===7?.375:.5;Yt._mat4.setPosition(t+.5,e+l,n+.5),r.setMatrixAt(c,Yt._mat4),r.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),s&&this.modifications.set(Qh(t,e,n),i)}removeBlock(t,e,n){const i=Pe(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(Qh(t,e,n),0);const s=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,r,c]of s){const l=Pe(a,r,c),h=this.blockData.get(l);h===void 0||h===0||this.instanceIndex.has(l)||this._addBlockMesh(a,r,c,h)}return!0}_addBlockMesh(t,e,n,i){const s=Pe(t,e,n);if(this.instanceIndex.has(s))return;const a=this.getOrCreateInstancedMesh(i),r=this.instanceCount.get(i)??0;r>=Yt.MAX_INSTANCES||(Yt._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(r,Yt._mat4),a.count=r+1,this._dirtyMeshes.add(i),this.instanceIndex.set(s,r),this.instanceRevIndex.set(`${i}:${r}`,s),this.instanceCount.set(i,r+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,Yt._mat4),n.setMatrixAt(i,Yt._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const r=a;n.count=r,this.instanceCount.set(e,r),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Pe(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Pe(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Pe(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,s){for(let a=-s;a<=s;a++)for(let r=-s;r<=s;r++)for(let c=-s;c<=s;c++)if(this.blockData.get(Pe(t+a,e+r,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),s=Math.floor(t.y),a=Math.floor(t.z);const r=e.x,c=e.y,l=e.z,h=r>0?1:r<0?-1:0,d=c>0?1:c<0?-1:0,p=l>0?1:l<0?-1:0,x=h!==0?Math.abs(1/r):1/0,g=d!==0?Math.abs(1/c):1/0,M=p!==0?Math.abs(1/l):1/0;let f=h>0?(i+1-t.x)*x:h<0?(t.x-i)*x:1/0,u=d>0?(s+1-t.y)*g:d<0?(t.y-s)*g:1/0,E=p>0?(a+1-t.z)*M:p<0?(t.z-a)*M:1/0,v=0,b=0,T=0;const S=Math.ceil(n*3)+2;for(let C=0;C<S;C++){if(this.blockData.has(Pe(i,s,a)))return{x:i,y:s,z:a,face:Yt._rayFace.set(v,b,T)};if(f<u)if(f<E){if(f>n)return null;i+=h,v=-h,b=0,T=0,f+=x}else{if(E>n)return null;a+=p,v=0,b=0,T=-p,E+=M}else if(u<E){if(u>n)return null;s+=d,v=0,b=-d,T=0,u+=g}else{if(E>n)return null;a+=p,v=0,b=0,T=-p,E+=M}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const s=this.blockData.get(Pe(t,i,e));if(s!==void 0&&!n.has(s))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let s=-n;s<=n;s++)for(let a=-n;a<=n;a++){const r=this.getSurfaceHeight(t+s,e+a);r>i&&(i=r)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const s=`${t},${e},${n}`;this.chestContents.set(s,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[s,a]of i){const r=t+s,c=e+a,l=this.getSurfaceHeight(r,c);this.placeHouse(r,l,c,8,5,6)}}placeHouse(t,e,n,i,s,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let d=0;d<s;d++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+d,n+h,10,!1);const r=t+Math.floor(i/2);this.removeBlock(r,e+2,n),this.removeBlock(r,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+s,n+h,10,!1);this.placeBlock(r+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let s=0;s<3;s++)(i!==1||s!==1)&&this.placeBlock(t+i-1,e+1,n+s-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,s=5;for(let r=-4;r<=4;r++)for(let c=0;c<s;c++)for(let l=-4;l<=4;l++){const h=t+r,d=i+c,p=e+l,x=Math.abs(r)===4||Math.abs(l)===4,g=c===0,M=c===s-1;if(x||g||M){const f=Math.random()<.3?82:81;this.placeBlock(h,d,p,f,!0)}else this.removeBlock(h,d,p)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[r,c]of a){const l=i+1;this.placeBlock(r,l,c,31,!0);const h=[64,62,65,63,280,268,270,274,267,257,5,10,56,11,3],d=new Array(27).fill(0),p=Math.floor(Math.random()*8)+4,x=new Set;for(let g=0;g<p;g++){let M;do M=Math.floor(Math.random()*27);while(x.has(M));x.add(M),d[M]=h[Math.floor(Math.random()*h.length)]}this.setChestInventory(r,l,c,d)}for(let r=0;r<10;r++){const c=t-r,l=i+5+r,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),r>0&&this.removeBlock(c,l-1,h)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[s,a]of this.modifications.entries())e[s]=a;const n={};for(const[s,a]of this.chestContents.entries())a.some(r=>r!==0)&&(n[s]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(s){console.warn("Save failed:",s)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[s,a,r]=n.split(",").map(Number);i===0?this.removeBlock(s,a,r):this.placeBlock(s,a,r,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const s=`${t},${e},${n}`;if(this.torchLights.has(s))return;const a=new Wh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(s,a),this.torchLightQueue.push(s);this.torchLightQueue.length>50;){const r=this.torchLightQueue.shift();if(r){const c=this.torchLights.get(r);c&&(this.scene.remove(c),this.torchLights.delete(r))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,s=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=s}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,s=this.torchLights.get(i);if(s){this.scene.remove(s),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Pe(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Pe(t+r,e+c,n+l))===59&&this.activateLamp(t+r,e+c,n+l);else for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Pe(t+r,e+c,n+l))===59&&this.deactivateLamp(t+r,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Pe(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const r=new Wh(16737792,1.2,6);r.position.set(t,e,n),this.scene.add(r),this.redstoneLoights.set(i,r)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Pe(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const r=this.redstoneLoights.get(i);r&&(this.scene.remove(r),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),s=Number(e),a=Number(n),r=Number(i);!isNaN(s)&&!isNaN(a)&&!isNaN(r)&&this.addTorchLight(s,a+.5,r)}}};D(Yt,"MAX_INSTANCES",32e3),D(Yt,"_mat4",new Re),D(Yt,"_rayFace",new B),D(Yt,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),D(Yt,"sharedBoxGeo",null);let Fc=Yt;const gr=4.5,Nv=1.6,xr=9,td=8.5,ed=-28,ho=1.8,vr=.55,Ze=1.62,Uv=5,Mn=class Mn{constructor(t,e,n){D(this,"camera");D(this,"world");D(this,"scene");D(this,"position",new B(0,30,0));D(this,"velocity",new B);D(this,"onGround",!1);D(this,"gameMode","survival");D(this,"_forward",new B);D(this,"_right",new B);D(this,"_move",new B);D(this,"_rayDir",new B);D(this,"_highlightVec",new B);D(this,"_lastHit",null);D(this,"_lastHitFrame",-1);D(this,"_frameCount",0);D(this,"health",40);D(this,"maxHealth",40);D(this,"invincible",0);D(this,"spawnGrace",0);D(this,"armor",0);D(this,"speedBonus",0);D(this,"jumpBonus",0);D(this,"fallStartY",0);D(this,"wasOnGround",!1);D(this,"fallTracking",!1);D(this,"keys",{});D(this,"yaw",0);D(this,"pitch",0);D(this,"locked",!1);D(this,"chatOpen",!1);D(this,"flying",!1);D(this,"lastSpace",0);D(this,"inWater",!1);D(this,"wasInWater",!1);D(this,"waterTimer",0);D(this,"onLadder",!1);D(this,"swimStroke",0);D(this,"waterCameraTilt",0);D(this,"waterEntryVelocityDamp",1);D(this,"selectedBlockType",1);D(this,"raycaster",new na);D(this,"highlightMesh");D(this,"outlineMesh");D(this,"outlineOpacity",0);D(this,"outlineTarget",0);D(this,"_lastOutlineKey","");D(this,"breakProgress",0);D(this,"breakTarget",null);D(this,"breakIndicator",null);D(this,"isBreakingHeld",!1);D(this,"selfModel",null);D(this,"selfHead",null);D(this,"selfLA",null);D(this,"selfRA",null);D(this,"selfLL",null);D(this,"selfRL",null);D(this,"walkCycle",0);D(this,"prevXZ",new se);D(this,"thirdPerson",!1);D(this,"headBobPhase",0);D(this,"headBobIntensity",0);D(this,"cameraRoll",0);D(this,"currentFov",75);D(this,"fpArm",null);D(this,"fpArmGroup",null);D(this,"_armSwing",0);D(this,"_armSwingDir",1);D(this,"_armBob",0);D(this,"onPlaceBlock");D(this,"onBreakBlock");D(this,"onOpenChat");D(this,"onDied");D(this,"onHealthChanged");D(this,"onRightClick");D(this,"setDeathCause");D(this,"onWaterEnter");D(this,"onWaterExit");D(this,"_hitPoint",new B);D(this,"_hitNormal",new B);D(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});D(this,"_iceVelX",0);D(this,"_iceVelZ",0);this.camera=t,this.world=e,this.scene=n;const i=new we(1.02,1.02,1.02),s=new vi({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new Wt(i,s),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new Wx(new we(1.005,1.005,1.005)),r=new ou({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new Vx(a,r),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!Mn._crackTextures){Mn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const s=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let r=0;r<s*2;r++){const c=r/(s*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let r=0;r<e;r++){const c=2+Math.random()*12,l=2+Math.random()*12,h=c+(Math.random()-.5)*6,d=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(h,d),i.stroke()}}if(e>4){const r=i.createRadialGradient(8,8,4,8,8,10);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=r,i.fillRect(0,0,16,16)}const a=new Xs(n);a.magFilter=Fe,a.minFilter=Fe,Mn._crackTextures.push(a)}}return Mn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}isSneaking(){return(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}getTargetBlockType(){if(!this._lastHit)return null;const t=this.world.getBlock(this._lastHit.blockX,this._lastHit.blockY,this._lastHit.blockZ);return t?t.type:null}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new qt,this.camera.add(this.fpArmGroup);const t=new we(.12,.35,.12),e=new xe({color:16764057}),n=new Wt(t,e);n.position.y=-.175;const i=new we(.11,.25,.11),s=new Wt(i,e);s.position.y=-.3,n.add(s);const a=new we(.135,.355,.135),r=new xe({color:3364300,transparent:!0,opacity:.9}),c=new Wt(a,r);c.position.y=-.175,this.fpArm=new qt,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,s.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new qt,n=16764057,i=3364300,s=2245785,a=3351057,r=3346688,c=S=>new xe({color:S}),l=(S,C,U,w)=>new Wt(new we(S,C,U),c(w)),h=(S,C,U,w)=>{const R=new qt,F=l(S,C,U,w);return F.position.y=-C/2,R.add(F),R},d=new qt;d.add(l(.5,.5,.5,n));const p=l(.52,.14,.52,r);p.position.y=.19,d.add(p),d.position.set(0,.75,0);const x=l(.6,.75,.35,i);x.position.y=0;const g=h(.25,.65,.25,i),M=h(.25,.65,.25,i),f=l(.24,.25,.24,n);f.position.y=-.575,g.children[0].add(f);const u=f.clone();M.children[0].add(u),g.position.set(-.43,.37,0),M.position.set(.43,.37,0);const E=h(.27,.75,.27,s),v=h(.27,.75,.27,s),b=l(.28,.2,.3,a);b.position.y=-.77,E.children[0].add(b);const T=b.clone();return v.children[0].add(T),E.position.set(-.175,-.375,0),v.position.set(.175,-.375,0),e.add(d,x,g,M,E,v),t.add(e),this.selfHead=d,this.selfLA=g,this.selfRA=M,this.selfLL=E,this.selfRL=v,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var s;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(s=this.onBreakBlock)==null||s.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const s=new we(1.002,1.002,1.002),a=new vi({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new Wt(s,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),s=this.breakIndicator.material,a=Mn.getCrackTexture(i);s.map!==a&&(s.map=a,s.opacity=.5+i*.06,s.needsUpdate=!0)}}placeBlock(){var r,c;(r=this.onRightClick)==null||r.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),s=t.blockZ+Math.round(e.z),a=this.position.y-Ze;Math.abs(n-this.position.x)<vr+.3&&i>=a-.2&&i<=a+ho+.2&&Math.abs(s-this.position.z)<vr+.3||(this.world.placeBlock(n,i,s,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,s,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,Uv);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this._applyBlockEffects(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var h,d,p,x;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-Ze+ho/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(h=this.setDeathCause)==null||h.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(d=this.onWaterEnter)==null||d.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(p=this.onWaterExit)==null||p.call(this)));const s=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-Ze+ho),i);this.onLadder=s===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const r=this.onLadder?0:this.inWater?-4:ed;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const g=c-Ze,M=Math.floor(g);for(let f=0;f<=2;f++){const u=M-f;if(this.footprintOverBlock(this.position.x,this.position.z,u)){const E=u+1+Ze;if(c<=E+.02){if(this.fallTracking){const v=this.fallStartY-(u+1),b=this.world.getBlockType(Math.round(this.position.x),u,Math.round(this.position.z));if(b===105)this.velocity.y=Math.abs(this.velocity.y)*.7,this.fallTracking=!1;else if(v>5){const T=Math.floor(b===104?(v-5)*.375:(v-5)*.75);T>0&&((x=this.setDeathCause)==null||x.call(this,"You fell"),this.takeDamage(T)),this.fallTracking=!1}else this.fallTracking=!1}this.world.getBlockType(Math.round(this.position.x),u,Math.round(this.position.z))!==105&&(this.velocity.y=0),this.position.y=E,l=!0}break}}l||(this.position.y=c)}else{const g=Math.floor(this.position.y-Ze+ho+.05);this.footprintOverBlock(this.position.x,this.position.z,g)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-Ze,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const g=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=g+Ze+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=vr/2-.01;for(let s=0;s<3;s++){const a=Math.floor(t+(s-1)*i);for(let r=0;r<3;r++){const c=Math.floor(e+(r-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=vr/2-.01,s=Math.floor(e-Ze+.05),a=Math.floor(e-Ze+ho-.05);for(let r=s;r<=a;r++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const d=Math.floor(n+(h===0?-i:i)),p=this.world.getBlockType(l,r,d);if(p!==void 0&&p!==0&&p!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=xr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=xr*t);else{this.velocity.y+=ed*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-Ze);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+Ze,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=td+this.jumpBonus,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);const s=this.keys.ControlLeft&&this.gameMode==="survival",a=(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround;let r=s?gr*Nv:a?gr*.3:gr;this.gameMode==="creative"&&(r=this.flying?xr:gr*1.2),this.gameMode==="spectator"&&(r=xr*1.5),this.speedBonus>0&&(r*=1+this.speedBonus),this.inWater&&(r*=.6);const c=Math.round(this.position.x),l=Math.round(this.position.z),h=Math.floor(this.position.y-Ze+.5),d=Math.floor(this.position.y-Ze),p=this.world.getBlockType(c,h,l),x=this.world.getBlockType(c,d,l);if(p===102&&(r*=.1),(p===104||x===104)&&(r*=.5),i.lengthSq()>0){i.normalize().multiplyScalar(r*t);const g=this.position.x+i.x,M=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=g,this.position.z=M):(this.wallCollision(g,this.position.y,this.position.z)||(this.position.x=g),this.wallCollision(this.position.x,this.position.y,M)||(this.position.z=M))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=td,this.onGround=!1)}_applyBlockEffects(t){if(this.gameMode!=="survival"||!this.onGround){this._iceVelX*=.85,this._iceVelZ*=.85;return}const e=Math.round(this.position.x),n=Math.floor(this.position.y-Ze),i=Math.round(this.position.z),s=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-Ze+.5),i);if(a===102){this.velocity.y=Math.max(this.velocity.y,-.05),this._iceVelX=0,this._iceVelZ=0;return}s===21?(this.position.x-(this.position.x-this._iceVelX*t),this.position.z-(this.position.z-this._iceVelZ*t),this._iceVelX=this.position.x-e!==0?this._iceVelX*.97+(this.position.x-e)*5:this._iceVelX*.97,this._iceVelZ=this.position.z-i!==0?this._iceVelZ*.97+(this.position.z-i)*5:this._iceVelZ*.97,this.position.x+=this._iceVelX*t,this.position.z+=this._iceVelZ*t):(this._iceVelX*=.7,this._iceVelZ*=.7),a===103&&(this.onLadder=!0)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5,i=this.position.y+.6;this.camera.position.x+=(e-this.camera.position.x)*.18,this.camera.position.y+=(i-this.camera.position.y)*.18,this.camera.position.z+=(n-this.camera.position.z)*.18,this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position),this.isSneaking()&&(this.camera.position.y-=.4);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",s=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(s-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const h=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,d=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=h,this.camera.position.y+=d}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const r=this.inWater?.06:0;this.waterCameraTilt+=(r-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=Mn.BASE_FOV;i&&n>1&&(c=Mn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=Mn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-Ze;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,s=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),s>.3?this.walkCycle+=t*Math.min(s,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),r=.65;this.selfLL&&(this.selfLL.rotation.x=a*r),this.selfRL&&(this.selfRL.rotation.x=-a*r),this.selfLA&&(this.selfLA.rotation.x=-a*r),this.selfRA&&(this.selfRA.rotation.x=a*r)}updateHighlight(){const t=this.raycast();if(t){const s=t.blockX+.5,a=t.blockY+.5,r=t.blockZ+.5;this.highlightMesh.position.set(s,a,r),this.highlightMesh.visible=!1,this.outlineMesh.position.set(s,a,r),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const s=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(s===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const s=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const r=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+s*.5,this.fpArm.rotation.z=.05+r,this.fpArm.position.y=-.28+s,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+Ze+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};D(Mn,"BASE_FOV",75),D(Mn,"SPRINT_FOV",85),D(Mn,"LANDING_FOV",70),D(Mn,"_crackTextures",null);let Gc=Mn;function nd(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class Bv{constructor(t,e,n){D(this,"keys");D(this,"onBreak");D(this,"onPlace");D(this,"joyActive",!1);D(this,"joyId",-1);D(this,"joyOriginX",0);D(this,"joyOriginY",0);D(this,"joyEl");D(this,"joyThumbEl");D(this,"lookId",-1);D(this,"lookLastX",0);D(this,"lookLastY",0);D(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,e.addEventListener("touchstart",s=>{s.preventDefault(),this.keys.Space=!0},{passive:!1}),e.addEventListener("touchend",s=>{s.preventDefault(),this.keys.Space=!1},{passive:!1}),t.appendChild(e);const n=document.createElement("button");n.id="mobileBreak",n.textContent="⛏",n.style.cssText=`
      position:fixed; bottom:200px; right:120px;
      width:56px; height:56px;
      background:rgba(220,80,80,0.35); border:2px solid rgba(255,100,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,n.addEventListener("touchstart",s=>{s.preventDefault(),this.onBreak()},{passive:!1}),t.appendChild(n);const i=document.createElement("button");i.id="mobilePlace",i.textContent="🧱",i.style.cssText=`
      position:fixed; bottom:200px; right:40px;
      width:56px; height:56px;
      background:rgba(80,180,80,0.35); border:2px solid rgba(100,220,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,i.addEventListener("touchstart",s=>{s.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=s.identifier,this.joyOriginX=s.clientX,this.joyOriginY=s.clientY):this.lookId===-1&&(this.lookId=s.identifier,this.lookLastX=s.clientX,this.lookLastY=s.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var s;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const r=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(s=this.onLookDelta)==null||s.call(this,r,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):s.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,s=e-this.joyOriginY,a=Math.sqrt(i*i+s*s),r=a>0?i/a:0,c=a>0?s/a:0,l=Math.min(a,42),h=r*l,d=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${d}px))`;const p=12;this.keys.KeyW=d<-p,this.keys.KeyS=d>p,this.keys.KeyA=h<-p,this.keys.KeyD=h>p}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kv(o){if(o.__esModule)return o;var t=o.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(o).forEach(function(n){var i=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return o[n]}})}),e}var hu={};ArrayBuffer.isView||(ArrayBuffer.isView=o=>o!==null&&typeof o=="object"&&o.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Ys={},sa={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.ServerError=o.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(o.CloseCode||(o.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}o.ServerError=t})(sa);var Ao={},qs={};Object.defineProperty(qs,"__esModule",{value:!0});qs.decode=qs.encode=void 0;function Zs(o,t){if(this._offset=t,o instanceof ArrayBuffer)this._buffer=o,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(o))this._buffer=o.buffer,this._view=new DataView(this._buffer,o.byteOffset,o.byteLength);else throw new Error("Invalid argument")}function zv(o,t,e){for(var n="",i=0,s=t,a=t+e;s<a;s++){var r=o.getUint8(s);if(!(r&128)){n+=String.fromCharCode(r);continue}if((r&224)===192){n+=String.fromCharCode((r&31)<<6|o.getUint8(++s)&63);continue}if((r&240)===224){n+=String.fromCharCode((r&15)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0);continue}if((r&248)===240){i=(r&7)<<18|(o.getUint8(++s)&63)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+r.toString(16))}return n}Zs.prototype._array=function(o){for(var t=new Array(o),e=0;e<o;e++)t[e]=this._parse();return t};Zs.prototype._map=function(o){for(var t="",e={},n=0;n<o;n++)t=this._parse(),e[t]=this._parse();return e};Zs.prototype._str=function(o){var t=zv(this._view,this._offset,o);return this._offset+=o,t};Zs.prototype._bin=function(o){var t=this._buffer.slice(this._offset,this._offset+o);return this._offset+=o,t};Zs.prototype._parse=function(){var o=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,s=0;if(o<192)return o<128?o:o<144?this._map(o&15):o<160?this._array(o&15):this._str(o&31);if(o>223)return(255-o+1)*-1;switch(o){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+s)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+s);if(n===-1){i=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var r=(i&3)*4294967296+s;return new Date(r*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Fv(o,t=0){var e=new Zs(o,t),n=e._parse();if(e._offset!==o.byteLength)throw new Error(o.byteLength-e._offset+" trailing bytes");return n}qs.decode=Fv;var Gv=4294967296-1,Hv=17179869184-1;function Vv(o,t,e){for(var n=0,i=0,s=e.length;i<s;i++)n=e.charCodeAt(i),n<128?o.setUint8(t++,n):n<2048?(o.setUint8(t++,192|n>>6),o.setUint8(t++,128|n&63)):n<55296||n>=57344?(o.setUint8(t++,224|n>>12),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),o.setUint8(t++,240|n>>18),o.setUint8(t++,128|n>>12&63),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63))}function Wv(o){for(var t=0,e=0,n=0,i=o.length;n<i;n++)t=o.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Ds(o,t,e){var n=typeof e,i=0,s=0,a=0,r=0,c=0,l=0;if(n==="string"){if(c=Wv(e),c<32)o.push(c|160),l=1;else if(c<256)o.push(217,c),l=2;else if(c<65536)o.push(218,c>>8,c),l=3;else if(c<4294967296)o.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:o.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(o.push(203),t.push({_float:e,_length:8,_offset:o.length}),9):e>=0?e<128?(o.push(e),1):e<256?(o.push(204,e),2):e<65536?(o.push(205,e>>8,e),3):e<4294967296?(o.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,r=e>>>0,o.push(207,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9):e>=-32?(o.push(e),1):e>=-128?(o.push(208,e),2):e>=-32768?(o.push(209,e>>8,e),3):e>=-2147483648?(o.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),r=e>>>0,o.push(211,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9);if(n==="object"){if(e===null)return o.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)o.push(c|144),l=1;else if(c<65536)o.push(220,c>>8,c),l=3;else if(c<4294967296)o.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Ds(o,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),d=Math.floor(h/1e3),p=(h-d*1e3)*1e6;return d>=0&&p>=0&&d<=Hv?p===0&&d<=Gv?(o.push(214,255,d>>24,d>>16,d>>8,d),6):(a=d/4294967296,r=d&4294967295,o.push(215,255,p>>22,p>>14,p>>6,a,r>>24,r>>16,r>>8,r),10):(a=Math.floor(d/4294967296),r=d>>>0,o.push(199,12,255,p>>24,p>>16,p>>8,p,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)o.push(196,c),l=2;else if(c<65536)o.push(197,c>>8,c),l=3;else if(c<4294967296)o.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:o.length}),l+c}if(typeof e.toJSON=="function")return Ds(o,t,e.toJSON());var x=[],g="",M=Object.keys(e);for(i=0,s=M.length;i<s;i++)g=M[i],e[g]!==void 0&&typeof e[g]!="function"&&x.push(g);if(c=x.length,c<16)o.push(c|128),l=1;else if(c<65536)o.push(222,c>>8,c),l=3;else if(c<4294967296)o.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)g=x[i],l+=Ds(o,t,g),l+=Ds(o,t,e[g]);return l}if(n==="boolean")return o.push(e?195:194),1;if(n==="undefined")return o.push(192),1;if(typeof e.toJSON=="function")return Ds(o,t,e.toJSON());throw new Error("Could not encode")}function Xv(o){var t=[],e=[],n=Ds(t,e,o),i=new ArrayBuffer(n),s=new DataView(i),a=0,r=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,d=0,p=0,x=t.length;p<x;p++)if(s.setUint8(r+p,t[p]),p+1===c){if(l=e[a],h=l._length,d=r+c,l._bin)for(var g=new Uint8Array(l._bin),M=0;M<h;M++)s.setUint8(d+M,g[M]);else l._str?Vv(s,d,l._str):l._float!==void 0&&s.setFloat64(d,l._float);a++,r+=h,e[a]&&(c=e[a]._offset)}return i}qs.encode=Xv;var oa={},ra={},Yv=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},qv=Ge&&Ge.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(ra,"__esModule",{value:!0});ra.WebSocketTransport=void 0;const jv=qv(Yv),Qa=globalThis.WebSocket||jv.default;class $v{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Qa(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Qa(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Qa.OPEN}}ra.WebSocketTransport=$v;Object.defineProperty(oa,"__esModule",{value:!0});oa.Connection=void 0;const Kv=ra;class Zv{constructor(){this.events={},this.transport=new Kv.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}oa.Connection=Zv;var sl={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.utf8Length=o.utf8Read=o.ErrorCode=o.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(o.Protocol||(o.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(o.ErrorCode||(o.ErrorCode={}));function t(n,i){const s=n[i++];for(var a="",r=0,c=i,l=i+s;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){r=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,r>=65536?(r-=65536,a+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):a+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+h.toString(16))}return a}o.utf8Read=t;function e(n=""){let i=0,s=0;for(let a=0,r=n.length;a<r;a++)i=n.charCodeAt(a),i<128?s+=1:i<2048?s+=2:i<55296||i>=57344?s+=3:(a++,s+=4);return s+1}o.utf8Length=e})(sl);var rs={};Object.defineProperty(rs,"__esModule",{value:!0});rs.getSerializer=rs.registerSerializer=void 0;const du={};function Jv(o,t){du[o]=t}rs.registerSerializer=Jv;function Qv(o){const t=du[o];if(!t)throw new Error("missing serializer: "+o);return t}rs.getSerializer=Qv;var Co={};Object.defineProperty(Co,"__esModule",{value:!0});Co.createNanoEvents=void 0;const t_=()=>({emit(o,...t){let e=this.events[o]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(o,t){var e;return!((e=this.events[o])===null||e===void 0)&&e.push(t)||(this.events[o]=[t]),()=>{var n;this.events[o]=(n=this.events[o])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});Co.createNanoEvents=t_;var js={};Object.defineProperty(js,"__esModule",{value:!0});js.createSignal=js.EventEmitter=void 0;class uu{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}js.EventEmitter=uu;function e_(){const o=new uu;function t(e){return o.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),o.remove(n)};o.register(n)},t.remove=e=>o.remove(e),t.invoke=(...e)=>o.invoke(...e),t.invokeAsync=(...e)=>o.invokeAsync(...e),t.clear=()=>o.clear(),t}js.createSignal=e_;var Hc={exports:{}};(function(o,t){(function(e,n){n(t)})(Ge,function(e){var n=function(_,m){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,P){y.__proto__=P}||function(y,P){for(var W in P)Object.prototype.hasOwnProperty.call(P,W)&&(y[W]=P[W])},n(_,m)};function i(_,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");n(_,m);function y(){this.constructor=_}_.prototype=m===null?Object.create(m):(y.prototype=m.prototype,new y)}function s(_,m,y,P){var W=arguments.length,et=W<3?m:P,Nt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")et=Reflect.decorate(_,m,y,P);else for(var Rt=_.length-1;Rt>=0;Rt--)(Nt=_[Rt])&&(et=(W<3?Nt(et):W>3?Nt(m,y,et):Nt(m,y))||et);return W>3&&et&&Object.defineProperty(m,y,et),et}function a(_,m,y){if(arguments.length===2)for(var P=0,W=m.length,et;P<W;P++)(et||!(P in m))&&(et||(et=Array.prototype.slice.call(m,0,P)),et[P]=m[P]);return _.concat(et||Array.prototype.slice.call(m))}typeof SuppressedError=="function"&&SuppressedError;var r=255,c=213;e.OPERATION=void 0,function(_){_[_.ADD=128]="ADD",_[_.REPLACE=0]="REPLACE",_[_.DELETE=64]="DELETE",_[_.DELETE_AND_ADD=192]="DELETE_AND_ADD",_[_.TOUCH=1]="TOUCH",_[_.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function _(m,y,P){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=m,this.setParent(y,P)}return _.prototype.setParent=function(m,y,P){var W=this;if(this.indexes||(this.indexes=this.ref instanceof ve?this.ref._definition.indexes:{}),this.parent=m,this.parentIndex=P,!!y)if(this.root=y,this.ref instanceof ve){var et=this.ref._definition;for(var Nt in et.schema){var Rt=this.ref[Nt];if(Rt&&Rt.$changes){var de=et.indexes[Nt];Rt.$changes.setParent(this.ref,y,de)}}}else typeof this.ref=="object"&&this.ref.forEach(function(L,k){if(L instanceof ve){var Y=L.$changes,H=W.ref.$changes.indexes[k];Y.setParent(W.ref,W.root,H)}})},_.prototype.operation=function(m){this.changes.set(--this.currentCustomOperation,m)},_.prototype.change=function(m,y){y===void 0&&(y=e.OPERATION.ADD);var P=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(P,m);var W=this.changes.get(P);(!W||W.op===e.OPERATION.DELETE||W.op===e.OPERATION.TOUCH)&&this.changes.set(P,{op:W&&W.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:y,index:P}),this.allChanges.add(P),this.changed=!0,this.touchParents()},_.prototype.touch=function(m){var y=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(y,m),this.changes.has(y)||this.changes.set(y,{op:e.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},_.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},_.prototype.getType=function(m){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[m]]}else{var y=this.parent._definition,P=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(P)[0]}},_.prototype.getChildrenFilter=function(){var m=this.parent._definition.childFilters;return m&&m[this.parentIndex]},_.prototype.getValue=function(m){return this.ref.getByIndex(m)},_.prototype.delete=function(m){var y=typeof m=="number"?m:this.indexes[m];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(m," (").concat(y,")"));return}var P=this.getValue(y);this.changes.set(y,{op:e.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],P&&P.$changes&&(P.$changes.parent=void 0),this.changed=!0,this.touchParents()},_.prototype.discard=function(m,y){var P=this;m===void 0&&(m=!1),y===void 0&&(y=!1),this.ref instanceof ve||this.changes.forEach(function(W){if(W.op===e.OPERATION.DELETE){var et=P.ref.getIndex(W.index);delete P.indexes[et]}}),this.changes.clear(),this.changed=m,y&&this.allChanges.clear(),this.currentCustomOperation=0},_.prototype.discardAll=function(){var m=this;this.changes.forEach(function(y){var P=m.getValue(y.index);P&&P.$changes&&P.$changes.discardAll()}),this.discard()},_.prototype.cache=function(m,y){this.caches[m]=y},_.prototype.clone=function(){return new _(this.ref,this.parent,this.root)},_.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},_.prototype.assertValidIndex=function(m,y){if(m===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},_}();function h(_,m,y,P){return _[m]||(_[m]=[]),_[m].push(y),P==null||P.forEach(function(W,et){return y(W,et)}),function(){return p(_[m],_[m].indexOf(y))}}function d(_){var m=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(P,W){_.push({refId:m.$changes.refId,op:e.OPERATION.DELETE,field:W,value:void 0,previousValue:P}),y&&m.$changes.root.removeRef(P.$changes.refId)})}function p(_,m){if(m===-1||m>=_.length)return!1;for(var y=_.length-1,P=m;P<y;P++)_[P]=_[P+1];return _.length=y,!0}var x=function(_,m){var y=_.toString(),P=m.toString();return y<P?-1:y>P?1:0};function g(_){return _.$proxy=!0,_=new Proxy(_,{get:function(m,y){return typeof y!="symbol"&&!isNaN(y)?m.at(y):m[y]},set:function(m,y,P){if(typeof y!="symbol"&&!isNaN(y)){var W=Array.from(m.$items.keys()),et=parseInt(W[y]||y);P==null?m.deleteAt(et):m.setAt(et,P)}else m[y]=P;return!0},deleteProperty:function(m,y){return typeof y=="number"?m.deleteAt(y):delete m[y],!0},has:function(m,y){return typeof y!="symbol"&&!isNaN(Number(y))?m.$items.has(Number(y)):Reflect.has(m,y)}}),_}var M=function(){function _(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,m)}return _.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,m,y?this.$items:void 0)},_.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},_.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},_.is=function(m){return Array.isArray(m)||m.array!==void 0},Object.defineProperty(_.prototype,"length",{get:function(){return this.$items.size},set:function(m){m===0?this.clear():this.splice(m,this.length-m)},enumerable:!1,configurable:!0}),_.prototype.push=function(){for(var m=this,y=[],P=0;P<arguments.length;P++)y[P]=arguments[P];var W;return y.forEach(function(et){W=m.$refId++,m.setAt(W,et)}),W},_.prototype.pop=function(){var m=Array.from(this.$indexes.values()).pop();if(m!==void 0){this.$changes.delete(m),this.$indexes.delete(m);var y=this.$items.get(m);return this.$items.delete(m),y}},_.prototype.at=function(m){if(m=Math.trunc(m)||0,m<0&&(m+=this.length),!(m<0||m>=this.length)){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)}},_.prototype.setAt=function(m,y){var P,W;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(m)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,m);var et=(W=(P=this.$changes.indexes[m])===null||P===void 0?void 0:P.op)!==null&&W!==void 0?W:e.OPERATION.ADD;this.$changes.indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,y),this.$changes.change(m,et)}},_.prototype.deleteAt=function(m){var y=Array.from(this.$items.keys())[m];return y===void 0?!1:this.$deleteAt(y)},_.prototype.$deleteAt=function(m){return this.$changes.delete(m),this.$indexes.delete(m),this.$items.delete(m)},_.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&d.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.concat=function(){for(var m,y=[],P=0;P<arguments.length;P++)y[P]=arguments[P];return new(_.bind.apply(_,a([void 0],(m=Array.from(this.$items.values())).concat.apply(m,y),!1)))},_.prototype.join=function(m){return Array.from(this.$items.values()).join(m)},_.prototype.reverse=function(){var m=this,y=Array.from(this.$items.keys()),P=Array.from(this.$items.values()).reverse();return P.forEach(function(W,et){m.setAt(y[et],W)}),this},_.prototype.shift=function(){var m=Array.from(this.$items.keys()),y=m.shift();if(y!==void 0){var P=this.$items.get(y);return this.$deleteAt(y),P}},_.prototype.slice=function(m,y){var P=new _;return P.push.apply(P,Array.from(this.$items.values()).slice(m,y)),P},_.prototype.sort=function(m){var y=this;m===void 0&&(m=x);var P=Array.from(this.$items.keys()),W=Array.from(this.$items.values()).sort(m);return W.forEach(function(et,Nt){y.setAt(P[Nt],et)}),this},_.prototype.splice=function(m,y){y===void 0&&(y=this.length-m);for(var P=[],W=2;W<arguments.length;W++)P[W-2]=arguments[W];for(var et=Array.from(this.$items.keys()),Nt=[],Rt=m;Rt<m+y;Rt++)Nt.push(this.$items.get(et[Rt])),this.$deleteAt(et[Rt]);for(var Rt=0;Rt<P.length;Rt++)this.setAt(m+Rt,P[Rt]);return Nt},_.prototype.unshift=function(){for(var m=this,y=[],P=0;P<arguments.length;P++)y[P]=arguments[P];var W=this.length,et=y.length,Nt=Array.from(this.$items.values());return y.forEach(function(Rt,de){m.setAt(de,Rt)}),Nt.forEach(function(Rt,de){m.setAt(et+de,Rt)}),W+et},_.prototype.indexOf=function(m,y){return Array.from(this.$items.values()).indexOf(m,y)},_.prototype.lastIndexOf=function(m,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(m,y)},_.prototype.every=function(m,y){return Array.from(this.$items.values()).every(m,y)},_.prototype.some=function(m,y){return Array.from(this.$items.values()).some(m,y)},_.prototype.forEach=function(m,y){Array.from(this.$items.values()).forEach(m,y)},_.prototype.map=function(m,y){return Array.from(this.$items.values()).map(m,y)},_.prototype.filter=function(m,y){return Array.from(this.$items.values()).filter(m,y)},_.prototype.reduce=function(m,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},_.prototype.reduceRight=function(m,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},_.prototype.find=function(m,y){return Array.from(this.$items.values()).find(m,y)},_.prototype.findIndex=function(m,y){return Array.from(this.$items.values()).findIndex(m,y)},_.prototype.fill=function(m,y,P){throw new Error("ArraySchema#fill() not implemented")},_.prototype.copyWithin=function(m,y,P){throw new Error("ArraySchema#copyWithin() not implemented")},_.prototype.toString=function(){return this.$items.toString()},_.prototype.toLocaleString=function(){return this.$items.toLocaleString()},_.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(_,Symbol.species,{get:function(){return _},enumerable:!1,configurable:!0}),_.prototype.entries=function(){return this.$items.entries()},_.prototype.keys=function(){return this.$items.keys()},_.prototype.values=function(){return this.$items.values()},_.prototype.includes=function(m,y){return Array.from(this.$items.values()).includes(m,y)},_.prototype.flatMap=function(m,y){throw new Error("ArraySchema#flatMap() is not supported.")},_.prototype.flat=function(m){throw new Error("ArraySchema#flat() is not supported.")},_.prototype.findLast=function(){var m=Array.from(this.$items.values());return m.findLast.apply(m,arguments)},_.prototype.findLastIndex=function(){var m=Array.from(this.$items.values());return m.findLastIndex.apply(m,arguments)},_.prototype.with=function(m,y){var P=Array.from(this.$items.values());return P[m]=y,new(_.bind.apply(_,a([void 0],P,!1)))},_.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},_.prototype.toSorted=function(m){return Array.from(this.$items.values()).sort(m)},_.prototype.toSpliced=function(m,y){var P=Array.from(this.$items.values());return P.toSpliced.apply(P,arguments)},_.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},_.prototype.getIndex=function(m){return this.$indexes.get(m)},_.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},_.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){return this.toArray().map(function(m){return typeof m.toJSON=="function"?m.toJSON():m})},_.prototype.clone=function(m){var y;return m?y=new(_.bind.apply(_,a([void 0],Array.from(this.$items.values()),!1))):y=new(_.bind.apply(_,a([void 0],this.map(function(P){return P.$changes?P.clone():P}),!1))),y},_}();function f(_){return _.$proxy=!0,_=new Proxy(_,{get:function(m,y){return typeof y!="symbol"&&typeof m[y]>"u"?m.get(y):m[y]},set:function(m,y,P){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?m.set(y,P):m[y]=P,!0},deleteProperty:function(m,y){return m.delete(y),!0}}),_}var u=function(){function _(m){var y=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m)if(m instanceof Map||m instanceof _)m.forEach(function(W,et){return y.set(et,W)});else for(var P in m)this.set(P,m[P])}return _.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,m,y?this.$items:void 0)},_.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},_.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},_.is=function(m){return m.map!==void 0},_.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(_.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(_,Symbol.species,{get:function(){return _},enumerable:!1,configurable:!0}),_.prototype.set=function(m,y){if(y==null)throw new Error("MapSchema#set('".concat(m,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(m,"'."));m=m.toString();var P=typeof this.$changes.indexes[m]<"u",W=P?this.$changes.indexes[m]:this.$refId++,et=P?e.OPERATION.REPLACE:e.OPERATION.ADD,Nt=y.$changes!==void 0;if(Nt&&y.$changes.setParent(this,this.$changes.root,W),!P)this.$changes.indexes[m]=W,this.$indexes.set(W,m);else{if(!Nt&&this.$items.get(m)===y)return;Nt&&this.$items.get(m)!==y&&(et=e.OPERATION.ADD)}return this.$items.set(m,y),this.$changes.change(m,et),this},_.prototype.get=function(m){return this.$items.get(m)},_.prototype.delete=function(m){return this.$changes.delete(m.toString()),this.$items.delete(m)},_.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&d.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(m){return this.$items.has(m)},_.prototype.forEach=function(m){this.$items.forEach(m)},_.prototype.entries=function(){return this.$items.entries()},_.prototype.keys=function(){return this.$items.keys()},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},_.prototype.getIndex=function(m){return this.$indexes.get(m)},_.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},_.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},_.prototype.toJSON=function(){var m={};return this.forEach(function(y,P){m[P]=typeof y.toJSON=="function"?y.toJSON():y}),m},_.prototype.clone=function(m){var y;return m?y=Object.assign(new _,this):(y=new _,this.forEach(function(P,W){P.$changes?y.set(W,P.clone()):y.set(W,P)})),y},_}(),E={};function v(_,m){E[_]=m}function b(_){return E[_]}var T=function(){function _(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return _.create=function(m){var y=new _;return y.schema=Object.assign({},m&&m.schema||{}),y.indexes=Object.assign({},m&&m.indexes||{}),y.fieldsByIndex=Object.assign({},m&&m.fieldsByIndex||{}),y.descriptors=Object.assign({},m&&m.descriptors||{}),y.deprecated=Object.assign({},m&&m.deprecated||{}),y},_.prototype.addField=function(m,y){var P=this.getNextFieldIndex();this.fieldsByIndex[P]=m,this.indexes[m]=P,this.schema[m]=Array.isArray(y)?{array:y[0]}:y},_.prototype.hasField=function(m){return this.indexes[m]!==void 0},_.prototype.addFilter=function(m,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[m]]=y,this.indexesWithFilters.push(this.indexes[m]),!0},_.prototype.addChildrenFilter=function(m,y){var P=this.indexes[m],W=this.schema[m];if(b(Object.keys(W)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[P]=y,!0;console.warn("@filterChildren: field '".concat(m,"' can't have children. Ignoring filter."))},_.prototype.getChildrenFilter=function(m){return this.childFilters&&this.childFilters[this.indexes[m]]},_.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},_}();function S(_){return _._context&&_._context.useFilters}var C=function(){function _(){this.types={},this.schemas=new Map,this.useFilters=!1}return _.prototype.has=function(m){return this.schemas.has(m)},_.prototype.get=function(m){return this.types[m]},_.prototype.add=function(m,y){y===void 0&&(y=this.schemas.size),m._definition=T.create(m._definition),m._typeid=y,this.types[y]=m,this.schemas.set(m,y)},_.create=function(m){return m===void 0&&(m={}),function(y){return m.context||(m.context=new _),w(y,m)}},_}(),U=new C;function w(_,m){return m===void 0&&(m={}),function(y,P){var W=m.context||U,et=y.constructor;if(et._context=W,!_)throw new Error("".concat(et.name,': @type() reference provided for "').concat(P,`" is undefined. Make sure you don't have any circular dependencies.`));W.has(et)||W.add(et);var Nt=et._definition;if(Nt.addField(P,_),Nt.descriptors[P]){if(Nt.deprecated[P])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(P,"' definition on '").concat(et.name,`'.
Check @type() annotation`))}catch(H){var Rt=H.stack.split(`
`)[4].trim();throw new Error("".concat(H.message," ").concat(Rt))}}var de=M.is(_),L=!de&&u.is(_);if(typeof _!="string"&&!ve.is(_)){var k=Object.values(_)[0];typeof k!="string"&&!W.has(k)&&W.add(k)}if(m.manual){Nt.descriptors[P]={enumerable:!0,configurable:!0,writable:!0};return}var Y="_".concat(P);Nt.descriptors[Y]={enumerable:!1,configurable:!1,writable:!0},Nt.descriptors[P]={get:function(){return this[Y]},set:function(H){H!==this[Y]&&(H!=null?(de&&!(H instanceof M)&&(H=new(M.bind.apply(M,a([void 0],H,!1)))),L&&!(H instanceof u)&&(H=new u(H)),H.$proxy===void 0&&(L?H=f(H):de&&(H=g(H))),this.$changes.change(P),H.$changes&&H.$changes.setParent(this,this.$changes.root,this._definition.indexes[P])):this[Y]!==void 0&&this.$changes.delete(P),this[Y]=H)},enumerable:!0,configurable:!0}}}function R(_){return function(m,y){var P=m.constructor,W=P._definition;W.addFilter(y,_)&&(P._context.useFilters=!0)}}function F(_){return function(m,y){var P=m.constructor,W=P._definition;W.addChildrenFilter(y,_)&&(P._context.useFilters=!0)}}function V(_){return _===void 0&&(_=!0),function(m,y){var P=m.constructor,W=P._definition;W.deprecated[y]=!0,_&&(W.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(et){},enumerable:!1,configurable:!0})}}function j(_,m,y){y===void 0&&(y={}),y.context||(y.context=_._context||y.context||U);for(var P in m)w(m[P],y)(_.prototype,P);return _}function z(_){for(var m=0,y=0,P=0,W=_.length;P<W;P++)m=_.charCodeAt(P),m<128?y+=1:m<2048?y+=2:m<55296||m>=57344?y+=3:(P++,y+=4);return y}function q(_,m,y){for(var P=0,W=0,et=y.length;W<et;W++)P=y.charCodeAt(W),P<128?_[m++]=P:P<2048?(_[m++]=192|P>>6,_[m++]=128|P&63):P<55296||P>=57344?(_[m++]=224|P>>12,_[m++]=128|P>>6&63,_[m++]=128|P&63):(W++,P=65536+((P&1023)<<10|y.charCodeAt(W)&1023),_[m++]=240|P>>18,_[m++]=128|P>>12&63,_[m++]=128|P>>6&63,_[m++]=128|P&63)}function Z(_,m){_.push(m&255)}function Q(_,m){_.push(m&255)}function it(_,m){_.push(m&255),_.push(m>>8&255)}function st(_,m){_.push(m&255),_.push(m>>8&255)}function ot(_,m){_.push(m&255),_.push(m>>8&255),_.push(m>>16&255),_.push(m>>24&255)}function ut(_,m){var y=m>>24,P=m>>16,W=m>>8,et=m;_.push(et&255),_.push(W&255),_.push(P&255),_.push(y&255)}function pt(_,m){var y=Math.floor(m/Math.pow(2,32)),P=m>>>0;ut(_,P),ut(_,y)}function tt(_,m){var y=m/Math.pow(2,32)>>0,P=m>>>0;ut(_,P),ut(_,y)}function at(_,m){Qt(_,m)}function Et(_,m){Gt(_,m)}var Pt=new Int32Array(2),Ut=new Float32Array(Pt.buffer),Jt=new Float64Array(Pt.buffer);function Qt(_,m){Ut[0]=m,ot(_,Pt[0])}function Gt(_,m){Jt[0]=m,ot(_,Pt[0]),ot(_,Pt[1])}function ue(_,m){return Q(_,m?1:0)}function K(_,m){m||(m="");var y=z(m),P=0;if(y<32)_.push(y|160),P=1;else if(y<256)_.push(217),Q(_,y),P=2;else if(y<65536)_.push(218),st(_,y),P=3;else if(y<4294967296)_.push(219),ut(_,y),P=5;else throw new Error("String too long");return q(_,_.length,m),P+y}function _e(_,m){if(isNaN(m))return _e(_,0);if(isFinite(m)){if(m!==(m|0))return _.push(203),Gt(_,m),9}else return _e(_,m>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return m>=0?m<128?(Q(_,m),1):m<256?(_.push(204),Q(_,m),2):m<65536?(_.push(205),st(_,m),3):m<4294967296?(_.push(206),ut(_,m),5):(_.push(207),tt(_,m),9):m>=-32?(_.push(224|m+32),1):m>=-128?(_.push(208),Z(_,m),2):m>=-32768?(_.push(209),it(_,m),3):m>=-2147483648?(_.push(210),ot(_,m),5):(_.push(211),pt(_,m),9)}var zt=Object.freeze({__proto__:null,boolean:ue,float32:at,float64:Et,int16:it,int32:ot,int64:pt,int8:Z,number:_e,string:K,uint16:st,uint32:ut,uint64:tt,uint8:Q,utf8Write:q,writeFloat32:Qt,writeFloat64:Gt});function Kt(_,m,y){for(var P="",W=0,et=m,Nt=m+y;et<Nt;et++){var Rt=_[et];if(!(Rt&128)){P+=String.fromCharCode(Rt);continue}if((Rt&224)===192){P+=String.fromCharCode((Rt&31)<<6|_[++et]&63);continue}if((Rt&240)===224){P+=String.fromCharCode((Rt&15)<<12|(_[++et]&63)<<6|(_[++et]&63)<<0);continue}if((Rt&248)===240){W=(Rt&7)<<18|(_[++et]&63)<<12|(_[++et]&63)<<6|(_[++et]&63)<<0,W>=65536?(W-=65536,P+=String.fromCharCode((W>>>10)+55296,(W&1023)+56320)):P+=String.fromCharCode(W);continue}console.error("Invalid byte "+Rt.toString(16))}return P}function Lt(_,m){return Me(_,m)<<24>>24}function Me(_,m){return _[m.offset++]}function ee(_,m){return N(_,m)<<16>>16}function N(_,m){return _[m.offset++]|_[m.offset++]<<8}function I(_,m){return _[m.offset++]|_[m.offset++]<<8|_[m.offset++]<<16|_[m.offset++]<<24}function $(_,m){return I(_,m)>>>0}function ht(_,m){return te(_,m)}function lt(_,m){return rt(_,m)}function dt(_,m){var y=$(_,m),P=I(_,m)*Math.pow(2,32);return P+y}function Dt(_,m){var y=$(_,m),P=$(_,m)*Math.pow(2,32);return P+y}var vt=new Int32Array(2),At=new Float32Array(vt.buffer),Vt=new Float64Array(vt.buffer);function te(_,m){return vt[0]=I(_,m),At[0]}function rt(_,m){return vt[0]=I(_,m),vt[1]=I(_,m),Vt[0]}function ye(_,m){return Me(_,m)>0}function re(_,m){var y=_[m.offset++],P;y<192?P=y&31:y===217?P=Me(_,m):y===218?P=N(_,m):y===219&&(P=$(_,m));var W=Kt(_,m.offset,P);return m.offset+=P,W}function jt(_,m){var y=_[m.offset];return y<192&&y>160||y===217||y===218||y===219}function It(_,m){var y=_[m.offset++];if(y<128)return y;if(y===202)return te(_,m);if(y===203)return rt(_,m);if(y===204)return Me(_,m);if(y===205)return N(_,m);if(y===206)return $(_,m);if(y===207)return Dt(_,m);if(y===208)return Lt(_,m);if(y===209)return ee(_,m);if(y===210)return I(_,m);if(y===211)return dt(_,m);if(y>223)return(255-y+1)*-1}function Ct(_,m){var y=_[m.offset];return y<128||y>=202&&y<=211}function ne(_,m){return _[m.offset]<160}function me(_,m){return _[m.offset-1]===r&&(_[m.offset]<128||_[m.offset]>=202&&_[m.offset]<=211)}var Oe=Object.freeze({__proto__:null,arrayCheck:ne,boolean:ye,float32:ht,float64:lt,int16:ee,int32:I,int64:dt,int8:Lt,number:It,numberCheck:Ct,readFloat32:te,readFloat64:rt,string:re,stringCheck:jt,switchStructureCheck:me,uint16:N,uint32:$,uint64:Dt,uint8:Me}),ie=function(){function _(m){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(P){return y.add(P)})}return _.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,m,y?this.$items:void 0)},_.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,m)},_.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,m)},_.is=function(m){return m.collection!==void 0},_.prototype.add=function(m){var y=this.$refId++,P=m.$changes!==void 0;return P&&m.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,m),this.$changes.change(y),y},_.prototype.at=function(m){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)},_.prototype.entries=function(){return this.$items.entries()},_.prototype.delete=function(m){for(var y=this.$items.entries(),P,W;(W=y.next())&&!W.done;)if(m===W.value[1]){P=W.value[0];break}return P===void 0?!1:(this.$changes.delete(P),this.$indexes.delete(P),this.$items.delete(P))},_.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&d.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(m){return Array.from(this.$items.values()).some(function(y){return y===m})},_.prototype.forEach=function(m){var y=this;this.$items.forEach(function(P,W,et){return m(P,W,y)})},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},_.prototype.getIndex=function(m){return this.$indexes.get(m)},_.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},_.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){var m=[];return this.forEach(function(y,P){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},_.prototype.clone=function(m){var y;return m?y=Object.assign(new _,this):(y=new _,this.forEach(function(P){P.$changes?y.add(P.clone()):y.add(P)})),y},_}(),ft=function(){function _(m){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(P){return y.add(P)})}return _.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,m,y?this.$items:void 0)},_.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,m)},_.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,m)},_.is=function(m){return m.set!==void 0},_.prototype.add=function(m){var y,P;if(this.has(m))return!1;var W=this.$refId++;m.$changes!==void 0&&m.$changes.setParent(this,this.$changes.root,W);var et=(P=(y=this.$changes.indexes[W])===null||y===void 0?void 0:y.op)!==null&&P!==void 0?P:e.OPERATION.ADD;return this.$changes.indexes[W]=W,this.$indexes.set(W,W),this.$items.set(W,m),this.$changes.change(W,et),W},_.prototype.entries=function(){return this.$items.entries()},_.prototype.delete=function(m){for(var y=this.$items.entries(),P,W;(W=y.next())&&!W.done;)if(m===W.value[1]){P=W.value[0];break}return P===void 0?!1:(this.$changes.delete(P),this.$indexes.delete(P),this.$items.delete(P))},_.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&d.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},_.prototype.has=function(m){for(var y=this.$items.values(),P=!1,W;(W=y.next())&&!W.done;)if(m===W.value){P=!0;break}return P},_.prototype.forEach=function(m){var y=this;this.$items.forEach(function(P,W,et){return m(P,W,y)})},_.prototype.values=function(){return this.$items.values()},Object.defineProperty(_.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),_.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},_.prototype.getIndex=function(m){return this.$indexes.get(m)},_.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},_.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},_.prototype.toArray=function(){return Array.from(this.$items.values())},_.prototype.toJSON=function(){var m=[];return this.forEach(function(y,P){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},_.prototype.clone=function(m){var y;return m?y=Object.assign(new _,this):(y=new _,this.forEach(function(P){P.$changes?y.add(P.clone()):y.add(P)})),y},_}(),G=function(){function _(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return _.prototype.addRefId=function(m){this.refIds.has(m)||(this.refIds.add(m),this.containerIndexes.set(m,new Set))},_.get=function(m){return m.$filterState===void 0&&(m.$filterState=new _),m.$filterState},_}(),Mt=function(){function _(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return _.prototype.getNextUniqueId=function(){return this.nextUniqueId++},_.prototype.addRef=function(m,y,P){P===void 0&&(P=!0),this.refs.set(m,y),P&&(this.refCounts[m]=(this.refCounts[m]||0)+1)},_.prototype.removeRef=function(m){var y=this.refCounts[m];if(y===void 0){console.warn("trying to remove reference ".concat(m," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(m," with 0 refCount"));return}this.refCounts[m]=y-1,this.deletedRefs.add(m)},_.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},_.prototype.garbageCollectDeletedRefs=function(){var m=this;this.deletedRefs.forEach(function(y){if(!(m.refCounts[y]>0)){var P=m.refs.get(y);if(P instanceof ve)for(var W in P._definition.schema)typeof P._definition.schema[W]!="string"&&P[W]&&P[W].$changes&&m.removeRef(P[W].$changes.refId);else{var et=P.$changes.parent._definition,Nt=et.schema[et.fieldsByIndex[P.$changes.parentIndex]];typeof Object.values(Nt)[0]=="function"&&Array.from(P.values()).forEach(function(Rt){return m.removeRef(Rt.$changes.refId)})}m.refs.delete(y),delete m.refCounts[y]}}),this.deletedRefs.clear()},_}(),_t=function(_){i(m,_);function m(){return _!==null&&_.apply(this,arguments)||this}return m}(Error);function Xt(_,m,y,P){var W,et=!1;switch(m){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":W="number",isNaN(_)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(P));break;case"string":W="string",et=!0;break;case"boolean":return}if(typeof _!==W&&(!et||et&&_!==null)){var Nt="'".concat(JSON.stringify(_),"'").concat(_&&_.constructor&&" (".concat(_.constructor.name,")")||"");throw new _t("a '".concat(W,"' was expected, but ").concat(Nt," was provided in ").concat(y.constructor.name,"#").concat(P))}}function Ft(_,m,y,P){if(!(_ instanceof m))throw new _t("a '".concat(m.name,"' was expected, but '").concat(_.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(P))}function be(_,m,y,P,W){Xt(y,_,P,W);var et=zt[_];if(et)et(m,y);else throw new _t("a '".concat(_,"' was expected, but ").concat(y," was provided in ").concat(P.constructor.name,"#").concat(W))}function Ee(_,m,y){return Oe[_](m,y)}var ve=function(){function _(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var P=this._definition.descriptors;P&&Object.defineProperties(this,P),m[0]&&this.assign(m[0])}return _.onError=function(m){console.error(m)},_.is=function(m){return m._definition&&m._definition.schema!==void 0},_.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},_.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},_.prototype.assign=function(m){return Object.assign(this,m),this},Object.defineProperty(_.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),_.prototype.setDirty=function(m,y){this.$changes.change(m,y)},_.prototype.listen=function(m,y,P){var W=this;return P===void 0&&(P=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[m]||(this.$callbacks[m]=[]),this.$callbacks[m].push(y),P&&this[m]!==void 0&&y(this[m],void 0),function(){return p(W.$callbacks[m],W.$callbacks[m].indexOf(y))}},_.prototype.decode=function(m,y,P){y===void 0&&(y={offset:0}),P===void 0&&(P=this);var W=[],et=this.$changes.root,Nt=m.length,Rt=0;for(et.refs.set(Rt,this);y.offset<Nt;){var de=m[y.offset++];if(de==r){Rt=It(m,y);var L=et.refs.get(Rt);if(!L)throw new Error('"refId" not found: '.concat(Rt));P=L;continue}var k=P.$changes,Y=P._definition!==void 0,H=Y?de>>6<<6:de;if(H===e.OPERATION.CLEAR){P.clear(W);continue}var X=Y?de%(H||255):It(m,y),nt=Y?P._definition.fieldsByIndex[X]:"",ct=k.getType(X),J=void 0,mt=void 0,kt=void 0;if(Y?mt=P["_".concat(nt)]:(mt=P.getByIndex(X),(H&e.OPERATION.ADD)===e.OPERATION.ADD?(kt=P instanceof u?re(m,y):X,P.setIndex(X,kt)):kt=P.getIndex(X)),(H&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(H!==e.OPERATION.DELETE_AND_ADD&&P.deleteByIndex(X),mt&&mt.$changes&&et.removeRef(mt.$changes.refId),J=null),nt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var wt={offset:y.offset};y.offset<Nt&&!(me(m,y)&&(wt.offset=y.offset+1,et.refs.has(It(m,wt))));)y.offset++;continue}else if(H!==e.OPERATION.DELETE)if(_.is(ct)){var gt=It(m,y);if(J=et.refs.get(gt),H!==e.OPERATION.REPLACE){var Bt=this.getSchemaType(m,y,ct);J||(J=this.createTypeInstance(Bt),J.$changes.refId=gt,mt&&(J.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&et.removeRef(mt.$changes.refId))),et.addRef(gt,J,J!==mt)}}else if(typeof ct=="string")J=Ee(ct,m,y);else{var He=b(Object.keys(ct)[0]),Te=It(m,y),Ve=et.refs.has(Te)?mt||et.refs.get(Te):new He.constructor;if(J=Ve.clone(!0),J.$changes.refId=Te,mt&&(J.$callbacks=mt.$callbacks,mt.$changes.refId&&Te!==mt.$changes.refId)){et.removeRef(mt.$changes.refId);for(var oe=mt.entries(),Ot=void 0;(Ot=oe.next())&&!Ot.done;){var _i=Ot.value,ge=_i[0],Fn=_i[1];W.push({refId:Te,op:e.OPERATION.DELETE,field:ge,value:void 0,previousValue:Fn})}}et.addRef(Te,J,Ve!==mt)}if(J!=null){if(J.$changes&&J.$changes.setParent(k.ref,k.root,X),P instanceof _)P[nt]=J;else if(P instanceof u){var ge=kt;P.$items.set(ge,J),P.$changes.allChanges.add(X)}else if(P instanceof M)P.setAt(X,J);else if(P instanceof ie){var Gn=P.add(J);P.setIndex(X,Gn)}else if(P instanceof ft){var Gn=P.add(J);Gn!==!1&&P.setIndex(X,Gn)}}mt!==J&&W.push({refId:Rt,op:H,field:nt,dynamicIndex:kt,value:J,previousValue:mt})}return this._triggerChanges(W),et.garbageCollectDeletedRefs(),W},_.prototype.encode=function(m,y,P){m===void 0&&(m=!1),y===void 0&&(y=[]),P===void 0&&(P=!1);for(var W=this.$changes,et=new WeakSet,Nt=[W],Rt=1,de=0;de<Rt;de++){var L=Nt[de],k=L.ref,Y=k instanceof _;L.ensureRefId(),et.add(L),L!==W&&(L.changed||m)&&(Q(y,r),_e(y,L.refId));for(var H=m?Array.from(L.allChanges):Array.from(L.changes.values()),X=0,nt=H.length;X<nt;X++){var ct=m?{op:e.OPERATION.ADD,index:H[X]}:H[X],J=ct.index,mt=Y?k._definition.fieldsByIndex&&k._definition.fieldsByIndex[J]:J,kt=y.length;if(ct.op!==e.OPERATION.TOUCH)if(Y)Q(y,J|ct.op);else{if(Q(y,ct.op),ct.op===e.OPERATION.CLEAR)continue;_e(y,J)}if(!Y&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&k instanceof u){var wt=L.ref.$indexes.get(J);K(y,wt)}if(ct.op!==e.OPERATION.DELETE){var gt=L.getType(J),Bt=L.getValue(J);if(Bt&&Bt.$changes&&!et.has(Bt.$changes)&&(Nt.push(Bt.$changes),Bt.$changes.ensureRefId(),Rt++),ct.op!==e.OPERATION.TOUCH){if(_.is(gt))Ft(Bt,gt,k,mt),_e(y,Bt.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(y,gt,Bt.constructor);else if(typeof gt=="string")be(gt,y,Bt,k,mt);else{var He=b(Object.keys(gt)[0]);Ft(k["_".concat(mt)],He.constructor,k,mt),_e(y,Bt.$changes.refId)}P&&L.cache(J,y.slice(kt))}}}!m&&!P&&L.discard()}return y},_.prototype.encodeAll=function(m){return this.encode(!0,[],m)},_.prototype.applyFilters=function(m,y){var P,W;y===void 0&&(y=!1);for(var et=this,Nt=new Set,Rt=G.get(m),de=[this.$changes],L=1,k=[],Y=function(X){var nt=de[X];if(Nt.has(nt.refId))return"continue";var ct=nt.ref,J=ct instanceof _;Q(k,r),_e(k,nt.refId);var mt=Rt.refIds.has(nt),kt=y||!mt;Rt.addRefId(nt);var wt=Rt.containerIndexes.get(nt),gt=kt?Array.from(nt.allChanges):Array.from(nt.changes.values());if(!y&&J&&ct._definition.indexesWithFilters){var Bt=ct._definition.indexesWithFilters;Bt.forEach(function(Jn){!wt.has(Jn)&&nt.allChanges.has(Jn)&&(kt?gt.push(Jn):gt.push({op:e.OPERATION.ADD,index:Jn}))})}for(var He=0,Te=gt.length;He<Te;He++){var Ve=kt?{op:e.OPERATION.ADD,index:gt[He]}:gt[He];if(Ve.op===e.OPERATION.CLEAR){Q(k,Ve.op);continue}var oe=Ve.index;if(Ve.op===e.OPERATION.DELETE){J?Q(k,Ve.op|oe):(Q(k,Ve.op),_e(k,oe));continue}var Ot=nt.getValue(oe),_i=nt.getType(oe);if(J){var ge=ct._definition.filters&&ct._definition.filters[oe];if(ge&&!ge.call(ct,m,Ot,et)){Ot&&Ot.$changes&&Nt.add(Ot.$changes.refId);continue}}else{var Fn=nt.parent,ge=nt.getChildrenFilter();if(ge&&!ge.call(Fn,m,ct.$indexes.get(oe),Ot,et)){Ot&&Ot.$changes&&Nt.add(Ot.$changes.refId);continue}}if(Ot.$changes&&(de.push(Ot.$changes),L++),Ve.op!==e.OPERATION.TOUCH)if(Ve.op===e.OPERATION.ADD||J)k.push.apply(k,(P=nt.caches[oe])!==null&&P!==void 0?P:[]),wt.add(oe);else if(wt.has(oe))k.push.apply(k,(W=nt.caches[oe])!==null&&W!==void 0?W:[]);else{if(wt.add(oe),Q(k,e.OPERATION.ADD),_e(k,oe),ct instanceof u){var Gn=nt.ref.$indexes.get(oe);K(k,Gn)}Ot.$changes?_e(k,Ot.$changes.refId):zt[_i](k,Ot)}else if(Ot.$changes&&!J){if(Q(k,e.OPERATION.ADD),_e(k,oe),ct instanceof u){var Gn=nt.ref.$indexes.get(oe);K(k,Gn)}_e(k,Ot.$changes.refId)}}},H=0;H<L;H++)Y(H);return k},_.prototype.clone=function(){var m,y=new this.constructor,P=this._definition.schema;for(var W in P)typeof this[W]=="object"&&typeof((m=this[W])===null||m===void 0?void 0:m.clone)=="function"?y[W]=this[W].clone():y[W]=this[W];return y},_.prototype.toJSON=function(){var m=this._definition.schema,y=this._definition.deprecated,P={};for(var W in m)!y[W]&&this[W]!==null&&typeof this[W]<"u"&&(P[W]=typeof this[W].toJSON=="function"?this[W].toJSON():this["_".concat(W)]);return P},_.prototype.discardAllChanges=function(){this.$changes.discardAll()},_.prototype.getByIndex=function(m){return this[this._definition.fieldsByIndex[m]]},_.prototype.deleteByIndex=function(m){this[this._definition.fieldsByIndex[m]]=void 0},_.prototype.tryEncodeTypeId=function(m,y,P){y._typeid!==P._typeid&&(Q(m,c),_e(m,P._typeid))},_.prototype.getSchemaType=function(m,y,P){var W;return m[y.offset]===c&&(y.offset++,W=this.constructor._context.get(It(m,y))),W||P},_.prototype.createTypeInstance=function(m){var y=new m;return y.$changes.root=this.$changes.root,y},_.prototype._triggerChanges=function(m){for(var y,P,W,et,Nt,Rt,de,L,k,Y=new Set,H=this.$changes.root.refs,X=function(ct){var J=m[ct],mt=J.refId,kt=H.get(mt),wt=kt.$callbacks;if((J.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&J.previousValue instanceof _&&((P=(y=J.previousValue.$callbacks)===null||y===void 0?void 0:y[e.OPERATION.DELETE])===null||P===void 0||P.forEach(function(gt){return gt()})),!wt)return"continue";if(kt instanceof _){if(!Y.has(mt))try{(W=wt==null?void 0:wt[e.OPERATION.REPLACE])===null||W===void 0||W.forEach(function(gt){return gt()})}catch(gt){_.onError(gt)}try{wt.hasOwnProperty(J.field)&&((et=wt[J.field])===null||et===void 0||et.forEach(function(gt){return gt(J.value,J.previousValue)}))}catch(gt){_.onError(gt)}}else J.op===e.OPERATION.ADD&&J.previousValue===void 0?(Nt=wt[e.OPERATION.ADD])===null||Nt===void 0||Nt.forEach(function(gt){var Bt;return gt(J.value,(Bt=J.dynamicIndex)!==null&&Bt!==void 0?Bt:J.field)}):J.op===e.OPERATION.DELETE?J.previousValue!==void 0&&((Rt=wt[e.OPERATION.DELETE])===null||Rt===void 0||Rt.forEach(function(gt){var Bt;return gt(J.previousValue,(Bt=J.dynamicIndex)!==null&&Bt!==void 0?Bt:J.field)})):J.op===e.OPERATION.DELETE_AND_ADD&&(J.previousValue!==void 0&&((de=wt[e.OPERATION.DELETE])===null||de===void 0||de.forEach(function(gt){var Bt;return gt(J.previousValue,(Bt=J.dynamicIndex)!==null&&Bt!==void 0?Bt:J.field)})),(L=wt[e.OPERATION.ADD])===null||L===void 0||L.forEach(function(gt){var Bt;return gt(J.value,(Bt=J.dynamicIndex)!==null&&Bt!==void 0?Bt:J.field)})),J.value!==J.previousValue&&((k=wt[e.OPERATION.REPLACE])===null||k===void 0||k.forEach(function(gt){var Bt;return gt(J.value,(Bt=J.dynamicIndex)!==null&&Bt!==void 0?Bt:J.field)}));Y.add(mt)},nt=0;nt<m.length;nt++)X(nt)},_._definition=T.create(),_}();function tn(_){for(var m=[_.$changes],y=1,P={},W=P,et=function(Rt){var de=m[Rt];de.changes.forEach(function(L){var k=de.ref,Y=L.index,H=k._definition?k._definition.fieldsByIndex[Y]:k.$indexes.get(Y);W[H]=de.getValue(Y)})},Nt=0;Nt<y;Nt++)et(Nt);return P}var fe={context:new C},qe=function(_){i(m,_);function m(){return _!==null&&_.apply(this,arguments)||this}return s([w("string",fe)],m.prototype,"name",void 0),s([w("string",fe)],m.prototype,"type",void 0),s([w("number",fe)],m.prototype,"referencedType",void 0),m}(ve),yn=function(_){i(m,_);function m(){var y=_!==null&&_.apply(this,arguments)||this;return y.fields=new M,y}return s([w("number",fe)],m.prototype,"id",void 0),s([w([qe],fe)],m.prototype,"fields",void 0),m}(ve),Po=function(_){i(m,_);function m(){var y=_!==null&&_.apply(this,arguments)||this;return y.types=new M,y}return m.encode=function(y){var P,W=y.constructor,et=new m;et.rootType=W._typeid;var Nt=function(k,Y){for(var H in Y){var X=new qe;X.name=H;var nt=void 0;if(typeof Y[H]=="string")nt=Y[H];else{var ct=Y[H],J=void 0;ve.is(ct)?(nt="ref",J=Y[H]):(nt=Object.keys(ct)[0],typeof ct[nt]=="string"?nt+=":"+ct[nt]:J=ct[nt]),X.referencedType=J?J._typeid:-1}X.type=nt,k.fields.push(X)}et.types.push(k)},Rt=(P=W._context)===null||P===void 0?void 0:P.types;for(var de in Rt){var L=new yn;L.id=Number(de),Nt(L,Rt[de]._definition.schema)}return et.encodeAll()},m.decode=function(y,P){var W=new C,et=new m;et.decode(y,P);var Nt=et.types.reduce(function(Y,H){var X=function(ct){i(J,ct);function J(){return ct!==null&&ct.apply(this,arguments)||this}return J}(ve),nt=H.id;return Y[nt]=X,W.add(X,nt),Y},{});et.types.forEach(function(Y){var H=Nt[Y.id];Y.fields.forEach(function(X){var nt;if(X.referencedType!==void 0){var ct=X.type,J=Nt[X.referencedType];if(!J){var mt=X.type.split(":");ct=mt[0],J=mt[1]}ct==="ref"?w(J,{context:W})(H.prototype,X.name):w((nt={},nt[ct]=J,nt),{context:W})(H.prototype,X.name)}else w(X.type,{context:W})(H.prototype,X.name)})});var Rt=Nt[et.rootType],de=new Rt;for(var L in Rt._definition.schema){var k=Rt._definition.schema[L];typeof k!="string"&&(de[L]=typeof k=="function"?new k:new(b(Object.keys(k)[0])).constructor)}return de},s([w([yn],fe)],m.prototype,"types",void 0),s([w("number",fe)],m.prototype,"rootType",void 0),m}(ve);v("map",{constructor:u}),v("array",{constructor:M}),v("set",{constructor:ft}),v("collection",{constructor:ie}),e.ArraySchema=M,e.CollectionSchema=ie,e.Context=C,e.MapSchema=u,e.Reflection=Po,e.ReflectionField=qe,e.ReflectionType=yn,e.Schema=ve,e.SchemaDefinition=T,e.SetSchema=ft,e.decode=Oe,e.defineTypes=j,e.deprecated=V,e.dumpChanges=tn,e.encode=zt,e.filter=R,e.filterChildren=F,e.hasFilter=S,e.registerType=v,e.type=w})})(Hc,Hc.exports);var fu=Hc.exports,n_=Ge&&Ge.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),i_=Ge&&Ge.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),s_=Ge&&Ge.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&n_(t,o,e);return i_(t,o),t};Object.defineProperty(Ao,"__esModule",{value:!0});Ao.Room=void 0;const id=s_(qs),o_=oa,ln=sl,sd=rs,r_=Co,_r=js,Tn=fu,od=sa;class ol{constructor(t,e){this.onStateChange=(0,_r.createSignal)(),this.onError=(0,_r.createSignal)(),this.onLeave=(0,_r.createSignal)(),this.onJoin=(0,_r.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,r_.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,sd.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const s=new o_.Connection;n.connection=s,s.events.onmessage=ol.prototype.onMessageCallback.bind(n),s.events.onclose=function(a){var r;if(!n.hasJoined){(r=console.warn)===null||r===void 0||r.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===od.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},s.events.onerror=function(a){var r;(r=console.warn)===null||r===void 0||r.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},s.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([ln.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(od.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[ln.Protocol.ROOM_DATA];typeof t=="string"?Tn.encode.string(n,t):Tn.encode.number(n,t);let i;if(e!==void 0){const s=id.encode(e);i=new Uint8Array(n.length+s.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(s),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[ln.Protocol.ROOM_DATA_BYTES];typeof t=="string"?Tn.encode.string(n,t):Tn.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===ln.Protocol.JOIN_ROOM){let i=1;const s=(0,ln.utf8Read)(e,i);if(i+=(0,ln.utf8Length)(s),this.serializerId=(0,ln.utf8Read)(e,i),i+=(0,ln.utf8Length)(this.serializerId),!this.serializer){const a=(0,sd.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([ln.Protocol.JOIN_ROOM])}else if(n===ln.Protocol.ERROR){const i={offset:1},s=Tn.decode.number(e,i),a=Tn.decode.string(e,i);this.onError.invoke(s,a)}else if(n===ln.Protocol.LEAVE_ROOM)this.leave();else if(n===ln.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(Tn.decode.number(e,i)),r=new a;r.decode(e,i),this.dispatchMessage(a,r)}else if(n===ln.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===ln.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===ln.Protocol.ROOM_DATA){const i={offset:1},s=Tn.decode.stringCheck(e,i)?Tn.decode.string(e,i):Tn.decode.number(e,i),a=e.length>i.offset?id.decode(t.data,i.offset):void 0;this.dispatchMessage(s,a)}else if(n===ln.Protocol.ROOM_DATA_BYTES){const i={offset:1},s=Tn.decode.stringCheck(e,i)?Tn.decode.string(e,i):Tn.decode.number(e,i);this.dispatchMessage(s,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}Ao.Room=ol;var aa={};function rd(o,t){t.headers=o.headers||{},t.statusMessage=o.statusText,t.statusCode=o.status,t.data=o.response}function Kn(o,t,e){return new Promise(function(n,i){e=e||{};var s=new XMLHttpRequest,a,r,c,l=e.body,h=e.headers||{};e.timeout&&(s.timeout=e.timeout),s.ontimeout=s.onerror=function(d){d.timeout=d.type=="timeout",i(d)},s.open(o,t.href||t),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),rd(s,s);r=c.shift();)r=r.split(": "),s.headers[r.shift().toLowerCase()]=r.join(": ");if(r=s.headers["content-type"],r&&~r.indexOf("application/json"))try{s.data=JSON.parse(s.data,e.reviver)}catch(d){return rd(s,d),i(d)}(s.status>=400?i:n)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!e.withCredentials;for(a in h)s.setRequestHeader(a,h[a]);s.send(l)})}var a_=Kn.bind(Kn,"GET"),c_=Kn.bind(Kn,"POST"),l_=Kn.bind(Kn,"PATCH"),h_=Kn.bind(Kn,"DELETE"),d_=Kn.bind(Kn,"PUT");const u_=Object.freeze(Object.defineProperty({__proto__:null,del:h_,get:a_,patch:l_,post:c_,put:d_,send:Kn},Symbol.toStringTag,{value:"Module"})),f_=kv(u_);var p_=Ge&&Ge.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),m_=Ge&&Ge.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),g_=Ge&&Ge.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&p_(t,o,e);return m_(t,o),t};Object.defineProperty(aa,"__esModule",{value:!0});aa.HTTP=void 0;const x_=sa,v_=g_(f_);class __{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return v_[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var s;const a=i.statusCode,r=((s=i.data)===null||s===void 0?void 0:s.error)||i.statusMessage||i.message;throw!a&&!r?i:new x_.ServerError(a,r)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}aa.HTTP=__;var Ro={},Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.getItem=Bi.removeItem=Bi.setItem=void 0;let uo;function rl(){if(!uo)try{uo=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return uo||(uo={cache:{},setItem:function(o,t){this.cache[o]=t},getItem:function(o){this.cache[o]},removeItem:function(o){delete this.cache[o]}}),uo}function y_(o,t){rl().setItem(o,t)}Bi.setItem=y_;function M_(o){rl().removeItem(o)}Bi.removeItem=M_;function b_(o,t){const e=rl().getItem(o);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Bi.getItem=b_;var Yi=Ge&&Ge.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?s(h.value):i(h.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},Ps=Ge&&Ge.__classPrivateFieldGet||function(o,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(o):n?n.value:t.get(o)},fo=Ge&&Ge.__classPrivateFieldSet||function(o,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},Pr,Vc,Ti,Lr;Object.defineProperty(Ro,"__esModule",{value:!0});Ro.Auth=void 0;const tc=Bi,E_=Co;class S_{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},Pr.set(this,!1),Vc.set(this,void 0),Ti.set(this,void 0),Lr.set(this,(0,E_.createNanoEvents)()),(0,tc.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Ps(this,Lr,"f").on("change",t);return Ps(this,Pr,"f")||fo(this,Vc,new Promise((n,i)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),fo(this,Pr,!0,"f"),e}getUserData(){return Yi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Yi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return Yi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Yi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Yi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Yi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const s=e.width||480,a=e.height||768,r=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${r}`),h=screen.width/2-s/2,d=screen.height/2-a/2;fo(this,Ti,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+a+", top="+d+", left="+h),"f");const p=g=>{g.data.user===void 0&&g.data.token===void 0||(clearInterval(x),Ps(this,Ti,"f").close(),fo(this,Ti,void 0,"f"),window.removeEventListener("message",p),g.data.error!==void 0?i(g.data.error):(n(g.data),this.emitChange(g.data)))},x=setInterval(()=>{(!Ps(this,Ti,"f")||Ps(this,Ti,"f").closed)&&(fo(this,Ti,void 0,"f"),i("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return Yi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,tc.removeItem)(this.settings.key):(0,tc.setItem)(this.settings.key,t.token)),Ps(this,Lr,"f").emit("change",t)}}Ro.Auth=S_;Pr=new WeakMap,Vc=new WeakMap,Ti=new WeakMap,Lr=new WeakMap;var ca={};Object.defineProperty(ca,"__esModule",{value:!0});ca.discordURLBuilder=void 0;function w_(o){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=o.hostname.split("."),i=!o.hostname.includes("trycloudflare.com")&&!o.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return o.pathname.startsWith("/.proxy")?`${o.protocol}//${e}${i}${o.pathname}${o.search}`:`${o.protocol}//${e}/.proxy/colyseus${i}${o.pathname}${o.search}`}ca.discordURLBuilder=w_;var ti=Ge&&Ge.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?s(h.value):i(h.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},ec;Object.defineProperty(Ys,"__esModule",{value:!0});Ys.Client=Ys.MatchMakeError=void 0;const T_=sa,A_=Ao,C_=aa,R_=Ro,P_=ca;class la extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,la.prototype)}}Ys.MatchMakeError=la;const ad=typeof window<"u"&&typeof((ec=window==null?void 0:window.location)===null||ec===void 0?void 0:ec.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class L_{constructor(t=ad,e){var n,i;if(typeof t=="string"){const s=t.startsWith("/")?new URL(t,ad):new URL(t),a=s.protocol==="https:"||s.protocol==="wss:",r=Number(s.port||(a?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:r,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new C_.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new R_.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=P_.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return ti(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return ti(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return ti(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return ti(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return ti(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return ti(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return ti(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const s={sessionId:i.sessionId};t.reconnectionToken&&(s.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,s),t.devMode&&(()=>ti(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let r=0,c=8;const l=()=>ti(this,void 0,void 0,function*(){r++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{r<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((r,c)=>{const l=(h,d)=>c(new T_.ServerError(h,d));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),r(a)})})})}createMatchMakeRequest(t,e,n={},i,s){return ti(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new la(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,s)})}createRoom(t,e){return new A_.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Ys.Client=L_;var ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.SchemaSerializer=void 0;const cd=fu;class I_{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new cd.Reflection().decode(t,e):this.state=cd.Reflection.decode(t,e)}}ha.SchemaSerializer=I_;var da={};Object.defineProperty(da,"__esModule",{value:!0});da.NoneSerializer=void 0;class D_{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}da.NoneSerializer=D_;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.SchemaSerializer=o.registerSerializer=o.Auth=o.Room=o.ErrorCode=o.Protocol=o.MatchMakeError=o.Client=void 0;var t=Ys;Object.defineProperty(o,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(o,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=sl;Object.defineProperty(o,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(o,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=Ao;Object.defineProperty(o,"Room",{enumerable:!0,get:function(){return n.Room}});var i=Ro;Object.defineProperty(o,"Auth",{enumerable:!0,get:function(){return i.Auth}});const s=ha;Object.defineProperty(o,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const a=da,r=rs;Object.defineProperty(o,"registerSerializer",{enumerable:!0,get:function(){return r.registerSerializer}}),(0,r.registerSerializer)("schema",s.SchemaSerializer),(0,r.registerSerializer)("none",a.NoneSerializer)})(hu);class O_{constructor(t,e){D(this,"group");D(this,"head");D(this,"body");D(this,"leftArm");D(this,"rightArm");D(this,"leftLeg");D(this,"rightLeg");D(this,"label");D(this,"healthBar");D(this,"targetPos",new B);D(this,"targetRotY",0);D(this,"targetRotX",0);D(this,"health",20);D(this,"maxHealth",20);D(this,"walkCycle",0);D(this,"prevPos",new B);D(this,"dead",!1);D(this,"name");this.name=e,this.group=new qt,this.prevPos.copy(this.group.position);let n=0;for(let R=0;R<e.length;R++)n=n*31+e.charCodeAt(R)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],s=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],r=i[n%i.length],c=s[(n>>3)%s.length],l=a[(n>>6)%a.length],h=3351057,d=s[(n>>9)%s.length],p=()=>new xe({color:r}),x=()=>new xe({color:c}),g=()=>new xe({color:l}),M=()=>new xe({color:h}),f=(R,F,V,j,z=0)=>{const q=new qt,Z=new we(R,F,V),Q=new Wt(Z,j);return Q.position.y=-F/2+z,q.add(Q),q},u=new we(.5,.5,.5);this.head=new Wt(u,p()),this.head.position.y=.25;const E=new we(.52,.52,.52),v=new xe({color:d,transparent:!0,opacity:.35}),b=new Wt(E,v);this.head.add(b);const T=new we(.6,.75,.35);this.body=new Wt(T,x()),this.body.position.y=-.375,this.leftArm=f(.25,.65,.25,x(),0),this.rightArm=f(.25,.65,.25,x(),0);const S=new Wt(new we(.24,.3,.24),p());S.position.y=-.5,this.leftArm.children[0].add(S);const C=S.clone();this.rightArm.children[0].add(C),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=f(.27,.7,.27,g(),0),this.rightLeg=f(.27,.7,.27,g(),0);const U=new Wt(new we(.28,.22,.28),M());U.position.y=-.5,this.leftLeg.children[0].add(U);const w=U.clone();this.rightLeg.children[0].add(w),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const s=new Xs(e),a=new Hr({map:s,transparent:!0,depthTest:!1}),r=new Nc(a);return r.scale.set(1.6,.35,1),r}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Xs(t),i=new Hr({map:n,transparent:!0,depthTest:!1}),s=new Nc(i);return s.scale.set(1.2,.15,1),s}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,s=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*s,this.group.position.y+=(n-this.group.position.y)*s,this.group.position.z+=(i-this.group.position.z)*s;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const r=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(r*r+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const d=Math.sin(this.walkCycle),p=.65;this.leftLeg.rotation.x=d*p,this.rightLeg.rotation.x=-d*p,this.leftArm.rotation.x=-d*p,this.rightArm.rotation.x=d*p,this.body.position.y=-.375+Math.abs(d)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class N_{constructor(t,e,n,i){D(this,"client");D(this,"room",null);D(this,"players",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"mobs",null);D(this,"moveInterval",null);D(this,"getLocalState");D(this,"_playerName","");D(this,"_reconnectDelay",2e3);this.scene=t,this.world=e,this.cb=n;const s=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!s?"wss":"ws";this.client=new hu.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this._playerName=t,this._reconnectDelay=2e3,await this._doJoin()}async _doJoin(){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:this._playerName}),this.cb.onStatusChange("connected"),this._reconnectDelay=2e3,this.setupHandlers(),this.startSendPosition()}catch(t){console.error("[MP] Connection failed:",t),this.cb.onStatusChange("disconnected"),this._scheduleReconnect()}}_scheduleReconnect(){const t=this._reconnectDelay;this._reconnectDelay=Math.min(this._reconnectDelay*2,3e4),console.log(`[MP] Reconnecting in ${t}ms...`),setTimeout(()=>this._doJoin(),t)}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new O_(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const s=this.players.get(e);s&&(s.targetPos.set(t.x,t.y,t.z),s.targetRotY=t.rotY,s.targetRotX=t.rotX,s.group.visible=t.gameMode!=="spectator",s.health!==t.health&&(s.setHealth(t.health),t.health<=0&&!s.dead&&s.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition(),this._scheduleReconnect()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var s;(s=this.room)==null||s.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}getOnlinePlayerNames(){const t=[];for(const[,e]of this.players)e.name&&t.push(e.name);return t}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const nc={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036,irongolem:13421772,snowgolem:16777215,magmacube:13382400,silverfish:8947848,elderguardian:8952234,witch:5583752,evoker:7829367,zombievillager:7846775,wanderingtrader:2245802,giant:7846775,zombiehorse:6982234,skeletonhorse:13421755};class ld{constructor(t,e){D(this,"group");D(this,"bodyMeshes",[]);D(this,"legs",[]);D(this,"arms",[]);D(this,"headGroup");D(this,"hpSprite");D(this,"id");D(this,"type");D(this,"health");D(this,"maxHealth");D(this,"alive",!0);D(this,"state","idle");D(this,"targetPos",new B);D(this,"targetRotY",0);D(this,"walkCycle",0);D(this,"prevPos",new B);switch(this.group=new qt,this.headGroup=new qt,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break;case"irongolem":this.buildIronGolem();break;case"snowgolem":this.buildSnowGolem();break;case"magmacube":this.buildMagmaCube();break;case"silverfish":this.buildSilverfish();break;case"elderguardian":this.buildElderGuardian();break;case"witch":this.buildWitch();break;case"evoker":this.buildEvoker();break;case"zombievillager":this.buildZombieVillager();break;case"wanderingtrader":this.buildWanderingTrader();break;case"giant":this.buildGiant();break;case"zombiehorse":this.buildZombieHorse();break;case"skeletonhorse":this.buildSkeletonHorse();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new xe({color:t,transparent:e,opacity:n})}box(t,e,n,i){const s=new Wt(new we(t,e,n),this.mat(i));return this.bodyMeshes.push(s),s}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.72,.66,.66,16361640);s.position.y=0,this.headGroup.add(s);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const r=a.clone();r.position.x=.2,this.headGroup.add(a,r);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const d=this.box(.18,.2,.1,15757424);d.position.set(-.28,.4,.1),this.headGroup.add(d);const p=d.clone();p.position.x=.28,this.headGroup.add(p),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const x=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[g,M]of x){const f=new qt,u=this.box(.3,.48,.3,16361640);u.position.y=-.24;const E=this.box(.3,.14,.3,7816260);E.position.y=-.48-.07,f.add(u,E),f.position.set(g,0,M),this.group.add(f),this.legs.push(f)}}buildZombie(){const s=this.box(.6,.8,.35,2771498);s.position.y=-.05,this.group.add(s);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=d=>{const p=new qt,x=this.box(.26,.55,.26,2771498);x.position.y=-.275;const g=this.box(.24,.45,.24,7846775);return g.position.y=-.55-.225,p.add(x,g),p.position.set(d*.43,.2,0),p.rotation.x=-Math.PI/2.2,this.group.add(p),this.arms.push(p),p};l(-1),l(1);const h=d=>{const p=new qt,x=this.box(.26,.6,.26,1715738);x.position.y=-.3;const g=this.box(.26,.24,.28,1708040);return g.position.y=-.6-.12,p.add(x,g),p.position.set(d*.175,-.45,0),this.group.add(p),this.legs.push(p),p};h(-1),h(1)}buildChicken(){const s=this.box(.55,.6,.7,16777215);s.scale.set(1,1.1,1.3),s.position.y=.35,this.group.add(s);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const r=this.box(.12,.22,.12,14492194);r.position.set(0,.3,.02),this.headGroup.add(r);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new qt,p=this.box(.12,.45,.5,16777215);p.position.y=-.225,d.add(p),d.position.set(h*.34,.35,0),d.rotation.z=-h*.2,this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new qt,p=this.box(.1,.4,.1,16763904);p.position.y=-.2;const x=this.box(.25,.06,.18,16763904);x.position.set(.05,-.43,.06),d.add(p,x),d.position.set(h*.14,.05,0),this.group.add(d),this.legs.push(d)}}buildCow(){const s=this.box(1.1,.85,1.5,8014378);s.position.set(0,.5,0),this.group.add(s);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const r=this.box(.76,.7,.72,8014378);this.headGroup.add(r);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const d=this.box(.14,.14,.05,1118481);d.position.set(-.28,.14,.37),this.headGroup.add(d);const p=d.clone();p.position.x=.28,this.headGroup.add(p);const x=this.box(.1,.28,.1,14540253);x.position.set(-.3,.44,.04),this.headGroup.add(x);const g=x.clone();g.position.x=.3,this.headGroup.add(g);const M=this.box(.22,.16,.1,8014378);M.position.set(-.44,.26,.06),this.headGroup.add(M);const f=M.clone();f.position.x=.44,this.headGroup.add(f),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const u=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[v,b]of u){const T=new qt,S=this.box(.34,.55,.34,8014378);S.position.y=-.275;const C=this.box(.34,.15,.36,2236962);C.position.y=-.55-.075,T.add(S,C),T.position.set(v,0,b),this.group.add(T),this.legs.push(T)}const E=this.box(.44,.2,.44,16765120);E.position.set(0,-.08,.1),this.group.add(E)}buildSheep(){const s=this.box(1,.95,1.35,14540253);s.position.set(0,.55,0),this.group.add(s);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const r=this.box(.8,.55,.55,14540253);r.position.set(0,.72,.5),this.group.add(r);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const d=h.clone();d.position.x=.2,this.headGroup.add(d);const p=this.box(.52,.3,.5,14540253);p.position.set(0,.38,-.04),this.headGroup.add(p);const x=this.box(.1,.24,.18,8943462);x.position.set(-.34,.1,0),this.headGroup.add(x);const g=x.clone();g.position.x=.34,this.headGroup.add(g),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const M=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[f,u]of M){const E=new qt,v=this.box(.28,.52,.28,8943462);v.position.y=-.26;const b=this.box(.28,.14,.3,3355443);b.position.y=-.52-.07,E.add(v,b),E.position.set(f,0,u),this.group.add(E),this.legs.push(E)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const s=this.box(.12,.14,.08,2775578);s.position.set(-.2,.1,.46),this.headGroup.add(s);const a=s.clone();a.position.x=.2,this.headGroup.add(a);const r=this.box(.12,.12,.08,2775578);r.position.set(-.2,-.15,.46),this.headGroup.add(r);const c=r.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,d]of l){const p=new qt,x=this.box(.28,.58,.28,4885034);x.position.y=-.29,p.add(x),p.position.set(h,0,d),this.group.add(p),this.legs.push(p)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const s=i.clone();s.position.x=.1,this.headGroup.add(s);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const r=a.clone();r.position.x=.1,this.headGroup.add(r),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new qt,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const d=this.box(.12,.45,.12,13421772);d.position.y=-.55-.225,l.add(h,d),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new qt,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const d=this.box(.13,.5,.13,13421772);d.position.y=-.55-.25,l.add(h,d),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const s=this.box(.08*1.3,.08*1.3,.05*1.3,17663);s.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=s.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(s);const r=s.clone();r.position.x=.1*1.3,this.headGroup.add(r);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new qt,p=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);p.position.y=-.25*1.3;const x=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(x.position.y=-.55*1.3-.225*1.3,d.add(p,x),h===1){const g=this.box(.10400000000000001,.52,.195,8421504);g.position.set(.12*1.3,-.55*1.3,0),d.add(g)}d.position.set(h*.38*1.3,.2*1.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new qt,p=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);p.position.y=-.275*1.3;const x=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);x.position.y=-.55*1.3-.25*1.3,d.add(p,x),d.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(d),this.legs.push(d)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const s=this.box(.1,.1,.05,2236962);s.position.set(-.15,.1,.32),this.headGroup.add(s);const a=s.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,5913130);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new Wt(new So(.3,.5),new xe({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[d,p]of h){const x=new qt,g=this.box(.2,.7,.2,13149294);g.position.y=-.35,x.add(g),x.position.set(d,.1,p),this.group.add(x),this.legs.push(x)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const s=this.box(.62,.95,.42,4885050);s.position.y=.22,this.group.add(s);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new qt,p=this.box(.26,.5,.26,16764057);p.position.y=-.25;const x=this.box(.24,.45,.24,16764057);x.position.y=-.55-.225,d.add(p,x),d.position.set(h*.4,.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new qt,p=this.box(.26,.5,.26,8015658);p.position.y=-.25;const x=this.box(.26,.45,.26,8015658);x.position.y=-.55-.225,d.add(p,x),d.position.set(h*.15,-.5,0),this.group.add(d),this.legs.push(d)}}buildEnderDragon(){const s=this.box(2,1,4,1114146);s.scale.set(1.5,1.5,1.5),s.position.set(0,.6*1.5,0),this.group.add(s);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const r=this.box(.18,.18,.1,16729156);r.position.set(-.3,.15,.65);const c=new xe({color:16729156,emissive:16729156,emissiveIntensity:.8});r.material=c,this.headGroup.add(r);const l=r.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const d=this.box(3,.2,2,2228275);d.scale.set(1.5,1.5,1.5),d.position.set(h*2*1.5,.6*1.5,0),this.group.add(d)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const s=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[r,c,l]of s){const h=new Wt(new gn(.06,8,8),new xe({color:16724787}));h.position.set(r,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let r=0;r<8;r++){const[c,l,h]=a[r],d=new qt,p=this.box(.1,.08,.6,3355443);p.position.set(0,0,.3),d.add(p),d.position.set(c,l,h),d.rotation.z=(r<4?-1:1)*Math.PI/4,this.group.add(d),this.legs.push(d)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.5,.5,.5,8947848);this.headGroup.add(s);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const r=a.clone();r.position.x=.15,this.headGroup.add(a,r);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const d=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[x,g]of d){const M=new qt,f=this.box(.18,.5,.18,8947848);f.position.y=-.25,M.add(f),M.position.set(x,0,g),this.group.add(M),this.legs.push(M)}const p=this.box(.1,.08,.7,8947848);p.position.set(0,.2,-.8),this.group.add(p)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const s=this.box(.4,.4,.35,14518323);this.headGroup.add(s);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const r=a.clone();r.position.x=.12,this.headGroup.add(a,r);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const d=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[x,g]of d){const M=new qt,f=this.box(.12,.38,.12,14518323);f.position.y=-.19,M.add(f),M.position.set(x,0,g),this.group.add(M),this.legs.push(M)}const p=this.box(.08,.06,.6,14518323);p.position.set(0,.1,-.6),this.group.add(p)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const s=this.box(2,.1,.8,1717060);s.position.set(-1,-.05,0),this.group.add(s);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const r=new Wt(new gn(.1,8,8),new xe({color:4521796,emissive:4521796}));r.position.set(-.3,.1,.8),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const s=new Wt(new we(1.2,1.2,1.2),new xe({color:4500036,transparent:!0,opacity:.8}));s.position.y=0,this.bodyMeshes.push(s),this.group.add(s);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const r=new Wt(new gn(.15,8,8),new xe({color:16777215}));r.position.set(-.25,.25,.5),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new Wt(new gn(.06,8,8),new xe({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildIronGolem(){const s=this.box(1.4,1.6,.9,13421772);s.position.set(0,.8,0),this.group.add(s);const a=this.box(.3,.3,.05,4885050);a.position.set(-.3,1,.46),this.group.add(a);const r=this.box(.6,.55,.55,13421772);this.headGroup.add(r);const c=this.box(.15,.3,.15,10066329);c.position.set(0,-.05,.35),this.headGroup.add(c);const l=this.box(.12,.08,.05,2236962);l.position.set(-.15,.1,.28),this.headGroup.add(l);const h=this.box(.12,.08,.05,2236962);h.position.set(.15,.1,.28),this.headGroup.add(h),this.headGroup.position.set(0,1.85,0),this.group.add(this.headGroup);for(const d of[-1,1]){const p=new qt,x=this.box(.4,1,.4,13421772);x.position.y=-.5;const g=this.box(.35,.8,.35,10066329);g.position.y=-1.2,p.add(x,g),p.position.set(d*.9,1.2,0),this.group.add(p),this.arms.push(p)}for(const d of[-1,1]){const p=new qt,x=this.box(.4,.7,.4,13421772);x.position.y=-.35,p.add(x),p.position.set(d*.35,0,0),this.group.add(p),this.legs.push(p)}}buildSnowGolem(){const s=this.box(1,1,1,16777215);s.position.set(0,0,0),this.group.add(s);const a=this.box(.8,.8,.8,16777215);a.position.set(0,.8,0),this.group.add(a);for(const d of[.65,.85,1.05]){const p=this.box(.1,.1,.1,2236962);p.position.set(0,d,.41),this.group.add(p)}const r=this.box(.6,.6,.6,14518272);this.headGroup.add(r);const c=this.box(.12,.12,.05,2236962);c.position.set(-.15,.08,.31),this.headGroup.add(c);const l=this.box(.12,.12,.05,2236962);l.position.set(.15,.08,.31),this.headGroup.add(l);const h=this.box(.1,.1,.25,16737792);h.position.set(0,-.02,.42),this.headGroup.add(h),this.headGroup.position.set(0,1.5,0),this.group.add(this.headGroup)}buildMagmaCube(){const i=new Wt(new we(1.2,1.2,1.2),new xe({color:13382400,transparent:!0,opacity:.85}));this.bodyMeshes.push(i),this.group.add(i);const s=this.box(.7,.7,.7,16737792);this.group.add(s);for(const a of[-.25,.25]){const r=new Wt(new gn(.12,8,8),new xe({color:16776960}));r.position.set(a,.25,.5),this.bodyMeshes.push(r),this.group.add(r)}}buildSilverfish(){const n=this.box(.2,.15,.25,8947848);n.position.set(0,.08,.2),this.group.add(n);const i=this.box(.25,.18,.3,8947848);i.position.set(0,.09,-.05),this.group.add(i);const s=this.box(.18,.12,.2,5592405);s.position.set(0,.06,-.3),this.group.add(s);for(const a of[-.06,.06]){const r=this.box(.02,.02,.15,5592405);r.position.set(a,.18,.4),r.rotation.x=-.4,this.group.add(r)}}buildElderGuardian(){const i=this.box(1.8,1.4,1.8,8952234);i.position.set(0,.7,0),this.group.add(i);const s=new Wt(new gn(.3,8,8),new xe({color:16729088}));s.position.set(0,.9,.9),this.bodyMeshes.push(s),this.group.add(s);for(const r of[[0,1.6,0],[.9,.7,0],[-.9,.7,0],[0,.7,.9],[0,.7,-.9]]){const c=this.box(.15,.4,.15,6715272);c.position.set(r[0],r[1],r[2]),this.group.add(c)}const a=this.box(.3,.3,.8,6715272);a.position.set(0,.5,-1.2),this.group.add(a)}buildWitch(){const s=this.box(.6,.9,.4,5583752);s.position.set(0,.45,0),this.group.add(s);const a=this.box(.5,.5,.5,14531481);this.headGroup.add(a);const r=this.box(.12,.15,.12,12290150);r.position.set(0,-.05,.3),this.headGroup.add(r);for(const d of[-.12,.12]){const p=this.box(.08,.06,.05,6684774);p.position.set(d,.08,.26),this.headGroup.add(p)}const c=this.box(.7,.06,.7,2236962);c.position.set(0,.28,0),this.headGroup.add(c);const l=this.box(.4,.5,.4,2236962);l.position.set(0,.55,0),this.headGroup.add(l);const h=this.box(.2,.3,.2,3346790);h.position.set(.05,.85,.05),h.rotation.z=.3,this.headGroup.add(h),this.headGroup.position.set(0,1.15,0),this.group.add(this.headGroup);for(const d of[-1,1]){const p=new qt,x=this.box(.2,.6,.2,5583752);x.position.y=-.3,p.add(x),p.position.set(d*.4,.8,0),this.group.add(p),this.arms.push(p)}for(const d of[-1,1]){const p=new qt,x=this.box(.2,.5,.2,5583752);x.position.y=-.25,p.add(x),p.position.set(d*.15,0,0),this.group.add(p),this.legs.push(p)}}buildEvoker(){const i=this.box(.6,.9,.4,7829367);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.62,.1,.42,3355443);s.position.set(0,0,0),this.group.add(s);const a=this.box(.5,.5,.5,14531481);this.headGroup.add(a);for(const c of[-.12,.12]){const l=this.box(.08,.06,.05,2236962);l.position.set(c,.08,.26),this.headGroup.add(l)}const r=this.box(.35,.05,.05,3355443);r.position.set(0,.15,.26),this.headGroup.add(r),this.headGroup.position.set(0,1.15,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new qt,h=this.box(.2,.6,.2,7829367);h.position.y=-.3,l.add(h),l.position.set(c*.4,.8,0),l.rotation.x=-.5,this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new qt,h=this.box(.2,.5,.2,3355443);h.position.y=-.25,l.add(h),l.position.set(c*.15,0,0),this.group.add(l),this.legs.push(l)}}buildZombieVillager(){const i=this.box(.6,1,.4,3824170);i.position.y=.2,this.group.add(i);const s=this.box(.62,.95,.42,2771498);s.position.y=.22,this.group.add(s);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c);const l=this.box(.1,.12,.08,3824170);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new qt,p=this.box(.26,.5,.26,2771498);p.position.y=-.25;const x=this.box(.24,.45,.24,7846775);x.position.y=-.55-.225,d.add(p,x),d.position.set(h*.4,.3,0),d.rotation.x=-Math.PI/2.2,this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new qt,p=this.box(.26,.5,.26,3824170);p.position.y=-.25,d.add(p),d.position.set(h*.15,-.5,0),this.group.add(d),this.legs.push(d)}}buildWanderingTrader(){const i=this.box(.6,1,.4,2245802);i.position.y=.2,this.group.add(i);const s=this.box(.62,.3,.42,14527027);s.position.y=-.1,this.group.add(s);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,13404228);l.position.set(0,-.05,.3),this.headGroup.add(l);const h=this.box(.7,.1,.7,2245802);h.position.y=.3,this.headGroup.add(h),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const d of[-1,1]){const p=new qt,x=this.box(.26,.55,.26,2245802);x.position.y=-.275,p.add(x),p.position.set(d*.4,.3,0),this.group.add(p),this.arms.push(p)}for(const d of[-1,1]){const p=new qt,x=this.box(.26,.5,.26,2245802);x.position.y=-.25,p.add(x),p.position.set(d*.15,-.5,0),this.group.add(p),this.legs.push(p)}}buildGiant(){const s=this.box(.6,.8,.35,2771498);s.position.y=-.05,this.group.add(s);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const l of[-1,1]){const h=new qt,d=this.box(.26,.55,.26,2771498);d.position.y=-.275;const p=this.box(.24,.45,.24,7846775);p.position.y=-.55-.225,h.add(d,p),h.position.set(l*.43,.2,0),h.rotation.x=-Math.PI/2.2,this.group.add(h),this.arms.push(h)}for(const l of[-1,1]){const h=new qt,d=this.box(.26,.6,.26,1715738);d.position.y=-.3;const p=this.box(.26,.24,.28,1708040);p.position.y=-.6-.12,h.add(d,p),h.position.set(l*.175,-.45,0),this.group.add(h),this.legs.push(h)}this.group.scale.setScalar(6)}buildZombieHorse(){const n=this.box(.9,.8,1.6,6982234);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,6982234);this.headGroup.add(i);const s=this.box(.1,.1,.05,16720384);s.position.set(-.15,.1,.32),this.headGroup.add(s);const a=s.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,3820074);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new Wt(new So(.3,.5),new xe({color:3820074}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[d,p]of h){const x=new qt,g=this.box(.2,.7,.2,6982234);g.position.y=-.35,x.add(g),x.position.set(d,.1,p),this.group.add(x),this.legs.push(x)}}buildSkeletonHorse(){const i=this.box(.8,.6,1.5,13421755);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.35,.45,.55,13421755);this.headGroup.add(s);const a=this.box(.1,.1,.05,1118481);a.position.set(-.12,.1,.3),this.headGroup.add(a);const r=a.clone();r.position.x=.12,this.headGroup.add(r);const c=this.box(.1,.2,.06,8947831);c.position.set(-.15,.3,.08),this.headGroup.add(c);const l=c.clone();l.position.x=.15,this.headGroup.add(l),this.headGroup.position.set(0,.55,.75),this.group.add(this.headGroup);const h=[[-.25,-.55],[.25,-.55],[-.25,.55],[.25,.55]];for(const[d,p]of h){const x=new qt,g=this.box(.15,.7,.15,13421755);g.position.y=-.35,x.add(g),x.position.set(d,.1,p),this.group.add(x),this.legs.push(x)}}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Xs(t),n=new Hr({map:e,transparent:!0,depthTest:!1}),i=new Nc(n);i.scale.set(1.2,.18,1);const s={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5,magmacube:1.5,silverfish:.6,elderguardian:2.2,witch:2.2,evoker:2.2,zombievillager:1.8,wanderingtrader:1.8,giant:10,zombiehorse:2.2,skeletonhorse:2.2};return i.position.y=s[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,s=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=s/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const r=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=r*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(r)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=r*.7,this.legs[1].rotation.x=-r*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(r)*.3);this.headGroup.position.y=.72+Math.abs(r)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.05}else if(this.type==="slime"||this.type==="magmacube"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}else if(this.type==="witch"||this.type==="evoker"||this.type==="zombievillager"||this.type==="wanderingtrader"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.x=-r*c*.5}else if(this.type==="giant"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="zombiehorse"||this.type==="skeletonhorse"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,s=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:nc.creeper;for(const a of this.bodyMeshes)a.material.color.set(s)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=nc[this.type]??16777215,s=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(s);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,s=Math.min(i/e,1);this.group.rotation.z=s*(Math.PI/2),this.group.position.y=this.targetPos.y-s*.5;const a=1-s*.3;if(this.group.scale.setScalar(a),i%200<100)for(const r of this.bodyMeshes)r.material.color.set(16720418);else{const r=nc[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(r)}s<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function en(o,t){return o+Math.random()*(t-o)}function U_(){return Math.random().toString(36).slice(2,10)}const hd=8,B_=30,dd=60,k_=-20,z_=new we(.1,.1,.4),F_=new xe({color:16768256}),yr=new B,fn=class fn{constructor(t,e,n,i){D(this,"mobs",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"singleplayer");D(this,"arrows",[]);D(this,"golemSnowballs",[]);D(this,"dayTime",.5);D(this,"mountedMobId",null);D(this,"onBurnParticle");D(this,"onZombieVillagerCured");D(this,"attackCooldown",0);D(this,"onHuskHunger");D(this,"onStrayArrow");D(this,"onGhastFireball");D(this,"onPandaSneeze");D(this,"onDolphinNearby");D(this,"onWardenBlind");D(this,"onWitchPotion");this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,s){const a=s??U_(),r=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:t==="warden"?500:t==="allay"?20:t==="frog"?10:t==="strider"?20:t==="axolotl"?14:t==="pillager"?24:t==="drowned"||t==="husk"||t==="stray"?20:t==="ravager"||t==="irongolem"?100:t==="snowgolem"?20:t==="bat"?6:t==="enderman"?40:t==="blaze"?20:t==="ghast"?10:t==="magmacube"?30:t==="silverfish"?8:t==="elderguardian"?80:t==="witch"?26:t==="evoker"||t==="vindicator"?24:t==="vex"?14:t==="zoglin"||t==="hoglin"?40:t==="piglin"?16:t==="zombievillager"||t==="wanderingtrader"?20:t==="giant"?100:t==="zombiehorse"||t==="skeletonhorse"?15:t==="fox"?10:t==="panda"?20:t==="ocelot"?10:t==="mooshroom"?16:t==="llama"?22:t==="bee"?10:t==="polarbear"?30:t==="dolphin"||t==="squid"?10:t==="turtle"?30:10,c={id:a,type:t,x:e,y:n,z:i,rotY:en(0,Math.PI*2),health:r,maxHealth:r,alive:!0,state:"idle"},l=new ld(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=hd)return;const n=en(0,Math.PI*2),i=en(12,B_),s=t+Math.cos(n)*i,a=e+Math.sin(n)*i,r=this.dayTime<.25||this.dayTime>.73;let c,l;const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(s),Math.round(a)):20,d=Math.round(h)+1,p=this.world.getBlockType?this.world.getBlockType(Math.round(s),d+1,Math.round(a)):void 0,x=h<15||p!==void 0&&p!==0;if(r&&Math.random()<.15)c=20+en(0,10),l="phantom";else if(c=d+.5,x&&Math.random()<.08)l="slime";else if(x){const g=Math.random();l=g<.3?"zombie":g<.55?"skeleton":g<.75?"spider":g<.9?"creeper":"witherskeleton"}else if(r){const g=Math.random();l=g<.25?"zombie":g<.45?"skeleton":g<.6?"creeper":g<.75?"spider":g<.85?"witherskeleton":g<.9?"pig":g<.95?"cow":"sheep"}else{const g=Math.random();l=g<.25?"pig":g<.45?"chicken":g<.6?"cow":g<.75?"sheep":g<.85?"horse":g<.92?"wolf":"cat"}this.spawnMob(l,s,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const s=new ld(this.scene,n);this.mobs.set(n.id,{data:n,mob:s,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e,n=0){if(this.attackCooldown>0)return null;const i=[],s=new Map;for(const[g,M]of this.mobs)M.mob.alive&&M.mob.group.traverse(f=>{f.isMesh&&(i.push(f),s.set(f,g))});const a=t.intersectObjects(i);if(!a.length)return null;const r=s.get(a[0].object);if(!r)return null;const c=this.mobs.get(r);let l=5;e!=null&&e.sharpness&&(l+=2*e.sharpness),n>0&&(l+=n),c.mob.health-=l,c.mob.showDamage(c.mob.health),c.mob.health<=0&&c.mob.die(),this.attackCooldown=.4;const h=t.ray.origin,d=c.data.x-h.x,p=c.data.z-h.z,x=Math.sqrt(d*d+p*p)||1;return c.data.x+=d/x*2.5,c.data.z+=p/x*2.5,{mobId:r,damage:l}}update(t){var n,i;this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[s,a]of this.mobs){if(a.hitCooldown>0&&(a.hitCooldown=Math.max(0,a.hitCooldown-t)),a.mob.update(t),!a.mob.alive){if(a.mob._deathTimer===void 0&&(a.mob._deathTimer=1.5),a.mob._deathTimer-=t,a.mob._deathTimer<=0){if(a.data.type==="slime"&&!a.data.isMiniSlime)for(let l=0;l<2;l++){const h=(Math.random()-.5)*2,d=(Math.random()-.5)*2,p={id:`slime_mini_${Date.now()}_${l}`,type:"slime",x:a.data.x+h,y:a.data.y,z:a.data.z+d,rotY:Math.random()*Math.PI*2,state:"idle",health:4,maxHealth:4,isMiniSlime:!0};this.addMob(p,this.scene)}a.mob.dispose(this.scene),this.mobs.delete(s)}continue}if(this.singleplayer&&fn.UNDEAD_TYPES.has(a.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(a.data.x),Math.round(a.data.z)):20;if(a.data.y>=h-2){if(a.mob.health-=4*t,a.mob.showDamage(a.mob.health),!a.mob.alive){a.mob.die();continue}Math.random()<t*3&&((n=this.onBurnParticle)==null||n.call(this,a.data.x,a.data.y+1,a.data.z))}}if(this.singleplayer){const l=a.mob.targetPos.x-e.x,h=a.mob.targetPos.z-e.z;l*l+h*h<=32*32&&this.runAI(a,t,e)}const r=a.data.x-e.x,c=a.data.z-e.z;r*r+c*c>dd*dd&&(a.mob.dispose(this.scene),this.mobs.delete(s))}for(let s=this.arrows.length-1;s>=0;s--){const a=this.arrows[s];a.life-=t,a.mesh.position.addScaledVector(a.vel,t);const r=a.mesh.position.x-e.x,c=a.mesh.position.y-e.y,l=a.mesh.position.z-e.z;r*r+c*c+l*l<.64?(this.cb.onPlayerDamage(1),a.shooterType==="stray"&&((i=this.onStrayArrow)==null||i.call(this)),a.shooterType==="pillager"&&this.cb.onPlayerDamage(1),(a.shooterType==="blaze"||a.shooterType==="ghast")&&this.cb.onPlayerDamage(2),a.shooterType==="evoker"&&this.cb.onPlayerDamage(3),this.scene.remove(a.mesh),this.arrows.splice(s,1)):a.life<=0&&(this.scene.remove(a.mesh),this.arrows.splice(s,1))}for(let s=this.golemSnowballs.length-1;s>=0;s--){const a=this.golemSnowballs[s];a.life-=t,a.vel.y-=10*t,a.mesh.position.addScaledVector(a.vel,t);let r=!1;for(const[c,l]of this.mobs){if(!l.mob.alive||!fn.HOSTILE_TYPES.has(l.data.type))continue;const h=a.mesh.position.x-l.data.x,d=a.mesh.position.y-l.data.y,p=a.mesh.position.z-l.data.z;if(h*h+d*d+p*p<1.5){l.mob.health-=2,l.mob.showDamage(l.mob.health),l.mob.health<=0&&l.mob.die(),r=!0;break}}(r||a.life<=0)&&(this.scene.remove(a.mesh),this.golemSnowballs.splice(s,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<hd&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,s){const a=t.data,r=e-a.x,c=n-a.z,l=Math.atan2(r,c);a.rotY=l;const h=Math.sin(l)*.8,d=Math.cos(l)*.8,p=Math.round(a.x+h),x=Math.round(a.z+d),g=Math.round(a.y),M=this.world.getBlockType(p,g,x),f=this.world.getBlockType(p,g+1,x);if(M&&M!==7&&M!==0){if(!f||f===7||f===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0;{const u=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=u,a.x+=Math.sin(u)*i*.5*s,a.z+=Math.cos(u)*i*.5*s,!1}}return a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0}runAI(t,e,n){var c,l,h;const i=t.data;t.timer-=e;const s=n.x-i.x,a=n.z-i.z,r=s*s+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=k_*e;const d=Math.round(i.x),p=Math.round(i.z);(d!==t._surfCacheX||p!==t._surfCacheZ)&&(t._surfCacheX=d,t._surfCacheZ=p,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(d,p)+.5:0);const x=t._surfCacheY;if(i.y<=x&&(i.y=x,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const g=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,r,s,a,g)}else if(i.type==="horse")this.horseAI(t,e,r,s,a,n);else if(i.type==="villager")this.villagerAI(t,e,n);else if(i.type==="zombie")this.zombieAI(t,e,r,s,a,n);else if(i.type==="creeper")this.creeperAI(t,e,r,n);else if(i.type==="skeleton")this.skeletonAI(t,e,r,s,a,n);else if(i.type==="witherskeleton")this.witherskeletonAI(t,e,r,s,a,n);else if(i.type==="spider")this.spiderAI(t,e,r,s,a,n);else if(i.type==="wolf")this.wolfAI(t,e,r,s,a,n);else if(i.type==="cat")this.catAI(t,e,r,s,a,n);else if(i.type==="slime")this.slimeAI(t,e,r,s,a,n);else if(i.type==="pillager")this.pillagerAI(t,e,r,s,a,n);else if(i.type==="drowned")this.zombieAI(t,e,r,s,a,n);else if(i.type==="husk")this.huskAI(t,e,r,s,a,n);else if(i.type==="stray")this.skeletonAI(t,e,r,s,a,n);else if(i.type==="ravager")this.ravagerAI(t,e,r,s,a,n);else if(i.type==="bat")t.data.y+=Math.sin(Date.now()*.001+r)*e*2,r<6*6&&(i.rotY=Math.atan2(s,a)+Math.PI,i.x+=Math.sin(i.rotY)*4*e,i.z+=Math.cos(i.rotY)*4*e);else if(i.type==="enderman")this.endermanAI(t,e,r,s,a,n);else if(i.type==="blaze")this.blazeAI(t,e,r,s,a,n);else if(i.type==="ghast")this.ghastAI(t,e,r,s,a,n);else if(i.type==="warden")this.wardenAI(t,e,r,s,a,n);else if(i.type==="allay"||i.type==="axolotl")r>9&&(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*2.5*e,i.z+=Math.cos(i.rotY)*2.5*e);else if(i.type==="frog")this.animalAI(t,e,r,s,a,2.5);else if(i.type==="strider")this.animalAI(t,e,r,s,a,3.5);else if(i.type==="irongolem")this.ironGolemAI(t,e,r,s,a,n);else if(i.type==="snowgolem")this.snowGolemAI(t,e,r,s,a,n);else if(i.type==="magmacube")this.magmaCubeAI(t,e,r,s,a,n);else if(i.type==="silverfish")this.silverfishAI(t,e,r,s,a,n);else if(i.type==="elderguardian")this.elderGuardianAI(t,e,r,s,a,n);else if(i.type==="witch")this.witchAI(t,e,r,s,a,n);else if(i.type==="evoker")this.evokerAI(t,e,r,s,a,n);else if(i.type==="vindicator")this.zombieAI(t,e,r,s,a,n),r<1.8*1.8&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(7),t.hitCooldown=1);else if(i.type==="vex")r<20*20&&(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*6*e,i.y+=(n.y-i.y)*e*2,i.z+=Math.cos(i.rotY)*6*e,r<1.5*1.5&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(5),t.hitCooldown=1.5));else if(i.type==="zoglin"||i.type==="hoglin"){const g=i.type==="zoglin"?4.5:3.5;r<16*16?(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*g*e,i.z+=Math.cos(i.rotY)*g*e,t.aggro=!0,r<2*2&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(6),t.hitCooldown=2)):(t.aggro=!1,this.animalAI(t,e,r,s,a,2))}else if(i.type==="piglin")!(window.__piglinBarter??!1)&&r<12*12?(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e,t.aggro=!0,r<2*2&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(5),t.hitCooldown=1.5)):(t.aggro=!1,this.animalAI(t,e,r,s,a,1.5));else if(i.type==="zombievillager")r<144?(i.state="chasing",t.aggro=!0):r>400&&t.timer<=0&&(i.state="idle",t.aggro=!1),i.state==="chasing"?(this.moveToward(t,n.x,n.z,2,e),r<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(3),t.hitCooldown=2.5)):this.animalAI(t,e,r,s,a,1),t._cureTimer>0&&(t._cureTimer-=e,t._cureTimer<=0&&((c=this.onZombieVillagerCured)==null||c.call(this,i.x,i.y,i.z),t.mob.die()));else if(i.type==="wanderingtrader"){let g=!1;for(const M of this.mobs.values())if(fn.HOSTILE_TYPES.has(M.data.type)&&M.data.type!=="wanderingtrader"){const f=M.data.x-i.x,u=M.data.z-i.z;if(f*f+u*u<100){g=!0;break}}if(g&&(i.state="fleeing",t.timer=3),i.state==="fleeing"){const M=i.rotY+Math.PI;i.x+=Math.sin(M)*3*e,i.z+=Math.cos(M)*3*e,t.timer<=0&&(i.state="idle")}else r<100&&(i.rotY=Math.atan2(s,a)),i.state==="idle"&&t.timer<=0?(i.state=Math.random()<.5?"walking":"idle",i.rotY=Math.random()*Math.PI*2,t.timer=en(2,5)):i.state==="walking"&&(i.x+=Math.sin(i.rotY)*1.5*e,i.z+=Math.cos(i.rotY)*1.5*e,t.timer<=0&&(i.state="idle",t.timer=en(2,5)))}else i.type==="giant"?(r<400?(i.state="chasing",t.aggro=!0):r>900&&t.timer<=0&&(i.state="idle",t.aggro=!1),i.state==="chasing"?(this.moveToward(t,n.x,n.z,1.5,e),r<25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(25),t.hitCooldown=3)):this.animalAI(t,e,r,s,a,1)):i.type==="zombiehorse"||i.type==="skeletonhorse"?this.horseAI(t,e,r,s,a,n):i.type==="fox"?r<10*10?(i.rotY=Math.atan2(s,a)+Math.PI,i.x+=Math.sin(i.rotY)*6*e,i.z+=Math.cos(i.rotY)*6*e,i.state="fleeing"):this.animalAI(t,e,r,s,a,2.5):i.type==="panda"?(t.timer-=e,t.timer<=0&&(t.timer=4+Math.random()*6,Math.random()<.15&&((l=this.onPandaSneeze)==null||l.call(this,i.x,i.y+1,i.z)),i.rotY+=(Math.random()-.5)*Math.PI),i.state!=="fleeing"&&(i.x+=Math.sin(i.rotY)*.8*e,i.z+=Math.cos(i.rotY)*.8*e)):i.type==="ocelot"?r<12*12?(i.rotY=Math.atan2(s,a)+Math.PI,i.x+=Math.sin(i.rotY)*5*e,i.z+=Math.cos(i.rotY)*5*e):this.animalAI(t,e,r,s,a,1.5):i.type==="mooshroom"?this.animalAI(t,e,r,s,a,1.8):i.type==="llama"?(r<6*6&&(t.hitCooldown??0)<=0&&(this.shootArrow(i.x,i.y+1,i.z,n,"llama"),t.hitCooldown=3),this.animalAI(t,e,r,s,a,2.5)):i.type==="bee"?t.aggro?(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*4*e,i.z+=Math.cos(i.rotY)*4*e,i.y+=Math.sin(Date.now()*.003)*e*1.5,r<1.5*1.5&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2,t.aggro=!1)):(i.y+=Math.sin(Date.now()*.002+r)*e*.5,this.animalAI(t,e,r,s,a,1.5)):i.type==="polarbear"?t.aggro||r<3*3?(r<3*3&&(t.aggro=!0),i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*3.5*e,i.z+=Math.cos(i.rotY)*3.5*e,r<2*2&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(6),t.hitCooldown=1.5)):(t.aggro=!1,this.animalAI(t,e,r,s,a,2.5)):i.type==="dolphin"?(i.y+=Math.sin(Date.now()*.002)*e,r<8*8?(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e,(h=this.onDolphinNearby)==null||h.call(this)):this.animalAI(t,e,r,s,a,3)):i.type==="squid"?(i.y+=Math.sin(Date.now()*.001+i.x)*e*.3,this.animalAI(t,e,r,s,a,1)):i.type==="turtle"&&this.animalAI(t,e,r,s,a,.8)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,s,a){const r=t.data;if(n<25&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const c=r.rotY+Math.PI;r.x+=Math.sin(c)*a*e,r.z+=Math.cos(c)*a*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)):(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&(r.state="idle",t.timer=en(2,5)))}horseAI(t,e,n,i,s,a){const r=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const d=h.data.x-r.x,p=h.data.z-r.z;if(d*d+p*p<225){l=!0;break}}if(l&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){let h=0,d=0;for(const p of this.mobs.values())if((p.data.type==="zombie"||p.data.type==="skeleton")&&p.data.id!==r.id){h=p.data.x,d=p.data.z;break}(h!==0||d!==0)&&(r.rotY=Math.atan2(r.x-h,r.z-d)),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)):(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle",t.timer=en(2,5)))}zombieAI(t,e,n,i,s,a){const r=t.data,c=2.8;n<144?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,s,1.5)}creeperAI(t,e,n,i){const s=t.data,a=2.5;if(n<100?s.state!=="fusing"&&(s.state="fusing",t.timer=fn.CREEPER_FUSE_TIME):s.state==="fusing"&&(s.state="idle",t.timer=en(1.5,4),t.mob.setCreeperFuse(0)),s.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const r=1-t.timer/fn.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,r))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(s.state=Math.random()<.5?"walking":"idle",s.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)),s.state==="walking"&&(s.x+=Math.sin(s.rotY)*a*e,s.z+=Math.cos(s.rotY)*a*e)}explode(t,e){const n=t.data,i=5,s=5,a=e.x-n.x,r=e.y-n.y,c=e.z-n.z;a*a+r*r+c*c<s*s&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,s,a){const r=t.data,c=1.8,l=400,h=16,d=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(r.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a,r.type),t.shootTimer=d),n<h){const p=r.rotY+Math.PI;r.x+=Math.sin(p)*c*e,r.z+=Math.cos(p)*c*e}else r.rotY=Math.atan2(i,s);else n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1);r.state!=="attacking"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e))}witherskeletonAI(t,e,n,i,s,a){var d,p;const r=t.data,c=4,l=4,h=400;t.shootTimer=(t.shootTimer??0)-e,n<h?(r.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(p=(d=this.cb).onWitherEffect)==null||p.call(d))):n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state!=="chasing"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.5*e,r.z+=Math.cos(r.rotY)*c*.5*e))}shootArrow(t,e,n,i,s){const a=new Wt(z_,F_);a.position.set(t,e,n),yr.set(i.x-t,i.y-e,i.z-n).normalize();const c=yr.clone().multiplyScalar(15);this.scene.add(a),this.arrows.push({mesh:a,vel:c,life:3,shooterType:s})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const s=15,a=i.x+Math.sin(t.timer)*s,r=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*s,l=3;n.x+=(a-n.x)*l*e,n.y+=(r-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,r=i.z-n.z;a*a+r*r<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,s,a){const r=t.data,c=3.5,l=225,h=9,d=3;t.jumpTimer||(t.jumpTimer=0),n<l?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=d),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=en(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.6*e,r.z+=Math.cos(r.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,s=n.x-i.x,a=n.z-i.z;s*s+a*a<100&&(i.rotY=Math.atan2(s,a))}wolfAI(t,e,n,i,s,a){const r=t.data,c=4;if(r.state!=="tamed")if(n<4&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const l=r.rotY+Math.PI;r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"&&(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e);else{let l=!1;for(const[h,d]of this.mobs){if(!d.mob.alive||!fn.HOSTILE_TYPES.has(d.data.type))continue;const p=d.data.x-r.x,x=d.data.z-r.z,g=p*p+x*x;if(g<64){r.rotY=Math.atan2(p,x),r.x+=Math.sin(r.rotY)*c*1.2*e,r.z+=Math.cos(r.rotY)*c*1.2*e,r.state="following",g<2.25&&(t.hitCooldown??0)<=0&&(d.mob.health-=4,d.mob.showDamage(d.mob.health),d.mob.health<=0&&d.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="sitting")}}ironGolemAI(t,e,n,i,s,a){const r=t.data,c=1.5;let l=!1;for(const[h,d]of this.mobs){if(!d.mob.alive||!fn.HOSTILE_TYPES.has(d.data.type))continue;const p=d.data.x-r.x,x=d.data.z-r.z,g=p*p+x*x;if(g<144){r.rotY=Math.atan2(p,x),this.moveToward(t,d.data.x,d.data.z,c*1.5,e),r.state="following",g<4&&(t.hitCooldown??0)<=0&&(d.mob.health-=15,d.mob.showDamage(d.mob.health),d.mob.health<=0&&d.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>36?(r.rotY=Math.atan2(i,s),this.moveToward(t,a.x,a.z,c,e),r.state="following"):r.state="idle")}snowGolemAI(t,e,n,i,s,a){const r=t.data,c=2;let l=!1;for(const[h,d]of this.mobs){if(!d.mob.alive||!fn.HOSTILE_TYPES.has(d.data.type))continue;const p=d.data.x-r.x,x=d.data.z-r.z,g=p*p+x*x;if(g<100){if(r.rotY=Math.atan2(p,x),g<16?(r.x-=Math.sin(r.rotY)*c*e,r.z-=Math.cos(r.rotY)*c*e):g>64&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e),r.state="following",(t.shootTimer??0)<=0){const M=new B(d.data.x,d.data.y+.5,d.data.z);this.shootGolemSnowball(r.x,r.y+1.2,r.z,M,h),t.shootTimer=1.5}l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="idle")}shootGolemSnowball(t,e,n,i,s){const a=new gn(.12,6,6),r=new xe({color:15658751}),c=new Wt(a,r);c.position.set(t,e,n);const h=new B(i.x-t,i.y-e,i.z-n).normalize().multiplyScalar(12);this.scene.add(c),this.golemSnowballs.push({mesh:c,vel:h,life:3,targetMobId:s})}catAI(t,e,n,i,s,a){const r=t.data,c=2.5;r.state!=="tamed"?r.state==="idle"?(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(r.state="sitting")),r.x+=Math.sin(r.rotY)*1*e,r.z+=Math.cos(r.rotY)*1*e):r.state==="sitting"&&t.timer<=0&&(r.state="idle"):n>64?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e):r.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,r=n.z-i.z,c=a*a+r*r;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const h of this.mobs.values())if(h.data.type==="cat"&&h.data.state==="tamed"){const d=h.data.x-i.x,p=h.data.z-i.z,x=h.data.y-i.y;if(d*d+p*p+x*x<100){l=!0;break}}if(l){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,r);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=en(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}pillagerAI(t,e,n,i,s,a){const r=t.data,c=2.5,l=20*20;n<l?(t.aggro=!0,n<5*5&&(r.rotY=Math.atan2(i,s)+Math.PI,r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e),t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a,"pillager"),t.shootTimer=1.2)):(t.aggro=!1,this.animalAI(t,e,n,i,s,1.5))}huskAI(t,e,n,i,s,a){var r;this.zombieAI(t,e,n,i,s,a),n<1.8*1.8&&(t.hitCooldown??0)<=0&&((r=this.onHuskHunger)==null||r.call(this))}ravagerAI(t,e,n,i,s,a){const r=t.data,c=4;n<30*30?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.aggro=!0,n<2.5*2.5&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(12),t.hitCooldown=2)):(t.aggro=!1,this.animalAI(t,e,n,i,s,2))}endermanAI(t,e,n,i,s,a){const r=t.data;n<16*16?(t.aggro=!0,r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*4.5*e,r.z+=Math.cos(r.rotY)*4.5*e,n<2*2&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(7),t.hitCooldown=1.5,r.x=a.x+(Math.random()-.5)*20,r.z=a.z+(Math.random()-.5)*20)):(t.aggro=!1,this.animalAI(t,e,n,i,s,2))}blazeAI(t,e,n,i,s,a){const r=t.data;r.y=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(r.x),Math.round(r.z))+6:r.y,n<20*20?(t.aggro=!0,t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0&&(this.shootArrow(r.x,r.y,r.z,a,"blaze"),t.shootTimer=2.5)):t.aggro=!1}ghastAI(t,e,n,i,s,a){var c;const r=t.data;r.y=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(r.x),Math.round(r.z))+20:r.y,n<30*30?(t.aggro=!0,t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0&&(this.shootArrow(r.x,r.y,r.z,a,"ghast"),t.shootTimer=4,(c=this.onGhastFireball)==null||c.call(this,r.x,r.y,r.z)),r.rotY=Math.atan2(i,s)+Math.PI,r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e):t.aggro=!1}wardenAI(t,e,n,i,s,a){var l;const r=t.data,c=3.5;n<20*20?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.aggro=!0,n<3*3&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(15),t.hitCooldown=3,(l=this.onWardenBlind)==null||l.call(this))):(t.aggro=!1,this.animalAI(t,e,n,i,s,1.5))}magmaCubeAI(t,e,n,i,s,a){const r=t.data,c=2.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,s);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(6),t.hitCooldown=1.5)}silverfishAI(t,e,n,i,s,a){const r=t.data,c=3.5;if(n<256){t.aggro=!0;const h=Math.atan2(i,s)+Math.sin(Date.now()*.005+t.timer*10)*.6;r.rotY=h,r.x+=Math.sin(h)*c*e,r.z+=Math.cos(h)*c*e,r.state="chasing",n<1.5*1.5&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=.8)}else t.aggro=!1,this.animalAI(t,e,n,i,s,2)}elderGuardianAI(t,e,n,i,s,a){const r=t.data,c=.5;n<20*20?(t.aggro=!0,r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0&&(n<15*15&&this.cb.onPlayerDamage(8),t.shootTimer=2),r.state="attacking"):(t.aggro=!1,r.x+=Math.sin(r.rotY)*.3*e,r.z+=Math.cos(r.rotY)*.3*e,t.timer<=0&&(r.rotY=Math.random()*Math.PI*2,t.timer=en(3,6)))}witchAI(t,e,n,i,s,a){var l,h;const r=t.data,c=1.8;n<16*16?(t.aggro=!0,r.rotY=Math.atan2(i,s),n<64?(r.x-=Math.sin(r.rotY)*c*e,r.z-=Math.cos(r.rotY)*c*e):n>144&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e),t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0&&(Math.random()<.6?(this.cb.onPlayerDamage(5),(l=this.onWitchPotion)==null||l.call(this,"damage")):(h=this.onWitchPotion)==null||h.call(this,"hunger"),t.shootTimer=2),r.state="attacking"):(t.aggro=!1,this.animalAI(t,e,n,i,s,1.2))}evokerAI(t,e,n,i,s,a){const r=t.data,c=1.5;if(n<20*20){if(t.aggro=!0,r.rotY=Math.atan2(i,s),n<100&&(r.x-=Math.sin(r.rotY)*c*e,r.z-=Math.cos(r.rotY)*c*e),t.shootTimer=(t.shootTimer??0)-e,t.shootTimer<=0){const l=2+Math.floor(Math.random()*2);for(let h=0;h<l;h++)this.shootVex(r.x,r.y+1,r.z,a);t.shootTimer=3}r.state="attacking"}else t.aggro=!1,this.animalAI(t,e,n,i,s,1)}shootVex(t,e,n,i){const s=new we(.2,.3,.2),a=new xe({color:8947967,transparent:!0,opacity:.7}),r=new Wt(s,a),c=(Math.random()-.5)*2,l=(Math.random()-.5)*2;r.position.set(t+c,e,n+l),yr.set(i.x-t,i.y-e,i.z-n).normalize();const h=yr.clone().multiplyScalar(10);this.scene.add(r),this.arrows.push({mesh:r,vel:h,life:4,shooterType:"evoker"})}slimeAI(t,e,n,i,s,a){const r=t.data,c=4.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,s);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}tryMount(t){for(const[e,n]of this.mobs){if(!fn.RIDEABLE_TYPES.has(n.data.type)||!n.mob.alive)continue;const i=n.data.x-t.x,s=n.data.z-t.z;if(i*i+s*s<4)return this.mountedMobId=e,n.data.state="mounted",!0}return!1}dismount(){this.mountedMobId=null}updateMount(t,e,n,i){if(!this.mountedMobId)return;const s=this.mobs.get(this.mountedMobId);if(!s||!s.mob.alive){this.mountedMobId=null;return}s.data.x=t.x,s.data.z=t.z,s.data.rotY=e,s.mob.targetPos.set(s.data.x,s.data.y,s.data.z),s.mob.group.position.set(s.data.x,s.data.y,s.data.z)}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}tryCureZombieVillager(t){for(const[,e]of this.mobs){if(e.data.type!=="zombievillager"||!e.mob.alive)continue;const n=e.data.x-t.x,i=e.data.z-t.z;if(n*n+i*i<4)return e._cureTimer>0?!1:(e._cureTimer=30,!0)}return!1}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};D(fn,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom","warden","pillager","drowned","husk","stray","ravager","blaze","ghast","magmacube","silverfish","elderguardian","witch","evoker","vindicator","vex","zoglin","hoglin","zombievillager","giant"])),D(fn,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom","drowned","husk","stray","zombievillager","zombiehorse"])),D(fn,"CREEPER_FUSE_TIME",1.5),D(fn,"RIDEABLE_TYPES",new Set(["horse","zombiehorse","skeletonhorse"]));let Wr=fn;class G_{constructor(){D(this,"hotbarEl",document.getElementById("hotbar"));D(this,"topLeftEl",document.getElementById("topLeft"));D(this,"topRightEl",document.getElementById("topRight"));D(this,"connEl",document.getElementById("connStatus"));D(this,"blockNameEl",document.getElementById("blockName"));D(this,"chatMsgsEl",document.getElementById("chatMessages"));D(this,"chatInput",document.getElementById("chatInput"));D(this,"heartsEl",document.getElementById("hearts"));D(this,"hungerEl",document.getElementById("hunger"));D(this,"timeEl",document.getElementById("timeDisplay"));D(this,"gameModeEl",document.getElementById("gameModeEl"));D(this,"deathScreen",document.getElementById("deathScreen"));D(this,"respawnBtn",document.getElementById("respawnBtn"));D(this,"selectedIndex",0);D(this,"gameMode","survival");D(this,"craftingPanel",null);D(this,"inventoryPanel",null);D(this,"xpBarEl",null);D(this,"xpLevelEl",null);D(this,"dayCounterEl",null);D(this,"dayNotifyEl",null);D(this,"_lastLevel",-1);D(this,"_lastDay",-1);D(this,"debugScreenEl",null);D(this,"debugVisible",!1);D(this,"_lastHp",-1);D(this,"_lastMaxHp",-1);D(this,"_lastWither",!1);D(this,"_lastHunger",-1);D(this,"_lastMaxHunger",-1);D(this,"_lastTimeStr","");D(this,"_lastTimeDayTime",-1);D(this,"_lastPosX",NaN);D(this,"_lastPosY",NaN);D(this,"_lastPosZ",NaN);D(this,"_posXEl",null);D(this,"_posYEl",null);D(this,"_posZEl",null);D(this,"onChat");D(this,"onRespawn");D(this,"onCraft");D(this,"onInventorySwap");D(this,"getInvCount");D(this,"tooltipEl",document.getElementById("hotbarTooltip"));D(this,"tooltipTimer",null);D(this,"airBubblesEl",document.getElementById("airBubbles"));D(this,"chatHistory",[]);D(this,"chatHistoryIdx",-1);D(this,"chestPanel",null);D(this,"onChestClose");D(this,"onChestTransfer");D(this,"smeltingPanel",null);D(this,"onSmelt");D(this,"killFeedEl",null);D(this,"playerListPanel",null);D(this,"enchantPanel",null);D(this,"onEnchant",null);D(this,"tradePanel",null);D(this,"onTrade",null);D(this,"bossBarEl",null);D(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,s)=>{const a=i.querySelector(".slot-icon");if(!a)return;const r=t[s]??0;if(r===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+Bs(r).toString(16).padStart(6,"0"),a.title=Qe(r);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[s]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,s)=>{i.classList.toggle("active",s===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,s=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&s===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=s,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=s.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),s=Math.floor(t/2),a=t%2===1;for(let r=0;r<i;r++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),r<s?c.classList.add("full"):r===s&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,s=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const r=this.deathScreen.querySelector(".death-coords");r&&(r.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${s}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),s=t%2===1;for(let a=0;a<n;a++){const r=document.createElement("div");r.className="hunger-icon",a<i?r.classList.add("full"):a===i&&s?r.classList.add("half"):r.classList.add("empty"),this.hungerEl.appendChild(r)}}updateAirSupply(t,e){if(!this.airBubblesEl)return;const n=10,i=Math.round(t/e*n);if(t>=e){this.airBubblesEl.style.display="none";return}this.airBubblesEl.style.display="flex",this.airBubblesEl.innerHTML="";for(let s=0;s<n;s++){const a=document.createElement("span");a.style.cssText=`
        display:inline-block;width:10px;height:10px;border-radius:50%;
        background:${s<i?"#55aaff":"rgba(85,170,255,0.2)"};
        border:1px solid #2277cc;
      `,this.airBubblesEl.appendChild(a)}}updateTime(t){if(Math.abs(t-this._lastTimeDayTime)<7e-4)return;this._lastTimeDayTime=t;const e=(t*24+6)%24,n=Math.floor(e),i=Math.floor((e-n)*60),s=n>=12?"PM":"AM",a=n%12||12,r=i<10?i===0?"00":"0"+i:""+i;let c="☀️";t<.2||t>.8?c="🌙":(t<.3||t>.7)&&(c="🌅");const l=`${c} ${a}:${r} ${s}`;l!==this._lastTimeStr&&(this._lastTimeStr=l,this.timeEl.textContent=l)}setGameMode(t){this.gameMode=t,this.gameModeEl.textContent=t==="creative"?"✈ Creative":t==="spectator"?"👁 Spectator":"⚔ Survival",this.gameModeEl.className=`gamemode-badge ${t}`;const e=t==="creative"||t==="spectator";this.heartsEl.style.display=e?"none":"flex",this.hungerEl.style.display=e?"none":"flex"}buildXPBar(){this.xpBarEl=document.createElement("div"),this.xpBarEl.id="xp-bar",this.xpBarEl.style.cssText=`
      position: absolute;
      bottom: 74px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 5px;
      background: rgba(0,0,0,0.5);
      border: 1px solid #222;
      border-radius: 2px;
      z-index: 100;
      overflow: hidden;
      box-shadow: 0 0 4px rgba(0,0,0,0.5);
    `;const t=document.createElement("div");t.id="xp-bar-fill",t.style.cssText=`
      width: 0%;
      height: 100%;
      background: linear-gradient(180deg, #a8ff44, #66cc22);
      transition: width 0.3s ease-out;
      border-radius: 3px;
      box-shadow: 0 0 6px rgba(136, 255, 68, 0.4);
    `,this.xpBarEl.appendChild(t);const e=document.createElement("div");e.id="xp-level",e.textContent="0",e.style.cssText=`
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      color: #88ff44;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      font-weight: bold;
      z-index: 100;
      text-shadow: 0 0 4px rgba(136,255,68,0.5), 1px 1px 0 #000;
      transition: transform 0.2s ease-out, color 0.3s;
    `,this.xpLevelEl=e,this.dayNotifyEl=document.createElement("div"),this.dayNotifyEl.id="day-notify",this.dayNotifyEl.style.cssText=`
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255,255,200,0.9);
      font-family: 'Courier New', monospace;
      font-size: 22px;
      font-weight: bold;
      z-index: 200;
      text-shadow: 0 0 8px rgba(255,200,50,0.5), 2px 2px 0 rgba(0,0,0,0.8);
      pointer-events: none;
      opacity: 0;
      transition: opacity 1.5s ease-out;
    `,document.body.appendChild(this.xpBarEl),document.body.appendChild(e),document.body.appendChild(this.dayNotifyEl)}updateXP(t,e){if(!this.xpBarEl)return;const n=(e+1)*10,i=t-e*10,s=Math.min(100,i/n*100),a=this.xpBarEl.querySelector("#xp-bar-fill");a&&(a.style.width=s+"%"),this.xpLevelEl&&(this.xpLevelEl.textContent=`${e}`,e>this._lastLevel&&this._lastLevel>=0&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1.5)",this.xpLevelEl.style.color="#ffff44",a&&(a.style.boxShadow="0 0 16px rgba(255,255,68,0.8)"),setTimeout(()=>{this.xpLevelEl&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1)",this.xpLevelEl.style.color="#88ff44"),a&&(a.style.boxShadow="0 0 6px rgba(136,255,68,0.4)")},500)),this._lastLevel=e)}updateDayCounter(t){t!==this._lastDay&&(this.dayCounterEl&&(this.dayCounterEl.textContent=`Day ${t}`),this._lastDay>=1&&this.dayNotifyEl&&(this.dayNotifyEl.textContent=`Day ${t}`,this.dayNotifyEl.style.opacity="1",this.dayNotifyEl.style.transition="none",this.dayNotifyEl.offsetWidth,this.dayNotifyEl.style.transition="opacity 2.5s ease-out",this.dayNotifyEl.style.opacity="0"),this._lastDay=t)}showInventory(t){if(this.inventoryPanel)return;this.inventoryPanel=document.createElement("div"),this.inventoryPanel.id="inventory-panel",this.inventoryPanel.style.cssText=`
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
    `;let i=null;const s=[],a=h=>{const d=s[h];if(!d)return;const p=t[h]??0,x=p===0?"#333333":"#"+Bs(p).toString(16).padStart(6,"0");d.style.background=i===h?"#ffee88":x,d.style.border=i===h?"2px solid #ffcc00":"1px solid #1a1a1a",d.title=p===0?"Empty":Qe(p)};for(let h=0;h<36;h++){const d=document.createElement("div"),p=t[h]??0,x=p===0?"#333333":"#"+Bs(p).toString(16).padStart(6,"0");d.style.cssText=`
        width: 24px; height: 24px;
        background: ${x};
        border: 1px solid #1a1a1a;
        border-radius: 1px; cursor: pointer;
        transition: background 0.1s;
        position: relative;
      `,d.title=p===0?"Empty":Qe(p);const g=t[h]??0;if(g!==0&&this.getInvCount){const f=document.createElement("span");f.style.cssText="position:absolute;bottom:1px;right:2px;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",f.textContent=String(this.getInvCount(g)||""),d.appendChild(f)}s.push(d);const M=h;d.addEventListener("click",()=>{var f;if(i===null)t[M]!==0&&(i=M,a(M));else if(i===M)i=null,a(M);else{const u=t[M];t[M]=t[i],t[i]=u;const E=i;i=null,a(M),a(E),(f=this.onInventorySwap)==null||f.call(this,E,M)}}),d.addEventListener("mouseenter",()=>{i!==M&&(d.style.outline="1px solid #aaa")}),d.addEventListener("mouseleave",()=>{d.style.outline="none"}),n.appendChild(d)}this.inventoryPanel.appendChild(n);const r=document.createElement("div");r.textContent="Crafting",r.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;for(let h=0;h<4;h++){const d=document.createElement("div");d.style.cssText=`
        width: 30px;
        height: 30px;
        background: #333333;
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
      `,d.title="Crafting slot",c.appendChild(d)}this.inventoryPanel.appendChild(c);const l=document.createElement("button");l.style.cssText=`
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
    `,l.textContent="Close (E)",l.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(l),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e;if(t.key==="Enter"){const n=this.chatInput.value.trim();n&&(this.chatHistory.unshift(n),this.chatHistory.length>50&&this.chatHistory.pop(),this.chatHistoryIdx=-1,(e=this.onChat)==null||e.call(this,n)),this.closeChatInput(),t.stopPropagation();return}if(t.key==="ArrowUp"){t.preventDefault(),this.chatHistory.length>0&&(this.chatHistoryIdx=Math.min(this.chatHistoryIdx+1,this.chatHistory.length-1),this.chatInput.value=this.chatHistory[this.chatHistoryIdx]),t.stopPropagation();return}if(t.key==="ArrowDown"){t.preventDefault(),this.chatHistoryIdx=Math.max(this.chatHistoryIdx-1,-1),this.chatInput.value=this.chatHistoryIdx>=0?this.chatHistory[this.chatHistoryIdx]:"",t.stopPropagation();return}if(t.key==="Escape"){this.closeChatInput(),t.stopPropagation();return}t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed","/give","/god","/spawn","/boss","/achievements","/stats","/nether","/craft","/tame","/spectator"],n=t.slice(1).toLowerCase(),i=e.filter(s=>s.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatHistoryIdx=-1,this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const s=new Date,a=s.getHours().toString().padStart(2,"0"),r=s.getMinutes().toString().padStart(2,"0"),c=`[${a}:${r}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const d=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${d}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"saddle",name:"Saddle",ingredients:{95:7},output:{type:93,count:1}},{id:"anvil",name:"Anvil",ingredients:{62:4},output:{type:94,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
      position: fixed; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      background: #3d3d3d; border: 3px solid #111;
      padding: 16px; width: 360px; max-height: 80vh;
      overflow-y: auto; z-index: 1000; border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      font-family: "Minecraft", monospace, Arial, sans-serif;
    `;const e=document.createElement("h2");e.textContent="✦ Crafting",e.style.cssText="color: #ffdd44; margin: 0 0 4px 0; text-align: center; font-size: 18px; text-shadow: 2px 2px #000;",this.craftingPanel.appendChild(e);const n=document.createElement("div");n.style.cssText="color: #aaa; font-size: 11px; text-align: center; margin-bottom: 8px;",n.textContent="Right-click crafting table to open. Hand-craftable items marked ✋",this.craftingPanel.appendChild(n);const i=document.createElement("input");i.type="text",i.placeholder="🔍 Search recipes...",i.style.cssText=`
      width: 100%; box-sizing: border-box; padding: 6px 8px;
      background: #222; color: #eee; border: 1px solid #555;
      border-radius: 3px; font-size: 12px; margin-bottom: 10px;
      outline: none;
    `,this.craftingPanel.appendChild(i);const s=this.getInvCount??(()=>0),a={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",95:"Leather",93:"Saddle",94:"Anvil",3:"Stone",4:"Sand"};for(const c of t){const l=Object.entries(c.ingredients).every(([f,u])=>s(Number(f))>=u),h=document.createElement("div");h.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${l?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${l?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${l?"pointer":"default"};
        opacity: ${l?"1":"0.5"};
      `;const d=document.createElement("span");d.textContent=c.hand?"✋":"🔨",d.style.cssText="font-size: 16px; flex-shrink: 0;";const p=document.createElement("div");p.style.cssText="flex: 1;";const x=document.createElement("div");x.textContent=c.name,x.style.cssText=`color: ${l?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const g=document.createElement("div"),M=Object.entries(c.ingredients).map(([f,u])=>{const E=s(Number(f)),v=a[Number(f)]??`Item ${f}`;return`<span style="color:${E>=u?"#88ff88":"#ff8888"}">${u}x ${v}</span>`});g.innerHTML=M.join(", "),g.style.cssText="font-size: 10px; margin-top: 2px;",p.appendChild(x),p.appendChild(g),h.appendChild(d),h.appendChild(p),l&&h.addEventListener("click",()=>{var u;((u=this.onCraft)==null?void 0:u.call(this,c.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(h),h.dataset.recipeName=c.name.toLowerCase()}i.addEventListener("input",()=>{const c=i.value.toLowerCase();this.craftingPanel.querySelectorAll("[data-recipe-name]").forEach(l=>{l.style.display=(l.dataset.recipeName??"").includes(c)?"":"none"})});const r=document.createElement("button");r.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,r.textContent="Close [E]",r.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(r),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=h=>{const d=h===0?"444444":Bs(h).toString(16).padStart(6,"0");return`
        width: ${n}px; height: ${n}px;
        background: #${d};
        border: 1px solid #1a1a1a;
        border-radius: 2px;
        cursor: ${h?"pointer":"default"};
        transition: transform 0.1s, box-shadow 0.1s;
        position: relative;
      `};this.chestPanel=document.createElement("div"),this.chestPanel.id="chest-panel",this.chestPanel.style.cssText=`
      position: fixed; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      background: #8B6914;
      border: 4px solid #3d2814;
      padding: 18px;
      width: 320px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
      font-family: Arial, sans-serif;
    `;const s=document.createElement("h2");s.textContent="Chest",s.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(s);const a=(h,d,p,x)=>{const g=document.createElement("div");g.style.cssText="margin-bottom: 10px;";const M=document.createElement("div");M.textContent=h,M.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",g.appendChild(M);const f=document.createElement("div");f.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${x}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let u=0;u<d.length;u++){const E=d[u]??0,v=document.createElement("div");if(v.style.cssText=i(E),v.title=E===0?"Empty":`${Qe(E)} (click to move)`,E!==0){const T=document.createElement("span");T.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,T.textContent=Qe(E).slice(0,3),v.appendChild(T)}v.addEventListener("mouseenter",()=>{E&&(v.style.transform="scale(1.1)",v.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",v.style.zIndex="2")}),v.addEventListener("mouseleave",()=>{v.style.transform="scale(1)",v.style.boxShadow="none",v.style.zIndex="0"});const b=u;v.addEventListener("click",()=>{var T;E!==0&&((T=this.onChestTransfer)==null||T.call(this,p,b,t,e),this.hideChestUI(),this.showChestUI(t,e))}),f.appendChild(v)}return g.appendChild(f),g};this.chestPanel.appendChild(a("Chest",t,!0,9));const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(r),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
      display: block; width: 100%; padding: 8px; margin-top: 8px;
      background: #5B3333; color: white; border: 2px solid #3d0000;
      border-radius: 2px; cursor: pointer; font-weight: bold; font-size: 13px;
    `,c.textContent="Close Chest",c.addEventListener("click",()=>this.hideChestUI()),this.chestPanel.appendChild(c);const l=h=>{h.key==="Escape"&&(this.hideChestUI(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l),document.body.appendChild(this.chestPanel)}hideChestUI(){var t;this.chestPanel&&(this.chestPanel.remove(),this.chestPanel=null,(t=this.onChestClose)==null||t.call(this))}isChestOpen(){return this.chestPanel!==null}showSmeltingUI(){if(this.smeltingPanel)return;this.smeltingPanel=document.createElement("div"),this.smeltingPanel.id="smelting-panel",this.smeltingPanel.style.cssText=`
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
    `;const s=document.createElement("div");s.appendChild(n),s.appendChild(i);const a=document.createElement("div");a.style.cssText=`
      font-size: 20px;
      color: white;
      animation: pulse 1s infinite;
    `,a.textContent="→";const r=document.createElement("div");r.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",r.textContent="Output:";const c=document.createElement("div");c.id="smelt-output",c.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;const l=document.createElement("div");l.appendChild(r),l.appendChild(c),e.appendChild(s),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const d=document.createElement("div");d.id="smelt-fuel",d.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(h),this.smeltingPanel.appendChild(d);const p=document.createElement("button");p.style.cssText=`
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
    `,p.textContent="Smelt",p.addEventListener("click",()=>{var f;const M=(f=this.onSmelt)==null?void 0:f.call(this,14,5);M!=null&&this.addChatMessage("",`Smelted item (type ${M})!`,!0)}),this.smeltingPanel.appendChild(p);const x=document.createElement("button");x.style.cssText=`
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
    `,x.textContent="Close",x.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(x);const g=document.createElement("style");g.textContent=`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `,document.head.appendChild(g),document.body.appendChild(this.smeltingPanel)}hideSmeltingUI(){this.smeltingPanel&&(this.smeltingPanel.remove(),this.smeltingPanel=null)}isSmeltingOpen(){return this.smeltingPanel!==null}addKillFeedEntry(t,e){this.killFeedEl||(this.killFeedEl=document.createElement("div"),this.killFeedEl.id="killfeed",this.killFeedEl.style.cssText=`
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
    `;const e=document.createElement("h2");e.textContent="Enchanting Table",e.style.cssText="color: #ffff99; margin: 0 0 10px 0; text-align: center; font-family: Arial, sans-serif; font-size: 16px;",this.enchantPanel.appendChild(e);const n=document.createElement("div");n.textContent=`XP Level: ${t}`,n.style.cssText="color: #cccccc; text-align: center; margin-bottom: 15px; font-size: 12px;",this.enchantPanel.appendChild(n);const i=[{type:"sharpness",name:"Sharpness I",desc:"+2 Damage (Cost: 3 XP)",cost:3},{type:"protection",name:"Protection I",desc:"+3 Armor (Cost: 3 XP)",cost:3},{type:"speed",name:"Speed I",desc:"+20% Movement (Cost: 3 XP)",cost:3}];for(const a of i){const r=document.createElement("button");r.style.cssText=`
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
      `,r.textContent=a.name,r.title=a.desc,t>=a.cost&&r.addEventListener("click",()=>{var c;(c=this.onEnchant)==null||c.call(this,a.type),this.hideEnchantUI()}),this.enchantPanel.appendChild(r)}const s=document.createElement("button");s.style.cssText=`
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
    `,s.textContent="Close",s.addEventListener("click",()=>this.hideEnchantUI()),this.enchantPanel.appendChild(s),document.body.appendChild(this.enchantPanel)}hideEnchantUI(){this.enchantPanel&&(this.enchantPanel.remove(),this.enchantPanel=null)}isEnchantOpen(){return this.enchantPanel!==null}showTradeUI(t){if(this.tradePanel)return;this.tradePanel=document.createElement("div"),this.tradePanel.style.cssText=`
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
    `;const e=document.createElement("h2");e.textContent="Villager Trades",e.style.cssText="color: #ffff99; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.tradePanel.appendChild(e);for(let i=0;i<t.length;i++){const s=t[i],a=document.createElement("button");a.style.cssText=`
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
      `,a.textContent=`${s.giveName} → ${s.receiveName}`,a.addEventListener("click",()=>{var r;(r=this.onTrade)==null||r.call(this,i),this.hideTradeUI()}),this.tradePanel.appendChild(a)}const n=document.createElement("button");n.style.cssText=`
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
      `,i.textContent=t,this.bossBarEl.appendChild(i);const s=document.createElement("div");s.style.cssText=`
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
      `,s.appendChild(a),this.bossBarEl.appendChild(s),document.body.appendChild(this.bossBarEl)}this.updateBossBar(e,n)}updateBossBar(t,e){if(!this.bossBarEl)return;const n=Math.max(0,t/e*100),i=this.bossBarEl.querySelector("#boss-bar-fill");i&&(i.style.width=n+"%")}hideBossBar(){this.bossBarEl&&(this.bossBarEl.remove(),this.bossBarEl=null)}showAchievement(t,e,n){const i=document.createElement("div");i.style.cssText=`
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
    `;const s=document.createElement("div");s.innerHTML=`
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">${n}</span>
        <div>
          <div style="font-weight: bold;">${t}</div>
          <div style="font-size: 12px; color: #333; font-style: italic;">${e}</div>
        </div>
      </div>
    `,i.appendChild(s),document.body.appendChild(i),setTimeout(()=>{i.style.animation="slideOutRight 0.3s ease-in",setTimeout(()=>i.remove(),300)},4e3)}showDebugScreen(){this.debugScreenEl||(this.debugScreenEl=document.createElement("div"),this.debugScreenEl.id="debug-screen",this.debugScreenEl.style.cssText=`
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
Blocks: ${t.blockCount}`}hideHUD(){this.hotbarEl.style.display="none",this.topLeftEl.style.display="none",this.topRightEl.style.display="none",this.heartsEl.style.display="none",this.hungerEl.style.display="none",this.timeEl.style.display="none",this.gameModeEl.style.display="none",this.chatMsgsEl.style.display="none",this.blockNameEl.style.display="none",this.xpBarEl&&(this.xpBarEl.style.display="none"),this.xpLevelEl&&(this.xpLevelEl.style.display="none"),this.dayCounterEl&&(this.dayCounterEl.style.display="none")}showHUD(){this.hotbarEl.style.display="block",this.topLeftEl.style.display="block",this.topRightEl.style.display="block",this.heartsEl.style.display="flex",this.hungerEl.style.display="flex",this.timeEl.style.display="block",this.gameModeEl.style.display="block",this.chatMsgsEl.style.display="block",this.blockNameEl.style.display="block",this.xpBarEl&&(this.xpBarEl.style.display="block"),this.xpLevelEl&&(this.xpLevelEl.style.display="block"),this.dayCounterEl&&(this.dayCounterEl.style.display="block")}showScoreboard(t,e){if(this.scoreboardPanel)return;this.scoreboardPanel=document.createElement("div"),this.scoreboardPanel.style.cssText=`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.85);
      border: 3px solid #555;
      padding: 24px 32px;
      min-width: 360px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 1000;
      border-radius: 6px;
      font-family: Arial, sans-serif;
      color: white;
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),s=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60,c=s>0?`${s}h ${a}m ${r}s`:`${a}m ${r}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[p,x]of l){if(!p){const u=document.createElement("hr");u.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(u);continue}const g=document.createElement("div");g.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const M=document.createElement("span");M.textContent=p,M.style.color="#aaa";const f=document.createElement("span");f.textContent=x,f.style.cssText="font-weight: bold; color: #fff;",g.appendChild(M),g.appendChild(f),this.scoreboardPanel.appendChild(g)}const h=Object.entries(t.killsByType||{}).sort((p,x)=>x[1]-p[1]);if(h.length>0){const p=document.createElement("hr");p.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(p);const x=document.createElement("div");x.textContent="Kills by Type",x.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(x);for(const[g,M]of h){const f=document.createElement("div");f.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const u=document.createElement("span");u.textContent=g.charAt(0).toUpperCase()+g.slice(1),u.style.color="#999";const E=document.createElement("span");E.textContent=`${M}`,E.style.color="#ddd",f.appendChild(u),f.appendChild(E),this.scoreboardPanel.appendChild(f)}}const d=document.createElement("div");d.textContent="Press O to close",d.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(d),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const H_=new we(.12,.12,.12),V_=128;class W_{constructor(t){D(this,"scene");D(this,"pool",[]);D(this,"active",[]);this.scene=t;for(let e=0;e<V_;e++){const n=new xe({color:16777215,transparent:!0}),i=new Wt(H_,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,s,a,r,c,l=1,h=!1){let d=null;for(let p=0;p<this.pool.length;p++)if(!this.pool[p].active){d=this.pool[p];break}d&&(d.active=!0,d.life=0,d.maxLife=c,d.vx=s,d.vy=a,d.vz=r,d.mesh.position.set(t,e,n),d.mesh.scale.setScalar(l),d.mesh.visible=!0,d.mat.color.setHex(i),d.mat.opacity=1,h?(d.mat.emissive.setHex(i),d.mat.emissiveIntensity=.6):d.mat.emissiveIntensity=0,this.active.push(d))}spawn(t,e,n,i,s,a,r,c,l=.3){this.acquire(t,e,n,i,a,r,c,s,l)}burst(t,e,n,i,s=12){const a=Bs(i);for(let r=0;r<s;r++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const s=Bs(i);for(let a=0;a<8;a++){const r=a/8*Math.PI*2;this.acquire(t+Math.cos(r)*.4,e,n+Math.sin(r)*.4,s,Math.cos(r)*2,.5+Math.random(),Math.sin(r)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let s=0;s<i;s++){const a=Math.random()*Math.PI*2,r=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*r,3+Math.random()*2,Math.sin(a)*r,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let s=0;s<i;s++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let s=0;s<i;s++){const a=Math.random()<.5?11158783:16763904,r=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(r)*c,1+Math.random()*2,Math.sin(r)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let s=0;s<i;s++){const a=Math.random(),r=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,r,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class X_{constructor(){D(this,"ctx",null);D(this,"musicActive",!1);D(this,"musicTimeout",null);D(this,"sfxVolume",1);D(this,"musicVolume",.6);D(this,"ambientActive",!1);D(this,"ambientTimeout",null);D(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){e*=this.sfxVolume;try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.6,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,s=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=s;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime+i),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(r),r.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),s=n.createBufferSource();s.buffer=i;const a=n.createGain(),r=t*(.1+Math.random()*.06);a.gain.setValueAtTime(r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}s.connect(c),c.connect(a),a.connect(n.destination),s.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const s=e.createGain(),a=Math.min(t*.15,.5);s.gain.setValueAtTime(a,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=150,i.connect(r),r.connect(s),s.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),s.gain.setValueAtTime(.06,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(s),s.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(r),r.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),s=t.createBuffer(1,i,n),a=s.getChannelData(0);for(let r=0;r<i;r++)a[r]=Math.random()*2-1;return s}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let s=0;const a=()=>{if(!this.musicActive)return;const r=e.createOscillator(),c=e.createGain();r.type=t==="disc_blue"?"square":"sine",r.frequency.value=i[s%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),r.connect(c),c.connect(e.destination),r.start(),r.stop(e.currentTime+.5),s++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}playNote(t){try{const e=this.getCtx(),n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.value=t,i.gain.setValueAtTime(.3*this.sfxVolume,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.4),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.4)}catch{}}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,s=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),r=2+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const h=i[Math.floor(Math.random()*i.length)],d=a.createOscillator(),p=a.createGain();d.type=t==="cave"||Math.random()>.5?"sine":"triangle",d.frequency.value=h*(t==="cave"?.5:1);const x=3+Math.random()*4;p.gain.setValueAtTime(0,a.currentTime),p.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+x*.3),p.gain.linearRampToValueAtTime(0,a.currentTime+x),d.detune.value=(Math.random()-.5)*10,d.connect(p),p.connect(this.ambientGain),d.start(),d.stop(a.currentTime+x+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(s,c)};this.ambientTimeout=setTimeout(s,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Y_{constructor(t){D(this,"scene");D(this,"drops",[]);D(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const s=q_[i]??16777215,a=new we(.35,.35,.35),r=new xe({color:s}),c=new Wt(a,r);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const s=j_[t];if(s){for(const a of s)if(Math.random()<a.chance){const r=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<r;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let s=this.drops.length-1;s>=0;s--){const a=this.drops[s];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const r=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(r*r+l*l+c*c<2.25||a.life<=0)&&(r*r+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(s,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const q_={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886,iron_ingot:13421772,snowball:15658751,copper_ingot:13399876,magma_cream:16737792,prismarine_shard:5614250,redstone:13369344,glowstone_dust:16763972,totem_of_undying:14527027,rotten_flesh:9131315,emerald:2284885},j_={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],horse:[{item:"leather",chance:1,min:1,max:2}],warden:[{item:"iron_ingot",chance:1,min:4,max:8}],pillager:[{item:"arrow",chance:.8,min:0,max:2}],drowned:[{item:"copper_ingot",chance:.5,min:0,max:1}],husk:[{item:"bone",chance:.5,min:0,max:2}],stray:[{item:"bone",chance:1,min:1,max:2}],ravager:[{item:"iron_ingot",chance:1,min:2,max:4}],bat:[],enderman:[{item:"string",chance:1,min:0,max:1}],blaze:[{item:"gunpowder",chance:1,min:0,max:2}],ghast:[{item:"gunpowder",chance:1,min:0,max:2}],vindicator:[{item:"iron_axe",chance:.1,min:1,max:1}],vex:[],zoglin:[{item:"porkchop",chance:1,min:1,max:2}],hoglin:[{item:"porkchop",chance:1,min:2,max:4},{item:"leather",chance:.5,min:0,max:1}],piglin:[{item:"gold_ingot",chance:.5,min:0,max:1}],fox:[{item:"egg",chance:.5,min:0,max:1}],panda:[{item:"stick",chance:1,min:0,max:1}],ocelot:[],mooshroom:[{item:"beef",chance:1,min:1,max:3}],llama:[{item:"leather",chance:1,min:0,max:2}],bee:[{item:"egg",chance:.2,min:0,max:1}],polarbear:[{item:"cod",chance:.75,min:0,max:2}],dolphin:[{item:"cod",chance:.5,min:0,max:1}],squid:[{item:"string",chance:1,min:1,max:3}],turtle:[{item:"egg",chance:.3,min:0,max:1}],axolotl:[{item:"salmon",chance:.5,min:1,max:1}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}],irongolem:[{item:"iron_ingot",chance:1,min:3,max:5}],snowgolem:[{item:"snowball",chance:1,min:1,max:3}],magmacube:[{item:"magma_cream",chance:1,min:1,max:2}],silverfish:[],elderguardian:[{item:"prismarine_shard",chance:1,min:1,max:3}],witch:[{item:"redstone",chance:.5,min:0,max:2},{item:"glowstone_dust",chance:.5,min:0,max:2}],evoker:[{item:"totem_of_undying",chance:1,min:1,max:1}],zombievillager:[{item:"rotten_flesh",chance:1,min:1,max:2}],wanderingtrader:[{item:"emerald",chance:1,min:1,max:1}],giant:[{item:"rotten_flesh",chance:1,min:10,max:10}],zombiehorse:[{item:"rotten_flesh",chance:1,min:1,max:2}],skeletonhorse:[{item:"bone",chance:1,min:1,max:2}]},pu={};for(const[o,t]of Object.entries(ia)){const e=Number(o);if(t&&t.color!=null){const n=t.color;pu[e]=[n>>16&255,n>>8&255,n&255]}}class $_{constructor(t){D(this,"canvas");D(this,"ctx");D(this,"container");D(this,"updateTimer",0);D(this,"world");D(this,"RADIUS",32);D(this,"CANVAS_SIZE",128);D(this,"UPDATE_INTERVAL",.3);D(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,s){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,s))}drawMap(t,e,n,i){const s=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,r=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let u=0;u<c.length;u+=4)c[u]=26,c[u+1]=26,c[u+2]=26,c[u+3]=255;const h=Math.floor(t.x)-this.RADIUS,d=Math.floor(t.x)+this.RADIUS,p=Math.floor(t.z)-this.RADIUS,x=Math.floor(t.z)+this.RADIUS;for(let u=h;u<=d;u++)for(let E=p;E<=x;E++){let v=0;for(let U=40;U>=0;U--){const w=this.world.getBlockType(u,U,E);if(w!==void 0){v=w;break}}if(v===0)continue;const b=Math.round(s+(u-t.x)*r),T=Math.round(a+(E-t.z)*r);if(b<0||b>=l||T<0||T>=l)continue;const S=pu[v],C=(T*l+b)*4;S?(c[C]=S[0],c[C+1]=S[1],c[C+2]=S[2],c[C+3]=255):(c[C]=255,c[C+1]=255,c[C+2]=255,c[C+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const u of i){if(!u.alive)continue;const E=s+(u.x-t.x)*r,v=a+(u.z-t.z)*r;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(E,v,2,0,Math.PI*2),this.ctx.fill()}for(const u of n){const E=s+(u.x-t.x)*r,v=a+(u.z-t.z)*r;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(E,v,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(s,a,3,0,Math.PI*2),this.ctx.fill();const g=6,M=s+Math.sin(e)*g,f=a+Math.cos(e)*g;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(s,a),this.ctx.lineTo(M,f),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class K_{constructor(t,e){D(this,"scene");D(this,"sounds");D(this,"type","clear");D(this,"rainParticles",null);D(this,"rainPositions",null);D(this,"rainVelY",null);D(this,"rainCount",2e3);D(this,"splashParticles",null);D(this,"splashPositions",null);D(this,"splashLife",null);D(this,"splashCount",200);D(this,"thunderTimer",0);D(this,"thunderFlash",!1);D(this,"nextThunder",15);D(this,"_lightningStrike",null);D(this,"rainSoundTimer",0);D(this,"rainAmbientNode",null);D(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new _n,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new En(e,3));const i=new Uc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new zh(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const s=new _n,a=new Float32Array(this.splashCount*3),r=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,r[l]=0;s.setAttribute("position",new En(a,3));const c=new Uc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new zh(s,c),this.splashPositions=a,this.splashLife=r,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let s=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&s<this.splashCount){const r=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[s*3]=r,this.splashPositions[s*3+1]=e.y-1+Math.random()*.5,this.splashPositions[s*3+2]=c,this.splashLife[s]=.3,s++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this._lightningStrike={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40},this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}consumeLightningStrike(){const t=this._lightningStrike;return this._lightningStrike=null,t}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let s=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(s+.02*h)/1.02,s=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const r=t.createGain();r.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(r),r.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=r,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const Z_=new gn(.2,6,6),J_=new vi({color:8978244});class Q_{constructor(t){D(this,"scene");D(this,"orbs",[]);D(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const s=new Wt(Z_,J_);s.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(s),this.orbs.push({mesh:s,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const s=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z,c=s*s+a*a+r*r;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const ty=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class ey{constructor(){D(this,"achievements");D(this,"counters",new Map);D(this,"onUnlock",null);this.achievements=new Map(ty.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const s=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",s),s<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class ny{constructor(){D(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const iy=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,sy=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uHorizonGlow;
uniform float uGlowIntensity;
uniform vec3 uSunDir;
uniform float uSunIntensity;
uniform float uStarOpacity;

varying vec3 vWorldPos;

// Simple hash for stars
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec3 dir = normalize(vWorldPos);
  float elevation = dir.y; // -1 (nadir) to 1 (zenith)

  // Sky gradient: horizon color at y=0, zenith color at y=1
  float t = clamp(elevation, 0.0, 1.0);
  t = sqrt(t); // bias toward horizon for wider horizon band
  vec3 sky = mix(uHorizon, uZenith, t);

  // Horizon glow band (dawn/dusk warm glow near horizon)
  float horizonBand = exp(-abs(elevation) * 8.0); // tight band around horizon
  sky = mix(sky, uHorizonGlow, horizonBand * uGlowIntensity);

  // Sun halo
  float sunDot = max(dot(dir, uSunDir), 0.0);
  float sunHalo = pow(sunDot, 64.0) * 0.6 + pow(sunDot, 256.0) * 1.2;
  sky += vec3(1.0, 0.95, 0.8) * sunHalo * uSunIntensity;

  // Moon halo (opposite of sun)
  vec3 moonDir = -uSunDir;
  float moonDot = max(dot(dir, moonDir), 0.0);
  float moonHalo = pow(moonDot, 128.0) * 0.3;
  sky += vec3(0.6, 0.7, 1.0) * moonHalo * (1.0 - uSunIntensity);

  // Stars — procedural grid-based
  if (uStarOpacity > 0.01 && elevation > 0.0) {
    // Project direction onto a 2D grid for star placement
    vec2 starUV = dir.xz / (dir.y + 0.001) * 4.0;
    vec2 cell = floor(starUV);
    float starVal = hash(cell);
    // Only ~15% of cells have stars
    if (starVal > 0.85) {
      // Star position within cell
      vec2 starPos = vec2(hash(cell + 0.5), hash(cell + 1.5)) * 0.8 + 0.1;
      vec2 delta = fract(starUV) - starPos;
      float dist = length(delta);
      float brightness = smoothstep(0.04, 0.0, dist) * (0.5 + starVal * 0.5);
      // Twinkle
      float twinkle = sin(starVal * 100.0 + starUV.x * 10.0) * 0.3 + 0.7;
      sky += vec3(brightness * twinkle * uStarOpacity);
    }
  }

  // Below horizon: darken gradually
  if (elevation < 0.0) {
    float below = clamp(-elevation * 3.0, 0.0, 1.0);
    sky = mix(sky, uHorizon * 0.5, below);
  }

  gl_FragColor = vec4(sky, 1.0);
}
`,Li=class Li{constructor(){D(this,"mesh");D(this,"material");D(this,"_zenith",new yt);D(this,"_horizon",new yt);D(this,"_glow",new yt);D(this,"_sunDir",new B);const t=new gn(400,24,16);this.material=new ki({vertexShader:iy,fragmentShader:sy,side:xn,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new B(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new Wt(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=Li.ZENITH,s=Li.HORIZON,a=Li.GLOW;let r;if(n<.2){const h=n/.2;this._zenith.copy(i.night).lerp(i.dawn,h),this._horizon.copy(s.night).lerp(s.dawn,h),this._glow.copy(a.night).lerp(a.dawn,h),r=h*.8}else if(n<.3){const h=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,h),this._horizon.copy(s.dawn).lerp(s.day,h),this._glow.copy(a.dawn).lerp(a.day,h),r=(1-h)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(s.day),this._glow.copy(a.day),r=.05;else if(n<.8){const h=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,h),this._horizon.copy(s.day).lerp(s.dusk,h),this._glow.copy(a.day).lerp(a.dusk,h),r=h*.8}else{const h=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,h),this._horizon.copy(s.dusk).lerp(s.night,h),this._glow.copy(a.dusk).lerp(a.night,h),r=(1-h)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=r,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};D(Li,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),D(Li,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),D(Li,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Wc=Li;const De=new iu({antialias:!1});De.setPixelRatio(Math.min(window.devicePixelRatio,1));De.setSize(window.innerWidth,window.innerHeight);De.shadowMap.enabled=!1;De.toneMapping=mi;De.toneMappingExposure=1.1;document.body.appendChild(De.domElement);let mu=!1;document.addEventListener("visibilitychange",()=>{mu=document.hidden});De.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault();const t=document.createElement("div");t.id="glLostOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;align-items:center;justify-content:center;z-index:9999;font-size:1.2rem;font-family:monospace;",t.textContent="⚠ WebGL context lost — attempting to restore...",document.body.appendChild(t)},!1);De.domElement.addEventListener("webglcontextrestored",()=>{var o;(o=document.getElementById("glLostOverlay"))==null||o.remove()},!1);window.addEventListener("resize",()=>{Ie.aspect=window.innerWidth/window.innerHeight,Ie.updateProjectionMatrix(),De.setSize(window.innerWidth,window.innerHeight)});const Zt=new kx;Zt.background=null;Zt.fog=new il(8900331,60,96);const Ie=new Ln(75,window.innerWidth/window.innerHeight,.1,500);let Ir=!1,ud=50;const ic={268:59,272:131,267:250,276:1561,122:250,270:59,274:131,257:250,278:1561,269:59,273:131,256:250,277:1561,271:59,275:131,258:250,279:1561,72:50},Ls={},oy=240;let We=.25;const li={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},hi={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},ry=new gn(4,12,12),ay=new vi({color:16777215}),es=new Wt(ry,ay);Zt.add(es);const cy=new gn(2.5,12,12),ly=new vi({color:14540287}),Fs=new Wt(cy,ly);Zt.add(Fs);const wo=new Wc;Zt.add(wo.mesh);const gu=[],xu=new xe({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let o=0;o<24;o++){const t=new qt,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,s=3+Math.random()*6,a=.8+Math.random()*.8,r=new we(i,a,s),c=new Wt(r,xu);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),Zt.add(t),gu.push(t)}const vu=new jx(16777215,.5);Zt.add(vu);const Zn=new au(16774368,1.4);Zn.castShadow=!0;Zn.shadow.mapSize.set(512,512);Zn.shadow.camera.near=.5;Zn.shadow.camera.far=300;Zn.shadow.camera.left=Zn.shadow.camera.bottom=-110;Zn.shadow.camera.right=Zn.shadow.camera.top=110;Zt.add(Zn);const Xc=new au(3359846,.3);Zt.add(Xc);const _u=new Xx(8900331,4881482,.3);Zt.add(_u);const po=new yt,Ai=new yt;let Mr=0;function hy(o){We=(We+o/oy)%1;const t=(We-.25)*Math.PI*2,e=t+Math.PI,n=150;if(es.position.set(0,Math.sin(t)*n,Math.cos(t)*n),Fs.position.set(0,Math.sin(e)*n,Math.cos(e)*n),Zn.position.copy(es.position).normalize().multiplyScalar(100),Xc.position.copy(Fs.position).normalize().multiplyScalar(100),Mr%4===0)for(const c of gu)c.position.x=(c.position.x+.06+125)%250-125;if(Mr++,Mr<3)return;Mr=0;let i,s;const a=We;if(a<.2){const c=a/.2;po.copy(li.night).lerp(li.dawn,c),Ai.copy(hi.night).lerp(hi.dawn,c),i=.05+c*.8,s=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;po.copy(li.dawn).lerp(li.day,c),Ai.copy(hi.dawn).lerp(hi.day,c),i=.85+c*.55,s=.5+c*.1}else if(a<.7)po.copy(li.day),Ai.copy(hi.day),i=1.4,s=.6;else if(a<.8){const c=(a-.7)/.1;po.copy(li.day).lerp(li.dusk,c),Ai.copy(hi.day).lerp(hi.dusk,c),i=1.4-c*1.35,s=.6-c*.55}else{const c=(a-.8)/.2;po.copy(li.dusk).lerp(li.night,c),Ai.copy(hi.dusk).lerp(hi.night,c),i=.05,s=.05}De.setClearColor(Ai),Zt.fog.color.copy(Ai),wo.update(We,es.position),wo.followCamera(Ie.position),Zn.intensity=i,vu.intensity=Math.max(s,.04)+(Le.nightVision>0?.5:0),Xc.intensity=Math.max(.35-i*.2,0),_u.intensity=s*.5;const r=Math.sin(t)>0;es.visible=r,Fs.visible=!r,xu.opacity=s>.2?.78:0}let bt=null,A=null;Zt.add(Ie);const O=new G_;let mo=null;const Ae=new W_(Zt),Tt=new X_,Xr=new Y_(Zt),Yc=new Q_(Zt);let qc=null;const Ri=new K_(Zt,Tt);let ce=null,St=null,sn=!0,Pi="",qn=null,Rn=0,Be=0,zn=1;O.updateDayCounter(zn);const Un=new ey;let qi=!1;const Ht=new Array(36).fill(0),$t=new Array(36).fill(0);function Cn(o,t=1){for(let e=0;e<Ht.length;e++)if(Ht[e]===o&&$t[e]<64){const n=64-$t[e],i=Math.min(t,n);if($t[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=Ht.findIndex((n,i)=>n===0&&$t[i]===0);if(e<0)return t;Ht[e]=o,$t[e]=Math.min(t,64),t-=$t[e]}return 0}function An(o,t=1){if(Ht.reduce((n,i,s)=>n+(i===o?$t[s]:0),0)<t)return!1;for(let n=0;n<Ht.length&&t>0;n++)if(Ht[n]===o){const i=Math.min(t,$t[n]);$t[n]-=i,t-=i,$t[n]===0&&(Ht[n]=0)}return!0}function ei(o){return Ht.reduce((t,e,n)=>t+(e===o?$t[n]:0),0)}const Qi=[],Is=[],yu=new we(.05,.05,.4),Mu=new vi({color:16768324}),dy=new gn(.15,8,8),uy=new vi({color:26316});let Ne=null;const Ci=new na;Ci.far=5;const fd=new se(0,0),fy=new na;fy.far=1;let pe=20,nn=20,Je=0,sc=0,br=new B,oc=0,rc=0;const pn={sharpness:0,protection:0,speed:0},Le={strength:0,speed:0,nightVision:0,jumpBoost:0,resistance:0};let Mo=0;const pd=5;let Yr=0,qr=0;const mn=new ny;mn.load();let ac=0;const py=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let Er=0,Dr=!1;const jc=60,md=new Float32Array(jc);let lc=0,go=0,jn="You died",Nn=new B,hc=0,dc=0,uc=0,fc=0;const my={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let pc=0,gd=.35,xd=!1;const mc=new B;let vd=!1;function gy(o,t){var i,s,a,r,c,l,h,d,p,x;const e=o.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const g=(i=e[1])==null?void 0:i.toLowerCase();return g==="creative"||g==="survival"||g==="spectator"?(A.setGameMode(g),O.setGameMode(g),g==="survival"&&(pe=20,O.updateHunger(pe,nn)),O.addChatMessage("",`Gamemode set to ${g}`,!0),ce==null||ce.sendGameMode(g),!0):(O.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return A.setGameMode("spectator"),O.setGameMode("spectator"),O.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return A.takeDamage(A.maxHealth),!0;if(n==="/heal")return A.health=A.maxHealth,O.updateHearts(A.maxHealth,A.maxHealth),O.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return pe=nn,O.updateHunger(pe,nn),O.addChatMessage("","Fed to full!",!0),!0;if(n==="/god")return A.gameMode=A.gameMode==="creative"?"survival":"creative",O.addChatMessage("",A.gameMode==="creative"?"God mode ON (creative)":"God mode OFF (survival)",!0),!0;if(n==="/spawn")return A.position.x=0,A.position.z=0,A.position.y=bt.getSurfaceHeight?bt.getSurfaceHeight(0,0)+2:30,O.addChatMessage("","Teleported to spawn.",!0),!0;if(n==="/enchant"){const g=(s=e[1])==null?void 0:s.toLowerCase();return g==="sharpness"?(pn.sharpness=1,O.addChatMessage("","✨ Sharpness I applied!",!0)):g==="protection"?(pn.protection=1,O.addChatMessage("","✨ Protection I applied!",!0)):g==="speed"?(pn.speed=1,A.speedBonus=Math.max(A.speedBonus,.2),O.addChatMessage("","✨ Speed I applied!",!0)):O.addChatMessage("","Usage: /enchant sharpness|protection|speed",!0),!0}if(n==="/list"){if(sn)return O.addChatMessage("","Singleplayer — no other players online.",!0),!0;const g=(ce==null?void 0:ce.getOnlinePlayerNames())??[],M=g.length+1;return O.addChatMessage("",`Online (${M}): ${Pi}${g.length?", "+g.join(", "):""}`,!0),!0}if(n==="/scoreboard")return O.showScoreboard(mn.getAll(),zn),document.exitPointerLock(),O.addChatMessage("","Press O or close button to dismiss.",!0),!0;if(n==="/barter")return ei(63)>0?(An(63,1),Cn(62,3),O.updateHotbarFromInventory(Ht,$t),window.__piglinBarter=!0,setTimeout(()=>{window.__piglinBarter=!1},3e4),O.addChatMessage("","🐷 Piglin accepted gold! 30s peace + 3 iron ingots",!0)):O.addChatMessage("","Hold a gold ingot to barter with piglins.",!0),!0;if(n==="/worldborder"){const g=parseInt(e[1]??"");return isNaN(g)||g<10?(O.addChatMessage("","Usage: /worldborder <radius> (min 10)",!0),!0):(vo=g,O.addChatMessage("",`World border set to ±${g} blocks`,!0),!0)}if(n==="/gamerule"){const g=(a=e[1])==null?void 0:a.toLowerCase(),M=(r=e[2])==null?void 0:r.toLowerCase();if(g==="domobspawning")window.__mobSpawningEnabled=M!=="false",O.addChatMessage("",`doMobSpawning = ${M!=="false"}`,!0);else if(g==="pvp")window.__pvpEnabled=M!=="false",O.addChatMessage("",`pvp = ${M!=="false"}`,!0);else if(g==="difficulty"){const f=M??"normal";window.__difficulty=f,O.addChatMessage("",`difficulty = ${f}`,!0)}else g==="keepinventory"?(window.__keepInventory=M!=="false",O.addChatMessage("",`keepInventory = ${M!=="false"}`,!0)):O.addChatMessage("","Usage: /gamerule domobspawning|pvp|difficulty|keepinventory <true|false|value>",!0);return!0}if(n==="/clear"){for(let g=0;g<36;g++)Ht[g]=0,$t[g]=0;return O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("","Inventory cleared.",!0),!0}if(n==="/effect"){const g=(c=e[1])==null?void 0:c.toLowerCase();return g==="strength"?(Le.strength=30,O.addChatMessage("","Applied Strength I (30s)",!0)):g==="speed"?(Le.speed=30,A.speedBonus=Math.max(A.speedBonus,.3),O.addChatMessage("","Applied Speed I (30s)",!0)):g==="nightvision"||g==="night_vision"?(Le.nightVision=60,O.addChatMessage("","Applied Night Vision (60s)",!0)):g==="jump"||g==="jump_boost"?(Le.jumpBoost=30,A.jumpBonus=4,O.addChatMessage("","Applied Jump Boost I (30s)",!0)):g==="resistance"?(Le.resistance=30,O.addChatMessage("","Applied Resistance I (30s)",!0)):O.addChatMessage("","Usage: /effect strength|speed|nightvision|jump|resistance",!0),!0}if(n==="/give"){const g=parseInt(e[1]??""),M=parseInt(e[2]??"1")||1;return isNaN(g)||g<=0?(O.addChatMessage("","Usage: /give <typeId> [count]",!0),!0):(Cn(g,M),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`Gave ${M}x item ${g}`,!0),!0)}if(n==="/time"){const g=(l=e[1])==null?void 0:l.toLowerCase();return g==="day"?(We=.3,O.addChatMessage("","Set time to day",!0),!0):g==="night"?(We=0,O.addChatMessage("","Set time to night",!0),!0):g==="sunrise"?(We=.22,O.addChatMessage("","Set time to sunrise",!0),!0):g==="sunset"?(We=.75,O.addChatMessage("","Set time to sunset",!0),!0):(O.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const g=parseFloat(e[1]??"0"),M=parseFloat(e[2]??"0");return!isNaN(g)&&!isNaN(M)?(A.spawnAt(g,M),O.addChatMessage("",`Teleported to ${g.toFixed(1)}, ${M.toFixed(1)}`,!0)):O.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return O.showCraftingUI(),!0;if(n==="/weather"){const g=(h=e[1])==null?void 0:h.toLowerCase();return g==="clear"||g==="rain"||g==="thunder"?(Ri.setWeather(g),O.addChatMessage("",`Weather set to ${g}`,!0),!0):(O.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const g=(d=e[1])==null?void 0:d.toLowerCase();return g==="enter"?(ts=!0,A.spawnAt(A.position.x,A.position.z),A.position.y=30,Zt.fog.color.copy(new yt(16729088)),De.setClearColor(2228224),wo.mesh.visible=!1,O.addChatMessage("","Entered the Nether!",!0),!0):g==="exit"?(ts=!1,A.spawnAt(A.position.x,A.position.z),Zt.fog.color.copy(new yt(8900331)),wo.mesh.visible=!0,O.addChatMessage("","Exited the Nether!",!0),!0):(O.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return qn=St==null?void 0:St.spawnAt("enderdragon",A.position.x,A.position.y+15,A.position.z-20),O.addChatMessage("","☠ The Ender Dragon awakens!",!0),O.showBossBar("Ender Dragon",(qn==null?void 0:qn.maxHealth)??200,200),!0;if(n==="/achievements")return Un.getAll().forEach(g=>{O.addChatMessage("",`${g.unlocked?"✅":"⬜"} ${g.icon} ${g.name}: ${g.description}`,!0)}),!0;if(n==="/save")return sn?(bt.saveToStorage({inventory:[...Ht],invCount:[...$t],px:A.position.x,py:A.position.y,pz:A.position.z,health:A.health,hunger:pe,xp:Rn,xpLevel:Be,dayCount:zn}),O.addChatMessage("","World saved!",!0)):O.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if(sn){const g=bt.loadFromStorage();if(g){for(let M=0;M<36;M++)Ht[M]=g.inventory[M]??0,$t[M]=g.invCount[M]??0;A.position.set(g.px,g.py,g.pz),A.health=g.health,pe=g.hunger,Rn=g.xp,Be=g.xpLevel,zn=g.dayCount,O.updateHearts(A.health,A.maxHealth),O.updateHunger(pe,nn),O.updateXP(Rn,Be),O.updateDayCounter(zn),O.updateHotbarFromInventory(Ht,$t)}O.addChatMessage("","World loaded!",!0)}else O.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const g=(p=e[1])==null?void 0:p.toLowerCase();if(g==="wolf"||g==="cat"){const M=(St==null?void 0:St.getMobsByType(g))??[];for(const{id:f,mob:u}of M)if(A.position.distanceTo(u.group.position)<=5)return u.data.state="tamed",O.addChatMessage("",`Tamed a ${g}!`,!0),Tt.play("eat"),!0;O.addChatMessage("",`No ${g} found nearby`,!0)}else O.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const g=mn.getAll();return O.addChatMessage("","--- Statistics ---",!0),O.addChatMessage("",`Kills: ${g.kills}`,!0),O.addChatMessage("",`Deaths: ${g.deaths}`,!0),O.addChatMessage("",`Blocks Placed: ${g.blocksPlaced}`,!0),O.addChatMessage("",`Blocks Broken: ${g.blocksBroken}`,!0),O.addChatMessage("",`Mobs Killed: ${g.mobsKilled}`,!0),O.addChatMessage("",`Distance Traveled: ${g.distanceTraveled.toFixed(1)}m`,!0),O.addChatMessage("",`Play Time: ${Math.floor(g.playTime/60)}m ${Math.floor(g.playTime%60)}s`,!0),!0}if(n==="/summon"){const g=(x=e[1])==null?void 0:x.toLowerCase();if(!g)return O.addChatMessage("","Usage: /summon <mobType>",!0),!0;const M=A.position.x+(Math.random()-.5)*4,f=A.position.z+(Math.random()-.5)*4,u=A.position.y;return St==null||St.spawnAt(g,M,u,f),O.addChatMessage("",`Summoned ${g}`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/give <typeId> [count]","/god - toggle creative/survival","/spawn - teleport to world spawn","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/summon <mobType> - summon a mob near you","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(g=>O.addChatMessage("",g,!0)),!0):(O.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const xy=document.getElementById("loginScreen"),jr=document.getElementById("nameInput"),vy=document.getElementById("playBtn");{const o=document.getElementById("buildStamp");o&&(o.textContent="build: 2026-04-02 20:46 UTC")}const $c=document.getElementById("hud"),_y=document.getElementById("underwaterOverlay");let ui=!1,xo=15,gc=0;const _d=55;let $r=96,vo=500,xc=0,vc=0;const yy=2,My=20,yd=new yt(670820),Md=document.getElementById("portalOverlay");let Yn=0,ts=!1;const by=new yt(3344392),bu=6;function Ey(o,t,e){let n=-1;const i=bu;for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)for(let r=-i;r<=i;r++){const c=Math.floor(o)+s,l=Math.floor(t)+a,h=Math.floor(e)+r;if(bt.getBlockType(c,l,h)===73){const d=Math.sqrt(s*s+a*a+r*r);(n<0||d<n)&&(n=d)}}return n}const Eu=document.getElementById("damageFlash"),Sy=document.getElementById("speedLines"),bd=document.getElementById("compassLabel"),wi=document.getElementById("minimap"),Ed=document.getElementById("lowHealthVignette");let Or=0,Sd=40;function wy(){Eu.style.opacity="1",Or=.15}function Ty(o,t,e){if(Or>0&&(Or-=o,Or<=0&&(Eu.style.opacity="0")),t<Sd&&wy(),Sd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;Ed.style.opacity=String(i)}else Ed.style.opacity="0"}const Ay=document.getElementById("crosshair"),_c=document.getElementById("breakProgress");let wd=!1;function Cy(o){const t=o>0;if(t!==wd&&(Ay.classList.toggle("breaking",t),wd=t),t){const e=Math.floor(o*360);_c.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,_c.style.opacity="1"}else _c.style.opacity="0"}async function al(o){var p,x,g,M;Pi=o.trim()||`Player${Math.floor(Math.random()*999)}`,sn=(((p=window.__getSelectedMode)==null?void 0:p.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),s=document.getElementById("playBtn");if(s.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await Jx(),n.style.width="40%",i.textContent="Generating world...",!bt){const f=((g=(x=document.getElementById("seedInput"))==null?void 0:x.value)==null?void 0:g.trim())||String(Date.now());let u=0;for(let E=0;E<f.length;E++)u=u*31+f.charCodeAt(E)>>>0;window.__worldSeed=u%1e5/1e5,bt=new Fc(Zt),A=new Gc(Ie,bt,Zt),Zt.add(Ie),nd()&&(mo=new Bv(A.getKeys(),()=>A.breakBlockNow(),()=>A.placeBlockNow()),mo.onLookDelta=(E,v)=>{A.yaw-=E*.004,A.pitch-=v*.004,A.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,A.pitch))},mo.hide())}if(n.style.width="70%",await new Promise(f=>setTimeout(f,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(f=>setTimeout(f,150)),n.style.width="100%",xy.style.display="none",$c.style.display="block",mo&&mo.show(),sn){const f=bt.loadFromStorage();if(bt.initializeTorchLights(),f){for(let u=0;u<36;u++)Ht[u]=f.inventory[u]??0,$t[u]=f.invCount[u]??0;A.health=f.health,pe=f.hunger,Rn=f.xp,Be=f.xpLevel,zn=f.dayCount,setTimeout(()=>{A.position.set(f.px,f.py,f.pz),O.updateHearts(A.health,A.maxHealth),O.updateHunger(pe,nn),O.updateXP(Rn,Be),O.updateDayCounter(zn),O.updateHotbarFromInventory(Ht,$t)},100)}}{let f=0,u=0,E=9999;for(let v=-5;v<=5&&E===9999;v++)for(let b=-5;b<=5&&E===9999;b++){const T=v*16,S=b*16,C=bt.getSurfaceHeight(T,S);C>=63&&C<=80&&(E=C,f=T,u=S)}if(E===9999)for(let v=-5;v<=5;v++)for(let b=-5;b<=5;b++){const T=v*16,S=b*16,C=bt.getSurfaceHeight(T,S);C>62&&C<E&&(E=C,f=T,u=S)}A.spawnAt(f,u)}nd()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>Tt.startAmbientMusic("day"),3e3),A.onHealthChanged=f=>O.updateHearts(f,A.maxHealth),A.setDeathCause=f=>{jn=f},A.onDied=()=>{mn.increment("deaths"),Nn.copy(A.position);const f=document.getElementById("screenFade");f.style.background="rgba(80,0,0,0.7)",f.style.transition="opacity 0.8s ease",f.style.opacity="1",setTimeout(()=>{O.showDeath(jn,Nn.x,Nn.y,Nn.z,Be),f.style.opacity="0"},600),O.addChatMessage("","☠ You died!",!0),Tt.play("hurt")},A.onOpenChat=()=>{O.openChatInput(),A.setChatOpen(!0)},Un.onUnlock=f=>{O.showAchievement(f.name,f.description,f.icon),Tt.play("eat")};{const f=[],u=new gn(.15,6,6),E=new xe({color:15658751}),v=new xe({color:15786176});document.addEventListener("mousedown",b=>{if(!document.pointerLockElement||O.isChatOpen()||b.button!==2)return;const T=A.selectedBlockType;if(T!==89&&T!==90||!An(T,1))return;const S=T===89?E:v,C=new Wt(u,S);C.position.copy(A.position).add(new B(0,.6,0));const U=new B(0,0,-1).applyAxisAngle(new B(1,0,0),A.camera.rotation.x).applyAxisAngle(new B(0,1,0),A.camera.rotation.y);Zt.add(C),f.push({mesh:C,vel:U.multiplyScalar(25),life:5,isMob:!1}),O.updateHotbarFromInventory(Ht,$t)}),window.__tickThrowables=b=>{for(let T=f.length-1;T>=0;T--){const S=f[T];if(S.life-=b,S.vel.y-=15*b,S.mesh.position.addScaledVector(S.vel,b),St)for(const R of St.iterMobs()){if(!R.mob.alive)continue;const F=S.mesh.position.x-R.mob.targetPos.x,V=S.mesh.position.y-R.mob.targetPos.y,j=S.mesh.position.z-R.mob.targetPos.z;if(F*F+V*V+j*j<1){R.mob.health-=3,R.mob.showDamage(R.mob.health),R.mob.health<=0&&R.mob.die(),Tt.play("hit"),S.life=0;break}}const C=Math.round(S.mesh.position.x),U=Math.round(S.mesh.position.y),w=Math.round(S.mesh.position.z);bt.getBlock(C,U,w)&&(S.life=0),S.life<=0&&(Zt.remove(S.mesh),f.splice(T,1))}}}{let f=!1;document.addEventListener("mousedown",u=>{!document.pointerLockElement||O.isChatOpen()||u.button!==2||A.selectedBlockType!==124||(f=!0,Ie.fov=10,Ie.updateProjectionMatrix(),O.addChatMessage("","🔭 Spyglass: zoomed in",!0))}),document.addEventListener("mouseup",u=>{u.button===2&&f&&(f=!1,Ie.fov=75,Ie.updateProjectionMatrix())})}document.addEventListener("mousedown",f=>{!document.pointerLockElement||O.isChatOpen()||f.button!==2||A.selectedBlockType!==127||(Nn.x!==0||Nn.z!==0?O.addChatMessage("",`💀 Last death: (${Math.round(Nn.x)}, ${Math.round(Nn.y)}, ${Math.round(Nn.z)})`,!0):O.addChatMessage("","💀 No death recorded yet.",!0))}),document.addEventListener("mousedown",f=>{!document.pointerLockElement||O.isChatOpen()||f.button!==2||A.selectedBlockType!==126||([261.63,329.63,392,523.25].forEach((u,E)=>{setTimeout(()=>Tt.playNote(u),E*120)}),O.addChatMessage("","📯 Horn call!",!0))});{let f=!1;document.addEventListener("mousedown",u=>{if(!(!document.pointerLockElement||O.isChatOpen())&&!(u.button!==2||A.selectedBlockType!==123)){if(!f){f=!0,O.addChatMessage("","⚔ Crossbow loaded!",!0),Tt.play("place");return}f=!1;for(let E=-1;E<=1;E++){const v=E*.06,b=new B(v,0,-1).applyAxisAngle(new B(1,0,0),A.camera.rotation.x).applyAxisAngle(new B(0,1,0),A.camera.rotation.y).normalize(),T=new Wt(new Vr(.03,.03,.5,4),new xe({color:8939059}));T.position.copy(A.position).add(new B(0,.6,0)),Zt.add(T),Qi.push({mesh:T,vel:b.multiplyScalar(28),life:8,stuck:!1})}Tt.play("place")}})}{const f=[],u=new Vr(.04,.1,1.2,5),E=new xe({color:4491400});document.addEventListener("mousedown",v=>{if(!document.pointerLockElement||O.isChatOpen()||v.button!==2||A.selectedBlockType!==122)return;const b=new B(0,0,-1).applyAxisAngle(new B(1,0,0),A.camera.rotation.x).applyAxisAngle(new B(0,1,0),A.camera.rotation.y),T=new Wt(u,E);T.position.copy(A.position).add(new B(0,.6,0)),Zt.add(T),f.push({mesh:T,vel:b.multiplyScalar(35),life:6,returning:!1})}),window.__tickTridents=v=>{for(let b=f.length-1;b>=0;b--){const T=f[b];if(T.life-=v,T.returning){const S=A.position.clone().add(new B(0,.6,0)).sub(T.mesh.position),C=S.length();C<1.5?(Zt.remove(T.mesh),f.splice(b,1)):T.mesh.position.addScaledVector(S.normalize(),Math.min(30*v,C))}else{if(T.vel.y-=10*v,T.mesh.position.addScaledVector(T.vel,v),St)for(const w of St.iterMobs()){if(!w.mob.alive)continue;const R=T.mesh.position.x-w.mob.targetPos.x,F=T.mesh.position.y-w.mob.targetPos.y,V=T.mesh.position.z-w.mob.targetPos.z;if(R*R+F*F+V*V<1.5){w.mob.health-=9,w.mob.showDamage(w.mob.health),w.mob.health<=0&&w.mob.die(),Tt.play("hit"),T.returning=!0;break}}const S=Math.round(T.mesh.position.x),C=Math.round(T.mesh.position.y),U=Math.round(T.mesh.position.z);bt.getBlock(S,C,U)&&(T.returning=!0),T.life<3&&(T.returning=!0)}T.life<=0&&(Zt.remove(T.mesh),f.splice(b,1))}}}A.onRightClick=()=>{if(A.selectedBlockType===33){if(Ne){if(Zt.remove(Ne.mesh),Ne.inWater){const f=["Salmon","Cod","Tropical Fish","Pufferfish"],u=f[Math.floor(Math.random()*f.length)];O.addChatMessage("",`You caught a ${u}!`,!0),pe=Math.min(nn,pe+2),O.updateHunger(pe,nn),Tt.play("eat"),Un.trigger("fish_catch")}Ne=null}else{const f=Sr.set(0,0,-1).applyAxisAngle(Tr,A.camera.rotation.x).applyAxisAngle(Ar,A.camera.rotation.y),u=new Wt(dy,uy);u.position.copy(A.position),u.position.y+=.6,Zt.add(u),Ne={mesh:u,vel:f.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},A.onBreakBlock=(f,u,E)=>{const v=bt.getBlock(f,u,E);if(!v)return;const T={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[v.type];if(T){const S=Math.random();if(!T.chance||S<T.chance){const C=Array.isArray(T.count)?Math.floor(Math.random()*(T.count[1]-T.count[0]+1))+T.count[0]:T.count;Cn(T.item,C),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`+ ${C}x ${Qe(T.item)}`,!0)}}if(mn.increment("blocksBroken"),Un.trigger("first_block"),v.type===24){let S=0;const C=setInterval(()=>{if(S%2===0&&Ae.burst(f,u,E,24),S++,S>8){clearInterval(C),Ae.explosion(f,u,E,30);const U=5,w=U*U;for(let j=-U;j<=U;j++)for(let z=-U;z<=U;z++)for(let q=-U;q<=U;q++)if(j*j+z*z+q*q<=w){const Z=Math.round(f)+j,Q=Math.round(u)+z,it=Math.round(E)+q,st=bt.getBlock(Z,Q,it);st&&(bt.removeBlock(Z,Q,it),Ae.burst(Z,Q,it,st.type))}const R=A.position.x-f,F=A.position.y-u,V=A.position.z-E;R*R+F*F+V*V<49&&A.gameMode==="survival"&&(A.takeDamage(6),O.updateHearts(A.health,A.maxHealth)),Tt.play("break")}},500);return}v.type===56&&bt.removeTorchLight(f,u,E),v.type===59&&bt.deactivateLamp(f,u,E),Ae.burst(f,u,E,v.type),Tt.play("break"),ce==null||ce.sendRemoveBlock(f,u,E)},A.onPlaceBlock=(f,u,E,v)=>{mn.increment("blocksPlaced"),v===56&&bt.addTorchLight(f,u+.5,E),Ae.placeEffect(f,u,E,v),Tt.play("place"),ce==null||ce.sendAddBlock(f,u,E,v)},Yc.onCollect=f=>{Rn+=f;const u=Be;for(;Rn>=(Be+1)*10;)Be++;O.updateXP(Rn,Be),Be>u&&(Tt.play("eat"),O.addChatMessage("",`Level Up! Level ${Be}`,!0),Be>=5&&Un.trigger("level_five"))},O.onEnchant=f=>{Be>=3?(Be-=3,Rn-=3*10,O.updateXP(Rn,Be),f==="sharpness"?(pn.sharpness=1,O.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):f==="protection"?(pn.protection=1,O.addChatMessage("","Applied Protection I (+3 armor)!",!0)):f==="speed"&&(pn.speed=1,A.speedBonus=.2,O.addChatMessage("","Applied Speed I (+20% movement)!",!0)),Tt.play("eat")):O.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",f=>{var b;if(!document.pointerLockElement)return;if(f.button===2){const S={69:"disc_green",70:"disc_red",71:"disc_blue"}[A.selectedBlockType];S&&(Tt.isMusicPlaying()?Tt.stopMusic():Tt.playMusic(S));return}if(f.button!==0)return;if(A.selectedBlockType===32){const T=Sr.set(0,0,-1).applyAxisAngle(Tr,A.camera.rotation.x).applyAxisAngle(Ar,A.camera.rotation.y),S=new Wt(yu,Mu);S.position.copy(A.position),S.position.y+=.6,Zt.add(S),Qi.push({mesh:S,vel:T.multiplyScalar(30),life:10}),Tt.play("hit");return}Ci.setFromCamera(fd,Ie);const E=({268:0,272:2,267:4,276:7,122:9,270:0,274:1,257:3,278:6,271:1,275:3,258:5,279:8}[A.selectedBlockType]??0)+(Le.strength>0?4:0),v=St==null?void 0:St.tryAttack(Ci,pn,E);if(v){Tt.play("hit"),Un.trigger("first_mob");const T=St==null?void 0:St.getMob(v.mobId);if(T&&T.type==="bee"){const C=(b=St.mobs)==null?void 0:b.get(v.mobId);C&&(C.aggro=!0)}if(ic[A.selectedBlockType]){const C=c;Ls[C]===void 0&&(Ls[C]=ic[A.selectedBlockType]),Ls[C]=Math.max(0,(Ls[C]??ic[A.selectedBlockType])-1),Ls[C]===0&&(O.addChatMessage("",`⚠ Your ${Qe(A.selectedBlockType)} broke!`,!0),Ht[C]=0,$t[C]=0,Ls[C]=0,O.updateHotbarFromInventory(Ht,$t))}const S=St==null?void 0:St.getMob(v.mobId);if(S&&!S.alive){Xr.spawnFromMob(S.type,S.targetPos.x,S.targetPos.y,S.targetPos.z);const C={pig:3,chicken:2,cow:5,sheep:3,warden:50,allay:5,frog:3,strider:4,axolotl:6,pillager:10,drowned:8,husk:8,stray:10,ravager:20,bat:0,enderman:12,blaze:10,ghast:5,irongolem:25,snowgolem:3,vindicator:10,vex:3,zoglin:10,hoglin:8,piglin:5,fox:2,panda:3,ocelot:2,mooshroom:5,llama:4,bee:5,polarbear:10,dolphin:8,squid:3,turtle:4,zombievillager:5,wanderingtrader:0,giant:50,zombiehorse:3,skeletonhorse:3,magmacube:4,silverfish:5,elderguardian:50,witch:10,evoker:20,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0,irongolem:10,snowgolem:5,magmacube:4,silverfish:5,elderguardian:10,witch:5,evoker:10,zombievillager:5,wanderingtrader:0,giant:20,zombiehorse:3,skeletonhorse:3},U=S.type.toLowerCase(),w=C[U]||1;Yc.spawn(S.targetPos.x,S.targetPos.y,S.targetPos.z,w),S.type==="zombie"&&Un.trigger("kill_zombie"),S.type==="creeper"&&Un.trigger("kill_creeper"),S.type==="enderdragon"&&Un.trigger("kill_dragon"),mn.recordMobKill(S.type),O.addKillFeedDeath(S.type)}sn||ce==null||ce.sendAttackMob(v.mobId,v.damage)}}),document.addEventListener("mousedown",f=>{f.button===2&&A.selectedBlockType===72&&(f.preventDefault(),Ir=!0,Ie.fov=65,Ie.updateProjectionMatrix())}),document.addEventListener("mouseup",f=>{f.button===2&&(Ir=!1,Ie.fov=75,Ie.updateProjectionMatrix())}),document.addEventListener("contextmenu",f=>{document.pointerLockElement&&f.preventDefault()}),document.addEventListener("keydown",f=>{if(f.key==="e"||f.key==="E"){if(!document.pointerLockElement||O.isChatOpen())return;f.preventDefault();const u=Sr.set(0,0,-1).applyAxisAngle(Tr,A.camera.rotation.x).applyAxisAngle(Ar,A.camera.rotation.y).normalize(),E=bt.raycastBlock(A.position,u,5);if(E){const v=bt.getBlock(E.x,E.y,E.z);if(v&&v.type===40)if(Be>=5){O.showEnchantUI(Be);return}else{O.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(v&&v.type===118){const b=localStorage.getItem("mc_ender_chest")??"[]",T=JSON.parse(b).length===27?JSON.parse(b):new Array(27).fill(0),S=Ht.slice(0,9);O.showChestUI(T,S),O.onChestClose=()=>{localStorage.setItem("mc_ender_chest",JSON.stringify(T))},Tt.play("place");return}if(v&&v.type===125){O.showInventory(Ht),qi=!0,document.exitPointerLock(),O.addChatMessage("","🎒 Bundle contents:",!0);const b=Ht.filter(T=>T>0);b.length===0?O.addChatMessage("","(empty)",!0):b.forEach(T=>O.addChatMessage("",`  ${Qe(T)}`,!0));return}if(v&&v.type===120){`${E.x}${E.y}${E.z}`,window.__respawnAnchor={x:E.x,y:E.y+1,z:E.z},O.addChatMessage("",`⚓ Respawn anchor set at (${E.x}, ${E.y}, ${E.z})`,!0),Tt.play("place");return}if(v&&v.type===112){const b=Math.sqrt((A.position.x-E.x)**2+(A.position.z-E.z)**2),T=Math.round(Math.max(0,15-b));O.addChatMessage("",`📡 Sculk Sensor: vibration strength ${T}/15`,!0),Tt.playNote(220+T*20);return}if(v&&v.type===114){Ri.isRaining()?(Cn(7,1),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("","🪣 Collected rain water from cauldron!",!0)):O.addChatMessage("","🪣 Cauldron is empty. Place outside during rain to fill.",!0);return}if(v&&v.type===115){O.addChatMessage("","🧵 Loom: No banner crafting implemented yet (place wool + dye).",!0);return}if(v&&v.type===116){const b={270:{to:274,needs:11,name:"Stone Pickaxe"},268:{to:272,needs:11,name:"Stone Sword"},274:{to:257,needs:62,name:"Iron Pickaxe"},272:{to:267,needs:62,name:"Iron Sword"},257:{to:278,needs:65,name:"Diamond Pickaxe"},267:{to:276,needs:65,name:"Diamond Sword"},278:{to:278,needs:117,name:"Netherite Pickaxe"},276:{to:276,needs:117,name:"Netherite Sword"}},T=A.selectedBlockType,S=b[T];S&&ei(S.needs)>=2?(An(T,1),An(S.needs,2),Cn(S.to,1),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`⚒ Upgraded to ${S.name}!`,!0)):S?O.addChatMessage("",`Need 2x ${Qe(S.needs)} to upgrade.`,!0):O.addChatMessage("","Hold a wooden/stone tool to upgrade it.",!0);return}if(v&&v.type===110){Tt.playNote(523.25),O.addChatMessage("","🔲 Click!",!0);return}if(v&&v.type===111){const b=Math.round(Math.sin(We*Math.PI)*15);O.addChatMessage("",`☀ Daylight sensor: light level ${Math.max(0,b)}/15`,!0);return}if(v&&v.type===107){pn.sharpness=0,pn.protection=0,pn.speed=0,A.speedBonus=Le.speed>0?.3:0,O.addChatMessage("","⚙ Grindstone removed all enchantments.",!0),Tt.play("break");return}if(v&&v.type===108){const b={3:{output:3,count:2,name:"2x Stone"},11:{output:81,count:4,name:"4x Stone Bricks"},81:{output:82,count:1,name:"1x Mossy Stone Bricks"},49:{output:3,count:1,name:"1x Stone"}},T=A.selectedBlockType,S=b[T];if(S&&An(T,1))Cn(S.output,S.count),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`🪨 Stonecutter: ${Qe(T)} → ${S.name}`,!0);else{const C=Object.keys(b).map(U=>Qe(parseInt(U))).join(", ");O.addChatMessage("",`Hold a stone type to cut. (${C})`,!0)}return}if(v&&v.type===100){const b=`${E.x},${E.y},${E.z}`,T=window.__noteBlockPitch=window.__noteBlockPitch??{};T[b]=((T[b]??0)+1)%25;const S=261.63*Math.pow(2,(T[b]-12)/12);Tt.playNote(S),O.addChatMessage("",`🎵 Note: ${T[b]+1}/25`,!0);return}if(v&&v.type===99){const b=[{ingredient:64,base:0,output:91,name:"Strength Potion"},{ingredient:12,base:0,output:92,name:"Speed Potion"},{ingredient:2,base:0,output:96,name:"Night Vision Potion"},{ingredient:20,base:0,output:97,name:"Jump Boost Potion"},{ingredient:3,base:0,output:98,name:"Resistance Potion"}],T=b.map((C,U)=>`${U+1}. ${C.name} (needs 1x ${Qe(C.ingredient)})`).join(`
`),S=window.prompt(`Brewing Stand
Choose recipe:
${T}

Enter number (or cancel):`,"");if(S){const C=parseInt(S)-1,U=b[C];U&&(ei(U.ingredient)<1?O.addChatMessage("",`Need 1x ${Qe(U.ingredient)} to brew!`,!0):(An(U.ingredient,1),Cn(U.output,1),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`🧪 Brewed: ${U.name}!`,!0),Tt.play("eat")))}return}if(v&&v.type===94){const b=A.selectedBlockType;if(b>0&&ei(b)>0){const T=Qe(b),S=window.prompt(`Rename item (${T}):`,T);S&&S.trim()&&O.addChatMessage("",`✏️ Renamed "${T}" → "${S.trim()}" (cosmetic)`,!0)}else O.addChatMessage("","Hold an item in hand to rename it at the anvil.",!0);return}if(v&&v.type===34){We>.7||We<.25?(O.addChatMessage("","Sleeping...",!0),We=.25,A.health=Math.min(A.maxHealth,A.health+3),pe=Math.min(nn,pe+4),O.updateHearts(A.health,A.maxHealth),O.updateHunger(pe,nn),Tt.play("eat"),setTimeout(()=>{O.addChatMessage("","You woke up!",!0)},2e3)):O.addChatMessage("","You can only sleep at night!",!0);return}}if(St){Ci.far=3,Ci.setFromCamera(fd,Ie);const v=St.getAllMobsForDisplay(),b=[];for(const{id:C,mob:U}of v)(U.type==="villager"||U.type==="wanderingtrader")&&U.group.traverse(w=>{w.isMesh&&b.push({mesh:w,mobId:C,type:U.type})});const T=b.map(C=>C.mesh),S=Ci.intersectObjects(T);if(S.length>0){const C=S[0],U=b.find(w=>w.mesh===C.object);if(U){if(Ci.far=5,U.type==="wanderingtrader"){const R=[{give:"emerald",giveName:"1 Emerald",receive:"diamond",receiveName:"1 Diamond",giveType:0,giveCount:1,recvType:65},{give:"wheat",giveName:"5 Wheat",receive:"emerald",receiveName:"1 Emerald",giveType:45,giveCount:5,recvType:0},{give:"emerald",giveName:"1 Emerald",receive:"ender_pearl",receiveName:"1 Ender Pearl",giveType:0,giveCount:1,recvType:0},{give:"iron",giveName:"3 Iron Ingot",receive:"emerald",receiveName:"1 Emerald",giveType:62,giveCount:3,recvType:0},{give:"emerald",giveName:"1 Emerald",receive:"golden_apple",receiveName:"1 Golden Apple",giveType:0,giveCount:1,recvType:0}].sort(()=>Math.random()-.5).slice(0,3),F=R.map(V=>({give:V.give,giveName:V.giveName,receive:V.receive,receiveName:V.receiveName}));O.showTradeUI(F),O.onTrade=V=>{const j=R[V];j&&(j.giveType>0&&An(j.giveType,j.giveCount)?(j.recvType>0&&Cn(j.recvType,1),O.addChatMessage("",`Trade: gave ${j.giveName}, received ${j.receiveName}!`,!0),Tt.play("place")):j.giveType===0?(j.recvType>0&&Cn(j.recvType,1),O.addChatMessage("",`Trade: gave ${j.giveName}, received ${j.receiveName}!`,!0),Tt.play("place")):O.addChatMessage("",`Need ${j.giveName} to trade!`,!0))}}else{const w=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];O.showTradeUI(w),O.onTrade=R=>{const F=w[R];if(!F)return;const V={0:45,1:14,2:5,3:39},j={0:5,1:3,2:10,3:1},z={0:0,1:36,2:33,3:46},q=V[R],Z=j[R],Q=z[R];q&&An(q,Z)?(Q>0&&Cn(Q,1),O.addChatMessage("",`Trade: gave ${F.giveName}, received ${F.receiveName}!`,!0),Tt.play("place")):O.addChatMessage("",`Need ${F.giveName} to trade!`,!0)}}return}}Ci.far=5}qi?(O.hideInventory(),qi=!1,document.body.requestPointerLock()):(O.showInventory(Ht),qi=!0,document.exitPointerLock())}}),document.addEventListener("keydown",f=>{f.key==="Tab"&&document.pointerLockElement&&!O.isChatOpen()&&(f.preventDefault(),qi?(O.hideInventory(),qi=!1,document.body.requestPointerLock()):(O.showInventory(Ht),qi=!0,document.exitPointerLock()))}),document.addEventListener("keydown",f=>{(f.key==="o"||f.key==="O")&&document.pointerLockElement&&!O.isChatOpen()&&(f.preventDefault(),O.isScoreboardOpen()?(O.hideScoreboard(),document.body.requestPointerLock()):(O.showScoreboard(mn.getAll(),zn),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",f=>{(f.key==="F1"||f.key==="f1")&&(f.preventDefault(),a=!a,a?O.showHUD():O.hideHUD())}),document.addEventListener("keydown",f=>{if(f.key==="F2"||f.key==="f2"){f.preventDefault();try{const u=De.domElement.toDataURL("image/png"),E=document.createElement("a");E.href=u,E.download="minecraft-"+Date.now()+".png",E.click(),O.addChatMessage("","Screenshot saved!",!0)}catch{O.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("mousedown",f=>{if(f.button!==1||!document.pointerLockElement||A.gameMode!=="creative")return;f.preventDefault();const u=A.getTargetBlockType();if(u&&u>0){let E=Ht.findIndex((v,b)=>v===u&&b<9);E<0&&(E=c,Ht[E]=u,$t[E]=64,O.updateHotbarFromInventory(Ht,$t)),l(E)}});{let f=!1,u=null;document.addEventListener("keydown",E=>{var v;if((E.key==="p"||E.key==="P")&&!O.isChatOpen()){if(f&&u){u.remove(),u=null,f=!1,document.pointerLockElement===null&&document.body.requestPointerLock();return}document.exitPointerLock(),f=!0,u=document.createElement("div"),u.style.cssText=`position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);
          background:#2a2a2a;border:2px solid #555;padding:20px;z-index:2000;border-radius:6px;
          color:#eee;font-family:monospace;min-width:260px;`,u.innerHTML=`<h3 style="margin:0 0 14px;color:#ffdd44;text-align:center">⚙ Settings</h3>
          <label>SFX Volume: <input type="range" id="sfxVol" min="0" max="100" value="${Math.round(Tt.sfxVolume*100)}" style="width:120px"></label><br><br>
          <label>Music Volume: <input type="range" id="musVol" min="0" max="100" value="${Math.round(Tt.musicVolume*100)}" style="width:120px"></label><br><br>
          <label>View Distance: <input type="range" id="fogDist" min="32" max="192" step="16" value="${$r}" style="width:120px"></label><br><br>
          <button id="closeSettings" style="width:100%;padding:8px;background:#555;color:#eee;border:none;border-radius:3px;cursor:pointer;">Close [P]</button>`,document.body.appendChild(u),document.getElementById("sfxVol").addEventListener("input",b=>{Tt.sfxVolume=parseInt(b.target.value)/100}),document.getElementById("musVol").addEventListener("input",b=>{Tt.musicVolume=parseInt(b.target.value)/100}),document.getElementById("fogDist").addEventListener("input",b=>{$r=parseInt(b.target.value)}),(v=document.getElementById("closeSettings"))==null||v.addEventListener("click",()=>{u==null||u.remove(),u=null,f=!1,document.body.requestPointerLock()})}})}document.addEventListener("keydown",f=>{if((f.key==="r"||f.key==="R")&&document.pointerLockElement&&!O.isChatOpen())if(St!=null&&St.mountedMobId)St.dismount(),A.speedBonus=pn.speed>0?.2:0,O.addChatMessage("","Dismounted.",!0);else{if(ei(93)<1){O.addChatMessage("","You need a saddle to ride!",!0);return}(St==null?void 0:St.tryMount(A.position))&&(A.speedBonus=1,O.addChatMessage("","Mounted! R to dismount.",!0))}}),document.addEventListener("keydown",f=>{(f.key==="F3"||f.key==="f3")&&(f.preventDefault(),Dr=!Dr,Dr?O.showDebugScreen():O.hideDebugScreen())}),document.addEventListener("keydown",f=>{(f.key==="F4"||f.key==="f4")&&(f.preventDefault(),A.gameMode==="spectator"?(A.setGameMode("survival"),O.setGameMode("survival"),pe=nn,O.updateHunger(pe,nn),O.addChatMessage("","Returned to Survival mode",!0),ce==null||ce.sendGameMode("survival")):(A.setGameMode("spectator"),O.setGameMode("spectator"),O.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),ce==null||ce.sendGameMode("spectator")))}),O.onChestTransfer=(f,u,E,v)=>{if(f){const b=E[u];if(!b)return;const T=v.indexOf(0);if(T>=0){v[T]=b,E[u]=0;for(let S=0;S<v.length&&S<Xi.length;S++)Xi[S]=v[S];O.updateHotbarFromInventory(Xi),Tt.play("place")}else O.addChatMessage("","Hotbar is full!",!0)}else{const b=v[u];if(!b)return;const T=E.indexOf(0);if(T>=0){E[T]=b,v[u]=0;for(let S=0;S<v.length&&S<Xi.length;S++)Xi[S]=v[S];O.updateHotbarFromInventory(Xi),Tt.play("place")}else O.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",f=>{if((f.key==="e"||f.key==="E")&&$c.style.display!=="none"){let u=null;for(let C=-5;C<=5&&!u;C++)for(let U=-5;U<=5&&!u;U++)for(let w=-5;w<=5&&!u;w++){const R=Math.floor(A.position.x)+C,F=Math.floor(A.position.y)+U,V=Math.floor(A.position.z)+w,j=bt.getBlock(R,F,V);j&&(j.type===31||j.type===113||j.type===119)&&A.position.distanceTo(wr.set(R+.5,F+.5,V+.5))<=5&&(u=[R,F,V])}if(u){const C=bt.getChestInventory(u[0],u[1],u[2]),U=Xi.slice(0,9);O.showChestUI(C,U),O.onChestClose=()=>{bt.setChestInventory(u[0],u[1],u[2],C)},Tt.play("place");return}let E=!1;for(let C=-5;C<=5&&!E;C++)for(let U=-5;U<=5&&!E;U++)for(let w=-5;w<=5&&!E;w++){const R=Math.floor(A.position.x)+C,F=Math.floor(A.position.y)+U,V=Math.floor(A.position.z)+w,j=bt.getBlock(R,F,V);j&&j.type===22&&A.position.distanceTo(wr.set(R+.5,F+.5,V+.5))<=5&&(E=!0)}if(E){O.showCraftingUI(),Un.trigger("first_craft"),Tt.play("place");return}let v=null;for(let C=-5;C<=5;C++){for(let U=-5;U<=5;U++){for(let w=-5;w<=5;w++){const R=Math.floor(A.position.x)+C,F=Math.floor(A.position.y)+U,V=Math.floor(A.position.z)+w,j=bt.getBlock(R,F,V);if(j&&j.type===23&&A.position.distanceTo(wr.set(R+.5,F+.5,V+.5))<=5){v=[R,F,V];break}}if(v)break}if(v)break}if(v){O.showSmeltingUI();return}const b=Sr.set(0,0,-1).applyAxisAngle(Tr,A.camera.rotation.x).applyAxisAngle(Ar,A.camera.rotation.y),T=new na(A.position,b);T.far=2;let S=null;for(let C=-2;C<=2;C++){for(let U=-2;U<=2;U++){for(let w=-2;w<=2;w++){const R=Math.floor(A.position.x)+C,F=Math.floor(A.position.y)+U,V=Math.floor(A.position.z)+w,j=bt.getBlock(R,F,V);if(j&&j.type===58&&A.position.distanceTo(wr.set(R+.5,F+.5,V+.5))<=2){S=[R,F,V];break}}if(S)break}if(S)break}S&&(bt.toggleLever(S[0],S[1],S[2]),Tt.play("place"))}}),O.onChat=f=>{f.startsWith("/")?gy(f):sn?O.addChatMessage(Pi,f):ce==null||ce.sendChat(f),A.setChatOpen(!1)},O.onSmelt=(f,u)=>{const E=py.get(f);return E?new Set([64,5,10,280]).has(u)&&ei(u)>0?ei(f)<1?(O.addChatMessage("","No input item to smelt!",!0),null):(An(f,1),An(u,1),Cn(E,1),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`Smelted: ${Qe(E)}`,!0),Tt.play("eat"),E):(O.addChatMessage("","Need fuel (coal, wood) to smelt!",!0),null):null},O.getInvCount=f=>ei(f),O.onInventorySwap=(f,u)=>{const E=Ht[u];Ht[u]=Ht[f],Ht[f]=E;const v=$t[u];$t[u]=$t[f],$t[f]=v,O.updateHotbarFromInventory(Ht,$t)};const r={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},diamond_sword:{ingredients:{65:2,280:1},output:{type:276,count:1}},diamond_pickaxe:{ingredients:{65:3,280:2},output:{type:278,count:1}},diamond_axe:{ingredients:{65:3,280:2},output:{type:279,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},saddle:{ingredients:{95:7},output:{type:93,count:1}},anvil:{ingredients:{62:4},output:{type:94,count:1}},brewing_stand:{ingredients:{62:1,3:3},output:{type:99,count:1}},note_block:{ingredients:{5:8,64:1},output:{type:100,count:1}},campfire:{ingredients:{5:3,64:3,280:3},output:{type:106,count:1}},grindstone:{ingredients:{280:2,11:2,5:1},output:{type:107,count:1}},stonecutter:{ingredients:{62:1,3:3},output:{type:108,count:1}},tripwire_hook:{ingredients:{62:1,280:1},output:{type:109,count:2}},button:{ingredients:{11:1},output:{type:110,count:1}},daylight_sensor:{ingredients:{9:3,64:3},output:{type:111,count:1}},sculk_sensor:{ingredients:{62:2,9:3},output:{type:112,count:1}},barrel:{ingredients:{5:6,280:2},output:{type:113,count:1}},cauldron:{ingredients:{62:7},output:{type:114,count:1}},loom:{ingredients:{5:2,280:2},output:{type:115,count:1}},smithing_table:{ingredients:{62:2,5:4},output:{type:116,count:1}},ender_chest:{ingredients:{18:8,65:1},output:{type:118,count:1}},shulker_box:{ingredients:{31:2,26:4},output:{type:119,count:1}},respawn_anchor:{ingredients:{19:6,65:3},output:{type:120,count:1}},crossbow:{ingredients:{280:3,62:1,280:2},output:{type:123,count:1}},spyglass:{ingredients:{62:1,9:2},output:{type:124,count:1}},bundle:{ingredients:{95:6},output:{type:125,count:1}},recovery_compass:{ingredients:{127:1,39:4},output:{type:39,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};O.onCraft=f=>{const u=r[f];if(!u)return!1;for(const[E,v]of Object.entries(u.ingredients))if(ei(Number(E))<v)return O.addChatMessage("","✗ Not enough materials",!0),!1;for(const[E,v]of Object.entries(u.ingredients))An(Number(E),v);return Cn(u.output.type,u.output.count),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`✓ Crafted ${u.output.count}x ${Qe(u.output.type)}`,!0),!0},O.onRespawn=()=>{const f=document.getElementById("screenFade");f.style.background="#000",f.style.transition="opacity 0.4s ease",f.style.opacity="1",setTimeout(()=>{if(window.__keepInventory!==!0){for(let E=0;E<36;E++)Ht[E]=0,$t[E]=0;Rn=0,Be=0,O.updateHotbarFromInventory(Ht,$t),O.updateXP(0,0)}const u=window.__respawnAnchor;u&&A.position.set(u.x,u.y+1,u.z),A.respawn(),pe=nn,O.updateHearts(A.maxHealth,A.maxHealth),O.updateHunger(pe,nn),ce==null||ce.sendRespawn(),setTimeout(()=>{f.style.transition="opacity 0.6s ease",f.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},O.updateHearts(A.health,A.maxHealth),O.updateHunger(pe,nn),O.setGameMode(A.gameMode);let c=0;const l=f=>{c=(f%8+8)%8,A.selectedBlockType=Ht[c]??0,O.selectSlot(c),O.updateHotbarFromInventory(Ht,$t)};document.addEventListener("wheel",f=>{l(c+(f.deltaY>0?1:-1))}),document.addEventListener("keydown",f=>{const u=parseInt(f.key);u>=1&&u<=8&&l(u-1)});const h={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65,leather:95,copper_ingot:76,potion_strength:91,potion_speed:92,crossbow:123,spyglass:124,bundle:125,goat_horn:126,echo_shard:127,potion_night_vision:96,potion_jump_boost:97,potion_resistance:98,saddle:93,splash_potion_weakness:83,magma_cream:0,prismarine_shard:0,redstone:0,glowstone_dust:19,totem_of_undying:131,rotten_flesh:0,emerald:0,ender_pearl:0,golden_apple:0},d={91:{effect:"strength",duration:30,label:"Strength I (+4 dmg, 30s)"},92:{effect:"speed",duration:30,label:"Speed I (+30% move, 30s)"},96:{effect:"nightVision",duration:60,label:"Night Vision (60s)"},97:{effect:"jumpBoost",duration:30,label:"Jump Boost I (30s)"},98:{effect:"resistance",duration:30,label:"Resistance I (-50% dmg, 30s)"}};if(document.addEventListener("mousedown",f=>{if(!document.pointerLockElement||O.isChatOpen()||f.button!==2)return;const u=d[A.selectedBlockType];u&&An(A.selectedBlockType,1)&&(Le[u.effect]=u.duration,u.effect==="speed"&&(A.speedBonus=Math.max(A.speedBonus,.3)),u.effect==="jumpBoost"&&(A.jumpBonus=4),O.addChatMessage("",`🧪 Drank ${u.label}!`,!0),Tt.play("eat"),O.updateHotbarFromInventory(Ht,$t))}),document.addEventListener("mousedown",f=>{!document.pointerLockElement||O.isChatOpen()||f.button===2&&A.selectedBlockType===83&&St&&An(83,1)&&(St.tryCureZombieVillager(A.position)?O.addChatMessage("","Zombie Villager is being cured... (30s)",!0):O.addChatMessage("","Threw splash potion of weakness.",!0),Tt.play("place"),O.updateHotbarFromInventory(Ht,$t))}),Xr.onPickup=f=>{Tt.play("eat");const u=h[f];u&&u>0?(Cn(u,1),O.updateHotbarFromInventory(Ht,$t),O.addChatMessage("",`+ 1x ${Qe(u)}`,!0)):O.addChatMessage("",`Picked up: ${f}`,!0),f==="iron_helmet"&&(A.armor=Math.min(20,A.armor+5)),f==="iron_chestplate"&&(A.armor=Math.min(20,A.armor+8)),f==="iron_leggings"&&(A.armor=Math.min(20,A.armor+7)),f==="iron_boots"&&(A.armor=Math.min(20,A.armor+4))},sn){O.setConnectionStatus("connected"),O.updatePlayerCount(1),St=new Wr(Zt,bt,{onPlayerDamage:u=>{if(jn="You were killed by a mob",A.gameMode==="survival"){let E=u;const v=window.__difficulty;v==="easy"?E=Math.ceil(E*.5):v==="hard"?E=Math.ceil(E*1.5):v==="peaceful"&&(E=0),pn.protection>0&&(E=Math.max(0,E-3*pn.protection)),Le.resistance>0&&(E=Math.ceil(E*.5)),Ir&&ud>0&&(E=Math.ceil(E*.2),ud--),A.takeDamage(E),Tt.play("hurt"),O.updateHearts(A.health,A.maxHealth),A.health<=0&&(mn.increment("deaths"),O.showDeath(jn,Nn.x,Nn.y,Nn.z,Be))}},getPlayerPos:()=>A.position,onExplosion:(u,E,v,b)=>{const T=b*b;for(let U=-b;U<=b;U++)for(let w=-b;w<=b;w++)for(let R=-b;R<=b;R++)if(U*U+w*w+R*R<=T){const F=Math.round(u)+U,V=Math.round(E)+w,j=Math.round(v)+R,z=bt.getBlock(F,V,j);z&&(bt.removeBlock(F,V,j),Ae.burst(F,V,j,z.type))}Tt.play("break");const S=Math.sqrt((A.position.x-u)**2+(A.position.y-E)**2+(A.position.z-v)**2);S<20&&(Yr=.4,qr=Math.max(.02,.12*(1-S/20)));const C=De.domElement.style.filter;De.domElement.style.filter="brightness(1.3)",setTimeout(()=>{De.domElement.style.filter=C},100)},onWitherEffect:()=>{Mo=pd}},!0),St.onBurnParticle=(u,E,v)=>Ae.magic(u,E,v,1),St.onHuskHunger=()=>{pe=Math.max(0,pe-3),O.updateHunger(pe,nn),O.addChatMessage("","🧟 Husk inflicts hunger!",!0)},St.onPandaSneeze=(u,E,v)=>{Ae.burst(u,E,v,4),Tt.play("eat")};let f=0;St.onDolphinNearby=()=>{ui&&f<=0&&(A.speedBonus=Math.max(A.speedBonus,.2),f=5,O.addChatMessage("","🐬 Dolphin's Grace: swim speed boosted!",!0))},window.__tickDolphinBoost=u=>{f>0&&(f-=u,f<=0&&pn.speed===0&&Le.speed===0&&(A.speedBonus=0))},St.onGhastFireball=(u,E,v)=>{const b=A.position.x-u,T=A.position.z-v;b*b+T*T<15*15&&(Ae.explosion(u,E,v,25),Tt.play("break"))},St.onStrayArrow=()=>{A.speedBonus=Math.max(-.4,A.speedBonus-.4),setTimeout(()=>{A.speedBonus=Math.max(0,A.speedBonus+.4)},5e3),O.addChatMessage("","❄ Stray's arrow inflicts slowness!",!0)},St.onWardenBlind=()=>{De.domElement.style.filter="brightness(0.1)",setTimeout(()=>{De.domElement.style.filter=""},5e3),O.addChatMessage("","⚡ Warden's sonic boom! You're blinded!",!0)},St.onWitchPotion=u=>{u==="damage"?O.addChatMessage("","🧪 Witch throws a harmful potion!",!0):(pe=Math.max(0,pe-3),O.updateHunger(pe,nn),O.addChatMessage("","🧪 Witch's potion drains your hunger!",!0))},St.onZombieVillagerCured=(u,E,v)=>{St.spawnAt("villager",u,E,v),O.addChatMessage("","Zombie Villager has been cured into a Villager!",!0),Tt.play("place")};for(let u=0;u<10;u++)St.spawnRandom(0,0);qc=new $_(bt),O.addChatMessage("",`Welcome, ${Pi}! 🌍 Singleplayer`,!0),O.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0),setTimeout(()=>O.addChatMessage("","💡 WASD=move · Space=jump · E=inventory/interact",!0),3e3),setTimeout(()=>O.addChatMessage("","💡 Left-click=break block · Right-click=place/use",!0),6e3),setTimeout(()=>O.addChatMessage("","💡 Shift=sneak · R=mount horse · Ctrl=sprint",!0),9e3)}else{const f=window.location.protocol==="https:",u=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":f?window.location.hostname:"159.223.140.36:8471",E=((M=window.__getServerAddr)==null?void 0:M.call(window))??u;ce=new N_(Zt,bt,{onStatusChange:v=>O.setConnectionStatus(v),onChat:(v,b,T)=>O.addChatMessage(v,b,T),onPlayerCount:v=>O.updatePlayerCount(v),onPlayerDamage:v=>{A.takeDamage(v),Tt.play("hurt"),O.updateHearts(A.health,A.maxHealth)},onPlayerDied:v=>{O.addChatMessage("",`☠ ${v} was slain!`,!0),v===Pi&&(mn.increment("deaths"),O.showDeath("Killed by another player",A.position.x,A.position.y,A.position.z,Be))}},E),St=new Wr(Zt,bt,{onPlayerDamage:()=>{},getPlayerPos:()=>A.position,onExplosion:(v,b,T,S)=>{const C=S*S;for(let R=-S;R<=S;R++)for(let F=-S;F<=S;F++)for(let V=-S;V<=S;V++)if(R*R+F*F+V*V<=C){const j=Math.round(v)+R,z=Math.round(b)+F,q=Math.round(T)+V,Z=bt.getBlock(j,z,q);Z&&(bt.removeBlock(j,z,q),Ae.burst(j,z,q,Z.type))}Tt.play("break");const U=Math.sqrt((A.position.x-v)**2+(A.position.y-b)**2+(A.position.z-T)**2);U<20&&(Yr=.4,qr=Math.max(.02,.12*(1-U/20)));const w=De.domElement.style.filter;De.domElement.style.filter="brightness(1.3)",setTimeout(()=>{De.domElement.style.filter=w},100)},onWitherEffect:()=>{Mo=pd}},!1),ce.setMobManager(St),ce.setLocalStateGetter(()=>A.getState()),await ce.join(Pi),O.addChatMessage("",`Welcome, ${Pi}! 🌐 Multiplayer`,!0),O.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}vy.addEventListener("click",()=>al(jr.value));jr.addEventListener("keydown",o=>{o.key==="Enter"&&al(jr.value)});const yc=new URLSearchParams(window.location.search).get("name");yc&&(jr.value=yc,setTimeout(()=>al(yc),800));let Td=performance.now(),Mc=0;const Ry=60;new B;const Py=new yt(16777215),Sr=new B,wr=new B,Tr=new B(1,0,0),Ar=new B(0,1,0),Su=20,Ly=Array.from({length:Su},()=>({x:0,z:0,alive:!0})),bc=[],wu=8,Iy=Array.from({length:wu},()=>({x:0,z:0})),Ec=[];function Tu(){var e,n,i,s,a,r,c;requestAnimationFrame(Tu);const o=performance.now(),t=Math.min((o-Td)/1e3,.05);if(Td=o,t>0&&(md[lc]=1/t,lc=(lc+1)%jc,go<jc&&go++),$c.style.display!=="none"&&bt&&A){if(A.update(t),ce==null||ce.updatePlayers(t),sn&&(Mc+=t,Mc>=Ry&&(Mc=0,bt.saveToStorage({inventory:[...Ht],invCount:[...$t],px:A.position.x,py:A.position.y,pz:A.position.z,health:A.health,hunger:pe,xp:Rn,xpLevel:Be,dayCount:zn}))),sn&&bt.generateAroundPlayer(A.position.x,A.position.z),mu||hy(t),!ui&&!ts){if(uc+=t,uc>2){uc=0;const T=bt.getBiome(Math.round(A.position.x),Math.round(A.position.z));T!==fc&&(fc=T)}const v=Zt.fog,b=my[fc];b&&v.color.lerp(b,.08)}if(St&&(St.dayTime=We,St.update(t),St.mountedMobId&&St.updateMount(A.position,A.getYaw(),!0,t)),Ae.update(t),dc+=t,dc>.5){dc=0;const v=(We-.25)*Math.PI*2,b=Math.sin(v);if(b>.2)for(let T=0;T<2;T++){const S=(Math.random()-.5)*16,C=Math.random()*6+1,U=(Math.random()-.5)*16;Ae.dustMote(A.position.x+S,A.position.y+C,A.position.z+U)}else if(b<-.1)for(let T=0;T<3;T++){const S=(Math.random()-.5)*20,C=(Math.random()-.5)*20;Ae.firefly(A.position.x+S,A.position.y-1+Math.random()*3,A.position.z+C)}}Av(o/1e3),bt.updateTorchFlicker(o/1e3);for(const[v]of bt.torchLights){const[b,T,S]=v.split(",").map(Number),C=b-A.position.x,U=S-A.position.z;C*C+U*U>576||(Math.random()<.06&&Ae.spawn(b+(Math.random()-.5)*.1,T+.7,S+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Ae.spawn(b+(Math.random()-.5)*.08,T+.55,S+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(Ri.update(t,A.position,Zt.fog.color),Xr.update(t,A.position),Yc.update(t,A.position),Mo>0&&(Mo-=t),mn.increment("playTime",t),A.velocity&&mn.increment("distanceTraveled",A.velocity.length()*t),ac+=t,ac>=60&&(ac=0,mn.save()),oc+=t,oc>.1&&(oc=0,bt.checkPressurePlate(A.position)),rc+=t,rc>30&&(rc=0,A.position.y<10&&(Tt.playAmbient("cave"),Tt.setAmbientMood("cave"))),Ne){Ne.vel.y-=20*t,Ne.mesh.position.addScaledVector(Ne.vel,t);const v=Math.round(Ne.mesh.position.x),b=Math.round(Ne.mesh.position.y),T=Math.round(Ne.mesh.position.z);bt.getBlockType(v,b,T)===7&&!Ne.inWater&&(Ne.inWater=!0,Ne.vel.set(0,0,0),Ne.mesh.position.y=b+.5),Ne.inWater&&(Ne.waitTimer-=t,Ne.mesh.position.y=b+.5+Math.sin(o*.003)*.1,Ne.waitTimer<=0&&(Ne.mesh.material.color.set(16776960),setTimeout(()=>{Ne!=null&&Ne.mesh.material&&Ne.mesh.material.color.set(26316)},300)))}(e=window.__tickThrowables)==null||e.call(window,t),(n=window.__tickTridents)==null||n.call(window,t),(i=window.__tickDolphinBoost)==null||i.call(window,t);for(let v=Qi.length-1;v>=0;v--){const b=Qi[v];b.life-=t,b.vel.y-=20*t,b.mesh.position.addScaledVector(b.vel,t);const T=Math.sqrt(b.vel.x*b.vel.x+b.vel.y*b.vel.y+b.vel.z*b.vel.z);T>.1&&(b.mesh.rotation.x=-Math.asin(b.vel.y/T),b.mesh.rotation.y=Math.atan2(b.vel.x,b.vel.z)),Math.random()<.3&&Ae&&Ae.spawn(b.mesh.position.x,b.mesh.position.y,b.mesh.position.z,16777130,.3,0,-.2,0);const S=Math.round(b.mesh.position.x),C=Math.round(b.mesh.position.y),U=Math.round(b.mesh.position.z);if(bt.hasBlock(S,C,U)){const R=new Wt(yu,Mu);R.position.copy(b.mesh.position),R.rotation.copy(b.mesh.rotation),Zt.add(R),Is.push({mesh:R,life:8}),Zt.remove(b.mesh),Qi.splice(v,1);continue}let w=!1;if(St)for(const R of St.iterMobs()){const F=R.mob,V=b.mesh.position.x-F.targetPos.x,j=b.mesh.position.y-F.targetPos.y,z=b.mesh.position.z-F.targetPos.z;if(V*V+j*j+z*z<.64&&F.alive){F.health-=5,F.showDamage(F.health),F.health<=0&&(F.die(),mn.recordMobKill(R.data.type),Xr.spawnFromMob(R.data.type,F.targetPos.x,F.targetPos.y,F.targetPos.z)),Zt.remove(b.mesh),Qi.splice(v,1),w=!0,Tt.play("hit");break}}b.life<=0&&!w&&(Zt.remove(b.mesh),Qi.splice(v,1))}for(let v=Is.length-1;v>=0;v--)Is[v].life-=t,Is[v].life<=0&&(Zt.remove(Is[v].mesh),Is.splice(v,1));if(qc){if(Ec.length=0,ce&&ce.getPlayerData){const v=((s=ce.getPlayerData)==null?void 0:s.call(ce))??[];let b=0;for(const T of v)if(T.name!==Pi&&b<wu){const S=Iy[b++];S.x=T.x,S.z=T.z,Ec.push(S)}}if(bc.length=0,St){let v=0;for(const b of St.iterMobs())if(v<Su){const T=Ly[v++];T.x=b.mob.targetPos.x,T.z=b.mob.targetPos.z,T.alive=b.mob.alive,bc.push(T)}}qc.update(t,A.position,A.getYaw(),Ec,bc)}if(wi){const v=A.selectedBlockType===60&&ei(60)>0;wi.style.transition="width 0.2s,height 0.2s,transform 0.2s",v?(wi.style.width="300px",wi.style.height="300px",wi.style.transform="none"):(wi.style.width="",wi.style.height="",wi.style.transform="")}if(bd){const b=(A.getYaw()*180/Math.PI%360+360)%360,S=["S","SW","W","NW","N","NE","E","SE"][Math.round(b/45)%8],C=0-A.position.x,U=0-A.position.z,R=((Math.atan2(C,U)*180/Math.PI-b)%360+360)%360,V=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(R/45)%8];bd.textContent=`${S} ${V}⌂`}if(qn&&qn.alive?O.updateBossBar(qn.health,qn.maxHealth):qn&&!qn.alive&&(O.hideBossBar(),qn=null),Mo>0?O.updateHearts(A.health,A.maxHealth,!0):O.updateHearts(A.health,A.maxHealth,!1),A.gameMode==="survival"){const v=A.position.x-br.x,b=A.position.y-br.y,T=A.position.z-br.z,S=v*v+b*b+T*T;br.copy(A.position),S>.01&&(sc+=t,sc>1.5&&(sc=0,pe=Math.max(0,pe-.5),O.updateHunger(Math.ceil(pe*2)/2,nn))),pe>=16&&A.health<A.maxHealth&&(Je+=t,Je>4&&(Je=0,A.health=Math.min(A.maxHealth,A.health+1),O.updateHearts(A.health,A.maxHealth))),pe<=0&&(jn="You starved",Je+=t,Je>4&&(Je=0,A.health>1&&A.takeDamage(1),O.updateHearts(A.health,A.maxHealth)))}if(A.gameMode==="survival"){const v=Math.round(A.position.x),b=Math.round(A.position.y),T=Math.round(A.position.z);bt.getBlockType(v,b,T)===47&&(jn="You burned in lava",Je+=t,Je>.5&&(Je=0,A.takeDamage(2),O.updateHearts(A.health,A.maxHealth)))}if(sn&&St&&A.gameMode==="survival")for(const v of St.iterMobs()){if(v.data.type!=="allay"&&v.data.type!=="axolotl"||!v.mob.alive)continue;const b=v.data.x-A.position.x,T=v.data.z-A.position.z;b*b+T*T<16&&A.health<A.maxHealth&&(A.health=Math.min(A.maxHealth,A.health+.5*t),O.updateHearts(A.health,A.maxHealth))}if(sn&&Math.random()<t*.5){const v=Math.round(A.position.x),b=Math.round(A.position.z);for(let T=-8;T<=8;T+=4)for(let S=-8;S<=8;S+=4){const C=v+T,U=b+S,w=Math.round(A.position.y);(bt.getBlockType(C,w,U)===112||bt.getBlockType(C,w-1,U)===112)&&Ae.magic(C,w+.5,U,1)}}if(sn){const v=Math.round(A.position.x),b=Math.round(A.position.z),T=Math.floor(A.position.y-1.3);bt.getBlockType(v,T,b)===109&&(O.addChatMessage("","⚡ Tripwire triggered!",!0),Tt.play("hurt"),bt.removeBlock(v,T,b))}if(sn&&A.gameMode==="survival"){const v=Math.round(A.position.x),b=Math.floor(A.position.y-1.62),T=Math.round(A.position.z);bt.getBlockType(v,b,T)===106&&(Je+=t,Je>1&&(Je=0,jn="You burned on a campfire",A.takeDamage(1),O.updateHearts(A.health,A.maxHealth)),Math.random()<t*4&&Ae.magic(v,b+1,T,1))}if(Math.random()<t*.3){const v=Math.round(A.position.x)+Math.round((Math.random()-.5)*16),b=Math.round(A.position.z)+Math.round((Math.random()-.5)*16),T=Math.round(A.position.y);bt.getBlockType(v,T-1,b)===106&&Ae.magic(v,T,b,1)}if(sn&&(vc+=t,vc>=.2)){vc=0;const v=new Set([4,12]),b=Math.round(A.position.x),T=Math.round(A.position.z);for(let S=-6;S<=6;S++)for(let C=-6;C<=6;C++)for(let U=1;U<=8;U++){const w=b+S,R=Math.round(A.position.y)+U-4,F=T+C,V=bt.getBlockType(w,R,F);V&&v.has(V)&&(bt.getBlockType(w,R-1,F)||(bt.removeBlock(w,R,F),bt.placeBlock(w,R-1,F,V,!0),Ae.burst(w,R,F,V)))}}if(sn&&St&&(xc+=t,xc>=10)){xc=0;const v=Math.round(A.position.x),b=Math.round(A.position.z);for(let T=-16;T<=16;T+=4)for(let S=-16;S<=16;S+=4)for(let C=-8;C<=8;C+=4){const U=v+T,w=Math.round(A.position.y)+C,R=b+S;if(bt.getBlockType(U,w,R)===48&&T*T+S*S<256&&window.__mobSpawningEnabled!==!1){const V=["zombie","skeleton","spider"],j=V[Math.floor(Math.random()*V.length)];St.spawnMob(j,U+(Math.random()-.5)*2,w+1,R+(Math.random()-.5)*2)}}}if(A.gameMode==="survival"){const v=Math.abs(A.position.x),b=Math.abs(A.position.z);(v>vo||b>vo)&&(Je+=t,Je>.5&&(Je=0,jn="You went beyond the world border",A.takeDamage(2),O.updateHearts(A.health,A.maxHealth),Math.max(v,b)-vo<10&&O.addChatMessage("",`⚠ World border nearby! (${Math.round(vo-Math.max(v,b))} blocks)`,!0)))}const l=Le.strength,h=Le.speed,d=Le.nightVision,p=Le.jumpBoost,x=Le.resistance;for(const v of Object.keys(Le))Le[v]=Math.max(0,Le[v]-t);if(h>0&&Le.speed===0&&pn.speed===0&&(A.speedBonus=0),p>0&&Le.jumpBoost===0&&(A.jumpBonus=0),l>0&&Le.strength===0&&O.addChatMessage("","Strength wore off.",!0),h>0&&Le.speed===0&&O.addChatMessage("","Speed wore off.",!0),d>0&&Le.nightVision===0&&O.addChatMessage("","Night Vision wore off.",!0),p>0&&Le.jumpBoost===0&&O.addChatMessage("","Jump Boost wore off.",!0),x>0&&Le.resistance===0&&O.addChatMessage("","Resistance wore off.",!0),Er<.22&&We>=.22&&(zn++,O.updateDayCounter(zn),O.addChatMessage("","Dawn breaks...",!0),Tt.playAmbient("birds"),Tt.setAmbientMood("day"),Un.trigger("reach_night")),Er<.73&&We>=.73&&(O.addChatMessage("","Night falls... watch out for monsters!",!0),Tt.playAmbient("wind"),Tt.setAmbientMood("night")),Er<.95&&We>=.95&&St&&Math.random()<.5&&window.__mobSpawningEnabled!==!1){const v=3+Math.floor(Math.random()*3);for(let b=0;b<v;b++){const T=Math.random()*Math.PI*2,S=20+Math.random()*15,C=A.position.x+Math.cos(T)*S,U=A.position.z+Math.sin(T)*S,w=bt.getSurfaceHeight(Math.round(C),Math.round(U))+1.5,R=Math.random()<.5?"zombie":"skeleton";St.spawnMob(R,C,w,U)}}Er=We,O.updatePosition(A.position.x,A.position.y,A.position.z),O.updateTime(We),Ty(t,A.health,A.maxHealth),Cy(A.getBreakProgress());const g=((a=A.keys)==null?void 0:a.ControlLeft)&&A.velocity.lengthSq()>4;if(Sy.style.opacity=g?"0.7":"0",!Ir){const v=g?80:75;Math.abs(Ie.fov-v)>.1&&(Ie.fov+=(v-Ie.fov)*.12,Ie.updateProjectionMatrix())}es.position.x+=(A.position.x-es.position.x)*.02,Fs.position.x+=(A.position.x-Fs.position.x)*.02,Ri.isThunderFlashing()&&De.setClearColor(Py);const M=Ri.consumeLightningStrike();if(M&&A.gameMode==="survival"){const v=A.position.x+M.x,b=A.position.z+M.z,T=v-A.position.x,S=b-A.position.z;T*T+S*S<25&&(jn="Struck by lightning",A.takeDamage(5),O.updateHearts(A.health,A.maxHealth),O.addChatMessage("","⚡ You were struck by lightning!",!0),Tt.play("hurt")),Ae.burst(v,A.position.y,b,0)}const f=bt.getBlockType(Math.round(A.position.x),Math.round(A.position.y),Math.round(A.position.z))===7;f&&!vd&&(Ae.splash(A.position.x,A.position.y,A.position.z,12),Ae.bubbles(A.position.x,A.position.y-.5,A.position.z,8),Tt.play("splash")),vd=f;const u=bt.getBlockType(Math.round(Ie.position.x),Math.round(Ie.position.y),Math.round(Ie.position.z))===7;if(u!==ui&&(ui=u,_y.style.opacity=ui?"1":"0",ui&&Un.trigger("deep_dive"),ui||(xo=15,O.updateAirSupply(15,15))),ui){A.gameMode==="survival"&&(xo=Math.max(0,xo-t),O.updateAirSupply(xo,15),xo<=0&&(Je+=t,Je>1&&(Je=0,jn="You drowned",A.takeDamage(1),O.updateHearts(A.health,A.maxHealth),A.health<=0&&(mn.increment("deaths"),O.showDeath(jn,A.position.x,A.position.y,A.position.z,Be)))));const v=Zt.fog;v.near=yy,v.far=My,v.color.copy(yd),De.setClearColor(yd),gc+=t,gc>.3&&(gc=0,Ae.bubbles(A.position.x,A.position.y+.5,A.position.z,2))}else if(!ts){const v=Zt.fog;v.near=_d,v.far=$r}const E=Ey(A.position.x,A.position.y,A.position.z);if(E>=0){const v=Math.max(0,1-E/bu);Yn+=(v-Yn)*.08}else Yn+=(0-Yn)*.08;if(Yn>.01){Md.style.opacity=String(Yn);const v=Math.sin(performance.now()*.002)*Yn*40,b=Yn*1.5,T=1+Yn*1.2;if(De.domElement.style.filter=`hue-rotate(${v}deg) blur(${b}px) saturate(${T})`,Yn>.6&&!ui){const S=Zt.fog,C=(Yn-.6)/.4;S.color.lerpColors(S.color,by,C*.15),S.near=_d-C*20,S.far=$r-C*30,ts=!0}E>=0&&E<3&&Math.random()<.3&&Ae.magic(A.position.x+(Math.random()-.5)*3,A.position.y+(Math.random()-.5)*2,A.position.z+(Math.random()-.5)*3,1)}else Md.style.opacity="0",De.domElement.style.filter="",ts&&(ts=!1);if(pc+=t,pc>gd&&A.onGround){const v=A.position.x-mc.x,b=A.position.z-mc.z;if(v*v+b*b>1.5){pc=0,mc.set(A.position.x,0,A.position.z);const S=Math.round(A.position.x),C=Math.round(A.position.y-1.9),U=Math.round(A.position.z),w=bt.getBlockType(S,C,U);let R="dirt";w===3||w===11||w===17||w===18?R="stone":w===4||w===12||w===49?R="sand":w===5||w===10||w===16?R="wood":(w===1||w===6)&&(R="grass"),gd=((r=A.keys)==null?void 0:r.ControlLeft)?.25:.35,Tt.playStepOnBlock(.7,R)}}if(A.onGround&&!xd&&A.velocity.y<-.5&&Tt.playLanding(Math.min(Math.abs(A.velocity.y)/10,1)),xd=A.onGround,hc+=t,hc>1&&(hc=0,bt.isNearBlock(Math.round(A.position.x),Math.round(A.position.y),Math.round(A.position.z),55,5)&&Ae.smoke(A.position.x,A.position.y+1,A.position.z,2)),Dr){let v=0;for(let Q=0;Q<go;Q++)v+=md[Q];const b=go>0?v/go:0,S=(A.getYaw()*180/Math.PI+360)%360;let C="Unknown";S<45||S>=315?C="South (0°)":S<135?C="West (90°)":S<225?C="North (180°)":C="East (270°)";const U={0:"Plains",1:"Desert",2:"Forest",3:"Mountains",4:"Ocean",5:"Taiga",6:"Swamp"},w=bt.getBiome(Math.round(A.position.x),Math.round(A.position.z)),R=U[w]??`Biome ${w}`,F=Math.round(A.position.y-1),V=bt.getBlockType(Math.round(A.position.x),F,Math.round(A.position.z)),j=V!==void 0?Qe(V):"Air",z=Ri&&Ri.isRaining?"Rainy":"Clear",q=(St==null?void 0:St.getMobCount())??0,Z=((c=bt.getBlockCount)==null?void 0:c.call(bt))??0;O.updateDebugScreen({fps:b,x:A.position.x,y:A.position.y,z:A.position.z,biome:R,blockBelow:j,facing:C,dayTime:We,mobCount:q,blockCount:Z,weather:z,gameMode:A.gameMode,version:"0.8"})}}if(Yr>0){Yr-=t;const l=(Math.random()-.5)*2*qr,h=(Math.random()-.5)*2*qr;Ie.position.x+=l,Ie.position.y+=h}bt&&bt.flushDirtyMeshes(),De.render(Zt,Ie),Ri.isThunderFlashing()&&De.setClearColor(Ai)}Tu();window.addEventListener("beforeunload",()=>{sn&&bt.saveToStorage({inventory:[...Ht],invCount:[...$t],px:A.position.x,py:A.position.y,pz:A.position.z,health:A.health,hunger:pe,xp:Rn,xpLevel:Be,dayCount:zn})});
