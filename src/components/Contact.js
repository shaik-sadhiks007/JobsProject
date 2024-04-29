import React from 'react'

function Contact() {
    
    return (
        <>
            <div className="final d-flex flex-column shadow p-3">
                <div className="email d-flex flex-row align-items-center">
                    <i className="fa-solid fa-envelope fs-5 me-2"></i>
                    <h5 className="m-0">Email me for jobs</h5>
                </div>
                <p className="mt-3">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
                <input type="email" className="mb-3" name="" id="mail" placeholder="name@mail.com" />
                    <button className="btn contact-btn">Subcribe</button>
            </div>
            <div className="final d-flex flex-column shadow p-3 mt-4">
                <div className="email d-flex flex-row align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"
                        style={{height: "40px"}}></img>
                    <h5>Get noticed faster</h5>
                </div>
                <p className="mt-3">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>

                <button className="btn contact-btn">Upload Your resume</button>
            </div>
        </>
    )
}

export default Contact
