<script>
import FooterIcons from "../components/FooterIcons.svelte";

</script>
<footer>
    <div class="up">
        <div class="up-sub">
            <div>
                <FooterIcons />
            </div>
            <div>
                <h2>Discover</h2>
                <p>Our platform</p>
                <p>What we offer</p>
            </div>
        </div>
        <div class="up-sub">
            <div>
                <h2>Support</h2>
                <p>Contact  us</p>
                <p>Help Center</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <div>
                <h2>About</h2>
                <p>For Treatment Rooms </p>
                <p>For Customers</p>
            </div>
        </div>
    </div>

    <div class="down">
        <span>© 2022 GlowApp. All rights reserved.
             Company Number 13783911</span>
    </div>
</footer>

<style> 
    *{
        color: var(--white);
    }
    .up{
        width: 100%;
        height: 265px;
        background-color: var(--black-back); 
        display: flex;
        justify-content: center;
        gap: 80px;
        padding-top: 40px;
    }
    .up-sub{
        display: flex;
        gap: 90px;
    }
    h2{
        font-size: 24px;
        line-height: 27px;  
        margin-bottom: 30px;
    }
    p{
        font-size: 16px;
        font-family: 'Nunito Sans';
        line-height: 22px;
        cursor: pointer;
        margin-top: 10px;
    }
    .down{
        width: 100%;
        height: 40px;
        background-color: var(--dark-black); 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .down > span {
        margin-top: 0px;
        font-size: 12px;
    }   

    p:hover{
        color: #9E77D3;
    }


    @media (max-width: 860px) {
        h2{
            font-size: 18px;
            margin-bottom: 20px;
        }
        p{
            font-size: 12px;
        }
        .up{
            height: 420px;
            padding: 0px 60px;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 0;
        }
        .up-sub > div{
            width: 120px;
        }
    }

    @media (max-width: 480px) {
        .down{
            height: 60px;
        }   
        .down > span {

            white-space: pre-line;
            text-align: center;
            line-height: 15px;
        } 
    }

</style>


