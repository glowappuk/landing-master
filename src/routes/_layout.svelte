<script>
    import { toggle } from '../stores/stores';  
    
    toggle.subscribe(value => {
        $toggle = value 
    })

    const fnToogleTrue = () => {
        $toggle = true
    }

    const fnToogleFalse = () => {
        $toggle = false
    }

    import LoadingBar from '../components/LoadingBar.svelte'
    import Header from '../modules/header.svelte'
    import Footer from '../modules/footer.svelte'
    import ContactUs from '../modules/ContactUs.svelte'

</script>

<div class="site">
    <LoadingBar/>
    <Header toggle={$toggle} fnTrue={fnToogleTrue} fnFalse={fnToogleFalse}/>
    <main class="site-content">
        <slot/>
        <ContactUs /> 
    </main>
    <Footer />
</div>
