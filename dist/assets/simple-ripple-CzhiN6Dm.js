(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="160",cp=0,tu=1,up=2,rh=1,fp=2,xi=3,Zi=0,gn=1,li=2,Wi=0,ls=1,_o=2,nu=3,iu=4,hp=5,mr=100,dp=101,pp=102,ru=103,su=104,mp=200,_p=201,gp=202,vp=203,Gl=204,Hl=205,xp=206,Mp=207,Sp=208,Ep=209,yp=210,Tp=211,bp=212,Ap=213,wp=214,Rp=0,Cp=1,Pp=2,go=3,Lp=4,Dp=5,Up=6,Ip=7,sh=0,Np=1,Op=2,Xi=0,Fp=1,Bp=2,zp=3,kp=4,Gp=5,Hp=6,ah=300,_s=301,gs=302,Vl=303,Wl=304,No=306,Xl=1e3,ii=1001,Yl=1002,fn=1003,au=1004,Ko=1005,Hn=1006,Vp=1007,ra=1008,Yi=1009,Wp=1010,Xp=1011,Tc=1012,oh=1013,Fi=1014,Bi=1015,sa=1016,lh=1017,ch=1018,xr=1020,Yp=1021,ri=1023,qp=1024,$p=1025,Mr=1026,vs=1027,Kp=1028,uh=1029,Zp=1030,fh=1031,hh=1033,Zo=33776,jo=33777,Jo=33778,Qo=33779,ou=35840,lu=35841,cu=35842,uu=35843,dh=36196,fu=37492,hu=37496,du=37808,pu=37809,mu=37810,_u=37811,gu=37812,vu=37813,xu=37814,Mu=37815,Su=37816,Eu=37817,yu=37818,Tu=37819,bu=37820,Au=37821,el=36492,wu=36494,Ru=36495,jp=36283,Cu=36284,Pu=36285,Lu=36286,ph=3e3,Sr=3001,Jp=3200,Qp=3201,em=0,tm=1,Yn="",Xt="srgb",wi="srgb-linear",bc="display-p3",Oo="display-p3-linear",vo="linear",Mt="srgb",xo="rec709",Mo="p3",Or=7680,Du=519,nm=512,im=513,rm=514,mh=515,sm=516,am=517,om=518,lm=519,Uu=35044,Iu="300 es",ql=1035,yi=2e3,So=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,$l=180/Math.PI;function ma(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function _n(r,e,t){return Math.max(e,Math.min(t,r))}function cm(r,e){return(r%e+e)%e}function nl(r,e,t){return(1-t)*r+t*e}function Nu(r){return(r&r-1)===0&&r!==0}function Kl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],M=i[7],C=i[2],w=i[5],b=i[8];return s[0]=o*_+a*S+l*C,s[3]=o*m+a*x+l*w,s[6]=o*p+a*M+l*b,s[1]=c*_+u*S+f*C,s[4]=c*m+u*x+f*w,s[7]=c*p+u*M+f*b,s[2]=h*_+d*S+g*C,s[5]=h*m+d*x+g*w,s[8]=h*p+d*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new Qe;function _h(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function um(){const r=Eo("canvas");return r.style.display="block",r}const Ou={};function Xs(r){r in Ou||(Ou[r]=!0,console.warn(r))}const Fu=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bu=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[wi]:{transfer:vo,primaries:xo,toReference:r=>r,fromReference:r=>r},[Xt]:{transfer:Mt,primaries:xo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oo]:{transfer:vo,primaries:Mo,toReference:r=>r.applyMatrix3(Bu),fromReference:r=>r.applyMatrix3(Fu)},[bc]:{transfer:Mt,primaries:Mo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Bu),fromReference:r=>r.applyMatrix3(Fu).convertLinearToSRGB()}},fm=new Set([wi,Oo]),dt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!fm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Sa[e].toReference,i=Sa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Sa[r].primaries},getTransfer:function(r){return r===Yn?vo:Sa[r].transfer}};function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fr;class gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Eo("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(sl(i[o].image)):s.push(sl(i[o]))}else s=sl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class In extends ws{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=ii,i=ii,s=Hn,o=ra,a=ri,l=Yi,c=In.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ma(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sr?Xt:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Sr:ph}set encoding(e){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Xt:Yn}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ah;In.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,C=(p+1)/2,w=(u+h)/4,b=(f+_)/4,U=(g+m)/4;return x>M&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=b/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=U/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=U/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pm extends ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sr?Xt:Yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new In(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends pm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mm extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,p*S);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const M=a*S;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new X,zu=new _a;class ga{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),ya.subVectors(this.max,Ls),Br.subVectors(e.a,Ls),zr.subVectors(e.b,Ls),kr.subVectors(e.c,Ls),Li.subVectors(zr,Br),Di.subVectors(kr,zr),rr.subVectors(Br,kr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-rr.z,rr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,rr.z,0,-rr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-rr.y,rr.x,0];return!ol(t,Br,zr,kr,ya)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,Br,zr,kr,ya))?!1:(Ta.crossVectors(Li,Di),t=[Ta.x,Ta.y,Ta.z],ol(t,Br,zr,kr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new X,new X,new X,new X,new X,new X,new X,new X],Jn=new X,Ea=new ga,Br=new X,zr=new X,kr=new X,Li=new X,Di=new X,rr=new X,Ls=new X,ya=new X,Ta=new X,sr=new X;function ol(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){sr.fromArray(r,s);const a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _m=new ga,Ds=new X,ll=new X;class Fo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_m.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ll)),this.expandByPoint(Ds.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new X,cl=new X,ba=new X,Ui=new X,ul=new X,Aa=new X,fl=new X;class Mh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(cl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Ui.dot(this.direction),l=-Ui.dot(ba),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cl).addScaledVector(ba,h),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),i=mi.dot(mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,s){ul.subVectors(t,e),Aa.subVectors(n,e),fl.crossVectors(ul,Aa);let o=this.direction.dot(fl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Aa.crossVectors(Ui,Aa));if(l<0)return null;const c=a*this.direction.dot(ul.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(fl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,vm)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ii.crossVectors(n,bn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ii.crossVectors(n,bn)),Ii.normalize(),wa.crossVectors(bn,Ii),i[0]=Ii.x,i[4]=wa.x,i[8]=bn.x,i[1]=Ii.y,i[5]=wa.y,i[9]=bn.y,i[2]=Ii.z,i[6]=wa.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],M=n[11],C=n[15],w=i[0],b=i[4],U=i[8],v=i[12],y=i[1],F=i[5],D=i[9],Z=i[13],L=i[2],N=i[6],G=i[10],W=i[14],Y=i[3],$=i[7],R=i[11],j=i[15];return s[0]=o*w+a*y+l*L+c*Y,s[4]=o*b+a*F+l*N+c*$,s[8]=o*U+a*D+l*G+c*R,s[12]=o*v+a*Z+l*W+c*j,s[1]=u*w+f*y+h*L+d*Y,s[5]=u*b+f*F+h*N+d*$,s[9]=u*U+f*D+h*G+d*R,s[13]=u*v+f*Z+h*W+d*j,s[2]=g*w+_*y+m*L+p*Y,s[6]=g*b+_*F+m*N+p*$,s[10]=g*U+_*D+m*G+p*R,s[14]=g*v+_*Z+m*W+p*j,s[3]=S*w+x*y+M*L+C*Y,s[7]=S*b+x*F+M*N+C*$,s[11]=S*U+x*D+M*G+C*R,s[15]=S*v+x*Z+M*W+C*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=t*S+n*x+i*M+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*b,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*b,e[4]=x*b,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*b,e[8]=M*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*b,e[12]=C*b,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,x=l*u,M=l*f,C=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+M)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(h+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+x)*b,i[9]=(m-S)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gr.set(i[0],i[1],i[2]).length();const o=Gr.set(i[4],i[5],i[6]).length(),a=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const c=1/s,u=1/o,f=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===yi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===So)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=yi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===yi)g=(o+s)*f,_=-2*f;else if(a===So)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new X,Qn=new Vt,gm=new X(0,0,0),vm=new X(1,1,1),Ii=new X,wa=new X,bn=new X,ku=new Vt,Gu=new _a;class Bo{constructor(e=0,t=0,n=0,i=Bo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bo.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xm=0;const Hu=new X,Hr=new _a,_i=new Vt,Ra=new X,Us=new X,Mm=new X,Sm=new _a,Vu=new X(1,0,0),Wu=new X(0,1,0),Xu=new X(0,0,1),Em={type:"added"},ym={type:"removed"};class vn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new X,t=new Bo,n=new _a,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Qe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Us,Ra,this.up):_i.lookAt(Ra,Us,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(_i),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Em)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vn.DEFAULT_UP=new X(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new X,gi=new X,hl=new X,vi=new X,Vr=new X,Wr=new X,Yu=new X,dl=new X,pl=new X,ml=new X;let Ca=!1;class ni{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),gi.subVectors(n,t),hl.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(gi),l=ei.dot(hl),c=gi.dot(gi),u=gi.dot(hl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ca=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),gi.subVectors(e,t),ei.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),ei.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ca=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vr.subVectors(i,n),Wr.subVectors(s,n),dl.subVectors(e,n);const l=Vr.dot(dl),c=Wr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,i);const u=Vr.dot(pl),f=Wr.dot(pl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vr,o);ml.subVectors(e,s);const d=Vr.dot(ml),g=Wr.dot(ml);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Yu.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Yu,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function _l(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=cm(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_l(o,s,e+1/3),this.g=_l(o,s,e),this.b=_l(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return dt.fromWorkingColorSpace(jt.copy(this),e),Math.round(_n(jt.r*255,0,255))*65536+Math.round(_n(jt.g*255,0,255))*256+Math.round(_n(jt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,s=jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Xt){dt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Pa);const n=nl(Ni.h,Pa.h,t),i=nl(Ni.s,Pa.s,t),s=nl(Ni.l,Pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ft;ft.NAMES=Eh;let Tm=0;class va extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=ls,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Hl&&(n.blendDst=this.blendDst),this.blendEquation!==mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yh extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new X,La=new at;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),e}}class Th extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Er extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bm=0;const zn=new Vt,gl=new vn,Xr=new X,An=new ga,Is=new ga,kt=new X;class Pi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?bh:Th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Er(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(An.min,Is.min),An.expandByPoint(kt),kt.addVectors(An.max,Is.max),An.expandByPoint(kt)):(An.expandByPoint(Is.min),An.expandByPoint(Is.max))}An.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),kt.add(Xr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new X,u[y]=new X;const f=new X,h=new X,d=new X,g=new at,_=new at,m=new at,p=new X,S=new X;function x(y,F,D){f.fromArray(i,y*3),h.fromArray(i,F*3),d.fromArray(i,D*3),g.fromArray(o,y*2),_.fromArray(o,F*2),m.fromArray(o,D*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(Z),S.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(Z),c[y].add(p),c[F].add(p),c[D].add(p),u[y].add(S),u[F].add(S),u[D].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let y=0,F=M.length;y<F;++y){const D=M[y],Z=D.start,L=D.count;for(let N=Z,G=Z+L;N<G;N+=3)x(n[N+0],n[N+1],n[N+2])}const C=new X,w=new X,b=new X,U=new X;function v(y){b.fromArray(s,y*3),U.copy(b);const F=c[y];C.copy(F),C.sub(b.multiplyScalar(b.dot(F))).normalize(),w.crossVectors(U,F);const Z=w.dot(u[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=Z}for(let y=0,F=M.length;y<F;++y){const D=M[y],Z=D.start,L=D.count;for(let N=Z,G=Z+L;N<G;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Zn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new Vt,ar=new Mh,Da=new Fo,$u=new X,Yr=new X,qr=new X,$r=new X,vl=new X,Ua=new X,Ia=new at,Na=new at,Oa=new at,Ku=new X,Zu=new X,ju=new X,Fa=new X,Ba=new X;class Ti extends vn{constructor(e=new Pi,t=new yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(vl.fromBufferAttribute(f,e),o?Ua.addScaledVector(vl,u):Ua.addScaledVector(vl.sub(t),u))}t.add(Ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Da.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Da,$u)===null||ar.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(qu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(qu),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,C=x;M<C;M+=3){const w=a.getX(M),b=a.getX(M+1),U=a.getX(M+2);i=za(this,p,e,n,c,u,f,w,b,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=za(this,o,e,n,c,u,f,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,C=x;M<C;M+=3){const w=M,b=M+1,U=M+2;i=za(this,p,e,n,c,u,f,w,b,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,M=m+2;i=za(this,o,e,n,c,u,f,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Am(r,e,t,n,i,s,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Zi,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:r}}function za(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Yr),r.getVertexPosition(l,qr),r.getVertexPosition(c,$r);const u=Am(r,e,t,n,Yr,qr,$r,Fa);if(u){i&&(Ia.fromBufferAttribute(i,a),Na.fromBufferAttribute(i,l),Oa.fromBufferAttribute(i,c),u.uv=ni.getInterpolation(Fa,Yr,qr,$r,Ia,Na,Oa,new at)),s&&(Ia.fromBufferAttribute(s,a),Na.fromBufferAttribute(s,l),Oa.fromBufferAttribute(s,c),u.uv1=ni.getInterpolation(Fa,Yr,qr,$r,Ia,Na,Oa,new at),u.uv2=u.uv1),o&&(Ku.fromBufferAttribute(o,a),Zu.fromBufferAttribute(o,l),ju.fromBufferAttribute(o,c),u.normal=ni.getInterpolation(Fa,Yr,qr,$r,Ku,Zu,ju,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};ni.getNormal(Yr,qr,$r,f.normal),u.face=f}return u}class xa extends Pi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Er(c,3)),this.setAttribute("normal",new Er(u,3)),this.setAttribute("uv",new Er(f,2));function g(_,m,p,S,x,M,C,w,b,U,v){const y=M/b,F=C/U,D=M/2,Z=C/2,L=w/2,N=b+1,G=U+1;let W=0,Y=0;const $=new X;for(let R=0;R<G;R++){const j=R*F-Z;for(let ne=0;ne<N;ne++){const q=ne*y-D;$[_]=q*S,$[m]=j*x,$[p]=L,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=w>0?1:-1,u.push($.x,$.y,$.z),f.push(ne/b),f.push(1-R/U),W+=1}}for(let R=0;R<U;R++)for(let j=0;j<b;j++){const ne=h+j+N*R,q=h+j+N*(R+1),K=h+(j+1)+N*(R+1),se=h+(j+1)+N*R;l.push(ne,q,se),l.push(q,K,se),Y+=6}a.addGroup(d,Y,v),d+=Y,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function wm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ah(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}const Rm={clone:xs,merge:on};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wh extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vn extends wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class Lm extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(Kr,Zr,e,t);i.layers=this.layers,this.add(i);const s=new Vn(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new Vn(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new Vn(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Kr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rh extends In{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dm extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?Xt:Yn),this.texture=new Rh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xa(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Ti(i,s),a=t.minFilter;return t.minFilter===ra&&(t.minFilter=Hn),new Lm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const xl=new X,Um=new X,Im=new Qe;class ur{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xl.subVectors(n,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Im.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Fo,ka=new X;class Ch{constructor(e=new ur,t=new ur,n=new ur,i=new ur,s=new ur,o=new ur){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,m-d,M-p).normalize(),n[1].setComponents(l+s,h+c,m+d,M+p).normalize(),n[2].setComponents(l+o,h+u,m+g,M+S).normalize(),n[3].setComponents(l-o,h-u,m-g,M-S).normalize(),n[4].setComponents(l-a,h-f,m-_,M-x).normalize(),t===yi)n[5].setComponents(l+a,h+f,m+_,M+x).normalize();else if(t===So)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(f,c),d.count===-1&&g.length===0&&r.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class zo extends Pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,M=S+c*(p+1),C=S+1+c*(p+1),w=S+1+c*p;d.push(x,M,w),d.push(M,C,w)}this.setIndex(d),this.setAttribute("position",new Er(g,3)),this.setAttribute("normal",new Er(_,3)),this.setAttribute("uv",new Er(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,s_=`#define PI 3.141592653589793
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
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o_=`vec3 transformedNormal = objectNormal;
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
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`
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
}`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y_=`#ifdef USE_GRADIENTMAP
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
}`,T_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R_=`uniform bool receiveShadow;
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
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I_=`PhysicalMaterial material;
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
#endif`,N_=`struct PhysicalMaterial {
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
}`,O_=`
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y_=`#if defined( USE_POINTS_UV )
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
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
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
#endif`,j_=`#ifdef USE_MORPHTARGETS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,Q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,t0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,s0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,o0=`#define TOON
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
}`,l0=`#define TOON
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
}`,c0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,h0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,p0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Om,alphahash_pars_fragment:Fm,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:Vm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:Ym,beginnormal_vertex:qm,bsdfs:$m,iridescence_fragment:Km,bumpmap_pars_fragment:Zm,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:e_,color_fragment:t_,color_pars_fragment:n_,color_pars_vertex:i_,color_vertex:r_,common:s_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:o_,displacementmap_pars_vertex:l_,displacementmap_vertex:c_,emissivemap_fragment:u_,emissivemap_pars_fragment:f_,colorspace_fragment:h_,colorspace_pars_fragment:d_,envmap_fragment:p_,envmap_common_pars_fragment:m_,envmap_pars_fragment:__,envmap_pars_vertex:g_,envmap_physical_pars_fragment:C_,envmap_vertex:v_,fog_vertex:x_,fog_pars_vertex:M_,fog_fragment:S_,fog_pars_fragment:E_,gradientmap_pars_fragment:y_,lightmap_fragment:T_,lightmap_pars_fragment:b_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:w_,lights_pars_begin:R_,lights_toon_fragment:P_,lights_toon_pars_fragment:L_,lights_phong_fragment:D_,lights_phong_pars_fragment:U_,lights_physical_fragment:I_,lights_physical_pars_fragment:N_,lights_fragment_begin:O_,lights_fragment_maps:F_,lights_fragment_end:B_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:k_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:H_,map_fragment:V_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:Y_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:$_,morphcolor_vertex:K_,morphnormal_vertex:Z_,morphtarget_pars_vertex:j_,morphtarget_vertex:J_,normal_fragment_begin:Q_,normal_fragment_maps:eg,normal_pars_fragment:tg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:og,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:ug,premultiplied_alpha_fragment:fg,project_vertex:hg,dithering_fragment:dg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:vg,shadowmap_vertex:xg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:Eg,skinning_vertex:yg,skinnormal_vertex:Tg,specularmap_fragment:bg,specularmap_pars_fragment:Ag,tonemapping_fragment:wg,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Pg,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ug,worldpos_vertex:Ig,background_vert:Ng,background_frag:Og,backgroundCube_vert:Fg,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Gg,depth_frag:Hg,distanceRGBA_vert:Vg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:qg,linedashed_frag:$g,meshbasic_vert:Kg,meshbasic_frag:Zg,meshlambert_vert:jg,meshlambert_frag:Jg,meshmatcap_vert:Qg,meshmatcap_frag:e0,meshnormal_vert:t0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:l0,points_vert:c0,points_frag:u0,shadow_vert:f0,shadow_frag:h0,sprite_vert:d0,sprite_frag:p0},fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},oi={basic:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([fe.common,fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([fe.lights,fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};oi.physical={uniforms:on([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ga={r:0,b:0,g:0};function m0(r,e,t,n,i,s,o){const a=new ft(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===No)?(u===void 0&&(u=new Ti(new xa(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:xs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ti(new zo(2,2),new ji({name:"BackgroundMaterial",uniforms:xs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ga,Ah(r)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function _0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(L,N,G,W,Y){let $=!1;if(o){const R=_(W,G,N);c!==R&&(c=R,d(c.object)),$=p(L,W,G,Y),$&&S(L,W,G,Y)}else{const R=N.wireframe===!0;(c.geometry!==W.id||c.program!==G.id||c.wireframe!==R)&&(c.geometry=W.id,c.program=G.id,c.wireframe=R,$=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(L,N,G,W),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,N,G){const W=G.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let $=Y[N.id];$===void 0&&($={},Y[N.id]=$);let R=$[W];return R===void 0&&(R=m(h()),$[W]=R),R}function m(L){const N=[],G=[],W=[];for(let Y=0;Y<i;Y++)N[Y]=0,G[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,N,G,W){const Y=c.attributes,$=N.attributes;let R=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){const K=Y[ne];let se=$[ne];if(se===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;R++}return c.attributesNum!==R||c.index!==W}function S(L,N,G,W){const Y={},$=N.attributes;let R=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){let K=$[ne];K===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),Y[ne]=se,R++}c.attributes=Y,c.attributesNum=R,c.index=W}function x(){const L=c.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function M(L){C(L,0)}function C(L,N){const G=c.newAttributes,W=c.enabledAttributes,Y=c.attributeDivisors;G[L]=1,W[L]===0&&(r.enableVertexAttribArray(L),W[L]=1),Y[L]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function w(){const L=c.newAttributes,N=c.enabledAttributes;for(let G=0,W=N.length;G<W;G++)N[G]!==L[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function b(L,N,G,W,Y,$,R){R===!0?r.vertexAttribIPointer(L,N,G,Y,$):r.vertexAttribPointer(L,N,G,W,Y,$)}function U(L,N,G,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=W.attributes,$=G.getAttributes(),R=N.defaultAttributeValues;for(const j in $){const ne=$[j];if(ne.location>=0){let q=Y[j];if(q===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,se=q.itemSize,_e=t.get(q);if(_e===void 0)continue;const de=_e.buffer,Ce=_e.type,Pe=_e.bytesPerElement,Ue=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||q.gpuType===oh);if(q.isInterleavedBufferAttribute){const Ge=q.data,z=Ge.stride,He=q.offset;if(Ge.isInstancedInterleavedBuffer){for(let me=0;me<ne.locationSize;me++)C(ne.location+me,Ge.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let me=0;me<ne.locationSize;me++)M(ne.location+me);r.bindBuffer(r.ARRAY_BUFFER,de);for(let me=0;me<ne.locationSize;me++)b(ne.location+me,se/ne.locationSize,Ce,K,z*Pe,(He+se/ne.locationSize*me)*Pe,Ue)}else{if(q.isInstancedBufferAttribute){for(let Ge=0;Ge<ne.locationSize;Ge++)C(ne.location+Ge,q.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ge=0;Ge<ne.locationSize;Ge++)M(ne.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Ge=0;Ge<ne.locationSize;Ge++)b(ne.location+Ge,se/ne.locationSize,Ce,K,se*Pe,se/ne.locationSize*Ge*Pe,Ue)}}else if(R!==void 0){const K=R[j];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ne.location,K);break;case 3:r.vertexAttrib3fv(ne.location,K);break;case 4:r.vertexAttrib4fv(ne.location,K);break;default:r.vertexAttrib1fv(ne.location,K)}}}}w()}function v(){D();for(const L in a){const N=a[L];for(const G in N){const W=N[G];for(const Y in W)g(W[Y].object),delete W[Y];delete N[G]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const G in N){const W=N[G];for(const Y in W)g(W[Y].object),delete W[Y];delete N[G]}delete a[L.id]}function F(L){for(const N in a){const G=a[N];if(G[L.id]===void 0)continue;const W=G[L.id];for(const Y in W)g(W[Y].object),delete W[Y];delete G[L.id]}}function D(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function g0(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function v0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),C=x&&M,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:w}}function x0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ur,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,d);for(let C=0;C!==x;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function M0(r){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=_s:a===Wl&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dm(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class S0 extends wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Ju=[.125,.215,.35,.446,.526,.582],_r=20,Ml=new S0,Qu=new ft;let Sl=null,El=0,yl=0;const fr=(1+Math.sqrt(5))/2,jr=1/fr,ef=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,fr,jr),new X(0,fr,-jr),new X(jr,0,fr),new X(-jr,0,fr),new X(fr,jr,0),new X(-fr,jr,0)];class tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,El,yl),e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:sa,format:ri,colorSpace:wi,depthBuffer:!1},i=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=y0(s,e,t)}return i}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,i){const a=new Vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Xi,u.autoClear=!1;const d=new yh({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Ti(new xa,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Qu),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ha(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ef[(i-1)%ef.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ti(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_r-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const p=[];let S=0;for(let b=0;b<_r;++b){const U=b/_,v=Math.exp(-U*U/2);p.push(v),b===0?S+=v:b<m&&(S+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],C=3*M*(i>x-is?i-x+is:0),w=4*(this._cubeSize-M);Ha(t,C,w,3*M,2*M),l.setRenderTarget(t),l.render(f,Ml)}}function E0(r){const e=[],t=[],n=[];let i=r;const s=r-is+1+Ju.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-is?l=Ju[o-r+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,U=w>2?0:-1,v=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];S.set(v,_*g*w),x.set(h,m*g*w);const y=[w,w,w,w,w,w];M.set(y,p*g*w)}const C=new Pi;C.setAttribute("position",new Zn(S,_)),C.setAttribute("uv",new Zn(x,m)),C.setAttribute("faceIndex",new Zn(M,p)),e.push(C),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(r,e,t){const n=new Pr(r,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function y0(r,e,t){const n=new Float32Array(_r),i=new X(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function rf(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function sf(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function T0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Wl,u=l===_s||l===gs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new tf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new tf(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function b0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function A0(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,M=S.length;x<M;x+=3){const C=S[x+0],w=S[x+1],b=S[x+2];h.push(C,w,w,b,b,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const C=x+0,w=x+1,b=x+2;h.push(C,w,w,b,b,C)}}else return;const m=new(_h(h)?bh:Th)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function w0(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function R0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function C0(r,e){return r[0]-e[0]}function P0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function L0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let N=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),C===!0&&(v=3);let y=u.attributes.position.count*v,F=1;y>e.maxTextureSize&&(F=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const D=new Float32Array(y*F*4*_),Z=new xh(D,y,F,_);Z.type=Bi,Z.needsUpdate=!0;const L=v*4;for(let G=0;G<_;G++){const W=w[G],Y=b[G],$=U[G],R=y*F*4*G;for(let j=0;j<W.count;j++){const ne=j*L;x===!0&&(o.fromBufferAttribute(W,j),D[R+ne+0]=o.x,D[R+ne+1]=o.y,D[R+ne+2]=o.z,D[R+ne+3]=0),M===!0&&(o.fromBufferAttribute(Y,j),D[R+ne+4]=o.x,D[R+ne+5]=o.y,D[R+ne+6]=o.z,D[R+ne+7]=0),C===!0&&(o.fromBufferAttribute($,j),D[R+ne+8]=o.x,D[R+ne+9]=o.y,D[R+ne+10]=o.z,D[R+ne+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new at(y,F)},s.set(u,m),u.addEventListener("dispose",N)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const C=_[M];C[0]=M,C[1]=h[M]}_.sort(P0);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(C0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const C=a[M],w=C[0],b=C[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+M)!==m[w]&&u.setAttribute("morphTarget"+M,m[w]),p&&u.getAttribute("morphNormal"+M)!==p[w]&&u.setAttribute("morphNormal"+M,p[w]),i[M]=b,S+=b):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function D0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Lh extends In{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mr&&(n=Fi),n===void 0&&u===vs&&(n=xr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dh=new In,Uh=new Lh(1,1);Uh.compareFunction=mh;const Ih=new xh,Nh=new mm,Oh=new Rh,af=[],of=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function Rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=af[i];if(s===void 0&&(s=new Float32Array(i),af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function U0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function N0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function F0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;uf.set(n),r.uniformMatrix2fv(this.addr,!1,uf),zt(t,n)}}function B0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;cf.set(n),r.uniformMatrix3fv(this.addr,!1,cf),zt(t,n)}}function z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;lf.set(n),r.uniformMatrix4fv(this.addr,!1,lf),zt(t,n)}}function k0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function H0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function V0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function W0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function $0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Uh:Dh;t.setTexture2D(e||s,i)}function K0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nh,i)}function Z0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function j0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function J0(r){switch(r){case 5126:return U0;case 35664:return I0;case 35665:return N0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return G0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return Y0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return j0}}function Q0(r,e){r.uniform1fv(this.addr,e)}function ev(r,e){const t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function tv(r,e){const t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function nv(r,e){const t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function iv(r,e){const t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rv(r,e){const t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sv(r,e){const t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function av(r,e){r.uniform1iv(this.addr,e)}function ov(r,e){r.uniform2iv(this.addr,e)}function lv(r,e){r.uniform3iv(this.addr,e)}function cv(r,e){r.uniform4iv(this.addr,e)}function uv(r,e){r.uniform1uiv(this.addr,e)}function fv(r,e){r.uniform2uiv(this.addr,e)}function hv(r,e){r.uniform3uiv(this.addr,e)}function dv(r,e){r.uniform4uiv(this.addr,e)}function pv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dh,s[o])}function mv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nh,s[o])}function _v(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Oh,s[o])}function gv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function vv(r){switch(r){case 5126:return Q0;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return av;case 35667:case 35671:return ov;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return fv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return gv}}class xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J0(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function ff(r,e){r.seq.push(e),r.map[e.id]=e}function Ev(r,e,t){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),o=Tl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ff(t,c===void 0?new xv(a,r,e):new Mv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Sv(a),ff(t,f)),t=f}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ev(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function hf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yv=37297;let Tv=0;function bv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Av(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===Mo&&t===xo?n="LinearDisplayP3ToLinearSRGB":e===xo&&t===Mo&&(n="LinearSRGBToLinearDisplayP3"),r){case wi:case Oo:return[n,"LinearTransferOETF"];case Xt:case bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function df(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+bv(r.getShaderSource(e),o)}else return i}function wv(r,e){const t=Av(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rv(r,e){let t;switch(e){case Fp:t="Linear";break;case Bp:t="Reinhard";break;case zp:t="OptimizedCineon";break;case kp:t="ACESFilmic";break;case Hp:t="AgX";break;case Gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Pv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function Lv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function rs(r){return r!==""}function pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(Uv,Nv)}const Iv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nv(r,e){let t=$e[e];if(t===void 0){const n=Iv.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(r){return r.replace(Ov,Fv)}function Fv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _s:case gs:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bv(t),c=zv(t),u=kv(t),f=Gv(t),h=Hv(t),d=t.isWebGL2?"":Cv(t),g=Pv(t),_=Lv(s),m=i.createProgram();let p,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),S.length>0&&(S+=`
`)):(p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),S=[d,gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=Zl(o),o=pf(o,t),o=mf(o,t),a=Zl(a),a=pf(a,t),a=mf(a,t),o=_f(o),a=_f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=x+p+o,C=x+S+a,w=hf(i,i.VERTEX_SHADER,M),b=hf(i,i.FRAGMENT_SHADER,C);i.attachShader(m,w),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(D){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(b).trim();let G=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,b);else{const Y=df(i,w,"vertex"),$=df(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+Y+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(W=!1);W&&(D.diagnostics={runnable:G,programLog:Z,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:S}})}i.deleteShader(w),i.deleteShader(b),v=new so(i,m),y=Dv(i,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,yv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}}function qv(r,e,t,n,i,s,o){const a=new Sh,l=new Xv,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,y,F,D,Z){const L=D.fog,N=Z.geometry,G=v.isMeshStandardMaterial?D.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),Y=W&&W.mapping===No?W.image.height:null,$=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const R=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=R!==void 0?R.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let q,K,se,_e;if($){const xe=oi[$];q=xe.vertexShader,K=xe.fragmentShader}else q=v.vertexShader,K=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const de=r.getRenderTarget(),Ce=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Ue=!!v.map,Ge=!!v.matcap,z=!!W,He=!!v.aoMap,me=!!v.lightMap,Le=!!v.bumpMap,ge=!!v.normalMap,k=!!v.displacementMap,Fe=!!v.emissiveMap,A=!!v.metalnessMap,E=!!v.roughnessMap,O=v.anisotropy>0,ee=v.clearcoat>0,Q=v.iridescence>0,te=v.sheen>0,pe=v.transmission>0,ue=O&&!!v.anisotropyMap,ce=ee&&!!v.clearcoatMap,be=ee&&!!v.clearcoatNormalMap,ke=ee&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,rt=Q&&!!v.iridescenceThicknessMap,we=te&&!!v.sheenColorMap,Ve=te&&!!v.sheenRoughnessMap,ye=!!v.specularMap,ve=!!v.specularColorMap,We=!!v.specularIntensityMap,Ze=pe&&!!v.transmissionMap,ot=pe&&!!v.thicknessMap,he=!!v.gradientMap,re=!!v.alphaMap,P=v.alphaTest>0,ae=!!v.alphaHash,oe=!!v.extensions,Ne=!!N.attributes.uv1,De=!!N.attributes.uv2,nt=!!N.attributes.uv3;let st=Xi;return v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(st=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:K,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pe,instancing:Ce,instancingColor:Ce&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wi,map:Ue,matcap:Ge,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:Y,aoMap:He,lightMap:me,bumpMap:Le,normalMap:ge,displacementMap:h&&k,emissiveMap:Fe,normalMapObjectSpace:ge&&v.normalMapType===tm,normalMapTangentSpace:ge&&v.normalMapType===em,metalnessMap:A,roughnessMap:E,anisotropy:O,anisotropyMap:ue,clearcoat:ee,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:te,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:ye,specularColorMap:ve,specularIntensityMap:We,transmission:pe,transmissionMap:Ze,thicknessMap:ot,gradientMap:he,opaque:v.transparent===!1&&v.blending===ls,alphaMap:re,alphaTest:P,alphaHash:ae,combine:v.combine,mapUv:Ue&&_(v.map.channel),aoMapUv:He&&_(v.aoMap.channel),lightMapUv:me&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:k&&_(v.displacementMap.channel),emissiveMapUv:Fe&&_(v.emissiveMap.channel),metalnessMapUv:A&&_(v.metalnessMap.channel),roughnessMapUv:E&&_(v.roughnessMap.channel),anisotropyMapUv:ue&&_(v.anisotropyMap.channel),clearcoatMapUv:ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:We&&_(v.specularIntensityMap.channel),transmissionMapUv:Ze&&_(v.transmissionMap.channel),thicknessMapUv:ot&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:De,vertexUv3s:nt,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Ue||re),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)y.push(F),y.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(S(y,v),x(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){const y=g[v.type];let F;if(y){const D=oi[y];F=Rm.clone(D.uniforms)}else F=v.uniforms;return F}function C(v,y){let F;for(let D=0,Z=c.length;D<Z;D++){const L=c[D];if(L.cacheKey===y){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Vv(r,y,v,s),c.push(F)),F}function w(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:U}}function $v(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Kv),n.length>1&&n.sort(h||vf),i.length>1&&i.sort(h||vf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Zv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new xf,r.set(n,[o])):i>=s.length?(o=new xf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qv=0;function ex(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tx(r,e){const t=new jv,n=Jv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const s=new X,o=new Vt,a=new Vt;function l(u,f){let h=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,p=0,S=0,x=0,M=0,C=0,w=0,b=0,U=0,v=0;u.sort(ex);const y=f===!0?Math.PI:1;for(let D=0,Z=u.length;D<Z;D++){const L=u[D],N=L.color,G=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*G*y,d+=N.g*G*y,g+=N.b*G*y;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],G);v++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const R=L.shadow,j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=L.shadow.matrix,M++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(G*y),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[p]=$;const R=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,R.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[p]=R.matrix,L.castShadow){const j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=Y,w++}p++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(N).multiplyScalar(G),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=$,S++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),$.distance=L.distance,$.decay=L.decay,L.castShadow){const R=L.shadow,j=n.get(L);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,C++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(G*y),$.groundColor.copy(L.groundColor).multiplyScalar(G*y),i.hemi[x]=$,x++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==M||F.numPointShadows!==C||F.numSpotShadows!==w||F.numSpotMaps!==b||F.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=v,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=M,F.numPointShadows=C,F.numSpotShadows=w,F.numSpotMaps=b,F.numLightProbes=v,i.version=Qv++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const M=u[S];if(M.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),h++}else if(M.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const C=i.point[d];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Mf(r,e){const t=new tx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nx(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Mf(r,e),t.set(s,[l])):o>=a.length?(l=new Mf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ix extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rx extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`;function ox(r,e,t){let n=new Ch;const i=new at,s=new at,o=new Yt,a=new ix({depthPacking:Qp}),l=new rx,c={},u=t.maxTextureSize,f={[Zi]:gn,[gn]:Zi,[li]:li},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:sx,fragmentShader:ax}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pi;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ti(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let p=this.type;this.render=function(w,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=r.getRenderTarget(),y=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Wi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const Z=p!==xi&&this.type===xi,L=p===xi&&this.type!==xi;for(let N=0,G=w.length;N<G;N++){const W=w[N],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||Z===!0||L===!0){const j=this.type!==xi?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Pr(i.x,i.y,j),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const R=Y.getViewportCount();for(let j=0;j<R;j++){const ne=Y.getViewport(j);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o),Y.updateMatrices(W,j),n=Y.getFrustum(),M(b,U,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===xi&&S(Y,U),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,F)};function S(w,b){const U=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,U,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,U,d,_,null)}function x(w,b,U,v){let y=null;const F=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)y=F;else if(y=U.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=y.uuid,Z=b.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let N=L[Z];N===void 0&&(N=y.clone(),L[Z]=N,b.addEventListener("dispose",C)),y=N}if(y.visible=b.visible,y.wireframe=b.wireframe,v===xi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:f[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=r.properties.get(y);D.light=U}return y}function M(w,b,U,v,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===xi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const N=Z.groups;for(let G=0,W=N.length;G<W;G++){const Y=N[G],$=L[Y.materialIndex];if($&&$.visible){const R=x(w,$,v,y);w.onBeforeShadow(r,w,b,U,Z,R,Y),r.renderBufferDirect(U,null,Z,R,w,Y),w.onAfterShadow(r,w,b,U,Z,R,Y)}}}else if(L.visible){const N=x(w,L,v,y);w.onBeforeShadow(r,w,b,U,Z,N,null),r.renderBufferDirect(U,null,Z,N,w,null),w.onAfterShadow(r,w,b,U,Z,N,null)}}const D=w.children;for(let Z=0,L=D.length;Z<L;Z++)M(D[Z],b,U,v,y)}function C(w){w.target.removeEventListener("dispose",C);for(const U in c){const v=c[U],y=w.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function lx(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new Yt;let oe=null;const Ne=new Yt(0,0,0,0);return{setMask:function(De){oe!==De&&!P&&(r.colorMask(De,De,De,De),oe=De)},setLocked:function(De){P=De},setClear:function(De,nt,st,Te,xe){xe===!0&&(De*=Te,nt*=Te,st*=Te),ae.set(De,nt,st,Te),Ne.equals(ae)===!1&&(r.clearColor(De,nt,st,Te),Ne.copy(ae))},reset:function(){P=!1,oe=null,Ne.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,oe=null,Ne=null;return{setTest:function(De){De?Pe(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(De){ae!==De&&!P&&(r.depthMask(De),ae=De)},setFunc:function(De){if(oe!==De){switch(De){case Rp:r.depthFunc(r.NEVER);break;case Cp:r.depthFunc(r.ALWAYS);break;case Pp:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case Lp:r.depthFunc(r.EQUAL);break;case Dp:r.depthFunc(r.GEQUAL);break;case Up:r.depthFunc(r.GREATER);break;case Ip:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=De}},setLocked:function(De){P=De},setClear:function(De){Ne!==De&&(r.clearDepth(De),Ne=De)},reset:function(){P=!1,ae=null,oe=null,Ne=null}}}function o(){let P=!1,ae=null,oe=null,Ne=null,De=null,nt=null,st=null,Te=null,xe=null;return{setTest:function(Re){P||(Re?Pe(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Re){ae!==Re&&!P&&(r.stencilMask(Re),ae=Re)},setFunc:function(Re,ie,Oe){(oe!==Re||Ne!==ie||De!==Oe)&&(r.stencilFunc(Re,ie,Oe),oe=Re,Ne=ie,De=Oe)},setOp:function(Re,ie,Oe){(nt!==Re||st!==ie||Te!==Oe)&&(r.stencilOp(Re,ie,Oe),nt=Re,st=ie,Te=Oe)},setLocked:function(Re){P=Re},setClear:function(Re){xe!==Re&&(r.clearStencil(Re),xe=Re)},reset:function(){P=!1,ae=null,oe=null,Ne=null,De=null,nt=null,st=null,Te=null,xe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,C=null,w=null,b=null,U=null,v=new ft(0,0,0),y=0,F=!1,D=null,Z=null,L=null,N=null,G=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(R)[1]),Y=$>=1):R.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Y=$>=2);let j=null,ne={};const q=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),se=new Yt().fromArray(q),_e=new Yt().fromArray(K);function de(P,ae,oe,Ne){const De=new Uint8Array(4),nt=r.createTexture();r.bindTexture(P,nt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<oe;st++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(ae+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return nt}const Ce={};Ce[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(go),Fe(!1),A(tu),Pe(r.CULL_FACE),ge(Wi);function Pe(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ue(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Ge(P,ae){return d[P]!==ae?(r.bindFramebuffer(P,ae),d[P]=ae,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(P,ae){let oe=_,Ne=!1;if(P)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(oe.length!==De.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,st=De.length;nt<st;nt++)oe[nt]=r.COLOR_ATTACHMENT0+nt;oe.length=De.length,Ne=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Ne=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Ne=!0);Ne&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function He(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const me={[mr]:r.FUNC_ADD,[dp]:r.FUNC_SUBTRACT,[pp]:r.FUNC_REVERSE_SUBTRACT};if(n)me[ru]=r.MIN,me[su]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(me[ru]=P.MIN_EXT,me[su]=P.MAX_EXT)}const Le={[mp]:r.ZERO,[_p]:r.ONE,[gp]:r.SRC_COLOR,[Gl]:r.SRC_ALPHA,[yp]:r.SRC_ALPHA_SATURATE,[Sp]:r.DST_COLOR,[xp]:r.DST_ALPHA,[vp]:r.ONE_MINUS_SRC_COLOR,[Hl]:r.ONE_MINUS_SRC_ALPHA,[Ep]:r.ONE_MINUS_DST_COLOR,[Mp]:r.ONE_MINUS_DST_ALPHA,[Tp]:r.CONSTANT_COLOR,[bp]:r.ONE_MINUS_CONSTANT_COLOR,[Ap]:r.CONSTANT_ALPHA,[wp]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ae,oe,Ne,De,nt,st,Te,xe,Re){if(P===Wi){p===!0&&(Ue(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),P!==hp){if(P!==S||Re!==F){if((x!==mr||w!==mr)&&(r.blendEquation(r.FUNC_ADD),x=mr,w=mr),Re)switch(P){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _o:r.blendFunc(r.ONE,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _o:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,C=null,b=null,U=null,v.set(0,0,0),y=0,S=P,F=Re}return}De=De||ae,nt=nt||oe,st=st||Ne,(ae!==x||De!==w)&&(r.blendEquationSeparate(me[ae],me[De]),x=ae,w=De),(oe!==M||Ne!==C||nt!==b||st!==U)&&(r.blendFuncSeparate(Le[oe],Le[Ne],Le[nt],Le[st]),M=oe,C=Ne,b=nt,U=st),(Te.equals(v)===!1||xe!==y)&&(r.blendColor(Te.r,Te.g,Te.b,xe),v.copy(Te),y=xe),S=P,F=!1}function k(P,ae){P.side===li?Ue(r.CULL_FACE):Pe(r.CULL_FACE);let oe=P.side===gn;ae&&(oe=!oe),Fe(oe),P.blending===ls&&P.transparent===!1?ge(Wi):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ne=P.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){D!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),D=P)}function A(P){P!==cp?(Pe(r.CULL_FACE),P!==Z&&(P===tu?r.cullFace(r.BACK):P===up?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),Z=P}function E(P){P!==L&&(Y&&r.lineWidth(P),L=P)}function O(P,ae,oe){P?(Pe(r.POLYGON_OFFSET_FILL),(N!==ae||G!==oe)&&(r.polygonOffset(ae,oe),N=ae,G=oe)):Ue(r.POLYGON_OFFSET_FILL)}function ee(P){P?Pe(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function Q(P){P===void 0&&(P=r.TEXTURE0+W-1),j!==P&&(r.activeTexture(P),j=P)}function te(P,ae,oe){oe===void 0&&(j===null?oe=r.TEXTURE0+W-1:oe=j);let Ne=ne[oe];Ne===void 0&&(Ne={type:void 0,texture:void 0},ne[oe]=Ne),(Ne.type!==P||Ne.texture!==ae)&&(j!==oe&&(r.activeTexture(oe),j=oe),r.bindTexture(P,ae||Ce[P]),Ne.type=P,Ne.texture=ae)}function pe(){const P=ne[j];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){se.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function Ze(P){_e.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function ot(P,ae){let oe=f.get(ae);oe===void 0&&(oe=new WeakMap,f.set(ae,oe));let Ne=oe.get(P);Ne===void 0&&(Ne=r.getUniformBlockIndex(ae,P.name),oe.set(P,Ne))}function he(P,ae){const Ne=f.get(ae).get(P);u.get(ae)!==Ne&&(r.uniformBlockBinding(ae,Ne,P.__bindingPointIndex),u.set(ae,Ne))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,ne={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,C=null,w=null,b=null,U=null,v=new ft(0,0,0),y=0,F=!1,D=null,Z=null,L=null,N=null,G=null,se.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Ue,bindFramebuffer:Ge,drawBuffers:z,useProgram:He,setBlending:ge,setMaterial:k,setFlipSided:Fe,setCullFace:A,setLineWidth:E,setPolygonOffset:O,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:pe,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:ye,texImage3D:ve,updateUBOMapping:ot,uniformBlockBinding:he,texStorage2D:we,texStorage3D:Ve,texSubImage2D:be,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:We,viewport:Ze,reset:re}}function cx(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return d?new OffscreenCanvas(A,E):Eo("canvas")}function _(A,E,O,ee){let Q=1;if((A.width>ee||A.height>ee)&&(Q=ee/Math.max(A.width,A.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=E?Kl:Math.floor,pe=te(Q*A.width),ue=te(Q*A.height);f===void 0&&(f=g(pe,ue));const ce=O?g(pe,ue):f;return ce.width=pe,ce.height=ue,ce.getContext("2d").drawImage(A,0,0,pe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pe+"x"+ue+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Nu(A.width)&&Nu(A.height)}function p(A){return a?!1:A.wrapS!==ii||A.wrapT!==ii||A.minFilter!==fn&&A.minFilter!==Hn}function S(A,E){return A.generateMipmaps&&E&&A.minFilter!==fn&&A.minFilter!==Hn}function x(A){r.generateMipmap(A)}function M(A,E,O,ee,Q=!1){if(a===!1)return E;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=E;if(E===r.RED&&(O===r.FLOAT&&(te=r.R32F),O===r.HALF_FLOAT&&(te=r.R16F),O===r.UNSIGNED_BYTE&&(te=r.R8)),E===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.R8UI),O===r.UNSIGNED_SHORT&&(te=r.R16UI),O===r.UNSIGNED_INT&&(te=r.R32UI),O===r.BYTE&&(te=r.R8I),O===r.SHORT&&(te=r.R16I),O===r.INT&&(te=r.R32I)),E===r.RG&&(O===r.FLOAT&&(te=r.RG32F),O===r.HALF_FLOAT&&(te=r.RG16F),O===r.UNSIGNED_BYTE&&(te=r.RG8)),E===r.RGBA){const pe=Q?vo:dt.getTransfer(ee);O===r.FLOAT&&(te=r.RGBA32F),O===r.HALF_FLOAT&&(te=r.RGBA16F),O===r.UNSIGNED_BYTE&&(te=pe===Mt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(A,E,O){return S(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===fn||A===au||A===Ko?r.NEAREST:r.LINEAR}function b(A){const E=A.target;E.removeEventListener("dispose",b),v(E),E.isVideoTexture&&u.delete(E)}function U(A){const E=A.target;E.removeEventListener("dispose",U),F(E)}function v(A){const E=n.get(A);if(E.__webglInit===void 0)return;const O=A.source,ee=h.get(O);if(ee){const Q=ee[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(ee).length===0&&h.delete(O)}n.remove(A)}function y(A){const E=n.get(A);r.deleteTexture(E.__webglTexture);const O=A.source,ee=h.get(O);delete ee[E.__cacheKey],o.memory.textures--}function F(A){const E=A.texture,O=n.get(A),ee=n.get(E);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)r.deleteFramebuffer(O.__webglFramebuffer[Q]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const pe=n.get(E[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(E[Q])}n.remove(E),n.remove(A)}let D=0;function Z(){D=0}function L(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function N(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function G(A,E){const O=n.get(A);if(A.isVideoTexture&&k(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,A,E);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+E)}function W(A,E){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+E)}function Y(A,E){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,E);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+E)}function $(A,E){const O=n.get(A);if(A.version>0&&O.__version!==A.version){_e(O,A,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+E)}const R={[Xl]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[Yl]:r.MIRRORED_REPEAT},j={[fn]:r.NEAREST,[au]:r.NEAREST_MIPMAP_NEAREST,[Ko]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[Vp]:r.LINEAR_MIPMAP_NEAREST,[ra]:r.LINEAR_MIPMAP_LINEAR},ne={[nm]:r.NEVER,[lm]:r.ALWAYS,[im]:r.LESS,[mh]:r.LEQUAL,[rm]:r.EQUAL,[om]:r.GEQUAL,[sm]:r.GREATER,[am]:r.NOTEQUAL};function q(A,E,O){if(O?(r.texParameteri(A,r.TEXTURE_WRAP_S,R[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,R[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,R[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,j[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,j[E.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ii||E.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==fn&&E.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===fn||E.minFilter!==Ko&&E.minFilter!==ra||E.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function K(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const ee=E.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=N(E);if(te!==A.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[te].usedTimes++;const pe=Q[A.__cacheKey];pe!==void 0&&(Q[A.__cacheKey].usedTimes--,pe.usedTimes===0&&y(E)),A.__cacheKey=te,A.__webglTexture=Q[te].texture}return O}function se(A,E,O){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const Q=K(A,E),te=E.source;t.bindTexture(ee,A.__webglTexture,r.TEXTURE0+O);const pe=n.get(te);if(te.version!==pe.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);const ue=dt.getPrimaries(dt.workingColorSpace),ce=E.colorSpace===Yn?null:dt.getPrimaries(E.colorSpace),be=E.colorSpace===Yn||ue===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=p(E)&&m(E.image)===!1;let J=_(E.image,ke,!1,i.maxTextureSize);J=Fe(E,J);const rt=m(J)||a,we=s.convert(E.format,E.colorSpace);let Ve=s.convert(E.type),ye=M(E.internalFormat,we,Ve,E.colorSpace,E.isVideoTexture);q(ee,E,rt);let ve;const We=E.mipmaps,Ze=a&&E.isVideoTexture!==!0&&ye!==dh,ot=pe.__version===void 0||Q===!0,he=C(E,J,rt);if(E.isDepthTexture)ye=r.DEPTH_COMPONENT,a?E.type===Bi?ye=r.DEPTH_COMPONENT32F:E.type===Fi?ye=r.DEPTH_COMPONENT24:E.type===xr?ye=r.DEPTH24_STENCIL8:ye=r.DEPTH_COMPONENT16:E.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mr&&ye===r.DEPTH_COMPONENT&&E.type!==Tc&&E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fi,Ve=s.convert(E.type)),E.format===vs&&ye===r.DEPTH_COMPONENT&&(ye=r.DEPTH_STENCIL,E.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=xr,Ve=s.convert(E.type))),ot&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,we,Ve,null));else if(E.isDataTexture)if(We.length>0&&rt){Ze&&ot&&t.texStorage2D(r.TEXTURE_2D,he,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],Ze?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,Ve,ve.data):t.texImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,we,Ve,ve.data);E.generateMipmaps=!1}else Ze?(ot&&t.texStorage2D(r.TEXTURE_2D,he,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,we,Ve,J.data)):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,we,Ve,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ye,We[0].width,We[0].height,J.depth);for(let re=0,P=We.length;re<P;re++)ve=We[re],E.format!==ri?we!==null?Ze?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,we,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ye,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,we,Ve,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ye,ve.width,ve.height,J.depth,0,we,Ve,ve.data)}else{Ze&&ot&&t.texStorage2D(r.TEXTURE_2D,he,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],E.format!==ri?we!==null?Ze?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,Ve,ve.data):t.texImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,we,Ve,ve.data)}else if(E.isDataArrayTexture)Ze?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,we,Ve,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,we,Ve,J.data);else if(E.isData3DTexture)Ze?(ot&&t.texStorage3D(r.TEXTURE_3D,he,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,we,Ve,J.data)):t.texImage3D(r.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,we,Ve,J.data);else if(E.isFramebufferTexture){if(ot)if(Ze)t.texStorage2D(r.TEXTURE_2D,he,ye,J.width,J.height);else{let re=J.width,P=J.height;for(let ae=0;ae<he;ae++)t.texImage2D(r.TEXTURE_2D,ae,ye,re,P,0,we,Ve,null),re>>=1,P>>=1}}else if(We.length>0&&rt){Ze&&ot&&t.texStorage2D(r.TEXTURE_2D,he,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],Ze?t.texSubImage2D(r.TEXTURE_2D,re,0,0,we,Ve,ve):t.texImage2D(r.TEXTURE_2D,re,ye,we,Ve,ve);E.generateMipmaps=!1}else Ze?(ot&&t.texStorage2D(r.TEXTURE_2D,he,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ve,J)):t.texImage2D(r.TEXTURE_2D,0,ye,we,Ve,J);S(E,rt)&&x(ee),pe.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function _e(A,E,O){if(E.image.length!==6)return;const ee=K(A,E),Q=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(r.TEXTURE0+O);const pe=dt.getPrimaries(dt.workingColorSpace),ue=E.colorSpace===Yn?null:dt.getPrimaries(E.colorSpace),ce=E.colorSpace===Yn||pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!be&&!ke?J[re]=_(E.image[re],!1,!0,i.maxCubemapSize):J[re]=ke?E.image[re].image:E.image[re],J[re]=Fe(E,J[re]);const rt=J[0],we=m(rt)||a,Ve=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),ve=M(E.internalFormat,Ve,ye,E.colorSpace),We=a&&E.isVideoTexture!==!0,Ze=te.__version===void 0||ee===!0;let ot=C(E,rt,we);q(r.TEXTURE_CUBE_MAP,E,we);let he;if(be){We&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ve,rt.width,rt.height);for(let re=0;re<6;re++){he=J[re].mipmaps;for(let P=0;P<he.length;P++){const ae=he[P];E.format!==ri?Ve!==null?We?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Ve,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Ve,ye,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ve,ae.width,ae.height,0,Ve,ye,ae.data)}}}else{he=E.mipmaps,We&&Ze&&(he.length>0&&ot++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ve,J[0].width,J[0].height));for(let re=0;re<6;re++)if(ke){We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,Ve,ye,J[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,J[re].width,J[re].height,0,Ve,ye,J[re].data);for(let P=0;P<he.length;P++){const oe=he[P].image[re].image;We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,oe.width,oe.height,Ve,ye,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ve,oe.width,oe.height,0,Ve,ye,oe.data)}}else{We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,ye,J[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,Ve,ye,J[re]);for(let P=0;P<he.length;P++){const ae=he[P];We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Ve,ye,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ve,Ve,ye,ae.image[re])}}}S(E,we)&&x(r.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function de(A,E,O,ee,Q,te){const pe=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),ce=M(O.internalFormat,pe,ue,O.colorSpace);if(!n.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>te),J=Math.max(1,E.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ce,ke,J,E.depth,0,pe,ue,null):t.texImage2D(Q,te,ce,ke,J,0,pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,0,Le(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(A,E,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||ge(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Bi?ee=r.DEPTH_COMPONENT32F:Q.type===Fi&&(ee=r.DEPTH_COMPONENT24));const te=Le(E);ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ee,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ee,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ee=Le(E);O&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],pe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ce=M(te.internalFormat,pe,ue,te.colorSpace),be=Le(E);O&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ce,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,Q=Le(E);if(E.depthTexture.format===Mr)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===vs)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const E=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,A)}else if(O){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ce(E.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ce(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(A,E,O){const ee=n.get(A);E!==void 0&&de(ee.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ue(A)}function z(A){const E=A.texture,O=n.get(A),ee=n.get(E);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,pe=m(A)||a;if(Q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let ce=0;ce<E.mipmaps.length;ce++)O.__webglFramebuffer[ue][ce]=r.createFramebuffer()}else O.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)O.__webglFramebuffer[ue]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const ue=A.texture;for(let ce=0,be=ue.length;ce<be;ce++){const ke=n.get(ue[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){const ue=te?E:[E];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const be=ue[ce];O.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const ke=s.convert(be.format,be.colorSpace),J=s.convert(be.type),rt=M(be.internalFormat,ke,J,be.colorSpace,A.isXRRenderTarget===!0),we=Le(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,rt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),q(r.TEXTURE_CUBE_MAP,E,pe);for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(O.__webglFramebuffer[ue][ce],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else de(O.__webglFramebuffer[ue],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E,pe)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=A.texture;for(let ce=0,be=ue.length;ce<be;ce++){const ke=ue[ce],J=n.get(ke);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),q(r.TEXTURE_2D,ke,pe),de(O.__webglFramebuffer,A,ke,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),S(ke,pe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ue=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),q(ue,E,pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(O.__webglFramebuffer[ce],A,E,r.COLOR_ATTACHMENT0,ue,ce);else de(O.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,ue,0);S(E,pe)&&x(ue),t.unbindTexture()}A.depthBuffer&&Ue(A)}function He(A){const E=m(A)||a,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,Q=O.length;ee<Q;ee++){const te=O[ee];if(S(te,E)){const pe=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(te).__webglTexture;t.bindTexture(pe,ue),x(pe),t.unbindTexture()}}}function me(A){if(a&&A.samples>0&&ge(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,ee=A.height;let Q=r.COLOR_BUFFER_BIT;const te=[],pe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(A),ce=A.isWebGLMultipleRenderTargets===!0;if(ce)for(let be=0;be<E.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<E.length;be++){te.push(r.COLOR_ATTACHMENT0+be),A.depthBuffer&&te.push(pe);const ke=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]),ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),ce){const J=n.get(E[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<E.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const ke=n.get(E[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(i.maxSamples,A.samples)}function ge(A){const E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(A){const E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Fe(A,E){const O=A.colorSpace,ee=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ql||O!==wi&&O!==Yn&&(dt.getTransfer(O)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ee===ri?(A.format=ql,A.minFilter=Hn,A.generateMipmaps=!1):E=gh.sRGBToLinear(E):(ee!==ri||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function ux(r,e,t){const n=t.isWebGL2;function i(s,o=Yn){let a;const l=dt.getTransfer(o);if(s===Yi)return r.UNSIGNED_BYTE;if(s===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wp)return r.BYTE;if(s===Xp)return r.SHORT;if(s===Tc)return r.UNSIGNED_SHORT;if(s===oh)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===sa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yp)return r.ALPHA;if(s===ri)return r.RGBA;if(s===qp)return r.LUMINANCE;if(s===$p)return r.LUMINANCE_ALPHA;if(s===Mr)return r.DEPTH_COMPONENT;if(s===vs)return r.DEPTH_STENCIL;if(s===ql)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kp)return r.RED;if(s===uh)return r.RED_INTEGER;if(s===Zp)return r.RG;if(s===fh)return r.RG_INTEGER;if(s===hh)return r.RGBA_INTEGER;if(s===Zo||s===jo||s===Jo||s===Qo)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ou||s===lu||s===cu||s===uu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ou)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fu||s===hu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===fu)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===du||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===Mu||s===Su||s===Eu||s===yu||s===Tu||s===bu||s===Au)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===du)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_u)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Su)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Au)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===el||s===wu||s===Ru)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===el)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ru)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jp||s===Cu||s===Pu||s===Lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===el)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Cu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class fx extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hx={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Va;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dx extends ws{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],x=[],M=new at;let C=null;const w=new Vn;w.layers.enable(1),w.viewport=new Yt;const b=new Vn;b.layers.enable(2),b.viewport=new Yt;const U=[w,b],v=new fx;v.layers.enable(1),v.layers.enable(2);let y=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=S[q];return K===void 0&&(K=new bl,S[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=S[q];return K===void 0&&(K=new bl,S[q]=K),K.getGripSpace()},this.getHand=function(q){let K=S[q];return K===void 0&&(K=new bl,S[q]=K),K.getHandSpace()};function D(q){const K=x.indexOf(q.inputSource);if(K===-1)return;const se=S[K];se!==void 0&&(se.update(q.inputSource,q.frame,c||o),se.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let q=0;q<S.length;q++){const K=x[q];K!==null&&(x[q]=null,S[q].disconnect(K))}y=null,F=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Pr(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,se=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?vs:Mr,se=_.stencil?xr:Fi);const de={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(de),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Pr(h.textureWidth,h.textureHeight,{format:ri,type:Yi,depthTexture:new Lh(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const se=q.removed[K],_e=x.indexOf(se);_e>=0&&(x[_e]=null,S[_e].disconnect(se))}for(let K=0;K<q.added.length;K++){const se=q.added[K];let _e=x.indexOf(se);if(_e===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=x.length){x.push(se),_e=Ce;break}else if(x[Ce]===null){x[Ce]=se,_e=Ce;break}if(_e===-1)break}const de=S[_e];de&&de.connect(se)}}const N=new X,G=new X;function W(q,K,se){N.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const _e=N.distanceTo(G),de=K.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Pe=de[14]/(de[10]-1),Ue=de[14]/(de[10]+1),Ge=(de[9]+1)/de[5],z=(de[9]-1)/de[5],He=(de[8]-1)/de[0],me=(Ce[8]+1)/Ce[0],Le=Pe*He,ge=Pe*me,k=_e/(-He+me),Fe=k*-He;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(k),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Pe+k,E=Ue+k,O=Le-Fe,ee=ge+(_e-Fe),Q=Ge*Ue/E*A,te=z*Ue/E*A;q.projectionMatrix.makePerspective(O,ee,Q,te,A,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;v.near=b.near=w.near=q.near,v.far=b.far=w.far=q.far,(y!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,F=v.far);const K=q.parent,se=v.cameras;Y(v,K);for(let _e=0;_e<se.length;_e++)Y(se[_e],K);se.length===2?W(v,w,b):v.projectionMatrix.copy(w.projectionMatrix),$(q,v,K)};function $(q,K,se){se===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$l*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let R=null;function j(q,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;se.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let de=0;de<se.length;de++){const Ce=se[de];let Pe=null;if(d!==null)Pe=d.getViewport(Ce);else{const Ge=f.getViewSubImage(h,Ce);Pe=Ge.viewport,de===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Ue=U[de];Ue===void 0&&(Ue=new Vn,Ue.layers.enable(de),Ue.viewport=new Yt,U[de]=Ue),Ue.matrix.fromArray(Ce.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ce.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),de===0&&(v.matrix.copy(Ue.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(Ue)}}for(let se=0;se<S.length;se++){const _e=x[se],de=S[se];_e!==null&&de!==void 0&&de.update(_e,K,c||o)}R&&R(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ne=new Ph;ne.setAnimationLoop(j),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function px(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ah(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mx(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(S,C);const w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const x=f();S.__bindingPointIndex=x;const M=r.createBuffer(),C=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],M=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,b=M.length;w<b;w++){const U=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,y=U.length;v<y;v++){const F=U[v];if(d(F,w,v,C)===!0){const D=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let N=0;N<Z.length;N++){const G=Z[N],W=_(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,D+L,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,M,C){const w=S.value,b=x+"_"+M;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const U=C[b];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return C[b]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(S){const x=S.uniforms;let M=0;const C=16;for(let b=0,U=x.length;b<U;b++){const v=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,F=v.length;y<F;y++){const D=v[y],Z=Array.isArray(D.value)?D.value:[D.value];for(let L=0,N=Z.length;L<N;L++){const G=Z[L],W=_(G),Y=M%C;Y!==0&&C-Y<W.boundary&&(M+=C-Y),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=W.storage}}}const w=M%C;return w>0&&(M+=C-w),S.__size=M,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Fh{constructor(e={}){const{canvas:t=um(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const x=this;let M=!1,C=0,w=0,b=null,U=-1,v=null;const y=new Yt,F=new Yt;let D=null;const Z=new ft(0);let L=0,N=t.width,G=t.height,W=1,Y=null,$=null;const R=new Yt(0,0,N,G),j=new Yt(0,0,N,G);let ne=!1;const q=new Ch;let K=!1,se=!1,_e=null;const de=new Vt,Ce=new at,Pe=new X,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return b===null?W:1}let z=n;function He(T,I){for(let V=0;V<T.length;V++){const H=T[V],B=t.getContext(H,I);if(B!==null)return B}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),z=He(I,T),z===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,Le,ge,k,Fe,A,E,O,ee,Q,te,pe,ue,ce,be,ke,J,rt,we,Ve,ye,ve,We,Ze;function ot(){me=new b0(z),Le=new v0(z,me,e),me.init(Le),ve=new ux(z,me,Le),ge=new lx(z,me,Le),k=new R0(z),Fe=new $v,A=new cx(z,me,ge,Fe,Le,ve,k),E=new M0(x),O=new T0(x),ee=new Nm(z,Le),We=new _0(z,me,ee,Le),Q=new A0(z,ee,k,We),te=new D0(z,Q,ee,k),we=new L0(z,Le,A),ke=new x0(Fe),pe=new qv(x,E,O,me,Le,We,ke),ue=new px(x,Fe),ce=new Zv,be=new nx(me,Le),rt=new m0(x,E,O,ge,te,h,l),J=new ox(x,te,Le),Ze=new mx(z,k,Le,ge),Ve=new g0(z,me,k,Le),ye=new w0(z,me,k,Le),k.programs=pe.programs,x.capabilities=Le,x.extensions=me,x.properties=Fe,x.renderLists=ce,x.shadowMap=J,x.state=ge,x.info=k}ot();const he=new dx(x,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(N,G,!1))},this.getSize=function(T){return T.set(N,G)},this.setSize=function(T,I,V=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,G=I,t.width=Math.floor(T*W),t.height=Math.floor(I*W),V===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(N*W,G*W).floor()},this.setDrawingBufferSize=function(T,I,V){N=T,G=I,W=V,t.width=Math.floor(T*V),t.height=Math.floor(I*V),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,I,V,H){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,I,V,H),ge.viewport(y.copy(R).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,I,V,H){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,I,V,H),ge.scissor(F.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){ge.setScissorTest(ne=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(T=!0,I=!0,V=!0){let H=0;if(T){let B=!1;if(b!==null){const le=b.texture.format;B=le===hh||le===fh||le===uh}if(B){const le=b.texture.type,Se=le===Yi||le===Fi||le===Tc||le===xr||le===lh||le===ch,Be=rt.getClearColor(),Ee=rt.getClearAlpha(),Ae=Be.r,ze=Be.g,qe=Be.b;Se?(d[0]=Ae,d[1]=ze,d[2]=qe,d[3]=Ee,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Ae,g[1]=ze,g[2]=qe,g[3]=Ee,z.clearBufferiv(z.COLOR,0,g))}else H|=z.COLOR_BUFFER_BIT}I&&(H|=z.DEPTH_BUFFER_BIT),V&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),be.dispose(),Fe.dispose(),E.dispose(),O.dispose(),te.dispose(),We.dispose(),Ze.dispose(),pe.dispose(),he.dispose(),he.removeEventListener("sessionstart",xe),he.removeEventListener("sessionend",Re),_e&&(_e.dispose(),_e=null),ie.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=k.autoReset,I=J.enabled,V=J.autoUpdate,H=J.needsUpdate,B=J.type;ot(),k.autoReset=T,J.enabled=I,J.autoUpdate=V,J.needsUpdate=H,J.type=B}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const I=T.target;I.removeEventListener("dispose",oe),Ne(I)}function Ne(T){De(T),Fe.remove(T)}function De(T){const I=Fe.get(T).programs;I!==void 0&&(I.forEach(function(V){pe.releaseProgram(V)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,V,H,B,le){I===null&&(I=Ue);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Be=gt(T,I,V,H,B);ge.setMaterial(H,Se);let Ee=V.index,Ae=1;if(H.wireframe===!0){if(Ee=Q.getWireframeAttribute(V),Ee===void 0)return;Ae=2}const ze=V.drawRange,qe=V.attributes.position;let St=ze.start*Ae,Nt=(ze.start+ze.count)*Ae;le!==null&&(St=Math.max(St,le.start*Ae),Nt=Math.min(Nt,(le.start+le.count)*Ae)),Ee!==null?(St=Math.max(St,0),Nt=Math.min(Nt,Ee.count)):qe!=null&&(St=Math.max(St,0),Nt=Math.min(Nt,qe.count));const ut=Nt-St;if(ut<0||ut===1/0)return;We.setup(B,H,Be,V,Ee);let rn,ht=Ve;if(Ee!==null&&(rn=ee.get(Ee),ht=ye,ht.setIndex(rn)),B.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Ge()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(B.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),ge.setLineWidth(Xe*Ge()),B.isLineSegments?ht.setMode(z.LINES):B.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else B.isPoints?ht.setMode(z.POINTS):B.isSprite&&ht.setMode(z.TRIANGLES);if(B.isBatchedMesh)ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ht.renderInstances(St,ut,B.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xo=Math.min(V.instanceCount,Xe);ht.renderInstances(St,ut,Xo)}else ht.render(St,ut)};function nt(T,I,V){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,_t(T,I,V),T.side=Zi,T.needsUpdate=!0,_t(T,I,V),T.side=li):_t(T,I,V)}this.compile=function(T,I,V=null){V===null&&(V=T),m=be.get(V),m.init(),S.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==V&&T.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const H=new Set;return T.traverse(function(B){const le=B.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const Be=le[Se];nt(Be,V,B),H.add(Be)}else nt(le,V,B),H.add(le)}),S.pop(),m=null,H},this.compileAsync=function(T,I,V=null){const H=this.compile(T,I,V);return new Promise(B=>{function le(){if(H.forEach(function(Se){Fe.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){B(T);return}setTimeout(le,10)}me.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let st=null;function Te(T){st&&st(T)}function xe(){ie.stop()}function Re(){ie.start()}const ie=new Ph;ie.setAnimationLoop(Te),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(T){st=T,he.setAnimationLoop(T),T===null?ie.stop():ie.start()},he.addEventListener("sessionstart",xe),he.addEventListener("sessionend",Re),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(I),I=he.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,b),m=be.get(T,S.length),m.init(),S.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(de),se=this.localClippingEnabled,K=ke.init(this.clippingPlanes,se),_=ce.get(T,p.length),_.init(),p.push(_),Oe(T,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,K===!0&&ke.beginShadows();const V=m.state.shadowsArray;if(J.render(V,T,I),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(_,T),m.setupLights(x._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let B=0,le=H.length;B<le;B++){const Se=H[B];Ie(_,T,Se,Se.viewport)}}else Ie(_,T,I);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,I),We.resetDefaultState(),U=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Oe(T,I,V,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){H&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Se=te.update(T),Be=T.material;Be.visible&&_.push(T,Se,Be,V,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const Se=te.update(T),Be=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Be)){const Ee=Se.groups;for(let Ae=0,ze=Ee.length;Ae<ze;Ae++){const qe=Ee[Ae],St=Be[qe.materialIndex];St&&St.visible&&_.push(T,Se,St,V,Pe.z,qe)}}else Be.visible&&_.push(T,Se,Be,V,Pe.z,null)}}const le=T.children;for(let Se=0,Be=le.length;Se<Be;Se++)Oe(le[Se],I,V,H)}function Ie(T,I,V,H){const B=T.opaque,le=T.transmissive,Se=T.transparent;m.setupLightsView(V),K===!0&&ke.setGlobalState(x.clippingPlanes,V),le.length>0&&Ye(B,le,I,V),H&&ge.viewport(y.copy(H)),B.length>0&&yt(B,I,V),le.length>0&&yt(le,I,V),Se.length>0&&yt(Se,I,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ye(T,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const le=Le.isWebGL2;_e===null&&(_e=new Pr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?sa:Yi,minFilter:ra,samples:le?4:0})),x.getDrawingBufferSize(Ce),le?_e.setSize(Ce.x,Ce.y):_e.setSize(Kl(Ce.x),Kl(Ce.y));const Se=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Be=x.toneMapping;x.toneMapping=Xi,yt(T,V,H),A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e);let Ee=!1;for(let Ae=0,ze=I.length;Ae<ze;Ae++){const qe=I[Ae],St=qe.object,Nt=qe.geometry,ut=qe.material,rn=qe.group;if(ut.side===li&&St.layers.test(H.layers)){const ht=ut.side;ut.side=gn,ut.needsUpdate=!0,je(St,V,H,Nt,ut,rn),ut.side=ht,ut.needsUpdate=!0,Ee=!0}}Ee===!0&&(A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e)),x.setRenderTarget(Se),x.setClearColor(Z,L),x.toneMapping=Be}function yt(T,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let B=0,le=T.length;B<le;B++){const Se=T[B],Be=Se.object,Ee=Se.geometry,Ae=H===null?Se.material:H,ze=Se.group;Be.layers.test(V.layers)&&je(Be,I,V,Ee,Ae,ze)}}function je(T,I,V,H,B,le){T.onBeforeRender(x,I,V,H,B,le),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(x,I,V,H,T,le),B.transparent===!0&&B.side===li&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,x.renderBufferDirect(V,I,H,B,T,le),B.side=Zi,B.needsUpdate=!0,x.renderBufferDirect(V,I,H,B,T,le),B.side=li):x.renderBufferDirect(V,I,H,B,T,le),T.onAfterRender(x,I,V,H,B,le)}function _t(T,I,V){I.isScene!==!0&&(I=Ue);const H=Fe.get(T),B=m.state.lights,le=m.state.shadowsArray,Se=B.state.version,Be=pe.getParameters(T,B.state,le,I,V),Ee=pe.getProgramCacheKey(Be);let Ae=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?O:E).get(T.envMap||H.environment),Ae===void 0&&(T.addEventListener("dispose",oe),Ae=new Map,H.programs=Ae);let ze=Ae.get(Ee);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Se)return xt(T,Be),ze}else Be.uniforms=pe.getUniforms(T),T.onBuild(V,Be,x),T.onBeforeCompile(Be,x),ze=pe.acquireProgram(Be,Ee),Ae.set(Ee,ze),H.uniforms=Be.uniforms;const qe=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=ke.uniform),xt(T,Be),H.needsLights=Tn(T),H.lightsStateVersion=Se,H.needsLights&&(qe.ambientLightColor.value=B.state.ambient,qe.lightProbe.value=B.state.probe,qe.directionalLights.value=B.state.directional,qe.directionalLightShadows.value=B.state.directionalShadow,qe.spotLights.value=B.state.spot,qe.spotLightShadows.value=B.state.spotShadow,qe.rectAreaLights.value=B.state.rectArea,qe.ltc_1.value=B.state.rectAreaLTC1,qe.ltc_2.value=B.state.rectAreaLTC2,qe.pointLights.value=B.state.point,qe.pointLightShadows.value=B.state.pointShadow,qe.hemisphereLights.value=B.state.hemi,qe.directionalShadowMap.value=B.state.directionalShadowMap,qe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,qe.spotShadowMap.value=B.state.spotShadowMap,qe.spotLightMatrix.value=B.state.spotLightMatrix,qe.spotLightMap.value=B.state.spotLightMap,qe.pointShadowMap.value=B.state.pointShadowMap,qe.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function It(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=so.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function xt(T,I){const V=Fe.get(T);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function gt(T,I,V,H,B){I.isScene!==!0&&(I=Ue),A.resetTextureUnits();const le=I.fog,Se=H.isMeshStandardMaterial?I.environment:null,Be=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wi,Ee=(H.isMeshStandardMaterial?O:E).get(H.envMap||Se),Ae=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),qe=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color;let ut=Xi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ut=x.toneMapping);const rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=rn!==void 0?rn.length:0,Xe=Fe.get(H),Xo=m.state.lights;if(K===!0&&(se===!0||T!==v)){const Bn=T===v&&H.id===U;ke.setState(H,T,Bn)}let At=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Xo.state.version||Xe.outputColorSpace!==Be||B.isBatchedMesh&&Xe.batching===!1||!B.isBatchedMesh&&Xe.batching===!0||B.isInstancedMesh&&Xe.instancing===!1||!B.isInstancedMesh&&Xe.instancing===!0||B.isSkinnedMesh&&Xe.skinning===!1||!B.isSkinnedMesh&&Xe.skinning===!0||B.isInstancedMesh&&Xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xe.instancingColor===!1&&B.instanceColor!==null||Xe.envMap!==Ee||H.fog===!0&&Xe.fog!==le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ke.numPlanes||Xe.numIntersection!==ke.numIntersection)||Xe.vertexAlphas!==Ae||Xe.vertexTangents!==ze||Xe.morphTargets!==qe||Xe.morphNormals!==St||Xe.morphColors!==Nt||Xe.toneMapping!==ut||Le.isWebGL2===!0&&Xe.morphTargetsCount!==ht)&&(At=!0):(At=!0,Xe.__version=H.version);let nr=Xe.currentProgram;At===!0&&(nr=_t(H,I,B));let Qc=!1,Cs=!1,Yo=!1;const Kt=nr.getUniforms(),ir=Xe.uniforms;if(ge.useProgram(nr.program)&&(Qc=!0,Cs=!0,Yo=!0),H.id!==U&&(U=H.id,Cs=!0),Qc||v!==T){Kt.setValue(z,"projectionMatrix",T.projectionMatrix),Kt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Bn=Kt.map.cameraPosition;Bn!==void 0&&Bn.setValue(z,Pe.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Kt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Kt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Cs=!0,Yo=!0)}if(B.isSkinnedMesh){Kt.setOptional(z,B,"bindMatrix"),Kt.setOptional(z,B,"bindMatrixInverse");const Bn=B.skeleton;Bn&&(Le.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Kt.setValue(z,"boneTexture",Bn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Kt.setOptional(z,B,"batchingTexture"),Kt.setValue(z,"batchingTexture",B._matricesTexture,A));const qo=V.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0&&Le.isWebGL2===!0)&&we.update(B,V,nr),(Cs||Xe.receiveShadow!==B.receiveShadow)&&(Xe.receiveShadow=B.receiveShadow,Kt.setValue(z,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ir.envMap.value=Ee,ir.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Cs&&(Kt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&ct(ir,Yo),le&&H.fog===!0&&ue.refreshFogUniforms(ir,le),ue.refreshMaterialUniforms(ir,H,W,G,_e),so.upload(z,It(Xe),ir,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(so.upload(z,It(Xe),ir,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Kt.setValue(z,"center",B.center),Kt.setValue(z,"modelViewMatrix",B.modelViewMatrix),Kt.setValue(z,"normalMatrix",B.normalMatrix),Kt.setValue(z,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bn=H.uniformsGroups;for(let $o=0,lp=Bn.length;$o<lp;$o++)if(Le.isWebGL2){const eu=Bn[$o];Ze.update(eu,nr),Ze.bind(eu,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function ct(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,V){Fe.get(T.texture).__webglTexture=I,Fe.get(T.depthTexture).__webglTexture=V;const H=Fe.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const V=Fe.get(T);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,V=0){b=T,C=I,w=V;let H=!0,B=null,le=!1,Se=!1;if(T){const Ee=Fe.get(T);Ee.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Ee.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ee.__hasExternalTextures&&A.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const ze=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?B=ze[I][V]:B=ze[I],le=!0):Le.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?B=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[V]:B=ze,y.copy(T.viewport),F.copy(T.scissor),D=T.scissorTest}else y.copy(R).multiplyScalar(W).floor(),F.copy(j).multiplyScalar(W).floor(),D=ne;if(ge.bindFramebuffer(z.FRAMEBUFFER,B)&&Le.drawBuffers&&H&&ge.drawBuffers(T,B),ge.viewport(y),ge.scissor(F),ge.setScissorTest(D),le){const Ee=Fe.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,V)}else if(Se){const Ee=Fe.get(T.texture),Ae=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ae)}U=-1},this.readRenderTargetPixels=function(T,I,V,H,B,le,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Be=Be[Se]),Be){ge.bindFramebuffer(z.FRAMEBUFFER,Be);try{const Ee=T.texture,Ae=Ee.format,ze=Ee.type;if(Ae!==ri&&ve.convert(Ae)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=ze===sa&&(me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&me.has("EXT_color_buffer_float"));if(ze!==Yi&&ve.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Bi&&(Le.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&V>=0&&V<=T.height-B&&z.readPixels(I,V,H,B,ve.convert(Ae),ve.convert(ze),le)}finally{const Ee=b!==null?Fe.get(b).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,I,V=0){const H=Math.pow(2,-V),B=Math.floor(I.image.width*H),le=Math.floor(I.image.height*H);A.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,T.x,T.y,B,le),ge.unbindTexture()},this.copyTextureToTexture=function(T,I,V,H=0){const B=I.image.width,le=I.image.height,Se=ve.convert(V.format),Be=ve.convert(V.type);A.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,T.x,T.y,B,le,Se,Be,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,T.x,T.y,Se,Be,I.image),H===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,I,V,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,Ee=ve.convert(H.format),Ae=ve.convert(H.type);let ze;if(H.isData3DTexture)A.setTexture3D(H,0),ze=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)A.setTexture2DArray(H,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const qe=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nt=z.getParameter(z.UNPACK_SKIP_PIXELS),ut=z.getParameter(z.UNPACK_SKIP_ROWS),rn=z.getParameter(z.UNPACK_SKIP_IMAGES),ht=V.isCompressedTexture?V.mipmaps[B]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(ze,B,I.x,I.y,I.z,le,Se,Be,Ee,Ae,ht.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,B,I.x,I.y,I.z,le,Se,Be,Ee,ht.data)):z.texSubImage3D(ze,B,I.x,I.y,I.z,le,Se,Be,Ee,Ae,ht),z.pixelStorei(z.UNPACK_ROW_LENGTH,qe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ut),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rn),B===0&&H.generateMipmaps&&z.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,ge.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Sr:ph}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Xt:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _x extends Fh{}_x.prototype.isWebGL1Renderer=!0;class gx extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bh extends va{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sf=new Vt,jl=new Mh,Wa=new Fo,Xa=new X;class vx extends vn{constructor(e=new Pi,t=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Sf.copy(i).invert(),jl.copy(e.ray).applyMatrix4(Sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Xa.fromBufferAttribute(f,m),Ef(Xa,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Xa.fromBufferAttribute(f,g),Ef(Xa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ef(r,e,t,n,i,s,o){const a=jl.distanceSqToPoint(r);if(a<t){const l=new X;jl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ms={duration:.5,overwrite:!1,delay:0},wc,$t,Et,qn=1e8,mt=1/qn,Jl=Math.PI*2,xx=Jl/4,Mx=0,kh=Math.sqrt,Sx=Math.cos,Ex=Math.sin,Wt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Rc=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},xn=function(e){return e!==!1},Cc=function(){return typeof window<"u"},Ya=function(e){return wt(e)||Wt(e)},Gh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Ql=/(?:-?\.?\d|\.)+/gi,Hh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vh=/[+-]=-?[.\d]+/,Wh=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,si,ec,Pc,On={},yo={},Xh,Yh=function(e){return(yo=Ss(e,On))&&yn},Lc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},qh=function(e,t){return e&&(On[e]=t)&&yo&&(yo[e]=t)||On},oa=function(){return 0},Tx={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},bx={suppressEvents:!0},Dc={},qi=[],tc={},$h,Cn={},wl={},yf=30,oo=[],Uc="",Ic=function(e){var t=e[0],n,i;if(di(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oo.length;i--&&!oo[i].targetTest(t););n=oo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new vd(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||Ic($n(e))[0]._gsap},Kh=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():Rc(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ax=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},To=function(){var e=qi.length,t=qi.slice(0),n,i;for(tc={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nc=function(e){return!!(e._initted||e._startAt||e.add)},Zh=function(e,t,n,i){qi.length&&!$t&&To(),e.render(t,n,!!($t&&t<0&&Nc(e))),qi.length&&!$t&&To()},jh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wh).length<2?t:Wt(e)?e.trim():e},Jh=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ss=function(e,t){for(var n in t)e[n]=t[n];return e},Tf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},bo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ys=function(e){var t=e.parent||Tt,n=e.keyframes?wx(nn(e.keyframes)):Fn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Rx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qh=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Cx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nc=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Px=function r(e){return!e||e._ts&&r(e.parent)},bf=function(e){return e._repeat?Es(e._tTime,e=e.duration()+e._rDelay)*e:0},Es=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Ao=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ho=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},Vo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ho(e),n._dirty||Tr(n,e)),e},ed=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ao(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>mt)&&t.render(n,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-mt}},ci=function(e,t,n,i){return t.parent&&Ji(t),t._start=Ut((Ri(n)?n:n||e!==Tt?kn(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qh(e,t,"_first","_last",e._sort?"_start":0),ic(t)||(e._recent=t),i||ed(e,t),e._ts<0&&Vo(e,e._tTime),e},td=function(e,t){return(On.ScrollTrigger||Lc("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},nd=function(e,t,n,i,s){if(Fc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$h!==Ln.frame)return qi.push(e),e._lazy=[s,i],1},Lx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Dx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Lx(e)&&!(!e._initted&&ic(e))||(e._ts<0||e._dp._ts<0)&&!ic(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ma(0,e._tDur,t),u=Es(l,a),e._yoyo&&u&1&&(o=1-o),u!==Es(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$t||i||e._zTime===mt||!t&&e._zTime){if(!e._initted&&nd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?mt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&nc(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ji(e,1),!n&&!$t&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ux=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ys=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Vo(e,e._tTime=e._tDur*a),e.parent&&Ho(e),n||Tr(e.parent,e),e},Af=function(e){return e instanceof hn?Tr(e):ys(e,e._dur)},Ix={_start:0,endTime:oa,totalDuration:oa},kn=function r(e,t,n){var i=e.labels,s=e._recent||Ix,o=e.duration()>=qn?s.endTime(!1):e._dur,a,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qs=function(e,t,n){var i=Ri(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Dt(t[0],o,t[s+1])},tr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!Wt(e)||!(t=yx.exec(e))?"":t[1]},Nx=function(e,t,n){return tr(n,function(i){return Ma(e,t,i)})},rc=[].slice,id=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==si},Ox=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Wt(i)&&!t||id(i,1)?(s=n).push.apply(s,$n(i)):n.push(i)})||n},$n=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):Wt(e)&&!n&&(ec||!Ts())?rc.call((t||Pc).querySelectorAll(e),0):nn(e)?Ox(e,n):id(e)?rc.call(e,0):e?[e]:[]},sc=function(e){return e=$n(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $n(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||Pc.createElement("div"):e)}},rd=function(e){return e.sort(function(){return .5-Math.random()})},sd=function(e){if(wt(e))return e;var t=di(e)?e:{each:e},n=br(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Wt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,S,x,M,C,w,b,U,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,qn])[1],!v){for(b=-qn;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,S=v===qn?0:l?_*f/v-.5:i/v|0,b=0,U=qn,w=0;w<_;w++)x=w%v-p,M=S-(w/v|0),m[w]=C=c?Math.abs(c==="y"?M:x):kh(x*x+M*M),C>b&&(b=C),C<U&&(U=C);i==="random"&&rd(m),m.max=b-U,m.min=U,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=en(t.amount||t.each)||0,n=n&&_<0?md(n):n}return _=(m[h]-m.min)/m.max||0,Ut(m.b+(n?n(_):_)*m.v)+m.u}},ac=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:en(n))}},ad=function(e,t){var n=nn(e),i,s;return!n&&di(e)&&(i=n=e.radius||qn,e.values?(e=$n(e.values),(s=!Ri(e[0]))&&(i*=i)):e=ac(e.increment)),tr(t,n?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=qn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ri(o)?u:u+en(o)}:ac(e))},od=function(e,t,n,i){return tr(nn(e)?!t:n===!0?!!(n=0):!i,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Fx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Bx=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},zx=function(e,t,n){return cd(e,t,0,1,n)},ld=function(e,t,n){return tr(n,function(i){return e[~~t(i)]})},kx=function r(e,t,n){var i=t-e;return nn(e)?ld(e,r(0,e.length),t):tr(n,function(s){return(i+(s-e)%i)%i+e})},Gx=function r(e,t,n){var i=t-e,s=i*2;return nn(e)?ld(e,r(0,e.length-1),t):tr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},la=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Wh:Ql),n+=e.substr(t,i-t)+od(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},cd=function(e,t,n,i,s){var o=t-e,a=i-n;return tr(s,function(l){return n+((l-e)/o*a||0)})},Hx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Wt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ss(nn(e)?[]:{},e));if(!u){for(l in t)Oc.call(a,e,l,"get",t[l]);s=function(g){return kc(g,a)||(o?e.p:e)}}}return tr(n,s)},wf=function(e,t,n){var i=e.labels,s=qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(e,t,n){var i=e.vars,s=i[t],o=Et,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&To(),a&&(Et=a),u=l?s.apply(c,l):s.call(c),Et=o,u},Bs=function(e){return Ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&Un(e,"onInterrupt"),e},as,ud=[],fd=function(e){if(e)if(e=!e.name&&e.default||e,Cc()||e.headless){var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:kc,add:Oc,kill:rM,modifier:iM,rawVars:0},o={targetTest:0,get:0,getSetter:zc,aliases:{},register:0};if(Ts(),e!==i){if(Cn[t])return;Fn(i,Fn(bo(e,s),o)),Ss(i.prototype,Ss(s,bo(e,o))),Cn[i.prop=t]=i,e.targetTest&&(oo.push(i),Dc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qh(t,i),e.register&&e.register(yn,i,Sn)}else ud.push(e)},pt=255,zs={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Rl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},hd=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&pt,e&pt]:0:zs.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zs[e])i=zs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ql),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Rl(l+1/3,s,o),i[1]=Rl(l,s,o),i[2]=Rl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Hh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ql)||zs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/pt,o=i[1]/pt,a=i[2]/pt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dd=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(s){var o=s.match(ss)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Rf=function(e,t,n){var i="",s=(e+i).match($i),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=hd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=dd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(ss),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Vx=/hsl[a]?\(/,pd=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=Vx.test(t),e[1]=Rf(e[1],n),e[0]=Rf(e[0],n,dd(e[1])),!0},ca,Ln=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,S=m===!0,x,M,C,w;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,x=C-o,(x>0||S)&&(w=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=x+(x>=s?4:s-x),M=1),S||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](C,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Xh&&(!ec&&Cc()&&(si=ec=window,Pc=si.document||{},On.gsap=yn,(si.gsapVersions||(si.gsapVersions=[])).push(yn.version),Yh(yo||si.GreenSockGlobals||!si.gsap&&si||{}),ud.forEach(fd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ca=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var x=p?function(M,C,w,b){m(M,C,w,b),f.remove(x)}:m;return f.remove(m),a[S?"unshift":"push"](x),Ts(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ts=function(){return!ca&&Ln.wake()},it={},Wx=/^[\d.\-M][\d.\-,\s]/,Xx=/["']/g,Yx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Xx,"").trim():+c,i=l.substr(a+1).trim();return t},qx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$x=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Yx(t[1])]:qx(e).split(",").map(jh)):it._CE&&Wx.test(e)?it._CE("",e):n},md=function(e){return function(t){return 1-e(1-t)}},_d=function r(e,t){for(var n=e._first,i;n;)n instanceof hn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},br=function(e,t){return e&&(wt(e)?e:it[e]||$x(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Mn(e,function(a){it[a]=On[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},gd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Jl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ex((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:gd(a);return s=Jl/s,l.config=function(c,u){return r(e,c,u)},l},Pl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gd(n);return i.config=function(s){return r(e,s)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Nr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Nr("Elastic",Cl("in"),Cl("out"),Cl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Nr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Nr("Circ",function(r){return-(kh(1-r*r)-1)});Nr("Sine",function(r){return r===1?1:-Sx(r*xx)+1});Nr("Back",Pl("in"),Pl("out"),Pl());it.SteppedEase=it.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-mt;return function(a){return((i*Ma(0,o,a)|0)+s)*n}}};Ms.ease=it["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uc+=r+","+r+"Params,"});var vd=function(e,t){this.id=Mx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kh,this.set=t?t.getSetter:zc},ua=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ys(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),ca||Ln.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vo(this,n),!s._dp||s.parent||ed(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-mt?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ho(this),Cx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ao(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bx);var i=$t;return $t=n,Nc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Af(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Af(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(kn(this,n),xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=wt(n)?n:Jh,a=function(){var c=i.then;i.then=null,wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Bs(this)},r}();Fn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var hn=function(r){zh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),Tt&&ci(n.parent||Tt,Mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&td(Mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return qs(0,arguments,this),this},t.from=function(i,s,o){return qs(1,arguments,this),this},t.fromTo=function(i,s,o,a){return qs(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(i,s,kn(this,o),1),this},t.call=function(i,s,o){return ci(this,Dt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Dt(i,o,kn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ys(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Ys(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,S,x,M,C,w,b;if(this!==Tt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,x=this._ts,p=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Ut(u%m),u===l?(_=this._repeat,h=c):(C=Ut(u/m),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=Es(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(h=c-h,b=1),_!==C&&!this._lock){var U=w&&C&1,v=U===(w&&_&1);if(_<C&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ut(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;_d(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ux(this,Ut(a),Ut(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!C&&(Un(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-mt);break}}d=g}else{d=this._last;for(var y=i<0?i:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||$t&&Nc(d)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-mt:mt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-mt)._zTime=h>=a?1:-1,this._ts))return this._start=M,Ho(this),this.render(i,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ri(s)||(s=kn(this,s,i)),!(i instanceof ua)){if(nn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Wt(i))return this.addLabel(i,s);if(wt(i))i=Dt.delayedCall(0,i);else return this}return this!==i?ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Dt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Wt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(i.parent===this&&Go(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=kn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Dt.delayedCall(0,s||oa,o);return a.data="isPause",this._hasPause=1,ci(this,a,kn(this,i))},t.removePause=function(i){var s=this._first;for(i=kn(this,i);s;)s._start===i&&s.data==="isPause"&&Ji(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)zi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=$n(i),l=this._first,c=Ri(s),u;l;)l instanceof Dt?Ax(l._targets,a)&&(c?(!zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=kn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Dt.to(o,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||mt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ys(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Fn({startAt:{time:kn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wf(this,kn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wf(this,kn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Tr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ys(o,o===Tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Tt._ts&&(Zh(Tt,Ao(i,Tt)),$h=Ln.frame),Ln.frame>=yf){yf+=Nn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Nn.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(ua);Fn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kx=function(e,t,n,i,s,o,a){var l=new Sn(this._pt,e,t,0,1,Td,null,s),c=0,u=0,f,h,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=la(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),h=n.match(Al)||[];f=Al.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?us(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Vh.test(i)||p)&&(l.e=0),this._pt=l,l},Oc=function(e,t,n,i,s,o,a,l,c,u){wt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:wt(f)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=wt(f)?c?eM:Ed:Bc,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(g=us(h,i)+(en(h)||0),(g||g===0)&&(i=g))),!u||h!==i||oc)return!isNaN(h*i)&&i!==""?(g=new Sn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?nM:yd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Lc(t,i),Kx.call(this,e,t,h,i,d,l||Nn.stringFilter,c))},Zx=function(e,t,n,i,s){if(wt(e)&&(e=$s(e,s,t,n,i)),!di(e)||e.style&&e.nodeType||nn(e)||Gh(e))return Wt(e)?$s(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=$s(e[a],s,t,n,i);return o},xd=function(e,t,n,i,s,o){var a,l,c,u;if(Cn[e]&&(a=new Cn[e]).init(s,a.rawVars?t[e]:Zx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Sn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},zi,oc,Fc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!wc,M=e.timeline,C,w,b,U,v,y,F,D,Z,L,N,G,W;if(M&&(!h||!s)&&(s="none"),e._ease=br(s,Ms.ease),e._yEase=f?md(br(f===!0?s:f,Ms.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(D=m[0]?yr(m[0]).harness:0,G=D&&i[D.prop],C=bo(i,Dc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?ao:Tx),_._lazy=0),o){if(Ji(e._startAt=Dt.set(m,Fn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!a&&!d)&&e._startAt.revert(ao),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=Fn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&xn(l),immediateRender:a,stagger:0,parent:p},C),G&&(b[D.prop]=G),Ji(e._startAt=Dt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&xn(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],F=v._gsap||Ic(m)[w]._gsap,e._ptLookup[w]=L={},tc[F.id]&&qi.length&&To(),N=S===m?w:S.indexOf(v),D&&(Z=new D).init(v,G||C,e,N,S)!==!1&&(e._pt=U=new Sn(e._pt,v,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(Y){L[Y]=U}),Z.priority&&(y=1)),!D||G)for(b in C)Cn[b]&&(Z=xd(b,C,e,N,v,S))?Z.priority&&(y=1):L[b]=U=Oc.call(e,v,b,"get",C[b],N,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),x&&e._pt&&(zi=e,Tt.killTweensOf(v,L,e.globalTime(t)),W=!e.parent,zi=0),e._pt&&l&&(tc[F.id]=1)}y&&bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,h&&t<=0&&M.render(qn,!0,!0)},jx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return oc=1,e.vars[t]="+=0",Fc(e,a),oc=0,l?aa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Rt(n)+en(f.e)),f.b&&(f.b=u.s+en(f.b))},Jx=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ss({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Qx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(nn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$s=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):Wt(e)&&~e.indexOf("random(")?la(e):e},Md=Uc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sd={};Mn(Md+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Sd[r]=1});var Dt=function(r){zh(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ys(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Tt,x=(nn(n)||Gh(n)?Ri(n[0]):"length"in i)?[n]:$n(n),M,C,w,b,U,v,y,F;if(a._targets=x.length?Ic(x):aa("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Ya(c)||Ya(u)){if(i=a.vars,M=a.timeline=new hn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),M.kill(),M.parent=M._dp=Mi(a),M._start=0,h||Ya(c)||Ya(u)){if(b=x.length,y=h&&sd(h),di(h))for(U in h)~Md.indexOf(U)&&(F||(F={}),F[U]=h[U]);for(C=0;C<b;C++)w=bo(i,Sd),w.stagger=0,p&&(w.yoyoEase=p),F&&Ss(w,F),v=x[C],w.duration=+$s(c,Mi(a),C,v,x),w.delay=(+$s(u,Mi(a),C,v,x)||0)-a._delay,!h&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),M.to(v,w,y?y(C,v,x):0),M._ease=it.none;M.duration()?c=u=0:a.timeline=0}else if(g){Ys(Fn(M.vars.defaults,{ease:"none"})),M._ease=br(g.ease||i.ease||"none");var D=0,Z,L,N;if(nn(g))g.forEach(function(G){return M.to(x,G,">")}),M.duration();else{w={};for(U in g)U==="ease"||U==="easeEach"||Qx(U,g[U],w,g.easeEach);for(U in w)for(Z=w[U].sort(function(G,W){return G.t-W.t}),D=0,C=0;C<Z.length;C++)L=Z[C],N={ease:L.e,duration:(L.t-(C?Z[C-1].t:0))/100*c},N[U]=L.v,M.to(x,N,D),D+=N.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!wc&&(zi=Mi(a),Tt.killTweensOf(x),zi=0),ci(S,Mi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ut(S._time)&&xn(f)&&Px(Mi(a))&&S.data!=="nested")&&(a._tTime=-mt,a.render(Math.max(0,-u)||0)),m&&td(Mi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-mt&&!u?l:i<mt?0:i,h,d,g,_,m,p,S,x,M;if(!c)Dx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ut(f%_),f===l?(g=this._repeat,h=c):(m=Ut(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,h=c-h),m=Es(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&_d(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(nd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(h/c),this._from&&(this.ratio=S=1-S),!a&&f&&!s&&!m&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&nc(this,i,s,o),Un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&nc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ji(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ca||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fc(this,c),u=this._ease(c/this._dur),jx(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Vo(this,0),this.parent||Qh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zi&&zi.vars.overwrite!==!0)._first||Bs(this),this.parent&&o!==this.timeline.totalDuration()&&ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?$n(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Rx(a,l))return s==="all"&&(this._pt=0),Bs(this);for(f=this._op=this._op||[],s!=="all"&&(Wt(s)&&(_={},Mn(s,function(S){return _[S]=1}),s=_),s=Jx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Go(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Bs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return qs(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return qs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Tt.killTweensOf(i,s,o)},e}(ua);Fn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(r){Dt[r]=function(){var e=new hn,t=rc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bc=function(e,t,n){return e[t]=n},Ed=function(e,t,n){return e[t](n)},eM=function(e,t,n,i){return e[t](i.fp,n)},tM=function(e,t,n){return e.setAttribute(t,n)},zc=function(e,t){return wt(e[t])?Ed:Rc(e[t])&&e.setAttribute?tM:Bc},yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Td=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},kc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},rM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Sn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||yd,this.d=l||this,this.set=c||Bc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sM,this.m=n,this.mt=s,this.tween=i},r}();Mn(Uc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Dc[r]=1});On.TweenMax=On.TweenLite=Dt;On.TimelineLite=On.TimelineMax=hn;Tt=new hn({sortChildren:!1,defaults:Ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=pd;var Ar=[],lo={},aM=[],Cf=0,oM=0,Ll=function(e){return(lo[e]||aM).map(function(t){return t()})},lc=function(){var e=Date.now(),t=[];e-Cf>2&&(Ll("matchMediaInit"),Ar.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=si.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ll("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cf=e,Ll("matchMedia"))},Ad=function(){function r(t,n){this.selector=n&&sc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var o=this,a=function(){var c=Et,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=sc(s)),Et=o,f=i.apply(o,arguments),wt(f)&&o._r.push(f),Et=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Et;Et=null,n(this),Et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ar.length;o--;)Ar[o].id===this.id&&Ar.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),lM=function(){function r(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){di(n)||(n={matches:n});var o=new Ad(0,s||this.scope),a=o.conditions={},l,c,u;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=si.matchMedia(n[c]),l&&(Ar.indexOf(o)<0&&Ar.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lc):l.addEventListener("change",lc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return fd(i)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=$n(e)[0]);var s=yr(e||{}).get,o=n?Jh:jh;return n==="native"&&(n=""),e&&(t?o((Cn[t]&&Cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=$n(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Cn[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;as._pt=0,f.init(e,n?u+n:u,as,0,[e]),f.render(1,f),as._pt&&kc(1,as)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,Fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=br(e.ease,Ms.ease)),Tf(Ms,e||{})},config:function(e){return Tf(Nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!On[a]&&aa(t+" effect requires "+a+" plugin.")}),wl[t]=function(a,l,c){return n($n(a),Fn(l||{},s),c)},o&&(hn.prototype[t]=function(a,l,c){return this.add(wl[t](a,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=br(t)},parseEase:function(e,t){return arguments.length?br(e,t):it},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new hn(e),i,s;for(n.smoothChildTiming=xn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,i=Tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&ci(n,i,i._start-i._delay),i=s;return ci(Tt,n,0),n},context:function(e,t){return e?new Ad(e,t):Et},matchMedia:function(e){return new lM(e)},matchMediaRefresh:function(){return Ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||lc()},addEventListener:function(e,t){var n=lo[e]||(lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kx,wrapYoyo:Gx,distribute:sd,random:od,snap:ad,normalize:zx,getUnit:en,clamp:Nx,splitColor:hd,toArray:$n,selector:sc,mapRange:cd,pipe:Fx,unitize:Bx,interpolate:Hx,shuffle:rd},install:Yh,effects:wl,ticker:Ln,updateRoot:hn.updateRoot,plugins:Cn,globalTimeline:Tt,core:{PropTween:Sn,globals:qh,Tween:Dt,Timeline:hn,Animation:ua,getCache:yr,_removeLinkedListItem:Go,reverting:function(){return $t},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return wc=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return wo[r]=Dt[r]});Ln.add(hn.updateRoot);as=wo.to({},{duration:0});var cM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=cM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Dl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Wt(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}uM(a,s)}}}},yn=wo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Dl("roundProps",ac),Dl("modifiers"),Dl("snap",ad))||wo;Dt.version=hn.version=yn.version="3.13.0";Xh=1;Cc()&&Ts();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pf,ki,fs,Gc,gr,Lf,Hc,fM=function(){return typeof window<"u"},Ci={},hr=180/Math.PI,hs=Math.PI/180,Jr=Math.atan2,Df=1e8,Vc=/([A-Z])/g,hM=/(left|right|width|margin|padding|x)/i,dM=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_M=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gM=function(e,t,n){return e.style[t]=n},vM=function(e,t,n){return e.style.setProperty(t,n)},xM=function(e,t,n){return e._gsap[t]=n},MM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},SM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},EM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},bt="transform",En=bt+"Origin",yM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Si(i,a)}):this.tfm[e]=o.x?o[e]:Si(i,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return ui.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},Cd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hc(),(!s||!s.isStart)&&!n[bt]&&(Cd(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pd=function(e,t){var n={target:e,props:[],revert:TM,save:yM};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ld,uc=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},Kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,bs(t)||t,1)||""},Uf="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,n){var i=t||gr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Uf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Uf[o]:"")+e},fc=function(){fM()&&window.document&&(Pf=window,ki=Pf.document,fs=ki.documentElement,gr=uc("div")||{style:{}},uc("div"),bt=bs(bt),En=bt+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!bs("perspective"),Hc=yn.core.reverting,Gc=1)},If=function(e){var t=e.ownerSVGElement,n=uc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fs.removeChild(n),s},Nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dd=function(e){var t,n;try{t=e.getBBox()}catch{t=If(e),n=1}return t&&(t.width||t.height)||n||(t=If(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nf(e,["x","cx","x1"])||0,y:+Nf(e,["y","cy","y1"])||0,width:0,height:0}:t},Ud=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dd(e))},Lr=function(e,t){if(t){var n=e.style,i;t in Ci&&t!==En&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Vc,"-$1").toLowerCase())):n.removeAttribute(t)}},Gi=function(e,t,n,i,s,o){var a=new Sn(e._pt,t,n,0,1,o?Rd:wd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Of={deg:1,rad:1,turn:1},bM={grid:1,flex:1},Qi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gr.style,l=hM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Of[i]||Of[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Ud(e),(d||o==="%")&&(Ci[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Rt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Rt(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[u],S?e.style[t]=S:Lr(e,t)}else(d||o==="%")&&!bM[Kn(_,"display")]&&(a.position=Kn(e,"position")),_===e&&(a.position="static"),_.appendChild(gr),g=gr[u],_.removeChild(gr),a.position="absolute";return l&&d&&(m=yr(_),m.time=Ln.time,m.width=_[u]),Rt(h?g*s/f:g&&s?f/g*s:0)},Si=function(e,t,n,i){var s;return Gc||fc(),t in ui&&t!=="transform"&&(t=ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(s=ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Co(Kn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ro[t]&&Ro[t](e,t,n)||Kn(e,t)||Kh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qi(e,t,s,n)+n:s},AM=function(e,t,n,i){if(!n||n==="none"){var s=bs(t,e,1),o=s&&Kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var a=new Sn(this._pt,e.style,t,0,1,Td),l=0,c=0,u,f,h,d,g,_,m,p,S,x,M,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Kn(e,t)||i,_?e.style[t]=_:Lr(e,t)),u=[n,i],pd(u),n=u[0],i=u[1],h=n.match(ss)||[],C=i.match(ss)||[],C.length){for(;f=ss.exec(i);)m=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=us(d,m)+M),p=parseFloat(m),x=m.substr((p+"").length),l=ss.lastIndex-x.length,x||(x=x||Nn.units[t]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(d=Qi(e,t,_,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Rd:wd;return Vh.test(i)&&(a.e=0),this._pt=a,a},Ff={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ff[n]||n,t[1]=Ff[i]||i,t.join(" ")},RM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ci[a]&&(l=1,a=a==="transformOrigin"?En:bt),Lr(n,a);l&&(Lr(n,bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),o.uncache=1,Cd(i)))}},Ro={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Sn(e._pt,t,n,0,0,RM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},fa=[1,0,0,1,0,0],Id={},Nd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var t=Kn(e,bt);return Nd(t)?fa:t.substr(7).match(Hh).map(Rt)},Wc=function(e,t){var n=e._gsap||yr(e),i=e.style,s=Bf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fa:s):(s===fa&&!e.offsetParent&&e!==fs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fs.appendChild(e)),s=Bf(e),l?i.display=l:Lr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),M=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,b,U,v;n?l!==fa&&(b=d*m-g*_)&&(U=M*(m/b)+C*(-_/b)+(_*S-m*p)/b,v=M*(-g/b)+C*(d/b)-(d*S-g*p)/b,M=U,C=v):(w=Dd(e),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&a.smooth?(p=M-c,S=C-u,a.xOffset=f+(p*d+S*_)-p,a.yOffset=h+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[En]="0px 0px",o&&(Gi(o,a,"xOrigin",c,M),Gi(o,a,"yOrigin",u,C),Gi(o,a,"xOffset",f,a.xOffset),Gi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+C)},ha=function(e,t){var n=e._gsap||new vd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Kn(e,En)||"0",u,f,h,d,g,_,m,p,S,x,M,C,w,b,U,v,y,F,D,Z,L,N,G,W,Y,$,R,j,ne,q,K,se;return u=f=h=_=m=p=S=x=M=0,d=g=1,n.svg=!!(e.getCTM&&Ud(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),b=Wc(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),hc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,w=n.yOrigin||0,b!==fa&&(F=b[0],D=b[1],Z=b[2],L=b[3],u=N=b[4],f=G=b[5],b.length===6?(d=Math.sqrt(F*F+D*D),g=Math.sqrt(L*L+Z*Z),_=F||D?Jr(D,F)*hr:0,S=Z||L?Jr(Z,L)*hr+_:0,S&&(g*=Math.abs(Math.cos(S*hs))),n.svg&&(u-=C-(C*F+w*Z),f-=w-(C*D+w*L))):(se=b[6],q=b[7],R=b[8],j=b[9],ne=b[10],K=b[11],u=b[12],f=b[13],h=b[14],U=Jr(se,ne),m=U*hr,U&&(v=Math.cos(-U),y=Math.sin(-U),W=N*v+R*y,Y=G*v+j*y,$=se*v+ne*y,R=N*-y+R*v,j=G*-y+j*v,ne=se*-y+ne*v,K=q*-y+K*v,N=W,G=Y,se=$),U=Jr(-Z,ne),p=U*hr,U&&(v=Math.cos(-U),y=Math.sin(-U),W=F*v-R*y,Y=D*v-j*y,$=Z*v-ne*y,K=L*y+K*v,F=W,D=Y,Z=$),U=Jr(D,F),_=U*hr,U&&(v=Math.cos(U),y=Math.sin(U),W=F*v+D*y,Y=N*v+G*y,D=D*v-F*y,G=G*v-N*y,F=W,N=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Rt(Math.sqrt(F*F+D*D+Z*Z)),g=Rt(Math.sqrt(G*G+se*se)),U=Jr(N,G),S=Math.abs(U)>2e-4?U*hr:0,M=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nd(Kn(e,bt)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Rt(d),n.scaleY=Rt(g),n.rotation=Rt(_)+a,n.rotationX=Rt(m)+a,n.rotationY=Rt(p)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[En]=Co(c)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?PM:Ld?Od:CM,n.uncache=0,n},Co=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ul=function(e,t,n){var i=en(t);return Rt(parseFloat(t)+parseFloat(Qi(e,"x",n+"px",i)))+i},CM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Od(e,t)},lr="0deg",Ns="0px",cr=") ",Od=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,M="",C=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==lr||u!==lr)){var w=parseFloat(u)*hs,b=Math.sin(w),U=Math.cos(w),v;w=parseFloat(f)*hs,v=Math.cos(w),o=Ul(S,o,b*v*-x),a=Ul(S,a,-Math.sin(w)*-x),l=Ul(S,l,U*v*-x+x)}m!==Ns&&(M+="perspective("+m+cr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(C||o!==Ns||a!==Ns||l!==Ns)&&(M+=l!==Ns||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(M+="rotate("+c+cr),u!==lr&&(M+="rotateY("+u+cr),f!==lr&&(M+="rotateX("+f+cr),(h!==lr||d!==lr)&&(M+="skew("+h+", "+d+cr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+cr),S.style[bt]=M||"translate(0, 0)"},PM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(o),M=parseFloat(a),C,w,b,U,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,C=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=hs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,U*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),C*=v,w*=v)),C=Rt(C),w=Rt(w),b=Rt(b),U=Rt(U)):(C=f,U=h,w=b=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Qi(d,"x",o,"px"),M=Qi(d,"y",a,"px")),(g||_||m||p)&&(x=Rt(x+g-(g*C+_*b)+m),M=Rt(M+_-(g*w+_*U)+p)),(i||s)&&(v=d.getBBox(),x=Rt(x+i/100*v.width),M=Rt(M+s/100*v.height)),v="matrix("+C+","+w+","+b+","+U+","+x+","+M+")",d.setAttribute("transform",v),S&&(d.style[bt]=v)},LM=function(e,t,n,i,s){var o=360,a=Wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Df)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Df)%o-~~(c/o)*o)),e._pt=h=new Sn(e._pt,t,n,i,c,pM),h.e=u,h.u="deg",e._props.push(n),h},zf=function(e,t){for(var n in t)e[n]=t[n];return e},DM=function(e,t,n){var i=zf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[bt]=t,a=ha(n,1),Lr(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],o[bt]=t,a=ha(n,1),o[bt]=c);for(l in Ci)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=en(c),g=en(u),f=d!==g?Qi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Sn(e._pt,a,l,f,h-f,cc),e._pt.u=g||0,e._props.push(l));zf(a,i)};Mn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ro[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Si(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Fd={name:"css",register:fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,S,x,M,C,w,b,U;Gc||fc(),this.styles=this.styles||Pd(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Cn[_]&&xd(_,t,n,i,e,s)))){if(d=typeof u,g=Ro[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(m=en(c),p=en(u)),p?m!==p&&(c=Qi(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Wt(c)&&~c.indexOf("random(")&&(c=la(c)),en(c+"")||c==="auto"||(c+=Nn.units[_]||en(Si(e,_))||""),(c+"").charAt(1)==="="&&(c=Si(e,_))):c=Si(e,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in ui&&(_==="autoAlpha"&&(h===1&&Si(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,a.visibility),Gi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ui[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ci,x){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Kn(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),M||(C=e._gsap,C.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,M=this._pt=new Sn(this._pt,a,bt,0,1,C.renderTransform,C,0,-1),M.dep=1),_==="scale")this._pt=new Sn(this._pt,C,"scaleY",C.scaleY,(S?us(C.scaleY,S+f):f)-C.scaleY||0,cc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(En,0,a[En]),u=wM(u),C.svg?hc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Gi(this,C,"zOrigin",C.zOrigin,p),Gi(this,a,_,Co(c),Co(u)));continue}else if(_==="svgOrigin"){hc(e,u,1,w,0,this);continue}else if(_ in Id){LM(this,C,_,h,S?us(h,S+u):u);continue}else if(_==="smoothOrigin"){Gi(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){DM(this,u,e);continue}}else _ in a||(_=bs(_)||_);if(x||(f||f===0)&&(h||h===0)&&!dM.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=en(u)||(_ in Nn.units?Nn.units[_]:m),m!==p&&(h=Qi(e,_,c,p)),this._pt=new Sn(this._pt,x?C:a,_,h,(S?us(h,S+f):f)-h,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?_M:cc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=mM);else if(_ in a)AM.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Lc(_,u);continue}x||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}b&&bd(this)},render:function(e,t){if(t.tween._time||!Hc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Si,aliases:ui,getSetter:function(e,t,n){var i=ui[t];return i&&i.indexOf(",")<0&&(t=i),t in Ci&&t!==En&&(e._gsap.x||Si(e,"x"))?n&&Lf===n?t==="scale"?MM:xM:(Lf=n||{})&&(t==="scale"?SM:EM):e.style&&!Rc(e.style[t])?gM:~t.indexOf("-")?vM:zc(e,t)},core:{_removeProperty:Lr,_getMatrix:Wc}};yn.utils.checkPrefix=bs;yn.core.getStyleSaver=Pd;(function(r,e,t,n){var i=Mn(r+","+e+","+t,function(s){Ci[s]=1});Mn(e,function(s){Nn.units[s]="deg",Id[s]=1}),ui[i[13]]=r+","+e,Mn(n,function(s){var o=s.split(":");ui[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Nn.units[r]="px"});yn.registerPlugin(Fd);var Gn=yn.registerPlugin(Fd)||yn;Gn.core.Tween;function UM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function IM(r,e,t){return e&&UM(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qt,co,Dn,Hi,Vi,ds,Bd,dr,Ks,zd,bi,ti,kd,Gd=function(){return qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt},Hd=1,os=[],et=[],hi=[],Zs=Date.now,dc=function(e,t){return t},NM=function(){var e=Ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,hi),et=n,hi=i,dc=function(o,a){return t[o](a)}},Ki=function(e,t){return~hi.indexOf(e)&&hi[hi.indexOf(e)+1][t]},js=function(e){return!!~zd.indexOf(e)},an=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa="scrollLeft",$a="scrollTop",pc=function(){return bi&&bi.isPressed||et.cache++},Po=function(e,t){var n=function i(s){if(s||s===0){Hd&&(Dn.history.scrollRestoration="manual");var o=bi&&bi.isPressed;s=i.v=Math.round(s)||(bi&&bi.iOS?1:0),e(s),i.cacheID=et.cache,o&&dc("ss",s)}else(t||et.cache!==i.cacheID||dc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},dn={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Po(function(r){return arguments.length?Dn.scrollTo(r,Ft.sc()):Dn.pageXOffset||Hi[qa]||Vi[qa]||ds[qa]||0})},Ft={s:$a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:Po(function(r){return arguments.length?Dn.scrollTo(dn.sc(),r):Dn.pageYOffset||Hi[$a]||Vi[$a]||ds[$a]||0})},mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||qt.utils.toArray)(e)[0]||(typeof e=="string"&&qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},OM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},er=function(e,t){var n=t.s,i=t.sc;js(e)&&(e=Hi.scrollingElement||Vi);var s=et.indexOf(e),o=i===Ft.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||an(e,"scroll",pc);var a=et[s+o],l=a||(et[s+o]=Po(Ki(e,n),!0)||(js(e)?i:Po(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=qt.getProperty(e,"scrollBehavior")==="smooth"),l},mc=function(e,t,n){var i=e,s=e,o=Zs(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Zs();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=Zs();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Os=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Vd=function(){Ks=qt.core.globals().ScrollTrigger,Ks&&Ks.core&&NM()},Wd=function(e){return qt=e||Gd(),!co&&qt&&typeof document<"u"&&document.body&&(Dn=window,Hi=document,Vi=Hi.documentElement,ds=Hi.body,zd=[Dn,Hi,Vi,ds],qt.utils.clamp,kd=qt.core.context||function(){},dr="onpointerenter"in ds?"pointer":"mouse",Bd=Ct.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Ct.eventTypes=("ontouchstart"in Vi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hd=0},500),Vd(),co=1),co};dn.op=Ft;et.cache=0;var Ct=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){co||Wd(qt)||console.warn("Please gsap.registerPlugin(Observer)"),Ks||Vd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,C=n.onRight,w=n.onLeft,b=n.onUp,U=n.onDown,v=n.onChangeX,y=n.onChangeY,F=n.onChange,D=n.onToggleX,Z=n.onToggleY,L=n.onHover,N=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,Y=n.isNormalizer,$=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,ne=n.onEnable,q=n.onDisable,K=n.onClick,se=n.scrollSpeed,_e=n.capture,de=n.allowClicks,Ce=n.lockAxis,Pe=n.onLockAxis;this.target=a=mn(a)||Vi,this.vars=n,d&&(d=qt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Dn.getComputedStyle(ds).lineHeight)||22);var Ue,Ge,z,He,me,Le,ge,k=this,Fe=0,A=0,E=n.passive||!u&&n.passive!==!1,O=er(a,dn),ee=er(a,Ft),Q=O(),te=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",ue=js(a),ce=a.ownerDocument||Hi,be=[0,0,0],ke=[0,0,0],J=0,rt=function(){return J=Zs()},we=function(xe,Re){return(k.event=xe)&&d&&OM(xe.target,d)||Re&&pe&&xe.pointerType!=="touch"||W&&W(xe,Re)},Ve=function(){k._vx.reset(),k._vy.reset(),Ge.pause(),f&&f(k)},ye=function(){var xe=k.deltaX=kf(be),Re=k.deltaY=kf(ke),ie=Math.abs(xe)>=i,Oe=Math.abs(Re)>=i;F&&(ie||Oe)&&F(k,xe,Re,be,ke),ie&&(C&&k.deltaX>0&&C(k),w&&k.deltaX<0&&w(k),v&&v(k),D&&k.deltaX<0!=Fe<0&&D(k),Fe=k.deltaX,be[0]=be[1]=be[2]=0),Oe&&(U&&k.deltaY>0&&U(k),b&&k.deltaY<0&&b(k),y&&y(k),Z&&k.deltaY<0!=A<0&&Z(k),A=k.deltaY,ke[0]=ke[1]=ke[2]=0),(He||z)&&(G&&G(k),z&&(m&&z===1&&m(k),S&&S(k),z=0),He=!1),Le&&!(Le=!1)&&Pe&&Pe(k),me&&(j(k),me=!1),Ue=0},ve=function(xe,Re,ie){be[ie]+=xe,ke[ie]+=Re,k._vx.update(xe),k._vy.update(Re),c?Ue||(Ue=requestAnimationFrame(ye)):ye()},We=function(xe,Re){Ce&&!ge&&(k.axis=ge=Math.abs(xe)>Math.abs(Re)?"x":"y",Le=!0),ge!=="y"&&(be[2]+=xe,k._vx.update(xe,!0)),ge!=="x"&&(ke[2]+=Re,k._vy.update(Re,!0)),c?Ue||(Ue=requestAnimationFrame(ye)):ye()},Ze=function(xe){if(!we(xe,1)){xe=Os(xe,u);var Re=xe.clientX,ie=xe.clientY,Oe=Re-k.x,Ie=ie-k.y,Ye=k.isDragging;k.x=Re,k.y=ie,(Ye||(Oe||Ie)&&(Math.abs(k.startX-Re)>=s||Math.abs(k.startY-ie)>=s))&&(z=Ye?2:1,Ye||(k.isDragging=!0),We(Oe,Ie))}},ot=k.onPress=function(Te){we(Te,1)||Te&&Te.button||(k.axis=ge=null,Ge.pause(),k.isPressed=!0,Te=Os(Te),Fe=A=0,k.startX=k.x=Te.clientX,k.startY=k.y=Te.clientY,k._vx.reset(),k._vy.reset(),an(Y?a:ce,ti[1],Ze,E,!0),k.deltaX=k.deltaY=0,x&&x(k))},he=k.onRelease=function(Te){if(!we(Te,1)){sn(Y?a:ce,ti[1],Ze,!0);var xe=!isNaN(k.y-k.startY),Re=k.isDragging,ie=Re&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Oe=Os(Te);!ie&&xe&&(k._vx.reset(),k._vy.reset(),u&&de&&qt.delayedCall(.08,function(){if(Zs()-J>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(ce.createEvent){var Ie=ce.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Dn,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ie)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&Re&&!Y&&Ge.restart(!0),z&&ye(),p&&Re&&p(k),M&&M(k,ie)}},re=function(xe){return xe.touches&&xe.touches.length>1&&(k.isGesturing=!0)&&$(xe,k.isDragging)},P=function(){return(k.isGesturing=!1)||R(k)},ae=function(xe){if(!we(xe)){var Re=O(),ie=ee();ve((Re-Q)*se,(ie-te)*se,1),Q=Re,te=ie,f&&Ge.restart(!0)}},oe=function(xe){if(!we(xe)){xe=Os(xe,u),j&&(me=!0);var Re=(xe.deltaMode===1?l:xe.deltaMode===2?Dn.innerHeight:1)*g;ve(xe.deltaX*Re,xe.deltaY*Re,0),f&&!Y&&Ge.restart(!0)}},Ne=function(xe){if(!we(xe)){var Re=xe.clientX,ie=xe.clientY,Oe=Re-k.x,Ie=ie-k.y;k.x=Re,k.y=ie,He=!0,f&&Ge.restart(!0),(Oe||Ie)&&We(Oe,Ie)}},De=function(xe){k.event=xe,L(k)},nt=function(xe){k.event=xe,N(k)},st=function(xe){return we(xe)||Os(xe,u)&&K(k)};Ge=k._dc=qt.delayedCall(h||.25,Ve).pause(),k.deltaX=k.deltaY=0,k._vx=mc(0,50,!0),k._vy=mc(0,50,!0),k.scrollX=O,k.scrollY=ee,k.isDragging=k.isGesturing=k.isPressed=!1,kd(this),k.enable=function(Te){return k.isEnabled||(an(ue?ce:a,"scroll",pc),o.indexOf("scroll")>=0&&an(ue?ce:a,"scroll",ae,E,_e),o.indexOf("wheel")>=0&&an(a,"wheel",oe,E,_e),(o.indexOf("touch")>=0&&Bd||o.indexOf("pointer")>=0)&&(an(a,ti[0],ot,E,_e),an(ce,ti[2],he),an(ce,ti[3],he),de&&an(a,"click",rt,!0,!0),K&&an(a,"click",st),$&&an(ce,"gesturestart",re),R&&an(ce,"gestureend",P),L&&an(a,dr+"enter",De),N&&an(a,dr+"leave",nt),G&&an(a,dr+"move",Ne)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=He=z=!1,k._vx.reset(),k._vy.reset(),Q=O(),te=ee(),Te&&Te.type&&ot(Te),ne&&ne(k)),k},k.disable=function(){k.isEnabled&&(os.filter(function(Te){return Te!==k&&js(Te.target)}).length||sn(ue?ce:a,"scroll",pc),k.isPressed&&(k._vx.reset(),k._vy.reset(),sn(Y?a:ce,ti[1],Ze,!0)),sn(ue?ce:a,"scroll",ae,_e),sn(a,"wheel",oe,_e),sn(a,ti[0],ot,_e),sn(ce,ti[2],he),sn(ce,ti[3],he),sn(a,"click",rt,!0),sn(a,"click",st),sn(ce,"gesturestart",re),sn(ce,"gestureend",P),sn(a,dr+"enter",De),sn(a,dr+"leave",nt),sn(a,dr+"move",Ne),k.isEnabled=k.isPressed=k.isDragging=!1,q&&q(k))},k.kill=k.revert=function(){k.disable();var Te=os.indexOf(k);Te>=0&&os.splice(Te,1),bi===k&&(bi=0)},os.push(k),Y&&js(a)&&(bi=k),k.enable(_)},IM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ct.version="3.13.0";Ct.create=function(r){return new Ct(r)};Ct.register=Wd;Ct.getAll=function(){return os.slice()};Ct.getById=function(r){return os.filter(function(e){return e.vars.id===r})[0]};Gd()&&qt.registerPlugin(Ct);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Me,ts,Je,vt,Pn,lt,Xc,Lo,da,Js,ks,Ka,Jt,Wo,_c,cn,Gf,Hf,ns,Xd,Il,Yd,ln,gc,qd,$d,Oi,vc,Yc,ps,qc,Do,xc,Nl,Za=1,Qt=Date.now,Ol=Qt(),jn=0,Gs=0,Vf=function(e,t,n){var i=Rn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wf=function(e,t){return t&&(!Rn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},FM=function r(){return Gs&&requestAnimationFrame(r)},Xf=function(){return Wo=1},Yf=function(){return Wo=0},ai=function(e){return e},Hs=function(e){return Math.round(e*1e5)/1e5||0},Kd=function(){return typeof window<"u"},Zd=function(){return Me||Kd()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Dr=function(e){return!!~Xc.indexOf(e)},jd=function(e){return(e==="Height"?qc:Je["inner"+e])||Pn["client"+e]||lt["client"+e]},Jd=function(e){return Ki(e,"getBoundingClientRect")||(Dr(e)?function(){return mo.width=Je.innerWidth,mo.height=qc,mo}:function(){return Ei(e)})},BM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ki(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?jd(s):e["client"+s])||0}},zM=function(e,t){return!t||~hi.indexOf(e)?Jd(e):function(){return mo}},fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ki(e,n))?o()-Jd(e)()[s]:Dr(e)?(Pn[n]||lt[n])-jd(i):e[n]-e["offset"+i])},ja=function(e,t){for(var n=0;n<ns.length;n+=3)(!t||~t.indexOf(ns[n+1]))&&e(ns[n],ns[n+1],ns[n+2])},Rn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},Vs=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},Fs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qr=Math.abs,Qd="left",ep="top",$c="right",Kc="bottom",wr="width",Rr="height",Qs="Right",ea="Left",ta="Top",na="Bottom",Lt="padding",Wn="margin",As="Width",Zc="Height",Ot="px",Xn=function(e){return Je.getComputedStyle(e)},kM=function(e){var t=Xn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&Xn(e)[_c]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Uo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},tp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},GM=function(e){return function(t){return Me.utils.snap(tp(e),t)}},jc=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},HM=function(e){return function(t,n){return jc(tp(e))(t,n.direction)}},Ja=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ht=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Gt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},$f={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},eo={toggleActions:"play",anticipatePin:0},Io={top:0,left:0,center:.5,bottom:1,right:1},uo=function(e,t){if(Rn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Io?Io[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},to=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=vt.createElement("div"),_=Dr(n)||Ki(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?lt:n,S=e.indexOf("start")!==-1,x=S?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===Ft?$c:Kc)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],fo(g,0,i,S),g},fo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+As]=1,s["border"+a+As]=0,s[n.p]=t+"px",Me.set(e,s)},Ke=[],Mc={},pa,Kf=function(){return Qt()-jn>34&&(pa||(pa=requestAnimationFrame(Ai)))},es=function(){(!ln||!ln.isPressed||ln.startX>lt.clientWidth)&&(et.cache++,ln?pa||(pa=requestAnimationFrame(Ai)):Ai(),jn||Ir("scrollStart"),jn=Qt())},Bl=function(){$d=Je.innerWidth,qd=Je.innerHeight},Ws=function(e){et.cache++,(e===!0||!Jt&&!Yd&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!gc||$d!==Je.innerWidth||Math.abs(Je.innerHeight-qd)>Je.innerHeight*.25))&&Lo.restart(!0)},Ur={},VM=[],np=function r(){return Gt(tt,"scrollEnd",r)||vr(!0)},Ir=function(e){return Ur[e]&&Ur[e].map(function(t){return t()})||VM},wn=[],ip=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},Jc=function(e,t){var n;for(cn=0;cn<Ke.length;cn++)n=Ke[cn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Do=!0,t&&ip(t),t||Ir("revert")},rp=function(e,t){et.cache++,(t||!un)&&et.forEach(function(n){return tn(n)&&n.cacheID++&&(n.rec=0)}),Rn(e)&&(Je.history.scrollRestoration=Yc=e)},un,Cr=0,Zf,WM=function(){if(Zf!==Cr){var e=Zf=Cr;requestAnimationFrame(function(){return e===Cr&&vr(!0)})}},sp=function(){lt.appendChild(ps),qc=!ln&&ps.offsetHeight||Je.innerHeight,lt.removeChild(ps)},jf=function(e){return da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vr=function(e,t){if(Pn=vt.documentElement,lt=vt.body,Xc=[Je,vt,Pn,lt],jn&&!e&&!Do){Ht(tt,"scrollEnd",np);return}sp(),un=tt.isRefreshing=!0,et.forEach(function(i){return tn(i)&&++i.cacheID&&(i.rec=i())});var n=Ir("refreshInit");Xd&&tt.sort(),t||Jc(),et.forEach(function(i){tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),Do=!1,Ke.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),xc=1,jf(!0),Ke.forEach(function(i){var s=fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),jf(!1),xc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),rp(Yc,1),Lo.pause(),Cr++,un=2,Ai(2),Ke.forEach(function(i){return tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),un=tt.isRefreshing=!1,Ir("refresh")},Sc=0,ho=1,ia,Ai=function(e){if(e===2||!un&&!Do){tt.isUpdating=!0,ia&&ia.update(0);var t=Ke.length,n=Qt(),i=n-Ol>=50,s=t&&Ke[0].scroll();if(ho=Sc>s?-1:1,un||(Sc=s),i&&(jn&&!Wo&&n-jn>200&&(jn=0,Ir("scrollEnd")),ks=Ol,Ol=n),ho<0){for(cn=t;cn-- >0;)Ke[cn]&&Ke[cn].update(0,i);ho=1}else for(cn=0;cn<t;cn++)Ke[cn]&&Ke[cn].update(0,i);tt.isUpdating=!1}pa=0},Ec=[Qd,ep,Kc,$c,Wn+na,Wn+Qs,Wn+ta,Wn+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],po=Ec.concat([wr,Rr,"boxSizing","max"+As,"max"+Zc,"position",Wn,Lt,Lt+ta,Lt+Qs,Lt+na,Lt+ea]),XM=function(e,t,n){ms(n);var i=e._gsap;if(i.spacerIsNative)ms(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ec.length,o=t.style,a=e.style,l;s--;)l=Ec[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Kc]=a[$c]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=Uo(e,dn)+Ot,o[Rr]=Uo(e,Ft)+Ot,o[Lt]=a[Wn]=a[ep]=a[Qd]="0",ms(i),a[wr]=a["max"+As]=n[wr],a[Rr]=a["max"+Zc]=n[Rr],a[Lt]=n[Lt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},YM=/([A-Z])/g,ms=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(YM,"-$1").toLowerCase())}},no=function(e){for(var t=po.length,n=e.style,i=[],s=0;s<t;s++)i.push(po[s],n[po[s]]);return i.t=e,i},qM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},mo={left:0,top:0},Jf=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){tn(e)&&(e=e(l)),Rn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?uo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Vs(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&fo(a,n,i,!0);else{tn(t)&&(t=t(l));var x=(e||"0").split(" "),M,C,w,b;S=mn(t,l)||lt,M=Ei(S)||{},(!M||!M.left&&!M.top)&&Xn(S).display==="none"&&(b=S.style.display,S.style.display="block",M=Ei(S),b?S.style.display=b:S.style.removeProperty("display")),C=uo(x[0],M[i.d]),w=uo(x[1]||"0",n),e=M[i.p]-c[i.p]-u+C+s-w,a&&fo(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,v=o._isStart;m="scroll"+i.d2,fo(o,U,i,v&&U>20||!v&&(f?Math.max(lt[m],Pn[m]):o.parentNode[m])<=U+1),f&&(c=Ei(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ot))}return d&&S&&(m=Ei(S),d.seek(h),p=Ei(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},$M=/(webkit|moz|length|cssText|inset)/i,Qf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===lt){e._stOrig=s.cssText,a=Xn(e);for(o in a)!+o&&!$M.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},ap=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},io=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},eh=function(e,t){var n=er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=ap(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Ai()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Me.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ht(e,"wheel",n.wheelHandler),tt.isTouch&&Ht(e,"touchmove",n.wheelHandler),s},tt=function(){function r(t,n){ts||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Gs){this.update=this.refresh=this.kill=ai;return}n=qf(Rn(n)||Vs(n)||n.nodeType?{trigger:n}:n,eo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,C=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,U=s.fastScrollEnd,v=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Ft,F=!f&&f!==0,D=mn(n.scroller||Je),Z=Me.core.getCache(D),L=Dr(D),N=("pinType"in n?n.pinType:Ki(D,"pinType")||L&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=F&&n.toggleActions.split(" "),Y="markers"in n?n.markers:eo.markers,$=L?0:parseFloat(Xn(D)["border"+y.p2+As])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ne=BM(D,L,y),q=zM(D,L),K=0,se=0,_e=0,de=er(D,y),Ce,Pe,Ue,Ge,z,He,me,Le,ge,k,Fe,A,E,O,ee,Q,te,pe,ue,ce,be,ke,J,rt,we,Ve,ye,ve,We,Ze,ot,he,re,P,ae,oe,Ne,De,nt;if(R._startClamp=R._endClamp=!1,R._dir=y,m*=45,R.scroller=D,R.scroll=b?b.time.bind(b):de,Ge=de(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xd=1,n.refreshPriority===-9999&&(ia=R)),Z.tweenScroll=Z.tweenScroll||{top:eh(D,Ft),left:eh(D,dn)},R.tweenTo=Ce=Z.tweenScroll[y.p],R.scrubDuration=function(ie){re=Vs(ie)&&ie,re?he?he.duration(ie):he=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(R)}}):(he&&he.progress(1).kill(),he=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Ze=0,l||(l=i.vars.id)),M&&((!pr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in lt.style&&Me.set(L?[lt,Pn]:D,{scrollBehavior:"auto"}),et.forEach(function(ie){return tn(ie)&&ie.target===(L?vt.scrollingElement||Pn:D)&&(ie.smooth=!1)}),Ue=tn(M.snapTo)?M.snapTo:M.snapTo==="labels"?GM(i):M.snapTo==="labelsDirectional"?HM(i):M.directional!==!1?function(ie,Oe){return jc(M.snapTo)(ie,Qt()-se<500?0:Oe.direction)}:Me.utils.snap(M.snapTo),P=M.duration||{min:.1,max:2},P=pr(P)?Js(P.min,P.max):Js(P,P),ae=Me.delayedCall(M.delay||re/2||.1,function(){var ie=de(),Oe=Qt()-se<500,Ie=Ce.tween;if((Oe||Math.abs(R.getVelocity())<10)&&!Ie&&!Wo&&K!==ie){var Ye=(ie-He)/O,yt=i&&!F?i.totalProgress():Ye,je=Oe?0:(yt-ot)/(Qt()-ks)*1e3||0,_t=Me.utils.clamp(-Ye,1-Ye,Qr(je/2)*je/.185),It=Ye+(M.inertia===!1?0:_t),xt,gt,ct=M,Tn=ct.onStart,T=ct.onInterrupt,I=ct.onComplete;if(xt=Ue(It,R),Vs(xt)||(xt=It),gt=Math.max(0,Math.round(He+xt*O)),ie<=me&&ie>=He&&gt!==ie){if(Ie&&!Ie._initted&&Ie.data<=Qr(gt-ie))return;M.inertia===!1&&(_t=xt-Ye),Ce(gt,{duration:P(Qr(Math.max(Qr(It-yt),Qr(xt-yt))*.185/je/.05||0)),ease:M.ease||"power3",data:Qr(gt-ie),onInterrupt:function(){return ae.restart(!0)&&T&&T(R)},onComplete:function(){R.update(),K=de(),i&&!F&&(he?he.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),Ze=ot=i&&!F?i.totalProgress():R.progress,S&&S(R),I&&I(R)}},ie,_t*O,gt-ie-_t*O),Tn&&Tn(R,Ce.tween)}}else R.isActive&&K!==ie&&ae.restart(!0)}).pause()),l&&(Mc[l]=R),h=R.trigger=mn(h||d!==!0&&d),nt=h&&h._gsap&&h._gsap.stRevert,nt&&(nt=nt(R)),d=d===!0?h:mn(d),Rn(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Wn||(g=!g&&d.parentNode&&d.parentNode.style&&Xn(d.parentNode).display==="flex"?!1:Lt),R.pin=d,Pe=Me.core.getCache(d),Pe.spacer?ee=Pe.pinState:(w&&(w=mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Pe.spacerIsNative=!!w,w&&(Pe.spacerState=no(w))),Pe.spacer=pe=w||vt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Pe.pinState=ee=no(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),R.spacer=pe=Pe.spacer,We=Xn(d),rt=We[g+y.os2],ce=Me.getProperty(d),be=Me.quickSetter(d,y.a,Ot),zl(d,pe,We),te=no(d)),Y){A=pr(Y)?qf(Y,$f):$f,k=to("scroller-start",l,D,y,A,0),Fe=to("scroller-end",l,D,y,A,0,k),ue=k["offset"+y.op.d2];var st=mn(Ki(D,"content")||D);Le=this.markerStart=to("start",l,st,y,A,ue,0,b),ge=this.markerEnd=to("end",l,st,y,A,ue,0,b),b&&(De=Me.quickSetter([Le,ge],y.a,Ot)),!N&&!(hi.length&&Ki(D,"fixedMarkers")===!0)&&(kM(L?lt:D),Me.set([k,Fe],{force3D:!0}),Ve=Me.quickSetter(k,y.a,Ot),ve=Me.quickSetter(Fe,y.a,Ot))}if(b){var Te=b.vars.onUpdate,xe=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),Te&&Te.apply(b,xe||[])})}if(R.previous=function(){return Ke[Ke.indexOf(R)-1]},R.next=function(){return Ke[Ke.indexOf(R)+1]},R.revert=function(ie,Oe){if(!Oe)return R.kill(!0);var Ie=ie!==!1||!R.enabled,Ye=Jt;Ie!==R.isReverted&&(Ie&&(oe=Math.max(de(),R.scroll.rec||0),_e=R.progress,Ne=i&&i.progress()),Le&&[Le,ge,k,Fe].forEach(function(yt){return yt.style.display=Ie?"none":"block"}),Ie&&(Jt=R,R.update(Ie)),d&&(!C||!R.isActive)&&(Ie?XM(d,pe,ee):zl(d,pe,Xn(d),we)),Ie||R.update(Ie),Jt=Ye,R.isReverted=Ie)},R.refresh=function(ie,Oe,Ie,Ye){if(!((Jt||!R.enabled)&&!Oe)){if(d&&ie&&jn){Ht(r,"scrollEnd",np);return}!un&&j&&j(R),Jt=R,Ce.tween&&!Ie&&(Ce.tween.kill(),Ce.tween=0),he&&he.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)})),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var yt=ne(),je=q(),_t=b?b.duration():fi(D,y),It=O<=.01||!O,xt=0,gt=Ye||0,ct=pr(Ie)?Ie.end:n.end,Tn=n.endTrigger||h,T=pr(Ie)?Ie.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),I=R.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,R),V=h&&Math.max(0,Ke.indexOf(R))||0,H=V,B,le,Se,Be,Ee,Ae,ze,qe,St,Nt,ut,rn,ht;for(Y&&pr(Ie)&&(rn=Me.getProperty(k,y.p),ht=Me.getProperty(Fe,y.p));H-- >0;)Ae=Ke[H],Ae.end||Ae.refresh(0,1)||(Jt=R),ze=Ae.pin,ze&&(ze===h||ze===d||ze===I)&&!Ae.isReverted&&(Nt||(Nt=[]),Nt.unshift(Ae),Ae.revert(!0,!0)),Ae!==Ke[H]&&(V--,H--);for(tn(T)&&(T=T(R)),T=Vf(T,"start",R),He=Jf(T,h,yt,y,de(),Le,k,R,je,$,N,_t,b,R._startClamp&&"_startClamp")||(d?-.001:0),tn(ct)&&(ct=ct(R)),Rn(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(Rn(T)?T.split(" ")[0]:"")+ct:(xt=uo(ct.substr(2),yt),ct=Rn(T)?T:(b?Me.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,He):He)+xt,Tn=h)),ct=Vf(ct,"end",R),me=Math.max(He,Jf(ct||(Tn?"100% 0":_t),Tn,yt,y,de()+xt,ge,Fe,R,je,$,N,_t,b,R._endClamp&&"_endClamp"))||-.001,xt=0,H=V;H--;)Ae=Ke[H],ze=Ae.pin,ze&&Ae.start-Ae._pinPush<=He&&!b&&Ae.end>0&&(B=Ae.end-(R._startClamp?Math.max(0,Ae.start):Ae.start),(ze===h&&Ae.start-Ae._pinPush<He||ze===I)&&isNaN(T)&&(xt+=B*(1-Ae.progress)),ze===d&&(gt+=B));if(He+=xt,me+=xt,R._startClamp&&(R._startClamp+=xt),R._endClamp&&!un&&(R._endClamp=me||-.001,me=Math.min(me,fi(D,y))),O=me-He||(He-=.01)&&.001,It&&(_e=Me.utils.clamp(0,1,Me.utils.normalize(He,me,oe))),R._pinPush=gt,Le&&xt&&(B={},B[y.a]="+="+xt,I&&(B[y.p]="-="+de()),Me.set([Le,ge],B)),d&&!(xc&&R.end>=fi(D,y)))B=Xn(d),Be=y===Ft,Se=de(),ke=parseFloat(ce(y.a))+gt,!_t&&me>1&&(ut=(L?vt.scrollingElement||Pn:D).style,ut={style:ut,value:ut["overflow"+y.a.toUpperCase()]},L&&Xn(lt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+y.a.toUpperCase()]="scroll")),zl(d,pe,B),te=no(d),le=Ei(d,!0),qe=N&&er(D,Be?dn:Ft)(),g?(we=[g+y.os2,O+gt+Ot],we.t=pe,H=g===Lt?Uo(d,y)+O+gt:0,H&&(we.push(y.d,H+Ot),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=H+Ot)),ms(we),I&&Ke.forEach(function(Xe){Xe.pin===I&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),N&&de(oe)):(H=Uo(d,y),H&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=H+Ot)),N&&(Ee={top:le.top+(Be?Se-He:qe)+Ot,left:le.left+(Be?qe:Se-He)+Ot,boxSizing:"border-box",position:"fixed"},Ee[wr]=Ee["max"+As]=Math.ceil(le.width)+Ot,Ee[Rr]=Ee["max"+Zc]=Math.ceil(le.height)+Ot,Ee[Wn]=Ee[Wn+ta]=Ee[Wn+Qs]=Ee[Wn+na]=Ee[Wn+ea]="0",Ee[Lt]=B[Lt],Ee[Lt+ta]=B[Lt+ta],Ee[Lt+Qs]=B[Lt+Qs],Ee[Lt+na]=B[Lt+na],Ee[Lt+ea]=B[Lt+ea],Q=qM(ee,Ee,C),un&&de(0)),i?(St=i._initted,Il(1),i.render(i.duration(),!0,!0),J=ce(y.a)-ke+O+gt,ye=Math.abs(O-J)>1,N&&ye&&Q.splice(Q.length-2,2),i.render(0,!0,!0),St||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Il(0)):J=O,ut&&(ut.value?ut.style["overflow"+y.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+y.a));else if(h&&de()&&!b)for(le=h.parentNode;le&&le!==lt;)le._pinOffset&&(He-=le._pinOffset,me-=le._pinOffset),le=le.parentNode;Nt&&Nt.forEach(function(Xe){return Xe.revert(!1,!0)}),R.start=He,R.end=me,Ge=z=un?oe:de(),!b&&!un&&(Ge<oe&&de(oe),R.scroll.rec=0),R.revert(!1,!0),se=Qt(),ae&&(K=-1,ae.restart(!0)),Jt=0,i&&F&&(i._initted||Ne)&&i.progress()!==Ne&&i.progress(Ne||0,!0).render(i.time(),!0,!0),(It||_e!==R.progress||b||_||i&&!i._initted)&&(i&&!F&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(b&&He<-.001&&!_e?Me.utils.normalize(He,me,0):_e,!0),R.progress=It||(Ge-He)/O===_e?0:_e),d&&g&&(pe._pinOffset=Math.round(R.progress*J)),he&&he.invalidate(),isNaN(rn)||(rn-=Me.getProperty(k,y.p),ht-=Me.getProperty(Fe,y.p),io(k,y,rn),io(Le,y,rn-(Ye||0)),io(Fe,y,ht),io(ge,y,ht-(Ye||0))),It&&!un&&R.update(),u&&!un&&!E&&(E=!0,u(R),E=!1)}},R.getVelocity=function(){return(de()-z)/(Qt()-ks)*1e3||0},R.endAnimation=function(){Fs(R.callbackAnimation),i&&(he?he.progress(1):i.paused()?F||Fs(i,R.direction<0,1):Fs(i,i.reversed()))},R.labelToScroll=function(ie){return i&&i.labels&&(He||R.refresh()||He)+i.labels[ie]/i.duration()*O||0},R.getTrailing=function(ie){var Oe=Ke.indexOf(R),Ie=R.direction>0?Ke.slice(0,Oe).reverse():Ke.slice(Oe+1);return(Rn(ie)?Ie.filter(function(Ye){return Ye.vars.preventOverlaps===ie}):Ie).filter(function(Ye){return R.direction>0?Ye.end<=He:Ye.start>=me})},R.update=function(ie,Oe,Ie){if(!(b&&!Ie&&!ie)){var Ye=un===!0?oe:R.scroll(),yt=ie?0:(Ye-He)/O,je=yt<0?0:yt>1?1:yt||0,_t=R.progress,It,xt,gt,ct,Tn,T,I,V;if(Oe&&(z=Ge,Ge=b?de():Ye,M&&(ot=Ze,Ze=i&&!F?i.totalProgress():je)),m&&d&&!Jt&&!Za&&jn&&(!je&&He<Ye+(Ye-z)/(Qt()-ks)*m?je=1e-4:je===1&&me>Ye+(Ye-z)/(Qt()-ks)*m&&(je=.9999)),je!==_t&&R.enabled){if(It=R.isActive=!!je&&je<1,xt=!!_t&&_t<1,T=It!==xt,Tn=T||!!je!=!!_t,R.direction=je>_t?1:-1,R.progress=je,Tn&&!Jt&&(gt=je&&!_t?0:je===1?1:_t===1?2:3,F&&(ct=!T&&W[gt+1]!=="none"&&W[gt+1]||W[gt],V=i&&(ct==="complete"||ct==="reset"||ct in i))),v&&(T||V)&&(V||f||!i)&&(tn(v)?v(R):R.getTrailing(v).forEach(function(Se){return Se.endAnimation()})),F||(he&&!Jt&&!Za?(he._dp._time-he._start!==he._time&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",je,i._tTime/i._tDur):(he.vars.totalProgress=je,he.invalidate().restart())):i&&i.totalProgress(je,!!(Jt&&(se||ie)))),d){if(ie&&g&&(pe.style[g+y.os2]=rt),!N)be(Hs(ke+J*je));else if(Tn){if(I=!ie&&je>_t&&me+1>Ye&&Ye+1>=fi(D,y),C)if(!ie&&(It||I)){var H=Ei(d,!0),B=Ye-He;Qf(d,lt,H.top+(y===Ft?B:0)+Ot,H.left+(y===Ft?0:B)+Ot)}else Qf(d,pe);ms(It||I?Q:te),ye&&je<1&&It||be(ke+(je===1&&!I?J:0))}}M&&!Ce.tween&&!Jt&&!Za&&ae.restart(!0),a&&(T||x&&je&&(je<1||!Nl))&&da(a.targets).forEach(function(Se){return Se.classList[It||x?"add":"remove"](a.className)}),o&&!F&&!ie&&o(R),Tn&&!Jt?(F&&(V&&(ct==="complete"?i.pause().totalProgress(1):ct==="reset"?i.restart(!0).pause():ct==="restart"?i.restart(!0):i[ct]()),o&&o(R)),(T||!Nl)&&(c&&T&&Fl(R,c),G[gt]&&Fl(R,G[gt]),x&&(je===1?R.kill(!1,1):G[gt]=0),T||(gt=je===1?1:3,G[gt]&&Fl(R,G[gt]))),U&&!It&&Math.abs(R.getVelocity())>(Vs(U)?U:2500)&&(Fs(R.callbackAnimation),he?he.progress(1):Fs(i,ct==="reverse"?1:!je,1))):F&&o&&!Jt&&o(R)}if(ve){var le=b?Ye/b.duration()*(b._caScrollDist||0):Ye;Ve(le+(k._isFlipped?1:0)),ve(le)}De&&De(-Ye/b.duration()*(b._caScrollDist||0))}},R.enable=function(ie,Oe){R.enabled||(R.enabled=!0,Ht(D,"resize",Ws),L||Ht(D,"scroll",es),j&&Ht(r,"refreshInit",j),ie!==!1&&(R.progress=_e=0,Ge=z=K=de()),Oe!==!1&&R.refresh())},R.getTween=function(ie){return ie&&Ce?Ce.tween:he},R.setPositions=function(ie,Oe,Ie,Ye){if(b){var yt=b.scrollTrigger,je=b.duration(),_t=yt.end-yt.start;ie=yt.start+_t*ie/je,Oe=yt.start+_t*Oe/je}R.refresh(!1,!1,{start:Wf(ie,Ie&&!!R._startClamp),end:Wf(Oe,Ie&&!!R._endClamp)},Ye),R.update()},R.adjustPinSpacing=function(ie){if(we&&ie){var Oe=we.indexOf(y.d)+1;we[Oe]=parseFloat(we[Oe])+ie+Ot,we[1]=parseFloat(we[1])+ie+Ot,ms(we)}},R.disable=function(ie,Oe){if(R.enabled&&(ie!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Oe||he&&he.pause(),oe=0,Pe&&(Pe.uncache=1),j&&Gt(r,"refreshInit",j),ae&&(ae.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!L)){for(var Ie=Ke.length;Ie--;)if(Ke[Ie].scroller===D&&Ke[Ie]!==R)return;Gt(D,"resize",Ws),L||Gt(D,"scroll",es)}},R.kill=function(ie,Oe){R.disable(ie,Oe),he&&!Oe&&he.kill(),l&&delete Mc[l];var Ie=Ke.indexOf(R);Ie>=0&&Ke.splice(Ie,1),Ie===cn&&ho>0&&cn--,Ie=0,Ke.forEach(function(Ye){return Ye.scroller===R.scroller&&(Ie=1)}),Ie||un||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Oe||i.kill()),Le&&[Le,ge,k,Fe].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ia===R&&(ia=0),d&&(Pe&&(Pe.uncache=1),Ie=0,Ke.forEach(function(Ye){return Ye.pin===d&&Ie++}),Ie||(Pe.spacer=0)),n.onKill&&n.onKill(R)},Ke.push(R),R.enable(!1,!1),nt&&nt(R),i&&i.add&&!O){var Re=R.update;R.update=function(){R.update=Re,et.cache++,He||me||R.refresh()},Me.delayedCall(.01,R.update),O=.01,He=me=0}else R.refresh();d&&WM()},r.register=function(n){return ts||(Me=n||Zd(),Kd()&&window.document&&r.enable(),ts=Gs),ts},r.defaults=function(n){if(n)for(var i in n)eo[i]=n[i];return eo},r.disable=function(n,i){Gs=0,Ke.forEach(function(o){return o[i?"kill":"disable"](n)}),Gt(Je,"wheel",es),Gt(vt,"scroll",es),clearInterval(Ka),Gt(vt,"touchcancel",ai),Gt(lt,"touchstart",ai),Ja(Gt,vt,"pointerdown,touchstart,mousedown",Xf),Ja(Gt,vt,"pointerup,touchend,mouseup",Yf),Lo.kill(),ja(Gt);for(var s=0;s<et.length;s+=3)Qa(Gt,et[s],et[s+1]),Qa(Gt,et[s],et[s+2])},r.enable=function(){if(Je=window,vt=document,Pn=vt.documentElement,lt=vt.body,Me&&(da=Me.utils.toArray,Js=Me.utils.clamp,vc=Me.core.context||ai,Il=Me.core.suppressOverwrites||ai,Yc=Je.history.scrollRestoration||"auto",Sc=Je.pageYOffset||0,Me.core.globals("ScrollTrigger",r),lt)){Gs=1,ps=document.createElement("div"),ps.style.height="100vh",ps.style.position="absolute",sp(),FM(),Ct.register(Me),r.isTouch=Ct.isTouch,Oi=Ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gc=Ct.isTouch===1,Ht(Je,"wheel",es),Xc=[Je,vt,Pn,lt],Me.matchMedia?(r.matchMedia=function(c){var u=Me.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Me.addEventListener("matchMediaInit",function(){return Jc()}),Me.addEventListener("matchMediaRevert",function(){return ip()}),Me.addEventListener("matchMedia",function(){vr(0,1),Ir("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return Bl(),Bl})):console.warn("Requires GSAP 3.11.0 or later"),Bl(),Ht(vt,"scroll",es);var n=lt.hasAttribute("style"),i=lt.style,s=i.borderTopStyle,o=Me.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ei(lt),Ft.m=Math.round(a.top+Ft.sc())||0,dn.m=Math.round(a.left+dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(lt.setAttribute("style",""),lt.removeAttribute("style")),Ka=setInterval(Kf,250),Me.delayedCall(.5,function(){return Za=0}),Ht(vt,"touchcancel",ai),Ht(lt,"touchstart",ai),Ja(Ht,vt,"pointerdown,touchstart,mousedown",Xf),Ja(Ht,vt,"pointerup,touchend,mouseup",Yf),_c=Me.utils.checkPrefix("transform"),po.push(_c),ts=Qt(),Lo=Me.delayedCall(.2,vr).pause(),ns=[vt,"visibilitychange",function(){var c=Je.innerWidth,u=Je.innerHeight;vt.hidden?(Gf=c,Hf=u):(Gf!==c||Hf!==u)&&Ws()},vt,"DOMContentLoaded",vr,Je,"load",vr,Je,"resize",Ws],ja(Ht),Ke.forEach(function(c){return c.enable(0,1)}),l=0;l<et.length;l+=3)Qa(Gt,et[l],et[l+1]),Qa(Gt,et[l],et[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Nl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ka)||(Ka=i)&&setInterval(Kf,i),"ignoreMobileResize"in n&&(gc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ja(Gt)||ja(Ht,n.autoRefreshEvents||"none"),Yd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),o=et.indexOf(s),a=Dr(s);~o&&et.splice(o,a?6:2),i&&(a?hi.unshift(Je,i,lt,i,Pn,i):hi.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Rn(n)?mn(n):n).getBoundingClientRect(),a=o[s?wr:Rr]*i||0;return s?o.right-a>0&&o.left+a<Je.innerWidth:o.bottom-a>0&&o.top+a<Je.innerHeight},r.positionInViewport=function(n,i,s){Rn(n)&&(n=mn(n));var o=n.getBoundingClientRect(),a=o[s?wr:Rr],l=i==null?a/2:i in Io?Io[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Je.innerWidth:(o.top+l)/Je.innerHeight},r.killAll=function(n){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(s){return s()})}},r}();tt.version="3.13.0";tt.saveStyles=function(r){return r?da(r).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),vc())}}):wn};tt.revert=function(r,e){return Jc(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?Ws(!0):(ts||tt.register())&&vr(!0)};tt.update=function(r){return++et.cache&&Ai(r===!0?2:0)};tt.clearScrollMemory=rp;tt.maxScroll=function(r,e){return fi(r,e?dn:Ft)};tt.getScrollFunc=function(r,e){return er(mn(r),e?dn:Ft)};tt.getById=function(r){return Mc[r]};tt.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!jn};tt.snapDirectional=jc;tt.addEventListener=function(r,e){var t=Ur[r]||(Ur[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Ur[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Me.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return tn(s)&&(s=s(),Ht(tt,"refresh",function(){return s=e.batchMax()})),da(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var th=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},kl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ct.isTouch?" pinch-zoom":""):"none",e===Pn&&r(lt,t)},ro={auto:1,scroll:1},KM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=Qt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ro[(l=Xn(s)).overflowY]||ro[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Dr(s)&&(ro[(l=Xn(s)).overflowY]||ro[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},op=function(e,t,n,i){return Ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&KM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(vt,Ct.eventTypes[0],ih,!1,!0)},onDisable:function(){return Gt(vt,Ct.eventTypes[0],ih,!0)}})},ZM=/(input|label|select|textarea)/i,nh,ih=function(e){var t=ZM.test(e.target.tagName);(t||nh)&&(e._gsapAllow=!0,nh=t)},jM=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=mn(e.target)||Pn,u=Me.core.globals().ScrollSmoother,f=u&&u.get(),h=Oi&&(e.content&&mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=er(c,Ft),g=er(c,dn),_=1,m=(Ct.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,p=0,S=tn(i)?function(){return i(a)}:function(){return i||2.8},x,M,C=op(c,e.type,!0,s),w=function(){return M=!1},b=ai,U=ai,v=function(){l=fi(c,Ft),U=Js(Oi?1:0,l),n&&(b=Js(0,fi(c,dn))),x=Cr},y=function(){h._gsap.y=Hs(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(M){requestAnimationFrame(w);var Y=Hs(a.deltaY/2),$=U(d.v-Y);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var R=Hs((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,Ai()}return!0}d.offset&&y(),M=!0},D,Z,L,N,G=function(){v(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Me.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Oi&&W.type==="touchmove"&&F()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){M=!1;var W=_;_=Hs((Je.visualViewport&&Je.visualViewport.scale||1)/m),D.pause(),W!==_&&kl(c,_>1.01?!0:n?!1:"x"),Z=g(),L=d(),v(),x=Cr},e.onRelease=e.onGestureStart=function(W,Y){if(d.offset&&y(),!Y)N.restart(!0);else{et.cache++;var $=S(),R,j;n&&(R=g(),j=R+$*.05*-W.velocityX/.227,$*=th(g,R,j,fi(c,dn)),D.vars.scrollX=b(j)),R=d(),j=R+$*.05*-W.velocityY/.227,$*=th(d,R,j,fi(c,Ft)),D.vars.scrollY=U(j),D.invalidate().duration($).play(.01),(Oi&&D.vars.scrollY>=l||R>=l-1)&&Me.to({},{onUpdate:G,duration:$})}o&&o(W)},e.onWheel=function(){D._ts&&D.pause(),Qt()-p>1e3&&(x=0,p=Qt())},e.onChange=function(W,Y,$,R,j){if(Cr!==x&&v(),Y&&n&&g(b(R[2]===Y?Z+(W.startX-W.x):g()+Y-R[1])),$){d.offset&&y();var ne=j[2]===$,q=ne?L+W.startY-W.y:d()+$-j[1],K=U(q);ne&&q!==K&&(L+=K-q),d(K)}($||Y)&&Ai()},e.onEnable=function(){kl(c,n?!1:"x"),tt.addEventListener("refresh",G),Ht(Je,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){kl(c,!0),Gt(Je,"resize",G),tt.removeEventListener("refresh",G),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ct(e),a.iOS=Oi,Oi&&!d()&&d(1),Oi&&Me.ticker.add(ai),N=a._dc,D=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ap(d,d(),function(){return D.pause()})},onUpdate:Ai,onComplete:N.vars.onComplete}),a};tt.sort=function(r){if(tn(r))return Ke.sort(r);var e=Je.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Je.innerHeight}),Ke.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ct(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return ln;if(r===!0&&ln)return ln.enable();if(r===!1){ln&&ln.kill(),ln=r;return}var e=r instanceof Ct?r:jM(r);return ln&&ln.target===e.target&&ln.kill(),Dr(e.target)&&(ln=e),e};tt.core={_getVelocityProp:mc,_inputObserver:op,_scrollers:et,_proxies:hi,bridge:{ss:function(){jn||Ir("scrollStart"),jn=Qt()},ref:function(){return Jt}}};Zd()&&Me.registerPlugin(tt);Gn.registerPlugin(tt);class JM{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.canvas=null,this.ripplePlane=null,this.mouse=new at,this.time=0,this.init(),this.createRipples(),this.setupEventListeners(),this.animate()}init(){this.scene=new gx,this.camera=new Vn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.canvas=document.getElementById("three-canvas"),this.renderer=new Fh({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0)}createRipples(){const e=new zo(20,20,64,64),t=new ji({uniforms:{time:{value:0},mouse:{value:new at(0,0)},resolution:{value:new at(window.innerWidth,window.innerHeight)}},vertexShader:`
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        varying float vWave;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          vec2 mousePos = mouse * 10.0;
          float dist = distance(pos.xy, mousePos);
          
          float wave1 = sin(dist * 3.0 - time * 6.0) * 0.3 * exp(-dist * 0.2);
          float wave2 = sin(dist * 6.0 - time * 8.0) * 0.2 * exp(-dist * 0.3);
          float wave3 = sin(dist * 12.0 - time * 10.0) * 0.1 * exp(-dist * 0.5);
          
          vWave = wave1 + wave2 + wave3;
          pos.z = vWave;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        varying float vWave;
        
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        
        void main() {
          vec2 mousePos = mouse * 10.0;
          float dist = distance(vUv * 20.0 - 10.0, mousePos);
          
          float hue = fract(time * 0.1 + dist * 0.1 + vWave * 2.0);
          float saturation = 0.8;
          float value = 0.6 + abs(vWave) * 2.0;
          
          vec3 color = hsv2rgb(vec3(hue, saturation, value));
          
          // Add some base colors
          color = mix(color, vec3(0.2, 0.8, 1.0), 0.2);
          color = mix(color, vec3(1.0, 0.2, 0.6), sin(time + dist) * 0.1 + 0.1);
          
          float alpha = abs(vWave) * 2.0 + 0.1;
          alpha *= 1.0 - smoothstep(0.0, 8.0, dist);
          
          gl_FragColor = vec4(color, alpha * 0.6);
        }
      `,transparent:!0,blending:_o,side:li});this.ripplePlane=new Ti(e,t),this.ripplePlane.rotation.x=-Math.PI/2,this.scene.add(this.ripplePlane),this.createParticles()}createParticles(){const t=new Float32Array(300),n=new Float32Array(100*3);for(let a=0;a<100;a++)t[a*3]=(Math.random()-.5)*20,t[a*3+1]=(Math.random()-.5)*20,t[a*3+2]=(Math.random()-.5)*10,n[a*3]=Math.random(),n[a*3+1]=Math.random(),n[a*3+2]=Math.random();const i=new Pi;i.setAttribute("position",new Zn(t,3)),i.setAttribute("color",new Zn(n,3));const s=new Bh({size:.1,vertexColors:!0,transparent:!0,opacity:.6,blending:_o}),o=new vx(i,s);this.scene.add(o)}setupEventListeners(){window.addEventListener("resize",()=>this.onWindowResize()),document.addEventListener("mousemove",e=>this.onMouseMove(e))}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}animate(){requestAnimationFrame(()=>this.animate()),this.time+=.016,this.ripplePlane&&(this.ripplePlane.material.uniforms.time.value=this.time,this.ripplePlane.material.uniforms.mouse.value=this.mouse),this.camera.position.x+=(this.mouse.x*2-this.camera.position.x)*.05,this.camera.position.y+=(this.mouse.y*2-this.camera.position.y)*.05,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera)}}class QM{constructor(){this.initScrollAnimations(),this.initTextAnimations(),this.initLoadingScreen()}initLoadingScreen(){const e=document.querySelector(".loading-screen");window.addEventListener("load",()=>{setTimeout(()=>{Gn.to(e,{opacity:0,duration:.5,onComplete:()=>{e.style.display="none",this.initHeroAnimations()}})},1e3)})}initHeroAnimations(){Gn.timeline().to(".hero-title",{opacity:1,y:0,duration:1,ease:"power3.out"}).to(".hero-subtitle",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.5").to(".cta-button",{opacity:1,y:0,duration:.6,ease:"power3.out"},"-=0.3")}initScrollAnimations(){Gn.utils.toArray(".fade-in").forEach(e=>{Gn.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})}),Gn.utils.toArray(".slide-in-left").forEach(e=>{Gn.fromTo(e,{opacity:0,x:-50},{opacity:1,x:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})}),Gn.utils.toArray(".slide-in-right").forEach(e=>{Gn.fromTo(e,{opacity:0,x:50},{opacity:1,x:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})})}initTextAnimations(){const e=t=>{const n=t.textContent;t.innerHTML="",[...n].forEach((i,s)=>{const o=document.createElement("span");o.textContent=i===" "?" ":i,o.style.display="inline-block",o.style.opacity="0",o.style.transform="translateY(20px)",t.appendChild(o),Gn.to(o,{opacity:1,y:0,duration:.5,delay:s*.03,ease:"power3.out"})})};document.querySelectorAll(".animate-text").forEach(e)}}class eS{constructor(){this.menuToggle=document.querySelector(".menu-toggle"),this.navLinks=document.querySelector(".nav-links"),this.header=document.querySelector("header"),this.initNavigation(),this.initScrollHeader()}initNavigation(){var e,t;(e=this.menuToggle)==null||e.addEventListener("click",()=>{this.navLinks.classList.toggle("open"),this.menuToggle.classList.toggle("active")}),(t=this.navLinks)==null||t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{this.navLinks.classList.remove("open"),this.menuToggle.classList.remove("active")})})}initScrollHeader(){let e=window.scrollY;window.addEventListener("scroll",()=>{const t=window.scrollY;t>100?(this.header.style.background="rgba(0, 0, 0, 0.95)",this.header.style.backdropFilter="blur(20px)"):this.header.style.background="rgba(0, 0, 0, 0.8)",t>e&&t>100?this.header.style.transform="translateY(-100%)":this.header.style.transform="translateY(0)",e=t})}}document.addEventListener("DOMContentLoaded",()=>{try{const r=new JM;console.log("3D Ripple effects loaded successfully")}catch(r){console.log("3D effects failed, using fallback animations:",r);const e=document.getElementById("three-canvas");e&&(e.style.display="none")}if(new QM,new eS,!window.rippleScene){let r=[];document.addEventListener("mousemove",e=>{r.push({x:e.clientX,y:e.clientY,time:Date.now()}),r.length>10&&r.shift();const t=document.createElement("div");t.style.position="fixed",t.style.left=e.clientX+"px",t.style.top=e.clientY+"px",t.style.width="20px",t.style.height="20px",t.style.borderRadius="50%",t.style.background=`hsl(${Date.now()*.01%360}, 70%, 60%)`,t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.zIndex="999",t.style.opacity="0.7",document.body.appendChild(t),Gn.to(t,{scale:3,opacity:0,duration:1,ease:"power2.out",onComplete:()=>t.remove()})})}});
