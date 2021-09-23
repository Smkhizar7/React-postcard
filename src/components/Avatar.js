import icon from '../images/gamer.svg';
function Avatar(){
    return <div id="avatar-div">
        <h1 id="avatar-head">JUSTIN CASE</h1>
        <img src={icon} alt="profile pic" id="avatar-pic"/>
        <h1 id="avatar-footer">45 POSTS</h1>
    </div>
}
export default Avatar;