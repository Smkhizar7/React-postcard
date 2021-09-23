import img from '../images/waving-hand.png';
function Bio(){
    return <div id="bio-div">
        <h1 id="bio-head">Bio</h1>
        <p id="bio-text">Hello <img src={img} alt="hi" id="hi"/>, my name is Justin. I am UI developer working with React on variety of Jamstack projects. Part of my time is also dedicated to blogging and open source.</p>
        <p id="bio-footer"><span>View Skills</span><span>Joined: 01.01.2021</span></p>
    </div>
}
export default Bio;