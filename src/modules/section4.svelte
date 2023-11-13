<script>
    let checkboxToggle = false
</script>
<section>
        <div class="container paddings">
            <h2>Contact us</h2>
            <form>
                <div class="inputs">
                    <div class="input">
                        <label for="name">Full Name</label>
                        <input id="name" type="text" placeholder="Enter your name">
                    </div>
                    <div class="input">
                        <label for="number">Phone number</label>
                        <input id="number" type="number" placeholder="Enter your number">
                    </div>
                    <div class="input"> 
                        <label for="mail">E-mail</label>
                        <input id="mail" type="email" placeholder="Enter your e-mail  ">
                    </div>
                </div>
                <div class="textarea">
                    <div>
                        <label for="desc">Message</label>
                        <textarea id="desc" cols="100%" rows="10" placeholder="Enter your message"></textarea>
                    </div>
                    <div class="checkbox">
                        <div class="custom-checkbox">
                            <input type="checkbox" checked={checkboxToggle}>    
                            <img on:click={() => checkboxToggle = !checkboxToggle} src={checkboxToggle ? './assets/checkbox_active.svg' : './assets/checkbox.svg'} alt="checkbox">
                        </div>
                        <p>I hereby consent to the processing of the personal data that I have provided and declare my agreement with the data protection regulations in the data privacy statement</p>
                       
                    </div>
                    <button>SEND</button>
                </div>
            </form>
        </div>
</section>


<style>
    section{
        background-color: #F1ECF9;
    }

    .paddings{
        padding: 60px 0;
    }
    form{
        display: flex;
        gap: 20px;
    }
    h2{
        font-weight: 600;
        font-size: 32px;
        color: #12091D;
    }
    label{
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }

    .input{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
    .input > input{
        width: 558px;
        margin-top: 6px;
        padding: 10px 20px;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid var(--violet-100);
    }

    .textarea{
        margin-top: 30px;
        width: 558px;
    }
    
    textarea{
        width: 100%;
        border-radius: 10px;
        border: 1px solid var(--violet-100);
        background-color: transparent;
        margin-top: 6px;
        padding: 10px 20px;
    }

    .checkbox{
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }

    .custom-checkbox{
        position: relative;
        width: 20px;
        height: 20px;
    } 
    .custom-checkbox > input{
        width: 18px;
        height: 18px;
        border-radius: 2px;
        display: none;
    }
    p{
        font-family: 'Inter';
        font-size: 16px;
        margin-bottom: 20px;
    }
    button{
        background-color: #582E90;
        border-radius: 12px;
        padding: 12px 36px;
        color: #fefefe;
        font-family: 'Nunito Sans';
        font-weight: 600;
        font-size: 14px;
    }

    @media (max-width: 1024px){
        h2{
            margin-left: 50px;
        }
        form{
            flex-direction: column;
            align-items: center;
        }
    }
    @media (max-width: 768px){
        h2{
            margin-left: 20px;
            font-size: 20px;
        }
        form{
            margin: 30px 20px;
            align-items: stretch;
            gap: 0;
        }
        .input > input, .textarea{
            width: 100%;
        }

        label{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
        
    }
</style>