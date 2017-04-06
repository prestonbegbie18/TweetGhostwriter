function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever noticed", "Sometimes I think", "What's the deal with", "How is it that"];
  var body = ["suits sometimes make the wearer thinner,", " this weather", " video games are basically unfinished these days,", " DLC is too expensive," , "people just love their coffee?"];
  var end = ["oh well." , "Nuff said."];
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
