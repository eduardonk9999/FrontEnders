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

    image {
        width: 256px;
        height: 300px;
    }
    
    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
    }
`

export function ProductCart(props : ProductCardProps) {
    return(
        <Card>
            <image href={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </Card>
    )
}