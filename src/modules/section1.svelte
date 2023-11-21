<script>
    export let toggle 
</script>

<section>
    <div class="sec-one">
        <div class="container ">
            <div class="sec1-up">
                <h1>List your treatment room</h1>
                <p>Join the leading platform <b>FOR FREE</b></p>
                <a href="https://businessglowapp.co.uk/auth-room"><button>SIGN UP</button></a>
            </div>
            <div class="sec-choose">
                <h4>Why Choose Us</h4>
                <div class="choose-container">
                    <div class="choose-row">
                        <div class="choose-box">
                            <img src="./assets/check-mark.png" alt="check-mark"/>
                            <div>
                                <h6>Easy online booking</h6>
                                <p>User friendly booking system</p>
                            </div>
                        </div>
                        <div class="choose-box">
                            <img src="./assets/check-mark.png" alt="check-mark"/>
                            <div>
                                <h6>Affordable & Flexible</h6>
                                <p>Book just what you need</p>
                            </div>
                        </div>
                    </div>
                    <div class="choose-row">
                        <div class="choose-box">
                            <img src="./assets/check-mark.png" alt="check-mark"/>
                            <div>
                                <h6>No commitment</h6>
                                <p>No lengthy contracts</p>
                            </div>
                        </div>
                        <div class="choose-box">
                            <img src="./assets/check-mark.png" alt="check-mark"/>
                            <div>
                                <h6>No hidden fees</h6>
                                <p>All bills included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
        {#if toggle}
            <img class="sec-one-img " src={'./img/room-sec1.svg'} alt="room-sec1">
        {:else}
            <img class="sec-one-img" src={'./img/sec1-prof-img2.png'} alt="prof-sec1">
        {/if}
    </div>      


    <div class="container sec1-down">
        {#if toggle}
            <h2>List your treatment room, therapy room or hairdresser’s chair</h2>
        {:else}
            <h2 class="sec1-down-header">Get <span>organized</span> and <span>grow</span>
            your mobile beauty business</h2>
        {/if}

        <div class="sec1-circles">
            <div class="circle-text">
                <div class="sec1-circle">
                    <img src="./assets/circle1.svg" alt="circle1">
                </div>
                <p class="color-black"> 
                    {toggle ? 'List your treatment room' : 'services'}
                </p>
            </div>
            <div class={toggle ? 'd-n' : 'circle-text'}>
                <div class="sec1-circle">
                    <img src="./assets/circle2.svg" alt="circle2">  
                </div>
                <p class="color-black">Set your{toggle ? ' working hours and prices' : ' prices and deals'}
                </p>
            </div>
            <div class="circle-text">
                <div class="sec1-circle">
                    <img src={toggle ? "./assets/room-circle2.svg" : "./assets/circle3.svg"} alt="circle3">
                </div>
                <p class="color-black"> 
                    Set your working hours and prices
                </p>
            </div>
            <div class={toggle ? 'd-n' : 'circle-text'}>
                <div class="sec1-circle">
                    <img src="./assets/circle4.svg" alt="circle4">
                </div>
                <p class="color-black">Set your 
                    working hours                     
                </p>
            </div>
            <div class="circle-text">
                <div class="sec1-circle">
                    <img src={toggle ? "./assets/room-circle3.svg" : "./assets/circle5.svg"} alt="circle5">
                </div>
                <p class="color-black">Upload pictures
                </p>
            </div>
            <div class="circle-text">
                <div class="sec1-circle">
                    <img src="./assets/circle6.svg" alt="circle6">
                </div>
                <p class="color-black">
                    Get bookings and grow your business
                </p>
            </div>

        </div>
    </div>
</section>

<style>
    *{
        color: #fefefe;
    }

    .sec-one{
        background: linear-gradient(102.93deg, rgba(33, 24, 24, 0.5) 17.79%, rgba(33, 24, 24, 0.340632) 44%, rgba(33, 24, 24, 0.198133) 62.12%, rgba(33, 24, 24, 0.135846) 77.66%, rgba(33, 24, 24, 0) 100%);
        position: relative;
        height: 600px;
    }
    .container {
        height: 100%;
    }
    .text-pos-abs{
        position: absolute;
        top: 30%;
    }
    .sec-one-img{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
    
    h1{
        font-size: 40px;
    }

    p{
        font-family: Nunito Sans;
        font-size: 24px;
        font-weight: 30px;
        margin: 10px 0px 30px 0px;

    }
    b{
        font-weight: 700;
        font-size: 32px;
    }
    button{
        background-color: var(--violet-400);
        padding: 12px 36px;
        border-radius: 12px;
        cursor: pointer;
        border: none;
    }
    .sec1-up{
        width: 550px;
        padding-top: 15%;
    }
    .sec1-up h1{
        margin-bottom: 20px;
    }

    .sec-choose {
        padding: 20px 8px 8px 8px;
        background-color: white;
        position: absolute;
        width: 500px;
        top: 120px;
        right: min(50px, 3vw);
    }

    .sec-choose h4 {
        color: #636363;
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 20px;
        padding-left: 8px;
    }
    .choose-container {
        display: flex;
        flex-direction: column;
    }
    .choose-row {
        display: flex;
        flex-direction: row;

    }
    .choose-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 8px;
        padding: 14px 12px;
        width: 50%;
        background-color: #ebebeb;
        border-radius: 4px;
    }
    .choose-box div {
        flex: 1;
    }
    .choose-box h6 {
        color: var(--black);
        font-weight: bold;
        font-size: 20px;
        line-height: 1.4;
        margin-bottom: 4px;
    }
    .choose-box p {
        font-size: 20px;
        padding: 0px;
        margin: 0;
        color: var(--black);
        line-height: 1.6;
    }
    .choose-box img {
        width: 20px;
        height: 20px;
        margin-right: 14px;
    }
    .sec1-down{
        padding: 60px 0;
    }
    .sec1-down-header, h2{
        color: var(--black);
        font-size: 32px;
        font-weight: 600;
    }
    .sec1-down-header > span{
        color: var(--violet-400);
        font-size: inherit;
        font-weight: inherit;
    }
    .sec1-circles{
        margin: 50px 0px 30px 0px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .d-n{
        display: none;
    }
    .color-black{
        color: var(--black);
        width: 180px;
        text-align: center;
        font-family: 'Nunito Sans';
        font-size: 20px;
        font-weight: 600;
    }
    .sec1-circle{
        width: 110px;
        height: 110px;
        background-color: aqua;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sec1-circle img { 
        width: 65%;
    }
    .sec1-circles .circle-text:nth-child(1) > div{
        background-color: var(--violet-100);
    } 
    .sec1-circles .circle-text:nth-child(2) > div{
        background-color: var(--violet-200);
    }
    .sec1-circles .circle-text:nth-child(3) > div{
        background-color: var(--violet-300);
    }
    .sec1-circles .circle-text:nth-child(4) > div{
        background-color: var(--violet-400);
    }
    .sec1-circles .circle-text:nth-child(5) > div{
        background-color: var(--violet-500);
    }
    .sec1-circles .circle-text:nth-child(6) > div {
        background-color: var(--violet-600);
    }
    .circle-text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* MOBILE_ADAPTIVE */
    @media (max-width: 1100px) {
        .sec1-up {
            width: 330px;
        }
        .sec-one-img{
            background-position: left;
        } 
        .sec1-down-header{
            margin: 0px 50px;
            font-size: 23px;
        }
    }
    @media (max-width: 900px){
        .sec-one {
            height: auto;
            padding-bottom: 30px;
        }
        .sec1-up {
            width: 550px;
            padding-top: 100px;
        }
        .sec-choose { 
            position: relative;
            width: 100%;
            max-width: 650px;
            top: 0;
            right: 0;
            margin: 40px auto 0px auto;
        }
        .text-pos-abs{
            top: 10%;
        }
    }
    @media (max-width: 740px) {
        .sec-choose h4{
            font-size: 24px;
            margin-bottom: 8px;
        }
        .choose-box {
            margin: 4px;
        }
        .choose-box h6 {
            font-size: 16px;
        }
        .choose-box p {
            font-size: 16px;
            font-size: 16px;
        }
        h1{
            font-size: 28px;
        }
        p{
            font-size: 22px;
        }
        b{
            font-size: 22px;
        }
        .text-pos-abs{
            top: 10%;
        }
        .sec1-up{
            width: auto;   
        }

        .sec1-down-header{
            margin: 0px 20px;
            font-size: 20px;
        }

    }
    @media (max-width: 600px) {
        .sec1-down-header{
            white-space: pre-line;
        }
    }
    @media (max-width: 550px) {
        .sec-one-img{
          object-position: left;
        } 
        h1  {
            white-space: pre-line;
        }
        .color-black{
            font-size: 14px;
        }

    } 

</style>
