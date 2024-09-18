declare class Point {
    private abs;
    private ord;
    constructor(abs: number, ord: number);
    getAbs(): number;
    getOrd(): number;
    setAbs(abs: number): void;
    setOrd(ord: number): void;
    calculerDistance(p: Point): number;
    calculMilieu(p: Point): object;
}
declare class Stagiaire {
    private nom;
    private notes;
    constructor(nom: string, notes: number[]);
    getNom(): string;
    getNotes(): number[];
    setNom(nom: string): void;
    setNotes(nom: string): void;
    calculerMoyenne(): number;
    trouverMax(): number;
    trouverMin(): number;
}
declare class Formation {
    private intitule;
    private nbrJours;
    private stagiaire;
    constructor(intitule: string, nbrJours: number, stagiaire: Stagiaire[]);
    getIntitule(): string;
    getNbrJour(): number;
    getStagiaire(): Stagiaire[];
    setIntitule(intl: string): void;
    setNbrJours(nbrJours: number): void;
    setStagiaire(stg: Stagiaire[]): void;
    calculerMoyenneFormation(): number;
}
declare const stagiaire1: Stagiaire;
declare const stagiaire2: Stagiaire;
declare const stagiaire3: Stagiaire;
declare const formation: Formation;
