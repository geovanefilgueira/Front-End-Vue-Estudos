<template>
  <div>
    <header>
      <div class="bkg-header"><!--Backegrond com imagem e filtro laranja-->
        <div class="filtro"></div>
      </div>

      <div class="container-header"><!--Div flutuante-->
        <Slogan />
        <FormContact />
      </div>

      <BolgBoxInfo />
    </header>

    <section id="section-posts-blog">
      <div v-if="!loadSucess">
        <img src="https://media.tenor.com/images/47f855960d5dc83774d7b3b428964c93/tenor.gif" alt="Carregando os posts do blog, aguarde um instante!">
      </div>
      <div v-else class="contaiiner-posts-bolg">
        <div v-for="(postsiten, index) in postsblog" :key="index" class="card-loop">
          <PostsBlogCard :postsitenprop="postsiten" />
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>//Importação de compotnentes
import Slogan from "../SloganCard";
import FormContact from "../FormCard";
import BolgBoxInfo from "../InfoBlog";
import PostsBlogCard from "../PostBlogCard.vue";
import Footer from "../Footer"
//Importação de Libs
import axios from "axios";

export default {
  components: {
    Slogan,
    FormContact,
    BolgBoxInfo,
    PostsBlogCard,
    Footer
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.postsblog = res.data;
      this.loadSucess=true
    });
  },
  data() {
    return {
      postsblog: [],
      loadSucess:false
    };
  }
};
</script>


<style scoped>
/* CSS PURO, MAS PODERIA USAR ALGUM FRAMEWORK*/
header {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 170vh;
}
.bkg-header {
  width: 100%;
  height: 90vh;
  background-image: url(https://4.bp.blogspot.com/-JrAba-NuWSw/WFkJNBd9PtI/AAAAAAAAYHw/2lNNf2Z8Mk0n5BX8XFhh0C6t7WZK7dGDQCLcB/s1600/Gifs%2Banimados%2BPraia%2B2.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.filtro {
  width: 100%;
  height: 90vh;
  background-image: url("../../assets/bkg-filtro.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container-header {
  position: absolute;
  top: 10vh;
  left: 10%;
  min-height: 140vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
#section-posts-blog {
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.contaiiner-posts-bolg {
  width: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.card-loop{
  width: 40%;
}
@media (max-width: 800px) {
  header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-header {
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    left: 0;
    top: 10px;
  }
  .bkg-header {
    position: absolute;
    top: 0px;
  }
  .contaiiner-posts-bolg {
    flex-direction: column;
  }
  .card-loop{
    width: 100%;
  }
}
</style>