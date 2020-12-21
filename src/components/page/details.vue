<template>
    <div class="container-details">
        <NavBlog/>
        <div v-if="!isLoadding">
            <img src="https://media.tenor.com/images/47f855960d5dc83774d7b3b428964c93/tenor.gif" alt="Carregando mais detalhes sobre o post do blog, aguarde um instante!">
        </div>
        <div v-else class="box-detais">
             <h1>{{converte(this.dataDetails.title)}}</h1>
             <label>{{converte(this.dataDetails.body)}}</label>
        </div>
       <Footer/>
    </div>
</template>

<script>
//Importação de componentes
import Footer from '../Footer'
import NavBlog from'../NavBlog'
//Importação de Libs
import axios from 'axios'

export default {
    components:{
        Footer,
        NavBlog
    },
    created: function(){
        const id = this.$route.params.postsitenparam;
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
        .then((res) =>{ 
            this.dataDetails=res.data
            this.isLoadding=true
        });
    },
    data(){
        return{
            dataDetails:Object,
            isLoadding:false
        }
    },
    methods:{
        //como a api me retorna tudo em minusculo, criei essa função para converter a primeira letra em maiusculo
        converte(str){
            const capitalized = str[0].toUpperCase() + str.substr(1);
            return capitalized
        }
    }
}
</script>

<style scoped>

.container-details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.box-detais{
    width: 80%;
    min-height: 25vh;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
label{
  padding: 10px 0;
  font-size: 1.2em;
}
</style>