webpackJsonp([0],{"+S4J":function(t,e){},"9ZFE":function(t,e){},HVfm:function(t,e){},ZwYb:function(t,e){},hQNg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("hijg"),s={data:function(){return{articleDetail:{title:"哈哈哈哈哈哈哈",visit_count:"2",comment_count:"2",like_count:"1",content:"hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"},articleDetailResult:{comment:[]}}},created:function(){var t=this;this.axios.get(a.a+"/article/"+this.$route.params.aid).then(function(e){t.articleDetailResult=e.data[0]})}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.articleDetailResult.title))]),t._v(" "),n("div",{staticClass:"counts"},[n("span",{staticClass:"views-count"},[t._v("阅读"+t._s(t.articleDetailResult.visit_count))]),t._v(" "),n("span",{staticClass:"comments-count"},[t._v("评论"+t._s(t.articleDetailResult.comment.length))]),t._v(" "),n("span",{staticClass:"likes-count"},[t._v("喜欢"+t._s(t.articleDetailResult.like_count))])]),t._v(" "),n("div",{staticClass:"markdown-content",domProps:{innerHTML:t._s(t.articleDetailResult.content)}})])},staticRenderFns:[]};var c={name:"comment",data:function(){return{commentList:[{user_id:{avatar:"",nickname:"ykp"},created:"2018.2.2",content:"asdsdaas"},{user_id:{avatar:"",nickname:"ykp"},created:"2018.2.2",content:"asdsdaas"},{user_id:{avatar:"",nickname:"ykp"},created:"2018.2.2",content:"asdsdaas"}],commentResult:[]}},created:function(){var t=this;this.axios.get(a.a+"/article/"+this.$route.params.aid).then(function(e){t.commentResult=e.data[0].comment})}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-container"},[n("div",{staticClass:"comment-head"},[n("span",[t._v(t._s(t.commentResult.length||0)+"条评论")]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.goComment(e)}}},[t._v("添加新评论")])]),t._v(" "),n("div",{attrs:{id:"comment_list"}},t._l(t.commentResult,function(e,a){return n("div",{key:a,staticClass:"comment-item"},[n("div",{staticClass:"content"},[n("div",{staticClass:"meta-top"},[n("a",{staticClass:"avatar"},[n("img",{attrs:{src:e.avatar,alt:"avatar"}})]),t._v(" "),n("span",{staticClass:"author-name"},[t._v(t._s(e.nickname))]),t._v(" "),n("span",{staticClass:"reply-time"},[t._v(t._s(e.created_time))])]),t._v(" "),n("p",{staticClass:"comment-content"},[t._v(t._s(e.content))]),t._v(" "),t._m(0,!0)])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment-footer text-right"},[e("a",{staticClass:"reply",attrs:{href:"javascript:;"}},[this._v("回复")])])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prenext"},[e("div",{staticClass:"text-left prev"},[e("router-link",{staticClass:"link-title",attrs:{to:"/article/0"}},[e("span",[this._v("上一篇:xxx")])])],1),this._v(" "),e("div",{staticClass:"text-right next"},[e("router-link",{staticClass:"link-title",attrs:{to:"/article/1"}},[e("span",[this._v("下一篇:xxx")])])],1)])},staticRenderFns:[]};var l={data:function(){return{isShowTop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>200?this.isShowTop=!0:this.isShowTop=!1},gotop:function(){window.requestAnimationFrame(function t(){var e=document.body.scrollTop||document.documentElement.scrollTop;e>0&&(window.scrollTo(0,e-50),window.requestAnimationFrame(t))})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTop,expression:"isShowTop"}],staticClass:"gotop",on:{click:function(e){return e.preventDefault(),t.gotop(e)}}},[n("span",[t._v("回到顶部")])])},staticRenderFns:[]};var d={name:"Article",data:function(){return{info:[]}},components:{ArticleContent:n("vSla")(s,i,!1,function(t){n("ZwYb")},"data-v-fe9f4a9c",null).exports,Comment:n("vSla")(c,o,!1,function(t){n("+S4J")},"data-v-40b9f6bc",null).exports,Prenext:n("vSla")({},r,!1,function(t){n("9ZFE")},"data-v-1c29ec99",null).exports,Scrolltop:n("vSla")(l,u,!1,function(t){n("qRDP")},"data-v-938eccca",null).exports},created:function(){window.scrollTo(0,0)}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-box"},[e("article-content"),this._v(" "),e("prenext"),this._v(" "),e("comment",{attrs:{comment:this.info.comment}}),this._v(" "),e("scrolltop")],1)},staticRenderFns:[]};var m=n("vSla")(d,v,!1,function(t){n("HVfm")},"data-v-5430da8a",null);e.default=m.exports},qRDP:function(t,e){}});
//# sourceMappingURL=0.4e38619b46e885cd7b6b.js.map