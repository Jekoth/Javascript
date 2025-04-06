function runVotingProgram() {
    //Ask for the number of candidates
    const numberOfCandidates = parseInt(prompt("Enter the number of candidates: "));
    const candidates = [];

    //Save candidate names
    for (let i = 0; i < numberOfCandidates; i++) {
        const candidateName = prompt(`Enter the name for candidate ${i + 1}: `);
        candidates.push({ name: candidateName, votes: 0 });
    }

    //Ask for number of voters
    const numberOfVoters = parseInt(prompt("Enter the number of voters: "));

    //Collect votes
    for (let i = 0; i < numberOfVoters; i++) {
        const vote = prompt(`Voter ${i + 1}: Who do you vote for? (Enter candidate name or leave blank for an empty vote): `);
        if (vote) {
            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes += 1;
            } else {
                console.log(`Invalid candidate name: ${vote}`);
            }
        }
    }
    //The winner
    const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);
    const winner = sortedCandidates[0];

    //Show the results
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");

    sortedCandidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

runVotingProgram();