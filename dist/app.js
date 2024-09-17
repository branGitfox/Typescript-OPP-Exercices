"use strict";
class Point {
    abs;
    ord;
    //initialisation des attributs
    constructor(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    //getter de abs
    getAbs() {
        return this.abs;
    }
    //getter de ord
    getOrd() {
        return this.ord;
    }
    //setter de abs
    setAbs(abs) {
        this.abs = abs;
    }
    //setter de ord
    setOrd(ord) {
        this.ord = ord;
    }
    //calcul de la distance entre deux point
    calculerDistance(p) {
        return Math.sqrt(Math.pow((this.getAbs() + this.getOrd()), 2) + Math.pow((p.getAbs() + p.getOrd()), 2));
    }
    //calcul du point milieu
    calculMilieu(p) {
        const M = {};
        M.xm = (this.getAbs() + this.getOrd()) / 2;
        M.ym = (p.getAbs() + this.getOrd()) / 2;
        return M;
    }
}
//exercice 2
class Stagiaire {
    nom;
    notes;
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
        this.nom = nom;
        this.notes = notes;
    }
}
