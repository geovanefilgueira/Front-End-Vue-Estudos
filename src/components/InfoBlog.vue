<template>
    <div class="container-info">
        <div class="box-info">
            <div class="content-info">
                <h3>Pense nisso..</h3>
                <label>O quanto o diagnóstico de uma doença grave, internação ou cirurgia inesperada pode afetar hoje, sua vida pessoal e financeira?</label>
            </div>
        </div>
        <div class="box-info-blog">
            <h2>Blog</h2>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: 0;
        width: 43%;
        min-height: 20vh;
    }
    .box-info{
        padding: 10px 0 0 0;
        width: 55%;
        min-height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h2{
        color:#fff ;
        font-size: 2.5em;
        font-weight: 400;
    }
    h3{
        color:#FF9B23 ;
        font-size: 2em;
        font-weight: 400;
    }
    label{
        color:#323469;
        font-size: 1.2em;
        font-weight: 500;
    }
    .box-info-blog{
        width: 100%;
        height: 20vh;
        background:#323469;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    @media (max-width: 800px){
        .container-info{
            width: 100%;
        }
        .box-info{
            width: 80%;
        }
    }
    
</style>