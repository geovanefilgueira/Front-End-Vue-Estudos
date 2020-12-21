<template>
    <div class="box-slogan animate__animated animate__flip">
        <div class="content-box-slogan ">
            <label>Vida toda</label>
            <h1>BEM ESTAR</h1>
            <label>Soluções completas para viver mais e melhor</label>
            <button>Quero uma consultoria</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box-slogan{
  width: 40%;
  height: 100vh;
  border: 3px solid #323469;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1{
  color:#323469 ;
  font-size: 6em;
}
label{
  font-size: 2em;
  color: #323469;
}
.content-box-slogan{
  height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
button{
  border: 0;
  height: 10vh;
  background:#FF9B23;
  color:#fff;
  font-size: 1.3em;
  cursor: pointer;
}
button:hover{
  background: #f5af59;
  color: #000;
}
@media (max-width: 800px){
  .box-slogan{width: 100%;}
}
 @media (max-width: 1027px){
   h1{font-size: 4em;}
 }
</style>