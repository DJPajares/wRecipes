(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,i){e.exports={"wrapper-main":"Saved_wrapper-main__1nsng","search-form":"Saved_search-form__2p7eO","search-bar":"Saved_search-bar__mRwTV","search-button":"Saved_search-button__2ihM3",recipes:"Saved_recipes__2PXAK","btn-add":"Saved_btn-add__HmOOZ","btn-text":"Saved_btn-text___MSZI"}},21:function(e,t,i){e.exports={"wrapper-body":"ViewRecipesMinimal_wrapper-body__xXn8e",image:"ViewRecipesMinimal_image__Va8JR","wrapper-dark-fading":"ViewRecipesMinimal_wrapper-dark-fading__1vypE",subTitle:"ViewRecipesMinimal_subTitle__2bd3O","wrapper-footer":"ViewRecipesMinimal_wrapper-footer__1Tddp",title:"ViewRecipesMinimal_title__2pV5U"}},23:function(e,t,i){e.exports={"wrapper-main":"Online_wrapper-main__eMKW-","search-form":"Online_search-form__3cYGO","search-bar":"Online_search-bar__1WGQO","search-button":"Online_search-button__2FGnO",recipes:"Online_recipes__1_WHe"}},4:function(e,t,i){e.exports={wrapper:"RecipeOpen_wrapper__2YnqF","wrapper-main":"RecipeOpen_wrapper-main__1sYfF","btn-back":"RecipeOpen_btn-back__1IM9_","btn-text":"RecipeOpen_btn-text__na4x4","btn-delete":"RecipeOpen_btn-delete__O7ZbP","wrapper-sub":"RecipeOpen_wrapper-sub__20OZr","wrapper-header":"RecipeOpen_wrapper-header__1P7Op",image:"RecipeOpen_image__1_Ulj","btn-edit":"RecipeOpen_btn-edit__3aWVb","wrapper-body":"RecipeOpen_wrapper-body__1Ulyp",subtitle:"RecipeOpen_subtitle__2R1yc",description:"RecipeOpen_description__n6rMj","wrapper-list":"RecipeOpen_wrapper-list__2cRhH",items:"RecipeOpen_items__kTw0V","wrapper-footer":"RecipeOpen_wrapper-footer__16whX","footer-left":"RecipeOpen_footer-left__3dsCP","footer-right":"RecipeOpen_footer-right__3FAQa"}},50:function(e,t,i){},51:function(e,t,i){},57:function(e,t,i){},6:function(e,t,i){e.exports={"wrapper-header":"RecipeAdd_wrapper-header__HpPUV","btn-back":"RecipeAdd_btn-back__2Ngct","btn-text":"RecipeAdd_btn-text__172h7","btn-save":"RecipeAdd_btn-save__3Zb0R","wrapper-body":"RecipeAdd_wrapper-body__5alDU","wrapper-generic":"RecipeAdd_wrapper-generic__19Q71","text-box":"RecipeAdd_text-box__3IjNk","text-area":"RecipeAdd_text-area__iqUF-","wrapper-img":"RecipeAdd_wrapper-img__2mlOq","btn-img":"RecipeAdd_btn-img__oz2Qd"}},73:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(33),c=i.n(a),r=(i(50),i(3)),l=i(5),o=(i(51),i(0)),p=function(){return Object(o.jsxs)("div",{id:"navbar",children:[Object(o.jsx)("div",{class:"title",children:Object(o.jsx)(r.b,{to:"/",children:"wRecipes"})}),Object(o.jsx)("div",{class:"menu-container",children:Object(o.jsxs)("ul",{class:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/recipes",children:"Recipes"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/planner",children:"Planner"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/shopping",children:"Shopping"})})]})})]})},d=function(){return Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Welcome to my App"}),Object(o.jsx)("div",{id:"content-box"})]})},u=(i(57),function(){return Object(o.jsx)("div",{id:"subnavbar",children:Object(o.jsx)("div",{class:"menu-container",children:Object(o.jsxs)("ul",{class:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/saved",children:"Saved"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/online",children:"Online"})})]})})})}),j=i(22),h=i.n(j),b=i(27),m=i(18),x=i(19),O=i.n(x),_=i(14),g=i(15),v=i(17),f=i(16),w=i(21),y=i.n(w),N=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(){return Object(_.a)(this,i),t.apply(this,arguments)}return Object(g.a)(i,[{key:"render",value:function(){var e={status:1,id:this.props.id,title:this.props.title,description:this.props.description,image:this.props.image,calories:this.props.calories,cuisineType:this.props.cuisineType,dishType:this.props.dishType,mealType:this.props.mealType,ingredients:this.props.ingredients,directions:this.props.directions,duration:this.props.duration,servings:this.props.servings};return Object(o.jsx)(r.b,{to:{pathname:"/recipe-open",singleRecipe:"".concat(JSON.stringify(e))},style:{textDecoration:"none"},children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:y.a["wrapper-body"],children:[Object(o.jsx)("img",{className:y.a.image,src:e.image,alt:""}),Object(o.jsx)("div",{className:y.a["wrapper-dark-fading"],children:void 0===e.duration?null:Object(o.jsx)("p",{className:y.a.subTitle,children:function(e){if(e>60){var t=e/60,i=Math.floor(t),n=60*(t-i),s=Math.round(n);return i+(1===i?"hr":"hrs")+" "+s+(1===s?"min":"mins")}return"".concat(e,1===e?"min":"mins")}(e.duration)})})]}),Object(o.jsx)("div",{className:y.a["wrapper-footer"],children:void 0===e.title?null:Object(o.jsx)("p",{className:y.a.title,children:e.title})})]})},e.id)}}]),i}(n.Component),R=N,T=i(11),C=i(8),S=function(){var e=s.a.useState([]),t=Object(m.a)(e,2),i=t[0],n=t[1],a=s.a.useState(""),c=Object(m.a)(a,2),l=c[0],p=c[1],d=s.a.useState(""),u=Object(m.a)(d,2),j=u[0],x=u[1];s.a.useEffect((function(){_()}),[j]);var _=function(){var e=Object(b.a)(h.a.mark((function e(){var t,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/search?q=".concat(j));case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,n(i),console.log(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:O.a["wrapper-main"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:O.a["btn-add"],children:Object(o.jsxs)(r.b,{to:"/recipe-add",className:O.a["btn-text"],children:[Object(o.jsx)(T.a,{icon:C.c})," ADD"]})}),Object(o.jsxs)("form",{className:O.a["search-form"],onSubmit:function(e){e.preventDefault(),x(l),p("")},children:[Object(o.jsx)("input",{type:"text",className:O.a["search-bar"],placeholder:"e.g. Vegan",value:l,onChange:function(e){p(e.target.value),console.log(l)}}),Object(o.jsx)("button",{type:"submit",className:O.a["search-button"],children:Object(o.jsx)(T.a,{icon:C.d})})]})]}),Object(o.jsx)("div",{className:O.a.recipes,children:i.map((function(e,t){return Object(o.jsx)(R,{id:e._id,title:e.title,description:e.description,image:e.image,ingredients:e.ingredients,directions:e.directions,duration:e.duration,servings:e.servings})}))})]})},k=i(23),V=i.n(k),D=i(9),A=i.n(D),M=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(){return Object(_.a)(this,i),t.apply(this,arguments)}return Object(g.a)(i,[{key:"render",value:function(){var e={status:2,id:this.props.id,title:this.props.title,description:this.props.description,image:this.props.image,calories:this.props.calories,cuisineType:this.props.cuisineType,dishType:this.props.dishType,mealType:this.props.mealType,ingredients:this.props.ingredients,directions:this.props.directions,duration:this.props.duration,servings:this.props.servings};return Object(o.jsxs)("div",{className:A.a.wrapper,children:[Object(o.jsxs)("div",{className:A.a["wrapper-header"],children:[Object(o.jsx)("img",{className:A.a.image,src:e.image,alt:""}),Object(o.jsx)("button",{className:A.a["btn-add"],children:Object(o.jsx)(r.b,{to:{pathname:"/recipe-add",singleRecipe:"".concat(JSON.stringify(e))},children:Object(o.jsx)(T.a,{icon:C.c,color:"white"})},e.id)})]}),Object(o.jsxs)("div",{className:A.a["wrapper-body"],children:[void 0===e.title?null:Object(o.jsx)("h1",{children:e.title}),void 0===e.cuisineType?null:Object(o.jsxs)("p",{className:A.a.subtitle,children:["(",e.cuisineType,")"]}),void 0===e.description?null:Object(o.jsx)("p",{className:A.a.description,children:e.description}),void 0===e.ingredients?null:Object(o.jsxs)("div",{className:A.a["wrapper-list"],children:[Object(o.jsx)("p",{children:"Ingredients:"}),Object(o.jsx)("ul",{className:A.a.items,children:e.ingredients.map((function(e){return Object(o.jsx)("li",{className:A.a.items,children:void 0===e.name_full?e.name+"("+e.amount.quantity+" "+(e.amount.unit?e.amount.unit:null)+")":e.name_full})}))})]}),void 0===e.directions?null:Object(o.jsxs)("div",{className:A.a["wrapper-list"],children:[Object(o.jsx)("p",{children:"Directions:"}),Object(o.jsx)("ol",{className:A.a.items,children:e.directions.map((function(e){return Object(o.jsx)("li",{className:A.a.items,children:e})}))})]})]}),Object(o.jsx)("div",{className:A.a["wrapper-footer"],children:void 0===e.duration?null:Object(o.jsxs)("p",{className:A.a.footer,children:["Duration: ",function(e){if(e>60){var t=e/60,i=Math.floor(t),n=60*(t-i),s=Math.round(n);return i+(1===i?"hr":"hrs")+" "+s+(1===s?"min":"mins")}return"".concat(e,1===e?"min":"mins")}(e.duration)]})})]})}}]),i}(n.Component),E=M,B=function(){var e=s.a.useState([]),t=Object(m.a)(e,2),i=t[0],n=t[1],a=s.a.useState(""),c=Object(m.a)(a,2),r=c[0],l=c[1],p=s.a.useState("Burger"),d=Object(m.a)(p,2),u=d[0],j=d[1],x="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(u,"&app_id=").concat("603f8b95","&app_key=").concat("0104a4f3be9cb20952892f37e624a49f","&health=vegan");s.a.useEffect((function(){O()}),[u]);var O=function(){var e=Object(b.a)(h.a.mark((function e(){var t,i,s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,s=i.hits,a=[],s.forEach((function(e){var t=[];e.recipe.ingredients.forEach((function(e){t.push({name:e.food,name_full:e.text,amount:{quantity:e.quantity,unit:e.measure},image:e.image,weight:e.weight})})),a.push({title:e.recipe.label,image:e.recipe.image,calories:e.recipe.calories,cuisineType:e.recipe.cuisineType,dishType:e.recipe.dishType,mealType:e.recipe.mealType,ingredients:t,duration:e.recipe.totalTime})})),n(a),console.log(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:V.a["wrapper-main"],children:[Object(o.jsxs)("form",{className:V.a["search-form"],onSubmit:function(e){e.preventDefault(),j(r),l("")},children:[Object(o.jsx)("input",{type:"text",className:V.a["search-bar"],placeholder:"e.g. Vegan",value:r,onChange:function(e){l(e.target.value),console.log(r)}}),Object(o.jsx)("button",{type:"submit",className:V.a["search-button"],children:Object(o.jsx)(T.a,{icon:C.d})})]}),Object(o.jsx)("div",{className:V.a.recipes,children:i.map((function(e,t){return Object(o.jsx)(E,{title:e.title,image:e.image,calories:e.calories,cuisineType:e.cuisineType.join(", "),dishType:e.dishType.join(", "),mealType:e.mealType.join(", "),ingredients:e.ingredients,duration:e.duration},t)}))})]})},q=i(45),F=i(28),I=i(6),P=i.n(I),J=i(29),U=i.n(J),H=i(30),W=i.n(H),Z=W()(U.a),L=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(e){var n;if(Object(_.a)(this,i),(n=t.call(this,e)).onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.getData=function(){var e=document.getElementById("form-image").files[0];if(e){var t=new FileReader;t.onload=function(e){n.setState({src:e.target.result})},t.readAsDataURL(e)}else void 0===n.state.image||null===n.state.image||""===n.state.image?n.setState({src:"https://via.placeholder.com/300x300?text=No+Image+Available"}):n.setState({src:n.state.image})},n.onSubmit=function(e){e.preventDefault(),Z.fire({text:"Are you sure you want to upload this recipe?",focusConfirm:!0,showDenyButton:!0,showCloseButton:!0,confirmButtonText:"Yes",denyButtonText:"No"}).then((function(e){e.isConfirmed&&(t(),Z.fire({text:"Recipe uploaded",icon:"success",confirmButtonText:"Ok"}).then((function(){n.props.history.push("/saved")})))}));var t=function(){if(void 0===n.state.ingredients||null===n.state.ingredients){console.log(n.state.ingredientsTxt);var e=[];n.state.ingredientsTxt.split("\n").forEach((function(t){if(t.indexOf("[")>=0&&t.indexOf("]")>=0)var i=t.indexOf("[")+1,n=t.indexOf("]"),s=t.substring(i,n),a=(r=s.match(/\d+/))&&null!==r?parseFloat(r[0]):0,c=s.replace(/\d+/g,"").trim();else{var r;a=(r=t.match(/\d+/))&&null!==r?parseFloat(r[0]):0}e.push({name:t,name_full:t,amount:{quantity:a,unit:c}})}))}else e=n.state.ingredients;var t=JSON.stringify({status:n.state.status,id:n.state.id,title:n.state.title,description:n.state.description,image:n.state.src,ingredients:e,directions:n.state.directions?n.state.directions.split("\n"):null,duration:parseInt(n.state.duration),servings:parseInt(n.state.servings)});fetch("/upload",{method:"POST",body:t,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},e.location.singleRecipe){var s=JSON.parse(e.location.singleRecipe);if(1===s.status){var a="UPDATE";if(null===s.ingredients||void 0===s.ingredients)var c=[],r="";else{var l=[];s.ingredients.forEach((function(e){l.push(e.name_full)}));r=l.join("\n"),c=s.ingredients}var o=null===s.directions||void 0===s.directions?null:s.directions.join("\n")}else if(2===s.status){a="SAVE";if(null===s.ingredients||void 0===s.ingredients)c=[],r="";else{l=[];s.ingredients.forEach((function(e){l.push(e.name_full)}));r=l.join("\n"),c=s.ingredients}o=null===s.directions||void 0===s.directions?null:s.directions.join("\n")}}else a="SAVE",c=[],r=[],o=[];return n.state={src:"",image:null===s||void 0===s?null:s.image,id:null===s||void 0===s?null:s.id,title:null===s||void 0===s?null:s.title,description:null===s||void 0===s?null:s.description,ingredientsTxt:r,ingredients:c,directions:null===s||void 0===s?null:o,duration:null===s||void 0===s?null:s.duration,servings:null===s||void 0===s?null:s.servings,btnText:a,status:null===s||void 0===s?null:s.status},n.getData=n.getData.bind(Object(F.a)(n)),console.log(n.state),n}return Object(g.a)(i,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:P.a["wrapper-main"],children:[Object(o.jsxs)("div",{className:P.a["wrapper-header"],children:[Object(o.jsx)("button",{className:P.a["btn-back"],children:Object(o.jsxs)(r.b,{to:"/saved",className:P.a["btn-text"],children:[Object(o.jsx)(T.a,{icon:C.a})," Back to recipes"]})}),Object(o.jsx)("button",{className:P.a["btn-save"],onClick:this.onSubmit,onMouseEnter:this.getData,children:this.state.btnText})]}),Object(o.jsxs)("div",{className:P.a["wrapper-body"],children:[Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("div",{className:P.a["text-box"],children:Object(o.jsx)("input",{name:"title",value:this.state.title,onChange:this.onChange,type:"text",placeholder:"What will you name this recipe?"})})]}),Object(o.jsx)("div",{className:P.a["wrapper-img"],children:Object(o.jsx)("div",{className:P.a["text-box"],children:Object(o.jsx)("input",{id:"form-image",name:"image",type:"file",accept:"image/*"})})}),Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Description"}),Object(o.jsx)("div",{className:P.a["text-area"],children:Object(o.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.onChange,type:"text",placeholder:"Tell us about this dish"})})]}),Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Ingredients"}),Object(o.jsx)("div",{className:P.a["text-area"],children:Object(o.jsx)("textarea",{name:"ingredients",value:this.state.ingredientsTxt,onChange:this.onChange,type:"text",placeholder:"Create new line for each item and enclose quantities in a bracket\r e.g. [1 cup] rice"})})]}),Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Directions"}),Object(o.jsx)("div",{className:P.a["text-area"],children:Object(o.jsx)("textarea",{name:"directions",value:this.state.directions,onChange:this.onChange,type:"text",placeholder:"Create new line for each instruction"})})]}),Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Duration"}),Object(o.jsx)("div",{className:P.a["text-box"],children:Object(o.jsx)("input",{name:"duration",value:this.state.duration,onChange:this.onChange,type:"number",placeholder:"in minutes"})})]}),Object(o.jsxs)("div",{className:P.a["wrapper-generic"],children:[Object(o.jsx)("label",{children:"Servings"}),Object(o.jsx)("div",{className:P.a["text-box"],children:Object(o.jsx)("input",{name:"servings",value:this.state.servings,onChange:this.onChange,type:"number",placeholder:"How many servings does this make?"})})]})]})]})}}]),i}(n.Component),Q=i(4),Y=i.n(Q),G=W()(U.a),K=function(e){Object(v.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(_.a)(this,i),(n=t.call(this,e)).delRecipe=function(){G.fire({text:"Are you sure you want to remove this recipe?",icon:"warning",focusConfirm:!1,showDenyButton:!0,showCloseButton:!0,confirmButtonText:"Yes",denyButtonText:"No"}).then((function(e){if(e.isConfirmed){var t=n.state.singleRecipe.id;fetch("/api/delete?q=".concat(t)).then((function(e){return e.json()})).then((function(e){return console.log(e)})),n.props.history.push("/saved"),G.fire({text:"Recipe deleted",icon:"success",confirmButtonText:"Ok"})}}))},n.state={singleRecipe:JSON.parse(e.location.singleRecipe)},n}return Object(g.a)(i,[{key:"render",value:function(){var e=this.state.singleRecipe;return Object(o.jsxs)("div",{className:Y.a.wrapper,children:[Object(o.jsxs)("div",{className:Y.a["wrapper-main"],children:[Object(o.jsx)("button",{className:Y.a["btn-back"],children:Object(o.jsxs)(r.b,{to:"/saved",className:Y.a["btn-text"],children:[Object(o.jsx)(T.a,{icon:C.a})," Back to recipes"]})}),Object(o.jsxs)("button",{className:Y.a["btn-delete"],onClick:this.delRecipe,children:[Object(o.jsx)(T.a,{icon:C.e})," DELETE"]})]}),Object(o.jsxs)("div",{className:Y.a["wrapper-sub"],children:[Object(o.jsxs)("div",{className:Y.a["wrapper-header"],children:[Object(o.jsx)("img",{className:Y.a.image,src:e.image,alt:""}),Object(o.jsx)("button",{className:Y.a["btn-edit"],onClick:this.editRecipe,children:Object(o.jsx)(r.b,{to:{pathname:"/recipe-add",singleRecipe:"".concat(JSON.stringify(e))},children:Object(o.jsx)(T.a,{icon:C.b,color:"white"})},e.id)})]}),Object(o.jsxs)("div",{className:Y.a["wrapper-body"],children:[void 0===e.title?null:Object(o.jsx)("h1",{children:e.title}),void 0===e.cuisineType?null:Object(o.jsxs)("p",{className:Y.a.subtitle,children:["(",e.cuisineType,")"]}),void 0===e.description?null:Object(o.jsx)("p",{className:Y.a.description,children:e.description}),void 0===e.ingredients||null===e.ingredients?null:Object(o.jsxs)("div",{className:Y.a["wrapper-list"],children:[Object(o.jsx)("p",{children:"Ingredients:"}),Object(o.jsx)("ul",{className:Y.a.items,children:e.ingredients.map((function(e,t){return Object(o.jsx)("li",{className:Y.a.items,children:void 0===e.name_full?e.name+(e.amount.quantity?"("+e.amount.quantity+" "+(e.amount.unit?e.amount.unit:null)+")":null):e.name_full},t)}))})]}),void 0===e.directions||null===e.directions?null:Object(o.jsxs)("div",{className:Y.a["wrapper-list"],children:[Object(o.jsx)("p",{children:"Directions:"}),Object(o.jsx)("ol",{className:Y.a.items,children:e.directions?e.directions.map((function(e,t){return Object(o.jsx)("li",{className:Y.a.items,children:e},t)})):null})]})]}),Object(o.jsxs)("div",{className:Y.a["wrapper-footer"],children:[void 0===e.servings?null:Object(o.jsxs)("p",{className:Y.a["footer-left"],children:["Servings: ",e.servings]}),void 0===e.duration?null:Object(o.jsxs)("p",{className:Y.a["footer-right"],children:["Duration: ",function(e){if(e>60){var t=e/60,i=Math.floor(t),n=60*(t-i),s=Math.round(n);return i+(1===i?"hr":"hrs")+" "+s+(1===s?"min":"mins")}return"".concat(e,1===e?"min":"mins")}(e.duration)]})]})]})]})}}]),i}(n.Component),X=function(){return Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Recipes"}),Object(o.jsx)("div",{id:"content-box",children:Object(o.jsx)(r.a,{basename:"/wrecipes/recipes",children:Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/saved",component:S}),Object(o.jsx)(l.a,{path:"/recipe-add",component:L}),Object(o.jsx)(l.a,{path:"/recipe-open",component:K}),Object(o.jsx)(l.a,{path:"/online",component:B})]})]})})})]})},z=function(){return Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Meal Planner"}),Object(o.jsx)("div",{id:"content-box"})]})},$=function(){return Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Shopping List"}),Object(o.jsx)("div",{id:"content-box"})]})},ee=function(){return Object(o.jsx)(r.a,{basename:"/wrecipes/",children:Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(o.jsx)(l.a,{path:"/recipes",component:X}),Object(o.jsx)(l.a,{path:"/planner",component:z}),Object(o.jsx)(l.a,{path:"/shopping",component:$})]})]})})},te=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,74)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(ee,{})}),document.getElementById("root")),te()},9:function(e,t,i){e.exports={wrapper:"ViewRecipes_wrapper__OmvKq","wrapper-header":"ViewRecipes_wrapper-header__3Au-3",image:"ViewRecipes_image__1_y8R","btn-add":"ViewRecipes_btn-add__UdZ7h","wrapper-body":"ViewRecipes_wrapper-body__hNoC_",subtitle:"ViewRecipes_subtitle__uiJoH",description:"ViewRecipes_description__20-3g","wrapper-list":"ViewRecipes_wrapper-list__1dawn",items:"ViewRecipes_items__sGK5Q","wrapper-footer":"ViewRecipes_wrapper-footer__2ECvn",footer:"ViewRecipes_footer__3H_CE"}}},[[73,1,2]]]);
//# sourceMappingURL=main.400907fc.chunk.js.map