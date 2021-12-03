
<div class="header">

<div class="headerNav" style="">
<div class="tripTypeDisplayWrapper">
<span class="tripTypeDisplay">Vols</span>
<span class="dropdownArrow"></span>
</div>
<div class="tripTypeSelect" style="display: none;">
<div class="tripOption selectedTripOption" data-value="flights">Vols</div>
<div class="tripOption" data-value="hotels">Hôtels</div>
</div>
</div>
</div>
<div class="searchWrap hotels" style="display:none;">
<div class="searchTitle">Trouver des hôtels</div>
<div class="search-field-wrapper hotelsDestination-wrapper">
<input type="text" class="inputBar hotelsDestination" placeholder="Où">
</div>
<div class="search-field-wrapper hotelsStartDate-wrapper">
<input type="text" readonly="true" class="inputBar hotelsStartDate" placeholder="Arrivée">
</div>
<div class="search-field-wrapper hotelsEndDate-wrapper">
<input type="text" readonly="true" class="inputBar hotelsEndDate" placeholder="Départ">
</div>
<div class="search-field-wrapper hotelsDropdownContainer-wrapper">
<div class="dropdownContainer hotelsDropdownContainer">
<input type="text" readonly="true" class="inputBar hotelsDropdown" value="1 chambre, 1 personne">
<span class="dropdownArrow"></span>
</div>
</div>
<div class="search-field-wrapper hotelsSearch-wrapper">
<a class="searchButton hotelsSearch">Rechercher</a>
</div>
</div>
<div class="searchWrap flights">
<div class="searchTitle">Trouver un vol</div>
<div class="flightsType">
<div class="flightsTypeDisplayWrapper">
<span class="flightsTypeDisplay">Aller-retour</span>
<span class="dropdownArrow"></span>
</div>
<div class="flightsTypeSelect" style="display: none;">
<div class="flightsOption selectedOption" data-value="rt" value="Aller-retour">Aller-retour</div>
<div class="flightsOption" data-value="ow" value="Aller simple">Aller simple</div>
<div class="flightsOption" data-value="mc" value="Multi-destinations">Multi-destinations</div>
</div>
</div>
<div class="flightsRoundTrip">
<div class="search-field-wrapper flightsOrigin-wrapper">
<input type="text" class="inputBar flightsOrigin" placeholder="De">
</div>
<div class="search-field-wrapper flightsDestination-wrapper">
<input type="text" class="inputBar flightsDestination" placeholder="À">
</div>
<div class="search-field-wrapper flightsStartDate-wrapper">
<input type="text" readonly="true" class="inputBar flightsStartDate" placeholder="Départ">
</div>
<div class="search-field-wrapper flightsEndDate-wrapper">
<input type="text" readonly="true" class="inputBar flightsEndDate" placeholder="Retour">
</div>
</div>
<div class="flightsOneWay" style="display:none;">
<div class="search-field-wrapper flightsOrigin-wrapper">
<input type="text" class="inputBar flightsOrigin" placeholder="De">
</div>
<div class="search-field-wrapper flightsDestination-wrapper">
<input type="text" class="inputBar flightsDestination" placeholder="À">
</div>
<div class="search-field-wrapper flightsStartDate-wrapper">
<input type="text" readonly="true" class="inputBar flightsStartDate" placeholder="Départ">
</div>
</div>
<div class="search-field-wrapper flightsDropdownContainer-wrapper">
<div class="dropdownContainer flightsDropdownContainer">
<input type="text" readonly="true" class="inputBar flightsDropdown" value="1 voyageur, Économique">
<span class="dropdownArrow"></span>
</div>
</div>
<div class="search-field-wrapper flightsSearch-wrapper">
<a class="searchButton flightsSearch">Rechercher</a>
</div>
</div>
<div class="popularDestinations">
</div>
<div class="footer">@2020 KAYAK.com | Filiale de Booking Holdings Inc.</div>
<script type="text/javascript">
(function(h,C){"object"==typeof exports&&"undefined"!=typeof module?module.exports=C():"function"==typeof define&&define.amd?define(C):h.moment=C()})(this,function(){function h(){return ib.apply(null,arguments)}function C(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function ja(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function A(a){return void 0===a}function Y(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}
function ra(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function jb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function S(a,b){for(var c in b)v(b,c)&&(a[c]=b[c]);return v(b,"toString")&&(a.toString=b.toString),v(b,"valueOf")&&(a.valueOf=b.valueOf),a}function J(a,b,c,d){return kb(a,b,c,d,!0).utc()}function p(a){return null==a._pf&&(a._pf={empty:!1,unusedTokens:[],unusedInput:[],
overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),a._pf}function Ja(a){if(null==a._isValid){var b=p(a),c=Zb.call(b.parsedDateParts,function(a){return null!=a}),c=!isNaN(a._d.getTime())&&0>b.overflow&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(c=c&&0===b.charsLeftOver&&0===b.unusedTokens.length&&
void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return c;a._isValid=c}return a._isValid}function sa(a){var b=J(NaN);return null!=a?S(p(b),a):p(b).userInvalidated=!0,b}function Ka(a,b){var c,d,f;if(A(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),A(b._i)||(a._i=b._i),A(b._f)||(a._f=b._f),A(b._l)||(a._l=b._l),A(b._strict)||(a._strict=b._strict),A(b._tzm)||(a._tzm=b._tzm),A(b._isUTC)||(a._isUTC=b._isUTC),A(b._offset)||(a._offset=b._offset),A(b._pf)||(a._pf=p(b)),A(b._locale)||
(a._locale=b._locale),0<La.length)for(c=0;c<La.length;c++)d=La[c],f=b[d],A(f)||(a[d]=f);return a}function ka(a){Ka(this,a);this._d=new Date(null!=a._d?a._d.getTime():NaN);this.isValid()||(this._d=new Date(NaN));!1===Ma&&(Ma=!0,h.updateOffset(this),Ma=!1)}function T(a){return a instanceof ka||null!=a&&null!=a._isAMomentObject}function E(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function m(a){a=+a;var b=0;return 0!==a&&isFinite(a)&&(b=E(a)),b}function lb(a,b,c){var d,f=Math.min(a.length,b.length),
g=Math.abs(a.length-b.length),e=0;for(d=0;d<f;d++)(c&&a[d]!==b[d]||!c&&m(a[d])!==m(b[d]))&&e++;return e+g}function mb(a){!1===h.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function F(a,b){var c=!0;return S(function(){if(null!=h.deprecationHandler&&h.deprecationHandler(null,a),c){for(var d,f=[],g=0;g<arguments.length;g++){if(d="","object"==typeof arguments[g]){d+="\n["+g+"] ";for(var e in arguments[0])d+=e+": "+arguments[0][e]+", ";
d=d.slice(0,-2)}else d=arguments[g];f.push(d)}mb(a+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+Error().stack);c=!1}return b.apply(this,arguments)},b)}function nb(a,b){null!=h.deprecationHandler&&h.deprecationHandler(a,b);ob[a]||(mb(b),ob[a]=!0)}function K(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function pb(a,b){var c,d=S({},a);for(c in b)v(b,c)&&(ja(a[c])&&ja(b[c])?(d[c]={},S(d[c],a[c]),S(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);
for(c in a)v(a,c)&&!v(b,c)&&ja(a[c])&&(d[c]=S({},d[c]));return d}function Na(a){null!=a&&this.set(a)}function B(a,b){var c=a.toLowerCase();la[c]=la[c+"s"]=la[b]=a}function G(a){return"string"==typeof a?la[a]||la[a.toLowerCase()]:void 0}function Oa(a){var b,c,d={};for(c in a)v(a,c)&&(b=G(c),b&&(d[b]=a[c]));return d}function $b(a){var b=[],c;for(c in a)b.push({unit:c,priority:z[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function ea(a,b){return function(c){null!=c?(this.isValid()&&
this._d["set"+(this._isUTC?"UTC":"")+a](c),c=(h.updateOffset(this,b),this)):c=ta(this,a);return c}}function ta(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){var d=""+Math.abs(a);return(0<=a?c?"+":"":"-")+Math.pow(10,Math.max(0,b-d.length)).toString().substr(1)+d}function l(a,b,c,d){var f=d;"string"==typeof d&&(f=function(){return this[d]()});a&&(fa[a]=f);b&&(fa[b[0]]=function(){return O(f.apply(this,arguments),b[1],b[2])});c&&(fa[c]=function(){return this.localeData().ordinal(f.apply(this,
arguments),a)})}function ac(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function bc(a){var b,c,d=a.match(qb);b=0;for(c=d.length;b<c;b++)fa[d[b]]?d[b]=fa[d[b]]:d[b]=ac(d[b]);return function(b){var f,e="";for(f=0;f<c;f++)e+=K(d[f])?d[f].call(b,a):d[f];return e}}function Pa(a,b){return a.isValid()?(b=rb(b,a.localeData()),Qa[b]=Qa[b]||bc(b),Qa[b](a)):a.localeData().invalidDate()}function rb(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(ua.lastIndex=0;0<=d&&
ua.test(a);)a=a.replace(ua,c),ua.lastIndex=0,--d;return a}function k(a,b,c){Ra[a]=K(b)?b:function(a,f){return a&&c?c:b}}function cc(a,b){return v(Ra,a)?Ra[a](b._strict,b._locale):new RegExp(dc(a))}function dc(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,c,d,f,g){return c||d||f||g}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$\x26")}function q(a,b){var c,d=b;"string"==typeof a&&(a=[a]);Y(b)&&(d=function(a,c){c[b]=m(a)});for(c=0;c<a.length;c++)Sa[a[c]]=
d}function ma(a,b){q(a,function(a,d,f,g){f._w=f._w||{};b(a,f._w,f,g)})}function Ta(a,b){return(new Date(Date.UTC(a,b+1,0))).getUTCDate()}function sb(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=m(b);else if(b=a.localeData().monthsParse(b),!Y(b))return a;return c=Math.min(a.date(),Ta(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function tb(a){return null!=a?(sb(this,a),h.updateOffset(this,!0),this):ta(this,"Month")}function ub(){function a(a,b){return b.length-
a.length}var b,c,d=[],f=[],g=[];for(b=0;12>b;b++)c=J([2E3,b]),d.push(this.monthsShort(c,"")),f.push(this.months(c,"")),g.push(this.months(c,"")),g.push(this.monthsShort(c,""));d.sort(a);f.sort(a);g.sort(a);for(b=0;12>b;b++)d[b]=Z(d[b]),f[b]=Z(f[b]);for(b=0;24>b;b++)g[b]=Z(g[b]);this._monthsShortRegex=this._monthsRegex=new RegExp("^("+g.join("|")+")","i");this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i");this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function ga(a){return 0===
a%4&&0!==a%100||0===a%400}function ec(a,b,c,d,f,g,e){b=new Date(a,b,c,d,f,g,e);return 100>a&&0<=a&&isFinite(b.getFullYear())&&b.setFullYear(a),b}function va(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&0<=a&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function wa(a,b,c){c=7+b-c;return-((7+va(a,0,c).getUTCDay()-b)%7)+c-1}function vb(a,b,c,d,f){var g,e;c=(7+c-d)%7;d=wa(a,d,f);b=1+7*(b-1)+c+d;return 0>=b?(g=a-1,e=(ga(g)?366:365)+b):b>(ga(a)?366:365)?(g=a+1,e=b-(ga(a)?366:365)):
(g=a,e=b),{year:g,dayOfYear:e}}function na(a,b,c){var d,f,g=wa(a.year(),b,c),g=Math.floor((a.dayOfYear()-g-1)/7)+1;return 1>g?(f=a.year()-1,d=g+aa(f,b,c)):g>aa(a.year(),b,c)?(d=g-aa(a.year(),b,c),f=a.year()+1):(f=a.year(),d=g),{week:d,year:f}}function aa(a,b,c){var d=wa(a,b,c);b=wa(a+1,b,c);return((ga(a)?366:365)-d+b)/7}function Ua(){function a(a,b){return b.length-a.length}var b,c,d,f,g=[],e=[],h=[],k=[];for(b=0;7>b;b++)c=J([2E3,1]).day(b),d=this.weekdaysMin(c,""),f=this.weekdaysShort(c,""),c=this.weekdays(c,
""),g.push(d),e.push(f),h.push(c),k.push(d),k.push(f),k.push(c);g.sort(a);e.sort(a);h.sort(a);k.sort(a);for(b=0;7>b;b++)e[b]=Z(e[b]),h[b]=Z(h[b]),k[b]=Z(k[b]);this._weekdaysMinRegex=this._weekdaysShortRegex=this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i");this._weekdaysStrictRegex=new RegExp("^("+h.join("|")+")","i");this._weekdaysShortStrictRegex=new RegExp("^("+e.join("|")+")","i");this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Va(){return this.hours()%12||12}
function wb(a,b){l(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function xb(a,b){return b._meridiemParse}function yb(a){return a?a.toLowerCase().replace("_","-"):a}function zb(a){var b=null;if(!w[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=xa._abbr,require("./locale/"+a),ha(b)}catch(c){}return w[a]}function ha(a,b){var c;return a&&(c=A(b)?U(a):Wa(a,b),c&&(xa=c)),xa._abbr}function Wa(a,b){if(null!==b){var c=Ab;if(b.abbr=a,null!=w[a])nb("defineLocaleOverride",
"use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=w[a]._config;else if(null!=b.parentLocale){if(null==w[b.parentLocale])return oa[b.parentLocale]||(oa[b.parentLocale]=[]),oa[b.parentLocale].push({name:a,config:b}),null;c=w[b.parentLocale]._config}return w[a]=new Na(pb(c,b)),oa[a]&&oa[a].forEach(function(a){Wa(a.name,
a.config)}),ha(a),w[a]}return delete w[a],null}function U(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return xa;if(!C(a)){if(b=zb(a))return b;a=[a]}a:{for(var c,d,f,g=0;g<a.length;){f=yb(a[g]).split("-");b=f.length;for(c=(c=yb(a[g+1]))?c.split("-"):null;0<b;){if(d=zb(f.slice(0,b).join("-"))){a=d;break a}if(c&&c.length>=b&&lb(f,c,!0)>=b-1)break;b--}g++}a=null}return a}function Xa(a){var b,c=a._a;return c&&-2===p(a).overflow&&(b=0>c[P]||11<c[P]?P:1>c[L]||c[L]>Ta(c[H],c[P])?L:0>
c[x]||24<c[x]||24===c[x]&&(0!==c[I]||0!==c[Q]||0!==c[ba])?x:0>c[I]||59<c[I]?I:0>c[Q]||59<c[Q]?Q:0>c[ba]||999<c[ba]?ba:-1,p(a)._overflowDayOfYear&&(b<H||b>L)&&(b=L),p(a)._overflowWeeks&&-1===b&&(b=fc),p(a)._overflowWeekday&&-1===b&&(b=gc),p(a).overflow=b),a}function Bb(a){var b,c,d,f,g,e;b=a._i;var h=hc.exec(b)||ic.exec(b);if(h){p(a).iso=!0;b=0;for(c=ya.length;b<c;b++)if(ya[b][1].exec(h[1])){f=ya[b][0];d=!1!==ya[b][2];break}if(null==f)return void(a._isValid=!1);if(h[3]){b=0;for(c=Ya.length;b<c;b++)if(Ya[b][1].exec(h[3])){g=
(h[2]||" ")+Ya[b][0];break}if(null==g)return void(a._isValid=!1)}if(!d&&null!=g)return void(a._isValid=!1);if(h[4]){if(!jc.exec(h[4]))return void(a._isValid=!1);e="Z"}a._f=f+(g||"")+(e||"");za(a)}else a._isValid=!1}function Cb(a){var b,c,d,f,g,e,h={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"};if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=kc.exec(b)){if(b=
c[1]?"ddd"+(5===c[1].length?", ":" "):"",d="D MMM "+(10<c[2].length?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var k="Sun Mon Tue Wed Thu Fri Sat".split(" ")[(new Date(c[2])).getDay()];if(c[1].substr(0,3)!==k)return p(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===e?g=" +0000":(e="YXWVUTSRQPONZABCDEFGHIKLM".indexOf(c[5][1].toUpperCase())-12,g=(0>e?" -":" +")+(""+e).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:g=h[c[5]];break;default:g=h[" GMT"]}c[5]=g;a._i=c.splice(1).join("");
a._f=b+d+f+" ZZ";za(a);p(a).rfc2822=!0}else a._isValid=!1}function lc(a){var b=mc.exec(a._i);return null!==b?void(a._d=new Date(+b[1])):(Bb(a),void(!1===a._isValid&&(delete a._isValid,Cb(a),!1===a._isValid&&(delete a._isValid,h.createFromInputFallback(a)))))}function ia(a,b,c){return null!=a?a:null!=b?b:c}function Za(a){var b,c,d,f=[];if(!a._d){c=new Date(h.now());c=a._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()];if(a._w&&null==a._a[L]&&null==
a._a[P]){var g,e,k,l,m,n,r,q;(g=a._w,null!=g.GG||null!=g.W||null!=g.E)?(m=1,n=4,e=ia(g.GG,a._a[H],na(u(),1,4).year),k=ia(g.W,1),l=ia(g.E,1),(1>l||7<l)&&(q=!0)):(m=a._locale._week.dow,n=a._locale._week.doy,k=na(u(),m,n),e=ia(g.gg,a._a[H],k.year),k=ia(g.w,k.week),null!=g.d?(l=g.d,(0>l||6<l)&&(q=!0)):null!=g.e?(l=g.e+m,(0>g.e||6<g.e)&&(q=!0)):l=m);1>k||k>aa(e,m,n)?p(a)._overflowWeeks=!0:null!=q?p(a)._overflowWeekday=!0:(r=vb(e,k,l,m,n),a._a[H]=r.year,a._dayOfYear=r.dayOfYear)}null!=a._dayOfYear&&(d=
ia(a._a[H],c[H]),(a._dayOfYear>(ga(d)?366:365)||0===a._dayOfYear)&&(p(a)._overflowDayOfYear=!0),b=va(d,0,a._dayOfYear),a._a[P]=b.getUTCMonth(),a._a[L]=b.getUTCDate());for(b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=c[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[x]&&0===a._a[I]&&0===a._a[Q]&&0===a._a[ba]&&(a._nextDay=!0,a._a[x]=0);a._d=(a._useUTC?va:ec).apply(null,f);null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm);a._nextDay&&(a._a[x]=24)}}function za(a){if(a._f===
h.ISO_8601)return void Bb(a);if(a._f===h.RFC_2822)return void Cb(a);a._a=[];p(a).empty=!0;var b,c,d,f,g,e=""+a._i,k=e.length,l=0;d=rb(a._f,a._locale).match(qb)||[];for(b=0;b<d.length;b++)if(f=d[b],(c=(e.match(cc(f,a))||[])[0])&&(g=e.substr(0,e.indexOf(c)),0<g.length&&p(a).unusedInput.push(g),e=e.slice(e.indexOf(c)+c.length),l+=c.length),fa[f]){c?p(a).empty=!1:p(a).unusedTokens.push(f);var m=a;null!=c&&v(Sa,f)&&Sa[f](c,m._a,m,f)}else a._strict&&!c&&p(a).unusedTokens.push(f);p(a).charsLeftOver=k-l;
0<e.length&&p(a).unusedInput.push(e);12>=a._a[x]&&!0===p(a).bigHour&&0<a._a[x]&&(p(a).bigHour=void 0);p(a).parsedDateParts=a._a.slice(0);p(a).meridiem=a._meridiem;b=a._a;d=x;e=a._locale;g=a._a[x];var k=a._meridiem,n,e=null==k?g:null!=e.meridiemHour?e.meridiemHour(g,k):null!=e.isPM?(n=e.isPM(k),n&&12>g&&(g+=12),n||12!==g||(g=0),g):g;b[d]=e;Za(a);Xa(a)}function nc(a){if(!a._d){var b=Oa(a._i);a._a=jb([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,
10)});Za(a)}}function Db(a){var b=a._i,c=a._f;a._locale=a._locale||U(a._l);if(null===b||void 0===c&&""===b)a=sa({nullInput:!0});else if("string"==typeof b&&(a._i=b=a._locale.preparse(b)),T(b))a=new ka(Xa(b));else{if(ra(b))a._d=b;else if(C(c)){var d,f,g;if(0===a._f.length)p(a).invalidFormat=!0,a._d=new Date(NaN);else{for(b=0;b<a._f.length;b++)c=0,d=Ka({},a),null!=a._useUTC&&(d._useUTC=a._useUTC),d._f=a._f[b],za(d),Ja(d)&&(c+=p(d).charsLeftOver,c+=10*p(d).unusedTokens.length,p(d).score=c,(null==g||
c<g)&&(g=c,f=d));S(a,f||d)}}else c?za(a):oc(a);a=(Ja(a)||(a._d=null),a)}return a}function oc(a){var b=a._i;A(b)?a._d=new Date(h.now()):ra(b)?a._d=new Date(b.valueOf()):"string"==typeof b?lc(a):C(b)?(a._a=jb(b.slice(0),function(a){return parseInt(a,10)}),Za(a)):ja(b)?nc(a):Y(b)?a._d=new Date(b):h.createFromInputFallback(a)}function kb(a,b,c,d,f){var g={};!0!==c&&!1!==c||(d=c,c=void 0);var e;if(e=ja(a))a:{e=a;for(var h in e){e=!1;break a}e=!0}(e||C(a)&&0===a.length)&&(a=void 0);g._isAMomentObject=!0;
g._useUTC=g._isUTC=f;g._l=c;g._i=a;g._f=b;g._strict=d;a=new ka(Xa(Db(g)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function u(a,b,c,d){return kb(a,b,c,d,!1)}function Eb(a,b){var c,d;if(1===b.length&&C(b[0])&&(b=b[0]),!b.length)return u();c=b[0];for(d=1;d<b.length;++d)b[d].isValid()&&!b[d][a](c)||(c=b[d]);return c}function pc(a){for(var b in a)if(-1===pa.indexOf(b)||null!=a[b]&&isNaN(a[b]))return!1;b=!1;for(var c=0;c<pa.length;++c)if(a[pa[c]]){if(b)return!1;parseFloat(a[pa[c]])!==m(a[pa[c]])&&
(b=!0)}return!0}function Aa(a){a=Oa(a);var b=a.year||0,c=a.quarter||0,d=a.month||0,f=a.week||0,g=a.day||0,e=a.hour||0,h=a.minute||0,k=a.second||0,l=a.millisecond||0;this._isValid=pc(a);this._milliseconds=+l+1E3*k+6E4*h+36E5*e;this._days=+g+7*f;this._months=+d+3*c+12*b;this._data={};this._locale=U();this._bubble()}function $a(a){return a instanceof Aa}function ab(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function Fb(a,b){l(a,0,0,function(){var a=this.utcOffset(),d="+";return 0>a&&(a=-a,d="-"),
d+O(~~(a/60),2)+b+O(~~a%60,2)})}function bb(a,b){a=(b||"").match(a);if(null===a)return null;a=((a[a.length-1]||[])+"").match(qc)||["-",0,0];b=+(60*a[1])+m(a[2]);return 0===b?0:"+"===a[0]?b:-b}function cb(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(T(a)||ra(a)?a.valueOf():u(a).valueOf())-c.valueOf(),c._d.setTime(c._d.valueOf()+d),h.updateOffset(c,!1),c):u(a).local()}function db(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Gb(){return!!this.isValid()&&this._isUTC&&0===this._offset}
function M(a,b){var c,d,f=a;$a(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:Y(a)?(f={},b?f[b]=a:f.milliseconds=a):(b=rc.exec(a))?(c="-"===b[1]?-1:1,f={y:0,d:m(b[L])*c,h:m(b[x])*c,m:m(b[I])*c,s:m(b[Q])*c,ms:m(ab(1E3*b[ba]))*c}):(b=sc.exec(a))?(c="-"===b[1]?-1:1,f={y:ca(b[2],c),M:ca(b[3],c),w:ca(b[4],c),d:ca(b[5],c),h:ca(b[6],c),m:ca(b[7],c),s:ca(b[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(b=u(f.from),f=u(f.to),b=b.isValid()&&f.isValid()?(f=cb(f,b),b.isBefore(f)?c=Hb(b,f):
(c=Hb(f,b),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0},f={},f.ms=b.milliseconds,f.M=b.months);return d=new Aa(f),$a(a)&&v(a,"_locale")&&(d._locale=a._locale),d}function ca(a,b){a=a&&parseFloat(a.replace(",","."));return(isNaN(a)?0:a)*b}function Hb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Ib(a,b){return function(c,
d){var f,g;return null===d||isNaN(+d)||(nb(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),g=c,c=d,d=g),c="string"==typeof c?+c:c,f=M(c,d),Jb(this,f,a),this}}function Jb(a,b,c,d){var f=b._milliseconds,g=ab(b._days);b=ab(b._months);a.isValid()&&(d=null==d||d,f&&a._d.setTime(a._d.valueOf()+f*c),g&&(f=ta(a,"Date")+g*c,a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+"Date"](f)),b&&sb(a,
ta(a,"Month")+b*c),d&&h.updateOffset(a,g||b))}function Kb(a){var b;return void 0===a?this._locale._abbr:(b=U(a),null!=b&&(this._locale=b),this)}function Lb(){return this._locale}function Ba(a,b){l(0,[a,a.length],0,b)}function Mb(a,b,c,d,f){var g;null==a?a=na(this,d,f).year:(g=aa(a,d,f),b>g&&(b=g),a=vb(a,b,c,d,f),a=va(a.year,0,a.dayOfYear),a=(this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this));return a}function tc(a,b){b[ba]=m(1E3*("0."+a))}function Nb(a){return a}
function Ca(a,b,c,d){var f=U();b=J().set(d,b);return f[c](b,a)}function Ob(a,b,c){if(Y(a)&&(b=a,a=void 0),a=a||"",null!=b)return Ca(a,b,c,"month");var d=[];for(b=0;12>b;b++)d[b]=Ca(a,b,c,"month");return d}function eb(a,b,c,d){"boolean"==typeof a?(Y(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,Y(b)&&(c=b,b=void 0),b=b||"");var f=U();a=a?f._week.dow:0;if(null!=c)return Ca(b,(c+a)%7,d,"day");f=[];for(c=0;7>c;c++)f[c]=Ca(b,(c+a)%7,d,"day");return f}function Pb(a,b,c,d){b=M(b,c);return a._milliseconds+=d*
b._milliseconds,a._days+=d*b._days,a._months+=d*b._months,a._bubble()}function Qb(a){return 0>a?Math.floor(a):Math.ceil(a)}function V(a){return function(){return this.as(a)}}function da(a){return function(){return this.isValid()?this._data[a]:NaN}}function uc(a,b,c,d,f){return f.relativeTime(b||1,!!c,a,d)}function Da(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=fb(this._milliseconds)/1E3,f=fb(this._days),g=fb(this._months);a=E(d/60);b=E(a/60);d%=60;a%=60;c=E(g/12);var g=
g%12,e=this.asSeconds();return e?(0>e?"-":"")+"P"+(c?c+"Y":"")+(g?g+"M":"")+(f?f+"D":"")+(b||a||d?"T":"")+(b?b+"H":"")+(a?a+"M":"")+(d?d+"S":""):"P0D"}var ib,Zb=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1},La=h.momentProperties=[],Ma=!1,ob={};h.suppressDeprecationWarnings=!1;h.deprecationHandler=null;var vc=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)v(a,b)&&c.push(b);return c},
la={},z={},qb=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ua=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Qa={},fa={},Rb=/\d/,D=/\d\d/,Sb=/\d{3}/,gb=/\d{4}/,Ea=/[+-]?\d{6}/,t=/\d\d?/,Tb=/\d\d\d\d?/,Ub=/\d\d\d\d\d\d?/,Fa=/\d{1,3}/,hb=/\d{1,4}/,Ga=/[+-]?\d{1,6}/,wc=/\d+/,Ha=/[+-]?\d+/,xc=/Z|[+-]\d\d:?\d\d/gi,Ia=/Z|[+-]\d\d(?::?\d\d)?/gi,qa=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
Ra={},Sa={},H=0,P=1,L=2,x=3,I=4,Q=5,ba=6,fc=7,gc=8,y=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};l("M",["MM",2],"Mo",function(){return this.month()+1});l("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)});l("MMMM",0,0,function(a){return this.localeData().months(this,a)});B("month","M");z.month=8;k("M",t);k("MM",t,D);k("MMM",function(a,b){return b.monthsShortRegex(a)});k("MMMM",function(a,b){return b.monthsRegex(a)});
q(["M","MM"],function(a,b){b[P]=m(a)-1});q(["MMM","MMMM"],function(a,b,c,d){d=c._locale.monthsParse(a,d,c._strict);null!=d?b[P]=d:p(c).invalidMonth=a});var Vb=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;l("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a});l(0,["YY",2],0,function(){return this.year()%100});l(0,["YYYY",4],0,"year");l(0,["YYYYY",5],0,"year");l(0,["YYYYYY",6,!0],0,"year");B("year","y");z.year=1;k("Y",Ha);k("YY",t,D);k("YYYY",hb,gb);k("YYYYY",Ga,Ea);k("YYYYYY",Ga,Ea);q(["YYYYY","YYYYYY"],
H);q("YYYY",function(a,b){b[H]=2===a.length?h.parseTwoDigitYear(a):m(a)});q("YY",function(a,b){b[H]=h.parseTwoDigitYear(a)});q("Y",function(a,b){b[H]=parseInt(a,10)});h.parseTwoDigitYear=function(a){return m(a)+(68<m(a)?1900:2E3)};var Wb=ea("FullYear",!0);l("w",["ww",2],"wo","week");l("W",["WW",2],"Wo","isoWeek");B("week","w");B("isoWeek","W");z.week=5;z.isoWeek=5;k("w",t);k("ww",t,D);k("W",t);k("WW",t,D);ma(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=m(a)});l("d",0,"do","day");l("dd",
0,0,function(a){return this.localeData().weekdaysMin(this,a)});l("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)});l("dddd",0,0,function(a){return this.localeData().weekdays(this,a)});l("e",0,0,"weekday");l("E",0,0,"isoWeekday");B("day","d");B("weekday","e");B("isoWeekday","E");z.day=11;z.weekday=11;z.isoWeekday=11;k("d",t);k("e",t);k("E",t);k("dd",function(a,b){return b.weekdaysMinRegex(a)});k("ddd",function(a,b){return b.weekdaysShortRegex(a)});k("dddd",function(a,b){return b.weekdaysRegex(a)});
ma(["dd","ddd","dddd"],function(a,b,c,d){d=c._locale.weekdaysParse(a,d,c._strict);null!=d?b.d=d:p(c).invalidWeekday=a});ma(["d","e","E"],function(a,b,c,d){b[d]=m(a)});l("H",["HH",2],0,"hour");l("h",["hh",2],0,Va);l("k",["kk",2],0,function(){return this.hours()||24});l("hmm",0,0,function(){return""+Va.apply(this)+O(this.minutes(),2)});l("hmmss",0,0,function(){return""+Va.apply(this)+O(this.minutes(),2)+O(this.seconds(),2)});l("Hmm",0,0,function(){return""+this.hours()+O(this.minutes(),2)});l("Hmmss",
0,0,function(){return""+this.hours()+O(this.minutes(),2)+O(this.seconds(),2)});wb("a",!0);wb("A",!1);B("hour","h");z.hour=13;k("a",xb);k("A",xb);k("H",t);k("h",t);k("k",t);k("HH",t,D);k("hh",t,D);k("kk",t,D);k("hmm",Tb);k("hmmss",Ub);k("Hmm",Tb);k("Hmmss",Ub);q(["H","HH"],x);q(["k","kk"],function(a,b,c){a=m(a);b[x]=24===a?0:a});q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a);c._meridiem=a});q(["h","hh"],function(a,b,c){b[x]=m(a);p(c).bigHour=!0});q("hmm",function(a,b,c){var d=a.length-2;b[x]=
m(a.substr(0,d));b[I]=m(a.substr(d));p(c).bigHour=!0});q("hmmss",function(a,b,c){var d=a.length-4,f=a.length-2;b[x]=m(a.substr(0,d));b[I]=m(a.substr(d,2));b[Q]=m(a.substr(f));p(c).bigHour=!0});q("Hmm",function(a,b,c){c=a.length-2;b[x]=m(a.substr(0,c));b[I]=m(a.substr(c))});q("Hmmss",function(a,b,c){c=a.length-4;var d=a.length-2;b[x]=m(a.substr(0,c));b[I]=m(a.substr(c,2));b[Q]=m(a.substr(d))});var xa,yc=ea("Hours",!0),Ab={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:"January February March April May June July August September October November December".split(" "),
monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),week:{dow:0,doy:6},weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),meridiemParse:/[ap]\.?m?\.?/i},w={},oa={},hc=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ic=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
jc=/Z|[+-]\d\d(?::?\d\d)?/,ya=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ya=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",
/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],mc=/^\/?Date\((\-?\d+)/i,kc=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;h.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))});h.ISO_8601=function(){};h.RFC_2822=function(){};var zc=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=u.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:sa()}),Ac=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=u.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:
a:sa()}),pa="year quarter month week day hour minute second millisecond".split(" ");Fb("Z",":");Fb("ZZ","");k("Z",Ia);k("ZZ",Ia);q(["Z","ZZ"],function(a,b,c){c._useUTC=!0;c._tzm=bb(Ia,a)});var qc=/([\+\-]|\d\d)/gi;h.updateOffset=function(){};var rc=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,sc=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;M.fn=Aa.prototype;M.invalid=function(){return M(NaN)};
var Bc=Ib(1,"add"),Cc=Ib(-1,"subtract");h.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";h.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xb=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});l(0,["gg",2],0,function(){return this.weekYear()%100});l(0,["GG",2],0,function(){return this.isoWeekYear()%100});Ba("gggg","weekYear");Ba("ggggg","weekYear");
Ba("GGGG","isoWeekYear");Ba("GGGGG","isoWeekYear");B("weekYear","gg");B("isoWeekYear","GG");z.weekYear=1;z.isoWeekYear=1;k("G",Ha);k("g",Ha);k("GG",t,D);k("gg",t,D);k("GGGG",hb,gb);k("gggg",hb,gb);k("GGGGG",Ga,Ea);k("ggggg",Ga,Ea);ma(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=m(a)});ma(["gg","GG"],function(a,b,c,d){b[d]=h.parseTwoDigitYear(a)});l("Q",0,"Qo","quarter");B("quarter","Q");z.quarter=7;k("Q",Rb);q("Q",function(a,b){b[P]=3*(m(a)-1)});l("D",["DD",2],"Do","date");B("date",
"D");z.date=9;k("D",t);k("DD",t,D);k("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient});q(["D","DD"],L);q("Do",function(a,b){b[L]=m(a.match(t)[0],10)});var Yb=ea("Date",!0);l("DDD",["DDDD",3],"DDDo","dayOfYear");B("dayOfYear","DDD");z.dayOfYear=4;k("DDD",Fa);k("DDDD",Sb);q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=m(a)});l("m",["mm",2],0,"minute");B("minute","m");z.minute=14;k("m",t);k("mm",t,D);q(["m","mm"],I);var Dc=ea("Minutes",!1);l("s",
["ss",2],0,"second");B("second","s");z.second=15;k("s",t);k("ss",t,D);q(["s","ss"],Q);var Ec=ea("Seconds",!1);l("S",0,0,function(){return~~(this.millisecond()/100)});l(0,["SS",2],0,function(){return~~(this.millisecond()/10)});l(0,["SSS",3],0,"millisecond");l(0,["SSSS",4],0,function(){return 10*this.millisecond()});l(0,["SSSSS",5],0,function(){return 100*this.millisecond()});l(0,["SSSSSS",6],0,function(){return 1E3*this.millisecond()});l(0,["SSSSSSS",7],0,function(){return 1E4*this.millisecond()});
l(0,["SSSSSSSS",8],0,function(){return 1E5*this.millisecond()});l(0,["SSSSSSSSS",9],0,function(){return 1E6*this.millisecond()});B("millisecond","ms");z.millisecond=16;k("S",Fa,Rb);k("SS",Fa,D);k("SSS",Fa,Sb);var W;for(W="SSSS";9>=W.length;W+="S")k(W,wc);for(W="S";9>=W.length;W+="S")q(W,tc);var Fc=ea("Milliseconds",!1);l("z",0,0,"zoneAbbr");l("zz",0,0,"zoneName");var e=ka.prototype;e.add=Bc;e.calendar=function(a,b){a=a||u();var c=cb(a,this).startOf("day"),c=h.calendarFormat(this,c)||"sameElse";b=
b&&(K(b[c])?b[c].call(this,a):b[c]);return this.format(b||this.localeData().calendar(c,this,u(a)))};e.clone=function(){return new ka(this)};e.diff=function(a,b,c){var d,f;if(this.isValid())if(a=cb(a,this),a.isValid()){d=6E4*(a.utcOffset()-this.utcOffset());b=G(b);if("year"===b||"month"===b||"quarter"===b){var g;d=12*(a.year()-this.year())+(a.month()-this.month());var e=this.clone().add(d,"months");a=(0>a-e?(f=this.clone().add(d-1,"months"),g=(a-e)/(e-f)):(f=this.clone().add(d+1,"months"),g=(a-e)/
(f-e)),-(d+g)||0);"quarter"===b?a/=3:"year"===b&&(a/=12)}else f=this-a,a="second"===b?f/1E3:"minute"===b?f/6E4:"hour"===b?f/36E5:"day"===b?(f-d)/864E5:"week"===b?(f-d)/6048E5:f;b=c?a:E(a)}else b=NaN;else b=NaN;return b};e.endOf=function(a){return a=G(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))};e.format=function(a){a||(a=this.isUtc()?h.defaultFormatUtc:h.defaultFormat);a=Pa(this,a);return this.localeData().postformat(a)};
e.from=function(a,b){return this.isValid()&&(T(a)&&a.isValid()||u(a).isValid())?M({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()};e.fromNow=function(a){return this.from(u(),a)};e.to=function(a,b){return this.isValid()&&(T(a)&&a.isValid()||u(a).isValid())?M({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()};e.toNow=function(a){return this.to(u(),a)};e.get=function(a){return a=G(a),K(this[a])?this[a]():this};e.invalidAt=function(){return p(this).overflow};
e.isAfter=function(a,b){a=T(a)?a:u(a);return!(!this.isValid()||!a.isValid())&&(b=G(A(b)?"millisecond":b),"millisecond"===b?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(b).valueOf())};e.isBefore=function(a,b){a=T(a)?a:u(a);return!(!this.isValid()||!a.isValid())&&(b=G(A(b)?"millisecond":b),"millisecond"===b?this.valueOf()<a.valueOf():this.clone().endOf(b).valueOf()<a.valueOf())};e.isBetween=function(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===
d[1]?this.isBefore(b,c):!this.isAfter(b,c))};e.isSame=function(a,b){var c;a=T(a)?a:u(a);return!(!this.isValid()||!a.isValid())&&(b=G(b||"millisecond"),"millisecond"===b?this.valueOf()===a.valueOf():(c=a.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))};e.isSameOrAfter=function(a,b){return this.isSame(a,b)||this.isAfter(a,b)};e.isSameOrBefore=function(a,b){return this.isSame(a,b)||this.isBefore(a,b)};e.isValid=function(){return Ja(this)};e.lang=Xb;e.locale=Kb;e.localeData=
Lb;e.max=Ac;e.min=zc;e.parsingFlags=function(){return S({},p(this))};e.set=function(a,b){if("object"==typeof a){a=Oa(a);b=$b(a);for(var c=0;c<b.length;c++)this[b[c].unit](a[b[c].unit])}else if(a=G(a),K(this[a]))return this[a](b);return this};e.startOf=function(a){switch(a=G(a)){case "year":this.month(0);case "quarter":case "month":this.date(1);case "week":case "isoWeek":case "day":case "date":this.hours(0);case "hour":this.minutes(0);case "minute":this.seconds(0);case "second":this.milliseconds(0)}return"week"===
a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this};e.subtract=Cc;e.toArray=function(){return[this.year(),this.month(),this.date(),this.hour(),this.minute(),this.second(),this.millisecond()]};e.toObject=function(){return{years:this.year(),months:this.month(),date:this.date(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()}};e.toDate=function(){return new Date(this.valueOf())};e.toISOString=
function(){if(!this.isValid())return null;var a=this.clone().utc();return 0>a.year()||9999<a.year()?Pa(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(Date.prototype.toISOString)?this.toDate().toISOString():Pa(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")};e.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var a="["+a+'("]',c=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY";return this.format(a+
c+"-MM-DD[T]HH:mm:ss.SSS"+(b+'[")]'))};e.toJSON=function(){return this.isValid()?this.toISOString():null};e.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")};e.unix=function(){return Math.floor(this.valueOf()/1E3)};e.valueOf=function(){return this._d.valueOf()-6E4*(this._offset||0)};e.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}};e.year=Wb;e.isLeapYear=function(){return ga(this.year())};
e.weekYear=function(a){return Mb.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)};e.isoWeekYear=function(a){return Mb.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)};e.quarter=e.quarters=function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)};e.month=tb;e.daysInMonth=function(){return Ta(this.year(),this.month())};e.week=e.weeks=function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")};
e.isoWeek=e.isoWeeks=function(a){var b=na(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")};e.weeksInYear=function(){var a=this.localeData()._week;return aa(this.year(),a.dow,a.doy)};e.isoWeeksInYear=function(){return aa(this.year(),1,4)};e.date=Yb;e.day=e.days=function(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();if(null!=a)var c=a,d=this.localeData(),b=(a="string"!=typeof c?c:isNaN(c)?(c=d.weekdaysParse(c),"number"==typeof c?c:null):parseInt(c,
10),this.add(a-b,"d"));return b};e.weekday=function(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")};e.isoWeekday=function(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=this.localeData();a="string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a;return this.day(this.day()%7?a:a-7)}return this.day()||7};e.dayOfYear=function(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/
864E5)+1;return null==a?b:this.add(a-b,"d")};e.hour=e.hours=yc;e.minute=e.minutes=Dc;e.second=e.seconds=Ec;e.millisecond=e.milliseconds=Fc;e.utcOffset=function(a,b,c){var d,f=this._offset||0;if(!this.isValid())return null!=a?this:NaN;if(null!=a){if("string"==typeof a){if(a=bb(Ia,a),null===a)return this}else 16>Math.abs(a)&&!c&&(a*=60);return!this._isUTC&&b&&(d=db(this)),this._offset=a,this._isUTC=!0,null!=d&&this.add(d,"m"),f!==a&&(!b||this._changeInProgress?Jb(this,M(a-f,"m"),1,!1):this._changeInProgress||
(this._changeInProgress=!0,h.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:db(this)};e.utc=function(a){return this.utcOffset(0,a)};e.local=function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(db(this),"m")),this};e.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=bb(xc,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this};e.hasAlignedHourOffset=function(a){return!!this.isValid()&&
(a=a?u(a).utcOffset():0,0===(this.utcOffset()-a)%60)};e.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()};e.isLocal=function(){return!!this.isValid()&&!this._isUTC};e.isUtcOffset=function(){return!!this.isValid()&&this._isUTC};e.isUtc=Gb;e.isUTC=Gb;e.zoneAbbr=function(){return this._isUTC?"UTC":""};e.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""};e.dates=F("dates accessor is deprecated. Use date instead.",
Yb);e.months=F("months accessor is deprecated. Use month instead",tb);e.years=F("years accessor is deprecated. Use year instead",Wb);e.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()});e.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!A(this._isDSTShifted))return this._isDSTShifted;
var a={};if(Ka(a,this),a=Db(a),a._a){var b=a._isUTC?J(a._a):u(a._a);this._isDSTShifted=this.isValid()&&0<lb(a._a,b.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var r=Na.prototype;r.calendar=function(a,b,c){a=this._calendar[a]||this._calendar.sameElse;return K(a)?a.call(b,c):a};r.longDateFormat=function(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])};
r.invalidDate=function(){return this._invalidDate};r.ordinal=function(a){return this._ordinal.replace("%d",a)};r.preparse=Nb;r.postformat=Nb;r.relativeTime=function(a,b,c,d){var f=this._relativeTime[c];return K(f)?f(a,b,c,d):f.replace(/%d/i,a)};r.pastFuture=function(a,b){a=this._relativeTime[0<a?"future":"past"];return K(a)?a(b):a.replace(/%s/i,b)};r.set=function(a){var b,c;for(c in a)b=a[c],K(b)?this[c]=b:this["_"+c]=b;this._config=a;this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||
this._ordinalParse.source)+"|"+/\d{1,2}/.source)};r.months=function(a,b){return a?C(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||Vb).test(b)?"format":"standalone"][a.month()]:C(this._months)?this._months:this._months.standalone};r.monthsShort=function(a,b){return a?C(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Vb.test(b)?"format":"standalone"][a.month()]:C(this._monthsShort)?this._monthsShort:this._monthsShort.standalone};r.monthsParse=function(a,
b,c){var d,f,e;if(this._monthsParseExact){e=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;12>a;++a)f=J([2E3,a]),this._shortMonthsParse[a]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(d=y.call(this._shortMonthsParse,e),-1!==d?d:null):(d=y.call(this._longMonthsParse,e),-1!==d?d:null):"MMM"===b?(d=y.call(this._shortMonthsParse,e),-1!==d?d:(d=y.call(this._longMonthsParse,
e),-1!==d?d:null)):(d=y.call(this._longMonthsParse,e),-1!==d?d:(d=y.call(this._shortMonthsParse,e),-1!==d?d:null))}this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]);for(d=0;12>d;d++)if((f=J([2E3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(f,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(f,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(e="^"+this.months(f,"")+"|^"+
this.monthsShort(f,""),this._monthsParse[d]=new RegExp(e.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))||c&&"MMM"===b&&this._shortMonthsParse[d].test(a)||!c&&this._monthsParse[d].test(a))return d};r.monthsRegex=function(a){return this._monthsParseExact?(v(this,"_monthsRegex")||ub.call(this),a?this._monthsStrictRegex:this._monthsRegex):(v(this,"_monthsRegex")||(this._monthsRegex=qa),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)};r.monthsShortRegex=function(a){return this._monthsParseExact?
(v(this,"_monthsRegex")||ub.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(v(this,"_monthsShortRegex")||(this._monthsShortRegex=qa),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)};r.week=function(a){return na(a,this._week.dow,this._week.doy).week};r.firstDayOfYear=function(){return this._week.doy};r.firstDayOfWeek=function(){return this._week.dow};r.weekdays=function(a,b){return a?C(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?
"format":"standalone"][a.day()]:C(this._weekdays)?this._weekdays:this._weekdays.standalone};r.weekdaysMin=function(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin};r.weekdaysShort=function(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort};r.weekdaysParse=function(a,b,c){var d,f,e;if(this._weekdaysParseExact){e=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;7>a;++a)f=J([2E3,1]).day(a),this._minWeekdaysParse[a]=
this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(d=y.call(this._weekdaysParse,e),-1!==d?d:null):"ddd"===b?(d=y.call(this._shortWeekdaysParse,e),-1!==d?d:null):(d=y.call(this._minWeekdaysParse,e),-1!==d?d:null):"dddd"===b?(d=y.call(this._weekdaysParse,e),-1!==d?d:(d=y.call(this._shortWeekdaysParse,e),-1!==d?d:(d=y.call(this._minWeekdaysParse,e),-1!==
d?d:null))):"ddd"===b?(d=y.call(this._shortWeekdaysParse,e),-1!==d?d:(d=y.call(this._weekdaysParse,e),-1!==d?d:(d=y.call(this._minWeekdaysParse,e),-1!==d?d:null))):(d=y.call(this._minWeekdaysParse,e),-1!==d?d:(d=y.call(this._weekdaysParse,e),-1!==d?d:(d=y.call(this._shortWeekdaysParse,e),-1!==d?d:null)))}this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]);for(d=0;7>d;d++)if((f=J([2E3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&
(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(f,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(f,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(f,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(e="^"+this.weekdays(f,"")+"|^"+this.weekdaysShort(f,"")+"|^"+this.weekdaysMin(f,""),this._weekdaysParse[d]=new RegExp(e.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))||c&&"ddd"===
b&&this._shortWeekdaysParse[d].test(a)||c&&"dd"===b&&this._minWeekdaysParse[d].test(a)||!c&&this._weekdaysParse[d].test(a))return d};r.weekdaysRegex=function(a){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Ua.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(v(this,"_weekdaysRegex")||(this._weekdaysRegex=qa),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)};r.weekdaysShortRegex=function(a){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||
Ua.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(v(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qa),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)};r.weekdaysMinRegex=function(a){return this._weekdaysParseExact?(v(this,"_weekdaysRegex")||Ua.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(v(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=qa),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:
this._weekdaysMinRegex)};r.isPM=function(a){return"p"===(a+"").toLowerCase().charAt(0)};r.meridiem=function(a,b,c){return 11<a?c?"pm":"PM":c?"am":"AM"};ha("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,b=1===m(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+b}});h.lang=F("moment.lang is deprecated. Use moment.locale instead.",ha);h.langData=F("moment.langData is deprecated. Use moment.localeData instead.",U);var R=Math.abs,Gc=V("ms"),Hc=V("s"),Ic=
V("m"),Jc=V("h"),Kc=V("d"),Lc=V("w"),Mc=V("M"),Nc=V("y"),Oc=da("milliseconds"),Pc=da("seconds"),Qc=da("minutes"),Rc=da("hours"),Sc=da("days"),Tc=da("months"),Uc=da("years"),X=Math.round,N={ss:44,s:45,m:45,h:22,d:26,M:11},fb=Math.abs,n=Aa.prototype;n.isValid=function(){return this._isValid};n.abs=function(){var a=this._data;return this._milliseconds=R(this._milliseconds),this._days=R(this._days),this._months=R(this._months),a.milliseconds=R(a.milliseconds),a.seconds=R(a.seconds),a.minutes=R(a.minutes),
a.hours=R(a.hours),a.months=R(a.months),a.years=R(a.years),this};n.add=function(a,b){return Pb(this,a,b,1)};n.subtract=function(a,b){return Pb(this,a,b,-1)};n.as=function(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=G(a),"month"===a||"year"===a)return b=this._days+d/864E5,c=this._months+4800*b/146097,"month"===a?c:c/12;switch(b=this._days+Math.round(146097*this._months/4800),a){case "week":return b/7+d/6048E5;case "day":return b+d/864E5;case "hour":return 24*b+d/36E5;case "minute":return 1440*
b+d/6E4;case "second":return 86400*b+d/1E3;case "millisecond":return Math.floor(864E5*b)+d;default:throw Error("Unknown unit "+a);}};n.asMilliseconds=Gc;n.asSeconds=Hc;n.asMinutes=Ic;n.asHours=Jc;n.asDays=Kc;n.asWeeks=Lc;n.asMonths=Mc;n.asYears=Nc;n.valueOf=function(){return this.isValid()?this._milliseconds+864E5*this._days+this._months%12*2592E6+31536E6*m(this._months/12):NaN};n._bubble=function(){var a,b,c,d,f,e=this._milliseconds,h=this._days,k=this._months,l=this._data;return 0<=e&&0<=h&&0<=
k||0>=e&&0>=h&&0>=k||(e+=864E5*Qb(146097*k/4800+h),h=0,k=0),l.milliseconds=e%1E3,a=E(e/1E3),l.seconds=a%60,b=E(a/60),l.minutes=b%60,c=E(b/60),l.hours=c%24,h+=E(c/24),f=E(4800*h/146097),k+=f,h-=Qb(146097*f/4800),d=E(k/12),k%=12,l.days=h,l.months=k,l.years=d,this};n.get=function(a){return a=G(a),this.isValid()?this[a+"s"]():NaN};n.milliseconds=Oc;n.seconds=Pc;n.minutes=Qc;n.hours=Rc;n.days=Sc;n.weeks=function(){return E(this.days()/7)};n.months=Tc;n.years=Uc;n.humanize=function(a){if(!this.isValid())return this.localeData().invalidDate();
var b=this.localeData(),c;c=!a;var d=M(this).abs(),e=X(d.as("s")),g=X(d.as("m")),h=X(d.as("h")),k=X(d.as("d")),l=X(d.as("M")),d=X(d.as("y")),e=e<=N.ss&&["s",e]||e<N.s&&["ss",e]||1>=g&&["m"]||g<N.m&&["mm",g]||1>=h&&["h"]||h<N.h&&["hh",h]||1>=k&&["d"]||k<N.d&&["dd",k]||1>=l&&["M"]||l<N.M&&["MM",l]||1>=d&&["y"]||["yy",d];c=(e[2]=c,e[3]=0<+this,e[4]=b,uc.apply(null,e));return a&&(c=b.pastFuture(+this,c)),b.postformat(c)};n.toISOString=Da;n.toString=Da;n.toJSON=Da;n.locale=Kb;n.localeData=Lb;n.toIsoString=
F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Da);n.lang=Xb;l("X",0,0,"unix");l("x",0,0,"valueOf");k("x",Ha);k("X",/[+-]?\d+(\.\d{1,3})?/);q("X",function(a,b,c){c._d=new Date(1E3*parseFloat(a,10))});q("x",function(a,b,c){c._d=new Date(m(a))});h.version="2.18.1";ib=u;return h.fn=e,h.min=function(){var a=[].slice.call(arguments,0);return Eb("isBefore",a)},h.max=function(){var a=[].slice.call(arguments,0);return Eb("isAfter",a)},h.now=function(){return Date.now?
Date.now():+new Date},h.utc=J,h.unix=function(a){return u(1E3*a)},h.months=function(a,b){return Ob(a,b,"months")},h.isDate=ra,h.locale=ha,h.invalid=sa,h.duration=M,h.isMoment=T,h.weekdays=function(a,b,c){return eb(a,b,c,"weekdays")},h.parseZone=function(){return u.apply(null,arguments).parseZone()},h.localeData=U,h.isDuration=$a,h.monthsShort=function(a,b){return Ob(a,b,"monthsShort")},h.weekdaysMin=function(a,b,c){return eb(a,b,c,"weekdaysMin")},h.defineLocale=Wa,h.updateLocale=function(a,b){if(null!=
b){var c=Ab;null!=w[a]&&(c=w[a]._config);b=pb(c,b);b=new Na(b);b.parentLocale=w[a];w[a]=b;ha(a)}else null!=w[a]&&(null!=w[a].parentLocale?w[a]=w[a].parentLocale:null!=w[a]&&delete w[a]);return w[a]},h.locales=function(){return vc(w)},h.weekdaysShort=function(a,b,c){return eb(a,b,c,"weekdaysShort")},h.normalizeUnits=G,h.relativeTimeRounding=function(a){return void 0===a?X:"function"==typeof a&&(X=a,!0)},h.relativeTimeThreshold=function(a,b){return void 0!==N[a]&&(void 0===b?N[a]:(N[a]=b,"s"===a&&(N.ss=
b-1),!0))},h.calendarFormat=function(a,b){a=a.diff(b,"days",!0);return-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse"},h.prototype=e,h});
moment.locale("fr",{months:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),monthsShort:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),weekdays:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),weekdaysShort:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),weekdaysMin:"di lu ma me je ve sa".split(" "),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",
LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[aujourd'hui \u00e0] LT",nextDay:"[demain \u00e0] LT",nextWeek:"dddd [\u00e0] LT",lastDay:"[hier \u00e0] LT",lastWeek:"dddd [dernier \u00e0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},invalidDate:"Date non valide",week:{dow:1,doy:4},ordinalParse:/\d{1,2}(er|)/,ordinal:function(h){return h+
(1===h?"er":"")}}); 
/* affiliates/widget/layout.default.js */
window.flightsActive = false; /* global variables for acess from controller */
window.otelsActive = true;
window.carsActive = false;
window.packagesActive = false;
/* change between the hotels and flights tab */
var changeTab = function(type){
var flightsBoard = document.querySelector('.flights');
var hotelsBoard = document.querySelector('.hotels');
var oldSelected = document.querySelector('.selectedTripOption');
if (oldSelected)
oldSelected.className = oldSelected.className.replace(' selectedTripOption', '');
if (type === 'hotels') { /* hotels tab */
hotelsBoard.style.display = '';
flightsBoard.style.display = 'none';
window.flightsActive = false; /* global variables for acess from controller */
window.hotelsActive = true;
document.querySelector('.tripTypeDisplay').innerHTML = 'H\u00F4tels';
document.querySelector('.tripOption:nth-child(2)').className += ' selectedTripOption';
} else { /* flights tab */
flightsBoard.style.display = '';
hotelsBoard.style.display = 'none';
window.flightsActive = true; /* global variables for acess from controller */
window.hotelsActive = false;
document.querySelector('.tripTypeDisplay').innerHTML = 'Vols';
document.querySelector('.tripOption:nth-child(1)').className += ' selectedTripOption';
}
/* depending on whether or not the popular destination is loaded,put in or out of view */
var flightsSuggestions = document.querySelector('.flightsSuggestions');
var hotelsSuggestions = document.querySelector('.hotelsSuggestions');
if (flightsSuggestions && hotelsSuggestions) {
hotelsSuggestions.style.display ='none';
flightsSuggestions.style.display ='none';
if (type === "flights") flightsSuggestions.style.display = '';
else if (type === "hotels") hotelsSuggestions.style.display = '';
}
};
/**
* @see tweb/js/R9/Utils.js
*/
var formatString = function(format, values) {
var args = arguments;
return format.replace(/{(\d)}/g, function(m, index) {
return args[(parseInt(index, 10) || 0) + 1];
});
};
/**
* Supports the same format choice strings used on the server: "0#Non-stop|1#1 stop|2#{0} stops"
*/
var formatChoice = function(format, selector, values) {
var args = arguments, tokens, i;
format = format.split('|',20);
for(i = format.length-1; i>=0; i--) {
tokens = format[i].split('#',2);
if (selector < tokens[0]) {
continue;
}
args = Array.prototype.slice.call(args, 2);
args = Array.prototype.concat([tokens[1]], args);
return formatString.apply(this, args);
}
};
/* helper function to update the input fields using the widgetData
* --NOTE: this is called from the widget controller
*/
var updateInputFields = function(widgetData, OPTS){
var beginDate, endDate, beginDateString, endDateString, amountDescription;
switch (widgetData.currentMode) {
case 'hotels':
beginDateString = getDateNameShort(widgetData.hotelsDate && widgetData.hotelsDate.startDate);
endDateString = getDateNameShort(widgetData.hotelsDate && widgetData.hotelsDate.endDate);
var roomNum = widgetData.hotelsAmount.rooms;
var guestNum = widgetData.hotelsAmount.guests;
amountDescription = formatChoice("0#{0} chambre|1#{0} chambre|2#{0} chambres", roomNum, roomNum)
+ ', '
+ formatChoice("0#{0} personne|1#{0} personne|2#{0} personnes", guestNum, guestNum);
document.querySelector('.hotels .hotelsStartDate').value = beginDateString;
document.querySelector('.hotels .hotelsEndDate').value = endDateString;
var hotelsDropDown = document.querySelector('.hotelsDropdown');
hotelsDropDown.value = amountDescription;
updateInputWidth(hotelsDropDown);
break;
case 'cars':
beginDateString = getDateNameShort(widgetData.carsDate && widgetData.carsDate.startDate);
endDateString = getDateNameShort(widgetData.carsDate && widgetData.carsDate.endDate);
document.querySelector('.cars .carsStartDate').value = beginDateString;
document.querySelector('.cars .carsEndDate').value = endDateString;
break;
case 'packages':
beginDateString = getDateNameShort(widgetData.packagesDate && widgetData.packagesDate.startDate);
endDateString = getDateNameShort(widgetData.packagesDate && widgetData.packagesDate.endDate);
document.querySelector('.packages .packagesStartDate').value = beginDateString;
document.querySelector('.packages .packagesEndDate').value = endDateString;
var travelers = widgetData.packagesAmount.packagers;
var packagesDropDown = document.querySelector('.packagesDropdown');
packagesDropDown.value = formatChoice("0#{0} voyageur|1#{0} voyageur|2#{0} voyageurs", travelers, travelers);
updateInputWidth(packagesDropDown);
break;
default:
beginDate = widgetData.flightsDate && widgetData.flightsDate.startDate;
endDate = widgetData.flightsDate && widgetData.flightsDate.endDate;
beginDateString = getDateNameShort(beginDate);
document.querySelector('.flightsRoundTrip .flightsStartDate').value = beginDateString;
document.querySelector('.flightsOneWay .flightsStartDate').value = beginDateString;
document.querySelector('.flightsRoundTrip .flightsEndDate').value = getDateNameShort(endDate);
updateDateDisplay(document.querySelector('.flightsRoundTrip .flightsStartDate-wrapper .displayDate'), beginDate);
updateDateDisplay(document.querySelector('.flightsOneWay .flightsStartDate-wrapper .displayDate'), beginDate);
updateDateDisplay(document.querySelector('.flightsRoundTrip .flightsEndDate-wrapper .displayDate'), endDate);
var fa = widgetData.flightsAmount;
var cabinDescription;
if (fa && fa.cabin === 'business') {
cabinDescription = 'Affaires';
} else if (fa && fa.cabin === 'first') {
cabinDescription = 'Premi\u00E8re';
} else {
cabinDescription = '\u00C9conomique';
}
var total = 0;
if(OPTS.fullTravellers) {
if(fa) {
if(fa.adults)
total += parseInt(fa.adults);
if(fa.youths)
total += parseInt(fa.youths);
if(fa.children)
total += parseInt(fa.children);
if(fa.lap)
total += parseInt(fa.lap);
if(fa.seat)
total += parseInt(fa.seat);
}
} else {
if(fa && fa.travelers)
total = parseInt(fa.travelers);
}
if(total < 1)
total = 1;
var flightsDropDown = document.querySelector('.flightsDropdown');
flightsDropDown.value = formatChoice("0#{0} voyageur|1#{0} voyageur|2#{0} voyageurs", total, total) + ', ' + cabinDescription;
updateInputWidth(flightsDropDown);
var flightsDropDownDisplay = document.querySelector('.flightsDropdownDisplay');
if (flightsDropDownDisplay) {
flightsDropDownDisplay.innerHTML = formatChoice("0#{0} voyageur|1#{0} voyageur|2#{0} voyageurs", total, '<span class="flightsDropDownDisplayCounter">' + total + '</span>') + ', ' + cabinDescription;
}
}
};
var getDateNameShort = function (date) {
return date ? moment(date).format('ddd DD\/MM') : '';
};
var updateDateDisplay = function (element, date) {
var dateMoment;
if (!element) {
return;
}
dateMoment = date && moment(date);
element.querySelector('.displayDate-number').textContent = dateMoment ? dateMoment.format('DD') : '';
element.querySelector('.displayDate-month').textContent = dateMoment ? dateMoment.format('MMM') : '';
element.querySelector('.displayDate-weekDay').textContent = dateMoment ? dateMoment.format('ddd') : '';
};
/******************/
/* image carousel */
/******************/
function addCarouselEvents() {
if (document.querySelectorAll(".carousel--tile").length === 0) return; /* empty carousel */
var flightsSuggestionsSelectedIndex = 0;
var hotelsSuggestionsSelectedIndex = 0;
/* hotels suggestions */
var elements = document.querySelectorAll(".hotelsSuggestions .carousel--navButtonCircle");
for (var i = 0; i < elements.length; i++) {
addCarouselEvent(elements[i], i, "hotels");
}
/* flights suggestions */
elements = document.querySelectorAll(".flightsSuggestions .carousel--navButtonCircle");
for (var i = 0; i < elements.length; i++) {
addCarouselEvent(elements[i], i, "flights");
}
function addCarouselEvent(element, index, type) {
element.addEventListener("click", function(){
selectImageByIndex(index, type);
});
}
/* select a specific image, and highlight the correct dot */
function selectImageByIndex(index, type) {
if (type === "flights")
flightsSuggestionsSelectedIndex = index;
else if (type === "hotels")
hotelsSuggestionsSelectedIndex = index;
var suggestionTypeSpecifier = (type === "flights" ? ".flightsSuggestions " : ".hotelsSuggestions ");
var imageWidth = document.querySelector(suggestionTypeSpecifier + ".carousel").getBoundingClientRect().width;
var imageSlider = document.querySelector(suggestionTypeSpecifier + ".carousel--imageSlider");
var elem = document.querySelector(suggestionTypeSpecifier + ".carousel--navButton:nth-child(" + (index+1) + ")");
var currentlySelected = document.querySelector(suggestionTypeSpecifier + ".carousel--selectedNav");
imageSlider.style.left = (-1*imageWidth*index -1 ) + "px" ;
if (currentlySelected)
currentlySelected.className = currentlySelected.className.replace(" carousel--selectedNav", "");
elem.className = elem.className + " carousel--selectedNav";
}
window.onresize = function(e) {
selectImageByIndex(flightsSuggestionsSelectedIndex, "flights");
selectImageByIndex(hotelsSuggestionsSelectedIndex, "hotels");
};
selectImageByIndex(flightsSuggestionsSelectedIndex, "flights");
selectImageByIndex(hotelsSuggestionsSelectedIndex, "hotels");
};
function updateInputWidth() {
} </script>


