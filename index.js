function shout(string) {
  let shout = "HELLO!";
  return string.toUpperCase();
  console.log();
}
function whisper(string) {
  let whisper = "hello!";
  return string.toLowerCase();
  console.log(whisper);
}
function logShout(oneMore) {
  console.log(oneMore.toUpperCase());
}
function logWhisper(oneMore){
    console.log(oneMore.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  switch (string) {
    case string.toLowerCase():
      return "I can't hear you!";
      break;
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case (string = "Let's have dinner together!"):
      return "I would love to!";
      break;
    default:
      break;
      console.log(sayHiToHeadphonedRoommate);
  }
}
