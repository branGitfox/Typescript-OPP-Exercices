//exercice 1
class Point {

    //initialisation des attributs
    constructor(private abs:number, private ord:number){

    }

    //getter de abs
    getAbs():number{
        return this.abs
    }

    //getter de ord
    getOrd():number {
        return this.ord
    }

    //setter de abs
    setAbs(abs:number):void{
        this.abs = abs
    }

    //setter de ord
    setOrd(ord:number):void{
        this.ord = ord
    }

    //calcul de la distance entre deux point
    calculerDistance(p:Point):number{
        return Math.sqrt(Math.pow((this.getAbs()+this.getOrd()), 2) + Math.pow((p.getAbs()+p.getOrd()), 2))
    }

    //calcul du point milieu
    calculMilieu(p:Point):object{
        const M:{
            xm?:number
            ym?:number
        }={}

        M.xm = (this.getAbs() + this.getOrd()) / 2
        M.ym = (p.getAbs() + this.getOrd()) / 2

        return M
    }
}

//exercice 2
class Stagiaire {

    //contructeur
    constructor(private nom:string, private notes:number[]){
        this.nom =nom
        this.notes=notes
    }

    //getter de nom
    getNom():string{
        return this.nom
    }

    //getter de notes
    getNotes():number[]{
        return this.notes
    }

    //setter de nom
    setNom(nom:string):void{
        this.nom = nom
    }

    //setter de notes
    setNotes(nom:string):void{
        this.nom = nom
    }

    //methode pour calculer la moyenne
    calculerMoyenne():number{
        let nbrMatiere :number =  this.getNotes().length
        let totalNotes:number =0
         this.getNotes().forEach(note => {
            totalNotes +=note
        });

        return totalNotes / nbrMatiere
    }

    //trouver la note maximale
    trouverMax():number{
      const max = this.getNotes().reduce((a, b) => Math.max(a, b), -Infinity)

      return max
    }

    //trouver la note minimale
    trouverMin():number{
        const min = this.getNotes().reduce((a, b) => Math.min(a, b), -Infinity)
        return min
    }


}


class Formation {
    

    //contructeur pour la formation
    constructor(private intitule:string, private nbrJours:number, private stagiaire:Stagiaire[]){
        this.intitule = intitule
        this.nbrJours = nbrJours
        this.stagiaire = stagiaire
    }

    //getter pour l'intitule
    getIntitule():string{
        return this.intitule
    }

    //getter pout le nbrJours
    getNbrJour():number{
        return this.nbrJours
    }

    //getter pour les stagiaires
    getStagiaire():Stagiaire[]{
        return this.stagiaire
    }

    //setter pour l'intitule
    setIntitule(intl:string):void{
        this.intitule = intl
    }

    //setter pout le nbrJours
    setNbrJours(nbrJours:number):void{
        this.nbrJours = nbrJours
    }

    //setter pour les stagiaires
    setStagiaire(stg:Stagiaire[]):void{
        this.stagiaire = stg
    }

    calculerMoyenneFormation():number{
        let totalMoyenneStagiaire:number = 0
         this.stagiaire.map(stg => {
            totalMoyenneStagiaire+= stg.calculerMoyenne()
        })

        let nombreDeStagiaire:number = this.stagiaire.length

        return totalMoyenneStagiaire / nombreDeStagiaire

    }
}

//creation des stagiaires
const stagiaire1 = new Stagiaire('Brandon', [15, 15, 15])
const stagiaire2 = new Stagiaire('Fidelin', [10, 15, 11])
const stagiaire3 = new Stagiaire('Ravomanana', [12, 13, 17])

//initialisation de la formation
const formation = new Formation('Stage', 15, [stagiaire1, stagiaire2, stagiaire3])
console.log('====================================');
console.log(formation.calculerMoyenneFormation());
console.log('====================================');