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
    }


`