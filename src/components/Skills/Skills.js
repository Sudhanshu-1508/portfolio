import React from 'react'
import {AiFillHtml5, AiOutlineConsoleSql, AiFillGithub} from 'react-icons/ai';
import {IoLogoCss3, IoLogoJavascript, IoLogoReact} from 'react-icons/io';
import {BiGitBranch} from 'react-icons/bi'


function Skills() {
  return (
    <>
    <h2>Skills</h2>
    <div className='container'>
        <div className='box'><AiFillHtml5/></div>
        <div className='box'><IoLogoCss3/></div>
        <div className='box'><IoLogoJavascript/></div>

        <div className='box'><AiOutlineConsoleSql/></div>
        <div className='box'><AiFillGithub/></div>
        <div className='box'><BiGitBranch/></div>
    </div>
    </>
  )
}

export default Skills