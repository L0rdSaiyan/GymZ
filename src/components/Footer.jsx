import styles from "./Footer.module.css"
import githubIcon from "./../images/githubicon.png"
import linkedinIcon from "./../images/linkedinIcon.png"
export default function Footer()
{
    return(
        <>
        <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} | Made with ❤ and ☕ by Victor Sales (Lord Saiyan)</p>
        <div className={styles.socialMedia}>
          <img src={githubIcon}
          alt="Github Profile"/>
          <img src={linkedinIcon}
          alt="Linkedin Profile"/>
        </div>
      </footer>
        </>
    )
}