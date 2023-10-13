import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Root() {

  return (
    
    <div class="home">
    <a>Текст</a>

    <div class="main">
      <Header>
        <div class="header__navigation">
          <div class="header__navigation-links">
            <div class="navigation-link">
              Home
            </div>
            <div  class="navigation-link">
              Features
            </div>
            <div  class="navigation-link">
              FAQ
            </div>
          </div>
        </div>

        <div class="burger-button">
          <img src="@/assets/images/burger.svg" alt=""/>
        </div>
      </Header>
      {/*<Hero />
       <Monitors />
      <Features />
      <Faq />
      <Tweets /> */}
      <img src="@/assets/images/index/background/bcg-wave-1.png" alt="" class="decoration-vector wave--monitors"/>
      <img src="@/assets/images/index/background/bcg-wave-2.png" alt="" class="decoration-vector wave--footer"/>
    </div>
  </div>
  )
}

export default Root
