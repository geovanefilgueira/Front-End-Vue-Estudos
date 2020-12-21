<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app{
  width: 100%;
  height: 100vh;
}
*{
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
input[type=text]{
        height: 5vh;
        min-height: 15px;
        background: #7A7B9E;
        border: 0;
        margin: 3px 0;
    }
input[type=submit]{
        padding: 10px 50px;
        background:#FF9B23;
        border-radius: 20px;
        border: 0;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
    }
input[type=submit]:hover{
        background:#ffb457;
        color: #000;
    }
 @media (max-width: 800px){
.cell-w100{
    width: 100%;
    background: darkgoldenrod;
  }
  input[type=submit]{
            width: 100%;
            height: 7vh;
            background:#FF9B23;
            border-radius: 20px;
            border: 0;
            color: #fff;
            font-weight: 700;
    }
 }
</style>