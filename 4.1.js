class Character {
  constructor() {
    this.position = {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10)
    }
  }
}

class PlayerCharacter extends Character {
}

class NonPlayerCharacter extends Character {
}

pc = new PlayerCharacter;
npc = new NonPlayerCharacter;

console.log("pc position: ", pc.position);
console.log("npc position: ", npc.position);