const notes =[
    {
      id:1,
      title:"My first Note",
      timestamp: Date.now(),
      contents:"Thinking longingly about tuna brine if it fits, i sits, or jump five feet high and sideways when a shadow moves, crusty butthole, so disappear for four days and return home with an expensive injury; bite the vet. Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers poop in litter box, scratch the walls and good morning sunshine for hide when guests come over run off table persian cat jump eat fish. Chase mice this cat happen now, it was too purr-fect!!! hide when guests come over claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? or purr for no reason but steal the warm chair right after you get up man running from cops stops to pet cats, goes to jail. I want to go outside let me go outside nevermind inside is better step on your keyboard while you're gaming and then turn in a circle for murf pratt ungow ungow"
  
    },
    {
      id:2,
      title:"My second note",
      timestamp: Date.now(),
      contents:"a feathery toy scream for no reason at 4 am i dreamt about fish yum! but trip on catnip. Run at 3am cat cat moo moo lick ears lick paws or cats are fats i like to pets them they like to meow back. Taco cat backwards spells taco cat. Annoy kitten brother with poking check cat door for ambush 10 times before coming in kitty. Try to jump onto window and fall while scratching at wall shove bum in owner's face like camera lens or shake treat bag. Climb into cupboard and lick the salt off rice cakes with tail in the air stand in doorway, unwilling to chose whether to stay in or go out. I will ruin the couch with my claws i like cats because they are fat and fluffy meow loudly just to annoy owners have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat or go into a room to decide you didn't want to be in there anyway hunt anything. Chew on cable just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now jumps off balcony "
    }
  ];

  function getNotes() {
    return notes
  }
  exports.getNotes =getNotes

  function getNote(id) {
    return notes.find((note) => note.id === id);
  }
  exports.getNote =getNote


  function addNote(note) {

  }
  exports.addNote =addNote

  function deleteNote(id) {
    
  }
  exports.deleteNote = deleteNote