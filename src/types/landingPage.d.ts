export interface LandingPageContent {
    greeting: string;
    title: string;
    description1: string;
    description2?: string;
    backgroundLandingPage: string;
    onClick?: () => void;
  }

export interface LandingPageProps{
  content: LandingPageContent;
}
  