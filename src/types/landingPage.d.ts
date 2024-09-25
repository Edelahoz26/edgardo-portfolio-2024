export interface LandingPageContent {
    greeting: string;
    title: string;
    description1: string;
    description2?: string;
    backgroundLandingPage: string;
  }

export interface LandingPageProps{
  content: LandingPageContent;
}
  