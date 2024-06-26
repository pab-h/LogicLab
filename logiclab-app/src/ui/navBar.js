import React from 'react';

import LogicLabLogo from '../assets/LogicLabLogo.svg';
import filesBtn from '../assets/file-btn.svg';
import moveBtn from '../assets/move-btn.svg';
import commentsBtn from '../assets/comments-btn.svg';
import playBtn from '../assets/play-btn.svg';

const navBar = () => {
  return (
    <div className="bg-[#1B1616] h-[4rem] flex itens-center justify-between z-10">

      <div className="grow basis-0 flex itens-center">

        <img src={LogicLabLogo} alt="Logo do Programa"  className="w-12 h-auto ml-11"/>
        
        <div className="mg-8 flex gap-8 p-4 ml-8">
          <button> <img src={filesBtn} alt="Botão de arquivos" /> </button>
          <button> <img src={moveBtn} alt="Botão de movimentação" /> </button>
          <button> <img src={commentsBtn} alt="Botão de comentários" /> </button>
        </div>

      </div>

      <p className="text-[#ccc] content-center" id="project-name">
        Project-name.ll
      </p>

      <div className="grow basis-0 flex items-center justify-end h-[4rem]">

        <button className="bg-[#14C846] rounded-[11px] w-16 h-10 flex items-center justify-center  mr-[1.2em]">
          <img src={playBtn} alt="Botão de iniciar" class=""/>
        </button>

      </div>
    </div>
  );
};

export default navBar;
