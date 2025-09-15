import Entry from "./components/Entry"
import Header from "./components/Header"
import travelData from "./data"

function App() {

  const travel = travelData.map((place) => {
    return <Entry
            key={place.id}
            // img={place.img}
            // place={place}
            {...place}
          />
  })

  return (
    <>
      <Header/>
      <main className="container">
        {travel}
      </main>
    </>
  )
}

export default App
