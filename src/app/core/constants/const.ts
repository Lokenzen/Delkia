import { Operation } from "../models/operation";

export const techniciens: string[] = ['André Stoclin', 'Tom Kernoa', 'Jean Dupont', 'Albert Einstein', 'Isaac Newton', 'Galilée', 'Nicolas Tesla', 'Ada Lovelace', 'Alan Turing'];
export const tools: string[] = [
  'Gants', 'Casque', 'Veste', 'Marteau', 'Pince', 'Tournevis',
  'Clé à molette', 'Scie', 'Perceuse', 'Lunettes de sécurité',
  'Bottes de sécurité', 'Gilet de sécurité'
];
export const types: string[] = ['Mode opératoire', 'Procédure de sécurité', 'Plan de prévention', 'Fiche d\'intervention'];
export const operations: string[] = [
  'Opération de maintenance', 'Opération de nettoyage', 'Opération de réparation',
  'Opération de contrôle', 'Opération de démontage', 'Opération de montage'
];

export const couperOperation: Operation = {
  rank: 0,
  name: 'Couper l\'eau',
  manipulation: [
    {
      name: 'Tourner la vanne principale',
      risques: ['se mouiller', 'perte de pression', 'fuite d\'eau']
    },
    {
      name: 'Vérifier l\'étanchéité de la vanne',
      risques: ['fuite d\'eau', 'mauvaise manipulation', 'perte de pression']
    }
  ],
  prevention: 'Il est important de s\'assurer que la vanne est bien fermée avant de commencer l\'opération. Porter des gants et des lunettes de sécurité pour éviter les éclaboussures. \n Bien vérifier que l\'eau est coupée avant de procéder à toute manipulation. \n En cas de doute, demander l\'aide d\'un technicien qualifié.'
};

export const listeOperations: Operation[] = [ couperOperation ]