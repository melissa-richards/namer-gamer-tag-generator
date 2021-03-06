import Api from "./Api.js";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  
//render the application
  return <div className="App">
      <div className="wrapper">
        <Header />
        <Api />
      </div>
      <Footer />
    </div> 

}

export default App;


//NAMER: pseudo code
//Homepage with NAMER title and purpose of the app in an h2
// Input field for user to type in any name, word, nickname or number they wish to start their gamer tag with.
// A button below the imput that says 'generate'
 //-button has an eventlistener added to it to pull the random word from the api
 //pair user input with api data
// name tag results generates on the page in a seprate container below the button in a list form



//stretch goals
//the user can like the generated gamertag
//user can close out generated tags they do not like
// multiple tags show up on the page
//the user can input many different names one after another to populate the page
//when the button is pushed an animation happens
//liked tags are stored in a list like a shopping bag<did not complete