import React from 'react'

function Footer() {
  return (
    // <footer></footer>
          <footer 
            className="Footer" 
            style={{ 
            //   backgroundColor: "#18181b", 
              display: "flex", 
              justifyContent: "center", 
            //   width: "1440px", 
            //   marginTop: "20px",
              // margin: "auto",
            }}
          >
            <p 
              style={{
                // paddingTop: "25px", 
                // paddingBottom: "25px",
                color: "whitesmoke",
              }}
            >
              Copyright &copy;2025
            </p>
        </footer>
  )
}

export default Footer