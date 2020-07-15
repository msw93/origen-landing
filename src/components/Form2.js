import React from "react";
import '../styles/mailchimpForm.css'
import addToMailchimp from 'gatsby-plugin-mailchimp'




const initalState = {
  registered: false,
  email: '',
  FNAME: '',
  LNAME: '',
};
  

export default class MyGatsbyComponent extends React.Component {



  constructor(props) {
    super(props);
    this.state = initalState;
  }


  // 1. via `.then`
  _handleSubmit = (e) => {
    e.preventDefault();

    console.log('This is the state email: ', this.state.email)
    console.log('This is the state First Name: ', this.state.FNAME)
    console.log('This is the state Last Name: ', this.state.LNAME)



    addToMailchimp(this.state.email, {FNAME: this.state.FNAME, LNAME: this.state.LNAME}) // listFields are optional if you are only capturing the email address.
    .then(data => {
      console.log('Mailchimp response', data)
      if(data.result === 'success'){
        this.setState({registered:true})
      } else {
        alert("Error signing up! Please try again.")
      }
    })
    .catch(() => {
    })
    this.setState({email: '', FNAME: '', LNAME: '',})
  }


  render () {
    console.log("State after reseting", this.state)
    const { registered } = this.state;

    if(!registered)
    return (

        <div id="mc_embed_signup" className='bg-white b--black w-40-l w-50-m center shadow-2 br3'>
        <form
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate measure center"
          
          onSubmit={this._handleSubmit}
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
                onChange={event => {
                  this.setState({email: event.target.value})
                  console.log('state:', this.state.email)
                 }}
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
                onChange={event => {
                  this.setState({FNAME: event.target.value})
                  console.log('state FirstName: ', this.state.FNAME)
                }}/>
            </div>

            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input 
                type="text" 
                name="LNAME" 
                id="mce-LNAME" 
                defaultValue=""
                onChange={event => {
                  this.setState({LNAME: event.target.value})
                  console.log('state LastName: ', this.state.LNAME)
                }}
              />
            </div>

            </div>
            <div className="">
              <button className="br-pill f5 grow white bg-dark-blue ph3 pv1" type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
    else return (
      <h1 className="white"> Thanks for signing up! </h1>
    )
  }
}




