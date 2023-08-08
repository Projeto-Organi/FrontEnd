
import './Home.css';
import homeLogo from '../../assets/images/Home.jpg'
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="bg-lime-950 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Encontre seus produtos orgânicos</p>
  
              <div className="flex justify-around gap-4">

                <ModalProduto />
                
                <Link to='/produtos'>
                  <button className='rounded bg-white text-lime-950 py-2 px-4'>Ver Loja</button>
                </Link>
                
              </div>
            </div>
  
            <div className="flex justify-center">
              <img src={homeLogo} alt="" className='w-2/2 rounded-lg' />
      
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;