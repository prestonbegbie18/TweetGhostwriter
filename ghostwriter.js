function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever noticed", "Sometimes I think", "What's the deal with", "How is it that"];
  var body = ["suits sometimes make the wearer thinner.", " this weather is perfect!", " video games are basically unfinished these days.", " DLC is too expensive." , "people just love their coffee?"];
  var end = ["Oh well." , "'Nuff said."];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;

}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
