(this["webpackJsonpsvg-editor"]=this["webpackJsonpsvg-editor"]||[]).push([[0],{16:function(t,n,c){},20:function(t,n,c){},21:function(t,n,c){},22:function(t,n,c){"use strict";c.r(n);var e=c(0),o=c(1),r=c.n(o),s=c(10),a=c.n(s),i=(c(16),c(2)),j=c(3),l=c(5),u=c(4),p=function(t){var n=t.posX,c=t.posY,r=t.ctrPosX,s=t.ctrPosY,a=function(t){t.stopPropagation(),console.log(t)};return Object(e.jsxs)(o.Fragment,{children:[Object(e.jsx)("circle",{onClick:a,cx:n,cy:c,stroke:"#55f",r:"4"}),Object(e.jsx)("line",{x1:n,y1:c,x2:r,y2:s}),Object(e.jsx)("circle",{onClick:a,cx:r,cy:s,stroke:"#55f",r:"4"})]})},b=c(7),h=c.n(b),f=function(t){Object(l.a)(c,t);var n=Object(u.a)(c);function c(t){var e;Object(i.a)(this,c),(e=n.call(this,t)).state={x:0,y:0,t:null,ctrX:0,ctrY:0,editing:!1};var o=new h.a(135.5,77.5,252.5,36.5,219.5,85.5);return console.log(o.project({x:135.5,y:77.5})),e}return Object(j.a)(c,[{key:"render",value:function(){new h.a(157.5,105.5,180,95,148,76.5);var t=[{posX:157.5,posY:105.5,ctrPosX:180,ctrPosY:95},{posX:148.8,posY:76.5,ctrPosX:227,ctrPosY:74}];if(!this.state.editing){return Object(e.jsxs)(o.Fragment,{children:[t.map((function(t){return Object(e.jsx)(o.Fragment,{children:Object(e.jsx)(p,{posX:t.posX,posY:t.posY,ctrPosX:t.ctrPosX,ctrPosY:t.ctrPosY})})})),Object(e.jsx)("path",{d:function(t){for(var n="",c=0;c<t.length;c++)n+=0===c?"M ".concat(t[c].posX," ").concat(t[c].posY," C ").concat(t[c].ctrPosX," ").concat(t[c].ctrPosY," "):"".concat(t[c].posX," ").concat(t[c].posY," ").concat(t[c].ctrPosX," ").concat(t[c].ctrPosY);return console.log(n),n}(t),"stroke-width":"5",stroke:"#000000",fill:"none"})]})}}}]),c}(r.a.Component),O=function(t){Object(l.a)(c,t);var n=Object(u.a)(c);function c(){var t;Object(i.a)(this,c);for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))).handleEditorClick=function(t){console.log(t)},t}return Object(j.a)(c,[{key:"render",value:function(){return Object(e.jsx)("svg",{onClick:this.handleEditorClick,width:"500",height:"500",children:Object(e.jsx)(f,{})})}}]),c}(r.a.Component),d=(c(20),function(t){Object(l.a)(c,t);var n=Object(u.a)(c);function c(){return Object(i.a)(this,c),n.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(e.jsx)(o.Fragment,{children:Object(e.jsx)(O,{})})}}]),c}(r.a.Component));c(21);var g=function(){return Object(e.jsx)("div",{className:"App",children:Object(e.jsx)(d,{})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(n){var c=n.getCLS,e=n.getFID,o=n.getFCP,r=n.getLCP,s=n.getTTFB;c(t),e(t),o(t),r(t),s(t)}))};a.a.render(Object(e.jsx)(r.a.StrictMode,{children:Object(e.jsx)(g,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.b95ca831.chunk.js.map