
type themeChangerProps={
    themeChange:(theme:string)=>void
}
const Header = ({themeChange}:themeChangerProps) => {
  return (
    <div className="header">
        <h1>calc</h1>
        <h6>Theme</h6>
        <div className="input">
            <input id="theme1" type="radio" name="theme" value="0" defaultChecked onClick={() => themeChange('0')} />
          <label htmlFor="theme1">1</label>
          <input id="theme2" type="radio" name="theme" value="1" onClick={() => themeChange('1')} />
          <label htmlFor="theme2">2</label>
          <input id="theme3" type="radio" name="theme" value="2" onClick={() => themeChange('2')} />
          <label htmlFor="theme3">3</label>
        </div>
    </div>
  )
}

export default Header