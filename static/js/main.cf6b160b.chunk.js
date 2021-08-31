(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=(a(16),a(9)),c=a(3),l=a(4),u=a(6),m=a(5),h=(a(17),a(1)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleInputChange=function(t){e.setState({image:t.currentTarget.value.toLowerCase()})},e.handleFormSubmit=function(t){t.preventDefault(),""!==e.state.image.trim()&&(e.props.onSubmit(e.state.image),e.setState({image:""}),e.props.toast())},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"Searchbar",children:[Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleFormSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.image,onChange:this.handleInputChange,placeholder:"Search images and photos"})]}),""===this.state.image&&Object(h.jsx)("p",{className:"text",children:" Please, enter something in the search bar"})]})}}]),a}(n.Component);function d(e){var t=e.images,a=e.onClick;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(t)},children:Object(h.jsx)("img",{className:"ImageGalleryItem-image",src:n,alt:r})},t)}))}function p(e){var t=e.images,a=e.find;return Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(d,{images:t,onClick:a})})}function b(e){var t=e.onClick;return Object(h.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var f=a(11),j=a.n(f),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).backDropRef=Object(n.createRef)(),e.handleEscModal=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackDrop=function(t){var a=e.backDropRef.current;a&&a!==t.target||e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscModal)}},{key:"render",value:function(){var e=this.props.photo;return Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackDrop,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:e.largeImageURL,alt:e.tags,className:"modal__img"})})})}}]),a}(n.Component),v=a(10),y=(a(39),"22313175-89def84c9551dc3c20db3bc15"),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",images:[],page:1,isLoading:!1,error:"",modalImg:[]},e.searchImages=function(){var t=e.state,a=t.imageName,n=t.page;e.setState({isLoading:!0,error:""}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=").concat(y,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(e.setState({error:new Error("\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(a," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u0442 "))}))})).then((function(e){return e.hits})).then((function(t){if(0===t.length)return e.setState({error:"Nothing found, please enter a correct keyword!"});e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}),1e3)},e.loadMore=function(){e.setState({page:e.state.page+1})},e.handleForm=function(t){e.setState({imageName:t})},e.toggleModal=function(){return e.setState({isOpen:!e.state.isOpen})},e.findModalImage=function(t){e.setState((function(a){return{modalImg:a.images.filter((function(e){return e.id===t})),isOpen:!e.state.isOpen}}))},e.toastError=function(){return v.b.error("Nothing found, please enter a correct keyword!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.imageName!==this.state.imageName&&(this.setState({images:[]}),this.searchImages()),t.page!==this.state.page&&this.searchImages(),t.images!==this.state.images&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.isOpen,r=e.modalImg,o=e.error;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{onSubmit:this.handleForm,toast:this.toastError}),t.length>0&&Object(h.jsx)(p,{images:t,find:this.findModalImage}),o&&Object(h.jsx)(v.a,{position:"top-right",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"colored",pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),t.length>10&&Object(h.jsx)(b,{onClick:this.loadMore}),n&&Object(h.jsx)(O,{photo:r[0],toggleModal:this.toggleModal}),a&&Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.cf6b160b.chunk.js.map