<script>
    import { toggle } from '../stores/stores';  
    
    toggle.subscribe(value => {
        $toggle = value 
    })

    import Banner1 from "../modules/banner1.svelte";
    import Banner2 from "../modules/banner2.svelte";
    import Section1 from "../modules/section1.svelte"
    import Section2 from "../modules/section2.svelte";
    import Section3 from "../modules/section3.svelte";
    
</script>
    
<Section1 toggle={$toggle}/>
<Section2 />
<Banner1 />
<Section3 toggle={$toggle}/>
<Banner2 />

