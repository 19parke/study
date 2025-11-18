import Menu from "./components/Menu/index"
import Toggle from "./components/Toggle/index"
import Star from "./Star"

function App() {

  return (
    <>
      {/* <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled"/>
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle> */}

      {/* <Star onChange={()=>{}}/> */}
      
      {/* Custom Hook */}
      {/* <Star /> */}

      <br/>

      {/* <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.MenuDropdown>
              <Menu.MenuItem>Home</Menu.MenuItem>
              <Menu.MenuItem>About</Menu.MenuItem>
              <Menu.MenuItem>Left</Menu.MenuItem>
              <Menu.MenuItem>Right</Menu.MenuItem>
            </Menu.MenuDropdown>
          </Toggle.On>
        </Menu>
      </Toggle> */}

      {/* <Menu onOpen={()=>console.log("Menu toggled")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.MenuDropdown>
          <Menu.MenuItem>Home</Menu.MenuItem>
          <Menu.MenuItem>About</Menu.MenuItem>
          <Menu.MenuItem>Left</Menu.MenuItem>
          <Menu.MenuItem>Right</Menu.MenuItem>
        </Menu.MenuDropdown>
      </Menu> */}



      {/* Custom Hook */}
      <Menu onOpen={() => console.log("Open/Closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.MenuDropdown>
          <Menu.MenuItem>Home</Menu.MenuItem>
          <Menu.MenuItem>About</Menu.MenuItem>
          <Menu.MenuItem>Left</Menu.MenuItem>
          <Menu.MenuItem>Right</Menu.MenuItem>
        </Menu.MenuDropdown>
      </Menu>


      {/* <Toggle onToggle={()=>console.log("Toggle")}>
        <Toggle.Button> */}
          {/* Using Toggle Display Instead of Toggle.On/Off */}
          {/* <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off> */}
          {/* <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle> */}
    </>
  )
}

export default App
