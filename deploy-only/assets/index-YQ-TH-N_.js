var Mu=Object.defineProperty;var Eu=(s,t,e)=>t in s?Mu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var P=(s,t,e)=>Eu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="160",bu=0,el=1,Su=2,yd=1,wu=2,si=3,li=0,rn=1,Zn=2,Ai=0,Us=1,nl=2,il=3,sl=4,Au=5,Xi=100,Tu=101,Cu=102,ol=103,rl=104,Ru=200,Pu=201,Lu=202,Iu=203,gc=204,vc=205,Du=206,Ou=207,Nu=208,Uu=209,Bu=210,ku=211,Fu=212,zu=213,Hu=214,Gu=0,Vu=1,Wu=2,Pr=3,Xu=4,Yu=5,qu=6,ju=7,Vc=0,Zu=1,$u=2,ci=0,Ku=1,Ju=2,Qu=3,tf=4,ef=5,nf=6,Md=300,Fs=301,zs=302,_c=303,xc=304,Wr=306,yc=1e3,bn=1001,Mc=1002,Be=1003,al=1004,ha=1005,Rn=1006,sf=1007,xo=1008,Ti=1009,of=1010,rf=1011,Wc=1012,Ed=1013,bi=1014,Si=1015,yo=1016,bd=1017,Sd=1018,$i=1020,af=1021,zn=1023,cf=1024,lf=1025,Ki=1026,Hs=1027,hf=1028,wd=1029,df=1030,Ad=1031,Td=1033,da=33776,ua=33777,fa=33778,pa=33779,cl=35840,ll=35841,hl=35842,dl=35843,Cd=36196,ul=37492,fl=37496,pl=37808,ml=37809,gl=37810,vl=37811,_l=37812,xl=37813,yl=37814,Ml=37815,El=37816,bl=37817,Sl=37818,wl=37819,Al=37820,Tl=37821,ma=36492,Cl=36494,Rl=36495,uf=36283,Pl=36284,Ll=36285,Il=36286,Rd=3e3,Ji=3001,ff=3200,pf=3201,Pd=0,mf=1,Pn="",Ke="srgb",hi="srgb-linear",Xc="display-p3",Xr="display-p3-linear",Lr="linear",Le="srgb",Ir="rec709",Dr="p3",is=7680,Dl=519,gf=512,vf=513,_f=514,Ld=515,xf=516,yf=517,Mf=518,Ef=519,Ec=35044,bf=35048,Ol="300 es",bc=1035,ai=2e3,Or=2001;class qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Sc=180/Math.PI;function Ci(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function un(s,t,e){return Math.max(t,Math.min(e,s))}function Sf(s,t){return(s%t+t)%t}function ga(s,t,e){return(1-e)*s+e*t}function Nl(s){return(s&s-1)===0&&s!==0}function wc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,i,o,a,r,c,l){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,l)}set(t,e,n,i,o,a,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],g=n[5],v=n[8],_=i[0],u=i[3],d=i[6],E=i[1],M=i[4],w=i[7],O=i[2],C=i[5],L=i[8];return o[0]=a*_+r*E+c*O,o[3]=a*u+r*M+c*C,o[6]=a*d+r*w+c*L,o[1]=l*_+h*E+f*O,o[4]=l*u+h*M+f*C,o[7]=l*d+h*w+f*L,o[2]=p*_+g*E+v*O,o[5]=p*u+g*M+v*C,o[8]=p*d+g*w+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*r*l-n*o*h+n*r*c+i*o*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=h*a-r*l,p=r*c-h*o,g=l*o-a*c,v=e*f+n*p+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=f*_,t[1]=(i*l-h*n)*_,t[2]=(r*n-i*a)*_,t[3]=p*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-r*e)*_,t[6]=g*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*a+l*r)+a+t,-i*l,i*c,-i*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new re;function Id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wf(){const s=Nr("canvas");return s.style.display="block",s}const Ul={};function go(s){s in Ul||(Ul[s]=!0,console.warn(s))}const Bl=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kl=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[hi]:{transfer:Lr,primaries:Ir,toReference:s=>s,fromReference:s=>s},[Ke]:{transfer:Le,primaries:Ir,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Xr]:{transfer:Lr,primaries:Dr,toReference:s=>s.applyMatrix3(kl),fromReference:s=>s.applyMatrix3(Bl)},[Xc]:{transfer:Le,primaries:Dr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(kl),fromReference:s=>s.applyMatrix3(Bl).convertLinearToSRGB()}},Af=new Set([hi,Xr]),Ee={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Af.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=To[t].toReference,i=To[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return To[s].primaries},getTransfer:function(s){return s===Pn?Lr:To[s].transfer}};function Bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class Dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Nr("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=Bs(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ci(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(xa(i[a].image)):o.push(xa(i[a]))}else o=xa(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;class an extends qs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=bn,i=bn,o=Rn,a=xo,r=zn,c=Ti,l=an.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ci(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?Ke:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yc:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yc:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?Ji:Rd}set encoding(t){go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ji?Ke:Pn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Md;an.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],g=c[5],v=c[9],_=c[2],u=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+u)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(g+1)/2,O=(d+1)/2,C=(h+p)/4,L=(f+_)/4,X=(v+u)/4;return M>w&&M>O?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=C/n,o=L/n):w>O?w<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),n=C/i,o=X/i):O<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(O),n=L/o,i=X/o),this.set(n,i,o,e),this}let E=Math.sqrt((u-v)*(u-v)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(u-v)/E,this.y=(f-_)/E,this.z=(p-h)/E,this.w=Math.acos((l+g+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?Ke:Pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Od(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nd extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pf extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const p=o[a+0],g=o[a+1],v=o[a+2],_=o[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=g,t[e+2]=v,t[e+3]=_;return}if(f!==_||c!==p||l!==g||h!==v){let u=1-r;const d=c*p+l*g+h*v+f*_,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const O=Math.sqrt(M),C=Math.atan2(O,d*E);u=Math.sin(u*C)/O,r=Math.sin(r*C)/O}const w=r*E;if(c=c*u+p*w,l=l*u+g*w,h=h*u+v*w,f=f*u+_*w,u===1-r){const O=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=O,l*=O,h*=O,f*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=o[a],p=o[a+1],g=o[a+2],v=o[a+3];return t[e]=r*v+h*f+c*g-l*p,t[e+1]=c*v+h*p+l*f-r*g,t[e+2]=l*v+h*g+r*p-c*f,t[e+3]=h*v-r*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),f=r(o/2),p=c(n/2),g=c(i/2),v=c(o/2);switch(a){case"XYZ":this._x=p*h*f+l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f+p*g*v;break;case"YZX":this._x=p*h*f+l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f-p*g*v;break;case"XZY":this._x=p*h*f-l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=n+r+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(o-l)*g,this._z=(a-i)*g}else if(n>r&&n>f){const g=2*Math.sqrt(1+n-r-f);this._w=(h-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(o+l)/g}else if(r>f){const g=2*Math.sqrt(1+r-n-f);this._w=(o-l)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-r);this._w=(a-i)/g,this._x=(o+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*r+i*l-o*c,this._y=i*h+a*c+o*r-n*l,this._z=o*h+a*l+n*c-i*r,this._w=a*h-n*r-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=i*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,l=2*(a*i-r*n),h=2*(r*e-o*i),f=2*(o*n-a*e);return this.x=e+c*l+a*f-r*h,this.y=n+c*h+r*l-o*f,this.z=i+c*f+o*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new B,Fl=new Eo;class es{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(o,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Ro.subVectors(this.max,$s),os.subVectors(t.a,$s),rs.subVectors(t.b,$s),as.subVectors(t.c,$s),fi.subVectors(rs,os),pi.subVectors(as,rs),Di.subVectors(os,as);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!Ma(e,os,rs,as,Ro)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,os,rs,as,Ro))?!1:(Po.crossVectors(fi,pi),e=[Po.x,Po.y,Po.z],Ma(e,os,rs,as,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,Co=new es,os=new B,rs=new B,as=new B,fi=new B,pi=new B,Di=new B,$s=new B,Ro=new B,Po=new B,Oi=new B;function Ma(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Oi.fromArray(s,o);const r=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Lf=new es,Ks=new B,Ea=new B;class ns{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ea)),this.expandByPoint(Ks.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new B,ba=new B,Lo=new B,mi=new B,Sa=new B,Io=new B,wa=new B;class Yr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ba.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(ba);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Lo),r=mi.dot(this.direction),c=-mi.dot(Lo),l=mi.lengthSq(),h=Math.abs(1-a*a);let f,p,g,v;if(h>0)if(f=a*c-r,p=a*r-c,v=o*h,f>=0)if(p>=-v)if(p<=v){const _=1/h;f*=_,p*=_,g=f*(f+a*p+2*r)+p*(a*f+p+2*c)+l}else p=o,f=Math.max(0,-(a*p+r)),g=-f*f+p*(p+2*c)+l;else p=-o,f=Math.max(0,-(a*p+r)),g=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-a*o+r)),p=f>0?-o:Math.min(Math.max(-o,-c),o),g=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-o,-c),o),g=p*(p+2*c)+l):(f=Math.max(0,-(a*o+r)),p=f>0?o:Math.min(Math.max(-o,-c),o),g=-f*f+p*(p+2*c)+l);else p=a>0?-o:o,f=Math.max(0,-(a*p+r)),g=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ba).addScaledVector(Lo,p),g}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(o=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,o){Sa.subVectors(e,t),Io.subVectors(n,t),wa.crossVectors(Sa,Io);let a=this.direction.dot(wa),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;mi.subVectors(this.origin,t);const c=r*this.direction.dot(Io.crossVectors(mi,Io));if(c<0)return null;const l=r*this.direction.dot(Sa.cross(mi));if(l<0||c+l>a)return null;const h=-r*mi.dot(wa);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,o,a,r,c,l,h,f,p,g,v,_,u){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,l,h,f,p,g,v,_,u)}set(t,e,n,i,o,a,r,c,l,h,f,p,g,v,_,u){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=o,d[5]=a,d[9]=r,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=v,d[11]=_,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),o=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const p=a*h,g=a*f,v=r*h,_=r*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+v*l,e[5]=p-_*l,e[9]=-r*c,e[2]=_-p*l,e[6]=v+g*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,g=c*f,v=l*h,_=l*f;e[0]=p+_*r,e[4]=v*r-g,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-r,e[2]=g*r-v,e[6]=_+p*r,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,g=c*f,v=l*h,_=l*f;e[0]=p-_*r,e[4]=-a*f,e[8]=v+g*r,e[1]=g+v*r,e[5]=a*h,e[9]=_-p*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,g=a*f,v=r*h,_=r*f;e[0]=c*h,e[4]=v*l-g,e[8]=p*l+_,e[1]=c*f,e[5]=_*l+p,e[9]=g*l-v,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,g=a*l,v=r*c,_=r*l;e[0]=c*h,e[4]=_-p*f,e[8]=v*f+g,e[1]=f,e[5]=a*h,e[9]=-r*h,e[2]=-l*h,e[6]=g*f+v,e[10]=p-_*f}else if(t.order==="XZY"){const p=a*c,g=a*l,v=r*c,_=r*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+_,e[5]=a*h,e[9]=g*f-v,e[2]=v*f-g,e[6]=r*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Df)}lookAt(t,e,n){const i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),Do.crossVectors(mn,gi),i[0]=gi.x,i[4]=Do.x,i[8]=mn.x,i[1]=gi.y,i[5]=Do.y,i[9]=mn.y,i[2]=gi.z,i[6]=Do.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],g=n[13],v=n[2],_=n[6],u=n[10],d=n[14],E=n[3],M=n[7],w=n[11],O=n[15],C=i[0],L=i[4],X=i[8],b=i[12],R=i[1],W=i[5],q=i[9],tt=i[13],F=i[2],Y=i[6],K=i[10],Q=i[14],it=i[3],st=i[7],ot=i[11],ut=i[15];return o[0]=a*C+r*R+c*F+l*it,o[4]=a*L+r*W+c*Y+l*st,o[8]=a*X+r*q+c*K+l*ot,o[12]=a*b+r*tt+c*Q+l*ut,o[1]=h*C+f*R+p*F+g*it,o[5]=h*L+f*W+p*Y+g*st,o[9]=h*X+f*q+p*K+g*ot,o[13]=h*b+f*tt+p*Q+g*ut,o[2]=v*C+_*R+u*F+d*it,o[6]=v*L+_*W+u*Y+d*st,o[10]=v*X+_*q+u*K+d*ot,o[14]=v*b+_*tt+u*Q+d*ut,o[3]=E*C+M*R+w*F+O*it,o[7]=E*L+M*W+w*Y+O*st,o[11]=E*X+M*q+w*K+O*ot,o[15]=E*b+M*tt+w*Q+O*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],g=t[14],v=t[3],_=t[7],u=t[11],d=t[15];return v*(+o*c*f-i*l*f-o*r*p+n*l*p+i*r*g-n*c*g)+_*(+e*c*g-e*l*p+o*a*p-i*a*g+i*l*h-o*c*h)+u*(+e*l*f-e*r*g-o*a*f+n*a*g+o*r*h-n*l*h)+d*(-i*r*h-e*c*f+e*r*p+i*a*f-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],g=t[11],v=t[12],_=t[13],u=t[14],d=t[15],E=f*u*l-_*p*l+_*c*g-r*u*g-f*c*d+r*p*d,M=v*p*l-h*u*l-v*c*g+a*u*g+h*c*d-a*p*d,w=h*_*l-v*f*l+v*r*g-a*_*g-h*r*d+a*f*d,O=v*f*c-h*_*c-v*r*p+a*_*p+h*r*u-a*f*u,C=e*E+n*M+i*w+o*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=E*L,t[1]=(_*p*o-f*u*o-_*i*g+n*u*g+f*i*d-n*p*d)*L,t[2]=(r*u*o-_*c*o+_*i*l-n*u*l-r*i*d+n*c*d)*L,t[3]=(f*c*o-r*p*o-f*i*l+n*p*l+r*i*g-n*c*g)*L,t[4]=M*L,t[5]=(h*u*o-v*p*o+v*i*g-e*u*g-h*i*d+e*p*d)*L,t[6]=(v*c*o-a*u*o-v*i*l+e*u*l+a*i*d-e*c*d)*L,t[7]=(a*p*o-h*c*o+h*i*l-e*p*l-a*i*g+e*c*g)*L,t[8]=w*L,t[9]=(v*f*o-h*_*o-v*n*g+e*_*g+h*n*d-e*f*d)*L,t[10]=(a*_*o-v*r*o+v*n*l-e*_*l-a*n*d+e*r*d)*L,t[11]=(h*r*o-a*f*o-h*n*l+e*f*l+a*n*g-e*r*g)*L,t[12]=O*L,t[13]=(h*_*i-v*f*i+v*n*p-e*_*p-h*n*u+e*f*u)*L,t[14]=(v*r*i-a*_*i-v*n*c+e*_*c+a*n*u-e*r*u)*L,t[15]=(a*f*i-h*r*i+h*n*c-e*f*c-a*n*p+e*r*p)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,l=o*a,h=o*r;return this.set(l*a+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*a,0,l*c-i*r,h*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,l=o+o,h=a+a,f=r+r,p=o*l,g=o*h,v=o*f,_=a*h,u=a*f,d=r*f,E=c*l,M=c*h,w=c*f,O=n.x,C=n.y,L=n.z;return i[0]=(1-(_+d))*O,i[1]=(g+w)*O,i[2]=(v-M)*O,i[3]=0,i[4]=(g-w)*C,i[5]=(1-(p+d))*C,i[6]=(u+E)*C,i[7]=0,i[8]=(v+M)*L,i[9]=(u-E)*L,i[10]=(1-(p+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=cs.set(i[0],i[1],i[2]).length();const a=cs.set(i[4],i[5],i[6]).length(),r=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);const l=1/o,h=1/a,f=1/r;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,e.setFromRotationMatrix(Nn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=ai){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let g,v;if(r===ai)g=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(r===Or)g=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=ai){const c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(a-o),p=(e+t)*l,g=(n+i)*h;let v,_;if(r===ai)v=(a+o)*f,_=-2*f;else if(r===Or)v=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new B,Nn=new Ae,If=new B(0,0,0),Df=new B(1,1,1),gi=new B,Do=new B,mn=new B,zl=new Ae,Hl=new Eo;class qr{constructor(t=0,e=0,n=0,i=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],l=i[5],h=i[9],f=i[2],p=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(un(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Of=0;const Gl=new B,ls=new Eo,Qn=new Ae,Oo=new B,Js=new B,Nf=new B,Uf=new Eo,Vl=new B(1,0,0),Wl=new B(0,1,0),Xl=new B(0,0,1),Bf={type:"added"},kf={type:"removed"};class Xe extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new B,e=new qr,n=new Eo,i=new B(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new re}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oo.copy(t):Oo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Js,Oo,this.up):Qn.lookAt(Oo,Js,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(Qn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new B(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new B,ti=new B,Aa=new B,ei=new B,hs=new B,ds=new B,Yl=new B,Ta=new B,Ca=new B,Ra=new B;let No=!1;class Mn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Un.subVectors(i,e),ti.subVectors(n,e),Aa.subVectors(t,e);const a=Un.dot(Un),r=Un.dot(ti),c=Un.dot(Aa),l=ti.dot(ti),h=ti.dot(Aa),f=a*l-r*r;if(f===0)return o.set(0,0,0),null;const p=1/f,g=(l*c-r*h)*p,v=(a*h-r*c)*p;return o.set(1-g-v,v,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,n,i,o,a,r,c){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),ti.subVectors(t,e),Un.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;hs.subVectors(i,n),ds.subVectors(o,n),Ta.subVectors(t,n);const c=hs.dot(Ta),l=ds.dot(Ta);if(c<=0&&l<=0)return e.copy(n);Ca.subVectors(t,i);const h=hs.dot(Ca),f=ds.dot(Ca);if(h>=0&&f<=h)return e.copy(i);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(hs,a);Ra.subVectors(t,o);const g=hs.dot(Ra),v=ds.dot(Ra);if(v>=0&&g<=v)return e.copy(o);const _=g*l-c*v;if(_<=0&&l>=0&&v<=0)return r=l/(l-v),e.copy(n).addScaledVector(ds,r);const u=h*v-g*f;if(u<=0&&f-h>=0&&g-v>=0)return Yl.subVectors(o,i),r=(f-h)/(f-h+(g-v)),e.copy(i).addScaledVector(Yl,r);const d=1/(u+_+p);return a=_*d,r=p*d,e.copy(n).addScaledVector(hs,a).addScaledVector(ds,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Pa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=Sf(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Pa(a,o,t+1/3),this.g=Pa(a,o,t),this.b=Pa(a,o,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Ee.fromWorkingColorSpace(tn.copy(this),t),Math.round(un(tn.r*255,0,255))*65536+Math.round(un(tn.g*255,0,255))*256+Math.round(un(tn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,o=tn.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,l;const h=(r+a)/2;if(r===a)c=0,l=0;else{const f=a-r;switch(l=h<=.5?f/(a+r):f/(2-a-r),a){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ke){Ee.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Uo);const n=ga(vi.h,Uo.h,e),i=ga(vi.s,Uo.s,e),o=ga(vi.l,Uo.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new yt;yt.NAMES=Ud;let Ff=0;class Li extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Us,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=vc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class di extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new B,Bo=new ee;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}}class Bd extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kd extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Sn extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zf=0;const An=new Ae,La=new Xe,us=new B,gn=new es,Qs=new es,Ze=new B;class pn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?kd:Bd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new re().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Qs.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(gn.min,Qs.min),gn.expandByPoint(Ze),Ze.addVectors(gn.max,Qs.max),gn.expandByPoint(Ze)):(gn.expandByPoint(Qs.min),gn.expandByPoint(Qs.max))}gn.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)Ze.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Ze.fromBufferAttribute(r,l),c&&(us.fromBufferAttribute(t,l),Ze.add(us)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new B,h[R]=new B;const f=new B,p=new B,g=new B,v=new ee,_=new ee,u=new ee,d=new B,E=new B;function M(R,W,q){f.fromArray(i,R*3),p.fromArray(i,W*3),g.fromArray(i,q*3),v.fromArray(a,R*2),_.fromArray(a,W*2),u.fromArray(a,q*2),p.sub(f),g.sub(f),_.sub(v),u.sub(v);const tt=1/(_.x*u.y-u.x*_.y);isFinite(tt)&&(d.copy(p).multiplyScalar(u.y).addScaledVector(g,-_.y).multiplyScalar(tt),E.copy(g).multiplyScalar(_.x).addScaledVector(p,-u.x).multiplyScalar(tt),l[R].add(d),l[W].add(d),l[q].add(d),h[R].add(E),h[W].add(E),h[q].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,W=w.length;R<W;++R){const q=w[R],tt=q.start,F=q.count;for(let Y=tt,K=tt+F;Y<K;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const O=new B,C=new B,L=new B,X=new B;function b(R){L.fromArray(o,R*3),X.copy(L);const W=l[R];O.copy(W),O.sub(L.multiplyScalar(L.dot(W))).normalize(),C.crossVectors(X,W);const tt=C.dot(h[R])<0?-1:1;c[R*4]=O.x,c[R*4+1]=O.y,c[R*4+2]=O.z,c[R*4+3]=tt}for(let R=0,W=w.length;R<W;++R){const q=w[R],tt=q.start,F=q.count;for(let Y=tt,K=tt+F;Y<K;Y+=3)b(n[Y+0]),b(n[Y+1]),b(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const i=new B,o=new B,a=new B,r=new B,c=new B,l=new B,h=new B,f=new B;if(t)for(let p=0,g=t.count;p<g;p+=3){const v=t.getX(p+0),_=t.getX(p+1),u=t.getX(p+2);i.fromBufferAttribute(e,v),o.fromBufferAttribute(e,_),a.fromBufferAttribute(e,u),h.subVectors(a,o),f.subVectors(i,o),h.cross(f),r.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,u),r.add(h),c.add(h),l.add(h),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)i.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,o),f.subVectors(i,o),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,f=r.normalized,p=new l.constructor(c.length*h);let g=0,v=0;for(let _=0,u=c.length;_<u;_++){r.isInterleavedBufferAttribute?g=c[_]*r.data.stride+r.offset:g=c[_]*h;for(let d=0;d<h;d++)p[v++]=l[g++]}return new fn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const o=this.morphAttributes;for(const r in o){const c=[],l=o[r];for(let h=0,f=l.length;h<f;h++){const p=l[h],g=t(p,n);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],f=o[l];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new Ae,Ni=new Yr,ko=new ns,jl=new B,fs=new B,ps=new B,ms=new B,Ia=new B,Fo=new B,zo=new ee,Ho=new ee,Go=new ee,Zl=new B,$l=new B,Kl=new B,Vo=new B,Wo=new B;class te extends Xe{constructor(t=new pn,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){Fo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=r[c],f=o[c];h!==0&&(Ia.fromBufferAttribute(f,t),a?Fo.addScaledVector(Ia,h):Fo.addScaledVector(Ia.sub(e),h))}e.add(Fo)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(o),Ni.copy(t.ray).recast(t.near),!(ko.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ko,jl)===null||Ni.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(ql.copy(o).invert(),Ni.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,p=o.groups,g=o.drawRange;if(r!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const u=p[v],d=a[u.materialIndex],E=Math.max(u.start,g.start),M=Math.min(r.count,Math.min(u.start+u.count,g.start+g.count));for(let w=E,O=M;w<O;w+=3){const C=r.getX(w),L=r.getX(w+1),X=r.getX(w+2);i=Xo(this,d,t,n,l,h,f,C,L,X),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=u.materialIndex,e.push(i))}}else{const v=Math.max(0,g.start),_=Math.min(r.count,g.start+g.count);for(let u=v,d=_;u<d;u+=3){const E=r.getX(u),M=r.getX(u+1),w=r.getX(u+2);i=Xo(this,a,t,n,l,h,f,E,M,w),i&&(i.faceIndex=Math.floor(u/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const u=p[v],d=a[u.materialIndex],E=Math.max(u.start,g.start),M=Math.min(c.count,Math.min(u.start+u.count,g.start+g.count));for(let w=E,O=M;w<O;w+=3){const C=w,L=w+1,X=w+2;i=Xo(this,d,t,n,l,h,f,C,L,X),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=u.materialIndex,e.push(i))}}else{const v=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let u=v,d=_;u<d;u+=3){const E=u,M=u+1,w=u+2;i=Xo(this,a,t,n,l,h,f,E,M,w),i&&(i.faceIndex=Math.floor(u/3),e.push(i))}}}}function Hf(s,t,e,n,i,o,a,r){let c;if(t.side===rn?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===li,r),c===null)return null;Wo.copy(r),Wo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:s}}function Xo(s,t,e,n,i,o,a,r,c,l){s.getVertexPosition(r,fs),s.getVertexPosition(c,ps),s.getVertexPosition(l,ms);const h=Hf(s,t,e,n,fs,ps,ms,Vo);if(h){i&&(zo.fromBufferAttribute(i,r),Ho.fromBufferAttribute(i,c),Go.fromBufferAttribute(i,l),h.uv=Mn.getInterpolation(Vo,fs,ps,ms,zo,Ho,Go,new ee)),o&&(zo.fromBufferAttribute(o,r),Ho.fromBufferAttribute(o,c),Go.fromBufferAttribute(o,l),h.uv1=Mn.getInterpolation(Vo,fs,ps,ms,zo,Ho,Go,new ee),h.uv2=h.uv1),a&&(Zl.fromBufferAttribute(a,r),$l.fromBufferAttribute(a,c),Kl.fromBufferAttribute(a,l),h.normal=Mn.getInterpolation(Vo,fs,ps,ms,Zl,$l,Kl,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new B,materialIndex:0};Mn.getNormal(fs,ps,ms,f.normal),h.face=f}return h}class Ce extends pn{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],l=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,n,e,t,a,o,0),v("z","y","x",1,-1,n,e,-t,a,o,1),v("x","z","y",1,1,t,n,e,i,a,2),v("x","z","y",1,-1,t,n,-e,i,a,3),v("x","y","z",1,-1,t,e,n,i,o,4),v("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(f,2));function v(_,u,d,E,M,w,O,C,L,X,b){const R=w/L,W=O/X,q=w/2,tt=O/2,F=C/2,Y=L+1,K=X+1;let Q=0,it=0;const st=new B;for(let ot=0;ot<K;ot++){const ut=ot*W-tt;for(let pt=0;pt<Y;pt++){const J=pt*R-q;st[_]=J*E,st[u]=ut*M,st[d]=F,l.push(st.x,st.y,st.z),st[_]=0,st[u]=0,st[d]=C>0?1:-1,h.push(st.x,st.y,st.z),f.push(pt/L),f.push(1-ot/X),Q+=1}}for(let ot=0;ot<X;ot++)for(let ut=0;ut<L;ut++){const pt=p+ut+Y*ot,J=p+ut+Y*(ot+1),at=p+(ut+1)+Y*(ot+1),Et=p+(ut+1)+Y*ot;c.push(pt,J,Et),c.push(J,at,Et),it+=6}r.addGroup(g,it,b),g+=it,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=Gs(s[e]);for(const i in n)t[i]=n[i]}return t}function Gf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fd(s){return s.getRenderTarget()===null?s.outputColorSpace:Ee.workingColorSpace}const Vf={clone:Gs,merge:sn};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zd extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends zd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class Yf extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(gs,vs,t,e);i.layers=this.layers,this.add(i);const o=new En(gs,vs,t,e);o.layers=this.layers,this.add(o);const a=new En(gs,vs,t,e);a.layers=this.layers,this.add(a);const r=new En(gs,vs,t,e);r.layers=this.layers,this.add(r);const c=new En(gs,vs,t,e);c.layers=this.layers,this.add(c);const l=new En(gs,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,p,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Hd extends an{constructor(t,e,n,i,o,a,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,i,o,a,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ji?Ke:Pn),this.texture=new Hd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),o=new Pi({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ai});o.uniforms.tEquirect.value=e;const a=new te(i,o),r=e.minFilter;return e.minFilter===xo&&(e.minFilter=Rn),new Yf(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const Da=new B,jf=new B,Zf=new re;class Hi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Da.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zf.getNormalMatrix(t),i=this.coplanarPoint(Da).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ns,Yo=new B;class qc{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,o=new Hi,a=new Hi){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],l=i[4],h=i[5],f=i[6],p=i[7],g=i[8],v=i[9],_=i[10],u=i[11],d=i[12],E=i[13],M=i[14],w=i[15];if(n[0].setComponents(c-o,p-l,u-g,w-d).normalize(),n[1].setComponents(c+o,p+l,u+g,w+d).normalize(),n[2].setComponents(c+a,p+h,u+v,w+E).normalize(),n[3].setComponents(c-a,p-h,u-v,w-E).normalize(),n[4].setComponents(c-r,p-f,u-_,w-M).normalize(),e===ai)n[5].setComponents(c+r,p+f,u+_,w+M).normalize();else if(e===Or)n[5].setComponents(r,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yo.x=i.normal.x>0?t.max.x:t.min.x,Yo.y=i.normal.y>0?t.max.y:t.min.y,Yo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function $f(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const f=l.array,p=l.usage,g=f.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,f,p),l.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function o(l,h,f){const p=h.array,g=h._updateRange,v=h.updateRanges;if(s.bindBuffer(f,l),g.count===-1&&v.length===0&&s.bufferSubData(f,0,p),v.length!==0){for(let _=0,u=v.length;_<u;_++){const d=v[_];e?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(e?s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,i(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,l,h),f.version=l.version}}return{get:a,remove:r,update:c}}class jr extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,f=t/r,p=e/c,g=[],v=[],_=[],u=[];for(let d=0;d<h;d++){const E=d*p-a;for(let M=0;M<l;M++){const w=M*f-o;v.push(w,-E,0),_.push(0,0,1),u.push(M/r),u.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<r;E++){const M=E+l*d,w=E+l*(d+1),O=E+1+l*(d+1),C=E+1+l*d;g.push(M,w,C),g.push(w,O,C)}this.setIndex(g),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`
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
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,g0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,b0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:op,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:dp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:_p,color_vertex:xp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ap,colorspace_fragment:Tp,colorspace_pars_fragment:Cp,envmap_fragment:Rp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Wp,envmap_vertex:Dp,fog_vertex:Op,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_fragment:Fp,lightmap_pars_fragment:zp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Vp,lights_toon_fragment:Xp,lights_toon_pars_fragment:Yp,lights_phong_fragment:qp,lights_phong_pars_fragment:jp,lights_physical_fragment:Zp,lights_physical_pars_fragment:$p,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:om,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:cm,metalnessmap_pars_fragment:lm,morphcolor_vertex:hm,morphnormal_vertex:dm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Tm,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Om,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:Fm,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:Ym,uv_pars_vertex:qm,uv_vertex:jm,worldpos_vertex:Zm,background_vert:$m,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:c0,linedashed_frag:l0,meshbasic_vert:h0,meshbasic_frag:d0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:v0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:M0,meshtoon_vert:E0,meshtoon_frag:b0,points_vert:S0,points_frag:w0,shadow_vert:A0,shadow_frag:T0,sprite_vert:C0,sprite_frag:R0},vt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},jn={basic:{uniforms:sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:sn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:sn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:sn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:sn([vt.points,vt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:sn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:sn([vt.common,vt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:sn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:sn([vt.sprite,vt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:sn([vt.common,vt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:sn([vt.lights,vt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};jn.physical={uniforms:sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const qo={r:0,b:0,g:0};function P0(s,t,e,n,i,o,a){const r=new yt(0);let c=o===!0?0:1,l,h,f=null,p=0,g=null;function v(u,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?_(r,c):M&&M.isColor&&(_(M,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Wr)?(h===void 0&&(h=new te(new Ce(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Gs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,(f!==M||p!==M.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,g=s.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new te(new jr(2,2),new Pi({name:"BackgroundMaterial",uniforms:Gs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,g=s.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function _(u,d){u.getRGB(qo,Fd(s)),n.buffers.color.setClear(qo.r,qo.g,qo.b,d,a)}return{getClearColor:function(){return r},setClearColor:function(u,d=1){r.set(u),c=d,_(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,_(r,c)},render:v}}function L0(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=u(null);let l=c,h=!1;function f(F,Y,K,Q,it){let st=!1;if(a){const ot=_(Q,K,Y);l!==ot&&(l=ot,g(l.object)),st=d(F,Q,K,it),st&&E(F,Q,K,it)}else{const ot=Y.wireframe===!0;(l.geometry!==Q.id||l.program!==K.id||l.wireframe!==ot)&&(l.geometry=Q.id,l.program=K.id,l.wireframe=ot,st=!0)}it!==null&&e.update(it,s.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,X(F,Y,K,Q),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function p(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function g(F){return n.isWebGL2?s.bindVertexArray(F):o.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?s.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function _(F,Y,K){const Q=K.wireframe===!0;let it=r[F.id];it===void 0&&(it={},r[F.id]=it);let st=it[Y.id];st===void 0&&(st={},it[Y.id]=st);let ot=st[Q];return ot===void 0&&(ot=u(p()),st[Q]=ot),ot}function u(F){const Y=[],K=[],Q=[];for(let it=0;it<i;it++)Y[it]=0,K[it]=0,Q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:Q,object:F,attributes:{},index:null}}function d(F,Y,K,Q){const it=l.attributes,st=Y.attributes;let ot=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=it[pt];let Et=st[pt];if(Et===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;ot++}return l.attributesNum!==ot||l.index!==Q}function E(F,Y,K,Q){const it={},st=Y.attributes;let ot=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=st[pt];at===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));const Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),it[pt]=Et,ot++}l.attributes=it,l.attributesNum=ot,l.index=Q}function M(){const F=l.newAttributes;for(let Y=0,K=F.length;Y<K;Y++)F[Y]=0}function w(F){O(F,0)}function O(F,Y){const K=l.newAttributes,Q=l.enabledAttributes,it=l.attributeDivisors;K[F]=1,Q[F]===0&&(s.enableVertexAttribArray(F),Q[F]=1),it[F]!==Y&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),it[F]=Y)}function C(){const F=l.newAttributes,Y=l.enabledAttributes;for(let K=0,Q=Y.length;K<Q;K++)Y[K]!==F[K]&&(s.disableVertexAttribArray(K),Y[K]=0)}function L(F,Y,K,Q,it,st,ot){ot===!0?s.vertexAttribIPointer(F,Y,K,it,st):s.vertexAttribPointer(F,Y,K,Q,it,st)}function X(F,Y,K,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const it=Q.attributes,st=K.getAttributes(),ot=Y.defaultAttributeValues;for(const ut in st){const pt=st[ut];if(pt.location>=0){let J=it[ut];if(J===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){const at=J.normalized,Et=J.itemSize,Tt=e.get(J);if(Tt===void 0)continue;const Ot=Tt.buffer,Yt=Tt.type,qt=Tt.bytesPerElement,Ft=n.isWebGL2===!0&&(Yt===s.INT||Yt===s.UNSIGNED_INT||J.gpuType===Ed);if(J.isInterleavedBufferAttribute){const he=J.data,Z=he.stride,ve=J.offset;if(he.isInstancedInterleavedBuffer){for(let Bt=0;Bt<pt.locationSize;Bt++)O(pt.location+Bt,he.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Bt=0;Bt<pt.locationSize;Bt++)w(pt.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let Bt=0;Bt<pt.locationSize;Bt++)L(pt.location+Bt,Et/pt.locationSize,Yt,at,Z*qt,(ve+Et/pt.locationSize*Bt)*qt,Ft)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<pt.locationSize;he++)O(pt.location+he,J.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<pt.locationSize;he++)w(pt.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let he=0;he<pt.locationSize;he++)L(pt.location+he,Et/pt.locationSize,Yt,at,Et*qt,Et/pt.locationSize*he*qt,Ft)}}else if(ot!==void 0){const at=ot[ut];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(pt.location,at);break;case 3:s.vertexAttrib3fv(pt.location,at);break;case 4:s.vertexAttrib4fv(pt.location,at);break;default:s.vertexAttrib1fv(pt.location,at)}}}}C()}function b(){q();for(const F in r){const Y=r[F];for(const K in Y){const Q=Y[K];for(const it in Q)v(Q[it].object),delete Q[it];delete Y[K]}delete r[F]}}function R(F){if(r[F.id]===void 0)return;const Y=r[F.id];for(const K in Y){const Q=Y[K];for(const it in Q)v(Q[it].object),delete Q[it];delete Y[K]}delete r[F.id]}function W(F){for(const Y in r){const K=r[Y];if(K[F.id]===void 0)continue;const Q=K[F.id];for(const it in Q)v(Q[it].object),delete Q[it];delete K[F.id]}}function q(){tt(),h=!0,l!==c&&(l=c,g(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:tt,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:w,disableUnusedAttributes:C}}function I0(s,t,e,n){const i=n.isWebGL2;let o;function a(h){o=h}function r(h,f){s.drawArrays(o,h,f),e.update(f,o,1)}function c(h,f,p){if(p===0)return;let g,v;if(i)g=s,v="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](o,h,f,p),e.update(f,o,p)}function l(h,f,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<p;v++)this.render(h[v],f[v]);else{g.multiDrawArraysWEBGL(o,h,0,f,0,p);let v=0;for(let _=0;_<p;_++)v+=f[_];e.update(v,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function D0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),u=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,w=a||t.has("OES_texture_float"),O=M&&w,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:u,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:O,maxSamples:C}}function O0(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Hi,r=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||i;return i=p,n=f.length,g},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,d=s.get(f);if(!i||v===null||v.length===0||o&&!u)o?h(null):l();else{const E=o?0:n,M=E*4;let w=d.clippingState||null;c.value=w,w=h(v,p,M,g);for(let O=0;O!==M;++O)w[O]=e[O];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,g,v){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=c.value,v!==!0||u===null){const d=g+_*4,E=p.matrixWorldInverse;r.getNormalMatrix(E),(u===null||u.length<d)&&(u=new Float32Array(d));for(let M=0,w=g;M!==_;++M,w+=4)a.copy(f[M]).applyMatrix4(E,r),a.normal.toArray(u,w),u[w+3]=a.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,u}}function N0(s){let t=new WeakMap;function e(a,r){return r===_c?a.mapping=Fs:r===xc&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===_c||r===xc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qf(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Vd extends zd{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,a=o+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,Jl=[.125,.215,.35,.446,.526,.582],Yi=20,Oa=new Vd,Ql=new yt;let Na=null,Ua=0,Ba=0;const Gi=(1+Math.sqrt(5))/2,_s=1/Gi,th=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Gi,_s),new B(0,Gi,-_s),new B(_s,0,Gi),new B(-_s,0,Gi),new B(Gi,_s,0),new B(-Gi,_s,0)];class eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ua,Ba),t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:yo,format:zn,colorSpace:hi,depthBuffer:!1},i=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(o)),this._blurMaterial=B0(o,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,i){const r=new En(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ql),h.toneMapping=ci,h.autoClear=!1;const g=new di({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new te(new Ce,g);let _=!1;const u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,_=!0):(g.color.copy(Ql),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):E===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));const M=this._cubeSize;jo(i,E*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(v,r),h.render(t,r)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fs||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;jo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=th[(i-1)%th.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[i],l),p=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Yi-1),_=o/v,u=isFinite(o)?1+Math.floor(h*_):Yi;u>Yi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Yi}`);const d=[];let E=0;for(let L=0;L<Yi;++L){const X=L/_,b=Math.exp(-X*X/2);d.push(b),L===0?E+=b:L<u&&(E+=2*b)}for(let L=0;L<d.length;L++)d[L]=d[L]/E;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=d,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:M}=this;p.dTheta.value=v,p.mipInt.value=M-n;const w=this._sizeLods[i],O=3*w*(i>M-Is?i-M+Is:0),C=4*(this._cubeSize-w);jo(e,O,C,3*w,2*w),c.setRenderTarget(e),c.render(f,Oa)}}function U0(s){const t=[],e=[],n=[];let i=s;const o=s-Is+1+Jl.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-Is?c=Jl[a-s+Is-1]:a===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,_=3,u=2,d=1,E=new Float32Array(_*v*g),M=new Float32Array(u*v*g),w=new Float32Array(d*v*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,X=C>2?0:-1,b=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];E.set(b,_*v*C),M.set(p,u*v*C);const R=[C,C,C,C,C,C];w.set(R,d*v*C)}const O=new pn;O.setAttribute("position",new fn(E,_)),O.setAttribute("uv",new fn(M,u)),O.setAttribute("faceIndex",new fn(w,d)),t.push(O),i>Is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(s,t,e){const n=new Qi(s,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function B0(s,t,e){const n=new Float32Array(Yi),i=new B(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ih(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function sh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function k0(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===_c||c===xc,h=c===Fs||c===zs;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new eh(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||h&&f&&i(f)){e===null&&(e=new eh(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",o),p.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function o(r){const c=r.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function F0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function z0(s,t,e,n){const i={},o=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const _=p.morphAttributes[v];for(let u=0,d=_.length;u<d;u++)t.remove(_[u])}p.removeEventListener("dispose",a),delete i[p.id];const g=o.get(p);g&&(t.remove(g),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const v in p)t.update(p[v],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const _=g[v];for(let u=0,d=_.length;u<d;u++)t.update(_[u],s.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,v=f.attributes.position;let _=0;if(g!==null){const E=g.array;_=g.version;for(let M=0,w=E.length;M<w;M+=3){const O=E[M+0],C=E[M+1],L=E[M+2];p.push(O,C,C,L,L,O)}}else if(v!==void 0){const E=v.array;_=v.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const O=M+0,C=M+1,L=M+2;p.push(O,C,C,L,L,O)}}else return;const u=new(Id(p)?kd:Bd)(p,1);u.version=_;const d=o.get(f);d&&t.remove(d),o.set(f,u)}function h(f){const p=o.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return o.get(f)}return{get:r,update:c,getWireframeAttribute:h}}function H0(s,t,e,n){const i=n.isWebGL2;let o;function a(g){o=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function h(g,v){s.drawElements(o,v,r,g*c),e.update(v,o,1)}function f(g,v,_){if(_===0)return;let u,d;if(i)u=s,d="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](o,v,r,g*c,_),e.update(v,o,_)}function p(g,v,_){if(_===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<_;d++)this.render(g[d]/c,v[d]);else{u.multiDrawElementsWEBGL(o,v,0,r,g,0,_);let d=0;for(let E=0;E<_;E++)d+=v[E];e.update(d,o,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function G0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V0(s,t){return s[0]-t[0]}function W0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function X0(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new Oe,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let u=o.get(h);if(u===void 0||u.count!==_){let Y=function(){tt.dispose(),o.delete(h),h.removeEventListener("dispose",Y)};var g=Y;u!==void 0&&u.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),w===!0&&(b=2),O===!0&&(b=3);let R=h.attributes.position.count*b,W=1;R>t.maxTextureSize&&(W=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const q=new Float32Array(R*W*4*_),tt=new Nd(q,R,W,_);tt.type=Si,tt.needsUpdate=!0;const F=b*4;for(let K=0;K<_;K++){const Q=C[K],it=L[K],st=X[K],ot=R*W*4*K;for(let ut=0;ut<Q.count;ut++){const pt=ut*F;M===!0&&(a.fromBufferAttribute(Q,ut),q[ot+pt+0]=a.x,q[ot+pt+1]=a.y,q[ot+pt+2]=a.z,q[ot+pt+3]=0),w===!0&&(a.fromBufferAttribute(it,ut),q[ot+pt+4]=a.x,q[ot+pt+5]=a.y,q[ot+pt+6]=a.z,q[ot+pt+7]=0),O===!0&&(a.fromBufferAttribute(st,ut),q[ot+pt+8]=a.x,q[ot+pt+9]=a.y,q[ot+pt+10]=a.z,q[ot+pt+11]=st.itemSize===4?a.w:1)}}u={count:_,texture:tt,size:new ee(R,W)},o.set(h,u),h.addEventListener("dispose",Y)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];const E=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}else{const v=p===void 0?0:p.length;let _=n[h.id];if(_===void 0||_.length!==v){_=[];for(let w=0;w<v;w++)_[w]=[w,0];n[h.id]=_}for(let w=0;w<v;w++){const O=_[w];O[0]=w,O[1]=p[w]}_.sort(W0);for(let w=0;w<8;w++)w<v&&_[w][1]?(r[w][0]=_[w][0],r[w][1]=_[w][1]):(r[w][0]=Number.MAX_SAFE_INTEGER,r[w][1]=0);r.sort(V0);const u=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const O=r[w],C=O[0],L=O[1];C!==Number.MAX_SAFE_INTEGER&&L?(u&&h.getAttribute("morphTarget"+w)!==u[C]&&h.setAttribute("morphTarget"+w,u[C]),d&&h.getAttribute("morphNormal"+w)!==d[C]&&h.setAttribute("morphNormal"+w,d[C]),i[w]=L,E+=L):(u&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),d&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const M=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Y0(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return f}function a(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:a}}class Wd extends an{constructor(t,e,n,i,o,a,r,c,l,h){if(h=h!==void 0?h:Ki,h!==Ki&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=bi),n===void 0&&h===Hs&&(n=$i),super(null,i,o,a,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xd=new an,Yd=new Wd(1,1);Yd.compareFunction=Ld;const qd=new Nd,jd=new Pf,Zd=new Hd,oh=[],rh=[],ah=new Float32Array(16),ch=new Float32Array(9),lh=new Float32Array(4);function js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oh[i];if(o===void 0&&(o=new Float32Array(i),oh[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zr(s,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function q0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function j0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),je(e,t)}}function Z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),je(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),je(e,t)}}function K0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),je(e,n)}}function J0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;ch.set(n),s.uniformMatrix3fv(this.addr,!1,ch),je(e,n)}}function Q0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),je(e,n)}}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),je(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),je(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),je(e,t)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),je(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),je(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),je(e,t)}}function cg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?Yd:Xd;e.setTexture2D(t||o,i)}function lg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jd,i)}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zd,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qd,i)}function ug(s){switch(s){case 5126:return q0;case 35664:return j0;case 35665:return Z0;case 35666:return $0;case 35674:return K0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return og;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}function fg(s,t){s.uniform1fv(this.addr,t)}function pg(s,t){const e=js(t,this.size,2);s.uniform2fv(this.addr,e)}function mg(s,t){const e=js(t,this.size,3);s.uniform3fv(this.addr,e)}function gg(s,t){const e=js(t,this.size,4);s.uniform4fv(this.addr,e)}function vg(s,t){const e=js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _g(s,t){const e=js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xg(s,t){const e=js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yg(s,t){s.uniform1iv(this.addr,t)}function Mg(s,t){s.uniform2iv(this.addr,t)}function Eg(s,t){s.uniform3iv(this.addr,t)}function bg(s,t){s.uniform4iv(this.addr,t)}function Sg(s,t){s.uniform1uiv(this.addr,t)}function wg(s,t){s.uniform2uiv(this.addr,t)}function Ag(s,t){s.uniform3uiv(this.addr,t)}function Tg(s,t){s.uniform4uiv(this.addr,t)}function Cg(s,t,e){const n=this.cache,i=t.length,o=Zr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Xd,o[a])}function Rg(s,t,e){const n=this.cache,i=t.length,o=Zr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||jd,o[a])}function Pg(s,t,e){const n=this.cache,i=t.length,o=Zr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Zd,o[a])}function Lg(s,t,e){const n=this.cache,i=t.length,o=Zr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||qd,o[a])}function Ig(s){switch(s){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return vg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return wg;case 36295:return Ag;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function hh(s,t){s.seq.push(t),s.map[t.id]=t}function Ug(s,t,e){const n=s.name,i=n.length;for(ka.lastIndex=0;;){const o=ka.exec(n),a=ka.lastIndex;let r=o[1];const c=o[2]==="]",l=o[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===i){hh(e,l===void 0?new Dg(r,s,t):new Og(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Ng(r),hh(e,f)),e=f}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);Ug(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function dh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Bg=37297;let kg=0;function Fg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function zg(s){const t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(s);let n;switch(t===e?n="":t===Dr&&e===Ir?n="LinearDisplayP3ToLinearSRGB":t===Ir&&e===Dr&&(n="LinearSRGBToLinearDisplayP3"),s){case hi:case Xr:return[n,"LinearTransferOETF"];case Ke:case Xc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function uh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Fg(s.getShaderSource(t),a)}else return i}function Hg(s,t){const e=zg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gg(s,t){let e;switch(t){case Ku:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="OptimizedCineon";break;case tf:e="ACESFilmic";break;case nf:e="AgX";break;case ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Wg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Xg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function Ds(s){return s!==""}function fh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(s){return s.replace(qg,Zg)}const jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zg(s,t){let e=ie[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace($g,Kg)}function Kg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function gh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Qg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case zs:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function ev(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vc:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function nv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iv(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=Jg(e),l=Qg(e),h=tv(e),f=ev(e),p=nv(e),g=e.isWebGL2?"":Vg(e),v=Wg(e),_=Xg(o),u=i.createProgram();let d,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ds).join(`
`),d.length>0&&(d+=`
`),E=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ds).join(`
`),E.length>0&&(E+=`
`)):(d=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),E=[g,gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?ie.tonemapping_pars_fragment:"",e.toneMapping!==ci?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Ac(a),a=fh(a,e),a=ph(a,e),r=Ac(r),r=fh(r,e),r=ph(r,e),a=mh(a),r=mh(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=M+d+a,O=M+E+r,C=dh(i,i.VERTEX_SHADER,w),L=dh(i,i.FRAGMENT_SHADER,O);i.attachShader(u,C),i.attachShader(u,L),e.index0AttributeName!==void 0?i.bindAttribLocation(u,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(u,0,"position"),i.linkProgram(u);function X(q){if(s.debug.checkShaderErrors){const tt=i.getProgramInfoLog(u).trim(),F=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(L).trim();let K=!0,Q=!0;if(i.getProgramParameter(u,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,u,C,L);else{const it=uh(i,C,"vertex"),st=uh(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(u,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+it+`
`+st)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(F===""||Y==="")&&(Q=!1);Q&&(q.diagnostics={runnable:K,programLog:tt,vertexShader:{log:F,prefix:d},fragmentShader:{log:Y,prefix:E}})}i.deleteShader(C),i.deleteShader(L),b=new Sr(i,u),R=Yg(i,u)}let b;this.getUniforms=function(){return b===void 0&&X(this),b};let R;this.getAttributes=function(){return R===void 0&&X(this),R};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=i.getProgramParameter(u,Bg)),W},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(u),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=u,this.vertexShader=C,this.fragmentShader=L,this}let sv=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rv(t),e.set(t,n)),n}}class rv{constructor(t){this.id=sv++,this.code=t,this.usedTimes=0}}function av(s,t,e,n,i,o,a){const r=new Yc,c=new ov,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function u(b,R,W,q,tt){const F=q.fog,Y=tt.geometry,K=b.isMeshStandardMaterial?q.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||K),it=Q&&Q.mapping===Wr?Q.image.height:null,st=v[b.type];b.precision!==null&&(g=i.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=ot!==void 0?ot.length:0;let pt=0;Y.morphAttributes.position!==void 0&&(pt=1),Y.morphAttributes.normal!==void 0&&(pt=2),Y.morphAttributes.color!==void 0&&(pt=3);let J,at,Et,Tt;if(st){const $e=jn[st];J=$e.vertexShader,at=$e.fragmentShader}else J=b.vertexShader,at=b.fragmentShader,c.update(b),Et=c.getVertexShaderID(b),Tt=c.getFragmentShaderID(b);const Ot=s.getRenderTarget(),Yt=tt.isInstancedMesh===!0,qt=tt.isBatchedMesh===!0,Ft=!!b.map,he=!!b.matcap,Z=!!Q,ve=!!b.aoMap,Bt=!!b.lightMap,Xt=!!b.bumpMap,Ct=!!b.normalMap,xe=!!b.displacementMap,Zt=!!b.emissiveMap,D=!!b.metalnessMap,T=!!b.roughnessMap,j=b.anisotropy>0,ht=b.clearcoat>0,lt=b.iridescence>0,dt=b.sheen>0,Lt=b.transmission>0,_t=j&&!!b.anisotropyMap,St=ht&&!!b.clearcoatMap,zt=ht&&!!b.clearcoatNormalMap,jt=ht&&!!b.clearcoatRoughnessMap,rt=lt&&!!b.iridescenceMap,_e=lt&&!!b.iridescenceThicknessMap,ne=dt&&!!b.sheenColorMap,Wt=dt&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,wt=!!b.specularColorMap,$t=!!b.specularIntensityMap,fe=Lt&&!!b.transmissionMap,Re=Lt&&!!b.thicknessMap,Kt=!!b.gradientMap,ft=!!b.alphaMap,k=b.alphaTest>0,Mt=!!b.alphaHash,xt=!!b.extensions,Ht=!!Y.attributes.uv1,kt=!!Y.attributes.uv2,ye=!!Y.attributes.uv3;let Me=ci;return b.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Me=s.toneMapping),{isWebGL2:h,shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:at,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:qt,instancing:Yt,instancingColor:Yt&&tt.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:hi,map:Ft,matcap:he,envMap:Z,envMapMode:Z&&Q.mapping,envMapCubeUVHeight:it,aoMap:ve,lightMap:Bt,bumpMap:Xt,normalMap:Ct,displacementMap:p&&xe,emissiveMap:Zt,normalMapObjectSpace:Ct&&b.normalMapType===mf,normalMapTangentSpace:Ct&&b.normalMapType===Pd,metalnessMap:D,roughnessMap:T,anisotropy:j,anisotropyMap:_t,clearcoat:ht,clearcoatMap:St,clearcoatNormalMap:zt,clearcoatRoughnessMap:jt,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:_e,sheen:dt,sheenColorMap:ne,sheenRoughnessMap:Wt,specularMap:Rt,specularColorMap:wt,specularIntensityMap:$t,transmission:Lt,transmissionMap:fe,thicknessMap:Re,gradientMap:Kt,opaque:b.transparent===!1&&b.blending===Us,alphaMap:ft,alphaTest:k,alphaHash:Mt,combine:b.combine,mapUv:Ft&&_(b.map.channel),aoMapUv:ve&&_(b.aoMap.channel),lightMapUv:Bt&&_(b.lightMap.channel),bumpMapUv:Xt&&_(b.bumpMap.channel),normalMapUv:Ct&&_(b.normalMap.channel),displacementMapUv:xe&&_(b.displacementMap.channel),emissiveMapUv:Zt&&_(b.emissiveMap.channel),metalnessMapUv:D&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:_t&&_(b.anisotropyMap.channel),clearcoatMapUv:St&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(b.sheenRoughnessMap.channel),specularMapUv:Rt&&_(b.specularMap.channel),specularColorMapUv:wt&&_(b.specularColorMap.channel),specularIntensityMapUv:$t&&_(b.specularIntensityMap.channel),transmissionMapUv:fe&&_(b.transmissionMap.channel),thicknessMapUv:Re&&_(b.thicknessMap.channel),alphaMapUv:ft&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ct||j),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Ht,vertexUv2s:kt,vertexUv3s:ye,pointsUvs:tt.isPoints===!0&&!!Y.attributes.uv&&(Ft||ft),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:tt.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&Ee.getTransfer(b.map.colorSpace)===Le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Zn,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)R.push(W),R.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(E(R,b),M(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function E(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function M(b,R){r.disableAll(),R.isWebGL2&&r.enable(0),R.supportsVertexTextures&&r.enable(1),R.instancing&&r.enable(2),R.instancingColor&&r.enable(3),R.matcap&&r.enable(4),R.envMap&&r.enable(5),R.normalMapObjectSpace&&r.enable(6),R.normalMapTangentSpace&&r.enable(7),R.clearcoat&&r.enable(8),R.iridescence&&r.enable(9),R.alphaTest&&r.enable(10),R.vertexColors&&r.enable(11),R.vertexAlphas&&r.enable(12),R.vertexUv1s&&r.enable(13),R.vertexUv2s&&r.enable(14),R.vertexUv3s&&r.enable(15),R.vertexTangents&&r.enable(16),R.anisotropy&&r.enable(17),R.alphaHash&&r.enable(18),R.batching&&r.enable(19),b.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.skinning&&r.enable(4),R.morphTargets&&r.enable(5),R.morphNormals&&r.enable(6),R.morphColors&&r.enable(7),R.premultipliedAlpha&&r.enable(8),R.shadowMapEnabled&&r.enable(9),R.useLegacyLights&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),b.push(r.mask)}function w(b){const R=v[b.type];let W;if(R){const q=jn[R];W=Vf.clone(q.uniforms)}else W=b.uniforms;return W}function O(b,R){let W;for(let q=0,tt=l.length;q<tt;q++){const F=l[q];if(F.cacheKey===R){W=F,++W.usedTimes;break}}return W===void 0&&(W=new iv(s,R,b,o),l.push(W)),W}function C(b){if(--b.usedTimes===0){const R=l.indexOf(b);l[R]=l[l.length-1],l.pop(),b.destroy()}}function L(b){c.remove(b)}function X(){c.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:w,acquireProgram:O,releaseProgram:C,releaseShaderCache:L,programs:l,dispose:X}}function cv(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _h(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(f,p,g,v,_,u){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:_,group:u},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=u),t++,d}function r(f,p,g,v,_,u){const d=a(f,p,g,v,_,u);g.transmission>0?n.push(d):g.transparent===!0?i.push(d):e.push(d)}function c(f,p,g,v,_,u){const d=a(f,p,g,v,_,u);g.transmission>0?n.unshift(d):g.transparent===!0?i.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||lv),n.length>1&&n.sort(p||vh),i.length>1&&i.sort(p||vh)}function h(){for(let f=t,p=s.length;f<p;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:h,sort:l}}function hv(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new _h,s.set(n,[a])):i>=o.length?(a=new _h,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function dv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new yt};break;case"SpotLight":e={position:new B,direction:new B,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function uv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fv=0;function pv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mv(s,t){const e=new dv,n=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const o=new B,a=new Ae,r=new Ae;function c(h,f){let p=0,g=0,v=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,u=0,d=0,E=0,M=0,w=0,O=0,C=0,L=0,X=0,b=0;h.sort(pv);const R=f===!0?Math.PI:1;for(let q=0,tt=h.length;q<tt;q++){const F=h[q],Y=F.color,K=F.intensity,Q=F.distance,it=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=Y.r*K*R,g+=Y.g*K*R,v+=Y.b*K*R;else if(F.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(F.sh.coefficients[st],K);b++}else if(F.isDirectionalLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.directionalShadow[_]=ut,i.directionalShadowMap[_]=it,i.directionalShadowMatrix[_]=F.shadow.matrix,w++}i.directional[_]=st,_++}else if(F.isSpotLight){const st=e.get(F);st.position.setFromMatrixPosition(F.matrixWorld),st.color.copy(Y).multiplyScalar(K*R),st.distance=Q,st.coneCos=Math.cos(F.angle),st.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),st.decay=F.decay,i.spot[d]=st;const ot=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,ot.updateMatrices(F),F.castShadow&&X++),i.spotLightMatrix[d]=ot.matrix,F.castShadow){const ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.spotShadow[d]=ut,i.spotShadowMap[d]=it,C++}d++}else if(F.isRectAreaLight){const st=e.get(F);st.color.copy(Y).multiplyScalar(K),st.halfWidth.set(F.width*.5,0,0),st.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=st,E++}else if(F.isPointLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*R),st.distance=F.distance,st.decay=F.decay,F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,i.pointShadow[u]=ut,i.pointShadowMap[u]=it,i.pointShadowMatrix[u]=F.shadow.matrix,O++}i.point[u]=st,u++}else if(F.isHemisphereLight){const st=e.get(F);st.skyColor.copy(F.color).multiplyScalar(K*R),st.groundColor.copy(F.groundColor).multiplyScalar(K*R),i.hemi[M]=st,M++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const W=i.hash;(W.directionalLength!==_||W.pointLength!==u||W.spotLength!==d||W.rectAreaLength!==E||W.hemiLength!==M||W.numDirectionalShadows!==w||W.numPointShadows!==O||W.numSpotShadows!==C||W.numSpotMaps!==L||W.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=E,i.point.length=u,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=O,i.pointShadowMap.length=O,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=O,i.spotLightMatrix.length=C+L-X,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=b,W.directionalLength=_,W.pointLength=u,W.spotLength=d,W.rectAreaLength=E,W.hemiLength=M,W.numDirectionalShadows=w,W.numPointShadows=O,W.numSpotShadows=C,W.numSpotMaps=L,W.numLightProbes=b,i.version=fv++)}function l(h,f){let p=0,g=0,v=0,_=0,u=0;const d=f.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const w=h[E];if(w.isDirectionalLight){const O=i.directional[p];O.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(d),p++}else if(w.isSpotLight){const O=i.spot[v];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(d),O.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(d),v++}else if(w.isRectAreaLight){const O=i.rectArea[_];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(d),r.identity(),a.copy(w.matrixWorld),a.premultiply(d),r.extractRotation(a),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(r),O.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const O=i.point[g];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(d),g++}else if(w.isHemisphereLight){const O=i.hemi[u];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function xh(s,t){const e=new mv(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function gv(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new xh(s,t),e.set(o,[c])):a>=r.length?(c=new xh(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class vv extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _v extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;function Mv(s,t,e){let n=new qc;const i=new ee,o=new ee,a=new Oe,r=new vv({depthPacking:pf}),c=new _v,l={},h=e.maxTextureSize,f={[li]:rn,[rn]:li,[Zn]:Zn},p=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:xv,fragmentShader:yv}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(v,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let d=this.type;this.render=function(C,L,X){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Ai),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const tt=d!==si&&this.type===si,F=d===si&&this.type!==si;for(let Y=0,K=C.length;Y<K;Y++){const Q=C[Y],it=Q.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);const st=it.getFrameExtents();if(i.multiply(st),o.copy(it.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/st.x),i.x=o.x*st.x,it.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/st.y),i.y=o.y*st.y,it.mapSize.y=o.y)),it.map===null||tt===!0||F===!0){const ut=this.type!==si?{minFilter:Be,magFilter:Be}:{};it.map!==null&&it.map.dispose(),it.map=new Qi(i.x,i.y,ut),it.map.texture.name=Q.name+".shadowMap",it.camera.updateProjectionMatrix()}s.setRenderTarget(it.map),s.clear();const ot=it.getViewportCount();for(let ut=0;ut<ot;ut++){const pt=it.getViewport(ut);a.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),q.viewport(a),it.updateMatrices(Q,ut),n=it.getFrustum(),w(L,X,it.camera,Q,this.type)}it.isPointLightShadow!==!0&&this.type===si&&E(it,X),it.needsUpdate=!1}d=this.type,u.needsUpdate=!1,s.setRenderTarget(b,R,W)};function E(C,L){const X=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,X,p,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,X,g,_,null)}function M(C,L,X,b){let R=null;const W=X.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)R=W;else if(R=X.isPointLight===!0?c:r,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=R.uuid,tt=L.uuid;let F=l[q];F===void 0&&(F={},l[q]=F);let Y=F[tt];Y===void 0&&(Y=R.clone(),F[tt]=Y,L.addEventListener("dispose",O)),R=Y}if(R.visible=L.visible,R.wireframe=L.wireframe,b===si?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:f[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=s.properties.get(R);q.light=X}return R}function w(C,L,X,b,R){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===si)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld);const tt=t.update(C),F=C.material;if(Array.isArray(F)){const Y=tt.groups;for(let K=0,Q=Y.length;K<Q;K++){const it=Y[K],st=F[it.materialIndex];if(st&&st.visible){const ot=M(C,st,b,R);C.onBeforeShadow(s,C,L,X,tt,ot,it),s.renderBufferDirect(X,null,tt,ot,C,it),C.onAfterShadow(s,C,L,X,tt,ot,it)}}}else if(F.visible){const Y=M(C,F,b,R);C.onBeforeShadow(s,C,L,X,tt,Y,null),s.renderBufferDirect(X,null,tt,Y,C,null),C.onAfterShadow(s,C,L,X,tt,Y,null)}}const q=C.children;for(let tt=0,F=q.length;tt<F;tt++)w(q[tt],L,X,b,R)}function O(C){C.target.removeEventListener("dispose",O);for(const X in l){const b=l[X],R=C.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Ev(s,t,e){const n=e.isWebGL2;function i(){let k=!1;const Mt=new Oe;let xt=null;const Ht=new Oe(0,0,0,0);return{setMask:function(kt){xt!==kt&&!k&&(s.colorMask(kt,kt,kt,kt),xt=kt)},setLocked:function(kt){k=kt},setClear:function(kt,ye,Me,ge,$e){$e===!0&&(kt*=ge,ye*=ge,Me*=ge),Mt.set(kt,ye,Me,ge),Ht.equals(Mt)===!1&&(s.clearColor(kt,ye,Me,ge),Ht.copy(Mt))},reset:function(){k=!1,xt=null,Ht.set(-1,0,0,0)}}}function o(){let k=!1,Mt=null,xt=null,Ht=null;return{setTest:function(kt){kt?qt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(kt){Mt!==kt&&!k&&(s.depthMask(kt),Mt=kt)},setFunc:function(kt){if(xt!==kt){switch(kt){case Gu:s.depthFunc(s.NEVER);break;case Vu:s.depthFunc(s.ALWAYS);break;case Wu:s.depthFunc(s.LESS);break;case Pr:s.depthFunc(s.LEQUAL);break;case Xu:s.depthFunc(s.EQUAL);break;case Yu:s.depthFunc(s.GEQUAL);break;case qu:s.depthFunc(s.GREATER);break;case ju:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=kt}},setLocked:function(kt){k=kt},setClear:function(kt){Ht!==kt&&(s.clearDepth(kt),Ht=kt)},reset:function(){k=!1,Mt=null,xt=null,Ht=null}}}function a(){let k=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,ge=null,$e=null;return{setTest:function(ue){k||(ue?qt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(ue){Mt!==ue&&!k&&(s.stencilMask(ue),Mt=ue)},setFunc:function(ue,Ye,cn){(xt!==ue||Ht!==Ye||kt!==cn)&&(s.stencilFunc(ue,Ye,cn),xt=ue,Ht=Ye,kt=cn)},setOp:function(ue,Ye,cn){(ye!==ue||Me!==Ye||ge!==cn)&&(s.stencilOp(ue,Ye,cn),ye=ue,Me=Ye,ge=cn)},setLocked:function(ue){k=ue},setClear:function(ue){$e!==ue&&(s.clearStencil(ue),$e=ue)},reset:function(){k=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,ge=null,$e=null}}}const r=new i,c=new o,l=new a,h=new WeakMap,f=new WeakMap;let p={},g={},v=new WeakMap,_=[],u=null,d=!1,E=null,M=null,w=null,O=null,C=null,L=null,X=null,b=new yt(0,0,0),R=0,W=!1,q=null,tt=null,F=null,Y=null,K=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,st=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(ot)[1]),it=st>=1):ot.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),it=st>=2);let ut=null,pt={};const J=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),Et=new Oe().fromArray(J),Tt=new Oe().fromArray(at);function Ot(k,Mt,xt,Ht){const kt=new Uint8Array(4),ye=s.createTexture();s.bindTexture(k,ye),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<xt;Me++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(Mt,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Mt+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return ye}const Yt={};Yt[s.TEXTURE_2D]=Ot(s.TEXTURE_2D,s.TEXTURE_2D,1),Yt[s.TEXTURE_CUBE_MAP]=Ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Yt[s.TEXTURE_2D_ARRAY]=Ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Yt[s.TEXTURE_3D]=Ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(s.DEPTH_TEST),c.setFunc(Pr),Zt(!1),D(el),qt(s.CULL_FACE),Ct(Ai);function qt(k){p[k]!==!0&&(s.enable(k),p[k]=!0)}function Ft(k){p[k]!==!1&&(s.disable(k),p[k]=!1)}function he(k,Mt){return g[k]!==Mt?(s.bindFramebuffer(k,Mt),g[k]=Mt,n&&(k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Mt),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function Z(k,Mt){let xt=_,Ht=!1;if(k)if(xt=v.get(Mt),xt===void 0&&(xt=[],v.set(Mt,xt)),k.isWebGLMultipleRenderTargets){const kt=k.texture;if(xt.length!==kt.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Me=kt.length;ye<Me;ye++)xt[ye]=s.COLOR_ATTACHMENT0+ye;xt.length=kt.length,Ht=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,Ht=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,Ht=!0);Ht&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function ve(k){return u!==k?(s.useProgram(k),u=k,!0):!1}const Bt={[Xi]:s.FUNC_ADD,[Tu]:s.FUNC_SUBTRACT,[Cu]:s.FUNC_REVERSE_SUBTRACT};if(n)Bt[ol]=s.MIN,Bt[rl]=s.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(Bt[ol]=k.MIN_EXT,Bt[rl]=k.MAX_EXT)}const Xt={[Ru]:s.ZERO,[Pu]:s.ONE,[Lu]:s.SRC_COLOR,[gc]:s.SRC_ALPHA,[Bu]:s.SRC_ALPHA_SATURATE,[Nu]:s.DST_COLOR,[Du]:s.DST_ALPHA,[Iu]:s.ONE_MINUS_SRC_COLOR,[vc]:s.ONE_MINUS_SRC_ALPHA,[Uu]:s.ONE_MINUS_DST_COLOR,[Ou]:s.ONE_MINUS_DST_ALPHA,[ku]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[zu]:s.CONSTANT_ALPHA,[Hu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(k,Mt,xt,Ht,kt,ye,Me,ge,$e,ue){if(k===Ai){d===!0&&(Ft(s.BLEND),d=!1);return}if(d===!1&&(qt(s.BLEND),d=!0),k!==Au){if(k!==E||ue!==W){if((M!==Xi||C!==Xi)&&(s.blendEquation(s.FUNC_ADD),M=Xi,C=Xi),ue)switch(k){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nl:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,O=null,L=null,X=null,b.set(0,0,0),R=0,E=k,W=ue}return}kt=kt||Mt,ye=ye||xt,Me=Me||Ht,(Mt!==M||kt!==C)&&(s.blendEquationSeparate(Bt[Mt],Bt[kt]),M=Mt,C=kt),(xt!==w||Ht!==O||ye!==L||Me!==X)&&(s.blendFuncSeparate(Xt[xt],Xt[Ht],Xt[ye],Xt[Me]),w=xt,O=Ht,L=ye,X=Me),(ge.equals(b)===!1||$e!==R)&&(s.blendColor(ge.r,ge.g,ge.b,$e),b.copy(ge),R=$e),E=k,W=!1}function xe(k,Mt){k.side===Zn?Ft(s.CULL_FACE):qt(s.CULL_FACE);let xt=k.side===rn;Mt&&(xt=!xt),Zt(xt),k.blending===Us&&k.transparent===!1?Ct(Ai):Ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ht=k.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(k){q!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),q=k)}function D(k){k!==bu?(qt(s.CULL_FACE),k!==tt&&(k===el?s.cullFace(s.BACK):k===Su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),tt=k}function T(k){k!==F&&(it&&s.lineWidth(k),F=k)}function j(k,Mt,xt){k?(qt(s.POLYGON_OFFSET_FILL),(Y!==Mt||K!==xt)&&(s.polygonOffset(Mt,xt),Y=Mt,K=xt)):Ft(s.POLYGON_OFFSET_FILL)}function ht(k){k?qt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function lt(k){k===void 0&&(k=s.TEXTURE0+Q-1),ut!==k&&(s.activeTexture(k),ut=k)}function dt(k,Mt,xt){xt===void 0&&(ut===null?xt=s.TEXTURE0+Q-1:xt=ut);let Ht=pt[xt];Ht===void 0&&(Ht={type:void 0,texture:void 0},pt[xt]=Ht),(Ht.type!==k||Ht.texture!==Mt)&&(ut!==xt&&(s.activeTexture(xt),ut=xt),s.bindTexture(k,Mt||Yt[k]),Ht.type=k,Ht.texture=Mt)}function Lt(){const k=pt[ut];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(k){Et.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Et.copy(k))}function fe(k){Tt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Re(k,Mt){let xt=f.get(Mt);xt===void 0&&(xt=new WeakMap,f.set(Mt,xt));let Ht=xt.get(k);Ht===void 0&&(Ht=s.getUniformBlockIndex(Mt,k.name),xt.set(k,Ht))}function Kt(k,Mt){const Ht=f.get(Mt).get(k);h.get(Mt)!==Ht&&(s.uniformBlockBinding(Mt,Ht,k.__bindingPointIndex),h.set(Mt,Ht))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ut=null,pt={},g={},v=new WeakMap,_=[],u=null,d=!1,E=null,M=null,w=null,O=null,C=null,L=null,X=null,b=new yt(0,0,0),R=0,W=!1,q=null,tt=null,F=null,Y=null,K=null,Et.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:qt,disable:Ft,bindFramebuffer:he,drawBuffers:Z,useProgram:ve,setBlending:Ct,setMaterial:xe,setFlipSided:Zt,setCullFace:D,setLineWidth:T,setPolygonOffset:j,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Lt,compressedTexImage2D:_t,compressedTexImage3D:St,texImage2D:Rt,texImage3D:wt,updateUBOMapping:Re,uniformBlockBinding:Kt,texStorage2D:ne,texStorage3D:Wt,texSubImage2D:zt,texSubImage3D:jt,compressedTexSubImage2D:rt,compressedTexSubImage3D:_e,scissor:$t,viewport:fe,reset:ft}}function bv(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,T){return g?new OffscreenCanvas(D,T):Nr("canvas")}function _(D,T,j,ht){let lt=1;if((D.width>ht||D.height>ht)&&(lt=ht/Math.max(D.width,D.height)),lt<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const dt=T?wc:Math.floor,Lt=dt(lt*D.width),_t=dt(lt*D.height);f===void 0&&(f=v(Lt,_t));const St=j?v(Lt,_t):f;return St.width=Lt,St.height=_t,St.getContext("2d").drawImage(D,0,0,Lt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Lt+"x"+_t+")."),St}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function u(D){return Nl(D.width)&&Nl(D.height)}function d(D){return r?!1:D.wrapS!==bn||D.wrapT!==bn||D.minFilter!==Be&&D.minFilter!==Rn}function E(D,T){return D.generateMipmaps&&T&&D.minFilter!==Be&&D.minFilter!==Rn}function M(D){s.generateMipmap(D)}function w(D,T,j,ht,lt=!1){if(r===!1)return T;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt=T;if(T===s.RED&&(j===s.FLOAT&&(dt=s.R32F),j===s.HALF_FLOAT&&(dt=s.R16F),j===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(dt=s.R8UI),j===s.UNSIGNED_SHORT&&(dt=s.R16UI),j===s.UNSIGNED_INT&&(dt=s.R32UI),j===s.BYTE&&(dt=s.R8I),j===s.SHORT&&(dt=s.R16I),j===s.INT&&(dt=s.R32I)),T===s.RG&&(j===s.FLOAT&&(dt=s.RG32F),j===s.HALF_FLOAT&&(dt=s.RG16F),j===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RGBA){const Lt=lt?Lr:Ee.getTransfer(ht);j===s.FLOAT&&(dt=s.RGBA32F),j===s.HALF_FLOAT&&(dt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(dt=Lt===Le?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function O(D,T,j){return E(D,j)===!0||D.isFramebufferTexture&&D.minFilter!==Be&&D.minFilter!==Rn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){return D===Be||D===al||D===ha?s.NEAREST:s.LINEAR}function L(D){const T=D.target;T.removeEventListener("dispose",L),b(T),T.isVideoTexture&&h.delete(T)}function X(D){const T=D.target;T.removeEventListener("dispose",X),W(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const j=D.source,ht=p.get(j);if(ht){const lt=ht[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(D),Object.keys(ht).length===0&&p.delete(j)}n.remove(D)}function R(D){const T=n.get(D);s.deleteTexture(T.__webglTexture);const j=D.source,ht=p.get(j);delete ht[T.__cacheKey],a.memory.textures--}function W(D){const T=D.texture,j=n.get(D),ht=n.get(T);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(j.__webglFramebuffer[lt]))for(let dt=0;dt<j.__webglFramebuffer[lt].length;dt++)s.deleteFramebuffer(j.__webglFramebuffer[lt][dt]);else s.deleteFramebuffer(j.__webglFramebuffer[lt]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[lt])}else{if(Array.isArray(j.__webglFramebuffer))for(let lt=0;lt<j.__webglFramebuffer.length;lt++)s.deleteFramebuffer(j.__webglFramebuffer[lt]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let lt=0;lt<j.__webglColorRenderbuffer.length;lt++)j.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[lt]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let lt=0,dt=T.length;lt<dt;lt++){const Lt=n.get(T[lt]);Lt.__webglTexture&&(s.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(T[lt])}n.remove(T),n.remove(D)}let q=0;function tt(){q=0}function F(){const D=q;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),q+=1,D}function Y(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function K(D,T){const j=n.get(D);if(D.isVideoTexture&&xe(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(j,D,T);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function Q(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){Et(j,D,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function it(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){Et(j,D,T);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function st(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){Tt(j,D,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const ot={[yc]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Mc]:s.MIRRORED_REPEAT},ut={[Be]:s.NEAREST,[al]:s.NEAREST_MIPMAP_NEAREST,[ha]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[sf]:s.LINEAR_MIPMAP_NEAREST,[xo]:s.LINEAR_MIPMAP_LINEAR},pt={[gf]:s.NEVER,[Ef]:s.ALWAYS,[vf]:s.LESS,[Ld]:s.LEQUAL,[_f]:s.EQUAL,[Mf]:s.GEQUAL,[xf]:s.GREATER,[yf]:s.NOTEQUAL};function J(D,T,j){if(j?(s.texParameteri(D,s.TEXTURE_WRAP_S,ot[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ot[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ot[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ut[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ut[T.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==bn||T.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,C(T.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==Be&&T.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Be||T.minFilter!==ha&&T.minFilter!==xo||T.type===Si&&t.has("OES_texture_float_linear")===!1||r===!1&&T.type===yo&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(D,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function at(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const ht=T.source;let lt=p.get(ht);lt===void 0&&(lt={},p.set(ht,lt));const dt=Y(T);if(dt!==D.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),lt[dt].usedTimes++;const Lt=lt[D.__cacheKey];Lt!==void 0&&(lt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&R(T)),D.__cacheKey=dt,D.__webglTexture=lt[dt].texture}return j}function Et(D,T,j){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const lt=at(D,T),dt=T.source;e.bindTexture(ht,D.__webglTexture,s.TEXTURE0+j);const Lt=n.get(dt);if(dt.version!==Lt.__version||lt===!0){e.activeTexture(s.TEXTURE0+j);const _t=Ee.getPrimaries(Ee.workingColorSpace),St=T.colorSpace===Pn?null:Ee.getPrimaries(T.colorSpace),zt=T.colorSpace===Pn||_t===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const jt=d(T)&&u(T.image)===!1;let rt=_(T.image,jt,!1,i.maxTextureSize);rt=Zt(T,rt);const _e=u(rt)||r,ne=o.convert(T.format,T.colorSpace);let Wt=o.convert(T.type),Rt=w(T.internalFormat,ne,Wt,T.colorSpace,T.isVideoTexture);J(ht,T,_e);let wt;const $t=T.mipmaps,fe=r&&T.isVideoTexture!==!0&&Rt!==Cd,Re=Lt.__version===void 0||lt===!0,Kt=O(T,rt,_e);if(T.isDepthTexture)Rt=s.DEPTH_COMPONENT,r?T.type===Si?Rt=s.DEPTH_COMPONENT32F:T.type===bi?Rt=s.DEPTH_COMPONENT24:T.type===$i?Rt=s.DEPTH24_STENCIL8:Rt=s.DEPTH_COMPONENT16:T.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ki&&Rt===s.DEPTH_COMPONENT&&T.type!==Wc&&T.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=bi,Wt=o.convert(T.type)),T.format===Hs&&Rt===s.DEPTH_COMPONENT&&(Rt=s.DEPTH_STENCIL,T.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=$i,Wt=o.convert(T.type))),Re&&(fe?e.texStorage2D(s.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ne,Wt,null));else if(T.isDataTexture)if($t.length>0&&_e){fe&&Re&&e.texStorage2D(s.TEXTURE_2D,Kt,Rt,$t[0].width,$t[0].height);for(let ft=0,k=$t.length;ft<k;ft++)wt=$t[ft],fe?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,Wt,wt.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,wt.width,wt.height,0,ne,Wt,wt.data);T.generateMipmaps=!1}else fe?(Re&&e.texStorage2D(s.TEXTURE_2D,Kt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,ne,Wt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ne,Wt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Kt,Rt,$t[0].width,$t[0].height,rt.depth);for(let ft=0,k=$t.length;ft<k;ft++)wt=$t[ft],T.format!==zn?ne!==null?fe?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,rt.depth,ne,wt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,wt.width,wt.height,rt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,rt.depth,ne,Wt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,wt.width,wt.height,rt.depth,0,ne,Wt,wt.data)}else{fe&&Re&&e.texStorage2D(s.TEXTURE_2D,Kt,Rt,$t[0].width,$t[0].height);for(let ft=0,k=$t.length;ft<k;ft++)wt=$t[ft],T.format!==zn?ne!==null?fe?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Rt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,Wt,wt.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,wt.width,wt.height,0,ne,Wt,wt.data)}else if(T.isDataArrayTexture)fe?(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Kt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ne,Wt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,ne,Wt,rt.data);else if(T.isData3DTexture)fe?(Re&&e.texStorage3D(s.TEXTURE_3D,Kt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ne,Wt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,ne,Wt,rt.data);else if(T.isFramebufferTexture){if(Re)if(fe)e.texStorage2D(s.TEXTURE_2D,Kt,Rt,rt.width,rt.height);else{let ft=rt.width,k=rt.height;for(let Mt=0;Mt<Kt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Rt,ft,k,0,ne,Wt,null),ft>>=1,k>>=1}}else if($t.length>0&&_e){fe&&Re&&e.texStorage2D(s.TEXTURE_2D,Kt,Rt,$t[0].width,$t[0].height);for(let ft=0,k=$t.length;ft<k;ft++)wt=$t[ft],fe?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,ne,Wt,wt):e.texImage2D(s.TEXTURE_2D,ft,Rt,ne,Wt,wt);T.generateMipmaps=!1}else fe?(Re&&e.texStorage2D(s.TEXTURE_2D,Kt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,Wt,rt)):e.texImage2D(s.TEXTURE_2D,0,Rt,ne,Wt,rt);E(T,_e)&&M(ht),Lt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Tt(D,T,j){if(T.image.length!==6)return;const ht=at(D,T),lt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(s.TEXTURE0+j);const Lt=Ee.getPrimaries(Ee.workingColorSpace),_t=T.colorSpace===Pn?null:Ee.getPrimaries(T.colorSpace),St=T.colorSpace===Pn||Lt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,jt=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!zt&&!jt?rt[ft]=_(T.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=jt?T.image[ft].image:T.image[ft],rt[ft]=Zt(T,rt[ft]);const _e=rt[0],ne=u(_e)||r,Wt=o.convert(T.format,T.colorSpace),Rt=o.convert(T.type),wt=w(T.internalFormat,Wt,Rt,T.colorSpace),$t=r&&T.isVideoTexture!==!0,fe=dt.__version===void 0||ht===!0;let Re=O(T,_e,ne);J(s.TEXTURE_CUBE_MAP,T,ne);let Kt;if(zt){$t&&fe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,wt,_e.width,_e.height);for(let ft=0;ft<6;ft++){Kt=rt[ft].mipmaps;for(let k=0;k<Kt.length;k++){const Mt=Kt[k];T.format!==zn?Wt!==null?$t?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,0,0,Mt.width,Mt.height,Wt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,0,0,Mt.width,Mt.height,Wt,Rt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,wt,Mt.width,Mt.height,0,Wt,Rt,Mt.data)}}}else{Kt=T.mipmaps,$t&&fe&&(Kt.length>0&&Re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,wt,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(jt){$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Wt,Rt,rt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,rt[ft].width,rt[ft].height,0,Wt,Rt,rt[ft].data);for(let k=0;k<Kt.length;k++){const xt=Kt[k].image[ft].image;$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,0,0,xt.width,xt.height,Wt,Rt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,wt,xt.width,xt.height,0,Wt,Rt,xt.data)}}else{$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Wt,Rt,rt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,Wt,Rt,rt[ft]);for(let k=0;k<Kt.length;k++){const Mt=Kt[k];$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,0,0,Wt,Rt,Mt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,wt,Wt,Rt,Mt.image[ft])}}}E(T,ne)&&M(s.TEXTURE_CUBE_MAP),dt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ot(D,T,j,ht,lt,dt){const Lt=o.convert(j.format,j.colorSpace),_t=o.convert(j.type),St=w(j.internalFormat,Lt,_t,j.colorSpace);if(!n.get(T).__hasExternalTextures){const jt=Math.max(1,T.width>>dt),rt=Math.max(1,T.height>>dt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,St,jt,rt,T.depth,0,Lt,_t,null):e.texImage2D(lt,dt,St,jt,rt,0,Lt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,0,Xt(T)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let ht=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(j||Ct(T)){const lt=T.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Si?ht=s.DEPTH_COMPONENT32F:lt.type===bi&&(ht=s.DEPTH_COMPONENT24));const dt=Xt(T);Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ht,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ht,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const ht=Xt(T);j&&Ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,T.width,T.height):Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const ht=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Lt=o.convert(dt.format,dt.colorSpace),_t=o.convert(dt.type),St=w(dt.internalFormat,Lt,_t,dt.colorSpace),zt=Xt(T);j&&Ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,St,T.width,T.height):Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,St,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,St,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const ht=n.get(T.depthTexture).__webglTexture,lt=Xt(T);if(T.depthTexture.format===Ki)Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Hs)Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const T=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");qt(T.__webglFramebuffer,D)}else if(j){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]=s.createRenderbuffer(),Yt(T.__webglDepthbuffer[ht],D,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Yt(T.__webglDepthbuffer,D,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(D,T,j){const ht=n.get(D);T!==void 0&&Ot(ht.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ft(D)}function Z(D){const T=D.texture,j=n.get(D),ht=n.get(T);D.addEventListener("dispose",X),D.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,a.memory.textures++);const lt=D.isWebGLCubeRenderTarget===!0,dt=D.isWebGLMultipleRenderTargets===!0,Lt=u(D)||r;if(lt){j.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(r&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[_t]=[];for(let St=0;St<T.mipmaps.length;St++)j.__webglFramebuffer[_t][St]=s.createFramebuffer()}else j.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(r&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let _t=0;_t<T.mipmaps.length;_t++)j.__webglFramebuffer[_t]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(dt)if(i.drawBuffers){const _t=D.texture;for(let St=0,zt=_t.length;St<zt;St++){const jt=n.get(_t[St]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&D.samples>0&&Ct(D)===!1){const _t=dt?T:[T];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let St=0;St<_t.length;St++){const zt=_t[St];j.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[St]);const jt=o.convert(zt.format,zt.colorSpace),rt=o.convert(zt.type),_e=w(zt.internalFormat,jt,rt,zt.colorSpace,D.isXRRenderTarget===!0),ne=Xt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,_e,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,j.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(j.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),J(s.TEXTURE_CUBE_MAP,T,Lt);for(let _t=0;_t<6;_t++)if(r&&T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Ot(j.__webglFramebuffer[_t][St],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else Ot(j.__webglFramebuffer[_t],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);E(T,Lt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const _t=D.texture;for(let St=0,zt=_t.length;St<zt;St++){const jt=_t[St],rt=n.get(jt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),J(s.TEXTURE_2D,jt,Lt),Ot(j.__webglFramebuffer,D,jt,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),E(jt,Lt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(r?_t=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,ht.__webglTexture),J(_t,T,Lt),r&&T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Ot(j.__webglFramebuffer[St],D,T,s.COLOR_ATTACHMENT0,_t,St);else Ot(j.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,_t,0);E(T,Lt)&&M(_t),e.unbindTexture()}D.depthBuffer&&Ft(D)}function ve(D){const T=u(D)||r,j=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ht=0,lt=j.length;ht<lt;ht++){const dt=j[ht];if(E(dt,T)){const Lt=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=n.get(dt).__webglTexture;e.bindTexture(Lt,_t),M(Lt),e.unbindTexture()}}}function Bt(D){if(r&&D.samples>0&&Ct(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],j=D.width,ht=D.height;let lt=s.COLOR_BUFFER_BIT;const dt=[],Lt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(D),St=D.isWebGLMultipleRenderTargets===!0;if(St)for(let zt=0;zt<T.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){dt.push(s.COLOR_ATTACHMENT0+zt),D.depthBuffer&&dt.push(Lt);const jt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(jt===!1&&(D.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),St&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[zt]),jt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Lt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Lt])),St){const rt=n.get(T[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,j,ht,0,0,j,ht,lt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let zt=0;zt<T.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[zt]);const jt=n.get(T[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function Xt(D){return Math.min(i.maxSamples,D.samples)}function Ct(D){const T=n.get(D);return r&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(D){const T=a.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Zt(D,T){const j=D.colorSpace,ht=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===bc||j!==hi&&j!==Pn&&(Ee.getTransfer(j)===Le?r===!1?t.has("EXT_sRGB")===!0&&ht===zn?(D.format=bc,D.minFilter=Rn,D.generateMipmaps=!1):T=Dd.sRGBToLinear(T):(ht!==zn||lt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=he,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ct}function Sv(s,t,e){const n=e.isWebGL2;function i(o,a=Pn){let r;const c=Ee.getTransfer(a);if(o===Ti)return s.UNSIGNED_BYTE;if(o===bd)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Sd)return s.UNSIGNED_SHORT_5_5_5_1;if(o===of)return s.BYTE;if(o===rf)return s.SHORT;if(o===Wc)return s.UNSIGNED_SHORT;if(o===Ed)return s.INT;if(o===bi)return s.UNSIGNED_INT;if(o===Si)return s.FLOAT;if(o===yo)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===af)return s.ALPHA;if(o===zn)return s.RGBA;if(o===cf)return s.LUMINANCE;if(o===lf)return s.LUMINANCE_ALPHA;if(o===Ki)return s.DEPTH_COMPONENT;if(o===Hs)return s.DEPTH_STENCIL;if(o===bc)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===hf)return s.RED;if(o===wd)return s.RED_INTEGER;if(o===df)return s.RG;if(o===Ad)return s.RG_INTEGER;if(o===Td)return s.RGBA_INTEGER;if(o===da||o===ua||o===fa||o===pa)if(c===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===cl||o===ll||o===hl||o===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Cd)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ul||o===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===ul)return c===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===fl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===pl||o===ml||o===gl||o===vl||o===_l||o===xl||o===yl||o===Ml||o===El||o===bl||o===Sl||o===wl||o===Al||o===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===pl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ml)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===gl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===vl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_l)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===xl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===yl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ml)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===El)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===bl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Sl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Al)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===ma||o===Cl||o===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===ma)return c===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===uf||o===Pl||o===Ll||o===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===$i?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class wv extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const u=e.getJointPose(_,n),d=this._getHandJoint(l,_);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&p>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Tv extends qs{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,l=null,h=null,f=null,p=null,g=null,v=null;const _=e.getContextAttributes();let u=null,d=null;const E=[],M=[],w=new ee;let O=null;const C=new En;C.layers.enable(1),C.viewport=new Oe;const L=new En;L.layers.enable(2),L.viewport=new Oe;const X=[C,L],b=new wv;b.layers.enable(1),b.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=E[J];return at===void 0&&(at=new Fa,E[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=E[J];return at===void 0&&(at=new Fa,E[J]=at),at.getGripSpace()},this.getHand=function(J){let at=E[J];return at===void 0&&(at=new Fa,E[J]=at),at.getHandSpace()};function q(J){const at=M.indexOf(J.inputSource);if(at===-1)return;const Et=E[at];Et!==void 0&&(Et.update(J.inputSource,J.frame,l||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function tt(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",F);for(let J=0;J<E.length;J++){const at=M[J];at!==null&&(M[J]=null,E[J].disconnect(at))}R=null,W=null,t.setRenderTarget(u),g=null,p=null,f=null,i=null,d=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new Qi(g.framebufferWidth,g.framebufferHeight,{format:zn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,Et=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Hs:Ki,Et=_.stencil?$i:bi);const Ot={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:o};f=new XRWebGLBinding(i,e),p=f.createProjectionLayer(Ot),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Qi(p.textureWidth,p.textureHeight,{format:zn,type:Ti,depthTexture:new Wd(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Yt=t.properties.get(d);Yt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(J){for(let at=0;at<J.removed.length;at++){const Et=J.removed[at],Tt=M.indexOf(Et);Tt>=0&&(M[Tt]=null,E[Tt].disconnect(Et))}for(let at=0;at<J.added.length;at++){const Et=J.added[at];let Tt=M.indexOf(Et);if(Tt===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=M.length){M.push(Et),Tt=Yt;break}else if(M[Yt]===null){M[Yt]=Et,Tt=Yt;break}if(Tt===-1)break}const Ot=E[Tt];Ot&&Ot.connect(Et)}}const Y=new B,K=new B;function Q(J,at,Et){Y.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const Tt=Y.distanceTo(K),Ot=at.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,qt=Ot[14]/(Ot[10]-1),Ft=Ot[14]/(Ot[10]+1),he=(Ot[9]+1)/Ot[5],Z=(Ot[9]-1)/Ot[5],ve=(Ot[8]-1)/Ot[0],Bt=(Yt[8]+1)/Yt[0],Xt=qt*ve,Ct=qt*Bt,xe=Tt/(-ve+Bt),Zt=xe*-ve;at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Zt),J.translateZ(xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const D=qt+xe,T=Ft+xe,j=Xt-Zt,ht=Ct+(Tt-Zt),lt=he*Ft/T*D,dt=Z*Ft/T*D;J.projectionMatrix.makePerspective(j,ht,lt,dt,D,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function it(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;b.near=L.near=C.near=J.near,b.far=L.far=C.far=J.far,(R!==b.near||W!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,W=b.far);const at=J.parent,Et=b.cameras;it(b,at);for(let Tt=0;Tt<Et.length;Tt++)it(Et[Tt],at);Et.length===2?Q(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),st(J,b,at)};function st(J,at,Et){Et===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)};let ot=null;function ut(J,at){if(h=at.getViewerPose(l||a),v=at,h!==null){const Et=h.views;g!==null&&(t.setRenderTargetFramebuffer(d,g.framebuffer),t.setRenderTarget(d));let Tt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,Tt=!0);for(let Ot=0;Ot<Et.length;Ot++){const Yt=Et[Ot];let qt=null;if(g!==null)qt=g.getViewport(Yt);else{const he=f.getViewSubImage(p,Yt);qt=he.viewport,Ot===0&&(t.setRenderTargetTextures(d,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(d))}let Ft=X[Ot];Ft===void 0&&(Ft=new En,Ft.layers.enable(Ot),Ft.viewport=new Oe,X[Ot]=Ft),Ft.matrix.fromArray(Yt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Yt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(qt.x,qt.y,qt.width,qt.height),Ot===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Tt===!0&&b.cameras.push(Ft)}}for(let Et=0;Et<E.length;Et++){const Tt=M[Et],Ot=E[Et];Tt!==null&&Ot!==void 0&&Ot.update(Tt,at,l||a)}ot&&ot(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),v=null}const pt=new Gd;pt.setAnimationLoop(ut),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}}function Cv(s,t){function e(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function n(u,d){d.color.getRGB(u.fogColor.value,Fd(s)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function i(u,d,E,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(u,d):d.isMeshToonMaterial?(o(u,d),f(u,d)):d.isMeshPhongMaterial?(o(u,d),h(u,d)):d.isMeshStandardMaterial?(o(u,d),p(u,d),d.isMeshPhysicalMaterial&&g(u,d,w)):d.isMeshMatcapMaterial?(o(u,d),v(u,d)):d.isMeshDepthMaterial?o(u,d):d.isMeshDistanceMaterial?(o(u,d),_(u,d)):d.isMeshNormalMaterial?o(u,d):d.isLineBasicMaterial?(a(u,d),d.isLineDashedMaterial&&r(u,d)):d.isPointsMaterial?c(u,d,E,M):d.isSpriteMaterial?l(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,e(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===rn&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,e(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===rn&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,e(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,e(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(u.envMap.value=E,u.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,u.lightMapTransform)}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,u.aoMapTransform))}function a(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform))}function r(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function c(u,d,E,M){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*E,u.scale.value=M*.5,d.map&&(u.map.value=d.map,e(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function l(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,u.roughnessMapTransform)),t.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function g(u,d,E){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,d){d.matcap&&(u.matcap.value=d.matcap)}function _(u,d){const E=t.get(d).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rv(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function l(E,M){let w=i[E.id];w===void 0&&(v(E),w=h(E),i[E.id]=w,E.addEventListener("dispose",u));const O=M.program;n.updateUBOMapping(E,O);const C=t.render.frame;o[E.id]!==C&&(p(E),o[E.id]=C)}function h(E){const M=f();E.__bindingPointIndex=M;const w=s.createBuffer(),O=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,O,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function f(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=i[E.id],w=E.uniforms,O=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let C=0,L=w.length;C<L;C++){const X=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,R=X.length;b<R;b++){const W=X[b];if(g(W,C,b,O)===!0){const q=W.__offset,tt=Array.isArray(W.value)?W.value:[W.value];let F=0;for(let Y=0;Y<tt.length;Y++){const K=tt[Y],Q=_(K);typeof K=="number"||typeof K=="boolean"?(W.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,q+F,W.__data)):K.isMatrix3?(W.__data[0]=K.elements[0],W.__data[1]=K.elements[1],W.__data[2]=K.elements[2],W.__data[3]=0,W.__data[4]=K.elements[3],W.__data[5]=K.elements[4],W.__data[6]=K.elements[5],W.__data[7]=0,W.__data[8]=K.elements[6],W.__data[9]=K.elements[7],W.__data[10]=K.elements[8],W.__data[11]=0):(K.toArray(W.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,W.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(E,M,w,O){const C=E.value,L=M+"_"+w;if(O[L]===void 0)return typeof C=="number"||typeof C=="boolean"?O[L]=C:O[L]=C.clone(),!0;{const X=O[L];if(typeof C=="number"||typeof C=="boolean"){if(X!==C)return O[L]=C,!0}else if(X.equals(C)===!1)return X.copy(C),!0}return!1}function v(E){const M=E.uniforms;let w=0;const O=16;for(let L=0,X=M.length;L<X;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let R=0,W=b.length;R<W;R++){const q=b[R],tt=Array.isArray(q.value)?q.value:[q.value];for(let F=0,Y=tt.length;F<Y;F++){const K=tt[F],Q=_(K),it=w%O;it!==0&&O-it<Q.boundary&&(w+=O-it),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=Q.storage}}}const C=w%O;return C>0&&(w+=O-C),E.__size=w,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function u(E){const M=E.target;M.removeEventListener("dispose",u);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},o={}}return{bind:c,update:l,dispose:d}}class $d{constructor(t={}){const{canvas:e=wf(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,u=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let w=!1,O=0,C=0,L=null,X=-1,b=null;const R=new Oe,W=new Oe;let q=null;const tt=new yt(0);let F=0,Y=e.width,K=e.height,Q=1,it=null,st=null;const ot=new Oe(0,0,Y,K),ut=new Oe(0,0,Y,K);let pt=!1;const J=new qc;let at=!1,Et=!1,Tt=null;const Ot=new Ae,Yt=new ee,qt=new B,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return L===null?Q:1}let Z=n;function ve(A,N){for(let V=0;V<A.length;V++){const z=A[V],G=e.getContext(z,N);if(G!==null)return G}return null}try{const A={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),Z===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),Z=ve(N,A),Z===null)throw ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Bt,Xt,Ct,xe,Zt,D,T,j,ht,lt,dt,Lt,_t,St,zt,jt,rt,_e,ne,Wt,Rt,wt,$t,fe;function Re(){Bt=new F0(Z),Xt=new D0(Z,Bt,t),Bt.init(Xt),wt=new Sv(Z,Bt,Xt),Ct=new Ev(Z,Bt,Xt),xe=new G0(Z),Zt=new cv,D=new bv(Z,Bt,Ct,Zt,Xt,wt,xe),T=new N0(M),j=new k0(M),ht=new $f(Z,Xt),$t=new L0(Z,Bt,ht,Xt),lt=new z0(Z,ht,xe,$t),dt=new Y0(Z,lt,ht,xe),ne=new X0(Z,Xt,D),jt=new O0(Zt),Lt=new av(M,T,j,Bt,Xt,$t,jt),_t=new Cv(M,Zt),St=new hv,zt=new gv(Bt,Xt),_e=new P0(M,T,j,Ct,dt,p,c),rt=new Mv(M,dt,Xt),fe=new Rv(Z,xe,Xt,Ct),Wt=new I0(Z,Bt,xe,Xt),Rt=new H0(Z,Bt,xe,Xt),xe.programs=Lt.programs,M.capabilities=Xt,M.extensions=Bt,M.properties=Zt,M.renderLists=St,M.shadowMap=rt,M.state=Ct,M.info=xe}Re();const Kt=new Tv(M,Z);this.xr=Kt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(Y,K,!1))},this.getSize=function(A){return A.set(Y,K)},this.setSize=function(A,N,V=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,K=N,e.width=Math.floor(A*Q),e.height=Math.floor(N*Q),V===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(Y*Q,K*Q).floor()},this.setDrawingBufferSize=function(A,N,V){Y=A,K=N,Q=V,e.width=Math.floor(A*V),e.height=Math.floor(N*V),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,N,V,z){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,N,V,z),Ct.viewport(R.copy(ot).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,N,V,z){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,N,V,z),Ct.scissor(W.copy(ut).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){Ct.setScissorTest(pt=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(A=!0,N=!0,V=!0){let z=0;if(A){let G=!1;if(L!==null){const nt=L.texture.format;G=nt===Td||nt===Ad||nt===wd}if(G){const nt=L.texture.type,ct=nt===Ti||nt===bi||nt===Wc||nt===$i||nt===bd||nt===Sd,$=_e.getClearColor(),mt=_e.getClearAlpha(),Ut=$.r,bt=$.g,gt=$.b;ct?(g[0]=Ut,g[1]=bt,g[2]=gt,g[3]=mt,Z.clearBufferuiv(Z.COLOR,0,g)):(v[0]=Ut,v[1]=bt,v[2]=gt,v[3]=mt,Z.clearBufferiv(Z.COLOR,0,v))}else z|=Z.COLOR_BUFFER_BIT}N&&(z|=Z.DEPTH_BUFFER_BIT),V&&(z|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),zt.dispose(),Zt.dispose(),T.dispose(),j.dispose(),dt.dispose(),$t.dispose(),fe.dispose(),Lt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",$e),Kt.removeEventListener("sessionend",ue),Tt&&(Tt.dispose(),Tt=null),Ye.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=xe.autoReset,N=rt.enabled,V=rt.autoUpdate,z=rt.needsUpdate,G=rt.type;Re(),xe.autoReset=A,rt.enabled=N,rt.autoUpdate=V,rt.needsUpdate=z,rt.type=G}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const N=A.target;N.removeEventListener("dispose",xt),Ht(N)}function Ht(A){kt(A),Zt.remove(A)}function kt(A){const N=Zt.get(A).programs;N!==void 0&&(N.forEach(function(V){Lt.releaseProgram(V)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,V,z,G,nt){N===null&&(N=Ft);const ct=G.isMesh&&G.matrixWorld.determinant()<0,$=Dt(A,N,V,z,G);Ct.setMaterial(z,ct);let mt=V.index,Ut=1;if(z.wireframe===!0){if(mt=lt.getWireframeAttribute(V),mt===void 0)return;Ut=2}const bt=V.drawRange,gt=V.attributes.position;let Nt=bt.start*Ut,Fe=(bt.start+bt.count)*Ut;nt!==null&&(Nt=Math.max(Nt,nt.start*Ut),Fe=Math.min(Fe,(nt.start+nt.count)*Ut)),mt!==null?(Nt=Math.max(Nt,0),Fe=Math.min(Fe,mt.count)):gt!=null&&(Nt=Math.max(Nt,0),Fe=Math.min(Fe,gt.count));const be=Fe-Nt;if(be<0||be===1/0)return;$t.setup(G,z,$,V,mt);let He,Jt=Wt;if(mt!==null&&(He=ht.get(mt),Jt=Rt,Jt.setIndex(He)),G.isMesh)z.wireframe===!0?(Ct.setLineWidth(z.wireframeLinewidth*he()),Jt.setMode(Z.LINES)):Jt.setMode(Z.TRIANGLES);else if(G.isLine){let It=z.linewidth;It===void 0&&(It=1),Ct.setLineWidth(It*he()),G.isLineSegments?Jt.setMode(Z.LINES):G.isLineLoop?Jt.setMode(Z.LINE_LOOP):Jt.setMode(Z.LINE_STRIP)}else G.isPoints?Jt.setMode(Z.POINTS):G.isSprite&&Jt.setMode(Z.TRIANGLES);if(G.isBatchedMesh)Jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Jt.renderInstances(Nt,be,G.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ui=Math.min(V.instanceCount,It);Jt.renderInstances(Nt,be,ui)}else Jt.render(Nt,be)};function ye(A,N,V){A.transparent===!0&&A.side===Zn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,S(A,N,V),A.side=li,A.needsUpdate=!0,S(A,N,V),A.side=Zn):S(A,N,V)}this.compile=function(A,N,V=null){V===null&&(V=A),u=zt.get(V),u.init(),E.push(u),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),A!==V&&A.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights(M._useLegacyLights);const z=new Set;return A.traverse(function(G){const nt=G.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const $=nt[ct];ye($,V,G),z.add($)}else ye(nt,V,G),z.add(nt)}),E.pop(),u=null,z},this.compileAsync=function(A,N,V=null){const z=this.compile(A,N,V);return new Promise(G=>{function nt(){if(z.forEach(function(ct){Zt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){G(A);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Me=null;function ge(A){Me&&Me(A)}function $e(){Ye.stop()}function ue(){Ye.start()}const Ye=new Gd;Ye.setAnimationLoop(ge),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){Me=A,Kt.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},Kt.addEventListener("sessionstart",$e),Kt.addEventListener("sessionend",ue),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(N),N=Kt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,N,L),u=zt.get(A,E.length),u.init(),E.push(u),Ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(Ot),Et=this.localClippingEnabled,at=jt.init(this.clippingPlanes,Et),_=St.get(A,d.length),_.init(),d.push(_),cn(A,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(it,st),this.info.render.frame++,at===!0&&jt.beginShadows();const V=u.state.shadowsArray;if(rt.render(V,A,N),at===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(_,A),u.setupLights(M._useLegacyLights),N.isArrayCamera){const z=N.cameras;for(let G=0,nt=z.length;G<nt;G++){const ct=z[G];Ao(_,A,ct,ct.viewport)}}else Ao(_,A,N);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(M,A,N),$t.resetDefaultState(),X=-1,b=null,E.pop(),E.length>0?u=E[E.length-1]:u=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function cn(A,N,V,z){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){z&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);const ct=dt.update(A),$=A.material;$.visible&&_.push(A,ct,$,V,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const ct=dt.update(A),$=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),qt.copy(ct.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray($)){const mt=ct.groups;for(let Ut=0,bt=mt.length;Ut<bt;Ut++){const gt=mt[Ut],Nt=$[gt.materialIndex];Nt&&Nt.visible&&_.push(A,ct,Nt,V,qt.z,gt)}}else $.visible&&_.push(A,ct,$,V,qt.z,null)}}const nt=A.children;for(let ct=0,$=nt.length;ct<$;ct++)cn(nt[ct],N,V,z)}function Ao(A,N,V,z){const G=A.opaque,nt=A.transmissive,ct=A.transparent;u.setupLightsView(V),at===!0&&jt.setGlobalState(M.clippingPlanes,V),nt.length>0&&x(G,nt,N,V),z&&Ct.viewport(R.copy(z)),G.length>0&&m(G,N,V),nt.length>0&&m(nt,N,V),ct.length>0&&m(ct,N,V),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function x(A,N,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const nt=Xt.isWebGL2;Tt===null&&(Tt=new Qi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?yo:Ti,minFilter:xo,samples:nt?4:0})),M.getDrawingBufferSize(Yt),nt?Tt.setSize(Yt.x,Yt.y):Tt.setSize(wc(Yt.x),wc(Yt.y));const ct=M.getRenderTarget();M.setRenderTarget(Tt),M.getClearColor(tt),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const $=M.toneMapping;M.toneMapping=ci,m(A,V,z),D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt);let mt=!1;for(let Ut=0,bt=N.length;Ut<bt;Ut++){const gt=N[Ut],Nt=gt.object,Fe=gt.geometry,be=gt.material,He=gt.group;if(be.side===Zn&&Nt.layers.test(z.layers)){const Jt=be.side;be.side=rn,be.needsUpdate=!0,y(Nt,V,z,Fe,be,He),be.side=Jt,be.needsUpdate=!0,mt=!0}}mt===!0&&(D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt)),M.setRenderTarget(ct),M.setClearColor(tt,F),M.toneMapping=$}function m(A,N,V){const z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,nt=A.length;G<nt;G++){const ct=A[G],$=ct.object,mt=ct.geometry,Ut=z===null?ct.material:z,bt=ct.group;$.layers.test(V.layers)&&y($,N,V,mt,Ut,bt)}}function y(A,N,V,z,G,nt){A.onBeforeRender(M,N,V,z,G,nt),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,N,V,z,A,nt),G.transparent===!0&&G.side===Zn&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,M.renderBufferDirect(V,N,z,G,A,nt),G.side=li,G.needsUpdate=!0,M.renderBufferDirect(V,N,z,G,A,nt),G.side=Zn):M.renderBufferDirect(V,N,z,G,A,nt),A.onAfterRender(M,N,V,z,G,nt)}function S(A,N,V){N.isScene!==!0&&(N=Ft);const z=Zt.get(A),G=u.state.lights,nt=u.state.shadowsArray,ct=G.state.version,$=Lt.getParameters(A,G.state,nt,N,V),mt=Lt.getProgramCacheKey($);let Ut=z.programs;z.environment=A.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(A.isMeshStandardMaterial?j:T).get(A.envMap||z.environment),Ut===void 0&&(A.addEventListener("dispose",xt),Ut=new Map,z.programs=Ut);let bt=Ut.get(mt);if(bt!==void 0){if(z.currentProgram===bt&&z.lightsStateVersion===ct)return et(A,$),bt}else $.uniforms=Lt.getUniforms(A),A.onBuild(V,$,M),A.onBeforeCompile($,M),bt=Lt.acquireProgram($,mt),Ut.set(mt,bt),z.uniforms=$.uniforms;const gt=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(gt.clippingPlanes=jt.uniform),et(A,$),z.needsLights=ae(A),z.lightsStateVersion=ct,z.needsLights&&(gt.ambientLightColor.value=G.state.ambient,gt.lightProbe.value=G.state.probe,gt.directionalLights.value=G.state.directional,gt.directionalLightShadows.value=G.state.directionalShadow,gt.spotLights.value=G.state.spot,gt.spotLightShadows.value=G.state.spotShadow,gt.rectAreaLights.value=G.state.rectArea,gt.ltc_1.value=G.state.rectAreaLTC1,gt.ltc_2.value=G.state.rectAreaLTC2,gt.pointLights.value=G.state.point,gt.pointLightShadows.value=G.state.pointShadow,gt.hemisphereLights.value=G.state.hemi,gt.directionalShadowMap.value=G.state.directionalShadowMap,gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,gt.spotShadowMap.value=G.state.spotShadowMap,gt.spotLightMatrix.value=G.state.spotLightMatrix,gt.spotLightMap.value=G.state.spotLightMap,gt.pointShadowMap.value=G.state.pointShadowMap,gt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.currentProgram=bt,z.uniformsList=null,bt}function H(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Sr.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function et(A,N){const V=Zt.get(A);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Dt(A,N,V,z,G){N.isScene!==!0&&(N=Ft),D.resetTextureUnits();const nt=N.fog,ct=z.isMeshStandardMaterial?N.environment:null,$=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:hi,mt=(z.isMeshStandardMaterial?j:T).get(z.envMap||ct),Ut=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,bt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),gt=!!V.morphAttributes.position,Nt=!!V.morphAttributes.normal,Fe=!!V.morphAttributes.color;let be=ci;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(be=M.toneMapping);const He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=He!==void 0?He.length:0,It=Zt.get(z),ui=u.state.lights;if(at===!0&&(Et===!0||A!==b)){const wn=A===b&&z.id===X;jt.setState(z,A,wn)}let pe=!1;z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ui.state.version||It.outputColorSpace!==$||G.isBatchedMesh&&It.batching===!1||!G.isBatchedMesh&&It.batching===!0||G.isInstancedMesh&&It.instancing===!1||!G.isInstancedMesh&&It.instancing===!0||G.isSkinnedMesh&&It.skinning===!1||!G.isSkinnedMesh&&It.skinning===!0||G.isInstancedMesh&&It.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&It.instancingColor===!1&&G.instanceColor!==null||It.envMap!==mt||z.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==jt.numPlanes||It.numIntersection!==jt.numIntersection)||It.vertexAlphas!==Ut||It.vertexTangents!==bt||It.morphTargets!==gt||It.morphNormals!==Nt||It.morphColors!==Fe||It.toneMapping!==be||Xt.isWebGL2===!0&&It.morphTargetsCount!==Jt)&&(pe=!0):(pe=!0,It.__version=z.version);let In=It.currentProgram;pe===!0&&(In=S(z,N,G));let Dn=!1,Xn=!1,aa=!1;const Je=In.getUniforms(),Ii=It.uniforms;if(Ct.useProgram(In.program)&&(Dn=!0,Xn=!0,aa=!0),z.id!==X&&(X=z.id,Xn=!0),Dn||b!==A){Je.setValue(Z,"projectionMatrix",A.projectionMatrix),Je.setValue(Z,"viewMatrix",A.matrixWorldInverse);const wn=Je.map.cameraPosition;wn!==void 0&&wn.setValue(Z,qt.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&Je.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Je.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Xn=!0,aa=!0)}if(G.isSkinnedMesh){Je.setOptional(Z,G,"bindMatrix"),Je.setOptional(Z,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(Xt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Je.setValue(Z,"boneTexture",wn.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Je.setOptional(Z,G,"batchingTexture"),Je.setValue(Z,"batchingTexture",G._matricesTexture,D));const ca=V.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Xt.isWebGL2===!0)&&ne.update(G,V,In),(Xn||It.receiveShadow!==G.receiveShadow)&&(It.receiveShadow=G.receiveShadow,Je.setValue(Z,"receiveShadow",G.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ii.envMap.value=mt,Ii.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),Xn&&(Je.setValue(Z,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&At(Ii,aa),nt&&z.fog===!0&&_t.refreshFogUniforms(Ii,nt),_t.refreshMaterialUniforms(Ii,z,Q,K,Tt),Sr.upload(Z,H(It),Ii,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Sr.upload(Z,H(It),Ii,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Je.setValue(Z,"center",G.center),Je.setValue(Z,"modelViewMatrix",G.modelViewMatrix),Je.setValue(Z,"normalMatrix",G.normalMatrix),Je.setValue(Z,"modelMatrix",G.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wn=z.uniformsGroups;for(let la=0,yu=wn.length;la<yu;la++)if(Xt.isWebGL2){const tl=wn[la];fe.update(tl,In),fe.bind(tl,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function At(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ae(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,N,V){Zt.get(A.texture).__webglTexture=N,Zt.get(A.depthTexture).__webglTexture=V;const z=Zt.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const V=Zt.get(A);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,V=0){L=A,O=N,C=V;let z=!0,G=null,nt=!1,ct=!1;if(A){const mt=Zt.get(A);mt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(Z.FRAMEBUFFER,null),z=!1):mt.__webglFramebuffer===void 0?D.setupRenderTarget(A):mt.__hasExternalTextures&&D.rebindTextures(A,Zt.get(A.texture).__webglTexture,Zt.get(A.depthTexture).__webglTexture);const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const bt=Zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?G=bt[N][V]:G=bt[N],nt=!0):Xt.isWebGL2&&A.samples>0&&D.useMultisampledRTT(A)===!1?G=Zt.get(A).__webglMultisampledFramebuffer:Array.isArray(bt)?G=bt[V]:G=bt,R.copy(A.viewport),W.copy(A.scissor),q=A.scissorTest}else R.copy(ot).multiplyScalar(Q).floor(),W.copy(ut).multiplyScalar(Q).floor(),q=pt;if(Ct.bindFramebuffer(Z.FRAMEBUFFER,G)&&Xt.drawBuffers&&z&&Ct.drawBuffers(A,G),Ct.viewport(R),Ct.scissor(W),Ct.setScissorTest(q),nt){const mt=Zt.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,V)}else if(ct){const mt=Zt.get(A.texture),Ut=N||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,mt.__webglTexture,V||0,Ut)}X=-1},this.readRenderTargetPixels=function(A,N,V,z,G,nt,ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&($=$[ct]),$){Ct.bindFramebuffer(Z.FRAMEBUFFER,$);try{const mt=A.texture,Ut=mt.format,bt=mt.type;if(Ut!==zn&&wt.convert(Ut)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=bt===yo&&(Bt.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(bt!==Ti&&wt.convert(bt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(bt===Si&&(Xt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-z&&V>=0&&V<=A.height-G&&Z.readPixels(N,V,z,G,wt.convert(Ut),wt.convert(bt),nt)}finally{const mt=L!==null?Zt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(Z.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(A,N,V=0){const z=Math.pow(2,-V),G=Math.floor(N.image.width*z),nt=Math.floor(N.image.height*z);D.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,V,0,0,A.x,A.y,G,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(A,N,V,z=0){const G=N.image.width,nt=N.image.height,ct=wt.convert(V.format),$=wt.convert(V.type);D.setTexture2D(V,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,V.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,z,A.x,A.y,G,nt,ct,$,N.image.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,z,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,ct,N.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,z,A.x,A.y,ct,$,N.image),z===0&&V.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(A,N,V,z,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const nt=A.max.x-A.min.x+1,ct=A.max.y-A.min.y+1,$=A.max.z-A.min.z+1,mt=wt.convert(z.format),Ut=wt.convert(z.type);let bt;if(z.isData3DTexture)D.setTexture3D(z,0),bt=Z.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)D.setTexture2DArray(z,0),bt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,z.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Nt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Fe=Z.getParameter(Z.UNPACK_SKIP_PIXELS),be=Z.getParameter(Z.UNPACK_SKIP_ROWS),He=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Jt=V.isCompressedTexture?V.mipmaps[G]:V.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Jt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Jt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,A.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,A.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?Z.texSubImage3D(bt,G,N.x,N.y,N.z,nt,ct,$,mt,Ut,Jt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(bt,G,N.x,N.y,N.z,nt,ct,$,mt,Jt.data)):Z.texSubImage3D(bt,G,N.x,N.y,N.z,nt,ct,$,mt,Ut,Jt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,gt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Nt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Fe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,be),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,He),G===0&&z.generateMipmaps&&Z.generateMipmap(bt),Ct.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){O=0,C=0,L=null,Ct.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xc?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===Xr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?Ji:Rd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ji?Ke:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Pv extends $d{}Pv.prototype.isWebGL1Renderer=!0;class Zc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lv extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Iv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new B;class Ur{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ur(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Br extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const to=new B,ys=new B,Ms=new B,Es=new ee,eo=new ee,Kd=new Ae,Zo=new B,no=new B,$o=new B,yh=new ee,za=new ee,Mh=new ee;class Tc extends Xe{constructor(t=new Br){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new pn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Iv(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Ur(n,3,0,!1)),xs.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new ee(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const a=this.center;Ko(Zo.set(-.5,-.5,0),Ms,a,ys,i,o),Ko(no.set(.5,-.5,0),Ms,a,ys,i,o),Ko($o.set(.5,.5,0),Ms,a,ys,i,o),yh.set(0,0),za.set(1,0),Mh.set(1,1);let r=t.ray.intersectTriangle(Zo,no,$o,!1,to);if(r===null&&(Ko(no.set(-.5,.5,0),Ms,a,ys,i,o),za.set(0,1),r=t.ray.intersectTriangle(Zo,$o,no,!1,to),r===null))return;const c=t.ray.origin.distanceTo(to);c<t.near||c>t.far||e.push({distance:c,point:to.clone(),uv:Mn.getInterpolation(to,Zo,no,$o,yh,za,Mh,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ko(s,t,e,n,i,o){Es.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(eo.x=o*Es.x-i*Es.y,eo.y=i*Es.x+o*Es.y):eo.copy(Es),s.copy(t),s.x+=eo.x,s.y+=eo.y,s.applyMatrix4(Kd)}class Eh extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new Ae,bh=new Ae,Jo=[],Sh=new es,Dv=new Ae,io=new te,so=new ns;class Ov extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Eh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new es),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Sh.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),so.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,bs),bh.multiplyMatrices(n,bs),io.matrixWorld=bh,io.raycast(t,Jo);for(let a=0,r=Jo.length;a<r;a++){const c=Jo[a];c.instanceId=o,c.object=this,e.push(c)}Jo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Eh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Jd extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wh=new B,Ah=new B,Th=new Ae,Ha=new Yr,Qo=new ns;class Nv extends Xe{constructor(t=new pn,e=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)wh.fromBufferAttribute(e,i-1),Ah.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wh.distanceTo(Ah);t.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=o,t.ray.intersectsSphere(Qo)===!1)return;Th.copy(i).invert(),Ha.copy(t.ray).applyMatrix4(Th);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new B,h=new B,f=new B,p=new B,g=this.isLineSegments?2:1,v=n.index,u=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),E=Math.min(v.count,a.start+a.count);for(let M=d,w=E-1;M<w;M+=g){const O=v.getX(M),C=v.getX(M+1);if(l.fromBufferAttribute(u,O),h.fromBufferAttribute(u,C),Ha.distanceSqToSegment(l,h,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(p);X<t.near||X>t.far||e.push({distance:X,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),E=Math.min(u.count,a.start+a.count);for(let M=d,w=E-1;M<w;M+=g){if(l.fromBufferAttribute(u,M),h.fromBufferAttribute(u,M+1),Ha.distanceSqToSegment(l,h,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(p);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}const Ch=new B,Rh=new B;class Uv extends Nv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Ch.fromBufferAttribute(e,i),Rh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ch.distanceTo(Rh);t.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cc extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new Ae,Rc=new Yr,tr=new ns,er=new B;class Lh extends Xe{constructor(t=new pn,e=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=o,t.ray.intersectsSphere(tr)===!1)return;Ph.copy(i).invert(),Rc.copy(t.ray).applyMatrix4(Ph);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let v=p,_=g;v<_;v++){const u=l.getX(v);er.fromBufferAttribute(f,u),Ih(er,u,c,i,t,e,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,_=g;v<_;v++)er.fromBufferAttribute(f,v),Ih(er,v,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Ih(s,t,e,n,i,o,a){const r=Rc.distanceSqToPoint(s);if(r<e){const c=new B;Rc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}class Vs extends an{constructor(t,e,n,i,o,a,r,c,l){super(t,e,n,i,o,a,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const nr=new B,ir=new B,Ga=new B,sr=new Mn;class Bv extends pn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),o=Math.cos(br*e),a=t.getIndex(),r=t.getAttribute("position"),c=a?a.count:r.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),p={},g=[];for(let v=0;v<c;v+=3){a?(l[0]=a.getX(v),l[1]=a.getX(v+1),l[2]=a.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:_,b:u,c:d}=sr;if(_.fromBufferAttribute(r,l[0]),u.fromBufferAttribute(r,l[1]),d.fromBufferAttribute(r,l[2]),sr.getNormal(Ga),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,f[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const M=(E+1)%3,w=f[E],O=f[M],C=sr[h[E]],L=sr[h[M]],X=`${w}_${O}`,b=`${O}_${w}`;b in p&&p[b]?(Ga.dot(p[b].normal)<=o&&(g.push(C.x,C.y,C.z),g.push(L.x,L.y,L.z)),p[b]=null):X in p||(p[X]={index0:l[E],index1:l[M],normal:Ga.clone()})}}for(const v in p)if(p[v]){const{index0:_,index1:u}=p[v];nr.fromBufferAttribute(r,_),ir.fromBufferAttribute(r,u),g.push(nr.x,nr.y,nr.z),g.push(ir.x,ir.y,ir.z)}this.setAttribute("position",new Sn(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ln extends pn{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let l=0;const h=[],f=new B,p=new B,g=[],v=[],_=[],u=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let w=0;d===0&&a===0?w=.5/e:d===n&&c===Math.PI&&(w=-.5/e);for(let O=0;O<=e;O++){const C=O/e;f.x=-t*Math.cos(i+C*o)*Math.sin(a+M*r),f.y=t*Math.cos(a+M*r),f.z=t*Math.sin(i+C*o)*Math.sin(a+M*r),v.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),u.push(C+w,1-M),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const M=h[d][E+1],w=h[d][E],O=h[d+1][E],C=h[d+1][E+1];(d!==0||a>0)&&g.push(M,w,C),(d!==n-1||c<Math.PI)&&g.push(w,O,C)}this.setIndex(g),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ie extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $r extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class kv extends $r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Va=new Ae,Dh=new B,Oh=new B;class Qd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nh=new Ae,oo=new B,Wa=new B;class Fv extends Qd{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),oo.setFromMatrixPosition(t.matrixWorld),n.position.copy(oo),Wa.copy(n.position),Wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-oo.x,-oo.y,-oo.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Uh extends $r{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zv extends Qd{constructor(){super(new Vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tu extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new zv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hv extends $r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kr{constructor(t,e,n=0,i=1/0){this.ray=new Yr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Pc(t,this,n,e),n.sort(Bh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Pc(t[i],this,n,e);return n.sort(Bh),n}}function Bh(s,t){return s.distance-t.distance}function Pc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let o=0,a=i.length;o<a;o++)Pc(i[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const vo=16,Gv=256,Vv=256,Wv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let Lc=null,or=null;function Xv(){return or||(or=new Promise(s=>{const t=new Image;t.onload=()=>{const e=new an(t);e.magFilter=Be,e.minFilter=Be,e.generateMipmaps=!1,e.needsUpdate=!0,Lc=e,s()},t.onerror=()=>{console.warn("Atlas load failed"),s()},t.src=Wv}),or)}function Yv(s,t){if(!Lc)return qv(s,t);const e=Lc.clone();e.needsUpdate=!0;const n=vo/Gv,i=vo/Vv;return e.offset.set(s*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=bn,e.wrapT=bn,e}function qv(s,t){const e=document.createElement("canvas");e.width=e.height=vo;const n=e.getContext("2d"),i=(s*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,vo,vo);const o=new Vs(e);return o.magFilter=Be,o.minFilter=Be,o}function jv(s,t,e={}){const n=Yv(s,t),i=new Ie({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:li});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const Zv=[0,0],rr=[1,0],kh=[2,0],Xa=[3,0],$v=[4,0],ar=[5,0],Fh=[6,0],Kv=[7,0],zh=[9,0],Jv=[10,0],Qv=[11,0],t_=[12,0],e_=[13,0],n_=[14,0],i_=[15,0],s_=[0,1],o_=[1,1],r_=[2,1],a_=[3,1],c_=[4,1],l_=[5,1],h_=[6,1],cr=[7,1],Hh=[8,1],d_=[9,1],u_=[10,1],f_=[11,1],p_=[12,1],m_=[13,1],Ya=[14,1],g_=[15,1],lr=[0,2],Gh=[1,2],hr=[2,2],v_=[3,2],__=[6,2],qa=new Map;function oe(s,t,e={}){const n=`${s},${t},${JSON.stringify(e)}`;if(qa.has(n))return qa.get(n);const i=jv(s,t,e);return qa.set(n,i),i}let qi=null,Os=null,dr=null;function eu(s,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;s.fillStyle="#1a5fa0",s.fillRect(0,0,16,16),s.fillStyle=`rgba(40,130,210,${.45+e*.3})`,s.fillRect(0,Math.round(e*9),16,3),s.fillStyle=`rgba(80,160,240,${.2+n*.2})`,s.fillRect(0,Math.round(n*5)+6,16,2),s.fillStyle=`rgba(180,220,255,${.06+e*.06})`,s.fillRect(Math.round(n*10),0,4,16)}function x_(){if(dr)return dr;qi=document.createElement("canvas"),qi.width=qi.height=16;const s=qi.getContext("2d");return eu(s,0),Os=new Vs(qi),Os.magFilter=Be,Os.minFilter=Be,dr=new Ie({map:Os,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:Zn}),dr}function y_(s){!qi||!Os||(eu(qi.getContext("2d"),s),Os.needsUpdate=!0)}function M_(s,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(s){case 1:return[oe(...rr,n),oe(...rr,n),oe(...Zv,n),oe(...kh,n),oe(...rr,n),oe(...rr,n)];case 2:return Ne(kh,n);case 3:return Ne(Xa,n);case 4:return Ne($v,n);case 5:return[oe(...ar,n),oe(...ar,n),oe(...Fh,n),oe(...Fh,n),oe(...ar,n),oe(...ar,n)];case 6:return Ne(Kv,{transparent:!0,alphaTest:.5});case 7:{const i=x_();return[i,i,i,i,i,i]}case 8:return Ne(e_,n);case 9:return Ne(t_,{transparent:!0,opacity:.6});case 10:return Ne(zh,n);case 11:return Ne(Jv,n);case 12:return Ne(Qv,n);case 13:return Ne(s_,n);case 14:return Ne(o_,n);case 15:return Ne(r_,n);case 16:return Ne(n_,n);case 17:return Ne(p_,n);case 18:return Ne(d_,n);case 19:return Ne(c_,{emissive:16755200});case 20:return Ne(l_,n);case 21:return Ne(h_,{transparent:!0,opacity:.7});case 22:return[oe(...hr,n),oe(...hr,n),oe(...i_,n),oe(...zh,n),oe(...hr,n),oe(...hr,n)];case 23:return[oe(...m_,n),oe(...Ya,n),oe(...g_,n),oe(...Xa,n),oe(...Ya,n),oe(...Ya,n)];case 24:return[oe(...cr,n),oe(...cr,n),oe(...Hh,n),oe(...Hh,n),oe(...cr,n),oe(...cr,n)];case 26:return Ne(u_,n);case 27:return Ne(f_,n);case 47:return Ne(__,{emissive:16729088});case 49:return[oe(...lr,n),oe(...lr,n),oe(...Gh,n),oe(...Gh,n),oe(...lr,n),oe(...lr,n)];case 54:return Ne(v_,n);case 61:return Ne(a_,n);default:{const i=oe(...Xa,n);return[i,i,i,i,i,i]}}}function Ne(s,t={}){const e=oe(s[0],s[1],t);return[e,e,e,e,e,e]}const nu=Math.sqrt(3),E_=.5*(nu-1),ro=(3-nu)/6,Vh=s=>Math.floor(s)|0,Wh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Bn(s=Math.random){const t=b_(s),e=new Float64Array(t).map(i=>Wh[i%12*2]),n=new Float64Array(t).map(i=>Wh[i%12*2+1]);return function(o,a){let r=0,c=0,l=0;const h=(o+a)*E_,f=Vh(o+h),p=Vh(a+h),g=(f+p)*ro,v=f-g,_=p-g,u=o-v,d=a-_;let E,M;u>d?(E=1,M=0):(E=0,M=1);const w=u-E+ro,O=d-M+ro,C=u-1+2*ro,L=d-1+2*ro,X=f&255,b=p&255;let R=.5-u*u-d*d;if(R>=0){const tt=X+t[b],F=e[tt],Y=n[tt];R*=R,r=R*R*(F*u+Y*d)}let W=.5-w*w-O*O;if(W>=0){const tt=X+E+t[b+M],F=e[tt],Y=n[tt];W*=W,c=W*W*(F*w+Y*O)}let q=.5-C*C-L*L;if(q>=0){const tt=X+1+t[b+1],F=e[tt],Y=n[tt];q*=q,l=q*q*(F*C+Y*L)}return 70*(r+c+l)}}function b_(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),o=e[n];e[n]=e[i],e[i]=o}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const Jr={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},89:{name:"Snowball",color:15658751,solid:!1},90:{name:"Egg",color:15786176,solid:!1},91:{name:"Strength Potion",color:16729156,solid:!1},92:{name:"Speed Potion",color:4500223,solid:!1},93:{name:"Saddle",color:9127187,solid:!1},94:{name:"Anvil",color:5592405},95:{name:"Leather",color:9136404,solid:!1},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1}},Bi=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function Hn(s){var t;return((t=Jr[s])==null?void 0:t.name)??"Unknown"}function Ns(s){var t;return((t=Jr[s])==null?void 0:t.color)??16777215}const Yn=16,ao=62,S_=4096,w_=4096,A_=8192,T_=8192*256;function Te(s,t,e){return s+S_+t*A_+(e+w_)*T_}function Xh(s,t,e){return`${s},${t},${e}`}const Gt=class Gt{constructor(t){P(this,"scene");P(this,"instancedMeshes",new Map);P(this,"instanceCount",new Map);P(this,"_dirtyMeshes",new Set);P(this,"instanceIndex",new Map);P(this,"instanceRevIndex",new Map);P(this,"blockData",new Map);P(this,"generatedChunks",new Set);P(this,"modifications",new Map);P(this,"chestContents",new Map);P(this,"nH1",Bn(()=>.31415+Gt._s()));P(this,"nH2",Bn(()=>.62831+Gt._s()));P(this,"nH3",Bn(()=>.94247+Gt._s()));P(this,"nH4",Bn(()=>.12566+Gt._s()));P(this,"nBio",Bn(()=>.78539+Gt._s()));P(this,"nCv1",Bn(()=>.52359+Gt._s()));P(this,"nCv2",Bn(()=>.20943+Gt._s()));P(this,"nOre",Bn(()=>.41887+Gt._s()));P(this,"noise2D",Bn(()=>.69813+Gt._s()));P(this,"noise2D2",Bn(()=>.87964+Gt._s()));P(this,"biomeNoise",Bn(()=>.78539+Gt._s()));P(this,"torchLights",new Map);P(this,"torchLightQueue",[]);P(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}static _s(){return typeof window.__worldSeed=="number"?window.__worldSeed:0}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),o=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,r=this.nH4(t*.016,e*.016)*.125,l=((i+o+a+r)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),o=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(o)<.1}generateChunkRaw(t,e,n,i){for(let o=0;o<Yn;o++)for(let a=0;a<Yn;a++){const r=t*Yn+o,c=e*Yn+a,l=this.getHeight(r,c),h=this.getBiome(r,c),f=h!==4&&l>=ao-2&&l<=ao+2,p=(g,v)=>{n.set(Te(r,g,c),v),i.push([r,g,c])};for(let g=0;g<=l;g++){if(g>4&&g<l-1&&this.isCave(r,g,c))continue;let v;if(g<=4?v=3:h===1||f?v=g>=l-3?4:3:h===4?v=g===l?12:g===l-1?4:3:g===l?v=h===3&&l>100?20:1:g>=l-4?v=2:v=3,v===3&&g<l-4){const _=this.nOre(r*.16+g*.11,c*.16);g<=16&&_>.76?v=61:g<=32&&_>.68?v=13:g<=64&&_>.6?v=14:g<=128&&_>.54&&(v=15)}p(g,v)}if(l<ao)for(let g=l+1;g<=ao;g++)p(g,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<Yn;i++)for(let o=0;o<Yn;o++){const a=t*Yn+i,r=e*Yn+o,c=this.getHeight(a,r),l=this.getBiome(a,r);if(c<=ao)continue;const h=Math.random();l===0?h<.02?this.placeBlock(a,c+1,r,51,!1):h<.03&&this.placeTree(a,c+1,r):l===1?h<.03?this.placeBlock(a,c+1,r,50,!1):h<.05&&this.placeBlock(a,c+1,r,52,!1):l===2?h<.09?this.placeTree(a,c+1,r):h<.12&&this.placeBlock(a,c+1,r,51,!1):l===3&&c<100&&h<.03&&this.placeTree(a,c+1,r)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const o=e+i;for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(r)===2&&c<1||a===0&&r===0&&c<2||this.placeBlock(t+a,o+c,n+r,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){const a=`${i},${o}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,o,e,n))}for(const[i,o,a]of n){const r=Te(i,o,a),c=e.get(r);if(!Gt.isOpaque(c)){this.placeBlock(i,o,a,c,!1);continue}!Gt.isOpaque(e.get(Te(i+1,o,a))??0)||!Gt.isOpaque(e.get(Te(i-1,o,a))??0)||!Gt.isOpaque(e.get(Te(i,o+1,a))??0)||!Gt.isOpaque(e.get(Te(i,o-1,a))??0)||!Gt.isOpaque(e.get(Te(i,o,a+1))??0)||!Gt.isOpaque(e.get(Te(i,o,a-1))??0)?this.placeBlock(i,o,a,c,!1):this.blockData.set(r,c)}for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){const a=`${i},${o}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,o,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/Yn),o=Math.floor(e/Yn);let a=0,r=0,c=1/0,l=!1;for(let v=i-3;v<=i+3;v++)for(let _=o-3;_<=o+3;_++){if(this.generatedChunks.has(`${v},${_}`))continue;const u=(v-i)*(v-i)+(_-o)*(_-o);u<c&&(c=u,a=v,r=_,l=!0)}if(!l)return;const h=`${a},${r}`;this.generatedChunks.add(h);const f=new Map,p=[];this.generateChunkRaw(a,r,f,p);for(const[v,_,u]of p){const d=Te(v,_,u),E=f.get(d);if(!Gt.isOpaque(E)){this.placeBlock(v,_,u,E,!1);continue}const M=(O,C,L)=>f.get(Te(O,C,L))??this.blockData.get(Te(O,C,L))??0;!Gt.isOpaque(M(v+1,_,u))||!Gt.isOpaque(M(v-1,_,u))||!Gt.isOpaque(M(v,_+1,u))||!Gt.isOpaque(M(v,_-1,u))||!Gt.isOpaque(M(v,_,u+1))||!Gt.isOpaque(M(v,_,u-1))?this.placeBlock(v,_,u,E,!1):this.blockData.set(d,E)}const g=`${a},${r}_dec`;this.generatedChunks.has(g)||(this.generatedChunks.add(g),this.generateChunkDecorations(a,r,f))}static isOpaque(t){return t>0&&!Gt.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return Gt.sharedBoxGeo||(Gt.sharedBoxGeo=new Ce(1,1,1)),Gt.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=Jr[t],n=M_(t,e??{}),i=n.length===1?n[0]:n,o=new Ov(Gt.getBoxGeo(),i,Gt.MAX_INSTANCES);return o.instanceMatrix.setUsage(bf),o.count=0,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,t===7&&(o.renderOrder=1),this.scene.add(o),this.instancedMeshes.set(t,o),this.instanceCount.set(t,0),o}placeBlock(t,e,n,i,o=!0){const a=Te(t,e,n);if(!o&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const r=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=Gt.MAX_INSTANCES)return;const l=i===7?.375:.5;Gt._mat4.setPosition(t+.5,e+l,n+.5),r.setMatrixAt(c,Gt._mat4),r.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),o&&this.modifications.set(Xh(t,e,n),i)}removeBlock(t,e,n){const i=Te(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(Xh(t,e,n),0);const o=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,r,c]of o){const l=Te(a,r,c),h=this.blockData.get(l);h===void 0||h===0||this.instanceIndex.has(l)||this._addBlockMesh(a,r,c,h)}return!0}_addBlockMesh(t,e,n,i){const o=Te(t,e,n);if(this.instanceIndex.has(o))return;const a=this.getOrCreateInstancedMesh(i),r=this.instanceCount.get(i)??0;r>=Gt.MAX_INSTANCES||(Gt._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(r,Gt._mat4),a.count=r+1,this._dirtyMeshes.add(i),this.instanceIndex.set(o,r),this.instanceRevIndex.set(`${i}:${r}`,o),this.instanceCount.set(i,r+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,Gt._mat4),n.setMatrixAt(i,Gt._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const r=a;n.count=r,this.instanceCount.set(e,r),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Te(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Te(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Te(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,o){for(let a=-o;a<=o;a++)for(let r=-o;r<=o;r++)for(let c=-o;c<=o;c++)if(this.blockData.get(Te(t+a,e+r,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z);const r=e.x,c=e.y,l=e.z,h=r>0?1:r<0?-1:0,f=c>0?1:c<0?-1:0,p=l>0?1:l<0?-1:0,g=h!==0?Math.abs(1/r):1/0,v=f!==0?Math.abs(1/c):1/0,_=p!==0?Math.abs(1/l):1/0;let u=h>0?(i+1-t.x)*g:h<0?(t.x-i)*g:1/0,d=f>0?(o+1-t.y)*v:f<0?(t.y-o)*v:1/0,E=p>0?(a+1-t.z)*_:p<0?(t.z-a)*_:1/0,M=0,w=0,O=0;const C=Math.ceil(n*3)+2;for(let L=0;L<C;L++){if(this.blockData.has(Te(i,o,a)))return{x:i,y:o,z:a,face:Gt._rayFace.set(M,w,O)};if(u<d)if(u<E){if(u>n)return null;i+=h,M=-h,w=0,O=0,u+=g}else{if(E>n)return null;a+=p,M=0,w=0,O=-p,E+=_}else if(d<E){if(d>n)return null;o+=f,M=0,w=-f,O=0,d+=v}else{if(E>n)return null;a+=p,M=0,w=0,O=-p,E+=_}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const o=this.blockData.get(Te(t,i,e));if(o!==void 0&&!n.has(o))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let o=-n;o<=n;o++)for(let a=-n;a<=n;a++){const r=this.getSurfaceHeight(t+o,e+a);r>i&&(i=r)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const o=`${t},${e},${n}`;this.chestContents.set(o,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[o,a]of i){const r=t+o,c=e+a,l=this.getSurfaceHeight(r,c);this.placeHouse(r,l,c,8,5,6)}}placeHouse(t,e,n,i,o,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let f=0;f<o;f++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+f,n+h,10,!1);const r=t+Math.floor(i/2);this.removeBlock(r,e+2,n),this.removeBlock(r,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+o,n+h,10,!1);this.placeBlock(r+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let o=0;o<3;o++)(i!==1||o!==1)&&this.placeBlock(t+i-1,e+1,n+o-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,o=5;for(let r=-4;r<=4;r++)for(let c=0;c<o;c++)for(let l=-4;l<=4;l++){const h=t+r,f=i+c,p=e+l,g=Math.abs(r)===4||Math.abs(l)===4,v=c===0,_=c===o-1;if(g||v||_){const u=Math.random()<.3?82:81;this.placeBlock(h,f,p,u,!0)}else this.removeBlock(h,f,p)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[r,c]of a){const l=i+1;this.placeBlock(r,l,c,31,!0);const h=[64,62,65,63,280,268,270,274,267,257,5,10,56,11,3],f=new Array(27).fill(0),p=Math.floor(Math.random()*8)+4,g=new Set;for(let v=0;v<p;v++){let _;do _=Math.floor(Math.random()*27);while(g.has(_));g.add(_),f[_]=h[Math.floor(Math.random()*h.length)]}this.setChestInventory(r,l,c,f)}for(let r=0;r<10;r++){const c=t-r,l=i+5+r,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),r>0&&this.removeBlock(c,l-1,h)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[o,a]of this.modifications.entries())e[o]=a;const n={};for(const[o,a]of this.chestContents.entries())a.some(r=>r!==0)&&(n[o]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(o){console.warn("Save failed:",o)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[o,a,r]=n.split(",").map(Number);i===0?this.removeBlock(o,a,r):this.placeBlock(o,a,r,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const o=`${t},${e},${n}`;if(this.torchLights.has(o))return;const a=new Uh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(o,a),this.torchLightQueue.push(o);this.torchLightQueue.length>50;){const r=this.torchLightQueue.shift();if(r){const c=this.torchLights.get(r);c&&(this.scene.remove(c),this.torchLights.delete(r))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,o=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=o}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,o=this.torchLights.get(i);if(o){this.scene.remove(o),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Te(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.activateLamp(t+r,e+c,n+l);else for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.deactivateLamp(t+r,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Te(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const r=new Uh(16737792,1.2,6);r.position.set(t,e,n),this.scene.add(r),this.redstoneLoights.set(i,r)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Te(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const r=this.redstoneLoights.get(i);r&&(this.scene.remove(r),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),o=Number(e),a=Number(n),r=Number(i);!isNaN(o)&&!isNaN(a)&&!isNaN(r)&&this.addTorchLight(o,a+.5,r)}}};P(Gt,"MAX_INSTANCES",32e3),P(Gt,"_mat4",new Ae),P(Gt,"_rayFace",new B),P(Gt,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),P(Gt,"sharedBoxGeo",null);let Ic=Gt;const ur=4.5,C_=1.6,fr=9,Yh=8.5,qh=-28,co=1.8,pr=.55,ln=1.62,R_=5,dn=class dn{constructor(t,e,n){P(this,"camera");P(this,"world");P(this,"scene");P(this,"position",new B(0,30,0));P(this,"velocity",new B);P(this,"onGround",!1);P(this,"gameMode","survival");P(this,"_forward",new B);P(this,"_right",new B);P(this,"_move",new B);P(this,"_rayDir",new B);P(this,"_highlightVec",new B);P(this,"_lastHit",null);P(this,"_lastHitFrame",-1);P(this,"_frameCount",0);P(this,"health",40);P(this,"maxHealth",40);P(this,"invincible",0);P(this,"spawnGrace",0);P(this,"armor",0);P(this,"speedBonus",0);P(this,"fallStartY",0);P(this,"wasOnGround",!1);P(this,"fallTracking",!1);P(this,"keys",{});P(this,"yaw",0);P(this,"pitch",0);P(this,"locked",!1);P(this,"chatOpen",!1);P(this,"flying",!1);P(this,"lastSpace",0);P(this,"inWater",!1);P(this,"wasInWater",!1);P(this,"waterTimer",0);P(this,"onLadder",!1);P(this,"swimStroke",0);P(this,"waterCameraTilt",0);P(this,"waterEntryVelocityDamp",1);P(this,"selectedBlockType",1);P(this,"raycaster",new Kr);P(this,"highlightMesh");P(this,"outlineMesh");P(this,"outlineOpacity",0);P(this,"outlineTarget",0);P(this,"_lastOutlineKey","");P(this,"breakProgress",0);P(this,"breakTarget",null);P(this,"breakIndicator",null);P(this,"isBreakingHeld",!1);P(this,"selfModel",null);P(this,"selfHead",null);P(this,"selfLA",null);P(this,"selfRA",null);P(this,"selfLL",null);P(this,"selfRL",null);P(this,"walkCycle",0);P(this,"prevXZ",new ee);P(this,"thirdPerson",!1);P(this,"headBobPhase",0);P(this,"headBobIntensity",0);P(this,"cameraRoll",0);P(this,"currentFov",75);P(this,"fpArm",null);P(this,"fpArmGroup",null);P(this,"_armSwing",0);P(this,"_armSwingDir",1);P(this,"_armBob",0);P(this,"onPlaceBlock");P(this,"onBreakBlock");P(this,"onOpenChat");P(this,"onDied");P(this,"onHealthChanged");P(this,"onRightClick");P(this,"setDeathCause");P(this,"onWaterEnter");P(this,"onWaterExit");P(this,"_hitPoint",new B);P(this,"_hitNormal",new B);P(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});this.camera=t,this.world=e,this.scene=n;const i=new Ce(1.02,1.02,1.02),o=new di({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new te(i,o),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new Bv(new Ce(1.005,1.005,1.005)),r=new Jd({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new Uv(a,r),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!dn._crackTextures){dn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const o=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let r=0;r<o*2;r++){const c=r/(o*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let r=0;r<e;r++){const c=2+Math.random()*12,l=2+Math.random()*12,h=c+(Math.random()-.5)*6,f=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(h,f),i.stroke()}}if(e>4){const r=i.createRadialGradient(8,8,4,8,8,10);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=r,i.fillRect(0,0,16,16)}const a=new Vs(n);a.magFilter=Be,a.minFilter=Be,dn._crackTextures.push(a)}}return dn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}isSneaking(){return(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new me,this.camera.add(this.fpArmGroup);const t=new Ce(.12,.35,.12),e=new Ie({color:16764057}),n=new te(t,e);n.position.y=-.175;const i=new Ce(.11,.25,.11),o=new te(i,e);o.position.y=-.3,n.add(o);const a=new Ce(.135,.355,.135),r=new Ie({color:3364300,transparent:!0,opacity:.9}),c=new te(a,r);c.position.y=-.175,this.fpArm=new me,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,o.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new me,n=16764057,i=3364300,o=2245785,a=3351057,r=3346688,c=C=>new Ie({color:C}),l=(C,L,X,b)=>new te(new Ce(C,L,X),c(b)),h=(C,L,X,b)=>{const R=new me,W=l(C,L,X,b);return W.position.y=-L/2,R.add(W),R},f=new me;f.add(l(.5,.5,.5,n));const p=l(.52,.14,.52,r);p.position.y=.19,f.add(p),f.position.set(0,.75,0);const g=l(.6,.75,.35,i);g.position.y=0;const v=h(.25,.65,.25,i),_=h(.25,.65,.25,i),u=l(.24,.25,.24,n);u.position.y=-.575,v.children[0].add(u);const d=u.clone();_.children[0].add(d),v.position.set(-.43,.37,0),_.position.set(.43,.37,0);const E=h(.27,.75,.27,o),M=h(.27,.75,.27,o),w=l(.28,.2,.3,a);w.position.y=-.77,E.children[0].add(w);const O=w.clone();return M.children[0].add(O),E.position.set(-.175,-.375,0),M.position.set(.175,-.375,0),e.add(f,g,v,_,E,M),t.add(e),this.selfHead=f,this.selfLA=v,this.selfRA=_,this.selfLL=E,this.selfRL=M,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var o;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(o=this.onBreakBlock)==null||o.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const o=new Ce(1.002,1.002,1.002),a=new di({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new te(o,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),o=this.breakIndicator.material,a=dn.getCrackTexture(i);o.map!==a&&(o.map=a,o.opacity=.5+i*.06,o.needsUpdate=!0)}}placeBlock(){var r,c;(r=this.onRightClick)==null||r.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),o=t.blockZ+Math.round(e.z),a=this.position.y-ln;Math.abs(n-this.position.x)<pr+.3&&i>=a-.2&&i<=a+co+.2&&Math.abs(o-this.position.z)<pr+.3||(this.world.placeBlock(n,i,o,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,o,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,R_);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var h,f,p,g;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-ln+co/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(h=this.setDeathCause)==null||h.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(f=this.onWaterEnter)==null||f.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(p=this.onWaterExit)==null||p.call(this)));const o=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-ln+co),i);this.onLadder=o===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const r=this.onLadder?0:this.inWater?-4:qh;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const v=c-ln,_=Math.floor(v);for(let u=0;u<=2;u++){const d=_-u;if(this.footprintOverBlock(this.position.x,this.position.z,d)){const E=d+1+ln;if(c<=E+.02){if(this.fallTracking){const M=this.fallStartY-(d+1);M>5&&((g=this.setDeathCause)==null||g.call(this,"You fell"),this.takeDamage(Math.floor((M-5)*.75))),this.fallTracking=!1}this.position.y=E,this.velocity.y=0,l=!0}break}}l||(this.position.y=c)}else{const v=Math.floor(this.position.y-ln+co+.05);this.footprintOverBlock(this.position.x,this.position.z,v)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-ln,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const v=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=v+ln+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=pr/2-.01;for(let o=0;o<3;o++){const a=Math.floor(t+(o-1)*i);for(let r=0;r<3;r++){const c=Math.floor(e+(r-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=pr/2-.01,o=Math.floor(e-ln+.05),a=Math.floor(e-ln+co-.05);for(let r=o;r<=a;r++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const f=Math.floor(n+(h===0?-i:i)),p=this.world.getBlockType(l,r,f);if(p!==void 0&&p!==0&&p!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=fr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=fr*t);else{this.velocity.y+=qh*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-ln);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+ln,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=Yh,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);const o=this.keys.ControlLeft&&this.gameMode==="survival",a=(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround;let r=o?ur*C_:a?ur*.3:ur;if(this.gameMode==="creative"&&(r=this.flying?fr:ur*1.2),this.gameMode==="spectator"&&(r=fr*1.5),this.speedBonus>0&&(r*=1+this.speedBonus),this.inWater&&(r*=.6),i.lengthSq()>0){i.normalize().multiplyScalar(r*t);const c=this.position.x+i.x,l=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=c,this.position.z=l):(this.wallCollision(c,this.position.y,this.position.z)||(this.position.x=c),this.wallCollision(this.position.x,this.position.y,l)||(this.position.z=l))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=Yh,this.onGround=!1)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5,i=this.position.y+.6;this.camera.position.x+=(e-this.camera.position.x)*.18,this.camera.position.y+=(i-this.camera.position.y)*.18,this.camera.position.z+=(n-this.camera.position.z)*.18,this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position),this.isSneaking()&&(this.camera.position.y-=.4);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",o=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(o-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const h=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,f=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=h,this.camera.position.y+=f}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const r=this.inWater?.06:0;this.waterCameraTilt+=(r-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=dn.BASE_FOV;i&&n>1&&(c=dn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=dn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-ln;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,o=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),o>.3?this.walkCycle+=t*Math.min(o,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),r=.65;this.selfLL&&(this.selfLL.rotation.x=a*r),this.selfRL&&(this.selfRL.rotation.x=-a*r),this.selfLA&&(this.selfLA.rotation.x=-a*r),this.selfRA&&(this.selfRA.rotation.x=a*r)}updateHighlight(){const t=this.raycast();if(t){const o=t.blockX+.5,a=t.blockY+.5,r=t.blockZ+.5;this.highlightMesh.position.set(o,a,r),this.highlightMesh.visible=!1,this.outlineMesh.position.set(o,a,r),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const o=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(o===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const o=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const r=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+o*.5,this.fpArm.rotation.z=.05+r,this.fpArm.position.y=-.28+o,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+ln+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};P(dn,"BASE_FOV",75),P(dn,"SPRINT_FOV",85),P(dn,"LANDING_FOV",70),P(dn,"_crackTextures",null);let Dc=dn;function jh(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class P_{constructor(t,e,n){P(this,"keys");P(this,"onBreak");P(this,"onPlace");P(this,"joyActive",!1);P(this,"joyId",-1);P(this,"joyOriginX",0);P(this,"joyOriginY",0);P(this,"joyEl");P(this,"joyThumbEl");P(this,"lookId",-1);P(this,"lookLastX",0);P(this,"lookLastY",0);P(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,e.addEventListener("touchstart",o=>{o.preventDefault(),this.keys.Space=!0},{passive:!1}),e.addEventListener("touchend",o=>{o.preventDefault(),this.keys.Space=!1},{passive:!1}),t.appendChild(e);const n=document.createElement("button");n.id="mobileBreak",n.textContent="⛏",n.style.cssText=`
      position:fixed; bottom:200px; right:120px;
      width:56px; height:56px;
      background:rgba(220,80,80,0.35); border:2px solid rgba(255,100,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,n.addEventListener("touchstart",o=>{o.preventDefault(),this.onBreak()},{passive:!1}),t.appendChild(n);const i=document.createElement("button");i.id="mobilePlace",i.textContent="🧱",i.style.cssText=`
      position:fixed; bottom:200px; right:40px;
      width:56px; height:56px;
      background:rgba(80,180,80,0.35); border:2px solid rgba(100,220,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `,i.addEventListener("touchstart",o=>{o.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const o of Array.from(i.changedTouches))o.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=o.identifier,this.joyOriginX=o.clientX,this.joyOriginY=o.clientY):this.lookId===-1&&(this.lookId=o.identifier,this.lookLastX=o.clientX,this.lookLastY=o.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var o;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const r=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(o=this.onLookDelta)==null||o.call(this,r,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const o of Array.from(i.changedTouches))o.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):o.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,o=e-this.joyOriginY,a=Math.sqrt(i*i+o*o),r=a>0?i/a:0,c=a>0?o/a:0,l=Math.min(a,42),h=r*l,f=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${f}px))`;const p=12;this.keys.KeyW=f<-p,this.keys.KeyS=f>p,this.keys.KeyA=h<-p,this.keys.KeyD=h>p}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L_(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),e}var iu={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Ws={},Qr={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=t})(Qr);var bo={},Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.decode=Xs.encode=void 0;function Zs(s,t){if(this._offset=t,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function I_(s,t,e){for(var n="",i=0,o=t,a=t+e;o<a;o++){var r=s.getUint8(o);if(!(r&128)){n+=String.fromCharCode(r);continue}if((r&224)===192){n+=String.fromCharCode((r&31)<<6|s.getUint8(++o)&63);continue}if((r&240)===224){n+=String.fromCharCode((r&15)<<12|(s.getUint8(++o)&63)<<6|(s.getUint8(++o)&63)<<0);continue}if((r&248)===240){i=(r&7)<<18|(s.getUint8(++o)&63)<<12|(s.getUint8(++o)&63)<<6|(s.getUint8(++o)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+r.toString(16))}return n}Zs.prototype._array=function(s){for(var t=new Array(s),e=0;e<s;e++)t[e]=this._parse();return t};Zs.prototype._map=function(s){for(var t="",e={},n=0;n<s;n++)t=this._parse(),e[t]=this._parse();return e};Zs.prototype._str=function(s){var t=I_(this._view,this._offset,s);return this._offset+=s,t};Zs.prototype._bin=function(s){var t=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,t};Zs.prototype._parse=function(){var s=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,o=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),o=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+o)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,i+o;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,i+o;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+o);if(n===-1){i=this._view.getUint32(this._offset),o=this._view.getUint32(this._offset+4),this._offset+=8;var r=(i&3)*4294967296+o;return new Date(r*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function D_(s,t=0){var e=new Zs(s,t),n=e._parse();if(e._offset!==s.byteLength)throw new Error(s.byteLength-e._offset+" trailing bytes");return n}Xs.decode=D_;var O_=4294967296-1,N_=17179869184-1;function U_(s,t,e){for(var n=0,i=0,o=e.length;i<o;i++)n=e.charCodeAt(i),n<128?s.setUint8(t++,n):n<2048?(s.setUint8(t++,192|n>>6),s.setUint8(t++,128|n&63)):n<55296||n>=57344?(s.setUint8(t++,224|n>>12),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),s.setUint8(t++,240|n>>18),s.setUint8(t++,128|n>>12&63),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63))}function B_(s){for(var t=0,e=0,n=0,i=s.length;n<i;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Rs(s,t,e){var n=typeof e,i=0,o=0,a=0,r=0,c=0,l=0;if(n==="string"){if(c=B_(e),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(s.push(203),t.push({_float:e,_length:8,_offset:s.length}),9):e>=0?e<128?(s.push(e),1):e<256?(s.push(204,e),2):e<65536?(s.push(205,e>>8,e),3):e<4294967296?(s.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,r=e>>>0,s.push(207,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9):e>=-32?(s.push(e),1):e>=-128?(s.push(208,e),2):e>=-32768?(s.push(209,e>>8,e),3):e>=-2147483648?(s.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),r=e>>>0,s.push(211,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9);if(n==="object"){if(e===null)return s.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Rs(s,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),f=Math.floor(h/1e3),p=(h-f*1e3)*1e6;return f>=0&&p>=0&&f<=N_?p===0&&f<=O_?(s.push(214,255,f>>24,f>>16,f>>8,f),6):(a=f/4294967296,r=f&4294967295,s.push(215,255,p>>22,p>>14,p>>6,a,r>>24,r>>16,r>>8,r),10):(a=Math.floor(f/4294967296),r=f>>>0,s.push(199,12,255,p>>24,p>>16,p>>8,p,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:s.length}),l+c}if(typeof e.toJSON=="function")return Rs(s,t,e.toJSON());var g=[],v="",_=Object.keys(e);for(i=0,o=_.length;i<o;i++)v=_[i],e[v]!==void 0&&typeof e[v]!="function"&&g.push(v);if(c=g.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)v=g[i],l+=Rs(s,t,v),l+=Rs(s,t,e[v]);return l}if(n==="boolean")return s.push(e?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof e.toJSON=="function")return Rs(s,t,e.toJSON());throw new Error("Could not encode")}function k_(s){var t=[],e=[],n=Rs(t,e,s),i=new ArrayBuffer(n),o=new DataView(i),a=0,r=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,f=0,p=0,g=t.length;p<g;p++)if(o.setUint8(r+p,t[p]),p+1===c){if(l=e[a],h=l._length,f=r+c,l._bin)for(var v=new Uint8Array(l._bin),_=0;_<h;_++)o.setUint8(f+_,v[_]);else l._str?U_(o,f,l._str):l._float!==void 0&&o.setFloat64(f,l._float);a++,r+=h,e[a]&&(c=e[a]._offset)}return i}Xs.encode=k_;var ta={},ea={},F_=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},z_=ke&&ke.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ea,"__esModule",{value:!0});ea.WebSocketTransport=void 0;const H_=z_(F_),ja=globalThis.WebSocket||H_.default;class G_{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new ja(t,{headers:e,protocols:this.protocols})}catch{this.ws=new ja(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===ja.OPEN}}ea.WebSocketTransport=G_;Object.defineProperty(ta,"__esModule",{value:!0});ta.Connection=void 0;const V_=ea;class W_{constructor(){this.events={},this.transport=new V_.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}ta.Connection=W_;var $c={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function t(n,i){const o=n[i++];for(var a="",r=0,c=i,l=i+o;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){r=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,r>=65536?(r-=65536,a+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):a+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+h.toString(16))}return a}s.utf8Read=t;function e(n=""){let i=0,o=0;for(let a=0,r=n.length;a<r;a++)i=n.charCodeAt(a),i<128?o+=1:i<2048?o+=2:i<55296||i>=57344?o+=3:(a++,o+=4);return o+1}s.utf8Length=e})($c);var ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.getSerializer=ts.registerSerializer=void 0;const su={};function X_(s,t){su[s]=t}ts.registerSerializer=X_;function Y_(s){const t=su[s];if(!t)throw new Error("missing serializer: "+s);return t}ts.getSerializer=Y_;var So={};Object.defineProperty(So,"__esModule",{value:!0});So.createNanoEvents=void 0;const q_=()=>({emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(s,t){var e;return!((e=this.events[s])===null||e===void 0)&&e.push(t)||(this.events[s]=[t]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});So.createNanoEvents=q_;var Ys={};Object.defineProperty(Ys,"__esModule",{value:!0});Ys.createSignal=Ys.EventEmitter=void 0;class ou{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Ys.EventEmitter=ou;function j_(){const s=new ou;function t(e){return s.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),s.remove(n)};s.register(n)},t.remove=e=>s.remove(e),t.invoke=(...e)=>s.invoke(...e),t.invokeAsync=(...e)=>s.invokeAsync(...e),t.clear=()=>s.clear(),t}Ys.createSignal=j_;var Oc={exports:{}};(function(s,t){(function(e,n){n(t)})(ke,function(e){var n=function(x,m){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,S){y.__proto__=S}||function(y,S){for(var H in S)Object.prototype.hasOwnProperty.call(S,H)&&(y[H]=S[H])},n(x,m)};function i(x,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");n(x,m);function y(){this.constructor=x}x.prototype=m===null?Object.create(m):(y.prototype=m.prototype,new y)}function o(x,m,y,S){var H=arguments.length,et=H<3?m:S,Dt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")et=Reflect.decorate(x,m,y,S);else for(var At=x.length-1;At>=0;At--)(Dt=x[At])&&(et=(H<3?Dt(et):H>3?Dt(m,y,et):Dt(m,y))||et);return H>3&&et&&Object.defineProperty(m,y,et),et}function a(x,m,y){if(arguments.length===2)for(var S=0,H=m.length,et;S<H;S++)(et||!(S in m))&&(et||(et=Array.prototype.slice.call(m,0,S)),et[S]=m[S]);return x.concat(et||Array.prototype.slice.call(m))}typeof SuppressedError=="function"&&SuppressedError;var r=255,c=213;e.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function x(m,y,S){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=m,this.setParent(y,S)}return x.prototype.setParent=function(m,y,S){var H=this;if(this.indexes||(this.indexes=this.ref instanceof ge?this.ref._definition.indexes:{}),this.parent=m,this.parentIndex=S,!!y)if(this.root=y,this.ref instanceof ge){var et=this.ref._definition;for(var Dt in et.schema){var At=this.ref[Dt];if(At&&At.$changes){var ae=et.indexes[Dt];At.$changes.setParent(this.ref,y,ae)}}}else typeof this.ref=="object"&&this.ref.forEach(function(A,N){if(A instanceof ge){var V=A.$changes,z=H.ref.$changes.indexes[N];V.setParent(H.ref,H.root,z)}})},x.prototype.operation=function(m){this.changes.set(--this.currentCustomOperation,m)},x.prototype.change=function(m,y){y===void 0&&(y=e.OPERATION.ADD);var S=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(S,m);var H=this.changes.get(S);(!H||H.op===e.OPERATION.DELETE||H.op===e.OPERATION.TOUCH)&&this.changes.set(S,{op:H&&H.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:y,index:S}),this.allChanges.add(S),this.changed=!0,this.touchParents()},x.prototype.touch=function(m){var y=typeof m=="number"?m:this.indexes[m];this.assertValidIndex(y,m),this.changes.has(y)||this.changes.set(y,{op:e.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(m){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[m]]}else{var y=this.parent._definition,S=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(S)[0]}},x.prototype.getChildrenFilter=function(){var m=this.parent._definition.childFilters;return m&&m[this.parentIndex]},x.prototype.getValue=function(m){return this.ref.getByIndex(m)},x.prototype.delete=function(m){var y=typeof m=="number"?m:this.indexes[m];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(m," (").concat(y,")"));return}var S=this.getValue(y);this.changes.set(y,{op:e.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],S&&S.$changes&&(S.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(m,y){var S=this;m===void 0&&(m=!1),y===void 0&&(y=!1),this.ref instanceof ge||this.changes.forEach(function(H){if(H.op===e.OPERATION.DELETE){var et=S.ref.getIndex(H.index);delete S.indexes[et]}}),this.changes.clear(),this.changed=m,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var m=this;this.changes.forEach(function(y){var S=m.getValue(y.index);S&&S.$changes&&S.$changes.discardAll()}),this.discard()},x.prototype.cache=function(m,y){this.caches[m]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(m,y){if(m===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x}();function h(x,m,y,S){return x[m]||(x[m]=[]),x[m].push(y),S==null||S.forEach(function(H,et){return y(H,et)}),function(){return p(x[m],x[m].indexOf(y))}}function f(x){var m=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(S,H){x.push({refId:m.$changes.refId,op:e.OPERATION.DELETE,field:H,value:void 0,previousValue:S}),y&&m.$changes.root.removeRef(S.$changes.refId)})}function p(x,m){if(m===-1||m>=x.length)return!1;for(var y=x.length-1,S=m;S<y;S++)x[S]=x[S+1];return x.length=y,!0}var g=function(x,m){var y=x.toString(),S=m.toString();return y<S?-1:y>S?1:0};function v(x){return x.$proxy=!0,x=new Proxy(x,{get:function(m,y){return typeof y!="symbol"&&!isNaN(y)?m.at(y):m[y]},set:function(m,y,S){if(typeof y!="symbol"&&!isNaN(y)){var H=Array.from(m.$items.keys()),et=parseInt(H[y]||y);S==null?m.deleteAt(et):m.setAt(et,S)}else m[y]=S;return!0},deleteProperty:function(m,y){return typeof y=="number"?m.deleteAt(y):delete m[y],!0},has:function(m,y){return typeof y!="symbol"&&!isNaN(Number(y))?m.$items.has(Number(y)):Reflect.has(m,y)}}),x}var _=function(){function x(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,m)}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},x.is=function(m){return Array.isArray(m)||m.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(m){m===0?this.clear():this.splice(m,this.length-m)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var m=this,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];var H;return y.forEach(function(et){H=m.$refId++,m.setAt(H,et)}),H},x.prototype.pop=function(){var m=Array.from(this.$indexes.values()).pop();if(m!==void 0){this.$changes.delete(m),this.$indexes.delete(m);var y=this.$items.get(m);return this.$items.delete(m),y}},x.prototype.at=function(m){if(m=Math.trunc(m)||0,m<0&&(m+=this.length),!(m<0||m>=this.length)){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)}},x.prototype.setAt=function(m,y){var S,H;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(m)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,m);var et=(H=(S=this.$changes.indexes[m])===null||S===void 0?void 0:S.op)!==null&&H!==void 0?H:e.OPERATION.ADD;this.$changes.indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,y),this.$changes.change(m,et)}},x.prototype.deleteAt=function(m){var y=Array.from(this.$items.keys())[m];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(m){return this.$changes.delete(m),this.$indexes.delete(m),this.$items.delete(m)},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&f.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var m,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];return new(x.bind.apply(x,a([void 0],(m=Array.from(this.$items.values())).concat.apply(m,y),!1)))},x.prototype.join=function(m){return Array.from(this.$items.values()).join(m)},x.prototype.reverse=function(){var m=this,y=Array.from(this.$items.keys()),S=Array.from(this.$items.values()).reverse();return S.forEach(function(H,et){m.setAt(y[et],H)}),this},x.prototype.shift=function(){var m=Array.from(this.$items.keys()),y=m.shift();if(y!==void 0){var S=this.$items.get(y);return this.$deleteAt(y),S}},x.prototype.slice=function(m,y){var S=new x;return S.push.apply(S,Array.from(this.$items.values()).slice(m,y)),S},x.prototype.sort=function(m){var y=this;m===void 0&&(m=g);var S=Array.from(this.$items.keys()),H=Array.from(this.$items.values()).sort(m);return H.forEach(function(et,Dt){y.setAt(S[Dt],et)}),this},x.prototype.splice=function(m,y){y===void 0&&(y=this.length-m);for(var S=[],H=2;H<arguments.length;H++)S[H-2]=arguments[H];for(var et=Array.from(this.$items.keys()),Dt=[],At=m;At<m+y;At++)Dt.push(this.$items.get(et[At])),this.$deleteAt(et[At]);for(var At=0;At<S.length;At++)this.setAt(m+At,S[At]);return Dt},x.prototype.unshift=function(){for(var m=this,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];var H=this.length,et=y.length,Dt=Array.from(this.$items.values());return y.forEach(function(At,ae){m.setAt(ae,At)}),Dt.forEach(function(At,ae){m.setAt(et+ae,At)}),H+et},x.prototype.indexOf=function(m,y){return Array.from(this.$items.values()).indexOf(m,y)},x.prototype.lastIndexOf=function(m,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(m,y)},x.prototype.every=function(m,y){return Array.from(this.$items.values()).every(m,y)},x.prototype.some=function(m,y){return Array.from(this.$items.values()).some(m,y)},x.prototype.forEach=function(m,y){Array.from(this.$items.values()).forEach(m,y)},x.prototype.map=function(m,y){return Array.from(this.$items.values()).map(m,y)},x.prototype.filter=function(m,y){return Array.from(this.$items.values()).filter(m,y)},x.prototype.reduce=function(m,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(m,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(m,y){return Array.from(this.$items.values()).find(m,y)},x.prototype.findIndex=function(m,y){return Array.from(this.$items.values()).findIndex(m,y)},x.prototype.fill=function(m,y,S){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(m,y,S){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(m,y){return Array.from(this.$items.values()).includes(m,y)},x.prototype.flatMap=function(m,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(m){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var m=Array.from(this.$items.values());return m.findLast.apply(m,arguments)},x.prototype.findLastIndex=function(){var m=Array.from(this.$items.values());return m.findLastIndex.apply(m,arguments)},x.prototype.with=function(m,y){var S=Array.from(this.$items.values());return S[m]=y,new(x.bind.apply(x,a([void 0],S,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(m){return Array.from(this.$items.values()).sort(m)},x.prototype.toSpliced=function(m,y){var S=Array.from(this.$items.values());return S.toSpliced.apply(S,arguments)},x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(m){return typeof m.toJSON=="function"?m.toJSON():m})},x.prototype.clone=function(m){var y;return m?y=new(x.bind.apply(x,a([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,a([void 0],this.map(function(S){return S.$changes?S.clone():S}),!1))),y},x}();function u(x){return x.$proxy=!0,x=new Proxy(x,{get:function(m,y){return typeof y!="symbol"&&typeof m[y]>"u"?m.get(y):m[y]},set:function(m,y,S){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?m.set(y,S):m[y]=S,!0},deleteProperty:function(m,y){return m.delete(y),!0}}),x}var d=function(){function x(m){var y=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m)if(m instanceof Map||m instanceof x)m.forEach(function(H,et){return y.set(et,H)});else for(var S in m)this.set(S,m[S])}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},x.is=function(m){return m.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(m,y){if(y==null)throw new Error("MapSchema#set('".concat(m,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(m,"'."));m=m.toString();var S=typeof this.$changes.indexes[m]<"u",H=S?this.$changes.indexes[m]:this.$refId++,et=S?e.OPERATION.REPLACE:e.OPERATION.ADD,Dt=y.$changes!==void 0;if(Dt&&y.$changes.setParent(this,this.$changes.root,H),!S)this.$changes.indexes[m]=H,this.$indexes.set(H,m);else{if(!Dt&&this.$items.get(m)===y)return;Dt&&this.$items.get(m)!==y&&(et=e.OPERATION.ADD)}return this.$items.set(m,y),this.$changes.change(m,et),this},x.prototype.get=function(m){return this.$items.get(m)},x.prototype.delete=function(m){return this.$changes.delete(m.toString()),this.$items.delete(m)},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&f.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){return this.$items.has(m)},x.prototype.forEach=function(m){this.$items.forEach(m)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toJSON=function(){var m={};return this.forEach(function(y,S){m[S]=typeof y.toJSON=="function"?y.toJSON():y}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(S,H){S.$changes?y.set(H,S.clone()):y.set(H,S)})),y},x}(),E={};function M(x,m){E[x]=m}function w(x){return E[x]}var O=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(m){var y=new x;return y.schema=Object.assign({},m&&m.schema||{}),y.indexes=Object.assign({},m&&m.indexes||{}),y.fieldsByIndex=Object.assign({},m&&m.fieldsByIndex||{}),y.descriptors=Object.assign({},m&&m.descriptors||{}),y.deprecated=Object.assign({},m&&m.deprecated||{}),y},x.prototype.addField=function(m,y){var S=this.getNextFieldIndex();this.fieldsByIndex[S]=m,this.indexes[m]=S,this.schema[m]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(m){return this.indexes[m]!==void 0},x.prototype.addFilter=function(m,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[m]]=y,this.indexesWithFilters.push(this.indexes[m]),!0},x.prototype.addChildrenFilter=function(m,y){var S=this.indexes[m],H=this.schema[m];if(w(Object.keys(H)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[S]=y,!0;console.warn("@filterChildren: field '".concat(m,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(m){return this.childFilters&&this.childFilters[this.indexes[m]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function C(x){return x._context&&x._context.useFilters}var L=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(m){return this.schemas.has(m)},x.prototype.get=function(m){return this.types[m]},x.prototype.add=function(m,y){y===void 0&&(y=this.schemas.size),m._definition=O.create(m._definition),m._typeid=y,this.types[y]=m,this.schemas.set(m,y)},x.create=function(m){return m===void 0&&(m={}),function(y){return m.context||(m.context=new x),b(y,m)}},x}(),X=new L;function b(x,m){return m===void 0&&(m={}),function(y,S){var H=m.context||X,et=y.constructor;if(et._context=H,!x)throw new Error("".concat(et.name,': @type() reference provided for "').concat(S,`" is undefined. Make sure you don't have any circular dependencies.`));H.has(et)||H.add(et);var Dt=et._definition;if(Dt.addField(S,x),Dt.descriptors[S]){if(Dt.deprecated[S])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(S,"' definition on '").concat(et.name,`'.
Check @type() annotation`))}catch(z){var At=z.stack.split(`
`)[4].trim();throw new Error("".concat(z.message," ").concat(At))}}var ae=_.is(x),A=!ae&&d.is(x);if(typeof x!="string"&&!ge.is(x)){var N=Object.values(x)[0];typeof N!="string"&&!H.has(N)&&H.add(N)}if(m.manual){Dt.descriptors[S]={enumerable:!0,configurable:!0,writable:!0};return}var V="_".concat(S);Dt.descriptors[V]={enumerable:!1,configurable:!1,writable:!0},Dt.descriptors[S]={get:function(){return this[V]},set:function(z){z!==this[V]&&(z!=null?(ae&&!(z instanceof _)&&(z=new(_.bind.apply(_,a([void 0],z,!1)))),A&&!(z instanceof d)&&(z=new d(z)),z.$proxy===void 0&&(A?z=u(z):ae&&(z=v(z))),this.$changes.change(S),z.$changes&&z.$changes.setParent(this,this.$changes.root,this._definition.indexes[S])):this[V]!==void 0&&this.$changes.delete(S),this[V]=z)},enumerable:!0,configurable:!0}}}function R(x){return function(m,y){var S=m.constructor,H=S._definition;H.addFilter(y,x)&&(S._context.useFilters=!0)}}function W(x){return function(m,y){var S=m.constructor,H=S._definition;H.addChildrenFilter(y,x)&&(S._context.useFilters=!0)}}function q(x){return x===void 0&&(x=!0),function(m,y){var S=m.constructor,H=S._definition;H.deprecated[y]=!0,x&&(H.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(et){},enumerable:!1,configurable:!0})}}function tt(x,m,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||X);for(var S in m)b(m[S],y)(x.prototype,S);return x}function F(x){for(var m=0,y=0,S=0,H=x.length;S<H;S++)m=x.charCodeAt(S),m<128?y+=1:m<2048?y+=2:m<55296||m>=57344?y+=3:(S++,y+=4);return y}function Y(x,m,y){for(var S=0,H=0,et=y.length;H<et;H++)S=y.charCodeAt(H),S<128?x[m++]=S:S<2048?(x[m++]=192|S>>6,x[m++]=128|S&63):S<55296||S>=57344?(x[m++]=224|S>>12,x[m++]=128|S>>6&63,x[m++]=128|S&63):(H++,S=65536+((S&1023)<<10|y.charCodeAt(H)&1023),x[m++]=240|S>>18,x[m++]=128|S>>12&63,x[m++]=128|S>>6&63,x[m++]=128|S&63)}function K(x,m){x.push(m&255)}function Q(x,m){x.push(m&255)}function it(x,m){x.push(m&255),x.push(m>>8&255)}function st(x,m){x.push(m&255),x.push(m>>8&255)}function ot(x,m){x.push(m&255),x.push(m>>8&255),x.push(m>>16&255),x.push(m>>24&255)}function ut(x,m){var y=m>>24,S=m>>16,H=m>>8,et=m;x.push(et&255),x.push(H&255),x.push(S&255),x.push(y&255)}function pt(x,m){var y=Math.floor(m/Math.pow(2,32)),S=m>>>0;ut(x,S),ut(x,y)}function J(x,m){var y=m/Math.pow(2,32)>>0,S=m>>>0;ut(x,S),ut(x,y)}function at(x,m){qt(x,m)}function Et(x,m){Ft(x,m)}var Tt=new Int32Array(2),Ot=new Float32Array(Tt.buffer),Yt=new Float64Array(Tt.buffer);function qt(x,m){Ot[0]=m,ot(x,Tt[0])}function Ft(x,m){Yt[0]=m,ot(x,Tt[0]),ot(x,Tt[1])}function he(x,m){return Q(x,m?1:0)}function Z(x,m){m||(m="");var y=F(m),S=0;if(y<32)x.push(y|160),S=1;else if(y<256)x.push(217),Q(x,y),S=2;else if(y<65536)x.push(218),st(x,y),S=3;else if(y<4294967296)x.push(219),ut(x,y),S=5;else throw new Error("String too long");return Y(x,x.length,m),S+y}function ve(x,m){if(isNaN(m))return ve(x,0);if(isFinite(m)){if(m!==(m|0))return x.push(203),Ft(x,m),9}else return ve(x,m>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return m>=0?m<128?(Q(x,m),1):m<256?(x.push(204),Q(x,m),2):m<65536?(x.push(205),st(x,m),3):m<4294967296?(x.push(206),ut(x,m),5):(x.push(207),J(x,m),9):m>=-32?(x.push(224|m+32),1):m>=-128?(x.push(208),K(x,m),2):m>=-32768?(x.push(209),it(x,m),3):m>=-2147483648?(x.push(210),ot(x,m),5):(x.push(211),pt(x,m),9)}var Bt=Object.freeze({__proto__:null,boolean:he,float32:at,float64:Et,int16:it,int32:ot,int64:pt,int8:K,number:ve,string:Z,uint16:st,uint32:ut,uint64:J,uint8:Q,utf8Write:Y,writeFloat32:qt,writeFloat64:Ft});function Xt(x,m,y){for(var S="",H=0,et=m,Dt=m+y;et<Dt;et++){var At=x[et];if(!(At&128)){S+=String.fromCharCode(At);continue}if((At&224)===192){S+=String.fromCharCode((At&31)<<6|x[++et]&63);continue}if((At&240)===224){S+=String.fromCharCode((At&15)<<12|(x[++et]&63)<<6|(x[++et]&63)<<0);continue}if((At&248)===240){H=(At&7)<<18|(x[++et]&63)<<12|(x[++et]&63)<<6|(x[++et]&63)<<0,H>=65536?(H-=65536,S+=String.fromCharCode((H>>>10)+55296,(H&1023)+56320)):S+=String.fromCharCode(H);continue}console.error("Invalid byte "+At.toString(16))}return S}function Ct(x,m){return xe(x,m)<<24>>24}function xe(x,m){return x[m.offset++]}function Zt(x,m){return D(x,m)<<16>>16}function D(x,m){return x[m.offset++]|x[m.offset++]<<8}function T(x,m){return x[m.offset++]|x[m.offset++]<<8|x[m.offset++]<<16|x[m.offset++]<<24}function j(x,m){return T(x,m)>>>0}function ht(x,m){return jt(x,m)}function lt(x,m){return rt(x,m)}function dt(x,m){var y=j(x,m),S=T(x,m)*Math.pow(2,32);return S+y}function Lt(x,m){var y=j(x,m),S=j(x,m)*Math.pow(2,32);return S+y}var _t=new Int32Array(2),St=new Float32Array(_t.buffer),zt=new Float64Array(_t.buffer);function jt(x,m){return _t[0]=T(x,m),St[0]}function rt(x,m){return _t[0]=T(x,m),_t[1]=T(x,m),zt[0]}function _e(x,m){return xe(x,m)>0}function ne(x,m){var y=x[m.offset++],S;y<192?S=y&31:y===217?S=xe(x,m):y===218?S=D(x,m):y===219&&(S=j(x,m));var H=Xt(x,m.offset,S);return m.offset+=S,H}function Wt(x,m){var y=x[m.offset];return y<192&&y>160||y===217||y===218||y===219}function Rt(x,m){var y=x[m.offset++];if(y<128)return y;if(y===202)return jt(x,m);if(y===203)return rt(x,m);if(y===204)return xe(x,m);if(y===205)return D(x,m);if(y===206)return j(x,m);if(y===207)return Lt(x,m);if(y===208)return Ct(x,m);if(y===209)return Zt(x,m);if(y===210)return T(x,m);if(y===211)return dt(x,m);if(y>223)return(255-y+1)*-1}function wt(x,m){var y=x[m.offset];return y<128||y>=202&&y<=211}function $t(x,m){return x[m.offset]<160}function fe(x,m){return x[m.offset-1]===r&&(x[m.offset]<128||x[m.offset]>=202&&x[m.offset]<=211)}var Re=Object.freeze({__proto__:null,arrayCheck:$t,boolean:_e,float32:ht,float64:lt,int16:Zt,int32:T,int64:dt,int8:Ct,number:Rt,numberCheck:wt,readFloat32:jt,readFloat64:rt,string:ne,stringCheck:Wt,switchStructureCheck:fe,uint16:D,uint32:j,uint64:Lt,uint8:xe}),Kt=function(){function x(m){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(S){return y.add(S)})}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,m)},x.is=function(m){return m.collection!==void 0},x.prototype.add=function(m){var y=this.$refId++,S=m.$changes!==void 0;return S&&m.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,m),this.$changes.change(y),y},x.prototype.at=function(m){var y=Array.from(this.$items.keys())[m];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(m){for(var y=this.$items.entries(),S,H;(H=y.next())&&!H.done;)if(m===H.value[1]){S=H.value[0];break}return S===void 0?!1:(this.$changes.delete(S),this.$indexes.delete(S),this.$items.delete(S))},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&f.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){return Array.from(this.$items.values()).some(function(y){return y===m})},x.prototype.forEach=function(m){var y=this;this.$items.forEach(function(S,H,et){return m(S,H,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var m=[];return this.forEach(function(y,S){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(S){S.$changes?y.add(S.clone()):y.add(S)})),y},x}(),ft=function(){function x(m){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,m&&m.forEach(function(S){return y.add(S)})}return x.prototype.onAdd=function(m,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,m,y?this.$items:void 0)},x.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,m)},x.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,m)},x.is=function(m){return m.set!==void 0},x.prototype.add=function(m){var y,S;if(this.has(m))return!1;var H=this.$refId++;m.$changes!==void 0&&m.$changes.setParent(this,this.$changes.root,H);var et=(S=(y=this.$changes.indexes[H])===null||y===void 0?void 0:y.op)!==null&&S!==void 0?S:e.OPERATION.ADD;return this.$changes.indexes[H]=H,this.$indexes.set(H,H),this.$items.set(H,m),this.$changes.change(H,et),H},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(m){for(var y=this.$items.entries(),S,H;(H=y.next())&&!H.done;)if(m===H.value[1]){S=H.value[0];break}return S===void 0?!1:(this.$changes.delete(S),this.$indexes.delete(S),this.$items.delete(S))},x.prototype.clear=function(m){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),m&&f.call(this,m),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(m){for(var y=this.$items.values(),S=!1,H;(H=y.next())&&!H.done;)if(m===H.value){S=!0;break}return S},x.prototype.forEach=function(m){var y=this;this.$items.forEach(function(S,H,et){return m(S,H,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(m,y){this.$indexes.set(m,y)},x.prototype.getIndex=function(m){return this.$indexes.get(m)},x.prototype.getByIndex=function(m){return this.$items.get(this.$indexes.get(m))},x.prototype.deleteByIndex=function(m){var y=this.$indexes.get(m);this.$items.delete(y),this.$indexes.delete(m)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var m=[];return this.forEach(function(y,S){m.push(typeof y.toJSON=="function"?y.toJSON():y)}),m},x.prototype.clone=function(m){var y;return m?y=Object.assign(new x,this):(y=new x,this.forEach(function(S){S.$changes?y.add(S.clone()):y.add(S)})),y},x}(),k=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(m){this.refIds.has(m)||(this.refIds.add(m),this.containerIndexes.set(m,new Set))},x.get=function(m){return m.$filterState===void 0&&(m.$filterState=new x),m.$filterState},x}(),Mt=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(m,y,S){S===void 0&&(S=!0),this.refs.set(m,y),S&&(this.refCounts[m]=(this.refCounts[m]||0)+1)},x.prototype.removeRef=function(m){var y=this.refCounts[m];if(y===void 0){console.warn("trying to remove reference ".concat(m," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(m," with 0 refCount"));return}this.refCounts[m]=y-1,this.deletedRefs.add(m)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var m=this;this.deletedRefs.forEach(function(y){if(!(m.refCounts[y]>0)){var S=m.refs.get(y);if(S instanceof ge)for(var H in S._definition.schema)typeof S._definition.schema[H]!="string"&&S[H]&&S[H].$changes&&m.removeRef(S[H].$changes.refId);else{var et=S.$changes.parent._definition,Dt=et.schema[et.fieldsByIndex[S.$changes.parentIndex]];typeof Object.values(Dt)[0]=="function"&&Array.from(S.values()).forEach(function(At){return m.removeRef(At.$changes.refId)})}m.refs.delete(y),delete m.refCounts[y]}}),this.deletedRefs.clear()},x}(),xt=function(x){i(m,x);function m(){return x!==null&&x.apply(this,arguments)||this}return m}(Error);function Ht(x,m,y,S){var H,et=!1;switch(m){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":H="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(S));break;case"string":H="string",et=!0;break;case"boolean":return}if(typeof x!==H&&(!et||et&&x!==null)){var Dt="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new xt("a '".concat(H,"' was expected, but ").concat(Dt," was provided in ").concat(y.constructor.name,"#").concat(S))}}function kt(x,m,y,S){if(!(x instanceof m))throw new xt("a '".concat(m.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(S))}function ye(x,m,y,S,H){Ht(y,x,S,H);var et=Bt[x];if(et)et(m,y);else throw new xt("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(S.constructor.name,"#").concat(H))}function Me(x,m,y){return Re[x](m,y)}var ge=function(){function x(){for(var m=[],y=0;y<arguments.length;y++)m[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var S=this._definition.descriptors;S&&Object.defineProperties(this,S),m[0]&&this.assign(m[0])}return x.onError=function(m){console.error(m)},x.is=function(m){return m._definition&&m._definition.schema!==void 0},x.prototype.onChange=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,m)},x.prototype.onRemove=function(m){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,m)},x.prototype.assign=function(m){return Object.assign(this,m),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(m,y){this.$changes.change(m,y)},x.prototype.listen=function(m,y,S){var H=this;return S===void 0&&(S=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[m]||(this.$callbacks[m]=[]),this.$callbacks[m].push(y),S&&this[m]!==void 0&&y(this[m],void 0),function(){return p(H.$callbacks[m],H.$callbacks[m].indexOf(y))}},x.prototype.decode=function(m,y,S){y===void 0&&(y={offset:0}),S===void 0&&(S=this);var H=[],et=this.$changes.root,Dt=m.length,At=0;for(et.refs.set(At,this);y.offset<Dt;){var ae=m[y.offset++];if(ae==r){At=Rt(m,y);var A=et.refs.get(At);if(!A)throw new Error('"refId" not found: '.concat(At));S=A;continue}var N=S.$changes,V=S._definition!==void 0,z=V?ae>>6<<6:ae;if(z===e.OPERATION.CLEAR){S.clear(H);continue}var G=V?ae%(z||255):Rt(m,y),nt=V?S._definition.fieldsByIndex[G]:"",ct=N.getType(G),$=void 0,mt=void 0,Ut=void 0;if(V?mt=S["_".concat(nt)]:(mt=S.getByIndex(G),(z&e.OPERATION.ADD)===e.OPERATION.ADD?(Ut=S instanceof d?ne(m,y):G,S.setIndex(G,Ut)):Ut=S.getIndex(G)),(z&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(z!==e.OPERATION.DELETE_AND_ADD&&S.deleteByIndex(G),mt&&mt.$changes&&et.removeRef(mt.$changes.refId),$=null),nt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var bt={offset:y.offset};y.offset<Dt&&!(fe(m,y)&&(bt.offset=y.offset+1,et.refs.has(Rt(m,bt))));)y.offset++;continue}else if(z!==e.OPERATION.DELETE)if(x.is(ct)){var gt=Rt(m,y);if($=et.refs.get(gt),z!==e.OPERATION.REPLACE){var Nt=this.getSchemaType(m,y,ct);$||($=this.createTypeInstance(Nt),$.$changes.refId=gt,mt&&($.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&et.removeRef(mt.$changes.refId))),et.addRef(gt,$,$!==mt)}}else if(typeof ct=="string")$=Me(ct,m,y);else{var Fe=w(Object.keys(ct)[0]),be=Rt(m,y),He=et.refs.has(be)?mt||et.refs.get(be):new Fe.constructor;if($=He.clone(!0),$.$changes.refId=be,mt&&($.$callbacks=mt.$callbacks,mt.$changes.refId&&be!==mt.$changes.refId)){et.removeRef(mt.$changes.refId);for(var Jt=mt.entries(),It=void 0;(It=Jt.next())&&!It.done;){var ui=It.value,pe=ui[0],In=ui[1];H.push({refId:be,op:e.OPERATION.DELETE,field:pe,value:void 0,previousValue:In})}}et.addRef(be,$,He!==mt)}if($!=null){if($.$changes&&$.$changes.setParent(N.ref,N.root,G),S instanceof x)S[nt]=$;else if(S instanceof d){var pe=Ut;S.$items.set(pe,$),S.$changes.allChanges.add(G)}else if(S instanceof _)S.setAt(G,$);else if(S instanceof Kt){var Dn=S.add($);S.setIndex(G,Dn)}else if(S instanceof ft){var Dn=S.add($);Dn!==!1&&S.setIndex(G,Dn)}}mt!==$&&H.push({refId:At,op:z,field:nt,dynamicIndex:Ut,value:$,previousValue:mt})}return this._triggerChanges(H),et.garbageCollectDeletedRefs(),H},x.prototype.encode=function(m,y,S){m===void 0&&(m=!1),y===void 0&&(y=[]),S===void 0&&(S=!1);for(var H=this.$changes,et=new WeakSet,Dt=[H],At=1,ae=0;ae<At;ae++){var A=Dt[ae],N=A.ref,V=N instanceof x;A.ensureRefId(),et.add(A),A!==H&&(A.changed||m)&&(Q(y,r),ve(y,A.refId));for(var z=m?Array.from(A.allChanges):Array.from(A.changes.values()),G=0,nt=z.length;G<nt;G++){var ct=m?{op:e.OPERATION.ADD,index:z[G]}:z[G],$=ct.index,mt=V?N._definition.fieldsByIndex&&N._definition.fieldsByIndex[$]:$,Ut=y.length;if(ct.op!==e.OPERATION.TOUCH)if(V)Q(y,$|ct.op);else{if(Q(y,ct.op),ct.op===e.OPERATION.CLEAR)continue;ve(y,$)}if(!V&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&N instanceof d){var bt=A.ref.$indexes.get($);Z(y,bt)}if(ct.op!==e.OPERATION.DELETE){var gt=A.getType($),Nt=A.getValue($);if(Nt&&Nt.$changes&&!et.has(Nt.$changes)&&(Dt.push(Nt.$changes),Nt.$changes.ensureRefId(),At++),ct.op!==e.OPERATION.TOUCH){if(x.is(gt))kt(Nt,gt,N,mt),ve(y,Nt.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(y,gt,Nt.constructor);else if(typeof gt=="string")ye(gt,y,Nt,N,mt);else{var Fe=w(Object.keys(gt)[0]);kt(N["_".concat(mt)],Fe.constructor,N,mt),ve(y,Nt.$changes.refId)}S&&A.cache($,y.slice(Ut))}}}!m&&!S&&A.discard()}return y},x.prototype.encodeAll=function(m){return this.encode(!0,[],m)},x.prototype.applyFilters=function(m,y){var S,H;y===void 0&&(y=!1);for(var et=this,Dt=new Set,At=k.get(m),ae=[this.$changes],A=1,N=[],V=function(G){var nt=ae[G];if(Dt.has(nt.refId))return"continue";var ct=nt.ref,$=ct instanceof x;Q(N,r),ve(N,nt.refId);var mt=At.refIds.has(nt),Ut=y||!mt;At.addRefId(nt);var bt=At.containerIndexes.get(nt),gt=Ut?Array.from(nt.allChanges):Array.from(nt.changes.values());if(!y&&$&&ct._definition.indexesWithFilters){var Nt=ct._definition.indexesWithFilters;Nt.forEach(function(Xn){!bt.has(Xn)&&nt.allChanges.has(Xn)&&(Ut?gt.push(Xn):gt.push({op:e.OPERATION.ADD,index:Xn}))})}for(var Fe=0,be=gt.length;Fe<be;Fe++){var He=Ut?{op:e.OPERATION.ADD,index:gt[Fe]}:gt[Fe];if(He.op===e.OPERATION.CLEAR){Q(N,He.op);continue}var Jt=He.index;if(He.op===e.OPERATION.DELETE){$?Q(N,He.op|Jt):(Q(N,He.op),ve(N,Jt));continue}var It=nt.getValue(Jt),ui=nt.getType(Jt);if($){var pe=ct._definition.filters&&ct._definition.filters[Jt];if(pe&&!pe.call(ct,m,It,et)){It&&It.$changes&&Dt.add(It.$changes.refId);continue}}else{var In=nt.parent,pe=nt.getChildrenFilter();if(pe&&!pe.call(In,m,ct.$indexes.get(Jt),It,et)){It&&It.$changes&&Dt.add(It.$changes.refId);continue}}if(It.$changes&&(ae.push(It.$changes),A++),He.op!==e.OPERATION.TOUCH)if(He.op===e.OPERATION.ADD||$)N.push.apply(N,(S=nt.caches[Jt])!==null&&S!==void 0?S:[]),bt.add(Jt);else if(bt.has(Jt))N.push.apply(N,(H=nt.caches[Jt])!==null&&H!==void 0?H:[]);else{if(bt.add(Jt),Q(N,e.OPERATION.ADD),ve(N,Jt),ct instanceof d){var Dn=nt.ref.$indexes.get(Jt);Z(N,Dn)}It.$changes?ve(N,It.$changes.refId):Bt[ui](N,It)}else if(It.$changes&&!$){if(Q(N,e.OPERATION.ADD),ve(N,Jt),ct instanceof d){var Dn=nt.ref.$indexes.get(Jt);Z(N,Dn)}ve(N,It.$changes.refId)}}},z=0;z<A;z++)V(z);return N},x.prototype.clone=function(){var m,y=new this.constructor,S=this._definition.schema;for(var H in S)typeof this[H]=="object"&&typeof((m=this[H])===null||m===void 0?void 0:m.clone)=="function"?y[H]=this[H].clone():y[H]=this[H];return y},x.prototype.toJSON=function(){var m=this._definition.schema,y=this._definition.deprecated,S={};for(var H in m)!y[H]&&this[H]!==null&&typeof this[H]<"u"&&(S[H]=typeof this[H].toJSON=="function"?this[H].toJSON():this["_".concat(H)]);return S},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(m){return this[this._definition.fieldsByIndex[m]]},x.prototype.deleteByIndex=function(m){this[this._definition.fieldsByIndex[m]]=void 0},x.prototype.tryEncodeTypeId=function(m,y,S){y._typeid!==S._typeid&&(Q(m,c),ve(m,S._typeid))},x.prototype.getSchemaType=function(m,y,S){var H;return m[y.offset]===c&&(y.offset++,H=this.constructor._context.get(Rt(m,y))),H||S},x.prototype.createTypeInstance=function(m){var y=new m;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(m){for(var y,S,H,et,Dt,At,ae,A,N,V=new Set,z=this.$changes.root.refs,G=function(ct){var $=m[ct],mt=$.refId,Ut=z.get(mt),bt=Ut.$callbacks;if(($.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&$.previousValue instanceof x&&((S=(y=$.previousValue.$callbacks)===null||y===void 0?void 0:y[e.OPERATION.DELETE])===null||S===void 0||S.forEach(function(gt){return gt()})),!bt)return"continue";if(Ut instanceof x){if(!V.has(mt))try{(H=bt==null?void 0:bt[e.OPERATION.REPLACE])===null||H===void 0||H.forEach(function(gt){return gt()})}catch(gt){x.onError(gt)}try{bt.hasOwnProperty($.field)&&((et=bt[$.field])===null||et===void 0||et.forEach(function(gt){return gt($.value,$.previousValue)}))}catch(gt){x.onError(gt)}}else $.op===e.OPERATION.ADD&&$.previousValue===void 0?(Dt=bt[e.OPERATION.ADD])===null||Dt===void 0||Dt.forEach(function(gt){var Nt;return gt($.value,(Nt=$.dynamicIndex)!==null&&Nt!==void 0?Nt:$.field)}):$.op===e.OPERATION.DELETE?$.previousValue!==void 0&&((At=bt[e.OPERATION.DELETE])===null||At===void 0||At.forEach(function(gt){var Nt;return gt($.previousValue,(Nt=$.dynamicIndex)!==null&&Nt!==void 0?Nt:$.field)})):$.op===e.OPERATION.DELETE_AND_ADD&&($.previousValue!==void 0&&((ae=bt[e.OPERATION.DELETE])===null||ae===void 0||ae.forEach(function(gt){var Nt;return gt($.previousValue,(Nt=$.dynamicIndex)!==null&&Nt!==void 0?Nt:$.field)})),(A=bt[e.OPERATION.ADD])===null||A===void 0||A.forEach(function(gt){var Nt;return gt($.value,(Nt=$.dynamicIndex)!==null&&Nt!==void 0?Nt:$.field)})),$.value!==$.previousValue&&((N=bt[e.OPERATION.REPLACE])===null||N===void 0||N.forEach(function(gt){var Nt;return gt($.value,(Nt=$.dynamicIndex)!==null&&Nt!==void 0?Nt:$.field)}));V.add(mt)},nt=0;nt<m.length;nt++)G(nt)},x._definition=O.create(),x}();function $e(x){for(var m=[x.$changes],y=1,S={},H=S,et=function(At){var ae=m[At];ae.changes.forEach(function(A){var N=ae.ref,V=A.index,z=N._definition?N._definition.fieldsByIndex[V]:N.$indexes.get(V);H[z]=ae.getValue(V)})},Dt=0;Dt<y;Dt++)et(Dt);return S}var ue={context:new L},Ye=function(x){i(m,x);function m(){return x!==null&&x.apply(this,arguments)||this}return o([b("string",ue)],m.prototype,"name",void 0),o([b("string",ue)],m.prototype,"type",void 0),o([b("number",ue)],m.prototype,"referencedType",void 0),m}(ge),cn=function(x){i(m,x);function m(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new _,y}return o([b("number",ue)],m.prototype,"id",void 0),o([b([Ye],ue)],m.prototype,"fields",void 0),m}(ge),Ao=function(x){i(m,x);function m(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new _,y}return m.encode=function(y){var S,H=y.constructor,et=new m;et.rootType=H._typeid;var Dt=function(N,V){for(var z in V){var G=new Ye;G.name=z;var nt=void 0;if(typeof V[z]=="string")nt=V[z];else{var ct=V[z],$=void 0;ge.is(ct)?(nt="ref",$=V[z]):(nt=Object.keys(ct)[0],typeof ct[nt]=="string"?nt+=":"+ct[nt]:$=ct[nt]),G.referencedType=$?$._typeid:-1}G.type=nt,N.fields.push(G)}et.types.push(N)},At=(S=H._context)===null||S===void 0?void 0:S.types;for(var ae in At){var A=new cn;A.id=Number(ae),Dt(A,At[ae]._definition.schema)}return et.encodeAll()},m.decode=function(y,S){var H=new L,et=new m;et.decode(y,S);var Dt=et.types.reduce(function(V,z){var G=function(ct){i($,ct);function $(){return ct!==null&&ct.apply(this,arguments)||this}return $}(ge),nt=z.id;return V[nt]=G,H.add(G,nt),V},{});et.types.forEach(function(V){var z=Dt[V.id];V.fields.forEach(function(G){var nt;if(G.referencedType!==void 0){var ct=G.type,$=Dt[G.referencedType];if(!$){var mt=G.type.split(":");ct=mt[0],$=mt[1]}ct==="ref"?b($,{context:H})(z.prototype,G.name):b((nt={},nt[ct]=$,nt),{context:H})(z.prototype,G.name)}else b(G.type,{context:H})(z.prototype,G.name)})});var At=Dt[et.rootType],ae=new At;for(var A in At._definition.schema){var N=At._definition.schema[A];typeof N!="string"&&(ae[A]=typeof N=="function"?new N:new(w(Object.keys(N)[0])).constructor)}return ae},o([b([cn],ue)],m.prototype,"types",void 0),o([b("number",ue)],m.prototype,"rootType",void 0),m}(ge);M("map",{constructor:d}),M("array",{constructor:_}),M("set",{constructor:ft}),M("collection",{constructor:Kt}),e.ArraySchema=_,e.CollectionSchema=Kt,e.Context=L,e.MapSchema=d,e.Reflection=Ao,e.ReflectionField=Ye,e.ReflectionType=cn,e.Schema=ge,e.SchemaDefinition=O,e.SetSchema=ft,e.decode=Re,e.defineTypes=tt,e.deprecated=q,e.dumpChanges=$e,e.encode=Bt,e.filter=R,e.filterChildren=W,e.hasFilter=C,e.registerType=M,e.type=b})})(Oc,Oc.exports);var ru=Oc.exports,Z_=ke&&ke.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),$_=ke&&ke.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),K_=ke&&ke.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&Z_(t,s,e);return $_(t,s),t};Object.defineProperty(bo,"__esModule",{value:!0});bo.Room=void 0;const Zh=K_(Xs),J_=ta,en=$c,$h=ts,Q_=So,mr=Ys,vn=ru,Kh=Qr;class Kc{constructor(t,e){this.onStateChange=(0,mr.createSignal)(),this.onError=(0,mr.createSignal)(),this.onLeave=(0,mr.createSignal)(),this.onJoin=(0,mr.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,Q_.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,$h.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var o;return(o=console.warn)===null||o===void 0?void 0:o.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const o=new J_.Connection;n.connection=o,o.events.onmessage=Kc.prototype.onMessageCallback.bind(n),o.events.onclose=function(a){var r;if(!n.hasJoined){(r=console.warn)===null||r===void 0||r.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===Kh.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},o.events.onerror=function(a){var r;(r=console.warn)===null||r===void 0||r.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},o.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([en.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Kh.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[en.Protocol.ROOM_DATA];typeof t=="string"?vn.encode.string(n,t):vn.encode.number(n,t);let i;if(e!==void 0){const o=Zh.encode(e);i=new Uint8Array(n.length+o.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(o),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[en.Protocol.ROOM_DATA_BYTES];typeof t=="string"?vn.encode.string(n,t):vn.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===en.Protocol.JOIN_ROOM){let i=1;const o=(0,en.utf8Read)(e,i);if(i+=(0,en.utf8Length)(o),this.serializerId=(0,en.utf8Read)(e,i),i+=(0,en.utf8Length)(this.serializerId),!this.serializer){const a=(0,$h.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${o}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([en.Protocol.JOIN_ROOM])}else if(n===en.Protocol.ERROR){const i={offset:1},o=vn.decode.number(e,i),a=vn.decode.string(e,i);this.onError.invoke(o,a)}else if(n===en.Protocol.LEAVE_ROOM)this.leave();else if(n===en.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(vn.decode.number(e,i)),r=new a;r.decode(e,i),this.dispatchMessage(a,r)}else if(n===en.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===en.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===en.Protocol.ROOM_DATA){const i={offset:1},o=vn.decode.stringCheck(e,i)?vn.decode.string(e,i):vn.decode.number(e,i),a=e.length>i.offset?Zh.decode(t.data,i.offset):void 0;this.dispatchMessage(o,a)}else if(n===en.Protocol.ROOM_DATA_BYTES){const i={offset:1},o=vn.decode.stringCheck(e,i)?vn.decode.string(e,i):vn.decode.number(e,i);this.dispatchMessage(o,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}bo.Room=Kc;var na={};function Jh(s,t){t.headers=s.headers||{},t.statusMessage=s.statusText,t.statusCode=s.status,t.data=s.response}function Vn(s,t,e){return new Promise(function(n,i){e=e||{};var o=new XMLHttpRequest,a,r,c,l=e.body,h=e.headers||{};e.timeout&&(o.timeout=e.timeout),o.ontimeout=o.onerror=function(f){f.timeout=f.type=="timeout",i(f)},o.open(s,t.href||t),o.onload=function(){for(c=o.getAllResponseHeaders().trim().split(/[\r\n]+/),Jh(o,o);r=c.shift();)r=r.split(": "),o.headers[r.shift().toLowerCase()]=r.join(": ");if(r=o.headers["content-type"],r&&~r.indexOf("application/json"))try{o.data=JSON.parse(o.data,e.reviver)}catch(f){return Jh(o,f),i(f)}(o.status>=400?i:n)(o)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),o.withCredentials=!!e.withCredentials;for(a in h)o.setRequestHeader(a,h[a]);o.send(l)})}var tx=Vn.bind(Vn,"GET"),ex=Vn.bind(Vn,"POST"),nx=Vn.bind(Vn,"PATCH"),ix=Vn.bind(Vn,"DELETE"),sx=Vn.bind(Vn,"PUT");const ox=Object.freeze(Object.defineProperty({__proto__:null,del:ix,get:tx,patch:nx,post:ex,put:sx,send:Vn},Symbol.toStringTag,{value:"Module"})),rx=L_(ox);var ax=ke&&ke.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),cx=ke&&ke.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),lx=ke&&ke.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&ax(t,s,e);return cx(t,s),t};Object.defineProperty(na,"__esModule",{value:!0});na.HTTP=void 0;const hx=Qr,dx=lx(rx);class ux{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return dx[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var o;const a=i.statusCode,r=((o=i.data)===null||o===void 0?void 0:o.error)||i.statusMessage||i.message;throw!a&&!r?i:new hx.ServerError(a,r)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}na.HTTP=ux;var wo={},Ri={};Object.defineProperty(Ri,"__esModule",{value:!0});Ri.getItem=Ri.removeItem=Ri.setItem=void 0;let lo;function Jc(){if(!lo)try{lo=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return lo||(lo={cache:{},setItem:function(s,t){this.cache[s]=t},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),lo}function fx(s,t){Jc().setItem(s,t)}Ri.setItem=fx;function px(s){Jc().removeItem(s)}Ri.removeItem=px;function mx(s,t){const e=Jc().getItem(s);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Ri.getItem=mx;var ki=ke&&ke.__awaiter||function(s,t,e,n){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function r(h){try{l(n.next(h))}catch(f){a(f)}}function c(h){try{l(n.throw(h))}catch(f){a(f)}}function l(h){h.done?o(h.value):i(h.value).then(r,c)}l((n=n.apply(s,t||[])).next())})},Ss=ke&&ke.__classPrivateFieldGet||function(s,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!n:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(s):n?n.value:t.get(s)},ho=ke&&ke.__classPrivateFieldSet||function(s,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,e):i?i.value=e:t.set(s,e),e},wr,Nc,_i,Ar;Object.defineProperty(wo,"__esModule",{value:!0});wo.Auth=void 0;const Za=Ri,gx=So;class vx{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},wr.set(this,!1),Nc.set(this,void 0),_i.set(this,void 0),Ar.set(this,(0,gx.createNanoEvents)()),(0,Za.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Ss(this,Ar,"f").on("change",t);return Ss(this,wr,"f")||ho(this,Nc,new Promise((n,i)=>{this.getUserData().then(o=>{this.emitChange(Object.assign(Object.assign({},o),{token:this.token}))}).catch(o=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),ho(this,wr,!0,"f"),e}getUserData(){return ki(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return ki(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return ki(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return ki(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return ki(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return ki(this,void 0,void 0,function*(){return new Promise((n,i)=>{const o=e.width||480,a=e.height||768,r=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${r}`),h=screen.width/2-o/2,f=screen.height/2-a/2;ho(this,_i,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+o+", height="+a+", top="+f+", left="+h),"f");const p=v=>{v.data.user===void 0&&v.data.token===void 0||(clearInterval(g),Ss(this,_i,"f").close(),ho(this,_i,void 0,"f"),window.removeEventListener("message",p),v.data.error!==void 0?i(v.data.error):(n(v.data),this.emitChange(v.data)))},g=setInterval(()=>{(!Ss(this,_i,"f")||Ss(this,_i,"f").closed)&&(ho(this,_i,void 0,"f"),i("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return ki(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Za.removeItem)(this.settings.key):(0,Za.setItem)(this.settings.key,t.token)),Ss(this,Ar,"f").emit("change",t)}}wo.Auth=vx;wr=new WeakMap,Nc=new WeakMap,_i=new WeakMap,Ar=new WeakMap;var ia={};Object.defineProperty(ia,"__esModule",{value:!0});ia.discordURLBuilder=void 0;function _x(s){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${e}${i}${s.pathname}${s.search}`:`${s.protocol}//${e}/.proxy/colyseus${i}${s.pathname}${s.search}`}ia.discordURLBuilder=_x;var qn=ke&&ke.__awaiter||function(s,t,e,n){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function r(h){try{l(n.next(h))}catch(f){a(f)}}function c(h){try{l(n.throw(h))}catch(f){a(f)}}function l(h){h.done?o(h.value):i(h.value).then(r,c)}l((n=n.apply(s,t||[])).next())})},$a;Object.defineProperty(Ws,"__esModule",{value:!0});Ws.Client=Ws.MatchMakeError=void 0;const xx=Qr,yx=bo,Mx=na,Ex=wo,bx=ia;class sa extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,sa.prototype)}}Ws.MatchMakeError=sa;const Qh=typeof window<"u"&&typeof(($a=window==null?void 0:window.location)===null||$a===void 0?void 0:$a.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Sx{constructor(t=Qh,e){var n,i;if(typeof t=="string"){const o=t.startsWith("/")?new URL(t,Qh):new URL(t),a=o.protocol==="https:"||o.protocol==="wss:",r=Number(o.port||(a?443:80));this.settings={hostname:o.hostname,pathname:o.pathname,port:r,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new Mx.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new Ex.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=bx.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return qn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return qn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return qn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return qn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return qn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return qn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return qn(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const o={sessionId:i.sessionId};t.reconnectionToken&&(o.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,o),t.devMode&&(()=>qn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let r=0,c=8;const l=()=>qn(this,void 0,void 0,function*(){r++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{r<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((r,c)=>{const l=(h,f)=>c(new xx.ServerError(h,f));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),r(a)})})})}createMatchMakeRequest(t,e,n={},i,o){return qn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new sa(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,o)})}createRoom(t,e){return new yx.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const o=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(o)):o}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Ws.Client=Sx;var oa={};Object.defineProperty(oa,"__esModule",{value:!0});oa.SchemaSerializer=void 0;const td=ru;class wx{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new td.Reflection().decode(t,e):this.state=td.Reflection.decode(t,e)}}oa.SchemaSerializer=wx;var ra={};Object.defineProperty(ra,"__esModule",{value:!0});ra.NoneSerializer=void 0;class Ax{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}ra.NoneSerializer=Ax;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var t=Ws;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=$c;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=bo;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=wo;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const o=oa;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return o.SchemaSerializer}});const a=ra,r=ts;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return r.registerSerializer}}),(0,r.registerSerializer)("schema",o.SchemaSerializer),(0,r.registerSerializer)("none",a.NoneSerializer)})(iu);class Tx{constructor(t,e){P(this,"group");P(this,"head");P(this,"body");P(this,"leftArm");P(this,"rightArm");P(this,"leftLeg");P(this,"rightLeg");P(this,"label");P(this,"healthBar");P(this,"targetPos",new B);P(this,"targetRotY",0);P(this,"targetRotX",0);P(this,"health",20);P(this,"maxHealth",20);P(this,"walkCycle",0);P(this,"prevPos",new B);P(this,"dead",!1);this.group=new me,this.prevPos.copy(this.group.position);let n=0;for(let R=0;R<e.length;R++)n=n*31+e.charCodeAt(R)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],o=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],r=i[n%i.length],c=o[(n>>3)%o.length],l=a[(n>>6)%a.length],h=3351057,f=o[(n>>9)%o.length],p=()=>new Ie({color:r}),g=()=>new Ie({color:c}),v=()=>new Ie({color:l}),_=()=>new Ie({color:h}),u=(R,W,q,tt,F=0)=>{const Y=new me,K=new Ce(R,W,q),Q=new te(K,tt);return Q.position.y=-W/2+F,Y.add(Q),Y},d=new Ce(.5,.5,.5);this.head=new te(d,p()),this.head.position.y=.25;const E=new Ce(.52,.52,.52),M=new Ie({color:f,transparent:!0,opacity:.35}),w=new te(E,M);this.head.add(w);const O=new Ce(.6,.75,.35);this.body=new te(O,g()),this.body.position.y=-.375,this.leftArm=u(.25,.65,.25,g(),0),this.rightArm=u(.25,.65,.25,g(),0);const C=new te(new Ce(.24,.3,.24),p());C.position.y=-.5,this.leftArm.children[0].add(C);const L=C.clone();this.rightArm.children[0].add(L),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=u(.27,.7,.27,v(),0),this.rightLeg=u(.27,.7,.27,v(),0);const X=new te(new Ce(.28,.22,.28),_());X.position.y=-.5,this.leftLeg.children[0].add(X);const b=X.clone();this.rightLeg.children[0].add(b),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const o=new Vs(e),a=new Br({map:o,transparent:!0,depthTest:!1}),r=new Tc(a);return r.scale.set(1.6,.35,1),r}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Vs(t),i=new Br({map:n,transparent:!0,depthTest:!1}),o=new Tc(i);return o.scale.set(1.2,.15,1),o}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,o=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*o,this.group.position.y+=(n-this.group.position.y)*o,this.group.position.z+=(i-this.group.position.z)*o;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const r=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(r*r+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const f=Math.sin(this.walkCycle),p=.65;this.leftLeg.rotation.x=f*p,this.rightLeg.rotation.x=-f*p,this.leftArm.rotation.x=-f*p,this.rightArm.rotation.x=f*p,this.body.position.y=-.375+Math.abs(f)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class Cx{constructor(t,e,n,i){P(this,"client");P(this,"room",null);P(this,"players",new Map);P(this,"scene");P(this,"world");P(this,"cb");P(this,"mobs",null);P(this,"moveInterval",null);P(this,"getLocalState");P(this,"_playerName","");P(this,"_reconnectDelay",2e3);this.scene=t,this.world=e,this.cb=n;const o=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!o?"wss":"ws";this.client=new iu.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this._playerName=t,this._reconnectDelay=2e3,await this._doJoin()}async _doJoin(){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:this._playerName}),this.cb.onStatusChange("connected"),this._reconnectDelay=2e3,this.setupHandlers(),this.startSendPosition()}catch(t){console.error("[MP] Connection failed:",t),this.cb.onStatusChange("disconnected"),this._scheduleReconnect()}}_scheduleReconnect(){const t=this._reconnectDelay;this._reconnectDelay=Math.min(this._reconnectDelay*2,3e4),console.log(`[MP] Reconnecting in ${t}ms...`),setTimeout(()=>this._doJoin(),t)}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new Tx(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const o=this.players.get(e);o&&(o.targetPos.set(t.x,t.y,t.z),o.targetRotY=t.rotY,o.targetRotX=t.rotX,o.group.visible=t.gameMode!=="spectator",o.health!==t.health&&(o.setHealth(t.health),t.health<=0&&!o.dead&&o.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition(),this._scheduleReconnect()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var o;(o=this.room)==null||o.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const Ka={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036};class ed{constructor(t,e){P(this,"group");P(this,"bodyMeshes",[]);P(this,"legs",[]);P(this,"arms",[]);P(this,"headGroup");P(this,"hpSprite");P(this,"id");P(this,"type");P(this,"health");P(this,"maxHealth");P(this,"alive",!0);P(this,"state","idle");P(this,"targetPos",new B);P(this,"targetRotY",0);P(this,"walkCycle",0);P(this,"prevPos",new B);switch(this.group=new me,this.headGroup=new me,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Ie({color:t,transparent:e,opacity:n})}box(t,e,n,i){const o=new te(new Ce(t,e,n),this.mat(i));return this.bodyMeshes.push(o),o}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const o=this.box(.72,.66,.66,16361640);o.position.y=0,this.headGroup.add(o);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const r=a.clone();r.position.x=.2,this.headGroup.add(a,r);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const f=this.box(.18,.2,.1,15757424);f.position.set(-.28,.4,.1),this.headGroup.add(f);const p=f.clone();p.position.x=.28,this.headGroup.add(p),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const g=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[v,_]of g){const u=new me,d=this.box(.3,.48,.3,16361640);d.position.y=-.24;const E=this.box(.3,.14,.3,7816260);E.position.y=-.48-.07,u.add(d,E),u.position.set(v,0,_),this.group.add(u),this.legs.push(u)}}buildZombie(){const o=this.box(.6,.8,.35,2771498);o.position.y=-.05,this.group.add(o);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=f=>{const p=new me,g=this.box(.26,.55,.26,2771498);g.position.y=-.275;const v=this.box(.24,.45,.24,7846775);return v.position.y=-.55-.225,p.add(g,v),p.position.set(f*.43,.2,0),p.rotation.x=-Math.PI/2.2,this.group.add(p),this.arms.push(p),p};l(-1),l(1);const h=f=>{const p=new me,g=this.box(.26,.6,.26,1715738);g.position.y=-.3;const v=this.box(.26,.24,.28,1708040);return v.position.y=-.6-.12,p.add(g,v),p.position.set(f*.175,-.45,0),this.group.add(p),this.legs.push(p),p};h(-1),h(1)}buildChicken(){const o=this.box(.55,.6,.7,16777215);o.scale.set(1,1.1,1.3),o.position.y=.35,this.group.add(o);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const r=this.box(.12,.22,.12,14492194);r.position.set(0,.3,.02),this.headGroup.add(r);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const f=new me,p=this.box(.12,.45,.5,16777215);p.position.y=-.225,f.add(p),f.position.set(h*.34,.35,0),f.rotation.z=-h*.2,this.group.add(f),this.arms.push(f)}for(const h of[-1,1]){const f=new me,p=this.box(.1,.4,.1,16763904);p.position.y=-.2;const g=this.box(.25,.06,.18,16763904);g.position.set(.05,-.43,.06),f.add(p,g),f.position.set(h*.14,.05,0),this.group.add(f),this.legs.push(f)}}buildCow(){const o=this.box(1.1,.85,1.5,8014378);o.position.set(0,.5,0),this.group.add(o);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const r=this.box(.76,.7,.72,8014378);this.headGroup.add(r);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const f=this.box(.14,.14,.05,1118481);f.position.set(-.28,.14,.37),this.headGroup.add(f);const p=f.clone();p.position.x=.28,this.headGroup.add(p);const g=this.box(.1,.28,.1,14540253);g.position.set(-.3,.44,.04),this.headGroup.add(g);const v=g.clone();v.position.x=.3,this.headGroup.add(v);const _=this.box(.22,.16,.1,8014378);_.position.set(-.44,.26,.06),this.headGroup.add(_);const u=_.clone();u.position.x=.44,this.headGroup.add(u),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const d=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[M,w]of d){const O=new me,C=this.box(.34,.55,.34,8014378);C.position.y=-.275;const L=this.box(.34,.15,.36,2236962);L.position.y=-.55-.075,O.add(C,L),O.position.set(M,0,w),this.group.add(O),this.legs.push(O)}const E=this.box(.44,.2,.44,16765120);E.position.set(0,-.08,.1),this.group.add(E)}buildSheep(){const o=this.box(1,.95,1.35,14540253);o.position.set(0,.55,0),this.group.add(o);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const r=this.box(.8,.55,.55,14540253);r.position.set(0,.72,.5),this.group.add(r);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const f=h.clone();f.position.x=.2,this.headGroup.add(f);const p=this.box(.52,.3,.5,14540253);p.position.set(0,.38,-.04),this.headGroup.add(p);const g=this.box(.1,.24,.18,8943462);g.position.set(-.34,.1,0),this.headGroup.add(g);const v=g.clone();v.position.x=.34,this.headGroup.add(v),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const _=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[u,d]of _){const E=new me,M=this.box(.28,.52,.28,8943462);M.position.y=-.26;const w=this.box(.28,.14,.3,3355443);w.position.y=-.52-.07,E.add(M,w),E.position.set(u,0,d),this.group.add(E),this.legs.push(E)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const o=this.box(.12,.14,.08,2775578);o.position.set(-.2,.1,.46),this.headGroup.add(o);const a=o.clone();a.position.x=.2,this.headGroup.add(a);const r=this.box(.12,.12,.08,2775578);r.position.set(-.2,-.15,.46),this.headGroup.add(r);const c=r.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,f]of l){const p=new me,g=this.box(.28,.58,.28,4885034);g.position.y=-.29,p.add(g),p.position.set(h,0,f),this.group.add(p),this.legs.push(p)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const o=i.clone();o.position.x=.1,this.headGroup.add(o);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const r=a.clone();r.position.x=.1,this.headGroup.add(r),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new me,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const f=this.box(.12,.45,.12,13421772);f.position.y=-.55-.225,l.add(h,f),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new me,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const f=this.box(.13,.5,.13,13421772);f.position.y=-.55-.25,l.add(h,f),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const o=this.box(.08*1.3,.08*1.3,.05*1.3,17663);o.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=o.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(o);const r=o.clone();r.position.x=.1*1.3,this.headGroup.add(r);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const f=new me,p=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);p.position.y=-.25*1.3;const g=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(g.position.y=-.55*1.3-.225*1.3,f.add(p,g),h===1){const v=this.box(.10400000000000001,.52,.195,8421504);v.position.set(.12*1.3,-.55*1.3,0),f.add(v)}f.position.set(h*.38*1.3,.2*1.3,0),this.group.add(f),this.arms.push(f)}for(const h of[-1,1]){const f=new me,p=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);p.position.y=-.275*1.3;const g=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);g.position.y=-.55*1.3-.25*1.3,f.add(p,g),f.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(f),this.legs.push(f)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const o=this.box(.1,.1,.05,2236962);o.position.set(-.15,.1,.32),this.headGroup.add(o);const a=o.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,5913130);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new te(new jr(.3,.5),new Ie({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[f,p]of h){const g=new me,v=this.box(.2,.7,.2,13149294);v.position.y=-.35,g.add(v),g.position.set(f,.1,p),this.group.add(g),this.legs.push(g)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const o=this.box(.62,.95,.42,4885050);o.position.y=.22,this.group.add(o);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const f=new me,p=this.box(.26,.5,.26,16764057);p.position.y=-.25;const g=this.box(.24,.45,.24,16764057);g.position.y=-.55-.225,f.add(p,g),f.position.set(h*.4,.3,0),this.group.add(f),this.arms.push(f)}for(const h of[-1,1]){const f=new me,p=this.box(.26,.5,.26,8015658);p.position.y=-.25;const g=this.box(.26,.45,.26,8015658);g.position.y=-.55-.225,f.add(p,g),f.position.set(h*.15,-.5,0),this.group.add(f),this.legs.push(f)}}buildEnderDragon(){const o=this.box(2,1,4,1114146);o.scale.set(1.5,1.5,1.5),o.position.set(0,.6*1.5,0),this.group.add(o);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const r=this.box(.18,.18,.1,16729156);r.position.set(-.3,.15,.65);const c=new Ie({color:16729156,emissive:16729156,emissiveIntensity:.8});r.material=c,this.headGroup.add(r);const l=r.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const f=this.box(3,.2,2,2228275);f.scale.set(1.5,1.5,1.5),f.position.set(h*2*1.5,.6*1.5,0),this.group.add(f)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const o=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[r,c,l]of o){const h=new te(new Ln(.06,8,8),new Ie({color:16724787}));h.position.set(r,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let r=0;r<8;r++){const[c,l,h]=a[r],f=new me,p=this.box(.1,.08,.6,3355443);p.position.set(0,0,.3),f.add(p),f.position.set(c,l,h),f.rotation.z=(r<4?-1:1)*Math.PI/4,this.group.add(f),this.legs.push(f)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const o=this.box(.5,.5,.5,8947848);this.headGroup.add(o);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const r=a.clone();r.position.x=.15,this.headGroup.add(a,r);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const f=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[g,v]of f){const _=new me,u=this.box(.18,.5,.18,8947848);u.position.y=-.25,_.add(u),_.position.set(g,0,v),this.group.add(_),this.legs.push(_)}const p=this.box(.1,.08,.7,8947848);p.position.set(0,.2,-.8),this.group.add(p)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const o=this.box(.4,.4,.35,14518323);this.headGroup.add(o);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const r=a.clone();r.position.x=.12,this.headGroup.add(a,r);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const f=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[g,v]of f){const _=new me,u=this.box(.12,.38,.12,14518323);u.position.y=-.19,_.add(u),_.position.set(g,0,v),this.group.add(_),this.legs.push(_)}const p=this.box(.08,.06,.6,14518323);p.position.set(0,.1,-.6),this.group.add(p)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const o=this.box(2,.1,.8,1717060);o.position.set(-1,-.05,0),this.group.add(o);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const r=new te(new Ln(.1,8,8),new Ie({color:4521796,emissive:4521796}));r.position.set(-.3,.1,.8),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const o=new te(new Ce(1.2,1.2,1.2),new Ie({color:4500036,transparent:!0,opacity:.8}));o.position.y=0,this.bodyMeshes.push(o),this.group.add(o);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const r=new te(new Ln(.15,8,8),new Ie({color:16777215}));r.position.set(-.25,.25,.5),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new te(new Ln(.06,8,8),new Ie({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Vs(t),n=new Br({map:e,transparent:!0,depthTest:!1}),i=new Tc(n);i.scale.set(1.2,.18,1);const o={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=o[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,o=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=o/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const r=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=r*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(r)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=r*.7,this.legs[1].rotation.x=-r*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(r)*.3);this.headGroup.position.y=.72+Math.abs(r)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,o=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:Ka.creeper;for(const a of this.bodyMeshes)a.material.color.set(o)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=Ka[this.type]??16777215,o=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(o);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,o=Math.min(i/e,1);this.group.rotation.z=o*(Math.PI/2),this.group.position.y=this.targetPos.y-o*.5;const a=1-o*.3;if(this.group.scale.setScalar(a),i%200<100)for(const r of this.bodyMeshes)r.material.color.set(16720418);else{const r=Ka[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(r)}o<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function hn(s,t){return s+Math.random()*(t-s)}function Rx(){return Math.random().toString(36).slice(2,10)}const nd=8,Px=30,id=60,Lx=-20,Ix=new Ce(.1,.1,.4),Dx=new Ie({color:16768256}),sd=new B,oi=class oi{constructor(t,e,n,i){P(this,"mobs",new Map);P(this,"scene");P(this,"world");P(this,"cb");P(this,"singleplayer");P(this,"arrows",[]);P(this,"dayTime",.5);P(this,"mountedMobId",null);P(this,"attackCooldown",0);this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,o){const a=o??Rx(),r=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:10,c={id:a,type:t,x:e,y:n,z:i,rotY:hn(0,Math.PI*2),health:r,maxHealth:r,alive:!0,state:"idle"},l=new ed(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=nd)return;const n=hn(0,Math.PI*2),i=hn(12,Px),o=t+Math.cos(n)*i,a=e+Math.sin(n)*i,r=this.dayTime<.25||this.dayTime>.73;let c,l;const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(o),Math.round(a)):20,f=Math.round(h)+1,p=this.world.getBlockType?this.world.getBlockType(Math.round(o),f+1,Math.round(a)):void 0,g=h<15||p!==void 0&&p!==0;if(r&&Math.random()<.15)c=20+hn(0,10),l="phantom";else if(c=f+.5,g&&Math.random()<.08)l="slime";else if(g){const v=Math.random();l=v<.3?"zombie":v<.55?"skeleton":v<.75?"spider":v<.9?"creeper":"witherskeleton"}else if(r){const v=Math.random();l=v<.25?"zombie":v<.45?"skeleton":v<.6?"creeper":v<.75?"spider":v<.85?"witherskeleton":v<.9?"pig":v<.95?"cow":"sheep"}else{const v=Math.random();l=v<.25?"pig":v<.45?"chicken":v<.6?"cow":v<.75?"sheep":v<.85?"horse":v<.92?"wolf":"cat"}this.spawnMob(l,o,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const o=new ed(this.scene,n);this.mobs.set(n.id,{data:n,mob:o,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e,n=0){if(this.attackCooldown>0)return null;const i=[],o=new Map;for(const[v,_]of this.mobs)_.mob.alive&&_.mob.group.traverse(u=>{u.isMesh&&(i.push(u),o.set(u,v))});const a=t.intersectObjects(i);if(!a.length)return null;const r=o.get(a[0].object);if(!r)return null;const c=this.mobs.get(r);let l=5;e!=null&&e.sharpness&&(l+=2*e.sharpness),n>0&&(l+=n),c.mob.health-=l,c.mob.showDamage(c.mob.health),c.mob.health<=0&&c.mob.die(),this.attackCooldown=.4;const h=t.ray.origin,f=c.data.x-h.x,p=c.data.z-h.z,g=Math.sqrt(f*f+p*p)||1;return c.data.x+=f/g*2.5,c.data.z+=p/g*2.5,{mobId:r,damage:l}}update(t){this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[n,i]of this.mobs){if(i.hitCooldown>0&&(i.hitCooldown=Math.max(0,i.hitCooldown-t)),i.mob.update(t),!i.mob.alive){if(i.mob._deathTimer===void 0&&(i.mob._deathTimer=1.5),i.mob._deathTimer-=t,i.mob._deathTimer<=0){if(i.data.type==="slime"&&!i.data.isMiniSlime)for(let r=0;r<2;r++){const c=(Math.random()-.5)*2,l=(Math.random()-.5)*2,h={id:`slime_mini_${Date.now()}_${r}`,type:"slime",x:i.data.x+c,y:i.data.y,z:i.data.z+l,rotY:Math.random()*Math.PI*2,state:"idle",health:4,maxHealth:4,isMiniSlime:!0};this.addMob(h,this.scene)}i.mob.dispose(this.scene),this.mobs.delete(n)}continue}if(this.singleplayer&&oi.UNDEAD_TYPES.has(i.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const c=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(i.data.x),Math.round(i.data.z)):20;if(i.data.y>=c-2&&(i.mob.health-=4*t,i.mob.showDamage(i.mob.health),i.mob.health<=0)){i.mob.die();continue}}if(this.singleplayer){const r=i.mob.targetPos.x-e.x,c=i.mob.targetPos.z-e.z;r*r+c*c<=32*32&&this.runAI(i,t,e)}const o=i.data.x-e.x,a=i.data.z-e.z;o*o+a*a>id*id&&(i.mob.dispose(this.scene),this.mobs.delete(n))}for(let n=this.arrows.length-1;n>=0;n--){const i=this.arrows[n];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);const o=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z;o*o+a*a+r*r<.64?(this.cb.onPlayerDamage(1),this.scene.remove(i.mesh),this.arrows.splice(n,1)):i.life<=0&&(this.scene.remove(i.mesh),this.arrows.splice(n,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<nd&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,o){const a=t.data,r=e-a.x,c=n-a.z,l=Math.atan2(r,c);a.rotY=l;const h=Math.sin(l)*.8,f=Math.cos(l)*.8,p=Math.round(a.x+h),g=Math.round(a.z+f),v=Math.round(a.y),_=this.world.getBlockType(p,v,g),u=this.world.getBlockType(p,v+1,g);if(_&&_!==7&&_!==0){if(!u||u===7||u===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*o,a.z+=Math.cos(l)*i*o,!0;{const d=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=d,a.x+=Math.sin(d)*i*.5*o,a.z+=Math.cos(d)*i*.5*o,!1}}return a.x+=Math.sin(l)*i*o,a.z+=Math.cos(l)*i*o,!0}runAI(t,e,n){const i=t.data;t.timer-=e;const o=n.x-i.x,a=n.z-i.z,r=o*o+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=Lx*e;const c=Math.round(i.x),l=Math.round(i.z);(c!==t._surfCacheX||l!==t._surfCacheZ)&&(t._surfCacheX=c,t._surfCacheZ=l,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(c,l)+.5:0);const h=t._surfCacheY;if(i.y<=h&&(i.y=h,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const f=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,r,o,a,f)}else i.type==="horse"?this.horseAI(t,e,r,o,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,r,o,a,n):i.type==="creeper"?this.creeperAI(t,e,r,n):i.type==="skeleton"?this.skeletonAI(t,e,r,o,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,r,o,a,n):i.type==="spider"?this.spiderAI(t,e,r,o,a,n):i.type==="wolf"?this.wolfAI(t,e,r,o,a,n):i.type==="cat"?this.catAI(t,e,r,o,a,n):i.type==="slime"&&this.slimeAI(t,e,r,o,a,n)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,o,a){const r=t.data;if(n<25&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const c=r.rotY+Math.PI;r.x+=Math.sin(c)*a*e,r.z+=Math.cos(c)*a*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&(r.state="idle",t.timer=hn(2,5)))}horseAI(t,e,n,i,o,a){const r=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const f=h.data.x-r.x,p=h.data.z-r.z;if(f*f+p*p<225){l=!0;break}}if(l&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){let h=0,f=0;for(const p of this.mobs.values())if((p.data.type==="zombie"||p.data.type==="skeleton")&&p.data.id!==r.id){h=p.data.x,f=p.data.z;break}(h!==0||f!==0)&&(r.rotY=Math.atan2(r.x-h,r.z-f)),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle",t.timer=hn(2,5)))}zombieAI(t,e,n,i,o,a){const r=t.data,c=2.8;n<144?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,o,1.5)}creeperAI(t,e,n,i){const o=t.data,a=2.5;if(n<100?o.state!=="fusing"&&(o.state="fusing",t.timer=oi.CREEPER_FUSE_TIME):o.state==="fusing"&&(o.state="idle",t.timer=hn(1.5,4),t.mob.setCreeperFuse(0)),o.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const r=1-t.timer/oi.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,r))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*a*e,o.z+=Math.cos(o.rotY)*a*e)}explode(t,e){const n=t.data,i=5,o=5,a=e.x-n.x,r=e.y-n.y,c=e.z-n.z;a*a+r*r+c*c<o*o&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,o,a){const r=t.data,c=1.8,l=400,h=16,f=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(r.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a),t.shootTimer=f),n<h){const p=r.rotY+Math.PI;r.x+=Math.sin(p)*c*e,r.z+=Math.cos(p)*c*e}else r.rotY=Math.atan2(i,o);else n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1);r.state!=="attacking"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e))}witherskeletonAI(t,e,n,i,o,a){var f,p;const r=t.data,c=4,l=4,h=400;t.shootTimer=(t.shootTimer??0)-e,n<h?(r.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(p=(f=this.cb).onWitherEffect)==null||p.call(f))):n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state!=="chasing"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.5*e,r.z+=Math.cos(r.rotY)*c*.5*e))}shootArrow(t,e,n,i){const o=new te(Ix,Dx);o.position.set(t,e,n),sd.set(i.x-t,i.y-e,i.z-n).normalize();const r=sd.clone().multiplyScalar(15);this.scene.add(o),this.arrows.push({mesh:o,vel:r,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const o=15,a=i.x+Math.sin(t.timer)*o,r=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*o,l=3;n.x+=(a-n.x)*l*e,n.y+=(r-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,r=i.z-n.z;a*a+r*r<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,o,a){const r=t.data,c=3.5,l=225,h=9,f=3;t.jumpTimer||(t.jumpTimer=0),n<l?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=f),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.6*e,r.z+=Math.cos(r.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,o=n.x-i.x,a=n.z-i.z;o*o+a*a<100&&(i.rotY=Math.atan2(o,a))}wolfAI(t,e,n,i,o,a){const r=t.data,c=4;if(r.state!=="tamed")if(n<4&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const l=r.rotY+Math.PI;r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"&&(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e);else{let l=!1;for(const[h,f]of this.mobs){if(!f.mob.alive||!oi.HOSTILE_TYPES.has(f.data.type))continue;const p=f.data.x-r.x,g=f.data.z-r.z,v=p*p+g*g;if(v<64){r.rotY=Math.atan2(p,g),r.x+=Math.sin(r.rotY)*c*1.2*e,r.z+=Math.cos(r.rotY)*c*1.2*e,r.state="following",v<2.25&&(t.hitCooldown??0)<=0&&(f.mob.health-=4,f.mob.showDamage(f.mob.health),f.mob.health<=0&&f.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,o),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="sitting")}}catAI(t,e,n,i,o,a){const r=t.data,c=2.5;r.state!=="tamed"?r.state==="idle"?(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(r.state="sitting")),r.x+=Math.sin(r.rotY)*1*e,r.z+=Math.cos(r.rotY)*1*e):r.state==="sitting"&&t.timer<=0&&(r.state="idle"):n>64?(r.rotY=Math.atan2(i,o),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e):r.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,r=n.z-i.z,c=a*a+r*r;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const h of this.mobs.values())if(h.data.type==="cat"&&h.data.state==="tamed"){const f=h.data.x-i.x,p=h.data.z-i.z,g=h.data.y-i.y;if(f*f+p*p+g*g<100){l=!0;break}}if(l){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,r);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=hn(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}slimeAI(t,e,n,i,o,a){const r=t.data,c=4.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,o);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}tryMount(t){for(const[e,n]of this.mobs){if(n.data.type!=="horse"||!n.mob.alive)continue;const i=n.data.x-t.x,o=n.data.z-t.z;if(i*i+o*o<4)return this.mountedMobId=e,n.data.state="mounted",!0}return!1}dismount(){this.mountedMobId=null}updateMount(t,e,n,i){if(!this.mountedMobId)return;const o=this.mobs.get(this.mountedMobId);if(!o||!o.mob.alive){this.mountedMobId=null;return}o.data.x=t.x,o.data.z=t.z,o.data.rotY=e,o.mob.targetPos.set(o.data.x,o.data.y,o.data.z),o.mob.group.position.set(o.data.x,o.data.y,o.data.z)}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};P(oi,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom"])),P(oi,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom"])),P(oi,"CREEPER_FUSE_TIME",1.5);let kr=oi;class Ox{constructor(){P(this,"hotbarEl",document.getElementById("hotbar"));P(this,"topLeftEl",document.getElementById("topLeft"));P(this,"topRightEl",document.getElementById("topRight"));P(this,"connEl",document.getElementById("connStatus"));P(this,"blockNameEl",document.getElementById("blockName"));P(this,"chatMsgsEl",document.getElementById("chatMessages"));P(this,"chatInput",document.getElementById("chatInput"));P(this,"heartsEl",document.getElementById("hearts"));P(this,"hungerEl",document.getElementById("hunger"));P(this,"timeEl",document.getElementById("timeDisplay"));P(this,"gameModeEl",document.getElementById("gameModeEl"));P(this,"deathScreen",document.getElementById("deathScreen"));P(this,"respawnBtn",document.getElementById("respawnBtn"));P(this,"selectedIndex",0);P(this,"gameMode","survival");P(this,"craftingPanel",null);P(this,"inventoryPanel",null);P(this,"xpBarEl",null);P(this,"xpLevelEl",null);P(this,"dayCounterEl",null);P(this,"dayNotifyEl",null);P(this,"_lastLevel",-1);P(this,"_lastDay",-1);P(this,"debugScreenEl",null);P(this,"debugVisible",!1);P(this,"_lastHp",-1);P(this,"_lastMaxHp",-1);P(this,"_lastWither",!1);P(this,"_lastHunger",-1);P(this,"_lastMaxHunger",-1);P(this,"_lastTimeStr","");P(this,"_lastTimeDayTime",-1);P(this,"_lastPosX",NaN);P(this,"_lastPosY",NaN);P(this,"_lastPosZ",NaN);P(this,"_posXEl",null);P(this,"_posYEl",null);P(this,"_posZEl",null);P(this,"onChat");P(this,"onRespawn");P(this,"onCraft");P(this,"onInventorySwap");P(this,"getInvCount");P(this,"tooltipEl",document.getElementById("hotbarTooltip"));P(this,"tooltipTimer",null);P(this,"chatHistory",[]);P(this,"chatHistoryIdx",-1);P(this,"chestPanel",null);P(this,"onChestClose");P(this,"onChestTransfer");P(this,"smeltingPanel",null);P(this,"onSmelt");P(this,"killFeedEl",null);P(this,"playerListPanel",null);P(this,"enchantPanel",null);P(this,"onEnchant",null);P(this,"tradePanel",null);P(this,"onTrade",null);P(this,"bossBarEl",null);P(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,o)=>{const a=i.querySelector(".slot-icon");if(!a)return;const r=t[o]??0;if(r===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+Ns(r).toString(16).padStart(6,"0"),a.title=Hn(r);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[o]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,o)=>{i.classList.toggle("active",o===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,o=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&o===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=o,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=o.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),o=Math.floor(t/2),a=t%2===1;for(let r=0;r<i;r++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),r<o?c.classList.add("full"):r===o&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,o=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const r=this.deathScreen.querySelector(".death-coords");r&&(r.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${o}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),o=t%2===1;for(let a=0;a<n;a++){const r=document.createElement("div");r.className="hunger-icon",a<i?r.classList.add("full"):a===i&&o?r.classList.add("half"):r.classList.add("empty"),this.hungerEl.appendChild(r)}}updateTime(t){if(Math.abs(t-this._lastTimeDayTime)<7e-4)return;this._lastTimeDayTime=t;const e=(t*24+6)%24,n=Math.floor(e),i=Math.floor((e-n)*60),o=n>=12?"PM":"AM",a=n%12||12,r=i<10?i===0?"00":"0"+i:""+i;let c="☀️";t<.2||t>.8?c="🌙":(t<.3||t>.7)&&(c="🌅");const l=`${c} ${a}:${r} ${o}`;l!==this._lastTimeStr&&(this._lastTimeStr=l,this.timeEl.textContent=l)}setGameMode(t){this.gameMode=t,this.gameModeEl.textContent=t==="creative"?"✈ Creative":t==="spectator"?"👁 Spectator":"⚔ Survival",this.gameModeEl.className=`gamemode-badge ${t}`;const e=t==="creative"||t==="spectator";this.heartsEl.style.display=e?"none":"flex",this.hungerEl.style.display=e?"none":"flex"}buildXPBar(){this.xpBarEl=document.createElement("div"),this.xpBarEl.id="xp-bar",this.xpBarEl.style.cssText=`
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
    `,document.body.appendChild(this.xpBarEl),document.body.appendChild(e),document.body.appendChild(this.dayNotifyEl)}updateXP(t,e){if(!this.xpBarEl)return;const n=(e+1)*10,i=t-e*10,o=Math.min(100,i/n*100),a=this.xpBarEl.querySelector("#xp-bar-fill");a&&(a.style.width=o+"%"),this.xpLevelEl&&(this.xpLevelEl.textContent=`${e}`,e>this._lastLevel&&this._lastLevel>=0&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1.5)",this.xpLevelEl.style.color="#ffff44",a&&(a.style.boxShadow="0 0 16px rgba(255,255,68,0.8)"),setTimeout(()=>{this.xpLevelEl&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1)",this.xpLevelEl.style.color="#88ff44"),a&&(a.style.boxShadow="0 0 6px rgba(136,255,68,0.4)")},500)),this._lastLevel=e)}updateDayCounter(t){t!==this._lastDay&&(this.dayCounterEl&&(this.dayCounterEl.textContent=`Day ${t}`),this._lastDay>=1&&this.dayNotifyEl&&(this.dayNotifyEl.textContent=`Day ${t}`,this.dayNotifyEl.style.opacity="1",this.dayNotifyEl.style.transition="none",this.dayNotifyEl.offsetWidth,this.dayNotifyEl.style.transition="opacity 2.5s ease-out",this.dayNotifyEl.style.opacity="0"),this._lastDay=t)}showInventory(t){if(this.inventoryPanel)return;this.inventoryPanel=document.createElement("div"),this.inventoryPanel.id="inventory-panel",this.inventoryPanel.style.cssText=`
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
    `;let i=null;const o=[],a=h=>{const f=o[h];if(!f)return;const p=t[h]??0,g=p===0?"#333333":"#"+Ns(p).toString(16).padStart(6,"0");f.style.background=i===h?"#ffee88":g,f.style.border=i===h?"2px solid #ffcc00":"1px solid #1a1a1a",f.title=p===0?"Empty":Hn(p)};for(let h=0;h<36;h++){const f=document.createElement("div"),p=t[h]??0,g=p===0?"#333333":"#"+Ns(p).toString(16).padStart(6,"0");f.style.cssText=`
        width: 24px; height: 24px;
        background: ${g};
        border: 1px solid #1a1a1a;
        border-radius: 1px; cursor: pointer;
        transition: background 0.1s;
        position: relative;
      `,f.title=p===0?"Empty":Hn(p);const v=t[h]??0;if(v!==0&&this.getInvCount){const u=document.createElement("span");u.style.cssText="position:absolute;bottom:1px;right:2px;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",u.textContent=String(this.getInvCount(v)||""),f.appendChild(u)}o.push(f);const _=h;f.addEventListener("click",()=>{var u;if(i===null)t[_]!==0&&(i=_,a(_));else if(i===_)i=null,a(_);else{const d=t[_];t[_]=t[i],t[i]=d;const E=i;i=null,a(_),a(E),(u=this.onInventorySwap)==null||u.call(this,E,_)}}),f.addEventListener("mouseenter",()=>{i!==_&&(f.style.outline="1px solid #aaa")}),f.addEventListener("mouseleave",()=>{f.style.outline="none"}),n.appendChild(f)}this.inventoryPanel.appendChild(n);const r=document.createElement("div");r.textContent="Crafting",r.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;for(let h=0;h<4;h++){const f=document.createElement("div");f.style.cssText=`
        width: 30px;
        height: 30px;
        background: #333333;
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
      `,f.title="Crafting slot",c.appendChild(f)}this.inventoryPanel.appendChild(c);const l=document.createElement("button");l.style.cssText=`
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
    `,l.textContent="Close (E)",l.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(l),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e;if(t.key==="Enter"){const n=this.chatInput.value.trim();n&&(this.chatHistory.unshift(n),this.chatHistory.length>50&&this.chatHistory.pop(),this.chatHistoryIdx=-1,(e=this.onChat)==null||e.call(this,n)),this.closeChatInput(),t.stopPropagation();return}if(t.key==="ArrowUp"){t.preventDefault(),this.chatHistory.length>0&&(this.chatHistoryIdx=Math.min(this.chatHistoryIdx+1,this.chatHistory.length-1),this.chatInput.value=this.chatHistory[this.chatHistoryIdx]),t.stopPropagation();return}if(t.key==="ArrowDown"){t.preventDefault(),this.chatHistoryIdx=Math.max(this.chatHistoryIdx-1,-1),this.chatInput.value=this.chatHistoryIdx>=0?this.chatHistory[this.chatHistoryIdx]:"",t.stopPropagation();return}if(t.key==="Escape"){this.closeChatInput(),t.stopPropagation();return}t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed","/give","/god","/spawn","/boss","/achievements","/stats","/nether","/craft","/tame","/spectator"],n=t.slice(1).toLowerCase(),i=e.filter(o=>o.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatHistoryIdx=-1,this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const o=new Date,a=o.getHours().toString().padStart(2,"0"),r=o.getMinutes().toString().padStart(2,"0"),c=`[${a}:${r}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const f=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${f}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"saddle",name:"Saddle",ingredients:{95:7},output:{type:93,count:1}},{id:"anvil",name:"Anvil",ingredients:{62:4},output:{type:94,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
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
    `,this.craftingPanel.appendChild(i);const o=this.getInvCount??(()=>0),a={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",95:"Leather",93:"Saddle",94:"Anvil",3:"Stone",4:"Sand"};for(const c of t){const l=Object.entries(c.ingredients).every(([u,d])=>o(Number(u))>=d),h=document.createElement("div");h.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${l?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${l?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${l?"pointer":"default"};
        opacity: ${l?"1":"0.5"};
      `;const f=document.createElement("span");f.textContent=c.hand?"✋":"🔨",f.style.cssText="font-size: 16px; flex-shrink: 0;";const p=document.createElement("div");p.style.cssText="flex: 1;";const g=document.createElement("div");g.textContent=c.name,g.style.cssText=`color: ${l?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const v=document.createElement("div"),_=Object.entries(c.ingredients).map(([u,d])=>{const E=o(Number(u)),M=a[Number(u)]??`Item ${u}`;return`<span style="color:${E>=d?"#88ff88":"#ff8888"}">${d}x ${M}</span>`});v.innerHTML=_.join(", "),v.style.cssText="font-size: 10px; margin-top: 2px;",p.appendChild(g),p.appendChild(v),h.appendChild(f),h.appendChild(p),l&&h.addEventListener("click",()=>{var d;((d=this.onCraft)==null?void 0:d.call(this,c.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(h),h.dataset.recipeName=c.name.toLowerCase()}i.addEventListener("input",()=>{const c=i.value.toLowerCase();this.craftingPanel.querySelectorAll("[data-recipe-name]").forEach(l=>{l.style.display=(l.dataset.recipeName??"").includes(c)?"":"none"})});const r=document.createElement("button");r.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,r.textContent="Close [E]",r.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(r),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=h=>{const f=h===0?"444444":Ns(h).toString(16).padStart(6,"0");return`
        width: ${n}px; height: ${n}px;
        background: #${f};
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
    `;const o=document.createElement("h2");o.textContent="Chest",o.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(o);const a=(h,f,p,g)=>{const v=document.createElement("div");v.style.cssText="margin-bottom: 10px;";const _=document.createElement("div");_.textContent=h,_.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",v.appendChild(_);const u=document.createElement("div");u.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${g}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let d=0;d<f.length;d++){const E=f[d]??0,M=document.createElement("div");if(M.style.cssText=i(E),M.title=E===0?"Empty":`${Hn(E)} (click to move)`,E!==0){const O=document.createElement("span");O.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,O.textContent=Hn(E).slice(0,3),M.appendChild(O)}M.addEventListener("mouseenter",()=>{E&&(M.style.transform="scale(1.1)",M.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",M.style.zIndex="2")}),M.addEventListener("mouseleave",()=>{M.style.transform="scale(1)",M.style.boxShadow="none",M.style.zIndex="0"});const w=d;M.addEventListener("click",()=>{var O;E!==0&&((O=this.onChestTransfer)==null||O.call(this,p,w,t,e),this.hideChestUI(),this.showChestUI(t,e))}),u.appendChild(M)}return v.appendChild(u),v};this.chestPanel.appendChild(a("Chest",t,!0,9));const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(r),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
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
    `;const o=document.createElement("div");o.appendChild(n),o.appendChild(i);const a=document.createElement("div");a.style.cssText=`
      font-size: 20px;
      color: white;
      animation: pulse 1s infinite;
    `,a.textContent="→";const r=document.createElement("div");r.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",r.textContent="Output:";const c=document.createElement("div");c.id="smelt-output",c.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;const l=document.createElement("div");l.appendChild(r),l.appendChild(c),e.appendChild(o),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const f=document.createElement("div");f.id="smelt-fuel",f.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(h),this.smeltingPanel.appendChild(f);const p=document.createElement("button");p.style.cssText=`
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
    `,p.textContent="Smelt",p.addEventListener("click",()=>{var u;const _=(u=this.onSmelt)==null?void 0:u.call(this,14,5);_!=null&&this.addChatMessage("",`Smelted item (type ${_})!`,!0)}),this.smeltingPanel.appendChild(p);const g=document.createElement("button");g.style.cssText=`
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
      `,r.textContent=a.name,r.title=a.desc,t>=a.cost&&r.addEventListener("click",()=>{var c;(c=this.onEnchant)==null||c.call(this,a.type),this.hideEnchantUI()}),this.enchantPanel.appendChild(r)}const o=document.createElement("button");o.style.cssText=`
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
    `,o.textContent="Close",o.addEventListener("click",()=>this.hideEnchantUI()),this.enchantPanel.appendChild(o),document.body.appendChild(this.enchantPanel)}hideEnchantUI(){this.enchantPanel&&(this.enchantPanel.remove(),this.enchantPanel=null)}isEnchantOpen(){return this.enchantPanel!==null}showTradeUI(t){if(this.tradePanel)return;this.tradePanel=document.createElement("div"),this.tradePanel.style.cssText=`
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
    `;const e=document.createElement("h2");e.textContent="Villager Trades",e.style.cssText="color: #ffff99; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;",this.tradePanel.appendChild(e);for(let i=0;i<t.length;i++){const o=t[i],a=document.createElement("button");a.style.cssText=`
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
      `,a.textContent=`${o.giveName} → ${o.receiveName}`,a.addEventListener("click",()=>{var r;(r=this.onTrade)==null||r.call(this,i),this.hideTradeUI()}),this.tradePanel.appendChild(a)}const n=document.createElement("button");n.style.cssText=`
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
      `,i.textContent=t,this.bossBarEl.appendChild(i);const o=document.createElement("div");o.style.cssText=`
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
      `,o.appendChild(a),this.bossBarEl.appendChild(o),document.body.appendChild(this.bossBarEl)}this.updateBossBar(e,n)}updateBossBar(t,e){if(!this.bossBarEl)return;const n=Math.max(0,t/e*100),i=this.bossBarEl.querySelector("#boss-bar-fill");i&&(i.style.width=n+"%")}hideBossBar(){this.bossBarEl&&(this.bossBarEl.remove(),this.bossBarEl=null)}showAchievement(t,e,n){const i=document.createElement("div");i.style.cssText=`
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
    `;const o=document.createElement("div");o.innerHTML=`
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">${n}</span>
        <div>
          <div style="font-weight: bold;">${t}</div>
          <div style="font-size: 12px; color: #333; font-style: italic;">${e}</div>
        </div>
      </div>
    `,i.appendChild(o),document.body.appendChild(i),setTimeout(()=>{i.style.animation="slideOutRight 0.3s ease-in",setTimeout(()=>i.remove(),300)},4e3)}showDebugScreen(){this.debugScreenEl||(this.debugScreenEl=document.createElement("div"),this.debugScreenEl.id="debug-screen",this.debugScreenEl.style.cssText=`
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
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),o=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60,c=o>0?`${o}h ${a}m ${r}s`:`${a}m ${r}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[p,g]of l){if(!p){const d=document.createElement("hr");d.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(d);continue}const v=document.createElement("div");v.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const _=document.createElement("span");_.textContent=p,_.style.color="#aaa";const u=document.createElement("span");u.textContent=g,u.style.cssText="font-weight: bold; color: #fff;",v.appendChild(_),v.appendChild(u),this.scoreboardPanel.appendChild(v)}const h=Object.entries(t.killsByType||{}).sort((p,g)=>g[1]-p[1]);if(h.length>0){const p=document.createElement("hr");p.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(p);const g=document.createElement("div");g.textContent="Kills by Type",g.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(g);for(const[v,_]of h){const u=document.createElement("div");u.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const d=document.createElement("span");d.textContent=v.charAt(0).toUpperCase()+v.slice(1),d.style.color="#999";const E=document.createElement("span");E.textContent=`${_}`,E.style.color="#ddd",u.appendChild(d),u.appendChild(E),this.scoreboardPanel.appendChild(u)}}const f=document.createElement("div");f.textContent="Press O to close",f.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(f),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const Nx=new Ce(.12,.12,.12),Ux=128;class Bx{constructor(t){P(this,"scene");P(this,"pool",[]);P(this,"active",[]);this.scene=t;for(let e=0;e<Ux;e++){const n=new Ie({color:16777215,transparent:!0}),i=new te(Nx,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,o,a,r,c,l=1,h=!1){let f=null;for(let p=0;p<this.pool.length;p++)if(!this.pool[p].active){f=this.pool[p];break}f&&(f.active=!0,f.life=0,f.maxLife=c,f.vx=o,f.vy=a,f.vz=r,f.mesh.position.set(t,e,n),f.mesh.scale.setScalar(l),f.mesh.visible=!0,f.mat.color.setHex(i),f.mat.opacity=1,h?(f.mat.emissive.setHex(i),f.mat.emissiveIntensity=.6):f.mat.emissiveIntensity=0,this.active.push(f))}spawn(t,e,n,i,o,a,r,c,l=.3){this.acquire(t,e,n,i,a,r,c,o,l)}burst(t,e,n,i,o=12){const a=Ns(i);for(let r=0;r<o;r++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const o=Ns(i);for(let a=0;a<8;a++){const r=a/8*Math.PI*2;this.acquire(t+Math.cos(r)*.4,e,n+Math.sin(r)*.4,o,Math.cos(r)*2,.5+Math.random(),Math.sin(r)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,r=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*r,3+Math.random()*2,Math.sin(a)*r,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let o=0;o<i;o++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let o=0;o<i;o++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let o=0;o<i;o++){const a=Math.random()<.5?11158783:16763904,r=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(r)*c,1+Math.random()*2,Math.sin(r)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let o=0;o<i;o++){const a=Math.random(),r=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,r,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let o=0;o<i;o++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class kx{constructor(){P(this,"ctx",null);P(this,"musicActive",!1);P(this,"musicTimeout",null);P(this,"sfxVolume",1);P(this,"musicVolume",.6);P(this,"ambientActive",!1);P(this,"ambientTimeout",null);P(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){e*=this.sfxVolume;try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.5,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.3,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.6,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.5,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,o=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=o;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime+i),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(r),r.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),o=n.createBufferSource();o.buffer=i;const a=n.createGain(),r=t*(.1+Math.random()*.06);a.gain.setValueAtTime(r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}o.connect(c),c.connect(a),a.connect(n.destination),o.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const o=e.createGain(),a=Math.min(t*.15,.5);o.gain.setValueAtTime(a,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=150,i.connect(r),r.connect(o),o.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),o.gain.setValueAtTime(.06,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(o),o.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),o=i.getChannelData(0);for(let l=0;l<n;l++)o[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(r),r.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),o=t.createBuffer(1,i,n),a=o.getChannelData(0);for(let r=0;r<i;r++)a[r]=Math.random()*2-1;return o}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let o=0;const a=()=>{if(!this.musicActive)return;const r=e.createOscillator(),c=e.createGain();r.type=t==="disc_blue"?"square":"sine",r.frequency.value=i[o%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),r.connect(c),c.connect(e.destination),r.start(),r.stop(e.currentTime+.5),o++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,o=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),r=2+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const h=i[Math.floor(Math.random()*i.length)],f=a.createOscillator(),p=a.createGain();f.type=t==="cave"||Math.random()>.5?"sine":"triangle",f.frequency.value=h*(t==="cave"?.5:1);const g=3+Math.random()*4;p.gain.setValueAtTime(0,a.currentTime),p.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+g*.3),p.gain.linearRampToValueAtTime(0,a.currentTime+g),f.detune.value=(Math.random()-.5)*10,f.connect(p),p.connect(this.ambientGain),f.start(),f.stop(a.currentTime+g+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(o,c)};this.ambientTimeout=setTimeout(o,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Fx{constructor(t){P(this,"scene");P(this,"drops",[]);P(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const o=zx[i]??16777215,a=new Ce(.35,.35,.35),r=new Ie({color:o}),c=new te(a,r);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const o=Hx[t];if(o){for(const a of o)if(Math.random()<a.chance){const r=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<r;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let o=this.drops.length-1;o>=0;o--){const a=this.drops[o];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const r=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(r*r+l*l+c*c<2.25||a.life<=0)&&(r*r+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(o,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const zx={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},Hx={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],horse:[{item:"leather",chance:1,min:1,max:2}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]},au={};for(const[s,t]of Object.entries(Jr)){const e=Number(s);if(t&&t.color!=null){const n=t.color;au[e]=[n>>16&255,n>>8&255,n&255]}}class Gx{constructor(t){P(this,"canvas");P(this,"ctx");P(this,"container");P(this,"updateTimer",0);P(this,"world");P(this,"RADIUS",32);P(this,"CANVAS_SIZE",128);P(this,"UPDATE_INTERVAL",.3);P(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,o){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,o))}drawMap(t,e,n,i){const o=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,r=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let d=0;d<c.length;d+=4)c[d]=26,c[d+1]=26,c[d+2]=26,c[d+3]=255;const h=Math.floor(t.x)-this.RADIUS,f=Math.floor(t.x)+this.RADIUS,p=Math.floor(t.z)-this.RADIUS,g=Math.floor(t.z)+this.RADIUS;for(let d=h;d<=f;d++)for(let E=p;E<=g;E++){let M=0;for(let X=40;X>=0;X--){const b=this.world.getBlockType(d,X,E);if(b!==void 0){M=b;break}}if(M===0)continue;const w=Math.round(o+(d-t.x)*r),O=Math.round(a+(E-t.z)*r);if(w<0||w>=l||O<0||O>=l)continue;const C=au[M],L=(O*l+w)*4;C?(c[L]=C[0],c[L+1]=C[1],c[L+2]=C[2],c[L+3]=255):(c[L]=255,c[L+1]=255,c[L+2]=255,c[L+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const d of i){if(!d.alive)continue;const E=o+(d.x-t.x)*r,M=a+(d.z-t.z)*r;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}for(const d of n){const E=o+(d.x-t.x)*r,M=a+(d.z-t.z)*r;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(o,a,3,0,Math.PI*2),this.ctx.fill();const v=6,_=o+Math.sin(e)*v,u=a+Math.cos(e)*v;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(o,a),this.ctx.lineTo(_,u),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class Vx{constructor(t,e){P(this,"scene");P(this,"sounds");P(this,"type","clear");P(this,"rainParticles",null);P(this,"rainPositions",null);P(this,"rainVelY",null);P(this,"rainCount",2e3);P(this,"splashParticles",null);P(this,"splashPositions",null);P(this,"splashLife",null);P(this,"splashCount",200);P(this,"thunderTimer",0);P(this,"thunderFlash",!1);P(this,"nextThunder",15);P(this,"_lightningStrike",null);P(this,"rainSoundTimer",0);P(this,"rainAmbientNode",null);P(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new pn,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new fn(e,3));const i=new Cc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new Lh(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const o=new pn,a=new Float32Array(this.splashCount*3),r=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,r[l]=0;o.setAttribute("position",new fn(a,3));const c=new Cc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new Lh(o,c),this.splashPositions=a,this.splashLife=r,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let o=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&o<this.splashCount){const r=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[o*3]=r,this.splashPositions[o*3+1]=e.y-1+Math.random()*.5,this.splashPositions[o*3+2]=c,this.splashLife[o]=.3,o++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this._lightningStrike={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40},this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}consumeLightningStrike(){const t=this._lightningStrike;return this._lightningStrike=null,t}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let o=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(o+.02*h)/1.02,o=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const r=t.createGain();r.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(r),r.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=r,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const Wx=new Ln(.2,6,6),Xx=new di({color:8978244});class Yx{constructor(t){P(this,"scene");P(this,"orbs",[]);P(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const o=new te(Wx,Xx);o.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(o),this.orbs.push({mesh:o,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const o=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z,c=o*o+a*a+r*r;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const qx=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class jx{constructor(){P(this,"achievements");P(this,"counters",new Map);P(this,"onUnlock",null);this.achievements=new Map(qx.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const o=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",o),o<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class Zx{constructor(){P(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const $x=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Kx=`
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
`,Ei=class Ei{constructor(){P(this,"mesh");P(this,"material");P(this,"_zenith",new yt);P(this,"_horizon",new yt);P(this,"_glow",new yt);P(this,"_sunDir",new B);const t=new Ln(400,24,16);this.material=new Pi({vertexShader:$x,fragmentShader:Kx,side:rn,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new B(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new te(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=Ei.ZENITH,o=Ei.HORIZON,a=Ei.GLOW;let r;if(n<.2){const h=n/.2;this._zenith.copy(i.night).lerp(i.dawn,h),this._horizon.copy(o.night).lerp(o.dawn,h),this._glow.copy(a.night).lerp(a.dawn,h),r=h*.8}else if(n<.3){const h=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,h),this._horizon.copy(o.dawn).lerp(o.day,h),this._glow.copy(a.dawn).lerp(a.day,h),r=(1-h)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(o.day),this._glow.copy(a.day),r=.05;else if(n<.8){const h=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,h),this._horizon.copy(o.day).lerp(o.dusk,h),this._glow.copy(a.day).lerp(a.dusk,h),r=h*.8}else{const h=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,h),this._horizon.copy(o.dusk).lerp(o.night,h),this._glow.copy(a.dusk).lerp(a.night,h),r=(1-h)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=r,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};P(Ei,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),P(Ei,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),P(Ei,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Uc=Ei;const De=new $d({antialias:!1});De.setPixelRatio(Math.min(window.devicePixelRatio,1));De.setSize(window.innerWidth,window.innerHeight);De.shadowMap.enabled=!1;De.toneMapping=ci;De.toneMappingExposure=1.1;document.body.appendChild(De.domElement);let cu=!1;document.addEventListener("visibilitychange",()=>{cu=document.hidden});De.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault();const t=document.createElement("div");t.id="glLostOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;align-items:center;justify-content:center;z-index:9999;font-size:1.2rem;font-family:monospace;",t.textContent="⚠ WebGL context lost — attempting to restore...",document.body.appendChild(t)},!1);De.domElement.addEventListener("webglcontextrestored",()=>{var s;(s=document.getElementById("glLostOverlay"))==null||s.remove()},!1);window.addEventListener("resize",()=>{ze.aspect=window.innerWidth/window.innerHeight,ze.updateProjectionMatrix(),De.setSize(window.innerWidth,window.innerHeight)});const se=new Lv;se.background=null;se.fog=new Zc(8900331,60,96);const ze=new En(75,window.innerWidth/window.innerHeight,.1,500);let Tr=!1,od=50;const Jx=240;let We=.25;const ni={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},ii={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},Qx=new Ln(4,12,12),ty=new di({color:16777215}),Zi=new te(Qx,ty);se.add(Zi);const ey=new Ln(2.5,12,12),ny=new di({color:14540287}),ks=new te(ey,ny);se.add(ks);const Mo=new Uc;se.add(Mo.mesh);const lu=[],hu=new Ie({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let s=0;s<24;s++){const t=new me,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,o=3+Math.random()*6,a=.8+Math.random()*.8,r=new Ce(i,a,o),c=new te(r,hu);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),se.add(t),lu.push(t)}const du=new Hv(16777215,.5);se.add(du);const Wn=new tu(16774368,1.4);Wn.castShadow=!0;Wn.shadow.mapSize.set(512,512);Wn.shadow.camera.near=.5;Wn.shadow.camera.far=300;Wn.shadow.camera.left=Wn.shadow.camera.bottom=-110;Wn.shadow.camera.right=Wn.shadow.camera.top=110;se.add(Wn);const Bc=new tu(3359846,.3);se.add(Bc);const uu=new kv(8900331,4881482,.3);se.add(uu);const uo=new yt,xi=new yt;let gr=0;function iy(s){We=(We+s/Jx)%1;const t=(We-.25)*Math.PI*2,e=t+Math.PI,n=150;if(Zi.position.set(0,Math.sin(t)*n,Math.cos(t)*n),ks.position.set(0,Math.sin(e)*n,Math.cos(e)*n),Wn.position.copy(Zi.position).normalize().multiplyScalar(100),Bc.position.copy(ks.position).normalize().multiplyScalar(100),gr%4===0)for(const c of lu)c.position.x=(c.position.x+.06+125)%250-125;if(gr++,gr<3)return;gr=0;let i,o;const a=We;if(a<.2){const c=a/.2;uo.copy(ni.night).lerp(ni.dawn,c),xi.copy(ii.night).lerp(ii.dawn,c),i=.05+c*.8,o=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;uo.copy(ni.dawn).lerp(ni.day,c),xi.copy(ii.dawn).lerp(ii.day,c),i=.85+c*.55,o=.5+c*.1}else if(a<.7)uo.copy(ni.day),xi.copy(ii.day),i=1.4,o=.6;else if(a<.8){const c=(a-.7)/.1;uo.copy(ni.day).lerp(ni.dusk,c),xi.copy(ii.day).lerp(ii.dusk,c),i=1.4-c*1.35,o=.6-c*.55}else{const c=(a-.8)/.2;uo.copy(ni.dusk).lerp(ni.night,c),xi.copy(ii.dusk).lerp(ii.night,c),i=.05,o=.05}De.setClearColor(xi),se.fog.color.copy(xi),Mo.update(We,Zi.position),Mo.followCamera(ze.position),Wn.intensity=i,du.intensity=Math.max(o,.04),Bc.intensity=Math.max(.35-i*.2,0),uu.intensity=o*.5;const r=Math.sin(t)>0;Zi.visible=r,ks.visible=!r,hu.opacity=o>.2?.78:0}let Pt=null,I=null;se.add(ze);const U=new Ox;let fo=null;const Ve=new Bx(se),Vt=new kx,Fr=new Fx(se),kc=new Yx(se);let Fc=null;const Vi=new Vx(se,Vt);let ce=null,Qt=null,$n=!0,Wi="",Fn=null,xn=0,Ue=0,Gn=1;U.updateDayCounter(Gn);const Cn=new jx;let ws=!1;const le=new Array(36).fill(0),de=new Array(36).fill(0);function Ps(s,t=1){for(let e=0;e<le.length;e++)if(le[e]===s&&de[e]<64){const n=64-de[e],i=Math.min(t,n);if(de[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=le.findIndex((n,i)=>n===0&&de[i]===0);if(e<0)return t;le[e]=s,de[e]=Math.min(t,64),t-=de[e]}return 0}function As(s,t=1){if(le.reduce((n,i,o)=>n+(i===s?de[o]:0),0)<t)return!1;for(let n=0;n<le.length&&t>0;n++)if(le[n]===s){const i=Math.min(t,de[n]);de[n]-=i,t-=i,de[n]===0&&(le[n]=0)}return!0}function Ts(s){return le.reduce((t,e,n)=>t+(e===s?de[n]:0),0)}const Ls=[],Cs=[],fu=new Ce(.05,.05,.4),pu=new di({color:16768324}),sy=new Ln(.15,8,8),oy=new di({color:26316});let Pe=null;const yi=new Kr;yi.far=5;const rd=new ee(0,0),ry=new Kr;ry.far=1;let we=20,on=20,Tn=0,Ja=0,vr=new B,Qa=0,tc=0;const Mi={sharpness:0,protection:0,speed:0},_n={strength:0,speed:0};let _o=0;const ad=5;let zr=0,Hr=0;const yn=new Zx;yn.load();let ec=0;const ay=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let _r=0,Cr=!1;const zc=60,cd=new Float32Array(zc);let nc=0,po=0,wi="You died",Fi=new B,ic=0,sc=0,oc=0,rc=0;const cy={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let ac=0,ld=.35,hd=!1;const lc=new B;let dd=!1;function ly(s,t){var i,o,a,r,c,l,h,f;const e=s.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const p=(i=e[1])==null?void 0:i.toLowerCase();return p==="creative"||p==="survival"||p==="spectator"?(I.setGameMode(p),U.setGameMode(p),p==="survival"&&(we=20,U.updateHunger(we,on)),U.addChatMessage("",`Gamemode set to ${p}`,!0),ce==null||ce.sendGameMode(p),!0):(U.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return I.setGameMode("spectator"),U.setGameMode("spectator"),U.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return I.takeDamage(I.maxHealth),!0;if(n==="/heal")return I.health=I.maxHealth,U.updateHearts(I.maxHealth,I.maxHealth),U.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return we=on,U.updateHunger(we,on),U.addChatMessage("","Fed to full!",!0),!0;if(n==="/god")return I.gameMode=I.gameMode==="creative"?"survival":"creative",U.addChatMessage("",I.gameMode==="creative"?"God mode ON (creative)":"God mode OFF (survival)",!0),!0;if(n==="/spawn")return I.position.x=0,I.position.z=0,I.position.y=Pt.getSurfaceHeight?Pt.getSurfaceHeight(0,0)+2:30,U.addChatMessage("","Teleported to spawn.",!0),!0;if(n==="/worldborder"){const p=parseInt(e[1]??"");return isNaN(p)||p<10?(U.addChatMessage("","Usage: /worldborder <radius> (min 10)",!0),!0):(mo=p,U.addChatMessage("",`World border set to ±${p} blocks`,!0),!0)}if(n==="/gamerule"){const p=(o=e[1])==null?void 0:o.toLowerCase(),g=(a=e[2])==null?void 0:a.toLowerCase();if(p==="domobspawning")window.__mobSpawningEnabled=g!=="false",U.addChatMessage("",`doMobSpawning = ${g!=="false"}`,!0);else if(p==="pvp")window.__pvpEnabled=g!=="false",U.addChatMessage("",`pvp = ${g!=="false"}`,!0);else if(p==="difficulty"){const v=g??"normal";window.__difficulty=v,U.addChatMessage("",`difficulty = ${v}`,!0)}else p==="keepinventory"?(window.__keepInventory=g!=="false",U.addChatMessage("",`keepInventory = ${g!=="false"}`,!0)):U.addChatMessage("","Usage: /gamerule domobspawning|pvp|difficulty|keepinventory <true|false|value>",!0);return!0}if(n==="/clear"){for(let p=0;p<36;p++)le[p]=0,de[p]=0;return U.updateHotbarFromInventory(le,de),U.addChatMessage("","Inventory cleared.",!0),!0}if(n==="/effect"){const p=(r=e[1])==null?void 0:r.toLowerCase();return p==="strength"?(_n.strength=30,U.addChatMessage("","Applied Strength I (30s)",!0)):p==="speed"?(_n.speed=30,I.speedBonus=Math.max(I.speedBonus,.3),U.addChatMessage("","Applied Speed I (30s)",!0)):U.addChatMessage("","Usage: /effect strength | speed",!0),!0}if(n==="/give"){const p=parseInt(e[1]??""),g=parseInt(e[2]??"1")||1;return isNaN(p)||p<=0?(U.addChatMessage("","Usage: /give <typeId> [count]",!0),!0):(Ps(p,g),U.updateHotbarFromInventory(le,de),U.addChatMessage("",`Gave ${g}x item ${p}`,!0),!0)}if(n==="/time"){const p=(c=e[1])==null?void 0:c.toLowerCase();return p==="day"?(We=.3,U.addChatMessage("","Set time to day",!0),!0):p==="night"?(We=0,U.addChatMessage("","Set time to night",!0),!0):p==="sunrise"?(We=.22,U.addChatMessage("","Set time to sunrise",!0),!0):p==="sunset"?(We=.75,U.addChatMessage("","Set time to sunset",!0),!0):(U.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const p=parseFloat(e[1]??"0"),g=parseFloat(e[2]??"0");return!isNaN(p)&&!isNaN(g)?(I.spawnAt(p,g),U.addChatMessage("",`Teleported to ${p.toFixed(1)}, ${g.toFixed(1)}`,!0)):U.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return U.showCraftingUI(),!0;if(n==="/weather"){const p=(l=e[1])==null?void 0:l.toLowerCase();return p==="clear"||p==="rain"||p==="thunder"?(Vi.setWeather(p),U.addChatMessage("",`Weather set to ${p}`,!0),!0):(U.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const p=(h=e[1])==null?void 0:h.toLowerCase();return p==="enter"?(ji=!0,I.spawnAt(I.position.x,I.position.z),I.position.y=30,se.fog.color.copy(new yt(16729088)),De.setClearColor(2228224),Mo.mesh.visible=!1,U.addChatMessage("","Entered the Nether!",!0),!0):p==="exit"?(ji=!1,I.spawnAt(I.position.x,I.position.z),se.fog.color.copy(new yt(8900331)),Mo.mesh.visible=!0,U.addChatMessage("","Exited the Nether!",!0),!0):(U.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return Fn=Qt==null?void 0:Qt.spawnAt("enderdragon",I.position.x,I.position.y+15,I.position.z-20),U.addChatMessage("","☠ The Ender Dragon awakens!",!0),U.showBossBar("Ender Dragon",(Fn==null?void 0:Fn.maxHealth)??200,200),!0;if(n==="/achievements")return Cn.getAll().forEach(p=>{U.addChatMessage("",`${p.unlocked?"✅":"⬜"} ${p.icon} ${p.name}: ${p.description}`,!0)}),!0;if(n==="/save")return $n?(Pt.saveToStorage({inventory:[...le],invCount:[...de],px:I.position.x,py:I.position.y,pz:I.position.z,health:I.health,hunger:we,xp:xn,xpLevel:Ue,dayCount:Gn}),U.addChatMessage("","World saved!",!0)):U.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if($n){const p=Pt.loadFromStorage();if(p){for(let g=0;g<36;g++)le[g]=p.inventory[g]??0,de[g]=p.invCount[g]??0;I.position.set(p.px,p.py,p.pz),I.health=p.health,we=p.hunger,xn=p.xp,Ue=p.xpLevel,Gn=p.dayCount,U.updateHearts(I.health,I.maxHealth),U.updateHunger(we,on),U.updateXP(xn,Ue),U.updateDayCounter(Gn),U.updateHotbarFromInventory(le,de)}U.addChatMessage("","World loaded!",!0)}else U.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const p=(f=e[1])==null?void 0:f.toLowerCase();if(p==="wolf"||p==="cat"){const g=(Qt==null?void 0:Qt.getMobsByType(p))??[];for(const{id:v,mob:_}of g)if(I.position.distanceTo(_.group.position)<=5)return _.data.state="tamed",U.addChatMessage("",`Tamed a ${p}!`,!0),Vt.play("eat"),!0;U.addChatMessage("",`No ${p} found nearby`,!0)}else U.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const p=yn.getAll();return U.addChatMessage("","--- Statistics ---",!0),U.addChatMessage("",`Kills: ${p.kills}`,!0),U.addChatMessage("",`Deaths: ${p.deaths}`,!0),U.addChatMessage("",`Blocks Placed: ${p.blocksPlaced}`,!0),U.addChatMessage("",`Blocks Broken: ${p.blocksBroken}`,!0),U.addChatMessage("",`Mobs Killed: ${p.mobsKilled}`,!0),U.addChatMessage("",`Distance Traveled: ${p.distanceTraveled.toFixed(1)}m`,!0),U.addChatMessage("",`Play Time: ${Math.floor(p.playTime/60)}m ${Math.floor(p.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/give <typeId> [count]","/god - toggle creative/survival","/spawn - teleport to world spawn","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(p=>U.addChatMessage("",p,!0)),!0):(U.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const hy=document.getElementById("loginScreen"),Gr=document.getElementById("nameInput"),dy=document.getElementById("playBtn");{const s=document.getElementById("buildStamp");s&&(s.textContent="build: 2026-04-02 15:58 UTC")}const Hc=document.getElementById("hud"),uy=document.getElementById("underwaterOverlay");let zi=!1,hc=0;const ud=55;let Vr=96,mo=500;const fy=2,py=20,fd=new yt(670820),pd=document.getElementById("portalOverlay");let kn=0,ji=!1;const my=new yt(3344392),mu=6;function gy(s,t,e){let n=-1;const i=mu;for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++)for(let r=-i;r<=i;r++){const c=Math.floor(s)+o,l=Math.floor(t)+a,h=Math.floor(e)+r;if(Pt.getBlockType(c,l,h)===73){const f=Math.sqrt(o*o+a*a+r*r);(n<0||f<n)&&(n=f)}}return n}const gu=document.getElementById("damageFlash"),vy=document.getElementById("speedLines"),md=document.getElementById("compassLabel"),gd=document.getElementById("lowHealthVignette");let Rr=0,vd=40;function _y(){gu.style.opacity="1",Rr=.15}function xy(s,t,e){if(Rr>0&&(Rr-=s,Rr<=0&&(gu.style.opacity="0")),t<vd&&_y(),vd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;gd.style.opacity=String(i)}else gd.style.opacity="0"}const yy=document.getElementById("crosshair"),dc=document.getElementById("breakProgress");let _d=!1;function My(s){const t=s>0;if(t!==_d&&(yy.classList.toggle("breaking",t),_d=t),t){const e=Math.floor(s*360);dc.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,dc.style.opacity="1"}else dc.style.opacity="0"}async function Qc(s){var p,g,v,_;Wi=s.trim()||`Player${Math.floor(Math.random()*999)}`,$n=(((p=window.__getSelectedMode)==null?void 0:p.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),o=document.getElementById("playBtn");if(o.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await Xv(),n.style.width="40%",i.textContent="Generating world...",!Pt){const u=((v=(g=document.getElementById("seedInput"))==null?void 0:g.value)==null?void 0:v.trim())||String(Date.now());let d=0;for(let E=0;E<u.length;E++)d=d*31+u.charCodeAt(E)>>>0;window.__worldSeed=d%1e5/1e5,Pt=new Ic(se),I=new Dc(ze,Pt,se),se.add(ze),jh()&&(fo=new P_(I.getKeys(),()=>I.breakBlockNow(),()=>I.placeBlockNow()),fo.onLookDelta=(E,M)=>{I.yaw-=E*.004,I.pitch-=M*.004,I.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,I.pitch))},fo.hide())}if(n.style.width="70%",await new Promise(u=>setTimeout(u,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(u=>setTimeout(u,150)),n.style.width="100%",hy.style.display="none",Hc.style.display="block",fo&&fo.show(),$n){const u=Pt.loadFromStorage();if(Pt.initializeTorchLights(),u){for(let d=0;d<36;d++)le[d]=u.inventory[d]??0,de[d]=u.invCount[d]??0;I.health=u.health,we=u.hunger,xn=u.xp,Ue=u.xpLevel,Gn=u.dayCount,setTimeout(()=>{I.position.set(u.px,u.py,u.pz),U.updateHearts(I.health,I.maxHealth),U.updateHunger(we,on),U.updateXP(xn,Ue),U.updateDayCounter(Gn),U.updateHotbarFromInventory(le,de)},100)}}{let u=0,d=0,E=9999;for(let M=-5;M<=5&&E===9999;M++)for(let w=-5;w<=5&&E===9999;w++){const O=M*16,C=w*16,L=Pt.getSurfaceHeight(O,C);L>=63&&L<=80&&(E=L,u=O,d=C)}if(E===9999)for(let M=-5;M<=5;M++)for(let w=-5;w<=5;w++){const O=M*16,C=w*16,L=Pt.getSurfaceHeight(O,C);L>62&&L<E&&(E=L,u=O,d=C)}I.spawnAt(u,d)}jh()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>Vt.startAmbientMusic("day"),3e3),I.onHealthChanged=u=>U.updateHearts(u,I.maxHealth),I.setDeathCause=u=>{wi=u},I.onDied=()=>{yn.increment("deaths"),Fi.copy(I.position);const u=document.getElementById("screenFade");u.style.background="rgba(80,0,0,0.7)",u.style.transition="opacity 0.8s ease",u.style.opacity="1",setTimeout(()=>{U.showDeath(wi,Fi.x,Fi.y,Fi.z,Ue),u.style.opacity="0"},600),U.addChatMessage("","☠ You died!",!0),Vt.play("hurt")},I.onOpenChat=()=>{U.openChatInput(),I.setChatOpen(!0)},Cn.onUnlock=u=>{U.showAchievement(u.name,u.description,u.icon),Vt.play("eat")};{const u=[],d=new Ln(.15,6,6),E=new Ie({color:15658751}),M=new Ie({color:15786176});document.addEventListener("mousedown",w=>{if(!document.pointerLockElement||U.isChatOpen()||w.button!==2)return;const O=I.selectedBlockType;if(O!==89&&O!==90||!As(O,1))return;const C=O===89?E:M,L=new te(d,C);L.position.copy(I.position).add(new B(0,.6,0));const X=new B(0,0,-1).applyAxisAngle(new B(1,0,0),I.camera.rotation.x).applyAxisAngle(new B(0,1,0),I.camera.rotation.y);se.add(L),u.push({mesh:L,vel:X.multiplyScalar(25),life:5,isMob:!1}),U.updateHotbarFromInventory(le,de)}),window.__tickThrowables=w=>{for(let O=u.length-1;O>=0;O--){const C=u[O];if(C.life-=w,C.vel.y-=15*w,C.mesh.position.addScaledVector(C.vel,w),Qt)for(const R of Qt.iterMobs()){if(!R.mob.alive)continue;const W=C.mesh.position.x-R.mob.targetPos.x,q=C.mesh.position.y-R.mob.targetPos.y,tt=C.mesh.position.z-R.mob.targetPos.z;if(W*W+q*q+tt*tt<1){R.mob.health-=3,R.mob.showDamage(R.mob.health),R.mob.health<=0&&R.mob.die(),Vt.play("hit"),C.life=0;break}}const L=Math.round(C.mesh.position.x),X=Math.round(C.mesh.position.y),b=Math.round(C.mesh.position.z);Pt.getBlock(L,X,b)&&(C.life=0),C.life<=0&&(se.remove(C.mesh),u.splice(O,1))}}}I.onRightClick=()=>{if(I.selectedBlockType===33){if(Pe){if(se.remove(Pe.mesh),Pe.inWater){const u=["Salmon","Cod","Tropical Fish","Pufferfish"],d=u[Math.floor(Math.random()*u.length)];U.addChatMessage("",`You caught a ${d}!`,!0),we=Math.min(on,we+2),U.updateHunger(we,on),Vt.play("eat"),Cn.trigger("fish_catch")}Pe=null}else{const u=xr.set(0,0,-1).applyAxisAngle(Mr,I.camera.rotation.x).applyAxisAngle(Er,I.camera.rotation.y),d=new te(sy,oy);d.position.copy(I.position),d.position.y+=.6,se.add(d),Pe={mesh:d,vel:u.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},I.onBreakBlock=(u,d,E)=>{const M=Pt.getBlock(u,d,E);if(!M)return;const O={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[M.type];if(O){const C=Math.random();if(!O.chance||C<O.chance){const L=Array.isArray(O.count)?Math.floor(Math.random()*(O.count[1]-O.count[0]+1))+O.count[0]:O.count;Ps(O.item,L),U.updateHotbarFromInventory(le,de),U.addChatMessage("",`+ ${L}x ${Hn(O.item)}`,!0)}}if(yn.increment("blocksBroken"),Cn.trigger("first_block"),M.type===24){let C=0;const L=setInterval(()=>{if(C%2===0&&Ve.burst(u,d,E,24),C++,C>8){clearInterval(L),Ve.explosion(u,d,E,30);const X=5,b=X*X;for(let tt=-X;tt<=X;tt++)for(let F=-X;F<=X;F++)for(let Y=-X;Y<=X;Y++)if(tt*tt+F*F+Y*Y<=b){const K=Math.round(u)+tt,Q=Math.round(d)+F,it=Math.round(E)+Y,st=Pt.getBlock(K,Q,it);st&&(Pt.removeBlock(K,Q,it),Ve.burst(K,Q,it,st.type))}const R=I.position.x-u,W=I.position.y-d,q=I.position.z-E;R*R+W*W+q*q<49&&I.gameMode==="survival"&&(I.takeDamage(6),U.updateHearts(I.health,I.maxHealth)),Vt.play("break")}},500);return}M.type===56&&Pt.removeTorchLight(u,d,E),M.type===59&&Pt.deactivateLamp(u,d,E),Ve.burst(u,d,E,M.type),Vt.play("break"),ce==null||ce.sendRemoveBlock(u,d,E)},I.onPlaceBlock=(u,d,E,M)=>{yn.increment("blocksPlaced"),M===56&&Pt.addTorchLight(u,d+.5,E),Ve.placeEffect(u,d,E,M),Vt.play("place"),ce==null||ce.sendAddBlock(u,d,E,M)},kc.onCollect=u=>{xn+=u;const d=Ue;for(;xn>=(Ue+1)*10;)Ue++;U.updateXP(xn,Ue),Ue>d&&(Vt.play("eat"),U.addChatMessage("",`Level Up! Level ${Ue}`,!0),Ue>=5&&Cn.trigger("level_five"))},U.onEnchant=u=>{Ue>=3?(Ue-=3,xn-=3*10,U.updateXP(xn,Ue),u==="sharpness"?(Mi.sharpness=1,U.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):u==="protection"?(Mi.protection=1,U.addChatMessage("","Applied Protection I (+3 armor)!",!0)):u==="speed"&&(Mi.speed=1,I.speedBonus=.2,U.addChatMessage("","Applied Speed I (+20% movement)!",!0)),Vt.play("eat")):U.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",u=>{if(!document.pointerLockElement)return;if(u.button===2){const M={69:"disc_green",70:"disc_red",71:"disc_blue"}[I.selectedBlockType];M&&(Vt.isMusicPlaying()?Vt.stopMusic():Vt.playMusic(M));return}if(u.button!==0)return;if(I.selectedBlockType===32){const E=xr.set(0,0,-1).applyAxisAngle(Mr,I.camera.rotation.x).applyAxisAngle(Er,I.camera.rotation.y),M=new te(fu,pu);M.position.copy(I.position),M.position.y+=.6,se.add(M),Ls.push({mesh:M,vel:E.multiplyScalar(30),life:10}),Vt.play("hit");return}yi.setFromCamera(rd,ze);const d=Qt==null?void 0:Qt.tryAttack(yi,Mi,_n.strength>0?4:0);if(d){Vt.play("hit"),Cn.trigger("first_mob");const E=Qt==null?void 0:Qt.getMob(d.mobId);if(E&&!E.alive){Fr.spawnFromMob(E.type,E.targetPos.x,E.targetPos.y,E.targetPos.z);const M={pig:3,chicken:2,cow:5,sheep:3,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},w=E.type.toLowerCase(),O=M[w]||1;kc.spawn(E.targetPos.x,E.targetPos.y,E.targetPos.z,O),E.type==="zombie"&&Cn.trigger("kill_zombie"),E.type==="creeper"&&Cn.trigger("kill_creeper"),E.type==="enderdragon"&&Cn.trigger("kill_dragon"),yn.recordMobKill(E.type),U.addKillFeedDeath(E.type)}$n||ce==null||ce.sendAttackMob(d.mobId,d.damage)}}),document.addEventListener("mousedown",u=>{u.button===2&&I.selectedBlockType===72&&(u.preventDefault(),Tr=!0,ze.fov=65,ze.updateProjectionMatrix())}),document.addEventListener("mouseup",u=>{u.button===2&&(Tr=!1,ze.fov=75,ze.updateProjectionMatrix())}),document.addEventListener("contextmenu",u=>{document.pointerLockElement&&u.preventDefault()}),document.addEventListener("keydown",u=>{if(u.key==="e"||u.key==="E"){if(!document.pointerLockElement||U.isChatOpen())return;u.preventDefault();const d=xr.set(0,0,-1).applyAxisAngle(Mr,I.camera.rotation.x).applyAxisAngle(Er,I.camera.rotation.y).normalize(),E=Pt.raycastBlock(I.position,d,5);if(E){const M=Pt.getBlock(E.x,E.y,E.z);if(M&&M.type===40)if(Ue>=5){U.showEnchantUI(Ue);return}else{U.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(M&&M.type===94){const w=I.selectedBlockType;if(w>0&&Ts(w)>0){const O=Hn(w),C=window.prompt(`Rename item (${O}):`,O);C&&C.trim()&&U.addChatMessage("",`✏️ Renamed "${O}" → "${C.trim()}" (cosmetic)`,!0)}else U.addChatMessage("","Hold an item in hand to rename it at the anvil.",!0);return}if(M&&M.type===34){We>.7||We<.25?(U.addChatMessage("","Sleeping...",!0),We=.25,I.health=Math.min(I.maxHealth,I.health+3),we=Math.min(on,we+4),U.updateHearts(I.health,I.maxHealth),U.updateHunger(we,on),Vt.play("eat"),setTimeout(()=>{U.addChatMessage("","You woke up!",!0)},2e3)):U.addChatMessage("","You can only sleep at night!",!0);return}}if(Qt){yi.far=3,yi.setFromCamera(rd,ze);const M=Qt.getAllMobsForDisplay(),w=[];for(const{id:L,mob:X}of M)X.type==="villager"&&X.group.traverse(b=>{b.isMesh&&w.push({mesh:b,mobId:L,type:X.type})});const O=w.map(L=>L.mesh),C=yi.intersectObjects(O);if(C.length>0){const L=C[0];if(w.find(b=>b.mesh===L.object)){yi.far=5;const b=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];U.showTradeUI(b),U.onTrade=R=>{const W=b[R];if(!W)return;const q={0:45,1:14,2:5,3:39},tt={0:5,1:3,2:10,3:1},F={0:0,1:36,2:33,3:46},Y=q[R],K=tt[R],Q=F[R];Y&&As(Y,K)?(Q>0&&Ps(Q,1),U.addChatMessage("",`Trade: gave ${W.giveName}, received ${W.receiveName}!`,!0),Vt.play("place")):U.addChatMessage("",`Need ${W.giveName} to trade!`,!0)};return}}yi.far=5}ws?(U.hideInventory(),ws=!1,document.body.requestPointerLock()):(U.showInventory(le),ws=!0,document.exitPointerLock())}}),document.addEventListener("keydown",u=>{u.key==="Tab"&&document.pointerLockElement&&!U.isChatOpen()&&(u.preventDefault(),ws?(U.hideInventory(),ws=!1,document.body.requestPointerLock()):(U.showInventory(le),ws=!0,document.exitPointerLock()))}),document.addEventListener("keydown",u=>{(u.key==="o"||u.key==="O")&&document.pointerLockElement&&!U.isChatOpen()&&(u.preventDefault(),U.isScoreboardOpen()?(U.hideScoreboard(),document.body.requestPointerLock()):(U.showScoreboard(yn.getAll(),Gn),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",u=>{(u.key==="F1"||u.key==="f1")&&(u.preventDefault(),a=!a,a?U.showHUD():U.hideHUD())}),document.addEventListener("keydown",u=>{if(u.key==="F2"||u.key==="f2"){u.preventDefault();try{const d=De.domElement.toDataURL("image/png"),E=document.createElement("a");E.href=d,E.download="minecraft-"+Date.now()+".png",E.click(),U.addChatMessage("","Screenshot saved!",!0)}catch{U.addChatMessage("","Failed to capture screenshot",!0)}}});{let u=!1,d=null;document.addEventListener("keydown",E=>{var M;if((E.key==="p"||E.key==="P")&&!U.isChatOpen()){if(u&&d){d.remove(),d=null,u=!1,document.pointerLockElement===null&&document.body.requestPointerLock();return}document.exitPointerLock(),u=!0,d=document.createElement("div"),d.style.cssText=`position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);
          background:#2a2a2a;border:2px solid #555;padding:20px;z-index:2000;border-radius:6px;
          color:#eee;font-family:monospace;min-width:260px;`,d.innerHTML=`<h3 style="margin:0 0 14px;color:#ffdd44;text-align:center">⚙ Settings</h3>
          <label>SFX Volume: <input type="range" id="sfxVol" min="0" max="100" value="${Math.round(Vt.sfxVolume*100)}" style="width:120px"></label><br><br>
          <label>Music Volume: <input type="range" id="musVol" min="0" max="100" value="${Math.round(Vt.musicVolume*100)}" style="width:120px"></label><br><br>
          <label>View Distance: <input type="range" id="fogDist" min="32" max="192" step="16" value="${Vr}" style="width:120px"></label><br><br>
          <button id="closeSettings" style="width:100%;padding:8px;background:#555;color:#eee;border:none;border-radius:3px;cursor:pointer;">Close [P]</button>`,document.body.appendChild(d),document.getElementById("sfxVol").addEventListener("input",w=>{Vt.sfxVolume=parseInt(w.target.value)/100}),document.getElementById("musVol").addEventListener("input",w=>{Vt.musicVolume=parseInt(w.target.value)/100}),document.getElementById("fogDist").addEventListener("input",w=>{Vr=parseInt(w.target.value)}),(M=document.getElementById("closeSettings"))==null||M.addEventListener("click",()=>{d==null||d.remove(),d=null,u=!1,document.body.requestPointerLock()})}})}document.addEventListener("keydown",u=>{if((u.key==="r"||u.key==="R")&&document.pointerLockElement&&!U.isChatOpen())if(Qt!=null&&Qt.mountedMobId)Qt.dismount(),I.speedBonus=Mi.speed>0?.2:0,U.addChatMessage("","Dismounted.",!0);else{if(Ts(93)<1){U.addChatMessage("","You need a saddle to ride a horse!",!0);return}(Qt==null?void 0:Qt.tryMount(I.position))&&(I.speedBonus=1,U.addChatMessage("","Mounted horse! R to dismount.",!0))}}),document.addEventListener("keydown",u=>{(u.key==="F3"||u.key==="f3")&&(u.preventDefault(),Cr=!Cr,Cr?U.showDebugScreen():U.hideDebugScreen())}),document.addEventListener("keydown",u=>{(u.key==="F4"||u.key==="f4")&&(u.preventDefault(),I.gameMode==="spectator"?(I.setGameMode("survival"),U.setGameMode("survival"),we=on,U.updateHunger(we,on),U.addChatMessage("","Returned to Survival mode",!0),ce==null||ce.sendGameMode("survival")):(I.setGameMode("spectator"),U.setGameMode("spectator"),U.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),ce==null||ce.sendGameMode("spectator")))}),U.onChestTransfer=(u,d,E,M)=>{if(u){const w=E[d];if(!w)return;const O=M.indexOf(0);if(O>=0){M[O]=w,E[d]=0;for(let C=0;C<M.length&&C<Bi.length;C++)Bi[C]=M[C];U.updateHotbarFromInventory(Bi),Vt.play("place")}else U.addChatMessage("","Hotbar is full!",!0)}else{const w=M[d];if(!w)return;const O=E.indexOf(0);if(O>=0){E[O]=w,M[d]=0;for(let C=0;C<M.length&&C<Bi.length;C++)Bi[C]=M[C];U.updateHotbarFromInventory(Bi),Vt.play("place")}else U.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",u=>{if((u.key==="e"||u.key==="E")&&Hc.style.display!=="none"){let d=null;for(let L=-5;L<=5&&!d;L++)for(let X=-5;X<=5&&!d;X++)for(let b=-5;b<=5&&!d;b++){const R=Math.floor(I.position.x)+L,W=Math.floor(I.position.y)+X,q=Math.floor(I.position.z)+b,tt=Pt.getBlock(R,W,q);tt&&tt.type===31&&I.position.distanceTo(yr.set(R+.5,W+.5,q+.5))<=5&&(d=[R,W,q])}if(d){const L=Pt.getChestInventory(d[0],d[1],d[2]),X=Bi.slice(0,9);U.showChestUI(L,X),U.onChestClose=()=>{Pt.setChestInventory(d[0],d[1],d[2],L)},Vt.play("place");return}let E=!1;for(let L=-5;L<=5&&!E;L++)for(let X=-5;X<=5&&!E;X++)for(let b=-5;b<=5&&!E;b++){const R=Math.floor(I.position.x)+L,W=Math.floor(I.position.y)+X,q=Math.floor(I.position.z)+b,tt=Pt.getBlock(R,W,q);tt&&tt.type===22&&I.position.distanceTo(yr.set(R+.5,W+.5,q+.5))<=5&&(E=!0)}if(E){U.showCraftingUI(),Cn.trigger("first_craft"),Vt.play("place");return}let M=null;for(let L=-5;L<=5;L++){for(let X=-5;X<=5;X++){for(let b=-5;b<=5;b++){const R=Math.floor(I.position.x)+L,W=Math.floor(I.position.y)+X,q=Math.floor(I.position.z)+b,tt=Pt.getBlock(R,W,q);if(tt&&tt.type===23&&I.position.distanceTo(yr.set(R+.5,W+.5,q+.5))<=5){M=[R,W,q];break}}if(M)break}if(M)break}if(M){U.showSmeltingUI();return}const w=xr.set(0,0,-1).applyAxisAngle(Mr,I.camera.rotation.x).applyAxisAngle(Er,I.camera.rotation.y),O=new Kr(I.position,w);O.far=2;let C=null;for(let L=-2;L<=2;L++){for(let X=-2;X<=2;X++){for(let b=-2;b<=2;b++){const R=Math.floor(I.position.x)+L,W=Math.floor(I.position.y)+X,q=Math.floor(I.position.z)+b,tt=Pt.getBlock(R,W,q);if(tt&&tt.type===58&&I.position.distanceTo(yr.set(R+.5,W+.5,q+.5))<=2){C=[R,W,q];break}}if(C)break}if(C)break}C&&(Pt.toggleLever(C[0],C[1],C[2]),Vt.play("place"))}}),U.onChat=u=>{u.startsWith("/")?ly(u):$n?U.addChatMessage(Wi,u):ce==null||ce.sendChat(u),I.setChatOpen(!1)},U.onSmelt=(u,d)=>{const E=ay.get(u);return E?new Set([64,5,10,280]).has(d)&&Ts(d)>0?Ts(u)<1?(U.addChatMessage("","No input item to smelt!",!0),null):(As(u,1),As(d,1),Ps(E,1),U.updateHotbarFromInventory(le,de),U.addChatMessage("",`Smelted: ${Hn(E)}`,!0),Vt.play("eat"),E):(U.addChatMessage("","Need fuel (coal, wood) to smelt!",!0),null):null},U.getInvCount=u=>Ts(u),U.onInventorySwap=(u,d)=>{const E=le[d];le[d]=le[u],le[u]=E;const M=de[d];de[d]=de[u],de[u]=M,U.updateHotbarFromInventory(le,de)};const r={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},saddle:{ingredients:{95:7},output:{type:93,count:1}},anvil:{ingredients:{62:4},output:{type:94,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};U.onCraft=u=>{const d=r[u];if(!d)return!1;for(const[E,M]of Object.entries(d.ingredients))if(Ts(Number(E))<M)return U.addChatMessage("","✗ Not enough materials",!0),!1;for(const[E,M]of Object.entries(d.ingredients))As(Number(E),M);return Ps(d.output.type,d.output.count),U.updateHotbarFromInventory(le,de),U.addChatMessage("",`✓ Crafted ${d.output.count}x ${Hn(d.output.type)}`,!0),!0},U.onRespawn=()=>{const u=document.getElementById("screenFade");u.style.background="#000",u.style.transition="opacity 0.4s ease",u.style.opacity="1",setTimeout(()=>{if(window.__keepInventory!==!0){for(let d=0;d<36;d++)le[d]=0,de[d]=0;xn=0,Ue=0,U.updateHotbarFromInventory(le,de),U.updateXP(0,0)}I.respawn(),we=on,U.updateHearts(I.maxHealth,I.maxHealth),U.updateHunger(we,on),ce==null||ce.sendRespawn(),setTimeout(()=>{u.style.transition="opacity 0.6s ease",u.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},U.updateHearts(I.health,I.maxHealth),U.updateHunger(we,on),U.setGameMode(I.gameMode);let c=0;const l=u=>{c=(u%8+8)%8,I.selectedBlockType=le[c]??0,U.selectSlot(c),U.updateHotbarFromInventory(le,de)};document.addEventListener("wheel",u=>{l(c+(u.deltaY>0?1:-1))}),document.addEventListener("keydown",u=>{const d=parseInt(u.key);d>=1&&d<=8&&l(d-1)});const h={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65,leather:95,potion_strength:91,potion_speed:92,saddle:93},f={91:{effect:"strength",duration:30,label:"Strength I (+4 dmg, 30s)"},92:{effect:"speed",duration:30,label:"Speed I (+30% move, 30s)"}};if(document.addEventListener("mousedown",u=>{if(!document.pointerLockElement||U.isChatOpen()||u.button!==2)return;const d=f[I.selectedBlockType];d&&As(I.selectedBlockType,1)&&(_n[d.effect]=d.duration,d.effect==="speed"&&(I.speedBonus=Math.max(I.speedBonus,.3)),U.addChatMessage("",`🧪 Drank ${d.label}!`,!0),Vt.play("eat"),U.updateHotbarFromInventory(le,de))}),Fr.onPickup=u=>{Vt.play("eat");const d=h[u];d&&d>0?(Ps(d,1),U.updateHotbarFromInventory(le,de),U.addChatMessage("",`+ 1x ${Hn(d)}`,!0)):U.addChatMessage("",`Picked up: ${u}`,!0),u==="iron_helmet"&&(I.armor=Math.min(20,I.armor+5)),u==="iron_chestplate"&&(I.armor=Math.min(20,I.armor+8)),u==="iron_leggings"&&(I.armor=Math.min(20,I.armor+7)),u==="iron_boots"&&(I.armor=Math.min(20,I.armor+4))},$n){U.setConnectionStatus("connected"),U.updatePlayerCount(1),Qt=new kr(se,Pt,{onPlayerDamage:u=>{if(wi="You were killed by a mob",I.gameMode==="survival"){let d=u;const E=window.__difficulty;E==="easy"?d=Math.ceil(d*.5):E==="hard"?d=Math.ceil(d*1.5):E==="peaceful"&&(d=0),Mi.protection>0&&(d=Math.max(0,d-3*Mi.protection)),Tr&&od>0&&(d=Math.ceil(d*.2),od--),I.takeDamage(d),Vt.play("hurt"),U.updateHearts(I.health,I.maxHealth),I.health<=0&&(yn.increment("deaths"),U.showDeath(wi,Fi.x,Fi.y,Fi.z,Ue))}},getPlayerPos:()=>I.position,onExplosion:(u,d,E,M)=>{const w=M*M;for(let L=-M;L<=M;L++)for(let X=-M;X<=M;X++)for(let b=-M;b<=M;b++)if(L*L+X*X+b*b<=w){const R=Math.round(u)+L,W=Math.round(d)+X,q=Math.round(E)+b,tt=Pt.getBlock(R,W,q);tt&&(Pt.removeBlock(R,W,q),Ve.burst(R,W,q,tt.type))}Vt.play("break");const O=Math.sqrt((I.position.x-u)**2+(I.position.y-d)**2+(I.position.z-E)**2);O<20&&(zr=.4,Hr=Math.max(.02,.12*(1-O/20)));const C=De.domElement.style.filter;De.domElement.style.filter="brightness(1.3)",setTimeout(()=>{De.domElement.style.filter=C},100)},onWitherEffect:()=>{_o=ad}},!0);for(let u=0;u<10;u++)Qt.spawnRandom(0,0);Fc=new Gx(Pt),U.addChatMessage("",`Welcome, ${Wi}! 🌍 Singleplayer`,!0),U.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0),setTimeout(()=>U.addChatMessage("","💡 WASD=move · Space=jump · E=inventory/interact",!0),3e3),setTimeout(()=>U.addChatMessage("","💡 Left-click=break block · Right-click=place/use",!0),6e3),setTimeout(()=>U.addChatMessage("","💡 Shift=sneak · R=mount horse · Ctrl=sprint",!0),9e3)}else{const u=window.location.protocol==="https:",d=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":u?window.location.hostname:"159.223.140.36:8471",E=((_=window.__getServerAddr)==null?void 0:_.call(window))??d;ce=new Cx(se,Pt,{onStatusChange:M=>U.setConnectionStatus(M),onChat:(M,w,O)=>U.addChatMessage(M,w,O),onPlayerCount:M=>U.updatePlayerCount(M),onPlayerDamage:M=>{I.takeDamage(M),Vt.play("hurt"),U.updateHearts(I.health,I.maxHealth)},onPlayerDied:M=>{U.addChatMessage("",`☠ ${M} was slain!`,!0),M===Wi&&(yn.increment("deaths"),U.showDeath("Killed by another player",I.position.x,I.position.y,I.position.z,Ue))}},E),Qt=new kr(se,Pt,{onPlayerDamage:()=>{},getPlayerPos:()=>I.position,onExplosion:(M,w,O,C)=>{const L=C*C;for(let R=-C;R<=C;R++)for(let W=-C;W<=C;W++)for(let q=-C;q<=C;q++)if(R*R+W*W+q*q<=L){const tt=Math.round(M)+R,F=Math.round(w)+W,Y=Math.round(O)+q,K=Pt.getBlock(tt,F,Y);K&&(Pt.removeBlock(tt,F,Y),Ve.burst(tt,F,Y,K.type))}Vt.play("break");const X=Math.sqrt((I.position.x-M)**2+(I.position.y-w)**2+(I.position.z-O)**2);X<20&&(zr=.4,Hr=Math.max(.02,.12*(1-X/20)));const b=De.domElement.style.filter;De.domElement.style.filter="brightness(1.3)",setTimeout(()=>{De.domElement.style.filter=b},100)},onWitherEffect:()=>{_o=ad}},!1),ce.setMobManager(Qt),ce.setLocalStateGetter(()=>I.getState()),await ce.join(Wi),U.addChatMessage("",`Welcome, ${Wi}! 🌐 Multiplayer`,!0),U.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}dy.addEventListener("click",()=>Qc(Gr.value));Gr.addEventListener("keydown",s=>{s.key==="Enter"&&Qc(Gr.value)});const uc=new URLSearchParams(window.location.search).get("name");uc&&(Gr.value=uc,setTimeout(()=>Qc(uc),800));let xd=performance.now(),fc=0;const Ey=60;new B;const by=new yt(16777215),xr=new B,yr=new B,Mr=new B(1,0,0),Er=new B(0,1,0),vu=20,Sy=Array.from({length:vu},()=>({x:0,z:0,alive:!0})),pc=[],_u=8,wy=Array.from({length:_u},()=>({x:0,z:0})),mc=[];function xu(){var e,n,i,o,a;requestAnimationFrame(xu);const s=performance.now(),t=Math.min((s-xd)/1e3,.05);if(xd=s,t>0&&(cd[nc]=1/t,nc=(nc+1)%zc,po<zc&&po++),Hc.style.display!=="none"&&Pt&&I){if(I.update(t),ce==null||ce.updatePlayers(t),$n&&(fc+=t,fc>=Ey&&(fc=0,Pt.saveToStorage({inventory:[...le],invCount:[...de],px:I.position.x,py:I.position.y,pz:I.position.z,health:I.health,hunger:we,xp:xn,xpLevel:Ue,dayCount:Gn}))),$n&&Pt.generateAroundPlayer(I.position.x,I.position.z),cu||iy(t),!zi&&!ji){if(oc+=t,oc>2){oc=0;const u=Pt.getBiome(Math.round(I.position.x),Math.round(I.position.z));u!==rc&&(rc=u)}const v=se.fog,_=cy[rc];_&&v.color.lerp(_,.08)}if(Qt&&(Qt.dayTime=We,Qt.update(t),Qt.mountedMobId&&Qt.updateMount(I.position,I.getYaw(),!0,t)),Ve.update(t),sc+=t,sc>.5){sc=0;const v=(We-.25)*Math.PI*2,_=Math.sin(v);if(_>.2)for(let u=0;u<2;u++){const d=(Math.random()-.5)*16,E=Math.random()*6+1,M=(Math.random()-.5)*16;Ve.dustMote(I.position.x+d,I.position.y+E,I.position.z+M)}else if(_<-.1)for(let u=0;u<3;u++){const d=(Math.random()-.5)*20,E=(Math.random()-.5)*20;Ve.firefly(I.position.x+d,I.position.y-1+Math.random()*3,I.position.z+E)}}y_(s/1e3),Pt.updateTorchFlicker(s/1e3);for(const[v]of Pt.torchLights){const[_,u,d]=v.split(",").map(Number),E=_-I.position.x,M=d-I.position.z;E*E+M*M>576||(Math.random()<.06&&Ve.spawn(_+(Math.random()-.5)*.1,u+.7,d+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Ve.spawn(_+(Math.random()-.5)*.08,u+.55,d+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(Vi.update(t,I.position,se.fog.color),Fr.update(t,I.position),kc.update(t,I.position),_o>0&&(_o-=t),yn.increment("playTime",t),I.velocity&&yn.increment("distanceTraveled",I.velocity.length()*t),ec+=t,ec>=60&&(ec=0,yn.save()),Qa+=t,Qa>.1&&(Qa=0,Pt.checkPressurePlate(I.position)),tc+=t,tc>30&&(tc=0,I.position.y<10&&(Vt.playAmbient("cave"),Vt.setAmbientMood("cave"))),Pe){Pe.vel.y-=20*t,Pe.mesh.position.addScaledVector(Pe.vel,t);const v=Math.round(Pe.mesh.position.x),_=Math.round(Pe.mesh.position.y),u=Math.round(Pe.mesh.position.z);Pt.getBlockType(v,_,u)===7&&!Pe.inWater&&(Pe.inWater=!0,Pe.vel.set(0,0,0),Pe.mesh.position.y=_+.5),Pe.inWater&&(Pe.waitTimer-=t,Pe.mesh.position.y=_+.5+Math.sin(s*.003)*.1,Pe.waitTimer<=0&&(Pe.mesh.material.color.set(16776960),setTimeout(()=>{Pe!=null&&Pe.mesh.material&&Pe.mesh.material.color.set(26316)},300)))}(e=window.__tickThrowables)==null||e.call(window,t);for(let v=Ls.length-1;v>=0;v--){const _=Ls[v];_.life-=t,_.vel.y-=20*t,_.mesh.position.addScaledVector(_.vel,t);const u=Math.sqrt(_.vel.x*_.vel.x+_.vel.y*_.vel.y+_.vel.z*_.vel.z);u>.1&&(_.mesh.rotation.x=-Math.asin(_.vel.y/u),_.mesh.rotation.y=Math.atan2(_.vel.x,_.vel.z)),Math.random()<.3&&Ve&&Ve.spawn(_.mesh.position.x,_.mesh.position.y,_.mesh.position.z,16777130,.3,0,-.2,0);const d=Math.round(_.mesh.position.x),E=Math.round(_.mesh.position.y),M=Math.round(_.mesh.position.z);if(Pt.hasBlock(d,E,M)){const O=new te(fu,pu);O.position.copy(_.mesh.position),O.rotation.copy(_.mesh.rotation),se.add(O),Cs.push({mesh:O,life:8}),se.remove(_.mesh),Ls.splice(v,1);continue}let w=!1;if(Qt)for(const O of Qt.iterMobs()){const C=O.mob,L=_.mesh.position.x-C.targetPos.x,X=_.mesh.position.y-C.targetPos.y,b=_.mesh.position.z-C.targetPos.z;if(L*L+X*X+b*b<.64&&C.alive){C.health-=5,C.showDamage(C.health),C.health<=0&&(C.die(),yn.recordMobKill(O.data.type),Fr.spawnFromMob(O.data.type,C.targetPos.x,C.targetPos.y,C.targetPos.z)),se.remove(_.mesh),Ls.splice(v,1),w=!0,Vt.play("hit");break}}_.life<=0&&!w&&(se.remove(_.mesh),Ls.splice(v,1))}for(let v=Cs.length-1;v>=0;v--)Cs[v].life-=t,Cs[v].life<=0&&(se.remove(Cs[v].mesh),Cs.splice(v,1));if(Fc){if(mc.length=0,ce&&ce.getPlayerData){const v=((n=ce.getPlayerData)==null?void 0:n.call(ce))??[];let _=0;for(const u of v)if(u.name!==Wi&&_<_u){const d=wy[_++];d.x=u.x,d.z=u.z,mc.push(d)}}if(pc.length=0,Qt){let v=0;for(const _ of Qt.iterMobs())if(v<vu){const u=Sy[v++];u.x=_.mob.targetPos.x,u.z=_.mob.targetPos.z,u.alive=_.mob.alive,pc.push(u)}}Fc.update(t,I.position,I.getYaw(),mc,pc)}if(md){const _=(I.getYaw()*180/Math.PI%360+360)%360,d=["S","SW","W","NW","N","NE","E","SE"][Math.round(_/45)%8],E=0-I.position.x,M=0-I.position.z,O=((Math.atan2(E,M)*180/Math.PI-_)%360+360)%360,L=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(O/45)%8];md.textContent=`${d} ${L}⌂`}if(Fn&&Fn.alive?U.updateBossBar(Fn.health,Fn.maxHealth):Fn&&!Fn.alive&&(U.hideBossBar(),Fn=null),_o>0?U.updateHearts(I.health,I.maxHealth,!0):U.updateHearts(I.health,I.maxHealth,!1),I.gameMode==="survival"){const v=I.position.x-vr.x,_=I.position.y-vr.y,u=I.position.z-vr.z,d=v*v+_*_+u*u;vr.copy(I.position),d>.01&&(Ja+=t,Ja>1.5&&(Ja=0,we=Math.max(0,we-.5),U.updateHunger(Math.ceil(we*2)/2,on))),we>=16&&I.health<I.maxHealth&&(Tn+=t,Tn>4&&(Tn=0,I.health=Math.min(I.maxHealth,I.health+1),U.updateHearts(I.health,I.maxHealth))),we<=0&&(wi="You starved",Tn+=t,Tn>4&&(Tn=0,I.health>1&&I.takeDamage(1),U.updateHearts(I.health,I.maxHealth)))}if(I.gameMode==="survival"){const v=Math.round(I.position.x),_=Math.round(I.position.y),u=Math.round(I.position.z);Pt.getBlockType(v,_,u)===47&&(wi="You burned in lava",Tn+=t,Tn>.5&&(Tn=0,I.takeDamage(2),U.updateHearts(I.health,I.maxHealth)))}if(I.gameMode==="survival"){const v=Math.abs(I.position.x),_=Math.abs(I.position.z);(v>mo||_>mo)&&(Tn+=t,Tn>.5&&(Tn=0,wi="You went beyond the world border",I.takeDamage(2),U.updateHearts(I.health,I.maxHealth),Math.max(v,_)-mo<10&&U.addChatMessage("",`⚠ World border nearby! (${Math.round(mo-Math.max(v,_))} blocks)`,!0)))}const r=_n.strength,c=_n.speed;if(_n.strength=Math.max(0,_n.strength-t),_n.speed=Math.max(0,_n.speed-t),c>0&&_n.speed===0&&Mi.speed===0&&(I.speedBonus=0),r>0&&_n.strength===0&&U.addChatMessage("","Strength effect wore off.",!0),c>0&&_n.speed===0&&U.addChatMessage("","Speed effect wore off.",!0),_r<.22&&We>=.22&&(Gn++,U.updateDayCounter(Gn),U.addChatMessage("","Dawn breaks...",!0),Vt.playAmbient("birds"),Vt.setAmbientMood("day"),Cn.trigger("reach_night")),_r<.73&&We>=.73&&(U.addChatMessage("","Night falls... watch out for monsters!",!0),Vt.playAmbient("wind"),Vt.setAmbientMood("night")),_r<.95&&We>=.95&&Qt&&Math.random()<.5&&window.__mobSpawningEnabled!==!1){const v=3+Math.floor(Math.random()*3);for(let _=0;_<v;_++){const u=Math.random()*Math.PI*2,d=20+Math.random()*15,E=I.position.x+Math.cos(u)*d,M=I.position.z+Math.sin(u)*d,w=Pt.getSurfaceHeight(Math.round(E),Math.round(M))+1.5,O=Math.random()<.5?"zombie":"skeleton";Qt.spawnMob(O,E,w,M)}}_r=We,U.updatePosition(I.position.x,I.position.y,I.position.z),U.updateTime(We),xy(t,I.health,I.maxHealth),My(I.getBreakProgress());const l=((i=I.keys)==null?void 0:i.ControlLeft)&&I.velocity.lengthSq()>4;if(vy.style.opacity=l?"0.7":"0",!Tr){const v=l?80:75;Math.abs(ze.fov-v)>.1&&(ze.fov+=(v-ze.fov)*.12,ze.updateProjectionMatrix())}Zi.position.x+=(I.position.x-Zi.position.x)*.02,ks.position.x+=(I.position.x-ks.position.x)*.02,Vi.isThunderFlashing()&&De.setClearColor(by);const h=Vi.consumeLightningStrike();if(h&&I.gameMode==="survival"){const v=I.position.x+h.x,_=I.position.z+h.z,u=v-I.position.x,d=_-I.position.z;u*u+d*d<25&&(wi="Struck by lightning",I.takeDamage(5),U.updateHearts(I.health,I.maxHealth),U.addChatMessage("","⚡ You were struck by lightning!",!0),Vt.play("hurt")),Ve.burst(v,I.position.y,_,0)}const f=Pt.getBlockType(Math.round(I.position.x),Math.round(I.position.y),Math.round(I.position.z))===7;f&&!dd&&(Ve.splash(I.position.x,I.position.y,I.position.z,12),Ve.bubbles(I.position.x,I.position.y-.5,I.position.z,8),Vt.play("splash")),dd=f;const p=Pt.getBlockType(Math.round(ze.position.x),Math.round(ze.position.y),Math.round(ze.position.z))===7;if(p!==zi&&(zi=p,uy.style.opacity=zi?"1":"0",zi&&Cn.trigger("deep_dive")),zi){const v=se.fog;v.near=fy,v.far=py,v.color.copy(fd),De.setClearColor(fd),hc+=t,hc>.3&&(hc=0,Ve.bubbles(I.position.x,I.position.y+.5,I.position.z,2))}else if(!ji){const v=se.fog;v.near=ud,v.far=Vr}const g=gy(I.position.x,I.position.y,I.position.z);if(g>=0){const v=Math.max(0,1-g/mu);kn+=(v-kn)*.08}else kn+=(0-kn)*.08;if(kn>.01){pd.style.opacity=String(kn);const v=Math.sin(performance.now()*.002)*kn*40,_=kn*1.5,u=1+kn*1.2;if(De.domElement.style.filter=`hue-rotate(${v}deg) blur(${_}px) saturate(${u})`,kn>.6&&!zi){const d=se.fog,E=(kn-.6)/.4;d.color.lerpColors(d.color,my,E*.15),d.near=ud-E*20,d.far=Vr-E*30,ji=!0}g>=0&&g<3&&Math.random()<.3&&Ve.magic(I.position.x+(Math.random()-.5)*3,I.position.y+(Math.random()-.5)*2,I.position.z+(Math.random()-.5)*3,1)}else pd.style.opacity="0",De.domElement.style.filter="",ji&&(ji=!1);if(ac+=t,ac>ld&&I.onGround){const v=I.position.x-lc.x,_=I.position.z-lc.z;if(v*v+_*_>1.5){ac=0,lc.set(I.position.x,0,I.position.z);const d=Math.round(I.position.x),E=Math.round(I.position.y-1.9),M=Math.round(I.position.z),w=Pt.getBlockType(d,E,M);let O="dirt";w===3||w===11||w===17||w===18?O="stone":w===4||w===12||w===49?O="sand":w===5||w===10||w===16?O="wood":(w===1||w===6)&&(O="grass"),ld=((o=I.keys)==null?void 0:o.ControlLeft)?.25:.35,Vt.playStepOnBlock(.7,O)}}if(I.onGround&&!hd&&I.velocity.y<-.5&&Vt.playLanding(Math.min(Math.abs(I.velocity.y)/10,1)),hd=I.onGround,ic+=t,ic>1&&(ic=0,Pt.isNearBlock(Math.round(I.position.x),Math.round(I.position.y),Math.round(I.position.z),55,5)&&Ve.smoke(I.position.x,I.position.y+1,I.position.z,2)),Cr){let v=0;for(let q=0;q<po;q++)v+=cd[q];const _=po>0?v/po:0,d=(I.getYaw()*180/Math.PI+360)%360;let E="Unknown";d<45||d>=315?E="South (0°)":d<135?E="West (90°)":d<225?E="North (180°)":E="East (270°)";const M={0:"Plains",1:"Desert",2:"Forest",3:"Mountains",4:"Ocean",5:"Taiga",6:"Swamp"},w=Pt.getBiome(Math.round(I.position.x),Math.round(I.position.z)),O=M[w]??`Biome ${w}`,C=Math.round(I.position.y-1),L=Pt.getBlockType(Math.round(I.position.x),C,Math.round(I.position.z)),X=L!==void 0?Hn(L):"Air",b=Vi&&Vi.isRaining?"Rainy":"Clear",R=(Qt==null?void 0:Qt.getMobCount())??0,W=((a=Pt.getBlockCount)==null?void 0:a.call(Pt))??0;U.updateDebugScreen({fps:_,x:I.position.x,y:I.position.y,z:I.position.z,biome:O,blockBelow:X,facing:E,dayTime:We,mobCount:R,blockCount:W,weather:b,gameMode:I.gameMode,version:"0.8"})}}if(zr>0){zr-=t;const r=(Math.random()-.5)*2*Hr,c=(Math.random()-.5)*2*Hr;ze.position.x+=r,ze.position.y+=c}Pt&&Pt.flushDirtyMeshes(),De.render(se,ze),Vi.isThunderFlashing()&&De.setClearColor(xi)}xu();window.addEventListener("beforeunload",()=>{$n&&Pt.saveToStorage({inventory:[...le],invCount:[...de],px:I.position.x,py:I.position.y,pz:I.position.z,health:I.health,hunger:we,xp:xn,xpLevel:Ue,dayCount:Gn})});
