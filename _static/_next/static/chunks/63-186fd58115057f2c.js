(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,s=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(s.push(t.value),!r||s.length!==r);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return s}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var s,o=(s=n(7294))&&s.__esModule?s:{default:s},c=n(6273),l=n(387),i=n(7190);var u={};function f(e,r,n,t){if(e&&c.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=l.useRouter(),s=o.default.useMemo((function(){var r=a(c.resolveHref(t,e.href,!0),2),n=r[0],s=r[1];return{href:n,as:e.as?c.resolveHref(t,e.as):s||n}}),[t,e.href,e.as]),d=s.href,_=s.as,p=e.children,b=e.replace,h=e.shallow,m=e.scroll,v=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,j=a(i.useIntersection({rootMargin:"200px"}),2),x=j[0],g=j[1],w=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);o.default.useEffect((function(){var e=g&&n&&c.isLocalURL(d),r="undefined"!==typeof v?v:t&&t.locale,a=u[d+"%"+_+(r?"%"+r:"")];e&&!a&&f(t,d,_,{locale:r})}),[_,d,g,v,n,t]);var N={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),r[a?"replace":"push"](n,t,{shallow:s,locale:l,scroll:o}))}(e,t,d,_,b,h,m,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&f(t,d,_,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof v?v:t&&t.locale,M=t&&t.isLocaleDomain&&c.getDomainLocale(_,k,t&&t.locales,t&&t.domainLocales);N.href=M||c.addBasePath(c.addLocale(_,k,t&&t.defaultLocale))}return o.default.cloneElement(r,N)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,s=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(s.push(t.value),!r||s.length!==r);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return s}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!c,t=s.useRef(),i=a(s.useState(!1),2),u=i[0],f=i[1],d=s.useCallback((function(e){t.current&&(t.current(),t.current=void 0),n||u||e&&e.tagName&&(t.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=l.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return l.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,s=t.observer,o=t.elements;return o.set(e,r),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return s.useEffect((function(){if(!c&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var s=n(7294),o=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},3063:function(e,r,n){"use strict";n.r(r);var t=n(5893),a=(n(7294),n(3079)),s=n.n(a),o=n(1664);r.default=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:s().scd_nav,children:(0,t.jsxs)("div",{className:s().scd_wrapper,children:[(0,t.jsx)("div",{className:s().scd_logoasheader}),(0,t.jsx)("input",{type:"radio",name:"slider",id:"scd_menu-btn",className:s().scd_menu_btn}),(0,t.jsx)("input",{type:"radio",name:"slider",id:"scd_close-btn",className:s().scd_close_btn}),(0,t.jsxs)("ul",{className:s().scd_navlinks,children:[(0,t.jsx)("label",{htmlFor:"scd_close-btn",className:"".concat(s().scd_btn," ").concat(s().scd_close_btns),children:(0,t.jsx)("i",{className:"fas fa-times"})}),(0,t.jsx)(o.default,{href:"/your_orders",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"fas fa-shopping-cart"}),"Dashboard"]})})}),(0,t.jsx)(o.default,{href:"/user_profile",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"far fa-address-card"}),"Profile"]})})}),(0,t.jsx)(o.default,{href:"/favourite",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"fas fa-bookmark"}),"Favourite"]})})}),(0,t.jsx)(o.default,{href:"/userorders",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"fas fa-sort-alpha-up"}),"Orders"]})})}),(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"fas fa-cog"}),"Settings"]})})})]}),(0,t.jsx)("label",{htmlFor:"scd_menu-btn",className:"".concat(s().scd_btn," ").concat(s().scd_menubtn),children:(0,t.jsx)("i",{className:"fas fa-bars"})})]})})})}},3079:function(e){e.exports={scd_nav:"sidebar_scd_nav__R0G2D",scd_wrapper:"sidebar_scd_wrapper__ZbVzS",scd_logo:"sidebar_scd_logo__0MRwU",scd_logoasheader:"sidebar_scd_logoasheader__rmQgY",scd_navlinks:"sidebar_scd_navlinks__g80wf","scd_mobile-item":"sidebar_scd_mobile-item__HjL1f",scd_btn:"sidebar_scd_btn__jmwvY",scd_close_btns:"sidebar_scd_close_btns__WPLHD",scd_menubtn:"sidebar_scd_menubtn__X2UqQ",scd_menu_btn:"sidebar_scd_menu_btn__vQ7C2",scd_close_btn:"sidebar_scd_close_btn__MY1O2","scd_drop-menu":"sidebar_scd_drop-menu__caeDx"}},1664:function(e,r,n){e.exports=n(8418)}}]);