import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import Container from '../components/Container'
import LinkCTA from '../components/LinkCTA'

export default function LinkPage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montas - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/link' />
      <meta property='og:url' content='https://juliomontas.com/link' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/link" />
      <link rel="alternate" href="https://juliomontas.com/link" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/link" hreflang="es-us" />
    </Head>
      <div className={stylesHome.main}>
      <NavBar />
      <Container>
        <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            Social Links & Projects
          </h2>
          <div className="LinkList">
            <LinkCTA
              theme="card-false"
              title="Hello Code"
              summary="Archive of programming languages that have been developed from past to present to improve how software architects choose their stack."
              url="/side-project/hellocode-the-home-for-programming-languages"
            />
            <LinkCTA
              theme="card-true"
              title="Professional Portfolio"
              summary="Building Website, eCommerce, CMS and Mobile App."
              url="/"
              alt="Office Table and Chair"
              png="png/office-table-and-chair.png"
            />
            <LinkCTA
              theme="card-false"
              title="Meliorem"
              summary="Reward self task manager to stimulate your existence"
              url="side-project/meliorem-cultivating-your-passion-to-level-up"
            />
            <LinkCTA
              theme="card-true"
              title="SoundCloud"
              summary="Playing Minimal House / Techno"
              url="https://soundcloud.com/juliomontas"
              alt="Dj playing music"
              png="png/dj-playing-music.png"
            />
            <LinkCTA
              theme="card-false"
              title="Surveillance Culture"
              summary="A social experiment using the top social media channels to farm users sensitive data"
              url="side-project/surveillance-culture"
            />
            <LinkCTA
              theme="card-true"
              title="Unsplas"
              summary="Open source photography"
              url="https://unsplash.com/@juliomontas"
              alt="camera"
              png="png/camera.png"
            />
            <LinkCTA
              theme="card-false"
              title="Width - Take Over the Screen"
              summary="A two-player game in which you must defeat your opponents by clicking to take over the screen."
              url="side-project/width-take-over-the-screen"
            />
            <LinkCTA
              theme="card-true"
              title="Github"
              summary="Code portfolio in JavaScript and other programming languages"
              url="https://github.com/JulioMontas"
              alt="Creating new facility using VR technology"
              png="png/creating-new-facility-using-vr-technology.png"
            />
            <LinkCTA
              theme="card-false"
              title="COLOR"
              summary="Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory."
              url="side-project/basic-color-fundamentals"
            />
            <LinkCTA
              theme="card-true"
              title="Dribbble"
              summary="UI Design Portfolio"
              url="https://dribbble.com/juliomontas"
              alt="House plant for decoration"
              png="png/house-plant-for-decoration.png"
            />
          </div>
        </div>
      </Container>
      </div>
    </>
  );
}
