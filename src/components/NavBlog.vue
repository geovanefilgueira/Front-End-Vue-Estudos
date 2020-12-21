<template>
    <nav>
        <h4>Bem Estar</h4>
        <router-link to="/" class="btn-back">Voltar</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav{
    width: 100%;
    height: 10vh;
    background: #323469;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.btn-back{
    padding: 10px 50px;
    background:#FF9B23;
    border-radius: 20px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
}
.btn-back:hover{
    background:#f8b767;
    color: #000;
}
h4{ color: #FFF;}
</style>