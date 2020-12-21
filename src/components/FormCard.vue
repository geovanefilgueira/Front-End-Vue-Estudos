<template>
    <div class="box-form">
        <div class="content-box-form">
            <h2 class="animate__animated animate__bounceIn">Pronto para planejar seu sossego?</h2>
            <p>Agende uma consultoria sem compromisso pelo formulario abaixo!</p>
            <form>
                <div class="content-input-form">
                     <label>Nome:</label>
                     <input type="text">
                </div>
                <div class="content-input-form">
                     <label>E-mail:</label>
                     <input type="text">
                </div>
                <div class="content-input-form">
                     <label>Estado Civil:</label>
                     <input type="text">
                </div>
                <div class="content-input-form">
                     <label>Profissão:</label>
                     <input type="text">
                </div>
                <div class="content-input-form">
                     <label>Telefone/Whatsapp:</label>
                     <input type="text">
                </div>
                <div class="content-input-form">
                     <label>Renda Mensal:</label>
                     <input type="text">
                </div>
                <div class="content-btn-submit">
                    <input type="submit">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        /*saveData(){
        axios.post('',{
        }).th
        } */
    }
}
</script>

<style scoped>
    .box-form{
        width: 40%;
        height: 100vh;
        padding: 10px 0;
        background: #323469;
        position: relative;
        top:40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content-box-form{
        width: 80%;
        min-height: 80vh;
    }
    h2{
        color: #FF9B23;
        font-size: 2em;
    }
    p{
        color: #fff;
        font-size: 1.4em;
    }
    .content-input-form{
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .content-btn-submit{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 800px){
        .box-form{
            width: 100%;
            top:10px;
            padding: 20px 0;
            margin: 10px 0;
            border: 3px solid #323469;
           
        }
    }
    .animate__animated.animate__bounceIn {
    --animate-duration: 15s;
    }
</style>