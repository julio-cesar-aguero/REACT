import './App.css'
import { useState } from 'react'
import html2canvas from 'html2canvas'
function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('futurama');

  const onChangeLinea1 = (valor) =>{
    setLinea1(valor.target.value)
  }
  const onChangeLinea2 = (valor) =>{
    setLinea2(valor.target.value)
  }
  const onChangeImage = (valor) =>{
    setImage(valor.target.value)
  }

  const onClickExportar = (valor) =>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();

  });
  }
  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">history Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <input onChange={onChangeLinea1} type="text" placeholder="Linea Superior"/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea Inferior"/>
      <button onClick={onClickExportar}>Exportar</button>
      <div className="meme__container" id="meme">
        <span className="span__top">{linea1}</span>
        
        <span className="span__bottom">{linea2}</span>
        <img src={"/img/"+image+".jpg"}></img>
      </div>
    </div>
  );
}

export default App;
