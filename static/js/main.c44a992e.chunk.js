(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/thumbnailDefault.93555254.png"},28:function(e,t,a){e.exports=a(60)},34:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),r=a.n(l),o=a(62),s=a(64),c=a(63),d=(a(34),a(6)),m=a(7),u=a(9),g=a(8),h=a(10),p=a(24),v=a.n(p),f=(a(54),a(61));function b(){return i.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-burger burger","data-target":"navbar","aria-label":"menu","aria-expanded":"false"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbar",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"}),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement(f.a,{to:"/"},"Home")),i.a.createElement("div",{className:"navbar-item"},i.a.createElement(f.a,{to:"/about"},"About")))))}function E(){return i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"hero-body",style:{padding:"1.5rem"}},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title has-text-centered has-text-grey has-text-weight-bold"},"BOOK FINDER"),i.a.createElement("h2",{className:"subtitle has-text-centered has-text-grey"},"Powered by Google's Books API"))))}function y(e){return i.a.createElement("header",{className:"hero"},i.a.createElement(b,null),i.a.createElement(E,null))}function w(e){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"Book Finder by ",i.a.createElement("a",{href:"https://www.github.com/julianjohannesen",title:"Find me on GitHub"},"Julian Johannesen")),i.a.createElement("p",null,i.a.createElement("a",{className:"is-size-1",href:"https://www.github.com/julianjohannesen/find-books",title:"See this project on Github"},i.a.createElement("i",{className:"fab fa-github has-text-dark"})))))}function k(e){var t=e.handleBlur,a=e.handleChange,n=e.handleFocus,l=e.handleSubmit,r=e.isValid,o=e.query;return i.a.createElement("section",{className:"section"},i.a.createElement("form",{className:"field is-centered is-grouped",onSubmit:l},i.a.createElement("input",{className:r?"input is-large":"input is-large is-danger",onBlur:t,onChange:a,onFocus:n,placeholder:"search by title, author, isbn",required:!0,style:{borderTopRightRadius:"0",borderBottomRightRadius:"0"},type:"search",title:"Search by title, author, or ISBN",value:o}),i.a.createElement("button",{"aria-haspopup":"true",className:"button is-large is-primary",style:{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"},type:"submit"},"Submit")))}var C=a(11),N=a.n(C),S=a(27),x=a(25),I=a.n(x),R=function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(u.a)(this,Object(g.a)(t).call(this,e)),e.hasCustomGradientColor&&(a.fillId="widgetGrad".concat(Math.random().toFixed(15).slice(2))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"stopColorStyle",value:function(e){var t={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:t}},{key:"render",value:function(){var e=this.props,t=e.changeRating,a=e.hoverOverWidget,n=e.unHoverOverWidget,l=e.inheritFillId,r=e.svgIconViewBox,o=e.svgIconPath,s=e.svg,c=e.hasCustomGradientColor,d=s;return i.a.isValidElement(d)&&(d=i.a.cloneElement(d,Object(S.a)({},this.props,{fillId:this.fillId||l}))),i.a.createElement("div",{className:"widget-container",style:this.widgetContainerStyle,onMouseEnter:a,onMouseLeave:n,onClick:t},d||i.a.createElement("svg",{viewBox:r,className:this.widgetClasses,style:this.widgetSvgStyle},c?this.renderIndividualGradient:null,i.a.createElement("path",{className:"widget",style:this.pathStyle,d:o})))}},{key:"widgetContainerStyle",get:function(){var e=this.props,t=e.changeRating,a=e.widgetSpacing,n=e.isFirstWidget,i=e.isLastWidget;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?void 0:a,paddingRight:i?void 0:a,cursor:t?"pointer":void 0}}},{key:"widgetSvgStyle",get:function(){var e=this.props,t=e.ignoreInlineStyles,a=e.isCurrentHoveredWidget,n=e.widgetDimension;return t?{}:{width:n,height:n,transition:"transform .2s ease-in-out",transform:a?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e,t=this.props,a=t.isSelected,n=t.isPartiallyFullWidget,i=t.isHovered,l=t.hoverMode,r=t.widgetEmptyColor,o=t.widgetRatedColor,s=t.widgetHoverColor,c=t.gradientPathName,d=t.inheritFillId,m=t.ignoreInlineStyles;return e=l?i?s:r:n?"url('".concat(c,"#").concat(this.fillId||d,"')"):a?o:r,m?{}:{fill:e,transition:"fill .2s ease-in-out"}}},{key:"widgetClasses",get:function(){var e=this.props,t=e.isSelected,a=e.isPartiallyFullWidget,n=e.isHovered,i=e.isCurrentHoveredWidget,l=e.ignoreInlineStyles,r=I()({"widget-svg":!0,"widget-selected":t,"multi-widget-selected":a,hovered:n,"current-hovered":i});return l?{}:r}},{key:"offsetValue",get:function(){var e=this.props.selectedRating,t="0%";if(!Number.isInteger(e)){var a=e.toFixed(2).split(".")[1].slice(0,2);t="".concat(a,"%")}return t}},{key:"renderIndividualGradient",get:function(){var e=this.props,t=e.widgetRatedColor,a=e.widgetEmptyColor;return i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.a.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(t)}),i.a.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(t)}),i.a.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(a)}),i.a.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(a)})))}}]),t}(i.a.Component),W=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).unHoverOverWidget=function(){a.setState({highestWidgetHovered:-1/0})},a.hoverOverWidget=function(e){return function(){a.setState({highestWidgetHovered:e})}},a.fillId="widgetGrad".concat(Math.random().toFixed(15).slice(2)),a.state={highestWidgetHovered:-1/0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"stopColorStyle",value:function(e){var t={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:t}},{key:"render",value:function(){var e=this.props,t=e.widgetEmptyColors,a=e.widgetRatedColors;return i.a.createElement("div",{className:"widget-ratings",title:this.titleText,style:this.widgetRatingsStyle},i.a.createElement("svg",{className:"widget-grad",style:this.widgetGradientStyle},i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.a.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(a)}),i.a.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(a)}),i.a.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(t)}),i.a.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(t)})))),this.childrenWithRatingState)}},{key:"widgetRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"widgetGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,t=e.typeOfWidget,a=e.rating,n=this.state.highestWidgetHovered,i=n>0?n:a,l=parseFloat(i.toFixed(2)).toString();Number.isInteger(i)&&(l=String(i));var r="".concat(t,"s");return"1"===l&&(r=t),"".concat(l," ").concat(r)}},{key:"offsetValue",get:function(){var e=this.props.rating,t="0%";if(!Number.isInteger(e)){var a=e.toFixed(2).split(".")[1].slice(0,2);t="".concat(a,"%")}return t}},{key:"childrenWithRatingState",get:function(){var e=this,t=this.props,a=t.changeRating,n=t.rating,l=t.children,r=t.ignoreInlineStyles,o=t.gradientPathName,s=t.widgetEmptyColors,c=t.widgetHoverColors,d=t.widgetRatedColors,m=t.widgetDimensions,u=t.widgetSpacings,g=t.svgIconPaths,h=t.svgIconViewBoxes,p=t.svgs,v=this.state.highestWidgetHovered,f=l.length;return i.a.Children.map(l,function(t,l){var b=t.props,E=b.svgIconPath,y=b.svgIconViewBox,w=b.widgetHoverColor,k=b.widgetEmptyColor,C=b.widgetRatedColor,N=b.widgetDimension,S=b.widgetSpacing,x=b.svg,I=l+1,R=I<=n,W=v>0,B=I<=v,O=I===v,j=I>n&&I-1<n,F=1===I,H=I===f;return i.a.cloneElement(t,{selectedRating:n,ignoreInlineStyles:r,gradientPathName:o,changeRating:a?function(){return a(I)}:null,hoverOverWidget:a?e.hoverOverWidget(I):null,unHoverOverWidget:a?e.unHoverOverWidget:null,inheritFillId:e.fillId,isSelected:R,isHovered:B,isCurrentHoveredWidget:O,isPartiallyFullWidget:j,isFirstWidget:F,isLastWidget:H,hoverMode:W,hasCustomGradientColor:(C||k)&&j,svgIconPath:E||g,svgIconViewBox:y||h,widgetHoverColor:w||c,widgetEmptyColor:k||s,widgetRatedColor:C||d,widgetDimension:N||m,widgetSpacing:S||u,svg:x||p})})}}]),t}(i.a.Component);W.Widget=R,W.defaultProps={rating:0,typeOfWidget:"Star",changeRating:null,ignoreInlineStyles:!1,gradientPathName:"",svgIconPaths:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBoxes:"0 0 51 48",widgetRatedColors:"rgb(109, 122, 130)",widgetEmptyColors:"rgb(203, 211, 227)",widgetHoverColors:"rgb(230, 67, 47)",widgetDimensions:"50px",widgetSpacings:"7px"};var B=W,O=a(12),j=a.n(O);function F(e){var t=e.book,a=e.generateRatings,n=e.handleClose,l=e.show,r=t.volumeInfo,o=r.title,s=void 0===o?"Title unavailable":o,c=r.authors,d=void 0===c?["Author unavailable"]:c,m=r.publisher,u=void 0===m?"Publisher unavailable]":m,g=r.publishedDate,h=void 0===g?"Published date unavailable":g,p=r.description,v=void 0===p?"Description unavailable":p,f=r.pageCount,b=void 0===f?"Page count unavailable":f,E=r.categories,y=void 0===E?["Categories unavailable"]:E,w=r.averageRating,k=void 0===w?0:w,C=r.ratingsCount,S=void 0===C?0:C,x=r.imageLinks,I=void 0===x?{thumbnail:j.a}:x;r.infoLink;return i.a.createElement("div",{className:l?"modal is-block":"modal is-hidden"},i.a.createElement("div",{className:"modal-background"}),i.a.createElement("div",{className:"modal-card"},i.a.createElement("header",{className:"modal-card-head"},i.a.createElement("p",{className:"modal-card-title"},s),i.a.createElement("button",{"aria-label":"close",className:"delete",onClick:n})),i.a.createElement("section",{className:"modal-card-body"},i.a.createElement("figure",{className:"image is-pulled-left",style:{maxWidth:"128px",marginRight:"1em"}},i.a.createElement("img",{src:I.thumbnail,alt:"Book cover",style:{backgroundColor:"#ccc",border:"1px solid #ccc"}})),i.a.createElement("div",{style:{marginLeft:"calc(128px + 2em)"}},i.a.createElement("h3",{className:"subtitle"},i.a.createElement("strong",null,"By"),": ",d.map(function(e){return i.a.createElement("span",{key:N()()},e," ")})),a(k,S),i.a.createElement("p",{style:{marginBottom:"1em"}},i.a.createElement("strong",null,"Description"),": ",v.substring(0,500)),i.a.createElement("p",null,i.a.createElement("strong",null,"Publisher"),": ",u),i.a.createElement("p",null,i.a.createElement("strong",null,"Publication Date"),": ",h),i.a.createElement("p",null,i.a.createElement("strong",null,"Pages"),": ",b),i.a.createElement("p",null,i.a.createElement("strong",null,"Categories"),": ",y.map(function(e){return i.a.createElement("span",{key:N()()},e)})))),i.a.createElement("footer",{className:"modal-card-foot"},i.a.createElement("button",{className:"button is-success"},"Shelve"),i.a.createElement("button",{"aria-label":"close",className:"button",onClick:n},"Cancel"))))}var H=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={show:!1},a.showModal=function(){return a.setState({show:!0})},a.hideModal=function(){return a.setState({show:!1})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.book.volumeInfo,t=e.title,a=void 0===t?"Title unavailable":t,n=e.authors,l=void 0===n?["Author unavailable"]:n,r=e.averageRating,o=void 0===r?0:r,s=e.ratingsCount,c=void 0===s?0:s,d=e.imageLinks,m=void 0===d?{thumbnail:j.a}:d,u=e.infoLink,g=void 0===u?"":u;return i.a.createElement("div",{className:"tile is-parent",style:{marginTop:"60px"}},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement("figure",{className:"image is-pulled-left",style:{maxWidth:"128px",marginRight:"1em",marginTop:"-65px"}},i.a.createElement("img",{src:m.thumbnail,alt:"Book cover",style:{backgroundColor:"#ccc",border:"1px solid #ccc"}})),i.a.createElement("div",{className:"",style:{marginLeft:"calc(128px + 2em)"}},i.a.createElement("h2",{className:"title"},i.a.createElement("a",{className:"is-size-4",href:g,title:a},a)),i.a.createElement("h3",{className:"subtitle"},"By: ",l.map(function(e){return i.a.createElement("span",{key:N()()},e," ")})),this.props.generateRatings(o,c),i.a.createElement("button",{"aria-haspopup":"true",className:"button is-primary modal-button","data-type":"modal",onClick:this.showModal,type:"button"},"See this Book"),i.a.createElement(F,{book:this.props.book,generateRatings:this.props.generateRatings,handleClose:this.hideModal,show:this.state.show}))))}}]),t}(i.a.Component);function P(e){var t=e.books,a=function(e,t){if(e)return i.a.createElement("h4",{className:"subtitle",style:{marginTop:"-1.25rem"}},i.a.createElement("strong",null,"Average rating"),":\xa0",i.a.createElement(B,{rating:e,widgetDimensions:"30px",widgetRatedColors:"gold",widgetSpacings:"2px"},i.a.createElement(B.Widget,null),i.a.createElement(B.Widget,null),i.a.createElement(B.Widget,null),i.a.createElement(B.Widget,null),i.a.createElement(B.Widget,null)),"(",t,")")};return i.a.createElement("section",{className:"section"},t.length>0?function(){for(var e=[],n=0;n<t.length;n++)(n+1)%2===0&&e.push(i.a.createElement("div",{key:N()(),className:"tile is-ancestor"},i.a.createElement(H,{book:t[n-1],generateRatings:a}),i.a.createElement(H,{book:t[n],generateRatings:a}))),n+1===n.length&&e.push(i.a.createElement("div",{key:N()(),className:"tile is-ancestor"},i.a.createElement(H,{book:t[n],generateRatings:a})));return e}():i.a.createElement("p",{className:"has-text-centered is-size-3"},"No results"))}var G=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={query:"",books:[],isValid:!0},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleBlur=function(e){e.target.value.trim().length<1&&a.setState({isValid:!1})},a.handleFocus=function(e){a.setState({isValid:!0})},a.handleSubmit=function(e){e.preventDefault();var t="https://www.googleapis.com/books/v1/volumes?key=AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY&q=".concat(a.state.query.trim(),"&maxResults=40");v()(t).then(function(e){return a.setState({books:e.data.items})}).catch(function(e){return console.error("Error:",e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null),i.a.createElement(k,{handleBlur:this.handleBlur,handleChange:this.handleChange,handleFocus:this.handleFocus,handleSubmit:this.handleSubmit,isValid:this.state.isValid,query:this.state.query}),i.a.createElement(P,{books:this.state.books}),i.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(o.a,{basename:"/Find-Books"},i.a.createElement(s.a,null,i.a.createElement(c.a,{exact:!0,path:"/",component:G}),i.a.createElement(c.a,{path:"/about",component:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("p",{style:{marginBottom:"1em"}},"Find Books allows users to search the ",i.a.createElement("a",{href:"https://books.google.com/",title:"Google Books"},"Google Books"),' database, "the world\'s most comprehensive index of full-text books". A search will return the first ten books matching a query. '),i.a.createElement("p",null,"I built Find Books during ",i.a.createElement("a",{href:"https://chingu.io/",title:"Chingu"},"Chingu"),' Voyage 8\'s "pre-work" period. Chingu\'s goal is to bring together developers with similar competencies in complementary skills  to work on remote teams over an 8 week "voyage." Before matching teammates, the Chingu team provided voyagers with a loose spec, a mockup, and a week to complete a book search app, implementing ',i.a.createElement("a",{href:"https://developers.google.com/books/",title:"Google Books API"},"Google's Books API"),"."))),i.a.createElement(w,null))}}),i.a.createElement(c.a,{component:function(e){var t=e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement("div",null,i.a.createElement("h1",null,"No match for ",i.a.createElement("code",null,t.pathname)),i.a.createElement("p",null,"Return ",i.a.createElement(f.a,{to:"/"},"Home"))),i.a.createElement(w,null))}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.c44a992e.chunk.js.map