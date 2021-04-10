import {Header, Counters, Settings, StartCounter} from './components'
import './styles/all.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const themesArr = [{class:'tomato-theme', code:'#f87070', active: true},
                {class:'cyan-theme', code:'#70f3f8', active: false},
                {class:'purple-theme', code:'#d881f8', active: false}];

const fontsArr = [{title:'Kumbh Sans', fontWeight:'700', active: true},
                {title:'Roboto Slab', fontWeight:'700', active: false},
                {title:'Space Mono', fontWeight:'400', active: false}];

function App() {

  const [isSettingsActive, setSettingsActive] = React.useState(false);
  const [themes, setThemes] = React.useState(themesArr);
  const [fonts, setFonts] = React.useState(fontsArr);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(()=> {
    const settings = localStorage.getItem('pomodoro-settings') || null;
    if(settings !== null) {
      const {themes, fonts, timer} = JSON.parse(settings);
      setThemes(themes);
      setFonts(fonts);
      setTimer(timer);
    }
  }, [])
  
  const saveToLocalStorage = () => {
    const settings = {
      themes, fonts, timer
    };
    localStorage.setItem('pomodoro-settings', JSON.stringify(settings));
  }

  React.useEffect(saveToLocalStorage, [themes, fonts, timer])

  const handleSettingsIconClick = () => {
    setSettingsActive(!isSettingsActive);
  }
  const handleThemeClick = (theme) => {
    const newThemes = themes.map((item) => {
      return {...item, active: item.class === theme.class};
    })
    setThemes(newThemes);
  }
  const handleFontClick = (font) => {
    const newFonts = fonts.map((item) => {
      return {...item, active: item.title === font.title};
    })
    setFonts(newFonts);
  }
  const handleTimerReset = () => {
    setTimer(() => {
      return 0;
    });
  }
  const handleStartCounterClick = (time) => {
    setTimer(time);
  }
  const activeTheme = themes.find((item) => item.active);
  const activeFont = fonts.find((item) => item.active);

  return (
    <div className={`app ${activeTheme.class}`} 
         style={{fontFamily:activeFont.title, fontWeight:activeFont.fontWeight}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <StartCounter onStartClick={handleStartCounterClick}></StartCounter>
          </Route>
          <Route exact path="/count">
            {
              timer !== 0 ? (
                <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                  <Header />
                  <Counters onResetClick={handleTimerReset} timer={timer}/>
                </div>
              ):
              <div>
                Please set timer <Link to="/">Here</Link>
              </div>
            }
          </Route>
        </Switch>
      </Router>
      <Settings onThemeClick={handleThemeClick}
                      onCloseClick={handleSettingsIconClick}
                      onFontClick={handleFontClick}
                      isOpened={isSettingsActive} themes={themes} fonts={fonts} timer={timer}/>
      <div className="settings-icon-box">
        <span onClick={handleSettingsIconClick} className="settings-icon"></span>
      </div>
    </div>
  );
}

export default App;
