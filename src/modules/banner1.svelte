<div class="banner-back">
    <hr noshade color="#fefefe" class="hr-left">
    <p> 
        <img src="./img/logo-bold.svg" alt="logo">
        offers full solution to grow your mobile beauty and wellness business in one place 
    </p>
    <hr noshade color="#fefefe" class="hr-right">
</div>

<style>
    .banner-back{
        width: 100%;
        background-color: #AC8ADA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    p{
        width: 715px;
        height: 159px;
        max-height: 182px; 
        margin: 50px 75px;
        font-family: 'Nunito Sans';
        font-size: 40px;
        font-weight: 600;
        color: #FEFEFE;
    }
    img{
        position: relative;
        top: 10px;
    }
    .hr-left, .hr-right{
        max-width: 280px;
        width: 100%;
    }
    @media (max-width: 1300px) {
        .hr-left, .hr-right {
            width: 170px;
        }
    }
    @media (max-width: 1024px) {
        .hr-left, .hr-right {
            width: 123px;
        }
    }
    @media (max-width: 950px){
        p{
            margin: 50px auto;
            width: 60%;
            height: 80px;
            font-size: 26px;
        }
        p > img{
            width: 100px;
            top: 4px;

        } 
        hr{
            position: absolute;
        }
        .hr-right{
            right: 0;
        }

    }
    @media (max-width: 768px) {
        .hr-left {
            top: 35px;
        }
        .hr-right {
            bottom: 35px;
        }
        p{
            margin: 50px auto;
            font-size: 16px;
            height: 60px;
        }
        p > img{
            width: 70px;
            top: 3px;
        }
    }
    @media (max-width: 450px) {
        p{
            width: 70%;
        }
    }
    @media (max-width: 360px){
        p{
            width: 90%;
        }
    }
</style>