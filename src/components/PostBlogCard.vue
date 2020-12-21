<template>
  <div class="box-card-post">
    <div class="box-post-img">
      <div class="filtro-post"></div>
    </div>
    <div class="content-post">
      <div class="title-post">
        <h4> {{converte(this.postsitenprop.title)}}</h4>
     
      </div>
      <div class="sub-title-post">
        <p>{{converte(this.postsitenprop.body)}}</p>
      </div>
    </div>
    <div class="box-rodape-post">
      <router-link :to="'/details/'+postsitenparam" class="btn-continuar-post">
        Continuar
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      postsitenprop:Object
    },
    data(){
      return{
        postsitenparam:this.postsitenprop.id
      }
    },
    methods:{
        //como a api me retorna tudo em minusculo, criei essa função para converter a primeira letra
        converte(str){
            const capitalized = str[0].toUpperCase() + str.substr(1);
            return capitalized
        }
    }
};
</script>

<style scoped>
.box-card-post {
  width: 100%;
  min-height: 90vh;
  margin: 10vh 0;
  background: #fff;
  border: 3px solid #323469;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.box-post-img {
  background-image: url(https://i.picsum.photos/id/590/650/650.jpg?hmac=7zzdFTzTwEo3WjmJyeljj6P8J5ji2dvoYp98MSq3Zs0);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 40vh;
}
.filtro-post{
  width: 100%;
  height: 40vh;
  background-image: url("../assets/bkg-filtro.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.title-post {
  color: #323469;
  font-size: 1.5em;
  min-height: 15vh;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.sub-title-post {
  min-height: 35vh;
  padding: 10px 0;
  font-size: 1.2em;
}
.box-rodape-post {
  width: 100%;
  height: 10vh;
  background: #323469;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-post {
  width: 90%;
  min-height: 40vh;
}
.btn-continuar-post {
  padding: 8px 10px;
  border: 0;
  color: #fff;
  border-radius: 20px;
  font-size: 1.2em;
  font-weight: 700;
  background: #ff9b23;
  text-decoration: none;
}
.btn-continuar-post:hover{
  background:#fcad4e;
  color: #000;
}
 @media (max-width: 800px){
   .box-card-post{
     width: 100%;
   }
 }
</style>