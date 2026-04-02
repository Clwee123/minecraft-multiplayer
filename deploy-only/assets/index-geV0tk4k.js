var Su=Object.defineProperty;var wu=(o,t,e)=>t in o?Su(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var I=(o,t,e)=>wu(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="160",Au=0,sl=1,Tu=2,bd=1,Cu=2,ri=3,di=0,ln=1,Jn=2,Pi=0,Bs=1,ol=2,rl=3,al=4,Ru=5,$i=100,Pu=101,Lu=102,cl=103,ll=104,Iu=200,Du=201,Ou=202,Nu=203,xc=204,yc=205,Uu=206,Bu=207,ku=208,Fu=209,zu=210,Hu=211,Gu=212,Vu=213,Wu=214,Xu=0,Yu=1,qu=2,Ir=3,ju=4,$u=5,Zu=6,Ku=7,Yc=0,Ju=1,Qu=2,hi=0,tf=1,ef=2,nf=3,sf=4,of=5,rf=6,Sd=300,zs=301,Hs=302,Mc=303,Ec=304,Yr=306,bc=1e3,wn=1001,Sc=1002,ke=1003,hl=1004,ua=1005,Pn=1006,af=1007,Mo=1008,Li=1009,cf=1010,lf=1011,qc=1012,wd=1013,Ci=1014,Ri=1015,Eo=1016,Ad=1017,Td=1018,ts=1020,hf=1021,Wn=1023,df=1024,uf=1025,es=1026,Gs=1027,ff=1028,Cd=1029,pf=1030,Rd=1031,Pd=1033,fa=33776,pa=33777,ma=33778,ga=33779,dl=35840,ul=35841,fl=35842,pl=35843,Ld=36196,ml=37492,gl=37496,_l=37808,vl=37809,xl=37810,yl=37811,Ml=37812,El=37813,bl=37814,Sl=37815,wl=37816,Al=37817,Tl=37818,Cl=37819,Rl=37820,Pl=37821,_a=36492,Ll=36494,Il=36495,mf=36283,Dl=36284,Ol=36285,Nl=36286,Id=3e3,ns=3001,gf=3200,_f=3201,Dd=0,vf=1,Ln="",Je="srgb",ui="srgb-linear",jc="display-p3",qr="display-p3-linear",Dr="linear",Le="srgb",Or="rec709",Nr="p3",as=7680,Ul=519,xf=512,yf=513,Mf=514,Od=515,Ef=516,bf=517,Sf=518,wf=519,wc=35044,Af=35048,Bl="300 es",Ac=1035,li=2e3,Ur=2001;class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,Tc=180/Math.PI;function Ii(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[o&255]+tn[o>>8&255]+tn[o>>16&255]+tn[o>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function mn(o,t,e){return Math.max(t,Math.min(e,o))}function Tf(o,t){return(o%t+t)%t}function va(o,t,e){return(1-e)*o+e*t}function kl(o){return(o&o-1)===0&&o!==0}function Cc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ci(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Se(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,s,a,r,c,l){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l)}set(t,e,n,i,s,a,r,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[3],c=n[6],l=n[1],d=n[4],u=n[7],m=n[2],g=n[5],_=n[8],E=i[0],f=i[3],h=i[6],y=i[1],M=i[4],b=i[7],D=i[2],C=i[5],R=i[8];return s[0]=a*E+r*y+c*D,s[3]=a*f+r*M+c*C,s[6]=a*h+r*b+c*R,s[1]=l*E+d*y+u*D,s[4]=l*f+d*M+u*C,s[7]=l*h+d*b+u*R,s[2]=m*E+g*y+_*D,s[5]=m*f+g*M+_*C,s[8]=m*h+g*b+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*r*l-n*s*d+n*r*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],d=t[8],u=d*a-r*l,m=r*c-d*s,g=l*s-a*c,_=e*u+n*m+i*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return t[0]=u*E,t[1]=(i*l-d*n)*E,t[2]=(r*n-i*a)*E,t[3]=m*E,t[4]=(d*e-i*c)*E,t[5]=(i*s-r*e)*E,t[6]=g*E,t[7]=(n*c-l*e)*E,t[8]=(a*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*r)+a+t,-i*l,i*c,-i*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new le;function Nd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Br(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Cf(){const o=Br("canvas");return o.style.display="block",o}const Fl={};function vo(o){o in Fl||(Fl[o]=!0,console.warn(o))}const zl=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hl=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[ui]:{transfer:Dr,primaries:Or,toReference:o=>o,fromReference:o=>o},[Je]:{transfer:Le,primaries:Or,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[qr]:{transfer:Dr,primaries:Nr,toReference:o=>o.applyMatrix3(Hl),fromReference:o=>o.applyMatrix3(zl)},[jc]:{transfer:Le,primaries:Nr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Hl),fromReference:o=>o.applyMatrix3(zl).convertLinearToSRGB()}},Rf=new Set([ui,qr]),Ee={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Rf.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=Ro[t].toReference,i=Ro[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Ro[o].primaries},getTransfer:function(o){return o===Ln?Dr:Ro[o].transfer}};function ks(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ya(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cs;class Ud{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Br("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ks(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(Ma(i[a].image)):s.push(Ma(i[a]))}else s=Ma(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ma(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ud.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class hn extends js{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=wn,i=wn,s=Pn,a=Mo,r=Wn,c=Li,l=hn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ii(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ns?Je:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?ns:Id}set encoding(t){vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ns?Je:Ln}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Sd;hn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,i=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],d=c[4],u=c[8],m=c[1],g=c[5],_=c[9],E=c[2],f=c[6],h=c[10];if(Math.abs(d-m)<.01&&Math.abs(u-E)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+m)<.1&&Math.abs(u+E)<.1&&Math.abs(_+f)<.1&&Math.abs(l+g+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,b=(g+1)/2,D=(h+1)/2,C=(d+m)/4,R=(u+E)/4,z=(_+f)/4;return M>b&&M>D?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=C/n,s=R/n):b>D?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=C/i,s=z/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=R/s,i=z/s),this.set(n,i,s,e),this}let y=Math.sqrt((f-_)*(f-_)+(u-E)*(u-E)+(m-d)*(m-d));return Math.abs(y)<.001&&(y=1),this.x=(f-_)/y,this.y=(u-E)/y,this.z=(m-d)/y,this.w=Math.acos((l+g+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends js{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?Je:Ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kd extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Df extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,r){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3];const m=s[a+0],g=s[a+1],_=s[a+2],E=s[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(r===1){t[e+0]=m,t[e+1]=g,t[e+2]=_,t[e+3]=E;return}if(u!==E||c!==m||l!==g||d!==_){let f=1-r;const h=c*m+l*g+d*_+u*E,y=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const D=Math.sqrt(M),C=Math.atan2(D,h*y);f=Math.sin(f*C)/D,r=Math.sin(r*C)/D}const b=r*y;if(c=c*f+m*b,l=l*f+g*b,d=d*f+_*b,u=u*f+E*b,f===1-r){const D=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=D,l*=D,d*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const r=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=s[a],m=s[a+1],g=s[a+2],_=s[a+3];return t[e]=r*_+d*u+c*g-l*m,t[e+1]=c*_+d*m+l*u-r*g,t[e+2]=l*_+d*g+r*m-c*u,t[e+3]=d*_-r*u-c*m-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(n/2),d=r(i/2),u=r(s/2),m=c(n/2),g=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=m*d*u+l*g*_,this._y=l*g*u-m*d*_,this._z=l*d*_+m*g*u,this._w=l*d*u-m*g*_;break;case"YXZ":this._x=m*d*u+l*g*_,this._y=l*g*u-m*d*_,this._z=l*d*_-m*g*u,this._w=l*d*u+m*g*_;break;case"ZXY":this._x=m*d*u-l*g*_,this._y=l*g*u+m*d*_,this._z=l*d*_+m*g*u,this._w=l*d*u-m*g*_;break;case"ZYX":this._x=m*d*u-l*g*_,this._y=l*g*u+m*d*_,this._z=l*d*_-m*g*u,this._w=l*d*u+m*g*_;break;case"YZX":this._x=m*d*u+l*g*_,this._y=l*g*u+m*d*_,this._z=l*d*_-m*g*u,this._w=l*d*u-m*g*_;break;case"XZY":this._x=m*d*u-l*g*_,this._y=l*g*u-m*d*_,this._z=l*d*_+m*g*u,this._w=l*d*u+m*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],c=e[9],l=e[2],d=e[6],u=e[10],m=n+r+u;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-c)*g,this._y=(s-l)*g,this._z=(a-i)*g}else if(n>r&&n>u){const g=2*Math.sqrt(1+n-r-u);this._w=(d-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+l)/g}else if(r>u){const g=2*Math.sqrt(1+r-n-u);this._w=(s-l)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+u-n-r);this._w=(a-i)/g,this._x=(s+l)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,r=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*r+i*l-s*c,this._y=i*d+a*c+s*r-n*l,this._z=s*d+a*l+n*c-i*r,this._w=a*d-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,r),u=Math.sin((1-e)*d)/l,m=Math.sin(e*d)/l;return this._w=a*u+this._w*m,this._x=n*u+this._x*m,this._y=i*u+this._y*m,this._z=s*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,r=t.z,c=t.w,l=2*(a*i-r*n),d=2*(r*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-r*d,this.y=n+c*d+r*l-s*u,this.z=i+c*u+s*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new B,Gl=new So;class os{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Lo.subVectors(this.max,Ks),ls.subVectors(t.a,Ks),hs.subVectors(t.b,Ks),ds.subVectors(t.c,Ks),mi.subVectors(hs,ls),gi.subVectors(ds,hs),Bi.subVectors(ls,ds);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!ba(e,ls,hs,ds,Lo)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ls,hs,ds,Lo))?!1:(Io.crossVectors(mi,gi),e=[Io.x,Io.y,Io.z],ba(e,ls,hs,ds,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,Po=new os,ls=new B,hs=new B,ds=new B,mi=new B,gi=new B,Bi=new B,Ks=new B,Lo=new B,Io=new B,ki=new B;function ba(o,t,e,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){ki.fromArray(o,s);const r=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),d=n.dot(ki);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>r)return!1}return!0}const Of=new os,Js=new B,Sa=new B;class rs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Sa)),this.expandByPoint(Js.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,wa=new B,Do=new B,_i=new B,Aa=new B,Oo=new B,Ta=new B;class jr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(wa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Do),r=_i.dot(this.direction),c=-_i.dot(Do),l=_i.lengthSq(),d=Math.abs(1-a*a);let u,m,g,_;if(d>0)if(u=a*c-r,m=a*r-c,_=s*d,u>=0)if(m>=-_)if(m<=_){const E=1/d;u*=E,m*=E,g=u*(u+a*m+2*r)+m*(a*u+m+2*c)+l}else m=s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;else m=-s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;else m<=-_?(u=Math.max(0,-(-a*s+r)),m=u>0?-s:Math.min(Math.max(-s,-c),s),g=-u*u+m*(m+2*c)+l):m<=_?(u=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+l):(u=Math.max(0,-(a*s+r)),m=u>0?s:Math.min(Math.max(-s,-c),s),g=-u*u+m*(m+2*c)+l);else m=a>0?-s:s,u=Math.max(0,-(a*m+r)),g=-u*u+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wa).addScaledVector(Do,m),g}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,i=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,i=(t.min.x-m.x)*l),d>=0?(s=(t.min.y-m.y)*d,a=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,a=(t.min.y-m.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(r=(t.min.z-m.z)*u,c=(t.max.z-m.z)*u):(r=(t.max.z-m.z)*u,c=(t.min.z-m.z)*u),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,s){Aa.subVectors(e,t),Oo.subVectors(n,t),Ta.crossVectors(Aa,Oo);let a=this.direction.dot(Ta),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;_i.subVectors(this.origin,t);const c=r*this.direction.dot(Oo.crossVectors(_i,Oo));if(c<0)return null;const l=r*this.direction.dot(Aa.cross(_i));if(l<0||c+l>a)return null;const d=-r*_i.dot(Ta);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,a,r,c,l,d,u,m,g,_,E,f){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,r,c,l,d,u,m,g,_,E,f)}set(t,e,n,i,s,a,r,c,l,d,u,m,g,_,E,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=i,h[1]=s,h[5]=a,h[9]=r,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=m,h[3]=g,h[7]=_,h[11]=E,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const m=a*d,g=a*u,_=r*d,E=r*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=g+_*l,e[5]=m-E*l,e[9]=-r*c,e[2]=E-m*l,e[6]=_+g*l,e[10]=a*c}else if(t.order==="YXZ"){const m=c*d,g=c*u,_=l*d,E=l*u;e[0]=m+E*r,e[4]=_*r-g,e[8]=a*l,e[1]=a*u,e[5]=a*d,e[9]=-r,e[2]=g*r-_,e[6]=E+m*r,e[10]=a*c}else if(t.order==="ZXY"){const m=c*d,g=c*u,_=l*d,E=l*u;e[0]=m-E*r,e[4]=-a*u,e[8]=_+g*r,e[1]=g+_*r,e[5]=a*d,e[9]=E-m*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const m=a*d,g=a*u,_=r*d,E=r*u;e[0]=c*d,e[4]=_*l-g,e[8]=m*l+E,e[1]=c*u,e[5]=E*l+m,e[9]=g*l-_,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const m=a*c,g=a*l,_=r*c,E=r*l;e[0]=c*d,e[4]=E-m*u,e[8]=_*u+g,e[1]=u,e[5]=a*d,e[9]=-r*d,e[2]=-l*d,e[6]=g*u+_,e[10]=m-E*u}else if(t.order==="XZY"){const m=a*c,g=a*l,_=r*c,E=r*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=m*u+E,e[5]=a*d,e[9]=g*u-_,e[2]=_*u-g,e[6]=r*d,e[10]=E*u+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Uf)}lookAt(t,e,n){const i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),vi.crossVectors(n,vn),vi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),vi.crossVectors(n,vn)),vi.normalize(),No.crossVectors(vn,vi),i[0]=vi.x,i[4]=No.x,i[8]=vn.x,i[1]=vi.y,i[5]=No.y,i[9]=vn.y,i[2]=vi.z,i[6]=No.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[4],c=n[8],l=n[12],d=n[1],u=n[5],m=n[9],g=n[13],_=n[2],E=n[6],f=n[10],h=n[14],y=n[3],M=n[7],b=n[11],D=n[15],C=i[0],R=i[4],z=i[8],S=i[12],L=i[1],X=i[5],q=i[9],tt=i[13],F=i[2],Y=i[6],K=i[10],Q=i[14],it=i[3],st=i[7],ot=i[11],ut=i[15];return s[0]=a*C+r*L+c*F+l*it,s[4]=a*R+r*X+c*Y+l*st,s[8]=a*z+r*q+c*K+l*ot,s[12]=a*S+r*tt+c*Q+l*ut,s[1]=d*C+u*L+m*F+g*it,s[5]=d*R+u*X+m*Y+g*st,s[9]=d*z+u*q+m*K+g*ot,s[13]=d*S+u*tt+m*Q+g*ut,s[2]=_*C+E*L+f*F+h*it,s[6]=_*R+E*X+f*Y+h*st,s[10]=_*z+E*q+f*K+h*ot,s[14]=_*S+E*tt+f*Q+h*ut,s[3]=y*C+M*L+b*F+D*it,s[7]=y*R+M*X+b*Y+D*st,s[11]=y*z+M*q+b*K+D*ot,s[15]=y*S+M*tt+b*Q+D*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],r=t[5],c=t[9],l=t[13],d=t[2],u=t[6],m=t[10],g=t[14],_=t[3],E=t[7],f=t[11],h=t[15];return _*(+s*c*u-i*l*u-s*r*m+n*l*m+i*r*g-n*c*g)+E*(+e*c*g-e*l*m+s*a*m-i*a*g+i*l*d-s*c*d)+f*(+e*l*u-e*r*g-s*a*u+n*a*g+s*r*d-n*l*d)+h*(-i*r*d-e*c*u+e*r*m+i*a*u-n*a*m+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],d=t[8],u=t[9],m=t[10],g=t[11],_=t[12],E=t[13],f=t[14],h=t[15],y=u*f*l-E*m*l+E*c*g-r*f*g-u*c*h+r*m*h,M=_*m*l-d*f*l-_*c*g+a*f*g+d*c*h-a*m*h,b=d*E*l-_*u*l+_*r*g-a*E*g-d*r*h+a*u*h,D=_*u*c-d*E*c-_*r*m+a*E*m+d*r*f-a*u*f,C=e*y+n*M+i*b+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=y*R,t[1]=(E*m*s-u*f*s-E*i*g+n*f*g+u*i*h-n*m*h)*R,t[2]=(r*f*s-E*c*s+E*i*l-n*f*l-r*i*h+n*c*h)*R,t[3]=(u*c*s-r*m*s-u*i*l+n*m*l+r*i*g-n*c*g)*R,t[4]=M*R,t[5]=(d*f*s-_*m*s+_*i*g-e*f*g-d*i*h+e*m*h)*R,t[6]=(_*c*s-a*f*s-_*i*l+e*f*l+a*i*h-e*c*h)*R,t[7]=(a*m*s-d*c*s+d*i*l-e*m*l-a*i*g+e*c*g)*R,t[8]=b*R,t[9]=(_*u*s-d*E*s-_*n*g+e*E*g+d*n*h-e*u*h)*R,t[10]=(a*E*s-_*r*s+_*n*l-e*E*l-a*n*h+e*r*h)*R,t[11]=(d*r*s-a*u*s-d*n*l+e*u*l+a*n*g-e*r*g)*R,t[12]=D*R,t[13]=(d*E*i-_*u*i+_*n*m-e*E*m-d*n*f+e*u*f)*R,t[14]=(_*r*i-a*E*i-_*n*c+e*E*c+a*n*f-e*r*f)*R,t[15]=(a*u*i-d*r*i+d*n*c-e*u*c-a*n*m+e*r*m)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,r=t.y,c=t.z,l=s*a,d=s*r;return this.set(l*a+n,l*r-i*c,l*c+i*r,0,l*r+i*c,d*r+n,d*c-i*a,0,l*c-i*r,d*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,r=e._z,c=e._w,l=s+s,d=a+a,u=r+r,m=s*l,g=s*d,_=s*u,E=a*d,f=a*u,h=r*u,y=c*l,M=c*d,b=c*u,D=n.x,C=n.y,R=n.z;return i[0]=(1-(E+h))*D,i[1]=(g+b)*D,i[2]=(_-M)*D,i[3]=0,i[4]=(g-b)*C,i[5]=(1-(m+h))*C,i[6]=(f+y)*C,i[7]=0,i[8]=(_+M)*R,i[9]=(f-y)*R,i[10]=(1-(m+E))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const a=us.set(i[4],i[5],i[6]).length(),r=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],kn.copy(this);const l=1/s,d=1/a,u=1/r;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=s,n.y=a,n.z=r,this}makePerspective(t,e,n,i,s,a,r=li){const c=this.elements,l=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),m=(n+i)/(n-i);let g,_;if(r===li)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(r===Ur)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,r=li){const c=this.elements,l=1/(e-t),d=1/(n-i),u=1/(a-s),m=(e+t)*l,g=(n+i)*d;let _,E;if(r===li)_=(a+s)*u,E=-2*u;else if(r===Ur)_=s*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=E,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new B,kn=new Ae,Nf=new B(0,0,0),Uf=new B(1,1,1),vi=new B,No=new B,vn=new B,Vl=new Ae,Wl=new So;class $r{constructor(t=0,e=0,n=0,i=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],r=i[8],c=i[1],l=i[5],d=i[9],u=i[2],m=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(mn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bf=0;const Xl=new B,fs=new So,ei=new Ae,Uo=new B,Qs=new B,kf=new B,Ff=new So,Yl=new B(1,0,0),ql=new B(0,1,0),jl=new B(0,0,1),zf={type:"added"},Hf={type:"removed"};class Ye extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new B,e=new $r,n=new So,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Uo.copy(t):Uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Qs,Uo,this.up):ei.lookAt(Uo,Qs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(ei),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),u=a(t.shapes),m=a(t.skeletons),g=a(t.animations),_=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(r){const c=[];for(const l in r){const d=r[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new B(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new B,ni=new B,Ca=new B,ii=new B,ps=new B,ms=new B,$l=new B,Ra=new B,Pa=new B,La=new B;let Bo=!1;class bn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fn.subVectors(i,e),ni.subVectors(n,e),Ca.subVectors(t,e);const a=Fn.dot(Fn),r=Fn.dot(ni),c=Fn.dot(Ca),l=ni.dot(ni),d=ni.dot(Ca),u=a*l-r*r;if(u===0)return s.set(0,0,0),null;const m=1/u,g=(l*c-r*d)*m,_=(a*d-r*c)*m;return s.set(1-g-_,_,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,n,i,s,a,r,c){return Bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bo=!0),this.getInterpolation(t,e,n,i,s,a,r,c)}static getInterpolation(t,e,n,i,s,a,r,c){return this.getBarycoord(t,e,n,i,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(r,ii.z),c)}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ni.subVectors(t,e),Fn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bo=!0),bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,r;ps.subVectors(i,n),ms.subVectors(s,n),Ra.subVectors(t,n);const c=ps.dot(Ra),l=ms.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,i);const d=ps.dot(Pa),u=ms.dot(Pa);if(d>=0&&u<=d)return e.copy(i);const m=c*u-d*l;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(ps,a);La.subVectors(t,s);const g=ps.dot(La),_=ms.dot(La);if(_>=0&&g<=_)return e.copy(s);const E=g*l-c*_;if(E<=0&&l>=0&&_<=0)return r=l/(l-_),e.copy(n).addScaledVector(ms,r);const f=d*_-g*u;if(f<=0&&u-d>=0&&g-_>=0)return $l.subVectors(s,i),r=(u-d)/(u-d+(g-_)),e.copy(i).addScaledVector($l,r);const h=1/(f+E+m);return a=E*h,r=m*h,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Ia(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=Tf(t,1),e=mn(e,0,1),n=mn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ia(a,s,t+1/3),this.g=Ia(a,s,t),this.b=Ia(a,s,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Ee.fromWorkingColorSpace(en.copy(this),t),Math.round(mn(en.r*255,0,255))*65536+Math.round(mn(en.g*255,0,255))*256+Math.round(mn(en.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const d=(r+a)/2;if(r===a)c=0,l=0;else{const u=a-r;switch(l=d<=.5?u/(a+r):u/(2-a-r),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Je){Ee.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(ko);const n=va(xi.h,ko.h,e),i=va(xi.s,ko.s,e),s=va(xi.l,ko.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new yt;yt.NAMES=Fd;let Gf=0;class Ni extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Bs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const r in s){const c=s[r];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fi extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new B,Fo=new ee;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class zd extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hd extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class An extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vf=0;const Cn=new Ae,Da=new Ye,gs=new B,xn=new os,to=new os,Ze=new B;class _n extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nd(t)?Hd:zd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];to.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(xn.min,to.min),xn.expandByPoint(Ze),Ze.addVectors(xn.max,to.max),xn.expandByPoint(Ze)):(xn.expandByPoint(to.min),xn.expandByPoint(to.max))}xn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],c=this.morphTargetsRelative;for(let l=0,d=r.count;l<d;l++)Ze.fromBufferAttribute(r,l),c&&(gs.fromBufferAttribute(t,l),Ze.add(gs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let L=0;L<r;L++)l[L]=new B,d[L]=new B;const u=new B,m=new B,g=new B,_=new ee,E=new ee,f=new ee,h=new B,y=new B;function M(L,X,q){u.fromArray(i,L*3),m.fromArray(i,X*3),g.fromArray(i,q*3),_.fromArray(a,L*2),E.fromArray(a,X*2),f.fromArray(a,q*2),m.sub(u),g.sub(u),E.sub(_),f.sub(_);const tt=1/(E.x*f.y-f.x*E.y);isFinite(tt)&&(h.copy(m).multiplyScalar(f.y).addScaledVector(g,-E.y).multiplyScalar(tt),y.copy(g).multiplyScalar(E.x).addScaledVector(m,-f.x).multiplyScalar(tt),l[L].add(h),l[X].add(h),l[q].add(h),d[L].add(y),d[X].add(y),d[q].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,X=b.length;L<X;++L){const q=b[L],tt=q.start,F=q.count;for(let Y=tt,K=tt+F;Y<K;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const D=new B,C=new B,R=new B,z=new B;function S(L){R.fromArray(s,L*3),z.copy(R);const X=l[L];D.copy(X),D.sub(R.multiplyScalar(R.dot(X))).normalize(),C.crossVectors(z,X);const tt=C.dot(d[L])<0?-1:1;c[L*4]=D.x,c[L*4+1]=D.y,c[L*4+2]=D.z,c[L*4+3]=tt}for(let L=0,X=b.length;L<X;++L){const q=b[L],tt=q.start,F=q.count;for(let Y=tt,K=tt+F;Y<K;Y+=3)S(n[Y+0]),S(n[Y+1]),S(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new B,s=new B,a=new B,r=new B,c=new B,l=new B,d=new B,u=new B;if(t)for(let m=0,g=t.count;m<g;m+=3){const _=t.getX(m+0),E=t.getX(m+1),f=t.getX(m+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),r.fromBufferAttribute(n,_),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,f),r.add(d),c.add(d),l.add(d),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let m=0,g=e.count;m<g;m+=3)i.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(r,c){const l=r.array,d=r.itemSize,u=r.normalized,m=new l.constructor(c.length*d);let g=0,_=0;for(let E=0,f=c.length;E<f;E++){r.isInterleavedBufferAttribute?g=c[E]*r.data.stride+r.offset:g=c[E]*d;for(let h=0;h<d;h++)m[_++]=l[g++]}return new gn(m,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let d=0,u=l.length;d<u;d++){const m=l[d],g=t(m,n);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,m=l.length;u<m;u++){const g=l[u];d.push(g.toJSON(t.data))}d.length>0&&(i[c]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],u=s[l];for(let m=0,g=u.length;m<g;m++)d.push(u[m].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new Ae,Fi=new jr,zo=new rs,Kl=new B,_s=new B,vs=new B,xs=new B,Oa=new B,Ho=new B,Go=new ee,Vo=new ee,Wo=new ee,Jl=new B,Ql=new B,th=new B,Xo=new B,Yo=new B;class te extends Ye{constructor(t=new _n,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){Ho.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=r[c],u=s[c];d!==0&&(Oa.fromBufferAttribute(u,t),a?Ho.addScaledVector(Oa,d):Ho.addScaledVector(Oa.sub(e),d))}e.add(Ho)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),Fi.copy(t.ray).recast(t.near),!(zo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(zo,Kl)===null||Fi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Zl.copy(s).invert(),Fi.copy(t.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,r=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,m=s.groups,g=s.drawRange;if(r!==null)if(Array.isArray(a))for(let _=0,E=m.length;_<E;_++){const f=m[_],h=a[f.materialIndex],y=Math.max(f.start,g.start),M=Math.min(r.count,Math.min(f.start+f.count,g.start+g.count));for(let b=y,D=M;b<D;b+=3){const C=r.getX(b),R=r.getX(b+1),z=r.getX(b+2);i=qo(this,h,t,n,l,d,u,C,R,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,g.start),E=Math.min(r.count,g.start+g.count);for(let f=_,h=E;f<h;f+=3){const y=r.getX(f),M=r.getX(f+1),b=r.getX(f+2);i=qo(this,a,t,n,l,d,u,y,M,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=m.length;_<E;_++){const f=m[_],h=a[f.materialIndex],y=Math.max(f.start,g.start),M=Math.min(c.count,Math.min(f.start+f.count,g.start+g.count));for(let b=y,D=M;b<D;b+=3){const C=b,R=b+1,z=b+2;i=qo(this,h,t,n,l,d,u,C,R,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let f=_,h=E;f<h;f+=3){const y=f,M=f+1,b=f+2;i=qo(this,a,t,n,l,d,u,y,M,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Wf(o,t,e,n,i,s,a,r){let c;if(t.side===ln?c=n.intersectTriangle(a,s,i,!0,r):c=n.intersectTriangle(i,s,a,t.side===di,r),c===null)return null;Yo.copy(r),Yo.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Yo);return l<e.near||l>e.far?null:{distance:l,point:Yo.clone(),object:o}}function qo(o,t,e,n,i,s,a,r,c,l){o.getVertexPosition(r,_s),o.getVertexPosition(c,vs),o.getVertexPosition(l,xs);const d=Wf(o,t,e,n,_s,vs,xs,Xo);if(d){i&&(Go.fromBufferAttribute(i,r),Vo.fromBufferAttribute(i,c),Wo.fromBufferAttribute(i,l),d.uv=bn.getInterpolation(Xo,_s,vs,xs,Go,Vo,Wo,new ee)),s&&(Go.fromBufferAttribute(s,r),Vo.fromBufferAttribute(s,c),Wo.fromBufferAttribute(s,l),d.uv1=bn.getInterpolation(Xo,_s,vs,xs,Go,Vo,Wo,new ee),d.uv2=d.uv1),a&&(Jl.fromBufferAttribute(a,r),Ql.fromBufferAttribute(a,c),th.fromBufferAttribute(a,l),d.normal=bn.getInterpolation(Xo,_s,vs,xs,Jl,Ql,th,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:r,b:c,c:l,normal:new B,materialIndex:0};bn.getNormal(_s,vs,xs,u.normal),d.face=u}return d}class Ce extends _n{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],u=[];let m=0,g=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(d,3)),this.setAttribute("uv",new An(u,2));function _(E,f,h,y,M,b,D,C,R,z,S){const L=b/R,X=D/z,q=b/2,tt=D/2,F=C/2,Y=R+1,K=z+1;let Q=0,it=0;const st=new B;for(let ot=0;ot<K;ot++){const ut=ot*X-tt;for(let pt=0;pt<Y;pt++){const J=pt*L-q;st[E]=J*y,st[f]=ut*M,st[h]=F,l.push(st.x,st.y,st.z),st[E]=0,st[f]=0,st[h]=C>0?1:-1,d.push(st.x,st.y,st.z),u.push(pt/R),u.push(1-ot/z),Q+=1}}for(let ot=0;ot<z;ot++)for(let ut=0;ut<R;ut++){const pt=m+ut+Y*ot,J=m+ut+Y*(ot+1),at=m+(ut+1)+Y*(ot+1),Et=m+(ut+1)+Y*ot;c.push(pt,J,Et),c.push(J,at,Et),it+=6}r.addGroup(g,it,S),g+=it,m+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(o){const t={};for(let e=0;e<o.length;e++){const n=Vs(o[e]);for(const i in n)t[i]=n[i]}return t}function Xf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Gd(o){return o.getRenderTarget()===null?o.outputColorSpace:Ee.workingColorSpace}const Yf={clone:Vs,merge:rn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends Vd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ms=1;class $f extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(ys,Ms,t,e);i.layers=this.layers,this.add(i);const s=new Sn(ys,Ms,t,e);s.layers=this.layers,this.add(s);const a=new Sn(ys,Ms,t,e);a.layers=this.layers,this.add(a);const r=new Sn(ys,Ms,t,e);r.layers=this.layers,this.add(r);const c=new Sn(ys,Ms,t,e);c.layers=this.layers,this.add(c);const l=new Sn(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,r,c]=e;for(const l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,c,l,d]=this.children,u=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,m,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wd extends hn{constructor(t,e,n,i,s,a,r,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,i,s,a,r,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zf extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ns?Je:Ln),this.texture=new Wd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Pi});s.uniforms.tEquirect.value=e;const a=new te(i,s),r=e.minFilter;return e.minFilter===Mo&&(e.minFilter=Pn),new $f(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Na=new B,Kf=new B,Jf=new le;class Xi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Na.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jf.getNormalMatrix(t),i=this.coplanarPoint(Na).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new rs,jo=new B;class Zc{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,s=i[0],a=i[1],r=i[2],c=i[3],l=i[4],d=i[5],u=i[6],m=i[7],g=i[8],_=i[9],E=i[10],f=i[11],h=i[12],y=i[13],M=i[14],b=i[15];if(n[0].setComponents(c-s,m-l,f-g,b-h).normalize(),n[1].setComponents(c+s,m+l,f+g,b+h).normalize(),n[2].setComponents(c+a,m+d,f+_,b+y).normalize(),n[3].setComponents(c-a,m-d,f-_,b-y).normalize(),n[4].setComponents(c-r,m-u,f-E,b-M).normalize(),e===li)n[5].setComponents(c+r,m+u,f+E,b+M).normalize();else if(e===Ur)n[5].setComponents(r,u,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jo.x=i.normal.x>0?t.max.x:t.min.x,jo.y=i.normal.y>0?t.max.y:t.min.y,jo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xd(){let o=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Qf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,d){const u=l.array,m=l.usage,g=u.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,u,m),l.onUploadCallback();let E;if(u instanceof Float32Array)E=o.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(u instanceof Int16Array)E=o.SHORT;else if(u instanceof Uint32Array)E=o.UNSIGNED_INT;else if(u instanceof Int32Array)E=o.INT;else if(u instanceof Int8Array)E=o.BYTE;else if(u instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:E,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:g}}function s(l,d,u){const m=d.array,g=d._updateRange,_=d.updateRanges;if(o.bindBuffer(u,l),g.count===-1&&_.length===0&&o.bufferSubData(u,0,m),_.length!==0){for(let E=0,f=_.length;E<f;E++){const h=_[E];e?o.bufferSubData(u,h.start*m.BYTES_PER_ELEMENT,m,h.start,h.count):o.bufferSubData(u,h.start*m.BYTES_PER_ELEMENT,m.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}g.count!==-1&&(e?o.bufferSubData(u,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):o.bufferSubData(u,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(o.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const m=n.get(l);(!m||m.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,d));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,d),u.version=l.version}}return{get:a,remove:r,update:c}}class Zr extends _n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,d=c+1,u=t/r,m=e/c,g=[],_=[],E=[],f=[];for(let h=0;h<d;h++){const y=h*m-a;for(let M=0;M<l;M++){const b=M*u-s;_.push(b,-y,0),E.push(0,0,1),f.push(M/r),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<r;y++){const M=y+l*h,b=y+l*(h+1),D=y+1+l*(h+1),C=y+1+l*h;g.push(M,b,C),g.push(b,D,C)}this.setIndex(g),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`
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
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,a0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,A0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:op,aomap_fragment:rp,aomap_pars_fragment:ap,batching_pars_vertex:cp,batching_vertex:lp,begin_vertex:hp,beginnormal_vertex:dp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:xp,color_pars_fragment:yp,color_pars_vertex:Mp,color_vertex:Ep,common:bp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Tp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Rp,colorspace_fragment:Pp,colorspace_pars_fragment:Lp,envmap_fragment:Ip,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Op,envmap_pars_vertex:Np,envmap_physical_pars_fragment:qp,envmap_vertex:Up,fog_vertex:Bp,fog_pars_vertex:kp,fog_fragment:Fp,fog_pars_fragment:zp,gradientmap_pars_fragment:Hp,lightmap_fragment:Gp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:Yp,lights_toon_fragment:jp,lights_toon_pars_fragment:$p,lights_phong_fragment:Zp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:um,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:xm,normal_pars_vertex:ym,normal_vertex:Mm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Am,opaque_fragment:Tm,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Lm,dithering_pars_fragment:Im,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Um,shadowmap_vertex:Bm,shadowmask_pars_fragment:km,skinbase_vertex:Fm,skinning_pars_vertex:zm,skinning_vertex:Hm,skinnormal_vertex:Gm,specularmap_fragment:Vm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:Ym,transmission_fragment:qm,transmission_pars_fragment:jm,uv_pars_fragment:$m,uv_pars_vertex:Zm,uv_vertex:Km,worldpos_vertex:Jm,background_vert:Qm,background_frag:t0,backgroundCube_vert:e0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:o0,depth_frag:r0,distanceRGBA_vert:a0,distanceRGBA_frag:c0,equirect_vert:l0,equirect_frag:h0,linedashed_vert:d0,linedashed_frag:u0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:v0,meshnormal_vert:x0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:E0,meshphysical_vert:b0,meshphysical_frag:S0,meshtoon_vert:w0,meshtoon_frag:A0,points_vert:T0,points_frag:C0,shadow_vert:R0,shadow_frag:P0,sprite_vert:L0,sprite_frag:I0},_t={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:rn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:rn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:rn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:rn([_t.points,_t.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:rn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:rn([_t.common,_t.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:rn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:rn([_t.sprite,_t.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:rn([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:rn([_t.lights,_t.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const $o={r:0,b:0,g:0};function D0(o,t,e,n,i,s,a){const r=new yt(0);let c=s===!0?0:1,l,d,u=null,m=0,g=null;function _(f,h){let y=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?e:t).get(M)),M===null?E(r,c):M&&M.isColor&&(E(M,1),y=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Yr)?(d===void 0&&(d=new te(new Ce(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Vs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,(u!==M||m!==M.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,u=M,m=M.version,g=o.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new te(new Zr(2,2),new Oi({name:"BackgroundMaterial",uniforms:Vs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(M.colorSpace)!==Le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||m!==M.version||g!==o.toneMapping)&&(l.material.needsUpdate=!0,u=M,m=M.version,g=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function E(f,h){f.getRGB($o,Gd(o)),n.buffers.color.setClear($o.r,$o.g,$o.b,h,a)}return{getClearColor:function(){return r},setClearColor:function(f,h=1){r.set(f),c=h,E(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,E(r,c)},render:_}}function O0(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,r={},c=f(null);let l=c,d=!1;function u(F,Y,K,Q,it){let st=!1;if(a){const ot=E(Q,K,Y);l!==ot&&(l=ot,g(l.object)),st=h(F,Q,K,it),st&&y(F,Q,K,it)}else{const ot=Y.wireframe===!0;(l.geometry!==Q.id||l.program!==K.id||l.wireframe!==ot)&&(l.geometry=Q.id,l.program=K.id,l.wireframe=ot,st=!0)}it!==null&&e.update(it,o.ELEMENT_ARRAY_BUFFER),(st||d)&&(d=!1,z(F,Y,K,Q),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function m(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function g(F){return n.isWebGL2?o.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?o.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function E(F,Y,K){const Q=K.wireframe===!0;let it=r[F.id];it===void 0&&(it={},r[F.id]=it);let st=it[Y.id];st===void 0&&(st={},it[Y.id]=st);let ot=st[Q];return ot===void 0&&(ot=f(m()),st[Q]=ot),ot}function f(F){const Y=[],K=[],Q=[];for(let it=0;it<i;it++)Y[it]=0,K[it]=0,Q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:Q,object:F,attributes:{},index:null}}function h(F,Y,K,Q){const it=l.attributes,st=Y.attributes;let ot=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=it[pt];let Et=st[pt];if(Et===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;ot++}return l.attributesNum!==ot||l.index!==Q}function y(F,Y,K,Q){const it={},st=Y.attributes;let ot=0;const ut=K.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=st[pt];at===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));const Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),it[pt]=Et,ot++}l.attributes=it,l.attributesNum=ot,l.index=Q}function M(){const F=l.newAttributes;for(let Y=0,K=F.length;Y<K;Y++)F[Y]=0}function b(F){D(F,0)}function D(F,Y){const K=l.newAttributes,Q=l.enabledAttributes,it=l.attributeDivisors;K[F]=1,Q[F]===0&&(o.enableVertexAttribArray(F),Q[F]=1),it[F]!==Y&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),it[F]=Y)}function C(){const F=l.newAttributes,Y=l.enabledAttributes;for(let K=0,Q=Y.length;K<Q;K++)Y[K]!==F[K]&&(o.disableVertexAttribArray(K),Y[K]=0)}function R(F,Y,K,Q,it,st,ot){ot===!0?o.vertexAttribIPointer(F,Y,K,it,st):o.vertexAttribPointer(F,Y,K,Q,it,st)}function z(F,Y,K,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const it=Q.attributes,st=K.getAttributes(),ot=Y.defaultAttributeValues;for(const ut in st){const pt=st[ut];if(pt.location>=0){let J=it[ut];if(J===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){const at=J.normalized,Et=J.itemSize,Ct=e.get(J);if(Ct===void 0)continue;const Ot=Ct.buffer,qt=Ct.type,jt=Ct.bytesPerElement,Ft=n.isWebGL2===!0&&(qt===o.INT||qt===o.UNSIGNED_INT||J.gpuType===wd);if(J.isInterleavedBufferAttribute){const de=J.data,$=de.stride,_e=J.offset;if(de.isInstancedInterleavedBuffer){for(let Bt=0;Bt<pt.locationSize;Bt++)D(pt.location+Bt,de.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Bt=0;Bt<pt.locationSize;Bt++)b(pt.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let Bt=0;Bt<pt.locationSize;Bt++)R(pt.location+Bt,Et/pt.locationSize,qt,at,$*jt,(_e+Et/pt.locationSize*Bt)*jt,Ft)}else{if(J.isInstancedBufferAttribute){for(let de=0;de<pt.locationSize;de++)D(pt.location+de,J.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<pt.locationSize;de++)b(pt.location+de);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let de=0;de<pt.locationSize;de++)R(pt.location+de,Et/pt.locationSize,qt,at,Et*jt,Et/pt.locationSize*de*jt,Ft)}}else if(ot!==void 0){const at=ot[ut];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(pt.location,at);break;case 3:o.vertexAttrib3fv(pt.location,at);break;case 4:o.vertexAttrib4fv(pt.location,at);break;default:o.vertexAttrib1fv(pt.location,at)}}}}C()}function S(){q();for(const F in r){const Y=r[F];for(const K in Y){const Q=Y[K];for(const it in Q)_(Q[it].object),delete Q[it];delete Y[K]}delete r[F]}}function L(F){if(r[F.id]===void 0)return;const Y=r[F.id];for(const K in Y){const Q=Y[K];for(const it in Q)_(Q[it].object),delete Q[it];delete Y[K]}delete r[F.id]}function X(F){for(const Y in r){const K=r[Y];if(K[F.id]===void 0)continue;const Q=K[F.id];for(const it in Q)_(Q[it].object),delete Q[it];delete K[F.id]}}function q(){tt(),d=!0,l!==c&&(l=c,g(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:q,resetDefaultState:tt,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:b,disableUnusedAttributes:C}}function N0(o,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}function r(d,u){o.drawArrays(s,d,u),e.update(u,s,1)}function c(d,u,m){if(m===0)return;let g,_;if(i)g=o,_="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,u,m),e.update(u,s,m)}function l(d,u,m){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<m;_++)this.render(d[_],u[_]);else{g.multiDrawArraysWEBGL(s,d,0,u,0,m);let _=0;for(let E=0;E<m;E++)_+=u[E];e.update(_,s,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function U0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,u=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_TEXTURE_SIZE),_=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),h=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,b=a||t.has("OES_texture_float"),D=M&&b,C=a?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:E,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:C}}function B0(o){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Xi,r=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const g=u.length!==0||m||n!==0||i;return i=m,n=u.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,m){e=d(u,m,0)},this.setState=function(u,m,g){const _=u.clippingPlanes,E=u.clipIntersection,f=u.clipShadows,h=o.get(u);if(!i||_===null||_.length===0||s&&!f)s?d(null):l();else{const y=s?0:n,M=y*4;let b=h.clippingState||null;c.value=b,b=d(_,m,M,g);for(let D=0;D!==M;++D)b[D]=e[D];h.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,m,g,_){const E=u!==null?u.length:0;let f=null;if(E!==0){if(f=c.value,_!==!0||f===null){const h=g+E*4,y=m.matrixWorldInverse;r.getNormalMatrix(y),(f===null||f.length<h)&&(f=new Float32Array(h));for(let M=0,b=g;M!==E;++M,b+=4)a.copy(u[M]).applyMatrix4(y,r),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}function k0(o){let t=new WeakMap;function e(a,r){return r===Mc?a.mapping=zs:r===Ec&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Mc||r===Ec)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zf(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yd extends Vd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,eh=[.125,.215,.35,.446,.526,.582],Zi=20,Ua=new Yd,nh=new yt;let Ba=null,ka=0,Fa=0;const Yi=(1+Math.sqrt(5))/2,Es=1/Yi,ih=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Yi,Es),new B(0,Yi,-Es),new B(Es,0,Yi),new B(-Es,0,Yi),new B(Yi,Es,0),new B(-Yi,Es,0)];class sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,ka,Fa),t.scissorTest=!1,Zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Eo,format:Wn,colorSpace:ui,depthBuffer:!1},i=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(s)),this._blurMaterial=z0(s,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,i){const r=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(nh),d.toneMapping=hi,d.autoClear=!1;const g=new fi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new te(new Ce,g);let E=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,E=!0):(g.color.copy(nh),E=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(r.up.set(0,c[h],0),r.lookAt(l[h],0,0)):y===1?(r.up.set(0,0,c[h]),r.lookAt(0,l[h],0)):(r.up.set(0,c[h],0),r.lookAt(0,0,l[h]));const M=this._cubeSize;Zo(i,y*M,h>2?M:0,M,M),d.setRenderTarget(i),E&&d.render(_,r),d.render(t,r)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zs||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const c=this._cubeSize;Zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ih[(i-1)%ih.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,r){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new te(this._lodPlanes[i],l),m=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Zi-1),E=s/_,f=isFinite(s)?1+Math.floor(d*E):Zi;f>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zi}`);const h=[];let y=0;for(let R=0;R<Zi;++R){const z=R/E,S=Math.exp(-z*z/2);h.push(S),R===0?y+=S:R<f&&(y+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=h,m.latitudinal.value=a==="latitudinal",r&&(m.poleAxis.value=r);const{_lodMax:M}=this;m.dTheta.value=_,m.mipInt.value=M-n;const b=this._sizeLods[i],D=3*b*(i>M-Ds?i-M+Ds:0),C=4*(this._cubeSize-b);Zo(e,D,C,3*b,2*b),c.setRenderTarget(e),c.render(u,Ua)}}function F0(o){const t=[],e=[],n=[];let i=o;const s=o-Ds+1+eh.length;for(let a=0;a<s;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>o-Ds?c=eh[a-o+Ds-1]:a===0&&(c=0),n.push(c);const l=1/(r-2),d=-l,u=1+l,m=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,_=6,E=3,f=2,h=1,y=new Float32Array(E*_*g),M=new Float32Array(f*_*g),b=new Float32Array(h*_*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,z=C>2?0:-1,S=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];y.set(S,E*_*C),M.set(m,f*_*C);const L=[C,C,C,C,C,C];b.set(L,h*_*C)}const D=new _n;D.setAttribute("position",new gn(y,E)),D.setAttribute("uv",new gn(M,f)),D.setAttribute("faceIndex",new gn(b,h)),t.push(D),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(o,t,e){const n=new is(o,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function z0(o,t,e){const n=new Float32Array(Zi),i=new B(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function rh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ah(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function H0(o){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===Mc||c===Ec,d=c===zs||c===Hs;if(l||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new sh(o)),u=l?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||d&&u&&i(u)){e===null&&(e=new sh(o));const m=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,m),r.addEventListener("dispose",s),m.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let d=0;d<l;d++)r[d]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function G0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function V0(o,t,e,n){const i={},s=new WeakMap;function a(u){const m=u.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const E=m.morphAttributes[_];for(let f=0,h=E.length;f<h;f++)t.remove(E[f])}m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(t.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function r(u,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,e.memory.geometries++),m}function c(u){const m=u.attributes;for(const _ in m)t.update(m[_],o.ARRAY_BUFFER);const g=u.morphAttributes;for(const _ in g){const E=g[_];for(let f=0,h=E.length;f<h;f++)t.update(E[f],o.ARRAY_BUFFER)}}function l(u){const m=[],g=u.index,_=u.attributes.position;let E=0;if(g!==null){const y=g.array;E=g.version;for(let M=0,b=y.length;M<b;M+=3){const D=y[M+0],C=y[M+1],R=y[M+2];m.push(D,C,C,R,R,D)}}else if(_!==void 0){const y=_.array;E=_.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const D=M+0,C=M+1,R=M+2;m.push(D,C,C,R,R,D)}}else return;const f=new(Nd(m)?Hd:zd)(m,1);f.version=E;const h=s.get(u);h&&t.remove(h),s.set(u,f)}function d(u){const m=s.get(u);if(m){const g=u.index;g!==null&&m.version<g.version&&l(u)}else l(u);return s.get(u)}return{get:r,update:c,getWireframeAttribute:d}}function W0(o,t,e,n){const i=n.isWebGL2;let s;function a(g){s=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function d(g,_){o.drawElements(s,_,r,g*c),e.update(_,s,1)}function u(g,_,E){if(E===0)return;let f,h;if(i)f=o,h="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,_,r,g*c,E),e.update(_,s,E)}function m(g,_,E){if(E===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<E;h++)this.render(g[h]/c,_[h]);else{f.multiDrawElementsWEBGL(s,_,0,r,g,0,E);let h=0;for(let y=0;y<E;y++)h+=_[y];e.update(h,s,1)}}this.setMode=a,this.setIndex=l,this.render=d,this.renderInstances=u,this.renderMultiDraw=m}function X0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(e.calls++,a){case o.TRIANGLES:e.triangles+=r*(s/3);break;case o.LINES:e.lines+=r*(s/2);break;case o.LINE_STRIP:e.lines+=r*(s-1);break;case o.LINE_LOOP:e.lines+=r*s;break;case o.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Y0(o,t){return o[0]-t[0]}function q0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function j0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ue,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,d,u){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=_!==void 0?_.length:0;let f=s.get(d);if(f===void 0||f.count!==E){let Y=function(){tt.dispose(),s.delete(d),d.removeEventListener("dispose",Y)};var g=Y;f!==void 0&&f.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,D=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let S=0;M===!0&&(S=1),b===!0&&(S=2),D===!0&&(S=3);let L=d.attributes.position.count*S,X=1;L>t.maxTextureSize&&(X=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const q=new Float32Array(L*X*4*E),tt=new kd(q,L,X,E);tt.type=Ri,tt.needsUpdate=!0;const F=S*4;for(let K=0;K<E;K++){const Q=C[K],it=R[K],st=z[K],ot=L*X*4*K;for(let ut=0;ut<Q.count;ut++){const pt=ut*F;M===!0&&(a.fromBufferAttribute(Q,ut),q[ot+pt+0]=a.x,q[ot+pt+1]=a.y,q[ot+pt+2]=a.z,q[ot+pt+3]=0),b===!0&&(a.fromBufferAttribute(it,ut),q[ot+pt+4]=a.x,q[ot+pt+5]=a.y,q[ot+pt+6]=a.z,q[ot+pt+7]=0),D===!0&&(a.fromBufferAttribute(st,ut),q[ot+pt+8]=a.x,q[ot+pt+9]=a.y,q[ot+pt+10]=a.z,q[ot+pt+11]=st.itemSize===4?a.w:1)}}f={count:E,texture:tt,size:new ee(L,X)},s.set(d,f),d.addEventListener("dispose",Y)}let h=0;for(let M=0;M<m.length;M++)h+=m[M];const y=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(o,"morphTargetBaseInfluence",y),u.getUniforms().setValue(o,"morphTargetInfluences",m),u.getUniforms().setValue(o,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let E=n[d.id];if(E===void 0||E.length!==_){E=[];for(let b=0;b<_;b++)E[b]=[b,0];n[d.id]=E}for(let b=0;b<_;b++){const D=E[b];D[0]=b,D[1]=m[b]}E.sort(q0);for(let b=0;b<8;b++)b<_&&E[b][1]?(r[b][0]=E[b][0],r[b][1]=E[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(Y0);const f=d.morphAttributes.position,h=d.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const D=r[b],C=D[0],R=D[1];C!==Number.MAX_SAFE_INTEGER&&R?(f&&d.getAttribute("morphTarget"+b)!==f[C]&&d.setAttribute("morphTarget"+b,f[C]),h&&d.getAttribute("morphNormal"+b)!==h[C]&&d.setAttribute("morphNormal"+b,h[C]),i[b]=R,y+=R):(f&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),h&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const M=d.morphTargetsRelative?1:1-y;u.getUniforms().setValue(o,"morphTargetBaseInfluence",M),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function $0(o,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,u=t.get(c,d);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==l&&(m.update(),i.set(m,l))}return u}function a(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class qd extends hn{constructor(t,e,n,i,s,a,r,c,l,d){if(d=d!==void 0?d:es,d!==es&&d!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===es&&(n=Ci),n===void 0&&d===Gs&&(n=ts),super(null,i,s,a,r,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jd=new hn,$d=new qd(1,1);$d.compareFunction=Od;const Zd=new kd,Kd=new Df,Jd=new Wd,ch=[],lh=[],hh=new Float32Array(16),dh=new Float32Array(9),uh=new Float32Array(4);function $s(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=ch[i];if(s===void 0&&(s=new Float32Array(i),ch[i]=s),t!==0){n.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function je(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function $e(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Kr(o,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Z0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function K0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2fv(this.addr,t),$e(e,t)}}function J0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;o.uniform3fv(this.addr,t),$e(e,t)}}function Q0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4fv(this.addr,t),$e(e,t)}}function tg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;uh.set(n),o.uniformMatrix2fv(this.addr,!1,uh),$e(e,n)}}function eg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;dh.set(n),o.uniformMatrix3fv(this.addr,!1,dh),$e(e,n)}}function ng(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(je(e,n))return;hh.set(n),o.uniformMatrix4fv(this.addr,!1,hh),$e(e,n)}}function ig(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function sg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2iv(this.addr,t),$e(e,t)}}function og(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3iv(this.addr,t),$e(e,t)}}function rg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4iv(this.addr,t),$e(e,t)}}function ag(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function cg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2uiv(this.addr,t),$e(e,t)}}function lg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3uiv(this.addr,t),$e(e,t)}}function hg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4uiv(this.addr,t),$e(e,t)}}function dg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?$d:jd;e.setTexture2D(t||s,i)}function ug(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kd,i)}function fg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jd,i)}function pg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zd,i)}function mg(o){switch(o){case 5126:return Z0;case 35664:return K0;case 35665:return J0;case 35666:return Q0;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return og;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(o,t){o.uniform1fv(this.addr,t)}function _g(o,t){const e=$s(t,this.size,2);o.uniform2fv(this.addr,e)}function vg(o,t){const e=$s(t,this.size,3);o.uniform3fv(this.addr,e)}function xg(o,t){const e=$s(t,this.size,4);o.uniform4fv(this.addr,e)}function yg(o,t){const e=$s(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Mg(o,t){const e=$s(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Eg(o,t){const e=$s(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function bg(o,t){o.uniform1iv(this.addr,t)}function Sg(o,t){o.uniform2iv(this.addr,t)}function wg(o,t){o.uniform3iv(this.addr,t)}function Ag(o,t){o.uniform4iv(this.addr,t)}function Tg(o,t){o.uniform1uiv(this.addr,t)}function Cg(o,t){o.uniform2uiv(this.addr,t)}function Rg(o,t){o.uniform3uiv(this.addr,t)}function Pg(o,t){o.uniform4uiv(this.addr,t)}function Lg(o,t,e){const n=this.cache,i=t.length,s=Kr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||jd,s[a])}function Ig(o,t,e){const n=this.cache,i=t.length,s=Kr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Kd,s[a])}function Dg(o,t,e){const n=this.cache,i=t.length,s=Kr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Jd,s[a])}function Og(o,t,e){const n=this.cache,i=t.length,s=Kr(e,i);je(n,s)||(o.uniform1iv(this.addr,s),$e(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Zd,s[a])}function Ng(o){switch(o){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Og}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function fh(o,t){o.seq.push(t),o.map[t.id]=t}function Fg(o,t,e){const n=o.name,i=n.length;for(za.lastIndex=0;;){const s=za.exec(n),a=za.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===i){fh(e,l===void 0?new Ug(r,o,t):new Bg(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new kg(r),fh(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Fg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ph(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const zg=37297;let Hg=0;function Gg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function Vg(o){const t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(o);let n;switch(t===e?n="":t===Nr&&e===Or?n="LinearDisplayP3ToLinearSRGB":t===Or&&e===Nr&&(n="LinearSRGBToLinearDisplayP3"),o){case ui:case qr:return[n,"LinearTransferOETF"];case Je:case jc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function mh(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Gg(o.getShaderSource(t),a)}else return i}function Wg(o,t){const e=Vg(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xg(o,t){let e;switch(t){case tf:e="Linear";break;case ef:e="Reinhard";break;case nf:e="OptimizedCineon";break;case sf:e="ACESFilmic";break;case rf:e="AgX";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function qg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function jg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Os(o){return o!==""}function gh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(o){return o.replace(Zg,Jg)}const Kg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(o,t){let e=ie[t];if(e===void 0){const n=Kg.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(o){return o.replace(Qg,t_)}function t_(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Hs:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case Qu:t="ENVMAP_BLENDING_ADD";break}return t}function o_(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r_(o,t,e,n){const i=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=e_(e),l=n_(e),d=i_(e),u=s_(e),m=o_(e),g=e.isWebGL2?"":Yg(e),_=qg(e),E=jg(s),f=i.createProgram();let h,y,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Os).join(`
`),h.length>0&&(h+=`
`),y=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Os).join(`
`),y.length>0&&(y+=`
`)):(h=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),y=[g,xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ie.tonemapping_pars_fragment:"",e.toneMapping!==hi?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=Rc(a),a=gh(a,e),a=_h(a,e),r=Rc(r),r=gh(r,e),r=_h(r,e),a=vh(a),r=vh(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=M+h+a,D=M+y+r,C=ph(i,i.VERTEX_SHADER,b),R=ph(i,i.FRAGMENT_SHADER,D);i.attachShader(f,C),i.attachShader(f,R),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function z(q){if(o.debug.checkShaderErrors){const tt=i.getProgramInfoLog(f).trim(),F=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(R).trim();let K=!0,Q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,f,C,R);else{const it=mh(i,C,"vertex"),st=mh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+it+`
`+st)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(F===""||Y==="")&&(Q=!1);Q&&(q.diagnostics={runnable:K,programLog:tt,vertexShader:{log:F,prefix:h},fragmentShader:{log:Y,prefix:y}})}i.deleteShader(C),i.deleteShader(R),S=new Ar(i,f),L=$g(i,f)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=i.getProgramParameter(f,zg)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=R,this}let a_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l_(t),e.set(t,n)),n}}class l_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function h_(o,t,e,n,i,s,a){const r=new $c,c=new c_,l=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return S===0?"uv":`uv${S}`}function f(S,L,X,q,tt){const F=q.fog,Y=tt.geometry,K=S.isMeshStandardMaterial?q.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||K),it=Q&&Q.mapping===Yr?Q.image.height:null,st=_[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=ot!==void 0?ot.length:0;let pt=0;Y.morphAttributes.position!==void 0&&(pt=1),Y.morphAttributes.normal!==void 0&&(pt=2),Y.morphAttributes.color!==void 0&&(pt=3);let J,at,Et,Ct;if(st){const Ke=Zn[st];J=Ke.vertexShader,at=Ke.fragmentShader}else J=S.vertexShader,at=S.fragmentShader,c.update(S),Et=c.getVertexShaderID(S),Ct=c.getFragmentShaderID(S);const Ot=o.getRenderTarget(),qt=tt.isInstancedMesh===!0,jt=tt.isBatchedMesh===!0,Ft=!!S.map,de=!!S.matcap,$=!!Q,_e=!!S.aoMap,Bt=!!S.lightMap,Xt=!!S.bumpMap,Rt=!!S.normalMap,xe=!!S.displacementMap,Zt=!!S.emissiveMap,O=!!S.metalnessMap,T=!!S.roughnessMap,j=S.anisotropy>0,ht=S.clearcoat>0,lt=S.iridescence>0,dt=S.sheen>0,Lt=S.transmission>0,vt=j&&!!S.anisotropyMap,St=ht&&!!S.clearcoatMap,zt=ht&&!!S.clearcoatNormalMap,$t=ht&&!!S.clearcoatRoughnessMap,rt=lt&&!!S.iridescenceMap,ve=lt&&!!S.iridescenceThicknessMap,ne=dt&&!!S.sheenColorMap,Wt=dt&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,wt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,fe=Lt&&!!S.transmissionMap,Re=Lt&&!!S.thicknessMap,Jt=!!S.gradientMap,ft=!!S.alphaMap,k=S.alphaTest>0,Mt=!!S.alphaHash,xt=!!S.extensions,Ht=!!Y.attributes.uv1,kt=!!Y.attributes.uv2,ye=!!Y.attributes.uv3;let Me=hi;return S.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Me=o.toneMapping),{isWebGL2:d,shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:at,defines:S.defines,customVertexShaderID:Et,customFragmentShaderID:Ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:jt,instancing:qt,instancingColor:qt&&tt.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ot===null?o.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ui,map:Ft,matcap:de,envMap:$,envMapMode:$&&Q.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:Bt,bumpMap:Xt,normalMap:Rt,displacementMap:m&&xe,emissiveMap:Zt,normalMapObjectSpace:Rt&&S.normalMapType===vf,normalMapTangentSpace:Rt&&S.normalMapType===Dd,metalnessMap:O,roughnessMap:T,anisotropy:j,anisotropyMap:vt,clearcoat:ht,clearcoatMap:St,clearcoatNormalMap:zt,clearcoatRoughnessMap:$t,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:ve,sheen:dt,sheenColorMap:ne,sheenRoughnessMap:Wt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Kt,transmission:Lt,transmissionMap:fe,thicknessMap:Re,gradientMap:Jt,opaque:S.transparent===!1&&S.blending===Bs,alphaMap:ft,alphaTest:k,alphaHash:Mt,combine:S.combine,mapUv:Ft&&E(S.map.channel),aoMapUv:_e&&E(S.aoMap.channel),lightMapUv:Bt&&E(S.lightMap.channel),bumpMapUv:Xt&&E(S.bumpMap.channel),normalMapUv:Rt&&E(S.normalMap.channel),displacementMapUv:xe&&E(S.displacementMap.channel),emissiveMapUv:Zt&&E(S.emissiveMap.channel),metalnessMapUv:O&&E(S.metalnessMap.channel),roughnessMapUv:T&&E(S.roughnessMap.channel),anisotropyMapUv:vt&&E(S.anisotropyMap.channel),clearcoatMapUv:St&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:zt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&E(S.sheenRoughnessMap.channel),specularMapUv:Pt&&E(S.specularMap.channel),specularColorMapUv:wt&&E(S.specularColorMap.channel),specularIntensityMapUv:Kt&&E(S.specularIntensityMap.channel),transmissionMapUv:fe&&E(S.transmissionMap.channel),thicknessMapUv:Re&&E(S.thicknessMap.channel),alphaMapUv:ft&&E(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Rt||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Ht,vertexUv2s:kt,vertexUv3s:ye,pointsUvs:tt.isPoints===!0&&!!Y.attributes.uv&&(Ft||ft),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&Ee.getTransfer(S.map.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xt&&S.extensions.derivatives===!0,extensionFragDepth:xt&&S.extensions.fragDepth===!0,extensionDrawBuffers:xt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)L.push(X),L.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(y(L,S),M(L,S),L.push(o.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function y(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function M(S,L){r.disableAll(),L.isWebGL2&&r.enable(0),L.supportsVertexTextures&&r.enable(1),L.instancing&&r.enable(2),L.instancingColor&&r.enable(3),L.matcap&&r.enable(4),L.envMap&&r.enable(5),L.normalMapObjectSpace&&r.enable(6),L.normalMapTangentSpace&&r.enable(7),L.clearcoat&&r.enable(8),L.iridescence&&r.enable(9),L.alphaTest&&r.enable(10),L.vertexColors&&r.enable(11),L.vertexAlphas&&r.enable(12),L.vertexUv1s&&r.enable(13),L.vertexUv2s&&r.enable(14),L.vertexUv3s&&r.enable(15),L.vertexTangents&&r.enable(16),L.anisotropy&&r.enable(17),L.alphaHash&&r.enable(18),L.batching&&r.enable(19),S.push(r.mask),r.disableAll(),L.fog&&r.enable(0),L.useFog&&r.enable(1),L.flatShading&&r.enable(2),L.logarithmicDepthBuffer&&r.enable(3),L.skinning&&r.enable(4),L.morphTargets&&r.enable(5),L.morphNormals&&r.enable(6),L.morphColors&&r.enable(7),L.premultipliedAlpha&&r.enable(8),L.shadowMapEnabled&&r.enable(9),L.useLegacyLights&&r.enable(10),L.doubleSided&&r.enable(11),L.flipSided&&r.enable(12),L.useDepthPacking&&r.enable(13),L.dithering&&r.enable(14),L.transmission&&r.enable(15),L.sheen&&r.enable(16),L.opaque&&r.enable(17),L.pointsUvs&&r.enable(18),L.decodeVideoTexture&&r.enable(19),S.push(r.mask)}function b(S){const L=_[S.type];let X;if(L){const q=Zn[L];X=Yf.clone(q.uniforms)}else X=S.uniforms;return X}function D(S,L){let X;for(let q=0,tt=l.length;q<tt;q++){const F=l[q];if(F.cacheKey===L){X=F,++X.usedTimes;break}}return X===void 0&&(X=new r_(o,L,S,s),l.push(X)),X}function C(S){if(--S.usedTimes===0){const L=l.indexOf(S);l[L]=l[l.length-1],l.pop(),S.destroy()}}function R(S){c.remove(S)}function z(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:b,acquireProgram:D,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:z}}function d_(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function n(s,a,r){o.get(s)[a]=r}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function u_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Mh(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,m,g,_,E,f){let h=o[t];return h===void 0?(h={id:u.id,object:u,geometry:m,material:g,groupOrder:_,renderOrder:u.renderOrder,z:E,group:f},o[t]=h):(h.id=u.id,h.object=u,h.geometry=m,h.material=g,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=E,h.group=f),t++,h}function r(u,m,g,_,E,f){const h=a(u,m,g,_,E,f);g.transmission>0?n.push(h):g.transparent===!0?i.push(h):e.push(h)}function c(u,m,g,_,E,f){const h=a(u,m,g,_,E,f);g.transmission>0?n.unshift(h):g.transparent===!0?i.unshift(h):e.unshift(h)}function l(u,m){e.length>1&&e.sort(u||u_),n.length>1&&n.sort(m||yh),i.length>1&&i.sort(m||yh)}function d(){for(let u=t,m=o.length;u<m;u++){const g=o[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:d,sort:l}}function f_(){let o=new WeakMap;function t(n,i){const s=o.get(n);let a;return s===void 0?(a=new Mh,o.set(n,[a])):i>=s.length?(a=new Mh,s.push(a)):a=s[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function p_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new yt};break;case"SpotLight":e={position:new B,direction:new B,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new B,halfWidth:new B,halfHeight:new B};break}return o[t.id]=e,e}}}function m_(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let g_=0;function __(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v_(o,t){const e=new p_,n=m_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new B);const s=new B,a=new Ae,r=new Ae;function c(d,u){let m=0,g=0,_=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let E=0,f=0,h=0,y=0,M=0,b=0,D=0,C=0,R=0,z=0,S=0;d.sort(__);const L=u===!0?Math.PI:1;for(let q=0,tt=d.length;q<tt;q++){const F=d[q],Y=F.color,K=F.intensity,Q=F.distance,it=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=Y.r*K*L,g+=Y.g*K*L,_+=Y.b*K*L;else if(F.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(F.sh.coefficients[st],K);S++}else if(F.isDirectionalLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*L),F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.directionalShadow[E]=ut,i.directionalShadowMap[E]=it,i.directionalShadowMatrix[E]=F.shadow.matrix,b++}i.directional[E]=st,E++}else if(F.isSpotLight){const st=e.get(F);st.position.setFromMatrixPosition(F.matrixWorld),st.color.copy(Y).multiplyScalar(K*L),st.distance=Q,st.coneCos=Math.cos(F.angle),st.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),st.decay=F.decay,i.spot[h]=st;const ot=F.shadow;if(F.map&&(i.spotLightMap[R]=F.map,R++,ot.updateMatrices(F),F.castShadow&&z++),i.spotLightMatrix[h]=ot.matrix,F.castShadow){const ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,i.spotShadow[h]=ut,i.spotShadowMap[h]=it,C++}h++}else if(F.isRectAreaLight){const st=e.get(F);st.color.copy(Y).multiplyScalar(K),st.halfWidth.set(F.width*.5,0,0),st.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=st,y++}else if(F.isPointLight){const st=e.get(F);if(st.color.copy(F.color).multiplyScalar(F.intensity*L),st.distance=F.distance,st.decay=F.decay,F.castShadow){const ot=F.shadow,ut=n.get(F);ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,i.pointShadow[f]=ut,i.pointShadowMap[f]=it,i.pointShadowMatrix[f]=F.shadow.matrix,D++}i.point[f]=st,f++}else if(F.isHemisphereLight){const st=e.get(F);st.skyColor.copy(F.color).multiplyScalar(K*L),st.groundColor.copy(F.groundColor).multiplyScalar(K*L),i.hemi[M]=st,M++}}y>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const X=i.hash;(X.directionalLength!==E||X.pointLength!==f||X.spotLength!==h||X.rectAreaLength!==y||X.hemiLength!==M||X.numDirectionalShadows!==b||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==R||X.numLightProbes!==S)&&(i.directional.length=E,i.spot.length=h,i.rectArea.length=y,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+R-z,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=S,X.directionalLength=E,X.pointLength=f,X.spotLength=h,X.rectAreaLength=y,X.hemiLength=M,X.numDirectionalShadows=b,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=R,X.numLightProbes=S,i.version=g_++)}function l(d,u){let m=0,g=0,_=0,E=0,f=0;const h=u.matrixWorldInverse;for(let y=0,M=d.length;y<M;y++){const b=d[y];if(b.isDirectionalLight){const D=i.directional[m];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),m++}else if(b.isSpotLight){const D=i.spot[_];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),_++}else if(b.isRectAreaLight){const D=i.rectArea[E];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),r.identity(),a.copy(b.matrixWorld),a.premultiply(h),r.extractRotation(a),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(r),D.halfHeight.applyMatrix4(r),E++}else if(b.isPointLight){const D=i.point[g];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),g++}else if(b.isHemisphereLight){const D=i.hemi[f];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(h),f++}}}return{setup:c,setupView:l,state:i}}function Eh(o,t){const e=new v_(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function x_(o,t){let e=new WeakMap;function n(s,a=0){const r=e.get(s);let c;return r===void 0?(c=new Eh(o,t),e.set(s,[c])):a>=r.length?(c=new Eh(o,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class y_ extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M_ extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function S_(o,t,e){let n=new Zc;const i=new ee,s=new ee,a=new Ue,r=new y_({depthPacking:_f}),c=new M_,l={},d=e.maxTextureSize,u={[di]:ln,[ln]:di,[Jn]:Jn},m=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new te(_,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let h=this.type;this.render=function(C,R,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const S=o.getRenderTarget(),L=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),q=o.state;q.setBlending(Pi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const tt=h!==ri&&this.type===ri,F=h===ri&&this.type!==ri;for(let Y=0,K=C.length;Y<K;Y++){const Q=C[Y],it=Q.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);const st=it.getFrameExtents();if(i.multiply(st),s.copy(it.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/st.x),i.x=s.x*st.x,it.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/st.y),i.y=s.y*st.y,it.mapSize.y=s.y)),it.map===null||tt===!0||F===!0){const ut=this.type!==ri?{minFilter:ke,magFilter:ke}:{};it.map!==null&&it.map.dispose(),it.map=new is(i.x,i.y,ut),it.map.texture.name=Q.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const ot=it.getViewportCount();for(let ut=0;ut<ot;ut++){const pt=it.getViewport(ut);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),q.viewport(a),it.updateMatrices(Q,ut),n=it.getFrustum(),b(R,z,it.camera,Q,this.type)}it.isPointLightShadow!==!0&&this.type===ri&&y(it,z),it.needsUpdate=!1}h=this.type,f.needsUpdate=!1,o.setRenderTarget(S,L,X)};function y(C,R){const z=t.update(E);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new is(i.x,i.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(R,null,z,m,E,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(R,null,z,g,E,null)}function M(C,R,z,S){let L=null;const X=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(X!==void 0)L=X;else if(L=z.isPointLight===!0?c:r,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=L.uuid,tt=R.uuid;let F=l[q];F===void 0&&(F={},l[q]=F);let Y=F[tt];Y===void 0&&(Y=L.clone(),F[tt]=Y,R.addEventListener("dispose",D)),L=Y}if(L.visible=R.visible,L.wireframe=R.wireframe,S===ri?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:u[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,z.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const q=o.properties.get(L);q.light=z}return L}function b(C,R,z,S,L){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&L===ri)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const tt=t.update(C),F=C.material;if(Array.isArray(F)){const Y=tt.groups;for(let K=0,Q=Y.length;K<Q;K++){const it=Y[K],st=F[it.materialIndex];if(st&&st.visible){const ot=M(C,st,S,L);C.onBeforeShadow(o,C,R,z,tt,ot,it),o.renderBufferDirect(z,null,tt,ot,C,it),C.onAfterShadow(o,C,R,z,tt,ot,it)}}}else if(F.visible){const Y=M(C,F,S,L);C.onBeforeShadow(o,C,R,z,tt,Y,null),o.renderBufferDirect(z,null,tt,Y,C,null),C.onAfterShadow(o,C,R,z,tt,Y,null)}}const q=C.children;for(let tt=0,F=q.length;tt<F;tt++)b(q[tt],R,z,S,L)}function D(C){C.target.removeEventListener("dispose",D);for(const z in l){const S=l[z],L=C.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function w_(o,t,e){const n=e.isWebGL2;function i(){let k=!1;const Mt=new Ue;let xt=null;const Ht=new Ue(0,0,0,0);return{setMask:function(kt){xt!==kt&&!k&&(o.colorMask(kt,kt,kt,kt),xt=kt)},setLocked:function(kt){k=kt},setClear:function(kt,ye,Me,ge,Ke){Ke===!0&&(kt*=ge,ye*=ge,Me*=ge),Mt.set(kt,ye,Me,ge),Ht.equals(Mt)===!1&&(o.clearColor(kt,ye,Me,ge),Ht.copy(Mt))},reset:function(){k=!1,xt=null,Ht.set(-1,0,0,0)}}}function s(){let k=!1,Mt=null,xt=null,Ht=null;return{setTest:function(kt){kt?jt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(kt){Mt!==kt&&!k&&(o.depthMask(kt),Mt=kt)},setFunc:function(kt){if(xt!==kt){switch(kt){case Xu:o.depthFunc(o.NEVER);break;case Yu:o.depthFunc(o.ALWAYS);break;case qu:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case ju:o.depthFunc(o.EQUAL);break;case $u:o.depthFunc(o.GEQUAL);break;case Zu:o.depthFunc(o.GREATER);break;case Ku:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=kt}},setLocked:function(kt){k=kt},setClear:function(kt){Ht!==kt&&(o.clearDepth(kt),Ht=kt)},reset:function(){k=!1,Mt=null,xt=null,Ht=null}}}function a(){let k=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,ge=null,Ke=null;return{setTest:function(ue){k||(ue?jt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(ue){Mt!==ue&&!k&&(o.stencilMask(ue),Mt=ue)},setFunc:function(ue,qe,dn){(xt!==ue||Ht!==qe||kt!==dn)&&(o.stencilFunc(ue,qe,dn),xt=ue,Ht=qe,kt=dn)},setOp:function(ue,qe,dn){(ye!==ue||Me!==qe||ge!==dn)&&(o.stencilOp(ue,qe,dn),ye=ue,Me=qe,ge=dn)},setLocked:function(ue){k=ue},setClear:function(ue){Ke!==ue&&(o.clearStencil(ue),Ke=ue)},reset:function(){k=!1,Mt=null,xt=null,Ht=null,kt=null,ye=null,Me=null,ge=null,Ke=null}}}const r=new i,c=new s,l=new a,d=new WeakMap,u=new WeakMap;let m={},g={},_=new WeakMap,E=[],f=null,h=!1,y=null,M=null,b=null,D=null,C=null,R=null,z=null,S=new yt(0,0,0),L=0,X=!1,q=null,tt=null,F=null,Y=null,K=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,st=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(ot)[1]),it=st>=1):ot.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),it=st>=2);let ut=null,pt={};const J=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Et=new Ue().fromArray(J),Ct=new Ue().fromArray(at);function Ot(k,Mt,xt,Ht){const kt=new Uint8Array(4),ye=o.createTexture();o.bindTexture(k,ye),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Me=0;Me<xt;Me++)n&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(Mt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,kt):o.texImage2D(Mt+Me,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,kt);return ye}const qt={};qt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),qt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(qt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),qt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),jt(o.DEPTH_TEST),c.setFunc(Ir),Zt(!1),O(sl),jt(o.CULL_FACE),Rt(Pi);function jt(k){m[k]!==!0&&(o.enable(k),m[k]=!0)}function Ft(k){m[k]!==!1&&(o.disable(k),m[k]=!1)}function de(k,Mt){return g[k]!==Mt?(o.bindFramebuffer(k,Mt),g[k]=Mt,n&&(k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Mt),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function $(k,Mt){let xt=E,Ht=!1;if(k)if(xt=_.get(Mt),xt===void 0&&(xt=[],_.set(Mt,xt)),k.isWebGLMultipleRenderTargets){const kt=k.texture;if(xt.length!==kt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,Me=kt.length;ye<Me;ye++)xt[ye]=o.COLOR_ATTACHMENT0+ye;xt.length=kt.length,Ht=!0}}else xt[0]!==o.COLOR_ATTACHMENT0&&(xt[0]=o.COLOR_ATTACHMENT0,Ht=!0);else xt[0]!==o.BACK&&(xt[0]=o.BACK,Ht=!0);Ht&&(e.isWebGL2?o.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function _e(k){return f!==k?(o.useProgram(k),f=k,!0):!1}const Bt={[$i]:o.FUNC_ADD,[Pu]:o.FUNC_SUBTRACT,[Lu]:o.FUNC_REVERSE_SUBTRACT};if(n)Bt[cl]=o.MIN,Bt[ll]=o.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(Bt[cl]=k.MIN_EXT,Bt[ll]=k.MAX_EXT)}const Xt={[Iu]:o.ZERO,[Du]:o.ONE,[Ou]:o.SRC_COLOR,[xc]:o.SRC_ALPHA,[zu]:o.SRC_ALPHA_SATURATE,[ku]:o.DST_COLOR,[Uu]:o.DST_ALPHA,[Nu]:o.ONE_MINUS_SRC_COLOR,[yc]:o.ONE_MINUS_SRC_ALPHA,[Fu]:o.ONE_MINUS_DST_COLOR,[Bu]:o.ONE_MINUS_DST_ALPHA,[Hu]:o.CONSTANT_COLOR,[Gu]:o.ONE_MINUS_CONSTANT_COLOR,[Vu]:o.CONSTANT_ALPHA,[Wu]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(k,Mt,xt,Ht,kt,ye,Me,ge,Ke,ue){if(k===Pi){h===!0&&(Ft(o.BLEND),h=!1);return}if(h===!1&&(jt(o.BLEND),h=!0),k!==Ru){if(k!==y||ue!==X){if((M!==$i||C!==$i)&&(o.blendEquation(o.FUNC_ADD),M=$i,C=$i),ue)switch(k){case Bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ol:o.blendFunc(o.ONE,o.ONE);break;case rl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case al:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ol:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case al:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,D=null,R=null,z=null,S.set(0,0,0),L=0,y=k,X=ue}return}kt=kt||Mt,ye=ye||xt,Me=Me||Ht,(Mt!==M||kt!==C)&&(o.blendEquationSeparate(Bt[Mt],Bt[kt]),M=Mt,C=kt),(xt!==b||Ht!==D||ye!==R||Me!==z)&&(o.blendFuncSeparate(Xt[xt],Xt[Ht],Xt[ye],Xt[Me]),b=xt,D=Ht,R=ye,z=Me),(ge.equals(S)===!1||Ke!==L)&&(o.blendColor(ge.r,ge.g,ge.b,Ke),S.copy(ge),L=Ke),y=k,X=!1}function xe(k,Mt){k.side===Jn?Ft(o.CULL_FACE):jt(o.CULL_FACE);let xt=k.side===ln;Mt&&(xt=!xt),Zt(xt),k.blending===Bs&&k.transparent===!1?Rt(Pi):Rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ht=k.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?jt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(k){q!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),q=k)}function O(k){k!==Au?(jt(o.CULL_FACE),k!==tt&&(k===sl?o.cullFace(o.BACK):k===Tu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),tt=k}function T(k){k!==F&&(it&&o.lineWidth(k),F=k)}function j(k,Mt,xt){k?(jt(o.POLYGON_OFFSET_FILL),(Y!==Mt||K!==xt)&&(o.polygonOffset(Mt,xt),Y=Mt,K=xt)):Ft(o.POLYGON_OFFSET_FILL)}function ht(k){k?jt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function lt(k){k===void 0&&(k=o.TEXTURE0+Q-1),ut!==k&&(o.activeTexture(k),ut=k)}function dt(k,Mt,xt){xt===void 0&&(ut===null?xt=o.TEXTURE0+Q-1:xt=ut);let Ht=pt[xt];Ht===void 0&&(Ht={type:void 0,texture:void 0},pt[xt]=Ht),(Ht.type!==k||Ht.texture!==Mt)&&(ut!==xt&&(o.activeTexture(xt),ut=xt),o.bindTexture(k,Mt||qt[k]),Ht.type=k,Ht.texture=Mt)}function Lt(){const k=pt[ut];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(k){Et.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Et.copy(k))}function fe(k){Ct.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function Re(k,Mt){let xt=u.get(Mt);xt===void 0&&(xt=new WeakMap,u.set(Mt,xt));let Ht=xt.get(k);Ht===void 0&&(Ht=o.getUniformBlockIndex(Mt,k.name),xt.set(k,Ht))}function Jt(k,Mt){const Ht=u.get(Mt).get(k);d.get(Mt)!==Ht&&(o.uniformBlockBinding(Mt,Ht,k.__bindingPointIndex),d.set(Mt,Ht))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ut=null,pt={},g={},_=new WeakMap,E=[],f=null,h=!1,y=null,M=null,b=null,D=null,C=null,R=null,z=null,S=new yt(0,0,0),L=0,X=!1,q=null,tt=null,F=null,Y=null,K=null,Et.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:jt,disable:Ft,bindFramebuffer:de,drawBuffers:$,useProgram:_e,setBlending:Rt,setMaterial:xe,setFlipSided:Zt,setCullFace:O,setLineWidth:T,setPolygonOffset:j,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Lt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:Pt,texImage3D:wt,updateUBOMapping:Re,uniformBlockBinding:Jt,texStorage2D:ne,texStorage3D:Wt,texSubImage2D:zt,texSubImage3D:$t,compressedTexSubImage2D:rt,compressedTexSubImage3D:ve,scissor:Kt,viewport:fe,reset:ft}}function A_(o,t,e,n,i,s,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,T){return g?new OffscreenCanvas(O,T):Br("canvas")}function E(O,T,j,ht){let lt=1;if((O.width>ht||O.height>ht)&&(lt=ht/Math.max(O.width,O.height)),lt<1||T===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const dt=T?Cc:Math.floor,Lt=dt(lt*O.width),vt=dt(lt*O.height);u===void 0&&(u=_(Lt,vt));const St=j?_(Lt,vt):u;return St.width=Lt,St.height=vt,St.getContext("2d").drawImage(O,0,0,Lt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Lt+"x"+vt+")."),St}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function f(O){return kl(O.width)&&kl(O.height)}function h(O){return r?!1:O.wrapS!==wn||O.wrapT!==wn||O.minFilter!==ke&&O.minFilter!==Pn}function y(O,T){return O.generateMipmaps&&T&&O.minFilter!==ke&&O.minFilter!==Pn}function M(O){o.generateMipmap(O)}function b(O,T,j,ht,lt=!1){if(r===!1)return T;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=T;if(T===o.RED&&(j===o.FLOAT&&(dt=o.R32F),j===o.HALF_FLOAT&&(dt=o.R16F),j===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(dt=o.R8UI),j===o.UNSIGNED_SHORT&&(dt=o.R16UI),j===o.UNSIGNED_INT&&(dt=o.R32UI),j===o.BYTE&&(dt=o.R8I),j===o.SHORT&&(dt=o.R16I),j===o.INT&&(dt=o.R32I)),T===o.RG&&(j===o.FLOAT&&(dt=o.RG32F),j===o.HALF_FLOAT&&(dt=o.RG16F),j===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RGBA){const Lt=lt?Dr:Ee.getTransfer(ht);j===o.FLOAT&&(dt=o.RGBA32F),j===o.HALF_FLOAT&&(dt=o.RGBA16F),j===o.UNSIGNED_BYTE&&(dt=Lt===Le?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(O,T,j){return y(O,j)===!0||O.isFramebufferTexture&&O.minFilter!==ke&&O.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function C(O){return O===ke||O===hl||O===ua?o.NEAREST:o.LINEAR}function R(O){const T=O.target;T.removeEventListener("dispose",R),S(T),T.isVideoTexture&&d.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),X(T)}function S(O){const T=n.get(O);if(T.__webglInit===void 0)return;const j=O.source,ht=m.get(j);if(ht){const lt=ht[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&L(O),Object.keys(ht).length===0&&m.delete(j)}n.remove(O)}function L(O){const T=n.get(O);o.deleteTexture(T.__webglTexture);const j=O.source,ht=m.get(j);delete ht[T.__cacheKey],a.memory.textures--}function X(O){const T=O.texture,j=n.get(O),ht=n.get(T);if(ht.__webglTexture!==void 0&&(o.deleteTexture(ht.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(j.__webglFramebuffer[lt]))for(let dt=0;dt<j.__webglFramebuffer[lt].length;dt++)o.deleteFramebuffer(j.__webglFramebuffer[lt][dt]);else o.deleteFramebuffer(j.__webglFramebuffer[lt]);j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[lt])}else{if(Array.isArray(j.__webglFramebuffer))for(let lt=0;lt<j.__webglFramebuffer.length;lt++)o.deleteFramebuffer(j.__webglFramebuffer[lt]);else o.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let lt=0;lt<j.__webglColorRenderbuffer.length;lt++)j.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[lt]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let lt=0,dt=T.length;lt<dt;lt++){const Lt=n.get(T[lt]);Lt.__webglTexture&&(o.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(T[lt])}n.remove(T),n.remove(O)}let q=0;function tt(){q=0}function F(){const O=q;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),q+=1,O}function Y(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function K(O,T){const j=n.get(O);if(O.isVideoTexture&&xe(O),O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(j,O,T);return}}e.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function Q(O,T){const j=n.get(O);if(O.version>0&&j.__version!==O.version){Et(j,O,T);return}e.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function it(O,T){const j=n.get(O);if(O.version>0&&j.__version!==O.version){Et(j,O,T);return}e.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function st(O,T){const j=n.get(O);if(O.version>0&&j.__version!==O.version){Ct(j,O,T);return}e.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const ot={[bc]:o.REPEAT,[wn]:o.CLAMP_TO_EDGE,[Sc]:o.MIRRORED_REPEAT},ut={[ke]:o.NEAREST,[hl]:o.NEAREST_MIPMAP_NEAREST,[ua]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[af]:o.LINEAR_MIPMAP_NEAREST,[Mo]:o.LINEAR_MIPMAP_LINEAR},pt={[xf]:o.NEVER,[wf]:o.ALWAYS,[yf]:o.LESS,[Od]:o.LEQUAL,[Mf]:o.EQUAL,[Sf]:o.GEQUAL,[Ef]:o.GREATER,[bf]:o.NOTEQUAL};function J(O,T,j){if(j?(o.texParameteri(O,o.TEXTURE_WRAP_S,ot[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ot[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ot[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,ut[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,ut[T.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==wn||T.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,C(T.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==ke&&T.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===ke||T.minFilter!==ua&&T.minFilter!==Mo||T.type===Ri&&t.has("OES_texture_float_linear")===!1||r===!1&&T.type===Eo&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(o.texParameterf(O,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function at(O,T){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",R));const ht=T.source;let lt=m.get(ht);lt===void 0&&(lt={},m.set(ht,lt));const dt=Y(T);if(dt!==O.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,j=!0),lt[dt].usedTimes++;const Lt=lt[O.__cacheKey];Lt!==void 0&&(lt[O.__cacheKey].usedTimes--,Lt.usedTimes===0&&L(T)),O.__cacheKey=dt,O.__webglTexture=lt[dt].texture}return j}function Et(O,T,j){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const lt=at(O,T),dt=T.source;e.bindTexture(ht,O.__webglTexture,o.TEXTURE0+j);const Lt=n.get(dt);if(dt.version!==Lt.__version||lt===!0){e.activeTexture(o.TEXTURE0+j);const vt=Ee.getPrimaries(Ee.workingColorSpace),St=T.colorSpace===Ln?null:Ee.getPrimaries(T.colorSpace),zt=T.colorSpace===Ln||vt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const $t=h(T)&&f(T.image)===!1;let rt=E(T.image,$t,!1,i.maxTextureSize);rt=Zt(T,rt);const ve=f(rt)||r,ne=s.convert(T.format,T.colorSpace);let Wt=s.convert(T.type),Pt=b(T.internalFormat,ne,Wt,T.colorSpace,T.isVideoTexture);J(ht,T,ve);let wt;const Kt=T.mipmaps,fe=r&&T.isVideoTexture!==!0&&Pt!==Ld,Re=Lt.__version===void 0||lt===!0,Jt=D(T,rt,ve);if(T.isDepthTexture)Pt=o.DEPTH_COMPONENT,r?T.type===Ri?Pt=o.DEPTH_COMPONENT32F:T.type===Ci?Pt=o.DEPTH_COMPONENT24:T.type===ts?Pt=o.DEPTH24_STENCIL8:Pt=o.DEPTH_COMPONENT16:T.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===es&&Pt===o.DEPTH_COMPONENT&&T.type!==qc&&T.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ci,Wt=s.convert(T.type)),T.format===Gs&&Pt===o.DEPTH_COMPONENT&&(Pt=o.DEPTH_STENCIL,T.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ts,Wt=s.convert(T.type))),Re&&(fe?e.texStorage2D(o.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(o.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ne,Wt,null));else if(T.isDataTexture)if(Kt.length>0&&ve){fe&&Re&&e.texStorage2D(o.TEXTURE_2D,Jt,Pt,Kt[0].width,Kt[0].height);for(let ft=0,k=Kt.length;ft<k;ft++)wt=Kt[ft],fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,Wt,wt.data):e.texImage2D(o.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,ne,Wt,wt.data);T.generateMipmaps=!1}else fe?(Re&&e.texStorage2D(o.TEXTURE_2D,Jt,Pt,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,rt.width,rt.height,ne,Wt,rt.data)):e.texImage2D(o.TEXTURE_2D,0,Pt,rt.width,rt.height,0,ne,Wt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&Re&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Jt,Pt,Kt[0].width,Kt[0].height,rt.depth);for(let ft=0,k=Kt.length;ft<k;ft++)wt=Kt[ft],T.format!==Wn?ne!==null?fe?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,rt.depth,ne,wt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,rt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,rt.depth,ne,Wt,wt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,rt.depth,0,ne,Wt,wt.data)}else{fe&&Re&&e.texStorage2D(o.TEXTURE_2D,Jt,Pt,Kt[0].width,Kt[0].height);for(let ft=0,k=Kt.length;ft<k;ft++)wt=Kt[ft],T.format!==Wn?ne!==null?fe?e.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,wt.data):e.compressedTexImage2D(o.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,wt.width,wt.height,ne,Wt,wt.data):e.texImage2D(o.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,ne,Wt,wt.data)}else if(T.isDataArrayTexture)fe?(Re&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Jt,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ne,Wt,rt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,ne,Wt,rt.data);else if(T.isData3DTexture)fe?(Re&&e.texStorage3D(o.TEXTURE_3D,Jt,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ne,Wt,rt.data)):e.texImage3D(o.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,ne,Wt,rt.data);else if(T.isFramebufferTexture){if(Re)if(fe)e.texStorage2D(o.TEXTURE_2D,Jt,Pt,rt.width,rt.height);else{let ft=rt.width,k=rt.height;for(let Mt=0;Mt<Jt;Mt++)e.texImage2D(o.TEXTURE_2D,Mt,Pt,ft,k,0,ne,Wt,null),ft>>=1,k>>=1}}else if(Kt.length>0&&ve){fe&&Re&&e.texStorage2D(o.TEXTURE_2D,Jt,Pt,Kt[0].width,Kt[0].height);for(let ft=0,k=Kt.length;ft<k;ft++)wt=Kt[ft],fe?e.texSubImage2D(o.TEXTURE_2D,ft,0,0,ne,Wt,wt):e.texImage2D(o.TEXTURE_2D,ft,Pt,ne,Wt,wt);T.generateMipmaps=!1}else fe?(Re&&e.texStorage2D(o.TEXTURE_2D,Jt,Pt,rt.width,rt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,ne,Wt,rt)):e.texImage2D(o.TEXTURE_2D,0,Pt,ne,Wt,rt);y(T,ve)&&M(ht),Lt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ct(O,T,j){if(T.image.length!==6)return;const ht=at(O,T),lt=T.source;e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+j);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(o.TEXTURE0+j);const Lt=Ee.getPrimaries(Ee.workingColorSpace),vt=T.colorSpace===Ln?null:Ee.getPrimaries(T.colorSpace),St=T.colorSpace===Ln||Lt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,$t=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!zt&&!$t?rt[ft]=E(T.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=$t?T.image[ft].image:T.image[ft],rt[ft]=Zt(T,rt[ft]);const ve=rt[0],ne=f(ve)||r,Wt=s.convert(T.format,T.colorSpace),Pt=s.convert(T.type),wt=b(T.internalFormat,Wt,Pt,T.colorSpace),Kt=r&&T.isVideoTexture!==!0,fe=dt.__version===void 0||ht===!0;let Re=D(T,ve,ne);J(o.TEXTURE_CUBE_MAP,T,ne);let Jt;if(zt){Kt&&fe&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Re,wt,ve.width,ve.height);for(let ft=0;ft<6;ft++){Jt=rt[ft].mipmaps;for(let k=0;k<Jt.length;k++){const Mt=Jt[k];T.format!==Wn?Wt!==null?Kt?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,0,0,Mt.width,Mt.height,Wt,Mt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,0,0,Mt.width,Mt.height,Wt,Pt,Mt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k,wt,Mt.width,Mt.height,0,Wt,Pt,Mt.data)}}}else{Jt=T.mipmaps,Kt&&fe&&(Jt.length>0&&Re++,e.texStorage2D(o.TEXTURE_CUBE_MAP,Re,wt,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if($t){Kt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Wt,Pt,rt[ft].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,rt[ft].width,rt[ft].height,0,Wt,Pt,rt[ft].data);for(let k=0;k<Jt.length;k++){const xt=Jt[k].image[ft].image;Kt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,0,0,xt.width,xt.height,Wt,Pt,xt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,wt,xt.width,xt.height,0,Wt,Pt,xt.data)}}else{Kt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Wt,Pt,rt[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,Wt,Pt,rt[ft]);for(let k=0;k<Jt.length;k++){const Mt=Jt[k];Kt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,0,0,Wt,Pt,Mt.image[ft]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,k+1,wt,Wt,Pt,Mt.image[ft])}}}y(T,ne)&&M(o.TEXTURE_CUBE_MAP),dt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ot(O,T,j,ht,lt,dt){const Lt=s.convert(j.format,j.colorSpace),vt=s.convert(j.type),St=b(j.internalFormat,Lt,vt,j.colorSpace);if(!n.get(T).__hasExternalTextures){const $t=Math.max(1,T.width>>dt),rt=Math.max(1,T.height>>dt);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,St,$t,rt,T.depth,0,Lt,vt,null):e.texImage2D(lt,dt,St,$t,rt,0,Lt,vt,null)}e.bindFramebuffer(o.FRAMEBUFFER,O),Rt(T)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,0,Xt(T)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,lt,n.get(j).__webglTexture,dt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(O,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer&&!T.stencilBuffer){let ht=r===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(j||Rt(T)){const lt=T.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Ri?ht=o.DEPTH_COMPONENT32F:lt.type===Ci&&(ht=o.DEPTH_COMPONENT24));const dt=Xt(T);Rt(T)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,ht,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,ht,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(T.depthBuffer&&T.stencilBuffer){const ht=Xt(T);j&&Rt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,T.width,T.height):Rt(T)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const ht=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Lt=s.convert(dt.format,dt.colorSpace),vt=s.convert(dt.type),St=b(dt.internalFormat,Lt,vt,dt.colorSpace),zt=Xt(T);j&&Rt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,St,T.width,T.height):Rt(T)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt,St,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,St,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function jt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const ht=n.get(T.depthTexture).__webglTexture,lt=Xt(T);if(T.depthTexture.format===es)Rt(T)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Gs)Rt(T)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ft(O){const T=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");jt(T.__webglFramebuffer,O)}else if(j){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]=o.createRenderbuffer(),qt(T.__webglDepthbuffer[ht],O,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),qt(T.__webglDepthbuffer,O,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function de(O,T,j){const ht=n.get(O);T!==void 0&&Ot(ht.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Ft(O)}function $(O){const T=O.texture,j=n.get(O),ht=n.get(T);O.addEventListener("dispose",z),O.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,a.memory.textures++);const lt=O.isWebGLCubeRenderTarget===!0,dt=O.isWebGLMultipleRenderTargets===!0,Lt=f(O)||r;if(lt){j.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(r&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[vt]=[];for(let St=0;St<T.mipmaps.length;St++)j.__webglFramebuffer[vt][St]=o.createFramebuffer()}else j.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(r&&T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)j.__webglFramebuffer[vt]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(dt)if(i.drawBuffers){const vt=O.texture;for(let St=0,zt=vt.length;St<zt;St++){const $t=n.get(vt[St]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&O.samples>0&&Rt(O)===!1){const vt=dt?T:[T];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){const zt=vt[St];j.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[St]);const $t=s.convert(zt.format,zt.colorSpace),rt=s.convert(zt.type),ve=b(zt.internalFormat,$t,rt,zt.colorSpace,O.isXRRenderTarget===!0),ne=Xt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,ve,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,j.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),qt(j.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){e.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),J(o.TEXTURE_CUBE_MAP,T,Lt);for(let vt=0;vt<6;vt++)if(r&&T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Ot(j.__webglFramebuffer[vt][St],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else Ot(j.__webglFramebuffer[vt],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(T,Lt)&&M(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=O.texture;for(let St=0,zt=vt.length;St<zt;St++){const $t=vt[St],rt=n.get($t);e.bindTexture(o.TEXTURE_2D,rt.__webglTexture),J(o.TEXTURE_2D,$t,Lt),Ot(j.__webglFramebuffer,O,$t,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,0),y($t,Lt)&&M(o.TEXTURE_2D)}e.unbindTexture()}else{let vt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(r?vt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),J(vt,T,Lt),r&&T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)Ot(j.__webglFramebuffer[St],O,T,o.COLOR_ATTACHMENT0,vt,St);else Ot(j.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,vt,0);y(T,Lt)&&M(vt),e.unbindTexture()}O.depthBuffer&&Ft(O)}function _e(O){const T=f(O)||r,j=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ht=0,lt=j.length;ht<lt;ht++){const dt=j[ht];if(y(dt,T)){const Lt=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,vt=n.get(dt).__webglTexture;e.bindTexture(Lt,vt),M(Lt),e.unbindTexture()}}}function Bt(O){if(r&&O.samples>0&&Rt(O)===!1){const T=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],j=O.width,ht=O.height;let lt=o.COLOR_BUFFER_BIT;const dt=[],Lt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=n.get(O),St=O.isWebGLMultipleRenderTargets===!0;if(St)for(let zt=0;zt<T.length;zt++)e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){dt.push(o.COLOR_ATTACHMENT0+zt),O.depthBuffer&&dt.push(Lt);const $t=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if($t===!1&&(O.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(lt|=o.STENCIL_BUFFER_BIT)),St&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]),$t===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Lt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Lt])),St){const rt=n.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,j,ht,0,0,j,ht,lt,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let zt=0;zt<T.length;zt++){e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]);const $t=n.get(T[zt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,$t,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Xt(O){return Math.min(i.maxSamples,O.samples)}function Rt(O){const T=n.get(O);return r&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(O){const T=a.render.frame;d.get(O)!==T&&(d.set(O,T),O.update())}function Zt(O,T){const j=O.colorSpace,ht=O.format,lt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Ac||j!==ui&&j!==Ln&&(Ee.getTransfer(j)===Le?r===!1?t.has("EXT_sRGB")===!0&&ht===Wn?(O.format=Ac,O.minFilter=Pn,O.generateMipmaps=!1):T=Ud.sRGBToLinear(T):(ht!==Wn||lt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=de,this.setupRenderTarget=$,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Rt}function T_(o,t,e){const n=e.isWebGL2;function i(s,a=Ln){let r;const c=Ee.getTransfer(a);if(s===Li)return o.UNSIGNED_BYTE;if(s===Ad)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Td)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cf)return o.BYTE;if(s===lf)return o.SHORT;if(s===qc)return o.UNSIGNED_SHORT;if(s===wd)return o.INT;if(s===Ci)return o.UNSIGNED_INT;if(s===Ri)return o.FLOAT;if(s===Eo)return n?o.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===hf)return o.ALPHA;if(s===Wn)return o.RGBA;if(s===df)return o.LUMINANCE;if(s===uf)return o.LUMINANCE_ALPHA;if(s===es)return o.DEPTH_COMPONENT;if(s===Gs)return o.DEPTH_STENCIL;if(s===Ac)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===ff)return o.RED;if(s===Cd)return o.RED_INTEGER;if(s===pf)return o.RG;if(s===Rd)return o.RG_INTEGER;if(s===Pd)return o.RGBA_INTEGER;if(s===fa||s===pa||s===ma||s===ga)if(c===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dl||s===ul||s===fl||s===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ml||s===gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===ml)return c===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===gl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_l||s===vl||s===xl||s===yl||s===Ml||s===El||s===bl||s===Sl||s===wl||s===Al||s===Tl||s===Cl||s===Rl||s===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===_l)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ml)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===El)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Al)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pl)return c===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_a||s===Ll||s===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===_a)return c===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mf||s===Dl||s===Ol||s===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ts?n?o.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class C_ extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const E of t.hand.values()){const f=e.getJointPose(E,n),h=this._getHandJoint(l,E);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],m=d.position.distanceTo(u.position),g=.02,_=.005;l.inputState.pinching&&m>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class P_ extends js{constructor(t,e){super();const n=this;let i=null,s=1,a=null,r="local-floor",c=1,l=null,d=null,u=null,m=null,g=null,_=null;const E=e.getContextAttributes();let f=null,h=null;const y=[],M=[],b=new ee;let D=null;const C=new Sn;C.layers.enable(1),C.viewport=new Ue;const R=new Sn;R.layers.enable(2),R.viewport=new Ue;const z=[C,R],S=new C_;S.layers.enable(1),S.layers.enable(2);let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=y[J];return at===void 0&&(at=new Ha,y[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=y[J];return at===void 0&&(at=new Ha,y[J]=at),at.getGripSpace()},this.getHand=function(J){let at=y[J];return at===void 0&&(at=new Ha,y[J]=at),at.getHandSpace()};function q(J){const at=M.indexOf(J.inputSource);if(at===-1)return;const Et=y[at];Et!==void 0&&(Et.update(J.inputSource,J.frame,l||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function tt(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",F);for(let J=0;J<y.length;J++){const at=M[J];at!==null&&(M[J]=null,y[J].disconnect(at))}L=null,X=null,t.setRenderTarget(f),g=null,m=null,u=null,i=null,h=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",F),E.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),h=new is(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil})}else{let at=null,Et=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=E.stencil?Gs:es,Et=E.stencil?ts:Ci);const Ot={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};u=new XRWebGLBinding(i,e),m=u.createProjectionLayer(Ot),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),h=new is(m.textureWidth,m.textureHeight,{format:Wn,type:Li,depthTexture:new qd(m.textureWidth,m.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0});const qt=t.properties.get(h);qt.__ignoreDepthValues=m.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(J){for(let at=0;at<J.removed.length;at++){const Et=J.removed[at],Ct=M.indexOf(Et);Ct>=0&&(M[Ct]=null,y[Ct].disconnect(Et))}for(let at=0;at<J.added.length;at++){const Et=J.added[at];let Ct=M.indexOf(Et);if(Ct===-1){for(let qt=0;qt<y.length;qt++)if(qt>=M.length){M.push(Et),Ct=qt;break}else if(M[qt]===null){M[qt]=Et,Ct=qt;break}if(Ct===-1)break}const Ot=y[Ct];Ot&&Ot.connect(Et)}}const Y=new B,K=new B;function Q(J,at,Et){Y.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const Ct=Y.distanceTo(K),Ot=at.projectionMatrix.elements,qt=Et.projectionMatrix.elements,jt=Ot[14]/(Ot[10]-1),Ft=Ot[14]/(Ot[10]+1),de=(Ot[9]+1)/Ot[5],$=(Ot[9]-1)/Ot[5],_e=(Ot[8]-1)/Ot[0],Bt=(qt[8]+1)/qt[0],Xt=jt*_e,Rt=jt*Bt,xe=Ct/(-_e+Bt),Zt=xe*-_e;at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Zt),J.translateZ(xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const O=jt+xe,T=Ft+xe,j=Xt-Zt,ht=Rt+(Ct-Zt),lt=de*Ft/T*O,dt=$*Ft/T*O;J.projectionMatrix.makePerspective(j,ht,lt,dt,O,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function it(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;S.near=R.near=C.near=J.near,S.far=R.far=C.far=J.far,(L!==S.near||X!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,X=S.far);const at=J.parent,Et=S.cameras;it(S,at);for(let Ct=0;Ct<Et.length;Ct++)it(Et[Ct],at);Et.length===2?Q(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),st(J,S,at)};function st(J,at,Et){Et===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Tc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(J){c=J,m!==null&&(m.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)};let ot=null;function ut(J,at){if(d=at.getViewerPose(l||a),_=at,d!==null){const Et=d.views;g!==null&&(t.setRenderTargetFramebuffer(h,g.framebuffer),t.setRenderTarget(h));let Ct=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,Ct=!0);for(let Ot=0;Ot<Et.length;Ot++){const qt=Et[Ot];let jt=null;if(g!==null)jt=g.getViewport(qt);else{const de=u.getViewSubImage(m,qt);jt=de.viewport,Ot===0&&(t.setRenderTargetTextures(h,de.colorTexture,m.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(h))}let Ft=z[Ot];Ft===void 0&&(Ft=new Sn,Ft.layers.enable(Ot),Ft.viewport=new Ue,z[Ot]=Ft),Ft.matrix.fromArray(qt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(qt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(jt.x,jt.y,jt.width,jt.height),Ot===0&&(S.matrix.copy(Ft.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ct===!0&&S.cameras.push(Ft)}}for(let Et=0;Et<y.length;Et++){const Ct=M[Et],Ot=y[Et];Ct!==null&&Ot!==void 0&&Ot.update(Ct,at,l||a)}ot&&ot(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}const pt=new Xd;pt.setAnimationLoop(ut),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}}function L_(o,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Gd(o)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function i(f,h,y,M,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),u(f,h)):h.isMeshPhongMaterial?(s(f,h),d(f,h)):h.isMeshStandardMaterial?(s(f,h),m(f,h),h.isMeshPhysicalMaterial&&g(f,h,b)):h.isMeshMatcapMaterial?(s(f,h),_(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),E(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&r(f,h)):h.isPointsMaterial?c(f,h,y,M):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===ln&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===ln&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=t.get(h).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const M=o._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*M,e(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function r(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,y,M){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=M*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function m(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),t.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function g(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function E(f,h){const y=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(o,t,e,n){let i={},s={},a=[];const r=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,M){const b=M.program;n.uniformBlockBinding(y,b)}function l(y,M){let b=i[y.id];b===void 0&&(_(y),b=d(y),i[y.id]=b,y.addEventListener("dispose",f));const D=M.program;n.updateUBOMapping(y,D);const C=t.render.frame;s[y.id]!==C&&(m(y),s[y.id]=C)}function d(y){const M=u();y.__bindingPointIndex=M;const b=o.createBuffer(),D=y.__size,C=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,D,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,b),b}function u(){for(let y=0;y<r;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const M=i[y.id],b=y.uniforms,D=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let C=0,R=b.length;C<R;C++){const z=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,L=z.length;S<L;S++){const X=z[S];if(g(X,C,S,D)===!0){const q=X.__offset,tt=Array.isArray(X.value)?X.value:[X.value];let F=0;for(let Y=0;Y<tt.length;Y++){const K=tt[Y],Q=E(K);typeof K=="number"||typeof K=="boolean"?(X.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,q+F,X.__data)):K.isMatrix3?(X.__data[0]=K.elements[0],X.__data[1]=K.elements[1],X.__data[2]=K.elements[2],X.__data[3]=0,X.__data[4]=K.elements[3],X.__data[5]=K.elements[4],X.__data[6]=K.elements[5],X.__data[7]=0,X.__data[8]=K.elements[6],X.__data[9]=K.elements[7],X.__data[10]=K.elements[8],X.__data[11]=0):(K.toArray(X.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function g(y,M,b,D){const C=y.value,R=M+"_"+b;if(D[R]===void 0)return typeof C=="number"||typeof C=="boolean"?D[R]=C:D[R]=C.clone(),!0;{const z=D[R];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return D[R]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(y){const M=y.uniforms;let b=0;const D=16;for(let R=0,z=M.length;R<z;R++){const S=Array.isArray(M[R])?M[R]:[M[R]];for(let L=0,X=S.length;L<X;L++){const q=S[L],tt=Array.isArray(q.value)?q.value:[q.value];for(let F=0,Y=tt.length;F<Y;F++){const K=tt[F],Q=E(K),it=b%D;it!==0&&D-it<Q.boundary&&(b+=D-it),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=Q.storage}}}const C=b%D;return C>0&&(b+=D-C),y.__size=b,y.__cache={},this}function E(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function f(y){const M=y.target;M.removeEventListener("dispose",f);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function h(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:h}}class Qd{constructor(t={}){const{canvas:e=Cf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),_=new Int32Array(4);let E=null,f=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const M=this;let b=!1,D=0,C=0,R=null,z=-1,S=null;const L=new Ue,X=new Ue;let q=null;const tt=new yt(0);let F=0,Y=e.width,K=e.height,Q=1,it=null,st=null;const ot=new Ue(0,0,Y,K),ut=new Ue(0,0,Y,K);let pt=!1;const J=new Zc;let at=!1,Et=!1,Ct=null;const Ot=new Ae,qt=new ee,jt=new B,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return R===null?Q:1}let $=n;function _e(A,U){for(let W=0;W<A.length;W++){const H=A[W],V=e.getContext(H,U);if(V!==null)return V}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),$===null){const U=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&U.shift(),$=_e(U,A),$===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Bt,Xt,Rt,xe,Zt,O,T,j,ht,lt,dt,Lt,vt,St,zt,$t,rt,ve,ne,Wt,Pt,wt,Kt,fe;function Re(){Bt=new G0($),Xt=new U0($,Bt,t),Bt.init(Xt),wt=new T_($,Bt,Xt),Rt=new w_($,Bt,Xt),xe=new X0($),Zt=new d_,O=new A_($,Bt,Rt,Zt,Xt,wt,xe),T=new k0(M),j=new H0(M),ht=new Qf($,Xt),Kt=new O0($,Bt,ht,Xt),lt=new V0($,ht,xe,Kt),dt=new $0($,lt,ht,xe),ne=new j0($,Xt,O),$t=new B0(Zt),Lt=new h_(M,T,j,Bt,Xt,Kt,$t),vt=new L_(M,Zt),St=new f_,zt=new x_(Bt,Xt),ve=new D0(M,T,j,Rt,dt,m,c),rt=new S_(M,dt,Xt),fe=new I_($,xe,Xt,Rt),Wt=new N0($,Bt,xe,Xt),Pt=new W0($,Bt,xe,Xt),xe.programs=Lt.programs,M.capabilities=Xt,M.extensions=Bt,M.properties=Zt,M.renderLists=St,M.shadowMap=rt,M.state=Rt,M.info=xe}Re();const Jt=new P_(M,$);this.xr=Jt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(Y,K,!1))},this.getSize=function(A){return A.set(Y,K)},this.setSize=function(A,U,W=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,K=U,e.width=Math.floor(A*Q),e.height=Math.floor(U*Q),W===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Y*Q,K*Q).floor()},this.setDrawingBufferSize=function(A,U,W){Y=A,K=U,Q=W,e.width=Math.floor(A*W),e.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,U,W,H){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,U,W,H),Rt.viewport(L.copy(ot).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,U,W,H){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,U,W,H),Rt.scissor(X.copy(ut).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){Rt.setScissorTest(pt=A)},this.setOpaqueSort=function(A){it=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,U=!0,W=!0){let H=0;if(A){let V=!1;if(R!==null){const nt=R.texture.format;V=nt===Pd||nt===Rd||nt===Cd}if(V){const nt=R.texture.type,ct=nt===Li||nt===Ci||nt===qc||nt===ts||nt===Ad||nt===Td,Z=ve.getClearColor(),mt=ve.getClearAlpha(),Ut=Z.r,bt=Z.g,gt=Z.b;ct?(g[0]=Ut,g[1]=bt,g[2]=gt,g[3]=mt,$.clearBufferuiv($.COLOR,0,g)):(_[0]=Ut,_[1]=bt,_[2]=gt,_[3]=mt,$.clearBufferiv($.COLOR,0,_))}else H|=$.COLOR_BUFFER_BIT}U&&(H|=$.DEPTH_BUFFER_BIT),W&&(H|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),zt.dispose(),Zt.dispose(),T.dispose(),j.dispose(),dt.dispose(),Kt.dispose(),fe.dispose(),Lt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Ke),Jt.removeEventListener("sessionend",ue),Ct&&(Ct.dispose(),Ct=null),qe.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=xe.autoReset,U=rt.enabled,W=rt.autoUpdate,H=rt.needsUpdate,V=rt.type;Re(),xe.autoReset=A,rt.enabled=U,rt.autoUpdate=W,rt.needsUpdate=H,rt.type=V}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const U=A.target;U.removeEventListener("dispose",xt),Ht(U)}function Ht(A){kt(A),Zt.remove(A)}function kt(A){const U=Zt.get(A).programs;U!==void 0&&(U.forEach(function(W){Lt.releaseProgram(W)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,H,V,nt){U===null&&(U=Ft);const ct=V.isMesh&&V.matrixWorld.determinant()<0,Z=Dt(A,U,W,H,V);Rt.setMaterial(H,ct);let mt=W.index,Ut=1;if(H.wireframe===!0){if(mt=lt.getWireframeAttribute(W),mt===void 0)return;Ut=2}const bt=W.drawRange,gt=W.attributes.position;let Nt=bt.start*Ut,ze=(bt.start+bt.count)*Ut;nt!==null&&(Nt=Math.max(Nt,nt.start*Ut),ze=Math.min(ze,(nt.start+nt.count)*Ut)),mt!==null?(Nt=Math.max(Nt,0),ze=Math.min(ze,mt.count)):gt!=null&&(Nt=Math.max(Nt,0),ze=Math.min(ze,gt.count));const be=ze-Nt;if(be<0||be===1/0)return;Kt.setup(V,H,Z,W,mt);let Ge,Qt=Wt;if(mt!==null&&(Ge=ht.get(mt),Qt=Pt,Qt.setIndex(Ge)),V.isMesh)H.wireframe===!0?(Rt.setLineWidth(H.wireframeLinewidth*de()),Qt.setMode($.LINES)):Qt.setMode($.TRIANGLES);else if(V.isLine){let It=H.linewidth;It===void 0&&(It=1),Rt.setLineWidth(It*de()),V.isLineSegments?Qt.setMode($.LINES):V.isLineLoop?Qt.setMode($.LINE_LOOP):Qt.setMode($.LINE_STRIP)}else V.isPoints?Qt.setMode($.POINTS):V.isSprite&&Qt.setMode($.TRIANGLES);if(V.isBatchedMesh)Qt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Qt.renderInstances(Nt,be,V.count);else if(W.isInstancedBufferGeometry){const It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pi=Math.min(W.instanceCount,It);Qt.renderInstances(Nt,be,pi)}else Qt.render(Nt,be)};function ye(A,U,W){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,w(A,U,W),A.side=di,A.needsUpdate=!0,w(A,U,W),A.side=Jn):w(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),f=zt.get(W),f.init(),y.push(f),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(M._useLegacyLights);const H=new Set;return A.traverse(function(V){const nt=V.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const Z=nt[ct];ye(Z,W,V),H.add(Z)}else ye(nt,W,V),H.add(nt)}),y.pop(),f=null,H},this.compileAsync=function(A,U,W=null){const H=this.compile(A,U,W);return new Promise(V=>{function nt(){if(H.forEach(function(ct){Zt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){V(A);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Me=null;function ge(A){Me&&Me(A)}function Ke(){qe.stop()}function ue(){qe.start()}const qe=new Xd;qe.setAnimationLoop(ge),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(A){Me=A,Jt.setAnimationLoop(A),A===null?qe.stop():qe.start()},Jt.addEventListener("sessionstart",Ke),Jt.addEventListener("sessionend",ue),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(U),U=Jt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,R),f=zt.get(A,y.length),f.init(),y.push(f),Ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Ot),Et=this.localClippingEnabled,at=$t.init(this.clippingPlanes,Et),E=St.get(A,h.length),E.init(),h.push(E),dn(A,U,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(it,st),this.info.render.frame++,at===!0&&$t.beginShadows();const W=f.state.shadowsArray;if(rt.render(W,A,U),at===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(E,A),f.setupLights(M._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let V=0,nt=H.length;V<nt;V++){const ct=H[V];Co(E,A,ct,ct.viewport)}}else Co(E,A,U);R!==null&&(O.updateMultisampleRenderTarget(R),O.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,U),Kt.resetDefaultState(),z=-1,S=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,h.pop(),h.length>0?E=h[h.length-1]:E=null};function dn(A,U,W,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){H&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);const ct=dt.update(A),Z=A.material;Z.visible&&E.push(A,ct,Z,W,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const ct=dt.update(A),Z=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),jt.copy(ct.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(Z)){const mt=ct.groups;for(let Ut=0,bt=mt.length;Ut<bt;Ut++){const gt=mt[Ut],Nt=Z[gt.materialIndex];Nt&&Nt.visible&&E.push(A,ct,Nt,W,jt.z,gt)}}else Z.visible&&E.push(A,ct,Z,W,jt.z,null)}}const nt=A.children;for(let ct=0,Z=nt.length;ct<Z;ct++)dn(nt[ct],U,W,H)}function Co(A,U,W,H){const V=A.opaque,nt=A.transmissive,ct=A.transparent;f.setupLightsView(W),at===!0&&$t.setGlobalState(M.clippingPlanes,W),nt.length>0&&v(V,nt,U,W),H&&Rt.viewport(L.copy(H)),V.length>0&&p(V,U,W),nt.length>0&&p(nt,U,W),ct.length>0&&p(ct,U,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function v(A,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const nt=Xt.isWebGL2;Ct===null&&(Ct=new is(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?Eo:Li,minFilter:Mo,samples:nt?4:0})),M.getDrawingBufferSize(qt),nt?Ct.setSize(qt.x,qt.y):Ct.setSize(Cc(qt.x),Cc(qt.y));const ct=M.getRenderTarget();M.setRenderTarget(Ct),M.getClearColor(tt),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const Z=M.toneMapping;M.toneMapping=hi,p(A,W,H),O.updateMultisampleRenderTarget(Ct),O.updateRenderTargetMipmap(Ct);let mt=!1;for(let Ut=0,bt=U.length;Ut<bt;Ut++){const gt=U[Ut],Nt=gt.object,ze=gt.geometry,be=gt.material,Ge=gt.group;if(be.side===Jn&&Nt.layers.test(H.layers)){const Qt=be.side;be.side=ln,be.needsUpdate=!0,x(Nt,W,H,ze,be,Ge),be.side=Qt,be.needsUpdate=!0,mt=!0}}mt===!0&&(O.updateMultisampleRenderTarget(Ct),O.updateRenderTargetMipmap(Ct)),M.setRenderTarget(ct),M.setClearColor(tt,F),M.toneMapping=Z}function p(A,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,nt=A.length;V<nt;V++){const ct=A[V],Z=ct.object,mt=ct.geometry,Ut=H===null?ct.material:H,bt=ct.group;Z.layers.test(W.layers)&&x(Z,U,W,mt,Ut,bt)}}function x(A,U,W,H,V,nt){A.onBeforeRender(M,U,W,H,V,nt),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,U,W,H,A,nt),V.transparent===!0&&V.side===Jn&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,M.renderBufferDirect(W,U,H,V,A,nt),V.side=di,V.needsUpdate=!0,M.renderBufferDirect(W,U,H,V,A,nt),V.side=Jn):M.renderBufferDirect(W,U,H,V,A,nt),A.onAfterRender(M,U,W,H,V,nt)}function w(A,U,W){U.isScene!==!0&&(U=Ft);const H=Zt.get(A),V=f.state.lights,nt=f.state.shadowsArray,ct=V.state.version,Z=Lt.getParameters(A,V.state,nt,U,W),mt=Lt.getProgramCacheKey(Z);let Ut=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?j:T).get(A.envMap||H.environment),Ut===void 0&&(A.addEventListener("dispose",xt),Ut=new Map,H.programs=Ut);let bt=Ut.get(mt);if(bt!==void 0){if(H.currentProgram===bt&&H.lightsStateVersion===ct)return et(A,Z),bt}else Z.uniforms=Lt.getUniforms(A),A.onBuild(W,Z,M),A.onBeforeCompile(Z,M),bt=Lt.acquireProgram(Z,mt),Ut.set(mt,bt),H.uniforms=Z.uniforms;const gt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(gt.clippingPlanes=$t.uniform),et(A,Z),H.needsLights=he(A),H.lightsStateVersion=ct,H.needsLights&&(gt.ambientLightColor.value=V.state.ambient,gt.lightProbe.value=V.state.probe,gt.directionalLights.value=V.state.directional,gt.directionalLightShadows.value=V.state.directionalShadow,gt.spotLights.value=V.state.spot,gt.spotLightShadows.value=V.state.spotShadow,gt.rectAreaLights.value=V.state.rectArea,gt.ltc_1.value=V.state.rectAreaLTC1,gt.ltc_2.value=V.state.rectAreaLTC2,gt.pointLights.value=V.state.point,gt.pointLightShadows.value=V.state.pointShadow,gt.hemisphereLights.value=V.state.hemi,gt.directionalShadowMap.value=V.state.directionalShadowMap,gt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,gt.spotShadowMap.value=V.state.spotShadowMap,gt.spotLightMatrix.value=V.state.spotLightMatrix,gt.spotLightMap.value=V.state.spotLightMap,gt.pointShadowMap.value=V.state.pointShadowMap,gt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=bt,H.uniformsList=null,bt}function G(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Ar.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function et(A,U){const W=Zt.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Dt(A,U,W,H,V){U.isScene!==!0&&(U=Ft),O.resetTextureUnits();const nt=U.fog,ct=H.isMeshStandardMaterial?U.environment:null,Z=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ui,mt=(H.isMeshStandardMaterial?j:T).get(H.envMap||ct),Ut=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,bt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),gt=!!W.morphAttributes.position,Nt=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color;let be=hi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=M.toneMapping);const Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=Ge!==void 0?Ge.length:0,It=Zt.get(H),pi=f.state.lights;if(at===!0&&(Et===!0||A!==S)){const Tn=A===S&&H.id===z;$t.setState(H,A,Tn)}let pe=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==pi.state.version||It.outputColorSpace!==Z||V.isBatchedMesh&&It.batching===!1||!V.isBatchedMesh&&It.batching===!0||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||V.isInstancedMesh&&It.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&It.instancingColor===!1&&V.instanceColor!==null||It.envMap!==mt||H.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==$t.numPlanes||It.numIntersection!==$t.numIntersection)||It.vertexAlphas!==Ut||It.vertexTangents!==bt||It.morphTargets!==gt||It.morphNormals!==Nt||It.morphColors!==ze||It.toneMapping!==be||Xt.isWebGL2===!0&&It.morphTargetsCount!==Qt)&&(pe=!0):(pe=!0,It.__version=H.version);let Nn=It.currentProgram;pe===!0&&(Nn=w(H,U,V));let Un=!1,qn=!1,la=!1;const Qe=Nn.getUniforms(),Ui=It.uniforms;if(Rt.useProgram(Nn.program)&&(Un=!0,qn=!0,la=!0),H.id!==z&&(z=H.id,qn=!0),Un||S!==A){Qe.setValue($,"projectionMatrix",A.projectionMatrix),Qe.setValue($,"viewMatrix",A.matrixWorldInverse);const Tn=Qe.map.cameraPosition;Tn!==void 0&&Tn.setValue($,jt.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&Qe.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Qe.setValue($,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,qn=!0,la=!0)}if(V.isSkinnedMesh){Qe.setOptional($,V,"bindMatrix"),Qe.setOptional($,V,"bindMatrixInverse");const Tn=V.skeleton;Tn&&(Xt.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Qe.setValue($,"boneTexture",Tn.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Qe.setOptional($,V,"batchingTexture"),Qe.setValue($,"batchingTexture",V._matricesTexture,O));const ha=W.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&Xt.isWebGL2===!0)&&ne.update(V,W,Nn),(qn||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,Qe.setValue($,"receiveShadow",V.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ui.envMap.value=mt,Ui.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),qn&&(Qe.setValue($,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&At(Ui,la),nt&&H.fog===!0&&vt.refreshFogUniforms(Ui,nt),vt.refreshMaterialUniforms(Ui,H,Q,K,Ct),Ar.upload($,G(It),Ui,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ar.upload($,G(It),Ui,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Qe.setValue($,"center",V.center),Qe.setValue($,"modelViewMatrix",V.modelViewMatrix),Qe.setValue($,"normalMatrix",V.normalMatrix),Qe.setValue($,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Tn=H.uniformsGroups;for(let da=0,bu=Tn.length;da<bu;da++)if(Xt.isWebGL2){const il=Tn[da];fe.update(il,Nn),fe.bind(il,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function At(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function he(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,U,W){Zt.get(A.texture).__webglTexture=U,Zt.get(A.depthTexture).__webglTexture=W;const H=Zt.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const W=Zt.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){R=A,D=U,C=W;let H=!0,V=null,nt=!1,ct=!1;if(A){const mt=Zt.get(A);mt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer($.FRAMEBUFFER,null),H=!1):mt.__webglFramebuffer===void 0?O.setupRenderTarget(A):mt.__hasExternalTextures&&O.rebindTextures(A,Zt.get(A.texture).__webglTexture,Zt.get(A.depthTexture).__webglTexture);const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const bt=Zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?V=bt[U][W]:V=bt[U],nt=!0):Xt.isWebGL2&&A.samples>0&&O.useMultisampledRTT(A)===!1?V=Zt.get(A).__webglMultisampledFramebuffer:Array.isArray(bt)?V=bt[W]:V=bt,L.copy(A.viewport),X.copy(A.scissor),q=A.scissorTest}else L.copy(ot).multiplyScalar(Q).floor(),X.copy(ut).multiplyScalar(Q).floor(),q=pt;if(Rt.bindFramebuffer($.FRAMEBUFFER,V)&&Xt.drawBuffers&&H&&Rt.drawBuffers(A,V),Rt.viewport(L),Rt.scissor(X),Rt.setScissorTest(q),nt){const mt=Zt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,W)}else if(ct){const mt=Zt.get(A.texture),Ut=U||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,mt.__webglTexture,W||0,Ut)}z=-1},this.readRenderTargetPixels=function(A,U,W,H,V,nt,ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(Z=Z[ct]),Z){Rt.bindFramebuffer($.FRAMEBUFFER,Z);try{const mt=A.texture,Ut=mt.format,bt=mt.type;if(Ut!==Wn&&wt.convert(Ut)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=bt===Eo&&(Bt.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(bt!==Li&&wt.convert(bt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(bt===Ri&&(Xt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&W>=0&&W<=A.height-V&&$.readPixels(U,W,H,V,wt.convert(Ut),wt.convert(bt),nt)}finally{const mt=R!==null?Zt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer($.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(A,U,W=0){const H=Math.pow(2,-W),V=Math.floor(U.image.width*H),nt=Math.floor(U.image.height*H);O.setTexture2D(U,0),$.copyTexSubImage2D($.TEXTURE_2D,W,0,0,A.x,A.y,V,nt),Rt.unbindTexture()},this.copyTextureToTexture=function(A,U,W,H=0){const V=U.image.width,nt=U.image.height,ct=wt.convert(W.format),Z=wt.convert(W.type);O.setTexture2D(W,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,W.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?$.texSubImage2D($.TEXTURE_2D,H,A.x,A.y,V,nt,ct,Z,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,H,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,ct,U.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,H,A.x,A.y,ct,Z,U.image),H===0&&W.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W,H,V=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const nt=A.max.x-A.min.x+1,ct=A.max.y-A.min.y+1,Z=A.max.z-A.min.z+1,mt=wt.convert(H.format),Ut=wt.convert(H.type);let bt;if(H.isData3DTexture)O.setTexture3D(H,0),bt=$.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)O.setTexture2DArray(H,0),bt=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,H.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,H.unpackAlignment);const gt=$.getParameter($.UNPACK_ROW_LENGTH),Nt=$.getParameter($.UNPACK_IMAGE_HEIGHT),ze=$.getParameter($.UNPACK_SKIP_PIXELS),be=$.getParameter($.UNPACK_SKIP_ROWS),Ge=$.getParameter($.UNPACK_SKIP_IMAGES),Qt=W.isCompressedTexture?W.mipmaps[V]:W.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Qt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Qt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,A.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,A.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?$.texSubImage3D(bt,V,U.x,U.y,U.z,nt,ct,Z,mt,Ut,Qt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(bt,V,U.x,U.y,U.z,nt,ct,Z,mt,Qt.data)):$.texSubImage3D(bt,V,U.x,U.y,U.z,nt,ct,Z,mt,Ut,Qt),$.pixelStorei($.UNPACK_ROW_LENGTH,gt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Nt),$.pixelStorei($.UNPACK_SKIP_PIXELS,ze),$.pixelStorei($.UNPACK_SKIP_ROWS,be),$.pixelStorei($.UNPACK_SKIP_IMAGES,Ge),V===0&&H.generateMipmaps&&$.generateMipmap(bt),Rt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){D=0,C=0,R=null,Rt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===jc?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?ns:Id}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ns?Je:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class D_ extends Qd{}D_.prototype.isWebGL1Renderer=!0;class Jc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class O_ extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class N_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new B;class kr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fr extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bs;const eo=new B,Ss=new B,ws=new B,As=new ee,no=new ee,tu=new Ae,Ko=new B,io=new B,Jo=new B,bh=new ee,Ga=new ee,Sh=new ee;class Pc extends Ye{constructor(t=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new N_(e,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new kr(n,3,0,!1)),bs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=bs,this.material=t,this.center=new ee(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-ws.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Qo(Ko.set(-.5,-.5,0),ws,a,Ss,i,s),Qo(io.set(.5,-.5,0),ws,a,Ss,i,s),Qo(Jo.set(.5,.5,0),ws,a,Ss,i,s),bh.set(0,0),Ga.set(1,0),Sh.set(1,1);let r=t.ray.intersectTriangle(Ko,io,Jo,!1,eo);if(r===null&&(Qo(io.set(-.5,.5,0),ws,a,Ss,i,s),Ga.set(0,1),r=t.ray.intersectTriangle(Ko,Jo,io,!1,eo),r===null))return;const c=t.ray.origin.distanceTo(eo);c<t.near||c>t.far||e.push({distance:c,point:eo.clone(),uv:bn.getInterpolation(eo,Ko,io,Jo,bh,Ga,Sh,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qo(o,t,e,n,i,s){As.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(no.x=s*As.x-i*As.y,no.y=i*As.x+s*As.y):no.copy(As),o.copy(t),o.x+=no.x,o.y+=no.y,o.applyMatrix4(tu)}class wh extends gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new Ae,Ah=new Ae,tr=[],Th=new os,U_=new Ae,so=new te,oo=new rs;class B_ extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Th.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Th)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),oo.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ts),Ah.multiplyMatrices(n,Ts),so.matrixWorld=Ah,so.raycast(t,tr);for(let a=0,r=tr.length;a<r;a++){const c=tr[a];c.instanceId=s,c.object=this,e.push(c)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class eu extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ch=new B,Rh=new B,Ph=new Ae,Va=new jr,er=new rs;class k_ extends Ye{constructor(t=new _n,e=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ch.fromBufferAttribute(e,i-1),Rh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ch.distanceTo(Rh);t.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(i),er.radius+=s,t.ray.intersectsSphere(er)===!1)return;Ph.copy(i).invert(),Va.copy(t.ray).applyMatrix4(Ph);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new B,d=new B,u=new B,m=new B,g=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const h=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let M=h,b=y-1;M<b;M+=g){const D=_.getX(M),C=_.getX(M+1);if(l.fromBufferAttribute(f,D),d.fromBufferAttribute(f,C),Va.distanceSqToSegment(l,d,m,u)>c)continue;m.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(m);z<t.near||z>t.far||e.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=h,b=y-1;M<b;M+=g){if(l.fromBufferAttribute(f,M),d.fromBufferAttribute(f,M+1),Va.distanceSqToSegment(l,d,m,u)>c)continue;m.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(m);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Lh=new B,Ih=new B;class F_ extends k_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Lh.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lh.distanceTo(Ih);t.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lc extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dh=new Ae,Ic=new jr,nr=new rs,ir=new B;class Oh extends Ye{constructor(t=new _n,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,t.ray.intersectsSphere(nr)===!1)return;Dh.copy(i).invert(),Ic.copy(t.ray).applyMatrix4(Dh);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,u=n.attributes.position;if(l!==null){const m=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=m,E=g;_<E;_++){const f=l.getX(_);ir.fromBufferAttribute(u,f),Nh(ir,f,c,i,t,e,this)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,E=g;_<E;_++)ir.fromBufferAttribute(u,_),Nh(ir,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Nh(o,t,e,n,i,s,a){const r=Ic.distanceSqToPoint(o);if(r<e){const c=new B;Ic.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}class Ws extends hn{constructor(t,e,n,i,s,a,r,c,l){super(t,e,n,i,s,a,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const sr=new B,or=new B,Wa=new B,rr=new bn;class z_ extends _n{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(wr*e),a=t.getIndex(),r=t.getAttribute("position"),c=a?a.count:r.count,l=[0,0,0],d=["a","b","c"],u=new Array(3),m={},g=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:E,b:f,c:h}=rr;if(E.fromBufferAttribute(r,l[0]),f.fromBufferAttribute(r,l[1]),h.fromBufferAttribute(r,l[2]),rr.getNormal(Wa),u[0]=`${Math.round(E.x*i)},${Math.round(E.y*i)},${Math.round(E.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(h.x*i)},${Math.round(h.y*i)},${Math.round(h.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const M=(y+1)%3,b=u[y],D=u[M],C=rr[d[y]],R=rr[d[M]],z=`${b}_${D}`,S=`${D}_${b}`;S in m&&m[S]?(Wa.dot(m[S].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(R.x,R.y,R.z)),m[S]=null):z in m||(m[z]={index0:l[y],index1:l[M],normal:Wa.clone()})}}for(const _ in m)if(m[_]){const{index0:E,index1:f}=m[_];sr.fromBufferAttribute(r,E),or.fromBufferAttribute(r,f),g.push(sr.x,sr.y,sr.z),g.push(or.x,or.y,or.z)}this.setAttribute("position",new An(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dn extends _n{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let l=0;const d=[],u=new B,m=new B,g=[],_=[],E=[],f=[];for(let h=0;h<=n;h++){const y=[],M=h/n;let b=0;h===0&&a===0?b=.5/e:h===n&&c===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){const C=D/e;u.x=-t*Math.cos(i+C*s)*Math.sin(a+M*r),u.y=t*Math.cos(a+M*r),u.z=t*Math.sin(i+C*s)*Math.sin(a+M*r),_.push(u.x,u.y,u.z),m.copy(u).normalize(),E.push(m.x,m.y,m.z),f.push(C+b,1-M),y.push(l++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const M=d[h][y+1],b=d[h][y],D=d[h+1][y],C=d[h+1][y+1];(h!==0||a>0)&&g.push(M,b,C),(h!==n-1||c<Math.PI)&&g.push(b,D,C)}this.setIndex(g),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oe extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jr extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class H_ extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new Ae,Uh=new B,Bh=new B;class nu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kh=new Ae,ro=new B,Ya=new B;class G_ extends nu{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ro.setFromMatrixPosition(t.matrixWorld),n.position.copy(ro),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}}class Fh extends Jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new G_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class V_ extends nu{constructor(){super(new Yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new V_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_ extends Jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qr{constructor(t,e,n=0,i=1/0){this.ray=new jr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(zh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Dc(t[i],this,n,e);return n.sort(zh),n}}function zh(o,t){return o.distance-t.distance}function Dc(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let s=0,a=i.length;s<a;s++)Dc(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const xo=16,X_=256,Y_=256,q_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let Oc=null,ar=null;function j_(){return ar||(ar=new Promise(o=>{const t=new Image;t.onload=()=>{const e=new hn(t);e.magFilter=ke,e.minFilter=ke,e.generateMipmaps=!1,e.needsUpdate=!0,Oc=e,o()},t.onerror=()=>{console.warn("Atlas load failed"),o()},t.src=q_}),ar)}function $_(o,t){if(!Oc)return Z_(o,t);const e=Oc.clone();e.needsUpdate=!0;const n=xo/X_,i=xo/Y_;return e.offset.set(o*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=wn,e.wrapT=wn,e}function Z_(o,t){const e=document.createElement("canvas");e.width=e.height=xo;const n=e.getContext("2d"),i=(o*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,xo,xo);const s=new Ws(e);return s.magFilter=ke,s.minFilter=ke,s}function K_(o,t,e={}){const n=$_(o,t),i=new Oe({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:di});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const J_=[0,0],cr=[1,0],Hh=[2,0],qa=[3,0],Q_=[4,0],lr=[5,0],Gh=[6,0],tv=[7,0],Vh=[9,0],ev=[10,0],nv=[11,0],iv=[12,0],sv=[13,0],ov=[14,0],rv=[15,0],av=[0,1],cv=[1,1],lv=[2,1],hv=[3,1],dv=[4,1],uv=[5,1],fv=[6,1],hr=[7,1],Wh=[8,1],pv=[9,1],mv=[10,1],gv=[11,1],_v=[12,1],vv=[13,1],ja=[14,1],xv=[15,1],dr=[0,2],Xh=[1,2],ur=[2,2],yv=[3,2],Mv=[6,2],$a=new Map;function ae(o,t,e={}){const n=`${o},${t},${JSON.stringify(e)}`;if($a.has(n))return $a.get(n);const i=K_(o,t,e);return $a.set(n,i),i}let Ki=null,Ns=null,fr=null;function su(o,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;o.fillStyle="#1a5fa0",o.fillRect(0,0,16,16),o.fillStyle=`rgba(40,130,210,${.45+e*.3})`,o.fillRect(0,Math.round(e*9),16,3),o.fillStyle=`rgba(80,160,240,${.2+n*.2})`,o.fillRect(0,Math.round(n*5)+6,16,2),o.fillStyle=`rgba(180,220,255,${.06+e*.06})`,o.fillRect(Math.round(n*10),0,4,16)}function Ev(){if(fr)return fr;Ki=document.createElement("canvas"),Ki.width=Ki.height=16;const o=Ki.getContext("2d");return su(o,0),Ns=new Ws(Ki),Ns.magFilter=ke,Ns.minFilter=ke,fr=new Oe({map:Ns,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:Jn}),fr}function bv(o){!Ki||!Ns||(su(Ki.getContext("2d"),o),Ns.needsUpdate=!0)}function Sv(o,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(o){case 1:return[ae(...cr,n),ae(...cr,n),ae(...J_,n),ae(...Hh,n),ae(...cr,n),ae(...cr,n)];case 2:return Be(Hh,n);case 3:return Be(qa,n);case 4:return Be(Q_,n);case 5:return[ae(...lr,n),ae(...lr,n),ae(...Gh,n),ae(...Gh,n),ae(...lr,n),ae(...lr,n)];case 6:return Be(tv,{transparent:!0,alphaTest:.5});case 7:{const i=Ev();return[i,i,i,i,i,i]}case 8:return Be(sv,n);case 9:return Be(iv,{transparent:!0,opacity:.6});case 10:return Be(Vh,n);case 11:return Be(ev,n);case 12:return Be(nv,n);case 13:return Be(av,n);case 14:return Be(cv,n);case 15:return Be(lv,n);case 16:return Be(ov,n);case 17:return Be(_v,n);case 18:return Be(pv,n);case 19:return Be(dv,{emissive:16755200});case 20:return Be(uv,n);case 21:return Be(fv,{transparent:!0,opacity:.7});case 22:return[ae(...ur,n),ae(...ur,n),ae(...rv,n),ae(...Vh,n),ae(...ur,n),ae(...ur,n)];case 23:return[ae(...vv,n),ae(...ja,n),ae(...xv,n),ae(...qa,n),ae(...ja,n),ae(...ja,n)];case 24:return[ae(...hr,n),ae(...hr,n),ae(...Wh,n),ae(...Wh,n),ae(...hr,n),ae(...hr,n)];case 26:return Be(mv,n);case 27:return Be(gv,n);case 47:return Be(Mv,{emissive:16729088});case 49:return[ae(...dr,n),ae(...dr,n),ae(...Xh,n),ae(...Xh,n),ae(...dr,n),ae(...dr,n)];case 54:return Be(yv,n);case 61:return Be(hv,n);default:{const i=ae(...qa,n);return[i,i,i,i,i,i]}}}function Be(o,t={}){const e=ae(o[0],o[1],t);return[e,e,e,e,e,e]}const ou=Math.sqrt(3),wv=.5*(ou-1),ao=(3-ou)/6,Yh=o=>Math.floor(o)|0,qh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function zn(o=Math.random){const t=Av(o),e=new Float64Array(t).map(i=>qh[i%12*2]),n=new Float64Array(t).map(i=>qh[i%12*2+1]);return function(s,a){let r=0,c=0,l=0;const d=(s+a)*wv,u=Yh(s+d),m=Yh(a+d),g=(u+m)*ao,_=u-g,E=m-g,f=s-_,h=a-E;let y,M;f>h?(y=1,M=0):(y=0,M=1);const b=f-y+ao,D=h-M+ao,C=f-1+2*ao,R=h-1+2*ao,z=u&255,S=m&255;let L=.5-f*f-h*h;if(L>=0){const tt=z+t[S],F=e[tt],Y=n[tt];L*=L,r=L*L*(F*f+Y*h)}let X=.5-b*b-D*D;if(X>=0){const tt=z+y+t[S+M],F=e[tt],Y=n[tt];X*=X,c=X*X*(F*b+Y*D)}let q=.5-C*C-R*R;if(q>=0){const tt=z+1+t[S+1],F=e[tt],Y=n[tt];q*=q,l=q*q*(F*C+Y*R)}return 70*(r+c+l)}}function Av(o){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(o()*(256-n)),s=e[n];e[n]=e[i],e[i]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const ta={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},89:{name:"Snowball",color:15658751,solid:!1},90:{name:"Egg",color:15786176,solid:!1},91:{name:"Strength Potion",color:16729156,solid:!1},92:{name:"Speed Potion",color:4500223,solid:!1},93:{name:"Saddle",color:9127187,solid:!1},94:{name:"Anvil",color:5592405},95:{name:"Leather",color:9136404,solid:!1},96:{name:"Night Vision Potion",color:1710847,solid:!1},97:{name:"Jump Boost Potion",color:2284834,solid:!1},98:{name:"Resistance Potion",color:14526976,solid:!1},99:{name:"Brewing Stand",color:8930338},100:{name:"Note Block",color:8930338,emissive:2228224},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1}},Hi=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function En(o){var t;return((t=ta[o])==null?void 0:t.name)??"Unknown"}function Us(o){var t;return((t=ta[o])==null?void 0:t.color)??16777215}const jn=16,co=62,Tv=4096,Cv=4096,Rv=8192,Pv=8192*256;function Te(o,t,e){return o+Tv+t*Rv+(e+Cv)*Pv}function jh(o,t,e){return`${o},${t},${e}`}const Vt=class Vt{constructor(t){I(this,"scene");I(this,"instancedMeshes",new Map);I(this,"instanceCount",new Map);I(this,"_dirtyMeshes",new Set);I(this,"instanceIndex",new Map);I(this,"instanceRevIndex",new Map);I(this,"blockData",new Map);I(this,"generatedChunks",new Set);I(this,"modifications",new Map);I(this,"chestContents",new Map);I(this,"nH1",zn(()=>.31415+Vt._s()));I(this,"nH2",zn(()=>.62831+Vt._s()));I(this,"nH3",zn(()=>.94247+Vt._s()));I(this,"nH4",zn(()=>.12566+Vt._s()));I(this,"nBio",zn(()=>.78539+Vt._s()));I(this,"nCv1",zn(()=>.52359+Vt._s()));I(this,"nCv2",zn(()=>.20943+Vt._s()));I(this,"nOre",zn(()=>.41887+Vt._s()));I(this,"noise2D",zn(()=>.69813+Vt._s()));I(this,"noise2D2",zn(()=>.87964+Vt._s()));I(this,"biomeNoise",zn(()=>.78539+Vt._s()));I(this,"torchLights",new Map);I(this,"torchLightQueue",[]);I(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}static _s(){return typeof window.__worldSeed=="number"?window.__worldSeed:0}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),s=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,r=this.nH4(t*.016,e*.016)*.125,l=((i+s+a+r)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),s=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(s)<.1}generateChunkRaw(t,e,n,i){for(let s=0;s<jn;s++)for(let a=0;a<jn;a++){const r=t*jn+s,c=e*jn+a,l=this.getHeight(r,c),d=this.getBiome(r,c),u=d!==4&&l>=co-2&&l<=co+2,m=(g,_)=>{n.set(Te(r,g,c),_),i.push([r,g,c])};for(let g=0;g<=l;g++){if(g>4&&g<l-1&&this.isCave(r,g,c))continue;let _;if(g<=4?_=3:d===1||u?_=g>=l-3?4:3:d===4?_=g===l?12:g===l-1?4:3:g===l?_=d===3&&l>100?20:1:g>=l-4?_=2:_=3,_===3&&g<l-4){const E=this.nOre(r*.16+g*.11,c*.16);g<=16&&E>.76?_=61:g<=32&&E>.68?_=13:g<=64&&E>.6?_=14:g<=128&&E>.54&&(_=15)}m(g,_)}if(l<co)for(let g=l+1;g<=co;g++)m(g,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<jn;i++)for(let s=0;s<jn;s++){const a=t*jn+i,r=e*jn+s,c=this.getHeight(a,r),l=this.getBiome(a,r);if(c<=co)continue;const d=Math.random();l===0?d<.02?this.placeBlock(a,c+1,r,51,!1):d<.03&&this.placeTree(a,c+1,r):l===1?d<.03?this.placeBlock(a,c+1,r,50,!1):d<.05&&this.placeBlock(a,c+1,r,52,!1):l===2?d<.09?this.placeTree(a,c+1,r):d<.12&&this.placeBlock(a,c+1,r,51,!1):l===3&&c<100&&d<.03&&this.placeTree(a,c+1,r)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const s=e+i;for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(r)===2&&c<1||a===0&&r===0&&c<2||this.placeBlock(t+a,s+c,n+r,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,s,e,n))}for(const[i,s,a]of n){const r=Te(i,s,a),c=e.get(r);if(!Vt.isOpaque(c)){this.placeBlock(i,s,a,c,!1);continue}!Vt.isOpaque(e.get(Te(i+1,s,a))??0)||!Vt.isOpaque(e.get(Te(i-1,s,a))??0)||!Vt.isOpaque(e.get(Te(i,s+1,a))??0)||!Vt.isOpaque(e.get(Te(i,s-1,a))??0)||!Vt.isOpaque(e.get(Te(i,s,a+1))??0)||!Vt.isOpaque(e.get(Te(i,s,a-1))??0)?this.placeBlock(i,s,a,c,!1):this.blockData.set(r,c)}for(let i=-3;i<=3;i++)for(let s=-3;s<=3;s++){const a=`${i},${s}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,s,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/jn),s=Math.floor(e/jn);let a=0,r=0,c=1/0,l=!1;for(let _=i-3;_<=i+3;_++)for(let E=s-3;E<=s+3;E++){if(this.generatedChunks.has(`${_},${E}`))continue;const f=(_-i)*(_-i)+(E-s)*(E-s);f<c&&(c=f,a=_,r=E,l=!0)}if(!l)return;const d=`${a},${r}`;this.generatedChunks.add(d);const u=new Map,m=[];this.generateChunkRaw(a,r,u,m);for(const[_,E,f]of m){const h=Te(_,E,f),y=u.get(h);if(!Vt.isOpaque(y)){this.placeBlock(_,E,f,y,!1);continue}const M=(D,C,R)=>u.get(Te(D,C,R))??this.blockData.get(Te(D,C,R))??0;!Vt.isOpaque(M(_+1,E,f))||!Vt.isOpaque(M(_-1,E,f))||!Vt.isOpaque(M(_,E+1,f))||!Vt.isOpaque(M(_,E-1,f))||!Vt.isOpaque(M(_,E,f+1))||!Vt.isOpaque(M(_,E,f-1))?this.placeBlock(_,E,f,y,!1):this.blockData.set(h,y)}const g=`${a},${r}_dec`;this.generatedChunks.has(g)||(this.generatedChunks.add(g),this.generateChunkDecorations(a,r,u))}static isOpaque(t){return t>0&&!Vt.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return Vt.sharedBoxGeo||(Vt.sharedBoxGeo=new Ce(1,1,1)),Vt.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=ta[t],n=Sv(t,e??{}),i=n.length===1?n[0]:n,s=new B_(Vt.getBoxGeo(),i,Vt.MAX_INSTANCES);return s.instanceMatrix.setUsage(Af),s.count=0,s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,t===7&&(s.renderOrder=1),this.scene.add(s),this.instancedMeshes.set(t,s),this.instanceCount.set(t,0),s}placeBlock(t,e,n,i,s=!0){const a=Te(t,e,n);if(!s&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const r=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=Vt.MAX_INSTANCES)return;const l=i===7?.375:.5;Vt._mat4.setPosition(t+.5,e+l,n+.5),r.setMatrixAt(c,Vt._mat4),r.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),s&&this.modifications.set(jh(t,e,n),i)}removeBlock(t,e,n){const i=Te(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(jh(t,e,n),0);const s=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,r,c]of s){const l=Te(a,r,c),d=this.blockData.get(l);d===void 0||d===0||this.instanceIndex.has(l)||this._addBlockMesh(a,r,c,d)}return!0}_addBlockMesh(t,e,n,i){const s=Te(t,e,n);if(this.instanceIndex.has(s))return;const a=this.getOrCreateInstancedMesh(i),r=this.instanceCount.get(i)??0;r>=Vt.MAX_INSTANCES||(Vt._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(r,Vt._mat4),a.count=r+1,this._dirtyMeshes.add(i),this.instanceIndex.set(s,r),this.instanceRevIndex.set(`${i}:${r}`,s),this.instanceCount.set(i,r+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,Vt._mat4),n.setMatrixAt(i,Vt._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const r=a;n.count=r,this.instanceCount.set(e,r),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Te(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Te(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Te(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,s){for(let a=-s;a<=s;a++)for(let r=-s;r<=s;r++)for(let c=-s;c<=s;c++)if(this.blockData.get(Te(t+a,e+r,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),s=Math.floor(t.y),a=Math.floor(t.z);const r=e.x,c=e.y,l=e.z,d=r>0?1:r<0?-1:0,u=c>0?1:c<0?-1:0,m=l>0?1:l<0?-1:0,g=d!==0?Math.abs(1/r):1/0,_=u!==0?Math.abs(1/c):1/0,E=m!==0?Math.abs(1/l):1/0;let f=d>0?(i+1-t.x)*g:d<0?(t.x-i)*g:1/0,h=u>0?(s+1-t.y)*_:u<0?(t.y-s)*_:1/0,y=m>0?(a+1-t.z)*E:m<0?(t.z-a)*E:1/0,M=0,b=0,D=0;const C=Math.ceil(n*3)+2;for(let R=0;R<C;R++){if(this.blockData.has(Te(i,s,a)))return{x:i,y:s,z:a,face:Vt._rayFace.set(M,b,D)};if(f<h)if(f<y){if(f>n)return null;i+=d,M=-d,b=0,D=0,f+=g}else{if(y>n)return null;a+=m,M=0,b=0,D=-m,y+=E}else if(h<y){if(h>n)return null;s+=u,M=0,b=-u,D=0,h+=_}else{if(y>n)return null;a+=m,M=0,b=0,D=-m,y+=E}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const s=this.blockData.get(Te(t,i,e));if(s!==void 0&&!n.has(s))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let s=-n;s<=n;s++)for(let a=-n;a<=n;a++){const r=this.getSurfaceHeight(t+s,e+a);r>i&&(i=r)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const s=`${t},${e},${n}`;this.chestContents.set(s,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[s,a]of i){const r=t+s,c=e+a,l=this.getSurfaceHeight(r,c);this.placeHouse(r,l,c,8,5,6)}}placeHouse(t,e,n,i,s,a){for(let l=0;l<i;l++)for(let d=0;d<a;d++)this.placeBlock(t+l,e+1,n+d,11,!1);for(let l=0;l<i;l++)for(let d=0;d<a;d++)for(let u=0;u<s;u++)(l===0||l===i-1||d===0||d===a-1)&&this.placeBlock(t+l,e+2+u,n+d,10,!1);const r=t+Math.floor(i/2);this.removeBlock(r,e+2,n),this.removeBlock(r,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let d=0;d<a;d++)this.placeBlock(t+l,e+2+s,n+d,10,!1);this.placeBlock(r+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let s=0;s<3;s++)(i!==1||s!==1)&&this.placeBlock(t+i-1,e+1,n+s-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,s=5;for(let r=-4;r<=4;r++)for(let c=0;c<s;c++)for(let l=-4;l<=4;l++){const d=t+r,u=i+c,m=e+l,g=Math.abs(r)===4||Math.abs(l)===4,_=c===0,E=c===s-1;if(g||_||E){const f=Math.random()<.3?82:81;this.placeBlock(d,u,m,f,!0)}else this.removeBlock(d,u,m)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[r,c]of a){const l=i+1;this.placeBlock(r,l,c,31,!0);const d=[64,62,65,63,280,268,270,274,267,257,5,10,56,11,3],u=new Array(27).fill(0),m=Math.floor(Math.random()*8)+4,g=new Set;for(let _=0;_<m;_++){let E;do E=Math.floor(Math.random()*27);while(g.has(E));g.add(E),u[E]=d[Math.floor(Math.random()*d.length)]}this.setChestInventory(r,l,c,u)}for(let r=0;r<10;r++){const c=t-r,l=i+5+r,d=e-5;if(l>=n)break;this.removeBlock(c,l,d),r>0&&this.removeBlock(c,l-1,d)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[s,a]of this.modifications.entries())e[s]=a;const n={};for(const[s,a]of this.chestContents.entries())a.some(r=>r!==0)&&(n[s]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(s){console.warn("Save failed:",s)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[s,a,r]=n.split(",").map(Number);i===0?this.removeBlock(s,a,r):this.placeBlock(s,a,r,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const s=`${t},${e},${n}`;if(this.torchLights.has(s))return;const a=new Fh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(s,a),this.torchLightQueue.push(s);this.torchLightQueue.length>50;){const r=this.torchLightQueue.shift();if(r){const c=this.torchLights.get(r);c&&(this.scene.remove(c),this.torchLights.delete(r))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,s=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=s}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,s=this.torchLights.get(i);if(s){this.scene.remove(s),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Te(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.activateLamp(t+r,e+c,n+l);else for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Te(t+r,e+c,n+l))===59&&this.deactivateLamp(t+r,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Te(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const r=new Fh(16737792,1.2,6);r.position.set(t,e,n),this.scene.add(r),this.redstoneLoights.set(i,r)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Te(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const r=this.redstoneLoights.get(i);r&&(this.scene.remove(r),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),s=Number(e),a=Number(n),r=Number(i);!isNaN(s)&&!isNaN(a)&&!isNaN(r)&&this.addTorchLight(s,a+.5,r)}}};I(Vt,"MAX_INSTANCES",32e3),I(Vt,"_mat4",new Ae),I(Vt,"_rayFace",new B),I(Vt,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),I(Vt,"sharedBoxGeo",null);let Nc=Vt;const pr=4.5,Lv=1.6,mr=9,$h=8.5,Zh=-28,lo=1.8,gr=.55,un=1.62,Iv=5,pn=class pn{constructor(t,e,n){I(this,"camera");I(this,"world");I(this,"scene");I(this,"position",new B(0,30,0));I(this,"velocity",new B);I(this,"onGround",!1);I(this,"gameMode","survival");I(this,"_forward",new B);I(this,"_right",new B);I(this,"_move",new B);I(this,"_rayDir",new B);I(this,"_highlightVec",new B);I(this,"_lastHit",null);I(this,"_lastHitFrame",-1);I(this,"_frameCount",0);I(this,"health",40);I(this,"maxHealth",40);I(this,"invincible",0);I(this,"spawnGrace",0);I(this,"armor",0);I(this,"speedBonus",0);I(this,"jumpBonus",0);I(this,"fallStartY",0);I(this,"wasOnGround",!1);I(this,"fallTracking",!1);I(this,"keys",{});I(this,"yaw",0);I(this,"pitch",0);I(this,"locked",!1);I(this,"chatOpen",!1);I(this,"flying",!1);I(this,"lastSpace",0);I(this,"inWater",!1);I(this,"wasInWater",!1);I(this,"waterTimer",0);I(this,"onLadder",!1);I(this,"swimStroke",0);I(this,"waterCameraTilt",0);I(this,"waterEntryVelocityDamp",1);I(this,"selectedBlockType",1);I(this,"raycaster",new Qr);I(this,"highlightMesh");I(this,"outlineMesh");I(this,"outlineOpacity",0);I(this,"outlineTarget",0);I(this,"_lastOutlineKey","");I(this,"breakProgress",0);I(this,"breakTarget",null);I(this,"breakIndicator",null);I(this,"isBreakingHeld",!1);I(this,"selfModel",null);I(this,"selfHead",null);I(this,"selfLA",null);I(this,"selfRA",null);I(this,"selfLL",null);I(this,"selfRL",null);I(this,"walkCycle",0);I(this,"prevXZ",new ee);I(this,"thirdPerson",!1);I(this,"headBobPhase",0);I(this,"headBobIntensity",0);I(this,"cameraRoll",0);I(this,"currentFov",75);I(this,"fpArm",null);I(this,"fpArmGroup",null);I(this,"_armSwing",0);I(this,"_armSwingDir",1);I(this,"_armBob",0);I(this,"onPlaceBlock");I(this,"onBreakBlock");I(this,"onOpenChat");I(this,"onDied");I(this,"onHealthChanged");I(this,"onRightClick");I(this,"setDeathCause");I(this,"onWaterEnter");I(this,"onWaterExit");I(this,"_hitPoint",new B);I(this,"_hitNormal",new B);I(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});this.camera=t,this.world=e,this.scene=n;const i=new Ce(1.02,1.02,1.02),s=new fi({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new te(i,s),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new z_(new Ce(1.005,1.005,1.005)),r=new eu({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new F_(a,r),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!pn._crackTextures){pn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const s=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let r=0;r<s*2;r++){const c=r/(s*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let r=0;r<e;r++){const c=2+Math.random()*12,l=2+Math.random()*12,d=c+(Math.random()-.5)*6,u=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(d,u),i.stroke()}}if(e>4){const r=i.createRadialGradient(8,8,4,8,8,10);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=r,i.fillRect(0,0,16,16)}const a=new Ws(n);a.magFilter=ke,a.minFilter=ke,pn._crackTextures.push(a)}}return pn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}isSneaking(){return(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}getTargetBlockType(){if(!this._lastHit)return null;const t=this.world.getBlock(this._lastHit.blockX,this._lastHit.blockY,this._lastHit.blockZ);return t?t.type:null}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new me,this.camera.add(this.fpArmGroup);const t=new Ce(.12,.35,.12),e=new Oe({color:16764057}),n=new te(t,e);n.position.y=-.175;const i=new Ce(.11,.25,.11),s=new te(i,e);s.position.y=-.3,n.add(s);const a=new Ce(.135,.355,.135),r=new Oe({color:3364300,transparent:!0,opacity:.9}),c=new te(a,r);c.position.y=-.175,this.fpArm=new me,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,s.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new me,n=16764057,i=3364300,s=2245785,a=3351057,r=3346688,c=C=>new Oe({color:C}),l=(C,R,z,S)=>new te(new Ce(C,R,z),c(S)),d=(C,R,z,S)=>{const L=new me,X=l(C,R,z,S);return X.position.y=-R/2,L.add(X),L},u=new me;u.add(l(.5,.5,.5,n));const m=l(.52,.14,.52,r);m.position.y=.19,u.add(m),u.position.set(0,.75,0);const g=l(.6,.75,.35,i);g.position.y=0;const _=d(.25,.65,.25,i),E=d(.25,.65,.25,i),f=l(.24,.25,.24,n);f.position.y=-.575,_.children[0].add(f);const h=f.clone();E.children[0].add(h),_.position.set(-.43,.37,0),E.position.set(.43,.37,0);const y=d(.27,.75,.27,s),M=d(.27,.75,.27,s),b=l(.28,.2,.3,a);b.position.y=-.77,y.children[0].add(b);const D=b.clone();return M.children[0].add(D),y.position.set(-.175,-.375,0),M.position.set(.175,-.375,0),e.add(u,g,_,E,y,M),t.add(e),this.selfHead=u,this.selfLA=_,this.selfRA=E,this.selfLL=y,this.selfRL=M,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var s;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(s=this.onBreakBlock)==null||s.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const s=new Ce(1.002,1.002,1.002),a=new fi({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new te(s,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),s=this.breakIndicator.material,a=pn.getCrackTexture(i);s.map!==a&&(s.map=a,s.opacity=.5+i*.06,s.needsUpdate=!0)}}placeBlock(){var r,c;(r=this.onRightClick)==null||r.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),s=t.blockZ+Math.round(e.z),a=this.position.y-un;Math.abs(n-this.position.x)<gr+.3&&i>=a-.2&&i<=a+lo+.2&&Math.abs(s-this.position.z)<gr+.3||(this.world.placeBlock(n,i,s,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,s,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,Iv);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var d,u,m,g;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-un+lo/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(d=this.setDeathCause)==null||d.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(u=this.onWaterEnter)==null||u.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(m=this.onWaterExit)==null||m.call(this)));const s=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-un+lo),i);this.onLadder=s===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const r=this.onLadder?0:this.inWater?-4:Zh;this.velocity.y+=r*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const _=c-un,E=Math.floor(_);for(let f=0;f<=2;f++){const h=E-f;if(this.footprintOverBlock(this.position.x,this.position.z,h)){const y=h+1+un;if(c<=y+.02){if(this.fallTracking){const M=this.fallStartY-(h+1);M>5&&((g=this.setDeathCause)==null||g.call(this,"You fell"),this.takeDamage(Math.floor((M-5)*.75))),this.fallTracking=!1}this.position.y=y,this.velocity.y=0,l=!0}break}}l||(this.position.y=c)}else{const _=Math.floor(this.position.y-un+lo+.05);this.footprintOverBlock(this.position.x,this.position.z,_)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-un,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const _=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=_+un+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=gr/2-.01;for(let s=0;s<3;s++){const a=Math.floor(t+(s-1)*i);for(let r=0;r<3;r++){const c=Math.floor(e+(r-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=gr/2-.01,s=Math.floor(e-un+.05),a=Math.floor(e-un+lo-.05);for(let r=s;r<=a;r++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let d=0;d<2;d++){const u=Math.floor(n+(d===0?-i:i)),m=this.world.getBlockType(l,r,u);if(m!==void 0&&m!==0&&m!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=mr*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=mr*t);else{this.velocity.y+=Zh*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-un);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+un,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=$h+this.jumpBonus,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);const s=this.keys.ControlLeft&&this.gameMode==="survival",a=(this.keys.ShiftLeft||this.keys.ShiftRight)&&this.gameMode==="survival"&&this.onGround;let r=s?pr*Lv:a?pr*.3:pr;if(this.gameMode==="creative"&&(r=this.flying?mr:pr*1.2),this.gameMode==="spectator"&&(r=mr*1.5),this.speedBonus>0&&(r*=1+this.speedBonus),this.inWater&&(r*=.6),i.lengthSq()>0){i.normalize().multiplyScalar(r*t);const c=this.position.x+i.x,l=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=c,this.position.z=l):(this.wallCollision(c,this.position.y,this.position.z)||(this.position.x=c),this.wallCollision(this.position.x,this.position.y,l)||(this.position.z=l))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=$h,this.onGround=!1)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5,i=this.position.y+.6;this.camera.position.x+=(e-this.camera.position.x)*.18,this.camera.position.y+=(i-this.camera.position.y)*.18,this.camera.position.z+=(n-this.camera.position.z)*.18,this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position),this.isSneaking()&&(this.camera.position.y-=.4);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",s=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(s-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const d=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,u=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=d,this.camera.position.y+=u}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const r=this.inWater?.06:0;this.waterCameraTilt+=(r-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=pn.BASE_FOV;i&&n>1&&(c=pn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=pn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-un;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,s=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),s>.3?this.walkCycle+=t*Math.min(s,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),r=.65;this.selfLL&&(this.selfLL.rotation.x=a*r),this.selfRL&&(this.selfRL.rotation.x=-a*r),this.selfLA&&(this.selfLA.rotation.x=-a*r),this.selfRA&&(this.selfRA.rotation.x=a*r)}updateHighlight(){const t=this.raycast();if(t){const s=t.blockX+.5,a=t.blockY+.5,r=t.blockZ+.5;this.highlightMesh.position.set(s,a,r),this.highlightMesh.visible=!1,this.outlineMesh.position.set(s,a,r),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const s=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(s===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const s=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const r=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+s*.5,this.fpArm.rotation.z=.05+r,this.fpArm.position.y=-.28+s,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+un+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};I(pn,"BASE_FOV",75),I(pn,"SPRINT_FOV",85),I(pn,"LANDING_FOV",70),I(pn,"_crackTextures",null);let Uc=pn;function Kh(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class Dv{constructor(t,e,n){I(this,"keys");I(this,"onBreak");I(this,"onPlace");I(this,"joyActive",!1);I(this,"joyId",-1);I(this,"joyOriginX",0);I(this,"joyOriginY",0);I(this,"joyEl");I(this,"joyThumbEl");I(this,"lookId",-1);I(this,"lookLastX",0);I(this,"lookLastY",0);I(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,i.addEventListener("touchstart",s=>{s.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=s.identifier,this.joyOriginX=s.clientX,this.joyOriginY=s.clientY):this.lookId===-1&&(this.lookId=s.identifier,this.lookLastX=s.clientX,this.lookLastY=s.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var s;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const r=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(s=this.onLookDelta)==null||s.call(this,r,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const s of Array.from(i.changedTouches))s.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):s.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,s=e-this.joyOriginY,a=Math.sqrt(i*i+s*s),r=a>0?i/a:0,c=a>0?s/a:0,l=Math.min(a,42),d=r*l,u=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${u}px))`;const m=12;this.keys.KeyW=u<-m,this.keys.KeyS=u>m,this.keys.KeyA=d<-m,this.keys.KeyD=d>m}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var Fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ov(o){if(o.__esModule)return o;var t=o.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(o).forEach(function(n){var i=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return o[n]}})}),e}var ru={};ArrayBuffer.isView||(ArrayBuffer.isView=o=>o!==null&&typeof o=="object"&&o.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Xs={},ea={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.ServerError=o.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(o.CloseCode||(o.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}o.ServerError=t})(ea);var wo={},Ys={};Object.defineProperty(Ys,"__esModule",{value:!0});Ys.decode=Ys.encode=void 0;function Zs(o,t){if(this._offset=t,o instanceof ArrayBuffer)this._buffer=o,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(o))this._buffer=o.buffer,this._view=new DataView(this._buffer,o.byteOffset,o.byteLength);else throw new Error("Invalid argument")}function Nv(o,t,e){for(var n="",i=0,s=t,a=t+e;s<a;s++){var r=o.getUint8(s);if(!(r&128)){n+=String.fromCharCode(r);continue}if((r&224)===192){n+=String.fromCharCode((r&31)<<6|o.getUint8(++s)&63);continue}if((r&240)===224){n+=String.fromCharCode((r&15)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0);continue}if((r&248)===240){i=(r&7)<<18|(o.getUint8(++s)&63)<<12|(o.getUint8(++s)&63)<<6|(o.getUint8(++s)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+r.toString(16))}return n}Zs.prototype._array=function(o){for(var t=new Array(o),e=0;e<o;e++)t[e]=this._parse();return t};Zs.prototype._map=function(o){for(var t="",e={},n=0;n<o;n++)t=this._parse(),e[t]=this._parse();return e};Zs.prototype._str=function(o){var t=Nv(this._view,this._offset,o);return this._offset+=o,t};Zs.prototype._bin=function(o){var t=this._buffer.slice(this._offset,this._offset+o);return this._offset+=o,t};Zs.prototype._parse=function(){var o=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,s=0;if(o<192)return o<128?o:o<144?this._map(o&15):o<160?this._array(o&15):this._str(o&31);if(o>223)return(255-o+1)*-1;switch(o){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+s)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,i+s;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+s);if(n===-1){i=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var r=(i&3)*4294967296+s;return new Date(r*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Uv(o,t=0){var e=new Zs(o,t),n=e._parse();if(e._offset!==o.byteLength)throw new Error(o.byteLength-e._offset+" trailing bytes");return n}Ys.decode=Uv;var Bv=4294967296-1,kv=17179869184-1;function Fv(o,t,e){for(var n=0,i=0,s=e.length;i<s;i++)n=e.charCodeAt(i),n<128?o.setUint8(t++,n):n<2048?(o.setUint8(t++,192|n>>6),o.setUint8(t++,128|n&63)):n<55296||n>=57344?(o.setUint8(t++,224|n>>12),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),o.setUint8(t++,240|n>>18),o.setUint8(t++,128|n>>12&63),o.setUint8(t++,128|n>>6&63),o.setUint8(t++,128|n&63))}function zv(o){for(var t=0,e=0,n=0,i=o.length;n<i;n++)t=o.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Ls(o,t,e){var n=typeof e,i=0,s=0,a=0,r=0,c=0,l=0;if(n==="string"){if(c=zv(e),c<32)o.push(c|160),l=1;else if(c<256)o.push(217,c),l=2;else if(c<65536)o.push(218,c>>8,c),l=3;else if(c<4294967296)o.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:o.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(o.push(203),t.push({_float:e,_length:8,_offset:o.length}),9):e>=0?e<128?(o.push(e),1):e<256?(o.push(204,e),2):e<65536?(o.push(205,e>>8,e),3):e<4294967296?(o.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,r=e>>>0,o.push(207,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9):e>=-32?(o.push(e),1):e>=-128?(o.push(208,e),2):e>=-32768?(o.push(209,e>>8,e),3):e>=-2147483648?(o.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),r=e>>>0,o.push(211,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),9);if(n==="object"){if(e===null)return o.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)o.push(c|144),l=1;else if(c<65536)o.push(220,c>>8,c),l=3;else if(c<4294967296)o.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Ls(o,t,e[i]);return l}if(e instanceof Date){var d=e.getTime(),u=Math.floor(d/1e3),m=(d-u*1e3)*1e6;return u>=0&&m>=0&&u<=kv?m===0&&u<=Bv?(o.push(214,255,u>>24,u>>16,u>>8,u),6):(a=u/4294967296,r=u&4294967295,o.push(215,255,m>>22,m>>14,m>>6,a,r>>24,r>>16,r>>8,r),10):(a=Math.floor(u/4294967296),r=u>>>0,o.push(199,12,255,m>>24,m>>16,m>>8,m,a>>24,a>>16,a>>8,a,r>>24,r>>16,r>>8,r),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)o.push(196,c),l=2;else if(c<65536)o.push(197,c>>8,c),l=3;else if(c<4294967296)o.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:o.length}),l+c}if(typeof e.toJSON=="function")return Ls(o,t,e.toJSON());var g=[],_="",E=Object.keys(e);for(i=0,s=E.length;i<s;i++)_=E[i],e[_]!==void 0&&typeof e[_]!="function"&&g.push(_);if(c=g.length,c<16)o.push(c|128),l=1;else if(c<65536)o.push(222,c>>8,c),l=3;else if(c<4294967296)o.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)_=g[i],l+=Ls(o,t,_),l+=Ls(o,t,e[_]);return l}if(n==="boolean")return o.push(e?195:194),1;if(n==="undefined")return o.push(192),1;if(typeof e.toJSON=="function")return Ls(o,t,e.toJSON());throw new Error("Could not encode")}function Hv(o){var t=[],e=[],n=Ls(t,e,o),i=new ArrayBuffer(n),s=new DataView(i),a=0,r=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,d=0,u=0,m=0,g=t.length;m<g;m++)if(s.setUint8(r+m,t[m]),m+1===c){if(l=e[a],d=l._length,u=r+c,l._bin)for(var _=new Uint8Array(l._bin),E=0;E<d;E++)s.setUint8(u+E,_[E]);else l._str?Fv(s,u,l._str):l._float!==void 0&&s.setFloat64(u,l._float);a++,r+=d,e[a]&&(c=e[a]._offset)}return i}Ys.encode=Hv;var na={},ia={},Gv=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Vv=Fe&&Fe.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(ia,"__esModule",{value:!0});ia.WebSocketTransport=void 0;const Wv=Vv(Gv),Za=globalThis.WebSocket||Wv.default;class Xv{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Za(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Za(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Za.OPEN}}ia.WebSocketTransport=Xv;Object.defineProperty(na,"__esModule",{value:!0});na.Connection=void 0;const Yv=ia;class qv{constructor(){this.events={},this.transport=new Yv.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}na.Connection=qv;var Qc={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.utf8Length=o.utf8Read=o.ErrorCode=o.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(o.Protocol||(o.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(o.ErrorCode||(o.ErrorCode={}));function t(n,i){const s=n[i++];for(var a="",r=0,c=i,l=i+s;c<l;c++){var d=n[c];if(!(d&128)){a+=String.fromCharCode(d);continue}if((d&224)===192){a+=String.fromCharCode((d&31)<<6|n[++c]&63);continue}if((d&240)===224){a+=String.fromCharCode((d&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((d&248)===240){r=(d&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,r>=65536?(r-=65536,a+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):a+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+d.toString(16))}return a}o.utf8Read=t;function e(n=""){let i=0,s=0;for(let a=0,r=n.length;a<r;a++)i=n.charCodeAt(a),i<128?s+=1:i<2048?s+=2:i<55296||i>=57344?s+=3:(a++,s+=4);return s+1}o.utf8Length=e})(Qc);var ss={};Object.defineProperty(ss,"__esModule",{value:!0});ss.getSerializer=ss.registerSerializer=void 0;const au={};function jv(o,t){au[o]=t}ss.registerSerializer=jv;function $v(o){const t=au[o];if(!t)throw new Error("missing serializer: "+o);return t}ss.getSerializer=$v;var Ao={};Object.defineProperty(Ao,"__esModule",{value:!0});Ao.createNanoEvents=void 0;const Zv=()=>({emit(o,...t){let e=this.events[o]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(o,t){var e;return!((e=this.events[o])===null||e===void 0)&&e.push(t)||(this.events[o]=[t]),()=>{var n;this.events[o]=(n=this.events[o])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});Ao.createNanoEvents=Zv;var qs={};Object.defineProperty(qs,"__esModule",{value:!0});qs.createSignal=qs.EventEmitter=void 0;class cu{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}qs.EventEmitter=cu;function Kv(){const o=new cu;function t(e){return o.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),o.remove(n)};o.register(n)},t.remove=e=>o.remove(e),t.invoke=(...e)=>o.invoke(...e),t.invokeAsync=(...e)=>o.invokeAsync(...e),t.clear=()=>o.clear(),t}qs.createSignal=Kv;var Bc={exports:{}};(function(o,t){(function(e,n){n(t)})(Fe,function(e){var n=function(v,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(x,w){x.__proto__=w}||function(x,w){for(var G in w)Object.prototype.hasOwnProperty.call(w,G)&&(x[G]=w[G])},n(v,p)};function i(v,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(v,p);function x(){this.constructor=v}v.prototype=p===null?Object.create(p):(x.prototype=p.prototype,new x)}function s(v,p,x,w){var G=arguments.length,et=G<3?p:w,Dt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")et=Reflect.decorate(v,p,x,w);else for(var At=v.length-1;At>=0;At--)(Dt=v[At])&&(et=(G<3?Dt(et):G>3?Dt(p,x,et):Dt(p,x))||et);return G>3&&et&&Object.defineProperty(p,x,et),et}function a(v,p,x){if(arguments.length===2)for(var w=0,G=p.length,et;w<G;w++)(et||!(w in p))&&(et||(et=Array.prototype.slice.call(p,0,w)),et[w]=p[w]);return v.concat(et||Array.prototype.slice.call(p))}typeof SuppressedError=="function"&&SuppressedError;var r=255,c=213;e.OPERATION=void 0,function(v){v[v.ADD=128]="ADD",v[v.REPLACE=0]="REPLACE",v[v.DELETE=64]="DELETE",v[v.DELETE_AND_ADD=192]="DELETE_AND_ADD",v[v.TOUCH=1]="TOUCH",v[v.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function v(p,x,w){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=p,this.setParent(x,w)}return v.prototype.setParent=function(p,x,w){var G=this;if(this.indexes||(this.indexes=this.ref instanceof ge?this.ref._definition.indexes:{}),this.parent=p,this.parentIndex=w,!!x)if(this.root=x,this.ref instanceof ge){var et=this.ref._definition;for(var Dt in et.schema){var At=this.ref[Dt];if(At&&At.$changes){var he=et.indexes[Dt];At.$changes.setParent(this.ref,x,he)}}}else typeof this.ref=="object"&&this.ref.forEach(function(A,U){if(A instanceof ge){var W=A.$changes,H=G.ref.$changes.indexes[U];W.setParent(G.ref,G.root,H)}})},v.prototype.operation=function(p){this.changes.set(--this.currentCustomOperation,p)},v.prototype.change=function(p,x){x===void 0&&(x=e.OPERATION.ADD);var w=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(w,p);var G=this.changes.get(w);(!G||G.op===e.OPERATION.DELETE||G.op===e.OPERATION.TOUCH)&&this.changes.set(w,{op:G&&G.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:x,index:w}),this.allChanges.add(w),this.changed=!0,this.touchParents()},v.prototype.touch=function(p){var x=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(x,p),this.changes.has(x)||this.changes.set(x,{op:e.OPERATION.TOUCH,index:x}),this.allChanges.add(x),this.touchParents()},v.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},v.prototype.getType=function(p){if(this.ref._definition){var x=this.ref._definition;return x.schema[x.fieldsByIndex[p]]}else{var x=this.parent._definition,w=x.schema[x.fieldsByIndex[this.parentIndex]];return Object.values(w)[0]}},v.prototype.getChildrenFilter=function(){var p=this.parent._definition.childFilters;return p&&p[this.parentIndex]},v.prototype.getValue=function(p){return this.ref.getByIndex(p)},v.prototype.delete=function(p){var x=typeof p=="number"?p:this.indexes[p];if(x===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(p," (").concat(x,")"));return}var w=this.getValue(x);this.changes.set(x,{op:e.OPERATION.DELETE,index:x}),this.allChanges.delete(x),delete this.caches[x],w&&w.$changes&&(w.$changes.parent=void 0),this.changed=!0,this.touchParents()},v.prototype.discard=function(p,x){var w=this;p===void 0&&(p=!1),x===void 0&&(x=!1),this.ref instanceof ge||this.changes.forEach(function(G){if(G.op===e.OPERATION.DELETE){var et=w.ref.getIndex(G.index);delete w.indexes[et]}}),this.changes.clear(),this.changed=p,x&&this.allChanges.clear(),this.currentCustomOperation=0},v.prototype.discardAll=function(){var p=this;this.changes.forEach(function(x){var w=p.getValue(x.index);w&&w.$changes&&w.$changes.discardAll()}),this.discard()},v.prototype.cache=function(p,x){this.caches[p]=x},v.prototype.clone=function(){return new v(this.ref,this.parent,this.root)},v.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},v.prototype.assertValidIndex=function(p,x){if(p===void 0)throw new Error('ChangeTree: missing index for field "'.concat(x,'"'))},v}();function d(v,p,x,w){return v[p]||(v[p]=[]),v[p].push(x),w==null||w.forEach(function(G,et){return x(G,et)}),function(){return m(v[p],v[p].indexOf(x))}}function u(v){var p=this,x=typeof this.$changes.getType()!="string";this.$items.forEach(function(w,G){v.push({refId:p.$changes.refId,op:e.OPERATION.DELETE,field:G,value:void 0,previousValue:w}),x&&p.$changes.root.removeRef(w.$changes.refId)})}function m(v,p){if(p===-1||p>=v.length)return!1;for(var x=v.length-1,w=p;w<x;w++)v[w]=v[w+1];return v.length=x,!0}var g=function(v,p){var x=v.toString(),w=p.toString();return x<w?-1:x>w?1:0};function _(v){return v.$proxy=!0,v=new Proxy(v,{get:function(p,x){return typeof x!="symbol"&&!isNaN(x)?p.at(x):p[x]},set:function(p,x,w){if(typeof x!="symbol"&&!isNaN(x)){var G=Array.from(p.$items.keys()),et=parseInt(G[x]||x);w==null?p.deleteAt(et):p.setAt(et,w)}else p[x]=w;return!0},deleteProperty:function(p,x){return typeof x=="number"?p.deleteAt(x):delete p[x],!0},has:function(p,x){return typeof x!="symbol"&&!isNaN(Number(x))?p.$items.has(Number(x)):Reflect.has(p,x)}}),v}var E=function(){function v(){for(var p=[],x=0;x<arguments.length;x++)p[x]=arguments[x];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,p)}return v.prototype.onAdd=function(p,x){return x===void 0&&(x=!0),d(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,p,x?this.$items:void 0)},v.prototype.onRemove=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},v.prototype.onChange=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},v.is=function(p){return Array.isArray(p)||p.array!==void 0},Object.defineProperty(v.prototype,"length",{get:function(){return this.$items.size},set:function(p){p===0?this.clear():this.splice(p,this.length-p)},enumerable:!1,configurable:!0}),v.prototype.push=function(){for(var p=this,x=[],w=0;w<arguments.length;w++)x[w]=arguments[w];var G;return x.forEach(function(et){G=p.$refId++,p.setAt(G,et)}),G},v.prototype.pop=function(){var p=Array.from(this.$indexes.values()).pop();if(p!==void 0){this.$changes.delete(p),this.$indexes.delete(p);var x=this.$items.get(p);return this.$items.delete(p),x}},v.prototype.at=function(p){if(p=Math.trunc(p)||0,p<0&&(p+=this.length),!(p<0||p>=this.length)){var x=Array.from(this.$items.keys())[p];return this.$items.get(x)}},v.prototype.setAt=function(p,x){var w,G;if(x==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(p)!==x){x.$changes!==void 0&&x.$changes.setParent(this,this.$changes.root,p);var et=(G=(w=this.$changes.indexes[p])===null||w===void 0?void 0:w.op)!==null&&G!==void 0?G:e.OPERATION.ADD;this.$changes.indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,x),this.$changes.change(p,et)}},v.prototype.deleteAt=function(p){var x=Array.from(this.$items.keys())[p];return x===void 0?!1:this.$deleteAt(x)},v.prototype.$deleteAt=function(p){return this.$changes.delete(p),this.$indexes.delete(p),this.$items.delete(p)},v.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.concat=function(){for(var p,x=[],w=0;w<arguments.length;w++)x[w]=arguments[w];return new(v.bind.apply(v,a([void 0],(p=Array.from(this.$items.values())).concat.apply(p,x),!1)))},v.prototype.join=function(p){return Array.from(this.$items.values()).join(p)},v.prototype.reverse=function(){var p=this,x=Array.from(this.$items.keys()),w=Array.from(this.$items.values()).reverse();return w.forEach(function(G,et){p.setAt(x[et],G)}),this},v.prototype.shift=function(){var p=Array.from(this.$items.keys()),x=p.shift();if(x!==void 0){var w=this.$items.get(x);return this.$deleteAt(x),w}},v.prototype.slice=function(p,x){var w=new v;return w.push.apply(w,Array.from(this.$items.values()).slice(p,x)),w},v.prototype.sort=function(p){var x=this;p===void 0&&(p=g);var w=Array.from(this.$items.keys()),G=Array.from(this.$items.values()).sort(p);return G.forEach(function(et,Dt){x.setAt(w[Dt],et)}),this},v.prototype.splice=function(p,x){x===void 0&&(x=this.length-p);for(var w=[],G=2;G<arguments.length;G++)w[G-2]=arguments[G];for(var et=Array.from(this.$items.keys()),Dt=[],At=p;At<p+x;At++)Dt.push(this.$items.get(et[At])),this.$deleteAt(et[At]);for(var At=0;At<w.length;At++)this.setAt(p+At,w[At]);return Dt},v.prototype.unshift=function(){for(var p=this,x=[],w=0;w<arguments.length;w++)x[w]=arguments[w];var G=this.length,et=x.length,Dt=Array.from(this.$items.values());return x.forEach(function(At,he){p.setAt(he,At)}),Dt.forEach(function(At,he){p.setAt(et+he,At)}),G+et},v.prototype.indexOf=function(p,x){return Array.from(this.$items.values()).indexOf(p,x)},v.prototype.lastIndexOf=function(p,x){return x===void 0&&(x=this.length-1),Array.from(this.$items.values()).lastIndexOf(p,x)},v.prototype.every=function(p,x){return Array.from(this.$items.values()).every(p,x)},v.prototype.some=function(p,x){return Array.from(this.$items.values()).some(p,x)},v.prototype.forEach=function(p,x){Array.from(this.$items.values()).forEach(p,x)},v.prototype.map=function(p,x){return Array.from(this.$items.values()).map(p,x)},v.prototype.filter=function(p,x){return Array.from(this.$items.values()).filter(p,x)},v.prototype.reduce=function(p,x){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},v.prototype.reduceRight=function(p,x){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},v.prototype.find=function(p,x){return Array.from(this.$items.values()).find(p,x)},v.prototype.findIndex=function(p,x){return Array.from(this.$items.values()).findIndex(p,x)},v.prototype.fill=function(p,x,w){throw new Error("ArraySchema#fill() not implemented")},v.prototype.copyWithin=function(p,x,w){throw new Error("ArraySchema#copyWithin() not implemented")},v.prototype.toString=function(){return this.$items.toString()},v.prototype.toLocaleString=function(){return this.$items.toLocaleString()},v.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},v.prototype.includes=function(p,x){return Array.from(this.$items.values()).includes(p,x)},v.prototype.flatMap=function(p,x){throw new Error("ArraySchema#flatMap() is not supported.")},v.prototype.flat=function(p){throw new Error("ArraySchema#flat() is not supported.")},v.prototype.findLast=function(){var p=Array.from(this.$items.values());return p.findLast.apply(p,arguments)},v.prototype.findLastIndex=function(){var p=Array.from(this.$items.values());return p.findLastIndex.apply(p,arguments)},v.prototype.with=function(p,x){var w=Array.from(this.$items.values());return w[p]=x,new(v.bind.apply(v,a([void 0],w,!1)))},v.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},v.prototype.toSorted=function(p){return Array.from(this.$items.values()).sort(p)},v.prototype.toSpliced=function(p,x){var w=Array.from(this.$items.values());return w.toSpliced.apply(w,arguments)},v.prototype.setIndex=function(p,x){this.$indexes.set(p,x)},v.prototype.getIndex=function(p){return this.$indexes.get(p)},v.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},v.prototype.deleteByIndex=function(p){var x=this.$indexes.get(p);this.$items.delete(x),this.$indexes.delete(p)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){return this.toArray().map(function(p){return typeof p.toJSON=="function"?p.toJSON():p})},v.prototype.clone=function(p){var x;return p?x=new(v.bind.apply(v,a([void 0],Array.from(this.$items.values()),!1))):x=new(v.bind.apply(v,a([void 0],this.map(function(w){return w.$changes?w.clone():w}),!1))),x},v}();function f(v){return v.$proxy=!0,v=new Proxy(v,{get:function(p,x){return typeof x!="symbol"&&typeof p[x]>"u"?p.get(x):p[x]},set:function(p,x,w){return typeof x!="symbol"&&x.indexOf("$")===-1&&x!=="onAdd"&&x!=="onRemove"&&x!=="onChange"?p.set(x,w):p[x]=w,!0},deleteProperty:function(p,x){return p.delete(x),!0}}),v}var h=function(){function v(p){var x=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p)if(p instanceof Map||p instanceof v)p.forEach(function(G,et){return x.set(et,G)});else for(var w in p)this.set(w,p[w])}return v.prototype.onAdd=function(p,x){return x===void 0&&(x=!0),d(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,p,x?this.$items:void 0)},v.prototype.onRemove=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},v.prototype.onChange=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},v.is=function(p){return p.map!==void 0},v.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(v.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.set=function(p,x){if(x==null)throw new Error("MapSchema#set('".concat(p,"', ").concat(x,"): trying to set ").concat(x," value on '").concat(p,"'."));p=p.toString();var w=typeof this.$changes.indexes[p]<"u",G=w?this.$changes.indexes[p]:this.$refId++,et=w?e.OPERATION.REPLACE:e.OPERATION.ADD,Dt=x.$changes!==void 0;if(Dt&&x.$changes.setParent(this,this.$changes.root,G),!w)this.$changes.indexes[p]=G,this.$indexes.set(G,p);else{if(!Dt&&this.$items.get(p)===x)return;Dt&&this.$items.get(p)!==x&&(et=e.OPERATION.ADD)}return this.$items.set(p,x),this.$changes.change(p,et),this},v.prototype.get=function(p){return this.$items.get(p)},v.prototype.delete=function(p){return this.$changes.delete(p.toString()),this.$items.delete(p)},v.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(p){return this.$items.has(p)},v.prototype.forEach=function(p){this.$items.forEach(p)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.keys=function(){return this.$items.keys()},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(p,x){this.$indexes.set(p,x)},v.prototype.getIndex=function(p){return this.$indexes.get(p)},v.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},v.prototype.deleteByIndex=function(p){var x=this.$indexes.get(p);this.$items.delete(x),this.$indexes.delete(p)},v.prototype.toJSON=function(){var p={};return this.forEach(function(x,w){p[w]=typeof x.toJSON=="function"?x.toJSON():x}),p},v.prototype.clone=function(p){var x;return p?x=Object.assign(new v,this):(x=new v,this.forEach(function(w,G){w.$changes?x.set(G,w.clone()):x.set(G,w)})),x},v}(),y={};function M(v,p){y[v]=p}function b(v){return y[v]}var D=function(){function v(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return v.create=function(p){var x=new v;return x.schema=Object.assign({},p&&p.schema||{}),x.indexes=Object.assign({},p&&p.indexes||{}),x.fieldsByIndex=Object.assign({},p&&p.fieldsByIndex||{}),x.descriptors=Object.assign({},p&&p.descriptors||{}),x.deprecated=Object.assign({},p&&p.deprecated||{}),x},v.prototype.addField=function(p,x){var w=this.getNextFieldIndex();this.fieldsByIndex[w]=p,this.indexes[p]=w,this.schema[p]=Array.isArray(x)?{array:x[0]}:x},v.prototype.hasField=function(p){return this.indexes[p]!==void 0},v.prototype.addFilter=function(p,x){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[p]]=x,this.indexesWithFilters.push(this.indexes[p]),!0},v.prototype.addChildrenFilter=function(p,x){var w=this.indexes[p],G=this.schema[p];if(b(Object.keys(G)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[w]=x,!0;console.warn("@filterChildren: field '".concat(p,"' can't have children. Ignoring filter."))},v.prototype.getChildrenFilter=function(p){return this.childFilters&&this.childFilters[this.indexes[p]]},v.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},v}();function C(v){return v._context&&v._context.useFilters}var R=function(){function v(){this.types={},this.schemas=new Map,this.useFilters=!1}return v.prototype.has=function(p){return this.schemas.has(p)},v.prototype.get=function(p){return this.types[p]},v.prototype.add=function(p,x){x===void 0&&(x=this.schemas.size),p._definition=D.create(p._definition),p._typeid=x,this.types[x]=p,this.schemas.set(p,x)},v.create=function(p){return p===void 0&&(p={}),function(x){return p.context||(p.context=new v),S(x,p)}},v}(),z=new R;function S(v,p){return p===void 0&&(p={}),function(x,w){var G=p.context||z,et=x.constructor;if(et._context=G,!v)throw new Error("".concat(et.name,': @type() reference provided for "').concat(w,`" is undefined. Make sure you don't have any circular dependencies.`));G.has(et)||G.add(et);var Dt=et._definition;if(Dt.addField(w,v),Dt.descriptors[w]){if(Dt.deprecated[w])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(w,"' definition on '").concat(et.name,`'.
Check @type() annotation`))}catch(H){var At=H.stack.split(`
`)[4].trim();throw new Error("".concat(H.message," ").concat(At))}}var he=E.is(v),A=!he&&h.is(v);if(typeof v!="string"&&!ge.is(v)){var U=Object.values(v)[0];typeof U!="string"&&!G.has(U)&&G.add(U)}if(p.manual){Dt.descriptors[w]={enumerable:!0,configurable:!0,writable:!0};return}var W="_".concat(w);Dt.descriptors[W]={enumerable:!1,configurable:!1,writable:!0},Dt.descriptors[w]={get:function(){return this[W]},set:function(H){H!==this[W]&&(H!=null?(he&&!(H instanceof E)&&(H=new(E.bind.apply(E,a([void 0],H,!1)))),A&&!(H instanceof h)&&(H=new h(H)),H.$proxy===void 0&&(A?H=f(H):he&&(H=_(H))),this.$changes.change(w),H.$changes&&H.$changes.setParent(this,this.$changes.root,this._definition.indexes[w])):this[W]!==void 0&&this.$changes.delete(w),this[W]=H)},enumerable:!0,configurable:!0}}}function L(v){return function(p,x){var w=p.constructor,G=w._definition;G.addFilter(x,v)&&(w._context.useFilters=!0)}}function X(v){return function(p,x){var w=p.constructor,G=w._definition;G.addChildrenFilter(x,v)&&(w._context.useFilters=!0)}}function q(v){return v===void 0&&(v=!0),function(p,x){var w=p.constructor,G=w._definition;G.deprecated[x]=!0,v&&(G.descriptors[x]={get:function(){throw new Error("".concat(x," is deprecated."))},set:function(et){},enumerable:!1,configurable:!0})}}function tt(v,p,x){x===void 0&&(x={}),x.context||(x.context=v._context||x.context||z);for(var w in p)S(p[w],x)(v.prototype,w);return v}function F(v){for(var p=0,x=0,w=0,G=v.length;w<G;w++)p=v.charCodeAt(w),p<128?x+=1:p<2048?x+=2:p<55296||p>=57344?x+=3:(w++,x+=4);return x}function Y(v,p,x){for(var w=0,G=0,et=x.length;G<et;G++)w=x.charCodeAt(G),w<128?v[p++]=w:w<2048?(v[p++]=192|w>>6,v[p++]=128|w&63):w<55296||w>=57344?(v[p++]=224|w>>12,v[p++]=128|w>>6&63,v[p++]=128|w&63):(G++,w=65536+((w&1023)<<10|x.charCodeAt(G)&1023),v[p++]=240|w>>18,v[p++]=128|w>>12&63,v[p++]=128|w>>6&63,v[p++]=128|w&63)}function K(v,p){v.push(p&255)}function Q(v,p){v.push(p&255)}function it(v,p){v.push(p&255),v.push(p>>8&255)}function st(v,p){v.push(p&255),v.push(p>>8&255)}function ot(v,p){v.push(p&255),v.push(p>>8&255),v.push(p>>16&255),v.push(p>>24&255)}function ut(v,p){var x=p>>24,w=p>>16,G=p>>8,et=p;v.push(et&255),v.push(G&255),v.push(w&255),v.push(x&255)}function pt(v,p){var x=Math.floor(p/Math.pow(2,32)),w=p>>>0;ut(v,w),ut(v,x)}function J(v,p){var x=p/Math.pow(2,32)>>0,w=p>>>0;ut(v,w),ut(v,x)}function at(v,p){jt(v,p)}function Et(v,p){Ft(v,p)}var Ct=new Int32Array(2),Ot=new Float32Array(Ct.buffer),qt=new Float64Array(Ct.buffer);function jt(v,p){Ot[0]=p,ot(v,Ct[0])}function Ft(v,p){qt[0]=p,ot(v,Ct[0]),ot(v,Ct[1])}function de(v,p){return Q(v,p?1:0)}function $(v,p){p||(p="");var x=F(p),w=0;if(x<32)v.push(x|160),w=1;else if(x<256)v.push(217),Q(v,x),w=2;else if(x<65536)v.push(218),st(v,x),w=3;else if(x<4294967296)v.push(219),ut(v,x),w=5;else throw new Error("String too long");return Y(v,v.length,p),w+x}function _e(v,p){if(isNaN(p))return _e(v,0);if(isFinite(p)){if(p!==(p|0))return v.push(203),Ft(v,p),9}else return _e(v,p>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return p>=0?p<128?(Q(v,p),1):p<256?(v.push(204),Q(v,p),2):p<65536?(v.push(205),st(v,p),3):p<4294967296?(v.push(206),ut(v,p),5):(v.push(207),J(v,p),9):p>=-32?(v.push(224|p+32),1):p>=-128?(v.push(208),K(v,p),2):p>=-32768?(v.push(209),it(v,p),3):p>=-2147483648?(v.push(210),ot(v,p),5):(v.push(211),pt(v,p),9)}var Bt=Object.freeze({__proto__:null,boolean:de,float32:at,float64:Et,int16:it,int32:ot,int64:pt,int8:K,number:_e,string:$,uint16:st,uint32:ut,uint64:J,uint8:Q,utf8Write:Y,writeFloat32:jt,writeFloat64:Ft});function Xt(v,p,x){for(var w="",G=0,et=p,Dt=p+x;et<Dt;et++){var At=v[et];if(!(At&128)){w+=String.fromCharCode(At);continue}if((At&224)===192){w+=String.fromCharCode((At&31)<<6|v[++et]&63);continue}if((At&240)===224){w+=String.fromCharCode((At&15)<<12|(v[++et]&63)<<6|(v[++et]&63)<<0);continue}if((At&248)===240){G=(At&7)<<18|(v[++et]&63)<<12|(v[++et]&63)<<6|(v[++et]&63)<<0,G>=65536?(G-=65536,w+=String.fromCharCode((G>>>10)+55296,(G&1023)+56320)):w+=String.fromCharCode(G);continue}console.error("Invalid byte "+At.toString(16))}return w}function Rt(v,p){return xe(v,p)<<24>>24}function xe(v,p){return v[p.offset++]}function Zt(v,p){return O(v,p)<<16>>16}function O(v,p){return v[p.offset++]|v[p.offset++]<<8}function T(v,p){return v[p.offset++]|v[p.offset++]<<8|v[p.offset++]<<16|v[p.offset++]<<24}function j(v,p){return T(v,p)>>>0}function ht(v,p){return $t(v,p)}function lt(v,p){return rt(v,p)}function dt(v,p){var x=j(v,p),w=T(v,p)*Math.pow(2,32);return w+x}function Lt(v,p){var x=j(v,p),w=j(v,p)*Math.pow(2,32);return w+x}var vt=new Int32Array(2),St=new Float32Array(vt.buffer),zt=new Float64Array(vt.buffer);function $t(v,p){return vt[0]=T(v,p),St[0]}function rt(v,p){return vt[0]=T(v,p),vt[1]=T(v,p),zt[0]}function ve(v,p){return xe(v,p)>0}function ne(v,p){var x=v[p.offset++],w;x<192?w=x&31:x===217?w=xe(v,p):x===218?w=O(v,p):x===219&&(w=j(v,p));var G=Xt(v,p.offset,w);return p.offset+=w,G}function Wt(v,p){var x=v[p.offset];return x<192&&x>160||x===217||x===218||x===219}function Pt(v,p){var x=v[p.offset++];if(x<128)return x;if(x===202)return $t(v,p);if(x===203)return rt(v,p);if(x===204)return xe(v,p);if(x===205)return O(v,p);if(x===206)return j(v,p);if(x===207)return Lt(v,p);if(x===208)return Rt(v,p);if(x===209)return Zt(v,p);if(x===210)return T(v,p);if(x===211)return dt(v,p);if(x>223)return(255-x+1)*-1}function wt(v,p){var x=v[p.offset];return x<128||x>=202&&x<=211}function Kt(v,p){return v[p.offset]<160}function fe(v,p){return v[p.offset-1]===r&&(v[p.offset]<128||v[p.offset]>=202&&v[p.offset]<=211)}var Re=Object.freeze({__proto__:null,arrayCheck:Kt,boolean:ve,float32:ht,float64:lt,int16:Zt,int32:T,int64:dt,int8:Rt,number:Pt,numberCheck:wt,readFloat32:$t,readFloat64:rt,string:ne,stringCheck:Wt,switchStructureCheck:fe,uint16:O,uint32:j,uint64:Lt,uint8:xe}),Jt=function(){function v(p){var x=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(w){return x.add(w)})}return v.prototype.onAdd=function(p,x){return x===void 0&&(x=!0),d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,p,x?this.$items:void 0)},v.prototype.onRemove=function(p){return d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,p)},v.prototype.onChange=function(p){return d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,p)},v.is=function(p){return p.collection!==void 0},v.prototype.add=function(p){var x=this.$refId++,w=p.$changes!==void 0;return w&&p.$changes.setParent(this,this.$changes.root,x),this.$changes.indexes[x]=x,this.$indexes.set(x,x),this.$items.set(x,p),this.$changes.change(x),x},v.prototype.at=function(p){var x=Array.from(this.$items.keys())[p];return this.$items.get(x)},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(p){for(var x=this.$items.entries(),w,G;(G=x.next())&&!G.done;)if(p===G.value[1]){w=G.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},v.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(p){return Array.from(this.$items.values()).some(function(x){return x===p})},v.prototype.forEach=function(p){var x=this;this.$items.forEach(function(w,G,et){return p(w,G,x)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(p,x){this.$indexes.set(p,x)},v.prototype.getIndex=function(p){return this.$indexes.get(p)},v.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},v.prototype.deleteByIndex=function(p){var x=this.$indexes.get(p);this.$items.delete(x),this.$indexes.delete(p)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var p=[];return this.forEach(function(x,w){p.push(typeof x.toJSON=="function"?x.toJSON():x)}),p},v.prototype.clone=function(p){var x;return p?x=Object.assign(new v,this):(x=new v,this.forEach(function(w){w.$changes?x.add(w.clone()):x.add(w)})),x},v}(),ft=function(){function v(p){var x=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(w){return x.add(w)})}return v.prototype.onAdd=function(p,x){return x===void 0&&(x=!0),d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,p,x?this.$items:void 0)},v.prototype.onRemove=function(p){return d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,p)},v.prototype.onChange=function(p){return d(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,p)},v.is=function(p){return p.set!==void 0},v.prototype.add=function(p){var x,w;if(this.has(p))return!1;var G=this.$refId++;p.$changes!==void 0&&p.$changes.setParent(this,this.$changes.root,G);var et=(w=(x=this.$changes.indexes[G])===null||x===void 0?void 0:x.op)!==null&&w!==void 0?w:e.OPERATION.ADD;return this.$changes.indexes[G]=G,this.$indexes.set(G,G),this.$items.set(G,p),this.$changes.change(G,et),G},v.prototype.entries=function(){return this.$items.entries()},v.prototype.delete=function(p){for(var x=this.$items.entries(),w,G;(G=x.next())&&!G.done;)if(p===G.value[1]){w=G.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},v.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&u.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},v.prototype.has=function(p){for(var x=this.$items.values(),w=!1,G;(G=x.next())&&!G.done;)if(p===G.value){w=!0;break}return w},v.prototype.forEach=function(p){var x=this;this.$items.forEach(function(w,G,et){return p(w,G,x)})},v.prototype.values=function(){return this.$items.values()},Object.defineProperty(v.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),v.prototype.setIndex=function(p,x){this.$indexes.set(p,x)},v.prototype.getIndex=function(p){return this.$indexes.get(p)},v.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},v.prototype.deleteByIndex=function(p){var x=this.$indexes.get(p);this.$items.delete(x),this.$indexes.delete(p)},v.prototype.toArray=function(){return Array.from(this.$items.values())},v.prototype.toJSON=function(){var p=[];return this.forEach(function(x,w){p.push(typeof x.toJSON=="function"?x.toJSON():x)}),p},v.prototype.clone=function(p){var x;return p?x=Object.assign(new v,this):(x=new v,this.forEach(function(w){w.$changes?x.add(w.clone()):x.add(w)})),x},v}(),k=function(){function v(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return v.prototype.addRefId=function(p){this.refIds.has(p)||(this.refIds.add(p),this.containerIndexes.set(p,new Set))},v.get=function(p){return p.$filterState===void 0&&(p.$filterState=new v),p.$filterState},v}(),Mt=function(){function v(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return v.prototype.getNextUniqueId=function(){return this.nextUniqueId++},v.prototype.addRef=function(p,x,w){w===void 0&&(w=!0),this.refs.set(p,x),w&&(this.refCounts[p]=(this.refCounts[p]||0)+1)},v.prototype.removeRef=function(p){var x=this.refCounts[p];if(x===void 0){console.warn("trying to remove reference ".concat(p," that doesn't exist"));return}if(x===0){console.warn("trying to remove reference ".concat(p," with 0 refCount"));return}this.refCounts[p]=x-1,this.deletedRefs.add(p)},v.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},v.prototype.garbageCollectDeletedRefs=function(){var p=this;this.deletedRefs.forEach(function(x){if(!(p.refCounts[x]>0)){var w=p.refs.get(x);if(w instanceof ge)for(var G in w._definition.schema)typeof w._definition.schema[G]!="string"&&w[G]&&w[G].$changes&&p.removeRef(w[G].$changes.refId);else{var et=w.$changes.parent._definition,Dt=et.schema[et.fieldsByIndex[w.$changes.parentIndex]];typeof Object.values(Dt)[0]=="function"&&Array.from(w.values()).forEach(function(At){return p.removeRef(At.$changes.refId)})}p.refs.delete(x),delete p.refCounts[x]}}),this.deletedRefs.clear()},v}(),xt=function(v){i(p,v);function p(){return v!==null&&v.apply(this,arguments)||this}return p}(Error);function Ht(v,p,x,w){var G,et=!1;switch(p){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":G="number",isNaN(v)&&console.log('trying to encode "NaN" in '.concat(x.constructor.name,"#").concat(w));break;case"string":G="string",et=!0;break;case"boolean":return}if(typeof v!==G&&(!et||et&&v!==null)){var Dt="'".concat(JSON.stringify(v),"'").concat(v&&v.constructor&&" (".concat(v.constructor.name,")")||"");throw new xt("a '".concat(G,"' was expected, but ").concat(Dt," was provided in ").concat(x.constructor.name,"#").concat(w))}}function kt(v,p,x,w){if(!(v instanceof p))throw new xt("a '".concat(p.name,"' was expected, but '").concat(v.constructor.name,"' was provided in ").concat(x.constructor.name,"#").concat(w))}function ye(v,p,x,w,G){Ht(x,v,w,G);var et=Bt[v];if(et)et(p,x);else throw new xt("a '".concat(v,"' was expected, but ").concat(x," was provided in ").concat(w.constructor.name,"#").concat(G))}function Me(v,p,x){return Re[v](p,x)}var ge=function(){function v(){for(var p=[],x=0;x<arguments.length;x++)p[x]=arguments[x];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var w=this._definition.descriptors;w&&Object.defineProperties(this,w),p[0]&&this.assign(p[0])}return v.onError=function(p){console.error(p)},v.is=function(p){return p._definition&&p._definition.schema!==void 0},v.prototype.onChange=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,p)},v.prototype.onRemove=function(p){return d(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,p)},v.prototype.assign=function(p){return Object.assign(this,p),this},Object.defineProperty(v.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),v.prototype.setDirty=function(p,x){this.$changes.change(p,x)},v.prototype.listen=function(p,x,w){var G=this;return w===void 0&&(w=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[p]||(this.$callbacks[p]=[]),this.$callbacks[p].push(x),w&&this[p]!==void 0&&x(this[p],void 0),function(){return m(G.$callbacks[p],G.$callbacks[p].indexOf(x))}},v.prototype.decode=function(p,x,w){x===void 0&&(x={offset:0}),w===void 0&&(w=this);var G=[],et=this.$changes.root,Dt=p.length,At=0;for(et.refs.set(At,this);x.offset<Dt;){var he=p[x.offset++];if(he==r){At=Pt(p,x);var A=et.refs.get(At);if(!A)throw new Error('"refId" not found: '.concat(At));w=A;continue}var U=w.$changes,W=w._definition!==void 0,H=W?he>>6<<6:he;if(H===e.OPERATION.CLEAR){w.clear(G);continue}var V=W?he%(H||255):Pt(p,x),nt=W?w._definition.fieldsByIndex[V]:"",ct=U.getType(V),Z=void 0,mt=void 0,Ut=void 0;if(W?mt=w["_".concat(nt)]:(mt=w.getByIndex(V),(H&e.OPERATION.ADD)===e.OPERATION.ADD?(Ut=w instanceof h?ne(p,x):V,w.setIndex(V,Ut)):Ut=w.getIndex(V)),(H&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(H!==e.OPERATION.DELETE_AND_ADD&&w.deleteByIndex(V),mt&&mt.$changes&&et.removeRef(mt.$changes.refId),Z=null),nt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var bt={offset:x.offset};x.offset<Dt&&!(fe(p,x)&&(bt.offset=x.offset+1,et.refs.has(Pt(p,bt))));)x.offset++;continue}else if(H!==e.OPERATION.DELETE)if(v.is(ct)){var gt=Pt(p,x);if(Z=et.refs.get(gt),H!==e.OPERATION.REPLACE){var Nt=this.getSchemaType(p,x,ct);Z||(Z=this.createTypeInstance(Nt),Z.$changes.refId=gt,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&et.removeRef(mt.$changes.refId))),et.addRef(gt,Z,Z!==mt)}}else if(typeof ct=="string")Z=Me(ct,p,x);else{var ze=b(Object.keys(ct)[0]),be=Pt(p,x),Ge=et.refs.has(be)?mt||et.refs.get(be):new ze.constructor;if(Z=Ge.clone(!0),Z.$changes.refId=be,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&be!==mt.$changes.refId)){et.removeRef(mt.$changes.refId);for(var Qt=mt.entries(),It=void 0;(It=Qt.next())&&!It.done;){var pi=It.value,pe=pi[0],Nn=pi[1];G.push({refId:be,op:e.OPERATION.DELETE,field:pe,value:void 0,previousValue:Nn})}}et.addRef(be,Z,Ge!==mt)}if(Z!=null){if(Z.$changes&&Z.$changes.setParent(U.ref,U.root,V),w instanceof v)w[nt]=Z;else if(w instanceof h){var pe=Ut;w.$items.set(pe,Z),w.$changes.allChanges.add(V)}else if(w instanceof E)w.setAt(V,Z);else if(w instanceof Jt){var Un=w.add(Z);w.setIndex(V,Un)}else if(w instanceof ft){var Un=w.add(Z);Un!==!1&&w.setIndex(V,Un)}}mt!==Z&&G.push({refId:At,op:H,field:nt,dynamicIndex:Ut,value:Z,previousValue:mt})}return this._triggerChanges(G),et.garbageCollectDeletedRefs(),G},v.prototype.encode=function(p,x,w){p===void 0&&(p=!1),x===void 0&&(x=[]),w===void 0&&(w=!1);for(var G=this.$changes,et=new WeakSet,Dt=[G],At=1,he=0;he<At;he++){var A=Dt[he],U=A.ref,W=U instanceof v;A.ensureRefId(),et.add(A),A!==G&&(A.changed||p)&&(Q(x,r),_e(x,A.refId));for(var H=p?Array.from(A.allChanges):Array.from(A.changes.values()),V=0,nt=H.length;V<nt;V++){var ct=p?{op:e.OPERATION.ADD,index:H[V]}:H[V],Z=ct.index,mt=W?U._definition.fieldsByIndex&&U._definition.fieldsByIndex[Z]:Z,Ut=x.length;if(ct.op!==e.OPERATION.TOUCH)if(W)Q(x,Z|ct.op);else{if(Q(x,ct.op),ct.op===e.OPERATION.CLEAR)continue;_e(x,Z)}if(!W&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&U instanceof h){var bt=A.ref.$indexes.get(Z);$(x,bt)}if(ct.op!==e.OPERATION.DELETE){var gt=A.getType(Z),Nt=A.getValue(Z);if(Nt&&Nt.$changes&&!et.has(Nt.$changes)&&(Dt.push(Nt.$changes),Nt.$changes.ensureRefId(),At++),ct.op!==e.OPERATION.TOUCH){if(v.is(gt))kt(Nt,gt,U,mt),_e(x,Nt.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(x,gt,Nt.constructor);else if(typeof gt=="string")ye(gt,x,Nt,U,mt);else{var ze=b(Object.keys(gt)[0]);kt(U["_".concat(mt)],ze.constructor,U,mt),_e(x,Nt.$changes.refId)}w&&A.cache(Z,x.slice(Ut))}}}!p&&!w&&A.discard()}return x},v.prototype.encodeAll=function(p){return this.encode(!0,[],p)},v.prototype.applyFilters=function(p,x){var w,G;x===void 0&&(x=!1);for(var et=this,Dt=new Set,At=k.get(p),he=[this.$changes],A=1,U=[],W=function(V){var nt=he[V];if(Dt.has(nt.refId))return"continue";var ct=nt.ref,Z=ct instanceof v;Q(U,r),_e(U,nt.refId);var mt=At.refIds.has(nt),Ut=x||!mt;At.addRefId(nt);var bt=At.containerIndexes.get(nt),gt=Ut?Array.from(nt.allChanges):Array.from(nt.changes.values());if(!x&&Z&&ct._definition.indexesWithFilters){var Nt=ct._definition.indexesWithFilters;Nt.forEach(function(qn){!bt.has(qn)&&nt.allChanges.has(qn)&&(Ut?gt.push(qn):gt.push({op:e.OPERATION.ADD,index:qn}))})}for(var ze=0,be=gt.length;ze<be;ze++){var Ge=Ut?{op:e.OPERATION.ADD,index:gt[ze]}:gt[ze];if(Ge.op===e.OPERATION.CLEAR){Q(U,Ge.op);continue}var Qt=Ge.index;if(Ge.op===e.OPERATION.DELETE){Z?Q(U,Ge.op|Qt):(Q(U,Ge.op),_e(U,Qt));continue}var It=nt.getValue(Qt),pi=nt.getType(Qt);if(Z){var pe=ct._definition.filters&&ct._definition.filters[Qt];if(pe&&!pe.call(ct,p,It,et)){It&&It.$changes&&Dt.add(It.$changes.refId);continue}}else{var Nn=nt.parent,pe=nt.getChildrenFilter();if(pe&&!pe.call(Nn,p,ct.$indexes.get(Qt),It,et)){It&&It.$changes&&Dt.add(It.$changes.refId);continue}}if(It.$changes&&(he.push(It.$changes),A++),Ge.op!==e.OPERATION.TOUCH)if(Ge.op===e.OPERATION.ADD||Z)U.push.apply(U,(w=nt.caches[Qt])!==null&&w!==void 0?w:[]),bt.add(Qt);else if(bt.has(Qt))U.push.apply(U,(G=nt.caches[Qt])!==null&&G!==void 0?G:[]);else{if(bt.add(Qt),Q(U,e.OPERATION.ADD),_e(U,Qt),ct instanceof h){var Un=nt.ref.$indexes.get(Qt);$(U,Un)}It.$changes?_e(U,It.$changes.refId):Bt[pi](U,It)}else if(It.$changes&&!Z){if(Q(U,e.OPERATION.ADD),_e(U,Qt),ct instanceof h){var Un=nt.ref.$indexes.get(Qt);$(U,Un)}_e(U,It.$changes.refId)}}},H=0;H<A;H++)W(H);return U},v.prototype.clone=function(){var p,x=new this.constructor,w=this._definition.schema;for(var G in w)typeof this[G]=="object"&&typeof((p=this[G])===null||p===void 0?void 0:p.clone)=="function"?x[G]=this[G].clone():x[G]=this[G];return x},v.prototype.toJSON=function(){var p=this._definition.schema,x=this._definition.deprecated,w={};for(var G in p)!x[G]&&this[G]!==null&&typeof this[G]<"u"&&(w[G]=typeof this[G].toJSON=="function"?this[G].toJSON():this["_".concat(G)]);return w},v.prototype.discardAllChanges=function(){this.$changes.discardAll()},v.prototype.getByIndex=function(p){return this[this._definition.fieldsByIndex[p]]},v.prototype.deleteByIndex=function(p){this[this._definition.fieldsByIndex[p]]=void 0},v.prototype.tryEncodeTypeId=function(p,x,w){x._typeid!==w._typeid&&(Q(p,c),_e(p,w._typeid))},v.prototype.getSchemaType=function(p,x,w){var G;return p[x.offset]===c&&(x.offset++,G=this.constructor._context.get(Pt(p,x))),G||w},v.prototype.createTypeInstance=function(p){var x=new p;return x.$changes.root=this.$changes.root,x},v.prototype._triggerChanges=function(p){for(var x,w,G,et,Dt,At,he,A,U,W=new Set,H=this.$changes.root.refs,V=function(ct){var Z=p[ct],mt=Z.refId,Ut=H.get(mt),bt=Ut.$callbacks;if((Z.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&Z.previousValue instanceof v&&((w=(x=Z.previousValue.$callbacks)===null||x===void 0?void 0:x[e.OPERATION.DELETE])===null||w===void 0||w.forEach(function(gt){return gt()})),!bt)return"continue";if(Ut instanceof v){if(!W.has(mt))try{(G=bt==null?void 0:bt[e.OPERATION.REPLACE])===null||G===void 0||G.forEach(function(gt){return gt()})}catch(gt){v.onError(gt)}try{bt.hasOwnProperty(Z.field)&&((et=bt[Z.field])===null||et===void 0||et.forEach(function(gt){return gt(Z.value,Z.previousValue)}))}catch(gt){v.onError(gt)}}else Z.op===e.OPERATION.ADD&&Z.previousValue===void 0?(Dt=bt[e.OPERATION.ADD])===null||Dt===void 0||Dt.forEach(function(gt){var Nt;return gt(Z.value,(Nt=Z.dynamicIndex)!==null&&Nt!==void 0?Nt:Z.field)}):Z.op===e.OPERATION.DELETE?Z.previousValue!==void 0&&((At=bt[e.OPERATION.DELETE])===null||At===void 0||At.forEach(function(gt){var Nt;return gt(Z.previousValue,(Nt=Z.dynamicIndex)!==null&&Nt!==void 0?Nt:Z.field)})):Z.op===e.OPERATION.DELETE_AND_ADD&&(Z.previousValue!==void 0&&((he=bt[e.OPERATION.DELETE])===null||he===void 0||he.forEach(function(gt){var Nt;return gt(Z.previousValue,(Nt=Z.dynamicIndex)!==null&&Nt!==void 0?Nt:Z.field)})),(A=bt[e.OPERATION.ADD])===null||A===void 0||A.forEach(function(gt){var Nt;return gt(Z.value,(Nt=Z.dynamicIndex)!==null&&Nt!==void 0?Nt:Z.field)})),Z.value!==Z.previousValue&&((U=bt[e.OPERATION.REPLACE])===null||U===void 0||U.forEach(function(gt){var Nt;return gt(Z.value,(Nt=Z.dynamicIndex)!==null&&Nt!==void 0?Nt:Z.field)}));W.add(mt)},nt=0;nt<p.length;nt++)V(nt)},v._definition=D.create(),v}();function Ke(v){for(var p=[v.$changes],x=1,w={},G=w,et=function(At){var he=p[At];he.changes.forEach(function(A){var U=he.ref,W=A.index,H=U._definition?U._definition.fieldsByIndex[W]:U.$indexes.get(W);G[H]=he.getValue(W)})},Dt=0;Dt<x;Dt++)et(Dt);return w}var ue={context:new R},qe=function(v){i(p,v);function p(){return v!==null&&v.apply(this,arguments)||this}return s([S("string",ue)],p.prototype,"name",void 0),s([S("string",ue)],p.prototype,"type",void 0),s([S("number",ue)],p.prototype,"referencedType",void 0),p}(ge),dn=function(v){i(p,v);function p(){var x=v!==null&&v.apply(this,arguments)||this;return x.fields=new E,x}return s([S("number",ue)],p.prototype,"id",void 0),s([S([qe],ue)],p.prototype,"fields",void 0),p}(ge),Co=function(v){i(p,v);function p(){var x=v!==null&&v.apply(this,arguments)||this;return x.types=new E,x}return p.encode=function(x){var w,G=x.constructor,et=new p;et.rootType=G._typeid;var Dt=function(U,W){for(var H in W){var V=new qe;V.name=H;var nt=void 0;if(typeof W[H]=="string")nt=W[H];else{var ct=W[H],Z=void 0;ge.is(ct)?(nt="ref",Z=W[H]):(nt=Object.keys(ct)[0],typeof ct[nt]=="string"?nt+=":"+ct[nt]:Z=ct[nt]),V.referencedType=Z?Z._typeid:-1}V.type=nt,U.fields.push(V)}et.types.push(U)},At=(w=G._context)===null||w===void 0?void 0:w.types;for(var he in At){var A=new dn;A.id=Number(he),Dt(A,At[he]._definition.schema)}return et.encodeAll()},p.decode=function(x,w){var G=new R,et=new p;et.decode(x,w);var Dt=et.types.reduce(function(W,H){var V=function(ct){i(Z,ct);function Z(){return ct!==null&&ct.apply(this,arguments)||this}return Z}(ge),nt=H.id;return W[nt]=V,G.add(V,nt),W},{});et.types.forEach(function(W){var H=Dt[W.id];W.fields.forEach(function(V){var nt;if(V.referencedType!==void 0){var ct=V.type,Z=Dt[V.referencedType];if(!Z){var mt=V.type.split(":");ct=mt[0],Z=mt[1]}ct==="ref"?S(Z,{context:G})(H.prototype,V.name):S((nt={},nt[ct]=Z,nt),{context:G})(H.prototype,V.name)}else S(V.type,{context:G})(H.prototype,V.name)})});var At=Dt[et.rootType],he=new At;for(var A in At._definition.schema){var U=At._definition.schema[A];typeof U!="string"&&(he[A]=typeof U=="function"?new U:new(b(Object.keys(U)[0])).constructor)}return he},s([S([dn],ue)],p.prototype,"types",void 0),s([S("number",ue)],p.prototype,"rootType",void 0),p}(ge);M("map",{constructor:h}),M("array",{constructor:E}),M("set",{constructor:ft}),M("collection",{constructor:Jt}),e.ArraySchema=E,e.CollectionSchema=Jt,e.Context=R,e.MapSchema=h,e.Reflection=Co,e.ReflectionField=qe,e.ReflectionType=dn,e.Schema=ge,e.SchemaDefinition=D,e.SetSchema=ft,e.decode=Re,e.defineTypes=tt,e.deprecated=q,e.dumpChanges=Ke,e.encode=Bt,e.filter=L,e.filterChildren=X,e.hasFilter=C,e.registerType=M,e.type=S})})(Bc,Bc.exports);var lu=Bc.exports,Jv=Fe&&Fe.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),Qv=Fe&&Fe.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),tx=Fe&&Fe.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&Jv(t,o,e);return Qv(t,o),t};Object.defineProperty(wo,"__esModule",{value:!0});wo.Room=void 0;const Jh=tx(Ys),ex=na,nn=Qc,Qh=ss,nx=Ao,_r=qs,yn=lu,td=ea;class tl{constructor(t,e){this.onStateChange=(0,_r.createSignal)(),this.onError=(0,_r.createSignal)(),this.onLeave=(0,_r.createSignal)(),this.onJoin=(0,_r.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,nx.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,Qh.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const s=new ex.Connection;n.connection=s,s.events.onmessage=tl.prototype.onMessageCallback.bind(n),s.events.onclose=function(a){var r;if(!n.hasJoined){(r=console.warn)===null||r===void 0||r.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===td.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},s.events.onerror=function(a){var r;(r=console.warn)===null||r===void 0||r.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},s.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([nn.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(td.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[nn.Protocol.ROOM_DATA];typeof t=="string"?yn.encode.string(n,t):yn.encode.number(n,t);let i;if(e!==void 0){const s=Jh.encode(e);i=new Uint8Array(n.length+s.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(s),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[nn.Protocol.ROOM_DATA_BYTES];typeof t=="string"?yn.encode.string(n,t):yn.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===nn.Protocol.JOIN_ROOM){let i=1;const s=(0,nn.utf8Read)(e,i);if(i+=(0,nn.utf8Length)(s),this.serializerId=(0,nn.utf8Read)(e,i),i+=(0,nn.utf8Length)(this.serializerId),!this.serializer){const a=(0,Qh.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([nn.Protocol.JOIN_ROOM])}else if(n===nn.Protocol.ERROR){const i={offset:1},s=yn.decode.number(e,i),a=yn.decode.string(e,i);this.onError.invoke(s,a)}else if(n===nn.Protocol.LEAVE_ROOM)this.leave();else if(n===nn.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(yn.decode.number(e,i)),r=new a;r.decode(e,i),this.dispatchMessage(a,r)}else if(n===nn.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===nn.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===nn.Protocol.ROOM_DATA){const i={offset:1},s=yn.decode.stringCheck(e,i)?yn.decode.string(e,i):yn.decode.number(e,i),a=e.length>i.offset?Jh.decode(t.data,i.offset):void 0;this.dispatchMessage(s,a)}else if(n===nn.Protocol.ROOM_DATA_BYTES){const i={offset:1},s=yn.decode.stringCheck(e,i)?yn.decode.string(e,i):yn.decode.number(e,i);this.dispatchMessage(s,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}wo.Room=tl;var sa={};function ed(o,t){t.headers=o.headers||{},t.statusMessage=o.statusText,t.statusCode=o.status,t.data=o.response}function Xn(o,t,e){return new Promise(function(n,i){e=e||{};var s=new XMLHttpRequest,a,r,c,l=e.body,d=e.headers||{};e.timeout&&(s.timeout=e.timeout),s.ontimeout=s.onerror=function(u){u.timeout=u.type=="timeout",i(u)},s.open(o,t.href||t),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),ed(s,s);r=c.shift();)r=r.split(": "),s.headers[r.shift().toLowerCase()]=r.join(": ");if(r=s.headers["content-type"],r&&~r.indexOf("application/json"))try{s.data=JSON.parse(s.data,e.reviver)}catch(u){return ed(s,u),i(u)}(s.status>=400?i:n)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(d["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!e.withCredentials;for(a in d)s.setRequestHeader(a,d[a]);s.send(l)})}var ix=Xn.bind(Xn,"GET"),sx=Xn.bind(Xn,"POST"),ox=Xn.bind(Xn,"PATCH"),rx=Xn.bind(Xn,"DELETE"),ax=Xn.bind(Xn,"PUT");const cx=Object.freeze(Object.defineProperty({__proto__:null,del:rx,get:ix,patch:ox,post:sx,put:ax,send:Xn},Symbol.toStringTag,{value:"Module"})),lx=Ov(cx);var hx=Fe&&Fe.__createBinding||(Object.create?function(o,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(o,n,i)}:function(o,t,e,n){n===void 0&&(n=e),o[n]=t[e]}),dx=Fe&&Fe.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),ux=Fe&&Fe.__importStar||function(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var e in o)e!=="default"&&Object.prototype.hasOwnProperty.call(o,e)&&hx(t,o,e);return dx(t,o),t};Object.defineProperty(sa,"__esModule",{value:!0});sa.HTTP=void 0;const fx=ea,px=ux(lx);class mx{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return px[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var s;const a=i.statusCode,r=((s=i.data)===null||s===void 0?void 0:s.error)||i.statusMessage||i.message;throw!a&&!r?i:new fx.ServerError(a,r)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}sa.HTTP=mx;var To={},Di={};Object.defineProperty(Di,"__esModule",{value:!0});Di.getItem=Di.removeItem=Di.setItem=void 0;let ho;function el(){if(!ho)try{ho=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return ho||(ho={cache:{},setItem:function(o,t){this.cache[o]=t},getItem:function(o){this.cache[o]},removeItem:function(o){delete this.cache[o]}}),ho}function gx(o,t){el().setItem(o,t)}Di.setItem=gx;function _x(o){el().removeItem(o)}Di.removeItem=_x;function vx(o,t){const e=el().getItem(o);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Di.getItem=vx;var Gi=Fe&&Fe.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(d){try{l(n.next(d))}catch(u){a(u)}}function c(d){try{l(n.throw(d))}catch(u){a(u)}}function l(d){d.done?s(d.value):i(d.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},Cs=Fe&&Fe.__classPrivateFieldGet||function(o,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(o):n?n.value:t.get(o)},uo=Fe&&Fe.__classPrivateFieldSet||function(o,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},Tr,kc,Ei,Cr;Object.defineProperty(To,"__esModule",{value:!0});To.Auth=void 0;const Ka=Di,xx=Ao;class yx{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},Tr.set(this,!1),kc.set(this,void 0),Ei.set(this,void 0),Cr.set(this,(0,xx.createNanoEvents)()),(0,Ka.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Cs(this,Cr,"f").on("change",t);return Cs(this,Tr,"f")||uo(this,kc,new Promise((n,i)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),uo(this,Tr,!0,"f"),e}getUserData(){return Gi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Gi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return Gi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Gi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Gi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Gi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const s=e.width||480,a=e.height||768,r=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${r}`),d=screen.width/2-s/2,u=screen.height/2-a/2;uo(this,Ei,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+a+", top="+u+", left="+d),"f");const m=_=>{_.data.user===void 0&&_.data.token===void 0||(clearInterval(g),Cs(this,Ei,"f").close(),uo(this,Ei,void 0,"f"),window.removeEventListener("message",m),_.data.error!==void 0?i(_.data.error):(n(_.data),this.emitChange(_.data)))},g=setInterval(()=>{(!Cs(this,Ei,"f")||Cs(this,Ei,"f").closed)&&(uo(this,Ei,void 0,"f"),i("cancelled"),window.removeEventListener("message",m))},200);window.addEventListener("message",m)})})}signOut(){return Gi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Ka.removeItem)(this.settings.key):(0,Ka.setItem)(this.settings.key,t.token)),Cs(this,Cr,"f").emit("change",t)}}To.Auth=yx;Tr=new WeakMap,kc=new WeakMap,Ei=new WeakMap,Cr=new WeakMap;var oa={};Object.defineProperty(oa,"__esModule",{value:!0});oa.discordURLBuilder=void 0;function Mx(o){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=o.hostname.split("."),i=!o.hostname.includes("trycloudflare.com")&&!o.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return o.pathname.startsWith("/.proxy")?`${o.protocol}//${e}${i}${o.pathname}${o.search}`:`${o.protocol}//${e}/.proxy/colyseus${i}${o.pathname}${o.search}`}oa.discordURLBuilder=Mx;var $n=Fe&&Fe.__awaiter||function(o,t,e,n){function i(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function r(d){try{l(n.next(d))}catch(u){a(u)}}function c(d){try{l(n.throw(d))}catch(u){a(u)}}function l(d){d.done?s(d.value):i(d.value).then(r,c)}l((n=n.apply(o,t||[])).next())})},Ja;Object.defineProperty(Xs,"__esModule",{value:!0});Xs.Client=Xs.MatchMakeError=void 0;const Ex=ea,bx=wo,Sx=sa,wx=To,Ax=oa;class ra extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,ra.prototype)}}Xs.MatchMakeError=ra;const nd=typeof window<"u"&&typeof((Ja=window==null?void 0:window.location)===null||Ja===void 0?void 0:Ja.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Tx{constructor(t=nd,e){var n,i;if(typeof t=="string"){const s=t.startsWith("/")?new URL(t,nd):new URL(t),a=s.protocol==="https:"||s.protocol==="wss:",r=Number(s.port||(a?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:r,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new Sx.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new wx.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=Ax.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return $n(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return $n(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return $n(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return $n(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return $n(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return $n(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return $n(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const s={sessionId:i.sessionId};t.reconnectionToken&&(s.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,s),t.devMode&&(()=>$n(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let r=0,c=8;const l=()=>$n(this,void 0,void 0,function*(){r++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{r<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((r,c)=>{const l=(d,u)=>c(new Ex.ServerError(d,u));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),r(a)})})})}createMatchMakeRequest(t,e,n={},i,s){return $n(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new ra(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,s)})}createRoom(t,e){return new bx.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Xs.Client=Tx;var aa={};Object.defineProperty(aa,"__esModule",{value:!0});aa.SchemaSerializer=void 0;const id=lu;class Cx{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new id.Reflection().decode(t,e):this.state=id.Reflection.decode(t,e)}}aa.SchemaSerializer=Cx;var ca={};Object.defineProperty(ca,"__esModule",{value:!0});ca.NoneSerializer=void 0;class Rx{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}ca.NoneSerializer=Rx;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.SchemaSerializer=o.registerSerializer=o.Auth=o.Room=o.ErrorCode=o.Protocol=o.MatchMakeError=o.Client=void 0;var t=Xs;Object.defineProperty(o,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(o,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=Qc;Object.defineProperty(o,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(o,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=wo;Object.defineProperty(o,"Room",{enumerable:!0,get:function(){return n.Room}});var i=To;Object.defineProperty(o,"Auth",{enumerable:!0,get:function(){return i.Auth}});const s=aa;Object.defineProperty(o,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const a=ca,r=ss;Object.defineProperty(o,"registerSerializer",{enumerable:!0,get:function(){return r.registerSerializer}}),(0,r.registerSerializer)("schema",s.SchemaSerializer),(0,r.registerSerializer)("none",a.NoneSerializer)})(ru);class Px{constructor(t,e){I(this,"group");I(this,"head");I(this,"body");I(this,"leftArm");I(this,"rightArm");I(this,"leftLeg");I(this,"rightLeg");I(this,"label");I(this,"healthBar");I(this,"targetPos",new B);I(this,"targetRotY",0);I(this,"targetRotX",0);I(this,"health",20);I(this,"maxHealth",20);I(this,"walkCycle",0);I(this,"prevPos",new B);I(this,"dead",!1);I(this,"name");this.name=e,this.group=new me,this.prevPos.copy(this.group.position);let n=0;for(let L=0;L<e.length;L++)n=n*31+e.charCodeAt(L)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],s=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],r=i[n%i.length],c=s[(n>>3)%s.length],l=a[(n>>6)%a.length],d=3351057,u=s[(n>>9)%s.length],m=()=>new Oe({color:r}),g=()=>new Oe({color:c}),_=()=>new Oe({color:l}),E=()=>new Oe({color:d}),f=(L,X,q,tt,F=0)=>{const Y=new me,K=new Ce(L,X,q),Q=new te(K,tt);return Q.position.y=-X/2+F,Y.add(Q),Y},h=new Ce(.5,.5,.5);this.head=new te(h,m()),this.head.position.y=.25;const y=new Ce(.52,.52,.52),M=new Oe({color:u,transparent:!0,opacity:.35}),b=new te(y,M);this.head.add(b);const D=new Ce(.6,.75,.35);this.body=new te(D,g()),this.body.position.y=-.375,this.leftArm=f(.25,.65,.25,g(),0),this.rightArm=f(.25,.65,.25,g(),0);const C=new te(new Ce(.24,.3,.24),m());C.position.y=-.5,this.leftArm.children[0].add(C);const R=C.clone();this.rightArm.children[0].add(R),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=f(.27,.7,.27,_(),0),this.rightLeg=f(.27,.7,.27,_(),0);const z=new te(new Ce(.28,.22,.28),E());z.position.y=-.5,this.leftLeg.children[0].add(z);const S=z.clone();this.rightLeg.children[0].add(S),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const s=new Ws(e),a=new Fr({map:s,transparent:!0,depthTest:!1}),r=new Pc(a);return r.scale.set(1.6,.35,1),r}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Ws(t),i=new Fr({map:n,transparent:!0,depthTest:!1}),s=new Pc(i);return s.scale.set(1.2,.15,1),s}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,s=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*s,this.group.position.y+=(n-this.group.position.y)*s,this.group.position.z+=(i-this.group.position.z)*s;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const r=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(r*r+c*c);this.prevPos.copy(this.group.position);const d=l/t;d>.2?this.walkCycle+=t*Math.min(d,8)*1.8:this.walkCycle*=.8;const u=Math.sin(this.walkCycle),m=.65;this.leftLeg.rotation.x=u*m,this.rightLeg.rotation.x=-u*m,this.leftArm.rotation.x=-u*m,this.rightArm.rotation.x=u*m,this.body.position.y=-.375+Math.abs(u)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class Lx{constructor(t,e,n,i){I(this,"client");I(this,"room",null);I(this,"players",new Map);I(this,"scene");I(this,"world");I(this,"cb");I(this,"mobs",null);I(this,"moveInterval",null);I(this,"getLocalState");I(this,"_playerName","");I(this,"_reconnectDelay",2e3);this.scene=t,this.world=e,this.cb=n;const s=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!s?"wss":"ws";this.client=new ru.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this._playerName=t,this._reconnectDelay=2e3,await this._doJoin()}async _doJoin(){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:this._playerName}),this.cb.onStatusChange("connected"),this._reconnectDelay=2e3,this.setupHandlers(),this.startSendPosition()}catch(t){console.error("[MP] Connection failed:",t),this.cb.onStatusChange("disconnected"),this._scheduleReconnect()}}_scheduleReconnect(){const t=this._reconnectDelay;this._reconnectDelay=Math.min(this._reconnectDelay*2,3e4),console.log(`[MP] Reconnecting in ${t}ms...`),setTimeout(()=>this._doJoin(),t)}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new Px(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const s=this.players.get(e);s&&(s.targetPos.set(t.x,t.y,t.z),s.targetRotY=t.rotY,s.targetRotX=t.rotX,s.group.visible=t.gameMode!=="spectator",s.health!==t.health&&(s.setHealth(t.health),t.health<=0&&!s.dead&&s.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition(),this._scheduleReconnect()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var s;(s=this.room)==null||s.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}getOnlinePlayerNames(){const t=[];for(const[,e]of this.players)e.name&&t.push(e.name);return t}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const Qa={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036};class sd{constructor(t,e){I(this,"group");I(this,"bodyMeshes",[]);I(this,"legs",[]);I(this,"arms",[]);I(this,"headGroup");I(this,"hpSprite");I(this,"id");I(this,"type");I(this,"health");I(this,"maxHealth");I(this,"alive",!0);I(this,"state","idle");I(this,"targetPos",new B);I(this,"targetRotY",0);I(this,"walkCycle",0);I(this,"prevPos",new B);switch(this.group=new me,this.headGroup=new me,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Oe({color:t,transparent:e,opacity:n})}box(t,e,n,i){const s=new te(new Ce(t,e,n),this.mat(i));return this.bodyMeshes.push(s),s}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.72,.66,.66,16361640);s.position.y=0,this.headGroup.add(s);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const r=a.clone();r.position.x=.2,this.headGroup.add(a,r);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const d=l.clone();d.position.x=.1,this.headGroup.add(d);const u=this.box(.18,.2,.1,15757424);u.position.set(-.28,.4,.1),this.headGroup.add(u);const m=u.clone();m.position.x=.28,this.headGroup.add(m),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const g=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[_,E]of g){const f=new me,h=this.box(.3,.48,.3,16361640);h.position.y=-.24;const y=this.box(.3,.14,.3,7816260);y.position.y=-.48-.07,f.add(h,y),f.position.set(_,0,E),this.group.add(f),this.legs.push(f)}}buildZombie(){const s=this.box(.6,.8,.35,2771498);s.position.y=-.05,this.group.add(s);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const r=this.box(.1,.1,.05,16720384);r.position.set(-.12,.05,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=u=>{const m=new me,g=this.box(.26,.55,.26,2771498);g.position.y=-.275;const _=this.box(.24,.45,.24,7846775);return _.position.y=-.55-.225,m.add(g,_),m.position.set(u*.43,.2,0),m.rotation.x=-Math.PI/2.2,this.group.add(m),this.arms.push(m),m};l(-1),l(1);const d=u=>{const m=new me,g=this.box(.26,.6,.26,1715738);g.position.y=-.3;const _=this.box(.26,.24,.28,1708040);return _.position.y=-.6-.12,m.add(g,_),m.position.set(u*.175,-.45,0),this.group.add(m),this.legs.push(m),m};d(-1),d(1)}buildChicken(){const s=this.box(.55,.6,.7,16777215);s.scale.set(1,1.1,1.3),s.position.y=.35,this.group.add(s);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const r=this.box(.12,.22,.12,14492194);r.position.set(0,.3,.02),this.headGroup.add(r);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const d of[-1,1]){const u=new me,m=this.box(.12,.45,.5,16777215);m.position.y=-.225,u.add(m),u.position.set(d*.34,.35,0),u.rotation.z=-d*.2,this.group.add(u),this.arms.push(u)}for(const d of[-1,1]){const u=new me,m=this.box(.1,.4,.1,16763904);m.position.y=-.2;const g=this.box(.25,.06,.18,16763904);g.position.set(.05,-.43,.06),u.add(m,g),u.position.set(d*.14,.05,0),this.group.add(u),this.legs.push(u)}}buildCow(){const s=this.box(1.1,.85,1.5,8014378);s.position.set(0,.5,0),this.group.add(s);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const r=this.box(.76,.7,.72,8014378);this.headGroup.add(r);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const d=l.clone();d.position.x=.12,this.headGroup.add(d);const u=this.box(.14,.14,.05,1118481);u.position.set(-.28,.14,.37),this.headGroup.add(u);const m=u.clone();m.position.x=.28,this.headGroup.add(m);const g=this.box(.1,.28,.1,14540253);g.position.set(-.3,.44,.04),this.headGroup.add(g);const _=g.clone();_.position.x=.3,this.headGroup.add(_);const E=this.box(.22,.16,.1,8014378);E.position.set(-.44,.26,.06),this.headGroup.add(E);const f=E.clone();f.position.x=.44,this.headGroup.add(f),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const h=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[M,b]of h){const D=new me,C=this.box(.34,.55,.34,8014378);C.position.y=-.275;const R=this.box(.34,.15,.36,2236962);R.position.y=-.55-.075,D.add(C,R),D.position.set(M,0,b),this.group.add(D),this.legs.push(D)}const y=this.box(.44,.2,.44,16765120);y.position.set(0,-.08,.1),this.group.add(y)}buildSheep(){const s=this.box(1,.95,1.35,14540253);s.position.set(0,.55,0),this.group.add(s);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const r=this.box(.8,.55,.55,14540253);r.position.set(0,.72,.5),this.group.add(r);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const d=this.box(.1,.1,.05,2236962);d.position.set(-.2,.1,.3),this.headGroup.add(d);const u=d.clone();u.position.x=.2,this.headGroup.add(u);const m=this.box(.52,.3,.5,14540253);m.position.set(0,.38,-.04),this.headGroup.add(m);const g=this.box(.1,.24,.18,8943462);g.position.set(-.34,.1,0),this.headGroup.add(g);const _=g.clone();_.position.x=.34,this.headGroup.add(_),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const E=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[f,h]of E){const y=new me,M=this.box(.28,.52,.28,8943462);M.position.y=-.26;const b=this.box(.28,.14,.3,3355443);b.position.y=-.52-.07,y.add(M,b),y.position.set(f,0,h),this.group.add(y),this.legs.push(y)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const s=this.box(.12,.14,.08,2775578);s.position.set(-.2,.1,.46),this.headGroup.add(s);const a=s.clone();a.position.x=.2,this.headGroup.add(a);const r=this.box(.12,.12,.08,2775578);r.position.set(-.2,-.15,.46),this.headGroup.add(r);const c=r.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[d,u]of l){const m=new me,g=this.box(.28,.58,.28,4885034);g.position.y=-.29,m.add(g),m.position.set(d,0,u),this.group.add(m),this.legs.push(m)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const s=i.clone();s.position.x=.1,this.headGroup.add(s);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const r=a.clone();r.position.x=.1,this.headGroup.add(r),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new me,d=this.box(.15,.5,.15,13421772);d.position.y=-.25;const u=this.box(.12,.45,.12,13421772);u.position.y=-.55-.225,l.add(d,u),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new me,d=this.box(.15,.55,.15,13421772);d.position.y=-.275;const u=this.box(.13,.5,.13,13421772);u.position.y=-.55-.25,l.add(d,u),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const s=this.box(.08*1.3,.08*1.3,.05*1.3,17663);s.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=s.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(s);const r=s.clone();r.position.x=.1*1.3,this.headGroup.add(r);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const d of[-1,1]){const u=new me,m=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);m.position.y=-.25*1.3;const g=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(g.position.y=-.55*1.3-.225*1.3,u.add(m,g),d===1){const _=this.box(.10400000000000001,.52,.195,8421504);_.position.set(.12*1.3,-.55*1.3,0),u.add(_)}u.position.set(d*.38*1.3,.2*1.3,0),this.group.add(u),this.arms.push(u)}for(const d of[-1,1]){const u=new me,m=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);m.position.y=-.275*1.3;const g=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);g.position.y=-.55*1.3-.25*1.3,u.add(m,g),u.position.set(d*.15*1.3,-.45*1.3,0),this.group.add(u),this.legs.push(u)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const s=this.box(.1,.1,.05,2236962);s.position.set(-.15,.1,.32),this.headGroup.add(s);const a=s.clone();a.position.x=.15,this.headGroup.add(a);const r=this.box(.12,.24,.08,5913130);r.position.set(-.18,.32,.1),this.headGroup.add(r);const c=r.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new te(new Zr(.3,.5),new Oe({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const d=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[u,m]of d){const g=new me,_=this.box(.2,.7,.2,13149294);_.position.y=-.35,g.add(_),g.position.set(u,.1,m),this.group.add(g),this.legs.push(g)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const s=this.box(.62,.95,.42,4885050);s.position.y=.22,this.group.add(s);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const r=this.box(.12,.12,.05,2236962);r.position.set(-.15,.08,.26),this.headGroup.add(r);const c=r.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const d of[-1,1]){const u=new me,m=this.box(.26,.5,.26,16764057);m.position.y=-.25;const g=this.box(.24,.45,.24,16764057);g.position.y=-.55-.225,u.add(m,g),u.position.set(d*.4,.3,0),this.group.add(u),this.arms.push(u)}for(const d of[-1,1]){const u=new me,m=this.box(.26,.5,.26,8015658);m.position.y=-.25;const g=this.box(.26,.45,.26,8015658);g.position.y=-.55-.225,u.add(m,g),u.position.set(d*.15,-.5,0),this.group.add(u),this.legs.push(u)}}buildEnderDragon(){const s=this.box(2,1,4,1114146);s.scale.set(1.5,1.5,1.5),s.position.set(0,.6*1.5,0),this.group.add(s);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const r=this.box(.18,.18,.1,16729156);r.position.set(-.3,.15,.65);const c=new Oe({color:16729156,emissive:16729156,emissiveIntensity:.8});r.material=c,this.headGroup.add(r);const l=r.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const d of[-1,1]){const u=this.box(3,.2,2,2228275);u.scale.set(1.5,1.5,1.5),u.position.set(d*2*1.5,.6*1.5,0),this.group.add(u)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const s=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[r,c,l]of s){const d=new te(new Dn(.06,8,8),new Oe({color:16724787}));d.position.set(r,c,l),this.group.add(d),this.bodyMeshes.push(d)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let r=0;r<8;r++){const[c,l,d]=a[r],u=new me,m=this.box(.1,.08,.6,3355443);m.position.set(0,0,.3),u.add(m),u.position.set(c,l,d),u.rotation.z=(r<4?-1:1)*Math.PI/4,this.group.add(u),this.legs.push(u)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const s=this.box(.5,.5,.5,8947848);this.headGroup.add(s);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const r=a.clone();r.position.x=.15,this.headGroup.add(a,r);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const d=l.clone();d.position.x=.22,this.headGroup.add(l,d),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const u=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[g,_]of u){const E=new me,f=this.box(.18,.5,.18,8947848);f.position.y=-.25,E.add(f),E.position.set(g,0,_),this.group.add(E),this.legs.push(E)}const m=this.box(.1,.08,.7,8947848);m.position.set(0,.2,-.8),this.group.add(m)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const s=this.box(.4,.4,.35,14518323);this.headGroup.add(s);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const r=a.clone();r.position.x=.12,this.headGroup.add(a,r);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const d=this.box(.06,.06,.04,16751018);d.position.set(0,-.06,.25),this.headGroup.add(d),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const u=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[g,_]of u){const E=new me,f=this.box(.12,.38,.12,14518323);f.position.y=-.19,E.add(f),E.position.set(g,0,_),this.group.add(E),this.legs.push(E)}const m=this.box(.08,.06,.6,14518323);m.position.set(0,.1,-.6),this.group.add(m)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const s=this.box(2,.1,.8,1717060);s.position.set(-1,-.05,0),this.group.add(s);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const r=new te(new Dn(.1,8,8),new Oe({color:4521796,emissive:4521796}));r.position.set(-.3,.1,.8),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const s=new te(new Ce(1.2,1.2,1.2),new Oe({color:4500036,transparent:!0,opacity:.8}));s.position.y=0,this.bodyMeshes.push(s),this.group.add(s);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const r=new te(new Dn(.15,8,8),new Oe({color:16777215}));r.position.set(-.25,.25,.5),this.bodyMeshes.push(r),this.group.add(r);const c=r.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new te(new Dn(.06,8,8),new Oe({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const d=l.clone();d.position.x=.25,this.bodyMeshes.push(d),this.group.add(d)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Ws(t),n=new Fr({map:e,transparent:!0,depthTest:!1}),i=new Pc(n);i.scale.set(1.2,.18,1);const s={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=s[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,s=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=s/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const r=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const d=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=r*c*(d===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(r)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const d=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+d)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=r*.7,this.legs[1].rotation.x=-r*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(r)*.3);this.headGroup.position.y=.72+Math.abs(r)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=r*c,this.legs[1].rotation.x=-r*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const d=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+d)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const d=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+d)*c*.5}this.headGroup.rotation.x=Math.abs(r)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,d=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+d}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,s=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:Qa.creeper;for(const a of this.bodyMeshes)a.material.color.set(s)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=Qa[this.type]??16777215,s=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(s);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,s=Math.min(i/e,1);this.group.rotation.z=s*(Math.PI/2),this.group.position.y=this.targetPos.y-s*.5;const a=1-s*.3;if(this.group.scale.setScalar(a),i%200<100)for(const r of this.bodyMeshes)r.material.color.set(16720418);else{const r=Qa[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(r)}s<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function fn(o,t){return o+Math.random()*(t-o)}function Ix(){return Math.random().toString(36).slice(2,10)}const od=8,Dx=30,rd=60,Ox=-20,Nx=new Ce(.1,.1,.4),Ux=new Oe({color:16768256}),ad=new B,ai=class ai{constructor(t,e,n,i){I(this,"mobs",new Map);I(this,"scene");I(this,"world");I(this,"cb");I(this,"singleplayer");I(this,"arrows",[]);I(this,"dayTime",.5);I(this,"mountedMobId",null);I(this,"onBurnParticle");I(this,"attackCooldown",0);this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,s){const a=s??Ix(),r=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:10,c={id:a,type:t,x:e,y:n,z:i,rotY:fn(0,Math.PI*2),health:r,maxHealth:r,alive:!0,state:"idle"},l=new sd(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=od)return;const n=fn(0,Math.PI*2),i=fn(12,Dx),s=t+Math.cos(n)*i,a=e+Math.sin(n)*i,r=this.dayTime<.25||this.dayTime>.73;let c,l;const d=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(s),Math.round(a)):20,u=Math.round(d)+1,m=this.world.getBlockType?this.world.getBlockType(Math.round(s),u+1,Math.round(a)):void 0,g=d<15||m!==void 0&&m!==0;if(r&&Math.random()<.15)c=20+fn(0,10),l="phantom";else if(c=u+.5,g&&Math.random()<.08)l="slime";else if(g){const _=Math.random();l=_<.3?"zombie":_<.55?"skeleton":_<.75?"spider":_<.9?"creeper":"witherskeleton"}else if(r){const _=Math.random();l=_<.25?"zombie":_<.45?"skeleton":_<.6?"creeper":_<.75?"spider":_<.85?"witherskeleton":_<.9?"pig":_<.95?"cow":"sheep"}else{const _=Math.random();l=_<.25?"pig":_<.45?"chicken":_<.6?"cow":_<.75?"sheep":_<.85?"horse":_<.92?"wolf":"cat"}this.spawnMob(l,s,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const s=new sd(this.scene,n);this.mobs.set(n.id,{data:n,mob:s,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e,n=0){if(this.attackCooldown>0)return null;const i=[],s=new Map;for(const[_,E]of this.mobs)E.mob.alive&&E.mob.group.traverse(f=>{f.isMesh&&(i.push(f),s.set(f,_))});const a=t.intersectObjects(i);if(!a.length)return null;const r=s.get(a[0].object);if(!r)return null;const c=this.mobs.get(r);let l=5;e!=null&&e.sharpness&&(l+=2*e.sharpness),n>0&&(l+=n),c.mob.health-=l,c.mob.showDamage(c.mob.health),c.mob.health<=0&&c.mob.die(),this.attackCooldown=.4;const d=t.ray.origin,u=c.data.x-d.x,m=c.data.z-d.z,g=Math.sqrt(u*u+m*m)||1;return c.data.x+=u/g*2.5,c.data.z+=m/g*2.5,{mobId:r,damage:l}}update(t){var n;this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[i,s]of this.mobs){if(s.hitCooldown>0&&(s.hitCooldown=Math.max(0,s.hitCooldown-t)),s.mob.update(t),!s.mob.alive){if(s.mob._deathTimer===void 0&&(s.mob._deathTimer=1.5),s.mob._deathTimer-=t,s.mob._deathTimer<=0){if(s.data.type==="slime"&&!s.data.isMiniSlime)for(let c=0;c<2;c++){const l=(Math.random()-.5)*2,d=(Math.random()-.5)*2,u={id:`slime_mini_${Date.now()}_${c}`,type:"slime",x:s.data.x+l,y:s.data.y,z:s.data.z+d,rotY:Math.random()*Math.PI*2,state:"idle",health:4,maxHealth:4,isMiniSlime:!0};this.addMob(u,this.scene)}s.mob.dispose(this.scene),this.mobs.delete(i)}continue}if(this.singleplayer&&ai.UNDEAD_TYPES.has(s.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const l=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(s.data.x),Math.round(s.data.z)):20;if(s.data.y>=l-2){if(s.mob.health-=4*t,s.mob.showDamage(s.mob.health),!s.mob.alive){s.mob.die();continue}Math.random()<t*3&&((n=this.onBurnParticle)==null||n.call(this,s.data.x,s.data.y+1,s.data.z))}}if(this.singleplayer){const c=s.mob.targetPos.x-e.x,l=s.mob.targetPos.z-e.z;c*c+l*l<=32*32&&this.runAI(s,t,e)}const a=s.data.x-e.x,r=s.data.z-e.z;a*a+r*r>rd*rd&&(s.mob.dispose(this.scene),this.mobs.delete(i))}for(let i=this.arrows.length-1;i>=0;i--){const s=this.arrows[i];s.life-=t,s.mesh.position.addScaledVector(s.vel,t);const a=s.mesh.position.x-e.x,r=s.mesh.position.y-e.y,c=s.mesh.position.z-e.z;a*a+r*r+c*c<.64?(this.cb.onPlayerDamage(1),this.scene.remove(s.mesh),this.arrows.splice(i,1)):s.life<=0&&(this.scene.remove(s.mesh),this.arrows.splice(i,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<od&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,s){const a=t.data,r=e-a.x,c=n-a.z,l=Math.atan2(r,c);a.rotY=l;const d=Math.sin(l)*.8,u=Math.cos(l)*.8,m=Math.round(a.x+d),g=Math.round(a.z+u),_=Math.round(a.y),E=this.world.getBlockType(m,_,g),f=this.world.getBlockType(m,_+1,g);if(E&&E!==7&&E!==0){if(!f||f===7||f===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0;{const h=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=h,a.x+=Math.sin(h)*i*.5*s,a.z+=Math.cos(h)*i*.5*s,!1}}return a.x+=Math.sin(l)*i*s,a.z+=Math.cos(l)*i*s,!0}runAI(t,e,n){const i=t.data;t.timer-=e;const s=n.x-i.x,a=n.z-i.z,r=s*s+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=Ox*e;const c=Math.round(i.x),l=Math.round(i.z);(c!==t._surfCacheX||l!==t._surfCacheZ)&&(t._surfCacheX=c,t._surfCacheZ=l,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(c,l)+.5:0);const d=t._surfCacheY;if(i.y<=d&&(i.y=d,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const u=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,r,s,a,u)}else i.type==="horse"?this.horseAI(t,e,r,s,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,r,s,a,n):i.type==="creeper"?this.creeperAI(t,e,r,n):i.type==="skeleton"?this.skeletonAI(t,e,r,s,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,r,s,a,n):i.type==="spider"?this.spiderAI(t,e,r,s,a,n):i.type==="wolf"?this.wolfAI(t,e,r,s,a,n):i.type==="cat"?this.catAI(t,e,r,s,a,n):i.type==="slime"&&this.slimeAI(t,e,r,s,a,n)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,s,a){const r=t.data;if(n<25&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const c=r.rotY+Math.PI;r.x+=Math.sin(c)*a*e,r.z+=Math.cos(c)*a*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)):(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e,t.timer<=0&&(r.state="idle",t.timer=fn(2,5)))}horseAI(t,e,n,i,s,a){const r=t.data,c=5;let l=!1;for(const d of this.mobs.values())if(d.data.type==="zombie"||d.data.type==="skeleton"){const u=d.data.x-r.x,m=d.data.z-r.z;if(u*u+m*m<225){l=!0;break}}if(l&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){let d=0,u=0;for(const m of this.mobs.values())if((m.data.type==="zombie"||m.data.type==="skeleton")&&m.data.id!==r.id){d=m.data.x,u=m.data.z;break}(d!==0||u!==0)&&(r.rotY=Math.atan2(r.x-d,r.z-u)),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"?t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)):(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,t.timer<=0&&(r.state="idle",t.timer=fn(2,5)))}zombieAI(t,e,n,i,s,a){const r=t.data,c=2.8;n<144?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,s,1.5)}creeperAI(t,e,n,i){const s=t.data,a=2.5;if(n<100?s.state!=="fusing"&&(s.state="fusing",t.timer=ai.CREEPER_FUSE_TIME):s.state==="fusing"&&(s.state="idle",t.timer=fn(1.5,4),t.mob.setCreeperFuse(0)),s.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const r=1-t.timer/ai.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,r))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(s.state=Math.random()<.5?"walking":"idle",s.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)),s.state==="walking"&&(s.x+=Math.sin(s.rotY)*a*e,s.z+=Math.cos(s.rotY)*a*e)}explode(t,e){const n=t.data,i=5,s=5,a=e.x-n.x,r=e.y-n.y,c=e.z-n.z;a*a+r*r+c*c<s*s&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,s,a){const r=t.data,c=1.8,l=400,d=16,u=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(r.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(r.x,r.y+.5,r.z,a),t.shootTimer=u),n<d){const m=r.rotY+Math.PI;r.x+=Math.sin(m)*c*e,r.z+=Math.cos(m)*c*e}else r.rotY=Math.atan2(i,s);else n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1);r.state!=="attacking"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e))}witherskeletonAI(t,e,n,i,s,a){var u,m;const r=t.data,c=4,l=4,d=400;t.shootTimer=(t.shootTimer??0)-e,n<d?(r.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(m=(u=this.cb).onWitherEffect)==null||m.call(u))):n>625&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state!=="chasing"&&(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.5*e,r.z+=Math.cos(r.rotY)*c*.5*e))}shootArrow(t,e,n,i){const s=new te(Nx,Ux);s.position.set(t,e,n),ad.set(i.x-t,i.y-e,i.z-n).normalize();const r=ad.clone().multiplyScalar(15);this.scene.add(s),this.arrows.push({mesh:s,vel:r,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const s=15,a=i.x+Math.sin(t.timer)*s,r=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*s,l=3;n.x+=(a-n.x)*l*e,n.y+=(r-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,r=i.z-n.z;a*a+r*r<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,s,a){const r=t.data,c=3.5,l=225,d=9,u=3;t.jumpTimer||(t.jumpTimer=0),n<l?(r.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(r.state="idle",t.aggro=!1),r.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<d&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=u),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=fn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*c*.6*e,r.z+=Math.cos(r.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,s=n.x-i.x,a=n.z-i.z;s*s+a*a<100&&(i.rotY=Math.atan2(s,a))}wolfAI(t,e,n,i,s,a){const r=t.data,c=4;if(r.state!=="tamed")if(n<4&&(r.state="fleeing",t.timer=3),r.state==="fleeing"){const l=r.rotY+Math.PI;r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.timer<=0&&(r.state="idle")}else r.state==="idle"&&(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),r.x+=Math.sin(r.rotY)*1.5*e,r.z+=Math.cos(r.rotY)*1.5*e);else{let l=!1;for(const[d,u]of this.mobs){if(!u.mob.alive||!ai.HOSTILE_TYPES.has(u.data.type))continue;const m=u.data.x-r.x,g=u.data.z-r.z,_=m*m+g*g;if(_<64){r.rotY=Math.atan2(m,g),r.x+=Math.sin(r.rotY)*c*1.2*e,r.z+=Math.cos(r.rotY)*c*1.2*e,r.state="following",_<2.25&&(t.hitCooldown??0)<=0&&(u.mob.health-=4,u.mob.showDamage(u.mob.health),u.mob.health<=0&&u.mob.die(),t.hitCooldown=1.5),l=!0;break}}l||(n>25?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e,r.state="following"):r.state="sitting")}}catAI(t,e,n,i,s,a){const r=t.data,c=2.5;r.state!=="tamed"?r.state==="idle"?(t.timer<=0&&(r.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(r.state="sitting")),r.x+=Math.sin(r.rotY)*1*e,r.z+=Math.cos(r.rotY)*1*e):r.state==="sitting"&&t.timer<=0&&(r.state="idle"):n>64?(r.rotY=Math.atan2(i,s),r.x+=Math.sin(r.rotY)*c*e,r.z+=Math.cos(r.rotY)*c*e):r.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,r=n.z-i.z,c=a*a+r*r;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const d of this.mobs.values())if(d.data.type==="cat"&&d.data.state==="tamed"){const u=d.data.x-i.x,m=d.data.z-i.z,g=d.data.y-i.y;if(u*u+m*m+g*g<100){l=!0;break}}if(l){const d=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(d)*8*e,i.z+=Math.cos(d)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const d=Math.atan2(a,r);i.rotY=d,i.x+=Math.sin(d)*12*e,i.z+=Math.cos(d)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=fn(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}slimeAI(t,e,n,i,s,a){const r=t.data,c=4.5;if(n>144){r.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,s);r.rotY=l,r.x+=Math.sin(l)*c*e,r.z+=Math.cos(l)*c*e,t.velY=6,r.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}tryMount(t){for(const[e,n]of this.mobs){if(n.data.type!=="horse"||!n.mob.alive)continue;const i=n.data.x-t.x,s=n.data.z-t.z;if(i*i+s*s<4)return this.mountedMobId=e,n.data.state="mounted",!0}return!1}dismount(){this.mountedMobId=null}updateMount(t,e,n,i){if(!this.mountedMobId)return;const s=this.mobs.get(this.mountedMobId);if(!s||!s.mob.alive){this.mountedMobId=null;return}s.data.x=t.x,s.data.z=t.z,s.data.rotY=e,s.mob.targetPos.set(s.data.x,s.data.y,s.data.z),s.mob.group.position.set(s.data.x,s.data.y,s.data.z)}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};I(ai,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom"])),I(ai,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom"])),I(ai,"CREEPER_FUSE_TIME",1.5);let zr=ai;class Bx{constructor(){I(this,"hotbarEl",document.getElementById("hotbar"));I(this,"topLeftEl",document.getElementById("topLeft"));I(this,"topRightEl",document.getElementById("topRight"));I(this,"connEl",document.getElementById("connStatus"));I(this,"blockNameEl",document.getElementById("blockName"));I(this,"chatMsgsEl",document.getElementById("chatMessages"));I(this,"chatInput",document.getElementById("chatInput"));I(this,"heartsEl",document.getElementById("hearts"));I(this,"hungerEl",document.getElementById("hunger"));I(this,"timeEl",document.getElementById("timeDisplay"));I(this,"gameModeEl",document.getElementById("gameModeEl"));I(this,"deathScreen",document.getElementById("deathScreen"));I(this,"respawnBtn",document.getElementById("respawnBtn"));I(this,"selectedIndex",0);I(this,"gameMode","survival");I(this,"craftingPanel",null);I(this,"inventoryPanel",null);I(this,"xpBarEl",null);I(this,"xpLevelEl",null);I(this,"dayCounterEl",null);I(this,"dayNotifyEl",null);I(this,"_lastLevel",-1);I(this,"_lastDay",-1);I(this,"debugScreenEl",null);I(this,"debugVisible",!1);I(this,"_lastHp",-1);I(this,"_lastMaxHp",-1);I(this,"_lastWither",!1);I(this,"_lastHunger",-1);I(this,"_lastMaxHunger",-1);I(this,"_lastTimeStr","");I(this,"_lastTimeDayTime",-1);I(this,"_lastPosX",NaN);I(this,"_lastPosY",NaN);I(this,"_lastPosZ",NaN);I(this,"_posXEl",null);I(this,"_posYEl",null);I(this,"_posZEl",null);I(this,"onChat");I(this,"onRespawn");I(this,"onCraft");I(this,"onInventorySwap");I(this,"getInvCount");I(this,"tooltipEl",document.getElementById("hotbarTooltip"));I(this,"tooltipTimer",null);I(this,"airBubblesEl",document.getElementById("airBubbles"));I(this,"chatHistory",[]);I(this,"chatHistoryIdx",-1);I(this,"chestPanel",null);I(this,"onChestClose");I(this,"onChestTransfer");I(this,"smeltingPanel",null);I(this,"onSmelt");I(this,"killFeedEl",null);I(this,"playerListPanel",null);I(this,"enchantPanel",null);I(this,"onEnchant",null);I(this,"tradePanel",null);I(this,"onTrade",null);I(this,"bossBarEl",null);I(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,s)=>{const a=i.querySelector(".slot-icon");if(!a)return;const r=t[s]??0;if(r===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+Us(r).toString(16).padStart(6,"0"),a.title=En(r);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[s]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,s)=>{i.classList.toggle("active",s===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,s=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&s===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=s,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=s.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),s=Math.floor(t/2),a=t%2===1;for(let r=0;r<i;r++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),r<s?c.classList.add("full"):r===s&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,s=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const r=this.deathScreen.querySelector(".death-coords");r&&(r.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${s}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),s=t%2===1;for(let a=0;a<n;a++){const r=document.createElement("div");r.className="hunger-icon",a<i?r.classList.add("full"):a===i&&s?r.classList.add("half"):r.classList.add("empty"),this.hungerEl.appendChild(r)}}updateAirSupply(t,e){if(!this.airBubblesEl)return;const n=10,i=Math.round(t/e*n);if(t>=e){this.airBubblesEl.style.display="none";return}this.airBubblesEl.style.display="flex",this.airBubblesEl.innerHTML="";for(let s=0;s<n;s++){const a=document.createElement("span");a.style.cssText=`
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
    `;let i=null;const s=[],a=d=>{const u=s[d];if(!u)return;const m=t[d]??0,g=m===0?"#333333":"#"+Us(m).toString(16).padStart(6,"0");u.style.background=i===d?"#ffee88":g,u.style.border=i===d?"2px solid #ffcc00":"1px solid #1a1a1a",u.title=m===0?"Empty":En(m)};for(let d=0;d<36;d++){const u=document.createElement("div"),m=t[d]??0,g=m===0?"#333333":"#"+Us(m).toString(16).padStart(6,"0");u.style.cssText=`
        width: 24px; height: 24px;
        background: ${g};
        border: 1px solid #1a1a1a;
        border-radius: 1px; cursor: pointer;
        transition: background 0.1s;
        position: relative;
      `,u.title=m===0?"Empty":En(m);const _=t[d]??0;if(_!==0&&this.getInvCount){const f=document.createElement("span");f.style.cssText="position:absolute;bottom:1px;right:2px;font-size:7px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",f.textContent=String(this.getInvCount(_)||""),u.appendChild(f)}s.push(u);const E=d;u.addEventListener("click",()=>{var f;if(i===null)t[E]!==0&&(i=E,a(E));else if(i===E)i=null,a(E);else{const h=t[E];t[E]=t[i],t[i]=h;const y=i;i=null,a(E),a(y),(f=this.onInventorySwap)==null||f.call(this,y,E)}}),u.addEventListener("mouseenter",()=>{i!==E&&(u.style.outline="1px solid #aaa")}),u.addEventListener("mouseleave",()=>{u.style.outline="none"}),n.appendChild(u)}this.inventoryPanel.appendChild(n);const r=document.createElement("div");r.textContent="Crafting",r.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;for(let d=0;d<4;d++){const u=document.createElement("div");u.style.cssText=`
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
    `,l.textContent="Close (E)",l.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(l),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e;if(t.key==="Enter"){const n=this.chatInput.value.trim();n&&(this.chatHistory.unshift(n),this.chatHistory.length>50&&this.chatHistory.pop(),this.chatHistoryIdx=-1,(e=this.onChat)==null||e.call(this,n)),this.closeChatInput(),t.stopPropagation();return}if(t.key==="ArrowUp"){t.preventDefault(),this.chatHistory.length>0&&(this.chatHistoryIdx=Math.min(this.chatHistoryIdx+1,this.chatHistory.length-1),this.chatInput.value=this.chatHistory[this.chatHistoryIdx]),t.stopPropagation();return}if(t.key==="ArrowDown"){t.preventDefault(),this.chatHistoryIdx=Math.max(this.chatHistoryIdx-1,-1),this.chatInput.value=this.chatHistoryIdx>=0?this.chatHistory[this.chatHistoryIdx]:"",t.stopPropagation();return}if(t.key==="Escape"){this.closeChatInput(),t.stopPropagation();return}t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed","/give","/god","/spawn","/boss","/achievements","/stats","/nether","/craft","/tame","/spectator"],n=t.slice(1).toLowerCase(),i=e.filter(s=>s.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatHistoryIdx=-1,this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const s=new Date,a=s.getHours().toString().padStart(2,"0"),r=s.getMinutes().toString().padStart(2,"0"),c=`[${a}:${r}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const u=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${u}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const d=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(d))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"saddle",name:"Saddle",ingredients:{95:7},output:{type:93,count:1}},{id:"anvil",name:"Anvil",ingredients:{62:4},output:{type:94,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
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
    `,this.craftingPanel.appendChild(i);const s=this.getInvCount??(()=>0),a={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",95:"Leather",93:"Saddle",94:"Anvil",3:"Stone",4:"Sand"};for(const c of t){const l=Object.entries(c.ingredients).every(([f,h])=>s(Number(f))>=h),d=document.createElement("div");d.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${l?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${l?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${l?"pointer":"default"};
        opacity: ${l?"1":"0.5"};
      `;const u=document.createElement("span");u.textContent=c.hand?"✋":"🔨",u.style.cssText="font-size: 16px; flex-shrink: 0;";const m=document.createElement("div");m.style.cssText="flex: 1;";const g=document.createElement("div");g.textContent=c.name,g.style.cssText=`color: ${l?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const _=document.createElement("div"),E=Object.entries(c.ingredients).map(([f,h])=>{const y=s(Number(f)),M=a[Number(f)]??`Item ${f}`;return`<span style="color:${y>=h?"#88ff88":"#ff8888"}">${h}x ${M}</span>`});_.innerHTML=E.join(", "),_.style.cssText="font-size: 10px; margin-top: 2px;",m.appendChild(g),m.appendChild(_),d.appendChild(u),d.appendChild(m),l&&d.addEventListener("click",()=>{var h;((h=this.onCraft)==null?void 0:h.call(this,c.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(d),d.dataset.recipeName=c.name.toLowerCase()}i.addEventListener("input",()=>{const c=i.value.toLowerCase();this.craftingPanel.querySelectorAll("[data-recipe-name]").forEach(l=>{l.style.display=(l.dataset.recipeName??"").includes(c)?"":"none"})});const r=document.createElement("button");r.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,r.textContent="Close [E]",r.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(r),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=d=>{const u=d===0?"444444":Us(d).toString(16).padStart(6,"0");return`
        width: ${n}px; height: ${n}px;
        background: #${u};
        border: 1px solid #1a1a1a;
        border-radius: 2px;
        cursor: ${d?"pointer":"default"};
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
    `;const s=document.createElement("h2");s.textContent="Chest",s.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(s);const a=(d,u,m,g)=>{const _=document.createElement("div");_.style.cssText="margin-bottom: 10px;";const E=document.createElement("div");E.textContent=d,E.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",_.appendChild(E);const f=document.createElement("div");f.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${g}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let h=0;h<u.length;h++){const y=u[h]??0,M=document.createElement("div");if(M.style.cssText=i(y),M.title=y===0?"Empty":`${En(y)} (click to move)`,y!==0){const D=document.createElement("span");D.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,D.textContent=En(y).slice(0,3),M.appendChild(D)}M.addEventListener("mouseenter",()=>{y&&(M.style.transform="scale(1.1)",M.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",M.style.zIndex="2")}),M.addEventListener("mouseleave",()=>{M.style.transform="scale(1)",M.style.boxShadow="none",M.style.zIndex="0"});const b=h;M.addEventListener("click",()=>{var D;y!==0&&((D=this.onChestTransfer)==null||D.call(this,m,b,t,e),this.hideChestUI(),this.showChestUI(t,e))}),f.appendChild(M)}return _.appendChild(f),_};this.chestPanel.appendChild(a("Chest",t,!0,9));const r=document.createElement("hr");r.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(r),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
      display: block; width: 100%; padding: 8px; margin-top: 8px;
      background: #5B3333; color: white; border: 2px solid #3d0000;
      border-radius: 2px; cursor: pointer; font-weight: bold; font-size: 13px;
    `,c.textContent="Close Chest",c.addEventListener("click",()=>this.hideChestUI()),this.chestPanel.appendChild(c);const l=d=>{d.key==="Escape"&&(this.hideChestUI(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l),document.body.appendChild(this.chestPanel)}hideChestUI(){var t;this.chestPanel&&(this.chestPanel.remove(),this.chestPanel=null,(t=this.onChestClose)==null||t.call(this))}isChestOpen(){return this.chestPanel!==null}showSmeltingUI(){if(this.smeltingPanel)return;this.smeltingPanel=document.createElement("div"),this.smeltingPanel.id="smelting-panel",this.smeltingPanel.style.cssText=`
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
    `;const l=document.createElement("div");l.appendChild(r),l.appendChild(c),e.appendChild(s),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const d=document.createElement("div");d.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",d.textContent="Fuel:";const u=document.createElement("div");u.id="smelt-fuel",u.style.cssText=`
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `,this.smeltingPanel.appendChild(d),this.smeltingPanel.appendChild(u);const m=document.createElement("button");m.style.cssText=`
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
    `,g.textContent="Close",g.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(g);const _=document.createElement("style");_.textContent=`
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `,document.head.appendChild(_),document.body.appendChild(this.smeltingPanel)}hideSmeltingUI(){this.smeltingPanel&&(this.smeltingPanel.remove(),this.smeltingPanel=null)}isSmeltingOpen(){return this.smeltingPanel!==null}addKillFeedEntry(t,e){this.killFeedEl||(this.killFeedEl=document.createElement("div"),this.killFeedEl.id="killfeed",this.killFeedEl.style.cssText=`
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
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),s=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60,c=s>0?`${s}h ${a}m ${r}s`:`${a}m ${r}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[m,g]of l){if(!m){const h=document.createElement("hr");h.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(h);continue}const _=document.createElement("div");_.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const E=document.createElement("span");E.textContent=m,E.style.color="#aaa";const f=document.createElement("span");f.textContent=g,f.style.cssText="font-weight: bold; color: #fff;",_.appendChild(E),_.appendChild(f),this.scoreboardPanel.appendChild(_)}const d=Object.entries(t.killsByType||{}).sort((m,g)=>g[1]-m[1]);if(d.length>0){const m=document.createElement("hr");m.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(m);const g=document.createElement("div");g.textContent="Kills by Type",g.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(g);for(const[_,E]of d){const f=document.createElement("div");f.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const h=document.createElement("span");h.textContent=_.charAt(0).toUpperCase()+_.slice(1),h.style.color="#999";const y=document.createElement("span");y.textContent=`${E}`,y.style.color="#ddd",f.appendChild(h),f.appendChild(y),this.scoreboardPanel.appendChild(f)}}const u=document.createElement("div");u.textContent="Press O to close",u.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(u),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const kx=new Ce(.12,.12,.12),Fx=128;class zx{constructor(t){I(this,"scene");I(this,"pool",[]);I(this,"active",[]);this.scene=t;for(let e=0;e<Fx;e++){const n=new Oe({color:16777215,transparent:!0}),i=new te(kx,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,s,a,r,c,l=1,d=!1){let u=null;for(let m=0;m<this.pool.length;m++)if(!this.pool[m].active){u=this.pool[m];break}u&&(u.active=!0,u.life=0,u.maxLife=c,u.vx=s,u.vy=a,u.vz=r,u.mesh.position.set(t,e,n),u.mesh.scale.setScalar(l),u.mesh.visible=!0,u.mat.color.setHex(i),u.mat.opacity=1,d?(u.mat.emissive.setHex(i),u.mat.emissiveIntensity=.6):u.mat.emissiveIntensity=0,this.active.push(u))}spawn(t,e,n,i,s,a,r,c,l=.3){this.acquire(t,e,n,i,a,r,c,s,l)}burst(t,e,n,i,s=12){const a=Us(i);for(let r=0;r<s;r++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const s=Us(i);for(let a=0;a<8;a++){const r=a/8*Math.PI*2;this.acquire(t+Math.cos(r)*.4,e,n+Math.sin(r)*.4,s,Math.cos(r)*2,.5+Math.random(),Math.sin(r)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let s=0;s<i;s++){const a=Math.random()*Math.PI*2,r=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*r,3+Math.random()*2,Math.sin(a)*r,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let s=0;s<i;s++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let s=0;s<i;s++){const a=Math.random()<.5?11158783:16763904,r=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(r)*c,1+Math.random()*2,Math.sin(r)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let s=0;s<i;s++){const a=Math.random(),r=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,d=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,r,Math.sin(l)*Math.cos(c)*d,Math.cos(l)*d,Math.sin(l)*Math.sin(c)*d,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let s=0;s<i;s++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class Hx{constructor(){I(this,"ctx",null);I(this,"musicActive",!1);I(this,"musicTimeout",null);I(this,"sfxVolume",1);I(this,"musicVolume",.6);I(this,"ambientActive",!1);I(this,"ambientTimeout",null);I(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){e*=this.sfxVolume;try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.3,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.6,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const s=e.createGain();s.gain.setValueAtTime(t*.5,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(s),s.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,s=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=s;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime+i),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(r),r.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),s=n.createBufferSource();s.buffer=i;const a=n.createGain(),r=t*(.1+Math.random()*.06);a.gain.setValueAtTime(r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}s.connect(c),c.connect(a),a.connect(n.destination),s.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const s=e.createGain(),a=Math.min(t*.15,.5);s.gain.setValueAtTime(a,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=150,i.connect(r),r.connect(s),s.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),s.gain.setValueAtTime(.06,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(s),s.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(r),r.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),s=t.createBuffer(1,i,n),a=s.getChannelData(0);for(let r=0;r<i;r++)a[r]=Math.random()*2-1;return s}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let s=0;const a=()=>{if(!this.musicActive)return;const r=e.createOscillator(),c=e.createGain();r.type=t==="disc_blue"?"square":"sine",r.frequency.value=i[s%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),r.connect(c),c.connect(e.destination),r.start(),r.stop(e.currentTime+.5),s++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}playNote(t){try{const e=this.getCtx(),n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.value=t,i.gain.setValueAtTime(.3*this.sfxVolume,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.4),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.4)}catch{}}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,s=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),r=2+Math.floor(Math.random()*2);for(let l=0;l<r;l++){const d=i[Math.floor(Math.random()*i.length)],u=a.createOscillator(),m=a.createGain();u.type=t==="cave"||Math.random()>.5?"sine":"triangle",u.frequency.value=d*(t==="cave"?.5:1);const g=3+Math.random()*4;m.gain.setValueAtTime(0,a.currentTime),m.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+g*.3),m.gain.linearRampToValueAtTime(0,a.currentTime+g),u.detune.value=(Math.random()-.5)*10,u.connect(m),m.connect(this.ambientGain),u.start(),u.stop(a.currentTime+g+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(s,c)};this.ambientTimeout=setTimeout(s,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Gx{constructor(t){I(this,"scene");I(this,"drops",[]);I(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const s=Vx[i]??16777215,a=new Ce(.35,.35,.35),r=new Oe({color:s}),c=new te(a,r);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const s=Wx[t];if(s){for(const a of s)if(Math.random()<a.chance){const r=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<r;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let s=this.drops.length-1;s>=0;s--){const a=this.drops[s];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const r=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(r*r+l*l+c*c<2.25||a.life<=0)&&(r*r+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(s,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const Vx={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},Wx={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],horse:[{item:"leather",chance:1,min:1,max:2}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]},hu={};for(const[o,t]of Object.entries(ta)){const e=Number(o);if(t&&t.color!=null){const n=t.color;hu[e]=[n>>16&255,n>>8&255,n&255]}}class Xx{constructor(t){I(this,"canvas");I(this,"ctx");I(this,"container");I(this,"updateTimer",0);I(this,"world");I(this,"RADIUS",32);I(this,"CANVAS_SIZE",128);I(this,"UPDATE_INTERVAL",.3);I(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,s){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,s))}drawMap(t,e,n,i){const s=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,r=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let h=0;h<c.length;h+=4)c[h]=26,c[h+1]=26,c[h+2]=26,c[h+3]=255;const d=Math.floor(t.x)-this.RADIUS,u=Math.floor(t.x)+this.RADIUS,m=Math.floor(t.z)-this.RADIUS,g=Math.floor(t.z)+this.RADIUS;for(let h=d;h<=u;h++)for(let y=m;y<=g;y++){let M=0;for(let z=40;z>=0;z--){const S=this.world.getBlockType(h,z,y);if(S!==void 0){M=S;break}}if(M===0)continue;const b=Math.round(s+(h-t.x)*r),D=Math.round(a+(y-t.z)*r);if(b<0||b>=l||D<0||D>=l)continue;const C=hu[M],R=(D*l+b)*4;C?(c[R]=C[0],c[R+1]=C[1],c[R+2]=C[2],c[R+3]=255):(c[R]=255,c[R+1]=255,c[R+2]=255,c[R+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const h of i){if(!h.alive)continue;const y=s+(h.x-t.x)*r,M=a+(h.z-t.z)*r;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(y,M,2,0,Math.PI*2),this.ctx.fill()}for(const h of n){const y=s+(h.x-t.x)*r,M=a+(h.z-t.z)*r;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(y,M,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(s,a,3,0,Math.PI*2),this.ctx.fill();const _=6,E=s+Math.sin(e)*_,f=a+Math.cos(e)*_;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(s,a),this.ctx.lineTo(E,f),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class Yx{constructor(t,e){I(this,"scene");I(this,"sounds");I(this,"type","clear");I(this,"rainParticles",null);I(this,"rainPositions",null);I(this,"rainVelY",null);I(this,"rainCount",2e3);I(this,"splashParticles",null);I(this,"splashPositions",null);I(this,"splashLife",null);I(this,"splashCount",200);I(this,"thunderTimer",0);I(this,"thunderFlash",!1);I(this,"nextThunder",15);I(this,"_lightningStrike",null);I(this,"rainSoundTimer",0);I(this,"rainAmbientNode",null);I(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new _n,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new gn(e,3));const i=new Lc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new Oh(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const s=new _n,a=new Float32Array(this.splashCount*3),r=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,r[l]=0;s.setAttribute("position",new gn(a,3));const c=new Lc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new Oh(s,c),this.splashPositions=a,this.splashLife=r,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let s=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&s<this.splashCount){const r=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[s*3]=r,this.splashPositions[s*3+1]=e.y-1+Math.random()*.5,this.splashPositions[s*3+2]=c,this.splashLife[s]=.3,s++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this._lightningStrike={x:(Math.random()-.5)*40,z:(Math.random()-.5)*40},this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}consumeLightningStrike(){const t=this._lightningStrike;return this._lightningStrike=null,t}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let s=0;for(let l=0;l<e;l++){const d=Math.random()*2-1;i[l]=(s+.02*d)/1.02,s=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const r=t.createGain();r.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(r),r.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=r,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const qx=new Dn(.2,6,6),jx=new fi({color:8978244});class $x{constructor(t){I(this,"scene");I(this,"orbs",[]);I(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const s=new te(qx,jx);s.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(s),this.orbs.push({mesh:s,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const s=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,r=i.mesh.position.z-e.z,c=s*s+a*a+r*r;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const Zx=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class Kx{constructor(){I(this,"achievements");I(this,"counters",new Map);I(this,"onUnlock",null);this.achievements=new Map(Zx.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const s=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",s),s<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class Jx{constructor(){I(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const Qx=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ty=`
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
`,Ti=class Ti{constructor(){I(this,"mesh");I(this,"material");I(this,"_zenith",new yt);I(this,"_horizon",new yt);I(this,"_glow",new yt);I(this,"_sunDir",new B);const t=new Dn(400,24,16);this.material=new Oi({vertexShader:Qx,fragmentShader:ty,side:ln,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new B(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new te(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=Ti.ZENITH,s=Ti.HORIZON,a=Ti.GLOW;let r;if(n<.2){const d=n/.2;this._zenith.copy(i.night).lerp(i.dawn,d),this._horizon.copy(s.night).lerp(s.dawn,d),this._glow.copy(a.night).lerp(a.dawn,d),r=d*.8}else if(n<.3){const d=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,d),this._horizon.copy(s.dawn).lerp(s.day,d),this._glow.copy(a.dawn).lerp(a.day,d),r=(1-d)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(s.day),this._glow.copy(a.day),r=.05;else if(n<.8){const d=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,d),this._horizon.copy(s.day).lerp(s.dusk,d),this._glow.copy(a.day).lerp(a.dusk,d),r=d*.8}else{const d=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,d),this._horizon.copy(s.dusk).lerp(s.night,d),this._glow.copy(a.dusk).lerp(a.night,d),r=(1-d)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=r,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};I(Ti,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),I(Ti,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),I(Ti,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Fc=Ti;const Ne=new Qd({antialias:!1});Ne.setPixelRatio(Math.min(window.devicePixelRatio,1));Ne.setSize(window.innerWidth,window.innerHeight);Ne.shadowMap.enabled=!1;Ne.toneMapping=hi;Ne.toneMappingExposure=1.1;document.body.appendChild(Ne.domElement);let du=!1;document.addEventListener("visibilitychange",()=>{du=document.hidden});Ne.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault();const t=document.createElement("div");t.id="glLostOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;align-items:center;justify-content:center;z-index:9999;font-size:1.2rem;font-family:monospace;",t.textContent="⚠ WebGL context lost — attempting to restore...",document.body.appendChild(t)},!1);Ne.domElement.addEventListener("webglcontextrestored",()=>{var o;(o=document.getElementById("glLostOverlay"))==null||o.remove()},!1);window.addEventListener("resize",()=>{He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix(),Ne.setSize(window.innerWidth,window.innerHeight)});const oe=new O_;oe.background=null;oe.fog=new Jc(8900331,60,96);const He=new Sn(75,window.innerWidth/window.innerHeight,.1,500);let Rr=!1,cd=50;const ey=240;let Xe=.25;const si={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},oi={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},ny=new Dn(4,12,12),iy=new fi({color:16777215}),Qi=new te(ny,iy);oe.add(Qi);const sy=new Dn(2.5,12,12),oy=new fi({color:14540287}),Fs=new te(sy,oy);oe.add(Fs);const bo=new Fc;oe.add(bo.mesh);const uu=[],fu=new Oe({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let o=0;o<24;o++){const t=new me,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,s=3+Math.random()*6,a=.8+Math.random()*.8,r=new Ce(i,a,s),c=new te(r,fu);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),oe.add(t),uu.push(t)}const pu=new W_(16777215,.5);oe.add(pu);const Yn=new iu(16774368,1.4);Yn.castShadow=!0;Yn.shadow.mapSize.set(512,512);Yn.shadow.camera.near=.5;Yn.shadow.camera.far=300;Yn.shadow.camera.left=Yn.shadow.camera.bottom=-110;Yn.shadow.camera.right=Yn.shadow.camera.top=110;oe.add(Yn);const zc=new iu(3359846,.3);oe.add(zc);const mu=new H_(8900331,4881482,.3);oe.add(mu);const fo=new yt,bi=new yt;let vr=0;function ry(o){Xe=(Xe+o/ey)%1;const t=(Xe-.25)*Math.PI*2,e=t+Math.PI,n=150;if(Qi.position.set(0,Math.sin(t)*n,Math.cos(t)*n),Fs.position.set(0,Math.sin(e)*n,Math.cos(e)*n),Yn.position.copy(Qi.position).normalize().multiplyScalar(100),zc.position.copy(Fs.position).normalize().multiplyScalar(100),vr%4===0)for(const c of uu)c.position.x=(c.position.x+.06+125)%250-125;if(vr++,vr<3)return;vr=0;let i,s;const a=Xe;if(a<.2){const c=a/.2;fo.copy(si.night).lerp(si.dawn,c),bi.copy(oi.night).lerp(oi.dawn,c),i=.05+c*.8,s=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;fo.copy(si.dawn).lerp(si.day,c),bi.copy(oi.dawn).lerp(oi.day,c),i=.85+c*.55,s=.5+c*.1}else if(a<.7)fo.copy(si.day),bi.copy(oi.day),i=1.4,s=.6;else if(a<.8){const c=(a-.7)/.1;fo.copy(si.day).lerp(si.dusk,c),bi.copy(oi.day).lerp(oi.dusk,c),i=1.4-c*1.35,s=.6-c*.55}else{const c=(a-.8)/.2;fo.copy(si.dusk).lerp(si.night,c),bi.copy(oi.dusk).lerp(oi.night,c),i=.05,s=.05}Ne.setClearColor(bi),oe.fog.color.copy(bi),bo.update(Xe,Qi.position),bo.followCamera(He.position),Yn.intensity=i,pu.intensity=Math.max(s,.04)+(De.nightVision>0?.5:0),zc.intensity=Math.max(.35-i*.2,0),mu.intensity=s*.5;const r=Math.sin(t)>0;Qi.visible=r,Fs.visible=!r,fu.opacity=s>.2?.78:0}let Tt=null,P=null;oe.add(He);const N=new Bx;let po=null;const Ve=new zx(oe),Gt=new Hx,Hr=new Gx(oe),Hc=new $x(oe);let Gc=null;const qi=new Yx(oe,Gt);let re=null,Yt=null,In=!0,Ai="",Gn=null,Mn=0,Ie=0,On=1;N.updateDayCounter(On);const Rn=new Kx;let Rs=!1;const se=new Array(36).fill(0),ce=new Array(36).fill(0);function ji(o,t=1){for(let e=0;e<se.length;e++)if(se[e]===o&&ce[e]<64){const n=64-ce[e],i=Math.min(t,n);if(ce[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=se.findIndex((n,i)=>n===0&&ce[i]===0);if(e<0)return t;se[e]=o,ce[e]=Math.min(t,64),t-=ce[e]}return 0}function Vi(o,t=1){if(se.reduce((n,i,s)=>n+(i===o?ce[s]:0),0)<t)return!1;for(let n=0;n<se.length&&t>0;n++)if(se[n]===o){const i=Math.min(t,ce[n]);ce[n]-=i,t-=i,ce[n]===0&&(se[n]=0)}return!0}function Si(o){return se.reduce((t,e,n)=>t+(e===o?ce[n]:0),0)}const Is=[],Ps=[],gu=new Ce(.05,.05,.4),_u=new fi({color:16768324}),ay=new Dn(.15,8,8),cy=new fi({color:26316});let Pe=null;const wi=new Qr;wi.far=5;const ld=new ee(0,0),ly=new Qr;ly.far=1;let we=20,an=20,on=0,tc=0,xr=new B,ec=0,nc=0;const Vn={sharpness:0,protection:0,speed:0},De={strength:0,speed:0,nightVision:0,jumpBoost:0,resistance:0};let yo=0;const hd=5;let Gr=0,Vr=0;const cn=new Jx;cn.load();let ic=0;const hy=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let yr=0,Pr=!1;const Vc=60,dd=new Float32Array(Vc);let sc=0,mo=0,Kn="You died",Wi=new B,oc=0,rc=0,ac=0,lc=0;const dy={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let hc=0,ud=.35,fd=!1;const dc=new B;let pd=!1;function uy(o,t){var i,s,a,r,c,l,d,u,m;const e=o.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const g=(i=e[1])==null?void 0:i.toLowerCase();return g==="creative"||g==="survival"||g==="spectator"?(P.setGameMode(g),N.setGameMode(g),g==="survival"&&(we=20,N.updateHunger(we,an)),N.addChatMessage("",`Gamemode set to ${g}`,!0),re==null||re.sendGameMode(g),!0):(N.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return P.setGameMode("spectator"),N.setGameMode("spectator"),N.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return P.takeDamage(P.maxHealth),!0;if(n==="/heal")return P.health=P.maxHealth,N.updateHearts(P.maxHealth,P.maxHealth),N.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return we=an,N.updateHunger(we,an),N.addChatMessage("","Fed to full!",!0),!0;if(n==="/god")return P.gameMode=P.gameMode==="creative"?"survival":"creative",N.addChatMessage("",P.gameMode==="creative"?"God mode ON (creative)":"God mode OFF (survival)",!0),!0;if(n==="/spawn")return P.position.x=0,P.position.z=0,P.position.y=Tt.getSurfaceHeight?Tt.getSurfaceHeight(0,0)+2:30,N.addChatMessage("","Teleported to spawn.",!0),!0;if(n==="/enchant"){const g=(s=e[1])==null?void 0:s.toLowerCase();return g==="sharpness"?(Vn.sharpness=1,N.addChatMessage("","✨ Sharpness I applied!",!0)):g==="protection"?(Vn.protection=1,N.addChatMessage("","✨ Protection I applied!",!0)):g==="speed"?(Vn.speed=1,P.speedBonus=Math.max(P.speedBonus,.2),N.addChatMessage("","✨ Speed I applied!",!0)):N.addChatMessage("","Usage: /enchant sharpness|protection|speed",!0),!0}if(n==="/list"){if(In)return N.addChatMessage("","Singleplayer — no other players online.",!0),!0;const g=(re==null?void 0:re.getOnlinePlayerNames())??[],_=g.length+1;return N.addChatMessage("",`Online (${_}): ${Ai}${g.length?", "+g.join(", "):""}`,!0),!0}if(n==="/scoreboard")return N.showScoreboard(cn.getAll(),On),document.exitPointerLock(),N.addChatMessage("","Press O or close button to dismiss.",!0),!0;if(n==="/worldborder"){const g=parseInt(e[1]??"");return isNaN(g)||g<10?(N.addChatMessage("","Usage: /worldborder <radius> (min 10)",!0),!0):(_o=g,N.addChatMessage("",`World border set to ±${g} blocks`,!0),!0)}if(n==="/gamerule"){const g=(a=e[1])==null?void 0:a.toLowerCase(),_=(r=e[2])==null?void 0:r.toLowerCase();if(g==="domobspawning")window.__mobSpawningEnabled=_!=="false",N.addChatMessage("",`doMobSpawning = ${_!=="false"}`,!0);else if(g==="pvp")window.__pvpEnabled=_!=="false",N.addChatMessage("",`pvp = ${_!=="false"}`,!0);else if(g==="difficulty"){const E=_??"normal";window.__difficulty=E,N.addChatMessage("",`difficulty = ${E}`,!0)}else g==="keepinventory"?(window.__keepInventory=_!=="false",N.addChatMessage("",`keepInventory = ${_!=="false"}`,!0)):N.addChatMessage("","Usage: /gamerule domobspawning|pvp|difficulty|keepinventory <true|false|value>",!0);return!0}if(n==="/clear"){for(let g=0;g<36;g++)se[g]=0,ce[g]=0;return N.updateHotbarFromInventory(se,ce),N.addChatMessage("","Inventory cleared.",!0),!0}if(n==="/effect"){const g=(c=e[1])==null?void 0:c.toLowerCase();return g==="strength"?(De.strength=30,N.addChatMessage("","Applied Strength I (30s)",!0)):g==="speed"?(De.speed=30,P.speedBonus=Math.max(P.speedBonus,.3),N.addChatMessage("","Applied Speed I (30s)",!0)):g==="nightvision"||g==="night_vision"?(De.nightVision=60,N.addChatMessage("","Applied Night Vision (60s)",!0)):g==="jump"||g==="jump_boost"?(De.jumpBoost=30,P.jumpBonus=4,N.addChatMessage("","Applied Jump Boost I (30s)",!0)):g==="resistance"?(De.resistance=30,N.addChatMessage("","Applied Resistance I (30s)",!0)):N.addChatMessage("","Usage: /effect strength|speed|nightvision|jump|resistance",!0),!0}if(n==="/give"){const g=parseInt(e[1]??""),_=parseInt(e[2]??"1")||1;return isNaN(g)||g<=0?(N.addChatMessage("","Usage: /give <typeId> [count]",!0),!0):(ji(g,_),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`Gave ${_}x item ${g}`,!0),!0)}if(n==="/time"){const g=(l=e[1])==null?void 0:l.toLowerCase();return g==="day"?(Xe=.3,N.addChatMessage("","Set time to day",!0),!0):g==="night"?(Xe=0,N.addChatMessage("","Set time to night",!0),!0):g==="sunrise"?(Xe=.22,N.addChatMessage("","Set time to sunrise",!0),!0):g==="sunset"?(Xe=.75,N.addChatMessage("","Set time to sunset",!0),!0):(N.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const g=parseFloat(e[1]??"0"),_=parseFloat(e[2]??"0");return!isNaN(g)&&!isNaN(_)?(P.spawnAt(g,_),N.addChatMessage("",`Teleported to ${g.toFixed(1)}, ${_.toFixed(1)}`,!0)):N.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return N.showCraftingUI(),!0;if(n==="/weather"){const g=(d=e[1])==null?void 0:d.toLowerCase();return g==="clear"||g==="rain"||g==="thunder"?(qi.setWeather(g),N.addChatMessage("",`Weather set to ${g}`,!0),!0):(N.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const g=(u=e[1])==null?void 0:u.toLowerCase();return g==="enter"?(Ji=!0,P.spawnAt(P.position.x,P.position.z),P.position.y=30,oe.fog.color.copy(new yt(16729088)),Ne.setClearColor(2228224),bo.mesh.visible=!1,N.addChatMessage("","Entered the Nether!",!0),!0):g==="exit"?(Ji=!1,P.spawnAt(P.position.x,P.position.z),oe.fog.color.copy(new yt(8900331)),bo.mesh.visible=!0,N.addChatMessage("","Exited the Nether!",!0),!0):(N.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return Gn=Yt==null?void 0:Yt.spawnAt("enderdragon",P.position.x,P.position.y+15,P.position.z-20),N.addChatMessage("","☠ The Ender Dragon awakens!",!0),N.showBossBar("Ender Dragon",(Gn==null?void 0:Gn.maxHealth)??200,200),!0;if(n==="/achievements")return Rn.getAll().forEach(g=>{N.addChatMessage("",`${g.unlocked?"✅":"⬜"} ${g.icon} ${g.name}: ${g.description}`,!0)}),!0;if(n==="/save")return In?(Tt.saveToStorage({inventory:[...se],invCount:[...ce],px:P.position.x,py:P.position.y,pz:P.position.z,health:P.health,hunger:we,xp:Mn,xpLevel:Ie,dayCount:On}),N.addChatMessage("","World saved!",!0)):N.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if(In){const g=Tt.loadFromStorage();if(g){for(let _=0;_<36;_++)se[_]=g.inventory[_]??0,ce[_]=g.invCount[_]??0;P.position.set(g.px,g.py,g.pz),P.health=g.health,we=g.hunger,Mn=g.xp,Ie=g.xpLevel,On=g.dayCount,N.updateHearts(P.health,P.maxHealth),N.updateHunger(we,an),N.updateXP(Mn,Ie),N.updateDayCounter(On),N.updateHotbarFromInventory(se,ce)}N.addChatMessage("","World loaded!",!0)}else N.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const g=(m=e[1])==null?void 0:m.toLowerCase();if(g==="wolf"||g==="cat"){const _=(Yt==null?void 0:Yt.getMobsByType(g))??[];for(const{id:E,mob:f}of _)if(P.position.distanceTo(f.group.position)<=5)return f.data.state="tamed",N.addChatMessage("",`Tamed a ${g}!`,!0),Gt.play("eat"),!0;N.addChatMessage("",`No ${g} found nearby`,!0)}else N.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const g=cn.getAll();return N.addChatMessage("","--- Statistics ---",!0),N.addChatMessage("",`Kills: ${g.kills}`,!0),N.addChatMessage("",`Deaths: ${g.deaths}`,!0),N.addChatMessage("",`Blocks Placed: ${g.blocksPlaced}`,!0),N.addChatMessage("",`Blocks Broken: ${g.blocksBroken}`,!0),N.addChatMessage("",`Mobs Killed: ${g.mobsKilled}`,!0),N.addChatMessage("",`Distance Traveled: ${g.distanceTraveled.toFixed(1)}m`,!0),N.addChatMessage("",`Play Time: ${Math.floor(g.playTime/60)}m ${Math.floor(g.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/give <typeId> [count]","/god - toggle creative/survival","/spawn - teleport to world spawn","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(g=>N.addChatMessage("",g,!0)),!0):(N.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const fy=document.getElementById("loginScreen"),Wr=document.getElementById("nameInput"),py=document.getElementById("playBtn");{const o=document.getElementById("buildStamp");o&&(o.textContent="build: 2026-04-02 17:07 UTC")}const Wc=document.getElementById("hud"),my=document.getElementById("underwaterOverlay");let yi=!1,go=15,uc=0;const md=55;let Xr=96,_o=500,fc=0;const gy=2,_y=20,gd=new yt(670820),_d=document.getElementById("portalOverlay");let Hn=0,Ji=!1;const vy=new yt(3344392),vu=6;function xy(o,t,e){let n=-1;const i=vu;for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)for(let r=-i;r<=i;r++){const c=Math.floor(o)+s,l=Math.floor(t)+a,d=Math.floor(e)+r;if(Tt.getBlockType(c,l,d)===73){const u=Math.sqrt(s*s+a*a+r*r);(n<0||u<n)&&(n=u)}}return n}const xu=document.getElementById("damageFlash"),yy=document.getElementById("speedLines"),vd=document.getElementById("compassLabel"),Mi=document.getElementById("minimap"),xd=document.getElementById("lowHealthVignette");let Lr=0,yd=40;function My(){xu.style.opacity="1",Lr=.15}function Ey(o,t,e){if(Lr>0&&(Lr-=o,Lr<=0&&(xu.style.opacity="0")),t<yd&&My(),yd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;xd.style.opacity=String(i)}else xd.style.opacity="0"}const by=document.getElementById("crosshair"),pc=document.getElementById("breakProgress");let Md=!1;function Sy(o){const t=o>0;if(t!==Md&&(by.classList.toggle("breaking",t),Md=t),t){const e=Math.floor(o*360);pc.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,pc.style.opacity="1"}else pc.style.opacity="0"}async function nl(o){var m,g,_,E;Ai=o.trim()||`Player${Math.floor(Math.random()*999)}`,In=(((m=window.__getSelectedMode)==null?void 0:m.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),s=document.getElementById("playBtn");if(s.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await j_(),n.style.width="40%",i.textContent="Generating world...",!Tt){const f=((_=(g=document.getElementById("seedInput"))==null?void 0:g.value)==null?void 0:_.trim())||String(Date.now());let h=0;for(let y=0;y<f.length;y++)h=h*31+f.charCodeAt(y)>>>0;window.__worldSeed=h%1e5/1e5,Tt=new Nc(oe),P=new Uc(He,Tt,oe),oe.add(He),Kh()&&(po=new Dv(P.getKeys(),()=>P.breakBlockNow(),()=>P.placeBlockNow()),po.onLookDelta=(y,M)=>{P.yaw-=y*.004,P.pitch-=M*.004,P.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,P.pitch))},po.hide())}if(n.style.width="70%",await new Promise(f=>setTimeout(f,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(f=>setTimeout(f,150)),n.style.width="100%",fy.style.display="none",Wc.style.display="block",po&&po.show(),In){const f=Tt.loadFromStorage();if(Tt.initializeTorchLights(),f){for(let h=0;h<36;h++)se[h]=f.inventory[h]??0,ce[h]=f.invCount[h]??0;P.health=f.health,we=f.hunger,Mn=f.xp,Ie=f.xpLevel,On=f.dayCount,setTimeout(()=>{P.position.set(f.px,f.py,f.pz),N.updateHearts(P.health,P.maxHealth),N.updateHunger(we,an),N.updateXP(Mn,Ie),N.updateDayCounter(On),N.updateHotbarFromInventory(se,ce)},100)}}{let f=0,h=0,y=9999;for(let M=-5;M<=5&&y===9999;M++)for(let b=-5;b<=5&&y===9999;b++){const D=M*16,C=b*16,R=Tt.getSurfaceHeight(D,C);R>=63&&R<=80&&(y=R,f=D,h=C)}if(y===9999)for(let M=-5;M<=5;M++)for(let b=-5;b<=5;b++){const D=M*16,C=b*16,R=Tt.getSurfaceHeight(D,C);R>62&&R<y&&(y=R,f=D,h=C)}P.spawnAt(f,h)}Kh()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>Gt.startAmbientMusic("day"),3e3),P.onHealthChanged=f=>N.updateHearts(f,P.maxHealth),P.setDeathCause=f=>{Kn=f},P.onDied=()=>{cn.increment("deaths"),Wi.copy(P.position);const f=document.getElementById("screenFade");f.style.background="rgba(80,0,0,0.7)",f.style.transition="opacity 0.8s ease",f.style.opacity="1",setTimeout(()=>{N.showDeath(Kn,Wi.x,Wi.y,Wi.z,Ie),f.style.opacity="0"},600),N.addChatMessage("","☠ You died!",!0),Gt.play("hurt")},P.onOpenChat=()=>{N.openChatInput(),P.setChatOpen(!0)},Rn.onUnlock=f=>{N.showAchievement(f.name,f.description,f.icon),Gt.play("eat")};{const f=[],h=new Dn(.15,6,6),y=new Oe({color:15658751}),M=new Oe({color:15786176});document.addEventListener("mousedown",b=>{if(!document.pointerLockElement||N.isChatOpen()||b.button!==2)return;const D=P.selectedBlockType;if(D!==89&&D!==90||!Vi(D,1))return;const C=D===89?y:M,R=new te(h,C);R.position.copy(P.position).add(new B(0,.6,0));const z=new B(0,0,-1).applyAxisAngle(new B(1,0,0),P.camera.rotation.x).applyAxisAngle(new B(0,1,0),P.camera.rotation.y);oe.add(R),f.push({mesh:R,vel:z.multiplyScalar(25),life:5,isMob:!1}),N.updateHotbarFromInventory(se,ce)}),window.__tickThrowables=b=>{for(let D=f.length-1;D>=0;D--){const C=f[D];if(C.life-=b,C.vel.y-=15*b,C.mesh.position.addScaledVector(C.vel,b),Yt)for(const L of Yt.iterMobs()){if(!L.mob.alive)continue;const X=C.mesh.position.x-L.mob.targetPos.x,q=C.mesh.position.y-L.mob.targetPos.y,tt=C.mesh.position.z-L.mob.targetPos.z;if(X*X+q*q+tt*tt<1){L.mob.health-=3,L.mob.showDamage(L.mob.health),L.mob.health<=0&&L.mob.die(),Gt.play("hit"),C.life=0;break}}const R=Math.round(C.mesh.position.x),z=Math.round(C.mesh.position.y),S=Math.round(C.mesh.position.z);Tt.getBlock(R,z,S)&&(C.life=0),C.life<=0&&(oe.remove(C.mesh),f.splice(D,1))}}}P.onRightClick=()=>{if(P.selectedBlockType===33){if(Pe){if(oe.remove(Pe.mesh),Pe.inWater){const f=["Salmon","Cod","Tropical Fish","Pufferfish"],h=f[Math.floor(Math.random()*f.length)];N.addChatMessage("",`You caught a ${h}!`,!0),we=Math.min(an,we+2),N.updateHunger(we,an),Gt.play("eat"),Rn.trigger("fish_catch")}Pe=null}else{const f=Mr.set(0,0,-1).applyAxisAngle(br,P.camera.rotation.x).applyAxisAngle(Sr,P.camera.rotation.y),h=new te(ay,cy);h.position.copy(P.position),h.position.y+=.6,oe.add(h),Pe={mesh:h,vel:f.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},P.onBreakBlock=(f,h,y)=>{const M=Tt.getBlock(f,h,y);if(!M)return;const D={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[M.type];if(D){const C=Math.random();if(!D.chance||C<D.chance){const R=Array.isArray(D.count)?Math.floor(Math.random()*(D.count[1]-D.count[0]+1))+D.count[0]:D.count;ji(D.item,R),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`+ ${R}x ${En(D.item)}`,!0)}}if(cn.increment("blocksBroken"),Rn.trigger("first_block"),M.type===24){let C=0;const R=setInterval(()=>{if(C%2===0&&Ve.burst(f,h,y,24),C++,C>8){clearInterval(R),Ve.explosion(f,h,y,30);const z=5,S=z*z;for(let tt=-z;tt<=z;tt++)for(let F=-z;F<=z;F++)for(let Y=-z;Y<=z;Y++)if(tt*tt+F*F+Y*Y<=S){const K=Math.round(f)+tt,Q=Math.round(h)+F,it=Math.round(y)+Y,st=Tt.getBlock(K,Q,it);st&&(Tt.removeBlock(K,Q,it),Ve.burst(K,Q,it,st.type))}const L=P.position.x-f,X=P.position.y-h,q=P.position.z-y;L*L+X*X+q*q<49&&P.gameMode==="survival"&&(P.takeDamage(6),N.updateHearts(P.health,P.maxHealth)),Gt.play("break")}},500);return}M.type===56&&Tt.removeTorchLight(f,h,y),M.type===59&&Tt.deactivateLamp(f,h,y),Ve.burst(f,h,y,M.type),Gt.play("break"),re==null||re.sendRemoveBlock(f,h,y)},P.onPlaceBlock=(f,h,y,M)=>{cn.increment("blocksPlaced"),M===56&&Tt.addTorchLight(f,h+.5,y),Ve.placeEffect(f,h,y,M),Gt.play("place"),re==null||re.sendAddBlock(f,h,y,M)},Hc.onCollect=f=>{Mn+=f;const h=Ie;for(;Mn>=(Ie+1)*10;)Ie++;N.updateXP(Mn,Ie),Ie>h&&(Gt.play("eat"),N.addChatMessage("",`Level Up! Level ${Ie}`,!0),Ie>=5&&Rn.trigger("level_five"))},N.onEnchant=f=>{Ie>=3?(Ie-=3,Mn-=3*10,N.updateXP(Mn,Ie),f==="sharpness"?(Vn.sharpness=1,N.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):f==="protection"?(Vn.protection=1,N.addChatMessage("","Applied Protection I (+3 armor)!",!0)):f==="speed"&&(Vn.speed=1,P.speedBonus=.2,N.addChatMessage("","Applied Speed I (+20% movement)!",!0)),Gt.play("eat")):N.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",f=>{if(!document.pointerLockElement)return;if(f.button===2){const M={69:"disc_green",70:"disc_red",71:"disc_blue"}[P.selectedBlockType];M&&(Gt.isMusicPlaying()?Gt.stopMusic():Gt.playMusic(M));return}if(f.button!==0)return;if(P.selectedBlockType===32){const y=Mr.set(0,0,-1).applyAxisAngle(br,P.camera.rotation.x).applyAxisAngle(Sr,P.camera.rotation.y),M=new te(gu,_u);M.position.copy(P.position),M.position.y+=.6,oe.add(M),Is.push({mesh:M,vel:y.multiplyScalar(30),life:10}),Gt.play("hit");return}wi.setFromCamera(ld,He);const h=Yt==null?void 0:Yt.tryAttack(wi,Vn,De.strength>0?4:0);if(h){Gt.play("hit"),Rn.trigger("first_mob");const y=Yt==null?void 0:Yt.getMob(h.mobId);if(y&&!y.alive){Hr.spawnFromMob(y.type,y.targetPos.x,y.targetPos.y,y.targetPos.z);const M={pig:3,chicken:2,cow:5,sheep:3,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},b=y.type.toLowerCase(),D=M[b]||1;Hc.spawn(y.targetPos.x,y.targetPos.y,y.targetPos.z,D),y.type==="zombie"&&Rn.trigger("kill_zombie"),y.type==="creeper"&&Rn.trigger("kill_creeper"),y.type==="enderdragon"&&Rn.trigger("kill_dragon"),cn.recordMobKill(y.type),N.addKillFeedDeath(y.type)}In||re==null||re.sendAttackMob(h.mobId,h.damage)}}),document.addEventListener("mousedown",f=>{f.button===2&&P.selectedBlockType===72&&(f.preventDefault(),Rr=!0,He.fov=65,He.updateProjectionMatrix())}),document.addEventListener("mouseup",f=>{f.button===2&&(Rr=!1,He.fov=75,He.updateProjectionMatrix())}),document.addEventListener("contextmenu",f=>{document.pointerLockElement&&f.preventDefault()}),document.addEventListener("keydown",f=>{if(f.key==="e"||f.key==="E"){if(!document.pointerLockElement||N.isChatOpen())return;f.preventDefault();const h=Mr.set(0,0,-1).applyAxisAngle(br,P.camera.rotation.x).applyAxisAngle(Sr,P.camera.rotation.y).normalize(),y=Tt.raycastBlock(P.position,h,5);if(y){const M=Tt.getBlock(y.x,y.y,y.z);if(M&&M.type===40)if(Ie>=5){N.showEnchantUI(Ie);return}else{N.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(M&&M.type===100){const b=`${y.x},${y.y},${y.z}`,D=window.__noteBlockPitch=window.__noteBlockPitch??{};D[b]=((D[b]??0)+1)%25;const C=261.63*Math.pow(2,(D[b]-12)/12);Gt.playNote(C),N.addChatMessage("",`🎵 Note: ${D[b]+1}/25`,!0);return}if(M&&M.type===99){const b=[{ingredient:64,base:0,output:91,name:"Strength Potion"},{ingredient:12,base:0,output:92,name:"Speed Potion"},{ingredient:2,base:0,output:96,name:"Night Vision Potion"},{ingredient:20,base:0,output:97,name:"Jump Boost Potion"},{ingredient:3,base:0,output:98,name:"Resistance Potion"}],D=b.map((R,z)=>`${z+1}. ${R.name} (needs 1x ${En(R.ingredient)})`).join(`
`),C=window.prompt(`Brewing Stand
Choose recipe:
${D}

Enter number (or cancel):`,"");if(C){const R=parseInt(C)-1,z=b[R];z&&(Si(z.ingredient)<1?N.addChatMessage("",`Need 1x ${En(z.ingredient)} to brew!`,!0):(Vi(z.ingredient,1),ji(z.output,1),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`🧪 Brewed: ${z.name}!`,!0),Gt.play("eat")))}return}if(M&&M.type===94){const b=P.selectedBlockType;if(b>0&&Si(b)>0){const D=En(b),C=window.prompt(`Rename item (${D}):`,D);C&&C.trim()&&N.addChatMessage("",`✏️ Renamed "${D}" → "${C.trim()}" (cosmetic)`,!0)}else N.addChatMessage("","Hold an item in hand to rename it at the anvil.",!0);return}if(M&&M.type===34){Xe>.7||Xe<.25?(N.addChatMessage("","Sleeping...",!0),Xe=.25,P.health=Math.min(P.maxHealth,P.health+3),we=Math.min(an,we+4),N.updateHearts(P.health,P.maxHealth),N.updateHunger(we,an),Gt.play("eat"),setTimeout(()=>{N.addChatMessage("","You woke up!",!0)},2e3)):N.addChatMessage("","You can only sleep at night!",!0);return}}if(Yt){wi.far=3,wi.setFromCamera(ld,He);const M=Yt.getAllMobsForDisplay(),b=[];for(const{id:R,mob:z}of M)z.type==="villager"&&z.group.traverse(S=>{S.isMesh&&b.push({mesh:S,mobId:R,type:z.type})});const D=b.map(R=>R.mesh),C=wi.intersectObjects(D);if(C.length>0){const R=C[0];if(b.find(S=>S.mesh===R.object)){wi.far=5;const S=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];N.showTradeUI(S),N.onTrade=L=>{const X=S[L];if(!X)return;const q={0:45,1:14,2:5,3:39},tt={0:5,1:3,2:10,3:1},F={0:0,1:36,2:33,3:46},Y=q[L],K=tt[L],Q=F[L];Y&&Vi(Y,K)?(Q>0&&ji(Q,1),N.addChatMessage("",`Trade: gave ${X.giveName}, received ${X.receiveName}!`,!0),Gt.play("place")):N.addChatMessage("",`Need ${X.giveName} to trade!`,!0)};return}}wi.far=5}Rs?(N.hideInventory(),Rs=!1,document.body.requestPointerLock()):(N.showInventory(se),Rs=!0,document.exitPointerLock())}}),document.addEventListener("keydown",f=>{f.key==="Tab"&&document.pointerLockElement&&!N.isChatOpen()&&(f.preventDefault(),Rs?(N.hideInventory(),Rs=!1,document.body.requestPointerLock()):(N.showInventory(se),Rs=!0,document.exitPointerLock()))}),document.addEventListener("keydown",f=>{(f.key==="o"||f.key==="O")&&document.pointerLockElement&&!N.isChatOpen()&&(f.preventDefault(),N.isScoreboardOpen()?(N.hideScoreboard(),document.body.requestPointerLock()):(N.showScoreboard(cn.getAll(),On),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",f=>{(f.key==="F1"||f.key==="f1")&&(f.preventDefault(),a=!a,a?N.showHUD():N.hideHUD())}),document.addEventListener("keydown",f=>{if(f.key==="F2"||f.key==="f2"){f.preventDefault();try{const h=Ne.domElement.toDataURL("image/png"),y=document.createElement("a");y.href=h,y.download="minecraft-"+Date.now()+".png",y.click(),N.addChatMessage("","Screenshot saved!",!0)}catch{N.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("mousedown",f=>{if(f.button!==1||!document.pointerLockElement||P.gameMode!=="creative")return;f.preventDefault();const h=P.getTargetBlockType();if(h&&h>0){let y=se.findIndex((M,b)=>M===h&&b<9);y<0&&(y=c,se[y]=h,ce[y]=64,N.updateHotbarFromInventory(se,ce)),l(y)}});{let f=!1,h=null;document.addEventListener("keydown",y=>{var M;if((y.key==="p"||y.key==="P")&&!N.isChatOpen()){if(f&&h){h.remove(),h=null,f=!1,document.pointerLockElement===null&&document.body.requestPointerLock();return}document.exitPointerLock(),f=!0,h=document.createElement("div"),h.style.cssText=`position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);
          background:#2a2a2a;border:2px solid #555;padding:20px;z-index:2000;border-radius:6px;
          color:#eee;font-family:monospace;min-width:260px;`,h.innerHTML=`<h3 style="margin:0 0 14px;color:#ffdd44;text-align:center">⚙ Settings</h3>
          <label>SFX Volume: <input type="range" id="sfxVol" min="0" max="100" value="${Math.round(Gt.sfxVolume*100)}" style="width:120px"></label><br><br>
          <label>Music Volume: <input type="range" id="musVol" min="0" max="100" value="${Math.round(Gt.musicVolume*100)}" style="width:120px"></label><br><br>
          <label>View Distance: <input type="range" id="fogDist" min="32" max="192" step="16" value="${Xr}" style="width:120px"></label><br><br>
          <button id="closeSettings" style="width:100%;padding:8px;background:#555;color:#eee;border:none;border-radius:3px;cursor:pointer;">Close [P]</button>`,document.body.appendChild(h),document.getElementById("sfxVol").addEventListener("input",b=>{Gt.sfxVolume=parseInt(b.target.value)/100}),document.getElementById("musVol").addEventListener("input",b=>{Gt.musicVolume=parseInt(b.target.value)/100}),document.getElementById("fogDist").addEventListener("input",b=>{Xr=parseInt(b.target.value)}),(M=document.getElementById("closeSettings"))==null||M.addEventListener("click",()=>{h==null||h.remove(),h=null,f=!1,document.body.requestPointerLock()})}})}document.addEventListener("keydown",f=>{if((f.key==="r"||f.key==="R")&&document.pointerLockElement&&!N.isChatOpen())if(Yt!=null&&Yt.mountedMobId)Yt.dismount(),P.speedBonus=Vn.speed>0?.2:0,N.addChatMessage("","Dismounted.",!0);else{if(Si(93)<1){N.addChatMessage("","You need a saddle to ride a horse!",!0);return}(Yt==null?void 0:Yt.tryMount(P.position))&&(P.speedBonus=1,N.addChatMessage("","Mounted horse! R to dismount.",!0))}}),document.addEventListener("keydown",f=>{(f.key==="F3"||f.key==="f3")&&(f.preventDefault(),Pr=!Pr,Pr?N.showDebugScreen():N.hideDebugScreen())}),document.addEventListener("keydown",f=>{(f.key==="F4"||f.key==="f4")&&(f.preventDefault(),P.gameMode==="spectator"?(P.setGameMode("survival"),N.setGameMode("survival"),we=an,N.updateHunger(we,an),N.addChatMessage("","Returned to Survival mode",!0),re==null||re.sendGameMode("survival")):(P.setGameMode("spectator"),N.setGameMode("spectator"),N.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),re==null||re.sendGameMode("spectator")))}),N.onChestTransfer=(f,h,y,M)=>{if(f){const b=y[h];if(!b)return;const D=M.indexOf(0);if(D>=0){M[D]=b,y[h]=0;for(let C=0;C<M.length&&C<Hi.length;C++)Hi[C]=M[C];N.updateHotbarFromInventory(Hi),Gt.play("place")}else N.addChatMessage("","Hotbar is full!",!0)}else{const b=M[h];if(!b)return;const D=y.indexOf(0);if(D>=0){y[D]=b,M[h]=0;for(let C=0;C<M.length&&C<Hi.length;C++)Hi[C]=M[C];N.updateHotbarFromInventory(Hi),Gt.play("place")}else N.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",f=>{if((f.key==="e"||f.key==="E")&&Wc.style.display!=="none"){let h=null;for(let R=-5;R<=5&&!h;R++)for(let z=-5;z<=5&&!h;z++)for(let S=-5;S<=5&&!h;S++){const L=Math.floor(P.position.x)+R,X=Math.floor(P.position.y)+z,q=Math.floor(P.position.z)+S,tt=Tt.getBlock(L,X,q);tt&&tt.type===31&&P.position.distanceTo(Er.set(L+.5,X+.5,q+.5))<=5&&(h=[L,X,q])}if(h){const R=Tt.getChestInventory(h[0],h[1],h[2]),z=Hi.slice(0,9);N.showChestUI(R,z),N.onChestClose=()=>{Tt.setChestInventory(h[0],h[1],h[2],R)},Gt.play("place");return}let y=!1;for(let R=-5;R<=5&&!y;R++)for(let z=-5;z<=5&&!y;z++)for(let S=-5;S<=5&&!y;S++){const L=Math.floor(P.position.x)+R,X=Math.floor(P.position.y)+z,q=Math.floor(P.position.z)+S,tt=Tt.getBlock(L,X,q);tt&&tt.type===22&&P.position.distanceTo(Er.set(L+.5,X+.5,q+.5))<=5&&(y=!0)}if(y){N.showCraftingUI(),Rn.trigger("first_craft"),Gt.play("place");return}let M=null;for(let R=-5;R<=5;R++){for(let z=-5;z<=5;z++){for(let S=-5;S<=5;S++){const L=Math.floor(P.position.x)+R,X=Math.floor(P.position.y)+z,q=Math.floor(P.position.z)+S,tt=Tt.getBlock(L,X,q);if(tt&&tt.type===23&&P.position.distanceTo(Er.set(L+.5,X+.5,q+.5))<=5){M=[L,X,q];break}}if(M)break}if(M)break}if(M){N.showSmeltingUI();return}const b=Mr.set(0,0,-1).applyAxisAngle(br,P.camera.rotation.x).applyAxisAngle(Sr,P.camera.rotation.y),D=new Qr(P.position,b);D.far=2;let C=null;for(let R=-2;R<=2;R++){for(let z=-2;z<=2;z++){for(let S=-2;S<=2;S++){const L=Math.floor(P.position.x)+R,X=Math.floor(P.position.y)+z,q=Math.floor(P.position.z)+S,tt=Tt.getBlock(L,X,q);if(tt&&tt.type===58&&P.position.distanceTo(Er.set(L+.5,X+.5,q+.5))<=2){C=[L,X,q];break}}if(C)break}if(C)break}C&&(Tt.toggleLever(C[0],C[1],C[2]),Gt.play("place"))}}),N.onChat=f=>{f.startsWith("/")?uy(f):In?N.addChatMessage(Ai,f):re==null||re.sendChat(f),P.setChatOpen(!1)},N.onSmelt=(f,h)=>{const y=hy.get(f);return y?new Set([64,5,10,280]).has(h)&&Si(h)>0?Si(f)<1?(N.addChatMessage("","No input item to smelt!",!0),null):(Vi(f,1),Vi(h,1),ji(y,1),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`Smelted: ${En(y)}`,!0),Gt.play("eat"),y):(N.addChatMessage("","Need fuel (coal, wood) to smelt!",!0),null):null},N.getInvCount=f=>Si(f),N.onInventorySwap=(f,h)=>{const y=se[h];se[h]=se[f],se[f]=y;const M=ce[h];ce[h]=ce[f],ce[f]=M,N.updateHotbarFromInventory(se,ce)};const r={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},saddle:{ingredients:{95:7},output:{type:93,count:1}},anvil:{ingredients:{62:4},output:{type:94,count:1}},brewing_stand:{ingredients:{62:1,3:3},output:{type:99,count:1}},note_block:{ingredients:{5:8,64:1},output:{type:100,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};N.onCraft=f=>{const h=r[f];if(!h)return!1;for(const[y,M]of Object.entries(h.ingredients))if(Si(Number(y))<M)return N.addChatMessage("","✗ Not enough materials",!0),!1;for(const[y,M]of Object.entries(h.ingredients))Vi(Number(y),M);return ji(h.output.type,h.output.count),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`✓ Crafted ${h.output.count}x ${En(h.output.type)}`,!0),!0},N.onRespawn=()=>{const f=document.getElementById("screenFade");f.style.background="#000",f.style.transition="opacity 0.4s ease",f.style.opacity="1",setTimeout(()=>{if(window.__keepInventory!==!0){for(let h=0;h<36;h++)se[h]=0,ce[h]=0;Mn=0,Ie=0,N.updateHotbarFromInventory(se,ce),N.updateXP(0,0)}P.respawn(),we=an,N.updateHearts(P.maxHealth,P.maxHealth),N.updateHunger(we,an),re==null||re.sendRespawn(),setTimeout(()=>{f.style.transition="opacity 0.6s ease",f.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},N.updateHearts(P.health,P.maxHealth),N.updateHunger(we,an),N.setGameMode(P.gameMode);let c=0;const l=f=>{c=(f%8+8)%8,P.selectedBlockType=se[c]??0,N.selectSlot(c),N.updateHotbarFromInventory(se,ce)};document.addEventListener("wheel",f=>{l(c+(f.deltaY>0?1:-1))}),document.addEventListener("keydown",f=>{const h=parseInt(f.key);h>=1&&h<=8&&l(h-1)});const d={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65,leather:95,potion_strength:91,potion_speed:92,potion_night_vision:96,potion_jump_boost:97,potion_resistance:98,saddle:93},u={91:{effect:"strength",duration:30,label:"Strength I (+4 dmg, 30s)"},92:{effect:"speed",duration:30,label:"Speed I (+30% move, 30s)"},96:{effect:"nightVision",duration:60,label:"Night Vision (60s)"},97:{effect:"jumpBoost",duration:30,label:"Jump Boost I (30s)"},98:{effect:"resistance",duration:30,label:"Resistance I (-50% dmg, 30s)"}};if(document.addEventListener("mousedown",f=>{if(!document.pointerLockElement||N.isChatOpen()||f.button!==2)return;const h=u[P.selectedBlockType];h&&Vi(P.selectedBlockType,1)&&(De[h.effect]=h.duration,h.effect==="speed"&&(P.speedBonus=Math.max(P.speedBonus,.3)),h.effect==="jumpBoost"&&(P.jumpBonus=4),N.addChatMessage("",`🧪 Drank ${h.label}!`,!0),Gt.play("eat"),N.updateHotbarFromInventory(se,ce))}),Hr.onPickup=f=>{Gt.play("eat");const h=d[f];h&&h>0?(ji(h,1),N.updateHotbarFromInventory(se,ce),N.addChatMessage("",`+ 1x ${En(h)}`,!0)):N.addChatMessage("",`Picked up: ${f}`,!0),f==="iron_helmet"&&(P.armor=Math.min(20,P.armor+5)),f==="iron_chestplate"&&(P.armor=Math.min(20,P.armor+8)),f==="iron_leggings"&&(P.armor=Math.min(20,P.armor+7)),f==="iron_boots"&&(P.armor=Math.min(20,P.armor+4))},In){N.setConnectionStatus("connected"),N.updatePlayerCount(1),Yt=new zr(oe,Tt,{onPlayerDamage:f=>{if(Kn="You were killed by a mob",P.gameMode==="survival"){let h=f;const y=window.__difficulty;y==="easy"?h=Math.ceil(h*.5):y==="hard"?h=Math.ceil(h*1.5):y==="peaceful"&&(h=0),Vn.protection>0&&(h=Math.max(0,h-3*Vn.protection)),De.resistance>0&&(h=Math.ceil(h*.5)),Rr&&cd>0&&(h=Math.ceil(h*.2),cd--),P.takeDamage(h),Gt.play("hurt"),N.updateHearts(P.health,P.maxHealth),P.health<=0&&(cn.increment("deaths"),N.showDeath(Kn,Wi.x,Wi.y,Wi.z,Ie))}},getPlayerPos:()=>P.position,onExplosion:(f,h,y,M)=>{const b=M*M;for(let R=-M;R<=M;R++)for(let z=-M;z<=M;z++)for(let S=-M;S<=M;S++)if(R*R+z*z+S*S<=b){const L=Math.round(f)+R,X=Math.round(h)+z,q=Math.round(y)+S,tt=Tt.getBlock(L,X,q);tt&&(Tt.removeBlock(L,X,q),Ve.burst(L,X,q,tt.type))}Gt.play("break");const D=Math.sqrt((P.position.x-f)**2+(P.position.y-h)**2+(P.position.z-y)**2);D<20&&(Gr=.4,Vr=Math.max(.02,.12*(1-D/20)));const C=Ne.domElement.style.filter;Ne.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Ne.domElement.style.filter=C},100)},onWitherEffect:()=>{yo=hd}},!0),Yt.onBurnParticle=(f,h,y)=>Ve.magic(f,h,y,1);for(let f=0;f<10;f++)Yt.spawnRandom(0,0);Gc=new Xx(Tt),N.addChatMessage("",`Welcome, ${Ai}! 🌍 Singleplayer`,!0),N.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0),setTimeout(()=>N.addChatMessage("","💡 WASD=move · Space=jump · E=inventory/interact",!0),3e3),setTimeout(()=>N.addChatMessage("","💡 Left-click=break block · Right-click=place/use",!0),6e3),setTimeout(()=>N.addChatMessage("","💡 Shift=sneak · R=mount horse · Ctrl=sprint",!0),9e3)}else{const f=window.location.protocol==="https:",h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":f?window.location.hostname:"159.223.140.36:8471",y=((E=window.__getServerAddr)==null?void 0:E.call(window))??h;re=new Lx(oe,Tt,{onStatusChange:M=>N.setConnectionStatus(M),onChat:(M,b,D)=>N.addChatMessage(M,b,D),onPlayerCount:M=>N.updatePlayerCount(M),onPlayerDamage:M=>{P.takeDamage(M),Gt.play("hurt"),N.updateHearts(P.health,P.maxHealth)},onPlayerDied:M=>{N.addChatMessage("",`☠ ${M} was slain!`,!0),M===Ai&&(cn.increment("deaths"),N.showDeath("Killed by another player",P.position.x,P.position.y,P.position.z,Ie))}},y),Yt=new zr(oe,Tt,{onPlayerDamage:()=>{},getPlayerPos:()=>P.position,onExplosion:(M,b,D,C)=>{const R=C*C;for(let L=-C;L<=C;L++)for(let X=-C;X<=C;X++)for(let q=-C;q<=C;q++)if(L*L+X*X+q*q<=R){const tt=Math.round(M)+L,F=Math.round(b)+X,Y=Math.round(D)+q,K=Tt.getBlock(tt,F,Y);K&&(Tt.removeBlock(tt,F,Y),Ve.burst(tt,F,Y,K.type))}Gt.play("break");const z=Math.sqrt((P.position.x-M)**2+(P.position.y-b)**2+(P.position.z-D)**2);z<20&&(Gr=.4,Vr=Math.max(.02,.12*(1-z/20)));const S=Ne.domElement.style.filter;Ne.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Ne.domElement.style.filter=S},100)},onWitherEffect:()=>{yo=hd}},!1),re.setMobManager(Yt),re.setLocalStateGetter(()=>P.getState()),await re.join(Ai),N.addChatMessage("",`Welcome, ${Ai}! 🌐 Multiplayer`,!0),N.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}py.addEventListener("click",()=>nl(Wr.value));Wr.addEventListener("keydown",o=>{o.key==="Enter"&&nl(Wr.value)});const mc=new URLSearchParams(window.location.search).get("name");mc&&(Wr.value=mc,setTimeout(()=>nl(mc),800));let Ed=performance.now(),gc=0;const wy=60;new B;const Ay=new yt(16777215),Mr=new B,Er=new B,br=new B(1,0,0),Sr=new B(0,1,0),yu=20,Ty=Array.from({length:yu},()=>({x:0,z:0,alive:!0})),_c=[],Mu=8,Cy=Array.from({length:Mu},()=>({x:0,z:0})),vc=[];function Eu(){var e,n,i,s,a;requestAnimationFrame(Eu);const o=performance.now(),t=Math.min((o-Ed)/1e3,.05);if(Ed=o,t>0&&(dd[sc]=1/t,sc=(sc+1)%Vc,mo<Vc&&mo++),Wc.style.display!=="none"&&Tt&&P){if(P.update(t),re==null||re.updatePlayers(t),In&&(gc+=t,gc>=wy&&(gc=0,Tt.saveToStorage({inventory:[...se],invCount:[...ce],px:P.position.x,py:P.position.y,pz:P.position.z,health:P.health,hunger:we,xp:Mn,xpLevel:Ie,dayCount:On}))),In&&Tt.generateAroundPlayer(P.position.x,P.position.z),du||ry(t),!yi&&!Ji){if(ac+=t,ac>2){ac=0;const M=Tt.getBiome(Math.round(P.position.x),Math.round(P.position.z));M!==lc&&(lc=M)}const h=oe.fog,y=dy[lc];y&&h.color.lerp(y,.08)}if(Yt&&(Yt.dayTime=Xe,Yt.update(t),Yt.mountedMobId&&Yt.updateMount(P.position,P.getYaw(),!0,t)),Ve.update(t),rc+=t,rc>.5){rc=0;const h=(Xe-.25)*Math.PI*2,y=Math.sin(h);if(y>.2)for(let M=0;M<2;M++){const b=(Math.random()-.5)*16,D=Math.random()*6+1,C=(Math.random()-.5)*16;Ve.dustMote(P.position.x+b,P.position.y+D,P.position.z+C)}else if(y<-.1)for(let M=0;M<3;M++){const b=(Math.random()-.5)*20,D=(Math.random()-.5)*20;Ve.firefly(P.position.x+b,P.position.y-1+Math.random()*3,P.position.z+D)}}bv(o/1e3),Tt.updateTorchFlicker(o/1e3);for(const[h]of Tt.torchLights){const[y,M,b]=h.split(",").map(Number),D=y-P.position.x,C=b-P.position.z;D*D+C*C>576||(Math.random()<.06&&Ve.spawn(y+(Math.random()-.5)*.1,M+.7,b+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Ve.spawn(y+(Math.random()-.5)*.08,M+.55,b+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(qi.update(t,P.position,oe.fog.color),Hr.update(t,P.position),Hc.update(t,P.position),yo>0&&(yo-=t),cn.increment("playTime",t),P.velocity&&cn.increment("distanceTraveled",P.velocity.length()*t),ic+=t,ic>=60&&(ic=0,cn.save()),ec+=t,ec>.1&&(ec=0,Tt.checkPressurePlate(P.position)),nc+=t,nc>30&&(nc=0,P.position.y<10&&(Gt.playAmbient("cave"),Gt.setAmbientMood("cave"))),Pe){Pe.vel.y-=20*t,Pe.mesh.position.addScaledVector(Pe.vel,t);const h=Math.round(Pe.mesh.position.x),y=Math.round(Pe.mesh.position.y),M=Math.round(Pe.mesh.position.z);Tt.getBlockType(h,y,M)===7&&!Pe.inWater&&(Pe.inWater=!0,Pe.vel.set(0,0,0),Pe.mesh.position.y=y+.5),Pe.inWater&&(Pe.waitTimer-=t,Pe.mesh.position.y=y+.5+Math.sin(o*.003)*.1,Pe.waitTimer<=0&&(Pe.mesh.material.color.set(16776960),setTimeout(()=>{Pe!=null&&Pe.mesh.material&&Pe.mesh.material.color.set(26316)},300)))}(e=window.__tickThrowables)==null||e.call(window,t);for(let h=Is.length-1;h>=0;h--){const y=Is[h];y.life-=t,y.vel.y-=20*t,y.mesh.position.addScaledVector(y.vel,t);const M=Math.sqrt(y.vel.x*y.vel.x+y.vel.y*y.vel.y+y.vel.z*y.vel.z);M>.1&&(y.mesh.rotation.x=-Math.asin(y.vel.y/M),y.mesh.rotation.y=Math.atan2(y.vel.x,y.vel.z)),Math.random()<.3&&Ve&&Ve.spawn(y.mesh.position.x,y.mesh.position.y,y.mesh.position.z,16777130,.3,0,-.2,0);const b=Math.round(y.mesh.position.x),D=Math.round(y.mesh.position.y),C=Math.round(y.mesh.position.z);if(Tt.hasBlock(b,D,C)){const z=new te(gu,_u);z.position.copy(y.mesh.position),z.rotation.copy(y.mesh.rotation),oe.add(z),Ps.push({mesh:z,life:8}),oe.remove(y.mesh),Is.splice(h,1);continue}let R=!1;if(Yt)for(const z of Yt.iterMobs()){const S=z.mob,L=y.mesh.position.x-S.targetPos.x,X=y.mesh.position.y-S.targetPos.y,q=y.mesh.position.z-S.targetPos.z;if(L*L+X*X+q*q<.64&&S.alive){S.health-=5,S.showDamage(S.health),S.health<=0&&(S.die(),cn.recordMobKill(z.data.type),Hr.spawnFromMob(z.data.type,S.targetPos.x,S.targetPos.y,S.targetPos.z)),oe.remove(y.mesh),Is.splice(h,1),R=!0,Gt.play("hit");break}}y.life<=0&&!R&&(oe.remove(y.mesh),Is.splice(h,1))}for(let h=Ps.length-1;h>=0;h--)Ps[h].life-=t,Ps[h].life<=0&&(oe.remove(Ps[h].mesh),Ps.splice(h,1));if(Gc){if(vc.length=0,re&&re.getPlayerData){const h=((n=re.getPlayerData)==null?void 0:n.call(re))??[];let y=0;for(const M of h)if(M.name!==Ai&&y<Mu){const b=Cy[y++];b.x=M.x,b.z=M.z,vc.push(b)}}if(_c.length=0,Yt){let h=0;for(const y of Yt.iterMobs())if(h<yu){const M=Ty[h++];M.x=y.mob.targetPos.x,M.z=y.mob.targetPos.z,M.alive=y.mob.alive,_c.push(M)}}Gc.update(t,P.position,P.getYaw(),vc,_c)}if(Mi){const h=P.selectedBlockType===60&&Si(60)>0;Mi.style.transition="width 0.2s,height 0.2s,transform 0.2s",h?(Mi.style.width="300px",Mi.style.height="300px",Mi.style.transform="none"):(Mi.style.width="",Mi.style.height="",Mi.style.transform="")}if(vd){const y=(P.getYaw()*180/Math.PI%360+360)%360,b=["S","SW","W","NW","N","NE","E","SE"][Math.round(y/45)%8],D=0-P.position.x,C=0-P.position.z,z=((Math.atan2(D,C)*180/Math.PI-y)%360+360)%360,L=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(z/45)%8];vd.textContent=`${b} ${L}⌂`}if(Gn&&Gn.alive?N.updateBossBar(Gn.health,Gn.maxHealth):Gn&&!Gn.alive&&(N.hideBossBar(),Gn=null),yo>0?N.updateHearts(P.health,P.maxHealth,!0):N.updateHearts(P.health,P.maxHealth,!1),P.gameMode==="survival"){const h=P.position.x-xr.x,y=P.position.y-xr.y,M=P.position.z-xr.z,b=h*h+y*y+M*M;xr.copy(P.position),b>.01&&(tc+=t,tc>1.5&&(tc=0,we=Math.max(0,we-.5),N.updateHunger(Math.ceil(we*2)/2,an))),we>=16&&P.health<P.maxHealth&&(on+=t,on>4&&(on=0,P.health=Math.min(P.maxHealth,P.health+1),N.updateHearts(P.health,P.maxHealth))),we<=0&&(Kn="You starved",on+=t,on>4&&(on=0,P.health>1&&P.takeDamage(1),N.updateHearts(P.health,P.maxHealth)))}if(P.gameMode==="survival"){const h=Math.round(P.position.x),y=Math.round(P.position.y),M=Math.round(P.position.z);Tt.getBlockType(h,y,M)===47&&(Kn="You burned in lava",on+=t,on>.5&&(on=0,P.takeDamage(2),N.updateHearts(P.health,P.maxHealth)))}if(In&&Yt&&(fc+=t,fc>=10)){fc=0;const h=Math.round(P.position.x),y=Math.round(P.position.z);for(let M=-16;M<=16;M+=4)for(let b=-16;b<=16;b+=4)for(let D=-8;D<=8;D+=4){const C=h+M,R=Math.round(P.position.y)+D,z=y+b;if(Tt.getBlockType(C,R,z)===48&&M*M+b*b<256&&window.__mobSpawningEnabled!==!1){const L=["zombie","skeleton","spider"],X=L[Math.floor(Math.random()*L.length)];Yt.spawnMob(X,C+(Math.random()-.5)*2,R+1,z+(Math.random()-.5)*2)}}}if(P.gameMode==="survival"){const h=Math.abs(P.position.x),y=Math.abs(P.position.z);(h>_o||y>_o)&&(on+=t,on>.5&&(on=0,Kn="You went beyond the world border",P.takeDamage(2),N.updateHearts(P.health,P.maxHealth),Math.max(h,y)-_o<10&&N.addChatMessage("",`⚠ World border nearby! (${Math.round(_o-Math.max(h,y))} blocks)`,!0)))}const r=De.strength,c=De.speed,l=De.nightVision,d=De.jumpBoost,u=De.resistance;for(const h of Object.keys(De))De[h]=Math.max(0,De[h]-t);if(c>0&&De.speed===0&&Vn.speed===0&&(P.speedBonus=0),d>0&&De.jumpBoost===0&&(P.jumpBonus=0),r>0&&De.strength===0&&N.addChatMessage("","Strength wore off.",!0),c>0&&De.speed===0&&N.addChatMessage("","Speed wore off.",!0),l>0&&De.nightVision===0&&N.addChatMessage("","Night Vision wore off.",!0),d>0&&De.jumpBoost===0&&N.addChatMessage("","Jump Boost wore off.",!0),u>0&&De.resistance===0&&N.addChatMessage("","Resistance wore off.",!0),yr<.22&&Xe>=.22&&(On++,N.updateDayCounter(On),N.addChatMessage("","Dawn breaks...",!0),Gt.playAmbient("birds"),Gt.setAmbientMood("day"),Rn.trigger("reach_night")),yr<.73&&Xe>=.73&&(N.addChatMessage("","Night falls... watch out for monsters!",!0),Gt.playAmbient("wind"),Gt.setAmbientMood("night")),yr<.95&&Xe>=.95&&Yt&&Math.random()<.5&&window.__mobSpawningEnabled!==!1){const h=3+Math.floor(Math.random()*3);for(let y=0;y<h;y++){const M=Math.random()*Math.PI*2,b=20+Math.random()*15,D=P.position.x+Math.cos(M)*b,C=P.position.z+Math.sin(M)*b,R=Tt.getSurfaceHeight(Math.round(D),Math.round(C))+1.5,z=Math.random()<.5?"zombie":"skeleton";Yt.spawnMob(z,D,R,C)}}yr=Xe,N.updatePosition(P.position.x,P.position.y,P.position.z),N.updateTime(Xe),Ey(t,P.health,P.maxHealth),Sy(P.getBreakProgress());const m=((i=P.keys)==null?void 0:i.ControlLeft)&&P.velocity.lengthSq()>4;if(yy.style.opacity=m?"0.7":"0",!Rr){const h=m?80:75;Math.abs(He.fov-h)>.1&&(He.fov+=(h-He.fov)*.12,He.updateProjectionMatrix())}Qi.position.x+=(P.position.x-Qi.position.x)*.02,Fs.position.x+=(P.position.x-Fs.position.x)*.02,qi.isThunderFlashing()&&Ne.setClearColor(Ay);const g=qi.consumeLightningStrike();if(g&&P.gameMode==="survival"){const h=P.position.x+g.x,y=P.position.z+g.z,M=h-P.position.x,b=y-P.position.z;M*M+b*b<25&&(Kn="Struck by lightning",P.takeDamage(5),N.updateHearts(P.health,P.maxHealth),N.addChatMessage("","⚡ You were struck by lightning!",!0),Gt.play("hurt")),Ve.burst(h,P.position.y,y,0)}const _=Tt.getBlockType(Math.round(P.position.x),Math.round(P.position.y),Math.round(P.position.z))===7;_&&!pd&&(Ve.splash(P.position.x,P.position.y,P.position.z,12),Ve.bubbles(P.position.x,P.position.y-.5,P.position.z,8),Gt.play("splash")),pd=_;const E=Tt.getBlockType(Math.round(He.position.x),Math.round(He.position.y),Math.round(He.position.z))===7;if(E!==yi&&(yi=E,my.style.opacity=yi?"1":"0",yi&&Rn.trigger("deep_dive"),yi||(go=15,N.updateAirSupply(15,15))),yi){P.gameMode==="survival"&&(go=Math.max(0,go-t),N.updateAirSupply(go,15),go<=0&&(on+=t,on>1&&(on=0,Kn="You drowned",P.takeDamage(1),N.updateHearts(P.health,P.maxHealth),P.health<=0&&(cn.increment("deaths"),N.showDeath(Kn,P.position.x,P.position.y,P.position.z,Ie)))));const h=oe.fog;h.near=gy,h.far=_y,h.color.copy(gd),Ne.setClearColor(gd),uc+=t,uc>.3&&(uc=0,Ve.bubbles(P.position.x,P.position.y+.5,P.position.z,2))}else if(!Ji){const h=oe.fog;h.near=md,h.far=Xr}const f=xy(P.position.x,P.position.y,P.position.z);if(f>=0){const h=Math.max(0,1-f/vu);Hn+=(h-Hn)*.08}else Hn+=(0-Hn)*.08;if(Hn>.01){_d.style.opacity=String(Hn);const h=Math.sin(performance.now()*.002)*Hn*40,y=Hn*1.5,M=1+Hn*1.2;if(Ne.domElement.style.filter=`hue-rotate(${h}deg) blur(${y}px) saturate(${M})`,Hn>.6&&!yi){const b=oe.fog,D=(Hn-.6)/.4;b.color.lerpColors(b.color,vy,D*.15),b.near=md-D*20,b.far=Xr-D*30,Ji=!0}f>=0&&f<3&&Math.random()<.3&&Ve.magic(P.position.x+(Math.random()-.5)*3,P.position.y+(Math.random()-.5)*2,P.position.z+(Math.random()-.5)*3,1)}else _d.style.opacity="0",Ne.domElement.style.filter="",Ji&&(Ji=!1);if(hc+=t,hc>ud&&P.onGround){const h=P.position.x-dc.x,y=P.position.z-dc.z;if(h*h+y*y>1.5){hc=0,dc.set(P.position.x,0,P.position.z);const b=Math.round(P.position.x),D=Math.round(P.position.y-1.9),C=Math.round(P.position.z),R=Tt.getBlockType(b,D,C);let z="dirt";R===3||R===11||R===17||R===18?z="stone":R===4||R===12||R===49?z="sand":R===5||R===10||R===16?z="wood":(R===1||R===6)&&(z="grass"),ud=((s=P.keys)==null?void 0:s.ControlLeft)?.25:.35,Gt.playStepOnBlock(.7,z)}}if(P.onGround&&!fd&&P.velocity.y<-.5&&Gt.playLanding(Math.min(Math.abs(P.velocity.y)/10,1)),fd=P.onGround,oc+=t,oc>1&&(oc=0,Tt.isNearBlock(Math.round(P.position.x),Math.round(P.position.y),Math.round(P.position.z),55,5)&&Ve.smoke(P.position.x,P.position.y+1,P.position.z,2)),Pr){let h=0;for(let Y=0;Y<mo;Y++)h+=dd[Y];const y=mo>0?h/mo:0,b=(P.getYaw()*180/Math.PI+360)%360;let D="Unknown";b<45||b>=315?D="South (0°)":b<135?D="West (90°)":b<225?D="North (180°)":D="East (270°)";const C={0:"Plains",1:"Desert",2:"Forest",3:"Mountains",4:"Ocean",5:"Taiga",6:"Swamp"},R=Tt.getBiome(Math.round(P.position.x),Math.round(P.position.z)),z=C[R]??`Biome ${R}`,S=Math.round(P.position.y-1),L=Tt.getBlockType(Math.round(P.position.x),S,Math.round(P.position.z)),X=L!==void 0?En(L):"Air",q=qi&&qi.isRaining?"Rainy":"Clear",tt=(Yt==null?void 0:Yt.getMobCount())??0,F=((a=Tt.getBlockCount)==null?void 0:a.call(Tt))??0;N.updateDebugScreen({fps:y,x:P.position.x,y:P.position.y,z:P.position.z,biome:z,blockBelow:X,facing:D,dayTime:Xe,mobCount:tt,blockCount:F,weather:q,gameMode:P.gameMode,version:"0.8"})}}if(Gr>0){Gr-=t;const r=(Math.random()-.5)*2*Vr,c=(Math.random()-.5)*2*Vr;He.position.x+=r,He.position.y+=c}Tt&&Tt.flushDirtyMeshes(),Ne.render(oe,He),qi.isThunderFlashing()&&Ne.setClearColor(bi)}Eu();window.addEventListener("beforeunload",()=>{In&&Tt.saveToStorage({inventory:[...se],invCount:[...ce],px:P.position.x,py:P.position.y,pz:P.position.z,health:P.health,hunger:we,xp:Mn,xpLevel:Ie,dayCount:On})});
