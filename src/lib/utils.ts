import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getColorForScore (score: number): string {
  if (score >= 0.9) {
    return `rgba(224, 255, 232, 1)`;
  } else if (score < 0.9 && score >= 0.5) {
    return `rgba(255, 248, 214, 1)`;
  } else if (score < 0.5 && score >= 0.4) {
    return `rgba(255, 237, 214, 1)`;
  } else {
    return `rgba(255, 218, 214, 1)`;
  }
}

export function getColorForTotalScore (score: number): string {
  if (score >= 0.9) {
    return `rgba(48, 95, 56, 1)`;
  } else if (score < 0.9 && score >= 0.5) {
    return `rgba(241, 216, 51, 1)`;
  } else if (score < 0.5 && score >= 0.4) {
    return `rgba(230, 152, 51, 1)`;
  } else {
    return `rgba(138, 48, 32, 1)`;
  }
}

export const getStatusColor = (status: string): string => {
  const score = parseFloat(status.replace('%', ''));

  if (isNaN(score)) {
    return 'rgba(180, 180, 180, 1)';
  }

  if (score >= 90) {
    // to do 700
    return 'rgba(40, 167, 69, 1)';
  } else if (score >= 50) {
    return 'rgba(234, 179, 8, 1)';
  } else if (score >= 40) {
    return 'rgba(249, 115, 22, 1)';
  } else {
    return 'rgba(239, 68, 68, 1)';
  }
};

export function formatTimeAgo(inputDateStr: string): string {
  // Handle null, undefined, or empty strings
  if (!inputDateStr || inputDateStr === 'N/A') {
    return 'N/A';
  }

  // This assumes "YYYY-MM-DD HH:mm:ss" as local time string
  const [datePart, timePart] = inputDateStr.split(' ');

  // Validate that we have both date and time parts
  if (!datePart || !timePart) {
    return 'N/A';
  }

  // Build local date directly
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second] = timePart.split(':').map(Number);

  const localDate = new Date(year, month - 1, day, hour, minute, second); // no timezone shift

  const now = new Date();
  const diffMs = now.getTime() - localDate.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);

  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min${diffMin === 1 ? '' : 's'} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour === 1 ? '' : 's'} ago`;

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    localDate.getDate() === yesterday.getDate() &&
    localDate.getMonth() === yesterday.getMonth() &&
    localDate.getFullYear() === yesterday.getFullYear();

  if (isYesterday) {
    return 'Yesterday';
  }

  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  if (localDate.getFullYear() !== now.getFullYear()) {
    options.year = 'numeric';
  }

  return localDate.toLocaleDateString("en-US", options);
}

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
  experience_match: { score: number };
  seniority_match: { score: number };
  top_requirements_match: Array<{ match_score: number }>;
}

export interface AnalysisData {
  education: { confidence_score: number };
  prior_employment: { confidence_score: number };
  project_match: ProjectMatchScores;
  skills: Array<{ confidence_score: number }>;
  upwork_experience: { confidence_score: number };
}

export const DEFAULT_WEIGHTS: ScoreWeights = {
  education: 0.15,
  priorEmployment: 0.15,
  projectMatch: {
    experience: 0.2,
    seniority: 0.15,
    topRequirements: 0.2,
  },
  skills: 0.1,
  upworkExperience: 0.05,
};

export function calculateOverallScore(
  data: AnalysisData,
  weights: ScoreWeights = DEFAULT_WEIGHTS
): number {
  // Calculate education score
  const educationScore = data.education.confidence_score * weights.education;

  // Calculate prior employment score
  const priorEmploymentScore = data.prior_employment.confidence_score * weights.priorEmployment;

  // Calculate project match scores
  const experienceMatchScore = data.project_match.experience_match.score * weights.projectMatch.experience;
  const seniorityMatchScore = data.project_match.seniority_match.score * weights.projectMatch.seniority;
  
  // Calculate average of top requirements match scores
  const topRequirementsAvg = data.project_match.top_requirements_match.reduce(
    (sum, req) => sum + req.match_score,
    0
  ) / data.project_match.top_requirements_match.length;
  const topRequirementsScore = topRequirementsAvg * weights.projectMatch.topRequirements;

  // Calculate skills score (average of all skill confidence scores)
  const skillsAvg = data.skills.reduce(
    (sum, skill) => sum + skill.confidence_score,
    0
  ) / data.skills.length;
  const skillsScore = skillsAvg * weights.skills;

  // Calculate Upwork experience score
  const upworkScore = data.upwork_experience.confidence_score * weights.upworkExperience;

  // Sum all weighted scores
  const totalScore = educationScore +
    priorEmploymentScore +
    experienceMatchScore +
    seniorityMatchScore +
    topRequirementsScore +
    skillsScore +
    upworkScore;

  // Ensure the score is between 0 and 1
  return Math.min(Math.max(totalScore, 0), 1);
}
