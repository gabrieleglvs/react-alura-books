import './estilo.css'
import logo from '../../imagens/logo.svg'

//componentes são funções javascript que retorna JSX
function Logo(){
  return (
    <div className='logo'>
      <img src={logo} alt='logo' className='logo-img'></img>
      <p><strong>Alura</strong>Books</p>
    </div>
  )
}

export default Logo;