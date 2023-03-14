import React from 'react'
import {AiFillHtml5, AiOutlineConsoleSql, AiFillGithub} from 'react-icons/ai';
import {IoLogoCss3, IoLogoJavascript, } from 'react-icons/io';
import {BiGitBranch} from 'react-icons/bi';
import {DiReact} from 'react-icons/di';
import {FaJava} from 'react-icons/fa'
import {TbBrandCpp} from 'react-icons/tb'
import './Skills.css'


function Skills() {
  return (
    <div className='skillset'>
  <h2 class='title'>Skills</h2>
  <div class='container'>
    <div class='box'><div><AiFillHtml5 /></div><div><span class='data'>HTML</span></div></div>
    <div class='box'><IoLogoCss3/><span class='data'>CSS</span></div>
    <div class='box'><IoLogoJavascript/><span class='data'>Javascipt</span></div>
  </div>

  <div class='container'>
    <div class='box'><AiOutlineConsoleSql/><span class='data'>SQL</span></div>
    <div class='box'><AiFillGithub/><span class='data'>GitHub</span></div>
    <div class='box'><BiGitBranch/><span class='data'>SQL</span></div>
  </div>

  <div class='container'>
    <div class='box'><DiReact/><span class='data'>React</span></div>
    <div class='box'><FaJava/><span class='data'>Java</span></div>
    <div class='box'><TbBrandCpp/><span class='data'>C++</span></div>
  </div>
</div>


  )
}

export default Skills