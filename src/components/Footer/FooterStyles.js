import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: none;

    @media screen and (max-width: 799px){
        display: block;
        width: 100%;
        background: white;
        position: fixed;
        bottom: 0;
        display: flex;
        padding: 0.5rem;
        justify-content: space-between;
        color: #191A19;
        box-shadow: 0.2px 0.3px 4px 0.2px grey;

        p{
            font-size: 13.2px;
            padding: 0;
            margin:-3px 0 0 0;
        }

        span{
            font-size: 25px;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;
            color: #2C272E;
            
        }

        div:hover, span:hover{
            color: Rgba(6, 148, 42);
        }

        span:focus, span:active , div:active, div:focus{
            color: Rgba(6, 148, 42);
        }

        .cart{
            background: linear-gradient(81.64deg, Rgb(6, 170, 20) 34.46%, Rgb(6, 80, 10) 87.54%);
            border-radius: 1.75rem 0 0 1.75rem;
            transform: translate(5%, -50%);
            width: 9rem;
            height: 3rem;
            color: #fff;
            font-size: 20px;
            text-align: right;
        }
        
    }


`