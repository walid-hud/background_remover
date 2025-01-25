import {AiOutlineUpload} from 'react-icons/ai'
import React, { useState } from "react"
const MainCard = () => {
  const [btnState, setBtnState] = useState('upload an image')
  const [IMGfile  , setIMGFile] = useState('')
  const [inputFile , setInputFile] = useState(null)
  const handleImgUpload = (file)=>{
    setInputFile(file)
      if(file && file.type.startsWith('image/')){
        const file_reader = new FileReader()
        file_reader.onload = (e)=>{
          setIMGFile(e.target.result)
        }
        file_reader.readAsDataURL(file)
        setBtnState('remove background')
      }
    }
  // read image stream
  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = IMGfile;
    link.download = inputFile.name.slice(0 , -4) +'_EDITED.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIMGFile(undefined)
    setBtnState('upload an image')

  }

  async function readImageFromStream(stream) {
    const reader = stream.getReader();
    console.log(reader)
    const chunks = [];
    let done, value;

    while (!done) {
        ({ done, value } = await reader.read());
        if (value) {
            chunks.push(value);
        }
    }

    const blob = new Blob(chunks);
    const url = URL.createObjectURL(blob);
    setIMGFile(url)
  }
  const getEditedImg = async () => {
    const formdata = new FormData();
    formdata.append("file",inputFile , inputFile.name);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch("http://localhost:8080", requestOptions);
      readImageFromStream(response.body)

    } catch (error) {
      console.error(error);
    }
    finally{
      setBtnState('Download')
    }
  }




  const handleBtnClick = () =>{
    if(btnState === 'upload an image'){
      document.querySelector("#input").click()
      
      
    }
    if(btnState === 'remove background'){
      getEditedImg()
      setBtnState('removing background...')
    }
    if(btnState === 'Download'){
      triggerDownload()
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
        justify-center outline-dashed outline-[rgb(253,253,255)]
        outline-[2px] outline-offset-[-2px] rounded-xl overflow-clip
         hover:bg-[#000]
        '
        
        >
          { IMGfile ? '' : <AiOutlineUpload className=' text-white z-1  scale-[5]' /> }
          { IMGfile ? <img src={IMGfile} alt={IMGfile.name} className='w-full h-full'></img> : " " }

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
        mt-10 px-4 py-2 rounded-xl hover:bg-transparent  hover:text-white
         
        '
        
        onClick={(e)=>{handleBtnClick()}}
        >
          
          {btnState}
        </button>
      </main>
    </>
  )
}

export default MainCard
