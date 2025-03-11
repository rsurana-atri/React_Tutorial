export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    vegetarian: boolean;
    vegan: boolean;
    difficulty: string;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';