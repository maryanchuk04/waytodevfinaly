import React from 'react'
import './Footer.css'
import { Link as LinkScroll } from "react-scroll";
import   {Link } from "react-router-dom"

function Footer() {
    return ( <div class = "footer" >
        <footer class = "footer" >
        <div class = "container bottom_border" >
        <div class = "row" >
        <div class = " col-sm-4 col-md col-sm-4  col-12 col" >
        <h5 class = "headin5_amrc col_white_amrc pt2" > About us </h5>
        <p class = "mb10" > WayToDev - The way to your future.Our team will help you to develope your way to IT - industry.So
        if you want to learn more, don 't forget to Sign-up.</p> 
        <p > < i class = "fa fa-phone" > </i>  +38 050 738 26 34 </p >
        <p> <i class = "fa fa fa-envelope" > </i> waytodev@gmail.com  </p >
        </div>


        <div class = " col-sm-4 col-md  col-6 col" >
        <h5 class = "headin5_amrc col_white_amrc pt2" > Quick links </h5>

        <ul class = "footer_ul_amrc" >
        <li > < Link to = "/login" > Sign - Up </Link></li >
        {/* <li > <LinkScroll to = "aboutlang"
        className = "scrollDown"
        spy = { true }
        offset = {-50 }
        smooth = { true }
        duration = { 500 } >
        Subscribe to us 
        </LinkScroll></li > */}
        <li> < Link to = "/books" > Books </Link></li >
        </ul>
        </div>

        <div class = " col-sm-4 col-md  col-6 col" >
        <h5 class = "headin5_amrc col_white_amrc pt2  footer_ul_h" > Quick links </h5> 
        <ul class = "footer_ul_amrc footer_ul_link2" >
        <li > < Link to = "/courses"
        className = "scrollDown" >
        Courses 
        </Link></li >
        <li > <Link to= "/profile" > Profile </Link></li >
        {/* <li > < LinkScroll to = "aboutlang"
        className = "scrollDown"
        spy = { true }
        offset = {-50 }
        smooth = { true }
        duration = { 500 } >
        Send a feedback 
        </LinkScroll></li > */}
        </ul>

        </div>


        <div class = " col-sm-4 col-md  col-12 col" >
        <div className = "logo pt2" >
        <a href = "/" > < img src = "https://i.ibb.co/F4qvsyq/viber-2021-09-24-11-01-32-719.png"
        alt = "WayToDev"
        border = "0"
        height = "100px"
        width = "100px" /> </a> 
        <a href = "/" >
        <p class = "logo_tittle" > WayToDev </p>  
         <p class = "logo_text" > Break your path into the future </p> </a> </div> 

        </div> </div> </div>


        <div class = "container" >
        <ul class = "foote_bottom_ul_amrc" >
        <li > <Link to = "/posts" > IT ARTICLES </Link></li >
        <li > <Link to  = "/courses" > COURSES </Link></li >
        <li > <Link to = "/books" > BOOKS </Link></li >
        {/* <li > <Link to = "/contacts" > CONTACTS </Link></li > */}
        </ul>

        <p class = "text-center" > WayToDev @2021 | Designed With by < Link to = "/" > WayToDev </Link></p >

        <ul class = "social_footer_ul" >
        <li > < a href = "https://www.facebook.com/profile.php?id=100074416986513" target="_blank " > < i class = "fab fa-facebook-f" > </i></a > </li> 
        <li > < a href = "https://twitter.com/SDvoryannikov" target="_blank " > < i class = "fab fa-twitter" > </i></a > </li> 
        <li > < a href = "https://www.linkedin.com/in/serhiy-dvoryannikov-83559a207/" target="_blank " > < i class = "fab fa-linkedin" > </i></a > </li> 
        <li > < a href = "https://www.instagram.com/dvoriannikovsergii/" target="_blank " > < i class = "fab fa-instagram" > </i></a > </li> 
        </ul>

        </div>

        </footer>


        <script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin = "anonymous" > </script> 
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity = "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin = "anonymous" > </script> <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity = "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin = "anonymous" > </script>


        </div>
    )
}

export default Footer;