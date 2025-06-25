export interface Operation {
    rank: number;
    name: string;
    manipulation: Manipulation[];
    prevention: string;
}

export interface Manipulation {
     name: string;
     risques: string[];
}