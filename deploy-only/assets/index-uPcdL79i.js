var Cu=Object.defineProperty;var Ru=(o,t,e)=>t in o?Cu(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var D=(o,t,e)=>Ru(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="160",Pu=0,cl=1,Lu=2,Td=1,Iu=2,li=3,mi=0,fn=1,ei=2,Oi=0,ks=1,ll=2,hl=3,dl=4,Du=5,Zi=100,Ou=101,Nu=102,ul=103,fl=104,Uu=200,Bu=201,ku=202,Fu=203,bc=204,Sc=205,zu=206,Hu=207,Gu=208,Vu=209,Wu=210,Xu=211,Yu=212,qu=213,ju=214,$u=0,Zu=1,Ku=2,Dr=3,Ju=4,Qu=5,tf=6,ef=7,Zc=0,nf=1,sf=2,pi=0,of=1,rf=2,af=3,cf=4,lf=5,hf=6,Cd=300,Hs=301,Gs=302,wc=303,Ac=304,jr=306,Tc=1e3,Cn=1001,Cc=1002,ze=1003,pl=1004,pa=1005,Dn=1006,df=1007,Eo=1008,Ni=1009,uf=1010,ff=1011,Kc=1012,Rd=1013,Ii=1014,Di=1015,bo=1016,Pd=1017,Ld=1018,ns=1020,pf=1021,Yn=1023,mf=1024,gf=1025,is=1026,Vs=1027,_f=1028,Id=1029,vf=1030,Dd=1031,Od=1033,ma=33776,ga=33777,_a=33778,va=33779,ml=35840,gl=35841,_l=35842,vl=35843,Nd=36196,xl=37492,yl=37496,Ml=37808,El=37809,bl=37810,Sl=37811,wl=37812,Al=37813,Tl=37814,Cl=37815,Rl=37816,Pl=37817,Ll=37818,Il=37819,Dl=37820,Ol=37821,xa=36492,Nl=36494,Ul=36495,xf=36283,Bl=36284,kl=36285,Fl=36286,Ud=3e3,ss=3001,yf=3200,Mf=3201,Bd=0,Ef=1,On="",nn="srgb",gi="srgb-linear",Jc="display-p3",$r="display-p3-linear",Or="linear",Oe="srgb",Nr="rec709",Ur="p3",ls=7680,zl=519,bf=512,Sf=513,wf=514,kd=515,Af=516,Tf=517,Cf=518,Rf=519,Rc=35044,Pf=35048,Hl="300 es",Pc=1035,fi=2e3,Br=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,Lc=180/Math.PI;function Ui(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[o&255]+on[o>>8&255]+on[o>>16&255]+on[o>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function yn(o,t,e){return Math.max(t,Math.min(e,o))}function Lf(o,t){return(o%t+t)%t}function ya(o,t,e){return(1-e)*o+e*t}function Gl(o){return(o&o-1)===0&&o!==0}function Ic(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Se(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,s,a,r,c,l){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l)}set(t,e,n,i,s,a,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[3],c=n[6],l=n[1],h=n[4],u=n[7],m=n[2],g=n[5],v=n[8],E=i[0],f=i[3],d=i[6],x=i[1],_=i[4],b=i[7],w=i[2],A=i[5],P=i[8];return s[0]=a*E+r*x+c*w,s[3]=a*f+r*_+c*A,s[6]=a*d+r*b+c*P,s[1]=l*E+h*x+u*w,s[4]=l*f+h*_+u*A,s[7]=l*d+h*b+u*P,s[2]=m*E+g*x+v*w,s[5]=m*f+g*_+v*A,s[8]=m*d+g*b+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*r*l-n*s*h+n*r*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=h*a-r*l,m=r*c-h*s,g=l*s-a*c,v=e*u+n*m+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=u*E,t[1]=(i*l-h*n)*E,t[2]=(r*n-i*a)*E,t[3]=m*E,t[4]=(h*e-i*c)*E,t[5]=(i*s-r*e)*E,t[6]=g*E,t[7]=(n*c-l*e)*E,t[8]=(a*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*r)+a+t,-i*l,i*c,-i*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new le;function Fd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function If(){const o=kr("canvas");return o.style.display="block",o}const Vl={};function xo(o){o in Vl||(Vl[o]=!0,console.warn(o))}const Wl=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[gi]:{transfer:Or,primaries:Nr,toReference:o=>o,fromReference:o=>o},[nn]:{transfer:Oe,primaries:Nr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[$r]:{transfer:Or,primaries:Ur,toReference:o=>o.applyMatrix3(Xl),fromReference:o=>o.applyMatrix3(Wl)},[Jc]:{transfer:Oe,primaries:Ur,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Xl),fromReference:o=>o.applyMatrix3(Wl).convertLinearToSRGB()}},Df=new Set([gi,$r]),Ee={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Df.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=Po[t].toReference,i=Po[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Po[o].primaries},getTransfer:function(o){return o===On?Or:Po[o].transfer}};function Fs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ea(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class zd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=kr("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fs(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Of=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(ba(i[a].image)):s.push(ba(i[a]))}else s=ba(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ba(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;class pn extends $s{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=Cn,i=Cn,s=Dn,a=Eo,r=Yn,c=Ni,l=pn.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ui(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?nn:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nn?ss:Ud}set encoding(t){xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ss?nn:On}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Cd;pn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,e=0,n=0,i=1){ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],m=c[1],g=c[5],v=c[9],E=c[2],f=c[6],d=c[10];if(Math.abs(h-m)<.01&&Math.abs(u-E)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+E)<.1&&Math.abs(v+f)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,b=(g+1)/2,w=(d+1)/2,A=(h+m)/4,P=(u+E)/4,U=(v+f)/4;return _>b&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=P/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=U/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=P/s,i=U/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-v)*(f-v)+(u-E)*(u-E)+(m-h)*(m-h));return Math.abs(x)<.001&&(x=1),this.x=(f-v)/x,this.y=(u-E)/x,this.z=(m-h)/x,this.w=Math.acos((l+g+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?nn:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gd extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bf extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,r){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const m=s[a+0],g=s[a+1],v=s[a+2],E=s[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=m,t[e+1]=g,t[e+2]=v,t[e+3]=E;return}if(u!==E||c!==m||l!==g||h!==v){let f=1-r;const d=c*m+l*g+h*v+u*E,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,d*x);f=Math.sin(f*A)/w,r=Math.sin(r*A)/w}const b=r*x;if(c=c*f+m*b,l=l*f+g*b,h=h*f+v*b,u=u*f+E*b,f===1-r){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],m=s[a+1],g=s[a+2],v=s[a+3];return t[e]=r*v+h*u+c*g-l*m,t[e+1]=c*v+h*m+l*u-r*g,t[e+2]=l*v+h*g+r*m-c*u,t[e+3]=h*v-r*u-c*m-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),u=r(s/2),m=c(n/2),g=c(i/2),v=c(s/2);switch(a){case"XYZ":this._x=m*h*u+l*g*v,this._y=l*g*u-m*h*v,this._z=l*h*v+m*g*u,this._w=l*h*u-m*g*v;break;case"YXZ":this._x=m*h*u+l*g*v,this._y=l*g*u-m*h*v,this._z=l*h*v-m*g*u,this._w=l*h*u+m*g*v;break;case"ZXY":this._x=m*h*u-l*g*v,this._y=l*g*u+m*h*v,this._z=l*h*v+m*g*u,this._w=l*h*u-m*g*v;break;case"ZYX":this._x=m*h*u-l*g*v,this._y=l*g*u+m*h*v,this._z=l*h*v-m*g*u,this._w=l*h*u+m*g*v;break;case"YZX":this._x=m*h*u+l*g*v,this._y=l*g*u+m*h*v,this._z=l*h*v-m*g*u,this._w=l*h*u-m*g*v;break;case"XZY":this._x=m*h*u-l*g*v,this._y=l*g*u-m*h*v,this._z=l*h*v+m*g*u,this._w=l*h*u+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],c=e[9],l=e[2],h=e[6],u=e[10],m=n+r+u;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(a-i)*g}else if(n>r&&n>u){const g=2*Math.sqrt(1+n-r-u);this._w=(h-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+l)/g}else if(r>u){const g=2*Math.sqrt(1+r-n-u);this._w=(s-l)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+u-n-r);this._w=(a-i)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*r+i*l-s*c,this._y=i*h+a*c+s*r-n*l,this._z=s*h+a*l+n*c-i*r,this._w=a*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),u=Math.sin((1-e)*h)/l,m=Math.sin(e*h)/l;return this._w=a*u+this._w*m,this._x=n*u+this._x*m,this._y=i*u+this._y*m,this._z=s*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,r=t.z,c=t.w,l=2*(a*i-r*n),h=2*(r*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-r*h,this.y=n+c*h+r*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new k,Yl=new wo;class as{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Io.subVectors(this.max,Js),ds.subVectors(t.a,Js),us.subVectors(t.b,Js),fs.subVectors(t.c,Js),xi.subVectors(us,ds),yi.subVectors(fs,us),Hi.subVectors(ds,fs);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!wa(e,ds,us,fs,Io)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,ds,us,fs,Io))?!1:(Do.crossVectors(xi,yi),e=[Do.x,Do.y,Do.z],wa(e,ds,us,fs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new k,new k,new k,new k,new k,new k,new k,new k],Fn=new k,Lo=new as,ds=new k,us=new k,fs=new k,xi=new k,yi=new k,Hi=new k,Js=new k,Io=new k,Do=new k,Gi=new k;function wa(o,t,e,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){Gi.fromArray(o,s);const r=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const kf=new as,Qs=new k,Aa=new k;class cs{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Aa)),this.expandByPoint(Qs.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new k,Ta=new k,Oo=new k,Mi=new k,Ca=new k,No=new k,Ra=new k;class Zr{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ta.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Oo),r=Mi.dot(this.direction),c=-Mi.dot(Oo),l=Mi.lengthSq(),h=Math.abs(1-a*a);let u,m,g,v;if(h>0)if(u=a*c-r,m=a*r-c,v=s*h,u>=0)if(m>=-v)if(m<=v){const E=1/h;u*=E,m*=E,g=u*(u+a*m+2*r)+m*(a*u+m+2*c)+l}else m=s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;else m=-s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;else m<=-v?(u=Math.max(0,-(-a*s+r)),m=u>0?-s:Math.min(Math.max(-s,-c),s),g=-u*u+m*(m+2*c)+l):m<=v?(u=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+l):(u=Math.max(0,-(a*s+r)),m=u>0?s:Math.min(Math.max(-s,-c),s),g=-u*u+m*(m+2*c)+l);else m=a>0?-s:s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(Oo,m),g}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,r,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,i=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,i=(t.min.x-m.x)*l),h>=0?(s=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(s=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(r=(t.min.z-m.z)*u,c=(t.max.z-m.z)*u):(r=(t.max.z-m.z)*u,c=(t.min.z-m.z)*u),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,s){Ca.subVectors(e,t),No.subVectors(n,t),Ra.crossVectors(Ca,No);let a=this.direction.dot(Ra),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const c=r*this.direction.dot(No.crossVectors(Mi,No));if(c<0)return null;const l=r*this.direction.dot(Ca.cross(Mi));if(l<0||c+l>a)return null;const h=-r*Mi.dot(Ra);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,a,r,c,l,h,u,m,g,v,E,f){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l,h,u,m,g,v,E,f)}set(t,e,n,i,s,a,r,c,l,h,u,m,g,v,E,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=r,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=m,d[3]=g,d[7]=v,d[11]=E,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const m=a*h,g=a*u,v=r*h,E=r*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=g+v*l,e[5]=m-E*l,e[9]=-r*c,e[2]=E-m*l,e[6]=v+g*l,e[10]=a*c}else if(t.order==="YXZ"){const m=c*h,g=c*u,v=l*h,E=l*u;e[0]=m+E*r,e[4]=v*r-g,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=g*r-v,e[6]=E+m*r,e[10]=a*c}else if(t.order==="ZXY"){const m=c*h,g=c*u,v=l*h,E=l*u;e[0]=m-E*r,e[4]=-a*u,e[8]=v+g*r,e[1]=g+v*r,e[5]=a*h,e[9]=E-m*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const m=a*h,g=a*u,v=r*h,E=r*u;e[0]=c*h,e[4]=v*l-g,e[8]=m*l+E,e[1]=c*u,e[5]=E*l+m,e[9]=g*l-v,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const m=a*c,g=a*l,v=r*c,E=r*l;e[0]=c*h,e[4]=E-m*u,e[8]=v*u+g,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-l*h,e[6]=g*u+v,e[10]=m-E*u}else if(t.order==="XZY"){const m=a*c,g=a*l,v=r*c,E=r*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=m*u+E,e[5]=a*h,e[9]=g*u-v,e[2]=v*u-g,e[6]=r*h,e[10]=E*u+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,zf)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Ei.crossVectors(n,En),Ei.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ei.crossVectors(n,En)),Ei.normalize(),Uo.crossVectors(En,Ei),i[0]=Ei.x,i[4]=Uo.x,i[8]=En.x,i[1]=Ei.y,i[5]=Uo.y,i[9]=En.y,i[2]=Ei.z,i[6]=Uo.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[4],c=n[8],l=n[12],h=n[1],u=n[5],m=n[9],g=n[13],v=n[2],E=n[6],f=n[10],d=n[14],x=n[3],_=n[7],b=n[11],w=n[15],A=i[0],P=i[4],U=i[8],S=i[12],C=i[1],H=i[5],Y=i[9],K=i[13],F=i[2],q=i[6],Z=i[10],tt=i[14],it=i[3],st=i[7],ot=i[11],ut=i[15];return s[0]=a*A+r*C+c*F+l*it,s[4]=a*P+r*H+c*q+l*st,s[8]=a*U+r*Y+c*Z+l*ot,s[12]=a*S+r*K+c*tt+l*ut,s[1]=h*A+u*C+m*F+g*it,s[5]=h*P+u*H+m*q+g*st,s[9]=h*U+u*Y+m*Z+g*ot,s[13]=h*S+u*K+m*tt+g*ut,s[2]=v*A+E*C+f*F+d*it,s[6]=v*P+E*H+f*q+d*st,s[10]=v*U+E*Y+f*Z+d*ot,s[14]=v*S+E*K+f*tt+d*ut,s[3]=x*A+_*C+b*F+w*it,s[7]=x*P+_*H+b*q+w*st,s[11]=x*U+_*Y+b*Z+w*ot,s[15]=x*S+_*K+b*tt+w*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],r=t[5],c=t[9],l=t[13],h=t[2],u=t[6],m=t[10],g=t[14],v=t[3],E=t[7],f=t[11],d=t[15];return v*(+s*c*u-i*l*u-s*r*m+n*l*m+i*r*g-n*c*g)+E*(+e*c*g-e*l*m+s*a*m-i*a*g+i*l*h-s*c*h)+f*(+e*l*u-e*r*g-s*a*u+n*a*g+s*r*h-n*l*h)+d*(-i*r*h-e*c*u+e*r*m+i*a*u-n*a*m+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],u=t[9],m=t[10],g=t[11],v=t[12],E=t[13],f=t[14],d=t[15],x=u*f*l-E*m*l+E*c*g-r*f*g-u*c*d+r*m*d,_=v*m*l-h*f*l-v*c*g+a*f*g+h*c*d-a*m*d,b=h*E*l-v*u*l+v*r*g-a*E*g-h*r*d+a*u*d,w=v*u*c-h*E*c-v*r*m+a*E*m+h*r*f-a*u*f,A=e*x+n*_+i*b+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=x*P,t[1]=(E*m*s-u*f*s-E*i*g+n*f*g+u*i*d-n*m*d)*P,t[2]=(r*f*s-E*c*s+E*i*l-n*f*l-r*i*d+n*c*d)*P,t[3]=(u*c*s-r*m*s-u*i*l+n*m*l+r*i*g-n*c*g)*P,t[4]=_*P,t[5]=(h*f*s-v*m*s+v*i*g-e*f*g-h*i*d+e*m*d)*P,t[6]=(v*c*s-a*f*s-v*i*l+e*f*l+a*i*d-e*c*d)*P,t[7]=(a*m*s-h*c*s+h*i*l-e*m*l-a*i*g+e*c*g)*P,t[8]=b*P,t[9]=(v*u*s-h*E*s-v*n*g+e*E*g+h*n*d-e*u*d)*P,t[10]=(a*E*s-v*r*s+v*n*l-e*E*l-a*n*d+e*r*d)*P,t[11]=(h*r*s-a*u*s-h*n*l+e*u*l+a*n*g-e*r*g)*P,t[12]=w*P,t[13]=(h*E*i-v*u*i+v*n*m-e*E*m-h*n*f+e*u*f)*P,t[14]=(v*r*i-a*E*i-v*n*c+e*E*c+a*n*f-e*r*f)*P,t[15]=(a*u*i-h*r*i+h*n*c-e*u*c-a*n*m+e*r*m)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,r=t.y,c=t.z,l=s*a,h=s*r;return this.set(l*a+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*a,0,l*c-i*r,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,r=e._z,c=e._w,l=s+s,h=a+a,u=r+r,m=s*l,g=s*h,v=s*u,E=a*h,f=a*u,d=r*u,x=c*l,_=c*h,b=c*u,w=n.x,A=n.y,P=n.z;return i[0]=(1-(E+d))*w,i[1]=(g+b)*w,i[2]=(v-_)*w,i[3]=0,i[4]=(g-b)*A,i[5]=(1-(m+d))*A,i[6]=(f+x)*A,i[7]=0,i[8]=(v+_)*P,i[9]=(f-x)*P,i[10]=(1-(m+E))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const a=ps.set(i[4],i[5],i[6]).length(),r=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],zn.copy(this);const l=1/s,h=1/a,u=1/r;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=r,this}makePerspective(t,e,n,i,s,a,r=fi){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),m=(n+i)/(n-i);let g,v;if(r===fi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(r===Br)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,r=fi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-s),m=(e+t)*l,g=(n+i)*h;let v,E;if(r===fi)v=(a+s)*u,E=-2*u;else if(r===Br)v=s*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=E,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new k,zn=new Ae,Ff=new k(0,0,0),zf=new k(1,1,1),Ei=new k,Uo=new k,En=new k,ql=new Ae,jl=new wo;class Kr{constructor(t=0,e=0,n=0,i=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],r=i[8],c=i[1],l=i[5],h=i[9],u=i[2],m=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(yn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const $l=new k,ms=new wo,si=new Ae,Bo=new k,to=new k,Gf=new k,Vf=new wo,Zl=new k(1,0,0),Kl=new k(0,1,0),Jl=new k(0,0,1),Wf={type:"added"},Xf={type:"removed"};class Ye extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new k,e=new Kr,n=new wo,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bo.copy(t):Bo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(to,Bo,this.up):si.lookAt(Bo,to,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(si),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new k(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new k,oi=new k,Pa=new k,ri=new k,gs=new k,_s=new k,Ql=new k,La=new k,Ia=new k,Da=new k;let ko=!1;class An{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Hn.subVectors(i,e),oi.subVectors(n,e),Pa.subVectors(t,e);const a=Hn.dot(Hn),r=Hn.dot(oi),c=Hn.dot(Pa),l=oi.dot(oi),h=oi.dot(Pa),u=a*l-r*r;if(u===0)return s.set(0,0,0),null;const m=1/u,g=(l*c-r*h)*m,v=(a*h-r*c)*m;return s.set(1-g-v,v,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(t,e,n,i,s,a,r,c){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),this.getInterpolation(t,e,n,i,s,a,r,c)}static getInterpolation(t,e,n,i,s,a,r,c){return this.getBarycoord(t,e,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(r,ri.z),c)}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),oi.subVectors(t,e),Hn.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Hn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,r;gs.subVectors(i,n),_s.subVectors(s,n),La.subVectors(t,n);const c=gs.dot(La),l=_s.dot(La);if(c<=0&&l<=0)return e.copy(n);Ia.subVectors(t,i);const h=gs.dot(Ia),u=_s.dot(Ia);if(h>=0&&u<=h)return e.copy(i);const m=c*u-h*l;if(m<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(gs,a);Da.subVectors(t,s);const g=gs.dot(Da),v=_s.dot(Da);if(v>=0&&g<=v)return e.copy(s);const E=g*l-c*v;if(E<=0&&l>=0&&v<=0)return r=l/(l-v),e.copy(n).addScaledVector(_s,r);const f=h*v-g*u;if(f<=0&&u-h>=0&&g-v>=0)return Ql.subVectors(s,i),r=(u-h)/(u-h+(g-v)),e.copy(i).addScaledVector(Ql,r);const d=1/(f+E+m);return a=E*d,r=m*d,e.copy(n).addScaledVector(gs,a).addScaledVector(_s,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Oa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=Lf(t,1),e=yn(e,0,1),n=yn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Oa(a,s,t+1/3),this.g=Oa(a,s,t),this.b=Oa(a,s,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Ee.fromWorkingColorSpace(rn.copy(this),t),Math.round(yn(rn.r*255,0,255))*65536+Math.round(yn(rn.g*255,0,255))*256+Math.round(yn(rn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b,a=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+a)/2;if(r===a)c=0,l=0;else{const u=a-r;switch(l=h<=.5?u/(a+r):u/(2-a-r),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=nn){Ee.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,i=rn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Fo);const n=ya(bi.h,Fo.h,e),i=ya(bi.s,Fo.s,e),s=ya(bi.l,Fo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new yt;yt.NAMES=Vd;let Yf=0;class Fi extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ks,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Sc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const r in s){const c=s[r];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _i extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new k,zo=new ie;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}}class Wd extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xd extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qf=0;const Pn=new Ae,Na=new Ye,vs=new k,bn=new as,eo=new as,Ze=new k;class mn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?Xd:Wd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];eo.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(bn.min,eo.min),bn.expandByPoint(Ze),Ze.addVectors(bn.max,eo.max),bn.expandByPoint(Ze)):(bn.expandByPoint(eo.min),bn.expandByPoint(eo.max))}bn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Ze.fromBufferAttribute(r,l),c&&(vs.fromBufferAttribute(t,l),Ze.add(vs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let C=0;C<r;C++)l[C]=new k,h[C]=new k;const u=new k,m=new k,g=new k,v=new ie,E=new ie,f=new ie,d=new k,x=new k;function _(C,H,Y){u.fromArray(i,C*3),m.fromArray(i,H*3),g.fromArray(i,Y*3),v.fromArray(a,C*2),E.fromArray(a,H*2),f.fromArray(a,Y*2),m.sub(u),g.sub(u),E.sub(v),f.sub(v);const K=1/(E.x*f.y-f.x*E.y);isFinite(K)&&(d.copy(m).multiplyScalar(f.y).addScaledVector(g,-E.y).multiplyScalar(K),x.copy(g).multiplyScalar(E.x).addScaledVector(m,-f.x).multiplyScalar(K),l[C].add(d),l[H].add(d),l[Y].add(d),h[C].add(x),h[H].add(x),h[Y].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let C=0,H=b.length;C<H;++C){const Y=b[C],K=Y.start,F=Y.count;for(let q=K,Z=K+F;q<Z;q+=3)_(n[q+0],n[q+1],n[q+2])}const w=new k,A=new k,P=new k,U=new k;function S(C){P.fromArray(s,C*3),U.copy(P);const H=l[C];w.copy(H),w.sub(P.multiplyScalar(P.dot(H))).normalize(),A.crossVectors(U,H);const K=A.dot(h[C])<0?-1:1;c[C*4]=w.x,c[C*4+1]=w.y,c[C*4+2]=w.z,c[C*4+3]=K}for(let C=0,H=b.length;C<H;++C){const Y=b[C],K=Y.start,F=Y.count;for(let q=K,Z=K+F;q<Z;q+=3)S(n[q+0]),S(n[q+1]),S(n[q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new k,s=new k,a=new k,r=new k,c=new k,l=new k,h=new k,u=new k;if(t)for(let m=0,g=t.count;m<g;m+=3){const v=t.getX(m+0),E=t.getX(m+1),f=t.getX(m+2);i.fromBufferAttribute(e,v),s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,f),r.add(h),c.add(h),l.add(h),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let m=0,g=e.count;m<g;m+=3)i.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,u=r.normalized,m=new l.constructor(c.length*h);let g=0,v=0;for(let E=0,f=c.length;E<f;E++){r.isInterleavedBufferAttribute?g=c[E]*r.data.stride+r.offset:g=c[E]*h;for(let d=0;d<h;d++)m[v++]=l[g++]}return new Mn(m,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,u=l.length;h<u;h++){const m=l[h],g=t(m,n);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,m=l.length;u<m;u++){const g=l[u];h.push(g.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let m=0,g=u.length;m<g;m++)h.push(u[m].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new Ae,Vi=new Zr,Ho=new cs,eh=new k,xs=new k,ys=new k,Ms=new k,Ua=new k,Go=new k,Vo=new ie,Wo=new ie,Xo=new ie,nh=new k,ih=new k,sh=new k,Yo=new k,qo=new k;class Qt extends Ye{constructor(t=new mn,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){Go.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=r[c],u=s[c];h!==0&&(Ua.fromBufferAttribute(u,t),a?Go.addScaledVector(Ua,h):Go.addScaledVector(Ua.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Vi.copy(t.ray).recast(t.near),!(Ho.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ho,eh)===null||Vi.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,r=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,m=s.groups,g=s.drawRange;if(r!==null)if(Array.isArray(a))for(let v=0,E=m.length;v<E;v++){const f=m[v],d=a[f.materialIndex],x=Math.max(f.start,g.start),_=Math.min(r.count,Math.min(f.start+f.count,g.start+g.count));for(let b=x,w=_;b<w;b+=3){const A=r.getX(b),P=r.getX(b+1),U=r.getX(b+2);i=jo(this,d,t,n,l,h,u,A,P,U),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const v=Math.max(0,g.start),E=Math.min(r.count,g.start+g.count);for(let f=v,d=E;f<d;f+=3){const x=r.getX(f),_=r.getX(f+1),b=r.getX(f+2);i=jo(this,a,t,n,l,h,u,x,_,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=m.length;v<E;v++){const f=m[v],d=a[f.materialIndex],x=Math.max(f.start,g.start),_=Math.min(c.count,Math.min(f.start+f.count,g.start+g.count));for(let b=x,w=_;b<w;b+=3){const A=b,P=b+1,U=b+2;i=jo(this,d,t,n,l,h,u,A,P,U),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const v=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let f=v,d=E;f<d;f+=3){const x=f,_=f+1,b=f+2;i=jo(this,a,t,n,l,h,u,x,_,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function jf(o,t,e,n,i,s,a,r){let c;if(t.side===fn?c=n.intersectTriangle(a,s,i,!0,r):c=n.intersectTriangle(i,s,a,t.side===mi,r),c===null)return null;qo.copy(r),qo.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(qo);return l<e.near||l>e.far?null:{distance:l,point:qo.clone(),object:o}}function jo(o,t,e,n,i,s,a,r,c,l){o.getVertexPosition(r,xs),o.getVertexPosition(c,ys),o.getVertexPosition(l,Ms);const h=jf(o,t,e,n,xs,ys,Ms,Yo);if(h){i&&(Vo.fromBufferAttribute(i,r),Wo.fromBufferAttribute(i,c),Xo.fromBufferAttribute(i,l),h.uv=An.getInterpolation(Yo,xs,ys,Ms,Vo,Wo,Xo,new ie)),s&&(Vo.fromBufferAttribute(s,r),Wo.fromBufferAttribute(s,c),Xo.fromBufferAttribute(s,l),h.uv1=An.getInterpolation(Yo,xs,ys,Ms,Vo,Wo,Xo,new ie),h.uv2=h.uv1),a&&(nh.fromBufferAttribute(a,r),ih.fromBufferAttribute(a,c),sh.fromBufferAttribute(a,l),h.normal=An.getInterpolation(Yo,xs,ys,Ms,nh,ih,sh,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:c,c:l,normal:new k,materialIndex:0};An.getNormal(xs,ys,Ms,u.normal),h.face=u}return h}class Le extends mn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let m=0,g=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,i,a,2),v("x","z","y",1,-1,t,n,-e,i,a,3),v("x","y","z",1,-1,t,e,n,i,s,4),v("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(u,2));function v(E,f,d,x,_,b,w,A,P,U,S){const C=b/P,H=w/U,Y=b/2,K=w/2,F=A/2,q=P+1,Z=U+1;let tt=0,it=0;const st=new k;for(let ot=0;ot<Z;ot++){const ut=ot*H-K;for(let pt=0;pt<q;pt++){const Q=pt*C-Y;st[E]=Q*x,st[f]=ut*_,st[d]=F,l.push(st.x,st.y,st.z),st[E]=0,st[f]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(pt/P),u.push(1-ot/U),tt+=1}}for(let ot=0;ot<U;ot++)for(let ut=0;ut<P;ut++){const pt=m+ut+q*ot,Q=m+ut+q*(ot+1),at=m+(ut+1)+q*(ot+1),bt=m+(ut+1)+q*ot;c.push(pt,Q,bt),c.push(Q,at,bt),it+=6}r.addGroup(g,it,S),g+=it,m+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(o){const t={};for(let e=0;e<o.length;e++){const n=Ws(o[e]);for(const i in n)t[i]=n[i]}return t}function $f(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Yd(o){return o.getRenderTarget()===null?o.outputColorSpace:Ee.workingColorSpace}const Zf={clone:Ws,merge:hn};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends qd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,bs=1;class Qf extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(Es,bs,t,e);i.layers=this.layers,this.add(i);const s=new Tn(Es,bs,t,e);s.layers=this.layers,this.add(s);const a=new Tn(Es,bs,t,e);a.layers=this.layers,this.add(a);const r=new Tn(Es,bs,t,e);r.layers=this.layers,this.add(r);const c=new Tn(Es,bs,t,e);c.layers=this.layers,this.add(c);const l=new Tn(Es,bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,r,c]=e;for(const l of e)this.remove(l);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,c,l,h]=this.children,u=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,m,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jd extends pn{constructor(t,e,n,i,s,a,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,s,a,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ss?nn:On),this.texture=new jd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Oi});s.uniforms.tEquirect.value=e;const a=new Qt(i,s),r=e.minFilter;return e.minFilter===Eo&&(e.minFilter=Dn),new Qf(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ba=new k,ep=new k,np=new le;class ji{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ba.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),i=this.coplanarPoint(Ba).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new cs,$o=new k;class tl{constructor(t=new ji,e=new ji,n=new ji,i=new ji,s=new ji,a=new ji){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,i=t.elements,s=i[0],a=i[1],r=i[2],c=i[3],l=i[4],h=i[5],u=i[6],m=i[7],g=i[8],v=i[9],E=i[10],f=i[11],d=i[12],x=i[13],_=i[14],b=i[15];if(n[0].setComponents(c-s,m-l,f-g,b-d).normalize(),n[1].setComponents(c+s,m+l,f+g,b+d).normalize(),n[2].setComponents(c+a,m+h,f+v,b+x).normalize(),n[3].setComponents(c-a,m-h,f-v,b-x).normalize(),n[4].setComponents(c-r,m-u,f-E,b-_).normalize(),e===fi)n[5].setComponents(c+r,m+u,f+E,b+_).normalize();else if(e===Br)n[5].setComponents(r,u,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($o.x=i.normal.x>0?t.max.x:t.min.x,$o.y=i.normal.y>0?t.max.y:t.min.y,$o.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let o=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function ip(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,m=l.usage,g=u.byteLength,v=o.createBuffer();o.bindBuffer(h,v),o.bufferData(h,u,m),l.onUploadCallback();let E;if(u instanceof Float32Array)E=o.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(u instanceof Int16Array)E=o.SHORT;else if(u instanceof Uint32Array)E=o.UNSIGNED_INT;else if(u instanceof Int32Array)E=o.INT;else if(u instanceof Int8Array)E=o.BYTE;else if(u instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:E,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:g}}function s(l,h,u){const m=h.array,g=h._updateRange,v=h.updateRanges;if(o.bindBuffer(u,l),g.count===-1&&v.length===0&&o.bufferSubData(u,0,m),v.length!==0){for(let E=0,f=v.length;E<f;E++){const d=v[E];e?o.bufferSubData(u,d.start*m.BYTES_PER_ELEMENT,m,d.start,d.count):o.bufferSubData(u,d.start*m.BYTES_PER_ELEMENT,m.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(e?o.bufferSubData(u,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):o.bufferSubData(u,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const m=n.get(l);(!m||m.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:r,update:c}}class Jr extends mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,u=t/r,m=e/c,g=[],v=[],E=[],f=[];for(let d=0;d<h;d++){const x=d*m-a;for(let _=0;_<l;_++){const b=_*u-s;v.push(b,-x,0),E.push(0,0,1),f.push(_/r),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<r;x++){const _=x+l*d,b=x+l*(d+1),w=x+1+l*(d+1),A=x+1+l*d;g.push(_,b,A),g.push(b,w,A)}this.setIndex(g),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,_m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bm=`#ifndef FLAT_SHADED
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
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
}`,_0=`#include <common>
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
}`,x0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,b0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,re={alphahash_fragment:sp,alphahash_pars_fragment:op,alphamap_fragment:rp,alphamap_pars_fragment:ap,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Ep,color_fragment:bp,color_pars_fragment:Sp,color_pars_vertex:wp,color_vertex:Ap,common:Tp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Op,colorspace_pars_fragment:Np,envmap_fragment:Up,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:om,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:hm,map_fragment:dm,map_pars_fragment:um,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:_m,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Em,normal_pars_fragment:bm,normal_pars_vertex:Sm,normal_vertex:wm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Om,dithering_fragment:Nm,dithering_pars_fragment:Um,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:Ym,specularmap_fragment:qm,specularmap_pars_fragment:jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:o0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:c0,depth_vert:l0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:_0,meshbasic_frag:v0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:E0,meshnormal_vert:b0,meshnormal_frag:S0,meshphong_vert:w0,meshphong_frag:A0,meshphysical_vert:T0,meshphysical_frag:C0,meshtoon_vert:R0,meshtoon_frag:P0,points_vert:L0,points_frag:I0,shadow_vert:D0,shadow_frag:O0,sprite_vert:N0,sprite_frag:U0},_t={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ti={basic:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:hn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:hn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:hn([_t.points,_t.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:hn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:hn([_t.common,_t.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:hn([_t.sprite,_t.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:hn([_t.common,_t.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:hn([_t.lights,_t.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ti.physical={uniforms:hn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Zo={r:0,b:0,g:0};function B0(o,t,e,n,i,s,a){const r=new yt(0);let c=s===!0?0:1,l,h,u=null,m=0,g=null;function v(f,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?E(r,c):_&&_.isColor&&(E(_,1),x=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new Qt(new Le(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ws(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Oe,(u!==_||m!==_.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,u=_,m=_.version,g=o.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new Jr(2,2),new ki({name:"BackgroundMaterial",uniforms:Ws(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||m!==_.version||g!==o.toneMapping)&&(l.material.needsUpdate=!0,u=_,m=_.version,g=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function E(f,d){f.getRGB(Zo,Yd(o)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,d,a)}return{getClearColor:function(){return r},setClearColor:function(f,d=1){r.set(f),c=d,E(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,E(r,c)},render:v}}function k0(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,r={},c=f(null);let l=c,h=!1;function u(F,q,Z,tt,it){let st=!1;if(a){const ot=E(tt,Z,q);l!==ot&&(l=ot,g(l.object)),st=d(F,tt,Z,it),st&&x(F,tt,Z,it)}else{const ot=q.wireframe===!0;(l.geometry!==tt.id||l.program!==Z.id||l.wireframe!==ot)&&(l.geometry=tt.id,l.program=Z.id,l.wireframe=ot,st=!0)}it!==null&&e.update(it,o.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,U(F,q,Z,tt),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function m(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function g(F){return n.isWebGL2?o.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?o.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function E(F,q,Z){const tt=Z.wireframe===!0;let it=r[F.id];it===void 0&&(it={},r[F.id]=it);let st=it[q.id];st===void 0&&(st={},it[q.id]=st);let ot=st[tt];return ot===void 0&&(ot=f(m()),st[tt]=ot),ot}function f(F){const q=[],Z=[],tt=[];for(let it=0;it<i;it++)q[it]=0,Z[it]=0,tt[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:tt,object:F,attributes:{},index:null}}function d(F,q,Z,tt){const it=l.attributes,st=q.attributes;let ot=0;const ut=Z.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=it[pt];let bt=st[pt];if(bt===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(bt=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(bt=F.instanceColor)),at===void 0||at.attribute!==bt||bt&&at.data!==bt.data)return!0;ot++}return l.attributesNum!==ot||l.index!==tt}function x(F,q,Z,tt){const it={},st=q.attributes;let ot=0;const ut=Z.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=st[pt];at===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));const bt={};bt.attribute=at,at&&at.data&&(bt.data=at.data),it[pt]=bt,ot++}l.attributes=it,l.attributesNum=ot,l.index=tt}function _(){const F=l.newAttributes;for(let q=0,Z=F.length;q<Z;q++)F[q]=0}function b(F){w(F,0)}function w(F,q){const Z=l.newAttributes,tt=l.enabledAttributes,it=l.attributeDivisors;Z[F]=1,tt[F]===0&&(o.enableVertexAttribArray(F),tt[F]=1),it[F]!==q&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),it[F]=q)}function A(){const F=l.newAttributes,q=l.enabledAttributes;for(let Z=0,tt=q.length;Z<tt;Z++)q[Z]!==F[Z]&&(o.disableVertexAttribArray(Z),q[Z]=0)}function P(F,q,Z,tt,it,st,ot){ot===!0?o.vertexAttribIPointer(F,q,Z,it,st):o.vertexAttribPointer(F,q,Z,tt,it,st)}function U(F,q,Z,tt){if(n.isWebGL2===!1&&(F.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const it=tt.attributes,st=Z.getAttributes(),ot=q.defaultAttributeValues;for(const ut in st){const pt=st[ut];if(pt.location>=0){let Q=it[ut];if(Q===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const at=Q.normalized,bt=Q.itemSize,Ct=e.get(Q);if(Ct===void 0)continue;const Nt=Ct.buffer,$t=Ct.type,Zt=Ct.bytesPerElement,zt=n.isWebGL2===!0&&($t===o.INT||$t===o.UNSIGNED_INT||Q.gpuType===Rd);if(Q.isInterleavedBufferAttribute){const de=Q.data,$=de.stride,_e=Q.offset;if(de.isInstancedInterleavedBuffer){for(let kt=0;kt<pt.locationSize;kt++)w(pt.location+kt,de.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let kt=0;kt<pt.locationSize;kt++)b(pt.location+kt);o.bindBuffer(o.ARRAY_BUFFER,Nt);for(let kt=0;kt<pt.locationSize;kt++)P(pt.location+kt,bt/pt.locationSize,$t,at,$*Zt,(_e+bt/pt.locationSize*kt)*Zt,zt)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<pt.locationSize;de++)w(pt.location+de,Q.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<pt.locationSize;de++)b(pt.location+de);o.bindBuffer(o.ARRAY_BUFFER,Nt);for(let de=0;de<pt.locationSize;de++)P(pt.location+de,bt/pt.locationSize,$t,at,bt*Zt,bt/pt.locationSize*de*Zt,zt)}}else if(ot!==void 0){const at=ot[ut];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(pt.location,at);break;case 3:o.vertexAttrib3fv(pt.location,at);break;case 4:o.vertexAttrib4fv(pt.location,at);break;default:o.vertexAttrib1fv(pt.location,at)}}}}A()}function S(){Y();for(const F in r){const q=r[F];for(const Z in q){const tt=q[Z];for(const it in tt)v(tt[it].object),delete tt[it];delete q[Z]}delete r[F]}}function C(F){if(r[F.id]===void 0)return;const q=r[F.id];for(const Z in q){const tt=q[Z];for(const it in tt)v(tt[it].object),delete tt[it];delete q[Z]}delete r[F.id]}function H(F){for(const q in r){const Z=r[q];if(Z[F.id]===void 0)continue;const tt=Z[F.id];for(const it in tt)v(tt[it].object),delete tt[it];delete Z[F.id]}}function Y(){K(),h=!0,l!==c&&(l=c,g(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function F0(o,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function r(h,u){o.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,m){if(m===0)return;let g,v;if(i)g=o,v="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,h,u,m),e.update(u,s,m)}function l(h,u,m){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<m;v++)this.render(h[v],u[v]);else{g.multiDrawArraysWEBGL(s,h,0,u,0,m);let v=0;for(let E=0;E<m;E++)v+=u[E];e.update(v,s,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function z0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_TEXTURE_SIZE),v=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),d=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),_=m>0,b=a||t.has("OES_texture_float"),w=_&&b,A=a?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:E,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:A}}function H0(o){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ji,r=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const g=u.length!==0||m||n!==0||i;return i=m,n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,m){e=h(u,m,0)},this.setState=function(u,m,g){const v=u.clippingPlanes,E=u.clipIntersection,f=u.clipShadows,d=o.get(u);if(!i||v===null||v.length===0||s&&!f)s?h(null):l();else{const x=s?0:n,_=x*4;let b=d.clippingState||null;c.value=b,b=h(v,m,_,g);for(let w=0;w!==_;++w)b[w]=e[w];d.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,m,g,v){const E=u!==null?u.length:0;let f=null;if(E!==0){if(f=c.value,v!==!0||f===null){const d=g+E*4,x=m.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<d)&&(f=new Float32Array(d));for(let _=0,b=g;_!==E;++_,b+=4)a.copy(u[_]).applyMatrix4(x,r),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}function G0(o){let t=new WeakMap;function e(a,r){return r===wc?a.mapping=Hs:r===Ac&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===wc||r===Ac)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tp(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zd extends qd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,oh=[.125,.215,.35,.446,.526,.582],Ki=20,ka=new Zd,rh=new yt;let Fa=null,za=0,Ha=0;const $i=(1+Math.sqrt(5))/2,Ss=1/$i,ah=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,$i,Ss),new k(0,$i,-Ss),new k(Ss,0,$i),new k(-Ss,0,$i),new k($i,Ss,0),new k(-$i,Ss,0)];class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,za,Ha),t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:bo,format:Yn,colorSpace:gi,depthBuffer:!1},i=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(s)),this._blurMaterial=W0(s,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,i){const r=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(rh),h.toneMapping=pi,h.autoClear=!1;const g=new _i({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new Qt(new Le,g);let E=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,E=!0):(g.color.copy(rh),E=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):x===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));const _=this._cubeSize;Ko(i,x*_,d>2?_:0,_,_),h.setRenderTarget(i),E&&h.render(v,r),h.render(t,r)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=m,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hs||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const c=this._cubeSize;Ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ah[(i-1)%ah.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,r){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[i],l),m=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),E=s/v,f=isFinite(s)?1+Math.floor(h*E):Ki;f>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ki}`);const d=[];let x=0;for(let P=0;P<Ki;++P){const U=P/E,S=Math.exp(-U*U/2);d.push(S),P===0?x+=S:P<f&&(x+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/x;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=d,m.latitudinal.value=a==="latitudinal",r&&(m.poleAxis.value=r);const{_lodMax:_}=this;m.dTheta.value=v,m.mipInt.value=_-n;const b=this._sizeLods[i],w=3*b*(i>_-Os?i-_+Os:0),A=4*(this._cubeSize-b);Ko(e,w,A,3*b,2*b),c.setRenderTarget(e),c.render(u,ka)}}function V0(o){const t=[],e=[],n=[];let i=o;const s=o-Os+1+oh.length;for(let a=0;a<s;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>o-Os?c=oh[a-o+Os-1]:a===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,u=1+l,m=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,v=6,E=3,f=2,d=1,x=new Float32Array(E*v*g),_=new Float32Array(f*v*g),b=new Float32Array(d*v*g);for(let A=0;A<g;A++){const P=A%3*2/3-1,U=A>2?0:-1,S=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(S,E*v*A),_.set(m,f*v*A);const C=[A,A,A,A,A,A];b.set(C,d*v*A)}const w=new mn;w.setAttribute("position",new Mn(x,E)),w.setAttribute("uv",new Mn(_,f)),w.setAttribute("faceIndex",new Mn(b,d)),t.push(w),i>Os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(o,t,e){const n=new os(o,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function W0(o,t,e){const n=new Float32Array(Ki),i=new k(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function dh(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function X0(o){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===wc||c===Ac,h=c===Hs||c===Gs;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new ch(o)),u=l?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ch(o));const m=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,m),r.addEventListener("dispose",s),m.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Y0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q0(o,t,e,n){const i={},s=new WeakMap;function a(u){const m=u.target;m.index!==null&&t.remove(m.index);for(const v in m.attributes)t.remove(m.attributes[v]);for(const v in m.morphAttributes){const E=m.morphAttributes[v];for(let f=0,d=E.length;f<d;f++)t.remove(E[f])}m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(t.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function r(u,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,e.memory.geometries++),m}function c(u){const m=u.attributes;for(const v in m)t.update(m[v],o.ARRAY_BUFFER);const g=u.morphAttributes;for(const v in g){const E=g[v];for(let f=0,d=E.length;f<d;f++)t.update(E[f],o.ARRAY_BUFFER)}}function l(u){const m=[],g=u.index,v=u.attributes.position;let E=0;if(g!==null){const x=g.array;E=g.version;for(let _=0,b=x.length;_<b;_+=3){const w=x[_+0],A=x[_+1],P=x[_+2];m.push(w,A,A,P,P,w)}}else if(v!==void 0){const x=v.array;E=v.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const w=_+0,A=_+1,P=_+2;m.push(w,A,A,P,P,w)}}else return;const f=new(Fd(m)?Xd:Wd)(m,1);f.version=E;const d=s.get(u);d&&t.remove(d),s.set(u,f)}function h(u){const m=s.get(u);if(m){const g=u.index;g!==null&&m.version<g.version&&l(u)}else l(u);return s.get(u)}return{get:r,update:c,getWireframeAttribute:h}}function j0(o,t,e,n){const i=n.isWebGL2;let s;function a(g){s=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function h(g,v){o.drawElements(s,v,r,g*c),e.update(v,s,1)}function u(g,v,E){if(E===0)return;let f,d;if(i)f=o,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,v,r,g*c,E),e.update(v,s,E)}function m(g,v,E){if(E===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<E;d++)this.render(g[d]/c,v[d]);else{f.multiDrawElementsWEBGL(s,v,0,r,g,0,E);let d=0;for(let x=0;x<E;x++)d+=v[x];e.update(d,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=m}function $0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(e.calls++,a){case o.TRIANGLES:e.triangles+=r*(s/3);break;case o.LINES:e.lines+=r*(s/2);break;case o.LINE_STRIP:e.lines+=r*(s-1);break;case o.LINE_LOOP:e.lines+=r*s;break;case o.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Z0(o,t){return o[0]-t[0]}function K0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function J0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new ke,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,u){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,E=v!==void 0?v.length:0;let f=s.get(h);if(f===void 0||f.count!==E){let q=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var g=q;f!==void 0&&f.texture.dispose();const _=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),w===!0&&(S=3);let C=h.attributes.position.count*S,H=1;C>t.maxTextureSize&&(H=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const Y=new Float32Array(C*H*4*E),K=new Gd(Y,C,H,E);K.type=Di,K.needsUpdate=!0;const F=S*4;for(let Z=0;Z<E;Z++){const tt=A[Z],it=P[Z],st=U[Z],ot=C*H*4*Z;for(let ut=0;ut<tt.count;ut++){const pt=ut*F;_===!0&&(a.fromBufferAttribute(tt,ut),Y[ot+pt+0]=a.x,Y[ot+pt+1]=a.y,Y[ot+pt+2]=a.z,Y[ot+pt+3]=0),b===!0&&(a.fromBufferAttribute(it,ut),Y[ot+pt+4]=a.x,Y[ot+pt+5]=a.y,Y[ot+pt+6]=a.z,Y[ot+pt+7]=0),w===!0&&(a.fromBufferAttribute(st,ut),Y[ot+pt+8]=a.x,Y[ot+pt+9]=a.y,Y[ot+pt+10]=a.z,Y[ot+pt+11]=st.itemSize===4?a.w:1)}}f={count:E,texture:K,size:new ie(C,H)},s.set(h,f),h.addEventListener("dispose",q)}let d=0;for(let _=0;_<m.length;_++)d+=m[_];const x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(o,"morphTargetBaseInfluence",x),u.getUniforms().setValue(o,"morphTargetInfluences",m),u.getUniforms().setValue(o,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{const v=m===void 0?0:m.length;let E=n[h.id];if(E===void 0||E.length!==v){E=[];for(let b=0;b<v;b++)E[b]=[b,0];n[h.id]=E}for(let b=0;b<v;b++){const w=E[b];w[0]=b,w[1]=m[b]}E.sort(K0);for(let b=0;b<8;b++)b<v&&E[b][1]?(r[b][0]=E[b][0],r[b][1]=E[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(Z0);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const w=r[b],A=w[0],P=w[1];A!==Number.MAX_SAFE_INTEGER&&P?(f&&h.getAttribute("morphTarget"+b)!==f[A]&&h.setAttribute("morphTarget"+b,f[A]),d&&h.getAttribute("morphNormal"+b)!==d[A]&&h.setAttribute("morphNormal"+b,d[A]),i[b]=P,x+=P):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),d&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const _=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(o,"morphTargetBaseInfluence",_),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Q0(o,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==l&&(m.update(),i.set(m,l))}return u}function a(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Kd extends pn{constructor(t,e,n,i,s,a,r,c,l,h){if(h=h!==void 0?h:is,h!==is&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ii),n===void 0&&h===Vs&&(n=ns),super(null,i,s,a,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jd=new pn,Qd=new Kd(1,1);Qd.compareFunction=kd;const tu=new Gd,eu=new Bf,nu=new jd,uh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Zs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=uh[i];if(s===void 0&&(s=new Float32Array(i),uh[i]=s),t!==0){n.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function je(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function $e(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Qr(o,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function tg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function eg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2fv(this.addr,t),$e(e,t)}}function ng(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;o.uniform3fv(this.addr,t),$e(e,t)}}function ig(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4fv(this.addr,t),$e(e,t)}}function sg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;gh.set(n),o.uniformMatrix2fv(this.addr,!1,gh),$e(e,n)}}function og(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;mh.set(n),o.uniformMatrix3fv(this.addr,!1,mh),$e(e,n)}}function rg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;ph.set(n),o.uniformMatrix4fv(this.addr,!1,ph),$e(e,n)}}function ag(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function cg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2iv(this.addr,t),$e(e,t)}}function lg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3iv(this.addr,t),$e(e,t)}}function hg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4iv(this.addr,t),$e(e,t)}}function dg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function ug(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2uiv(this.addr,t),$e(e,t)}}function fg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3uiv(this.addr,t),$e(e,t)}}function pg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4uiv(this.addr,t),$e(e,t)}}function mg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?Qd:Jd;e.setTexture2D(t||s,i)}function gg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||eu,i)}function _g(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||nu,i)}function vg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||tu,i)}function xg(o){switch(o){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return og;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return dg;case 36294:return ug;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(o,t){o.uniform1fv(this.addr,t)}function Mg(o,t){const e=Zs(t,this.size,2);o.uniform2fv(this.addr,e)}function Eg(o,t){const e=Zs(t,this.size,3);o.uniform3fv(this.addr,e)}function bg(o,t){const e=Zs(t,this.size,4);o.uniform4fv(this.addr,e)}function Sg(o,t){const e=Zs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function wg(o,t){const e=Zs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Ag(o,t){const e=Zs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Tg(o,t){o.uniform1iv(this.addr,t)}function Cg(o,t){o.uniform2iv(this.addr,t)}function Rg(o,t){o.uniform3iv(this.addr,t)}function Pg(o,t){o.uniform4iv(this.addr,t)}function Lg(o,t){o.uniform1uiv(this.addr,t)}function Ig(o,t){o.uniform2uiv(this.addr,t)}function Dg(o,t){o.uniform3uiv(this.addr,t)}function Og(o,t){o.uniform4uiv(this.addr,t)}function Ng(o,t,e){const n=this.cache,i=t.length,s=Qr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Jd,s[a])}function Ug(o,t,e){const n=this.cache,i=t.length,s=Qr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||eu,s[a])}function Bg(o,t,e){const n=this.cache,i=t.length,s=Qr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||nu,s[a])}function kg(o,t,e){const n=this.cache,i=t.length,s=Qr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||tu,s[a])}function Fg(o){switch(o){case 5126:return yg;case 35664:return Mg;case 35665:return Eg;case 35666:return bg;case 35674:return Sg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Tg;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function _h(o,t){o.seq.push(t),o.map[t.id]=t}function Vg(o,t,e){const n=o.name,i=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),a=Ga.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===i){_h(e,l===void 0?new zg(r,o,t):new Hg(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new Gg(r),_h(e,u)),e=u}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Vg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function vh(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function qg(o){const t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(o);let n;switch(t===e?n="":t===Ur&&e===Nr?n="LinearDisplayP3ToLinearSRGB":t===Nr&&e===Ur&&(n="LinearSRGBToLinearDisplayP3"),o){case gi:case $r:return[n,"LinearTransferOETF"];case nn:case Jc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function xh(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Yg(o.getShaderSource(t),a)}else return i}function jg(o,t){const e=qg(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $g(o,t){let e;switch(t){case of:e="Linear";break;case rf:e="Reinhard";break;case af:e="OptimizedCineon";break;case cf:e="ACESFilmic";break;case hf:e="AgX";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function Kg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function Jg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Ns(o){return o!==""}function yh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(o){return o.replace(t_,n_)}const e_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n_(o,t){let e=re[t];if(e===void 0){const n=e_.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(o){return o.replace(i_,s_)}function s_(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zc:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case sf:t="ENVMAP_BLENDING_ADD";break}return t}function l_(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function h_(o,t,e,n){const i=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=o_(e),l=r_(e),h=a_(e),u=c_(e),m=l_(e),g=e.isWebGL2?"":Zg(e),v=Kg(e),E=Jg(s),f=i.createProgram();let d,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ns).join(`
`),d.length>0&&(d+=`
`),x=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ns).join(`
`),x.length>0&&(x+=`
`)):(d=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),x=[g,bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?re.tonemapping_pars_fragment:"",e.toneMapping!==pi?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Dc(a),a=yh(a,e),a=Mh(a,e),r=Dc(r),r=yh(r,e),r=Mh(r,e),a=Eh(a),r=Eh(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=_+d+a,w=_+x+r,A=vh(i,i.VERTEX_SHADER,b),P=vh(i,i.FRAGMENT_SHADER,w);i.attachShader(f,A),i.attachShader(f,P),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function U(Y){if(o.debug.checkShaderErrors){const K=i.getProgramInfoLog(f).trim(),F=i.getShaderInfoLog(A).trim(),q=i.getShaderInfoLog(P).trim();let Z=!0,tt=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,f,A,P);else{const it=xh(i,A,"vertex"),st=xh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+it+`
`+st)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(F===""||q==="")&&(tt=!1);tt&&(Y.diagnostics={runnable:Z,programLog:K,vertexShader:{log:F,prefix:d},fragmentShader:{log:q,prefix:x}})}i.deleteShader(A),i.deleteShader(P),S=new Tr(i,f),C=Qg(i,f)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(f,Wg)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=P,this}let d_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f_(t),e.set(t,n)),n}}class f_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function p_(o,t,e,n,i,s,a){const r=new Qc,c=new u_,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return S===0?"uv":`uv${S}`}function f(S,C,H,Y,K){const F=Y.fog,q=K.geometry,Z=S.isMeshStandardMaterial?Y.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),it=tt&&tt.mapping===jr?tt.image.height:null,st=v[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=ot!==void 0?ot.length:0;let pt=0;q.morphAttributes.position!==void 0&&(pt=1),q.morphAttributes.normal!==void 0&&(pt=2),q.morphAttributes.color!==void 0&&(pt=3);let Q,at,bt,Ct;if(st){const tn=ti[st];Q=tn.vertexShader,at=tn.fragmentShader}else Q=S.vertexShader,at=S.fragmentShader,c.update(S),bt=c.getVertexShaderID(S),Ct=c.getFragmentShaderID(S);const Nt=o.getRenderTarget(),$t=K.isInstancedMesh===!0,Zt=K.isBatchedMesh===!0,zt=!!S.map,de=!!S.matcap,$=!!tt,_e=!!S.aoMap,kt=!!S.lightMap,qt=!!S.bumpMap,Rt=!!S.normalMap,xe=!!S.displacementMap,te=!!S.emissiveMap,O=!!S.metalnessMap,I=!!S.roughnessMap,j=S.anisotropy>0,ht=S.clearcoat>0,lt=S.iridescence>0,dt=S.sheen>0,Lt=S.transmission>0,vt=j&&!!S.anisotropyMap,wt=ht&&!!S.clearcoatMap,Ht=ht&&!!S.clearcoatNormalMap,Kt=ht&&!!S.clearcoatRoughnessMap,rt=lt&&!!S.iridescenceMap,ve=lt&&!!S.iridescenceThicknessMap,oe=dt&&!!S.sheenColorMap,Yt=dt&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,At=!!S.specularColorMap,ee=!!S.specularIntensityMap,fe=Lt&&!!S.transmissionMap,Ie=Lt&&!!S.thicknessMap,ne=!!S.gradientMap,ft=!!S.alphaMap,z=S.alphaTest>0,Mt=!!S.alphaHash,xt=!!S.extensions,Vt=!!q.attributes.uv1,Ft=!!q.attributes.uv2,ye=!!q.attributes.uv3;let Me=pi;return S.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Me=o.toneMapping),{isWebGL2:h,shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:at,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:Ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Zt,instancing:$t,instancingColor:$t&&K.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Nt===null?o.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:gi,map:zt,matcap:de,envMap:$,envMapMode:$&&tt.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:kt,bumpMap:qt,normalMap:Rt,displacementMap:m&&xe,emissiveMap:te,normalMapObjectSpace:Rt&&S.normalMapType===Ef,normalMapTangentSpace:Rt&&S.normalMapType===Bd,metalnessMap:O,roughnessMap:I,anisotropy:j,anisotropyMap:vt,clearcoat:ht,clearcoatMap:wt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Kt,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:ve,sheen:dt,sheenColorMap:oe,sheenRoughnessMap:Yt,specularMap:Pt,specularColorMap:At,specularIntensityMap:ee,transmission:Lt,transmissionMap:fe,thicknessMap:Ie,gradientMap:ne,opaque:S.transparent===!1&&S.blending===ks,alphaMap:ft,alphaTest:z,alphaHash:Mt,combine:S.combine,mapUv:zt&&E(S.map.channel),aoMapUv:_e&&E(S.aoMap.channel),lightMapUv:kt&&E(S.lightMap.channel),bumpMapUv:qt&&E(S.bumpMap.channel),normalMapUv:Rt&&E(S.normalMap.channel),displacementMapUv:xe&&E(S.displacementMap.channel),emissiveMapUv:te&&E(S.emissiveMap.channel),metalnessMapUv:O&&E(S.metalnessMap.channel),roughnessMapUv:I&&E(S.roughnessMap.channel),anisotropyMapUv:vt&&E(S.anisotropyMap.channel),clearcoatMapUv:wt&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&E(S.sheenRoughnessMap.channel),specularMapUv:Pt&&E(S.specularMap.channel),specularColorMapUv:At&&E(S.specularColorMap.channel),specularIntensityMapUv:ee&&E(S.specularIntensityMap.channel),transmissionMapUv:fe&&E(S.transmissionMap.channel),thicknessMapUv:Ie&&E(S.thicknessMap.channel),alphaMapUv:ft&&E(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Rt||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:Ft,vertexUv3s:ye,pointsUvs:K.isPoints===!0&&!!q.attributes.uv&&(zt||ft),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,useLegacyLights:o._useLegacyLights,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&Ee.getTransfer(S.map.colorSpace)===Oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xt&&S.extensions.derivatives===!0,extensionFragDepth:xt&&S.extensions.fragDepth===!0,extensionDrawBuffers:xt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)C.push(H),C.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(x(C,S),_(C,S),C.push(o.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function x(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){r.disableAll(),C.isWebGL2&&r.enable(0),C.supportsVertexTextures&&r.enable(1),C.instancing&&r.enable(2),C.instancingColor&&r.enable(3),C.matcap&&r.enable(4),C.envMap&&r.enable(5),C.normalMapObjectSpace&&r.enable(6),C.normalMapTangentSpace&&r.enable(7),C.clearcoat&&r.enable(8),C.iridescence&&r.enable(9),C.alphaTest&&r.enable(10),C.vertexColors&&r.enable(11),C.vertexAlphas&&r.enable(12),C.vertexUv1s&&r.enable(13),C.vertexUv2s&&r.enable(14),C.vertexUv3s&&r.enable(15),C.vertexTangents&&r.enable(16),C.anisotropy&&r.enable(17),C.alphaHash&&r.enable(18),C.batching&&r.enable(19),S.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.skinning&&r.enable(4),C.morphTargets&&r.enable(5),C.morphNormals&&r.enable(6),C.morphColors&&r.enable(7),C.premultipliedAlpha&&r.enable(8),C.shadowMapEnabled&&r.enable(9),C.useLegacyLights&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),S.push(r.mask)}function b(S){const C=v[S.type];let H;if(C){const Y=ti[C];H=Zf.clone(Y.uniforms)}else H=S.uniforms;return H}function w(S,C){let H;for(let Y=0,K=l.length;Y<K;Y++){const F=l[Y];if(F.cacheKey===C){H=F,++H.usedTimes;break}}return H===void 0&&(H=new h_(o,C,S,s),l.push(H)),H}function A(S){if(--S.usedTimes===0){const C=l.indexOf(S);l[C]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:U}}function m_(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function n(s,a,r){o.get(s)[a]=r}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function g_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function wh(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,m,g,v,E,f){let d=o[t];return d===void 0?(d={id:u.id,object:u,geometry:m,material:g,groupOrder:v,renderOrder:u.renderOrder,z:E,group:f},o[t]=d):(d.id=u.id,d.object=u,d.geometry=m,d.material=g,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=E,d.group=f),t++,d}function r(u,m,g,v,E,f){const d=a(u,m,g,v,E,f);g.transmission>0?n.push(d):g.transparent===!0?i.push(d):e.push(d)}function c(u,m,g,v,E,f){const d=a(u,m,g,v,E,f);g.transmission>0?n.unshift(d):g.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,m){e.length>1&&e.sort(u||g_),n.length>1&&n.sort(m||Sh),i.length>1&&i.sort(m||Sh)}function h(){for(let u=t,m=o.length;u<m;u++){const g=o[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function __(){let o=new WeakMap;function t(n,i){const s=o.get(n);let a;return s===void 0?(a=new wh,o.set(n,[a])):i>=s.length?(a=new wh,s.push(a)):a=s[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function v_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new yt};break;case"SpotLight":e={position:new k,direction:new k,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=e,e}}}function x_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let y_=0;function M_(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function E_(o,t){const e=new v_,n=x_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new k);const s=new k,a=new Ae,r=new Ae;function c(h,u){let m=0,g=0,v=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let E=0,f=0,d=0,x=0,_=0,b=0,w=0,A=0,P=0,U=0,S=0;h.sort(M_);const C=u===!0?Math.PI:1;for(let Y=0,K=h.length;Y<K;Y++){const F=h[Y],q=F.color,Z=F.intensity,tt=F.distance,it=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=q.r*Z*C,g+=q.g*Z*C,v+=q.b*Z*C;else if(F.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(F.sh.coefficients[st],Z);S++}else if(F.isDirectionalLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.directionalShadow[E]=ut,i.directionalShadowMap[E]=it,i.directionalShadowMatrix[E]=F.shadow.matrix,b++}i.directional[E]=st,E++}else if(F.isSpotLight){const st=e.get(F);st.position.setFromMatrixPosition(F.matrixWorld),st.color.copy(q).multiplyScalar(Z*C),st.distance=tt,st.coneCos=Math.cos(F.angle),st.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),st.decay=F.decay,i.spot[d]=st;const ot=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,ot.updateMatrices(F),F.castShadow&&U++),i.spotLightMatrix[d]=ot.matrix,F.castShadow){const ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.spotShadow[d]=ut,i.spotShadowMap[d]=it,A++}d++}else if(F.isRectAreaLight){const st=e.get(F);st.color.copy(q).multiplyScalar(Z),st.halfWidth.set(F.width*.5,0,0),st.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=st,x++}else if(F.isPointLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*C),st.distance=F.distance,st.decay=F.decay,F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,i.pointShadow[f]=ut,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=F.shadow.matrix,w++}i.point[f]=st,f++}else if(F.isHemisphereLight){const st=e.get(F);st.skyColor.copy(F.color).multiplyScalar(Z*C),st.groundColor.copy(F.groundColor).multiplyScalar(Z*C),i.hemi[_]=st,_++}}x>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==E||H.pointLength!==f||H.spotLength!==d||H.rectAreaLength!==x||H.hemiLength!==_||H.numDirectionalShadows!==b||H.numPointShadows!==w||H.numSpotShadows!==A||H.numSpotMaps!==P||H.numLightProbes!==S)&&(i.directional.length=E,i.spot.length=d,i.rectArea.length=x,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+P-U,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=S,H.directionalLength=E,H.pointLength=f,H.spotLength=d,H.rectAreaLength=x,H.hemiLength=_,H.numDirectionalShadows=b,H.numPointShadows=w,H.numSpotShadows=A,H.numSpotMaps=P,H.numLightProbes=S,i.version=y_++)}function l(h,u){let m=0,g=0,v=0,E=0,f=0;const d=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const b=h[x];if(b.isDirectionalLight){const w=i.directional[m];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(b.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),r.identity(),a.copy(b.matrixWorld),a.premultiply(d),r.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),E++}else if(b.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),g++}else if(b.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(d),f++}}}return{setup:c,setupView:l,state:i}}function Ah(o,t){const e=new E_(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function b_(o,t){let e=new WeakMap;function n(s,a=0){const r=e.get(s);let c;return r===void 0?(c=new Ah(o,t),e.set(s,[c])):a>=r.length?(c=new Ah(o,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class S_ extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class w_ extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function C_(o,t,e){let n=new tl;const i=new ie,s=new ie,a=new ke,r=new S_({depthPacking:Mf}),c=new w_,l={},h=e.maxTextureSize,u={[mi]:fn,[fn]:mi,[ei]:ei},m=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:A_,fragmentShader:T_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Qt(v,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let d=this.type;this.render=function(A,P,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const S=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Oi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=d!==li&&this.type===li,F=d===li&&this.type!==li;for(let q=0,Z=A.length;q<Z;q++){const tt=A[q],it=tt.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);const st=it.getFrameExtents();if(i.multiply(st),s.copy(it.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,it.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,it.mapSize.y=s.y)),it.map===null||K===!0||F===!0){const ut=this.type!==li?{minFilter:ze,magFilter:ze}:{};it.map!==null&&it.map.dispose(),it.map=new os(i.x,i.y,ut),it.map.texture.name=tt.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const ot=it.getViewportCount();for(let ut=0;ut<ot;ut++){const pt=it.getViewport(ut);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),Y.viewport(a),it.updateMatrices(tt,ut),n=it.getFrustum(),b(P,U,it.camera,tt,this.type)}it.isPointLightShadow!==!0&&this.type===li&&x(it,U),it.needsUpdate=!1}d=this.type,f.needsUpdate=!1,o.setRenderTarget(S,C,H)};function x(A,P){const U=t.update(E);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new os(i.x,i.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(P,null,U,m,E,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(P,null,U,g,E,null)}function _(A,P,U,S){let C=null;const H=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)C=H;else if(C=U.isPointLight===!0?c:r,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=C.uuid,K=P.uuid;let F=l[Y];F===void 0&&(F={},l[Y]=F);let q=F[K];q===void 0&&(q=C.clone(),F[K]=q,P.addEventListener("dispose",w)),C=q}if(C.visible=P.visible,C.wireframe=P.wireframe,S===li?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:u[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=o.properties.get(C);Y.light=U}return C}function b(A,P,U,S,C){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const K=t.update(A),F=A.material;if(Array.isArray(F)){const q=K.groups;for(let Z=0,tt=q.length;Z<tt;Z++){const it=q[Z],st=F[it.materialIndex];if(st&&st.visible){const ot=_(A,st,S,C);A.onBeforeShadow(o,A,P,U,K,ot,it),o.renderBufferDirect(U,null,K,ot,A,it),A.onAfterShadow(o,A,P,U,K,ot,it)}}}else if(F.visible){const q=_(A,F,S,C);A.onBeforeShadow(o,A,P,U,K,q,null),o.renderBufferDirect(U,null,K,q,A,null),A.onAfterShadow(o,A,P,U,K,q,null)}}const Y=A.children;for(let K=0,F=Y.length;K<F;K++)b(Y[K],P,U,S,C)}function w(A){A.target.removeEventListener("dispose",w);for(const U in l){const S=l[U],C=A.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function R_(o,t,e){const n=e.isWebGL2;function i(){let z=!1;const Mt=new ke;let xt=null;const Vt=new ke(0,0,0,0);return{setMask:function(Ft){xt!==Ft&&!z&&(o.colorMask(Ft,Ft,Ft,Ft),xt=Ft)},setLocked:function(Ft){z=Ft},setClear:function(Ft,ye,Me,ge,tn){tn===!0&&(Ft*=ge,ye*=ge,Me*=ge),Mt.set(Ft,ye,Me,ge),Vt.equals(Mt)===!1&&(o.clearColor(Ft,ye,Me,ge),Vt.copy(Mt))},reset:function(){z=!1,xt=null,Vt.set(-1,0,0,0)}}}function s(){let z=!1,Mt=null,xt=null,Vt=null;return{setTest:function(Ft){Ft?Zt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(Ft){Mt!==Ft&&!z&&(o.depthMask(Ft),Mt=Ft)},setFunc:function(Ft){if(xt!==Ft){switch(Ft){case $u:o.depthFunc(o.NEVER);break;case Zu:o.depthFunc(o.ALWAYS);break;case Ku:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Ju:o.depthFunc(o.EQUAL);break;case Qu:o.depthFunc(o.GEQUAL);break;case tf:o.depthFunc(o.GREATER);break;case ef:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=Ft}},setLocked:function(Ft){z=Ft},setClear:function(Ft){Vt!==Ft&&(o.clearDepth(Ft),Vt=Ft)},reset:function(){z=!1,Mt=null,xt=null,Vt=null}}}function a(){let z=!1,Mt=null,xt=null,Vt=null,Ft=null,ye=null,Me=null,ge=null,tn=null;return{setTest:function(ue){z||(ue?Zt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(ue){Mt!==ue&&!z&&(o.stencilMask(ue),Mt=ue)},setFunc:function(ue,qe,gn){(xt!==ue||Vt!==qe||Ft!==gn)&&(o.stencilFunc(ue,qe,gn),xt=ue,Vt=qe,Ft=gn)},setOp:function(ue,qe,gn){(ye!==ue||Me!==qe||ge!==gn)&&(o.stencilOp(ue,qe,gn),ye=ue,Me=qe,ge=gn)},setLocked:function(ue){z=ue},setClear:function(ue){tn!==ue&&(o.clearStencil(ue),tn=ue)},reset:function(){z=!1,Mt=null,xt=null,Vt=null,Ft=null,ye=null,Me=null,ge=null,tn=null}}}const r=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap;let m={},g={},v=new WeakMap,E=[],f=null,d=!1,x=null,_=null,b=null,w=null,A=null,P=null,U=null,S=new yt(0,0,0),C=0,H=!1,Y=null,K=null,F=null,q=null,Z=null;const tt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,st=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(ot)[1]),it=st>=1):ot.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),it=st>=2);let ut=null,pt={};const Q=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),bt=new ke().fromArray(Q),Ct=new ke().fromArray(at);function Nt(z,Mt,xt,Vt){const Ft=new Uint8Array(4),ye=o.createTexture();o.bindTexture(z,ye),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Me=0;Me<xt;Me++)n&&(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)?o.texImage3D(Mt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,Ft):o.texImage2D(Mt+Me,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ft);return ye}const $t={};$t[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),$t[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&($t[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$t[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Zt(o.DEPTH_TEST),c.setFunc(Dr),te(!1),O(cl),Zt(o.CULL_FACE),Rt(Oi);function Zt(z){m[z]!==!0&&(o.enable(z),m[z]=!0)}function zt(z){m[z]!==!1&&(o.disable(z),m[z]=!1)}function de(z,Mt){return g[z]!==Mt?(o.bindFramebuffer(z,Mt),g[z]=Mt,n&&(z===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Mt),z===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function $(z,Mt){let xt=E,Vt=!1;if(z)if(xt=v.get(Mt),xt===void 0&&(xt=[],v.set(Mt,xt)),z.isWebGLMultipleRenderTargets){const Ft=z.texture;if(xt.length!==Ft.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,Me=Ft.length;ye<Me;ye++)xt[ye]=o.COLOR_ATTACHMENT0+ye;xt.length=Ft.length,Vt=!0}}else xt[0]!==o.COLOR_ATTACHMENT0&&(xt[0]=o.COLOR_ATTACHMENT0,Vt=!0);else xt[0]!==o.BACK&&(xt[0]=o.BACK,Vt=!0);Vt&&(e.isWebGL2?o.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function _e(z){return f!==z?(o.useProgram(z),f=z,!0):!1}const kt={[Zi]:o.FUNC_ADD,[Ou]:o.FUNC_SUBTRACT,[Nu]:o.FUNC_REVERSE_SUBTRACT};if(n)kt[ul]=o.MIN,kt[fl]=o.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(kt[ul]=z.MIN_EXT,kt[fl]=z.MAX_EXT)}const qt={[Uu]:o.ZERO,[Bu]:o.ONE,[ku]:o.SRC_COLOR,[bc]:o.SRC_ALPHA,[Wu]:o.SRC_ALPHA_SATURATE,[Gu]:o.DST_COLOR,[zu]:o.DST_ALPHA,[Fu]:o.ONE_MINUS_SRC_COLOR,[Sc]:o.ONE_MINUS_SRC_ALPHA,[Vu]:o.ONE_MINUS_DST_COLOR,[Hu]:o.ONE_MINUS_DST_ALPHA,[Xu]:o.CONSTANT_COLOR,[Yu]:o.ONE_MINUS_CONSTANT_COLOR,[qu]:o.CONSTANT_ALPHA,[ju]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(z,Mt,xt,Vt,Ft,ye,Me,ge,tn,ue){if(z===Oi){d===!0&&(zt(o.BLEND),d=!1);return}if(d===!1&&(Zt(o.BLEND),d=!0),z!==Du){if(z!==x||ue!==H){if((_!==Zi||A!==Zi)&&(o.blendEquation(o.FUNC_ADD),_=Zi,A=Zi),ue)switch(z){case ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ll:o.blendFunc(o.ONE,o.ONE);break;case hl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ll:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case hl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,w=null,P=null,U=null,S.set(0,0,0),C=0,x=z,H=ue}return}Ft=Ft||Mt,ye=ye||xt,Me=Me||Vt,(Mt!==_||Ft!==A)&&(o.blendEquationSeparate(kt[Mt],kt[Ft]),_=Mt,A=Ft),(xt!==b||Vt!==w||ye!==P||Me!==U)&&(o.blendFuncSeparate(qt[xt],qt[Vt],qt[ye],qt[Me]),b=xt,w=Vt,P=ye,U=Me),(ge.equals(S)===!1||tn!==C)&&(o.blendColor(ge.r,ge.g,ge.b,tn),S.copy(ge),C=tn),x=z,H=!1}function xe(z,Mt){z.side===ei?zt(o.CULL_FACE):Zt(o.CULL_FACE);let xt=z.side===fn;Mt&&(xt=!xt),te(xt),z.blending===ks&&z.transparent===!1?Rt(Oi):Rt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),r.setMask(z.colorWrite);const Vt=z.stencilWrite;l.setTest(Vt),Vt&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),j(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Zt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){Y!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),Y=z)}function O(z){z!==Pu?(Zt(o.CULL_FACE),z!==K&&(z===cl?o.cullFace(o.BACK):z===Lu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),K=z}function I(z){z!==F&&(it&&o.lineWidth(z),F=z)}function j(z,Mt,xt){z?(Zt(o.POLYGON_OFFSET_FILL),(q!==Mt||Z!==xt)&&(o.polygonOffset(Mt,xt),q=Mt,Z=xt)):zt(o.POLYGON_OFFSET_FILL)}function ht(z){z?Zt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function lt(z){z===void 0&&(z=o.TEXTURE0+tt-1),ut!==z&&(o.activeTexture(z),ut=z)}function dt(z,Mt,xt){xt===void 0&&(ut===null?xt=o.TEXTURE0+tt-1:xt=ut);let Vt=pt[xt];Vt===void 0&&(Vt={type:void 0,texture:void 0},pt[xt]=Vt),(Vt.type!==z||Vt.texture!==Mt)&&(ut!==xt&&(o.activeTexture(xt),ut=xt),o.bindTexture(z,Mt||$t[z]),Vt.type=z,Vt.texture=Mt)}function Lt(){const z=pt[ut];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function vt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Kt(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(z){bt.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),bt.copy(z))}function fe(z){Ct.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),Ct.copy(z))}function Ie(z,Mt){let xt=u.get(Mt);xt===void 0&&(xt=new WeakMap,u.set(Mt,xt));let Vt=xt.get(z);Vt===void 0&&(Vt=o.getUniformBlockIndex(Mt,z.name),xt.set(z,Vt))}function ne(z,Mt){const Vt=u.get(Mt).get(z);h.get(Mt)!==Vt&&(o.uniformBlockBinding(Mt,Vt,z.__bindingPointIndex),h.set(Mt,Vt))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ut=null,pt={},g={},v=new WeakMap,E=[],f=null,d=!1,x=null,_=null,b=null,w=null,A=null,P=null,U=null,S=new yt(0,0,0),C=0,H=!1,Y=null,K=null,F=null,q=null,Z=null,bt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Zt,disable:zt,bindFramebuffer:de,drawBuffers:$,useProgram:_e,setBlending:Rt,setMaterial:xe,setFlipSided:te,setCullFace:O,setLineWidth:I,setPolygonOffset:j,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Lt,compressedTexImage2D:vt,compressedTexImage3D:wt,texImage2D:Pt,texImage3D:At,updateUBOMapping:Ie,uniformBlockBinding:ne,texStorage2D:oe,texStorage3D:Yt,texSubImage2D:Ht,texSubImage3D:Kt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ve,scissor:ee,viewport:fe,reset:ft}}function P_(o,t,e,n,i,s,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,I){return g?new OffscreenCanvas(O,I):kr("canvas")}function E(O,I,j,ht){let lt=1;if((O.width>ht||O.height>ht)&&(lt=ht/Math.max(O.width,O.height)),lt<1||I===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const dt=I?Ic:Math.floor,Lt=dt(lt*O.width),vt=dt(lt*O.height);u===void 0&&(u=v(Lt,vt));const wt=j?v(Lt,vt):u;return wt.width=Lt,wt.height=vt,wt.getContext("2d").drawImage(O,0,0,Lt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Lt+"x"+vt+")."),wt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function f(O){return Gl(O.width)&&Gl(O.height)}function d(O){return r?!1:O.wrapS!==Cn||O.wrapT!==Cn||O.minFilter!==ze&&O.minFilter!==Dn}function x(O,I){return O.generateMipmaps&&I&&O.minFilter!==ze&&O.minFilter!==Dn}function _(O){o.generateMipmap(O)}function b(O,I,j,ht,lt=!1){if(r===!1)return I;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=I;if(I===o.RED&&(j===o.FLOAT&&(dt=o.R32F),j===o.HALF_FLOAT&&(dt=o.R16F),j===o.UNSIGNED_BYTE&&(dt=o.R8)),I===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(dt=o.R8UI),j===o.UNSIGNED_SHORT&&(dt=o.R16UI),j===o.UNSIGNED_INT&&(dt=o.R32UI),j===o.BYTE&&(dt=o.R8I),j===o.SHORT&&(dt=o.R16I),j===o.INT&&(dt=o.R32I)),I===o.RG&&(j===o.FLOAT&&(dt=o.RG32F),j===o.HALF_FLOAT&&(dt=o.RG16F),j===o.UNSIGNED_BYTE&&(dt=o.RG8)),I===o.RGBA){const Lt=lt?Or:Ee.getTransfer(ht);j===o.FLOAT&&(dt=o.RGBA32F),j===o.HALF_FLOAT&&(dt=o.RGBA16F),j===o.UNSIGNED_BYTE&&(dt=Lt===Oe?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(O,I,j){return x(O,j)===!0||O.isFramebufferTexture&&O.minFilter!==ze&&O.minFilter!==Dn?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function A(O){return O===ze||O===pl||O===pa?o.NEAREST:o.LINEAR}function P(O){const I=O.target;I.removeEventListener("dispose",P),S(I),I.isVideoTexture&&h.delete(I)}function U(O){const I=O.target;I.removeEventListener("dispose",U),H(I)}function S(O){const I=n.get(O);if(I.__webglInit===void 0)return;const j=O.source,ht=m.get(j);if(ht){const lt=ht[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&C(O),Object.keys(ht).length===0&&m.delete(j)}n.remove(O)}function C(O){const I=n.get(O);o.deleteTexture(I.__webglTexture);const j=O.source,ht=m.get(j);delete ht[I.__cacheKey],a.memory.textures--}function H(O){const I=O.texture,j=n.get(O),ht=n.get(I);if(ht.__webglTexture!==void 0&&(o.deleteTexture(ht.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(j.__webglFramebuffer[lt]))for(let dt=0;dt<j.__webglFramebuffer[lt].length;dt++)o.deleteFramebuffer(j.__webglFramebuffer[lt][dt]);else o.deleteFramebuffer(j.__webglFramebuffer[lt]);j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[lt])}else{if(Array.isArray(j.__webglFramebuffer))for(let lt=0;lt<j.__webglFramebuffer.length;lt++)o.deleteFramebuffer(j.__webglFramebuffer[lt]);else o.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let lt=0;lt<j.__webglColorRenderbuffer.length;lt++)j.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[lt]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let lt=0,dt=I.length;lt<dt;lt++){const Lt=n.get(I[lt]);Lt.__webglTexture&&(o.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(I[lt])}n.remove(I),n.remove(O)}let Y=0;function K(){Y=0}function F(){const O=Y;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),Y+=1,O}function q(O){const I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function Z(O,I){const j=n.get(O);if(O.isVideoTexture&&xe(O),O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(j,O,I);return}}e.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+I)}function tt(O,I){const j=n.get(O);if(O.version>0&&j.__version!==O.version){bt(j,O,I);return}e.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+I)}function it(O,I){const j=n.get(O);if(O.version>0&&j.__version!==O.version){bt(j,O,I);return}e.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+I)}function st(O,I){const j=n.get(O);if(O.version>0&&j.__version!==O.version){Ct(j,O,I);return}e.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+I)}const ot={[Tc]:o.REPEAT,[Cn]:o.CLAMP_TO_EDGE,[Cc]:o.MIRRORED_REPEAT},ut={[ze]:o.NEAREST,[pl]:o.NEAREST_MIPMAP_NEAREST,[pa]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[df]:o.LINEAR_MIPMAP_NEAREST,[Eo]:o.LINEAR_MIPMAP_LINEAR},pt={[bf]:o.NEVER,[Rf]:o.ALWAYS,[Sf]:o.LESS,[kd]:o.LEQUAL,[wf]:o.EQUAL,[Cf]:o.GEQUAL,[Af]:o.GREATER,[Tf]:o.NOTEQUAL};function Q(O,I,j){if(j?(o.texParameteri(O,o.TEXTURE_WRAP_S,ot[I.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ot[I.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ot[I.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,ut[I.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,ut[I.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(I.wrapS!==Cn||I.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,A(I.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,A(I.minFilter)),I.minFilter!==ze&&I.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),I.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,pt[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(I.magFilter===ze||I.minFilter!==pa&&I.minFilter!==Eo||I.type===Di&&t.has("OES_texture_float_linear")===!1||r===!1&&I.type===bo&&t.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(o.texParameterf(O,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function at(O,I){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",P));const ht=I.source;let lt=m.get(ht);lt===void 0&&(lt={},m.set(ht,lt));const dt=q(I);if(dt!==O.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,j=!0),lt[dt].usedTimes++;const Lt=lt[O.__cacheKey];Lt!==void 0&&(lt[O.__cacheKey].usedTimes--,Lt.usedTimes===0&&C(I)),O.__cacheKey=dt,O.__webglTexture=lt[dt].texture}return j}function bt(O,I,j){let ht=o.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ht=o.TEXTURE_3D);const lt=at(O,I),dt=I.source;e.bindTexture(ht,O.__webglTexture,o.TEXTURE0+j);const Lt=n.get(dt);if(dt.version!==Lt.__version||lt===!0){e.activeTexture(o.TEXTURE0+j);const vt=Ee.getPrimaries(Ee.workingColorSpace),wt=I.colorSpace===On?null:Ee.getPrimaries(I.colorSpace),Ht=I.colorSpace===On||vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Kt=d(I)&&f(I.image)===!1;let rt=E(I.image,Kt,!1,i.maxTextureSize);rt=te(I,rt);const ve=f(rt)||r,oe=s.convert(I.format,I.colorSpace);let Yt=s.convert(I.type),Pt=b(I.internalFormat,oe,Yt,I.colorSpace,I.isVideoTexture);Q(ht,I,ve);let At;const ee=I.mipmaps,fe=r&&I.isVideoTexture!==!0&&Pt!==Nd,Ie=Lt.__version===void 0||lt===!0,ne=w(I,rt,ve);if(I.isDepthTexture)Pt=o.DEPTH_COMPONENT,r?I.type===Di?Pt=o.DEPTH_COMPONENT32F:I.type===Ii?Pt=o.DEPTH_COMPONENT24:I.type===ns?Pt=o.DEPTH24_STENCIL8:Pt=o.DEPTH_COMPONENT16:I.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===is&&Pt===o.DEPTH_COMPONENT&&I.type!==Kc&&I.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Ii,Yt=s.convert(I.type)),I.format===Vs&&Pt===o.DEPTH_COMPONENT&&(Pt=o.DEPTH_STENCIL,I.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=ns,Yt=s.convert(I.type))),Ie&&(fe?e.texStorage2D(o.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(o.TEXTURE_2D,0,Pt,rt.width,rt.height,0,oe,Yt,null));else if(I.isDataTexture)if(ee.length>0&&ve){fe&&Ie&&e.texStorage2D(o.TEXTURE_2D,ne,Pt,ee[0].width,ee[0].height);for(let ft=0,z=ee.length;ft<z;ft++)At=ee[ft],fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,At.width,At.height,oe,Yt,At.data):e.texImage2D(o.TEXTURE_2D,ft,Pt,At.width,At.height,0,oe,Yt,At.data);I.generateMipmaps=!1}else fe?(Ie&&e.texStorage2D(o.TEXTURE_2D,ne,Pt,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,rt.width,rt.height,oe,Yt,rt.data)):e.texImage2D(o.TEXTURE_2D,0,Pt,rt.width,rt.height,0,oe,Yt,rt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){fe&&Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ne,Pt,ee[0].width,ee[0].height,rt.depth);for(let ft=0,z=ee.length;ft<z;ft++)At=ee[ft],I.format!==Yn?oe!==null?fe?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,oe,At.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,Pt,At.width,At.height,rt.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,oe,Yt,At.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ft,Pt,At.width,At.height,rt.depth,0,oe,Yt,At.data)}else{fe&&Ie&&e.texStorage2D(o.TEXTURE_2D,ne,Pt,ee[0].width,ee[0].height);for(let ft=0,z=ee.length;ft<z;ft++)At=ee[ft],I.format!==Yn?oe!==null?fe?e.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,At.width,At.height,oe,At.data):e.compressedTexImage2D(o.TEXTURE_2D,ft,Pt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,At.width,At.height,oe,Yt,At.data):e.texImage2D(o.TEXTURE_2D,ft,Pt,At.width,At.height,0,oe,Yt,At.data)}else if(I.isDataArrayTexture)fe?(Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ne,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,oe,Yt,rt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,oe,Yt,rt.data);else if(I.isData3DTexture)fe?(Ie&&e.texStorage3D(o.TEXTURE_3D,ne,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,oe,Yt,rt.data)):e.texImage3D(o.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,oe,Yt,rt.data);else if(I.isFramebufferTexture){if(Ie)if(fe)e.texStorage2D(o.TEXTURE_2D,ne,Pt,rt.width,rt.height);else{let ft=rt.width,z=rt.height;for(let Mt=0;Mt<ne;Mt++)e.texImage2D(o.TEXTURE_2D,Mt,Pt,ft,z,0,oe,Yt,null),ft>>=1,z>>=1}}else if(ee.length>0&&ve){fe&&Ie&&e.texStorage2D(o.TEXTURE_2D,ne,Pt,ee[0].width,ee[0].height);for(let ft=0,z=ee.length;ft<z;ft++)At=ee[ft],fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,oe,Yt,At):e.texImage2D(o.TEXTURE_2D,ft,Pt,oe,Yt,At);I.generateMipmaps=!1}else fe?(Ie&&e.texStorage2D(o.TEXTURE_2D,ne,Pt,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,oe,Yt,rt)):e.texImage2D(o.TEXTURE_2D,0,Pt,oe,Yt,rt);x(I,ve)&&_(ht),Lt.__version=dt.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Ct(O,I,j){if(I.image.length!==6)return;const ht=at(O,I),lt=I.source;e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+j);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(o.TEXTURE0+j);const Lt=Ee.getPrimaries(Ee.workingColorSpace),vt=I.colorSpace===On?null:Ee.getPrimaries(I.colorSpace),wt=I.colorSpace===On||Lt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ht=I.isCompressedTexture||I.image[0].isCompressedTexture,Kt=I.image[0]&&I.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!Ht&&!Kt?rt[ft]=E(I.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=Kt?I.image[ft].image:I.image[ft],rt[ft]=te(I,rt[ft]);const ve=rt[0],oe=f(ve)||r,Yt=s.convert(I.format,I.colorSpace),Pt=s.convert(I.type),At=b(I.internalFormat,Yt,Pt,I.colorSpace),ee=r&&I.isVideoTexture!==!0,fe=dt.__version===void 0||ht===!0;let Ie=w(I,ve,oe);Q(o.TEXTURE_CUBE_MAP,I,oe);let ne;if(Ht){ee&&fe&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,At,ve.width,ve.height);for(let ft=0;ft<6;ft++){ne=rt[ft].mipmaps;for(let z=0;z<ne.length;z++){const Mt=ne[z];I.format!==Yn?Yt!==null?ee?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z,0,0,Mt.width,Mt.height,Yt,Mt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z,At,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z,0,0,Mt.width,Mt.height,Yt,Pt,Mt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z,At,Mt.width,Mt.height,0,Yt,Pt,Mt.data)}}}else{ne=I.mipmaps,ee&&fe&&(ne.length>0&&Ie++,e.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,At,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(Kt){ee?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Yt,Pt,rt[ft].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,rt[ft].width,rt[ft].height,0,Yt,Pt,rt[ft].data);for(let z=0;z<ne.length;z++){const xt=ne[z].image[ft].image;ee?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z+1,0,0,xt.width,xt.height,Yt,Pt,xt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z+1,At,xt.width,xt.height,0,Yt,Pt,xt.data)}}else{ee?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Yt,Pt,rt[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,Yt,Pt,rt[ft]);for(let z=0;z<ne.length;z++){const Mt=ne[z];ee?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z+1,0,0,Yt,Pt,Mt.image[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,z+1,At,Yt,Pt,Mt.image[ft])}}}x(I,oe)&&_(o.TEXTURE_CUBE_MAP),dt.__version=lt.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function Nt(O,I,j,ht,lt,dt){const Lt=s.convert(j.format,j.colorSpace),vt=s.convert(j.type),wt=b(j.internalFormat,Lt,vt,j.colorSpace);if(!n.get(I).__hasExternalTextures){const Kt=Math.max(1,I.width>>dt),rt=Math.max(1,I.height>>dt);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,wt,Kt,rt,I.depth,0,Lt,vt,null):e.texImage2D(lt,dt,wt,Kt,rt,0,Lt,vt,null)}e.bindFramebuffer(o.FRAMEBUFFER,O),Rt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,0,qt(I)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,dt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(O,I,j){if(o.bindRenderbuffer(o.RENDERBUFFER,O),I.depthBuffer&&!I.stencilBuffer){let ht=r===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(j||Rt(I)){const lt=I.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Di?ht=o.DEPTH_COMPONENT32F:lt.type===Ii&&(ht=o.DEPTH_COMPONENT24));const dt=qt(I);Rt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,ht,I.width,I.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,ht,I.width,I.height)}else o.renderbufferStorage(o.RENDERBUFFER,ht,I.width,I.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(I.depthBuffer&&I.stencilBuffer){const ht=qt(I);j&&Rt(I)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,I.width,I.height):Rt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const ht=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Lt=s.convert(dt.format,dt.colorSpace),vt=s.convert(dt.type),wt=b(dt.internalFormat,Lt,vt,dt.colorSpace),Ht=qt(I);j&&Rt(I)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,wt,I.width,I.height):Rt(I)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,wt,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,wt,I.width,I.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(O,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Z(I.depthTexture,0);const ht=n.get(I.depthTexture).__webglTexture,lt=qt(I);if(I.depthTexture.format===is)Rt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(I.depthTexture.format===Vs)Rt(I)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function zt(O){const I=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!I.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Zt(I.__webglFramebuffer,O)}else if(j){I.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer[ht]),I.__webglDepthbuffer[ht]=o.createRenderbuffer(),$t(I.__webglDepthbuffer[ht],O,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=o.createRenderbuffer(),$t(I.__webglDepthbuffer,O,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function de(O,I,j){const ht=n.get(O);I!==void 0&&Nt(ht.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&zt(O)}function $(O){const I=O.texture,j=n.get(O),ht=n.get(I);O.addEventListener("dispose",U),O.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=I.version,a.memory.textures++);const lt=O.isWebGLCubeRenderTarget===!0,dt=O.isWebGLMultipleRenderTargets===!0,Lt=f(O)||r;if(lt){j.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(r&&I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer[vt]=[];for(let wt=0;wt<I.mipmaps.length;wt++)j.__webglFramebuffer[vt][wt]=o.createFramebuffer()}else j.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(r&&I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer=[];for(let vt=0;vt<I.mipmaps.length;vt++)j.__webglFramebuffer[vt]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(dt)if(i.drawBuffers){const vt=O.texture;for(let wt=0,Ht=vt.length;wt<Ht;wt++){const Kt=n.get(vt[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&O.samples>0&&Rt(O)===!1){const vt=dt?I:[I];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const Ht=vt[wt];j.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[wt]);const Kt=s.convert(Ht.format,Ht.colorSpace),rt=s.convert(Ht.type),ve=b(Ht.internalFormat,Kt,rt,Ht.colorSpace,O.isXRRenderTarget===!0),oe=qt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,oe,ve,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,j.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),$t(j.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){e.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Q(o.TEXTURE_CUBE_MAP,I,Lt);for(let vt=0;vt<6;vt++)if(r&&I.mipmaps&&I.mipmaps.length>0)for(let wt=0;wt<I.mipmaps.length;wt++)Nt(j.__webglFramebuffer[vt][wt],O,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else Nt(j.__webglFramebuffer[vt],O,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);x(I,Lt)&&_(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=O.texture;for(let wt=0,Ht=vt.length;wt<Ht;wt++){const Kt=vt[wt],rt=n.get(Kt);e.bindTexture(o.TEXTURE_2D,rt.__webglTexture),Q(o.TEXTURE_2D,Kt,Lt),Nt(j.__webglFramebuffer,O,Kt,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),x(Kt,Lt)&&_(o.TEXTURE_2D)}e.unbindTexture()}else{let vt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(r?vt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),Q(vt,I,Lt),r&&I.mipmaps&&I.mipmaps.length>0)for(let wt=0;wt<I.mipmaps.length;wt++)Nt(j.__webglFramebuffer[wt],O,I,o.COLOR_ATTACHMENT0,vt,wt);else Nt(j.__webglFramebuffer,O,I,o.COLOR_ATTACHMENT0,vt,0);x(I,Lt)&&_(vt),e.unbindTexture()}O.depthBuffer&&zt(O)}function _e(O){const I=f(O)||r,j=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ht=0,lt=j.length;ht<lt;ht++){const dt=j[ht];if(x(dt,I)){const Lt=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,vt=n.get(dt).__webglTexture;e.bindTexture(Lt,vt),_(Lt),e.unbindTexture()}}}function kt(O){if(r&&O.samples>0&&Rt(O)===!1){const I=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],j=O.width,ht=O.height;let lt=o.COLOR_BUFFER_BIT;const dt=[],Lt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=n.get(O),wt=O.isWebGLMultipleRenderTargets===!0;if(wt)for(let Ht=0;Ht<I.length;Ht++)e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ht=0;Ht<I.length;Ht++){dt.push(o.COLOR_ATTACHMENT0+Ht),O.depthBuffer&&dt.push(Lt);const Kt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Kt===!1&&(O.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(lt|=o.STENCIL_BUFFER_BIT)),wt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,vt.__webglColorRenderbuffer[Ht]),Kt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Lt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Lt])),wt){const rt=n.get(I[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,j,ht,0,0,j,ht,lt,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Ht=0;Ht<I.length;Ht++){e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,vt.__webglColorRenderbuffer[Ht]);const Kt=n.get(I[Ht]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,Kt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function qt(O){return Math.min(i.maxSamples,O.samples)}function Rt(O){const I=n.get(O);return r&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function xe(O){const I=a.render.frame;h.get(O)!==I&&(h.set(O,I),O.update())}function te(O,I){const j=O.colorSpace,ht=O.format,lt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Pc||j!==gi&&j!==On&&(Ee.getTransfer(j)===Oe?r===!1?t.has("EXT_sRGB")===!0&&ht===Yn?(O.format=Pc,O.minFilter=Dn,O.generateMipmaps=!1):I=zd.sRGBToLinear(I):(ht!==Yn||lt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),I}this.allocateTextureUnit=F,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=tt,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=de,this.setupRenderTarget=$,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Rt}function L_(o,t,e){const n=e.isWebGL2;function i(s,a=On){let r;const c=Ee.getTransfer(a);if(s===Ni)return o.UNSIGNED_BYTE;if(s===Pd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ld)return o.UNSIGNED_SHORT_5_5_5_1;if(s===uf)return o.BYTE;if(s===ff)return o.SHORT;if(s===Kc)return o.UNSIGNED_SHORT;if(s===Rd)return o.INT;if(s===Ii)return o.UNSIGNED_INT;if(s===Di)return o.FLOAT;if(s===bo)return n?o.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===pf)return o.ALPHA;if(s===Yn)return o.RGBA;if(s===mf)return o.LUMINANCE;if(s===gf)return o.LUMINANCE_ALPHA;if(s===is)return o.DEPTH_COMPONENT;if(s===Vs)return o.DEPTH_STENCIL;if(s===Pc)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===_f)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===vf)return o.RG;if(s===Dd)return o.RG_INTEGER;if(s===Od)return o.RGBA_INTEGER;if(s===ma||s===ga||s===_a||s===va)if(c===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ml||s===gl||s===_l||s===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xl||s===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===xl)return c===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===yl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ml||s===El||s===bl||s===Sl||s===wl||s===Al||s===Tl||s===Cl||s===Rl||s===Pl||s===Ll||s===Il||s===Dl||s===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Ml)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ll)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Il)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dl)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ol)return c===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xa||s===Nl||s===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===xa)return c===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xf||s===Bl||s===kl||s===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ns?n?o.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class I_ extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const E of t.hand.values()){const f=e.getJointPose(E,n),d=this._getHandJoint(l,E);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],m=h.position.distanceTo(u.position),g=.02,v=.005;l.inputState.pinching&&m>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class O_ extends $s{constructor(t,e){super();const n=this;let i=null,s=1,a=null,r="local-floor",c=1,l=null,h=null,u=null,m=null,g=null,v=null;const E=e.getContextAttributes();let f=null,d=null;const x=[],_=[],b=new ie;let w=null;const A=new Tn;A.layers.enable(1),A.viewport=new ke;const P=new Tn;P.layers.enable(2),P.viewport=new ke;const U=[A,P],S=new I_;S.layers.enable(1),S.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let at=x[Q];return at===void 0&&(at=new Va,x[Q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Q){let at=x[Q];return at===void 0&&(at=new Va,x[Q]=at),at.getGripSpace()},this.getHand=function(Q){let at=x[Q];return at===void 0&&(at=new Va,x[Q]=at),at.getHandSpace()};function Y(Q){const at=_.indexOf(Q.inputSource);if(at===-1)return;const bt=x[at];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,l||a),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",F);for(let Q=0;Q<x.length;Q++){const at=_[Q];at!==null&&(_[Q]=null,x[Q].disconnect(at))}C=null,H=null,t.setRenderTarget(f),g=null,m=null,u=null,i=null,d=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",F),E.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new os(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil})}else{let at=null,bt=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=E.stencil?Vs:is,bt=E.stencil?ns:Ii);const Nt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};u=new XRWebGLBinding(i,e),m=u.createProjectionLayer(Nt),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),d=new os(m.textureWidth,m.textureHeight,{format:Yn,type:Ni,depthTexture:new Kd(m.textureWidth,m.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0});const $t=t.properties.get(d);$t.__ignoreDepthValues=m.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(Q){for(let at=0;at<Q.removed.length;at++){const bt=Q.removed[at],Ct=_.indexOf(bt);Ct>=0&&(_[Ct]=null,x[Ct].disconnect(bt))}for(let at=0;at<Q.added.length;at++){const bt=Q.added[at];let Ct=_.indexOf(bt);if(Ct===-1){for(let $t=0;$t<x.length;$t++)if($t>=_.length){_.push(bt),Ct=$t;break}else if(_[$t]===null){_[$t]=bt,Ct=$t;break}if(Ct===-1)break}const Nt=x[Ct];Nt&&Nt.connect(bt)}}const q=new k,Z=new k;function tt(Q,at,bt){q.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(bt.matrixWorld);const Ct=q.distanceTo(Z),Nt=at.projectionMatrix.elements,$t=bt.projectionMatrix.elements,Zt=Nt[14]/(Nt[10]-1),zt=Nt[14]/(Nt[10]+1),de=(Nt[9]+1)/Nt[5],$=(Nt[9]-1)/Nt[5],_e=(Nt[8]-1)/Nt[0],kt=($t[8]+1)/$t[0],qt=Zt*_e,Rt=Zt*kt,xe=Ct/(-_e+kt),te=xe*-_e;at.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(te),Q.translateZ(xe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const O=Zt+xe,I=zt+xe,j=qt-te,ht=Rt+(Ct-te),lt=de*zt/I*O,dt=$*zt/I*O;Q.projectionMatrix.makePerspective(j,ht,lt,dt,O,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function it(Q,at){at===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(at.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;S.near=P.near=A.near=Q.near,S.far=P.far=A.far=Q.far,(C!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,H=S.far);const at=Q.parent,bt=S.cameras;it(S,at);for(let Ct=0;Ct<bt.length;Ct++)it(bt[Ct],at);bt.length===2?tt(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),st(Q,S,at)};function st(Q,at,bt){bt===null?Q.matrix.copy(at.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(at.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(Q){c=Q,m!==null&&(m.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)};let ot=null;function ut(Q,at){if(h=at.getViewerPose(l||a),v=at,h!==null){const bt=h.views;g!==null&&(t.setRenderTargetFramebuffer(d,g.framebuffer),t.setRenderTarget(d));let Ct=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,Ct=!0);for(let Nt=0;Nt<bt.length;Nt++){const $t=bt[Nt];let Zt=null;if(g!==null)Zt=g.getViewport($t);else{const de=u.getViewSubImage(m,$t);Zt=de.viewport,Nt===0&&(t.setRenderTargetTextures(d,de.colorTexture,m.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(d))}let zt=U[Nt];zt===void 0&&(zt=new Tn,zt.layers.enable(Nt),zt.viewport=new ke,U[Nt]=zt),zt.matrix.fromArray($t.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray($t.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(S.matrix.copy(zt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ct===!0&&S.cameras.push(zt)}}for(let bt=0;bt<x.length;bt++){const Ct=_[bt],Nt=x[bt];Ct!==null&&Nt!==void 0&&Nt.update(Ct,at,l||a)}ot&&ot(Q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),v=null}const pt=new $d;pt.setAnimationLoop(ut),this.setAnimationLoop=function(Q){ot=Q},this.dispose=function(){}}}function N_(o,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Yd(o)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,x,_,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),u(f,d)):d.isMeshPhongMaterial?(s(f,d),h(f,d)):d.isMeshStandardMaterial?(s(f,d),m(f,d),d.isMeshPhysicalMaterial&&g(f,d,b)):d.isMeshMatcapMaterial?(s(f,d),v(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),E(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&r(f,d)):d.isPointsMaterial?c(f,d,x,_):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===fn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===fn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const _=o._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function r(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,x,_){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*x,f.scale.value=_*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function m(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function g(f,d,x){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function E(f,d){const x=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U_(o,t,e,n){let i={},s={},a=[];const r=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const b=_.program;n.uniformBlockBinding(x,b)}function l(x,_){let b=i[x.id];b===void 0&&(v(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(x,w);const A=t.render.frame;s[x.id]!==A&&(m(x),s[x.id]=A)}function h(x){const _=u();x.__bindingPointIndex=_;const b=o.createBuffer(),w=x.__size,A=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,w,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<r;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){const _=i[x.id],b=x.uniforms,w=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,_);for(let A=0,P=b.length;A<P;A++){const U=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,C=U.length;S<C;S++){const H=U[S];if(g(H,A,S,w)===!0){const Y=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let F=0;for(let q=0;q<K.length;q++){const Z=K[q],tt=E(Z);typeof Z=="number"||typeof Z=="boolean"?(H.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,Y+F,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=0,H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=0,H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=0):(Z.toArray(H.__data,F),F+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function g(x,_,b,w){const A=x.value,P=_+"_"+b;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{const U=w[P];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return w[P]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function v(x){const _=x.uniforms;let b=0;const w=16;for(let P=0,U=_.length;P<U;P++){const S=Array.isArray(_[P])?_[P]:[_[P]];for(let C=0,H=S.length;C<H;C++){const Y=S[C],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,q=K.length;F<q;F++){const Z=K[F],tt=E(Z),it=b%w;it!==0&&w-it<tt.boundary&&(b+=w-it),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=tt.storage}}}const A=b%w;return A>0&&(b+=w-A),x.__size=b,x.__cache={},this}function E(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function f(x){const _=x.target;_.removeEventListener("dispose",f);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function d(){for(const x in i)o.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:d}}class iu{constructor(t={}){const{canvas:e=If(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),v=new Int32Array(4);let E=null,f=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const _=this;let b=!1,w=0,A=0,P=null,U=-1,S=null;const C=new ke,H=new ke;let Y=null;const K=new yt(0);let F=0,q=e.width,Z=e.height,tt=1,it=null,st=null;const ot=new ke(0,0,q,Z),ut=new ke(0,0,q,Z);let pt=!1;const Q=new tl;let at=!1,bt=!1,Ct=null;const Nt=new Ae,$t=new ie,Zt=new k,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return P===null?tt:1}let $=n;function _e(L,B){for(let X=0;X<L.length;X++){const G=L[X],W=e.getContext(G,B);if(W!==null)return W}return null}try{const L={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),$===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),$=_e(B,L),$===null)throw _e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let kt,qt,Rt,xe,te,O,I,j,ht,lt,dt,Lt,vt,wt,Ht,Kt,rt,ve,oe,Yt,Pt,At,ee,fe;function Ie(){kt=new Y0($),qt=new z0($,kt,t),kt.init(qt),At=new L_($,kt,qt),Rt=new R_($,kt,qt),xe=new $0($),te=new m_,O=new P_($,kt,Rt,te,qt,At,xe),I=new G0(_),j=new X0(_),ht=new ip($,qt),ee=new k0($,kt,ht,qt),lt=new q0($,ht,xe,ee),dt=new Q0($,lt,ht,xe),oe=new J0($,qt,O),Kt=new H0(te),Lt=new p_(_,I,j,kt,qt,ee,Kt),vt=new N_(_,te),wt=new __,Ht=new b_(kt,qt),ve=new B0(_,I,j,Rt,dt,m,c),rt=new C_(_,dt,qt),fe=new U_($,xe,qt,Rt),Yt=new F0($,kt,xe,qt),Pt=new j0($,kt,xe,qt),xe.programs=Lt.programs,_.capabilities=qt,_.extensions=kt,_.properties=te,_.renderLists=wt,_.shadowMap=rt,_.state=Rt,_.info=xe}Ie();const ne=new O_(_,$);this.xr=ne,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=kt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=kt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(L){L!==void 0&&(tt=L,this.setSize(q,Z,!1))},this.getSize=function(L){return L.set(q,Z)},this.setSize=function(L,B,X=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,Z=B,e.width=Math.floor(L*tt),e.height=Math.floor(B*tt),X===!0&&(e.style.width=L+"px",e.style.height=B+"px"),this.setViewport(0,0,L,B)},this.getDrawingBufferSize=function(L){return L.set(q*tt,Z*tt).floor()},this.setDrawingBufferSize=function(L,B,X){q=L,Z=B,tt=X,e.width=Math.floor(L*X),e.height=Math.floor(B*X),this.setViewport(0,0,L,B)},this.getCurrentViewport=function(L){return L.copy(C)},this.getViewport=function(L){return L.copy(ot)},this.setViewport=function(L,B,X,G){L.isVector4?ot.set(L.x,L.y,L.z,L.w):ot.set(L,B,X,G),Rt.viewport(C.copy(ot).multiplyScalar(tt).floor())},this.getScissor=function(L){return L.copy(ut)},this.setScissor=function(L,B,X,G){L.isVector4?ut.set(L.x,L.y,L.z,L.w):ut.set(L,B,X,G),Rt.scissor(H.copy(ut).multiplyScalar(tt).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(L){Rt.setScissorTest(pt=L)},this.setOpaqueSort=function(L){it=L},this.setTransparentSort=function(L){st=L},this.getClearColor=function(L){return L.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(L=!0,B=!0,X=!0){let G=0;if(L){let W=!1;if(P!==null){const nt=P.texture.format;W=nt===Od||nt===Dd||nt===Id}if(W){const nt=P.texture.type,ct=nt===Ni||nt===Ii||nt===Kc||nt===ns||nt===Pd||nt===Ld,J=ve.getClearColor(),mt=ve.getClearAlpha(),Bt=J.r,St=J.g,gt=J.b;ct?(g[0]=Bt,g[1]=St,g[2]=gt,g[3]=mt,$.clearBufferuiv($.COLOR,0,g)):(v[0]=Bt,v[1]=St,v[2]=gt,v[3]=mt,$.clearBufferiv($.COLOR,0,v))}else G|=$.COLOR_BUFFER_BIT}B&&(G|=$.DEPTH_BUFFER_BIT),X&&(G|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),wt.dispose(),Ht.dispose(),te.dispose(),I.dispose(),j.dispose(),dt.dispose(),ee.dispose(),fe.dispose(),Lt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",tn),ne.removeEventListener("sessionend",ue),Ct&&(Ct.dispose(),Ct=null),qe.stop()};function ft(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=xe.autoReset,B=rt.enabled,X=rt.autoUpdate,G=rt.needsUpdate,W=rt.type;Ie(),xe.autoReset=L,rt.enabled=B,rt.autoUpdate=X,rt.needsUpdate=G,rt.type=W}function Mt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xt(L){const B=L.target;B.removeEventListener("dispose",xt),Vt(B)}function Vt(L){Ft(L),te.remove(L)}function Ft(L){const B=te.get(L).programs;B!==void 0&&(B.forEach(function(X){Lt.releaseProgram(X)}),L.isShaderMaterial&&Lt.releaseShaderCache(L))}this.renderBufferDirect=function(L,B,X,G,W,nt){B===null&&(B=zt);const ct=W.isMesh&&W.matrixWorld.determinant()<0,J=Ot(L,B,X,G,W);Rt.setMaterial(G,ct);let mt=X.index,Bt=1;if(G.wireframe===!0){if(mt=lt.getWireframeAttribute(X),mt===void 0)return;Bt=2}const St=X.drawRange,gt=X.attributes.position;let Ut=St.start*Bt,Ge=(St.start+St.count)*Bt;nt!==null&&(Ut=Math.max(Ut,nt.start*Bt),Ge=Math.min(Ge,(nt.start+nt.count)*Bt)),mt!==null?(Ut=Math.max(Ut,0),Ge=Math.min(Ge,mt.count)):gt!=null&&(Ut=Math.max(Ut,0),Ge=Math.min(Ge,gt.count));const be=Ge-Ut;if(be<0||be===1/0)return;ee.setup(W,G,J,X,mt);let Ve,se=Yt;if(mt!==null&&(Ve=ht.get(mt),se=Pt,se.setIndex(Ve)),W.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*de()),se.setMode($.LINES)):se.setMode($.TRIANGLES);else if(W.isLine){let It=G.linewidth;It===void 0&&(It=1),Rt.setLineWidth(It*de()),W.isLineSegments?se.setMode($.LINES):W.isLineLoop?se.setMode($.LINE_LOOP):se.setMode($.LINE_STRIP)}else W.isPoints?se.setMode($.POINTS):W.isSprite&&se.setMode($.TRIANGLES);if(W.isBatchedMesh)se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)se.renderInstances(Ut,be,W.count);else if(X.isInstancedBufferGeometry){const It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vi=Math.min(X.instanceCount,It);se.renderInstances(Ut,be,vi)}else se.render(Ut,be)};function ye(L,B,X){L.transparent===!0&&L.side===ei&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,R(L,B,X),L.side=mi,L.needsUpdate=!0,R(L,B,X),L.side=ei):R(L,B,X)}this.compile=function(L,B,X=null){X===null&&(X=L),f=Ht.get(X),f.init(),x.push(f),X.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),L!==X&&L.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(_._useLegacyLights);const G=new Set;return L.traverse(function(W){const nt=W.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const J=nt[ct];ye(J,X,W),G.add(J)}else ye(nt,X,W),G.add(nt)}),x.pop(),f=null,G},this.compileAsync=function(L,B,X=null){const G=this.compile(L,B,X);return new Promise(W=>{function nt(){if(G.forEach(function(ct){te.get(ct).currentProgram.isReady()&&G.delete(ct)}),G.size===0){W(L);return}setTimeout(nt,10)}kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Me=null;function ge(L){Me&&Me(L)}function tn(){qe.stop()}function ue(){qe.start()}const qe=new $d;qe.setAnimationLoop(ge),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(L){Me=L,ne.setAnimationLoop(L),L===null?qe.stop():qe.start()},ne.addEventListener("sessionstart",tn),ne.addEventListener("sessionend",ue),this.render=function(L,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,B,P),f=Ht.get(L,x.length),f.init(),x.push(f),Nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Nt),bt=this.localClippingEnabled,at=Kt.init(this.clippingPlanes,bt),E=wt.get(L,d.length),E.init(),d.push(E),gn(L,B,0,_.sortObjects),E.finish(),_.sortObjects===!0&&E.sort(it,st),this.info.render.frame++,at===!0&&Kt.beginShadows();const X=f.state.shadowsArray;if(rt.render(X,L,B),at===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(E,L),f.setupLights(_._useLegacyLights),B.isArrayCamera){const G=B.cameras;for(let W=0,nt=G.length;W<nt;W++){const ct=G[W];Ro(E,L,ct,ct.viewport)}}else Ro(E,L,B);P!==null&&(O.updateMultisampleRenderTarget(P),O.updateRenderTargetMipmap(P)),L.isScene===!0&&L.onAfterRender(_,L,B),ee.resetDefaultState(),U=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function gn(L,B,X,G){if(L.visible===!1)return;if(L.layers.test(B.layers)){if(L.isGroup)X=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(B);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){G&&Zt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Nt);const ct=dt.update(L),J=L.material;J.visible&&E.push(L,ct,J,X,Zt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const ct=dt.update(L),J=L.material;if(G&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Zt.copy(L.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Zt.copy(ct.boundingSphere.center)),Zt.applyMatrix4(L.matrixWorld).applyMatrix4(Nt)),Array.isArray(J)){const mt=ct.groups;for(let Bt=0,St=mt.length;Bt<St;Bt++){const gt=mt[Bt],Ut=J[gt.materialIndex];Ut&&Ut.visible&&E.push(L,ct,Ut,X,Zt.z,gt)}}else J.visible&&E.push(L,ct,J,X,Zt.z,null)}}const nt=L.children;for(let ct=0,J=nt.length;ct<J;ct++)gn(nt[ct],B,X,G)}function Ro(L,B,X,G){const W=L.opaque,nt=L.transmissive,ct=L.transparent;f.setupLightsView(X),at===!0&&Kt.setGlobalState(_.clippingPlanes,X),nt.length>0&&y(W,nt,B,X),G&&Rt.viewport(C.copy(G)),W.length>0&&p(W,B,X),nt.length>0&&p(nt,B,X),ct.length>0&&p(ct,B,X),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function y(L,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const nt=qt.isWebGL2;Ct===null&&(Ct=new os(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")?bo:Ni,minFilter:Eo,samples:nt?4:0})),_.getDrawingBufferSize($t),nt?Ct.setSize($t.x,$t.y):Ct.setSize(Ic($t.x),Ic($t.y));const ct=_.getRenderTarget();_.setRenderTarget(Ct),_.getClearColor(K),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const J=_.toneMapping;_.toneMapping=pi,p(L,X,G),O.updateMultisampleRenderTarget(Ct),O.updateRenderTargetMipmap(Ct);let mt=!1;for(let Bt=0,St=B.length;Bt<St;Bt++){const gt=B[Bt],Ut=gt.object,Ge=gt.geometry,be=gt.material,Ve=gt.group;if(be.side===ei&&Ut.layers.test(G.layers)){const se=be.side;be.side=fn,be.needsUpdate=!0,M(Ut,X,G,Ge,be,Ve),be.side=se,be.needsUpdate=!0,mt=!0}}mt===!0&&(O.updateMultisampleRenderTarget(Ct),O.updateRenderTargetMipmap(Ct)),_.setRenderTarget(ct),_.setClearColor(K,F),_.toneMapping=J}function p(L,B,X){const G=B.isScene===!0?B.overrideMaterial:null;for(let W=0,nt=L.length;W<nt;W++){const ct=L[W],J=ct.object,mt=ct.geometry,Bt=G===null?ct.material:G,St=ct.group;J.layers.test(X.layers)&&M(J,B,X,mt,Bt,St)}}function M(L,B,X,G,W,nt){L.onBeforeRender(_,B,X,G,W,nt),L.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),W.onBeforeRender(_,B,X,G,L,nt),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=fn,W.needsUpdate=!0,_.renderBufferDirect(X,B,G,W,L,nt),W.side=mi,W.needsUpdate=!0,_.renderBufferDirect(X,B,G,W,L,nt),W.side=ei):_.renderBufferDirect(X,B,G,W,L,nt),L.onAfterRender(_,B,X,G,W,nt)}function R(L,B,X){B.isScene!==!0&&(B=zt);const G=te.get(L),W=f.state.lights,nt=f.state.shadowsArray,ct=W.state.version,J=Lt.getParameters(L,W.state,nt,B,X),mt=Lt.getProgramCacheKey(J);let Bt=G.programs;G.environment=L.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(L.isMeshStandardMaterial?j:I).get(L.envMap||G.environment),Bt===void 0&&(L.addEventListener("dispose",xt),Bt=new Map,G.programs=Bt);let St=Bt.get(mt);if(St!==void 0){if(G.currentProgram===St&&G.lightsStateVersion===ct)return et(L,J),St}else J.uniforms=Lt.getUniforms(L),L.onBuild(X,J,_),L.onBeforeCompile(J,_),St=Lt.acquireProgram(J,mt),Bt.set(mt,St),G.uniforms=J.uniforms;const gt=G.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(gt.clippingPlanes=Kt.uniform),et(L,J),G.needsLights=he(L),G.lightsStateVersion=ct,G.needsLights&&(gt.ambientLightColor.value=W.state.ambient,gt.lightProbe.value=W.state.probe,gt.directionalLights.value=W.state.directional,gt.directionalLightShadows.value=W.state.directionalShadow,gt.spotLights.value=W.state.spot,gt.spotLightShadows.value=W.state.spotShadow,gt.rectAreaLights.value=W.state.rectArea,gt.ltc_1.value=W.state.rectAreaLTC1,gt.ltc_2.value=W.state.rectAreaLTC2,gt.pointLights.value=W.state.point,gt.pointLightShadows.value=W.state.pointShadow,gt.hemisphereLights.value=W.state.hemi,gt.directionalShadowMap.value=W.state.directionalShadowMap,gt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,gt.spotShadowMap.value=W.state.spotShadowMap,gt.spotLightMatrix.value=W.state.spotLightMatrix,gt.spotLightMap.value=W.state.spotLightMap,gt.pointShadowMap.value=W.state.pointShadowMap,gt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=St,G.uniformsList=null,St}function V(L){if(L.uniformsList===null){const B=L.currentProgram.getUniforms();L.uniformsList=Tr.seqWithValue(B.seq,L.uniforms)}return L.uniformsList}function et(L,B){const X=te.get(L);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ot(L,B,X,G,W){B.isScene!==!0&&(B=zt),O.resetTextureUnits();const nt=B.fog,ct=G.isMeshStandardMaterial?B.environment:null,J=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gi,mt=(G.isMeshStandardMaterial?j:I).get(G.envMap||ct),Bt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,St=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),gt=!!X.morphAttributes.position,Ut=!!X.morphAttributes.normal,Ge=!!X.morphAttributes.color;let be=pi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=_.toneMapping);const Ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=Ve!==void 0?Ve.length:0,It=te.get(G),vi=f.state.lights;if(at===!0&&(bt===!0||L!==S)){const Rn=L===S&&G.id===U;Kt.setState(G,L,Rn)}let pe=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==vi.state.version||It.outputColorSpace!==J||W.isBatchedMesh&&It.batching===!1||!W.isBatchedMesh&&It.batching===!0||W.isInstancedMesh&&It.instancing===!1||!W.isInstancedMesh&&It.instancing===!0||W.isSkinnedMesh&&It.skinning===!1||!W.isSkinnedMesh&&It.skinning===!0||W.isInstancedMesh&&It.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&It.instancingColor===!1&&W.instanceColor!==null||It.envMap!==mt||G.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Kt.numPlanes||It.numIntersection!==Kt.numIntersection)||It.vertexAlphas!==Bt||It.vertexTangents!==St||It.morphTargets!==gt||It.morphNormals!==Ut||It.morphColors!==Ge||It.toneMapping!==be||qt.isWebGL2===!0&&It.morphTargetsCount!==se)&&(pe=!0):(pe=!0,It.__version=G.version);let Bn=It.currentProgram;pe===!0&&(Bn=R(G,B,W));let kn=!1,$n=!1,da=!1;const sn=Bn.getUniforms(),zi=It.uniforms;if(Rt.useProgram(Bn.program)&&(kn=!0,$n=!0,da=!0),G.id!==U&&(U=G.id,$n=!0),kn||S!==L){sn.setValue($,"projectionMatrix",L.projectionMatrix),sn.setValue($,"viewMatrix",L.matrixWorldInverse);const Rn=sn.map.cameraPosition;Rn!==void 0&&Rn.setValue($,Zt.setFromMatrixPosition(L.matrixWorld)),qt.logarithmicDepthBuffer&&sn.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&sn.setValue($,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,$n=!0,da=!0)}if(W.isSkinnedMesh){sn.setOptional($,W,"bindMatrix"),sn.setOptional($,W,"bindMatrixInverse");const Rn=W.skeleton;Rn&&(qt.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),sn.setValue($,"boneTexture",Rn.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(sn.setOptional($,W,"batchingTexture"),sn.setValue($,"batchingTexture",W._matricesTexture,O));const ua=X.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&qt.isWebGL2===!0)&&oe.update(W,X,Bn),($n||It.receiveShadow!==W.receiveShadow)&&(It.receiveShadow=W.receiveShadow,sn.setValue($,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zi.envMap.value=mt,zi.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),$n&&(sn.setValue($,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&Tt(zi,da),nt&&G.fog===!0&&vt.refreshFogUniforms(zi,nt),vt.refreshMaterialUniforms(zi,G,tt,Z,Ct),Tr.upload($,V(It),zi,O)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Tr.upload($,V(It),zi,O),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&sn.setValue($,"center",W.center),sn.setValue($,"modelViewMatrix",W.modelViewMatrix),sn.setValue($,"normalMatrix",W.normalMatrix),sn.setValue($,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Rn=G.uniformsGroups;for(let fa=0,Tu=Rn.length;fa<Tu;fa++)if(qt.isWebGL2){const al=Rn[fa];fe.update(al,Bn),fe.bind(al,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function Tt(L,B){L.ambientLightColor.needsUpdate=B,L.lightProbe.needsUpdate=B,L.directionalLights.needsUpdate=B,L.directionalLightShadows.needsUpdate=B,L.pointLights.needsUpdate=B,L.pointLightShadows.needsUpdate=B,L.spotLights.needsUpdate=B,L.spotLightShadows.needsUpdate=B,L.rectAreaLights.needsUpdate=B,L.hemisphereLights.needsUpdate=B}function he(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(L,B,X){te.get(L.texture).__webglTexture=B,te.get(L.depthTexture).__webglTexture=X;const G=te.get(L);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=X===void 0,G.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,B){const X=te.get(L);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(L,B=0,X=0){P=L,w=B,A=X;let G=!0,W=null,nt=!1,ct=!1;if(L){const mt=te.get(L);mt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer($.FRAMEBUFFER,null),G=!1):mt.__webglFramebuffer===void 0?O.setupRenderTarget(L):mt.__hasExternalTextures&&O.rebindTextures(L,te.get(L.texture).__webglTexture,te.get(L.depthTexture).__webglTexture);const Bt=L.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ct=!0);const St=te.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(St[B])?W=St[B][X]:W=St[B],nt=!0):qt.isWebGL2&&L.samples>0&&O.useMultisampledRTT(L)===!1?W=te.get(L).__webglMultisampledFramebuffer:Array.isArray(St)?W=St[X]:W=St,C.copy(L.viewport),H.copy(L.scissor),Y=L.scissorTest}else C.copy(ot).multiplyScalar(tt).floor(),H.copy(ut).multiplyScalar(tt).floor(),Y=pt;if(Rt.bindFramebuffer($.FRAMEBUFFER,W)&&qt.drawBuffers&&G&&Rt.drawBuffers(L,W),Rt.viewport(C),Rt.scissor(H),Rt.setScissorTest(Y),nt){const mt=te.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,X)}else if(ct){const mt=te.get(L.texture),Bt=B||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,mt.__webglTexture,X||0,Bt)}U=-1},this.readRenderTargetPixels=function(L,B,X,G,W,nt,ct){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ct!==void 0&&(J=J[ct]),J){Rt.bindFramebuffer($.FRAMEBUFFER,J);try{const mt=L.texture,Bt=mt.format,St=mt.type;if(Bt!==Yn&&At.convert(Bt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=St===bo&&(kt.has("EXT_color_buffer_half_float")||qt.isWebGL2&&kt.has("EXT_color_buffer_float"));if(St!==Ni&&At.convert(St)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===Di&&(qt.isWebGL2||kt.has("OES_texture_float")||kt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=L.width-G&&X>=0&&X<=L.height-W&&$.readPixels(B,X,G,W,At.convert(Bt),At.convert(St),nt)}finally{const mt=P!==null?te.get(P).__webglFramebuffer:null;Rt.bindFramebuffer($.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(L,B,X=0){const G=Math.pow(2,-X),W=Math.floor(B.image.width*G),nt=Math.floor(B.image.height*G);O.setTexture2D(B,0),$.copyTexSubImage2D($.TEXTURE_2D,X,0,0,L.x,L.y,W,nt),Rt.unbindTexture()},this.copyTextureToTexture=function(L,B,X,G=0){const W=B.image.width,nt=B.image.height,ct=At.convert(X.format),J=At.convert(X.type);O.setTexture2D(X,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?$.texSubImage2D($.TEXTURE_2D,G,L.x,L.y,W,nt,ct,J,B.image.data):B.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,G,L.x,L.y,B.mipmaps[0].width,B.mipmaps[0].height,ct,B.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,G,L.x,L.y,ct,J,B.image),G===0&&X.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(L,B,X,G,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const nt=L.max.x-L.min.x+1,ct=L.max.y-L.min.y+1,J=L.max.z-L.min.z+1,mt=At.convert(G.format),Bt=At.convert(G.type);let St;if(G.isData3DTexture)O.setTexture3D(G,0),St=$.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)O.setTexture2DArray(G,0),St=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,G.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,G.unpackAlignment);const gt=$.getParameter($.UNPACK_ROW_LENGTH),Ut=$.getParameter($.UNPACK_IMAGE_HEIGHT),Ge=$.getParameter($.UNPACK_SKIP_PIXELS),be=$.getParameter($.UNPACK_SKIP_ROWS),Ve=$.getParameter($.UNPACK_SKIP_IMAGES),se=X.isCompressedTexture?X.mipmaps[W]:X.image;$.pixelStorei($.UNPACK_ROW_LENGTH,se.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,se.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,L.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,L.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,L.min.z),X.isDataTexture||X.isData3DTexture?$.texSubImage3D(St,W,B.x,B.y,B.z,nt,ct,J,mt,Bt,se.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(St,W,B.x,B.y,B.z,nt,ct,J,mt,se.data)):$.texSubImage3D(St,W,B.x,B.y,B.z,nt,ct,J,mt,Bt,se),$.pixelStorei($.UNPACK_ROW_LENGTH,gt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ut),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ge),$.pixelStorei($.UNPACK_SKIP_ROWS,be),$.pixelStorei($.UNPACK_SKIP_IMAGES,Ve),W===0&&G.generateMipmaps&&$.generateMipmap(St),Rt.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?O.setTextureCube(L,0):L.isData3DTexture?O.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?O.setTexture2DArray(L,0):O.setTexture2D(L,0),Rt.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,Rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jc?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===$r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nn?ss:Ud}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ss?nn:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class B_ extends iu{}B_.prototype.isWebGL1Renderer=!0;class nl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k_ extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class F_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new k;class Fr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zr extends Fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const no=new k,As=new k,Ts=new k,Cs=new ie,io=new ie,su=new Ae,Jo=new k,so=new k,Qo=new k,Th=new ie,Wa=new ie,Ch=new ie;class Oc extends Ye{constructor(t=new zr){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new F_(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Fr(n,3,0,!1)),ws.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new ie(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Ts.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;tr(Jo.set(-.5,-.5,0),Ts,a,As,i,s),tr(so.set(.5,-.5,0),Ts,a,As,i,s),tr(Qo.set(.5,.5,0),Ts,a,As,i,s),Th.set(0,0),Wa.set(1,0),Ch.set(1,1);let r=t.ray.intersectTriangle(Jo,so,Qo,!1,no);if(r===null&&(tr(so.set(-.5,.5,0),Ts,a,As,i,s),Wa.set(0,1),r=t.ray.intersectTriangle(Jo,Qo,so,!1,no),r===null))return;const c=t.ray.origin.distanceTo(no);c<t.near||c>t.far||e.push({distance:c,point:no.clone(),uv:An.getInterpolation(no,Jo,so,Qo,Th,Wa,Ch,new ie),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function tr(o,t,e,n,i,s){Cs.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(io.x=s*Cs.x-i*Cs.y,io.y=i*Cs.x+s*Cs.y):io.copy(Cs),o.copy(t),o.x+=io.x,o.y+=io.y,o.applyMatrix4(su)}class Rh extends Mn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new Ae,Ph=new Ae,er=[],Lh=new as,z_=new Ae,oo=new Qt,ro=new cs;class H_ extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Lh.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Lh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),ro.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Rs),Ph.multiplyMatrices(n,Rs),oo.matrixWorld=Ph,oo.raycast(t,er);for(let a=0,r=er.length;a<r;a++){const c=er[a];c.instanceId=s,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ih=new k,Dh=new k,Oh=new Ae,Xa=new Zr,nr=new cs;class G_ extends Ye{constructor(t=new mn,e=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ih.fromBufferAttribute(e,i-1),Dh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ih.distanceTo(Dh);t.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,t.ray.intersectsSphere(nr)===!1)return;Oh.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(Oh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new k,h=new k,u=new k,m=new k,g=this.isLineSegments?2:1,v=n.index,f=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count);for(let _=d,b=x-1;_<b;_+=g){const w=v.getX(_),A=v.getX(_+1);if(l.fromBufferAttribute(f,w),h.fromBufferAttribute(f,A),Xa.distanceSqToSegment(l,h,m,u)>c)continue;m.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(m);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let _=d,b=x-1;_<b;_+=g){if(l.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),Xa.distanceSqToSegment(l,h,m,u)>c)continue;m.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(m);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Nh=new k,Uh=new k;class V_ extends G_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Nh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nh.distanceTo(Uh);t.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nc extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bh=new Ae,Uc=new Zr,ir=new cs,sr=new k;class kh extends Ye{constructor(t=new mn,e=new Nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=s,t.ray.intersectsSphere(ir)===!1)return;Bh.copy(i).invert(),Uc.copy(t.ray).applyMatrix4(Bh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,u=n.attributes.position;if(l!==null){const m=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let v=m,E=g;v<E;v++){const f=l.getX(v);sr.fromBufferAttribute(u,f),Fh(sr,f,c,i,t,e,this)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,E=g;v<E;v++)sr.fromBufferAttribute(u,v),Fh(sr,v,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Fh(o,t,e,n,i,s,a){const r=Uc.distanceSqToPoint(o);if(r<e){const c=new k;Uc.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}class Xs extends pn{constructor(t,e,n,i,s,a,r,c,l){super(t,e,n,i,s,a,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hr extends mn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],m=[],g=[];let v=0;const E=[],f=n/2;let d=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(m,3)),this.setAttribute("uv",new cn(g,2));function x(){const b=new k,w=new k;let A=0;const P=(e-t)/n;for(let U=0;U<=s;U++){const S=[],C=U/s,H=C*(e-t)+t;for(let Y=0;Y<=i;Y++){const K=Y/i,F=K*c+r,q=Math.sin(F),Z=Math.cos(F);w.x=H*q,w.y=-C*n+f,w.z=H*Z,u.push(w.x,w.y,w.z),b.set(q,P,Z).normalize(),m.push(b.x,b.y,b.z),g.push(K,1-C),S.push(v++)}E.push(S)}for(let U=0;U<i;U++)for(let S=0;S<s;S++){const C=E[S][U],H=E[S+1][U],Y=E[S+1][U+1],K=E[S][U+1];h.push(C,H,K),h.push(H,Y,K),A+=6}l.addGroup(d,A,0),d+=A}function _(b){const w=v,A=new ie,P=new k;let U=0;const S=b===!0?t:e,C=b===!0?1:-1;for(let Y=1;Y<=i;Y++)u.push(0,f*C,0),m.push(0,C,0),g.push(.5,.5),v++;const H=v;for(let Y=0;Y<=i;Y++){const F=Y/i*c+r,q=Math.cos(F),Z=Math.sin(F);P.x=S*Z,P.y=f*C,P.z=S*q,u.push(P.x,P.y,P.z),m.push(0,C,0),A.x=q*.5+.5,A.y=Z*.5*C+.5,g.push(A.x,A.y),v++}for(let Y=0;Y<i;Y++){const K=w+Y,F=H+Y;b===!0?h.push(F,F+1,K):h.push(F+1,F,K),U+=3}l.addGroup(d,U,b===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const or=new k,rr=new k,Ya=new k,ar=new An;class W_ extends mn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Ar*e),a=t.getIndex(),r=t.getAttribute("position"),c=a?a.count:r.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),m={},g=[];for(let v=0;v<c;v+=3){a?(l[0]=a.getX(v),l[1]=a.getX(v+1),l[2]=a.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:E,b:f,c:d}=ar;if(E.fromBufferAttribute(r,l[0]),f.fromBufferAttribute(r,l[1]),d.fromBufferAttribute(r,l[2]),ar.getNormal(Ya),u[0]=`${Math.round(E.x*i)},${Math.round(E.y*i)},${Math.round(E.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,b=u[x],w=u[_],A=ar[h[x]],P=ar[h[_]],U=`${b}_${w}`,S=`${w}_${b}`;S in m&&m[S]?(Ya.dot(m[S].normal)<=s&&(g.push(A.x,A.y,A.z),g.push(P.x,P.y,P.z)),m[S]=null):U in m||(m[U]={index0:l[x],index1:l[_],normal:Ya.clone()})}}for(const v in m)if(m[v]){const{index0:E,index1:f}=m[v];or.fromBufferAttribute(r,E),rr.fromBufferAttribute(r,f),g.push(or.x,or.y,or.z),g.push(rr.x,rr.y,rr.z)}this.setAttribute("position",new cn(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Nn extends mn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let l=0;const h=[],u=new k,m=new k,g=[],v=[],E=[],f=[];for(let d=0;d<=n;d++){const x=[],_=d/n;let b=0;d===0&&a===0?b=.5/e:d===n&&c===Math.PI&&(b=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+_*r),u.y=t*Math.cos(a+_*r),u.z=t*Math.sin(i+A*s)*Math.sin(a+_*r),v.push(u.x,u.y,u.z),m.copy(u).normalize(),E.push(m.x,m.y,m.z),f.push(A+b,1-_),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const _=h[d][x+1],b=h[d][x],w=h[d+1][x],A=h[d+1][x+1];(d!==0||a>0)&&g.push(_,b,A),(d!==n-1||c<Math.PI)&&g.push(b,w,A)}this.setIndex(g),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ta extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class X_ extends ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new Ae,zh=new k,Hh=new k;class ru{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(zh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gh=new Ae,ao=new k,ja=new k;class Y_ extends ru{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(ao),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-ao.x,-ao.y,-ao.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class Vh extends ta{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Y_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class q_ extends ru{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class j_ extends ta{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ea{constructor(t,e,n=0,i=1/0){this.ray=new Zr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Bc(t,this,n,e),n.sort(Wh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Bc(t[i],this,n,e);return n.sort(Wh),n}}function Wh(o,t){return o.distance-t.distance}function Bc(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let s=0,a=i.length;s<a;s++)Bc(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const yo=16,$_=256,Z_=256,K_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let kc=null,cr=null;function J_(){return cr||(cr=new Promise(o=>{const t=new Image;t.onload=()=>{const e=new pn(t);e.magFilter=ze,e.minFilter=ze,e.generateMipmaps=!1,e.needsUpdate=!0,kc=e,o()},t.onerror=()=>{console.warn("Atlas load failed"),o()},t.src=K_}),cr)}function Q_(o,t){if(!kc)return tv(o,t);const e=kc.clone();e.needsUpdate=!0;const n=yo/$_,i=yo/Z_;return e.offset.set(o*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=Cn,e.wrapT=Cn,e}function tv(o,t){const e=document.createElement("canvas");e.width=e.height=yo;const n=e.getContext("2d"),i=(o*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,yo,yo);const s=new Xs(e);return s.magFilter=ze,s.minFilter=ze,s}function ev(o,t,e={}){const n=Q_(o,t),i=new Pe({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:mi});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const nv=[0,0],lr=[1,0],Xh=[2,0],$a=[3,0],iv=[4,0],hr=[5,0],Yh=[6,0],sv=[7,0],qh=[9,0],ov=[10,0],rv=[11,0],av=[12,0],cv=[13,0],lv=[14,0],hv=[15,0],dv=[0,1],uv=[1,1],fv=[2,1],pv=[3,1],mv=[4,1],gv=[5,1],_v=[6,1],dr=[7,1],jh=[8,1],vv=[9,1],xv=[10,1],yv=[11,1],Mv=[12,1],Ev=[13,1],Za=[14,1],bv=[15,1],ur=[0,2],$h=[1,2],fr=[2,2],Sv=[3,2],wv=[6,2],Ka=new Map;function ce(o,t,e={}){const n=`${o},${t},${JSON.stringify(e)}`;if(Ka.has(n))return Ka.get(n);const i=ev(o,t,e);return Ka.set(n,i),i}let Ji=null,Us=null,pr=null;function cu(o,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;o.fillStyle="#1a5fa0",o.fillRect(0,0,16,16),o.fillStyle=`rgba(40,130,210,${.45+e*.3})`,o.fillRect(0,Math.round(e*9),16,3),o.fillStyle=`rgba(80,160,240,${.2+n*.2})`,o.fillRect(0,Math.round(n*5)+6,16,2),o.fillStyle=`rgba(180,220,255,${.06+e*.06})`,o.fillRect(Math.round(n*10),0,4,16)}function Av(){if(pr)return pr;Ji=document.createElement("canvas"),Ji.width=Ji.height=16;const o=Ji.getContext("2d");return cu(o,0),Us=new Xs(Ji),Us.magFilter=ze,Us.minFilter=ze,pr=new Pe({map:Us,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:ei}),pr}function Tv(o){!Ji||!Us||(cu(Ji.getContext("2d"),o),Us.needsUpdate=!0)}function Cv(o,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(o){case 1:return[ce(...lr,n),ce(...lr,n),ce(...nv,n),ce(...Xh,n),ce(...lr,n),ce(...lr,n)];case 2:return Fe(Xh,n);case 3:return Fe($a,n);case 4:return Fe(iv,n);case 5:return[ce(...hr,n),ce(...hr,n),ce(...Yh,n),ce(...Yh,n),ce(...hr,n),ce(...hr,n)];case 6:return Fe(sv,{transparent:!0,alphaTest:.5});case 7:{const i=Av();return[i,i,i,i,i,i]}case 8:return Fe(cv,n);case 9:return Fe(av,{transparent:!0,opacity:.6});case 10:return Fe(qh,n);case 11:return Fe(ov,n);case 12:return Fe(rv,n);case 13:return Fe(dv,n);case 14:return Fe(uv,n);case 15:return Fe(fv,n);case 16:return Fe(lv,n);case 17:return Fe(Mv,n);case 18:return Fe(vv,n);case 19:return Fe(mv,{emissive:16755200});case 20:return Fe(gv,n);case 21:return Fe(_v,{transparent:!0,opacity:.7});case 22:return[ce(...fr,n),ce(...fr,n),ce(...hv,n),ce(...qh,n),ce(...fr,n),ce(...fr,n)];case 23:return[ce(...Ev,n),ce(...Za,n),ce(...bv,n),ce(...$a,n),ce(...Za,n),ce(...Za,n)];case 24:return[ce(...dr,n),ce(...dr,n),ce(...jh,n),ce(...jh,n),ce(...dr,n),ce(...dr,n)];case 26:return Fe(xv,n);case 27:return Fe(yv,n);case 47:return Fe(wv,{emissive:16729088});case 49:return[ce(...ur,n),ce(...ur,n),ce(...$h,n),ce(...$h,n),ce(...ur,n),ce(...ur,n)];case 54:return Fe(Sv,n);case 61:return Fe(pv,n);default:{const i=ce(...$a,n);return[i,i,i,i,i,i]}}}function Fe(o,t={}){const e=ce(o[0],o[1],t);return[e,e,e,e,e,e]}const lu=Math.sqrt(3),Rv=.5*(lu-1),co=(3-lu)/6,Zh=o=>Math.floor(o)|0,Kh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Gn(o=Math.random){const t=Pv(o),e=new Float64Array(t).map(i=>Kh[i%12*2]),n=new Float64Array(t).map(i=>Kh[i%12*2+1]);return function(s,a){let r=0,c=0,l=0;const h=(s+a)*Rv,u=Zh(s+h),m=Zh(a+h),g=(u+m)*co,v=u-g,E=m-g,f=s-v,d=a-E;let x,_;f>d?(x=1,_=0):(x=0,_=1);const b=f-x+co,w=d-_+co,A=f-1+2*co,P=d-1+2*co,U=u&255,S=m&255;let C=.5-f*f-d*d;if(C>=0){const K=U+t[S],F=e[K],q=n[K];C*=C,r=C*C*(F*f+q*d)}let H=.5-b*b-w*w;if(H>=0){const K=U+x+t[S+_],F=e[K],q=n[K];H*=H,c=H*H*(F*b+q*w)}let Y=.5-A*A-P*P;if(Y>=0){const K=U+1+t[S+1],F=e[K],q=n[K];Y*=Y,l=Y*Y*(F*A+q*P)}return 70*(r+c+l)}}function Pv(o){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(o()*(256-n)),s=e[n];e[n]=e[i],e[i]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const na={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},89:{name:"Snowball",color:15658751,solid:!1},90:{name:"Egg",color:15786176,solid:!1},91:{name:"Strength Potion",color:16729156,solid:!1},92:{name:"Speed Potion",color:4500223,solid:!1},93:{name:"Saddle",color:9127187,solid:!1},94:{name:"Anvil",color:5592405},95:{name:"Leather",color:9136404,solid:!1},96:{name:"Night Vision Potion",color:1710847,solid:!1},97:{name:"Jump Boost Potion",color:2284834,solid:!1},98:{name:"Resistance Potion",color:14526976,solid:!1},99:{name:"Brewing Stand",color:8930338},100:{name:"Note Block",color:8930338,emissive:2228224},102:{name:"Cobweb",color:13421772,solid:!1,transparent:!0},103:{name:"Vine",color:3368499,solid:!1,transparent:!0},104:{name:"Honey Block",color:16755234},105:{name:"Slime Block",color:8965188,transparent:!0},106:{name:"Campfire",color:16737826,emissive:16724736},107:{name:"Grindstone",color:8947848},108:{name:"Stonecutter",color:10066329},109:{name:"Tripwire",color:15658734,solid:!1,transparent:!0},110:{name:"Button",color:11184810,solid:!1},111:{name:"Daylight Sensor",color:14535816},112:{name:"Sculk Sensor",color:1721446,emissive:8772},113:{name:"Barrel",color:9136404},114:{name:"Cauldron",color:4473924},115:{name:"Loom",color:13149284},116:{name:"Smithing Table",color:4478310},118:{name:"Ender Chest",color:2245666,emissive:8704},119:{name:"Shulker Box",color:11158698},120:{name:"Respawn Anchor",color:4465254,emissive:2228292},117:{name:"Netherite Ingot",color:4473924,solid:!1},122:{name:"Trident",color:4491400,solid:!1},123:{name:"Crossbow",color:9136404,solid:!1},124:{name:"Spyglass",color:13412932,solid:!1},125:{name:"Bundle",color:13404211,solid:!1},126:{name:"Goat Horn",color:14535850,solid:!1},127:{name:"Echo Shard",color:4508893,solid:!1},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1},276:{name:"Diamond Sword",color:4521966,solid:!1},277:{name:"Diamond Shovel",color:4521966,solid:!1},278:{name:"Diamond Pickaxe",color:4521966,solid:!1},279:{name:"Diamond Axe",color:4521966,solid:!1}},Xi=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function Qe(o){var t;return((t=na[o])==null?void 0:t.name)??"Unknown"}function Bs(o){var t;return((t=na[o])==null?void 0:t.color)??16777215}const Zn=16,lo=62,Lv=4096,Iv=4096,Dv=8192,Ov=8192*256;function Te(o,t,e){return o+Lv+t*Dv+(e+Iv)*Ov}function Jh(o,t,e){return`${o},${t},${e}`}const Xt=class Xt{constructor(t){D(this,"scene");D(this,"instancedMeshes",new Map);D(this,"instanceCount",new Map);D(this,"_dirtyMeshes",new Set);D(this,"instanceIndex",new Map);D(this,"instanceRevIndex",new Map);D(this,"blockData",new Map);D(this,"generatedChunks",new Set);D(this,"modifications",new Map);D(this,"chestContents",new Map);D(this,"nH1",Gn(()=>.31415+Xt._s()));D(this,"nH2",Gn(()=>.62831+Xt._s()));D(this,"nH3",Gn(()=>.94247+Xt._s()));D(this,"nH4",Gn(()=>.12566+Xt._s()));D(this,"nBio",Gn(()=>.78539+Xt._s()));D(this,"nCv1",Gn(()=>.52359+Xt._s()));D(this,"nCv2",Gn(()=>.20943+Xt._s()));D(this,"nOre",Gn(()=>.41887+Xt._s()));D(this,"noise2D",Gn(()=>.69813+Xt._s()));D(this,"noise2D2",Gn(()=>.87964+Xt._s()));D(this,"biomeNoise",Gn(()=>.78539+Xt._s()));D(this,"torchLights",new Map);D(this,"torchLightQueue",[]);D(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}static _s(){return typeof window.__worldSeed=="number"?window.__worldSeed:0}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),s=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,r=this.nH4(t*.016,e*.016)*.125,l=((i+s+a+r)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),s=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(s)<.1}generateChunkRaw(t,e,n,i){for(let s=0;s<Zn;s++)for(let a=0;a<Zn;a++){const r=t*Zn+s,c=e*Zn+a,l=this.getHeight(r,c),h=this.getBiome(r,c),u=h!==4&&l>=lo-2&&l<=lo+2,m=(g,v)=>{n.set(Te(r,g,c),v),i.push([r,g,c])};for(let g=0;g<=l;g++){if(g>4&&g<l-1&&this.isCave(r,g,c))continue;let v;if(g<=4?v=3:h===1||u?v=g>=l-3?4:3:h===4?v=g===l?12:g===l-1?4:3:g===l?v=h===3&&l>100?20:1:g>=l-4?v=2:v=3,v===3&&g<l-4){const E=this.nOre(r*.16+g*.11,c*.16);g<=16&&E>.76?v=61:g<=32&&E>.68?v=13:g<=64&&E>.6?v=14:g<=128&&E>.54&&(v=15)}m(g,v)}if(l<lo)for(let g=l+1;g<=lo;g++)m(g,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<Zn;i++)for(let s=0;s<Zn;s++){const a=t*Zn+i,r=e*Zn+s,c=this.getHeight(a,r),l=this.getBiome(a,r);if(c<=lo)continue;const h=Math.random();l===0?h<.02?this.placeBlock(a,c+1,r,51,!1):h<.03&&this.placeTree(a,c+1,r):l===1?h<.03?this.placeBlock(a,c+1,r,50,!1):h<.05&&this.placeBlock(a,c+1,r,52,!1):l===2?h<.09?this.placeTree(a,c+1,r):h<.12&&this.placeBlock(a,c+1,r,51,!1):l===3&&c<100&&h<.03&&this.placeTree(a,c+1,r)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const s=e+i;for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(r)===2&&c<1||a===0&&r===0&&c<2||this.placeBlock(t+a,s+c,n+r,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,s,e,n))}for(const[i,s,a]of n){const r=Te(i,s,a),c=e.get(r);if(!Xt.isOpaque(c)){this.placeBlock(i,s,a,c,!1);continue}!Xt.isOpaque(e.get(Te(i+1,s,a))??0)||!Xt.isOpaque(e.get(Te(i-1,s,a))??0)||!Xt.isOpaque(e.get(Te(i,s+1,a))??0)||!Xt.isOpaque(e.get(Te(i,s-1,a))??0)||!Xt.isOpaque(e.get(Te(i,s,a+1))??0)||!Xt.isOpaque(e.get(Te(i,s,a-1))??0)?this.placeBlock(i,s,a,c,!1):this.blockData.set(r,c)}for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,s,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/Zn),s=Math.floor(e/Zn);let a=0,r=0,c=1/0,l=!1;for(let v=i-3;v<=i+3;v++)for(let E=s-3;E<=s+3;E++){if(this.generatedChunks.has(`${v},${E}`))continue;const f=(v-i)*(v-i)+(E-s)*(E-s);f<c&&(c=f,a=v,r=E,l=!0)}if(!l)return;const h=`${a},${r}`;this.generatedChunks.add(h);const u=new Map,m=[];this.generateChunkRaw(a,r,u,m);for(const[v,E,f]of m){const d=Te(v,E,f),x=u.get(d);if(!Xt.isOpaque(x)){this.placeBlock(v,E,f,x,!1);continue}const _=(w,A,P)=>u.get(Te(w,A,P))??this.blockData.get(Te(w,A,P))??0;!Xt.isOpaque(_(v+1,E,f))||!Xt.isOpaque(_(v-1,E,f))||!Xt.isOpaque(_(v,E+1,f))||!Xt.isOpaque(_(v,E-1,f))||!Xt.isOpaque(_(v,E,f+1))||!Xt.isOpaque(_(v,E,f-1))?this.placeBlock(v,E,f,x,!1):this.blockData.set(d,x)}const g=`${a},${r}_dec`;this.generatedChunks.has(g)||(this.generatedChunks.add(g),this.generateChunkDecorations(a,r,u))}static isOpaque(t){return t>0&&!Xt.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return Xt.sharedBoxGeo||(Xt.sharedBoxGeo=new Le(1,1,1)),Xt.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=na[t],n=Cv(t,e??{}),i=n.length===1?n[0]:n,s=new H_(Xt.getBoxGeo(),i,Xt.MAX_INSTANCES);return s.instanceMatrix.setUsage(Pf),s.count=0,s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,t===7&&(s.renderOrder=1),this.scene.add(s),this.instancedMeshes.set(t,s),this.instanceCount.set(t,0),s}placeBlock(t,e,n,i,s=!0){const a=Te(t,e,n);if(!s&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const r=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=Xt.MAX_INSTANCES)return;const l=i===7?.375:.5;Xt._mat4.setPosition(t+.5,e+l,n+.5),r.setMatrixAt(c,Xt._mat4),r.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),s&&this.modifications.set(Jh(t,e,n),i)}removeBlock(t,e,n){const i=Te(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(Jh(t,e,n),0);const s=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,r,c]of s){const l=Te(a,r,c),h=this.blockData.get(l);h===void 0||h===0||this.instanceIndex.has(l)||this._addBlockMesh(a,r,c,h)}return!0}_addBlockMesh(t,e,n,i){const s=Te(t,e,n);if(this.instanceIndex.has(s))return;const a=this.getOrCreateInstancedMesh(i),r=this.instanceCount.get(i)??0;r>=Xt.MAX_INSTANCES||(Xt._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(r,Xt._mat4),a.count=r+1,this._dirtyMeshes.add(i),this.instanceIndex.set(s,r),this.instanceRevIndex.set(`${i}:${r}`,s),this.instanceCount.set(i,r+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,Xt._mat4),n.setMatrixAt(i,Xt._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const r=a;n.count=r,this.instanceCount.set(e,r),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Te(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Te(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Te(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,s){for(let a=-s;a<=s;a++)for(let r=-s;r<=s;r++)for(let c=-s;c<=s;c++)if(this.blockData.get(Te(t+a,e+r,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),s=Math.floor(t.y),a=Math.floor(t.z);const r=e.x,c=e.y,l=e.z,h=r>0?1:r<0?-1:0,u=c>0?1:c<0?-1:0,m=l>0?1:l<0?-1:0,g=h!==0?Math.abs(1/r):1/0,v=u!==0?Math.abs(1/c):1/0,E=m!==0?Math.abs(1/l):1/0;let f=h>0?(i+1-t.x)*g:h<0?(t.x-i)*g:1/0,d=u>0?(s+1-t.y)*v:u<0?(t.y-s)*v:1/0,x=m>0?(a+1-t.z)*E:m<0?(t.z-a)*E:1/0,_=0,b=0,w=0;const A=Math.ceil(n*3)+2;for(let P=0;P<A;P++){if(this.blockData.has(Te(i,s,a)))return{x:i,y:s,z:a,face:Xt._rayFace.set(_,b,w)};if(f<d)if(f<x){if(f>n)return null;i+=h,_=-h,b=0,w=0,f+=g}else{if(x>n)return null;a+=m,_=0,b=0,w=-m,x+=E}else if(d<x){if(d>n)return null;s+=u,_=0,b=-u,w=0,d+=v}else{if(x>n)return null;a+=m,_=0,b=0,w=-m,x+=E}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const s=this.blockData.get(Te(t,i,e));if(s!==void 0&&!n.has(s))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let s=-n;s<=n;s++)for(let a=-n;a<=n;a++){const r=this.getSurfaceHeight(t+s,e+a);r>i&&(i=r)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const s=`${t},${e},${n}`;this.chestContents.set(s,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[s,a]of i){const r=t+s,c=e+a,l=this.getSurfaceHeight(r,c);this.placeHouse(r,l,c,8,5,6)}}placeHouse(t,e,n,i,s,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let u=0;u<s;u++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+u,n+h,10,!1);const r=t+Math.floor(i/2);this.removeBlock(r,e+2,n),this.removeBlock(r,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+s,n+h,10,!1);this.placeBlock(r+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let s=0;s<3;s++)(i!==1||s!==1)&&this.placeBlock(t+i-1,e+1,n+s-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,s=5;for(let r=-4;r<=4;r++)for(let c=0;c<s;c++)for(let l=-4;l<=4;l++){const h=t+r,u=i+c,m=e+l,g=Math.abs(r)===4||Math.abs(l)===4,v=c===0,E=c===s-1;if(g||v||E){const f=Math.random()<.3?82:81;this.placeBlock(h,u,m,f,!0)}else this.removeBlock(h,u,m)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[r,c]of a){const l=i+1;this.placeBlock(r,l,c,31,!0);const h=[64,62,65,63,280,268,270,274,267,257,5,10,56,11,3],u=new Array(27).fill(0),m=Math.floor(Math.random()*8)+4,g=new Set;for(let v=0;v<m;v++){let E;do E=Math.floor(Math.random()*27);while(g.has(E));g.add(E),u[E]=h[Math.floor(Math.random()*h.length)]}this.setChestInventory(r,l,c,u)}for(let r=0;r<10;r++){const c=t-r,l=i+5+r,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),r>0&&this.removeBlock(c,l-1,h)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[s,a]of this.modifications.entries())e[s]=a;const n={};for(const[s,a]of this.chestContents.entries())a.some(r=>r!==0)&&(n[s]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(s){console.warn("Save failed:",s)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[s,a,r]=n.split(",").map(Number);i===0?this.removeBlock(s,a,r):this.placeBlock(s,a,r,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const s=`${t},${e},${n}`;if(this.torchLights.has(s))return;const a=new Vh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(s,a),this.torchLightQueue.push(s);this.torchLightQueue.length>50;){const r=this.torchLightQueue.shift();if(r){const c=this.torchLights.get(r);c&&(this.scene.remove(c),this.torchLights.delete(r))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,s=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=s}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,s=this.torchLights.get(i);if(s){this.scene.remove(s),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Te(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.activateLamp(t+r,e+c,n+l);else for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.deactivateLamp(t+r,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Te(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const r=new Vh(16737792,1.2,6);r.position.set(t,e,n),this.scene.add(r),this.redstoneLoights.set(i,r)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Te(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const r=this.redstoneLoights.get(i);r&&(this.scene.remove(r),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),s=Number(e),a=Number(n),r=Number(i);!isNaN(s)&&!isNaN(a)&&!isNaN(r)&&this.addTorchLight(s,a+.5,r)}}};D(Xt,"MAX_INSTANCES",32e3),D(Xt,"_mat4",new Ae),D(Xt,"_rayFace",new k),D(Xt,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),D(Xt,"sharedBoxGeo",null);let Fc=Xt;const mr=4.5,Nv=1.6,gr=9,Qh=8.5,td=-28,ho=1.8,_r=.55,Ke=1.62,Uv=5,vn=class vn{constructor(t,e,n){D(this,"camera");D(this,"world");D(this,"scene");D(this,"position",new k(0,30,0));D(this,"velocity",new k);D(this,"onGround",!1);D(this,"gameMode","survival");D(this,"_forward",new k);D(this,"_right",new k);D(this,"_move",new k);D(this,"_rayDir",new k);D(this,"_highlightVec",new k);D(this,"_lastHit",null);D(this,"_lastHitFrame",-1);D(this,"_frameCount",0);D(this,"health",40);D(this,"maxHealth",40);D(this,"invincible",0);D(this,"spawnGrace",0);D(this,"armor",0);D(this,"speedBonus",0);D(this,"jumpBonus",0);D(this,"fallStartY",0);D(this,"wasOnGround",!1);D(this,"fallTracking",!1);D(this,"keys",{});D(this,"yaw",0);D(this,"pitch",0);D(this,"locked",!1);D(this,"chatOpen",!1);D(this,"flying",!1);D(this,"lastSpace",0);D(this,"inWater",!1);D(this,"wasInWater",!1);D(this,"waterTimer",0);D(this,"onLadder",!1);D(this,"swimStroke",0);D(this,"waterCameraTilt",0);D(this,"waterEntryVelocityDamp",1);D(this,"selectedBlockType",1);D(this,"raycaster",new ea);D(this,"highlightMesh");D(this,"outlineMesh");D(this,"outlineOpacity",0);D(this,"outlineTarget",0);D(this,"_lastOutlineKey","");D(this,"breakProgress",0);D(this,"breakTarget",null);D(this,"breakIndicator",null);D(this,"isBreakingHeld",!1);D(this,"selfModel",null);D(this,"selfHead",null);D(this,"selfLA",null);D(this,"selfRA",null);D(this,"selfLL",null);D(this,"selfRL",null);D(this,"walkCycle",0);D(this,"prevXZ",new ie);D(this,"thirdPerson",!1);D(this,"headBobPhase",0);D(this,"headBobIntensity",0);D(this,"cameraRoll",0);D(this,"currentFov",75);D(this,"fpArm",null);D(this,"fpArmGroup",null);D(this,"_armSwing",0);D(this,"_armSwingDir",1);D(this,"_armBob",0);D(this,"onPlaceBlock");D(this,"onBreakBlock");D(this,"onOpenChat");D(this,"onDied");D(this,"onHealthChanged");D(this,"onRightClick");D(this,"setDeathCause");D(this,"onWaterEnter");D(this,"onWaterExit");D(this,"_hitPoint",new k);D(this,"_hitNormal",new k);D(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});D(this,"_iceVelX",0);D(this,"_iceVelZ",0);this.camera=t,this.world=e,this.scene=n;const i=new Le(1.02,1.02,1.02),s=new _i({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new Qt(i,s),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new W_(new Le(1.005,1.005,1.005)),r=new ou({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new V_(a,r),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!vn._crackTextures){vn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const s=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let r=0;r<s*2;r++){const c=r/(s*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let r=0;r<e;r++){const c=2+Math.random()*12,l=2+Math.random()*12,h=c+(Math.random()-.5)*6,u=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(h,u),i.stroke()}}if(e>4){const r=i.createRadialGradient(8,8,4,8,8,10);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=r,i.fillRect(0,0,16,16)}const a=new Xs(n);a.magFilter=ze,a.minFilter=ze,vn._crackTextures.push(a)}}return vn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}isSneaking(){return(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}getTargetBlockType(){if(!this._lastHit)return null;const t=this.world.getBlock(this._lastHit.blockX,this._lastHit.blockY,this._lastHit.blockZ);return t?t.type:null}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new me,this.camera.add(this.fpArmGroup);const t=new Le(.12,.35,.12),e=new Pe({color:16764057}),n=new Qt(t,e);n.position.y=-.175;const i=new Le(.11,.25,.11),s=new Qt(i,e);s.position.y=-.3,n.add(s);const a=new Le(.135,.355,.135),r=new Pe({color:3364300,transparent:!0,opacity:.9}),c=new Qt(a,r);c.position.y=-.175,this.fpArm=new me,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,s.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new me,n=16764057,i=3364300,s=2245785,a=3351057,r=3346688,c=A=>new Pe({color:A}),l=(A,P,U,S)=>new Qt(new Le(A,P,U),c(S)),h=(A,P,U,S)=>{const C=new me,H=l(A,P,U,S);return H.position.y=-P/2,C.add(H),C},u=new me;u.add(l(.5,.5,.5,n));const m=l(.52,.14,.52,r);m.position.y=.19,u.add(m),u.position.set(0,.75,0);const g=l(.6,.75,.35,i);g.position.y=0;const v=h(.25,.65,.25,i),E=h(.25,.65,.25,i),f=l(.24,.25,.24,n);f.position.y=-.575,v.children[0].add(f);const d=f.clone();E.children[0].add(d),v.position.set(-.43,.37,0),E.position.set(.43,.37,0);const x=h(.27,.75,.27,s),_=h(.27,.75,.27,s),b=l(.28,.2,.3,a);b.position.y=-.77,x.children[0].add(b);const w=b.clone();return _.children[0].add(w),x.position.set(-.175,-.375,0),_.position.set(.175,-.375,0),e.add(u,g,v,E,x,_),t.add(e),this.selfHead=u,this.selfLA=v,this.selfRA=E,this.selfLL=x,this.selfRL=_,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var s;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(s=this.onBreakBlock)==null||s.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const s=new Le(1.002,1.002,1.002),a=new _i({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new Qt(s,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),s=this.breakIndicator.material,a=vn.getCrackTexture(i);s.map!==a&&(s.map=a,s.opacity=.5+i*.06,s.needsUpdate=!0)}}placeBlock(){var r,c;(r=this.onRightClick)==null||r.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),s=t.blockZ+Math.round(e.z),a=this.position.y-Ke;Math.abs(n-this.position.x)<_r+.3&&i>=a-.2&&i<=a+ho+.2&&Math.abs(s-this.position.z)<_r+.3||(this.world.placeBlock(n,i,s,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,s,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,Uv);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this._applyBlockEffects(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var h,u,m,g;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-Ke+ho/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(h=this.setDeathCause)==null||h.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(u=this.onWaterEnter)==null||u.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(m=this.onWaterExit)==null||m.call(this)));const s=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-Ke+ho),i);this.onLadder=s===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const r=this.onLadder?0:this.inWater?-4:td;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const v=c-Ke,E=Math.floor(v);for(let f=0;f<=2;f++){const d=E-f;if(this.footprintOverBlock(this.position.x,this.position.z,d)){const x=d+1+Ke;if(c<=x+.02){if(this.fallTracking){const _=this.fallStartY-(d+1),b=this.world.getBlockType(Math.round(this.position.x),d,Math.round(this.position.z));if(b===105)this.velocity.y=Math.abs(this.velocity.y)*.7,this.fallTracking=!1;else if(_>5){const w=Math.floor(b===104?(_-5)*.375:(_-5)*.75);w>0&&((g=this.setDeathCause)==null||g.call(this,"You fell"),this.takeDamage(w)),this.fallTracking=!1}else this.fallTracking=!1}this.world.getBlockType(Math.round(this.position.x),d,Math.round(this.position.z))!==105&&(this.velocity.y=0),this.position.y=x,l=!0}break}}l||(this.position.y=c)}else{const v=Math.floor(this.position.y-Ke+ho+.05);this.footprintOverBlock(this.position.x,this.position.z,v)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-Ke,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const v=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=v+Ke+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=_r/2-.01;for(let s=0;s<3;s++){const a=Math.floor(t+(s-1)*i);for(let r=0;r<3;r++){const c=Math.floor(e+(r-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=_r/2-.01,s=Math.floor(e-Ke+.05),a=Math.floor(e-Ke+ho-.05);for(let r=s;r<=a;r++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const u=Math.floor(n+(h===0?-i:i)),m=this.world.getBlockType(l,r,u);if(m!==void 0&&m!==0&&m!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=gr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=gr*t);else{this.velocity.y+=td*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-Ke);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+Ke,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=Qh+this.jumpBonus,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);const s=this.keys.ControlLeft&&this.gameMode==="survival",a=(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround;let r=s?mr*Nv:a?mr*.3:mr;this.gameMode==="creative"&&(r=this.flying?gr:mr*1.2),this.gameMode==="spectator"&&(r=gr*1.5),this.speedBonus>0&&(r*=1+this.speedBonus),this.inWater&&(r*=.6);const c=Math.round(this.position.x),l=Math.round(this.position.z),h=Math.floor(this.position.y-Ke+.5),u=Math.floor(this.position.y-Ke),m=this.world.getBlockType(c,h,l),g=this.world.getBlockType(c,u,l);if(m===102&&(r*=.1),(m===104||g===104)&&(r*=.5),i.lengthSq()>0){i.normalize().multiplyScalar(r*t);const v=this.position.x+i.x,E=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=v,this.position.z=E):(this.wallCollision(v,this.position.y,this.position.z)||(this.position.x=v),this.wallCollision(this.position.x,this.position.y,E)||(this.position.z=E))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=Qh,this.onGround=!1)}_applyBlockEffects(t){if(this.gameMode!=="survival"||!this.onGround){this._iceVelX*=.85,this._iceVelZ*=.85;return}const e=Math.round(this.position.x),n=Math.floor(this.position.y-Ke),i=Math.round(this.position.z),s=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-Ke+.5),i);if(a===102){this.velocity.y=Math.max(this.velocity.y,-.05),this._iceVelX=0,this._iceVelZ=0;return}s===21?(this.position.x-(this.position.x-this._iceVelX*t),this.position.z-(this.position.z-this._iceVelZ*t),this._iceVelX=this.position.x-e!==0?this._iceVelX*.97+(this.position.x-e)*5:this._iceVelX*.97,this._iceVelZ=this.position.z-i!==0?this._iceVelZ*.97+(this.position.z-i)*5:this._iceVelZ*.97,this.position.x+=this._iceVelX*t,this.position.z+=this._iceVelZ*t):(this._iceVelX*=.7,this._iceVelZ*=.7),a===103&&(this.onLadder=!0)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5,i=this.position.y+.6;this.camera.position.x+=(e-this.camera.position.x)*.18,this.camera.position.y+=(i-this.camera.position.y)*.18,this.camera.position.z+=(n-this.camera.position.z)*.18,this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position),this.isSneaking()&&(this.camera.position.y-=.4);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",s=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(s-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const h=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,u=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=h,this.camera.position.y+=u}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const r=this.inWater?.06:0;this.waterCameraTilt+=(r-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=vn.BASE_FOV;i&&n>1&&(c=vn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=vn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-Ke;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,s=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),s>.3?this.walkCycle+=t*Math.min(s,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),r=.65;this.selfLL&&(this.selfLL.rotation.x=a*r),this.selfRL&&(this.selfRL.rotation.x=-a*r),this.selfLA&&(this.selfLA.rotation.x=-a*r),this.selfRA&&(this.selfRA.rotation.x=a*r)}updateHighlight(){const t=this.raycast();if(t){const s=t.blockX+.5,a=t.blockY+.5,r=t.blockZ+.5;this.highlightMesh.position.set(s,a,r),this.highlightMesh.visible=!1,this.outlineMesh.position.set(s,a,r),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const s=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(s===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const s=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const r=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+s*.5,this.fpArm.rotation.z=.05+r,this.fpArm.position.y=-.28+s,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+Ke+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};D(vn,"BASE_FOV",75),D(vn,"SPRINT_FOV",85),D(vn,"LANDING_FOV",70),D(vn,"_crackTextures",null);let zc=vn;function ed(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class Bv{constructor(t,e,n){D(this,"keys");D(this,"onBreak");D(this,"onPlace");D(this,"joyActive",!1);D(this,"joyId",-1);D(this,"joyOriginX",0);D(this,"joyOriginY",0);D(this,"joyEl");D(this,"joyThumbEl");D(this,"lookId",-1);D(this,"lookLastX",0);D(this,"lookLastY",0);D(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,i.addEventListener("touchstart",s=>{s.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=s.identifier,this.joyOriginX=s.clientX,this.joyOriginY=s.clientY):this.lookId===-1&&(this.lookId=s.identifier,this.lookLastX=s.clientX,this.lookLastY=s.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var s;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const r=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(s=this.onLookDelta)==null||s.call(this,r,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):s.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,s=e-this.joyOriginY,a=Math.sqrt(i*i+s*s),r=a>0?i/a:0,c=a>0?s/a:0,l=Math.min(a,42),h=r*l,u=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${u}px))`;const m=12;this.keys.KeyW=u<-m,this.keys.KeyS=u>m,this.keys.KeyA=h<-m,this.keys.KeyD=h>m}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var He=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kv(o){if(o.__esModule)return o;var t=o.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(o).forEach(function(n){var i=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return o[n]}})}),e}var hu={};ArrayBuffer.isView||(ArrayBuffer.isView=o=>o!==null&&typeof o=="object"&&o.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Ys={},ia={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.ServerError=o.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(o.CloseCode||(o.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}o.ServerError=t})(ia);var Ao={},qs={};Object.defineProperty(qs,"__esModule",{value:!0});qs.decode=qs.encode=void 0;function Ks(o,t){if(this._offset=t,o instanceof ArrayBuffer)this._buffer=o,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(o))this._buffer=o.buffer,this._view=new DataView(this._buffer,o.byteOffset,o.byteLength);else throw new Error("Invalid argument")}function Fv(o,t,e){for(var n="",i=0,s=t,a=t+e;s<a;s++){var r=o.getUint8(s);if(!(r&128)){n+=String.fromCharCode(r);continue}if((r&224)===192){n+=String.fromCharCode((r&31)<<6|o.getUint8(++s)&63);continue}if((r&240)===224){n+=String.fromCharCode((r&15)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0);continue}if((r&248)===240){i=(r&7)<<18|(o.getUint8(++s)&63)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+r.toString(16))}return n}Ks.prototype._array=function(o){for(var t=new Array(o),e=0;e<o;e++)t[e]=this._parse();return t};Ks.prototype._map=function(o){for(var t="",e={},n=0;n<o;n++)t=this._parse(),e[t]=this._parse();return e};Ks.prototype._str=function(o){var t=Fv(this._view,this._offset,o);return this._offset+=o,t};Ks.prototype._bin=function(o){var t=this._buffer.slice(this._offset,this._offset+o);return this._offset+=o,t};Ks.prototype._parse=function(){var o=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,s=0;if(o<192)return o<128?o:o<144?this._map(o&15):o<160?this._array(o&15):this._str(o&31);if(o>223)return(255-o+1)*-1;switch(o){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+s)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+s);if(n===-1){i=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var r=(i&3)*4294967296+s;return new Date(r*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function zv(o,t=0){var e=new Ks(o,t),n=e._parse();if(e._offset!==o.byteLength)throw new Error(o.byteLength-e._offset+" trailing bytes");return n}qs.decode=zv;var Hv=4294967296-1,Gv=17179869184-1;function Vv(o,t,e){for(var n=0,i=0,s=e.length;i<s;i++)n=e.charCodeAt(i),n<128?o.setUint8(t++,n):n<2048?(o.setUint8(t++,192|n>>6),o.setUint8(t++,128|n&63)):n<55296||n>=57344?(o.setUint8(t++,224|n>>12),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),o.setUint8(t++,240|n>>18),o.setUint8(t++,128|n>>12&63),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63))}function Wv(o){for(var t=0,e=0,n=0,i=o.length;n<i;n++)t=o.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Ds(o,t,e){var n=typeof e,i=0,s=0,a=0,r=0,c=0,l=0;if(n==="string"){if(c=Wv(e),c<32)o.push(c|160),l=1;else if(c<256)o.push(217,c),l=2;else if(c<65536)o.push(218,c>>8,c),l=3;else if(c<4294967296)o.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:o.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(o.push(203),t.push({_float:e,_length:8,_offset:o.length}),9):e>=0?e<128?(o.push(e),1):e<256?(o.push(204,e),2):e<65536?(o.push(205,e>>8,e),3):e<4294967296?(o.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,r=e>>>0,o.push(207,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9):e>=-32?(o.push(e),1):e>=-128?(o.push(208,e),2):e>=-32768?(o.push(209,e>>8,e),3):e>=-2147483648?(o.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),r=e>>>0,o.push(211,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9);if(n==="object"){if(e===null)return o.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)o.push(c|144),l=1;else if(c<65536)o.push(220,c>>8,c),l=3;else if(c<4294967296)o.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Ds(o,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),u=Math.floor(h/1e3),m=(h-u*1e3)*1e6;return u>=0&&m>=0&&u<=Gv?m===0&&u<=Hv?(o.push(214,255,u>>24,u>>16,u>>8,u),6):(a=u/4294967296,r=u&4294967295,o.push(215,255,m>>22,m>>14,m>>6,a,r>>24,r>>16,r>>8,r),10):(a=Math.floor(u/4294967296),r=u>>>0,o.push(199,12,255,m>>24,m>>16,m>>8,m,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)o.push(196,c),l=2;else if(c<65536)o.push(197,c>>8,c),l=3;else if(c<4294967296)o.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:o.length}),l+c}if(typeof e.toJSON=="function")return Ds(o,t,e.toJSON());var g=[],v="",E=Object.keys(e);for(i=0,s=E.length;i<s;i++)v=E[i],e[v]!==void 0&&typeof e[v]!="function"&&g.push(v);if(c=g.length,c<16)o.push(c|128),l=1;else if(c<65536)o.push(222,c>>8,c),l=3;else if(c<4294967296)o.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)v=g[i],l+=Ds(o,t,v),l+=Ds(o,t,e[v]);return l}if(n==="boolean")return o.push(e?195:194),1;if(n==="undefined")return o.push(192),1;if(typeof e.toJSON=="function")return Ds(o,t,e.toJSON());throw new Error("Could not encode")}function Xv(o){var t=[],e=[],n=Ds(t,e,o),i=new ArrayBuffer(n),s=new DataView(i),a=0,r=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,u=0,m=0,g=t.length;m<g;m++)if(s.setUint8(r+m,t[m]),m+1===c){if(l=e[a],h=l._length,u=r+c,l._bin)for(var v=new Uint8Array(l._bin),E=0;E<h;E++)s.setUint8(u+E,v[E]);else l._str?Vv(s,u,l._str):l._float!==void 0&&s.setFloat64(u,l._float);a++,r+=h,e[a]&&(c=e[a]._offset)}return i}qs.encode=Xv;var sa={},oa={},Yv=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},qv=He&&He.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(oa,"__esModule",{value:!0});oa.WebSocketTransport=void 0;const jv=qv(Yv),Ja=globalThis.WebSocket||jv.default;class $v{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Ja(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Ja(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Ja.OPEN}}oa.WebSocketTransport=$v;Object.defineProperty(sa,"__esModule",{value:!0});sa.Connection=void 0;const Zv=oa;class Kv{constructor(){this.events={},this.transport=new Zv.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}sa.Connection=Kv;var il={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.utf8Length=o.utf8Read=o.ErrorCode=o.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(o.Protocol||(o.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(o.ErrorCode||(o.ErrorCode={}));function t(n,i){const s=n[i++];for(var a="",r=0,c=i,l=i+s;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){r=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,r>=65536?(r-=65536,a+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):a+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+h.toString(16))}return a}o.utf8Read=t;function e(n=""){let i=0,s=0;for(let a=0,r=n.length;a<r;a++)i=n.charCodeAt(a),i<128?s+=1:i<2048?s+=2:i<55296||i>=57344?s+=3:(a++,s+=4);return s+1}o.utf8Length=e})(il);var rs={};Object.defineProperty(rs,"__esModule",{value:!0});rs.getSerializer=rs.registerSerializer=void 0;const du={};function Jv(o,t){du[o]=t}rs.registerSerializer=Jv;function Qv(o){const t=du[o];if(!t)throw new Error("missing serializer: "+o);return t}rs.getSerializer=Qv;var To={};Object.defineProperty(To,"__esModule",{value:!0});To.createNanoEvents=void 0;const tx=()=>({emit(o,...t){let e=this.events[o]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(o,t){var e;return!((e=this.events[o])===null||e===void 0)&&e.push(t)||(this.events[o]=[t]),()=>{var n;this.events[o]=(n=this.events[o])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});To.createNanoEvents=tx;var js={};Object.defineProperty(js,"__esModule",{value:!0});js.createSignal=js.EventEmitter=void 0;class uu{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}js.EventEmitter=uu;function ex(){const o=new uu;function t(e){return o.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),o.remove(n)};o.register(n)},t.remove=e=>o.remove(e),t.invoke=(...e)=>o.invoke(...e),t.invokeAsync=(...e)=>o.invokeAsync(...e),t.clear=()=>o.clear(),t}js.createSignal=ex;var Hc={exports:{}};(function(o,t){(function(e,n){n(t)})(He,function(e){var n=function(y,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(M,R){M.__proto__=R}||function(M,R){for(var V in R)Object.prototype.hasOwnProperty.call(R,V)&&(M[V]=R[V])},n(y,p)};function i(y,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(y,p);function M(){this.constructor=y}y.prototype=p===null?Object.create(p):(M.prototype=p.prototype,new M)}function s(y,p,M,R){var V=arguments.length,et=V<3?p:R,Ot;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")et=Reflect.decorate(y,p,M,R);else for(var Tt=y.length-1;Tt>=0;Tt--)(Ot=y[Tt])&&(et=(V<3?Ot(et):V>3?Ot(p,M,et):Ot(p,M))||et);return V>3&&et&&Object.defineProperty(p,M,et),et}function a(y,p,M){if(arguments.length===2)for(var R=0,V=p.length,et;R<V;R++)(et||!(R in p))&&(et||(et=Array.prototype.slice.call(p,0,R)),et[R]=p[R]);return y.concat(et||Array.prototype.slice.call(p))}typeof SuppressedError=="function"&&SuppressedError;var r=255,c=213;e.OPERATION=void 0,function(y){y[y.ADD=128]="ADD",y[y.REPLACE=0]="REPLACE",y[y.DELETE=64]="DELETE",y[y.DELETE_AND_ADD=192]="DELETE_AND_ADD",y[y.TOUCH=1]="TOUCH",y[y.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function y(p,M,R){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=p,this.setParent(M,R)}return y.prototype.setParent=function(p,M,R){var V=this;if(this.indexes||(this.indexes=this.ref instanceof ge?this.ref._definition.indexes:{}),this.parent=p,this.parentIndex=R,!!M)if(this.root=M,this.ref instanceof ge){var et=this.ref._definition;for(var Ot in et.schema){var Tt=this.ref[Ot];if(Tt&&Tt.$changes){var he=et.indexes[Ot];Tt.$changes.setParent(this.ref,M,he)}}}else typeof this.ref=="object"&&this.ref.forEach(function(L,B){if(L instanceof ge){var X=L.$changes,G=V.ref.$changes.indexes[B];X.setParent(V.ref,V.root,G)}})},y.prototype.operation=function(p){this.changes.set(--this.currentCustomOperation,p)},y.prototype.change=function(p,M){M===void 0&&(M=e.OPERATION.ADD);var R=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(R,p);var V=this.changes.get(R);(!V||V.op===e.OPERATION.DELETE||V.op===e.OPERATION.TOUCH)&&this.changes.set(R,{op:V&&V.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:M,index:R}),this.allChanges.add(R),this.changed=!0,this.touchParents()},y.prototype.touch=function(p){var M=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(M,p),this.changes.has(M)||this.changes.set(M,{op:e.OPERATION.TOUCH,index:M}),this.allChanges.add(M),this.touchParents()},y.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},y.prototype.getType=function(p){if(this.ref._definition){var M=this.ref._definition;return M.schema[M.fieldsByIndex[p]]}else{var M=this.parent._definition,R=M.schema[M.fieldsByIndex[this.parentIndex]];return Object.values(R)[0]}},y.prototype.getChildrenFilter=function(){var p=this.parent._definition.childFilters;return p&&p[this.parentIndex]},y.prototype.getValue=function(p){return this.ref.getByIndex(p)},y.prototype.delete=function(p){var M=typeof p=="number"?p:this.indexes[p];if(M===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(p," (").concat(M,")"));return}var R=this.getValue(M);this.changes.set(M,{op:e.OPERATION.DELETE,index:M}),this.allChanges.delete(M),delete this.caches[M],R&&R.$changes&&(R.$changes.parent=void 0),this.changed=!0,this.touchParents()},y.prototype.discard=function(p,M){var R=this;p===void 0&&(p=!1),M===void 0&&(M=!1),this.ref instanceof ge||this.changes.forEach(function(V){if(V.op===e.OPERATION.DELETE){var et=R.ref.getIndex(V.index);delete R.indexes[et]}}),this.changes.clear(),this.changed=p,M&&this.allChanges.clear(),this.currentCustomOperation=0},y.prototype.discardAll=function(){var p=this;this.changes.forEach(function(M){var R=p.getValue(M.index);R&&R.$changes&&R.$changes.discardAll()}),this.discard()},y.prototype.cache=function(p,M){this.caches[p]=M},y.prototype.clone=function(){return new y(this.ref,this.parent,this.root)},y.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},y.prototype.assertValidIndex=function(p,M){if(p===void 0)throw new Error('ChangeTree: missing index for field "'.concat(M,'"'))},y}();function h(y,p,M,R){return y[p]||(y[p]=[]),y[p].push(M),R==null||R.forEach(function(V,et){return M(V,et)}),function(){return m(y[p],y[p].indexOf(M))}}function u(y){var p=this,M=typeof this.$changes.getType()!="string";this.$items.forEach(function(R,V){y.push({refId:p.$changes.refId,op:e.OPERATION.DELETE,field:V,value:void 0,previousValue:R}),M&&p.$changes.root.removeRef(R.$changes.refId)})}function m(y,p){if(p===-1||p>=y.length)return!1;for(var M=y.length-1,R=p;R<M;R++)y[R]=y[R+1];return y.length=M,!0}var g=function(y,p){var M=y.toString(),R=p.toString();return M<R?-1:M>R?1:0};function v(y){return y.$proxy=!0,y=new Proxy(y,{get:function(p,M){return typeof M!="symbol"&&!isNaN(M)?p.at(M):p[M]},set:function(p,M,R){if(typeof M!="symbol"&&!isNaN(M)){var V=Array.from(p.$items.keys()),et=parseInt(V[M]||M);R==null?p.deleteAt(et):p.setAt(et,R)}else p[M]=R;return!0},deleteProperty:function(p,M){return typeof M=="number"?p.deleteAt(M):delete p[M],!0},has:function(p,M){return typeof M!="symbol"&&!isNaN(Number(M))?p.$items.has(Number(M)):Reflect.has(p,M)}}),y}var E=function(){function y(){for(var p=[],M=0;M<arguments.length;M++)p[M]=arguments[M];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,p)}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},y.is=function(p){return Array.isArray(p)||p.array!==void 0},Object.defineProperty(y.prototype,"length",{get:function(){return this.$items.size},set:function(p){p===0?this.clear():this.splice(p,this.length-p)},enumerable:!1,configurable:!0}),y.prototype.push=function(){for(var p=this,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];var V;return M.forEach(function(et){V=p.$refId++,p.setAt(V,et)}),V},y.prototype.pop=function(){var p=Array.from(this.$indexes.values()).pop();if(p!==void 0){this.$changes.delete(p),this.$indexes.delete(p);var M=this.$items.get(p);return this.$items.delete(p),M}},y.prototype.at=function(p){if(p=Math.trunc(p)||0,p<0&&(p+=this.length),!(p<0||p>=this.length)){var M=Array.from(this.$items.keys())[p];return this.$items.get(M)}},y.prototype.setAt=function(p,M){var R,V;if(M==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(p)!==M){M.$changes!==void 0&&M.$changes.setParent(this,this.$changes.root,p);var et=(V=(R=this.$changes.indexes[p])===null||R===void 0?void 0:R.op)!==null&&V!==void 0?V:e.OPERATION.ADD;this.$changes.indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,M),this.$changes.change(p,et)}},y.prototype.deleteAt=function(p){var M=Array.from(this.$items.keys())[p];return M===void 0?!1:this.$deleteAt(M)},y.prototype.$deleteAt=function(p){return this.$changes.delete(p),this.$indexes.delete(p),this.$items.delete(p)},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.concat=function(){for(var p,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];return new(y.bind.apply(y,a([void 0],(p=Array.from(this.$items.values())).concat.apply(p,M),!1)))},y.prototype.join=function(p){return Array.from(this.$items.values()).join(p)},y.prototype.reverse=function(){var p=this,M=Array.from(this.$items.keys()),R=Array.from(this.$items.values()).reverse();return R.forEach(function(V,et){p.setAt(M[et],V)}),this},y.prototype.shift=function(){var p=Array.from(this.$items.keys()),M=p.shift();if(M!==void 0){var R=this.$items.get(M);return this.$deleteAt(M),R}},y.prototype.slice=function(p,M){var R=new y;return R.push.apply(R,Array.from(this.$items.values()).slice(p,M)),R},y.prototype.sort=function(p){var M=this;p===void 0&&(p=g);var R=Array.from(this.$items.keys()),V=Array.from(this.$items.values()).sort(p);return V.forEach(function(et,Ot){M.setAt(R[Ot],et)}),this},y.prototype.splice=function(p,M){M===void 0&&(M=this.length-p);for(var R=[],V=2;V<arguments.length;V++)R[V-2]=arguments[V];for(var et=Array.from(this.$items.keys()),Ot=[],Tt=p;Tt<p+M;Tt++)Ot.push(this.$items.get(et[Tt])),this.$deleteAt(et[Tt]);for(var Tt=0;Tt<R.length;Tt++)this.setAt(p+Tt,R[Tt]);return Ot},y.prototype.unshift=function(){for(var p=this,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];var V=this.length,et=M.length,Ot=Array.from(this.$items.values());return M.forEach(function(Tt,he){p.setAt(he,Tt)}),Ot.forEach(function(Tt,he){p.setAt(et+he,Tt)}),V+et},y.prototype.indexOf=function(p,M){return Array.from(this.$items.values()).indexOf(p,M)},y.prototype.lastIndexOf=function(p,M){return M===void 0&&(M=this.length-1),Array.from(this.$items.values()).lastIndexOf(p,M)},y.prototype.every=function(p,M){return Array.from(this.$items.values()).every(p,M)},y.prototype.some=function(p,M){return Array.from(this.$items.values()).some(p,M)},y.prototype.forEach=function(p,M){Array.from(this.$items.values()).forEach(p,M)},y.prototype.map=function(p,M){return Array.from(this.$items.values()).map(p,M)},y.prototype.filter=function(p,M){return Array.from(this.$items.values()).filter(p,M)},y.prototype.reduce=function(p,M){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},y.prototype.reduceRight=function(p,M){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},y.prototype.find=function(p,M){return Array.from(this.$items.values()).find(p,M)},y.prototype.findIndex=function(p,M){return Array.from(this.$items.values()).findIndex(p,M)},y.prototype.fill=function(p,M,R){throw new Error("ArraySchema#fill() not implemented")},y.prototype.copyWithin=function(p,M,R){throw new Error("ArraySchema#copyWithin() not implemented")},y.prototype.toString=function(){return this.$items.toString()},y.prototype.toLocaleString=function(){return this.$items.toLocaleString()},y.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(y,Symbol.species,{get:function(){return y},enumerable:!1,configurable:!0}),y.prototype.entries=function(){return this.$items.entries()},y.prototype.keys=function(){return this.$items.keys()},y.prototype.values=function(){return this.$items.values()},y.prototype.includes=function(p,M){return Array.from(this.$items.values()).includes(p,M)},y.prototype.flatMap=function(p,M){throw new Error("ArraySchema#flatMap() is not supported.")},y.prototype.flat=function(p){throw new Error("ArraySchema#flat() is not supported.")},y.prototype.findLast=function(){var p=Array.from(this.$items.values());return p.findLast.apply(p,arguments)},y.prototype.findLastIndex=function(){var p=Array.from(this.$items.values());return p.findLastIndex.apply(p,arguments)},y.prototype.with=function(p,M){var R=Array.from(this.$items.values());return R[p]=M,new(y.bind.apply(y,a([void 0],R,!1)))},y.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},y.prototype.toSorted=function(p){return Array.from(this.$items.values()).sort(p)},y.prototype.toSpliced=function(p,M){var R=Array.from(this.$items.values());return R.toSpliced.apply(R,arguments)},y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){return this.toArray().map(function(p){return typeof p.toJSON=="function"?p.toJSON():p})},y.prototype.clone=function(p){var M;return p?M=new(y.bind.apply(y,a([void 0],Array.from(this.$items.values()),!1))):M=new(y.bind.apply(y,a([void 0],this.map(function(R){return R.$changes?R.clone():R}),!1))),M},y}();function f(y){return y.$proxy=!0,y=new Proxy(y,{get:function(p,M){return typeof M!="symbol"&&typeof p[M]>"u"?p.get(M):p[M]},set:function(p,M,R){return typeof M!="symbol"&&M.indexOf("$")===-1&&M!=="onAdd"&&M!=="onRemove"&&M!=="onChange"?p.set(M,R):p[M]=R,!0},deleteProperty:function(p,M){return p.delete(M),!0}}),y}var d=function(){function y(p){var M=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p)if(p instanceof Map||p instanceof y)p.forEach(function(V,et){return M.set(et,V)});else for(var R in p)this.set(R,p[R])}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},y.is=function(p){return p.map!==void 0},y.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(y.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(y,Symbol.species,{get:function(){return y},enumerable:!1,configurable:!0}),y.prototype.set=function(p,M){if(M==null)throw new Error("MapSchema#set('".concat(p,"', ").concat(M,"): trying to set ").concat(M," value on '").concat(p,"'."));p=p.toString();var R=typeof this.$changes.indexes[p]<"u",V=R?this.$changes.indexes[p]:this.$refId++,et=R?e.OPERATION.REPLACE:e.OPERATION.ADD,Ot=M.$changes!==void 0;if(Ot&&M.$changes.setParent(this,this.$changes.root,V),!R)this.$changes.indexes[p]=V,this.$indexes.set(V,p);else{if(!Ot&&this.$items.get(p)===M)return;Ot&&this.$items.get(p)!==M&&(et=e.OPERATION.ADD)}return this.$items.set(p,M),this.$changes.change(p,et),this},y.prototype.get=function(p){return this.$items.get(p)},y.prototype.delete=function(p){return this.$changes.delete(p.toString()),this.$items.delete(p)},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){return this.$items.has(p)},y.prototype.forEach=function(p){this.$items.forEach(p)},y.prototype.entries=function(){return this.$items.entries()},y.prototype.keys=function(){return this.$items.keys()},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toJSON=function(){var p={};return this.forEach(function(M,R){p[R]=typeof M.toJSON=="function"?M.toJSON():M}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R,V){R.$changes?M.set(V,R.clone()):M.set(V,R)})),M},y}(),x={};function _(y,p){x[y]=p}function b(y){return x[y]}var w=function(){function y(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return y.create=function(p){var M=new y;return M.schema=Object.assign({},p&&p.schema||{}),M.indexes=Object.assign({},p&&p.indexes||{}),M.fieldsByIndex=Object.assign({},p&&p.fieldsByIndex||{}),M.descriptors=Object.assign({},p&&p.descriptors||{}),M.deprecated=Object.assign({},p&&p.deprecated||{}),M},y.prototype.addField=function(p,M){var R=this.getNextFieldIndex();this.fieldsByIndex[R]=p,this.indexes[p]=R,this.schema[p]=Array.isArray(M)?{array:M[0]}:M},y.prototype.hasField=function(p){return this.indexes[p]!==void 0},y.prototype.addFilter=function(p,M){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[p]]=M,this.indexesWithFilters.push(this.indexes[p]),!0},y.prototype.addChildrenFilter=function(p,M){var R=this.indexes[p],V=this.schema[p];if(b(Object.keys(V)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[R]=M,!0;console.warn("@filterChildren: field '".concat(p,"' can't have children. Ignoring filter."))},y.prototype.getChildrenFilter=function(p){return this.childFilters&&this.childFilters[this.indexes[p]]},y.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},y}();function A(y){return y._context&&y._context.useFilters}var P=function(){function y(){this.types={},this.schemas=new Map,this.useFilters=!1}return y.prototype.has=function(p){return this.schemas.has(p)},y.prototype.get=function(p){return this.types[p]},y.prototype.add=function(p,M){M===void 0&&(M=this.schemas.size),p._definition=w.create(p._definition),p._typeid=M,this.types[M]=p,this.schemas.set(p,M)},y.create=function(p){return p===void 0&&(p={}),function(M){return p.context||(p.context=new y),S(M,p)}},y}(),U=new P;function S(y,p){return p===void 0&&(p={}),function(M,R){var V=p.context||U,et=M.constructor;if(et._context=V,!y)throw new Error("".concat(et.name,': @type() reference provided for "').concat(R,`" is undefined. Make sure you don't have any circular dependencies.`));V.has(et)||V.add(et);var Ot=et._definition;if(Ot.addField(R,y),Ot.descriptors[R]){if(Ot.deprecated[R])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(R,"' definition on '").concat(et.name,`'.
Check @type() annotation`))}catch(G){var Tt=G.stack.split(`
`)[4].trim();throw new Error("".concat(G.message," ").concat(Tt))}}var he=E.is(y),L=!he&&d.is(y);if(typeof y!="string"&&!ge.is(y)){var B=Object.values(y)[0];typeof B!="string"&&!V.has(B)&&V.add(B)}if(p.manual){Ot.descriptors[R]={enumerable:!0,configurable:!0,writable:!0};return}var X="_".concat(R);Ot.descriptors[X]={enumerable:!1,configurable:!1,writable:!0},Ot.descriptors[R]={get:function(){return this[X]},set:function(G){G!==this[X]&&(G!=null?(he&&!(G instanceof E)&&(G=new(E.bind.apply(E,a([void 0],G,!1)))),L&&!(G instanceof d)&&(G=new d(G)),G.$proxy===void 0&&(L?G=f(G):he&&(G=v(G))),this.$changes.change(R),G.$changes&&G.$changes.setParent(this,this.$changes.root,this._definition.indexes[R])):this[X]!==void 0&&this.$changes.delete(R),this[X]=G)},enumerable:!0,configurable:!0}}}function C(y){return function(p,M){var R=p.constructor,V=R._definition;V.addFilter(M,y)&&(R._context.useFilters=!0)}}function H(y){return function(p,M){var R=p.constructor,V=R._definition;V.addChildrenFilter(M,y)&&(R._context.useFilters=!0)}}function Y(y){return y===void 0&&(y=!0),function(p,M){var R=p.constructor,V=R._definition;V.deprecated[M]=!0,y&&(V.descriptors[M]={get:function(){throw new Error("".concat(M," is deprecated."))},set:function(et){},enumerable:!1,configurable:!0})}}function K(y,p,M){M===void 0&&(M={}),M.context||(M.context=y._context||M.context||U);for(var R in p)S(p[R],M)(y.prototype,R);return y}function F(y){for(var p=0,M=0,R=0,V=y.length;R<V;R++)p=y.charCodeAt(R),p<128?M+=1:p<2048?M+=2:p<55296||p>=57344?M+=3:(R++,M+=4);return M}function q(y,p,M){for(var R=0,V=0,et=M.length;V<et;V++)R=M.charCodeAt(V),R<128?y[p++]=R:R<2048?(y[p++]=192|R>>6,y[p++]=128|R&63):R<55296||R>=57344?(y[p++]=224|R>>12,y[p++]=128|R>>6&63,y[p++]=128|R&63):(V++,R=65536+((R&1023)<<10|M.charCodeAt(V)&1023),y[p++]=240|R>>18,y[p++]=128|R>>12&63,y[p++]=128|R>>6&63,y[p++]=128|R&63)}function Z(y,p){y.push(p&255)}function tt(y,p){y.push(p&255)}function it(y,p){y.push(p&255),y.push(p>>8&255)}function st(y,p){y.push(p&255),y.push(p>>8&255)}function ot(y,p){y.push(p&255),y.push(p>>8&255),y.push(p>>16&255),y.push(p>>24&255)}function ut(y,p){var M=p>>24,R=p>>16,V=p>>8,et=p;y.push(et&255),y.push(V&255),y.push(R&255),y.push(M&255)}function pt(y,p){var M=Math.floor(p/Math.pow(2,32)),R=p>>>0;ut(y,R),ut(y,M)}function Q(y,p){var M=p/Math.pow(2,32)>>0,R=p>>>0;ut(y,R),ut(y,M)}function at(y,p){Zt(y,p)}function bt(y,p){zt(y,p)}var Ct=new Int32Array(2),Nt=new Float32Array(Ct.buffer),$t=new Float64Array(Ct.buffer);function Zt(y,p){Nt[0]=p,ot(y,Ct[0])}function zt(y,p){$t[0]=p,ot(y,Ct[0]),ot(y,Ct[1])}function de(y,p){return tt(y,p?1:0)}function $(y,p){p||(p="");var M=F(p),R=0;if(M<32)y.push(M|160),R=1;else if(M<256)y.push(217),tt(y,M),R=2;else if(M<65536)y.push(218),st(y,M),R=3;else if(M<4294967296)y.push(219),ut(y,M),R=5;else throw new Error("String too long");return q(y,y.length,p),R+M}function _e(y,p){if(isNaN(p))return _e(y,0);if(isFinite(p)){if(p!==(p|0))return y.push(203),zt(y,p),9}else return _e(y,p>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return p>=0?p<128?(tt(y,p),1):p<256?(y.push(204),tt(y,p),2):p<65536?(y.push(205),st(y,p),3):p<4294967296?(y.push(206),ut(y,p),5):(y.push(207),Q(y,p),9):p>=-32?(y.push(224|p+32),1):p>=-128?(y.push(208),Z(y,p),2):p>=-32768?(y.push(209),it(y,p),3):p>=-2147483648?(y.push(210),ot(y,p),5):(y.push(211),pt(y,p),9)}var kt=Object.freeze({__proto__:null,boolean:de,float32:at,float64:bt,int16:it,int32:ot,int64:pt,int8:Z,number:_e,string:$,uint16:st,uint32:ut,uint64:Q,uint8:tt,utf8Write:q,writeFloat32:Zt,writeFloat64:zt});function qt(y,p,M){for(var R="",V=0,et=p,Ot=p+M;et<Ot;et++){var Tt=y[et];if(!(Tt&128)){R+=String.fromCharCode(Tt);continue}if((Tt&224)===192){R+=String.fromCharCode((Tt&31)<<6|y[++et]&63);continue}if((Tt&240)===224){R+=String.fromCharCode((Tt&15)<<12|(y[++et]&63)<<6|(y[++et]&63)<<0);continue}if((Tt&248)===240){V=(Tt&7)<<18|(y[++et]&63)<<12|(y[++et]&63)<<6|(y[++et]&63)<<0,V>=65536?(V-=65536,R+=String.fromCharCode((V>>>10)+55296,(V&1023)+56320)):R+=String.fromCharCode(V);continue}console.error("Invalid byte "+Tt.toString(16))}return R}function Rt(y,p){return xe(y,p)<<24>>24}function xe(y,p){return y[p.offset++]}function te(y,p){return O(y,p)<<16>>16}function O(y,p){return y[p.offset++]|y[p.offset++]<<8}function I(y,p){return y[p.offset++]|y[p.offset++]<<8|y[p.offset++]<<16|y[p.offset++]<<24}function j(y,p){return I(y,p)>>>0}function ht(y,p){return Kt(y,p)}function lt(y,p){return rt(y,p)}function dt(y,p){var M=j(y,p),R=I(y,p)*Math.pow(2,32);return R+M}function Lt(y,p){var M=j(y,p),R=j(y,p)*Math.pow(2,32);return R+M}var vt=new Int32Array(2),wt=new Float32Array(vt.buffer),Ht=new Float64Array(vt.buffer);function Kt(y,p){return vt[0]=I(y,p),wt[0]}function rt(y,p){return vt[0]=I(y,p),vt[1]=I(y,p),Ht[0]}function ve(y,p){return xe(y,p)>0}function oe(y,p){var M=y[p.offset++],R;M<192?R=M&31:M===217?R=xe(y,p):M===218?R=O(y,p):M===219&&(R=j(y,p));var V=qt(y,p.offset,R);return p.offset+=R,V}function Yt(y,p){var M=y[p.offset];return M<192&&M>160||M===217||M===218||M===219}function Pt(y,p){var M=y[p.offset++];if(M<128)return M;if(M===202)return Kt(y,p);if(M===203)return rt(y,p);if(M===204)return xe(y,p);if(M===205)return O(y,p);if(M===206)return j(y,p);if(M===207)return Lt(y,p);if(M===208)return Rt(y,p);if(M===209)return te(y,p);if(M===210)return I(y,p);if(M===211)return dt(y,p);if(M>223)return(255-M+1)*-1}function At(y,p){var M=y[p.offset];return M<128||M>=202&&M<=211}function ee(y,p){return y[p.offset]<160}function fe(y,p){return y[p.offset-1]===r&&(y[p.offset]<128||y[p.offset]>=202&&y[p.offset]<=211)}var Ie=Object.freeze({__proto__:null,arrayCheck:ee,boolean:ve,float32:ht,float64:lt,int16:te,int32:I,int64:dt,int8:Rt,number:Pt,numberCheck:At,readFloat32:Kt,readFloat64:rt,string:oe,stringCheck:Yt,switchStructureCheck:fe,uint16:O,uint32:j,uint64:Lt,uint8:xe}),ne=function(){function y(p){var M=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(R){return M.add(R)})}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,p)},y.is=function(p){return p.collection!==void 0},y.prototype.add=function(p){var M=this.$refId++,R=p.$changes!==void 0;return R&&p.$changes.setParent(this,this.$changes.root,M),this.$changes.indexes[M]=M,this.$indexes.set(M,M),this.$items.set(M,p),this.$changes.change(M),M},y.prototype.at=function(p){var M=Array.from(this.$items.keys())[p];return this.$items.get(M)},y.prototype.entries=function(){return this.$items.entries()},y.prototype.delete=function(p){for(var M=this.$items.entries(),R,V;(V=M.next())&&!V.done;)if(p===V.value[1]){R=V.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){return Array.from(this.$items.values()).some(function(M){return M===p})},y.prototype.forEach=function(p){var M=this;this.$items.forEach(function(R,V,et){return p(R,V,M)})},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){var p=[];return this.forEach(function(M,R){p.push(typeof M.toJSON=="function"?M.toJSON():M)}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R){R.$changes?M.add(R.clone()):M.add(R)})),M},y}(),ft=function(){function y(p){var M=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(R){return M.add(R)})}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,p)},y.is=function(p){return p.set!==void 0},y.prototype.add=function(p){var M,R;if(this.has(p))return!1;var V=this.$refId++;p.$changes!==void 0&&p.$changes.setParent(this,this.$changes.root,V);var et=(R=(M=this.$changes.indexes[V])===null||M===void 0?void 0:M.op)!==null&&R!==void 0?R:e.OPERATION.ADD;return this.$changes.indexes[V]=V,this.$indexes.set(V,V),this.$items.set(V,p),this.$changes.change(V,et),V},y.prototype.entries=function(){return this.$items.entries()},y.prototype.delete=function(p){for(var M=this.$items.entries(),R,V;(V=M.next())&&!V.done;)if(p===V.value[1]){R=V.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){for(var M=this.$items.values(),R=!1,V;(V=M.next())&&!V.done;)if(p===V.value){R=!0;break}return R},y.prototype.forEach=function(p){var M=this;this.$items.forEach(function(R,V,et){return p(R,V,M)})},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){var p=[];return this.forEach(function(M,R){p.push(typeof M.toJSON=="function"?M.toJSON():M)}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R){R.$changes?M.add(R.clone()):M.add(R)})),M},y}(),z=function(){function y(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return y.prototype.addRefId=function(p){this.refIds.has(p)||(this.refIds.add(p),this.containerIndexes.set(p,new Set))},y.get=function(p){return p.$filterState===void 0&&(p.$filterState=new y),p.$filterState},y}(),Mt=function(){function y(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return y.prototype.getNextUniqueId=function(){return this.nextUniqueId++},y.prototype.addRef=function(p,M,R){R===void 0&&(R=!0),this.refs.set(p,M),R&&(this.refCounts[p]=(this.refCounts[p]||0)+1)},y.prototype.removeRef=function(p){var M=this.refCounts[p];if(M===void 0){console.warn("trying to remove reference ".concat(p," that doesn't exist"));return}if(M===0){console.warn("trying to remove reference ".concat(p," with 0 refCount"));return}this.refCounts[p]=M-1,this.deletedRefs.add(p)},y.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},y.prototype.garbageCollectDeletedRefs=function(){var p=this;this.deletedRefs.forEach(function(M){if(!(p.refCounts[M]>0)){var R=p.refs.get(M);if(R instanceof ge)for(var V in R._definition.schema)typeof R._definition.schema[V]!="string"&&R[V]&&R[V].$changes&&p.removeRef(R[V].$changes.refId);else{var et=R.$changes.parent._definition,Ot=et.schema[et.fieldsByIndex[R.$changes.parentIndex]];typeof Object.values(Ot)[0]=="function"&&Array.from(R.values()).forEach(function(Tt){return p.removeRef(Tt.$changes.refId)})}p.refs.delete(M),delete p.refCounts[M]}}),this.deletedRefs.clear()},y}(),xt=function(y){i(p,y);function p(){return y!==null&&y.apply(this,arguments)||this}return p}(Error);function Vt(y,p,M,R){var V,et=!1;switch(p){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":V="number",isNaN(y)&&console.log('trying to encode "NaN" in '.concat(M.constructor.name,"#").concat(R));break;case"string":V="string",et=!0;break;case"boolean":return}if(typeof y!==V&&(!et||et&&y!==null)){var Ot="'".concat(JSON.stringify(y),"'").concat(y&&y.constructor&&" (".concat(y.constructor.name,")")||"");throw new xt("a '".concat(V,"' was expected, but ").concat(Ot," was provided in ").concat(M.constructor.name,"#").concat(R))}}function Ft(y,p,M,R){if(!(y instanceof p))throw new xt("a '".concat(p.name,"' was expected, but '").concat(y.constructor.name,"' was provided in ").concat(M.constructor.name,"#").concat(R))}function ye(y,p,M,R,V){Vt(M,y,R,V);var et=kt[y];if(et)et(p,M);else throw new xt("a '".concat(y,"' was expected, but ").concat(M," was provided in ").concat(R.constructor.name,"#").concat(V))}function Me(y,p,M){return Ie[y](p,M)}var ge=function(){function y(){for(var p=[],M=0;M<arguments.length;M++)p[M]=arguments[M];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var R=this._definition.descriptors;R&&Object.defineProperties(this,R),p[0]&&this.assign(p[0])}return y.onError=function(p){console.error(p)},y.is=function(p){return p._definition&&p._definition.schema!==void 0},y.prototype.onChange=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},y.prototype.onRemove=function(p){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},y.prototype.assign=function(p){return Object.assign(this,p),this},Object.defineProperty(y.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),y.prototype.setDirty=function(p,M){this.$changes.change(p,M)},y.prototype.listen=function(p,M,R){var V=this;return R===void 0&&(R=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[p]||(this.$callbacks[p]=[]),this.$callbacks[p].push(M),R&&this[p]!==void 0&&M(this[p],void 0),function(){return m(V.$callbacks[p],V.$callbacks[p].indexOf(M))}},y.prototype.decode=function(p,M,R){M===void 0&&(M={offset:0}),R===void 0&&(R=this);var V=[],et=this.$changes.root,Ot=p.length,Tt=0;for(et.refs.set(Tt,this);M.offset<Ot;){var he=p[M.offset++];if(he==r){Tt=Pt(p,M);var L=et.refs.get(Tt);if(!L)throw new Error('"refId" not found: '.concat(Tt));R=L;continue}var B=R.$changes,X=R._definition!==void 0,G=X?he>>6<<6:he;if(G===e.OPERATION.CLEAR){R.clear(V);continue}var W=X?he%(G||255):Pt(p,M),nt=X?R._definition.fieldsByIndex[W]:"",ct=B.getType(W),J=void 0,mt=void 0,Bt=void 0;if(X?mt=R["_".concat(nt)]:(mt=R.getByIndex(W),(G&e.OPERATION.ADD)===e.OPERATION.ADD?(Bt=R instanceof d?oe(p,M):W,R.setIndex(W,Bt)):Bt=R.getIndex(W)),(G&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(G!==e.OPERATION.DELETE_AND_ADD&&R.deleteByIndex(W),mt&&mt.$changes&&et.removeRef(mt.$changes.refId),J=null),nt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var St={offset:M.offset};M.offset<Ot&&!(fe(p,M)&&(St.offset=M.offset+1,et.refs.has(Pt(p,St))));)M.offset++;continue}else if(G!==e.OPERATION.DELETE)if(y.is(ct)){var gt=Pt(p,M);if(J=et.refs.get(gt),G!==e.OPERATION.REPLACE){var Ut=this.getSchemaType(p,M,ct);J||(J=this.createTypeInstance(Ut),J.$changes.refId=gt,mt&&(J.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&et.removeRef(mt.$changes.refId))),et.addRef(gt,J,J!==mt)}}else if(typeof ct=="string")J=Me(ct,p,M);else{var Ge=b(Object.keys(ct)[0]),be=Pt(p,M),Ve=et.refs.has(be)?mt||et.refs.get(be):new Ge.constructor;if(J=Ve.clone(!0),J.$changes.refId=be,mt&&(J.$callbacks=mt.$callbacks,mt.$changes.refId&&be!==mt.$changes.refId)){et.removeRef(mt.$changes.refId);for(var se=mt.entries(),It=void 0;(It=se.next())&&!It.done;){var vi=It.value,pe=vi[0],Bn=vi[1];V.push({refId:be,op:e.OPERATION.DELETE,field:pe,value:void 0,previousValue:Bn})}}et.addRef(be,J,Ve!==mt)}if(J!=null){if(J.$changes&&J.$changes.setParent(B.ref,B.root,W),R instanceof y)R[nt]=J;else if(R instanceof d){var pe=Bt;R.$items.set(pe,J),R.$changes.allChanges.add(W)}else if(R instanceof E)R.setAt(W,J);else if(R instanceof ne){var kn=R.add(J);R.setIndex(W,kn)}else if(R instanceof ft){var kn=R.add(J);kn!==!1&&R.setIndex(W,kn)}}mt!==J&&V.push({refId:Tt,op:G,field:nt,dynamicIndex:Bt,value:J,previousValue:mt})}return this._triggerChanges(V),et.garbageCollectDeletedRefs(),V},y.prototype.encode=function(p,M,R){p===void 0&&(p=!1),M===void 0&&(M=[]),R===void 0&&(R=!1);for(var V=this.$changes,et=new WeakSet,Ot=[V],Tt=1,he=0;he<Tt;he++){var L=Ot[he],B=L.ref,X=B instanceof y;L.ensureRefId(),et.add(L),L!==V&&(L.changed||p)&&(tt(M,r),_e(M,L.refId));for(var G=p?Array.from(L.allChanges):Array.from(L.changes.values()),W=0,nt=G.length;W<nt;W++){var ct=p?{op:e.OPERATION.ADD,index:G[W]}:G[W],J=ct.index,mt=X?B._definition.fieldsByIndex&&B._definition.fieldsByIndex[J]:J,Bt=M.length;if(ct.op!==e.OPERATION.TOUCH)if(X)tt(M,J|ct.op);else{if(tt(M,ct.op),ct.op===e.OPERATION.CLEAR)continue;_e(M,J)}if(!X&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&B instanceof d){var St=L.ref.$indexes.get(J);$(M,St)}if(ct.op!==e.OPERATION.DELETE){var gt=L.getType(J),Ut=L.getValue(J);if(Ut&&Ut.$changes&&!et.has(Ut.$changes)&&(Ot.push(Ut.$changes),Ut.$changes.ensureRefId(),Tt++),ct.op!==e.OPERATION.TOUCH){if(y.is(gt))Ft(Ut,gt,B,mt),_e(M,Ut.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(M,gt,Ut.constructor);else if(typeof gt=="string")ye(gt,M,Ut,B,mt);else{var Ge=b(Object.keys(gt)[0]);Ft(B["_".concat(mt)],Ge.constructor,B,mt),_e(M,Ut.$changes.refId)}R&&L.cache(J,M.slice(Bt))}}}!p&&!R&&L.discard()}return M},y.prototype.encodeAll=function(p){return this.encode(!0,[],p)},y.prototype.applyFilters=function(p,M){var R,V;M===void 0&&(M=!1);for(var et=this,Ot=new Set,Tt=z.get(p),he=[this.$changes],L=1,B=[],X=function(W){var nt=he[W];if(Ot.has(nt.refId))return"continue";var ct=nt.ref,J=ct instanceof y;tt(B,r),_e(B,nt.refId);var mt=Tt.refIds.has(nt),Bt=M||!mt;Tt.addRefId(nt);var St=Tt.containerIndexes.get(nt),gt=Bt?Array.from(nt.allChanges):Array.from(nt.changes.values());if(!M&&J&&ct._definition.indexesWithFilters){var Ut=ct._definition.indexesWithFilters;Ut.forEach(function($n){!St.has($n)&&nt.allChanges.has($n)&&(Bt?gt.push($n):gt.push({op:e.OPERATION.ADD,index:$n}))})}for(var Ge=0,be=gt.length;Ge<be;Ge++){var Ve=Bt?{op:e.OPERATION.ADD,index:gt[Ge]}:gt[Ge];if(Ve.op===e.OPERATION.CLEAR){tt(B,Ve.op);continue}var se=Ve.index;if(Ve.op===e.OPERATION.DELETE){J?tt(B,Ve.op|se):(tt(B,Ve.op),_e(B,se));continue}var It=nt.getValue(se),vi=nt.getType(se);if(J){var pe=ct._definition.filters&&ct._definition.filters[se];if(pe&&!pe.call(ct,p,It,et)){It&&It.$changes&&Ot.add(It.$changes.refId);continue}}else{var Bn=nt.parent,pe=nt.getChildrenFilter();if(pe&&!pe.call(Bn,p,ct.$indexes.get(se),It,et)){It&&It.$changes&&Ot.add(It.$changes.refId);continue}}if(It.$changes&&(he.push(It.$changes),L++),Ve.op!==e.OPERATION.TOUCH)if(Ve.op===e.OPERATION.ADD||J)B.push.apply(B,(R=nt.caches[se])!==null&&R!==void 0?R:[]),St.add(se);else if(St.has(se))B.push.apply(B,(V=nt.caches[se])!==null&&V!==void 0?V:[]);else{if(St.add(se),tt(B,e.OPERATION.ADD),_e(B,se),ct instanceof d){var kn=nt.ref.$indexes.get(se);$(B,kn)}It.$changes?_e(B,It.$changes.refId):kt[vi](B,It)}else if(It.$changes&&!J){if(tt(B,e.OPERATION.ADD),_e(B,se),ct instanceof d){var kn=nt.ref.$indexes.get(se);$(B,kn)}_e(B,It.$changes.refId)}}},G=0;G<L;G++)X(G);return B},y.prototype.clone=function(){var p,M=new this.constructor,R=this._definition.schema;for(var V in R)typeof this[V]=="object"&&typeof((p=this[V])===null||p===void 0?void 0:p.clone)=="function"?M[V]=this[V].clone():M[V]=this[V];return M},y.prototype.toJSON=function(){var p=this._definition.schema,M=this._definition.deprecated,R={};for(var V in p)!M[V]&&this[V]!==null&&typeof this[V]<"u"&&(R[V]=typeof this[V].toJSON=="function"?this[V].toJSON():this["_".concat(V)]);return R},y.prototype.discardAllChanges=function(){this.$changes.discardAll()},y.prototype.getByIndex=function(p){return this[this._definition.fieldsByIndex[p]]},y.prototype.deleteByIndex=function(p){this[this._definition.fieldsByIndex[p]]=void 0},y.prototype.tryEncodeTypeId=function(p,M,R){M._typeid!==R._typeid&&(tt(p,c),_e(p,R._typeid))},y.prototype.getSchemaType=function(p,M,R){var V;return p[M.offset]===c&&(M.offset++,V=this.constructor._context.get(Pt(p,M))),V||R},y.prototype.createTypeInstance=function(p){var M=new p;return M.$changes.root=this.$changes.root,M},y.prototype._triggerChanges=function(p){for(var M,R,V,et,Ot,Tt,he,L,B,X=new Set,G=this.$changes.root.refs,W=function(ct){var J=p[ct],mt=J.refId,Bt=G.get(mt),St=Bt.$callbacks;if((J.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&J.previousValue instanceof y&&((R=(M=J.previousValue.$callbacks)===null||M===void 0?void 0:M[e.OPERATION.DELETE])===null||R===void 0||R.forEach(function(gt){return gt()})),!St)return"continue";if(Bt instanceof y){if(!X.has(mt))try{(V=St==null?void 0:St[e.OPERATION.REPLACE])===null||V===void 0||V.forEach(function(gt){return gt()})}catch(gt){y.onError(gt)}try{St.hasOwnProperty(J.field)&&((et=St[J.field])===null||et===void 0||et.forEach(function(gt){return gt(J.value,J.previousValue)}))}catch(gt){y.onError(gt)}}else J.op===e.OPERATION.ADD&&J.previousValue===void 0?(Ot=St[e.OPERATION.ADD])===null||Ot===void 0||Ot.forEach(function(gt){var Ut;return gt(J.value,(Ut=J.dynamicIndex)!==null&&Ut!==void 0?Ut:J.field)}):J.op===e.OPERATION.DELETE?J.previousValue!==void 0&&((Tt=St[e.OPERATION.DELETE])===null||Tt===void 0||Tt.forEach(function(gt){var Ut;return gt(J.previousValue,(Ut=J.dynamicIndex)!==null&&Ut!==void 0?Ut:J.field)})):J.op===e.OPERATION.DELETE_AND_ADD&&(J.previousValue!==void 0&&((he=St[e.OPERATION.DELETE])===null||he===void 0||he.forEach(function(gt){var Ut;return gt(J.previousValue,(Ut=J.dynamicIndex)!==null&&Ut!==void 0?Ut:J.field)})),(L=St[e.OPERATION.ADD])===null||L===void 0||L.forEach(function(gt){var Ut;return gt(J.value,(Ut=J.dynamicIndex)!==null&&Ut!==void 0?Ut:J.field)})),J.value!==J.previousValue&&((B=St[e.OPERATION.REPLACE])===null||B===void 0||B.forEach(function(gt){var Ut;return gt(J.value,(Ut=J.dynamicIndex)!==null&&Ut!==void 0?Ut:J.field)}));X.add(mt)},nt=0;nt<p.length;nt++)W(nt)},y._definition=w.create(),y}();function tn(y){for(var p=[y.$changes],M=1,R={},V=R,et=function(Tt){var he=p[Tt];he.changes.forEach(function(L){var B=he.ref,X=L.index,G=B._definition?B._definition.fieldsByIndex[X]:B.$indexes.get(X);V[G]=he.getValue(X)})},Ot=0;Ot<M;Ot++)et(Ot);return R}var ue={context:new P},qe=function(y){i(p,y);function p(){return y!==null&&y.apply(this,arguments)||this}return s([S("string",ue)],p.prototype,"name",void 0),s([S("string",ue)],p.prototype,"type",void 0),s([S("number",ue)],p.prototype,"referencedType",void 0),p}(ge),gn=function(y){i(p,y);function p(){var M=y!==null&&y.apply(this,arguments)||this;return M.fields=new E,M}return s([S("number",ue)],p.prototype,"id",void 0),s([S([qe],ue)],p.prototype,"fields",void 0),p}(ge),Ro=function(y){i(p,y);function p(){var M=y!==null&&y.apply(this,arguments)||this;return M.types=new E,M}return p.encode=function(M){var R,V=M.constructor,et=new p;et.rootType=V._typeid;var Ot=function(B,X){for(var G in X){var W=new qe;W.name=G;var nt=void 0;if(typeof X[G]=="string")nt=X[G];else{var ct=X[G],J=void 0;ge.is(ct)?(nt="ref",J=X[G]):(nt=Object.keys(ct)[0],typeof ct[nt]=="string"?nt+=":"+ct[nt]:J=ct[nt]),W.referencedType=J?J._typeid:-1}W.type=nt,B.fields.push(W)}et.types.push(B)},Tt=(R=V._context)===null||R===void 0?void 0:R.types;for(var he in Tt){var L=new gn;L.id=Number(he),Ot(L,Tt[he]._definition.schema)}return et.encodeAll()},p.decode=function(M,R){var V=new P,et=new p;et.decode(M,R);var Ot=et.types.reduce(function(X,G){var W=function(ct){i(J,ct);function J(){return ct!==null&&ct.apply(this,arguments)||this}return J}(ge),nt=G.id;return X[nt]=W,V.add(W,nt),X},{});et.types.forEach(function(X){var G=Ot[X.id];X.fields.forEach(function(W){var nt;if(W.referencedType!==void 0){var ct=W.type,J=Ot[W.referencedType];if(!J){var mt=W.type.split(":");ct=mt[0],J=mt[1]}ct==="ref"?S(J,{context:V})(G.prototype,W.name):S((nt={},nt[ct]=J,nt),{context:V})(G.prototype,W.name)}else S(W.type,{context:V})(G.prototype,W.name)})});var Tt=Ot[et.rootType],he=new Tt;for(var L in Tt._definition.schema){var B=Tt._definition.schema[L];typeof B!="string"&&(he[L]=typeof B=="function"?new B:new(b(Object.keys(B)[0])).constructor)}return he},s([S([gn],ue)],p.prototype,"types",void 0),s([S("number",ue)],p.prototype,"rootType",void 0),p}(ge);_("map",{constructor:d}),_("array",{constructor:E}),_("set",{constructor:ft}),_("collection",{constructor:ne}),e.ArraySchema=E,e.CollectionSchema=ne,e.Context=P,e.MapSchema=d,e.Reflection=Ro,e.ReflectionField=qe,e.ReflectionType=gn,e.Schema=ge,e.SchemaDefinition=w,e.SetSchema=ft,e.decode=Ie,e.defineTypes=K,e.deprecated=Y,e.dumpChanges=tn,e.encode=kt,e.filter=C,e.filterChildren=H,e.hasFilter=A,e.registerType=_,e.type=S})})(Hc,Hc.exports);var fu=Hc.exports,nx=He&&He.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),ix=He&&He.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),sx=He&&He.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&nx(t,o,e);return ix(t,o),t};Object.defineProperty(Ao,"__esModule",{value:!0});Ao.Room=void 0;const nd=sx(qs),ox=sa,an=il,id=rs,rx=To,vr=js,Sn=fu,sd=ia;class sl{constructor(t,e){this.onStateChange=(0,vr.createSignal)(),this.onError=(0,vr.createSignal)(),this.onLeave=(0,vr.createSignal)(),this.onJoin=(0,vr.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,rx.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,id.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const s=new ox.Connection;n.connection=s,s.events.onmessage=sl.prototype.onMessageCallback.bind(n),s.events.onclose=function(a){var r;if(!n.hasJoined){(r=console.warn)===null||r===void 0||r.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===sd.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},s.events.onerror=function(a){var r;(r=console.warn)===null||r===void 0||r.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},s.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([an.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(sd.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[an.Protocol.ROOM_DATA];typeof t=="string"?Sn.encode.string(n,t):Sn.encode.number(n,t);let i;if(e!==void 0){const s=nd.encode(e);i=new Uint8Array(n.length+s.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(s),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[an.Protocol.ROOM_DATA_BYTES];typeof t=="string"?Sn.encode.string(n,t):Sn.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===an.Protocol.JOIN_ROOM){let i=1;const s=(0,an.utf8Read)(e,i);if(i+=(0,an.utf8Length)(s),this.serializerId=(0,an.utf8Read)(e,i),i+=(0,an.utf8Length)(this.serializerId),!this.serializer){const a=(0,id.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([an.Protocol.JOIN_ROOM])}else if(n===an.Protocol.ERROR){const i={offset:1},s=Sn.decode.number(e,i),a=Sn.decode.string(e,i);this.onError.invoke(s,a)}else if(n===an.Protocol.LEAVE_ROOM)this.leave();else if(n===an.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(Sn.decode.number(e,i)),r=new a;r.decode(e,i),this.dispatchMessage(a,r)}else if(n===an.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===an.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===an.Protocol.ROOM_DATA){const i={offset:1},s=Sn.decode.stringCheck(e,i)?Sn.decode.string(e,i):Sn.decode.number(e,i),a=e.length>i.offset?nd.decode(t.data,i.offset):void 0;this.dispatchMessage(s,a)}else if(n===an.Protocol.ROOM_DATA_BYTES){const i={offset:1},s=Sn.decode.stringCheck(e,i)?Sn.decode.string(e,i):Sn.decode.number(e,i);this.dispatchMessage(s,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}Ao.Room=sl;var ra={};function od(o,t){t.headers=o.headers||{},t.statusMessage=o.statusText,t.statusCode=o.status,t.data=o.response}function qn(o,t,e){return new Promise(function(n,i){e=e||{};var s=new XMLHttpRequest,a,r,c,l=e.body,h=e.headers||{};e.timeout&&(s.timeout=e.timeout),s.ontimeout=s.onerror=function(u){u.timeout=u.type=="timeout",i(u)},s.open(o,t.href||t),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),od(s,s);r=c.shift();)r=r.split(": "),s.headers[r.shift().toLowerCase()]=r.join(": ");if(r=s.headers["content-type"],r&&~r.indexOf("application/json"))try{s.data=JSON.parse(s.data,e.reviver)}catch(u){return od(s,u),i(u)}(s.status>=400?i:n)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!e.withCredentials;for(a in h)s.setRequestHeader(a,h[a]);s.send(l)})}var ax=qn.bind(qn,"GET"),cx=qn.bind(qn,"POST"),lx=qn.bind(qn,"PATCH"),hx=qn.bind(qn,"DELETE"),dx=qn.bind(qn,"PUT");const ux=Object.freeze(Object.defineProperty({__proto__:null,del:hx,get:ax,patch:lx,post:cx,put:dx,send:qn},Symbol.toStringTag,{value:"Module"})),fx=kv(ux);var px=He&&He.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),mx=He&&He.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),gx=He&&He.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&px(t,o,e);return mx(t,o),t};Object.defineProperty(ra,"__esModule",{value:!0});ra.HTTP=void 0;const _x=ia,vx=gx(fx);class xx{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return vx[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var s;const a=i.statusCode,r=((s=i.data)===null||s===void 0?void 0:s.error)||i.statusMessage||i.message;throw!a&&!r?i:new _x.ServerError(a,r)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}ra.HTTP=xx;var Co={},Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.getItem=Bi.removeItem=Bi.setItem=void 0;let uo;function ol(){if(!uo)try{uo=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return uo||(uo={cache:{},setItem:function(o,t){this.cache[o]=t},getItem:function(o){this.cache[o]},removeItem:function(o){delete this.cache[o]}}),uo}function yx(o,t){ol().setItem(o,t)}Bi.setItem=yx;function Mx(o){ol().removeItem(o)}Bi.removeItem=Mx;function Ex(o,t){const e=ol().getItem(o);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Bi.getItem=Ex;var Yi=He&&He.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(h){try{l(n.next(h))}catch(u){a(u)}}function c(h){try{l(n.throw(h))}catch(u){a(u)}}function l(h){h.done?s(h.value):i(h.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},Ps=He&&He.__classPrivateFieldGet||function(o,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(o):n?n.value:t.get(o)},fo=He&&He.__classPrivateFieldSet||function(o,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},Cr,Gc,Ai,Rr;Object.defineProperty(Co,"__esModule",{value:!0});Co.Auth=void 0;const Qa=Bi,bx=To;class Sx{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},Cr.set(this,!1),Gc.set(this,void 0),Ai.set(this,void 0),Rr.set(this,(0,bx.createNanoEvents)()),(0,Qa.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Ps(this,Rr,"f").on("change",t);return Ps(this,Cr,"f")||fo(this,Gc,new Promise((n,i)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),fo(this,Cr,!0,"f"),e}getUserData(){return Yi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Yi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return Yi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Yi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Yi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Yi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const s=e.width||480,a=e.height||768,r=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${r}`),h=screen.width/2-s/2,u=screen.height/2-a/2;fo(this,Ai,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+a+", top="+u+", left="+h),"f");const m=v=>{v.data.user===void 0&&v.data.token===void 0||(clearInterval(g),Ps(this,Ai,"f").close(),fo(this,Ai,void 0,"f"),window.removeEventListener("message",m),v.data.error!==void 0?i(v.data.error):(n(v.data),this.emitChange(v.data)))},g=setInterval(()=>{(!Ps(this,Ai,"f")||Ps(this,Ai,"f").closed)&&(fo(this,Ai,void 0,"f"),i("cancelled"),window.removeEventListener("message",m))},200);window.addEventListener("message",m)})})}signOut(){return Yi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Qa.removeItem)(this.settings.key):(0,Qa.setItem)(this.settings.key,t.token)),Ps(this,Rr,"f").emit("change",t)}}Co.Auth=Sx;Cr=new WeakMap,Gc=new WeakMap,Ai=new WeakMap,Rr=new WeakMap;var aa={};Object.defineProperty(aa,"__esModule",{value:!0});aa.discordURLBuilder=void 0;function wx(o){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=o.hostname.split("."),i=!o.hostname.includes("trycloudflare.com")&&!o.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return o.pathname.startsWith("/.proxy")?`${o.protocol}//${e}${i}${o.pathname}${o.search}`:`${o.protocol}//${e}/.proxy/colyseus${i}${o.pathname}${o.search}`}aa.discordURLBuilder=wx;var Kn=He&&He.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(h){try{l(n.next(h))}catch(u){a(u)}}function c(h){try{l(n.throw(h))}catch(u){a(u)}}function l(h){h.done?s(h.value):i(h.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},tc;Object.defineProperty(Ys,"__esModule",{value:!0});Ys.Client=Ys.MatchMakeError=void 0;const Ax=ia,Tx=Ao,Cx=ra,Rx=Co,Px=aa;class ca extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,ca.prototype)}}Ys.MatchMakeError=ca;const rd=typeof window<"u"&&typeof((tc=window==null?void 0:window.location)===null||tc===void 0?void 0:tc.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Lx{constructor(t=rd,e){var n,i;if(typeof t=="string"){const s=t.startsWith("/")?new URL(t,rd):new URL(t),a=s.protocol==="https:"||s.protocol==="wss:",r=Number(s.port||(a?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:r,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new Cx.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new Rx.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=Px.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return Kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return Kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return Kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return Kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return Kn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return Kn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return Kn(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const s={sessionId:i.sessionId};t.reconnectionToken&&(s.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,s),t.devMode&&(()=>Kn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let r=0,c=8;const l=()=>Kn(this,void 0,void 0,function*(){r++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{r<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((r,c)=>{const l=(h,u)=>c(new Ax.ServerError(h,u));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),r(a)})})})}createMatchMakeRequest(t,e,n={},i,s){return Kn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new ca(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,s)})}createRoom(t,e){return new Tx.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Ys.Client=Lx;var la={};Object.defineProperty(la,"__esModule",{value:!0});la.SchemaSerializer=void 0;const ad=fu;class Ix{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new ad.Reflection().decode(t,e):this.state=ad.Reflection.decode(t,e)}}la.SchemaSerializer=Ix;var ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.NoneSerializer=void 0;class Dx{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}ha.NoneSerializer=Dx;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.SchemaSerializer=o.registerSerializer=o.Auth=o.Room=o.ErrorCode=o.Protocol=o.MatchMakeError=o.Client=void 0;var t=Ys;Object.defineProperty(o,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(o,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=il;Object.defineProperty(o,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(o,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=Ao;Object.defineProperty(o,"Room",{enumerable:!0,get:function(){return n.Room}});var i=Co;Object.defineProperty(o,"Auth",{enumerable:!0,get:function(){return i.Auth}});const s=la;Object.defineProperty(o,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const a=ha,r=rs;Object.defineProperty(o,"registerSerializer",{enumerable:!0,get:function(){return r.registerSerializer}}),(0,r.registerSerializer)("schema",s.SchemaSerializer),(0,r.registerSerializer)("none",a.NoneSerializer)})(hu);class Ox{constructor(t,e){D(this,"group");D(this,"head");D(this,"body");D(this,"leftArm");D(this,"rightArm");D(this,"leftLeg");D(this,"rightLeg");D(this,"label");D(this,"healthBar");D(this,"targetPos",new k);D(this,"targetRotY",0);D(this,"targetRotX",0);D(this,"health",20);D(this,"maxHealth",20);D(this,"walkCycle",0);D(this,"prevPos",new k);D(this,"dead",!1);D(this,"name");this.name=e,this.group=new me,this.prevPos.copy(this.group.position);let n=0;for(let C=0;C<e.length;C++)n=n*31+e.charCodeAt(C)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],s=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],r=i[n%i.length],c=s[(n>>3)%s.length],l=a[(n>>6)%a.length],h=3351057,u=s[(n>>9)%s.length],m=()=>new Pe({color:r}),g=()=>new Pe({color:c}),v=()=>new Pe({color:l}),E=()=>new Pe({color:h}),f=(C,H,Y,K,F=0)=>{const q=new me,Z=new Le(C,H,Y),tt=new Qt(Z,K);return tt.position.y=-H/2+F,q.add(tt),q},d=new Le(.5,.5,.5);this.head=new Qt(d,m()),this.head.position.y=.25;const x=new Le(.52,.52,.52),_=new Pe({color:u,transparent:!0,opacity:.35}),b=new Qt(x,_);this.head.add(b);const w=new Le(.6,.75,.35);this.body=new Qt(w,g()),this.body.position.y=-.375,this.leftArm=f(.25,.65,.25,g(),0),this.rightArm=f(.25,.65,.25,g(),0);const A=new Qt(new Le(.24,.3,.24),m());A.position.y=-.5,this.leftArm.children[0].add(A);const P=A.clone();this.rightArm.children[0].add(P),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=f(.27,.7,.27,v(),0),this.rightLeg=f(.27,.7,.27,v(),0);const U=new Qt(new Le(.28,.22,.28),E());U.position.y=-.5,this.leftLeg.children[0].add(U);const S=U.clone();this.rightLeg.children[0].add(S),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const s=new Xs(e),a=new zr({map:s,transparent:!0,depthTest:!1}),r=new Oc(a);return r.scale.set(1.6,.35,1),r}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Xs(t),i=new zr({map:n,transparent:!0,depthTest:!1}),s=new Oc(i);return s.scale.set(1.2,.15,1),s}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,s=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*s,this.group.position.y+=(n-this.group.position.y)*s,this.group.position.z+=(i-this.group.position.z)*s;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const r=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(r*r+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const u=Math.sin(this.walkCycle),m=.65;this.leftLeg.rotation.x=u*m,this.rightLeg.rotation.x=-u*m,this.leftArm.rotation.x=-u*m,this.rightArm.rotation.x=u*m,this.body.position.y=-.375+Math.abs(u)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class Nx{constructor(t,e,n,i){D(this,"client");D(this,"room",null);D(this,"players",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"mobs",null);D(this,"moveInterval",null);D(this,"getLocalState");D(this,"_playerName","");D(this,"_reconnectDelay",2e3);this.scene=t,this.world=e,this.cb=n;const s=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!s?"wss":"ws";this.client=new hu.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this._playerName=t,this._reconnectDelay=2e3,await this._doJoin()}async _doJoin(){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:this._playerName}),this.cb.onStatusChange("connected"),this._reconnectDelay=2e3,this.setupHandlers(),this.startSendPosition()}catch(t){console.error("[MP] Connection failed:",t),this.cb.onStatusChange("disconnected"),this._scheduleReconnect()}}_scheduleReconnect(){const t=this._reconnectDelay;this._reconnectDelay=Math.min(this._reconnectDelay*2,3e4),console.log(`[MP] Reconnecting in ${t}ms...`),setTimeout(()=>this._doJoin(),t)}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new Ox(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const s=this.players.get(e);s&&(s.targetPos.set(t.x,t.y,t.z),s.targetRotY=t.rotY,s.targetRotX=t.rotX,s.group.visible=t.gameMode!=="spectator",s.health!==t.health&&(s.setHealth(t.health),t.health<=0&&!s.dead&&s.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition(),this._scheduleReconnect()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var s;(s=this.room)==null||s.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}getOnlinePlayerNames(){const t=[];for(const[,e]of this.players)e.name&&t.push(e.name);return t}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const ec={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036};class cd{constructor(t,e){D(this,"group");D(this,"bodyMeshes",[]);D(this,"legs",[]);D(this,"arms",[]);D(this,"headGroup");D(this,"hpSprite");D(this,"id");D(this,"type");D(this,"health");D(this,"maxHealth");D(this,"alive",!0);D(this,"state","idle");D(this,"targetPos",new k);D(this,"targetRotY",0);D(this,"walkCycle",0);D(this,"prevPos",new k);switch(this.group=new me,this.headGroup=new me,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Pe({color:t,transparent:e,opacity:n})}box(t,e,n,i){const s=new Qt(new Le(t,e,n),this.mat(i));return this.bodyMeshes.push(s),s}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.72,.66,.66,16361640);s.position.y=0,this.headGroup.add(s);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const r=a.clone();r.position.x=.2,this.headGroup.add(a,r);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const u=this.box(.18,.2,.1,15757424);u.position.set(-.28,.4,.1),this.headGroup.add(u);const m=u.clone();m.position.x=.28,this.headGroup.add(m),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const g=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[v,E]of g){const f=new me,d=this.box(.3,.48,.3,16361640);d.position.y=-.24;const x=this.box(.3,.14,.3,7816260);x.position.y=-.48-.07,f.add(d,x),f.position.set(v,0,E),this.group.add(f),this.legs.push(f)}}buildZombie(){const s=this.box(.6,.8,.35,2771498);s.position.y=-.05,this.group.add(s);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=u=>{const m=new me,g=this.box(.26,.55,.26,2771498);g.position.y=-.275;const v=this.box(.24,.45,.24,7846775);return v.position.y=-.55-.225,m.add(g,v),m.position.set(u*.43,.2,0),m.rotation.x=-Math.PI/2.2,this.group.add(m),this.arms.push(m),m};l(-1),l(1);const h=u=>{const m=new me,g=this.box(.26,.6,.26,1715738);g.position.y=-.3;const v=this.box(.26,.24,.28,1708040);return v.position.y=-.6-.12,m.add(g,v),m.position.set(u*.175,-.45,0),this.group.add(m),this.legs.push(m),m};h(-1),h(1)}buildChicken(){const s=this.box(.55,.6,.7,16777215);s.scale.set(1,1.1,1.3),s.position.y=.35,this.group.add(s);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const r=this.box(.12,.22,.12,14492194);r.position.set(0,.3,.02),this.headGroup.add(r);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new me,m=this.box(.12,.45,.5,16777215);m.position.y=-.225,u.add(m),u.position.set(h*.34,.35,0),u.rotation.z=-h*.2,this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new me,m=this.box(.1,.4,.1,16763904);m.position.y=-.2;const g=this.box(.25,.06,.18,16763904);g.position.set(.05,-.43,.06),u.add(m,g),u.position.set(h*.14,.05,0),this.group.add(u),this.legs.push(u)}}buildCow(){const s=this.box(1.1,.85,1.5,8014378);s.position.set(0,.5,0),this.group.add(s);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const r=this.box(.76,.7,.72,8014378);this.headGroup.add(r);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const u=this.box(.14,.14,.05,1118481);u.position.set(-.28,.14,.37),this.headGroup.add(u);const m=u.clone();m.position.x=.28,this.headGroup.add(m);const g=this.box(.1,.28,.1,14540253);g.position.set(-.3,.44,.04),this.headGroup.add(g);const v=g.clone();v.position.x=.3,this.headGroup.add(v);const E=this.box(.22,.16,.1,8014378);E.position.set(-.44,.26,.06),this.headGroup.add(E);const f=E.clone();f.position.x=.44,this.headGroup.add(f),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const d=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[_,b]of d){const w=new me,A=this.box(.34,.55,.34,8014378);A.position.y=-.275;const P=this.box(.34,.15,.36,2236962);P.position.y=-.55-.075,w.add(A,P),w.position.set(_,0,b),this.group.add(w),this.legs.push(w)}const x=this.box(.44,.2,.44,16765120);x.position.set(0,-.08,.1),this.group.add(x)}buildSheep(){const s=this.box(1,.95,1.35,14540253);s.position.set(0,.55,0),this.group.add(s);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const r=this.box(.8,.55,.55,14540253);r.position.set(0,.72,.5),this.group.add(r);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const u=h.clone();u.position.x=.2,this.headGroup.add(u);const m=this.box(.52,.3,.5,14540253);m.position.set(0,.38,-.04),this.headGroup.add(m);const g=this.box(.1,.24,.18,8943462);g.position.set(-.34,.1,0),this.headGroup.add(g);const v=g.clone();v.position.x=.34,this.headGroup.add(v),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const E=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[f,d]of E){const x=new me,_=this.box(.28,.52,.28,8943462);_.position.y=-.26;const b=this.box(.28,.14,.3,3355443);b.position.y=-.52-.07,x.add(_,b),x.position.set(f,0,d),this.group.add(x),this.legs.push(x)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const s=this.box(.12,.14,.08,2775578);s.position.set(-.2,.1,.46),this.headGroup.add(s);const a=s.clone();a.position.x=.2,this.headGroup.add(a);const r=this.box(.12,.12,.08,2775578);r.position.set(-.2,-.15,.46),this.headGroup.add(r);const c=r.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,u]of l){const m=new me,g=this.box(.28,.58,.28,4885034);g.position.y=-.29,m.add(g),m.position.set(h,0,u),this.group.add(m),this.legs.push(m)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const s=i.clone();s.position.x=.1,this.headGroup.add(s);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const r=a.clone();r.position.x=.1,this.headGroup.add(r),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new me,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const u=this.box(.12,.45,.12,13421772);u.position.y=-.55-.225,l.add(h,u),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new me,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const u=this.box(.13,.5,.13,13421772);u.position.y=-.55-.25,l.add(h,u),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const s=this.box(.08*1.3,.08*1.3,.05*1.3,17663);s.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=s.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(s);const r=s.clone();r.position.x=.1*1.3,this.headGroup.add(r);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new me,m=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);m.position.y=-.25*1.3;const g=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(g.position.y=-.55*1.3-.225*1.3,u.add(m,g),h===1){const v=this.box(.10400000000000001,.52,.195,8421504);v.position.set(.12*1.3,-.55*1.3,0),u.add(v)}u.position.set(h*.38*1.3,.2*1.3,0),this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new me,m=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);m.position.y=-.275*1.3;const g=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);g.position.y=-.55*1.3-.25*1.3,u.add(m,g),u.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(u),this.legs.push(u)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const s=this.box(.1,.1,.05,2236962);s.position.set(-.15,.1,.32),this.headGroup.add(s);const a=s.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,5913130);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new Qt(new Jr(.3,.5),new Pe({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[u,m]of h){const g=new me,v=this.box(.2,.7,.2,13149294);v.position.y=-.35,g.add(v),g.position.set(u,.1,m),this.group.add(g),this.legs.push(g)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const s=this.box(.62,.95,.42,4885050);s.position.y=.22,this.group.add(s);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const u=new me,m=this.box(.26,.5,.26,16764057);m.position.y=-.25;const g=this.box(.24,.45,.24,16764057);g.position.y=-.55-.225,u.add(m,g),u.position.set(h*.4,.3,0),this.group.add(u),this.arms.push(u)}for(const h of[-1,1]){const u=new me,m=this.box(.26,.5,.26,8015658);m.position.y=-.25;const g=this.box(.26,.45,.26,8015658);g.position.y=-.55-.225,u.add(m,g),u.position.set(h*.15,-.5,0),this.group.add(u),this.legs.push(u)}}buildEnderDragon(){const s=this.box(2,1,4,1114146);s.scale.set(1.5,1.5,1.5),s.position.set(0,.6*1.5,0),this.group.add(s);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const r=this.box(.18,.18,.1,16729156);r.position.set(-.3,.15,.65);const c=new Pe({color:16729156,emissive:16729156,emissiveIntensity:.8});r.material=c,this.headGroup.add(r);const l=r.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const u=this.box(3,.2,2,2228275);u.scale.set(1.5,1.5,1.5),u.position.set(h*2*1.5,.6*1.5,0),this.group.add(u)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const s=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[r,c,l]of s){const h=new Qt(new Nn(.06,8,8),new Pe({color:16724787}));h.position.set(r,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let r=0;r<8;r++){const[c,l,h]=a[r],u=new me,m=this.box(.1,.08,.6,3355443);m.position.set(0,0,.3),u.add(m),u.position.set(c,l,h),u.rotation.z=(r<4?-1:1)*Math.PI/4,this.group.add(u),this.legs.push(u)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.5,.5,.5,8947848);this.headGroup.add(s);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const r=a.clone();r.position.x=.15,this.headGroup.add(a,r);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const u=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[g,v]of u){const E=new me,f=this.box(.18,.5,.18,8947848);f.position.y=-.25,E.add(f),E.position.set(g,0,v),this.group.add(E),this.legs.push(E)}const m=this.box(.1,.08,.7,8947848);m.position.set(0,.2,-.8),this.group.add(m)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const s=this.box(.4,.4,.35,14518323);this.headGroup.add(s);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const r=a.clone();r.position.x=.12,this.headGroup.add(a,r);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const u=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[g,v]of u){const E=new me,f=this.box(.12,.38,.12,14518323);f.position.y=-.19,E.add(f),E.position.set(g,0,v),this.group.add(E),this.legs.push(E)}const m=this.box(.08,.06,.6,14518323);m.position.set(0,.1,-.6),this.group.add(m)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const s=this.box(2,.1,.8,1717060);s.position.set(-1,-.05,0),this.group.add(s);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const r=new Qt(new Nn(.1,8,8),new Pe({color:4521796,emissive:4521796}));r.position.set(-.3,.1,.8),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const s=new Qt(new Le(1.2,1.2,1.2),new Pe({color:4500036,transparent:!0,opacity:.8}));s.position.y=0,this.bodyMeshes.push(s),this.group.add(s);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const r=new Qt(new Nn(.15,8,8),new Pe({color:16777215}));r.position.set(-.25,.25,.5),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new Qt(new Nn(.06,8,8),new Pe({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Xs(t),n=new zr({map:e,transparent:!0,depthTest:!1}),i=new Oc(n);i.scale.set(1.2,.18,1);const s={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=s[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,s=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=s/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const r=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=r*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(r)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=r*.7,this.legs[1].rotation.x=-r*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(r)*.3);this.headGroup.position.y=.72+Math.abs(r)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,s=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:ec.creeper;for(const a of this.bodyMeshes)a.material.color.set(s)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=ec[this.type]??16777215,s=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(s);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,s=Math.min(i/e,1);this.group.rotation.z=s*(Math.PI/2),this.group.position.y=this.targetPos.y-s*.5;const a=1-s*.3;if(this.group.scale.setScalar(a),i%200<100)for(const r of this.bodyMeshes)r.material.color.set(16720418);else{const r=ec[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(r)}s<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function _n(o,t){return o+Math.random()*(t-o)}function Ux(){return Math.random().toString(36).slice(2,10)}const ld=8,Bx=30,hd=60,kx=-20,Fx=new Le(.1,.1,.4),zx=new Pe({color:16768256}),dd=new k,di=class di{constructor(t,e,n,i){D(this,"mobs",new Map);D(this,"scene");D(this,"world");D(this,"cb");D(this,"singleplayer");D(this,"arrows",[]);D(this,"dayTime",.5);D(this,"mountedMobId",null);D(this,"onBurnParticle");D(this,"attackCooldown",0);D(this,"onWardenBlind");this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,s){const a=s??Ux(),r=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:t==="warden"?500:t==="allay"?20:t==="frog"?10:t==="strider"?20:t==="axolotl"?14:10,c={id:a,type:t,x:e,y:n,z:i,rotY:_n(0,Math.PI*2),health:r,maxHealth:r,alive:!0,state:"idle"},l=new cd(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=ld)return;const n=_n(0,Math.PI*2),i=_n(12,Bx),s=t+Math.cos(n)*i,a=e+Math.sin(n)*i,r=this.dayTime<.25||this.dayTime>.73;let c,l;const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(s),Math.round(a)):20,u=Math.round(h)+1,m=this.world.getBlockType?this.world.getBlockType(Math.round(s),u+1,Math.round(a)):void 0,g=h<15||m!==void 0&&m!==0;if(r&&Math.random()<.15)c=20+_n(0,10),l="phantom";else if(c=u+.5,g&&Math.random()<.08)l="slime";else if(g){const v=Math.random();l=v<.3?"zombie":v<.55?"skeleton":v<.75?"spider":v<.9?"creeper":"witherskeleton"}else if(r){const v=Math.random();l=v<.25?"zombie":v<.45?"skeleton":v<.6?"creeper":v<.75?"spider":v<.85?"witherskeleton":v<.9?"pig":v<.95?"cow":"sheep"}else{const v=Math.random();l=v<.25?"pig":v<.45?"chicken":v<.6?"cow":v<.75?"sheep":v<.85?"horse":v<.92?"wolf":"cat"}this.spawnMob(l,s,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const s=new cd(this.scene,n);this.mobs.set(n.id,{data:n,mob:s,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e,n=0){if(this.attackCooldown>0)return null;const i=[],s=new Map;for(const[v,E]of this.mobs)E.mob.alive&&E.mob.group.traverse(f=>{f.isMesh&&(i.push(f),s.set(f,v))});const a=t.intersectObjects(i);if(!a.length)return null;const r=s.get(a[0].object);if(!r)return null;const c=this.mobs.get(r);let l=5;e!=null&&e.sharpness&&(l+=2*e.sharpness),n>0&&(l+=n),c.mob.health-=l,c.mob.showDamage(c.mob.health),c.mob.health<=0&&c.mob.die(),this.attackCooldown=.4;const h=t.ray.origin,u=c.data.x-h.x,m=c.data.z-h.z,g=Math.sqrt(u*u+m*m)||1;return c.data.x+=u/g*2.5,c.data.z+=m/g*2.5,{mobId:r,damage:l}}update(t){var n;this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[i,s]of this.mobs){if(s.hitCooldown>0&&(s.hitCooldown=Math.max(0,s.hitCooldown-t)),s.mob.update(t),!s.mob.alive){if(s.mob._deathTimer===void 0&&(s.mob._deathTimer=1.5),s.mob._deathTimer-=t,s.mob._deathTimer<=0){if(s.data.type==="slime"&&!s.data.isMiniSlime)for(let c=0;c<2;c++){const l=(Math.random()-.5)*2,h=(Math.random()-.5)*2,u={id:`slime_mini_${Date.now()}_${c}`,type:"slime",x:s.data.x+l,y:s.data.y,z:s.data.z+h,rotY:Math.random()*Math.PI*2,state:"idle",health:4,maxHealth:4,isMiniSlime:!0};this.addMob(u,this.scene)}s.mob.dispose(this.scene),this.mobs.delete(i)}continue}if(this.singleplayer&&di.UNDEAD_TYPES.has(s.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const l=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(s.data.x),Math.round(s.data.z)):20;if(s.data.y>=l-2){if(s.mob.health-=4*t,s.mob.showDamage(s.mob.health),!s.mob.alive){s.mob.die();continue}Math.random()<t*3&&((n=this.onBurnParticle)==null||n.call(this,s.data.x,s.data.y+1,s.data.z))}}if(this.singleplayer){const c=s.mob.targetPos.x-e.x,l=s.mob.targetPos.z-e.z;c*c+l*l<=32*32&&this.runAI(s,t,e)}const a=s.data.x-e.x,r=s.data.z-e.z;a*a+r*r>hd*hd&&(s.mob.dispose(this.scene),this.mobs.delete(i))}for(let i=this.arrows.length-1;i>=0;i--){const s=this.arrows[i];s.life-=t,s.mesh.position.addScaledVector(s.vel,t);const a=s.mesh.position.x-e.x,r=s.mesh.position.y-e.y,c=s.mesh.position.z-e.z;a*a+r*r+c*c<.64?(this.cb.onPlayerDamage(1),this.scene.remove(s.mesh),this.arrows.splice(i,1)):s.life<=0&&(this.scene.remove(s.mesh),this.arrows.splice(i,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<ld&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,s){const a=t.data,r=e-a.x,c=n-a.z,l=Math.atan2(r,c);a.rotY=l;const h=Math.sin(l)*.8,u=Math.cos(l)*.8,m=Math.round(a.x+h),g=Math.round(a.z+u),v=Math.round(a.y),E=this.world.getBlockType(m,v,g),f=this.world.getBlockType(m,v+1,g);if(E&&E!==7&&E!==0){if(!f||f===7||f===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0;{const d=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=d,a.x+=Math.sin(d)*i*.5*s,a.z+=Math.cos(d)*i*.5*s,!1}}return a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0}runAI(t,e,n){const i=t.data;t.timer-=e;const s=n.x-i.x,a=n.z-i.z,r=s*s+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=kx*e;const c=Math.round(i.x),l=Math.round(i.z);(c!==t._surfCacheX||l!==t._surfCacheZ)&&(t._surfCacheX=c,t._surfCacheZ=l,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(c,l)+.5:0);const h=t._surfCacheY;if(i.y<=h&&(i.y=h,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const u=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,r,s,a,u)}else i.type==="horse"?this.horseAI(t,e,r,s,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,r,s,a,n):i.type==="creeper"?this.creeperAI(t,e,r,n):i.type==="skeleton"?this.skeletonAI(t,e,r,s,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,r,s,a,n):i.type==="spider"?this.spiderAI(t,e,r,s,a,n):i.type==="wolf"?this.wolfAI(t,e,r,s,a,n):i.type==="cat"?this.catAI(t,e,r,s,a,n):i.type==="slime"?this.slimeAI(t,e,r,s,a,n):i.type==="warden"?this.wardenAI(t,e,r,s,a,n):i.type==="allay"||i.type==="axolotl"?r>9&&(i.rotY=Math.atan2(s,a),i.x+=Math.sin(i.rotY)*2.5*e,i.z+=Math.cos(i.rotY)*2.5*e):i.type==="frog"?this.animalAI(t,e,r,s,a,2.5):i.type==="strider"&&this.animalAI(t,e,r,s,a,3.5)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,s,a){const r=t.data;if(n<25&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const c=r.rotY+Math.PI;r.x+=Math.sin(c)*a*e,r.z+=Math.cos(c)*a*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)):(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&(r.state="idle",t.timer=_n(2,5)))}horseAI(t,e,n,i,s,a){const r=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const u=h.data.x-r.x,m=h.data.z-r.z;if(u*u+m*m<225){l=!0;break}}if(l&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){let h=0,u=0;for(const m of this.mobs.values())if((m.data.type==="zombie"||m.data.type==="skeleton")&&m.data.id!==r.id){h=m.data.x,u=m.data.z;break}(h!==0||u!==0)&&(r.rotY=Math.atan2(r.x-h,r.z-u)),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)):(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle",t.timer=_n(2,5)))}zombieAI(t,e,n,i,s,a){const r=t.data,c=2.8;n<144?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,s,1.5)}creeperAI(t,e,n,i){const s=t.data,a=2.5;if(n<100?s.state!=="fusing"&&(s.state="fusing",t.timer=di.CREEPER_FUSE_TIME):s.state==="fusing"&&(s.state="idle",t.timer=_n(1.5,4),t.mob.setCreeperFuse(0)),s.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const r=1-t.timer/di.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,r))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(s.state=Math.random()<.5?"walking":"idle",s.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)),s.state==="walking"&&(s.x+=Math.sin(s.rotY)*a*e,s.z+=Math.cos(s.rotY)*a*e)}explode(t,e){const n=t.data,i=5,s=5,a=e.x-n.x,r=e.y-n.y,c=e.z-n.z;a*a+r*r+c*c<s*s&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,s,a){const r=t.data,c=1.8,l=400,h=16,u=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(r.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a),t.shootTimer=u),n<h){const m=r.rotY+Math.PI;r.x+=Math.sin(m)*c*e,r.z+=Math.cos(m)*c*e}else r.rotY=Math.atan2(i,s);else n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1);r.state!=="attacking"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e))}witherskeletonAI(t,e,n,i,s,a){var u,m;const r=t.data,c=4,l=4,h=400;t.shootTimer=(t.shootTimer??0)-e,n<h?(r.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(m=(u=this.cb).onWitherEffect)==null||m.call(u))):n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state!=="chasing"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.5*e,r.z+=Math.cos(r.rotY)*c*.5*e))}shootArrow(t,e,n,i){const s=new Qt(Fx,zx);s.position.set(t,e,n),dd.set(i.x-t,i.y-e,i.z-n).normalize();const r=dd.clone().multiplyScalar(15);this.scene.add(s),this.arrows.push({mesh:s,vel:r,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const s=15,a=i.x+Math.sin(t.timer)*s,r=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*s,l=3;n.x+=(a-n.x)*l*e,n.y+=(r-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,r=i.z-n.z;a*a+r*r<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,s,a){const r=t.data,c=3.5,l=225,h=9,u=3;t.jumpTimer||(t.jumpTimer=0),n<l?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=u),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=_n(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.6*e,r.z+=Math.cos(r.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,s=n.x-i.x,a=n.z-i.z;s*s+a*a<100&&(i.rotY=Math.atan2(s,a))}wolfAI(t,e,n,i,s,a){const r=t.data,c=4;if(r.state!=="tamed")if(n<4&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const l=r.rotY+Math.PI;r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"&&(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e);else{let l=!1;for(const[h,u]of this.mobs){if(!u.mob.alive||!di.HOSTILE_TYPES.has(u.data.type))continue;const m=u.data.x-r.x,g=u.data.z-r.z,v=m*m+g*g;if(v<64){r.rotY=Math.atan2(m,g),r.x+=Math.sin(r.rotY)*c*1.2*e,r.z+=Math.cos(r.rotY)*c*1.2*e,r.state="following",v<2.25&&(t.hitCooldown??0)<=0&&(u.mob.health-=4,u.mob.showDamage(u.mob.health),u.mob.health<=0&&u.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="sitting")}}catAI(t,e,n,i,s,a){const r=t.data,c=2.5;r.state!=="tamed"?r.state==="idle"?(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(r.state="sitting")),r.x+=Math.sin(r.rotY)*1*e,r.z+=Math.cos(r.rotY)*1*e):r.state==="sitting"&&t.timer<=0&&(r.state="idle"):n>64?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e):r.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,r=n.z-i.z,c=a*a+r*r;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const h of this.mobs.values())if(h.data.type==="cat"&&h.data.state==="tamed"){const u=h.data.x-i.x,m=h.data.z-i.z,g=h.data.y-i.y;if(u*u+m*m+g*g<100){l=!0;break}}if(l){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,r);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=_n(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}wardenAI(t,e,n,i,s,a){var l;const r=t.data,c=3.5;n<20*20?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.aggro=!0,n<3*3&&(t.hitCooldown??0)<=0&&(this.cb.onPlayerDamage(15),t.hitCooldown=3,(l=this.onWardenBlind)==null||l.call(this))):(t.aggro=!1,this.animalAI(t,e,n,i,s,1.5))}slimeAI(t,e,n,i,s,a){const r=t.data,c=4.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,s);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}tryMount(t){for(const[e,n]of this.mobs){if(n.data.type!=="horse"||!n.mob.alive)continue;const i=n.data.x-t.x,s=n.data.z-t.z;if(i*i+s*s<4)return this.mountedMobId=e,n.data.state="mounted",!0}return!1}dismount(){this.mountedMobId=null}updateMount(t,e,n,i){if(!this.mountedMobId)return;const s=this.mobs.get(this.mountedMobId);if(!s||!s.mob.alive){this.mountedMobId=null;return}s.data.x=t.x,s.data.z=t.z,s.data.rotY=e,s.mob.targetPos.set(s.data.x,s.data.y,s.data.z),s.mob.group.position.set(s.data.x,s.data.y,s.data.z)}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};D(di,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom","warden"])),D(di,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom"])),D(di,"CREEPER_FUSE_TIME",1.5);let Gr=di;class Hx{constructor(){D(this,"hotbarEl",document.getElementById("hotbar"));D(this,"topLeftEl",document.getElementById("topLeft"));D(this,"topRightEl",document.getElementById("topRight"));D(this,"connEl",document.getElementById("connStatus"));D(this,"blockNameEl",document.getElementById("blockName"));D(this,"chatMsgsEl",document.getElementById("chatMessages"));D(this,"chatInput",document.getElementById("chatInput"));D(this,"heartsEl",document.getElementById("hearts"));D(this,"hungerEl",document.getElementById("hunger"));D(this,"timeEl",document.getElementById("timeDisplay"));D(this,"gameModeEl",document.getElementById("gameModeEl"));D(this,"deathScreen",document.getElementById("deathScreen"));D(this,"respawnBtn",document.getElementById("respawnBtn"));D(this,"selectedIndex",0);D(this,"gameMode","survival");D(this,"craftingPanel",null);D(this,"inventoryPanel",null);D(this,"xpBarEl",null);D(this,"xpLevelEl",null);D(this,"dayCounterEl",null);D(this,"dayNotifyEl",null);D(this,"_lastLevel",-1);D(this,"_lastDay",-1);D(this,"debugScreenEl",null);D(this,"debugVisible",!1);D(this,"_lastHp",-1);D(this,"_lastMaxHp",-1);D(this,"_lastWither",!1);D(this,"_lastHunger",-1);D(this,"_lastMaxHunger",-1);D(this,"_lastTimeStr","");D(this,"_lastTimeDayTime",-1);D(this,"_lastPosX",NaN);D(this,"_lastPosY",NaN);D(this,"_lastPosZ",NaN);D(this,"_posXEl",null);D(this,"_posYEl",null);D(this,"_posZEl",null);D(this,"onChat");D(this,"onRespawn");D(this,"onCraft");D(this,"onInventorySwap");D(this,"getInvCount");D(this,"tooltipEl",document.getElementById("hotbarTooltip"));D(this,"tooltipTimer",null);D(this,"airBubblesEl",document.getElementById("airBubbles"));D(this,"chatHistory",[]);D(this,"chatHistoryIdx",-1);D(this,"chestPanel",null);D(this,"onChestClose");D(this,"onChestTransfer");D(this,"smeltingPanel",null);D(this,"onSmelt");D(this,"killFeedEl",null);D(this,"playerListPanel",null);D(this,"enchantPanel",null);D(this,"onEnchant",null);D(this,"tradePanel",null);D(this,"onTrade",null);D(this,"bossBarEl",null);D(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,s)=>{const a=i.querySelector(".slot-icon");if(!a)return;const r=t[s]??0;if(r===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+Bs(r).toString(16).padStart(6,"0"),a.title=Qe(r);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[s]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,s)=>{i.classList.toggle("active",s===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,s=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&s===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=s,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=s.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),s=Math.floor(t/2),a=t%2===1;for(let r=0;r<i;r++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),r<s?c.classList.add("full"):r===s&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,s=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const r=this.deathScreen.querySelector(".death-coords");r&&(r.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${s}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),s=t%2===1;for(let a=0;a<n;a++){const r=document.createElement("div");r.className="hunger-icon",a<i?r.classList.add("full"):a===i&&s?r.classList.add("half"):r.classList.add("empty"),this.hungerEl.appendChild(r)}}updateAirSupply(t,e){if(!this.airBubblesEl)return;const n=10,i=Math.round(t/e*n);if(t>=e){this.airBubblesEl.style.display="none";return}this.airBubblesEl.style.display="flex",this.airBubblesEl.innerHTML="";for(let s=0;s<n;s++){const a=document.createElement("span");a.style.cssText=`
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
    `;let i=null;const s=[],a=h=>{const u=s[h];if(!u)return;const m=t[h]??0,g=m===0?"#333333":"#"+Bs(m).toString(16).padStart(6,"0");u.style.background=i===h?"#ffee88":g,u.style.border=i===h?"2px solid #ffcc00":"1px solid #1a1a1a",u.title=m===0?"Empty":Qe(m)};for(let h=0;h<36;h++){const u=document.createElement("div"),m=t[h]??0,g=m===0?"#333333":"#"+Bs(m).toString(16).padStart(6,"0");u.style.cssText=`
        width: 24px; height: 24px;
        background: ${g};
        border: 1px solid #1a1a1a;
        border-radius: 1px; cursor: pointer;
        transition: background 0.1s;
        position: relative;
      `,u.title=m===0?"Empty":Qe(m);const v=t[h]??0;if(v!==0&&this.getInvCount){const f=document.createElement("span");f.style.cssText="position:absolute;bottom:1px;right:2px;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",f.textContent=String(this.getInvCount(v)||""),u.appendChild(f)}s.push(u);const E=h;u.addEventListener("click",()=>{var f;if(i===null)t[E]!==0&&(i=E,a(E));else if(i===E)i=null,a(E);else{const d=t[E];t[E]=t[i],t[i]=d;const x=i;i=null,a(E),a(x),(f=this.onInventorySwap)==null||f.call(this,x,E)}}),u.addEventListener("mouseenter",()=>{i!==E&&(u.style.outline="1px solid #aaa")}),u.addEventListener("mouseleave",()=>{u.style.outline="none"}),n.appendChild(u)}this.inventoryPanel.appendChild(n);const r=document.createElement("div");r.textContent="Crafting",r.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;for(let h=0;h<4;h++){const u=document.createElement("div");u.style.cssText=`
        width: 30px;
        height: 30px;
        background: #333333;
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
      `,u.title="Crafting slot",c.appendChild(u)}this.inventoryPanel.appendChild(c);const l=document.createElement("button");l.style.cssText=`
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
    `,l.textContent="Close (E)",l.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(l),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e;if(t.key==="Enter"){const n=this.chatInput.value.trim();n&&(this.chatHistory.unshift(n),this.chatHistory.length>50&&this.chatHistory.pop(),this.chatHistoryIdx=-1,(e=this.onChat)==null||e.call(this,n)),this.closeChatInput(),t.stopPropagation();return}if(t.key==="ArrowUp"){t.preventDefault(),this.chatHistory.length>0&&(this.chatHistoryIdx=Math.min(this.chatHistoryIdx+1,this.chatHistory.length-1),this.chatInput.value=this.chatHistory[this.chatHistoryIdx]),t.stopPropagation();return}if(t.key==="ArrowDown"){t.preventDefault(),this.chatHistoryIdx=Math.max(this.chatHistoryIdx-1,-1),this.chatInput.value=this.chatHistoryIdx>=0?this.chatHistory[this.chatHistoryIdx]:"",t.stopPropagation();return}if(t.key==="Escape"){this.closeChatInput(),t.stopPropagation();return}t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed","/give","/god","/spawn","/boss","/achievements","/stats","/nether","/craft","/tame","/spectator"],n=t.slice(1).toLowerCase(),i=e.filter(s=>s.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatHistoryIdx=-1,this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const s=new Date,a=s.getHours().toString().padStart(2,"0"),r=s.getMinutes().toString().padStart(2,"0"),c=`[${a}:${r}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const u=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${u}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"saddle",name:"Saddle",ingredients:{95:7},output:{type:93,count:1}},{id:"anvil",name:"Anvil",ingredients:{62:4},output:{type:94,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
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
    `,this.craftingPanel.appendChild(i);const s=this.getInvCount??(()=>0),a={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",95:"Leather",93:"Saddle",94:"Anvil",3:"Stone",4:"Sand"};for(const c of t){const l=Object.entries(c.ingredients).every(([f,d])=>s(Number(f))>=d),h=document.createElement("div");h.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${l?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${l?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${l?"pointer":"default"};
        opacity: ${l?"1":"0.5"};
      `;const u=document.createElement("span");u.textContent=c.hand?"✋":"🔨",u.style.cssText="font-size: 16px; flex-shrink: 0;";const m=document.createElement("div");m.style.cssText="flex: 1;";const g=document.createElement("div");g.textContent=c.name,g.style.cssText=`color: ${l?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const v=document.createElement("div"),E=Object.entries(c.ingredients).map(([f,d])=>{const x=s(Number(f)),_=a[Number(f)]??`Item ${f}`;return`<span style="color:${x>=d?"#88ff88":"#ff8888"}">${d}x ${_}</span>`});v.innerHTML=E.join(", "),v.style.cssText="font-size: 10px; margin-top: 2px;",m.appendChild(g),m.appendChild(v),h.appendChild(u),h.appendChild(m),l&&h.addEventListener("click",()=>{var d;((d=this.onCraft)==null?void 0:d.call(this,c.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(h),h.dataset.recipeName=c.name.toLowerCase()}i.addEventListener("input",()=>{const c=i.value.toLowerCase();this.craftingPanel.querySelectorAll("[data-recipe-name]").forEach(l=>{l.style.display=(l.dataset.recipeName??"").includes(c)?"":"none"})});const r=document.createElement("button");r.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,r.textContent="Close [E]",r.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(r),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=h=>{const u=h===0?"444444":Bs(h).toString(16).padStart(6,"0");return`
        width: ${n}px; height: ${n}px;
        background: #${u};
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
    `;const s=document.createElement("h2");s.textContent="Chest",s.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(s);const a=(h,u,m,g)=>{const v=document.createElement("div");v.style.cssText="margin-bottom: 10px;";const E=document.createElement("div");E.textContent=h,E.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",v.appendChild(E);const f=document.createElement("div");f.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${g}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let d=0;d<u.length;d++){const x=u[d]??0,_=document.createElement("div");if(_.style.cssText=i(x),_.title=x===0?"Empty":`${Qe(x)} (click to move)`,x!==0){const w=document.createElement("span");w.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,w.textContent=Qe(x).slice(0,3),_.appendChild(w)}_.addEventListener("mouseenter",()=>{x&&(_.style.transform="scale(1.1)",_.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",_.style.zIndex="2")}),_.addEventListener("mouseleave",()=>{_.style.transform="scale(1)",_.style.boxShadow="none",_.style.zIndex="0"});const b=d;_.addEventListener("click",()=>{var w;x!==0&&((w=this.onChestTransfer)==null||w.call(this,m,b,t,e),this.hideChestUI(),this.showChestUI(t,e))}),f.appendChild(_)}return v.appendChild(f),v};this.chestPanel.appendChild(a("Chest",t,!0,9));const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(r),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
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
    `;const l=document.createElement("div");l.appendChild(r),l.appendChild(c),e.appendChild(s),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const u=document.createElement("div");u.id="smelt-fuel",u.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(h),this.smeltingPanel.appendChild(u);const m=document.createElement("button");m.style.cssText=`
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
    `,m.textContent="Smelt",m.addEventListener("click",()=>{var f;const E=(f=this.onSmelt)==null?void 0:f.call(this,14,5);E!=null&&this.addChatMessage("",`Smelted item (type ${E})!`,!0)}),this.smeltingPanel.appendChild(m);const g=document.createElement("button");g.style.cssText=`
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
    `,g.textContent="Close",g.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(g);const v=document.createElement("style");v.textContent=`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `,document.head.appendChild(v),document.body.appendChild(this.smeltingPanel)}hideSmeltingUI(){this.smeltingPanel&&(this.smeltingPanel.remove(),this.smeltingPanel=null)}isSmeltingOpen(){return this.smeltingPanel!==null}addKillFeedEntry(t,e){this.killFeedEl||(this.killFeedEl=document.createElement("div"),this.killFeedEl.id="killfeed",this.killFeedEl.style.cssText=`
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
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),s=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60,c=s>0?`${s}h ${a}m ${r}s`:`${a}m ${r}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[m,g]of l){if(!m){const d=document.createElement("hr");d.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(d);continue}const v=document.createElement("div");v.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const E=document.createElement("span");E.textContent=m,E.style.color="#aaa";const f=document.createElement("span");f.textContent=g,f.style.cssText="font-weight: bold; color: #fff;",v.appendChild(E),v.appendChild(f),this.scoreboardPanel.appendChild(v)}const h=Object.entries(t.killsByType||{}).sort((m,g)=>g[1]-m[1]);if(h.length>0){const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(m);const g=document.createElement("div");g.textContent="Kills by Type",g.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(g);for(const[v,E]of h){const f=document.createElement("div");f.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const d=document.createElement("span");d.textContent=v.charAt(0).toUpperCase()+v.slice(1),d.style.color="#999";const x=document.createElement("span");x.textContent=`${E}`,x.style.color="#ddd",f.appendChild(d),f.appendChild(x),this.scoreboardPanel.appendChild(f)}}const u=document.createElement("div");u.textContent="Press O to close",u.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(u),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const Gx=new Le(.12,.12,.12),Vx=128;class Wx{constructor(t){D(this,"scene");D(this,"pool",[]);D(this,"active",[]);this.scene=t;for(let e=0;e<Vx;e++){const n=new Pe({color:16777215,transparent:!0}),i=new Qt(Gx,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,s,a,r,c,l=1,h=!1){let u=null;for(let m=0;m<this.pool.length;m++)if(!this.pool[m].active){u=this.pool[m];break}u&&(u.active=!0,u.life=0,u.maxLife=c,u.vx=s,u.vy=a,u.vz=r,u.mesh.position.set(t,e,n),u.mesh.scale.setScalar(l),u.mesh.visible=!0,u.mat.color.setHex(i),u.mat.opacity=1,h?(u.mat.emissive.setHex(i),u.mat.emissiveIntensity=.6):u.mat.emissiveIntensity=0,this.active.push(u))}spawn(t,e,n,i,s,a,r,c,l=.3){this.acquire(t,e,n,i,a,r,c,s,l)}burst(t,e,n,i,s=12){const a=Bs(i);for(let r=0;r<s;r++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const s=Bs(i);for(let a=0;a<8;a++){const r=a/8*Math.PI*2;this.acquire(t+Math.cos(r)*.4,e,n+Math.sin(r)*.4,s,Math.cos(r)*2,.5+Math.random(),Math.sin(r)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let s=0;s<i;s++){const a=Math.random()*Math.PI*2,r=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*r,3+Math.random()*2,Math.sin(a)*r,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let s=0;s<i;s++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let s=0;s<i;s++){const a=Math.random()<.5?11158783:16763904,r=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(r)*c,1+Math.random()*2,Math.sin(r)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let s=0;s<i;s++){const a=Math.random(),r=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,r,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class Xx{constructor(){D(this,"ctx",null);D(this,"musicActive",!1);D(this,"musicTimeout",null);D(this,"sfxVolume",1);D(this,"musicVolume",.6);D(this,"ambientActive",!1);D(this,"ambientTimeout",null);D(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){e*=this.sfxVolume;try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.6,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,s=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=s;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime+i),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(r),r.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),s=n.createBufferSource();s.buffer=i;const a=n.createGain(),r=t*(.1+Math.random()*.06);a.gain.setValueAtTime(r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}s.connect(c),c.connect(a),a.connect(n.destination),s.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const s=e.createGain(),a=Math.min(t*.15,.5);s.gain.setValueAtTime(a,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=150,i.connect(r),r.connect(s),s.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),s.gain.setValueAtTime(.06,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(s),s.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(r),r.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),s=t.createBuffer(1,i,n),a=s.getChannelData(0);for(let r=0;r<i;r++)a[r]=Math.random()*2-1;return s}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let s=0;const a=()=>{if(!this.musicActive)return;const r=e.createOscillator(),c=e.createGain();r.type=t==="disc_blue"?"square":"sine",r.frequency.value=i[s%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),r.connect(c),c.connect(e.destination),r.start(),r.stop(e.currentTime+.5),s++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}playNote(t){try{const e=this.getCtx(),n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.value=t,i.gain.setValueAtTime(.3*this.sfxVolume,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.4),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.4)}catch{}}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,s=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),r=2+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const h=i[Math.floor(Math.random()*i.length)],u=a.createOscillator(),m=a.createGain();u.type=t==="cave"||Math.random()>.5?"sine":"triangle",u.frequency.value=h*(t==="cave"?.5:1);const g=3+Math.random()*4;m.gain.setValueAtTime(0,a.currentTime),m.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+g*.3),m.gain.linearRampToValueAtTime(0,a.currentTime+g),u.detune.value=(Math.random()-.5)*10,u.connect(m),m.connect(this.ambientGain),u.start(),u.stop(a.currentTime+g+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(s,c)};this.ambientTimeout=setTimeout(s,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Yx{constructor(t){D(this,"scene");D(this,"drops",[]);D(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const s=qx[i]??16777215,a=new Le(.35,.35,.35),r=new Pe({color:s}),c=new Qt(a,r);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const s=jx[t];if(s){for(const a of s)if(Math.random()<a.chance){const r=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<r;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let s=this.drops.length-1;s>=0;s--){const a=this.drops[s];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const r=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(r*r+l*l+c*c<2.25||a.life<=0)&&(r*r+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(s,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const qx={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},jx={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],horse:[{item:"leather",chance:1,min:1,max:2}],warden:[{item:"iron_ingot",chance:1,min:4,max:8}],axolotl:[{item:"salmon",chance:.5,min:1,max:1}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]},pu={};for(const[o,t]of Object.entries(na)){const e=Number(o);if(t&&t.color!=null){const n=t.color;pu[e]=[n>>16&255,n>>8&255,n&255]}}class $x{constructor(t){D(this,"canvas");D(this,"ctx");D(this,"container");D(this,"updateTimer",0);D(this,"world");D(this,"RADIUS",32);D(this,"CANVAS_SIZE",128);D(this,"UPDATE_INTERVAL",.3);D(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,s){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,s))}drawMap(t,e,n,i){const s=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,r=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let d=0;d<c.length;d+=4)c[d]=26,c[d+1]=26,c[d+2]=26,c[d+3]=255;const h=Math.floor(t.x)-this.RADIUS,u=Math.floor(t.x)+this.RADIUS,m=Math.floor(t.z)-this.RADIUS,g=Math.floor(t.z)+this.RADIUS;for(let d=h;d<=u;d++)for(let x=m;x<=g;x++){let _=0;for(let U=40;U>=0;U--){const S=this.world.getBlockType(d,U,x);if(S!==void 0){_=S;break}}if(_===0)continue;const b=Math.round(s+(d-t.x)*r),w=Math.round(a+(x-t.z)*r);if(b<0||b>=l||w<0||w>=l)continue;const A=pu[_],P=(w*l+b)*4;A?(c[P]=A[0],c[P+1]=A[1],c[P+2]=A[2],c[P+3]=255):(c[P]=255,c[P+1]=255,c[P+2]=255,c[P+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const d of i){if(!d.alive)continue;const x=s+(d.x-t.x)*r,_=a+(d.z-t.z)*r;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(x,_,2,0,Math.PI*2),this.ctx.fill()}for(const d of n){const x=s+(d.x-t.x)*r,_=a+(d.z-t.z)*r;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(x,_,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(s,a,3,0,Math.PI*2),this.ctx.fill();const v=6,E=s+Math.sin(e)*v,f=a+Math.cos(e)*v;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(s,a),this.ctx.lineTo(E,f),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class Zx{constructor(t,e){D(this,"scene");D(this,"sounds");D(this,"type","clear");D(this,"rainParticles",null);D(this,"rainPositions",null);D(this,"rainVelY",null);D(this,"rainCount",2e3);D(this,"splashParticles",null);D(this,"splashPositions",null);D(this,"splashLife",null);D(this,"splashCount",200);D(this,"thunderTimer",0);D(this,"thunderFlash",!1);D(this,"nextThunder",15);D(this,"_lightningStrike",null);D(this,"rainSoundTimer",0);D(this,"rainAmbientNode",null);D(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new mn,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new Mn(e,3));const i=new Nc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new kh(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const s=new mn,a=new Float32Array(this.splashCount*3),r=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,r[l]=0;s.setAttribute("position",new Mn(a,3));const c=new Nc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new kh(s,c),this.splashPositions=a,this.splashLife=r,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let s=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&s<this.splashCount){const r=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[s*3]=r,this.splashPositions[s*3+1]=e.y-1+Math.random()*.5,this.splashPositions[s*3+2]=c,this.splashLife[s]=.3,s++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this._lightningStrike={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40},this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}consumeLightningStrike(){const t=this._lightningStrike;return this._lightningStrike=null,t}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let s=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(s+.02*h)/1.02,s=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const r=t.createGain();r.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(r),r.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=r,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const Kx=new Nn(.2,6,6),Jx=new _i({color:8978244});class Qx{constructor(t){D(this,"scene");D(this,"orbs",[]);D(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const s=new Qt(Kx,Jx);s.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(s),this.orbs.push({mesh:s,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const s=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z,c=s*s+a*a+r*r;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const ty=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class ey{constructor(){D(this,"achievements");D(this,"counters",new Map);D(this,"onUnlock",null);this.achievements=new Map(ty.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const s=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",s),s<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class ny{constructor(){D(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const iy=`
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
`,Li=class Li{constructor(){D(this,"mesh");D(this,"material");D(this,"_zenith",new yt);D(this,"_horizon",new yt);D(this,"_glow",new yt);D(this,"_sunDir",new k);const t=new Nn(400,24,16);this.material=new ki({vertexShader:iy,fragmentShader:sy,side:fn,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new k(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new Qt(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=Li.ZENITH,s=Li.HORIZON,a=Li.GLOW;let r;if(n<.2){const h=n/.2;this._zenith.copy(i.night).lerp(i.dawn,h),this._horizon.copy(s.night).lerp(s.dawn,h),this._glow.copy(a.night).lerp(a.dawn,h),r=h*.8}else if(n<.3){const h=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,h),this._horizon.copy(s.dawn).lerp(s.day,h),this._glow.copy(a.dawn).lerp(a.day,h),r=(1-h)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(s.day),this._glow.copy(a.day),r=.05;else if(n<.8){const h=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,h),this._horizon.copy(s.day).lerp(s.dusk,h),this._glow.copy(a.day).lerp(a.dusk,h),r=h*.8}else{const h=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,h),this._horizon.copy(s.dusk).lerp(s.night,h),this._glow.copy(a.dusk).lerp(a.night,h),r=(1-h)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=r,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};D(Li,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),D(Li,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),D(Li,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Vc=Li;const Re=new iu({antialias:!1});Re.setPixelRatio(Math.min(window.devicePixelRatio,1));Re.setSize(window.innerWidth,window.innerHeight);Re.shadowMap.enabled=!1;Re.toneMapping=pi;Re.toneMappingExposure=1.1;document.body.appendChild(Re.domElement);let mu=!1;document.addEventListener("visibilitychange",()=>{mu=document.hidden});Re.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault();const t=document.createElement("div");t.id="glLostOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;align-items:center;justify-content:center;z-index:9999;font-size:1.2rem;font-family:monospace;",t.textContent="⚠ WebGL context lost — attempting to restore...",document.body.appendChild(t)},!1);Re.domElement.addEventListener("webglcontextrestored",()=>{var o;(o=document.getElementById("glLostOverlay"))==null||o.remove()},!1);window.addEventListener("resize",()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),Re.setSize(window.innerWidth,window.innerHeight)});const jt=new k_;jt.background=null;jt.fog=new nl(8900331,60,96);const Ce=new Tn(75,window.innerWidth/window.innerHeight,.1,500);let Pr=!1,ud=50;const nc={268:59,272:131,267:250,276:1561,122:250,270:59,274:131,257:250,278:1561,269:59,273:131,256:250,277:1561,271:59,275:131,258:250,279:1561,72:50},Ls={},oy=240;let We=.25;const ai={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},ci={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},ry=new Nn(4,12,12),ay=new _i({color:16777215}),es=new Qt(ry,ay);jt.add(es);const cy=new Nn(2.5,12,12),ly=new _i({color:14540287}),zs=new Qt(cy,ly);jt.add(zs);const So=new Vc;jt.add(So.mesh);const gu=[],_u=new Pe({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let o=0;o<24;o++){const t=new me,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,s=3+Math.random()*6,a=.8+Math.random()*.8,r=new Le(i,a,s),c=new Qt(r,_u);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),jt.add(t),gu.push(t)}const vu=new j_(16777215,.5);jt.add(vu);const jn=new au(16774368,1.4);jn.castShadow=!0;jn.shadow.mapSize.set(512,512);jn.shadow.camera.near=.5;jn.shadow.camera.far=300;jn.shadow.camera.left=jn.shadow.camera.bottom=-110;jn.shadow.camera.right=jn.shadow.camera.top=110;jt.add(jn);const Wc=new au(3359846,.3);jt.add(Wc);const xu=new X_(8900331,4881482,.3);jt.add(xu);const po=new yt,Ti=new yt;let xr=0;function hy(o){We=(We+o/oy)%1;const t=(We-.25)*Math.PI*2,e=t+Math.PI,n=150;if(es.position.set(0,Math.sin(t)*n,Math.cos(t)*n),zs.position.set(0,Math.sin(e)*n,Math.cos(e)*n),jn.position.copy(es.position).normalize().multiplyScalar(100),Wc.position.copy(zs.position).normalize().multiplyScalar(100),xr%4===0)for(const c of gu)c.position.x=(c.position.x+.06+125)%250-125;if(xr++,xr<3)return;xr=0;let i,s;const a=We;if(a<.2){const c=a/.2;po.copy(ai.night).lerp(ai.dawn,c),Ti.copy(ci.night).lerp(ci.dawn,c),i=.05+c*.8,s=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;po.copy(ai.dawn).lerp(ai.day,c),Ti.copy(ci.dawn).lerp(ci.day,c),i=.85+c*.55,s=.5+c*.1}else if(a<.7)po.copy(ai.day),Ti.copy(ci.day),i=1.4,s=.6;else if(a<.8){const c=(a-.7)/.1;po.copy(ai.day).lerp(ai.dusk,c),Ti.copy(ci.day).lerp(ci.dusk,c),i=1.4-c*1.35,s=.6-c*.55}else{const c=(a-.8)/.2;po.copy(ai.dusk).lerp(ai.night,c),Ti.copy(ci.dusk).lerp(ci.night,c),i=.05,s=.05}Re.setClearColor(Ti),jt.fog.color.copy(Ti),So.update(We,es.position),So.followCamera(Ce.position),jn.intensity=i,vu.intensity=Math.max(s,.04)+(Ue.nightVision>0?.5:0),Wc.intensity=Math.max(.35-i*.2,0),xu.intensity=s*.5;const r=Math.sin(t)>0;es.visible=r,zs.visible=!r,_u.opacity=s>.2?.78:0}let Et=null,T=null;jt.add(Ce);const N=new Hx;let mo=null;const Ne=new Wx(jt),Dt=new Xx,Vr=new Yx(jt),Xc=new Qx(jt);let Yc=null;const Ri=new Zx(jt,Dt);let ae=null,Gt=null,en=!0,Pi="",Wn=null,wn=0,Be=0,Un=1;N.updateDayCounter(Un);const In=new ey;let qi=!1;const Wt=new Array(36).fill(0),Jt=new Array(36).fill(0);function Qn(o,t=1){for(let e=0;e<Wt.length;e++)if(Wt[e]===o&&Jt[e]<64){const n=64-Jt[e],i=Math.min(t,n);if(Jt[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=Wt.findIndex((n,i)=>n===0&&Jt[i]===0);if(e<0)return t;Wt[e]=o,Jt[e]=Math.min(t,64),t-=Jt[e]}return 0}function Jn(o,t=1){if(Wt.reduce((n,i,s)=>n+(i===o?Jt[s]:0),0)<t)return!1;for(let n=0;n<Wt.length&&t>0;n++)if(Wt[n]===o){const i=Math.min(t,Jt[n]);Jt[n]-=i,t-=i,Jt[n]===0&&(Wt[n]=0)}return!0}function hi(o){return Wt.reduce((t,e,n)=>t+(e===o?Jt[n]:0),0)}const Qi=[],Is=[],yu=new Le(.05,.05,.4),Mu=new _i({color:16768324}),dy=new Nn(.15,8,8),uy=new _i({color:26316});let De=null;const Ci=new ea;Ci.far=5;const fd=new ie(0,0),fy=new ea;fy.far=1;let we=20,dn=20,Je=0,ic=0,yr=new k,sc=0,oc=0;const xn={sharpness:0,protection:0,speed:0},Ue={strength:0,speed:0,nightVision:0,jumpBoost:0,resistance:0};let Mo=0;const pd=5;let Wr=0,Xr=0;const un=new ny;un.load();let rc=0;const py=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let Mr=0,Lr=!1;const qc=60,md=new Float32Array(qc);let ac=0,go=0,Xn="You died",Ln=new k,lc=0,hc=0,dc=0,uc=0;const my={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let fc=0,gd=.35,_d=!1;const pc=new k;let vd=!1;function gy(o,t){var i,s,a,r,c,l,h,u,m;const e=o.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const g=(i=e[1])==null?void 0:i.toLowerCase();return g==="creative"||g==="survival"||g==="spectator"?(T.setGameMode(g),N.setGameMode(g),g==="survival"&&(we=20,N.updateHunger(we,dn)),N.addChatMessage("",`Gamemode set to ${g}`,!0),ae==null||ae.sendGameMode(g),!0):(N.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return T.setGameMode("spectator"),N.setGameMode("spectator"),N.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return T.takeDamage(T.maxHealth),!0;if(n==="/heal")return T.health=T.maxHealth,N.updateHearts(T.maxHealth,T.maxHealth),N.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return we=dn,N.updateHunger(we,dn),N.addChatMessage("","Fed to full!",!0),!0;if(n==="/god")return T.gameMode=T.gameMode==="creative"?"survival":"creative",N.addChatMessage("",T.gameMode==="creative"?"God mode ON (creative)":"God mode OFF (survival)",!0),!0;if(n==="/spawn")return T.position.x=0,T.position.z=0,T.position.y=Et.getSurfaceHeight?Et.getSurfaceHeight(0,0)+2:30,N.addChatMessage("","Teleported to spawn.",!0),!0;if(n==="/enchant"){const g=(s=e[1])==null?void 0:s.toLowerCase();return g==="sharpness"?(xn.sharpness=1,N.addChatMessage("","✨ Sharpness I applied!",!0)):g==="protection"?(xn.protection=1,N.addChatMessage("","✨ Protection I applied!",!0)):g==="speed"?(xn.speed=1,T.speedBonus=Math.max(T.speedBonus,.2),N.addChatMessage("","✨ Speed I applied!",!0)):N.addChatMessage("","Usage: /enchant sharpness|protection|speed",!0),!0}if(n==="/list"){if(en)return N.addChatMessage("","Singleplayer — no other players online.",!0),!0;const g=(ae==null?void 0:ae.getOnlinePlayerNames())??[],v=g.length+1;return N.addChatMessage("",`Online (${v}): ${Pi}${g.length?", "+g.join(", "):""}`,!0),!0}if(n==="/scoreboard")return N.showScoreboard(un.getAll(),Un),document.exitPointerLock(),N.addChatMessage("","Press O or close button to dismiss.",!0),!0;if(n==="/worldborder"){const g=parseInt(e[1]??"");return isNaN(g)||g<10?(N.addChatMessage("","Usage: /worldborder <radius> (min 10)",!0),!0):(vo=g,N.addChatMessage("",`World border set to ±${g} blocks`,!0),!0)}if(n==="/gamerule"){const g=(a=e[1])==null?void 0:a.toLowerCase(),v=(r=e[2])==null?void 0:r.toLowerCase();if(g==="domobspawning")window.__mobSpawningEnabled=v!=="false",N.addChatMessage("",`doMobSpawning = ${v!=="false"}`,!0);else if(g==="pvp")window.__pvpEnabled=v!=="false",N.addChatMessage("",`pvp = ${v!=="false"}`,!0);else if(g==="difficulty"){const E=v??"normal";window.__difficulty=E,N.addChatMessage("",`difficulty = ${E}`,!0)}else g==="keepinventory"?(window.__keepInventory=v!=="false",N.addChatMessage("",`keepInventory = ${v!=="false"}`,!0)):N.addChatMessage("","Usage: /gamerule domobspawning|pvp|difficulty|keepinventory <true|false|value>",!0);return!0}if(n==="/clear"){for(let g=0;g<36;g++)Wt[g]=0,Jt[g]=0;return N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("","Inventory cleared.",!0),!0}if(n==="/effect"){const g=(c=e[1])==null?void 0:c.toLowerCase();return g==="strength"?(Ue.strength=30,N.addChatMessage("","Applied Strength I (30s)",!0)):g==="speed"?(Ue.speed=30,T.speedBonus=Math.max(T.speedBonus,.3),N.addChatMessage("","Applied Speed I (30s)",!0)):g==="nightvision"||g==="night_vision"?(Ue.nightVision=60,N.addChatMessage("","Applied Night Vision (60s)",!0)):g==="jump"||g==="jump_boost"?(Ue.jumpBoost=30,T.jumpBonus=4,N.addChatMessage("","Applied Jump Boost I (30s)",!0)):g==="resistance"?(Ue.resistance=30,N.addChatMessage("","Applied Resistance I (30s)",!0)):N.addChatMessage("","Usage: /effect strength|speed|nightvision|jump|resistance",!0),!0}if(n==="/give"){const g=parseInt(e[1]??""),v=parseInt(e[2]??"1")||1;return isNaN(g)||g<=0?(N.addChatMessage("","Usage: /give <typeId> [count]",!0),!0):(Qn(g,v),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`Gave ${v}x item ${g}`,!0),!0)}if(n==="/time"){const g=(l=e[1])==null?void 0:l.toLowerCase();return g==="day"?(We=.3,N.addChatMessage("","Set time to day",!0),!0):g==="night"?(We=0,N.addChatMessage("","Set time to night",!0),!0):g==="sunrise"?(We=.22,N.addChatMessage("","Set time to sunrise",!0),!0):g==="sunset"?(We=.75,N.addChatMessage("","Set time to sunset",!0),!0):(N.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const g=parseFloat(e[1]??"0"),v=parseFloat(e[2]??"0");return!isNaN(g)&&!isNaN(v)?(T.spawnAt(g,v),N.addChatMessage("",`Teleported to ${g.toFixed(1)}, ${v.toFixed(1)}`,!0)):N.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return N.showCraftingUI(),!0;if(n==="/weather"){const g=(h=e[1])==null?void 0:h.toLowerCase();return g==="clear"||g==="rain"||g==="thunder"?(Ri.setWeather(g),N.addChatMessage("",`Weather set to ${g}`,!0),!0):(N.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const g=(u=e[1])==null?void 0:u.toLowerCase();return g==="enter"?(ts=!0,T.spawnAt(T.position.x,T.position.z),T.position.y=30,jt.fog.color.copy(new yt(16729088)),Re.setClearColor(2228224),So.mesh.visible=!1,N.addChatMessage("","Entered the Nether!",!0),!0):g==="exit"?(ts=!1,T.spawnAt(T.position.x,T.position.z),jt.fog.color.copy(new yt(8900331)),So.mesh.visible=!0,N.addChatMessage("","Exited the Nether!",!0),!0):(N.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return Wn=Gt==null?void 0:Gt.spawnAt("enderdragon",T.position.x,T.position.y+15,T.position.z-20),N.addChatMessage("","☠ The Ender Dragon awakens!",!0),N.showBossBar("Ender Dragon",(Wn==null?void 0:Wn.maxHealth)??200,200),!0;if(n==="/achievements")return In.getAll().forEach(g=>{N.addChatMessage("",`${g.unlocked?"✅":"⬜"} ${g.icon} ${g.name}: ${g.description}`,!0)}),!0;if(n==="/save")return en?(Et.saveToStorage({inventory:[...Wt],invCount:[...Jt],px:T.position.x,py:T.position.y,pz:T.position.z,health:T.health,hunger:we,xp:wn,xpLevel:Be,dayCount:Un}),N.addChatMessage("","World saved!",!0)):N.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if(en){const g=Et.loadFromStorage();if(g){for(let v=0;v<36;v++)Wt[v]=g.inventory[v]??0,Jt[v]=g.invCount[v]??0;T.position.set(g.px,g.py,g.pz),T.health=g.health,we=g.hunger,wn=g.xp,Be=g.xpLevel,Un=g.dayCount,N.updateHearts(T.health,T.maxHealth),N.updateHunger(we,dn),N.updateXP(wn,Be),N.updateDayCounter(Un),N.updateHotbarFromInventory(Wt,Jt)}N.addChatMessage("","World loaded!",!0)}else N.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const g=(m=e[1])==null?void 0:m.toLowerCase();if(g==="wolf"||g==="cat"){const v=(Gt==null?void 0:Gt.getMobsByType(g))??[];for(const{id:E,mob:f}of v)if(T.position.distanceTo(f.group.position)<=5)return f.data.state="tamed",N.addChatMessage("",`Tamed a ${g}!`,!0),Dt.play("eat"),!0;N.addChatMessage("",`No ${g} found nearby`,!0)}else N.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const g=un.getAll();return N.addChatMessage("","--- Statistics ---",!0),N.addChatMessage("",`Kills: ${g.kills}`,!0),N.addChatMessage("",`Deaths: ${g.deaths}`,!0),N.addChatMessage("",`Blocks Placed: ${g.blocksPlaced}`,!0),N.addChatMessage("",`Blocks Broken: ${g.blocksBroken}`,!0),N.addChatMessage("",`Mobs Killed: ${g.mobsKilled}`,!0),N.addChatMessage("",`Distance Traveled: ${g.distanceTraveled.toFixed(1)}m`,!0),N.addChatMessage("",`Play Time: ${Math.floor(g.playTime/60)}m ${Math.floor(g.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/give <typeId> [count]","/god - toggle creative/survival","/spawn - teleport to world spawn","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(g=>N.addChatMessage("",g,!0)),!0):(N.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const _y=document.getElementById("loginScreen"),Yr=document.getElementById("nameInput"),vy=document.getElementById("playBtn");{const o=document.getElementById("buildStamp");o&&(o.textContent="build: 2026-04-02 18:42 UTC")}const jc=document.getElementById("hud"),xy=document.getElementById("underwaterOverlay");let Si=!1,_o=15,mc=0;const xd=55;let qr=96,vo=500,gc=0,_c=0;const yy=2,My=20,yd=new yt(670820),Md=document.getElementById("portalOverlay");let Vn=0,ts=!1;const Ey=new yt(3344392),Eu=6;function by(o,t,e){let n=-1;const i=Eu;for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)for(let r=-i;r<=i;r++){const c=Math.floor(o)+s,l=Math.floor(t)+a,h=Math.floor(e)+r;if(Et.getBlockType(c,l,h)===73){const u=Math.sqrt(s*s+a*a+r*r);(n<0||u<n)&&(n=u)}}return n}const bu=document.getElementById("damageFlash"),Sy=document.getElementById("speedLines"),Ed=document.getElementById("compassLabel"),wi=document.getElementById("minimap"),bd=document.getElementById("lowHealthVignette");let Ir=0,Sd=40;function wy(){bu.style.opacity="1",Ir=.15}function Ay(o,t,e){if(Ir>0&&(Ir-=o,Ir<=0&&(bu.style.opacity="0")),t<Sd&&wy(),Sd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;bd.style.opacity=String(i)}else bd.style.opacity="0"}const Ty=document.getElementById("crosshair"),vc=document.getElementById("breakProgress");let wd=!1;function Cy(o){const t=o>0;if(t!==wd&&(Ty.classList.toggle("breaking",t),wd=t),t){const e=Math.floor(o*360);vc.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,vc.style.opacity="1"}else vc.style.opacity="0"}async function rl(o){var m,g,v,E;Pi=o.trim()||`Player${Math.floor(Math.random()*999)}`,en=(((m=window.__getSelectedMode)==null?void 0:m.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),s=document.getElementById("playBtn");if(s.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await J_(),n.style.width="40%",i.textContent="Generating world...",!Et){const f=((v=(g=document.getElementById("seedInput"))==null?void 0:g.value)==null?void 0:v.trim())||String(Date.now());let d=0;for(let x=0;x<f.length;x++)d=d*31+f.charCodeAt(x)>>>0;window.__worldSeed=d%1e5/1e5,Et=new Fc(jt),T=new zc(Ce,Et,jt),jt.add(Ce),ed()&&(mo=new Bv(T.getKeys(),()=>T.breakBlockNow(),()=>T.placeBlockNow()),mo.onLookDelta=(x,_)=>{T.yaw-=x*.004,T.pitch-=_*.004,T.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,T.pitch))},mo.hide())}if(n.style.width="70%",await new Promise(f=>setTimeout(f,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(f=>setTimeout(f,150)),n.style.width="100%",_y.style.display="none",jc.style.display="block",mo&&mo.show(),en){const f=Et.loadFromStorage();if(Et.initializeTorchLights(),f){for(let d=0;d<36;d++)Wt[d]=f.inventory[d]??0,Jt[d]=f.invCount[d]??0;T.health=f.health,we=f.hunger,wn=f.xp,Be=f.xpLevel,Un=f.dayCount,setTimeout(()=>{T.position.set(f.px,f.py,f.pz),N.updateHearts(T.health,T.maxHealth),N.updateHunger(we,dn),N.updateXP(wn,Be),N.updateDayCounter(Un),N.updateHotbarFromInventory(Wt,Jt)},100)}}{let f=0,d=0,x=9999;for(let _=-5;_<=5&&x===9999;_++)for(let b=-5;b<=5&&x===9999;b++){const w=_*16,A=b*16,P=Et.getSurfaceHeight(w,A);P>=63&&P<=80&&(x=P,f=w,d=A)}if(x===9999)for(let _=-5;_<=5;_++)for(let b=-5;b<=5;b++){const w=_*16,A=b*16,P=Et.getSurfaceHeight(w,A);P>62&&P<x&&(x=P,f=w,d=A)}T.spawnAt(f,d)}ed()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>Dt.startAmbientMusic("day"),3e3),T.onHealthChanged=f=>N.updateHearts(f,T.maxHealth),T.setDeathCause=f=>{Xn=f},T.onDied=()=>{un.increment("deaths"),Ln.copy(T.position);const f=document.getElementById("screenFade");f.style.background="rgba(80,0,0,0.7)",f.style.transition="opacity 0.8s ease",f.style.opacity="1",setTimeout(()=>{N.showDeath(Xn,Ln.x,Ln.y,Ln.z,Be),f.style.opacity="0"},600),N.addChatMessage("","☠ You died!",!0),Dt.play("hurt")},T.onOpenChat=()=>{N.openChatInput(),T.setChatOpen(!0)},In.onUnlock=f=>{N.showAchievement(f.name,f.description,f.icon),Dt.play("eat")};{const f=[],d=new Nn(.15,6,6),x=new Pe({color:15658751}),_=new Pe({color:15786176});document.addEventListener("mousedown",b=>{if(!document.pointerLockElement||N.isChatOpen()||b.button!==2)return;const w=T.selectedBlockType;if(w!==89&&w!==90||!Jn(w,1))return;const A=w===89?x:_,P=new Qt(d,A);P.position.copy(T.position).add(new k(0,.6,0));const U=new k(0,0,-1).applyAxisAngle(new k(1,0,0),T.camera.rotation.x).applyAxisAngle(new k(0,1,0),T.camera.rotation.y);jt.add(P),f.push({mesh:P,vel:U.multiplyScalar(25),life:5,isMob:!1}),N.updateHotbarFromInventory(Wt,Jt)}),window.__tickThrowables=b=>{for(let w=f.length-1;w>=0;w--){const A=f[w];if(A.life-=b,A.vel.y-=15*b,A.mesh.position.addScaledVector(A.vel,b),Gt)for(const C of Gt.iterMobs()){if(!C.mob.alive)continue;const H=A.mesh.position.x-C.mob.targetPos.x,Y=A.mesh.position.y-C.mob.targetPos.y,K=A.mesh.position.z-C.mob.targetPos.z;if(H*H+Y*Y+K*K<1){C.mob.health-=3,C.mob.showDamage(C.mob.health),C.mob.health<=0&&C.mob.die(),Dt.play("hit"),A.life=0;break}}const P=Math.round(A.mesh.position.x),U=Math.round(A.mesh.position.y),S=Math.round(A.mesh.position.z);Et.getBlock(P,U,S)&&(A.life=0),A.life<=0&&(jt.remove(A.mesh),f.splice(w,1))}}}{let f=!1;document.addEventListener("mousedown",d=>{!document.pointerLockElement||N.isChatOpen()||d.button!==2||T.selectedBlockType!==124||(f=!0,Ce.fov=10,Ce.updateProjectionMatrix(),N.addChatMessage("","🔭 Spyglass: zoomed in",!0))}),document.addEventListener("mouseup",d=>{d.button===2&&f&&(f=!1,Ce.fov=75,Ce.updateProjectionMatrix())})}document.addEventListener("mousedown",f=>{!document.pointerLockElement||N.isChatOpen()||f.button!==2||T.selectedBlockType!==127||(Ln.x!==0||Ln.z!==0?N.addChatMessage("",`💀 Last death: (${Math.round(Ln.x)}, ${Math.round(Ln.y)}, ${Math.round(Ln.z)})`,!0):N.addChatMessage("","💀 No death recorded yet.",!0))}),document.addEventListener("mousedown",f=>{!document.pointerLockElement||N.isChatOpen()||f.button!==2||T.selectedBlockType!==126||([261.63,329.63,392,523.25].forEach((d,x)=>{setTimeout(()=>Dt.playNote(d),x*120)}),N.addChatMessage("","📯 Horn call!",!0))});{let f=!1;document.addEventListener("mousedown",d=>{if(!(!document.pointerLockElement||N.isChatOpen())&&!(d.button!==2||T.selectedBlockType!==123)){if(!f){f=!0,N.addChatMessage("","⚔ Crossbow loaded!",!0),Dt.play("place");return}f=!1;for(let x=-1;x<=1;x++){const _=x*.06,b=new k(_,0,-1).applyAxisAngle(new k(1,0,0),T.camera.rotation.x).applyAxisAngle(new k(0,1,0),T.camera.rotation.y).normalize(),w=new Qt(new Hr(.03,.03,.5,4),new Pe({color:8939059}));w.position.copy(T.position).add(new k(0,.6,0)),jt.add(w),Qi.push({mesh:w,vel:b.multiplyScalar(28),life:8,stuck:!1})}Dt.play("place")}})}{const f=[],d=new Hr(.04,.1,1.2,5),x=new Pe({color:4491400});document.addEventListener("mousedown",_=>{if(!document.pointerLockElement||N.isChatOpen()||_.button!==2||T.selectedBlockType!==122)return;const b=new k(0,0,-1).applyAxisAngle(new k(1,0,0),T.camera.rotation.x).applyAxisAngle(new k(0,1,0),T.camera.rotation.y),w=new Qt(d,x);w.position.copy(T.position).add(new k(0,.6,0)),jt.add(w),f.push({mesh:w,vel:b.multiplyScalar(35),life:6,returning:!1})}),window.__tickTridents=_=>{for(let b=f.length-1;b>=0;b--){const w=f[b];if(w.life-=_,w.returning){const A=T.position.clone().add(new k(0,.6,0)).sub(w.mesh.position),P=A.length();P<1.5?(jt.remove(w.mesh),f.splice(b,1)):w.mesh.position.addScaledVector(A.normalize(),Math.min(30*_,P))}else{if(w.vel.y-=10*_,w.mesh.position.addScaledVector(w.vel,_),Gt)for(const S of Gt.iterMobs()){if(!S.mob.alive)continue;const C=w.mesh.position.x-S.mob.targetPos.x,H=w.mesh.position.y-S.mob.targetPos.y,Y=w.mesh.position.z-S.mob.targetPos.z;if(C*C+H*H+Y*Y<1.5){S.mob.health-=9,S.mob.showDamage(S.mob.health),S.mob.health<=0&&S.mob.die(),Dt.play("hit"),w.returning=!0;break}}const A=Math.round(w.mesh.position.x),P=Math.round(w.mesh.position.y),U=Math.round(w.mesh.position.z);Et.getBlock(A,P,U)&&(w.returning=!0),w.life<3&&(w.returning=!0)}w.life<=0&&(jt.remove(w.mesh),f.splice(b,1))}}}T.onRightClick=()=>{if(T.selectedBlockType===33){if(De){if(jt.remove(De.mesh),De.inWater){const f=["Salmon","Cod","Tropical Fish","Pufferfish"],d=f[Math.floor(Math.random()*f.length)];N.addChatMessage("",`You caught a ${d}!`,!0),we=Math.min(dn,we+2),N.updateHunger(we,dn),Dt.play("eat"),In.trigger("fish_catch")}De=null}else{const f=Er.set(0,0,-1).applyAxisAngle(Sr,T.camera.rotation.x).applyAxisAngle(wr,T.camera.rotation.y),d=new Qt(dy,uy);d.position.copy(T.position),d.position.y+=.6,jt.add(d),De={mesh:d,vel:f.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},T.onBreakBlock=(f,d,x)=>{const _=Et.getBlock(f,d,x);if(!_)return;const w={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[_.type];if(w){const A=Math.random();if(!w.chance||A<w.chance){const P=Array.isArray(w.count)?Math.floor(Math.random()*(w.count[1]-w.count[0]+1))+w.count[0]:w.count;Qn(w.item,P),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`+ ${P}x ${Qe(w.item)}`,!0)}}if(un.increment("blocksBroken"),In.trigger("first_block"),_.type===24){let A=0;const P=setInterval(()=>{if(A%2===0&&Ne.burst(f,d,x,24),A++,A>8){clearInterval(P),Ne.explosion(f,d,x,30);const U=5,S=U*U;for(let K=-U;K<=U;K++)for(let F=-U;F<=U;F++)for(let q=-U;q<=U;q++)if(K*K+F*F+q*q<=S){const Z=Math.round(f)+K,tt=Math.round(d)+F,it=Math.round(x)+q,st=Et.getBlock(Z,tt,it);st&&(Et.removeBlock(Z,tt,it),Ne.burst(Z,tt,it,st.type))}const C=T.position.x-f,H=T.position.y-d,Y=T.position.z-x;C*C+H*H+Y*Y<49&&T.gameMode==="survival"&&(T.takeDamage(6),N.updateHearts(T.health,T.maxHealth)),Dt.play("break")}},500);return}_.type===56&&Et.removeTorchLight(f,d,x),_.type===59&&Et.deactivateLamp(f,d,x),Ne.burst(f,d,x,_.type),Dt.play("break"),ae==null||ae.sendRemoveBlock(f,d,x)},T.onPlaceBlock=(f,d,x,_)=>{un.increment("blocksPlaced"),_===56&&Et.addTorchLight(f,d+.5,x),Ne.placeEffect(f,d,x,_),Dt.play("place"),ae==null||ae.sendAddBlock(f,d,x,_)},Xc.onCollect=f=>{wn+=f;const d=Be;for(;wn>=(Be+1)*10;)Be++;N.updateXP(wn,Be),Be>d&&(Dt.play("eat"),N.addChatMessage("",`Level Up! Level ${Be}`,!0),Be>=5&&In.trigger("level_five"))},N.onEnchant=f=>{Be>=3?(Be-=3,wn-=3*10,N.updateXP(wn,Be),f==="sharpness"?(xn.sharpness=1,N.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):f==="protection"?(xn.protection=1,N.addChatMessage("","Applied Protection I (+3 armor)!",!0)):f==="speed"&&(xn.speed=1,T.speedBonus=.2,N.addChatMessage("","Applied Speed I (+20% movement)!",!0)),Dt.play("eat")):N.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",f=>{if(!document.pointerLockElement)return;if(f.button===2){const w={69:"disc_green",70:"disc_red",71:"disc_blue"}[T.selectedBlockType];w&&(Dt.isMusicPlaying()?Dt.stopMusic():Dt.playMusic(w));return}if(f.button!==0)return;if(T.selectedBlockType===32){const b=Er.set(0,0,-1).applyAxisAngle(Sr,T.camera.rotation.x).applyAxisAngle(wr,T.camera.rotation.y),w=new Qt(yu,Mu);w.position.copy(T.position),w.position.y+=.6,jt.add(w),Qi.push({mesh:w,vel:b.multiplyScalar(30),life:10}),Dt.play("hit");return}Ci.setFromCamera(fd,Ce);const x=({268:0,272:2,267:4,276:7,122:9,270:0,274:1,257:3,278:6,271:1,275:3,258:5,279:8}[T.selectedBlockType]??0)+(Ue.strength>0?4:0),_=Gt==null?void 0:Gt.tryAttack(Ci,xn,x);if(_){if(Dt.play("hit"),In.trigger("first_mob"),nc[T.selectedBlockType]){const w=c;Ls[w]===void 0&&(Ls[w]=nc[T.selectedBlockType]),Ls[w]=Math.max(0,(Ls[w]??nc[T.selectedBlockType])-1),Ls[w]===0&&(N.addChatMessage("",`⚠ Your ${Qe(T.selectedBlockType)} broke!`,!0),Wt[w]=0,Jt[w]=0,Ls[w]=0,N.updateHotbarFromInventory(Wt,Jt))}const b=Gt==null?void 0:Gt.getMob(_.mobId);if(b&&!b.alive){Vr.spawnFromMob(b.type,b.targetPos.x,b.targetPos.y,b.targetPos.z);const w={pig:3,chicken:2,cow:5,sheep:3,warden:50,allay:5,frog:3,strider:4,axolotl:6,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},A=b.type.toLowerCase(),P=w[A]||1;Xc.spawn(b.targetPos.x,b.targetPos.y,b.targetPos.z,P),b.type==="zombie"&&In.trigger("kill_zombie"),b.type==="creeper"&&In.trigger("kill_creeper"),b.type==="enderdragon"&&In.trigger("kill_dragon"),un.recordMobKill(b.type),N.addKillFeedDeath(b.type)}en||ae==null||ae.sendAttackMob(_.mobId,_.damage)}}),document.addEventListener("mousedown",f=>{f.button===2&&T.selectedBlockType===72&&(f.preventDefault(),Pr=!0,Ce.fov=65,Ce.updateProjectionMatrix())}),document.addEventListener("mouseup",f=>{f.button===2&&(Pr=!1,Ce.fov=75,Ce.updateProjectionMatrix())}),document.addEventListener("contextmenu",f=>{document.pointerLockElement&&f.preventDefault()}),document.addEventListener("keydown",f=>{if(f.key==="e"||f.key==="E"){if(!document.pointerLockElement||N.isChatOpen())return;f.preventDefault();const d=Er.set(0,0,-1).applyAxisAngle(Sr,T.camera.rotation.x).applyAxisAngle(wr,T.camera.rotation.y).normalize(),x=Et.raycastBlock(T.position,d,5);if(x){const _=Et.getBlock(x.x,x.y,x.z);if(_&&_.type===40)if(Be>=5){N.showEnchantUI(Be);return}else{N.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(_&&_.type===118){const b=localStorage.getItem("mc_ender_chest")??"[]",w=JSON.parse(b).length===27?JSON.parse(b):new Array(27).fill(0),A=Wt.slice(0,9);N.showChestUI(w,A),N.onChestClose=()=>{localStorage.setItem("mc_ender_chest",JSON.stringify(w))},Dt.play("place");return}if(_&&_.type===125){N.showInventory(Wt),qi=!0,document.exitPointerLock(),N.addChatMessage("","🎒 Bundle contents:",!0);const b=Wt.filter(w=>w>0);b.length===0?N.addChatMessage("","(empty)",!0):b.forEach(w=>N.addChatMessage("",`  ${Qe(w)}`,!0));return}if(_&&_.type===120){`${x.x}${x.y}${x.z}`,window.__respawnAnchor={x:x.x,y:x.y+1,z:x.z},N.addChatMessage("",`⚓ Respawn anchor set at (${x.x}, ${x.y}, ${x.z})`,!0),Dt.play("place");return}if(_&&_.type===112){const b=Math.sqrt((T.position.x-x.x)**2+(T.position.z-x.z)**2),w=Math.round(Math.max(0,15-b));N.addChatMessage("",`📡 Sculk Sensor: vibration strength ${w}/15`,!0),Dt.playNote(220+w*20);return}if(_&&_.type===114){Ri.isRaining()?(Qn(7,1),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("","🪣 Collected rain water from cauldron!",!0)):N.addChatMessage("","🪣 Cauldron is empty. Place outside during rain to fill.",!0);return}if(_&&_.type===115){N.addChatMessage("","🧵 Loom: No banner crafting implemented yet (place wool + dye).",!0);return}if(_&&_.type===116){const b={270:{to:274,needs:11,name:"Stone Pickaxe"},268:{to:272,needs:11,name:"Stone Sword"},274:{to:257,needs:62,name:"Iron Pickaxe"},272:{to:267,needs:62,name:"Iron Sword"},257:{to:278,needs:65,name:"Diamond Pickaxe"},267:{to:276,needs:65,name:"Diamond Sword"},278:{to:278,needs:117,name:"Netherite Pickaxe"},276:{to:276,needs:117,name:"Netherite Sword"}},w=T.selectedBlockType,A=b[w];A&&hi(A.needs)>=2?(Jn(w,1),Jn(A.needs,2),Qn(A.to,1),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`⚒ Upgraded to ${A.name}!`,!0)):A?N.addChatMessage("",`Need 2x ${Qe(A.needs)} to upgrade.`,!0):N.addChatMessage("","Hold a wooden/stone tool to upgrade it.",!0);return}if(_&&_.type===110){Dt.playNote(523.25),N.addChatMessage("","🔲 Click!",!0);return}if(_&&_.type===111){const b=Math.round(Math.sin(We*Math.PI)*15);N.addChatMessage("",`☀ Daylight sensor: light level ${Math.max(0,b)}/15`,!0);return}if(_&&_.type===107){xn.sharpness=0,xn.protection=0,xn.speed=0,T.speedBonus=Ue.speed>0?.3:0,N.addChatMessage("","⚙ Grindstone removed all enchantments.",!0),Dt.play("break");return}if(_&&_.type===108){const b={3:{output:3,count:2,name:"2x Stone"},11:{output:81,count:4,name:"4x Stone Bricks"},81:{output:82,count:1,name:"1x Mossy Stone Bricks"},49:{output:3,count:1,name:"1x Stone"}},w=T.selectedBlockType,A=b[w];if(A&&Jn(w,1))Qn(A.output,A.count),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`🪨 Stonecutter: ${Qe(w)} → ${A.name}`,!0);else{const P=Object.keys(b).map(U=>Qe(parseInt(U))).join(", ");N.addChatMessage("",`Hold a stone type to cut. (${P})`,!0)}return}if(_&&_.type===100){const b=`${x.x},${x.y},${x.z}`,w=window.__noteBlockPitch=window.__noteBlockPitch??{};w[b]=((w[b]??0)+1)%25;const A=261.63*Math.pow(2,(w[b]-12)/12);Dt.playNote(A),N.addChatMessage("",`🎵 Note: ${w[b]+1}/25`,!0);return}if(_&&_.type===99){const b=[{ingredient:64,base:0,output:91,name:"Strength Potion"},{ingredient:12,base:0,output:92,name:"Speed Potion"},{ingredient:2,base:0,output:96,name:"Night Vision Potion"},{ingredient:20,base:0,output:97,name:"Jump Boost Potion"},{ingredient:3,base:0,output:98,name:"Resistance Potion"}],w=b.map((P,U)=>`${U+1}. ${P.name} (needs 1x ${Qe(P.ingredient)})`).join(`
`),A=window.prompt(`Brewing Stand
Choose recipe:
${w}

Enter number (or cancel):`,"");if(A){const P=parseInt(A)-1,U=b[P];U&&(hi(U.ingredient)<1?N.addChatMessage("",`Need 1x ${Qe(U.ingredient)} to brew!`,!0):(Jn(U.ingredient,1),Qn(U.output,1),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`🧪 Brewed: ${U.name}!`,!0),Dt.play("eat")))}return}if(_&&_.type===94){const b=T.selectedBlockType;if(b>0&&hi(b)>0){const w=Qe(b),A=window.prompt(`Rename item (${w}):`,w);A&&A.trim()&&N.addChatMessage("",`✏️ Renamed "${w}" → "${A.trim()}" (cosmetic)`,!0)}else N.addChatMessage("","Hold an item in hand to rename it at the anvil.",!0);return}if(_&&_.type===34){We>.7||We<.25?(N.addChatMessage("","Sleeping...",!0),We=.25,T.health=Math.min(T.maxHealth,T.health+3),we=Math.min(dn,we+4),N.updateHearts(T.health,T.maxHealth),N.updateHunger(we,dn),Dt.play("eat"),setTimeout(()=>{N.addChatMessage("","You woke up!",!0)},2e3)):N.addChatMessage("","You can only sleep at night!",!0);return}}if(Gt){Ci.far=3,Ci.setFromCamera(fd,Ce);const _=Gt.getAllMobsForDisplay(),b=[];for(const{id:P,mob:U}of _)U.type==="villager"&&U.group.traverse(S=>{S.isMesh&&b.push({mesh:S,mobId:P,type:U.type})});const w=b.map(P=>P.mesh),A=Ci.intersectObjects(w);if(A.length>0){const P=A[0];if(b.find(S=>S.mesh===P.object)){Ci.far=5;const S=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];N.showTradeUI(S),N.onTrade=C=>{const H=S[C];if(!H)return;const Y={0:45,1:14,2:5,3:39},K={0:5,1:3,2:10,3:1},F={0:0,1:36,2:33,3:46},q=Y[C],Z=K[C],tt=F[C];q&&Jn(q,Z)?(tt>0&&Qn(tt,1),N.addChatMessage("",`Trade: gave ${H.giveName}, received ${H.receiveName}!`,!0),Dt.play("place")):N.addChatMessage("",`Need ${H.giveName} to trade!`,!0)};return}}Ci.far=5}qi?(N.hideInventory(),qi=!1,document.body.requestPointerLock()):(N.showInventory(Wt),qi=!0,document.exitPointerLock())}}),document.addEventListener("keydown",f=>{f.key==="Tab"&&document.pointerLockElement&&!N.isChatOpen()&&(f.preventDefault(),qi?(N.hideInventory(),qi=!1,document.body.requestPointerLock()):(N.showInventory(Wt),qi=!0,document.exitPointerLock()))}),document.addEventListener("keydown",f=>{(f.key==="o"||f.key==="O")&&document.pointerLockElement&&!N.isChatOpen()&&(f.preventDefault(),N.isScoreboardOpen()?(N.hideScoreboard(),document.body.requestPointerLock()):(N.showScoreboard(un.getAll(),Un),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",f=>{(f.key==="F1"||f.key==="f1")&&(f.preventDefault(),a=!a,a?N.showHUD():N.hideHUD())}),document.addEventListener("keydown",f=>{if(f.key==="F2"||f.key==="f2"){f.preventDefault();try{const d=Re.domElement.toDataURL("image/png"),x=document.createElement("a");x.href=d,x.download="minecraft-"+Date.now()+".png",x.click(),N.addChatMessage("","Screenshot saved!",!0)}catch{N.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("mousedown",f=>{if(f.button!==1||!document.pointerLockElement||T.gameMode!=="creative")return;f.preventDefault();const d=T.getTargetBlockType();if(d&&d>0){let x=Wt.findIndex((_,b)=>_===d&&b<9);x<0&&(x=c,Wt[x]=d,Jt[x]=64,N.updateHotbarFromInventory(Wt,Jt)),l(x)}});{let f=!1,d=null;document.addEventListener("keydown",x=>{var _;if((x.key==="p"||x.key==="P")&&!N.isChatOpen()){if(f&&d){d.remove(),d=null,f=!1,document.pointerLockElement===null&&document.body.requestPointerLock();return}document.exitPointerLock(),f=!0,d=document.createElement("div"),d.style.cssText=`position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);
          background:#2a2a2a;border:2px solid #555;padding:20px;z-index:2000;border-radius:6px;
          color:#eee;font-family:monospace;min-width:260px;`,d.innerHTML=`<h3 style="margin:0 0 14px;color:#ffdd44;text-align:center">⚙ Settings</h3>
          <label>SFX Volume: <input type="range" id="sfxVol" min="0" max="100" value="${Math.round(Dt.sfxVolume*100)}" style="width:120px"></label><br><br>
          <label>Music Volume: <input type="range" id="musVol" min="0" max="100" value="${Math.round(Dt.musicVolume*100)}" style="width:120px"></label><br><br>
          <label>View Distance: <input type="range" id="fogDist" min="32" max="192" step="16" value="${qr}" style="width:120px"></label><br><br>
          <button id="closeSettings" style="width:100%;padding:8px;background:#555;color:#eee;border:none;border-radius:3px;cursor:pointer;">Close [P]</button>`,document.body.appendChild(d),document.getElementById("sfxVol").addEventListener("input",b=>{Dt.sfxVolume=parseInt(b.target.value)/100}),document.getElementById("musVol").addEventListener("input",b=>{Dt.musicVolume=parseInt(b.target.value)/100}),document.getElementById("fogDist").addEventListener("input",b=>{qr=parseInt(b.target.value)}),(_=document.getElementById("closeSettings"))==null||_.addEventListener("click",()=>{d==null||d.remove(),d=null,f=!1,document.body.requestPointerLock()})}})}document.addEventListener("keydown",f=>{if((f.key==="r"||f.key==="R")&&document.pointerLockElement&&!N.isChatOpen())if(Gt!=null&&Gt.mountedMobId)Gt.dismount(),T.speedBonus=xn.speed>0?.2:0,N.addChatMessage("","Dismounted.",!0);else{if(hi(93)<1){N.addChatMessage("","You need a saddle to ride a horse!",!0);return}(Gt==null?void 0:Gt.tryMount(T.position))&&(T.speedBonus=1,N.addChatMessage("","Mounted horse! R to dismount.",!0))}}),document.addEventListener("keydown",f=>{(f.key==="F3"||f.key==="f3")&&(f.preventDefault(),Lr=!Lr,Lr?N.showDebugScreen():N.hideDebugScreen())}),document.addEventListener("keydown",f=>{(f.key==="F4"||f.key==="f4")&&(f.preventDefault(),T.gameMode==="spectator"?(T.setGameMode("survival"),N.setGameMode("survival"),we=dn,N.updateHunger(we,dn),N.addChatMessage("","Returned to Survival mode",!0),ae==null||ae.sendGameMode("survival")):(T.setGameMode("spectator"),N.setGameMode("spectator"),N.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),ae==null||ae.sendGameMode("spectator")))}),N.onChestTransfer=(f,d,x,_)=>{if(f){const b=x[d];if(!b)return;const w=_.indexOf(0);if(w>=0){_[w]=b,x[d]=0;for(let A=0;A<_.length&&A<Xi.length;A++)Xi[A]=_[A];N.updateHotbarFromInventory(Xi),Dt.play("place")}else N.addChatMessage("","Hotbar is full!",!0)}else{const b=_[d];if(!b)return;const w=x.indexOf(0);if(w>=0){x[w]=b,_[d]=0;for(let A=0;A<_.length&&A<Xi.length;A++)Xi[A]=_[A];N.updateHotbarFromInventory(Xi),Dt.play("place")}else N.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",f=>{if((f.key==="e"||f.key==="E")&&jc.style.display!=="none"){let d=null;for(let P=-5;P<=5&&!d;P++)for(let U=-5;U<=5&&!d;U++)for(let S=-5;S<=5&&!d;S++){const C=Math.floor(T.position.x)+P,H=Math.floor(T.position.y)+U,Y=Math.floor(T.position.z)+S,K=Et.getBlock(C,H,Y);K&&(K.type===31||K.type===113||K.type===119)&&T.position.distanceTo(br.set(C+.5,H+.5,Y+.5))<=5&&(d=[C,H,Y])}if(d){const P=Et.getChestInventory(d[0],d[1],d[2]),U=Xi.slice(0,9);N.showChestUI(P,U),N.onChestClose=()=>{Et.setChestInventory(d[0],d[1],d[2],P)},Dt.play("place");return}let x=!1;for(let P=-5;P<=5&&!x;P++)for(let U=-5;U<=5&&!x;U++)for(let S=-5;S<=5&&!x;S++){const C=Math.floor(T.position.x)+P,H=Math.floor(T.position.y)+U,Y=Math.floor(T.position.z)+S,K=Et.getBlock(C,H,Y);K&&K.type===22&&T.position.distanceTo(br.set(C+.5,H+.5,Y+.5))<=5&&(x=!0)}if(x){N.showCraftingUI(),In.trigger("first_craft"),Dt.play("place");return}let _=null;for(let P=-5;P<=5;P++){for(let U=-5;U<=5;U++){for(let S=-5;S<=5;S++){const C=Math.floor(T.position.x)+P,H=Math.floor(T.position.y)+U,Y=Math.floor(T.position.z)+S,K=Et.getBlock(C,H,Y);if(K&&K.type===23&&T.position.distanceTo(br.set(C+.5,H+.5,Y+.5))<=5){_=[C,H,Y];break}}if(_)break}if(_)break}if(_){N.showSmeltingUI();return}const b=Er.set(0,0,-1).applyAxisAngle(Sr,T.camera.rotation.x).applyAxisAngle(wr,T.camera.rotation.y),w=new ea(T.position,b);w.far=2;let A=null;for(let P=-2;P<=2;P++){for(let U=-2;U<=2;U++){for(let S=-2;S<=2;S++){const C=Math.floor(T.position.x)+P,H=Math.floor(T.position.y)+U,Y=Math.floor(T.position.z)+S,K=Et.getBlock(C,H,Y);if(K&&K.type===58&&T.position.distanceTo(br.set(C+.5,H+.5,Y+.5))<=2){A=[C,H,Y];break}}if(A)break}if(A)break}A&&(Et.toggleLever(A[0],A[1],A[2]),Dt.play("place"))}}),N.onChat=f=>{f.startsWith("/")?gy(f):en?N.addChatMessage(Pi,f):ae==null||ae.sendChat(f),T.setChatOpen(!1)},N.onSmelt=(f,d)=>{const x=py.get(f);return x?new Set([64,5,10,280]).has(d)&&hi(d)>0?hi(f)<1?(N.addChatMessage("","No input item to smelt!",!0),null):(Jn(f,1),Jn(d,1),Qn(x,1),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`Smelted: ${Qe(x)}`,!0),Dt.play("eat"),x):(N.addChatMessage("","Need fuel (coal, wood) to smelt!",!0),null):null},N.getInvCount=f=>hi(f),N.onInventorySwap=(f,d)=>{const x=Wt[d];Wt[d]=Wt[f],Wt[f]=x;const _=Jt[d];Jt[d]=Jt[f],Jt[f]=_,N.updateHotbarFromInventory(Wt,Jt)};const r={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},diamond_sword:{ingredients:{65:2,280:1},output:{type:276,count:1}},diamond_pickaxe:{ingredients:{65:3,280:2},output:{type:278,count:1}},diamond_axe:{ingredients:{65:3,280:2},output:{type:279,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},saddle:{ingredients:{95:7},output:{type:93,count:1}},anvil:{ingredients:{62:4},output:{type:94,count:1}},brewing_stand:{ingredients:{62:1,3:3},output:{type:99,count:1}},note_block:{ingredients:{5:8,64:1},output:{type:100,count:1}},campfire:{ingredients:{5:3,64:3,280:3},output:{type:106,count:1}},grindstone:{ingredients:{280:2,11:2,5:1},output:{type:107,count:1}},stonecutter:{ingredients:{62:1,3:3},output:{type:108,count:1}},tripwire_hook:{ingredients:{62:1,280:1},output:{type:109,count:2}},button:{ingredients:{11:1},output:{type:110,count:1}},daylight_sensor:{ingredients:{9:3,64:3},output:{type:111,count:1}},sculk_sensor:{ingredients:{62:2,9:3},output:{type:112,count:1}},barrel:{ingredients:{5:6,280:2},output:{type:113,count:1}},cauldron:{ingredients:{62:7},output:{type:114,count:1}},loom:{ingredients:{5:2,280:2},output:{type:115,count:1}},smithing_table:{ingredients:{62:2,5:4},output:{type:116,count:1}},ender_chest:{ingredients:{18:8,65:1},output:{type:118,count:1}},shulker_box:{ingredients:{31:2,26:4},output:{type:119,count:1}},respawn_anchor:{ingredients:{19:6,65:3},output:{type:120,count:1}},crossbow:{ingredients:{280:3,62:1,280:2},output:{type:123,count:1}},spyglass:{ingredients:{62:1,9:2},output:{type:124,count:1}},bundle:{ingredients:{95:6},output:{type:125,count:1}},recovery_compass:{ingredients:{127:1,39:4},output:{type:39,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};N.onCraft=f=>{const d=r[f];if(!d)return!1;for(const[x,_]of Object.entries(d.ingredients))if(hi(Number(x))<_)return N.addChatMessage("","✗ Not enough materials",!0),!1;for(const[x,_]of Object.entries(d.ingredients))Jn(Number(x),_);return Qn(d.output.type,d.output.count),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`✓ Crafted ${d.output.count}x ${Qe(d.output.type)}`,!0),!0},N.onRespawn=()=>{const f=document.getElementById("screenFade");f.style.background="#000",f.style.transition="opacity 0.4s ease",f.style.opacity="1",setTimeout(()=>{if(window.__keepInventory!==!0){for(let x=0;x<36;x++)Wt[x]=0,Jt[x]=0;wn=0,Be=0,N.updateHotbarFromInventory(Wt,Jt),N.updateXP(0,0)}const d=window.__respawnAnchor;d&&T.position.set(d.x,d.y+1,d.z),T.respawn(),we=dn,N.updateHearts(T.maxHealth,T.maxHealth),N.updateHunger(we,dn),ae==null||ae.sendRespawn(),setTimeout(()=>{f.style.transition="opacity 0.6s ease",f.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},N.updateHearts(T.health,T.maxHealth),N.updateHunger(we,dn),N.setGameMode(T.gameMode);let c=0;const l=f=>{c=(f%8+8)%8,T.selectedBlockType=Wt[c]??0,N.selectSlot(c),N.updateHotbarFromInventory(Wt,Jt)};document.addEventListener("wheel",f=>{l(c+(f.deltaY>0?1:-1))}),document.addEventListener("keydown",f=>{const d=parseInt(f.key);d>=1&&d<=8&&l(d-1)});const h={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65,leather:95,potion_strength:91,potion_speed:92,crossbow:123,spyglass:124,bundle:125,goat_horn:126,echo_shard:127,potion_night_vision:96,potion_jump_boost:97,potion_resistance:98,saddle:93},u={91:{effect:"strength",duration:30,label:"Strength I (+4 dmg, 30s)"},92:{effect:"speed",duration:30,label:"Speed I (+30% move, 30s)"},96:{effect:"nightVision",duration:60,label:"Night Vision (60s)"},97:{effect:"jumpBoost",duration:30,label:"Jump Boost I (30s)"},98:{effect:"resistance",duration:30,label:"Resistance I (-50% dmg, 30s)"}};if(document.addEventListener("mousedown",f=>{if(!document.pointerLockElement||N.isChatOpen()||f.button!==2)return;const d=u[T.selectedBlockType];d&&Jn(T.selectedBlockType,1)&&(Ue[d.effect]=d.duration,d.effect==="speed"&&(T.speedBonus=Math.max(T.speedBonus,.3)),d.effect==="jumpBoost"&&(T.jumpBonus=4),N.addChatMessage("",`🧪 Drank ${d.label}!`,!0),Dt.play("eat"),N.updateHotbarFromInventory(Wt,Jt))}),Vr.onPickup=f=>{Dt.play("eat");const d=h[f];d&&d>0?(Qn(d,1),N.updateHotbarFromInventory(Wt,Jt),N.addChatMessage("",`+ 1x ${Qe(d)}`,!0)):N.addChatMessage("",`Picked up: ${f}`,!0),f==="iron_helmet"&&(T.armor=Math.min(20,T.armor+5)),f==="iron_chestplate"&&(T.armor=Math.min(20,T.armor+8)),f==="iron_leggings"&&(T.armor=Math.min(20,T.armor+7)),f==="iron_boots"&&(T.armor=Math.min(20,T.armor+4))},en){N.setConnectionStatus("connected"),N.updatePlayerCount(1),Gt=new Gr(jt,Et,{onPlayerDamage:f=>{if(Xn="You were killed by a mob",T.gameMode==="survival"){let d=f;const x=window.__difficulty;x==="easy"?d=Math.ceil(d*.5):x==="hard"?d=Math.ceil(d*1.5):x==="peaceful"&&(d=0),xn.protection>0&&(d=Math.max(0,d-3*xn.protection)),Ue.resistance>0&&(d=Math.ceil(d*.5)),Pr&&ud>0&&(d=Math.ceil(d*.2),ud--),T.takeDamage(d),Dt.play("hurt"),N.updateHearts(T.health,T.maxHealth),T.health<=0&&(un.increment("deaths"),N.showDeath(Xn,Ln.x,Ln.y,Ln.z,Be))}},getPlayerPos:()=>T.position,onExplosion:(f,d,x,_)=>{const b=_*_;for(let P=-_;P<=_;P++)for(let U=-_;U<=_;U++)for(let S=-_;S<=_;S++)if(P*P+U*U+S*S<=b){const C=Math.round(f)+P,H=Math.round(d)+U,Y=Math.round(x)+S,K=Et.getBlock(C,H,Y);K&&(Et.removeBlock(C,H,Y),Ne.burst(C,H,Y,K.type))}Dt.play("break");const w=Math.sqrt((T.position.x-f)**2+(T.position.y-d)**2+(T.position.z-x)**2);w<20&&(Wr=.4,Xr=Math.max(.02,.12*(1-w/20)));const A=Re.domElement.style.filter;Re.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Re.domElement.style.filter=A},100)},onWitherEffect:()=>{Mo=pd}},!0),Gt.onBurnParticle=(f,d,x)=>Ne.magic(f,d,x,1),Gt.onWardenBlind=()=>{Re.domElement.style.filter="brightness(0.1)",setTimeout(()=>{Re.domElement.style.filter=""},5e3),N.addChatMessage("","⚡ Warden's sonic boom! You're blinded!",!0)};for(let f=0;f<10;f++)Gt.spawnRandom(0,0);Yc=new $x(Et),N.addChatMessage("",`Welcome, ${Pi}! 🌍 Singleplayer`,!0),N.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0),setTimeout(()=>N.addChatMessage("","💡 WASD=move · Space=jump · E=inventory/interact",!0),3e3),setTimeout(()=>N.addChatMessage("","💡 Left-click=break block · Right-click=place/use",!0),6e3),setTimeout(()=>N.addChatMessage("","💡 Shift=sneak · R=mount horse · Ctrl=sprint",!0),9e3)}else{const f=window.location.protocol==="https:",d=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":f?window.location.hostname:"159.223.140.36:8471",x=((E=window.__getServerAddr)==null?void 0:E.call(window))??d;ae=new Nx(jt,Et,{onStatusChange:_=>N.setConnectionStatus(_),onChat:(_,b,w)=>N.addChatMessage(_,b,w),onPlayerCount:_=>N.updatePlayerCount(_),onPlayerDamage:_=>{T.takeDamage(_),Dt.play("hurt"),N.updateHearts(T.health,T.maxHealth)},onPlayerDied:_=>{N.addChatMessage("",`☠ ${_} was slain!`,!0),_===Pi&&(un.increment("deaths"),N.showDeath("Killed by another player",T.position.x,T.position.y,T.position.z,Be))}},x),Gt=new Gr(jt,Et,{onPlayerDamage:()=>{},getPlayerPos:()=>T.position,onExplosion:(_,b,w,A)=>{const P=A*A;for(let C=-A;C<=A;C++)for(let H=-A;H<=A;H++)for(let Y=-A;Y<=A;Y++)if(C*C+H*H+Y*Y<=P){const K=Math.round(_)+C,F=Math.round(b)+H,q=Math.round(w)+Y,Z=Et.getBlock(K,F,q);Z&&(Et.removeBlock(K,F,q),Ne.burst(K,F,q,Z.type))}Dt.play("break");const U=Math.sqrt((T.position.x-_)**2+(T.position.y-b)**2+(T.position.z-w)**2);U<20&&(Wr=.4,Xr=Math.max(.02,.12*(1-U/20)));const S=Re.domElement.style.filter;Re.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Re.domElement.style.filter=S},100)},onWitherEffect:()=>{Mo=pd}},!1),ae.setMobManager(Gt),ae.setLocalStateGetter(()=>T.getState()),await ae.join(Pi),N.addChatMessage("",`Welcome, ${Pi}! 🌐 Multiplayer`,!0),N.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}vy.addEventListener("click",()=>rl(Yr.value));Yr.addEventListener("keydown",o=>{o.key==="Enter"&&rl(Yr.value)});const xc=new URLSearchParams(window.location.search).get("name");xc&&(Yr.value=xc,setTimeout(()=>rl(xc),800));let Ad=performance.now(),yc=0;const Ry=60;new k;const Py=new yt(16777215),Er=new k,br=new k,Sr=new k(1,0,0),wr=new k(0,1,0),Su=20,Ly=Array.from({length:Su},()=>({x:0,z:0,alive:!0})),Mc=[],wu=8,Iy=Array.from({length:wu},()=>({x:0,z:0})),Ec=[];function Au(){var e,n,i,s,a,r;requestAnimationFrame(Au);const o=performance.now(),t=Math.min((o-Ad)/1e3,.05);if(Ad=o,t>0&&(md[ac]=1/t,ac=(ac+1)%qc,go<qc&&go++),jc.style.display!=="none"&&Et&&T){if(T.update(t),ae==null||ae.updatePlayers(t),en&&(yc+=t,yc>=Ry&&(yc=0,Et.saveToStorage({inventory:[...Wt],invCount:[...Jt],px:T.position.x,py:T.position.y,pz:T.position.z,health:T.health,hunger:we,xp:wn,xpLevel:Be,dayCount:Un}))),en&&Et.generateAroundPlayer(T.position.x,T.position.z),mu||hy(t),!Si&&!ts){if(dc+=t,dc>2){dc=0;const b=Et.getBiome(Math.round(T.position.x),Math.round(T.position.z));b!==uc&&(uc=b)}const x=jt.fog,_=my[uc];_&&x.color.lerp(_,.08)}if(Gt&&(Gt.dayTime=We,Gt.update(t),Gt.mountedMobId&&Gt.updateMount(T.position,T.getYaw(),!0,t)),Ne.update(t),hc+=t,hc>.5){hc=0;const x=(We-.25)*Math.PI*2,_=Math.sin(x);if(_>.2)for(let b=0;b<2;b++){const w=(Math.random()-.5)*16,A=Math.random()*6+1,P=(Math.random()-.5)*16;Ne.dustMote(T.position.x+w,T.position.y+A,T.position.z+P)}else if(_<-.1)for(let b=0;b<3;b++){const w=(Math.random()-.5)*20,A=(Math.random()-.5)*20;Ne.firefly(T.position.x+w,T.position.y-1+Math.random()*3,T.position.z+A)}}Tv(o/1e3),Et.updateTorchFlicker(o/1e3);for(const[x]of Et.torchLights){const[_,b,w]=x.split(",").map(Number),A=_-T.position.x,P=w-T.position.z;A*A+P*P>576||(Math.random()<.06&&Ne.spawn(_+(Math.random()-.5)*.1,b+.7,w+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Ne.spawn(_+(Math.random()-.5)*.08,b+.55,w+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(Ri.update(t,T.position,jt.fog.color),Vr.update(t,T.position),Xc.update(t,T.position),Mo>0&&(Mo-=t),un.increment("playTime",t),T.velocity&&un.increment("distanceTraveled",T.velocity.length()*t),rc+=t,rc>=60&&(rc=0,un.save()),sc+=t,sc>.1&&(sc=0,Et.checkPressurePlate(T.position)),oc+=t,oc>30&&(oc=0,T.position.y<10&&(Dt.playAmbient("cave"),Dt.setAmbientMood("cave"))),De){De.vel.y-=20*t,De.mesh.position.addScaledVector(De.vel,t);const x=Math.round(De.mesh.position.x),_=Math.round(De.mesh.position.y),b=Math.round(De.mesh.position.z);Et.getBlockType(x,_,b)===7&&!De.inWater&&(De.inWater=!0,De.vel.set(0,0,0),De.mesh.position.y=_+.5),De.inWater&&(De.waitTimer-=t,De.mesh.position.y=_+.5+Math.sin(o*.003)*.1,De.waitTimer<=0&&(De.mesh.material.color.set(16776960),setTimeout(()=>{De!=null&&De.mesh.material&&De.mesh.material.color.set(26316)},300)))}(e=window.__tickThrowables)==null||e.call(window,t),(n=window.__tickTridents)==null||n.call(window,t);for(let x=Qi.length-1;x>=0;x--){const _=Qi[x];_.life-=t,_.vel.y-=20*t,_.mesh.position.addScaledVector(_.vel,t);const b=Math.sqrt(_.vel.x*_.vel.x+_.vel.y*_.vel.y+_.vel.z*_.vel.z);b>.1&&(_.mesh.rotation.x=-Math.asin(_.vel.y/b),_.mesh.rotation.y=Math.atan2(_.vel.x,_.vel.z)),Math.random()<.3&&Ne&&Ne.spawn(_.mesh.position.x,_.mesh.position.y,_.mesh.position.z,16777130,.3,0,-.2,0);const w=Math.round(_.mesh.position.x),A=Math.round(_.mesh.position.y),P=Math.round(_.mesh.position.z);if(Et.hasBlock(w,A,P)){const S=new Qt(yu,Mu);S.position.copy(_.mesh.position),S.rotation.copy(_.mesh.rotation),jt.add(S),Is.push({mesh:S,life:8}),jt.remove(_.mesh),Qi.splice(x,1);continue}let U=!1;if(Gt)for(const S of Gt.iterMobs()){const C=S.mob,H=_.mesh.position.x-C.targetPos.x,Y=_.mesh.position.y-C.targetPos.y,K=_.mesh.position.z-C.targetPos.z;if(H*H+Y*Y+K*K<.64&&C.alive){C.health-=5,C.showDamage(C.health),C.health<=0&&(C.die(),un.recordMobKill(S.data.type),Vr.spawnFromMob(S.data.type,C.targetPos.x,C.targetPos.y,C.targetPos.z)),jt.remove(_.mesh),Qi.splice(x,1),U=!0,Dt.play("hit");break}}_.life<=0&&!U&&(jt.remove(_.mesh),Qi.splice(x,1))}for(let x=Is.length-1;x>=0;x--)Is[x].life-=t,Is[x].life<=0&&(jt.remove(Is[x].mesh),Is.splice(x,1));if(Yc){if(Ec.length=0,ae&&ae.getPlayerData){const x=((i=ae.getPlayerData)==null?void 0:i.call(ae))??[];let _=0;for(const b of x)if(b.name!==Pi&&_<wu){const w=Iy[_++];w.x=b.x,w.z=b.z,Ec.push(w)}}if(Mc.length=0,Gt){let x=0;for(const _ of Gt.iterMobs())if(x<Su){const b=Ly[x++];b.x=_.mob.targetPos.x,b.z=_.mob.targetPos.z,b.alive=_.mob.alive,Mc.push(b)}}Yc.update(t,T.position,T.getYaw(),Ec,Mc)}if(wi){const x=T.selectedBlockType===60&&hi(60)>0;wi.style.transition="width 0.2s,height 0.2s,transform 0.2s",x?(wi.style.width="300px",wi.style.height="300px",wi.style.transform="none"):(wi.style.width="",wi.style.height="",wi.style.transform="")}if(Ed){const _=(T.getYaw()*180/Math.PI%360+360)%360,w=["S","SW","W","NW","N","NE","E","SE"][Math.round(_/45)%8],A=0-T.position.x,P=0-T.position.z,S=((Math.atan2(A,P)*180/Math.PI-_)%360+360)%360,H=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(S/45)%8];Ed.textContent=`${w} ${H}⌂`}if(Wn&&Wn.alive?N.updateBossBar(Wn.health,Wn.maxHealth):Wn&&!Wn.alive&&(N.hideBossBar(),Wn=null),Mo>0?N.updateHearts(T.health,T.maxHealth,!0):N.updateHearts(T.health,T.maxHealth,!1),T.gameMode==="survival"){const x=T.position.x-yr.x,_=T.position.y-yr.y,b=T.position.z-yr.z,w=x*x+_*_+b*b;yr.copy(T.position),w>.01&&(ic+=t,ic>1.5&&(ic=0,we=Math.max(0,we-.5),N.updateHunger(Math.ceil(we*2)/2,dn))),we>=16&&T.health<T.maxHealth&&(Je+=t,Je>4&&(Je=0,T.health=Math.min(T.maxHealth,T.health+1),N.updateHearts(T.health,T.maxHealth))),we<=0&&(Xn="You starved",Je+=t,Je>4&&(Je=0,T.health>1&&T.takeDamage(1),N.updateHearts(T.health,T.maxHealth)))}if(T.gameMode==="survival"){const x=Math.round(T.position.x),_=Math.round(T.position.y),b=Math.round(T.position.z);Et.getBlockType(x,_,b)===47&&(Xn="You burned in lava",Je+=t,Je>.5&&(Je=0,T.takeDamage(2),N.updateHearts(T.health,T.maxHealth)))}if(en&&Gt&&T.gameMode==="survival")for(const x of Gt.iterMobs()){if(x.data.type!=="allay"&&x.data.type!=="axolotl"||!x.mob.alive)continue;const _=x.data.x-T.position.x,b=x.data.z-T.position.z;_*_+b*b<16&&T.health<T.maxHealth&&(T.health=Math.min(T.maxHealth,T.health+.5*t),N.updateHearts(T.health,T.maxHealth))}if(en&&Math.random()<t*.5){const x=Math.round(T.position.x),_=Math.round(T.position.z);for(let b=-8;b<=8;b+=4)for(let w=-8;w<=8;w+=4){const A=x+b,P=_+w,U=Math.round(T.position.y);(Et.getBlockType(A,U,P)===112||Et.getBlockType(A,U-1,P)===112)&&Ne.magic(A,U+.5,P,1)}}if(en){const x=Math.round(T.position.x),_=Math.round(T.position.z),b=Math.floor(T.position.y-1.3);Et.getBlockType(x,b,_)===109&&(N.addChatMessage("","⚡ Tripwire triggered!",!0),Dt.play("hurt"),Et.removeBlock(x,b,_))}if(en&&T.gameMode==="survival"){const x=Math.round(T.position.x),_=Math.floor(T.position.y-1.62),b=Math.round(T.position.z);Et.getBlockType(x,_,b)===106&&(Je+=t,Je>1&&(Je=0,Xn="You burned on a campfire",T.takeDamage(1),N.updateHearts(T.health,T.maxHealth)),Math.random()<t*4&&Ne.magic(x,_+1,b,1))}if(Math.random()<t*.3){const x=Math.round(T.position.x)+Math.round((Math.random()-.5)*16),_=Math.round(T.position.z)+Math.round((Math.random()-.5)*16),b=Math.round(T.position.y);Et.getBlockType(x,b-1,_)===106&&Ne.magic(x,b,_,1)}if(en&&(_c+=t,_c>=.2)){_c=0;const x=new Set([4,12]),_=Math.round(T.position.x),b=Math.round(T.position.z);for(let w=-6;w<=6;w++)for(let A=-6;A<=6;A++)for(let P=1;P<=8;P++){const U=_+w,S=Math.round(T.position.y)+P-4,C=b+A,H=Et.getBlockType(U,S,C);H&&x.has(H)&&(Et.getBlockType(U,S-1,C)||(Et.removeBlock(U,S,C),Et.placeBlock(U,S-1,C,H,!0),Ne.burst(U,S,C,H)))}}if(en&&Gt&&(gc+=t,gc>=10)){gc=0;const x=Math.round(T.position.x),_=Math.round(T.position.z);for(let b=-16;b<=16;b+=4)for(let w=-16;w<=16;w+=4)for(let A=-8;A<=8;A+=4){const P=x+b,U=Math.round(T.position.y)+A,S=_+w;if(Et.getBlockType(P,U,S)===48&&b*b+w*w<256&&window.__mobSpawningEnabled!==!1){const H=["zombie","skeleton","spider"],Y=H[Math.floor(Math.random()*H.length)];Gt.spawnMob(Y,P+(Math.random()-.5)*2,U+1,S+(Math.random()-.5)*2)}}}if(T.gameMode==="survival"){const x=Math.abs(T.position.x),_=Math.abs(T.position.z);(x>vo||_>vo)&&(Je+=t,Je>.5&&(Je=0,Xn="You went beyond the world border",T.takeDamage(2),N.updateHearts(T.health,T.maxHealth),Math.max(x,_)-vo<10&&N.addChatMessage("",`⚠ World border nearby! (${Math.round(vo-Math.max(x,_))} blocks)`,!0)))}const c=Ue.strength,l=Ue.speed,h=Ue.nightVision,u=Ue.jumpBoost,m=Ue.resistance;for(const x of Object.keys(Ue))Ue[x]=Math.max(0,Ue[x]-t);if(l>0&&Ue.speed===0&&xn.speed===0&&(T.speedBonus=0),u>0&&Ue.jumpBoost===0&&(T.jumpBonus=0),c>0&&Ue.strength===0&&N.addChatMessage("","Strength wore off.",!0),l>0&&Ue.speed===0&&N.addChatMessage("","Speed wore off.",!0),h>0&&Ue.nightVision===0&&N.addChatMessage("","Night Vision wore off.",!0),u>0&&Ue.jumpBoost===0&&N.addChatMessage("","Jump Boost wore off.",!0),m>0&&Ue.resistance===0&&N.addChatMessage("","Resistance wore off.",!0),Mr<.22&&We>=.22&&(Un++,N.updateDayCounter(Un),N.addChatMessage("","Dawn breaks...",!0),Dt.playAmbient("birds"),Dt.setAmbientMood("day"),In.trigger("reach_night")),Mr<.73&&We>=.73&&(N.addChatMessage("","Night falls... watch out for monsters!",!0),Dt.playAmbient("wind"),Dt.setAmbientMood("night")),Mr<.95&&We>=.95&&Gt&&Math.random()<.5&&window.__mobSpawningEnabled!==!1){const x=3+Math.floor(Math.random()*3);for(let _=0;_<x;_++){const b=Math.random()*Math.PI*2,w=20+Math.random()*15,A=T.position.x+Math.cos(b)*w,P=T.position.z+Math.sin(b)*w,U=Et.getSurfaceHeight(Math.round(A),Math.round(P))+1.5,S=Math.random()<.5?"zombie":"skeleton";Gt.spawnMob(S,A,U,P)}}Mr=We,N.updatePosition(T.position.x,T.position.y,T.position.z),N.updateTime(We),Ay(t,T.health,T.maxHealth),Cy(T.getBreakProgress());const g=((s=T.keys)==null?void 0:s.ControlLeft)&&T.velocity.lengthSq()>4;if(Sy.style.opacity=g?"0.7":"0",!Pr){const x=g?80:75;Math.abs(Ce.fov-x)>.1&&(Ce.fov+=(x-Ce.fov)*.12,Ce.updateProjectionMatrix())}es.position.x+=(T.position.x-es.position.x)*.02,zs.position.x+=(T.position.x-zs.position.x)*.02,Ri.isThunderFlashing()&&Re.setClearColor(Py);const v=Ri.consumeLightningStrike();if(v&&T.gameMode==="survival"){const x=T.position.x+v.x,_=T.position.z+v.z,b=x-T.position.x,w=_-T.position.z;b*b+w*w<25&&(Xn="Struck by lightning",T.takeDamage(5),N.updateHearts(T.health,T.maxHealth),N.addChatMessage("","⚡ You were struck by lightning!",!0),Dt.play("hurt")),Ne.burst(x,T.position.y,_,0)}const E=Et.getBlockType(Math.round(T.position.x),Math.round(T.position.y),Math.round(T.position.z))===7;E&&!vd&&(Ne.splash(T.position.x,T.position.y,T.position.z,12),Ne.bubbles(T.position.x,T.position.y-.5,T.position.z,8),Dt.play("splash")),vd=E;const f=Et.getBlockType(Math.round(Ce.position.x),Math.round(Ce.position.y),Math.round(Ce.position.z))===7;if(f!==Si&&(Si=f,xy.style.opacity=Si?"1":"0",Si&&In.trigger("deep_dive"),Si||(_o=15,N.updateAirSupply(15,15))),Si){T.gameMode==="survival"&&(_o=Math.max(0,_o-t),N.updateAirSupply(_o,15),_o<=0&&(Je+=t,Je>1&&(Je=0,Xn="You drowned",T.takeDamage(1),N.updateHearts(T.health,T.maxHealth),T.health<=0&&(un.increment("deaths"),N.showDeath(Xn,T.position.x,T.position.y,T.position.z,Be)))));const x=jt.fog;x.near=yy,x.far=My,x.color.copy(yd),Re.setClearColor(yd),mc+=t,mc>.3&&(mc=0,Ne.bubbles(T.position.x,T.position.y+.5,T.position.z,2))}else if(!ts){const x=jt.fog;x.near=xd,x.far=qr}const d=by(T.position.x,T.position.y,T.position.z);if(d>=0){const x=Math.max(0,1-d/Eu);Vn+=(x-Vn)*.08}else Vn+=(0-Vn)*.08;if(Vn>.01){Md.style.opacity=String(Vn);const x=Math.sin(performance.now()*.002)*Vn*40,_=Vn*1.5,b=1+Vn*1.2;if(Re.domElement.style.filter=`hue-rotate(${x}deg) blur(${_}px) saturate(${b})`,Vn>.6&&!Si){const w=jt.fog,A=(Vn-.6)/.4;w.color.lerpColors(w.color,Ey,A*.15),w.near=xd-A*20,w.far=qr-A*30,ts=!0}d>=0&&d<3&&Math.random()<.3&&Ne.magic(T.position.x+(Math.random()-.5)*3,T.position.y+(Math.random()-.5)*2,T.position.z+(Math.random()-.5)*3,1)}else Md.style.opacity="0",Re.domElement.style.filter="",ts&&(ts=!1);if(fc+=t,fc>gd&&T.onGround){const x=T.position.x-pc.x,_=T.position.z-pc.z;if(x*x+_*_>1.5){fc=0,pc.set(T.position.x,0,T.position.z);const w=Math.round(T.position.x),A=Math.round(T.position.y-1.9),P=Math.round(T.position.z),U=Et.getBlockType(w,A,P);let S="dirt";U===3||U===11||U===17||U===18?S="stone":U===4||U===12||U===49?S="sand":U===5||U===10||U===16?S="wood":(U===1||U===6)&&(S="grass"),gd=((a=T.keys)==null?void 0:a.ControlLeft)?.25:.35,Dt.playStepOnBlock(.7,S)}}if(T.onGround&&!_d&&T.velocity.y<-.5&&Dt.playLanding(Math.min(Math.abs(T.velocity.y)/10,1)),_d=T.onGround,lc+=t,lc>1&&(lc=0,Et.isNearBlock(Math.round(T.position.x),Math.round(T.position.y),Math.round(T.position.z),55,5)&&Ne.smoke(T.position.x,T.position.y+1,T.position.z,2)),Lr){let x=0;for(let Z=0;Z<go;Z++)x+=md[Z];const _=go>0?x/go:0,w=(T.getYaw()*180/Math.PI+360)%360;let A="Unknown";w<45||w>=315?A="South (0°)":w<135?A="West (90°)":w<225?A="North (180°)":A="East (270°)";const P={0:"Plains",1:"Desert",2:"Forest",3:"Mountains",4:"Ocean",5:"Taiga",6:"Swamp"},U=Et.getBiome(Math.round(T.position.x),Math.round(T.position.z)),S=P[U]??`Biome ${U}`,C=Math.round(T.position.y-1),H=Et.getBlockType(Math.round(T.position.x),C,Math.round(T.position.z)),Y=H!==void 0?Qe(H):"Air",K=Ri&&Ri.isRaining?"Rainy":"Clear",F=(Gt==null?void 0:Gt.getMobCount())??0,q=((r=Et.getBlockCount)==null?void 0:r.call(Et))??0;N.updateDebugScreen({fps:_,x:T.position.x,y:T.position.y,z:T.position.z,biome:S,blockBelow:Y,facing:A,dayTime:We,mobCount:F,blockCount:q,weather:K,gameMode:T.gameMode,version:"0.8"})}}if(Wr>0){Wr-=t;const c=(Math.random()-.5)*2*Xr,l=(Math.random()-.5)*2*Xr;Ce.position.x+=c,Ce.position.y+=l}Et&&Et.flushDirtyMeshes(),Re.render(jt,Ce),Ri.isThunderFlashing()&&Re.setClearColor(Ti)}Au();window.addEventListener("beforeunload",()=>{en&&Et.saveToStorage({inventory:[...Wt],invCount:[...Jt],px:T.position.x,py:T.position.y,pz:T.position.z,health:T.health,hunger:we,xp:wn,xpLevel:Be,dayCount:Un})});
