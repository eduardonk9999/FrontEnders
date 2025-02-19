import Image from "next/image"
import styled from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img {
        width: 256px;
        height: auto;
    }
    
    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: #000;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: #000;
    }


    > div {
        width: 228px;
        height: 1px;
        left: 12px;
        top: 340px;
        margin: 8px 0;

        background: #DCE2E6;
    }

`

export function ProductCart(props : ProductCardProps) {
    return(
        <Card>
            
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <div></div>
            <p>{props.price}</p>
        </Card>
    )
}