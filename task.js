function game() {

    let dead = document.getElementById('dead');
    let lost = document.getElementById('lost');

    for (let i=1; i < 10; i++) {
        let getHole = i => document.getElementById(`hole${i}`)
                      
        document.getElementById(`hole${i}`).onclick = function() {
 
            if (getHole(i).className.includes('hole_has-mole')) {
                dead.textContent = Number(dead.textContent) + 1;
                if (Number(dead.textContent) === 10) {
                    alert('Вы победили!')
                    dead.textContent = 0;
                    lost.textContent = 0;          
                }   
            }

            else {
                lost.textContent = Number(lost.textContent) + 1;
                if (Number(lost.textContent) === 5) {
                    alert('Вы проиграли :(')
                    dead.textContent = 0;
                    lost.textContent = 0;    
                }
            }                       
        };
    };
}

game()