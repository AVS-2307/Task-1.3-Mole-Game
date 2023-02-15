function game() {
    let dead = 0;
    let lost = 0;
    for (let i=1; i < 10; i++) {
        getHole = i => document.getElementById(`hole${i}`)        
        document.getElementById(`hole${i}`).onclick = function() {
            if (getHole(i).className.includes('hole_has-mole')) {
                dead++
                document.getElementById('dead').innerText = dead

                if (dead === 10) {                    
                    alert('Вы победили!')
                    let dead = 0;
                    let lost = 0;
                    document.getElementById('dead').innerText = dead
                    document.getElementById('lost').innerText = lost
                    return countEvents()         
                    }                
            }            
            else {
                lost++
                document.getElementById('lost').innerText = lost
                            
                if (lost === 5) {
                    alert('Вы проиграли :(')
                    let dead = 0;
                    let lost = 0;
                    document.getElementById('dead').innerText = dead
                    document.getElementById('lost').innerText = lost
                    return countEvents()                       
                    }                 
            };   
        };
    

    };

}

game()