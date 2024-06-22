import React, { useState } from 'react';

import Tabela from "../assets/Tabela.png";
import Portas from "../assets/portas.png";
import Componentes from "../assets/componentes.png";
import Labels from "../assets/labels.png";
import Indicador from "../assets/indicador.png";

import LabelTabela from "./tabela.js";
import LabelPortas from "./portas.js";
import LabelComponentes from "./componentes.js";


const SideBar = () => {
  const [tabela, setTabela] = useState(false);
  const [portas, setPortas] = useState(false);
  const [componentes, setComponentes] = useState(false);
  const [width, setWidth] = useState('4rem'); 
  const [top, setTop] = useState('1rem')

  const openTabela = () => {
    setTabela(!tabela);
    console.log('Tabela clicked, state is now:', !tabela);
    setWidth(tabela ? '4rem' : '20rem'); 
    setTop('1rem')
  };

  const openPortas = () => {
    setPortas(!portas);
    console.log('Tabela clicked, state is now:', !portas);
    setWidth(portas ? '4rem' : '20rem'); 
    setTop('5rem')
  };

  const openComponentes = () => {
    setComponentes(!componentes);
    console.log('Tabela clicked, state is now:', !componentes);
    setWidth(componentes ? '4rem' : '20rem'); 
    setTop('9rem')
  };

  return (
    <div className='bg-[#1B1616] absolute flex right-2 top-[5rem] h-[calc(100vh-6rem)] rounded-lg z-10 ' style={{ width }}>
      
      <img className="transition-all duration-500 ease-in-out absolute right-1 top-[1rem] h-[2rem]" style={{top}} src={Indicador} alt="Indicador" />
      
      <LabelTabela tabela={tabela}/>      
      <LabelPortas portas={portas} />
      <LabelComponentes componentes={componentes} />
     
      
      <div className='flex flex-col items-center justify-start w-[4rem]'>

        <img onClick={openTabela} className="max-w-[2rem] max-h-[100%] my-4 cursor-pointer" src={Tabela} alt="Tabela" />
        <img onClick={openPortas} className="max-w-[50%] max-h-[100%] my-4 cursor-pointer" src={Portas} alt="Portas" />
        <img onClick={openComponentes} className="max-w-[50%] max-h-[100%] my-4 cursor-pointer" src={Componentes} alt="Componentes" />
        <img className="max-w-[50%] max-h-[100%] my-4 cursor-pointer" src={Labels} alt="Labels" />
      
      </div>

     
    </div>
  );
};

export default SideBar;
