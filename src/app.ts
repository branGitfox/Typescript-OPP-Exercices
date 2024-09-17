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

}
