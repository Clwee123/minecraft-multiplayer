var xu=Object.defineProperty;var yu=(s,t,e)=>t in s?xu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>yu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="160",Mu=0,Qc=1,Eu=2,xd=1,Su=2,si=3,li=0,rn=1,qn=2,Ai=0,Ns=1,tl=2,el=3,nl=4,bu=5,Wi=100,Au=101,Tu=102,il=103,sl=104,wu=200,Cu=201,Ru=202,Pu=203,pc=204,mc=205,Lu=206,Iu=207,Du=208,Ou=209,Nu=210,Uu=211,Bu=212,ku=213,Fu=214,zu=0,Hu=1,Gu=2,Rr=3,Vu=4,Wu=5,Xu=6,Yu=7,Hc=0,qu=1,ju=2,ci=0,Zu=1,Ku=2,$u=3,Ju=4,Qu=5,tf=6,yd=300,ks=301,Fs=302,gc=303,_c=304,Gr=306,vc=1e3,Mn=1001,xc=1002,Ne=1003,ol=1004,ca=1005,wn=1006,ef=1007,_o=1008,Ti=1009,nf=1010,sf=1011,Gc=1012,Md=1013,Si=1014,bi=1015,vo=1016,Ed=1017,Sd=1018,Ki=1020,of=1021,Fn=1023,rf=1024,af=1025,$i=1026,zs=1027,cf=1028,bd=1029,lf=1030,Ad=1031,Td=1033,la=33776,ha=33777,da=33778,ua=33779,rl=35840,al=35841,cl=35842,ll=35843,wd=36196,hl=37492,dl=37496,ul=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,vl=37814,xl=37815,yl=37816,Ml=37817,El=37818,Sl=37819,bl=37820,Al=37821,fa=36492,Tl=36494,wl=36495,hf=36283,Cl=36284,Rl=36285,Pl=36286,Cd=3e3,Ji=3001,df=3200,uf=3201,Rd=0,ff=1,Cn="",$e="srgb",hi="srgb-linear",Vc="display-p3",Vr="display-p3-linear",Pr="linear",Le="srgb",Lr="rec709",Ir="p3",is=7680,Ll=519,pf=512,mf=513,gf=514,Pd=515,_f=516,vf=517,xf=518,yf=519,yc=35044,Mf=35048,Il="300 es",Mc=1035,ai=2e3,Dr=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,Ec=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function un(s,t,e){return Math.max(t,Math.min(e,s))}function Ef(s,t){return(s%t+t)%t}function pa(s,t,e){return(1-e)*s+e*t}function Dl(s){return(s&s-1)===0&&s!==0}function Sc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,o,a,r,c,l){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,l)}set(t,e,n,i,o,a,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],l=n[1],h=n[4],d=n[7],g=n[2],v=n[5],p=n[8],_=i[0],m=i[3],f=i[6],E=i[1],M=i[4],S=i[7],O=i[2],R=i[5],I=i[8];return o[0]=a*_+r*E+c*O,o[3]=a*m+r*M+c*R,o[6]=a*f+r*S+c*I,o[1]=l*_+h*E+d*O,o[4]=l*m+h*M+d*R,o[7]=l*f+h*S+d*I,o[2]=g*_+v*E+p*O,o[5]=g*m+v*M+p*R,o[8]=g*f+v*S+p*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*r*l-n*o*h+n*r*c+i*o*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=h*a-r*l,g=r*c-h*o,v=l*o-a*c,p=e*d+n*g+i*v;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(r*n-i*a)*_,t[3]=g*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-r*e)*_,t[6]=v*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*a+l*r)+a+t,-i*l,i*c,-i*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new oe;function Ld(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sf(){const s=Or("canvas");return s.style.display="block",s}const Ol={};function po(s){s in Ol||(Ol[s]=!0,console.warn(s))}const Nl=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ao={[hi]:{transfer:Pr,primaries:Lr,toReference:s=>s,fromReference:s=>s},[$e]:{transfer:Le,primaries:Lr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Vr]:{transfer:Pr,primaries:Ir,toReference:s=>s.applyMatrix3(Ul),fromReference:s=>s.applyMatrix3(Nl)},[Vc]:{transfer:Le,primaries:Ir,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ul),fromReference:s=>s.applyMatrix3(Nl).convertLinearToSRGB()}},bf=new Set([hi,Vr]),Ee={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ao[t].toReference,i=Ao[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ao[s].primaries},getTransfer:function(s){return s===Cn?Pr:Ao[s].transfer}};function Us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class Id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Or("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=Us(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Us(e[n]/255)*255):e[n]=Us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Af=0;class Dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(_a(i[a].image)):o.push(_a(i[a]))}else o=_a(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Id.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tf=0;class an extends Ys{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Mn,i=Mn,o=wn,a=_o,r=Fn,c=Ti,l=an.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=wi(),this.name="",this.source=new Dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?$e:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vc:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vc:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Ji:Cd}set encoding(t){po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ji?$e:Cn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=yd;an.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,i=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],d=c[8],g=c[1],v=c[5],p=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-g)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+g)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+v+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(v+1)/2,O=(f+1)/2,R=(h+g)/4,I=(d+_)/4,W=(p+m)/4;return M>S&&M>O?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=R/n,o=I/n):S>O?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=R/i,o=W/i):O<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(O),n=I/o,i=W/o),this.set(n,i,o,e),this}let E=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(g-h)*(g-h));return Math.abs(E)<.001&&(E=1),this.x=(m-p)/E,this.y=(d-_)/E,this.z=(g-h)/E,this.w=Math.acos((l+v+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?$e:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Od extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cf extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const g=o[a+0],v=o[a+1],p=o[a+2],_=o[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=g,t[e+1]=v,t[e+2]=p,t[e+3]=_;return}if(d!==_||c!==g||l!==v||h!==p){let m=1-r;const f=c*g+l*v+h*p+d*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const O=Math.sqrt(M),R=Math.atan2(O,f*E);m=Math.sin(m*R)/O,r=Math.sin(r*R)/O}const S=r*E;if(c=c*m+g*S,l=l*m+v*S,h=h*m+p*S,d=d*m+_*S,m===1-r){const O=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=O,l*=O,h*=O,d*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=o[a],g=o[a+1],v=o[a+2],p=o[a+3];return t[e]=r*p+h*d+c*v-l*g,t[e+1]=c*p+h*g+l*d-r*v,t[e+2]=l*p+h*v+r*g-c*d,t[e+3]=h*p-r*d-c*g-l*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),d=r(o/2),g=c(n/2),v=c(i/2),p=c(o/2);switch(a){case"XYZ":this._x=g*h*d+l*v*p,this._y=l*v*d-g*h*p,this._z=l*h*p+g*v*d,this._w=l*h*d-g*v*p;break;case"YXZ":this._x=g*h*d+l*v*p,this._y=l*v*d-g*h*p,this._z=l*h*p-g*v*d,this._w=l*h*d+g*v*p;break;case"ZXY":this._x=g*h*d-l*v*p,this._y=l*v*d+g*h*p,this._z=l*h*p+g*v*d,this._w=l*h*d-g*v*p;break;case"ZYX":this._x=g*h*d-l*v*p,this._y=l*v*d+g*h*p,this._z=l*h*p-g*v*d,this._w=l*h*d+g*v*p;break;case"YZX":this._x=g*h*d+l*v*p,this._y=l*v*d+g*h*p,this._z=l*h*p-g*v*d,this._w=l*h*d-g*v*p;break;case"XZY":this._x=g*h*d-l*v*p,this._y=l*v*d-g*h*p,this._z=l*h*p+g*v*d,this._w=l*h*d+g*v*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],l=e[2],h=e[6],d=e[10],g=n+r+d;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(h-c)*v,this._y=(o-l)*v,this._z=(a-i)*v}else if(n>r&&n>d){const v=2*Math.sqrt(1+n-r-d);this._w=(h-c)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(o+l)/v}else if(r>d){const v=2*Math.sqrt(1+r-n-d);this._w=(o-l)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(c+h)/v}else{const v=2*Math.sqrt(1+d-n-r);this._w=(a-i)/v,this._x=(o+l)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*r+i*l-o*c,this._y=i*h+a*c+o*r-n*l,this._z=o*h+a*l+n*c-i*r,this._w=a*h-n*r-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const v=1-e;return this._w=v*a+e*this._w,this._x=v*n+e*this._x,this._y=v*i+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,g=Math.sin(e*h)/l;return this._w=a*d+this._w*g,this._x=n*d+this._x*g,this._y=i*d+this._y*g,this._z=o*d+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,l=2*(a*i-r*n),h=2*(r*e-o*i),d=2*(o*n-a*e);return this.x=e+c*l+a*d-r*h,this.y=n+c*h+r*l-o*d,this.z=i+c*d+o*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new U,Bl=new yo;class es{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(o,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),wo.subVectors(this.max,Zs),os.subVectors(t.a,Zs),rs.subVectors(t.b,Zs),as.subVectors(t.c,Zs),fi.subVectors(rs,os),pi.subVectors(as,rs),Ii.subVectors(os,as);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!xa(e,os,rs,as,wo)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,os,rs,as,wo))?!1:(Co.crossVectors(fi,pi),e=[Co.x,Co.y,Co.z],xa(e,os,rs,as,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,To=new es,os=new U,rs=new U,as=new U,fi=new U,pi=new U,Ii=new U,Zs=new U,wo=new U,Co=new U,Di=new U;function xa(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Di.fromArray(s,o);const r=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Rf=new es,Ks=new U,ya=new U;class ns{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(ya)),this.expandByPoint(Ks.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new U,Ma=new U,Ro=new U,mi=new U,Ea=new U,Po=new U,Sa=new U;class Wr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ma.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Ma);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Ro),r=mi.dot(this.direction),c=-mi.dot(Ro),l=mi.lengthSq(),h=Math.abs(1-a*a);let d,g,v,p;if(h>0)if(d=a*c-r,g=a*r-c,p=o*h,d>=0)if(g>=-p)if(g<=p){const _=1/h;d*=_,g*=_,v=d*(d+a*g+2*r)+g*(a*d+g+2*c)+l}else g=o,d=Math.max(0,-(a*g+r)),v=-d*d+g*(g+2*c)+l;else g=-o,d=Math.max(0,-(a*g+r)),v=-d*d+g*(g+2*c)+l;else g<=-p?(d=Math.max(0,-(-a*o+r)),g=d>0?-o:Math.min(Math.max(-o,-c),o),v=-d*d+g*(g+2*c)+l):g<=p?(d=0,g=Math.min(Math.max(-o,-c),o),v=g*(g+2*c)+l):(d=Math.max(0,-(a*o+r)),g=d>0?o:Math.min(Math.max(-o,-c),o),v=-d*d+g*(g+2*c)+l);else g=a>0?-o:o,d=Math.max(0,-(a*g+r)),v=-d*d+g*(g+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ma).addScaledVector(Ro,g),v}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,g=this.origin;return l>=0?(n=(t.min.x-g.x)*l,i=(t.max.x-g.x)*l):(n=(t.max.x-g.x)*l,i=(t.min.x-g.x)*l),h>=0?(o=(t.min.y-g.y)*h,a=(t.max.y-g.y)*h):(o=(t.max.y-g.y)*h,a=(t.min.y-g.y)*h),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),d>=0?(r=(t.min.z-g.z)*d,c=(t.max.z-g.z)*d):(r=(t.max.z-g.z)*d,c=(t.min.z-g.z)*d),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,o){Ea.subVectors(e,t),Po.subVectors(n,t),Sa.crossVectors(Ea,Po);let a=this.direction.dot(Sa),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;mi.subVectors(this.origin,t);const c=r*this.direction.dot(Po.crossVectors(mi,Po));if(c<0)return null;const l=r*this.direction.dot(Ea.cross(mi));if(l<0||c+l>a)return null;const h=-r*mi.dot(Sa);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,o,a,r,c,l,h,d,g,v,p,_,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,l,h,d,g,v,p,_,m)}set(t,e,n,i,o,a,r,c,l,h,d,g,v,p,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=o,f[5]=a,f[9]=r,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=g,f[3]=v,f[7]=p,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),o=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const g=a*h,v=a*d,p=r*h,_=r*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=v+p*l,e[5]=g-_*l,e[9]=-r*c,e[2]=_-g*l,e[6]=p+v*l,e[10]=a*c}else if(t.order==="YXZ"){const g=c*h,v=c*d,p=l*h,_=l*d;e[0]=g+_*r,e[4]=p*r-v,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=v*r-p,e[6]=_+g*r,e[10]=a*c}else if(t.order==="ZXY"){const g=c*h,v=c*d,p=l*h,_=l*d;e[0]=g-_*r,e[4]=-a*d,e[8]=p+v*r,e[1]=v+p*r,e[5]=a*h,e[9]=_-g*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const g=a*h,v=a*d,p=r*h,_=r*d;e[0]=c*h,e[4]=p*l-v,e[8]=g*l+_,e[1]=c*d,e[5]=_*l+g,e[9]=v*l-p,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const g=a*c,v=a*l,p=r*c,_=r*l;e[0]=c*h,e[4]=_-g*d,e[8]=p*d+v,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-l*h,e[6]=v*d+p,e[10]=g-_*d}else if(t.order==="XZY"){const g=a*c,v=a*l,p=r*c,_=r*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=g*d+_,e[5]=a*h,e[9]=v*d-p,e[2]=p*d-v,e[6]=r*h,e[10]=_*d+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pf,t,Lf)}lookAt(t,e,n){const i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),Lo.crossVectors(mn,gi),i[0]=gi.x,i[4]=Lo.x,i[8]=mn.x,i[1]=gi.y,i[5]=Lo.y,i[9]=mn.y,i[2]=gi.z,i[6]=Lo.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],l=n[12],h=n[1],d=n[5],g=n[9],v=n[13],p=n[2],_=n[6],m=n[10],f=n[14],E=n[3],M=n[7],S=n[11],O=n[15],R=i[0],I=i[4],W=i[8],b=i[12],P=i[1],X=i[5],K=i[9],ot=i[13],F=i[2],Y=i[6],J=i[10],Q=i[14],nt=i[3],it=i[7],st=i[11],ut=i[15];return o[0]=a*R+r*P+c*F+l*nt,o[4]=a*I+r*X+c*Y+l*it,o[8]=a*W+r*K+c*J+l*st,o[12]=a*b+r*ot+c*Q+l*ut,o[1]=h*R+d*P+g*F+v*nt,o[5]=h*I+d*X+g*Y+v*it,o[9]=h*W+d*K+g*J+v*st,o[13]=h*b+d*ot+g*Q+v*ut,o[2]=p*R+_*P+m*F+f*nt,o[6]=p*I+_*X+m*Y+f*it,o[10]=p*W+_*K+m*J+f*st,o[14]=p*b+_*ot+m*Q+f*ut,o[3]=E*R+M*P+S*F+O*nt,o[7]=E*I+M*X+S*Y+O*it,o[11]=E*W+M*K+S*J+O*st,o[15]=E*b+M*ot+S*Q+O*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],l=t[13],h=t[2],d=t[6],g=t[10],v=t[14],p=t[3],_=t[7],m=t[11],f=t[15];return p*(+o*c*d-i*l*d-o*r*g+n*l*g+i*r*v-n*c*v)+_*(+e*c*v-e*l*g+o*a*g-i*a*v+i*l*h-o*c*h)+m*(+e*l*d-e*r*v-o*a*d+n*a*v+o*r*h-n*l*h)+f*(-i*r*h-e*c*d+e*r*g+i*a*d-n*a*g+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=t[9],g=t[10],v=t[11],p=t[12],_=t[13],m=t[14],f=t[15],E=d*m*l-_*g*l+_*c*v-r*m*v-d*c*f+r*g*f,M=p*g*l-h*m*l-p*c*v+a*m*v+h*c*f-a*g*f,S=h*_*l-p*d*l+p*r*v-a*_*v-h*r*f+a*d*f,O=p*d*c-h*_*c-p*r*g+a*_*g+h*r*m-a*d*m,R=e*E+n*M+i*S+o*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=E*I,t[1]=(_*g*o-d*m*o-_*i*v+n*m*v+d*i*f-n*g*f)*I,t[2]=(r*m*o-_*c*o+_*i*l-n*m*l-r*i*f+n*c*f)*I,t[3]=(d*c*o-r*g*o-d*i*l+n*g*l+r*i*v-n*c*v)*I,t[4]=M*I,t[5]=(h*m*o-p*g*o+p*i*v-e*m*v-h*i*f+e*g*f)*I,t[6]=(p*c*o-a*m*o-p*i*l+e*m*l+a*i*f-e*c*f)*I,t[7]=(a*g*o-h*c*o+h*i*l-e*g*l-a*i*v+e*c*v)*I,t[8]=S*I,t[9]=(p*d*o-h*_*o-p*n*v+e*_*v+h*n*f-e*d*f)*I,t[10]=(a*_*o-p*r*o+p*n*l-e*_*l-a*n*f+e*r*f)*I,t[11]=(h*r*o-a*d*o-h*n*l+e*d*l+a*n*v-e*r*v)*I,t[12]=O*I,t[13]=(h*_*i-p*d*i+p*n*g-e*_*g-h*n*m+e*d*m)*I,t[14]=(p*r*i-a*_*i-p*n*c+e*_*c+a*n*m-e*r*m)*I,t[15]=(a*d*i-h*r*i+h*n*c-e*d*c-a*n*g+e*r*g)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,l=o*a,h=o*r;return this.set(l*a+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*a,0,l*c-i*r,h*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,l=o+o,h=a+a,d=r+r,g=o*l,v=o*h,p=o*d,_=a*h,m=a*d,f=r*d,E=c*l,M=c*h,S=c*d,O=n.x,R=n.y,I=n.z;return i[0]=(1-(_+f))*O,i[1]=(v+S)*O,i[2]=(p-M)*O,i[3]=0,i[4]=(v-S)*R,i[5]=(1-(g+f))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(p+M)*I,i[9]=(m-E)*I,i[10]=(1-(g+_))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=cs.set(i[0],i[1],i[2]).length();const a=cs.set(i[4],i[5],i[6]).length(),r=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const l=1/o,h=1/a,d=1/r;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=ai){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),g=(n+i)/(n-i);let v,p;if(r===ai)v=-(a+o)/(a-o),p=-2*a*o/(a-o);else if(r===Dr)v=-a/(a-o),p=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=ai){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-o),g=(e+t)*l,v=(n+i)*h;let p,_;if(r===ai)p=(a+o)*d,_=-2*d;else if(r===Dr)p=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new U,Dn=new Te,Pf=new U(0,0,0),Lf=new U(1,1,1),gi=new U,Lo=new U,mn=new U,kl=new Te,Fl=new yo;class Xr{constructor(t=0,e=0,n=0,i=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],l=i[5],h=i[9],d=i[2],g=i[6],v=i[10];switch(e){case"XYZ":this._y=Math.asin(un(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,v),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(r,v));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let If=0;const zl=new U,ls=new yo,Jn=new Te,Io=new U,$s=new U,Df=new U,Of=new yo,Hl=new U(1,0,0),Gl=new U(0,1,0),Vl=new U(0,0,1),Nf={type:"added"},Uf={type:"removed"};class Xe extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new U,e=new Xr,n=new yo,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new oe}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,Io,this.up):Jn.lookAt(Io,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(Jn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),g=a(t.skeletons),v=a(t.animations),p=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new U,Qn=new U,ba=new U,ti=new U,hs=new U,ds=new U,Wl=new U,Aa=new U,Ta=new U,wa=new U;let Do=!1;class xn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){On.subVectors(i,e),Qn.subVectors(n,e),ba.subVectors(t,e);const a=On.dot(On),r=On.dot(Qn),c=On.dot(ba),l=Qn.dot(Qn),h=Qn.dot(ba),d=a*l-r*r;if(d===0)return o.set(0,0,0),null;const g=1/d,v=(l*c-r*h)*g,p=(a*h-r*c)*g;return o.set(1-v-p,p,v)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(t,e,n,i,o,a,r,c){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(r,ti.z),c)}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),Qn.subVectors(t,e),On.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),On.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;hs.subVectors(i,n),ds.subVectors(o,n),Aa.subVectors(t,n);const c=hs.dot(Aa),l=ds.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ta.subVectors(t,i);const h=hs.dot(Ta),d=ds.dot(Ta);if(h>=0&&d<=h)return e.copy(i);const g=c*d-h*l;if(g<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(hs,a);wa.subVectors(t,o);const v=hs.dot(wa),p=ds.dot(wa);if(p>=0&&v<=p)return e.copy(o);const _=v*l-c*p;if(_<=0&&l>=0&&p<=0)return r=l/(l-p),e.copy(n).addScaledVector(ds,r);const m=h*p-v*d;if(m<=0&&d-h>=0&&v-p>=0)return Wl.subVectors(o,i),r=(d-h)/(d-h+(v-p)),e.copy(i).addScaledVector(Wl,r);const f=1/(m+_+g);return a=_*f,r=g*f,e.copy(n).addScaledVector(hs,a).addScaledVector(ds,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=Ef(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Ca(a,o,t+1/3),this.g=Ca(a,o,t),this.b=Ca(a,o,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Ee.fromWorkingColorSpace(tn.copy(this),t),Math.round(un(tn.r*255,0,255))*65536+Math.round(un(tn.g*255,0,255))*256+Math.round(un(tn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,o=tn.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,l;const h=(r+a)/2;if(r===a)c=0,l=0;else{const d=a-r;switch(l=h<=.5?d/(a+r):d/(2-a-r),a){case n:c=(i-o)/d+(i<o?6:0);break;case i:c=(o-n)/d+2;break;case o:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=$e){Ee.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Oo);const n=pa(_i.h,Oo.h,e),i=pa(_i.s,Oo.s,e),o=pa(_i.l,Oo.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new yt;yt.NAMES=Nd;let Bf=0;class Pi extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ns,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class di extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new U,No=new te;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),o=be(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class Ud extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bd extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class En extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const bn=new Te,Ra=new Xe,us=new U,gn=new es,Js=new es,Ze=new U;class pn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?Bd:Ud)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new En(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Js.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(gn.min,Js.min),gn.expandByPoint(Ze),Ze.addVectors(gn.max,Js.max),gn.expandByPoint(Ze)):(gn.expandByPoint(Js.min),gn.expandByPoint(Js.max))}gn.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)Ze.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Ze.fromBufferAttribute(r,l),c&&(us.fromBufferAttribute(t,l),Ze.add(us)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<r;P++)l[P]=new U,h[P]=new U;const d=new U,g=new U,v=new U,p=new te,_=new te,m=new te,f=new U,E=new U;function M(P,X,K){d.fromArray(i,P*3),g.fromArray(i,X*3),v.fromArray(i,K*3),p.fromArray(a,P*2),_.fromArray(a,X*2),m.fromArray(a,K*2),g.sub(d),v.sub(d),_.sub(p),m.sub(p);const ot=1/(_.x*m.y-m.x*_.y);isFinite(ot)&&(f.copy(g).multiplyScalar(m.y).addScaledVector(v,-_.y).multiplyScalar(ot),E.copy(v).multiplyScalar(_.x).addScaledVector(g,-m.x).multiplyScalar(ot),l[P].add(f),l[X].add(f),l[K].add(f),h[P].add(E),h[X].add(E),h[K].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,X=S.length;P<X;++P){const K=S[P],ot=K.start,F=K.count;for(let Y=ot,J=ot+F;Y<J;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const O=new U,R=new U,I=new U,W=new U;function b(P){I.fromArray(o,P*3),W.copy(I);const X=l[P];O.copy(X),O.sub(I.multiplyScalar(I.dot(X))).normalize(),R.crossVectors(W,X);const ot=R.dot(h[P])<0?-1:1;c[P*4]=O.x,c[P*4+1]=O.y,c[P*4+2]=O.z,c[P*4+3]=ot}for(let P=0,X=S.length;P<X;++P){const K=S[P],ot=K.start,F=K.count;for(let Y=ot,J=ot+F;Y<J;Y+=3)b(n[Y+0]),b(n[Y+1]),b(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new U,o=new U,a=new U,r=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let g=0,v=t.count;g<v;g+=3){const p=t.getX(g+0),_=t.getX(g+1),m=t.getX(g+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,o),d.subVectors(i,o),h.cross(d),r.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),r.add(h),c.add(h),l.add(h),n.setXYZ(p,r.x,r.y,r.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let g=0,v=e.count;g<v;g+=3)i.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),h.subVectors(a,o),d.subVectors(i,o),h.cross(d),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,d=r.normalized,g=new l.constructor(c.length*h);let v=0,p=0;for(let _=0,m=c.length;_<m;_++){r.isInterleavedBufferAttribute?v=c[_]*r.data.stride+r.offset:v=c[_]*h;for(let f=0;f<h;f++)g[p++]=l[v++]}return new fn(g,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const o=this.morphAttributes;for(const r in o){const c=[],l=o[r];for(let h=0,d=l.length;h<d;h++){const g=l[h],v=t(g,n);c.push(v)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,g=l.length;d<g;d++){const v=l[d];h.push(v.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],d=o[l];for(let g=0,v=d.length;g<v;g++)h.push(d[g].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new Te,Oi=new Wr,Uo=new ns,Yl=new U,fs=new U,ps=new U,ms=new U,Pa=new U,Bo=new U,ko=new te,Fo=new te,zo=new te,ql=new U,jl=new U,Zl=new U,Ho=new U,Go=new U;class Qt extends Xe{constructor(t=new pn,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){Bo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=r[c],d=o[c];h!==0&&(Pa.fromBufferAttribute(d,t),a?Bo.addScaledVector(Pa,h):Bo.addScaledVector(Pa.sub(e),h))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(o),Oi.copy(t.ray).recast(t.near),!(Uo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Uo,Yl)===null||Oi.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(Xl.copy(o).invert(),Oi.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,g=o.groups,v=o.drawRange;if(r!==null)if(Array.isArray(a))for(let p=0,_=g.length;p<_;p++){const m=g[p],f=a[m.materialIndex],E=Math.max(m.start,v.start),M=Math.min(r.count,Math.min(m.start+m.count,v.start+v.count));for(let S=E,O=M;S<O;S+=3){const R=r.getX(S),I=r.getX(S+1),W=r.getX(S+2);i=Vo(this,f,t,n,l,h,d,R,I,W),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,v.start),_=Math.min(r.count,v.start+v.count);for(let m=p,f=_;m<f;m+=3){const E=r.getX(m),M=r.getX(m+1),S=r.getX(m+2);i=Vo(this,a,t,n,l,h,d,E,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=g.length;p<_;p++){const m=g[p],f=a[m.materialIndex],E=Math.max(m.start,v.start),M=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let S=E,O=M;S<O;S+=3){const R=S,I=S+1,W=S+2;i=Vo(this,f,t,n,l,h,d,R,I,W),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,v.start),_=Math.min(c.count,v.start+v.count);for(let m=p,f=_;m<f;m+=3){const E=m,M=m+1,S=m+2;i=Vo(this,a,t,n,l,h,d,E,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ff(s,t,e,n,i,o,a,r){let c;if(t.side===rn?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===li,r),c===null)return null;Go.copy(r),Go.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Go);return l<e.near||l>e.far?null:{distance:l,point:Go.clone(),object:s}}function Vo(s,t,e,n,i,o,a,r,c,l){s.getVertexPosition(r,fs),s.getVertexPosition(c,ps),s.getVertexPosition(l,ms);const h=Ff(s,t,e,n,fs,ps,ms,Ho);if(h){i&&(ko.fromBufferAttribute(i,r),Fo.fromBufferAttribute(i,c),zo.fromBufferAttribute(i,l),h.uv=xn.getInterpolation(Ho,fs,ps,ms,ko,Fo,zo,new te)),o&&(ko.fromBufferAttribute(o,r),Fo.fromBufferAttribute(o,c),zo.fromBufferAttribute(o,l),h.uv1=xn.getInterpolation(Ho,fs,ps,ms,ko,Fo,zo,new te),h.uv2=h.uv1),a&&(ql.fromBufferAttribute(a,r),jl.fromBufferAttribute(a,c),Zl.fromBufferAttribute(a,l),h.normal=xn.getInterpolation(Ho,fs,ps,ms,ql,jl,Zl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:c,c:l,normal:new U,materialIndex:0};xn.getNormal(fs,ps,ms,d.normal),h.face=d}return h}class Ce extends pn{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],l=[],h=[],d=[];let g=0,v=0;p("z","y","x",-1,-1,n,e,t,a,o,0),p("z","y","x",1,-1,n,e,-t,a,o,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(d,2));function p(_,m,f,E,M,S,O,R,I,W,b){const P=S/I,X=O/W,K=S/2,ot=O/2,F=R/2,Y=I+1,J=W+1;let Q=0,nt=0;const it=new U;for(let st=0;st<J;st++){const ut=st*X-ot;for(let pt=0;pt<Y;pt++){const $=pt*P-K;it[_]=$*E,it[m]=ut*M,it[f]=F,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[f]=R>0?1:-1,h.push(it.x,it.y,it.z),d.push(pt/I),d.push(1-st/W),Q+=1}}for(let st=0;st<W;st++)for(let ut=0;ut<I;ut++){const pt=g+ut+Y*st,$=g+ut+Y*(st+1),at=g+(ut+1)+Y*(st+1),Et=g+(ut+1)+Y*st;c.push(pt,$,Et),c.push($,at,Et),nt+=6}r.addGroup(v,nt,b),v+=nt,g+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=Hs(s[e]);for(const i in n)t[i]=n[i]}return t}function zf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kd(s){return s.getRenderTarget()===null?s.outputColorSpace:Ee.workingColorSpace}const Hf={clone:Hs,merge:sn};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fd extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends Fd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class Wf extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(gs,_s,t,e);i.layers=this.layers,this.add(i);const o=new yn(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new yn(gs,_s,t,e);a.layers=this.layers,this.add(a);const r=new yn(gs,_s,t,e);r.layers=this.layers,this.add(r);const c=new yn(gs,_s,t,e);c.layers=this.layers,this.add(c);const l=new yn(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,l,h]=this.children,d=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,g,v),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zd extends an{constructor(t,e,n,i,o,a,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,i,o,a,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xf extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ji?$e:Cn),this.texture=new zd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),o=new Ri({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ai});o.uniforms.tEquirect.value=e;const a=new Qt(i,o),r=e.minFilter;return e.minFilter===_o&&(e.minFilter=wn),new Wf(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const La=new U,Yf=new U,qf=new oe;class zi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=La.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qf.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ns,Wo=new U;class Xc{constructor(t=new zi,e=new zi,n=new zi,i=new zi,o=new zi,a=new zi){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],l=i[4],h=i[5],d=i[6],g=i[7],v=i[8],p=i[9],_=i[10],m=i[11],f=i[12],E=i[13],M=i[14],S=i[15];if(n[0].setComponents(c-o,g-l,m-v,S-f).normalize(),n[1].setComponents(c+o,g+l,m+v,S+f).normalize(),n[2].setComponents(c+a,g+h,m+p,S+E).normalize(),n[3].setComponents(c-a,g-h,m-p,S-E).normalize(),n[4].setComponents(c-r,g-d,m-_,S-M).normalize(),e===ai)n[5].setComponents(c+r,g+d,m+_,S+M).normalize();else if(e===Dr)n[5].setComponents(r,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wo.x=i.normal.x>0?t.max.x:t.min.x,Wo.y=i.normal.y>0?t.max.y:t.min.y,Wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function jf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,g=l.usage,v=d.byteLength,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,d,g),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:v}}function o(l,h,d){const g=h.array,v=h._updateRange,p=h.updateRanges;if(s.bindBuffer(d,l),v.count===-1&&p.length===0&&s.bufferSubData(d,0,g),p.length!==0){for(let _=0,m=p.length;_<m;_++){const f=p[_];e?s.bufferSubData(d,f.start*g.BYTES_PER_ELEMENT,g,f.start,f.count):s.bufferSubData(d,f.start*g.BYTES_PER_ELEMENT,g.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}v.count!==-1&&(e?s.bufferSubData(d,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count):s.bufferSubData(d,v.offset*g.BYTES_PER_ELEMENT,g.subarray(v.offset,v.offset+v.count)),v.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const g=n.get(l);(!g||g.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,l,h),d.version=l.version}}return{get:a,remove:r,update:c}}class Yr extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,d=t/r,g=e/c,v=[],p=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*g-a;for(let M=0;M<l;M++){const S=M*d-o;p.push(S,-E,0),_.push(0,0,1),m.push(M/r),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<r;E++){const M=E+l*f,S=E+l*(f+1),O=E+1+l*(f+1),R=E+1+l*f;v.push(M,S,R),v.push(S,O,R)}this.setIndex(v),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`
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
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,M0=`#define TOON
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
}`,E0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,A0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Zf,alphahash_pars_fragment:Kf,alphamap_fragment:$f,alphamap_pars_fragment:Jf,alphatest_fragment:Qf,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:op,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:cp,bumpmap_pars_fragment:lp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:up,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Ep,emissivemap_fragment:Sp,emissivemap_pars_fragment:bp,colorspace_fragment:Ap,colorspace_pars_fragment:Tp,envmap_fragment:wp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Ip,fog_pars_vertex:Dp,fog_fragment:Op,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:zp,lights_pars_begin:Hp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:qp,lights_physical_pars_fragment:jp,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:$p,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:om,metalnessmap_fragment:rm,metalnessmap_pars_fragment:am,morphcolor_vertex:cm,morphnormal_vertex:lm,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:um,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Mm,opaque_fragment:Em,packing:Sm,premultiplied_alpha_fragment:bm,project_vertex:Am,dithering_fragment:Tm,dithering_pars_fragment:wm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Im,shadowmask_pars_fragment:Dm,skinbase_vertex:Om,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Bm,specularmap_fragment:km,specularmap_pars_fragment:Fm,tonemapping_fragment:zm,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:Ym,worldpos_vertex:qm,background_vert:jm,background_frag:Zm,backgroundCube_vert:Km,backgroundCube_frag:$m,cube_vert:Jm,cube_frag:Qm,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:o0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:c0,meshbasic_frag:l0,meshlambert_vert:h0,meshlambert_frag:d0,meshmatcap_vert:u0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:_0,meshphysical_vert:v0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:M0,points_vert:E0,points_frag:S0,shadow_vert:b0,shadow_frag:A0,sprite_vert:T0,sprite_frag:w0},_t={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Yn={basic:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([_t.points,_t.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([_t.common,_t.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([_t.sprite,_t.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:sn([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:sn([_t.lights,_t.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Yn.physical={uniforms:sn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Xo={r:0,b:0,g:0};function C0(s,t,e,n,i,o,a){const r=new yt(0);let c=o===!0?0:1,l,h,d=null,g=0,v=null;function p(m,f){let E=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?e:t).get(M)),M===null?_(r,c):M&&M.isColor&&(_(M,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Gr)?(h===void 0&&(h=new Qt(new Ce(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Hs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,(d!==M||g!==M.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,g=M.version,v=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qt(new Yr(2,2),new Ri({name:"BackgroundMaterial",uniforms:Hs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||g!==M.version||v!==s.toneMapping)&&(l.material.needsUpdate=!0,d=M,g=M.version,v=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Xo,kd(s)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,f,a)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),c=f,_(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(r,c)},render:p}}function R0(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=m(null);let l=c,h=!1;function d(F,Y,J,Q,nt){let it=!1;if(a){const st=_(Q,J,Y);l!==st&&(l=st,v(l.object)),it=f(F,Q,J,nt),it&&E(F,Q,J,nt)}else{const st=Y.wireframe===!0;(l.geometry!==Q.id||l.program!==J.id||l.wireframe!==st)&&(l.geometry=Q.id,l.program=J.id,l.wireframe=st,it=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,W(F,Y,J,Q),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function g(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function v(F){return n.isWebGL2?s.bindVertexArray(F):o.bindVertexArrayOES(F)}function p(F){return n.isWebGL2?s.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function _(F,Y,J){const Q=J.wireframe===!0;let nt=r[F.id];nt===void 0&&(nt={},r[F.id]=nt);let it=nt[Y.id];it===void 0&&(it={},nt[Y.id]=it);let st=it[Q];return st===void 0&&(st=m(g()),it[Q]=st),st}function m(F){const Y=[],J=[],Q=[];for(let nt=0;nt<i;nt++)Y[nt]=0,J[nt]=0,Q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:Q,object:F,attributes:{},index:null}}function f(F,Y,J,Q){const nt=l.attributes,it=Y.attributes;let st=0;const ut=J.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=nt[pt];let Et=it[pt];if(Et===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;st++}return l.attributesNum!==st||l.index!==Q}function E(F,Y,J,Q){const nt={},it=Y.attributes;let st=0;const ut=J.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=it[pt];at===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));const Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),nt[pt]=Et,st++}l.attributes=nt,l.attributesNum=st,l.index=Q}function M(){const F=l.newAttributes;for(let Y=0,J=F.length;Y<J;Y++)F[Y]=0}function S(F){O(F,0)}function O(F,Y){const J=l.newAttributes,Q=l.enabledAttributes,nt=l.attributeDivisors;J[F]=1,Q[F]===0&&(s.enableVertexAttribArray(F),Q[F]=1),nt[F]!==Y&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),nt[F]=Y)}function R(){const F=l.newAttributes,Y=l.enabledAttributes;for(let J=0,Q=Y.length;J<Q;J++)Y[J]!==F[J]&&(s.disableVertexAttribArray(J),Y[J]=0)}function I(F,Y,J,Q,nt,it,st){st===!0?s.vertexAttribIPointer(F,Y,J,nt,it):s.vertexAttribPointer(F,Y,J,Q,nt,it)}function W(F,Y,J,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const nt=Q.attributes,it=J.getAttributes(),st=Y.defaultAttributeValues;for(const ut in it){const pt=it[ut];if(pt.location>=0){let $=nt[ut];if($===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){const at=$.normalized,Et=$.itemSize,wt=e.get($);if(wt===void 0)continue;const Dt=wt.buffer,Wt=wt.type,Xt=wt.bytesPerElement,Ft=n.isWebGL2===!0&&(Wt===s.INT||Wt===s.UNSIGNED_INT||$.gpuType===Md);if($.isInterleavedBufferAttribute){const le=$.data,j=le.stride,_e=$.offset;if(le.isInstancedInterleavedBuffer){for(let Bt=0;Bt<pt.locationSize;Bt++)O(pt.location+Bt,le.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Bt=0;Bt<pt.locationSize;Bt++)S(pt.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let Bt=0;Bt<pt.locationSize;Bt++)I(pt.location+Bt,Et/pt.locationSize,Wt,at,j*Xt,(_e+Et/pt.locationSize*Bt)*Xt,Ft)}else{if($.isInstancedBufferAttribute){for(let le=0;le<pt.locationSize;le++)O(pt.location+le,$.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<pt.locationSize;le++)S(pt.location+le);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let le=0;le<pt.locationSize;le++)I(pt.location+le,Et/pt.locationSize,Wt,at,Et*Xt,Et/pt.locationSize*le*Xt,Ft)}}else if(st!==void 0){const at=st[ut];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(pt.location,at);break;case 3:s.vertexAttrib3fv(pt.location,at);break;case 4:s.vertexAttrib4fv(pt.location,at);break;default:s.vertexAttrib1fv(pt.location,at)}}}}R()}function b(){K();for(const F in r){const Y=r[F];for(const J in Y){const Q=Y[J];for(const nt in Q)p(Q[nt].object),delete Q[nt];delete Y[J]}delete r[F]}}function P(F){if(r[F.id]===void 0)return;const Y=r[F.id];for(const J in Y){const Q=Y[J];for(const nt in Q)p(Q[nt].object),delete Q[nt];delete Y[J]}delete r[F.id]}function X(F){for(const Y in r){const J=r[Y];if(J[F.id]===void 0)continue;const Q=J[F.id];for(const nt in Q)p(Q[nt].object),delete Q[nt];delete J[F.id]}}function K(){ot(),h=!0,l!==c&&(l=c,v(l.object))}function ot(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ot,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function P0(s,t,e,n){const i=n.isWebGL2;let o;function a(h){o=h}function r(h,d){s.drawArrays(o,h,d),e.update(d,o,1)}function c(h,d,g){if(g===0)return;let v,p;if(i)v=s,p="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](o,h,d,g),e.update(d,o,g)}function l(h,d,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(h[p],d[p]);else{v.multiDrawArraysWEBGL(o,h,0,d,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_];e.update(p,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function L0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,S=a||t.has("OES_texture_float"),O=M&&S,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:O,maxSamples:R}}function I0(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new zi,r=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,g){const v=d.length!==0||g||n!==0||i;return i=g,n=d.length,v},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,g){e=h(d,g,0)},this.setState=function(d,g,v){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||p===null||p.length===0||o&&!m)o?h(null):l();else{const E=o?0:n,M=E*4;let S=f.clippingState||null;c.value=S,S=h(p,g,M,v);for(let O=0;O!==M;++O)S[O]=e[O];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,g,v,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const f=v+_*4,E=g.matrixWorldInverse;r.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=v;M!==_;++M,S+=4)a.copy(d[M]).applyMatrix4(E,r),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function D0(s){let t=new WeakMap;function e(a,r){return r===gc?a.mapping=ks:r===_c&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===gc||r===_c)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Xf(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Gd extends Fd{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,a=o+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,Kl=[.125,.215,.35,.446,.526,.582],Xi=20,Ia=new Gd,$l=new yt;let Da=null,Oa=0,Na=0;const Hi=(1+Math.sqrt(5))/2,vs=1/Hi,Jl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Hi,vs),new U(0,Hi,-vs),new U(vs,0,Hi),new U(-vs,0,Hi),new U(Hi,vs,0),new U(-Hi,vs,0)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Oa,Na),t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:vo,format:Fn,colorSpace:hi,depthBuffer:!1},i=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(o)),this._blurMaterial=N0(o,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,i){const r=new yn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor($l),h.toneMapping=ci,h.autoClear=!1;const v=new di({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),p=new Qt(new Ce,v);let _=!1;const m=t.background;m?m.isColor&&(v.color.copy(m),t.background=null,_=!0):(v.color.copy($l),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(r.up.set(0,c[f],0),r.lookAt(l[f],0,0)):E===1?(r.up.set(0,0,c[f]),r.lookAt(0,l[f],0)):(r.up.set(0,c[f],0),r.lookAt(0,0,l[f]));const M=this._cubeSize;Yo(i,E*M,f>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(p,r),h.render(t,r)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=g,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ks||t.mapping===Fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;Yo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Jl[(i-1)%Jl.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[i],l),g=l.uniforms,v=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Xi-1),_=o/p,m=isFinite(o)?1+Math.floor(h*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const f=[];let E=0;for(let I=0;I<Xi;++I){const W=I/_,b=Math.exp(-W*W/2);f.push(b),I===0?E+=b:I<m&&(E+=2*b)}for(let I=0;I<f.length;I++)f[I]=f[I]/E;g.envMap.value=t.texture,g.samples.value=m,g.weights.value=f,g.latitudinal.value=a==="latitudinal",r&&(g.poleAxis.value=r);const{_lodMax:M}=this;g.dTheta.value=p,g.mipInt.value=M-n;const S=this._sizeLods[i],O=3*S*(i>M-Ls?i-M+Ls:0),R=4*(this._cubeSize-S);Yo(e,O,R,3*S,2*S),c.setRenderTarget(e),c.render(d,Ia)}}function O0(s){const t=[],e=[],n=[];let i=s;const o=s-Ls+1+Kl.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-Ls?c=Kl[a-s+Ls-1]:a===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,d=1+l,g=[h,h,d,h,d,d,h,h,d,d,h,d],v=6,p=6,_=3,m=2,f=1,E=new Float32Array(_*p*v),M=new Float32Array(m*p*v),S=new Float32Array(f*p*v);for(let R=0;R<v;R++){const I=R%3*2/3-1,W=R>2?0:-1,b=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];E.set(b,_*p*R),M.set(g,m*p*R);const P=[R,R,R,R,R,R];S.set(P,f*p*R)}const O=new pn;O.setAttribute("position",new fn(E,_)),O.setAttribute("uv",new fn(M,m)),O.setAttribute("faceIndex",new fn(S,f)),t.push(O),i>Ls&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(s,t,e){const n=new Qi(s,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function N0(s,t,e){const n=new Float32Array(Xi),i=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function eh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function nh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function U0(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===gc||c===_c,h=c===ks||c===Fs;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Ql(s)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ql(s));const g=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,g),r.addEventListener("dispose",o),g.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function o(r){const c=r.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k0(s,t,e,n){const i={},o=new WeakMap;function a(d){const g=d.target;g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);for(const p in g.morphAttributes){const _=g.morphAttributes[p];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}g.removeEventListener("dispose",a),delete i[g.id];const v=o.get(g);v&&(t.remove(v),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function r(d,g){return i[g.id]===!0||(g.addEventListener("dispose",a),i[g.id]=!0,e.memory.geometries++),g}function c(d){const g=d.attributes;for(const p in g)t.update(g[p],s.ARRAY_BUFFER);const v=d.morphAttributes;for(const p in v){const _=v[p];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const g=[],v=d.index,p=d.attributes.position;let _=0;if(v!==null){const E=v.array;_=v.version;for(let M=0,S=E.length;M<S;M+=3){const O=E[M+0],R=E[M+1],I=E[M+2];g.push(O,R,R,I,I,O)}}else if(p!==void 0){const E=p.array;_=p.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const O=M+0,R=M+1,I=M+2;g.push(O,R,R,I,I,O)}}else return;const m=new(Ld(g)?Bd:Ud)(g,1);m.version=_;const f=o.get(d);f&&t.remove(f),o.set(d,m)}function h(d){const g=o.get(d);if(g){const v=d.index;v!==null&&g.version<v.version&&l(d)}else l(d);return o.get(d)}return{get:r,update:c,getWireframeAttribute:h}}function F0(s,t,e,n){const i=n.isWebGL2;let o;function a(v){o=v}let r,c;function l(v){r=v.type,c=v.bytesPerElement}function h(v,p){s.drawElements(o,p,r,v*c),e.update(p,o,1)}function d(v,p,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](o,p,r,v*c,_),e.update(p,o,_)}function g(v,p,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(v[f]/c,p[f]);else{m.multiDrawElementsWEBGL(o,p,0,r,v,0,_);let f=0;for(let E=0;E<_;E++)f+=p[E];e.update(f,o,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=g}function z0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function H0(s,t){return s[0]-t[0]}function G0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function V0(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new De,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,d){const g=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let m=o.get(h);if(m===void 0||m.count!==_){let Y=function(){ot.dispose(),o.delete(h),h.removeEventListener("dispose",Y)};var v=Y;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),S===!0&&(b=2),O===!0&&(b=3);let P=h.attributes.position.count*b,X=1;P>t.maxTextureSize&&(X=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const K=new Float32Array(P*X*4*_),ot=new Od(K,P,X,_);ot.type=bi,ot.needsUpdate=!0;const F=b*4;for(let J=0;J<_;J++){const Q=R[J],nt=I[J],it=W[J],st=P*X*4*J;for(let ut=0;ut<Q.count;ut++){const pt=ut*F;M===!0&&(a.fromBufferAttribute(Q,ut),K[st+pt+0]=a.x,K[st+pt+1]=a.y,K[st+pt+2]=a.z,K[st+pt+3]=0),S===!0&&(a.fromBufferAttribute(nt,ut),K[st+pt+4]=a.x,K[st+pt+5]=a.y,K[st+pt+6]=a.z,K[st+pt+7]=0),O===!0&&(a.fromBufferAttribute(it,ut),K[st+pt+8]=a.x,K[st+pt+9]=a.y,K[st+pt+10]=a.z,K[st+pt+11]=it.itemSize===4?a.w:1)}}m={count:_,texture:ot,size:new te(P,X)},o.set(h,m),h.addEventListener("dispose",Y)}let f=0;for(let M=0;M<g.length;M++)f+=g[M];const E=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",g),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let _=n[h.id];if(_===void 0||_.length!==p){_=[];for(let S=0;S<p;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<p;S++){const O=_[S];O[0]=S,O[1]=g[S]}_.sort(G0);for(let S=0;S<8;S++)S<p&&_[S][1]?(r[S][0]=_[S][0],r[S][1]=_[S][1]):(r[S][0]=Number.MAX_SAFE_INTEGER,r[S][1]=0);r.sort(H0);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const O=r[S],R=O[0],I=O[1];R!==Number.MAX_SAFE_INTEGER&&I?(m&&h.getAttribute("morphTarget"+S)!==m[R]&&h.setAttribute("morphTarget"+S,m[R]),f&&h.getAttribute("morphNormal"+S)!==f[R]&&h.setAttribute("morphNormal"+S,f[R]),i[S]=I,E+=I):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const M=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function W0(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const g=c.skeleton;i.get(g)!==l&&(g.update(),i.set(g,l))}return d}function a(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:a}}class Vd extends an{constructor(t,e,n,i,o,a,r,c,l,h){if(h=h!==void 0?h:$i,h!==$i&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=Si),n===void 0&&h===zs&&(n=Ki),super(null,i,o,a,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wd=new an,Xd=new Vd(1,1);Xd.compareFunction=Pd;const Yd=new Od,qd=new Cf,jd=new zd,ih=[],sh=[],oh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function qs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=ih[i];if(o===void 0&&(o=new Float32Array(i),ih[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qr(s,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function X0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),je(e,t)}}function q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),je(e,t)}}function j0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),je(e,t)}}function Z0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;ah.set(n),s.uniformMatrix2fv(this.addr,!1,ah),je(e,n)}}function K0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;rh.set(n),s.uniformMatrix3fv(this.addr,!1,rh),je(e,n)}}function $0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;oh.set(n),s.uniformMatrix4fv(this.addr,!1,oh),je(e,n)}}function J0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),je(e,t)}}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),je(e,t)}}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),je(e,t)}}function ng(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),je(e,t)}}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),je(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),je(e,t)}}function rg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?Xd:Wd;e.setTexture2D(t||o,i)}function ag(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qd,i)}function cg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jd,i)}function lg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yd,i)}function hg(s){switch(s){case 5126:return X0;case 35664:return Y0;case 35665:return q0;case 35666:return j0;case 35674:return Z0;case 35675:return K0;case 35676:return $0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}function dg(s,t){s.uniform1fv(this.addr,t)}function ug(s,t){const e=qs(t,this.size,2);s.uniform2fv(this.addr,e)}function fg(s,t){const e=qs(t,this.size,3);s.uniform3fv(this.addr,e)}function pg(s,t){const e=qs(t,this.size,4);s.uniform4fv(this.addr,e)}function mg(s,t){const e=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function gg(s,t){const e=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _g(s,t){const e=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vg(s,t){s.uniform1iv(this.addr,t)}function xg(s,t){s.uniform2iv(this.addr,t)}function yg(s,t){s.uniform3iv(this.addr,t)}function Mg(s,t){s.uniform4iv(this.addr,t)}function Eg(s,t){s.uniform1uiv(this.addr,t)}function Sg(s,t){s.uniform2uiv(this.addr,t)}function bg(s,t){s.uniform3uiv(this.addr,t)}function Ag(s,t){s.uniform4uiv(this.addr,t)}function Tg(s,t,e){const n=this.cache,i=t.length,o=qr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wd,o[a])}function wg(s,t,e){const n=this.cache,i=t.length,o=qr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||qd,o[a])}function Cg(s,t,e){const n=this.cache,i=t.length,o=qr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||jd,o[a])}function Rg(s,t,e){const n=this.cache,i=t.length,o=qr(e,i);qe(n,o)||(s.uniform1iv(this.addr,o),je(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Yd,o[a])}function Pg(s){switch(s){case 5126:return dg;case 35664:return ug;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return Eg;case 36294:return Sg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function ch(s,t){s.seq.push(t),s.map[t.id]=t}function Og(s,t,e){const n=s.name,i=n.length;for(Ua.lastIndex=0;;){const o=Ua.exec(n),a=Ua.lastIndex;let r=o[1];const c=o[2]==="]",l=o[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===i){ch(e,l===void 0?new Lg(r,s,t):new Ig(r,s,t));break}else{let d=e.map[r];d===void 0&&(d=new Dg(r),ch(e,d)),e=d}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);Og(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function lh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ng=37297;let Ug=0;function Bg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function kg(s){const t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(s);let n;switch(t===e?n="":t===Ir&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),s){case hi:case Vr:return[n,"LinearTransferOETF"];case $e:case Vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function hh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Bg(s.getShaderSource(t),a)}else return i}function Fg(s,t){const e=kg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zg(s,t){let e;switch(t){case Zu:e="Linear";break;case Ku:e="Reinhard";break;case $u:e="OptimizedCineon";break;case Ju:e="ACESFilmic";break;case tf:e="AgX";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function Gg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function Vg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function Is(s){return s!==""}function dh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(Xg,qg)}const Yg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qg(s,t){let e=ne[t];if(e===void 0){const n=Yg.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(s){return s.replace(jg,Zg)}function Zg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ph(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Fs:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case ju:t="ENVMAP_BLENDING_ADD";break}return t}function t_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function e_(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=Kg(e),l=$g(e),h=Jg(e),d=Qg(e),g=t_(e),v=e.isWebGL2?"":Hg(e),p=Gg(e),_=Vg(o),m=i.createProgram();let f,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),f.length>0&&(f+=`
`),E=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),E.length>0&&(E+=`
`)):(f=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),E=[v,ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?ne.tonemapping_pars_fragment:"",e.toneMapping!==ci?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=bc(a),a=dh(a,e),a=uh(a,e),r=bc(r),r=dh(r,e),r=uh(r,e),a=fh(a),r=fh(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=M+f+a,O=M+E+r,R=lh(i,i.VERTEX_SHADER,S),I=lh(i,i.FRAGMENT_SHADER,O);i.attachShader(m,R),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function W(K){if(s.debug.checkShaderErrors){const ot=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(R).trim(),Y=i.getShaderInfoLog(I).trim();let J=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,I);else{const nt=hh(i,R,"vertex"),it=hh(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+nt+`
`+it)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(F===""||Y==="")&&(Q=!1);Q&&(K.diagnostics={runnable:J,programLog:ot,vertexShader:{log:F,prefix:f},fragmentShader:{log:Y,prefix:E}})}i.deleteShader(R),i.deleteShader(I),b=new Sr(i,m),P=Wg(i,m)}let b;this.getUniforms=function(){return b===void 0&&W(this),b};let P;this.getAttributes=function(){return P===void 0&&W(this),P};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=i.getProgramParameter(m,Ng)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=I,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s_(t),e.set(t,n)),n}}class s_{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}}function o_(s,t,e,n,i,o,a){const r=new Wc,c=new i_,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,P,X,K,ot){const F=K.fog,Y=ot.geometry,J=b.isMeshStandardMaterial?K.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||J),nt=Q&&Q.mapping===Gr?Q.image.height:null,it=p[b.type];b.precision!==null&&(v=i.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=st!==void 0?st.length:0;let pt=0;Y.morphAttributes.position!==void 0&&(pt=1),Y.morphAttributes.normal!==void 0&&(pt=2),Y.morphAttributes.color!==void 0&&(pt=3);let $,at,Et,wt;if(it){const Ke=Yn[it];$=Ke.vertexShader,at=Ke.fragmentShader}else $=b.vertexShader,at=b.fragmentShader,c.update(b),Et=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);const Dt=s.getRenderTarget(),Wt=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,Ft=!!b.map,le=!!b.matcap,j=!!Q,_e=!!b.aoMap,Bt=!!b.lightMap,Vt=!!b.bumpMap,Ct=!!b.normalMap,xe=!!b.displacementMap,qt=!!b.emissiveMap,D=!!b.metalnessMap,w=!!b.roughnessMap,q=b.anisotropy>0,ht=b.clearcoat>0,lt=b.iridescence>0,dt=b.sheen>0,Pt=b.transmission>0,vt=q&&!!b.anisotropyMap,bt=ht&&!!b.clearcoatMap,zt=ht&&!!b.clearcoatNormalMap,Yt=ht&&!!b.clearcoatRoughnessMap,rt=lt&&!!b.iridescenceMap,ve=lt&&!!b.iridescenceThicknessMap,ee=dt&&!!b.sheenColorMap,Gt=dt&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,At=!!b.specularColorMap,jt=!!b.specularIntensityMap,de=Pt&&!!b.transmissionMap,Re=Pt&&!!b.thicknessMap,Zt=!!b.gradientMap,ft=!!b.alphaMap,B=b.alphaTest>0,Mt=!!b.alphaHash,xt=!!b.extensions,Ht=!!Y.attributes.uv1,kt=!!Y.attributes.uv2,ye=!!Y.attributes.uv3;let Me=ci;return b.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Me=s.toneMapping),{isWebGL2:h,shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:$,fragmentShader:at,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:Xt,instancing:Wt,instancingColor:Wt&&ot.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Dt===null?s.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:hi,map:Ft,matcap:le,envMap:j,envMapMode:j&&Q.mapping,envMapCubeUVHeight:nt,aoMap:_e,lightMap:Bt,bumpMap:Vt,normalMap:Ct,displacementMap:g&&xe,emissiveMap:qt,normalMapObjectSpace:Ct&&b.normalMapType===ff,normalMapTangentSpace:Ct&&b.normalMapType===Rd,metalnessMap:D,roughnessMap:w,anisotropy:q,anisotropyMap:vt,clearcoat:ht,clearcoatMap:bt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Yt,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:ve,sheen:dt,sheenColorMap:ee,sheenRoughnessMap:Gt,specularMap:Rt,specularColorMap:At,specularIntensityMap:jt,transmission:Pt,transmissionMap:de,thicknessMap:Re,gradientMap:Zt,opaque:b.transparent===!1&&b.blending===Ns,alphaMap:ft,alphaTest:B,alphaHash:Mt,combine:b.combine,mapUv:Ft&&_(b.map.channel),aoMapUv:_e&&_(b.aoMap.channel),lightMapUv:Bt&&_(b.lightMap.channel),bumpMapUv:Vt&&_(b.bumpMap.channel),normalMapUv:Ct&&_(b.normalMap.channel),displacementMapUv:xe&&_(b.displacementMap.channel),emissiveMapUv:qt&&_(b.emissiveMap.channel),metalnessMapUv:D&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:vt&&_(b.anisotropyMap.channel),clearcoatMapUv:bt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(b.sheenRoughnessMap.channel),specularMapUv:Rt&&_(b.specularMap.channel),specularColorMapUv:At&&_(b.specularColorMap.channel),specularIntensityMapUv:jt&&_(b.specularIntensityMap.channel),transmissionMapUv:de&&_(b.transmissionMap.channel),thicknessMapUv:Re&&_(b.thicknessMap.channel),alphaMapUv:ft&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ct||q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Ht,vertexUv2s:kt,vertexUv3s:ye,pointsUvs:ot.isPoints===!0&&!!Y.attributes.uv&&(Ft||ft),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ot.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&Ee.getTransfer(b.map.colorSpace)===Le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)P.push(X),P.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(E(P,b),M(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function E(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function M(b,P){r.disableAll(),P.isWebGL2&&r.enable(0),P.supportsVertexTextures&&r.enable(1),P.instancing&&r.enable(2),P.instancingColor&&r.enable(3),P.matcap&&r.enable(4),P.envMap&&r.enable(5),P.normalMapObjectSpace&&r.enable(6),P.normalMapTangentSpace&&r.enable(7),P.clearcoat&&r.enable(8),P.iridescence&&r.enable(9),P.alphaTest&&r.enable(10),P.vertexColors&&r.enable(11),P.vertexAlphas&&r.enable(12),P.vertexUv1s&&r.enable(13),P.vertexUv2s&&r.enable(14),P.vertexUv3s&&r.enable(15),P.vertexTangents&&r.enable(16),P.anisotropy&&r.enable(17),P.alphaHash&&r.enable(18),P.batching&&r.enable(19),b.push(r.mask),r.disableAll(),P.fog&&r.enable(0),P.useFog&&r.enable(1),P.flatShading&&r.enable(2),P.logarithmicDepthBuffer&&r.enable(3),P.skinning&&r.enable(4),P.morphTargets&&r.enable(5),P.morphNormals&&r.enable(6),P.morphColors&&r.enable(7),P.premultipliedAlpha&&r.enable(8),P.shadowMapEnabled&&r.enable(9),P.useLegacyLights&&r.enable(10),P.doubleSided&&r.enable(11),P.flipSided&&r.enable(12),P.useDepthPacking&&r.enable(13),P.dithering&&r.enable(14),P.transmission&&r.enable(15),P.sheen&&r.enable(16),P.opaque&&r.enable(17),P.pointsUvs&&r.enable(18),P.decodeVideoTexture&&r.enable(19),b.push(r.mask)}function S(b){const P=p[b.type];let X;if(P){const K=Yn[P];X=Hf.clone(K.uniforms)}else X=b.uniforms;return X}function O(b,P){let X;for(let K=0,ot=l.length;K<ot;K++){const F=l[K];if(F.cacheKey===P){X=F,++X.usedTimes;break}}return X===void 0&&(X=new e_(s,P,b,o),l.push(X)),X}function R(b){if(--b.usedTimes===0){const P=l.indexOf(b);l[P]=l[l.length-1],l.pop(),b.destroy()}}function I(b){c.remove(b)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:I,programs:l,dispose:W}}function r_(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function a_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gh(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(d,g,v,p,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:g,material:v,groupOrder:p,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=g,f.material=v,f.groupOrder=p,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function r(d,g,v,p,_,m){const f=a(d,g,v,p,_,m);v.transmission>0?n.push(f):v.transparent===!0?i.push(f):e.push(f)}function c(d,g,v,p,_,m){const f=a(d,g,v,p,_,m);v.transmission>0?n.unshift(f):v.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,g){e.length>1&&e.sort(d||a_),n.length>1&&n.sort(g||mh),i.length>1&&i.sort(g||mh)}function h(){for(let d=t,g=s.length;d<g;d++){const v=s[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:h,sort:l}}function c_(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new gh,s.set(n,[a])):i>=o.length?(a=new gh,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function l_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new yt};break;case"SpotLight":e={position:new U,direction:new U,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function h_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let d_=0;function u_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function f_(s,t){const e=new l_,n=h_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const o=new U,a=new Te,r=new Te;function c(h,d){let g=0,v=0,p=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let _=0,m=0,f=0,E=0,M=0,S=0,O=0,R=0,I=0,W=0,b=0;h.sort(u_);const P=d===!0?Math.PI:1;for(let K=0,ot=h.length;K<ot;K++){const F=h[K],Y=F.color,J=F.intensity,Q=F.distance,nt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=Y.r*J*P,v+=Y.g*J*P,p+=Y.b*J*P;else if(F.isLightProbe){for(let it=0;it<9;it++)i.probe[it].addScaledVector(F.sh.coefficients[it],J);b++}else if(F.isDirectionalLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const st=F.shadow,ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.directionalShadow[_]=ut,i.directionalShadowMap[_]=nt,i.directionalShadowMatrix[_]=F.shadow.matrix,S++}i.directional[_]=it,_++}else if(F.isSpotLight){const it=e.get(F);it.position.setFromMatrixPosition(F.matrixWorld),it.color.copy(Y).multiplyScalar(J*P),it.distance=Q,it.coneCos=Math.cos(F.angle),it.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),it.decay=F.decay,i.spot[f]=it;const st=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,st.updateMatrices(F),F.castShadow&&W++),i.spotLightMatrix[f]=st.matrix,F.castShadow){const ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.spotShadow[f]=ut,i.spotShadowMap[f]=nt,R++}f++}else if(F.isRectAreaLight){const it=e.get(F);it.color.copy(Y).multiplyScalar(J),it.halfWidth.set(F.width*.5,0,0),it.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=it,E++}else if(F.isPointLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*P),it.distance=F.distance,it.decay=F.decay,F.castShadow){const st=F.shadow,ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,ut.shadowCameraNear=st.camera.near,ut.shadowCameraFar=st.camera.far,i.pointShadow[m]=ut,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=F.shadow.matrix,O++}i.point[m]=it,m++}else if(F.isHemisphereLight){const it=e.get(F);it.skyColor.copy(F.color).multiplyScalar(J*P),it.groundColor.copy(F.groundColor).multiplyScalar(J*P),i.hemi[M]=it,M++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=p;const X=i.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==f||X.rectAreaLength!==E||X.hemiLength!==M||X.numDirectionalShadows!==S||X.numPointShadows!==O||X.numSpotShadows!==R||X.numSpotMaps!==I||X.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=O,i.pointShadowMap.length=O,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=O,i.spotLightMatrix.length=R+I-W,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=W,i.numLightProbes=b,X.directionalLength=_,X.pointLength=m,X.spotLength=f,X.rectAreaLength=E,X.hemiLength=M,X.numDirectionalShadows=S,X.numPointShadows=O,X.numSpotShadows=R,X.numSpotMaps=I,X.numLightProbes=b,i.version=d_++)}function l(h,d){let g=0,v=0,p=0,_=0,m=0;const f=d.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const S=h[E];if(S.isDirectionalLight){const O=i.directional[g];O.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(f),g++}else if(S.isSpotLight){const O=i.spot[p];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(f),p++}else if(S.isRectAreaLight){const O=i.rectArea[_];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),r.identity(),a.copy(S.matrixWorld),a.premultiply(f),r.extractRotation(a),O.halfWidth.set(S.width*.5,0,0),O.halfHeight.set(0,S.height*.5,0),O.halfWidth.applyMatrix4(r),O.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){const O=i.point[v];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(f),v++}else if(S.isHemisphereLight){const O=i.hemi[m];O.direction.setFromMatrixPosition(S.matrixWorld),O.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function _h(s,t){const e=new f_(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(d){n.push(d)}function r(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function p_(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new _h(s,t),e.set(o,[c])):a>=r.length?(c=new _h(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class m_ extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g_ extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`;function x_(s,t,e){let n=new Xc;const i=new te,o=new te,a=new De,r=new m_({depthPacking:uf}),c=new g_,l={},h=e.maxTextureSize,d={[li]:rn,[rn]:li,[qn]:qn},g=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:__,fragmentShader:v_}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const p=new pn;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(p,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let f=this.type;this.render=function(R,I,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),P=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Ai),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=f!==si&&this.type===si,F=f===si&&this.type!==si;for(let Y=0,J=R.length;Y<J;Y++){const Q=R[Y],nt=Q.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const it=nt.getFrameExtents();if(i.multiply(it),o.copy(nt.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/it.x),i.x=o.x*it.x,nt.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/it.y),i.y=o.y*it.y,nt.mapSize.y=o.y)),nt.map===null||ot===!0||F===!0){const ut=this.type!==si?{minFilter:Ne,magFilter:Ne}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Qi(i.x,i.y,ut),nt.map.texture.name=Q.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const st=nt.getViewportCount();for(let ut=0;ut<st;ut++){const pt=nt.getViewport(ut);a.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),K.viewport(a),nt.updateMatrices(Q,ut),n=nt.getFrustum(),S(I,W,nt.camera,Q,this.type)}nt.isPointLightShadow!==!0&&this.type===si&&E(nt,W),nt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,P,X)};function E(R,I){const W=t.update(_);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(i.x,i.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,W,g,_,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,W,v,_,null)}function M(R,I,W,b){let P=null;const X=W.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(X!==void 0)P=X;else if(P=W.isPointLight===!0?c:r,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const K=P.uuid,ot=I.uuid;let F=l[K];F===void 0&&(F={},l[K]=F);let Y=F[ot];Y===void 0&&(Y=P.clone(),F[ot]=Y,I.addEventListener("dispose",O)),P=Y}if(P.visible=I.visible,P.wireframe=I.wireframe,b===si?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:d[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,W.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const K=s.properties.get(P);K.light=W}return P}function S(R,I,W,b,P){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld);const ot=t.update(R),F=R.material;if(Array.isArray(F)){const Y=ot.groups;for(let J=0,Q=Y.length;J<Q;J++){const nt=Y[J],it=F[nt.materialIndex];if(it&&it.visible){const st=M(R,it,b,P);R.onBeforeShadow(s,R,I,W,ot,st,nt),s.renderBufferDirect(W,null,ot,st,R,nt),R.onAfterShadow(s,R,I,W,ot,st,nt)}}}else if(F.visible){const Y=M(R,F,b,P);R.onBeforeShadow(s,R,I,W,ot,Y,null),s.renderBufferDirect(W,null,ot,Y,R,null),R.onAfterShadow(s,R,I,W,ot,Y,null)}}const K=R.children;for(let ot=0,F=K.length;ot<F;ot++)S(K[ot],I,W,b,P)}function O(R){R.target.removeEventListener("dispose",O);for(const W in l){const b=l[W],P=R.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function y_(s,t,e){const n=e.isWebGL2;function i(){let B=!1;const Mt=new De;let xt=null;const Ht=new De(0,0,0,0);return{setMask:function(kt){xt!==kt&&!B&&(s.colorMask(kt,kt,kt,kt),xt=kt)},setLocked:function(kt){B=kt},setClear:function(kt,ye,Me,me,Ke){Ke===!0&&(kt*=me,ye*=me,Me*=me),Mt.set(kt,ye,Me,me),Ht.equals(Mt)===!1&&(s.clearColor(kt,ye,Me,me),Ht.copy(Mt))},reset:function(){B=!1,xt=null,Ht.set(-1,0,0,0)}}}function o(){let B=!1,Mt=null,xt=null,Ht=null;return{setTest:function(kt){kt?Xt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(kt){Mt!==kt&&!B&&(s.depthMask(kt),Mt=kt)},setFunc:function(kt){if(xt!==kt){switch(kt){case zu:s.depthFunc(s.NEVER);break;case Hu:s.depthFunc(s.ALWAYS);break;case Gu:s.depthFunc(s.LESS);break;case Rr:s.depthFunc(s.LEQUAL);break;case Vu:s.depthFunc(s.EQUAL);break;case Wu:s.depthFunc(s.GEQUAL);break;case Xu:s.depthFunc(s.GREATER);break;case Yu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=kt}},setLocked:function(kt){B=kt},setClear:function(kt){Ht!==kt&&(s.clearDepth(kt),Ht=kt)},reset:function(){B=!1,Mt=null,xt=null,Ht=null}}}function a(){let B=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,me=null,Ke=null;return{setTest:function(he){B||(he?Xt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(he){Mt!==he&&!B&&(s.stencilMask(he),Mt=he)},setFunc:function(he,Ye,cn){(xt!==he||Ht!==Ye||kt!==cn)&&(s.stencilFunc(he,Ye,cn),xt=he,Ht=Ye,kt=cn)},setOp:function(he,Ye,cn){(ye!==he||Me!==Ye||me!==cn)&&(s.stencilOp(he,Ye,cn),ye=he,Me=Ye,me=cn)},setLocked:function(he){B=he},setClear:function(he){Ke!==he&&(s.clearStencil(he),Ke=he)},reset:function(){B=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,me=null,Ke=null}}}const r=new i,c=new o,l=new a,h=new WeakMap,d=new WeakMap;let g={},v={},p=new WeakMap,_=[],m=null,f=!1,E=null,M=null,S=null,O=null,R=null,I=null,W=null,b=new yt(0,0,0),P=0,X=!1,K=null,ot=null,F=null,Y=null,J=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,it=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(st)[1]),nt=it>=1):st.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),nt=it>=2);let ut=null,pt={};const $=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),Et=new De().fromArray($),wt=new De().fromArray(at);function Dt(B,Mt,xt,Ht){const kt=new Uint8Array(4),ye=s.createTexture();s.bindTexture(B,ye),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<xt;Me++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(Mt,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Mt+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return ye}const Wt={};Wt[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Wt[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Wt[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Wt[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(s.DEPTH_TEST),c.setFunc(Rr),qt(!1),D(Qc),Xt(s.CULL_FACE),Ct(Ai);function Xt(B){g[B]!==!0&&(s.enable(B),g[B]=!0)}function Ft(B){g[B]!==!1&&(s.disable(B),g[B]=!1)}function le(B,Mt){return v[B]!==Mt?(s.bindFramebuffer(B,Mt),v[B]=Mt,n&&(B===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Mt),B===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function j(B,Mt){let xt=_,Ht=!1;if(B)if(xt=p.get(Mt),xt===void 0&&(xt=[],p.set(Mt,xt)),B.isWebGLMultipleRenderTargets){const kt=B.texture;if(xt.length!==kt.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Me=kt.length;ye<Me;ye++)xt[ye]=s.COLOR_ATTACHMENT0+ye;xt.length=kt.length,Ht=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,Ht=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,Ht=!0);Ht&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function _e(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const Bt={[Wi]:s.FUNC_ADD,[Au]:s.FUNC_SUBTRACT,[Tu]:s.FUNC_REVERSE_SUBTRACT};if(n)Bt[il]=s.MIN,Bt[sl]=s.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(Bt[il]=B.MIN_EXT,Bt[sl]=B.MAX_EXT)}const Vt={[wu]:s.ZERO,[Cu]:s.ONE,[Ru]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Lu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[Ou]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Uu]:s.CONSTANT_COLOR,[Bu]:s.ONE_MINUS_CONSTANT_COLOR,[ku]:s.CONSTANT_ALPHA,[Fu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(B,Mt,xt,Ht,kt,ye,Me,me,Ke,he){if(B===Ai){f===!0&&(Ft(s.BLEND),f=!1);return}if(f===!1&&(Xt(s.BLEND),f=!0),B!==bu){if(B!==E||he!==X){if((M!==Wi||R!==Wi)&&(s.blendEquation(s.FUNC_ADD),M=Wi,R=Wi),he)switch(B){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tl:s.blendFunc(s.ONE,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,O=null,I=null,W=null,b.set(0,0,0),P=0,E=B,X=he}return}kt=kt||Mt,ye=ye||xt,Me=Me||Ht,(Mt!==M||kt!==R)&&(s.blendEquationSeparate(Bt[Mt],Bt[kt]),M=Mt,R=kt),(xt!==S||Ht!==O||ye!==I||Me!==W)&&(s.blendFuncSeparate(Vt[xt],Vt[Ht],Vt[ye],Vt[Me]),S=xt,O=Ht,I=ye,W=Me),(me.equals(b)===!1||Ke!==P)&&(s.blendColor(me.r,me.g,me.b,Ke),b.copy(me),P=Ke),E=B,X=!1}function xe(B,Mt){B.side===qn?Ft(s.CULL_FACE):Xt(s.CULL_FACE);let xt=B.side===rn;Mt&&(xt=!xt),qt(xt),B.blending===Ns&&B.transparent===!1?Ct(Ai):Ct(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ht=B.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(B){K!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),K=B)}function D(B){B!==Mu?(Xt(s.CULL_FACE),B!==ot&&(B===Qc?s.cullFace(s.BACK):B===Eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),ot=B}function w(B){B!==F&&(nt&&s.lineWidth(B),F=B)}function q(B,Mt,xt){B?(Xt(s.POLYGON_OFFSET_FILL),(Y!==Mt||J!==xt)&&(s.polygonOffset(Mt,xt),Y=Mt,J=xt)):Ft(s.POLYGON_OFFSET_FILL)}function ht(B){B?Xt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function lt(B){B===void 0&&(B=s.TEXTURE0+Q-1),ut!==B&&(s.activeTexture(B),ut=B)}function dt(B,Mt,xt){xt===void 0&&(ut===null?xt=s.TEXTURE0+Q-1:xt=ut);let Ht=pt[xt];Ht===void 0&&(Ht={type:void 0,texture:void 0},pt[xt]=Ht),(Ht.type!==B||Ht.texture!==Mt)&&(ut!==xt&&(s.activeTexture(xt),ut=xt),s.bindTexture(B,Mt||Wt[B]),Ht.type=B,Ht.texture=Mt)}function Pt(){const B=pt[ut];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(B){Et.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Et.copy(B))}function de(B){wt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),wt.copy(B))}function Re(B,Mt){let xt=d.get(Mt);xt===void 0&&(xt=new WeakMap,d.set(Mt,xt));let Ht=xt.get(B);Ht===void 0&&(Ht=s.getUniformBlockIndex(Mt,B.name),xt.set(B,Ht))}function Zt(B,Mt){const Ht=d.get(Mt).get(B);h.get(Mt)!==Ht&&(s.uniformBlockBinding(Mt,Ht,B.__bindingPointIndex),h.set(Mt,Ht))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ut=null,pt={},v={},p=new WeakMap,_=[],m=null,f=!1,E=null,M=null,S=null,O=null,R=null,I=null,W=null,b=new yt(0,0,0),P=0,X=!1,K=null,ot=null,F=null,Y=null,J=null,Et.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Xt,disable:Ft,bindFramebuffer:le,drawBuffers:j,useProgram:_e,setBlending:Ct,setMaterial:xe,setFlipSided:qt,setCullFace:D,setLineWidth:w,setPolygonOffset:q,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Pt,compressedTexImage2D:vt,compressedTexImage3D:bt,texImage2D:Rt,texImage3D:At,updateUBOMapping:Re,uniformBlockBinding:Zt,texStorage2D:ee,texStorage3D:Gt,texSubImage2D:zt,texSubImage3D:Yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ve,scissor:jt,viewport:de,reset:ft}}function M_(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,w){return v?new OffscreenCanvas(D,w):Or("canvas")}function _(D,w,q,ht){let lt=1;if((D.width>ht||D.height>ht)&&(lt=ht/Math.max(D.width,D.height)),lt<1||w===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const dt=w?Sc:Math.floor,Pt=dt(lt*D.width),vt=dt(lt*D.height);d===void 0&&(d=p(Pt,vt));const bt=q?p(Pt,vt):d;return bt.width=Pt,bt.height=vt,bt.getContext("2d").drawImage(D,0,0,Pt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Pt+"x"+vt+")."),bt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return Dl(D.width)&&Dl(D.height)}function f(D){return r?!1:D.wrapS!==Mn||D.wrapT!==Mn||D.minFilter!==Ne&&D.minFilter!==wn}function E(D,w){return D.generateMipmaps&&w&&D.minFilter!==Ne&&D.minFilter!==wn}function M(D){s.generateMipmap(D)}function S(D,w,q,ht,lt=!1){if(r===!1)return w;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt=w;if(w===s.RED&&(q===s.FLOAT&&(dt=s.R32F),q===s.HALF_FLOAT&&(dt=s.R16F),q===s.UNSIGNED_BYTE&&(dt=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(dt=s.R8UI),q===s.UNSIGNED_SHORT&&(dt=s.R16UI),q===s.UNSIGNED_INT&&(dt=s.R32UI),q===s.BYTE&&(dt=s.R8I),q===s.SHORT&&(dt=s.R16I),q===s.INT&&(dt=s.R32I)),w===s.RG&&(q===s.FLOAT&&(dt=s.RG32F),q===s.HALF_FLOAT&&(dt=s.RG16F),q===s.UNSIGNED_BYTE&&(dt=s.RG8)),w===s.RGBA){const Pt=lt?Pr:Ee.getTransfer(ht);q===s.FLOAT&&(dt=s.RGBA32F),q===s.HALF_FLOAT&&(dt=s.RGBA16F),q===s.UNSIGNED_BYTE&&(dt=Pt===Le?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function O(D,w,q){return E(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==Ne&&D.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function R(D){return D===Ne||D===ol||D===ca?s.NEAREST:s.LINEAR}function I(D){const w=D.target;w.removeEventListener("dispose",I),b(w),w.isVideoTexture&&h.delete(w)}function W(D){const w=D.target;w.removeEventListener("dispose",W),X(w)}function b(D){const w=n.get(D);if(w.__webglInit===void 0)return;const q=D.source,ht=g.get(q);if(ht){const lt=ht[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(D),Object.keys(ht).length===0&&g.delete(q)}n.remove(D)}function P(D){const w=n.get(D);s.deleteTexture(w.__webglTexture);const q=D.source,ht=g.get(q);delete ht[w.__cacheKey],a.memory.textures--}function X(D){const w=D.texture,q=n.get(D),ht=n.get(w);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(q.__webglFramebuffer[lt]))for(let dt=0;dt<q.__webglFramebuffer[lt].length;dt++)s.deleteFramebuffer(q.__webglFramebuffer[lt][dt]);else s.deleteFramebuffer(q.__webglFramebuffer[lt]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[lt])}else{if(Array.isArray(q.__webglFramebuffer))for(let lt=0;lt<q.__webglFramebuffer.length;lt++)s.deleteFramebuffer(q.__webglFramebuffer[lt]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let lt=0;lt<q.__webglColorRenderbuffer.length;lt++)q.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[lt]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let lt=0,dt=w.length;lt<dt;lt++){const Pt=n.get(w[lt]);Pt.__webglTexture&&(s.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(w[lt])}n.remove(w),n.remove(D)}let K=0;function ot(){K=0}function F(){const D=K;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),K+=1,D}function Y(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function J(D,w){const q=n.get(D);if(D.isVideoTexture&&xe(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(q,D,w);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function Q(D,w){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Et(q,D,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function nt(D,w){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Et(q,D,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function it(D,w){const q=n.get(D);if(D.version>0&&q.__version!==D.version){wt(q,D,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const st={[vc]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[xc]:s.MIRRORED_REPEAT},ut={[Ne]:s.NEAREST,[ol]:s.NEAREST_MIPMAP_NEAREST,[ca]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[ef]:s.LINEAR_MIPMAP_NEAREST,[_o]:s.LINEAR_MIPMAP_LINEAR},pt={[pf]:s.NEVER,[yf]:s.ALWAYS,[mf]:s.LESS,[Pd]:s.LEQUAL,[gf]:s.EQUAL,[xf]:s.GEQUAL,[_f]:s.GREATER,[vf]:s.NOTEQUAL};function $(D,w,q){if(q?(s.texParameteri(D,s.TEXTURE_WRAP_S,st[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,st[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,st[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ut[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ut[w.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Mn||w.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,R(w.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,R(w.minFilter)),w.minFilter!==Ne&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ne||w.minFilter!==ca&&w.minFilter!==_o||w.type===bi&&t.has("OES_texture_float_linear")===!1||r===!1&&w.type===vo&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(D,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function at(D,w){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",I));const ht=w.source;let lt=g.get(ht);lt===void 0&&(lt={},g.set(ht,lt));const dt=Y(w);if(dt!==D.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),lt[dt].usedTimes++;const Pt=lt[D.__cacheKey];Pt!==void 0&&(lt[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&P(w)),D.__cacheKey=dt,D.__webglTexture=lt[dt].texture}return q}function Et(D,w,q){let ht=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ht=s.TEXTURE_3D);const lt=at(D,w),dt=w.source;e.bindTexture(ht,D.__webglTexture,s.TEXTURE0+q);const Pt=n.get(dt);if(dt.version!==Pt.__version||lt===!0){e.activeTexture(s.TEXTURE0+q);const vt=Ee.getPrimaries(Ee.workingColorSpace),bt=w.colorSpace===Cn?null:Ee.getPrimaries(w.colorSpace),zt=w.colorSpace===Cn||vt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Yt=f(w)&&m(w.image)===!1;let rt=_(w.image,Yt,!1,i.maxTextureSize);rt=qt(w,rt);const ve=m(rt)||r,ee=o.convert(w.format,w.colorSpace);let Gt=o.convert(w.type),Rt=S(w.internalFormat,ee,Gt,w.colorSpace,w.isVideoTexture);$(ht,w,ve);let At;const jt=w.mipmaps,de=r&&w.isVideoTexture!==!0&&Rt!==wd,Re=Pt.__version===void 0||lt===!0,Zt=O(w,rt,ve);if(w.isDepthTexture)Rt=s.DEPTH_COMPONENT,r?w.type===bi?Rt=s.DEPTH_COMPONENT32F:w.type===Si?Rt=s.DEPTH_COMPONENT24:w.type===Ki?Rt=s.DEPTH24_STENCIL8:Rt=s.DEPTH_COMPONENT16:w.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===$i&&Rt===s.DEPTH_COMPONENT&&w.type!==Gc&&w.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Si,Gt=o.convert(w.type)),w.format===zs&&Rt===s.DEPTH_COMPONENT&&(Rt=s.DEPTH_STENCIL,w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ki,Gt=o.convert(w.type))),Re&&(de?e.texStorage2D(s.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ee,Gt,null));else if(w.isDataTexture)if(jt.length>0&&ve){de&&Re&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],de?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,ee,Gt,At.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,ee,Gt,At.data);w.generateMipmaps=!1}else de?(Re&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,ee,Gt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,ee,Gt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){de&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Rt,jt[0].width,jt[0].height,rt.depth);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],w.format!==Fn?ee!==null?de?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,ee,At.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,At.width,At.height,rt.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,ee,Gt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,At.width,At.height,rt.depth,0,ee,Gt,At.data)}else{de&&Re&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],w.format!==Fn?ee!==null?de?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,ee,At.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,ee,Gt,At.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,ee,Gt,At.data)}else if(w.isDataArrayTexture)de?(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ee,Gt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,ee,Gt,rt.data);else if(w.isData3DTexture)de?(Re&&e.texStorage3D(s.TEXTURE_3D,Zt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ee,Gt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,ee,Gt,rt.data);else if(w.isFramebufferTexture){if(Re)if(de)e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height);else{let ft=rt.width,B=rt.height;for(let Mt=0;Mt<Zt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Rt,ft,B,0,ee,Gt,null),ft>>=1,B>>=1}}else if(jt.length>0&&ve){de&&Re&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],de?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,ee,Gt,At):e.texImage2D(s.TEXTURE_2D,ft,Rt,ee,Gt,At);w.generateMipmaps=!1}else de?(Re&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ee,Gt,rt)):e.texImage2D(s.TEXTURE_2D,0,Rt,ee,Gt,rt);E(w,ve)&&M(ht),Pt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function wt(D,w,q){if(w.image.length!==6)return;const ht=at(D,w),lt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(s.TEXTURE0+q);const Pt=Ee.getPrimaries(Ee.workingColorSpace),vt=w.colorSpace===Cn?null:Ee.getPrimaries(w.colorSpace),bt=w.colorSpace===Cn||Pt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const zt=w.isCompressedTexture||w.image[0].isCompressedTexture,Yt=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!zt&&!Yt?rt[ft]=_(w.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=Yt?w.image[ft].image:w.image[ft],rt[ft]=qt(w,rt[ft]);const ve=rt[0],ee=m(ve)||r,Gt=o.convert(w.format,w.colorSpace),Rt=o.convert(w.type),At=S(w.internalFormat,Gt,Rt,w.colorSpace),jt=r&&w.isVideoTexture!==!0,de=dt.__version===void 0||ht===!0;let Re=O(w,ve,ee);$(s.TEXTURE_CUBE_MAP,w,ee);let Zt;if(zt){jt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,At,ve.width,ve.height);for(let ft=0;ft<6;ft++){Zt=rt[ft].mipmaps;for(let B=0;B<Zt.length;B++){const Mt=Zt[B];w.format!==Fn?Gt!==null?jt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,At,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,At,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{Zt=w.mipmaps,jt&&de&&(Zt.length>0&&Re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Re,At,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(Yt){jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Gt,Rt,rt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,rt[ft].width,rt[ft].height,0,Gt,Rt,rt[ft].data);for(let B=0;B<Zt.length;B++){const xt=Zt[B].image[ft].image;jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,xt.width,xt.height,Gt,Rt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,At,xt.width,xt.height,0,Gt,Rt,xt.data)}}else{jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Gt,Rt,rt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,Gt,Rt,rt[ft]);for(let B=0;B<Zt.length;B++){const Mt=Zt[B];jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,Gt,Rt,Mt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,At,Gt,Rt,Mt.image[ft])}}}E(w,ee)&&M(s.TEXTURE_CUBE_MAP),dt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Dt(D,w,q,ht,lt,dt){const Pt=o.convert(q.format,q.colorSpace),vt=o.convert(q.type),bt=S(q.internalFormat,Pt,vt,q.colorSpace);if(!n.get(w).__hasExternalTextures){const Yt=Math.max(1,w.width>>dt),rt=Math.max(1,w.height>>dt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,bt,Yt,rt,w.depth,0,Pt,vt,null):e.texImage2D(lt,dt,bt,Yt,rt,0,Pt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Ct(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,lt,n.get(q).__webglTexture,0,Vt(w)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,lt,n.get(q).__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(D,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer&&!w.stencilBuffer){let ht=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||Ct(w)){const lt=w.depthTexture;lt&&lt.isDepthTexture&&(lt.type===bi?ht=s.DEPTH_COMPONENT32F:lt.type===Si&&(ht=s.DEPTH_COMPONENT24));const dt=Vt(w);Ct(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ht,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ht,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(w.depthBuffer&&w.stencilBuffer){const ht=Vt(w);q&&Ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,w.width,w.height):Ct(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const ht=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Pt=o.convert(dt.format,dt.colorSpace),vt=o.convert(dt.type),bt=S(dt.internalFormat,Pt,vt,dt.colorSpace),zt=Vt(w);q&&Ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,w.width,w.height):Ct(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,bt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,bt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ht=n.get(w.depthTexture).__webglTexture,lt=Vt(w);if(w.depthTexture.format===$i)Ct(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(w.depthTexture.format===zs)Ct(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const w=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Xt(w.__webglFramebuffer,D)}else if(q){w.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ht]),w.__webglDepthbuffer[ht]=s.createRenderbuffer(),Wt(w.__webglDepthbuffer[ht],D,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Wt(w.__webglDepthbuffer,D,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function le(D,w,q){const ht=n.get(D);w!==void 0&&Dt(ht.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ft(D)}function j(D){const w=D.texture,q=n.get(D),ht=n.get(w);D.addEventListener("dispose",W),D.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=w.version,a.memory.textures++);const lt=D.isWebGLCubeRenderTarget===!0,dt=D.isWebGLMultipleRenderTargets===!0,Pt=m(D)||r;if(lt){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(r&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let bt=0;bt<w.mipmaps.length;bt++)q.__webglFramebuffer[vt][bt]=s.createFramebuffer()}else q.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(r&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)q.__webglFramebuffer[vt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(dt)if(i.drawBuffers){const vt=D.texture;for(let bt=0,zt=vt.length;bt<zt;bt++){const Yt=n.get(vt[bt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&D.samples>0&&Ct(D)===!1){const vt=dt?w:[w];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let bt=0;bt<vt.length;bt++){const zt=vt[bt];q.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[bt]);const Yt=o.convert(zt.format,zt.colorSpace),rt=o.convert(zt.type),ve=S(zt.internalFormat,Yt,rt,zt.colorSpace,D.isXRRenderTarget===!0),ee=Vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ve,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,q.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),$(s.TEXTURE_CUBE_MAP,w,Pt);for(let vt=0;vt<6;vt++)if(r&&w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Dt(q.__webglFramebuffer[vt][bt],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else Dt(q.__webglFramebuffer[vt],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(w,Pt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=D.texture;for(let bt=0,zt=vt.length;bt<zt;bt++){const Yt=vt[bt],rt=n.get(Yt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),$(s.TEXTURE_2D,Yt,Pt),Dt(q.__webglFramebuffer,D,Yt,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),E(Yt,Pt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(r?vt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),$(vt,w,Pt),r&&w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Dt(q.__webglFramebuffer[bt],D,w,s.COLOR_ATTACHMENT0,vt,bt);else Dt(q.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,vt,0);E(w,Pt)&&M(vt),e.unbindTexture()}D.depthBuffer&&Ft(D)}function _e(D){const w=m(D)||r,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ht=0,lt=q.length;ht<lt;ht++){const dt=q[ht];if(E(dt,w)){const Pt=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(dt).__webglTexture;e.bindTexture(Pt,vt),M(Pt),e.unbindTexture()}}}function Bt(D){if(r&&D.samples>0&&Ct(D)===!1){const w=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,ht=D.height;let lt=s.COLOR_BUFFER_BIT;const dt=[],Pt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(D),bt=D.isWebGLMultipleRenderTargets===!0;if(bt)for(let zt=0;zt<w.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let zt=0;zt<w.length;zt++){dt.push(s.COLOR_ATTACHMENT0+zt),D.depthBuffer&&dt.push(Pt);const Yt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Yt===!1&&(D.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),bt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]),Yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pt])),bt){const rt=n.get(w[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,q,ht,0,0,q,ht,lt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let zt=0;zt<w.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]);const Yt=n.get(w[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Vt(D){return Math.min(i.maxSamples,D.samples)}function Ct(D){const w=n.get(D);return r&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xe(D){const w=a.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function qt(D,w){const q=D.colorSpace,ht=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Mc||q!==hi&&q!==Cn&&(Ee.getTransfer(q)===Le?r===!1?t.has("EXT_sRGB")===!0&&ht===Fn?(D.format=Mc,D.minFilter=wn,D.generateMipmaps=!1):w=Id.sRGBToLinear(w):(ht!==Fn||lt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}this.allocateTextureUnit=F,this.resetTextureUnits=ot,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=nt,this.setTextureCube=it,this.rebindTextures=le,this.setupRenderTarget=j,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ct}function E_(s,t,e){const n=e.isWebGL2;function i(o,a=Cn){let r;const c=Ee.getTransfer(a);if(o===Ti)return s.UNSIGNED_BYTE;if(o===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Sd)return s.UNSIGNED_SHORT_5_5_5_1;if(o===nf)return s.BYTE;if(o===sf)return s.SHORT;if(o===Gc)return s.UNSIGNED_SHORT;if(o===Md)return s.INT;if(o===Si)return s.UNSIGNED_INT;if(o===bi)return s.FLOAT;if(o===vo)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===of)return s.ALPHA;if(o===Fn)return s.RGBA;if(o===rf)return s.LUMINANCE;if(o===af)return s.LUMINANCE_ALPHA;if(o===$i)return s.DEPTH_COMPONENT;if(o===zs)return s.DEPTH_STENCIL;if(o===Mc)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===cf)return s.RED;if(o===bd)return s.RED_INTEGER;if(o===lf)return s.RG;if(o===Ad)return s.RG_INTEGER;if(o===Td)return s.RGBA_INTEGER;if(o===la||o===ha||o===da||o===ua)if(c===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===rl||o===al||o===cl||o===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===wd)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===hl||o===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===hl)return c===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===dl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ul||o===fl||o===pl||o===ml||o===gl||o===_l||o===vl||o===xl||o===yl||o===Ml||o===El||o===Sl||o===bl||o===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===ul)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===fl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===pl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ml)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===gl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===_l)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===xl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===yl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ml)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===El)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Al)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===fa||o===Tl||o===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===fa)return c===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hf||o===Cl||o===Rl||o===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ki?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class S_ extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],g=h.position.distanceTo(d.position),v=.02,p=.005;l.inputState.pinching&&g>v+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&g<=v-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class A_ extends Ys{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,l=null,h=null,d=null,g=null,v=null,p=null;const _=e.getContextAttributes();let m=null,f=null;const E=[],M=[],S=new te;let O=null;const R=new yn;R.layers.enable(1),R.viewport=new De;const I=new yn;I.layers.enable(2),I.viewport=new De;const W=[R,I],b=new S_;b.layers.enable(1),b.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=E[$];return at===void 0&&(at=new Ba,E[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=E[$];return at===void 0&&(at=new Ba,E[$]=at),at.getGripSpace()},this.getHand=function($){let at=E[$];return at===void 0&&(at=new Ba,E[$]=at),at.getHandSpace()};function K($){const at=M.indexOf($.inputSource);if(at===-1)return;const Et=E[at];Et!==void 0&&(Et.update($.inputSource,$.frame,l||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function ot(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",ot),i.removeEventListener("inputsourceschange",F);for(let $=0;$<E.length;$++){const at=M[$];at!==null&&(M[$]=null,E[$].disconnect(at))}P=null,X=null,t.setRenderTarget(m),v=null,g=null,d=null,i=null,f=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",ot),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),f=new Qi(v.framebufferWidth,v.framebufferHeight,{format:Fn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,Et=null,wt=null;_.depth&&(wt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?zs:$i,Et=_.stencil?Ki:Si);const Dt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:o};d=new XRWebGLBinding(i,e),g=d.createProjectionLayer(Dt),i.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),f=new Qi(g.textureWidth,g.textureHeight,{format:Fn,type:Ti,depthTexture:new Vd(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Wt=t.properties.get(f);Wt.__ignoreDepthValues=g.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F($){for(let at=0;at<$.removed.length;at++){const Et=$.removed[at],wt=M.indexOf(Et);wt>=0&&(M[wt]=null,E[wt].disconnect(Et))}for(let at=0;at<$.added.length;at++){const Et=$.added[at];let wt=M.indexOf(Et);if(wt===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=M.length){M.push(Et),wt=Wt;break}else if(M[Wt]===null){M[Wt]=Et,wt=Wt;break}if(wt===-1)break}const Dt=E[wt];Dt&&Dt.connect(Et)}}const Y=new U,J=new U;function Q($,at,Et){Y.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(Et.matrixWorld);const wt=Y.distanceTo(J),Dt=at.projectionMatrix.elements,Wt=Et.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),Ft=Dt[14]/(Dt[10]+1),le=(Dt[9]+1)/Dt[5],j=(Dt[9]-1)/Dt[5],_e=(Dt[8]-1)/Dt[0],Bt=(Wt[8]+1)/Wt[0],Vt=Xt*_e,Ct=Xt*Bt,xe=wt/(-_e+Bt),qt=xe*-_e;at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qt),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const D=Xt+xe,w=Ft+xe,q=Vt-qt,ht=Ct+(wt-qt),lt=le*Ft/w*D,dt=j*Ft/w*D;$.projectionMatrix.makePerspective(q,ht,lt,dt,D,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function nt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;b.near=I.near=R.near=$.near,b.far=I.far=R.far=$.far,(P!==b.near||X!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,X=b.far);const at=$.parent,Et=b.cameras;nt(b,at);for(let wt=0;wt<Et.length;wt++)nt(Et[wt],at);Et.length===2?Q(b,R,I):b.projectionMatrix.copy(R.projectionMatrix),it($,b,at)};function it($,at,Et){Et===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ec*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function($){c=$,g!==null&&(g.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)};let st=null;function ut($,at){if(h=at.getViewerPose(l||a),p=at,h!==null){const Et=h.views;v!==null&&(t.setRenderTargetFramebuffer(f,v.framebuffer),t.setRenderTarget(f));let wt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let Dt=0;Dt<Et.length;Dt++){const Wt=Et[Dt];let Xt=null;if(v!==null)Xt=v.getViewport(Wt);else{const le=d.getViewSubImage(g,Wt);Xt=le.viewport,Dt===0&&(t.setRenderTargetTextures(f,le.colorTexture,g.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(f))}let Ft=W[Dt];Ft===void 0&&(Ft=new yn,Ft.layers.enable(Dt),Ft.viewport=new De,W[Dt]=Ft),Ft.matrix.fromArray(Wt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Wt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Dt===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(Ft)}}for(let Et=0;Et<E.length;Et++){const wt=M[Et],Dt=E[Et];wt!==null&&Dt!==void 0&&Dt.update(wt,at,l||a)}st&&st($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}const pt=new Hd;pt.setAnimationLoop(ut),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}function T_(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),g(m,f),f.isMeshPhysicalMaterial&&v(m,f,S)):f.isMeshMatcapMaterial?(o(m,f),p(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),_(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?c(m,f,E,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*M,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function g(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function v(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function w_(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const S=M.program;n.uniformBlockBinding(E,S)}function l(E,M){let S=i[E.id];S===void 0&&(p(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",m));const O=M.program;n.updateUBOMapping(E,O);const R=t.render.frame;o[E.id]!==R&&(g(E),o[E.id]=R)}function h(E){const M=d();E.__bindingPointIndex=M;const S=s.createBuffer(),O=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,O,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function d(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const M=i[E.id],S=E.uniforms,O=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,I=S.length;R<I;R++){const W=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,P=W.length;b<P;b++){const X=W[b];if(v(X,R,b,O)===!0){const K=X.__offset,ot=Array.isArray(X.value)?X.value:[X.value];let F=0;for(let Y=0;Y<ot.length;Y++){const J=ot[Y],Q=_(J);typeof J=="number"||typeof J=="boolean"?(X.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,K+F,X.__data)):J.isMatrix3?(X.__data[0]=J.elements[0],X.__data[1]=J.elements[1],X.__data[2]=J.elements[2],X.__data[3]=0,X.__data[4]=J.elements[3],X.__data[5]=J.elements[4],X.__data[6]=J.elements[5],X.__data[7]=0,X.__data[8]=J.elements[6],X.__data[9]=J.elements[7],X.__data[10]=J.elements[8],X.__data[11]=0):(J.toArray(X.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(E,M,S,O){const R=E.value,I=M+"_"+S;if(O[I]===void 0)return typeof R=="number"||typeof R=="boolean"?O[I]=R:O[I]=R.clone(),!0;{const W=O[I];if(typeof R=="number"||typeof R=="boolean"){if(W!==R)return O[I]=R,!0}else if(W.equals(R)===!1)return W.copy(R),!0}return!1}function p(E){const M=E.uniforms;let S=0;const O=16;for(let I=0,W=M.length;I<W;I++){const b=Array.isArray(M[I])?M[I]:[M[I]];for(let P=0,X=b.length;P<X;P++){const K=b[P],ot=Array.isArray(K.value)?K.value:[K.value];for(let F=0,Y=ot.length;F<Y;F++){const J=ot[F],Q=_(J),nt=S%O;nt!==0&&O-nt<Q.boundary&&(S+=O-nt),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=S,S+=Q.storage}}}const R=S%O;return R>0&&(S+=O-R),E.__size=S,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},o={}}return{bind:c,update:l,dispose:f}}class Zd{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=a;const v=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let S=!1,O=0,R=0,I=null,W=-1,b=null;const P=new De,X=new De;let K=null;const ot=new yt(0);let F=0,Y=e.width,J=e.height,Q=1,nt=null,it=null;const st=new De(0,0,Y,J),ut=new De(0,0,Y,J);let pt=!1;const $=new Xc;let at=!1,Et=!1,wt=null;const Dt=new Te,Wt=new te,Xt=new U,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return I===null?Q:1}let j=n;function _e(T,N){for(let V=0;V<T.length;V++){const k=T[V],G=e.getContext(k,N);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),j===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),j=_e(N,T),j===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Bt,Vt,Ct,xe,qt,D,w,q,ht,lt,dt,Pt,vt,bt,zt,Yt,rt,ve,ee,Gt,Rt,At,jt,de;function Re(){Bt=new B0(j),Vt=new L0(j,Bt,t),Bt.init(Vt),At=new E_(j,Bt,Vt),Ct=new y_(j,Bt,Vt),xe=new z0(j),qt=new r_,D=new M_(j,Bt,Ct,qt,Vt,At,xe),w=new D0(M),q=new U0(M),ht=new jf(j,Vt),jt=new R0(j,Bt,ht,Vt),lt=new k0(j,ht,xe,jt),dt=new W0(j,lt,ht,xe),ee=new V0(j,Vt,D),Yt=new I0(qt),Pt=new o_(M,w,q,Bt,Vt,jt,Yt),vt=new T_(M,qt),bt=new c_,zt=new p_(Bt,Vt),ve=new C0(M,w,q,Ct,dt,g,c),rt=new x_(M,dt,Vt),de=new w_(j,xe,Vt,Ct),Gt=new P0(j,Bt,xe,Vt),Rt=new F0(j,Bt,xe,Vt),xe.programs=Pt.programs,M.capabilities=Vt,M.extensions=Bt,M.properties=qt,M.renderLists=bt,M.shadowMap=rt,M.state=Ct,M.info=xe}Re();const Zt=new A_(M,j);this.xr=Zt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=Bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Y,J,!1))},this.getSize=function(T){return T.set(Y,J)},this.setSize=function(T,N,V=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,J=N,e.width=Math.floor(T*Q),e.height=Math.floor(N*Q),V===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Y*Q,J*Q).floor()},this.setDrawingBufferSize=function(T,N,V){Y=T,J=N,Q=V,e.width=Math.floor(T*V),e.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,N,V,k){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,N,V,k),Ct.viewport(P.copy(st).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,N,V,k){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,N,V,k),Ct.scissor(X.copy(ut).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){Ct.setScissorTest(pt=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(T=!0,N=!0,V=!0){let k=0;if(T){let G=!1;if(I!==null){const et=I.texture.format;G=et===Td||et===Ad||et===bd}if(G){const et=I.texture.type,ct=et===Ti||et===Si||et===Gc||et===Ki||et===Ed||et===Sd,Z=ve.getClearColor(),mt=ve.getClearAlpha(),Ut=Z.r,St=Z.g,gt=Z.b;ct?(v[0]=Ut,v[1]=St,v[2]=gt,v[3]=mt,j.clearBufferuiv(j.COLOR,0,v)):(p[0]=Ut,p[1]=St,p[2]=gt,p[3]=mt,j.clearBufferiv(j.COLOR,0,p))}else k|=j.COLOR_BUFFER_BIT}N&&(k|=j.DEPTH_BUFFER_BIT),V&&(k|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),bt.dispose(),zt.dispose(),qt.dispose(),w.dispose(),q.dispose(),dt.dispose(),jt.dispose(),de.dispose(),Pt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ke),Zt.removeEventListener("sessionend",he),wt&&(wt.dispose(),wt=null),Ye.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=xe.autoReset,N=rt.enabled,V=rt.autoUpdate,k=rt.needsUpdate,G=rt.type;Re(),xe.autoReset=T,rt.enabled=N,rt.autoUpdate=V,rt.needsUpdate=k,rt.type=G}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const N=T.target;N.removeEventListener("dispose",xt),Ht(N)}function Ht(T){kt(T),qt.remove(T)}function kt(T){const N=qt.get(T).programs;N!==void 0&&(N.forEach(function(V){Pt.releaseProgram(V)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,k,G,et){N===null&&(N=Ft);const ct=G.isMesh&&G.matrixWorld.determinant()<0,Z=It(T,N,V,k,G);Ct.setMaterial(k,ct);let mt=V.index,Ut=1;if(k.wireframe===!0){if(mt=lt.getWireframeAttribute(V),mt===void 0)return;Ut=2}const St=V.drawRange,gt=V.attributes.position;let Ot=St.start*Ut,Be=(St.start+St.count)*Ut;et!==null&&(Ot=Math.max(Ot,et.start*Ut),Be=Math.min(Be,(et.start+et.count)*Ut)),mt!==null?(Ot=Math.max(Ot,0),Be=Math.min(Be,mt.count)):gt!=null&&(Ot=Math.max(Ot,0),Be=Math.min(Be,gt.count));const Se=Be-Ot;if(Se<0||Se===1/0)return;jt.setup(G,k,Z,V,mt);let He,$t=Gt;if(mt!==null&&(He=ht.get(mt),$t=Rt,$t.setIndex(He)),G.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*le()),$t.setMode(j.LINES)):$t.setMode(j.TRIANGLES);else if(G.isLine){let Lt=k.linewidth;Lt===void 0&&(Lt=1),Ct.setLineWidth(Lt*le()),G.isLineSegments?$t.setMode(j.LINES):G.isLineLoop?$t.setMode(j.LINE_LOOP):$t.setMode(j.LINE_STRIP)}else G.isPoints?$t.setMode(j.POINTS):G.isSprite&&$t.setMode(j.TRIANGLES);if(G.isBatchedMesh)$t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)$t.renderInstances(Ot,Se,G.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ui=Math.min(V.instanceCount,Lt);$t.renderInstances(Ot,Se,ui)}else $t.render(Ot,Se)};function ye(T,N,V){T.transparent===!0&&T.side===qn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,A(T,N,V),T.side=li,T.needsUpdate=!0,A(T,N,V),T.side=qn):A(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),m=zt.get(V),m.init(),E.push(m),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==V&&T.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(M._useLegacyLights);const k=new Set;return T.traverse(function(G){const et=G.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const Z=et[ct];ye(Z,V,G),k.add(Z)}else ye(et,V,G),k.add(et)}),E.pop(),m=null,k},this.compileAsync=function(T,N,V=null){const k=this.compile(T,N,V);return new Promise(G=>{function et(){if(k.forEach(function(ct){qt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){G(T);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Me=null;function me(T){Me&&Me(T)}function Ke(){Ye.stop()}function he(){Ye.start()}const Ye=new Hd;Ye.setAnimationLoop(me),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(T){Me=T,Zt.setAnimationLoop(T),T===null?Ye.stop():Ye.start()},Zt.addEventListener("sessionstart",Ke),Zt.addEventListener("sessionend",he),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(N),N=Zt.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,I),m=zt.get(T,E.length),m.init(),E.push(m),Dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,at=Yt.init(this.clippingPlanes,Et),_=bt.get(T,f.length),_.init(),f.push(_),cn(T,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(nt,it),this.info.render.frame++,at===!0&&Yt.beginShadows();const V=m.state.shadowsArray;if(rt.render(V,T,N),at===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,T),m.setupLights(M._useLegacyLights),N.isArrayCamera){const k=N.cameras;for(let G=0,et=k.length;G<et;G++){const ct=k[G];bo(_,T,ct,ct.viewport)}}else bo(_,T,N);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(M,T,N),jt.resetDefaultState(),W=-1,b=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function cn(T,N,V,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){k&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const ct=dt.update(T),Z=T.material;Z.visible&&_.push(T,ct,Z,V,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ct=dt.update(T),Z=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Xt.copy(ct.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(Z)){const mt=ct.groups;for(let Ut=0,St=mt.length;Ut<St;Ut++){const gt=mt[Ut],Ot=Z[gt.materialIndex];Ot&&Ot.visible&&_.push(T,ct,Ot,V,Xt.z,gt)}}else Z.visible&&_.push(T,ct,Z,V,Xt.z,null)}}const et=T.children;for(let ct=0,Z=et.length;ct<Z;ct++)cn(et[ct],N,V,k)}function bo(T,N,V,k){const G=T.opaque,et=T.transmissive,ct=T.transparent;m.setupLightsView(V),at===!0&&Yt.setGlobalState(M.clippingPlanes,V),et.length>0&&x(G,et,N,V),k&&Ct.viewport(P.copy(k)),G.length>0&&u(G,N,V),et.length>0&&u(et,N,V),ct.length>0&&u(ct,N,V),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function x(T,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const et=Vt.isWebGL2;wt===null&&(wt=new Qi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?vo:Ti,minFilter:_o,samples:et?4:0})),M.getDrawingBufferSize(Wt),et?wt.setSize(Wt.x,Wt.y):wt.setSize(Sc(Wt.x),Sc(Wt.y));const ct=M.getRenderTarget();M.setRenderTarget(wt),M.getClearColor(ot),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const Z=M.toneMapping;M.toneMapping=ci,u(T,V,k),D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt);let mt=!1;for(let Ut=0,St=N.length;Ut<St;Ut++){const gt=N[Ut],Ot=gt.object,Be=gt.geometry,Se=gt.material,He=gt.group;if(Se.side===qn&&Ot.layers.test(k.layers)){const $t=Se.side;Se.side=rn,Se.needsUpdate=!0,y(Ot,V,k,Be,Se,He),Se.side=$t,Se.needsUpdate=!0,mt=!0}}mt===!0&&(D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt)),M.setRenderTarget(ct),M.setClearColor(ot,F),M.toneMapping=Z}function u(T,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,et=T.length;G<et;G++){const ct=T[G],Z=ct.object,mt=ct.geometry,Ut=k===null?ct.material:k,St=ct.group;Z.layers.test(V.layers)&&y(Z,N,V,mt,Ut,St)}}function y(T,N,V,k,G,et){T.onBeforeRender(M,N,V,k,G,et),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(M,N,V,k,T,et),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,M.renderBufferDirect(V,N,k,G,T,et),G.side=li,G.needsUpdate=!0,M.renderBufferDirect(V,N,k,G,T,et),G.side=qn):M.renderBufferDirect(V,N,k,G,T,et),T.onAfterRender(M,N,V,k,G,et)}function A(T,N,V){N.isScene!==!0&&(N=Ft);const k=qt.get(T),G=m.state.lights,et=m.state.shadowsArray,ct=G.state.version,Z=Pt.getParameters(T,G.state,et,N,V),mt=Pt.getProgramCacheKey(Z);let Ut=k.programs;k.environment=T.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(T.isMeshStandardMaterial?q:w).get(T.envMap||k.environment),Ut===void 0&&(T.addEventListener("dispose",xt),Ut=new Map,k.programs=Ut);let St=Ut.get(mt);if(St!==void 0){if(k.currentProgram===St&&k.lightsStateVersion===ct)return tt(T,Z),St}else Z.uniforms=Pt.getUniforms(T),T.onBuild(V,Z,M),T.onBeforeCompile(Z,M),St=Pt.acquireProgram(Z,mt),Ut.set(mt,St),k.uniforms=Z.uniforms;const gt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(gt.clippingPlanes=Yt.uniform),tt(T,Z),k.needsLights=re(T),k.lightsStateVersion=ct,k.needsLights&&(gt.ambientLightColor.value=G.state.ambient,gt.lightProbe.value=G.state.probe,gt.directionalLights.value=G.state.directional,gt.directionalLightShadows.value=G.state.directionalShadow,gt.spotLights.value=G.state.spot,gt.spotLightShadows.value=G.state.spotShadow,gt.rectAreaLights.value=G.state.rectArea,gt.ltc_1.value=G.state.rectAreaLTC1,gt.ltc_2.value=G.state.rectAreaLTC2,gt.pointLights.value=G.state.point,gt.pointLightShadows.value=G.state.pointShadow,gt.hemisphereLights.value=G.state.hemi,gt.directionalShadowMap.value=G.state.directionalShadowMap,gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,gt.spotShadowMap.value=G.state.spotShadowMap,gt.spotLightMatrix.value=G.state.spotLightMatrix,gt.spotLightMap.value=G.state.spotLightMap,gt.pointShadowMap.value=G.state.pointShadowMap,gt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.currentProgram=St,k.uniformsList=null,St}function z(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Sr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function tt(T,N){const V=qt.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function It(T,N,V,k,G){N.isScene!==!0&&(N=Ft),D.resetTextureUnits();const et=N.fog,ct=k.isMeshStandardMaterial?N.environment:null,Z=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hi,mt=(k.isMeshStandardMaterial?q:w).get(k.envMap||ct),Ut=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,St=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),gt=!!V.morphAttributes.position,Ot=!!V.morphAttributes.normal,Be=!!V.morphAttributes.color;let Se=ci;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Se=M.toneMapping);const He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=He!==void 0?He.length:0,Lt=qt.get(k),ui=m.state.lights;if(at===!0&&(Et===!0||T!==b)){const Sn=T===b&&k.id===W;Yt.setState(k,T,Sn)}let ue=!1;k.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ui.state.version||Lt.outputColorSpace!==Z||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||Lt.envMap!==mt||k.fog===!0&&Lt.fog!==et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Yt.numPlanes||Lt.numIntersection!==Yt.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==St||Lt.morphTargets!==gt||Lt.morphNormals!==Ot||Lt.morphColors!==Be||Lt.toneMapping!==Se||Vt.isWebGL2===!0&&Lt.morphTargetsCount!==$t)&&(ue=!0):(ue=!0,Lt.__version=k.version);let Pn=Lt.currentProgram;ue===!0&&(Pn=A(k,N,G));let Ln=!1,Vn=!1,oa=!1;const Je=Pn.getUniforms(),Li=Lt.uniforms;if(Ct.useProgram(Pn.program)&&(Ln=!0,Vn=!0,oa=!0),k.id!==W&&(W=k.id,Vn=!0),Ln||b!==T){Je.setValue(j,"projectionMatrix",T.projectionMatrix),Je.setValue(j,"viewMatrix",T.matrixWorldInverse);const Sn=Je.map.cameraPosition;Sn!==void 0&&Sn.setValue(j,Xt.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&Je.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Je.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Vn=!0,oa=!0)}if(G.isSkinnedMesh){Je.setOptional(j,G,"bindMatrix"),Je.setOptional(j,G,"bindMatrixInverse");const Sn=G.skeleton;Sn&&(Vt.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Je.setValue(j,"boneTexture",Sn.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Je.setOptional(j,G,"batchingTexture"),Je.setValue(j,"batchingTexture",G._matricesTexture,D));const ra=V.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&Vt.isWebGL2===!0)&&ee.update(G,V,Pn),(Vn||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,Je.setValue(j,"receiveShadow",G.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Li.envMap.value=mt,Li.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),Vn&&(Je.setValue(j,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&Tt(Li,oa),et&&k.fog===!0&&vt.refreshFogUniforms(Li,et),vt.refreshMaterialUniforms(Li,k,Q,J,wt),Sr.upload(j,z(Lt),Li,D)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sr.upload(j,z(Lt),Li,D),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Je.setValue(j,"center",G.center),Je.setValue(j,"modelViewMatrix",G.modelViewMatrix),Je.setValue(j,"normalMatrix",G.normalMatrix),Je.setValue(j,"modelMatrix",G.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Sn=k.uniformsGroups;for(let aa=0,vu=Sn.length;aa<vu;aa++)if(Vt.isWebGL2){const Jc=Sn[aa];de.update(Jc,Pn),de.bind(Jc,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Tt(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function re(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,V){qt.get(T.texture).__webglTexture=N,qt.get(T.depthTexture).__webglTexture=V;const k=qt.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const V=qt.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,V=0){I=T,O=N,R=V;let k=!0,G=null,et=!1,ct=!1;if(T){const mt=qt.get(T);mt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(j.FRAMEBUFFER,null),k=!1):mt.__webglFramebuffer===void 0?D.setupRenderTarget(T):mt.__hasExternalTextures&&D.rebindTextures(T,qt.get(T.texture).__webglTexture,qt.get(T.depthTexture).__webglTexture);const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const St=qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(St[N])?G=St[N][V]:G=St[N],et=!0):Vt.isWebGL2&&T.samples>0&&D.useMultisampledRTT(T)===!1?G=qt.get(T).__webglMultisampledFramebuffer:Array.isArray(St)?G=St[V]:G=St,P.copy(T.viewport),X.copy(T.scissor),K=T.scissorTest}else P.copy(st).multiplyScalar(Q).floor(),X.copy(ut).multiplyScalar(Q).floor(),K=pt;if(Ct.bindFramebuffer(j.FRAMEBUFFER,G)&&Vt.drawBuffers&&k&&Ct.drawBuffers(T,G),Ct.viewport(P),Ct.scissor(X),Ct.setScissorTest(K),et){const mt=qt.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,V)}else if(ct){const mt=qt.get(T.texture),Ut=N||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,mt.__webglTexture,V||0,Ut)}W=-1},this.readRenderTargetPixels=function(T,N,V,k,G,et,ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(Z=Z[ct]),Z){Ct.bindFramebuffer(j.FRAMEBUFFER,Z);try{const mt=T.texture,Ut=mt.format,St=mt.type;if(Ut!==Fn&&At.convert(Ut)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=St===vo&&(Bt.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(St!==Ti&&At.convert(St)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===bi&&(Vt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&V>=0&&V<=T.height-G&&j.readPixels(N,V,k,G,At.convert(Ut),At.convert(St),et)}finally{const mt=I!==null?qt.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(T,N,V=0){const k=Math.pow(2,-V),G=Math.floor(N.image.width*k),et=Math.floor(N.image.height*k);D.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,V,0,0,T.x,T.y,G,et),Ct.unbindTexture()},this.copyTextureToTexture=function(T,N,V,k=0){const G=N.image.width,et=N.image.height,ct=At.convert(V.format),Z=At.convert(V.type);D.setTexture2D(V,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,V.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,k,T.x,T.y,G,et,ct,Z,N.image.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,k,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,ct,N.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,k,T.x,T.y,ct,Z,N.image),k===0&&V.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V,k,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const et=T.max.x-T.min.x+1,ct=T.max.y-T.min.y+1,Z=T.max.z-T.min.z+1,mt=At.convert(k.format),Ut=At.convert(k.type);let St;if(k.isData3DTexture)D.setTexture3D(k,0),St=j.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)D.setTexture2DArray(k,0),St=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,k.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,k.unpackAlignment);const gt=j.getParameter(j.UNPACK_ROW_LENGTH),Ot=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Be=j.getParameter(j.UNPACK_SKIP_PIXELS),Se=j.getParameter(j.UNPACK_SKIP_ROWS),He=j.getParameter(j.UNPACK_SKIP_IMAGES),$t=V.isCompressedTexture?V.mipmaps[G]:V.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,$t.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$t.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,T.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,T.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?j.texSubImage3D(St,G,N.x,N.y,N.z,et,ct,Z,mt,Ut,$t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(St,G,N.x,N.y,N.z,et,ct,Z,mt,$t.data)):j.texSubImage3D(St,G,N.x,N.y,N.z,et,ct,Z,mt,Ut,$t),j.pixelStorei(j.UNPACK_ROW_LENGTH,gt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Be),j.pixelStorei(j.UNPACK_SKIP_ROWS,Se),j.pixelStorei(j.UNPACK_SKIP_IMAGES,He),G===0&&k.generateMipmaps&&j.generateMipmap(St),Ct.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){O=0,R=0,I=null,Ct.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Vc?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===Vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Ji:Cd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ji?$e:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class C_ extends Zd{}C_.prototype.isWebGL1Renderer=!0;class qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R_ extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class P_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new U;class Nr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),o=be(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ur extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const Qs=new U,ys=new U,Ms=new U,Es=new te,to=new te,Kd=new Te,qo=new U,eo=new U,jo=new U,vh=new te,ka=new te,xh=new te;class Ac extends Xe{constructor(t=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new pn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new P_(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Nr(n,3,0,!1)),xs.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new te(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const a=this.center;Zo(qo.set(-.5,-.5,0),Ms,a,ys,i,o),Zo(eo.set(.5,-.5,0),Ms,a,ys,i,o),Zo(jo.set(.5,.5,0),Ms,a,ys,i,o),vh.set(0,0),ka.set(1,0),xh.set(1,1);let r=t.ray.intersectTriangle(qo,eo,jo,!1,Qs);if(r===null&&(Zo(eo.set(-.5,.5,0),Ms,a,ys,i,o),ka.set(0,1),r=t.ray.intersectTriangle(qo,jo,eo,!1,Qs),r===null))return;const c=t.ray.origin.distanceTo(Qs);c<t.near||c>t.far||e.push({distance:c,point:Qs.clone(),uv:xn.getInterpolation(Qs,qo,eo,jo,vh,ka,xh,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zo(s,t,e,n,i,o){Es.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(to.x=o*Es.x-i*Es.y,to.y=i*Es.x+o*Es.y):to.copy(Es),s.copy(t),s.x+=to.x,s.y+=to.y,s.applyMatrix4(Kd)}class yh extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new Te,Mh=new Te,Ko=[],Eh=new es,L_=new Te,no=new Qt,io=new ns;class I_ extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new es),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Eh.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),io.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),t.ray.intersectsSphere(io)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Ss),Mh.multiplyMatrices(n,Ss),no.matrixWorld=Mh,no.raycast(t,Ko);for(let a=0,r=Ko.length;a<r;a++){const c=Ko[a];c.instanceId=o,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $d extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sh=new U,bh=new U,Ah=new Te,Fa=new Wr,$o=new ns;class D_ extends Xe{constructor(t=new pn,e=new $d){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Sh.fromBufferAttribute(e,i-1),bh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sh.distanceTo(bh);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=o,t.ray.intersectsSphere($o)===!1)return;Ah.copy(i).invert(),Fa.copy(t.ray).applyMatrix4(Ah);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new U,h=new U,d=new U,g=new U,v=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const f=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let M=f,S=E-1;M<S;M+=v){const O=p.getX(M),R=p.getX(M+1);if(l.fromBufferAttribute(m,O),h.fromBufferAttribute(m,R),Fa.distanceSqToSegment(l,h,g,d)>c)continue;g.applyMatrix4(this.matrixWorld);const W=t.ray.origin.distanceTo(g);W<t.near||W>t.far||e.push({distance:W,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let M=f,S=E-1;M<S;M+=v){if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,M+1),Fa.distanceSqToSegment(l,h,g,d)>c)continue;g.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(g);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}const Th=new U,wh=new U;class O_ extends D_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Th.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(wh);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ch=new Te,wc=new Wr,Jo=new ns,Qo=new U;class Rh extends Xe{constructor(t=new pn,e=new Tc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=o,t.ray.intersectsSphere(Jo)===!1)return;Ch.copy(i).invert(),wc.copy(t.ray).applyMatrix4(Ch);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,d=n.attributes.position;if(l!==null){const g=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let p=g,_=v;p<_;p++){const m=l.getX(p);Qo.fromBufferAttribute(d,m),Ph(Qo,m,c,i,t,e,this)}}else{const g=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let p=g,_=v;p<_;p++)Qo.fromBufferAttribute(d,p),Ph(Qo,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Ph(s,t,e,n,i,o,a){const r=wc.distanceSqToPoint(s);if(r<e){const c=new U;wc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}class Gs extends an{constructor(t,e,n,i,o,a,r,c,l){super(t,e,n,i,o,a,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const tr=new U,er=new U,za=new U,nr=new xn;class N_ extends pn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),o=Math.cos(Er*e),a=t.getIndex(),r=t.getAttribute("position"),c=a?a.count:r.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),g={},v=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:f}=nr;if(_.fromBufferAttribute(r,l[0]),m.fromBufferAttribute(r,l[1]),f.fromBufferAttribute(r,l[2]),nr.getNormal(za),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const M=(E+1)%3,S=d[E],O=d[M],R=nr[h[E]],I=nr[h[M]],W=`${S}_${O}`,b=`${O}_${S}`;b in g&&g[b]?(za.dot(g[b].normal)<=o&&(v.push(R.x,R.y,R.z),v.push(I.x,I.y,I.z)),g[b]=null):W in g||(g[W]={index0:l[E],index1:l[M],normal:za.clone()})}}for(const p in g)if(g[p]){const{index0:_,index1:m}=g[p];tr.fromBufferAttribute(r,_),er.fromBufferAttribute(r,m),v.push(tr.x,tr.y,tr.z),v.push(er.x,er.y,er.z)}this.setAttribute("position",new En(v,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rn extends pn{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let l=0;const h=[],d=new U,g=new U,v=[],p=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],M=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const R=O/e;d.x=-t*Math.cos(i+R*o)*Math.sin(a+M*r),d.y=t*Math.cos(a+M*r),d.z=t*Math.sin(i+R*o)*Math.sin(a+M*r),p.push(d.x,d.y,d.z),g.copy(d).normalize(),_.push(g.x,g.y,g.z),m.push(R+S,1-M),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const M=h[f][E+1],S=h[f][E],O=h[f+1][E],R=h[f+1][E+1];(f!==0||a>0)&&v.push(M,S,R),(f!==n-1||c<Math.PI)&&v.push(S,O,R)}this.setIndex(v),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ie extends Pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jr extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class U_ extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ha=new Te,Lh=new U,Ih=new U;class Jd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dh=new Te,so=new U,Ga=new U;class B_ extends Jd{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),so.setFromMatrixPosition(t.matrixWorld),n.position.copy(so),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-so.x,-so.y,-so.z),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh)}}class Oh extends jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new B_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class k_ extends Jd{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qd extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new k_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class F_ extends jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zr{constructor(t,e,n=0,i=1/0){this.ray=new Wr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Cc(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Cc(t[i],this,n,e);return n.sort(Nh),n}}function Nh(s,t){return s.distance-t.distance}function Cc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let o=0,a=i.length;o<a;o++)Cc(i[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const mo=16,z_=256,H_=256,G_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let Rc=null,ir=null;function V_(){return ir||(ir=new Promise(s=>{const t=new Image;t.onload=()=>{const e=new an(t);e.magFilter=Ne,e.minFilter=Ne,e.generateMipmaps=!1,e.needsUpdate=!0,Rc=e,s()},t.onerror=()=>{console.warn("Atlas load failed"),s()},t.src=G_}),ir)}function W_(s,t){if(!Rc)return X_(s,t);const e=Rc.clone();e.needsUpdate=!0;const n=mo/z_,i=mo/H_;return e.offset.set(s*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=Mn,e.wrapT=Mn,e}function X_(s,t){const e=document.createElement("canvas");e.width=e.height=mo;const n=e.getContext("2d"),i=(s*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,mo,mo);const o=new Gs(e);return o.magFilter=Ne,o.minFilter=Ne,o}function Y_(s,t,e={}){const n=W_(s,t),i=new Ie({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:li});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const q_=[0,0],sr=[1,0],Uh=[2,0],Va=[3,0],j_=[4,0],or=[5,0],Bh=[6,0],Z_=[7,0],kh=[9,0],K_=[10,0],$_=[11,0],J_=[12,0],Q_=[13,0],tv=[14,0],ev=[15,0],nv=[0,1],iv=[1,1],sv=[2,1],ov=[3,1],rv=[4,1],av=[5,1],cv=[6,1],rr=[7,1],Fh=[8,1],lv=[9,1],hv=[10,1],dv=[11,1],uv=[12,1],fv=[13,1],Wa=[14,1],pv=[15,1],ar=[0,2],zh=[1,2],cr=[2,2],mv=[3,2],gv=[6,2],Xa=new Map;function se(s,t,e={}){const n=`${s},${t},${JSON.stringify(e)}`;if(Xa.has(n))return Xa.get(n);const i=Y_(s,t,e);return Xa.set(n,i),i}let Yi=null,Ds=null,lr=null;function tu(s,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;s.fillStyle="#1a5fa0",s.fillRect(0,0,16,16),s.fillStyle=`rgba(40,130,210,${.45+e*.3})`,s.fillRect(0,Math.round(e*9),16,3),s.fillStyle=`rgba(80,160,240,${.2+n*.2})`,s.fillRect(0,Math.round(n*5)+6,16,2),s.fillStyle=`rgba(180,220,255,${.06+e*.06})`,s.fillRect(Math.round(n*10),0,4,16)}function _v(){if(lr)return lr;Yi=document.createElement("canvas"),Yi.width=Yi.height=16;const s=Yi.getContext("2d");return tu(s,0),Ds=new Gs(Yi),Ds.magFilter=Ne,Ds.minFilter=Ne,lr=new Ie({map:Ds,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:qn}),lr}function vv(s){!Yi||!Ds||(tu(Yi.getContext("2d"),s),Ds.needsUpdate=!0)}function xv(s,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(s){case 1:return[se(...sr,n),se(...sr,n),se(...q_,n),se(...Uh,n),se(...sr,n),se(...sr,n)];case 2:return Oe(Uh,n);case 3:return Oe(Va,n);case 4:return Oe(j_,n);case 5:return[se(...or,n),se(...or,n),se(...Bh,n),se(...Bh,n),se(...or,n),se(...or,n)];case 6:return Oe(Z_,{transparent:!0,alphaTest:.5});case 7:{const i=_v();return[i,i,i,i,i,i]}case 8:return Oe(Q_,n);case 9:return Oe(J_,{transparent:!0,opacity:.6});case 10:return Oe(kh,n);case 11:return Oe(K_,n);case 12:return Oe($_,n);case 13:return Oe(nv,n);case 14:return Oe(iv,n);case 15:return Oe(sv,n);case 16:return Oe(tv,n);case 17:return Oe(uv,n);case 18:return Oe(lv,n);case 19:return Oe(rv,{emissive:16755200});case 20:return Oe(av,n);case 21:return Oe(cv,{transparent:!0,opacity:.7});case 22:return[se(...cr,n),se(...cr,n),se(...ev,n),se(...kh,n),se(...cr,n),se(...cr,n)];case 23:return[se(...fv,n),se(...Wa,n),se(...pv,n),se(...Va,n),se(...Wa,n),se(...Wa,n)];case 24:return[se(...rr,n),se(...rr,n),se(...Fh,n),se(...Fh,n),se(...rr,n),se(...rr,n)];case 26:return Oe(hv,n);case 27:return Oe(dv,n);case 47:return Oe(gv,{emissive:16729088});case 49:return[se(...ar,n),se(...ar,n),se(...zh,n),se(...zh,n),se(...ar,n),se(...ar,n)];case 54:return Oe(mv,n);case 61:return Oe(ov,n);default:{const i=se(...Va,n);return[i,i,i,i,i,i]}}}function Oe(s,t={}){const e=se(s[0],s[1],t);return[e,e,e,e,e,e]}const eu=Math.sqrt(3),yv=.5*(eu-1),oo=(3-eu)/6,Hh=s=>Math.floor(s)|0,Gh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Nn(s=Math.random){const t=Mv(s),e=new Float64Array(t).map(i=>Gh[i%12*2]),n=new Float64Array(t).map(i=>Gh[i%12*2+1]);return function(o,a){let r=0,c=0,l=0;const h=(o+a)*yv,d=Hh(o+h),g=Hh(a+h),v=(d+g)*oo,p=d-v,_=g-v,m=o-p,f=a-_;let E,M;m>f?(E=1,M=0):(E=0,M=1);const S=m-E+oo,O=f-M+oo,R=m-1+2*oo,I=f-1+2*oo,W=d&255,b=g&255;let P=.5-m*m-f*f;if(P>=0){const ot=W+t[b],F=e[ot],Y=n[ot];P*=P,r=P*P*(F*m+Y*f)}let X=.5-S*S-O*O;if(X>=0){const ot=W+E+t[b+M],F=e[ot],Y=n[ot];X*=X,c=X*X*(F*S+Y*O)}let K=.5-R*R-I*I;if(K>=0){const ot=W+1+t[b+1],F=e[ot],Y=n[ot];K*=K,l=K*K*(F*R+Y*I)}return 70*(r+c+l)}}function Mv(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),o=e[n];e[n]=e[i],e[i]=o}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const Kr={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},89:{name:"Snowball",color:15658751,solid:!1},90:{name:"Egg",color:15786176,solid:!1},91:{name:"Strength Potion",color:16729156,solid:!1},92:{name:"Speed Potion",color:4500223,solid:!1},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1}},Ui=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function jn(s){var t;return((t=Kr[s])==null?void 0:t.name)??"Unknown"}function Os(s){var t;return((t=Kr[s])==null?void 0:t.color)??16777215}const Wn=16,ro=62,Ev=4096,Sv=4096,bv=8192,Av=8192*256;function we(s,t,e){return s+Ev+t*bv+(e+Sv)*Av}function Vh(s,t,e){return`${s},${t},${e}`}const ae=class ae{constructor(t){C(this,"scene");C(this,"instancedMeshes",new Map);C(this,"instanceCount",new Map);C(this,"_dirtyMeshes",new Set);C(this,"instanceIndex",new Map);C(this,"instanceRevIndex",new Map);C(this,"blockData",new Map);C(this,"generatedChunks",new Set);C(this,"modifications",new Map);C(this,"chestContents",new Map);C(this,"nH1",Nn(()=>.31415));C(this,"nH2",Nn(()=>.62831));C(this,"nH3",Nn(()=>.94247));C(this,"nH4",Nn(()=>.12566));C(this,"nBio",Nn(()=>.78539));C(this,"nCv1",Nn(()=>.52359));C(this,"nCv2",Nn(()=>.20943));C(this,"nOre",Nn(()=>.41887));C(this,"noise2D",Nn(()=>.69813));C(this,"noise2D2",Nn(()=>.87964));C(this,"biomeNoise",Nn(()=>.78539));C(this,"torchLights",new Map);C(this,"torchLightQueue",[]);C(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),o=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,r=this.nH4(t*.016,e*.016)*.125,l=((i+o+a+r)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),o=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(o)<.1}generateChunkRaw(t,e,n,i){for(let o=0;o<Wn;o++)for(let a=0;a<Wn;a++){const r=t*Wn+o,c=e*Wn+a,l=this.getHeight(r,c),h=this.getBiome(r,c),d=h!==4&&l>=ro-2&&l<=ro+2,g=(v,p)=>{n.set(we(r,v,c),p),i.push([r,v,c])};for(let v=0;v<=l;v++){if(v>4&&v<l-1&&this.isCave(r,v,c))continue;let p;if(v<=4?p=3:h===1||d?p=v>=l-3?4:3:h===4?p=v===l?12:v===l-1?4:3:v===l?p=h===3&&l>100?20:1:v>=l-4?p=2:p=3,p===3&&v<l-4){const _=this.nOre(r*.16+v*.11,c*.16);v<=16&&_>.76?p=61:v<=32&&_>.68?p=13:v<=64&&_>.6?p=14:v<=128&&_>.54&&(p=15)}g(v,p)}if(l<ro)for(let v=l+1;v<=ro;v++)g(v,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<Wn;i++)for(let o=0;o<Wn;o++){const a=t*Wn+i,r=e*Wn+o,c=this.getHeight(a,r),l=this.getBiome(a,r);if(c<=ro)continue;const h=Math.random();l===0?h<.02?this.placeBlock(a,c+1,r,51,!1):h<.03&&this.placeTree(a,c+1,r):l===1?h<.03?this.placeBlock(a,c+1,r,50,!1):h<.05&&this.placeBlock(a,c+1,r,52,!1):l===2?h<.09?this.placeTree(a,c+1,r):h<.12&&this.placeBlock(a,c+1,r,51,!1):l===3&&c<100&&h<.03&&this.placeTree(a,c+1,r)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const o=e+i;for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(r)===2&&c<1||a===0&&r===0&&c<2||this.placeBlock(t+a,o+c,n+r,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){const a=`${i},${o}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,o,e,n))}for(const[i,o,a]of n){const r=we(i,o,a),c=e.get(r);if(!ae.isOpaque(c)){this.placeBlock(i,o,a,c,!1);continue}!ae.isOpaque(e.get(we(i+1,o,a))??0)||!ae.isOpaque(e.get(we(i-1,o,a))??0)||!ae.isOpaque(e.get(we(i,o+1,a))??0)||!ae.isOpaque(e.get(we(i,o-1,a))??0)||!ae.isOpaque(e.get(we(i,o,a+1))??0)||!ae.isOpaque(e.get(we(i,o,a-1))??0)?this.placeBlock(i,o,a,c,!1):this.blockData.set(r,c)}for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){const a=`${i},${o}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,o,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/Wn),o=Math.floor(e/Wn);let a=0,r=0,c=1/0,l=!1;for(let p=i-3;p<=i+3;p++)for(let _=o-3;_<=o+3;_++){if(this.generatedChunks.has(`${p},${_}`))continue;const m=(p-i)*(p-i)+(_-o)*(_-o);m<c&&(c=m,a=p,r=_,l=!0)}if(!l)return;const h=`${a},${r}`;this.generatedChunks.add(h);const d=new Map,g=[];this.generateChunkRaw(a,r,d,g);for(const[p,_,m]of g){const f=we(p,_,m),E=d.get(f);if(!ae.isOpaque(E)){this.placeBlock(p,_,m,E,!1);continue}const M=(O,R,I)=>d.get(we(O,R,I))??this.blockData.get(we(O,R,I))??0;!ae.isOpaque(M(p+1,_,m))||!ae.isOpaque(M(p-1,_,m))||!ae.isOpaque(M(p,_+1,m))||!ae.isOpaque(M(p,_-1,m))||!ae.isOpaque(M(p,_,m+1))||!ae.isOpaque(M(p,_,m-1))?this.placeBlock(p,_,m,E,!1):this.blockData.set(f,E)}const v=`${a},${r}_dec`;this.generatedChunks.has(v)||(this.generatedChunks.add(v),this.generateChunkDecorations(a,r,d))}static isOpaque(t){return t>0&&!ae.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return ae.sharedBoxGeo||(ae.sharedBoxGeo=new Ce(1,1,1)),ae.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=Kr[t],n=xv(t,e??{}),i=n.length===1?n[0]:n,o=new I_(ae.getBoxGeo(),i,ae.MAX_INSTANCES);return o.instanceMatrix.setUsage(Mf),o.count=0,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,t===7&&(o.renderOrder=1),this.scene.add(o),this.instancedMeshes.set(t,o),this.instanceCount.set(t,0),o}placeBlock(t,e,n,i,o=!0){const a=we(t,e,n);if(!o&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const r=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=ae.MAX_INSTANCES)return;const l=i===7?.375:.5;ae._mat4.setPosition(t+.5,e+l,n+.5),r.setMatrixAt(c,ae._mat4),r.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),o&&this.modifications.set(Vh(t,e,n),i)}removeBlock(t,e,n){const i=we(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(Vh(t,e,n),0);const o=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,r,c]of o){const l=we(a,r,c),h=this.blockData.get(l);h===void 0||h===0||this.instanceIndex.has(l)||this._addBlockMesh(a,r,c,h)}return!0}_addBlockMesh(t,e,n,i){const o=we(t,e,n);if(this.instanceIndex.has(o))return;const a=this.getOrCreateInstancedMesh(i),r=this.instanceCount.get(i)??0;r>=ae.MAX_INSTANCES||(ae._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(r,ae._mat4),a.count=r+1,this._dirtyMeshes.add(i),this.instanceIndex.set(o,r),this.instanceRevIndex.set(`${i}:${r}`,o),this.instanceCount.set(i,r+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,ae._mat4),n.setMatrixAt(i,ae._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const r=a;n.count=r,this.instanceCount.set(e,r),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(we(t,e,n))}getBlockType(t,e,n){return this.blockData.get(we(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(we(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,o){for(let a=-o;a<=o;a++)for(let r=-o;r<=o;r++)for(let c=-o;c<=o;c++)if(this.blockData.get(we(t+a,e+r,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z);const r=e.x,c=e.y,l=e.z,h=r>0?1:r<0?-1:0,d=c>0?1:c<0?-1:0,g=l>0?1:l<0?-1:0,v=h!==0?Math.abs(1/r):1/0,p=d!==0?Math.abs(1/c):1/0,_=g!==0?Math.abs(1/l):1/0;let m=h>0?(i+1-t.x)*v:h<0?(t.x-i)*v:1/0,f=d>0?(o+1-t.y)*p:d<0?(t.y-o)*p:1/0,E=g>0?(a+1-t.z)*_:g<0?(t.z-a)*_:1/0,M=0,S=0,O=0;const R=Math.ceil(n*3)+2;for(let I=0;I<R;I++){if(this.blockData.has(we(i,o,a)))return{x:i,y:o,z:a,face:ae._rayFace.set(M,S,O)};if(m<f)if(m<E){if(m>n)return null;i+=h,M=-h,S=0,O=0,m+=v}else{if(E>n)return null;a+=g,M=0,S=0,O=-g,E+=_}else if(f<E){if(f>n)return null;o+=d,M=0,S=-d,O=0,f+=p}else{if(E>n)return null;a+=g,M=0,S=0,O=-g,E+=_}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const o=this.blockData.get(we(t,i,e));if(o!==void 0&&!n.has(o))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let o=-n;o<=n;o++)for(let a=-n;a<=n;a++){const r=this.getSurfaceHeight(t+o,e+a);r>i&&(i=r)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const o=`${t},${e},${n}`;this.chestContents.set(o,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[o,a]of i){const r=t+o,c=e+a,l=this.getSurfaceHeight(r,c);this.placeHouse(r,l,c,8,5,6)}}placeHouse(t,e,n,i,o,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let d=0;d<o;d++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+d,n+h,10,!1);const r=t+Math.floor(i/2);this.removeBlock(r,e+2,n),this.removeBlock(r,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+o,n+h,10,!1);this.placeBlock(r+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let o=0;o<3;o++)(i!==1||o!==1)&&this.placeBlock(t+i-1,e+1,n+o-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,o=5;for(let r=-4;r<=4;r++)for(let c=0;c<o;c++)for(let l=-4;l<=4;l++){const h=t+r,d=i+c,g=e+l,v=Math.abs(r)===4||Math.abs(l)===4,p=c===0,_=c===o-1;if(v||p||_){const m=Math.random()<.3?82:81;this.placeBlock(h,d,g,m,!0)}else this.removeBlock(h,d,g)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[r,c]of a){const l=i+1;this.placeBlock(r,l,c,31,!0);const h=[64,62,65,63,280,268,270,274,267,257,5,10,56,11,3],d=new Array(27).fill(0),g=Math.floor(Math.random()*8)+4,v=new Set;for(let p=0;p<g;p++){let _;do _=Math.floor(Math.random()*27);while(v.has(_));v.add(_),d[_]=h[Math.floor(Math.random()*h.length)]}this.setChestInventory(r,l,c,d)}for(let r=0;r<10;r++){const c=t-r,l=i+5+r,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),r>0&&this.removeBlock(c,l-1,h)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[o,a]of this.modifications.entries())e[o]=a;const n={};for(const[o,a]of this.chestContents.entries())a.some(r=>r!==0)&&(n[o]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(o){console.warn("Save failed:",o)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[o,a,r]=n.split(",").map(Number);i===0?this.removeBlock(o,a,r):this.placeBlock(o,a,r,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const o=`${t},${e},${n}`;if(this.torchLights.has(o))return;const a=new Oh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(o,a),this.torchLightQueue.push(o);this.torchLightQueue.length>50;){const r=this.torchLightQueue.shift();if(r){const c=this.torchLights.get(r);c&&(this.scene.remove(c),this.torchLights.delete(r))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,o=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=o}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,o=this.torchLights.get(i);if(o){this.scene.remove(o),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(we(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(we(t+r,e+c,n+l))===59&&this.activateLamp(t+r,e+c,n+l);else for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(we(t+r,e+c,n+l))===59&&this.deactivateLamp(t+r,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(we(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const r=new Oh(16737792,1.2,6);r.position.set(t,e,n),this.scene.add(r),this.redstoneLoights.set(i,r)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(we(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const r=this.redstoneLoights.get(i);r&&(this.scene.remove(r),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),o=Number(e),a=Number(n),r=Number(i);!isNaN(o)&&!isNaN(a)&&!isNaN(r)&&this.addTorchLight(o,a+.5,r)}}};C(ae,"MAX_INSTANCES",32e3),C(ae,"_mat4",new Te),C(ae,"_rayFace",new U),C(ae,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),C(ae,"sharedBoxGeo",null);let Pc=ae;const hr=4.5,Tv=1.6,dr=9,Wh=8.5,Xh=-28,ao=1.8,ur=.55,ln=1.62,wv=5,dn=class dn{constructor(t,e,n){C(this,"camera");C(this,"world");C(this,"scene");C(this,"position",new U(0,30,0));C(this,"velocity",new U);C(this,"onGround",!1);C(this,"gameMode","survival");C(this,"_forward",new U);C(this,"_right",new U);C(this,"_move",new U);C(this,"_rayDir",new U);C(this,"_highlightVec",new U);C(this,"_lastHit",null);C(this,"_lastHitFrame",-1);C(this,"_frameCount",0);C(this,"health",40);C(this,"maxHealth",40);C(this,"invincible",0);C(this,"spawnGrace",0);C(this,"armor",0);C(this,"speedBonus",0);C(this,"fallStartY",0);C(this,"wasOnGround",!1);C(this,"fallTracking",!1);C(this,"keys",{});C(this,"yaw",0);C(this,"pitch",0);C(this,"locked",!1);C(this,"chatOpen",!1);C(this,"flying",!1);C(this,"lastSpace",0);C(this,"inWater",!1);C(this,"wasInWater",!1);C(this,"waterTimer",0);C(this,"onLadder",!1);C(this,"swimStroke",0);C(this,"waterCameraTilt",0);C(this,"waterEntryVelocityDamp",1);C(this,"selectedBlockType",1);C(this,"raycaster",new Zr);C(this,"highlightMesh");C(this,"outlineMesh");C(this,"outlineOpacity",0);C(this,"outlineTarget",0);C(this,"_lastOutlineKey","");C(this,"breakProgress",0);C(this,"breakTarget",null);C(this,"breakIndicator",null);C(this,"isBreakingHeld",!1);C(this,"selfModel",null);C(this,"selfHead",null);C(this,"selfLA",null);C(this,"selfRA",null);C(this,"selfLL",null);C(this,"selfRL",null);C(this,"walkCycle",0);C(this,"prevXZ",new te);C(this,"thirdPerson",!1);C(this,"headBobPhase",0);C(this,"headBobIntensity",0);C(this,"cameraRoll",0);C(this,"currentFov",75);C(this,"fpArm",null);C(this,"fpArmGroup",null);C(this,"_armSwing",0);C(this,"_armSwingDir",1);C(this,"_armBob",0);C(this,"onPlaceBlock");C(this,"onBreakBlock");C(this,"onOpenChat");C(this,"onDied");C(this,"onHealthChanged");C(this,"onRightClick");C(this,"setDeathCause");C(this,"onWaterEnter");C(this,"onWaterExit");C(this,"_hitPoint",new U);C(this,"_hitNormal",new U);C(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});this.camera=t,this.world=e,this.scene=n;const i=new Ce(1.02,1.02,1.02),o=new di({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new Qt(i,o),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new N_(new Ce(1.005,1.005,1.005)),r=new $d({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new O_(a,r),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!dn._crackTextures){dn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const o=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let r=0;r<o*2;r++){const c=r/(o*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let r=0;r<e;r++){const c=2+Math.random()*12,l=2+Math.random()*12,h=c+(Math.random()-.5)*6,d=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(h,d),i.stroke()}}if(e>4){const r=i.createRadialGradient(8,8,4,8,8,10);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=r,i.fillRect(0,0,16,16)}const a=new Gs(n);a.magFilter=Ne,a.minFilter=Ne,dn._crackTextures.push(a)}}return dn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}isSneaking(){return(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new fe,this.camera.add(this.fpArmGroup);const t=new Ce(.12,.35,.12),e=new Ie({color:16764057}),n=new Qt(t,e);n.position.y=-.175;const i=new Ce(.11,.25,.11),o=new Qt(i,e);o.position.y=-.3,n.add(o);const a=new Ce(.135,.355,.135),r=new Ie({color:3364300,transparent:!0,opacity:.9}),c=new Qt(a,r);c.position.y=-.175,this.fpArm=new fe,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,o.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new fe,n=16764057,i=3364300,o=2245785,a=3351057,r=3346688,c=R=>new Ie({color:R}),l=(R,I,W,b)=>new Qt(new Ce(R,I,W),c(b)),h=(R,I,W,b)=>{const P=new fe,X=l(R,I,W,b);return X.position.y=-I/2,P.add(X),P},d=new fe;d.add(l(.5,.5,.5,n));const g=l(.52,.14,.52,r);g.position.y=.19,d.add(g),d.position.set(0,.75,0);const v=l(.6,.75,.35,i);v.position.y=0;const p=h(.25,.65,.25,i),_=h(.25,.65,.25,i),m=l(.24,.25,.24,n);m.position.y=-.575,p.children[0].add(m);const f=m.clone();_.children[0].add(f),p.position.set(-.43,.37,0),_.position.set(.43,.37,0);const E=h(.27,.75,.27,o),M=h(.27,.75,.27,o),S=l(.28,.2,.3,a);S.position.y=-.77,E.children[0].add(S);const O=S.clone();return M.children[0].add(O),E.position.set(-.175,-.375,0),M.position.set(.175,-.375,0),e.add(d,v,p,_,E,M),t.add(e),this.selfHead=d,this.selfLA=p,this.selfRA=_,this.selfLL=E,this.selfRL=M,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var o;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(o=this.onBreakBlock)==null||o.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const o=new Ce(1.002,1.002,1.002),a=new di({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new Qt(o,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),o=this.breakIndicator.material,a=dn.getCrackTexture(i);o.map!==a&&(o.map=a,o.opacity=.5+i*.06,o.needsUpdate=!0)}}placeBlock(){var r,c;(r=this.onRightClick)==null||r.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),o=t.blockZ+Math.round(e.z),a=this.position.y-ln;Math.abs(n-this.position.x)<ur+.3&&i>=a-.2&&i<=a+ao+.2&&Math.abs(o-this.position.z)<ur+.3||(this.world.placeBlock(n,i,o,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,o,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,wv);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var h,d,g,v;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-ln+ao/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(h=this.setDeathCause)==null||h.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(d=this.onWaterEnter)==null||d.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(g=this.onWaterExit)==null||g.call(this)));const o=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-ln+ao),i);this.onLadder=o===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const r=this.onLadder?0:this.inWater?-4:Xh;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const p=c-ln,_=Math.floor(p);for(let m=0;m<=2;m++){const f=_-m;if(this.footprintOverBlock(this.position.x,this.position.z,f)){const E=f+1+ln;if(c<=E+.02){if(this.fallTracking){const M=this.fallStartY-(f+1);M>5&&((v=this.setDeathCause)==null||v.call(this,"You fell"),this.takeDamage(Math.floor((M-5)*.75))),this.fallTracking=!1}this.position.y=E,this.velocity.y=0,l=!0}break}}l||(this.position.y=c)}else{const p=Math.floor(this.position.y-ln+ao+.05);this.footprintOverBlock(this.position.x,this.position.z,p)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-ln,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const p=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=p+ln+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=ur/2-.01;for(let o=0;o<3;o++){const a=Math.floor(t+(o-1)*i);for(let r=0;r<3;r++){const c=Math.floor(e+(r-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=ur/2-.01,o=Math.floor(e-ln+.05),a=Math.floor(e-ln+ao-.05);for(let r=o;r<=a;r++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const d=Math.floor(n+(h===0?-i:i)),g=this.world.getBlockType(l,r,d);if(g!==void 0&&g!==0&&g!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=dr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=dr*t);else{this.velocity.y+=Xh*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-ln);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+ln,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=Wh,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);const o=this.keys.ControlLeft&&this.gameMode==="survival",a=(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround;let r=o?hr*Tv:a?hr*.3:hr;if(this.gameMode==="creative"&&(r=this.flying?dr:hr*1.2),this.gameMode==="spectator"&&(r=dr*1.5),this.speedBonus>0&&(r*=1+this.speedBonus),this.inWater&&(r*=.6),i.lengthSq()>0){i.normalize().multiplyScalar(r*t);const c=this.position.x+i.x,l=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=c,this.position.z=l):(this.wallCollision(c,this.position.y,this.position.z)||(this.position.x=c),this.wallCollision(this.position.x,this.position.y,l)||(this.position.z=l))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=Wh,this.onGround=!1)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5;this.camera.position.set(e,this.position.y+.6,n),this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position),this.isSneaking()&&(this.camera.position.y-=.4);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",o=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(o-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const h=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,d=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=h,this.camera.position.y+=d}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const r=this.inWater?.06:0;this.waterCameraTilt+=(r-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=dn.BASE_FOV;i&&n>1&&(c=dn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=dn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-ln;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,o=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),o>.3?this.walkCycle+=t*Math.min(o,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),r=.65;this.selfLL&&(this.selfLL.rotation.x=a*r),this.selfRL&&(this.selfRL.rotation.x=-a*r),this.selfLA&&(this.selfLA.rotation.x=-a*r),this.selfRA&&(this.selfRA.rotation.x=a*r)}updateHighlight(){const t=this.raycast();if(t){const o=t.blockX+.5,a=t.blockY+.5,r=t.blockZ+.5;this.highlightMesh.position.set(o,a,r),this.highlightMesh.visible=!1,this.outlineMesh.position.set(o,a,r),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const o=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(o===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const o=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const r=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+o*.5,this.fpArm.rotation.z=.05+r,this.fpArm.position.y=-.28+o,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+ln+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};C(dn,"BASE_FOV",75),C(dn,"SPRINT_FOV",85),C(dn,"LANDING_FOV",70),C(dn,"_crackTextures",null);let Lc=dn;function Yh(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class Cv{constructor(t,e,n){C(this,"keys");C(this,"onBreak");C(this,"onPlace");C(this,"joyActive",!1);C(this,"joyId",-1);C(this,"joyOriginX",0);C(this,"joyOriginY",0);C(this,"joyEl");C(this,"joyThumbEl");C(this,"lookId",-1);C(this,"lookLastX",0);C(this,"lookLastY",0);C(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,i.addEventListener("touchstart",o=>{o.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const o of Array.from(i.changedTouches))o.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=o.identifier,this.joyOriginX=o.clientX,this.joyOriginY=o.clientY):this.lookId===-1&&(this.lookId=o.identifier,this.lookLastX=o.clientX,this.lookLastY=o.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var o;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const r=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(o=this.onLookDelta)==null||o.call(this,r,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const o of Array.from(i.changedTouches))o.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):o.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,o=e-this.joyOriginY,a=Math.sqrt(i*i+o*o),r=a>0?i/a:0,c=a>0?o/a:0,l=Math.min(a,42),h=r*l,d=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${d}px))`;const g=12;this.keys.KeyW=d<-g,this.keys.KeyS=d>g,this.keys.KeyA=h<-g,this.keys.KeyD=h>g}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rv(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),e}var nu={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Vs={},$r={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=t})($r);var Mo={},Ws={};Object.defineProperty(Ws,"__esModule",{value:!0});Ws.decode=Ws.encode=void 0;function js(s,t){if(this._offset=t,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function Pv(s,t,e){for(var n="",i=0,o=t,a=t+e;o<a;o++){var r=s.getUint8(o);if(!(r&128)){n+=String.fromCharCode(r);continue}if((r&224)===192){n+=String.fromCharCode((r&31)<<6|s.getUint8(++o)&63);continue}if((r&240)===224){n+=String.fromCharCode((r&15)<<12|(s.getUint8(++o)&63)<<6|(s.getUint8(++o)&63)<<0);continue}if((r&248)===240){i=(r&7)<<18|(s.getUint8(++o)&63)<<12|(s.getUint8(++o)&63)<<6|(s.getUint8(++o)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+r.toString(16))}return n}js.prototype._array=function(s){for(var t=new Array(s),e=0;e<s;e++)t[e]=this._parse();return t};js.prototype._map=function(s){for(var t="",e={},n=0;n<s;n++)t=this._parse(),e[t]=this._parse();return e};js.prototype._str=function(s){var t=Pv(this._view,this._offset,s);return this._offset+=s,t};js.prototype._bin=function(s){var t=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,t};js.prototype._parse=function(){var s=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,o=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),o=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+o)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,i+o;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,i+o;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),o=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+o);if(n===-1){i=this._view.getUint32(this._offset),o=this._view.getUint32(this._offset+4),this._offset+=8;var r=(i&3)*4294967296+o;return new Date(r*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Lv(s,t=0){var e=new js(s,t),n=e._parse();if(e._offset!==s.byteLength)throw new Error(s.byteLength-e._offset+" trailing bytes");return n}Ws.decode=Lv;var Iv=4294967296-1,Dv=17179869184-1;function Ov(s,t,e){for(var n=0,i=0,o=e.length;i<o;i++)n=e.charCodeAt(i),n<128?s.setUint8(t++,n):n<2048?(s.setUint8(t++,192|n>>6),s.setUint8(t++,128|n&63)):n<55296||n>=57344?(s.setUint8(t++,224|n>>12),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),s.setUint8(t++,240|n>>18),s.setUint8(t++,128|n>>12&63),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63))}function Nv(s){for(var t=0,e=0,n=0,i=s.length;n<i;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Cs(s,t,e){var n=typeof e,i=0,o=0,a=0,r=0,c=0,l=0;if(n==="string"){if(c=Nv(e),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(s.push(203),t.push({_float:e,_length:8,_offset:s.length}),9):e>=0?e<128?(s.push(e),1):e<256?(s.push(204,e),2):e<65536?(s.push(205,e>>8,e),3):e<4294967296?(s.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,r=e>>>0,s.push(207,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9):e>=-32?(s.push(e),1):e>=-128?(s.push(208,e),2):e>=-32768?(s.push(209,e>>8,e),3):e>=-2147483648?(s.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),r=e>>>0,s.push(211,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9);if(n==="object"){if(e===null)return s.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Cs(s,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),d=Math.floor(h/1e3),g=(h-d*1e3)*1e6;return d>=0&&g>=0&&d<=Dv?g===0&&d<=Iv?(s.push(214,255,d>>24,d>>16,d>>8,d),6):(a=d/4294967296,r=d&4294967295,s.push(215,255,g>>22,g>>14,g>>6,a,r>>24,r>>16,r>>8,r),10):(a=Math.floor(d/4294967296),r=d>>>0,s.push(199,12,255,g>>24,g>>16,g>>8,g,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:s.length}),l+c}if(typeof e.toJSON=="function")return Cs(s,t,e.toJSON());var v=[],p="",_=Object.keys(e);for(i=0,o=_.length;i<o;i++)p=_[i],e[p]!==void 0&&typeof e[p]!="function"&&v.push(p);if(c=v.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)p=v[i],l+=Cs(s,t,p),l+=Cs(s,t,e[p]);return l}if(n==="boolean")return s.push(e?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof e.toJSON=="function")return Cs(s,t,e.toJSON());throw new Error("Could not encode")}function Uv(s){var t=[],e=[],n=Cs(t,e,s),i=new ArrayBuffer(n),o=new DataView(i),a=0,r=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,d=0,g=0,v=t.length;g<v;g++)if(o.setUint8(r+g,t[g]),g+1===c){if(l=e[a],h=l._length,d=r+c,l._bin)for(var p=new Uint8Array(l._bin),_=0;_<h;_++)o.setUint8(d+_,p[_]);else l._str?Ov(o,d,l._str):l._float!==void 0&&o.setFloat64(d,l._float);a++,r+=h,e[a]&&(c=e[a]._offset)}return i}Ws.encode=Uv;var Jr={},Qr={},Bv=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},kv=Ue&&Ue.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Qr,"__esModule",{value:!0});Qr.WebSocketTransport=void 0;const Fv=kv(Bv),Ya=globalThis.WebSocket||Fv.default;class zv{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Ya(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Ya(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Ya.OPEN}}Qr.WebSocketTransport=zv;Object.defineProperty(Jr,"__esModule",{value:!0});Jr.Connection=void 0;const Hv=Qr;class Gv{constructor(){this.events={},this.transport=new Hv.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}Jr.Connection=Gv;var jc={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function t(n,i){const o=n[i++];for(var a="",r=0,c=i,l=i+o;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){r=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,r>=65536?(r-=65536,a+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):a+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+h.toString(16))}return a}s.utf8Read=t;function e(n=""){let i=0,o=0;for(let a=0,r=n.length;a<r;a++)i=n.charCodeAt(a),i<128?o+=1:i<2048?o+=2:i<55296||i>=57344?o+=3:(a++,o+=4);return o+1}s.utf8Length=e})(jc);var ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.getSerializer=ts.registerSerializer=void 0;const iu={};function Vv(s,t){iu[s]=t}ts.registerSerializer=Vv;function Wv(s){const t=iu[s];if(!t)throw new Error("missing serializer: "+s);return t}ts.getSerializer=Wv;var Eo={};Object.defineProperty(Eo,"__esModule",{value:!0});Eo.createNanoEvents=void 0;const Xv=()=>({emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(s,t){var e;return!((e=this.events[s])===null||e===void 0)&&e.push(t)||(this.events[s]=[t]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});Eo.createNanoEvents=Xv;var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.createSignal=Xs.EventEmitter=void 0;class su{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Xs.EventEmitter=su;function Yv(){const s=new su;function t(e){return s.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),s.remove(n)};s.register(n)},t.remove=e=>s.remove(e),t.invoke=(...e)=>s.invoke(...e),t.invokeAsync=(...e)=>s.invokeAsync(...e),t.clear=()=>s.clear(),t}Xs.createSignal=Yv;var Ic={exports:{}};(function(s,t){(function(e,n){n(t)})(Ue,function(e){var n=function(x,u){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,A){y.__proto__=A}||function(y,A){for(var z in A)Object.prototype.hasOwnProperty.call(A,z)&&(y[z]=A[z])},n(x,u)};function i(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");n(x,u);function y(){this.constructor=x}x.prototype=u===null?Object.create(u):(y.prototype=u.prototype,new y)}function o(x,u,y,A){var z=arguments.length,tt=z<3?u:A,It;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")tt=Reflect.decorate(x,u,y,A);else for(var Tt=x.length-1;Tt>=0;Tt--)(It=x[Tt])&&(tt=(z<3?It(tt):z>3?It(u,y,tt):It(u,y))||tt);return z>3&&tt&&Object.defineProperty(u,y,tt),tt}function a(x,u,y){if(arguments.length===2)for(var A=0,z=u.length,tt;A<z;A++)(tt||!(A in u))&&(tt||(tt=Array.prototype.slice.call(u,0,A)),tt[A]=u[A]);return x.concat(tt||Array.prototype.slice.call(u))}typeof SuppressedError=="function"&&SuppressedError;var r=255,c=213;e.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function x(u,y,A){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=u,this.setParent(y,A)}return x.prototype.setParent=function(u,y,A){var z=this;if(this.indexes||(this.indexes=this.ref instanceof me?this.ref._definition.indexes:{}),this.parent=u,this.parentIndex=A,!!y)if(this.root=y,this.ref instanceof me){var tt=this.ref._definition;for(var It in tt.schema){var Tt=this.ref[It];if(Tt&&Tt.$changes){var re=tt.indexes[It];Tt.$changes.setParent(this.ref,y,re)}}}else typeof this.ref=="object"&&this.ref.forEach(function(T,N){if(T instanceof me){var V=T.$changes,k=z.ref.$changes.indexes[N];V.setParent(z.ref,z.root,k)}})},x.prototype.operation=function(u){this.changes.set(--this.currentCustomOperation,u)},x.prototype.change=function(u,y){y===void 0&&(y=e.OPERATION.ADD);var A=typeof u=="number"?u:this.indexes[u];this.assertValidIndex(A,u);var z=this.changes.get(A);(!z||z.op===e.OPERATION.DELETE||z.op===e.OPERATION.TOUCH)&&this.changes.set(A,{op:z&&z.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:y,index:A}),this.allChanges.add(A),this.changed=!0,this.touchParents()},x.prototype.touch=function(u){var y=typeof u=="number"?u:this.indexes[u];this.assertValidIndex(y,u),this.changes.has(y)||this.changes.set(y,{op:e.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(u){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[u]]}else{var y=this.parent._definition,A=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(A)[0]}},x.prototype.getChildrenFilter=function(){var u=this.parent._definition.childFilters;return u&&u[this.parentIndex]},x.prototype.getValue=function(u){return this.ref.getByIndex(u)},x.prototype.delete=function(u){var y=typeof u=="number"?u:this.indexes[u];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(u," (").concat(y,")"));return}var A=this.getValue(y);this.changes.set(y,{op:e.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],A&&A.$changes&&(A.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(u,y){var A=this;u===void 0&&(u=!1),y===void 0&&(y=!1),this.ref instanceof me||this.changes.forEach(function(z){if(z.op===e.OPERATION.DELETE){var tt=A.ref.getIndex(z.index);delete A.indexes[tt]}}),this.changes.clear(),this.changed=u,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var u=this;this.changes.forEach(function(y){var A=u.getValue(y.index);A&&A.$changes&&A.$changes.discardAll()}),this.discard()},x.prototype.cache=function(u,y){this.caches[u]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(u,y){if(u===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x}();function h(x,u,y,A){return x[u]||(x[u]=[]),x[u].push(y),A==null||A.forEach(function(z,tt){return y(z,tt)}),function(){return g(x[u],x[u].indexOf(y))}}function d(x){var u=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(A,z){x.push({refId:u.$changes.refId,op:e.OPERATION.DELETE,field:z,value:void 0,previousValue:A}),y&&u.$changes.root.removeRef(A.$changes.refId)})}function g(x,u){if(u===-1||u>=x.length)return!1;for(var y=x.length-1,A=u;A<y;A++)x[A]=x[A+1];return x.length=y,!0}var v=function(x,u){var y=x.toString(),A=u.toString();return y<A?-1:y>A?1:0};function p(x){return x.$proxy=!0,x=new Proxy(x,{get:function(u,y){return typeof y!="symbol"&&!isNaN(y)?u.at(y):u[y]},set:function(u,y,A){if(typeof y!="symbol"&&!isNaN(y)){var z=Array.from(u.$items.keys()),tt=parseInt(z[y]||y);A==null?u.deleteAt(tt):u.setAt(tt,A)}else u[y]=A;return!0},deleteProperty:function(u,y){return typeof y=="number"?u.deleteAt(y):delete u[y],!0},has:function(u,y){return typeof y!="symbol"&&!isNaN(Number(y))?u.$items.has(Number(y)):Reflect.has(u,y)}}),x}var _=function(){function x(){for(var u=[],y=0;y<arguments.length;y++)u[y]=arguments[y];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,u)}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.is=function(u){return Array.isArray(u)||u.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(u){u===0?this.clear():this.splice(u,this.length-u)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var u=this,y=[],A=0;A<arguments.length;A++)y[A]=arguments[A];var z;return y.forEach(function(tt){z=u.$refId++,u.setAt(z,tt)}),z},x.prototype.pop=function(){var u=Array.from(this.$indexes.values()).pop();if(u!==void 0){this.$changes.delete(u),this.$indexes.delete(u);var y=this.$items.get(u);return this.$items.delete(u),y}},x.prototype.at=function(u){if(u=Math.trunc(u)||0,u<0&&(u+=this.length),!(u<0||u>=this.length)){var y=Array.from(this.$items.keys())[u];return this.$items.get(y)}},x.prototype.setAt=function(u,y){var A,z;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(u)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,u);var tt=(z=(A=this.$changes.indexes[u])===null||A===void 0?void 0:A.op)!==null&&z!==void 0?z:e.OPERATION.ADD;this.$changes.indexes[u]=u,this.$indexes.set(u,u),this.$items.set(u,y),this.$changes.change(u,tt)}},x.prototype.deleteAt=function(u){var y=Array.from(this.$items.keys())[u];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(u){return this.$changes.delete(u),this.$indexes.delete(u),this.$items.delete(u)},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var u,y=[],A=0;A<arguments.length;A++)y[A]=arguments[A];return new(x.bind.apply(x,a([void 0],(u=Array.from(this.$items.values())).concat.apply(u,y),!1)))},x.prototype.join=function(u){return Array.from(this.$items.values()).join(u)},x.prototype.reverse=function(){var u=this,y=Array.from(this.$items.keys()),A=Array.from(this.$items.values()).reverse();return A.forEach(function(z,tt){u.setAt(y[tt],z)}),this},x.prototype.shift=function(){var u=Array.from(this.$items.keys()),y=u.shift();if(y!==void 0){var A=this.$items.get(y);return this.$deleteAt(y),A}},x.prototype.slice=function(u,y){var A=new x;return A.push.apply(A,Array.from(this.$items.values()).slice(u,y)),A},x.prototype.sort=function(u){var y=this;u===void 0&&(u=v);var A=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(u);return z.forEach(function(tt,It){y.setAt(A[It],tt)}),this},x.prototype.splice=function(u,y){y===void 0&&(y=this.length-u);for(var A=[],z=2;z<arguments.length;z++)A[z-2]=arguments[z];for(var tt=Array.from(this.$items.keys()),It=[],Tt=u;Tt<u+y;Tt++)It.push(this.$items.get(tt[Tt])),this.$deleteAt(tt[Tt]);for(var Tt=0;Tt<A.length;Tt++)this.setAt(u+Tt,A[Tt]);return It},x.prototype.unshift=function(){for(var u=this,y=[],A=0;A<arguments.length;A++)y[A]=arguments[A];var z=this.length,tt=y.length,It=Array.from(this.$items.values());return y.forEach(function(Tt,re){u.setAt(re,Tt)}),It.forEach(function(Tt,re){u.setAt(tt+re,Tt)}),z+tt},x.prototype.indexOf=function(u,y){return Array.from(this.$items.values()).indexOf(u,y)},x.prototype.lastIndexOf=function(u,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(u,y)},x.prototype.every=function(u,y){return Array.from(this.$items.values()).every(u,y)},x.prototype.some=function(u,y){return Array.from(this.$items.values()).some(u,y)},x.prototype.forEach=function(u,y){Array.from(this.$items.values()).forEach(u,y)},x.prototype.map=function(u,y){return Array.from(this.$items.values()).map(u,y)},x.prototype.filter=function(u,y){return Array.from(this.$items.values()).filter(u,y)},x.prototype.reduce=function(u,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(u,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(u,y){return Array.from(this.$items.values()).find(u,y)},x.prototype.findIndex=function(u,y){return Array.from(this.$items.values()).findIndex(u,y)},x.prototype.fill=function(u,y,A){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(u,y,A){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(u,y){return Array.from(this.$items.values()).includes(u,y)},x.prototype.flatMap=function(u,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(u){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var u=Array.from(this.$items.values());return u.findLast.apply(u,arguments)},x.prototype.findLastIndex=function(){var u=Array.from(this.$items.values());return u.findLastIndex.apply(u,arguments)},x.prototype.with=function(u,y){var A=Array.from(this.$items.values());return A[u]=y,new(x.bind.apply(x,a([void 0],A,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(u){return Array.from(this.$items.values()).sort(u)},x.prototype.toSpliced=function(u,y){var A=Array.from(this.$items.values());return A.toSpliced.apply(A,arguments)},x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(u){return typeof u.toJSON=="function"?u.toJSON():u})},x.prototype.clone=function(u){var y;return u?y=new(x.bind.apply(x,a([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,a([void 0],this.map(function(A){return A.$changes?A.clone():A}),!1))),y},x}();function m(x){return x.$proxy=!0,x=new Proxy(x,{get:function(u,y){return typeof y!="symbol"&&typeof u[y]>"u"?u.get(y):u[y]},set:function(u,y,A){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?u.set(y,A):u[y]=A,!0},deleteProperty:function(u,y){return u.delete(y),!0}}),x}var f=function(){function x(u){var y=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u)if(u instanceof Map||u instanceof x)u.forEach(function(z,tt){return y.set(tt,z)});else for(var A in u)this.set(A,u[A])}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.is=function(u){return u.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(u,y){if(y==null)throw new Error("MapSchema#set('".concat(u,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(u,"'."));u=u.toString();var A=typeof this.$changes.indexes[u]<"u",z=A?this.$changes.indexes[u]:this.$refId++,tt=A?e.OPERATION.REPLACE:e.OPERATION.ADD,It=y.$changes!==void 0;if(It&&y.$changes.setParent(this,this.$changes.root,z),!A)this.$changes.indexes[u]=z,this.$indexes.set(z,u);else{if(!It&&this.$items.get(u)===y)return;It&&this.$items.get(u)!==y&&(tt=e.OPERATION.ADD)}return this.$items.set(u,y),this.$changes.change(u,tt),this},x.prototype.get=function(u){return this.$items.get(u)},x.prototype.delete=function(u){return this.$changes.delete(u.toString()),this.$items.delete(u)},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){return this.$items.has(u)},x.prototype.forEach=function(u){this.$items.forEach(u)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toJSON=function(){var u={};return this.forEach(function(y,A){u[A]=typeof y.toJSON=="function"?y.toJSON():y}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(A,z){A.$changes?y.set(z,A.clone()):y.set(z,A)})),y},x}(),E={};function M(x,u){E[x]=u}function S(x){return E[x]}var O=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(u){var y=new x;return y.schema=Object.assign({},u&&u.schema||{}),y.indexes=Object.assign({},u&&u.indexes||{}),y.fieldsByIndex=Object.assign({},u&&u.fieldsByIndex||{}),y.descriptors=Object.assign({},u&&u.descriptors||{}),y.deprecated=Object.assign({},u&&u.deprecated||{}),y},x.prototype.addField=function(u,y){var A=this.getNextFieldIndex();this.fieldsByIndex[A]=u,this.indexes[u]=A,this.schema[u]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(u){return this.indexes[u]!==void 0},x.prototype.addFilter=function(u,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[u]]=y,this.indexesWithFilters.push(this.indexes[u]),!0},x.prototype.addChildrenFilter=function(u,y){var A=this.indexes[u],z=this.schema[u];if(S(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[A]=y,!0;console.warn("@filterChildren: field '".concat(u,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(u){return this.childFilters&&this.childFilters[this.indexes[u]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function R(x){return x._context&&x._context.useFilters}var I=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(u){return this.schemas.has(u)},x.prototype.get=function(u){return this.types[u]},x.prototype.add=function(u,y){y===void 0&&(y=this.schemas.size),u._definition=O.create(u._definition),u._typeid=y,this.types[y]=u,this.schemas.set(u,y)},x.create=function(u){return u===void 0&&(u={}),function(y){return u.context||(u.context=new x),b(y,u)}},x}(),W=new I;function b(x,u){return u===void 0&&(u={}),function(y,A){var z=u.context||W,tt=y.constructor;if(tt._context=z,!x)throw new Error("".concat(tt.name,': @type() reference provided for "').concat(A,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(tt)||z.add(tt);var It=tt._definition;if(It.addField(A,x),It.descriptors[A]){if(It.deprecated[A])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(A,"' definition on '").concat(tt.name,`'.
Check @type() annotation`))}catch(k){var Tt=k.stack.split(`
`)[4].trim();throw new Error("".concat(k.message," ").concat(Tt))}}var re=_.is(x),T=!re&&f.is(x);if(typeof x!="string"&&!me.is(x)){var N=Object.values(x)[0];typeof N!="string"&&!z.has(N)&&z.add(N)}if(u.manual){It.descriptors[A]={enumerable:!0,configurable:!0,writable:!0};return}var V="_".concat(A);It.descriptors[V]={enumerable:!1,configurable:!1,writable:!0},It.descriptors[A]={get:function(){return this[V]},set:function(k){k!==this[V]&&(k!=null?(re&&!(k instanceof _)&&(k=new(_.bind.apply(_,a([void 0],k,!1)))),T&&!(k instanceof f)&&(k=new f(k)),k.$proxy===void 0&&(T?k=m(k):re&&(k=p(k))),this.$changes.change(A),k.$changes&&k.$changes.setParent(this,this.$changes.root,this._definition.indexes[A])):this[V]!==void 0&&this.$changes.delete(A),this[V]=k)},enumerable:!0,configurable:!0}}}function P(x){return function(u,y){var A=u.constructor,z=A._definition;z.addFilter(y,x)&&(A._context.useFilters=!0)}}function X(x){return function(u,y){var A=u.constructor,z=A._definition;z.addChildrenFilter(y,x)&&(A._context.useFilters=!0)}}function K(x){return x===void 0&&(x=!0),function(u,y){var A=u.constructor,z=A._definition;z.deprecated[y]=!0,x&&(z.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(tt){},enumerable:!1,configurable:!0})}}function ot(x,u,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||W);for(var A in u)b(u[A],y)(x.prototype,A);return x}function F(x){for(var u=0,y=0,A=0,z=x.length;A<z;A++)u=x.charCodeAt(A),u<128?y+=1:u<2048?y+=2:u<55296||u>=57344?y+=3:(A++,y+=4);return y}function Y(x,u,y){for(var A=0,z=0,tt=y.length;z<tt;z++)A=y.charCodeAt(z),A<128?x[u++]=A:A<2048?(x[u++]=192|A>>6,x[u++]=128|A&63):A<55296||A>=57344?(x[u++]=224|A>>12,x[u++]=128|A>>6&63,x[u++]=128|A&63):(z++,A=65536+((A&1023)<<10|y.charCodeAt(z)&1023),x[u++]=240|A>>18,x[u++]=128|A>>12&63,x[u++]=128|A>>6&63,x[u++]=128|A&63)}function J(x,u){x.push(u&255)}function Q(x,u){x.push(u&255)}function nt(x,u){x.push(u&255),x.push(u>>8&255)}function it(x,u){x.push(u&255),x.push(u>>8&255)}function st(x,u){x.push(u&255),x.push(u>>8&255),x.push(u>>16&255),x.push(u>>24&255)}function ut(x,u){var y=u>>24,A=u>>16,z=u>>8,tt=u;x.push(tt&255),x.push(z&255),x.push(A&255),x.push(y&255)}function pt(x,u){var y=Math.floor(u/Math.pow(2,32)),A=u>>>0;ut(x,A),ut(x,y)}function $(x,u){var y=u/Math.pow(2,32)>>0,A=u>>>0;ut(x,A),ut(x,y)}function at(x,u){Xt(x,u)}function Et(x,u){Ft(x,u)}var wt=new Int32Array(2),Dt=new Float32Array(wt.buffer),Wt=new Float64Array(wt.buffer);function Xt(x,u){Dt[0]=u,st(x,wt[0])}function Ft(x,u){Wt[0]=u,st(x,wt[0]),st(x,wt[1])}function le(x,u){return Q(x,u?1:0)}function j(x,u){u||(u="");var y=F(u),A=0;if(y<32)x.push(y|160),A=1;else if(y<256)x.push(217),Q(x,y),A=2;else if(y<65536)x.push(218),it(x,y),A=3;else if(y<4294967296)x.push(219),ut(x,y),A=5;else throw new Error("String too long");return Y(x,x.length,u),A+y}function _e(x,u){if(isNaN(u))return _e(x,0);if(isFinite(u)){if(u!==(u|0))return x.push(203),Ft(x,u),9}else return _e(x,u>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return u>=0?u<128?(Q(x,u),1):u<256?(x.push(204),Q(x,u),2):u<65536?(x.push(205),it(x,u),3):u<4294967296?(x.push(206),ut(x,u),5):(x.push(207),$(x,u),9):u>=-32?(x.push(224|u+32),1):u>=-128?(x.push(208),J(x,u),2):u>=-32768?(x.push(209),nt(x,u),3):u>=-2147483648?(x.push(210),st(x,u),5):(x.push(211),pt(x,u),9)}var Bt=Object.freeze({__proto__:null,boolean:le,float32:at,float64:Et,int16:nt,int32:st,int64:pt,int8:J,number:_e,string:j,uint16:it,uint32:ut,uint64:$,uint8:Q,utf8Write:Y,writeFloat32:Xt,writeFloat64:Ft});function Vt(x,u,y){for(var A="",z=0,tt=u,It=u+y;tt<It;tt++){var Tt=x[tt];if(!(Tt&128)){A+=String.fromCharCode(Tt);continue}if((Tt&224)===192){A+=String.fromCharCode((Tt&31)<<6|x[++tt]&63);continue}if((Tt&240)===224){A+=String.fromCharCode((Tt&15)<<12|(x[++tt]&63)<<6|(x[++tt]&63)<<0);continue}if((Tt&248)===240){z=(Tt&7)<<18|(x[++tt]&63)<<12|(x[++tt]&63)<<6|(x[++tt]&63)<<0,z>=65536?(z-=65536,A+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):A+=String.fromCharCode(z);continue}console.error("Invalid byte "+Tt.toString(16))}return A}function Ct(x,u){return xe(x,u)<<24>>24}function xe(x,u){return x[u.offset++]}function qt(x,u){return D(x,u)<<16>>16}function D(x,u){return x[u.offset++]|x[u.offset++]<<8}function w(x,u){return x[u.offset++]|x[u.offset++]<<8|x[u.offset++]<<16|x[u.offset++]<<24}function q(x,u){return w(x,u)>>>0}function ht(x,u){return Yt(x,u)}function lt(x,u){return rt(x,u)}function dt(x,u){var y=q(x,u),A=w(x,u)*Math.pow(2,32);return A+y}function Pt(x,u){var y=q(x,u),A=q(x,u)*Math.pow(2,32);return A+y}var vt=new Int32Array(2),bt=new Float32Array(vt.buffer),zt=new Float64Array(vt.buffer);function Yt(x,u){return vt[0]=w(x,u),bt[0]}function rt(x,u){return vt[0]=w(x,u),vt[1]=w(x,u),zt[0]}function ve(x,u){return xe(x,u)>0}function ee(x,u){var y=x[u.offset++],A;y<192?A=y&31:y===217?A=xe(x,u):y===218?A=D(x,u):y===219&&(A=q(x,u));var z=Vt(x,u.offset,A);return u.offset+=A,z}function Gt(x,u){var y=x[u.offset];return y<192&&y>160||y===217||y===218||y===219}function Rt(x,u){var y=x[u.offset++];if(y<128)return y;if(y===202)return Yt(x,u);if(y===203)return rt(x,u);if(y===204)return xe(x,u);if(y===205)return D(x,u);if(y===206)return q(x,u);if(y===207)return Pt(x,u);if(y===208)return Ct(x,u);if(y===209)return qt(x,u);if(y===210)return w(x,u);if(y===211)return dt(x,u);if(y>223)return(255-y+1)*-1}function At(x,u){var y=x[u.offset];return y<128||y>=202&&y<=211}function jt(x,u){return x[u.offset]<160}function de(x,u){return x[u.offset-1]===r&&(x[u.offset]<128||x[u.offset]>=202&&x[u.offset]<=211)}var Re=Object.freeze({__proto__:null,arrayCheck:jt,boolean:ve,float32:ht,float64:lt,int16:qt,int32:w,int64:dt,int8:Ct,number:Rt,numberCheck:At,readFloat32:Yt,readFloat64:rt,string:ee,stringCheck:Gt,switchStructureCheck:de,uint16:D,uint32:q,uint64:Pt,uint8:xe}),Zt=function(){function x(u){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u&&u.forEach(function(A){return y.add(A)})}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,u)},x.is=function(u){return u.collection!==void 0},x.prototype.add=function(u){var y=this.$refId++,A=u.$changes!==void 0;return A&&u.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,u),this.$changes.change(y),y},x.prototype.at=function(u){var y=Array.from(this.$items.keys())[u];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(u){for(var y=this.$items.entries(),A,z;(z=y.next())&&!z.done;)if(u===z.value[1]){A=z.value[0];break}return A===void 0?!1:(this.$changes.delete(A),this.$indexes.delete(A),this.$items.delete(A))},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){return Array.from(this.$items.values()).some(function(y){return y===u})},x.prototype.forEach=function(u){var y=this;this.$items.forEach(function(A,z,tt){return u(A,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var u=[];return this.forEach(function(y,A){u.push(typeof y.toJSON=="function"?y.toJSON():y)}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(A){A.$changes?y.add(A.clone()):y.add(A)})),y},x}(),ft=function(){function x(u){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u&&u.forEach(function(A){return y.add(A)})}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,u)},x.is=function(u){return u.set!==void 0},x.prototype.add=function(u){var y,A;if(this.has(u))return!1;var z=this.$refId++;u.$changes!==void 0&&u.$changes.setParent(this,this.$changes.root,z);var tt=(A=(y=this.$changes.indexes[z])===null||y===void 0?void 0:y.op)!==null&&A!==void 0?A:e.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,u),this.$changes.change(z,tt),z},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(u){for(var y=this.$items.entries(),A,z;(z=y.next())&&!z.done;)if(u===z.value[1]){A=z.value[0];break}return A===void 0?!1:(this.$changes.delete(A),this.$indexes.delete(A),this.$items.delete(A))},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){for(var y=this.$items.values(),A=!1,z;(z=y.next())&&!z.done;)if(u===z.value){A=!0;break}return A},x.prototype.forEach=function(u){var y=this;this.$items.forEach(function(A,z,tt){return u(A,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var u=[];return this.forEach(function(y,A){u.push(typeof y.toJSON=="function"?y.toJSON():y)}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(A){A.$changes?y.add(A.clone()):y.add(A)})),y},x}(),B=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(u){this.refIds.has(u)||(this.refIds.add(u),this.containerIndexes.set(u,new Set))},x.get=function(u){return u.$filterState===void 0&&(u.$filterState=new x),u.$filterState},x}(),Mt=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(u,y,A){A===void 0&&(A=!0),this.refs.set(u,y),A&&(this.refCounts[u]=(this.refCounts[u]||0)+1)},x.prototype.removeRef=function(u){var y=this.refCounts[u];if(y===void 0){console.warn("trying to remove reference ".concat(u," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(u," with 0 refCount"));return}this.refCounts[u]=y-1,this.deletedRefs.add(u)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var u=this;this.deletedRefs.forEach(function(y){if(!(u.refCounts[y]>0)){var A=u.refs.get(y);if(A instanceof me)for(var z in A._definition.schema)typeof A._definition.schema[z]!="string"&&A[z]&&A[z].$changes&&u.removeRef(A[z].$changes.refId);else{var tt=A.$changes.parent._definition,It=tt.schema[tt.fieldsByIndex[A.$changes.parentIndex]];typeof Object.values(It)[0]=="function"&&Array.from(A.values()).forEach(function(Tt){return u.removeRef(Tt.$changes.refId)})}u.refs.delete(y),delete u.refCounts[y]}}),this.deletedRefs.clear()},x}(),xt=function(x){i(u,x);function u(){return x!==null&&x.apply(this,arguments)||this}return u}(Error);function Ht(x,u,y,A){var z,tt=!1;switch(u){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(A));break;case"string":z="string",tt=!0;break;case"boolean":return}if(typeof x!==z&&(!tt||tt&&x!==null)){var It="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new xt("a '".concat(z,"' was expected, but ").concat(It," was provided in ").concat(y.constructor.name,"#").concat(A))}}function kt(x,u,y,A){if(!(x instanceof u))throw new xt("a '".concat(u.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(A))}function ye(x,u,y,A,z){Ht(y,x,A,z);var tt=Bt[x];if(tt)tt(u,y);else throw new xt("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(A.constructor.name,"#").concat(z))}function Me(x,u,y){return Re[x](u,y)}var me=function(){function x(){for(var u=[],y=0;y<arguments.length;y++)u[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var A=this._definition.descriptors;A&&Object.defineProperties(this,A),u[0]&&this.assign(u[0])}return x.onError=function(u){console.error(u)},x.is=function(u){return u._definition&&u._definition.schema!==void 0},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.assign=function(u){return Object.assign(this,u),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(u,y){this.$changes.change(u,y)},x.prototype.listen=function(u,y,A){var z=this;return A===void 0&&(A=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[u]||(this.$callbacks[u]=[]),this.$callbacks[u].push(y),A&&this[u]!==void 0&&y(this[u],void 0),function(){return g(z.$callbacks[u],z.$callbacks[u].indexOf(y))}},x.prototype.decode=function(u,y,A){y===void 0&&(y={offset:0}),A===void 0&&(A=this);var z=[],tt=this.$changes.root,It=u.length,Tt=0;for(tt.refs.set(Tt,this);y.offset<It;){var re=u[y.offset++];if(re==r){Tt=Rt(u,y);var T=tt.refs.get(Tt);if(!T)throw new Error('"refId" not found: '.concat(Tt));A=T;continue}var N=A.$changes,V=A._definition!==void 0,k=V?re>>6<<6:re;if(k===e.OPERATION.CLEAR){A.clear(z);continue}var G=V?re%(k||255):Rt(u,y),et=V?A._definition.fieldsByIndex[G]:"",ct=N.getType(G),Z=void 0,mt=void 0,Ut=void 0;if(V?mt=A["_".concat(et)]:(mt=A.getByIndex(G),(k&e.OPERATION.ADD)===e.OPERATION.ADD?(Ut=A instanceof f?ee(u,y):G,A.setIndex(G,Ut)):Ut=A.getIndex(G)),(k&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(k!==e.OPERATION.DELETE_AND_ADD&&A.deleteByIndex(G),mt&&mt.$changes&&tt.removeRef(mt.$changes.refId),Z=null),et===void 0){console.warn("@colyseus/schema: definition mismatch");for(var St={offset:y.offset};y.offset<It&&!(de(u,y)&&(St.offset=y.offset+1,tt.refs.has(Rt(u,St))));)y.offset++;continue}else if(k!==e.OPERATION.DELETE)if(x.is(ct)){var gt=Rt(u,y);if(Z=tt.refs.get(gt),k!==e.OPERATION.REPLACE){var Ot=this.getSchemaType(u,y,ct);Z||(Z=this.createTypeInstance(Ot),Z.$changes.refId=gt,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&tt.removeRef(mt.$changes.refId))),tt.addRef(gt,Z,Z!==mt)}}else if(typeof ct=="string")Z=Me(ct,u,y);else{var Be=S(Object.keys(ct)[0]),Se=Rt(u,y),He=tt.refs.has(Se)?mt||tt.refs.get(Se):new Be.constructor;if(Z=He.clone(!0),Z.$changes.refId=Se,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&Se!==mt.$changes.refId)){tt.removeRef(mt.$changes.refId);for(var $t=mt.entries(),Lt=void 0;(Lt=$t.next())&&!Lt.done;){var ui=Lt.value,ue=ui[0],Pn=ui[1];z.push({refId:Se,op:e.OPERATION.DELETE,field:ue,value:void 0,previousValue:Pn})}}tt.addRef(Se,Z,He!==mt)}if(Z!=null){if(Z.$changes&&Z.$changes.setParent(N.ref,N.root,G),A instanceof x)A[et]=Z;else if(A instanceof f){var ue=Ut;A.$items.set(ue,Z),A.$changes.allChanges.add(G)}else if(A instanceof _)A.setAt(G,Z);else if(A instanceof Zt){var Ln=A.add(Z);A.setIndex(G,Ln)}else if(A instanceof ft){var Ln=A.add(Z);Ln!==!1&&A.setIndex(G,Ln)}}mt!==Z&&z.push({refId:Tt,op:k,field:et,dynamicIndex:Ut,value:Z,previousValue:mt})}return this._triggerChanges(z),tt.garbageCollectDeletedRefs(),z},x.prototype.encode=function(u,y,A){u===void 0&&(u=!1),y===void 0&&(y=[]),A===void 0&&(A=!1);for(var z=this.$changes,tt=new WeakSet,It=[z],Tt=1,re=0;re<Tt;re++){var T=It[re],N=T.ref,V=N instanceof x;T.ensureRefId(),tt.add(T),T!==z&&(T.changed||u)&&(Q(y,r),_e(y,T.refId));for(var k=u?Array.from(T.allChanges):Array.from(T.changes.values()),G=0,et=k.length;G<et;G++){var ct=u?{op:e.OPERATION.ADD,index:k[G]}:k[G],Z=ct.index,mt=V?N._definition.fieldsByIndex&&N._definition.fieldsByIndex[Z]:Z,Ut=y.length;if(ct.op!==e.OPERATION.TOUCH)if(V)Q(y,Z|ct.op);else{if(Q(y,ct.op),ct.op===e.OPERATION.CLEAR)continue;_e(y,Z)}if(!V&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&N instanceof f){var St=T.ref.$indexes.get(Z);j(y,St)}if(ct.op!==e.OPERATION.DELETE){var gt=T.getType(Z),Ot=T.getValue(Z);if(Ot&&Ot.$changes&&!tt.has(Ot.$changes)&&(It.push(Ot.$changes),Ot.$changes.ensureRefId(),Tt++),ct.op!==e.OPERATION.TOUCH){if(x.is(gt))kt(Ot,gt,N,mt),_e(y,Ot.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(y,gt,Ot.constructor);else if(typeof gt=="string")ye(gt,y,Ot,N,mt);else{var Be=S(Object.keys(gt)[0]);kt(N["_".concat(mt)],Be.constructor,N,mt),_e(y,Ot.$changes.refId)}A&&T.cache(Z,y.slice(Ut))}}}!u&&!A&&T.discard()}return y},x.prototype.encodeAll=function(u){return this.encode(!0,[],u)},x.prototype.applyFilters=function(u,y){var A,z;y===void 0&&(y=!1);for(var tt=this,It=new Set,Tt=B.get(u),re=[this.$changes],T=1,N=[],V=function(G){var et=re[G];if(It.has(et.refId))return"continue";var ct=et.ref,Z=ct instanceof x;Q(N,r),_e(N,et.refId);var mt=Tt.refIds.has(et),Ut=y||!mt;Tt.addRefId(et);var St=Tt.containerIndexes.get(et),gt=Ut?Array.from(et.allChanges):Array.from(et.changes.values());if(!y&&Z&&ct._definition.indexesWithFilters){var Ot=ct._definition.indexesWithFilters;Ot.forEach(function(Vn){!St.has(Vn)&&et.allChanges.has(Vn)&&(Ut?gt.push(Vn):gt.push({op:e.OPERATION.ADD,index:Vn}))})}for(var Be=0,Se=gt.length;Be<Se;Be++){var He=Ut?{op:e.OPERATION.ADD,index:gt[Be]}:gt[Be];if(He.op===e.OPERATION.CLEAR){Q(N,He.op);continue}var $t=He.index;if(He.op===e.OPERATION.DELETE){Z?Q(N,He.op|$t):(Q(N,He.op),_e(N,$t));continue}var Lt=et.getValue($t),ui=et.getType($t);if(Z){var ue=ct._definition.filters&&ct._definition.filters[$t];if(ue&&!ue.call(ct,u,Lt,tt)){Lt&&Lt.$changes&&It.add(Lt.$changes.refId);continue}}else{var Pn=et.parent,ue=et.getChildrenFilter();if(ue&&!ue.call(Pn,u,ct.$indexes.get($t),Lt,tt)){Lt&&Lt.$changes&&It.add(Lt.$changes.refId);continue}}if(Lt.$changes&&(re.push(Lt.$changes),T++),He.op!==e.OPERATION.TOUCH)if(He.op===e.OPERATION.ADD||Z)N.push.apply(N,(A=et.caches[$t])!==null&&A!==void 0?A:[]),St.add($t);else if(St.has($t))N.push.apply(N,(z=et.caches[$t])!==null&&z!==void 0?z:[]);else{if(St.add($t),Q(N,e.OPERATION.ADD),_e(N,$t),ct instanceof f){var Ln=et.ref.$indexes.get($t);j(N,Ln)}Lt.$changes?_e(N,Lt.$changes.refId):Bt[ui](N,Lt)}else if(Lt.$changes&&!Z){if(Q(N,e.OPERATION.ADD),_e(N,$t),ct instanceof f){var Ln=et.ref.$indexes.get($t);j(N,Ln)}_e(N,Lt.$changes.refId)}}},k=0;k<T;k++)V(k);return N},x.prototype.clone=function(){var u,y=new this.constructor,A=this._definition.schema;for(var z in A)typeof this[z]=="object"&&typeof((u=this[z])===null||u===void 0?void 0:u.clone)=="function"?y[z]=this[z].clone():y[z]=this[z];return y},x.prototype.toJSON=function(){var u=this._definition.schema,y=this._definition.deprecated,A={};for(var z in u)!y[z]&&this[z]!==null&&typeof this[z]<"u"&&(A[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return A},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(u){return this[this._definition.fieldsByIndex[u]]},x.prototype.deleteByIndex=function(u){this[this._definition.fieldsByIndex[u]]=void 0},x.prototype.tryEncodeTypeId=function(u,y,A){y._typeid!==A._typeid&&(Q(u,c),_e(u,A._typeid))},x.prototype.getSchemaType=function(u,y,A){var z;return u[y.offset]===c&&(y.offset++,z=this.constructor._context.get(Rt(u,y))),z||A},x.prototype.createTypeInstance=function(u){var y=new u;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(u){for(var y,A,z,tt,It,Tt,re,T,N,V=new Set,k=this.$changes.root.refs,G=function(ct){var Z=u[ct],mt=Z.refId,Ut=k.get(mt),St=Ut.$callbacks;if((Z.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&Z.previousValue instanceof x&&((A=(y=Z.previousValue.$callbacks)===null||y===void 0?void 0:y[e.OPERATION.DELETE])===null||A===void 0||A.forEach(function(gt){return gt()})),!St)return"continue";if(Ut instanceof x){if(!V.has(mt))try{(z=St==null?void 0:St[e.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(gt){return gt()})}catch(gt){x.onError(gt)}try{St.hasOwnProperty(Z.field)&&((tt=St[Z.field])===null||tt===void 0||tt.forEach(function(gt){return gt(Z.value,Z.previousValue)}))}catch(gt){x.onError(gt)}}else Z.op===e.OPERATION.ADD&&Z.previousValue===void 0?(It=St[e.OPERATION.ADD])===null||It===void 0||It.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)}):Z.op===e.OPERATION.DELETE?Z.previousValue!==void 0&&((Tt=St[e.OPERATION.DELETE])===null||Tt===void 0||Tt.forEach(function(gt){var Ot;return gt(Z.previousValue,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})):Z.op===e.OPERATION.DELETE_AND_ADD&&(Z.previousValue!==void 0&&((re=St[e.OPERATION.DELETE])===null||re===void 0||re.forEach(function(gt){var Ot;return gt(Z.previousValue,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})),(T=St[e.OPERATION.ADD])===null||T===void 0||T.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})),Z.value!==Z.previousValue&&((N=St[e.OPERATION.REPLACE])===null||N===void 0||N.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)}));V.add(mt)},et=0;et<u.length;et++)G(et)},x._definition=O.create(),x}();function Ke(x){for(var u=[x.$changes],y=1,A={},z=A,tt=function(Tt){var re=u[Tt];re.changes.forEach(function(T){var N=re.ref,V=T.index,k=N._definition?N._definition.fieldsByIndex[V]:N.$indexes.get(V);z[k]=re.getValue(V)})},It=0;It<y;It++)tt(It);return A}var he={context:new I},Ye=function(x){i(u,x);function u(){return x!==null&&x.apply(this,arguments)||this}return o([b("string",he)],u.prototype,"name",void 0),o([b("string",he)],u.prototype,"type",void 0),o([b("number",he)],u.prototype,"referencedType",void 0),u}(me),cn=function(x){i(u,x);function u(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new _,y}return o([b("number",he)],u.prototype,"id",void 0),o([b([Ye],he)],u.prototype,"fields",void 0),u}(me),bo=function(x){i(u,x);function u(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new _,y}return u.encode=function(y){var A,z=y.constructor,tt=new u;tt.rootType=z._typeid;var It=function(N,V){for(var k in V){var G=new Ye;G.name=k;var et=void 0;if(typeof V[k]=="string")et=V[k];else{var ct=V[k],Z=void 0;me.is(ct)?(et="ref",Z=V[k]):(et=Object.keys(ct)[0],typeof ct[et]=="string"?et+=":"+ct[et]:Z=ct[et]),G.referencedType=Z?Z._typeid:-1}G.type=et,N.fields.push(G)}tt.types.push(N)},Tt=(A=z._context)===null||A===void 0?void 0:A.types;for(var re in Tt){var T=new cn;T.id=Number(re),It(T,Tt[re]._definition.schema)}return tt.encodeAll()},u.decode=function(y,A){var z=new I,tt=new u;tt.decode(y,A);var It=tt.types.reduce(function(V,k){var G=function(ct){i(Z,ct);function Z(){return ct!==null&&ct.apply(this,arguments)||this}return Z}(me),et=k.id;return V[et]=G,z.add(G,et),V},{});tt.types.forEach(function(V){var k=It[V.id];V.fields.forEach(function(G){var et;if(G.referencedType!==void 0){var ct=G.type,Z=It[G.referencedType];if(!Z){var mt=G.type.split(":");ct=mt[0],Z=mt[1]}ct==="ref"?b(Z,{context:z})(k.prototype,G.name):b((et={},et[ct]=Z,et),{context:z})(k.prototype,G.name)}else b(G.type,{context:z})(k.prototype,G.name)})});var Tt=It[tt.rootType],re=new Tt;for(var T in Tt._definition.schema){var N=Tt._definition.schema[T];typeof N!="string"&&(re[T]=typeof N=="function"?new N:new(S(Object.keys(N)[0])).constructor)}return re},o([b([cn],he)],u.prototype,"types",void 0),o([b("number",he)],u.prototype,"rootType",void 0),u}(me);M("map",{constructor:f}),M("array",{constructor:_}),M("set",{constructor:ft}),M("collection",{constructor:Zt}),e.ArraySchema=_,e.CollectionSchema=Zt,e.Context=I,e.MapSchema=f,e.Reflection=bo,e.ReflectionField=Ye,e.ReflectionType=cn,e.Schema=me,e.SchemaDefinition=O,e.SetSchema=ft,e.decode=Re,e.defineTypes=ot,e.deprecated=K,e.dumpChanges=Ke,e.encode=Bt,e.filter=P,e.filterChildren=X,e.hasFilter=R,e.registerType=M,e.type=b})})(Ic,Ic.exports);var ou=Ic.exports,qv=Ue&&Ue.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),jv=Ue&&Ue.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Zv=Ue&&Ue.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&qv(t,s,e);return jv(t,s),t};Object.defineProperty(Mo,"__esModule",{value:!0});Mo.Room=void 0;const qh=Zv(Ws),Kv=Jr,en=jc,jh=ts,$v=Eo,fr=Xs,_n=ou,Zh=$r;class Zc{constructor(t,e){this.onStateChange=(0,fr.createSignal)(),this.onError=(0,fr.createSignal)(),this.onLeave=(0,fr.createSignal)(),this.onJoin=(0,fr.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,$v.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,jh.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var o;return(o=console.warn)===null||o===void 0?void 0:o.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const o=new Kv.Connection;n.connection=o,o.events.onmessage=Zc.prototype.onMessageCallback.bind(n),o.events.onclose=function(a){var r;if(!n.hasJoined){(r=console.warn)===null||r===void 0||r.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===Zh.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},o.events.onerror=function(a){var r;(r=console.warn)===null||r===void 0||r.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},o.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([en.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Zh.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[en.Protocol.ROOM_DATA];typeof t=="string"?_n.encode.string(n,t):_n.encode.number(n,t);let i;if(e!==void 0){const o=qh.encode(e);i=new Uint8Array(n.length+o.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(o),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[en.Protocol.ROOM_DATA_BYTES];typeof t=="string"?_n.encode.string(n,t):_n.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===en.Protocol.JOIN_ROOM){let i=1;const o=(0,en.utf8Read)(e,i);if(i+=(0,en.utf8Length)(o),this.serializerId=(0,en.utf8Read)(e,i),i+=(0,en.utf8Length)(this.serializerId),!this.serializer){const a=(0,jh.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${o}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([en.Protocol.JOIN_ROOM])}else if(n===en.Protocol.ERROR){const i={offset:1},o=_n.decode.number(e,i),a=_n.decode.string(e,i);this.onError.invoke(o,a)}else if(n===en.Protocol.LEAVE_ROOM)this.leave();else if(n===en.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(_n.decode.number(e,i)),r=new a;r.decode(e,i),this.dispatchMessage(a,r)}else if(n===en.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===en.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===en.Protocol.ROOM_DATA){const i={offset:1},o=_n.decode.stringCheck(e,i)?_n.decode.string(e,i):_n.decode.number(e,i),a=e.length>i.offset?qh.decode(t.data,i.offset):void 0;this.dispatchMessage(o,a)}else if(n===en.Protocol.ROOM_DATA_BYTES){const i={offset:1},o=_n.decode.stringCheck(e,i)?_n.decode.string(e,i):_n.decode.number(e,i);this.dispatchMessage(o,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}Mo.Room=Zc;var ta={};function Kh(s,t){t.headers=s.headers||{},t.statusMessage=s.statusText,t.statusCode=s.status,t.data=s.response}function Hn(s,t,e){return new Promise(function(n,i){e=e||{};var o=new XMLHttpRequest,a,r,c,l=e.body,h=e.headers||{};e.timeout&&(o.timeout=e.timeout),o.ontimeout=o.onerror=function(d){d.timeout=d.type=="timeout",i(d)},o.open(s,t.href||t),o.onload=function(){for(c=o.getAllResponseHeaders().trim().split(/[\r\n]+/),Kh(o,o);r=c.shift();)r=r.split(": "),o.headers[r.shift().toLowerCase()]=r.join(": ");if(r=o.headers["content-type"],r&&~r.indexOf("application/json"))try{o.data=JSON.parse(o.data,e.reviver)}catch(d){return Kh(o,d),i(d)}(o.status>=400?i:n)(o)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),o.withCredentials=!!e.withCredentials;for(a in h)o.setRequestHeader(a,h[a]);o.send(l)})}var Jv=Hn.bind(Hn,"GET"),Qv=Hn.bind(Hn,"POST"),tx=Hn.bind(Hn,"PATCH"),ex=Hn.bind(Hn,"DELETE"),nx=Hn.bind(Hn,"PUT");const ix=Object.freeze(Object.defineProperty({__proto__:null,del:ex,get:Jv,patch:tx,post:Qv,put:nx,send:Hn},Symbol.toStringTag,{value:"Module"})),sx=Rv(ix);var ox=Ue&&Ue.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),rx=Ue&&Ue.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),ax=Ue&&Ue.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&ox(t,s,e);return rx(t,s),t};Object.defineProperty(ta,"__esModule",{value:!0});ta.HTTP=void 0;const cx=$r,lx=ax(sx);class hx{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return lx[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var o;const a=i.statusCode,r=((o=i.data)===null||o===void 0?void 0:o.error)||i.statusMessage||i.message;throw!a&&!r?i:new cx.ServerError(a,r)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}ta.HTTP=hx;var So={},Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.getItem=Ci.removeItem=Ci.setItem=void 0;let co;function Kc(){if(!co)try{co=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return co||(co={cache:{},setItem:function(s,t){this.cache[s]=t},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),co}function dx(s,t){Kc().setItem(s,t)}Ci.setItem=dx;function ux(s){Kc().removeItem(s)}Ci.removeItem=ux;function fx(s,t){const e=Kc().getItem(s);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Ci.getItem=fx;var Bi=Ue&&Ue.__awaiter||function(s,t,e,n){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function r(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?o(h.value):i(h.value).then(r,c)}l((n=n.apply(s,t||[])).next())})},bs=Ue&&Ue.__classPrivateFieldGet||function(s,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!n:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(s):n?n.value:t.get(s)},lo=Ue&&Ue.__classPrivateFieldSet||function(s,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,e):i?i.value=e:t.set(s,e),e},br,Dc,vi,Ar;Object.defineProperty(So,"__esModule",{value:!0});So.Auth=void 0;const qa=Ci,px=Eo;class mx{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},br.set(this,!1),Dc.set(this,void 0),vi.set(this,void 0),Ar.set(this,(0,px.createNanoEvents)()),(0,qa.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=bs(this,Ar,"f").on("change",t);return bs(this,br,"f")||lo(this,Dc,new Promise((n,i)=>{this.getUserData().then(o=>{this.emitChange(Object.assign(Object.assign({},o),{token:this.token}))}).catch(o=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),lo(this,br,!0,"f"),e}getUserData(){return Bi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Bi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return Bi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Bi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Bi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Bi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const o=e.width||480,a=e.height||768,r=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${r}`),h=screen.width/2-o/2,d=screen.height/2-a/2;lo(this,vi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+o+", height="+a+", top="+d+", left="+h),"f");const g=p=>{p.data.user===void 0&&p.data.token===void 0||(clearInterval(v),bs(this,vi,"f").close(),lo(this,vi,void 0,"f"),window.removeEventListener("message",g),p.data.error!==void 0?i(p.data.error):(n(p.data),this.emitChange(p.data)))},v=setInterval(()=>{(!bs(this,vi,"f")||bs(this,vi,"f").closed)&&(lo(this,vi,void 0,"f"),i("cancelled"),window.removeEventListener("message",g))},200);window.addEventListener("message",g)})})}signOut(){return Bi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,qa.removeItem)(this.settings.key):(0,qa.setItem)(this.settings.key,t.token)),bs(this,Ar,"f").emit("change",t)}}So.Auth=mx;br=new WeakMap,Dc=new WeakMap,vi=new WeakMap,Ar=new WeakMap;var ea={};Object.defineProperty(ea,"__esModule",{value:!0});ea.discordURLBuilder=void 0;function gx(s){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${e}${i}${s.pathname}${s.search}`:`${s.protocol}//${e}/.proxy/colyseus${i}${s.pathname}${s.search}`}ea.discordURLBuilder=gx;var Xn=Ue&&Ue.__awaiter||function(s,t,e,n){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function r(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?o(h.value):i(h.value).then(r,c)}l((n=n.apply(s,t||[])).next())})},ja;Object.defineProperty(Vs,"__esModule",{value:!0});Vs.Client=Vs.MatchMakeError=void 0;const _x=$r,vx=Mo,xx=ta,yx=So,Mx=ea;class na extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,na.prototype)}}Vs.MatchMakeError=na;const $h=typeof window<"u"&&typeof((ja=window==null?void 0:window.location)===null||ja===void 0?void 0:ja.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Ex{constructor(t=$h,e){var n,i;if(typeof t=="string"){const o=t.startsWith("/")?new URL(t,$h):new URL(t),a=o.protocol==="https:"||o.protocol==="wss:",r=Number(o.port||(a?443:80));this.settings={hostname:o.hostname,pathname:o.pathname,port:r,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new xx.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new yx.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=Mx.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return Xn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return Xn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return Xn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return Xn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return Xn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return Xn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return Xn(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const o={sessionId:i.sessionId};t.reconnectionToken&&(o.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,o),t.devMode&&(()=>Xn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let r=0,c=8;const l=()=>Xn(this,void 0,void 0,function*(){r++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{r<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((r,c)=>{const l=(h,d)=>c(new _x.ServerError(h,d));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),r(a)})})})}createMatchMakeRequest(t,e,n={},i,o){return Xn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new na(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,o)})}createRoom(t,e){return new vx.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const o=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(o)):o}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Vs.Client=Ex;var ia={};Object.defineProperty(ia,"__esModule",{value:!0});ia.SchemaSerializer=void 0;const Jh=ou;class Sx{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new Jh.Reflection().decode(t,e):this.state=Jh.Reflection.decode(t,e)}}ia.SchemaSerializer=Sx;var sa={};Object.defineProperty(sa,"__esModule",{value:!0});sa.NoneSerializer=void 0;class bx{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}sa.NoneSerializer=bx;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var t=Vs;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=jc;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=Mo;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=So;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const o=ia;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return o.SchemaSerializer}});const a=sa,r=ts;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return r.registerSerializer}}),(0,r.registerSerializer)("schema",o.SchemaSerializer),(0,r.registerSerializer)("none",a.NoneSerializer)})(nu);class Ax{constructor(t,e){C(this,"group");C(this,"head");C(this,"body");C(this,"leftArm");C(this,"rightArm");C(this,"leftLeg");C(this,"rightLeg");C(this,"label");C(this,"healthBar");C(this,"targetPos",new U);C(this,"targetRotY",0);C(this,"targetRotX",0);C(this,"health",20);C(this,"maxHealth",20);C(this,"walkCycle",0);C(this,"prevPos",new U);C(this,"dead",!1);this.group=new fe,this.prevPos.copy(this.group.position);let n=0;for(let P=0;P<e.length;P++)n=n*31+e.charCodeAt(P)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],o=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],r=i[n%i.length],c=o[(n>>3)%o.length],l=a[(n>>6)%a.length],h=3351057,d=o[(n>>9)%o.length],g=()=>new Ie({color:r}),v=()=>new Ie({color:c}),p=()=>new Ie({color:l}),_=()=>new Ie({color:h}),m=(P,X,K,ot,F=0)=>{const Y=new fe,J=new Ce(P,X,K),Q=new Qt(J,ot);return Q.position.y=-X/2+F,Y.add(Q),Y},f=new Ce(.5,.5,.5);this.head=new Qt(f,g()),this.head.position.y=.25;const E=new Ce(.52,.52,.52),M=new Ie({color:d,transparent:!0,opacity:.35}),S=new Qt(E,M);this.head.add(S);const O=new Ce(.6,.75,.35);this.body=new Qt(O,v()),this.body.position.y=-.375,this.leftArm=m(.25,.65,.25,v(),0),this.rightArm=m(.25,.65,.25,v(),0);const R=new Qt(new Ce(.24,.3,.24),g());R.position.y=-.5,this.leftArm.children[0].add(R);const I=R.clone();this.rightArm.children[0].add(I),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=m(.27,.7,.27,p(),0),this.rightLeg=m(.27,.7,.27,p(),0);const W=new Qt(new Ce(.28,.22,.28),_());W.position.y=-.5,this.leftLeg.children[0].add(W);const b=W.clone();this.rightLeg.children[0].add(b),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const o=new Gs(e),a=new Ur({map:o,transparent:!0,depthTest:!1}),r=new Ac(a);return r.scale.set(1.6,.35,1),r}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Gs(t),i=new Ur({map:n,transparent:!0,depthTest:!1}),o=new Ac(i);return o.scale.set(1.2,.15,1),o}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,o=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*o,this.group.position.y+=(n-this.group.position.y)*o,this.group.position.z+=(i-this.group.position.z)*o;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const r=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(r*r+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const d=Math.sin(this.walkCycle),g=.65;this.leftLeg.rotation.x=d*g,this.rightLeg.rotation.x=-d*g,this.leftArm.rotation.x=-d*g,this.rightArm.rotation.x=d*g,this.body.position.y=-.375+Math.abs(d)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class Tx{constructor(t,e,n,i){C(this,"client");C(this,"room",null);C(this,"players",new Map);C(this,"scene");C(this,"world");C(this,"cb");C(this,"mobs",null);C(this,"moveInterval",null);C(this,"getLocalState");this.scene=t,this.world=e,this.cb=n;const o=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!o?"wss":"ws";this.client=new nu.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:t}),this.cb.onStatusChange("connected"),this.setupHandlers(),this.startSendPosition()}catch(e){console.error("[MP] Connection failed:",e),this.cb.onStatusChange("disconnected")}}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new Ax(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const o=this.players.get(e);o&&(o.targetPos.set(t.x,t.y,t.z),o.targetRotY=t.rotY,o.targetRotX=t.rotX,o.group.visible=t.gameMode!=="spectator",o.health!==t.health&&(o.setHealth(t.health),t.health<=0&&!o.dead&&o.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var o;(o=this.room)==null||o.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const Za={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036};class Qh{constructor(t,e){C(this,"group");C(this,"bodyMeshes",[]);C(this,"legs",[]);C(this,"arms",[]);C(this,"headGroup");C(this,"hpSprite");C(this,"id");C(this,"type");C(this,"health");C(this,"maxHealth");C(this,"alive",!0);C(this,"state","idle");C(this,"targetPos",new U);C(this,"targetRotY",0);C(this,"walkCycle",0);C(this,"prevPos",new U);switch(this.group=new fe,this.headGroup=new fe,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Ie({color:t,transparent:e,opacity:n})}box(t,e,n,i){const o=new Qt(new Ce(t,e,n),this.mat(i));return this.bodyMeshes.push(o),o}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const o=this.box(.72,.66,.66,16361640);o.position.y=0,this.headGroup.add(o);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const r=a.clone();r.position.x=.2,this.headGroup.add(a,r);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const d=this.box(.18,.2,.1,15757424);d.position.set(-.28,.4,.1),this.headGroup.add(d);const g=d.clone();g.position.x=.28,this.headGroup.add(g),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const v=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[p,_]of v){const m=new fe,f=this.box(.3,.48,.3,16361640);f.position.y=-.24;const E=this.box(.3,.14,.3,7816260);E.position.y=-.48-.07,m.add(f,E),m.position.set(p,0,_),this.group.add(m),this.legs.push(m)}}buildZombie(){const o=this.box(.6,.8,.35,2771498);o.position.y=-.05,this.group.add(o);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=d=>{const g=new fe,v=this.box(.26,.55,.26,2771498);v.position.y=-.275;const p=this.box(.24,.45,.24,7846775);return p.position.y=-.55-.225,g.add(v,p),g.position.set(d*.43,.2,0),g.rotation.x=-Math.PI/2.2,this.group.add(g),this.arms.push(g),g};l(-1),l(1);const h=d=>{const g=new fe,v=this.box(.26,.6,.26,1715738);v.position.y=-.3;const p=this.box(.26,.24,.28,1708040);return p.position.y=-.6-.12,g.add(v,p),g.position.set(d*.175,-.45,0),this.group.add(g),this.legs.push(g),g};h(-1),h(1)}buildChicken(){const o=this.box(.55,.6,.7,16777215);o.scale.set(1,1.1,1.3),o.position.y=.35,this.group.add(o);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const r=this.box(.12,.22,.12,14492194);r.position.set(0,.3,.02),this.headGroup.add(r);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new fe,g=this.box(.12,.45,.5,16777215);g.position.y=-.225,d.add(g),d.position.set(h*.34,.35,0),d.rotation.z=-h*.2,this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new fe,g=this.box(.1,.4,.1,16763904);g.position.y=-.2;const v=this.box(.25,.06,.18,16763904);v.position.set(.05,-.43,.06),d.add(g,v),d.position.set(h*.14,.05,0),this.group.add(d),this.legs.push(d)}}buildCow(){const o=this.box(1.1,.85,1.5,8014378);o.position.set(0,.5,0),this.group.add(o);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const r=this.box(.76,.7,.72,8014378);this.headGroup.add(r);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const d=this.box(.14,.14,.05,1118481);d.position.set(-.28,.14,.37),this.headGroup.add(d);const g=d.clone();g.position.x=.28,this.headGroup.add(g);const v=this.box(.1,.28,.1,14540253);v.position.set(-.3,.44,.04),this.headGroup.add(v);const p=v.clone();p.position.x=.3,this.headGroup.add(p);const _=this.box(.22,.16,.1,8014378);_.position.set(-.44,.26,.06),this.headGroup.add(_);const m=_.clone();m.position.x=.44,this.headGroup.add(m),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const f=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[M,S]of f){const O=new fe,R=this.box(.34,.55,.34,8014378);R.position.y=-.275;const I=this.box(.34,.15,.36,2236962);I.position.y=-.55-.075,O.add(R,I),O.position.set(M,0,S),this.group.add(O),this.legs.push(O)}const E=this.box(.44,.2,.44,16765120);E.position.set(0,-.08,.1),this.group.add(E)}buildSheep(){const o=this.box(1,.95,1.35,14540253);o.position.set(0,.55,0),this.group.add(o);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const r=this.box(.8,.55,.55,14540253);r.position.set(0,.72,.5),this.group.add(r);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const d=h.clone();d.position.x=.2,this.headGroup.add(d);const g=this.box(.52,.3,.5,14540253);g.position.set(0,.38,-.04),this.headGroup.add(g);const v=this.box(.1,.24,.18,8943462);v.position.set(-.34,.1,0),this.headGroup.add(v);const p=v.clone();p.position.x=.34,this.headGroup.add(p),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const _=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[m,f]of _){const E=new fe,M=this.box(.28,.52,.28,8943462);M.position.y=-.26;const S=this.box(.28,.14,.3,3355443);S.position.y=-.52-.07,E.add(M,S),E.position.set(m,0,f),this.group.add(E),this.legs.push(E)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const o=this.box(.12,.14,.08,2775578);o.position.set(-.2,.1,.46),this.headGroup.add(o);const a=o.clone();a.position.x=.2,this.headGroup.add(a);const r=this.box(.12,.12,.08,2775578);r.position.set(-.2,-.15,.46),this.headGroup.add(r);const c=r.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,d]of l){const g=new fe,v=this.box(.28,.58,.28,4885034);v.position.y=-.29,g.add(v),g.position.set(h,0,d),this.group.add(g),this.legs.push(g)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const o=i.clone();o.position.x=.1,this.headGroup.add(o);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const r=a.clone();r.position.x=.1,this.headGroup.add(r),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new fe,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const d=this.box(.12,.45,.12,13421772);d.position.y=-.55-.225,l.add(h,d),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new fe,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const d=this.box(.13,.5,.13,13421772);d.position.y=-.55-.25,l.add(h,d),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const o=this.box(.08*1.3,.08*1.3,.05*1.3,17663);o.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=o.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(o);const r=o.clone();r.position.x=.1*1.3,this.headGroup.add(r);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new fe,g=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);g.position.y=-.25*1.3;const v=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(v.position.y=-.55*1.3-.225*1.3,d.add(g,v),h===1){const p=this.box(.10400000000000001,.52,.195,8421504);p.position.set(.12*1.3,-.55*1.3,0),d.add(p)}d.position.set(h*.38*1.3,.2*1.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new fe,g=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);g.position.y=-.275*1.3;const v=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);v.position.y=-.55*1.3-.25*1.3,d.add(g,v),d.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(d),this.legs.push(d)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const o=this.box(.1,.1,.05,2236962);o.position.set(-.15,.1,.32),this.headGroup.add(o);const a=o.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,5913130);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new Qt(new Yr(.3,.5),new Ie({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[d,g]of h){const v=new fe,p=this.box(.2,.7,.2,13149294);p.position.y=-.35,v.add(p),v.position.set(d,.1,g),this.group.add(v),this.legs.push(v)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const o=this.box(.62,.95,.42,4885050);o.position.y=.22,this.group.add(o);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new fe,g=this.box(.26,.5,.26,16764057);g.position.y=-.25;const v=this.box(.24,.45,.24,16764057);v.position.y=-.55-.225,d.add(g,v),d.position.set(h*.4,.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new fe,g=this.box(.26,.5,.26,8015658);g.position.y=-.25;const v=this.box(.26,.45,.26,8015658);v.position.y=-.55-.225,d.add(g,v),d.position.set(h*.15,-.5,0),this.group.add(d),this.legs.push(d)}}buildEnderDragon(){const o=this.box(2,1,4,1114146);o.scale.set(1.5,1.5,1.5),o.position.set(0,.6*1.5,0),this.group.add(o);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const r=this.box(.18,.18,.1,16729156);r.position.set(-.3,.15,.65);const c=new Ie({color:16729156,emissive:16729156,emissiveIntensity:.8});r.material=c,this.headGroup.add(r);const l=r.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const d=this.box(3,.2,2,2228275);d.scale.set(1.5,1.5,1.5),d.position.set(h*2*1.5,.6*1.5,0),this.group.add(d)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const o=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[r,c,l]of o){const h=new Qt(new Rn(.06,8,8),new Ie({color:16724787}));h.position.set(r,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let r=0;r<8;r++){const[c,l,h]=a[r],d=new fe,g=this.box(.1,.08,.6,3355443);g.position.set(0,0,.3),d.add(g),d.position.set(c,l,h),d.rotation.z=(r<4?-1:1)*Math.PI/4,this.group.add(d),this.legs.push(d)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const o=this.box(.5,.5,.5,8947848);this.headGroup.add(o);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const r=a.clone();r.position.x=.15,this.headGroup.add(a,r);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const d=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[v,p]of d){const _=new fe,m=this.box(.18,.5,.18,8947848);m.position.y=-.25,_.add(m),_.position.set(v,0,p),this.group.add(_),this.legs.push(_)}const g=this.box(.1,.08,.7,8947848);g.position.set(0,.2,-.8),this.group.add(g)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const o=this.box(.4,.4,.35,14518323);this.headGroup.add(o);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const r=a.clone();r.position.x=.12,this.headGroup.add(a,r);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const d=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[v,p]of d){const _=new fe,m=this.box(.12,.38,.12,14518323);m.position.y=-.19,_.add(m),_.position.set(v,0,p),this.group.add(_),this.legs.push(_)}const g=this.box(.08,.06,.6,14518323);g.position.set(0,.1,-.6),this.group.add(g)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const o=this.box(2,.1,.8,1717060);o.position.set(-1,-.05,0),this.group.add(o);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const r=new Qt(new Rn(.1,8,8),new Ie({color:4521796,emissive:4521796}));r.position.set(-.3,.1,.8),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const o=new Qt(new Ce(1.2,1.2,1.2),new Ie({color:4500036,transparent:!0,opacity:.8}));o.position.y=0,this.bodyMeshes.push(o),this.group.add(o);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const r=new Qt(new Rn(.15,8,8),new Ie({color:16777215}));r.position.set(-.25,.25,.5),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new Qt(new Rn(.06,8,8),new Ie({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Gs(t),n=new Ur({map:e,transparent:!0,depthTest:!1}),i=new Ac(n);i.scale.set(1.2,.18,1);const o={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=o[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,o=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=o/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const r=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=r*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(r)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=r*.7,this.legs[1].rotation.x=-r*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(r)*.3);this.headGroup.position.y=.72+Math.abs(r)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,o=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:Za.creeper;for(const a of this.bodyMeshes)a.material.color.set(o)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=Za[this.type]??16777215,o=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(o);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,o=Math.min(i/e,1);this.group.rotation.z=o*(Math.PI/2),this.group.position.y=this.targetPos.y-o*.5;const a=1-o*.3;if(this.group.scale.setScalar(a),i%200<100)for(const r of this.bodyMeshes)r.material.color.set(16720418);else{const r=Za[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(r)}o<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function hn(s,t){return s+Math.random()*(t-s)}function wx(){return Math.random().toString(36).slice(2,10)}const td=8,Cx=30,ed=60,Rx=-20,Px=new Ce(.1,.1,.4),Lx=new Ie({color:16768256}),nd=new U,oi=class oi{constructor(t,e,n,i){C(this,"mobs",new Map);C(this,"scene");C(this,"world");C(this,"cb");C(this,"singleplayer");C(this,"arrows",[]);C(this,"dayTime",.5);C(this,"mountedMobId",null);C(this,"attackCooldown",0);this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,o){const a=o??wx(),r=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:10,c={id:a,type:t,x:e,y:n,z:i,rotY:hn(0,Math.PI*2),health:r,maxHealth:r,alive:!0,state:"idle"},l=new Qh(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=td)return;const n=hn(0,Math.PI*2),i=hn(12,Cx),o=t+Math.cos(n)*i,a=e+Math.sin(n)*i,r=this.dayTime<.25||this.dayTime>.73;let c,l;const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(o),Math.round(a)):20,d=Math.round(h)+1,g=this.world.getBlockType?this.world.getBlockType(Math.round(o),d+1,Math.round(a)):void 0,v=h<15||g!==void 0&&g!==0;if(r&&Math.random()<.15)c=20+hn(0,10),l="phantom";else if(c=d+.5,v&&Math.random()<.08)l="slime";else if(v){const p=Math.random();l=p<.3?"zombie":p<.55?"skeleton":p<.75?"spider":p<.9?"creeper":"witherskeleton"}else if(r){const p=Math.random();l=p<.25?"zombie":p<.45?"skeleton":p<.6?"creeper":p<.75?"spider":p<.85?"witherskeleton":p<.9?"pig":p<.95?"cow":"sheep"}else{const p=Math.random();l=p<.25?"pig":p<.45?"chicken":p<.6?"cow":p<.75?"sheep":p<.85?"horse":p<.92?"wolf":"cat"}this.spawnMob(l,o,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const o=new Qh(this.scene,n);this.mobs.set(n.id,{data:n,mob:o,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e,n=0){if(this.attackCooldown>0)return null;const i=[],o=new Map;for(const[p,_]of this.mobs)_.mob.alive&&_.mob.group.traverse(m=>{m.isMesh&&(i.push(m),o.set(m,p))});const a=t.intersectObjects(i);if(!a.length)return null;const r=o.get(a[0].object);if(!r)return null;const c=this.mobs.get(r);let l=5;e!=null&&e.sharpness&&(l+=2*e.sharpness),n>0&&(l+=n),c.mob.health-=l,c.mob.showDamage(c.mob.health),c.mob.health<=0&&c.mob.die(),this.attackCooldown=.4;const h=t.ray.origin,d=c.data.x-h.x,g=c.data.z-h.z,v=Math.sqrt(d*d+g*g)||1;return c.data.x+=d/v*2.5,c.data.z+=g/v*2.5,{mobId:r,damage:l}}update(t){this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[n,i]of this.mobs){if(i.hitCooldown>0&&(i.hitCooldown=Math.max(0,i.hitCooldown-t)),i.mob.update(t),!i.mob.alive){if(i.mob._deathTimer===void 0&&(i.mob._deathTimer=1.5),i.mob._deathTimer-=t,i.mob._deathTimer<=0){if(i.data.type==="slime"&&!i.data.isMiniSlime)for(let r=0;r<2;r++){const c=(Math.random()-.5)*2,l=(Math.random()-.5)*2,h={id:`slime_mini_${Date.now()}_${r}`,type:"slime",x:i.data.x+c,y:i.data.y,z:i.data.z+l,rotY:Math.random()*Math.PI*2,state:"idle",health:4,maxHealth:4,isMiniSlime:!0};this.addMob(h,this.scene)}i.mob.dispose(this.scene),this.mobs.delete(n)}continue}if(this.singleplayer&&oi.UNDEAD_TYPES.has(i.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const c=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(i.data.x),Math.round(i.data.z)):20;if(i.data.y>=c-2&&(i.mob.health-=4*t,i.mob.showDamage(i.mob.health),i.mob.health<=0)){i.mob.die();continue}}if(this.singleplayer){const r=i.mob.targetPos.x-e.x,c=i.mob.targetPos.z-e.z;r*r+c*c<=32*32&&this.runAI(i,t,e)}const o=i.data.x-e.x,a=i.data.z-e.z;o*o+a*a>ed*ed&&(i.mob.dispose(this.scene),this.mobs.delete(n))}for(let n=this.arrows.length-1;n>=0;n--){const i=this.arrows[n];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);const o=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z;o*o+a*a+r*r<.64?(this.cb.onPlayerDamage(1),this.scene.remove(i.mesh),this.arrows.splice(n,1)):i.life<=0&&(this.scene.remove(i.mesh),this.arrows.splice(n,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<td&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,o){const a=t.data,r=e-a.x,c=n-a.z,l=Math.atan2(r,c);a.rotY=l;const h=Math.sin(l)*.8,d=Math.cos(l)*.8,g=Math.round(a.x+h),v=Math.round(a.z+d),p=Math.round(a.y),_=this.world.getBlockType(g,p,v),m=this.world.getBlockType(g,p+1,v);if(_&&_!==7&&_!==0){if(!m||m===7||m===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*o,a.z+=Math.cos(l)*i*o,!0;{const f=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=f,a.x+=Math.sin(f)*i*.5*o,a.z+=Math.cos(f)*i*.5*o,!1}}return a.x+=Math.sin(l)*i*o,a.z+=Math.cos(l)*i*o,!0}runAI(t,e,n){const i=t.data;t.timer-=e;const o=n.x-i.x,a=n.z-i.z,r=o*o+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=Rx*e;const c=Math.round(i.x),l=Math.round(i.z);(c!==t._surfCacheX||l!==t._surfCacheZ)&&(t._surfCacheX=c,t._surfCacheZ=l,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(c,l)+.5:0);const h=t._surfCacheY;if(i.y<=h&&(i.y=h,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const d=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,r,o,a,d)}else i.type==="horse"?this.horseAI(t,e,r,o,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,r,o,a,n):i.type==="creeper"?this.creeperAI(t,e,r,n):i.type==="skeleton"?this.skeletonAI(t,e,r,o,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,r,o,a,n):i.type==="spider"?this.spiderAI(t,e,r,o,a,n):i.type==="wolf"?this.wolfAI(t,e,r,o,a,n):i.type==="cat"?this.catAI(t,e,r,o,a,n):i.type==="slime"&&this.slimeAI(t,e,r,o,a,n)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,o,a){const r=t.data;if(n<25&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const c=r.rotY+Math.PI;r.x+=Math.sin(c)*a*e,r.z+=Math.cos(c)*a*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&(r.state="idle",t.timer=hn(2,5)))}horseAI(t,e,n,i,o,a){const r=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const d=h.data.x-r.x,g=h.data.z-r.z;if(d*d+g*g<225){l=!0;break}}if(l&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){let h=0,d=0;for(const g of this.mobs.values())if((g.data.type==="zombie"||g.data.type==="skeleton")&&g.data.id!==r.id){h=g.data.x,d=g.data.z;break}(h!==0||d!==0)&&(r.rotY=Math.atan2(r.x-h,r.z-d)),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle",t.timer=hn(2,5)))}zombieAI(t,e,n,i,o,a){const r=t.data,c=2.8;n<144?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,o,1.5)}creeperAI(t,e,n,i){const o=t.data,a=2.5;if(n<100?o.state!=="fusing"&&(o.state="fusing",t.timer=oi.CREEPER_FUSE_TIME):o.state==="fusing"&&(o.state="idle",t.timer=hn(1.5,4),t.mob.setCreeperFuse(0)),o.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const r=1-t.timer/oi.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,r))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*a*e,o.z+=Math.cos(o.rotY)*a*e)}explode(t,e){const n=t.data,i=5,o=5,a=e.x-n.x,r=e.y-n.y,c=e.z-n.z;a*a+r*r+c*c<o*o&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,o,a){const r=t.data,c=1.8,l=400,h=16,d=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(r.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a),t.shootTimer=d),n<h){const g=r.rotY+Math.PI;r.x+=Math.sin(g)*c*e,r.z+=Math.cos(g)*c*e}else r.rotY=Math.atan2(i,o);else n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1);r.state!=="attacking"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e))}witherskeletonAI(t,e,n,i,o,a){var d,g;const r=t.data,c=4,l=4,h=400;t.shootTimer=(t.shootTimer??0)-e,n<h?(r.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(g=(d=this.cb).onWitherEffect)==null||g.call(d))):n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state!=="chasing"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.5*e,r.z+=Math.cos(r.rotY)*c*.5*e))}shootArrow(t,e,n,i){const o=new Qt(Px,Lx);o.position.set(t,e,n),nd.set(i.x-t,i.y-e,i.z-n).normalize();const r=nd.clone().multiplyScalar(15);this.scene.add(o),this.arrows.push({mesh:o,vel:r,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const o=15,a=i.x+Math.sin(t.timer)*o,r=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*o,l=3;n.x+=(a-n.x)*l*e,n.y+=(r-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,r=i.z-n.z;a*a+r*r<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,o,a){const r=t.data,c=3.5,l=225,h=9,d=3;t.jumpTimer||(t.jumpTimer=0),n<l?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=d),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.6*e,r.z+=Math.cos(r.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,o=n.x-i.x,a=n.z-i.z;o*o+a*a<100&&(i.rotY=Math.atan2(o,a))}wolfAI(t,e,n,i,o,a){const r=t.data,c=4;if(r.state!=="tamed")if(n<4&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const l=r.rotY+Math.PI;r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"&&(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e);else{let l=!1;for(const[h,d]of this.mobs){if(!d.mob.alive||!oi.HOSTILE_TYPES.has(d.data.type))continue;const g=d.data.x-r.x,v=d.data.z-r.z,p=g*g+v*v;if(p<64){r.rotY=Math.atan2(g,v),r.x+=Math.sin(r.rotY)*c*1.2*e,r.z+=Math.cos(r.rotY)*c*1.2*e,r.state="following",p<2.25&&(t.hitCooldown??0)<=0&&(d.mob.health-=4,d.mob.showDamage(d.mob.health),d.mob.health<=0&&d.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,o),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="sitting")}}catAI(t,e,n,i,o,a){const r=t.data,c=2.5;r.state!=="tamed"?r.state==="idle"?(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(r.state="sitting")),r.x+=Math.sin(r.rotY)*1*e,r.z+=Math.cos(r.rotY)*1*e):r.state==="sitting"&&t.timer<=0&&(r.state="idle"):n>64?(r.rotY=Math.atan2(i,o),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e):r.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,r=n.z-i.z,c=a*a+r*r;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const h of this.mobs.values())if(h.data.type==="cat"&&h.data.state==="tamed"){const d=h.data.x-i.x,g=h.data.z-i.z,v=h.data.y-i.y;if(d*d+g*g+v*v<100){l=!0;break}}if(l){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,r);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=hn(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}slimeAI(t,e,n,i,o,a){const r=t.data,c=4.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,o);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}tryMount(t){for(const[e,n]of this.mobs){if(n.data.type!=="horse"||!n.mob.alive)continue;const i=n.data.x-t.x,o=n.data.z-t.z;if(i*i+o*o<4)return this.mountedMobId=e,n.data.state="mounted",!0}return!1}dismount(){this.mountedMobId=null}updateMount(t,e,n,i){if(!this.mountedMobId)return;const o=this.mobs.get(this.mountedMobId);if(!o||!o.mob.alive){this.mountedMobId=null;return}o.data.x=t.x,o.data.z=t.z,o.data.rotY=e,o.mob.targetPos.set(o.data.x,o.data.y,o.data.z),o.mob.group.position.set(o.data.x,o.data.y,o.data.z)}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};C(oi,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom"])),C(oi,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom"])),C(oi,"CREEPER_FUSE_TIME",1.5);let Br=oi;class Ix{constructor(){C(this,"hotbarEl",document.getElementById("hotbar"));C(this,"topLeftEl",document.getElementById("topLeft"));C(this,"topRightEl",document.getElementById("topRight"));C(this,"connEl",document.getElementById("connStatus"));C(this,"blockNameEl",document.getElementById("blockName"));C(this,"chatMsgsEl",document.getElementById("chatMessages"));C(this,"chatInput",document.getElementById("chatInput"));C(this,"heartsEl",document.getElementById("hearts"));C(this,"hungerEl",document.getElementById("hunger"));C(this,"timeEl",document.getElementById("timeDisplay"));C(this,"gameModeEl",document.getElementById("gameModeEl"));C(this,"deathScreen",document.getElementById("deathScreen"));C(this,"respawnBtn",document.getElementById("respawnBtn"));C(this,"selectedIndex",0);C(this,"gameMode","survival");C(this,"craftingPanel",null);C(this,"inventoryPanel",null);C(this,"xpBarEl",null);C(this,"xpLevelEl",null);C(this,"dayCounterEl",null);C(this,"dayNotifyEl",null);C(this,"_lastLevel",-1);C(this,"_lastDay",-1);C(this,"debugScreenEl",null);C(this,"debugVisible",!1);C(this,"_lastHp",-1);C(this,"_lastMaxHp",-1);C(this,"_lastWither",!1);C(this,"_lastHunger",-1);C(this,"_lastMaxHunger",-1);C(this,"_lastTimeStr","");C(this,"_lastTimeDayTime",-1);C(this,"_lastPosX",NaN);C(this,"_lastPosY",NaN);C(this,"_lastPosZ",NaN);C(this,"_posXEl",null);C(this,"_posYEl",null);C(this,"_posZEl",null);C(this,"onChat");C(this,"onRespawn");C(this,"onCraft");C(this,"onInventorySwap");C(this,"getInvCount");C(this,"tooltipEl",document.getElementById("hotbarTooltip"));C(this,"tooltipTimer",null);C(this,"chatHistory",[]);C(this,"chatHistoryIdx",-1);C(this,"chestPanel",null);C(this,"onChestClose");C(this,"onChestTransfer");C(this,"smeltingPanel",null);C(this,"onSmelt");C(this,"killFeedEl",null);C(this,"playerListPanel",null);C(this,"enchantPanel",null);C(this,"onEnchant",null);C(this,"tradePanel",null);C(this,"onTrade",null);C(this,"bossBarEl",null);C(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,o)=>{const a=i.querySelector(".slot-icon");if(!a)return;const r=t[o]??0;if(r===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+Os(r).toString(16).padStart(6,"0"),a.title=jn(r);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[o]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,o)=>{i.classList.toggle("active",o===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,o=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&o===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=o,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=o.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),o=Math.floor(t/2),a=t%2===1;for(let r=0;r<i;r++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),r<o?c.classList.add("full"):r===o&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,o=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const r=this.deathScreen.querySelector(".death-coords");r&&(r.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${o}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),o=t%2===1;for(let a=0;a<n;a++){const r=document.createElement("div");r.className="hunger-icon",a<i?r.classList.add("full"):a===i&&o?r.classList.add("half"):r.classList.add("empty"),this.hungerEl.appendChild(r)}}updateTime(t){if(Math.abs(t-this._lastTimeDayTime)<7e-4)return;this._lastTimeDayTime=t;const e=(t*24+6)%24,n=Math.floor(e),i=Math.floor((e-n)*60),o=n>=12?"PM":"AM",a=n%12||12,r=i<10?i===0?"00":"0"+i:""+i;let c="☀️";t<.2||t>.8?c="🌙":(t<.3||t>.7)&&(c="🌅");const l=`${c} ${a}:${r} ${o}`;l!==this._lastTimeStr&&(this._lastTimeStr=l,this.timeEl.textContent=l)}setGameMode(t){this.gameMode=t,this.gameModeEl.textContent=t==="creative"?"✈ Creative":t==="spectator"?"👁 Spectator":"⚔ Survival",this.gameModeEl.className=`gamemode-badge ${t}`;const e=t==="creative"||t==="spectator";this.heartsEl.style.display=e?"none":"flex",this.hungerEl.style.display=e?"none":"flex"}buildXPBar(){this.xpBarEl=document.createElement("div"),this.xpBarEl.id="xp-bar",this.xpBarEl.style.cssText=`
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
    `;let i=null;const o=[],a=h=>{const d=o[h];if(!d)return;const g=t[h]??0,v=g===0?"#333333":"#"+Os(g).toString(16).padStart(6,"0");d.style.background=i===h?"#ffee88":v,d.style.border=i===h?"2px solid #ffcc00":"1px solid #1a1a1a",d.title=g===0?"Empty":jn(g)};for(let h=0;h<36;h++){const d=document.createElement("div"),g=t[h]??0,v=g===0?"#333333":"#"+Os(g).toString(16).padStart(6,"0");d.style.cssText=`
        width: 24px; height: 24px;
        background: ${v};
        border: 1px solid #1a1a1a;
        border-radius: 1px; cursor: pointer;
        transition: background 0.1s;
        position: relative;
      `,d.title=g===0?"Empty":jn(g);const p=t[h]??0;if(p!==0&&this.getInvCount){const m=document.createElement("span");m.style.cssText="position:absolute;bottom:1px;right:2px;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",m.textContent=String(this.getInvCount(p)||""),d.appendChild(m)}o.push(d);const _=h;d.addEventListener("click",()=>{var m;if(i===null)t[_]!==0&&(i=_,a(_));else if(i===_)i=null,a(_);else{const f=t[_];t[_]=t[i],t[i]=f;const E=i;i=null,a(_),a(E),(m=this.onInventorySwap)==null||m.call(this,E,_)}}),d.addEventListener("mouseenter",()=>{i!==_&&(d.style.outline="1px solid #aaa")}),d.addEventListener("mouseleave",()=>{d.style.outline="none"}),n.appendChild(d)}this.inventoryPanel.appendChild(n);const r=document.createElement("div");r.textContent="Crafting",r.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(r);const c=document.createElement("div");c.style.cssText=`
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
    `,l.textContent="Close (E)",l.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(l),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e;if(t.key==="Enter"){const n=this.chatInput.value.trim();n&&(this.chatHistory.unshift(n),this.chatHistory.length>50&&this.chatHistory.pop(),this.chatHistoryIdx=-1,(e=this.onChat)==null||e.call(this,n)),this.closeChatInput(),t.stopPropagation();return}if(t.key==="ArrowUp"){t.preventDefault(),this.chatHistory.length>0&&(this.chatHistoryIdx=Math.min(this.chatHistoryIdx+1,this.chatHistory.length-1),this.chatInput.value=this.chatHistory[this.chatHistoryIdx]),t.stopPropagation();return}if(t.key==="ArrowDown"){t.preventDefault(),this.chatHistoryIdx=Math.max(this.chatHistoryIdx-1,-1),this.chatInput.value=this.chatHistoryIdx>=0?this.chatHistory[this.chatHistoryIdx]:"",t.stopPropagation();return}if(t.key==="Escape"){this.closeChatInput(),t.stopPropagation();return}t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed","/give","/god","/boss","/achievements","/stats","/nether","/craft","/tame","/spectator"],n=t.slice(1).toLowerCase(),i=e.filter(o=>o.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatHistoryIdx=-1,this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const o=new Date,a=o.getHours().toString().padStart(2,"0"),r=o.getMinutes().toString().padStart(2,"0"),c=`[${a}:${r}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const d=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${d}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
      position: fixed; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      background: #3d3d3d; border: 3px solid #111;
      padding: 16px; width: 360px; max-height: 80vh;
      overflow-y: auto; z-index: 1000; border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      font-family: "Minecraft", monospace, Arial, sans-serif;
    `;const e=document.createElement("h2");e.textContent="✦ Crafting",e.style.cssText="color: #ffdd44; margin: 0 0 4px 0; text-align: center; font-size: 18px; text-shadow: 2px 2px #000;",this.craftingPanel.appendChild(e);const n=document.createElement("div");n.style.cssText="color: #aaa; font-size: 11px; text-align: center; margin-bottom: 12px;",n.textContent="Right-click crafting table to open. Hand-craftable items marked ✋",this.craftingPanel.appendChild(n);const i=this.getInvCount??(()=>0),o={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",3:"Stone",4:"Sand"};for(const r of t){const c=Object.entries(r.ingredients).every(([_,m])=>i(Number(_))>=m),l=document.createElement("div");l.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${c?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${c?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${c?"pointer":"default"};
        opacity: ${c?"1":"0.5"};
      `;const h=document.createElement("span");h.textContent=r.hand?"✋":"🔨",h.style.cssText="font-size: 16px; flex-shrink: 0;";const d=document.createElement("div");d.style.cssText="flex: 1;";const g=document.createElement("div");g.textContent=r.name,g.style.cssText=`color: ${c?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const v=document.createElement("div"),p=Object.entries(r.ingredients).map(([_,m])=>{const f=i(Number(_)),E=o[Number(_)]??`Item ${_}`;return`<span style="color:${f>=m?"#88ff88":"#ff8888"}">${m}x ${E}</span>`});v.innerHTML=p.join(", "),v.style.cssText="font-size: 10px; margin-top: 2px;",d.appendChild(g),d.appendChild(v),l.appendChild(h),l.appendChild(d),c&&l.addEventListener("click",()=>{var m;((m=this.onCraft)==null?void 0:m.call(this,r.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(l)}const a=document.createElement("button");a.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,a.textContent="Close [E]",a.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(a),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=h=>{const d=h===0?"444444":Os(h).toString(16).padStart(6,"0");return`
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
    `;const o=document.createElement("h2");o.textContent="Chest",o.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(o);const a=(h,d,g,v)=>{const p=document.createElement("div");p.style.cssText="margin-bottom: 10px;";const _=document.createElement("div");_.textContent=h,_.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",p.appendChild(_);const m=document.createElement("div");m.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${v}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let f=0;f<d.length;f++){const E=d[f]??0,M=document.createElement("div");if(M.style.cssText=i(E),M.title=E===0?"Empty":`${jn(E)} (click to move)`,E!==0){const O=document.createElement("span");O.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,O.textContent=jn(E).slice(0,3),M.appendChild(O)}M.addEventListener("mouseenter",()=>{E&&(M.style.transform="scale(1.1)",M.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",M.style.zIndex="2")}),M.addEventListener("mouseleave",()=>{M.style.transform="scale(1)",M.style.boxShadow="none",M.style.zIndex="0"});const S=f;M.addEventListener("click",()=>{var O;E!==0&&((O=this.onChestTransfer)==null||O.call(this,g,S,t,e),this.hideChestUI(),this.showChestUI(t,e))}),m.appendChild(M)}return p.appendChild(m),p};this.chestPanel.appendChild(a("Chest",t,!0,9));const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(r),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
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
    `;const l=document.createElement("div");l.appendChild(r),l.appendChild(c),e.appendChild(o),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const d=document.createElement("div");d.id="smelt-fuel",d.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(h),this.smeltingPanel.appendChild(d);const g=document.createElement("button");g.style.cssText=`
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
    `,g.textContent="Smelt",g.addEventListener("click",()=>{var m;const _=(m=this.onSmelt)==null?void 0:m.call(this,14,5);_!=null&&this.addChatMessage("",`Smelted item (type ${_})!`,!0)}),this.smeltingPanel.appendChild(g);const v=document.createElement("button");v.style.cssText=`
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
    `,v.textContent="Close",v.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(v);const p=document.createElement("style");p.textContent=`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `,document.head.appendChild(p),document.body.appendChild(this.smeltingPanel)}hideSmeltingUI(){this.smeltingPanel&&(this.smeltingPanel.remove(),this.smeltingPanel=null)}isSmeltingOpen(){return this.smeltingPanel!==null}addKillFeedEntry(t,e){this.killFeedEl||(this.killFeedEl=document.createElement("div"),this.killFeedEl.id="killfeed",this.killFeedEl.style.cssText=`
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
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),o=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60,c=o>0?`${o}h ${a}m ${r}s`:`${a}m ${r}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[g,v]of l){if(!g){const f=document.createElement("hr");f.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(f);continue}const p=document.createElement("div");p.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const _=document.createElement("span");_.textContent=g,_.style.color="#aaa";const m=document.createElement("span");m.textContent=v,m.style.cssText="font-weight: bold; color: #fff;",p.appendChild(_),p.appendChild(m),this.scoreboardPanel.appendChild(p)}const h=Object.entries(t.killsByType||{}).sort((g,v)=>v[1]-g[1]);if(h.length>0){const g=document.createElement("hr");g.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(g);const v=document.createElement("div");v.textContent="Kills by Type",v.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(v);for(const[p,_]of h){const m=document.createElement("div");m.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const f=document.createElement("span");f.textContent=p.charAt(0).toUpperCase()+p.slice(1),f.style.color="#999";const E=document.createElement("span");E.textContent=`${_}`,E.style.color="#ddd",m.appendChild(f),m.appendChild(E),this.scoreboardPanel.appendChild(m)}}const d=document.createElement("div");d.textContent="Press O to close",d.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(d),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const Dx=new Ce(.12,.12,.12),Ox=128;class Nx{constructor(t){C(this,"scene");C(this,"pool",[]);C(this,"active",[]);this.scene=t;for(let e=0;e<Ox;e++){const n=new Ie({color:16777215,transparent:!0}),i=new Qt(Dx,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,o,a,r,c,l=1,h=!1){let d=null;for(let g=0;g<this.pool.length;g++)if(!this.pool[g].active){d=this.pool[g];break}d&&(d.active=!0,d.life=0,d.maxLife=c,d.vx=o,d.vy=a,d.vz=r,d.mesh.position.set(t,e,n),d.mesh.scale.setScalar(l),d.mesh.visible=!0,d.mat.color.setHex(i),d.mat.opacity=1,h?(d.mat.emissive.setHex(i),d.mat.emissiveIntensity=.6):d.mat.emissiveIntensity=0,this.active.push(d))}spawn(t,e,n,i,o,a,r,c,l=.3){this.acquire(t,e,n,i,a,r,c,o,l)}burst(t,e,n,i,o=12){const a=Os(i);for(let r=0;r<o;r++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const o=Os(i);for(let a=0;a<8;a++){const r=a/8*Math.PI*2;this.acquire(t+Math.cos(r)*.4,e,n+Math.sin(r)*.4,o,Math.cos(r)*2,.5+Math.random(),Math.sin(r)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,r=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*r,3+Math.random()*2,Math.sin(a)*r,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let o=0;o<i;o++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let o=0;o<i;o++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let o=0;o<i;o++){const a=Math.random()<.5?11158783:16763904,r=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(r)*c,1+Math.random()*2,Math.sin(r)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let o=0;o<i;o++){const a=Math.random(),r=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,r,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let o=0;o<i;o++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class Ux{constructor(){C(this,"ctx",null);C(this,"musicActive",!1);C(this,"musicTimeout",null);C(this,"ambientActive",!1);C(this,"ambientTimeout",null);C(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.5,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.3,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.6,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const o=e.createGain();o.gain.setValueAtTime(t*.5,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(o),o.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,o=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=o;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime+i),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(r),r.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),o=n.createBufferSource();o.buffer=i;const a=n.createGain(),r=t*(.1+Math.random()*.06);a.gain.setValueAtTime(r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}o.connect(c),c.connect(a),a.connect(n.destination),o.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const o=e.createGain(),a=Math.min(t*.15,.5);o.gain.setValueAtTime(a,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=150,i.connect(r),r.connect(o),o.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),o.gain.setValueAtTime(.06,e.currentTime),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(o),o.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),o=i.getChannelData(0);for(let l=0;l<n;l++)o[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(r),r.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),o=t.createBuffer(1,i,n),a=o.getChannelData(0);for(let r=0;r<i;r++)a[r]=Math.random()*2-1;return o}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let o=0;const a=()=>{if(!this.musicActive)return;const r=e.createOscillator(),c=e.createGain();r.type=t==="disc_blue"?"square":"sine",r.frequency.value=i[o%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),r.connect(c),c.connect(e.destination),r.start(),r.stop(e.currentTime+.5),o++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,o=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),r=2+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const h=i[Math.floor(Math.random()*i.length)],d=a.createOscillator(),g=a.createGain();d.type=t==="cave"||Math.random()>.5?"sine":"triangle",d.frequency.value=h*(t==="cave"?.5:1);const v=3+Math.random()*4;g.gain.setValueAtTime(0,a.currentTime),g.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+v*.3),g.gain.linearRampToValueAtTime(0,a.currentTime+v),d.detune.value=(Math.random()-.5)*10,d.connect(g),g.connect(this.ambientGain),d.start(),d.stop(a.currentTime+v+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(o,c)};this.ambientTimeout=setTimeout(o,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Bx{constructor(t){C(this,"scene");C(this,"drops",[]);C(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const o=kx[i]??16777215,a=new Ce(.35,.35,.35),r=new Ie({color:o}),c=new Qt(a,r);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const o=Fx[t];if(o){for(const a of o)if(Math.random()<a.chance){const r=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<r;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let o=this.drops.length-1;o>=0;o--){const a=this.drops[o];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const r=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(r*r+l*l+c*c<2.25||a.life<=0)&&(r*r+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(o,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const kx={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},Fx={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]},ru={};for(const[s,t]of Object.entries(Kr)){const e=Number(s);if(t&&t.color!=null){const n=t.color;ru[e]=[n>>16&255,n>>8&255,n&255]}}class zx{constructor(t){C(this,"canvas");C(this,"ctx");C(this,"container");C(this,"updateTimer",0);C(this,"world");C(this,"RADIUS",32);C(this,"CANVAS_SIZE",128);C(this,"UPDATE_INTERVAL",.3);C(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,o){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,o))}drawMap(t,e,n,i){const o=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,r=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let f=0;f<c.length;f+=4)c[f]=26,c[f+1]=26,c[f+2]=26,c[f+3]=255;const h=Math.floor(t.x)-this.RADIUS,d=Math.floor(t.x)+this.RADIUS,g=Math.floor(t.z)-this.RADIUS,v=Math.floor(t.z)+this.RADIUS;for(let f=h;f<=d;f++)for(let E=g;E<=v;E++){let M=0;for(let W=40;W>=0;W--){const b=this.world.getBlockType(f,W,E);if(b!==void 0){M=b;break}}if(M===0)continue;const S=Math.round(o+(f-t.x)*r),O=Math.round(a+(E-t.z)*r);if(S<0||S>=l||O<0||O>=l)continue;const R=ru[M],I=(O*l+S)*4;R?(c[I]=R[0],c[I+1]=R[1],c[I+2]=R[2],c[I+3]=255):(c[I]=255,c[I+1]=255,c[I+2]=255,c[I+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const f of i){if(!f.alive)continue;const E=o+(f.x-t.x)*r,M=a+(f.z-t.z)*r;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}for(const f of n){const E=o+(f.x-t.x)*r,M=a+(f.z-t.z)*r;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(o,a,3,0,Math.PI*2),this.ctx.fill();const p=6,_=o+Math.sin(e)*p,m=a+Math.cos(e)*p;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(o,a),this.ctx.lineTo(_,m),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class Hx{constructor(t,e){C(this,"scene");C(this,"sounds");C(this,"type","clear");C(this,"rainParticles",null);C(this,"rainPositions",null);C(this,"rainVelY",null);C(this,"rainCount",2e3);C(this,"splashParticles",null);C(this,"splashPositions",null);C(this,"splashLife",null);C(this,"splashCount",200);C(this,"thunderTimer",0);C(this,"thunderFlash",!1);C(this,"nextThunder",15);C(this,"_lightningStrike",null);C(this,"rainSoundTimer",0);C(this,"rainAmbientNode",null);C(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new pn,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new fn(e,3));const i=new Tc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new Rh(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const o=new pn,a=new Float32Array(this.splashCount*3),r=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,r[l]=0;o.setAttribute("position",new fn(a,3));const c=new Tc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new Rh(o,c),this.splashPositions=a,this.splashLife=r,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let o=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&o<this.splashCount){const r=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[o*3]=r,this.splashPositions[o*3+1]=e.y-1+Math.random()*.5,this.splashPositions[o*3+2]=c,this.splashLife[o]=.3,o++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this._lightningStrike={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40},this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}consumeLightningStrike(){const t=this._lightningStrike;return this._lightningStrike=null,t}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let o=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(o+.02*h)/1.02,o=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const r=t.createGain();r.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(r),r.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=r,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const Gx=new Rn(.2,6,6),Vx=new di({color:8978244});class Wx{constructor(t){C(this,"scene");C(this,"orbs",[]);C(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const o=new Qt(Gx,Vx);o.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(o),this.orbs.push({mesh:o,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const o=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z,c=o*o+a*a+r*r;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const Xx=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class Yx{constructor(){C(this,"achievements");C(this,"counters",new Map);C(this,"onUnlock",null);this.achievements=new Map(Xx.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const o=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",o),o<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class qx{constructor(){C(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const jx=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Zx=`
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
`,Ei=class Ei{constructor(){C(this,"mesh");C(this,"material");C(this,"_zenith",new yt);C(this,"_horizon",new yt);C(this,"_glow",new yt);C(this,"_sunDir",new U);const t=new Rn(400,24,16);this.material=new Ri({vertexShader:jx,fragmentShader:Zx,side:rn,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new U(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new Qt(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=Ei.ZENITH,o=Ei.HORIZON,a=Ei.GLOW;let r;if(n<.2){const h=n/.2;this._zenith.copy(i.night).lerp(i.dawn,h),this._horizon.copy(o.night).lerp(o.dawn,h),this._glow.copy(a.night).lerp(a.dawn,h),r=h*.8}else if(n<.3){const h=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,h),this._horizon.copy(o.dawn).lerp(o.day,h),this._glow.copy(a.dawn).lerp(a.day,h),r=(1-h)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(o.day),this._glow.copy(a.day),r=.05;else if(n<.8){const h=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,h),this._horizon.copy(o.day).lerp(o.dusk,h),this._glow.copy(a.day).lerp(a.dusk,h),r=h*.8}else{const h=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,h),this._horizon.copy(o.dusk).lerp(o.night,h),this._glow.copy(a.dusk).lerp(a.night,h),r=(1-h)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=r,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};C(Ei,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),C(Ei,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),C(Ei,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Oc=Ei;const ze=new Zd({antialias:!1});ze.setPixelRatio(Math.min(window.devicePixelRatio,1));ze.setSize(window.innerWidth,window.innerHeight);ze.shadowMap.enabled=!1;ze.toneMapping=ci;ze.toneMappingExposure=1.1;document.body.appendChild(ze.domElement);window.addEventListener("resize",()=>{Fe.aspect=window.innerWidth/window.innerHeight,Fe.updateProjectionMatrix(),ze.setSize(window.innerWidth,window.innerHeight)});const ie=new R_;ie.background=null;ie.fog=new qc(8900331,60,96);const Fe=new yn(75,window.innerWidth/window.innerHeight,.1,500);let Tr=!1,id=50;const Kx=240;let We=.25;const ei={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},ni={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},$x=new Rn(4,12,12),Jx=new di({color:16777215}),ji=new Qt($x,Jx);ie.add(ji);const Qx=new Rn(2.5,12,12),ty=new di({color:14540287}),Bs=new Qt(Qx,ty);ie.add(Bs);const xo=new Oc;ie.add(xo.mesh);const au=[],cu=new Ie({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let s=0;s<24;s++){const t=new fe,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,o=3+Math.random()*6,a=.8+Math.random()*.8,r=new Ce(i,a,o),c=new Qt(r,cu);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),ie.add(t),au.push(t)}const lu=new F_(16777215,.5);ie.add(lu);const Gn=new Qd(16774368,1.4);Gn.castShadow=!0;Gn.shadow.mapSize.set(512,512);Gn.shadow.camera.near=.5;Gn.shadow.camera.far=300;Gn.shadow.camera.left=Gn.shadow.camera.bottom=-110;Gn.shadow.camera.right=Gn.shadow.camera.top=110;ie.add(Gn);const Nc=new Qd(3359846,.3);ie.add(Nc);const hu=new U_(8900331,4881482,.3);ie.add(hu);const ho=new yt,xi=new yt;let pr=0;function ey(s){We=(We+s/Kx)%1;const t=(We-.25)*Math.PI*2,e=t+Math.PI,n=150;if(ji.position.set(0,Math.sin(t)*n,Math.cos(t)*n),Bs.position.set(0,Math.sin(e)*n,Math.cos(e)*n),Gn.position.copy(ji.position).normalize().multiplyScalar(100),Nc.position.copy(Bs.position).normalize().multiplyScalar(100),pr%4===0)for(const c of au)c.position.x=(c.position.x+.06+125)%250-125;if(pr++,pr<3)return;pr=0;let i,o;const a=We;if(a<.2){const c=a/.2;ho.copy(ei.night).lerp(ei.dawn,c),xi.copy(ni.night).lerp(ni.dawn,c),i=.05+c*.8,o=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;ho.copy(ei.dawn).lerp(ei.day,c),xi.copy(ni.dawn).lerp(ni.day,c),i=.85+c*.55,o=.5+c*.1}else if(a<.7)ho.copy(ei.day),xi.copy(ni.day),i=1.4,o=.6;else if(a<.8){const c=(a-.7)/.1;ho.copy(ei.day).lerp(ei.dusk,c),xi.copy(ni.day).lerp(ni.dusk,c),i=1.4-c*1.35,o=.6-c*.55}else{const c=(a-.8)/.2;ho.copy(ei.dusk).lerp(ei.night,c),xi.copy(ni.dusk).lerp(ni.night,c),i=.05,o=.05}ze.setClearColor(xi),ie.fog.color.copy(xi),xo.update(We,ji.position),xo.followCamera(Fe.position),Gn.intensity=i,lu.intensity=Math.max(o,.04),Nc.intensity=Math.max(.35-i*.2,0),hu.intensity=o*.5;const r=Math.sin(t)>0;ji.visible=r,Bs.visible=!r,cu.opacity=o>.2?.78:0}let Nt=null,L=null;ie.add(Fe);const H=new Ix;let uo=null;const Ve=new Nx(ie),Kt=new Ux,kr=new Bx(ie),Uc=new Wx(ie);let Bc=null;const Gi=new Hx(ie,Kt);let ce=null,Jt=null,Zn=!0,Vi="",kn=null,Tn=0,ke=0,zn=1;H.updateDayCounter(zn);const An=new Yx;let As=!1;const pe=new Array(36).fill(0),ge=new Array(36).fill(0);function Rs(s,t=1){for(let e=0;e<pe.length;e++)if(pe[e]===s&&ge[e]<64){const n=64-ge[e],i=Math.min(t,n);if(ge[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=pe.findIndex((n,i)=>n===0&&ge[i]===0);if(e<0)return t;pe[e]=s,ge[e]=Math.min(t,64),t-=ge[e]}return 0}function Ts(s,t=1){if(pe.reduce((n,i,o)=>n+(i===s?ge[o]:0),0)<t)return!1;for(let n=0;n<pe.length&&t>0;n++)if(pe[n]===s){const i=Math.min(t,ge[n]);ge[n]-=i,t-=i,ge[n]===0&&(pe[n]=0)}return!0}function mr(s){return pe.reduce((t,e,n)=>t+(e===s?ge[n]:0),0)}const Ps=[],ws=[],du=new Ce(.05,.05,.4),uu=new di({color:16768324}),ny=new Rn(.15,8,8),iy=new di({color:26316});let Pe=null;const yi=new Zr;yi.far=5;const sd=new te(0,0),sy=new Zr;sy.far=1;let Ae=20,on=20,ii=0,Ka=0,gr=new U,$a=0,Ja=0;const Mi={sharpness:0,protection:0,speed:0},Bn={strength:0,speed:0};let go=0;const od=5;let Fr=0,zr=0;const vn=new qx;vn.load();let Qa=0;const oy=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let _r=0,wr=!1;const kc=60,rd=new Float32Array(kc);let tc=0,fo=0,Zi="You died",ki=new U,ec=0,nc=0,ic=0,sc=0;const ry={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let oc=0,ad=.35,cd=!1;const rc=new U;let ld=!1;function ay(s,t){var i,o,a,r,c;const e=s.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const l=(i=e[1])==null?void 0:i.toLowerCase();return l==="creative"||l==="survival"||l==="spectator"?(L.setGameMode(l),H.setGameMode(l),l==="survival"&&(Ae=20,H.updateHunger(Ae,on)),H.addChatMessage("",`Gamemode set to ${l}`,!0),ce==null||ce.sendGameMode(l),!0):(H.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return L.setGameMode("spectator"),H.setGameMode("spectator"),H.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return L.takeDamage(L.maxHealth),!0;if(n==="/heal")return L.health=L.maxHealth,H.updateHearts(L.maxHealth,L.maxHealth),H.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return Ae=on,H.updateHunger(Ae,on),H.addChatMessage("","Fed to full!",!0),!0;if(n==="/god")return L.gameMode=L.gameMode==="creative"?"survival":"creative",H.addChatMessage("",L.gameMode==="creative"?"God mode ON (creative)":"God mode OFF (survival)",!0),!0;if(n==="/give"){const l=parseInt(e[1]??""),h=parseInt(e[2]??"1")||1;return isNaN(l)||l<=0?(H.addChatMessage("","Usage: /give <typeId> [count]",!0),!0):(Rs(l,h),H.updateHotbarFromInventory(pe,ge),H.addChatMessage("",`Gave ${h}x item ${l}`,!0),!0)}if(n==="/time"){const l=(o=e[1])==null?void 0:o.toLowerCase();return l==="day"?(We=.3,H.addChatMessage("","Set time to day",!0),!0):l==="night"?(We=0,H.addChatMessage("","Set time to night",!0),!0):l==="sunrise"?(We=.22,H.addChatMessage("","Set time to sunrise",!0),!0):l==="sunset"?(We=.75,H.addChatMessage("","Set time to sunset",!0),!0):(H.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const l=parseFloat(e[1]??"0"),h=parseFloat(e[2]??"0");return!isNaN(l)&&!isNaN(h)?(L.spawnAt(l,h),H.addChatMessage("",`Teleported to ${l.toFixed(1)}, ${h.toFixed(1)}`,!0)):H.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return H.showCraftingUI(),!0;if(n==="/weather"){const l=(a=e[1])==null?void 0:a.toLowerCase();return l==="clear"||l==="rain"||l==="thunder"?(Gi.setWeather(l),H.addChatMessage("",`Weather set to ${l}`,!0),!0):(H.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const l=(r=e[1])==null?void 0:r.toLowerCase();return l==="enter"?(qi=!0,L.spawnAt(L.position.x,L.position.z),L.position.y=30,ie.fog.color.copy(new yt(16729088)),ze.setClearColor(2228224),xo.mesh.visible=!1,H.addChatMessage("","Entered the Nether!",!0),!0):l==="exit"?(qi=!1,L.spawnAt(L.position.x,L.position.z),ie.fog.color.copy(new yt(8900331)),xo.mesh.visible=!0,H.addChatMessage("","Exited the Nether!",!0),!0):(H.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return kn=Jt==null?void 0:Jt.spawnAt("enderdragon",L.position.x,L.position.y+15,L.position.z-20),H.addChatMessage("","☠ The Ender Dragon awakens!",!0),H.showBossBar("Ender Dragon",(kn==null?void 0:kn.maxHealth)??200,200),!0;if(n==="/achievements")return An.getAll().forEach(l=>{H.addChatMessage("",`${l.unlocked?"✅":"⬜"} ${l.icon} ${l.name}: ${l.description}`,!0)}),!0;if(n==="/save")return Zn?(Nt.saveToStorage({inventory:[...pe],invCount:[...ge],px:L.position.x,py:L.position.y,pz:L.position.z,health:L.health,hunger:Ae,xp:Tn,xpLevel:ke,dayCount:zn}),H.addChatMessage("","World saved!",!0)):H.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if(Zn){const l=Nt.loadFromStorage();if(l){for(let h=0;h<36;h++)pe[h]=l.inventory[h]??0,ge[h]=l.invCount[h]??0;L.position.set(l.px,l.py,l.pz),L.health=l.health,Ae=l.hunger,Tn=l.xp,ke=l.xpLevel,zn=l.dayCount,H.updateHearts(L.health,L.maxHealth),H.updateHunger(Ae,on),H.updateXP(Tn,ke),H.updateDayCounter(zn),H.updateHotbarFromInventory(pe,ge)}H.addChatMessage("","World loaded!",!0)}else H.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const l=(c=e[1])==null?void 0:c.toLowerCase();if(l==="wolf"||l==="cat"){const h=(Jt==null?void 0:Jt.getMobsByType(l))??[];for(const{id:d,mob:g}of h)if(L.position.distanceTo(g.group.position)<=5)return g.data.state="tamed",H.addChatMessage("",`Tamed a ${l}!`,!0),Kt.play("eat"),!0;H.addChatMessage("",`No ${l} found nearby`,!0)}else H.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const l=vn.getAll();return H.addChatMessage("","--- Statistics ---",!0),H.addChatMessage("",`Kills: ${l.kills}`,!0),H.addChatMessage("",`Deaths: ${l.deaths}`,!0),H.addChatMessage("",`Blocks Placed: ${l.blocksPlaced}`,!0),H.addChatMessage("",`Blocks Broken: ${l.blocksBroken}`,!0),H.addChatMessage("",`Mobs Killed: ${l.mobsKilled}`,!0),H.addChatMessage("",`Distance Traveled: ${l.distanceTraveled.toFixed(1)}m`,!0),H.addChatMessage("",`Play Time: ${Math.floor(l.playTime/60)}m ${Math.floor(l.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/give <typeId> [count]","/god - toggle creative/survival","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(l=>H.addChatMessage("",l,!0)),!0):(H.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const cy=document.getElementById("loginScreen"),Hr=document.getElementById("nameInput"),ly=document.getElementById("playBtn"),Fc=document.getElementById("hud"),hy=document.getElementById("underwaterOverlay");let Fi=!1,ac=0;const hd=55,dd=96,dy=2,uy=20,ud=new yt(670820),fd=document.getElementById("portalOverlay");let Un=0,qi=!1;const fy=new yt(3344392),fu=6;function py(s,t,e){let n=-1;const i=fu;for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++)for(let r=-i;r<=i;r++){const c=Math.floor(s)+o,l=Math.floor(t)+a,h=Math.floor(e)+r;if(Nt.getBlockType(c,l,h)===73){const d=Math.sqrt(o*o+a*a+r*r);(n<0||d<n)&&(n=d)}}return n}const pu=document.getElementById("damageFlash"),my=document.getElementById("speedLines"),pd=document.getElementById("compassLabel"),md=document.getElementById("lowHealthVignette");let Cr=0,gd=40;function gy(){pu.style.opacity="1",Cr=.15}function _y(s,t,e){if(Cr>0&&(Cr-=s,Cr<=0&&(pu.style.opacity="0")),t<gd&&gy(),gd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;md.style.opacity=String(i)}else md.style.opacity="0"}const vy=document.getElementById("crosshair"),lc=document.getElementById("breakProgress");let _d=!1;function xy(s){const t=s>0;if(t!==_d&&(vy.classList.toggle("breaking",t),_d=t),t){const e=Math.floor(s*360);lc.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,lc.style.opacity="1"}else lc.style.opacity="0"}async function $c(s){var g,v;Vi=s.trim()||`Player${Math.floor(Math.random()*999)}`,Zn=(((g=window.__getSelectedMode)==null?void 0:g.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),o=document.getElementById("playBtn");if(o.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await V_(),n.style.width="40%",i.textContent="Generating world...",Nt||(Nt=new Pc(ie),L=new Lc(Fe,Nt,ie),ie.add(Fe),Yh()&&(uo=new Cv(L.getKeys(),()=>L.breakBlockNow(),()=>L.placeBlockNow()),uo.onLookDelta=(p,_)=>{L.yaw-=p*.004,L.pitch-=_*.004,L.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,L.pitch))},uo.hide())),n.style.width="70%",await new Promise(p=>setTimeout(p,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(p=>setTimeout(p,150)),n.style.width="100%",cy.style.display="none",Fc.style.display="block",uo&&uo.show(),Zn){const p=Nt.loadFromStorage();if(Nt.initializeTorchLights(),p){for(let _=0;_<36;_++)pe[_]=p.inventory[_]??0,ge[_]=p.invCount[_]??0;L.health=p.health,Ae=p.hunger,Tn=p.xp,ke=p.xpLevel,zn=p.dayCount,setTimeout(()=>{L.position.set(p.px,p.py,p.pz),H.updateHearts(L.health,L.maxHealth),H.updateHunger(Ae,on),H.updateXP(Tn,ke),H.updateDayCounter(zn),H.updateHotbarFromInventory(pe,ge)},100)}}{let p=0,_=0,m=9999;for(let f=-5;f<=5&&m===9999;f++)for(let E=-5;E<=5&&m===9999;E++){const M=f*16,S=E*16,O=Nt.getSurfaceHeight(M,S);O>=63&&O<=80&&(m=O,p=M,_=S)}if(m===9999)for(let f=-5;f<=5;f++)for(let E=-5;E<=5;E++){const M=f*16,S=E*16,O=Nt.getSurfaceHeight(M,S);O>62&&O<m&&(m=O,p=M,_=S)}L.spawnAt(p,_)}Yh()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>Kt.startAmbientMusic("day"),3e3),L.onHealthChanged=p=>H.updateHearts(p,L.maxHealth),L.setDeathCause=p=>{Zi=p},L.onDied=()=>{vn.increment("deaths"),ki.copy(L.position);const p=document.getElementById("screenFade");p.style.background="rgba(80,0,0,0.7)",p.style.transition="opacity 0.8s ease",p.style.opacity="1",setTimeout(()=>{H.showDeath(Zi,ki.x,ki.y,ki.z,ke),p.style.opacity="0"},600),H.addChatMessage("","☠ You died!",!0),Kt.play("hurt")},L.onOpenChat=()=>{H.openChatInput(),L.setChatOpen(!0)},An.onUnlock=p=>{H.showAchievement(p.name,p.description,p.icon),Kt.play("eat")};{const p=[],_=new Rn(.15,6,6),m=new Ie({color:15658751}),f=new Ie({color:15786176});document.addEventListener("mousedown",E=>{if(!document.pointerLockElement||H.isChatOpen()||E.button!==2)return;const M=L.selectedBlockType;if(M!==89&&M!==90||!Ts(M,1))return;const S=M===89?m:f,O=new Qt(_,S);O.position.copy(L.position).add(new U(0,.6,0));const R=new U(0,0,-1).applyAxisAngle(new U(1,0,0),L.camera.rotation.x).applyAxisAngle(new U(0,1,0),L.camera.rotation.y);ie.add(O),p.push({mesh:O,vel:R.multiplyScalar(25),life:5,isMob:!1}),H.updateHotbarFromInventory(pe,ge)}),window.__tickThrowables=E=>{for(let M=p.length-1;M>=0;M--){const S=p[M];if(S.life-=E,S.vel.y-=15*E,S.mesh.position.addScaledVector(S.vel,E),Jt)for(const W of Jt.iterMobs()){if(!W.mob.alive)continue;const b=S.mesh.position.x-W.mob.targetPos.x,P=S.mesh.position.y-W.mob.targetPos.y,X=S.mesh.position.z-W.mob.targetPos.z;if(b*b+P*P+X*X<1){W.mob.health-=3,W.mob.showDamage(W.mob.health),W.mob.health<=0&&W.mob.die(),Kt.play("hit"),S.life=0;break}}const O=Math.round(S.mesh.position.x),R=Math.round(S.mesh.position.y),I=Math.round(S.mesh.position.z);Nt.getBlock(O,R,I)&&(S.life=0),S.life<=0&&(ie.remove(S.mesh),p.splice(M,1))}}}L.onRightClick=()=>{if(L.selectedBlockType===33){if(Pe){if(ie.remove(Pe.mesh),Pe.inWater){const p=["Salmon","Cod","Tropical Fish","Pufferfish"],_=p[Math.floor(Math.random()*p.length)];H.addChatMessage("",`You caught a ${_}!`,!0),Ae=Math.min(on,Ae+2),H.updateHunger(Ae,on),Kt.play("eat"),An.trigger("fish_catch")}Pe=null}else{const p=vr.set(0,0,-1).applyAxisAngle(yr,L.camera.rotation.x).applyAxisAngle(Mr,L.camera.rotation.y),_=new Qt(ny,iy);_.position.copy(L.position),_.position.y+=.6,ie.add(_),Pe={mesh:_,vel:p.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},L.onBreakBlock=(p,_,m)=>{const f=Nt.getBlock(p,_,m);if(!f)return;const M={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[f.type];if(M){const S=Math.random();if(!M.chance||S<M.chance){const O=Array.isArray(M.count)?Math.floor(Math.random()*(M.count[1]-M.count[0]+1))+M.count[0]:M.count;Rs(M.item,O),H.updateHotbarFromInventory(pe,ge),H.addChatMessage("",`+ ${O}x ${jn(M.item)}`,!0)}}if(vn.increment("blocksBroken"),An.trigger("first_block"),f.type===24){let S=0;const O=setInterval(()=>{if(S%2===0&&Ve.burst(p,_,m,24),S++,S>8){clearInterval(O),Ve.explosion(p,_,m,30);const R=5,I=R*R;for(let X=-R;X<=R;X++)for(let K=-R;K<=R;K++)for(let ot=-R;ot<=R;ot++)if(X*X+K*K+ot*ot<=I){const F=Math.round(p)+X,Y=Math.round(_)+K,J=Math.round(m)+ot,Q=Nt.getBlock(F,Y,J);Q&&(Nt.removeBlock(F,Y,J),Ve.burst(F,Y,J,Q.type))}const W=L.position.x-p,b=L.position.y-_,P=L.position.z-m;W*W+b*b+P*P<49&&L.gameMode==="survival"&&(L.takeDamage(6),H.updateHearts(L.health,L.maxHealth)),Kt.play("break")}},500);return}f.type===56&&Nt.removeTorchLight(p,_,m),f.type===59&&Nt.deactivateLamp(p,_,m),Ve.burst(p,_,m,f.type),Kt.play("break"),ce==null||ce.sendRemoveBlock(p,_,m)},L.onPlaceBlock=(p,_,m,f)=>{vn.increment("blocksPlaced"),f===56&&Nt.addTorchLight(p,_+.5,m),Ve.placeEffect(p,_,m,f),Kt.play("place"),ce==null||ce.sendAddBlock(p,_,m,f)},Uc.onCollect=p=>{Tn+=p;const _=ke;for(;Tn>=(ke+1)*10;)ke++;H.updateXP(Tn,ke),ke>_&&(Kt.play("eat"),H.addChatMessage("",`Level Up! Level ${ke}`,!0),ke>=5&&An.trigger("level_five"))},H.onEnchant=p=>{ke>=3?(ke-=3,Tn-=3*10,H.updateXP(Tn,ke),p==="sharpness"?(Mi.sharpness=1,H.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):p==="protection"?(Mi.protection=1,H.addChatMessage("","Applied Protection I (+3 armor)!",!0)):p==="speed"&&(Mi.speed=1,L.speedBonus=.2,H.addChatMessage("","Applied Speed I (+20% movement)!",!0)),Kt.play("eat")):H.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",p=>{if(!document.pointerLockElement)return;if(p.button===2){const f={69:"disc_green",70:"disc_red",71:"disc_blue"}[L.selectedBlockType];f&&(Kt.isMusicPlaying()?Kt.stopMusic():Kt.playMusic(f));return}if(p.button!==0)return;if(L.selectedBlockType===32){const m=vr.set(0,0,-1).applyAxisAngle(yr,L.camera.rotation.x).applyAxisAngle(Mr,L.camera.rotation.y),f=new Qt(du,uu);f.position.copy(L.position),f.position.y+=.6,ie.add(f),Ps.push({mesh:f,vel:m.multiplyScalar(30),life:10}),Kt.play("hit");return}yi.setFromCamera(sd,Fe);const _=Jt==null?void 0:Jt.tryAttack(yi,Mi,Bn.strength>0?4:0);if(_){Kt.play("hit"),An.trigger("first_mob");const m=Jt==null?void 0:Jt.getMob(_.mobId);if(m&&!m.alive){kr.spawnFromMob(m.type,m.targetPos.x,m.targetPos.y,m.targetPos.z);const f={pig:3,chicken:2,cow:5,sheep:3,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},E=m.type.toLowerCase(),M=f[E]||1;Uc.spawn(m.targetPos.x,m.targetPos.y,m.targetPos.z,M),m.type==="zombie"&&An.trigger("kill_zombie"),m.type==="creeper"&&An.trigger("kill_creeper"),m.type==="enderdragon"&&An.trigger("kill_dragon"),vn.recordMobKill(m.type),H.addKillFeedDeath(m.type)}Zn||ce==null||ce.sendAttackMob(_.mobId,_.damage)}}),document.addEventListener("mousedown",p=>{p.button===2&&L.selectedBlockType===72&&(p.preventDefault(),Tr=!0,Fe.fov=65,Fe.updateProjectionMatrix())}),document.addEventListener("mouseup",p=>{p.button===2&&(Tr=!1,Fe.fov=75,Fe.updateProjectionMatrix())}),document.addEventListener("contextmenu",p=>{document.pointerLockElement&&p.preventDefault()}),document.addEventListener("keydown",p=>{if(p.key==="e"||p.key==="E"){if(!document.pointerLockElement||H.isChatOpen())return;p.preventDefault();const _=vr.set(0,0,-1).applyAxisAngle(yr,L.camera.rotation.x).applyAxisAngle(Mr,L.camera.rotation.y).normalize(),m=Nt.raycastBlock(L.position,_,5);if(m){const f=Nt.getBlock(m.x,m.y,m.z);if(f&&f.type===40)if(ke>=5){H.showEnchantUI(ke);return}else{H.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(f&&f.type===34){We>.7||We<.25?(H.addChatMessage("","Sleeping...",!0),We=.25,L.health=Math.min(L.maxHealth,L.health+3),Ae=Math.min(on,Ae+4),H.updateHearts(L.health,L.maxHealth),H.updateHunger(Ae,on),Kt.play("eat"),setTimeout(()=>{H.addChatMessage("","You woke up!",!0)},2e3)):H.addChatMessage("","You can only sleep at night!",!0);return}}if(Jt){yi.far=3,yi.setFromCamera(sd,Fe);const f=Jt.getAllMobsForDisplay(),E=[];for(const{id:O,mob:R}of f)R.type==="villager"&&R.group.traverse(I=>{I.isMesh&&E.push({mesh:I,mobId:O,type:R.type})});const M=E.map(O=>O.mesh),S=yi.intersectObjects(M);if(S.length>0){const O=S[0];if(E.find(I=>I.mesh===O.object)){yi.far=5;const I=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];H.showTradeUI(I),H.onTrade=W=>{const b=I[W];if(!b)return;const P={0:45,1:14,2:5,3:39},X={0:5,1:3,2:10,3:1},K={0:0,1:36,2:33,3:46},ot=P[W],F=X[W],Y=K[W];ot&&Ts(ot,F)?(Y>0&&Rs(Y,1),H.addChatMessage("",`Trade: gave ${b.giveName}, received ${b.receiveName}!`,!0),Kt.play("place")):H.addChatMessage("",`Need ${b.giveName} to trade!`,!0)};return}}yi.far=5}As?(H.hideInventory(),As=!1,document.body.requestPointerLock()):(H.showInventory(pe),As=!0,document.exitPointerLock())}}),document.addEventListener("keydown",p=>{p.key==="Tab"&&document.pointerLockElement&&!H.isChatOpen()&&(p.preventDefault(),As?(H.hideInventory(),As=!1,document.body.requestPointerLock()):(H.showInventory(pe),As=!0,document.exitPointerLock()))}),document.addEventListener("keydown",p=>{(p.key==="o"||p.key==="O")&&document.pointerLockElement&&!H.isChatOpen()&&(p.preventDefault(),H.isScoreboardOpen()?(H.hideScoreboard(),document.body.requestPointerLock()):(H.showScoreboard(vn.getAll(),zn),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",p=>{(p.key==="F1"||p.key==="f1")&&(p.preventDefault(),a=!a,a?H.showHUD():H.hideHUD())}),document.addEventListener("keydown",p=>{if(p.key==="F2"||p.key==="f2"){p.preventDefault();try{const _=ze.domElement.toDataURL("image/png"),m=document.createElement("a");m.href=_,m.download="minecraft-"+Date.now()+".png",m.click(),H.addChatMessage("","Screenshot saved!",!0)}catch{H.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("keydown",p=>{(p.key==="r"||p.key==="R")&&document.pointerLockElement&&!H.isChatOpen()&&(Jt!=null&&Jt.mountedMobId?(Jt.dismount(),L.speedBonus=Mi.speed>0?.2:0,H.addChatMessage("","Dismounted.",!0)):Jt!=null&&Jt.tryMount(L.position)&&(L.speedBonus=1,H.addChatMessage("","Mounted horse! R to dismount.",!0)))}),document.addEventListener("keydown",p=>{(p.key==="F3"||p.key==="f3")&&(p.preventDefault(),wr=!wr,wr?H.showDebugScreen():H.hideDebugScreen())}),document.addEventListener("keydown",p=>{(p.key==="F4"||p.key==="f4")&&(p.preventDefault(),L.gameMode==="spectator"?(L.setGameMode("survival"),H.setGameMode("survival"),Ae=on,H.updateHunger(Ae,on),H.addChatMessage("","Returned to Survival mode",!0),ce==null||ce.sendGameMode("survival")):(L.setGameMode("spectator"),H.setGameMode("spectator"),H.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),ce==null||ce.sendGameMode("spectator")))}),H.onChestTransfer=(p,_,m,f)=>{if(p){const E=m[_];if(!E)return;const M=f.indexOf(0);if(M>=0){f[M]=E,m[_]=0;for(let S=0;S<f.length&&S<Ui.length;S++)Ui[S]=f[S];H.updateHotbarFromInventory(Ui),Kt.play("place")}else H.addChatMessage("","Hotbar is full!",!0)}else{const E=f[_];if(!E)return;const M=m.indexOf(0);if(M>=0){m[M]=E,f[_]=0;for(let S=0;S<f.length&&S<Ui.length;S++)Ui[S]=f[S];H.updateHotbarFromInventory(Ui),Kt.play("place")}else H.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",p=>{if((p.key==="e"||p.key==="E")&&Fc.style.display!=="none"){let _=null;for(let O=-5;O<=5&&!_;O++)for(let R=-5;R<=5&&!_;R++)for(let I=-5;I<=5&&!_;I++){const W=Math.floor(L.position.x)+O,b=Math.floor(L.position.y)+R,P=Math.floor(L.position.z)+I,X=Nt.getBlock(W,b,P);X&&X.type===31&&L.position.distanceTo(xr.set(W+.5,b+.5,P+.5))<=5&&(_=[W,b,P])}if(_){const O=Nt.getChestInventory(_[0],_[1],_[2]),R=Ui.slice(0,9);H.showChestUI(O,R),H.onChestClose=()=>{Nt.setChestInventory(_[0],_[1],_[2],O)},Kt.play("place");return}let m=!1;for(let O=-5;O<=5&&!m;O++)for(let R=-5;R<=5&&!m;R++)for(let I=-5;I<=5&&!m;I++){const W=Math.floor(L.position.x)+O,b=Math.floor(L.position.y)+R,P=Math.floor(L.position.z)+I,X=Nt.getBlock(W,b,P);X&&X.type===22&&L.position.distanceTo(xr.set(W+.5,b+.5,P+.5))<=5&&(m=!0)}if(m){H.showCraftingUI(),An.trigger("first_craft"),Kt.play("place");return}let f=null;for(let O=-5;O<=5;O++){for(let R=-5;R<=5;R++){for(let I=-5;I<=5;I++){const W=Math.floor(L.position.x)+O,b=Math.floor(L.position.y)+R,P=Math.floor(L.position.z)+I,X=Nt.getBlock(W,b,P);if(X&&X.type===23&&L.position.distanceTo(xr.set(W+.5,b+.5,P+.5))<=5){f=[W,b,P];break}}if(f)break}if(f)break}if(f){H.showSmeltingUI();return}const E=vr.set(0,0,-1).applyAxisAngle(yr,L.camera.rotation.x).applyAxisAngle(Mr,L.camera.rotation.y),M=new Zr(L.position,E);M.far=2;let S=null;for(let O=-2;O<=2;O++){for(let R=-2;R<=2;R++){for(let I=-2;I<=2;I++){const W=Math.floor(L.position.x)+O,b=Math.floor(L.position.y)+R,P=Math.floor(L.position.z)+I,X=Nt.getBlock(W,b,P);if(X&&X.type===58&&L.position.distanceTo(xr.set(W+.5,b+.5,P+.5))<=2){S=[W,b,P];break}}if(S)break}if(S)break}S&&(Nt.toggleLever(S[0],S[1],S[2]),Kt.play("place"))}}),H.onChat=p=>{p.startsWith("/")?ay(p):Zn?H.addChatMessage(Vi,p):ce==null||ce.sendChat(p),L.setChatOpen(!1)},H.onSmelt=(p,_)=>{const m=oy.get(p);return m?new Set([64,5,10,280]).has(_)&&mr(_)>0?mr(p)<1?(H.addChatMessage("","No input item to smelt!",!0),null):(Ts(p,1),Ts(_,1),Rs(m,1),H.updateHotbarFromInventory(pe,ge),H.addChatMessage("",`Smelted: ${jn(m)}`,!0),Kt.play("eat"),m):(H.addChatMessage("","Need fuel (coal, wood) to smelt!",!0),null):null},H.getInvCount=p=>mr(p),H.onInventorySwap=(p,_)=>{const m=pe[_];pe[_]=pe[p],pe[p]=m;const f=ge[_];ge[_]=ge[p],ge[p]=f,H.updateHotbarFromInventory(pe,ge)};const r={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};H.onCraft=p=>{const _=r[p];if(!_)return!1;for(const[m,f]of Object.entries(_.ingredients))if(mr(Number(m))<f)return H.addChatMessage("","✗ Not enough materials",!0),!1;for(const[m,f]of Object.entries(_.ingredients))Ts(Number(m),f);return Rs(_.output.type,_.output.count),H.updateHotbarFromInventory(pe,ge),H.addChatMessage("",`✓ Crafted ${_.output.count}x ${jn(_.output.type)}`,!0),!0},H.onRespawn=()=>{const p=document.getElementById("screenFade");p.style.background="#000",p.style.transition="opacity 0.4s ease",p.style.opacity="1",setTimeout(()=>{L.respawn(),Ae=on,H.updateHearts(L.maxHealth,L.maxHealth),H.updateHunger(Ae,on),ce==null||ce.sendRespawn(),setTimeout(()=>{p.style.transition="opacity 0.6s ease",p.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},H.updateHearts(L.health,L.maxHealth),H.updateHunger(Ae,on),H.setGameMode(L.gameMode);let c=0;const l=p=>{c=(p%8+8)%8,L.selectedBlockType=pe[c]??0,H.selectSlot(c),H.updateHotbarFromInventory(pe,ge)};document.addEventListener("wheel",p=>{l(c+(p.deltaY>0?1:-1))}),document.addEventListener("keydown",p=>{const _=parseInt(p.key);_>=1&&_<=8&&l(_-1)});const h={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65,potion_strength:91,potion_speed:92},d={91:{effect:"strength",duration:30,label:"Strength I (+4 dmg, 30s)"},92:{effect:"speed",duration:30,label:"Speed I (+30% move, 30s)"}};if(document.addEventListener("mousedown",p=>{if(!document.pointerLockElement||H.isChatOpen()||p.button!==2)return;const _=d[L.selectedBlockType];_&&Ts(L.selectedBlockType,1)&&(Bn[_.effect]=_.duration,_.effect==="speed"&&(L.speedBonus=Math.max(L.speedBonus,.3)),H.addChatMessage("",`🧪 Drank ${_.label}!`,!0),Kt.play("eat"),H.updateHotbarFromInventory(pe,ge))}),kr.onPickup=p=>{Kt.play("eat");const _=h[p];_&&_>0?(Rs(_,1),H.updateHotbarFromInventory(pe,ge),H.addChatMessage("",`+ 1x ${jn(_)}`,!0)):H.addChatMessage("",`Picked up: ${p}`,!0),p==="iron_helmet"&&(L.armor=Math.min(20,L.armor+5)),p==="iron_chestplate"&&(L.armor=Math.min(20,L.armor+8)),p==="iron_leggings"&&(L.armor=Math.min(20,L.armor+7)),p==="iron_boots"&&(L.armor=Math.min(20,L.armor+4))},Zn){H.setConnectionStatus("connected"),H.updatePlayerCount(1),Jt=new Br(ie,Nt,{onPlayerDamage:p=>{if(Zi="You were killed by a mob",L.gameMode==="survival"){let _=p;Mi.protection>0&&(_=Math.max(1,_-3*Mi.protection)),Tr&&id>0&&(_=Math.ceil(_*.2),id--),L.takeDamage(_),Kt.play("hurt"),H.updateHearts(L.health,L.maxHealth),L.health<=0&&(vn.increment("deaths"),H.showDeath(Zi,ki.x,ki.y,ki.z,ke))}},getPlayerPos:()=>L.position,onExplosion:(p,_,m,f)=>{const E=f*f;for(let O=-f;O<=f;O++)for(let R=-f;R<=f;R++)for(let I=-f;I<=f;I++)if(O*O+R*R+I*I<=E){const W=Math.round(p)+O,b=Math.round(_)+R,P=Math.round(m)+I,X=Nt.getBlock(W,b,P);X&&(Nt.removeBlock(W,b,P),Ve.burst(W,b,P,X.type))}Kt.play("break");const M=Math.sqrt((L.position.x-p)**2+(L.position.y-_)**2+(L.position.z-m)**2);M<20&&(Fr=.4,zr=Math.max(.02,.12*(1-M/20)));const S=ze.domElement.style.filter;ze.domElement.style.filter="brightness(1.3)",setTimeout(()=>{ze.domElement.style.filter=S},100)},onWitherEffect:()=>{go=od}},!0);for(let p=0;p<10;p++)Jt.spawnRandom(0,0);Bc=new zx(Nt),H.addChatMessage("",`Welcome, ${Vi}! 🌍 Singleplayer`,!0),H.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0)}else{const p=window.location.protocol==="https:",_=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":p?window.location.hostname:"159.223.140.36:8471",m=((v=window.__getServerAddr)==null?void 0:v.call(window))??_;ce=new Tx(ie,Nt,{onStatusChange:f=>H.setConnectionStatus(f),onChat:(f,E,M)=>H.addChatMessage(f,E,M),onPlayerCount:f=>H.updatePlayerCount(f),onPlayerDamage:f=>{L.takeDamage(f),Kt.play("hurt"),H.updateHearts(L.health,L.maxHealth)},onPlayerDied:f=>{H.addChatMessage("",`☠ ${f} was slain!`,!0),f===Vi&&(vn.increment("deaths"),H.showDeath("Killed by another player",L.position.x,L.position.y,L.position.z,ke))}},m),Jt=new Br(ie,Nt,{onPlayerDamage:()=>{},getPlayerPos:()=>L.position,onExplosion:(f,E,M,S)=>{const O=S*S;for(let W=-S;W<=S;W++)for(let b=-S;b<=S;b++)for(let P=-S;P<=S;P++)if(W*W+b*b+P*P<=O){const X=Math.round(f)+W,K=Math.round(E)+b,ot=Math.round(M)+P,F=Nt.getBlock(X,K,ot);F&&(Nt.removeBlock(X,K,ot),Ve.burst(X,K,ot,F.type))}Kt.play("break");const R=Math.sqrt((L.position.x-f)**2+(L.position.y-E)**2+(L.position.z-M)**2);R<20&&(Fr=.4,zr=Math.max(.02,.12*(1-R/20)));const I=ze.domElement.style.filter;ze.domElement.style.filter="brightness(1.3)",setTimeout(()=>{ze.domElement.style.filter=I},100)},onWitherEffect:()=>{go=od}},!1),ce.setMobManager(Jt),ce.setLocalStateGetter(()=>L.getState()),await ce.join(Vi),H.addChatMessage("",`Welcome, ${Vi}! 🌐 Multiplayer`,!0),H.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}ly.addEventListener("click",()=>$c(Hr.value));Hr.addEventListener("keydown",s=>{s.key==="Enter"&&$c(Hr.value)});const hc=new URLSearchParams(window.location.search).get("name");hc&&(Hr.value=hc,setTimeout(()=>$c(hc),800));let vd=performance.now(),dc=0;const yy=60;new U;const My=new yt(16777215),vr=new U,xr=new U,yr=new U(1,0,0),Mr=new U(0,1,0),mu=20,Ey=Array.from({length:mu},()=>({x:0,z:0,alive:!0})),uc=[],gu=8,Sy=Array.from({length:gu},()=>({x:0,z:0})),fc=[];function _u(){var e,n,i,o,a;requestAnimationFrame(_u);const s=performance.now(),t=Math.min((s-vd)/1e3,.05);if(vd=s,t>0&&(rd[tc]=1/t,tc=(tc+1)%kc,fo<kc&&fo++),Fc.style.display!=="none"&&Nt&&L){if(L.update(t),ce==null||ce.updatePlayers(t),Zn&&(dc+=t,dc>=yy&&(dc=0,Nt.saveToStorage({inventory:[...pe],invCount:[...ge],px:L.position.x,py:L.position.y,pz:L.position.z,health:L.health,hunger:Ae,xp:Tn,xpLevel:ke,dayCount:zn}))),Zn&&Nt.generateAroundPlayer(L.position.x,L.position.z),ey(t),!Fi&&!qi){if(ic+=t,ic>2){ic=0;const m=Nt.getBiome(Math.round(L.position.x),Math.round(L.position.z));m!==sc&&(sc=m)}const p=ie.fog,_=ry[sc];_&&p.color.lerp(_,.08)}if(Jt&&(Jt.dayTime=We,Jt.update(t),Jt.mountedMobId&&Jt.updateMount(L.position,L.getYaw(),!0,t)),Ve.update(t),nc+=t,nc>.5){nc=0;const p=(We-.25)*Math.PI*2,_=Math.sin(p);if(_>.2)for(let m=0;m<2;m++){const f=(Math.random()-.5)*16,E=Math.random()*6+1,M=(Math.random()-.5)*16;Ve.dustMote(L.position.x+f,L.position.y+E,L.position.z+M)}else if(_<-.1)for(let m=0;m<3;m++){const f=(Math.random()-.5)*20,E=(Math.random()-.5)*20;Ve.firefly(L.position.x+f,L.position.y-1+Math.random()*3,L.position.z+E)}}vv(s/1e3),Nt.updateTorchFlicker(s/1e3);for(const[p]of Nt.torchLights){const[_,m,f]=p.split(",").map(Number),E=_-L.position.x,M=f-L.position.z;E*E+M*M>576||(Math.random()<.06&&Ve.spawn(_+(Math.random()-.5)*.1,m+.7,f+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Ve.spawn(_+(Math.random()-.5)*.08,m+.55,f+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(Gi.update(t,L.position,ie.fog.color),kr.update(t,L.position),Uc.update(t,L.position),go>0&&(go-=t),vn.increment("playTime",t),L.velocity&&vn.increment("distanceTraveled",L.velocity.length()*t),Qa+=t,Qa>=60&&(Qa=0,vn.save()),$a+=t,$a>.1&&($a=0,Nt.checkPressurePlate(L.position)),Ja+=t,Ja>30&&(Ja=0,L.position.y<10&&(Kt.playAmbient("cave"),Kt.setAmbientMood("cave"))),Pe){Pe.vel.y-=20*t,Pe.mesh.position.addScaledVector(Pe.vel,t);const p=Math.round(Pe.mesh.position.x),_=Math.round(Pe.mesh.position.y),m=Math.round(Pe.mesh.position.z);Nt.getBlockType(p,_,m)===7&&!Pe.inWater&&(Pe.inWater=!0,Pe.vel.set(0,0,0),Pe.mesh.position.y=_+.5),Pe.inWater&&(Pe.waitTimer-=t,Pe.mesh.position.y=_+.5+Math.sin(s*.003)*.1,Pe.waitTimer<=0&&(Pe.mesh.material.color.set(16776960),setTimeout(()=>{Pe!=null&&Pe.mesh.material&&Pe.mesh.material.color.set(26316)},300)))}(e=window.__tickThrowables)==null||e.call(window,t);for(let p=Ps.length-1;p>=0;p--){const _=Ps[p];_.life-=t,_.vel.y-=20*t,_.mesh.position.addScaledVector(_.vel,t);const m=Math.sqrt(_.vel.x*_.vel.x+_.vel.y*_.vel.y+_.vel.z*_.vel.z);m>.1&&(_.mesh.rotation.x=-Math.asin(_.vel.y/m),_.mesh.rotation.y=Math.atan2(_.vel.x,_.vel.z)),Math.random()<.3&&Ve&&Ve.spawn(_.mesh.position.x,_.mesh.position.y,_.mesh.position.z,16777130,.3,0,-.2,0);const f=Math.round(_.mesh.position.x),E=Math.round(_.mesh.position.y),M=Math.round(_.mesh.position.z);if(Nt.hasBlock(f,E,M)){const O=new Qt(du,uu);O.position.copy(_.mesh.position),O.rotation.copy(_.mesh.rotation),ie.add(O),ws.push({mesh:O,life:8}),ie.remove(_.mesh),Ps.splice(p,1);continue}let S=!1;if(Jt)for(const O of Jt.iterMobs()){const R=O.mob,I=_.mesh.position.x-R.targetPos.x,W=_.mesh.position.y-R.targetPos.y,b=_.mesh.position.z-R.targetPos.z;if(I*I+W*W+b*b<.64&&R.alive){R.health-=5,R.showDamage(R.health),R.health<=0&&(R.die(),vn.recordMobKill(O.data.type),kr.spawnFromMob(O.data.type,R.targetPos.x,R.targetPos.y,R.targetPos.z)),ie.remove(_.mesh),Ps.splice(p,1),S=!0,Kt.play("hit");break}}_.life<=0&&!S&&(ie.remove(_.mesh),Ps.splice(p,1))}for(let p=ws.length-1;p>=0;p--)ws[p].life-=t,ws[p].life<=0&&(ie.remove(ws[p].mesh),ws.splice(p,1));if(Bc){if(fc.length=0,ce&&ce.getPlayerData){const p=((n=ce.getPlayerData)==null?void 0:n.call(ce))??[];let _=0;for(const m of p)if(m.name!==Vi&&_<gu){const f=Sy[_++];f.x=m.x,f.z=m.z,fc.push(f)}}if(uc.length=0,Jt){let p=0;for(const _ of Jt.iterMobs())if(p<mu){const m=Ey[p++];m.x=_.mob.targetPos.x,m.z=_.mob.targetPos.z,m.alive=_.mob.alive,uc.push(m)}}Bc.update(t,L.position,L.getYaw(),fc,uc)}if(pd){const _=(L.getYaw()*180/Math.PI%360+360)%360,f=["S","SW","W","NW","N","NE","E","SE"][Math.round(_/45)%8],E=0-L.position.x,M=0-L.position.z,O=((Math.atan2(E,M)*180/Math.PI-_)%360+360)%360,I=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(O/45)%8];pd.textContent=`${f} ${I}⌂`}if(kn&&kn.alive?H.updateBossBar(kn.health,kn.maxHealth):kn&&!kn.alive&&(H.hideBossBar(),kn=null),go>0?H.updateHearts(L.health,L.maxHealth,!0):H.updateHearts(L.health,L.maxHealth,!1),L.gameMode==="survival"){const p=L.position.x-gr.x,_=L.position.y-gr.y,m=L.position.z-gr.z,f=p*p+_*_+m*m;gr.copy(L.position),f>.01&&(Ka+=t,Ka>1.5&&(Ka=0,Ae=Math.max(0,Ae-.5),H.updateHunger(Math.ceil(Ae*2)/2,on))),Ae>=16&&L.health<L.maxHealth&&(ii+=t,ii>4&&(ii=0,L.health=Math.min(L.maxHealth,L.health+1),H.updateHearts(L.health,L.maxHealth))),Ae<=0&&(Zi="You starved",ii+=t,ii>4&&(ii=0,L.health>1&&L.takeDamage(1),H.updateHearts(L.health,L.maxHealth)))}if(L.gameMode==="survival"){const p=Math.round(L.position.x),_=Math.round(L.position.y),m=Math.round(L.position.z);Nt.getBlockType(p,_,m)===47&&(Zi="You burned in lava",ii+=t,ii>.5&&(ii=0,L.takeDamage(2),H.updateHearts(L.health,L.maxHealth)))}const r=Bn.strength,c=Bn.speed;if(Bn.strength=Math.max(0,Bn.strength-t),Bn.speed=Math.max(0,Bn.speed-t),c>0&&Bn.speed===0&&Mi.speed===0&&(L.speedBonus=0),r>0&&Bn.strength===0&&H.addChatMessage("","Strength effect wore off.",!0),c>0&&Bn.speed===0&&H.addChatMessage("","Speed effect wore off.",!0),_r<.22&&We>=.22&&(zn++,H.updateDayCounter(zn),H.addChatMessage("","Dawn breaks...",!0),Kt.playAmbient("birds"),Kt.setAmbientMood("day"),An.trigger("reach_night")),_r<.73&&We>=.73&&(H.addChatMessage("","Night falls... watch out for monsters!",!0),Kt.playAmbient("wind"),Kt.setAmbientMood("night")),_r<.95&&We>=.95&&Jt&&Math.random()<.5){const p=3+Math.floor(Math.random()*3);for(let _=0;_<p;_++){const m=Math.random()*Math.PI*2,f=20+Math.random()*15,E=L.position.x+Math.cos(m)*f,M=L.position.z+Math.sin(m)*f,S=Nt.getSurfaceHeight(Math.round(E),Math.round(M))+1.5,O=Math.random()<.5?"zombie":"skeleton";Jt.spawnMob(O,E,S,M)}}_r=We,H.updatePosition(L.position.x,L.position.y,L.position.z),H.updateTime(We),_y(t,L.health,L.maxHealth),xy(L.getBreakProgress());const l=((i=L.keys)==null?void 0:i.ControlLeft)&&L.velocity.lengthSq()>4;if(my.style.opacity=l?"0.7":"0",!Tr){const p=l?80:75;Math.abs(Fe.fov-p)>.1&&(Fe.fov+=(p-Fe.fov)*.12,Fe.updateProjectionMatrix())}ji.position.x+=(L.position.x-ji.position.x)*.02,Bs.position.x+=(L.position.x-Bs.position.x)*.02,Gi.isThunderFlashing()&&ze.setClearColor(My);const h=Gi.consumeLightningStrike();if(h&&L.gameMode==="survival"){const p=L.position.x+h.x,_=L.position.z+h.z,m=p-L.position.x,f=_-L.position.z;m*m+f*f<25&&(Zi="Struck by lightning",L.takeDamage(5),H.updateHearts(L.health,L.maxHealth),H.addChatMessage("","⚡ You were struck by lightning!",!0),Kt.play("hurt")),Ve.burst(p,L.position.y,_,0)}const d=Nt.getBlockType(Math.round(L.position.x),Math.round(L.position.y),Math.round(L.position.z))===7;d&&!ld&&(Ve.splash(L.position.x,L.position.y,L.position.z,12),Ve.bubbles(L.position.x,L.position.y-.5,L.position.z,8),Kt.play("splash")),ld=d;const g=Nt.getBlockType(Math.round(Fe.position.x),Math.round(Fe.position.y),Math.round(Fe.position.z))===7;if(g!==Fi&&(Fi=g,hy.style.opacity=Fi?"1":"0",Fi&&An.trigger("deep_dive")),Fi){const p=ie.fog;p.near=dy,p.far=uy,p.color.copy(ud),ze.setClearColor(ud),ac+=t,ac>.3&&(ac=0,Ve.bubbles(L.position.x,L.position.y+.5,L.position.z,2))}else if(!qi){const p=ie.fog;p.near=hd,p.far=dd}const v=py(L.position.x,L.position.y,L.position.z);if(v>=0){const p=Math.max(0,1-v/fu);Un+=(p-Un)*.08}else Un+=(0-Un)*.08;if(Un>.01){fd.style.opacity=String(Un);const p=Math.sin(performance.now()*.002)*Un*40,_=Un*1.5,m=1+Un*1.2;if(ze.domElement.style.filter=`hue-rotate(${p}deg) blur(${_}px) saturate(${m})`,Un>.6&&!Fi){const f=ie.fog,E=(Un-.6)/.4;f.color.lerpColors(f.color,fy,E*.15),f.near=hd-E*20,f.far=dd-E*30,qi=!0}v>=0&&v<3&&Math.random()<.3&&Ve.magic(L.position.x+(Math.random()-.5)*3,L.position.y+(Math.random()-.5)*2,L.position.z+(Math.random()-.5)*3,1)}else fd.style.opacity="0",ze.domElement.style.filter="",qi&&(qi=!1);if(oc+=t,oc>ad&&L.onGround){const p=L.position.x-rc.x,_=L.position.z-rc.z;if(p*p+_*_>1.5){oc=0,rc.set(L.position.x,0,L.position.z);const f=Math.round(L.position.x),E=Math.round(L.position.y-1.9),M=Math.round(L.position.z),S=Nt.getBlockType(f,E,M);let O="dirt";S===3||S===11||S===17||S===18?O="stone":S===4||S===12||S===49?O="sand":S===5||S===10||S===16?O="wood":(S===1||S===6)&&(O="grass"),ad=((o=L.keys)==null?void 0:o.ControlLeft)?.25:.35,Kt.playStepOnBlock(.7,O)}}if(L.onGround&&!cd&&L.velocity.y<-.5&&Kt.playLanding(Math.min(Math.abs(L.velocity.y)/10,1)),cd=L.onGround,ec+=t,ec>1&&(ec=0,Nt.isNearBlock(Math.round(L.position.x),Math.round(L.position.y),Math.round(L.position.z),55,5)&&Ve.smoke(L.position.x,L.position.y+1,L.position.z,2)),wr){let p=0;for(let P=0;P<fo;P++)p+=rd[P];const _=fo>0?p/fo:0,f=(L.getYaw()*180/Math.PI+360)%360;let E="Unknown";f<45||f>=315?E="South (0°)":f<135?E="West (90°)":f<225?E="North (180°)":E="East (270°)";const M="Unknown",S=Math.round(L.position.y-1),O=Nt.getBlockType(Math.round(L.position.x),S,Math.round(L.position.z)),R=O!==void 0?jn(O):"Air",I=Gi&&Gi.isRaining?"Rainy":"Clear",W=(Jt==null?void 0:Jt.getMobCount())??0,b=((a=Nt.getBlockCount)==null?void 0:a.call(Nt))??0;H.updateDebugScreen({fps:_,x:L.position.x,y:L.position.y,z:L.position.z,biome:M,blockBelow:R,facing:E,dayTime:We,mobCount:W,blockCount:b,weather:I,gameMode:L.gameMode,version:"0.8"})}}if(Fr>0){Fr-=t;const r=(Math.random()-.5)*2*zr,c=(Math.random()-.5)*2*zr;Fe.position.x+=r,Fe.position.y+=c}Nt&&Nt.flushDirtyMeshes(),ze.render(ie,Fe),Gi.isThunderFlashing()&&ze.setClearColor(xi)}_u();window.addEventListener("beforeunload",()=>{Zn&&Nt.saveToStorage({inventory:[...pe],invCount:[...ge],px:L.position.x,py:L.position.y,pz:L.position.z,health:L.health,hunger:Ae,xp:Tn,xpLevel:ke,dayCount:zn})});
