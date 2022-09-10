import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaAppStoreIos,
  FaThumbsDown,
} from "react-icons/fa";




const GridItem = ({ item, onDelete }) => {

 
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.group}</C.Td>
      <C.Td>{item.vlr}</C.Td>
      <C.Td>{item.amount}</C.Td>
      
     
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
        style={{
              marginTop: "10px",
              background: "red",
              fontWeight: "bolder",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "white",
              borderRadius: "8px"
            }}
            
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
