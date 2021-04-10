import React from 'react'

const Settings = ({isOpened = false, onCloseClick=f=>f,
     themes=[], fonts=[], onThemeClick=f=>f, onFontClick=f=>f}) => {
  return (
    <div className={isOpened ? "settings opened" : "settings"}>
      <div className="settings__wrapper">
        <div className="settings__header">
          <p className="settings__title">Settings</p>
          <span onClick={onCloseClick} className="settings__close"></span>
        </div>
        <div className="settings__body">
          <div className="settings__section">
            <p className="settings__section--title">Font</p>
            <div className="settings__section-group">
              {
                fonts &&
                fonts.map((font, i) => {
                  return <span key={`${font}_${i}`}
                               style={{fontFamily:font.title, fontWeight:font.fontWeight}} onClick={() => onFontClick(font)}
                               className={ font.active?'settings__font active': 'settings__font' }>
                            Аа
                          </span>
                })
              }
            </div>
          </div>
          <div className="settings__section">
            <p className="settings__section--title">Color</p>
            <div className="settings__section-group">
              {
                themes &&
                themes.map((theme, i) => {
                  return <span key={`${theme}_${i}`}
                               style={{backgroundColor:theme.code}} onClick={() => onThemeClick(theme)}
                               className={ theme.active?'settings__color active': 'settings__color' }>
                          </span>
                })
              }
            </div>
          </div>
          <div className="settings__button-box">
            <button onClick={onCloseClick} className="settings__button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
