import React, { useRef, useState } from 'react'

function ProjectOverlay({children, header="", footer="", url="#"}) {
  const ref = useRef(null);
  const [showing, setShowing] = useState(false);
  const handleEnter = () => {
    setShowing(true);
  }
  const handleLeave = () => {
    setShowing(false);
  }

  return (
    <>
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <div className='relative'>
            {showing &&
              <div id="header" className='absolute top-0 left-0 z-10 bg-black opacity-60 w-full text-start p-1'>{header}</div>
            }
            { url === "#" ? 
              <div>{children}</div>
              :
              <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            }
            {showing &&
              <div id="footer" className='absolute bottom-0 left-0 z-10 bg-black opacity-60 w-full text-start p-1'>{footer}</div>
            }
          </div>
        </button>
        {/* <div>ProjectOverlay</div> */}
    </>
  )
}

export default ProjectOverlay