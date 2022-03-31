var tt=Object.defineProperty;var it=(d,t,i)=>t in d?tt(d,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[t]=i;var r=(d,t,i)=>(it(d,typeof t!="symbol"?t+"":t,i),i);import{G as st}from"./vendor.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};et();const B=class{constructor(t=0,i=0,s=0,e=1){r(this,"r");r(this,"g");r(this,"b");r(this,"a");this.r=t,this.g=i,this.b=s,this.a=e}set(t,i,s,e){this.r=t,this.g=i,this.b=s,this.a=e}copy(t){this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a}};let T=B;r(T,"WHITE",new B(1,1,1)),r(T,"BLACK",new B(0,0,0)),r(T,"RED",new B(1,0,0)),r(T,"GREEN",new B(0,1,0)),r(T,"BLUE",new B(0,0,1)),r(T,"YELLOW",new B(1,1,0)),r(T,"PURPLE",new B(1,0,1)),r(T,"CYAN",new B(0,1,1));class rt{constructor(){r(this,"background");r(this,"canvas");r(this,"gl");this.canvas=document.getElementById("gfxCanvas"),this.canvas||alert("Unable to find gfxCanvas.");const t=this.canvas.getContext("webgl2");t||alert("Unable to initialize WebGL. Your browser or machine may not support it."),this.gl=t,this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LESS),this.gl.enable(t.CULL_FACE),this.gl.cullFace(t.BACK),this.background=new T}resize(t,i,s){this.canvas.width=t,this.canvas.height=i,s>window.innerWidth/window.innerHeight?this.gl.viewport(0,(window.innerHeight-window.innerWidth/s)/2,window.innerWidth,window.innerWidth/s):this.gl.viewport((window.innerWidth-window.innerHeight*s)/2,0,window.innerHeight*s,window.innerHeight)}render(t,i){this.gl.clearColor(this.background.r,this.background.g,this.background.b,this.background.a),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),t.draw(i)}}const p=class{constructor(t=0,i=0,s=0){r(this,"x");r(this,"y");r(this,"z");this.x=t,this.y=i,this.z=s}static copy(t){return new p(t.x,t.y,t.z)}static inverse(t){return new p(-t.x,-t.y,-t.z)}static add(t,i){return new p(t.x+i.x,t.y+i.y,t.z+i.z)}static subtract(t,i){return new p(t.x-i.x,t.y-i.y,t.z-i.z)}static multiply(t,i){return new p(t.x*i.x,t.y*i.y,t.z*i.z)}static divide(t,i){return new p(t.x/i.x,t.y/i.y,t.z/i.z)}static dot(t,i){return t.x*i.x+t.y*i.y+t.z*i.z}static cross(t,i){return new p(t.y*i.z-t.z*i.y,t.z*i.x-t.x*i.z,t.x*i.y-t.y*i.x)}static multiplyScalar(t,i){return new p(t.x*i,t.y*i,t.z*i)}static divideScalar(t,i){return new p(t.x/i,t.y/i,t.z/i)}static normalize(t){const i=t.x*t.x+t.y*t.y+t.z*t.z;if(i<1e-8)return new p;const s=1/Math.sqrt(i);return new p(t.x*s,t.y*s,t.z*s)}static angleBetween(t,i){return t.angleBetween(i)}set(t,i,s){this.x=t,this.y=i,this.z=s}copy(t){this.x=t.x,this.y=t.y,this.z=t.z}clone(){return new p(this.x,this.y,this.z)}equals(t){return this.x==t.x&&this.y==t.y&&this.z==t.z}add(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}subtract(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}multiply(t){this.x*=t.x,this.y*=t.y,this.z*=t.z}divide(t){this.x/=t.x,this.y/=t.y,this.z/=t.z}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){return new p(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}multiplyScalar(t){this.x*=t,this.y*=t,this.z*=t}divideScalar(t){this.x/=t,this.y/=t,this.z/=t}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}normalize(){const t=this.x*this.x+this.y*this.y+this.z*this.z;if(t<1e-8)return;const i=1/Math.sqrt(t);this.x*=i,this.y*=i,this.z*=i}invert(){this.x=-this.x,this.y=-this.y,this.z=-this.z}inverse(){return new p(-this.x,-this.y,-this.z)}applyMatrix(t){const i=this.clone(),s=1/(t.mat[3]*i.x+t.mat[7]*i.y+t.mat[11]*i.z+t.mat[15]);this.x=s*(t.mat[0]*i.x+t.mat[4]*i.y+t.mat[8]*i.z+t.mat[12]),this.y=s*(t.mat[1]*i.x+t.mat[5]*i.y+t.mat[9]*i.z+t.mat[13]),this.z=s*(t.mat[2]*i.x+t.mat[6]*i.y+t.mat[10]*i.z+t.mat[14])}rotate(t){this.copy(t.rotate(this))}angleBetween(t){const i=p.normalize(this),s=p.normalize(t);return Math.acos(i.dot(s))}};let a=p;r(a,"ZERO",new p(0,0,0)),r(a,"ONE",new p(1,1,1)),r(a,"UP",new p(0,1,0)),r(a,"DOWN",new p(0,-1,0)),r(a,"LEFT",new p(-1,0,0)),r(a,"RIGHT",new p(1,0,0)),r(a,"FORWARD",new p(0,0,-1)),r(a,"BACK",new p(0,0,1)),r(a,"X_AXIS",p.RIGHT),r(a,"Y_AXIS",p.UP),r(a,"Z_AXIS",p.FORWARD);const R=class{constructor(t=0,i=0,s=0,e=1){r(this,"x");r(this,"y");r(this,"z");r(this,"w");this.x=t,this.y=i,this.z=s,this.w=e}static multiply(t,i){const s=new R;return s.w=t.w*i.w-t.x*i.x-t.y*i.y-t.z*i.z,s.x=t.w*i.x+t.x*i.w+t.y*i.z-t.z*i.y,s.y=t.w*i.y+t.y*i.w+t.z*i.x-t.x*i.z,s.z=t.w*i.z+t.z*i.w+t.x*i.y-t.y*i.x,s}static normalize(t){const i=t.clone();return i.normalize(),i}static inverse(t){const i=t.clone();return i.invert(),i}static makeRotationX(t){const i=new R;return i.setRotationX(t),i}static makeRotationY(t){const i=new R;return i.setRotationY(t),i}static makeRotationZ(t){const i=new R;return i.setRotationZ(t),i}static makeAxisAngle(t,i){const s=new R;return s.setAxisAngle(t,i),s}static makeEulerAngles(t,i,s){const e=new R;return e.setEulerAngles(t,i,s),e}static makeMatrix(t){const i=new R;return i.setMatrix(t),i}set(t,i,s){this.x=t,this.y=i,this.z=s}setRotationX(t){this.w=Math.cos(t/2),this.x=Math.sin(t/2),this.y=0,this.z=0}setRotationY(t){this.w=Math.cos(t/2),this.x=0,this.y=Math.sin(t/2),this.z=0}setRotationZ(t){this.w=Math.cos(t/2),this.x=0,this.y=0,this.z=Math.sin(t/2)}setAxisAngle(t,i){const s=Math.sin(i/2);this.w=Math.cos(i/2),this.x=s*t.x,this.y=s*t.y,this.z=s*t.z}setEulerAngles(t,i,s){const e=Math.cos(i/2),n=Math.sin(i/2),o=Math.cos(t/2),l=Math.sin(t/2),m=Math.cos(-s/2),f=Math.sin(-s/2);this.x=n*o*m+e*l*f,this.y=e*l*m-n*o*f,this.z=e*o*f+n*l*m,this.w=e*o*m-n*l*f}setMatrix(t){this.w=Math.sqrt(1+t.mat[0]+t.mat[5]+t.mat[10])/2,this.x=(t.mat[6]-t.mat[9])/(4*this.w),this.y=(t.mat[8]-t.mat[2])/(4*this.w),this.z=(t.mat[1]-t.mat[4])/(4*this.w)}copy(t){this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w}clone(){return new R(this.x,this.y,this.z,this.w)}multiply(t){this.copy(R.multiply(t,this))}normalize(){const t=1/Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x*=t,this.y*=t,this.z*=t,this.w*=t}rotate(t){const i=new a(this.x,this.y,this.z),s=a.multiplyScalar(i,2*i.dot(t));s.add(a.multiplyScalar(t,this.w*this.w-i.dot(i)));const e=i.cross(t);return e.multiplyScalar(2*this.w),s.add(e),s}invert(){const t=1/(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x*=-t,this.y*=-t,this.z*=-t,this.w*=t}inverse(){return R.inverse(this)}getMatrix(){const t=this.w*this.w,i=this.x*this.x,s=this.y*this.y,e=this.z*this.z,n=1/(i+s+e+t),o=this.x*this.y,l=this.z*this.w,m=this.x*this.z,f=this.y*this.w,g=this.y*this.z,h=this.x*this.w;return C.fromRowMajor((i-s-e+t)*n,2*(o-l)*n,2*(m+f)*n,0,2*(o+l)*n,(-i+s-e+t)*n,2*(g-h)*n,0,2*(m-f)*n,2*(g+h)*n,-i-s+e+t,0,0,0,0,1)}};let z=R;r(z,"IDENTITY",new R);const b=class{constructor(){r(this,"mat");this.mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}static multiply(t,i){const s=new b;s.mat[0]=0,s.mat[5]=0,s.mat[10]=0,s.mat[15]=0;for(let e=0;e<4;e++)for(let n=0;n<4;n++)for(let o=0;o<4;o++)s.mat[e*4+n]+=t.mat[e*4+o]*i.mat[o*4+n];return s}static copy(t){const i=new b;return i.copy(t),i}static fromRowMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M){const N=new b;return N.setRowMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M),N}static fromColumnMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M){const N=new b;return N.setColumnMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M),N}static makeTranslation(t){return b.fromRowMajor(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1)}static makeRotationX(t){const i=new b;return i.makeRotationX(t),i}static makeRotationY(t){const i=new b;return i.makeRotationY(t),i}static makeRotationZ(t){const i=new b;return i.makeRotationZ(t),i}static makeRotation(t,i){const s=new b;return s.makeRotation(t,i),s}static makeScale(t){const i=new b;return i.makeScale(t),i}static makeTransform(t=a.ZERO,i=z.IDENTITY,s=a.UP){const e=new b;return e.makeTransform(t,i,s),e}static lookAt(t,i,s){const e=new b;return e.lookAt(t,i,s),e}static makePerspective(t,i,s,e){const n=s*Math.tan(t*Math.PI/360),o=n*i;return b.makeFrustum(-o,o,-n,n,s,e)}static makeFrustum(t,i,s,e,n,o){return b.fromRowMajor(2*n/(i-t),0,(i+t)/(i-t),0,0,2*n/(e-s),(e+s)/(e-s),0,0,0,-(o+n)/(o-n),-2*o*n/(o-n),0,0,-1,0)}setColumnMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M){this.mat[0]=t,this.mat[1]=i,this.mat[2]=s,this.mat[3]=e,this.mat[4]=n,this.mat[5]=o,this.mat[6]=l,this.mat[7]=m,this.mat[8]=f,this.mat[9]=g,this.mat[10]=h,this.mat[11]=y,this.mat[12]=u,this.mat[13]=x,this.mat[14]=v,this.mat[15]=M}setRowMajor(t,i,s,e,n,o,l,m,f,g,h,y,u,x,v,M){this.mat[0]=t,this.mat[1]=n,this.mat[2]=f,this.mat[3]=u,this.mat[4]=i,this.mat[5]=o,this.mat[6]=g,this.mat[7]=x,this.mat[8]=s,this.mat[9]=l,this.mat[10]=h,this.mat[11]=v,this.mat[12]=e,this.mat[13]=m,this.mat[14]=y,this.mat[15]=M}copy(t){for(let i=0;i<16;i++)this.mat[i]=t.mat[i]}element(t,i){return this.mat[i*4+t]}set(t,i,s){this.mat[s*4+i]=t}multiply(t){const i=b.multiply(t,this);this.copy(i)}makeTranslation(t){this.setRowMajor(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1)}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);this.setRowMajor(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1)}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);this.setRowMajor(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1)}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);this.setRowMajor(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}makeRotation(t,i){const s=Math.cos(i),e=Math.sin(i),n=1-s,o=t.x,l=t.y,m=t.z,f=n*o,g=n*l;this.setRowMajor(f*o+s,f*l-e*m,f*m+e*l,0,f*l+e*m,g*l+s,g*m-e*o,0,f*m-e*l,g*m+e*o,n*m*m+s,0,0,0,0,1)}makeScale(t){this.setRowMajor(t.x,0,0,0,0,t.y,0,0,0,0,t.z,0,0,0,0,1)}makePerspective(t,i,s,e){const n=s*Math.tan(t*Math.PI/360),o=n*i;this.makeFrustum(-o,o,-n,n,s,e)}makeFrustum(t,i,s,e,n,o){this.setRowMajor(2*n/(i-t),0,(i+t)/(i-t),0,0,2*n/(e-s),(e+s)/(e-s),0,0,0,-(o+n)/(o-n),-2*o*n/(o-n),0,0,-1,0)}makeTransform(t=a.ZERO,i=z.IDENTITY,s=a.UP){this.makeTranslation(t),this.multiply(i.getMatrix()),this.multiply(b.makeScale(s))}lookAt(t,i,s=a.UP){const e=a.subtract(t,i);e.normalize();const n=a.cross(s,e);n.normalize();const o=a.cross(e,n),l=b.fromRowMajor(n.x,o.x,e.x,0,n.y,o.y,e.y,0,n.z,o.z,e.z,0,0,0,0,1),m=b.makeTranslation(t);this.copy(b.multiply(l,m))}multiplyScalar(t){for(let i=0;i<16;i++)this.mat[i]*=t}determinant(){return this.mat[3]*this.mat[6]*this.mat[9]*this.mat[12]-this.mat[2]*this.mat[7]*this.mat[9]*this.mat[12]-this.mat[3]*this.mat[5]*this.mat[10]*this.mat[12]+this.mat[1]*this.mat[7]*this.mat[10]*this.mat[12]+this.mat[2]*this.mat[5]*this.mat[11]*this.mat[12]-this.mat[1]*this.mat[6]*this.mat[11]*this.mat[12]-this.mat[3]*this.mat[6]*this.mat[8]*this.mat[13]+this.mat[2]*this.mat[7]*this.mat[8]*this.mat[13]+this.mat[3]*this.mat[4]*this.mat[10]*this.mat[13]-this.mat[0]*this.mat[7]*this.mat[10]*this.mat[13]-this.mat[2]*this.mat[4]*this.mat[11]*this.mat[13]+this.mat[0]*this.mat[6]*this.mat[11]*this.mat[13]+this.mat[3]*this.mat[5]*this.mat[8]*this.mat[14]-this.mat[1]*this.mat[7]*this.mat[8]*this.mat[14]-this.mat[3]*this.mat[4]*this.mat[9]*this.mat[14]+this.mat[0]*this.mat[7]*this.mat[9]*this.mat[14]+this.mat[1]*this.mat[4]*this.mat[11]*this.mat[14]-this.mat[0]*this.mat[5]*this.mat[11]*this.mat[14]-this.mat[2]*this.mat[5]*this.mat[8]*this.mat[15]+this.mat[1]*this.mat[6]*this.mat[8]*this.mat[15]+this.mat[2]*this.mat[4]*this.mat[9]*this.mat[15]-this.mat[0]*this.mat[6]*this.mat[9]*this.mat[15]-this.mat[1]*this.mat[4]*this.mat[10]*this.mat[15]+this.mat[0]*this.mat[5]*this.mat[10]*this.mat[15]}inverse(){const t=this.determinant();if(Math.abs(t)<1e-8)return new b;const i=new b;return i.mat[0]=(this.mat[6]*this.mat[11]*this.mat[13]-this.mat[7]*this.mat[10]*this.mat[13]+this.mat[7]*this.mat[9]*this.mat[14]-this.mat[5]*this.mat[11]*this.mat[14]-this.mat[6]*this.mat[9]*this.mat[15]+this.mat[5]*this.mat[10]*this.mat[15])/t,i.mat[1]=(this.mat[3]*this.mat[10]*this.mat[13]-this.mat[2]*this.mat[11]*this.mat[13]-this.mat[3]*this.mat[9]*this.mat[14]+this.mat[1]*this.mat[11]*this.mat[14]+this.mat[2]*this.mat[9]*this.mat[15]-this.mat[1]*this.mat[10]*this.mat[15])/t,i.mat[2]=(this.mat[2]*this.mat[7]*this.mat[13]-this.mat[3]*this.mat[6]*this.mat[13]+this.mat[3]*this.mat[5]*this.mat[14]-this.mat[1]*this.mat[7]*this.mat[14]-this.mat[2]*this.mat[5]*this.mat[15]+this.mat[1]*this.mat[6]*this.mat[15])/t,i.mat[3]=(this.mat[3]*this.mat[6]*this.mat[9]-this.mat[2]*this.mat[7]*this.mat[9]-this.mat[3]*this.mat[5]*this.mat[10]+this.mat[1]*this.mat[7]*this.mat[10]+this.mat[2]*this.mat[5]*this.mat[11]-this.mat[1]*this.mat[6]*this.mat[11])/t,i.mat[4]=(this.mat[7]*this.mat[10]*this.mat[12]-this.mat[6]*this.mat[11]*this.mat[12]-this.mat[7]*this.mat[8]*this.mat[14]+this.mat[4]*this.mat[11]*this.mat[14]+this.mat[6]*this.mat[8]*this.mat[15]-this.mat[4]*this.mat[10]*this.mat[15])/t,i.mat[5]=(this.mat[2]*this.mat[11]*this.mat[12]-this.mat[3]*this.mat[10]*this.mat[12]+this.mat[3]*this.mat[8]*this.mat[14]-this.mat[0]*this.mat[11]*this.mat[14]-this.mat[2]*this.mat[8]*this.mat[15]+this.mat[0]*this.mat[10]*this.mat[15])/t,i.mat[6]=(this.mat[3]*this.mat[6]*this.mat[12]-this.mat[2]*this.mat[7]*this.mat[12]-this.mat[3]*this.mat[4]*this.mat[14]+this.mat[0]*this.mat[7]*this.mat[14]+this.mat[2]*this.mat[4]*this.mat[15]-this.mat[0]*this.mat[6]*this.mat[15])/t,i.mat[7]=(this.mat[2]*this.mat[7]*this.mat[8]-this.mat[3]*this.mat[6]*this.mat[8]+this.mat[3]*this.mat[4]*this.mat[10]-this.mat[0]*this.mat[7]*this.mat[10]-this.mat[2]*this.mat[4]*this.mat[11]+this.mat[0]*this.mat[6]*this.mat[11])/t,i.mat[8]=(this.mat[5]*this.mat[11]*this.mat[12]-this.mat[7]*this.mat[9]*this.mat[12]+this.mat[7]*this.mat[8]*this.mat[13]-this.mat[4]*this.mat[11]*this.mat[13]-this.mat[5]*this.mat[8]*this.mat[15]+this.mat[4]*this.mat[9]*this.mat[15])/t,i.mat[9]=(this.mat[3]*this.mat[9]*this.mat[12]-this.mat[1]*this.mat[11]*this.mat[12]-this.mat[3]*this.mat[8]*this.mat[13]+this.mat[0]*this.mat[11]*this.mat[13]+this.mat[1]*this.mat[8]*this.mat[15]-this.mat[0]*this.mat[9]*this.mat[15])/t,i.mat[10]=(this.mat[1]*this.mat[7]*this.mat[12]-this.mat[3]*this.mat[5]*this.mat[12]+this.mat[3]*this.mat[4]*this.mat[13]-this.mat[0]*this.mat[7]*this.mat[13]-this.mat[1]*this.mat[4]*this.mat[15]+this.mat[0]*this.mat[5]*this.mat[15])/t,i.mat[11]=(this.mat[3]*this.mat[5]*this.mat[8]-this.mat[1]*this.mat[7]*this.mat[8]-this.mat[3]*this.mat[4]*this.mat[9]+this.mat[0]*this.mat[7]*this.mat[9]+this.mat[1]*this.mat[4]*this.mat[11]-this.mat[0]*this.mat[5]*this.mat[11])/t,i.mat[12]=(this.mat[6]*this.mat[9]*this.mat[12]-this.mat[5]*this.mat[10]*this.mat[12]-this.mat[6]*this.mat[8]*this.mat[13]+this.mat[4]*this.mat[10]*this.mat[13]+this.mat[5]*this.mat[8]*this.mat[14]-this.mat[4]*this.mat[9]*this.mat[14])/t,i.mat[13]=(this.mat[1]*this.mat[10]*this.mat[12]-this.mat[2]*this.mat[9]*this.mat[12]+this.mat[2]*this.mat[8]*this.mat[13]-this.mat[0]*this.mat[10]*this.mat[13]-this.mat[1]*this.mat[8]*this.mat[14]+this.mat[0]*this.mat[9]*this.mat[14])/t,i.mat[14]=(this.mat[2]*this.mat[5]*this.mat[12]-this.mat[1]*this.mat[6]*this.mat[12]-this.mat[2]*this.mat[4]*this.mat[13]+this.mat[0]*this.mat[6]*this.mat[13]+this.mat[1]*this.mat[4]*this.mat[14]-this.mat[0]*this.mat[5]*this.mat[14])/t,i.mat[15]=(this.mat[1]*this.mat[6]*this.mat[8]-this.mat[2]*this.mat[5]*this.mat[8]+this.mat[2]*this.mat[4]*this.mat[9]-this.mat[0]*this.mat[6]*this.mat[9]-this.mat[1]*this.mat[4]*this.mat[10]+this.mat[0]*this.mat[5]*this.mat[10])/t,i}invert(){const t=this.inverse();this.copy(t)}transpose(){return b.fromRowMajor(this.mat[0],this.mat[1],this.mat[2],this.mat[3],this.mat[4],this.mat[5],this.mat[6],this.mat[7],this.mat[8],this.mat[9],this.mat[10],this.mat[11],this.mat[12],this.mat[13],this.mat[14],this.mat[15])}};let C=b;r(C,"IDENTITY",new b);class W{constructor(){r(this,"children");r(this,"position");r(this,"rotation");r(this,"scale");r(this,"visible");r(this,"matrix");r(this,"worldMatrix");this.children=[],this.position=new a,this.rotation=new z,this.scale=new a(1,1,1),this.visible=!0,this.matrix=new C,this.worldMatrix=new C}draw(t,i,s){!this.visible||this.children.forEach(e=>{e.draw(this,i,s)})}postRender(){this.children.forEach(t=>{t.postRender()})}computeWorldTransform(t){this.matrix.makeTransform(this.position,this.rotation,this.scale),this.worldMatrix.copy(t.worldMatrix),this.worldMatrix.multiply(this.matrix),this.children.forEach(i=>{i.computeWorldTransform(this)})}add(t){this.children.push(t)}remove(t){const i=this.children.indexOf(t);return i==-1?null:this.children.splice(i,1)[0]}setLights(t){this.children.forEach(i=>{i.setLights(t)})}translate(t){this.position.add(this.rotation.rotate(t))}translateX(t){this.position.add(this.rotation.rotate(new a(t,0,0)))}translateY(t){this.position.add(this.rotation.rotate(new a(0,t,0)))}translateZ(t){this.position.add(this.rotation.rotate(new a(0,0,t)))}lookAt(t,i=a.UP){const s=C.lookAt(this.position,t,i);this.rotation.setMatrix(s)}getWorldMatrix(){return this.worldMatrix}getLocalMatrix(){return this.matrix}}class Q extends W{constructor(t=60,i=1920/1080,s=.1,e=100){super();r(this,"projectionMatrix");r(this,"viewMatrix");r(this,"fov");r(this,"aspectRatio");r(this,"near");r(this,"far");this.projectionMatrix=new C,this.viewMatrix=new C,this.fov=t,this.aspectRatio=i,this.near=s,this.far=e,this.projectionMatrix.makePerspective(t,i,s,e)}getViewMatrix(){return this.viewMatrix}setPerspectiveCamera(t,i,s,e){this.fov=t,this.aspectRatio=i,this.near=s,this.far=e,this.projectionMatrix.makePerspective(t,i,s,e)}computeWorldTransform(t){super.computeWorldTransform(t),this.viewMatrix=this.worldMatrix.inverse()}getFov(){return this.fov}getAspectRatio(){return this.aspectRatio}getNear(){return this.near}getFar(){return this.far}onMouseDown(t){}onMouseUp(t){}onMouseMove(t){}onMouseWheel(t){}onKeyDown(t){}onKeyUp(t){}}class nt{constructor(){r(this,"lights");r(this,"lightTypes");r(this,"lightPositions");r(this,"ambientIntensities");r(this,"diffuseIntensities");r(this,"specularIntensities");this.lights=[],this.lightTypes=[],this.lightPositions=[],this.ambientIntensities=[],this.diffuseIntensities=[],this.specularIntensities=[]}clear(){this.lights=[],this.lightTypes=[],this.lightPositions=[],this.ambientIntensities=[],this.diffuseIntensities=[],this.specularIntensities=[]}addLight(t){this.lights.some(s=>s==t)||this.lights.push(t)}getNumLights(){return this.lights.length}updateLights(){this.lights.forEach(t=>{if(t.visible){const i=new a;i.applyMatrix(t.getWorldMatrix()),this.lightPositions.push(i.x,i.y,i.z),this.lightTypes.push(t.getType()),this.ambientIntensities.push(t.ambientIntensity.r,t.ambientIntensity.g,t.ambientIntensity.b),this.diffuseIntensities.push(t.diffuseIntensity.r,t.diffuseIntensity.g,t.diffuseIntensity.b),this.specularIntensities.push(t.specularIntensity.r,t.specularIntensity.g,t.specularIntensity.b)}else{const i=new a;i.applyMatrix(t.getWorldMatrix()),this.lightPositions.push(i.x,i.y,i.z),this.lightTypes.push(t.getType()),this.ambientIntensities.push(0,0,0),this.diffuseIntensities.push(0,0,0),this.specularIntensities.push(0,0,0)}})}}class ot{constructor(){r(this,"root");r(this,"lightManager");this.root=new W,this.lightManager=new nt}draw(t){t.computeWorldTransform(this.root),this.computeWorldTransforms(),this.lightManager.clear(),this.root.setLights(this.lightManager),this.lightManager.updateLights(),this.root.children.forEach(i=>{i.draw(this.root,t,this.lightManager)})}postRender(){this.root.children.forEach(t=>{t.postRender()})}add(t){this.root.add(t)}remove(t){this.root.remove(t)}computeWorldTransforms(){this.root.children.forEach(t=>{t.computeWorldTransform(this.root)})}}const j=class{constructor(){r(this,"renderer");r(this,"camera");r(this,"scene");r(this,"time");j.instance=this,this.time=Date.now(),this.camera=new Q,this.scene=new ot,this.renderer=new rt,this.renderer.resize(window.innerWidth,window.innerHeight,this.camera.getAspectRatio()),window.addEventListener("resize",()=>{this.resize()},!1),window.addEventListener("mousedown",t=>{this.onMouseDownEventHandler(t)}),window.addEventListener("mouseup",t=>{this.onMouseUpEventHandler(t)}),window.addEventListener("mousemove",t=>{this.onMouseMoveEventHandler(t)}),window.addEventListener("wheel",t=>{this.onMouseWheelEventHandler(t)}),window.addEventListener("keydown",t=>{this.onKeyDownEventHandler(t)}),window.addEventListener("keyup",t=>{this.onKeyUpEventHandler(t)})}static getInstance(){return j.instance}start(){this.createScene(),this.mainLoop()}mainLoop(){this.update((Date.now()-this.time)/1e3),this.renderer.render(this.scene,this.camera),this.scene.postRender(),window.requestAnimationFrame(()=>this.mainLoop())}resize(){this.renderer.resize(window.innerWidth,window.innerHeight,this.camera.getAspectRatio())}onMouseDown(t){}onMouseUp(t){}onMouseMove(t){}onMouseWheel(t){}onKeyDown(t){}onKeyUp(t){}onMouseDownEventHandler(t){this.camera.onMouseDown(t),this.onMouseDown(t)}onMouseUpEventHandler(t){this.camera.onMouseUp(t),this.onMouseUp(t)}onMouseMoveEventHandler(t){this.camera.onMouseMove(t),this.onMouseMove(t)}onMouseWheelEventHandler(t){this.camera.onMouseWheel(t),this.onMouseWheel(t)}onKeyDownEventHandler(t){this.camera.onKeyDown(t),this.onKeyDown(t)}onKeyUpEventHandler(t){this.camera.onKeyUp(t),this.onKeyUp(t)}};let D=j;r(D,"instance");class ht extends Q{constructor(t=1,i=60,s=1920/1080,e=.1,n=100){super(i,s,e,n);r(this,"mouseDrag");r(this,"cameraOrbitX");r(this,"cameraOrbitY");r(this,"cameraDistance");this.mouseDrag=!1,this.cameraOrbitX=new z,this.cameraOrbitY=new z,this.cameraDistance=t,this.updateCameraOrbit()}onMouseDown(t){t.target.localName=="canvas"&&(this.mouseDrag=!0)}onMouseUp(t){this.mouseDrag=!1}onMouseMove(t){this.mouseDrag&&(this.cameraOrbitX.multiply(z.makeRotationX(-t.movementY*Math.PI/180)),this.cameraOrbitY.multiply(z.makeRotationY(-t.movementX*Math.PI/180)),this.updateCameraOrbit())}onMouseWheel(t){this.cameraDistance+=t.deltaY/1e3,this.updateCameraOrbit()}updateCameraOrbit(){this.rotation.copy(this.cameraOrbitX),this.rotation.multiply(this.cameraOrbitY),this.position.set(0,0,this.cameraDistance),this.position.rotate(this.rotation)}}const P=class{constructor(t=0,i=0,s=0){r(this,"r");r(this,"g");r(this,"b");this.r=t,this.g=i,this.b=s}set(t,i,s){this.r=t,this.g=i,this.b=s}copy(t){this.r=t.r,this.g=t.g,this.b=t.b}};let c=P;r(c,"WHITE",new P(1,1,1)),r(c,"BLACK",new P(0,0,0)),r(c,"RED",new P(1,0,0)),r(c,"GREEN",new P(0,1,0)),r(c,"BLUE",new P(0,0,1)),r(c,"YELLOW",new P(1,1,0)),r(c,"PURPLE",new P(1,0,1)),r(c,"CYAN",new P(0,1,1));var at=`#version 300 es

precision mediump float;

#define POINT_LIGHT 0\r
#define DIRECTIONAL_LIGHT 1

const int MAX_LIGHTS = 16;

uniform mat4 modelMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;\r
uniform vec3 eyePosition;

uniform int numLights;\r
uniform int lightTypes[MAX_LIGHTS];\r
uniform vec3 lightPositions[MAX_LIGHTS];\r
uniform vec3 ambientIntensities[MAX_LIGHTS];\r
uniform vec3 diffuseIntensities[MAX_LIGHTS];\r
uniform vec3 specularIntensities[MAX_LIGHTS];

uniform vec3 kAmbient;\r
uniform vec3 kDiffuse;\r
uniform vec3 kSpecular;\r
uniform float shininess;

in vec3 position;\r
in vec3 normal;\r
in vec4 color;\r
in vec2 texCoord;

out vec4 vertColor;\r
out vec2 uv;

void main() \r
{\r
    
    vec3 worldPosition = (modelMatrix * vec4(position, 1)).xyz;

    vec3 illumination = vec3(0, 0, 0);\r
    for(int i=0; i < numLights; i++)\r
    {\r
        
        illumination += kAmbient * ambientIntensities[i];\r
        \r
        
        vec3 n = normalize((normalMatrix * vec4(normal, 0)).xyz);

        
        vec3 l;\r
        if(lightTypes[i] == DIRECTIONAL_LIGHT)\r
            l = normalize(lightPositions[i]);\r
        else\r
            l = normalize(lightPositions[i] - worldPosition);

        
        float diffuseComponent = max(dot(n, l), 0.0);\r
        illumination += diffuseComponent * kDiffuse * diffuseIntensities[i];

        
        vec3 e = normalize(eyePosition - position);

        
        vec3 r = reflect(-l, n);

        
        float specularComponent = pow(max(dot(e, r), 0.0), shininess);\r
        illumination += specularComponent * kSpecular * specularIntensities[i];\r
    }

    vertColor = color;\r
    vertColor.rgb *= illumination;

    uv = texCoord.xy; 

    gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition, 1);\r
}`,lt=`#version 300 es

precision mediump float;

uniform int useTexture;\r
uniform sampler2D textureImage;

in vec4 vertColor;\r
in vec2 uv;

out vec4 fragColor;

void main() \r
{\r
    fragColor = vertColor;

    if(useTexture != 0)\r
    {\r
        fragColor *= texture(textureImage, uv);\r
    }\r
}`;class S{constructor(){r(this,"visible");r(this,"gl");this.visible=!0,this.gl=D.getInstance().renderer.gl}}class k{constructor(t,i){r(this,"vertexShader");r(this,"fragmentShader");r(this,"shaderProgram");r(this,"vertexSource");r(this,"fragmentSource");r(this,"initialized");this.vertexSource=t,this.fragmentSource=i,this.vertexShader=null,this.fragmentShader=null,this.shaderProgram=null,this.initialized=!1}initialize(t){this.initialized||(this.initialized=!0,this.vertexShader=this.createVertexShader(t,this.vertexSource),this.fragmentShader=this.createFragmentShader(t,this.fragmentSource),this.vertexShader&&this.fragmentShader&&(this.shaderProgram=this.createShaderProgram(t,this.vertexShader,this.fragmentShader)))}createVertexShader(t,i){const s=t.createShader(t.VERTEX_SHADER);return s?(t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||(console.error("Error: unable to load vertex shader"),console.error(t.getShaderInfoLog(s)))):console.error("Error: unable to create vertex shader"),s}createFragmentShader(t,i){const s=t.createShader(t.FRAGMENT_SHADER);return s?(t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||(console.error("Error: unable to load fragment shader"),console.error(t.getShaderInfoLog(s)))):console.error("Error: unable to create fragment shader"),s}createShaderProgram(t,i,s){let e=null;if(i&&s){if(e=t.createProgram(),!e)return console.error("Error: could not create shader program"),null;if(t.attachShader(e,i),t.attachShader(e,s),t.linkProgram(e),!t.getProgramParameter(e,t.LINK_STATUS))return console.error("Error: could not link shader program"),console.error(t.getProgramInfoLog(e)),null}return e}getProgram(){return this.shaderProgram}getAttribute(t,i){return this.shaderProgram?t.getAttribLocation(this.shaderProgram,i):-1}getUniform(t,i){return this.shaderProgram?t.getUniformLocation(this.shaderProgram,i):null}}const A=class extends S{constructor(){super();r(this,"texture");r(this,"ambientColor");r(this,"diffuseColor");r(this,"specularColor");r(this,"shininess");r(this,"kAmbientUniform");r(this,"kDiffuseUniform");r(this,"kSpecularUniform");r(this,"shininessUniform");r(this,"textureUniform");r(this,"useTextureUniform");r(this,"eyePositionUniform");r(this,"modelUniform");r(this,"viewUniform");r(this,"projectionUniform");r(this,"normalUniform");r(this,"numLightsUniform");r(this,"lightTypesUniform");r(this,"lightPositionsUniform");r(this,"ambientIntensitiesUniform");r(this,"diffuseIntensitiesUniform");r(this,"specularIntensitiesUniform");r(this,"positionAttribute");r(this,"normalAttribute");r(this,"colorAttribute");r(this,"texCoordAttribute");this.texture=null,this.ambientColor=new c(1,1,1),this.diffuseColor=new c(1,1,1),this.specularColor=new c(0,0,0),this.shininess=30,A.shader.initialize(this.gl),this.kAmbientUniform=A.shader.getUniform(this.gl,"kAmbient"),this.kDiffuseUniform=A.shader.getUniform(this.gl,"kDiffuse"),this.kSpecularUniform=A.shader.getUniform(this.gl,"kSpecular"),this.shininessUniform=A.shader.getUniform(this.gl,"shininess"),this.textureUniform=A.shader.getUniform(this.gl,"textureImage"),this.useTextureUniform=A.shader.getUniform(this.gl,"useTexture"),this.eyePositionUniform=A.shader.getUniform(this.gl,"eyePosition"),this.viewUniform=A.shader.getUniform(this.gl,"viewMatrix"),this.modelUniform=A.shader.getUniform(this.gl,"modelMatrix"),this.projectionUniform=A.shader.getUniform(this.gl,"projectionMatrix"),this.normalUniform=A.shader.getUniform(this.gl,"normalMatrix"),this.numLightsUniform=A.shader.getUniform(this.gl,"numLights"),this.lightTypesUniform=A.shader.getUniform(this.gl,"lightTypes"),this.lightPositionsUniform=A.shader.getUniform(this.gl,"lightPositions"),this.ambientIntensitiesUniform=A.shader.getUniform(this.gl,"ambientIntensities"),this.diffuseIntensitiesUniform=A.shader.getUniform(this.gl,"diffuseIntensities"),this.specularIntensitiesUniform=A.shader.getUniform(this.gl,"specularIntensities"),this.positionAttribute=A.shader.getAttribute(this.gl,"position"),this.normalAttribute=A.shader.getAttribute(this.gl,"normal"),this.colorAttribute=A.shader.getAttribute(this.gl,"color"),this.texCoordAttribute=A.shader.getAttribute(this.gl,"texCoord")}draw(t,i,s,e){if(!this.visible||t.triangleCount==0)return;this.gl.useProgram(A.shader.getProgram());const n=new a;n.applyMatrix(s.getWorldMatrix()),this.gl.uniform3f(this.eyePositionUniform,n.x,n.y,n.z),this.gl.uniformMatrix4fv(this.modelUniform,!1,i.getWorldMatrix().mat),this.gl.uniformMatrix4fv(this.viewUniform,!1,s.getViewMatrix().mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniformMatrix4fv(this.normalUniform,!1,i.getWorldMatrix().inverse().transpose().mat),this.gl.uniform3f(this.kAmbientUniform,this.ambientColor.r,this.ambientColor.g,this.ambientColor.b),this.gl.uniform3f(this.kDiffuseUniform,this.diffuseColor.r,this.diffuseColor.g,this.diffuseColor.b),this.gl.uniform3f(this.kSpecularUniform,this.specularColor.r,this.specularColor.g,this.specularColor.b),this.gl.uniform1f(this.shininessUniform,this.shininess),this.gl.uniform1i(this.numLightsUniform,e.getNumLights()),this.gl.uniform1iv(this.lightTypesUniform,e.lightTypes),this.gl.uniform3fv(this.lightPositionsUniform,e.lightPositions),this.gl.uniform3fv(this.ambientIntensitiesUniform,e.ambientIntensities),this.gl.uniform3fv(this.diffuseIntensitiesUniform,e.diffuseIntensities),this.gl.uniform3fv(this.specularIntensitiesUniform,e.specularIntensities),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.normalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.normalBuffer),this.gl.vertexAttribPointer(this.normalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.colorAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.colorBuffer),this.gl.vertexAttribPointer(this.colorAttribute,4,this.gl.FLOAT,!1,0,0),this.texture?(this.gl.uniform1i(this.useTextureUniform,1),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.gl.uniform1i(this.textureUniform,this.texture.id),this.gl.enableVertexAttribArray(this.texCoordAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.texCoordBuffer),this.gl.vertexAttribPointer(this.texCoordAttribute,2,this.gl.FLOAT,!1,0,0)):this.gl.uniform1i(this.useTextureUniform,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,t.triangleCount*3,this.gl.UNSIGNED_SHORT,0)}};let Y=A;r(Y,"shader",new k(at,lt));class $ extends W{constructor(){super();r(this,"gl");r(this,"positionBuffer");r(this,"normalBuffer");r(this,"colorBuffer");r(this,"indexBuffer");r(this,"texCoordBuffer");r(this,"positionBufferDirty");r(this,"normalBufferDirty");r(this,"colorBufferDirty");r(this,"indexBufferDirty");r(this,"texCoordBufferDirty");r(this,"vertexCount");r(this,"triangleCount");r(this,"material");this.gl=D.getInstance().renderer.gl,this.positionBuffer=this.gl.createBuffer(),this.normalBuffer=this.gl.createBuffer(),this.colorBuffer=this.gl.createBuffer(),this.indexBuffer=this.gl.createBuffer(),this.texCoordBuffer=this.gl.createBuffer(),this.positionBufferDirty=!1,this.normalBufferDirty=!1,this.colorBufferDirty=!1,this.indexBufferDirty=!1,this.texCoordBufferDirty=!1,this.vertexCount=0,this.triangleCount=0,this.material=new Y}draw(t,i,s){!this.visible||(this.material.draw(this,this,i,s),this.children.forEach(e=>{e.draw(this,i,s)}))}postRender(){this.positionBufferDirty=!1,this.normalBufferDirty=!1,this.colorBufferDirty=!1,this.indexBufferDirty=!1,this.children.forEach(t=>{t.postRender()})}setVertices(t){if(t.length>0){if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),typeof t[0]=="number")this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW),this.vertexCount=t.length/3;else{const i=[];t.forEach(s=>{i.push(s.x,s.y,s.z)}),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(i),this.gl.DYNAMIC_DRAW),this.vertexCount=t.length}this.positionBufferDirty=!0}}setNormals(t){if(t.length>0){if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.normalBuffer),typeof t[0]=="number")this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW);else{const i=[];t.forEach(s=>{i.push(s.x,s.y,s.z)}),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(i),this.gl.DYNAMIC_DRAW)}this.normalBufferDirty=!0}}setColors(t){if(t.length>0){if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),typeof t[0]=="number")this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW);else{const i=[];t.forEach(s=>{i.push(s.r,s.g,s.b,s.a)}),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(i),this.gl.DYNAMIC_DRAW)}this.colorBufferDirty=!0}}setTextureCoordinates(t){if(t.length>0){if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texCoordBuffer),typeof t[0]=="number")this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW);else{const i=[];t.forEach(s=>{i.push(s.x,s.y)}),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(i),this.gl.DYNAMIC_DRAW)}this.texCoordBufferDirty=!0}}setIndices(t){if(t.length>0){if(this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),typeof t[0]=="number")this.triangleCount=t.length/3,this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(t),this.gl.DYNAMIC_DRAW);else{this.triangleCount=t.length;const i=[];t.forEach(s=>{i.push(s.x,s.y,s.z)}),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),this.gl.DYNAMIC_DRAW)}this.indexBufferDirty=!0}}setArrayBuffer(t,i){if(t.length>0)if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),typeof t[0]=="number")this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW);else{const s=[];t.forEach(e=>{s.push(e.x,e.y,e.z)}),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(s),this.gl.DYNAMIC_DRAW)}}getVertices(){const t=new Float32Array(this.vertexCount*3);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,this.positionBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,t),[...t]}getNormals(){const t=new Float32Array(this.vertexCount*3);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,this.normalBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,t),[...t]}getColors(){const t=new Float32Array(this.vertexCount*4);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,this.colorBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,t),[...t]}getTextureCoordinates(){const t=new Float32Array(this.vertexCount*2);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,this.texCoordBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,t),[...t]}getIndices(){const t=new Uint16Array(this.triangleCount*3);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,this.indexBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,t),[...t]}getArrayBuffer(t){const i=new Float32Array(this.vertexCount*3);return this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,t),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,i),[...i]}createDefaultVertexColors(){const t=[];for(let i=0;i<this.vertexCount;i++)t.push(1,1,1,1);this.setColors(t)}}class mt extends ${constructor(t=1,i=3){super();r(this,"radius");r(this,"subdivisions");this.radius=t,this.subdivisions=i,this.createSphere(this.radius,this.subdivisions)}createSphere(t,i){let s=[],e=[];const n=[],o=[],l=(1+Math.sqrt(5))*.5,m=1,f=1/l;s.push(new a(0,f,-m)),s.push(new a(f,m,0)),s.push(new a(-f,m,0)),s.push(new a(0,f,m)),s.push(new a(0,-f,m)),s.push(new a(-m,0,f)),s.push(new a(0,-f,-m)),s.push(new a(m,0,-f)),s.push(new a(m,0,f)),s.push(new a(-m,0,-f)),s.push(new a(f,-m,0)),s.push(new a(-f,-m,0));for(let h=0;h<s.length;h++)s[h].normalize();e.push(2,1,0),e.push(1,2,3),e.push(5,4,3),e.push(4,8,3),e.push(7,6,0),e.push(6,9,0),e.push(11,10,4),e.push(10,11,6),e.push(9,5,2),e.push(5,9,11),e.push(8,7,1),e.push(7,8,10),e.push(2,5,3),e.push(8,1,3),e.push(9,2,0),e.push(1,7,0),e.push(11,9,6),e.push(7,10,6),e.push(5,11,4),e.push(10,8,4);for(let h=0;h<i;h++){const y=[];for(let u=0;u<e.length/3;u++){const x=u*3,v=this.createCentroids(s,e[x],e[x+1],e[x+2]);s.push(...v);const M=this.subdivide(e[x],e[x+1],e[x+2],s.length-3,s.length-2,s.length-1);y.push(...M)}e=y}for(let h=0;h<s.length;h++)s[h].multiplyScalar(t);[s,e]=this.mergeSharedVertices(s,e);for(let h=0;h<s.length;h++){n.push(a.normalize(s[h]));const y=1-(s[h].y+t)/(2*t),u=new a(s[h].x,0,s[h].z);u.normalize();let x=Math.acos(a.FORWARD.dot(u));u.x>0&&(x=Math.PI*2-x);const v=x/(Math.PI*2);o.push(v,y)}const g=e.length;for(let h=0;h<g;h+=3)this.isSeamVertex(h,s,e)?this.isEndVertex(h+1,s,e)&&this.isEndVertex(h+2,s,e)?(s.push(a.copy(s[e[h]])),n.push(a.normalize(s[e[h]])),o.push(1,o[e[h]*2+1]),e[h]=s.length-1):this.isEndVertex(h+1,s,e)?(s.push(a.copy(s[e[h]])),n.push(a.normalize(s[e[h]])),o.push(1,o[e[h]*2+1]),s.push(a.copy(s[e[h+2]])),n.push(a.normalize(s[e[h+2]])),o.push(1,o[e[h+2]*2+1]),e[h]=s.length-2,e[h+2]=s.length-1):this.isEndVertex(h+2,s,e)&&(s.push(a.copy(s[e[h]])),n.push(a.normalize(s[e[h]])),o.push(1,o[e[h]*2+1]),s.push(a.copy(s[e[h+1]])),n.push(a.normalize(s[e[h+1]])),o.push(1,o[e[h+1]*2+1]),e[h]=s.length-2,e[h+1]=s.length-1):this.isSeamVertex(h+1,s,e)?this.isEndVertex(h,s,e)&&this.isEndVertex(h+2,s,e)?(s.push(a.copy(s[e[h+1]])),n.push(a.normalize(s[e[h+1]])),o.push(1,o[e[h+1]*2+1]),e[h+1]=s.length-1):this.isEndVertex(h,s,e)?(s.push(a.copy(s[e[h+1]])),n.push(a.normalize(s[e[h+1]])),o.push(1,o[e[h+1]*2+1]),s.push(a.copy(s[e[h+2]])),n.push(a.normalize(s[e[h+2]])),o.push(1,o[e[h+2]*2+1]),e[h+1]=s.length-2,e[h+2]=s.length-1):this.isEndVertex(h+2,s,e)&&(s.push(a.copy(s[e[h]])),n.push(a.normalize(s[e[h]])),o.push(1,o[e[h]*2+1]),s.push(a.copy(s[e[h+1]])),n.push(a.normalize(s[e[h+1]])),o.push(1,o[e[h+1]*2+1]),e[h]=s.length-2,e[h+1]=s.length-1):this.isSeamVertex(h+2,s,e)&&(this.isEndVertex(h,s,e)&&this.isEndVertex(h+1,s,e)?(s.push(a.copy(s[e[h+2]])),n.push(a.normalize(s[e[h+2]])),o.push(1,o[e[h+2]*2+1]),e[h+2]=s.length-1):this.isEndVertex(h,s,e)?(s.push(a.copy(s[e[h+1]])),n.push(a.normalize(s[e[h+1]])),o.push(1,o[e[h+1]*2+1]),s.push(a.copy(s[e[h+2]])),n.push(a.normalize(s[e[h+2]])),o.push(1,o[e[h+2]*2+1]),e[h+1]=s.length-2,e[h+2]=s.length-1):this.isEndVertex(h+1,s,e)&&(s.push(a.copy(s[e[h]])),n.push(a.normalize(s[e[h]])),o.push(1,o[e[h]*2+1]),s.push(a.copy(s[e[h+2]])),n.push(a.normalize(s[e[h+2]])),o.push(1,o[e[h+2]*2+1]),e[h]=s.length-2,e[h+2]=s.length-1));this.setVertices(s),this.setNormals(n),this.setTextureCoordinates(o),this.setIndices(e),this.createDefaultVertexColors()}isEndVertex(t,i,s){return i[s[t]].x>0}isSeamVertex(t,i,s){return i[s[t]].x==0&&i[s[t]].z<=0}createCentroids(t,i,s,e){const n=[],o=a.add(t[i],t[s]);o.divideScalar(2),o.normalize(),n.push(o);const l=a.add(t[s],t[e]);l.divideScalar(2),l.normalize(),n.push(l);const m=a.add(t[e],t[i]);return m.divideScalar(2),m.normalize(),n.push(m),n}subdivide(t,i,s,e,n,o){const l=[];return l.push(t,e,o),l.push(i,n,e),l.push(s,o,n),l.push(e,n,o),l}mergeSharedVertices(t,i){const s=[],e=[];i.forEach(n=>{e.push(n)});for(let n=0;n<t.length;n++){let o=!1;for(let l=0;l<s.length;l++)if(t[n].equals(s[l])){for(let m=0;m<i.length;m++)i[m]==n&&(e[m]=l);o=!0}if(!o){s.push(t[n]);for(let l=0;l<i.length;l++)i[l]==n&&(e[l]=s.length-1)}}return[s,e]}}var G=(d=>(d[d.POINT=0]="POINT",d[d.DIRECTIONAL=1]="DIRECTIONAL",d))(G||{});class J extends W{constructor(t=0,i=new c,s=new c,e=new c){super();r(this,"ambientIntensity");r(this,"diffuseIntensity");r(this,"specularIntensity");r(this,"type");this.type=t,this.ambientIntensity=i,this.diffuseIntensity=s,this.specularIntensity=e}getType(){return this.type}setLights(t){t.addLight(this),super.setLights(t)}}class ut extends J{constructor(t=new c(.5,.5,.5)){super(G.POINT,t,new c(0,0,0),new c(0,0,0))}}class ft extends J{constructor(t=new c(.5,.5,.5)){super(G.DIRECTIONAL,new c(0,0,0),t,t)}}class ct extends J{constructor(t=new c(.5,.5,.5)){super(G.POINT,new c(0,0,0),t,t)}}const V=class{constructor(t=null){r(this,"gl");r(this,"texture");r(this,"id");this.gl=D.getInstance().renderer.gl,this.texture=this.gl.createTexture(),this.id=V.numTextures,V.numTextures++,this.gl.activeTexture(this.gl.TEXTURE0+this.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),t&&this.load(t)}load(t){const i=new Image;i.addEventListener("load",s=>{this.setImage(i)},!1),i.src=t}setImage(t){this.gl.activeTexture(this.gl.TEXTURE0+this.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.generateMipmap(this.gl.TEXTURE_2D)}};let O=V;r(O,"numTextures",0);var gt=`#version 300 es

precision mediump float;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;

in vec3 position;

void main() \r
{\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\r
}`,dt=`#version 300 es

precision mediump float;

uniform vec4 color;

out vec4 fragColor;

void main() \r
{\r
    fragColor = color;\r
}`;const F=class extends S{constructor(){super();r(this,"color");r(this,"wireframeBuffers");r(this,"positionAttribute");r(this,"modelViewUniform");r(this,"projectionUniform");r(this,"colorUniform");this.color=new T(1,1,1,1),this.wireframeBuffers=new Map,F.shader.initialize(this.gl),this.positionAttribute=F.shader.getAttribute(this.gl,"position"),this.modelViewUniform=F.shader.getUniform(this.gl,"modelViewMatrix"),this.projectionUniform=F.shader.getUniform(this.gl,"projectionMatrix"),this.colorUniform=F.shader.getUniform(this.gl,"color")}draw(t,i,s,e){!this.visible||t.triangleCount==0||(this.gl.useProgram(F.shader.getProgram()),this.gl.uniformMatrix4fv(this.modelViewUniform,!1,C.multiply(i.getWorldMatrix(),s.getViewMatrix()).mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniform4f(this.colorUniform,this.color.r,this.color.g,this.color.b,this.color.a),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),(!this.wireframeBuffers.get(t)||t.positionBufferDirty)&&this.updateWireframeBuffer(t),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.wireframeBuffers.get(t)),this.gl.drawElements(this.gl.LINES,t.triangleCount*6,this.gl.UNSIGNED_SHORT,0))}updateWireframeBuffer(t){let i;i=this.wireframeBuffers.get(t),i||(i=this.gl.createBuffer(),i&&this.wireframeBuffers.set(t,i));const s=new Uint16Array(t.triangleCount*3);this.gl.bindBuffer(this.gl.COPY_READ_BUFFER,t.indexBuffer),this.gl.getBufferSubData(this.gl.COPY_READ_BUFFER,0,s);const e=[...s],n=[];for(let o=0;o<t.triangleCount;o++)n.push(e[o*3]),n.push(e[o*3+1]),n.push(e[o*3+1]),n.push(e[o*3+2]),n.push(e[o*3+2]),n.push(e[o*3]);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,i),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(n),this.gl.DYNAMIC_DRAW)}};let X=F;r(X,"shader",new k(gt,dt));var pt=`#version 300 es

precision mediump float;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;

in vec3 position;\r
in vec2 texCoord;

out vec2 uv;

void main() \r
{\r
    uv = texCoord.xy;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\r
}`,xt=`#version 300 es

precision mediump float;

uniform vec3 color;\r
uniform int useTexture;\r
uniform sampler2D textureImage;

in vec2 uv;

out vec4 fragColor;

void main() \r
{\r
    fragColor = vec4(color, 1);

    if(useTexture != 0)\r
    {\r
        fragColor *= texture(textureImage, uv);\r
    }\r
}`;const I=class extends S{constructor(){super();r(this,"texture");r(this,"color");r(this,"colorUniform");r(this,"textureUniform");r(this,"useTextureUniform");r(this,"modelViewUniform");r(this,"projectionUniform");r(this,"positionAttribute");r(this,"texCoordAttribute");this.texture=null,this.color=new c(1,1,1),I.shader.initialize(this.gl),this.colorUniform=I.shader.getUniform(this.gl,"color"),this.textureUniform=I.shader.getUniform(this.gl,"textureImage"),this.useTextureUniform=I.shader.getUniform(this.gl,"useTexture"),this.modelViewUniform=I.shader.getUniform(this.gl,"modelViewMatrix"),this.projectionUniform=I.shader.getUniform(this.gl,"projectionMatrix"),this.positionAttribute=I.shader.getAttribute(this.gl,"position"),this.texCoordAttribute=I.shader.getAttribute(this.gl,"texCoord")}draw(t,i,s,e){!this.visible||t.triangleCount==0||(this.gl.useProgram(I.shader.getProgram()),this.gl.uniformMatrix4fv(this.modelViewUniform,!1,C.multiply(i.getWorldMatrix(),s.getViewMatrix()).mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniform3f(this.colorUniform,this.color.r,this.color.g,this.color.b),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),this.texture?(this.gl.uniform1i(this.useTextureUniform,1),this.gl.activeTexture(this.gl.TEXTURE0+this.texture.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture),this.gl.uniform1i(this.textureUniform,this.texture.id),this.gl.enableVertexAttribArray(this.texCoordAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.texCoordBuffer),this.gl.vertexAttribPointer(this.texCoordAttribute,2,this.gl.FLOAT,!1,0,0)):this.gl.uniform1i(this.useTextureUniform,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,t.triangleCount*3,this.gl.UNSIGNED_SHORT,0))}};let H=I;r(H,"shader",new k(pt,xt));class bt{constructor(t){r(this,"tokens");r(this,"line");r(this,"token");this.tokens=[],this.line=0,this.token=0;const i=t.split(`
`);for(let s=0;s<i.length;s++)this.tokens.push(i[s].trim().split(/\s+/));for(let s=0;s<this.tokens.length;s++)this.tokens[s].length==1&&this.tokens[s][0]==""&&(this.tokens.splice(s,1),s--)}peek(){return this.tokens[this.line][this.token]}expect(t){return this.peek()==t?(this.readToken(),!0):!1}consumeLine(){this.line++,this.token=0}done(){return this.line>=this.tokens.length}readToken(){const t=this.tokens[this.line][this.token];return this.token++,this.token>=this.tokens[this.line].length&&(this.line++,this.token=0),t}readNumber(){return Number(this.readToken())}readLine(){const t=[];for(let i=this.token;i<this.tokens[this.line].length;i++)t.push(this.tokens[this.line][i]);return this.line++,this.token=0,t}}class L{static load(t,i=null,s=null){return i||(i=new $),fetch(t).then(e=>{if(!e.ok)throw new Error;return e.blob()}).then(e=>{e.text().then(n=>{L.parse(n,i),s&&s(i)})}).catch(()=>{console.error("Unable to download file: "+t)}),i}static parse(t,i){const s=new bt(t),e=[],n=[],o=[],l=[];for(;!s.done();){const m=s.readToken();m=="v"?this.parseVertex(s.readLine(),e,n):m=="vn"?this.parseNormal(s.readLine(),o):m=="f"?this.parseFace(s.readLine(),l):s.consumeLine()}i.setVertices(e),i.setColors(n),i.setNormals(o),i.setIndices(l),n.length==0&&i.createDefaultVertexColors()}static parseVertex(t,i,s){i.push(Number(t[0])),i.push(Number(t[1])),i.push(Number(t[2])),t.length==6&&(s.push(Number(t[3])),s.push(Number(t[4])),s.push(Number(t[5])),s.push(1))}static parseNormal(t,i){i.push(Number(t[0])),i.push(Number(t[1])),i.push(Number(t[2]))}static parseFace(t,i){for(let s=0;s<3;s++){const e=t[s].split("/");i.push(Number(e[0])-1)}}}var At=`#version 300 es

precision mediump float;

uniform mat4 modelMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;

in vec3 position;\r
in vec3 normal;\r
in vec4 color;

out vec3 vertPosition;\r
out vec3 vertNormal;\r
out vec4 vertColor;

void main() \r
{\r
    vertPosition = (modelMatrix * vec4(position, 1)).xyz;\r
    vertNormal = normalize((normalMatrix * vec4(normal, 0)).xyz);\r
    vertColor = color;\r
    gl_Position = projectionMatrix * viewMatrix * vec4(vertPosition, 1);\r
}`,wt=`#version 300 es

precision mediump float;

#define POINT_LIGHT 0\r
#define DIRECTIONAL_LIGHT 1

const int MAX_LIGHTS = 16;

uniform vec3 kAmbient;\r
uniform vec3 kDiffuse;\r
uniform vec3 kSpecular;\r
uniform float shininess;

uniform int numLights;\r
uniform int lightTypes[MAX_LIGHTS];\r
uniform vec3 lightPositions[MAX_LIGHTS];\r
uniform vec3 ambientIntensities[MAX_LIGHTS];\r
uniform vec3 diffuseIntensities[MAX_LIGHTS];\r
uniform vec3 specularIntensities[MAX_LIGHTS];\r
uniform vec3 eyePosition;

in vec3 vertPosition;\r
in vec3 vertNormal;\r
in vec4 vertColor;

out vec4 fragColor;

void main() \r
{\r
    vec3 illumination = vec3(0, 0, 0);\r
    for(int i=0; i < numLights; i++)\r
    {\r
        illumination += kAmbient * ambientIntensities[i];

        
        vec3 n = normalize(vertNormal);

        
        vec3 l;\r
        if(lightTypes[i] == DIRECTIONAL_LIGHT)\r
            l = normalize(lightPositions[i]);\r
        else\r
            l = normalize(lightPositions[i] - vertPosition);

        
        float diffuseComponent = max(dot(n, l), 0.0);\r
        illumination += diffuseComponent * kDiffuse * diffuseIntensities[i];

        
        vec3 e = normalize(eyePosition - vertPosition);

        
        vec3 r = reflect(-l, n);\r
        \r
        
        float specularComponent = pow(max(dot(e, r), 0.0), shininess);\r
        illumination += specularComponent * kSpecular * specularIntensities[i];\r
    }

    fragColor = vertColor;\r
    fragColor.rgb *= illumination;\r
}`;const U=class extends S{constructor(){super();r(this,"ambientColor");r(this,"diffuseColor");r(this,"specularColor");r(this,"shininess");r(this,"kAmbientUniform");r(this,"kDiffuseUniform");r(this,"kSpecularUniform");r(this,"shininessUniform");r(this,"eyePositionUniform");r(this,"modelUniform");r(this,"viewUniform");r(this,"projectionUniform");r(this,"normalUniform");r(this,"numLightsUniform");r(this,"lightTypesUniform");r(this,"lightPositionsUniform");r(this,"ambientIntensitiesUniform");r(this,"diffuseIntensitiesUniform");r(this,"specularIntensitiesUniform");r(this,"positionAttribute");r(this,"normalAttribute");r(this,"colorAttribute");this.ambientColor=new c(1,1,1),this.diffuseColor=new c(1,1,1),this.specularColor=new c(0,0,0),this.shininess=30,U.shader.initialize(this.gl),this.kAmbientUniform=U.shader.getUniform(this.gl,"kAmbient"),this.kDiffuseUniform=U.shader.getUniform(this.gl,"kDiffuse"),this.kSpecularUniform=U.shader.getUniform(this.gl,"kSpecular"),this.shininessUniform=U.shader.getUniform(this.gl,"shininess"),this.eyePositionUniform=U.shader.getUniform(this.gl,"eyePosition"),this.viewUniform=U.shader.getUniform(this.gl,"viewMatrix"),this.modelUniform=U.shader.getUniform(this.gl,"modelMatrix"),this.projectionUniform=U.shader.getUniform(this.gl,"projectionMatrix"),this.normalUniform=U.shader.getUniform(this.gl,"normalMatrix"),this.numLightsUniform=U.shader.getUniform(this.gl,"numLights"),this.lightTypesUniform=U.shader.getUniform(this.gl,"lightTypes"),this.lightPositionsUniform=U.shader.getUniform(this.gl,"lightPositions"),this.ambientIntensitiesUniform=U.shader.getUniform(this.gl,"ambientIntensities"),this.diffuseIntensitiesUniform=U.shader.getUniform(this.gl,"diffuseIntensities"),this.specularIntensitiesUniform=U.shader.getUniform(this.gl,"specularIntensities"),this.positionAttribute=U.shader.getAttribute(this.gl,"position"),this.normalAttribute=U.shader.getAttribute(this.gl,"normal"),this.colorAttribute=U.shader.getAttribute(this.gl,"color")}draw(t,i,s,e){if(!this.visible||t.triangleCount==0)return;this.gl.useProgram(U.shader.getProgram());const n=new a;n.applyMatrix(s.getWorldMatrix()),this.gl.uniform3f(this.eyePositionUniform,n.x,n.y,n.z),this.gl.uniformMatrix4fv(this.modelUniform,!1,i.getWorldMatrix().mat),this.gl.uniformMatrix4fv(this.viewUniform,!1,s.getViewMatrix().mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniformMatrix4fv(this.normalUniform,!1,i.getWorldMatrix().inverse().transpose().mat),this.gl.uniform3f(this.kAmbientUniform,this.ambientColor.r,this.ambientColor.g,this.ambientColor.b),this.gl.uniform3f(this.kDiffuseUniform,this.diffuseColor.r,this.diffuseColor.g,this.diffuseColor.b),this.gl.uniform3f(this.kSpecularUniform,this.specularColor.r,this.specularColor.g,this.specularColor.b),this.gl.uniform1f(this.shininessUniform,this.shininess),this.gl.uniform1i(this.numLightsUniform,e.getNumLights()),this.gl.uniform1iv(this.lightTypesUniform,e.lightTypes),this.gl.uniform3fv(this.lightPositionsUniform,e.lightPositions),this.gl.uniform3fv(this.ambientIntensitiesUniform,e.ambientIntensities),this.gl.uniform3fv(this.diffuseIntensitiesUniform,e.diffuseIntensities),this.gl.uniform3fv(this.specularIntensitiesUniform,e.specularIntensities),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.normalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.normalBuffer),this.gl.vertexAttribPointer(this.normalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.colorAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.colorBuffer),this.gl.vertexAttribPointer(this.colorAttribute,4,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,t.triangleCount*3,this.gl.UNSIGNED_SHORT,0)}};let _=U;r(_,"shader",new k(At,wt));var yt=`#version 300 es

precision mediump float;

uniform mat4 modelMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;

in vec3 position;\r
in vec3 normal;\r
in vec4 color;

out vec3 vertPosition;\r
out vec3 vertNormal;\r
out vec4 vertColor;

void main() \r
{\r
    vertPosition = (modelMatrix * vec4(position, 1)).xyz;\r
    vertNormal = normalize((normalMatrix * vec4(normal, 0)).xyz);\r
    vertColor = color;\r
    gl_Position = projectionMatrix * viewMatrix * vec4(vertPosition, 1);\r
}`,Ut=`#version 300 es

precision mediump float;

#define POINT_LIGHT 0\r
#define DIRECTIONAL_LIGHT 1

const int MAX_LIGHTS = 16;

uniform vec3 kAmbient;\r
uniform vec3 kDiffuse;\r
uniform vec3 kSpecular;\r
uniform float shininess;

uniform int numLights;\r
uniform int lightTypes[MAX_LIGHTS];\r
uniform vec3 lightPositions[MAX_LIGHTS];\r
uniform vec3 ambientIntensities[MAX_LIGHTS];\r
uniform vec3 diffuseIntensities[MAX_LIGHTS];\r
uniform vec3 specularIntensities[MAX_LIGHTS];\r
uniform vec3 eyePosition;

uniform sampler2D diffuseRamp;\r
uniform sampler2D specularRamp;

in vec3 vertPosition;\r
in vec3 vertNormal;\r
in vec4 vertColor;

out vec4 fragColor;

void main() \r
{\r
    vec3 illumination = vec3(0, 0, 0);\r
    for(int i=0; i < numLights; i++)\r
    {\r
        illumination += kAmbient * ambientIntensities[i];\r
    \r
        
        vec3 n = normalize(vertNormal);

        
        vec3 l;\r
        if(lightTypes[i] == DIRECTIONAL_LIGHT)\r
            l = normalize(lightPositions[i]);\r
        else\r
            l = normalize(lightPositions[i] - vertPosition);

        
        float diffuseLookup = dot(n, l) * 0.5 + 0.5;\r
        vec3 diffuseComponent = texture(diffuseRamp, vec2(diffuseLookup, 0.0)).rgb;\r
        illumination += diffuseComponent * kDiffuse * diffuseIntensities[i];

        
        vec3 e = normalize(eyePosition - vertPosition);

        
        vec3 r = reflect(-l, n);\r
        \r
        
        float specularLookup = pow(max(dot(e, r), 0.0), shininess);\r
        vec3 specularComponent = texture(specularRamp, vec2(specularLookup, 0.0)).rgb;\r
        illumination += specularComponent * kSpecular * specularIntensities[i];\r
    }

    fragColor = vertColor;\r
    fragColor.rgb *= illumination;\r
}`;const w=class extends S{constructor(t,i){super();r(this,"ambientColor");r(this,"diffuseColor");r(this,"specularColor");r(this,"shininess");r(this,"diffuseRamp");r(this,"specularRamp");r(this,"kAmbientUniform");r(this,"kDiffuseUniform");r(this,"kSpecularUniform");r(this,"shininessUniform");r(this,"diffuseRampUniform");r(this,"specularRampUniform");r(this,"eyePositionUniform");r(this,"modelUniform");r(this,"viewUniform");r(this,"projectionUniform");r(this,"normalUniform");r(this,"numLightsUniform");r(this,"lightTypesUniform");r(this,"lightPositionsUniform");r(this,"ambientIntensitiesUniform");r(this,"diffuseIntensitiesUniform");r(this,"specularIntensitiesUniform");r(this,"positionAttribute");r(this,"normalAttribute");r(this,"colorAttribute");this.ambientColor=new c(1,1,1),this.diffuseColor=new c(1,1,1),this.specularColor=new c(0,0,0),this.shininess=30,this.diffuseRamp=t,this.specularRamp=i,w.shader.initialize(this.gl),this.kAmbientUniform=w.shader.getUniform(this.gl,"kAmbient"),this.kDiffuseUniform=w.shader.getUniform(this.gl,"kDiffuse"),this.kSpecularUniform=w.shader.getUniform(this.gl,"kSpecular"),this.shininessUniform=w.shader.getUniform(this.gl,"shininess"),this.diffuseRampUniform=w.shader.getUniform(this.gl,"diffuseRamp"),this.specularRampUniform=w.shader.getUniform(this.gl,"specularRamp"),this.eyePositionUniform=w.shader.getUniform(this.gl,"eyePosition"),this.viewUniform=w.shader.getUniform(this.gl,"viewMatrix"),this.modelUniform=w.shader.getUniform(this.gl,"modelMatrix"),this.projectionUniform=w.shader.getUniform(this.gl,"projectionMatrix"),this.normalUniform=w.shader.getUniform(this.gl,"normalMatrix"),this.numLightsUniform=w.shader.getUniform(this.gl,"numLights"),this.lightTypesUniform=w.shader.getUniform(this.gl,"lightTypes"),this.lightPositionsUniform=w.shader.getUniform(this.gl,"lightPositions"),this.ambientIntensitiesUniform=w.shader.getUniform(this.gl,"ambientIntensities"),this.diffuseIntensitiesUniform=w.shader.getUniform(this.gl,"diffuseIntensities"),this.specularIntensitiesUniform=w.shader.getUniform(this.gl,"specularIntensities"),this.positionAttribute=w.shader.getAttribute(this.gl,"position"),this.normalAttribute=w.shader.getAttribute(this.gl,"normal"),this.colorAttribute=w.shader.getAttribute(this.gl,"color")}draw(t,i,s,e){if(!this.visible||t.triangleCount==0)return;this.gl.useProgram(w.shader.getProgram());const n=new a;n.applyMatrix(s.getWorldMatrix()),this.gl.uniform3f(this.eyePositionUniform,n.x,n.y,n.z),this.gl.uniformMatrix4fv(this.modelUniform,!1,i.getWorldMatrix().mat),this.gl.uniformMatrix4fv(this.viewUniform,!1,s.getViewMatrix().mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniformMatrix4fv(this.normalUniform,!1,i.getWorldMatrix().inverse().transpose().mat),this.gl.uniform3f(this.kAmbientUniform,this.ambientColor.r,this.ambientColor.g,this.ambientColor.b),this.gl.uniform3f(this.kDiffuseUniform,this.diffuseColor.r,this.diffuseColor.g,this.diffuseColor.b),this.gl.uniform3f(this.kSpecularUniform,this.specularColor.r,this.specularColor.g,this.specularColor.b),this.gl.uniform1f(this.shininessUniform,this.shininess),this.gl.uniform1i(this.numLightsUniform,e.getNumLights()),this.gl.uniform1iv(this.lightTypesUniform,e.lightTypes),this.gl.uniform3fv(this.lightPositionsUniform,e.lightPositions),this.gl.uniform3fv(this.ambientIntensitiesUniform,e.ambientIntensities),this.gl.uniform3fv(this.diffuseIntensitiesUniform,e.diffuseIntensities),this.gl.uniform3fv(this.specularIntensitiesUniform,e.specularIntensities),this.gl.activeTexture(this.gl.TEXTURE0+this.diffuseRamp.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.diffuseRamp.texture),this.gl.uniform1i(this.diffuseRampUniform,this.diffuseRamp.id),this.gl.activeTexture(this.gl.TEXTURE0+this.specularRamp.id),this.gl.bindTexture(this.gl.TEXTURE_2D,this.specularRamp.texture),this.gl.uniform1i(this.specularRampUniform,this.specularRamp.id),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.normalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.normalBuffer),this.gl.vertexAttribPointer(this.normalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.colorAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.colorBuffer),this.gl.vertexAttribPointer(this.colorAttribute,4,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,t.triangleCount*3,this.gl.UNSIGNED_SHORT,0)}};let K=w;r(K,"shader",new k(yt,Ut));var vt=`#version 300 es

precision mediump float;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;\r
uniform float thickness;

in vec3 position;\r
in vec3 normal;\r
in vec3 leftNormal;\r
in vec3 rightNormal;

void main() \r
{\r
    vec3 vertPosition = (modelViewMatrix * vec4(position, 1)).xyz;\r
    vec3 eyeVector = -vertPosition;

    vec3 nl = (normalMatrix * vec4(leftNormal, 0)).xyz;\r
    vec3 nr = (normalMatrix * vec4(rightNormal, 0)).xyz;

    vec3 displacedVertex = position;\r
    if (dot(eyeVector, nl) * dot(eyeVector, nr) < 0.0) \r
    {\r
       displacedVertex += thickness * normal;\r
    }\r
    \r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedVertex, 1);\r
}`,Mt=`#version 300 es

precision mediump float;

uniform vec3 color;

out vec4 fragColor;

void main() \r
{\r
    fragColor = vec4(color, 1);\r
}`;class q extends ${constructor(){super();r(this,"leftNormalBuffer");r(this,"rightNormalBuffer");r(this,"edgeMap");this.leftNormalBuffer=this.gl.createBuffer(),this.rightNormalBuffer=this.gl.createBuffer(),this.edgeMap=new Map}createFromMesh(t){this.edgeMap.clear();const i=t.getVertices(),s=t.getNormals(),e=t.getIndices(),n=[],o=[],l=[];for(let u=0;u<t.vertexCount;u++)n.push(new a(i[u*3],i[u*3+1],i[u*3+2])),o.push(new a(s[u*3],s[u*3+1],s[u*3+2]));for(let u=0;u<t.triangleCount;u++)l.push(new a(e[u*3],e[u*3+1],e[u*3+2]));const m=[],f=[],g=[],h=[],y=[];for(let u=0;u<t.triangleCount;u++){const x=a.subtract(n[l[u].y],n[l[u].x]),v=a.subtract(n[l[u].z],n[l[u].x]);x.normalize(),v.normalize();const M=a.cross(x,v);this.addEdge(m,f,g,h,y,n,o,l[u].x,l[u].y,M),this.addEdge(m,f,g,h,y,n,o,l[u].y,l[u].z,M),this.addEdge(m,f,g,h,y,n,o,l[u].z,l[u].x,M)}this.setVertices(m),this.setNormals(f),this.setArrayBuffer(g,this.leftNormalBuffer),this.setArrayBuffer(h,this.rightNormalBuffer),this.setIndices(y)}addEdge(t,i,s,e,n,o,l,m,f,g){let h;m<f?h=[m,f].join(","):h=[f,m].join(",");const y=this.edgeMap.get(h);if(y)e[y]=g,e[y+1]=g,e[y+2]=g,e[y+3]=g;else{const u=t.length;this.edgeMap.set(h,u),t.push(o[m]),t.push(o[m]),t.push(o[f]),t.push(o[f]),i.push(a.ZERO),i.push(l[m]),i.push(a.ZERO),i.push(l[f]),s.push(g),s.push(g),s.push(g),s.push(g);const x=a.multiplyScalar(g,-1);e.push(x),e.push(x),e.push(x),e.push(x),n.push(new a(u,u+2,u+3)),n.push(new a(u,u+3,u+1))}}}const E=class extends S{constructor(){super();r(this,"color");r(this,"thickness");r(this,"modelViewUniform");r(this,"projectionUniform");r(this,"normalUniform");r(this,"colorUniform");r(this,"thicknessUniform");r(this,"positionAttribute");r(this,"normalAttribute");r(this,"leftNormalAttribute");r(this,"rightNormalAttribute");this.thickness=.01,this.color=new c(0,0,0),E.shader.initialize(this.gl),this.modelViewUniform=E.shader.getUniform(this.gl,"modelViewMatrix"),this.projectionUniform=E.shader.getUniform(this.gl,"projectionMatrix"),this.normalUniform=E.shader.getUniform(this.gl,"normalMatrix"),this.colorUniform=E.shader.getUniform(this.gl,"color"),this.thicknessUniform=E.shader.getUniform(this.gl,"thickness"),this.positionAttribute=E.shader.getAttribute(this.gl,"position"),this.normalAttribute=E.shader.getAttribute(this.gl,"normal"),this.leftNormalAttribute=E.shader.getAttribute(this.gl,"leftNormal"),this.rightNormalAttribute=E.shader.getAttribute(this.gl,"rightNormal")}draw(t,i,s,e){if(!this.visible||!(t instanceof q)||t.triangleCount==0)return;const n=t;this.gl.useProgram(E.shader.getProgram());const o=C.multiply(i.getWorldMatrix(),s.getViewMatrix());this.gl.uniformMatrix4fv(this.modelViewUniform,!1,o.mat),this.gl.uniformMatrix4fv(this.projectionUniform,!1,s.projectionMatrix.mat),this.gl.uniformMatrix4fv(this.normalUniform,!1,o.inverse().transpose().mat),this.gl.uniform3f(this.colorUniform,this.color.r,this.color.g,this.color.b),this.gl.uniform1f(this.thicknessUniform,this.thickness),this.gl.enableVertexAttribArray(this.positionAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.positionBuffer),this.gl.vertexAttribPointer(this.positionAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.normalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.normalBuffer),this.gl.vertexAttribPointer(this.normalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.leftNormalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.leftNormalBuffer),this.gl.vertexAttribPointer(this.leftNormalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.rightNormalAttribute),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n.rightNormalBuffer),this.gl.vertexAttribPointer(this.rightNormalAttribute,3,this.gl.FLOAT,!1,0,0),this.gl.disable(this.gl.CULL_FACE),this.gl.enable(this.gl.POLYGON_OFFSET_FILL),this.gl.polygonOffset(1,1),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,n.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,n.triangleCount*3,this.gl.UNSIGNED_SHORT,0),this.gl.disable(this.gl.CULL_FACE),this.gl.enable(this.gl.POLYGON_OFFSET_FILL)}};let Z=E;r(Z,"shader",new k(vt,Mt));class Rt extends D{constructor(){super();r(this,"renderStyle");r(this,"model");r(this,"lightType");r(this,"models");r(this,"gouradMaterial");r(this,"phongMaterial");r(this,"outlineMaterial");r(this,"toonMaterial");r(this,"wireframeMaterial");r(this,"pointLight");r(this,"directionalLight");this.renderStyle="Gouraud Shading",this.model="bunny.obj",this.lightType="Point Light",this.models=[],this.gouradMaterial=new Y,this.phongMaterial=new _,this.outlineMaterial=new Z,this.toonMaterial=new K(new O("./assets/toonDiffuse.png"),new O("./assets/toonSpecular.png")),this.wireframeMaterial=new X,this.pointLight=new ct(new c(1,1,1)),this.directionalLight=new ft(new c(1,1,1)),this.createGUI()}createScene(){this.renderer.background.set(.7,.7,.7,1);const t=new ht(2.5);t.cameraOrbitX.setRotationX(-30*Math.PI/180),t.cameraOrbitY.setRotationY(15*Math.PI/180),t.updateCameraOrbit(),this.camera=t;const i=new ut(new c(.3,.3,.3));this.scene.add(i),this.pointLight.position.set(.75,1.1,1),this.scene.add(this.pointLight),this.directionalLight.position.set(.75,1.1,1),this.directionalLight.visible=!1,this.scene.add(this.directionalLight);const s=new mt;s.scale.set(.05,.05,.05),s.position.set(.75,1.1,1),this.scene.add(s);const e=new H;e.color.set(1,1,0),s.material=e,this.gouradMaterial.ambientColor.set(1,.4,.4),this.gouradMaterial.diffuseColor.set(1,.4,.4),this.gouradMaterial.specularColor.set(1,1,1),this.gouradMaterial.shininess=50,this.phongMaterial.ambientColor.set(1,.4,.4),this.phongMaterial.diffuseColor.set(1,.4,.4),this.phongMaterial.specularColor.set(1,1,1),this.phongMaterial.shininess=50,this.toonMaterial.ambientColor.set(1,.4,.4),this.toonMaterial.diffuseColor.set(1,.4,.4),this.toonMaterial.specularColor.set(1,1,1),this.toonMaterial.shininess=50,this.outlineMaterial.thickness=.01,this.outlineMaterial.color=new c(0,0,0),this.outlineMaterial.visible=!1;const n=o=>{const l=new q;l.createFromMesh(o),l.material=this.outlineMaterial,o.add(l)};this.models.push(L.load("./assets/bunny.obj",null,n)),this.models.push(L.load("./assets/cow.obj",null,n)),this.models.push(L.load("./assets/cube.obj",null,n)),this.models.push(L.load("./assets/head.obj",null,n)),this.models.push(L.load("./assets/hippo.obj",null,n)),this.models.push(L.load("./assets/sphere.obj",null,n)),this.models.push(L.load("./assets/teapot.obj",null,n)),this.models.forEach(o=>{o.material=this.gouradMaterial,o.visible=!1,this.scene.add(o)}),this.models[0].visible=!0}update(t){}createGUI(){const t=new st;t.width=200;const i=t.addFolder("Rendering Style");i.open();const s=i.add(this,"renderStyle",["Gouraud Shading","Phong Shading","Toon Shading","Wireframe Shading"]);s.name(""),s.onChange(()=>{this.changeRenderStyle()});const e=t.addFolder("Model");e.open();const n=e.add(this,"model",["bunny.obj","cow.obj","cube.obj","head.obj","hippo.obj","sphere.obj","teapot.obj"]);n.name(""),n.onChange(()=>{this.changeModel()});const o=t.addFolder("Light");o.open();const l=o.add(this,"lightType",["Point Light","Directional Light","Ambient Only"]);l.name(""),l.onChange(()=>{this.changeLight()})}changeRenderStyle(){this.renderStyle=="Gouraud Shading"?(this.models.forEach(t=>{t.material=this.gouradMaterial}),this.outlineMaterial.visible=!1):this.renderStyle=="Phong Shading"?(this.models.forEach(t=>{t.material=this.phongMaterial}),this.outlineMaterial.visible=!1):this.renderStyle=="Toon Shading"?(this.models.forEach(t=>{t.material=this.toonMaterial}),this.outlineMaterial.visible=!0):this.renderStyle=="Wireframe Shading"&&(this.models.forEach(t=>{t.material=this.wireframeMaterial}),this.outlineMaterial.visible=!1)}changeModel(){this.model=="bunny.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[0].visible=!0):this.model=="cow.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[1].visible=!0):this.model=="cube.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[2].visible=!0):this.model=="head.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[3].visible=!0):this.model=="hippo.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[4].visible=!0):this.model=="sphere.obj"?(this.models.forEach(t=>{t.visible=!1}),this.models[5].visible=!0):this.model=="teapot.obj"&&(this.models.forEach(t=>{t.visible=!1}),this.models[6].visible=!0)}changeLight(){this.lightType=="Point Light"?(this.pointLight.visible=!0,this.directionalLight.visible=!1):this.lightType=="Directional Light"?(this.pointLight.visible=!1,this.directionalLight.visible=!0):(this.pointLight.visible=!1,this.directionalLight.visible=!1)}}const Et=new Rt;Et.start();
