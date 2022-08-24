import { Container } from "@mantine/core";
import styled from "styled-components";
import '../fonts/Web-PS/Steppe.css'

export const ComingSoonBody = styled(Container)`
    max-width:1340px;
    padding-left: 150px;
    border-radius: 15px;
    
    margin-top: 15px;
    background: linear-gradient(90deg, #3800B0 0%, #6033C0 50%, #8866D0 100%);

    @media (min-width: 375px) and (max-width: 550px) { 
        padding-left: 0px; 
        padding: 0;
    }

    @media (min-width: 1280px) and (min-height: 800px) {
        height: 770px;
    }

    @media (min-width: 1220px) and (min-height: 800px) {
        height: 770px;
    }
    @media (min-width: 1200px) and (min-height: 800px) {
        height: 770px;
    }

    .mantine-Grid-root {
        @media (min-width: 375px) and (max-width: 550px) { 
           display: contents;
        }
    }

    .mantine-Input-input {
        padding-bottom: 10px;
        height: 50px !important;
        padding: 1px 15px 1px;
        width: 130% !important;

        @media(min-width: 375px) and (max-width: 550px) {
            padding-bottom: 10px;
            height: 50px !important;
            padding: 1px 15px 1px;
            width: 95% !important;
            text-align: center;
        }
    }

    .col-one {
        @media(min-width: 375px) and (max-width: 550px) {
            max-width:530px;
        }
    }

    #img-class {
        padding-left: 100px;
        margin-top: -70px;

        @media (min-width: 375px) and (max-width: 550px) { 
            padding-left: 10px;
            margin-top: -570px;
            padding-top: 30px;
            width: 210% !important;
        } 

        @media (min-width: 390px) and (max-width:460px) {
            width: 180% !important;
            margin-top: -590px;
            padding-left:35px;
        }
    }

`

export const Logo = styled.div`
    padding-top: 50px;

    @media (min-width: 375px) and (max-width: 550px) { 
        display: flex;
        justify-content: center;
        padding-top: 30px;
    }
`

export const TextSection = styled.div`
    display: flex;

    .btn {
        margin-left: 70px;
        height: 50px;
        width: 35%;
        color: #3800B0;
        background: #00FF9E;   

        @media (min-width: 375px) and (max-width: 550px) { 
            width: 95%;
            margin-top: 10px;
            margin-left: 0px;
        }
    }

    @media (min-width: 375px) and (max-width: 550px) { 
        min-width: 251px;
        display: block;
        margin-left: 17px;
    }
`

export const Maintxt = styled.h1 `
    font-family: 'Steppe' !important;  
    font-size: 88px;
    color: white;
    font-weight: 600;
    padding-top: 100px;

    @media (min-width: 375px) and (max-width: 550px) { 
        min-width: 360px;
        font-size: 45px;
        text-align : center;
        padding-top: 15px;
    }

    @media (min-width: 1200px) and (max-width: 1515px) {
        font-size: 70px;
    }

    @media (min-width: 1200px)

`

export const Secondtxt = styled.p`
    font-family: 'Steppe' !important;
    padding-left: 5px;
    margin-top: -35px;
    color: white;

    @media (min-width: 375px) and (max-width: 550px) { 
        min-width: 355px;
        text-align: center;
        padding-top: 20px;
        font-size:22px;
    }
`

export const İnputtxt = styled.p`
    font-family: 'Steppe' !important;
    padding-top: 150px;
    color: white;

    @media (min-width: 375px) and (max-width: 550px) { 
        min-width: 360px;
        text-align: center;
        padding-top: 400px;
    }
`

export const SubscribeForm = styled.form`
    display: flex;

    @media(max-width: 768px) {
        display: block;
    }
`

export const IconsSection = styled.div`
    display: flex;
    gap: 20px;
    margin-top: -15px;
    padding-bottom: 20px;
    margin-left: -9px;

    @media(min-width: 1200px) and (max-width: 1350px) {
        margin-top: 25px;
    }
    
    @media(min-width: 1400px) and (max-width: 1550px ){
        margin-top: -40px;
    }
    @media (min-width: 375px) and (max-width: 550px) {
        justify-content: center;
        gap: 80px;
        padding-top: 20px;
    }

    #soc-icons {
        width: 1.5% !important;
        display: flex;
        
        @media (min-width: 375px) and (max-width: 550px) {
            width: 6% !important;
            justify-content: center;
        }
    }
`