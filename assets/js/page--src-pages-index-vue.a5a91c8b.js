(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("Kw5r");var r=e("DOVJ"),n=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),i=e("fVfk"),s={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,s=a.data,o=a.parent,u=e.info,p=e.showLinks,c=e.showNavigation,g=e.ariaLabel,f=function(t,a){var e=t.currentPage,r=void 0===e?1:e,n=t.totalPages,i=void 0===n?1:n,s=Math.ceil(a/2),l=Math.floor(r-s),o=Math.floor(r+s);i<=a?(l=0,o=i):r<=s?(l=0,o=a):r+s>=i&&(l=i-a,o=i);for(var u=[],p=l+1;p<=o;p++)u.push(p);return{current:r,total:i,start:l,end:o,pages:u}}(u,e.range),d=f.current,v=f.total,b=f.pages,L=f.start,h=f.end,y=Object(i.d)(o.$route),C=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===d&&(s=e.ariaCurrentLabel);var u={to:l(y,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(r.a,{class:[e.linkClass,o],attrs:Object(n.a)(Object(n.a)({},u),{},{"aria-label":s.replace("%n",a),"aria-current":d===a})},[i])},m=p?b.map((function(t){return C(t,t,e.ariaLinkLabel)})):[];if(c){var P=e.firstLabel,S=e.prevLabel,k=e.nextLabel,x=e.lastLabel,w=e.ariaFirstLabel,j=e.ariaPrevLabel,N=e.ariaNextLabel,O=e.ariaLastLabel,_=e.firstClass,W=e.prevClass,J=e.nextClass,M=e.lastClass,$=e.navClass;d>1&&m.unshift(C(d-1,S,j,[W,$])),L>0&&m.unshift(C(1,P,w,[_,$])),d<v&&m.push(C(d+1,k,N,[J,$])),h<v&&m.push(C(v,x,O,[M,$]))}return m.length<2?null:t("nav",Object(n.a)(Object(n.a)({},s),{},{attrs:{role:"navigation","aria-label":g}}),m)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},iyQ6:function(t,a,e){"use strict";e.r(a);var r=e("Wsvf"),n=e("nJNL"),i={components:{Pager:r.a,Post:n.a},metaInfo:{title:"Welcome to my blog :)"}},s=e("KHd+"),l=null,o=Object(s.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Welcome to my blog :)")]),a("ul",{staticClass:"post-list"},this._l(this.$page.allWordPressPost.edges,(function(t){var e=t.node;return a("li",{key:e.id},[a("Post",{attrs:{post:e}})],1)})),0),a("Pager",{attrs:{info:this.$page.allWordPressPost.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);a.default=o.exports},nJNL:function(t,a,e){"use strict";var r={props:{post:{type:Object,required:!0}}},n=e("KHd+"),i=Object(n.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),a("g-link",{attrs:{to:this.post.path}},[this._v("\n    Read More\n  ")])],1)}),[],!1,null,null,null);a.a=i.exports}}]);