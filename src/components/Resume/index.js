import React from 'react';
import Resumeitem from '../resumeitem';
import * as C from "./styles";
import { 
        FaChevronCircleUp,
         FaChevronCircleDown,
         FaChild,
         FaDollarSign,
} from "react-icons/fa";
const Resume = () => {
  return (
    <C.Container>
      <Resumeitem title="Entradas" Icon={FaChevronCircleUp} />
      <Resumeitem title="Saidas" Icon={FaChevronCircleDown} />
      <Resumeitem title="Total" Icon={FaDollarSign} />
    </C.Container>
  )
}

export default Resume;