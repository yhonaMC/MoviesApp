import styled from "styled-components";


export const MovieCards = styled.div`
    width: 250px;
    margin: 1rem;
    /* background-color: white; */
    border-radius: 5px;
    /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1); */
    overflow: hidden;
    position: relative;
    
    `;

export const MovieImg = styled.img`
  max-width: 100%;
`;

export const TitleMovie = styled.h3`
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem;
`;

export const AverageVote = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 1rem;
  color: #0e7e0c;
`;

export const DivMov = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Points = styled.span`
    color: white;
    text-align: center;
    line-height: 30px;
    position: absolute;
    display: block;
    width: 50px;
    height: 30px;
    margin-top: 20px;
    background-color: #000000b3;
    border: 2px solid yellow;
    border-left-style: none;
    border-radius: 0px 20px 20px 0px;
`;


export const Img = styled.img`
 display: flex;
 width: 300px;
 height: 300px;
 margin: 10px;
`;

export const Header = styled.div`
 display: flex;
 justify-content: center;
 color: white;
 font-weight: bold;
 font-size: 1.2rem;
 margin: 10px;
 text-align: left;

`;

export const Body = styled.div`
color: white;
margin-top: 12px;
text-align: justify;
font-size: 1em;
margin: 15px;
`;

export const Botton = styled.button`
  background: #0e3fa9;
  color: white;
  width: 100%;
  border: none !important;
  outline: none !important;
  box-shadow: none !important ;
`;


export const Bottons = styled.button`
  background: #0e3fa9;
  color: white;
  width: 40%;
  margin-left: 10px;
  border: none !important;
  outline: none !important;
  box-shadow: none !important ;
`;