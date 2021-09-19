import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nura Tabanjeh
        </h1>

        <p className={styles.description}>
          Web Developer and Civil Engineer <br></br></p>
          <ul>
          <li> <a href="https://github.com/nuratabanjeh">My GitHub</a><br></br></li>
          <li> <a href="https://www.linkedin.com/in/nura-tabanjeh-0237391b9/">My linkedin</a><br></br></li>
          <li> <a href = "mailto: nuratabanjeh96@gmail.com">Send Me An Email</a><br></br></li>
          <li> <a href="tel:+962799810793">+962799810793</a></li>
        </ul>

        <div className={styles.grid}>
          
            <h2>Education &rarr;</h2>
                      <p>Bootcamp of Web Development,
          Code Fellows - ASAC, jordan – Amman ( 2021)<br></br>
          Bachelor Degree of Civil Engineering ,
          BAU – Jordan – Irbid(2014 - 2019)
          </p>
                  

          
            <h2>Programming Languages &rarr;</h2>
<ul>           
<li>HTML</li>
<li>CSS</li>
<li>Python</li>
<li>JavaScript</li>
</ul>

            <h2>Skills &rarr;</h2>
            <ul>           
<li>Django</li>
<li>REST framework</li>
<li>Docker</li>
<li>React Js</li>
<li>Bootstrap</li>
<li>MongoDb</li>
<li>PostgreSQL</li>
<li>Git</li>
<li>GitHub</li>
<li>VS Code</li>
<li>Heroku</li>
<li>Netlify</li>
<li>Tkinter</li>
<li>Linux Ubuntu</li>
<li>Next.js , Vercel</li>
<li>Tailwind CSS</li>
</ul>
        

            <h2>Projects &rarr;</h2>
            <ul>           
<li>(Maintenance Doctor) : this project was solving the issue of
finding a professional home maintenance workers and providing
jobs for these workers. Me and my team used HTML , CSS,
JavaScript to build our web application.</li> <br></br>
<li>(Capture It) : this project was a React application for
photographers “platform” , it allows them to search for random
photos using (API) , adding their photos, sharing them and
interaction on other peoples photos by comments or likes.</li><br></br>
<li>(Real Time Translator) : this project was a Python application for
translation (voice detection , Text detection, Camera detection ,
Language detection) using Python libraries for the backend and
Tkinter package for GUI.</li>
</ul> 
         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
