
//Do these need to be Vars??
var bodyH, bodyW, bodyX, bodyY, headH, headW, headX, headY, eyesH, eyesW, eyesX, eyesY, pupilsRan, pupilsW, pupilsX, mouthH, mouthW, mouthX, mouthY; 
var baseTrait, bodyTrait, eyeTrait, mouthTrait, hairTrait;
var hairH, hairW, hairX, hairY;

function gen(){
  const canvas = document.querySelector ('canvas')
  const context = canvas.getContext('2d');
  canvas.width = 128;
  canvas.height = 128;
  
  function generateDimensions(){
    //Body height and width & X and Y coordinates
    bodyH = randomIntFromInterval(12, 24) * 2;
    bodyW = randomIntFromInterval(28, 48) * 2;
    bodyX = canvas.width/2 - (bodyW/2);
    bodyY = canvas.height - bodyH;

    //Head height and width & X and Y coordinates
    headY = randomIntFromInterval(12, 24) * 2;
    headH = canvas.height - bodyH - headY;
    headW = randomIntFromInterval(12, (bodyW/2 -2)) * 2
    headX = canvas.width/2 - (headW/2);

    hairH = randomIntFromInterval(12, Math.floor(headY/2)) * 2;
    hairW = headW;
    hairX = headX;
    hairY = headY - hairH;

    //Mouth height and width & X and Y coordinate
    mouthH = randomIntFromInterval(headH/16, headH/8) * 2;
    mouthW = randomIntFromInterval(8, 24) * 2;
    mouthX = headX + (randomIntFromInterval(headW/4, headW/2));
    mouthY = headY + Math.floor(headH/2) + randomIntFromInterval( 0, headH/4);
 
    //Eyes height and width & X and Y coordinates 
    eyesH = randomIntFromInterval(4, Math.floor(headH/6) * 2); //sometimes this value becomes 0
    eyesW = randomIntFromInterval(4, 12) * 2;
    eyesX =  headX + (randomIntFromInterval(headW/4, headW/2));
    eyesY = randomIntFromInterval(headH/20, headH/6) + headY;

    //Pupils Width and X coordinates
    pupilsRan = randomIntFromInterval(1, 2) * 2;
    pupilsW = Math.floor (eyesW / pupilsRan);
    pupilsX =  randomIntFromInterval(eyesX, eyesX + eyesW - pupilsW);

    console.log ("generated dimensions");
  };
  generateDimensions();

//Base Traits
const BaseTraits = [
  //Pepe
  [
    {
      Trait: "Pepe",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#00674d"
    },
    {
      Trait: "Pepe-Bottom-Lip-Color",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#fb0000"
    },
    {
      Trait: "Pepe-Body",
      H: `${bodyH}`,
      W: `${bodyW}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#00a28d"
    },
    {
      Trait: "Pepe-Body-Shadow",
      H: `${bodyH}`,
      W: `${Math.floor(bodyW/4)}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#00674d"
    },
    {
      Trait: "Pepe-Head",
      H: `${headH}`,
      W: `${headW}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#00a28d"
    },
    {
      Trait: "Pepe-Head-Shadow",
      H: `${headH}`,
      W: `${Math.floor(headW/4)}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#00674d"
    },

    //Left
    {
      Trait: "Pepe-Lump",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.floor(hairW/2.5)}`,
      X: `${Math.floor(hairX + (hairW/8)-2)}`,
      Y: `${headY - Math.floor(hairH/4)}`,
      Colour: "#00a28d"
    },
    {
      Trait: "Pepe-Lump-Shadow",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${Math.floor(hairX + (hairW/8)-2)}`,
      Y: `${headY - Math.floor(hairH/4)}`,
      Colour: "#00674d"
    },

    //Right
    {
      Trait: "Pepe-Lump",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.floor(hairW/2.5)}`,
      X: `${Math.floor(hairX + (hairW/1.8)-2)}`,
      Y: `${headY - Math.floor(hairH/4)}`,
      Colour: "#00a28d"
    },    
    {
      Trait: "Pepe-Mouth-Bottom",
      H: `${mouthH}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#fb0000"
    },
    {
      Trait: "Pepe-Mouth-Top",
      H: `${Math.floor(mouthH/2)}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#fe4631"
    }
  ],
  //Ape
  [
    {
      Trait: "Ape",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#f7ce8e"
    },
    {
      Trait: "Ape-Bottom-Lip-Color",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#efa64f"
    },
    {
      Trait: "Ape-Body",
      H: `${bodyH}`,
      W: `${bodyW}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#9e0a0e"
    },
    {
      Trait: "Ape-Body-Shadow",
      H: `${bodyH}`,
      W: `${Math.floor(bodyW/4)}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#620001"
    },
    {
      Trait: "Ape-Chest",
      H: `${Math.floor(canvas.height - (bodyY + bodyH/3)+1)}`,
      W: `${Math.floor(bodyW - (bodyW/4 -1)-4)}`,
      X: `${Math.floor(bodyX + (bodyW/4)+2)}`,
      Y: `${Math.floor(bodyY + bodyH/3)}`,
      Colour: "#fbe5be"
    },
    {
      Trait: "Ape-Tuft",
      H: `${Math.floor(bodyH/6)}`,
      W: `${Math.floor(bodyW/6)}`,
      X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/12)))}`,
      Y: `${Math.floor(bodyY + bodyH/3 - 1)}`,
      Colour: "#9e0a0e"
    },
    {
      Trait: "Ape-Head",
      H: `${headH}`,
      W: `${headW}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#9e0a0e"
    },
    {
      Trait: "Ape-Head-Shadow",
      H: `${headH}`,
      W: `${Math.floor(headW/4)}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#620001"
    },
    {
      Trait: "Ape-Face",
      H: `${Math.ceil(headH - (headH/10))}`,
      W: `${Math.ceil(headW - headW/4)}`,
      X: `${Math.floor(headW/4 + headX)}`,
      Y: `${Math.floor(headY + (headH/10))}`,
      Colour: "#fbe5be"
    },
    {
      Trait: "Ape-Mouth-Bottom",
      H: `${mouthH}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#efa64f"
    },
    {
      Trait: "Ape-Mouth-Top",
      H: `${Math.floor(mouthH/2)}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#f7ce8e"
    },
    {
      Trait: "Ape-Ear-Shadow",
      H: `${Math.floor(headH/8)}`,
      W: `${Math.floor(headW/8)}`,
      X: `${Math.floor(headX - (headW/16))}`,
      Y: `${Math.floor(headY + (headH/4))}`,
      Colour: "#f7ce8e"
    },
    {
      Trait: "Ape-Ear",
      H: `${Math.floor(headH/8)}`,
      W: `${Math.floor(headW/8)}`,
      X: `${headX}`,
      Y: `${Math.floor(headY + (headH/4))}`,
      Colour: "#fbe5be"
    },
  ],
    //Penguin
  [
    {
      Trait: "Penguin",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#dadada"
    },
    {
      Trait: "Penguin-Bottom-Lip-Color",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#fcbb00"
    },

    {
      Trait: "Penguin-Body",
      H: `${bodyH}`,
      W: `${bodyW}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#ececec"
    },
    {
      Trait: "Penguin-Body-Shadow",
      H: `${bodyH}`,
      W: `${Math.floor(bodyW/4)}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#050817"
    },

    {
      Trait: "Penguin-Head",
      H: `${headH}`,
      W: `${headW}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#323e63"
    },
    {
      Trait: "Penguin-Head-Shadow",
      H: `${headH}`,
      W: `${Math.floor(headW/4)}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#050817"
    },
    {
      Trait: "Penguin-Face",
      H: `${Math.ceil(headH - (headH/10))}`,
      W: `${Math.ceil(headW - headW/4)}`,
      X: `${Math.floor(headW/4 + headX)}`,
      Y: `${Math.floor(headY + (headH/10))}`,
      Colour: "#ececec"
    },
    {
      Trait: "Penguin-Mouth-Bottom",
      H: `${mouthH}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#fcbb00"
    },
    {
      Trait: "Penguin-Mouth-Top",
      H: `${Math.floor(mouthH/2)}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#ffe122"
    }
  ],
  //Toad
  [
    {
      Trait: "Toad",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#00674d"
    },
    {
      Trait: "Toad-Bottom-Lip-Color",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#efa64f"
    },
    {
      Trait: "Toad-Body",
      H: `${bodyH}`,
      W: `${bodyW}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#fbe5be"
    },
    {
      Trait: "Toad-Body-Shadow",
      H: `${bodyH}`,
      W: `${Math.floor(bodyW/4)}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#00674d"
    },
    {
      Trait: "Toad-Head",
      H: `${headH}`,
      W: `${headW}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#00a28d"
    },
    {
      Trait: "Toad-Head-Shadow",
      H: `${headH}`,
      W: `${Math.floor(headW/4)}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#00674d"
    },
    {
      Trait: "Toad-Face",
      H: `${Math.floor(headH/2)}`,
      W: `${Math.ceil(headW - headW/4)}`,
      X: `${Math.floor(headX + (headW/4))}`,
      Y: `${Math.floor(headY + (headH/2))}`,
      Colour: "#fbe5be"
    },
    {
      Trait: "Toad-Mouth-Bottom",
      H: `${mouthH}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#efa64f"
    },
    {
      Trait: "Toad-Mouth-Top",
      H: `${Math.floor(mouthH/2)}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#f7ce8e"
    },
  ],

//Mushroom
[
  {
    Trait: "Mushroom",
    H: 0,
    W: 0,
    X: 0,
    Y: 0,
    Colour: "#f7ce8e"
  },
  {
    Trait: "Mushroom-Bottom-Lip-Color",
    H: 0,
    W: 0,
    X: 0,
    Y: 0,
    Colour: "#ebb558"
  },
  {
    Trait: "Mushroom-Body",
    H: `${bodyH}`,
    W: `${bodyW}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#fbe5be"
  },
  {
    Trait: "Mushroom-Body-Shadow",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#f7ce8e"
  },
  {
    Trait: "Mushroom-Head",
    H: `${headH}`,
    W: `${headW}`,
    X: `${headX}`,
    Y: `${headY}`,
    Colour: "#fbe5be"
  },
  {
    Trait: "Mushroom-Head-Shadow",
    H: `${headH}`,
    W: `${Math.floor(headW/4)}`,
    X: `${headX}`,
    Y: `${headY}`,
    Colour: "#f7ce8e"
  },

  {
    Trait: "Mushroom-Mouth-Bottom",
    H: `${mouthH}`,
    W: `${mouthW}`,
    X: `${mouthX}`,
    Y: `${mouthY}`,
    Colour: "#efa64f"
  },
  {
    Trait: "Mushroom-Mouth-Top",
    H: `${Math.floor(mouthH/2)}`,
    W: `${mouthW}`,
    X: `${mouthX}`,
    Y: `${mouthY}`,
    Colour: "#f7ce8e"
  },
  {
    Trait: "Mushroom-Top",
    H: `${headY}`,
    W: `${Math.ceil(hairW + hairW/3)}`,
    X: `${Math.floor(hairX - (hairW/6))}`,
    Y: `${0}`,
    Colour:"#e95640"
  },
  {
    Trait: "Mushroom-Top-Shadow",
    H: `${headY}`,
    W: `${Math.ceil(hairW/3 + hairW/6)}`,
    X: `${Math.floor(hairX - (hairW/6))}`,
    Y: `${0}`,
    Colour:"#d51d10"
  },
  {
    Trait: "Mushroom-Spot-1",
    H: `${randomIntFromInterval(headY/8,headY/4)}`,
    W: `${Math.ceil(hairW/3 + hairW/6  - hairW/8)}`,
    X: `${Math.floor(hairX - (hairW/6)+ hairW/16)}`,
    Y: `${randomIntFromInterval(0, (hairH/4 - 2))}`,
    Colour:"#dadada"
  },
  {
    Trait: "Mushroom-Spot-2",
    H: `${Math.floor(headY/4)}`,
    W: `${Math.ceil(headW/8)}`,
    X: `${Math.floor(hairX + (hairW/3) - (headW/8))}`,
    Y: `${Math.ceil(hairH/2 + (hairH/6))}`,
    Colour:"#dadada"
  },
  {
    Trait: "Mushroom-Spot-3",
    H: `${Math.floor(headY/4)}`,
    W: `${Math.ceil(headW/16)}`,
    X: `${Math.floor(hairX + (hairW/3))}`,
    Y: `${Math.ceil(hairH/2 + (hairH/6))}`,
    Colour:"#ececec"
  },

  {
    Trait: "Mushroom-Spot-4",
    H: `${Math.floor(headY/2)}`,
    W: `${Math.floor(headW/2)}`,
    X: `${Math.floor(hairX + (hairW/2))}`,
    Y: `${randomIntFromInterval(0, headY/2)}`,
    Colour:"#ececec"
  },

],

   //Banana
   [
    {
      Trait: "Banana",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#e8c005"
    },
    {
      Trait: "Banana-Bottom-Lip-Color",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#ffc300"
    },
    {
      Trait: "Banana-Body",
      H: `${bodyH}`,
      W: `${bodyW}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#ffdf00"
    },
    {
      Trait: "Banana-Body-Shadow",
      H: `${bodyH}`,
      W: `${Math.floor(bodyW/4)}`,
      X: `${bodyX}`,
      Y: `${bodyY}`,
      Colour: "#e9bd08"
    },
    {
      Trait: "Banana-Head",
      H: `${headH}`,
      W: `${headW}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#ffdf00"
    },
    {
      Trait: "Banana-Head-Shadow",
      H: `${headH}`,
      W: `${Math.floor(headW/4)}`,
      X: `${headX}`,
      Y: `${headY}`,
      Colour: "#e9bd08"
    },
    {
      Trait: "Banana-Base",
      H: `${hairH}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${hairX + (Math.floor(hairW/4))}`,
      Y: `${hairY}`,
      Colour: "#93603b"
    },
    {
      Trait: "Banana-Shadow",
      H: `${hairH}`,
      W: `${Math.floor(hairW/10)}`,
      X: `${hairX + (Math.floor(hairW/4))}`,
      Y: `${hairY}`,
      Colour:"#57240d"
    },
    {
      Trait: "Banana-Top-Base",
      H: `${hairH/2}`,
      W: `${hairW/2}`,
      X: `${hairX + (Math.floor(hairW/6))}`,
      Y: `${hairY + hairH/2}`,
      Colour: "#ffdf00"
    },
    {
      Trait: "Banana-Top-Base",
      H: `${hairH/2}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${hairX + (Math.floor(hairW/6))}`,
      Y: `${hairY + hairH/2}`,
      Colour: "#e9bd08"
    },

    {
      Trait: "Pepe-Mouth-Bottom",
      H: `${mouthH}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#ffc300"
    },
    {
      Trait: "Banana-Mouth-Top",
      H: `${Math.floor(mouthH/2)}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${mouthY}`,
      Colour: "#e8c005"
    }
  ],
];
function chooseBase(){
  baseTrait = BaseTraits[Math.floor(Math.random()*BaseTraits.length)];
  console.log(baseTrait);
}
chooseBase();
const BodyTraits = [
  //None
  [
    {
      Trait: "None",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#ffffff"
    },
  ],
//Super
[
  {
    Trait: "Super",
    H: `${bodyH}`,
    W: `${bodyW}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#0000ff"
  },
  {
    Trait: "Super-Shadow",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#000080"
  },

  {
    Trait: "Super-Cape",
    H: `${Math.ceil(bodyH/8)}`,
    W: `${bodyW}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#ff0000"
  },
  {
    Trait: "Super-Cape-Shadow-1",
    H: `${bodyH}`,
    W: `${bodyX}`,
    X: 0,
    Y: `${bodyY}`,
    Colour: "#990000"
  },
  {
    Trait: "Super-Cape-Shadow-2",
    H: `${Math.ceil(bodyH/8)}`,
    W: `${Math.floor (bodyX + (bodyW/4))}`,
    X: 0,
    Y: `${bodyY}`,
    Colour: "#cc0000"
  },
  {
    Trait: "Super-Symbol",
    H: `${Math.floor(bodyH/4)}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX +(bodyW/2)}`,
    Y: `${bodyY + (Math.ceil(bodyH/8))}`,
    Colour: "#ffd400"
  },
],
//Suit
[

  {
    Trait: "Suit",
    H: `${bodyH}`,
    W: `${bodyW}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#0d256e"
  },
  {
    Trait: "Suit-Shadow",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#01052f"
  },
  {
    Trait: "Suit-Shirt",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX +(bodyW/2)}`,
    Y: `${bodyY}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Suit-Tie",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/8)}`,
    X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/16)))}`,
    Y: `${bodyY}`,
    Colour: "#e95640"
  },
  {
    Trait: "Suit-Tie-2",
    H: `${Math.floor(bodyH/8)}`,
    W: `${Math.floor(bodyW/8)}`,
    X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/16)))}`,
    Y: `${bodyY}`,
    Colour: "#d30000"
  }

],
//Tuxedo
[
  {
    Trait: "Tuxedo",
    H: `${bodyH}`,
    W: `${bodyW}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#0d0e0f"
  },
  {
    Trait: "Tuxedo-Shadow",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "black"
  },
  {
    Trait: "Tuxedo-Collar",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/2  + bodyW/16)}`,
    X: `${Math.ceil(bodyX +(bodyW/3))}`,
    Y: `${bodyY}`,
    Colour: "#1a1c1e"
  },
  {
    Trait: "Tuxedo-Shirt",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX +(bodyW/2)}`,
    Y: `${bodyY}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Tuxedo-Bow-Tie",
    H: `${Math.floor(bodyH/5)}`,
    W: `${Math.floor(bodyW/6)}`,
    X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/18))-1)}`,
    Y: `${Math.floor (bodyY + (bodyH/24))}`,
    Colour: "black"
  },

  {
    Trait: "Tuxedo-Rose",
    H: `${Math.floor(bodyW/12)}`,
    W: `${Math.floor(bodyW/12)}`,
    X: `${bodyX + bodyW - (Math.floor(bodyW/10))}`,
    Y: `${Math.ceil(bodyY + (bodyH/4))}`,
    Colour: "#ff0000"
  },
],
//Hoodie
[
{
  Trait: "Hoodie",
  H: `${bodyH}`,
  W: `${bodyW}`,
  X: `${bodyX}`,
  Y: `${bodyY}`,
  Colour: "#0d256e"
},
{
  Trait: "Hoodie-Shadow",
  H: `${bodyH}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX}`,
  Y: `${bodyY}`,
  Colour: "#01052f"
},

{
  Trait: "Hoodie-tassle",
  H: `${Math.floor(bodyH/2)}`,
  W: `${Math.floor(bodyW/12)}`,
  X: `${Math.floor (bodyX + (bodyW/1.5) - (bodyW/12))}`,
  Y: `${bodyY + Math.floor(bodyH/8) }`,
  Colour: "#01052f"
},
{
  Trait: "Hoodie-tassle-2",
  H: `${Math.floor(bodyH/2)}`,
  W: `${Math.floor(bodyW/12)}`,
  X: `${Math.floor (bodyX + (bodyW/1.5) + (bodyW/12))}`,
  Y: `${bodyY + Math.floor(bodyH/8) }`,
  Colour: "#01052f"
},
{
  Trait: "Hoodie-Head-Top",
  H: `${Math.floor(hairH/4)}`,
  W: `${hairW}`,
  X: `${hairX}`,
  Y: `${headY - (Math.floor(hairH/4))}`,
  Colour: "#0d256e"
},
{
  Trait: "Hoodie-Head-Base",
  H: `${headH + Math.floor(hairH/4) }`,
  W: `${Math.floor(headW/4)}`,
  X: `${headX}`,
  Y: `${headY - (Math.floor(hairH/4))}`,
  Colour: "#0d256e"
},
{
  Trait: "Hoodie-Head-Shadow",
  H: `${headH + Math.floor(hairH/4)}`,
  W: `${Math.floor(headW/4) - Math.floor (headW/8)}`,
  X: `${headX}`,
  Y: `${headY - (Math.floor(hairH/4))}`,
  Colour: "#01052f"
},
{
  Trait: "Hoodie-Head-Shadow",
  H: `${headH - Math.floor(headH/8)}`,
  W: `${Math.floor(headW/4)}`,
  X: `${headX - Math.floor(headW/4)}`,
  Y: `${headY - (Math.floor(hairH/4))}`,
  Colour: "#01052f"
}
],
//Classic
[
{
  Trait: "Classic",
  H: `${bodyH}`,
  W: `${bodyW}`,
  X: `${bodyX}`,
  Y: `${bodyY}`,
  Colour: "#343a4a"
},
{
  Trait: "The-Classic-Shadow",
  H: `${bodyH}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX}`,
  Y: `${bodyY}`,
  Colour: "#0b0d15"
},

{
  Trait: "The-Classic-White-1",
  H: `${Math.floor(bodyH/10)}`,
  W: `${bodyW}`,
  X: `${bodyX}`,
  Y: `${bodyY + (Math.floor(bodyH/10)* 3)}`,
  Colour: "#dad1c2"
},
{
  Trait: "The-Classic-White-1-Shadow",
  H: `${Math.floor(bodyH/10)}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX}`,
  Y: `${bodyY + (Math.floor(bodyH/10)* 3)}`,
  Colour: "#baab94"
},
{
  Trait: "The-Classic-Red",
  H: `${Math.floor(bodyH/10) * 3}`,
  W: `${bodyW}`,
  X: `${bodyX}`,
  Y: `${bodyY + (Math.floor(bodyH/10)*3) + (Math.floor(bodyH/10)) }`,
  Colour: "#c1343d"
},
{
  Trait: "The-Classic-Red-Shadow",
  H: `${Math.floor(bodyH/10) * 3}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX}`,
  Y: `${bodyY + (Math.floor(bodyH/10)*3) + (Math.floor(bodyH/10)) }`,
  Colour: "#920b0f"
},

{
  Trait: "The-Classic-White-2",
  H: `${Math.floor(bodyH/10)}`,
  W: `${bodyW}`,
  X: `${bodyX}`,
  Y: `${canvas.height - (Math.floor(bodyH/10))}`,
  Colour: "#dad1c2"
},
{
  Trait: "The-Classic-White-2-Shadow",
  H: `${Math.floor(bodyH/10)}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX}`,
  Y: `${canvas.height - (Math.floor(bodyH/10))}`,
  Colour: "#baab94"
},
{
  Trait: "Sonichu-Ear-Right-Shadow",
  H: `${bodyH/2}`,
  W: `${(Math.floor((Math.floor(bodyW/16))/2))}`,
  X: `${bodyX +(bodyW/2) + (Math.floor(bodyW/4) - (Math.floor(bodyW/16)) - (Math.floor((Math.floor(bodyW/16))/2)))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#efaf02"
},
{
  Trait: "Sonichu-Base",
  H: `${bodyH/2}`,
  W: `${Math.floor(bodyW/4)}`,
  X: `${bodyX +(bodyW/2)}`,
  Y: `${bodyY + (bodyH/2)}`,
  Colour: "#f7d319"
},
{
  Trait: "Sonichu-Ear-Left-Shadow",
  H: `${bodyH}`,
  W: `${Math.floor((Math.floor(bodyW/16))/2)}`,
  X: `${bodyX +(bodyW/2) - (Math.floor((Math.floor(bodyW/16))/2))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#efaf02"
},
{
  Trait: "Sonichu-Ear-Left",
  H: `${bodyH}`,
  W: `${Math.floor(bodyW/16)}`,
  X: `${bodyX +(bodyW/2)}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#f7d319"
},
{
  Trait: "Sonichu-Ear-Right",
  H: `${bodyH/2}`,
  W: `${Math.floor(bodyW/16)}`,
  X: `${bodyX +(bodyW/2) + (Math.floor(bodyW/4) - (Math.floor(bodyW/16)))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#f7d319"
},

{
  Trait: "Sonichu-Ear-Right-Black-1",
  H: `${Math.floor(bodyH/8)}`,
  W: `${(Math.floor((Math.floor(bodyW/16))/2))}`,
  X: `${bodyX +(bodyW/2) + (Math.floor(bodyW/4) - (Math.floor(bodyW/16)) - (Math.floor((Math.floor(bodyW/16))/2)))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#000000"
},
{
  Trait: "Sonichu-Ear-Right-Black-2",
  H: `${Math.floor(bodyH/8)}`,
  W: `${Math.floor(bodyW/16)}`,
  X: `${bodyX +(bodyW/2) + (Math.floor(bodyW/4) - (Math.floor(bodyW/16)))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#000000"
},
{
  Trait: "Sonichu-Ear-Left-Black-1",
  H: `${Math.floor(bodyH/8)}`,
  W: `${Math.floor(bodyW/16)}`,
  X: `${bodyX +(bodyW/2)}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#000000"
},

{
  Trait: "Sonichu-Ear-Left-Black-2",
  H: `${Math.floor(bodyH/8)}`,
  W: `${Math.floor((Math.floor(bodyW/16))/2)}`,
  X: `${bodyX +(bodyW/2) - (Math.floor((Math.floor(bodyW/16))/2))}`,
  Y: `${bodyY + (Math.floor(bodyH/4))}`,
  Colour: "#000000"
},

{
  Trait: "Sonichu-Face",
  H: `${bodyH}`,
  W: `${(Math.floor(bodyW/6))}`,
  X: `${(Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/16)) - 2))}`,
  Y: `${Math.floor (bodyY + (bodyH/2) + (bodyH/4))}`,
  Colour: "#edd9a2"
},

{
  Trait: "Sonichu-Eye",
  H: `${(Math.floor (bodyY + (bodyH/2) + (bodyH/4))) - (Math.floor (bodyY + (bodyH/2) + (bodyH/12)))}`,
  W: `${Math.floor(bodyW/6)}`,
  X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/16)) - 2)}`,
  Y: `${Math.floor (bodyY + (bodyH/2) + (bodyH/12))}`,
  Colour: "#ffffff"
},

{
  Trait: "Sonichu-Pupil-Left",
  H: `${(Math.floor (bodyY + (bodyH/2) + (bodyH/4))) - (Math.floor (bodyY + (bodyH/2) + (bodyH/12)))}`,
  W: `${Math.floor(bodyW/24)}`,
  X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/12)) - 2)}`,
  Y: `${Math.floor (bodyY + (bodyH/2) + (bodyH/12))}`,
  Colour: "#000000"
},
{
  Trait: "Sonichu-Pupil-Right",
  H: `${(Math.floor (bodyY + (bodyH/2) + (bodyH/4))) - (Math.floor (bodyY + (bodyH/2) + (bodyH/12)))}`,
  W: `${Math.floor(bodyW/24)}`,
  X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/6)) - 2)}`,
  Y: `${Math.floor (bodyY + (bodyH/2) + (bodyH/12))}`,
  Colour: "#000000"
},
{
  Trait: "Sonichu-Mouth",
  H: `${Math.ceil(bodyH/24)}`,
  W: `${Math.floor(bodyW/18)}`,
  X: `${Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/7)) - 2)}`,
  Y: `${canvas.height - 3}`,
  Colour: "#000000"
},
{
  Trait: "Sonichu-Red-Left",
  H: `${Math.floor(bodyW/24)}`,
  W: `${Math.floor(bodyW/24)}`,
  X: `${bodyX +(bodyW/2) + 1}`,
  Y: `${canvas.height - (Math.floor(bodyH/6)) - 2}`,
  Colour: "#ff0000"
},
{
  Trait: "Sonichu-Red-Right",
  H: `${Math.floor(bodyW/24)}`,
  W: `${Math.floor(bodyW/24)}`,
  X: `${(Math.floor(bodyX +(bodyW/2) + (Math.ceil(bodyW/16)) - 2)) + (Math.floor(bodyW/6)) - 1}`,
  Y: `${canvas.height - (Math.floor(bodyH/6)) - 2}`,
  Colour: "#ff0000"
},
],
//Skull
[
  {
    //Base
    Trait: "Skull",
    H: `${bodyH}`,
    W: `${bodyW - (Math.floor(bodyW/4))}`,
    X: `${bodyX + (Math.floor(bodyW/4))}`,
    Y: `${bodyY}`,
    Colour: "#333333"
  },
  {
    Trait: "Skull-Base-Shadow",
    H: `${bodyH}`,
    W: `${Math.floor(bodyW/4)}`,
    X: `${bodyX}`,
    Y: `${bodyY}`,
    Colour: "#0a0a0a"
  },
  {
    Trait: "Skull-Base",
    H: `${Math.floor(bodyH/2)}`,
    W: `${(Math.floor(bodyW/4))}`,
    X: `${bodyX + (Math.floor(bodyW/4)) + (Math.floor(bodyW/4))}`,
    Y: `${bodyY + (Math.floor(bodyH/4))}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Skull-Tooth-1",
    H: `${Math.floor(bodyH/8)}`,
    W: `${(Math.floor(bodyW/16))}`,
    X: `${bodyX + (Math.ceil(bodyW/4)) + (Math.floor(bodyW/4)) + (Math.ceil(bodyW/24))}`,
    Y: `${bodyY + (Math.floor(bodyH/4)) + Math.floor(bodyH/2) - 1}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Skull-Tooth-2",
    H: `${Math.floor(bodyH/8)}`,
    W: `${(Math.floor(bodyW/16))}`,
    X: `${bodyX + (Math.floor(bodyW/4)) + (Math.floor(bodyW/4)) + (Math.floor(bodyW/16)*2) + (Math.floor(bodyW/24))}`,
    Y: `${bodyY + (Math.floor(bodyH/4)) + Math.floor(bodyH/2) - 1}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Skull-Eye-1",
    H: `${Math.floor(bodyH/6)}`,
    W: `${(Math.floor(bodyW/16))}`,
    X: `${bodyX + (Math.ceil(bodyW/4)) + (Math.floor(bodyW/4)) + (Math.ceil(bodyW/24))}`,
    Y: `${bodyY + (Math.floor(bodyH/4)) + (Math.floor(bodyH/8))}`,
    Colour: "#333333"
  },
  {
    Trait: "Skull-Eye-2",
    H: `${Math.floor(bodyH/6)}`,
    W: `${(Math.floor(bodyW/16))}`,
    X: `${bodyX + (Math.floor(bodyW/4)) + (Math.floor(bodyW/4)) + (Math.floor(bodyW/16)*2) + (Math.floor(bodyW/24))}`,
    Y: `${bodyY + (Math.floor(bodyH/4)) + (Math.floor(bodyH/8))}`,
    Colour: "#333333"
  },


]


];
function chooseBody(){
  bodyTrait = BodyTraits[Math.floor(Math.random()*BodyTraits.length)];
  console.log(bodyTrait);
  if( baseTrait[0].Trait === "Mushroom" && bodyTrait[0].Trait === "Hoodie" || baseTrait[0].Trait === "Banana" && bodyTrait[0].Trait === "Hoodie") {
    console.log ("Rerolling...");
    chooseBody();
  }
}
chooseBody();

//Hair/Head Traits
const HairTraits = [
  [
    {
      Trait: "None",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#ffffff"
    },
    
],
  //Fez
  [
    {
      Trait: "Fez",
      H: `${Math.ceil(hairH - (hairH/1.5))}`,
      W: `${Math.floor(hairW/5)}`,
      X: `${hairX + (Math.floor(hairW/4) - (Math.ceil(hairW/12)))-3}`,
      Y: `${Math.ceil(hairY + (hairH/2) - (hairH - (hairH/1.5))) }`,
      Colour: "#f8e26c"
    },
    {
      Trait: "Fez-Base",
      H: `${Math.floor(hairH - (hairH/4))}`,
      W: `${Math.floor(hairW/2.5)}`,
      X: `${Math.floor(hairX + (hairW/8)-2)}`,
      Y: `${Math.ceil(hairY + (hairH/4))}`,
      Colour: "#e95640"
    },
    {
      Trait: "Fez-Shadow",
      H: `${Math.floor (hairH - (hairH/4))}`,
      W: `${Math.floor(hairW/4) - (Math.ceil(hairW/12))}`,
      X: `${hairX}`,
      Y: `${Math.ceil (hairY + (hairH/4))}`,
      Colour: "#d30000"
    },
  
    {
      Trait: "Fez-Bit-Shadow",
      H: `${Math.floor (hairH - (hairH/4))}`,
      W: `${Math.floor(hairW/12)}`,
      X: `${Math.floor(hairX + (hairW/8))-3}`,
      Y: `${Math.ceil(hairY + (hairH/2) - (hairH - (hairH/1.5))) }`,
      Colour: "#f1c82e"
    },
  ],
  // Red Cap
  [
    {
      Trait: "Cap",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${Math.ceil(hairW  - (hairW/4))}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#e95640"
    },
    {
      Trait: "MBGA-Hat-Shadow",
      H: `${Math.ceil(hairH - (hairH/3))}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${hairX}`,
      Y: `${Math.floor(hairY + (hairH/3))}`,
      Colour: "#d30000"
    },
    {
      Trait: "MBGA-Visor",
      H: `${Math.floor(hairH/6)}`,
      W: `${hairW}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${Math.ceil (hairY + hairH - (hairH/6))}`,
      Colour: "#e95640"
    },
    {
      Trait: "MBGA-Visor-Shadow",
      H: `${Math.ceil(hairH/12)}`,
      W: `${hairW}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${Math.floor (hairY + hairH - (hairH/6))}`,
      Colour: "#d30000"
    },
  ],
  //Captain
  [
    {
      Trait: "Captain",
      H: `${(Math.floor(hairH/4)) + (Math.floor(hairH/8))}`,
      W: `${Math.ceil(hairW  - (hairW/4))}`,
      X: `${headX}`,
      Y: `${headY - (Math.floor(hairH/4)) - (Math.floor(hairH/8))}`,
      Colour: "#e5e5e5"
    },
    {
      Trait: "Captain-White-Bottom",
      H: `${(Math.floor(hairH/4)) + (Math.floor(hairH/8))}`,
      W: `${Math.ceil(hairW  - (hairW/4))}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${headY - (Math.floor(hairH/4)) - (Math.floor(hairH/8))}`,
      Colour: "#ffffff"
    },
    {
      Trait: "Captain-Shadow-Top",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.ceil(hairW  - (hairW/8)) }`,
      X: `${headX - (Math.floor(hairW/16))}`,
      Y: `${headY - (Math.floor(hairH/2))- (Math.floor(hairH/12))}`,
      Colour: "#e5e5e5"
    },
    {
      Trait: "Captain-White-Top",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.ceil(hairW  - (hairW/8)) }`,
      X: `${Math.floor(hairX + (hairW/6))}`,
      Y: `${headY - (Math.floor(hairH/2))- (Math.floor(hairH/12))}`,
      Colour: "#ffffff"
    },
    {
      Trait: "Captain-Symbol",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${Math.floor(hairX + (hairW/2))}`,
      Y: `${headY - (Math.floor(hairH/8)) - (Math.floor(hairH/4))}`,
      Colour: "#ffd400"
    },
    {
      Trait: "Captain-Visor",
      H: `${Math.floor(hairH/8)}`,
      W: `${Math.ceil(hairW  - (hairW/8))}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${Math.ceil(hairY + (hairH/2) + (hairH/4) + (hairH/8))}`,
      Colour: "#0d0e0f"
    },
  ],
  //Tophat
  [
    {
      Trait: "Tophat",
      H: `${headY}`,
      W: `${hairW}`,
      X: `${hairX}`,
      Y: `${0}`,
      Colour: "#1a1c1e"
    },
    {
      Trait: "Top-Hat-Shadow",
      H: `${headY}`,
      W: `${Math.floor(headW/4)}`,
      X: `${hairX}`,
      Y: `${0}`,
      Colour: "black"
    },
    {
      Trait: "Top-Hat-Accent",
      H: `${Math.floor(hairH/2)}`,
      W: `${hairW}`,
      X: `${headX}`,
      Y: `${hairY + (Math.floor(hairH/2))}`,
      Colour: "#404040"
    },
    {
      Trait: "Top-Hat-Accent-Shadow",
      H: `${Math.floor(hairH/2)}`,
      W: `${Math.floor(headW/4)}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/2))}`,
      Colour: "#0d0e0f"
    },
    {
      Trait: "Top-Hat-Visor",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW + hairW/2)}`,
      X: `${Math.floor (hairX - hairW/4)}`,
      Y: `${hairY + hairH - (Math.floor(hairH/6))}`,
      Colour: "#1a1c1e"
    },
    {
      Trait: "Top-Hat-Visor-Shadow",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW/2)}`,
      X: `${Math.floor (hairX - hairW/4)}`,
      Y: `${hairY + hairH - (Math.floor(hairH/6))}`,
      Colour: "black"
    },
  ],
  
  //Fedora
  [
    {
      Trait: "Fedora",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${hairW/2}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#fffbf2"
    },
    
    {
      Trait: "Fedora-Shadow-Right",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${Math.floor(hairW/6)}`,
      X: `${hairX + hairW/2 + (Math.floor(hairW/8))}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#fff7e5"
    },
    {
      Trait: "Fedora-Base-Right",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${Math.ceil(hairW/4)}`,
      X: `${hairX + hairW/2 + Math.floor(hairW/4)}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#fffbf2"
    },
    {
      Trait: "Fedora-Base-Mid",
      H: `${Math.floor(hairH/3)}`,
      W: `${hairW}`,
      X: `${hairX}`,
      Y: `${Math.floor(headY - hairH/3 - hairH/8)}`,
      Colour: "#fffbf2"
    },
    {
      Trait: "Fedora-Shadow-Left",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${Math.floor(headW/4)}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#fff7e5"
    },
    {
      Trait: "Fedora-Accent",
      H: `${Math.floor(hairH/4)}`,
      W: `${hairW}`,
      X: `${headX}`,
      Y: `${hairY + (Math.floor(hairH/2)) + (Math.floor(hairH/6))}`,
      Colour: "#3d3c3a"
    },
    {
      Trait: "Fedora-Accent-Shadow",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.floor(headW/4)}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/2)) + (Math.floor(hairH/6))}`,
      Colour: "#0d0e0f"
    },
    {
      Trait: "Fedora-Visor",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW + hairW/2)}`,
      X: `${Math.floor (hairX - hairW/4)}`,
      Y: `${hairY + hairH - (Math.floor(hairH/6))}`,
      Colour: "#fffbf2"
    },
    {
      Trait: "Fedora-Visor-Shadow",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW/2)}`,
      X: `${Math.floor (hairX - hairW/4)}`,
      Y: `${hairY + hairH - (Math.floor(hairH/6))}`,
      Colour: "#fff7e5"
    },
  ],
  //Bandanna
  [
  
    {
      Trait: "Bandanna",
      H: `${hairH/2}`,
      W: `${hairW}`,
      X: `${headX}`,
      Y: `${hairY + (hairH/2)}`,
      Colour: "#3333ce"
    },
    {
      Trait: "Blue-Bandanna-Shadow",
      H: `${hairH/2}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${headX}`,
      Y: `${hairY + (hairH/2)}`,
      Colour: "#000099"
    },
    {
      Trait: "Blue-Bandanna-Tie-1",
      H: `${Math.floor(hairW/8)}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${headX}`,
      Y: `${headY - (hairH/2) - Math.floor(hairW/8)}`,
      Colour: "#000099"
    },
    {
      Trait: "Blue-Bandanna-Tie-2",
      H: `${Math.floor(hairW/8)}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${headX - Math.floor(hairW/8)}`,
      Y: `${headY - (hairH/2)}`,
      Colour: "#000099"
    },
  ],
  //Ushanka
  [
    {
      Trait: "Ushanka",
      H: `${hairH}`,
      W: `${Math.ceil(hairW  - (hairW/6))}`,
      X: `${Math.floor(hairX + (hairW/4))}`,
      Y: `${hairY}`,
      Colour: "#808c93"
    },
    {
      Trait: "Ushanka-Shadow",
      H: `${headH + (Math.floor(hairY + (hairH/6)))}`,
      W: `${Math.floor((hairW/4) + (hairW/8))}`,
      X: `${Math.floor(hairX - (hairW/8))}`,
      Y: `${Math.floor(hairY + (hairH/4))}`,
      Colour: "#323f49"
    },
    {
      Trait: "Ushanka-Shadow-Fur-Side",
      H: `${headH + (Math.floor(hairY + (hairH/6)))}`,
      W: `${Math.ceil (hairW/12)}`,
      X: `${(Math.floor(hairX + (hairW/4)) - (Math.ceil (hairW/12)))}`,
      Y: `${Math.floor(hairY + (hairH/4))}`,
      Colour: "#808c93"
    },
    {
      Trait: "Ushanka-Front-Fur-Shadow",
      H: `${hairH}`,
      W: `${Math.ceil (hairW/12)}`,
      X: `${(Math.floor(hairX + (hairW/4)) - (Math.ceil (hairW/12)))}`,
      Y: `${hairY}`,
      Colour: "#5a676f"
    },
    {
      Trait: "Ushanka-Gold",
      H: `${Math.floor(hairH/3)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${Math.floor(headX +(headW/2) + (Math.ceil(headW/16)))}`,
      Y: `${Math.floor(hairY + (hairH/3) )}`,
      Colour: "#ffd400"
    },
    {
      Trait: "Ushanka-Red",
      H: `${Math.floor(hairH/4)}`,
      W: `${Math.ceil(hairW/8)}`,
      X: `${Math.ceil(headX +(headW/2) + (Math.ceil(headW/8)))}`,
      Y: `${Math.floor(hairY + (hairH/3) - (Math.floor(hairH/16)))}`,
      Colour: "#ff0000"
    },
  ],
  //Propellor
  [
  {
    Trait: "Propellor",
    H: `${hairH}`,
    W: `${Math.ceil(hairW/16)}`,
    X: `${hairX + hairW/2}`,
    Y: `${hairY}`,
    Colour: "#000000"
  },
  {
    Trait: "Propellor-Red",
    H: `${hairH - Math.floor(hairH/3)}`,
    W: `${hairW}`,
    X: `${hairX}`,
    Y: `${hairY + Math.floor(hairH/3)}`,
    Colour: "#ff0000"
  },
  {
    Trait: "Propellor-Yellow",
    H: `${hairH - Math.floor(hairH/3)}`,
    W: `${Math.floor(hairW/1.5)}`,
    X: `${hairX}`,
    Y: `${hairY + Math.floor(hairH/3)}`,
    Colour: "#ffff00"
  },
  {
    Trait: "Propellor-Blue",
    H: `${hairH - Math.floor(hairH/3)}`,
    W: `${Math.floor(hairW/3)}`,
    X: `${hairX}`,
    Y: `${hairY + Math.floor(hairH/3)}`,
    Colour: "#0080ff"
  },
  
  {
    Trait: "Propellor-Shadow",
    H: `${hairH - Math.floor(hairH/3)}`,
    W: `${Math.floor(hairW/4)}`,
    X: `${hairX}`,
    Y: `${hairY + Math.floor(hairH/3)}`,
    Colour: "#0001ff"
  },
  {
    Trait: "Propellor-Visor",
    H: `${Math.floor(hairH/6)}`,
    W: `${hairW}`,
    X: `${Math.floor(hairX + (hairW/4))}`,
    Y: `${Math.ceil (hairY + hairH - (hairH/6))}`,
    Colour: "#3cc300"
  },
  {
    Trait: "Propellor-Top",
    H: `${Math.floor(hairH/8)}`,
    W: `${hairW}`,
    X: `${hairX}`,
    Y: `${hairY}`,
    Colour: "#0080ff"
  },
  ],
  //Beanie
  [
  {
    Trait: "Beanie",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${hairW - (Math.floor(hairW/5)) + (Math.floor(hairW/16))}`,
    X: `${headX + (Math.floor(hairW/16))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#ca4e11"
  },
  {
    Trait: "Beanie-Shadow",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${Math.ceil(hairW/8) + (Math.floor(hairW/16))}`,
    X: `${headX + (Math.floor(hairW/16))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#a01801"
  },
  
  {
    Trait: "Beanie-Bottom",
    H: `${Math.floor(hairH/3)}`,
    W: `${hairW}`,
    X: `${headX}`,
    Y: `${Math.ceil(headY - (hairH/3))}`,
    Colour: "#933709"
  },
  {
    Trait: "Beanie-Bottom-Shadow",
    H: `${Math.floor(hairH/3)}`,
    W: `${Math.floor(hairW/4)}`,
    X: `${headX}`,
    Y: `${Math.ceil(headY - (hairH/3))}`,
    Colour: "#550c00"
  },
  
  {
    Trait: "Beanie-Square Shadow",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${headX + (Math.floor(hairW/8)) - 2 }`,
    Y: `${Math.ceil(headY - (hairH/6))}`,
    Colour: "#a01801"
  },
  {
    Trait: "Beanie-Square-1",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${headX + (Math.floor(hairW/8)*3) }`,
    Y: `${Math.ceil(headY - (hairH/6))}`,
    Colour: "#ca4e11"
  },
  {
    Trait: "Beanie-Square-2",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${headX + (Math.floor(hairW/8)*5) }`,
    Y: `${Math.ceil(headY - (hairH/6))}`,
    Colour: "#ca4e11"
  },
  {
    Trait: "Beanie-Square-3",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${headX + (Math.floor(hairW/8)*7) }`,
    Y: `${Math.ceil(headY - (hairH/6))}`,
    Colour: "#ca4e11"
  },
  ],
  //Wizard
  [
      {
        Trait: "Wizard",
        H: `${Math.ceil(hairH/4)}`,
        W: `${hairW}`,
        X: `${hairX}`,
        Y: `${hairY + (hairH/2)}`,
        Colour: "#3a81d0"
      },
      {
        Trait: "Wizards-Hat-Med",
        H: `${hairH/2}`,
        W: `${hairW - (Math.floor(hairW/6))}`,
        X: `${Math.floor(hairX + (hairW/6))}`,
        Y: `${Math.floor(hairY + (hairH/6))}`,
        Colour: "#3a81d0"
      },
      {
        Trait: "Wizards-Hat-Top",
        H: `${Math.ceil(hairH/6)}`,
        W: `${hairW}`,
        X: `${Math.ceil(hairX - hairW/6)}`,
        Y: `${hairY}`,
        Colour: "#3a81d0"
      },
      {
        Trait: "Wizards-Hat-Top-Shadow",
        H: `${Math.ceil(hairH/6)}`,
        W: `${Math.floor(hairW/4 + hairW/6)}`,
        X: `${Math.ceil(hairX - hairW/6)}`,
        Y: `${hairY}`,
        Colour: "#0003a1"
      },
      {
        Trait: "Wizards-Hat-Med-Shadow",
        H: `${hairH}`,
        W: `${Math.floor(hairW/10)}`,
        X: `${Math.floor(hairX + (hairW/6))}`,
        Y: `${hairY}`,
        Colour: "#0003a1"
      },
    
      {
        Trait: "Wizards-Hat-Shadow",
        H: `${Math.ceil(hairH/4)}`,
        W: `${Math.floor(headW/4)}`,
        X: `${hairX}`,
        Y: `${hairY + (hairH/2)}`,
        Colour: "#0003a1"
      },
     
      {
        Trait: "Wizards-Hat-Accent",
        H: `${Math.ceil(hairH/8)}`,
        W: `${hairW}`,
        X: `${headX}`,
        Y: `${Math.ceil(hairY + hairH - (hairH/4))}`,
        Colour: "#f8e26c"
      },
      {
        Trait: "Wizards-Hat-Accent-Shadow",
        H: `${Math.ceil(hairH/8)}`,
        W: `${Math.floor(headW/4)}`,
        X: `${hairX}`,
        Y: `${Math.ceil(hairY + hairH -(hairH/4))}`,
        Colour: "#f1c500"
      },
      {
        Trait: "Wizards-Hat-Visor",
        H: `${Math.floor(hairH/8)}`,
        W: `${Math.floor(hairW + hairW/2)}`,
        X: `${Math.floor (hairX - hairW/4)}`,
        Y: `${Math.ceil(hairY + hairH -(hairH/8))}`,
        Colour: "#3a81d0"
      },
      {
        Trait: "Wizards-Hat-Visor-Shadow",
        H: `${Math.floor(hairH/8)}`,
        W: `${Math.floor(hairW/2)}`,
        X: `${Math.floor (hairX - hairW/4)}`,
        Y: `${hairY + hairH - (Math.floor(hairH/8))}`,
        Colour: "#0003a1"
      },
      
  ],
  //Sushi
  [
  
    {
      Trait: "Sushi",
      H: `${Math.floor(headH/6)}`,
      W: `${hairW}`,
      X: `${headX}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#ffffff"
    },
    {
      Trait: "Sushi-Headband-Shadow",
      H: `${Math.floor(headH/6)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${headX}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#d9d9d9"
    },
    {
      Trait: "Sushi-Headband-Tie-1",
      H: `${Math.floor(hairW/8)}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${headX}`,
      Y: `${headY - (Math.floor(headH/6)) - Math.floor(hairW/8)}`,
      Colour: "#d9d9d9"
    },
    {
      Trait: "Sushi-Headband-Tie-2",
      H: `${Math.floor(hairW/8)}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${headX - Math.floor(hairW/8)}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#d9d9d9"
    },
    {
      Trait: "Sushi-Headband-Red",
      H: `${Math.floor(headH/6)}`,
      W: `${Math.floor(headW/6)}`,
      X: `${headX + Math.floor(headW/2) + (Math.floor(headW/12))}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#e95640"
    },
  
    {
      Trait: "Sushi-Headband-Black-Left",
      H: `${Math.floor(headH/8)}`,
      W: `${Math.floor(headW/8)}`,
      X: `${headX + (Math.floor(headW/4)) + (Math.floor(headW/7))}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#000000"
    },
    {
      Trait: "Sushi-Headband-Black-Right",
      H: `${Math.floor(headH/8)}`,
      W: `${Math.floor(headW/8)}`,
      X: `${headX + (Math.floor(headW/2)) + (Math.floor(headW/8)) + (Math.floor(headW/5))}`,
      Y: `${headY - (Math.floor(headH/6))}`,
      Colour: "#000000"
    },
  ],
  //Bunny
  [
    {
      Trait: "Bunny",
      H: `${hairH}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${Math.floor(hairX + (hairW/8))}`,
      Y: `${hairY}`,
      Colour: "#ececec"
    },
    {
      Trait: "Bunny-Pink-Left",
      H: `${Math.ceil(hairH - (hairH/6))}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${Math.floor(hairX + (hairW/8))}`,
      Y: `${Math.floor(hairY + hairH/6)}`,
      Colour: "#f092a3"
    },
  
    {
      Trait: "Bunny-Right",
      H: `${hairH}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${hairX + hairW - (Math.floor(hairW/4)) - (Math.floor(hairW/8))}`,
      Y: `${hairY}`,
      Colour: "#ececec"
    },
    {
      Trait: "Bunny-Pink-Right",
      H: `${Math.ceil(hairH - (hairH/6))}`,
      W: `${Math.floor(hairW/8)}`,
      X: `${hairX + hairW - (Math.floor(hairW/8)) -(Math.floor(hairW/8))}`,
      Y: `${Math.floor(hairY + hairH/6)}`,
      Colour: "#f092a3"
    },
  ],
  //Viking
  [
    {
      Trait: "Viking",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${headX + hairW - (Math.floor(hairW/6))}`,
      Y: `${headY - (Math.floor(hairH/2))}`,
      Colour: "#e0dec3"
    },
    {
      Trait: "Viking-Horn-Right-2",
      H: `${(headY - (Math.floor(hairH/2))) - hairY}`,
      W: `${Math.floor(hairH/6)}`,
      X: `${headX + hairW -  (Math.floor(hairW/6)) + (Math.floor(hairW/4)) - (Math.floor(hairH/6))}`,
      Y: `${hairY}`,
      Colour: "#e0dec3"
    },
  {
    Trait: "Viking-Base",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${hairW - (Math.floor(hairW/5)) + (Math.floor(hairW/16))}`,
    X: `${headX + (Math.floor(hairW/16))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#b46346"
  },
  {
    Trait: "Viking-Shadow",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${Math.ceil(hairW/8) + (Math.floor(hairW/16))}`,
    X: `${headX + (Math.floor(hairW/16))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#7f2613"
  },
  {
    Trait: "Viking-Trim-Shadow",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${Math.floor(hairW/12)}`,
    X: `${headX + (headW/2) + (Math.floor(hairW/8)) - (Math.floor(hairW/12))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#adafb2"
  },
  
  {
    Trait: "Viking-Bottom",
    H: `${Math.floor(hairH/4)}`,
    W: `${hairW}`,
    X: `${headX}`,
    Y: `${Math.ceil(headY - (hairH/4))}`,
    Colour: "#d2d3d5"
  },
  {
    Trait: "Viking-Bottom-Shadow",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.floor(hairW/4)}`,
    X: `${headX}`,
    Y: `${Math.ceil(headY - (hairH/4))}`,
    Colour: "#adafb2"
  },
  {
    Trait: "Viking-Trim",
    H: `${hairH - (Math.floor(hairH/4))}`,
    W: `${Math.floor(hairW/12)}`,
    X: `${headX + (headW/2) + (Math.floor(hairW/8))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#d2d3d5"
  },
  {
    Trait: "Viking-Horn-Left",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/4)}`,
    X: `${headX - (Math.floor(hairW/8))}`,
    Y: `${headY - (Math.floor(hairH/2))}`,
    Colour: "#c5c195"
  },
  {
    Trait: "Viking-Horn-Left-2",
    H: `${(headY - (Math.floor(hairH/2))) - hairY}`,
    W: `${Math.floor(hairH/6)}`,
    X: `${headX - (Math.floor(hairW/8))}`,
    Y: `${hairY}`,
    Colour: "#c5c195"
  },
  
  ],
  //Mohawk
  [
    {
      Trait: "Mohawk",
      H: `${hairH}`,
      W: `${Math.floor(hairW/2)}`,
      X: `${headX + (Math.floor(headW/4)) + (Math.floor(hairW/16))}`,
      Y: `${hairY}`,
      Colour: "#C50000"
    },
    {
      Trait: "Mohawk-Shadow-Back",
      H: `${hairH - (Math.floor(hairH/2))}`,
      W: `${Math.floor(hairW/2)}`,
      X: `${headX + (Math.floor(hairW/12))}`,
      Y: `${hairY + (Math.floor(hairH/2))}`,
      Colour: "#C50000"
    },
    
    {
      Trait: "Mohawk-Front",
      H: `${hairH}`,
      W: `${Math.floor(hairW/3)}`,
      X: `${headX + (headW/2) + (Math.floor(hairW/20))}`,
      Y: `${hairY}`,
      Colour: "#e22626"
    },
    
  ],
  //Purple
  [
      {
        Trait: "Purple",
        H: `${hairH - (Math.floor(hairH/4))}`,
        W: `${Math.ceil(hairW  - (hairW/4))}`,
        X: `${Math.floor(hairX + (hairW/4))}`,
        Y: `${hairY + (Math.floor(hairH/4))}`,
        Colour: "#8119b7"
      },
      {
        Trait: "Purple-Shadow",
        H: `${Math.ceil(hairH - (hairH/3))}`,
        W: `${Math.floor(hairW/4)}`,
        X: `${hairX}`,
        Y: `${Math.floor(hairY + (hairH/3))}`,
        Colour: "#410283"
      },
      {
        Trait: "Purple-Visor",
        H: `${Math.floor(hairH/6)}`,
        W: `${hairW}`,
        X: `${Math.floor(hairX + (hairW/4))}`,
        Y: `${Math.ceil (hairY + hairH - (hairH/6))}`,
        Colour: "#8119b7"
      },
      {
        Trait: "Purple-Visor-Shadow",
        H: `${Math.ceil(hairH/12)}`,
        W: `${hairW}`,
        X: `${Math.floor(hairX + (hairW/4))}`,
        Y: `${Math.floor (hairY + hairH - (hairH/6))}`,
        Colour: "#410283"
      },
      {
        Trait: "Purple-Logo",
        H: `${Math.floor(hairH/6)}`,
        W: `${Math.ceil(hairW/4)}`,
        X: `${Math.floor(hairX + (hairW/3)) +2}`,
        Y: `${hairY + (Math.floor(hairH/2)) - (Math.floor(hairH/12))}`,
        Colour: "#b261dc"
      },
      {
        Trait: "Purple-Logo-2",
        H: `${Math.floor(hairH/6)}`,
        W: `${Math.ceil(hairW/4)}`,
        X: `${Math.floor(hairX + (hairW/3)) + (Math.ceil(hairW/4)) +2}`,
        Y: `${hairY + (Math.floor(hairH/2)) + (Math.floor(hairH/12)) }`,
        Colour: "#b261dc"
      }
  ],
  //Army
  [
    {
      Trait: "Army",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${hairW - (Math.floor(hairW/8))}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#9a6f42"
    },
    {
      Trait: "Army-Base-2",
      H: `${hairH - (Math.floor(hairH/4))- (Math.floor(hairH/8))}`,
      W: `${hairW}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4))+ (Math.floor(hairH/8))}`,
      Colour: "#9a6f42"
    },
    {
      Trait: "Army-Shadow",
      H: `${hairH - (Math.floor(hairH/4))}`,
      W: `${(Math.floor(hairW/4))}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#6d4b2d"
    },
    {
      Trait: "Army-Camo-Large-Green",
      H: `${hairH/2}`,
      W: `${(Math.floor(hairW/2)) - (Math.floor(hairW/8))}`,
      X: `${hairX + Math.floor(hairW/2)}`,
      Y: `${hairY + Math.floor(hairH/3)}`,
      Colour: "#77703a"
    },
    {
      Trait: "Army-Camo-Top-Dark-Beige",
      H: `${Math.floor(hairH/8)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${hairX + Math.floor(hairW/4)}`,
      Y: `${hairY + (Math.floor(hairH/4))}`,
      Colour: "#b49e5d"
    },
    {
      Trait: "Army-Camo-Bottom-Dark-Beige",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW/4)}`,
      X: `${hairX + (Math.floor(hairW/2)) + (Math.floor(hairW/4))}`,
      Y: `${headY - (Math.floor(hairH/2) - (Math.floor(hairH/16)))}`,
      Colour: "#b49e5d"
    },
    {
      Trait: "Army-Camo-Light-Beige",
      H: `${Math.floor(hairH/4)}`,
      W: `${(Math.floor(hairW/4))}`,
      X: `${hairX + Math.floor(hairW/4) + 4}`,
      Y: `${hairY + Math.floor(hairH/4) + 4}`,
      Colour: "#d1bc77"
    },
    {
      Trait: "Army-Shadow-Camo-Beige",
      H: `${hairH - (Math.floor(hairH/4)) - (Math.floor(hairH/4))}`,
      W: `${(Math.floor(hairW/8))}`,
      X: `${hairX}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/12))}`,
      Colour: "#7d6e43"
    },
    {
      Trait: "Army-Shadow-Camo-Green",
      H: `${hairH - (Math.floor(hairH/4)) - (Math.floor(hairH/4))}`,
      W: `${(Math.floor(hairW/8))}`,
      X: `${hairX + (Math.floor(hairW/16))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/6))}`,
      Colour: "#514d23"
    },
    {
      Trait: "Army-Visor",
      H: `${Math.floor(hairH/6)}`,
      W: `${hairW + 1}`,
      X: `${hairX}`,
      Y: `${headY - (Math.floor(hairH/6))}`,
      Colour: "#9a6f42"
    },
    {
      Trait: "Army-Visor-Shadow",
      H: `${Math.floor(hairH/6)}`,
      W: `${Math.floor(hairW/4) + 1}`,
      X: `${hairX - 1}`,
      Y: `${headY - (Math.floor(hairH/6))}`,
      Colour: "#6d4b2d"
    },
    {
      Trait: "Army-Card-White",
      H: `${hairH - (Math.floor(hairH/4)) - (Math.floor(hairH/3))}`,
      W: `${(Math.floor(hairW/4))}`,
      X: `${hairX + (Math.floor(hairW/8))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/6))}`,
      Colour: "#ffffff"
    },
    {
      Trait: "Army-Card-Shadow",
      H: `${hairH - (Math.floor(hairH/4)) - (Math.floor(hairH/3))}`,
      W: `${(Math.floor(hairW/8))}`,
      X: `${hairX + (Math.floor(hairW/8))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/6))}`,
      Colour: "#ececec"
    },
    {
      Trait: "Army-Card-Symbol-Large",
      H: `${(Math.floor(hairH/5))}`,
      W: `${(Math.floor(hairW/12)) + 1}`,
      X: `${hairX + (Math.floor(hairW/8)) + (Math.floor(hairW/12))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/3)) - (Math.floor(hairH/16))}`,
      Colour: "#000000"
    },

    {
      Trait: "Army-Card-Symbol-1",
      H: `${(Math.ceil(hairH/16))}`,
      W: `${(Math.ceil(hairW/16))}`,
      X: `${hairX + (Math.floor(hairW/8))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/6))}`,
      Colour: "#000000"
    },
    {
      Trait: "Army-Card-Symbol-2",
      H: `${(Math.ceil(hairH/16))}`,
      W: `${(Math.ceil(hairW/16))}`,
      X: `${hairX + (Math.floor(hairW/4)) + (Math.floor(hairW/8)) - (Math.ceil(hairW/16))}`,
      Y: `${hairY + (Math.floor(hairH/4)) + (Math.floor(hairH/6)) + (hairH - (Math.floor(hairH/4)) - (Math.floor(hairH/3))) - (Math.ceil(hairH/16))}`,
      Colour: "#000000"
    },

    {
      Trait: "Army-Accent",
      H: `${Math.floor(hairH/8)}`,
      W: `${hairW}`,
      X: `${headX}`,
      Y: `${Math.ceil(hairY + hairH - (hairH/3))}`,
      Colour: "#7e8d68"
    },
    {
      Trait: "Army-Accent-Shadow",
      H: `${Math.floor(hairH/8)}`,
      W: `${Math.floor(headW/4)}`,
      X: `${hairX}`,
      Y: `${Math.ceil(hairY + hairH - (hairH/3))}`,
      Colour: "#3e4e2a"
    },
    
  ],
    //Cowboy
    [
        {
          Trait: "Cowboy",
          H: `${hairH - (Math.floor(hairH/8))}`,
          W: `${hairW/2}`,
          X: `${hairX}`,
          Y: `${hairY + (Math.floor(hairH/8))}`,
          Colour: "#a36227"
        },
        
        {
          Trait: "Cowboy-Shadow-Right",
          H: `${hairH - (Math.floor(hairH/8))}`,
          W: `${Math.floor(hairW/6)}`,
          X: `${hairX + hairW/2 + (Math.floor(hairW/8))}`,
          Y: `${hairY + (Math.floor(hairH/8))}`,
          Colour: "#513113"
        },
        {
          Trait: "Cowboy-Base-Right",
          H: `${hairH - (Math.floor(hairH/8))}`,
          W: `${Math.ceil(hairW/4)}`,
          X: `${hairX + hairW/2 + Math.floor(hairW/4)}`,
          Y: `${hairY + (Math.floor(hairH/8))}`,
          Colour: "#a36227"
        },
        {
          Trait: "Cowboy-Base-Mid",
          H: `${Math.floor(hairH/3)}`,
          W: `${hairW}`,
          X: `${hairX}`,
          Y: `${Math.floor(headY - hairH/3 - hairH/4)}`,
          Colour: "#a36227"
        },
        {
          Trait: "Cowboy-Shadow-Left",
          H: `${hairH - (Math.floor(hairH/8))}`,
          W: `${Math.floor(headW/4)}`,
          X: `${hairX}`,
          Y: `${hairY + (Math.floor(hairH/8))}`,
          Colour: "#513113"
        },
        {
          Trait: "Cowboy-Accent",
          H: `${Math.floor(hairH/4)}`,
          W: `${hairW}`,
          X: `${headX}`,
          Y: `${hairY + (Math.floor(hairH/2)) + (Math.floor(hairH/6))}`,
          Colour: "#522700"
        },
        {
          Trait: "Cowboy-Accent-Shadow",
          H: `${Math.floor(hairH/4)}`,
          W: `${Math.floor(headW/4)}`,
          X: `${hairX}`,
          Y: `${hairY + (Math.floor(hairH/2)) + (Math.floor(hairH/6))}`,
          Colour: "#1a0600"
        },
        {
          Trait: "Cowboy-Visor",
          H: `${Math.floor(hairH/5)}`,
          W: `${Math.floor(hairW + hairW/2) + 2}`,
          X: `${Math.floor (hairX - hairW/4)}`,
          Y: `${hairY + hairH - (Math.floor(hairH/5))}`,
          Colour: "#a36227"
        },
        {
          Trait: "Cowboy-Visor-Tip",
          H: `${Math.floor(hairH/3)}`,
          W: `${Math.floor(hairH/5)}`,
          X: `${Math.floor (hairX - hairW/4) + (Math.floor(hairW + hairW/2)) - (Math.floor(hairH/5)) + 2}`,
          Y: `${hairY + hairH - (Math.floor(hairH/6)) - (Math.floor(hairH/3))}`,
          Colour: "#a36227"
        },
        {
          Trait: "Cowboy-Visor-Shadow",
          H: `${Math.floor(hairH/5)}`,
          W: `${Math.floor(hairW/2) + 2}`,
          X: `${Math.floor (hairX - hairW/4) - 2}`,
          Y: `${hairY + hairH - (Math.floor(hairH/5))}`,
          Colour: "#513113"
        },
        {
          Trait: "Cowboy-Visor-Shadow-Tip",
          H: `${Math.floor(hairH/3)}`,
          W: `${Math.floor(hairH/5)}`,
          X: `${Math.floor (hairX - hairW/4) - 2}`,
          Y: `${hairY + hairH - (Math.floor(hairH/5)) - (Math.floor(hairH/3))}`,
          Colour: "#513113"
        },
      ],
      //Police
[
  {
    Trait: "Police",
    H: `${(Math.floor(hairH/4)) + (Math.floor(hairH/8))}`,
    W: `${Math.ceil(hairW  - (hairW/4))}`,
    X: `${headX}`,
    Y: `${headY - (Math.floor(hairH/4)) - (Math.floor(hairH/8))}`,
    Colour: "#060915"
  },
  {
    Trait: "Police-Checkered-Black",
    H: `${(Math.floor(hairH/4)) + (Math.floor(hairH/8))}`,
    W: `${Math.ceil(hairW  - (hairW/4))}`,
    X: `${Math.floor(hairX + (hairW/4))}`,
    Y: `${headY - (Math.floor(hairH/4)) - (Math.floor(hairH/8))}`,
    Colour: "#26314a"
  },
  {
    Trait: "Police-Shadow-Mid",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW  - (hairW/8)) }`,
    X: `${headX - (Math.floor(hairW/16))}`,
    Y: `${headY - (Math.floor(hairH/2))- (Math.floor(hairH/12))}`,
    Colour: "#060915"
  },
  {
    Trait: "Police-Blue-Top-Shadow",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW  - (hairW/2))}`,
    X: `${Math.floor(hairX + (hairW/6))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#060915"
  },
  {
    Trait: "Police-Blue-Mid",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW  - (hairW/10)) }`,
    X: `${Math.floor(hairX + (hairW/6))}`,
    Y: `${headY - (Math.floor(hairH/2))- (Math.floor(hairH/12))}`,
    Colour: "#26314a"
  },
  {
    Trait: "Police-Blue-Top",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW  - (hairW/2))}`,
    X: `${Math.floor(hairX + (hairW/4)) + (Math.floor(hairW/8))}`,
    Y: `${hairY + (Math.floor(hairH/4))}`,
    Colour: "#26314a"
  },
  {
    Trait: "Police-Symbol",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.floor(hairW/6)}`,
    X: `${Math.floor(hairX + (hairW/2)) + (Math.floor(headW/16))}`,
    Y: `${headY -(Math.floor(hairH/1.5))}`,
    Colour: "#ffd400"
  },
  {
    Trait: "Police-Checker-Black",
    H: `${Math.floor(hairH/4)}`,
    W: `${hairW}`,
    X: `${hairX}`,
    Y: `${headY - (Math.floor(hairH/4))}`,
    Colour: "#000000"
  },

  {
    Trait: "Police-Checker-1",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW/8)}`,
    X: `${Math.floor(hairX + (hairW/4))}`,
    Y: `${headY - (Math.floor(hairH/4))}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Police-Checker-2",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${Math.floor(hairX + (hairW/4)) + (Math.ceil(hairW/8)) + (Math.ceil(hairW/8))}`,
    Y: `${headY - (Math.floor(hairH/4))}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Police-Checker-3",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.ceil(hairW/8)}`,
    X: `${Math.ceil(hairX + (hairW/4)) + (Math.ceil(hairW/8)) + (Math.ceil(hairW/8)) + (Math.ceil(hairW/8)) + (Math.ceil(hairW/8))}`,
    Y: `${headY - (Math.floor(hairH/4))}`,
    Colour: "#ffffff"
  },
  {
    Trait: "Police-Checker-Shadow",
    H: `${Math.floor(hairH/4)}`,
    W: `${Math.floor(hairW/8)}`,
    X: `${hairX}`,
    Y: `${headY - (Math.floor(hairH/4))}`,
    Colour: "#cccccc"
  },

  {
    Trait: "Police-Visor",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.ceil(hairW  - (hairW/8))}`,
    X: `${Math.floor(hairX + (hairW/4))}`,
    Y: `${Math.ceil(hairY + (hairH/2) + (hairH/4) + (hairH/6))}`,
    Colour: "#000000"
  },
  {
    Trait: "Police-Visor-2",
    H: `${Math.floor(hairH/6)}`,
    W: `${Math.ceil(hairW  - (hairW/8))}`,
    X: `${hairX}`,
    Y: `${Math.ceil(hairY + (hairH/2) + (hairH/4) + (hairH/6))}`,
    Colour: "#000000"
  },
]
];
function chooseHair(){
  hairTrait = HairTraits[Math.floor(Math.random()*HairTraits.length)];
  console.log(hairTrait);
  if( baseTrait[0].Trait === "Mushroom" || baseTrait[0].Trait === "Banana") {
    console.log ("Defaulting to None");
   hairTrait = HairTraits[0];
  };
  if( bodyTrait[0].Trait === "Hoodie") {
    console.log ("Defaulting to None");
    hairTrait = HairTraits[0];
  };
  if(baseTrait[0].Trait === "Pepe" && hairTrait[0].Trait === "Mohawk" || baseTrait[0].Trait === "Pepe" && hairTrait[0].Trait === "Bunny")
  {
    console.log ("Rerolling...");
    chooseHair();
  }
}
chooseHair();

//Mouth Traits
const MouthTraits = [
  // None
  [
    {
      Trait: "None",
      H: 0,
      W: 0,
      X: 0,
      Y: 0,
      Colour: "#ffffff"
    },
  ],
  //Cheese
  [
    {
      Trait: "Cheese",
      H: `${Math.floor(mouthH - (mouthH/2)) -1}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${Math.round (mouthY + (mouthH/4))}`,
      Colour: "#ffffff"
    },
  ],
  //Open
  [
    {
      Trait: "Open",
      H: `${bodyY - mouthY}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${Math.round (mouthY + (mouthH/4))}`,
      Colour: "#000000"
    },
    {
      Trait: "Open-Tongue",
      H: `${Math.floor((bodyY - mouthY)/4)}`,
      W: `${Math.floor(mouthW/2)}`,
      X: `${Math.ceil(mouthX + (mouthW/3))}`,
      Y: `${bodyY - (Math.floor((bodyY - mouthY)/4))}`,
      Colour: "#f092a3"
    },
    {
      Trait: "Open-Bottom-Lip",
      H: `${Math.ceil(mouthH - (mouthH/1.5))}`,
      W: `${mouthW}`,
      X: `${mouthX}`,
      Y: `${headY + headH}`,
      Colour:`${baseTrait[1].Colour}`
    },
  ],
  
  
];
function chooseMouth(){
  mouthTrait = MouthTraits[Math.floor(Math.random()*MouthTraits.length)];
  console.log(mouthTrait);
}
chooseMouth();

// Eye Traits
const EyeTraits = [
// Standard
  [
  {
    Trait: "Standard",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Standard-White-Right",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Standard-Pupil-Left",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX}`,
    Y: `${eyesY}`,
    Colour: "black"
  },
  {
    Trait: "Standard-Pupil-Right",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "black"
  }
  ],
// Bored
[
  {
    Trait: "Bored",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Bored-White-Right",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Bored-Pupil-Left",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX}`,
    Y: `${eyesY}`,
    Colour: "black"
  },
  {
    Trait: "Bored-Pupil-Right",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "black"
 
  },
  {
    Trait: "Bored-Eyelids",
    H: `${Math.floor(eyesH / 2)}`,
    W: `${Math.floor(eyesW * 2)}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    //Grabbing the second base colour for the eyebrows
    Colour:`${baseTrait[0].Colour}`
  },
],
// Bags
[
{
  Trait: "Bags",
  H: `${eyesH}`,
  W: `${eyesW}`,
  X: `${eyesX}`,
  Y: `${eyesY}`,
  Colour: "white"
},
{
  Trait: "Bags-White-Right",
  H: `${eyesH}`,
  W: `${eyesW}`,
  X: `${eyesX + eyesW}`,
  Y: `${eyesY}`,
  Colour: "white"
},
{
  Trait: "Bags-Pupil-Left",
  H: `${eyesH}`,
  W: `${pupilsW}`,
  X: `${pupilsX}`,
  Y: `${eyesY}`,
  Colour: "black"
},
{
  Trait: "Bags-Pupil-Right",
  H: `${eyesH}`,
  W: `${pupilsW}`,
  X: `${pupilsX + eyesW}`,
  Y: `${eyesY}`,
  Colour: "black"

},
{
  Trait: "Bags-Eyelids",
  H: `${Math.floor(eyesH / 2)}`,
  W: `${Math.floor(eyesW * 2)}`,
  X: `${eyesX}`,
  Y: `${Math.ceil(eyesY + (eyesH / 2))}`,
  //Grabbing the second base colour for the eyebrows
  Colour:`${baseTrait[0].Colour}`
},
],
//Suss
[
  {
    Trait: "Suss",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Suss-White-Right",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "white"
  },
  {
    Trait: "Suss-Pupil-Left",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX}`,
    Y: `${eyesY}`,
    Colour: "black"
  },
  {
    Trait: "Suss-Pupil-Right",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "black"
  
  },
  {
    Trait: "Suss-Eyelids-Top",
    H: `${Math.ceil(eyesH / 4)}`,
    W: `${Math.floor(eyesW * 2)}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    //Grabbing the second base colour for the eyebrows
    Colour:`${baseTrait[0].Colour}`
  },
  {
    Trait: "Suss-Eyelids-Bottom",
    H: `${Math.ceil(eyesH / 4)}`,
    W: `${Math.floor(eyesW * 2)}`,
    X: `${eyesX}`,
    Y: `${(eyesY + eyesH)}`,
    //Grabbing the second base colour for the eyebrows
    Colour:`${baseTrait[0].Colour}`
  },
  ],

  // Stoned
[
  {
    Trait: "Blazed",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    Colour: "#f092a3"
  },
  {
    Trait: "Stoned-Pink-Left",
    H: `${eyesH}`,
    W: `${eyesW}`,
    X: `${eyesX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "#f092a3"
  },
  {
    Trait: "Stoned-Pupil-Left",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX}`,
    Y: `${eyesY}`,
    Colour: "black"
  },
  {
    Trait: "Stoned-Pupil-Right",
    H: `${eyesH}`,
    W: `${pupilsW}`,
    X: `${pupilsX + eyesW}`,
    Y: `${eyesY}`,
    Colour: "black"
 
  },
  {
    Trait: "Stoned-Eyelids",
    H: `${Math.floor(eyesH / 2)}`,
    W: `${Math.floor(eyesW * 2)}`,
    X: `${eyesX}`,
    Y: `${eyesY}`,
    //Grabbing the second base colour for the eyebrows
    Colour:`${baseTrait[0].Colour}`
  },
],
//Cyclops
[
  {
    Trait: "Cyclops",
    H: `${eyesH + 2}`,
    W: `${headW - (Math.floor(headW/2))}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#f1c82e"
  },
  {
    Trait: "Cyclops-Shadow",
    H: `${eyesH + 2}`,
    W: `${headW - (Math.floor(headW/4))}`,
    X: `${headX + (Math.floor(headW/4)) + (Math.floor(headW/6))}`,
    Y: `${eyesY}`,
    Colour:"#f8e26c"
  },
  {
    Trait: "Cyclops-Red",
    H: `${Math.floor(eyesH / 2)}`,
    W: `${canvas.width}`,
    X: `${headX + (Math.floor(headW/4)) + (Math.floor(headW/6))}`,
    Y: `${Math.ceil (eyesY + (eyesH/4))}`,
    Colour:"#ff0000"
  }
],
//VR
[
  {
    Trait: "VR",
    H: `${eyesH + 2}`,
    W: `${headW - (Math.floor(headW/2))}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#8d8d8d"
  },
  {
    Trait: "VR-Base",
    H: `${eyesH + 2}`,
    W: `${headW - (Math.floor(headW/4))}`,
    X: `${headX + (Math.floor(headW/4)) + (Math.floor(headW/6))}`,
    Y: `${eyesY}`,
    Colour:"#b4b4b4"
  },
  {
    Trait: "VR-Black",
    H: `${Math.floor(eyesH/2)}`,
    W: `${headW - (Math.floor(headW/4)) - (Math.floor(headW/8))}`,
    X: `${headX + (Math.floor(headW/4)) + (Math.floor(headW/8)) + (Math.ceil(headW/10))}`,
    Y: `${eyesY + (Math.floor(eyesH/4)) + 1}`,
    Colour:"#000000"
  },
],
//3D
[
  //Shadow
  {
    Trait: "3D",
    H: `${Math.ceil(eyesH/2)}`,
    W: `${Math.floor(headW/8) + 2}`,
    X: `${headX + (Math.floor(headW/8))}`,
    Y: `${eyesY}`,
    Colour:"#cfcfcf"
  },
  {
    Trait: "3D-Base",
    H: `${eyesH}`,
    W: `${headW - (Math.floor(headW/4)) + (Math.floor(headW/6))}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#ffffff"
  },
  {
    Trait: "3D-Red",
    H: `${eyesH}`,
    W: `${headW/2}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#ff0000"
  },
  {
    Trait: "3D-Blue",
    H: `${eyesH}`,
    W: `${headW/2}`,
    X: `${headX + (Math.floor(headW/4)) + (headW/2)}`,
    Y: `${eyesY}`,
    Colour:"#0044ff"
  },
  {
    Trait: "3D-Base",
    H: `${Math.floor(eyesH/4)}`,
    W: `${headW}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#ffffff"
  },
  {
    Trait: "3D-Base",
    H: `${eyesH}`,
    W: `${(Math.floor(headW/10))}`,
    X: `${headX + (Math.floor(headW/4)) + (headW/2)}`,
    Y: `${eyesY}`,
    Colour:"#ffffff"
  },
  {
    Trait: "3D-Base",
    H: `${eyesH}`,
    W: `${(Math.floor(headW/10))}`,
    X: `${headX + (Math.floor(headW/4))}`,
    Y: `${eyesY}`,
    Colour:"#ffffff"
  },

],


];

function chooseEyes(){
  eyeTrait = EyeTraits[Math.floor(Math.random()*EyeTraits.length)];
  console.log(eyeTrait);
}
chooseEyes();


//And draw
function draw() {
  var ctx = context;
   //Base
   baseTrait.forEach(shape => {
    let {H, W, X, Y, Colour} = shape;
    ctx.fillStyle = `${Colour}`;
    ctx.fillRect(X,Y,W,H);
  });
  //Body
  bodyTrait.forEach(shape => {
    let {H, W, X, Y, Colour} = shape;
    ctx.fillStyle = `${Colour}`;
    ctx.fillRect(X,Y,W,H);
  });
  //Eyes
  eyeTrait.forEach(shape => {
    let {H, W, X, Y, Colour} = shape;
    ctx.fillStyle = `${Colour}`;
    ctx.fillRect(X,Y,W,H);
  });
  //Hair
  hairTrait.forEach(shape => {
    let {H, W, X, Y, Colour} = shape;
    ctx.fillStyle = `${Colour}`;
    ctx.fillRect(X,Y,W,H);
  });

  //Mouth
  mouthTrait.forEach(shape => {
    let {H, W, X, Y, Colour} = shape;
    ctx.fillStyle = `${Colour}`;
    ctx.fillRect(X,Y,W,H);
  });
}
draw();
}
gen()

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function copyToClipboard(elem) {
  var targetElementID = elem.getAttribute("data-target");
  var textBox = document.getElementById(targetElementID);
  textBox.select();
  textBox.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(textBox.value);
  console.log(textBox.value);
}
