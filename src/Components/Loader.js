import React, {useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
function Loader() {
    let [loading, setLoading] = useState(true);
  
  return (
    <div >

<div className="sweet-loading" style={{width:"20%",margin:"0 auto",paddingTop:"10%", alignItems:"center"}}>
      <HashLoader
        color="#000000"
        loading={loading}
        cssOverride=""
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"

      />
    </div>

    </div>
  )
}

export default Loader