const card = []
function writeCards(name,event) {
  for (let i = 0; i < name.length; i++) {
    card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    debugger;
    }      
    return card;
     }
    
function countDown() {
  let number=10
  while (number >= 0) 
  console.log(number--)

} 