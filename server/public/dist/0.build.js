webpackJsonp([0],{57:function(t,o,a){a(62);var e=a(1)(a(58),a(61),"data-v-55201abe",null);t.exports=e.exports},58:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a(20),r=a.n(e),i=a(19),s=a.n(i),n=a(59),l=a(18);o.default={components:{"imagem-responsiva":r.a,"meu-botao":s.a},created:function(){var t=this;this.service=new l.a(this.$resource),this.id&&this.service.busca(this.id).then(function(o){return t.foto=o})},data:function(){return{foto:new n.a,id:this.$route.params.id}},methods:{grava:function(){var t=this;console.log("Enviando dados pra API"),this.$validator.validateAll().then(function(o){o&&t.service.cadastra(t.foto).then(function(){t.foto._id&&t.$router.push({name:"home"}),t.foto=new n.a},function(t){return console.log(t)})})}}}},59:function(t,o,a){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e(this,t),this.titulo=o,this.url=a,this.descricao=r};o.a=r},60:function(t,o,a){o=t.exports=a(0)(),o.push([t.i,".controle[data-v-55201abe]{font-size:1.2em;margin-bottom:20px}.controle label[data-v-55201abe]{display:block;font-weight:700}.controle label+input[data-v-55201abe],.controle textarea[data-v-55201abe]{width:100%;font-size:inherit;border-radius:5px}.centralizado[data-v-55201abe]{text-align:center}.erro[data-v-55201abe]{color:red}",""])},61:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("h1",{staticClass:"centralizado"},[t._v("Cadastro")]),t._v(" "),a("h2",{staticClass:"centralizado"},[t._v(t._s(t.foto.titulo))]),t._v(" "),t.foto._id?a("h2",{staticClass:"centralizado"},[t._v("Alterando")]):a("h2",{staticClass:"centralizado"},[t._v("Incluindo")]),t._v(" "),a("form",{on:{submit:function(o){o.preventDefault(),t.grava()}}},[a("div",{staticClass:"controle"},[a("label",{attrs:{for:"titulo"}},[t._v("TÍTULO")]),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.titulo,expression:"foto.titulo"}],attrs:{id:"titulo","data-vv-as":"Tìtulo",name:"titulo","data-vv-rules":"required|min:3|max:30",autocomplete:"off"},domProps:{value:t.foto.titulo},on:{input:function(o){o.target.composing||(t.foto.titulo=o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("titulo"),expression:"errors.has('titulo')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("titulo")))])]),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.url,expression:"foto.url"}],attrs:{id:"url","data-vv-as":"URL",name:"url","data-vv-rules":"required",autocomplete:"off"},domProps:{value:t.foto.url},on:{input:function(o){o.target.composing||(t.foto.url=o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("url"),expression:"errors.has('url')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("url")))]),t._v(" "),a("imagem-responsiva",{directives:[{name:"show",rawName:"v-show",value:t.foto.url,expression:"foto.url"}],attrs:{url:t.foto.url,titulo:t.foto.titulo}})],1),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"descricao"}},[t._v("DESCRIÇÃO")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.foto.descricao,expression:"foto.descricao",modifiers:{lazy:!0}}],attrs:{id:"descricao",autocomplete:"off"},domProps:{value:t.foto.descricao},on:{change:function(o){t.foto.descricao=o.target.value}}})]),t._v(" "),a("div",{staticClass:"centralizado"},[a("meu-botao",{attrs:{rotulo:"GRAVAR",tipo:"submit"}}),t._v(" "),a("router-link",{attrs:{to:{name:"home"}}},[a("meu-botao",{attrs:{rotulo:"VOLTAR",tipo:"button"}})],1)],1)])])},staticRenderFns:[]}},62:function(t,o,a){var e=a(60);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(2)("71d1cc72",e,!0)}});
//# sourceMappingURL=0.build.js.map