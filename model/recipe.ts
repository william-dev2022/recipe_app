export interface Recipe {
    total_time_tier: any;
    name : string;
    description: string;
    slug:string;
    videoUrl : string;
    thumbnailUrl:string;
    cookTime: string;
    instruction:RecipeInstruction
}

interface RecipeInstruction{
    text:string,
    temperature: number | null,
    position: number,
}