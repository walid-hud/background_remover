import {AiOutlineUpload} from 'react-icons/ai'
import { useState } from "react"
const MainCard = () => {
  const [btnState, setBtnState] = useState('remove background')

  const removeBG = async () => {
    const editedImg = await fetch(removeBG)

  }
  return (
    <>
      <section >
        <div className="card-container">
          <div className="img-container">
            <div className="input-wrapper">
              <AiOutlineUpload className='icon'/>
              <input type='file' className="img-input" size={2} multiple={false} />
            </div>
          </div>
          <button onClick={() => setBtnState('Download')} className="submit-button">
            {btnState}
          </button>
        </div>
      </section>
    </>
  )
}

export default MainCard
