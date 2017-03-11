import Vue from 'vue';

Vue.directive('meuTransform',  {
    bind(el, binding, vnode) {
        //console.log('Diretiva associada');
        //console.log(el);
        let current = 0;
        el.addEventListener('dblclick', function(){
            //current+=90;
            let incremento = 0;
            let animate = false;
            if(binding.value){
                incremento = binding.value.incremento || 90;
                animate = binding.value.animate;
            }
            current+=incremento;
            el.style.transform=`rotate(${current}deg)`
            if(animate) el.style.transition='transform 0.5s';
        });
    }
});