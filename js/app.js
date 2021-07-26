'use strict';
let userwelcom = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcom);

let knowme = confirm ('Do we know each other :)');
switch(knowme) {
    case true:
      alert ('Glad to hear about you :)');
     // console.log(knowme);
      break;
    case false:
      alert('I whish that we can know each other ');
     // console.log(knowme);
      break;
    default:
      alert('You didnt answer :(');
      //console.log(knowme);
  }

  let like = confirm ('Do you like programing :)');
switch(like) {
    case true:
      alert ('So you are one of the team  :)');
     // console.log(like);
      break;
    case false:
      alert('I think you must re thing of it :) ');
     // console.log(like);
      break;
    default:
      alert('You didnt answer :(');
      //console.log(like);
  }
  let learn = confirm ('Do you like to learn programing and coding  :)');
  switch(learn) {
      case true:
        alert ('I will be so happy to gide you  :)');
       // console.log(learn);
        break;
      case false:
        alert('I think you must re thing of it :) ');
       // console.log(learn);
        break;
      default:
        alert('You didnt answer :(');
        //console.log(learn);
    }
    let thing = confirm ('Do you thing that i made a good disegion to start this way  :)');
    switch(thing) {
        case true:
          alert ('Thanks for yor encouragement  :)');
         // console.log(thing);
          break;
        case false:
          alert('I will be so happy to know why  :) ');
         // console.log(thing);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(thing);
      }
      let last = confirm ('Do you like to stay in contact :)');
    switch(last) {
        case true:
          alert ('Thanks i am so happy to hear that :)');
         // console.log(last);
          break;
        case false:
          alert('I respict your choice   :) ');
         // console.log(last);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(last);
      }
      