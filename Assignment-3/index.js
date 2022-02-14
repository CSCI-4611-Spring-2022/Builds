var E=Object.defineProperty;var q=(l,t,r)=>t in l?E(l,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[t]=r;var a=(l,t,r)=>(q(l,typeof t!="symbol"?t+"":t,r),r);import{W as z,S as N,P as B,C,V as F,M as T,a as U,b as D,c as A,G as W,d as G,e as k,T as P,L as R,F as M,f as L,g as y,h as u,i as f,j as H,D as K}from"./vendor.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const h of e.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}};O();class Q{constructor(t=60,r=1.333,i=1,s=1e3){a(this,"aspectRatio");a(this,"fov");a(this,"znear");a(this,"zfar");a(this,"renderer");a(this,"scene");a(this,"camera");a(this,"clock");this.fov=t,this.aspectRatio=r,this.znear=i,this.zfar=s,this.renderer=new z,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.resize(),window.addEventListener("resize",()=>{this.resize()},!1),window.addEventListener("mousedown",e=>{this.onMouseDown(e)}),window.addEventListener("mouseup",e=>{this.onMouseUp(e)}),window.addEventListener("mousemove",e=>{this.onMouseMove(e)}),window.addEventListener("keydown",e=>{this.onKeyDown(e)}),window.addEventListener("keyup",e=>{this.onKeyUp(e)}),this.scene=new N,this.camera=new B(this.fov,this.aspectRatio,this.znear,this.zfar),this.clock=new C}start(){this.createScene(),this.mainLoop()}mainLoop(){this.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(()=>this.mainLoop())}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight);var t=new F;this.renderer.getViewport(t);var r=window.innerWidth/window.innerHeight;this.aspectRatio>r?this.renderer.setViewport(0,(window.innerHeight-window.innerWidth/this.aspectRatio)/2,window.innerWidth,window.innerWidth/this.aspectRatio):this.renderer.setViewport((window.innerWidth-window.innerHeight*this.aspectRatio)/2,0,window.innerHeight*this.aspectRatio,window.innerHeight)}onMouseDown(t){}onMouseUp(t){}onMouseMove(t){}onKeyDown(t){}onKeyUp(t){}}class x extends T{constructor(t,r,i,s){super();a(this,"startTime");a(this,"magnitude");a(this,"mapPosition");a(this,"globePosition");this.startTime=s,this.magnitude=i,this.mapPosition=t,this.globePosition=r,this.geometry=new U(1);var e=new D;e.color=new A(1,1-i,0),this.material=e,this.scale.set(.1,.1,.1),this.position.copy(this.mapPosition)}morphPosition(t){this.position.lerpVectors(this.mapPosition,this.globePosition,t)}}class _ extends W{constructor(){super();a(this,"earthMesh");a(this,"earthMaterial");a(this,"debugMaterial");a(this,"mapVertices");a(this,"mapNormals");a(this,"globeVertices");a(this,"globeNormals");a(this,"globeMode");a(this,"alpha");a(this,"axialTilt");a(this,"earthRotation");a(this,"earthRotationBeforeMorph");this.earthMesh=new T,this.earthMaterial=new D,this.debugMaterial=new G,this.mapVertices=[],this.mapNormals=[],this.globeVertices=[],this.globeNormals=[],this.globeMode=!1,this.alpha=0,this.axialTilt=0,this.earthRotation=new k,this.earthRotationBeforeMorph=new k}initialize(){this.earthMaterial.map=new P().load("./data/earth-2k.png"),this.earthMaterial.map.minFilter=R,this.earthMaterial.map.magFilter=R,this.earthMesh.material=this.earthMaterial,this.debugMaterial.wireframe=!0;const t=200;for(let n=0;n<=t;n++)for(let o=0;o<=t;o++){var r=180*n/t-90,i=360*o/t-180,s=this.convertLatLongToPlane(r,i);this.mapVertices.push(s.x,s.y,s.z),this.mapNormals.push(0,0,1);var e=this.convertLatLongToSphere(r,i);this.globeVertices.push(e.x,e.y,e.z),e.normalize(),this.globeNormals.push(e.x,e.y,e.z)}this.earthMesh.geometry.setAttribute("position",new M(this.mapVertices,3)),this.earthMesh.geometry.setAttribute("normal",new M(this.mapNormals,3));var h=[];for(let n=0;n<t;n++)for(let o=0;o<t;o++)h.push((t+1)*n+o),h.push((t+1)*n+o+1),h.push((t+1)*(n+1)+o),h.push((t+1)*n+o+1),h.push((t+1)*(n+1)+(o+1)),h.push((t+1)*(n+1)+o);this.earthMesh.geometry.setIndex(h);var d=[];for(let n=0;n<=t;n++)for(let o=0;o<=t;o++)d.push(o/t),d.push(n/t);this.earthMesh.geometry.setAttribute("uv",new M(d,2));var p=new L;p.load("./data/height-2k.txt",n=>{var o=[],v=0,b=0;n.toString().split(`
`).forEach(c=>{c.split(" ").forEach(g=>{o.push(parseInt(g))}),b++}),v=o.length/b;for(let c=0;c<=t;c++)for(let g=0;g<=t;g++){var I=Math.floor(g/t*(v-1)),S=Math.floor((1-c/t)*(b-1)),V=o[S*v+I]/255-.5,m=(c*(t+1)+g)*3,w=new y(this.globeNormals[m],this.globeNormals[m+1],this.globeNormals[m+2]);w.multiplyScalar(V*.1),this.globeVertices[m]+=w.x,this.globeVertices[m+1]+=w.y,this.globeVertices[m+2]+=w.z}}),this.add(this.earthMesh)}update(t){const i=15*Math.PI/180,s=-23.4*Math.PI/180;this.globeMode?(this.alpha<1&&(this.alpha=Math.min(this.alpha+1*t,1),this.morphMesh(),this.axialTilt=u.lerp(0,s,this.alpha)),this.earthRotation.y+=i*t,this.earthRotation.x>Math.PI?this.earthRotation.x-=Math.PI*2:this.earthRotation.x<-Math.PI&&(this.earthRotation.x+=Math.PI*2),this.earthRotation.y>Math.PI?this.earthRotation.y-=Math.PI*2:this.earthRotation.y<-Math.PI&&(this.earthRotation.y+=Math.PI*2),this.earthRotationBeforeMorph.copy(this.earthRotation)):this.alpha>0&&(this.alpha=Math.max(this.alpha-1*t,0),this.morphMesh(),this.axialTilt=u.lerp(0,s,this.alpha),this.earthRotation.x=u.lerp(0,this.earthRotationBeforeMorph.x,this.alpha),this.earthRotation.y=u.lerp(0,this.earthRotationBeforeMorph.y,this.alpha));var e=new f().makeRotationZ(this.axialTilt),h=new f().makeRotationY(this.earthRotation.y),d=new f().makeRotationX(this.earthRotation.x),p=new f;p.multiply(d),p.multiply(e),p.multiply(h),this.setRotationFromMatrix(p)}morphMesh(){var t=[],r=[];for(let i=0;i<this.mapVertices.length;i++)t.push(u.lerp(this.mapVertices[i],this.globeVertices[i],this.alpha)),r.push(u.lerp(this.mapNormals[i],this.globeNormals[i],this.alpha));this.earthMesh.geometry.setAttribute("position",new M(t,3)),this.earthMesh.geometry.setAttribute("normal",new M(r,3)),this.rotation.z=u.lerp(0,-.4,this.alpha)}createEarthquake(t,r){var i=this.convertLatLongToPlane(t.latitude,t.longitude),s=this.convertLatLongToSphere(t.latitude,t.longitude),e=new x(i,s,r,t.date.getTime());this.add(e)}animateEarthquakes(t){this.children.forEach(i=>{if(i instanceof x){var s=u.clamp(Math.abs(t/1e3-i.startTime/1e3)/29030400,0,1);if(s<1){i.position.lerpVectors(i.mapPosition,i.globePosition,this.alpha);var e=.1+.9*i.magnitude;e*=1-s,e*=.1,i.scale.set(e,e,e)}else this.remove(i)}})}reset(){this.children.forEach(t=>{t instanceof x&&this.remove(t)})}toggleDebugMode(t){t?this.earthMesh.material=this.debugMaterial:this.earthMesh.material=this.earthMaterial}convertLatLongToSphere(t,r){var i=t*Math.PI/180,s=r*Math.PI/180;return new y(Math.sin(s)*Math.cos(i),Math.sin(i),Math.cos(s)*Math.cos(i))}convertLatLongToPlane(t,r){return new y(r*Math.PI/180,t*Math.PI/180,0)}}class Y{constructor(t){a(this,"date");a(this,"longitude");a(this,"latitude");a(this,"magnitude");this.date=new Date,this.date.setUTCFullYear(parseInt(t.substring(12,16))),this.date.setUTCMonth(parseInt(t.substring(17,19))),this.date.setUTCDate(parseInt(t.substring(20,22))),this.date.setUTCHours(parseInt(t.substring(24,26))),this.date.setUTCMinutes(parseInt(t.substring(27,29))),this.date.setUTCSeconds(parseFloat(t.substring(30,35))),this.longitude=parseFloat(t.substring(44,52)),this.latitude=parseFloat(t.substring(37,44)),this.magnitude=parseFloat(t.substring(66,70))}}class j{constructor(t){a(this,"earthquakes");a(this,"loaded");a(this,"maxMagnitude");a(this,"minMagnitude");a(this,"nextIndex");this.earthquakes=[],this.loaded=!1,this.maxMagnitude=0,this.minMagnitude=1/0,this.nextIndex=0;var r=new L;r.load(t,i=>{var s=i.toString().split(`
`);s.forEach(e=>{if(e.length>30){var h=new Y(e);this.earthquakes.push(h),h.magnitude>this.maxMagnitude?this.maxMagnitude=h.magnitude:h.magnitude<this.minMagnitude&&(this.minMagnitude=h.magnitude)}}),this.loaded=!0})}reset(){this.nextIndex=0}getNextQuake(t){for(var r=t.getTime();this.nextIndex<this.earthquakes.length;)return this.earthquakes[this.nextIndex].date.getTime()<r?(this.nextIndex++,this.earthquakes[this.nextIndex-1]):null;return null}getMaxTime(){return this.earthquakes[this.earthquakes.length-1].date.getTime()}getMinTime(){return this.earthquakes[0].date.getTime()}}class X extends Q{constructor(){super(60,1920/1080,.1,50);a(this,"earth");a(this,"gui");a(this,"earthquakeDB");a(this,"currentTime");a(this,"earthAlpha");a(this,"mouseDrag");a(this,"mouseVector");a(this,"date");a(this,"viewMode");a(this,"playbackSpeed");a(this,"debugMode");this.gui=new H,this.earth=new _,this.earthquakeDB=new j("./data/earthquakes.txt"),this.currentTime=1/0,this.earthAlpha=0,this.mouseDrag=!1,this.mouseVector=new k,this.date="",this.viewMode="Map",this.playbackSpeed=.5,this.debugMode=!1}createScene(){this.camera.position.set(0,0,3.25),this.camera.lookAt(0,0,0),this.camera.up.set(0,1,0);var t=new K("white",1.5);t.position.set(10,10,15),this.scene.add(t),this.scene.background=new P().load("./data/stars.png"),this.earth.initialize(),this.scene.add(this.earth);var r=this.gui.addFolder("Earthquake Controls"),i=r.add(this,"date");i.name("Current Date"),i.listen();var s=r.add(this,"viewMode",{Map:"Map",Globe:"Globe"});s.name("View Mode"),s.onChange(d=>{this.earth.globeMode=d=="Globe"});var e=r.add(this,"playbackSpeed",0,1);e.name("Playback Speed");var h=r.add(this,"debugMode");h.name("Debug Mode"),h.onChange(d=>{this.toggleDebugMode(d)}),this.gui.width=300,r.open()}update(t){if(!this.earthquakeDB.loaded)return;const r=3e10;this.currentTime+=r*this.playbackSpeed*t,this.currentTime>this.earthquakeDB.getMaxTime()&&(this.currentTime=this.earthquakeDB.getMinTime(),this.earthquakeDB.reset(),this.earth.reset());var i=new Date;i.setTime(this.currentTime),this.date=i.getUTCMonth()+"/"+i.getUTCDate()+"/"+i.getUTCFullYear();for(var s=this.earthquakeDB.getNextQuake(i);s;){var e=(s.magnitude-this.earthquakeDB.minMagnitude)/(this.earthquakeDB.maxMagnitude-this.earthquakeDB.minMagnitude);this.earth.createEarthquake(s,e),s=this.earthquakeDB.getNextQuake(i)}this.earth.update(t),this.earth.animateEarthquakes(this.currentTime)}toggleDebugMode(t){this.earth.toggleDebugMode(t)}onMouseDown(t){this.mouseDrag=!0}onMouseUp(t){this.mouseDrag=!1}onMouseMove(t){this.mouseDrag&&this.earth.globeMode&&(this.earth.earthRotation.x+=(t.y-this.mouseVector.y)*.5*Math.PI/180),this.mouseVector.set(t.x,t.y)}}var Z=new X;Z.start();
