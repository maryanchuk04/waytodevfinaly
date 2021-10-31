import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className = "footer">
            <div className = "container">
                <div className = "alloffooter">
                    <div className = "logo">
                        <a href="/"><img src="https://i.ibb.co/F4qvsyq/viber-2021-09-24-11-01-32-719.png" alt="WayToDev" border="0" height = "100px" width = "100px"/></a>
                        <a href="/">
                            <h1>WayToDev</h1>  
                            <h2>Break your path into the future</h2>
                        </a>
                    </div>    
                    <div className = "links"> 
                        <div className = "boxik">
                            <div className = "headlinks"><p>Information</p></div>
                            <ul>
                                <li><a href = "#">About Us</a></li>
                                <li><a href = "#">Directory</a></li>
                                <li><a href = "#">About Us</a></li>
                                <li><a href = "#">Directory</a></li>
                            </ul>
                        </div>
                        <div className = "boxik">
                            <div className = "headlinks"><p>DADADADADA</p></div>
                                <ul>
                                    <li><a href = "#">About Us</a></li>
                                    <li><a href = "#">Directory</a></li>
                                    <li><a href = "#">About Us</a></li>
                                    <li><a href = "#">Directory</a></li>
                                </ul>
                            </div>
                            <div className = "boxik">
                            <div className = "headlinks"><p>Pages</p></div>
                                <ul>
                                    <li><a href = "#">Posts</a></li>
                                    <li><a href = "#">Courses</a></li>
                                    <li><a href = "#">Books</a></li>
                                    <li><a href = "#">Directory</a></li>
                                </ul>
                            </div>
                    </div>      
                    
                </div>
                <div className = "socialsbuttons">
                <a href="https://www.facebook.com/programsLife/" target="_blank">
                    <i class="fab fa-facebook-f" height ="100px"></i>
                </a>

                <a href="https://twitter.com/GoshaDudar" target="_blank" >
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/user/PlurrimiTube" target="_blank"  >
                    <i class="fab fa-youtube"></i>
                    </a>
                <a href="http://t.me/itProger_official" target="_blank" >
                    <i class="fab fa-telegram-plane"></i>
                    </a>
                    <a href="https://www.instagram.com/itproger_official/" target="_blank"  >
                    <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
