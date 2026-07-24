import{r,u as E,s as k,j as i,a as F,h as I}from"./index-DFHhBLer.js";import{R as V,e as O,b as D,M as B,C as j,u as $,_ as G,V as H,c as N,d as W,f as J,a as U,A as q,g as K,P as L,B as Q}from"./BlobShadow-ClZ77MnB.js";const X=()=>parseInt(V.replace(/\D+/g,"")),Y=X();class Z extends J{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${Y>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(t){this.uniforms.pixelRatio.value=t}}const C=e=>e&&e.constructor===Float32Array,ee=e=>[e.r,e.g,e.b],T=e=>e instanceof H||e instanceof N||e instanceof W,_=e=>Array.isArray(e)?e:T(e)?e.toArray():[e,e,e];function y(e,t,m){return r.useMemo(()=>{if(t!==void 0){if(C(t))return t;if(t instanceof j){const s=Array.from({length:e*3},()=>ee(t)).flat();return Float32Array.from(s)}else if(T(t)||Array.isArray(t)){const s=Array.from({length:e*3},()=>_(t)).flat();return Float32Array.from(s)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},m)},[t])}const te=r.forwardRef(({noise:e=1,count:t=100,speed:m=1,opacity:s=1,scale:x=1,size:p,color:n,children:l,...w},P)=>{r.useMemo(()=>O({SparklesImplMaterial:Z}),[]);const o=r.useRef(null),S=D(u=>u.viewport.dpr),g=_(x),M=r.useMemo(()=>Float32Array.from(Array.from({length:t},()=>g.map(B.randFloatSpread)).flat()),[t,...g]),b=y(t,p,Math.random),c=y(t,s),v=y(t,m),z=y(t*3,e),A=y(n===void 0?t*3:t,C(n)?n:new j(n),()=>1);return $(u=>{o.current&&o.current.material&&(o.current.material.time=u.clock.elapsedTime)}),r.useImperativeHandle(P,()=>o.current,[]),r.createElement("points",G({key:`particle-${t}-${JSON.stringify(x)}`},w,{ref:o}),r.createElement("bufferGeometry",null,r.createElement("bufferAttribute",{attach:"attributes-position",args:[M,3]}),r.createElement("bufferAttribute",{attach:"attributes-size",args:[b,1]}),r.createElement("bufferAttribute",{attach:"attributes-opacity",args:[c,1]}),r.createElement("bufferAttribute",{attach:"attributes-speed",args:[v,1]}),r.createElement("bufferAttribute",{attach:"attributes-color",args:[A,3]}),r.createElement("bufferAttribute",{attach:"attributes-noise",args:[z,3]})),l||r.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:S,depthWrite:!1}))});function oe({mode:e="hero",breathScale:t=null,agitation:m=0,expression:s=null,paused:x=!1,onPoke:p,onLost:n}){const l=E(a=>a.garden.creature),w=E(a=>k(a.garden.stage)),[P,o]=r.useState(0),[S,g]=r.useState(!1),[M,b]=r.useState(null),c=r.useRef([]),v=E(a=>a.ui.returnAfterDays);r.useEffect(()=>{if(e==="hero"&&v>=2){const a=setTimeout(()=>b({name:"hop",at:performance.now()}),1200);return()=>clearTimeout(a)}},[e,v]),r.useEffect(()=>{if(e!=="hero")return;let a=!0,d;const h=()=>{d=setTimeout(()=>{if(!a)return;const f=new Date().getHours(),R=f>=20||f<6?["yawn","yawn","look","hop"]:["look","hop","look","yawn"];b({name:R[Math.floor(Math.random()*R.length)],at:performance.now()}),h()},14e3+Math.random()*12e3)};return h(),()=>{a=!1,clearTimeout(d)}},[e]);const z=a=>{var h;(h=a==null?void 0:a.stopPropagation)==null||h.call(a),o(f=>f+1),F.giggle(),I.tick();const d=performance.now();c.current=[...c.current.filter(f=>d-f<2500),d],c.current.length>=5&&(c.current=[],g(!0),F.whoosh(),setTimeout(()=>g(!1),2200)),p==null||p()},A=l.mood==="glowing",u={hero:{s:.68,y:-.34},breath:{s:.88,y:-.16},settle:{s:1,y:0},den:{s:.72,y:-.24}}[e]||{s:.8,y:-.2};return i.jsx(U,{demand:e==="den",paused:x,onLost:n,children:i.jsxs("group",{scale:u.s,position:[0,u.y,0],children:[i.jsx("sprite",{position:[0,.15,-.7],scale:[3.4,3.4,1],children:i.jsx("spriteMaterial",{map:K(A?"#ffe2b8":"#ffcfae"),transparent:!0,opacity:A?.55:.34,depthWrite:!1,blending:q})}),i.jsx(L,{stage:w,growth:l.growth,mood:l.mood,breathScale:t,agitation:m,expression:s,gesture:M,pokeSignal:P,dizzy:S,onPointerDown:z}),i.jsx(Q,{}),e!=="settle"&&i.jsx(te,{count:e==="hero"?24:12,scale:[3.6,2.6,2],size:2.4,speed:.35,opacity:.6,color:"#FFE1A8"})]})})}export{oe as default};
