import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';


function StadiumList(){
const [Stadiums, StadiumList ] = useState([
{name: "MetLife Stadium", city: "East Rutherford", team: "Jets", capacity: "82,566", mascot: "The Jets have no official mascot.", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "MetLife Stadium", city: "East Rutherford", team: "Giants", capacity: "82,566", mascot: "The Giants have no official mascot.", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "FedEx Field", city: "Landover", team: "Washington FT", capcity: "82,000", mascot: "'Team Mascot'", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Lambeau Field", city: "Green Bay", team: "Packers", capcity: "80,750", mascot: "The Packers have no official mascot.", mascot_bio: "The organiztion is named in honor of the Indian Packing Company.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "AT&T Stadium", city: "Arlington", team: "Cowboys", capcity: "80,000", mascot: "Rowdy", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Arrowhead Stadium", city: "Kansas City", team: "Chiefs", capcity: "76 416", mascot: "The Chiefs have two mascots: K. C. Wolf and Warpaint", mascot_bio: "K.C. Wolf is a grey-colored wolf. Warpaint is a pinto horse.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Empower Field", city: "Denver", team: "Broncos", capcity: "76,125", mascot: "The Broncos have two mascots: Miles, and Thunder II", mascot_bio: "Thunder II is an Arabian horse.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Bank of America Stadium", city: "Charlotte", team: "Panthers", capcity: "75,412", mascot: "Sir Purr", mascot_bio: "Sir Purr is a black panther.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Mercedes-Benz Superdome", city: "New Orleans", team: "Saints", capcity: "73,208", mascot: "The Saints have two mascots: Gumbo, Sir Saint", mascot_bio: "Gumbo was named after gumbo; a dish that is very common in the southern part of Louisiana.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "FirstEnergy Stadium", city: "Cleveland", team: "Browns", capcity: "72,300", mascot: "The Browns have THREE mascots!: Chomps, Swagger Jr., and Brownie the Elf", mascot_bio: "Chomps is named in honor of the team's Dawg Pound section at FirstEnergy Stadium. Swagger Jr. is a bull mastiff. The newest mascot, Sawgger met fans in 2019.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "NRG Stadium", city: "Houston", team: "Texans", capcity: "71,795", mascot: "Toro", mascot_bio: "A dark blue bull", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Highmark Blue Cross Blue Shield Stadium", city: "Buffalo", team: "Bills", capcity: "71,608", mascot: "Billy Buffalo", mascot_bio: "Billy Buffalo is an 8-foot tall buffalo.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "SoFi Stadium", city: "Inglewood", team: "Rams", capcity: "70,240", mascot: "Rampage", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "SoFi Stadium", city: "Inglewood", team: "Chargers", capcity: "70,240", mascot: "The Chargers have no official mascot.", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "M&T Bank Stadium", city: "Baltimore", team: "Ravens", capcity: "70,107", mascot: "The Ravens have THREE mascots!: Poe, Rise and Conquer", mascot_bio: "Poe was named after Edgar Allan Poe. Rise and Conquer are two live ravens.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Lincoln Financial Field", city: "Philadelphia", team: "Eagles", capcity: "69,176", mascot: "The Eagles have two mascots: Swoop and Air Swoop", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Nissan Stadium", city: "Nashville", team: "Titans", capcity: "69,143", mascot: "T-Rac", mascot_bio: "T-Rac is a raccoon, the state animal of Tennessee.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Levi's Stadium", city: "Santa Clara", team: "49ers", capcity: "68,983", mascot: "Sourdough Sam", mascot_bio: "Sourdough Sam is a prospector who went to California to seek a fortune during the 1849 California Gold Rush", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Heinz Field", city: "Pittsburgh", team: "Steelers", capcity: "68,400", mascot: "Steely McBeam", mascot_bio: "A burly steelworker with a head coach Bill Cowher like chin line based on the Steelers' logo in the 1950s-early 1960s.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "TIAA Bank Field", city: "Jacksonville", team: "Jaguars", capcity: "67,814", mascot: "Jaxson de Ville", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "U.S. Bank Stadium", city: "Minneapolis", team: "Vikings", capcity: "66,665", mascot: "Viktor", mascot_bio: "Viktor is a smiling Viking caricature whose head looks similar to the Vikings logo.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Raymond James Stadium", city: "Tampa Bay", team: "Buccaneers", capcity: "65,857", mascot: "Captain Fear", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Paul Brown Stadium", city: "Cincinnati", team: "Bengals", capcity: "65,515", mascot: "Who Dey", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Hard Rock Stadium", city: "Miami", team: "Dolphins", capcity: "65,326", mascot: "T.D.", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Ford Field", city: "Detroit", team: "Lions", capcity: "65,000", mascot: "Roary", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Allegiant Stadium", city: "Las Vegas", team: "Raiders", capcity: "65,000", mascot: "Raider Rusher", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "State Farm Stadium", city: "Glendale", team: "Cardinals", capcity: "63,400", mascot: "Big Red", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Lucas Oil Stadium", city: "Indianapolis", team: "Colts", capcity: "63,000", mascot: "Blue", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Mercedes-Benz Stadium", city: "Atlanta, Georgia", team: "Falcons", capcity: "71,000", mascot: "Freddie Falcon", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Lumen Field", city: "Seattle, Washington", team: "Seahawks", capcity: "69,000", mascot: "The Seahawks have THREE mascots!: Blitz, Boom, and Taima", mascot_bio: "", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Gillette Stadium", city: "Foxborough, Massachusetts", team: "New England Patriots", capcity: "65,878", mascot: "Pat Patriot", mascot_bio: "Pat Patriot is a patriot from the American Revolution. He is named after the nickname of the team's original logo.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
{name: "Soldier Field", city: "Chicago, Illinois", team: "Bears", capcity: "61,500", mascot: "Staley Da Bear", mascot_bio: "Staley has two eponyms. He was named after the team's original name, the Decatur Staleys, as well as Bears founder A. E. Staley.", stadium_pic: "", mascot_pic: "", year_built: "",  background: ""},
]);

return (
    <>
    </>
)
}
const mapStateToProps = (state) => {
    return {
      Cards: state.Cards
    }
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    console.log("Deck loaded")
    return{
      findEntry: (cardDeck) => { dispatch({type: 'SET_CARDS', cardDeck})}
    }
  }

const  fetchList= () => {
    dispatch(setCards(StadiumList));
  };

  useEffect(() => {
    fetchList();
  }, []);

  console.log("Card Deck?", Stadiums);

  export default connect()(StadiumList);
 