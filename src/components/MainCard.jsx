import {AiOutlineUpload} from 'react-icons/ai'
import { useState } from "react"
const MainCard = () => {
  const [btnState, setBtnState] = useState('upload an image')
  const [IMGfile  , setIMGFile] = useState('')
  const handleImgUpload = (file)=>{
      if(file && file.type.startsWith('image/')){
        const file_reader = new FileReader()
        file_reader.onload = (e)=>{
          setIMGFile(e.target.result)
        }
        file_reader.readAsDataURL(file)
        setBtnState('remove background')
      }
    

    }


  const getImage = async (UploadedImg)=>{


  }
  const handleBtnClick = (text) =>{
    if(text === 'upload an image'){
      document.querySelector("#input").click()
      
    }
  }
  return (
    <>
      <main className='
      w-full h-screen flex flex-col items-center
      justify-center
      box-border
      '>
        <div className='
        w-fit min-h-[250px] min-w-[300px] max-w-[500px] max-h-[300px]  -mt-[10%] flex flex-col items-center
        justify-center outline-dashed outline-white
        outline-2 rounded-xl overflow-clip
         hover:bg-[#000]
        '
        
        >
          { IMGfile ? '' : <AiOutlineUpload className=' text-white z-1  scale-[5]' /> }
          { IMGfile ? <img src={IMGfile}  className='w-full h-full'></img> : " " }

          <input type="file" id='input' title={IMGfile ? "click again to choose a different img " : 'click to upload an img'} multiple={false} accept='image/jpeg , image/png , image/jpg' 
          className='
          z-2 absolute opacity-0 
          min-h-[150px] min-w-[300px] max-w-[500px] max-h-[300px]
          '
          
          onChange={(e)=>handleImgUpload(e.target.files[0])}
          />
        </div>

        <button className='
        bg-white text-black font-sans text-lg font-medium
        mt-10 px-4 py-2 rounded-xl hover:bg-transparent hover:text-white
         
        '
        onClick={(e)=>{handleBtnClick(e.target.innerText)}}
        >
          
          {btnState}
        </button>
      </main>
    </>
  )
}

export default MainCard
