var gu=Object.defineProperty;var _u=(s,t,e)=>t in s?gu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>_u(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="160",vu=0,Kc=1,xu=2,gd=1,yu=2,ei=3,oi=0,on=1,Xn=2,Ei=0,Cs=1,$c=2,Jc=3,Qc=4,Mu=5,Fi=100,Eu=101,Su=102,tl=103,el=104,bu=200,Au=201,Tu=202,wu=203,dc=204,uc=205,Cu=206,Ru=207,Pu=208,Lu=209,Iu=210,Du=211,Ou=212,Nu=213,Uu=214,Bu=0,ku=1,Fu=2,So=3,zu=4,Hu=5,Gu=6,Vu=7,kc=0,Wu=1,Xu=2,ri=0,Yu=1,qu=2,ju=3,Zu=4,Ku=5,$u=6,_d=300,Ls=301,Is=302,fc=303,pc=304,Uo=306,mc=1e3,Mn=1001,gc=1002,De=1003,nl=1004,na=1005,Tn=1006,Ju=1007,dr=1008,Si=1009,Qu=1010,tf=1011,Fc=1012,vd=1013,yi=1014,Mi=1015,ur=1016,xd=1017,yd=1018,Wi=1020,ef=1021,Un=1023,nf=1024,sf=1025,Xi=1026,Ds=1027,rf=1028,Md=1029,of=1030,Ed=1031,Sd=1033,ia=33776,sa=33777,ra=33778,oa=33779,il=35840,sl=35841,rl=35842,ol=35843,bd=36196,al=37492,cl=37496,ll=37808,hl=37809,dl=37810,ul=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,yl=37819,Ml=37820,El=37821,aa=36492,Sl=36494,bl=36495,af=36283,Al=36284,Tl=36285,wl=36286,Ad=3e3,Yi=3001,cf=3200,lf=3201,Td=0,hf=1,wn="",$e="srgb",ai="srgb-linear",zc="display-p3",Bo="display-p3-linear",bo="linear",Re="srgb",Ao="rec709",To="p3",$i=7680,Cl=519,df=512,uf=513,ff=514,wd=515,pf=516,mf=517,gf=518,_f=519,_c=35044,vf=35048,Rl="300 es",vc=1035,ii=2e3,wo=2001;class Fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,xc=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function un(s,t,e){return Math.max(t,Math.min(e,s))}function xf(s,t){return(s%t+t)%t}function ca(s,t,e){return(1-e)*s+e*t}function Pl(s){return(s&s-1)===0&&s!==0}function yc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,i,r,a,o,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],_=n[8],v=i[0],m=i[3],g=i[6],E=i[1],M=i[4],w=i[7],O=i[2],L=i[5],I=i[8];return r[0]=a*v+o*E+c*O,r[3]=a*m+o*M+c*L,r[6]=a*g+o*w+c*I,r[1]=l*v+h*E+d*O,r[4]=l*m+h*M+d*L,r[7]=l*g+h*w+d*I,r[2]=p*v+f*E+_*O,r[5]=p*m+f*M+_*L,r[8]=p*g+f*w+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,f=l*r-a*c,_=e*d+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=p*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new ie;function Cd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yf(){const s=Co("canvas");return s.style.display="block",s}const Ll={};function or(s){s in Ll||(Ll[s]=!0,console.warn(s))}const Il=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dl=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xr={[ai]:{transfer:bo,primaries:Ao,toReference:s=>s,fromReference:s=>s},[$e]:{transfer:Re,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Bo]:{transfer:bo,primaries:To,toReference:s=>s.applyMatrix3(Dl),fromReference:s=>s.applyMatrix3(Il)},[zc]:{transfer:Re,primaries:To,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dl),fromReference:s=>s.applyMatrix3(Il).convertLinearToSRGB()}},Mf=new Set([ai,Bo]),ye={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=xr[t].toReference,i=xr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return xr[s].primaries},getTransfer:function(s){return s===wn?bo:xr[s].transfer}};function Rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ji;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Co("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ef=0;class Pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(da(i[a].image)):r.push(da(i[a]))}else r=da(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class an extends Fs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Mn,i=Mn,r=Tn,a=dr,o=Un,c=Si,l=an.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=bi(),this.name="",this.source=new Pd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yi?$e:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mc:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mc:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Yi:Ad}set encoding(t){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yi?$e:wn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=_d;an.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],_=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(f+1)/2,O=(g+1)/2,L=(h+p)/4,I=(d+v)/4,q=(_+m)/4;return M>w&&M>O?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=I/n):w>O?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=L/i,r=q/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=I/r,i=q/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-v)/E,this.z=(p-h)/E,this.w=Math.acos((l+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends Fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?$e:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ld extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const p=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(d!==v||c!==p||l!==f||h!==_){let m=1-o;const g=c*p+l*f+h*_+d*v,E=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const O=Math.sqrt(M),L=Math.atan2(O,g*E);m=Math.sin(m*L)/O,o=Math.sin(o*L)/O}const w=o*E;if(c=c*m+p*w,l=l*m+f*w,h=h*m+_*w,d=d*m+v*w,m===1-o){const O=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=O,l*=O,h*=O,d*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+c*f-l*p,t[e+1]=c*_+h*p+l*d-o*f,t[e+2]=l*_+h*f+o*p-c*d,t[e+3]=h*_-o*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),p=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"YZX":this._x=p*h*d+l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d-p*f*_;break;case"XZY":this._x=p*h*d-l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new U,Ol=new pr;class Zi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Mr.subVectors(this.max,Gs),Qi.subVectors(t.a,Gs),ts.subVectors(t.b,Gs),es.subVectors(t.c,Gs),hi.subVectors(ts,Qi),di.subVectors(es,ts),Ri.subVectors(Qi,es);let e=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!fa(e,Qi,ts,es,Mr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,Qi,ts,es,Mr))?!1:(Er.crossVectors(hi,di),e=[Er.x,Er.y,Er.z],fa(e,Qi,ts,es,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,yr=new Zi,Qi=new U,ts=new U,es=new U,hi=new U,di=new U,Ri=new U,Gs=new U,Mr=new U,Er=new U,Pi=new U;function fa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pi.fromArray(s,r);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Tf=new Zi,Vs=new U,pa=new U;class Ki{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(pa)),this.expandByPoint(Vs.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new U,ma=new U,Sr=new U,ui=new U,ga=new U,br=new U,_a=new U;class ko{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(ma);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=ui.dot(this.direction),c=-ui.dot(Sr),l=ui.lengthSq(),h=Math.abs(1-a*a);let d,p,f,_;if(h>0)if(d=a*c-o,p=a*o-c,_=r*h,d>=0)if(p>=-_)if(p<=_){const v=1/h;d*=v,p*=v,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ma).addScaledVector(Sr,p),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,r){ga.subVectors(e,t),br.subVectors(n,t),_a.crossVectors(ga,br);let a=this.direction.dot(_a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const c=o*this.direction.dot(br.crossVectors(ui,br));if(c<0)return null;const l=o*this.direction.dot(ga.cross(ui));if(l<0||c+l>a)return null;const h=-o*ui.dot(_a);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,i,r,a,o,c,l,h,d,p,f,_,v,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,p,f,_,v,m)}set(t,e,n,i,r,a,o,c,l,h,d,p,f,_,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=p,g[3]=f,g[7]=_,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,f=a*d,_=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=p-v*l,e[9]=-o*c,e[2]=v-p*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,_=l*h,v=l*d;e[0]=p+v*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=v+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,_=l*h,v=l*d;e[0]=p-v*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=v-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,f=a*d,_=o*h,v=o*d;e[0]=c*h,e[4]=_*l-f,e[8]=p*l+v,e[1]=c*d,e[5]=v*l+p,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,f=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-p*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+_,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*c,f=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+v,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Cf)}lookAt(t,e,n){const i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fi.crossVectors(n,mn),fi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fi.crossVectors(n,mn)),fi.normalize(),Ar.crossVectors(mn,fi),i[0]=fi.x,i[4]=Ar.x,i[8]=mn.x,i[1]=fi.y,i[5]=Ar.y,i[9]=mn.y,i[2]=fi.z,i[6]=Ar.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],_=n[2],v=n[6],m=n[10],g=n[14],E=n[3],M=n[7],w=n[11],O=n[15],L=i[0],I=i[4],q=i[8],b=i[12],R=i[1],j=i[5],J=i[9],ot=i[13],F=i[2],W=i[6],$=i[10],Q=i[14],nt=i[3],it=i[7],st=i[11],ut=i[15];return r[0]=a*L+o*R+c*F+l*nt,r[4]=a*I+o*j+c*W+l*it,r[8]=a*q+o*J+c*$+l*st,r[12]=a*b+o*ot+c*Q+l*ut,r[1]=h*L+d*R+p*F+f*nt,r[5]=h*I+d*j+p*W+f*it,r[9]=h*q+d*J+p*$+f*st,r[13]=h*b+d*ot+p*Q+f*ut,r[2]=_*L+v*R+m*F+g*nt,r[6]=_*I+v*j+m*W+g*it,r[10]=_*q+v*J+m*$+g*st,r[14]=_*b+v*ot+m*Q+g*ut,r[3]=E*L+M*R+w*F+O*nt,r[7]=E*I+M*j+w*W+O*it,r[11]=E*q+M*J+w*$+O*st,r[15]=E*b+M*ot+w*Q+O*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],_=t[3],v=t[7],m=t[11],g=t[15];return _*(+r*c*d-i*l*d-r*o*p+n*l*p+i*o*f-n*c*f)+v*(+e*c*f-e*l*p+r*a*p-i*a*f+i*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+g*(-i*o*h-e*c*d+e*o*p+i*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],_=t[12],v=t[13],m=t[14],g=t[15],E=d*m*l-v*p*l+v*c*f-o*m*f-d*c*g+o*p*g,M=_*p*l-h*m*l-_*c*f+a*m*f+h*c*g-a*p*g,w=h*v*l-_*d*l+_*o*f-a*v*f-h*o*g+a*d*g,O=_*d*c-h*v*c-_*o*p+a*v*p+h*o*m-a*d*m,L=e*E+n*M+i*w+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=E*I,t[1]=(v*p*r-d*m*r-v*i*f+n*m*f+d*i*g-n*p*g)*I,t[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*g+n*c*g)*I,t[3]=(d*c*r-o*p*r-d*i*l+n*p*l+o*i*f-n*c*f)*I,t[4]=M*I,t[5]=(h*m*r-_*p*r+_*i*f-e*m*f-h*i*g+e*p*g)*I,t[6]=(_*c*r-a*m*r-_*i*l+e*m*l+a*i*g-e*c*g)*I,t[7]=(a*p*r-h*c*r+h*i*l-e*p*l-a*i*f+e*c*f)*I,t[8]=w*I,t[9]=(_*d*r-h*v*r-_*n*f+e*v*f+h*n*g-e*d*g)*I,t[10]=(a*v*r-_*o*r+_*n*l-e*v*l-a*n*g+e*o*g)*I,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*I,t[12]=O*I,t[13]=(h*v*i-_*d*i+_*n*p-e*v*p-h*n*m+e*d*m)*I,t[14]=(_*o*i-a*v*i-_*n*c+e*v*c+a*n*m-e*o*m)*I,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*p+e*o*p)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,f=r*h,_=r*d,v=a*h,m=a*d,g=o*d,E=c*l,M=c*h,w=c*d,O=n.x,L=n.y,I=n.z;return i[0]=(1-(v+g))*O,i[1]=(f+w)*O,i[2]=(_-M)*O,i[3]=0,i[4]=(f-w)*L,i[5]=(1-(p+g))*L,i[6]=(m+E)*L,i[7]=0,i[8]=(_+M)*I,i[9]=(m-E)*I,i[10]=(1-(p+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);const l=1/r,h=1/a,d=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ii){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let f,_;if(o===ii)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===wo)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ii){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),p=(e+t)*l,f=(n+i)*h;let _,v;if(o===ii)_=(a+r)*d,v=-2*d;else if(o===wo)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new U,Ln=new be,wf=new U(0,0,0),Cf=new U(1,1,1),fi=new U,Ar=new U,mn=new U,Nl=new be,Ul=new pr;class Fo{constructor(t=0,e=0,n=0,i=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const Bl=new U,is=new pr,Zn=new be,Tr=new U,Ws=new U,Pf=new U,Lf=new pr,kl=new U(1,0,0),Fl=new U(0,1,0),zl=new U(0,0,1),If={type:"added"},Df={type:"removed"};class Ge extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new U,e=new Fo,n=new pr,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new ie}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ws,Tr,this.up):Zn.lookAt(Tr,Ws,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Zn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(If)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ge.DEFAULT_UP=new U(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new U,Kn=new U,va=new U,$n=new U,ss=new U,rs=new U,Hl=new U,xa=new U,ya=new U,Ma=new U;let wr=!1;class xn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Kn.subVectors(n,e),va.subVectors(t,e);const a=In.dot(In),o=In.dot(Kn),c=In.dot(va),l=Kn.dot(Kn),h=Kn.dot(va),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(l*c-o*h)*p,_=(a*h-o*c)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(t,e,n,i,r,a,o,c){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Kn.subVectors(t,e),In.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ss.subVectors(i,n),rs.subVectors(r,n),xa.subVectors(t,n);const c=ss.dot(xa),l=rs.dot(xa);if(c<=0&&l<=0)return e.copy(n);ya.subVectors(t,i);const h=ss.dot(ya),d=rs.dot(ya);if(h>=0&&d<=h)return e.copy(i);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ss,a);Ma.subVectors(t,r);const f=ss.dot(Ma),_=rs.dot(Ma);if(_>=0&&f<=_)return e.copy(r);const v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(rs,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Hl.subVectors(r,i),o=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(Hl,o);const g=1/(m+v+p);return a=v*g,o=p*g,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ea(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=xf(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ea(a,r,t+1/3),this.g=Ea(a,r,t),this.b=Ea(a,r,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ye.fromWorkingColorSpace(tn.copy(this),t),Math.round(un(tn.r*255,0,255))*65536+Math.round(un(tn.g*255,0,255))*256+Math.round(un(tn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=$e){ye.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Cr);const n=ca(pi.h,Cr.h,e),i=ca(pi.s,Cr.s,e),r=ca(pi.l,Cr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new yt;yt.NAMES=Id;let Of=0;class wi extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Cs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=uc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ci extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new U,Rr=new $t;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}}class Dd extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Od extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class En extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nf=0;const bn=new be,Sa=new Ge,os=new U,gn=new Zi,Xs=new Zi,je=new U;class pn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cd(t)?Od:Dd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new En(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(gn.min,Xs.min),gn.expandByPoint(je),je.addVectors(gn.max,Xs.max),gn.expandByPoint(je)):(gn.expandByPoint(Xs.min),gn.expandByPoint(Xs.max))}gn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)je.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(t,l),je.add(os)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new U,h[R]=new U;const d=new U,p=new U,f=new U,_=new $t,v=new $t,m=new $t,g=new U,E=new U;function M(R,j,J){d.fromArray(i,R*3),p.fromArray(i,j*3),f.fromArray(i,J*3),_.fromArray(a,R*2),v.fromArray(a,j*2),m.fromArray(a,J*2),p.sub(d),f.sub(d),v.sub(_),m.sub(_);const ot=1/(v.x*m.y-m.x*v.y);isFinite(ot)&&(g.copy(p).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(ot),E.copy(f).multiplyScalar(v.x).addScaledVector(p,-m.x).multiplyScalar(ot),l[R].add(g),l[j].add(g),l[J].add(g),h[R].add(E),h[j].add(E),h[J].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,j=w.length;R<j;++R){const J=w[R],ot=J.start,F=J.count;for(let W=ot,$=ot+F;W<$;W+=3)M(n[W+0],n[W+1],n[W+2])}const O=new U,L=new U,I=new U,q=new U;function b(R){I.fromArray(r,R*3),q.copy(I);const j=l[R];O.copy(j),O.sub(I.multiplyScalar(I.dot(j))).normalize(),L.crossVectors(q,j);const ot=L.dot(h[R])<0?-1:1;c[R*4]=O.x,c[R*4+1]=O.y,c[R*4+2]=O.z,c[R*4+3]=ot}for(let R=0,j=w.length;R<j;++R){const J=w[R],ot=J.start,F=J.count;for(let W=ot,$=ot+F;W<$;W+=3)b(n[W+0]),b(n[W+1]),b(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let g=0;g<h;g++)p[_++]=l[f++]}return new fn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new be,Li=new ko,Pr=new Ki,Vl=new U,as=new U,cs=new U,ls=new U,ba=new U,Lr=new U,Ir=new $t,Dr=new $t,Or=new $t,Wl=new U,Xl=new U,Yl=new U,Nr=new U,Ur=new U;class te extends Ge{constructor(t=new pn,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(ba.fromBufferAttribute(d,t),a?Lr.addScaledVector(ba,h):Lr.addScaledVector(ba.sub(e),h))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Pr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Pr,Vl)===null||Li.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],g=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=E,O=M;w<O;w+=3){const L=o.getX(w),I=o.getX(w+1),q=o.getX(w+2);i=Br(this,g,t,n,l,h,d,L,I,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,g=v;m<g;m+=3){const E=o.getX(m),M=o.getX(m+1),w=o.getX(m+2);i=Br(this,a,t,n,l,h,d,E,M,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],g=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=E,O=M;w<O;w+=3){const L=w,I=w+1,q=w+2;i=Br(this,g,t,n,l,h,d,L,I,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,g=v;m<g;m+=3){const E=m,M=m+1,w=m+2;i=Br(this,a,t,n,l,h,d,E,M,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Uf(s,t,e,n,i,r,a,o){let c;if(t.side===on?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===oi,o),c===null)return null;Ur.copy(o),Ur.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:s}}function Br(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,as),s.getVertexPosition(c,cs),s.getVertexPosition(l,ls);const h=Uf(s,t,e,n,as,cs,ls,Nr);if(h){i&&(Ir.fromBufferAttribute(i,o),Dr.fromBufferAttribute(i,c),Or.fromBufferAttribute(i,l),h.uv=xn.getInterpolation(Nr,as,cs,ls,Ir,Dr,Or,new $t)),r&&(Ir.fromBufferAttribute(r,o),Dr.fromBufferAttribute(r,c),Or.fromBufferAttribute(r,l),h.uv1=xn.getInterpolation(Nr,as,cs,ls,Ir,Dr,Or,new $t),h.uv2=h.uv1),a&&(Wl.fromBufferAttribute(a,o),Xl.fromBufferAttribute(a,c),Yl.fromBufferAttribute(a,l),h.normal=xn.getInterpolation(Nr,as,cs,ls,Wl,Xl,Yl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};xn.getNormal(as,cs,ls,d.normal),h.face=d}return h}class Te extends pn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(d,2));function _(v,m,g,E,M,w,O,L,I,q,b){const R=w/I,j=O/q,J=w/2,ot=O/2,F=L/2,W=I+1,$=q+1;let Q=0,nt=0;const it=new U;for(let st=0;st<$;st++){const ut=st*j-ot;for(let pt=0;pt<W;pt++){const K=pt*R-J;it[v]=K*E,it[m]=ut*M,it[g]=F,l.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[g]=L>0?1:-1,h.push(it.x,it.y,it.z),d.push(pt/I),d.push(1-st/q),Q+=1}}for(let st=0;st<q;st++)for(let ut=0;ut<I;ut++){const pt=p+ut+W*st,K=p+ut+W*(st+1),at=p+(ut+1)+W*(st+1),Et=p+(ut+1)+W*st;c.push(pt,K,Et),c.push(K,at,Et),nt+=6}o.addGroup(f,nt,b),f+=nt,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=Os(s[e]);for(const i in n)t[i]=n[i]}return t}function Bf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nd(s){return s.getRenderTarget()===null?s.outputColorSpace:ye.workingColorSpace}const kf={clone:Os,merge:sn};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ud extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends Ud{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_o*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,ds=1;class Hf extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(hs,ds,t,e);i.layers=this.layers,this.add(i);const r=new yn(hs,ds,t,e);r.layers=this.layers,this.add(r);const a=new yn(hs,ds,t,e);a.layers=this.layers,this.add(a);const o=new yn(hs,ds,t,e);o.layers=this.layers,this.add(o);const c=new yn(hs,ds,t,e);c.layers=this.layers,this.add(c);const l=new yn(hs,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Bd extends an{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gf extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yi?$e:wn),this.texture=new Bd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Te(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ei});r.uniforms.tEquirect.value=e;const a=new te(i,r),o=e.minFilter;return e.minFilter===dr&&(e.minFilter=Tn),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Aa=new U,Vf=new U,Wf=new ie;class Ni{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Aa.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),i=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ki,kr=new U;class Gc{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],p=i[7],f=i[8],_=i[9],v=i[10],m=i[11],g=i[12],E=i[13],M=i[14],w=i[15];if(n[0].setComponents(c-r,p-l,m-f,w-g).normalize(),n[1].setComponents(c+r,p+l,m+f,w+g).normalize(),n[2].setComponents(c+a,p+h,m+_,w+E).normalize(),n[3].setComponents(c-a,p-h,m-_,w-E).normalize(),n[4].setComponents(c-o,p-d,m-v,w-M).normalize(),e===ii)n[5].setComponents(c+o,p+d,m+v,w+M).normalize();else if(e===wo)n[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(kr.x=i.normal.x>0?t.max.x:t.min.x,kr.y=i.normal.y>0?t.max.y:t.min.y,kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,p=l.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,p),l.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){const p=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,l),f.count===-1&&_.length===0&&s.bufferSubData(d,0,p),_.length!==0){for(let v=0,m=_.length;v<m;v++){const g=_[v];e?s.bufferSubData(d,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):s.bufferSubData(d,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):s.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class zo extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,p=e/c,f=[],_=[],v=[],m=[];for(let g=0;g<h;g++){const E=g*p-a;for(let M=0;M<l;M++){const w=M*d-r;_.push(w,-E,0),v.push(0,0,1),m.push(M/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<o;E++){const M=E+l*g,w=E+l*(g+1),O=E+1+l*(g+1),L=E+1+l*g;f.push(M,w,L),f.push(w,O,L)}this.setIndex(f),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`
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
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,v0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Yf,alphahash_pars_fragment:qf,alphamap_fragment:jf,alphamap_pars_fragment:Zf,alphatest_fragment:Kf,alphatest_pars_fragment:$f,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:op,clipping_planes_fragment:ap,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:lp,clipping_planes_vertex:hp,color_fragment:dp,color_pars_fragment:up,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:_p,displacementmap_pars_vertex:vp,displacementmap_vertex:xp,emissivemap_fragment:yp,emissivemap_pars_fragment:Mp,colorspace_fragment:Ep,colorspace_pars_fragment:Sp,envmap_fragment:bp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Tp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Dp,lightmap_fragment:Op,lightmap_pars_fragment:Np,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:jp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphcolor_vertex:rm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:cm,normal_fragment_begin:lm,normal_fragment_maps:hm,normal_pars_fragment:dm,normal_pars_vertex:um,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:xm,packing:ym,premultiplied_alpha_fragment:Mm,project_vertex:Em,dithering_fragment:Sm,dithering_pars_fragment:bm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Im,skinning_vertex:Dm,skinnormal_vertex:Om,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:Fm,transmission_pars_fragment:zm,uv_pars_fragment:Hm,uv_pars_vertex:Gm,uv_vertex:Vm,worldpos_vertex:Wm,background_vert:Xm,background_frag:Ym,backgroundCube_vert:qm,backgroundCube_frag:jm,cube_vert:Zm,cube_frag:Km,depth_vert:$m,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:h0,meshnormal_vert:d0,meshnormal_frag:u0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:v0,points_vert:x0,points_frag:y0,shadow_vert:M0,shadow_frag:E0,sprite_vert:S0,sprite_frag:b0},_t={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Wn={basic:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:sn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:sn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:sn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:sn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:sn([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:sn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:sn([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:sn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:sn([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:sn([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:sn([_t.lights,_t.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wn.physical={uniforms:sn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Fr={r:0,b:0,g:0};function A0(s,t,e,n,i,r,a){const o=new yt(0);let c=r===!0?0:1,l,h,d=null,p=0,f=null;function _(m,g){let E=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?e:t).get(M)),M===null?v(o,c):M&&M.isColor&&(v(M,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Uo)?(h===void 0&&(h=new te(new Te(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Os(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=ye.getTransfer(M.colorSpace)!==Re,(d!==M||p!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new te(new zo(2,2),new Ti({name:"BackgroundMaterial",uniforms:Os(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ye.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,g){m.getRGB(Fr,Nd(s)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),c=g,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:_}}function T0(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function d(F,W,$,Q,nt){let it=!1;if(a){const st=v(Q,$,W);l!==st&&(l=st,f(l.object)),it=g(F,Q,$,nt),it&&E(F,Q,$,nt)}else{const st=W.wireframe===!0;(l.geometry!==Q.id||l.program!==$.id||l.wireframe!==st)&&(l.geometry=Q.id,l.program=$.id,l.wireframe=st,it=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,q(F,W,$,Q),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function p(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function v(F,W,$){const Q=$.wireframe===!0;let nt=o[F.id];nt===void 0&&(nt={},o[F.id]=nt);let it=nt[W.id];it===void 0&&(it={},nt[W.id]=it);let st=it[Q];return st===void 0&&(st=m(p()),it[Q]=st),st}function m(F){const W=[],$=[],Q=[];for(let nt=0;nt<i;nt++)W[nt]=0,$[nt]=0,Q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:Q,object:F,attributes:{},index:null}}function g(F,W,$,Q){const nt=l.attributes,it=W.attributes;let st=0;const ut=$.getAttributes();for(const pt in ut)if(ut[pt].location>=0){const at=nt[pt];let Et=it[pt];if(Et===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;st++}return l.attributesNum!==st||l.index!==Q}function E(F,W,$,Q){const nt={},it=W.attributes;let st=0;const ut=$.getAttributes();for(const pt in ut)if(ut[pt].location>=0){let at=it[pt];at===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));const Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),nt[pt]=Et,st++}l.attributes=nt,l.attributesNum=st,l.index=Q}function M(){const F=l.newAttributes;for(let W=0,$=F.length;W<$;W++)F[W]=0}function w(F){O(F,0)}function O(F,W){const $=l.newAttributes,Q=l.enabledAttributes,nt=l.attributeDivisors;$[F]=1,Q[F]===0&&(s.enableVertexAttribArray(F),Q[F]=1),nt[F]!==W&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),nt[F]=W)}function L(){const F=l.newAttributes,W=l.enabledAttributes;for(let $=0,Q=W.length;$<Q;$++)W[$]!==F[$]&&(s.disableVertexAttribArray($),W[$]=0)}function I(F,W,$,Q,nt,it,st){st===!0?s.vertexAttribIPointer(F,W,$,nt,it):s.vertexAttribPointer(F,W,$,Q,nt,it)}function q(F,W,$,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const nt=Q.attributes,it=$.getAttributes(),st=W.defaultAttributeValues;for(const ut in it){const pt=it[ut];if(pt.location>=0){let K=nt[ut];if(K===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const at=K.normalized,Et=K.itemSize,wt=e.get(K);if(wt===void 0)continue;const Dt=wt.buffer,Wt=wt.type,Xt=wt.bytesPerElement,Ft=n.isWebGL2===!0&&(Wt===s.INT||Wt===s.UNSIGNED_INT||K.gpuType===vd);if(K.isInterleavedBufferAttribute){const ce=K.data,Y=ce.stride,pe=K.offset;if(ce.isInstancedInterleavedBuffer){for(let Bt=0;Bt<pt.locationSize;Bt++)O(pt.location+Bt,ce.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Bt=0;Bt<pt.locationSize;Bt++)w(pt.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let Bt=0;Bt<pt.locationSize;Bt++)I(pt.location+Bt,Et/pt.locationSize,Wt,at,Y*Xt,(pe+Et/pt.locationSize*Bt)*Xt,Ft)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<pt.locationSize;ce++)O(pt.location+ce,K.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<pt.locationSize;ce++)w(pt.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let ce=0;ce<pt.locationSize;ce++)I(pt.location+ce,Et/pt.locationSize,Wt,at,Et*Xt,Et/pt.locationSize*ce*Xt,Ft)}}else if(st!==void 0){const at=st[ut];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(pt.location,at);break;case 3:s.vertexAttrib3fv(pt.location,at);break;case 4:s.vertexAttrib4fv(pt.location,at);break;default:s.vertexAttrib1fv(pt.location,at)}}}}L()}function b(){J();for(const F in o){const W=o[F];for(const $ in W){const Q=W[$];for(const nt in Q)_(Q[nt].object),delete Q[nt];delete W[$]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;const W=o[F.id];for(const $ in W){const Q=W[$];for(const nt in Q)_(Q[nt].object),delete Q[nt];delete W[$]}delete o[F.id]}function j(F){for(const W in o){const $=o[W];if($[F.id]===void 0)continue;const Q=$[F.id];for(const nt in Q)_(Q[nt].object),delete Q[nt];delete $[F.id]}}function J(){ot(),h=!0,l!==c&&(l=c,f(l.object))}function ot(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:J,resetDefaultState:ot,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:M,enableAttribute:w,disableUnusedAttributes:L}}function w0(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,p){if(p===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,p),e.update(d,r,p)}function l(h,d,p){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<p;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,p);let _=0;for(let v=0;v<p;v++)_+=d[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function C0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,w=a||t.has("OES_texture_float"),O=M&&w,L=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:O,maxSamples:L}}function R0(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Ni,o=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||i;return i=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,M=E*4;let w=g.clippingState||null;c.value=w,w=h(_,p,M,f);for(let O=0;O!==M;++O)w[O]=e[O];g.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const g=f+v*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,w=f;M!==v;++M,w+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function P0(s){let t=new WeakMap;function e(a,o){return o===fc?a.mapping=Ls:o===pc&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fc||o===pc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gf(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fd extends Ud{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,ql=[.125,.215,.35,.446,.526,.582],zi=20,Ta=new Fd,jl=new yt;let wa=null,Ca=0,Ra=0;const Ui=(1+Math.sqrt(5))/2,us=1/Ui,Zl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ui,us),new U(0,Ui,-us),new U(us,0,Ui),new U(-us,0,Ui),new U(Ui,us,0),new U(-Ui,us,0)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ca,Ra),t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ur,format:Un,colorSpace:ai,depthBuffer:!1},i=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=I0(r,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,i){const o=new yn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(jl),h.toneMapping=ri,h.autoClear=!1;const f=new ci({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new te(new Te,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(jl),v=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):E===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const M=this._cubeSize;zr(i,E*M,g>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ls||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Zl[(i-1)%Zl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new te(this._lodPlanes[i],l),p=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const g=[];let E=0;for(let I=0;I<zi;++I){const q=I/v,b=Math.exp(-q*q/2);g.push(b),I===0?E+=b:I<m&&(E+=2*b)}for(let I=0;I<g.length;I++)g[I]=g[I]/E;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;const w=this._sizeLods[i],O=3*w*(i>M-As?i-M+As:0),L=4*(this._cubeSize-w);zr(e,O,L,3*w,2*w),c.setRenderTarget(e),c.render(d,Ta)}}function L0(s){const t=[],e=[],n=[];let i=s;const r=s-As+1+ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-As?c=ql[a-s+As-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,v=3,m=2,g=1,E=new Float32Array(v*_*f),M=new Float32Array(m*_*f),w=new Float32Array(g*_*f);for(let L=0;L<f;L++){const I=L%3*2/3-1,q=L>2?0:-1,b=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];E.set(b,v*_*L),M.set(p,m*_*L);const R=[L,L,L,L,L,L];w.set(R,g*_*L)}const O=new pn;O.setAttribute("position",new fn(E,v)),O.setAttribute("uv",new fn(M,m)),O.setAttribute("faceIndex",new fn(w,g)),t.push(O),i>As&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $l(s,t,e){const n=new qi(s,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function I0(s,t,e){const n=new Float32Array(zi),i=new U(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ql(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function D0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fc||c===pc,h=c===Ls||c===Is;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Kl(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Kl(s));const p=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function O0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N0(s,t,e,n){const i={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}p.removeEventListener("dispose",a),delete i[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,g=v.length;m<g;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let M=0,w=E.length;M<w;M+=3){const O=E[M+0],L=E[M+1],I=E[M+2];p.push(O,L,L,I,I,O)}}else if(_!==void 0){const E=_.array;v=_.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const O=M+0,L=M+1,I=M+2;p.push(O,L,L,I,I,O)}}else return;const m=new(Cd(p)?Od:Dd)(p,1);m.version=v;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function U0(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*c),e.update(_,r,1)}function d(f,_,v){if(v===0)return;let m,g;if(i)m=s,g="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,_,o,f*c,v),e.update(_,r,v)}function p(f,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<v;g++)this.render(f[g]/c,_[g]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,v);let g=0;for(let E=0;E<v;E++)g+=_[E];e.update(g,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function B0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function k0(s,t){return s[0]-t[0]}function F0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function z0(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let W=function(){ot.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var f=W;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],q=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),w===!0&&(b=2),O===!0&&(b=3);let R=h.attributes.position.count*b,j=1;R>t.maxTextureSize&&(j=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const J=new Float32Array(R*j*4*v),ot=new Ld(J,R,j,v);ot.type=Mi,ot.needsUpdate=!0;const F=b*4;for(let $=0;$<v;$++){const Q=L[$],nt=I[$],it=q[$],st=R*j*4*$;for(let ut=0;ut<Q.count;ut++){const pt=ut*F;M===!0&&(a.fromBufferAttribute(Q,ut),J[st+pt+0]=a.x,J[st+pt+1]=a.y,J[st+pt+2]=a.z,J[st+pt+3]=0),w===!0&&(a.fromBufferAttribute(nt,ut),J[st+pt+4]=a.x,J[st+pt+5]=a.y,J[st+pt+6]=a.z,J[st+pt+7]=0),O===!0&&(a.fromBufferAttribute(it,ut),J[st+pt+8]=a.x,J[st+pt+9]=a.y,J[st+pt+10]=a.z,J[st+pt+11]=it.itemSize===4?a.w:1)}}m={count:v,texture:ot,size:new $t(R,j)},r.set(h,m),h.addEventListener("dispose",W)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];const E=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let v=n[h.id];if(v===void 0||v.length!==_){v=[];for(let w=0;w<_;w++)v[w]=[w,0];n[h.id]=v}for(let w=0;w<_;w++){const O=v[w];O[0]=w,O[1]=p[w]}v.sort(F0);for(let w=0;w<8;w++)w<_&&v[w][1]?(o[w][0]=v[w][0],o[w][1]=v[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(k0);const m=h.morphAttributes.position,g=h.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const O=o[w],L=O[0],I=O[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&h.getAttribute("morphTarget"+w)!==m[L]&&h.setAttribute("morphTarget"+w,m[L]),g&&h.getAttribute("morphNormal"+w)!==g[L]&&h.setAttribute("morphNormal"+w,g[L]),i[w]=I,E+=I):(m&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),g&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const M=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function H0(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class zd extends an{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=yi),n===void 0&&h===Ds&&(n=Wi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=c!==void 0?c:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hd=new an,Gd=new zd(1,1);Gd.compareFunction=wd;const Vd=new Ld,Wd=new Af,Xd=new Bd,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function zs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=th[i];if(r===void 0&&(r=new Float32Array(i),th[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ho(s,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function G0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function W0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function X0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function Y0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;sh.set(n),s.uniformMatrix2fv(this.addr,!1,sh),qe(e,n)}}function q0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;ih.set(n),s.uniformMatrix3fv(this.addr,!1,ih),qe(e,n)}}function j0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;nh.set(n),s.uniformMatrix4fv(this.addr,!1,nh),qe(e,n)}}function Z0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function K0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function J0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function Q0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function ig(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Gd:Hd;e.setTexture2D(t||r,i)}function sg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wd,i)}function rg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xd,i)}function og(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vd,i)}function ag(s){switch(s){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return Y0;case 35675:return q0;case 35676:return j0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return $0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function cg(s,t){s.uniform1fv(this.addr,t)}function lg(s,t){const e=zs(t,this.size,2);s.uniform2fv(this.addr,e)}function hg(s,t){const e=zs(t,this.size,3);s.uniform3fv(this.addr,e)}function dg(s,t){const e=zs(t,this.size,4);s.uniform4fv(this.addr,e)}function ug(s,t){const e=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fg(s,t){const e=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pg(s,t){const e=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function mg(s,t){s.uniform1iv(this.addr,t)}function gg(s,t){s.uniform2iv(this.addr,t)}function _g(s,t){s.uniform3iv(this.addr,t)}function vg(s,t){s.uniform4iv(this.addr,t)}function xg(s,t){s.uniform1uiv(this.addr,t)}function yg(s,t){s.uniform2uiv(this.addr,t)}function Mg(s,t){s.uniform3uiv(this.addr,t)}function Eg(s,t){s.uniform4uiv(this.addr,t)}function Sg(s,t,e){const n=this.cache,i=t.length,r=Ho(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Hd,r[a])}function bg(s,t,e){const n=this.cache,i=t.length,r=Ho(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Wd,r[a])}function Ag(s,t,e){const n=this.cache,i=t.length,r=Ho(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Xd,r[a])}function Tg(s,t,e){const n=this.cache,i=t.length,r=Ho(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Vd,r[a])}function wg(s){switch(s){case 5126:return cg;case 35664:return lg;case 35665:return hg;case 35666:return dg;case 35674:return ug;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return yg;case 36295:return Mg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Tg}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}}class Pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function rh(s,t){s.seq.push(t),s.map[t.id]=t}function Lg(s,t,e){const n=s.name,i=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),a=Pa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){rh(e,l===void 0?new Cg(o,s,t):new Rg(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Pg(o),rh(e,d)),e=d}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Lg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function oh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ig=37297;let Dg=0;function Og(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ng(s){const t=ye.getPrimaries(ye.workingColorSpace),e=ye.getPrimaries(s);let n;switch(t===e?n="":t===To&&e===Ao?n="LinearDisplayP3ToLinearSRGB":t===Ao&&e===To&&(n="LinearSRGBToLinearDisplayP3"),s){case ai:case Bo:return[n,"LinearTransferOETF"];case $e:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ah(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Og(s.getShaderSource(t),a)}else return i}function Ug(s,t){const e=Ng(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bg(s,t){let e;switch(t){case Yu:e="Linear";break;case qu:e="Reinhard";break;case ju:e="OptimizedCineon";break;case Zu:e="ACESFilmic";break;case $u:e="AgX";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Fg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function zg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function ch(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(s){return s.replace(Gg,Wg)}const Vg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wg(s,t){let e=Qt[t];if(e===void 0){const n=Vg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(s){return s.replace(Xg,Yg)}function Yg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function $g(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=qg(e),l=jg(e),h=Zg(e),d=Kg(e),p=$g(e),f=e.isWebGL2?"":kg(e),_=Fg(e),v=zg(r),m=i.createProgram();let g,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ts).join(`
`),g.length>0&&(g+=`
`),E=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ts).join(`
`),E.length>0&&(E+=`
`)):(g=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),E=[f,dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Mc(a),a=ch(a,e),a=lh(a,e),o=Mc(o),o=ch(o,e),o=lh(o,e),a=hh(a),o=hh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=M+g+a,O=M+E+o,L=oh(i,i.VERTEX_SHADER,w),I=oh(i,i.FRAGMENT_SHADER,O);i.attachShader(m,L),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function q(J){if(s.debug.checkShaderErrors){const ot=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(I).trim();let $=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,I);else{const nt=ah(i,L,"vertex"),it=ah(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+nt+`
`+it)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(F===""||W==="")&&(Q=!1);Q&&(J.diagnostics={runnable:$,programLog:ot,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:E}})}i.deleteShader(L),i.deleteShader(I),b=new vo(i,m),R=Hg(i,m)}let b;this.getUniforms=function(){return b===void 0&&q(this),b};let R;this.getAttributes=function(){return R===void 0&&q(this),R};let j=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=i.getProgramParameter(m,Ig)),j},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=I,this}let Qg=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e_(t),e.set(t,n)),n}}class e_{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}}function n_(s,t,e,n,i,r,a){const o=new Hc,c=new t_,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,R,j,J,ot){const F=J.fog,W=ot.geometry,$=b.isMeshStandardMaterial?J.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),nt=Q&&Q.mapping===Uo?Q.image.height:null,it=_[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=st!==void 0?st.length:0;let pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let K,at,Et,wt;if(it){const Ke=Wn[it];K=Ke.vertexShader,at=Ke.fragmentShader}else K=b.vertexShader,at=b.fragmentShader,c.update(b),Et=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);const Dt=s.getRenderTarget(),Wt=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,Ft=!!b.map,ce=!!b.matcap,Y=!!Q,pe=!!b.aoMap,Bt=!!b.lightMap,Vt=!!b.bumpMap,Ct=!!b.normalMap,_e=!!b.displacementMap,qt=!!b.emissiveMap,P=!!b.metalnessMap,T=!!b.roughnessMap,X=b.anisotropy>0,ht=b.clearcoat>0,lt=b.iridescence>0,dt=b.sheen>0,Pt=b.transmission>0,vt=X&&!!b.anisotropyMap,bt=ht&&!!b.clearcoatMap,zt=ht&&!!b.clearcoatNormalMap,Yt=ht&&!!b.clearcoatRoughnessMap,rt=lt&&!!b.iridescenceMap,me=lt&&!!b.iridescenceThicknessMap,Jt=dt&&!!b.sheenColorMap,Gt=dt&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,At=!!b.specularColorMap,jt=!!b.specularIntensityMap,he=Pt&&!!b.transmissionMap,we=Pt&&!!b.thicknessMap,Zt=!!b.gradientMap,ft=!!b.alphaMap,B=b.alphaTest>0,Mt=!!b.alphaHash,xt=!!b.extensions,Ht=!!W.attributes.uv1,kt=!!W.attributes.uv2,ve=!!W.attributes.uv3;let xe=ri;return b.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(xe=s.toneMapping),{isWebGL2:h,shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:at,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Xt,instancing:Wt,instancingColor:Wt&&ot.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Dt===null?s.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:ai,map:Ft,matcap:ce,envMap:Y,envMapMode:Y&&Q.mapping,envMapCubeUVHeight:nt,aoMap:pe,lightMap:Bt,bumpMap:Vt,normalMap:Ct,displacementMap:p&&_e,emissiveMap:qt,normalMapObjectSpace:Ct&&b.normalMapType===hf,normalMapTangentSpace:Ct&&b.normalMapType===Td,metalnessMap:P,roughnessMap:T,anisotropy:X,anisotropyMap:vt,clearcoat:ht,clearcoatMap:bt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Yt,iridescence:lt,iridescenceMap:rt,iridescenceThicknessMap:me,sheen:dt,sheenColorMap:Jt,sheenRoughnessMap:Gt,specularMap:Rt,specularColorMap:At,specularIntensityMap:jt,transmission:Pt,transmissionMap:he,thicknessMap:we,gradientMap:Zt,opaque:b.transparent===!1&&b.blending===Cs,alphaMap:ft,alphaTest:B,alphaHash:Mt,combine:b.combine,mapUv:Ft&&v(b.map.channel),aoMapUv:pe&&v(b.aoMap.channel),lightMapUv:Bt&&v(b.lightMap.channel),bumpMapUv:Vt&&v(b.bumpMap.channel),normalMapUv:Ct&&v(b.normalMap.channel),displacementMapUv:_e&&v(b.displacementMap.channel),emissiveMapUv:qt&&v(b.emissiveMap.channel),metalnessMapUv:P&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:vt&&v(b.anisotropyMap.channel),clearcoatMapUv:bt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:zt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&v(b.sheenRoughnessMap.channel),specularMapUv:Rt&&v(b.specularMap.channel),specularColorMapUv:At&&v(b.specularColorMap.channel),specularIntensityMapUv:jt&&v(b.specularIntensityMap.channel),transmissionMapUv:he&&v(b.transmissionMap.channel),thicknessMapUv:we&&v(b.thicknessMap.channel),alphaMapUv:ft&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||X),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ht,vertexUv2s:kt,vertexUv3s:ve,pointsUvs:ot.isPoints===!0&&!!W.attributes.uv&&(Ft||ft),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ot.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:pt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&ye.getTransfer(b.map.colorSpace)===Re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const j in b.defines)R.push(j),R.push(b.defines[j]);return b.isRawShaderMaterial===!1&&(E(R,b),M(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function E(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function M(b,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function w(b){const R=_[b.type];let j;if(R){const J=Wn[R];j=kf.clone(J.uniforms)}else j=b.uniforms;return j}function O(b,R){let j;for(let J=0,ot=l.length;J<ot;J++){const F=l[J];if(F.cacheKey===R){j=F,++j.usedTimes;break}}return j===void 0&&(j=new Jg(s,R,b,r),l.push(j)),j}function L(b){if(--b.usedTimes===0){const R=l.indexOf(b);l[R]=l[l.length-1],l.pop(),b.destroy()}}function I(b){c.remove(b)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:w,acquireProgram:O,releaseProgram:L,releaseShaderCache:I,programs:l,dispose:q}}function i_(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function s_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,p,f,_,v,m){let g=s[t];return g===void 0?(g={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},s[t]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=f,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=v,g.group=m),t++,g}function o(d,p,f,_,v,m){const g=a(d,p,f,_,v,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function c(d,p,f,_,v,m){const g=a(d,p,f,_,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function l(d,p){e.length>1&&e.sort(d||s_),n.length>1&&n.sort(p||uh),i.length>1&&i.sort(p||uh)}function h(){for(let d=t,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function r_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new fh,s.set(n,[a])):i>=r.length?(a=new fh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function o_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new yt};break;case"SpotLight":e={position:new U,direction:new U,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function a_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let c_=0;function l_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function h_(s,t){const e=new o_,n=a_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,a=new be,o=new be;function c(h,d){let p=0,f=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let v=0,m=0,g=0,E=0,M=0,w=0,O=0,L=0,I=0,q=0,b=0;h.sort(l_);const R=d===!0?Math.PI:1;for(let J=0,ot=h.length;J<ot;J++){const F=h[J],W=F.color,$=F.intensity,Q=F.distance,nt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=W.r*$*R,f+=W.g*$*R,_+=W.b*$*R;else if(F.isLightProbe){for(let it=0;it<9;it++)i.probe[it].addScaledVector(F.sh.coefficients[it],$);b++}else if(F.isDirectionalLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const st=F.shadow,ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.directionalShadow[v]=ut,i.directionalShadowMap[v]=nt,i.directionalShadowMatrix[v]=F.shadow.matrix,w++}i.directional[v]=it,v++}else if(F.isSpotLight){const it=e.get(F);it.position.setFromMatrixPosition(F.matrixWorld),it.color.copy(W).multiplyScalar($*R),it.distance=Q,it.coneCos=Math.cos(F.angle),it.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),it.decay=F.decay,i.spot[g]=it;const st=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,st.updateMatrices(F),F.castShadow&&q++),i.spotLightMatrix[g]=st.matrix,F.castShadow){const ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,i.spotShadow[g]=ut,i.spotShadowMap[g]=nt,L++}g++}else if(F.isRectAreaLight){const it=e.get(F);it.color.copy(W).multiplyScalar($),it.halfWidth.set(F.width*.5,0,0),it.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=it,E++}else if(F.isPointLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*R),it.distance=F.distance,it.decay=F.decay,F.castShadow){const st=F.shadow,ut=n.get(F);ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,ut.shadowCameraNear=st.camera.near,ut.shadowCameraFar=st.camera.far,i.pointShadow[m]=ut,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=F.shadow.matrix,O++}i.point[m]=it,m++}else if(F.isHemisphereLight){const it=e.get(F);it.skyColor.copy(F.color).multiplyScalar($*R),it.groundColor.copy(F.groundColor).multiplyScalar($*R),i.hemi[M]=it,M++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==v||j.pointLength!==m||j.spotLength!==g||j.rectAreaLength!==E||j.hemiLength!==M||j.numDirectionalShadows!==w||j.numPointShadows!==O||j.numSpotShadows!==L||j.numSpotMaps!==I||j.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=g,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=O,i.pointShadowMap.length=O,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=O,i.spotLightMatrix.length=L+I-q,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=b,j.directionalLength=v,j.pointLength=m,j.spotLength=g,j.rectAreaLength=E,j.hemiLength=M,j.numDirectionalShadows=w,j.numPointShadows=O,j.numSpotShadows=L,j.numSpotMaps=I,j.numLightProbes=b,i.version=c_++)}function l(h,d){let p=0,f=0,_=0,v=0,m=0;const g=d.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const w=h[E];if(w.isDirectionalLight){const O=i.directional[p];O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),p++}else if(w.isSpotLight){const O=i.spot[_];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),_++}else if(w.isRectAreaLight){const O=i.rectArea[v];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(g),o.identity(),a.copy(w.matrixWorld),a.premultiply(g),o.extractRotation(a),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const O=i.point[f];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){const O=i.hemi[m];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(g),m++}}}return{setup:c,setupView:l,state:i}}function ph(s,t){const e=new h_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function d_(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ph(s,t),e.set(r,[c])):a>=o.length?(c=new ph(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class u_ extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f_ extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(s,t,e){let n=new Gc;const i=new $t,r=new $t,a=new Le,o=new u_({depthPacking:lf}),c=new f_,l={},h=e.maxTextureSize,d={[oi]:on,[on]:oi,[Xn]:Xn},p=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new te(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let g=this.type;this.render=function(L,I,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ei),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ot=g!==ei&&this.type===ei,F=g===ei&&this.type!==ei;for(let W=0,$=L.length;W<$;W++){const Q=L[W],nt=Q.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const it=nt.getFrameExtents();if(i.multiply(it),r.copy(nt.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,nt.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,nt.mapSize.y=r.y)),nt.map===null||ot===!0||F===!0){const ut=this.type!==ei?{minFilter:De,magFilter:De}:{};nt.map!==null&&nt.map.dispose(),nt.map=new qi(i.x,i.y,ut),nt.map.texture.name=Q.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const st=nt.getViewportCount();for(let ut=0;ut<st;ut++){const pt=nt.getViewport(ut);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),J.viewport(a),nt.updateMatrices(Q,ut),n=nt.getFrustum(),w(I,q,nt.camera,Q,this.type)}nt.isPointLightShadow!==!0&&this.type===ei&&E(nt,q),nt.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(b,R,j)};function E(L,I){const q=t.update(v);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(i.x,i.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,q,p,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,q,f,v,null)}function M(L,I,q,b){let R=null;const j=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)R=j;else if(R=q.isPointLight===!0?c:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=R.uuid,ot=I.uuid;let F=l[J];F===void 0&&(F={},l[J]=F);let W=F[ot];W===void 0&&(W=R.clone(),F[ot]=W,I.addEventListener("dispose",O)),R=W}if(R.visible=I.visible,R.wireframe=I.wireframe,b===ei?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:d[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=q}return R}function w(L,I,q,b,R){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===ei)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const ot=t.update(L),F=L.material;if(Array.isArray(F)){const W=ot.groups;for(let $=0,Q=W.length;$<Q;$++){const nt=W[$],it=F[nt.materialIndex];if(it&&it.visible){const st=M(L,it,b,R);L.onBeforeShadow(s,L,I,q,ot,st,nt),s.renderBufferDirect(q,null,ot,st,L,nt),L.onAfterShadow(s,L,I,q,ot,st,nt)}}}else if(F.visible){const W=M(L,F,b,R);L.onBeforeShadow(s,L,I,q,ot,W,null),s.renderBufferDirect(q,null,ot,W,L,null),L.onAfterShadow(s,L,I,q,ot,W,null)}}const J=L.children;for(let ot=0,F=J.length;ot<F;ot++)w(J[ot],I,q,b,R)}function O(L){L.target.removeEventListener("dispose",O);for(const q in l){const b=l[q],R=L.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function __(s,t,e){const n=e.isWebGL2;function i(){let B=!1;const Mt=new Le;let xt=null;const Ht=new Le(0,0,0,0);return{setMask:function(kt){xt!==kt&&!B&&(s.colorMask(kt,kt,kt,kt),xt=kt)},setLocked:function(kt){B=kt},setClear:function(kt,ve,xe,fe,Ke){Ke===!0&&(kt*=fe,ve*=fe,xe*=fe),Mt.set(kt,ve,xe,fe),Ht.equals(Mt)===!1&&(s.clearColor(kt,ve,xe,fe),Ht.copy(Mt))},reset:function(){B=!1,xt=null,Ht.set(-1,0,0,0)}}}function r(){let B=!1,Mt=null,xt=null,Ht=null;return{setTest:function(kt){kt?Xt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(kt){Mt!==kt&&!B&&(s.depthMask(kt),Mt=kt)},setFunc:function(kt){if(xt!==kt){switch(kt){case Bu:s.depthFunc(s.NEVER);break;case ku:s.depthFunc(s.ALWAYS);break;case Fu:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case zu:s.depthFunc(s.EQUAL);break;case Hu:s.depthFunc(s.GEQUAL);break;case Gu:s.depthFunc(s.GREATER);break;case Vu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=kt}},setLocked:function(kt){B=kt},setClear:function(kt){Ht!==kt&&(s.clearDepth(kt),Ht=kt)},reset:function(){B=!1,Mt=null,xt=null,Ht=null}}}function a(){let B=!1,Mt=null,xt=null,Ht=null,kt=null,ve=null,xe=null,fe=null,Ke=null;return{setTest:function(le){B||(le?Xt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(le){Mt!==le&&!B&&(s.stencilMask(le),Mt=le)},setFunc:function(le,Ve,cn){(xt!==le||Ht!==Ve||kt!==cn)&&(s.stencilFunc(le,Ve,cn),xt=le,Ht=Ve,kt=cn)},setOp:function(le,Ve,cn){(ve!==le||xe!==Ve||fe!==cn)&&(s.stencilOp(le,Ve,cn),ve=le,xe=Ve,fe=cn)},setLocked:function(le){B=le},setClear:function(le){Ke!==le&&(s.clearStencil(le),Ke=le)},reset:function(){B=!1,Mt=null,xt=null,Ht=null,kt=null,ve=null,xe=null,fe=null,Ke=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let p={},f={},_=new WeakMap,v=[],m=null,g=!1,E=null,M=null,w=null,O=null,L=null,I=null,q=null,b=new yt(0,0,0),R=0,j=!1,J=null,ot=null,F=null,W=null,$=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,it=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(st)[1]),nt=it>=1):st.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),nt=it>=2);let ut=null,pt={};const K=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),Et=new Le().fromArray(K),wt=new Le().fromArray(at);function Dt(B,Mt,xt,Ht){const kt=new Uint8Array(4),ve=s.createTexture();s.bindTexture(B,ve),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<xt;xe++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(Mt,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Mt+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return ve}const Wt={};Wt[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Wt[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Wt[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Wt[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(s.DEPTH_TEST),c.setFunc(So),qt(!1),P(Kc),Xt(s.CULL_FACE),Ct(Ei);function Xt(B){p[B]!==!0&&(s.enable(B),p[B]=!0)}function Ft(B){p[B]!==!1&&(s.disable(B),p[B]=!1)}function ce(B,Mt){return f[B]!==Mt?(s.bindFramebuffer(B,Mt),f[B]=Mt,n&&(B===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Mt),B===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function Y(B,Mt){let xt=v,Ht=!1;if(B)if(xt=_.get(Mt),xt===void 0&&(xt=[],_.set(Mt,xt)),B.isWebGLMultipleRenderTargets){const kt=B.texture;if(xt.length!==kt.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,xe=kt.length;ve<xe;ve++)xt[ve]=s.COLOR_ATTACHMENT0+ve;xt.length=kt.length,Ht=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,Ht=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,Ht=!0);Ht&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function pe(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const Bt={[Fi]:s.FUNC_ADD,[Eu]:s.FUNC_SUBTRACT,[Su]:s.FUNC_REVERSE_SUBTRACT};if(n)Bt[tl]=s.MIN,Bt[el]=s.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(Bt[tl]=B.MIN_EXT,Bt[el]=B.MAX_EXT)}const Vt={[bu]:s.ZERO,[Au]:s.ONE,[Tu]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[Iu]:s.SRC_ALPHA_SATURATE,[Pu]:s.DST_COLOR,[Cu]:s.DST_ALPHA,[wu]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[Lu]:s.ONE_MINUS_DST_COLOR,[Ru]:s.ONE_MINUS_DST_ALPHA,[Du]:s.CONSTANT_COLOR,[Ou]:s.ONE_MINUS_CONSTANT_COLOR,[Nu]:s.CONSTANT_ALPHA,[Uu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(B,Mt,xt,Ht,kt,ve,xe,fe,Ke,le){if(B===Ei){g===!0&&(Ft(s.BLEND),g=!1);return}if(g===!1&&(Xt(s.BLEND),g=!0),B!==Mu){if(B!==E||le!==j){if((M!==Fi||L!==Fi)&&(s.blendEquation(s.FUNC_ADD),M=Fi,L=Fi),le)switch(B){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,O=null,I=null,q=null,b.set(0,0,0),R=0,E=B,j=le}return}kt=kt||Mt,ve=ve||xt,xe=xe||Ht,(Mt!==M||kt!==L)&&(s.blendEquationSeparate(Bt[Mt],Bt[kt]),M=Mt,L=kt),(xt!==w||Ht!==O||ve!==I||xe!==q)&&(s.blendFuncSeparate(Vt[xt],Vt[Ht],Vt[ve],Vt[xe]),w=xt,O=Ht,I=ve,q=xe),(fe.equals(b)===!1||Ke!==R)&&(s.blendColor(fe.r,fe.g,fe.b,Ke),b.copy(fe),R=Ke),E=B,j=!1}function _e(B,Mt){B.side===Xn?Ft(s.CULL_FACE):Xt(s.CULL_FACE);let xt=B.side===on;Mt&&(xt=!xt),qt(xt),B.blending===Cs&&B.transparent===!1?Ct(Ei):Ct(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);const Ht=B.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(B){J!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),J=B)}function P(B){B!==vu?(Xt(s.CULL_FACE),B!==ot&&(B===Kc?s.cullFace(s.BACK):B===xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),ot=B}function T(B){B!==F&&(nt&&s.lineWidth(B),F=B)}function X(B,Mt,xt){B?(Xt(s.POLYGON_OFFSET_FILL),(W!==Mt||$!==xt)&&(s.polygonOffset(Mt,xt),W=Mt,$=xt)):Ft(s.POLYGON_OFFSET_FILL)}function ht(B){B?Xt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function lt(B){B===void 0&&(B=s.TEXTURE0+Q-1),ut!==B&&(s.activeTexture(B),ut=B)}function dt(B,Mt,xt){xt===void 0&&(ut===null?xt=s.TEXTURE0+Q-1:xt=ut);let Ht=pt[xt];Ht===void 0&&(Ht={type:void 0,texture:void 0},pt[xt]=Ht),(Ht.type!==B||Ht.texture!==Mt)&&(ut!==xt&&(s.activeTexture(xt),ut=xt),s.bindTexture(B,Mt||Wt[B]),Ht.type=B,Ht.texture=Mt)}function Pt(){const B=pt[ut];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(B){Et.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Et.copy(B))}function he(B){wt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),wt.copy(B))}function we(B,Mt){let xt=d.get(Mt);xt===void 0&&(xt=new WeakMap,d.set(Mt,xt));let Ht=xt.get(B);Ht===void 0&&(Ht=s.getUniformBlockIndex(Mt,B.name),xt.set(B,Ht))}function Zt(B,Mt){const Ht=d.get(Mt).get(B);h.get(Mt)!==Ht&&(s.uniformBlockBinding(Mt,Ht,B.__bindingPointIndex),h.set(Mt,Ht))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ut=null,pt={},f={},_=new WeakMap,v=[],m=null,g=!1,E=null,M=null,w=null,O=null,L=null,I=null,q=null,b=new yt(0,0,0),R=0,j=!1,J=null,ot=null,F=null,W=null,$=null,Et.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Xt,disable:Ft,bindFramebuffer:ce,drawBuffers:Y,useProgram:pe,setBlending:Ct,setMaterial:_e,setFlipSided:qt,setCullFace:P,setLineWidth:T,setPolygonOffset:X,setScissorTest:ht,activeTexture:lt,bindTexture:dt,unbindTexture:Pt,compressedTexImage2D:vt,compressedTexImage3D:bt,texImage2D:Rt,texImage3D:At,updateUBOMapping:we,uniformBlockBinding:Zt,texStorage2D:Jt,texStorage3D:Gt,texSubImage2D:zt,texSubImage3D:Yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:me,scissor:jt,viewport:he,reset:ft}}function v_(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return f?new OffscreenCanvas(P,T):Co("canvas")}function v(P,T,X,ht){let lt=1;if((P.width>ht||P.height>ht)&&(lt=ht/Math.max(P.width,P.height)),lt<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const dt=T?yc:Math.floor,Pt=dt(lt*P.width),vt=dt(lt*P.height);d===void 0&&(d=_(Pt,vt));const bt=X?_(Pt,vt):d;return bt.width=Pt,bt.height=vt,bt.getContext("2d").drawImage(P,0,0,Pt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pt+"x"+vt+")."),bt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Pl(P.width)&&Pl(P.height)}function g(P){return o?!1:P.wrapS!==Mn||P.wrapT!==Mn||P.minFilter!==De&&P.minFilter!==Tn}function E(P,T){return P.generateMipmaps&&T&&P.minFilter!==De&&P.minFilter!==Tn}function M(P){s.generateMipmap(P)}function w(P,T,X,ht,lt=!1){if(o===!1)return T;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=T;if(T===s.RED&&(X===s.FLOAT&&(dt=s.R32F),X===s.HALF_FLOAT&&(dt=s.R16F),X===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(dt=s.R8UI),X===s.UNSIGNED_SHORT&&(dt=s.R16UI),X===s.UNSIGNED_INT&&(dt=s.R32UI),X===s.BYTE&&(dt=s.R8I),X===s.SHORT&&(dt=s.R16I),X===s.INT&&(dt=s.R32I)),T===s.RG&&(X===s.FLOAT&&(dt=s.RG32F),X===s.HALF_FLOAT&&(dt=s.RG16F),X===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RGBA){const Pt=lt?bo:ye.getTransfer(ht);X===s.FLOAT&&(dt=s.RGBA32F),X===s.HALF_FLOAT&&(dt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(dt=Pt===Re?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function O(P,T,X){return E(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==Tn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){return P===De||P===nl||P===na?s.NEAREST:s.LINEAR}function I(P){const T=P.target;T.removeEventListener("dispose",I),b(T),T.isVideoTexture&&h.delete(T)}function q(P){const T=P.target;T.removeEventListener("dispose",q),j(T)}function b(P){const T=n.get(P);if(T.__webglInit===void 0)return;const X=P.source,ht=p.get(X);if(ht){const lt=ht[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(P),Object.keys(ht).length===0&&p.delete(X)}n.remove(P)}function R(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const X=P.source,ht=p.get(X);delete ht[T.__cacheKey],a.memory.textures--}function j(P){const T=P.texture,X=n.get(P),ht=n.get(T);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(X.__webglFramebuffer[lt]))for(let dt=0;dt<X.__webglFramebuffer[lt].length;dt++)s.deleteFramebuffer(X.__webglFramebuffer[lt][dt]);else s.deleteFramebuffer(X.__webglFramebuffer[lt]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[lt])}else{if(Array.isArray(X.__webglFramebuffer))for(let lt=0;lt<X.__webglFramebuffer.length;lt++)s.deleteFramebuffer(X.__webglFramebuffer[lt]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let lt=0;lt<X.__webglColorRenderbuffer.length;lt++)X.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[lt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let lt=0,dt=T.length;lt<dt;lt++){const Pt=n.get(T[lt]);Pt.__webglTexture&&(s.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(T[lt])}n.remove(T),n.remove(P)}let J=0;function ot(){J=0}function F(){const P=J;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),J+=1,P}function W(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function $(P,T){const X=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ht=P.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(X,P,T);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+T)}function Q(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Et(X,P,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+T)}function nt(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Et(X,P,T);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+T)}function it(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){wt(X,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+T)}const st={[mc]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[gc]:s.MIRRORED_REPEAT},ut={[De]:s.NEAREST,[nl]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Ju]:s.LINEAR_MIPMAP_NEAREST,[dr]:s.LINEAR_MIPMAP_LINEAR},pt={[df]:s.NEVER,[_f]:s.ALWAYS,[uf]:s.LESS,[wd]:s.LEQUAL,[ff]:s.EQUAL,[gf]:s.GEQUAL,[pf]:s.GREATER,[mf]:s.NOTEQUAL};function K(P,T,X){if(X?(s.texParameteri(P,s.TEXTURE_WRAP_S,st[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ut[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ut[T.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==Mn||T.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L(T.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L(T.minFilter)),T.minFilter!==De&&T.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===De||T.minFilter!==na&&T.minFilter!==dr||T.type===Mi&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===ur&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(P,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function at(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I));const ht=T.source;let lt=p.get(ht);lt===void 0&&(lt={},p.set(ht,lt));const dt=W(T);if(dt!==P.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),lt[dt].usedTimes++;const Pt=lt[P.__cacheKey];Pt!==void 0&&(lt[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&R(T)),P.__cacheKey=dt,P.__webglTexture=lt[dt].texture}return X}function Et(P,T,X){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const lt=at(P,T),dt=T.source;e.bindTexture(ht,P.__webglTexture,s.TEXTURE0+X);const Pt=n.get(dt);if(dt.version!==Pt.__version||lt===!0){e.activeTexture(s.TEXTURE0+X);const vt=ye.getPrimaries(ye.workingColorSpace),bt=T.colorSpace===wn?null:ye.getPrimaries(T.colorSpace),zt=T.colorSpace===wn||vt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Yt=g(T)&&m(T.image)===!1;let rt=v(T.image,Yt,!1,i.maxTextureSize);rt=qt(T,rt);const me=m(rt)||o,Jt=r.convert(T.format,T.colorSpace);let Gt=r.convert(T.type),Rt=w(T.internalFormat,Jt,Gt,T.colorSpace,T.isVideoTexture);K(ht,T,me);let At;const jt=T.mipmaps,he=o&&T.isVideoTexture!==!0&&Rt!==bd,we=Pt.__version===void 0||lt===!0,Zt=O(T,rt,me);if(T.isDepthTexture)Rt=s.DEPTH_COMPONENT,o?T.type===Mi?Rt=s.DEPTH_COMPONENT32F:T.type===yi?Rt=s.DEPTH_COMPONENT24:T.type===Wi?Rt=s.DEPTH24_STENCIL8:Rt=s.DEPTH_COMPONENT16:T.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Xi&&Rt===s.DEPTH_COMPONENT&&T.type!==Fc&&T.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=yi,Gt=r.convert(T.type)),T.format===Ds&&Rt===s.DEPTH_COMPONENT&&(Rt=s.DEPTH_STENCIL,T.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Wi,Gt=r.convert(T.type))),we&&(he?e.texStorage2D(s.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,Jt,Gt,null));else if(T.isDataTexture)if(jt.length>0&&me){he&&we&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],he?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,Jt,Gt,At.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,Jt,Gt,At.data);T.generateMipmaps=!1}else he?(we&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Jt,Gt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,Jt,Gt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){he&&we&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Rt,jt[0].width,jt[0].height,rt.depth);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],T.format!==Un?Jt!==null?he?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,Jt,At.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,At.width,At.height,rt.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,rt.depth,Jt,Gt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Rt,At.width,At.height,rt.depth,0,Jt,Gt,At.data)}else{he&&we&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],T.format!==Un?Jt!==null?he?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,Jt,At.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,At.width,At.height,Jt,Gt,At.data):e.texImage2D(s.TEXTURE_2D,ft,Rt,At.width,At.height,0,Jt,Gt,At.data)}else if(T.isDataArrayTexture)he?(we&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Gt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,Jt,Gt,rt.data);else if(T.isData3DTexture)he?(we&&e.texStorage3D(s.TEXTURE_3D,Zt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Gt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,Jt,Gt,rt.data);else if(T.isFramebufferTexture){if(we)if(he)e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height);else{let ft=rt.width,B=rt.height;for(let Mt=0;Mt<Zt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Rt,ft,B,0,Jt,Gt,null),ft>>=1,B>>=1}}else if(jt.length>0&&me){he&&we&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,jt[0].width,jt[0].height);for(let ft=0,B=jt.length;ft<B;ft++)At=jt[ft],he?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Jt,Gt,At):e.texImage2D(s.TEXTURE_2D,ft,Rt,Jt,Gt,At);T.generateMipmaps=!1}else he?(we&&e.texStorage2D(s.TEXTURE_2D,Zt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,Gt,rt)):e.texImage2D(s.TEXTURE_2D,0,Rt,Jt,Gt,rt);E(T,me)&&M(ht),Pt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function wt(P,T,X){if(T.image.length!==6)return;const ht=at(P,T),lt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);const dt=n.get(lt);if(lt.version!==dt.__version||ht===!0){e.activeTexture(s.TEXTURE0+X);const Pt=ye.getPrimaries(ye.workingColorSpace),vt=T.colorSpace===wn?null:ye.getPrimaries(T.colorSpace),bt=T.colorSpace===wn||Pt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Yt=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let ft=0;ft<6;ft++)!zt&&!Yt?rt[ft]=v(T.image[ft],!1,!0,i.maxCubemapSize):rt[ft]=Yt?T.image[ft].image:T.image[ft],rt[ft]=qt(T,rt[ft]);const me=rt[0],Jt=m(me)||o,Gt=r.convert(T.format,T.colorSpace),Rt=r.convert(T.type),At=w(T.internalFormat,Gt,Rt,T.colorSpace),jt=o&&T.isVideoTexture!==!0,he=dt.__version===void 0||ht===!0;let we=O(T,me,Jt);K(s.TEXTURE_CUBE_MAP,T,Jt);let Zt;if(zt){jt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,we,At,me.width,me.height);for(let ft=0;ft<6;ft++){Zt=rt[ft].mipmaps;for(let B=0;B<Zt.length;B++){const Mt=Zt[B];T.format!==Un?Gt!==null?jt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,At,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,At,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{Zt=T.mipmaps,jt&&he&&(Zt.length>0&&we++,e.texStorage2D(s.TEXTURE_CUBE_MAP,we,At,rt[0].width,rt[0].height));for(let ft=0;ft<6;ft++)if(Yt){jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,rt[ft].width,rt[ft].height,Gt,Rt,rt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,rt[ft].width,rt[ft].height,0,Gt,Rt,rt[ft].data);for(let B=0;B<Zt.length;B++){const xt=Zt[B].image[ft].image;jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,xt.width,xt.height,Gt,Rt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,At,xt.width,xt.height,0,Gt,Rt,xt.data)}}else{jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Gt,Rt,rt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,At,Gt,Rt,rt[ft]);for(let B=0;B<Zt.length;B++){const Mt=Zt[B];jt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,Gt,Rt,Mt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,At,Gt,Rt,Mt.image[ft])}}}E(T,Jt)&&M(s.TEXTURE_CUBE_MAP),dt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Dt(P,T,X,ht,lt,dt){const Pt=r.convert(X.format,X.colorSpace),vt=r.convert(X.type),bt=w(X.internalFormat,Pt,vt,X.colorSpace);if(!n.get(T).__hasExternalTextures){const Yt=Math.max(1,T.width>>dt),rt=Math.max(1,T.height>>dt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,bt,Yt,rt,T.depth,0,Pt,vt,null):e.texImage2D(lt,dt,bt,Yt,rt,0,Pt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,lt,n.get(X).__webglTexture,0,Vt(T)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,lt,n.get(X).__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(P,T,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ht=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||Ct(T)){const lt=T.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Mi?ht=s.DEPTH_COMPONENT32F:lt.type===yi&&(ht=s.DEPTH_COMPONENT24));const dt=Vt(T);Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ht,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ht,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ht=Vt(T);X&&Ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,T.width,T.height):Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ht=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let lt=0;lt<ht.length;lt++){const dt=ht[lt],Pt=r.convert(dt.format,dt.colorSpace),vt=r.convert(dt.type),bt=w(dt.internalFormat,Pt,vt,dt.colorSpace),zt=Vt(T);X&&Ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,T.width,T.height):Ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,bt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,bt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const ht=n.get(T.depthTexture).__webglTexture,lt=Vt(T);if(T.depthTexture.format===Xi)Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Ds)Ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ft(P){const T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Xt(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]=s.createRenderbuffer(),Wt(T.__webglDepthbuffer[ht],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Wt(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(P,T,X){const ht=n.get(P);T!==void 0&&Dt(ht.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ft(P)}function Y(P){const T=P.texture,X=n.get(P),ht=n.get(T);P.addEventListener("dispose",q),P.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,a.memory.textures++);const lt=P.isWebGLCubeRenderTarget===!0,dt=P.isWebGLMultipleRenderTargets===!0,Pt=m(P)||o;if(lt){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let bt=0;bt<T.mipmaps.length;bt++)X.__webglFramebuffer[vt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)X.__webglFramebuffer[vt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(dt)if(i.drawBuffers){const vt=P.texture;for(let bt=0,zt=vt.length;bt<zt;bt++){const Yt=n.get(vt[bt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ct(P)===!1){const vt=dt?T:[T];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let bt=0;bt<vt.length;bt++){const zt=vt[bt];X.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[bt]);const Yt=r.convert(zt.format,zt.colorSpace),rt=r.convert(zt.type),me=w(zt.internalFormat,Yt,rt,zt.colorSpace,P.isXRRenderTarget===!0),Jt=Vt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,me,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,X.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),K(s.TEXTURE_CUBE_MAP,T,Pt);for(let vt=0;vt<6;vt++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Dt(X.__webglFramebuffer[vt][bt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else Dt(X.__webglFramebuffer[vt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(T,Pt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const vt=P.texture;for(let bt=0,zt=vt.length;bt<zt;bt++){const Yt=vt[bt],rt=n.get(Yt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),K(s.TEXTURE_2D,Yt,Pt),Dt(X.__webglFramebuffer,P,Yt,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),E(Yt,Pt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?vt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),K(vt,T,Pt),o&&T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Dt(X.__webglFramebuffer[bt],P,T,s.COLOR_ATTACHMENT0,vt,bt);else Dt(X.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,vt,0);E(T,Pt)&&M(vt),e.unbindTexture()}P.depthBuffer&&Ft(P)}function pe(P){const T=m(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ht=0,lt=X.length;ht<lt;ht++){const dt=X[ht];if(E(dt,T)){const Pt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(dt).__webglTexture;e.bindTexture(Pt,vt),M(Pt),e.unbindTexture()}}}function Bt(P){if(o&&P.samples>0&&Ct(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,ht=P.height;let lt=s.COLOR_BUFFER_BIT;const dt=[],Pt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(P),bt=P.isWebGLMultipleRenderTargets===!0;if(bt)for(let zt=0;zt<T.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){dt.push(s.COLOR_ATTACHMENT0+zt),P.depthBuffer&&dt.push(Pt);const Yt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Yt===!1&&(P.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),bt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]),Yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pt])),bt){const rt=n.get(T[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,X,ht,0,0,X,ht,lt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let zt=0;zt<T.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[zt]);const Yt=n.get(T[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Vt(P){return Math.min(i.maxSamples,P.samples)}function Ct(P){const T=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _e(P){const T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function qt(P,T){const X=P.colorSpace,ht=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===vc||X!==ai&&X!==wn&&(ye.getTransfer(X)===Re?o===!1?t.has("EXT_sRGB")===!0&&ht===Un?(P.format=vc,P.minFilter=Tn,P.generateMipmaps=!1):T=Rd.sRGBToLinear(T):(ht!==Un||lt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=F,this.resetTextureUnits=ot,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=nt,this.setTextureCube=it,this.rebindTextures=ce,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ct}function x_(s,t,e){const n=e.isWebGL2;function i(r,a=wn){let o;const c=ye.getTransfer(a);if(r===Si)return s.UNSIGNED_BYTE;if(r===xd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qu)return s.BYTE;if(r===tf)return s.SHORT;if(r===Fc)return s.UNSIGNED_SHORT;if(r===vd)return s.INT;if(r===yi)return s.UNSIGNED_INT;if(r===Mi)return s.FLOAT;if(r===ur)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ef)return s.ALPHA;if(r===Un)return s.RGBA;if(r===nf)return s.LUMINANCE;if(r===sf)return s.LUMINANCE_ALPHA;if(r===Xi)return s.DEPTH_COMPONENT;if(r===Ds)return s.DEPTH_STENCIL;if(r===vc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rf)return s.RED;if(r===Md)return s.RED_INTEGER;if(r===of)return s.RG;if(r===Ed)return s.RG_INTEGER;if(r===Sd)return s.RGBA_INTEGER;if(r===ia||r===sa||r===ra||r===oa)if(c===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===il||r===sl||r===rl||r===ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===al||r===cl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===al)return c===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===cl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ll||r===hl||r===dl||r===ul||r===fl||r===pl||r===ml||r===gl||r===_l||r===vl||r===xl||r===yl||r===Ml||r===El)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ll)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ul)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ml)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_l)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yl)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ml)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===El)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===aa||r===Sl||r===bl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===aa)return c===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===af||r===Al||r===Tl||r===wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===aa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class y_ extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M_={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class E_ extends Fs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,_=null;const v=e.getContextAttributes();let m=null,g=null;const E=[],M=[],w=new $t;let O=null;const L=new yn;L.layers.enable(1),L.viewport=new Le;const I=new yn;I.layers.enable(2),I.viewport=new Le;const q=[L,I],b=new y_;b.layers.enable(1),b.layers.enable(2);let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=E[K];return at===void 0&&(at=new La,E[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=E[K];return at===void 0&&(at=new La,E[K]=at),at.getGripSpace()},this.getHand=function(K){let at=E[K];return at===void 0&&(at=new La,E[K]=at),at.getHandSpace()};function J(K){const at=M.indexOf(K.inputSource);if(at===-1)return;const Et=E[at];Et!==void 0&&(Et.update(K.inputSource,K.frame,l||a),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function ot(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",ot),i.removeEventListener("inputsourceschange",F);for(let K=0;K<E.length;K++){const at=M[K];at!==null&&(M[K]=null,E[K].disconnect(at))}R=null,j=null,t.setRenderTarget(m),f=null,p=null,d=null,i=null,g=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",ot),i.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new qi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let at=null,Et=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=v.stencil?Ds:Xi,Et=v.stencil?Wi:yi);const Dt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(Dt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),g=new qi(p.textureWidth,p.textureHeight,{format:Un,type:Si,depthTexture:new zd(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Wt=t.properties.get(g);Wt.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(K){for(let at=0;at<K.removed.length;at++){const Et=K.removed[at],wt=M.indexOf(Et);wt>=0&&(M[wt]=null,E[wt].disconnect(Et))}for(let at=0;at<K.added.length;at++){const Et=K.added[at];let wt=M.indexOf(Et);if(wt===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=M.length){M.push(Et),wt=Wt;break}else if(M[Wt]===null){M[Wt]=Et,wt=Wt;break}if(wt===-1)break}const Dt=E[wt];Dt&&Dt.connect(Et)}}const W=new U,$=new U;function Q(K,at,Et){W.setFromMatrixPosition(at.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const wt=W.distanceTo($),Dt=at.projectionMatrix.elements,Wt=Et.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),Ft=Dt[14]/(Dt[10]+1),ce=(Dt[9]+1)/Dt[5],Y=(Dt[9]-1)/Dt[5],pe=(Dt[8]-1)/Dt[0],Bt=(Wt[8]+1)/Wt[0],Vt=Xt*pe,Ct=Xt*Bt,_e=wt/(-pe+Bt),qt=_e*-pe;at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qt),K.translateZ(_e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const P=Xt+_e,T=Ft+_e,X=Vt-qt,ht=Ct+(wt-qt),lt=ce*Ft/T*P,dt=Y*Ft/T*P;K.projectionMatrix.makePerspective(X,ht,lt,dt,P,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function nt(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;b.near=I.near=L.near=K.near,b.far=I.far=L.far=K.far,(R!==b.near||j!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,j=b.far);const at=K.parent,Et=b.cameras;nt(b,at);for(let wt=0;wt<Et.length;wt++)nt(Et[wt],at);Et.length===2?Q(b,L,I):b.projectionMatrix.copy(L.projectionMatrix),it(K,b,at)};function it(K,at,Et){Et===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let st=null;function ut(K,at){if(h=at.getViewerPose(l||a),_=at,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let wt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let Dt=0;Dt<Et.length;Dt++){const Wt=Et[Dt];let Xt=null;if(f!==null)Xt=f.getViewport(Wt);else{const ce=d.getViewSubImage(p,Wt);Xt=ce.viewport,Dt===0&&(t.setRenderTargetTextures(g,ce.colorTexture,p.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(g))}let Ft=q[Dt];Ft===void 0&&(Ft=new yn,Ft.layers.enable(Dt),Ft.viewport=new Le,q[Dt]=Ft),Ft.matrix.fromArray(Wt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Wt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Dt===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(Ft)}}for(let Et=0;Et<E.length;Et++){const wt=M[Et],Dt=E[Et];wt!==null&&Dt!==void 0&&Dt.update(wt,at,l||a)}st&&st(K,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}const pt=new kd;pt.setAnimationLoop(ut),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}}function S_(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Nd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,E,M,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),p(m,g),g.isMeshPhysicalMaterial&&f(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,E,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const E=t.get(g).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*M,e(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,E,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function p(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),t.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,E){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const E=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b_(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function l(E,M){let w=i[E.id];w===void 0&&(_(E),w=h(E),i[E.id]=w,E.addEventListener("dispose",m));const O=M.program;n.updateUBOMapping(E,O);const L=t.render.frame;r[E.id]!==L&&(p(E),r[E.id]=L)}function h(E){const M=d();E.__bindingPointIndex=M;const w=s.createBuffer(),O=E.__size,L=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,O,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=i[E.id],w=E.uniforms,O=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let L=0,I=w.length;L<I;L++){const q=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,R=q.length;b<R;b++){const j=q[b];if(f(j,L,b,O)===!0){const J=j.__offset,ot=Array.isArray(j.value)?j.value:[j.value];let F=0;for(let W=0;W<ot.length;W++){const $=ot[W],Q=v($);typeof $=="number"||typeof $=="boolean"?(j.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,J+F,j.__data)):$.isMatrix3?(j.__data[0]=$.elements[0],j.__data[1]=$.elements[1],j.__data[2]=$.elements[2],j.__data[3]=0,j.__data[4]=$.elements[3],j.__data[5]=$.elements[4],j.__data[6]=$.elements[5],j.__data[7]=0,j.__data[8]=$.elements[6],j.__data[9]=$.elements[7],j.__data[10]=$.elements[8],j.__data[11]=0):($.toArray(j.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,M,w,O){const L=E.value,I=M+"_"+w;if(O[I]===void 0)return typeof L=="number"||typeof L=="boolean"?O[I]=L:O[I]=L.clone(),!0;{const q=O[I];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return O[I]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function _(E){const M=E.uniforms;let w=0;const O=16;for(let I=0,q=M.length;I<q;I++){const b=Array.isArray(M[I])?M[I]:[M[I]];for(let R=0,j=b.length;R<j;R++){const J=b[R],ot=Array.isArray(J.value)?J.value:[J.value];for(let F=0,W=ot.length;F<W;F++){const $=ot[F],Q=v($),nt=w%O;nt!==0&&O-nt<Q.boundary&&(w+=O-nt),J.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=Q.storage}}}const L=w%O;return L>0&&(w+=O-L),E.__size=w,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}class Yd{constructor(t={}){const{canvas:e=yf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const g=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const M=this;let w=!1,O=0,L=0,I=null,q=-1,b=null;const R=new Le,j=new Le;let J=null;const ot=new yt(0);let F=0,W=e.width,$=e.height,Q=1,nt=null,it=null;const st=new Le(0,0,W,$),ut=new Le(0,0,W,$);let pt=!1;const K=new Gc;let at=!1,Et=!1,wt=null;const Dt=new be,Wt=new $t,Xt=new U,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return I===null?Q:1}let Y=n;function pe(A,N){for(let G=0;G<A.length;G++){const k=A[G],H=e.getContext(k,N);if(H!==null)return H}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),Y===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),Y=pe(N,A),Y===null)throw pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Bt,Vt,Ct,_e,qt,P,T,X,ht,lt,dt,Pt,vt,bt,zt,Yt,rt,me,Jt,Gt,Rt,At,jt,he;function we(){Bt=new O0(Y),Vt=new C0(Y,Bt,t),Bt.init(Vt),At=new x_(Y,Bt,Vt),Ct=new __(Y,Bt,Vt),_e=new B0(Y),qt=new i_,P=new v_(Y,Bt,Ct,qt,Vt,At,_e),T=new P0(M),X=new D0(M),ht=new Xf(Y,Vt),jt=new T0(Y,Bt,ht,Vt),lt=new N0(Y,ht,_e,jt),dt=new H0(Y,lt,ht,_e),Jt=new z0(Y,Vt,P),Yt=new R0(qt),Pt=new n_(M,T,X,Bt,Vt,jt,Yt),vt=new S_(M,qt),bt=new r_,zt=new d_(Bt,Vt),me=new A0(M,T,X,Ct,dt,p,c),rt=new g_(M,dt,Vt),he=new b_(Y,_e,Vt,Ct),Gt=new w0(Y,Bt,_e,Vt),Rt=new U0(Y,Bt,_e,Vt),_e.programs=Pt.programs,M.capabilities=Vt,M.extensions=Bt,M.properties=qt,M.renderLists=bt,M.shadowMap=rt,M.state=Ct,M.info=_e}we();const Zt=new E_(M,Y);this.xr=Zt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(W,$,!1))},this.getSize=function(A){return A.set(W,$)},this.setSize=function(A,N,G=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,$=N,e.width=Math.floor(A*Q),e.height=Math.floor(N*Q),G===!0&&(e.style.width=A+"px",e.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(W*Q,$*Q).floor()},this.setDrawingBufferSize=function(A,N,G){W=A,$=N,Q=G,e.width=Math.floor(A*G),e.height=Math.floor(N*G),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,N,G,k){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,N,G,k),Ct.viewport(R.copy(st).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,N,G,k){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,N,G,k),Ct.scissor(j.copy(ut).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){Ct.setScissorTest(pt=A)},this.setOpaqueSort=function(A){nt=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(A=!0,N=!0,G=!0){let k=0;if(A){let H=!1;if(I!==null){const et=I.texture.format;H=et===Sd||et===Ed||et===Md}if(H){const et=I.texture.type,ct=et===Si||et===yi||et===Fc||et===Wi||et===xd||et===yd,Z=me.getClearColor(),mt=me.getClearAlpha(),Ut=Z.r,St=Z.g,gt=Z.b;ct?(f[0]=Ut,f[1]=St,f[2]=gt,f[3]=mt,Y.clearBufferuiv(Y.COLOR,0,f)):(_[0]=Ut,_[1]=St,_[2]=gt,_[3]=mt,Y.clearBufferiv(Y.COLOR,0,_))}else k|=Y.COLOR_BUFFER_BIT}N&&(k|=Y.DEPTH_BUFFER_BIT),G&&(k|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),bt.dispose(),zt.dispose(),qt.dispose(),T.dispose(),X.dispose(),dt.dispose(),jt.dispose(),he.dispose(),Pt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ke),Zt.removeEventListener("sessionend",le),wt&&(wt.dispose(),wt=null),Ve.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=_e.autoReset,N=rt.enabled,G=rt.autoUpdate,k=rt.needsUpdate,H=rt.type;we(),_e.autoReset=A,rt.enabled=N,rt.autoUpdate=G,rt.needsUpdate=k,rt.type=H}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const N=A.target;N.removeEventListener("dispose",xt),Ht(N)}function Ht(A){kt(A),qt.remove(A)}function kt(A){const N=qt.get(A).programs;N!==void 0&&(N.forEach(function(G){Pt.releaseProgram(G)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,G,k,H,et){N===null&&(N=Ft);const ct=H.isMesh&&H.matrixWorld.determinant()<0,Z=It(A,N,G,k,H);Ct.setMaterial(k,ct);let mt=G.index,Ut=1;if(k.wireframe===!0){if(mt=lt.getWireframeAttribute(G),mt===void 0)return;Ut=2}const St=G.drawRange,gt=G.attributes.position;let Ot=St.start*Ut,Ne=(St.start+St.count)*Ut;et!==null&&(Ot=Math.max(Ot,et.start*Ut),Ne=Math.min(Ne,(et.start+et.count)*Ut)),mt!==null?(Ot=Math.max(Ot,0),Ne=Math.min(Ne,mt.count)):gt!=null&&(Ot=Math.max(Ot,0),Ne=Math.min(Ne,gt.count));const Me=Ne-Ot;if(Me<0||Me===1/0)return;jt.setup(H,k,Z,G,mt);let Fe,Kt=Gt;if(mt!==null&&(Fe=ht.get(mt),Kt=Rt,Kt.setIndex(Fe)),H.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*ce()),Kt.setMode(Y.LINES)):Kt.setMode(Y.TRIANGLES);else if(H.isLine){let Lt=k.linewidth;Lt===void 0&&(Lt=1),Ct.setLineWidth(Lt*ce()),H.isLineSegments?Kt.setMode(Y.LINES):H.isLineLoop?Kt.setMode(Y.LINE_LOOP):Kt.setMode(Y.LINE_STRIP)}else H.isPoints?Kt.setMode(Y.POINTS):H.isSprite&&Kt.setMode(Y.TRIANGLES);if(H.isBatchedMesh)Kt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Kt.renderInstances(Ot,Me,H.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,li=Math.min(G.instanceCount,Lt);Kt.renderInstances(Ot,Me,li)}else Kt.render(Ot,Me)};function ve(A,N,G){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,S(A,N,G),A.side=oi,A.needsUpdate=!0,S(A,N,G),A.side=Xn):S(A,N,G)}this.compile=function(A,N,G=null){G===null&&(G=A),m=zt.get(G),m.init(),E.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==G&&A.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(M._useLegacyLights);const k=new Set;return A.traverse(function(H){const et=H.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const Z=et[ct];ve(Z,G,H),k.add(Z)}else ve(et,G,H),k.add(et)}),E.pop(),m=null,k},this.compileAsync=function(A,N,G=null){const k=this.compile(A,N,G);return new Promise(H=>{function et(){if(k.forEach(function(ct){qt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){H(A);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let xe=null;function fe(A){xe&&xe(A)}function Ke(){Ve.stop()}function le(){Ve.start()}const Ve=new kd;Ve.setAnimationLoop(fe),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){xe=A,Zt.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},Zt.addEventListener("sessionstart",Ke),Zt.addEventListener("sessionend",le),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(N),N=Zt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,N,I),m=zt.get(A,E.length),m.init(),E.push(m),Dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,at=Yt.init(this.clippingPlanes,Et),v=bt.get(A,g.length),v.init(),g.push(v),cn(A,N,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(nt,it),this.info.render.frame++,at===!0&&Yt.beginShadows();const G=m.state.shadowsArray;if(rt.render(G,A,N),at===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(v,A),m.setupLights(M._useLegacyLights),N.isArrayCamera){const k=N.cameras;for(let H=0,et=k.length;H<et;H++){const ct=k[H];vr(v,A,ct,ct.viewport)}}else vr(v,A,N);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(M,A,N),jt.resetDefaultState(),q=-1,b=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function cn(A,N,G,k){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){k&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Dt);const ct=dt.update(A),Z=A.material;Z.visible&&v.push(A,ct,Z,G,Xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const ct=dt.update(A),Z=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Xt.copy(ct.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(Dt)),Array.isArray(Z)){const mt=ct.groups;for(let Ut=0,St=mt.length;Ut<St;Ut++){const gt=mt[Ut],Ot=Z[gt.materialIndex];Ot&&Ot.visible&&v.push(A,ct,Ot,G,Xt.z,gt)}}else Z.visible&&v.push(A,ct,Z,G,Xt.z,null)}}const et=A.children;for(let ct=0,Z=et.length;ct<Z;ct++)cn(et[ct],N,G,k)}function vr(A,N,G,k){const H=A.opaque,et=A.transmissive,ct=A.transparent;m.setupLightsView(G),at===!0&&Yt.setGlobalState(M.clippingPlanes,G),et.length>0&&x(H,et,N,G),k&&Ct.viewport(R.copy(k)),H.length>0&&u(H,N,G),et.length>0&&u(et,N,G),ct.length>0&&u(ct,N,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function x(A,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const et=Vt.isWebGL2;wt===null&&(wt=new qi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?ur:Si,minFilter:dr,samples:et?4:0})),M.getDrawingBufferSize(Wt),et?wt.setSize(Wt.x,Wt.y):wt.setSize(yc(Wt.x),yc(Wt.y));const ct=M.getRenderTarget();M.setRenderTarget(wt),M.getClearColor(ot),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const Z=M.toneMapping;M.toneMapping=ri,u(A,G,k),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt);let mt=!1;for(let Ut=0,St=N.length;Ut<St;Ut++){const gt=N[Ut],Ot=gt.object,Ne=gt.geometry,Me=gt.material,Fe=gt.group;if(Me.side===Xn&&Ot.layers.test(k.layers)){const Kt=Me.side;Me.side=on,Me.needsUpdate=!0,y(Ot,G,k,Ne,Me,Fe),Me.side=Kt,Me.needsUpdate=!0,mt=!0}}mt===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt)),M.setRenderTarget(ct),M.setClearColor(ot,F),M.toneMapping=Z}function u(A,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,et=A.length;H<et;H++){const ct=A[H],Z=ct.object,mt=ct.geometry,Ut=k===null?ct.material:k,St=ct.group;Z.layers.test(G.layers)&&y(Z,N,G,mt,Ut,St)}}function y(A,N,G,k,H,et){A.onBeforeRender(M,N,G,k,H,et),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(M,N,G,k,A,et),H.transparent===!0&&H.side===Xn&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,M.renderBufferDirect(G,N,k,H,A,et),H.side=oi,H.needsUpdate=!0,M.renderBufferDirect(G,N,k,H,A,et),H.side=Xn):M.renderBufferDirect(G,N,k,H,A,et),A.onAfterRender(M,N,G,k,H,et)}function S(A,N,G){N.isScene!==!0&&(N=Ft);const k=qt.get(A),H=m.state.lights,et=m.state.shadowsArray,ct=H.state.version,Z=Pt.getParameters(A,H.state,et,N,G),mt=Pt.getProgramCacheKey(Z);let Ut=k.programs;k.environment=A.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(A.isMeshStandardMaterial?X:T).get(A.envMap||k.environment),Ut===void 0&&(A.addEventListener("dispose",xt),Ut=new Map,k.programs=Ut);let St=Ut.get(mt);if(St!==void 0){if(k.currentProgram===St&&k.lightsStateVersion===ct)return tt(A,Z),St}else Z.uniforms=Pt.getUniforms(A),A.onBuild(G,Z,M),A.onBeforeCompile(Z,M),St=Pt.acquireProgram(Z,mt),Ut.set(mt,St),k.uniforms=Z.uniforms;const gt=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(gt.clippingPlanes=Yt.uniform),tt(A,Z),k.needsLights=re(A),k.lightsStateVersion=ct,k.needsLights&&(gt.ambientLightColor.value=H.state.ambient,gt.lightProbe.value=H.state.probe,gt.directionalLights.value=H.state.directional,gt.directionalLightShadows.value=H.state.directionalShadow,gt.spotLights.value=H.state.spot,gt.spotLightShadows.value=H.state.spotShadow,gt.rectAreaLights.value=H.state.rectArea,gt.ltc_1.value=H.state.rectAreaLTC1,gt.ltc_2.value=H.state.rectAreaLTC2,gt.pointLights.value=H.state.point,gt.pointLightShadows.value=H.state.pointShadow,gt.hemisphereLights.value=H.state.hemi,gt.directionalShadowMap.value=H.state.directionalShadowMap,gt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,gt.spotShadowMap.value=H.state.spotShadowMap,gt.spotLightMatrix.value=H.state.spotLightMatrix,gt.spotLightMap.value=H.state.spotLightMap,gt.pointShadowMap.value=H.state.pointShadowMap,gt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=St,k.uniformsList=null,St}function z(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=vo.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function tt(A,N){const G=qt.get(A);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function It(A,N,G,k,H){N.isScene!==!0&&(N=Ft),P.resetTextureUnits();const et=N.fog,ct=k.isMeshStandardMaterial?N.environment:null,Z=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ai,mt=(k.isMeshStandardMaterial?X:T).get(k.envMap||ct),Ut=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,St=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),gt=!!G.morphAttributes.position,Ot=!!G.morphAttributes.normal,Ne=!!G.morphAttributes.color;let Me=ri;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Me=M.toneMapping);const Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,Lt=qt.get(k),li=m.state.lights;if(at===!0&&(Et===!0||A!==b)){const Sn=A===b&&k.id===q;Yt.setState(k,A,Sn)}let de=!1;k.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==li.state.version||Lt.outputColorSpace!==Z||H.isBatchedMesh&&Lt.batching===!1||!H.isBatchedMesh&&Lt.batching===!0||H.isInstancedMesh&&Lt.instancing===!1||!H.isInstancedMesh&&Lt.instancing===!0||H.isSkinnedMesh&&Lt.skinning===!1||!H.isSkinnedMesh&&Lt.skinning===!0||H.isInstancedMesh&&Lt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Lt.instancingColor===!1&&H.instanceColor!==null||Lt.envMap!==mt||k.fog===!0&&Lt.fog!==et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Yt.numPlanes||Lt.numIntersection!==Yt.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==St||Lt.morphTargets!==gt||Lt.morphNormals!==Ot||Lt.morphColors!==Ne||Lt.toneMapping!==Me||Vt.isWebGL2===!0&&Lt.morphTargetsCount!==Kt)&&(de=!0):(de=!0,Lt.__version=k.version);let Cn=Lt.currentProgram;de===!0&&(Cn=S(k,N,H));let Rn=!1,Hn=!1,Qo=!1;const Je=Cn.getUniforms(),Ci=Lt.uniforms;if(Ct.useProgram(Cn.program)&&(Rn=!0,Hn=!0,Qo=!0),k.id!==q&&(q=k.id,Hn=!0),Rn||b!==A){Je.setValue(Y,"projectionMatrix",A.projectionMatrix),Je.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Sn=Je.map.cameraPosition;Sn!==void 0&&Sn.setValue(Y,Xt.setFromMatrixPosition(A.matrixWorld)),Vt.logarithmicDepthBuffer&&Je.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Je.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Hn=!0,Qo=!0)}if(H.isSkinnedMesh){Je.setOptional(Y,H,"bindMatrix"),Je.setOptional(Y,H,"bindMatrixInverse");const Sn=H.skeleton;Sn&&(Vt.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Je.setValue(Y,"boneTexture",Sn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Je.setOptional(Y,H,"batchingTexture"),Je.setValue(Y,"batchingTexture",H._matricesTexture,P));const ta=G.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0&&Vt.isWebGL2===!0)&&Jt.update(H,G,Cn),(Hn||Lt.receiveShadow!==H.receiveShadow)&&(Lt.receiveShadow=H.receiveShadow,Je.setValue(Y,"receiveShadow",H.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ci.envMap.value=mt,Ci.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),Hn&&(Je.setValue(Y,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&Tt(Ci,Qo),et&&k.fog===!0&&vt.refreshFogUniforms(Ci,et),vt.refreshMaterialUniforms(Ci,k,Q,$,wt),vo.upload(Y,z(Lt),Ci,P)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vo.upload(Y,z(Lt),Ci,P),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Je.setValue(Y,"center",H.center),Je.setValue(Y,"modelViewMatrix",H.modelViewMatrix),Je.setValue(Y,"normalMatrix",H.normalMatrix),Je.setValue(Y,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Sn=k.uniformsGroups;for(let ea=0,mu=Sn.length;ea<mu;ea++)if(Vt.isWebGL2){const Zc=Sn[ea];he.update(Zc,Cn),he.bind(Zc,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Tt(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function re(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,N,G){qt.get(A.texture).__webglTexture=N,qt.get(A.depthTexture).__webglTexture=G;const k=qt.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const G=qt.get(A);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,G=0){I=A,O=N,L=G;let k=!0,H=null,et=!1,ct=!1;if(A){const mt=qt.get(A);mt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(Y.FRAMEBUFFER,null),k=!1):mt.__webglFramebuffer===void 0?P.setupRenderTarget(A):mt.__hasExternalTextures&&P.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const St=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(St[N])?H=St[N][G]:H=St[N],et=!0):Vt.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?H=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(St)?H=St[G]:H=St,R.copy(A.viewport),j.copy(A.scissor),J=A.scissorTest}else R.copy(st).multiplyScalar(Q).floor(),j.copy(ut).multiplyScalar(Q).floor(),J=pt;if(Ct.bindFramebuffer(Y.FRAMEBUFFER,H)&&Vt.drawBuffers&&k&&Ct.drawBuffers(A,H),Ct.viewport(R),Ct.scissor(j),Ct.setScissorTest(J),et){const mt=qt.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,G)}else if(ct){const mt=qt.get(A.texture),Ut=N||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mt.__webglTexture,G||0,Ut)}q=-1},this.readRenderTargetPixels=function(A,N,G,k,H,et,ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(Z=Z[ct]),Z){Ct.bindFramebuffer(Y.FRAMEBUFFER,Z);try{const mt=A.texture,Ut=mt.format,St=mt.type;if(Ut!==Un&&At.convert(Ut)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=St===ur&&(Bt.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(St!==Si&&At.convert(St)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===Mi&&(Vt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-k&&G>=0&&G<=A.height-H&&Y.readPixels(N,G,k,H,At.convert(Ut),At.convert(St),et)}finally{const mt=I!==null?qt.get(I).__webglFramebuffer:null;Ct.bindFramebuffer(Y.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(A,N,G=0){const k=Math.pow(2,-G),H=Math.floor(N.image.width*k),et=Math.floor(N.image.height*k);P.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,G,0,0,A.x,A.y,H,et),Ct.unbindTexture()},this.copyTextureToTexture=function(A,N,G,k=0){const H=N.image.width,et=N.image.height,ct=At.convert(G.format),Z=At.convert(G.type);P.setTexture2D(G,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,G.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,k,A.x,A.y,H,et,ct,Z,N.image.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,k,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,ct,N.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,k,A.x,A.y,ct,Z,N.image),k===0&&G.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(A,N,G,k,H=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const et=A.max.x-A.min.x+1,ct=A.max.y-A.min.y+1,Z=A.max.z-A.min.z+1,mt=At.convert(k.format),Ut=At.convert(k.type);let St;if(k.isData3DTexture)P.setTexture3D(k,0),St=Y.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)P.setTexture2DArray(k,0),St=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,k.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,k.unpackAlignment);const gt=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ot=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ne=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Me=Y.getParameter(Y.UNPACK_SKIP_ROWS),Fe=Y.getParameter(Y.UNPACK_SKIP_IMAGES),Kt=G.isCompressedTexture?G.mipmaps[H]:G.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,A.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,A.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,A.min.z),G.isDataTexture||G.isData3DTexture?Y.texSubImage3D(St,H,N.x,N.y,N.z,et,ct,Z,mt,Ut,Kt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(St,H,N.x,N.y,N.z,et,ct,Z,mt,Kt.data)):Y.texSubImage3D(St,H,N.x,N.y,N.z,et,ct,Z,mt,Ut,Kt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,gt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ot),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ne),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Me),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Fe),H===0&&k.generateMipmaps&&Y.generateMipmap(St),Ct.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){O=0,L=0,I=null,Ct.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zc?"display-p3":"srgb",e.unpackColorSpace=ye.workingColorSpace===Bo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Yi:Ad}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yi?$e:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class A_ extends Yd{}A_.prototype.isWebGL1Renderer=!0;class Wc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class T_ extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class w_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new U;class Ro{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ro(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Po extends wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const Ys=new U,ps=new U,ms=new U,gs=new $t,qs=new $t,qd=new be,Hr=new U,js=new U,Gr=new U,mh=new $t,Ia=new $t,gh=new $t;class Ec extends Ge{constructor(t=new Po){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new pn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new w_(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Ro(n,3,0,!1)),fs.setAttribute("uv",new Ro(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new $t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Vr(Hr.set(-.5,-.5,0),ms,a,ps,i,r),Vr(js.set(.5,-.5,0),ms,a,ps,i,r),Vr(Gr.set(.5,.5,0),ms,a,ps,i,r),mh.set(0,0),Ia.set(1,0),gh.set(1,1);let o=t.ray.intersectTriangle(Hr,js,Gr,!1,Ys);if(o===null&&(Vr(js.set(-.5,.5,0),ms,a,ps,i,r),Ia.set(0,1),o=t.ray.intersectTriangle(Hr,Gr,js,!1,Ys),o===null))return;const c=t.ray.origin.distanceTo(Ys);c<t.near||c>t.far||e.push({distance:c,point:Ys.clone(),uv:xn.getInterpolation(Ys,Hr,js,Gr,mh,Ia,gh,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(s,t,e,n,i,r){gs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*gs.x-i*gs.y,qs.y=i*gs.x+r*gs.y):qs.copy(gs),s.copy(t),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(qd)}class _h extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new be,vh=new be,Wr=[],xh=new Zi,C_=new be,Zs=new te,Ks=new Ki;class R_ extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _h(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,C_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),xh.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Ks.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_s),vh.multiplyMatrices(n,_s),Zs.matrixWorld=vh,Zs.raycast(t,Wr);for(let a=0,o=Wr.length;a<o;a++){const c=Wr[a];c.instanceId=r,c.object=this,e.push(c)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _h(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class jd extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yh=new U,Mh=new U,Eh=new be,Da=new ko,Xr=new Ki;class P_ extends Ge{constructor(t=new pn,e=new jd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)yh.fromBufferAttribute(e,i-1),Mh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yh.distanceTo(Mh);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Eh.copy(i).invert(),Da.copy(t.ray).applyMatrix4(Eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new U,h=new U,d=new U,p=new U,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const g=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let M=g,w=E-1;M<w;M+=f){const O=_.getX(M),L=_.getX(M+1);if(l.fromBufferAttribute(m,O),h.fromBufferAttribute(m,L),Da.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const q=t.ray.origin.distanceTo(p);q<t.near||q>t.far||e.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let M=g,w=E-1;M<w;M+=f){if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,M+1),Da.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(p);L<t.near||L>t.far||e.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Sh=new U,bh=new U;class L_ extends P_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Sh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sh.distanceTo(bh);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sc extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new be,bc=new ko,Yr=new Ki,qr=new U;class Th extends Ge{constructor(t=new pn,e=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Ah.copy(i).invert(),bc.copy(t.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=p,v=f;_<v;_++){const m=l.getX(_);qr.fromBufferAttribute(d,m),wh(qr,m,c,i,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=p,v=f;_<v;_++)qr.fromBufferAttribute(d,_),wh(qr,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wh(s,t,e,n,i,r,a){const o=bc.distanceSqToPoint(s);if(o<e){const c=new U;bc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Ns extends an{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const jr=new U,Zr=new U,Oa=new U,Kr=new xn;class I_ extends pn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(_o*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},f=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:v,b:m,c:g}=Kr;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),Kr.getNormal(Oa),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const M=(E+1)%3,w=d[E],O=d[M],L=Kr[h[E]],I=Kr[h[M]],q=`${w}_${O}`,b=`${O}_${w}`;b in p&&p[b]?(Oa.dot(p[b].normal)<=r&&(f.push(L.x,L.y,L.z),f.push(I.x,I.y,I.z)),p[b]=null):q in p||(p[q]={index0:l[E],index1:l[M],normal:Oa.clone()})}}for(const _ in p)if(p[_]){const{index0:v,index1:m}=p[_];jr.fromBufferAttribute(o,v),Zr.fromBufferAttribute(o,m),f.push(jr.x,jr.y,jr.z),f.push(Zr.x,Zr.y,Zr.z)}this.setAttribute("position",new En(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Bn extends pn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new U,p=new U,f=[],_=[],v=[],m=[];for(let g=0;g<=n;g++){const E=[],M=g/n;let w=0;g===0&&a===0?w=.5/e:g===n&&c===Math.PI&&(w=-.5/e);for(let O=0;O<=e;O++){const L=O/e;d.x=-t*Math.cos(i+L*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(i+L*r)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),m.push(L+w,1-M),E.push(l++)}h.push(E)}for(let g=0;g<n;g++)for(let E=0;E<e;E++){const M=h[g][E+1],w=h[g][E],O=h[g+1][E],L=h[g+1][E+1];(g!==0||a>0)&&f.push(M,w,L),(g!==n-1||c<Math.PI)&&f.push(w,O,L)}this.setIndex(f),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ue extends wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Go extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class D_ extends Go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Na=new be,Ch=new U,Rh=new U;class Zd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ph=new be,$s=new U,Ua=new U;class O_ extends Zd{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),n.position.copy($s),Ua.copy(n.position),Ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ua),n.updateMatrixWorld(),i.makeTranslation(-$s.x,-$s.y,-$s.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}}class Lh extends Go{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new O_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class N_ extends Zd{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kd extends Go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new N_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U_ extends Go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vo{constructor(t,e,n=0,i=1/0){this.ray=new ko(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Ih),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ac(t[i],this,n,e);return n.sort(Ih),n}}function Ih(s,t){return s.distance-t.distance}function Ac(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Ac(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const ar=16,B_=256,k_=256,F_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nNS9eXQcZ5X//aml91VqSa3dthRblpd4y+Ykzu7YibNBjJNAmAkDwwwMzPiXAD8g8CYzEGBgsjALMy8wEyCTTGKSEJNMNofEjpd4iRdZlmXJkhftra271Vv1VvX+UV2lblmGQHjPnLnn6Kieeup2V1fV3b733qeEf/7nf9aWLVvGkSNHiMViADgcDiKRCB6Ph/LychRFIR6Pk8/nEUWRxsZG9u3bR0NDA8Mtv0EURfL5/AfmVxSFcDhMQ0MDt5yooXd4EoD+UASAa5Y3nbPvzEiYudVl5vz2I6e4ZnkTezLNJBIJisnlcuH3+wHo6uqipaWFSCQy63Hrr/ZSV1uHpmlk1AQuu594KoKiKFitVpxOF9lslmw6i83iIJ/LU3fBCtoPb8Pn9fLFv/gBzXUeJEli2QVV/OK/21i+sJaFDT6ef+ck8xt8iKKIpmlU+j1Ek2l8ThsTUwlWLazlUNcwmqbRfjLE0vlBAFRVpaN3zDzPpfODCILA0e4RVi6qJ5vNIkkSgiCw6Or7+MvP/SUvvvAiU1NTbNu2jaefedrkffihh3n4bx8u+d13bbqL57Y8x/O/fJ53H7kVBA0hJyBooImgSRpoAkJeAwE0Qd8vIKChIaigSiBocMdf/BX942Mln99QUQmAoiiMxWPmeCb1j49xKr2c4eFhVFXltttuI51Oc/z4caLRKKtXryadTtPT08PQ0BCTk5PY7XYCgQCrV6/G6XTSfuggPad6uHHtesbHRonE4kSjYXy+MpqamwiN6ud26P29XHrRpQBEYnEAOjvbeObZF83zEUQBTdVmPdfZ6N0UnPzUWlKZLA6rhbLrP0L4N79CFESm0hmqXHaS2Rw+u43+SIym2z/O+BvP47TIJLM5AOZdN8f8PEVRsNvtJdfHoGPd49x0ees51+/rT7wDQCKVweWw6hOaRkLJmscZ+xOpDG6nDU3TEAQBAFkQBPbt20dFRQWyLCOKIsPDw9TW1hIKhYjFYixatAi/38/ExATLly9n3759BINBVFVFEASSySSNnmq8TjuiKHL8B8fx/VUlyWSSWCzGRc0XkndU0B8PMTk5icvlwmq1oqoq24+coiHoZ2fbaVPAe4cnidat4eirv2BudZmpEPpDEXP7zEiYn71+kAXXNZcIvEGDg4MAuN1uAPx+P36/n66uLoJBXdASiQTBmiaSmSnskh+3tZITnZ0Eqt2oqko2kwVPDQ41StOy5fR2voMoWjjbu5fKsiBOr410Ok0u58BqtfLvL72PzWZj8dxynnvrBPMbfKxaWMt/vtbO4uZKGqs9/HrnCMvnV9MfirFkXhpN09hwZQvrV1+AJEnm+d96lX6zM5kMkiQhSRI3X7EAi8WCIAhkMhleeucYkYiuIL1eL+Pj4zz9zNN8bOPH+OXzvwSgs7OT22+7na2/3sorL7+i8/40A8Bzzz1HjXYLgiYAGvqjL4CmjwRA3ymApulHFBSCUHStGyoqURSFdw6d5tqV80zBn/kgV7o9jMVjVLo95oPuduvXet26deRyOU6dOsXIyAjXXXcdvb29LFq0CJ/Ph9/v59ixYwiCwCWXXEJXVxcAZ071kM6kARVNy9PddZy6ujr8Hjf79+2lLFBJT/dxYFrwFy1exFvb3qS1dZn+i8XpX1O8vSOhcbWr+JeWUux4D2fD+u90ZnLUu11Y3E4O9IeYUjKcCE1S6XaQyYfx2GwmX/dYhLymIQLzgM3f30o2p5Z89m2bITSZ49BLuvBmcyqvbD9hzltkkQf+7HIAfvKN28jn83z9R2/z7dtXlHxOLpdDFEVEUQTgm79u47H7byKTyfCZb21F9Hq9CIJAb28vExMTRCIR7HY7qVQKr9dLZaUuyKIoUltby65duxgbGyOdTrN48WKqbeVM/HCY8vJy+uMhhlLjAPpn/CRKZWUl4/kpRFHkgkAjyk+nTP7JfxzhmuVN9IcizK0u48xI2BxPHXrZFP7tR06ZnsDPXj/IzrbT3Ld+lakwQqEQg4ODDA4O0tXVZQo/QF1dHYODg0QiESKRCMFg0FQWLpcLWXNQ5a+npqaacHyYmvoyZFnG5XJhd9jJpM6QE5MMnzyC2xogm8uSSiaJpSL4HFVks1nSWV2ZOBwOWucFEASBfD6PIAhommb+9Y3Eiu8NsizTfjKEKIqMJ+KMxqYYi8foHx9jLB5jOBImLQpMppKMxWOMxWMMhScZiUYQBAGLxcJXv/ZVAI4dO8Zn/+KzfPQjH+UTn/gET/3iKQDWr1/Pvffey31/eh+qqnLmzBl+9dKv2PrSVu666y4EQNMMqydMq4ESQ6ghaLoHYEi+JlCiBcbiMZYsqDDPs9LtodLt4Vj3OA0VlaYX0FBRWWLlurq6uOqqq2hra6O9vV1XHmO6wnC73Rw+fJipqSlSqRTxeBxBEHjnnXeorq5GlmVWLl9Ja+tSxkZDhTPVcLl9nDp9ioqKKiRBoKVlMdXVtYAu/PFYnFwug9/jLrkfxdb/dwk/wC2LLgDAb7cyOJVAURRG40kkQcBrt+K2ygBYJZl0Lg/AcCyB36n/fp9DVwpPxCU+H9OF2rnmm0jLP2d+h9Mu4rSL+Nwyt22GSzfmqPbbqPTpvIlUBlEU+fI/buMr61qJpRUm4zFiaYVoMklOFEhkM8TSCrG0wlfWtfDF77+MIAgIgoDc3t6Oz+fD4/Hg8XjIZDLY7XYGBgaorKxkbGyMcDiM0+nE6XRit9upqKigvr6e9957j57t7xNYdj2/uf83AFR/qRGA0KP9+oMxNsbg35+mYnMt408M6YL+TJg0MeZWl9E7PEksuJJbayJsP3LKtO7Flr8h6Kc/FKEhqAtucYgAmC4+6EIdCoVMQY9EIrhcrhL339h2uVyMRgeJKw7ESQmb3U5sKobP72UqOoXb6ae94zAL5s9HkpI4nE58fj9ezUcsGea997ezanEDJ85M0lhlR9M0Knxu+kO6pTHcLGO7vsrFjkMp5tb62NM+QH8oztL5uidltVqpcLmxWCznPGg5uwNZlsnn88iyTN/YqBk2GLT5/2wG4MVfvciL977IyMgIAB6Ph3A4TCQSQVVVUqkUAPl8nnA4jIYu7KVeQEG2Bd3ym6TpHoDxp2nwwltt0w+r01p01uPm1mt7OkkmMyW/yTxWruTdd99l9erV9PX1EY/HkWWZ48ePI4qieQ/b2toQRZFrr72W3/zmNxw4cIBoNErz3AZcbh8A+w++b35+eUUVAFXV1QwM9AHg97jp6Oigv+80aSVdcj6aqpVY/98l/DsSGrGzvVzw+kfRVA2/qoe30kXXYjj1eVVDEgVEUTTvcf21twDgVjXsDjsvvPUstzz5JMqxYwxa+ph7sPR7vjMu0JHN8nSNbO47et+dZHsHWdkdwuWw8uUfvsH/c9syfrXvLJlUCpvLaR6bTiRRVQ2Hx2W6/g9uWMxX/vFNEqkM8pIlSzh79izNzc0cP36c1tZWRFEkHA5TW1vLwoUL2bZtG/l8ntraWt1qtbdz9uxZ/H4/a5bNoz90iEXL5tFcU87P/uFgYV8hdv+PsP44PDFEYNn1EDrEmmXz2Nl22jxJT+gQvfi5ZnkTP3t9mn9meHCcJjwcond4siRkAN3FL3b7E4lEidDX1dWdcxO7urqoDi5kKhrB765iMjZEdUBXYDafB1GSmNvQTEpJY7Hk8dgrCIcjjEUHWbJwJeHJMPl8nlwuh8PhoGXO9E26cEE12WyW42fDWK3WEjdMVVUyGV0g+kMxHX/IZLD4LSiKgsViIZudjuEkSUJRFGRZLrLWOjZAG/zi579A0zT+9L4/BfRYcu/evQBMTk4Sj8d5aetLsBUee/QxAIaGhkilUgV33njY9SgfTfdcTCUgUggFtCLLrx975w3LzosB9I+P0VBRac4f6x7n2pXzzOPsdju9wqX4/X5eeOGFks8wlPiOHTuwWCxs3LiRaDRKd3c3DQ0N9Pf3U19fzxWXXsqRjhP0DQ7R0rJYfxY8biKxOFXV1fT29jI8cJYFLYsAmIpGaF24mEQyZYYEM4V/Js2cN7yDV45D6O2XKS9Y9NHCvIEJVKzbSPLtlwDI5FWG1FI333XDndx5wzL41KewZ7PwzY+bc8e2XUYymQQ6AXDIEqDjBv/ZcjPHssdY5eviyZeO8K3blhNTFARR4CNLa7HIAr/qnOCTa+YD8NM3jnJzk59AbRVP7eoG4Nu3r+Dzv9iDmEqlqKys5MCBAzQ3N9PR0cHIyIhpOQ4ePMjcuXOx2+309PRw8OBBnE4nVqsVm81GfyjCmRFdyHuHJ02hPDMSNvfPrS5jbnUZE226l2C4/Ia7/9v4iwV9Nv5EImG6+C6XC5fLVXqRXS7i8bgZAhSHCsFgkFBoBIfDwfD4WVqXf5yxyACCLYuixkgkklgdEhc0X4DT6eT0QCdKPobP52M8MkQ6k0YURRqCXv1B0TQaqz2MR+Nm7J7P58lms2iaRiKRQBAE+kZiyLLMWCRGZCpphgoGDYUnCSspImk9lh6JRhiLx8jlcqbCKSafz8fQ0BAAd9x+ByMjI+Z1eOONN/B4PADcfdfd3P/A/dz7iXv5whe/oCshATRBK3L9BdPoa+g+gYaGJmi6MqCgMDR9XCzchtuvKIp5boqimPuvXTnPDBGMUKeqqor29nbq6+u5++67ueWWW7jrrrvIZDJ0dnZSXV3N5z//efM+G+Hb/PnzSafTpONRek92IhUENBGPAhCNhhkdGWF44Kx5LpFYHEkUSCR1L2j54oX67/kDhB/0EKDcaedsWFfiZ8MxDg+OMZpQODUxBUAym6NzNMyx4XHOhmMcLfw/G44hWaRzlOdMeqROZrHFwkf7pz2We7te5Vt979E/PkbOCDUL96+sOoDmcRKdStDXFyKWVhBsFsLJDBNDuueo5qcVkTw4OEhjYyNLly5ldHSUsrIyJiYmsNlsjI6OYrFYmJqa4sILLySVSjE4OEhVVRWRiI6Uz4zRvStvpb8ofgdMxN7YNlz63uHJD81f17xKv7mRSIkgGRbfiPsNKvYEurq6CIc1yt215FJxeo4/z/j4BD6fl0w6QyYXQ5ZkBocGKHfX0Lz6QnpPteO0+EnlowTLGsnlcjQGfRw5OcLcWj/5fJ5MJoPVauVo9wgfu24BbV3DBLwu9p8YJ53Wb6SqqtiKgCFJklBV1XQXg16fHqMVXH/jQdE0DVnWPY32kyE23rmRaweu5Wtf/xofueMjOOwO7n/gfp76xVM8e/OzvHDPC/AifPbPP8uzP3kWgFQqxcfv+TjSCQk/TLv1BvinCQXPoCD0ggYYXsG0MGhoJbH9TBQbMMFAA8VumDG/be9e/H4/fX19TE5OMjQ0hKIo1NfXMzAwQCaT4amnnqKhoQGv10s6naa8vJyDBw+Sy+Vo69AtpNvjp6q6GqjmwL73TEVhWP5EPIrL7cPt8eNzWIimsvz86ae5bdPdnI92JDSunqEcikODV473wMMwNBXHbZOZUjKUO+2EphIEvS6ssozbru+vdDuIpdP47NP3PJ/LnzdDsmTtXkIDOc6+5Zp13rjmBomiCBo8tesk6WyWMr+Hnf1xMt1j2J0O3umLoCpZHG4noqR7oolUBrmsrIyxMV0TZ7NZLBYL6XSaefPmcebMGQKBAFVVVRw9epRMJmPehJGRERYtWsT2AtpsCGjv4E58BQE1hPXMSLgkZi+O57cfOfWh+I3YHyAej5vbxUBgPB43swHF8X8wGKSxsYFULkxdXS1Tyjj1DXWEwxEqKiqpqmqir7+f2ESaSYYZ6xjA7XGTyWYpq1yCIvUjSRKN1R7ePXzGFM6T/VE+efOFdJ0NY7fbUQuuXyyZYVlLDXAuPgC6JR8bGzPDBUVRSKfT2Gw2RFEknU6XCNhly5u48PrbqaioAGDTpk34fD7u4R7u8txFX58e+z737HNsCmxi4+RGnn/heQCe+a9n+PSffXoa1S/xQkpBQSMRIGgCKlrJIa/t0QVwZowPpZhAMpmZFS+w1gWJRCJUVVXx5ptv6mGJpuF0Olm1ahWNjY10d3fT09OD1WrF5/Nx9uxZnE4nHo+H/uFhmue34i3Evb29vaRSKebMmccll+hpvy3PPc3yC5ej5aat6IkTx1i2fBXar3QLPxP0+yAgIIB00bVceZG+XYF+jS6QBFRVJaeqpJasYfkSHQ+om6FMJFnitZ2dsL6ZZDLD3Xv2AnvBCvE9TVQ6rVQuh9eM67sHXMDdfXtxOq28tqeAARkpPVnmrkvnEEsr/PrgIJ+4vBmAp3f3ctflTdhFief2T3tEXrcDubq6mng8Tk1NDR6PB1EUiUajOBwOqqurCQaDpFIpstksZWVlxGK6+zpnzhw6OjpMa1xsmQ3hNFz7Ncv0uM+w8oDp2n9YfmsAU9uHQiFaWloYHBwsCQVmi/8NslqsWDQPNpsdn1BJOp1BFBUk1cHA6XGUdIZll6/m3be2UldXTyqRwiJIhEOdqGIGVVVNcMVQnrIsc7h7BE3TOHIyhN1uJ1hmJTKVZG6tn3Bcd0G9DitL5wfRNA2Px2PWUQCm0tDvr55VsDn132SAgYlEgqqqKjo7O7mJm0gkEkxOTpLL5UwQEGB8fJxQKGQK/+c+9zmevOVJ4q/HcQBiwYU0dZKmP1SG2y8UQgADMDR1gMA5uWnQlcKSBRUl9QAGzcxz7zwVYt26dQBcfPHFnDhxgp6eHm6//XZGR0cRRZGFCxfi8/no6emhtbWV2tpaurq6yGazNM9v5YKmubS3t+FIJBnsP8vChYtwOR28/sbLhEZCZNIKkVicgb5TxJNJ8/uNLMBswv5BhB9AOLSDXOFeVazbyMirW5AlEbtFRrDbEBIpc75s3UbG39DvQdDj4v1tI9x055JZMRTjmhWnUw0vqvh4l8MKmkYykiCXLwoNi7M4AqiqhlzISuieph6eypFIhLGxMerr6+nv70fTNILBIPl8noGBAcbGxnA6nfj9foLBILlcjrlz59LT04MkSabAFoN6xrYRuxcL7myu/IfhD1Ga8ze2E4mEmREwaCYoGIlEONuXIFgVJJWSSWQm0dBwWssYGRtAtGg6UNV5kLq6esoD5YyPj2ERLKSUOIEqHX2WJAmbzUYqlaJrIM+d11zAizt6WdSkW+ZUKoUoilitVjRNY9GcMo6fmkbJJUkiMjmBP1iNpmlks1lEUTSFRRRF00sw0jcGDtDR0cGOHTvYzGbefvttLrroIn75/C/5yY0/4a//5q/1op8vPMeP/uVHgF4EtCm6iXg8znNbnuMLKxXzIRG06ViSQs6fIg+geLeREJgthr3p8lYURTmnHmC2Bxjg+PHj2O12FEXB6/USi8V48803cbvdBAIBAHp6eggEArz88stUVFSYSuPE8eO0t7fRe7qXJUtWsnCh7vKHQsM01M2hvKzK/J6WAvg3k36bsP82gPCWRRfwzbVRc1yeU8lrGoPh6d/stMhIokAklcFfKP6ZSKbM+oH+8TG+9+Nds36+RRbNbaNO4O38x0jHxhGP/b9mHYAoisSm0qQTSX6xs5t0LofTZuPpPb2kE0lsLie/3HsaqyQjSiICAqqqpyVFWZapr6/nzJkzVFdX60U9jY0MDAyYFVcjIyNUVlbS3d2NIAh0dHRgt9vxer3mCRox+zXLm5hbXcZ961eZ7rux33Dle4cn9Vi/SLA/DL/L5Sqx8nV1ddTV1ZkCn0gk8Pv95n6Xy2WGDo2NjdglD7sPvIPbFiA8Gcbv82NzyjgkP8HyRiorAzhdTkaGdaCtbsG1aFKGSDRCz8AUZ4aiJuiXyWRM9z2TyXCsZ5T5c6pwOp2mt2BkBWoCdhMzkCSJbDZrehL942Pm39lCjttIERrZBE3TOHr0KFt/vRXQ3fr7H7ifWzbcwttvvw3AnXfeyfO/fJ7P/9XnTd6JiQm++Ndf1MeaAKoGGrp7b3r/BWBAEErifv2LC8pIFWioqDRBvkq3x7T6BtBnkAECFoOCoIdwPT095m/auXMn5eXl5HI5UqkUW7du5fjx4wQCAdra2ggEAqbwd3V1EY2GqaisZsmSlbicDqqqq6mqriZfyOn7HBZ8DgsnThwDdHDQ5XTQOqeGmnLP7wUAFu83yGPT74nbJuNwOrDJejFXf0T/7YNTCdL5PJIoIIn6XDydw2nRrbFxvXxuGZ9b5l8UC5+PQbXfRsBtwWkX+cbXUvzZfakSheC0Tz8DuVyOYGM5qqpx6/wAd1/ehJLJcNuqOq5prmByYopNq+dx3zXngp5yKBSitbWVrq4u3G43lZWVHDp0CK/XSzKZpLOzk5qaGgYHB1EUheXLl/P++++TSCTweDymFQfMON0A9hqCfgLLrqd3WI/z51aXsbPtNGuWzWPq0MucGQmXpAz/EH5fQE8XFef7i2sCisFAg4rLhMOTZQTLG7nyyssZONVPVW2Q0GQfVquNXDbBeHQITdXI5bO0Ll5M+9GjdLZtQVM1BvuHTVBP0zTy+Tx2ux1ZlrHb7VyyuIFjPXpySFVVsxQ6l8uRTqexWq0cPzVuVv1ZLBb9Znp9JaFFycOnaaYiyOfz3HbbbfBzePGFF7HZbGy4ZQOv/Pcr0zdYlhkf172N53/5PMt6lpkFQ3fffTd85zbdqhdce7PcF10hCCY6OF0nIBR5CUaO34jpi7GA2eoCZs7LcgNWq5WDBw8iyzLl5eVcc801uN1ujh07htPp5OjRo5SVlVFeXs6tt97K8ePHcbvd5AuCtWjxUlRV5URnBwf2vUckPM7ll19FIpk6x+03qK2jk/HIJBvVz84q5LMBgFCqFF453kPlKzdRCXq5eC6LdNG1NAFNM/hUQLbKiKuu4wKLRDaTRRIFXtvz39xXnSKS0RhXVED3elO5PC6bhYU3JPDU/hImj/Hn4e/xs8LnnfzMJo4dOURSyZrPiMPjAk3Da3dglWTcVhuephr8g3Fy4QQUQkij4lTTNORLLrmE3t5estksw8PDZlFQLBYz01Y2m81EqMfHx1mwYAHHjh3D4/HQV0jjGYLcEPSXoPseDtFfdCHmVpeZJb2gu/Ifhn9PJnhOjX/x2BD22QqBgsEgc+sWEE6MkpxIsGDRPCJTYXK5PG6Xhb6+MzjsTiqrqkAVOHqkDZ+rCotsYSzST11dLfl8nsZqvYDK0MYAyWSSIydD2Gw2bBbMeVVVOXB8wET3YRoElCQJp9NJJpPBZrOVCL+RUlRVVfcU7A46T08wv7cX0JWHEf688PwL2Gw2brn1Fj5650f5/t9/H9AxEofDAWCmJ4uF3rQvglAQdHRfv1ADoI8LYGGhFmA2DGC2/P+SBXo4VFwGDPDMfrjyyivJZrOoqsq7777LyZMnWbBgAR6Ph9bWVi655BLeeOMNYPo6xmIxTp48ycplFzIVi/LmG68yZ04zi1oXkUimmDNvHrt2bj/H7Z/f0sroyAjjkUlq65tmBQBh9rBgNo9AO7gDUYAyq4XRtmmQMZXJUrPuY4S2vUBjmZdQLEEIyOVVZElEFERqb72HRm8rB04cPue7siu+RuLwd8/ZX0w3Xd7KT144yDd/fYT/u74VAYFXT0dJHR3C4XbxzHu64RQlkddORdFORUDT7/03/7uDpJJFfu+992hpaeH06dOUlZUxMDBAfX09kUiEm266iVOnTjE1NUVjYyOxWAxBEOjv72fZsmVYrVb6oMSKnxrPYMnrGtfwDs6MhLlv/Sp+9vrBkgo/gz4Uf6B5VpDPaP4xhMLIBBjgoKEYIskIDslHOBtm155dNDY0IIgC0akol6y4ivGJCaoqKohEo6QdMSQ5SzQWpqqskXBYL/JpPzXO/DlVWK1WcrkcfSMxKsq9yLLMhQuqTWVgCPTKlhouX2bnP7YeNF3fTCbDmdDIOUVA2WzWxA5kWUaWZSwWi6k8DIF+9tlnueyyywBIp9OcPn2aW9CrzoyiIIB33nmHxhcb+WT+k2z82Eb2XZiervs3Sn2NOuAZfTHmUChECJpmxvnFzSrF6SkjRICisKAQGlS6PVxzzXpkWSYSiZBOp/H5fAwMDNDe3k5VVZWZ+zdKutva2vB6vaRSKXK5HDXVQQ4e2MecOTriHQoNEwzWmOcJuts/v6WV3t5eTu15l7nzLmD+Al0xfFC0/3wegaqpnJ6MmVV/Bk0mFWoAmyzx3pnhkjkRPRQrT6exFAGkM2nheoUTr9uJtX4MEirgKJk3gMK//+Ja/s9jr/HNW5eahsKgfD6PLMm6ghclJEnk4a1H+MEX13LvN19EbGpqIp1Oc/PNNxMKhbjkkksoLy8nEAhw5MgRent7zbhxfHwch8NBZWUl/f39HDhwoERIr1nehCWf5MxImP5QhJ1tp7lmeRP3rV/F9iOnTDTfSP0BH5ofOKfIZ3BwsCTd53K5aGlpMRVFcfGQrMpMxWK47A7q6+vwOCqQ8g4cTgcTsSFGxvsIhQfo6D5MKpVEyrtIhLOEwn243G7S6TSZTIbVS2o41jNa0tBz5MQQ82v18t4VC6pN6z0ymebnrxxh6fwgfq+evqorD1Dp9uC32an2+fFarPisNmrLyqlwuXFLMmV2Bx7Zgt+mN10tnR+kvb0dgKefeZq9e/fyyXs/ydmzZ/nSl79knkcgEOAjd3wEQRB4aetLyLLM8PAw99x9jxnqg1H0Y4b4041AhQYhc6fhFAgCdrudhopKliyoMDGLmWS3283+AKMvwOgJ2LVrF0NDQ1RUVKAoCm63m8bGRrPuZGxsjBMnTpiKcmpqikOHDtHZ2YnP56O9vY28qrFo8SLsDqsZ++/atZ3QSKjE+k+Oj7Js+cVmMZDP7eAqxzmnOyvNpiQ8BaUzmVRMLMCgcqfdDNWKhd8qixTXA86sm5hJLtu5peHFvHLheXv8/pv4+9c7ccoWfA4nDknGIcn4nS7cNhs2QcJlsfDtl4/y6N+sQxRFXA4rwiOPPKKVlZUxNTWFIAjU1dURj8fJ5XImIr1ixYQOaxEAACAASURBVAp+85vfsHTpUk6ePInb7UZRFKqqqlAOPV/SpQc6au9deStTh142U3qGhS8eF7v+fyh/3aUbSi5KPB6npaUFKI37oTQMMDyBu26vwePzEotNMTY2zlU33MqZrsOMhEIsmLuUidgQwfJGzgx04XH4dQReSJPNZolEovzbD57BaZeo8Ll59/AZFjT6sVgsaJrGiTOTtM4LmADfkRNDLF9Ya+IAwXIfE1MJPQbu6Gf5Qj2k0DSNYz2jXLiguqRCECip/186P8jlt2/m3k/eW3LMT378E/78s3/Oxjs3cvfddyPLMk899RQvvKiX2z7x+BPs3buXu+++m7cfXg+AqBa6AAUNTdLjfSFvpAILbcIUqoI1QBQQNA3r0uvM73XIFiam9Gsc8LqYmEqcUwvQH4rRENQ9AqfTSmDhrRw6dIjm5mb8fj+KotDZ2UlZWRlXXnklPT09ALS1tVFTU8Pll1+O1WrljTfeYM6cOZw4fpRVKy8mnkzScewwS5asnL7HTgeJZMr8P3N/PB5hw989TuxsLzPJaPR55XiPOTa2DfLMaebUv3wHTRPI5nVPDVUFUQRVJVBZSXhiQsd/ZvQFAHh9ft7bPd26/Ydcv2debUcQBOLJtNnqe2m5k3Q2j80iUUz7JpMkUtMYjMthRXjooYe0D9NPD3yofvz/af6H15zmwScP0dE7UDL30rdv48EnD6FUNJj7Hr1Vd213tI/w5vtDKBUNPPrEq+Z8GAPCKd02xgCJQrFSfaEw6Zef50PRipN1TGbyTGZUIjmVi/y233ts0MFIhlV+6+81/sue6f4HTVPRNAoPuYYgaAiCSDqdxGp1IAgWBMGCpiVJp1PYbE62bXsZu91u1pcEAgG8Xi99fX1IkkRlZSWSJNHR0YHL5aK6uhqAkZER0uk0+zb/FbImkiaPoAp4LTJOq8xYKo2ogc9qQZAE+uMp7KJImVW3qOFMlgwqix/6lnn+yWSScDhMOBzmzYE30fIaF1ovZO3ateYxx48fZ3BwkPXr13Pq1Cm2bNliutwG0GtgPaCngI20ej6fN7NDPp+PXC6H1Wr9H+WXgVn76Q36Xf30hov9v5X/wScP8ch/trPjiXU8/tx+mi9dzaO3VrKjfYRH/rOdO1aXmfsefPIQD31tM1df/2l4Yh2PP/feOd8XLtoemCHsBhljfb50rph8XohOnXfaJEWFaE5jNK3+QeOXb9bDBenJb/3eY1UVkSQBRdEtrCAIWK0CguBBELIoSoILm66ne2gvkEPTBBQlwUULb+bYmXcJBAJYrVYWLlyILMuEw2EymQwul969Njg4SCqVIhAIYLPZaG9vN+9leXk5HtGCRRQoszsQBIFEJk9GU7GJEpqmMZ7OkEHFI0nIosjZZAqHJOGSJNzitPLauXMnZWVl7N+/n3AwjHOZHpodbTtKzbEabDZ97Qev18uR0BE8uz3Mn68321x66aVMTk5is9kYGhoyMQuA7u5uU4nl83mSySSTk5OUlZWZ3s3/JL8MOjpsWMfvfb2Tr35nGtk1wBfD2v7rv95KPvwjvvXDi8x9xfzr57t5/WT8vPyb1y1mYHSCnUParPw7d+5kzZo15+Xv7Ozk8OHDrF+/flZ+6ePfJf/M187L/6cP/YiXhvPYt34bl8tFFnjw3qV09A7QfOlq7OP9PPAy9O7bz5vvLzU/54GXx+jtHeC9bVtg2xZTWRiWPsy0dXcVCXy9211i/Q3hD884DuBjl8Av9+vbH1T4/1i0d+9erpgx3tIe5m/aw2wq32sCjMacMdZrHlKsmH+jGacfPbUdUMhk0ly08Cb6RjoQRYlsNkM2G+eihTfTN9IBCPj9fiRJ0h/GQk2KJEmk02mzJsXhcBQ642Dt2rVYLBbGxsbI5XK4LTKiCANxBUkQqHBYETWRnKii5DUqnTbsoohSsIjVDjuyBJFsDi2v8egrj7Ju7jrKysp4df+rSEEJ5zInn6v/HD/c/0MqJyp5dfBVNt6wEYBntz+LFJDYPbEbv99PNBplaGiIBQsW0NvbS11dHUuX6s/N2NgYNTU1jI+Ps2rVKrLZLGfOnGHVqlWcOHECVVX/x/mFhx56SDN6rg0yWjEffvgS0i99he8e2XiO+wyUIOqz8d+zvILO0wMcidr/IP7t27eTSCTYsGHDH8S//i8f4keWFE3/9P3z8sci++nd916JlQdQKhrO2W/sA2i+dDUAjz7xqmnpodS6Fws7nKsAEvE4731FHxcL/wchQ0GsOFnHkJJnWMkTSue5Oej4vcZBm0QorbuQu1vX8tFTbxNK59ndupYrOrexu3UtW7Zs4YdLy8xjrujcZp7HN87oVYmVvgYkSWIiNoIoZgGNSxbdwYlTBwCIpsYQBBFFSWKzOQoZEZFDh3bpKzMFg6YFy+fzOBwOKioq6OnpweVyUVOjI/sTExMkEgmWLFlCNBrlv66/llQ+T5nVglUWGU9lUAGbKOCzWRhKKthEiYBdd/2n0jlS+TxzvU4SmTz/drGV/FgeLa4hVUl8/aNf57uvfJe7Ft1FOBymra2NEf8I+Yk8jdZGBj2DfOGGL+DxePjur75L7ECM5uZms2pR0zRef/11PB4PmqYRjUaxWq0oisK8efNoaWmhqamJU6dOsX37dmRZLuFvbW3l8OHDzJs3T8eRTpwo6RHxer1/XH7jRs7WT//lL78D3AQkzttPb7jTs/H/dLchdH8Y/8UXX6xzJ/4w/hce/QpBIMH51wMYPvJeidv/0Nf0hTXe27aFx/dh7gdMhQDTeACUWvnfFvvPVAgG/S7hnzn/x/QOimP64Km3ebHpOh6Z3MVuIGjTQaSTN9Qy/y29CnJTK9wc1KHzg5EMgqACugIJJ8YQRRWQyOdh//HX0bQUqmpBkmyk0ymq/A1EU2Eo9B4YqdP+/n7KysqoqKjQFztpb6e7u5va2lrsdjunT582AV6Px8O+fftIJBJYRIG8JjKeyeDOy/jsFrS8xtlkiqG0QrlsxSYKjCQUFFTqnA4cSHRH4iiqypeu+zqqqrJt2zaOZo6STqfZ0LiBeDzOsWPHGPGPYG+xc0/5PTwz+gzaCY2uri4WLlzIhdYLOeI6QlNTE1arlWPHjhEKheju7p71WldVVTE6OkpDQwM2m41sNovP5zP5o9EoqVSKiooKYrEYZ86cwev1UldXR0tLC5qmcfr0abLZ7B+NXzYWzijupX/44YeBV/nyl98x6+k3b95s7gMdbQ8Gg8zG/+lrF5MMh/jp7rMm/50r6sx9v4t/z549ZDIZLr74YpP/1VdfNff9Lv6HH36YvSMaLzz6lZLzN/YV8w8D9vF+Hnyyn4e+thnr4k8DsBp48/0hdrSPcPXmN3h89bRYP3prJVz/czId/85MvyIRj1PmdpvCnojHTVd/oGi7mD6U8P/rDmqBWtCbiTwec0xhX21hXywWIwYlY75yS0lM/8jkroKwb+GKgtV/+eYvsalcryXYsmULlz32mHm8KNqw2axMKaOk0yqgAFKhKCqDzeZEEPKk03FsNgdTyiSCoKGqeQQBTp8+jaIoBAIBAoEAPT09jI6OUlFRgd1uN9cFqK+vJxAI0NHRgd/vRxRFqqur2aOkyebzeKwWvDaZoaRCNJfFa5GRNZk8Gv1KinLZiluQ6UskcQm6YiuzWNi7dy8+n083JP3w+K7Hua3mNlKpFH3ZPtyL3Xxz1Td56623yKt5VvlWMTIywuvvv45gFYjFYgwPDzN//nx6e3vp7Ow8773ct28fX/jCF9i9ezdHjhwx74/Bb7VamZiYQBRFstks+XyehQv18t3h4WFsNht2u52+vr4/Gr9cXCprCH4+rBeQfPuKM3z3yEYdRQzfQm7HGerqPmP+IANhN/gNwe/u0hdhvKJW4khUr7jr7jpOLJE6px+/mN8QfKPAYfv27WzYsIFgMMjhw4fJ5/O/ld8Q/K8e1qvxQl/9W5r+6fsEg0G+ejjHUGOGlTP4my9dTUfBrX9v2xZWF+asI++amYHHC0Ag6MpiR3ue1dX/zqbPfImX3vv0OSGA4d4XK4HiueJ9v4183nOVw0zLH4vF8HimASmAQ4cOsXLlSg4dOmTOGfsMOnnyZMnn7N27F1rXcvPkLh577DHuv/9+0/0HXfA3bdrEpk2buP/++3msoAQABCENuLDZ8iyZe33J57affptsNs2qlps4euodMhkFQdDQNL2B6vLLL0cQBMLhMOl02gT48vk8VqsVr9fLihUrGB4eJhaLcfXVVwN6mJdOp1nkd+tpsHSOTE7FVQD4VA0skoBTlmm2uphMZUjmVZb49f6VcCZLLqfidDrJZrO8ndR7J9SUygu7X6BOqkOulEmdSPFQ5CE+dcGn2NGxA5fLhdPp5LjnOC2RFg7ZDmG320uqNo2uWmONB0mSEEWRsbExJElizpw5pNNp3n33XVMoDX5FURgcHMTn85kt+RUVFQQCASKRCDab7Y/KLzz00ENmonm2OBlK++kNmrnyzv9W/lhkWsJ6973H4uZ6HvnUSu74xq9pvnT1rDiAfbzfBA2NNOBMtx5KlcDAeZSAgQHMtOwf1M2/4M+ny0gNoTe2oVQZzDwGoPuzN5oYAFAi9MW0adMmrujcRtAmcff74yYm8FC/G8iiKBEsFjeSJOOy+E0gLycqJJNhKn1zGY2cZWH9VbjdbvpGOphSEuzc+TIAixYtQhRFQqEQ+Xwet9uNpml0d3djtVqpra3FZrMRj8fRNA2v14uqqvzHNVcBMMej4wrhTBYtr+GwSKgqDCZTWASBcpsVqyySyhYqKAvzp27Sjd2rB15FLBdxLnPy+bmf59H/fhQtqyFYBbSURnWqmksvvZR0Oq3jAoER/u6uv+OBBx5g6dKlaJrGgQMH2LBhA2vXrjXP0+jc1DSNPXv2sGbNGrZu3WquqZFIJEx+p9NJS0sLkiTR3d1tVoFGo1Hy+TwXXHABLpeLo0eP/tH4ZYCHH76EfPhHfOHrDef00xtewRNPzB7XRCIR7llewcDoBM8fjp/Db3gFr53JnZd/+/btKIrCihUrzuE3vII77rjjvPzr//IhXhrOE//xF2c9/70jGnuf/eGs/A+vqTTz+oY38OCT0/PF+ABM4wDNFQ0mDlAs/DMtu/Grq91uRgpzZTN4ZhP2P0aMP9Pqz0Yz8/qPTO7ikaKYH3Thf2RyFw+2FvLh72/h5qCDg5EMmpYmk1G4aOFt9I10EE2Nk8xNEXDo2ExaSWC1uphSpgCBsegpJuMS0dQYkmShsrLSFA6v18ucOXNIJBL09PTofRQ2G1arlaGhISKRCA0NDWSzWfr6+lBVFV8B3DseieOSJCrtNtLkGUoqyIKIVRSRBIHJdIaEkqfCYiWnwVg2jarpufPX3nsNuV7mwTsf5PGex3li7xMIDoEHNjyAoij82+F/IxQJsbVtK1pGwxPz8J2//g4TExOAXpNw0UUXsXDhQk6ePMmPf/xjNE0zlzzP5XJks1k9a+F2m+tpGK3qBn9FRQXl5eV0d3fj8XiYM2cOuVyOZDLJ1NQUsViMycnJWfmXLFlCXV0dwWCQgwcPYrFYuPDCC8lms0xNTTE5OWnWTkxNTbF06VJCoZCuAPS4vhW3m5J++h/84FrSLy0B4HNz4Ru7bzIfCqOfHjDj+pn9+J+5Yg4HD+nLnM4Fdg/lZ+U34noo/f4DBw6YVv3pp5/mmmuumZXfiOtnfv+dD3yfP5lIggX45GcJfu+hc/mv/zmrq/+d1Wth02e+ZCqBYqu/oz3P1ZvfgCfWnVMwVCzIZUBZkacRBkoXAtdpYIaS+G3C/kGyA2fPnj3veDYlYMzPmaOvX/vyzV/SQ4ByuHsW62/E/Vc8+S09LbhpEy9fdhnSk99C0wRsNifHzrwLWBEEEU3LMz41TLk7aBaliGIKTZP1tQ+So4iihKrmCYX0hqny8nJqamrYu3cvFovFbNseHR0lEAiYsWxPTw8+n4+WlhZyuRz7lSyyKOKVZcptVrpjcSRBoNxqxS6KOh4gy5QXeiaG4gouq0S9VV/F+ZTbzcqmlaxdu5ZsNksmlCHbk+XL936ZXbt2ccMNNyA6Re6sv5MtR7ew3L+cOz93Jzt27ACgvr6e66+/nksv1Vcfuu6665AkySwDNrxPIyY3aN++fWbas5gfdG/og/Ibq3TNnTsXURQ5efIkY2NjXHzxxXR1dXHBBReQy+Xw+XwoimKGXW+88QaJRKK0EGhwcJDvfb2Tf/r5DYCuGOLxNbjd7kIvvf7lRu29QcX86+e7aU/qC2X8dPdZ8wd8UP6dO3fqbaoFKuY36LfxSx//LtU7/hnQFYOrmL8I7zD4H7xXz5kaLj1Mp/iM3D8AT6zjzfenrSLAHd/4NS8VhbznA/mgNBxwzcAGzkfnE/7i/cXC/Ktf/YqzZ8+WbIOuBGbbPnv2LEsKn3lZQaBnWn+Axx57rKROoLgmQE/5SQiCiKqm0dF9EU0TmYhNIAiQy2WwWOw4HD6mlAmy2Ty2QoZhzpw5iKJIMpkkk8lw4403EovFSKVS5PN55s+fTy6X48SJEzgcDrMmYN++fVRVVVFptyGKoKgqGVRWBHykcnkUVUXLa9Q67agq9MdS2CURuySSzubpTqbxWSz09vbS3dRNxeEKLBYL19uu55Cqh0hNTU28//77qCl9OfXqSDVt5W1oz2usWLHCbLMeGxsz32UAcPjwYXbu3AlgLrO3Zs0aVqxYwcTEBC6Xi7GxMaLRKG63+xz+YjIwHoNm8suyjKqqDA8Pm30oRjNZIBAwF4uVJIlwOEx5eTnt7e3U1NTQ1dWlrwdQ3E//1e+04nLN3k9v1AX86xkdCDTezlLM//rJOC6XNiu/URdwxl99Xv41a9act5/fqAv4xCc+cV7+xDNfI1Jw/2fyG3UBK5/6sck/XBBwowjIjO0L7v0DTIOExcVCSkWDqSgMi14s/OcT7g8KAs4GAMK5SsH2959lNK3ym0yeiYzKVQEbR9MqY+cZ2wI2okXjtM9qVvgBzH9riB8uLeNv2sPm/71793JF5zbT+hcfD37S6clCBaCj8BIUtfBKgRzptMKqlvW0n94BJFGUBJctuZVTA21MKROcOHECi8VCVZW+ck9HRweCIBAMBs08tiRJyLKMx+Ohs7MTTdOoq6vDarUymEwhiQI+WbeYZxR9leUyu4W8BP1xfV5CQBIE+hJ6QVHAZsMiChzNHIUTsHv+bq5SriKRSCBJEseOHTPfS3ADN/DS3pcQvSLORU6OHjvK0X1HqY7oz7GR529ra2PPnj3kcjl2795dct+y2Sxvv/02q1evZunSpebaEMX85rNTyGrZ7XpDkaIoplBbrVbTGzBWjWpqasLo50mn00iSxOiovg6FUcFo1FM0Nzeb4VU2m0U2UmnFVDx++OFLgJvRswM/Qr56Lp/jp3xj900lJbXn479neQXOsiDJsMzA6AQel4O5iRF2D+U/EP/27duxWq1mdkCSJDMc+CD86//yIS6rFtg7ovHScJ5arBwqhAPBYBBnUV5/R3vedPHv+MavWdxcz6P/2c4Dm28uCQt2tOd5831dWYQpRf4Ncrnd59QDzHT9DfqgGMBsHsF8twWXnMcuCVjF/O89LsYAHiy/kpNBfXmq3a1rCZ56m02bNrFlyxa2oGMBUFoHALqAq6rK8EQ3k/EQoCCoXlQUQO/z9zkqmFImsNvdHOl5E63wggED7Ovo6MBisbBq1SpsNhsHDx4kFouxYMECvF6vKZg33KB7p4ODg/qDLOkpx/5UCkkQaHa7sEgCvfEEqXyeWpsdp1Umnc0jSALLK/SS8clUhqG0wgMbHgTg+7/4Pq/zunktQoMhbqy7kf/a819oisZX/uQrhMNhft71c9bNWccbZ99gxD9CWUi/y52dnezatcu0/DPJ2G+xWLj88stxOBwlbd9GPwRMC3nxfLEXAJj86XSa4eFhhoeHS+YNz9lIs1522WUoisL4+Dh+v99cMUqG6XJZPebXK/8Asxjo21foMfY3dt9UANcuoq5uelVeg/8zV8wxK/8M/p/uPssVtbpQ7R7KF/jts/IbMf+GDRtM/osvvpjt27cDcM0115zbz1/Ef+cD3zcr/wz+Fx79Cj/66t+CBYLPPITL5aIJ8Bc8g1hEF/5M9VVcff2nWb3230uwgB1PrKN3X2mPwEw8oBgHKPYCjGrA4vmZxUAfFO0/n0fwxyADA7iicxsEHbx885e4DAh1buORyV2waZMZItwcdPBg+ZXmWNM8HDvzLl67vnafINhJpeIEy7xMKVnAQiis16x77QGmlElAVzqSJBAIBFBVlfnz52Oz2YhGo0SjUerr60mlUpw8edKsdHM6nZw8eRJBEKiqqmLNmjX02mS0vEad04FF1nsBEnkd7FNElWElTVADh1XCLooMxXVLW2a3sNjuwWazsX//fiyNFv7vjf+Xx7seZ/OCzXzvpe/R1taGVCHxD5v/ge7ubgYHB9lYv5FIJMLtLbezd+9e0lqaVCrFvn37zH6C4uXeBUEwF9NRFIW3336bzZs3MzU1ZXaNplIp84UwQIngWywWEomE6SEYcwY/6MqjvLycuXPnmqtId3Z2cvr0aSorK1mzZg3j4+NMTU2ZHkFrayvvvvuurgAM97m48s8gl8vFd49sLDQYTC+0YbgpxfwGGDiT/0iUD8RfXPlXzL9hw4YSgT8ff3HlXzF/0z99X+cvAH8z+fUmHz2d9N62LSxurjctfnHDj1Em/Oa90z0CBqJfVvjeRPzcsmDDEyhzn1saHJ06fzNQMf3/3Rdw2WWXQVGJ7zlz5xkLggJoTCkTeO0BBCGDw+FhMj6CJMmAQCqVMt9l4LWXF5SASiaj4ff7UVWVoaEhMpkMNTU15luQDPAvHA7T19eHIOi9A1arlf7+fpLJJC5JAgkmlQxZRSNgt5DLqPr7+SwyDR4HiUye0ZSCIAi4ZAlZFhlNZUjn80R36zX9uc4c4+PjXKdcx/79+7mx8Ube5E3IwQM/eYB1c9aZS+KXlZWxc+dOhtQhqqQqc1GWsrIy86W5xu8tXt3Z5/OZaz56vV7zLc8Oh4O2tukl041SaMB8g5RBVquuPA1+owBueHjYfK+C0QxUU1NDd3c3sVhs1mYgn8+nVwIW0/n66We2056vFfd/Gz/osb3R5DMT6DPifOO42eYMAZ8J7g3MEhIYQGExKPhhKKTkiWb1xpc/ZHwwkimJ6X/fMRgxv0Q0NaW/R0QQkQsxuc3mJJVPoOUUBMGKphW9lUa2s3//ftxuN83NzUSjUbq6unA6nWa57MmTJ0mn01RWVuJyueju7kaSJObNm4ckSbwei+MQJartdpK5HP3xFDZJosphRUa3+BlVxWe1YJMkHTPICVTb7YgixCWJSCTC1U1X8+O3fow6qeoLH9hACuiNQVdPXU1fXx8dagdqXNVfI57XuLjhYtrb2+nr6yMWi5mtylIhLIHpJd0NgC4YDDI5OUlfX5/50p2XX9ZrIYqVRTEV8xskiqLpAezbt8/kz+fzjIyMcPy4XoyXSqUIh8PntANHo/pqxsLI6a2aJBmuR858XVR5mZdUSnc3HA4LqVQS0F9Nbbfr2k1RMmQycVQtRyKuv5vMYbeTyeTIZNLktQwulxc0gUxGwW63IQoqSUXD7bZhtdhZvupP+M7ma0t+3GM/289377yI/3q9jbyqcu/NK/jaC+/z+JdKF//45De28I11l5RcOBER0SJjsUmoOZV0Jo3DYUPVIJtKm2v2CYKggyXzr/4fXY/g+nicgQJSG89kWLiqiq2vtnN6fJxc4SG6eGiIqz/7WQaGhjg0MED36CifuPhiaoJBgn+1mEBtFRoiJ3brqwNVzanE4nExeOyMPp5XSaC2Cs//1969B9lZ3/cdfz+Xc9detNLuCq3u6LJCWm62hIyQi6EYpZjEHmpa4qZOE9NmXE8Nrus2tmZazThkpmYqkjSu4taXxCEkUBPXGIOLcQzhZiEsIWRJK2mRVrtntRft7tk99/Pc+sdz9kiycNppnemQ3+f1H2hXWsR53uc5z/N7vj8rTtX50jgjh+PT8ltu/xxiLjfwa8xOz2G7YNsRYWgRBBbz83M0vCKZbI5oOp4u61g2Nb/B4sXdECWJwgZeIyQMLDLpHEHgUS7VqNc9sEMiIoKwRhjYhFGE61g0goCOzjbirabi5Ys/u7/8737qdj7zyLPc2BZfS/jMX7zKb39iZ2v+3M8OlnRsi+TCckgPGpFNrVrGCiNsO/7c5CaSuOkkQSXCbW6NtDA+6v/nPIIFX3/ySW7fvZuPffGPuWHlSj77oQ/xwle+wuvLl3O8XqdjZITXvv1t2m2b1Zv6+P6xY9yZStFVrlx28Hct66Sjr5dTrxyla1knM+MFGrNVzs8OE22xsQgZOXyantXvvCWVmMU9mx+io6MbzytRKs3juBZB6LQWGdS9IjYefsMnokaurZuJSY9yqUwUzLN8+Ua8RgPbTeIHPnW/QWRbEAbYroXf8LAch4gQy7VJJ9ri3XesCMe+eAV6YX/5H792nHVbV/CfHtjNv/2D57Atmy//u3gVYK1Waw6fvOTFa9nUwoCwXsMK40UnYQS2BZZtk3AT+CF4fgAhOG4CO2NB3cdy4jOHiYkJvnriTjq6B5mbXUc0e5b7rokPqJ+dJ/DYDz9M+4YpfuO9p99xHsHV+/Yx9OCDrR/vinkK+/ez33EY37OHXC7HHz31FMuyWW7fvZtvvPQS1/f1sa15RnCqXufY+fMUXZf1zXvOL2QybE8tYejIEbasWcNtG9Zx4uW36FnbzcKwucV2HKNGqdE60P26R7vVQTGapX/nAKdeO8bi3suvLIt5XNdOs2rlJopzRfqugqGzB9iy+TasKL5fWqla+L7H4OD32fbeu5gv+jhOSG5NfPDOzE4SJS38sBEfcAkL105iWQlSyTTl+hw2Nn4jpFatkU5bBL5PiEOxEs8AXNgzHOxdLQAAE1dJREFUbng8/lxSSV4ALlAoxlc+n3nlOIdPjLNxVVfr6xdmpTmOxaJUksALiAIv3uMiisB2SNkODT+er08AOPEI7LAaQXN8FcCmTZvoLcRjp1lylv2vfpBc7m2+cTRL+c0B/uXNF0/f7//lHwBQLl/8CLBwig8wvmcPpYV5Cnv38ojjkNuzp/X9/+azzWGdzbOHFV1dHDp3jjffeIPdAwPcvXEjfzU8zNtTU3zkU/dw9LEfsSmX44lDh+js7WVDNst9N93Em4ODHD53jn8K9O8caEUg0fyZFg78xlyVZEeG9evjJT/HX/4p/TsH2LDjGtqtjl/AS0jezVzLnmdsbBiiOnPz8VLDmZnTJBNpPC+gVq0wMXWMDev/HqNjwyQTCdKZJYzmR0ilHHzfx/cbJFNJytUKqZSDRUgylQErwq9DelEC0g6ebxGfuFtYFixce9h+ffzw6tKjIeu2rmiNlX7qxUFSboKtG5eSbdSoJJOX7S//Z997iyiKcLCwXJfItrAjqFaqRGFALQzAcomsiFwuvqpar8VrwG0nQXTJNtuXzhP4tWv/knIZPrq2DDxLufzz5wn8TfMILj3Yf973//Y/28XwT+Z5feh1jozV6OntZX2txmylwt7/8jTvHxhgR18fXhDQ093Nf3v+eeYZp9y8tXTqtWMEQcD2W2657Pfu6OtlLj/BpoGdRFGZAy/F9/d7VnczMzpO14pl5EtjrL3ipxKTuG2L1hMG8btTIhG/q1pWvMf7olx7fIA5DhBhWzZhEFKvzpNMdjCSP0hX5+r4vmcU4fsBnueTTkMm57Ao204YhFQqdVzHIYwCquVac0Kq21oJBfHmEU+/cpKHd2zmUw/9Bf/58/8IiOeudy9qo9GZoa9/zWXbTQEkEy4Nz29O2o2IAo90Kv7vWJh2D1BvxDuoWI6D3dwjPZ1Jv+M8ga+euJPaTIVfv+7Z1jyBh59pJ7NyKR9eHC/o+BvnEezdyxOuy4EHHrg4j+DBB1v/7tLv/1e/8RC33n03I5NxjB5/+WWqhw6xYfduFnd2ct9NN7G2u5s/f+01KBb5yE3reerVMzwTBPSePs0ngoCetd3kp4fJH7+4hUr/zgHWrNzETJDn1Cvxtlg9q7tbZwSTQyMsWbfiF/ASkncz17FtSpX4oCpV4hfh1IXTLF2yhbofcfbsGySSDqPnB+nr68cPAuq1EqlkvNjBcVwc1wEc0umAVMqmWvUpzhdIuGmCIMJNWORySSrVOp4fkEwmILp4BrAwJ/7pHx3hhZ/EL+LvvxI/r+4FAVOlIv/j6CSfub7/iv3lgyDAdm2aex3Gj18GIY7lkLIT1IMqARZ2FA+vtBNufK3Ais8U+rZeXCr8Rz/8AFamjLMYrKCTx44N8Iltb8fv8kMW4cRQ6+vhynkE73voIeajiP2OA1FE3759FPbsobe3l/2OQ625hPXS789FEXXPw2nGcLZS4QXb5tCBA6zp6OC/v/46zuHD/NLHP86J8XGG8gW29PXhHznC25UKKzavpDJb5Krlq8gzEp/62zAzNg7LwbEs+ncOMDM6TmOuipWMqEyXufq6zaSs/8Oh+PJ3ljs+fpBrr/sVvHqZIPDJ5LrwvAZDZ36C7zcY2Bo/7ZJKpThy7DVSqcUE/gyT1QoDW+9kdmYYr+GTStl4nk/CyZJwHOqNKpOTo7S1LcahedvNcuLB8tg4ro3f3C11YX+5D2zv5zc//18pVT5GqVKhXIlvQx49eYHVyzr43a/9Ves6wMI1gAiHoF6PnzqLINXcSKFe9wiSNkni25LxU2kQ1n2s5nz2RCrFVKHA117YTCOzkV+76eKeejSngZfL8bv1fdfFZ0nNs3xyuVzrGYQFP/j0p6/8Gy6XKZVKlBcuDDZ/g4Xvz23fDsD3jh9nS18fd23axL+44w4e/u53mavV6Igifgy8/p3v8Ou7dlE+coTH83naLYtfzWRo+D7ZxW1cmJlk+y23YFnxWUgUlTl18hCzk2V6VnfTt3I1tRVV5mfm6du4Go8as2GB3v+rl438XeFu2Xo3E5OjZFMZatUipfIsk1On2Lh+B36YYma2QMQcmUw7uWyadas3Uqt5nBqKR0T5YZ0g8CFK0ZbLEYYhmUyaVDpFGHiEQUCIR1gP4/3u3BRRGBIFHrUo3kttYUupFbd+jq8+dD+f/uKjfOnz/5iu5q45C5/77+LynVT+7HvxlXo3mSQgwitXaTQsojDAsh0aNR/LsrBdl6QTb3JhRRZYNpbtUK/Go6yTuSpeaXFrEdHCVfsvv3o7n3zf8/z5mffSfn6UstfHA3eMX/YXWCgU+A9797LfcXjz/vuvnEfQ/DiQ/9KX3vF/wFwY8vBzz3HX1q1sGRxk9MwZOu//EB++eT3pWjudXV10Og5nZ2Z4+vBhxjs6ODU3x6EvfIHEmoC2nqWtW4ALZwB9K1dz6KWDrcUjk8NTNGbLtK1bTv74CJUlMyzrX4Nj2e/4M4k53PGJk+RyHQRRg0Q6RaNWJQyqBH5EqTJNKpPE9xdRLJYozIxSXLKBRtAgCHzm5i9Qr/nYLpTKJdyERSqRxXYivFqD+WKRpUuXUK6EWFEdSJF2IzzPJwhDnOZc9oXtpOpDQ8yUigwNDdGWShNGYesjAPy8/eVDfC/eNNOx44Mf6+LWybZtEwYNal58PcBOukBI2oFEc832Rzb/FPgpcPk8AYcCX33leiJrjrlgLR2LzpDPj/PYwa109k7xD/vjlX4LF/sWcfk8g+2PPMIjzY8DfPaz5H/m9mChUKA9nebmlSv5zV27eHlwkKF6ne8+/td8etcuvvHkk3z9m/+eN06e5Jd3b+Ub3z1Mxrb509/6LfZ+8YsA/N6936ZndTd+3cNNJeLP+KuWsOHmrVRm51rXBdrWLac+O8dNu+5kLhzjeDMat3BxxoOYx52eOklh9uJnwc7OVaSzXRSK8bSRjNNLrXqBZDpFJttDzYuYGDuA68C5My/T3rGWbC6L74RYWDQaddxEG46TpL19EdVqlXQmQRBYFArjLHWvon3RIupehamp+PR5YfPI6NSj3PfBG2HkW1y3pZsnf/AW6Vyq9TUfuLGNocMn6Otf0/p5A6+OZTlYthMf/JFNblFzk4jiHNgJHMsmkXGIQguvXieyI2pl/4qFQPl8nkdf3sHn7o0Pmn/Cizz62q3YWYtMMs/9tzpAH/YRSGcu2WLpku+/et8+ag8/DMCBBx64fB5C8+svnUdwOJ9nIJ9nrHYW69ZbWTI9zdk34iEqA9u28c1Hf0yhWuW5H57k+bfe4oPXXssXHn+c9a5Lcts22q0OMitTnD15HEiwaWAnc+EYjmWRXdzB9ltWc3ZkkPrsHGtX3chcOHbZikExmzuw9eK2R/OlEufPD1IqTVCvLny2DZmYiPdO6++/jdOnnmPFiveQy8XPb89MnyOdSFGPGlgW1IOAaqVCJp1mdr5INp2mVg3wfI9spo3AqzMzW8cPPLLNW3NPvzT4jvvLF+sBgeVx9GS8LgCI1wNcuLgNc+BbOG6EbYVEzd1g6rU6ke1gORmSro3lWPhevB7Achxc14r3v/P81h4C+/5nltLQJiJn8rJ5BJ+7J74YGR+08Z+ZcC3CKMnERByKS+cRDD34ILmfM89gYV1AZzMQg4ODLO7o4IXhYW70lhBG40yXSiSAc82NMHra25manuYv33yTnijiV3fs4PeffZYDYUjl5En2AtWozoaNNwBccYBXsnOsWdXPfFho/VrXsk4apcsfMhEzuQ2vQRimaHhFpi4McfW6a3GdRPy5Hjh24q+5Zsvd+PUZCoVZnORS3ESOmhfi1cvYtoMfWESRTUSCRCLASTj4YZVEwqVYLpLNZbCwqTYHG2SyKbLZFLVq/Gfc8/evA2D81BDLNmxu7S//9AsnSGcTrb3lATZmLU5WIn7p5s18+0eD8eOWze3q7YVNLIOAIAibn/8z2I0atYZHEEbYFoSRDaGNZVutW3n3bjkFW+I/48vfuo6P744XJ/3et7azaGmJKNvVWh1o223MjUDvrv/9PIItv/M7fNT3ecJ12e84pIFa8+NAb28vt+/axejVV7PniSfIpNNUm499npmaonjwIEcmJjg2Ospjn/wkT+3fz8GzZ9nQ3c3yzb0cGasxH81x4uW3Wp/33/O+99GztpvJM1M05qpMDk+RZ4T+nRefYLRtSLcnWbNy0y/iNSTvYm4QxItySsUC9VqRqakZbNvFtuo4yfgi3NTUCFFYJAptqqVJwugavHqBRr1GLpPE83w83yeTTeI3IuqVgCDwSCQcErk2wjC+au81iNfhWw6+75HJxBf0Ri5McfTkBW7ojs8CFhYCpXMpUm7isv3lkyuWsJWL1w3spItlx6fyjuPg+QFONgnlMkEQUi0VsaKIGh5JK4lNhBVauDkH24+vFSws1+3r6+Ohr68ism0eOzbAfde8RSK0qZcnaHPjd8xcLsfH3lNsrv3vvGwewZcefphHHIfCnj1AHIIDDzxAft8+iCLyDz7YujjY13x2IF2vM1QscvPatfzzO+7gqT/8Q6695x6ePnmSFx2Hu7q7+ejMDIVKhbznsbm9nSPPPENm506OjIy03u3b2jLYaZfZsEDX8mWsXXEjM0Ge3Owc9bkiM2PjdC1fRs/abrxyhUQm+7f2opJ3D/f8xNvUG2VWLe+nXJsmkbBZ1NZOtRZw9syr9G+6hZHRg/T0bMGxQwrFxRz/6XOsX7+NfP4g667ehp20cIIQywoJwpB0NkmlYlOrNXBtl2TSxfN8nEQK2w5JpxI0GiFBEN/mWzjgB4+O4i2eav3zgnQ6zciFqSseAgIgDAktK17qWyri2zb4IVZIfDHQsolsm5yTxCIi8AP80CeaD3CbC4YWTt/z+Tydqy9/JPOTH43vdsQH/DvPE2jNU7hk5d+CXC5HYc+e+Bltrpxn8LXnn+eF06cJajU+tG0b5xoNCqdP0zh8mDW2zfnpaf6kXOZfZwq02zZVz+Pa227jsYMHcRIJNty8lQuDZ5idLsWn/LNzeJUaM/Y4fX2ryXalsJf0kh+JZzWkOjpY0xe/8xejWZb8v7x65F3Pveqqa0g4PudGj9Dd1cv45DAXZoZp1EtsXL+DRqPA4o41DJ99lUVtPVy96joSSZfjJ57jhuvvot4o0vBquLZL4NUgADuKSDkJokSAYydw3XhNfi6dplwp0rBDgtAiIsK2LZ55Jd5NJZNt48DhMQ4wxpL2HMVSg7LttX69Uhm7bH9027aIsOJbezaEuSwu4Fo2rpOk4YeEUYht2URRSOjF46kiANfBD688fb+979Qli3suzgz425pH8P7163n/+vUMFYs88swzrFrWybfefJPOXI4l1Sr33nADubtu5CvfeZ07/8EOvvnii7i2TSaT4T/eey/Tb4+yYfMNjE0PU5mN75asWbmJ2bDAoZcOti70rV0VnxGMHD7NCKebi4MmFQDDWVHrkRgRMY1WgogYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBlMARAymAIgYTAEQMZgCIGIwBUDEYAqAiMEUABGDKQAiBvtfbX5dPTKffM4AAAAASUVORK5CYII=";let Tc=null,$r=null;function z_(){return $r||($r=new Promise(s=>{const t=new Image;t.onload=()=>{const e=new an(t);e.magFilter=De,e.minFilter=De,e.generateMipmaps=!1,e.needsUpdate=!0,Tc=e,s()},t.onerror=()=>{console.warn("Atlas load failed"),s()},t.src=F_}),$r)}function H_(s,t){if(!Tc)return G_(s,t);const e=Tc.clone();e.needsUpdate=!0;const n=ar/B_,i=ar/k_;return e.offset.set(s*n,1-(t+1)*i),e.repeat.set(n,i),e.wrapS=Mn,e.wrapT=Mn,e}function G_(s,t){const e=document.createElement("canvas");e.width=e.height=ar;const n=e.getContext("2d"),i=(s*37+t*97)%360;n.fillStyle=`hsl(${i},55%,40%)`,n.fillRect(0,0,ar,ar);const r=new Ns(e);return r.magFilter=De,r.minFilter=De,r}function V_(s,t,e={}){const n=H_(s,t),i=new Ue({map:n,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.opacity===void 0||e.opacity>=.95,alphaTest:e.alphaTest??(e.transparent?.1:.01),side:oi});return e.emissive!==void 0&&(i.emissive=new yt(e.emissive),i.emissiveIntensity=.6),i}const W_=[0,0],Jr=[1,0],Dh=[2,0],Ba=[3,0],X_=[4,0],Qr=[5,0],Oh=[6,0],Y_=[7,0],Nh=[9,0],q_=[10,0],j_=[11,0],Z_=[12,0],K_=[13,0],$_=[14,0],J_=[15,0],Q_=[0,1],tv=[1,1],ev=[2,1],nv=[3,1],iv=[4,1],sv=[5,1],rv=[6,1],to=[7,1],Uh=[8,1],ov=[9,1],av=[10,1],cv=[11,1],lv=[12,1],hv=[13,1],ka=[14,1],dv=[15,1],eo=[0,2],Bh=[1,2],no=[2,2],uv=[3,2],fv=[6,2],Fa=new Map;function ee(s,t,e={}){const n=`${s},${t},${JSON.stringify(e)}`;if(Fa.has(n))return Fa.get(n);const i=V_(s,t,e);return Fa.set(n,i),i}let Hi=null,ws=null,io=null;function $d(s,t){const e=Math.sin(t*1.1)*.5+.5,n=Math.sin(t*.65+1.3)*.5+.5;s.fillStyle="#1a5fa0",s.fillRect(0,0,16,16),s.fillStyle=`rgba(40,130,210,${.45+e*.3})`,s.fillRect(0,Math.round(e*9),16,3),s.fillStyle=`rgba(80,160,240,${.2+n*.2})`,s.fillRect(0,Math.round(n*5)+6,16,2),s.fillStyle=`rgba(180,220,255,${.06+e*.06})`,s.fillRect(Math.round(n*10),0,4,16)}function pv(){if(io)return io;Hi=document.createElement("canvas"),Hi.width=Hi.height=16;const s=Hi.getContext("2d");return $d(s,0),ws=new Ns(Hi),ws.magFilter=De,ws.minFilter=De,io=new Ue({map:ws,transparent:!0,opacity:.78,depthWrite:!1,alphaTest:0,side:Xn}),io}function mv(s){!Hi||!ws||($d(Hi.getContext("2d"),s),ws.needsUpdate=!0)}function gv(s,t){const e=t==null?void 0:t.emissive,n=e?{emissive:e}:{};switch(s){case 1:return[ee(...Jr,n),ee(...Jr,n),ee(...W_,n),ee(...Dh,n),ee(...Jr,n),ee(...Jr,n)];case 2:return Ie(Dh,n);case 3:return Ie(Ba,n);case 4:return Ie(X_,n);case 5:return[ee(...Qr,n),ee(...Qr,n),ee(...Oh,n),ee(...Oh,n),ee(...Qr,n),ee(...Qr,n)];case 6:return Ie(Y_,{transparent:!0,alphaTest:.5});case 7:{const i=pv();return[i,i,i,i,i,i]}case 8:return Ie(K_,n);case 9:return Ie(Z_,{transparent:!0,opacity:.6});case 10:return Ie(Nh,n);case 11:return Ie(q_,n);case 12:return Ie(j_,n);case 13:return Ie(Q_,n);case 14:return Ie(tv,n);case 15:return Ie(ev,n);case 16:return Ie($_,n);case 17:return Ie(lv,n);case 18:return Ie(ov,n);case 19:return Ie(iv,{emissive:16755200});case 20:return Ie(sv,n);case 21:return Ie(rv,{transparent:!0,opacity:.7});case 22:return[ee(...no,n),ee(...no,n),ee(...J_,n),ee(...Nh,n),ee(...no,n),ee(...no,n)];case 23:return[ee(...hv,n),ee(...ka,n),ee(...dv,n),ee(...Ba,n),ee(...ka,n),ee(...ka,n)];case 24:return[ee(...to,n),ee(...to,n),ee(...Uh,n),ee(...Uh,n),ee(...to,n),ee(...to,n)];case 26:return Ie(av,n);case 27:return Ie(cv,n);case 47:return Ie(fv,{emissive:16729088});case 49:return[ee(...eo,n),ee(...eo,n),ee(...Bh,n),ee(...Bh,n),ee(...eo,n),ee(...eo,n)];case 54:return Ie(uv,n);case 61:return Ie(nv,n);default:{const i=ee(...Ba,n);return[i,i,i,i,i,i]}}}function Ie(s,t={}){const e=ee(s[0],s[1],t);return[e,e,e,e,e,e]}const Jd=Math.sqrt(3),_v=.5*(Jd-1),Js=(3-Jd)/6,kh=s=>Math.floor(s)|0,Fh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Dn(s=Math.random){const t=vv(s),e=new Float64Array(t).map(i=>Fh[i%12*2]),n=new Float64Array(t).map(i=>Fh[i%12*2+1]);return function(r,a){let o=0,c=0,l=0;const h=(r+a)*_v,d=kh(r+h),p=kh(a+h),f=(d+p)*Js,_=d-f,v=p-f,m=r-_,g=a-v;let E,M;m>g?(E=1,M=0):(E=0,M=1);const w=m-E+Js,O=g-M+Js,L=m-1+2*Js,I=g-1+2*Js,q=d&255,b=p&255;let R=.5-m*m-g*g;if(R>=0){const ot=q+t[b],F=e[ot],W=n[ot];R*=R,o=R*R*(F*m+W*g)}let j=.5-w*w-O*O;if(j>=0){const ot=q+E+t[b+M],F=e[ot],W=n[ot];j*=j,c=j*j*(F*w+W*O)}let J=.5-L*L-I*I;if(J>=0){const ot=q+1+t[b+1],F=e[ot],W=n[ot];J*=J,l=J*J*(F*L+W*I)}return 70*(o+c+l)}}function vv(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const Wo={1:{name:"Grass",color:5933628,topColor:6991948,bottomColor:9136404},2:{name:"Dirt",color:9136404},3:{name:"Stone",color:8421504},4:{name:"Sand",color:12759680},5:{name:"Oak Log",color:9133628,topColor:10516540},6:{name:"Leaves",color:2976301},7:{name:"Water",color:1731466,transparent:!0},8:{name:"Brick",color:9124410},9:{name:"Glass",color:11197951,transparent:!0},10:{name:"Oak Planks",color:13149284},11:{name:"Cobblestone",color:6316128},12:{name:"Gravel",color:9076848},13:{name:"Gold Ore",color:12623920,topColor:13940800},14:{name:"Iron Ore",color:7371386},15:{name:"Coal Ore",color:3815994},16:{name:"Bookshelf",color:13149284,topColor:9133628},17:{name:"Mossy Stone",color:5271632},18:{name:"Obsidian",color:1706538},19:{name:"Glowstone",color:16768392,emissive:16755200},20:{name:"Snow",color:15658751,topColor:16777215},21:{name:"Ice",color:11193599,transparent:!0},22:{name:"Crafting Table",color:13149284,topColor:9133628},23:{name:"Furnace",color:7829367,topColor:5592405},24:{name:"TNT",color:13382451,topColor:5609779},25:{name:"Sponge",color:13156416},26:{name:"Wool (White)",color:14540253},27:{name:"Wool (Red)",color:13382434},28:{name:"Wool (Blue)",color:2245836},29:{name:"Wool (Yellow)",color:14535714},30:{name:"Wool (Green)",color:2783786},31:{name:"Chest",color:9136404},32:{name:"Bow",color:9136404},33:{name:"Fishing Rod",color:9136404},34:{name:"Bed",color:16729156},35:{name:"Iron Helmet",color:8947848},36:{name:"Iron Chestplate",color:8947848},37:{name:"Iron Leggings",color:7829367},38:{name:"Iron Boots",color:6710886},39:{name:"Compass",color:16768256},40:{name:"Enchanting Table",color:6697932},41:{name:"Brewing Stand",color:8930304},42:{name:"Nether Wart",color:11145489,solid:!1},43:{name:"Sugar",color:16777215,solid:!1},44:{name:"Red Mushroom",color:14492194,solid:!1},45:{name:"Wheat",color:16772727,solid:!1},46:{name:"Enchanted Book",color:3355647},47:{name:"Lava",color:16729088,emissive:16746496},48:{name:"Spawner",color:2236962,emissive:3355443},49:{name:"Sandstone",color:14534776},50:{name:"Cactus",color:2984478,solid:!1},51:{name:"Flower",color:16737928,solid:!1},52:{name:"Dead Bush",color:9132587,solid:!1},53:{name:"Packed Ice",color:10210815,transparent:!0},54:{name:"Terracotta",color:11167300},55:{name:"Campfire",color:16737792,emissive:16729088},56:{name:"Torch",color:16768324,emissive:16750848},57:{name:"Pressure Plate",color:11184810},58:{name:"Lever",color:5592405},59:{name:"Redstone Lamp",color:16720384,emissive:0},60:{name:"Map",color:14535816},61:{name:"Diamond Ore",color:5636078},62:{name:"Iron Ingot",color:14540253},63:{name:"Gold Ingot",color:16768324},64:{name:"Coal",color:2236962},65:{name:"Diamond",color:4521966},66:{name:"Rail",color:8947814},67:{name:"Powered Rail",color:16746496},68:{name:"Minecart",color:8947848},69:{name:"Music Disc (Green)",color:4500036},70:{name:"Music Disc (Red)",color:11158596},71:{name:"Music Disc (Blue)",color:4474026},72:{name:"Shield",color:13421772},73:{name:"Nether Portal",color:7807692,emissive:10040319,transparent:!0,solid:!1},74:{name:"Copper Ore",color:12088115},75:{name:"Lapis Ore",color:2245802},76:{name:"Copper Ingot",color:14518340,solid:!1},77:{name:"Lapis Lazuli",color:2250188,solid:!1},78:{name:"Ladder",color:13149284,solid:!1,transparent:!0},79:{name:"Oak Fence",color:13149284,transparent:!0},80:{name:"Fence Gate",color:13149284,transparent:!0,solid:!1},81:{name:"Stone Bricks",color:8026746},82:{name:"Mossy Stone Bricks",color:5929562},83:{name:"Spruce Log",color:4863272,topColor:6965808},84:{name:"Spruce Leaves",color:1722922},85:{name:"Palm Log",color:10123850,topColor:9071162},86:{name:"Palm Leaves",color:3836458},87:{name:"Birch Log",color:13945781,topColor:13154456},88:{name:"Birch Leaves",color:4889146},280:{name:"Stick",color:13149284,solid:!1},268:{name:"Wooden Sword",color:13149284,solid:!1},269:{name:"Wooden Shovel",color:13149284,solid:!1},270:{name:"Wooden Pickaxe",color:13149284,solid:!1},271:{name:"Wooden Axe",color:13149284,solid:!1},272:{name:"Stone Sword",color:8421504,solid:!1},273:{name:"Stone Shovel",color:8421504,solid:!1},274:{name:"Stone Pickaxe",color:8421504,solid:!1},275:{name:"Stone Axe",color:8421504,solid:!1},257:{name:"Iron Pickaxe",color:14540253,solid:!1},258:{name:"Iron Axe",color:14540253,solid:!1},267:{name:"Iron Sword",color:14540253,solid:!1}},Di=[1,3,11,4,5,10,8,9,19,18,32,33,34,39,56,60];function si(s){var t;return((t=Wo[s])==null?void 0:t.name)??"Unknown"}function cr(s){var t;return((t=Wo[s])==null?void 0:t.color)??16777215}const Gn=16,Qs=62,xv=4096,yv=4096,Mv=8192,Ev=8192*256;function Ae(s,t,e){return s+xv+t*Mv+(e+yv)*Ev}function zh(s,t,e){return`${s},${t},${e}`}const oe=class oe{constructor(t){C(this,"scene");C(this,"instancedMeshes",new Map);C(this,"instanceCount",new Map);C(this,"_dirtyMeshes",new Set);C(this,"instanceIndex",new Map);C(this,"instanceRevIndex",new Map);C(this,"blockData",new Map);C(this,"generatedChunks",new Set);C(this,"modifications",new Map);C(this,"chestContents",new Map);C(this,"nH1",Dn(()=>.31415));C(this,"nH2",Dn(()=>.62831));C(this,"nH3",Dn(()=>.94247));C(this,"nH4",Dn(()=>.12566));C(this,"nBio",Dn(()=>.78539));C(this,"nCv1",Dn(()=>.52359));C(this,"nCv2",Dn(()=>.20943));C(this,"nOre",Dn(()=>.41887));C(this,"noise2D",Dn(()=>.69813));C(this,"noise2D2",Dn(()=>.87964));C(this,"biomeNoise",Dn(()=>.78539));C(this,"torchLights",new Map);C(this,"torchLightQueue",[]);C(this,"leverStates",new Map);this.scene=t,this.generateTerrain(),this.generateDungeons()}getDungeonSpawns(){return[[-40,0,-40],[50,0,30],[-20,0,80]]}getBiome(t,e){const n=this.nBio(t*.0012,e*.0012);return n<-.45?4:n<-.05?0:n<.25?2:n<.52?1:3}getHeight(t,e){const n=this.getBiome(t,e),i=this.nH1(t*.002,e*.002),r=this.nH2(t*.004,e*.004)*.5,a=this.nH3(t*.008,e*.008)*.25,o=this.nH4(t*.016,e*.016)*.125,l=((i+r+a+o)/1.875+1)*.5;switch(n){case 4:return Math.min(Math.round(40+l*20),59);case 0:return Math.round(63+l*5);case 1:return Math.round(63+l*9);case 2:return Math.round(63+l*18);case 3:return Math.round(64+l*44);default:return 64}}isCave(t,e,n){const i=this.nCv1(t*.04+e*.035,n*.04),r=this.nCv2(t*.04,n*.04+e*.035);return Math.abs(i)+Math.abs(r)<.1}generateChunkRaw(t,e,n,i){for(let r=0;r<Gn;r++)for(let a=0;a<Gn;a++){const o=t*Gn+r,c=e*Gn+a,l=this.getHeight(o,c),h=this.getBiome(o,c),d=h!==4&&l>=Qs-2&&l<=Qs+2,p=(f,_)=>{n.set(Ae(o,f,c),_),i.push([o,f,c])};for(let f=0;f<=l;f++){if(f>4&&f<l-1&&this.isCave(o,f,c))continue;let _;if(f<=4?_=3:h===1||d?_=f>=l-3?4:3:h===4?_=f===l?12:f===l-1?4:3:f===l?_=h===3&&l>100?20:1:f>=l-4?_=2:_=3,_===3&&f<l-4){const v=this.nOre(o*.16+f*.11,c*.16);f<=16&&v>.76?_=61:f<=32&&v>.68?_=13:f<=64&&v>.6?_=14:f<=128&&v>.54&&(_=15)}p(f,_)}if(l<Qs)for(let f=l+1;f<=Qs;f++)p(f,7)}}generateChunkDecorations(t,e,n){for(let i=0;i<Gn;i++)for(let r=0;r<Gn;r++){const a=t*Gn+i,o=e*Gn+r,c=this.getHeight(a,o),l=this.getBiome(a,o);if(c<=Qs)continue;const h=Math.random();l===0?h<.02?this.placeBlock(a,c+1,o,51,!1):h<.03&&this.placeTree(a,c+1,o):l===1?h<.03?this.placeBlock(a,c+1,o,50,!1):h<.05&&this.placeBlock(a,c+1,o,52,!1):l===2?h<.09?this.placeTree(a,c+1,o):h<.12&&this.placeBlock(a,c+1,o,51,!1):l===3&&c<100&&h<.03&&this.placeTree(a,c+1,o)}}placeTree(t,e,n){const i=4+Math.floor(Math.random()*3);for(let a=0;a<i;a++)this.placeBlock(t,e+a,n,5,!1);const r=e+i;for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)for(let c=-1;c<=2;c++)Math.abs(a)===2&&Math.abs(o)===2&&c<1||a===0&&o===0&&c<2||this.placeBlock(t+a,r+c,n+o,6,!1)}generateTerrain(){const e=new Map,n=[];for(let i=-3;i<=3;i++)for(let r=-3;r<=3;r++){const a=`${i},${r}`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkRaw(i,r,e,n))}for(const[i,r,a]of n){const o=Ae(i,r,a),c=e.get(o);if(!oe.isOpaque(c)){this.placeBlock(i,r,a,c,!1);continue}!oe.isOpaque(e.get(Ae(i+1,r,a))??0)||!oe.isOpaque(e.get(Ae(i-1,r,a))??0)||!oe.isOpaque(e.get(Ae(i,r+1,a))??0)||!oe.isOpaque(e.get(Ae(i,r-1,a))??0)||!oe.isOpaque(e.get(Ae(i,r,a+1))??0)||!oe.isOpaque(e.get(Ae(i,r,a-1))??0)?this.placeBlock(i,r,a,c,!1):this.blockData.set(o,c)}for(let i=-3;i<=3;i++)for(let r=-3;r<=3;r++){const a=`${i},${r}_dec`;this.generatedChunks.has(a)||(this.generatedChunks.add(a),this.generateChunkDecorations(i,r,e))}}generateAroundPlayer(t,e){const i=Math.floor(t/Gn),r=Math.floor(e/Gn);let a=0,o=0,c=1/0,l=!1;for(let _=i-3;_<=i+3;_++)for(let v=r-3;v<=r+3;v++){if(this.generatedChunks.has(`${_},${v}`))continue;const m=(_-i)*(_-i)+(v-r)*(v-r);m<c&&(c=m,a=_,o=v,l=!0)}if(!l)return;const h=`${a},${o}`;this.generatedChunks.add(h);const d=new Map,p=[];this.generateChunkRaw(a,o,d,p);for(const[_,v,m]of p){const g=Ae(_,v,m),E=d.get(g);if(!oe.isOpaque(E)){this.placeBlock(_,v,m,E,!1);continue}const M=(O,L,I)=>d.get(Ae(O,L,I))??this.blockData.get(Ae(O,L,I))??0;!oe.isOpaque(M(_+1,v,m))||!oe.isOpaque(M(_-1,v,m))||!oe.isOpaque(M(_,v+1,m))||!oe.isOpaque(M(_,v-1,m))||!oe.isOpaque(M(_,v,m+1))||!oe.isOpaque(M(_,v,m-1))?this.placeBlock(_,v,m,E,!1):this.blockData.set(g,E)}const f=`${a},${o}_dec`;this.generatedChunks.has(f)||(this.generatedChunks.add(f),this.generateChunkDecorations(a,o,d))}static isOpaque(t){return t>0&&!oe.TRANSPARENT_TYPES.has(t)}static getBoxGeo(){return oe.sharedBoxGeo||(oe.sharedBoxGeo=new Te(1,1,1)),oe.sharedBoxGeo}getOrCreateInstancedMesh(t){if(this.instancedMeshes.has(t))return this.instancedMeshes.get(t);const e=Wo[t],n=gv(t,e??{}),i=n.length===1?n[0]:n,r=new R_(oe.getBoxGeo(),i,oe.MAX_INSTANCES);return r.instanceMatrix.setUsage(vf),r.count=0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!1,t===7&&(r.renderOrder=1),this.scene.add(r),this.instancedMeshes.set(t,r),this.instanceCount.set(t,0),r}placeBlock(t,e,n,i,r=!0){const a=Ae(t,e,n);if(!r&&this.blockData.has(a))return;this.blockData.has(a)&&this._removeBlockInstance(a),this.blockData.set(a,i);const o=this.getOrCreateInstancedMesh(i),c=this.instanceCount.get(i)??0;if(c>=oe.MAX_INSTANCES)return;const l=i===7?.375:.5;oe._mat4.setPosition(t+.5,e+l,n+.5),o.setMatrixAt(c,oe._mat4),o.count=c+1,this._dirtyMeshes.add(i),this.instanceIndex.set(a,c),this.instanceRevIndex.set(`${i}:${c}`,a),this.instanceCount.set(i,c+1),r&&this.modifications.set(zh(t,e,n),i)}removeBlock(t,e,n){const i=Ae(t,e,n);if(!this.blockData.has(i))return!1;this._removeBlockInstance(i),this.blockData.delete(i),this.modifications.set(zh(t,e,n),0);const r=[[t+1,e,n],[t-1,e,n],[t,e+1,n],[t,e-1,n],[t,e,n+1],[t,e,n-1]];for(const[a,o,c]of r){const l=Ae(a,o,c),h=this.blockData.get(l);h===void 0||h===0||this.instanceIndex.has(l)||this._addBlockMesh(a,o,c,h)}return!0}_addBlockMesh(t,e,n,i){const r=Ae(t,e,n);if(this.instanceIndex.has(r))return;const a=this.getOrCreateInstancedMesh(i),o=this.instanceCount.get(i)??0;o>=oe.MAX_INSTANCES||(oe._mat4.setPosition(t+.5,e+.5,n+.5),a.setMatrixAt(o,oe._mat4),a.count=o+1,this._dirtyMeshes.add(i),this.instanceIndex.set(r,o),this.instanceRevIndex.set(`${i}:${o}`,r),this.instanceCount.set(i,o+1))}_removeBlockInstance(t){const e=this.blockData.get(t);if(e===void 0)return;const n=this.instancedMeshes.get(e),i=this.instanceIndex.get(t);if(!n||i===void 0)return;const a=(this.instanceCount.get(e)??0)-1;if(i!==a){n.getMatrixAt(a,oe._mat4),n.setMatrixAt(i,oe._mat4),n.instanceMatrix.needsUpdate=!0;const c=this.instanceRevIndex.get(`${e}:${a}`);c!==void 0&&(this.instanceIndex.set(c,i),this.instanceRevIndex.set(`${e}:${i}`,c))}this.instanceIndex.delete(t),this.instanceRevIndex.delete(`${e}:${a}`),i!==a&&this.instanceRevIndex.delete(`${e}:${i}`);const o=a;n.count=o,this.instanceCount.set(e,o),n.instanceMatrix.needsUpdate=!0}hasBlock(t,e,n){return this.blockData.has(Ae(t,e,n))}getBlockType(t,e,n){return this.blockData.get(Ae(t,e,n))}getBlock(t,e,n){const i=this.blockData.get(Ae(t,e,n));if(i!==void 0)return{type:i}}getBlockCount(){return this.blockData.size}isNearBlock(t,e,n,i,r){for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)for(let c=-r;c<=r;c++)if(this.blockData.get(Ae(t+a,e+o,n+c))===i)return!0;return!1}getMeshes(){return Array.from(this.instancedMeshes.values())}updateVisibility(t){}raycastBlock(t,e,n=6){let i=Math.floor(t.x),r=Math.floor(t.y),a=Math.floor(t.z);const o=e.x,c=e.y,l=e.z,h=o>0?1:o<0?-1:0,d=c>0?1:c<0?-1:0,p=l>0?1:l<0?-1:0,f=h!==0?Math.abs(1/o):1/0,_=d!==0?Math.abs(1/c):1/0,v=p!==0?Math.abs(1/l):1/0;let m=h>0?(i+1-t.x)*f:h<0?(t.x-i)*f:1/0,g=d>0?(r+1-t.y)*_:d<0?(t.y-r)*_:1/0,E=p>0?(a+1-t.z)*v:p<0?(t.z-a)*v:1/0,M=0,w=0,O=0;const L=Math.ceil(n*3)+2;for(let I=0;I<L;I++){if(this.blockData.has(Ae(i,r,a)))return{x:i,y:r,z:a,face:oe._rayFace.set(M,w,O)};if(m<g)if(m<E){if(m>n)return null;i+=h,M=-h,w=0,O=0,m+=f}else{if(E>n)return null;a+=p,M=0,w=0,O=-p,E+=v}else if(g<E){if(g>n)return null;r+=d,M=0,w=-d,O=0,g+=_}else{if(E>n)return null;a+=p,M=0,w=0,O=-p,E+=v}}return null}getSurfaceHeight(t,e){const n=new Set([0,6,7,9,21,50,51,52,56,57,58]);for(let i=200;i>=0;i--){const r=this.blockData.get(Ae(t,i,e));if(r!==void 0&&!n.has(r))return i}return this.getHeight(t,e)}getSpawnHeight(t,e,n=2){let i=0;for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){const o=this.getSurfaceHeight(t+r,e+a);o>i&&(i=o)}return i}getApproxSurfaceY(t,e){return this.getSurfaceHeight(Math.round(t),Math.round(e))+1}getChestInventory(t,e,n){const i=`${t},${e},${n}`;return this.chestContents.has(i)||this.chestContents.set(i,new Array(27).fill(0)),this.chestContents.get(i)}setChestInventory(t,e,n,i){const r=`${t},${e},${n}`;this.chestContents.set(r,i)}placeVillages(){this.placeVillage(-60,-60),this.placeVillage(60,20),this.placeVillage(-20,80)}placeVillage(t,e){const n=this.getSurfaceHeight(t,e);this.placeWell(t,n,e);const i=[[-12,-10],[12,-10],[-12,12],[12,12],[0,-16]];for(const[r,a]of i){const o=t+r,c=e+a,l=this.getSurfaceHeight(o,c);this.placeHouse(o,l,c,8,5,6)}}placeHouse(t,e,n,i,r,a){for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+1,n+h,11,!1);for(let l=0;l<i;l++)for(let h=0;h<a;h++)for(let d=0;d<r;d++)(l===0||l===i-1||h===0||h===a-1)&&this.placeBlock(t+l,e+2+d,n+h,10,!1);const o=t+Math.floor(i/2);this.removeBlock(o,e+2,n),this.removeBlock(o,e+3,n);const c=n+1;this.removeBlock(t,e+3,c),this.placeBlock(t,e+3,c,9,!0),this.removeBlock(t+i-1,e+3,c),this.placeBlock(t+i-1,e+3,c,9,!0);for(let l=0;l<i;l++)for(let h=0;h<a;h++)this.placeBlock(t+l,e+2+r,n+h,10,!1);this.placeBlock(o+1,e+3,n+1,19,!1)}placeWell(t,e,n){for(let i=0;i<3;i++)for(let r=0;r<3;r++)(i!==1||r!==1)&&this.placeBlock(t+i-1,e+1,n+r-1,11,!1);this.placeBlock(t,e+1,n,7,!1)}generateDungeons(){this.generateDungeon(-40,-40),this.generateDungeon(50,30)}generateDungeon(t,e){const n=this.getSurfaceHeight(t,e),i=n-8,r=5;for(let o=-4;o<=4;o++)for(let c=0;c<r;c++)for(let l=-4;l<=4;l++){const h=t+o,d=i+c,p=e+l,f=Math.abs(o)===4||Math.abs(l)===4,_=c===0,v=c===r-1;if(f||_||v){const m=Math.random()<.3?82:81;this.placeBlock(h,d,p,m,!0)}else this.removeBlock(h,d,p)}this.placeBlock(t,i+1,e,48,!0);const a=[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]];for(const[o,c]of a){const l=i+1;this.placeBlock(o,l,c,31,!0);const h=Array.from({length:27},()=>Math.floor(Math.random()*31));this.setChestInventory(o,l,c,h)}for(let o=0;o<10;o++){const c=t-o,l=i+5+o,h=e-5;if(l>=n)break;this.removeBlock(c,l,h),o>0&&this.removeBlock(c,l-1,h)}}flushDirtyMeshes(){for(const t of this._dirtyMeshes){const e=this.instancedMeshes.get(t);e&&(e.instanceMatrix.needsUpdate=!0)}this._dirtyMeshes.clear()}saveToStorage(t){const e={};for(const[r,a]of this.modifications.entries())e[r]=a;const n={};for(const[r,a]of this.chestContents.entries())a.some(o=>o!==0)&&(n[r]=a);const i=JSON.stringify({version:2,mods:e,chests:n,player:t??null});try{localStorage.setItem("mc_world_save",i)}catch(r){console.warn("Save failed:",r)}}loadFromStorage(){try{const t=localStorage.getItem("mc_world_save");if(!t)return null;const e=JSON.parse(t);if(e.version!==1&&e.version!==2)return null;for(const[n,i]of Object.entries(e.mods)){const[r,a,o]=n.split(",").map(Number);i===0?this.removeBlock(r,a,o):this.placeBlock(r,a,o,i,!0)}if(e.version>=2&&e.chests)for(const[n,i]of Object.entries(e.chests))this.chestContents.set(n,i);return e.version>=2?e.player:null}catch(t){return console.warn("Load failed:",t),null}}addTorchLight(t,e,n){const r=`${t},${e},${n}`;if(this.torchLights.has(r))return;const a=new Lh(16755268,1.5,8);for(a.position.set(t,e,n),a.castShadow=!1,this.scene.add(a),this.torchLights.set(r,a),this.torchLightQueue.push(r);this.torchLightQueue.length>50;){const o=this.torchLightQueue.shift();if(o){const c=this.torchLights.get(o);c&&(this.scene.remove(c),this.torchLights.delete(o))}}}updateTorchFlicker(t){for(const[e,n]of this.torchLights){const i=e.charCodeAt(0)*31+e.charCodeAt(2)*17,r=1.3+Math.sin(t*8+i)*.15+Math.sin(t*13+i*2)*.1+(Math.random()-.5)*.05;n.intensity=r}}removeTorchLight(t,e,n){const i=`${t},${e},${n}`,r=this.torchLights.get(i);if(r){this.scene.remove(r),this.torchLights.delete(i);const a=this.torchLightQueue.indexOf(i);a>=0&&this.torchLightQueue.splice(a,1)}}checkPressurePlate(t){const e=Math.floor(t.x),n=Math.floor(t.y-.1),i=Math.floor(t.z);this.blockData.get(Ae(e,n,i))===57&&this.activateLamp(e,n,i)}toggleLever(t,e,n){const i=`${t},${e},${n}`,a=!(this.redstoneState.get(i)??!1);if(this.redstoneState.set(i,a),a)for(let o=-4;o<=4;o++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Ae(t+o,e+c,n+l))===59&&this.activateLamp(t+o,e+c,n+l);else for(let o=-4;o<=4;o++)for(let c=-4;c<=4;c++)for(let l=-4;l<=4;l++)this.blockData.get(Ae(t+o,e+c,n+l))===59&&this.deactivateLamp(t+o,e+c,n+l)}activateLamp(t,e,n){const i=`${t},${e},${n}`;if(!(this.blockData.get(Ae(t,e,n))!==59||(this.redstoneState.get(i)??!1))&&(this.redstoneState.set(i,!0),!this.redstoneLoights.has(i))){const o=new Lh(16737792,1.2,6);o.position.set(t,e,n),this.scene.add(o),this.redstoneLoights.set(i,o)}}deactivateLamp(t,e,n){const i=`${t},${e},${n}`;if(this.blockData.get(Ae(t,e,n))!==59||!(this.redstoneState.get(i)??!1))return;this.redstoneState.set(i,!1);const o=this.redstoneLoights.get(i);o&&(this.scene.remove(o),this.redstoneLoights.delete(i))}initializeTorchLights(){for(const[t]of this.modifications.entries())if(this.modifications.get(t)===56){const[e,n,i]=t.split(","),r=Number(e),a=Number(n),o=Number(i);!isNaN(r)&&!isNaN(a)&&!isNaN(o)&&this.addTorchLight(r,a+.5,o)}}};C(oe,"MAX_INSTANCES",32e3),C(oe,"_mat4",new be),C(oe,"_rayFace",new U),C(oe,"TRANSPARENT_TYPES",new Set([7,9,21,50,51,52,56,57,58,83,84,85,86,87,88])),C(oe,"sharedBoxGeo",null);let wc=oe;const za=4.5,Sv=1.6,so=9,Hh=8.5,Gh=-28,tr=1.8,ro=.55,ln=1.62,bv=5,dn=class dn{constructor(t,e,n){C(this,"camera");C(this,"world");C(this,"scene");C(this,"position",new U(0,30,0));C(this,"velocity",new U);C(this,"onGround",!1);C(this,"gameMode","survival");C(this,"_forward",new U);C(this,"_right",new U);C(this,"_move",new U);C(this,"_rayDir",new U);C(this,"_highlightVec",new U);C(this,"_lastHit",null);C(this,"_lastHitFrame",-1);C(this,"_frameCount",0);C(this,"health",40);C(this,"maxHealth",40);C(this,"invincible",0);C(this,"spawnGrace",0);C(this,"armor",0);C(this,"fallStartY",0);C(this,"wasOnGround",!1);C(this,"fallTracking",!1);C(this,"keys",{});C(this,"yaw",0);C(this,"pitch",0);C(this,"locked",!1);C(this,"chatOpen",!1);C(this,"flying",!1);C(this,"lastSpace",0);C(this,"inWater",!1);C(this,"wasInWater",!1);C(this,"waterTimer",0);C(this,"onLadder",!1);C(this,"swimStroke",0);C(this,"waterCameraTilt",0);C(this,"waterEntryVelocityDamp",1);C(this,"selectedBlockType",1);C(this,"raycaster",new Vo);C(this,"highlightMesh");C(this,"outlineMesh");C(this,"outlineOpacity",0);C(this,"outlineTarget",0);C(this,"_lastOutlineKey","");C(this,"breakProgress",0);C(this,"breakTarget",null);C(this,"breakIndicator",null);C(this,"isBreakingHeld",!1);C(this,"selfModel",null);C(this,"selfHead",null);C(this,"selfLA",null);C(this,"selfRA",null);C(this,"selfLL",null);C(this,"selfRL",null);C(this,"walkCycle",0);C(this,"prevXZ",new $t);C(this,"thirdPerson",!1);C(this,"headBobPhase",0);C(this,"headBobIntensity",0);C(this,"cameraRoll",0);C(this,"currentFov",75);C(this,"fpArm",null);C(this,"fpArmGroup",null);C(this,"_armSwing",0);C(this,"_armSwingDir",1);C(this,"_armBob",0);C(this,"onPlaceBlock");C(this,"onBreakBlock");C(this,"onOpenChat");C(this,"onDied");C(this,"onHealthChanged");C(this,"onRightClick");C(this,"setDeathCause");C(this,"onWaterEnter");C(this,"onWaterExit");C(this,"_hitPoint",new U);C(this,"_hitNormal",new U);C(this,"_hitResult",{point:null,face:{normal:null},blockX:0,blockY:0,blockZ:0});this.camera=t,this.world=e,this.scene=n;const i=new Te(1.02,1.02,1.02),r=new ci({color:0,wireframe:!0,transparent:!0,opacity:0});this.highlightMesh=new te(i,r),this.highlightMesh.visible=!1,n.add(this.highlightMesh);const a=new I_(new Te(1.005,1.005,1.005)),o=new jd({color:0,transparent:!0,opacity:0,linewidth:1,depthTest:!0});this.outlineMesh=new L_(a,o),this.outlineMesh.visible=!1,this.outlineMesh.renderOrder=999,n.add(this.outlineMesh),this.selfModel=this.buildModel(n),this.selfModel.visible=!1,this.buildFPArm(),this.setupInput()}static getCrackTexture(t){if(!dn._crackTextures){dn._crackTextures=[];for(let e=0;e<8;e++){const n=document.createElement("canvas");n.width=n.height=16;const i=n.getContext("2d");i.clearRect(0,0,16,16);const r=e+1;i.strokeStyle=`rgba(0,0,0,${.3+e*.08})`,i.lineWidth=1;for(let o=0;o<r*2;o++){const c=o/(r*2)*Math.PI*2+e*.3,l=3+e*.8;i.beginPath(),i.moveTo(8,8),i.lineTo(8+Math.cos(c)*l,8+Math.sin(c)*l),i.stroke()}if(e>2){i.strokeStyle=`rgba(0,0,0,${.2+e*.05})`;for(let o=0;o<e;o++){const c=2+Math.random()*12,l=2+Math.random()*12,h=c+(Math.random()-.5)*6,d=l+(Math.random()-.5)*6;i.beginPath(),i.moveTo(c,l),i.lineTo(h,d),i.stroke()}}if(e>4){const o=i.createRadialGradient(8,8,4,8,8,10);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,`rgba(0,0,0,${(e-4)*.08})`),i.fillStyle=o,i.fillRect(0,0,16,16)}const a=new Ns(n);a.magFilter=De,a.minFilter=De,dn._crackTextures.push(a)}}return dn._crackTextures[Math.min(t,7)]}getYaw(){return this.yaw}getKeys(){return this.keys}getBreakProgress(){return this.breakTarget?this.breakProgress:0}breakBlockNow(){this.breakBlock()}placeBlockNow(){this.placeBlock()}buildFPArm(){this.fpArmGroup=new ue,this.camera.add(this.fpArmGroup);const t=new Te(.12,.35,.12),e=new Ue({color:16764057}),n=new te(t,e);n.position.y=-.175;const i=new Te(.11,.25,.11),r=new te(i,e);r.position.y=-.3,n.add(r);const a=new Te(.135,.355,.135),o=new Ue({color:3364300,transparent:!0,opacity:.9}),c=new te(a,o);c.position.y=-.175,this.fpArm=new ue,this.fpArm.add(n,c),this.fpArm.position.set(.32,-.28,-.45),this.fpArm.rotation.set(.2,-.15,.05),this.fpArmGroup.add(this.fpArm),n.renderOrder=999,c.renderOrder=999,r.renderOrder=999,n.onBeforeRender=l=>l.clearDepth()}buildModel(t){const e=new ue,n=16764057,i=3364300,r=2245785,a=3351057,o=3346688,c=L=>new Ue({color:L}),l=(L,I,q,b)=>new te(new Te(L,I,q),c(b)),h=(L,I,q,b)=>{const R=new ue,j=l(L,I,q,b);return j.position.y=-I/2,R.add(j),R},d=new ue;d.add(l(.5,.5,.5,n));const p=l(.52,.14,.52,o);p.position.y=.19,d.add(p),d.position.set(0,.75,0);const f=l(.6,.75,.35,i);f.position.y=0;const _=h(.25,.65,.25,i),v=h(.25,.65,.25,i),m=l(.24,.25,.24,n);m.position.y=-.575,_.children[0].add(m);const g=m.clone();v.children[0].add(g),_.position.set(-.43,.37,0),v.position.set(.43,.37,0);const E=h(.27,.75,.27,r),M=h(.27,.75,.27,r),w=l(.28,.2,.3,a);w.position.y=-.77,E.children[0].add(w);const O=w.clone();return M.children[0].add(O),E.position.set(-.175,-.375,0),M.position.set(.175,-.375,0),e.add(d,f,_,v,E,M),t.add(e),this.selfHead=d,this.selfLA=_,this.selfRA=v,this.selfLL=E,this.selfRL=M,e}setupInput(){document.addEventListener("keydown",t=>{var e;if(!this.chatOpen&&(this.keys[t.code]=!0,t.code==="KeyT"&&((e=this.onOpenChat)==null||e.call(this)),t.code==="F5"&&(this.thirdPerson=!this.thirdPerson,this.selfModel&&(this.selfModel.visible=this.thirdPerson)),t.code==="Space"&&this.gameMode==="creative")){const n=performance.now();n-this.lastSpace<300&&(this.flying=!this.flying,this.velocity.y=0),this.lastSpace=n}}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("mousemove",t=>{this.locked&&(this.yaw-=t.movementX*.002,this.pitch-=t.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.gameMode==="creative"?this.breakBlock():(this.isBreakingHeld=!0,this.startBreaking())),t.button===2&&this.placeBlock())}),document.addEventListener("mouseup",t=>{t.button===0&&(this.isBreakingHeld=!1,this.stopBreaking())}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===document.body}),document.body.addEventListener("click",()=>{!this.locked&&!this.chatOpen&&document.body.requestPointerLock()})}setChatOpen(t){this.chatOpen=t,t&&this.locked&&document.exitPointerLock()}setGameMode(t){this.gameMode=t,t==="survival"&&(this.flying=!1,this.velocity.y=0),t==="spectator"&&(this.flying=!0)}takeDamage(t){var n,i;if(this.gameMode==="creative"||this.gameMode==="spectator"||this.invincible>0||this.spawnGrace>0)return;const e=t*.6*(1-this.armor/25);this.health=Math.max(0,this.health-e),this.invincible=2,(n=this.onHealthChanged)==null||n.call(this,this.health),this.health<=0&&((i=this.onDied)==null||i.call(this))}respawn(){var t;this.health=this.maxHealth,this.spawnGrace=3,this.spawnAt((Math.random()-.5)*4,(Math.random()-.5)*4),(t=this.onHealthChanged)==null||t.call(this,this.health)}breakBlock(){var r;const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;this.world.removeBlock(e,n,i),(r=this.onBreakBlock)==null||r.call(this,e,n,i)}startBreaking(){const t=this.raycast();if(!t)return;const e=t.blockX,n=t.blockY,i=t.blockZ;if(this.breakTarget={x:e,y:n,z:i},this.breakProgress=0,!this.breakIndicator){const r=new Te(1.002,1.002,1.002),a=new ci({transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.breakIndicator=new te(r,a),this.scene.add(this.breakIndicator)}this.breakIndicator.position.set(e+.5,n+.5,i+.5),this.breakIndicator.visible=!0}stopBreaking(){this.breakProgress=0,this.breakTarget=null,this.breakIndicator&&(this.breakIndicator.visible=!1)}updateBreaking(t){var n;if(this.gameMode==="creative"||(this.isBreakingHeld&&!this.breakTarget&&this.startBreaking(),!this.breakTarget))return;if(!this.world.hasBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z)){this.stopBreaking();return}const e=this.raycast();if(e&&(e.blockX!==this.breakTarget.x||e.blockY!==this.breakTarget.y||e.blockZ!==this.breakTarget.z)&&(this.breakTarget={x:e.blockX,y:e.blockY,z:e.blockZ},this.breakProgress=0,this.breakIndicator&&this.breakIndicator.position.set(e.blockX+.5,e.blockY+.5,e.blockZ+.5)),this.breakProgress+=t/.5,this._armSwing=Math.min(1,this.breakProgress),this.breakProgress>=1){this.world.removeBlock(this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),(n=this.onBreakBlock)==null||n.call(this,this.breakTarget.x,this.breakTarget.y,this.breakTarget.z),this.breakTarget=null,this.breakProgress=0,this.isBreakingHeld?this.startBreaking():this.stopBreaking();return}if(this.breakIndicator){const i=Math.floor(this.breakProgress*8),r=this.breakIndicator.material,a=dn.getCrackTexture(i);r.map!==a&&(r.map=a,r.opacity=.5+i*.06,r.needsUpdate=!0)}}placeBlock(){var o,c;(o=this.onRightClick)==null||o.call(this);const t=this.raycast();if(!t)return;const e=t.face.normal,n=t.blockX+Math.round(e.x),i=t.blockY+Math.round(e.y),r=t.blockZ+Math.round(e.z),a=this.position.y-ln;Math.abs(n-this.position.x)<ro+.3&&i>=a-.2&&i<=a+tr+.2&&Math.abs(r-this.position.z)<ro+.3||(this.world.placeBlock(n,i,r,this.selectedBlockType),(c=this.onPlaceBlock)==null||c.call(this,n,i,r,this.selectedBlockType))}raycast(){if(this._lastHitFrame===this._frameCount)return this._lastHit?this._hitResult:null;this._rayDir.set(0,0,-1).applyQuaternion(this.camera.quaternion);const t=this.world.raycastBlock(this.camera.position,this._rayDir,bv);return this._lastHit=t,this._lastHitFrame=this._frameCount,t?(this._hitResult.blockX=t.x,this._hitResult.blockY=t.y,this._hitResult.blockZ=t.z,this._hitPoint.set(t.x+.5,t.y+.5,t.z+.5),this._hitNormal.copy(t.face).normalize(),this._hitResult.point=this._hitPoint,this._hitResult.face.normal=this._hitNormal,this._hitResult):null}update(t){this._frameCount++,this.invincible>0&&(this.invincible-=t),this.spawnGrace>0&&(this.spawnGrace-=t),this.gameMode==="creative"||this.gameMode==="spectator"?this.updateCreative(t):this.applyPhysics(t),this.applyMovement(t),this.updateCamera(),this.updateHighlight(),this.updateSelfModel(t),this.updateBreaking(t),this.updateFPArm(t)}applyPhysics(t){var h,d,p,f;const e=Math.floor(this.position.x),n=Math.floor(this.position.y-ln+tr/2),i=Math.floor(this.position.z);this.inWater=this.world.getBlockType(e,n,i)===7,this.inWater?(this.velocity.y+=-4*t,this.velocity.y<-3&&(this.velocity.y=-3),this.keys.Space&&(this.velocity.y=4),this.swimStroke+=t*3.5,this.gameMode==="survival"&&(this.waterTimer+=t,this.waterTimer>15&&(this.waterTimer=0,(h=this.setDeathCause)==null||h.call(this,"You drowned"),this.takeDamage(1))),this.wasInWater||(this.wasInWater=!0,this.velocity.y*=.4,this.velocity.x*=.6,this.velocity.z*=.6,this.waterEntryVelocityDamp=.3,(d=this.onWaterEnter)==null||d.call(this)),this.waterEntryVelocityDamp<1&&(this.waterEntryVelocityDamp=Math.min(1,this.waterEntryVelocityDamp+t*2))):(this.waterTimer=0,this.swimStroke*=.9,this.waterEntryVelocityDamp=1,this.wasInWater&&(this.wasInWater=!1,(p=this.onWaterExit)==null||p.call(this)));const r=this.world.getBlockType(e,n,i),a=this.world.getBlockType(e,Math.floor(this.position.y-ln+tr),i);this.onLadder=r===78||a===78,this.onLadder&&!this.inWater&&(this.velocity.y=this.keys.Space?4.5:this.keys.ShiftLeft?-3:-.5,this.velocity.x*=.85,this.velocity.z*=.85);const o=this.onLadder?0:this.inWater?-4:Gh;this.velocity.y+=o*t,this.velocity.y<-60&&(this.velocity.y=-60);const c=this.position.y+this.velocity.y*t;let l=!1;if(this.velocity.y<=0){const _=c-ln,v=Math.floor(_);for(let m=0;m<=2;m++){const g=v-m;if(this.footprintOverBlock(this.position.x,this.position.z,g)){const E=g+1+ln;if(c<=E+.02){if(this.fallTracking){const M=this.fallStartY-(g+1);M>5&&((f=this.setDeathCause)==null||f.call(this,"You fell"),this.takeDamage(Math.floor((M-5)*.75))),this.fallTracking=!1}this.position.y=E,this.velocity.y=0,l=!0}break}}l||(this.position.y=c)}else{const _=Math.floor(this.position.y-ln+tr+.05);this.footprintOverBlock(this.position.x,this.position.z,_)?this.velocity.y=0:this.position.y=c}if(!l&&this.wasOnGround&&(this.fallStartY=this.position.y-ln,this.fallTracking=this.velocity.y<0),l&&(this.fallTracking=!1),this.position.y<-20){this.takeDamage(4);const _=this.world.getSurfaceHeight(Math.round(this.position.x),Math.round(this.position.z));this.position.y=_+ln+1,this.velocity.y=0,this.fallTracking=!1}this.onGround=l,this.wasOnGround=l}footprintOverBlock(t,e,n){const i=ro/2-.01;for(let r=0;r<3;r++){const a=Math.floor(t+(r-1)*i);for(let o=0;o<3;o++){const c=Math.floor(e+(o-1)*i),l=this.world.getBlockType(a,n,c);if(l!==void 0&&l!==0&&l!==7)return!0}}return!1}wallCollision(t,e,n){const i=ro/2-.01,r=Math.floor(e-ln+.05),a=Math.floor(e-ln+tr-.05);for(let o=r;o<=a;o++)for(let c=0;c<2;c++){const l=Math.floor(t+(c===0?-i:i));for(let h=0;h<2;h++){const d=Math.floor(n+(h===0?-i:i)),p=this.world.getBlockType(l,o,d);if(p!==void 0&&p!==0&&p!==7)return!0}}return!1}updateCreative(t){if(this.flying)this.velocity.y=0,this.keys.Space&&(this.position.y+=so*t),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.position.y-=so*t);else{this.velocity.y+=Gh*t,this.velocity.y<-60&&(this.velocity.y=-60);const e=this.position.y+this.velocity.y*t,n=Math.floor(e-ln);this.velocity.y<0&&this.footprintOverBlock(this.position.x,this.position.z,n)?(this.position.y=n+1+ln,this.velocity.y=0,this.onGround=!0):(this.position.y=e,this.onGround=!1),this.keys.Space&&this.onGround&&(this.velocity.y=Hh,this.onGround=!1),this.position.y<-20&&(this.position.y=36,this.velocity.y=0)}}applyMovement(t){const e=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this._move.set(0,0,0);this.keys.KeyW&&i.add(e),this.keys.KeyS&&i.sub(e),this.keys.KeyA&&i.sub(n),this.keys.KeyD&&i.add(n);let a=this.keys.ControlLeft&&this.gameMode==="survival"?za*Sv:za;if(this.gameMode==="creative"&&(a=this.flying?so:za*1.2),this.gameMode==="spectator"&&(a=so*1.5),this.inWater&&(a*=.6),i.lengthSq()>0){i.normalize().multiplyScalar(a*t);const o=this.position.x+i.x,c=this.position.z+i.z;this.gameMode==="spectator"?(this.position.x=o,this.position.z=c):(this.wallCollision(o,this.position.y,this.position.z)||(this.position.x=o),this.wallCollision(this.position.x,this.position.y,c)||(this.position.z=c))}this.keys.Space&&this.onGround&&this.gameMode==="survival"&&!this.inWater&&(this.velocity.y=Hh,this.onGround=!1)}updateCamera(){if(this.thirdPerson){const e=this.position.x+Math.sin(this.yaw)*5,n=this.position.z+Math.cos(this.yaw)*5;this.camera.position.set(e,this.position.y+.6,n),this.camera.lookAt(this.position.x,this.position.y-.3,this.position.z)}else{this.camera.position.copy(this.position);const t=this.position.x-this.prevXZ.x,e=this.position.z-this.prevXZ.y,n=Math.sqrt(t*t+e*e)*60,i=this.keys.ControlLeft&&this.gameMode==="survival",r=this.onGround&&n>.5?Math.min(n/6,1):0;if(this.headBobIntensity+=(r-this.headBobIntensity)*.1,this.headBobIntensity>.01){const l=i?14:10;this.headBobPhase+=l*(1/60);const h=Math.sin(this.headBobPhase)*.015*this.headBobIntensity,d=Math.abs(Math.sin(this.headBobPhase*2))*.02*this.headBobIntensity;this.camera.position.x+=h,this.camera.position.y+=d}const a=i&&n>1?.015:0;this.cameraRoll+=(a-this.cameraRoll)*.08;const o=this.inWater?.06:0;this.waterCameraTilt+=(o-this.waterCameraTilt)*.05,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.waterCameraTilt,this.camera.rotation.z=this.cameraRoll+(this.inWater?Math.sin(Date.now()*.001)*.008:0);let c=dn.BASE_FOV;i&&n>1&&(c=dn.SPRINT_FOV),this.onGround&&!this.wasOnGround&&(c=dn.LANDING_FOV),this.currentFov+=(c-this.currentFov)*.12,Math.abs(this.currentFov-this.camera.fov)>.1&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}updateSelfModel(t){if(!this.selfModel||!this.thirdPerson)return;const e=this.position.y-ln;this.selfModel.position.set(this.position.x,e+.85,this.position.z),this.selfModel.rotation.y=this.yaw+Math.PI,this.selfHead&&(this.selfHead.rotation.x=this.pitch*.7);const n=this.position.x-this.prevXZ.x,i=this.position.z-this.prevXZ.y,r=Math.sqrt(n*n+i*i)/t;this.prevXZ.set(this.position.x,this.position.z),r>.3?this.walkCycle+=t*Math.min(r,8)*1.8:this.walkCycle*=.85;const a=Math.sin(this.walkCycle),o=.65;this.selfLL&&(this.selfLL.rotation.x=a*o),this.selfRL&&(this.selfRL.rotation.x=-a*o),this.selfLA&&(this.selfLA.rotation.x=-a*o),this.selfRA&&(this.selfRA.rotation.x=a*o)}updateHighlight(){const t=this.raycast();if(t){const r=t.blockX+.5,a=t.blockY+.5,o=t.blockZ+.5;this.highlightMesh.position.set(r,a,o),this.highlightMesh.visible=!1,this.outlineMesh.position.set(r,a,o),this.outlineTarget=1;const c=`${t.blockX},${t.blockY},${t.blockZ}`;c!==this._lastOutlineKey&&(this._lastOutlineKey=c,this.outlineOpacity=.35)}else this.highlightMesh.visible=!1,this.outlineTarget=0,this._lastOutlineKey="";const e=8,n=1/60;this.outlineTarget>0?this.outlineOpacity=Math.min(1,this.outlineOpacity+e*n):this.outlineOpacity=Math.max(0,this.outlineOpacity-e*n);const i=this.outlineMesh.material;if(i.opacity=this.outlineOpacity*.6,this.outlineMesh.visible=this.outlineOpacity>.01,t&&this.gameMode==="survival"){const r=this.world.getBlockType(t.blockX,t.blockY,t.blockZ);i.color.setHex(r===12?16724787:0)}else i.color.setHex(0)}updateFPArm(t){if(!this.fpArm||this.thirdPerson){this.fpArmGroup&&(this.fpArmGroup.visible=!1);return}this.fpArmGroup&&(this.fpArmGroup.visible=!0);const e=this.position.x-this.prevXZ.x,n=this.position.z-this.prevXZ.y,i=Math.sqrt(e*e+n*n)/t;i>.3?this._armBob+=t*Math.min(i,8)*1.5:this._armBob*=.85;const r=Math.sin(this._armBob)*.02;if(this.inWater&&this.swimStroke>.1){const c=Math.sin(this.swimStroke)*.8,l=Math.cos(this.swimStroke*.5)*.15;this.fpArm.rotation.x=-.6+c,this.fpArm.rotation.z=.3+l,this.fpArm.position.y=-.2+Math.sin(this.swimStroke*2)*.05,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4));return}let a=0;this._armSwing>0&&(a=Math.sin(this._armSwing*Math.PI)*1.2);const o=Math.sin(Date.now()*8e-4)*.01;this.fpArm.rotation.x=.2-a+r*.5,this.fpArm.rotation.z=.05+o,this.fpArm.position.y=-.28+r,(!this.isBreakingHeld||!this.breakTarget)&&(this._armSwing=Math.max(0,this._armSwing-t*4))}getState(){return{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.yaw,rotX:this.pitch,onGround:this.onGround,gameMode:this.gameMode}}spawnAt(t,e){const n=this.world.getSurfaceHeight(Math.round(t),Math.round(e));this.position.set(t,n+ln+.5,e),this.velocity.set(0,0,0),this.onGround=!1,this.fallTracking=!1,this.spawnGrace<=0&&(this.spawnGrace=3)}};C(dn,"BASE_FOV",75),C(dn,"SPRINT_FOV",85),C(dn,"LANDING_FOV",70),C(dn,"_crackTextures",null);let Cc=dn;function Vh(){return"ontouchstart"in window||navigator.maxTouchPoints>0}class Av{constructor(t,e,n){C(this,"keys");C(this,"onBreak");C(this,"onPlace");C(this,"joyActive",!1);C(this,"joyId",-1);C(this,"joyOriginX",0);C(this,"joyOriginY",0);C(this,"joyEl");C(this,"joyThumbEl");C(this,"lookId",-1);C(this,"lookLastX",0);C(this,"lookLastY",0);C(this,"onLookDelta");this.keys=t,this.onBreak=e,this.onPlace=n,this.joyEl=this.createJoystick(),this.joyThumbEl=this.joyEl.querySelector(".joy-thumb"),this.createButtons(),this.bindEvents()}createJoystick(){const t=document.createElement("div");t.id="mobileJoy",t.innerHTML='<div class="joy-thumb"></div>',t.style.cssText=`
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
    `,i.addEventListener("touchstart",r=>{r.preventDefault(),this.onPlace()},{passive:!1}),t.appendChild(i)}bindEvents(){const t=document.querySelector("canvas"),e=window.innerWidth/2;t.addEventListener("touchstart",i=>{i.preventDefault();for(const r of Array.from(i.changedTouches))r.clientX<e?this.joyActive||(this.joyActive=!0,this.joyId=r.identifier,this.joyOriginX=r.clientX,this.joyOriginY=r.clientY):this.lookId===-1&&(this.lookId=r.identifier,this.lookLastX=r.clientX,this.lookLastY=r.clientY)},{passive:!1}),t.addEventListener("touchmove",i=>{var r;i.preventDefault();for(const a of Array.from(i.changedTouches))if(a.identifier===this.joyId)this.updateJoystick(a.clientX,a.clientY);else if(a.identifier===this.lookId){const o=a.clientX-this.lookLastX,c=a.clientY-this.lookLastY;this.lookLastX=a.clientX,this.lookLastY=a.clientY,(r=this.onLookDelta)==null||r.call(this,o,c)}},{passive:!1});const n=i=>{i.preventDefault();for(const r of Array.from(i.changedTouches))r.identifier===this.joyId?(this.joyActive=!1,this.joyId=-1,this.clearMovement(),this.resetThumb()):r.identifier===this.lookId&&(this.lookId=-1)};t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("touchcancel",n,{passive:!1})}updateJoystick(t,e){const i=t-this.joyOriginX,r=e-this.joyOriginY,a=Math.sqrt(i*i+r*r),o=a>0?i/a:0,c=a>0?r/a:0,l=Math.min(a,42),h=o*l,d=c*l;this.joyThumbEl.style.transform=`translate(calc(-50% + ${h}px), calc(-50% + ${d}px))`;const p=12;this.keys.KeyW=d<-p,this.keys.KeyS=d>p,this.keys.KeyA=h<-p,this.keys.KeyD=h>p}clearMovement(){this.keys.KeyW=!1,this.keys.KeyS=!1,this.keys.KeyA=!1,this.keys.KeyD=!1}resetThumb(){this.joyThumbEl.style.transform="translate(-50%, -50%)"}show(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="")}}hide(){const t=["mobileJoy","mobileJump","mobileBreak","mobilePlace"];for(const e of t){const n=document.getElementById(e);n&&(n.style.display="none")}}}var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tv(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),e}var Qd={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Us={},Xo={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class t extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=t})(Xo);var mr={},Bs={};Object.defineProperty(Bs,"__esModule",{value:!0});Bs.decode=Bs.encode=void 0;function Hs(s,t){if(this._offset=t,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function wv(s,t,e){for(var n="",i=0,r=t,a=t+e;r<a;r++){var o=s.getUint8(r);if(!(o&128)){n+=String.fromCharCode(o);continue}if((o&224)===192){n+=String.fromCharCode((o&31)<<6|s.getUint8(++r)&63);continue}if((o&240)===224){n+=String.fromCharCode((o&15)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0);continue}if((o&248)===240){i=(o&7)<<18|(s.getUint8(++r)&63)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+o.toString(16))}return n}Hs.prototype._array=function(s){for(var t=new Array(s),e=0;e<s;e++)t[e]=this._parse();return t};Hs.prototype._map=function(s){for(var t="",e={},n=0;n<s;n++)t=this._parse(),e[t]=this._parse();return e};Hs.prototype._str=function(s){var t=wv(this._view,this._offset,s);return this._offset+=s,t};Hs.prototype._bin=function(s){var t=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,t};Hs.prototype._parse=function(){var s=this._view.getUint8(this._offset++),t,e=0,n=0,i=0,r=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+r)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+r);if(n===-1){i=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var o=(i&3)*4294967296+r;return new Date(o*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Cv(s,t=0){var e=new Hs(s,t),n=e._parse();if(e._offset!==s.byteLength)throw new Error(s.byteLength-e._offset+" trailing bytes");return n}Bs.decode=Cv;var Rv=4294967296-1,Pv=17179869184-1;function Lv(s,t,e){for(var n=0,i=0,r=e.length;i<r;i++)n=e.charCodeAt(i),n<128?s.setUint8(t++,n):n<2048?(s.setUint8(t++,192|n>>6),s.setUint8(t++,128|n&63)):n<55296||n>=57344?(s.setUint8(t++,224|n>>12),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63)):(i++,n=65536+((n&1023)<<10|e.charCodeAt(i)&1023),s.setUint8(t++,240|n>>18),s.setUint8(t++,128|n>>12&63),s.setUint8(t++,128|n>>6&63),s.setUint8(t++,128|n&63))}function Iv(s){for(var t=0,e=0,n=0,i=s.length;n<i;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Es(s,t,e){var n=typeof e,i=0,r=0,a=0,o=0,c=0,l=0;if(n==="string"){if(c=Iv(e),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(s.push(203),t.push({_float:e,_length:8,_offset:s.length}),9):e>=0?e<128?(s.push(e),1):e<256?(s.push(204,e),2):e<65536?(s.push(205,e>>8,e),3):e<4294967296?(s.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,o=e>>>0,s.push(207,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9):e>=-32?(s.push(e),1):e>=-128?(s.push(208,e),2):e>=-32768?(s.push(209,e>>8,e),3):e>=-2147483648?(s.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),o=e>>>0,s.push(211,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9);if(n==="object"){if(e===null)return s.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=Es(s,t,e[i]);return l}if(e instanceof Date){var h=e.getTime(),d=Math.floor(h/1e3),p=(h-d*1e3)*1e6;return d>=0&&p>=0&&d<=Pv?p===0&&d<=Rv?(s.push(214,255,d>>24,d>>16,d>>8,d),6):(a=d/4294967296,o=d&4294967295,s.push(215,255,p>>22,p>>14,p>>6,a,o>>24,o>>16,o>>8,o),10):(a=Math.floor(d/4294967296),o=d>>>0,s.push(199,12,255,p>>24,p>>16,p>>8,p,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:s.length}),l+c}if(typeof e.toJSON=="function")return Es(s,t,e.toJSON());var f=[],_="",v=Object.keys(e);for(i=0,r=v.length;i<r;i++)_=v[i],e[_]!==void 0&&typeof e[_]!="function"&&f.push(_);if(c=f.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)_=f[i],l+=Es(s,t,_),l+=Es(s,t,e[_]);return l}if(n==="boolean")return s.push(e?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof e.toJSON=="function")return Es(s,t,e.toJSON());throw new Error("Could not encode")}function Dv(s){var t=[],e=[],n=Es(t,e,s),i=new ArrayBuffer(n),r=new DataView(i),a=0,o=0,c=-1;e.length>0&&(c=e[0]._offset);for(var l,h=0,d=0,p=0,f=t.length;p<f;p++)if(r.setUint8(o+p,t[p]),p+1===c){if(l=e[a],h=l._length,d=o+c,l._bin)for(var _=new Uint8Array(l._bin),v=0;v<h;v++)r.setUint8(d+v,_[v]);else l._str?Lv(r,d,l._str):l._float!==void 0&&r.setFloat64(d,l._float);a++,o+=h,e[a]&&(c=e[a]._offset)}return i}Bs.encode=Dv;var Yo={},qo={},Ov=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Nv=Oe&&Oe.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(qo,"__esModule",{value:!0});qo.WebSocketTransport=void 0;const Uv=Nv(Ov),Ha=globalThis.WebSocket||Uv.default;class Bv{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new Ha(t,{headers:e,protocols:this.protocols})}catch{this.ws=new Ha(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===Ha.OPEN}}qo.WebSocketTransport=Bv;Object.defineProperty(Yo,"__esModule",{value:!0});Yo.Connection=void 0;const kv=qo;class Fv{constructor(){this.events={},this.transport=new kv.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}Yo.Connection=Fv;var Xc={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function t(n,i){const r=n[i++];for(var a="",o=0,c=i,l=i+r;c<l;c++){var h=n[c];if(!(h&128)){a+=String.fromCharCode(h);continue}if((h&224)===192){a+=String.fromCharCode((h&31)<<6|n[++c]&63);continue}if((h&240)===224){a+=String.fromCharCode((h&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((h&248)===240){o=(h&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,o>=65536?(o-=65536,a+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):a+=String.fromCharCode(o);continue}throw new Error("Invalid byte "+h.toString(16))}return a}s.utf8Read=t;function e(n=""){let i=0,r=0;for(let a=0,o=n.length;a<o;a++)i=n.charCodeAt(a),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(a++,r+=4);return r+1}s.utf8Length=e})(Xc);var ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.getSerializer=ji.registerSerializer=void 0;const tu={};function zv(s,t){tu[s]=t}ji.registerSerializer=zv;function Hv(s){const t=tu[s];if(!t)throw new Error("missing serializer: "+s);return t}ji.getSerializer=Hv;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.createNanoEvents=void 0;const Gv=()=>({emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n](...t)},events:{},on(s,t){var e;return!((e=this.events[s])===null||e===void 0)&&e.push(t)||(this.events[s]=[t]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>t!==i)}}});gr.createNanoEvents=Gv;var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.createSignal=ks.EventEmitter=void 0;class eu{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}ks.EventEmitter=eu;function Vv(){const s=new eu;function t(e){return s.register(e,this===null)}return t.once=e=>{const n=function(...i){e.apply(this,i),s.remove(n)};s.register(n)},t.remove=e=>s.remove(e),t.invoke=(...e)=>s.invoke(...e),t.invokeAsync=(...e)=>s.invokeAsync(...e),t.clear=()=>s.clear(),t}ks.createSignal=Vv;var Rc={exports:{}};(function(s,t){(function(e,n){n(t)})(Oe,function(e){var n=function(x,u){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,S){y.__proto__=S}||function(y,S){for(var z in S)Object.prototype.hasOwnProperty.call(S,z)&&(y[z]=S[z])},n(x,u)};function i(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");n(x,u);function y(){this.constructor=x}x.prototype=u===null?Object.create(u):(y.prototype=u.prototype,new y)}function r(x,u,y,S){var z=arguments.length,tt=z<3?u:S,It;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")tt=Reflect.decorate(x,u,y,S);else for(var Tt=x.length-1;Tt>=0;Tt--)(It=x[Tt])&&(tt=(z<3?It(tt):z>3?It(u,y,tt):It(u,y))||tt);return z>3&&tt&&Object.defineProperty(u,y,tt),tt}function a(x,u,y){if(arguments.length===2)for(var S=0,z=u.length,tt;S<z;S++)(tt||!(S in u))&&(tt||(tt=Array.prototype.slice.call(u,0,S)),tt[S]=u[S]);return x.concat(tt||Array.prototype.slice.call(u))}typeof SuppressedError=="function"&&SuppressedError;var o=255,c=213;e.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var l=function(){function x(u,y,S){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=u,this.setParent(y,S)}return x.prototype.setParent=function(u,y,S){var z=this;if(this.indexes||(this.indexes=this.ref instanceof fe?this.ref._definition.indexes:{}),this.parent=u,this.parentIndex=S,!!y)if(this.root=y,this.ref instanceof fe){var tt=this.ref._definition;for(var It in tt.schema){var Tt=this.ref[It];if(Tt&&Tt.$changes){var re=tt.indexes[It];Tt.$changes.setParent(this.ref,y,re)}}}else typeof this.ref=="object"&&this.ref.forEach(function(A,N){if(A instanceof fe){var G=A.$changes,k=z.ref.$changes.indexes[N];G.setParent(z.ref,z.root,k)}})},x.prototype.operation=function(u){this.changes.set(--this.currentCustomOperation,u)},x.prototype.change=function(u,y){y===void 0&&(y=e.OPERATION.ADD);var S=typeof u=="number"?u:this.indexes[u];this.assertValidIndex(S,u);var z=this.changes.get(S);(!z||z.op===e.OPERATION.DELETE||z.op===e.OPERATION.TOUCH)&&this.changes.set(S,{op:z&&z.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:y,index:S}),this.allChanges.add(S),this.changed=!0,this.touchParents()},x.prototype.touch=function(u){var y=typeof u=="number"?u:this.indexes[u];this.assertValidIndex(y,u),this.changes.has(y)||this.changes.set(y,{op:e.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(u){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[u]]}else{var y=this.parent._definition,S=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(S)[0]}},x.prototype.getChildrenFilter=function(){var u=this.parent._definition.childFilters;return u&&u[this.parentIndex]},x.prototype.getValue=function(u){return this.ref.getByIndex(u)},x.prototype.delete=function(u){var y=typeof u=="number"?u:this.indexes[u];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(u," (").concat(y,")"));return}var S=this.getValue(y);this.changes.set(y,{op:e.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],S&&S.$changes&&(S.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(u,y){var S=this;u===void 0&&(u=!1),y===void 0&&(y=!1),this.ref instanceof fe||this.changes.forEach(function(z){if(z.op===e.OPERATION.DELETE){var tt=S.ref.getIndex(z.index);delete S.indexes[tt]}}),this.changes.clear(),this.changed=u,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var u=this;this.changes.forEach(function(y){var S=u.getValue(y.index);S&&S.$changes&&S.$changes.discardAll()}),this.discard()},x.prototype.cache=function(u,y){this.caches[u]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(u,y){if(u===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x}();function h(x,u,y,S){return x[u]||(x[u]=[]),x[u].push(y),S==null||S.forEach(function(z,tt){return y(z,tt)}),function(){return p(x[u],x[u].indexOf(y))}}function d(x){var u=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(S,z){x.push({refId:u.$changes.refId,op:e.OPERATION.DELETE,field:z,value:void 0,previousValue:S}),y&&u.$changes.root.removeRef(S.$changes.refId)})}function p(x,u){if(u===-1||u>=x.length)return!1;for(var y=x.length-1,S=u;S<y;S++)x[S]=x[S+1];return x.length=y,!0}var f=function(x,u){var y=x.toString(),S=u.toString();return y<S?-1:y>S?1:0};function _(x){return x.$proxy=!0,x=new Proxy(x,{get:function(u,y){return typeof y!="symbol"&&!isNaN(y)?u.at(y):u[y]},set:function(u,y,S){if(typeof y!="symbol"&&!isNaN(y)){var z=Array.from(u.$items.keys()),tt=parseInt(z[y]||y);S==null?u.deleteAt(tt):u.setAt(tt,S)}else u[y]=S;return!0},deleteProperty:function(u,y){return typeof y=="number"?u.deleteAt(y):delete u[y],!0},has:function(u,y){return typeof y!="symbol"&&!isNaN(Number(y))?u.$items.has(Number(y)):Reflect.has(u,y)}}),x}var v=function(){function x(){for(var u=[],y=0;y<arguments.length;y++)u[y]=arguments[y];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,u)}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.is=function(u){return Array.isArray(u)||u.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(u){u===0?this.clear():this.splice(u,this.length-u)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var u=this,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];var z;return y.forEach(function(tt){z=u.$refId++,u.setAt(z,tt)}),z},x.prototype.pop=function(){var u=Array.from(this.$indexes.values()).pop();if(u!==void 0){this.$changes.delete(u),this.$indexes.delete(u);var y=this.$items.get(u);return this.$items.delete(u),y}},x.prototype.at=function(u){if(u=Math.trunc(u)||0,u<0&&(u+=this.length),!(u<0||u>=this.length)){var y=Array.from(this.$items.keys())[u];return this.$items.get(y)}},x.prototype.setAt=function(u,y){var S,z;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(u)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,u);var tt=(z=(S=this.$changes.indexes[u])===null||S===void 0?void 0:S.op)!==null&&z!==void 0?z:e.OPERATION.ADD;this.$changes.indexes[u]=u,this.$indexes.set(u,u),this.$items.set(u,y),this.$changes.change(u,tt)}},x.prototype.deleteAt=function(u){var y=Array.from(this.$items.keys())[u];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(u){return this.$changes.delete(u),this.$indexes.delete(u),this.$items.delete(u)},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var u,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];return new(x.bind.apply(x,a([void 0],(u=Array.from(this.$items.values())).concat.apply(u,y),!1)))},x.prototype.join=function(u){return Array.from(this.$items.values()).join(u)},x.prototype.reverse=function(){var u=this,y=Array.from(this.$items.keys()),S=Array.from(this.$items.values()).reverse();return S.forEach(function(z,tt){u.setAt(y[tt],z)}),this},x.prototype.shift=function(){var u=Array.from(this.$items.keys()),y=u.shift();if(y!==void 0){var S=this.$items.get(y);return this.$deleteAt(y),S}},x.prototype.slice=function(u,y){var S=new x;return S.push.apply(S,Array.from(this.$items.values()).slice(u,y)),S},x.prototype.sort=function(u){var y=this;u===void 0&&(u=f);var S=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(u);return z.forEach(function(tt,It){y.setAt(S[It],tt)}),this},x.prototype.splice=function(u,y){y===void 0&&(y=this.length-u);for(var S=[],z=2;z<arguments.length;z++)S[z-2]=arguments[z];for(var tt=Array.from(this.$items.keys()),It=[],Tt=u;Tt<u+y;Tt++)It.push(this.$items.get(tt[Tt])),this.$deleteAt(tt[Tt]);for(var Tt=0;Tt<S.length;Tt++)this.setAt(u+Tt,S[Tt]);return It},x.prototype.unshift=function(){for(var u=this,y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];var z=this.length,tt=y.length,It=Array.from(this.$items.values());return y.forEach(function(Tt,re){u.setAt(re,Tt)}),It.forEach(function(Tt,re){u.setAt(tt+re,Tt)}),z+tt},x.prototype.indexOf=function(u,y){return Array.from(this.$items.values()).indexOf(u,y)},x.prototype.lastIndexOf=function(u,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(u,y)},x.prototype.every=function(u,y){return Array.from(this.$items.values()).every(u,y)},x.prototype.some=function(u,y){return Array.from(this.$items.values()).some(u,y)},x.prototype.forEach=function(u,y){Array.from(this.$items.values()).forEach(u,y)},x.prototype.map=function(u,y){return Array.from(this.$items.values()).map(u,y)},x.prototype.filter=function(u,y){return Array.from(this.$items.values()).filter(u,y)},x.prototype.reduce=function(u,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(u,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(u,y){return Array.from(this.$items.values()).find(u,y)},x.prototype.findIndex=function(u,y){return Array.from(this.$items.values()).findIndex(u,y)},x.prototype.fill=function(u,y,S){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(u,y,S){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(u,y){return Array.from(this.$items.values()).includes(u,y)},x.prototype.flatMap=function(u,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(u){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var u=Array.from(this.$items.values());return u.findLast.apply(u,arguments)},x.prototype.findLastIndex=function(){var u=Array.from(this.$items.values());return u.findLastIndex.apply(u,arguments)},x.prototype.with=function(u,y){var S=Array.from(this.$items.values());return S[u]=y,new(x.bind.apply(x,a([void 0],S,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(u){return Array.from(this.$items.values()).sort(u)},x.prototype.toSpliced=function(u,y){var S=Array.from(this.$items.values());return S.toSpliced.apply(S,arguments)},x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(u){return typeof u.toJSON=="function"?u.toJSON():u})},x.prototype.clone=function(u){var y;return u?y=new(x.bind.apply(x,a([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,a([void 0],this.map(function(S){return S.$changes?S.clone():S}),!1))),y},x}();function m(x){return x.$proxy=!0,x=new Proxy(x,{get:function(u,y){return typeof y!="symbol"&&typeof u[y]>"u"?u.get(y):u[y]},set:function(u,y,S){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?u.set(y,S):u[y]=S,!0},deleteProperty:function(u,y){return u.delete(y),!0}}),x}var g=function(){function x(u){var y=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u)if(u instanceof Map||u instanceof x)u.forEach(function(z,tt){return y.set(tt,z)});else for(var S in u)this.set(S,u[S])}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.is=function(u){return u.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(u,y){if(y==null)throw new Error("MapSchema#set('".concat(u,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(u,"'."));u=u.toString();var S=typeof this.$changes.indexes[u]<"u",z=S?this.$changes.indexes[u]:this.$refId++,tt=S?e.OPERATION.REPLACE:e.OPERATION.ADD,It=y.$changes!==void 0;if(It&&y.$changes.setParent(this,this.$changes.root,z),!S)this.$changes.indexes[u]=z,this.$indexes.set(z,u);else{if(!It&&this.$items.get(u)===y)return;It&&this.$items.get(u)!==y&&(tt=e.OPERATION.ADD)}return this.$items.set(u,y),this.$changes.change(u,tt),this},x.prototype.get=function(u){return this.$items.get(u)},x.prototype.delete=function(u){return this.$changes.delete(u.toString()),this.$items.delete(u)},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){return this.$items.has(u)},x.prototype.forEach=function(u){this.$items.forEach(u)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toJSON=function(){var u={};return this.forEach(function(y,S){u[S]=typeof y.toJSON=="function"?y.toJSON():y}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(S,z){S.$changes?y.set(z,S.clone()):y.set(z,S)})),y},x}(),E={};function M(x,u){E[x]=u}function w(x){return E[x]}var O=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(u){var y=new x;return y.schema=Object.assign({},u&&u.schema||{}),y.indexes=Object.assign({},u&&u.indexes||{}),y.fieldsByIndex=Object.assign({},u&&u.fieldsByIndex||{}),y.descriptors=Object.assign({},u&&u.descriptors||{}),y.deprecated=Object.assign({},u&&u.deprecated||{}),y},x.prototype.addField=function(u,y){var S=this.getNextFieldIndex();this.fieldsByIndex[S]=u,this.indexes[u]=S,this.schema[u]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(u){return this.indexes[u]!==void 0},x.prototype.addFilter=function(u,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[u]]=y,this.indexesWithFilters.push(this.indexes[u]),!0},x.prototype.addChildrenFilter=function(u,y){var S=this.indexes[u],z=this.schema[u];if(w(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[S]=y,!0;console.warn("@filterChildren: field '".concat(u,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(u){return this.childFilters&&this.childFilters[this.indexes[u]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function L(x){return x._context&&x._context.useFilters}var I=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(u){return this.schemas.has(u)},x.prototype.get=function(u){return this.types[u]},x.prototype.add=function(u,y){y===void 0&&(y=this.schemas.size),u._definition=O.create(u._definition),u._typeid=y,this.types[y]=u,this.schemas.set(u,y)},x.create=function(u){return u===void 0&&(u={}),function(y){return u.context||(u.context=new x),b(y,u)}},x}(),q=new I;function b(x,u){return u===void 0&&(u={}),function(y,S){var z=u.context||q,tt=y.constructor;if(tt._context=z,!x)throw new Error("".concat(tt.name,': @type() reference provided for "').concat(S,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(tt)||z.add(tt);var It=tt._definition;if(It.addField(S,x),It.descriptors[S]){if(It.deprecated[S])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(S,"' definition on '").concat(tt.name,`'.
Check @type() annotation`))}catch(k){var Tt=k.stack.split(`
`)[4].trim();throw new Error("".concat(k.message," ").concat(Tt))}}var re=v.is(x),A=!re&&g.is(x);if(typeof x!="string"&&!fe.is(x)){var N=Object.values(x)[0];typeof N!="string"&&!z.has(N)&&z.add(N)}if(u.manual){It.descriptors[S]={enumerable:!0,configurable:!0,writable:!0};return}var G="_".concat(S);It.descriptors[G]={enumerable:!1,configurable:!1,writable:!0},It.descriptors[S]={get:function(){return this[G]},set:function(k){k!==this[G]&&(k!=null?(re&&!(k instanceof v)&&(k=new(v.bind.apply(v,a([void 0],k,!1)))),A&&!(k instanceof g)&&(k=new g(k)),k.$proxy===void 0&&(A?k=m(k):re&&(k=_(k))),this.$changes.change(S),k.$changes&&k.$changes.setParent(this,this.$changes.root,this._definition.indexes[S])):this[G]!==void 0&&this.$changes.delete(S),this[G]=k)},enumerable:!0,configurable:!0}}}function R(x){return function(u,y){var S=u.constructor,z=S._definition;z.addFilter(y,x)&&(S._context.useFilters=!0)}}function j(x){return function(u,y){var S=u.constructor,z=S._definition;z.addChildrenFilter(y,x)&&(S._context.useFilters=!0)}}function J(x){return x===void 0&&(x=!0),function(u,y){var S=u.constructor,z=S._definition;z.deprecated[y]=!0,x&&(z.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(tt){},enumerable:!1,configurable:!0})}}function ot(x,u,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||q);for(var S in u)b(u[S],y)(x.prototype,S);return x}function F(x){for(var u=0,y=0,S=0,z=x.length;S<z;S++)u=x.charCodeAt(S),u<128?y+=1:u<2048?y+=2:u<55296||u>=57344?y+=3:(S++,y+=4);return y}function W(x,u,y){for(var S=0,z=0,tt=y.length;z<tt;z++)S=y.charCodeAt(z),S<128?x[u++]=S:S<2048?(x[u++]=192|S>>6,x[u++]=128|S&63):S<55296||S>=57344?(x[u++]=224|S>>12,x[u++]=128|S>>6&63,x[u++]=128|S&63):(z++,S=65536+((S&1023)<<10|y.charCodeAt(z)&1023),x[u++]=240|S>>18,x[u++]=128|S>>12&63,x[u++]=128|S>>6&63,x[u++]=128|S&63)}function $(x,u){x.push(u&255)}function Q(x,u){x.push(u&255)}function nt(x,u){x.push(u&255),x.push(u>>8&255)}function it(x,u){x.push(u&255),x.push(u>>8&255)}function st(x,u){x.push(u&255),x.push(u>>8&255),x.push(u>>16&255),x.push(u>>24&255)}function ut(x,u){var y=u>>24,S=u>>16,z=u>>8,tt=u;x.push(tt&255),x.push(z&255),x.push(S&255),x.push(y&255)}function pt(x,u){var y=Math.floor(u/Math.pow(2,32)),S=u>>>0;ut(x,S),ut(x,y)}function K(x,u){var y=u/Math.pow(2,32)>>0,S=u>>>0;ut(x,S),ut(x,y)}function at(x,u){Xt(x,u)}function Et(x,u){Ft(x,u)}var wt=new Int32Array(2),Dt=new Float32Array(wt.buffer),Wt=new Float64Array(wt.buffer);function Xt(x,u){Dt[0]=u,st(x,wt[0])}function Ft(x,u){Wt[0]=u,st(x,wt[0]),st(x,wt[1])}function ce(x,u){return Q(x,u?1:0)}function Y(x,u){u||(u="");var y=F(u),S=0;if(y<32)x.push(y|160),S=1;else if(y<256)x.push(217),Q(x,y),S=2;else if(y<65536)x.push(218),it(x,y),S=3;else if(y<4294967296)x.push(219),ut(x,y),S=5;else throw new Error("String too long");return W(x,x.length,u),S+y}function pe(x,u){if(isNaN(u))return pe(x,0);if(isFinite(u)){if(u!==(u|0))return x.push(203),Ft(x,u),9}else return pe(x,u>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return u>=0?u<128?(Q(x,u),1):u<256?(x.push(204),Q(x,u),2):u<65536?(x.push(205),it(x,u),3):u<4294967296?(x.push(206),ut(x,u),5):(x.push(207),K(x,u),9):u>=-32?(x.push(224|u+32),1):u>=-128?(x.push(208),$(x,u),2):u>=-32768?(x.push(209),nt(x,u),3):u>=-2147483648?(x.push(210),st(x,u),5):(x.push(211),pt(x,u),9)}var Bt=Object.freeze({__proto__:null,boolean:ce,float32:at,float64:Et,int16:nt,int32:st,int64:pt,int8:$,number:pe,string:Y,uint16:it,uint32:ut,uint64:K,uint8:Q,utf8Write:W,writeFloat32:Xt,writeFloat64:Ft});function Vt(x,u,y){for(var S="",z=0,tt=u,It=u+y;tt<It;tt++){var Tt=x[tt];if(!(Tt&128)){S+=String.fromCharCode(Tt);continue}if((Tt&224)===192){S+=String.fromCharCode((Tt&31)<<6|x[++tt]&63);continue}if((Tt&240)===224){S+=String.fromCharCode((Tt&15)<<12|(x[++tt]&63)<<6|(x[++tt]&63)<<0);continue}if((Tt&248)===240){z=(Tt&7)<<18|(x[++tt]&63)<<12|(x[++tt]&63)<<6|(x[++tt]&63)<<0,z>=65536?(z-=65536,S+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):S+=String.fromCharCode(z);continue}console.error("Invalid byte "+Tt.toString(16))}return S}function Ct(x,u){return _e(x,u)<<24>>24}function _e(x,u){return x[u.offset++]}function qt(x,u){return P(x,u)<<16>>16}function P(x,u){return x[u.offset++]|x[u.offset++]<<8}function T(x,u){return x[u.offset++]|x[u.offset++]<<8|x[u.offset++]<<16|x[u.offset++]<<24}function X(x,u){return T(x,u)>>>0}function ht(x,u){return Yt(x,u)}function lt(x,u){return rt(x,u)}function dt(x,u){var y=X(x,u),S=T(x,u)*Math.pow(2,32);return S+y}function Pt(x,u){var y=X(x,u),S=X(x,u)*Math.pow(2,32);return S+y}var vt=new Int32Array(2),bt=new Float32Array(vt.buffer),zt=new Float64Array(vt.buffer);function Yt(x,u){return vt[0]=T(x,u),bt[0]}function rt(x,u){return vt[0]=T(x,u),vt[1]=T(x,u),zt[0]}function me(x,u){return _e(x,u)>0}function Jt(x,u){var y=x[u.offset++],S;y<192?S=y&31:y===217?S=_e(x,u):y===218?S=P(x,u):y===219&&(S=X(x,u));var z=Vt(x,u.offset,S);return u.offset+=S,z}function Gt(x,u){var y=x[u.offset];return y<192&&y>160||y===217||y===218||y===219}function Rt(x,u){var y=x[u.offset++];if(y<128)return y;if(y===202)return Yt(x,u);if(y===203)return rt(x,u);if(y===204)return _e(x,u);if(y===205)return P(x,u);if(y===206)return X(x,u);if(y===207)return Pt(x,u);if(y===208)return Ct(x,u);if(y===209)return qt(x,u);if(y===210)return T(x,u);if(y===211)return dt(x,u);if(y>223)return(255-y+1)*-1}function At(x,u){var y=x[u.offset];return y<128||y>=202&&y<=211}function jt(x,u){return x[u.offset]<160}function he(x,u){return x[u.offset-1]===o&&(x[u.offset]<128||x[u.offset]>=202&&x[u.offset]<=211)}var we=Object.freeze({__proto__:null,arrayCheck:jt,boolean:me,float32:ht,float64:lt,int16:qt,int32:T,int64:dt,int8:Ct,number:Rt,numberCheck:At,readFloat32:Yt,readFloat64:rt,string:Jt,stringCheck:Gt,switchStructureCheck:he,uint16:P,uint32:X,uint64:Pt,uint8:_e}),Zt=function(){function x(u){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u&&u.forEach(function(S){return y.add(S)})}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,u)},x.is=function(u){return u.collection!==void 0},x.prototype.add=function(u){var y=this.$refId++,S=u.$changes!==void 0;return S&&u.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,u),this.$changes.change(y),y},x.prototype.at=function(u){var y=Array.from(this.$items.keys())[u];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(u){for(var y=this.$items.entries(),S,z;(z=y.next())&&!z.done;)if(u===z.value[1]){S=z.value[0];break}return S===void 0?!1:(this.$changes.delete(S),this.$indexes.delete(S),this.$items.delete(S))},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){return Array.from(this.$items.values()).some(function(y){return y===u})},x.prototype.forEach=function(u){var y=this;this.$items.forEach(function(S,z,tt){return u(S,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var u=[];return this.forEach(function(y,S){u.push(typeof y.toJSON=="function"?y.toJSON():y)}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(S){S.$changes?y.add(S.clone()):y.add(S)})),y},x}(),ft=function(){function x(u){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,u&&u.forEach(function(S){return y.add(S)})}return x.prototype.onAdd=function(u,y){return y===void 0&&(y=!0),h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,u,y?this.$items:void 0)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,u)},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,u)},x.is=function(u){return u.set!==void 0},x.prototype.add=function(u){var y,S;if(this.has(u))return!1;var z=this.$refId++;u.$changes!==void 0&&u.$changes.setParent(this,this.$changes.root,z);var tt=(S=(y=this.$changes.indexes[z])===null||y===void 0?void 0:y.op)!==null&&S!==void 0?S:e.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,u),this.$changes.change(z,tt),z},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(u){for(var y=this.$items.entries(),S,z;(z=y.next())&&!z.done;)if(u===z.value[1]){S=z.value[0];break}return S===void 0?!1:(this.$changes.delete(S),this.$indexes.delete(S),this.$items.delete(S))},x.prototype.clear=function(u){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),u&&d.call(this,u),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(u){for(var y=this.$items.values(),S=!1,z;(z=y.next())&&!z.done;)if(u===z.value){S=!0;break}return S},x.prototype.forEach=function(u){var y=this;this.$items.forEach(function(S,z,tt){return u(S,z,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(u,y){this.$indexes.set(u,y)},x.prototype.getIndex=function(u){return this.$indexes.get(u)},x.prototype.getByIndex=function(u){return this.$items.get(this.$indexes.get(u))},x.prototype.deleteByIndex=function(u){var y=this.$indexes.get(u);this.$items.delete(y),this.$indexes.delete(u)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var u=[];return this.forEach(function(y,S){u.push(typeof y.toJSON=="function"?y.toJSON():y)}),u},x.prototype.clone=function(u){var y;return u?y=Object.assign(new x,this):(y=new x,this.forEach(function(S){S.$changes?y.add(S.clone()):y.add(S)})),y},x}(),B=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(u){this.refIds.has(u)||(this.refIds.add(u),this.containerIndexes.set(u,new Set))},x.get=function(u){return u.$filterState===void 0&&(u.$filterState=new x),u.$filterState},x}(),Mt=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(u,y,S){S===void 0&&(S=!0),this.refs.set(u,y),S&&(this.refCounts[u]=(this.refCounts[u]||0)+1)},x.prototype.removeRef=function(u){var y=this.refCounts[u];if(y===void 0){console.warn("trying to remove reference ".concat(u," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(u," with 0 refCount"));return}this.refCounts[u]=y-1,this.deletedRefs.add(u)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var u=this;this.deletedRefs.forEach(function(y){if(!(u.refCounts[y]>0)){var S=u.refs.get(y);if(S instanceof fe)for(var z in S._definition.schema)typeof S._definition.schema[z]!="string"&&S[z]&&S[z].$changes&&u.removeRef(S[z].$changes.refId);else{var tt=S.$changes.parent._definition,It=tt.schema[tt.fieldsByIndex[S.$changes.parentIndex]];typeof Object.values(It)[0]=="function"&&Array.from(S.values()).forEach(function(Tt){return u.removeRef(Tt.$changes.refId)})}u.refs.delete(y),delete u.refCounts[y]}}),this.deletedRefs.clear()},x}(),xt=function(x){i(u,x);function u(){return x!==null&&x.apply(this,arguments)||this}return u}(Error);function Ht(x,u,y,S){var z,tt=!1;switch(u){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(S));break;case"string":z="string",tt=!0;break;case"boolean":return}if(typeof x!==z&&(!tt||tt&&x!==null)){var It="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new xt("a '".concat(z,"' was expected, but ").concat(It," was provided in ").concat(y.constructor.name,"#").concat(S))}}function kt(x,u,y,S){if(!(x instanceof u))throw new xt("a '".concat(u.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(S))}function ve(x,u,y,S,z){Ht(y,x,S,z);var tt=Bt[x];if(tt)tt(u,y);else throw new xt("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(S.constructor.name,"#").concat(z))}function xe(x,u,y){return we[x](u,y)}var fe=function(){function x(){for(var u=[],y=0;y<arguments.length;y++)u[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new Mt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var S=this._definition.descriptors;S&&Object.defineProperties(this,S),u[0]&&this.assign(u[0])}return x.onError=function(u){console.error(u)},x.is=function(u){return u._definition&&u._definition.schema!==void 0},x.prototype.onChange=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,u)},x.prototype.onRemove=function(u){return h(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,u)},x.prototype.assign=function(u){return Object.assign(this,u),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(u,y){this.$changes.change(u,y)},x.prototype.listen=function(u,y,S){var z=this;return S===void 0&&(S=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[u]||(this.$callbacks[u]=[]),this.$callbacks[u].push(y),S&&this[u]!==void 0&&y(this[u],void 0),function(){return p(z.$callbacks[u],z.$callbacks[u].indexOf(y))}},x.prototype.decode=function(u,y,S){y===void 0&&(y={offset:0}),S===void 0&&(S=this);var z=[],tt=this.$changes.root,It=u.length,Tt=0;for(tt.refs.set(Tt,this);y.offset<It;){var re=u[y.offset++];if(re==o){Tt=Rt(u,y);var A=tt.refs.get(Tt);if(!A)throw new Error('"refId" not found: '.concat(Tt));S=A;continue}var N=S.$changes,G=S._definition!==void 0,k=G?re>>6<<6:re;if(k===e.OPERATION.CLEAR){S.clear(z);continue}var H=G?re%(k||255):Rt(u,y),et=G?S._definition.fieldsByIndex[H]:"",ct=N.getType(H),Z=void 0,mt=void 0,Ut=void 0;if(G?mt=S["_".concat(et)]:(mt=S.getByIndex(H),(k&e.OPERATION.ADD)===e.OPERATION.ADD?(Ut=S instanceof g?Jt(u,y):H,S.setIndex(H,Ut)):Ut=S.getIndex(H)),(k&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(k!==e.OPERATION.DELETE_AND_ADD&&S.deleteByIndex(H),mt&&mt.$changes&&tt.removeRef(mt.$changes.refId),Z=null),et===void 0){console.warn("@colyseus/schema: definition mismatch");for(var St={offset:y.offset};y.offset<It&&!(he(u,y)&&(St.offset=y.offset+1,tt.refs.has(Rt(u,St))));)y.offset++;continue}else if(k!==e.OPERATION.DELETE)if(x.is(ct)){var gt=Rt(u,y);if(Z=tt.refs.get(gt),k!==e.OPERATION.REPLACE){var Ot=this.getSchemaType(u,y,ct);Z||(Z=this.createTypeInstance(Ot),Z.$changes.refId=gt,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&gt!==mt.$changes.refId&&tt.removeRef(mt.$changes.refId))),tt.addRef(gt,Z,Z!==mt)}}else if(typeof ct=="string")Z=xe(ct,u,y);else{var Ne=w(Object.keys(ct)[0]),Me=Rt(u,y),Fe=tt.refs.has(Me)?mt||tt.refs.get(Me):new Ne.constructor;if(Z=Fe.clone(!0),Z.$changes.refId=Me,mt&&(Z.$callbacks=mt.$callbacks,mt.$changes.refId&&Me!==mt.$changes.refId)){tt.removeRef(mt.$changes.refId);for(var Kt=mt.entries(),Lt=void 0;(Lt=Kt.next())&&!Lt.done;){var li=Lt.value,de=li[0],Cn=li[1];z.push({refId:Me,op:e.OPERATION.DELETE,field:de,value:void 0,previousValue:Cn})}}tt.addRef(Me,Z,Fe!==mt)}if(Z!=null){if(Z.$changes&&Z.$changes.setParent(N.ref,N.root,H),S instanceof x)S[et]=Z;else if(S instanceof g){var de=Ut;S.$items.set(de,Z),S.$changes.allChanges.add(H)}else if(S instanceof v)S.setAt(H,Z);else if(S instanceof Zt){var Rn=S.add(Z);S.setIndex(H,Rn)}else if(S instanceof ft){var Rn=S.add(Z);Rn!==!1&&S.setIndex(H,Rn)}}mt!==Z&&z.push({refId:Tt,op:k,field:et,dynamicIndex:Ut,value:Z,previousValue:mt})}return this._triggerChanges(z),tt.garbageCollectDeletedRefs(),z},x.prototype.encode=function(u,y,S){u===void 0&&(u=!1),y===void 0&&(y=[]),S===void 0&&(S=!1);for(var z=this.$changes,tt=new WeakSet,It=[z],Tt=1,re=0;re<Tt;re++){var A=It[re],N=A.ref,G=N instanceof x;A.ensureRefId(),tt.add(A),A!==z&&(A.changed||u)&&(Q(y,o),pe(y,A.refId));for(var k=u?Array.from(A.allChanges):Array.from(A.changes.values()),H=0,et=k.length;H<et;H++){var ct=u?{op:e.OPERATION.ADD,index:k[H]}:k[H],Z=ct.index,mt=G?N._definition.fieldsByIndex&&N._definition.fieldsByIndex[Z]:Z,Ut=y.length;if(ct.op!==e.OPERATION.TOUCH)if(G)Q(y,Z|ct.op);else{if(Q(y,ct.op),ct.op===e.OPERATION.CLEAR)continue;pe(y,Z)}if(!G&&(ct.op&e.OPERATION.ADD)==e.OPERATION.ADD&&N instanceof g){var St=A.ref.$indexes.get(Z);Y(y,St)}if(ct.op!==e.OPERATION.DELETE){var gt=A.getType(Z),Ot=A.getValue(Z);if(Ot&&Ot.$changes&&!tt.has(Ot.$changes)&&(It.push(Ot.$changes),Ot.$changes.ensureRefId(),Tt++),ct.op!==e.OPERATION.TOUCH){if(x.is(gt))kt(Ot,gt,N,mt),pe(y,Ot.$changes.refId),(ct.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(y,gt,Ot.constructor);else if(typeof gt=="string")ve(gt,y,Ot,N,mt);else{var Ne=w(Object.keys(gt)[0]);kt(N["_".concat(mt)],Ne.constructor,N,mt),pe(y,Ot.$changes.refId)}S&&A.cache(Z,y.slice(Ut))}}}!u&&!S&&A.discard()}return y},x.prototype.encodeAll=function(u){return this.encode(!0,[],u)},x.prototype.applyFilters=function(u,y){var S,z;y===void 0&&(y=!1);for(var tt=this,It=new Set,Tt=B.get(u),re=[this.$changes],A=1,N=[],G=function(H){var et=re[H];if(It.has(et.refId))return"continue";var ct=et.ref,Z=ct instanceof x;Q(N,o),pe(N,et.refId);var mt=Tt.refIds.has(et),Ut=y||!mt;Tt.addRefId(et);var St=Tt.containerIndexes.get(et),gt=Ut?Array.from(et.allChanges):Array.from(et.changes.values());if(!y&&Z&&ct._definition.indexesWithFilters){var Ot=ct._definition.indexesWithFilters;Ot.forEach(function(Hn){!St.has(Hn)&&et.allChanges.has(Hn)&&(Ut?gt.push(Hn):gt.push({op:e.OPERATION.ADD,index:Hn}))})}for(var Ne=0,Me=gt.length;Ne<Me;Ne++){var Fe=Ut?{op:e.OPERATION.ADD,index:gt[Ne]}:gt[Ne];if(Fe.op===e.OPERATION.CLEAR){Q(N,Fe.op);continue}var Kt=Fe.index;if(Fe.op===e.OPERATION.DELETE){Z?Q(N,Fe.op|Kt):(Q(N,Fe.op),pe(N,Kt));continue}var Lt=et.getValue(Kt),li=et.getType(Kt);if(Z){var de=ct._definition.filters&&ct._definition.filters[Kt];if(de&&!de.call(ct,u,Lt,tt)){Lt&&Lt.$changes&&It.add(Lt.$changes.refId);continue}}else{var Cn=et.parent,de=et.getChildrenFilter();if(de&&!de.call(Cn,u,ct.$indexes.get(Kt),Lt,tt)){Lt&&Lt.$changes&&It.add(Lt.$changes.refId);continue}}if(Lt.$changes&&(re.push(Lt.$changes),A++),Fe.op!==e.OPERATION.TOUCH)if(Fe.op===e.OPERATION.ADD||Z)N.push.apply(N,(S=et.caches[Kt])!==null&&S!==void 0?S:[]),St.add(Kt);else if(St.has(Kt))N.push.apply(N,(z=et.caches[Kt])!==null&&z!==void 0?z:[]);else{if(St.add(Kt),Q(N,e.OPERATION.ADD),pe(N,Kt),ct instanceof g){var Rn=et.ref.$indexes.get(Kt);Y(N,Rn)}Lt.$changes?pe(N,Lt.$changes.refId):Bt[li](N,Lt)}else if(Lt.$changes&&!Z){if(Q(N,e.OPERATION.ADD),pe(N,Kt),ct instanceof g){var Rn=et.ref.$indexes.get(Kt);Y(N,Rn)}pe(N,Lt.$changes.refId)}}},k=0;k<A;k++)G(k);return N},x.prototype.clone=function(){var u,y=new this.constructor,S=this._definition.schema;for(var z in S)typeof this[z]=="object"&&typeof((u=this[z])===null||u===void 0?void 0:u.clone)=="function"?y[z]=this[z].clone():y[z]=this[z];return y},x.prototype.toJSON=function(){var u=this._definition.schema,y=this._definition.deprecated,S={};for(var z in u)!y[z]&&this[z]!==null&&typeof this[z]<"u"&&(S[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return S},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(u){return this[this._definition.fieldsByIndex[u]]},x.prototype.deleteByIndex=function(u){this[this._definition.fieldsByIndex[u]]=void 0},x.prototype.tryEncodeTypeId=function(u,y,S){y._typeid!==S._typeid&&(Q(u,c),pe(u,S._typeid))},x.prototype.getSchemaType=function(u,y,S){var z;return u[y.offset]===c&&(y.offset++,z=this.constructor._context.get(Rt(u,y))),z||S},x.prototype.createTypeInstance=function(u){var y=new u;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(u){for(var y,S,z,tt,It,Tt,re,A,N,G=new Set,k=this.$changes.root.refs,H=function(ct){var Z=u[ct],mt=Z.refId,Ut=k.get(mt),St=Ut.$callbacks;if((Z.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&Z.previousValue instanceof x&&((S=(y=Z.previousValue.$callbacks)===null||y===void 0?void 0:y[e.OPERATION.DELETE])===null||S===void 0||S.forEach(function(gt){return gt()})),!St)return"continue";if(Ut instanceof x){if(!G.has(mt))try{(z=St==null?void 0:St[e.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(gt){return gt()})}catch(gt){x.onError(gt)}try{St.hasOwnProperty(Z.field)&&((tt=St[Z.field])===null||tt===void 0||tt.forEach(function(gt){return gt(Z.value,Z.previousValue)}))}catch(gt){x.onError(gt)}}else Z.op===e.OPERATION.ADD&&Z.previousValue===void 0?(It=St[e.OPERATION.ADD])===null||It===void 0||It.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)}):Z.op===e.OPERATION.DELETE?Z.previousValue!==void 0&&((Tt=St[e.OPERATION.DELETE])===null||Tt===void 0||Tt.forEach(function(gt){var Ot;return gt(Z.previousValue,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})):Z.op===e.OPERATION.DELETE_AND_ADD&&(Z.previousValue!==void 0&&((re=St[e.OPERATION.DELETE])===null||re===void 0||re.forEach(function(gt){var Ot;return gt(Z.previousValue,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})),(A=St[e.OPERATION.ADD])===null||A===void 0||A.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)})),Z.value!==Z.previousValue&&((N=St[e.OPERATION.REPLACE])===null||N===void 0||N.forEach(function(gt){var Ot;return gt(Z.value,(Ot=Z.dynamicIndex)!==null&&Ot!==void 0?Ot:Z.field)}));G.add(mt)},et=0;et<u.length;et++)H(et)},x._definition=O.create(),x}();function Ke(x){for(var u=[x.$changes],y=1,S={},z=S,tt=function(Tt){var re=u[Tt];re.changes.forEach(function(A){var N=re.ref,G=A.index,k=N._definition?N._definition.fieldsByIndex[G]:N.$indexes.get(G);z[k]=re.getValue(G)})},It=0;It<y;It++)tt(It);return S}var le={context:new I},Ve=function(x){i(u,x);function u(){return x!==null&&x.apply(this,arguments)||this}return r([b("string",le)],u.prototype,"name",void 0),r([b("string",le)],u.prototype,"type",void 0),r([b("number",le)],u.prototype,"referencedType",void 0),u}(fe),cn=function(x){i(u,x);function u(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new v,y}return r([b("number",le)],u.prototype,"id",void 0),r([b([Ve],le)],u.prototype,"fields",void 0),u}(fe),vr=function(x){i(u,x);function u(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new v,y}return u.encode=function(y){var S,z=y.constructor,tt=new u;tt.rootType=z._typeid;var It=function(N,G){for(var k in G){var H=new Ve;H.name=k;var et=void 0;if(typeof G[k]=="string")et=G[k];else{var ct=G[k],Z=void 0;fe.is(ct)?(et="ref",Z=G[k]):(et=Object.keys(ct)[0],typeof ct[et]=="string"?et+=":"+ct[et]:Z=ct[et]),H.referencedType=Z?Z._typeid:-1}H.type=et,N.fields.push(H)}tt.types.push(N)},Tt=(S=z._context)===null||S===void 0?void 0:S.types;for(var re in Tt){var A=new cn;A.id=Number(re),It(A,Tt[re]._definition.schema)}return tt.encodeAll()},u.decode=function(y,S){var z=new I,tt=new u;tt.decode(y,S);var It=tt.types.reduce(function(G,k){var H=function(ct){i(Z,ct);function Z(){return ct!==null&&ct.apply(this,arguments)||this}return Z}(fe),et=k.id;return G[et]=H,z.add(H,et),G},{});tt.types.forEach(function(G){var k=It[G.id];G.fields.forEach(function(H){var et;if(H.referencedType!==void 0){var ct=H.type,Z=It[H.referencedType];if(!Z){var mt=H.type.split(":");ct=mt[0],Z=mt[1]}ct==="ref"?b(Z,{context:z})(k.prototype,H.name):b((et={},et[ct]=Z,et),{context:z})(k.prototype,H.name)}else b(H.type,{context:z})(k.prototype,H.name)})});var Tt=It[tt.rootType],re=new Tt;for(var A in Tt._definition.schema){var N=Tt._definition.schema[A];typeof N!="string"&&(re[A]=typeof N=="function"?new N:new(w(Object.keys(N)[0])).constructor)}return re},r([b([cn],le)],u.prototype,"types",void 0),r([b("number",le)],u.prototype,"rootType",void 0),u}(fe);M("map",{constructor:g}),M("array",{constructor:v}),M("set",{constructor:ft}),M("collection",{constructor:Zt}),e.ArraySchema=v,e.CollectionSchema=Zt,e.Context=I,e.MapSchema=g,e.Reflection=vr,e.ReflectionField=Ve,e.ReflectionType=cn,e.Schema=fe,e.SchemaDefinition=O,e.SetSchema=ft,e.decode=we,e.defineTypes=ot,e.deprecated=J,e.dumpChanges=Ke,e.encode=Bt,e.filter=R,e.filterChildren=j,e.hasFilter=L,e.registerType=M,e.type=b})})(Rc,Rc.exports);var nu=Rc.exports,Wv=Oe&&Oe.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),Xv=Oe&&Oe.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Yv=Oe&&Oe.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&Wv(t,s,e);return Xv(t,s),t};Object.defineProperty(mr,"__esModule",{value:!0});mr.Room=void 0;const Wh=Yv(Bs),qv=Yo,en=Xc,Xh=ji,jv=gr,oo=ks,_n=nu,Yh=Xo;class Yc{constructor(t,e){this.onStateChange=(0,oo.createSignal)(),this.onError=(0,oo.createSignal)(),this.onLeave=(0,oo.createSignal)(),this.onJoin=(0,oo.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,jv.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,Xh.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,i)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,i){const r=new qv.Connection;n.connection=r,r.events.onmessage=Yc.prototype.onMessageCallback.bind(n),r.events.onclose=function(a){var o;if(!n.hasJoined){(o=console.warn)===null||o===void 0||o.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===Yh.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},r.events.onerror=function(a){var o;(o=console.warn)===null||o===void 0||o.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},r.connect(t,i)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([en.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Yh.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[en.Protocol.ROOM_DATA];typeof t=="string"?_n.encode.string(n,t):_n.encode.number(n,t);let i;if(e!==void 0){const r=Wh.encode(e);i=new Uint8Array(n.length+r.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(r),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(t,e){const n=[en.Protocol.ROOM_DATA_BYTES];typeof t=="string"?_n.encode.string(n,t):_n.encode.number(n,t);let i;i=new Uint8Array(n.length+(e.byteLength||e.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(e),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===en.Protocol.JOIN_ROOM){let i=1;const r=(0,en.utf8Read)(e,i);if(i+=(0,en.utf8Length)(r),this.serializerId=(0,en.utf8Read)(e,i),i+=(0,en.utf8Length)(this.serializerId),!this.serializer){const a=(0,Xh.getSerializer)(this.serializerId);this.serializer=new a}e.length>i&&this.serializer.handshake&&this.serializer.handshake(e,{offset:i}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([en.Protocol.JOIN_ROOM])}else if(n===en.Protocol.ERROR){const i={offset:1},r=_n.decode.number(e,i),a=_n.decode.string(e,i);this.onError.invoke(r,a)}else if(n===en.Protocol.LEAVE_ROOM)this.leave();else if(n===en.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},a=this.serializer.getState().constructor._context.get(_n.decode.number(e,i)),o=new a;o.decode(e,i),this.dispatchMessage(a,o)}else if(n===en.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===en.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===en.Protocol.ROOM_DATA){const i={offset:1},r=_n.decode.stringCheck(e,i)?_n.decode.string(e,i):_n.decode.number(e,i),a=e.length>i.offset?Wh.decode(t.data,i.offset):void 0;this.dispatchMessage(r,a)}else if(n===en.Protocol.ROOM_DATA_BYTES){const i={offset:1},r=_n.decode.stringCheck(e,i)?_n.decode.string(e,i):_n.decode.number(e,i);this.dispatchMessage(r,new Uint8Array(e.slice(i.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const i=this.getMessageHandlerKey(t);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}mr.Room=Yc;var jo={};function qh(s,t){t.headers=s.headers||{},t.statusMessage=s.statusText,t.statusCode=s.status,t.data=s.response}function Fn(s,t,e){return new Promise(function(n,i){e=e||{};var r=new XMLHttpRequest,a,o,c,l=e.body,h=e.headers||{};e.timeout&&(r.timeout=e.timeout),r.ontimeout=r.onerror=function(d){d.timeout=d.type=="timeout",i(d)},r.open(s,t.href||t),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),qh(r,r);o=c.shift();)o=o.split(": "),r.headers[o.shift().toLowerCase()]=o.join(": ");if(o=r.headers["content-type"],o&&~o.indexOf("application/json"))try{r.data=JSON.parse(r.data,e.reviver)}catch(d){return qh(r,d),i(d)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),r.withCredentials=!!e.withCredentials;for(a in h)r.setRequestHeader(a,h[a]);r.send(l)})}var Zv=Fn.bind(Fn,"GET"),Kv=Fn.bind(Fn,"POST"),$v=Fn.bind(Fn,"PATCH"),Jv=Fn.bind(Fn,"DELETE"),Qv=Fn.bind(Fn,"PUT");const tx=Object.freeze(Object.defineProperty({__proto__:null,del:Jv,get:Zv,patch:$v,post:Kv,put:Qv,send:Fn},Symbol.toStringTag,{value:"Module"})),ex=Tv(tx);var nx=Oe&&Oe.__createBinding||(Object.create?function(s,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(s,n,i)}:function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]}),ix=Oe&&Oe.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),sx=Oe&&Oe.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.prototype.hasOwnProperty.call(s,e)&&nx(t,s,e);return ix(t,s),t};Object.defineProperty(jo,"__esModule",{value:!0});jo.HTTP=void 0;const rx=Xo,ox=sx(ex);class ax{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return ox[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(i=>{var r;const a=i.statusCode,o=((r=i.data)===null||r===void 0?void 0:r.error)||i.statusMessage||i.message;throw!a&&!o?i:new rx.ServerError(a,o)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}jo.HTTP=ax;var _r={},Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.getItem=Ai.removeItem=Ai.setItem=void 0;let er;function qc(){if(!er)try{er=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return er||(er={cache:{},setItem:function(s,t){this.cache[s]=t},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),er}function cx(s,t){qc().setItem(s,t)}Ai.setItem=cx;function lx(s){qc().removeItem(s)}Ai.removeItem=lx;function hx(s,t){const e=qc().getItem(s);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}Ai.getItem=hx;var Oi=Oe&&Oe.__awaiter||function(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?r(h.value):i(h.value).then(o,c)}l((n=n.apply(s,t||[])).next())})},vs=Oe&&Oe.__classPrivateFieldGet||function(s,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!n:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(s):n?n.value:t.get(s)},nr=Oe&&Oe.__classPrivateFieldSet||function(s,t,e,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,e):i?i.value=e:t.set(s,e),e},xo,Pc,mi,yo;Object.defineProperty(_r,"__esModule",{value:!0});_r.Auth=void 0;const Ga=Ai,dx=gr;class ux{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},xo.set(this,!1),Pc.set(this,void 0),mi.set(this,void 0),yo.set(this,(0,dx.createNanoEvents)()),(0,Ga.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=vs(this,yo,"f").on("change",t);return vs(this,xo,"f")||nr(this,Pc,new Promise((n,i)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),nr(this,xo,!0,"f"),e}getUserData(){return Oi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Oi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(t,e){return Oi(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Oi(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Oi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Oi(this,void 0,void 0,function*(){return new Promise((n,i)=>{const r=e.width||480,a=e.height||768,o=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,l=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${o}`),h=screen.width/2-r/2,d=screen.height/2-a/2;nr(this,mi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+a+", top="+d+", left="+h),"f");const p=_=>{_.data.user===void 0&&_.data.token===void 0||(clearInterval(f),vs(this,mi,"f").close(),nr(this,mi,void 0,"f"),window.removeEventListener("message",p),_.data.error!==void 0?i(_.data.error):(n(_.data),this.emitChange(_.data)))},f=setInterval(()=>{(!vs(this,mi,"f")||vs(this,mi,"f").closed)&&(nr(this,mi,void 0,"f"),i("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return Oi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Ga.removeItem)(this.settings.key):(0,Ga.setItem)(this.settings.key,t.token)),vs(this,yo,"f").emit("change",t)}}_r.Auth=ux;xo=new WeakMap,Pc=new WeakMap,mi=new WeakMap,yo=new WeakMap;var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0});Zo.discordURLBuilder=void 0;function fx(s){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${e}${i}${s.pathname}${s.search}`:`${s.protocol}//${e}/.proxy/colyseus${i}${s.pathname}${s.search}`}Zo.discordURLBuilder=fx;var Vn=Oe&&Oe.__awaiter||function(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?r(h.value):i(h.value).then(o,c)}l((n=n.apply(s,t||[])).next())})},Va;Object.defineProperty(Us,"__esModule",{value:!0});Us.Client=Us.MatchMakeError=void 0;const px=Xo,mx=mr,gx=jo,_x=_r,vx=Zo;class Ko extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,Ko.prototype)}}Us.MatchMakeError=Ko;const jh=typeof window<"u"&&typeof((Va=window==null?void 0:window.location)===null||Va===void 0?void 0:Va.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class xx{constructor(t=jh,e){var n,i;if(typeof t=="string"){const r=t.startsWith("/")?new URL(t,jh):new URL(t),a=r.protocol==="https:"||r.protocol==="wss:",o=Number(r.port||(a?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:o,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new gx.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new _x.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=vx.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return Vn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return Vn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return Vn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return Vn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return Vn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=t.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},e)})}getAvailableRooms(t=""){return Vn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return Vn(this,void 0,void 0,function*(){const i=this.createRoom(t.room.name,e);i.roomId=t.room.roomId,i.sessionId=t.sessionId;const r={sessionId:i.sessionId};t.reconnectionToken&&(r.reconnectionToken=t.reconnectionToken);const a=n||i;return i.connect(this.buildEndpoint(t.room,r),t.devMode&&(()=>Vn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let o=0,c=8;const l=()=>Vn(this,void 0,void 0,function*(){o++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{o<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${o} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((o,c)=>{const l=(h,d)=>c(new px.ServerError(h,d));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),o(a)})})})}createMatchMakeRequest(t,e,n={},i,r){return Vn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new Ko(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,i,r)})}createRoom(t,e){return new mx.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let i=this.settings.secure?"wss://":"ws://";t.publicAddress?i+=`${t.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${i}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Us.Client=xx;var $o={};Object.defineProperty($o,"__esModule",{value:!0});$o.SchemaSerializer=void 0;const Zh=nu;class yx{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new Zh.Reflection().decode(t,e):this.state=Zh.Reflection.decode(t,e)}}$o.SchemaSerializer=yx;var Jo={};Object.defineProperty(Jo,"__esModule",{value:!0});Jo.NoneSerializer=void 0;class Mx{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}Jo.NoneSerializer=Mx;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var t=Us;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=Xc;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=mr;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=_r;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=$o;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const a=Jo,o=ji;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return o.registerSerializer}}),(0,o.registerSerializer)("schema",r.SchemaSerializer),(0,o.registerSerializer)("none",a.NoneSerializer)})(Qd);class Ex{constructor(t,e){C(this,"group");C(this,"head");C(this,"body");C(this,"leftArm");C(this,"rightArm");C(this,"leftLeg");C(this,"rightLeg");C(this,"label");C(this,"healthBar");C(this,"targetPos",new U);C(this,"targetRotY",0);C(this,"targetRotX",0);C(this,"health",20);C(this,"maxHealth",20);C(this,"walkCycle",0);C(this,"prevPos",new U);C(this,"dead",!1);this.group=new ue,this.prevPos.copy(this.group.position);let n=0;for(let R=0;R<e.length;R++)n=n*31+e.charCodeAt(R)>>>0;const i=[16764057,15777920,13931882,9262372,13010498,16769213],r=[3364300,13382451,3385907,13399808,10040268,43724,8947712,13382536],a=[2245785,10040115,2250018,7816192,5579400,21879,5592320,7807556],o=i[n%i.length],c=r[(n>>3)%r.length],l=a[(n>>6)%a.length],h=3351057,d=r[(n>>9)%r.length],p=()=>new Ue({color:o}),f=()=>new Ue({color:c}),_=()=>new Ue({color:l}),v=()=>new Ue({color:h}),m=(R,j,J,ot,F=0)=>{const W=new ue,$=new Te(R,j,J),Q=new te($,ot);return Q.position.y=-j/2+F,W.add(Q),W},g=new Te(.5,.5,.5);this.head=new te(g,p()),this.head.position.y=.25;const E=new Te(.52,.52,.52),M=new Ue({color:d,transparent:!0,opacity:.35}),w=new te(E,M);this.head.add(w);const O=new Te(.6,.75,.35);this.body=new te(O,f()),this.body.position.y=-.375,this.leftArm=m(.25,.65,.25,f(),0),this.rightArm=m(.25,.65,.25,f(),0);const L=new te(new Te(.24,.3,.24),p());L.position.y=-.5,this.leftArm.children[0].add(L);const I=L.clone();this.rightArm.children[0].add(I),this.leftArm.position.set(-.425,-.05,0),this.rightArm.position.set(.425,-.05,0),this.leftLeg=m(.27,.7,.27,_(),0),this.rightLeg=m(.27,.7,.27,_(),0);const q=new te(new Te(.28,.22,.28),v());q.position.y=-.5,this.leftLeg.children[0].add(q);const b=q.clone();this.rightLeg.children[0].add(b),this.leftLeg.position.set(-.175,-.75,0),this.rightLeg.position.set(.175,-.75,0),this.group.add(this.head,this.body,this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.label=this.makeLabel(e),this.label.position.y=.85,this.group.add(this.label),this.healthBar=this.makeHealthBar(),this.healthBar.position.y=1.05,this.group.add(this.healthBar),t.add(this.group)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d"),i=this.getPlayerColor(t);n.fillStyle="rgba(0,0,0,0.55)",n.roundRect(4,8,248,42,6),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.roundRect(4,8,248,42,6),n.stroke(),n.fillStyle=i,n.font="bold 26px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,16),128,30);const r=new Ns(e),a=new Po({map:r,transparent:!0,depthTest:!1}),o=new Ec(a);return o.scale.set(1.6,.35,1),o}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}makeHealthBar(){const t=document.createElement("canvas");t.width=128,t.height=16;const e=t.getContext("2d");this.drawHealth(e,t.width,t.height,1);const n=new Ns(t),i=new Po({map:n,transparent:!0,depthTest:!1}),r=new Ec(i);return r.scale.set(1.2,.15,1),r}drawHealth(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#333",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22cc22":i>.25?"#ddcc00":"#cc2222",t.fillRect(0,0,Math.floor(e*i),n)}update(t){if(this.dead)return;const e=this.targetPos.x,n=this.targetPos.y-(1.6-.8),i=this.targetPos.z,r=Math.min(1,t*14);this.group.position.x+=(e-this.group.position.x)*r,this.group.position.y+=(n-this.group.position.y)*r,this.group.position.z+=(i-this.group.position.z)*r;const a=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=a*Math.min(1,t*10),this.head.rotation.x=this.targetRotX*.7;const o=this.group.position.x-this.prevPos.x,c=this.group.position.z-this.prevPos.z,l=Math.sqrt(o*o+c*c);this.prevPos.copy(this.group.position);const h=l/t;h>.2?this.walkCycle+=t*Math.min(h,8)*1.8:this.walkCycle*=.8;const d=Math.sin(this.walkCycle),p=.65;this.leftLeg.rotation.x=d*p,this.rightLeg.rotation.x=-d*p,this.leftArm.rotation.x=-d*p,this.rightArm.rotation.x=d*p,this.body.position.y=-.375+Math.abs(d)*.03}setHealth(t){this.health=t;const e=this.healthBar.material.map.image,n=e.getContext("2d");this.drawHealth(n,e.width,e.height,t/this.maxHealth),this.healthBar.material.map.needsUpdate=!0}die(){this.dead=!0,this.group.rotation.z=Math.PI/2,this.healthBar.visible=!1,setTimeout(()=>{this.group.visible=!1},3e3)}dispose(t){t.remove(this.group)}}class Sx{constructor(t,e,n,i){C(this,"client");C(this,"room",null);C(this,"players",new Map);C(this,"scene");C(this,"world");C(this,"cb");C(this,"mobs",null);C(this,"moveInterval",null);C(this,"getLocalState");this.scene=t,this.world=e,this.cb=n;const r=i.startsWith("localhost")||i.startsWith("127."),a=window.location.protocol==="https:"&&!r?"wss":"ws";this.client=new Qd.Client(`${a}://${i}`)}setMobManager(t){this.mobs=t}async join(t){this.cb.onStatusChange("connecting");try{this.room=await this.client.joinOrCreate("game_room",{name:t}),this.cb.onStatusChange("connected"),this.setupHandlers(),this.startSendPosition()}catch(e){console.error("[MP] Connection failed:",e),this.cb.onStatusChange("disconnected")}}setupHandlers(){this.room&&(this.room.onMessage("worldState",t=>{for(const e of t.blockChanges)e.action==="add"?this.world.placeBlock(e.x,e.y,e.z,e.blockType):this.world.removeBlock(e.x,e.y,e.z)}),this.room.onMessage("blockUpdate",t=>{t.action==="add"?this.world.placeBlock(t.x,t.y,t.z,t.blockType):this.world.removeBlock(t.x,t.y,t.z)}),this.room.onMessage("chat",t=>{this.cb.onChat(t.name,t.text,t.name==="Server")}),this.room.onMessage("mobSnapshot",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobUpdate",t=>{var e;(e=this.mobs)==null||e.syncFromServer(t)}),this.room.onMessage("mobHit",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,t.health)}),this.room.onMessage("mobKilled",t=>{var e;(e=this.mobs)==null||e.onMobHit(t.mobId,0)}),this.room.onMessage("playerDied",t=>{this.cb.onPlayerDied(t.name)}),this.room.state.players.onAdd((t,e)=>{if(e===this.room.sessionId)return;const n=new Ex(this.scene,t.name||"Player");n.targetPos.set(t.x,t.y,t.z),n.targetRotY=t.rotY,n.targetRotX=t.rotX,n.health=t.health;const i=t.y-(1.6-.8);n.group.position.set(t.x,i,t.z),n.group.rotation.y=t.rotY,n.group.visible=t.gameMode!=="spectator",this.players.set(e,n),this.updateCount(),t.onChange(()=>{const r=this.players.get(e);r&&(r.targetPos.set(t.x,t.y,t.z),r.targetRotY=t.rotY,r.targetRotX=t.rotX,r.group.visible=t.gameMode!=="spectator",r.health!==t.health&&(r.setHealth(t.health),t.health<=0&&!r.dead&&r.die()))})}),this.room.state.players.onRemove((t,e)=>{const n=this.players.get(e);n&&(n.dispose(this.scene),this.players.delete(e)),this.updateCount()}),this.room.onLeave(()=>{this.cb.onStatusChange("disconnected"),this.stopSendPosition()}))}startSendPosition(){this.moveInterval=setInterval(()=>{!this.room||!this.getLocalState||this.room.send("move",this.getLocalState())},50)}stopSendPosition(){this.moveInterval&&(clearInterval(this.moveInterval),this.moveInterval=null)}setLocalStateGetter(t){this.getLocalState=t}sendAddBlock(t,e,n,i){var r;(r=this.room)==null||r.send("addBlock",{x:t,y:e,z:n,blockType:i})}sendRemoveBlock(t,e,n){var i;(i=this.room)==null||i.send("removeBlock",{x:t,y:e,z:n})}sendChat(t){var e;(e=this.room)==null||e.send("chat",{text:t})}sendGameMode(t){var e;(e=this.room)==null||e.send("setGameMode",{mode:t})}sendAttackMob(t,e){var n;(n=this.room)==null||n.send("attackMob",{mobId:t,damage:e})}sendRespawn(){var t;(t=this.room)==null||t.send("playerRespawn")}updatePlayers(t){this.players.forEach(e=>e.update(t))}updateCount(){var t;this.cb.onPlayerCount(((t=this.room)==null?void 0:t.state.players.size)??0)}get sessionId(){var t;return(t=this.room)==null?void 0:t.sessionId}get connected(){return!!this.room}}const Wa={pig:16361640,zombie:7846775,chicken:16777215,cow:8014378,sheep:14540253,creeper:4885034,skeleton:13421772,witherskeleton:1118481,horse:13149294,villager:16764057,enderdragon:1114146,spider:3355443,wolf:8947848,cat:14518323,phantom:1721429,slime:4500036};class Kh{constructor(t,e){C(this,"group");C(this,"bodyMeshes",[]);C(this,"legs",[]);C(this,"arms",[]);C(this,"headGroup");C(this,"hpSprite");C(this,"id");C(this,"type");C(this,"health");C(this,"maxHealth");C(this,"alive",!0);C(this,"state","idle");C(this,"targetPos",new U);C(this,"targetRotY",0);C(this,"walkCycle",0);C(this,"prevPos",new U);switch(this.group=new ue,this.headGroup=new ue,this.id=e.id,this.type=e.type,this.health=e.health,this.maxHealth=e.maxHealth,e.type){case"pig":this.buildPig();break;case"zombie":this.buildZombie();break;case"chicken":this.buildChicken();break;case"cow":this.buildCow();break;case"sheep":this.buildSheep();break;case"creeper":this.buildCreeper();break;case"skeleton":this.buildSkeleton();break;case"witherskeleton":this.buildWitherSkeleton();break;case"horse":this.buildHorse();break;case"villager":this.buildVillager();break;case"enderdragon":this.buildEnderDragon();break;case"spider":this.buildSpider();break;case"wolf":this.buildWolf();break;case"cat":this.buildCat();break;case"phantom":this.buildPhantom();break;case"slime":this.buildSlime();break}this.hpSprite=this.buildHpBar(),this.group.add(this.hpSprite),this.hpSprite.visible=!1,this.group.position.set(e.x,e.y,e.z),this.targetPos.copy(this.group.position),this.prevPos.copy(this.group.position),this.targetRotY=e.rotY,t.add(this.group)}mat(t,e=!1,n=1){return new Ue({color:t,transparent:e,opacity:n})}box(t,e,n,i){const r=new te(new Te(t,e,n),this.mat(i));return this.bodyMeshes.push(r),r}buildPig(){const i=this.box(1,.75,1.4,16361640);i.position.set(0,.45,0),this.group.add(i);const r=this.box(.72,.66,.66,16361640);r.position.y=0,this.headGroup.add(r);const a=this.box(.13,.13,.05,2236962);a.position.set(-.2,.12,.34);const o=a.clone();o.position.x=.2,this.headGroup.add(a,o);const c=this.box(.44,.28,.18,15757424);c.position.set(0,-.1,.36),this.headGroup.add(c);const l=this.box(.1,.08,.06,14505301);l.position.set(-.1,-.1,.45),this.headGroup.add(l);const h=l.clone();h.position.x=.1,this.headGroup.add(h);const d=this.box(.18,.2,.1,15757424);d.position.set(-.28,.4,.1),this.headGroup.add(d);const p=d.clone();p.position.x=.28,this.headGroup.add(p),this.headGroup.position.set(0,.82,.72),this.group.add(this.headGroup);const f=[[-.32,-.45],[.32,-.45],[-.32,.45],[.32,.45]];for(const[_,v]of f){const m=new ue,g=this.box(.3,.48,.3,16361640);g.position.y=-.24;const E=this.box(.3,.14,.3,7816260);E.position.y=-.48-.07,m.add(g,E),m.position.set(_,0,v),this.group.add(m),this.legs.push(m)}}buildZombie(){const r=this.box(.6,.8,.35,2771498);r.position.y=-.05,this.group.add(r);const a=this.box(.5,.5,.5,7846775);this.headGroup.add(a);const o=this.box(.1,.1,.05,16720384);o.position.set(-.12,.05,.26),this.headGroup.add(o);const c=o.clone();c.position.x=.12,this.headGroup.add(c),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);const l=d=>{const p=new ue,f=this.box(.26,.55,.26,2771498);f.position.y=-.275;const _=this.box(.24,.45,.24,7846775);return _.position.y=-.55-.225,p.add(f,_),p.position.set(d*.43,.2,0),p.rotation.x=-Math.PI/2.2,this.group.add(p),this.arms.push(p),p};l(-1),l(1);const h=d=>{const p=new ue,f=this.box(.26,.6,.26,1715738);f.position.y=-.3;const _=this.box(.26,.24,.28,1708040);return _.position.y=-.6-.12,p.add(f,_),p.position.set(d*.175,-.45,0),this.group.add(p),this.legs.push(p),p};h(-1),h(1)}buildChicken(){const r=this.box(.55,.6,.7,16777215);r.scale.set(1,1.1,1.3),r.position.y=.35,this.group.add(r);const a=this.box(.42,.4,.42,16777215);this.headGroup.add(a);const o=this.box(.12,.22,.12,14492194);o.position.set(0,.3,.02),this.headGroup.add(o);const c=this.box(.16,.12,.18,16755200);c.position.set(0,-.06,.3),this.headGroup.add(c);const l=this.box(.1,.18,.08,14492194);l.position.set(0,-.2,.26),this.headGroup.add(l),this.headGroup.position.set(0,.72,.25),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new ue,p=this.box(.12,.45,.5,16777215);p.position.y=-.225,d.add(p),d.position.set(h*.34,.35,0),d.rotation.z=-h*.2,this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new ue,p=this.box(.1,.4,.1,16763904);p.position.y=-.2;const f=this.box(.25,.06,.18,16763904);f.position.set(.05,-.43,.06),d.add(p,f),d.position.set(h*.14,.05,0),this.group.add(d),this.legs.push(d)}}buildCow(){const r=this.box(1.1,.85,1.5,8014378);r.position.set(0,.5,0),this.group.add(r);const a=this.box(.7,.5,1.2,14540253);a.position.set(0,.3,.01),this.group.add(a);const o=this.box(.76,.7,.72,8014378);this.headGroup.add(o);const c=this.box(.5,.32,.22,13135952);c.position.set(0,-.14,.4),this.headGroup.add(c);const l=this.box(.12,.1,.06,11161664);l.position.set(-.12,-.14,.52),this.headGroup.add(l);const h=l.clone();h.position.x=.12,this.headGroup.add(h);const d=this.box(.14,.14,.05,1118481);d.position.set(-.28,.14,.37),this.headGroup.add(d);const p=d.clone();p.position.x=.28,this.headGroup.add(p);const f=this.box(.1,.28,.1,14540253);f.position.set(-.3,.44,.04),this.headGroup.add(f);const _=f.clone();_.position.x=.3,this.headGroup.add(_);const v=this.box(.22,.16,.1,8014378);v.position.set(-.44,.26,.06),this.headGroup.add(v);const m=v.clone();m.position.x=.44,this.headGroup.add(m),this.headGroup.position.set(0,.92,.78),this.group.add(this.headGroup);const g=[[-.36,-.52],[.36,-.52],[-.36,.52],[.36,.52]];for(const[M,w]of g){const O=new ue,L=this.box(.34,.55,.34,8014378);L.position.y=-.275;const I=this.box(.34,.15,.36,2236962);I.position.y=-.55-.075,O.add(L,I),O.position.set(M,0,w),this.group.add(O),this.legs.push(O)}const E=this.box(.44,.2,.44,16765120);E.position.set(0,-.08,.1),this.group.add(E)}buildSheep(){const r=this.box(1,.95,1.35,14540253);r.position.set(0,.55,0),this.group.add(r);const a=this.box(.8,.55,.55,14540253);a.position.set(0,.72,-.5),this.group.add(a);const o=this.box(.8,.55,.55,14540253);o.position.set(0,.72,.5),this.group.add(o);const c=this.box(.56,.56,.56,10061943);this.headGroup.add(c);const l=this.box(.32,.26,.2,8943462);l.position.set(0,-.1,.32),this.headGroup.add(l);const h=this.box(.1,.1,.05,2236962);h.position.set(-.2,.1,.3),this.headGroup.add(h);const d=h.clone();d.position.x=.2,this.headGroup.add(d);const p=this.box(.52,.3,.5,14540253);p.position.set(0,.38,-.04),this.headGroup.add(p);const f=this.box(.1,.24,.18,8943462);f.position.set(-.34,.1,0),this.headGroup.add(f);const _=f.clone();_.position.x=.34,this.headGroup.add(_),this.headGroup.position.set(0,.88,.72),this.group.add(this.headGroup);const v=[[-.32,-.44],[.32,-.44],[-.32,.44],[.32,.44]];for(const[m,g]of v){const E=new ue,M=this.box(.28,.52,.28,8943462);M.position.y=-.26;const w=this.box(.28,.14,.3,3355443);w.position.y=-.52-.07,E.add(M,w),E.position.set(m,0,g),this.group.add(E),this.legs.push(E)}}buildCreeper(){const n=this.box(.9,1.2,.9,4885034);n.position.set(0,.6,0),this.group.add(n);const i=this.box(.88,.85,.88,4885034);this.headGroup.add(i);const r=this.box(.12,.14,.08,2775578);r.position.set(-.2,.1,.46),this.headGroup.add(r);const a=r.clone();a.position.x=.2,this.headGroup.add(a);const o=this.box(.12,.12,.08,2775578);o.position.set(-.2,-.15,.46),this.headGroup.add(o);const c=o.clone();c.position.x=.2,this.headGroup.add(c),this.headGroup.position.set(0,.88,.44),this.group.add(this.headGroup);const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]];for(const[h,d]of l){const p=new ue,f=this.box(.28,.58,.28,4885034);f.position.y=-.29,p.add(f),p.position.set(h,0,d),this.group.add(p),this.legs.push(p)}}buildSkeleton(){const e=this.box(.5,.75,.3,13421772);e.position.y=.3,this.group.add(e);const n=this.box(.4,.4,.4,13421772);this.headGroup.add(n);const i=this.box(.08,.08,.05,2236962);i.position.set(-.1,.05,.22),this.headGroup.add(i);const r=i.clone();r.position.x=.1,this.headGroup.add(r);const a=this.box(.08,.06,.05,2236962);a.position.set(-.1,-.1,.22),this.headGroup.add(a);const o=a.clone();o.position.x=.1,this.headGroup.add(o),this.headGroup.position.set(0,.65,0),this.group.add(this.headGroup);for(const c of[-1,1]){const l=new ue,h=this.box(.15,.5,.15,13421772);h.position.y=-.25;const d=this.box(.12,.45,.12,13421772);d.position.y=-.55-.225,l.add(h,d),l.position.set(c*.38,.2,0),this.group.add(l),this.arms.push(l)}for(const c of[-1,1]){const l=new ue,h=this.box(.15,.55,.15,13421772);h.position.y=-.275;const d=this.box(.13,.5,.13,13421772);d.position.y=-.55-.25,l.add(h,d),l.position.set(c*.15,-.45,0),this.group.add(l),this.legs.push(l)}}buildWitherSkeleton(){const n=this.box(.65,.9750000000000001,.39,1118481);n.position.y=.3*1.3,this.group.add(n);const i=this.box(.4*1.3,.4*1.3,.4*1.3,1118481);this.headGroup.add(i);const r=this.box(.08*1.3,.08*1.3,.05*1.3,17663);r.position.set(-.1*1.3,.05*1.3,.22*1.3);const a=r.material;a.emissive=new yt(17663),a.emissiveIntensity=.8,this.headGroup.add(r);const o=r.clone();o.position.x=.1*1.3,this.headGroup.add(o);const c=this.box(.08*1.3,.06*1.3,.05*1.3,2236962);c.position.set(-.1*1.3,-.1*1.3,.22*1.3),this.headGroup.add(c);const l=c.clone();l.position.x=.1*1.3,this.headGroup.add(l),this.headGroup.position.set(0,.65*1.3,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new ue,p=this.box(.15*1.3,.5*1.3,.15*1.3,1118481);p.position.y=-.25*1.3;const f=this.box(.12*1.3,.45*1.3,.12*1.3,1118481);if(f.position.y=-.55*1.3-.225*1.3,d.add(p,f),h===1){const _=this.box(.10400000000000001,.52,.195,8421504);_.position.set(.12*1.3,-.55*1.3,0),d.add(_)}d.position.set(h*.38*1.3,.2*1.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new ue,p=this.box(.15*1.3,.55*1.3,.15*1.3,1118481);p.position.y=-.275*1.3;const f=this.box(.13*1.3,.5*1.3,.13*1.3,1118481);f.position.y=-.55*1.3-.25*1.3,d.add(p,f),d.position.set(h*.15*1.3,-.45*1.3,0),this.group.add(d),this.legs.push(d)}}buildHorse(){const n=this.box(.9,.8,1.6,13149294);n.position.set(0,.45,0),this.group.add(n);const i=this.box(.4,.5,.6,13149294);this.headGroup.add(i);const r=this.box(.1,.1,.05,2236962);r.position.set(-.15,.1,.32),this.headGroup.add(r);const a=r.clone();a.position.x=.15,this.headGroup.add(a);const o=this.box(.12,.24,.08,5913130);o.position.set(-.18,.32,.1),this.headGroup.add(o);const c=o.clone();c.position.x=.18,this.headGroup.add(c),this.headGroup.position.set(0,.6,.8),this.group.add(this.headGroup);const l=new te(new zo(.3,.5),new Ue({color:5913130}));l.position.set(0,.8,.3),l.rotation.x=.3,this.group.add(l);const h=[[-.28,-.6],[.28,-.6],[-.28,.6],[.28,.6]];for(const[d,p]of h){const f=new ue,_=this.box(.2,.7,.2,13149294);_.position.y=-.35,f.add(_),f.position.set(d,.1,p),this.group.add(f),this.legs.push(f)}}buildVillager(){const i=this.box(.6,1,.4,8015658);i.position.y=.2,this.group.add(i);const r=this.box(.62,.95,.42,4885050);r.position.y=.22,this.group.add(r);const a=this.box(.5,.5,.5,16764057);this.headGroup.add(a);const o=this.box(.12,.12,.05,2236962);o.position.set(-.15,.08,.26),this.headGroup.add(o);const c=o.clone();c.position.x=.15,this.headGroup.add(c);const l=this.box(.1,.12,.08,8015658);l.position.set(0,-.05,.3),this.headGroup.add(l),this.headGroup.position.set(0,.75,0),this.group.add(this.headGroup);for(const h of[-1,1]){const d=new ue,p=this.box(.26,.5,.26,16764057);p.position.y=-.25;const f=this.box(.24,.45,.24,16764057);f.position.y=-.55-.225,d.add(p,f),d.position.set(h*.4,.3,0),this.group.add(d),this.arms.push(d)}for(const h of[-1,1]){const d=new ue,p=this.box(.26,.5,.26,8015658);p.position.y=-.25;const f=this.box(.26,.45,.26,8015658);f.position.y=-.55-.225,d.add(p,f),d.position.set(h*.15,-.5,0),this.group.add(d),this.legs.push(d)}}buildEnderDragon(){const r=this.box(2,1,4,1114146);r.scale.set(1.5,1.5,1.5),r.position.set(0,.6*1.5,0),this.group.add(r);const a=this.box(1,.8,1.2,1114146);this.headGroup.add(a);const o=this.box(.18,.18,.1,16729156);o.position.set(-.3,.15,.65);const c=new Ue({color:16729156,emissive:16729156,emissiveIntensity:.8});o.material=c,this.headGroup.add(o);const l=o.clone();l.position.x=.3,this.headGroup.add(l),this.headGroup.position.set(0,.8*1.5,.9*1.5),this.group.add(this.headGroup);for(const h of[-1,1]){const d=this.box(3,.2,2,2228275);d.scale.set(1.5,1.5,1.5),d.position.set(h*2*1.5,.6*1.5,0),this.group.add(d)}this.group.scale.set(1.5,1.5,1.5)}buildSpider(){const n=this.box(.8,.4,1.2,3355443);n.position.set(0,.2,0),this.group.add(n);const i=this.box(.4,.4,.4,3355443);i.position.set(0,.2,.65),this.group.add(i);const r=[[-.1,.35,.8],[.1,.35,.8],[-.1,.15,.8],[.1,.15,.8]];for(const[o,c,l]of r){const h=new te(new Bn(.06,8,8),new Ue({color:16724787}));h.position.set(o,c,l),this.group.add(h),this.bodyMeshes.push(h)}const a=[[-.4,.1,-.3],[-.4,.1,-.1],[-.4,.1,.1],[-.4,.1,.3],[.4,.1,-.3],[.4,.1,-.1],[.4,.1,.1],[.4,.1,.3]];for(let o=0;o<8;o++){const[c,l,h]=a[o],d=new ue,p=this.box(.1,.08,.6,3355443);p.position.set(0,0,.3),d.add(p),d.position.set(c,l,h),d.rotation.z=(o<4?-1:1)*Math.PI/4,this.group.add(d),this.legs.push(d)}}buildWolf(){const i=this.box(.8,.6,1.2,8947848);i.position.set(0,.45,0),this.group.add(i);const r=this.box(.5,.5,.5,8947848);this.headGroup.add(r);const a=this.box(.1,.1,.05,2236962);a.position.set(-.15,.12,.28);const o=a.clone();o.position.x=.15,this.headGroup.add(a,o);const c=this.box(.28,.2,.16,14540253);c.position.set(0,-.08,.32),this.headGroup.add(c);const l=this.box(.12,.22,.08,8947848);l.position.set(-.22,.32,.08);const h=l.clone();h.position.x=.22,this.headGroup.add(l,h),this.headGroup.position.set(0,.72,.6),this.group.add(this.headGroup);const d=[[-.25,-.4],[.25,-.4],[-.25,.4],[.25,.4]];for(const[f,_]of d){const v=new ue,m=this.box(.18,.5,.18,8947848);m.position.y=-.25,v.add(m),v.position.set(f,0,_),this.group.add(v),this.legs.push(v)}const p=this.box(.1,.08,.7,8947848);p.position.set(0,.2,-.8),this.group.add(p)}buildCat(){const i=this.box(.6,.4,.9,14518323);i.position.set(0,.35,0),this.group.add(i);const r=this.box(.4,.4,.35,14518323);this.headGroup.add(r);const a=this.box(.09,.09,.04,2236962);a.position.set(-.12,.08,.22);const o=a.clone();o.position.x=.12,this.headGroup.add(a,o);const c=this.box(.08,.18,.06,14518323);c.position.set(-.16,.26,.05);const l=c.clone();l.position.x=.16,this.headGroup.add(c,l);const h=this.box(.06,.06,.04,16751018);h.position.set(0,-.06,.25),this.headGroup.add(h),this.headGroup.position.set(0,.6,.4),this.group.add(this.headGroup);const d=[[-.18,-.28],[.18,-.28],[-.18,.28],[.18,.28]];for(const[f,_]of d){const v=new ue,m=this.box(.12,.38,.12,14518323);m.position.y=-.19,v.add(m),v.position.set(f,0,_),this.group.add(v),this.legs.push(v)}const p=this.box(.08,.06,.6,14518323);p.position.set(0,.1,-.6),this.group.add(p)}buildPhantom(){const i=this.box(1.2,.3,2,1721429);i.position.y=0,this.group.add(i);const r=this.box(2,.1,.8,1717060);r.position.set(-1,-.05,0),this.group.add(r);const a=this.box(2,.1,.8,1717060);a.position.set(1,-.05,0),this.group.add(a);const o=new te(new Bn(.1,8,8),new Ue({color:4521796,emissive:4521796}));o.position.set(-.3,.1,.8),this.bodyMeshes.push(o),this.group.add(o);const c=o.clone();c.position.x=.3,this.bodyMeshes.push(c),this.group.add(c)}buildSlime(){const r=new te(new Te(1.2,1.2,1.2),new Ue({color:4500036,transparent:!0,opacity:.8}));r.position.y=0,this.bodyMeshes.push(r),this.group.add(r);const a=this.box(.7,.7,.7,6736998);a.position.y=0,this.group.add(a);const o=new te(new Bn(.15,8,8),new Ue({color:16777215}));o.position.set(-.25,.25,.5),this.bodyMeshes.push(o),this.group.add(o);const c=o.clone();c.position.x=.25,this.bodyMeshes.push(c),this.group.add(c);const l=new te(new Bn(.06,8,8),new Ue({color:0}));l.position.set(-.25,.25,.62),this.bodyMeshes.push(l),this.group.add(l);const h=l.clone();h.position.x=.25,this.bodyMeshes.push(h),this.group.add(h)}buildHpBar(){const t=document.createElement("canvas");t.width=128,t.height=16,this.renderHpCanvas(t.getContext("2d"),t.width,t.height,1);const e=new Ns(t),n=new Po({map:e,transparent:!0,depthTest:!1}),i=new Ec(n);i.scale.set(1.2,.18,1);const r={pig:1.4,chicken:1,zombie:1.6,cow:1.8,sheep:1.7,creeper:1.9,skeleton:1.9,witherskeleton:2.5,horse:2.2,villager:1.8,enderdragon:3.5,spider:.8,wolf:1.5,cat:1.2,phantom:1.5,slime:1.5};return i.position.y=r[this.type]??1.6,i}renderHpCanvas(t,e,n,i){t.clearRect(0,0,e,n),t.fillStyle="#111",t.fillRect(0,0,e,n),t.fillStyle=i>.5?"#22dd22":i>.25?"#ddcc00":"#dd2222",t.fillRect(1,1,Math.max(0,(e-2)*i),n-2)}update(t){if(!this.alive)return;this.group.position.lerp(this.targetPos,Math.min(1,t*9));const e=(this.targetRotY-this.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.group.rotation.y+=e*Math.min(1,t*7);const n=this.group.position.x-this.prevPos.x,i=this.group.position.z-this.prevPos.z,r=Math.sqrt(n*n+i*i);this.prevPos.copy(this.group.position);const a=r/t;a>.15&&(this.walkCycle+=t*Math.min(a,10)*2.5);const o=Math.sin(this.walkCycle),c=.55;if(this.type==="pig"||this.type==="creeper"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=o*c*(h===0?1:-1)*.5}this.headGroup.rotation.x=Math.abs(o)*.08}else if(this.type==="zombie"){this.legs.length>=2&&(this.legs[0].rotation.x=o*c,this.legs[1].rotation.x=-o*c);for(const l of this.arms)l.rotation.z+=Math.sin(this.walkCycle*.5)*.005}else if(this.type==="cow"||this.type==="sheep"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(o)*.06}else if(this.type==="chicken"){this.legs.length>=2&&(this.legs[0].rotation.x=o*.7,this.legs[1].rotation.x=-o*.7);for(let l=0;l<this.arms.length;l++)this.arms[l].rotation.z=-(l===0?-1:1)*(.2+Math.abs(o)*.3);this.headGroup.position.y=.72+Math.abs(o)*.05}else if(this.type==="skeleton")this.legs.length>=2&&(this.legs[0].rotation.x=o*c,this.legs[1].rotation.x=-o*c);else if(this.type==="spider")for(let l=0;l<this.legs.length;l++){const h=l%2===0?0:Math.PI;this.legs[l].rotation.y=Math.sin(this.walkCycle+h)*.3}else if(this.type==="wolf"||this.type==="cat"){for(let l=0;l<this.legs.length;l++){const h=l===0||l===3?0:Math.PI;this.legs[l].rotation.x=Math.sin(this.walkCycle+h)*c*.5}this.headGroup.rotation.x=Math.abs(o)*.05}else if(this.type==="slime"){const l=this.walkCycle/2.5,h=.3*Math.abs(Math.sin(l*Math.PI/.5));this.group.position.y=this.targetPos.y+h}}setCreeperFuse(t){if(this.type!=="creeper")return;const e=1+t*.4;this.group.scale.setScalar(e);const n=2+t*12,r=Math.sin(Date.now()*.001*n*Math.PI*2)>0&&t>.1?16777215:Wa.creeper;for(const a of this.bodyMeshes)a.material.color.set(r)}showDamage(t){this.health=t,this.hpSprite.visible=!0;const e=this.hpSprite.material.map.image,n=e.getContext("2d");this.renderHpCanvas(n,e.width,e.height,t/this.maxHealth),this.hpSprite.material.map.needsUpdate=!0;const i=Wa[this.type]??16777215,r=this.type==="creeper"?9095770:this.type==="skeleton"||this.type==="witherskeleton"?16777215:this.type==="enderdragon"?16746496:16729156;for(const a of this.bodyMeshes)a.material.color.set(r);setTimeout(()=>{for(const a of this.bodyMeshes)a.material.color.set(i);t>=this.maxHealth&&(this.hpSprite.visible=!1)},200)}die(){this.alive=!1,this.hpSprite.visible=!1;const t=Date.now(),e=1200,n=()=>{const i=Date.now()-t,r=Math.min(i/e,1);this.group.rotation.z=r*(Math.PI/2),this.group.position.y=this.targetPos.y-r*.5;const a=1-r*.3;if(this.group.scale.setScalar(a),i%200<100)for(const o of this.bodyMeshes)o.material.color.set(16720418);else{const o=Wa[this.type]??16777215;for(const c of this.bodyMeshes)c.material.color.set(o)}r<1?requestAnimationFrame(n):setTimeout(()=>{this.group.visible=!1},500)};n()}dispose(t){t.remove(this.group),this.bodyMeshes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function hn(s,t){return s+Math.random()*(t-s)}function bx(){return Math.random().toString(36).slice(2,10)}const $h=8,Ax=30,Jh=60,Tx=-20,wx=new Te(.1,.1,.4),Cx=new Ue({color:16768256}),Qh=new U,vi=class vi{constructor(t,e,n,i){C(this,"mobs",new Map);C(this,"scene");C(this,"world");C(this,"cb");C(this,"singleplayer");C(this,"arrows",[]);C(this,"dayTime",.5);C(this,"attackCooldown",0);this.scene=t,this.world=e,this.cb=n,this.singleplayer=i}spawnMob(t,e,n,i,r){const a=r??bx(),o=t==="zombie"||t==="creeper"||t==="skeleton"?20:t==="witherskeleton"?40:t==="chicken"?4:t==="cow"?16:t==="sheep"?12:t==="horse"?30:t==="villager"?20:t==="enderdragon"?200:t==="spider"?16:t==="wolf"?20:t==="cat"?10:t==="phantom"?20:t==="slime"?16:10,c={id:a,type:t,x:e,y:n,z:i,rotY:hn(0,Math.PI*2),health:o,maxHealth:o,alive:!0,state:"idle"},l=new Kh(this.scene,c);return this.mobs.set(a,{data:c,mob:l,velY:0,timer:0,aggro:!1,shootTimer:0,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0}),l}spawnRandom(t,e){if(this.mobs.size>=$h)return;const n=hn(0,Math.PI*2),i=hn(12,Ax),r=t+Math.cos(n)*i,a=e+Math.sin(n)*i,o=this.dayTime<.25||this.dayTime>.73;let c,l;const h=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(r),Math.round(a)):20,d=Math.round(h)+1,p=this.world.getBlockType?this.world.getBlockType(Math.round(r),d+1,Math.round(a)):void 0,f=h<15||p!==void 0&&p!==0;if(o&&Math.random()<.15)c=20+hn(0,10),l="phantom";else if(c=d+.5,f&&Math.random()<.08)l="slime";else if(f){const _=Math.random();l=_<.3?"zombie":_<.55?"skeleton":_<.75?"spider":_<.9?"creeper":"witherskeleton"}else if(o){const _=Math.random();l=_<.25?"zombie":_<.45?"skeleton":_<.6?"creeper":_<.75?"spider":_<.85?"witherskeleton":_<.9?"pig":_<.95?"cow":"sheep"}else{const _=Math.random();l=_<.25?"pig":_<.45?"chicken":_<.6?"cow":_<.75?"sheep":_<.85?"horse":_<.92?"wolf":"cat"}this.spawnMob(l,r,c,a)}syncFromServer(t){const e=new Set;for(const n of t){e.add(n.id);const i=this.mobs.get(n.id);if(i)i.mob.targetPos.set(n.x,n.y,n.z),i.mob.targetRotY=n.rotY,i.data=n;else{const r=new Kh(this.scene,n);this.mobs.set(n.id,{data:n,mob:r,velY:0,timer:0,aggro:!1,hitCooldown:0,_surfCacheX:NaN,_surfCacheZ:NaN,_surfCacheY:0})}}for(const[n,i]of this.mobs)e.has(n)||(i.mob.dispose(this.scene),this.mobs.delete(n))}onMobHit(t,e){const n=this.mobs.get(t);n&&(n.mob.showDamage(e),e<=0&&n.mob.die())}tryAttack(t,e){if(this.attackCooldown>0)return null;const n=[],i=new Map;for(const[l,h]of this.mobs)h.mob.alive&&h.mob.group.traverse(d=>{d.isMesh&&(n.push(d),i.set(d,l))});const r=t.intersectObjects(n);if(!r.length)return null;const a=i.get(r[0].object);if(!a)return null;const o=this.mobs.get(a);let c=5;return e!=null&&e.sharpness&&(c+=2*e.sharpness),o.mob.health-=c,o.mob.showDamage(o.mob.health),o.mob.health<=0&&o.mob.die(),this.attackCooldown=.4,{mobId:a,damage:c}}update(t){this.attackCooldown=Math.max(0,this.attackCooldown-t);const e=this.cb.getPlayerPos();for(const[n,i]of this.mobs){if(i.hitCooldown>0&&(i.hitCooldown=Math.max(0,i.hitCooldown-t)),i.mob.update(t),!i.mob.alive)continue;if(this.singleplayer&&vi.UNDEAD_TYPES.has(i.data.type)&&this.dayTime>=.25&&this.dayTime<=.73){const c=this.world.getSurfaceHeight?this.world.getSurfaceHeight(Math.round(i.data.x),Math.round(i.data.z)):20;if(i.data.y>=c-2&&(i.mob.health-=4*t,i.mob.showDamage(i.mob.health),i.mob.health<=0)){i.mob.die();continue}}if(this.singleplayer){const o=i.mob.targetPos.x-e.x,c=i.mob.targetPos.z-e.z;o*o+c*c<=32*32&&this.runAI(i,t,e)}const r=i.data.x-e.x,a=i.data.z-e.z;r*r+a*a>Jh*Jh&&(i.mob.dispose(this.scene),this.mobs.delete(n))}for(let n=this.arrows.length-1;n>=0;n--){const i=this.arrows[n];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);const r=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,o=i.mesh.position.z-e.z;r*r+a*a+o*o<.64?(this.cb.onPlayerDamage(1),this.scene.remove(i.mesh),this.arrows.splice(n,1)):i.life<=0&&(this.scene.remove(i.mesh),this.arrows.splice(n,1))}this.singleplayer&&Math.random()<t*.04&&this.mobs.size<$h&&this.spawnRandom(e.x,e.z)}moveToward(t,e,n,i,r){const a=t.data,o=e-a.x,c=n-a.z,l=Math.atan2(o,c);a.rotY=l;const h=Math.sin(l)*.8,d=Math.cos(l)*.8,p=Math.round(a.x+h),f=Math.round(a.z+d),_=Math.round(a.y),v=this.world.getBlockType(p,_,f),m=this.world.getBlockType(p,_+1,f);if(v&&v!==7&&v!==0){if(!m||m===7||m===0)return t.velY===0&&(t.velY=7.5),a.x+=Math.sin(l)*i*r,a.z+=Math.cos(l)*i*r,!0;{const g=l+(Math.random()<.5?Math.PI/2:-Math.PI/2);return a.rotY=g,a.x+=Math.sin(g)*i*.5*r,a.z+=Math.cos(g)*i*.5*r,!1}}return a.x+=Math.sin(l)*i*r,a.z+=Math.cos(l)*i*r,!0}runAI(t,e,n){const i=t.data;t.timer-=e;const r=n.x-i.x,a=n.z-i.z,o=r*r+a*a;if(i.type==="enderdragon")this.enderdragonAI(t,e);else if(i.type==="phantom")this.phantomAI(t,e,n);else{i.y+=t.velY*e,t.velY+=Tx*e;const c=Math.round(i.x),l=Math.round(i.z);(c!==t._surfCacheX||l!==t._surfCacheZ)&&(t._surfCacheX=c,t._surfCacheZ=l,t._surfCacheY=this.world.getSurfaceHeight?this.world.getSurfaceHeight(c,l)+.5:0);const h=t._surfCacheY;if(i.y<=h&&(i.y=h,t.velY=0),i.type==="pig"||i.type==="chicken"||i.type==="cow"||i.type==="sheep"){const d=i.type==="chicken"?3.5:i.type==="cow"?2:i.type==="sheep"?2.2:2.5;this.animalAI(t,e,o,r,a,d)}else i.type==="horse"?this.horseAI(t,e,o,r,a,n):i.type==="villager"?this.villagerAI(t,e,n):i.type==="zombie"?this.zombieAI(t,e,o,r,a,n):i.type==="creeper"?this.creeperAI(t,e,o,n):i.type==="skeleton"?this.skeletonAI(t,e,o,r,a,n):i.type==="witherskeleton"?this.witherskeletonAI(t,e,o,r,a,n):i.type==="spider"?this.spiderAI(t,e,o,r,a,n):i.type==="wolf"?this.wolfAI(t,e,o,r,a,n):i.type==="cat"?this.catAI(t,e,o,r,a,n):i.type==="slime"&&this.slimeAI(t,e,o,r,a,n)}t.mob.targetPos.set(i.x,i.y,i.z),t.mob.targetRotY=i.rotY}animalAI(t,e,n,i,r,a){const o=t.data;if(n<25&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){const c=o.rotY+Math.PI;o.x+=Math.sin(c)*a*e,o.z+=Math.cos(c)*a*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"?t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(o.x+=Math.sin(o.rotY)*a*e,o.z+=Math.cos(o.rotY)*a*e,t.timer<=0&&(o.state="idle",t.timer=hn(2,5)))}horseAI(t,e,n,i,r,a){const o=t.data,c=5;let l=!1;for(const h of this.mobs.values())if(h.data.type==="zombie"||h.data.type==="skeleton"){const d=h.data.x-o.x,p=h.data.z-o.z;if(d*d+p*p<225){l=!0;break}}if(l&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){let h=0,d=0;for(const p of this.mobs.values())if((p.data.type==="zombie"||p.data.type==="skeleton")&&p.data.id!==o.id){h=p.data.x,d=p.data.z;break}(h!==0||d!==0)&&(o.rotY=Math.atan2(o.x-h,o.z-d)),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"?t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)):(o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,t.timer<=0&&(o.state="idle",t.timer=hn(2,5)))}zombieAI(t,e,n,i,r,a){const o=t.data,c=2.8;n<144?(o.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),n<3.24&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):this.animalAI(t,e,n,i,r,1.5)}creeperAI(t,e,n,i){const r=t.data,a=2.5;if(n<100?r.state!=="fusing"&&(r.state="fusing",t.timer=vi.CREEPER_FUSE_TIME):r.state==="fusing"&&(r.state="idle",t.timer=hn(1.5,4),t.mob.setCreeperFuse(0)),r.state==="fusing"){this.moveToward(t,i.x,i.z,a,e);const o=1-t.timer/vi.CREEPER_FUSE_TIME;t.mob.setCreeperFuse(Math.max(0,Math.min(1,o))),t.timer<=0&&this.explode(t,i)}else t.timer<=0&&(r.state=Math.random()<.5?"walking":"idle",r.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),r.state==="walking"&&(r.x+=Math.sin(r.rotY)*a*e,r.z+=Math.cos(r.rotY)*a*e)}explode(t,e){const n=t.data,i=5,r=5,a=e.x-n.x,o=e.y-n.y,c=e.z-n.z;a*a+o*o+c*c<r*r&&this.cb.onPlayerDamage(4),this.cb.onExplosion(n.x,n.y,n.z,i),t.mob.die()}skeletonAI(t,e,n,i,r,a){const o=t.data,c=1.8,l=400,h=16,d=2;if(t.shootTimer=(t.shootTimer??0)-e,n<l)if(o.state="attacking",t.aggro=!0,t.shootTimer<=0&&(this.shootArrow(o.x,o.y+.5,o.z,a),t.shootTimer=d),n<h){const p=o.rotY+Math.PI;o.x+=Math.sin(p)*c*e,o.z+=Math.cos(p)*c*e}else o.rotY=Math.atan2(i,r);else n>625&&t.timer<=0&&(o.state="idle",t.aggro=!1);o.state!=="attacking"&&(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e))}witherskeletonAI(t,e,n,i,r,a){var d,p;const o=t.data,c=4,l=4,h=400;t.shootTimer=(t.shootTimer??0)-e,n<h?(o.state="chasing",t.aggro=!0,this.moveToward(t,a.x,a.z,c,e),n<l&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(2),t.hitCooldown=2.5,(p=(d=this.cb).onWitherEffect)==null||p.call(d))):n>625&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state!=="chasing"&&(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*.5*e,o.z+=Math.cos(o.rotY)*c*.5*e))}shootArrow(t,e,n,i){const r=new te(wx,Cx);r.position.set(t,e,n),Qh.set(i.x-t,i.y-e,i.z-n).normalize();const o=Qh.clone().multiplyScalar(15);this.scene.add(r),this.arrows.push({mesh:r,vel:o,life:3})}enderdragonAI(t,e){const n=t.data,i=this.cb.getPlayerPos();if(n.state||(n.state="circling"),t.timer||(t.timer=0),t.dragonTimer||(t.dragonTimer=0),n.state==="circling"){t.timer+=e*.4;const r=15,a=i.x+Math.sin(t.timer)*r,o=25+Math.sin(t.timer*2)*3,c=i.z+Math.cos(t.timer)*r,l=3;n.x+=(a-n.x)*l*e,n.y+=(o-n.y)*l*e,n.z+=(c-n.z)*l*e,t.dragonTimer+=e,t.dragonTimer>8&&(n.state="diving",t.dragonTimer=0)}else if(n.state==="diving"){n.x+=(i.x-n.x)*8*e,n.y+=(i.y-n.y)*8*e,n.z+=(i.z-n.z)*8*e;const a=i.x-n.x,o=i.z-n.z;a*a+o*o<16&&(this.cb.onPlayerDamage(3),n.state="circling",t.dragonTimer=0),t.dragonTimer+=e,t.dragonTimer>4&&(n.state="circling",t.dragonTimer=0)}n.y=Math.max(15,n.y)}spiderAI(t,e,n,i,r,a){const o=t.data,c=3.5,l=225,h=9,d=3;t.jumpTimer||(t.jumpTimer=0),n<l?(o.state="chasing",t.aggro=!0):n>400&&t.timer<=0&&(o.state="idle",t.aggro=!1),o.state==="chasing"?(this.moveToward(t,a.x,a.z,c,e),t.jumpTimer-=e,n<h&&t.jumpTimer<=0&&(t.velY=8,t.jumpTimer=d),n<2.25&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=2.5)):(t.timer<=0&&(o.state=Math.random()<.5?"walking":"idle",o.rotY=Math.random()*Math.PI*2,t.timer=hn(1.5,4)),o.state==="walking"&&(o.x+=Math.sin(o.rotY)*c*.6*e,o.z+=Math.cos(o.rotY)*c*.6*e)),this.cb.getPlayerPos().y<10||n>225}villagerAI(t,e,n){const i=t.data,r=n.x-i.x,a=n.z-i.z;r*r+a*a<100&&(i.rotY=Math.atan2(r,a))}wolfAI(t,e,n,i,r,a){const o=t.data,c=4;if(o.state!=="tamed")if(n<4&&(o.state="fleeing",t.timer=3),o.state==="fleeing"){const l=o.rotY+Math.PI;o.x+=Math.sin(l)*c*e,o.z+=Math.cos(l)*c*e,t.timer<=0&&(o.state="idle")}else o.state==="idle"&&(t.timer<=0&&(o.rotY+=(Math.random()-.5)*Math.PI,t.timer=3+Math.random()*3),o.x+=Math.sin(o.rotY)*1.5*e,o.z+=Math.cos(o.rotY)*1.5*e);else n>25?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e,o.state="following"):o.state="sitting"}catAI(t,e,n,i,r,a){const o=t.data,c=2.5;o.state!=="tamed"?o.state==="idle"?(t.timer<=0&&(o.rotY+=(Math.random()-.5)*Math.PI,t.timer=4+Math.random()*4,Math.random()<.3&&(o.state="sitting")),o.x+=Math.sin(o.rotY)*1*e,o.z+=Math.cos(o.rotY)*1*e):o.state==="sitting"&&t.timer<=0&&(o.state="idle"):n>64?(o.rotY=Math.atan2(i,r),o.x+=Math.sin(o.rotY)*c*e,o.z+=Math.cos(o.rotY)*c*e):o.state="sitting"}phantomAI(t,e,n){const i=t.data;if(!(this.dayTime<.25||this.dayTime>.73)){i.y=Math.min(i.y+5*e,255);return}const a=n.x-i.x,o=n.z-i.z,c=a*a+o*o;i.y<20&&(i.y+=3*e),i.y>30&&(i.y-=3*e);let l=!1;for(const h of this.mobs.values())if(h.data.type==="cat"&&h.data.state==="tamed"){const d=h.data.x-i.x,p=h.data.z-i.z,f=h.data.y-i.y;if(d*d+p*p+f*f<100){l=!0;break}}if(l){const h=Math.atan2(i.x-n.x,i.z-n.z);i.x+=Math.sin(h)*8*e,i.z+=Math.cos(h)*8*e,i.state="fleeing";return}if(i.state==="diving"){t.timer-=e;const h=Math.atan2(a,o);i.rotY=h,i.x+=Math.sin(h)*12*e,i.z+=Math.cos(h)*12*e,i.y-=8*e,c<1&&i.y<=n.y+1&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=3,i.state="ascending",t.timer=5),(t.timer<=0||i.y<10)&&(i.state="ascending",t.timer=3)}else i.state==="ascending"?(t.timer-=e,i.y+=5*e,(t.timer<=0||i.y>30)&&(i.state="patrolling",t.timer=hn(8,12))):(t.timer-=e,c<400&&t.timer<=0&&(i.state="diving",t.timer=3),i.x+=Math.sin(i.rotY)*3*e,i.z+=Math.cos(i.rotY)*3*e)}slimeAI(t,e,n,i,r,a){const o=t.data,c=4.5;if(n>144){o.state="idle";return}if(t.timer-=e,t.timer<=0){const l=Math.atan2(i,r);o.rotY=l,o.x+=Math.sin(l)*c*e,o.z+=Math.cos(l)*c*e,t.velY=6,o.state="hopping",t.timer=.8}t.velY<0&&n<4&&t.hitCooldown<=0&&(this.cb.onPlayerDamage(1),t.hitCooldown=1.5)}getAllMobsForDisplay(){return Array.from(this.mobs.entries()).map(([t,e])=>({id:t,mob:e.mob}))}iterMobs(){return this.mobs.values()}getMob(t){var e;return(e=this.mobs.get(t))==null?void 0:e.mob}getMobCount(){return this.mobs.size}getMobsByType(t){return Array.from(this.mobs.entries()).filter(([,e])=>e.data.type===t&&e.mob.alive).map(([e,n])=>({id:e,mob:n.mob}))}spawnAt(t,e,n,i){return this.spawnMob(t,e,n,i)}dispose(){for(const[,t]of this.mobs)t.mob.dispose(this.scene);this.mobs.clear()}};C(vi,"HOSTILE_TYPES",new Set(["zombie","skeleton","creeper","spider","witherskeleton","phantom"])),C(vi,"UNDEAD_TYPES",new Set(["zombie","skeleton","witherskeleton","phantom"])),C(vi,"CREEPER_FUSE_TIME",1.5);let Lo=vi;class Rx{constructor(){C(this,"hotbarEl",document.getElementById("hotbar"));C(this,"topLeftEl",document.getElementById("topLeft"));C(this,"topRightEl",document.getElementById("topRight"));C(this,"connEl",document.getElementById("connStatus"));C(this,"blockNameEl",document.getElementById("blockName"));C(this,"chatMsgsEl",document.getElementById("chatMessages"));C(this,"chatInput",document.getElementById("chatInput"));C(this,"heartsEl",document.getElementById("hearts"));C(this,"hungerEl",document.getElementById("hunger"));C(this,"timeEl",document.getElementById("timeDisplay"));C(this,"gameModeEl",document.getElementById("gameModeEl"));C(this,"deathScreen",document.getElementById("deathScreen"));C(this,"respawnBtn",document.getElementById("respawnBtn"));C(this,"selectedIndex",0);C(this,"gameMode","survival");C(this,"craftingPanel",null);C(this,"inventoryPanel",null);C(this,"xpBarEl",null);C(this,"xpLevelEl",null);C(this,"dayCounterEl",null);C(this,"dayNotifyEl",null);C(this,"_lastLevel",-1);C(this,"_lastDay",-1);C(this,"debugScreenEl",null);C(this,"debugVisible",!1);C(this,"_lastHp",-1);C(this,"_lastMaxHp",-1);C(this,"_lastWither",!1);C(this,"_lastHunger",-1);C(this,"_lastMaxHunger",-1);C(this,"_lastTimeStr","");C(this,"_lastTimeDayTime",-1);C(this,"_lastPosX",NaN);C(this,"_lastPosY",NaN);C(this,"_lastPosZ",NaN);C(this,"_posXEl",null);C(this,"_posYEl",null);C(this,"_posZEl",null);C(this,"onChat");C(this,"onRespawn");C(this,"onCraft");C(this,"getInvCount");C(this,"tooltipEl",document.getElementById("hotbarTooltip"));C(this,"tooltipTimer",null);C(this,"chestPanel",null);C(this,"onChestClose");C(this,"onChestTransfer");C(this,"smeltingPanel",null);C(this,"onSmelt");C(this,"killFeedEl",null);C(this,"playerListPanel",null);C(this,"enchantPanel",null);C(this,"onEnchant",null);C(this,"tradePanel",null);C(this,"onTrade",null);C(this,"bossBarEl",null);C(this,"scoreboardPanel",null);this.buildHotbar(),this.setupChat(),this.updateHearts(20,20),this.buildXPBar(),this._posXEl=document.createElement("span"),this._posYEl=document.createElement("span"),this._posZEl=document.createElement("span"),this.topLeftEl.innerHTML="";const t=document.createElement("span");t.textContent="X ",t.appendChild(this._posXEl),this.topLeftEl.appendChild(t),this.topLeftEl.appendChild(document.createElement("br"));const e=document.createElement("span");e.textContent="Y ",e.appendChild(this._posYEl),this.topLeftEl.appendChild(e),this.topLeftEl.appendChild(document.createElement("br"));const n=document.createElement("span");n.textContent="Z ",n.appendChild(this._posZEl),this.topLeftEl.appendChild(n),this.respawnBtn.addEventListener("click",()=>{var i;this.deathScreen.style.display="none",(i=this.onRespawn)==null||i.call(this)})}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<8;t++){const e=document.createElement("div");e.className="hotbar-slot"+(t===0?" active":""),e.dataset.index=String(t);const n=document.createElement("div");n.className="slot-icon",n.style.background="transparent";const i=document.createElement("span");i.textContent=String(t+1),e.appendChild(n),e.appendChild(i),this.hotbarEl.appendChild(e),e.addEventListener("click",()=>this.selectSlot(t))}}updateHotbarFromInventory(t,e){this.hotbarEl.querySelectorAll(".hotbar-slot").forEach((i,r)=>{const a=i.querySelector(".slot-icon");if(!a)return;const o=t[r]??0;if(o===0){a.style.background="transparent",a.title="";const c=i.querySelector(".item-count");c&&(c.textContent="")}else{a.style.background="#"+cr(o).toString(16).padStart(6,"0"),a.title=si(o);let c=i.querySelector(".item-count");c||(c=document.createElement("span"),c.className="item-count",c.style.cssText="position:absolute;bottom:1px;right:2px;font-size:9px;color:#fff;text-shadow:1px 1px 0 #000;pointer-events:none;",i.appendChild(c));const l=e?e[r]??1:1;c.textContent=l>1?String(l):""}})}selectSlot(t){this.selectedIndex=t,document.querySelectorAll(".hotbar-slot").forEach((i,r)=>{i.classList.toggle("active",r===t)}),this.blockNameEl.textContent="";const e=this.hotbarEl.querySelectorAll(".slot-icon")[t],n=e==null?void 0:e.title;return n&&this.tooltipEl&&(this.tooltipEl.textContent=n,this.tooltipEl.style.opacity="1",this.tooltipTimer&&clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout(()=>{this.tooltipEl&&(this.tooltipEl.style.opacity="0")},1500)),t}getSelectedBlock(){return this.selectedIndex}updatePosition(t,e,n){const i=Math.round(t*10)/10,r=Math.round(e*10)/10,a=Math.round(n*10)/10;i===this._lastPosX&&r===this._lastPosY&&a===this._lastPosZ||(this._lastPosX=i,this._lastPosY=r,this._lastPosZ=a,this._posXEl&&(this._posXEl.textContent=i.toFixed(1)),this._posYEl&&(this._posYEl.textContent=r.toFixed(1)),this._posZEl&&(this._posZEl.textContent=a.toFixed(1)))}updatePlayerCount(t){this.topRightEl.innerHTML=`<span style="color:#7cfc00">👥 ${t} online</span>`}setConnectionStatus(t){this.connEl.className=t;const e={connecting:"⏳ Connecting…",connected:"✓ Connected",disconnected:"✗ Disconnected"};this.connEl.textContent=e[t],this.connEl.style.opacity="1",t==="connected"&&setTimeout(()=>{this.connEl.style.opacity="0"},2500)}updateHearts(t,e,n=!1){if(t===this._lastHp&&e===this._lastMaxHp&&n===this._lastWither)return;this._lastHp=t,this._lastMaxHp=e,this._lastWither=n,this.heartsEl.innerHTML="";const i=Math.ceil(e/2),r=Math.floor(t/2),a=t%2===1;for(let o=0;o<i;o++){const c=document.createElement("div");c.className="heart",n&&c.classList.add("wither"),o<r?c.classList.add("full"):o===r&&a?c.classList.add("half"):c.classList.add("empty"),this.heartsEl.appendChild(c)}t<=6&&t>0?document.body.style.boxShadow=`inset 0 0 60px rgba(200,0,0,${.1+(6-t)*.05})`:document.body.style.boxShadow=""}showDeath(t="You died",e=0,n=0,i=0,r=0){this.deathScreen.style.display="flex",document.exitPointerLock();const a=this.deathScreen.querySelector(".death-message");a&&(a.textContent=t);const o=this.deathScreen.querySelector(".death-coords");o&&(o.textContent=`You died at X=${Math.round(e)}, Y=${Math.round(n)}, Z=${Math.round(i)}`);const c=this.deathScreen.querySelector(".death-score");c&&(c.textContent=`Level: ${r}`)}updateHunger(t,e){if(t===this._lastHunger&&e===this._lastMaxHunger)return;this._lastHunger=t,this._lastMaxHunger=e,this.hungerEl.innerHTML="";const n=Math.ceil(e/2),i=Math.floor(t/2),r=t%2===1;for(let a=0;a<n;a++){const o=document.createElement("div");o.className="hunger-icon",a<i?o.classList.add("full"):a===i&&r?o.classList.add("half"):o.classList.add("empty"),this.hungerEl.appendChild(o)}}updateTime(t){if(Math.abs(t-this._lastTimeDayTime)<7e-4)return;this._lastTimeDayTime=t;const e=(t*24+6)%24,n=Math.floor(e),i=Math.floor((e-n)*60),r=n>=12?"PM":"AM",a=n%12||12,o=i<10?i===0?"00":"0"+i:""+i;let c="☀️";t<.2||t>.8?c="🌙":(t<.3||t>.7)&&(c="🌅");const l=`${c} ${a}:${o} ${r}`;l!==this._lastTimeStr&&(this._lastTimeStr=l,this.timeEl.textContent=l)}setGameMode(t){this.gameMode=t,this.gameModeEl.textContent=t==="creative"?"✈ Creative":t==="spectator"?"👁 Spectator":"⚔ Survival",this.gameModeEl.className=`gamemode-badge ${t}`;const e=t==="creative"||t==="spectator";this.heartsEl.style.display=e?"none":"flex",this.hungerEl.style.display=e?"none":"flex"}buildXPBar(){this.xpBarEl=document.createElement("div"),this.xpBarEl.id="xp-bar",this.xpBarEl.style.cssText=`
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
    `,document.body.appendChild(this.xpBarEl),document.body.appendChild(e),document.body.appendChild(this.dayNotifyEl)}updateXP(t,e){if(!this.xpBarEl)return;const n=(e+1)*10,i=t-e*10,r=Math.min(100,i/n*100),a=this.xpBarEl.querySelector("#xp-bar-fill");a&&(a.style.width=r+"%"),this.xpLevelEl&&(this.xpLevelEl.textContent=`${e}`,e>this._lastLevel&&this._lastLevel>=0&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1.5)",this.xpLevelEl.style.color="#ffff44",a&&(a.style.boxShadow="0 0 16px rgba(255,255,68,0.8)"),setTimeout(()=>{this.xpLevelEl&&(this.xpLevelEl.style.transform="translateX(-50%) scale(1)",this.xpLevelEl.style.color="#88ff44"),a&&(a.style.boxShadow="0 0 6px rgba(136,255,68,0.4)")},500)),this._lastLevel=e)}updateDayCounter(t){t!==this._lastDay&&(this.dayCounterEl&&(this.dayCounterEl.textContent=`Day ${t}`),this._lastDay>=1&&this.dayNotifyEl&&(this.dayNotifyEl.textContent=`Day ${t}`,this.dayNotifyEl.style.opacity="1",this.dayNotifyEl.style.transition="none",this.dayNotifyEl.offsetWidth,this.dayNotifyEl.style.transition="opacity 2.5s ease-out",this.dayNotifyEl.style.opacity="0"),this._lastDay=t)}showInventory(t){if(this.inventoryPanel)return;this.inventoryPanel=document.createElement("div"),this.inventoryPanel.id="inventory-panel",this.inventoryPanel.style.cssText=`
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
    `;for(let o=0;o<36;o++){const c=document.createElement("div"),l=t[o]??0,h=l===0?"#333333":"#"+cr(l).toString(16).padStart(6,"0");c.style.cssText=`
        width: 24px;
        height: 24px;
        background: ${h};
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
        transition: background 0.1s;
      `,c.title=l===0?"Empty":si(l),c.addEventListener("mouseenter",()=>{c.style.background="#"+Math.min(16777215,(parseInt(h.slice(1),16)??0)+2236962).toString(16).padStart(6,"0")}),c.addEventListener("mouseleave",()=>{c.style.background=h}),n.appendChild(c)}this.inventoryPanel.appendChild(n);const i=document.createElement("div");i.textContent="Crafting",i.style.cssText="color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;",this.inventoryPanel.appendChild(i);const r=document.createElement("div");r.style.cssText=`
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
    `,a.textContent="Close (E)",a.addEventListener("click",()=>this.hideInventory()),this.inventoryPanel.appendChild(a),document.body.appendChild(this.inventoryPanel)}hideInventory(){this.inventoryPanel&&(this.inventoryPanel.remove(),this.inventoryPanel=null)}isInventoryOpen(){return this.inventoryPanel!==null}setupChat(){this.chatInput.addEventListener("keydown",t=>{var e,n;if(t.key==="Enter"){const i=this.chatInput.value.trim();i&&(i.startsWith("/")?(e=this.onChat)==null||e.call(this,i):(n=this.onChat)==null||n.call(this,i)),this.closeChatInput(),t.stopPropagation()}t.key==="Escape"&&this.closeChatInput(),t.key==="Tab"&&(t.preventDefault(),this.tabCompleteChat()),t.stopPropagation()}),this.chatMsgsEl.addEventListener("wheel",t=>{t.stopPropagation()})}tabCompleteChat(){const t=this.chatInput.value;if(!t.startsWith("/"))return;const e=["/gamemode","/time","/weather","/help","/save","/load","/tp","/kill","/heal","/feed"],n=t.slice(1).toLowerCase(),i=e.filter(r=>r.slice(1).startsWith(n));i.length===1&&(this.chatInput.value=i[0],i[0].includes(" ")||(this.chatInput.value+=" "))}openChatInput(){this.chatInput.classList.add("visible"),this.chatInput.value="",this.chatInput.focus()}closeChatInput(){this.chatInput.classList.remove("visible"),this.chatInput.blur(),setTimeout(()=>{document.body.requestPointerLock()},50)}isChatOpen(){return this.chatInput.classList.contains("visible")}addChatMessage(t,e,n=!1){const i=document.createElement("div");i.className="chat-msg"+(n?" sys-msg":"");const r=new Date,a=r.getHours().toString().padStart(2,"0"),o=r.getMinutes().toString().padStart(2,"0"),c=`[${a}:${o}]`;if(n)i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:#ffcc00">${this.esc(e)}</span>`;else{const d=this.getPlayerColor(t);i.innerHTML=`<span style="color:#888">${c}</span> <span style="color:${d}"><b>${this.esc(t)}</b></span>: ${this.esc(e)}`}this.chatMsgsEl.appendChild(i),this.chatMsgsEl.scrollTop=this.chatMsgsEl.scrollHeight;const l=this.chatMsgsEl.querySelectorAll(".chat-msg");l.length>50&&l[0].remove();const h=setInterval(()=>{!this.isChatOpen()&&i.parentElement&&(i.style.opacity="0.3",clearInterval(h))},8e3)}getPlayerColor(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);const n=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff9f40","#c77dff","#48cae4","#f72585"];return n[Math.abs(e)%n.length]}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}showCraftingUI(){this.craftingPanel&&this.hideCraftingUI();const t=[{id:"log_to_planks",name:"Oak Planks (×4)",hand:!0,ingredients:{5:1},output:{type:10,count:4}},{id:"planks_to_sticks",name:"Sticks (×4)",hand:!0,ingredients:{10:2},output:{type:280,count:4}},{id:"wood_pickaxe",name:"Wooden Pickaxe",ingredients:{10:3,280:2},output:{type:270,count:1}},{id:"wood_sword",name:"Wooden Sword",ingredients:{10:2,280:1},output:{type:268,count:1}},{id:"wood_axe",name:"Wooden Axe",ingredients:{10:3,280:2},output:{type:271,count:1}},{id:"wood_shovel",name:"Wooden Shovel",ingredients:{10:1,280:2},output:{type:269,count:1}},{id:"stone_pickaxe",name:"Stone Pickaxe",ingredients:{11:3,280:2},output:{type:274,count:1}},{id:"stone_sword",name:"Stone Sword",ingredients:{11:2,280:1},output:{type:272,count:1}},{id:"stone_axe",name:"Stone Axe",ingredients:{11:3,280:2},output:{type:275,count:1}},{id:"iron_pickaxe",name:"Iron Pickaxe",ingredients:{62:3,280:2},output:{type:257,count:1}},{id:"iron_sword",name:"Iron Sword",ingredients:{62:2,280:1},output:{type:267,count:1}},{id:"iron_axe",name:"Iron Axe",ingredients:{62:3,280:2},output:{type:258,count:1}},{id:"iron_helmet",name:"Iron Helmet",ingredients:{62:5},output:{type:35,count:1}},{id:"iron_chest",name:"Iron Chestplate",ingredients:{62:8},output:{type:36,count:1}},{id:"iron_legs",name:"Iron Leggings",ingredients:{62:7},output:{type:37,count:1}},{id:"iron_boots",name:"Iron Boots",ingredients:{62:4},output:{type:38,count:1}},{id:"crafting_table",name:"Crafting Table",hand:!0,ingredients:{10:4},output:{type:22,count:1}},{id:"furnace",name:"Furnace",ingredients:{11:8},output:{type:23,count:1}},{id:"chest",name:"Chest",ingredients:{10:8},output:{type:31,count:1}},{id:"torch",name:"Torch (×4)",hand:!0,ingredients:{64:1,280:1},output:{type:56,count:4}},{id:"planks_to_slab",name:"Wood Slabs (×4)",ingredients:{10:3},output:{type:10,count:4}},{id:"sand_to_glass",name:"Glass (via furnace)",ingredients:{4:1},output:{type:9,count:1}},{id:"ladder",name:"Ladder (×3)",ingredients:{280:7},output:{type:78,count:3}},{id:"oak_fence",name:"Oak Fence (×3)",ingredients:{10:4,280:2},output:{type:79,count:3}},{id:"fence_gate",name:"Fence Gate",ingredients:{280:4,10:2},output:{type:80,count:1}},{id:"stone_bricks",name:"Stone Bricks (×4)",ingredients:{3:4},output:{type:81,count:4}}];this.craftingPanel=document.createElement("div"),this.craftingPanel.id="crafting-panel",this.craftingPanel.style.cssText=`
      position: fixed; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      background: #3d3d3d; border: 3px solid #111;
      padding: 16px; width: 360px; max-height: 80vh;
      overflow-y: auto; z-index: 1000; border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      font-family: "Minecraft", monospace, Arial, sans-serif;
    `;const e=document.createElement("h2");e.textContent="✦ Crafting",e.style.cssText="color: #ffdd44; margin: 0 0 4px 0; text-align: center; font-size: 18px; text-shadow: 2px 2px #000;",this.craftingPanel.appendChild(e);const n=document.createElement("div");n.style.cssText="color: #aaa; font-size: 11px; text-align: center; margin-bottom: 12px;",n.textContent="Right-click crafting table to open. Hand-craftable items marked ✋",this.craftingPanel.appendChild(n);const i=this.getInvCount??(()=>0),r={5:"Oak Log",10:"Oak Planks",11:"Cobblestone",62:"Iron Ingot",64:"Coal",280:"Stick",65:"Diamond",63:"Gold Ingot",3:"Stone",4:"Sand"};for(const o of t){const c=Object.entries(o.ingredients).every(([v,m])=>i(Number(v))>=m),l=document.createElement("div");l.style.cssText=`
        display: flex; align-items: center; gap: 8px;
        margin: 4px 0; padding: 8px 10px;
        background: ${c?"#2a4a2a":"#2a2a2a"};
        border: 1px solid ${c?"#44aa44":"#555"};
        border-radius: 3px; cursor: ${c?"pointer":"default"};
        opacity: ${c?"1":"0.5"};
      `;const h=document.createElement("span");h.textContent=o.hand?"✋":"🔨",h.style.cssText="font-size: 16px; flex-shrink: 0;";const d=document.createElement("div");d.style.cssText="flex: 1;";const p=document.createElement("div");p.textContent=o.name,p.style.cssText=`color: ${c?"#eee":"#888"}; font-size: 13px; font-weight: bold;`;const f=document.createElement("div"),_=Object.entries(o.ingredients).map(([v,m])=>{const g=i(Number(v)),E=r[Number(v)]??`Item ${v}`;return`<span style="color:${g>=m?"#88ff88":"#ff8888"}">${m}x ${E}</span>`});f.innerHTML=_.join(", "),f.style.cssText="font-size: 10px; margin-top: 2px;",d.appendChild(p),d.appendChild(f),l.appendChild(h),l.appendChild(d),c&&l.addEventListener("click",()=>{var m;((m=this.onCraft)==null?void 0:m.call(this,o.id))!==!1&&(this.hideCraftingUI(),setTimeout(()=>this.showCraftingUI(),50))}),this.craftingPanel.appendChild(l)}const a=document.createElement("button");a.style.cssText=`
      display: block; width: 100%; padding: 10px; margin-top: 12px;
      background: #8B3333; color: white; border: 2px solid #5B0000;
      border-radius: 2px; cursor: pointer; font-size: 14px; font-weight: bold;
    `,a.textContent="Close [E]",a.addEventListener("click",()=>this.hideCraftingUI()),this.craftingPanel.appendChild(a),document.body.appendChild(this.craftingPanel)}hideCraftingUI(){this.craftingPanel&&(this.craftingPanel.remove(),this.craftingPanel=null)}isCraftingOpen(){return this.craftingPanel!==null}showChestUI(t,e){if(this.chestPanel)return;const n=30,i=h=>{const d=h===0?"444444":cr(h).toString(16).padStart(6,"0");return`
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
    `;const r=document.createElement("h2");r.textContent="Chest",r.style.cssText="color: white; margin: 0 0 10px 0; text-align: center; font-size: 16px;",this.chestPanel.appendChild(r);const a=(h,d,p,f)=>{const _=document.createElement("div");_.style.cssText="margin-bottom: 10px;";const v=document.createElement("div");v.textContent=h,v.style.cssText="color: #ddd; font-size: 11px; margin-bottom: 4px;",_.appendChild(v);const m=document.createElement("div");m.style.cssText=`
        display: grid;
        grid-template-columns: repeat(${f}, 1fr);
        gap: 2px;
        background: #2B2B2B;
        padding: 4px;
        border-radius: 2px;
      `;for(let g=0;g<d.length;g++){const E=d[g]??0,M=document.createElement("div");if(M.style.cssText=i(E),M.title=E===0?"Empty":`${si(E)} (click to move)`,E!==0){const O=document.createElement("span");O.style.cssText=`
            position: absolute; bottom: -1px; right: 1px;
            font-size: 7px; color: #fff; text-shadow: 1px 1px 0 #000;
            pointer-events: none;
          `,O.textContent=si(E).slice(0,3),M.appendChild(O)}M.addEventListener("mouseenter",()=>{E&&(M.style.transform="scale(1.1)",M.style.boxShadow="0 0 6px rgba(255,255,200,0.5)",M.style.zIndex="2")}),M.addEventListener("mouseleave",()=>{M.style.transform="scale(1)",M.style.boxShadow="none",M.style.zIndex="0"});const w=g;M.addEventListener("click",()=>{var O;E!==0&&((O=this.onChestTransfer)==null||O.call(this,p,w,t,e),this.hideChestUI(),this.showChestUI(t,e))}),m.appendChild(M)}return _.appendChild(m),_};this.chestPanel.appendChild(a("Chest",t,!0,9));const o=document.createElement("hr");o.style.cssText="border: none; border-top: 1px solid #5a3a10; margin: 6px 0;",this.chestPanel.appendChild(o),this.chestPanel.appendChild(a("Your Hotbar",e,!1,9));const c=document.createElement("button");c.style.cssText=`
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
    `;const l=document.createElement("div");l.appendChild(o),l.appendChild(c),e.appendChild(r),e.appendChild(a),e.appendChild(l),this.smeltingPanel.appendChild(e);const h=document.createElement("div");h.style.cssText="color: white; font-size: 12px; margin-bottom: 5px;",h.textContent="Fuel:";const d=document.createElement("div");d.id="smelt-fuel",d.style.cssText=`
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
    `,p.textContent="Smelt",p.addEventListener("click",()=>{var m;const v=(m=this.onSmelt)==null?void 0:m.call(this,14,5);v!=null&&this.addChatMessage("",`Smelted item (type ${v})!`,!0)}),this.smeltingPanel.appendChild(p);const f=document.createElement("button");f.style.cssText=`
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
    `,f.textContent="Close",f.addEventListener("click",()=>this.hideSmeltingUI()),this.smeltingPanel.appendChild(f);const _=document.createElement("style");_.textContent=`
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
    `;const n=document.createElement("h2");n.textContent="Statistics",n.style.cssText="margin: 0 0 16px 0; text-align: center; color: #ffcc00; font-size: 20px; letter-spacing: 1px;",this.scoreboardPanel.appendChild(n);const i=Math.floor(t.playTime),r=Math.floor(i/3600),a=Math.floor(i%3600/60),o=i%60,c=r>0?`${r}h ${a}m ${o}s`:`${a}m ${o}s`,l=[["Days Survived",`${e}`],["Play Time",c],["",""],["Blocks Placed",`${t.blocksPlaced}`],["Blocks Broken",`${t.blocksBroken}`],["Distance Walked",`${t.distanceTraveled.toFixed(0)}m`],["",""],["Mobs Killed",`${t.mobsKilled}`],["Deaths",`${t.deaths}`]];for(const[p,f]of l){if(!p){const g=document.createElement("hr");g.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(g);continue}const _=document.createElement("div");_.style.cssText="display: flex; justify-content: space-between; padding: 4px 0; font-size: 14px;";const v=document.createElement("span");v.textContent=p,v.style.color="#aaa";const m=document.createElement("span");m.textContent=f,m.style.cssText="font-weight: bold; color: #fff;",_.appendChild(v),_.appendChild(m),this.scoreboardPanel.appendChild(_)}const h=Object.entries(t.killsByType||{}).sort((p,f)=>f[1]-p[1]);if(h.length>0){const p=document.createElement("hr");p.style.cssText="border: none; border-top: 1px solid #444; margin: 8px 0;",this.scoreboardPanel.appendChild(p);const f=document.createElement("div");f.textContent="Kills by Type",f.style.cssText="color: #ffcc00; font-size: 13px; margin-bottom: 6px; text-align: center;",this.scoreboardPanel.appendChild(f);for(const[_,v]of h){const m=document.createElement("div");m.style.cssText="display: flex; justify-content: space-between; padding: 2px 0; font-size: 13px;";const g=document.createElement("span");g.textContent=_.charAt(0).toUpperCase()+_.slice(1),g.style.color="#999";const E=document.createElement("span");E.textContent=`${v}`,E.style.color="#ddd",m.appendChild(g),m.appendChild(E),this.scoreboardPanel.appendChild(m)}}const d=document.createElement("div");d.textContent="Press O to close",d.style.cssText="text-align: center; color: #666; font-size: 11px; margin-top: 16px;",this.scoreboardPanel.appendChild(d),document.body.appendChild(this.scoreboardPanel)}hideScoreboard(){this.scoreboardPanel&&(this.scoreboardPanel.remove(),this.scoreboardPanel=null)}isScoreboardOpen(){return this.scoreboardPanel!==null}}const Px=new Te(.12,.12,.12),Lx=128;class Ix{constructor(t){C(this,"scene");C(this,"pool",[]);C(this,"active",[]);this.scene=t;for(let e=0;e<Lx;e++){const n=new Ue({color:16777215,transparent:!0}),i=new te(Px,n);i.visible=!1,t.add(i),this.pool.push({mesh:i,mat:n,vx:0,vy:0,vz:0,life:0,maxLife:1,active:!1})}}acquire(t,e,n,i,r,a,o,c,l=1,h=!1){let d=null;for(let p=0;p<this.pool.length;p++)if(!this.pool[p].active){d=this.pool[p];break}d&&(d.active=!0,d.life=0,d.maxLife=c,d.vx=r,d.vy=a,d.vz=o,d.mesh.position.set(t,e,n),d.mesh.scale.setScalar(l),d.mesh.visible=!0,d.mat.color.setHex(i),d.mat.opacity=1,h?(d.mat.emissive.setHex(i),d.mat.emissiveIntensity=.6):d.mat.emissiveIntensity=0,this.active.push(d))}spawn(t,e,n,i,r,a,o,c,l=.3){this.acquire(t,e,n,i,a,o,c,r,l)}burst(t,e,n,i,r=12){const a=cr(i);for(let o=0;o<r;o++){const c=Math.random()*Math.PI*2,l=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,n+(Math.random()-.5)*.6,a,Math.cos(c)*l,1.5+Math.random()*3.5,Math.sin(c)*l,.4+Math.random()*.5,.6+Math.random()*.5)}}placeEffect(t,e,n,i){const r=cr(i);for(let a=0;a<8;a++){const o=a/8*Math.PI*2;this.acquire(t+Math.cos(o)*.4,e,n+Math.sin(o)*.4,r,Math.cos(o)*2,.5+Math.random(),Math.sin(o)*2,.3+Math.random()*.2,.4)}}splash(t,e,n,i=8){for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=2+Math.random()*4;this.acquire(t+(Math.random()-.5)*1.5,e+Math.random()*.5,n+(Math.random()-.5)*1.5,4491519,Math.cos(a)*o,3+Math.random()*2,Math.sin(a)*o,.6+Math.random()*.4)}}smoke(t,e,n,i=8){for(let r=0;r<i;r++){const a=4473924+Math.floor(Math.random()*4473924);this.acquire(t+(Math.random()-.5)*.8,e+Math.random()*.5,n+(Math.random()-.5)*.8,a,(Math.random()-.5)*.8,.5+Math.random()*1.5,(Math.random()-.5)*.8,1.2+Math.random()*.6)}}dustMote(t,e,n){this.acquire(t,e,n,16772812,(Math.random()-.5)*.2,.05+Math.random()*.15,(Math.random()-.5)*.2,3+Math.random()*2,.3)}firefly(t,e,n){this.acquire(t,e,n,11206468,(Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5,2.5+Math.random()*2,.4,!0)}bubbles(t,e,n,i=3){for(let r=0;r<i;r++)this.acquire(t+(Math.random()-.5)*.6,e+Math.random()*.3,n+(Math.random()-.5)*.6,8965375,(Math.random()-.5)*.3,1.5+Math.random()*1,(Math.random()-.5)*.3,1+Math.random()*.5,.5)}magic(t,e,n,i=12){for(let r=0;r<i;r++){const a=Math.random()<.5?11158783:16763904,o=Math.random()*Math.PI*2,c=4+Math.random()*3;this.acquire(t,e,n,a,Math.cos(o)*c,1+Math.random()*2,Math.sin(o)*c,.8+Math.random()*.4,1,!0)}}explosion(t,e,n,i=15){for(let r=0;r<i;r++){const a=Math.random(),o=a<.33?16729088:a<.66?16746496:a<.85?16763904:0,c=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=6+Math.random()*8;this.acquire(t+(Math.random()-.5)*1.5,e+(Math.random()-.5)*1.5,n+(Math.random()-.5)*1.5,o,Math.sin(l)*Math.cos(c)*h,Math.cos(l)*h,Math.sin(l)*Math.sin(c)*h,.8+Math.random()*.4,.2+Math.random()*.2)}}damage(t,e,n,i=3){for(let r=0;r<i;r++)this.acquire(t+(Math.random()-.5)*.6,e+.5+Math.random()*1.2,n+(Math.random()-.5)*.6,16720418,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,.3+Math.random()*.3)}update(t){for(let e=this.active.length-1;e>=0;e--){const n=this.active[e];n.life+=t,n.vy-=14*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t;const i=n.life/n.maxLife;n.mat.opacity=1-i,n.mesh.scale.setScalar(1-i*.8),n.life>=n.maxLife&&(n.active=!1,n.mesh.visible=!1,this.active.splice(e,1))}}}class Dx{constructor(){C(this,"ctx",null);C(this,"musicActive",!1);C(this,"musicTimeout",null);C(this,"ambientActive",!1);C(this,"ambientTimeout",null);C(this,"ambientGain",null)}getCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(t,e=1){try{switch(t){case"break":this.playBreak(e);break;case"place":this.playPlace(e);break;case"hurt":this.playHurt(e);break;case"hit":this.playHit(e);break;case"splash":this.playSplash(e);break;case"eat":this.playEat(e);break;case"step":this.playStep(e);break}}catch{}}playBreak(t){const e=this.getCtx(),n=this.makeNoise(e,.08),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.5,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=800,a.Q.value=.8,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playPlace(t){const e=this.getCtx(),n=this.makeNoise(e,.06),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.3,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.08);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playHurt(t){const e=this.getCtx(),n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(440,e.currentTime),n.frequency.exponentialRampToValueAtTime(120,e.currentTime+.18);const i=e.createGain();i.gain.setValueAtTime(t*.4,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.22)}playHit(t){const e=this.getCtx(),n=this.makeNoise(e,.04),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.6,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06);const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1200,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playSplash(t){const e=this.getCtx(),n=this.makeNoise(e,.25),i=e.createBufferSource();i.buffer=n;const r=e.createGain();r.gain.setValueAtTime(t*.5,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.3);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=600,a.Q.value=.5,i.connect(a),a.connect(r),r.connect(e.destination),i.start()}playEat(t){const e=this.getCtx();for(let n=0;n<3;n++){const i=n*.07,r=this.makeNoise(e,.04),a=e.createBufferSource();a.buffer=r;const o=e.createGain();o.gain.setValueAtTime(t*.3,e.currentTime+i),o.gain.exponentialRampToValueAtTime(.001,e.currentTime+i+.06);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=300+n*200,a.connect(c),c.connect(o),o.connect(e.destination),a.start(e.currentTime+i)}}playStep(t){this.playStepOnBlock(t,"dirt")}playStepOnBlock(t,e="dirt"){const n=this.getCtx(),i=this.makeNoise(n,.04+Math.random()*.02),r=n.createBufferSource();r.buffer=i;const a=n.createGain(),o=t*(.1+Math.random()*.06);a.gain.setValueAtTime(o,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08);const c=n.createBiquadFilter();switch(e){case"stone":c.type="highpass",c.frequency.value=600+Math.random()*200;break;case"sand":c.type="lowpass",c.frequency.value=200+Math.random()*100,c.Q.value=.3;break;case"wood":c.type="bandpass",c.frequency.value=400+Math.random()*150,c.Q.value=1.2;break;case"grass":c.type="bandpass",c.frequency.value=250+Math.random()*100,c.Q.value=.6;break;default:c.type="lowpass",c.frequency.value=300+Math.random()*100;break}r.connect(c),c.connect(a),a.connect(n.destination),r.start()}playLanding(t){const e=this.getCtx(),n=this.makeNoise(e,.1),i=e.createBufferSource();i.buffer=n;const r=e.createGain(),a=Math.min(t*.15,.5);r.gain.setValueAtTime(a,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15);const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=150,i.connect(o),o.connect(r),r.connect(e.destination),i.start()}playAmbient(t){const e=this.getCtx();if(e){if(t==="birds")for(let n=0;n<3;n++)setTimeout(()=>{const i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(800+Math.random()*400,e.currentTime),i.frequency.exponentialRampToValueAtTime(1200+Math.random()*600,e.currentTime+.08),r.gain.setValueAtTime(.06,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),i.connect(r),r.connect(e.destination),i.start(),i.stop(e.currentTime+.15)},n*200+Math.random()*300);else if(t==="wind"){const n=e.sampleRate*1.5,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.03;const a=e.createBufferSource(),o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=200,o.Q.value=.5;const c=e.createGain();c.gain.setValueAtTime(0,e.currentTime),c.gain.linearRampToValueAtTime(.3,e.currentTime+.5),c.gain.linearRampToValueAtTime(0,e.currentTime+1.5),a.buffer=i,a.connect(o),o.connect(c),c.connect(e.destination),a.start(),a.stop(e.currentTime+1.5)}else if(t==="cave"){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=80+Math.random()*40,i.gain.setValueAtTime(.1,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.8)}}}makeNoise(t,e){const n=t.sampleRate,i=Math.ceil(n*e),r=t.createBuffer(1,i,n),a=r.getChannelData(0);for(let o=0;o<i;o++)a[o]=Math.random()*2-1;return r}playMusic(t){this.stopMusic();const e=this.getCtx();if(!e)return;const n={disc_green:[261,329,392,523,392,329,261,196,220,261,329,392],disc_red:[220,196,175,165,175,196,220,175,165,156,165,175],disc_blue:[523,659,784,523,659,784,987,784,659,523,440,523]},i=n[t]||n.disc_green;let r=0;const a=()=>{if(!this.musicActive)return;const o=e.createOscillator(),c=e.createGain();o.type=t==="disc_blue"?"square":"sine",o.frequency.value=i[r%i.length],c.gain.setValueAtTime(.15,e.currentTime),c.gain.exponentialRampToValueAtTime(.001,e.currentTime+.45),o.connect(c),c.connect(e.destination),o.start(),o.stop(e.currentTime+.5),r++,this.musicTimeout=setTimeout(a,500)};this.musicActive=!0,a()}stopMusic(){this.musicActive=!1,this.musicTimeout&&(clearTimeout(this.musicTimeout),this.musicTimeout=null)}isMusicPlaying(){return this.musicActive}startAmbientMusic(t="day"){if(this.ambientActive)return;this.ambientActive=!0;const e=this.getCtx();this.ambientGain=e.createGain(),this.ambientGain.gain.value=0,this.ambientGain.gain.linearRampToValueAtTime(.08,e.currentTime+2),this.ambientGain.connect(e.destination);const n={day:[261,293,329,392,440,523,587,659],night:[220,247,262,330,349,440,494,523],cave:[110,130,147,165,196,220,247,262]},i=n[t]||n.day,r=()=>{if(!this.ambientActive||!this.ambientGain)return;const a=this.getCtx(),o=2+Math.floor(Math.random()*2);for(let l=0;l<o;l++){const h=i[Math.floor(Math.random()*i.length)],d=a.createOscillator(),p=a.createGain();d.type=t==="cave"||Math.random()>.5?"sine":"triangle",d.frequency.value=h*(t==="cave"?.5:1);const f=3+Math.random()*4;p.gain.setValueAtTime(0,a.currentTime),p.gain.linearRampToValueAtTime(.06+Math.random()*.04,a.currentTime+f*.3),p.gain.linearRampToValueAtTime(0,a.currentTime+f),d.detune.value=(Math.random()-.5)*10,d.connect(p),p.connect(this.ambientGain),d.start(),d.stop(a.currentTime+f+.1)}const c=4e3+Math.random()*6e3;this.ambientTimeout=setTimeout(r,c)};this.ambientTimeout=setTimeout(r,2e3)}stopAmbientMusic(){if(this.ambientActive=!1,this.ambientTimeout&&(clearTimeout(this.ambientTimeout),this.ambientTimeout=null),this.ambientGain){const t=this.getCtx();this.ambientGain.gain.linearRampToValueAtTime(0,t.currentTime+1),this.ambientGain=null}}setAmbientMood(t){if(!this.ambientActive){this.startAmbientMusic(t);return}this.stopAmbientMusic(),setTimeout(()=>this.startAmbientMusic(t),1500)}}class Ox{constructor(t){C(this,"scene");C(this,"drops",[]);C(this,"onPickup");this.scene=t}spawnDrop(t,e,n,i){const r=Nx[i]??16777215,a=new Te(.35,.35,.35),o=new Ue({color:r}),c=new te(a,o);c.position.set(t,e+1,n),this.scene.add(c),this.drops.push({mesh:c,type:i,x:t,y:e+1,z:n,bobOffset:Math.random()*Math.PI*2,life:30})}spawnFromMob(t,e,n,i){const r=Ux[t];if(r){for(const a of r)if(Math.random()<a.chance){const o=Math.floor(a.min+Math.random()*(a.max-a.min+1));for(let c=0;c<o;c++)this.spawnDrop(e,n,i,a.item)}}}update(t,e,n){const i=n??this.onPickup;for(let r=this.drops.length-1;r>=0;r--){const a=this.drops[r];a.life-=t,a.bobOffset+=t*2,a.mesh.position.y=a.y+Math.sin(a.bobOffset)*.12,a.mesh.rotation.y+=t*1.5;const o=e.x-a.x,c=e.z-a.z,l=e.y-a.y;(o*o+l*l+c*c<2.25||a.life<=0)&&(o*o+l*l+c*c<2.25&&(i==null||i(a.type)),this.scene.remove(a.mesh),a.mesh.material.dispose(),a.mesh.geometry.dispose(),this.drops.splice(r,1))}}dispose(){for(const t of this.drops)this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.geometry.dispose();this.drops=[]}}const Nx={porkchop:16750950,feather:16777215,beef:13386786,leather:9133628,wool:14540253,chicken:16768392,egg:16772795,gunpowder:8947848,bone:16777164,arrow:11171635,string:14540236,salmon:16737860,cod:10053188,tropical_fish:16755200,pufferfish:16776960,iron_helmet:8947848,iron_chestplate:8947848,iron_leggings:7829367,iron_boots:6710886},Ux={pig:[{item:"porkchop",chance:1,min:1,max:3}],chicken:[{item:"feather",chance:1,min:1,max:2},{item:"egg",chance:.3,min:1,max:1}],cow:[{item:"beef",chance:1,min:1,max:3},{item:"leather",chance:.8,min:0,max:2}],sheep:[{item:"wool",chance:1,min:1,max:3}],zombie:[{item:"bone",chance:.5,min:0,max:2}],creeper:[{item:"gunpowder",chance:1,min:0,max:2}]},iu={};for(const[s,t]of Object.entries(Wo)){const e=Number(s);if(t&&t.color!=null){const n=t.color;iu[e]=[n>>16&255,n>>8&255,n&255]}}class Bx{constructor(t){C(this,"canvas");C(this,"ctx");C(this,"container");C(this,"updateTimer",0);C(this,"world");C(this,"RADIUS",32);C(this,"CANVAS_SIZE",128);C(this,"UPDATE_INTERVAL",.3);C(this,"imgData");if(this.world=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.CANVAS_SIZE,this.canvas.height=this.CANVAS_SIZE,this.ctx=this.canvas.getContext("2d"),this.container=document.getElementById("minimap"),!this.container)throw new Error("Minimap container not found");this.container.innerHTML="",this.canvas.style.width="100%",this.canvas.style.height="100%",this.container.appendChild(this.canvas),this.imgData=this.ctx.createImageData(this.CANVAS_SIZE,this.CANVAS_SIZE),this.drawEmptyMap()}drawEmptyMap(){this.ctx.fillStyle="#1a1a1a",this.ctx.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE)}update(t,e,n,i,r){this.updateTimer+=t,!(this.updateTimer<this.UPDATE_INTERVAL)&&(this.updateTimer=0,this.drawMap(e,n,i,r))}drawMap(t,e,n,i){const r=this.CANVAS_SIZE/2,a=this.CANVAS_SIZE/2,o=this.CANVAS_SIZE/(this.RADIUS*2),c=this.imgData.data,l=this.CANVAS_SIZE;for(let g=0;g<c.length;g+=4)c[g]=26,c[g+1]=26,c[g+2]=26,c[g+3]=255;const h=Math.floor(t.x)-this.RADIUS,d=Math.floor(t.x)+this.RADIUS,p=Math.floor(t.z)-this.RADIUS,f=Math.floor(t.z)+this.RADIUS;for(let g=h;g<=d;g++)for(let E=p;E<=f;E++){let M=0;for(let q=40;q>=0;q--){const b=this.world.getBlockType(g,q,E);if(b!==void 0){M=b;break}}if(M===0)continue;const w=Math.round(r+(g-t.x)*o),O=Math.round(a+(E-t.z)*o);if(w<0||w>=l||O<0||O>=l)continue;const L=iu[M],I=(O*l+w)*4;L?(c[I]=L[0],c[I+1]=L[1],c[I+2]=L[2],c[I+3]=255):(c[I]=255,c[I+1]=255,c[I+2]=255,c[I+3]=255)}this.ctx.putImageData(this.imgData,0,0);for(const g of i){if(!g.alive)continue;const E=r+(g.x-t.x)*o,M=a+(g.z-t.z)*o;this.ctx.fillStyle="#ff3333",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}for(const g of n){const E=r+(g.x-t.x)*o,M=a+(g.z-t.z)*o;this.ctx.fillStyle="#ffff33",this.ctx.beginPath(),this.ctx.arc(E,M,2,0,Math.PI*2),this.ctx.fill()}this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(r,a,3,0,Math.PI*2),this.ctx.fill();const _=6,v=r+Math.sin(e)*_,m=a+Math.cos(e)*_;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(r,a),this.ctx.lineTo(v,m),this.ctx.stroke()}dispose(){this.canvas.width=0,this.canvas.height=0}}class kx{constructor(t,e){C(this,"scene");C(this,"sounds");C(this,"type","clear");C(this,"rainParticles",null);C(this,"rainPositions",null);C(this,"rainVelY",null);C(this,"rainCount",2e3);C(this,"splashParticles",null);C(this,"splashPositions",null);C(this,"splashLife",null);C(this,"splashCount",200);C(this,"thunderTimer",0);C(this,"thunderFlash",!1);C(this,"nextThunder",15);C(this,"rainSoundTimer",0);C(this,"rainAmbientNode",null);C(this,"rainAmbientGain",null);this.scene=t,this.sounds=e}setWeather(t){this.type=t,t==="clear"?this.stopRain():this.startRain()}getWeather(){return this.type}startRain(){if(this.rainParticles)return;const t=new pn,e=new Float32Array(this.rainCount*3),n=new Float32Array(this.rainCount);for(let l=0;l<this.rainCount;l++)e[l*3]=(Math.random()-.5)*80,e[l*3+1]=Math.random()*30+5,e[l*3+2]=(Math.random()-.5)*80,n[l]=15+Math.random()*5;t.setAttribute("position",new fn(e,3));const i=new Sc({color:11184895,size:.15,transparent:!0,opacity:.6,sizeAttenuation:!0});this.rainParticles=new Th(t,i),this.rainPositions=e,this.rainVelY=n,this.scene.add(this.rainParticles);const r=new pn,a=new Float32Array(this.splashCount*3),o=new Float32Array(this.splashCount);for(let l=0;l<this.splashCount;l++)a[l*3]=(Math.random()-.5)*40,a[l*3+1]=-100,a[l*3+2]=(Math.random()-.5)*40,o[l]=0;r.setAttribute("position",new fn(a,3));const c=new Sc({color:13421823,size:.25,transparent:!0,opacity:.5,sizeAttenuation:!0});this.splashParticles=new Th(r,c),this.splashPositions=a,this.splashLife=o,this.scene.add(this.splashParticles),this.startRainAmbient()}stopRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles=null,this.rainPositions=null,this.rainVelY=null),this.splashParticles&&(this.scene.remove(this.splashParticles),this.splashParticles.geometry.dispose(),this.splashParticles=null,this.splashPositions=null,this.splashLife=null),this.stopRainAmbient(),this.thunderFlash=!1}update(t,e,n){if(this.type!=="clear"){if(this.rainParticles&&this.rainPositions&&this.rainVelY){this.rainParticles.position.set(e.x,0,e.z);const i=this.rainPositions;let r=0;for(let a=0;a<this.rainCount;a++)if(i[a*3+1]-=this.rainVelY[a]*t,i[a*3+1]<-2){if(this.splashPositions&&this.splashLife&&r<this.splashCount){const o=i[a*3]+e.x,c=i[a*3+2]+e.z;this.splashPositions[r*3]=o,this.splashPositions[r*3+1]=e.y-1+Math.random()*.5,this.splashPositions[r*3+2]=c,this.splashLife[r]=.3,r++}i[a*3]=(Math.random()-.5)*80,i[a*3+1]=30+Math.random()*5,i[a*3+2]=(Math.random()-.5)*80}this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.splashParticles&&this.splashPositions&&this.splashLife){for(let i=0;i<this.splashCount;i++)this.splashLife[i]>0&&(this.splashLife[i]-=t,this.splashPositions[i*3+1]+=t*2,this.splashLife[i]<=0&&(this.splashPositions[i*3+1]=-100));this.splashParticles.geometry.attributes.position.needsUpdate=!0}this.type==="thunder"&&(this.nextThunder-=t,this.nextThunder<=0&&(this.thunderFlash=!0,this.nextThunder=8+Math.random()*20,this.thunderTimer=.15,this.sounds.play("break")),this.thunderFlash&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderFlash=!1)))}}isThunderFlashing(){return this.thunderFlash}isRaining(){return this.type!=="clear"}startRainAmbient(){try{const t=new AudioContext,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let r=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(r+.02*h)/1.02,r=i[l],i[l]*=3.5}const a=t.createBufferSource();a.buffer=n,a.loop=!0;const o=t.createGain();o.gain.value=.08;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,a.connect(c),c.connect(o),o.connect(t.destination),a.start(),this.rainAmbientNode=a,this.rainAmbientGain=o,this._rainCtx=t}catch{}}stopRainAmbient(){this.rainAmbientGain&&(this.rainAmbientGain.gain.value=0),this._rainCtx&&(this._rainCtx.close(),this._rainCtx=null),this.rainAmbientNode=null,this.rainAmbientGain=null}dispose(){this.stopRain()}}const Fx=new Bn(.2,6,6),zx=new ci({color:8978244});class Hx{constructor(t){C(this,"scene");C(this,"orbs",[]);C(this,"onCollect",null);this.scene=t}spawn(t,e,n,i){const r=new te(Fx,zx);r.position.set(t+(Math.random()-.5)*.5,e+.5+Math.random(),n+(Math.random()-.5)*.5),this.scene.add(r),this.orbs.push({mesh:r,xp:i,life:10})}update(t,e){for(let n=this.orbs.length-1;n>=0;n--){const i=this.orbs[n];i.life-=t,i.mesh.position.y+=Math.sin(i.life*5)*.01;const r=i.mesh.position.x-e.x,a=i.mesh.position.y-e.y,o=i.mesh.position.z-e.z,c=r*r+a*a+o*o;c<36&&i.mesh.position.lerp(e,t*4),(c<2.25||i.life<=0)&&(c<2.25&&this.onCollect&&this.onCollect(i.xp),this.scene.remove(i.mesh),this.orbs.splice(n,1))}}dispose(){for(const t of this.orbs)this.scene.remove(t.mesh);this.orbs=[]}}const Gx=[{id:"first_block",name:"Getting Wood",description:"Break your first block",unlocked:!1,icon:"🪵"},{id:"first_mob",name:"Monster Hunter",description:"Kill your first mob",unlocked:!1,icon:"⚔️"},{id:"first_craft",name:"Crafter",description:"Open the crafting menu",unlocked:!1,icon:"🔨"},{id:"reach_night",name:"Night Owl",description:"Survive your first night",unlocked:!1,icon:"🌙"},{id:"fish_catch",name:"Gone Fishing",description:"Catch your first fish",unlocked:!1,icon:"🎣"},{id:"level_five",name:"Experienced",description:"Reach level 5",unlocked:!1,icon:"⭐"},{id:"kill_zombie",name:"Undead Slayer",description:"Kill 10 zombies",unlocked:!1,icon:"🧟"},{id:"kill_creeper",name:"Creeper Killer",description:"Kill a creeper",unlocked:!1,icon:"💚"},{id:"kill_dragon",name:"Dragon Slayer",description:"Defeat the Ender Dragon",unlocked:!1,icon:"🐉"},{id:"deep_dive",name:"Deep Diver",description:"Swim underwater",unlocked:!1,icon:"🏊"}];class Vx{constructor(){C(this,"achievements");C(this,"counters",new Map);C(this,"onUnlock",null);this.achievements=new Map(Gx.map(t=>[t.id,{...t}]))}trigger(t,e=1){var i;const n=this.achievements.get(t);if(!(!n||n.unlocked)){if(t==="kill_zombie"){const r=(this.counters.get("zombies_killed")??0)+e;if(this.counters.set("zombies_killed",r),r<10)return}n.unlocked=!0,(i=this.onUnlock)==null||i.call(this,n)}}getAll(){return Array.from(this.achievements.values())}}class Wx{constructor(){C(this,"stats",{kills:0,deaths:0,blocksPlaced:0,blocksBroken:0,mobsKilled:0,distanceTraveled:0,playTime:0,killsByType:{}})}increment(t,e=1){t!=="killsByType"&&(this.stats[t]+=e)}recordMobKill(t){this.stats.mobsKilled+=1,this.stats.killsByType[t]=(this.stats.killsByType[t]||0)+1}get(t){return this.stats[t]}getAll(){return{...this.stats,killsByType:{...this.stats.killsByType}}}save(){try{localStorage.setItem("mc_stats",JSON.stringify(this.stats))}catch{}}load(){try{const t=localStorage.getItem("mc_stats");if(t){const e=JSON.parse(t);this.stats={...this.stats,...e},this.stats.killsByType||(this.stats.killsByType={})}}catch{}}}const Xx=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Yx=`
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
`,xi=class xi{constructor(){C(this,"mesh");C(this,"material");C(this,"_zenith",new yt);C(this,"_horizon",new yt);C(this,"_glow",new yt);C(this,"_sunDir",new U);const t=new Bn(400,24,16);this.material=new Ti({vertexShader:Xx,fragmentShader:Yx,side:on,depthWrite:!1,uniforms:{uZenith:{value:new yt(3377373)},uHorizon:{value:new yt(11197951)},uHorizonGlow:{value:new yt(16772829)},uGlowIntensity:{value:0},uSunDir:{value:new U(0,1,0)},uSunIntensity:{value:1},uStarOpacity:{value:0}}}),this.mesh=new te(t,this.material),this.mesh.renderOrder=-1}update(t,e){const n=t,i=xi.ZENITH,r=xi.HORIZON,a=xi.GLOW;let o;if(n<.2){const h=n/.2;this._zenith.copy(i.night).lerp(i.dawn,h),this._horizon.copy(r.night).lerp(r.dawn,h),this._glow.copy(a.night).lerp(a.dawn,h),o=h*.8}else if(n<.3){const h=(n-.2)/.1;this._zenith.copy(i.dawn).lerp(i.day,h),this._horizon.copy(r.dawn).lerp(r.day,h),this._glow.copy(a.dawn).lerp(a.day,h),o=(1-h)*.6}else if(n<.7)this._zenith.copy(i.day),this._horizon.copy(r.day),this._glow.copy(a.day),o=.05;else if(n<.8){const h=(n-.7)/.1;this._zenith.copy(i.day).lerp(i.dusk,h),this._horizon.copy(r.day).lerp(r.dusk,h),this._glow.copy(a.day).lerp(a.dusk,h),o=h*.8}else{const h=(n-.8)/.2;this._zenith.copy(i.dusk).lerp(i.night,h),this._horizon.copy(r.dusk).lerp(r.night,h),this._glow.copy(a.dusk).lerp(a.night,h),o=(1-h)*.6}const c=this.material.uniforms;c.uZenith.value.copy(this._zenith),c.uHorizon.value.copy(this._horizon),c.uHorizonGlow.value.copy(this._glow),c.uGlowIntensity.value=o,this._sunDir.copy(e).normalize(),c.uSunDir.value.copy(this._sunDir);const l=Math.sin((t-.25)*Math.PI*2);c.uSunIntensity.value=Math.max(l,0),c.uStarOpacity.value=Math.max(0,1-c.uSunIntensity.value*2.5)}followCamera(t){this.mesh.position.copy(t)}};C(xi,"ZENITH",{night:new yt(131600),dawn:new yt(2245802),day:new yt(3377373),dusk:new yt(1710694)}),C(xi,"HORIZON",{night:new yt(526368),dawn:new yt(16746581),day:new yt(11197951),dusk:new yt(16733491)}),C(xi,"GLOW",{night:new yt(0),dawn:new yt(16737826),day:new yt(16772829),dusk:new yt(16729105)});let Lc=xi;const Be=new Yd({antialias:!1});Be.setPixelRatio(Math.min(window.devicePixelRatio,1));Be.setSize(window.innerWidth,window.innerHeight);Be.shadowMap.enabled=!1;Be.toneMapping=ri;Be.toneMappingExposure=1.1;document.body.appendChild(Be.domElement);window.addEventListener("resize",()=>{Ze.aspect=window.innerWidth/window.innerHeight,Ze.updateProjectionMatrix(),Be.setSize(window.innerWidth,window.innerHeight)});const se=new T_;se.background=null;se.fog=new Wc(8900331,60,96);const Ze=new yn(75,window.innerWidth/window.innerHeight,.1,500);let Xa=!1,td=50;const qx=240;let He=.25;const Jn={night:new yt(328976),dawn:new yt(16737843),day:new yt(8900331),dusk:new yt(16729122)},Qn={night:new yt(328976),dawn:new yt(16746564),day:new yt(8900331),dusk:new yt(16737843)},jx=new Bn(4,12,12),Zx=new ci({color:16777215}),Vi=new te(jx,Zx);se.add(Vi);const Kx=new Bn(2.5,12,12),$x=new ci({color:14540287}),Ps=new te(Kx,$x);se.add(Ps);const fr=new Lc;se.add(fr.mesh);const su=[],ru=new Ue({color:16777215,transparent:!0,opacity:.78,depthWrite:!1});for(let s=0;s<24;s++){const t=new ue,e=3+Math.floor(Math.random()*4);for(let n=0;n<e;n++){const i=4+Math.random()*8,r=3+Math.random()*6,a=.8+Math.random()*.8,o=new Te(i,a,r),c=new te(o,ru);c.position.set((Math.random()-.5)*12,(Math.random()-.5)*1.5,(Math.random()-.5)*8),c.castShadow=!1,c.receiveShadow=!1,t.add(c)}t.position.set((Math.random()-.5)*250,30+Math.random()*10,(Math.random()-.5)*250),se.add(t),su.push(t)}const ou=new U_(16777215,.5);se.add(ou);const zn=new Kd(16774368,1.4);zn.castShadow=!0;zn.shadow.mapSize.set(512,512);zn.shadow.camera.near=.5;zn.shadow.camera.far=300;zn.shadow.camera.left=zn.shadow.camera.bottom=-110;zn.shadow.camera.right=zn.shadow.camera.top=110;se.add(zn);const Ic=new Kd(3359846,.3);se.add(Ic);const au=new D_(8900331,4881482,.3);se.add(au);const ir=new yt,gi=new yt;let ao=0;function Jx(s){He=(He+s/qx)%1;const t=(He-.25)*Math.PI*2,e=t+Math.PI,n=150;if(Vi.position.set(0,Math.sin(t)*n,Math.cos(t)*n),Ps.position.set(0,Math.sin(e)*n,Math.cos(e)*n),zn.position.copy(Vi.position).normalize().multiplyScalar(100),Ic.position.copy(Ps.position).normalize().multiplyScalar(100),ao%4===0)for(const c of su)c.position.x=(c.position.x+.06+125)%250-125;if(ao++,ao<3)return;ao=0;let i,r;const a=He;if(a<.2){const c=a/.2;ir.copy(Jn.night).lerp(Jn.dawn,c),gi.copy(Qn.night).lerp(Qn.dawn,c),i=.05+c*.8,r=.05+c*.45}else if(a<.3){const c=(a-.2)/.1;ir.copy(Jn.dawn).lerp(Jn.day,c),gi.copy(Qn.dawn).lerp(Qn.day,c),i=.85+c*.55,r=.5+c*.1}else if(a<.7)ir.copy(Jn.day),gi.copy(Qn.day),i=1.4,r=.6;else if(a<.8){const c=(a-.7)/.1;ir.copy(Jn.day).lerp(Jn.dusk,c),gi.copy(Qn.day).lerp(Qn.dusk,c),i=1.4-c*1.35,r=.6-c*.55}else{const c=(a-.8)/.2;ir.copy(Jn.dusk).lerp(Jn.night,c),gi.copy(Qn.dusk).lerp(Qn.night,c),i=.05,r=.05}Be.setClearColor(gi),se.fog.color.copy(gi),fr.update(He,Vi.position),fr.followCamera(Ze.position),zn.intensity=i,ou.intensity=Math.max(r,.04),Ic.intensity=Math.max(.35-i*.2,0),au.intensity=r*.5;const o=Math.sin(t)>0;Vi.visible=o,Ps.visible=!o,ru.opacity=r>.2?.78:0}let Nt=null,D=null;se.add(Ze);const V=new Rx;let sr=null;const Xe=new Ix(se),ne=new Dx,Io=new Ox(se),Dc=new Hx(se);let Oc=null;const Ss=new kx(se,ne);let ae=null,ge=null,Yn=!0,Bi="",Nn=null,An=0,We=0,kn=1;V.updateDayCounter(kn);const ki=new Vx;let xs=!1;const Pe=new Array(36).fill(0),ke=new Array(36).fill(0);function Ya(s,t=1){for(let e=0;e<Pe.length;e++)if(Pe[e]===s&&ke[e]<64){const n=64-ke[e],i=Math.min(t,n);if(ke[e]+=i,t-=i,t===0)return 0}for(;t>0;){const e=Pe.findIndex((n,i)=>n===0&&ke[i]===0);if(e<0)return t;Pe[e]=s,ke[e]=Math.min(t,64),t-=ke[e]}return 0}function Qx(s,t=1){if(Pe.reduce((n,i,r)=>n+(i===s?ke[r]:0),0)<t)return!1;for(let n=0;n<Pe.length&&t>0;n++)if(Pe[n]===s){const i=Math.min(t,ke[n]);ke[n]-=i,t-=i,ke[n]===0&&(Pe[n]=0)}return!0}function ed(s){return Pe.reduce((t,e,n)=>t+(e===s?ke[n]:0),0)}const bs=[],ys=[],cu=new Te(.05,.05,.4),lu=new ci({color:16768324}),ty=new Bn(.15,8,8),ey=new ci({color:26316});let Ce=null;const _i=new Vo;_i.far=5;const nd=new $t(0,0),ny=new Vo;ny.far=1;let Se=20,rn=20,ti=0,qa=0,co=new U,ja=0,Za=0;const lo={sharpness:0,protection:0,speed:0};let lr=0;const id=5;let Do=0,Oo=0;const vn=new Wx;vn.load();let Ka=0;const iy=new Map([[14,62],[13,63],[4,9],[15,64],[61,65]]);let ho=0,Mo=!1;const Nc=60,sd=new Float32Array(Nc);let $a=0,rr=0,hr="You died",uo=new U,Ja=0,Qa=0,tc=0,ec=0;const sy={0:new yt(8965358),1:new yt(14535816),2:new yt(7846792),3:new yt(11189196),4:new yt(6724027)};let nc=0,rd=.35,od=!1;const ic=new U;let ad=!1;function ry(s,t){var i,r,a,o,c;const e=s.trim().split(/\s+/),n=e[0].toLowerCase();if(n==="/gamemode"){const l=(i=e[1])==null?void 0:i.toLowerCase();return l==="creative"||l==="survival"||l==="spectator"?(D.setGameMode(l),V.setGameMode(l),l==="survival"&&(Se=20,V.updateHunger(Se,rn)),V.addChatMessage("",`Gamemode set to ${l}`,!0),ae==null||ae.sendGameMode(l),!0):(V.addChatMessage("","Usage: /gamemode creative | survival | spectator",!0),!0)}if(n==="/spectator"||n==="/spec")return D.setGameMode("spectator"),V.setGameMode("spectator"),V.addChatMessage("","Spectator mode — fly freely, no collisions, no damage",!0),!0;if(n==="/kill")return D.takeDamage(D.maxHealth),!0;if(n==="/heal")return D.health=D.maxHealth,V.updateHearts(D.maxHealth,D.maxHealth),V.addChatMessage("","Healed to full!",!0),!0;if(n==="/feed")return Se=rn,V.updateHunger(Se,rn),V.addChatMessage("","Fed to full!",!0),!0;if(n==="/time"){const l=(r=e[1])==null?void 0:r.toLowerCase();return l==="day"?(He=.3,V.addChatMessage("","Set time to day",!0),!0):l==="night"?(He=0,V.addChatMessage("","Set time to night",!0),!0):l==="sunrise"?(He=.22,V.addChatMessage("","Set time to sunrise",!0),!0):l==="sunset"?(He=.75,V.addChatMessage("","Set time to sunset",!0),!0):(V.addChatMessage("","Usage: /time day | night | sunrise | sunset",!0),!0)}if(n==="/tp"){const l=parseFloat(e[1]??"0"),h=parseFloat(e[2]??"0");return!isNaN(l)&&!isNaN(h)?(D.spawnAt(l,h),V.addChatMessage("",`Teleported to ${l.toFixed(1)}, ${h.toFixed(1)}`,!0)):V.addChatMessage("","Usage: /tp <x> <z>",!0),!0}if(n==="/craft")return V.showCraftingUI(),!0;if(n==="/weather"){const l=(a=e[1])==null?void 0:a.toLowerCase();return l==="clear"||l==="rain"||l==="thunder"?(Ss.setWeather(l),V.addChatMessage("",`Weather set to ${l}`,!0),!0):(V.addChatMessage("","Usage: /weather clear | rain | thunder",!0),!0)}if(n==="/nether"){const l=(o=e[1])==null?void 0:o.toLowerCase();return l==="enter"?(Gi=!0,D.spawnAt(D.position.x,D.position.z),D.position.y=30,se.fog.color.copy(new yt(16729088)),Be.setClearColor(2228224),fr.mesh.visible=!1,V.addChatMessage("","Entered the Nether!",!0),!0):l==="exit"?(Gi=!1,D.spawnAt(D.position.x,D.position.z),se.fog.color.copy(new yt(8900331)),fr.mesh.visible=!0,V.addChatMessage("","Exited the Nether!",!0),!0):(V.addChatMessage("","Usage: /nether enter | exit",!0),!0)}if(n==="/boss")return Nn=ge==null?void 0:ge.spawnAt("enderdragon",D.position.x,D.position.y+15,D.position.z-20),V.addChatMessage("","☠ The Ender Dragon awakens!",!0),V.showBossBar("Ender Dragon",(Nn==null?void 0:Nn.maxHealth)??200,200),!0;if(n==="/achievements")return ki.getAll().forEach(l=>{V.addChatMessage("",`${l.unlocked?"✅":"⬜"} ${l.icon} ${l.name}: ${l.description}`,!0)}),!0;if(n==="/save")return Yn?(Nt.saveToStorage({inventory:[...Pe],invCount:[...ke],px:D.position.x,py:D.position.y,pz:D.position.z,health:D.health,hunger:Se,xp:An,xpLevel:We,dayCount:kn}),V.addChatMessage("","World saved!",!0)):V.addChatMessage("","Save only works in singleplayer",!0),!0;if(n==="/load"){if(Yn){const l=Nt.loadFromStorage();if(l){for(let h=0;h<36;h++)Pe[h]=l.inventory[h]??0,ke[h]=l.invCount[h]??0;D.position.set(l.px,l.py,l.pz),D.health=l.health,Se=l.hunger,An=l.xp,We=l.xpLevel,kn=l.dayCount,V.updateHearts(D.health,D.maxHealth),V.updateHunger(Se,rn),V.updateXP(An,We),V.updateDayCounter(kn),V.updateHotbarFromInventory(Pe,ke)}V.addChatMessage("","World loaded!",!0)}else V.addChatMessage("","Load only works in singleplayer",!0);return!0}if(n==="/tame"){const l=(c=e[1])==null?void 0:c.toLowerCase();if(l==="wolf"||l==="cat"){const h=(ge==null?void 0:ge.getMobsByType(l))??[];for(const{id:d,mob:p}of h)if(D.position.distanceTo(p.group.position)<=5)return p.data.state="tamed",V.addChatMessage("",`Tamed a ${l}!`,!0),ne.play("eat"),!0;V.addChatMessage("",`No ${l} found nearby`,!0)}else V.addChatMessage("","Usage: /tame wolf | cat",!0);return!0}if(n==="/stats"){const l=vn.getAll();return V.addChatMessage("","--- Statistics ---",!0),V.addChatMessage("",`Kills: ${l.kills}`,!0),V.addChatMessage("",`Deaths: ${l.deaths}`,!0),V.addChatMessage("",`Blocks Placed: ${l.blocksPlaced}`,!0),V.addChatMessage("",`Blocks Broken: ${l.blocksBroken}`,!0),V.addChatMessage("",`Mobs Killed: ${l.mobsKilled}`,!0),V.addChatMessage("",`Distance Traveled: ${l.distanceTraveled.toFixed(1)}m`,!0),V.addChatMessage("",`Play Time: ${Math.floor(l.playTime/60)}m ${Math.floor(l.playTime%60)}s`,!0),!0}return n==="/help"?(["/gamemode creative | survival | spectator  (/spec)","/kill  /heal  /feed","/time day | night | sunrise | sunset","/tp <x> <z>","/craft","/weather clear | rain | thunder","/nether enter | exit","/boss - spawn the Ender Dragon","/achievements - show achievements","/tame wolf | cat - tame nearby pet","/stats - show statistics","/save · /load (singleplayer only)","F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory","Right-click disc to play/stop music · Hold shield (block 72) to reduce damage"].forEach(l=>V.addChatMessage("",l,!0)),!0):(V.addChatMessage("",`Unknown: ${n}. Type /help`,!0),!0)}const oy=document.getElementById("loginScreen"),No=document.getElementById("nameInput"),ay=document.getElementById("playBtn"),Uc=document.getElementById("hud"),cy=document.getElementById("underwaterOverlay");let Ms=!1,sc=0;const cd=55,ld=96,ly=2,hy=20,hd=new yt(670820),dd=document.getElementById("portalOverlay");let On=0,Gi=!1;const dy=new yt(3344392),hu=6;function uy(s,t,e){let n=-1;const i=hu;for(let r=-i;r<=i;r++)for(let a=-i;a<=i;a++)for(let o=-i;o<=i;o++){const c=Math.floor(s)+r,l=Math.floor(t)+a,h=Math.floor(e)+o;if(Nt.getBlockType(c,l,h)===73){const d=Math.sqrt(r*r+a*a+o*o);(n<0||d<n)&&(n=d)}}return n}const du=document.getElementById("damageFlash"),fy=document.getElementById("speedLines"),ud=document.getElementById("lowHealthVignette");let Eo=0,fd=40;function py(){du.style.opacity="1",Eo=.15}function my(s,t,e){if(Eo>0&&(Eo-=s,Eo<=0&&(du.style.opacity="0")),t<fd&&py(),fd=t,t/e<=.3&&t>0){const i=.4+Math.sin(Date.now()*.005)*.3;ud.style.opacity=String(i)}else ud.style.opacity="0"}const gy=document.getElementById("crosshair"),rc=document.getElementById("breakProgress");let pd=!1;function _y(s){const t=s>0;if(t!==pd&&(gy.classList.toggle("breaking",t),pd=t),t){const e=Math.floor(s*360);rc.style.background=`conic-gradient(rgba(255,255,255,0.7) ${e}deg, transparent ${e}deg)`,rc.style.opacity="1"}else rc.style.opacity="0"}async function jc(s){var d,p;Bi=s.trim()||`Player${Math.floor(Math.random()*999)}`,Yn=(((d=window.__getSelectedMode)==null?void 0:d.call(window))??"sp")==="sp";const e=document.getElementById("loadingBar"),n=document.getElementById("loadingProgress"),i=document.getElementById("loadingText"),r=document.getElementById("playBtn");if(r.style.display="none",e.style.display="block",n.style.width="20%",i.textContent="Loading textures...",await z_(),n.style.width="40%",i.textContent="Generating world...",Nt||(Nt=new wc(se),D=new Cc(Ze,Nt,se),se.add(Ze),Vh()&&(sr=new Av(D.getKeys(),()=>D.breakBlockNow(),()=>D.placeBlockNow()),sr.onLookDelta=(f,_)=>{D.yaw-=f*.004,D.pitch-=_*.004,D.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,D.pitch))},sr.hide())),n.style.width="70%",await new Promise(f=>setTimeout(f,200)),n.style.width="90%",i.textContent="Starting game...",await new Promise(f=>setTimeout(f,150)),n.style.width="100%",oy.style.display="none",Uc.style.display="block",sr&&sr.show(),Yn){const f=Nt.loadFromStorage();if(Nt.initializeTorchLights(),f){for(let _=0;_<36;_++)Pe[_]=f.inventory[_]??0,ke[_]=f.invCount[_]??0;D.health=f.health,Se=f.hunger,An=f.xp,We=f.xpLevel,kn=f.dayCount,setTimeout(()=>{D.position.set(f.px,f.py,f.pz),V.updateHearts(D.health,D.maxHealth),V.updateHunger(Se,rn),V.updateXP(An,We),V.updateDayCounter(kn),V.updateHotbarFromInventory(Pe,ke)},100)}}{let f=0,_=0,v=9999;for(let m=-5;m<=5&&v===9999;m++)for(let g=-5;g<=5&&v===9999;g++){const E=m*16,M=g*16,w=Nt.getSurfaceHeight(E,M);w>=63&&w<=80&&(v=w,f=E,_=M)}if(v===9999)for(let m=-5;m<=5;m++)for(let g=-5;g<=5;g++){const E=m*16,M=g*16,w=Nt.getSurfaceHeight(E,M);w>62&&w<v&&(v=w,f=E,_=M)}D.spawnAt(f,_)}Vh()||setTimeout(()=>document.body.requestPointerLock(),200),setTimeout(()=>ne.startAmbientMusic("day"),3e3),D.onHealthChanged=f=>V.updateHearts(f,D.maxHealth),D.setDeathCause=f=>{hr=f},D.onDied=()=>{vn.increment("deaths"),uo.copy(D.position);const f=document.getElementById("screenFade");f.style.background="rgba(80,0,0,0.7)",f.style.transition="opacity 0.8s ease",f.style.opacity="1",setTimeout(()=>{V.showDeath(hr,uo.x,uo.y,uo.z,We),f.style.opacity="0"},600),V.addChatMessage("","☠ You died!",!0),ne.play("hurt")},D.onOpenChat=()=>{V.openChatInput(),D.setChatOpen(!0)},ki.onUnlock=f=>{V.showAchievement(f.name,f.description,f.icon),ne.play("eat")},D.onRightClick=()=>{if(D.selectedBlockType===33){if(Ce){if(se.remove(Ce.mesh),Ce.inWater){const f=["Salmon","Cod","Tropical Fish","Pufferfish"],_=f[Math.floor(Math.random()*f.length)];V.addChatMessage("",`You caught a ${_}!`,!0),Se=Math.min(rn,Se+2),V.updateHunger(Se,rn),ne.play("eat")}Ce=null}else{const f=fo.set(0,0,-1).applyAxisAngle(mo,D.camera.rotation.x).applyAxisAngle(go,D.camera.rotation.y),_=new te(ty,ey);_.position.copy(D.position),_.position.y+=.6,se.add(_),Ce={mesh:_,vel:f.clone().multiplyScalar(15),inWater:!1,waitTimer:2+Math.random()*6}}return}},D.onBreakBlock=(f,_,v)=>{const m=Nt.getBlock(f,_,v);if(!m)return;const E={1:{item:2,count:1},2:{item:2,count:1},3:{item:11,count:1},4:{item:4,count:1},5:{item:5,count:1},6:{item:5,count:1,chance:.05},8:{item:8,count:1},10:{item:10,count:1},11:{item:11,count:1},12:{item:12,count:1},13:{item:63,count:1},14:{item:62,count:1},15:{item:64,count:[2,4]},16:{item:16,count:1},17:{item:11,count:1},18:{item:18,count:1},19:{item:19,count:[2,4]},20:{item:20,count:1},21:{item:21,count:1},22:{item:22,count:1},23:{item:23,count:1},24:{item:24,count:1},25:{item:25,count:1},26:{item:26,count:1},27:{item:27,count:1},31:{item:31,count:1},49:{item:49,count:1},54:{item:54,count:1},61:{item:65,count:[1,3]},74:{item:76,count:[2,3]},75:{item:77,count:[4,8]},78:{item:78,count:1},79:{item:79,count:1},80:{item:80,count:1},81:{item:81,count:1},82:{item:82,count:1}}[m.type];if(E){const M=Math.random();if(!E.chance||M<E.chance){const w=Array.isArray(E.count)?Math.floor(Math.random()*(E.count[1]-E.count[0]+1))+E.count[0]:E.count;Ya(E.item,w),V.updateHotbarFromInventory(Pe,ke),V.addChatMessage("",`+ ${w}x ${si(E.item)}`,!0)}}if(vn.increment("blocksBroken"),ki.trigger("first_block"),m.type===24){let M=0;const w=setInterval(()=>{if(M%2===0&&Xe.burst(f,_,v,24),M++,M>8){clearInterval(w),Xe.explosion(f,_,v,30);const O=5,L=O*O;for(let R=-O;R<=O;R++)for(let j=-O;j<=O;j++)for(let J=-O;J<=O;J++)if(R*R+j*j+J*J<=L){const ot=Math.round(f)+R,F=Math.round(_)+j,W=Math.round(v)+J,$=Nt.getBlock(ot,F,W);$&&(Nt.removeBlock(ot,F,W),Xe.burst(ot,F,W,$.type))}const I=D.position.x-f,q=D.position.y-_,b=D.position.z-v;I*I+q*q+b*b<49&&D.gameMode==="survival"&&(D.takeDamage(6),V.updateHearts(D.health,D.maxHealth)),ne.play("break")}},500);return}m.type===56&&Nt.removeTorchLight(f,_,v),m.type===59&&Nt.deactivateLamp(f,_,v),Xe.burst(f,_,v,m.type),ne.play("break"),ae==null||ae.sendRemoveBlock(f,_,v)},D.onPlaceBlock=(f,_,v,m)=>{vn.increment("blocksPlaced"),m===56&&Nt.addTorchLight(f,_+.5,v),Xe.placeEffect(f,_,v,m),ne.play("place"),ae==null||ae.sendAddBlock(f,_,v,m)},Dc.onCollect=f=>{An+=f;const _=We;for(;An>=(We+1)*10;)We++;V.updateXP(An,We),We>_&&(ne.play("eat"),V.addChatMessage("",`Level Up! Level ${We}`,!0))},V.onEnchant=f=>{We>=3?(We-=3,An-=3*10,V.updateXP(An,We),f==="sharpness"?(lo.sharpness=1,V.addChatMessage("","Applied Sharpness I (+2 damage)!",!0)):f==="protection"?(lo.protection=1,V.addChatMessage("","Applied Protection I (+3 armor)!",!0)):f==="speed"&&(lo.speed=1,V.addChatMessage("","Applied Speed I (+20% movement)!",!0)),ne.play("eat")):V.addChatMessage("","Not enough XP levels!",!0)},document.addEventListener("mousedown",f=>{if(!document.pointerLockElement)return;if(f.button===2){const m={69:"disc_green",70:"disc_red",71:"disc_blue"}[D.selectedBlockType];m&&(ne.isMusicPlaying()?ne.stopMusic():ne.playMusic(m));return}if(f.button!==0)return;if(D.selectedBlockType===32){const v=fo.set(0,0,-1).applyAxisAngle(mo,D.camera.rotation.x).applyAxisAngle(go,D.camera.rotation.y),m=new te(cu,lu);m.position.copy(D.position),m.position.y+=.6,se.add(m),bs.push({mesh:m,vel:v.multiplyScalar(30),life:10}),ne.play("hit");return}_i.setFromCamera(nd,Ze);const _=ge==null?void 0:ge.tryAttack(_i,lo);if(_){ne.play("hit"),ki.trigger("first_mob");const v=ge==null?void 0:ge.getMob(_.mobId);if(v&&!v.alive){Io.spawnFromMob(v.type,v.targetPos.x,v.targetPos.y,v.targetPos.z);const m={pig:3,chicken:2,cow:5,sheep:3,zombie:8,skeleton:10,creeper:5,horse:10,villager:0,enderdragon:100,phantom:6,slime:4,witherskeleton:8,spider:5,wolf:4,cat:0},g=v.type.toLowerCase(),E=m[g]||1;Dc.spawn(v.targetPos.x,v.targetPos.y,v.targetPos.z,E),v.type==="zombie"&&ki.trigger("kill_zombie"),v.type==="creeper"&&ki.trigger("kill_creeper"),v.type==="enderdragon"&&ki.trigger("kill_dragon"),vn.recordMobKill(v.type),V.addKillFeedDeath(v.type)}Yn||ae==null||ae.sendAttackMob(_.mobId,_.damage)}}),document.addEventListener("mousedown",f=>{f.button===2&&D.selectedBlockType===72&&(f.preventDefault(),Xa=!0,Ze.fov=65,Ze.updateProjectionMatrix())}),document.addEventListener("mouseup",f=>{f.button===2&&(Xa=!1,Ze.fov=75,Ze.updateProjectionMatrix())}),document.addEventListener("contextmenu",f=>{document.pointerLockElement&&f.preventDefault()}),document.addEventListener("keydown",f=>{if(f.key==="e"||f.key==="E"){if(!document.pointerLockElement||V.isChatOpen())return;f.preventDefault();const _=fo.set(0,0,-1).applyAxisAngle(mo,D.camera.rotation.x).applyAxisAngle(go,D.camera.rotation.y).normalize(),v=Nt.raycastBlock(D.position,_,5);if(v){const m=Nt.getBlock(v.x,v.y,v.z);if(m&&m.type===40)if(We>=5){V.showEnchantUI(We);return}else{V.addChatMessage("","You need 5+ XP levels to enchant!",!0);return}if(m&&m.type===34){He>.7||He<.25?(V.addChatMessage("","Sleeping...",!0),He=.25,D.health=Math.min(D.maxHealth,D.health+3),Se=Math.min(rn,Se+4),V.updateHearts(D.health,D.maxHealth),V.updateHunger(Se,rn),ne.play("eat"),setTimeout(()=>{V.addChatMessage("","You woke up!",!0)},2e3)):V.addChatMessage("","You can only sleep at night!",!0);return}}if(ge){_i.far=3,_i.setFromCamera(nd,Ze);const m=ge.getAllMobsForDisplay(),g=[];for(const{id:w,mob:O}of m)O.type==="villager"&&O.group.traverse(L=>{L.isMesh&&g.push({mesh:L,mobId:w,type:O.type})});const E=g.map(w=>w.mesh),M=_i.intersectObjects(E);if(M.length>0){const w=M[0];if(g.find(L=>L.mesh===w.object)){_i.far=5;const L=[{give:"45",giveName:"5 Wheat",receive:"food",receiveName:"1 Bread"},{give:"14",giveName:"3 Iron Ore",receive:"36",receiveName:"1 Iron Chestplate"},{give:"5",giveName:"10 Wood",receive:"33",receiveName:"1 Fishing Rod"},{give:"39",giveName:"1 Compass",receive:"46",receiveName:"1 Enchanted Book"}];V.showTradeUI(L),V.onTrade=I=>{V.addChatMessage("","Trade accepted!",!0)};return}}_i.far=5}xs?(V.hideInventory(),xs=!1,document.body.requestPointerLock()):(V.showInventory(Pe),xs=!0,document.exitPointerLock())}}),document.addEventListener("keydown",f=>{f.key==="Tab"&&document.pointerLockElement&&!V.isChatOpen()&&(f.preventDefault(),xs?(V.hideInventory(),xs=!1,document.body.requestPointerLock()):(V.showInventory(Pe),xs=!0,document.exitPointerLock()))}),document.addEventListener("keydown",f=>{(f.key==="o"||f.key==="O")&&document.pointerLockElement&&!V.isChatOpen()&&(f.preventDefault(),V.isScoreboardOpen()?(V.hideScoreboard(),document.body.requestPointerLock()):(V.showScoreboard(vn.getAll(),kn),document.exitPointerLock()))});let a=!0;document.addEventListener("keydown",f=>{(f.key==="F1"||f.key==="f1")&&(f.preventDefault(),a=!a,a?V.showHUD():V.hideHUD())}),document.addEventListener("keydown",f=>{if(f.key==="F2"||f.key==="f2"){f.preventDefault();try{const _=Be.domElement.toDataURL("image/png"),v=document.createElement("a");v.href=_,v.download="minecraft-"+Date.now()+".png",v.click(),V.addChatMessage("","Screenshot saved!",!0)}catch{V.addChatMessage("","Failed to capture screenshot",!0)}}}),document.addEventListener("keydown",f=>{(f.key==="F3"||f.key==="f3")&&(f.preventDefault(),Mo=!Mo,Mo?V.showDebugScreen():V.hideDebugScreen())}),document.addEventListener("keydown",f=>{(f.key==="F4"||f.key==="f4")&&(f.preventDefault(),D.gameMode==="spectator"?(D.setGameMode("survival"),V.setGameMode("survival"),Se=rn,V.updateHunger(Se,rn),V.addChatMessage("","Returned to Survival mode",!0),ae==null||ae.sendGameMode("survival")):(D.setGameMode("spectator"),V.setGameMode("spectator"),V.addChatMessage("","Spectator mode — fly freely, no collisions, no damage (F4 to exit)",!0),ae==null||ae.sendGameMode("spectator")))}),V.onChestTransfer=(f,_,v,m)=>{if(f){const g=v[_];if(!g)return;const E=m.indexOf(0);if(E>=0){m[E]=g,v[_]=0;for(let M=0;M<m.length&&M<Di.length;M++)Di[M]=m[M];V.updateHotbarFromInventory(Di),ne.play("place")}else V.addChatMessage("","Hotbar is full!",!0)}else{const g=m[_];if(!g)return;const E=v.indexOf(0);if(E>=0){v[E]=g,m[_]=0;for(let M=0;M<m.length&&M<Di.length;M++)Di[M]=m[M];V.updateHotbarFromInventory(Di),ne.play("place")}else V.addChatMessage("","Chest is full!",!0)}},document.addEventListener("keydown",f=>{if((f.key==="e"||f.key==="E")&&Uc.style.display!=="none"){let _=null;for(let w=-5;w<=5&&!_;w++)for(let O=-5;O<=5&&!_;O++)for(let L=-5;L<=5&&!_;L++){const I=Math.floor(D.position.x)+w,q=Math.floor(D.position.y)+O,b=Math.floor(D.position.z)+L,R=Nt.getBlock(I,q,b);R&&R.type===31&&D.position.distanceTo(po.set(I+.5,q+.5,b+.5))<=5&&(_=[I,q,b])}if(_){const w=Nt.getChestInventory(_[0],_[1],_[2]),O=Di.slice(0,9);V.showChestUI(w,O),V.onChestClose=()=>{Nt.setChestInventory(_[0],_[1],_[2],w)},ne.play("place");return}let v=!1;for(let w=-5;w<=5&&!v;w++)for(let O=-5;O<=5&&!v;O++)for(let L=-5;L<=5&&!v;L++){const I=Math.floor(D.position.x)+w,q=Math.floor(D.position.y)+O,b=Math.floor(D.position.z)+L,R=Nt.getBlock(I,q,b);R&&R.type===22&&D.position.distanceTo(po.set(I+.5,q+.5,b+.5))<=5&&(v=!0)}if(v){V.showCraftingUI(),ne.play("place");return}let m=null;for(let w=-5;w<=5;w++){for(let O=-5;O<=5;O++){for(let L=-5;L<=5;L++){const I=Math.floor(D.position.x)+w,q=Math.floor(D.position.y)+O,b=Math.floor(D.position.z)+L,R=Nt.getBlock(I,q,b);if(R&&R.type===23&&D.position.distanceTo(po.set(I+.5,q+.5,b+.5))<=5){m=[I,q,b];break}}if(m)break}if(m)break}if(m){V.showSmeltingUI();return}const g=fo.set(0,0,-1).applyAxisAngle(mo,D.camera.rotation.x).applyAxisAngle(go,D.camera.rotation.y),E=new Vo(D.position,g);E.far=2;let M=null;for(let w=-2;w<=2;w++){for(let O=-2;O<=2;O++){for(let L=-2;L<=2;L++){const I=Math.floor(D.position.x)+w,q=Math.floor(D.position.y)+O,b=Math.floor(D.position.z)+L,R=Nt.getBlock(I,q,b);if(R&&R.type===58&&D.position.distanceTo(po.set(I+.5,q+.5,b+.5))<=2){M=[I,q,b];break}}if(M)break}if(M)break}M&&(Nt.toggleLever(M[0],M[1],M[2]),ne.play("place"))}}),V.onChat=f=>{f.startsWith("/")?ry(f):Yn?V.addChatMessage(Bi,f):ae==null||ae.sendChat(f),D.setChatOpen(!1)},V.onSmelt=(f,_)=>{const v=iy.get(f);return v?(Pe.push(v),V.addChatMessage("",`Smelted: ${si(v)}`,!0),ne.play("eat"),v):null},V.getInvCount=f=>ed(f);const o={log_to_planks:{ingredients:{5:1},output:{type:10,count:4}},planks_to_sticks:{ingredients:{10:2},output:{type:280,count:4}},wood_pickaxe:{ingredients:{10:3,280:2},output:{type:270,count:1}},wood_sword:{ingredients:{10:2,280:1},output:{type:268,count:1}},wood_axe:{ingredients:{10:3,280:2},output:{type:271,count:1}},wood_shovel:{ingredients:{10:1,280:2},output:{type:269,count:1}},stone_pickaxe:{ingredients:{11:3,280:2},output:{type:274,count:1}},stone_sword:{ingredients:{11:2,280:1},output:{type:272,count:1}},stone_axe:{ingredients:{11:3,280:2},output:{type:275,count:1}},iron_pickaxe:{ingredients:{62:3,280:2},output:{type:257,count:1}},iron_sword:{ingredients:{62:2,280:1},output:{type:267,count:1}},iron_axe:{ingredients:{62:3,280:2},output:{type:258,count:1}},iron_helmet:{ingredients:{62:5},output:{type:35,count:1}},iron_chest:{ingredients:{62:8},output:{type:36,count:1}},iron_legs:{ingredients:{62:7},output:{type:37,count:1}},iron_boots:{ingredients:{62:4},output:{type:38,count:1}},crafting_table:{ingredients:{10:4},output:{type:22,count:1}},furnace:{ingredients:{11:8},output:{type:23,count:1}},chest:{ingredients:{10:8},output:{type:31,count:1}},torch:{ingredients:{64:1,280:1},output:{type:56,count:4}},planks_to_slab:{ingredients:{10:3},output:{type:10,count:4}},sand_to_glass:{ingredients:{4:1},output:{type:9,count:1}},ladder:{ingredients:{280:7},output:{type:78,count:3}},oak_fence:{ingredients:{10:4,280:2},output:{type:79,count:3}},fence_gate:{ingredients:{280:4,10:2},output:{type:80,count:1}},stone_bricks:{ingredients:{3:4},output:{type:81,count:4}}};V.onCraft=f=>{const _=o[f];if(!_)return!1;for(const[v,m]of Object.entries(_.ingredients))if(ed(Number(v))<m)return V.addChatMessage("","✗ Not enough materials",!0),!1;for(const[v,m]of Object.entries(_.ingredients))Qx(Number(v),m);return Ya(_.output.type,_.output.count),V.updateHotbarFromInventory(Pe,ke),V.addChatMessage("",`✓ Crafted ${_.output.count}x ${si(_.output.type)}`,!0),!0},V.onRespawn=()=>{const f=document.getElementById("screenFade");f.style.background="#000",f.style.transition="opacity 0.4s ease",f.style.opacity="1",setTimeout(()=>{D.respawn(),Se=rn,V.updateHearts(D.maxHealth,D.maxHealth),V.updateHunger(Se,rn),ae==null||ae.sendRespawn(),setTimeout(()=>{f.style.transition="opacity 0.6s ease",f.style.opacity="0",setTimeout(()=>document.body.requestPointerLock(),200)},200)},400)},V.updateHearts(D.health,D.maxHealth),V.updateHunger(Se,rn),V.setGameMode(D.gameMode);let c=0;const l=f=>{c=(f%8+8)%8,D.selectedBlockType=Pe[c]??0,V.selectSlot(c),V.updateHotbarFromInventory(Pe,ke)};document.addEventListener("wheel",f=>{l(c+(f.deltaY>0?1:-1))}),document.addEventListener("keydown",f=>{const _=parseInt(f.key);_>=1&&_<=8&&l(_-1)});const h={porkchop:0,feather:0,beef:0,leather:0,wool:26,chicken:0,egg:0,gunpowder:0,bone:0,arrow:0,string:0,salmon:0,cod:0,tropical_fish:0,pufferfish:0,iron_helmet:35,iron_chestplate:36,iron_leggings:37,iron_boots:38,wooden_sword:268,wooden_pickaxe:270,wooden_axe:271,wooden_shovel:269,stone_sword:272,stone_pickaxe:274,stone_axe:275,iron_sword:267,iron_pickaxe:257,iron_axe:258,oak_log:5,oak_planks:10,cobblestone:11,stick:280,dirt:2,stone:3,sand:4,gravel:12,coal:64,iron_ingot:62,gold_ingot:63,diamond:65};if(Io.onPickup=f=>{ne.play("eat");const _=h[f];_&&_>0?(Ya(_,1),V.updateHotbarFromInventory(Pe,ke),V.addChatMessage("",`+ 1x ${si(_)}`,!0)):V.addChatMessage("",`Picked up: ${f}`,!0),f==="iron_helmet"&&(D.armor=Math.min(20,D.armor+5)),f==="iron_chestplate"&&(D.armor=Math.min(20,D.armor+8)),f==="iron_leggings"&&(D.armor=Math.min(20,D.armor+7)),f==="iron_boots"&&(D.armor=Math.min(20,D.armor+4))},Yn){V.setConnectionStatus("connected"),V.updatePlayerCount(1),ge=new Lo(se,Nt,{onPlayerDamage:f=>{if(hr="You were killed by a mob",D.gameMode==="survival"){let _=f;Xa&&td>0&&(_=Math.ceil(f*.2),td--),D.takeDamage(_),ne.play("hurt"),V.updateHearts(D.health,D.maxHealth),D.health<=0&&(vn.increment("deaths"),V.showDeath())}},getPlayerPos:()=>D.position,onExplosion:(f,_,v,m)=>{const g=m*m;for(let w=-m;w<=m;w++)for(let O=-m;O<=m;O++)for(let L=-m;L<=m;L++)if(w*w+O*O+L*L<=g){const I=Math.round(f)+w,q=Math.round(_)+O,b=Math.round(v)+L,R=Nt.getBlock(I,q,b);R&&(Nt.removeBlock(I,q,b),Xe.burst(I,q,b,R.type))}ne.play("break");const E=Math.sqrt((D.position.x-f)**2+(D.position.y-_)**2+(D.position.z-v)**2);E<20&&(Do=.4,Oo=Math.max(.02,.12*(1-E/20)));const M=Be.domElement.style.filter;Be.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Be.domElement.style.filter=M},100)},onWitherEffect:()=>{lr=id}},!0);for(let f=0;f<10;f++)ge.spawnRandom(0,0);Oc=new Bx(Nt),V.addChatMessage("",`Welcome, ${Bi}! 🌍 Singleplayer`,!0),V.addChatMessage("","T=chat · F5=3rd person · Ctrl=sprint · /help",!0)}else{const f=window.location.protocol==="https:",_=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"localhost:8471":f?window.location.hostname:"159.223.140.36:8471",v=((p=window.__getServerAddr)==null?void 0:p.call(window))??_;ae=new Sx(se,Nt,{onStatusChange:m=>V.setConnectionStatus(m),onChat:(m,g,E)=>V.addChatMessage(m,g,E),onPlayerCount:m=>V.updatePlayerCount(m),onPlayerDamage:m=>{D.takeDamage(m),ne.play("hurt"),V.updateHearts(D.health,D.maxHealth)},onPlayerDied:m=>{V.addChatMessage("",`☠ ${m} was slain!`,!0),m===Bi&&(vn.increment("deaths"),V.showDeath())}},v),ge=new Lo(se,Nt,{onPlayerDamage:()=>{},getPlayerPos:()=>D.position,onExplosion:(m,g,E,M)=>{const w=M*M;for(let I=-M;I<=M;I++)for(let q=-M;q<=M;q++)for(let b=-M;b<=M;b++)if(I*I+q*q+b*b<=w){const R=Math.round(m)+I,j=Math.round(g)+q,J=Math.round(E)+b,ot=Nt.getBlock(R,j,J);ot&&(Nt.removeBlock(R,j,J),Xe.burst(R,j,J,ot.type))}ne.play("break");const O=Math.sqrt((D.position.x-m)**2+(D.position.y-g)**2+(D.position.z-E)**2);O<20&&(Do=.4,Oo=Math.max(.02,.12*(1-O/20)));const L=Be.domElement.style.filter;Be.domElement.style.filter="brightness(1.3)",setTimeout(()=>{Be.domElement.style.filter=L},100)},onWitherEffect:()=>{lr=id}},!1),ae.setMobManager(ge),ae.setLocalStateGetter(()=>D.getState()),await ae.join(Bi),V.addChatMessage("",`Welcome, ${Bi}! 🌐 Multiplayer`,!0),V.addChatMessage("","T=chat · F5=3rd person · /help",!0)}}ay.addEventListener("click",()=>jc(No.value));No.addEventListener("keydown",s=>{s.key==="Enter"&&jc(No.value)});const oc=new URLSearchParams(window.location.search).get("name");oc&&(No.value=oc,setTimeout(()=>jc(oc),800));let md=performance.now(),ac=0;const vy=60;new U;const xy=new yt(16777215),fo=new U,po=new U,mo=new U(1,0,0),go=new U(0,1,0),uu=20,yy=Array.from({length:uu},()=>({x:0,z:0,alive:!0})),lc=[],fu=8,My=Array.from({length:fu},()=>({x:0,z:0})),hc=[];function pu(){var e,n,i,r;requestAnimationFrame(pu);const s=performance.now(),t=Math.min((s-md)/1e3,.05);if(md=s,t>0&&(sd[$a]=1/t,$a=($a+1)%Nc,rr<Nc&&rr++),Uc.style.display!=="none"&&Nt&&D){if(D.update(t),ae==null||ae.updatePlayers(t),Yn&&(ac+=t,ac>=vy&&(ac=0,Nt.saveToStorage({inventory:[...Pe],invCount:[...ke],px:D.position.x,py:D.position.y,pz:D.position.z,health:D.health,hunger:Se,xp:An,xpLevel:We,dayCount:kn}))),Yn&&Nt.generateAroundPlayer(D.position.x,D.position.z),Jx(t),!Ms&&!Gi){if(tc+=t,tc>2){tc=0;const p=Nt.getBiome(Math.round(D.position.x),Math.round(D.position.z));p!==ec&&(ec=p)}const h=se.fog,d=sy[ec];d&&h.color.lerp(d,.08)}if(ge&&(ge.dayTime=He,ge.update(t)),Xe.update(t),Qa+=t,Qa>.5){Qa=0;const h=(He-.25)*Math.PI*2,d=Math.sin(h);if(d>.2)for(let p=0;p<2;p++){const f=(Math.random()-.5)*16,_=Math.random()*6+1,v=(Math.random()-.5)*16;Xe.dustMote(D.position.x+f,D.position.y+_,D.position.z+v)}else if(d<-.1)for(let p=0;p<3;p++){const f=(Math.random()-.5)*20,_=(Math.random()-.5)*20;Xe.firefly(D.position.x+f,D.position.y-1+Math.random()*3,D.position.z+_)}}mv(s/1e3),Nt.updateTorchFlicker(s/1e3);for(const[h]of Nt.torchLights){const[d,p,f]=h.split(",").map(Number),_=d-D.position.x,v=f-D.position.z;_*_+v*v>576||(Math.random()<.06&&Xe.spawn(d+(Math.random()-.5)*.1,p+.7,f+(Math.random()-.5)*.1,8947848,1.5,0,.3,0,.15),Math.random()<.04&&Xe.spawn(d+(Math.random()-.5)*.08,p+.55,f+(Math.random()-.5)*.08,16746496,.4,0,.5,0,.12))}if(Ss.update(t,D.position,se.fog.color),Io.update(t,D.position),Dc.update(t,D.position),lr>0&&(lr-=t),vn.increment("playTime",t),D.velocity&&vn.increment("distanceTraveled",D.velocity.length()*t),Ka+=t,Ka>=60&&(Ka=0,vn.save()),ja+=t,ja>.1&&(ja=0,Nt.checkPressurePlate(D.position)),Za+=t,Za>30&&(Za=0,D.position.y<10&&(ne.playAmbient("cave"),ne.setAmbientMood("cave"))),Ce){Ce.vel.y-=20*t,Ce.mesh.position.addScaledVector(Ce.vel,t);const h=Math.round(Ce.mesh.position.x),d=Math.round(Ce.mesh.position.y),p=Math.round(Ce.mesh.position.z);Nt.getBlockType(h,d,p)===7&&!Ce.inWater&&(Ce.inWater=!0,Ce.vel.set(0,0,0),Ce.mesh.position.y=d+.5),Ce.inWater&&(Ce.waitTimer-=t,Ce.mesh.position.y=d+.5+Math.sin(s*.003)*.1,Ce.waitTimer<=0&&(Ce.mesh.material.color.set(16776960),setTimeout(()=>{Ce!=null&&Ce.mesh.material&&Ce.mesh.material.color.set(26316)},300)))}for(let h=bs.length-1;h>=0;h--){const d=bs[h];d.life-=t,d.vel.y-=20*t,d.mesh.position.addScaledVector(d.vel,t);const p=Math.sqrt(d.vel.x*d.vel.x+d.vel.y*d.vel.y+d.vel.z*d.vel.z);p>.1&&(d.mesh.rotation.x=-Math.asin(d.vel.y/p),d.mesh.rotation.y=Math.atan2(d.vel.x,d.vel.z)),Math.random()<.3&&Xe&&Xe.spawn(d.mesh.position.x,d.mesh.position.y,d.mesh.position.z,16777130,.3,0,-.2,0);const f=Math.round(d.mesh.position.x),_=Math.round(d.mesh.position.y),v=Math.round(d.mesh.position.z);if(Nt.hasBlock(f,_,v)){const g=new te(cu,lu);g.position.copy(d.mesh.position),g.rotation.copy(d.mesh.rotation),se.add(g),ys.push({mesh:g,life:8}),se.remove(d.mesh),bs.splice(h,1);continue}let m=!1;if(ge)for(const g of ge.iterMobs()){const E=g.mob,M=d.mesh.position.x-E.targetPos.x,w=d.mesh.position.y-E.targetPos.y,O=d.mesh.position.z-E.targetPos.z;if(M*M+w*w+O*O<.64&&E.alive){E.health-=5,E.showDamage(E.health),E.health<=0&&(E.die(),vn.recordMobKill(g.data.type),Io.spawnFromMob(g.data.type,E.targetPos.x,E.targetPos.y,E.targetPos.z)),se.remove(d.mesh),bs.splice(h,1),m=!0,ne.play("hit");break}}d.life<=0&&!m&&(se.remove(d.mesh),bs.splice(h,1))}for(let h=ys.length-1;h>=0;h--)ys[h].life-=t,ys[h].life<=0&&(se.remove(ys[h].mesh),ys.splice(h,1));if(Oc){if(hc.length=0,ae&&ae.getPlayerData){const h=((e=ae.getPlayerData)==null?void 0:e.call(ae))??[];let d=0;for(const p of h)if(p.name!==Bi&&d<fu){const f=My[d++];f.x=p.x,f.z=p.z,hc.push(f)}}if(lc.length=0,ge){let h=0;for(const d of ge.iterMobs())if(h<uu){const p=yy[h++];p.x=d.mob.targetPos.x,p.z=d.mob.targetPos.z,p.alive=d.mob.alive,lc.push(p)}}Oc.update(t,D.position,D.getYaw(),hc,lc)}if(Nn&&Nn.alive?V.updateBossBar(Nn.health,Nn.maxHealth):Nn&&!Nn.alive&&(V.hideBossBar(),Nn=null),lr>0?V.updateHearts(D.health,D.maxHealth,!0):V.updateHearts(D.health,D.maxHealth,!1),D.gameMode==="survival"){const h=D.position.x-co.x,d=D.position.y-co.y,p=D.position.z-co.z,f=h*h+d*d+p*p;co.copy(D.position),f>.01&&(qa+=t,qa>1.5&&(qa=0,Se=Math.max(0,Se-.5),V.updateHunger(Math.ceil(Se*2)/2,rn))),Se>=16&&D.health<D.maxHealth&&(ti+=t,ti>4&&(ti=0,D.health=Math.min(D.maxHealth,D.health+1),V.updateHearts(D.health,D.maxHealth))),Se<=0&&(hr="You starved",ti+=t,ti>4&&(ti=0,D.health>1&&D.takeDamage(1),V.updateHearts(D.health,D.maxHealth)))}if(D.gameMode==="survival"){const h=Math.round(D.position.x),d=Math.round(D.position.y),p=Math.round(D.position.z);Nt.getBlockType(h,d,p)===47&&(hr="You burned in lava",ti+=t,ti>.5&&(ti=0,D.takeDamage(2),V.updateHearts(D.health,D.maxHealth)))}if(ho<.22&&He>=.22&&(kn++,V.updateDayCounter(kn),V.addChatMessage("","Dawn breaks...",!0),ne.playAmbient("birds"),ne.setAmbientMood("day")),ho<.73&&He>=.73&&(V.addChatMessage("","Night falls... watch out for monsters!",!0),ne.playAmbient("wind"),ne.setAmbientMood("night")),ho<.95&&He>=.95&&ge&&Math.random()<.5){const h=3+Math.floor(Math.random()*3);for(let d=0;d<h;d++){const p=Math.random()*Math.PI*2,f=20+Math.random()*15,_=D.position.x+Math.cos(p)*f,v=D.position.z+Math.sin(p)*f,m=Nt.getSurfaceHeight(Math.round(_),Math.round(v))+1.5,g=Math.random()<.5?"zombie":"skeleton";ge.spawnMob(g,_,m,v)}}ho=He,V.updatePosition(D.position.x,D.position.y,D.position.z),V.updateTime(He),my(t,D.health,D.maxHealth),_y(D.getBreakProgress());const a=((n=D.keys)==null?void 0:n.ControlLeft)&&D.velocity.lengthSq()>4;fy.style.opacity=a?"0.7":"0",Vi.position.x+=(D.position.x-Vi.position.x)*.02,Ps.position.x+=(D.position.x-Ps.position.x)*.02,Ss.isThunderFlashing()&&Be.setClearColor(xy);const o=Nt.getBlockType(Math.round(D.position.x),Math.round(D.position.y),Math.round(D.position.z))===7;o&&!ad&&(Xe.splash(D.position.x,D.position.y,D.position.z,12),Xe.bubbles(D.position.x,D.position.y-.5,D.position.z,8),ne.play("splash")),ad=o;const c=Nt.getBlockType(Math.round(Ze.position.x),Math.round(Ze.position.y),Math.round(Ze.position.z))===7;if(c!==Ms&&(Ms=c,cy.style.opacity=Ms?"1":"0"),Ms){const h=se.fog;h.near=ly,h.far=hy,h.color.copy(hd),Be.setClearColor(hd),sc+=t,sc>.3&&(sc=0,Xe.bubbles(D.position.x,D.position.y+.5,D.position.z,2))}else if(!Gi){const h=se.fog;h.near=cd,h.far=ld}const l=uy(D.position.x,D.position.y,D.position.z);if(l>=0){const h=Math.max(0,1-l/hu);On+=(h-On)*.08}else On+=(0-On)*.08;if(On>.01){dd.style.opacity=String(On);const h=Math.sin(performance.now()*.002)*On*40,d=On*1.5,p=1+On*1.2;if(Be.domElement.style.filter=`hue-rotate(${h}deg) blur(${d}px) saturate(${p})`,On>.6&&!Ms){const f=se.fog,_=(On-.6)/.4;f.color.lerpColors(f.color,dy,_*.15),f.near=cd-_*20,f.far=ld-_*30,Gi=!0}l>=0&&l<3&&Math.random()<.3&&Xe.magic(D.position.x+(Math.random()-.5)*3,D.position.y+(Math.random()-.5)*2,D.position.z+(Math.random()-.5)*3,1)}else dd.style.opacity="0",Be.domElement.style.filter="",Gi&&(Gi=!1);if(nc+=t,nc>rd&&D.onGround){const h=D.position.x-ic.x,d=D.position.z-ic.z;if(h*h+d*d>1.5){nc=0,ic.set(D.position.x,0,D.position.z);const f=Math.round(D.position.x),_=Math.round(D.position.y-1.9),v=Math.round(D.position.z),m=Nt.getBlockType(f,_,v);let g="dirt";m===3||m===11||m===17||m===18?g="stone":m===4||m===12||m===49?g="sand":m===5||m===10||m===16?g="wood":(m===1||m===6)&&(g="grass"),rd=((i=D.keys)==null?void 0:i.ControlLeft)?.25:.35,ne.playStepOnBlock(.7,g)}}if(D.onGround&&!od&&D.velocity.y<-.5&&ne.playLanding(Math.min(Math.abs(D.velocity.y)/10,1)),od=D.onGround,Ja+=t,Ja>1&&(Ja=0,Nt.isNearBlock(Math.round(D.position.x),Math.round(D.position.y),Math.round(D.position.z),55,5)&&Xe.smoke(D.position.x,D.position.y+1,D.position.z,2)),Mo){let h=0;for(let L=0;L<rr;L++)h+=sd[L];const d=rr>0?h/rr:0,f=(D.getYaw()*180/Math.PI+360)%360;let _="Unknown";f<45||f>=315?_="South (0°)":f<135?_="West (90°)":f<225?_="North (180°)":_="East (270°)";const v="Unknown",m=Math.round(D.position.y-1),g=Nt.getBlockType(Math.round(D.position.x),m,Math.round(D.position.z)),E=g!==void 0?si(g):"Air",M=Ss&&Ss.isRaining?"Rainy":"Clear",w=(ge==null?void 0:ge.getMobCount())??0,O=((r=Nt.getBlockCount)==null?void 0:r.call(Nt))??0;V.updateDebugScreen({fps:d,x:D.position.x,y:D.position.y,z:D.position.z,biome:v,blockBelow:E,facing:_,dayTime:He,mobCount:w,blockCount:O,weather:M,gameMode:D.gameMode,version:"0.8"})}}if(Do>0){Do-=t;const a=(Math.random()-.5)*2*Oo,o=(Math.random()-.5)*2*Oo;Ze.position.x+=a,Ze.position.y+=o}Nt&&Nt.flushDirtyMeshes(),Be.render(se,Ze),Ss.isThunderFlashing()&&Be.setClearColor(gi)}pu();window.addEventListener("beforeunload",()=>{Yn&&Nt.saveToStorage({inventory:[...Pe],invCount:[...ke],px:D.position.x,py:D.position.y,pz:D.position.z,health:D.health,hunger:Se,xp:An,xpLevel:We,dayCount:kn})});
