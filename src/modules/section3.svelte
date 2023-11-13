<script>
    export let toggle 

    let filterToggle = false
</script>

<section class="sec3">
    <div class="container">
        <div class="filter">
            <button on:click={() => filterToggle = !filterToggle} class="filter-btn"> <img src="./assets/filter-btn.svg" alt="filter-btn-icon"> FILTER</button>
            <div class={filterToggle ? "dropdown-true" : "dropdown-false"}>
                <div>Completed</div>
                <div>Canceled</div>
                <div>Declened</div>
                <div>All</div>
            </div>
        </div>
        <div class="up">
            <div>
                <h2>Let us help you 
                    to <span>run your business</span>
                </h2>
                <p>Everything you need to know about using
                GlowApp to manage your business</p>
                <a href="/help-center"><h3>visit help center  <img src="./assets/arrow-rigth.svg" alt="arrow-left"></h3></a>
            </div>
            <img class="macbook" src="./img/macbook-helper.svg" alt="macbook-help">
            <img class="macbook-none" src="./img/macbook-helper.svg" alt="macbook-help">
        </div>  
    
        <div class="down">
            <h2>What <span>we offer</span> </h2>
            <div class="down-main">
                <div class="card">
                    <img src="./assets/sec3-1.svg" alt="1">
                    <p>Schedule and manage bookings on the move. Simple and easy</p>
                </div>
                <div class="card">
                    <img src="./assets/sec3-2.svg" alt="2">
                    <p>Cut back admin and focus on what you do best. We will take care of the rest</p>
                </div>
                <div class="card">
                    <img src="./assets/sec3-3.svg" alt="3">
                    <p>Get bookings through platform or any other social media channel</p>
                </div>
                <div class={toggle ? 'd-n' : 'card'}>
                    <img src="./assets/sec3-4.svg" alt="4">
                    <p>Build online presence and grow your customer base</p>
                </div>
                <div class={toggle ? 'd-n' : 'card'}>
                    <img src="./assets/sec3-5.svg" alt="5">
                    <p>Get products deals and join the sponsored trainings for free</p>
                </div>
                <div class={toggle ? 'd-n' : 'card'}>
                    <img src="./assets/sec3-6.svg" alt="6">
                    <p>Book a treatment room on flexible terms and bring your clients there</p>
                </div>
            </div>
        </div>  
    </div>
</section>

<style>
    .d-n{
        display: none;
    }

    .sec3{
        background-color: #F1ECF9;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .filter{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 60px; 
        position: relative;   
    }
    .filter-btn{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 20px;
        background: var(--violet-400);
        color: #fefefe;
        border-radius: 10px;
        font-family: 'Nunito Sans';
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.12em;
    }
    .dropdown-false{
        display: none;
    }
    .dropdown-true{
        width: 170px;
        height: auto;
        background-color: #fefefe;
        display: block;
        position: absolute;
        right: 0;
        top: 35px;
        z-index: 6;
        border-radius: 5px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    }
    .dropdown-true > div{
        cursor: pointer;
        color: #848286;
        padding: 10px 20px;
        font-size: 16px;
    }
    .dropdown-true > div:hover{
        background-color: var(--violet-100);
        color: #fefefe;
    }
    .dropdown-true > div:nth-child(1):hover {
        border-radius: 5px 5px 0px 0px ;
    }

    .dropdown-true > div:nth-child(4):hover {
        border-radius: 0px 0px 5px 5px ;
    }
    .up{
        width: 100%;
        padding: 50px;
        background-color: #fff;
        position: relative;
        border-radius: 20px;
    }
    .up > div{
        width: 40%;
        min-width: 360px;
    }

    .up > div > p {
        color: #848286;
    }

    h2{
        font-size:32px ;
        font-weight: 600;
        white-space: pre-line; 
    }
    h2 > span{
        color: #582E90;
        font-size:32px ;
    }

    p{
        margin-top: 16px;
        font-family: 'Nunito Sans';
        white-space: pre-line;
    }
    h3{
        cursor: pointer;
        margin-top: 32px;
        font-family: 'Nunito Sans';
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        align-items: center;
    }

    .macbook{
        width: 630px;
        position: absolute;
        right: -50px;
        top: -40px;
    }

    .macbook-none{
        display: none;
    }

    .down{
        margin-top: 100px;
        margin-bottom: 30px;
    }

    .down > h2 {
        margin: 30px 0px;
    }
    
    .down-main{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .down-main > .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 382px;
        border-radius: 12px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        background-color: #fefefe;
    }
    .down-main > .card > p{
        text-align: center;
        font-family: 'Nunito Sans';
    }
    .down-main > .card > img{
        width: 50px;
    }

    @media (max-width: 1275px) {
        .down-main > .card{
            width: calc(50% - 20px) ;
        }
    }
    @media (max-width: 1024px) {
        .macbook{
            width: 444px;
            top: 15px;
            right: -35px;
        }
    }
    @media (max-width: 900px) {
        .up > div{
            min-width: 340px;
        }
        h2{
            font-size:18px ;
        }
        h2 > span{

            font-size:18px ;
        }
        p{
            font-size: 14px;
        }
        .macbook{
            width: 333px;
            top: 25px;
            right: -25px;
        }
    }
    @media (max-width: 650px) {
        .macbook{
            display: none;
        }
        .macbook-none{
            display: block;
            margin-top: 20px;
            width: 100%;
        }
        .up{
            padding: 20px;
        }
        .up > div{
            min-width: 280px;
        }
    }

    @media (max-width: 600px) {
        .down-main > .card{
            width: 100% ;
        }

    }
</style>