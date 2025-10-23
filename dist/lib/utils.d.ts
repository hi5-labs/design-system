import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function getColorForScore(score: number): string;
export declare function getColorForTotalScore(score: number): string;
export declare const getStatusColor: (status: string) => string;
export declare function formatTimeAgo(inputDateStr: string): string;
export interface ScoreWeights {
    education: number;
    priorEmployment: number;
    projectMatch: {
        experience: number;
        seniority: number;
        topRequirements: number;
    };
    skills: number;
    upworkExperience: number;
}
export interface ProjectMatchScores {
    experience_match: {
        score: number;
    };
    seniority_match: {
        score: number;
    };
    top_requirements_match: Array<{
        match_score: number;
    }>;
}
export interface AnalysisData {
    education: {
        confidence_score: number;
    };
    prior_employment: {
        confidence_score: number;
    };
    project_match: ProjectMatchScores;
    skills: Array<{
        confidence_score: number;
    }>;
    upwork_experience: {
        confidence_score: number;
    };
}
export declare const DEFAULT_WEIGHTS: ScoreWeights;
export declare function calculateOverallScore(data: AnalysisData, weights?: ScoreWeights): number;
//# sourceMappingURL=utils.d.ts.map