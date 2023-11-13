<script>
    // import { onMount } from 'svelte'
    import { getProfHelpCards, getRoomHelpCards } from '../api'

    import { toggle } from '../stores/stores';  

    toggle.subscribe(async value => {
        $toggle = value 
        if ($toggle) {
            cards = await getRoomHelpCards()
        } else {
            cards = await getProfHelpCards()
        }
    })

    let cards = []

    // onMount(async () => {
    //     if ($toggle) {
    //         cards = await getRoomHelpCards()
    //     } else {
    //         cards = await getProfHelpCards()
    //     }
    // }, )s

</script>

<secction class="sec-one">
    <div class="container">
        <h1>Let us help you to run your business </h1>      
    </div>
    <img class="sec-one-img" src={'img/master2.jpg'} alt="help-back">
</secction>    

<section class="help-back">
    <div class="container down">
        <h2><a href="/"><img src="./assets/help-center/help-array-left.svg" alt=""></a>{$toggle ? 'Treatment room' : 'Professionals'} </h2>
        <div class="down-main">

            {#each cards as card}
            <a href={`sections/${card.id}`}>
                <div class="card">  
                    <img src={card?.icon} alt="1">
                    <h3>{card?.title}</h3>
                    <p>{card?.short_description}</p>
                </div>
            </a>
            {/each}
            {#each cards as card}
            <a href={`sections/${card.id}`}>
                <div class="card">  
                    <img src={card?.icon} alt="1">
                    <h3>{card?.title}</h3>
                    <p>{card?.short_description}</p>
                </div>
            </a>
            {/each}
           
        </div>
    </div>  
</section>
<style>
    .sec-one{
        position: relative;
        width: 100%;
        height: 300px;
        background: linear-gradient(112.7deg, rgba(0, 0, 0, 0.2) 29.45%, rgba(0, 0, 0, 0.102489) 80.95%, rgba(0, 0, 0, 0.048375) 84.73%, rgba(0, 0, 0, 0) 92.14%), linear-gradient(103.2deg, rgba(0, 0, 0, 0.2) 29.32%, rgba(0, 0, 0, 0.12) 37.29%, rgba(0, 0, 0, 0.08) 47.31%, rgba(0, 0, 0, 0.04) 53.09%, rgba(0, 0, 0, 0) 58.37%)
    }
    .sec-one-img{
        position: relative; 
        z-index: -1;
        width: 100%;    
        height: 300px;
        object-fit: cover;
    }
    h1{
        position: absolute;
        bottom: 20%;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #FEFEFE;
    } 


    .help-back{
        background-color: #F1ECF9;
    }

    .down{
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .down > h2  {
        margin: 30px 0px;
        font-size: 32px;
        line-height: 36px;
    }

    h2 a > img{
        padding-right: 20px;
        cursor: pointer;
    }
    
    .down-main{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .down-main > a{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        background-color: #fefefe;
        border-radius: 12px;

    }

    .down-main > a > .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 390px;
        padding: 20px;
    }

    h3{
        font-size: 24px;
        line-height: 27px;
        text-align: center;
        color: #292929;
    }
    .down-main > a > .card > p{
        /* padding: 0px 10px; */
        padding-top: 10px;
        font-family: 'Nunito Sans';
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #848286;
    }
    .down-main > a > .card > img{
        width: 50px;
        padding: 40px 0px;
    }



</style>