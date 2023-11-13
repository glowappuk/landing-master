<script>
    import HeaderDownIcons from "../components/HeaderDownIcons.svelte"
    import Logo from "../components/logo.svelte"

    export let toggle = true
    export let fnTrue = {}
    export let fnFalse = {}
    let over 
    let pageState = true
</script>
<header>
    <div class="up">
        <div class="container d-f">
            <Logo />
        
            <div class="pages">
                <!-- <span on:click={fnFalse} class={toggle ? 'for-room padding'  : 'for-prof padding'}>Professionals</span> -->
                <span on:click={fnTrue} class={toggle ? 'for-prof padding'  : 'for-room padding'}>Treatment Rooms</span>
            </div>
        </div>
    </div>
    <div class="down">
        <div class="container d-f">
           <div class="gap left">
                <span on:mouseenter={() => over = 1} 
                      on:mouseleave={() => over = 0} 
                      on:mousedown={() => over = 2}
                      on:mouseup={() => over = 1}
                      on:click={() => pageState = true}
                    


                      class="array {pageState ? 'pageState' : ''}">London 
                    
                      {#if pageState}
	                    <img src={over === 1 ? './assets/header-array_hover.svg' : over === 2 ? './assets/header-array_active.svg' : './assets/header-array_state.svg'} alt="array">
                      {:else}
                        <img src={over === 1 ? './assets/header-array_hover.svg' : over === 2 ? './assets/header-array_active.svg' : './assets/header-array.svg'} alt="array">
                      {/if}
                </span>
                <span class="array {pageState ? '' : 'pageState'}" on:click={() => pageState = false}><a href="/help-center">Help center</a></span>
                <HeaderDownIcons iconToggle={toggle}/>
           </div>
            <div class="gap">
                <span>
                    <a href="https://businessglowapp.co.uk/auth-room">Sign up</a>
                </span>
                <span>
                    <a href="https://businessglowapp.co.uk/login">Log in</a>
                </span>
            </div>
        </div>
    </div>
</header>

<style> 
    .padding{
        cursor: pointer;
        padding: 13px 30px;
        font-size: 16px;
    }

    .padding::before{
        content: 'For ';
    }

    @media (max-width: 740px){
        .padding{
        padding: 13px 16px;
        font-size: 13px;
    }
        .padding::before{
        content: none;
    }
    }
    .up{
        width: 100%;
        height: 44px;
        background-color: var(--black-back); 
    }
    .d-f{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .for-prof{
        background-color: var(--white);
    }
    .for-room{  
        color: var(--white);
    }

    .down{
        width: 100%;
        height: 50px;
    }
    .gap{
        display: flex;
        gap: 60px;
        padding-right: 30px;
    }
    .array{
        display: flex;
        align-items: center;
        gap: 9px;
    }
    .pageState{
        color: #582E90;
    }

    .gap > span:hover{
        cursor: pointer;
        color:  #9E77D3;
    }
    .gap > span:active{
        color:  #7C46C4;
    }

    .pages > span:hover {
        color: #BA9EE0;
    }
    .pages > span:active {
        color: #9E77D3;
    }
    @media (max-width: 740px) {
        .gap{
            gap: 50px;
            padding-right: 16px;
        }
        .gap span{
            font-size: 14px;
        }
    }
    @media (max-width: 600px){
        .left > span{
            display: none;
        }
    @media (max-width: 600px) {
        .gap{
                gap: 25px;
            }
        }
    }
</style>


