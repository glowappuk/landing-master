<script>

</script>


<section class="sec2">
    <div class="sec2-cont container">
        <h2 class="sec2-header">Our Platform</h2>
        <div class="imgs">
            <img class="img1" src="./img/iphone.svg" alt="iphone">
            <img class="img2" src="./img/tablet.svg" alt="tablet"> 
            <img class="img3" src="./img/macbook.svg" alt="macbook">
            <img class="img3-mini" src="./img/macbook-mini.svg" alt="macbook-mini">
        </div>
    </div>
</section>

<style>

    .sec2{
        width: 100%;
        height: 800px;
        background-color: #F1ECF9;
    }
    .sec2-cont{
        padding: 60px 0;
    }
    .sec2-header{
        font-weight: 600;
        font-size: 32px;
    }
    .imgs{
        margin-top: 120px;
    }
    .img1{
        position: relative;
        bottom: 100px;
    }
    .img2{
        position: relative;
        right: 20px;
        z-index: 3;
    }
    .img3{
        position: relative;
        bottom: 605px;
        left: 650px;
    }
    .img3-mini{
        display: none;
    }

    @media (max-width: 1400px) {
        .img2{
            right: 50px;
        }
        .img3{
            position: relative;
            bottom: 600px;
            left: 450px;
        }
    }

    @media (max-width: 1150px) {
        .img2{
            right: 70px;
        }
        .img3{
            position: relative;
            bottom: 600px;
            left: 370px;
        }
    }

    @media (max-width: 1060px){
        .sec2{
            min-height: 1000px;
        }
        .imgs{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .img1{
            width: 148px;
        }
        .img2{
            bottom: 150px;
            left: 0px;
            width: 430px;
        }
        .img3{
            display: none;
        }
        .img3-mini{
            display: block;
            position: relative;
            top: -200px;
        }
    }
    @media (max-width: 1024px) {
        h2{
            margin-left: 50px;
        }
    }
    @media (max-width: 740px) {
        h2{
            margin-left: 20px;
            font-size: 20px;
        }
    }

    @media (max-width: 600px){
        .sec2-cont{
            padding: 30px 0;
        }
        .sec2{
            height: 600px;
            min-height: 600px;
        }

        .img1{
            width: 96px;
        }
        .img2{
            width: 237px;
            bottom: 130px;
        }
        .img3-mini{
            width: 232px;
            display: block;
            top: -160px;
        }
    }   
    
    
</style>