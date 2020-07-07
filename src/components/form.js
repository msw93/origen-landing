import React from "react";
import '../styles/layoutNew.css'

const Form = () => {
    return (  

      <div id="mc_embed_signup" className='bg-white b--black w-50-l w-50-m center shadow-2 br3'>
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
                className
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input
                type="text"
                defaultValue=""
                name="LNAME"
                className
                id="mce-LNAME"
              />
            </div>
            <div className="mc-field-group size1of2">
              <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
              <div className="datefield">
                <span className="subfield monthfield">
                  <input
                    className="birthday "
                    type="text"
                    pattern="[0-9]*"
                    defaultValue=""
                    placeholder="MM"
                    size={2}
                    maxLength={2}
                    name="BIRTHDAY[month]"
                    id="mce-BIRTHDAY-month"
                  />
                </span>{" "}
                /
                <span className="subfield dayfield">
                  <input
                    className="birthday "
                    type="text"
                    pattern="[0-9]*"
                    defaultValue=""
                    placeholder="DD"
                    size={2}
                    maxLength={2}
                    name="BIRTHDAY[day]"
                    id="mce-BIRTHDAY-day"
                  />
                </span>
                <span className="small-meta nowrap">( mm / dd )</span>
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
            </div>
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
      </div>
    );
  
}

export default Form;
