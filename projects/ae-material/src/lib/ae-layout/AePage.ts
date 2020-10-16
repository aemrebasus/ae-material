import { IconType } from '../common/IconType';


export interface AePageModelItem {
    title: string;
    subTitle: string;
    summary: string;
    img: string;
    date: string;
    client: string;
    category: string;
}

export interface AePageModal {
    modal?: AePageModelItem;
}


export interface AePageServiceItem extends AePageModal {
    icon: IconType;
    name: string;
    summary: string;
}

export interface AePageServiceSection {
    greeting: string;
    services: AePageServiceItem[];
}

export interface AePagePortfolioItem extends AePageModal {
    name: string;
    type: string;
    img: string;

}
export interface AePagePortfolioSection {
    greeting: string;
    portfolios: AePagePortfolioItem[];
}

export interface AePageAboutItem extends AePageModal {
    date: string;
    heading: string;
    summary: string;
    img: string;
    inverted?: boolean;
}

export interface AePageAboutSection {
    greeting: string;
    about: AePageAboutItem[];
}

export interface AePageTeamItem extends AePageModal {
    memberName: string;
    position: string;
    tiwitter: string;
    facebook: string;
    linkedin: string;
    bottomMessage: string;
}

export interface AePageClientItem extends AePageModal {
    img: string;
    href: string;
}

export interface AePageTeamSection {
    greeting: string;
    team: AePageTeamItem[];
    clients: AePageClientItem[];
}

export interface AePageContactSection {
    greeting: string;
}

export interface AePageHeader {
    logo: string;
    greetingMain: string;
    greetingSub: string;
    tellMeMoreTarget: string;
}

export interface AePage {

    header: AePageHeader;
    services: AePageServiceSection;
    portfolio: AePagePortfolioSection;
    about: AePageAboutSection;
    team: AePageTeamSection;
    contact: AePageContactSection;
}

