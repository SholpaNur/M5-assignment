let getUserChoice = () => {
    let choice = prompt('Select 1 - scissor, 2 - paper, 3 - rock');
    if (['1', '2', '3'].indexOf(choice) === -1) { alert('Enter only 1,2,3') }
    else { return choice }
}

let getCompChoice = () => {
    let rnd = Math.random()
    let choice
    if (rnd < 1 / 3) {
        choice = '1';
    } else if (rnd < 2 / 3) {
        choice = '2';
    } else {
        choice = '3'
    }
    return choice
}

let compare = (userChoice, compChoice) => {
    if (userChoice === '1') {
        if (compChoice === '1') { alert('you picked scissors and computer picked scissors. It\'s a tie') }
        else if (compChoice === '2') { alert('you picked scissors and computer picked paper. You won!') }
        else if (compChoice === '3') { alert('you picked scissors and computer picked rock. Computer won!') }
    } else if (userChoice === '2') {
        if (compChoice === '1') { alert('you picked paper and computer picked scissors. Computer won!') }
        else if (compChoice === '2') { alert('you picked paper and computer picked paper. It\'s a tie.') }
        else if (compChoice === '3') { alert('you picked paper and computer picked rock. You won!') }
    } else if (userChoice === '3') {
        if (compChoice === '1') { alert('you picked rock and computer picked scissors. You won!') }
        else if (compChoice === '2') { alert('you picked rock and computer picked paper. Computer won!') }
        else if (compChoice === '3') { alert('you picked rock and computer picked rock. It`s a tie.') }
    }
}

compare(getUserChoice(), getCompChoice())