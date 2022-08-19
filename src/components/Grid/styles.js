import styled from "styled-components"; 

export const Table = styled.table`

width: 98%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #CCC;
border-radius:1120px;
margin: 20px auto;
`;

export const Thead = styled.thead``;


export const Tbody = styled.tboby``;

export const Tr = styled.tr``;


export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    text-aligh: ${(props) -> (pros.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};


`;
