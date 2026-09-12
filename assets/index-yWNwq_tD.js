(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ha="180",$u=0,vl=1,Ku=2,Dc=1,Lc=2,On=3,oi=0,Ve=1,un=2,ei=0,ir=1,xl=2,yl=3,Ml=4,Zu=5,yi=100,Ju=101,ju=102,Qu=103,th=104,eh=200,nh=201,ih=202,rh=203,Wo=204,Xo=205,sh=206,oh=207,ah=208,lh=209,ch=210,uh=211,hh=212,fh=213,dh=214,qo=0,Yo=1,$o=2,or=3,Ko=4,Zo=5,Jo=6,jo=7,Ic=0,ph=1,mh=2,ni=0,gh=1,_h=2,vh=3,Uc=4,xh=5,yh=6,Mh=7,Nc=300,ar=301,lr=302,Qo=303,ta=304,js=306,Hs=1e3,Si=1001,ea=1002,rn=1003,Sh=1004,as=1005,hn=1006,oo=1007,Qn=1008,Rn=1009,Fc=1010,Oc=1011,Or=1012,Ga=1013,Ti=1014,En=1015,ts=1016,Va=1017,Wa=1018,Br=1020,Bc=35902,zc=35899,kc=1021,Hc=1022,fn=1023,zr=1026,kr=1027,Xa=1028,qa=1029,Gc=1030,Ya=1031,$a=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,na=35840,ia=35841,ra=35842,sa=35843,oa=36196,aa=37492,la=37496,ca=37808,ua=37809,ha=37810,fa=37811,da=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,ya=37819,Ma=37820,Sa=37821,Ea=36492,Ta=36494,ba=36495,wa=36283,Aa=36284,Ra=36285,Ca=36286,Eh=3200,Th=3201,Vc=0,bh=1,Jn="",Ye="srgb",cr="srgb-linear",Gs="linear",ce="srgb",Ui=7680,Sl=519,wh=512,Ah=513,Rh=514,Wc=515,Ch=516,Ph=517,Dh=518,Lh=519,El=35044,Tl="300 es",Tn=2e3,Vs=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const Cr=Math.PI/180,Hr=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ka(i,t){return(i%t+t)%t}function Ih(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Uh(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Nh(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Fh(i,t=1){return t-Math.abs(Ka(i,t*2)-t)}function Oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kh(i,t){return i+Math.random()*(t-i)}function Hh(i){return i*(.5-Math.random())}function Gh(i){i!==void 0&&(bl=i);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vh(i){return i*Cr}function Wh(i){return i*Hr}function Xh(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $h(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bi={DEG2RAD:Cr,RAD2DEG:Hr,generateUUID:Ci,clamp:Zt,euclideanModulo:Ka,mapLinear:Ih,inverseLerp:Uh,lerp:Pr,damp:Nh,pingpong:Fh,smoothstep:Oh,smootherstep:Bh,randInt:zh,randFloat:kh,randFloatSpread:Hh,seededRandom:Gh,degToRad:Vh,radToDeg:Wh,isPowerOfTwo:Xh,ceilPowerOfTwo:qh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:$h,normalize:ke,denormalize:ji};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,f*E);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new L,wl=new bn;class qt{constructor(t,e,n,r,s,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],E=r[1],y=r[4],v=r[7],b=r[2],A=r[5],R=r[8];return s[0]=o*_+a*E+l*b,s[3]=o*m+a*y+l*A,s[6]=o*f+a*v+l*R,s[1]=c*_+h*E+u*b,s[4]=c*m+h*y+u*A,s[7]=c*f+h*v+u*R,s[2]=d*_+p*E+g*b,s[5]=d*m+p*y+g*A,s[8]=d*f+p*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new qt;function Xc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){const i=Ws("canvas");return i.style.display="block",i}const Al={};function Gr(i){i in Al||(Al[i]=!0,console.warn(i))}function Zh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Rl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jh(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ce&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}const ie=Jh();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class jh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Ws("canvas")),Ni.width=t.width,Ni.height=t.height;const r=Ni.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qh=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(co(r[o].image)):s.push(co(r[o]))}else s=co(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;const uo=new L;class Oe extends dr{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Si,r=Si,s=hn,o=Qn,a=fn,l=Rn,c=Oe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ci(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Nc;Oe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,b=(f+1)/2,A=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return y>v&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=R/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=R/s,r=P/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ef extends dr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Oe(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Za(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends ef{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qc extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),cs.subVectors(this.max,vr),Fi.subVectors(t.a,vr),Oi.subVectors(t.b,vr),Bi.subVectors(t.c,vr),Vn.subVectors(Oi,Fi),Wn.subVectors(Bi,Oi),hi.subVectors(Fi,Bi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!ho(e,Fi,Oi,Bi,cs)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Fi,Oi,Bi,cs))?!1:(us.crossVectors(Vn,Wn),e=[us.x,us.y,us.z],ho(e,Fi,Oi,Bi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,ls=new Pi,Fi=new L,Oi=new L,Bi=new L,Vn=new L,Wn=new L,hi=new L,vr=new L,cs=new L,us=new L,fi=new L;function ho(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fi.fromArray(i,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rf=new Pi,xr=new L,fo=new L;class es{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(fo)),this.expandByPoint(xr.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ln=new L,po=new L,hs=new L,Xn=new L,mo=new L,fs=new L,go=new L;class sf{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){po.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(po);const s=t.distanceTo(e)*.5,o=-this.direction.dot(hs),a=Xn.dot(this.direction),l=-Xn.dot(hs),c=Xn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(po).addScaledVector(hs,d),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,r,s){mo.subVectors(e,t),fs.subVectors(n,t),go.crossVectors(mo,fs);let o=this.direction.dot(go),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const l=a*this.direction.dot(fs.crossVectors(Xn,fs));if(l<0)return null;const c=a*this.direction.dot(mo.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(go);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,af)}lookAt(t,e,n){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),qn.crossVectors(n,je),qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),qn.crossVectors(n,je)),qn.normalize(),ds.crossVectors(je,qn),r[0]=qn.x,r[4]=ds.x,r[8]=je.x,r[1]=qn.y,r[5]=ds.y,r[9]=je.y,r[2]=qn.z,r[6]=ds.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],y=n[7],v=n[11],b=n[15],A=r[0],R=r[4],P=r[8],x=r[12],M=r[1],C=r[5],N=r[9],I=r[13],G=r[2],B=r[6],H=r[10],Y=r[14],F=r[3],j=r[7],tt=r[11],ft=r[15];return s[0]=o*A+a*M+l*G+c*F,s[4]=o*R+a*C+l*B+c*j,s[8]=o*P+a*N+l*H+c*tt,s[12]=o*x+a*I+l*Y+c*ft,s[1]=h*A+u*M+d*G+p*F,s[5]=h*R+u*C+d*B+p*j,s[9]=h*P+u*N+d*H+p*tt,s[13]=h*x+u*I+d*Y+p*ft,s[2]=g*A+_*M+m*G+f*F,s[6]=g*R+_*C+m*B+f*j,s[10]=g*P+_*N+m*H+f*tt,s[14]=g*x+_*I+m*Y+f*ft,s[3]=E*A+y*M+v*G+b*F,s[7]=E*R+y*C+v*B+b*j,s[11]=E*P+y*N+v*H+b*tt,s[15]=E*x+y*I+v*Y+b*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*p-n*l*p)+_*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+e*c*u-e*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-r*a*h-e*l*u+e*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,b=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*E+n*y+r*v+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(_*d*s-u*m*s-_*r*p+n*m*p+u*r*f-n*d*f)*R,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*f+n*l*f)*R,t[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*f+e*d*f)*R,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*f-e*l*f)*R,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*p+e*l*p)*R,t[8]=v*R,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*f-e*u*f)*R,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=b*R,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,E=l*c,y=l*h,v=l*u,b=n.x,A=n.y,R=n.z;return r[0]=(1-(_+f))*b,r[1]=(p+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(d+f))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+y)*R,r[9]=(m-E)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const o=zi.set(r[4],r[5],r[6]).length(),a=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const c=1/s,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Tn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Tn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vs)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Tn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Tn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Vs)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new L,pn=new de,of=new L(0,0,0),af=new L(1,1,1),qn=new L,ds=new L,je=new L,Pl=new de,Dl=new bn;class sn{constructor(t=0,e=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lf=0;const Ll=new L,ki=new bn,In=new de,ps=new L,yr=new L,cf=new L,uf=new bn,Il=new L(1,0,0),Ul=new L(0,1,0),Nl=new L(0,0,1),Fl={type:"added"},hf={type:"removed"},Hi={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ae extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new sn,n=new bn,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(yr,ps,this.up):In.lookAt(ps,yr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new L,Un=new L,vo=new L,Nn=new L,Gi=new L,Vi=new L,Ol=new L,xo=new L,yo=new L,Mo=new L,So=new ye,Eo=new ye,To=new ye;class vn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),Un.subVectors(n,e),vo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Un),l=mn.dot(vo),c=Un.dot(Un),h=Un.dot(vo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return So.setScalar(0),Eo.setScalar(0),To.setScalar(0),So.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(So,s.x),o.addScaledVector(Eo,s.y),o.addScaledVector(To,s.z),o}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),Un.subVectors(t,e),mn.cross(Un).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Gi.subVectors(r,n),Vi.subVectors(s,n),xo.subVectors(t,n);const l=Gi.dot(xo),c=Vi.dot(xo);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,r);const h=Gi.dot(yo),u=Vi.dot(yo);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gi,o);Mo.subVectors(t,s);const p=Gi.dot(Mo),g=Vi.dot(Mo);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Vi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ol.subVectors(s,r),a=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(Ol,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=Ka(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=bo(o,s,t+1/3),this.g=bo(o,s,t),this.b=bo(o,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ie.workingToColorSpace(Ie.copy(this),t),Math.round(Zt(Ie.r*255,0,255))*65536+Math.round(Zt(Ie.g*255,0,255))*256+Math.round(Zt(Ie.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ye){ie.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(ms);const n=Pr(Yn.h,ms.h,e),r=Pr(Yn.s,ms.s,e),s=Pr(Yn.l,ms.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new It;It.NAMES=$c;let ff=0;class ns extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ir,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qs extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,gs=new mt;let df=0;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}}class Kc extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zc extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pf=0;const ln=new de,wo=new Ae,Wi=new L,Qe=new Pi,Mr=new Pi,be=new L;class Se extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?Zc:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Qe.min,Mr.min),Qe.expandByPoint(be),be.addVectors(Qe.max,Mr.max),Qe.expandByPoint(be)):(Qe.expandByPoint(Mr.min),Qe.expandByPoint(Mr.max))}Qe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),be.add(Wi)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,d=new mt,p=new mt,g=new mt,_=new L,m=new L;function f(P,x,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[x].add(_),a[M].add(_),l[P].add(m),l[x].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,x=E.length;P<x;++P){const M=E[P],C=M.start,N=M.count;for(let I=C,G=C+N;I<G;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new L,v=new L,b=new L,A=new L;function R(P){b.fromBufferAttribute(r,P),A.copy(b);const x=a[P];y.copy(x),y.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(A,x);const C=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,x=E.length;P<x;++P){const M=E[P],C=M.start,N=M.count;for(let I=C,G=C+N;I<G;I+=3)R(t.getX(I+0)),R(t.getX(I+1)),R(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new de,di=new sf,_s=new es,zl=new L,vs=new L,xs=new L,ys=new L,Ao=new L,Ms=new L,kl=new L,Ss=new L;class Gt extends Ae{constructor(t=new Se,e=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ao.fromBufferAttribute(u,t),o?Ms.addScaledVector(Ao,h):Ms.addScaledVector(Ao.sub(e),h))}e.add(Ms)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(_s.containsPoint(di.origin)===!1&&(di.intersectSphere(_s,zl)===null||di.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(s).invert(),di.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,b=y;v<b;v+=3){const A=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);r=Es(this,f,t,n,c,h,u,A,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Es(this,o,t,n,c,h,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,b=y;v<b;v+=3){const A=v,R=v+1,P=v+2;r=Es(this,f,t,n,c,h,u,A,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,y=m+1,v=m+2;r=Es(this,o,t,n,c,h,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function mf(i,t,e,n,r,s,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===oi,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ss);return c<e.near||c>e.far?null:{distance:c,point:Ss.clone(),object:i}}function Es(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,vs),i.getVertexPosition(l,xs),i.getVertexPosition(c,ys);const h=mf(i,t,e,n,vs,xs,ys,kl);if(h){const u=new L;vn.getBarycoord(kl,vs,xs,ys,u),r&&(h.uv=vn.getInterpolatedAttribute(r,a,l,c,u,new mt)),s&&(h.uv1=vn.getInterpolatedAttribute(s,a,l,c,u,new mt)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};vn.getNormal(vs,xs,ys,d.normal),h.face=d,h.barycoord=u}return h}class Hn extends Se{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(_,m,f,E,y,v,b,A,R,P,x){const M=v/R,C=b/P,N=v/2,I=b/2,G=A/2,B=R+1,H=P+1;let Y=0,F=0;const j=new L;for(let tt=0;tt<H;tt++){const ft=tt*C-I;for(let Nt=0;Nt<B;Nt++){const Wt=Nt*M-N;j[_]=Wt*E,j[m]=ft*y,j[f]=G,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(Nt/R),u.push(1-tt/P),Y+=1}}for(let tt=0;tt<P;tt++)for(let ft=0;ft<R;ft++){const Nt=d+ft+B*tt,Wt=d+ft+B*(tt+1),te=d+(ft+1)+B*(tt+1),jt=d+(ft+1)+B*tt;l.push(Nt,Wt,jt),l.push(Wt,te,jt),F+=6}a.addGroup(p,F,x),p+=F,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const r in n)t[r]=n[r]}return t}function gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const _f={clone:ur,merge:He};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,Hl=new mt,Gl=new mt;class cn extends jc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Gl),e.subVectors(Gl,Hl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class yf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const s=new cn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const o=new cn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const a=new cn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const l=new cn(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new cn(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qc extends Oe{constructor(t=[],e=ar,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mf extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Qc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hn(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ei});s.uniforms.tEquirect.value=e;const o=new Gt(r,s),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=hn),new yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class wn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ja{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ef extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tu extends Oe{constructor(t=null,e=1,n=1,r,s,o,a,l,c=rn,h=rn,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends Ke{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new de,Wl=new de,Ts=[],Xl=new Pi,Tf=new de,Sr=new Gt,Er=new es;class eu extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Tf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Xl.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Er.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yi),Wl.multiplyMatrices(n,Yi),Sr.matrixWorld=Wl,Sr.raycast(t,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=s,l.object=this,e.push(l)}Ts.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(r*this.count),r,this.count,Xa,En));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Co=new L,bf=new L,wf=new qt;class vi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Co.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Co),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),r=this.coplanarPoint(Co).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new es,Af=new mt(.5,.5),bs=new L;class ja{constructor(t=new vi,e=new vi,n=new vi,r=new vi,s=new vi,o=new vi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],E=s[12],y=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-o,p-h,f-g,b-E).normalize(),r[1].setComponents(c+o,p+h,f+g,b+E).normalize(),r[2].setComponents(c+a,p+u,f+_,b+y).normalize(),r[3].setComponents(c-a,p-u,f-_,b-y).normalize(),n)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,p-d,f-m,b-v).normalize();else if(r[4].setComponents(c-l,p-d,f-m,b-v).normalize(),e===Tn)r[5].setComponents(c+l,p+d,f+m,b+v).normalize();else if(e===Vs)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);const e=Af.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(bs.x=r.normal.x>0?t.max.x:t.min.x,bs.y=r.normal.y>0?t.max.y:t.min.y,bs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rf extends Oe{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends Oe{constructor(t,e,n=Ti,r,s,o,a=rn,l=rn,c,h=zr,u=1){if(h!==zr&&h!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class iu extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qa extends Se{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new L,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gn extends Se{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(p,2));function E(){const v=new L,b=new L;let A=0;const R=(e-t)/n;for(let P=0;P<=s;P++){const x=[],M=P/s,C=M*(e-t)+t;for(let N=0;N<=r;N++){const I=N/r,G=I*l+a,B=Math.sin(G),H=Math.cos(G);b.x=C*B,b.y=-M*n+m,b.z=C*H,u.push(b.x,b.y,b.z),v.set(B,R,H).normalize(),d.push(v.x,v.y,v.z),p.push(I,1-M),x.push(g++)}_.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const M=_[x][P],C=_[x+1][P],N=_[x+1][P+1],I=_[x][P+1];(t>0||x!==0)&&(h.push(M,C,I),A+=3),(e>0||x!==s-1)&&(h.push(C,N,I),A+=3)}c.addGroup(f,A,0),f+=A}function y(v){const b=g,A=new mt,R=new L;let P=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let N=0;N<=r;N++){const G=N/r*l+a,B=Math.cos(G),H=Math.sin(G);R.x=x*H,R.y=m*M,R.z=x*B,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=B*.5+.5,A.y=H*.5*M+.5,p.push(A.x,A.y),g++}for(let N=0;N<r;N++){const I=b+N,G=C+N;v===!0?h.push(G,G+1,I):h.push(G+1,G,I),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends Gn{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tl extends Se{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new L,v=new L,b=new L;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],v),p(e[A+2],b),l(y,v,b,E)}function l(E,y,v,b){const A=b+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const x=E.clone().lerp(v,P/A),M=y.clone().lerp(v,P/A),C=A-P;for(let N=0;N<=C;N++)N===0&&P===A?R[P][N]=x:R[P][N]=x.clone().lerp(M,N/C)}for(let P=0;P<A;P++)for(let x=0;x<2*(A-P)-1;x++){const M=Math.floor(x/2);x%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function c(E){const y=new L;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(E),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const E=new L;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const v=m(E)/2/Math.PI+.5,b=f(E)/Math.PI+.5;o.push(v,1-b)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const y=o[E+0],v=o[E+2],b=o[E+4],A=Math.max(y,v,b),R=Math.min(y,v,b);A>.9&&R<.1&&(y<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),b<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function p(E,y){const v=E*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const E=new L,y=new L,v=new L,b=new L,A=new mt,R=new mt,P=new mt;for(let x=0,M=0;x<s.length;x+=9,M+=6){E.set(s[x+0],s[x+1],s[x+2]),y.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),b.copy(E).add(y).add(v).divideScalar(3);const C=m(b);_(A,M+0,E,C),_(R,M+2,y,C),_(P,M+4,v,C)}}function _(E,y,v,b){b<0&&E.x===1&&(o[y]=E.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.vertices,t.indices,t.radius,t.details)}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,r=[],s=[],o=[],a=new L,l=new de;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Zt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class el extends Cn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cf extends el{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const ws=new L,Po=new nl,Do=new nl,Lo=new nl;class Pf extends Cn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ws.subVectors(r[0],r[1]).add(r[0]),c=ws);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Po.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Do.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Lo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Do.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Po.calc(l),Do.calc(l),Lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Df(i,t){const e=1-i;return e*e*t}function Lf(i,t){return 2*(1-i)*i*t}function If(i,t){return i*i*t}function Lr(i,t,e,n){return Df(i,t)+Lf(i,e)+If(i,n)}function Uf(i,t){const e=1-i;return e*e*e*t}function Nf(i,t){const e=1-i;return 3*e*e*i*t}function Ff(i,t){return 3*(1-i)*i*i*t}function Of(i,t){return i*i*i*t}function Ir(i,t,e,n,r){return Uf(i,t)+Nf(i,e)+Ff(i,n)+Of(i,r)}class ru extends Cn{constructor(t=new mt,e=new mt,n=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ir(t,r.x,s.x,o.x,a.x),Ir(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bf extends Cn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ir(t,r.x,s.x,o.x,a.x),Ir(t,r.y,s.y,o.y,a.y),Ir(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class su extends Cn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Cn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends Cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y),Lr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(ql(a,l.x,c.x,h.x,u.x),ql(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new mt().fromArray(r))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:Pf,CubicBezierCurve:ru,CubicBezierCurve3:Bf,EllipseCurve:el,LineCurve:su,LineCurve3:zf,QuadraticBezierCurve:ou,QuadraticBezierCurve3:kf,SplineCurve:au});class Hf extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Pa[r.type]().fromJSON(r))}return this}}class Yl extends Hf{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new su(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new ou(this.currentPoint.clone(),new mt(t,e),new mt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new ru(this.currentPoint.clone(),new mt(t,e),new mt(n,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new el(t,e,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xs extends Yl{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Yl().fromJSON(r))}return this}}function Gf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=lu(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Yf(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<r;d+=e){const p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Vr(s,o,e,a,l,c,0),o}function lu(i,t,e,n,r){let s;if(r===rd(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=$l(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=$l(o/n|0,i[o],i[o+1],s);return s&&hr(s,s.next)&&(Xr(s),s=s.next),s}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||ve(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&jf(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Wf(i,n,r,s):Vf(i)){t.push(l.i,i.i,c.i),Xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xf(Ai(i),t),Vr(i,t,e,n,r,s,2)):o===2&&qf(i,t,e,n,r,s):Vr(Ai(i),t,e,n,r,s,1);break}}}function Vf(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ar(r,a,s,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wf(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ve(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),f=Da(p,g,t,e,n),E=Da(_,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=E;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ar(a,h,l,u,c,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ar(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ar(a,h,l,u,c,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ar(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xf(i,t){let e=i;do{const n=e.prev,r=e.next.next;!hr(n,r)&&uu(n,e,e.next,r)&&Wr(n,r)&&Wr(r,n)&&(t.push(n.i,e.i,r.i),Xr(e),Xr(e.next),e=i=r),e=e.next}while(e!==i);return Ai(e)}function qf(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ed(o,a)){let l=hu(o,a);o=Ai(o,o.next),l=Ai(l,l.next),Vr(o,t,e,n,r,s,0),Vr(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Yf(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=lu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(td(c))}r.sort($f);for(let s=0;s<r.length;s++)e=Kf(r[s],e);return e}function $f(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Kf(i,t){const e=Zf(i,t);if(!e)return t;const n=hu(e,i);return Ai(n,n.next),Ai(e,e.next)}function Zf(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(hr(i,e))return e;do{if(hr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cu(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);Wr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Jf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Jf(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function jf(i,t,e,n){let r=i;do r.z===0&&(r.z=Da(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Qf(r)}function Qf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Da(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function td(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cu(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ar(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&cu(i,t,e,n,r,s,o,a)}function ed(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nd(i,t)&&(Wr(i,t)&&Wr(t,i)&&id(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||hr(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){const r=Rs(ve(i,t,e)),s=Rs(ve(i,t,n)),o=Rs(ve(e,n,i)),a=Rs(ve(e,n,t));return!!(r!==s&&o!==a||r===0&&As(i,e,t)||s===0&&As(i,n,t)||o===0&&As(e,i,n)||a===0&&As(e,t,n))}function As(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Rs(i){return i>0?1:i<0?-1:0}function nd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Wr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function id(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){const e=La(i.i,i.x,i.y),n=La(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $l(i,t,e,n){const r=La(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function La(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class sd{static triangulate(t,e,n=2){return Gf(t,e,n)}}class tr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return tr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Kl(t),Zl(n,t);let o=t.length;e.forEach(Kl);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Zl(n,e[l]);const a=sd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Kl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qr extends Se{constructor(t=new Xs([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(r,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:od;let y,v=!1,b,A,R,P;f&&(y=f.getSpacedPoints(h),v=!0,d=!1,b=f.computeFrenetFrames(h,!1),A=new L,R=new L,P=new L),d||(m=0,p=0,g=0,_=0);const x=a.extractPoints(c);let M=x.shape;const C=x.holes;if(!tr.isClockWise(M)){M=M.reverse();for(let it=0,Q=C.length;it<Q;it++){const J=C[it];tr.isClockWise(J)&&(C[it]=J.reverse())}}function I(it){const J=10000000000000001e-36;let Z=it[0];for(let pt=1;pt<=it.length;pt++){const st=pt%it.length,ht=it[st],Ft=ht.x-Z.x,Bt=ht.y-Z.y,w=Ft*Ft+Bt*Bt,S=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(Z.x),Math.abs(Z.y)),k=J*S*S;if(w<=k){it.splice(st,1),pt--;continue}Z=ht}}I(M),C.forEach(I);const G=C.length,B=M;for(let it=0;it<G;it++){const Q=C[it];M=M.concat(Q)}function H(it,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,J)}const Y=M.length;function F(it,Q,J){let Z,pt,st;const ht=it.x-Q.x,Ft=it.y-Q.y,Bt=J.x-it.x,w=J.y-it.y,S=ht*ht+Ft*Ft,k=ht*w-Ft*Bt;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(S),rt=Math.sqrt(Bt*Bt+w*w),$=Q.x-Ft/q,bt=Q.y+ht/q,dt=J.x-w/rt,At=J.y+Bt/rt,Rt=((dt-$)*w-(At-bt)*Bt)/(ht*w-Ft*Bt);Z=$+ht*Rt-it.x,pt=bt+Ft*Rt-it.y;const ot=Z*Z+pt*pt;if(ot<=2)return new mt(Z,pt);st=Math.sqrt(ot/2)}else{let q=!1;ht>Number.EPSILON?Bt>Number.EPSILON&&(q=!0):ht<-Number.EPSILON?Bt<-Number.EPSILON&&(q=!0):Math.sign(Ft)===Math.sign(w)&&(q=!0),q?(Z=-Ft,pt=ht,st=Math.sqrt(S)):(Z=ht,pt=Ft,st=Math.sqrt(S/2))}return new mt(Z/st,pt/st)}const j=[];for(let it=0,Q=B.length,J=Q-1,Z=it+1;it<Q;it++,J++,Z++)J===Q&&(J=0),Z===Q&&(Z=0),j[it]=F(B[it],B[J],B[Z]);const tt=[];let ft,Nt=j.concat();for(let it=0,Q=G;it<Q;it++){const J=C[it];ft=[];for(let Z=0,pt=J.length,st=pt-1,ht=Z+1;Z<pt;Z++,st++,ht++)st===pt&&(st=0),ht===pt&&(ht=0),ft[Z]=F(J[Z],J[st],J[ht]);tt.push(ft),Nt=Nt.concat(ft)}let Wt;if(m===0)Wt=tr.triangulateShape(B,C);else{const it=[],Q=[];for(let J=0;J<m;J++){const Z=J/m,pt=p*Math.cos(Z*Math.PI/2),st=g*Math.sin(Z*Math.PI/2)+_;for(let ht=0,Ft=B.length;ht<Ft;ht++){const Bt=H(B[ht],j[ht],st);Pt(Bt.x,Bt.y,-pt),Z===0&&it.push(Bt)}for(let ht=0,Ft=G;ht<Ft;ht++){const Bt=C[ht];ft=tt[ht];const w=[];for(let S=0,k=Bt.length;S<k;S++){const q=H(Bt[S],ft[S],st);Pt(q.x,q.y,-pt),Z===0&&w.push(q)}Z===0&&Q.push(w)}}Wt=tr.triangulateShape(it,Q)}const te=Wt.length,jt=g+_;for(let it=0;it<Y;it++){const Q=d?H(M[it],Nt[it],jt):M[it];v?(R.copy(b.normals[0]).multiplyScalar(Q.x),A.copy(b.binormals[0]).multiplyScalar(Q.y),P.copy(y[0]).add(R).add(A),Pt(P.x,P.y,P.z)):Pt(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<Y;Q++){const J=d?H(M[Q],Nt[Q],jt):M[Q];v?(R.copy(b.normals[it]).multiplyScalar(J.x),A.copy(b.binormals[it]).multiplyScalar(J.y),P.copy(y[it]).add(R).add(A),Pt(P.x,P.y,P.z)):Pt(J.x,J.y,u/h*it)}for(let it=m-1;it>=0;it--){const Q=it/m,J=p*Math.cos(Q*Math.PI/2),Z=g*Math.sin(Q*Math.PI/2)+_;for(let pt=0,st=B.length;pt<st;pt++){const ht=H(B[pt],j[pt],Z);Pt(ht.x,ht.y,u+J)}for(let pt=0,st=C.length;pt<st;pt++){const ht=C[pt];ft=tt[pt];for(let Ft=0,Bt=ht.length;Ft<Bt;Ft++){const w=H(ht[Ft],ft[Ft],Z);v?Pt(w.x,w.y+y[h-1].y,y[h-1].x+J):Pt(w.x,w.y,u+J)}}}K(),nt();function K(){const it=r.length/3;if(d){let Q=0,J=Y*Q;for(let Z=0;Z<te;Z++){const pt=Wt[Z];Et(pt[2]+J,pt[1]+J,pt[0]+J)}Q=h+m*2,J=Y*Q;for(let Z=0;Z<te;Z++){const pt=Wt[Z];Et(pt[0]+J,pt[1]+J,pt[2]+J)}}else{for(let Q=0;Q<te;Q++){const J=Wt[Q];Et(J[2],J[1],J[0])}for(let Q=0;Q<te;Q++){const J=Wt[Q];Et(J[0]+Y*h,J[1]+Y*h,J[2]+Y*h)}}n.addGroup(it,r.length/3-it,0)}function nt(){const it=r.length/3;let Q=0;Mt(B,Q),Q+=B.length;for(let J=0,Z=C.length;J<Z;J++){const pt=C[J];Mt(pt,Q),Q+=pt.length}n.addGroup(it,r.length/3-it,1)}function Mt(it,Q){let J=it.length;for(;--J>=0;){const Z=J;let pt=J-1;pt<0&&(pt=it.length-1);for(let st=0,ht=h+m*2;st<ht;st++){const Ft=Y*st,Bt=Y*(st+1),w=Q+Z+Ft,S=Q+pt+Ft,k=Q+pt+Bt,q=Q+Z+Bt;$t(w,S,k,q)}}}function Pt(it,Q,J){l.push(it),l.push(Q),l.push(J)}function Et(it,Q,J){ae(it),ae(Q),ae(J);const Z=r.length/3,pt=E.generateTopUV(n,r,Z-3,Z-2,Z-1);D(pt[0]),D(pt[1]),D(pt[2])}function $t(it,Q,J,Z){ae(it),ae(Q),ae(Z),ae(Q),ae(J),ae(Z);const pt=r.length/3,st=E.generateSideWallUV(n,r,pt-6,pt-3,pt-2,pt-1);D(st[0]),D(st[1]),D(st[3]),D(st[1]),D(st[2]),D(st[3])}function ae(it){r.push(l[it*3+0]),r.push(l[it*3+1]),r.push(l[it*3+2])}function D(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ad(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Pa[r.type]().fromJSON(r)),new qr(n,t.options)}}const od={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-g),new mt(_,1-f)]:[new mt(a,1-l),new mt(h,1-u),new mt(p,1-g),new mt(m,1-f)]}};function ad(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ur extends tl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ur(t.radius,t.detail)}}class zn extends Se{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let y=0;y<c;y++){const v=y*u-s;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,v=E+c*(f+1),b=E+1+c*(f+1),A=E+1+c*f;p.push(y,v,A),p.push(v,b,A)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}class il extends Se{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/r,p=new L,g=new mt;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,y=E,v=E+n+1,b=E+n+2,A=E+1;a.push(y,v,A),a.push(v,b,A)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _n extends Se{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],y=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const A=b/e;u.x=-t*Math.cos(r+A*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-y),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const y=h[f][E+1],v=h[f][E],b=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&p.push(y,v,A),(f!==n-1||l<Math.PI)&&p.push(v,b,A)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yr extends Se{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,E=(r+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rl extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ld extends rl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cd extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ud extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fu extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hd extends fu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new de,Jl=new L,jl=new L;class fd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class du extends jc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dd extends fd{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new dd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class md extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Ql(i,t,e,n){const r=gd(n);switch(e){case kc:return i*t;case Xa:return i*t/r.components*r.byteLength;case qa:return i*t/r.components*r.byteLength;case Gc:return i*t*2/r.components*r.byteLength;case Ya:return i*t*2/r.components*r.byteLength;case Hc:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case $a:return i*t*4/r.components*r.byteLength;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case sa:return Math.max(i,16)*Math.max(t,8)/4;case na:case ra:return Math.max(i,8)*Math.max(t,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Ta:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gd(i){switch(i){case Rn:case Fc:return{byteLength:1,components:1};case Or:case Oc:case ts:return{byteLength:2,components:1};case Va:case Wa:return{byteLength:2,components:4};case Ti:case Ga:case En:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);function pu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function _d(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,_p=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,wm=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Lm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Im=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Um=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Fm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Om=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Bm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,km=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Gm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vm=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Wm=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Xm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,qm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$m=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Zm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Yt={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:yd,alphamap_pars_fragment:Md,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:Td,aomap_pars_fragment:bd,batching_pars_vertex:wd,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Hd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:$d,colorspace_pars_fragment:Kd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:up,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:rp,gradientmap_pars_fragment:sp,lightmap_pars_fragment:op,lights_lambert_fragment:ap,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:hp,lights_toon_pars_fragment:fp,lights_phong_fragment:dp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:vp,lights_fragment_end:xp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Dp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:zp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:$p,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:rm,skinning_vertex:sm,skinnormal_vertex:om,specularmap_fragment:am,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:um,transmission_fragment:hm,transmission_pars_fragment:fm,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:ym,cube_vert:Mm,cube_frag:Sm,depth_vert:Em,depth_frag:Tm,distanceRGBA_vert:bm,distanceRGBA_frag:wm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Dm,meshbasic_frag:Lm,meshlambert_vert:Im,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:km,meshphysical_vert:Hm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:$m,sprite_vert:Km,sprite_frag:Zm},_t={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Sn={basic:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:He([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:He([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:He([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:He([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:He([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:He([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:He([_t.common,_t.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:He([_t.lights,_t.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Sn.physical={uniforms:He([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Cs={r:0,b:0,g:0},mi=new sn,Jm=new de;function jm(i,t,e,n,r,s,o){const a=new It(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?f(a,l):b&&b.isColor&&(f(b,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===js)?(h===void 0&&(h=new Gt(new Hn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ur(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(mi)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,(u!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Gt(new zn(2,2),new yn({name:"BackgroundMaterial",uniforms:ur(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Cs,Jc(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m,dispose:E}}function Qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,C,N,I,G){let B=!1;const H=u(I,N,C);s!==H&&(s=H,c(s.object)),B=p(M,I,N,G),B&&g(M,I,N,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,C,N,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,N){const I=N.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let B=G[C.id];B===void 0&&(B={},G[C.id]=B);let H=B[I];return H===void 0&&(H=d(l()),B[I]=H),H}function d(M){const C=[],N=[],I=[];for(let G=0;G<e;G++)C[G]=0,N[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,C,N,I){const G=s.attributes,B=C.attributes;let H=0;const Y=N.getAttributes();for(const F in Y)if(Y[F].location>=0){const tt=G[F];let ft=B[F];if(ft===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(M,C,N,I){const G={},B=C.attributes;let H=0;const Y=N.getAttributes();for(const F in Y)if(Y[F].location>=0){let tt=B[F];tt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));const ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),G[F]=ft,H++}s.attributes=G,s.attributesNum=H,s.index=I}function _(){const M=s.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const N=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;N[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),G[M]!==C&&(i.vertexAttribDivisor(M,C),G[M]=C)}function E(){const M=s.newAttributes,C=s.enabledAttributes;for(let N=0,I=C.length;N<I;N++)C[N]!==M[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(M,C,N,I,G,B,H){H===!0?i.vertexAttribIPointer(M,C,N,G,B):i.vertexAttribPointer(M,C,N,I,G,B)}function v(M,C,N,I){_();const G=I.attributes,B=N.getAttributes(),H=C.defaultAttributeValues;for(const Y in B){const F=B[Y];if(F.location>=0){let j=G[Y];if(j===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const tt=j.normalized,ft=j.itemSize,Nt=t.get(j);if(Nt===void 0)continue;const Wt=Nt.buffer,te=Nt.type,jt=Nt.bytesPerElement,K=te===i.INT||te===i.UNSIGNED_INT||j.gpuType===Ga;if(j.isInterleavedBufferAttribute){const nt=j.data,Mt=nt.stride,Pt=j.offset;if(nt.isInstancedInterleavedBuffer){for(let Et=0;Et<F.locationSize;Et++)f(F.location+Et,nt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Et=0;Et<F.locationSize;Et++)m(F.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Et=0;Et<F.locationSize;Et++)y(F.location+Et,ft/F.locationSize,te,tt,Mt*jt,(Pt+ft/F.locationSize*Et)*jt,K)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)f(F.location+nt,j.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let nt=0;nt<F.locationSize;nt++)y(F.location+nt,ft/F.locationSize,te,tt,ft*jt,ft/F.locationSize*nt*jt,K)}}else if(H!==void 0){const tt=H[Y];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(F.location,tt);break;case 3:i.vertexAttrib3fv(F.location,tt);break;case 4:i.vertexAttrib4fv(F.location,tt);break;default:i.vertexAttrib1fv(F.location,tt)}}}}E()}function b(){P();for(const M in n){const C=n[M];for(const N in C){const I=C[N];for(const G in I)h(I[G].object),delete I[G];delete C[N]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const N in C){const I=C[N];for(const G in I)h(I[G].object),delete I[G];delete C[N]}delete n[M.id]}function R(M){for(const C in n){const N=n[C];if(N[M.id]===void 0)continue;const I=N[M.id];for(const G in I)h(I[G].object),delete I[G];delete N[M.id]}}function P(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function t0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:A}}function n0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new vi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const E=s?0:n,y=E*4;let v=f.clippingState||null;l.value=v,v=h(g,d,y,p);for(let b=0;b!==y;++b)v[b]=e[b];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function i0(i){let t=new WeakMap;function e(o,a){return a===Qo?o.mapping=ar:a===ta&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qo||a===ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const er=4,tc=[.125,.215,.35,.446,.526,.582],Mi=20,Uo=new du,ec=new It;let No=null,Fo=0,Oo=0,Bo=!1;const xi=(1+Math.sqrt(5))/2,$i=1/xi,nc=[new L(-xi,$i,0),new L(xi,$i,0),new L(-$i,0,xi),new L($i,0,xi),new L(0,xi,-$i),new L(0,xi,$i),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],r0=new L;class ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=r0}=s;No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ts,format:fn,colorSpace:cr,depthBuffer:!1},r=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(s)),this._blurMaterial=o0(s,t,e)}return r}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,r,s){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ec),u.toneMapping=ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Qs({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Gt(new Hn,_);let f=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(ec),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const b=this._cubeSize;Ps(r,v*b,y>2?b:0,b,b),u.setRenderTarget(r),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ar||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nc[(r-s-1)%nc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const f=[];let E=0;for(let R=0;R<Mi;++R){const P=R/_,x=Math.exp(-P*P/2);f.push(x),R===0?E+=x:R<m&&(E+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[r],b=3*v*(r>y-er?r-y+er:0),A=4*(this._cubeSize-v);Ps(e,b,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Uo)}}function s0(i){const t=[],e=[],n=[];let r=i;const s=i-er+1+tc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-er?l=tc[o-i+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,x=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];E.set(x,_*g*A),y.set(d,m*g*A);const M=[A,A,A,A,A,A];v.set(M,f*g*A)}const b=new Se;b.setAttribute("position",new Ke(E,_)),b.setAttribute("uv",new Ke(y,m)),b.setAttribute("faceIndex",new Ke(v,f)),t.push(b),r>er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function o0(i,t,e){const n=new Float32Array(Mi),r=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sc(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function oc(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function a0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qo||l===ta,h=l===ar||l===lr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ic(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new ic(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function l0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function c0(i,t,e,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let y=0,v=E.length;y<v;y+=3){const b=E[y+0],A=E[y+1],R=E[y+2];d.push(b,A,A,R,R,b)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const b=y+0,A=y+1,R=y+2;d.push(b,A,A,R,R,b)}}else return;const m=new(Xc(d)?Zc:Kc)(d,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function u0(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function f0(i,t,e){const n=new WeakMap,r=new ye;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*A*4*u),P=new qc(R,b,A,u);P.type=En,P.needsUpdate=!0;const x=v*4;for(let C=0;C<u;C++){const N=f[C],I=E[C],G=y[C],B=b*A*4*C;for(let H=0;H<N.count;H++){const Y=H*x;g===!0&&(r.fromBufferAttribute(N,H),R[B+Y+0]=r.x,R[B+Y+1]=r.y,R[B+Y+2]=r.z,R[B+Y+3]=0),_===!0&&(r.fromBufferAttribute(I,H),R[B+Y+4]=r.x,R[B+Y+5]=r.y,R[B+Y+6]=r.z,R[B+Y+7]=0),m===!0&&(r.fromBufferAttribute(G,H),R[B+Y+8]=r.x,R[B+Y+9]=r.y,R[B+Y+10]=r.z,R[B+Y+11]=G.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new mt(b,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function d0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const mu=new Oe,ac=new nu(1,1),gu=new qc,_u=new nf,vu=new Qc,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),fc=new Float32Array(4);function pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=lc[r];if(s===void 0&&(s=new Float32Array(r),lc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function v0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),Te(e,n)}}function x0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),Te(e,n)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),Te(e,n)}}function M0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function b0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function C0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=Wc,s=ac):s=mu,e.setTexture2D(t||s,r)}function P0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_u,r)}function D0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||vu,r)}function L0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||gu,r)}function I0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return b0;case 36294:return w0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}function U0(i,t){i.uniform1fv(this.addr,t)}function N0(i,t){const e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function F0(i,t){const e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function O0(i,t){const e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function B0(i,t){const e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function z0(i,t){const e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function k0(i,t){const e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function H0(i,t){i.uniform1iv(this.addr,t)}function G0(i,t){i.uniform2iv(this.addr,t)}function V0(i,t){i.uniform3iv(this.addr,t)}function W0(i,t){i.uniform4iv(this.addr,t)}function X0(i,t){i.uniform1uiv(this.addr,t)}function q0(i,t){i.uniform2uiv(this.addr,t)}function Y0(i,t){i.uniform3uiv(this.addr,t)}function $0(i,t){i.uniform4uiv(this.addr,t)}function K0(i,t,e){const n=this.cache,r=t.length,s=to(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||mu,s[o])}function Z0(i,t,e){const n=this.cache,r=t.length,s=to(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||_u,s[o])}function J0(i,t,e){const n=this.cache,r=t.length,s=to(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||vu,s[o])}function j0(i,t,e){const n=this.cache,r=t.length,s=to(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||gu,s[o])}function Q0(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return G0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return j0}}class tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=I0(e.type)}}class eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q0(e.type)}}class ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function dc(i,t){i.seq.push(t),i.map[t.id]=t}function ig(i,t,e){const n=i.name,r=n.length;for(zo.lastIndex=0;;){const s=zo.exec(n),o=zo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dc(e,c===void 0?new tg(a,i,t):new eg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ng(a),dc(e,u)),e=u}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ig(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const rg=37297;let sg=0;function og(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const mc=new qt;function ag(i){ie._getMatrix(mc,ie.workingColorSpace,i);const t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+og(i.getShaderSource(t),a)}else return s}function lg(i,t){const e=ag(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cg(i,t){let e;switch(t){case gh:e="Linear";break;case _h:e="Reinhard";break;case vh:e="Cineon";break;case Uc:e="ACESFilmic";break;case yh:e="AgX";break;case Mh:e="Neutral";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new L;function ug(){ie.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function fg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rr(i){return i!==""}function _c(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(pg,gg)}const mg=new Map;function gg(i,t){let e=Yt[t];if(e===void 0){const n=mg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(_g,vg)}function vg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function yg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case lr:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===lr&&(t="ENVMAP_MODE_REFRACTION"),t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ic:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xg(e),c=yg(e),h=Mg(e),u=Sg(e),d=Eg(e),p=hg(e),g=fg(s),_=r.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ni?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Ia(o),o=_c(o,e),o=vc(o,e),a=Ia(a),a=_c(a,e),a=vc(a,e),o=xc(o),a=xc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,v=E+f+a,b=pc(r,r.VERTEX_SHADER,y),A=pc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(b)||"",G=r.getShaderInfoLog(A)||"",B=N.trim(),H=I.trim(),Y=G.trim();let F=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,A);else{const tt=gc(r,b,"vertex"),ft=gc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+tt+`
`+ft)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||Y==="")&&(j=!1);j&&(C.diagnostics={runnable:F,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(b),r.deleteShader(A),P=new ks(r,_),x=dg(r,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,rg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let bg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ag(t),e.set(t,n)),n}}class Ag{constructor(t){this.id=bg++,this.code=t,this.usedTimes=0}}function Rg(i,t,e,n,r,s,o){const a=new Yc,l=new wg,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,N,I){const G=N.fog,B=I.geometry,H=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||H),F=Y&&Y.mapping===js?Y.image.height:null,j=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=tt!==void 0?tt.length:0;let Nt=0;B.morphAttributes.position!==void 0&&(Nt=1),B.morphAttributes.normal!==void 0&&(Nt=2),B.morphAttributes.color!==void 0&&(Nt=3);let Wt,te,jt,K;if(j){const se=Sn[j];Wt=se.vertexShader,te=se.fragmentShader}else Wt=x.vertexShader,te=x.fragmentShader,l.update(x),jt=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const nt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Pt=I.isInstancedMesh===!0,Et=I.isBatchedMesh===!0,$t=!!x.map,ae=!!x.matcap,D=!!Y,it=!!x.aoMap,Q=!!x.lightMap,J=!!x.bumpMap,Z=!!x.normalMap,pt=!!x.displacementMap,st=!!x.emissiveMap,ht=!!x.metalnessMap,Ft=!!x.roughnessMap,Bt=x.anisotropy>0,w=x.clearcoat>0,S=x.dispersion>0,k=x.iridescence>0,q=x.sheen>0,rt=x.transmission>0,$=Bt&&!!x.anisotropyMap,bt=w&&!!x.clearcoatMap,dt=w&&!!x.clearcoatNormalMap,At=w&&!!x.clearcoatRoughnessMap,Rt=k&&!!x.iridescenceMap,ot=k&&!!x.iridescenceThicknessMap,yt=q&&!!x.sheenColorMap,kt=q&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,vt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,U=rt&&!!x.transmissionMap,ut=rt&&!!x.thicknessMap,gt=!!x.gradientMap,Tt=!!x.alphaMap,at=x.alphaTest>0,et=!!x.alphaHash,Ct=!!x.extensions;let Vt=ni;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const he={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:te,defines:x.defines,customVertexShaderID:jt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Et,batchingColor:Et&&I._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&I.instanceColor!==null,instancingMorph:Pt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:cr,alphaToCoverage:!!x.alphaToCoverage,map:$t,matcap:ae,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:F,aoMap:it,lightMap:Q,bumpMap:J,normalMap:Z,displacementMap:d&&pt,emissiveMap:st,normalMapObjectSpace:Z&&x.normalMapType===bh,normalMapTangentSpace:Z&&x.normalMapType===Vc,metalnessMap:ht,roughnessMap:Ft,anisotropy:Bt,anisotropyMap:$,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:S,iridescence:k,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:q,sheenColorMap:yt,sheenRoughnessMap:kt,specularMap:Dt,specularColorMap:vt,specularIntensityMap:Xt,transmission:rt,transmissionMap:U,thicknessMap:ut,gradientMap:gt,opaque:x.transparent===!1&&x.blending===ir&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:at,alphaHash:et,combine:x.combine,mapUv:$t&&_(x.map.channel),aoMapUv:it&&_(x.aoMap.channel),lightMapUv:Q&&_(x.lightMap.channel),bumpMapUv:J&&_(x.bumpMap.channel),normalMapUv:Z&&_(x.normalMap.channel),displacementMapUv:pt&&_(x.displacementMap.channel),emissiveMapUv:st&&_(x.emissiveMap.channel),metalnessMapUv:ht&&_(x.metalnessMap.channel),roughnessMapUv:Ft&&_(x.roughnessMap.channel),anisotropyMapUv:$&&_(x.anisotropyMap.channel),clearcoatMapUv:bt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(x.sheenRoughnessMap.channel),specularMapUv:Dt&&_(x.specularMap.channel),specularColorMapUv:vt&&_(x.specularColorMap.channel),specularIntensityMapUv:Xt&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ut&&_(x.thicknessMap.channel),alphaMapUv:Tt&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Z||Bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&($t||Tt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:$t&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(E(M,x),y(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function E(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let C;if(M){const N=Sn[M];C=_f.clone(N.uniforms)}else C=x.uniforms;return C}function b(x,M){let C;for(let N=0,I=h.length;N<I;N++){const G=h[N];if(G.cacheKey===M){C=G,++C.usedTimes;break}}return C===void 0&&(C=new Tg(i,M,x,s),h.push(C)),C}function A(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:b,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function Cg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Pg),n.length>1&&n.sort(d||Mc),r.length>1&&r.sort(d||Mc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Dg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Sc,i.set(n,[o])):r>=s.length?(o=new Sc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ig(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ug=0;function Ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fg(i){const t=new Lg,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new de,o=new de;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,y=0,v=0,b=0,A=0,R=0;c.sort(Ng);for(let x=0,M=c.length;x<M;x++){const C=c[x],N=C.color,I=C.intensity,G=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*I,u+=N.g*I,d+=N.b*I;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],I);R++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,F=e.get(C);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=H,p++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(I),H.distance=G,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const Y=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const F=e.get(C);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=B,v++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(N).multiplyScalar(I),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Y=C.shadow,F=e.get(C);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(I),H.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=R,n.version=Ug++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ec(i){const t=new Fg(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Og(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ec(i),t.set(r,[a])):s>=o.length?(a=new Ec(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
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
}`;function kg(i,t,e){let n=new ja;const r=new mt,s=new mt,o=new ye,a=new cd({depthPacking:Th}),l=new ud,c={},h=e.maxTextureSize,u={[oi]:Ve,[Ve]:oi,[un]:un},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Bg,fragmentShader:zg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let f=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=f!==On&&this.type===On,G=f===On&&this.type!==On;for(let B=0,H=A.length;B<H;B++){const Y=A[B],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null||I===!0||G===!0){const ft=this.type!==On?{minFilter:rn,magFilter:rn}:{};F.map!==null&&F.map.dispose(),F.map=new wi(r.x,r.y,ft),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const tt=F.getViewportCount();for(let ft=0;ft<tt;ft++){const Nt=F.getViewport(ft);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),N.viewport(o),F.updateMatrices(Y,ft),n=F.getFrustum(),v(R,P,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===On&&E(F,P),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,C)};function E(A,R){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,p,_,null)}function y(A,R,P,x){let M=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,I=R.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let B=G[I];B===void 0&&(B=M.clone(),G[I]=B,R.addEventListener("dispose",b)),M=B}if(M.visible=R.visible,M.wireframe=R.wireframe,x===On?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=P}return M}function v(A,R,P,x,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const I=t.update(A),G=A.material;if(Array.isArray(G)){const B=I.groups;for(let H=0,Y=B.length;H<Y;H++){const F=B[H],j=G[F.materialIndex];if(j&&j.visible){const tt=y(A,j,x,M);A.onBeforeShadow(i,A,R,P,I,tt,F),i.renderBufferDirect(P,null,I,tt,A,F),A.onAfterShadow(i,A,R,P,I,tt,F)}}}else if(G.visible){const B=y(A,G,x,M);A.onBeforeShadow(i,A,R,P,I,B,null),i.renderBufferDirect(P,null,I,B,A,null),A.onAfterShadow(i,A,R,P,I,B,null)}}const N=A.children;for(let I=0,G=N.length;I<G;I++)v(N[I],R,P,x,M)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const x=c[P],M=A.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Hg={[qo]:Yo,[$o]:Jo,[Ko]:jo,[or]:Zo,[Yo]:qo,[Jo]:$o,[jo]:Ko,[Zo]:or};function Gg(i,t){function e(){let U=!1;const ut=new ye;let gt=null;const Tt=new ye(0,0,0,0);return{setMask:function(at){gt!==at&&!U&&(i.colorMask(at,at,at,at),gt=at)},setLocked:function(at){U=at},setClear:function(at,et,Ct,Vt,he){he===!0&&(at*=Vt,et*=Vt,Ct*=Vt),ut.set(at,et,Ct,Vt),Tt.equals(ut)===!1&&(i.clearColor(at,et,Ct,Vt),Tt.copy(ut))},reset:function(){U=!1,gt=null,Tt.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,gt=null,Tt=null,at=null;return{setReversed:function(et){if(ut!==et){const Ct=t.get("EXT_clip_control");et?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ut=et;const Vt=at;at=null,this.setClear(Vt)}},getReversed:function(){return ut},setTest:function(et){et?nt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(et){gt!==et&&!U&&(i.depthMask(et),gt=et)},setFunc:function(et){if(ut&&(et=Hg[et]),Tt!==et){switch(et){case qo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=et}},setLocked:function(et){U=et},setClear:function(et){at!==et&&(ut&&(et=1-et),i.clearDepth(et),at=et)},reset:function(){U=!1,gt=null,Tt=null,at=null,ut=!1}}}function r(){let U=!1,ut=null,gt=null,Tt=null,at=null,et=null,Ct=null,Vt=null,he=null;return{setTest:function(se){U||(se?nt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(se){ut!==se&&!U&&(i.stencilMask(se),ut=se)},setFunc:function(se,Pn,Mn){(gt!==se||Tt!==Pn||at!==Mn)&&(i.stencilFunc(se,Pn,Mn),gt=se,Tt=Pn,at=Mn)},setOp:function(se,Pn,Mn){(et!==se||Ct!==Pn||Vt!==Mn)&&(i.stencilOp(se,Pn,Mn),et=se,Ct=Pn,Vt=Mn)},setLocked:function(se){U=se},setClear:function(se){he!==se&&(i.clearStencil(se),he=se)},reset:function(){U=!1,ut=null,gt=null,Tt=null,at=null,et=null,Ct=null,Vt=null,he=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,b=null,A=null,R=new It(0,0,0),P=0,x=!1,M=null,C=null,N=null,I=null,G=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=Y>=2);let j=null,tt={};const ft=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Wt=new ye().fromArray(ft),te=new ye().fromArray(Nt);function jt(U,ut,gt,Tt){const at=new Uint8Array(4),et=i.createTexture();i.bindTexture(U,et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<gt;Ct++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ut+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return et}const K={};K[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(or),J(!1),Z(vl),nt(i.CULL_FACE),it(ei);function nt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Mt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pt(U,ut){return u[U]!==ut?(i.bindFramebuffer(U,ut),u[U]=ut,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Et(U,ut){let gt=p,Tt=!1;if(U){gt=d.get(ut),gt===void 0&&(gt=[],d.set(ut,gt));const at=U.textures;if(gt.length!==at.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Ct=at.length;et<Ct;et++)gt[et]=i.COLOR_ATTACHMENT0+et;gt.length=at.length,Tt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(gt)}function $t(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ae={[yi]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};ae[Qu]=i.MIN,ae[th]=i.MAX;const D={[eh]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[sh]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function it(U,ut,gt,Tt,at,et,Ct,Vt,he,se){if(U===ei){_===!0&&(Mt(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),U!==Zu){if(U!==m||se!==x){if((f!==yi||v!==yi)&&(i.blendEquation(i.FUNC_ADD),f=yi,v=yi),se)switch(U){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,b=null,A=null,R.set(0,0,0),P=0,m=U,x=se}return}at=at||ut,et=et||gt,Ct=Ct||Tt,(ut!==f||at!==v)&&(i.blendEquationSeparate(ae[ut],ae[at]),f=ut,v=at),(gt!==E||Tt!==y||et!==b||Ct!==A)&&(i.blendFuncSeparate(D[gt],D[Tt],D[et],D[Ct]),E=gt,y=Tt,b=et,A=Ct),(Vt.equals(R)===!1||he!==P)&&(i.blendColor(Vt.r,Vt.g,Vt.b,he),R.copy(Vt),P=he),m=U,x=!1}function Q(U,ut){U.side===un?Mt(i.CULL_FACE):nt(i.CULL_FACE);let gt=U.side===Ve;ut&&(gt=!gt),J(gt),U.blending===ir&&U.transparent===!1?it(ei):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Tt=U.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),st(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Z(U){U!==$u?(nt(i.CULL_FACE),U!==C&&(U===vl?i.cullFace(i.BACK):U===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),C=U}function pt(U){U!==N&&(H&&i.lineWidth(U),N=U)}function st(U,ut,gt){U?(nt(i.POLYGON_OFFSET_FILL),(I!==ut||G!==gt)&&(i.polygonOffset(ut,gt),I=ut,G=gt)):Mt(i.POLYGON_OFFSET_FILL)}function ht(U){U?nt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Ft(U){U===void 0&&(U=i.TEXTURE0+B-1),j!==U&&(i.activeTexture(U),j=U)}function Bt(U,ut,gt){gt===void 0&&(j===null?gt=i.TEXTURE0+B-1:gt=j);let Tt=tt[gt];Tt===void 0&&(Tt={type:void 0,texture:void 0},tt[gt]=Tt),(Tt.type!==U||Tt.texture!==ut)&&(j!==gt&&(i.activeTexture(gt),j=gt),i.bindTexture(U,ut||K[U]),Tt.type=U,Tt.texture=ut)}function w(){const U=tt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(U){Wt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function kt(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Dt(U,ut){let gt=c.get(ut);gt===void 0&&(gt=new WeakMap,c.set(ut,gt));let Tt=gt.get(U);Tt===void 0&&(Tt=i.getUniformBlockIndex(ut,U.name),gt.set(U,Tt))}function vt(U,ut){const Tt=c.get(ut).get(U);l.get(ut)!==Tt&&(i.uniformBlockBinding(ut,Tt,U.__bindingPointIndex),l.set(ut,Tt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,tt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,b=null,A=null,R=new It(0,0,0),P=0,x=!1,M=null,C=null,N=null,I=null,G=null,Wt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:Mt,bindFramebuffer:Pt,drawBuffers:Et,useProgram:$t,setBlending:it,setMaterial:Q,setFlipSided:J,setCullFace:Z,setLineWidth:pt,setPolygonOffset:st,setScissorTest:ht,activeTexture:Ft,bindTexture:Bt,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Rt,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:vt,texStorage2D:dt,texStorage3D:At,texSubImage2D:q,texSubImage3D:rt,compressedTexSubImage2D:$,compressedTexSubImage3D:bt,scissor:yt,viewport:kt,reset:Xt}}function Vg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):Ws("canvas")}function _(w,S,k){let q=1;const rt=Bt(w);if((rt.width>k||rt.height>k)&&(q=k/Math.max(rt.width,rt.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(q*rt.width),bt=Math.floor(q*rt.height);u===void 0&&(u=g($,bt));const dt=S?g($,bt):u;return dt.width=$,dt.height=bt,dt.getContext("2d").drawImage(w,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+$+"x"+bt+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,S,k,q,rt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),S===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const bt=rt?Gs:ie.getTransfer(q);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=bt===ce?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(w,S){let k;return w?S===null||S===Ti||S===Br?k=i.DEPTH24_STENCIL8:S===En?k=i.DEPTH32F_STENCIL8:S===Or&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===Br?k=i.DEPTH_COMPONENT24:S===En?k=i.DEPTH_COMPONENT32F:S===Or&&(k=i.DEPTH_COMPONENT16),k}function b(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function R(w){const S=w.target;S.removeEventListener("dispose",R),M(S)}function P(w){const S=n.get(w);if(S.__webglInit===void 0)return;const k=w.source,q=d.get(k);if(q){const rt=q[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&x(w),Object.keys(q).length===0&&d.delete(k)}n.remove(w)}function x(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const k=w.source,q=d.get(k);delete q[S.__cacheKey],o.memory.textures--}function M(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let rt=0;rt<S.__webglFramebuffer[q].length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[q][rt]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=w.textures;for(let q=0,rt=k.length;q<rt;q++){const $=n.get(k[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(w)}let C=0;function N(){C=0}function I(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function B(w,S){const k=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,w,S);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function H(w,S){const k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){K(k,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function Y(w,S){const k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){K(k,w,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function F(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){nt(k,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const j={[Hs]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},tt={[rn]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},ft={[wh]:i.NEVER,[Lh]:i.ALWAYS,[Ah]:i.LESS,[Wc]:i.LEQUAL,[Rh]:i.EQUAL,[Dh]:i.GEQUAL,[Ch]:i.GREATER,[Ph]:i.NOTEQUAL};function Nt(w,S){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===oo||S.magFilter===as||S.magFilter===Qn||S.minFilter===hn||S.minFilter===oo||S.minFilter===as||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,tt[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==as&&S.minFilter!==Qn||S.type===En&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Wt(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let rt=d.get(q);rt===void 0&&(rt={},d.set(q,rt));const $=G(S);if($!==w.__cacheKey){rt[$]===void 0&&(rt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[$].usedTimes++;const bt=rt[w.__cacheKey];bt!==void 0&&(rt[w.__cacheKey].usedTimes--,bt.usedTimes===0&&x(S)),w.__cacheKey=$,w.__webglTexture=rt[$].texture}return k}function te(w,S,k){return Math.floor(Math.floor(w/k)/S)}function jt(w,S,k,q){const $=w.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{$.sort((ot,yt)=>ot.start-yt.start);let bt=0;for(let ot=1;ot<$.length;ot++){const yt=$[bt],kt=$[ot],Dt=yt.start+yt.count,vt=te(kt.start,S.width,4),Xt=te(yt.start,S.width,4);kt.start<=Dt+1&&vt===Xt&&te(kt.start+kt.count-1,S.width,4)===vt?yt.count=Math.max(yt.count,kt.start+kt.count-yt.start):(++bt,$[bt]=kt)}$.length=bt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ot=0,yt=$.length;ot<yt;ot++){const kt=$[ot],Dt=Math.floor(kt.start/4),vt=Math.ceil(kt.count/4),Xt=Dt%S.width,U=Math.floor(Dt/S.width),ut=vt,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Xt,U,ut,gt,k,q,S.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function K(w,S,k){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const rt=Wt(w,S),$=S.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+k);const bt=n.get($);if($.version!==bt.__version||rt===!0){e.activeTexture(i.TEXTURE0+k);const dt=ie.getPrimaries(ie.workingColorSpace),At=S.colorSpace===Jn?null:ie.getPrimaries(S.colorSpace),Rt=S.colorSpace===Jn||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=_(S.image,!1,r.maxTextureSize);ot=Ft(S,ot);const yt=s.convert(S.format,S.colorSpace),kt=s.convert(S.type);let Dt=y(S.internalFormat,yt,kt,S.colorSpace,S.isVideoTexture);Nt(q,S);let vt;const Xt=S.mipmaps,U=S.isVideoTexture!==!0,ut=bt.__version===void 0||rt===!0,gt=$.dataReady,Tt=b(S,ot);if(S.isDepthTexture)Dt=v(S.format===kr,S.type),ut&&(U?e.texStorage2D(i.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,kt,null));else if(S.isDataTexture)if(Xt.length>0){U&&ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Dt,Xt[0].width,Xt[0].height);for(let at=0,et=Xt.length;at<et;at++)vt=Xt[at],U?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,yt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Dt,vt.width,vt.height,0,yt,kt,vt.data);S.generateMipmaps=!1}else U?(ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Dt,ot.width,ot.height),gt&&jt(S,ot,yt,kt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,kt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Dt,Xt[0].width,Xt[0].height,ot.depth);for(let at=0,et=Xt.length;at<et;at++)if(vt=Xt[at],S.format!==fn)if(yt!==null)if(U){if(gt)if(S.layerUpdates.size>0){const Ct=Ql(vt.width,vt.height,S.format,S.type);for(const Vt of S.layerUpdates){const he=vt.data.subarray(Vt*Ct/vt.data.BYTES_PER_ELEMENT,(Vt+1)*Ct/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Vt,vt.width,vt.height,1,yt,he)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,ot.depth,yt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Dt,vt.width,vt.height,ot.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,ot.depth,yt,kt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Dt,vt.width,vt.height,ot.depth,0,yt,kt,vt.data)}else{U&&ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Dt,Xt[0].width,Xt[0].height);for(let at=0,et=Xt.length;at<et;at++)vt=Xt[at],S.format!==fn?yt!==null?U?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,yt,kt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Dt,vt.width,vt.height,0,yt,kt,vt.data)}else if(S.isDataArrayTexture)if(U){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Dt,ot.width,ot.height,ot.depth),gt)if(S.layerUpdates.size>0){const at=Ql(ot.width,ot.height,S.format,S.type);for(const et of S.layerUpdates){const Ct=ot.data.subarray(et*at/ot.data.BYTES_PER_ELEMENT,(et+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,yt,kt,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,kt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,yt,kt,ot.data);else if(S.isData3DTexture)U?(ut&&e.texStorage3D(i.TEXTURE_3D,Tt,Dt,ot.width,ot.height,ot.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,yt,kt,ot.data);else if(S.isFramebufferTexture){if(ut)if(U)e.texStorage2D(i.TEXTURE_2D,Tt,Dt,ot.width,ot.height);else{let at=ot.width,et=ot.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Dt,at,et,0,yt,kt,null),at>>=1,et>>=1}}else if(Xt.length>0){if(U&&ut){const at=Bt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Dt,at.width,at.height)}for(let at=0,et=Xt.length;at<et;at++)vt=Xt[at],U?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,yt,kt,vt):e.texImage2D(i.TEXTURE_2D,at,Dt,yt,kt,vt);S.generateMipmaps=!1}else if(U){if(ut){const at=Bt(ot);e.texStorage2D(i.TEXTURE_2D,Tt,Dt,at.width,at.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,kt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Dt,yt,kt,ot);m(S)&&f(q),bt.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function nt(w,S,k){if(S.image.length!==6)return;const q=Wt(w,S),rt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const $=n.get(rt);if(rt.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+k);const bt=ie.getPrimaries(ie.workingColorSpace),dt=S.colorSpace===Jn?null:ie.getPrimaries(S.colorSpace),At=S.colorSpace===Jn||bt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let et=0;et<6;et++)!Rt&&!ot?yt[et]=_(S.image[et],!0,r.maxCubemapSize):yt[et]=ot?S.image[et].image:S.image[et],yt[et]=Ft(S,yt[et]);const kt=yt[0],Dt=s.convert(S.format,S.colorSpace),vt=s.convert(S.type),Xt=y(S.internalFormat,Dt,vt,S.colorSpace),U=S.isVideoTexture!==!0,ut=$.__version===void 0||q===!0,gt=rt.dataReady;let Tt=b(S,kt);Nt(i.TEXTURE_CUBE_MAP,S);let at;if(Rt){U&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Xt,kt.width,kt.height);for(let et=0;et<6;et++){at=yt[et].mipmaps;for(let Ct=0;Ct<at.length;Ct++){const Vt=at[Ct];S.format!==fn?Dt!==null?U?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,Vt.width,Vt.height,Dt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Xt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,Vt.width,Vt.height,Dt,vt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Xt,Vt.width,Vt.height,0,Dt,vt,Vt.data)}}}else{if(at=S.mipmaps,U&&ut){at.length>0&&Tt++;const et=Bt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Xt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){U?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt[et].width,yt[et].height,Dt,vt,yt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Xt,yt[et].width,yt[et].height,0,Dt,vt,yt[et].data);for(let Ct=0;Ct<at.length;Ct++){const he=at[Ct].image[et].image;U?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,he.width,he.height,Dt,vt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Xt,he.width,he.height,0,Dt,vt,he.data)}}else{U?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,vt,yt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Xt,Dt,vt,yt[et]);for(let Ct=0;Ct<at.length;Ct++){const Vt=at[Ct];U?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,Dt,vt,Vt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Xt,Dt,vt,Vt.image[et])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),$.__version=rt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Mt(w,S,k,q,rt,$){const bt=s.convert(k.format,k.colorSpace),dt=s.convert(k.type),At=y(k.internalFormat,bt,dt,k.colorSpace),Rt=n.get(S),ot=n.get(k);if(ot.__renderTarget=S,!Rt.__hasExternalTextures){const yt=Math.max(1,S.width>>$),kt=Math.max(1,S.height>>$);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,$,At,yt,kt,S.depth,0,bt,dt,null):e.texImage2D(rt,$,At,yt,kt,0,bt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,rt,ot.__webglTexture,0,pt(S)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,rt,ot.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const q=S.depthTexture,rt=q&&q.isDepthTexture?q.type:null,$=v(S.stencilBuffer,rt),bt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=pt(S);st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{const q=S.textures;for(let rt=0;rt<q.length;rt++){const $=q[rt],bt=s.convert($.format,$.colorSpace),dt=s.convert($.type),At=y($.internalFormat,bt,dt,$.colorSpace),Rt=pt(S);k&&st(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const rt=q.__webglTexture,$=pt(S);if(S.depthTexture.format===zr)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(S.depthTexture.format===kr)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function $t(w){const S=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",rt)};q.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?Et(S.__webglFramebuffer[0],w):Et(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Pt(S.__webglDepthbuffer[q],w,!1);else{const rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Pt(S.__webglDepthbuffer,w,!1);else{const rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,S,k){const q=n.get(w);S!==void 0&&Mt(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&$t(w)}function D(w){const S=w.texture,k=n.get(w),q=n.get(S);w.addEventListener("dispose",R);const rt=w.textures,$=w.isWebGLCubeRenderTarget===!0,bt=rt.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let At=0;At<S.mipmaps.length;At++)k.__webglFramebuffer[dt][At]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(bt)for(let dt=0,At=rt.length;dt<At;dt++){const Rt=n.get(rt[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&st(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const At=rt[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const Rt=s.convert(At.format,At.colorSpace),ot=s.convert(At.type),yt=y(At.internalFormat,Rt,ot,At.colorSpace,w.isXRRenderTarget===!0),kt=pt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Mt(k.__webglFramebuffer[dt][At],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else Mt(k.__webglFramebuffer[dt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,At=rt.length;dt<At;dt++){const Rt=rt[dt],ot=n.get(Rt);let yt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ot.__webglTexture),Nt(yt,Rt),Mt(k.__webglFramebuffer,w,Rt,i.COLOR_ATTACHMENT0+dt,yt,0),m(Rt)&&f(yt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,q.__webglTexture),Nt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Mt(k.__webglFramebuffer[At],w,S,i.COLOR_ATTACHMENT0,dt,At);else Mt(k.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,dt,0);m(S)&&f(dt),e.unbindTexture()}w.depthBuffer&&$t(w)}function it(w){const S=w.textures;for(let k=0,q=S.length;k<q;k++){const rt=S[k];if(m(rt)){const $=E(w),bt=n.get(rt).__webglTexture;e.bindTexture($,bt),f($),e.unbindTexture()}}}const Q=[],J=[];function Z(w){if(w.samples>0){if(st(w)===!1){const S=w.textures,k=w.width,q=w.height;let rt=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),dt=S.length>1;if(dt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const At=w.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const ot=n.get(S[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,rt,i.NEAREST),l===!0&&(Q.length=0,J.length=0,Q.push(i.COLOR_ATTACHMENT0+Rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push($),J.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const ot=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pt(w){return Math.min(r.maxSamples,w.samples)}function st(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ft(w,S){const k=w.colorSpace,q=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==cr&&k!==Jn&&(ie.getTransfer(k)===ce?(q!==fn||rt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=F,this.rebindTextures=ae,this.setupRenderTarget=D,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=st}function Wg(i,t){function e(n,r=Jn){let s;const o=ie.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===fn)return i.RGBA;if(n===zr)return i.DEPTH_COMPONENT;if(n===kr)return i.DEPTH_STENCIL;if(n===Xa)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Fs||n===Os||n===Bs||n===zs)if(o===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===ra||n===sa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oa||n===aa)return o===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ca)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===da)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Ta||n===ba)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ea)return o===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wa||n===Aa||n===Ra||n===Ca)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===wa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends dr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Yg,f={},E=e.getContextAttributes();let y=null,v=null;const b=[],A=[],R=new mt;let P=null;const x=new cn;x.viewport=new ye;const M=new cn;M.viewport=new ye;const C=[x,M],N=new md;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=b[K];return nt===void 0&&(nt=new Ro,b[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=b[K];return nt===void 0&&(nt=new Ro,b[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=b[K];return nt===void 0&&(nt=new Ro,b[K]=nt),nt.getHandSpace()};function B(K){const nt=A.indexOf(K.inputSource);if(nt===-1)return;const Mt=b[nt];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||o),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const nt=A[K];nt!==null&&(A[K]=null,b[K].disconnect(nt))}I=null,G=null,m.reset();for(const K in f)delete f[K];t.setRenderTarget(y),p=null,d=null,u=null,r=null,v=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),E.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=E.stencil?kr:zr,Pt=E.stencil?Br:Ti);const $t={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer($t),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new wi(d.textureWidth,d.textureHeight,{format:fn,type:Rn,depthTexture:new nu(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Mt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new wi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),jt.setContext(r),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(K){for(let nt=0;nt<K.removed.length;nt++){const Mt=K.removed[nt],Pt=A.indexOf(Mt);Pt>=0&&(A[Pt]=null,b[Pt].disconnect(Mt))}for(let nt=0;nt<K.added.length;nt++){const Mt=K.added[nt];let Pt=A.indexOf(Mt);if(Pt===-1){for(let $t=0;$t<b.length;$t++)if($t>=A.length){A.push(Mt),Pt=$t;break}else if(A[$t]===null){A[$t]=Mt,Pt=$t;break}if(Pt===-1)break}const Et=b[Pt];Et&&Et.connect(Mt)}}const F=new L,j=new L;function tt(K,nt,Mt){F.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);const Pt=F.distanceTo(j),Et=nt.projectionMatrix.elements,$t=Mt.projectionMatrix.elements,ae=Et[14]/(Et[10]-1),D=Et[14]/(Et[10]+1),it=(Et[9]+1)/Et[5],Q=(Et[9]-1)/Et[5],J=(Et[8]-1)/Et[0],Z=($t[8]+1)/$t[0],pt=ae*J,st=ae*Z,ht=Pt/(-J+Z),Ft=ht*-J;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ft),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Bt=ae+ht,w=D+ht,S=pt-Ft,k=st+(Pt-Ft),q=it*D/w*Bt,rt=Q*D/w*Bt;K.projectionMatrix.makePerspective(S,k,q,rt,Bt,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ft(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let nt=K.near,Mt=K.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),N.near=M.near=x.near=nt,N.far=M.far=x.far=Mt,(I!==N.near||G!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,G=N.far),N.layers.mask=K.layers.mask|6,x.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Pt=K.parent,Et=N.cameras;ft(N,Pt);for(let $t=0;$t<Et.length;$t++)ft(Et[$t],Pt);Et.length===2?tt(N,x,M):N.projectionMatrix.copy(x.projectionMatrix),Nt(K,N,Pt)};function Nt(K,nt,Mt){Mt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return f[K]};let Wt=null;function te(K,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Pt=!1;Mt.length!==N.cameras.length&&(N.cameras.length=0,Pt=!0);for(let D=0;D<Mt.length;D++){const it=Mt[D];let Q=null;if(p!==null)Q=p.getViewport(it);else{const Z=u.getViewSubImage(d,it);Q=Z.viewport,D===0&&(t.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(v))}let J=C[D];J===void 0&&(J=new cn,J.layers.enable(D),J.viewport=new ye,C[D]=J),J.matrix.fromArray(it.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(it.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pt===!0&&N.cameras.push(J)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(Mt[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Mt.length;D++){const it=Mt[D].camera;if(it){let Q=f[it];Q||(Q=new iu,f[it]=Q);const J=u.getCameraImage(it);Q.sourceTexture=J}}}}for(let Mt=0;Mt<b.length;Mt++){const Pt=A[Mt],Et=b[Mt];Pt!==null&&Et!==void 0&&Et.update(Pt,nt,c||o)}Wt&&Wt(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const jt=new pu;jt.setAnimationLoop(te),this.setAnimationLoop=function(K){Wt=K},this.dispose=function(){}}}const gi=new sn,Kg=new de;function Zg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Jc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const v=y.program;n.uniformBlockBinding(E,v)}function c(E,y){let v=r[E.id];v===void 0&&(g(E),v=h(E),r[E.id]=v,E.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(E,b);const A=t.render.frame;s[E.id]!==A&&(d(E),s[E.id]=A)}function h(E){const y=u();E.__bindingPointIndex=y;const v=i.createBuffer(),b=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],v=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=v.length;A<R;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,M=P.length;x<M;x++){const C=P[x];if(p(C,A,x,b)===!0){const N=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let B=0;B<I.length;B++){const H=I[B],Y=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+G,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,v,b){const A=E.value,R=y+"_"+v;if(b[R]===void 0)return typeof A=="number"||typeof A=="boolean"?b[R]=A:b[R]=A.clone(),!0;{const P=b[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const y=E.uniforms;let v=0;const b=16;for(let R=0,P=y.length;R<P;R++){const x=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,C=x.length;M<C;M++){const N=x[M],I=Array.isArray(N.value)?N.value:[N.value];for(let G=0,B=I.length;G<B;G++){const H=I[G],Y=_(H),F=v%b,j=F%Y.boundary,tt=F+j;v+=j,tt!==0&&b-tt<Y.storage&&(v+=b-tt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const A=v%b;return A>0&&(v+=b-A),E.__size=v,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class jg{constructor(t={}){const{canvas:e=Kh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Ye;let A=0,R=0,P=null,x=-1,M=null;const C=new ye,N=new ye;let I=null;const G=new It(0);let B=0,H=e.width,Y=e.height,F=1,j=null,tt=null;const ft=new ye(0,0,H,Y),Nt=new ye(0,0,H,Y);let Wt=!1;const te=new ja;let jt=!1,K=!1;const nt=new de,Mt=new L,Pt=new ye,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ae(){return P===null?F:1}let D=n;function it(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const O="webgl2";if(D=it(O,T),D===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,J,Z,pt,st,ht,Ft,Bt,w,S,k,q,rt,$,bt,dt,At,Rt,ot,yt,kt,Dt,vt,Xt;function U(){Q=new l0(D),Q.init(),Dt=new Wg(D,Q),J=new e0(D,Q,t,Dt),Z=new Gg(D,Q),J.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),pt=new h0(D),st=new Cg,ht=new Vg(D,Q,Z,st,J,Dt,pt),Ft=new i0(v),Bt=new a0(v),w=new _d(D),vt=new Qm(D,w),S=new c0(D,w,pt,vt),k=new d0(D,S,w,pt),ot=new f0(D,J,ht),dt=new n0(st),q=new Rg(v,Ft,Bt,Q,J,vt,dt),rt=new Zg(v,st),$=new Dg,bt=new Og(Q),Rt=new jm(v,Ft,Bt,Z,k,p,l),At=new kg(v,k,J),Xt=new Jg(D,pt,J,Z),yt=new t0(D,Q,pt),kt=new u0(D,Q,pt),pt.programs=q.programs,v.capabilities=J,v.extensions=Q,v.properties=st,v.renderLists=$,v.shadowMap=At,v.state=Z,v.info=pt}U();const ut=new $g(v,D);this.xr=ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,O,W=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=O,e.width=Math.floor(T*F),e.height=Math.floor(O*F),W===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*F,Y*F).floor()},this.setDrawingBufferSize=function(T,O,W){H=T,Y=O,F=W,e.width=Math.floor(T*W),e.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ft)},this.setViewport=function(T,O,W,X){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,O,W,X),Z.viewport(C.copy(ft).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(Nt)},this.setScissor=function(T,O,W,X){T.isVector4?Nt.set(T.x,T.y,T.z,T.w):Nt.set(T,O,W,X),Z.scissor(N.copy(Nt).multiplyScalar(F).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){Z.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,W=!0){let X=0;if(T){let z=!1;if(P!==null){const ct=P.texture.format;z=ct===$a||ct===Ya||ct===qa}if(z){const ct=P.texture.type,xt=ct===Rn||ct===Ti||ct===Or||ct===Br||ct===Va||ct===Wa,wt=Rt.getClearColor(),St=Rt.getClearAlpha(),zt=wt.r,Ht=wt.g,Ut=wt.b;xt?(g[0]=zt,g[1]=Ht,g[2]=Ut,g[3]=St,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=zt,_[1]=Ht,_[2]=Ut,_[3]=St,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}O&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Rt.dispose(),$.dispose(),bt.dispose(),st.dispose(),Ft.dispose(),Bt.dispose(),k.dispose(),vt.dispose(),Xt.dispose(),q.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Mn),ut.removeEventListener("sessionend",fl),ci.stop()};function gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=pt.autoReset,O=At.enabled,W=At.autoUpdate,X=At.needsUpdate,z=At.type;U(),pt.autoReset=T,At.enabled=O,At.autoUpdate=W,At.needsUpdate=X,At.type=z}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function et(T){const O=T.target;O.removeEventListener("dispose",et),Ct(O)}function Ct(T){Vt(T),st.remove(T)}function Vt(T){const O=st.get(T).programs;O!==void 0&&(O.forEach(function(W){q.releaseProgram(W)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,X,z,ct){O===null&&(O=Et);const xt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Gu(T,O,W,X,z);Z.setMaterial(X,xt);let St=W.index,zt=1;if(X.wireframe===!0){if(St=S.getWireframeAttribute(W),St===void 0)return;zt=2}const Ht=W.drawRange,Ut=W.attributes.position;let Qt=Ht.start*zt,le=(Ht.start+Ht.count)*zt;ct!==null&&(Qt=Math.max(Qt,ct.start*zt),le=Math.min(le,(ct.start+ct.count)*zt)),St!==null?(Qt=Math.max(Qt,0),le=Math.min(le,St.count)):Ut!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Ut.count));const xe=le-Qt;if(xe<0||xe===1/0)return;vt.setup(z,X,wt,W,St);let fe,ue=yt;if(St!==null&&(fe=w.get(St),ue=kt,ue.setIndex(fe)),z.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*ae()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(z.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),Z.setLineWidth(Ot*ae()),z.isLineSegments?ue.setMode(D.LINES):z.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else z.isPoints?ue.setMode(D.POINTS):z.isSprite&&ue.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,me=z._multiDrawCounts,ne=z._multiDrawCount,Ze=St?w.get(St).bytesPerElement:1,Ii=st.get(X).currentProgram.getUniforms();for(let Je=0;Je<ne;Je++)Ii.setValue(D,"_gl_DrawID",Je),ue.render(Ot[Je]/Ze,me[Je])}else if(z.isInstancedMesh)ue.renderInstances(Qt,xe,z.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,me=Math.min(W.instanceCount,Ot);ue.renderInstances(Qt,xe,me)}else ue.render(Qt,xe)};function he(T,O,W){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,os(T,O,W),T.side=oi,T.needsUpdate=!0,os(T,O,W),T.side=un):os(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),f=bt.get(W),f.init(O),y.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ct=z.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){const wt=ct[xt];he(wt,W,z),X.add(wt)}else he(ct,W,z),X.add(ct)}),f=y.pop(),X},this.compileAsync=function(T,O,W=null){const X=this.compile(T,O,W);return new Promise(z=>{function ct(){if(X.forEach(function(xt){st.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){z(T);return}setTimeout(ct,10)}Q.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let se=null;function Pn(T){se&&se(T)}function Mn(){ci.stop()}function fl(){ci.start()}const ci=new pu;ci.setAnimationLoop(Pn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(T){se=T,ut.setAnimationLoop(T),T===null?ci.stop():ci.start()},ut.addEventListener("sessionstart",Mn),ut.addEventListener("sessionend",fl),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,P),f=bt.get(T,y.length),f.init(O),y.push(f),nt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(nt,Tn,O.reversedDepth),K=this.localClippingEnabled,jt=dt.init(this.clippingPlanes,K),m=$.get(T,E.length),m.init(),E.push(m),ut.enabled===!0&&ut.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&ro(ct,O,-1/0,v.sortObjects)}ro(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,tt),$t=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,$t&&Rt.addToRenderList(m,T),this.info.render.frame++,jt===!0&&dt.beginShadows();const W=f.state.shadowsArray;At.render(W,T,O),jt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ct=O.cameras;if(z.length>0)for(let xt=0,wt=ct.length;xt<wt;xt++){const St=ct[xt];pl(X,z,T,St)}$t&&Rt.render(T);for(let xt=0,wt=ct.length;xt<wt;xt++){const St=ct[xt];dl(m,T,St,St.viewport)}}else z.length>0&&pl(X,z,T,O),$t&&Rt.render(T),dl(m,T,O);P!==null&&R===0&&(ht.updateMultisampleRenderTarget(P),ht.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,O),vt.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],jt===!0&&dt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ro(T,O,W,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){X&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);const xt=k.update(T),wt=T.material;wt.visible&&m.push(T,xt,wt,W,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const xt=k.update(T),wt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Pt.copy(xt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(nt)),Array.isArray(wt)){const St=xt.groups;for(let zt=0,Ht=St.length;zt<Ht;zt++){const Ut=St[zt],Qt=wt[Ut.materialIndex];Qt&&Qt.visible&&m.push(T,xt,Qt,W,Pt.z,Ut)}}else wt.visible&&m.push(T,xt,wt,W,Pt.z,null)}}const ct=T.children;for(let xt=0,wt=ct.length;xt<wt;xt++)ro(ct[xt],O,W,X)}function dl(T,O,W,X){const z=T.opaque,ct=T.transmissive,xt=T.transparent;f.setupLightsView(W),jt===!0&&dt.setGlobalState(v.clippingPlanes,W),X&&Z.viewport(C.copy(X)),z.length>0&&ss(z,O,W),ct.length>0&&ss(ct,O,W),xt.length>0&&ss(xt,O,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function pl(T,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new wi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ts:Rn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ct=f.state.transmissionRenderTarget[X.id],xt=X.viewport||C;ct.setSize(xt.z*v.transmissionResolutionScale,xt.w*v.transmissionResolutionScale);const wt=v.getRenderTarget(),St=v.getActiveCubeFace(),zt=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(G),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Rt.render(W);const Ht=v.toneMapping;v.toneMapping=ni;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),jt===!0&&dt.setGlobalState(v.clippingPlanes,X),ss(T,W,X),ht.updateMultisampleRenderTarget(ct),ht.updateRenderTargetMipmap(ct),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let le=0,xe=O.length;le<xe;le++){const fe=O[le],ue=fe.object,Ot=fe.geometry,me=fe.material,ne=fe.group;if(me.side===un&&ue.layers.test(X.layers)){const Ze=me.side;me.side=Ve,me.needsUpdate=!0,ml(ue,W,X,Ot,me,ne),me.side=Ze,me.needsUpdate=!0,Qt=!0}}Qt===!0&&(ht.updateMultisampleRenderTarget(ct),ht.updateRenderTargetMipmap(ct))}v.setRenderTarget(wt,St,zt),v.setClearColor(G,B),Ut!==void 0&&(X.viewport=Ut),v.toneMapping=Ht}function ss(T,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ct=T.length;z<ct;z++){const xt=T[z],wt=xt.object,St=xt.geometry,zt=xt.group;let Ht=xt.material;Ht.allowOverride===!0&&X!==null&&(Ht=X),wt.layers.test(W.layers)&&ml(wt,O,W,St,Ht,zt)}}function ml(T,O,W,X,z,ct){T.onBeforeRender(v,O,W,X,z,ct),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,O,W,X,T,ct),z.transparent===!0&&z.side===un&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,T,ct),z.side=oi,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,T,ct),z.side=un):v.renderBufferDirect(W,O,X,z,T,ct),T.onAfterRender(v,O,W,X,z,ct)}function os(T,O,W){O.isScene!==!0&&(O=Et);const X=st.get(T),z=f.state.lights,ct=f.state.shadowsArray,xt=z.state.version,wt=q.getParameters(T,z.state,ct,O,W),St=q.getProgramCacheKey(wt);let zt=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?Bt:Ft).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",et),zt=new Map,X.programs=zt);let Ht=zt.get(St);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===xt)return _l(T,wt),Ht}else wt.uniforms=q.getUniforms(T),T.onBeforeCompile(wt,v),Ht=q.acquireProgram(wt,St),zt.set(St,Ht),X.uniforms=wt.uniforms;const Ut=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),_l(T,wt),X.needsLights=Wu(T),X.lightsStateVersion=xt,X.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function gl(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ks.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function _l(T,O){const W=st.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Gu(T,O,W,X,z){O.isScene!==!0&&(O=Et),ht.resetTextureUnits();const ct=O.fog,xt=X.isMeshStandardMaterial?O.environment:null,wt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:cr,St=(X.isMeshStandardMaterial?Bt:Ft).get(X.envMap||xt),zt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,le=!!W.morphAttributes.color;let xe=ni;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=v.toneMapping);const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=fe!==void 0?fe.length:0,Ot=st.get(X),me=f.state.lights;if(jt===!0&&(K===!0||T!==M)){const Be=T===M&&X.id===x;dt.setState(X,T,Be)}let ne=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==me.state.version||Ot.outputColorSpace!==wt||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==St||X.fog===!0&&Ot.fog!==ct||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ut||Ot.morphNormals!==Qt||Ot.morphColors!==le||Ot.toneMapping!==xe||Ot.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Ot.__version=X.version);let Ze=Ot.currentProgram;ne===!0&&(Ze=os(X,O,z));let Ii=!1,Je=!1,_r=!1;const ge=Ze.getUniforms(),on=Ot.uniforms;if(Z.useProgram(Ze.program)&&(Ii=!0,Je=!0,_r=!0),X.id!==x&&(x=X.id,Je=!0),Ii||M!==T){Z.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",T.projectionMatrix),ge.setValue(D,"viewMatrix",T.matrixWorldInverse);const We=ge.map.cameraPosition;We!==void 0&&We.setValue(D,Mt.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Je=!0,_r=!0)}if(z.isSkinnedMesh){ge.setOptional(D,z,"bindMatrix"),ge.setOptional(D,z,"bindMatrixInverse");const Be=z.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(D,"boneTexture",Be.boneTexture,ht))}z.isBatchedMesh&&(ge.setOptional(D,z,"batchingTexture"),ge.setValue(D,"batchingTexture",z._matricesTexture,ht),ge.setOptional(D,z,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",z._indirectTexture,ht),ge.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",z._colorsTexture,ht));const an=W.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ot.update(z,W,Ze),(Je||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,ge.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=St,on.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(on.envMapIntensity.value=O.environmentIntensity),Je&&(ge.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Vu(on,_r),ct&&X.fog===!0&&rt.refreshFogUniforms(on,ct),rt.refreshMaterialUniforms(on,X,F,Y,f.state.transmissionRenderTarget[T.id]),ks.upload(D,gl(Ot),on,ht)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ks.upload(D,gl(Ot),on,ht),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(D,"center",z.center),ge.setValue(D,"modelViewMatrix",z.modelViewMatrix),ge.setValue(D,"normalMatrix",z.normalMatrix),ge.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let We=0,so=Be.length;We<so;We++){const ui=Be[We];Xt.update(ui,Ze),Xt.bind(ui,Ze)}}return Ze}function Vu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Wu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,W){const X=st.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=O,st.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const W=st.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Xu=D.createFramebuffer();this.setRenderTarget=function(T,O=0,W=0){P=T,A=O,R=W;let X=!0,z=null,ct=!1,xt=!1;if(T){const St=st.get(T);if(St.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)ht.setupRenderTarget(T);else if(St.__hasExternalTextures)ht.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ut=T.depthTexture;if(St.__boundDepthTexture!==Ut){if(Ut!==null&&st.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);const Ht=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?z=Ht[O][W]:z=Ht[O],ct=!0):T.samples>0&&ht.useMultisampledRTT(T)===!1?z=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[W]:z=Ht,C.copy(T.viewport),N.copy(T.scissor),I=T.scissorTest}else C.copy(ft).multiplyScalar(F).floor(),N.copy(Nt).multiplyScalar(F).floor(),I=Wt;if(W!==0&&(z=Xu),Z.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&Z.drawBuffers(T,z),Z.viewport(C),Z.scissor(N),Z.setScissorTest(I),ct){const St=st.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,W)}else if(xt){const St=O;for(let zt=0;zt<T.textures.length;zt++){const Ht=st.get(T.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Ht.__webglTexture,W,St)}}else if(T!==null&&W!==0){const St=st.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,W)}x=-1},this.readRenderTargetPixels=function(T,O,W,X,z,ct,xt,wt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){Z.bindFramebuffer(D.FRAMEBUFFER,St);try{const zt=T.textures[wt],Ht=zt.format,Ut=zt.type;if(!J.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&W>=0&&W<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(O,W,X,z,Dt.convert(Ht),Dt.convert(Ut),ct))}finally{const zt=P!==null?st.get(P).__webglFramebuffer:null;Z.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,X,z,ct,xt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(O>=0&&O<=T.width-X&&W>=0&&W<=T.height-z){Z.bindFramebuffer(D.FRAMEBUFFER,St);const zt=T.textures[wt],Ht=zt.format,Ut=zt.type;if(!J.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(O,W,X,z,Dt.convert(Ht),Dt.convert(Ut),0);const le=P!==null?st.get(P).__webglFramebuffer:null;Z.bindFramebuffer(D.FRAMEBUFFER,le);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zh(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Qt),D.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,W=0){const X=Math.pow(2,-W),z=Math.floor(T.image.width*X),ct=Math.floor(T.image.height*X),xt=O!==null?O.x:0,wt=O!==null?O.y:0;ht.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xt,wt,z,ct),Z.unbindTexture()};const qu=D.createFramebuffer(),Yu=D.createFramebuffer();this.copyTextureToTexture=function(T,O,W=null,X=null,z=0,ct=null){ct===null&&(z!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=z,z=0):ct=0);let xt,wt,St,zt,Ht,Ut,Qt,le,xe;const fe=T.isCompressedTexture?T.mipmaps[ct]:T.image;if(W!==null)xt=W.max.x-W.min.x,wt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,zt=W.min.x,Ht=W.min.y,Ut=W.isBox3?W.min.z:0;else{const an=Math.pow(2,-z);xt=Math.floor(fe.width*an),wt=Math.floor(fe.height*an),T.isDataArrayTexture?St=fe.depth:T.isData3DTexture?St=Math.floor(fe.depth*an):St=1,zt=0,Ht=0,Ut=0}X!==null?(Qt=X.x,le=X.y,xe=X.z):(Qt=0,le=0,xe=0);const ue=Dt.convert(O.format),Ot=Dt.convert(O.type);let me;O.isData3DTexture?(ht.setTexture3D(O,0),me=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ht.setTexture2DArray(O,0),me=D.TEXTURE_2D_ARRAY):(ht.setTexture2D(O,0),me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),_r=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const ge=T.isDataArrayTexture||T.isData3DTexture,on=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const an=st.get(T),Be=st.get(O),We=st.get(an.__renderTarget),so=st.get(Be.__renderTarget);Z.bindFramebuffer(D.READ_FRAMEBUFFER,We.__webglFramebuffer),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let ui=0;ui<St;ui++)ge&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(T).__webglTexture,z,Ut+ui),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(O).__webglTexture,ct,xe+ui)),D.blitFramebuffer(zt,Ht,xt,wt,Qt,le,xt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);Z.bindFramebuffer(D.READ_FRAMEBUFFER,null),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||st.has(T)){const an=st.get(T),Be=st.get(O);Z.bindFramebuffer(D.READ_FRAMEBUFFER,qu),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yu);for(let We=0;We<St;We++)ge?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,z,Ut+We):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,z),on?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Be.__webglTexture,ct,xe+We):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,ct),z!==0?D.blitFramebuffer(zt,Ht,xt,wt,Qt,le,xt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):on?D.copyTexSubImage3D(me,ct,Qt,le,xe+We,zt,Ht,xt,wt):D.copyTexSubImage2D(me,ct,Qt,le,zt,Ht,xt,wt);Z.bindFramebuffer(D.READ_FRAMEBUFFER,null),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else on?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(me,ct,Qt,le,xe,xt,wt,St,ue,Ot,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(me,ct,Qt,le,xe,xt,wt,St,ue,fe.data):D.texSubImage3D(me,ct,Qt,le,xe,xt,wt,St,ue,Ot,fe):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Qt,le,xt,wt,ue,Ot,fe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Qt,le,fe.width,fe.height,ue,fe.data):D.texSubImage2D(D.TEXTURE_2D,ct,Qt,le,xt,wt,ue,Ot,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_r),ct===0&&O.generateMipmaps&&D.generateMipmap(me),Z.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&ht.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ht.setTextureCube(T,0):T.isData3DTexture?ht.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ht.setTexture2DArray(T,0):ht.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,Z.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Ki=9.80665,Re=Math.PI/180,ko=1.65,Qg=1/120,Ls=Object.freeze({}),ze=(i,t,e)=>Math.max(t,Math.min(e,i)),Qi=i=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z),t_=i=>Qi(i)&&Number.isFinite(i.w)&&i.lengthSq()>1e-12,Tc=()=>18;function Zi(i){const t=Math.max(-2e3,i);return t<11e3?1.225*Math.pow(1-.0065*t/288.15,4.25588):.363918*Math.exp(-(t-11e3)/6341.62)}const Ho={propEfficiency:.78,engineResponse:1.1,maxEngineRPM:2700,liftSlope:5,zeroLift:.25,stallAngle:15*Re,flapLift:.65,flapDrag:.065,oswaldEfficiency:.8,pitchStability:1.05,pitchAuthority:.36,pitchDamping:18,rollAuthority:.05,rollDamping:.55,dihedral:.055,yawAuthority:.035,yawStability:.16,yawDamping:.24,sideForceSlope:.7,controlResponse:.16,gearOffset:.14},qs=Object.freeze({trainer:Object.freeze({...Ho,name:"Trainer",label:"Trainer 172",mass:1050,wingArea:16.2,wingSpan:10.9,maxPower:134e3,inertia:Object.freeze({x:1750,y:2400,z:1350}),propDiskArea:2.6,dragCoefficient:.0335,trimSpeed:48}),tourer:Object.freeze({...Ho,name:"Tourer",label:"Tourer GT",mass:1350,wingArea:15.8,wingSpan:11.6,maxPower:23e4,inertia:Object.freeze({x:2350,y:3400,z:2100}),propDiskArea:3.1,dragCoefficient:.0365,trimSpeed:58,pitchAuthority:.33,rollAuthority:.045,controlResponse:.19}),sport:Object.freeze({...Ho,name:"Sport",label:"Sport S2",mass:760,wingArea:11,wingSpan:8.2,maxPower:194e3,inertia:Object.freeze({x:1e3,y:1350,z:700}),propDiskArea:2.4,dragCoefficient:.037,trimSpeed:65,pitchStability:.85,pitchAuthority:.42,pitchDamping:14,rollAuthority:.065,rollDamping:.45,dihedral:.028,controlResponse:.1,stallAngle:16*Re})});class e_{constructor(t={}){this.position=new L,this.velocity=new L,this.quaternion=new bn,this.angularVelocity=new L,this.controls={pitch:0,roll:0,yaw:0},this.telemetry={},this._wind=new L,this._baseWind=new L,this._air=new L,this._bodyAir=new L,this._force=new L,this._right=new L,this._up=new L,this._forward=new L,this._inverse=new bn,this._rotation=new bn,this._euler=new sn(0,0,0,"YXZ"),this._lastPosition=new L,this._lastQuaternion=new bn,this.reset(t)}reset({aircraft:t="trainer",position:e=new L(0,300,2e3),heading:n=0,speed:r=48,onGround:s=!1,terrainHeight:o=Tc,throttle:a=.65,flaps:l=0,verticalSpeed:c=0}={}){this.aircraftId=Object.hasOwn(qs,t)?t:"trainer",this.aircraft=qs[this.aircraftId],this.terrainHeight=typeof o=="function"?o:Tc,this.position.copy(Qi(e)?e:{x:0,y:300,z:2e3}),n=Number.isFinite(n)?n%(2*Math.PI):0,r=Number.isFinite(r)?ze(r,0,350):48,this.onGround=!!s,this.onGround&&(this.position.y=this._groundHeight()+ko),this.throttle=this._spool=Number.isFinite(a)?ze(a,0,1):.65,this.flaps=this._flapPosition=Number.isFinite(l)?ze(l,0,1):0,c=!this.onGround&&Number.isFinite(c)?ze(c,-r,r):0;const h=Math.sqrt(Math.max(0,r*r-c*c)),u=Math.atan2(c,h),d=this.aircraft;this._chord=d.wingArea/d.wingSpan,this._inducedDrag=1/(Math.PI*(d.wingSpan**2/d.wingArea)*d.oswaldEfficiency),this._trimAlpha=(d.mass*Ki/(.5*Zi(300)*d.trimSpeed**2*d.wingArea)-d.zeroLift)/d.liftSlope;const p=this.onGround?0:ze((d.mass*Ki*Math.cos(u)/Math.max(1,.5*Zi(this.position.y)*r**2*d.wingArea)-d.zeroLift-d.flapLift*this.flaps)/d.liftSlope,-4*Re,12*Re);return this.quaternion.setFromEuler(this._euler.set(p+u,-n,0,"YXZ")),this.velocity.set(Math.sin(n)*h,c,-Math.cos(n)*h),this.angularVelocity.set(0,0,0),this.controls.pitch=this.controls.roll=this.controls.yaw=0,this.brakes=!1,this.crashed=!1,this.crashReason="",this._time=0,this._gForce=this.onGround?1:0,this._thrust=this._lift=this._drag=this._liftCoefficient=this._separation=0,this._wind.set(0,0,0),this._baseWind.set(0,0,0),this._lastPosition.copy(this.position),this._lastQuaternion.copy(this.quaternion),this._updateTelemetry(Zi(this.position.y)),this}update(t,e=Ls,n=Ls){if(this.crashed)return this.telemetry;if(!this._validState())return this.position.copy(this._lastPosition),this.quaternion.copy(this._lastQuaternion),this._crash("Invalid flight state"),this._updateTelemetry(Zi(this.position.y)),this.telemetry;if(!Number.isFinite(t)||t<=0)return this.telemetry;e=e||Ls,n=n||Ls;const r=Number.isFinite(e.pitch)?ze(e.pitch,-1,1):0,s=Number.isFinite(e.roll)?ze(e.roll,-1,1):0,o=Number.isFinite(e.yaw)?ze(e.yaw,-1,1):0;this.throttle=ze(Number.isFinite(e.throttle)?e.throttle:Number.isFinite(this.throttle)?this.throttle:0,0,1),this.flaps=ze(Number.isFinite(e.flaps)?e.flaps:Number.isFinite(this.flaps)?this.flaps:0,0,1),typeof e.brakes=="boolean"&&(this.brakes=e.brakes),Qi(n.wind)?this._baseWind.copy(n.wind):this._baseWind.set(0,0,0),this._baseWind.clampLength(0,300);const a=Number.isFinite(n.turbulence)?ze(n.turbulence,0,1):0,l=Number.isFinite(n.density)?ze(n.density,0,10):null,c=Math.min(t,.1),h=Math.ceil(c/Qg),u=c/h;this.quaternion.normalize();for(let d=0;d<h&&!this.crashed;d++){this._lastPosition.copy(this.position),this._lastQuaternion.copy(this.quaternion),this._time+=u;const p=this._time;this._wind.copy(this._baseWind),this._wind.x+=a*(2.2*Math.sin(p*.73)+.7*Math.sin(p*2.31)),this._wind.y+=a*(1.5*Math.sin(p*1.13)+.6*Math.sin(p*3.17)),this._wind.z+=a*(1.8*Math.sin(p*.91)+.5*Math.sin(p*2.73));const g=1-Math.exp(-u/this.aircraft.controlResponse);this.controls.pitch+=(r-this.controls.pitch)*g,this.controls.roll+=(s-this.controls.roll)*g,this.controls.yaw+=(o-this.controls.yaw)*g,this._spool+=(this.throttle-this._spool)*(1-Math.exp(-u/this.aircraft.engineResponse)),this._flapPosition+=(this.flaps-this._flapPosition)*(1-Math.exp(-u/.8)),this._step(u,l??Zi(this.position.y)),this._validState()||(this.position.copy(this._lastPosition),this.quaternion.copy(this._lastQuaternion),this._crash("Invalid flight state"))}return this._updateTelemetry(l??Zi(this.position.y)),this.telemetry}_groundHeight(){const t=this.terrainHeight(this.position.x,this.position.z);return Number.isFinite(t)?t:18}_onRunway(t){return Math.abs(this.position.x)<=30&&Math.abs(this.position.z)<=850&&Math.abs(t-18)<.5}_validState(){return Qi(this.position)&&Qi(this.velocity)&&Qi(this.angularVelocity)&&t_(this.quaternion)&&this.velocity.lengthSq()<1e8&&this.angularVelocity.lengthSq()<1e6}_crash(t){this.crashed=!0,this.crashReason=t,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this._gForce=0}_step(t,e){const n=this.aircraft,r=this._groundHeight(),s=Math.max(0,this.position.y-r),o=this.onGround&&s<=ko+.06,a=this._onRunway(r);this._inverse.copy(this.quaternion).conjugate(),this._air.copy(this.velocity).sub(this._wind),this._bodyAir.copy(this._air).applyQuaternion(this._inverse);const l=this._bodyAir.x,c=this._bodyAir.y,h=-this._bodyAir.z,u=this._air.length(),d=Math.hypot(c,h),p=d>.1?Math.atan2(-c,h):0,g=u>.1?Math.atan2(l,Math.max(.1,d)):0,_=.5*e*u*u,m=.5*e*d*d,f=this._flapPosition,E=n.stallAngle-2*Re*f,y=ze((Math.abs(p)-(E-3*Re))/(11*Re),0,1),v=y*y*(3-2*y),A=(n.zeroLift+n.liftSlope*p+n.flapLift*f)*(1-v)+1.1*Math.sin(2*p)*v,R=Math.exp(-4*s/n.wingSpan),P=m*n.wingArea*A*(1+.06*R),x=n.dragCoefficient+n.flapDrag*f+this._inducedDrag*A*A*(1-.42*R)+v*(.08+1.1*Math.sin(p)**2)+.8*Math.max(0,-Math.cos(p)),M=_*n.wingArea*x,C=n.maxPower*this._spool**1.5*n.propEfficiency*Math.min(1.1,e/1.225)**.85,N=e>0?Math.cbrt(C/(2*e*n.propDiskArea)):0,I=C/Math.max(1,Math.hypot(Math.max(0,h),N)),G=I/n.propDiskArea,B=Math.min(_,.5*e*(n.trimSpeed*1.5)**2),H=B+.1*G,Y=B+.28*G,F=1-.65*v,j=-_*n.wingArea*n.sideForceSlope*g-Y*n.wingArea*.07*this.controls.yaw;this._force.copy(this._bodyAir).multiplyScalar(u>.01?-M/u:0),this._force.x+=j,d>.01&&(this._force.y+=P*h/d,this._force.z+=P*c/d),this._force.z-=I,this._force.applyQuaternion(this.quaternion),this._right.set(1,0,0).applyQuaternion(this.quaternion),this._up.set(0,1,0).applyQuaternion(this.quaternion),this._forward.set(0,0,-1).applyQuaternion(this.quaternion),this._euler.setFromQuaternion(this.quaternion,"YXZ");const tt=this.angularVelocity,ft=Math.max(12,u),Nt=ze(this._trimAlpha-p-f*.035,-.7,.7);let Wt=m*n.wingArea*this._chord*(n.pitchStability*Nt*(1-.45*v)-n.pitchDamping*tt.x*this._chord/(2*ft))+H*n.wingArea*this._chord*n.pitchAuthority*this.controls.pitch*F,te=_*n.wingArea*n.wingSpan*(-n.yawStability*g-n.yawDamping*tt.y*n.wingSpan/(2*ft)+.004*this.controls.roll*F)-Y*n.wingArea*n.wingSpan*n.yawAuthority*this.controls.yaw,jt=_*n.wingArea*n.wingSpan*(n.dihedral*g-n.rollDamping*tt.z*n.wingSpan/(2*ft))-B*n.wingArea*n.wingSpan*n.rollAuthority*this.controls.roll*F;const K=o?Math.max(0,n.mass*Ki-this._force.y):0;if(o){const st=K/(n.mass*Ki);Wt-=K*n.gearOffset,jt-=n.inertia.z*(65*this._euler.z+12*tt.z)*st,te-=n.inertia.y*tt.y*2.5*st;const ht=Math.hypot(this._forward.x,this._forward.z),Ft=ht>1e-6?this._forward.x/ht:0,Bt=ht>1e-6?this._forward.z/ht:-1,w=this.velocity.x+this._force.x*t/n.mass,S=this.velocity.z+this._force.z*t/n.mass,k=w*Ft+S*Bt,q=-w*Bt+S*Ft,rt=(a?.022:.075)+(this.brakes?.48:0),$=Math.sign(k)*Math.min(rt*K,Math.abs(k)*n.mass/t),bt=Math.sign(q)*Math.min(.65*K,Math.abs(q)*n.mass/t);this._force.x+=-$*Ft+bt*Bt,this._force.z+=-$*Bt-bt*Ft,this._force.y+=K}this._gForce=this._force.dot(this._up)/(n.mass*Ki),this._force.y-=n.mass*Ki,this.velocity.addScaledVector(this._force,t/n.mass),this.position.addScaledVector(this.velocity,t);const{x:nt,y:Mt,z:Pt}=n.inertia,Et=tt.x,$t=tt.y,ae=tt.z;tt.x+=(Wt+(Mt-Pt)*$t*ae)*t/nt,tt.y+=(te+(Pt-nt)*ae*Et)*t/Mt,tt.z+=(jt+(nt-Mt)*Et*$t)*t/Pt,tt.clampLength(0,6);const D=tt.length(),it=.5*D*t,Q=D>1e-9?Math.sin(it)/D:.5*t;if(this._rotation.set(tt.x*Q,tt.y*Q,tt.z*Q,Math.cos(it)),this.quaternion.multiply(this._rotation).normalize(),o){this._euler.setFromQuaternion(this.quaternion,"YXZ");const st=ze(this._euler.x,0,16*Re);st!==this._euler.x&&(this._euler.x=st,this.quaternion.setFromEuler(this._euler),tt.x=0)}const J=this._groundHeight(),Z=J+ko,pt=this.onGround;if(this.onGround=!1,this.position.y<=Z){this.position.y=Z,this.onGround=!0,this._euler.setFromQuaternion(this.quaternion,"YXZ"),this._right.set(1,0,0).applyQuaternion(this.quaternion);const st=Math.abs(this.velocity.x*this._right.x+this.velocity.z*this._right.z),ht=-this.velocity.y,Ft=!this._onRunway(J);ht>(Ft?2.6:5.5)?this._crash("Hard landing"):st>(Ft?5:8)?this._crash("Sideways ground impact"):Math.abs(this._euler.z)>21*Re||this._euler.x<-8*Re||this._euler.x>24*Re?this._crash("Wing or fuselage ground strike"):Ft&&Math.hypot(this.velocity.x,this.velocity.z)>24?this._crash("High-speed rough terrain impact"):this.velocity.y=Math.max(0,this.velocity.y)}else pt&&this.position.y<Z+.025&&this.velocity.y<.2&&(this.onGround=!0);this._thrust=I,this._lift=P,this._drag=M,this._liftCoefficient=A,this._separation=v}_updateTelemetry(t){this._inverse.copy(this.quaternion).conjugate(),this._air.copy(this.velocity).sub(this._wind),this._bodyAir.copy(this._air).applyQuaternion(this._inverse),this._forward.set(0,0,-1).applyQuaternion(this.quaternion),this._right.set(1,0,0).applyQuaternion(this.quaternion),this._up.set(0,1,0).applyQuaternion(this.quaternion);const e=Math.hypot(this._bodyAir.y,this._bodyAir.z)>.1?Math.atan2(-this._bodyAir.y,-this._bodyAir.z):0,n=this.telemetry;n.airspeed=this._air.length(),n.groundspeed=Math.hypot(this.velocity.x,this.velocity.z),n.altitude=this.position.y,n.agl=this.position.y-this._groundHeight(),n.verticalSpeed=this.velocity.y,n.heading=(Math.atan2(this._forward.x,-this._forward.z)/Re%360+360)%360,n.pitch=Math.atan2(this._forward.y,Math.hypot(this._forward.x,this._forward.z))/Re,n.roll=-Math.atan2(this._right.y,this._up.y)/Re,n.aoa=e/Re,n.gForce=this._gForce,n.stallWarning=!this.crashed&&n.airspeed>10&&Math.abs(e)>this.aircraft.stallAngle-(2+2*this._flapPosition)*Re,n.engineRPM=this.crashed?0:this.aircraft.maxEngineRPM*Math.sqrt(Math.max(0,this._spool)),n.windSpeed=this._wind.length(),n.density=t,n.dynamicPressure=.5*t*n.airspeed**2,n.liftCoefficient=this._liftCoefficient,n.lift=this._lift,n.drag=this._drag,n.thrust=this._thrust,n.flaps=this._flapPosition,n.sideslip=Math.atan2(this._bodyAir.x,Math.max(.1,Math.hypot(this._bodyAir.y,this._bodyAir.z)))/Re,n.onGround=this.onGround,n.crashed=this.crashed,n.crashReason=this.crashReason}}const n_=(i,t,e)=>Math.max(t,Math.min(e,i)),Xe=(i,t,e)=>{const n=n_((e-i)/(t-i),0,1);return n*n*(3-2*n)},i_=[[-7200,1500,1450,2450,520],[-10100,-1300,1750,1e3,390],[-6200,5900,850,1400,280],[-11800,5600,1350,2300,640],[-4700,2300,480,650,125]];let Ua;function Is(i,t){let e=Math.imul(i,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function xn(i,t,e=0){const n=Math.floor(i),r=Math.floor(t),s=i-n,o=t-r,a=s*s*(3-2*s),l=o*o*(3-2*o),c=e?(n%e+e)%e:n,h=e?(r%e+e)%e:r,u=e?(c+1)%e:n+1,d=e?(h+1)%e:r+1,p=Is(c,h),g=Is(u,h),_=Is(c,d),m=Is(u,d);return p+(g-p)*a+(_-p)*l+(p-g-_+m)*a*l}function xu(){const t=new Uint8Array(262144);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const s=(n*256+r)*4;for(let o=0;o<3;o++){const a=[8,32,96][o];t[s+o]=Math.round(xn(r/256*a+o*17,n/256*a+o*31,a)*255)}t[s+3]=255}const e=new tu(t,256,256,fn);return e.name="Seamless multiscale surface noise",e.wrapS=e.wrapT=Hs,e.magFilter=hn,e.minFilter=Qn,e.generateMipmaps=!0,e.anisotropy=4,e.needsUpdate=!0,e}function bc(i,t){return xn(i,t)*.55+xn(i*2.03+17,t*2.03-31)*.27+xn(i*4.11-11,t*4.11+9)*.13+xn(i*8.21+4,t*8.21+23)*.05}function Tr(i,t,e,n,r,s){return Math.exp(-(((i-e)/r)**2)-((t-n)/s)**2)}function yu(i){return-2200+Math.sin(i*52e-5)*500+370*Math.sin(i*.00113)-6400*Math.exp(-(((i+9600)/4e3)**2))}function Mu(i,t){const e=Math.hypot(Math.max(0,Math.abs(i)-390),Math.max(0,Math.abs(t)-1250));if(e<=0)return 18;const n=i-yu(t),r=Xe(-330,650,n),s=bc(i*47e-5+20,t*47e-5+10),o=1-Math.abs(bc(i*.00105-70,t*.00105+19)*2-1),a=3300*Tr(i,t,6800,-5800,4100,5100)+2750*Tr(i,t,-2600,-11200,4200,3600)+1850*Tr(i,t,11200,6500,4800,6100)+1250*Tr(i,t,-6100,-7600,2e3,3e3),l=Xe(1900,5e3,Math.hypot(i*1.08,t*.78)),c=1-.45*Math.exp(-(((i-900-Math.sin(t*4e-4)*800)/1150)**2)),h=a*l*c*(.39+s*.48+o*.36),u=24+s*86+xn(i*.003,t*.003)*9;let d=-42*(1-r)+r*(u+h);for(const[g,_,m,f,E]of i_){if(Math.abs(i-g)>m*2.8||Math.abs(t-_)>f*2.8)continue;const y=Tr(i,t,g,_,m,f);d=Math.max(d,y*E*(.58+s*.8)-62)}const p=Xe(15300,17900,Math.max(Math.abs(i),Math.abs(t)));return d=bi.lerp(d,-90,p),bi.lerp(18,d,Xe(0,850,e))}function wc(i,t){let e=0,n=i.length-1;for(;e+1<n;){const r=e+n>>>1;i[r]<=t?e=r:n=r}return e}function Fe(i,t){if(!Ua)return Mu(i,t);const{coordinates:e,positions:n,stride:r}=Ua,s=e[0],o=e[r-1];if(i<s||i>o||t<s||t>o)return-90;const a=wc(e,i),l=wc(e,t),c=(i-e[a])/(e[a+1]-e[a]),h=(t-e[l])/(e[l+1]-e[l]),u=(l*r+a)*3+1,d=u+3,p=u+r*3,g=p+3;return c+h<=1?n[u]+c*(n[d]-n[u])+h*(n[p]-n[u]):n[g]+(1-c)*(n[p]-n[g])+(1-h)*(n[d]-n[g])}function r_({mobile:i=!1,detailTexture:t=xu()}={}){const e=i?208:288,n=e+1,r=new Float32Array(n*n*3),s=new Float32Array(r.length),o=new Float32Array(n),a=new Uint32Array(e*e*6);for(let v=0;v<=e;v++){const b=v/e*2-1;o[v]=Math.sign(b)*Math.abs(b)**1.48*18e3}for(let v=0;v<=e;v++)for(let b=0;b<=e;b++){const A=(v*n+b)*3,R=o[b],P=o[v];r[A]=R,r[A+1]=Mu(R,P),r[A+2]=P}const l=new It("#738966"),c=new It("#385c49"),h=new It("#82866c"),u=new It("#aaa28c"),d=new It("#afa393"),p=new It("#e4e5dd"),g=new It("#c2b99a"),_=new It("#7c8958"),m=new It;for(let v=0;v<=e;v++)for(let b=0;b<=e;b++){const A=(v*n+b)*3,R=o[b],P=o[v],x=r[A+1],M=Math.max(0,b-1),C=Math.min(e,b+1),N=Math.max(0,v-1),I=Math.min(e,v+1),G=(r[(v*n+C)*3+1]-r[(v*n+M)*3+1])/(o[C]-o[M]),B=(r[(I*n+b)*3+1]-r[(N*n+b)*3+1])/(o[I]-o[N]),H=Math.hypot(G,B),Y=Xe(.34,.67,xn(R*9e-4+50,P*9e-4-30));m.copy(l).lerp(c,Y*(.3+Xe(100,750,x)*.55)*(1-Xe(.45,.95,H))),m.lerp(h,Xe(1050,1780,x)),m.lerp(u,Xe(1500,2350,x)),m.lerp(d,Xe(.48,1.35,H)*Xe(80,300,x)*.77),m.lerp(p,Xe(2480,2950,x+xn(R*.008,P*.008)*180)*(1-Xe(.9,1.9,H)*.8)),m.lerp(g,1-Xe(-3,23,x)),Math.abs(R)<420&&Math.abs(P)<1300&&m.copy(_).multiplyScalar(.96+Math.floor((P+1500)/75)%2*.07);const F=xn(R*.009,P*.009)*.12+xn(R*9e-4+80,P*9e-4)*.16;if(m.multiplyScalar(.86+F),m.toArray(s,A),b<e&&v<e){const j=v*n+b,tt=j+1,ft=j+n,Nt=ft+1,Wt=(v*e+b)*6;a.set([j,ft,tt,tt,ft,Nt],Wt)}}const f=new Se;f.setAttribute("position",new Ke(r,3)),f.setAttribute("color",new Ke(s,3)),f.setIndex(new Ke(a,1)),f.computeVertexNormals(),f.computeBoundingSphere();const E=new rl({vertexColors:!0,roughness:.97,metalness:0});E.userData.detailTexture=t,E.onBeforeCompile=v=>{v.uniforms.surfaceDetail={value:t},v.vertexShader=v.vertexShader.replace("#include <common>",`
      #include <common>
      varying vec3 vTerrainPosition;
      varying float vTerrainSlope;
    `).replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vTerrainPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vTerrainSlope = 1.0 - abs(normal.y);
    `),v.fragmentShader=v.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform sampler2D surfaceDetail;
      varying vec3 vTerrainPosition;
      varying float vTerrainSlope;
    `).replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 terrainPoint = vTerrainPosition;
      float detailDistance = length(vViewPosition);
      float nearDetail = 1.0 - smoothstep(300.0, 2600.0, detailDistance);
      float landscapeDetail = 1.0 - smoothstep(6500.0, 19000.0, detailDistance);
      vec3 soil = texture2D(surfaceDetail, terrainPoint.xz * 0.0017).rgb;
      vec3 fineSoil = texture2D(surfaceDetail, terrainPoint.xz * 0.017 + vec2(0.31, 0.73)).rgb;
      float airport = 1.0 - smoothstep(0.0, 180.0,
        max(abs(terrainPoint.x) - 420.0, abs(terrainPoint.z) - 1300.0));
      float pasture = (1.0 - airport) * (1.0 - smoothstep(0.18, 0.48, vTerrainSlope))
        * smoothstep(22.0, 90.0, terrainPoint.y) * (1.0 - smoothstep(1250.0, 1850.0, terrainPoint.y));
      diffuseColor.rgb *= 1.0 + ((soil.r - 0.5) * 0.25 + (soil.g - 0.5) * 0.12) * landscapeDetail;
      diffuseColor.rgb *= 1.0 + ((fineSoil.r - 0.5) * 0.12 + (fineSoil.g - 0.5) * 0.045)
        * nearDetail * (1.0 - airport * 0.65);
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.72, 0.85, 0.76),
        smoothstep(0.38, 0.71, soil.r) * pasture * landscapeDetail * 0.6);
      float rockFace = smoothstep(0.18, 0.56, vTerrainSlope) * smoothstep(35.0, 190.0, terrainPoint.y);
      if (rockFace > 0.01) {
        vec3 rock = texture2D(surfaceDetail,
          vec2(dot(terrainPoint.xz, vec2(0.00091, 0.00067)), terrainPoint.y * 0.0018)).rgb;
        float strata = texture2D(surfaceDetail,
          vec2(terrainPoint.y * 0.0008 + rock.r * 0.035, 0.37)).g;
        diffuseColor.rgb *= 1.0 + ((rock.r - 0.5) * 0.44 + (strata - 0.5) * 0.24
          + (rock.g - 0.5) * 0.12) * rockFace * landscapeDetail;
      }
    `)},E.customProgramCacheKey=()=>"coastal-surface-detail-v1";const y=new Gt(f,E);return y.name="Coastal alpine terrain - 36 km",y.receiveShadow=!0,Ua={coordinates:o,positions:r,stride:n},y}const Ys=new L(-.57,.34,-.75).normalize(),s_=new L(0,1,0);function eo(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function sr(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const r=new Rf(n);return r.colorSpace=Ye,r.anisotropy=4,r}function Kt(i,t={}){return new rl({color:i,roughness:.78,...t})}function _e(i,t,e,n,r,s,o,a,l,c=0){const h=new Gt(t,e);return h.position.set(n,r,s),h.scale.set(o,a,l),h.rotation.y=c,h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function $e(i,t,e,n,{shadow:r=!1}={}){if(!n.length)return t.dispose(),null;const s=new eu(t,e,n.length),o=new Ae,a=new It;return n.forEach((l,c)=>{o.position.set(...l.p),o.rotation.set(...l.r||[0,0,0]),o.scale.set(...l.s||[1,1,1]),o.updateMatrix(),s.setMatrixAt(c,o.matrix),l.c!==void 0&&s.setColorAt(c,a.set(l.c))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=r,s.receiveShadow=!0,s.computeBoundingSphere(),i.add(s),s}function Ac(i){const t=[],e=[];for(const r of i){const s=r.index?r.toNonIndexed():r;t.push(...s.attributes.position.array),e.push(...s.attributes.normal.array),s!==r&&s.dispose(),r.dispose()}const n=new Se;return n.setAttribute("position",new ee(t,3)),n.setAttribute("normal",new ee(e,3)),n}function o_(i){const t=new Map;i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||e.geometry.type!=="BoxGeometry")return;const n=`${e.geometry.uuid}:${e.material.uuid}`;t.has(n)||t.set(n,[]),t.get(n).push(e)});for(const e of t.values()){if(e.length<2)continue;const n=e[0],r=new eu(n.geometry,n.material,e.length);e.forEach((s,o)=>{r.setMatrixAt(o,s.matrixWorld),s.removeFromParent()}),r.castShadow=!0,r.receiveShadow=!0,r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r)}}function tn(i,t,e,n,r=.18,s){const o=[],a=[],l=[];for(let u=0;u<t.length-1;u++){const d=new mt(...t[u]),p=new mt(...t[u+1]),g=Math.max(1,Math.ceil(d.distanceTo(p)/22));for(let _=0;_<g;_++)l.push(d.clone().lerp(p,_/g))}l.push(new mt(...t[t.length-1])),l.forEach((u,d)=>{const p=l[Math.max(0,d-1)],_=l[Math.min(l.length-1,d+1)].clone().sub(p).normalize();for(const m of[-1,1]){const f=u.x-_.y*e*.5*m,E=u.y+_.x*e*.5*m;o.push(f,(s??Fe(f,E))+r,E)}if(d<l.length-1){const m=d*2;a.push(m,m+1,m+2,m+1,m+3,m+2)}});const c=new Se;c.setAttribute("position",new ee(o,3)),c.setIndex(a),c.computeVertexNormals();const h=new Gt(c,n);return h.receiveShadow=!0,i.add(h),h}function a_(i){const t=new yn({side:Ve,depthWrite:!1,depthTest:!1,uniforms:{zenith:{value:new It("#6195b5")},horizon:{value:new It("#d7dfd5")},sunDirection:{value:Ys},sunStrength:{value:1}},vertexShader:`
      varying vec3 vDirection;
      void main() {
        vDirection = position;
        vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;
      }
    `,fragmentShader:`
      varying vec3 vDirection;
      uniform vec3 zenith;
      uniform vec3 horizon;
      uniform vec3 sunDirection;
      uniform float sunStrength;
      void main() {
        vec3 direction = normalize(vDirection);
        float height = max(direction.y, 0.0);
        vec3 color = mix(horizon, zenith, pow(smoothstep(0.0, 0.92, height), 0.55));
        float alignment = max(dot(direction, sunDirection), 0.0);
        color += vec3(0.36, 0.22, 0.09) * pow(alignment, 9.0) * sunStrength;
        color += vec3(0.8, 0.49, 0.18) * pow(alignment, 180.0) * sunStrength;
        color += vec3(4.0, 3.1, 1.9) * smoothstep(0.99972, 0.99986, alignment) * sunStrength;
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),e=new Gt(new _n(1,32,20),t);return e.name="Infinite atmospheric sky",e.frustumCulled=!1,e.renderOrder=-100,i.add(e),t}function l_(i,t){const e=new yn({uniforms:{time:{value:0},fogColor:{value:i.fog.color.clone()},fogDensity:{value:i.fog.density},sunDirection:{value:Ys},sunStrength:{value:1},wind:{value:1},surfaceDetail:{value:t}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      varying vec3 vWorld;
      uniform float time;
      uniform float wind;
      uniform vec3 fogColor;
      uniform float fogDensity;
      uniform vec3 sunDirection;
      uniform float sunStrength;
      uniform sampler2D surfaceDetail;
      void main() {
        vec2 p = vWorld.xz;
        float coast = -2200.0 + sin(p.y * 0.00052) * 500.0
          + 370.0 * sin(p.y * 0.00113)
          - 6400.0 * exp(-pow((p.y + 9600.0) / 4000.0, 2.0));
        float shallows = exp(-abs(p.x - coast + 80.0) * 0.0014);
        vec3 deep = vec3(0.045, 0.155, 0.205);
        vec3 color = mix(deep, vec3(0.115, 0.295, 0.29), shallows * 0.7);
        float distanceToCamera = distance(vWorld, cameraPosition);
        float t = time * 0.009;
        mat2 rotation = mat2(0.819, 0.574, -0.574, 0.819);
        vec2 drift = vec2(t * 0.67, -t * 0.41);
        vec2 warp = texture2D(surfaceDetail, p * 0.00073 + drift * 0.12).rg - 0.5;
        vec2 swell = texture2D(surfaceDetail, rotation * p * 0.0013 + warp * 0.23 + drift * 0.3).rg - 0.5;
        vec2 chop = texture2D(surfaceDetail, rotation * p * 0.0079 + warp * 0.41 - drift).gb - 0.5;
        float footprint = max(length(dFdx(p)), length(dFdy(p)));
        float rippleVisibility = (1.0 - smoothstep(1.2, 9.0, footprint))
          * (1.0 - smoothstep(550.0, 4200.0, distanceToCamera));
        vec2 wave = swell * 0.105 + chop * rippleVisibility * 0.12;
        wave *= 1.0 - smoothstep(9000.0, 25000.0, distanceToCamera);
        vec3 normal = normalize(vec3(wave.x * wind, 1.0, wave.y * wind));
        vec3 viewDirection = normalize(cameraPosition - vWorld);
        float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), 4.0);
        color = mix(color, fogColor * 0.8, fresnel * 0.64);
        vec3 halfDirection = normalize(viewDirection + sunDirection);
        float glint = pow(max(dot(normal, halfDirection), 0.0), 110.0);
        color += vec3(0.7, 0.49, 0.27) * glint * sunStrength;
        color *= 1.0 + swell.x * 0.045;
        float fog = 1.0 - exp(-fogDensity * fogDensity * distanceToCamera * distanceToCamera);
        gl_FragColor = vec4(mix(color, fogColor, fog), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),n=new Gt(new zn(6e5,6e5),e);return n.rotation.x=-Math.PI/2,n.position.y=0,n.name="Open water",i.add(n),e}function c_(i,t){const e=eo(90417),n=sr(512,256,l=>{for(let c=0;c<2;c++)for(let h=0;h<44;h++){const u=95+e()*320,d=120+(e()-.5)*62-c*18,p=30+e()*54,g=l.createRadialGradient(u,d,0,u,d,p),_=c?"255,251,238":"158,175,179";g.addColorStop(0,`rgba(${_},0.27)`),g.addColorStop(.45,`rgba(${_},0.20)`),g.addColorStop(1,`rgba(${_},0)`),l.fillStyle=g,l.fillRect(u-p,d-p,p*2,p*2)}}),r=new yn({transparent:!0,depthWrite:!1,uniforms:{map:{value:n},time:{value:0},tint:{value:new It("#ffffff")},opacity:{value:.75},fogColor:{value:i.fog.color.clone()},fogDensity:{value:i.fog.density}},vertexShader:`
      varying vec2 vUv;
      varying float vDistance;
      uniform float time;
      void main() {
        vUv = uv;
        vec4 center = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        center.x += sin(time * 0.0004) * 1800.0;
        vec4 view = viewMatrix * center;
        view.xy += position.xy * vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
        vDistance = length(view.xyz);
        gl_Position = projectionMatrix * view;
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying float vDistance;
      uniform sampler2D map;
      uniform vec3 tint;
      uniform float opacity;
      uniform vec3 fogColor;
      uniform float fogDensity;
      void main() {
        vec4 cloud = texture2D(map, vUv);
        float fog = 1.0 - exp(-fogDensity * fogDensity * vDistance * vDistance);
        vec3 color = mix(cloud.rgb * tint, fogColor, fog * 0.7);
        gl_FragColor = vec4(color, cloud.a * opacity * smoothstep(30.0, 200.0, vDistance));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),s=[],o=t?42:68;for(let l=0;l<o;l++){const c=1800+e()*3300;s.push({p:[(e()-.5)*42e3,2600+e()*2100,(e()-.5)*42e3],s:[c,c*(.18+e()*.09),1]})}const a=$e(i,new zn(1,1),r,s);return a.name="Layered maritime clouds",a.frustumCulled=!1,r}function u_(i){const t=new wn;t.name="Cape Alder Regional - runway 18 / 36",i.add(t);const e=new Hn(1,1,1),n=Kt("#555b58"),r=Kt("#a4a38d"),s=Kt("#aaa99a"),o=Kt("#dedbd0"),a=Kt("#34464a",{metalness:.35}),l=Kt("#eeeee1"),c=Kt("#dcb34d"),h=Kt("#c56b3c"),u=Kt("#487782",{roughness:.19,metalness:.55});_e(t,e,r,0,17.995,0,58,.05,1740);const d=sr(512,4096,(x,M,C)=>{const N=eo(735);x.fillStyle="#555c5b",x.fillRect(0,0,M,C);for(let B=0;B<34e3;B++)x.fillStyle=N()>.5?"rgba(255,255,240,0.022)":"rgba(0,0,0,0.04)",x.fillRect(N()*M,N()*C,1+N()*3,1+N()*5);const I=M/50,G=C/1700;x.fillStyle="#e4e6db",x.fillRect(I*1.5,0,I*.38,C),x.fillRect(I*48.12,0,I*.38,C);for(let B=150;B<1550;B+=55)x.fillRect(M/2-I*.3,B*G,I*.6,28*G);for(const B of[!1,!0]){x.save(),B&&(x.translate(M,C),x.rotate(Math.PI));for(let H=0;H<10;H++){const Y=H<5?4+H*3.6:29+(H-5)*3.6;x.fillRect(Y*I,18*G,2.2*I,33*G)}x.save(),x.translate(M/2,100*G),x.rotate(Math.PI),x.scale(1,1.9),x.font="bold 116px Arial, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText(B?"36":"18",0,0),x.restore();for(const H of[9,35])x.fillRect(H*I,290*G,6*I,42*G);for(const H of[155,450])for(const Y of[10,15,33,38])x.fillRect(Y*I,H*G,1.5*I,22*G);for(let H=0;H<90;H++)x.fillStyle=`rgba(20,25,25,${N()*.065})`,x.fillRect((20+N()*10)*I,(155+N()*250)*G,.1*I,(30+N()*95)*G);x.fillStyle="#e4e6db",x.restore()}}),p=new Gt(new zn(50,1700),Kt("#ffffff",{map:d}));p.rotation.x=-Math.PI/2,p.position.y=18.045,p.receiveShadow=!0,p.name="Runway pavement at 18 m",t.add(p),tn(t,[[90,-790],[90,790]],15,n,.065,18),tn(t,[[90,-790],[90,790]],.24,c,.085,18);for(const x of[-740,-220,440,740]){tn(t,[[26,x],[48,x],[75,x+38],[90,x+45]],15,n,.065,18),tn(t,[[26,x],[48,x],[75,x+38],[90,x+45]],.24,c,.09,18);for(const M of[0,.9])_e(t,e,c,46+M,18.092,x,.22,.015,14)}_e(t,e,s,179,18.005,80,178,.1,650);for(let x=-180;x<=330;x+=85)tn(t,[[110,x],[159,x],[175,x+16]],.25,c,.075,18),tn(t,[[146,x-17],[175,x-17],[175,x+17]],.18,l,.077,18);const g=Kt("#677471",{metalness:.3,roughness:.55});for(let x=0;x<4;x++){const M=-175+x*145;_e(t,e,o,302,25,M,62,14,94),_e(t,e,a,270.85,23.8,M,.12,11.6,76);for(let C=0;C<9;C++)_e(t,e,g,270.73,23.8,M-36+C*9,.12,11.6,.18);for(const C of[-1,1]){const N=_e(t,e,g,302+C*16,33.5,M,33,.45,99);N.rotation.z=-C*.1}_e(t,e,h,270.6,31.6,M,.18,.65,79)}_e(t,e,o,223,23.5,-460,75,11,52),_e(t,e,g,223,29.3,-460,79,1.1,56),_e(t,e,u,184.9,25.7,-460,.15,4.8,47),_e(t,e,s,244,30,-391,12,24,12),_e(t,e,a,244,42.3,-391,19,1.4,19),_e(t,e,u,244,45,-391,17,4.5,17),_e(t,e,o,244,47.7,-391,21,.7,21),_e(t,e,a,244,52,-391,.22,8,.22);const _=sr(1024,128,(x,M,C)=>{x.fillStyle="#283d40",x.fillRect(0,0,M,C),x.fillStyle="#efe9d6",x.font="500 54px Arial, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("C A P E   A L D E R",M/2,C/2)}),m=new Gt(new zn(36,4.5),Kt("#ffffff",{map:_}));m.position.set(184.7,28,-460),m.rotation.y=-Math.PI/2,t.add(m);const f=[],E=[];for(let x=-840;x<=840;x+=60)for(const M of[-27,27])f.push({p:[M,18.42,x],s:[.25,.18,.25]}),E.push({p:[M,18.2,x],s:[.07,.4,.07]});const y=[],v=[];for(const x of[-1,1]){for(let M=-22;M<=22;M+=4)y.push({p:[M,18.3,x*858],s:[.3,.18,.3]});for(let M=30;M<=360;M+=30){const C=x*(850+M),N=Fe(0,C)+1.2;E.push({p:[0,N-.6,C],s:[.1,1.2,.1]});const I=M===180?5:1;for(let G=-I;G<=I;G++)f.push({p:[G*2.1,N,C],s:[.25,.2,.25]})}for(let M=0;M<4;M++)(M<2?f:v).push({p:[-43-M*5,18.8,x*535],s:[.7,.35,.5]})}$e(t,e.clone(),a,E);const b=new _n(1,6,4);$e(t,b,Kt("#fff3c5",{emissive:"#ffd899",emissiveIntensity:2.5}),f),$e(t,b.clone(),Kt("#88edac",{emissive:"#42dd85",emissiveIntensity:2}),y),$e(t,b.clone(),Kt("#ff7750",{emissive:"#ff331b",emissiveIntensity:2}),v);for(let x=1;x<=5;x++){const M=sr(64,96,I=>{I.fillStyle="#242d2b",I.fillRect(0,0,64,96),I.fillStyle="#efeee3",I.textAlign="center",I.font="bold 73px Arial",I.fillText(String(x),32,76)}),C=Kt("#ffffff",{map:M}),N=[];for(const I of[-1,1])N.push({p:[I*37,19.25,-850+x*304.8],s:[1.15,1.65,1]}),N.push({p:[I*37,19.25,850-x*304.8],s:[1.15,1.65,1],r:[0,Math.PI,0]});$e(t,new zn(1,1),C,N)}const A=new Gt(new Gn(.045,.085,8,8),o);A.position.set(-77,22,460),t.add(A);const R=new wn;R.position.set(-77,26,460),t.add(R);for(let x=0;x<5;x++){const M=new Gt(new Gn(.38-x*.052,.328-x*.052,.53,12,1,!0),x%2?l:h);M.rotation.z=Math.PI/2,M.position.set(x*.52+.25,-x*.035,0),R.add(M)}const P=[];for(let x=-1e3;x<=1050;x+=24)P.push({p:[363,19,x],s:[.08,2,.08]});return $e(t,e.clone(),a,P),tn(t,[[363,-1e3],[363,1050]],.065,a,2,18),R}function h_(i,t){const e=new wn;e.name="Alder town, coast road and fishing harbor",i.add(e);const n=eo(50714),r=Kt("#73756a"),s=Kt("#d3caae");tn(e,[[355,-460],[470,-430],[650,100],[780,650],[1100,1150],[2100,2200],[3e3,3400],[4100,5400],[5e3,7500]],13,r),tn(e,[[-1500,2200],[-1100,1650],[-750,1460],[0,1480],[780,1500],[2200,1500],[3600,1100],[4200,-500],[4e3,-2500],[3150,-4500]],12,r);const o=[700,980,1260,1540,1820],a=[670,950,1230,1510,1790,2070,2350,2630];for(const I of o)tn(e,[[I,610],[I,2700]],9,r);for(const I of a)tn(e,[[650,I],[1890,I]],9,r);tn(e,[[-1500,2200],[-1100,1650],[-750,1460],[0,1480],[780,1500]],.18,s,.2);const l=sr(128,128,I=>{I.fillStyle="#f6f2e9",I.fillRect(0,0,128,128);for(let G=0;G<3;G++)for(let B=0;B<4;B++){const H=9+B*31,Y=12+G*37;I.fillStyle="#aaa99e",I.fillRect(H-2,Y-2,18,24),I.fillStyle="#53696c",I.fillRect(H,Y,14,19),I.fillStyle="#aebabb",I.fillRect(H+1,Y+1,5,8),I.fillStyle="#e6e1d3",I.fillRect(H-3,Y+21,20,3)}}),c=[],h=[],u=["#d6cab4","#e0d8c5","#c5c7b8","#e4d5bb","#c3b49c","#d9cfbc"],d=["#8f6550","#9e765b","#a18167","#687572","#b08969"];for(let I=735;I<1820;I+=45)for(let G=710;G<2620;G+=47){if(n()<.23||o.some(Nt=>Math.abs(Nt-I)<26)||a.some(Nt=>Math.abs(Nt-G)<25))continue;const B=I+(n()-.5)*9,H=G+(n()-.5)*9,Y=Fe(B,H);if(Math.abs(Fe(B+16,H)-Y)>5)continue;const F=12+n()*13,j=15+n()*15,tt=7+n()*12,ft=n()<.5?0:Math.PI/2;c.push({p:[B,Y+tt*.5-1,H],s:[F,tt+2,j],r:[0,ft,0],c:u[Math.floor(n()*u.length)]}),h.push({p:[B,Y+tt,H],s:[F*.54,2.5+n()*3,j*.55],r:[0,ft,0],c:d[Math.floor(n()*d.length)]})}$e(e,new Hn(1,1,1),Kt("#ffffff",{map:l}),c);const p=new Se;p.setAttribute("position",new ee([-1,0,-1,0,1,-1,1,0,-1,-1,0,1,1,0,1,0,1,1,-1,0,-1,-1,0,1,0,1,-1,-1,0,1,0,1,1,0,1,-1,0,1,-1,0,1,1,1,0,-1,0,1,1,1,0,1,1,0,-1],3)),p.computeVertexNormals(),$e(e,p,Kt("#ffffff"),h);const g=2100;let _=yu(g)-300;for(;Fe(_,g)<3;)_+=8;const m=Kt("#a4a698"),f=Kt("#8f8570"),E=Kt("#465e63",{metalness:.3}),y=new Hn(1,1,1);_e(e,y,m,_-23,2,g,55,4,260),tn(e,[[_+8,g],[-1500,2200]],10,r,.22);const v=[];for(let I=0;I<4;I++){const G=g-95+I*65;_e(e,y,f,_-105,2.5,G,165,.65,6);for(let B=_-185;B<_-20;B+=18)for(const H of[-1,1])v.push({p:[B,.5,G+H*2.4],s:[.45,5,.45]})}$e(e,y.clone(),f,v),_e(e,y,m,_-180,1.5,g-200,380,4,12,.12);const b=Kt("#c9c5af");for(let I=0;I<5;I++){const G=_+70,B=g-140+I*65,H=Fe(G,B);_e(e,y,b,G,H+5,B,45,10,30),_e(e,y,E,G,H+10.5,B,47,1,32)}const A=[],R=[],P=[];for(let I=0;I<(t?18:30);I++){const G=I%4,B=_-40-Math.floor(I/4)*19,H=g-95+G*65+(I%2?11:-11),Y=7+n()*6;A.push({p:[B,.6,H],s:[1.7+n()*.5,1.2,Y*.5],c:I%4?"#deded1":"#507280"}),R.push({p:[B,1.8,H],s:[2,1.7,Y*.32]}),I%3!==0&&P.push({p:[B,6,H-1],s:[.07,11,.07]})}const x=new _n(1,8,6);$e(e,x,Kt("#ffffff"),A),$e(e,y.clone(),Kt("#e7e4d7"),R),$e(e,y.clone(),E,P);const M=_-180-185*Math.cos(.12),C=g-200+185*Math.sin(.12),N=new Gt(new Gn(2.8,3.8,19,12),b);N.position.set(M,11,C),e.add(N),_e(e,y,E,M,21,C,6.3,1,6.3),_e(e,y,Kt("#f9d99e",{emissive:"#ffc780",emissiveIntensity:.9}),M,22.4,C,4.1,2,4.1)}function f_(i,t){const e=eo(13928),n=[],r=[],s=[],o=t?6300:11500;let a=0,l=0;for(let p=0;p<o*5&&n.length+r.length<o;p++){if(p%12===0){const A=p%36===0;a=(e()-.5)*(A?7e3:29e3),l=(e()-.5)*(A?8e3:29e3)}const g=a+(e()-.5)*230,_=l+(e()-.5)*230;if(Math.abs(g)<500&&Math.abs(_)<1370||g>570&&g<1980&&_>540&&_<2800||g<-1200&&g>-2300&&_>1800&&_<2400)continue;const m=Fe(g,_);if(m<24||m>1780)continue;const f=xn(g*9e-4+50,_*9e-4-30);if(f<.31||e()>.4+f*.6||Math.abs(Fe(g+14,_)-m)+Math.abs(Fe(g,_+14)-m)>16)continue;const E=9+e()*14,y=m>500||e()>.38,v=E*(y?.21:.33),b=new It(y?"#426454":"#657e51").multiplyScalar(.8+e()*.4);(y?n:r).push({p:[g,m-.4,_],s:[v,E,v],r:[0,e()*Math.PI*2,0],c:b}),s.push({p:[g,m+E*.22,_],s:[.15+E*.008,E*.45,.15+E*.008]})}const c=Ac([new Dr(1,.53,6,1,!0).translate(0,.47,0),new Dr(.82,.49,6,1,!0).translate(0,.65,0),new Dr(.57,.43,6,1,!0).translate(0,.81,0)]),h=Ac([new Ur(1,0).scale(.9,.29,.87).translate(0,.68,0),new Ur(1,0).scale(.65,.25,.66).translate(.35,.76,.15),new Ur(1,0).scale(.57,.24,.68).translate(-.32,.57,-.13)]),u=Kt("#ffffff",{roughness:1}),d=new Gn(.65,1,1,4,1,!0);for(const[p,g,_]of[[c,u,n],[h,u,r],[d,Kt("#6b6651"),s]]){const m=new Map;for(const f of _){const E=`${Math.floor(f.p[0]/4500)}:${Math.floor(f.p[2]/4500)}`;m.has(E)||m.set(E,[]),m.get(E).push(f)}for(const f of m.values()){const E=$e(i,p,g,f);E.name="Forest grove",E.receiveShadow=!1}}}function d_(i){const t=typeof window<"u"&&(window.matchMedia?.("(pointer: coarse)").matches||window.innerWidth<720),e=new Ef;e.name="Cape Alder",e.background=new It("#d7dfd5"),e.fog=new Ja("#d7dfd5",47e-6);const n=xu();e.add(r_({mobile:t,detailTexture:n}));const r=a_(e),s=l_(e,n),o=c_(e,t),a=new hd("#d9e9f2","#77775a",1.9);e.add(a);const l=new pd("#ffe0b0",2.8);l.position.copy(Ys).multiplyScalar(11e3),l.target.position.set(0,18,0),l.castShadow=!0,l.shadow.mapSize.set(t?1024:2048,t?1024:2048),Object.assign(l.shadow.camera,{left:-420,right:420,top:420,bottom:-420,near:100,far:15e3}),l.shadow.bias=-8e-5,l.shadow.normalBias=.35,l.shadow.camera.updateProjectionMatrix(),e.add(l,l.target);const c=new L;e.onBeforeRender=(_,m,f)=>{f.getWorldPosition(c);const E=840/l.shadow.mapSize.x;c.x=Math.round(c.x/E)*E,c.z=Math.round(c.z/E)*E,c.y=Math.max(0,Fe(c.x,c.z)),l.target.position.copy(c),l.position.copy(c).addScaledVector(Ys,11e3),l.target.updateMatrixWorld(),l.updateMatrixWorld()},i&&(i.shadowMap.enabled=!0,i.shadowMap.type=Lc);const h=u_(e);h_(e,t),f_(e,t),o_(e);const u={clear:{haze:47e-6,sky:"#6195b5",fog:"#d7dfd5",sun:2.8,cloud:.7,wind:1},hazy:{haze:86e-6,sky:"#91aebc",fog:"#dddcc9",sun:2.25,cloud:.6,wind:.7},cloudy:{haze:61e-6,sky:"#829eae",fog:"#cbd3d1",sun:1.65,cloud:.95,wind:1.3},overcast:{haze:9e-5,sky:"#87969c",fog:"#b6c0bf",sun:.7,cloud:1,wind:1.6},rain:{haze:15e-5,sky:"#697e8c",fog:"#94a7ac",sun:.48,cloud:1,wind:2.2},storm:{haze:19e-5,sky:"#485c6b",fog:"#7f959e",sun:.3,cloud:1,wind:2.8},sunset:{haze:55e-6,sky:"#778eaa",fog:"#e5c9a5",sun:2.3,cloud:.76,wind:.8}};let d="clear",p=!1;function g(_="clear"){const m=_==="fog"||_==="foggy"?"hazy":_,f=u[m]||u.clear;d=m in u?m:"clear",e.fog.color.set(f.fog),e.fog.density=f.haze,e.background.copy(e.fog.color),r.uniforms.zenith.value.set(f.sky),r.uniforms.horizon.value.copy(e.fog.color),r.uniforms.sunStrength.value=f.sun/2.8,l.intensity=f.sun,a.intensity=d==="storm"?1.15:1.9,o.uniforms.opacity.value=f.cloud,o.uniforms.tint.value.set(d==="storm"?"#939da6":"#fffaf0"),s.uniforms.sunStrength.value=f.sun/2.8,s.uniforms.wind.value=f.wind;for(const E of[s,o])E.uniforms.fogColor.value.copy(e.fog.color),E.uniforms.fogDensity.value=f.haze}return g("clear"),{scene:e,terrainHeight:Fe,setWeather:g,update(_,m){if(p)return;m!==void 0&&m!==d&&g(m);const f=Number.isFinite(_)?_:0;s.uniforms.time.value=f,o.uniforms.time.value=f,h.rotation.y=-.6+Math.sin(f*.43)*.13,h.rotation.z=Math.sin(f*1.6)*.035},dispose(){if(p)return;p=!0;const _=new Set,m=new Set,f=new Set;e.traverse(E=>{E.geometry&&_.add(E.geometry),E.isInstancedMesh&&E.dispose();for(const y of E.material?Array.isArray(E.material)?E.material:[E.material]:[]){m.add(y);for(const v of Object.values(y))v?.isTexture&&f.add(v);for(const v of Object.values(y.userData||{}))v?.isTexture&&f.add(v);for(const v of Object.values(y.uniforms||{}))v.value?.isTexture&&f.add(v.value)}}),f.forEach(E=>E.dispose()),m.forEach(E=>E.dispose()),_.forEach(E=>E.dispose()),l.shadow.dispose(),e.onBeforeRender=()=>{},e.clear()}}}function Us(i,t=36,e=0,n=Math.PI*2){const r=[],s=[];for(const[a,l,c,h]of i)for(let u=0;u<=t;u++){const d=e+(n-e)*u/t;r.push(Math.sin(d)*l,Math.cos(d)*c+h,a)}for(let a=0;a<i.length-1;a++)for(let l=0;l<t;l++){const c=a*(t+1)+l,h=c+t+1;s.push(c,h,c+1,c+1,h,h+1)}const o=new Se;return o.setAttribute("position",new ee(r,3)),o.setIndex(s),o.computeVertexNormals(),o}function Rc(i,t,e,n,r,s,o=!1){const a=[],l=[],c=[],h=[0,.1,.42,.73,.84,.94,.985,1],u=24,d=new It("#eeeade"),p=new It(s),g=new It("#344b50");for(const m of[-1,1]){const f=a.length/3;h.forEach(y=>{const v=o?1-y*.5:1-y*.2-Math.max(0,y-.94)*7,b=t*v;for(let A=0;A<=u;A++){const R=Math.PI*2*A/u,P=(1-Math.cos(R))*.5,x=5*(o?.085:.135)*b*(.2969*Math.sqrt(P)-.126*P-.3516*P*P+.2843*P**3-.1036*P**4),M=Math.sin(P*Math.PI)*b*(o?0:.016);a.push(m*y*i*.5,n+Math.sign(Math.sin(R))*x+M+y*r,e+(P-.36)*b+y*(o?.35:.25)),(y>.985?g:y>=.84&&y<=.94?p:d).toArray(l,l.length)}});for(let y=0;y<h.length-1;y++)for(let v=0;v<u;v++){const b=f+y*(u+1)+v,A=b+u+1;m>0?c.push(b,b+1,A,b+1,A+1,A):c.push(b,A,b+1,b+1,A,A+1)}const E=f+(h.length-1)*(u+1);for(let y=1;y<u-1;y++)m>0?c.push(E,E+y,E+y+1):c.push(E,E+y+1,E+y)}const _=new Se;return _.setAttribute("position",new ee(a,3)),_.setAttribute("color",new ee(l,3)),_.setIndex(c),_.computeVertexNormals(),_}function Ce(i,t,e,n,r,s=8){const o=new L(...t),a=new L(...e),l=a.clone().sub(o),c=new Gt(new Gn(n,n,l.length(),s),r);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(s_,l.normalize()),i.add(c),c}function p_(i="trainer"){["trainer","tourer","sport"].includes(i)||(i="trainer");const t=i==="trainer",e=i==="sport",n=new wn;n.name=`${i} aircraft`;const r=e?"#bc5030":"#d4783d",s=Kt("#eeeade",{roughness:.31,metalness:.19}),o=Kt(r,{roughness:.32,metalness:.18}),a=Kt("#2d4147",{roughness:.32,metalness:.3}),l=Kt("#b8bfbb",{roughness:.27,metalness:.78}),c=Kt("#242a2b",{roughness:.91}),h=new ld({color:"#446b79",metalness:.3,roughness:.12,transparent:!0,opacity:.79,clearcoat:1,clearcoatRoughness:.08,side:un,depthWrite:!1}),u=[[-3.62,.09,.11,-.02],[-3.48,.33,.35,-.02],[-3.15,.46,.46,-.025],[-2.7,.5,.51,-.025],[-2,.56,.59,0],[-1.2,.61,.65,.015],[-.4,.62,.67,.035],[.45,.58,.6,.07],[1.25,.46,.45,.12],[2.15,.29,.3,.18],[2.95,.17,.2,.23],[3.55,.08,.12,.27],[3.82,.012,.035,.29]];if(e)for(const F of u)F[1]*=.84,F[2]*=.9;const d=new Gt(Us(u),s);n.add(d);for(const F of[-1,1]){const j=u.slice(2).map(([ft,Nt,Wt,te])=>[ft,Nt+.008,Wt+.008,te]),tt=F*Math.PI/2;n.add(new Gt(Us(j,5,tt-.11,tt+.11),o)),n.add(new Gt(Us(j,3,tt+(F>0?.15:-.2),tt+(F>0?.2:-.15)),a))}const p=e?8.2:t?10.9:11.6,g=t?1.02:-.37,_=t?-.29:-.12,m=Kt("#ffffff",{vertexColors:!0,roughness:.35,metalness:.18,side:un}),f=new Gt(Rc(p,e?1.6:1.7,_,g,t?.11:.34,r),m);n.add(f),n.add(new Gt(Rc(e?3.25:3.8,.96,2.91,.36,.08,r,!0),m));const E=new Xs;E.moveTo(1.96,.34),E.bezierCurveTo(2.4,.68,2.53,1.82,2.92,2.02),E.quadraticCurveTo(3.13,2.12,3.36,2.04),E.lineTo(3.7,.48),E.quadraticCurveTo(3.71,.28,3.52,.28),E.lineTo(1.96,.34);const y=new qr(E,{depth:.085,bevelEnabled:!0,bevelThickness:.025,bevelSize:.035,bevelSegments:2,steps:1,curveSegments:12});y.rotateY(-Math.PI/2),y.translate(.043,0,0),n.add(new Gt(y,o)),Ce(n,[0,.65,3.6],[0,1.88,3.31],.018,a);for(const F of[-1,1])Ce(n,[F*.08,1.54,3.05],[F*.08,1.54,3.4],.047,s),t&&(Ce(n,[F*.54,-.32,.5],[F*3.72,1.1,.05],.038,s),Ce(n,[F*.55,-.3,.62],[F*3.72,1.1,.64],.03,s));const v=t?[[-1.65,.44,.12,.49],[-1.06,.55,.65,.48],[-.78,.57,.7,.47],[.43,.53,.66,.44],[.94,.44,.3,.41],[1.14,.38,.02,.4]]:[[-1.58,.32,.04,.55],[-1.2,.48,.4,.55],[-.67,e?.45:.56,.68,.52],[.05,e?.43:.54,.72,.49],[.66,.39,.48,.44],[1.13,.23,.04,.42]],b=new Gt(Us(v,24,-Math.PI/2,Math.PI/2),h);b.renderOrder=2,n.add(b);for(const F of[-1,1]){for(let j=0;j<v.length-1;j++){const tt=v[j],ft=v[j+1];Ce(n,[F*tt[1],tt[3],tt[0]],[F*ft[1],ft[3],ft[0]],.025,s)}t&&(Ce(n,[F*.54,.46,-1.1],[F*.4,1.05,-.98],.029,s),Ce(n,[F*.54,.45,.37],[F*.39,1.01,.37],.032,s),Ce(n,[F*.61,.12,-.7],[F*.6,.12,-.46],.018,l))}Ce(n,[0,.61,-1.65],[0,1.13,-1.03],.025,s);const A=new Hn(.38,.49,.17);for(const F of e?[0]:[-.27,.27]){const j=new Gt(A,a);j.position.set(F,.58,.23),j.rotation.x=-.12,n.add(j)}const R=new Gt(new _n(1,16,8),a);R.scale.set(.51,.11,.23),R.position.set(0,.59,-1.03),n.add(R);for(const F of[-1,1]){Ce(n,[F*.42,-.37,.36],[F*1.1,-1.29,.54],.057,t?l:s);const j=new Gt(new Yr(.215,.09,8,18),c);j.rotation.y=Math.PI/2,j.position.set(F*1.12,-1.345,.54),n.add(j);const tt=new Gt(new Gn(.125,.125,.19,12),l);if(tt.rotation.z=Math.PI/2,tt.position.copy(j.position),n.add(tt),!t){const ft=new Gt(new _n(1,16,10),s);ft.scale.set(.17,.22,.52),ft.position.set(F*1.12,-1.25,.49),n.add(ft)}}Ce(n,[0,-.42,-2.45],[0,-1.39,-2.58],.048,l);const P=new Gt(new Yr(.17,.065,8,16),c);if(P.rotation.y=Math.PI/2,P.position.set(0,-1.415,-2.58),n.add(P),!t){const F=new Gt(new _n(1,14,8),s);F.scale.set(.145,.18,.38),F.position.set(0,-1.34,-2.6),n.add(F)}const x=new wn;x.position.set(0,-.015,-3.58),n.add(x);const M=new Gt(new _n(1,24,16),o);M.scale.set(.22,.22,.4),M.position.z=-.22,x.add(M);const C=new Xs;C.moveTo(-.065,.13),C.bezierCurveTo(-.11,.48,-.035,1.13,.075,1.2),C.quadraticCurveTo(.17,1.22,.18,1.12),C.bezierCurveTo(.19,.78,.1,.38,.065,.13),C.closePath();const N=new qr(C,{depth:.025,bevelEnabled:!0,bevelSegments:1,bevelSize:.012,bevelThickness:.009,curveSegments:10,steps:1}),I=e?3:2;for(let F=0;F<I;F++){const j=new Gt(N,a);j.rotation.z=F*Math.PI*2/I,x.add(j)}const G=new Qs({color:"#394349",transparent:!0,opacity:0,side:un,depthWrite:!1}),B=new Gt(new il(.24,1.19,48),G);B.position.z=-.025,x.add(B);const H=new Gt(new _n(1,16,8),a);H.scale.set(.27,.105,.045),H.position.set(0,-.25,-3.45),n.add(H),Ce(n,[.28,-.38,-2.6],[.34,-.7,-2.44],.055,a),Ce(n,[0,.69,1.27],[0,1.2,1.54],.011,a);const Y=new _n(.055,8,6);for(const F of[-1,1]){const j=new Gt(Y,Kt(F<0?"#ff4c32":"#76e5a4",{emissive:F<0?"#ff3218":"#36db83",emissiveIntensity:1.5}));j.position.set(F*p*.494,g+(t?.11:.34),_+.22),n.add(j)}return n.traverse(F=>{F.isMesh&&F!==B&&F!==b&&(F.castShadow=!0,F.receiveShadow=!0)}),n.userData.type=i,n.userData.propeller=x,n.userData.cockpitAnchor=new L(0,.93,-.59),n.userData.groundClearance=1.65,n.userData.wingspan=p,n.userData.animate=(F,j=0,tt=700+j*2e3)=>{const ft=bi.clamp(j,0,1);x.rotation.z=(x.rotation.z+Math.max(0,F)*tt*Math.PI/30)%(Math.PI*2),G.opacity=(.045+ft*.13)*Math.min(1,tt/800)},n}function m_(){const i=new wn;i.name="Camera-local cockpit frame";const t=Kt("#26383c",{roughness:.84}),e=Kt("#d8d3c4",{roughness:.5}),n=new Xs;n.moveTo(-.76,-.64),n.lineTo(-.76,-.31),n.quadraticCurveTo(0,-.12,.76,-.31),n.lineTo(.76,-.64),n.closePath();const r=new Gt(new qr(n,{depth:.08,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,steps:1}),t);r.position.z=-.88,i.add(r);for(const _ of[-1,1])Ce(i,[_*.7,-.36,-.81],[_*.48,.57,-.67],.028,e),Ce(i,[_*.48,.57,-.67],[_*.1,.67,-.57],.021,e);const s=256,o=[{label:"AIRSPEED",unit:"KNOTS",min:0,max:200,steps:40,major:4,start:Math.PI*.75,sweep:Math.PI*1.5},{label:"ATTITUDE"},{label:"ALTITUDE",unit:"FEET",min:0,max:10,steps:50,major:5,start:-Math.PI/2,sweep:Math.PI*2},{label:"VERT SPEED",unit:"1000 FT / MIN",min:-2,max:2,steps:40,major:10,start:Math.PI*.15,sweep:Math.PI*1.7},{label:"ENGINE",unit:"RPM x 100",min:0,max:30,steps:30,major:5,start:Math.PI*.75,sweep:Math.PI*1.5}],a=(_,m)=>_.start+bi.clamp((m-_.min)/(_.max-_.min),0,1)*_.sweep,l=document.createElement("canvas");l.width=s*o.length,l.height=s;const c=l.getContext("2d");o.forEach((_,m)=>{c.save(),c.translate(m*s+128,128);const f=c.createRadialGradient(-25,-45,0,0,0,128);if(f.addColorStop(0,"#273c40"),f.addColorStop(1,"#111f23"),c.fillStyle=f,c.fillRect(-128,-128,256,256),c.strokeStyle="#71837d",c.lineWidth=2,c.beginPath(),c.arc(0,0,117,0,Math.PI*2),c.stroke(),m!==1){c.textAlign="center",c.textBaseline="middle";for(let y=0;y<=_.steps;y++){if(m===2&&y===_.steps)continue;const v=_.min+y/_.steps*(_.max-_.min),b=a(_,v),A=y%_.major===0,R=A?89:98;c.strokeStyle="#d6ddce",c.lineWidth=A?2.4:1.2,c.beginPath(),c.moveTo(Math.cos(b)*R,Math.sin(b)*R),c.lineTo(Math.cos(b)*106,Math.sin(b)*106),c.stroke(),A&&(c.font="17px Arial, sans-serif",c.fillStyle="#e4e7d9",c.fillText(String(Math.round(v)),Math.cos(b)*75,Math.sin(b)*75))}const E=m===0?[[45,140,"#91b799"],[140,175,"#d1b774"],[175,200,"#dd7653"]]:m===4?[[18,25,"#91b799"],[27,30,"#dd7653"]]:[];for(const[y,v,b]of E)c.strokeStyle=b,c.lineWidth=4,c.beginPath(),c.arc(0,0,111,a(_,y),a(_,v)),c.stroke();c.fillStyle="#d8dfd3",c.font="bold 17px Arial, sans-serif",c.fillText(_.label,0,-35),c.fillStyle="#aabbb5",c.font="12px Arial, sans-serif",c.fillText(_.unit,0,-16),c.fillStyle="#101d20",c.fillRect(-49,32,98,28)}c.restore()});const h=sr(l.width,l.height,_=>_.drawImage(l,0,0));h.name="Live cockpit instrument atlas",h.generateMipmaps=!1,h.minFilter=hn,h.anisotropy=1;const u=h.image.getContext("2d"),d=new Qs({map:h,toneMapped:!1,fog:!1}),p=Kt("#8c9894",{metalness:.7,roughness:.35});for(let _=0;_<5;_++){const m=(_-2)*.18,f=new Qa(.062,40),E=f.attributes.uv;for(let b=0;b<E.count;b++)E.setX(b,(E.getX(b)+_)/o.length);const y=new Gt(f,d);y.name=o[_].label,y.position.set(m,-.282-Math.abs(_-2)*.0085,-.773),i.add(y);const v=new Gt(new Yr(.065,.004,6,32),p);v.position.copy(y.position),i.add(v)}function g(_,m,f=88,E=2.5,y="#f2e8c9"){u.save(),u.translate(_*s+128,128),u.rotate(m),u.fillStyle=y,u.strokeStyle="#142226",u.lineWidth=1,u.beginPath(),u.moveTo(-16,-E),u.lineTo(f,0),u.lineTo(-16,E),u.closePath(),u.fill(),u.stroke(),u.fillStyle="#d58a60",u.beginPath(),u.arc(0,0,5.5,0,Math.PI*2),u.fill(),u.restore()}return i.userData.update=(_={},m)=>{const f=R=>Number.isFinite(_?.[R])?_[R]:0,E=Math.max(0,f("airspeed")*1.943844),y=f("altitude")*3.28084,v=f("verticalSpeed")*196.8504,b=Math.max(0,f("engineRPM"));u.clearRect(0,0,l.width,l.height),u.drawImage(l,0,0),g(0,a(o[0],E)),g(2,-Math.PI/2+y/1e4*Math.PI*2,51,4.5,"#d99c71"),g(2,-Math.PI/2+y/1e3*Math.PI*2),g(3,a(o[3],v/1e3)),g(4,a(o[4],b/100)),u.font="23px monospace",u.textAlign="center",u.textBaseline="middle",u.fillStyle="#f0e9d4";const A=Math.round(v/10)*10;for(const[R,P]of[[0,Math.round(E)],[2,Math.round(y)],[3,`${A>0?"+":""}${A}`],[4,Math.round(b)]])u.fillText(String(P),R*s+128,174);if(u.save(),u.translate(s+128,128),u.beginPath(),u.arc(0,0,115,0,Math.PI*2),u.clip(),m?.width>0&&m.height>0)u.drawImage(m,-128,-128,256,256);else{u.save(),u.rotate(-f("roll")*Math.PI/180),u.translate(0,bi.clamp(f("pitch"),-90,90)*2.6),u.fillStyle="#668e9a",u.fillRect(-500,-600,1e3,600),u.fillStyle="#8a7150",u.fillRect(-500,0,1e3,600),u.strokeStyle="#eee7d2",u.lineWidth=2,u.beginPath(),u.moveTo(-500,0),u.lineTo(500,0),u.stroke();for(let R=-30;R<=30;R+=10)R&&(u.beginPath(),u.moveTo(-22,-R*2.6),u.lineTo(22,-R*2.6),u.stroke());u.restore(),u.strokeStyle="#f3bc7c",u.lineWidth=4,u.beginPath(),u.moveTo(-65,0),u.lineTo(-24,0),u.lineTo(-17,7),u.moveTo(65,0),u.lineTo(24,0),u.lineTo(17,7),u.stroke(),u.fillStyle="#f6e7c7",u.beginPath(),u.arc(0,0,4,0,Math.PI*2),u.fill()}u.restore(),u.fillStyle="#dbe3d6",u.font="12px Arial, sans-serif",u.fillText("ATTITUDE",s+128,235),h.needsUpdate=!0},i.userData.update(),Ce(i,[0,-.6,-.65],[0,-.43,-.5],.02,t),Ce(i,[-.11,-.43,-.5],[.11,-.43,-.5],.018,t),i}const Go=Math.PI/180,_i=36e3,g_=11e3,Ji=i=>Number.isFinite(i)?i:0;class __{constructor({attitudeCanvas:t,mapCanvas:e,terrainHeight:n}){this.attitudeCanvas=t,this.mapCanvas=e,this.attitude=t.getContext("2d"),this.map=e.getContext("2d"),this.terrain=e.ownerDocument.createElement("canvas");const r=512;this.terrain.width=this.terrain.height=r;const s=this.terrain.getContext("2d"),o=s.createImageData(r,r),a=new Float32Array(r*r),l=_i/r;for(let c=0;c<r;c++)for(let h=0;h<r;h++)a[c*r+h]=Ji(n((h+.5)*l-_i/2,(c+.5)*l-_i/2));for(let c=0;c<r;c++)for(let h=0;h<r;h++){const u=c*r+h,d=a[u],p=a[c*r+Math.max(0,h-1)],g=a[Math.max(0,c-1)*r+h];let _,m,f;if(d<=0){const E=Math.max(0,1+d/90);_=27+E*5,m=51+E*9,f=54+E*8}else{const E=Math.min(1,d/3e3),y=Math.max(-15,Math.min(19,(p+g-2*d)*.12)),v=d>180&&(Math.floor(d/200)!==Math.floor(p/200)||Math.floor(d/200)!==Math.floor(g/200)),b=p<=0||g<=0,A=v?-15:b?22:0;_=61+E*46+y+A,m=75+E*38+y+A,f=53+E*34+y+A}o.data.set([_,m,f,255],u*4)}s.putImageData(o,0,0)}update(t,e,n,r=[]){const s=Math.max(-90,Math.min(90,Ji(t.pitch))),o=Ji(t.roll)*Go,a=(Ji(t.heading)%360+360)%360,l=this.attitude;l.save(),l.setTransform(this.attitudeCanvas.width/240,0,0,this.attitudeCanvas.height/240,0,0),l.clearRect(0,0,240,240),l.translate(120,120),l.fillStyle="#152529",l.beginPath(),l.arc(0,0,116,0,Math.PI*2),l.fill(),l.strokeStyle="#a8b4a53d",l.lineWidth=1.5,l.stroke(),l.save(),l.beginPath(),l.arc(0,0,99,0,Math.PI*2),l.clip(),l.rotate(-o),l.translate(0,s*2.8);const c=l.createLinearGradient(0,-250,0,0);c.addColorStop(0,"#375b6a"),c.addColorStop(1,"#729394"),l.fillStyle=c,l.fillRect(-500,-600,1e3,600);const h=l.createLinearGradient(0,0,0,250);h.addColorStop(0,"#756047"),h.addColorStop(1,"#3c3930"),l.fillStyle=h,l.fillRect(-500,0,1e3,600),l.strokeStyle="#f1e7ca",l.lineWidth=2,l.beginPath(),l.moveTo(-500,0),l.lineTo(500,0),l.stroke(),l.font="10px monospace",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#f1e7ca",l.lineWidth=1.2;for(let y=-80;y<=80;y+=5){if(y===0)continue;const v=-y*2.8,b=y%10===0,A=b?23:11;l.beginPath(),l.moveTo(-A,v),l.lineTo(A,v),l.stroke(),b&&(l.fillText(String(Math.abs(y)),-A-15,v),l.fillText(String(Math.abs(y)),A+15,v))}l.restore(),l.strokeStyle="#e4dfc4";for(const y of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){l.save(),l.rotate(y*Go);const v=y%30===0;l.lineWidth=v?2:1,l.beginPath(),l.moveTo(0,-109),l.lineTo(0,v?-98:-103),l.stroke(),l.restore()}l.save(),l.rotate(-o),l.fillStyle="#f0e9d3",l.beginPath(),l.moveTo(0,-96),l.lineTo(-5,-86),l.lineTo(5,-86),l.closePath(),l.fill(),l.restore(),l.lineJoin="round",l.lineWidth=5,l.strokeStyle="#18282b",l.beginPath(),l.moveTo(-66,0),l.lineTo(-30,0),l.lineTo(-23,8),l.moveTo(66,0),l.lineTo(30,0),l.lineTo(23,8),l.stroke(),l.lineWidth=3,l.strokeStyle="#e9a16b",l.stroke(),l.fillStyle="#fff9e9",l.beginPath(),l.moveTo(0,-9),l.lineTo(3,-2),l.lineTo(16,3),l.lineTo(16,6),l.lineTo(3,4),l.lineTo(2,11),l.lineTo(-2,11),l.lineTo(-3,4),l.lineTo(-16,6),l.lineTo(-16,3),l.lineTo(-3,-2),l.closePath(),l.fill(),l.restore();const u=this.map,d=Ji(e.x),p=Ji(e.z),g=360/g_,_=180-d*g,m=130-p*g;u.save(),u.setTransform(this.mapCanvas.width/360,0,0,this.mapCanvas.height/260,0,0),u.fillStyle="#1b3336",u.fillRect(0,0,360,260),u.imageSmoothingEnabled=!0,u.drawImage(this.terrain,_-_i/2*g,m-_i/2*g,_i*g,_i*g),u.strokeStyle="#d9dfbb18",u.lineWidth=1,u.beginPath();const f=2e3*g;for(let y=(_%f+f)%f;y<360;y+=f)u.moveTo(y,0),u.lineTo(y,260);for(let y=(m%f+f)%f;y<260;y+=f)u.moveTo(0,y),u.lineTo(360,y);u.stroke(),u.strokeStyle="#f0f0db65",u.lineWidth=1.5,u.beginPath();let E=!1;for(const y of r){if(!y||!Number.isFinite(y.x)||!Number.isFinite(y.z)){E=!1;continue}const v=_+y.x*g,b=m+y.z*g;E?u.lineTo(v,b):u.moveTo(v,b),E=!0}u.stroke(),u.save(),u.translate(_,m),u.fillStyle="#182a2d",u.fillRect(-5,-850*g-3,10,1700*g+6),u.fillStyle="#dcdabb",u.fillRect(-2,-850*g,4,1700*g),u.strokeStyle="#dbddbb70",u.lineWidth=1,u.beginPath(),u.arc(0,0,12,0,Math.PI*2),u.stroke(),u.font="bold 12px monospace",u.textBaseline="middle",u.fillStyle="#172a2de0",u.fillRect(16,-10,42,20),u.fillStyle="#ece9cd",u.fillText("EC01",21,1),u.restore(),u.save(),u.translate(180,130),u.rotate(a*Go),u.fillStyle="#eea16a",u.strokeStyle="#192a2e",u.lineWidth=2,u.lineJoin="round",u.beginPath(),u.moveTo(0,-12),u.lineTo(8,9),u.lineTo(0,5),u.lineTo(-8,9),u.closePath(),u.fill(),u.stroke(),u.restore(),u.fillStyle="#16282bcb",u.fillRect(316,9,34,53),u.fillRect(10,222,90,28),u.font="11px monospace",u.fillStyle="#e6e6cd",u.textAlign="center",u.fillText("N",333,25),u.beginPath(),u.moveTo(333,32),u.lineTo(329,45),u.lineTo(333,42),u.lineTo(337,45),u.closePath(),u.fill(),u.strokeStyle="#e6e6cd",u.lineWidth=1.5,u.beginPath(),u.moveTo(20,237),u.lineTo(20,242),u.lineTo(20+1852*g,242),u.lineTo(20+1852*g,237),u.stroke(),u.fillText("1 NM",20+926*g,233),u.restore()}}const Ns=(i,t,e)=>Math.max(t,Math.min(e,Number.isFinite(i)?i:t)),Fn=(i,t,e,n=.2)=>{i.cancelScheduledValues(e),i.setTargetAtTime(t,e,n)};class v_{constructor(){this.muted=!0,this.volume=.45,this.active=!1,this.context=null,this.sources=[],this.masterTarget=null}async init(){try{if(!this.context){const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return!1;const n=new e;this.context=n,this.master=n.createGain(),this.master.gain.value=0,this.masterTarget=null,this.master.connect(n.destination),this.engineFilter=n.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=1100,this.engineFilter.Q.value=.55,this.engineFilter.connect(this.master),this.engineGain=n.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(this.engineFilter),this.engine=n.createOscillator(),this.sources.push(this.engine);const r=new Float32Array([0,1,.42,.24,.13,.07,.035,.015]);this.engine.setPeriodicWave(n.createPeriodicWave(new Float32Array(r.length),r)),this.engine.frequency.value=70,this.engine.connect(this.engineGain),this.propGain=n.createGain(),this.propGain.gain.value=0,this.propGain.connect(this.engineFilter),this.prop=n.createOscillator(),this.sources.push(this.prop),this.prop.type="sine",this.prop.frequency.value=35,this.prop.connect(this.propGain);const s=n.createBuffer(1,n.sampleRate*2,n.sampleRate),o=s.getChannelData(0);for(let p=0;p<o.length;p++)o[p]=Math.random()*2-1;const a=n.createBufferSource();this.sources.push(a),a.buffer=s,a.loop=!0;const l=n.createBiquadFilter();l.type="highpass",l.frequency.value=180,l.Q.value=.5,this.airFilter=n.createBiquadFilter(),this.airFilter.type="lowpass",this.airFilter.frequency.value=1200,this.airFilter.Q.value=.5,this.airGain=n.createGain(),this.airGain.gain.value=0,a.connect(l),l.connect(this.airFilter),this.airFilter.connect(this.airGain),this.airGain.connect(this.master);const c=n.createOscillator();this.sources.push(c),c.type="sine",c.frequency.value=680;const h=n.createGain();h.gain.value=.5;const u=n.createOscillator();this.sources.push(u),u.frequency.value=2.7;const d=n.createGain();d.gain.value=.5,u.connect(d),d.connect(h.gain),this.warningGain=n.createGain(),this.warningGain.gain.value=0,c.connect(h),h.connect(this.warningGain),this.warningGain.connect(this.master);for(const p of this.sources)p.start()}const t=this.context;return t.state==="suspended"&&await t.resume(),this.context!==t?!1:(this._syncMaster(),t.state==="running")}catch{return await this.dispose(),!1}}_syncMaster(){if(!this.context||this.context.state==="closed")return;const t=this.active&&!this.muted?this.volume*.5:0;t!==this.masterTarget&&(this.masterTarget=t,Fn(this.master.gain,t,this.context.currentTime,.12))}setMuted(t){this.muted=!!t,this._syncMaster()}setVolume(t){this.volume=Ns(t,0,1),this._syncMaster()}update(t,e,n,r=!1){if(this.active=!!n,!this.context||this.context.state==="closed")return;this._syncMaster();const s=this.context.currentTime,o=Ns(e,0,1),a=Ns(t.engineRPM,0,3500),l=Ns(t.airspeed,0,160)/100,c=Math.min(1,a/650),h=(.085+o*.075)*c*(r?.85:1);Fn(this.engine.frequency,Math.max(18,a/30),s,.3),Fn(this.prop.frequency,Math.max(9,a/60),s,.3),Fn(this.engineGain.gain,h,s),Fn(this.propGain.gain,h*.2,s),Fn(this.engineFilter.frequency,(r?550:900)+o*450,s),Fn(this.airGain.gain,Math.min(.11,l*l*.065)*(r?.5:1),s,.35),Fn(this.airFilter.frequency,(r?650:1100)+l*650,s,.35);const u=this.active&&t.stallWarning&&!t.onGround;Fn(this.warningGain.gain,u?.022:0,s,.045)}async dispose(){const t=this.context;this.context=null,this.masterTarget=null;for(const e of this.sources){try{e.stop()}catch{}e.disconnect()}if(this.sources=[],t&&t.state!=="closed")try{await t.close()}catch{}}}const Su="aeronaut-lang",Cc={en:{tagline:"THE FLIGHT EXPERIENCE",headerStatusIdle:"A WORLD ABOVE THE EVERYDAY",soundToggleTitle:"Toggle sound (M)",soundEnable:"Enable sound",soundMute:"Mute sound",pauseTitle:"Pause (Esc)",pauseAria:"Pause flight",flightGuide:"Flight guide",menuEyebrow:"A DIFFERENT POINT OF VIEW",heroTitleLine1:"Find your",heroTitleLine2:"higher ground.",heroLead:"Leave the ordinary below.",heroLead2:"Pick your aircraft. Chase the horizon.",introGuidePrompt:"Your first time in the sky?",introGuideCta:"Meet your controls ↗",locationName:"THE EMERALD COAST",sceneryLine1:"UNLIMITED SKY.",sceneryLine2:"ONE PERFECT ESCAPE.",dispatchTitle:"YOUR NEXT HORIZON",dispatchPlan:"FLIGHT PLAN",fieldAircraft:"YOUR AIRCRAFT",fieldAdventure:"THE ADVENTURE",fieldConditions:"THE CONDITIONS",aircraftTrainer:"Trainer 172",aircraftTourer:"Tourer GT",aircraftSport:"Sport S2",aircraftDetail_trainer:"High-wing · Forgiving & familiar",aircraftDetail_tourer:"Low-wing · Built to go further",aircraftDetail_sport:"Aerobatic · A little more freedom",flightCoast:"Coastal discovery",flightRunway:"Runway departure",flightLanding:"The perfect landing",flightMountain:"Above the peaks",flightDetail_coast:"Already airborne. Just explore.",flightDetail_runway:"From the first roll to open sky.",flightDetail_landing:"On final. Find your softest touch.",flightDetail_mountain:"A different kind of altitude.",flightType_coast:"FREE FLIGHT",flightType_runway:"TAKEOFF PRACTICE",flightType_landing:"LANDING PRACTICE",flightType_mountain:"HIGH COUNTRY",flightInstruction_coast:"The coast is yours. Bank left to discover the islands.",flightInstruction_runway:"Full throttle. At 60 knots, gently pull the nose up.",flightInstruction_landing:"Runway 36 is ahead. Keep a gentle descent.",flightInstruction_mountain:"Explore the high country. Keep an eye on your airspeed.",landingInstruction:i=>`Runway 36 is ahead. Aim for ${i} knots and a gentle descent.`,weatherClear:"Clear & calm",weatherSunset:"Golden hour",weatherCloudy:"Coastal breeze",weatherStorm:"Passing storm",weatherDetail_clear:"18°C · Light wind · 25 km visibility",weatherDetail_sunset:"21°C · Still air · The light is yours",weatherDetail_cloudy:"16°C · WNW 10 kt · Scattered cloud",weatherDetail_storm:"12°C · SW 18 kt · Gusty & challenging",launchPreparing:"Preparing the sky",launchReady:"Take to the sky",launchUnable:"Unable to prepare",launchDetailBuilding:"BUILDING YOUR WORLD",launchDetailReady:"YOUR ADVENTURE STARTS HERE",footerLove:"BUILT FOR THE LOVE OF FLIGHT.",footerPhysics:"REAL PHYSICS. REAL FREEDOM.",footerHeadphones:"HEADPHONES RECOMMENDED",cameraChase:"Chase",cameraCockpit:"Cockpit",cameraOrbit:"Orbit",mousePilot:"Mouse pilot",autoRudder:"Auto rudder",hdgUnit:"HDG",objectiveFinal:"FINAL APPROACH",objectiveClearedTakeoff:"CLEARED FOR TAKEOFF · RWY 36",objectivePositiveClimb:"POSITIVE CLIMB",objectiveTakeoffComplete:"TAKEOFF COMPLETE",objectiveFinalRwy:"FINAL APPROACH · RWY 36",objectiveWelcome:"WELCOME TO EMERALD COAST",objDescLineUp:"Line up with runway 36",objDescClimb:"Beautiful. Keep climbing at 75–85 knots.",objDescRotate:"Rotate. Gently pull the nose up.",objDescFullThrottle:"Throttle to 100%. Keep straight with the rudder.",objDescHardPart:"The hard part is over. The whole coast is yours.",objDescIdle:"Throttle to idle. Hold B to slow down.",objDescAlign:i=>`Align with the centerline. Aim for ${i} knots.`,objDescFlare:"Gently flare. Idle throttle and keep the wings level.",objDescThreshold:"Aim just beyond the near runway threshold. Flaps 20°.",mapRegion:"EMERALD COAST",mapAirport:"EC01",airportDistance:i=>`${i} NM TO FIELD`,pitchRoll:"PITCH / ROLL",rudderLeft:"RUD ◀",rudderRight:"▶ RUD",rudderLeftAria:"Rudder left",rudderRightAria:"Rudder right",airspeed:"AIRSPEED",attitude:"ATTITUDE",altitude:"ALTITUDE",verticalSpeed:"VERTICAL SPEED",gLoad:"G LOAD",throttleLabel:"THROTTLE",flapsLabel:"FLAPS",brakesLabel:"BRAKES",on:"ON",off:"OFF",wordPitch:"PITCH",wordRoll:"ROLL",wordRudder:"RUDDER",wordThrottle:"THROTTLE",flightTimeLabel:i=>`${i} FLIGHT TIME`,cleanView:"CLEAN VIEW",closeGuide:"Close flight guide",guideEyebrow:"A FEW THINGS BEFORE YOU FLY",guideTitleLine1:"Make yourself",guideTitleLine2:"at home in the sky.",tabControls:"The controls",tabFlying:"The art of flying",tabSettings:"Your preferences",ctrlPitch:"Pitch nose up / down",ctrlBank:"Bank left / right",ctrlThrottle:"Throttle up / down",ctrlRudder:"Rudder left / right",ctrlFlaps:"Flaps / hold brakes",ctrlCamera:"Change camera",ctrlPauseRestart:"Pause / restart",ctrlCleanSound:"Clean view / sound",guideNoteControls:"Prefer a mouse? Enable Mouse pilot in flight, then drag anywhere in the sky. Pull down to climb. Touch controls appear on phones and tablets. Gamepad: left stick to fly, right stick up/down for throttle, triggers for rudder.",tip1Title:"Small inputs. Big horizons.",tip1Body:"Use gentle taps to change your attitude. Bank to turn, then add a little back pressure to hold altitude. Release the controls to let the aircraft settle.",tip2Title:"Let the wing do the work.",tip2Body:"On the runway, use full throttle. At 55–65 knots, gently pull the nose up. Climb at 75–85 knots. If you hear a stall warning, lower the nose and add power.",tip3Title:"Every great flight has a soft finish.",tip3Body:"Approach runway 36 at 65–75 knots in the trainer, or 80–90 knots in the tourer and sport, with flaps 20–30°. Descend gently, then ease the nose up just before touchdown. Idle the throttle and hold B to brake.",guideNoteFlying:"Aeronaut models lift, drag, stalls, wind, inertia and ground handling. It is a recreational simulator, not a certified flight-training device.",settingSensitivity:"Control sensitivity",settingSensitivitySub:"Gentler inputs for a smoother flight",settingVolume:"Sound volume",settingVolumeSub:"Engine, airflow, and cockpit warnings",settingQuality:"Graphics quality",settingQualitySub:"Lower quality helps on older devices",qualityAuto:"Auto",qualityHigh:"High",qualityLow:"Performance",settingInvert:"Invert pitch",settingInvertSub:"Reverse mouse, touch, and stick pitch",enterFullscreen:"Enter fullscreen ↗",leaveFullscreen:"Leave fullscreen ↙",fullscreenUnavailable:"Fullscreen is unavailable in this browser",guideDone:"Ready for the horizon",takeBreather:"TAKE A BREATHER",pauseTitleText:"The sky can wait.",pauseBody:"Your flight is paused. Pick up right where you left off.",airborneLabel:"AIRBORNE",distanceLabel:"DISTANCE",maxAltitudeLabel:"MAX ALTITUDE",backToSky:"Back to the sky",restartFlight:"Restart flight",flightPlanner:"Flight planner",resultEyebrowSuccess:"A FLIGHT WORTH REMEMBERING",resultEyebrowFail:"EVERY FLIGHT TEACHES YOU SOMETHING",resultTitleSuccessLine1:"Welcome back",resultTitleSuccessLine2:"to solid ground.",resultTitleFailLine1:"A little too",resultTitleFailLine2:"close to earth.",resultMessageSuccess:(i,t)=>`A safe landing at Emerald Coast. Touchdown at ${i} knots with a ${t} m/s descent. The next horizon is waiting.`,resultMessageFailAdviceHard:"Reduce your descent rate before touchdown and flare gently just above the runway.",resultMessageFailAdviceWing:"Keep the wings level near the ground. Small, gentle inputs are your best friend.",resultMessageFailAdviceGeneral:"Keep enough altitude to recover, watch your airspeed, and line up with the runway for landing.",flightTimeStat:"FLIGHT TIME",bestAltitudeLabel:"BEST ALTITUDE",flyAgain:"Fly again",backToPlanner:"Back to flight planner",loadErrorTitle:"We couldn’t prepare the sky.",loadErrorWebgl:"Please use a browser with WebGL 2 enabled.",loadErrorInit:"This flight needs WebGL 2. Enable hardware acceleration in your browser, or try a recent version of Chrome, Edge, Firefox, or Safari.",loadErrorContextLost:"The graphics connection was interrupted. Reload to prepare a fresh flight.",tryAgain:"Try again",showInstruments:"Show instruments",toastStartTouch:"Drag the left stick to fly. The throttle is below.",toastStartKeyboard:"Small inputs, big horizons. Press ? for your flight guide.",toastCameraChase:"Chase view · Right-drag to look around",toastCameraCockpit:"Cockpit view · Right-drag to look around",toastCameraOrbit:"Orbit view · Drag to explore your aircraft",toastAssistOn:"Automatic rudder coordination on",toastAssistOff:"Full manual rudder. Q / E to coordinate turns.",toastMouseOn:"Drag in the sky to fly. Pull down to climb. Release to center.",toastMouseOff:"Keyboard controls active",toastTouchdown:i=>`Touchdown. ${i} m/s · Idle throttle and hold B to brake.`,toastTakeoffComplete:"You’re flying. Welcome to a different point of view.",toastGamepad:"Gamepad connected. Left stick to fly.",stallWarning:"STALL · LOWER THE NOSE",terrainWarning:"TERRAIN · PULL UP",gLoadWarning:"HIGH G LOAD · EASE THE CONTROLS",crash_hard:"Hard landing",crash_sideways:"Sideways ground impact",crash_wing:"Wing or fuselage ground strike",crash_terrain:"High-speed rough terrain impact",crash_invalid:"Invalid flight state",crash_water:"Water landing",crash_ground:"Ground impact"},ar:{tagline:"تجربة الطيران",headerStatusIdle:"عالم أعلى من الاعتيادي",soundToggleTitle:"تبديل الصوت (M)",soundEnable:"تفعيل الصوت",soundMute:"كتم الصوت",pauseTitle:"إيقاف مؤقت (Esc)",pauseAria:"إيقاف الرحلة مؤقتاً",flightGuide:"دليل الطيران",menuEyebrow:"زاوية نظر مختلفة",heroTitleLine1:"الحق",heroTitleLine2:"بأفق أعلى.",heroLead:"اترك المألوف خلفك.",heroLead2:"اختر طائرتك. طارد الأفق.",introGuidePrompt:"أول مرة إلك بالسماء؟",introGuideCta:"تعرف على أدوات التحكم ↗",locationName:"الساحل الزمردي",sceneryLine1:"سماء بلا حدود.",sceneryLine2:"هروب مثالي واحد.",dispatchTitle:"أفقك القادم",dispatchPlan:"خطة الرحلة",fieldAircraft:"طائرتك",fieldAdventure:"المغامرة",fieldConditions:"الأحوال الجوية",aircraftTrainer:"Trainer 172",aircraftTourer:"Tourer GT",aircraftSport:"Sport S2",aircraftDetail_trainer:"جناح علوي · متسامحة ومألوفة",aircraftDetail_tourer:"جناح سفلي · مصممة للمسافات الطويلة",aircraftDetail_sport:"بهلوانية · حرية أكبر شوي",flightCoast:"استكشاف الساحل",flightRunway:"إقلاع من المدرج",flightLanding:"الهبوط المثالي",flightMountain:"فوق القمم",flightDetail_coast:"أنت بالجو أصلاً. بس استكشف.",flightDetail_runway:"من أول انطلاقة للسماء المفتوحة.",flightDetail_landing:"بالاقتراب النهائي. لاقي ألطف لمسة.",flightDetail_mountain:"نوع مختلف من الارتفاع.",flightType_coast:"طيران حر",flightType_runway:"تمرين إقلاع",flightType_landing:"تمرين هبوط",flightType_mountain:"المرتفعات",flightInstruction_coast:"الساحل كله إلك. مِل يساراً لتكتشف الجزر.",flightInstruction_runway:"دواسة كاملة. عند 60 عقدة، ارفع الأنف برفق.",flightInstruction_landing:"المدرج 36 قدامك. حافظ على هبوط هادئ.",flightInstruction_mountain:"استكشف المرتفعات. راقب سرعتك الجوية.",landingInstruction:i=>`المدرج 36 قدامك. استهدف ${i} عقدة وهبوطاً هادئاً.`,weatherClear:"صافي وهادئ",weatherSunset:"ساعة الذهب",weatherCloudy:"نسيم ساحلي",weatherStorm:"عاصفة عابرة",weatherDetail_clear:"18°م · رياح خفيفة · رؤية 25 كم",weatherDetail_sunset:"21°م · هواء ساكن · الضوء إلك",weatherDetail_cloudy:"16°م · شمال غربي 10 عقدة · غيوم متفرقة",weatherDetail_storm:"12°م · جنوب غربي 18 عقدة · هبات قوية وتحدي",launchPreparing:"عم نجهز السماء",launchReady:"انطلق للسماء",launchUnable:"ما قدرنا نجهز",launchDetailBuilding:"عم نبني عالمك",launchDetailReady:"مغامرتك تبلش هون",footerLove:"مبني لحب الطيران.",footerPhysics:"فيزياء حقيقية. حرية حقيقية.",footerHeadphones:"يُفضّل استخدام السماعات",cameraChase:"ملاحقة",cameraCockpit:"قمرة القيادة",cameraOrbit:"مداري",mousePilot:"طيار بالماوس",autoRudder:"دفة تلقائية",hdgUnit:"HDG",objectiveFinal:"الاقتراب النهائي",objectiveClearedTakeoff:"مسموح بالإقلاع · مدرج 36",objectivePositiveClimb:"تسلق إيجابي",objectiveTakeoffComplete:"اكتمل الإقلاع",objectiveFinalRwy:"الاقتراب النهائي · مدرج 36",objectiveWelcome:"أهلاً بك بالساحل الزمردي",objDescLineUp:"اصطف مع المدرج 36",objDescClimb:"رائع. استمر بالتسلق عند 75-85 عقدة.",objDescRotate:"ارفع الطائرة. اسحب الأنف للأعلى برفق.",objDescFullThrottle:"دواسة 100٪. حافظ على استقامتك بالدفة.",objDescHardPart:"خلص أصعب جزء. الساحل كله صار إلك.",objDescIdle:"دواسة على الخمول. اضغط B للإبطاء.",objDescAlign:i=>`اصطف مع خط الوسط. استهدف ${i} عقدة.`,objDescFlare:"ارفع الأنف برفق. دواسة خاملة وحافظ على استواء الأجنحة.",objDescThreshold:"استهدف بعيد بداية المدرج شوي. رفارف 20°.",mapRegion:"الساحل الزمردي",mapAirport:"EC01",airportDistance:i=>`${i} ميل بحري للمطار`,pitchRoll:"الميل / اللف",rudderLeft:"◀ دفة",rudderRight:"دفة ▶",rudderLeftAria:"دفة يسار",rudderRightAria:"دفة يمين",airspeed:"السرعة الجوية",attitude:"الوضعية",altitude:"الارتفاع",verticalSpeed:"السرعة العمودية",gLoad:"حمل G",throttleLabel:"الدواسة",flapsLabel:"الرفارف",brakesLabel:"المكابح",on:"مفعّل",off:"متوقف",wordPitch:"ميل",wordRoll:"لف",wordRudder:"دفة",wordThrottle:"دواسة",flightTimeLabel:i=>`${i} وقت الرحلة`,cleanView:"منظر نظيف",closeGuide:"إغلاق دليل الطيران",guideEyebrow:"بضعة أمور قبل ما تطير",guideTitleLine1:"خلي حالك",guideTitleLine2:"بارتياح بالسماء.",tabControls:"أدوات التحكم",tabFlying:"فن الطيران",tabSettings:"تفضيلاتك",ctrlPitch:"ميل الأنف للأعلى / الأسفل",ctrlBank:"الميلان يسار / يمين",ctrlThrottle:"الدواسة للأعلى / الأسفل",ctrlRudder:"الدفة يسار / يمين",ctrlFlaps:"الرفارف / تثبيت المكابح",ctrlCamera:"تغيير الكاميرا",ctrlPauseRestart:"إيقاف مؤقت / إعادة تشغيل",ctrlCleanSound:"منظر نظيف / الصوت",guideNoteControls:"بتفضل الماوس؟ فعّل طيار الماوس أثناء الطيران، واسحب بأي مكان بالسماء. اسحب للأسفل للتسلق. أدوات اللمس بتظهر على الهواتف والأجهزة اللوحية. يد التحكم: العصا اليسرى للطيران، اليمنى للدواسة، والزناد للدفة.",tip1Title:"حركات صغيرة. آفاق كبيرة.",tip1Body:"استخدم لمسات خفيفة لتغيير وضعيتك. مِل لتلف، وبعدها اضغط شوي للخلف للحفاظ على الارتفاع. اترك أدوات التحكم لتستقر الطائرة.",tip2Title:"خلي الجناح يشتغل.",tip2Body:"على المدرج، استخدم الدواسة الكاملة. عند 55-65 عقدة، ارفع الأنف برفق. تسلق عند 75-85 عقدة. إذا سمعت إنذار انزلاق، خفّض الأنف وزيد القوة.",tip3Title:"كل رحلة عظيمة إلها ختام ناعم.",tip3Body:"اقترب من المدرج 36 عند 65-75 عقدة بالـ trainer، أو 80-90 عقدة بالـ tourer وsport، مع رفارف 20-30°. انزل برفق، وبعدها ارفع الأنف قبل اللمس بلحظة. دواسة خاملة واضغط B للمكابح.",guideNoteFlying:"أيروناوت بيحاكي الرفع والسحب والانزلاق والرياح والقصور الذاتي والتعامل الأرضي. هو محاكي ترفيهي، مو جهاز تدريب طيران معتمد.",settingSensitivity:"حساسية التحكم",settingSensitivitySub:"حركات ألطف لطيران أنعم",settingVolume:"مستوى الصوت",settingVolumeSub:"المحرك والهواء وتحذيرات القمرة",settingQuality:"جودة الرسوميات",settingQualitySub:"جودة أقل بتساعد بالأجهزة الأقدم",qualityAuto:"تلقائي",qualityHigh:"عالية",qualityLow:"أداء",settingInvert:"عكس الميل",settingInvertSub:"عكس ميل الماوس واللمس وعصا التحكم",enterFullscreen:"ملء الشاشة ↗",leaveFullscreen:"الخروج من ملء الشاشة ↙",fullscreenUnavailable:"ملء الشاشة غير متاح بهالمتصفح",guideDone:"جاهز للأفق",takeBreather:"خذ نفس",pauseTitleText:"السماء ممكن تنتظر.",pauseBody:"رحلتك متوقفة مؤقتاً. كمّل من وين ما وقفت.",airborneLabel:"بالجو",distanceLabel:"المسافة",maxAltitudeLabel:"أعلى ارتفاع",backToSky:"ارجع للسماء",restartFlight:"إعادة الرحلة",flightPlanner:"مخطط الرحلات",resultEyebrowSuccess:"رحلة تستاهل تتذكرها",resultEyebrowFail:"كل رحلة بتعلمك شي",resultTitleSuccessLine1:"أهلاً بعودتك",resultTitleSuccessLine2:"للأرض الصلبة.",resultTitleFailLine1:"اقتربت شوي زيادة",resultTitleFailLine2:"من الأرض.",resultMessageSuccess:(i,t)=>`هبوط آمن بالساحل الزمردي. لمست الأرض عند ${i} عقدة بمعدل نزول ${t} م/ث. الأفق القادم بينتظرك.`,resultMessageFailAdviceHard:"خفّف معدل النزول قبل اللمس وارفع الأنف برفق فوق المدرج مباشرة.",resultMessageFailAdviceWing:"حافظ على استواء الأجنحة قرب الأرض. الحركات الصغيرة اللطيفة أفضل صديق إلك.",resultMessageFailAdviceGeneral:"حافظ على ارتفاع كافي للتعافي، راقب سرعتك الجوية، واصطف مع المدرج للهبوط.",flightTimeStat:"وقت الرحلة",bestAltitudeLabel:"أعلى ارتفاع",flyAgain:"طير من جديد",backToPlanner:"رجوع لمخطط الرحلات",loadErrorTitle:"ما قدرنا نجهز السماء.",loadErrorWebgl:"الرجاء استخدام متصفح يدعم WebGL 2.",loadErrorInit:"هالرحلة بتحتاج WebGL 2. فعّل تسريع العتاد بمتصفحك، أو جرب نسخة حديثة من Chrome أو Edge أو Firefox أو Safari.",loadErrorContextLost:"انقطع الاتصال بالرسوميات. أعد التحميل لتجهيز رحلة جديدة.",tryAgain:"حاول من جديد",showInstruments:"إظهار الأدوات",toastStartTouch:"اسحب العصا اليسرى للطيران. الدواسة تحت.",toastStartKeyboard:"حركات صغيرة، آفاق كبيرة. اضغط ؟ لدليل الطيران.",toastCameraChase:"منظر الملاحقة · اسحب باليمين للنظر حواليك",toastCameraCockpit:"منظر القمرة · اسحب باليمين للنظر حواليك",toastCameraOrbit:"منظر مداري · اسحب لاستكشاف طائرتك",toastAssistOn:"تنسيق الدفة التلقائي مفعّل",toastAssistOff:"دفة يدوية كاملة. Q / E لتنسيق الالتفاف.",toastMouseOn:"اسحب بالسماء للطيران. اسحب للأسفل للتسلق. حرر للتوسيط.",toastMouseOff:"أدوات التحكم بلوحة المفاتيح مفعّلة",toastTouchdown:i=>`لمس الأرض. ${i} م/ث · دواسة خاملة واضغط B للمكابح.`,toastTakeoffComplete:"أنت بالجو. أهلاً بزاوية نظر مختلفة.",toastGamepad:"يد التحكم متصلة. العصا اليسرى للطيران.",stallWarning:"انزلاق · خفّض الأنف",terrainWarning:"تضاريس · اسحب للأعلى",gLoadWarning:"حمل G مرتفع · خفف على أدوات التحكم",crash_hard:"هبوط قاسي",crash_sideways:"اصطدام جانبي بالأرض",crash_wing:"اصطدام الجناح أو الهيكل بالأرض",crash_terrain:"اصطدام بتضاريس وعرة بسرعة عالية",crash_invalid:"حالة طيران غير صالحة",crash_water:"هبوط بالماء",crash_ground:"اصطدام بالأرض"}};let Ei=localStorage.getItem(Su)||"en";const Eu=[];function lt(i,...t){const e=Cc[Ei]?.[i]??Cc.en[i];return typeof e=="function"?e(...t):e??i}function x_(i){Eu.push(i)}function Tu(){document.documentElement.lang=Ei,document.body.classList.toggle("lang-ar",Ei==="ar"),document.querySelectorAll("[data-i18n]").forEach(t=>{const e=t.dataset.i18n;t.textContent=lt(e)}),document.querySelectorAll("[data-i18n-html]").forEach(t=>{const e=t.dataset.i18nHtml;t.innerHTML=lt(e)}),document.querySelectorAll("[data-i18n-title]").forEach(t=>{t.title=lt(t.dataset.i18nTitle)}),document.querySelectorAll("[data-i18n-aria]").forEach(t=>{t.setAttribute("aria-label",lt(t.dataset.i18nAria))}),document.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{t.placeholder=lt(t.dataset.i18nPlaceholder)});const i=document.getElementById("lang-btn");i&&(i.textContent=Ei==="en"?"عربي":"EN")}function y_(i){Ei=i==="ar"?"ar":"en";try{localStorage.setItem(Su,Ei)}catch{}Tu();for(const t of Eu)t()}function M_(){Tu(),document.getElementById("lang-btn")?.addEventListener("click",()=>y_(Ei==="en"?"ar":"en"))}M_();const V=i=>document.getElementById(i),Ge=bi.clamp,bu=bi.degToRad,nr=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),ol=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${String(Math.floor(i%60)).padStart(2,"0")}`,br=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,$r={sound:br('<path d="m11 5-6 4H2v6h3l6 4z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>'),mute:br('<path d="m11 5-6 4H2v6h3l6 4zM16 9l6 6m0-6-6 6"/>'),pause:br('<path d="M8 5v14M16 5v14" stroke-width="3"/>'),camera:br('<path d="M3 7h5l2-3h4l2 3h5v13H3z"/><circle cx="12" cy="13" r="3.5"/>'),mouse:br('<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 2v6"/>')};V("pause-btn").innerHTML=$r.pause;V("camera-icon").innerHTML=$r.camera;V("mouse-icon").innerHTML=$r.mouse;const Na={sensitivity:.65,volume:.45,quality:"auto",invert:!1,sound:!0,assist:!0};let Jt={...Na};try{const i=JSON.parse(localStorage.getItem("aeronaut-settings")||"{}");for(const t of Object.keys(Na))typeof i[t]==typeof Na[t]&&(Jt[t]=i[t]);Jt.sensitivity=Ge(Jt.sensitivity,.25,1),Jt.volume=Ge(Jt.volume,0,1),["auto","high","low"].includes(Jt.quality)||(Jt.quality="auto")}catch{}function al(){try{localStorage.setItem("aeronaut-settings",JSON.stringify(Jt))}catch{}}const ll={clear:{wind:new L(-.4,0,.8),turbulence:0,get detail(){return lt("weatherDetail_clear")}},sunset:{wind:new L(-.2,0,.5),turbulence:.03,get detail(){return lt("weatherDetail_sunset")}},cloudy:{wind:new L(4.2,0,2.8),turbulence:.28,get detail(){return lt("weatherDetail_cloudy")}},storm:{wind:new L(8,0,-5),turbulence:.85,get detail(){return lt("weatherDetail_storm")}}},$s={coast:{get name(){return lt("flightCoast")},get detail(){return lt("flightDetail_coast")},get type(){return lt("flightType_coast")},get instruction(){return lt("flightInstruction_coast")},position:[-800,540,1300],speed:48,heading:-15},runway:{get name(){return lt("flightRunway")},get detail(){return lt("flightDetail_runway")},get type(){return lt("flightType_runway")},get instruction(){return lt("flightInstruction_runway")},position:[0,19.65,720],speed:0,heading:0},landing:{get name(){return lt("flightLanding")},get detail(){return lt("flightDetail_landing")},get type(){return lt("flightType_landing")},get instruction(){return lt("flightInstruction_landing")},position:[0,160,3300],speed:37,heading:0},mountain:{get name(){return lt("flightMountain")},get detail(){return lt("flightDetail_mountain")},get type(){return lt("flightType_mountain")},get instruction(){return lt("flightInstruction_mountain")},position:[1800,3100,-2400],speed:55,heading:35}},wu={get trainer(){return lt("aircraftDetail_trainer")},get tourer(){return lt("aircraftDetail_tourer")},get sport(){return lt("aircraftDetail_sport")}},S_={"Hard landing":"crash_hard","Sideways ground impact":"crash_sideways","Wing or fuselage ground strike":"crash_wing","High-speed rough terrain impact":"crash_terrain","Invalid flight state":"crash_invalid","Water landing":"crash_water","Ground impact":"crash_ground"},Au={trainer:{speed:36.7,throttle:.506,range:"65–75"},tourer:{speed:43.4,throttle:.47,range:"80–90"},sport:{speed:43.8,throttle:.443,range:"80–90"}},no=matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touch-device",no);const ai=new v_;ai.setVolume(Jt.volume);ai.setMuted(!Jt.sound);let qe,An,pe,we,ii,Ru,Lt,Kr=!1,oe="menu",en=null,Cu="menu",Pu=null,Ue="coast",jn="trainer",ri="clear",Ne=0,nn=.65,li=0,Zr=!1,Kn=!1,Du=!1,kn=0,is=0,Jr=0,Nr=0,Lu=0,Ks=performance.now(),Vo=0,Fa=0,Iu=0,Oa=!1,jr=null,Ba=!1,za=!1,Fr=[],ka=0,ti=0,si=.2,Zs=1;const Pe=new Set,re={id:null,x:0,y:0,pitch:0,roll:0,looking:!1,lastX:0,lastY:0},De={id:null,pitch:0,roll:0,yaw:0},Zn={pitch:0,roll:0,yaw:0,throttle:.65,flaps:0,brakes:!1},gn=new L,Js=new L,E_=new L,wr=new bn,T_=new L(0,1,0);let fr=!0;function cl(){V("sound-btn").innerHTML=Jt.sound?$r.sound:$r.mute,V("sound-btn").setAttribute("aria-label",Jt.sound?lt("soundMute"):lt("soundEnable")),V("sound-btn").setAttribute("aria-pressed",String(Jt.sound))}cl();V("assist-btn").classList.toggle("active",Jt.assist);V("assist-btn").setAttribute("aria-pressed",String(Jt.assist));V("sensitivity").value=Jt.sensitivity*100;V("volume").value=Jt.volume*100;V("quality").value=Jt.quality;V("invert").checked=Jt.invert;function Uu(){if(!qe)return;const i=Jt.quality==="low"?1:Math.min(devicePixelRatio,Jt.quality==="high"?2:no?1.25:1.5);qe.setPixelRatio(i),qe.shadowMap.enabled=Jt.quality!=="low",qe.setSize(innerWidth,innerHeight)}function Nu(){pe&&(pe.aspect=innerWidth/innerHeight,pe.updateProjectionMatrix(),Uu(),fr=!0)}window.addEventListener("resize",Nu);function ul(i){if(we){An.scene.remove(we);const t=new Set,e=new Set;we.traverse(n=>{n.geometry&&t.add(n.geometry);for(const r of n.material?Array.isArray(n.material)?n.material:[n.material]:[])e.add(r)}),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose())}we=p_(i),An.scene.add(we),jn=i}function io(){Pe.clear(),re.pitch=re.roll=0,re.id=null,re.looking=!1,De.pitch=De.roll=De.yaw=0,De.id=null,V("joystick-thumb").style.transform=""}function mr(i){Du=i,document.body.classList.toggle("clean-view",i),V("restore-hud").hidden=!i}function Di(i,t=4){V("toast").textContent=i,V("toast").hidden=!1,Iu=performance.now()+t*1e3}function gr(){V("throttle").value=Math.round(nn*100),V("throttle-value").textContent=`${Math.round(nn*100)}%`,V("flaps-value").textContent=`${li*10}°`,V("flaps-btn").classList.toggle("active",li>0);const i=Zr||Pe.has("KeyB");V("brakes-value").textContent=lt(i?"on":"off"),V("brakes-btn").classList.toggle("active",i),V("brakes-btn").setAttribute("aria-pressed",String(i))}function Fu(){if(!Kr)return;Ue=V("flight-select").value,ri=V("weather-select").value;const i=V("aircraft-select").value;i!==jn&&ul(i);const t=$s[Ue],e=Au[jn],n=Ue==="landing"?e.speed:t.speed*(qs[jn].trimSpeed/48);nn=Ue==="runway"?0:Ue==="landing"?e.throttle:Ue==="mountain"?.85:.67,li=Ue==="landing"?2:0,Lt.reset({aircraft:jn,position:new L(...t.position),heading:bu(t.heading),speed:n,throttle:nn,flaps:li/3,verticalSpeed:Ue==="landing"?-n*Math.sin(Math.PI/60):0,onGround:Ue==="runway",terrainHeight:(r,s)=>Math.max(0,Fe(r,s))}),Zr=!1,kn=is=Nr=Fa=0,Jr=Lt.position.y,Fr=[],Oa=Ue!=="runway",jr=null,Ba=za=!1,Ne=0,ti=0,si=.2,Zs=1,fr=!0,hl(),io(),Li(),oe="flying",document.body.classList.add("flying"),V("menu").hidden=!0,V("flight-ui").hidden=!1,V("header-status").textContent=`${qs[jn].label.toUpperCase()} / N-172AE`,V("flight-name").textContent=t.name,V("flight-type").textContent=t.type,V("flight-instruction").textContent=Ue==="landing"?lt("landingInstruction",e.range):t.instruction,V("objective").hidden=!["runway","landing"].includes(Ue),V("warning").hidden=!0,An.setWeather(ri),mr(!1),gr(),Bu(),ai.init(),Di(lt(no?"toastStartTouch":"toastStartKeyboard"),7),V("fly-btn").blur()}function b_(){Li(),oe="menu",io(),mr(!1),V("menu").hidden=!1,V("flight-ui").hidden=!0,document.body.classList.remove("flying"),V("header-status").textContent=lt("headerStatusIdle"),ii.visible=!1,we.visible=!0,pe.up.set(0,1,0),fr=!0,ai.update(Lt.telemetry,0,!1),V("fly-btn").focus({preventScroll:!0})}function rs(i){if(en===i||en==="result")return;en||(Cu=oe,Pu=document.activeElement),en=i,oe==="flying"&&(oe="paused"),io(),V("modal-backdrop").hidden=!1;for(const e of["guide","pause","result"])V(`${e}-modal`).hidden=e!==i;V(`${i}-modal`).querySelector("button")?.focus({preventScroll:!0})}function Li(){V("modal-backdrop").hidden=!0;for(const i of["guide","pause","result"])V(`${i}-modal`).hidden=!0;oe==="paused"&&(oe=Cu),en=null,Ks=performance.now(),Nr=0,Pu?.focus?.({preventScroll:!0})}function Ri(){oe==="flying"&&(V("pause-time").textContent=ol(kn),V("pause-distance").textContent=`${(is/1852).toFixed(1)} NM`,V("pause-altitude").textContent=`${nr.format(Jr*3.28084)} FT`,rs("pause"))}function Pc(i=!1){Ba||(Ba=!0,oe="result",mr(!1),V("result-eyebrow").textContent=lt(i?"resultEyebrowSuccess":"resultEyebrowFail"),V("result-title").innerHTML=i?`${lt("resultTitleSuccessLine1")}<br><em>${lt("resultTitleSuccessLine2")}</em>`:`${lt("resultTitleFailLine1")}<br><em>${lt("resultTitleFailLine2")}</em>`,V("result-message").textContent=i?lt("resultMessageSuccess",Math.round((jr?.speed||0)*1.94384),Math.abs(jr?.sink||0).toFixed(1)):`${lt(S_[Lt.crashReason]||"crash_ground")}. ${Lt.crashReason.includes("Hard")?lt("resultMessageFailAdviceHard"):Lt.crashReason.includes("Wing")?lt("resultMessageFailAdviceWing"):lt("resultMessageFailAdviceGeneral")}`,V("result-time").textContent=ol(kn),V("result-distance").textContent=`${(is/1852).toFixed(1)} NM`,V("result-altitude").textContent=`${nr.format(Jr*3.28084)} FT`,rs("result"))}function hl(){V("camera-label").textContent=[lt("cameraChase"),lt("cameraCockpit"),lt("cameraOrbit")][Ne]}function Ou(){oe==="flying"&&(Ne=(Ne+1)%3,ti=Ne===2?.65:0,si=.2,fr=!0,hl(),Di([lt("toastCameraChase"),lt("toastCameraCockpit"),lt("toastCameraOrbit")][Ne],3))}function Bu(){if(!Lt)return;const i=Lt.telemetry;V("speed-value").textContent=Math.round(i.airspeed*1.94384),V("speed-bar").style.left=`${Ge(i.airspeed*1.94384/170*100,0,100)}%`,V("altitude-value").textContent=nr.format(i.altitude*3.28084),V("agl-value").textContent=nr.format(Math.max(0,i.agl-1.65)*3.28084);const t=Math.round(i.verticalSpeed*196.85/10)*10;V("vs-value").textContent=`${t>=0?"+":""}${nr.format(t)}`,V("g-value").textContent=i.gForce.toFixed(1),V("rpm-value").textContent=nr.format(i.engineRPM),V("heading-readout").textContent=String(Math.round(i.heading)%360).padStart(3,"0"),V("compass").querySelector(".compass-ticks").style.backgroundPositionX=`${-i.heading*1.5}px`,V("airport-distance").textContent=lt("airportDistance",(Math.hypot(Lt.position.x,Lt.position.z)/1852).toFixed(1)),V("flight-time").textContent=lt("flightTimeLabel",ol(kn));const e=!Lt.onGround&&i.agl<85&&i.verticalSpeed<-2.5&&(Math.abs(Lt.position.x)>70||Math.abs(Lt.position.z)>2200),n=i.stallWarning&&!Lt.onGround?lt("stallWarning"):e?lt("terrainWarning"):Math.abs(i.gForce)>4.5?lt("gLoadWarning"):"";V("warning").hidden=!n,V("warning").textContent=n,performance.now()>Iu&&(V("toast").hidden=!0),gr(),Ru.update(i,Lt.position,kn,Fr),Ne===1&&ii.userData.update?.(i,V("attitude")),w_()}function w_(){const i=Lt.telemetry;if(Ue==="runway"&&!za){const t=i.agl>12;V("objective-label").textContent=lt(t?"objectivePositiveClimb":"objectiveClearedTakeoff"),V("objective-progress").style.width=`${Ge(i.airspeed*1.94384/65*100,0,100)}%`,V("objective-description").textContent=t?lt("objDescClimb"):i.airspeed*1.94384>55?lt("objDescRotate"):lt("objDescFullThrottle"),i.agl>70&&(za=!0,V("objective-label").textContent=lt("objectiveTakeoffComplete"),V("objective-description").textContent=lt("objDescHardPart"),Di(lt("toastTakeoffComplete"),7))}else Ue==="landing"&&(V("objective-label").textContent=Lt.onGround?lt("objectiveWelcome"):lt("objectiveFinalRwy"),V("objective-progress").style.width=`${Ge((3300-Lt.position.z)/2700*100,0,100)}%`,V("objective-description").textContent=Lt.onGround?lt("objDescIdle"):Math.abs(Lt.position.x)>60?lt("objDescAlign",Au[jn].range):i.agl<12?lt("objDescFlare"):lt("objDescThreshold"))}function A_(i){let t=(Pe.has("ArrowDown")?1:0)-(Pe.has("ArrowUp")?1:0),e=(Pe.has("ArrowRight")||Pe.has("KeyD")?1:0)-(Pe.has("ArrowLeft")||Pe.has("KeyA")?1:0),n=(Pe.has("KeyE")?1:0)-(Pe.has("KeyQ")?1:0)+De.yaw;nn=Ge(nn+((Pe.has("KeyW")||Pe.has("Equal")?1:0)-(Pe.has("KeyS")||Pe.has("Minus")?1:0))*i*.28,0,1);const r=Jt.invert?-1:1;t+=(re.pitch+De.pitch)*r,e+=re.roll+De.roll;const s=navigator.getGamepads?.()[0];if(s?.connected){const o=(a=0)=>Math.abs(a)>.1?Math.sign(a)*(Math.abs(a)-.1)/.9:0;e+=o(s.axes[0]),t+=o(s.axes[1])*r,nn=Ge(nn-o(s.axes[3])*i*.3,0,1),n+=(s.buttons[7]?.value||0)-(s.buttons[6]?.value||0)}Jt.assist&&Math.abs(n)<.05&&!Lt.onGround&&(n=Ge(Lt.telemetry.sideslip*.035+e*.09,-.4,.4)),Zn.pitch=Ge(t*Jt.sensitivity,-1,1),Zn.roll=Ge(e*Jt.sensitivity,-1,1),Zn.yaw=Ge(n*Jt.sensitivity,-1,1),Zn.throttle=nn,Zn.flaps=li/3,Zn.brakes=Zr||Pe.has("KeyB")}function R_(i){for(A_(i),Nr+=i;Nr>=1/120&&oe==="flying";){const t=Lt.onGround,e=Lt.velocity.y,n=Lt.telemetry.airspeed;Lt.update(1/120,Zn,ll[ri]),kn+=1/120,Lu+=1/120,is+=Lt.telemetry.groundspeed/120,Jr=Math.max(Jr,Lt.position.y),Lt.telemetry.agl>8&&(Oa=!0),!t&&Lt.onGround&&Oa&&!Lt.crashed&&(jr={sink:e,speed:n},Di(lt("toastTouchdown",Math.abs(e).toFixed(1)),6)),Fe(Lt.position.x,Lt.position.z)<-1&&Lt.position.y<=1.8&&(Lt.crashed=!0,Lt.crashReason="Water landing",Lt.velocity.set(0,0,0)),Lt.crashed?Pc():jr&&Lt.onGround&&Lt.telemetry.groundspeed<3&&Math.abs(Lt.position.x)<30&&Math.abs(Lt.position.z)<850&&Pc(!0),Nr-=1/120}kn-Fa>1&&(Fr.push({x:Lt.position.x,z:Lt.position.z}),Fr.length>900&&Fr.shift(),Fa=kn)}function C_(i){we.position.copy(Lt.position),we.quaternion.copy(Lt.quaternion),we.visible=Ne!==1,ii.visible=Ne===1;const t=fr?1:1-Math.exp(-i*5);if(Ne===1)pe.fov=innerWidth<600?78:73,pe.position.copy(Lt.position).add(gn.copy(we.userData.cockpitAnchor).applyQuaternion(Lt.quaternion)),pe.quaternion.copy(Lt.quaternion),wr.setFromEuler(new sn(-si+.2,-ti,0,"YXZ")),pe.quaternion.multiply(wr),ii.visible=Math.abs(ti)<.55&&Math.abs(si-.2)<.4;else{pe.fov=innerWidth<600?67:58,wr.setFromAxisAngle(T_,-bu(Lt.telemetry.heading));const e=(Ne===2?23:25)*Zs;gn.set(Math.sin(ti)*e,4.5+Math.sin(si)*e*.55,Math.cos(ti)*e),gn.applyQuaternion(wr).add(Lt.position),gn.y=Math.max(gn.y,Math.max(0,Fe(gn.x,gn.z))+2),pe.position.lerp(gn,t),Js.set(0,1,Ne===2?0:-11).applyQuaternion(wr).add(Lt.position),pe.up.set(0,1,0),pe.lookAt(Js)}pe.updateProjectionMatrix(),fr=!1}function zu(i){!en&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&(ka+=i);const t=ka;we.visible=!0,ii.visible=!1,we.position.set(-850,510+Math.sin(t*.22)*2,1180-Math.sin(t*.02)*230),we.quaternion.setFromEuler(new sn(.025,-.12,-.07+Math.sin(t*.15)*.025));const e=innerWidth<600;gn.set(e?17:20,e?7:7.5,28),gn.applyQuaternion(we.quaternion).add(we.position),pe.position.copy(gn),Js.copy(we.position).add(E_.set(e?-2.3:-8,e?4.3:.3,-4)),pe.up.set(0,1,0),pe.lookAt(Js),pe.fov=e?68:49,pe.updateProjectionMatrix(),we.userData.animate(i,.55)}function ku(i){const t=Math.min(Math.max(0,(i-Ks)/1e3),.075);Ks=i,oe==="menu"?zu(t):(oe==="flying"&&R_(t),C_(t),oe==="flying"&&we.userData.animate(t,nn,Lt.telemetry.engineRPM)),An.update(oe==="menu"?ka:Lu,ri),Vo+=t,Vo>.09&&(oe!=="menu"&&Bu(),ai.update(Lt.telemetry,nn,oe==="flying",Ne===1),Vo=0),qe.render(An.scene,pe),requestAnimationFrame(ku)}async function P_(){try{qe=new jg({canvas:V("world"),antialias:!no,powerPreference:"high-performance"}),qe.outputColorSpace=Ye,qe.toneMapping=Uc,qe.toneMappingExposure=1,An=d_(qe),pe=new cn(58,innerWidth/innerHeight,.08,65e3),An.scene.add(pe),ii=m_(),ii.visible=!1,pe.add(ii),ul(V("aircraft-select").value),Lt=new e_({terrainHeight:(i,t)=>Math.max(0,Fe(i,t))}),Ru=new __({attitudeCanvas:V("attitude"),mapCanvas:V("map"),terrainHeight:Fe}),Nu(),zu(0),await qe.compileAsync(An.scene,pe),qe.render(An.scene,pe),Kr=!0,V("fly-btn").disabled=!1,V("launch-label").textContent=lt("launchReady"),V("launch-detail").textContent=lt("launchDetailReady"),Ks=performance.now(),requestAnimationFrame(ku),window.aeronaut={get state(){return{ready:Kr,mode:oe,scenario:Ue,aircraft:jn,weather:ri,camera:Ne,elapsed:kn,distance:is,throttle:nn,flaps:li,telemetry:{...Lt.telemetry},position:Lt.position.toArray(),controls:{...Zn},render:{calls:qe.info.render.calls,triangles:qe.info.render.triangles}}}}}catch(i){console.error("Aeronaut initialization failed",i),V("load-error").hidden=!1,V("load-error-message").textContent=lt("loadErrorInit"),V("launch-label").textContent=lt("launchUnable")}}V("aircraft-select").addEventListener("change",i=>{V("aircraft-detail").textContent=wu[i.target.value],Kr&&oe==="menu"&&ul(i.target.value)});V("flight-select").addEventListener("change",i=>{V("flight-detail").textContent=$s[i.target.value].detail});V("weather-select").addEventListener("change",i=>{ri=i.target.value,V("weather-detail").textContent=ll[ri].detail,An?.setWeather(ri)});V("fly-btn").addEventListener("click",Fu);V("help-btn").addEventListener("click",()=>rs("guide"));V("intro-guide").addEventListener("click",()=>rs("guide"));V("guide-done").addEventListener("click",Li);document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",Li));V("pause-btn").addEventListener("click",Ri);V("resume-btn").addEventListener("click",Li);for(const i of["restart-btn","retry-btn"])V(i).addEventListener("click",Fu);for(const i of["home-btn","result-home"])V(i).addEventListener("click",b_);V("brand-link").addEventListener("click",i=>{i.preventDefault(),oe==="flying"&&Ri()});V("camera-btn").addEventListener("click",Ou);V("sound-btn").addEventListener("click",()=>{Jt.sound=!Jt.sound,ai.setMuted(!Jt.sound),Jt.sound&&ai.init(),cl(),al()});V("assist-btn").addEventListener("click",()=>{Jt.assist=!Jt.assist,V("assist-btn").classList.toggle("active",Jt.assist),V("assist-btn").setAttribute("aria-pressed",String(Jt.assist)),al(),Di(Jt.assist?lt("toastAssistOn"):lt("toastAssistOff"))});V("mouse-btn").addEventListener("click",()=>{Kn=!Kn,re.pitch=re.roll=0,V("mouse-btn").classList.toggle("active",Kn),V("mouse-btn").setAttribute("aria-pressed",String(Kn)),document.body.classList.toggle("mouse-pilot",Kn),Di(lt(Kn?"toastMouseOn":"toastMouseOff"))});V("throttle").addEventListener("input",i=>{nn=Number(i.target.value)/100,gr()});V("flaps-btn").addEventListener("click",()=>{li=(li+1)%4,gr()});V("brakes-btn").addEventListener("click",()=>{Zr=!Zr,gr()});V("hide-hud-btn").addEventListener("click",()=>mr(!0));V("restore-hud").addEventListener("click",()=>mr(!1));for(const i of["sensitivity","volume","quality","invert"])V(i).addEventListener("input",t=>{Jt[i]=i==="invert"?t.target.checked:i==="quality"?t.target.value:Number(t.target.value)/100,i==="quality"&&Uu(),i==="volume"&&ai.setVolume(Jt.volume),al()});V("fullscreen-btn").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{V("fullscreen-btn").textContent=lt("fullscreenUnavailable")}});document.addEventListener("fullscreenchange",()=>{V("fullscreen-btn").textContent=document.fullscreenElement?lt("leaveFullscreen"):lt("enterFullscreen")});document.querySelectorAll("[data-guide]").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll("[data-guide]").forEach(t=>t.classList.toggle("active",t===i));for(const t of["controls","flying","settings"])V(`guide-${t}`).hidden=t!==i.dataset.guide})});V("modal-backdrop").addEventListener("click",i=>{i.target===V("modal-backdrop")&&en!=="result"&&Li()});const D_=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyS","KeyA","KeyD","KeyQ","KeyE","KeyB","Equal","Minus"]);document.addEventListener("keydown",i=>{if(i.code==="Tab"&&en){const e=[...V(`${en}-modal`).querySelectorAll("button,input,select,a")].filter(s=>s.getClientRects().length&&!s.disabled),n=e[0],r=e.at(-1);i.shiftKey&&document.activeElement===n?(i.preventDefault(),r?.focus()):!i.shiftKey&&document.activeElement===r&&(i.preventDefault(),n?.focus());return}if(i.code==="Escape"){if(i.preventDefault(),i.repeat)return;en&&en!=="result"?Li():Ri();return}const t=["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName);if(!(t&&(oe!=="flying"||en))){if(i.key==="?"&&!i.repeat){rs("guide");return}if(i.code==="KeyM"&&!i.repeat&&!t){V("sound-btn").click();return}oe==="flying"&&(D_.has(i.code)&&(i.preventDefault(),Pe.add(i.code)),!i.repeat&&(i.code==="KeyC"&&Ou(),i.code==="KeyF"&&(i.preventDefault(),V("flaps-btn").click()),i.code==="KeyH"&&mr(!Du),i.code==="KeyR"&&(Ri(),V("restart-btn").focus())))}});document.addEventListener("keyup",i=>{Pe.delete(i.code)});window.addEventListener("blur",()=>{io(),oe==="flying"&&Ri()});document.addEventListener("visibilitychange",()=>{document.hidden&&oe==="flying"&&Ri()});window.addEventListener("gamepadconnected",()=>{oe==="flying"&&Di(lt("toastGamepad"))});V("world").addEventListener("contextmenu",i=>i.preventDefault());V("world").addEventListener("pointerdown",i=>{oe==="flying"&&(re.looking=i.button===2||Ne===2&&!Kn,!(!re.looking&&!Kn)&&(re.id=i.pointerId,re.x=re.lastX=i.clientX,re.y=re.lastY=i.clientY,V("world").setPointerCapture(i.pointerId),i.preventDefault()))});V("world").addEventListener("pointermove",i=>{re.id!==i.pointerId||oe!=="flying"||(re.looking?(ti-=(i.clientX-re.lastX)*.007,si=Ge(si+(i.clientY-re.lastY)*.005,-.65,1.3),re.lastX=i.clientX,re.lastY=i.clientY):(re.roll=Ge((i.clientX-re.x)/120,-1,1),re.pitch=Ge((i.clientY-re.y)/120,-1,1)))});for(const i of["pointerup","pointercancel","lostpointercapture"])V("world").addEventListener(i,t=>{t.pointerId===re.id&&(re.id=null,re.pitch=re.roll=0,re.looking&&Ne!==2&&(ti=0,si=.2),re.looking=!1)});V("world").addEventListener("wheel",i=>{oe==="flying"&&(Zs=Ge(Zs+i.deltaY*.001,.6,2.8),i.preventDefault())},{passive:!1});const Qr=V("joystick");function Hu(i){if(i.pointerId!==De.id)return;const t=Qr.getBoundingClientRect();let e=(i.clientX-t.left-t.width/2)/(t.width*.37),n=(i.clientY-t.top-t.height/2)/(t.height*.37);const r=Math.hypot(e,n);r>1&&(e/=r,n/=r),De.roll=e,De.pitch=n,V("joystick-thumb").style.transform=`translate(${e*t.width*.32}px, ${n*t.height*.32}px)`}Qr.addEventListener("pointerdown",i=>{De.id=i.pointerId,Qr.setPointerCapture(i.pointerId),Hu(i),i.preventDefault()});Qr.addEventListener("pointermove",Hu);for(const i of["pointerup","pointercancel","lostpointercapture"])Qr.addEventListener(i,t=>{t.pointerId===De.id&&(De.id=null,De.pitch=De.roll=0,V("joystick-thumb").style.transform="")});for(const[i,t]of[["yaw-left",-1],["yaw-right",1]]){V(i).addEventListener("pointerdown",e=>{De.yaw=t,V(i).setPointerCapture(e.pointerId)});for(const e of["pointerup","pointercancel","lostpointercapture"])V(i).addEventListener(e,()=>{De.yaw=0})}V("world").addEventListener("webglcontextlost",i=>{i.preventDefault(),Ri(),V("load-error").hidden=!1,V("load-error-message").textContent=lt("loadErrorContextLost")});x_(()=>{if(cl(),V("aircraft-detail").textContent=wu[V("aircraft-select").value],V("flight-detail").textContent=$s[V("flight-select").value].detail,V("weather-detail").textContent=ll[V("weather-select").value].detail,oe==="menu"&&(V("header-status").textContent=lt("headerStatusIdle")),["flying","paused","result"].includes(oe)||en){const i=$s[Ue];V("flight-name").textContent=i.name,V("flight-type").textContent=i.type,hl(),gr()}Kr&&(V("launch-label").textContent=lt("launchReady"),V("launch-detail").textContent=lt("launchDetailReady")),V("fullscreen-btn").textContent=document.fullscreenElement?lt("leaveFullscreen"):lt("enterFullscreen")});requestAnimationFrame(()=>setTimeout(P_,20));
