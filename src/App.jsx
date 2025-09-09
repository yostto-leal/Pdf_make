import React from 'react'
import './App.css'

// PDFMake e fontes
import pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.vfs


// Dados e lógica de impressão
import { data } from './data'
import { Impressao } from './impressao'


// Registro das fontes
pdfMake.vfs = pdfFonts.pdfMake.vfs


function App() {

  const visualizarImpressao = async () => {
    console.log ('report', data)
    const classeImpressao = new Impressao(data);
    const documento = await classeImpressao.PreparaDocumento();
    pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
  }  
  return (

    <div className="App">
      <header className="App-header">
      
        <p>
          Criando documentos PDF com ReactJS
        </p>        
      </header>
      <section className="App-body">
        <button className="btn" onClick={visualizarImpressao}>
          Visualizar documento
        </button>
      </section>
    </div>
   
  )
}

export default App
