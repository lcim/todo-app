import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaRegCopyright } from "react-icons/fa";

export default function Footer () {

  return (
    <footer>
    <div className="socials">
      <p className="feedback">connect @</p>
      <div className="fa-icons">
          <a href="https://web.facebook.com/chiadikobi.ihecherobi/" target="_blank" rel="noreferrer"><FaFacebook className="fa-ikons"/></a>
        <a href="https://twitter.com/NoSecondChance7" target="_blank" rel="noreferrer"><FaTwitter className="fa-ikons"/></a>  
          <a href="https://www.linkedin.com/in/leonard-ihecherobi-9b57149/" target="_blank" rel="noreferrer"><FaLinkedin className="fa-ikons"/></a>
        <a href="https://github.com/lcim/" target="_blank" rel="noreferrer"><FaGithub className="fa-ikons"/></a>  
        <a href="https://www.instagram.com/tracepath/" target="_blank"  rel="noreferrer"><FaInstagram className="fa-ikons"/></a>  
        <a href="https://www.youtube.com/channel/UCcQiOUaMLkJpCi2OfiQsVWQ" target="_blank"  rel="noreferrer"><FaYoutube className="fa-ikons"/></a>
        </div>
      </div>
        <div className="copyrights">
          <hr className="liner" />
          <span className="copyrights-name"><FaRegCopyright/> Chiadi 2023</span>
        </div>      
    </footer>  
    )
}
//     

    //     </div>
    // className="copyrights"><FontAwesomeIcon icon="fa-regular fa-copyright" /> Chiadi 2023</p>
    //   </div>
    //   </div>
    // </footer> </div>
//©