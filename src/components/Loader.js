import React from 'react'

const Loader = () => {
    return (
        <div style={{height: window.innerHeight - 50, display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Loader;