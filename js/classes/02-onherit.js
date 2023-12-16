// - extends
// - super()

class Hero {
  constructor({ name = "hero", xp = 0 }) {
    this._name = name;
    this._xp = xp;
  }
  gainXp(amount) {
    console.log(`${this._name} отримує: ${amount} досвіду`);
    this._xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...resProps } = {}) {
    this._weapon = weapon;
    super(resProps);
  }

  attack() {
    console.log(`${this._name} атакує зброєю ${this._weapon}`);
  }
}
class Berserk extends Warrior {
  constructor({ skill, ...resProps } = {}) {
    this._skill = skill;
    super(resProps);
  }

  skillUsage() {
    console.log(`${this._name} використовує ${this._skill}`);
  }
}

class Druid extends Berserk {
  constructor({ mana, ...resProps } = {}) {
    this._mana = mana;
    super(resProps);
  }

  druidSkillUsage() {
    console.log(
      `${this._name} взиває до природи та вона робить перед героєм ${this._skill}. 
      Використовується ${this._mana}`
    );
  }
}

const user1 = new Berserk({name: "Alduir", xp:0, weapon:"Axe", skill:"Warcry"});