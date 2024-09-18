"use strict";
//exercice 1
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
    //contructeur
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
        this.nom = nom;
        this.notes = notes;
    }
    //getter de nom
    getNom() {
        return this.nom;
    }
    //getter de notes
    getNotes() {
        return this.notes;
    }
    //setter de nom
    setNom(nom) {
        this.nom = nom;
    }
    //setter de notes
    setNotes(nom) {
        this.nom = nom;
    }
    //methode pour calculer la moyenne
    calculerMoyenne() {
        let nbrMatiere = this.getNotes().length;
        let totalNotes = 0;
        this.getNotes().forEach(note => {
            totalNotes += note;
        });
        return totalNotes / nbrMatiere;
    }
    //trouver la note maximale
    trouverMax() {
        const max = this.getNotes().reduce((a, b) => Math.max(a, b), -Infinity);
        return max;
    }
    //trouver la note minimale
    trouverMin() {
        const min = this.getNotes().reduce((a, b) => Math.min(a, b), -Infinity);
        return min;
    }
}
class Formation {
    intitule;
    nbrJours;
    stagiaire;
    //contructeur pour la formation
    constructor(intitule, nbrJours, stagiaire) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaire = stagiaire;
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaire = stagiaire;
    }
    //getter pour l'intitule
    getIntitule() {
        return this.intitule;
    }
    //getter pout le nbrJours
    getNbrJour() {
        return this.nbrJours;
    }
    //getter pour les stagiaires
    getStagiaire() {
        return this.stagiaire;
    }
    //setter pour l'intitule
    setIntitule(intl) {
        this.intitule = intl;
    }
    //setter pout le nbrJours
    setNbrJours(nbrJours) {
        this.nbrJours = nbrJours;
    }
    //setter pour les stagiaires
    setStagiaire(stg) {
        this.stagiaire = stg;
    }
    calculerMoyenneFormation() {
        let totalMoyenneStagiaire = 0;
        this.stagiaire.map(stg => {
            totalMoyenneStagiaire += stg.calculerMoyenne();
        });
        let nombreDeStagiaire = this.stagiaire.length;
        return totalMoyenneStagiaire / nombreDeStagiaire;
    }
}
//creation des stagiaires
const stagiaire1 = new Stagiaire('Brandon', [15, 15, 15]);
const stagiaire2 = new Stagiaire('Fidelin', [10, 15, 11]);
const stagiaire3 = new Stagiaire('Ravomanana', [12, 13, 17]);
//initialisation de la formation
const formation = new Formation('Stage', 15, [stagiaire1, stagiaire2, stagiaire3]);
console.log('====================================');
console.log(formation.calculerMoyenneFormation());
console.log('====================================');
