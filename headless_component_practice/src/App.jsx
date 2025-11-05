import Menu from "./components/Menu/index"
// import Toggle from "./components/Toggle/index"
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

      <Star onChange={()=>{}}/>

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

      <Menu onOpen={()=>console.log("Menu toggled")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.MenuDropdown>
          <Menu.MenuItem>Home</Menu.MenuItem>
          <Menu.MenuItem>About</Menu.MenuItem>
          <Menu.MenuItem>Left</Menu.MenuItem>
          <Menu.MenuItem>Right</Menu.MenuItem>
        </Menu.MenuDropdown>
      </Menu>
    </>
  )
}

export default App
