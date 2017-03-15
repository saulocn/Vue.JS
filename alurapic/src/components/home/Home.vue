
<template>
    <div>
        <h1  class="centralizado">{{titulo}}</h1>
        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título" />
        {{filtro}}
        <p v-show="mensagem" class="centralizado">{{mensagem}}</p>
        <!--img v-bind:src="foto.url" v-bind:alt="foto.titulo" /-->
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
                <meu-painel  :titulo="foto.titulo">
                    <!--img class="imagem-rsponsiva" :src="foto.url" :alt="foto.titulo" /-->
                    <imagem-responsiva v-meu-transform:scale.animate.reverse="1.2"  :url="foto.url" :titulo="foto.titulo" />
                    <router-link :to="{name: 'altera', params : {id:foto._id}}" >
                    <meu-botao 
                        tipo="button" 
                        rotulo="Alterar" 
                        :confirmacao=false
                        estilo=""  />
                    </router-link>
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
import transform from '../../directives/Transform';
import FotoService from '../../domain/Foto/FotoService';

export default {
    components : {
        'meu-painel' : Painel,
        'imagem-responsiva' : ImagemResponsiva,
        'meu-botao' : Botao,
    },
    
    directives: {
        'meu-transform': transform
    },
    data(){
        return {
            titulo : "Alurapic",
            fotos:[],
            filtro: '',
            mensagem:''
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
        });
        this.$http.get("v1/fotos/")
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));
            
        this.resource = this.$resource("v1/fotos{/id}");
        
        this.resource.query()
        .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));

            */
            this.service = new FotoService(this.$resource);
            this.service.lista()
                .then(fotos => this.fotos = fotos, 
                err => this.mensagem = err.message);


    },

    methods : {
        remove(foto) {
                /*this.$http.delete(`v1/fotos/${foto._id}`)
                .then(()=>{
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = "Foto removida com sucesso!";

                }, err=>{
                    console.log(err);
                    this.mensagem="Não foi possível remover a foto";

                });
                
                this.resource.delete({id:foto._id})
                */
                this.service.apaga(foto._id)
                .then(()=>{
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = "Foto removida com sucesso!";

                }, err=>{
                    this.mensagem=err.message;

                });
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