let numberOfParticipants = parseInt(prompt("Enter the number of participants:"));

let participants = [];

//Ask name of each participant
for (let i = 0; i < numberOfParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}
participants.sort();

//Ordered list
let participantListHTML = "<ol>";
for (let name of participants) {
    participantListHTML += `<li>${name}</li>`;
}
participantListHTML += "</ol>";

document.getElementById('participant-list').innerHTML = participantListHTML;