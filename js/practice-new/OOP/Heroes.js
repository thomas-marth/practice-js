const Hero = function (name, HP, MP) {
    this.name = name;
    this.HP = HP;
    this.MP = MP;
    this.baseHP = this.HP;
    this.baseMP = this.MP;
    this.exp = 0;
    this.level = 1;

    this.attack = function () {
        if (this.simpleHit.manaCost > this.MP) return; 

        this.MP -= this.simpleHit.manaCost;
        this.exp += 50; 
        return this.simpleHit.dmg; 
    };

    this.setDmg = function (dmg) {
        if (this.HP - dmg > this.baseHP) this.HP = this.baseHP;
        else this.HP -= dmg;

        if (this.HP < 0)
            this.rip();
    }; 

    this.rip = function () {
        this.HP = this.baseHP;
        this.MP = this.baseMP;
        this.exp /= 2;
    };

};

const Hit = function(dmg, manaCost) {
    this.dmg = dmg;
    this.manaCost = manaCost;
};

const Elf = function (name) {
    Hero.call(this, name, 1000, 3000);

    this.simpleHit = new Hit(200, 100);
};

const Orc = function(name) {
    Hero.call(this, name, 3000, 1000);

    this.simpleHit = new Hit(250, 100);
};

const Human = function (name) {
    Hero.call(this, name, 2000, 2000);

    this.simpleHit = new Hit(220, 150);

    this.attack = function () {
        this.MP -= this.simpleHit.manaCost;
        this.exp += 50; 
        return this.simpleHit.dmg * (-1); 
    }

}; 

const orc = new Orc('Bill');
const elf = new Elf('Sem');
const human = new Human('Michle');

elf.setDmg(orc.attack());
elf.setDmg(human.attack());

human.setDmg(orc.attack());
human.setDmg(human.attack());
human.setDmg(human.attack());

console.log(elf);
console.log(orc);
console.log(human);