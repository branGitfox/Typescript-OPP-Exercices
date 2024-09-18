//exercice 1
var Point = /** @class */ (function () {
    //initialisation des attributs
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    //getter de abs
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    //getter de ord
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    //setter de abs
    Point.prototype.setAbs = function (abs) {
        this.abs = abs;
    };
    //setter de ord
    Point.prototype.setOrd = function (ord) {
        this.ord = ord;
    };
    //calcul de la distance entre deux point
    Point.prototype.calculerDistance = function (p) {
        return Math.sqrt(Math.pow((this.getAbs() + this.getOrd()), 2) + Math.pow((p.getAbs() + p.getOrd()), 2));
    };
    //calcul du point milieu
    Point.prototype.calculMilieu = function (p) {
        var M = {};
        M.xm = (this.getAbs() + this.getOrd()) / 2;
        M.ym = (p.getAbs() + this.getOrd()) / 2;
        return M;
    };
    return Point;
}());
//exercice 2
var Stagiaire = /** @class */ (function () {
    //contructeur
    function Stagiaire(nom, notes) {
        this.nom = nom;
        this.notes = notes;
        this.nom = nom;
        this.notes = notes;
    }
    //getter de nom
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    //getter de notes
    Stagiaire.prototype.getNotes = function () {
        return this.notes;
    };
    //setter de nom
    Stagiaire.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    //setter de notes
    Stagiaire.prototype.setNotes = function (nom) {
        this.nom = nom;
    };
    //methode pour calculer la moyenne
    Stagiaire.prototype.calculerMoyenne = function () {
        var nbrMatiere = this.getNotes().length;
        var totalNotes = 0;
        this.getNotes().forEach(function (note) {
            totalNotes += note;
        });
        return totalNotes / nbrMatiere;
    };
    //trouver la note maximale
    Stagiaire.prototype.trouverMax = function () {
        var max = this.getNotes().reduce(function (a, b) { return Math.max(a, b); }, -Infinity);
        return max;
    };
    //trouver la note minimale
    Stagiaire.prototype.trouverMin = function () {
        var min = this.getNotes().reduce(function (a, b) { return Math.min(a, b); }, -Infinity);
        return min;
    };
    return Stagiaire;
}());
var Formation = /** @class */ (function () {
    function Formation() {
    }
    return Formation;
}());
console.log('====================================');
console.log(new Poin(12, 4).getAbs());
console.log('====================================');
