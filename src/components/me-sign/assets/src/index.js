/* eslint-disable */
// document.write("<script language=javascript src=\"libs/zlib/deflate.min.js\" charset=\"utf-8\"></script>");
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {'use strict';var n=void 0,w=!0,aa=this;function ba(f,d){var c=f.split("."),e=aa;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)!c.length&&d!==n?e[b]=d:e=e[b]?e[b]:e[b]={}};var C="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function K(f,d){this.index="number"===typeof d?d:0;this.e=0;this.buffer=f instanceof(C?Uint8Array:Array)?f:new (C?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&ca(this)}function ca(f){var d=f.buffer,c,e=d.length,b=new (C?Uint8Array:Array)(e<<1);if(C)b.set(d);else for(c=0;c<e;++c)b[c]=d[c];return f.buffer=b}
K.prototype.b=function(f,d,c){var e=this.buffer,b=this.index,a=this.e,g=e[b],m;c&&1<d&&(f=8<d?(L[f&255]<<24|L[f>>>8&255]<<16|L[f>>>16&255]<<8|L[f>>>24&255])>>32-d:L[f]>>8-d);if(8>d+a)g=g<<d|f,a+=d;else for(m=0;m<d;++m)g=g<<1|f>>d-m-1&1,8===++a&&(a=0,e[b++]=L[g],g=0,b===e.length&&(e=ca(this)));e[b]=g;this.buffer=e;this.e=a;this.index=b};K.prototype.finish=function(){var f=this.buffer,d=this.index,c;0<this.e&&(f[d]<<=8-this.e,f[d]=L[f[d]],d++);C?c=f.subarray(0,d):(f.length=d,c=f);return c};
var da=new (C?Uint8Array:Array)(256),M;for(M=0;256>M;++M){for(var N=M,S=N,ea=7,N=N>>>1;N;N>>>=1)S<<=1,S|=N&1,--ea;da[M]=(S<<ea&255)>>>0}var L=da;function ia(f){this.buffer=new (C?Uint16Array:Array)(2*f);this.length=0}ia.prototype.getParent=function(f){return 2*((f-2)/4|0)};ia.prototype.push=function(f,d){var c,e,b=this.buffer,a;c=this.length;b[this.length++]=d;for(b[this.length++]=f;0<c;)if(e=this.getParent(c),b[c]>b[e])a=b[c],b[c]=b[e],b[e]=a,a=b[c+1],b[c+1]=b[e+1],b[e+1]=a,c=e;else break;return this.length};
ia.prototype.pop=function(){var f,d,c=this.buffer,e,b,a;d=c[0];f=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(a=0;;){b=2*a+2;if(b>=this.length)break;b+2<this.length&&c[b+2]>c[b]&&(b+=2);if(c[b]>c[a])e=c[a],c[a]=c[b],c[b]=e,e=c[a+1],c[a+1]=c[b+1],c[b+1]=e;else break;a=b}return{index:f,value:d,length:this.length}};function ka(f,d){this.d=la;this.i=0;this.input=C&&f instanceof Array?new Uint8Array(f):f;this.c=0;d&&(d.lazy&&(this.i=d.lazy),"number"===typeof d.compressionType&&(this.d=d.compressionType),d.outputBuffer&&(this.a=C&&d.outputBuffer instanceof Array?new Uint8Array(d.outputBuffer):d.outputBuffer),"number"===typeof d.outputIndex&&(this.c=d.outputIndex));this.a||(this.a=new (C?Uint8Array:Array)(32768))}var la=2,na={NONE:0,h:1,g:la,n:3},T=[],U;
for(U=0;288>U;U++)switch(w){case 143>=U:T.push([U+48,8]);break;case 255>=U:T.push([U-144+400,9]);break;case 279>=U:T.push([U-256+0,7]);break;case 287>=U:T.push([U-280+192,8]);break;default:throw"invalid literal: "+U;}
ka.prototype.f=function(){var f,d,c,e,b=this.input;switch(this.d){case 0:c=0;for(e=b.length;c<e;){d=C?b.subarray(c,c+65535):b.slice(c,c+65535);c+=d.length;var a=d,g=c===e,m=n,k=n,p=n,t=n,u=n,l=this.a,h=this.c;if(C){for(l=new Uint8Array(this.a.buffer);l.length<=h+a.length+5;)l=new Uint8Array(l.length<<1);l.set(this.a)}m=g?1:0;l[h++]=m|0;k=a.length;p=~k+65536&65535;l[h++]=k&255;l[h++]=k>>>8&255;l[h++]=p&255;l[h++]=p>>>8&255;if(C)l.set(a,h),h+=a.length,l=l.subarray(0,h);else{t=0;for(u=a.length;t<u;++t)l[h++]=
a[t];l.length=h}this.c=h;this.a=l}break;case 1:var q=new K(C?new Uint8Array(this.a.buffer):this.a,this.c);q.b(1,1,w);q.b(1,2,w);var s=oa(this,b),x,fa,z;x=0;for(fa=s.length;x<fa;x++)if(z=s[x],K.prototype.b.apply(q,T[z]),256<z)q.b(s[++x],s[++x],w),q.b(s[++x],5),q.b(s[++x],s[++x],w);else if(256===z)break;this.a=q.finish();this.c=this.a.length;break;case la:var B=new K(C?new Uint8Array(this.a.buffer):this.a,this.c),ta,J,O,P,Q,La=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X,ua,Y,va,ga,ja=Array(19),
wa,R,ha,y,xa;ta=la;B.b(1,1,w);B.b(ta,2,w);J=oa(this,b);X=pa(this.m,15);ua=qa(X);Y=pa(this.l,7);va=qa(Y);for(O=286;257<O&&0===X[O-1];O--);for(P=30;1<P&&0===Y[P-1];P--);var ya=O,za=P,F=new (C?Uint32Array:Array)(ya+za),r,G,v,Z,E=new (C?Uint32Array:Array)(316),D,A,H=new (C?Uint8Array:Array)(19);for(r=G=0;r<ya;r++)F[G++]=X[r];for(r=0;r<za;r++)F[G++]=Y[r];if(!C){r=0;for(Z=H.length;r<Z;++r)H[r]=0}r=D=0;for(Z=F.length;r<Z;r+=G){for(G=1;r+G<Z&&F[r+G]===F[r];++G);v=G;if(0===F[r])if(3>v)for(;0<v--;)E[D++]=0,
H[0]++;else for(;0<v;)A=138>v?v:138,A>v-3&&A<v&&(A=v-3),10>=A?(E[D++]=17,E[D++]=A-3,H[17]++):(E[D++]=18,E[D++]=A-11,H[18]++),v-=A;else if(E[D++]=F[r],H[F[r]]++,v--,3>v)for(;0<v--;)E[D++]=F[r],H[F[r]]++;else for(;0<v;)A=6>v?v:6,A>v-3&&A<v&&(A=v-3),E[D++]=16,E[D++]=A-3,H[16]++,v-=A}f=C?E.subarray(0,D):E.slice(0,D);ga=pa(H,7);for(y=0;19>y;y++)ja[y]=ga[La[y]];for(Q=19;4<Q&&0===ja[Q-1];Q--);wa=qa(ga);B.b(O-257,5,w);B.b(P-1,5,w);B.b(Q-4,4,w);for(y=0;y<Q;y++)B.b(ja[y],3,w);y=0;for(xa=f.length;y<xa;y++)if(R=
f[y],B.b(wa[R],ga[R],w),16<=R){y++;switch(R){case 16:ha=2;break;case 17:ha=3;break;case 18:ha=7;break;default:throw"invalid code: "+R;}B.b(f[y],ha,w)}var Aa=[ua,X],Ba=[va,Y],I,Ca,$,ma,Da,Ea,Fa,Ga;Da=Aa[0];Ea=Aa[1];Fa=Ba[0];Ga=Ba[1];I=0;for(Ca=J.length;I<Ca;++I)if($=J[I],B.b(Da[$],Ea[$],w),256<$)B.b(J[++I],J[++I],w),ma=J[++I],B.b(Fa[ma],Ga[ma],w),B.b(J[++I],J[++I],w);else if(256===$)break;this.a=B.finish();this.c=this.a.length;break;default:throw"invalid compression type";}return this.a};
function ra(f,d){this.length=f;this.k=d}
var sa=function(){function f(b){switch(w){case 3===b:return[257,b-3,0];case 4===b:return[258,b-4,0];case 5===b:return[259,b-5,0];case 6===b:return[260,b-6,0];case 7===b:return[261,b-7,0];case 8===b:return[262,b-8,0];case 9===b:return[263,b-9,0];case 10===b:return[264,b-10,0];case 12>=b:return[265,b-11,1];case 14>=b:return[266,b-13,1];case 16>=b:return[267,b-15,1];case 18>=b:return[268,b-17,1];case 22>=b:return[269,b-19,2];case 26>=b:return[270,b-23,2];case 30>=b:return[271,b-27,2];case 34>=b:return[272,
b-31,2];case 42>=b:return[273,b-35,3];case 50>=b:return[274,b-43,3];case 58>=b:return[275,b-51,3];case 66>=b:return[276,b-59,3];case 82>=b:return[277,b-67,4];case 98>=b:return[278,b-83,4];case 114>=b:return[279,b-99,4];case 130>=b:return[280,b-115,4];case 162>=b:return[281,b-131,5];case 194>=b:return[282,b-163,5];case 226>=b:return[283,b-195,5];case 257>=b:return[284,b-227,5];case 258===b:return[285,b-258,0];default:throw"invalid length: "+b;}}var d=[],c,e;for(c=3;258>=c;c++)e=f(c),d[c]=e[2]<<24|
e[1]<<16|e[0];return d}(),Ha=C?new Uint32Array(sa):sa;
function oa(f,d){function c(b,c){var a=b.k,d=[],e=0,f;f=Ha[b.length];d[e++]=f&65535;d[e++]=f>>16&255;d[e++]=f>>24;var g;switch(w){case 1===a:g=[0,a-1,0];break;case 2===a:g=[1,a-2,0];break;case 3===a:g=[2,a-3,0];break;case 4===a:g=[3,a-4,0];break;case 6>=a:g=[4,a-5,1];break;case 8>=a:g=[5,a-7,1];break;case 12>=a:g=[6,a-9,2];break;case 16>=a:g=[7,a-13,2];break;case 24>=a:g=[8,a-17,3];break;case 32>=a:g=[9,a-25,3];break;case 48>=a:g=[10,a-33,4];break;case 64>=a:g=[11,a-49,4];break;case 96>=a:g=[12,a-
65,5];break;case 128>=a:g=[13,a-97,5];break;case 192>=a:g=[14,a-129,6];break;case 256>=a:g=[15,a-193,6];break;case 384>=a:g=[16,a-257,7];break;case 512>=a:g=[17,a-385,7];break;case 768>=a:g=[18,a-513,8];break;case 1024>=a:g=[19,a-769,8];break;case 1536>=a:g=[20,a-1025,9];break;case 2048>=a:g=[21,a-1537,9];break;case 3072>=a:g=[22,a-2049,10];break;case 4096>=a:g=[23,a-3073,10];break;case 6144>=a:g=[24,a-4097,11];break;case 8192>=a:g=[25,a-6145,11];break;case 12288>=a:g=[26,a-8193,12];break;case 16384>=
a:g=[27,a-12289,12];break;case 24576>=a:g=[28,a-16385,13];break;case 32768>=a:g=[29,a-24577,13];break;default:throw"invalid distance";}f=g;d[e++]=f[0];d[e++]=f[1];d[e++]=f[2];var k,m;k=0;for(m=d.length;k<m;++k)l[h++]=d[k];s[d[0]]++;x[d[3]]++;q=b.length+c-1;u=null}var e,b,a,g,m,k={},p,t,u,l=C?new Uint16Array(2*d.length):[],h=0,q=0,s=new (C?Uint32Array:Array)(286),x=new (C?Uint32Array:Array)(30),fa=f.i,z;if(!C){for(a=0;285>=a;)s[a++]=0;for(a=0;29>=a;)x[a++]=0}s[256]=1;e=0;for(b=d.length;e<b;++e){a=
m=0;for(g=3;a<g&&e+a!==b;++a)m=m<<8|d[e+a];k[m]===n&&(k[m]=[]);p=k[m];if(!(0<q--)){for(;0<p.length&&32768<e-p[0];)p.shift();if(e+3>=b){u&&c(u,-1);a=0;for(g=b-e;a<g;++a)z=d[e+a],l[h++]=z,++s[z];break}0<p.length?(t=Ia(d,e,p),u?u.length<t.length?(z=d[e-1],l[h++]=z,++s[z],c(t,0)):c(u,-1):t.length<fa?u=t:c(t,0)):u?c(u,-1):(z=d[e],l[h++]=z,++s[z])}p.push(e)}l[h++]=256;s[256]++;f.m=s;f.l=x;return C?l.subarray(0,h):l}
function Ia(f,d,c){var e,b,a=0,g,m,k,p,t=f.length;m=0;p=c.length;a:for(;m<p;m++){e=c[p-m-1];g=3;if(3<a){for(k=a;3<k;k--)if(f[e+k-1]!==f[d+k-1])continue a;g=a}for(;258>g&&d+g<t&&f[e+g]===f[d+g];)++g;g>a&&(b=e,a=g);if(258===g)break}return new ra(a,d-b)}
function pa(f,d){var c=f.length,e=new ia(572),b=new (C?Uint8Array:Array)(c),a,g,m,k,p;if(!C)for(k=0;k<c;k++)b[k]=0;for(k=0;k<c;++k)0<f[k]&&e.push(k,f[k]);a=Array(e.length/2);g=new (C?Uint32Array:Array)(e.length/2);if(1===a.length)return b[e.pop().index]=1,b;k=0;for(p=e.length/2;k<p;++k)a[k]=e.pop(),g[k]=a[k].value;m=Ja(g,g.length,d);k=0;for(p=a.length;k<p;++k)b[a[k].index]=m[k];return b}
function Ja(f,d,c){function e(a){var b=k[a][p[a]];b===d?(e(a+1),e(a+1)):--g[b];++p[a]}var b=new (C?Uint16Array:Array)(c),a=new (C?Uint8Array:Array)(c),g=new (C?Uint8Array:Array)(d),m=Array(c),k=Array(c),p=Array(c),t=(1<<c)-d,u=1<<c-1,l,h,q,s,x;b[c-1]=d;for(h=0;h<c;++h)t<u?a[h]=0:(a[h]=1,t-=u),t<<=1,b[c-2-h]=(b[c-1-h]/2|0)+d;b[0]=a[0];m[0]=Array(b[0]);k[0]=Array(b[0]);for(h=1;h<c;++h)b[h]>2*b[h-1]+a[h]&&(b[h]=2*b[h-1]+a[h]),m[h]=Array(b[h]),k[h]=Array(b[h]);for(l=0;l<d;++l)g[l]=c;for(q=0;q<b[c-1];++q)m[c-
1][q]=f[q],k[c-1][q]=q;for(l=0;l<c;++l)p[l]=0;1===a[c-1]&&(--g[0],++p[c-1]);for(h=c-2;0<=h;--h){s=l=0;x=p[h+1];for(q=0;q<b[h];q++)s=m[h+1][x]+m[h+1][x+1],s>f[l]?(m[h][q]=s,k[h][q]=d,x+=2):(m[h][q]=f[l],k[h][q]=l,++l);p[h]=0;1===a[h]&&e(h)}return g}
function qa(f){var d=new (C?Uint16Array:Array)(f.length),c=[],e=[],b=0,a,g,m,k;a=0;for(g=f.length;a<g;a++)c[f[a]]=(c[f[a]]|0)+1;a=1;for(g=16;a<=g;a++)e[a]=b,b+=c[a]|0,b<<=1;a=0;for(g=f.length;a<g;a++){b=e[f[a]];e[f[a]]+=1;m=d[a]=0;for(k=f[a];m<k;m++)d[a]=d[a]<<1|b&1,b>>>=1}return d};function Ka(f,d){this.input=f;this.a=new (C?Uint8Array:Array)(32768);this.d=V.g;var c={},e;if((d||!(d={}))&&"number"===typeof d.compressionType)this.d=d.compressionType;for(e in d)c[e]=d[e];c.outputBuffer=this.a;this.j=new ka(this.input,c)}var V=na;
Ka.prototype.f=function(){var f,d,c,e,b,a,g=0;a=this.a;switch(8){case 8:f=Math.LOG2E*Math.log(32768)-8;break;default:throw Error("invalid compression method");}d=f<<4|8;a[g++]=d;switch(8){case 8:switch(this.d){case V.NONE:e=0;break;case V.h:e=1;break;case V.g:e=2;break;default:throw Error("unsupported compression type");}break;default:throw Error("invalid compression method");}c=e<<6|0;a[g++]=c|31-(256*d+c)%31;var m=this.input;if("string"===typeof m){var k=m.split(""),p,t;p=0;for(t=k.length;p<t;p++)k[p]=
(k[p].charCodeAt(0)&255)>>>0;m=k}for(var u=1,l=0,h=m.length,q,s=0;0<h;){q=1024<h?1024:h;h-=q;do u+=m[s++],l+=u;while(--q);u%=65521;l%=65521}b=(l<<16|u)>>>0;this.j.c=g;a=this.j.f();g=a.length;C&&(a=new Uint8Array(a.buffer),a.length<=g+4&&(this.a=new Uint8Array(a.length+4),this.a.set(a),a=this.a),a=a.subarray(0,g+4));a[g++]=b>>24&255;a[g++]=b>>16&255;a[g++]=b>>8&255;a[g++]=b&255;return a};ba("Zlib.Deflate",Ka);ba("Zlib.Deflate.compress",function(f,d){return(new Ka(f,d)).f()});ba("Zlib.Deflate.prototype.compress",Ka.prototype.f);var Ma={NONE:V.NONE,FIXED:V.h,DYNAMIC:V.g},Na,Oa,W,Pa;if(Object.keys)Na=Object.keys(Ma);else for(Oa in Na=[],W=0,Ma)Na[W++]=Oa;W=0;for(Pa=Na.length;W<Pa;++W)Oa=Na[W],ba("Zlib.Deflate.CompressionType."+Oa,Ma[Oa]);}).call(window); //@ sourceMappingURL=deflate.min.js.map

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/components/core-min.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++)b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)b[c+e>>>2]=d[e>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<
32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return new j.init(g,c)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,
d)).finalize(b)}}});var u=k.algo={};return k}(Math);

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/rollups/sha1.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
f)).finalize(b)}}});var s=p.algo={};return p}(Math);
(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/rollups/tripledes.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,l){var d={},n=d.lib={},p=function(){},s=n.Base={extend:function(a){p.prototype=this;var c=new p;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=n.WordArray=s.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=l?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,m=a.words,f=this.sigBytes;a=a.sigBytes;this.clamp();if(f%4)for(var t=0;t<a;t++)c[f+t>>>2]|=(m[t>>>2]>>>24-8*(t%4)&255)<<24-8*((f+t)%4);else if(65535<m.length)for(t=0;t<a;t+=4)c[f+t>>>2]=m[t>>>2];else c.push.apply(c,m);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=s.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],m=0;m<a;m+=4)c.push(4294967296*u.random()|0);return new q.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var m=[],f=0;f<a;f++){var t=c[f>>>2]>>>24-8*(f%4)&255;m.push((t>>>4).toString(16));m.push((t&15).toString(16))}return m.join("")},parse:function(a){for(var c=a.length,m=[],f=0;f<c;f+=2)m[f>>>3]|=parseInt(a.substr(f,
2),16)<<24-4*(f%8);return new q.init(m,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var m=[],f=0;f<a;f++)m.push(String.fromCharCode(c[f>>>2]>>>24-8*(f%4)&255));return m.join("")},parse:function(a){for(var c=a.length,m=[],f=0;f<c;f++)m[f>>>2]|=(a.charCodeAt(f)&255)<<24-8*(f%4);return new q.init(m,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
r=n.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,m=c.words,f=c.sigBytes,t=this.blockSize,b=f/(4*t),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*t;f=u.min(4*a,f);if(a){for(var e=0;e<a;e+=t)this._doProcessBlock(m,e);e=m.splice(0,a);c.sigBytes-=f}return new q.init(e,f)},clone:function(){var a=s.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});n.Hasher=r.extend({cfg:s.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){r.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,m){return(new a.init(m)).finalize(c)}},_createHmacHelper:function(a){return function(c,m){return(new e.HMAC.init(a,
m)).finalize(c)}}});var e=d.algo={};return d}(Math);
(function(){var u=CryptoJS,l=u.lib.WordArray;u.enc.Base64={stringify:function(d){var n=d.words,l=d.sigBytes,s=this._map;d.clamp();d=[];for(var q=0;q<l;q+=3)for(var w=(n[q>>>2]>>>24-8*(q%4)&255)<<16|(n[q+1>>>2]>>>24-8*((q+1)%4)&255)<<8|n[q+2>>>2]>>>24-8*((q+2)%4)&255,v=0;4>v&&q+0.75*v<l;v++)d.push(s.charAt(w>>>6*(3-v)&63));if(n=s.charAt(64))for(;d.length%4;)d.push(n);return d.join("")},parse:function(d){var n=d.length,p=this._map,s=p.charAt(64);s&&(s=d.indexOf(s),-1!=s&&(n=s));for(var s=[],q=0,w=0;w<
n;w++)if(w%4){var v=p.indexOf(d.charAt(w-1))<<2*(w%4),b=p.indexOf(d.charAt(w))>>>6-2*(w%4);s[q>>>2]|=(v|b)<<24-8*(q%4);q++}return l.create(s,q)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function l(b,e,a,c,m,f,t){b=b+(e&a|~e&c)+m+t;return(b<<f|b>>>32-f)+e}function d(b,e,a,c,m,f,t){b=b+(e&c|a&~c)+m+t;return(b<<f|b>>>32-f)+e}function n(b,e,a,c,m,f,t){b=b+(e^a^c)+m+t;return(b<<f|b>>>32-f)+e}function p(b,e,a,c,m,f,t){b=b+(a^(e|~c))+m+t;return(b<<f|b>>>32-f)+e}for(var s=CryptoJS,q=s.lib,w=q.WordArray,v=q.Hasher,q=s.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;q=q.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(r,e){for(var a=0;16>a;a++){var c=e+a,m=r[c];r[c]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360}var a=this._hash.words,c=r[e+0],m=r[e+1],f=r[e+2],t=r[e+3],y=r[e+4],q=r[e+5],s=r[e+6],w=r[e+7],v=r[e+8],u=r[e+9],x=r[e+10],z=r[e+11],A=r[e+12],B=r[e+13],C=r[e+14],D=r[e+15],g=a[0],h=a[1],j=a[2],k=a[3],g=l(g,h,j,k,c,7,b[0]),k=l(k,g,h,j,m,12,b[1]),j=l(j,k,g,h,f,17,b[2]),h=l(h,j,k,g,t,22,b[3]),g=l(g,h,j,k,y,7,b[4]),k=l(k,g,h,j,q,12,b[5]),j=l(j,k,g,h,s,17,b[6]),h=l(h,j,k,g,w,22,b[7]),
g=l(g,h,j,k,v,7,b[8]),k=l(k,g,h,j,u,12,b[9]),j=l(j,k,g,h,x,17,b[10]),h=l(h,j,k,g,z,22,b[11]),g=l(g,h,j,k,A,7,b[12]),k=l(k,g,h,j,B,12,b[13]),j=l(j,k,g,h,C,17,b[14]),h=l(h,j,k,g,D,22,b[15]),g=d(g,h,j,k,m,5,b[16]),k=d(k,g,h,j,s,9,b[17]),j=d(j,k,g,h,z,14,b[18]),h=d(h,j,k,g,c,20,b[19]),g=d(g,h,j,k,q,5,b[20]),k=d(k,g,h,j,x,9,b[21]),j=d(j,k,g,h,D,14,b[22]),h=d(h,j,k,g,y,20,b[23]),g=d(g,h,j,k,u,5,b[24]),k=d(k,g,h,j,C,9,b[25]),j=d(j,k,g,h,t,14,b[26]),h=d(h,j,k,g,v,20,b[27]),g=d(g,h,j,k,B,5,b[28]),k=d(k,g,
h,j,f,9,b[29]),j=d(j,k,g,h,w,14,b[30]),h=d(h,j,k,g,A,20,b[31]),g=n(g,h,j,k,q,4,b[32]),k=n(k,g,h,j,v,11,b[33]),j=n(j,k,g,h,z,16,b[34]),h=n(h,j,k,g,C,23,b[35]),g=n(g,h,j,k,m,4,b[36]),k=n(k,g,h,j,y,11,b[37]),j=n(j,k,g,h,w,16,b[38]),h=n(h,j,k,g,x,23,b[39]),g=n(g,h,j,k,B,4,b[40]),k=n(k,g,h,j,c,11,b[41]),j=n(j,k,g,h,t,16,b[42]),h=n(h,j,k,g,s,23,b[43]),g=n(g,h,j,k,u,4,b[44]),k=n(k,g,h,j,A,11,b[45]),j=n(j,k,g,h,D,16,b[46]),h=n(h,j,k,g,f,23,b[47]),g=p(g,h,j,k,c,6,b[48]),k=p(k,g,h,j,w,10,b[49]),j=p(j,k,g,h,
C,15,b[50]),h=p(h,j,k,g,q,21,b[51]),g=p(g,h,j,k,A,6,b[52]),k=p(k,g,h,j,t,10,b[53]),j=p(j,k,g,h,x,15,b[54]),h=p(h,j,k,g,m,21,b[55]),g=p(g,h,j,k,v,6,b[56]),k=p(k,g,h,j,D,10,b[57]),j=p(j,k,g,h,s,15,b[58]),h=p(h,j,k,g,B,21,b[59]),g=p(g,h,j,k,y,6,b[60]),k=p(k,g,h,j,z,10,b[61]),j=p(j,k,g,h,f,15,b[62]),h=p(h,j,k,g,u,21,b[63]);a[0]=a[0]+g|0;a[1]=a[1]+h|0;a[2]=a[2]+j|0;a[3]=a[3]+k|0},_doFinalize:function(){var b=this._data,e=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;e[c>>>5]|=128<<24-c%32;var m=u.floor(a/
4294967296);e[(c+64>>>9<<4)+15]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360;e[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(e.length+1);this._process();b=this._hash;e=b.words;for(a=0;4>a;a++)c=e[a],e[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});s.MD5=v._createHelper(q);s.HmacMD5=v._createHmacHelper(q)})(Math);
(function(){var u=CryptoJS,l=u.lib,d=l.Base,n=l.WordArray,l=u.algo,p=l.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:l.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,l){for(var p=this.cfg,v=p.hasher.create(),b=n.create(),u=b.words,r=p.keySize,p=p.iterations;u.length<r;){e&&v.update(e);var e=v.update(d).finalize(l);v.reset();for(var a=1;a<p;a++)e=v.finalize(e),v.reset();b.concat(e)}b.sigBytes=4*r;return b}});u.EvpKDF=function(d,l,n){return p.create(n).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var l=CryptoJS,d=l.lib,n=d.Base,p=d.WordArray,s=d.BufferedBlockAlgorithm,q=l.enc.Base64,w=l.algo.EvpKDF,v=d.Cipher=s.extend({cfg:n.extend(),createEncryptor:function(m,a){return this.create(this._ENC_XFORM_MODE,m,a)},createDecryptor:function(m,a){return this.create(this._DEC_XFORM_MODE,m,a)},init:function(m,a,b){this.cfg=this.cfg.extend(b);this._xformMode=m;this._key=a;this.reset()},reset:function(){s.reset.call(this);this._doReset()},process:function(a){this._append(a);return this._process()},
finalize:function(a){a&&this._append(a);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(m){return{encrypt:function(f,b,e){return("string"==typeof b?c:a).encrypt(m,f,b,e)},decrypt:function(f,b,e){return("string"==typeof b?c:a).decrypt(m,f,b,e)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=l.mode={},x=function(a,f,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var e=0;e<b;e++)a[f+e]^=
c[e]},r=(d.BlockCipherMode=n.extend({createEncryptor:function(a,f){return this.Encryptor.create(a,f)},createDecryptor:function(a,f){return this.Decryptor.create(a,f)},init:function(a,f){this._cipher=a;this._iv=f}})).extend();r.Encryptor=r.extend({processBlock:function(a,f){var b=this._cipher,c=b.blockSize;x.call(this,a,f,c);b.encryptBlock(a,f);this._prevBlock=a.slice(f,f+c)}});r.Decryptor=r.extend({processBlock:function(a,b){var c=this._cipher,e=c.blockSize,d=a.slice(b,b+e);c.decryptBlock(a,b);x.call(this,
a,b,e);this._prevBlock=d}});b=b.CBC=r;r=(l.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,e=c<<24|c<<16|c<<8|c,d=[],l=0;l<c;l+=4)d.push(e);c=p.create(d,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:r}),reset:function(){v.reset.call(this);var a=this.cfg,c=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var b=a.createEncryptor;else b=a.createDecryptor,this._minBufferSize=1;this._mode=b.call(a,
this,c&&c.words)},_doProcessBlock:function(a,c){this._mode.processBlock(a,c)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var c=this._process(!0)}else c=this._process(!0),a.unpad(c);return c},blockSize:4});var e=d.CipherParams=n.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(l.format={}).OpenSSL={stringify:function(a){var c=a.ciphertext;a=a.salt;return(a?p.create([1398893684,
1701076831]).concat(a).concat(c):c).toString(q)},parse:function(a){a=q.parse(a);var c=a.words;if(1398893684==c[0]&&1701076831==c[1]){var b=p.create(c.slice(2,4));c.splice(0,4);a.sigBytes-=16}return e.create({ciphertext:a,salt:b})}},a=d.SerializableCipher=n.extend({cfg:n.extend({format:b}),encrypt:function(a,c,b,d){d=this.cfg.extend(d);var l=a.createEncryptor(b,d);c=l.finalize(c);l=l.cfg;return e.create({ciphertext:c,key:b,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,c,b,e){e=this.cfg.extend(e);c=this._parse(c,e.format);return a.createDecryptor(b,e).finalize(c.ciphertext)},_parse:function(a,c){return"string"==typeof a?c.parse(a,this):a}}),l=(l.kdf={}).OpenSSL={execute:function(a,c,b,d){d||(d=p.random(8));a=w.create({keySize:c+b}).compute(a,d);b=p.create(a.words.slice(c),4*b);a.sigBytes=4*c;return e.create({key:a,iv:b,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:l}),encrypt:function(c,b,e,d){d=this.cfg.extend(d);e=d.kdf.execute(e,
c.keySize,c.ivSize);d.iv=e.iv;c=a.encrypt.call(this,c,b,e.key,d);c.mixIn(e);return c},decrypt:function(c,b,e,d){d=this.cfg.extend(d);b=this._parse(b,d.format);e=d.kdf.execute(e,c.keySize,c.ivSize,b.salt);d.iv=e.iv;return a.decrypt.call(this,c,b,e.key,d)}})}();
(function(){function u(b,a){var c=(this._lBlock>>>b^this._rBlock)&a;this._rBlock^=c;this._lBlock^=c<<b}function l(b,a){var c=(this._rBlock>>>b^this._lBlock)&a;this._lBlock^=c;this._rBlock^=c<<b}var d=CryptoJS,n=d.lib,p=n.WordArray,n=n.BlockCipher,s=d.algo,q=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],w=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,
55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],v=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],b=[{"0":8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,
2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,
1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{"0":1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,
75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,
276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{"0":260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,
14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,
17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{"0":2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,
98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,
1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{"0":128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,
10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,
83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{"0":268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,
2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{"0":1048576,
16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,
496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{"0":134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,
2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,
2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],x=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],r=s.DES=n.extend({_doReset:function(){for(var b=this._key.words,a=[],c=0;56>c;c++){var d=q[c]-1;a[c]=b[d>>>5]>>>31-d%32&1}b=this._subKeys=[];for(d=0;16>d;d++){for(var f=b[d]=[],l=v[d],c=0;24>c;c++)f[c/6|0]|=a[(w[c]-1+l)%28]<<31-c%6,f[4+(c/6|0)]|=a[28+(w[c+24]-1+l)%28]<<31-c%6;f[0]=f[0]<<1|f[0]>>>31;for(c=1;7>c;c++)f[c]>>>=
4*(c-1)+3;f[7]=f[7]<<5|f[7]>>>27}a=this._invSubKeys=[];for(c=0;16>c;c++)a[c]=b[15-c]},encryptBlock:function(b,a){this._doCryptBlock(b,a,this._subKeys)},decryptBlock:function(b,a){this._doCryptBlock(b,a,this._invSubKeys)},_doCryptBlock:function(e,a,c){this._lBlock=e[a];this._rBlock=e[a+1];u.call(this,4,252645135);u.call(this,16,65535);l.call(this,2,858993459);l.call(this,8,16711935);u.call(this,1,1431655765);for(var d=0;16>d;d++){for(var f=c[d],n=this._lBlock,p=this._rBlock,q=0,r=0;8>r;r++)q|=b[r][((p^
f[r])&x[r])>>>0];this._lBlock=p;this._rBlock=n^q}c=this._lBlock;this._lBlock=this._rBlock;this._rBlock=c;u.call(this,1,1431655765);l.call(this,8,16711935);l.call(this,2,858993459);u.call(this,16,65535);u.call(this,4,252645135);e[a]=this._lBlock;e[a+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});d.DES=n._createHelper(r);s=s.TripleDES=n.extend({_doReset:function(){var b=this._key.words;this._des1=r.createEncryptor(p.create(b.slice(0,2)));this._des2=r.createEncryptor(p.create(b.slice(2,4)));this._des3=
r.createEncryptor(p.create(b.slice(4,6)))},encryptBlock:function(b,a){this._des1.encryptBlock(b,a);this._des2.decryptBlock(b,a);this._des3.encryptBlock(b,a)},decryptBlock:function(b,a){this._des3.decryptBlock(b,a);this._des2.encryptBlock(b,a);this._des1.decryptBlock(b,a)},keySize:6,ivSize:2,blockSize:2});d.TripleDES=n._createHelper(s)})();

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/components/mode-ecb.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Electronic Codebook block mode.
 */
CryptoJS.mode.ECB = (function () {
  var ECB = CryptoJS.lib.BlockCipherMode.extend();

  ECB.Encryptor = ECB.extend({
      processBlock: function (words, offset) {
          this._cipher.encryptBlock(words, offset);
      }
  });

  ECB.Decryptor = ECB.extend({
      processBlock: function (words, offset) {
          this._cipher.decryptBlock(words, offset);
      }
  });

  return ECB;
}());

// document.write("<script language=javascript src=\"AnySign/libs/singleSignatrueUI.js\" charset=\"utf-8\"></script>");
/**
 * 动画界面单签
 * @param {Object} obj
 * @param {Object} identifyCallBack
 */
function singleSignatrueUI(obj,identifyCallBack){
  var tmp_dlg = document.getElementById("single_dialog");
  tmp_dlg.style.width = getWindowWidth();
  tmp_dlg.style.height = getWindowHeight();
  tmp_dlg.style.display = "block";

  loadSignView();

  singleSignCore(obj,identifyCallBack);

  function loadSignView(){
    if(window.orientation == 0 || window.orientation == 180) { //竖屏

      var anysign_title = document.getElementById("anysign_title");
      anysign_title.style.width = getWindowWidth() + "px";
      anysign_title.innerHTML = obj.title;
      anysign_title.style.fontSize = "20px";

      var signImage = document.getElementById("single_signImage");
      signImage.style.cssFloat = "none";
      signImage.style.clear = "both";
      signImage.style.textAlign = "center";
//			signImage.style.lineHeight = getWindowHeight() / 4 + "px";
      signImage.style.width = getWindowWidth() + "px";
      signImage.style.height = getWindowHeight() / 4 + "px";
      signImage.style.display = "inline-block";
      signImage.style.verticalAlign = "middle";

      var tmpcanvascss = document.getElementById("single_tmpcanvascss");
      tmpcanvascss.style.cssFloat = "none";
      tmpcanvascss.style.clear = "both";
      tmpcanvascss.style.width = getWindowWidth() + "px";
      tmpcanvascss.style.height = getWindowHeight() / 2 + "px";
      tmpcanvascss.position = "absolute";

      var text = document.getElementById("single_signTitle");
      text.style.width = getWindowWidth() + "px";
      text.style.height = getWindowHeight() / 2 + "px";
      text.style.fontSize = getWindowWidth() * 0.9 / 3 + "px";
      text.style.lineHeight = getWindowHeight() / 2 + "px";
      text.style.cssFloat = "right";
      text.style.clear = "none";

      var anysignCanvas = document.getElementById("single_anysignCanvas");
      anysignCanvas.style.cssFloat = "right";
      anysignCanvas.style.clear = "none";
      anysignCanvas.width = getWindowWidth();
      anysignCanvas.height = getWindowHeight() / 2;
      anysignCanvas.style.backgroundSize = getWindowWidth() + "px " + getWindowHeight() * 0.5 + "px";

      var signImg_width = getWindowWidth() * 0.9;

    } else {//横屏
      var anysign_title = document.getElementById("anysign_title");
      anysign_title.style.width = getWindowWidth() * 0.9/2 + "px";
      anysign_title.innerHTML = obj.title;

      var leftView = document.getElementById("leftView");
      leftView.style.cssFloat = "left";
      leftView.style.clear = "none";

      var signImage = document.getElementById("single_signImage");
//			signImage.style.lineHeight = getWindowHeight() / 4 + "px";
      signImage.style.width = getWindowWidth() * 0.9 / 2 + "px";
      signImage.style.height = (getWindowHeight() * 0.8 - $("#anysign_title").height()) + "px";
      signImage.focus();

      var tmpcanvascss = document.getElementById("single_tmpcanvascss");
      tmpcanvascss.style.cssFloat = "left";
      tmpcanvascss.style.clear = "none";

      var text = document.getElementById("single_signTitle");
      text.style.width = getWindowWidth() / 2 + "px";
      text.style.height = getWindowHeight() * 0.8 + "px";
      text.style.fontSize = getWindowWidth() * 0.9 / 4 + "px";
      text.style.lineHeight = getWindowHeight() * 0.8 + "px";
      text.style.cssFloat = "right";
      text.style.clear = "none";

      var anysignCanvas = document.getElementById("single_anysignCanvas");
      anysignCanvas.style.cssFloat = "right";
      anysignCanvas.style.clear = "none";
      anysignCanvas.width = getWindowWidth() / 2;
      anysignCanvas.height = getWindowHeight() * 0.8;
      anysignCanvas.style.backgroundSize = getWindowWidth() * 0.5 + "px " + getWindowHeight() * 0.8 + "px";

      document.getElementById("single_tmpcanvascss").appendChild(document.getElementById("single_anysignCanvas"));

      var signImg_width = getWindowWidth() * 0.95 / 2;

    }
  }

  window.addEventListener("orientationchange", function() {
    loadSignView();
  });

  window.addEventListener('resize', function() {
    loadSignView();
  });
}

// document.write("<script language=javascript src=\"AnySign/libs/singleSignCore.js\" charset=\"utf-8\"></script>");
/**
 * 16字动画单签核心代码
 * @param {Object} signObj
 * @param {Object} identify_callback
 */
function singleSignCore(signObj,identify_callback){
  var base_stroke_width = signObj.strokeWidth;//(window.innerWidth >= 480 ? 15 : 10);//笔迹粗细

  var isDown = false;
  var isWriting = false;
  var minX = 9999,
    minY = 9999,
    maxX = 0,
    maxY = 0;
  var curX = 0,
    curY = 0;
  var points = []; //保存当前笔画轨迹
  var points_all = []; //保存所有笔迹点，用来判断笔迹过少导致的线程启用

  var sbuilder = []; //识别笔迹收集

  var firstPointTime = 0;
  var signTrack = ""; //保存签名轨迹
  var signTrachPointCount = 0; //签名轨迹点个数
  var paste_padding = 10; //px
  var lastX = 0,
    lastY = 0;

  var tmp_canvas;
  var tmp_ctx;
  //	var isCopyingImg = false;
  var calculatedSigWidth = 0; //签名完毕点击确认后，生成的签名宽dp值(物理尺寸)
  var calculatedSigHeight = 0; //签名完毕点击确认后，生成的签名高dp值(物理尺寸)
  var C_imageDataTmp;
  var itarget = 10; //每个图片的动画最终目标坐标x
  var CurrentNum = 0;
  var myImage = new Array(); //储存签名图片的数组
  var imageArray = new Array();//显示在signImage里图片

  var timer = null;

  var line_width = 0;
  var row_height = 0;
  var rowNum = 1;

  var imgWidth;
  var imgHeight;

  var isPoint = false;

  var allHeight = 0;//图片的高度

  var maxDistance = 0;
  var distance = 0;

  var tmp_canvas = document.getElementById("single_anysignCanvas");
  var tmp_title = document.getElementById("anysign_title");
  var tmp_signImage = document.getElementById("single_signImage");

  var btn_ok = document.getElementById("btnOK");
  var btn_cancel = document.getElementById("btnCancel");
//var btn_back = document.getElementById("btnBack");
  var btn_clear = document.getElementById("btnClear");

  tmp_ctx = tmp_canvas.getContext('2d');

  var text = document.getElementById("single_signTitle");

  var name = signObj.signer.UName;

  var UNameStr = name.replace(/(.)(?=[^$])/g, "$1,").split(",");

  if(signObj.isShowBgText){
    text.innerHTML = UNameStr[CurrentNum];
  }

  var scaleFactor = window.devicePixelRatio ? window.devicePixelRatio : 1;

  tmp_ctx.strokeStyle = signObj.penColor //线条颜色
  tmp_ctx.lineWidth = base_stroke_width;
  tmp_ctx.lineCap = 'round';
  tmp_ctx.lineJoin = 'round';
  tmp_ctx.shadowBlur = 5;

  btn_ok.onclick = function(){
    signConfirm();
  }

  btn_cancel.onclick = function(){
    cancelSign();
  }
//btn_back.onclick = function(){
//  back_fun();
//}
  btn_clear.onclick = function(){
    clear_fun();
  }
  function clear_fun(){
    myImage = [];
    imageArray = [];
    $("#single_signImage").empty();
    CurrentNum = 0;
    text.innerHTML = UNameStr[CurrentNum];
    var anysign_title = document.getElementById("anysign_title");
    anysign_title.style.color = "black";
    anysign_title.innerHTML = signObj.title;
    // //var dlg = document.getElementById("single_dialog");
    // //dlg.style.display = 'none';
    // minX = 9999, minY = 9999, maxX = 0, maxY = 0;

    // //document.body.parentNode.style.overflow = "scroll"; //显示且可用

    // var tmp_textView = document.getElementById("anysign_title");
    // //tmp_textView.innerHTML = "";
    // tmp_textView.style.color = "black";

    // var tmp_text = document.getElementById("single_signTitle");
    // //tmp_text.innerHTML = "";

    // for(var i = 0; i < myImage.length; i++) {
    // 	tmp_signImage.removeChild(myImage[i]);
    // }
    // console.log(signObj)
    // //signObj = null;
  }

  function back_fun(){
    if (CurrentNum != 0) {
      myImage.pop();
      imageArray.pop();
      $("#img"+CurrentNum).remove()
      CurrentNum--;
      if(UNameStr[CurrentNum] == " "){
        myImage.pop();
        imageArray.pop();
        $("#img"+CurrentNum).remove()
        CurrentNum--;
      }
      text.innerHTML = UNameStr[CurrentNum];
      var anysign_title = document.getElementById("anysign_title");
      //anysign_title.style.width = getWindowWidth() + "px";
      anysign_title.style.color = "black";
      anysign_title.innerHTML = signObj.title;
    }

  }

  document.body.onselectstart = document.body.oncontextmenu = function() {
    return false;
  };

  if('ontouchstart' in document.documentElement) {//手机
    tmp_canvas.ontouchstart = function(e) {
      if(timer != null) {
        clearInterval(timer);
      }
      isDown = true;
      isWriting = true;
    };
    tmp_canvas.ontouchmove = function(e) {
      if(isDown) {
        var offset = JQuery_Capable.offset(e.target);

        if(typeof e.targetTouches !== 'undefined') {
          //ontouchmove事件走这里
          //ontouchmove事件中e.clientX = undefined,e.pageX = 0
          //所以 Y的话，通过取点击位置减去top即可，但是假如点击位置在button按钮区域，需要减去按钮区域超出的位置（即点击位置区域不能超过画布区域），这里没有减
          //所有向 points中push的前提加上curY <= canvas.height ,宽不必考虑，因为宽度全屏，不会点击到屏幕外
          curX = Math.floor(e.targetTouches[0].pageX - offset.left);
          curY = Math.floor(e.targetTouches[0].pageY - offset.top);
        } else {
          curX = Math.floor(e.pageX - offset.left);
          curY = Math.floor(e.pageY - offset.top);
        }

        var mill = e.timeStamp;
        if(signTrachPointCount === 0 && !isNaN(mill)) {
          firstPointTime = mill;
        }

        //不判断curY,因为页面出现滚动条后，curY<0
        if(curX > 0 && curY <= tmp_canvas.height) {
          if(!isNaN(mill)) //we store track data now
          {
            signTrack += (curX+maxDistance + "," + curY + "," + base_stroke_width + "," + (mill - firstPointTime) + "\n");
          } else {
            signTrack += (curX+maxDistance + "," + curY + "," + base_stroke_width + "," + 0 + "\n");
          }

          signTrachPointCount += 1;

          if(curX > distance){
            distance = curX;
          }

          if(curX > maxX) {
            maxX = curX;
          }
          if(curX < minX) {
            minX = curX;
          }
          if(curY > maxY) {
            maxY = curY;
          }
          if(curY < minY) {
            minY = curY;
          }

          points.push({
            x: curX,
            y: curY
          });
          onPaint();

          points_all.push({
            x: curX,
            y: curY
          });

          if(curX > 0 && curY > 0) {
            sbuilder.push(curX, curY);
          }

          lastX = curX;
          lastY = curY;
        }

        preventDefault(e); //prevent event from passing behind this div
      }
    };
    tmp_canvas.ontouchend = function(e) {
      if(isDown) {
        //insert this down point
//				var offset = JQuery_Capable.offset(e.target);
//
//				if(typeof e.targetTouches !== 'undefined') {
//					curX = Math.floor(e.targetTouches[0].clientX - offset.left);
//					curY = Math.floor(e.targetTouches[0].clientY - offset.top);
//				} else {
//					curX = Math.floor(e.clientX - offset.left);
//					curY = Math.floor(e.clientY - offset.top);
//				}

        var mill = e.timeStamp;

        if(!isNaN(mill)) //we store track data now
        {
          signTrack += ("0,0," + -1 + "," + (mill - firstPointTime) + "\n");
        } else {
          signTrack += ("0,0," + -1 + "," + 0 + "\n");
        }

        signTrachPointCount += 1;

        sbuilder.push("-1", "0");

        /////////////////////////////////////////
        var canvas = document.getElementById('single_anysignCanvas');
        var ctx = canvas.getContext('2d');
        //	                	ctx.closePath();
        ctx.drawImage(tmp_canvas, 0, 0);
        // Clearing tmp canvas
        //	                	tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

        var text = document.getElementById("single_signTitle");

        if(CurrentNum >= UNameStr.length) {
//					alert("已签署完毕！");
          text.innerHTML = "";
          tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
          isWriting = false;
        } else {
          if(isPoint) {
            isPoint = false;
            timer = setInterval(function() {

              sbuilder.push("-1", "-1"); //识别结束符

              maxDistance = maxDistance + distance;
              distance = 0;

              //识别开始
              if(signObj.isdistinguish && !checkText(UNameStr[CurrentNum])) {

                var callback_dis = function(errCode, isEquals) {
//									closeWindow();
                  if(errCode == 0) {
                    if(isEquals) {
                      CurrentNum++;
                      if(CurrentNum == UNameStr.length) {
                        text.innerHTML = "";
                        tmp_title.innerHTML = "已签署完毕！";
                        tmp_title.style.color = "Red";
                        clearInterval(timer);
                      } else {
                        if(UNameStr[CurrentNum] == " "){
                          if(signObj.isShowBgText){
                            text.innerHTML = UNameStr[CurrentNum+1];
                          }
                        }else{
                          if(signObj.isShowBgText){
                            text.innerHTML = UNameStr[CurrentNum];
                          }
                        }
                      }

                      var image = document.createElement("img");
                      image.id = "img" + CurrentNum;

                      image.width = signObj.singleWidth;
                      image.height = signObj.singleHeight;
                      // image.width = Math.floor(tmp_signImage.scrollWidth/UNameStr.length)-10;
                      // image.height = signObj.singleHeight * image.width / signObj.singleWidth;

                      if(tmp_signImage.scrollHeight < image.height){

                        image.width = signObj.singleWidth;
                        image.height = signObj.singleHeight;
                        // image.height = signObj.singleHeight;
                        // image.width = Math.floor(signObj.singleWidth * image.height / signObj.singleHeight);
                      }

//											image.width = signObj.singleWidth;
//											image.height = signObj.singleWidth;

//											if(checkText(UNameStr[CurrentNum - 1])) {
                      image.src = canvas.toDataURL("image/png");
//											} else {
//												var width = maxX - minX;
//												var height = maxY - minY;
//
//												var cx = (maxX + minX) / 2;
//												var cy = (maxY + minY) / 2;
//
//												var radius;
//
//												if(width < 20 && height < 20) {
//													radius = signObj.singleWidth;
//												} else {
//													if(width > height) {
//														radius = width / 2;
//													} else {
//														radius = height / 2;
//													}
//												}
//
//												C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(cx - radius - paste_padding, cy - radius - paste_padding,
//													(radius + paste_padding) * 2, (radius + paste_padding) * 2);
//
//												var signData = getSigData();
//
//												image.src = signData;
//											}

                      myImage[CurrentNum - 1] = image;

                      imageArray[CurrentNum - 1] = image;

                      // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                      tmp_signImage.appendChild(image);
                      tmp_signImage.scrollTop = tmp_signImage.scrollHeight;

                      tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                      minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                      sbuilder = [];
                      if(timer != null) {
                        clearInterval(timer);
                      }
                      if(UNameStr[CurrentNum] == " "){
                        CurrentNum++
                        var image = document.createElement("img");
                        image.id = "img" + CurrentNum;
                        image.width = signObj.singleWidth;
                        image.height = signObj.singleHeight;
                        C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(0,0,50, 50);
                        var signData = getSigData();
                        image.src = signData;
                        myImage[CurrentNum - 1] = image;

                        imageArray[CurrentNum - 1] = image;

                        // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                        tmp_signImage.appendChild(image);
                      }
                    }
                  } else {
                    tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                    minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                    sbuilder = [];
                    clearInterval(timer);
                  }

                  if(identify_callback == null) {
                    console.log("the identify callback is not definition");
                  } else if(errCode != "请求超时") {
                    identify_callback(errCode);
                  }
                }

                var ocrObj = new OCRObj(signObj.ocrCapture);
                ocrObj.recognition(sbuilder, UNameStr[CurrentNum], callback_dis);

                isWriting = false;
                clearInterval(timer);

              } else {
                CurrentNum++;

                sbuilder = [];

                if(CurrentNum == UNameStr.length) {
                  text.innerHTML = ""
                  tmp_title.innerHTML = "已签署完毕！";
                  tmp_title.style.color = "Red";
                  clearInterval(timer);
                } else {
                  if(UNameStr[CurrentNum] == " "){
                    if(signObj.isShowBgText){
                      text.innerHTML = UNameStr[CurrentNum+1];
                    }
                  }else{
                    if(signObj.isShowBgText){
                      text.innerHTML = UNameStr[CurrentNum];
                    }
                  }
                }

                var image = document.createElement("img");
                image.id = "img" + CurrentNum;
                // image.width = Math.floor(tmp_signImage.scrollWidth/UNameStr.length)-10;
                // image.height = signObj.singleHeight * image.width / signObj.singleWidth;
                image.width = signObj.singleWidth;
                image.height = signObj.singleHeight;
                if(tmp_signImage.scrollHeight < image.height){
                  image.height = signObj.singleHeight;
                  image.width = Math.floor(signObj.singleWidth * image.height / signObj.singleHeight);
                }

//								alert(image.width+","+image.height +","+ tmp_signImage.scrollWidth);

//								image.width = signObj.singleWidth;
//								image.height = signObj.singleWidth;

//								if(checkText(UNameStr[CurrentNum - 1])) {
                image.src = canvas.toDataURL("image/png");
//								} else {
//									var width = maxX - minX;
//									var height = maxY - minY;
//
//									var cx = (maxX + minX) / 2;
//									var cy = (maxY + minY) / 2;
//
//									var radius;
//
//									if(width < 20 && height < 20) {
//										radius = signObj.singleWidth;
//									} else {
//										if(width > height) {
//											radius = width / 2;
//										} else {
//											radius = height / 2;
//										}
//									}
//
//									C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(cx - radius - paste_padding, cy - radius - paste_padding,
//										(radius + paste_padding) * 2, (radius + paste_padding) * 2);
//
//									var signData = getSigData();
//
//									image.src = signData;
//								}

                myImage[CurrentNum - 1] = image;

                // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                tmp_signImage.appendChild(image);
                tmp_signImage.scrollTop = tmp_signImage.scrollHeight;

                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                //C_imageDataTmp = null;
                signData = null;
                isWriting = false;
                clearInterval(timer);
                if(UNameStr[CurrentNum] == " "){
                  CurrentNum++
                  var image = document.createElement("img");
                  image.id = "img" + CurrentNum;
                  image.width = signObj.singleWidth;
                  image.height = signObj.singleHeight;
                  C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(0,0,50, 50);
                  var signData = getSigData();
                  image.src = signData;
                  myImage[CurrentNum - 1] = image;

                  imageArray[CurrentNum - 1] = image;

                  // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                  tmp_signImage.appendChild(image);
                }
              }

            }, 1000);
          }

        }

      }

      isDown = false;
      points = [];
      points_all = [];

    };

    tmp_canvas.ontouchcancel = tmp_canvas.ontouchend;
  } else {//浏览器
    tmp_canvas.onmousedown = function(e) {
      if(timer != null) {
        clearInterval(timer);
      }

      isDown = true;
      isWriting = true;
    };
    tmp_canvas.onmousemove = function(e) {
      // !isDown || ctx.lineTo(e.clientX - 10, e.clientY - 10, 5, 5); //画笔画到哪一点
      if(isDown) {
        var offset = JQuery_Capable.offset(e.target);
        var windowScrollOffsetTop = document.body.scrollTop | document.documentElement.scrollTop; //$(window).scrollTop();
        var windowScrollOffsetLeft = document.body.scrollLeft | document.documentElement.scrollLeft; //$(window).scrollLeft();

        if(typeof e.targetTouches !== 'undefined') {
          curX = Math.floor(e.targetTouches[0].clientX - offset.left);
          curY = Math.floor(e.targetTouches[0].clientY - offset.top);
        } else {
          //onmousemove事件走这里
          //onmousemove事件中e.clientX = e.pageX,e.clientY = e.pageY
          curX = Math.floor(e.clientX - offset.left);
          curY = Math.floor(e.clientY - offset.top);
        }

        var mill = e.timeStamp;
        if(signTrachPointCount === 0 && !isNaN(mill)) {
          firstPointTime = mill;
        }
        //不判断curY,因为页面出现滚动条后，curY<0
        if(curX > 0) {
          if(!isNaN(mill)) {
            signTrack += (curX+maxDistance + "," + curY + "," + base_stroke_width + "," + (mill - firstPointTime) + "\n");
          } else {
            signTrack += (curX+maxDistance + "," + curY + "," + base_stroke_width + "," + 0 + "\n");
          }
          signTrachPointCount += 1;

          curY += windowScrollOffsetTop;
          curX += windowScrollOffsetLeft;

          if(curX > distance){
            distance = curX;
          }

          if(curX > maxX) {
            maxX = curX;
          }
          if(curX < minX) {
            minX = curX;
          }
          if(curY > maxY) {
            maxY = curY;
          }
          if(curY < minY) {
            minY = curY;
          }

          points.push({
            x: curX,
            y: curY
          });
          onPaint();

          points_all.push({
            x: curX,
            y: curY
          });

          if(curX > 0 && curY > 0) {
            sbuilder.push(curX, curY);
          }

          lastX = curX;
          lastY = curY;
        }

        preventDefault(e);

      }
    };
    tmp_canvas.onmouseup = function(e) {
      if(isDown) {
        isDown = false;
        //insert this down point
        var offset = JQuery_Capable.offset(e.target);

        if(typeof e.targetTouches !== 'undefined') {
          curX = Math.floor(e.targetTouches[0].clientX - offset.left);
          curY = Math.floor(e.targetTouches[0].clientY - offset.top);
        } else {
          curX = Math.floor(e.clientX - offset.left);
          curY = Math.floor(e.clientY - offset.top);
        }

        var mill = e.timeStamp;

        if(!isNaN(mill)) //we store track data now
        {
          signTrack += ("0,0," + -1 + "," + (mill - firstPointTime) + "\n");
        } else {
          signTrack += ("0,0," + -1 + "," + 0 + "\n");
        }

        signTrachPointCount += 1;

        sbuilder.push("-1", "0");

        /////////////////////////////////////////
        var canvas = document.getElementById('single_anysignCanvas');
        var ctx = canvas.getContext('2d');
        //	                	ctx.closePath();
        ctx.drawImage(tmp_canvas, 0, 0);
        // Clearing tmp canvas
        //	                	tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

        var text = document.getElementById("single_signTitle");

        if(CurrentNum >= UNameStr.length) {
//					alert("已签署完毕！");
          text.innerHTML = "";
          tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
          isWriting = false;
        } else {
          if(points_all.length > 10) {
            timer = setInterval(function() {

              sbuilder.push("-1", "-1"); //识别结束符

              maxDistance = maxDistance + distance;
              distance = 0;

              //识别开始
              if(signObj.isdistinguish && !checkText(UNameStr[CurrentNum])) {//识别

                var callback_dis = function(errCode, isEquals) {
//									closeWindow();
                  if(errCode == 0) {
                    if(isEquals) {
                      CurrentNum++;

                      if(CurrentNum == UNameStr.length) {
                        text.innerHTML = "";
                        tmp_title.innerHTML = "已签署完毕！";
                        tmp_title.style.color = "Red";
                        clearInterval(timer);
                      } else {
                        if(UNameStr[CurrentNum] == " "){
                          if(signObj.isShowBgText){
                            text.innerHTML = UNameStr[CurrentNum+1];
                          }
                        }else{
                          if(signObj.isShowBgText){
                            text.innerHTML = UNameStr[CurrentNum];
                          }
                        }
                      }

                      var image = document.createElement("img");
                      image.id = "img" + CurrentNum;

//											image.width = Math.floor(tmp_signImage.scrollWidth/UNameStr.length);
//											image.height = signObj.singleHeight * image.width / signObj.singleHeight;
                      // image.width = signObj.singleWidth;
                      // image.height = signObj.singleWidth;
                      image.width = signObj.singleWidth;
                      image.height = signObj.singleHeight;

                      if(checkText(UNameStr[CurrentNum - 1])) {
                        image.src = canvas.toDataURL("image/png");
                      } else {
                        var width = maxX - minX;
                        var height = maxY - minY;

                        var cx = (maxX + minX) / 2;
                        var cy = (maxY + minY) / 2;

                        var radius;

                        if(width < 20 && height < 20) {
                          radius = signObj.singleWidth;
                        } else {
                          if(width > height) {
                            radius = width / 2;
                          } else {
                            radius = height / 2;
                          }
                        }

                        C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(cx - radius - paste_padding, cy - radius - paste_padding,
                          (radius + paste_padding) * 2, (radius + paste_padding) * 2);

                        var signData = getSigData();

                        image.src = signData;
                      }

                      myImage[CurrentNum - 1] = image;

                      // image.style.marginTop = 20 +"px";

                      tmp_signImage.appendChild(image);
                      tmp_signImage.scrollTop = tmp_signImage.scrollHeight;

                      tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                      minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                      sbuilder = [];
                      if(timer != null) {
                        clearInterval(timer);
                      }
                      if(UNameStr[CurrentNum] == " "){
                        CurrentNum++
                        var image = document.createElement("img");
                        image.id = "img" + CurrentNum;
                        image.width = signObj.singleWidth;
                        image.height = signObj.singleHeight;
                        C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(0,0,50, 50);
                        var signData = getSigData();
                        image.src = signData;
                        myImage[CurrentNum - 1] = image;

                        imageArray[CurrentNum - 1] = image;

                        // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                        tmp_signImage.appendChild(image);
                      }

                    }
                  } else {
                    tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                    minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                    sbuilder = [];
                    clearInterval(timer);
                  }

                  if(identify_callback == null) {
                    console.log("the identify callback is not definition");
                  } else if(errCode != "请求超时") {
                    identify_callback(errCode);
                  }
                }

                var ocrObj = new OCRObj(signObj.ocrCapture);
                ocrObj.recognition(sbuilder, UNameStr[CurrentNum], callback_dis);

                isWriting = false;
                clearInterval(timer);

              } else {
                CurrentNum++;

                sbuilder = [];

                if(CurrentNum == UNameStr.length) {
                  text.innerHTML = ""
                  tmp_title.innerHTML = "已签署完毕！";
                  tmp_title.style.color = "Red";
                  clearInterval(timer);
                } else {
                  if(UNameStr[CurrentNum] == " "){
                    if(signObj.isShowBgText){
                      text.innerHTML = UNameStr[CurrentNum+1];
                    }
                  }else{
                    if(signObj.isShowBgText){
                      text.innerHTML = UNameStr[CurrentNum];
                    }
                  }
                }

                var image = document.createElement("img");
                image.id = "img" + CurrentNum;
//
                // image.width = signObj.singleWidth;
                // image.height = signObj.singleWidth;
                image.width = signObj.singleWidth
                image.height = signObj.singleHeight

                if(checkText(UNameStr[CurrentNum - 1])) {
                  image.src = canvas.toDataURL("image/png");
                } else {
                  var width = maxX - minX;
                  var height = maxY - minY;

                  var cx = (maxX + minX) / 2;
                  var cy = (maxY + minY) / 2;

                  var radius;

                  if(width < 20 && height < 20) {
                    radius = signObj.singleWidth;
                  } else {
                    if(width > height) {
                      radius = width / 2;
                    } else {
                      radius = height / 2;
                    }
                  }

                  C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(cx - radius - paste_padding, cy - radius - paste_padding,
                    (radius + paste_padding) * 2, (radius + paste_padding) * 2);

                  var signData = getSigData();

                  image.src = signData;
                }

                myImage[CurrentNum - 1] = image;

                tmp_signImage.appendChild(image);
                tmp_signImage.scrollTop = tmp_signImage.scrollHeight;

                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                minX = 9999, minY = 9999, maxX = 0, maxY = 0;
                //C_imageDataTmp = null;
                signData = null;
                isWriting = false;
                clearInterval(timer);
                if(UNameStr[CurrentNum] == " "){
                  CurrentNum++
                  var image = document.createElement("img");
                  image.id = "img" + CurrentNum;
                  image.width = signObj.singleWidth;
                  image.height = signObj.singleWidth;
                  C_imageDataTmp = tmp_canvas.getContext('2d').getImageData(0,0,50, 50);
                  var signData = getSigData();
                  image.src = signData;
                  myImage[CurrentNum - 1] = image;

                  imageArray[CurrentNum - 1] = image;

                  // image.style.marginTop = tmp_signImage.offsetHeight/4 +"px";

                  tmp_signImage.appendChild(image);
                }
              }

            }, 1000);
          }

        }

        isDown = false;
        points = [];
      }



    };

    tmp_canvas.onmouseout = tmp_canvas.onmouseup;
  }

  function getSigData() {
    if(C_imageDataTmp) {

      var tmp_canvas = document.createElement('canvas');
      var ctx = tmp_canvas.getContext('2d');

      var scaleFactor = window.devicePixelRatio ? window.devicePixelRatio : 1;

      tmp_canvas.width = C_imageDataTmp.width / scaleFactor;

      tmp_canvas.height = C_imageDataTmp.height / scaleFactor;

      var scaleFactor2 = 1;

      if(signObj.singleWidth / signObj.singleHeight <= tmp_canvas.width / tmp_canvas.height) {
        if(signObj.singleWidth <= tmp_canvas.width) {
          scaleFactor2 = signObj.singleWidth / tmp_canvas.width;
        }
      } else {
        if(signObj.singleHeight <= tmp_canvas.height) {
          scaleFactor2 = signObj.singleHeight / tmp_canvas.height;
        }
      }

      tmp_canvas.width *= scaleFactor2;
      tmp_canvas.height *= scaleFactor2;

      calculatedSigWidth = tmp_canvas.width;
      calculatedSigHeight = tmp_canvas.height;
      ctx.scale(1 / scaleFactor * scaleFactor2, 1 / scaleFactor * scaleFactor2);

      var data_canvas = document.createElement('canvas');
      data_canvas.width = C_imageDataTmp.width;

      data_canvas.height = C_imageDataTmp.height;

      data_canvas.getContext('2d').putImageData(C_imageDataTmp, 0, 0);

      ctx.drawImage(data_canvas, 0, 0);

      var compressSignData = tmp_canvas.toDataURL();

      return compressSignData;
    }
    return null;
  }

  var onPaint = function() {

    if(points.length < 3) {

      var b = points[0];
      tmp_ctx.beginPath();
      tmp_ctx.strokeStyle = signObj.penColor; //线条颜色
      tmp_ctx.fillStyle = signObj.penColor;
      //			tmp_ctx.moveTo(points[0].x,points[0].y);
      //ctx.moveTo(b.x, b.y);
      //ctx.lineTo(b.x+50, b.y+50);
      tmp_ctx.arc(b.x, b.y, tmp_ctx.lineWidth / 2, 0, Math.PI * 2, !0);
      tmp_ctx.fill();
      tmp_ctx.closePath();

      isPoint = true;

      return;
    }

    // Tmp canvas is always cleared up before drawing.
    tmp_ctx.clearRect(0, 0, tmp_ctx.width, tmp_ctx.height);

    tmp_ctx.beginPath();
    tmp_ctx.strokeStyle = signObj.penColor //线条颜色
    tmp_ctx.fillStyle = signObj.penColor;
    tmp_ctx.moveTo(points[0].x, points[0].y);

    for(var i = 1; i < points.length - 2; i++) {
      var c = (points[i].x + points[i + 1].x) / 2;
      var d = (points[i].y + points[i + 1].y) / 2;

      tmp_ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
    }

    tmp_ctx.stroke();
    isPoint = true;
  };


  function cancelSign() {

    document.documentElement.style.overflow = "auto";

    if(signResCallback) {
      signResCallback(signObj.cid, null, null, 0); //TODO process C_imageDataTmp
    }

    clear_all();

  }

  function signConfirm() {
    if(isWriting){
      return;
    }
    if(CurrentNum != UNameStr.length) {
      custom_alert3("请完成签名", "2000");
      return;
    }

    draw();

    if(signResCallback) {

      signResCallback(signObj.cid, base64[0].substring(22, base64[0].length), base64[0].substring(22, base64[0].length), signTrack, signTrachPointCount, signObj.singleWidth * UNameStr.length, signObj.singleHeight);
    }

    clear_all();
  }

  function clear_all() {
    var dlg = document.getElementById("single_dialog");
    dlg.style.display = 'none';
    minX = 9999, minY = 9999, maxX = 0, maxY = 0;

    document.body.parentNode.style.overflow = "scroll"; //显示且可用

    var tmp_textView = document.getElementById("anysign_title");
    tmp_textView.innerHTML = "";
    tmp_textView.style.color = "black";

    var tmp_text = document.getElementById("single_signTitle");
    tmp_text.innerHTML = "";

    for(var i = 0; i < myImage.length; i++) {
      tmp_signImage.removeChild(myImage[i]);
    }

    signObj = null;
  }

  var base64 = [];

  function draw() {
    var c = document.createElement('canvas'),
      ctx = c.getContext('2d'),

      imgWidth = signObj.singleWidth * UNameStr.length;
    imgHeight = signObj.singleHeight;
    c.width = imgWidth;
    c.height = imgHeight;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = '#fff';
    ctx.fill();

    var w = 0; //图片每行的个数
    var h = 0; //图片高度
    var allNum = UNameStr.length;

    function drawing(n) {
      if(n < allNum) {
//				if(w >= signObj.mass_words_in_single_line) {
//					h = h + signObj.singleHeight;
//					w = 0;
//				}
        myImage[n].width = signObj.singleWidth;
        myImage[n].height = signObj.singleHeight
        ctx.drawImage(myImage[n], signObj.singleWidth * w, h, signObj.singleWidth, signObj.singleHeight);
        w++;
        drawing(n + 1); //递归
      } else {
        //保存生成作品图片
        base64.push(c.toDataURL("image/png", 1));
      }
    }
    drawing(0);
  }

  function setSignResCallback(signObj, callback) {
    if(document.getElementById('anysignCanvas') && isSignOrCom(signObj.cid)){
      signObjTmp = signObj;
      signResCallback = callback;
      var canvas = document.getElementById('anysignCanvas');
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : 'black'; //线条颜色
    }
    else if(document.getElementById('single_anysignCanvas') && isSignOrCom(signObj.cid)) {
      signObjTmp = signObj;
      signResCallback = callback;
      var canvas = document.getElementById('anysignCanvas');
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : 'black'; //线条颜色
    } else if(document.getElementById('comment_canvas')){
      commentObjTmp = signObj;
      signResCallback = callback;
      var canvas = document.getElementById('comment_canvas');
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = commentObjTmp ? commentObjTmp.penColor : 'black'; //线条颜色
      comment_canvas.strokeStyle = commentObjTmp ? commentObjTmp.penColor : 'black'; //线条颜色
    }

  }

  window.addEventListener('resize', function() {
    if(timer != null) {
      clearInterval(timer);
    }
    var text = document.getElementById("single_signTitle");

//		tmp_title.innerHTML = inner_string.substring(0, CurrentNum) + UNameStr[CurrentNum].replace(UNameStr[CurrentNum], '<font color="'+ signObj.currentEditBarTextColor +'">$&</font>') +
//			inner_string.substring(CurrentNum + 1, UNameStr.length);

    if(signObj.isShowBgText){
      if(CurrentNum >= UNameStr.length) {
        text.innerHTML = ""
      } else {
        text.innerHTML = UNameStr[CurrentNum];
      }
    }

    tmp_ctx.strokeStyle = signObj.penColor //线条颜色
    tmp_ctx.lineWidth = base_stroke_width;
    tmp_ctx.lineCap = 'round';
    tmp_ctx.lineJoin = 'round';
    tmp_ctx.shadowBlur = 5;
  });

  window.addEventListener("orientationchange", function() {
    if(timer != null) {
      clearInterval(timer);
    }
//		var text = document.getElementById("single_signTitle");

//		tmp_title.innerHTML = inner_string.substring(0, CurrentNum) + UNameStr[CurrentNum].replace(UNameStr[CurrentNum], '<font color="'+ signObj.currentEditBarTextColor +'">$&</font>') +
//			inner_string.substring(CurrentNum + 1, UNameStr.length);
    tmp_ctx.strokeStyle = signObj.penColor //线条颜色
    tmp_ctx.lineWidth = base_stroke_width;
    tmp_ctx.lineCap = 'round';
    tmp_ctx.lineJoin = 'round';
    tmp_ctx.shadowBlur = 5;

  });













}

// document.write("<script language=javascript src=\"libs/anysignCommentUI.js\" charset=\"utf-8\"></script>");
function anysignCommentUI() {
  var commentObjTmp;
  var inner_string;
  var commentInner;
  var dlg;

  this.onload_commentSignCanvas = function(obj,identifyCallBack) {
    commentObjTmp = obj;
    inner_string = comment_obj;

    $("#signImage").html("")

    $.each(inner_string.x,function(i,n){
      var text_x_num = i.substring(1, i.length);
      var text = "<span class='white_text text_"+text_x_num+"'>"+this+"</span>";
      $("#signImage").append(text);
    })
    $.each(inner_string.y,function(i,n){
      var text_y_num = i.substring(1, i.length);
      if(text_y_num == 0){
        var text = "<span class='click_text' click_val="+text_y_num+">"+this+"</span>";
        $(".text_1").before(text);
      }else{
        var text = "<span class='click_text' click_val="+text_y_num+">"+this+"</span>";
        $(".text_"+text_y_num).after(text);
      }
    })
    //commentInner = inner_string.replace(/(.)(?=[^$])/g, "$1,").split(",");

    dlg = document.getElementById("comment_dialog");
    dlg.style.width = getWindowWidth();
    dlg.style.height = getWindowHeight();
    dlg.style.display = "block";

    loadView();

    new anysignCommentCore(inner_string, line_count, commentObjTmp,identifyCallBack);
  }

  function loadView() {
    var canvas = document.getElementById("comment_canvas");
    var ctx = canvas.getContext('2d');

    var tmp_dlg = document.getElementById("comment_dialog");
    tmp_dlg.style.width = getWindowWidth();
    tmp_dlg.style.height = getWindowHeight();

    if(window.orientation == 0 || window.orientation == 180) { //竖屏


      var signImg_width = getWindowWidth() * 0.9;

    } else {


      var signImg_width = getWindowWidth() * 0.95 / 2;

    }

    line_count = signImg_width / commentObjTmp.mass_word_width - 1;

  }

  window.addEventListener("orientationchange", function() {
    loadView();
  });

  window.addEventListener('resize', function() {
    loadView();
  });

}

function anysignCommentUI_Sign() {
  var commentObjTmp;
  var inner_string;
  var commentInner;
  var dlg;

  this.onload_commentSignCanvas = function(obj,identifyCallBack) {
    commentObjTmp = obj;
    inner_string = obj.commitment;

    $("#signImage").html("")

    // $.each(inner_string.x,function(i,n){
    // 	var text_x_num = i.substring(1, i.length);
    // 	var text = "<span class='white_text text_"+text_x_num+"'>"+this+"</span>";
    // 	$("#signImage").append(text);
    // })
    // $.each(inner_string.y,function(i,n){
    // 	var text_y_num = i.substring(1, i.length);
    // 	if(text_y_num == 0){
    // 		var text = "<span class='click_text' click_val="+text_y_num+">"+this+"</span>";
    // 		$(".text_1").before(text);
    // 	}else{
    // 		var text = "<span class='click_text' click_val="+text_y_num+">"+this+"</span>";
    // 		$(".text_"+text_y_num).after(text);
    // 	}
    // })
    commentInner = inner_string.replace(/(.)(?=[^$])/g, "$1,").split(",");

    window.onmousewheel = document.onmousewheel = function() { return false; };
    document.documentElement.style.overflow = 'hidden';

    dlg = document.getElementById("comment_dialog");
    dlg.style.width = getWindowWidth();
    dlg.style.height = getWindowHeight();
    dlg.style.display = "block";

    var title = document.getElementById("comment_title");
    title.style.fontSize = "20px";

    loadView();

    new anysignCommentCore_Sign(inner_string, line_count, commentObjTmp,identifyCallBack);
  }

  function loadView() {
    var canvas = document.getElementById("comment_canvas");
    canvas.style.display = "block"
    var ctx = canvas.getContext('2d');

    var tmp_dlg = document.getElementById("comment_dialog");
    tmp_dlg.style.width = getWindowWidth();
    tmp_dlg.style.height = getWindowHeight();

    if(window.orientation == 0 || window.orientation == 180) { //竖屏
      document.getElementById("comment_title").style.width = getWindowWidth() + "px";

      document.getElementById("signImage").style.cssFloat = "none";
      document.getElementById("signImage").style.clear = "both";
      document.getElementById("signImage").style.width = getWindowWidth()*0.96 + "px";
      document.getElementById("signImage").style.height = getWindowHeight() / 6 + "px";

      document.getElementById("tmpcanvascss").style.cssFloat = "none";
      document.getElementById("tmpcanvascss").style.clear = "both";
      document.getElementById("tmpcanvascss").style.width = getWindowWidth()*0.96 + "px";
      document.getElementById("tmpcanvascss").style.height = getWindowHeight() / 2 + "px";

      var text = document.getElementById("signTitle");
      text.style.width = getWindowWidth()*0.96;
      text.style.height = getWindowHeight() / 2;
      text.style.fontSize = getWindowWidth() * 0.9 / 3 + "px";
      text.style.color = "#E5E5E5";
      text.style.textAlign = "center";
      text.style.cssText += 'text-align:center';
      text.style.lineHeight = getWindowHeight() / 2 + "px";
      text.style.position = "absolute";
      text.style.cssFloat = "right";
      text.style.clear = "none";

      document.getElementById("comment_canvas").style.cssFloat = "right";
      document.getElementById("comment_canvas").style.clear = "none";
      document.getElementById("comment_canvas").width = getWindowWidth();
      document.getElementById("comment_canvas").height = getWindowHeight() / 2;
      document.getElementById("comment_canvas").style.backgroundImage = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAARJCAYAAABghL8TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTczOENGOTM2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTczOENGOTQ2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNzM4Q0Y5MTZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzM4Q0Y5MjZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvjPrHsAALOESURBVHja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)";
      document.getElementById("comment_canvas").style.backgroundRepeat = 'no-repeat';
      document.getElementById("comment_canvas").style.backgroundSize = getWindowWidth() + "px " + getWindowHeight() * 0.5 + "px";
      document.getElementById("comment_canvas").style.position = "absolute";
      //			document.getElementById("comment_canvas").style.zIndex = 55555;

      var signImg_width = getWindowWidth() * 0.9;

    } else {
      document.getElementById("comment_title").style.width = getWindowWidth() * 0.9 / 2 + "px";
      document.getElementById("comment_title").innerHTML = commentObjTmp.commitment;

      document.getElementById("leftView").style.cssFloat = "left";
      document.getElementById("leftView").style.clear = "none";

      document.getElementById("signImage").style.width = getWindowWidth() * 0.9 / 2 + "px";
      document.getElementById("signImage").style.height = (getWindowHeight() * 0.75 - $("#comment_title").height()) +"px"; // getWindowHeight() * 0.6 + "px";
      document.getElementById("signImage").focus();

      document.getElementById("tmpcanvascss").style.cssFloat = "right";
      document.getElementById("tmpcanvascss").style.clear = "none";
      document.getElementById("tmpcanvascss").style.width = getWindowWidth() / 2 + "px";
      document.getElementById("tmpcanvascss").style.height = getWindowHeight() * 0.8 + "px";

      var text = document.getElementById("signTitle");
      text.style.width = getWindowWidth() / 2 + "px";
      text.style.height = getWindowHeight() * 0.8 + "px";
      text.style.fontSize = getWindowWidth() * 0.9 / 4 + "px";
      text.style.color = "#E5E5E5";
      text.style.textAlign = "center";
      text.style.cssText += 'text-align:center';
      text.style.lineHeight = getWindowHeight() * 0.8 + "px";
      text.style.position = "absolute";
      text.style.cssFloat = "right";
      text.style.clear = "none";

      document.getElementById("comment_canvas").style.cssFloat = "right";
      document.getElementById("comment_canvas").style.clear = "none";
      document.getElementById("comment_canvas").width = getWindowWidth() / 2;
      document.getElementById("comment_canvas").height = getWindowHeight() * 0.8;
      document.getElementById("comment_canvas").style.backgroundImage = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAARJCAYAAABghL8TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTczOENGOTM2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTczOENGOTQ2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNzM4Q0Y5MTZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzM4Q0Y5MjZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvjPrHsAALOESURBVHja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)";
      document.getElementById("comment_canvas").style.backgroundRepeat = 'no-repeat';
      document.getElementById("comment_canvas").style.backgroundSize = getWindowWidth() * 0.5 + "px " + getWindowHeight() * 0.8 + "px";
      document.getElementById("comment_canvas").style.position = "absolute";

      document.getElementById("tmpcanvascss").appendChild(document.getElementById("comment_canvas"));

      var signImg_width = getWindowWidth() * 0.95 / 2;

    }

    line_count = signImg_width / commentObjTmp.mass_word_width - 1;

  }

  window.addEventListener("orientationchange", function() {
    loadView();
  });

  window.addEventListener('resize', function() {
    loadView();
  });

}


// document.write("<script language=javascript src=\"libs/anysign_all.js\" charset=\"utf-8\"></script>");
var anysign = anysign && {
    logger: {
      openLog: !1,
      e: function(a) {
        anysign.logger.openLog && console.log("anysign error:" + a)
      },
      w: function(a) {
        anysign.logger.openLog && console.log("anysign warning:" + a)
      }
    }
  },
  points = [],
  firstPointTime = 0,
  signTrack = "",
  signTrachPointCount = 0,
  calculatedSigWidth = 0,
  calculatedSigHeight = 0,
  minX = 9999,
  minY = 9999,
  maxX = 0,
  maxY = 0,
  curX = 0,
  curY = 0,
  lastX = 0,
  lastY = 0,
  paste_padding = 10,
  imageDataTmp,
  isDown = !1,
  isDrawn = !1,
  isAnysignInputDlgShown = !1,
  isCopyingImg = !1,
  base_stroke_width = 480 <= window.innerWidth ? 7.5 : 5,
  canvas,
  ctx,
  signResCallback,
  signObjTmp,
  bh_temp = getWindowHeight(),
  bw_temp = getWindowWidth(),
  isSign,
  sbuilder = [],
  identify_callback,
  fresh = function() {
    clear_canvas();
    if (isSign) {
      var a = ismobile(1);
      if (1 == a) {
        var b = document.getElementById("anysignCanvas"),
          c = b.getContext("2d"),
          d,
          f,
          e;
        if (isDrawn) {
          var p = document.createElement("canvas");
          var q = p.getContext("2d");
          var l = paste_padding,
            n = f = d = l,
            v = l,
            r, u;
          0 > (e = minX - l) && (d = minX, e = 0);
          0 > (r = minY - l) && (f = minY, r = 0); (u = maxX + l) > b.width && (n = 0, u = b.width); (l = maxY + l) > b.height && (v = 0, l = b.height);
          d = maxX - minX + d + n;
          f = maxY - minY + f + v;
          e = c.getImageData(e, r, u - e, l - r);
          p.width = d;
          p.height = f
        }
        a = getWindowHeight();
        var m = getWindowWidth();
        r = document.getElementById("dialog");
        r.style.height = a + "px";
        r.style.width = m + "px";
        10 > b.width && (b.width *= m);
        b.width < m && (b.width = m);
        b.height = .65 * a;
        m = document.getElementById("container");
        m.style.overflowX = "scroll";
        m.style.overflowY = "hidden";
        m.style.height = .65 * a + "px";
        m = document.getElementById("anysign_title");
        m.style.height = .1 * a + "px";
        document.getElementById("single_scrollbar").style.height = .1 * a + "px";
        m = document.getElementById("btnContainerOuter");
        m.style.height = .1 * a + "px"
      } else 0 == a && (0 == window.orientation || 180 == window.orientation ? (a = .9 * getWindowHeight(), m = getWindowWidth()) : (c = 569 > getWindowWidth() ? .75 * getWindowHeight() : getWindowHeight(), b = getWindowWidth(), a = c, m = b), b = document.getElementById("anysignCanvas"), c = b.getContext("2d"), isDrawn && (p = document.createElement("canvas"), q = p.getContext("2d"), v = n = f = d = l = paste_padding, 0 > (e = minX - l) && (d = minX, e = 0), 0 > (r = minY - l) && (f = minY, r = 0), (u = maxX + l) > b.width && (n = 0, u = b.width), (l = maxY + l) > b.height && (v = 0, l = b.height), d = maxX - minX + d + n, f = maxY - minY + f + v, e = c.getImageData(e, r, u - e, l - r), p.width = d, p.height = f), r = document.getElementById("dialog"), r.style.height = a + "px", r.style.width = m + "px", b.height = a, 10 > b.width && (b.width *= m), b.width < m && (b.width = m), 0 == window.orientation || 180 == window.orientation ? (b.height *= .7, m = document.getElementById("container"), m.style.overflowX = "scroll", m.style.overflowY = "hidden", m.style.height = .7 * a + "px", m = document.getElementById("anysign_title"), m.style.height = .1 * a + "px", m = document.getElementById("btnContainerOuter"), m.style.height = .2 * a + "px", a = document.getElementById("btnContainerInner"), a.style.marginBottom = 0) : (b.height *= .6, m = document.getElementById("container"), m.style.overflowX = "scroll", m.style.overflowY = "hidden", m.style.height = .6 * a + "px", m = document.getElementById("anysign_title"), m.style.height = .1 * a + "px", m = document.getElementById("btnContainerOuter"), m.style.height = .3 * a + "px", a = document.getElementById("btnContainerInner"), a.style.marginBottom = m.style.height));
      null != tmp_canvas && (tmp_canvas.width = b.width, tmp_canvas.height = b.height);
      c.strokeStyle = signObjTmp ? signObjTmp.penColor: "black";
      c.lineWidth = base_stroke_width;
      c.lineCap = "round";
      c.lineJoin = "round";
      c.shadowBlur = 5;
      tmp_ctx.strokeStyle = signObjTmp ? signObjTmp.penColor: "black";
      tmp_ctx.lineWidth = base_stroke_width;
      tmp_ctx.lineCap = "round";
      tmp_ctx.lineJoin = "round";
      tmp_ctx.shadowBlur = 5;
      isDrawn && (a = b.width > d ? b.height >= f ? 1 : b.height / f: b.width / b.height > d / f ? b.height / f: b.width / d, q.putImageData(e, 0, 0), q = document.createElement("canvas"), m = q.getContext("2d"), q.width = d * a, q.height = f * a, m.scale(a, a), m.drawImage(p, 0, 0), c.clearRect(0, 0, b.width, b.height), c.drawImage(q, 0, 0), minY = minX = 0, maxX *= a, maxY *= a);
      tmp_canvas.getContext("2d").clearRect(0, 0, b.width, b.height)
    }
  };
window.addEventListener("orientationchange", fresh);
window.addEventListener("resize", fresh);
function onloadAnysignView(a, b) {
  this.isSign = a;
  this.identify_callback = b;
  onload_singleSignCanvas();
  onload_singleSingScrollAction()
}
function onload_singleSignCanvas() {
  if (document.getElementById("anysignCanvas")) {
    canvas = document.getElementById("anysignCanvas");
    ctx = canvas.getContext("2d");
    var a = getWindowHeight(),
      b = getWindowWidth();
    10 > canvas.width && (canvas.width = b * canvas.width * .99);
    canvas.width < b && (canvas.width = .99 * b);
    b = document.getElementById("container");
    b.style.overflowX = "scroll";
    b.style.overflowY = "hidden";
    canvas.height = .7 * a;
    document.getElementById("anysign_title").style.height = .1 * a + "px";
    document.getElementById("single_scrollbar").style.height = .1 * a + "px";
    document.getElementById("btnContainerOuter").style.height = .1 * a + "px";
    "ontouchstart" in document.documentElement ? (canvas.ontouchstart = function(a) {
      if (isCopyingImg) return ! 1;
      isDown = !0;
      ctx.strokeStyle = signObjTmp ? signObjTmp.penColor: "black";
      ctx.lineWidth = base_stroke_width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 5
    },
      canvas.ontouchmove = function(a) {
        if (isDown && !isCopyingImg) {
          var c = JQuery_Capable.offset(a.target);
          "undefined" !== typeof a.targetTouches ? (curX = Math.floor(a.targetTouches[0].pageX - c.left), curY = Math.floor(a.targetTouches[0].pageY - c.top)) : (curX = Math.floor(a.pageX - c.left), curY = Math.floor(a.pageY - c.top));
          c = a.timeStamp;
          0 !== signTrachPointCount || isNaN(c) || (firstPointTime = c);
          0 < curX && curY <= canvas.height && (signTrack = isNaN(c) ? signTrack + (curX + "," + curY + "," + base_stroke_width + ",0\n") : signTrack + (curX + "," + curY + "," + base_stroke_width + "," + (c - firstPointTime) + "\n"), signTrachPointCount += 1, curX > maxX && (maxX = curX), curX < minX && (minX = curX), curY > maxY && (maxY = curY), curY < minY && (minY = curY), points.push({
            x: curX,
            y: curY
          }), onPaint(), 0 < curX && 0 < curY && sbuilder.push(curX, curY), lastX = curX, lastY = curY);
          preventDefault(a)
        }
      },
      canvas.ontouchend = function(a) {
        a = a.timeStamp;
        signTrack = isNaN(a) ? signTrack + "0,0,-1,0\n": signTrack + ("0,0,-1," + (a - firstPointTime) + "\n");
        signTrachPointCount += 1;
        sbuilder.push("-1", "0");
        isCopyingImg = !0;
        isDown = !1;
        canvas = document.getElementById("anysignCanvas");
        ctx = canvas.getContext("2d");
        ctx.drawImage(canvas, 0, 0);
        points = [];
        isCopyingImg = !1
      },
      canvas.ontouchcancel = canvas.ontouchend) : (canvas.onmousedown = function(a) {
      isDown = !0;
      ctx.strokeStyle = signObjTmp ? signObjTmp.penColor: "black";
      ctx.lineWidth = base_stroke_width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 5
    },
      canvas.onmousemove = function(a) {
        if (isDown) {
          var c = JQuery_Capable.offset(a.target),
            b = document.body.scrollTop | document.documentElement.scrollTop,
            e = document.body.scrollLeft | document.documentElement.scrollLeft;
          "undefined" !== typeof a.targetTouches ? (curX = Math.floor(a.targetTouches[0].clientX - c.left), curY = Math.floor(a.targetTouches[0].clientY - c.top)) : (curX = Math.floor(a.clientX - c.left), curY = Math.floor(a.clientY - c.top));
          c = a.timeStamp;
          0 !== signTrachPointCount || isNaN(c) || (firstPointTime = c);
          0 < curX && (signTrack = isNaN(c) ? signTrack + (curX + "," + curY + "," + base_stroke_width + ",0\n") : signTrack + (curX + "," + curY + "," + base_stroke_width + "," + (c - firstPointTime) + "\n"), signTrachPointCount += 1, curY += b, curX += e, curX > maxX && (maxX = curX), curX < minX && (minX = curX), curY > maxY && (maxY = curY), curY < minY && (minY = curY), points.push({
            x: curX,
            y: curY
          }), onPaint(), 0 < curX && 0 < curY && sbuilder.push(curX, curY), lastX = curX, lastY = curY);
          preventDefault(a)
        }
      },
      canvas.onmouseup = function(a) {
        var c = JQuery_Capable.offset(a.target);
        "undefined" !== typeof a.targetTouches ? (curX = Math.floor(a.targetTouches[0].clientX - c.left), curY = Math.floor(a.targetTouches[0].clientY - c.top)) : (curX = Math.floor(a.clientX - c.left), curY = Math.floor(a.clientY - c.top));
        a = a.timeStamp;
        signTrack = isNaN(a) ? signTrack + "0,0,-1,0\n": signTrack + ("0,0,-1," + (a - firstPointTime) + "\n");
        signTrachPointCount += 1;
        isDown && sbuilder.push("-1", "0");
        isDown = !1;
        a = document.getElementById("anysignCanvas");
        a.getContext("2d").drawImage(a, 0, 0);
        points = []
      },
      canvas.onmouseout = canvas.onmouseup);
    ctx.strokeStyle = signObjTmp ? signObjTmp.penColor: "black";
    ctx.lineWidth = base_stroke_width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 5
  } else alert("????????,???safari?chrome????????\n\n??????????" + navigator.userAgent)
}
function onload_singleSingScrollAction() {
  function a() {
    d -= q;
    d > f ? setTimeout(a, p) : d = f;
    e.scrollLeft = d;
    0 >= d && (e.style.borderColor = "#FF0000", setTimeout(function() {
        e.style.borderColor = "gray"
      },
      1E3))
  }
  function b() {
    d += q;
    d < f ? (e.scrollLeft = d, setTimeout(b, p)) : (d = f, e.scrollLeft = d);
    d >= e.scrollWidth - e.clientWidth && (e.style.borderColor = "#FF0000", setTimeout(function() {
        e.style.borderColor = "gray"
      },
      1E3))
  }
  var c = 0,
    d = 0,
    f = 0,
    e = document.getElementById("container");
  e.addEventListener("scroll",
    function() {
      d = e.scrollLeft
    });
  document.getElementById("single_scrollbar_up").addEventListener("click",
    function() {
      c = Math.ceil(1 * e.clientWidth / 3);
      f = 0 <= d - c ? d - c: 0;
      a()
    });
  document.getElementById("single_scrollbar_down").addEventListener("click",
    function() {
      var a = e.clientWidth,
        n = e.scrollWidth;
      c = Math.ceil(1 * a / 3);
      f = d + c >= n - a ? n - a: d + c;
      b()
    });
  var p = 50,
    q = 20
}
var onPaint = function() {
  if (3 > points.length) {
    var a = points[0];
    ctx.beginPath();
    ctx.strokeStyle = signObjTmp.penColor;
    ctx.fillStyle = signObjTmp.penColor;
    ctx.arc(a.x, a.y, ctx.lineWidth / 2, 0, 2 * Math.PI, !0);
    ctx.fill();
    ctx.closePath()
  } else {
    ctx.beginPath();
    ctx.strokeStyle = signObjTmp.penColor;
    ctx.fillStyle = signObjTmp.penColor;
    ctx.moveTo(points[0].x, points[0].y);
    for (a = 1; a < points.length - 1; a++) ctx.quadraticCurveTo(points[a].x, points[a].y, (points[a].x + points[a + 1].x) / 2, (points[a].y + points[a + 1].y) / 2);
    ctx.stroke();
    ctx.closePath();
    isDrawn = !0
  }
};
function clear_canvas() {
  var a = document.getElementById("anysignCanvas"),
    b = a.getContext("2d");
  b.clearRect(0, 0, a.width, a.height);
  b.closePath();
  b = a.height;
  a.width = a.width;
  a.height = b;
  calculatedSigHeight = calculatedSigWidth = 0;
  signTrack = "";
  firstPointTime = signTrachPointCount = 0;
  points = [];
  sbuilder = [];
  minY = minX = 9999;
  maxY = maxX = 0;
  imageDataTmp = null;
  isDrawn = !1
}
function sign_confirm() {
  if (isDrawn) if (signObjTmp.isdistinguish) {
    sbuilder.push("-1", "-1");
    showProgress("???????????");
    for (var a = "",
           b = signObjTmp.signer.UName.replace(/(.)(?=[^$])/g, "$1,").split(","), c = 0; c < b.length; c++) checkText(b[c]) || (a += b[c]); (new OCRObj(signObjTmp.ocrCapture)).recognition(sbuilder, a,
      function(a, c) {
        closeWindow();
        0 == a ? (a = document.getElementById("anysignCanvas"), imageDataTmp = a.getContext("2d").getImageData(minX - paste_padding, minY - paste_padding, maxX - minX + paste_padding + paste_padding + paste_padding, maxY - minY + paste_padding + paste_padding + paste_padding), signResCallback && (c = getSignData().substr(22, getSignData().length), a = document.getElementById("anysignCanvas"), signResCallback(signObjTmp.cid, c, c, signTrack, signTrachPointCount, a.width, a.height)), document.body.parentNode.style.overflow = "scroll", isSign = !1) : ("????" == a ? closeWindow() : null == identify_callback ? console.log("the identify callback is not definition") : identify_callback(a), clear_canvas())
      });
    sbuilder = []
  } else a = document.getElementById("anysignCanvas"),
    imageDataTmp = a.getContext("2d").getImageData(minX - paste_padding, minY - paste_padding, maxX - minX + paste_padding + paste_padding + paste_padding, maxY - minY + paste_padding + paste_padding + paste_padding),
  signResCallback && (b = getSignData().substr(22, getSignData().length), a = document.getElementById("anysignCanvas"), signResCallback(signObjTmp.cid, b, b, signTrack, signTrachPointCount, a.width, a.height)),
    document.body.parentNode.style.overflow = "scroll",
    isSign = !1;
  else custom_alert3("?????", "2000")
}
function setSignResCallback(a, b) {
  isSignOrCom(a.cid) ? (signObjTmp = a, signResCallback = b, a = document.getElementById("anysignCanvas"), a = a.getContext("2d"), a.strokeStyle = signObjTmp ? signObjTmp.penColor: "black") : (commentObjTmp = a, signResCallback = b, a = document.getElementById("comment_canvas"), a = a.getContext("2d"), a.strokeStyle = commentObjTmp ? commentObjTmp.penColor: "black", comment_canvas.strokeStyle = commentObjTmp ? commentObjTmp.penColor: "black")
}
function setCanvasHeight(a) {
  var b = document.getElementById("anysignCanvas");
  0 < a && (b.height = a, b && (b.height = a))
}
function getSignData() {
  if (imageDataTmp) {
    var a = document.createElement("canvas"),
      b = a.getContext("2d"),
      c = window.devicePixelRatio ? window.devicePixelRatio: 1;
    a.width = imageDataTmp.width / c;
    a.height = imageDataTmp.height / c;
    c = 1;
    signObjTmp.singleWidth / signObjTmp.singleHeight <= a.width / a.height ? signObjTmp.singleWidth <= a.width && (c = signObjTmp.singleWidth / a.width) : signObjTmp.singleHeight <= a.height && (c = signObjTmp.singleHeight / a.height);
    a.width *= c;
    a.height *= c;
    calculatedSigWidth = a.width;
    calculatedSigHeight = a.height;
    c = document.createElement("canvas");
    c.width = imageDataTmp.width;
    c.height = imageDataTmp.height;
    c.getContext("2d").putImageData(imageDataTmp, 0, 0);
    b.drawImage(c, 0, 0, calculatedSigWidth, calculatedSigHeight);
    return a.toDataURL()
  }
  return null
}
function getRawSigHeight() {
  return imageDataTmp ? void 0 !== window.devicePixelRatio ? imageDataTmp.height / window.devicePixelRatio: imageDataTmp.height: 0
}
function getRawSigWidth() {
  return imageDataTmp ? void 0 !== window.devicePixelRatio ? imageDataTmp.width / window.devicePixelRatio: imageDataTmp.width: 0
}
function cancelSign() {
  clear_canvas();
  document.getElementById("dialog").style.display = "none";
  document.body.scroll = "yes";
  isSign = !1;
  signResCallback && signResCallback(signObjTmp.cid, null, null, 0)
}
function setIsAnysignInputDlgShown(a) {
  isAnysignInputDlgShown = a
}
function testGetImageData() {}
function testEnc() {
  var a = tripleDesEncrypt("abcdefg", "000102030405060708090a0b0c0d0e0f");
  document.getElementById("result").value = a
}
function testEncAndDec() {
  var a = tripleDesEncrypt("abdfdsafdasfcdef132432432432g???,,,fdafdas", "133434") + "",
    b = tripleDesDecrypt(a, "133434") + "";
  b = anysign.hex.hexStrToUint8Str(b);
  a = "abdfdsafdasfcdef132432432432g???,,,fdafdas\n" + (a + "\n") + (b + "\n");
  anysign.json.stringToObj('{"Alg":"111","Value":"2222"}');
  document.getElementById("result").value = a
}
function custom_alert(a, b) {
  showMsgDialog(a)
}
function preventDefault(a) {
  a = a || window.event;
  a.preventDefault && a.preventDefault();
  a.returnValue = !1
}
var JQuery_Capable = {
    offset: function(a) {
      var b = {
          top: 0,
          left: 0
        },
        c = a && a.ownerDocument;
      if (c) {
        var d = c.documentElement;
        "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
        a = JQuery_Capable.getWindow(c);
        return {
          top: b.top + (a.pageYOffset || d.scrollTop) - (d.clientTop || 0),
          left: b.left + (a.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
        }
      }
    },
    getWindow: function(a) {
      return JQuery_Capable.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    },
    isWindow: function(a) {
      return null != a && a == a.window
    }
  },
  isIe = document.all ? !0 : !1,
  messContent;
function setSelectState(a) {
  for (var b = document.getElementsByTagName("select"), c = 0; c < b.length; c++) b[c].style.visibility = a
}
function custom_alert3(a, b) {
  showMsgDialog3(a, b)
}
function showMsgDialog3(a, b) {
  showMessageBox3("??????", a, null, 350, b)
}
function showMessageBox3(a, b, c, d, f) {
  closeWindow();
  c = getWindowHeight();
  d = getWindowWidth();
  isIe && setSelectState("hidden");
  a = document.createElement("div");
  a.id = "back";
  a.style.cssText = "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:none;width:" + d + "px;height:" + c + "px;" + (isIe ? "filter:alpha(opacity=0);": "opacity:0;");
  c = document.createElement("div");
  c.id = "mesWindow";
  c.innerHTML = "<div id='mesWindowContent3'>" + b + "</div>";
  a.appendChild(c);
  document.body.appendChild(a);
  showBackground(a, 80);
  "ontouchstart" in document.documentElement ? (a.ontouchstart = function(a) {
    return "mesWindowBtnOk" !== a.target.id ? (preventDefault(a), !1) : !0
  },
    a.ontouchmove = function(a) {
      preventDefault(a)
    }) : (a.onmousedown = function(a) {
    "mesWindowBtnOk" !== a.target.id && preventDefault(a)
  },
    a.onmousemove = function(a) {
      preventDefault(a)
    });
  setTimeout(function() {
      closeWindow()
    },
    f)
}
function showMessageBox2(a, b, c, d) {
  closeWindow();
  c = getWindowHeight();
  d = getWindowWidth();
  isIe && setSelectState("hidden");
  a = document.createElement("div");
  a.id = "back";
  a.style.cssText = "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" + d + "px;height:" + c + "px;" + (isIe ? "filter:alpha(opacity=0);": "opacity:0;");
  c = document.createElement("div");
  c.id = "mesWindow";
  c.innerHTML = "<div id='mesWindowContent'>" + b + "</div><div id='mesWindowBottom'><input id='mesWindowBtnOk' type='button' onclick='closeWindow();'value='??' /></div>";
  a.appendChild(c);
  document.body.appendChild(a);
  showBackground(a, 80);
  "ontouchstart" in document.documentElement ? (a.ontouchstart = function(a) {
    return "mesWindowBtnOk" !== a.target.id ? (preventDefault(a), !1) : !0
  },
    a.ontouchmove = function(a) {
      preventDefault(a)
    }) : (a.onmousedown = function(a) {
    "mesWindowBtnOk" !== a.target.id && preventDefault(a)
  },
    a.onmousemove = function(a) {
      preventDefault(a)
    })
}
function showBackground(a, b) {
  if (isIe) a.filters.alpha.opacity += 1,
  a.filters.alpha.opacity < b && setTimeout(function() {
      showBackground(a, b)
    },
    5);
  else {
    var c = parseFloat(a.style.opacity);
    c += .01;
    a.style.opacity = c;
    c < b / 100 && setTimeout(function() {
        showBackground(a, b)
      },
      5)
  }
}
function closeWindow() {
  null != document.getElementById("back") && document.getElementById("back").parentNode.removeChild(document.getElementById("back"));
  null != document.getElementById("mesWindow") && document.getElementById("mesWindow").parentNode.removeChild(document.getElementById("mesWindow"));
  isIe && setSelectState("")
}
function showMsgDialog(a) {
  showMessageBox2("??????", a, null, 350)
}
function showProgress(a) {
  showMsgProgress("??????", a, null, 350)
}
function showMsgProgress(a, b, c, d) {
  closeWindow();
  c = getWindowHeight() / .99;
  d = getWindowWidth() / .99;
  isIe && setSelectState("hidden");
  a = document.createElement("div");
  a.id = "back";
  a.style.cssText = "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" + d + "px;height:" + c + "px;" + (isIe ? "filter:alpha(opacity=0);": "opacity:0;");
  c = document.createElement("div");
  c.id = "mesWindow";
  c.innerHTML = "<div id='mesWindowContent'>" + b + "</div>";
  a.appendChild(c);
  document.body.appendChild(a);
  showBackground(a, 80)
}
var RESULT_OK = 0,
  RESULT_ERROR = -1,
  EC_API_NOT_INITED = 1,
  EC_WRONG_CONTEXT_ID = 2,
  EC_NATIVE_EXCEPTION = 3,
  EC_TEMPLATE_NOT_SET = 4,
  EC_COMMENT_ALREADY_SHOW = 5,
  CALLBACK_TYPE_SIGNATURE = 10,
  CALLBACK_TYPE_DIALOG_CANCEL = 11,
  CALLBACK_TYPE_COMMENTSIGN = 12,
  CALLBACK_TYPE_GETVERSION = 13,
  CALLBACK_TYPE_START_RECORDING = 14,
  CALLBACK_TYPE_STOP_RECORDING = 15,
  isCommentShow = !1;
function anysignWebImpl() {
  function a() {
    q = c = null;
    f = d = !1;
    l = [];
    n = [];
    v = [];
    u = []
  }
  function b(a, c, b, d, f, e) {
    a.Points || (a.Points = new PlainData);
    a.Points.P10Data || (a.Points.P10Data = new P10Data);
    a.Points.CertOID || (a.Points.CertOID = new CertOID);
    a.Points.CertOID.BioFeature || (a.Points.CertOID.BioFeature = new BioFeature);
    a.Points.CertOID.IDNumber = a.Signer.IDNumber;
    a.Points.CertOID.IDType = a.Signer.IDType;
    a.Points.CertOID.BioFeature.Script = new Script;
    a.Points.CertOID.ClientOS = new ClientOS;
    a = a.Points.CertOID.BioFeature.Script;
    a.Color = parseInt("0x" + c.substr(1)) + "";
    a.Data = anysign.zip.compressToB64(anysign.charset.strToUint8ArrayAscII(b));
    a.Count = d + "";
    a.Device = new Device;
    a.Device.Width = 99999;
    a.Device.Height = 99999;
    a.RefWidth = f;
    a.RefHeight = e
  }
  var c, d = !1,
    f = !1,
    e, p, q, l = [],
    n = [],
    v = [],
    r = [],
    u = [],
    m;
  this._initAnySignApi = function(b, d) {
    if (!b || !d) return ! 1;
    a();
    c = b;
    q = d;
    return ! 0
  };
  this._addDataObj = function(a, c) {
    var b;
    if (b = !d) b = 50 <= a && 59 >= a || 500 <= a && 599 >= a || 10 <= a && 19 >= a ? !0 : !1;
    return b ? (c.cid = a, r[a] = c, b = new DataObj, b.Format = c.format, b.Name = c.name, b.Cid = a, v[a] = b, !0) : !1
  };
  this._addSignatureObj = function(a, c) {
    var b;
    if (b = !d && c) b = 20 <= a && 29 >= a || 200 <= a && 299 >= a ? !0 : !1;
    return b ? (c.cid = a, n[a] = c, b = new SignatureObj, b.Cid = a, b.Signer = c.signer, b.SignRule = c.signRule, b.IsTSS = c.isTSS, b.TimeTag = c.timeTag, l[a] = b, !0) : !1
  };
  this._addCommentObj = function(a, c) {
    var b;
    if (b = !d && c) b = 30 <= a && 39 >= a || 300 <= a && 399 >= a ? !0 : !1;
    return b ? (c.cid = a, n[a] = c, b = new MassSignObj, b.Cid = a, b.Signer = c.signer, b.SignRule = c.signRule, b.IsTSS = c.isTSS, l[a] = b, !0) : !1
  };
  this._addEvidenceHash = function(a, c, b, d, f) {
    a = l[a];
    a.Points || (a.Points = new PlainData);
    a.Points.P10Data || (a.Points.P10Data = new P10Data);
    a.Points.CertOID || (a.Points.CertOID = new CertOID);
    a.Points.CertOID.BioFeature || (a.Points.CertOID.BioFeature = new BioFeature);
    if (a.Points.CertOID.BioFeature.Script) return ! 1;
    if (d == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || d == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
      var g = new PhotoEvidence;
      g.Format = b;
      g.Hash = c;
      g.BioType = d;
      a.Points.CertOID.BioFeature.PhotoArray[f] = g;
      return ! 0
    }
    return d == BioType.SOUND_SIGNER_RETELL || d == BioType.SOUND_SIGNER_OTHER ? (g = new SoundEvidence, g.Format = b, g.Hash = c, g.BioType = d, a.Points.CertOID.BioFeature.SoundArray[f] = g, !0) : !1
  };
  this._addEvidenceHashData = function(a, c, b, d, f) {
    a = l[a];
    a.Points || (a.Points = new PlainData);
    a.Points.P10Data || (a.Points.P10Data = new P10Data);
    a.Points.CertOID || (a.Points.CertOID = new CertOID);
    a.Points.CertOID.BioFeature || (a.Points.CertOID.BioFeature = new BioFeature);
    return a.Points.CertOID.BioFeature.Script ? !1 : c ? (OtherEvidenceobj = new OtherEvidence, OtherEvidenceobj.Hash = c, OtherEvidenceobj.Format = b, OtherEvidenceobj.BioType = d, a.Points.CertOID.BioFeature.OtherArray[f] = OtherEvidenceobj, !0) : !1
  };
  this._addEvidence = function(a, c, b, d, f) {
    a = l[a];
    a.Points || (a.Points = new PlainData);
    a.Points.P10Data || (a.Points.P10Data = new P10Data);
    a.Points.CertOID || (a.Points.CertOID = new CertOID);
    a.Points.CertOID.BioFeature || (a.Points.CertOID.BioFeature = new BioFeature);
    if (a.Points.CertOID.BioFeature.Script) return ! 1;
    if (d == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || d == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
      var g = new PhotoEvidence;
      g.Format = b;
      c = sha1Digest(c);
      g.Hash = "BS64:" + c.toString().toUpperCase();
      g.BioType = d;
      a.Points.CertOID.BioFeature.PhotoArray[f] = g;
      return ! 0
    }
    return d == BioType.SOUND_SIGNER_RETELL || d == BioType.SOUND_SIGNER_OTHER ? (g = new SoundEvidence, g.Format = b, c = sha1Digest(c), g.Hash = "BS64:" + c.toString().toUpperCase(), g.BioType = d, a.Points.CertOID.BioFeature.SoundArray[f] = g, !0) : !1
  };
  this._addEvidenceV2 = function(a, c, b, d) {
    a = l[a];
    a.Points || (a.Points = new PlainData);
    a.Points.P10Data || (a.Points.P10Data = new P10Data);
    a.Points.CertOID || (a.Points.CertOID = new CertOID);
    a.Points.CertOID.BioFeature || (a.Points.CertOID.BioFeature = new BioFeature);
    if (a.Points.CertOID.BioFeature.Script) return ! 1;
    if (b == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || b == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
      var g = new PhotoEvidence;
      g.Format = DataFormat.IMAGE_JPEG;
      c = sha1Digest(c);
      g.Hash = "BS64:" + c.toString().toUpperCase();
      g.BioType = b;
      a.Points.CertOID.BioFeature.PhotoArray[d] = g;
      return ! 0
    }
    return b == BioType.SOUND_SIGNER_RETELL || b == BioType.SOUND_SIGNER_OTHER ? (g = new SoundEvidence, g.Format = DataFormat.MEDIA_3GP, c = sha1Digest(c), g.Hash = "BS64:" + c.toString().toUpperCase(), g.BioType = b, a.Points.CertOID.BioFeature.SoundArray[d] = g, !0) : !1
  };
  this._addChachetObj = function(a) {
    return ! d && a ? (u.push(a), !0) : !1
  };
  this._setTemplate = function(a, c, b, d) {
    if (!f && 10 <= a && 19 >= a) {
      if (null == c || 0 === c.length) return anysign.logger.e("contentUtf8Str must not be null or empty"),
        !1;
      if (null == b || 0 === b.length) return anysign.logger.e("businessId must not be null or empty"),
        !1;
      if (null == d || 0 === d.length) return anysign.logger.e("template_serial must not be null or empty"),
        !1;
      e = b;
      p = sha1DigestBase64(b) + "";
      b = new DataObj;
      b.Cid = a;
      b.Data = c;
      if (10 === a || 13 === a) c = new PDFCrdRule,
        c.DocFormat = a,
        c.DocStyleTid = d,
        b.PDFCrdRule = c;
      d = new DataConfig;
      d.cid = a;
      d.nessesary = !0;
      v[a] = b;
      r[a] = d;
      return f = !0
    }
    return ! 1
  };
  this._setTID = function(a) {
    return ! 0
  };
  this._setData = function(a, c) {
    a: {
      for (d in r) {
        var b = r[d];
        if (b && b.cid == a) {
          var d = b;
          break a
        }
      }
      d = null
    }
    return d && c ? ("string" === typeof c ? (a = v[a], a.Data = Base64.encodeUint8Array(anysign.charset.strToUtf8ArrayUint8(c))) : c instanceof Uint8Array && (a = v[a], a.Data = Base64.encodeUint8Array(c)), !0) : !1
  };
  this._commitConfig = function() {
    return d = !0
  };
  this._resetConfig = function() {
    a();
    return ! 0
  };
  this._showSignatureDialog = function(a) {
    if (d) {
      if (f) {
        if (null == n[a]) return EC_WRONG_CONTEXT_ID;
        $("#btnOK").css("pointer-events", "none");
        setTimeout(function() {
            $("#btnOK").css("pointer-events", "auto")
          },
          400);
        $("#btnClear").css("pointer-events", "none");
        setTimeout(function() {
            $("#btnClear").css("pointer-events", "auto")
          },
          400);
        $("#btnCancel").css("pointer-events", "none");
        setTimeout(function() {
            $("#btnCancel").css("pointer-events", "auto")
          },
          400);
        $("#single_scrollbar_up").css("pointer-events", "none");
        setTimeout(function() {
            $("#single_scrollbar_up").css("pointer-events", "auto")
          },
          400);
        $("#single_scrollbar_down").css("pointer-events", "none");
        setTimeout(function() {
            $("#single_scrollbar_down").css("pointer-events", "auto")
          },
          400);
        onloadAnysignView(!0, m);
        var g = n[a];
        a = getWindowHeight();
        var e = getWindowWidth(),
          J = document.getElementById("dialog");
        J.style.height = a;
        J.style.width = e;
        J.style.display = "block";
        a = document.getElementById("anysign_title");
        e = g.title;
        J = e.substring(g.titleSpanFromOffset, g.titleSpanToOffset + 1).big();
        a.innerHTML = e.substring(0, g.titleSpanFromOffset) + J + e.substring(g.titleSpanToOffset + 1, e.length);
        setSignResCallback(g,
          function(a, d, f, e, h, k, E) {
            c && (f ? (a = l[a], b(a, g.penColor, e, h, k, E), a.ImageSize = new ImageSize(calculatedSigWidth, calculatedSigHeight), a.Image = d, a.SignRule && a.SignRule instanceof SignRule_XYZ && (d = a.SignRule.XYZRule, "dp" === d.Unit ? a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + calculatedSigWidth,
              Bottom: d.Top - calculatedSigHeight,
              Pageno: d.Pageno,
              Unit: d.Unit
            }: "pt" === d.Unit && (a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + .45 * calculatedSigWidth,
              Bottom: d.Top - .45 * calculatedSigHeight,
              Pageno: d.Pageno,
              Unit: d.Unit
            })), c(g.cid, CALLBACK_TYPE_SIGNATURE, f)) : c(g.cid, CALLBACK_TYPE_DIALOG_CANCEL, null), clear_canvas(), document.getElementById("dialog").style.display = "none", setIsAnysignInputDlgShown(!1))
          });
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK
      }
      return EC_TEMPLATE_NOT_SET
    }
    return EC_API_NOT_INITED
  };
  this._showSingleSignDialog = function(a) {
    if (d) {
      if (f) {
        if (null == n[a]) return EC_WRONG_CONTEXT_ID;
        var g = n[a];
        singleSignatrueUI(g, m);
        setSignResCallback(g,
          function(a, d, f, e, h, m, n) {
            c && (f ? (a = l[a], b(a, g.penColor, e, h, m, n), a.ImageSize = new ImageSize(m, n), a.Image = d, a.SignRule && a.SignRule instanceof SignRule_XYZ && (d = a.SignRule.XYZRule, "dp" === d.Unit ? a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + m,
              Bottom: d.Top - n,
              Pageno: d.Pageno,
              Unit: d.Unit
            }: "pt" === d.Unit && (a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + .45 * m,
              Bottom: d.Top - .45 * n,
              Pageno: d.Pageno,
              Unit: d.Unit
            })), c(g.cid, CALLBACK_TYPE_SIGNATURE, f)) : c(g.cid, CALLBACK_TYPE_DIALOG_CANCEL, null), setIsAnysignInputDlgShown(!1))
          });
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK
      }
      return EC_TEMPLATE_NOT_SET
    }
    return EC_API_NOT_INITED
  };
  this._showCommentDialog = function(a) {
    if (d) {
      if (f) {
        if (null == n[a]) return EC_WRONG_CONTEXT_ID;
        if (isCommentShow) return EC_COMMENT_ALREADY_SHOW;
        var b = n[a];
        setSignResCallback(b,
          function(a, d, f, g, e, h, m) {
            c && (f ? (a = l[a], a.ImageSize = new ImageSize(canvas_width, canvas_height), a.Image = d, a.SignRule && a.SignRule instanceof SignRule_XYZ && (d = a.SignRule.XYZRule, "dp" === d.Unit ? a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + canvas_width,
              Bottom: d.Top - canvas_height,
              Pageno: d.Pageno,
              Unit: d.Unit
            }: "pt" === d.Unit && (a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + .45 * canvas_width,
              Bottom: d.Top - .45 * canvas_height,
              Pageno: d.Pageno,
              Unit: d.Unit
            })), c(b.cid, CALLBACK_TYPE_COMMENTSIGN, f)) : c(b.cid, CALLBACK_TYPE_DIALOG_CANCEL, null), clear_canvas(), document.getElementById("dialog").style.display = "none", setIsAnysignInputDlgShown(!1))
          }); (new anysignCommentUI).onload_commentSignCanvas(b, m);
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK
      }
      return EC_TEMPLATE_NOT_SET
    }
    return EC_API_NOT_INITED
  };
  this._showCommentDialogSign = function(a) {
    if (d) {
      if (f) {
        if (null == n[a]) return EC_WRONG_CONTEXT_ID;
        if (isCommentShow) return EC_COMMENT_ALREADY_SHOW;
        var b = n[a];
        setSignResCallback(b,
          function(a, d, f, g, e, h, m) {
            c && (f ? (a = l[a], a.ImageSize = new ImageSize(canvas_width, canvas_height), a.Image = d, a.SignRule && a.SignRule instanceof SignRule_XYZ && (d = a.SignRule.XYZRule, "dp" === d.Unit ? a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + canvas_width,
              Bottom: d.Top - canvas_height,
              Pageno: d.Pageno,
              Unit: d.Unit
            }: "pt" === d.Unit && (a.SignRule.XYZRule = {
              Left: d.Left,
              Top: d.Top,
              Right: d.Left + .45 * canvas_width,
              Bottom: d.Top - .45 * canvas_height,
              Pageno: d.Pageno,
              Unit: d.Unit
            })), c(b.cid, CALLBACK_TYPE_COMMENTSIGN, f)) : c(b.cid, CALLBACK_TYPE_DIALOG_CANCEL, null), clear_canvas(), document.getElementById("dialog").style.display = "none", setIsAnysignInputDlgShown(!1))
          }); (new anysignCommentUI_Sign).onload_commentSignCanvas(b, m);
        setIsAnysignInputDlgShown(!0);
        return RESULT_OK
      }
      return EC_TEMPLATE_NOT_SET
    }
    return EC_API_NOT_INITED
  };
  this._setIdentifyCallBack = function(a) {
    m = a
  };
  this._startOCR = function(a) { (new OCRObj).setOCRCapture(a)
  };
  this._takePicture = function(a) {
    return ! 1
  };
  this._picturePreview = function(a) {
    return ! 1
  };
  this._startMediaRecording = function(a) {
    return ! 1
  };
  this._audioPreview = function(a) {
    return ! 1
  };
  this._mediaPreview = function(a) {
    return ! 1
  };
  this._startMediaRecording = function(a) {
    return ! 1
  };
  this._finishMediaRecording = function(a) {
    return ! 1
  };
  this._isReadyToUpload = function() {
    if (!d || !f) return ! 1;
    var a = !1,
      c;
    for (c in n) {
      var b = n[c],
        e = l[b.cid];
      if (b.nessesary) {
        if (null == e) return ! 1;
        if (isSignOrCom(e.Cid)) {
          if (null == e.Points || null == e.Points.CertOID || null == e.Points.CertOID.BioFeature || null == e.Points.CertOID.BioFeature.Script) return ! 1
        } else if (null == e.Image) return ! 1
      }
      isSignOrCom(e.Cid) && null != e.Points && null != e.Image && (a = !0);
      if (!a) return ! 1
    }
    for (c in r) if (b = r[c], a = v[b.cid], (null == a || null == a.Data) && b.nessesary) return ! 1;
    return ! 0
  };
  this._saveBusinessSession = function(a) {
    a = md5Digest("424A4341" + a) + "";
    a = a.substring(0, 24);
    var c = new SaveFormInfo;
    c.WONo = e;
    c.WOHash = p;
    c.Channel = q;
    var b;
    for (b in n) {
      var d = n[b];
      c.USignConfigs.push(d);
      c.USignObjs.push(l[d.cid])
    }
    for (b in r) d = r[b],
      c.DataConfigs.push(d),
      c.DataObjs.push(v[d.cid]);
    c.CachetArray = u;
    c.EncAlg = EncAlgType.EncAlg;
    c = anysign.json.stringify(c);
    return tripleDesEncrypt(c, a) + ""
  };
  this._restoreBusinessSession = function(a, c) {
    c = md5Digest("424A4341" + c) + "";
    c = c.substring(0, 24);
    a = tripleDesDecrypt(a, c) + "";
    a = anysign.hex.hexStrToUint8Str(a);
    a = anysign.json.stringToObj(a);
    e = a.WONo;
    p = a.WOHash;
    q = a.Channel;
    EncAlgType.EncAlg = a.EncAlg;
    var b;
    for (b in a.USignConfigs) {
      c = a.USignConfigs[b].cid;
      for (var g in a.USignObjs) {
        var h = a.USignObjs[g].Cid;
        c == h && (n[c] = a.USignConfigs[b], l[h] = a.USignObjs[g])
      }
    }
    for (b in a.DataConfigs) for (g in c = a.DataConfigs[b].cid, a.DataObjs) h = a.DataObjs[g].Cid,
    c == h && (r[c] = a.DataConfigs[b], v[h] = a.DataObjs[g]);
    u = a.CachetArray;
    return f = d = !0
  };
  this._getUploadDataGram = function() {
    if (d && this._isReadyToUpload() && f) {
      var a = new AnySignRoot,
        c = new FormInfo,
        b = new Uint8Array(24);
      void 0 != window.crypto ? window.crypto.getRandomValues(b) : void 0 != window.msCrypto ? window.msCrypto.getRandomValues(b) : capabal.crypto.getRandomValues(b);
      a.EncKey = rsaPubkeyUint8EncByDefault(b);
      a.EncCertSN = encCertSN;
      var m = [],
        D;
      for (D in n) {
        var G = n[D]; (G instanceof SignatureConfig || G instanceof CommentConfig) && "" != l[G.cid].Image && null != l[G.cid].Image && m.push(l[G.cid])
      }
      var F = [];
      for (D in r) G = r[D],
      G instanceof DataConfig && F.push(v[G.cid]);
      c.WONo = e;
      c.WOHash = p;
      c.Channel = q;
      null != u && 0 < u.length && (c.IsUnit = !0);
      if (null == m || 0 == m.length) return null;
      c.USignArray = m;
      c.DataArray = F;
      c.CachetArray = u;
      c.ExtInfo = new ExtInfo;
      c.EncAlg = EncAlgType.EncAlg;
      c = anysign.json.stringify(c);
      a.EncData = tripleDesEncrypt(c, anysign.hex.uint8ArrayToHexStr(b)) + "";
      a.Digest = new Digest;
      a.Digest.Alg = "CRC32";
      a.Digest.Value = anysign.digest.crc32(a.EncData).toString(16).toUpperCase();
      return anysign.json.stringify(a)
    }
    return null
  };
  this._getOSInfo = function() {
    if (isMobile.Android()) {
      var a = navigator.userAgent.toLowerCase();
      alert(a);
      var c = a.indexOf("android"),
        b = a.indexOf(";", c);
      a = a.substring(c + 8, b);
      return "android##" + a
    }
    return isMobile.iOS() && (a = navigator.userAgent, -1 != (c = a.indexOf("OS")) && -1 != (b = a.indexOf("like Mac OS"))) ? (a = a.substring(c + 3, b - 1), a = a.replace(/_/g, "."), "ios##" + a) : "unknown"
  }
}
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i) ? !0 : !1
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) ? !0 : !1
  },
  any: function() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()
  }
};
function onBridgeReady() {
  // WeixinJSBridge.call("hideOptionMenu")
}
// "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)) : onBridgeReady();
var AnySignRoot = function() {
    this.Version = "4.7";
    this.EncKey = this.EncCertSN = null;
    this.TermSrc = "PAD";
    this.EncData = this.Digest = null
  },
  Digest = function() {
    this.Value = this.Alg = null
  },
  FormInfo = function() {
    this.WOHash = this.WONo = null;
    this.IsUnit = this.IsSync = !1;
    this.EncAlg = "RSA";
    this.Channel = this.FlowID = null;
    this.USignArray = [];
    this.DataArray = [];
    this.OtherArray = [];
    this.CachetArray = [];
    this.ExtInfo = null
  },
  SaveFormInfo = function() {
    this.Channel = this.WOHash = this.WONo = null;
    this.EncAlg = "RSA";
    this.USignObjs = [];
    this.USignConfigs = [];
    this.DataObjs = [];
    this.DataConfigs = [];
    this.CachetArray = []
  },
  ExtInfo = function() {},
  PlainData = function() {
    this.CertOID = this.P10Data = null
  },
  P10Data = function() {
    this.IDNumber = this.IDType = this.Dn = this.Hashalg = this.P10SignValue = this.ValueType = this.Value = this.Hash = this.RawHash = null;
    this.Templname = "3";
    this.Channel = "10000"
  },
  CertOID = function() {
    this.Version = "3.2";
    this.ClientOS = this.BioFeature = this.RawHash = this.IDNumber = this.IDType = null
  },
  BioFeature = function() {
    this.PhotoArray = [];
    this.SoundArray = [];
    this.OtherArray = [];
    this.Script = null
  },
  Script = function() {
    this.Format = "zip";
    this.Width = "180";
    this.Device = this.Data = this.Count = this.Color = null;
    this.RefWidth = this.RefHeight = 99999;
    this.Geoloca = null
  },
  Device = function() {
    this.DeviceName = "ANDROID_PAD_" + navigator.appName;
    this.PressMax = this.SampleRate = "1024";
    this.Height = this.Width = 99999;
    this.DriverVer = "v1.0";
    this.DeviceID = navigator.appVersion;
    this.CertInfo = null
  },
  ClientOS = function() {
    this.Name = "WeiXin_" + navigator.platform;
    this.Edition = navigator.appCodeName;
    this.ServicePack = "None";
    this.Version = navigator.appVersion;
    this.OSArch = "32/64";
    this.DeviceID = navigator.appVersion
  },
  ImageSize = function(a, b) {
    this.Width = a;
    this.Height = b;
    this.Unit = "dp"
  },
  SignatureObj = function() {
    this.Cid = 0;
    this.ImageSize = this.Image = this.Signer = this.SignRule = null;
    this.IsTSS = !1;
    this.Points = null;
    this.ImageFMT = DataFormat.IMAGE_PNG;
    this.TimeTag = null
  },
  MassSignObj = function() {
    this.Cid = 0;
    this.ImageSize = this.Image = this.Signer = this.SignRule = null;
    this.IsTSS = !1;
    this.ImageFMT = DataFormat.IMAGE_PNG
  },
  PhotoEvidence = function() {
    this.BioType = this.Hash = this.Format = null
  },
  SoundEvidence = function() {
    this.BioType = this.Hash = this.Format = null
  },
  OtherEvidence = function() {
    this.BioType = this.Hash = this.Format = null
  },
  DataObj = function() {
    this.OwnerCid = this.Cid = 0;
    this.PDFCrdRule = this.Format = this.Name = this.Data = this.PointHash = null
  },
  PDFCrdRule = function() {
    this.DocStyleTid = this.DocFormat = this.DocCrdTid = null
  },
  HWRRoot = function() {
    this.version = "";
    this.hwrInfo = this.serviceID = this.userID = this.encKey = this.transID = null
  },
  HWRInfo = function() {
    this.type = null;
    this.lang = Language.CHS;
    this.similar = 100;
    this.strokes = [];
    this.text = "";
    this.hwrNum = null
  },
  HWRResult = function() {
    this.transID = null;
    this.result = [];
    this.errCode = null
  };
function ismobile(a) {
  a = navigator.userAgent;
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) {
    if (0 > window.location.href.indexOf("?mobile")) try {
      return /iPhone|mac|iPod|iPad/i.test(navigator.userAgent) ? "0": "1"
    } catch(b) {}
  } else return - 1 < a.indexOf("iPad") ? "0": "1"
}
function IsPC() {
  for (var a = navigator.userAgent,
         b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), c = !0, d = 0; d < b.length; d++) if (0 < a.indexOf(b[d])) {
    c = !1;
    break
  }
  return c
}
function getWindowWidth() {
  var a = 630;
  document.body && document.body.offsetWidth && (a = document.body.offsetWidth);
  "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (a = document.documentElement.offsetWidth);
  window.innerWidth && window.innerHeight && (a = window.innerWidth);
  return.99 * a
}
function getWindowHeight() {
  var a = 460;
  document.body && document.body.offsetWidth && (a = document.body.offsetHeight);
  "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (a = document.documentElement.offsetHeight);
  window.innerWidth && window.innerHeight && (a = window.innerHeight);
  IsPC() && (a *= .9);
  return.99 * a
}
function isSignOrCom(a) {
  return 20 <= a && 29 >= a || 200 <= a && 299 >= a ? !0 : 30 <= a && 39 >= a || 300 <= a && 399 >= a ? !1 : null
}
function checkText(a) {
  if (/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(a)) return ! 0;
  for (var b = ", . ' \" ; : ? /  \\  [ ] { } < > | ( ) ?".split(" "), c = 0; c < b.length; c++) if (a == b[c]) return ! 0;
  return ! 1
}
function hideURLbar() {
  window.scrollTo(0, 1)
}
function anysignCommentCore(a, b, c, d) {
  function f() {
    if (I) {
      var a = document.createElement("canvas"),
        b = a.getContext("2d"),
        d = window.devicePixelRatio ? window.devicePixelRatio: 1;
      a.width = I.width / d;
      a.height = I.height / d;
      var f = 1;
      c.mass_word_width / c.mass_word_height <= a.width / a.height ? c.mass_word_width <= a.width && (f = c.mass_word_width / a.width) : c.singleHeight <= a.height && (f = c.mass_word_height / a.height);
      a.width *= f;
      a.height *= f;
      b.scale(1 / d * f, 1 / d * f);
      d = document.createElement("canvas");
      d.width = I.width;
      d.height = I.height;
      d.getContext("2d").putImageData(I, 0, 0);
      b.drawImage(d, 0, 0);
      return a.toDataURL()
    }
    return null
  }
  function e() {
    document.getElementById("comment_dialog").style.display = "none";
    r = v = 9999;
    m = u = 0;
    document.body.parentNode.style.overflow = "scroll";
    document.getElementById("comment_sign");
    var a = document.getElementById("comment_title");
    a.innerHTML = "";
    a.style.color = "black";
    document.getElementById("signTitle").innerHTML = "";
    for (a = 0; a < M.length; a++) x.removeChild(M[a]);
    c = null
  }
  function p() {
    var c = document.createElement("canvas"),
      b = c.getContext("2d");
    c.width = comment_size * comment_line_num;
    canvas_width = comment_size * comment_line_num;
    var d = "";
    $.each(a.x,
      function(c, b) {
        text_x_num = c.substring(1, c.length);
        $.each(a.y,
          function(a, c) {
            a = a.substring(1, a.length);
            text_x_num == a ? d += b + c: 0 == a && 0 == text_x_num - 1 && (d += c + b)
          })
      });
    var f = Object.keys(a.x)[Object.keys(a.x).length - 1],
      e = Object.keys(a.y)[Object.keys(a.y).length - 1];
    f.substring(1, f.length) > e.substring(1, e.length) && (d += a.x[Object.keys(a.x)[Object.keys(a.x).length - 1]]);
    var g = [],
      k,
      m = 0;
    $.each(a.y,
      function(c, b) {
        for (b = 0; b <= c.substring(1); b++) m = a.x["x" + b] ? m + a.x["x" + b].length: 0,
        a.y["y" + (b - 1)] && (m += a.y["y" + (b - 1)].length);
        k = m;
        for (b = 0; b < this.length; b++) g.push({
          index: k
        }),
          k++
      });
    f = 0;
    e = 1;
    for (var h = 0; h < d.length; h++) {
      e != Math.floor(h / comment_line_num) && (e = Math.floor(h / comment_line_num), f = 0);
      var n = e * comment_size + comment_size + 5 * e;
      var r = f * comment_size;
      f++;
      b.fillText(d[h], r, n)
    }
    canvas_height = n + comment_size;
    c.height = canvas_height;
    b.font = comment_size + "px Arial";
    for (h = 0; h < d.length; h++) {
      e != Math.floor(h / comment_line_num) && (e = Math.floor(h / comment_line_num), f = 0);
      n = e * comment_size + comment_size + 5 * e;
      r = f * comment_size;
      f++;
      for (var p = 0; p < g.length; p++) if (h == g[p].index) {
        b.fillStyle = "#eb8e51";
        break
      } else b.fillStyle = "black";
      b.fillText(d[h], r, n)
    }
    N.push(c.toDataURL("image/png", 1))
  }
  var q = 480 <= window.innerWidth ? 15 : 10,
    l = !1,
    n = !1,
    v = 9999,
    r = 9999,
    u = 0,
    m = 0,
    g = 0,
    h = 0,
    E = [],
    J = [],
    D = [],
    G = 0,
    F = "",
    L = 0,
    I,
    k = 0,
    M = [],
    y = null,
    O = !1;
  var B = document.getElementById("comment_canvas");
  var H = document.getElementById("comment_title"),
    x = document.getElementById("signImage");
  b = document.getElementById("comment_ok");
  document.getElementById("comment_back");
  var C = document.getElementById("comment_cancel");
  var w = B.getContext("2d");
  document.getElementById("signTitle");
  w.strokeStyle = c.penColor;
  w.lineWidth = q;
  w.lineCap = "round";
  w.lineJoin = "round";
  w.shadowBlur = 5;
  $(document).on("click", ".click_text",
    function() {
      k + 1 == $(this).attr("click_val") ? ($(this).attr("class", "click_done"), k++) : custom_alert3("??????", "200000")
    });
  b.onclick = function() {
    n || (k != Object.keys(comment_obj.y).length ? custom_alert3("?????", "2000") : (p(), signResCallback && signResCallback(c.cid, N[0].substring(22, N[0].length), N[0].substring(22, N[0].length), F, L, void 0, void 0), e()))
  };
  C.onclick = function() {
    document.documentElement.style.overflow = "auto";
    signResCallback && signResCallback(c.cid, null, null, 0);
    e()
  };
  document.body.onselectstart = document.body.oncontextmenu = function() {
    return ! 1
  };
  "ontouchstart" in document.documentElement ? (B.ontouchstart = function(a) {
    null != y && clearInterval(y);
    n = l = !0
  },
    B.ontouchmove = function(a) {
      if (l) {
        var c = JQuery_Capable.offset(a.target);
        "undefined" !== typeof a.targetTouches ? (g = Math.floor(a.targetTouches[0].pageX - c.left), h = Math.floor(a.targetTouches[0].pageY - c.top)) : (g = Math.floor(a.pageX - c.left), h = Math.floor(a.pageY - c.top));
        c = a.timeStamp;
        0 !== L || isNaN(c) || (G = c);
        0 < g && h <= B.height && (F = isNaN(c) ? F + (g + "," + h + "," + q + ",0\n") : F + (g + "," + h + "," + q + "," + (c - G) + "\n"), L += 1, g > u && (u = g), g < v && (v = g), h > m && (m = h), h < r && (r = h), E.push({
          x: g,
          y: h
        }), K(), J.push({
          x: g,
          y: h
        }), 0 < g && 0 < h && D.push(g, h));
        preventDefault(a)
      }
    },
    B.ontouchend = function(b) {
      if (l) {
        b = b.timeStamp;
        F = isNaN(b) ? F + "0,0,-1,0\n": F + ("0,0,-1," + (b - G) + "\n");
        L += 1;
        D.push("-1", "0");
        var e = document.getElementById("comment_canvas");
        e.getContext("2d").drawImage(B, 0, 0);
        var g = document.getElementById("signTitle");
        k >= commentInner.length ? (alert("??????"), g.innerHTML = "", n = !1, w.clearRect(0, 0, B.width, B.height)) : O && (O = !1, y = setInterval(function() {
            D.push("-1", "-1");
            if (c.isdistinguish && !checkText(commentInner[k])) showProgress("???????????"),
              (new OCRObj(c.ocrCapture)).recognition(D, commentInner[k],
                function(b, h) {
                  closeWindow();
                  if (0 == b) {
                    if (h) {
                      k++;
                      k == commentInner.length ? (g.innerHTML = "", H.innerHTML = "??????", H.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (g.innerHTML = commentInner[k]), H.innerHTML = a, H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length));
                      h = document.createElement("img");
                      h.id = "img" + k;
                      h.width = c.mass_word_width;
                      h.height = c.mass_word_height;
                      if (checkText(commentInner[k - 1])) h.src = e.toDataURL("image/png");
                      else {
                        var n = u - v,
                          p = m - r,
                          l = (u + v) / 2,
                          S = (m + r) / 2;
                        n = 20 > n && 20 > p ? c.mass_word_width: n > p ? n / 2 : p / 2;
                        I = B.getContext("2d").getImageData(l - n - 10, S - n - 10, 2 * (n + 10), 2 * (n + 10));
                        l = f();
                        h.src = l
                      }
                      M[k - 1] = h;
                      x.appendChild(h);
                      x.scrollTop = x.scrollHeight;
                      w.clearRect(0, 0, B.width, B.height);
                      r = v = 9999;
                      m = u = 0;
                      D = [];
                      null != y && clearInterval(y)
                    }
                  } else w.clearRect(0, 0, B.width, B.height),
                    r = v = 9999,
                    m = u = 0,
                    D = [],
                    clearInterval(y);
                  null == d ? console.log("the identify callback is not definition") : "????" != b && d(b)
                });
            else {
              k++;
              D = [];
              k == commentInner.length ? (g.innerHTML = "", H.innerHTML = "??????", H.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (g.innerHTML = commentInner[k]), H.innerHTML = a, H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length));
              var b = document.createElement("img");
              b.id = "img" + k;
              b.width = c.mass_word_width;
              b.height = c.mass_word_height;
              if (checkText(commentInner[k - 1])) b.src = e.toDataURL("image/png");
              else {
                var h = u - v,
                  p = m - r,
                  l = (u + v) / 2,
                  A = (m + r) / 2;
                h = 20 > h && 20 > p ? c.mass_word_width: h > p ? h / 2 : p / 2;
                I = B.getContext("2d").getImageData(l - h - 10, A - h - 10, 2 * (h + 10), 2 * (h + 10));
                l = f();
                b.src = l
              }
              M[k - 1] = b;
              x.appendChild(b);
              x.scrollTop = x.scrollHeight;
              w.clearRect(0, 0, B.width, B.height);
              r = v = 9999;
              m = u = 0;
              l = null
            }
            n = !1;
            clearInterval(y)
          },
          1E3))
      }
      l = !1;
      E = [];
      J = []
    },
    B.ontouchcancel = B.ontouchend) : (B.onmousedown = function(a) {
    null != y && clearInterval(y);
    n = l = !0
  },
    B.onmousemove = function(a) {
      if (l) {
        var c = JQuery_Capable.offset(a.target),
          b = document.body.scrollTop | document.documentElement.scrollTop,
          d = document.body.scrollLeft | document.documentElement.scrollLeft;
        "undefined" !== typeof a.targetTouches ? (g = Math.floor(a.targetTouches[0].clientX - c.left), h = Math.floor(a.targetTouches[0].clientY - c.top)) : (g = Math.floor(a.clientX - c.left), h = Math.floor(a.clientY - c.top));
        c = a.timeStamp;
        0 !== L || isNaN(c) || (G = c);
        0 < g && (F = isNaN(c) ? F + (g + "," + h + "," + q + ",0\n") : F + (g + "," + h + "," + q + "," + (c - G) + "\n"), L += 1, h += b, g += d, g > u && (u = g), g < v && (v = g), h > m && (m = h), h < r && (r = h), E.push({
          x: g,
          y: h
        }), K(), J.push({
          x: g,
          y: h
        }), 0 < g && 0 < h && D.push(g, h));
        preventDefault(a)
      }
    },
    B.onmouseup = function(b) {
      if (l) {
        l = !1;
        var e = JQuery_Capable.offset(b.target);
        "undefined" !== typeof b.targetTouches ? (g = Math.floor(b.targetTouches[0].clientX - e.left), h = Math.floor(b.targetTouches[0].clientY - e.top)) : (g = Math.floor(b.clientX - e.left), h = Math.floor(b.clientY - e.top));
        b = b.timeStamp;
        F = isNaN(b) ? F + "0,0,-1,0\n": F + ("0,0,-1," + (b - G) + "\n");
        L += 1;
        D.push("-1", "0");
        var p = document.getElementById("comment_canvas");
        p.getContext("2d").drawImage(B, 0, 0);
        var q = document.getElementById("signTitle");
        k >= commentInner.length ? (alert("??????"), q.innerHTML = "", w.clearRect(0, 0, B.width, B.height), n = !1) : 10 < J.length && (y = setInterval(function() {
            D.push("-1", "-1");
            if (c.isdistinguish && !checkText(commentInner[k])) showProgress("???????????"),
              (new OCRObj(c.ocrCapture)).recognition(D, commentInner[k],
                function(b, e) {
                  closeWindow();
                  if (0 == b) {
                    if (e) {
                      k++;
                      k == commentInner.length ? (q.innerHTML = "", H.innerHTML = "??????", H.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (q.innerHTML = commentInner[k]), H.innerHTML = a, H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length));
                      e = document.createElement("img");
                      e.id = "img" + k;
                      e.width = c.mass_word_width;
                      e.height = c.mass_word_height;
                      if (checkText(commentInner[k - 1])) e.src = p.toDataURL("image/png");
                      else {
                        var g = u - v,
                          h = m - r,
                          n = (u + v) / 2,
                          l = (m + r) / 2;
                        g = 20 > g && 20 > h ? c.mass_word_width: g > h ? g / 2 : h / 2;
                        I = B.getContext("2d").getImageData(n - g - 10, l - g - 10, 2 * (g + 10), 2 * (g + 10));
                        n = f();
                        e.src = n
                      }
                      M[k - 1] = e;
                      x.appendChild(e);
                      x.scrollTop = x.scrollHeight;
                      w.clearRect(0, 0, B.width, B.height);
                      r = v = 9999;
                      m = u = 0;
                      D = [];
                      null != y && clearInterval(y)
                    }
                  } else w.clearRect(0, 0, B.width, B.height),
                    r = v = 9999,
                    m = u = 0,
                    D = [],
                    clearInterval(y);
                  null == d ? console.log("the identify callback is not definition") : "????" != b && d(b)
                });
            else {
              k++;
              D = [];
              k == commentInner.length ? (q.innerHTML = "", H.innerHTML = "??????", H.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (q.innerHTML = commentInner[k]), H.innerHTML = a, H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length));
              var b = document.createElement("img");
              b.id = "img" + k;
              b.width = c.mass_word_width;
              b.height = c.mass_word_height;
              if (checkText(commentInner[k - 1])) b.src = p.toDataURL("image/png");
              else {
                var e = u - v,
                  g = m - r,
                  h = (u + v) / 2,
                  l = (m + r) / 2;
                e = 20 > e && 20 > g ? c.mass_word_width: e > g ? e / 2 : g / 2;
                I = B.getContext("2d").getImageData(h - e - 10, l - e - 10, 2 * (e + 10), 2 * (e + 10));
                h = f();
                b.src = h
              }
              M[k - 1] = b;
              x.appendChild(b);
              x.scrollTop = x.scrollHeight;
              w.clearRect(0, 0, B.width, B.height);
              r = v = 9999;
              m = u = 0;
              h = null
            }
            n = !1;
            clearInterval(y)
          },
          1E3));
        l = !1;
        E = [];
        J = []
      }
    },
    B.onmouseout = B.onmouseup);
  var K = function() {
      if (3 > E.length) {
        var a = E[0];
        w.beginPath();
        w.strokeStyle = c.penColor;
        w.fillStyle = c.penColor;
        w.arc(a.x, a.y, w.lineWidth / 2, 0, 2 * Math.PI, !0);
        w.fill();
        w.closePath()
      } else {
        w.clearRect(0, 0, w.width, w.height);
        w.beginPath();
        w.strokeStyle = c.penColor;
        w.fillStyle = c.penColor;
        w.moveTo(E[0].x, E[0].y);
        for (a = 1; a < E.length - 2; a++) w.quadraticCurveTo(E[a].x, E[a].y, (E[a].x + E[a + 1].x) / 2, (E[a].y + E[a + 1].y) / 2);
        w.stroke()
      }
      O = !0
    },
    N = [];
  window.addEventListener("resize",
    function() {
      null != y && clearInterval(y);
      var b = document.getElementById("signTitle");
      H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length);
      c.isShowBgText && (b.innerHTML = k >= commentInner.length ? "": commentInner[k]);
      w.strokeStyle = c.penColor;
      w.lineWidth = q;
      w.lineCap = "round";
      w.lineJoin = "round";
      w.shadowBlur = 5
    });
  window.addEventListener("orientationchange",
    function() {
      null != y && clearInterval(y);
      document.getElementById("signTitle");
      H.innerHTML = a.substring(0, k) + commentInner[k].replace(commentInner[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, commentInner.length);
      w.strokeStyle = c.penColor;
      w.lineWidth = q;
      w.lineCap = "round";
      w.lineJoin = "round";
      w.shadowBlur = 5
    })
}
function anysignCommentCore_Sign(a, b, c, d) {
  function f() {
    if (I) {
      var a = document.createElement("canvas"),
        b = a.getContext("2d"),
        d = window.devicePixelRatio ? window.devicePixelRatio: 1;
      a.width = I.width / d;
      a.height = I.height / d;
      var f = 1;
      c.mass_word_width / c.mass_word_height <= a.width / a.height ? c.mass_word_width <= a.width && (f = c.mass_word_width / a.width) : c.singleHeight <= a.height && (f = c.mass_word_height / a.height);
      a.width *= f;
      a.height *= f;
      b.scale(1 / d * f, 1 / d * f);
      d = document.createElement("canvas");
      d.width = I.width;
      d.height = I.height;
      d.getContext("2d").putImageData(I, 0, 0);
      b.drawImage(d, 0, 0);
      return a.toDataURL()
    }
    return null
  }
  function e() {
    document.getElementById("comment_dialog").style.display = "none";
    r = v = 9999;
    m = u = 0;
    document.body.parentNode.style.overflow = "scroll";
    document.getElementById("comment_sign");
    var a = document.getElementById("comment_title");
    a.innerHTML = "";
    a.style.color = "black";
    document.getElementById("signTitle").innerHTML = "";
    for (a = 0; a < M.length; a++) K.removeChild(M[a]);
    c = null
  }
  function p() {
    function b(a) {
      console.log(a, h);
      a < h ? (e >= c.mass_words_in_single_line && (g += c.mass_word_height, e = 0), f.drawImage(M[a], c.mass_word_width * e, g, c.mass_word_width, c.mass_word_height), e++, b(a + 1)) : (P.push(d.toDataURL("image/png", 1)), console.log(P))
    }
    var d = document.createElement("canvas"),
      f = d.getContext("2d");
    O = c.mass_word_width * c.mass_words_in_single_line;
    B = c.mass_word_height * (a.length / c.mass_words_in_single_line + 1);
    d.width = O;
    d.height = B;
    f.rect(0, 0, d.width, d.height);
    f.fillStyle = "#fff";
    f.fill();
    var e = 0,
      g = 0,
      h = x.length;
    b(0)
  }
  var q = 480 <= window.innerWidth ? 15 : 10,
    l = !1,
    n = !1,
    v = 9999,
    r = 9999,
    u = 0,
    m = 0,
    g = 0,
    h = 0,
    E = [],
    J = [],
    D = [],
    G = 0,
    F = "",
    L = 0,
    I,
    k = 0,
    M = [],
    y = null,
    O,
    B,
    H = !1,
    x = a.replace(/(.)(?=[^$])/g, "$1,").split(",");
  var C = document.getElementById("comment_canvas");
  var w = document.getElementById("comment_title"),
    K = document.getElementById("signImage");
  b = document.getElementById("comment_ok");
  document.getElementById("comment_back");
  var N = document.getElementById("comment_cancel");
  var A = C.getContext("2d");
  var R = document.getElementById("signTitle");
  c.isShowBgText && (R.innerHTML = x[k]);
  w.innerHTML = x[0].replace(x[0], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(1, x.length);
  A.strokeStyle = c.penColor;
  A.lineWidth = q;
  A.lineCap = "round";
  A.lineJoin = "round";
  A.shadowBlur = 5;
  b.onclick = function() {
    n || (k != x.length ? custom_alert3("?????", "2000") : (p(), signResCallback && signResCallback(c.cid, P[0].substring(22, P[0].length), P[0].substring(22, P[0].length), F, L, O, B), e()))
  };
  N.onclick = function() {
    document.documentElement.style.overflow = "auto";
    signResCallback && signResCallback(c.cid, null, null, 0);
    e()
  };
  document.body.onselectstart = document.body.oncontextmenu = function() {
    return ! 1
  };
  "ontouchstart" in document.documentElement ? (C.ontouchstart = function(a) {
    null != y && clearInterval(y);
    n = l = !0
  },
    C.ontouchmove = function(a) {
      if (l) {
        var b = JQuery_Capable.offset(a.target);
        "undefined" !== typeof a.targetTouches ? (g = Math.floor(a.targetTouches[0].pageX - b.left), h = Math.floor(a.targetTouches[0].pageY - b.top)) : (g = Math.floor(a.pageX - b.left), h = Math.floor(a.pageY - b.top));
        b = a.timeStamp;
        0 !== L || isNaN(b) || (G = b);
        0 < g && h <= C.height && (F = isNaN(b) ? F + (g + "," + h + "," + q + ",0\n") : F + (g + "," + h + "," + q + "," + (b - G) + "\n"), L += 1, g > u && (u = g), g < v && (v = g), h > m && (m = h), h < r && (r = h), E.push({
          x: g,
          y: h
        }), Q(), J.push({
          x: g,
          y: h
        }), 0 < g && 0 < h && D.push(g, h));
        preventDefault(a)
      }
    },
    C.ontouchend = function(b) {
      if (l) {
        b = b.timeStamp;
        F = isNaN(b) ? F + "0,0,-1,0\n": F + ("0,0,-1," + (b - G) + "\n");
        L += 1;
        D.push("-1", "0");
        var e = document.getElementById("comment_canvas");
        e.getContext("2d").drawImage(C, 0, 0);
        var g = document.getElementById("signTitle");
        k >= x.length ? (alert("??????"), g.innerHTML = "", n = !1, A.clearRect(0, 0, C.width, C.height)) : H && (H = !1, y = setInterval(function() {
            D.push("-1", "-1");
            if (c.isdistinguish && !checkText(x[k])) showProgress("???????????"),
              (new OCRObj(c.ocrCapture)).recognition(D, x[k],
                function(b, h) {
                  closeWindow();
                  if (0 == b) {
                    if (h) {
                      k++;
                      k == x.length ? (g.innerHTML = "", w.innerHTML = "??????", w.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (g.innerHTML = x[k]), w.innerHTML = a, w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length));
                      h = document.createElement("img");
                      h.id = "img" + k;
                      h.width = c.mass_word_width;
                      h.height = c.mass_word_height;
                      if (checkText(x[k - 1])) h.src = e.toDataURL("image/png");
                      else {
                        var n = u - v,
                          p = m - r,
                          l = (u + v) / 2,
                          q = (m + r) / 2;
                        n = 20 > n && 20 > p ? c.mass_word_width: n > p ? n / 2 : p / 2;
                        I = C.getContext("2d").getImageData(l - n - 10, q - n - 10, 2 * (n + 10), 2 * (n + 10));
                        l = f();
                        h.src = l
                      }
                      M[k - 1] = h;
                      K.appendChild(h);
                      K.scrollTop = K.scrollHeight;
                      A.clearRect(0, 0, C.width, C.height);
                      r = v = 9999;
                      m = u = 0;
                      D = [];
                      null != y && clearInterval(y)
                    }
                  } else A.clearRect(0, 0, C.width, C.height),
                    r = v = 9999,
                    m = u = 0,
                    D = [],
                    clearInterval(y);
                  null == d ? console.log("the identify callback is not definition") : "????" != b && d(b)
                });
            else {
              k++;
              D = [];
              k == x.length ? (g.innerHTML = "", w.innerHTML = "??????", w.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (g.innerHTML = x[k]), w.innerHTML = a, w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length));
              var b = document.createElement("img");
              b.id = "img" + k;
              b.width = c.mass_word_width;
              b.height = c.mass_word_height;
              if (checkText(x[k - 1])) b.src = e.toDataURL("image/png");
              else {
                var h = u - v,
                  p = m - r,
                  l = (u + v) / 2,
                  q = (m + r) / 2;
                h = 20 > h && 20 > p ? c.mass_word_width: h > p ? h / 2 : p / 2;
                I = C.getContext("2d").getImageData(l - h - 10, q - h - 10, 2 * (h + 10), 2 * (h + 10));
                l = f();
                b.src = l
              }
              M[k - 1] = b;
              K.appendChild(b);
              K.scrollTop = K.scrollHeight;
              A.clearRect(0, 0, C.width, C.height);
              r = v = 9999;
              m = u = 0;
              l = null
            }
            n = !1;
            clearInterval(y)
          },
          1E3))
      }
      l = !1;
      E = [];
      J = []
    },
    C.ontouchcancel = C.ontouchend) : (C.onmousedown = function(a) {
    null != y && clearInterval(y);
    n = l = !0
  },
    C.onmousemove = function(a) {
      if (l) {
        var b = JQuery_Capable.offset(a.target),
          c = document.body.scrollTop | document.documentElement.scrollTop,
          d = document.body.scrollLeft | document.documentElement.scrollLeft;
        "undefined" !== typeof a.targetTouches ? (g = Math.floor(a.targetTouches[0].clientX - b.left), h = Math.floor(a.targetTouches[0].clientY - b.top)) : (g = Math.floor(a.clientX - b.left), h = Math.floor(a.clientY - b.top));
        b = a.timeStamp;
        0 !== L || isNaN(b) || (G = b);
        0 < g && (F = isNaN(b) ? F + (g + "," + h + "," + q + ",0\n") : F + (g + "," + h + "," + q + "," + (b - G) + "\n"), L += 1, h += c, g += d, g > u && (u = g), g < v && (v = g), h > m && (m = h), h < r && (r = h), E.push({
          x: g,
          y: h
        }), Q(), J.push({
          x: g,
          y: h
        }), 0 < g && 0 < h && D.push(g, h));
        preventDefault(a)
      }
    },
    C.onmouseup = function(b) {
      if (l) {
        l = !1;
        var e = JQuery_Capable.offset(b.target);
        "undefined" !== typeof b.targetTouches ? (g = Math.floor(b.targetTouches[0].clientX - e.left), h = Math.floor(b.targetTouches[0].clientY - e.top)) : (g = Math.floor(b.clientX - e.left), h = Math.floor(b.clientY - e.top));
        b = b.timeStamp;
        F = isNaN(b) ? F + "0,0,-1,0\n": F + ("0,0,-1," + (b - G) + "\n");
        L += 1;
        D.push("-1", "0");
        var p = document.getElementById("comment_canvas");
        p.getContext("2d").drawImage(C, 0, 0);
        var q = document.getElementById("signTitle");
        k >= x.length ? (alert("??????"), q.innerHTML = "", A.clearRect(0, 0, C.width, C.height), n = !1) : 10 < J.length && (y = setInterval(function() {
            D.push("-1", "-1");
            if (c.isdistinguish && !checkText(x[k])) showProgress("???????????"),
              (new OCRObj(c.ocrCapture)).recognition(D, x[k],
                function(b, e) {
                  closeWindow();
                  if (0 == b) {
                    if (e) {
                      k++;
                      k == x.length ? (q.innerHTML = "", w.innerHTML = "??????", w.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (q.innerHTML = x[k]), w.innerHTML = a, w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length));
                      e = document.createElement("img");
                      e.id = "img" + k;
                      e.width = c.mass_word_width;
                      e.height = c.mass_word_height;
                      if (checkText(x[k - 1])) e.src = p.toDataURL("image/png");
                      else {
                        var g = u - v,
                          h = m - r,
                          n = (u + v) / 2,
                          l = (m + r) / 2;
                        g = 20 > g && 20 > h ? c.mass_word_width: g > h ? g / 2 : h / 2;
                        I = C.getContext("2d").getImageData(n - g - 10, l - g - 10, 2 * (g + 10), 2 * (g + 10));
                        n = f();
                        e.src = n
                      }
                      M[k - 1] = e;
                      K.appendChild(e);
                      K.scrollTop = K.scrollHeight;
                      A.clearRect(0, 0, C.width, C.height);
                      r = v = 9999;
                      m = u = 0;
                      D = [];
                      null != y && clearInterval(y)
                    }
                  } else A.clearRect(0, 0, C.width, C.height),
                    r = v = 9999,
                    m = u = 0,
                    D = [],
                    clearInterval(y);
                  null == d ? console.log("the identify callback is not definition") : "????" != b && d(b)
                });
            else {
              k++;
              D = [];
              k == x.length ? (q.innerHTML = "", w.innerHTML = "??????", w.style.color = "Red", clearInterval(y)) : (c.isShowBgText && (q.innerHTML = x[k]), w.innerHTML = a, w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length));
              var b = document.createElement("img");
              b.id = "img" + k;
              b.width = c.mass_word_width;
              b.height = c.mass_word_height;
              if (checkText(x[k - 1])) b.src = p.toDataURL("image/png");
              else {
                var e = u - v,
                  g = m - r,
                  h = (u + v) / 2,
                  l = (m + r) / 2;
                e = 20 > e && 20 > g ? c.mass_word_width: e > g ? e / 2 : g / 2;
                I = C.getContext("2d").getImageData(h - e - 10, l - e - 10, 2 * (e + 10), 2 * (e + 10));
                h = f();
                b.src = h
              }
              M[k - 1] = b;
              K.appendChild(b);
              K.scrollTop = K.scrollHeight;
              A.clearRect(0, 0, C.width, C.height);
              r = v = 9999;
              m = u = 0;
              h = null
            }
            n = !1;
            clearInterval(y)
          },
          1E3));
        l = !1;
        E = [];
        J = []
      }
    },
    C.onmouseout = C.onmouseup);
  var Q = function() {
      if (3 > E.length) {
        var a = E[0];
        A.beginPath();
        A.strokeStyle = c.penColor;
        A.fillStyle = c.penColor;
        A.arc(a.x, a.y, A.lineWidth / 2, 0, 2 * Math.PI, !0);
        A.fill();
        A.closePath()
      } else {
        A.clearRect(0, 0, A.width, A.height);
        A.beginPath();
        A.strokeStyle = c.penColor;
        A.fillStyle = c.penColor;
        A.moveTo(E[0].x, E[0].y);
        for (a = 1; a < E.length - 2; a++) A.quadraticCurveTo(E[a].x, E[a].y, (E[a].x + E[a + 1].x) / 2, (E[a].y + E[a + 1].y) / 2);
        A.stroke()
      }
      H = !0
    },
    P = [];
  window.addEventListener("resize",
    function() {
      null != y && clearInterval(y);
      var b = document.getElementById("signTitle");
      w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length);
      c.isShowBgText && (b.innerHTML = k >= x.length ? "": x[k]);
      A.strokeStyle = c.penColor;
      A.lineWidth = q;
      A.lineCap = "round";
      A.lineJoin = "round";
      A.shadowBlur = 5
    });
  window.addEventListener("orientationchange",
    function() {
      null != y && clearInterval(y);
      document.getElementById("signTitle");
      w.innerHTML = a.substring(0, k) + x[k].replace(x[k], '<font color="' + c.currentEditBarTextColor + '">$&</font>') + a.substring(k + 1, x.length);
      A.strokeStyle = c.penColor;
      A.lineWidth = q;
      A.lineCap = "round";
      A.lineJoin = "round";
      A.shadowBlur = 5
    })
}
function OCRObj(a) {
  var b, c = !1;
  var d = null == a ? new OCRCapture: a;
  var f = new HWRRoot;
  var e = new HWRInfo;
  f.version = "1.0";
  f.transID = UUID();
  f.encKey = "encKey";
  null == d.appID || "" == d.appID || void 0 == d.appID ? console.log("ocrCapture.appID is null") : (f.userID = d.appID, null == d.serviceID || "" == d.serviceID || void 0 == d.serviceID ? console.log("ocrCapture.serviceID is null") : (f.serviceID = d.serviceID, e.type = 1, d.language == Language.CHS ? e.lang = "1": d.language == Language.CHT && (e.lang = "2"), e.similar = d.resolution, e.text = d.text, e.hwrNum = d.count, f.hwrInfo = e, this.recognition = function(a, q, l) {
    if (null == a || "" == a || void 0 == a) return "Identification parameter is empty";
    if (10 > a.length) return "too few coordinates";
    b = l;
    OCRObj();
    null != e && (e.strokes = a, e.hwrNum = d.count, f.hwrInfo = e);
    null == d.IPAdress || "" == d.IPAdress || void 0 == d.IPAdress ? b("????????", c) : (console.log(f), console.log(JSON.stringify(f)), jQuery.ajax({
      type: "POST",
      data: JSON.stringify(f),
      dataType: "text",
      timeout: 5E3,
      headers: d.headers,
      url: d.IPAdress,
      success: function(a) {
        if (null == a || "undefined" == a || "" == a) b("???????,??????", c);
        else {
          a = JSON.parse(a);
          if (null == a || "undefined" == typeof a) alert("???????,???????");
          else if ("0" == a.errCode) for (var d = a.result,
                                            e = "",
                                            f = 0; f < d.length; f++) if ("0" == d[f]) {
            if (q == e) {
              c = !0;
              break
            }
            e = ""
          } else {
            var n = String.fromCharCode(d[f]);
            e += n
          }
          0 != a.errCode || c ? b(a.errCode, c) : b("-1", c)
        }
      },
      error: function(a, d, e) {
        b("????", c);
        if ("timeout" == d) alert("????,???????");
        else return alert("???????: " + d + "?status code?" + a.status + "?state?" + a.readyState),
          a = document.getElementById("comment_canvas"),
          a.getContext("2d").clearRect(0, 0, a.width, a.height),
          !1
      }
    }))
  }))
}
function UUID() {
  for (var a = [], b = 0; 36 > b; b++) a[b] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
  a[14] = "4";
  a[19] = "0123456789abcdef".substr(a[19] & 3 | 8, 1);
  a[8] = a[13] = a[18] = a[23] = "-";
  return a.join("")
}
function stringToBytes(a) {
  for (var b, c, d = [], f = 0; f < a.length; f++) {
    b = a.charCodeAt(f);
    c = [];
    do c.push(b & 255),
      b >>= 8;
    while (b);
    d = d.concat(c.reverse())
  }
  return d
} (function() {
  function a(a, b) {
    return this.slice(a, b)
  }
  function b(a, b) {
    2 > arguments.length && (b = 0);
    for (var c = 0,
           d = a.length; c < d; ++c, ++b) this[b] = a[c] & 255
  }
  function c(c) {
    if ("number" === typeof c) {
      var d = Array(c);
      for (var e = 0; e < c; ++e) d[e] = 0
    } else d = c.slice(0);
    d.subarray = a;
    d.buffer = d;
    d.byteLength = d.length;
    d.set = b;
    "object" === typeof c && c.buffer && (d.buffer = c.buffer);
    return d
  }
  try {
    new Uint8Array(1);
    return
  } catch(d) {}
  window.Uint8Array = c;
  window.Uint32Array = c;
  window.Int32Array = c
})(); (function() {
  "response" in XMLHttpRequest.prototype || "mozResponseArrayBuffer" in XMLHttpRequest.prototype || "mozResponse" in XMLHttpRequest.prototype || "responseArrayBuffer" in XMLHttpRequest.prototype || Object.defineProperty(XMLHttpRequest.prototype, "response", {
    get: function() {
      return new Uint8Array((new VBArray(this.responseBody)).toArray())
    }
  })
})(); (function() {
  "btoa" in window || (window.btoa = function(a) {
    var b = "",
      c;
    var d = 0;
    for (c = a.length; d < c; d += 3) {
      var f = a.charCodeAt(d) & 255,
        e = a.charCodeAt(d + 1) & 255,
        p = a.charCodeAt(d + 2) & 255,
        q = (f & 3) << 4 | e >> 4;
      e = d + 1 < c ? (e & 15) << 2 | p >> 6 : 64;
      p = d + 2 < c ? p & 63 : 64;
      b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f >> 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p)
    }
    return b
  })
})();
var capabal = capabal || {
  crypto: {
    getRandomValues: function(a) {
      var b = a.length;
      if (b) for (; --b;) {
        var c = Math.floor(Math.random() * (b + 1));
        var d = a[c];
        a[c] = a[b];
        a[b] = d
      }
      return a
    }
  }
};
function toUInt(a) {
  return 0 > a ? a + 4294967296 : a
}
function bytes32(a) {
  return [a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255]
}
function bytes16sw(a) {
  return [a & 255, a >>> 8 & 255]
}
function adler32(a, b, c) {
  switch (arguments.length) {
    case 1:
      b = 0;
    case 2:
      c = a.length - b
  }
  for (var d = 1,
         f = 0,
         e = 0; e < c; e++) d = (d + a[b + e]) % 65521,
    f = (f + d) % 65521;
  return toUInt(f << 16 | d)
}
function crc32(a, b, c) {
  switch (arguments.length) {
    case 1:
      b = 0;
    case 2:
      c = a.length - b
  }
  var d = arguments.callee.crctable;
  if (!d) {
    d = [];
    for (var f, e = 0; 256 > e; e++) {
      f = e;
      for (var p = 0; 8 > p; p++) f = f & 1 ? 3988292384 ^ f >>> 1 : f >>> 1;
      d[e] = toUInt(f)
    }
    arguments.callee.crctable = d
  }
  f = 4294967295;
  for (e = 0; e < c; e++) f = d[(f ^ a[b + e]) & 255] ^ f >>> 8;
  return toUInt(f ^ 4294967295)
} (function() {
  var a = function() {
      var a = Array.prototype.slice.call(this.getContext("2d").getImageData(0, 0, this.width, this.height).data),
        b = this.width,
        f = this.height,
        e = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82];
      Array.prototype.push.apply(e, bytes32(b));
      Array.prototype.push.apply(e, bytes32(f));
      e.push(8, 6, 0, 0, 0);
      Array.prototype.push.apply(e, bytes32(crc32(e, 12, 17)));
      for (var p = f * (4 * b + 1), q = 0; q < f; q++) a.splice(q * (4 * b + 1), 0, 0);
      b = Math.ceil(p / 32768);
      Array.prototype.push.apply(e, bytes32(p + 5 * b + 6));
      f = e.length;
      q = p + 5 * b + 6 + 4;
      e.push(73, 68, 65, 84, 120, 1);
      for (var l = 0; l < b; l++) {
        var n = Math.min(32768, p - 32768 * l);
        e.push(l == b - 1 ? 1 : 0);
        Array.prototype.push.apply(e, bytes16sw(n));
        Array.prototype.push.apply(e, bytes16sw(~n));
        n = a.slice(32768 * l, 32768 * l + n);
        Array.prototype.push.apply(e, n)
      }
      Array.prototype.push.apply(e, bytes32(adler32(a)));
      Array.prototype.push.apply(e, bytes32(crc32(e, f, q)));
      e.push(0, 0, 0, 0, 73, 69, 78, 68);
      Array.prototype.push.apply(e, bytes32(crc32(e, e.length - 4, 4)));
      return "data:image/png;base64," + btoa(e.map(function(a) {
        return String.fromCharCode(a)
      }).join(""))
    },
    b = HTMLCanvasElement.prototype.toDataURL;
  HTMLCanvasElement.prototype.toDataURL = function(c) {
    var d = b.apply(this, arguments);
    if ("data:," == d) return HTMLCanvasElement.prototype.toDataURL = a,
      this.toDataURL();
    HTMLCanvasElement.prototype.toDataURL = b;
    return d
  }
})();
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encodeUint8Array: function(a) {
    for (var b = 0,
           c = a.length,
           d = "",
           f, e = ""; b < c;) {
      f = a.subarray(b, Math.min(b + 32768, c));
      for (var p = 0,
             q = f.length; p < q; p++) e += String.fromCharCode(f[p]);
      d += e;
      b += 32768;
      e = ""
    }
    return btoa(d)
  },
  decode: function(a) {
    var b = .75 * a.length,
      c = a.length,
      d = 0;
    "=" === a[a.length - 1] && (b--, "=" === a[a.length - 2] && b--);
    var f = new ArrayBuffer(b),
      e = new Uint8Array(f);
    for (b = 0; b < c; b += 4) {
      var p = lookup[a.charCodeAt(b)];
      var q = lookup[a.charCodeAt(b + 1)];
      var l = lookup[a.charCodeAt(b + 2)];
      var n = lookup[a.charCodeAt(b + 3)];
      e[d++] = p << 2 | q >> 4;
      e[d++] = (q & 15) << 4 | l >> 2;
      e[d++] = (l & 3) << 6 | n & 63
    }
    return f
  },
  encode: function(a) {
    var b = "",
      c = 0;
    for (a = Base64._utf8_encode(a); c < a.length;) {
      var d = a.charCodeAt(c++);
      var f = a.charCodeAt(c++);
      var e = a.charCodeAt(c++);
      var p = d >> 2;
      d = (d & 3) << 4 | f >> 4;
      var q = (f & 15) << 2 | e >> 6;
      var l = e & 63;
      isNaN(f) ? q = l = 64 : isNaN(e) && (l = 64);
      b = b + this._keyStr.charAt(p) + this._keyStr.charAt(d) + this._keyStr.charAt(q) + this._keyStr.charAt(l)
    }
    return b
  },
  _utf8_encode: function(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "",
           c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
    }
    return b
  },
  _utf8_decode: function(a) {
    for (var b = "",
           c = 0,
           d, f, e; c < a.length;) d = a.charCodeAt(c),
      128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (f = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | f & 63), c += 2) : (f = a.charCodeAt(c + 1), e = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (f & 63) << 6 | e & 63), c += 3);
    return b
  }
};
anysign = anysign || {
  binary: {
    uint32ArrayToUint8Array: function(a) {
      if (!a) return null;
      for (var b = new Uint8Array(4 * a.length), c, d = 0, f = a.length; d < f; d++) c = d << 2,
        b[c] = a[d] >> 24 & 255,
        b[c + 1] = a[d] >> 16 & 255,
        b[c + 2] = a[d] >> 8 & 255,
        b[c + 3] = a[d] & 255;
      return b
    }
  },
  hex: {
    hexEncodeArray: "0123456789abcdef".split(""),
    uint8ArrayToHexStr: function(a) {
      if (!a) return null;
      for (var b = "",
             c = 0; c < a.length; c++) {
        var d = a[c];
        b += this.hexEncodeArray[d >>> 4];
        b += this.hexEncodeArray[d & 15]
      }
      return b
    },
    hexStrToUint8Array: function(a) {
      if (!a || 0 != a.length % 2) return null;
      for (var b = [], c = 0; c < a.length; c += 2) b.push(parseInt("0x" + a.substr(c, 2), 16));
      return new Uint8Array(b)
    },
    hexStrToUint8Str: function(a) {
      if (!a || 0 != a.length % 2) return null;
      for (var b = "",
             c = 0; c < a.length; c += 2) b += String.fromCharCode(parseInt("0x" + a.substr(c, 2), 16));
      return decodeURIComponent(escape(b))
    }
  },
  charset: {
    strToUtf8ArrayUint8: function(a) {
      a = unescape(encodeURIComponent(a));
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
      return b
    },
    utf8ArrayUint8ToStr: function(a) {
      for (var b = "",
             c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
      return decodeURIComponent(escape(b))
    },
    toUtf8str: function(a) {
      return unescape(encodeURIComponent(a))
    },
    uint8ArrayAscIIToStr: function(a) {
      return String.fromCharCode.apply(null, a)
    },
    strToUint8ArrayAscII: function(a) {
      for (var b = new Uint8Array(a.length), c = 0, d = a.length; c < d; ++c) b[c] = a.charCodeAt(c);
      return b
    }
  },
  zip: {
    compressToB64: function(a) {
      a = (new Zlib.Deflate(a)).compress();
      if (a instanceof Array) {
        for (var b = new Uint8Array(a.length), c = 0, d = b.length; c < d; ++c) b[c] = a[c];
        a = b
      }
      return Base64.encodeUint8Array(a)
    }
  },
  json: {
    stringify: function(a) {
      return JSON.stringify(a)
    },
    stringToObj: function(a) {
      return JSON.parse(a)
    }
  },
  digest: {
    crc32: function(a) {
      var b = [];
      if (window.crcTable) b = window.crcTable;
      else {
        for (var c, d = 0; 256 > d; d++) {
          c = d;
          for (var f = 0; 8 > f; f++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
          b[d] = c
        }
        window.crcTable = b
      }
      c = -1;
      for (d = 0; d < a.length; d++) c = c >>> 8 ^ b[(c ^ a.charCodeAt(d)) & 255];
      return (c ^ -1) >>> 0
    }
  }
}; (function(a) {
  function b() {
    for (var b = !0,
           c, d = v,
           e = n.length; d < e && b;) if (c = n[d], void 0 !== c && null !== c) {
      if ("string" === typeof c) {
        var f = q.cloneNode(!1);
        f.text = c;
        l.parentNode.insertBefore(f, l)
      } else c.apply(a);
      c = d;
      n[c] = null;
      v = c + 1;
      d += 1
    } else b = !1
  }
  function c() {
    if (n.length) {
      var b = n.pop(),
        d;
      "string" === typeof b ? (d = q.cloneNode(!0), d.type = "text/javascript", d.async = !0, d.src = b, d.onload = d.onreadystatechange = function() {
        if (!d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
          d = void 0,
          c()
      },
        l.parentNode.insertBefore(d, l)) : (b.apply(a), c())
    }
  }
  function d(a, c) {
    return function() {
      n[c] = a.responseText;
      b();
      a = void 0
    }
  }
  function f() {
    var a = arguments.length,
      c, e;
    for (c = 0; c < a; c += 1)"string" === typeof arguments[c] ? (e = m(arguments[c]), e.onload = d(e, n.length), n[n.length] = null, e.send()) : (n[n.length] = arguments[c], b())
  }
  function e() {
    n.push(Array.prototype.slice.call(arguments, 0).reverse());
    c()
  }
  var p = a.document,
    q = p.createElement("script"),
    l = p.getElementsByTagName("script")[0],
    n = [],
    v = 0,
    r,
    u;
  a.XMLHttpRequest && (r = new a.XMLHttpRequest, "withCredentials" in r ? u = function(b) {
    r = new a.XMLHttpRequest;
    r.open("get", b, !0);
    return r
  }: a.XDomainRequest && (u = function(b) {
    r = new a.XDomainRequest;
    r.open("get", b);
    return r
  }));
  var m = u;
  a.JcorsLoader = {
    load: m ? f: e
  }
})(window);
var dbits, canary = 0xdeadbeefcafe,
  j_lm = 15715070 == (canary & 16777215);
function BigInteger(a, b, c) {
  null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
}
function nbi() {
  return new BigInteger(null)
}
function am1(a, b, c, d, f, e) {
  for (; 0 <= --e;) {
    var p = b * this[a++] + c[d] + f;
    f = Math.floor(p / 67108864);
    c[d++] = p & 67108863
  }
  return f
}
function am2(a, b, c, d, f, e) {
  var p = b & 32767;
  for (b >>= 15; 0 <= --e;) {
    var q = this[a] & 32767,
      l = this[a++] >> 15,
      n = b * q + l * p;
    q = p * q + ((n & 32767) << 15) + c[d] + (f & 1073741823);
    f = (q >>> 30) + (n >>> 15) + b * l + (f >>> 30);
    c[d++] = q & 1073741823
  }
  return f
}
function am3(a, b, c, d, f, e) {
  var p = b & 16383;
  for (b >>= 14; 0 <= --e;) {
    var q = this[a] & 16383,
      l = this[a++] >> 14,
      n = b * q + l * p;
    q = p * q + ((n & 16383) << 14) + c[d] + f;
    f = (q >> 28) + (n >> 14) + b * l;
    c[d++] = q & 268435455
  }
  return f
}
j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2, dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28);
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
  BI_RC = [],
  rr,
  vv;
rr = 48;
for (vv = 0; 9 >= vv; ++vv) BI_RC[rr++] = vv;
rr = 97;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;
rr = 65;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;
function int2char(a) {
  return BI_RM.charAt(a)
}
function intAt(a, b) {
  a = BI_RC[a.charCodeAt(b)];
  return null == a ? -1 : a
}
function bnpCopyTo(a) {
  for (var b = this.t - 1; 0 <= b; --b) a[b] = this[b];
  a.t = this.t;
  a.s = this.s
}
function bnpFromInt(a) {
  this.t = 1;
  this.s = 0 > a ? -1 : 0;
  0 < a ? this[0] = a: -1 > a ? this[0] = a + this.DV: this.t = 0
}
function nbv(a) {
  var b = nbi();
  b.fromInt(a);
  return b
}
function bnpFromString(a, b) {
  if (16 == b) b = 4;
  else if (8 == b) b = 3;
  else if (256 == b) b = 8;
  else if (2 == b) b = 1;
  else if (32 == b) b = 5;
  else if (4 == b) b = 2;
  else {
    this.fromRadix(a, b);
    return
  }
  this.s = this.t = 0;
  for (var c = a.length,
         d = !1,
         f = 0; 0 <= --c;) {
    var e = 8 == b ? a[c] & 255 : intAt(a, c);
    0 > e ? "-" == a.charAt(c) && (d = !0) : (d = !1, 0 == f ? this[this.t++] = e: f + b > this.DB ? (this[this.t - 1] |= (e & (1 << this.DB - f) - 1) << f, this[this.t++] = e >> this.DB - f) : this[this.t - 1] |= e << f, f += b, f >= this.DB && (f -= this.DB))
  }
  8 == b && 0 != (a[0] & 128) && (this.s = -1, 0 < f && (this[this.t - 1] |= (1 << this.DB - f) - 1 << f));
  this.clamp();
  d && BigInteger.ZERO.subTo(this, this)
}
function bnpClamp() {
  for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;)--this.t
}
function bnToString(a) {
  if (0 > this.s) return "-" + this.negate().toString(a);
  if (16 == a) a = 4;
  else if (8 == a) a = 3;
  else if (2 == a) a = 1;
  else if (32 == a) a = 5;
  else if (4 == a) a = 2;
  else return this.toRadix(a);
  var b = (1 << a) - 1,
    c,
    d = !1,
    f = "",
    e = this.t,
    p = this.DB - e * this.DB % a;
  if (0 < e--) for (p < this.DB && 0 < (c = this[e] >> p) && (d = !0, f = int2char(c)); 0 <= e;) p < a ? (c = (this[e] & (1 << p) - 1) << a - p, c |= this[--e] >> (p += this.DB - a)) : (c = this[e] >> (p -= a) & b, 0 >= p && (p += this.DB, --e)),
  0 < c && (d = !0),
  d && (f += int2char(c));
  return d ? f: "0"
}
function bnNegate() {
  var a = nbi();
  BigInteger.ZERO.subTo(this, a);
  return a
}
function bnAbs() {
  return 0 > this.s ? this.negate() : this
}
function bnCompareTo(a) {
  var b = this.s - a.s;
  if (0 != b) return b;
  var c = this.t;
  b = c - a.t;
  if (0 != b) return 0 > this.s ? -b: b;
  for (; 0 <= --c;) if (0 != (b = this[c] - a[c])) return b;
  return 0
}
function nbits(a) {
  var b = 1,
    c;
  0 != (c = a >>> 16) && (a = c, b += 16);
  0 != (c = a >> 8) && (a = c, b += 8);
  0 != (c = a >> 4) && (a = c, b += 4);
  0 != (c = a >> 2) && (a = c, b += 2);
  0 != a >> 1 && (b += 1);
  return b
}
function bnBitLength() {
  return 0 >= this.t ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}
function bnpDLShiftTo(a, b) {
  var c;
  for (c = this.t - 1; 0 <= c; --c) b[c + a] = this[c];
  for (c = a - 1; 0 <= c; --c) b[c] = 0;
  b.t = this.t + a;
  b.s = this.s
}
function bnpDRShiftTo(a, b) {
  for (var c = a; c < this.t; ++c) b[c - a] = this[c];
  b.t = Math.max(this.t - a, 0);
  b.s = this.s
}
function bnpLShiftTo(a, b) {
  var c = a % this.DB,
    d = this.DB - c,
    f = (1 << d) - 1;
  a = Math.floor(a / this.DB);
  var e = this.s << c & this.DM,
    p;
  for (p = this.t - 1; 0 <= p; --p) b[p + a + 1] = this[p] >> d | e,
    e = (this[p] & f) << c;
  for (p = a - 1; 0 <= p; --p) b[p] = 0;
  b[a] = e;
  b.t = this.t + a + 1;
  b.s = this.s;
  b.clamp()
}
function bnpRShiftTo(a, b) {
  b.s = this.s;
  var c = Math.floor(a / this.DB);
  if (c >= this.t) b.t = 0;
  else {
    a %= this.DB;
    var d = this.DB - a,
      f = (1 << a) - 1;
    b[0] = this[c] >> a;
    for (var e = c + 1; e < this.t; ++e) b[e - c - 1] |= (this[e] & f) << d,
      b[e - c] = this[e] >> a;
    0 < a && (b[this.t - c - 1] |= (this.s & f) << d);
    b.t = this.t - c;
    b.clamp()
  }
}
function bnpSubTo(a, b) {
  for (var c = 0,
         d = 0,
         f = Math.min(a.t, this.t); c < f;) d += this[c] - a[c],
    b[c++] = d & this.DM,
    d >>= this.DB;
  if (a.t < this.t) {
    for (d -= a.s; c < this.t;) d += this[c],
      b[c++] = d & this.DM,
      d >>= this.DB;
    d += this.s
  } else {
    for (d += this.s; c < a.t;) d -= a[c],
      b[c++] = d & this.DM,
      d >>= this.DB;
    d -= a.s
  }
  b.s = 0 > d ? -1 : 0; - 1 > d ? b[c++] = this.DV + d: 0 < d && (b[c++] = d);
  b.t = c;
  b.clamp()
}
function bnpMultiplyTo(a, b) {
  var c = this.abs(),
    d = a.abs(),
    f = c.t;
  for (b.t = f + d.t; 0 <= --f;) b[f] = 0;
  for (f = 0; f < d.t; ++f) b[f + c.t] = c.am(0, d[f], b, f, 0, c.t);
  b.s = 0;
  b.clamp();
  this.s != a.s && BigInteger.ZERO.subTo(b, b)
}
function bnpSquareTo(a) {
  for (var b = this.abs(), c = a.t = 2 * b.t; 0 <= --c;) a[c] = 0;
  for (c = 0; c < b.t - 1; ++c) {
    var d = b.am(c, b[c], a, 2 * c, 0, 1); (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
  }
  0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1));
  a.s = 0;
  a.clamp()
}
function bnpDivRemTo(a, b, c) {
  var d = a.abs();
  if (! (0 >= d.t)) {
    var f = this.abs();
    if (f.t < d.t) null != b && b.fromInt(0),
    null != c && this.copyTo(c);
    else {
      null == c && (c = nbi());
      var e = nbi(),
        p = this.s;
      a = a.s;
      var q = this.DB - nbits(d[d.t - 1]);
      0 < q ? (d.lShiftTo(q, e), f.lShiftTo(q, c)) : (d.copyTo(e), f.copyTo(c));
      d = e.t;
      f = e[d - 1];
      if (0 != f) {
        var l = f * (1 << this.F1) + (1 < d ? e[d - 2] >> this.F2: 0),
          n = this.FV / l;
        l = (1 << this.F1) / l;
        var v = 1 << this.F2,
          r = c.t,
          u = r - d,
          m = null == b ? nbi() : b;
        e.dlShiftTo(u, m);
        0 <= c.compareTo(m) && (c[c.t++] = 1, c.subTo(m, c));
        BigInteger.ONE.dlShiftTo(d, m);
        for (m.subTo(e, e); e.t < d;) e[e.t++] = 0;
        for (; 0 <= --u;) {
          var g = c[--r] == f ? this.DM: Math.floor(c[r] * n + (c[r - 1] + v) * l);
          if ((c[r] += e.am(0, g, c, u, 0, d)) < g) for (e.dlShiftTo(u, m), c.subTo(m, c); c[r] < --g;) c.subTo(m, c)
        }
        null != b && (c.drShiftTo(d, b), p != a && BigInteger.ZERO.subTo(b, b));
        c.t = d;
        c.clamp();
        0 < q && c.rShiftTo(q, c);
        0 > p && BigInteger.ZERO.subTo(c, c)
      }
    }
  }
}
function bnMod(a) {
  var b = nbi();
  this.abs().divRemTo(a, null, b);
  0 > this.s && 0 < b.compareTo(BigInteger.ZERO) && a.subTo(b, b);
  return b
}
function Classic(a) {
  this.m = a
}
function cConvert(a) {
  return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
}
function cRevert(a) {
  return a
}
function cReduce(a) {
  a.divRemTo(this.m, null, a)
}
function cMulTo(a, b, c) {
  a.multiplyTo(b, c);
  this.reduce(c)
}
function cSqrTo(a, b) {
  a.squareTo(b);
  this.reduce(b)
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
  if (1 > this.t) return 0;
  var a = this[0];
  if (0 == (a & 1)) return 0;
  var b = a & 3;
  b = b * (2 - (a & 15) * b) & 15;
  b = b * (2 - (a & 255) * b) & 255;
  b = b * (2 - ((a & 65535) * b & 65535)) & 65535;
  b = b * (2 - a * b % this.DV) % this.DV;
  return 0 < b ? this.DV - b: -b
}
function Montgomery(a) {
  this.m = a;
  this.mp = a.invDigit();
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << a.DB - 15) - 1;
  this.mt2 = 2 * a.t
}
function montConvert(a) {
  var b = nbi();
  a.abs().dlShiftTo(this.m.t, b);
  b.divRemTo(this.m, null, b);
  0 > a.s && 0 < b.compareTo(BigInteger.ZERO) && this.m.subTo(b, b);
  return b
}
function montRevert(a) {
  var b = nbi();
  a.copyTo(b);
  this.reduce(b);
  return b
}
function montReduce(a) {
  for (; a.t <= this.mt2;) a[a.t++] = 0;
  for (var b = 0; b < this.m.t; ++b) {
    var c = a[b] & 32767,
      d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
    c = b + this.m.t;
    for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV,
      a[++c]++
  }
  a.clamp();
  a.drShiftTo(this.m.t, a);
  0 <= a.compareTo(this.m) && a.subTo(this.m, a)
}
function montSqrTo(a, b) {
  a.squareTo(b);
  this.reduce(b)
}
function montMulTo(a, b, c) {
  a.multiplyTo(b, c);
  this.reduce(c)
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
  return 0 == (0 < this.t ? this[0] & 1 : this.s)
}
function bnpExp(a, b) {
  if (4294967295 < a || 1 > a) return BigInteger.ONE;
  var c = nbi(),
    d = nbi(),
    f = b.convert(this),
    e = nbits(a) - 1;
  for (f.copyTo(c); 0 <= --e;) if (b.sqrTo(c, d), 0 < (a & 1 << e)) b.mulTo(d, f, c);
  else {
    var p = c;
    c = d;
    d = p
  }
  return b.revert(c)
}
function bnModPowInt(a, b) {
  b = 256 > a || b.isEven() ? new Classic(b) : new Montgomery(b);
  return this.exp(a, b)
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function Arcfour() {
  this.j = this.i = 0;
  this.S = []
}
function ARC4init(a) {
  var b, c;
  for (b = 0; 256 > b; ++b) this.S[b] = b;
  for (b = c = 0; 256 > b; ++b) {
    c = c + this.S[b] + a[b % a.length] & 255;
    var d = this.S[b];
    this.S[b] = this.S[c];
    this.S[c] = d
  }
  this.j = this.i = 0
}
function ARC4next() {
  this.i = this.i + 1 & 255;
  this.j = this.j + this.S[this.i] & 255;
  var a = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = a;
  return this.S[a + this.S[this.i] & 255]
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
  return new Arcfour
}
var rng_psize = 256,
  rng_state, rng_pool, rng_pptr;
function rng_seed_int(a) {
  rng_pool[rng_pptr++] ^= a & 255;
  rng_pool[rng_pptr++] ^= a >> 8 & 255;
  rng_pool[rng_pptr++] ^= a >> 16 & 255;
  rng_pool[rng_pptr++] ^= a >> 24 & 255;
  rng_pptr >= rng_psize && (rng_pptr -= rng_psize)
}
function rng_seed_time() {
  rng_seed_int((new Date).getTime())
}
if (null == rng_pool) {
  rng_pool = [];
  rng_pptr = 0;
  var t;
  if (window.crypto && window.crypto.getRandomValues) {
    var ua = new Uint8Array(32);
    window.crypto.getRandomValues(ua);
    for (t = 0; 32 > t; ++t) rng_pool[rng_pptr++] = ua[t]
  }
  if ("Netscape" == navigator.appName && "5" > navigator.appVersion && window.crypto) {
    var z = window.crypto.random(32);
    for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255
  }
  for (; rng_pptr < rng_psize;) t = Math.floor(65536 * Math.random()),
    rng_pool[rng_pptr++] = t >>> 8,
    rng_pool[rng_pptr++] = t & 255;
  rng_pptr = 0;
  rng_seed_time()
}
function rng_get_byte() {
  if (null == rng_state) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
    rng_pptr = 0
  }
  return rng_state.next()
}
function rng_get_bytes(a) {
  var b;
  for (b = 0; b < a.length; ++b) a[b] = rng_get_byte()
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function parseBigInt(a, b) {
  return new BigInteger(a, b)
}
function linebrk(a, b) {
  for (var c = "",
         d = 0; d + b < a.length;) c += a.substring(d, d + b) + "\n",
    d += b;
  return c + a.substring(d, a.length)
}
function byte2Hex(a) {
  return 16 > a ? "0" + a.toString(16) : a.toString(16)
}
function pkcs1pad2(a, b) {
  if (b < a.length + 11) return alert("Message too long for RSA"),
    null;
  for (var c = [], d = a.length - 1; 0 <= d && 0 < b;) {
    var f = a.charCodeAt(d--);
    128 > f ? c[--b] = f: 127 < f && 2048 > f ? (c[--b] = f & 63 | 128, c[--b] = f >> 6 | 192) : (c[--b] = f & 63 | 128, c[--b] = f >> 6 & 63 | 128, c[--b] = f >> 12 | 224)
  }
  c[--b] = 0;
  a = new SecureRandom;
  for (d = []; 2 < b;) {
    for (d[0] = 0; 0 == d[0];) a.nextBytes(d);
    c[--b] = d[0]
  }
  c[--b] = 2;
  c[--b] = 0;
  return new BigInteger(c)
}
function pkcs1pad2Uint8(a, b) {
  if (b < a.length + 11) return alert("Message too long for RSA"),
    null;
  for (var c = [], d = a.length - 1; 0 <= d && 0 < b;) {
    var f = a[d--];
    c[--b] = f
  }
  c[--b] = 0;
  a = new SecureRandom;
  for (d = []; 2 < b;) {
    for (d[0] = 0; 0 == d[0];) a.nextBytes(d);
    c[--b] = d[0]
  }
  c[--b] = 2;
  c[--b] = 0;
  return new BigInteger(c)
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
}
function RSASetPublic(a, b) {
  null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = parseBigInt(a, 16), this.e = parseInt(b, 16)) : alert("Invalid RSA public key")
}
function RSADoPublic(a) {
  return a.modPowInt(this.e, this.n)
}
function RSAEncrypt(a) {
  a = pkcs1pad2(a, this.n.bitLength() + 7 >> 3);
  if (null == a) return null;
  a = this.doPublic(a);
  if (null == a) return null;
  a = a.toString(16);
  return 0 == (a.length & 1) ? a: "0" + a
}
function RSAUint8ArrayEncrypt(a) {
  a = pkcs1pad2Uint8(a, this.n.bitLength() + 7 >> 3);
  if (null == a) return null;
  a = this.doPublic(a);
  if (null == a) return null;
  a = a.toString(16);
  return 0 == (a.length & 1) ? a: "0" + a
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encryptUint8 = RSAUint8ArrayEncrypt;
function aesEncrypt(a, b) {
  b = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.AES.encrypt(a, b)
}
function tripleDesEncrypt(a, b) {
  b = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.TripleDES.encrypt(a, b, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
}
function tripleDesDecrypt(a, b) {
  b = CryptoJS.enc.Hex.parse(b);
  return CryptoJS.TripleDES.decrypt(a, b, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
}
function sha1DigestBase64(a) {
  return Base64.encodeUint8Array(anysign.hex.hexStrToUint8Array(CryptoJS.SHA1(a) + ""))
}
function sha1Digest(a) {
  return CryptoJS.SHA1(a)
}
function md5Digest(a) {
  return CryptoJS.MD5(a)
}
var pubN = "d037777822c2a94b31c6cfe99c407bea0cae3945ad00412284523eb304632dc63e66937fa2117fd4f26f805b323be9219bde8fff7d02e9173d309400128e2e9d8729170be8d6e2dfb7b65d4801d29adfde11d7bb1ce716c55fcc6a24457e06fc3e183c4ea0323aed95de0eabce0bdd7ea6ba3f7062a96a0d503ab510a2e0e501",
  pubE = "10001",
  encCertSN = "1b40000000000005db00";
function rsaPubkeyEnc(a, b, c) {
  var d = new RSAKey;
  d.setPublic(a, b);
  a = d.encrypt(c);
  a = anysign.hex.hexStrToUint8Array(a);
  return Base64.encodeUint8Array(a)
}
function rsaPubkeyUint8Enc(a, b, c) {
  var d = new RSAKey;
  d.setPublic(a, b);
  a = d.encryptUint8(c);
  a = anysign.hex.hexStrToUint8Array(a);
  return Base64.encodeUint8Array(a)
}
function rsaPubkeyEncByDefault(a) {
  return rsaPubkeyEnc(pubN, pubE, a)
}
function rsaPubkeyUint8EncByDefault(a) {
  return rsaPubkeyUint8Enc(pubN, pubE, a)
};


// document.write("<script language=javascript src=\"libs/jquery-1.4.2.min.js\" charset=\"utf-8\"></script>");
/*!
 * jQuery JavaScript Library v1.4.2
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
  e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
  "&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
  true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
  Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
    (d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
    a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
    "find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
    function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
  c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
    L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
    "isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
    a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
    d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
    a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
    !c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
  true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
  var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
    parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
    false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
    s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
    applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
  else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
    a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
    w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
  cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
    " ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
    this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
    e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
    c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
    a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
  function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
    k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
    C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
    null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
    e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
    f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
    if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
  fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
    d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
        "events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
  a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
  isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
  {setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
  if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
    e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
        "_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
      d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
      !a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
    toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
    u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
    function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
    if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
    e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
    t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
    g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
    for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
    1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
      CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
    relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
        l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
        h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
      CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
        g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
      text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
    setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
        h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
        m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
      "="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
    !h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
    h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
  q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
    if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
    (function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
      function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
    gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
      c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
      {},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
      "string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
      d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
      a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
    1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
    a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
      c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
    wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
    prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
      this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
      return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
      ""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
      this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
      u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
    1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
    return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
      ""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
      c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
      c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
    function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
      Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
      "border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
      a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
    a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
      "string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
    serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
      global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
    e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
      "&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
      false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
      false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
      c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
    d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
      g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
      1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
      "json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
      if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
      this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
      "olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
    animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
      j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
      this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
    "number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
      c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
      this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
      this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
      e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
    c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
    function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
      this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
      k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
      f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
      a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
      c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
      d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
        f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
    "pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
  e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


// -----------------------------本身值
var core;


function AnySignApi() {
  //functions return value
  var RESULT_OK = 0; //操作成功
  var RESULT_ERROR = -1; //操作失败
  var EC_API_NOT_INITED = 1; //接口未初始化错误
  var EC_WRONG_CONTEXT_ID = 2; //context_id传值错误
  var EC_NATIVE_EXCEPTION = 3; //浏览器内部错误，可至Android/sdcard/AnySign/lastCrash.txt中查询具体错误
  var EC_TEMPLATE_NOT_SET = 4; //当没有配置模板时试图调用签名时弹出，因为不能对空数据做签名
  var EC_COMMENT_ALREADY_SHOW = 5; //批注框已经弹出

  //constants
  var CALLBACK_TYPE_SIGNATURE = 10; //签名框点击确认之后的回调，回调中包含签名快照
  var CALLBACK_TYPE_DIALOG_CANCEL = 11; //点击签名框"取消"按钮时的回调，同时也会触发dismiss回调
  var CALLBACK_TYPE_COMMENTSIGN = 12; //批注签名框点击确认之后的回调，回调中包含签名快照
  var CALLBACK_TYPE_GETVERSION = 13; //获得版本号
  var CALLBACK_TYPE_START_RECORDING = 14;
  var CALLBACK_TYPE_STOP_RECORDING = 15;

  /**
   * 初始化签名对象，通常从打开客户端到关闭客户端，中间只需要初始化一次。
   * 要求回调函数至少有3个参数，参数定义如下面callback参数定义
   * @param callback Function with 3 params(int context_id, int callback_type, String data)
   * @param channel Function with 3 params(int context_id, int callback_type, String data)
   * @returns {boolean} 是否初始化成功以及是否回调函数参数满足要求
   */
  this.initAnySignApi = function (callback, channel) {
    if (callback && (callback instanceof Function) && callback.length >= 3) {
      core = new anysignWebImpl();
      core._initAnySignApi(callback, channel);
      return true;
    } else {
      return false;
    }
  }

  this.addDataObj = function (context_id, dataConfig) {
    if (!dataConfig instanceof DataConfig) {
      return false;
    }

    return core._addDataObj(context_id, dataConfig);
  }


  /**
   * 配置一个签名，context_id区间为[20,30)，20~29为普通签名，30~39为多字批示。
   * 根据signatureConfig配置签字相应属性。
   * @param context_id 签字对象唯一标识
   * @param signatureConfig 签字配置信息
   * @returns {boolean}
   */
  this.addSignatureObj = function (context_id, signatureConfig) {
    if (!signatureConfig instanceof SignatureConfig)
      return false;

    return core._addSignatureObj(context_id, signatureConfig);
  }


  /**
   * 配置一个批注签名，context_id区间为[30,40)，[300,400),20~29为普通签名，30~39为多字批示。
   * 根据signatureConfig配置签字相应属性。
   * @param context_id 签字对象唯一标识
   * @param signatureConfig 签字配置信息
   * @returns {boolean}
   */
  this.addCommentObj = function (context_id, signatureConfig) {
    if (!signatureConfig instanceof SignatureConfig)
      return false;

    return core._addCommentObj(context_id, signatureConfig);
  }


  /**

   *添加证据接口

   */

  this.addEvidence = function (context_id, content, format, bioType, index) {

    return core._addEvidence(context_id, content, format, bioType, index);
  }
  this.addEvidenceHashData = function(context_id, content, format, bioType,index)

  {

    return core._addEvidenceHashData(context_id, content, format, bioType,index);

  }

  /**
   * 添加证据hash值
   * content：为Hash计算之后的值
   */
  this.addEvidenceHash = function(context_id, content, format, bioType,index)
  {
    return core._addEvidenceHash(context_id, content, format, bioType,index);
  }


  /**
   * 配置一个公司签章
   * @param signatureConfig 公司签章对象
   * @returns {boolean}
   */
  this.addCachetObj = function (cachetConfig) {
    if (!(cachetConfig instanceof CachetConfig)) {
      return false;
    }

    return core._addChachetObj(cachetConfig);
  }

  /**
   * 暂未实现
   * 配置一个拍照对象，在#commitConfig()之前可以调用，context_id区间为[50,1000)
   * @param context_ids 对象id数组，适用于多个相同配置的签字对象
   * @param photoConfig 照片的配置信息
   * @returns {boolean} 是否添加成功：true：成功；false：配置文件格式错误、context_ids不是数组或者长度为0
   */
  this.addPhotoObj = function (context_id, photoConfig) {
    if (!(photoConfig instanceof PhotoConfig))
      return false;

    return true;
  }

  /**
   * 暂未实现
   * 配置一个多媒体对象，在#commitConfig()之前可以调用，context_id区间为[50,1000)
   * @param context_ids 对象id数组，适用于多个相同配置的签字对象
   * @param mediaConfig 多媒体的配置信息
   * @returns {boolean} 是否添加成功：true：成功；false：配置文件格式错误、context_ids不是数组或者长度为0
   */
  this.addMediaObj = function (context_id, mediaConfig) {
    if (!(mediaConfig instanceof MediaConfig))
      return false;

    return true;
  }

  /**
   * 设置表单数据，每次业务都需要set一次
   * @param template_type 签名所用的模板id, 即context id
   * @param contentUtf8Str 表单数据，类型为Utf8字符串
   * @param template_serial 模板序列号
   * @param businessId 业务工单号
   * @returns {*} 是否设置成功
   */
  this.setTemplate = function (template_type, contentUtf8Str, businessId, template_serial) {
    if (core)
      return core._setTemplate(template_type, contentUtf8Str, businessId, template_serial);
    else
      return false;
  }

  this.setTID = function (tid) {
    return core._setTID(tid);
  }

  /**
   *
   * @param context_id
   * @param data utf8字符串或者uint8Array数组
   * @returns {*} 是否设置成功
   */
  this.setData = function (context_id, data) {
    return core._setData(context_id, data);
  }

  /**
   * 弹出根据context_id区分的普通、批示签名
   * @param context_id
   * @return 是否成功弹出：成功：0 错误：相应EC错误码定义
   */
  this.showSignatureDialog = function (context_id) {
    return core._showSignatureDialog(context_id);
  }
  //单字签名
  this.showSingleSignDialog = function(context_id){
    return core._showSingleSignDialog(context_id);
  }

  /**
   * 弹出根据context_id区分的普通、批示签名
   * @param context_id
   * @return 是否成功弹出：成功：0 错误：相应EC错误码定义
   */
  this.showCommentDialog = function (context_id) {
    return core._showCommentDialog(context_id);
  }

  this.showCommentDialogSign = function(context_id)
  {
    return core._showCommentDialogSign(context_id);
  }

  this.setIdentifyCallBack = function(callBack){
    return core._setIdentifyCallBack(callBack);
  }


  /**
   * 提交更改，一旦调用，在本次签名流程中不允许再设置表单数据(setTableData)和签名、拍照配置等信息
   */
  this.commitConfig = function () {
    return core._commitConfig();
  }

  /**
   * 重新配置Api，调用之后可以设置表单数据(setTableData)和签名、拍照配置等信息
   * 注：前一次业务的签名、拍照等数据会被清空
   */
  this.resetConfig = function () {
    return core._resetConfig();
  }


  /**
   * 一次业务完成(签名、拍照均做完)后，调用此接口判断上传诗句是否准备就绪
   * @return ture false
   */
  this.isReadyToUpload = function () {
    return core._isReadyToUpload();
  }


  /**
   * 一次业务完成(签名、拍照均做完)后，调用此接口获取须上传至信手书服务器的业务加密数据
   * @return 加密的业务数据。如果
   */
  this.getUploadDataGram = function () {
    return core._getUploadDataGram();
  }

//  /**
//   * 保存当前的数据
//   * @return 加密的业务数据。
//   */
//  this.saveBusiness = function(encKey)
//  {
//      return core._saveBusinessSession(encKey);
//  }
//  /**
//   * 恢复之前保存的加密业务数据
//   */
//  this.restoreBusiness = function(encData, desKey)
//  {
//      return core._restoreBusinessSession(encData, desKey);
//  }

  /**
   * 保存当前的数据
   * @return 加密的业务数据。
   */
  this.getUploadDataGram = function () {
    return core._getUploadDataGram();
  }

  /**
   * 获得版本信息
   * @param null
   * @returns null
   */
  this.getVersion = function(){
    return "AnySign_V1.3.3_Web_2.3.1";
  }

  /**
   * 获取操作系统信息，格式为"操作系统名##版本号"，如"android##4.1.2"、"ios##7.1.2"
   * @returns {*}
   */
  this.getOSInfo = function () {
    return core._getOSInfo();
  }
}

/**
 * 信手书数据容器，用于存放证据信息等数据
 * @constructor
 */
function DataConfig()
{
  this.cid = 0;
  this.name = null;//此数据项的名称
  this.format = null;
  this.nessesary = true;//此DataObj是否为必须，即如果此DataObj数据为空，当nessesary为true时，getEncodedSignData会报错返空，isReadyToUpload返回false
}


/**
 * 签名配置，配合AnySignApi实例的addSignatureObj函数为此次签名事务添加一个签名
 * @param signer 签名人，参考Signer定义
 * @param signRule 签名规则，参考SignRule_Tid等SignRule定义
 * @constructor
 */
function SignatureConfig(signer, signRule)
{
  if(!signer || !signRule)
  {
    throw "SignatureConfig constructor parameter signer or signRule could not be null.";
  }

  if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
    && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
  {
    throw  "SignatureConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
  }

  this.signer = signer;//签名人信息，为必填项

  this.signRule = signRule;//签名放置到文档中的规则，如位置，大小等，为必填项

  this.cid = 0;
  this.title = "请投保人刘伟签名";//签字输入有效，签字框标题
  this.titleSpanFromOffset = 4;//当为普通签名时有效，表示title中需要放大显示字体的数组起始index
  this.titleSpanToOffset = 5;//当为普通签名时有效，表示title中需要放大显示字体的数组结束index

  this.isTSS = false;
  this.nessesary = false;//是否为必签项
  this.singleWidth = 500;//(只针对签名)生成的签字最大宽度(不排除实际签名宽度小于此值)，单位像素
  this.singleHeight = 500;//(只针对签名)生成的签字最大高度(不排除实际签名高度小于此值)，单位像素
  this.penColor = "#000000";//RGB，默认为黑色，每通道为0~255的16进制值，如#ffffff为白色

  this.timeTag = null;//签名人信息，为必填项, 1:时间在上、2：时间在下、3：时间在右
  this.isdistinguish = false;//是否开启识别
  this.ocrCapture = null;//识别参数
  this.isShowBgText = true;//背景提示字
  this.strokeWidth = 7.5;//笔迹粗细

}

/**
 * 批注的配置信息
 * @param signer
 * @param signRule
 * @constructor
 */
function CommentConfig(signer, signRule)
{
  if(!signer || !signRule)
  {
    throw "CommentConfig constructor parameter signer or signRule could not be null.";
  }

  if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
    && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
  {
    throw  "SignatureConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
  }

  this.signer = signer;//签名人信息，为必填项
  this.signRule = signRule;//签名放置到文档中的规则，如位置，大小等，为必填项
  this.cid = 30;//批注索引值
  this.commitment = "本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。";
  this.mass_words_in_single_line = 25;//批注图片每行多少字
  this.mass_word_height = 75;//每个字的大小的高
  this.mass_word_width = 50;//每个字的大小的宽
  this.penColor = "#000000";//RGB，默认为黑色，每通道为0~255的16进制值，如#ffffff为白色
  this.nessesary = false;//是否为必签项
  this.isdistinguish = false;//是否开启识别
  this.ocrCapture = null;//识别参数
  this.isShowBgText = true;//是否显示背景字
  this.currentEditBarTextColor = "#FF0000";//提示字的颜色
  this.mass_dlg_type = CommentInputType.Normal;//判断批注类型，不同类型打开不同的批注界面

}


function OCRCapture()
{
  this.text = "a";

  this.IPAdress = "";

  this.appID = "";

  this.serviceID = "";

  this.resolution = 80;

  this.language = Language.CHS;

  this.count = 10;

  this.headers = {};
}

/**
 * 单位签章对象，配合AnySignApi实例的addCachetObj配置一个单位签章
 * @param signer 签名人，参考Signer
 * @param signRule 签名规则，参考SignRule_KeyWord和SignRule_Tid
 * @param isTss bool, 是否加盖时间戳，默认为false
 * @constructor
 */
function CachetConfig(signer, signRule, isTss)
{
  if(!(signer instanceof Signer))
  {
    throw "CachetConfig constructor parameter signer invalid";
  }
  this.Signer = signer;

  if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
    && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
  {
    throw  "CachetConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
  }
  this.SignRule = signRule;

  this.IsTSS = isTss;
}


/**
 * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
 * @param keyword 关键字
 * @param keyWordAlignMethod 签字图片和关键字位置关系：等于1时，签字图片和关键字矩形重心重合
 *                            等于2时，签字图片位于关键字正下方，中心线对齐；等于3时，签字图片位于关键字正右方，中心线对齐；
 *                            等于4时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
 * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
 * @param pageNo 寻找关键字的PDF起始页码
 * @param KWIndex KWIndex 第几个关键字
 * @constructor
 */
var SignRule_KeyWord = function(keyword, keyWordAlignMethod, keyWordOffset, pageNo, KWIndex)
{
  if(!keyword || keyword.length === 0)
  {
    throw "SignRule_KeyWordV2 constructor parameter keyword could not be null or empty";
  }

  if(keyWordAlignMethod !== 1 && keyWordAlignMethod !== 2 && keyWordAlignMethod !== 3 && keyWordAlignMethod != 4)
  {
    throw "SignRule_KeyWord constructor parameter keyWordAlignMethod invalid, should be one of '1' '2' '3' '4'";
  }

  this.RuleType = "0";

  if(!isNaN(pageNo) && !isNaN(keyWordOffset) && !isNaN(KWIndex))
  {
    this.KWRule = {KW:keyword, KWPos:keyWordAlignMethod, KWOffset:keyWordOffset, Pageno:pageNo,KWIndex:KWIndex, XOffset:0, YOffset:0};
  }
}



/**
 *根据关键字定位签名位置
 * @param keyWord 关键字字面值
 * @param xOffset X轴偏移量，适配关键字和规则
 * @param yOffset Y轴偏移量，适配关键字和规则
 * @param pageNo 签名在PDF中的页码，第几页查找关键字，正数为正序，当是负数为倒序
 * @param KWIndex KWIndex 第几个关键字
 * @constructor  批注暂不支持
 */
var SignRule_KeyWordV2 = function(keyword, xOffset, yOffset, pageNo,  KWIndex){
  if(!keyword || keyword.length === 0)
  {
    throw "SignRule_KeyWordV2 constructor parameter keyword could not be null or empty";
  }
  this.RuleType = "0";

  if(!isNaN(pageNo) && !isNaN(KWIndex))
  {
    this.KWRule = {KW:keyword, KWPos: 0,KWOffset:0,XOffset:xOffset, YOffset:yOffset, Pageno :pageNo,KWIndex:KWIndex};
  }

}

/**
 * 使用服务器规则配置签名
 * @param tid 服务器端生成的配置规则
 * @constructor
 */
var SignRule_Tid = function(tid)
{
  if(!tid || tid.length === 0)
  {
    throw "SignRule_Tid constructor parameter tid could not be null or empty";
  }

  this.RuleType = "2";

  this.Tid = tid;
}

/**
 * 根据坐标定位签名方式
 * @param left 签名图片最左边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param top 签名图片顶边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param right 签名图片最右边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param bottom 签名图片底边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param pageNo 签名在PDF中的页码，从1开始
 * @param unit 坐标系单位，目前支持"dp"和"pt"
 * @constructor
 */
var SignRule_XYZ = function(left, top, right, bottom, pageNo, unit)
{
  if(isNaN(left) || isNaN(top) || isNaN(right) || isNaN(bottom) || isNaN(pageNo))
  {
    throw "SignRule_XYZ constructor parameter invalid, only float or int permitted";
  }

  if(right < left)
  {
    throw "SignRule_XYZ constructor left must be less than right"
  }

  if(top < bottom)
  {
    throw "SignRule_XYZ constructor top must not be less than bottom"
  }

  if(!unit || (unit !== "pt" && unit !== "dp"))
  {
    throw "SignRule_XYZ constructor parameter unit can only be 'dp' or 'pt'";
  }

  this.RuleType = "1";

  this.XYZRule = {Left:left, Top:top, Right:right, Bottom:bottom, Pageno:pageNo, Unit:unit};
}

var Signer = function(name, id_num)
{
  if(!name || !id_num || name.length === 0 || id_num.length === 0)
  {
    throw "Signer constructor parameter name and id could not be null or empty";
  }

  this.UName = name;

  this.IDNumber = id_num;

  this.IDType = "1";
}

var TimeTag = function(position, format)
{
  if(!position || !format || position.length === 0 || format.length === 0)
  {
    throw "TimeTag constructor parameter { and position could not be null or empty";
  }

  this.Pos = position;//1:时间在上、2：时间在下、3：时间在右

  this.Format = format;
}

//用于DataConfig的format项，当此项为多媒体时使用，其它情况format项为null即可
var DataFormat =
  {
    IMAGE_GIF : "image/gif",
    IMAGE_JPEG : "image/jpeg",
    IMAGE_PNG : "image/png",
    MEDIA_AU : "media/au",
    MEDIA_AIFF : "media/aiff",
    MEDIA_WAVE : "media/wave",
    MEDIA_MIDI : "media/midi",
    MEDIA_MP4 : "media/mp4",
    MEDIA_M4V : "media/m4v",
    MEDIA_3G2 : "media/3g2",
    MEDIA_3GP2 : "media/3gp2",
    MEDIA_3GP : "media/3gp",
    MEDIA_3GPP : "media/3gpp"
  }

var TemplateType =
  {
    XML : 10,
    HTML : 11,
    PDF : 12,
    JSON : 13,
    PRESERVED : 19
  };

var EncAlgType =
  {
    EncAlg : "RSA"
  };

var BioType =
  {
    /** 签名人居民身份证正面 **/
    PHOTO_SIGNER_IDENTITY_CARD_FRONT : 0,
    /** 签名人居民身份证背面 **/
    PHOTO_SIGNER_IDENTITY_CARD_BACK : 1,
    /** 签名人复述录音 **/
    SOUND_SIGNER_RETELL : 2,
    /** 签名人自定义录音 **/
    SOUND_SIGNER_OTHER : 3
  };

var Language =
  {
    CHS : 1,
    CHT : 2
  };

var CommentInputType =
  {
    Scrollable : "scrollable",
    Normal : "normal",
    WhiteBoard : "whiteBoard"
  }


export {AnySignApi, EncAlgType, OCRCapture, Language, BioType, TemplateType, DataFormat, Signer,SignRule_XYZ,SignRule_KeyWord,SignRule_KeyWordV2,SignatureConfig,CommentConfig,SignRule_Tid,CachetConfig,TimeTag,sign_confirm,clear_canvas,cancelSign}
