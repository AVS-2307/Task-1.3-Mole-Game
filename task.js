function game() {

    let dead = document.getElementById('dead');
    let lost = document.getElementById('lost');

    for (let i=1; i < 10; i++) {
        let getHole = i => document.getElementById(`hole${i}`)

        function replyToUser(text) {
            alert(text);
            dead.textContent = 0;
            lost.textContent = 0;
        }
                      
        document.getElementById(`hole${i}`).onclick = function() {
 
            if (getHole(i).className.includes('hole_has-mole')) {
                dead.textContent = Number(dead.textContent) + 1;
                if (Number(dead.textContent) === 10) {
                    replyToUser('Вы победили!')
                }   
            }

            else {
                lost.textContent = Number(lost.textContent) + 1;
                if (Number(lost.textContent) === 5) {
                    replyToUser('Вы проиграли ;(')   
                }
            }                       
        };
    };
}

game()