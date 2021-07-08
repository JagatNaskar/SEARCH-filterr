
import './About.css';
import React, { Component } from 'react';
import logo from '/Users/jagatnasakar/Documents/reactjs/jsx-form/src/jagat.png';
class About extends Component {
render() {
return (
<div className="condiv">
<div><img src={logo} alt="Logo" className="profilepic"/></div>
{/* <img src='/Users/jagatnasakar/Documents/reactjs/jsx-form/jagat.png' className="profilepic"></img> */}
<h4>Hey there,</h4>
<h1>I'm Jagat Naskar</h1>
<h3>Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
<br></br>
<p>I started my journey in the world of computers from an young age,
now I’m 20 years old, Pursuing my MCA Degree in
MANIT.  Web development is my center of interest, i always
love the idea of cross-platform development, 1-n one code base deploy into almost
any platform, which web technology like Javascript enables me to do. I also like
creating Interactive UI components for better UX  and share those desgin and codes
to the world through Github, Codepen and Instagram.
</p>
</div>
)
}
}
export default About;

// import React from 'react'

// const About=()=>{
//     return<h1> Assignment page</h1>;
// }

// export default About;
