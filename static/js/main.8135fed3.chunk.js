(this["webpackJsonpbjj-techniques-log"]=this["webpackJsonpbjj-techniques-log"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(3),r=n(2),a=n(0);function l(e){var t=e.note,n=e.technique,o=e.handleDeleteNote,i=e.editNote,l=Object(c.useState)("block"),d=Object(r.a)(l,2),s=d[0],u=d[1],h=Object(c.useState)("none"),j=Object(r.a)(h,2),b=j[0],f=j[1],O=Object(c.useRef)(),y=Object(c.useState)("none"),g=Object(r.a)(y,2),v=g[0],p=g[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:["Note ",t.noteID,":"]}),Object(a.jsxs)("div",{class:"noteContain",children:[Object(a.jsx)("input",{ref:O,style:{display:b},type:"text",placeholder:"Place your note here."}),Object(a.jsx)("div",{class:"notesOut",children:Object(a.jsx)("span",{children:t.noteText})}),Object(a.jsx)("button",{class:"noteModify",style:{display:v},onClick:function(){var e=O.current.value;i(e,t.noteID,n),p("none"),f("none"),u("block"),e=null},children:"Update"}),Object(a.jsx)("button",{class:"noteModify",style:{display:v},onClick:function(){o(t.noteID,n.id)},children:"Delete"}),Object(a.jsx)("button",{class:"noteModify",style:{display:s,margin:"10px 0px 10px 0px"},onClick:function(){u("none"),f("block"),p("block")},children:"Edit"})]})]})}function d(e){var t=e.technique,n=e.handleDeleteNote,c=e.editNote;return console.log(t),Object(a.jsx)("div",{class:"notesCon",children:t.notes.map((function(e){return Object(a.jsx)(l,{editNote:c,handleDeleteNote:n,technique:t,note:e},e.noteID)}))})}function s(e){var t=e.technique,n=e.editVideo,o=e.handleDeleteTechnique,l=e.handleDeleteNote,s=e.editNote,u=e.addNote,h=Object(c.useRef)(),j=Object(c.useState)("block"),b=Object(r.a)(j,2),f=b[0],O=b[1],y=Object(c.useState)("none"),g=Object(r.a)(y,2),v=g[0],p=g[1],x=Object(c.useState)("none"),T=Object(r.a)(x,2),q=T[0],C=T[1],D=Object(c.useState)("none"),N=Object(r.a)(D,2),k=N[0],m=N[1];return Object(a.jsxs)("div",{draggable:"true",id:t.id,onDrag:function(e){e.target.classList.add("dragging")},onDragEnd:function(e){e.target.classList.remove("dragging")},style:{backgroundColor:t.color},class:"log",children:[Object(a.jsx)("h3",{children:t.technique}),Object(a.jsx)("h3",{children:"Video"}),Object(a.jsx)("iframe",{class:"videoFrame",title:"Technique Video",src:t.video,allowFullScreen:!0,frameBorder:"0",style:{display:k}}),Object(a.jsx)("input",{style:{display:q},ref:h}),Object(a.jsx)("button",{onClick:function(){O("none"),p("block"),C("block")},style:{display:f},class:"noteModify",children:"Add/Edit Video"}),Object(a.jsx)("button",{onClick:function(){O("block"),p("none"),C("none");var e=h.current.value;e.includes("https://www.youtube.com/")?(n(e,t.id),m("block")):(n(e,t.id),m("none"),alert("Please use a valid Youtube link."))},style:{display:v},class:"noteModify",children:"Update"}),Object(a.jsx)("h4",{children:"Notes"}),Object(a.jsx)(d,{handleDeleteNote:l,editNote:s,technique:t},t.id),Object(a.jsx)("button",{onClick:function(){var e=[].concat(Object(i.a)(t.notes),[{noteText:"Your note will be displayed here.",noteID:t.notes.length+1,noteTitle:"Note "+(t.notes.length+1)}]);u(e,t)},id:"add",children:"+"}),Object(a.jsx)("button",{onClick:function(){return o(t.id)},id:"delete",children:"Delete"})]})}function u(e){var t=e.techniques,n=e.editVideo,c=e.handleDeleteTechnique,o=e.handleDeleteNote,i=e.editNote,r=e.addNote;return Object(a.jsx)("div",{id:"bjjLogsCon",children:t.map((function(e){return Object(a.jsx)(s,{editVideo:n,editNote:i,addNote:r,handleDeleteTechnique:c,handleDeleteNote:o,technique:e},e.id)}))})}function h(e){var t=e.handleEditCatTechNote,n=e.expanded,o=e.catTechnique,i=e.handleDeleteCatTechNote,l=e.catTechNote,d=Object(c.useState)("block"),s=Object(r.a)(d,2),u=s[0],h=s[1],j=Object(c.useState)("none"),b=Object(r.a)(j,2),f=b[0],O=b[1],y=Object(c.useRef)(),g=Object(c.useState)("none"),v=Object(r.a)(g,2),p=v[0],x=v[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{style:{display:n},children:["Note ",l.noteID,":"]}),Object(a.jsx)("div",{style:{display:n},class:"noteContain",children:Object(a.jsxs)("div",{class:"buttonCon",children:[Object(a.jsx)("input",{ref:y,style:{display:f,textAlign:"center"},type:"text",placeholder:"Place your note here."}),Object(a.jsx)("div",{class:"notesOut",children:l.noteText}),Object(a.jsx)("button",{class:"noteModify",style:{display:p},onClick:function(){var e=y.current.value;t(e,l.noteID,o),x("none"),O("none"),h("block"),e=null},children:"Update"}),Object(a.jsx)("button",{class:"noteModify",style:{display:p},onClick:function(){i(l.noteID,o.id)},children:"Delete"}),Object(a.jsx)("button",{class:"noteModify",style:{display:u,margin:"10px 0px 10px 0px"},onClick:function(){h("none"),O("block"),x("block")},children:"Edit"})]})})]})}function j(e){var t=e.catTechnique,n=e.expanded,c=e.handleDeleteCatTechNote,o=e.handleEditCatTechNote;return Object(a.jsx)("div",{children:t.notes.map((function(e){return Object(a.jsx)(h,{handleDeleteCatTechNote:c,expanded:n,handleEditCatTechNote:o,catTechnique:t,catTechNote:e},e.noteID)}))})}function b(e){var t=e.editCatTechVideo,n=e.handleAddCatTechNote,o=e.category,l=e.handleEditCatTechNote,d=e.handleDeleteCatTechNote,s=e.catTechnique,u=e.handleDeleteCatTechnique,h=Object(c.useRef)(),b=Object(c.useState)("none"),f=Object(r.a)(b,2),O=f[0],y=f[1],g=Object(c.useState)("block"),v=Object(r.a)(g,2),p=v[0],x=v[1],T=Object(c.useState)("none"),q=Object(r.a)(T,2),C=q[0],D=q[1],N=Object(c.useState)("none"),k=Object(r.a)(N,2),m=k[0],S=k[1],E=Object(c.useState)("none"),I=Object(r.a)(E,2),A=I[0],M=I[1],V=Object(c.useRef)();return Object(a.jsxs)("div",{id:s.id,onDrag:function(e){e.target.classList.add("dragging")},onDragEnd:function(e){e.target.classList.remove("dragging")},style:{backgroundColor:s.color},class:"log",children:[Object(a.jsx)("h3",{onClick:function(){"none"==O?(y("flex"),""!==s.video&&M("block")):y("none")},children:s.technique}),Object(a.jsxs)("div",{style:{display:O},class:"videoContain",children:[Object(a.jsx)("h3",{children:"Video"}),Object(a.jsx)("iframe",{class:"videoFrame",title:"Technique Video",src:s.video,allowFullScreen:!0,frameBorder:"0",style:{display:A}}),Object(a.jsx)("input",{style:{display:m},ref:V}),Object(a.jsx)("button",{onClick:function(){x("none"),D("block"),S("block")},style:{display:p},class:"noteModify",children:"Add/Edit Video"}),Object(a.jsx)("button",{onClick:function(){x("block"),D("none"),S("none");var e=V.current.value;e.includes("https://www.youtube.com/")?(t(e,s.id),M("block")):(t(e,s.id),M("none"),alert("Please use a valid Youtube link."))},style:{display:C},class:"noteModify",children:"Update"})]}),Object(a.jsx)("h4",{style:{display:O},children:"Notes"}),Object(a.jsx)(j,{style:{display:O},expanded:O,handleEditCatTechNote:l,handleDeleteCatTechNote:d,catTechnique:s},s.id),Object(a.jsx)("button",{style:{display:O},ref:h,onClick:function(){var e=[].concat(Object(i.a)(s.notes),[{noteText:"Add your note here.",noteID:s.notes.length+1,noteTitle:"Note "+(s.notes.length+1)}]);n(e,s)},id:"add",children:"+"}),Object(a.jsx)("button",{style:{display:O},ref:h,onClick:function(){return u(s.id,o.id)},id:"delete",children:"Delete"})]})}function f(e){var t=e.category,n=e.handleAddCatTechNote,c=e.editCatTechVideo,o=e.handleEditCatTechNote,i=e.handleDeleteCatTechNote,r=e.catTechniques,l=e.handleDeleteCatTechnique;return Object(a.jsx)("div",{id:"categorizedLogsCon",children:r.map((function(e){return Object(a.jsx)(b,{category:t,handleAddCatTechNote:n,handleEditCatTechNote:o,editCatTechVideo:c,handleDeleteCatTechNote:i,handleDeleteCatTechnique:l,catTechnique:e},e.id)}))})}function O(e){var t=e.category,n=e.handleDeleteCategory,c=e.handleEditCatTechNote,o=e.editCatTechVideo,i=e.handleAddCatTechNote,r=e.handleDeleteTechnique,l=e.handleDeleteCatTechnique,d=e.handleDrop,s=e.handleDeleteCatTechNote;return Object(a.jsxs)("div",{id:t.id,onDrop:function(e){return d(e,t)},onDragOver:function(e){e.preventDefault(),e.target.style.filter="brightness(200%)"},onDragLeave:function(e){e.target.style.filter="brightness(100%)"},droppable:"true",style:{backgroundColor:t.color},class:"category",children:[Object(a.jsx)("h1",{class:"categoryHeaders",children:t.category}),Object(a.jsx)("p",{style:{fontFamily:'"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'},children:"Click the technique name to expand or contract."}),Object(a.jsx)(f,{editCatTechVideo:o,category:t,handleDeleteCatTechNote:s,handleAddCatTechNote:i,handleEditCatTechNote:c,handleDeleteCatTechnique:l,catTechniques:t.catTechniques,handleDeleteTechnique:r}),Object(a.jsx)("button",{class:"categoryButtons",onClick:function(){return n(t.id)},children:"Delete"})]})}function y(e){var t=e.categories,n=e.editCatTechVideo,c=e.handleDeleteCategory,o=e.handleEditCatTechNote,i=e.handleAddCatTechNote,r=e.techniques,l=e.handleDeleteCatTechnique,d=e.handleDeleteCatTechNote,s=e.handleDrop;return Object(a.jsx)("div",{id:"categoriesCon",children:t.map((function(e){return Object(a.jsx)(O,{handleDeleteCatTechNote:d,handleAddCatTechNote:i,editCatTechVideo:n,handleDeleteCategory:c,handleEditCatTechNote:o,handleDeleteCatTechnique:l,handleDrop:s,techniques:r,category:e},e.id)}))})}function g(e){var t=e.categoryKey,n=e.handleDrop,o=Object(c.useRef)();return Object(a.jsx)("a",{onMouseOver:function(){o.current.style.filter="brightness(110%)"},onMouseOut:function(e){o.current.style.filter="brightness(100%)"},href:"#".concat(t.id),style:{textDecoration:"none"},children:Object(a.jsx)("div",{onDrop:function(e){return n(e,t)},onDragOver:function(e){e.preventDefault(),e.target.style.filter="brightness(200%)"},onDragLeave:function(e){e.target.style.filter="brightness(100%)"},droppable:"true",ref:o,class:"categoryKeys",style:{backgroundColor:t.color},children:Object(a.jsx)("h1",{children:t.category})})})}function v(e){var t=e.categoryKeys,n=e.handleDrop;return Object(a.jsx)("div",{id:"categoryKeyContain",children:t.map((function(e){return Object(a.jsx)(g,{handleDrop:n,categoryKey:e},e.id)}))})}var p="BJJNotesApp.techniques",x="BJJNotesApp.categories",T="BJJNotesApp.categoryKeys";function q(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(c.useState)([]),d=Object(r.a)(l,2),s=d[0],h=d[1],j=Object(c.useState)([]),b=Object(r.a)(j,2),f=b[0],O=b[1],g=Object(c.useRef)(),q=Object(c.useRef)(),C=Math.floor(1e5*Math.random()),D=Math.floor(1e5*Math.random());Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(p));e&&o(e)}),[]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(x));e&&h(e)}),[]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(T));e&&O(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(p,JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){localStorage.setItem(x,JSON.stringify(s))}),[s]),Object(c.useEffect)((function(){localStorage.setItem(T,JSON.stringify(f))}),[f]);var N=function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))};var k=function(e,t){var c=document.querySelector(".dragging");e.target.style.filter="brightness(100%)",n.forEach((function(e){if(c.id===e.id.toString()){var n=function(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var c=parseInt(e,16),o=(c>>16)+t;o>255?o=255:o<0&&(o=0);var i=(c>>8&255)+t;i>255?i=255:i<0&&(i=0);var r=(255&c)+t;r>255?r=255:r<0&&(r=0);return(n?"#":"")+(r|i<<8|o<<16).toString(16)}(t.color,-40);h((function(c){return c.map((function(c){if(t.id==c.id){console.log(e.video);var o=[].concat(Object(i.a)(c.catTechniques),[{id:e.id,technique:e.technique,video:e.video,color:n,notes:e.notes}]);return{id:c.id,category:c.category,color:c.color,catTechniques:o}}return c}))})),N(e.id)}}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"mainHeader",class:"header",children:"BJJ NOTES"}),Object(a.jsxs)("div",{id:"description",class:"header",children:[Object(a.jsx)("p",{children:"Add your techniques below. You can also add categories if you scroll down further (Instructionals, positions etc)."}),Object(a.jsx)("p",{children:"Drag and drop techniques into catgeories/category shortcuts to categorize them."})]}),Object(a.jsxs)("div",{id:"techniqueSection",children:[Object(a.jsxs)("div",{class:"inContain",children:[Object(a.jsx)("h1",{class:"titles",children:"Techniques"}),Object(a.jsx)("label",{for:"technique",children:"Technique"}),Object(a.jsx)("input",{ref:q,id:"techniqueIn",class:"input titleIn",type:"text"}),Object(a.jsx)("button",{onClick:function(){var e=q.current.value;""!==e?(o((function(t){return[].concat(Object(i.a)(t),[{id:C,technique:e,video:"",color:"rgb(21, 134, 152)",notes:[]}])})),q.current.value=null):alert("Please enter a technique.")},id:"addTechnique",class:"input",children:"Add Technique"})]}),Object(a.jsx)("div",{id:"techniqueContain",children:Object(a.jsx)(u,{handleDeleteTechnique:N,handleDeleteNote:function(e,t){o((function(n){return n.map((function(n){if(n.id===t){var c=n.notes.filter((function(t){return t.noteID!=e}));return{id:n.id,technique:n.technique,video:n.video,color:n.color,notes:c}}return{id:n.id,technique:n.technique,video:n.video,color:n.color,notes:n.notes}}))}))},editVideo:function(e,t){var n=e.replace("watch?v=","embed/");if(n.includes("&t=")){var c=n.indexOf("&t=");n=n.substring(0,c),console.log(n)}o((function(e){return e.map((function(e){return e.id===t?{id:e.id,technique:e.technique,video:n,color:e.color,notes:e.notes}:{id:e.id,technique:e.technique,video:e.video,color:e.color,notes:e.notes}}))}))},editNote:function(e,t,n){o((function(c){var o=[];return c.forEach((function(c){var i=[];c.id===n.id?(c.notes.forEach((function(n){n.noteID===t?i.push({noteText:e,noteID:t,noteTitle:"Note "+t}):i.push({noteText:n.noteText,noteID:n.noteID,noteTitle:"Note "+n.noteID})})),o.push({id:c.id,technique:c.technique,video:c.video,color:c.color,notes:i})):o.push({id:c.id,technique:c.technique,video:c.video,color:c.color,notes:c.notes})})),o}))},addNote:function(e,t){o((function(n){var c=[];return n.forEach((function(n){if(n.id==t.id){var o={id:t.id,technique:t.technique,video:t.video,color:t.color,notes:e};c.push(o)}else c.push(n);console.log(c)})),c}))},techniques:n})})]}),Object(a.jsxs)("div",{id:"categorySection",children:[Object(a.jsx)("div",{class:"center",children:Object(a.jsx)("h1",{class:"titles",children:"Categories"})}),Object(a.jsx)("div",{class:"center",children:Object(a.jsx)("h1",{id:"categoryKeysTitle",children:"Category Shortcuts"})}),Object(a.jsx)("div",{class:"center",children:Object(a.jsx)(v,{handleDrop:k,categoryKeys:f})}),Object(a.jsxs)("div",{class:"inContain",children:[Object(a.jsx)("label",{for:"instructional",children:"Category"}),Object(a.jsx)("input",{ref:g,id:"categoryIn",class:"input titleIn",type:"text"}),Object(a.jsx)("button",{onClick:function(){var e=["#F94144","#F3722C","#F8961E","#F9C74F","#90BE6D","#43AA8B","#577590","#541388"],t=g.current.value;""!==t?s.length>7?alert("You've reached your category limit!"):(h((function(n){return[].concat(Object(i.a)(n),[{id:D,category:t,color:e[s.length],catTechniques:[]}])})),O((function(n){return[].concat(Object(i.a)(n),[{id:D,category:t,color:e[s.length],catKeyTechniques:[]}])})),g.current.value=null):alert("Please enter a category.")},id:"addCategory",class:"input",children:"Add Category"})]}),Object(a.jsx)(y,{handleDrop:k,handleDeleteCatTechNote:function(e,t){h((function(n){return n.map((function(n){var c=[];return n.catTechniques.forEach((function(n){if(n.id===t){var o=n.notes.filter((function(t){return t.noteID!=e}));c.push({id:n.id,technique:n.technique,video:n.video,color:n.color,notes:o}),console.log("same")}else c.push({id:n.id,technique:n.technique,video:n.video,color:n.color,notes:n.notes})})),{id:n.id,category:n.category,color:n.color,catTechniques:c}}))}))},handleAddCatTechNote:function(e,t){h((function(n){var c=[];return n.forEach((function(n){var o=[];n.catTechniques.forEach((function(n){if(n.id==t.id){var c={id:t.id,technique:t.technique,video:t.video,color:t.color,notes:e};o.push(c)}else o.push(n)})),c.push({id:n.id,category:n.category,color:n.color,catTechniques:o})})),c}))},editCatTechVideo:function(e,t){var n=e.replace("watch?v=","embed/");if(n.includes("&t=")){var c=n.indexOf("&t=");n=n.substring(0,c),console.log(n)}h((function(e){return e.map((function(e){var c=e.catTechniques.map((function(e){return e.id===t?{id:e.id,technique:e.technique,video:n,color:e.color,notes:e.notes}:{id:e.id,technique:e.technique,video:e.video,color:e.color,notes:e.notes}}));return{id:e.id,category:e.category,color:e.color,catTechniques:c}}))}))},handleEditCatTechNote:function(e,t,n){h((function(c){return c.map((function(c){var o=[];return c.catTechniques.forEach((function(c){var i=[];c.id===n.id?(c.notes.forEach((function(n){n.noteID===t?i.push({noteText:e,noteID:t,noteTitle:"Note "+t}):i.push({noteText:n.noteText,noteID:n.noteID,noteTitle:"Note "+n.noteID})})),o.push({id:c.id,technique:c.technique,video:c.video,color:c.color,notes:i})):o.push({id:c.id,technique:c.technique,video:c.video,color:c.color,notes:c.notes})})),{id:c.id,category:c.category,color:c.color,catTechniques:o}}))}))},handleDeleteCategory:function(e){h((function(t){return t.filter((function(t){return t.id!==e}))})),O((function(t){return t.filter((function(t){return t.id!==e}))}))},techniques:n,handleDeleteCatTechnique:function(e,t){h((function(n){var c=[];return n.forEach((function(n){if(n.id===t){var o=n.catTechniques.filter((function(t){return t.id!==e}));c.push({id:n.id,category:n.category,color:n.color,catTechniques:o})}else c.push(n)})),c}))},handleDeleteTechnique:N,categories:s})]})]})}var C=n(7),D=n.n(C);n(13);D.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8135fed3.chunk.js.map