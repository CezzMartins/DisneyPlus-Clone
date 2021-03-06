import React from 'react'
import styled from 'styled-components'


function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>    
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin: 50px 0;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 15px;
    letter-spacing: 1.8px;
    height: 56px;
    padding: 0 24px;
    margin-right: 22px;
    border-radius: 4px;
    border: none;
    background-color: rgb(249,249,249, 0.8);
    cursor: pointer;
    &:hover{
        background-color: rgb(198,198,198);
    }
`   

const TrailerButton = styled(PlayButton)`
    background-color: rgb(0,0,0, 0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    display:flex;
    align-items:center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-right: 16px;
    border-radius: 50%;
    border: 2px solid rgb(249,249,249);
    background-color: rgb(0,0,0, 0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: rgb(249,249,249);
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0, 0.9);
`

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    width: 50vw;
    font-size: 20px;
    margin-top: 16px;
    line-height: 1.4;
    color: rgb(249,249,249);
`
