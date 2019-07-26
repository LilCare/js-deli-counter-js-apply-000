function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var lineNumber = katzDeliLine.length
  return "Welcome, " + newPerson + ". You are number " + lineNumber + " in line.";
}

var ticketNumber = 0;
function takeANumber2(){
  ticketNumber++;
  return "Welcome, you are ticket " + ticketNumber;
}


//Welcome, you are ticket number ---


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length - 1; i++){
      line = line + (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line = line + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length-1];
    return line;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`
  } else {
    var numberedLine = katzDeliLine.map(function(name, i){
      return `${i+1}. ${name}`
    })
    return `The line is currently: ${numberedLine.join(`, `)}`
  }
}
