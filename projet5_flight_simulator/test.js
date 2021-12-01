class Personnage {

    constructor(pseudo, classe, sante, attaque, niveau = 1) {
        this._pseudo = pseudo;
        this._classe = classe;
        this._sante = sante;
        this._niveau = niveau;
        this._attaque = attaque;

    }

    evoluer() {
        this._niveau++;
        console.log(this._pseudo + " passe au niveau " + this._niveau);
    }

    verifierSante() {
        if (this._sante <= 0) {
            this._sante = 0;
            console.log(this._pseudo + " a perdu !");
        }

    }

    informations() {
        console.log(this.pseudo + " " + this.classe + "a " + this.sante + " point de vie et est au niveau " + this.niveau);
    }

    //guetters
    get pseudo() {
        return this._pseudo;
    }

    get classe() {
        return this._classe;
    }

    get sante() {
        return this._sante;
    }

    get niveau() {
        return this._niveau;
    }

    get attaque() {
        return this._attaque;
    }

    set pseudo(value) {
        this._pseudo = value;
    }

    set classe(value) {
        this._classe = value;
    }

    set sante(value) {
        this._sante = value;
    }

    set attaque(value) {
        this._attaque = value;
    }

}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Magicien", 170, 90);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort " + this.attaque + " dégâts.");
        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + personnage.pseudo + this.attaque * 5 + " dégâts.");
        this.evoluer();
        this.verifierSante();
    }

}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "Guerrier", 350, 50);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée " + this.attaque + " dégâts.");
        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + personnage.pseudo + this.attaque * 5 + " dégâts.");
        this.evoluer();
        this.verifierSante();
    }

}
var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);
console.log(thor.informations);
thor.coupSpecial(gandalf);
console.log(gandalf.informations);