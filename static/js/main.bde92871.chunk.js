(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),i=a.n(l),r=(a(23),a(3)),c=a(4),s=a(6),u=a(5),m=a(2),h=a(17),d=a.n(h),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={items:[],title:"Michael Jackson",hasError:!1,bookFound:!0},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleAPI=n.handleAPI.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleAPI",value:function(){var e=this,t="https://www.googleapis.com/books/v1/volumes?q="+this.state.title;console.log(t),d.a.get(t).then((function(t){var a=t.data.items;a?e.setState({items:a}):e.setState({bookFound:!1})})).catch((function(t){console.log(t),e.setState({hasError:!0})}))}},{key:"componentDidMount",value:function(){this.handleAPI()}},{key:"handleChange",value:function(e){this.setState({title:e.target.value}),e.preventDefault()}},{key:"handleSubmit",value:function(e){this.handleAPI(),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Eg. Harry Potter"}),o.a.createElement("button",{type:"submit"},"Search")),this.state.hasError&&o.a.createElement("h2",null,"Request Failed"),this.state.bookFound?o.a.createElement("div",{className:"list"},o.a.createElement("ul",null,this.state.items.map((function(e){var t,a=e.volumeInfo.imageLinks,n=e.volumeInfo.previewLink;return t="undefined"==typeof a?o.a.createElement("img",{src:"",alt:e.volumeInfo.title}):o.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title}),o.a.createElement("li",{className:"bookList",key:e.id},o.a.createElement("div",{className:"bookImage"},t),o.a.createElement("div",{className:"bookDetail"},o.a.createElement("div",{className:"bookTitle"},o.a.createElement("a",{href:n,target:"_blank"},e.volumeInfo.title)),o.a.createElement("div",{className:"bookCate"},o.a.createElement("ul",null,o.a.createElement("li",null,e.volumeInfo.categories))),o.a.createElement("div",{className:"bookDes"},e.volumeInfo.description)))})))):"No Books Found for"+this.state.title)}}]),a}(n.Component),b=(a(41),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"BookStore"),o.a.createElement(v,{title:""}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bde92871.chunk.js.map