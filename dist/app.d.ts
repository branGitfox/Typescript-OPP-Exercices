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
}
