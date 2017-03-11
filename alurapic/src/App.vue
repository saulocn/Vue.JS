
<template>
    <div class="corpo">
    <!--nav>
      <ul>       
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cadastro">Cadastro</router-link></li>
          <li v-for="route in routes">
              <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav-->
        <meu-menu :rotas="routes" />
        <transition name="pagina">
        <router-view></router-view>
        </transition>       
    </div>
</template>


<script>
import {routes} from './routes';
import Menu from './components/shared/menu/Menu.vue';
export default {
    components: {
        'meu-menu' : Menu
    },
    
    data(){
        return {
            routes
        }
    }    

}

</script>


<style>
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }

    .pagina-enter, .pagina-leave-active {
    opacity: 0
    }

    .pagina-enter-active, .pagina-leave-active {
        transition: opacity .4s
    }


</style>