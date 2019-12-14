import React, { Component } from 'react';
import TreeDecoList from './TreeDecoList';
import SaveImage from './SaveImage';
 
import React, { Component } from 'react';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import tree from './images/tree.jpg';
import ccc from './images/ccc.jpg';
import joucho from './images/joucho_fuantei_man.png';
import jk from './images/jk.png';
import toumei from './images/toumei.png';
import { array, string } from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="hero container is-info">
          <div className="hero-body">
            <h1 className="title">Treehub</h1>
          </div>
        </section>
        <section className="container">
          <SaveImage />
          <TreeDecoList />
        </section>
      </div>
    );
  }
}

var images = new Array(ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,toumei,joucho,jk);
function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Route exact path ='/'>
        <Link to='/Edit'>
          編集画面へ
        </Link>
      </Route>
        <Route exact path='/Edit'>
          <Edit />
      </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;

function Edit(){
  
  const[menucheck,setCheck] = React.useState(false);
  const [image_state,getImage] = React.useState(toumei);
  const [top,setTop] = React.useState(toumei);
  const [firstL,setFL] = React.useState(toumei);
  const [firstR,setFR] = React.useState(toumei);
  const [secondL,setSL] = React.useState(toumei);
  const [secondM,setSM] = React.useState(toumei);
  const [secondR,setSR] = React.useState(toumei);
  const [bottomL,setBL] = React.useState(toumei);
  const [bottomML,setBML] = React.useState(toumei);
  const [bottomMR,setBMR] = React.useState(toumei);
  const [bottomR,setBR] = React.useState(toumei);
  
  function click_recieve(i) {//受け取りの関数。iが配列の番号
    getImage(images[i]);
    console.log(image_state);
  }
  
  function top_send(){//渡すときの関数。
    setTop(image_state);
  }
  function firstL_send(){
    setFL(image_state);
  }
  function firstR_send(){
    setFR(image_state);
  }
  function secondL_send(){
    setSL(image_state);
  }
  function secondM_send(){
    setSM(image_state);
  }
  function secondR_send(){
    setSR(image_state);
  }
  function bottomL_send(){
    setBL(image_state);
  }
  function bottomML_send(){
    setBML(image_state);
  }
  function bottomMR_send(){
    setBMR(image_state);
  }
  function bottomR_send(){
    setBR(image_state);
  }
  function menuChange(){
    setCheck(!menucheck);
  }

  return(
    <>
    <h1 className="Edit_header">これは編集画面です</h1>
    <section className="Edit_left">
      <div className="Edit_tree_item">{/*position:relation*/}
        <img src={tree}className="Edit_img_tree"></img>
        <img src={images[0]}className="Edit_item_size Edit_item1"></img>
        <img src={images[1]}className="Edit_item_size Edit_item2"></img>
        <img src={images[2]}className="Edit_item_size Edit_item3"></img>
        <img src={images[3]}className="Edit_item_size Edit_item4"></img>
        <img src={images[4]}className="Edit_item_size Edit_item5"></img>
        <img src={images[5]}className="Edit_item_size Edit_item6"></img>
        <img src={images[6]}className="Edit_item_size Edit_item7"></img>
        <img src={images[7]}className="Edit_item_size Edit_item8"></img>
        <img src={images[8]}className="Edit_item_size Edit_item9"></img>
        <img src={images[9]}className="Edit_item_size Edit_item10"></img>
        <button className={`${menucheck ? 'items_after':'items_before'}`} onClick ={menuChange} >かざり</button>
        <article >
          <ul className={`${menucheck ? 'Edit_menu_open Edit_itembox':'Edit_menu_close Edit_itembox'}`}>
            <button onClick = { () => click_recieve(11)}>
            <li><img src={images[11]} className="Edit_menu_img"></img></li>
            </button>
            <button onClick = {() => click_recieve(12)}>
            <li><img src={images[12]} className="Edit_menu_img"></img></li>
            </button>
            <li><img src={images[0]} className="Edit_menu_img"></img></li>
          </ul>
        </article>
      </div>
      
    </section>
    
    <section className="Edit_right">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>
        <button onClick = {top_send}>
          <img src={top}className="Edit_item_size Edit_item1"></img>
        </button>
        <button onClick = {firstL_send}>
          <img src={firstL}className="Edit_item_size Edit_item2"></img>
        </button>
        <button onClick = {firstR_send}>
          <img src={firstR}className="Edit_item_size Edit_item3"></img>
        </button>
        <button onClick = {secondL_send}>
          <img src={secondL}className="Edit_item_size Edit_item4"></img>
        </button>
        <button onClick = {secondM_send}>
          <img src={secondM}className="Edit_item_size Edit_item5"></img>
        </button>
        <button onClick = {secondR_send}>
          <img src={secondR}className="Edit_item_size Edit_item6"></img>
        </button>
        <button onClick = {bottomL_send}>
          <img src={bottomL}className="Edit_item_size Edit_item7"></img>
        </button>
        <button onClick = {bottomML_send}>
          <img src={bottomML}className="Edit_item_size Edit_item8"></img>
        </button>
        <button onClick = {bottomMR_send}>
          <img src={bottomMR}className="Edit_item_size Edit_item9"></img>
        </button>
        <button onClick = {bottomR_send}>
          <img src={bottomR}className="Edit_item_size Edit_item10"></img>
        </button>
      </div>
    </section>
    </>
  );
}






