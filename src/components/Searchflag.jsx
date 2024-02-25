import React, { useRef } from 'react'

const Searchflag = ({onSearchTerm}) => {

    const inputRef = useRef("");

    const handleChange = () => {
        const input = inputRef.current.value;
        onSearchTerm(input);
    }
  return (
    <div style={{width: "100%", borderBottom: "3px solid #dfdfdf", position: "sticky", top: 0, height: "80px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f7f7f7"}}>
        <input type="text" ref={inputRef} onChange={handleChange} style={{height: "30px", width: "60%", padding: "0 10px 0 10px"}} placeholder='Search for countries'/>
    </div>
  )
}

export default Searchflag