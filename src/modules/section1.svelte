<script>
    export let toggle 
</script>

<section>
    <div class="sec-one">
        <div class="container ">
            <div class="sec1-up text-pos-abs">
                <h1>Mobile beauty 
                     and wellness platform
                </h1>
                <p>Join the leading platform <b>FOR FREE</b></p>
                <a href="https://businessglowapp.co.uk/auth-room"><button>SIGN UP</button></a>
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
            <h2>How it works</h2>
        {:else}
            <h2 class="sec1-down-header">Get <span>organized</span> and <span>grow</span>
            your mobile beauty business</h2>
        {/if}

        <div class="sec1-circles">
            <div class="circle-text">
                <div class="sec1-circle">
                    <img src="./assets/circle1.svg" alt="circle1">
                </div>
                <p class="color-black">List your 
                    {toggle ? 'treatment room' : 'services'}
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
                <p class="color-black">Upload 
                    your portfolio
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
                <p class="color-black">Set your 
                    working area
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
    }

    .text-pos-abs{
        position: absolute;
        top: 30%;
    }
    .sec-one-img{
        position: relative;
        z-index: -1;
        width: 100%;    
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
        margin: 30px 0px;
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
        width: 80px;
        height: 80px;
        background-color: aqua;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
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

    @media (max-width: 1440px) {
        .sec-one-img{
          height: 600px;  
        } 
    }

    @media (max-width: 1024px) {
        .sec-one-img{
            background-position: left;
        } 
        .sec1-down-header{
            margin: 0px 50px;
            font-size: 23px;
        }
    }

    @media (max-width: 740px) {
        h1{
            font-size: 20px;
        }
        p{
            font-size: 14px;
        }
        b{
            font-size: 14px;
        }
        .sec-one-img{
            height: 393px;
        } 
        .text-pos-abs{
            top: 20%;
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
          height: 558px; 
          object-position: left;
        } 
        .text-pos-abs{      
            top: 25%;
        }
        h1  {
            white-space: pre-line;
        }

        .color-black{
            font-size: 14px;
        }

    } 

</style>
