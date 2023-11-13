<div class="banner-back">
    <hr noshade color="#fefefe" class="hr-left">
    <div class="banner-content">
        <p> 
            Our goal is to empower Salons and Spas by creating a full support infrastructure to operate and succeed
        </p>
        <div>
            <a href="https://businessglowapp.co.uk/auth-room"><button class="sign-up">SIGN UP</button></a>
            <a href="https://businessglowapp.co.uk/login"><button class="log-in">LOG IN</button></a>
        </div>
    </div>
    <hr noshade color="#fefefe" class="hr-right">
</div>

<style>
    .banner-back{
        width: 100%;
        background-color: #9E77D3;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .banner-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        height: 414px;
        width: 65%;
        max-width: 749px;
    }
    p{
        font-family: 'Nunito Sans';
        font-size: 40px;
        font-weight: 600;
        color: #FEFEFE;
    }

    button{
        cursor: pointer;
        padding: 12px 36px;
        border-radius: 12px;
        font-family: 'Nunito Sans';
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.12em;
    }
    .sign-up{
        background-color: #fefefe;
        color: #582E90;
        border: 2px solid #fefefe;
        margin-right: 15px;
    }

    .log-in{
        background-color: transparent;
        color: #fefefe;
        border: 2px solid #fefefe;
    }

    .hr-left{
        width: 20%;
        position: absolute;
        top: 60px;
        left: 0;
    }
    .hr-right{
        width: 39%;
        position: absolute;
        right: 0;
        bottom: 60px;
    }
    @media (max-width: 1024px) {
        p{
            font-size: 30px;
        }
    }
    
    @media (max-width: 768px) {
        p{
            font-size: 16px;
        }
        .hr-right{
            width: 20%;
            bottom: 20px;
        }
        .hr-left{
            top: 20px;
        }
        .banner-content{
            height: 255px;
        }   
    }
    @media (max-width: 480px) {
        .banner-content{
            width: 75%;
        }
    }
    @media (max-width: 400px) {
        .banner-content{
            width: 85%;
        }
    }
    @media (max-width: 350px) {
        button{
            padding: 8px 24px;
        }
        .banner-content{
            width: 90%;
        }
    }
</style>