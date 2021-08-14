import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setStadiumList } from '../Actions/StadiumActions';



function StadiumList(){

  const dispatch = useDispatch();

const [Stadiums, StadiumList ] = useState([
{name: "MetLife Stadium", city: "East Rutherford", team: "Jets", capacity: "82,566", mascot: "The Jets have no official mascot.", mascot_bio: "The Jets have no official mascot.", stadium_pic: "", mascot_pic: "Jets.jpg", year_built: "2010",  background1: "#125740", background2: "#FFFFFF"},
{name: "MetLife Stadium", city: "East Rutherford", team: "Giants", capacity: "82,566", mascot: "The Giants have no official mascot.", mascot_bio: "The Giants have no official mascot.", stadium_pic: "", mascot_pic: "Giants.jpg", year_built: "2010",  background1: "#0B2265", background2: "#A71930"},
{name: "FedEx Field", city: "Landover", team: "Washington FT", capcity: "82,000", mascot: "'Team Mascot'", mascot_bio: "The Washington Football Team has no official mascot.", stadium_pic: "", mascot_pic: "washington_football_team.jpg", year_built: "1997",  background1: "#773141", background2: "#FFB612"},
{name: "Lambeau Field", city: "Green Bay", team: "Packers", capcity: "80,750", mascot: "The Packers have no official mascot.", mascot_bio: "The organiztion is named in honor of the Indian Packing Company.", stadium_pic: "", mascot_pic: "Packers.jpg", year_built: "1957",  background1: "#203731", background2: "#FFB612"},
{name: "AT&T Stadium", city: "Arlington", team: "Cowboys", capcity: "80,000", mascot: "Rowdy", mascot_bio: "", stadium_pic: "", mascot_pic: "Cowboys_Rowdy.jpg", year_built: "2009",  background1: "#041E42", background2: "#869397"},
{name: "Arrowhead Stadium", city: "Kansas City", team: "Chiefs", capcity: "76 416", mascot: "The Chiefs have two mascots: K. C. Wolf and Warpaint", mascot_bio: "K.C. Wolf is a grey-colored wolf. Warpaint is a pinto horse.", stadium_pic: "", mascot_pic: "Chiefs_KC_Wolf.jpg", year_built: "1972",  background1: "#E31837", background2: "#FFB81C"},
{name: "Empower Field", city: "Denver", team: "Broncos", capcity: "76,125", mascot: "The Broncos have two mascots: Miles, and Thunder II", mascot_bio: "Thunder II is an Arabian horse.", stadium_pic: "", mascot_pic: "Broncos_Miles.jpg", year_built: "2001",  background1: "#FB4F14", background2: "#002244"},
{name: "Bank of America Stadium", city: "Charlotte", team: "Panthers", capcity: "75,412", mascot: "Sir Purr", mascot_bio: "Sir Purr is a black panther.", stadium_pic: "", mascot_pic: "Panthers_Sir_Purr.jpg", year_built: "1996",  background1: "#0085CA", background2: "#101820"},
{name: "Mercedes-Benz Superdome", city: "New Orleans", team: "Saints", capcity: "73,208", mascot: "The Saints have two mascots: Gumbo, Sir Saint", mascot_bio: "Gumbo was named after gumbo; a dish that is very common in the southern part of Louisiana.", stadium_pic: "", mascot_pic: "Saints_Gumbo.jpg", year_built: "1975",  background1: "#D3BC8D", background2: "#101820"},
{name: "FirstEnergy Stadium", city: "Cleveland", team: "Browns", capcity: "72,300", mascot: "The Browns have THREE mascots!: Chomps, Swagger Jr., and Brownie the Elf", mascot_bio: "Chomps is named in honor of the team's Dawg Pound section at FirstEnergy Stadium. Swagger Jr. is a bull mastiff. The newest mascot, Sawgger met fans in 2019.", stadium_pic: "", mascot_pic: "Browns_Brownie.jpg", year_built: "1999",  background1: "#311D00;", background2: "#FF3C00"},
{name: "NRG Stadium", city: "Houston", team: "Texans", capcity: "71,795", mascot: "Toro", mascot_bio: "A dark blue bull", stadium_pic: "", mascot_pic: "Texans_Toro.jpg", year_built: "2002",  background1: "#03202F", background2: "#A71930"},
{name: "Highmark Blue Cross Blue Shield Stadium", city: "Buffalo", team: "Bills", capcity: "71,608", mascot: "Billy Buffalo", mascot_bio: "Billy Buffalo is an 8-foot tall buffalo.", stadium_pic: "", mascot_pic: "Bills_Billy_Buffalo.jpg", year_built: "1973",  background1: "#00338D", background2: "#C60C30"},
{name: "SoFi Stadium", city: "Inglewood", team: "Rams", capcity: "70,240", mascot: "Rampage", mascot_bio: "", stadium_pic: "", mascot_pic: "Rams_Rampage.jpg", year_built: "2020",  background1: "#003594", background2: "#FFD100"},
{name: "SoFi Stadium", city: "Inglewood", team: "Chargers", capcity: "70,240", mascot: "The Chargers have no official mascot.", mascot_bio: "Boltman is an unofficial mascot of the National Football League's San Diego Chargers.", stadium_pic: "", mascot_pic: "Chargers.jpg", year_built: "2020",  background1: "#0080C6", background2: "#FFC20E"},
{name: "M&T Bank Stadium", city: "Baltimore", team: "Ravens", capcity: "70,107", mascot: "The Ravens have THREE mascots!: Poe, Rise and Conquer", mascot_bio: "Poe was named after Edgar Allan Poe. Rise and Conquer are two live ravens.", stadium_pic: "", mascot_pic: "Ravens_Poe.jpg", year_built: "1998",  background1: "#241773", background2: "#9E7C0C"},
{name: "Lincoln Financial Field", city: "Philadelphia", team: "Eagles", capcity: "69,176", mascot: "The Eagles have two mascots: Swoop and Air Swoop", mascot_bio: "", stadium_pic: "", mascot_pic: "Philadelphia_Eagles_Swoop.jpg", year_built: "2003",  background1: "#004C54", background2: "#ACC0C6"},
{name: "Nissan Stadium", city: "Nashville", team: "Titans", capcity: "69,143", mascot: "T-Rac", mascot_bio: "T-Rac is a raccoon, the state animal of Tennessee.", stadium_pic: "", mascot_pic: "Titans_T-rac.jpg", year_built: "1999",  background1: "#4B92DB", background2: "#C8102E"},
{name: "Levi's Stadium", city: "Santa Clara", team: "49ers", capcity: "68,983", mascot: "Sourdough Sam", mascot_bio: "Sourdough Sam is a prospector who went to California to seek a fortune during the 1849 California Gold Rush", stadium_pic: "", mascot_pic: "49ers_Sourdough_Sam.jpg", year_built: "2014",  background1: "#AA0000", background2: "#B3995D"},
{name: "Heinz Field", city: "Pittsburgh", team: "Steelers", capcity: "68,400", mascot: "Steely McBeam", mascot_bio: "A burly steelworker with a head coach Bill Cowher like chin line based on the Steelers' logo in the 1950s-early 1960s.", stadium_pic: "", mascot_pic: "Steelers_Steely.jpg", year_built: "2001",  background1: "#FFB612", background2: "#101820"},
{name: "TIAA Bank Field", city: "Jacksonville", team: "Jaguars", capcity: "67,814", mascot: "Jaxson de Ville", mascot_bio: "", stadium_pic: "", mascot_pic: "Jacksonville_Jaxson.jpg", year_built: "1995",  background1: "#D7A22A", background2: "#006778"},
{name: "U.S. Bank Stadium", city: "Minneapolis", team: "Vikings", capcity: "66,665", mascot: "Viktor", mascot_bio: "Viktor is a smiling Viking caricature whose head looks similar to the Vikings logo.", stadium_pic: "", mascot_pic: "Vikings_Viktor_the_Viking.jpg", year_built: "2016",  background1: "#4F2683", background2: "#FFC62F"},
{name: "Raymond James Stadium", city: "Tampa Bay", team: "Buccaneers", capcity: "65,857", mascot: "Captain Fear", mascot_bio: "", stadium_pic: "", mascot_pic: "Buccaneers_Captain_Fear.jpg", year_built: "2000",  background1: "#D50A0A", background2: "#FF7900"},
{name: "Paul Brown Stadium", city: "Cincinnati", team: "Bengals", capcity: "65,515", mascot: "Who Dey", mascot_bio: "", stadium_pic: "", mascot_pic: "Bangals_ Who_Dey.jpg", year_built: "2000",  background1: "#FB4F14", background2: "#000000"},
{name: "Hard Rock Stadium", city: "Miami", team: "Dolphins", capcity: "65,326", mascot: "T.D.", mascot_bio: "", stadium_pic: "", mascot_pic: "Miami_Dolphins.jpg", year_built: "1987",  background1: "#008E97", background2: "#FC4C02"},
{name: "Ford Field", city: "Detroit", team: "Lions", capcity: "65,000", mascot: "Roary", mascot_bio: "", stadium_pic: "", mascot_pic: "Lions_Roary.jpg", year_built: "2002",  background1: "#0076B6", background2: "#B0B7BC"},
{name: "Allegiant Stadium", city: "Las Vegas", team: "Raiders", capcity: "65,000", mascot: "Raider Rusher", mascot_bio: "", stadium_pic: "", mascot_pic: "LV_Raider_Rush.jpg", year_built: "2020",  background1: "#000000", background2: "#A5ACAF"},
{name: "State Farm Stadium", city: "Glendale", team: "Cardinals", capcity: "63,400", mascot: "Big Red", mascot_bio: "", stadium_pic: "", mascot_pic: "Cardinals_Big_Red.jpg", year_built: "2006",  background1: "#97233F", background2: "#FFB612"},
{name: "Lucas Oil Stadium", city: "Indianapolis", team: "Colts", capcity: "63,000", mascot: "Blue", mascot_bio: "", stadium_pic: "", mascot_pic: "Colts_Blue.jpg", year_built: "2008",  background1: "#002C5F", background2: "#A2AAAD"},
{name: "Mercedes-Benz Stadium", city: "Atlanta, Georgia", team: "Falcons", capcity: "71,000", mascot: "Freddie Falcon", mascot_bio: "", stadium_pic: "", mascot_pic: "Falcons_Freddy.jpg", year_built: "2017",  background1: "#A71930", background2: "#000000"},
{name: "Lumen Field", city: "Seattle, Washington", team: "Seahawks", capcity: "69,000", mascot: "The Seahawks have THREE mascots!: Blitz, Boom, and Taima", mascot_bio: "", stadium_pic: "", mascot_pic: "Seahawks_Blitz.jpg", year_built: "2002",  background1: "#002244", background2: "#69BE28"},
{name: "Gillette Stadium", city: "Foxborough, Massachusetts", team: "New England Patriots", capcity: "65,878", mascot: "Pat Patriot", mascot_bio: "Pat Patriot is a patriot from the American Revolution. He is named after the nickname of the team's original logo.", stadium_pic: "", mascot_pic: "PatPatriot.jpg", year_built: "2002",  background1: "#002244", background2: "#C60C30"},
{name: "Soldier Field", city: "Chicago, Illinois", team: "Bears", capcity: "61,500", mascot: "Staley Da Bear", mascot_bio: "Staley has two eponyms. He was named after the team's original name, the Decatur Staleys, as well as Bears founder A. E. Staley.", stadium_pic: "", mascot_pic: "Chicago_Staleythebear.jpg", year_built: "1924",  background1: "#0B162A", background2: "#C83803"},
]);


const fetchStadiums = () => {
  dispatch(setStadiumList(Stadiums));
};

useEffect(() => {
  fetchStadiums();
}, []);

return (
    <>
    </>
)
}
const mapStateToProps = (state) => {
    return {
      Staduim: state.Stadium
    }
  
  }
  

  console.log("Stadiums:", StadiumList)

  const mapDispatchToProps = (dispatch) => {
    return{
      findStadium: (Stadiums) => { dispatch({type: 'SET_STADIUMS', Stadiums})}
    }
  }


  console.log("Stadium List:", StadiumList);

  export default connect(mapStateToProps, mapDispatchToProps)(StadiumList);
 