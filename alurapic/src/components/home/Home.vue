
<template>
    <div>
        <h1  class="centralizado">{{titulo}}</h1>
        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título" />
        {{filtro}}
        <!--img v-bind:src="foto.url" v-bind:alt="foto.titulo" /-->
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
                <meu-painel  :titulo="foto.titulo">
                    <!--img class="imagem-rsponsiva" :src="foto.url" :alt="foto.titulo" /-->
                    <imagem-responsiva v-meu-transform:scale.animate.reverse="1.2"  :url="foto.url" :titulo="foto.titulo" />
                    <meu-botao 
                        tipo="button" 
                        rotulo="Remover" 
                        :confirmacao=true
                        estilo="perigo" 
                        @botaoAtivado="remove(foto)" />
                </meu-painel>
            </li>
        </ul>
        
        
    </div>
</template>


<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
    components : {
        'meu-painel' : Painel,
        'imagem-responsiva' : ImagemResponsiva,
        'meu-botao' : Botao,
    },
    data(){
        return {
            titulo : "Alurapic",
            fotos:[],
            filtro: '',
        }
    },

    computed : {
        fotosComFiltro(){
            if(this.filtro){
                /* filtrar */
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos;
            }
        }
    },

    created(){
        //alert("Componente criado!");
        //let promise = this.$http.get("http://localhost:3000/v1/fotos/");
        //promise.then(res => console.log(res));
        /*promise.then(res =>  {
            res.json().then(fotos=> this.fotos = fotos);
        });*/
        this.$http.get("http://localhost:3000/v1/fotos/")
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));

    },

    methods : {
        remove(foto) {
                alert("Removendo a foto..." + foto.titulo);
        }

    },



}

</script>


<style>

    .centralizado {
        text-align: center;
    }

    .lista-fotos {
        list-style: none;
    }

    .lista-fotos .lista-fotos-item {
        display: inline-block;
    }

    .filtro {
        display: block;
        width: 100%;
    }
</style>