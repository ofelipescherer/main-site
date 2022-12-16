import Image from 'next/image'
import styled from 'styled-components'

export const Wraper = styled.div`
  width: 100%;
  position: relative;
  /* display: flex;
  background-color: red;
  overflow: hidden;
position: relative; */
`

// export const CardContainer = styled.div`
//   --slider-index: 0;
//   display: flex;
//   flex-grow: 1;
//   margin: 0 var(--img-gap);
//   transform: translateX(calc(var(--slider-index) * -100%));
//   transition: transform 250ms ease-in-out;
// `

// export const Button = styled.button`
//   border-radius: 50%;
//   background-color: #00000080;
//   position: absolute;
//   bottom: 50%;
//   color: white;
//   width: 35px;
//   height: 35px;
//   cursor: pointer;
//   z-index: 15000;

//   &:hover {
//     background-color: #0000001f;
//   }
// `

// export const ButtonRight = styled(Button)`
//   right: 0;
// `

// export const ButtonLeft = styled(Button)`
//   left: 0;
// `

// export const Handle = styled.button`
//   border: none;
//   border-radius: 1rem;
//   flex-grow: 0;
//   flex-shrink: 0;
//   background-color: #00000080;
//   z-index: 10;
//   margin: var(--img-gap) 0;
//   width: var(--handle-size);
//   cursor: pointer;
//   font-size: 5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   line-height: 0;
//   transition: background-color 150ms ease-in-out;

//   position: absolute;
//   background-color: red;

//   &:hover,
//   &:focus {
//     background-color: #0000001f;
//   }
// `

// export const HandleRight = styled(Handle)`
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
// `

// export const HandleLeft = styled(Handle)`
//   border-top-left-radius: 0;
//   border-bottom-left-radius: 0;
//   border-radius: 0;
// `

// export const Text = styled.span`
//   transition: transform 150ms ease-in-out;

//   &:hover,
//   &:focus {
//     transform: scale(1.2);
//   }
// `

// ========================================================================================

export const Container = styled.div`
  height: 500px;
  margin: auto;

  #item-1:checked ~ .cards #song-3,
  #item-2:checked ~ .cards #song-1,
  #item-3:checked ~ .cards #song-2 {
    transform: translatex(-40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .cards #song-2,
  #item-2:checked ~ .cards #song-3,
  #item-3:checked ~ .cards #song-1 {
    transform: translatex(40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .cards #song-1,
  #item-2:checked ~ .cards #song-2,
  #item-3:checked ~ .cards #song-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
  }
`

export const Card = styled.label`
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
  user-select: none;
`

export const CardImage = styled.img`
  width: 400px;

  border-radius: 10px;
  object-fit: cover;
`

// .player {
//   background-color: #fff;
//   border-radius: 8px;
//   min-width: 320px;
//   padding: 16px 10px;
// }

// .upper-part {
//   position: relative;
//   display: flex;
//   align-items: center;
//   margin-bottom: 12px;
//   height: 36px;
//   overflow: hidden;
// }

// .play-icon{ margin-right: 10px; }

// .song-info {
//   width: calc(100% - 32px);
//   display: block;
// }

// .song-info .title {
//   color: #403d40;
//   font-size: 14px;
//   line-height: 24px;
// }

// .sub-line {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// }

// .subtitle, .time {
//   font-size: 12px;
//   line-height: 16px;
//   color: #c6c5c6;
// }

// .time {
//   font-size: 12px;
//   line-height: 16px;
//   color: #a5a5a5;
//   font-weight: 500;
//   margin-left: auto;
// }

// .progress-bar {
//   height: 3px;
//   width: 100%;
//   background-color: #e9efff;
//   border-radius: 2px;
//   overflow: hidden;
// }

// .progress {
//   display: block;
//   position: relative;
//   width: 60%;
//   height: 100%;
//   background-color: #2992dc;
//   border-radius: 6px;
// }

// .info-area {
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 30px;
//   transition: transform .4s ease-in;
// }

// #item-2:checked ~ .player #test {
//   transform: translateY(0);
// }

// #item-2:checked ~ .player #test  {
//   transform: translateY(-40px);
// }

// #item-3:checked ~ .player #test  {
//   transform: translateY(-80px);
// }
