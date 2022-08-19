import React from 'react';
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import { 
        FaChevronCircleUp,
        FaChevronCircleDown,
        FaDollarSign,
} from "react-icons/fa";

const Resume = ( income, expense, total) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaChevronCircleUp} value={income} />
      <ResumeItem title="Saidas" Icon={FaChevronCircleDown} value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  );
};

export default Resume;