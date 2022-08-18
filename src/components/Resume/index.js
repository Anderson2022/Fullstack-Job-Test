import React from 'react';
import ResumeItem from "../Resumeitem";
import * as C from "./styles";
import { 
        FaChevronCircleUp,
        FaChevronCircleDown,
        FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaChevronCircleUp} value="1000" />
      <ResumeItem title="Saidas" Icon={FaChevronCircleDown} value="1000"/>
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000"/>
    </C.Container>
  );
};

export default Resume;