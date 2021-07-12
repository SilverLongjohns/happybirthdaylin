import React from "react"
import Button from './components/button/button';
import Portrait from './components/portrait/portrait';
import './App.css';

const buttons = require.context('./assets/buttons', true);
const portraits = require.context('./assets/portraits', true);

const wishers = [
  {unselected: buttons('./Bell.png'), selected: buttons('./Hover_Bell.png'), portrait: portraits('./Bell.png'), name: "Bellstrom Dexca", wish: "Lindalis.... dear, sweet Lindalia.... HAPPY MCFUCKIN BIRTHDAY!! Here's to another year of great company my dude, I'm lookin forward to it! Hope this last year has been enjoyable for yah and I hope this one tops it. One of these days soon I'mma buy you a beer and I NEED to try some of your cooking. Don't party it up too much without us!!"},
  {unselected: buttons('./Esmeraude.png'), selected: buttons('./Hover_Esmeraude.png'), portrait: portraits('./Esme.png'), name: "Esmeraude Diamandis", wish: "Hello Aniki! You're like the big brother that I never had. I am ever grateful that I met you, and have become one of my treasured friends. I wish you nothing but the best for your birthday, and for all birthdays to come. May we share more years together in Eorzea, and one day I hope to meet you and taste your cooking! Thank you for everything you have done for me, for always being supportive, and I always treasure what we share. Always keep being awesome, and we're here for you no matter what. Lots of love!"},
  {unselected: buttons('./Hibiki.png'), selected: buttons('./Hover_Hibiki.png'), portrait: portraits('./Hibi.png'), name: "Hibiki Kazunari", wish: "Happy Birthday, Lin! Hope its a good one! Here's to many more!"},
  {unselected: buttons('./Hyan.png'), selected: buttons('./Hover_Hyan.png'), portrait: portraits('./Hyan.png'), name: "Hyan Silvermoon", wish: "Hey Lin, happy birthday man!  I know we dont know each other that well, but youre a cool one.  Have the best day ever!"},
  {unselected: buttons('./Lyanne.png'), selected: buttons('./Hover_Lyanne.png'), portrait: portraits('./Lyanne.png'), name: "Lyanne Valtierra", wish: "Eyo kuya Barista! I hope today is a good day for you! Blablabla I'm not good at messages. Happy birthday"},
  {unselected: buttons('./Mirinio.png'), selected: buttons('./Hover_Mirinio.png'), portrait: portraits('./Mirinio.png'), name: "Mirinio Relanah", wish: "Hi Lin! Happy Borthday!!!! Wishing you the best on this amazing day and I hope all your birthday wishes come true! Grab some great food and rest up you deserve it!"},
  {unselected: buttons('./Namazu.png'), selected: buttons('./Hover_Namazu.png'), portrait: portraits('./Namazu.png'), name: "Sangmu Dhairya", wish: "Holo lolo o/ Wishing you an amazing 3#st/3#rd birthday, may this year bring you happiness and good fortune--just as we will bring you dinuguan cake & yakult lemonade o7"},
  {unselected: buttons('./Renyu.png'), selected: buttons('./Hover_Renyu.png'), portrait: portraits('./Ren.png'), name: "Renyu Yuusa", wish: "Happy Birthday Aniki! I bless thee with gatcha luck! Hope you get all the characters you want in the near future!"},
  {unselected: buttons('./Waffle.png'), selected: buttons('./Hover_Waffle.png'), portrait: portraits('./Waffle.png'), name: "Waffle Waffle", wish: "Happy Birthday Lin! Drink a few for me, and I'll drink a few for you. For the waifus!"}
]

var initialPortrait = portraits('./Esme.png').default
const initialName = "A Very Happy Birthday from Everyone at Regalia"

const initialWish = "To Lin. \n Here's to a brilliant year to come and to a friendship worth treasuring."

function App() {

  const [portrait, setPortrait] = React.useState();
  const [name, setName] = React.useState(initialName);
  const [wish, setWish] = React.useState(initialWish);
  var hoverState = false;

  return (
    <div className="App">
      <Portrait className="Portrait" greeterName={portrait} />
      <p className="Name">{name}</p>
      <p className="Wishes">{wish}</p>
      <div className="buttonWrapper">
        {wishers.map((x) => <img src={x.unselected.default} onClick={() => {setPortrait(x.portrait.default); setName(x.name); setWish(x.wish); }}></img>)}
      </div>
    </div>
  );
}

export default App;
