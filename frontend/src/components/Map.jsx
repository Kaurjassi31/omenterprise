import React from 'react'

const Map = () => {
  return (
    <>
       <div className="container-fluid mt-2 mb-2">
        {/* <div className="responsive-map"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27265.57006795245!2d75.56397823201634!3d31.325952605393123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b3b79997171%3A0x2a17d9f210b903a!2sOm%20Enterprises%20Group!5e0!3m2!1sen!2sin!4v1707371931685!5m2!1sen!2sin"
            width="100%"
            height="720"
            allowFullScreen=""
            Loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        {/* </div> */}
      </div>
      
    </>
  )
}

export default Map
