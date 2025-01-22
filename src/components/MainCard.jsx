import {AiOutlineUpload} from 'react-icons/ai'
import { useState } from "react"
const MainCard = () => {
  const [btnState, setBtnState] = useState('upload an image')
  const [IMGfile  , setIMGFile] = useState('')
  const handleImgUpload = (file)=>{
    console.log(file)

  }

  const getImage = async (file)=>{


  }
  const handleBtnClick = (text) =>{
    if(text === 'upload image'){
      
      
    }
  }
  return (
    <>
      <main className='
      w-full h-screen flex flex-col items-center
      justify-center
      '>
        <div className='
        w-[300px] h-[fit] min-h-[300px] -mt-[10%] flex flex-col items-center
        justify-center outline-dashed outline-white
        outline-2 rounded-xl overflow-hidden
         hover:bg-[#000]
        '>
          { IMGfile ? '' : <AiOutlineUpload className=' text-white  scale-[6]' /> }
          <input type="file" id='input' multiple={false} accept='image/jpeg , image/png' 
          className='
          z-1 absolute opacity-0 w-[400px] h-[300px]
          '
          onChange={(e)=>handleImgUpload(e.target.files[0])}
          />
        </div>

        <button className='
        bg-white text-black font-sans text-lg font-medium
        mt-10 px-4 py-2 rounded-xl hover:bg-transparent hover:text-white
         hover:border hover:border-white hover:border-solid  
        '
        onClick={(e)=>{handleBtnClick(e.target.innerText)}}
        >
          
          upload image
        </button>
      </main>
    </>
  )
}

export default MainCard
