<script>
    import { stores } from '@sapper/app'
    import { onMount } from 'svelte'
    import { getProfHelpCardDetail, getRoomHelpCardDetail } from '../../api'
    let { page } = stores()
    
    import { toggle } from '../../stores/stores';  
    toggle.subscribe(value => {
        $toggle = value 
    })
    
    let cardDetail = []
    let id
    page.subscribe(value => {
        id = value.params.id
        console.log(id);
    })
    
    onMount(async () => {
        if ($toggle) {
            cardDetail = await getRoomHelpCardDetail(id)
        } else {
            cardDetail = await getProfHelpCardDetail(id)
        }
    })


    
</script>

<section class="back">

    <div class="container">
        <p class="title"><a href="/"><img src="./assets/help-center/help-array-left.svg" alt=""></a>{cardDetail.title}</p>
        <p class="desc">This is the list of documents that are required in order to start using GlowApp as a professional. The documents prove your professional expertise.</p>
    </div>
    
</section>


<style>
    .back{
         background-color: #F1ECF9;
    }
    .title{
        padding: 30px 0px;
        font-size: 32px;
        line-height: 36px;
    }

    .desc{
        font-family: 'Nunito Sans';
        color: #292929;
    }
    .title a > img{
        padding-right: 20px;
        cursor: pointer;
    }
</style>

