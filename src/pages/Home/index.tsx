import React from 'react'
import cls from './Home.module.scss'

const Home = () => {
  return (
    <div className={cls.root}>
      <section className={cls.startScreen}>
        <img
          className={cls.background}
          src="https://images.prismic.io/superpupertest/b57cd112-8bdd-4e51-9ee3-0f91d638e143_about_us_.webp?auto=compress,format"
          alt="logo"
        />
        <div className={cls.about}>
          <h1>CRYXXEN</h1>
          <h4>Engineering Your Growth</h4>
          <p>
            We dedicate ourselves to bringing value
            to any project we work on
          </p>
          <button>Let's talk</button>
        </div>
      </section>

      <section className={cls.mission}>
        <div className={cls.about}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to automate everything to facilitate the adoption of digital solutions and untangle issues
            that emerge during periods of rapid growth to ensure smooth scaling.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
