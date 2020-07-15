import React from "react";
import '../styles/mailchimpForm.css'

const Form = () => {
    return (  

      <div id="mc_embed_signup" className='bg-white b--black w-40-l w-50-m center shadow-2 br3'>
        <form
          action="https://gmail.us4.list-manage.com/subscribe/post?u=84aae6f5bad25a723b26a7f65&id=498e0af72c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate measure center"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                defaultValue=" "
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input
                type="text"
                defaultValue=""
                name="FNAME"
                className=""
                id="mce-FNAME"
              />
            </div>
    
            
            </div>{" "}
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{
                  display: "none"
                }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{
                  display: "none"
                }}
              />
            </div>{" "}
            {}
            <div
              style={{
                position: "absolute",
                left: "-5000px"
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_84aae6f5bad25a723b26a7f65_498e0af72c"
                tabIndex={-1}
                defaultValue
              />
            
            <div className="clear">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>


        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' />


 



      </div>
    );
  
}

export default Form;
