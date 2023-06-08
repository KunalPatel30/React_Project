import React from 'react'
import styled from 'styled-components'
 
function Card({title, img, price}) {

    const Wrapper = styled.div`
        height: 200px;
        margin: 10px 10px;
        width: 350px;
        background: white;
        box-shadow: 10px 10px 20px black;
        display: flex;
        justify-content: center;
        padding: 10px;
        cursor: pointer;
    `;
    const CardTitle = styled.div`
        font-size: 2rem;
        font-weight: bold;
        margin-left:20px;
    `;
    const CardBody = styled.div`
    font-size: 1.1rem;
    width:fit-content;
    & img {
        width:100%;
        height: 100%;
        // mix-blend-mode: color-burn;
    }`;
  return (
        <Wrapper>
            <CardTitle>
                <h4>{title.slice(0, 15)}</h4>
                <h5>{price}</h5>
            </CardTitle>
            <CardBody>
                <img src={img} alt="" />
            </CardBody>
        </Wrapper>
  )
}

export default Card