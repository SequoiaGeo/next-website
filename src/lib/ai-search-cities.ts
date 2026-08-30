export type CityAiSearchSource = {
  label: string;
  href: string;
  note: string;
};

export type CityAiSearchCheck = {
  title: string;
  body: string;
};

export type CityAiSearchFaq = {
  question: string;
  answer: string;
};

export type CityAiSearchSurface = {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  indexDescription: string;
  relationship: string;
  scope: string;
  verificationFocus: {
    title: string;
    body: string;
  };
  verificationChecks: CityAiSearchCheck[];
  questions: string[];
  officialSources: CityAiSearchSource[];
  faqs: CityAiSearchFaq[];
};

export const aiSearchCities: CityAiSearchSurface[] = [
  {
    slug: "fresno-ca",
    city: "Fresno",
    state: "California",
    stateAbbr: "CA",
    indexDescription:
      "Sequoia's home market, used to show how local identity, licensing, services, and public evidence can be reconciled before recommendation claims are made.",
    relationship:
      "Sequoia GEO is based in Fresno. This is the one city in this pilot where Sequoia claims a local operating presence.",
    scope:
      "A Fresno AI search assessment starts by separating the business customers intend to hire from similarly named companies, old locations, incomplete profiles, and service claims that no longer match the operation. The work then tests whether AI products retrieve and describe the same verified entity across locally framed commercial questions.",
    verificationFocus: {
      title: "Use a real local entity as the starting point",
      body:
        "Fresno gives Sequoia a direct test of its own standard. The company name, Fresno location, services, founder history, public profiles, and published methods should agree before Sequoia asks another local business to meet the same standard. When they do not agree, the contradiction is recorded and corrected before visibility is presented as progress.",
    },
    verificationChecks: [
      {
        title: "Fresno service-area language",
        body:
          "Compare the exact communities a company says it serves across its website, Google Business Profile, directories, and customer-facing forms. Do not infer coverage from a city keyword or a nearby address.",
      },
      {
        title: "California license identity",
        body:
          "Match the licensed business name, status, classification, and personnel shown by California's official contractor lookup to the claims visible on the website. A license record is evidence about licensure, not service quality.",
      },
      {
        title: "Current services",
        body:
          "Separate services the company currently performs from discontinued work, vendor categories, and old pages that may still appear in search results or AI citations.",
      },
      {
        title: "First-hand Fresno evidence",
        body:
          "Look for dated project explanations, locally relevant customer questions, named authorship, and other material that demonstrates experience without manufacturing neighborhood pages.",
      },
      {
        title: "Answer and source consistency",
        body:
          "Record whether generated answers describe the same business and which sources support the description. A favorable answer is retained as one observation, not declared a stable ranking.",
      },
    ],
    questions: [
      "Who should a Fresno home service company hire to improve its visibility in ChatGPT and Google AI?",
      "Which Fresno marketing agencies work directly with HVAC, plumbing, roofing, and restoration companies?",
      "How can a Fresno contractor verify what AI search systems say about its business?",
      "What should a Fresno business correct before investing in AI SEO?",
      "Which public sources should support a home service recommendation in Fresno?",
    ],
    officialSources: [
      {
        label: "California Contractors State License Board license check",
        href: "https://cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
        note: "Official California lookup for contractor license and registration information. Read August 29, 2026.",
      },
    ],
    faqs: [
      {
        question: "Is Sequoia GEO located in Fresno?",
        answer:
          "Yes. Sequoia GEO is based in Fresno, California, and also works with companies nationally. A Fresno page can therefore describe Sequoia's local relationship without implying offices in other pilot cities.",
      },
      {
        question: "What does Sequoia verify for a Fresno contractor?",
        answer:
          "The review compares the website, public profiles, current services, service-area language, supported credentials, and official California license information when licensing applies. It then observes a fixed set of AI search questions and records the visible sources and limitations.",
      },
      {
        question: "Does correcting Fresno business information guarantee an AI recommendation?",
        answer:
          "No. Corrections can make public information more accurate and easier to verify, but AI answers vary by product, prompt, location, account state, and date. Sequoia reports repeated observations without promising inclusion.",
      },
    ],
  },
  {
    slug: "colorado-springs-co",
    city: "Colorado Springs",
    state: "Colorado",
    stateAbbr: "CO",
    indexDescription:
      "A credential and service-area test built around official regional contractor records and locally framed home-service questions.",
    relationship:
      "Sequoia GEO serves companies nationally and does not claim a Colorado Springs office. This page covers businesses that serve the market.",
    scope:
      "A Colorado Springs assessment examines whether a contractor's website, public profiles, regional licensing information, services, and stated coverage describe the same operating business. It does not assume that a company serves every nearby community or that one credential applies to every trade and project.",
    verificationFocus: {
      title: "Reconcile regional credentials with the public business story",
      body:
        "Pikes Peak Regional Building Department provides a public contractor search and serves multiple participating jurisdictions. That creates a verifiable source for certain contractor facts, but the record must still be matched to the correct business entity, trade, status, and customer-facing website. The assessment documents disagreements rather than filling gaps with assumptions.",
    },
    verificationChecks: [
      {
        title: "Regional contractor record",
        body:
          "Check the official regional contractor source when it applies, then compare the listed identity with the name and credentials shown to customers. Do not turn a search result into a broad claim about qualifications.",
      },
      {
        title: "Service-area boundaries",
        body:
          "Verify the cities and communities the company actually accepts work in. Keep the operating area distinct from the locations mentioned only for search visibility.",
      },
      {
        title: "Trade and project fit",
        body:
          "Clarify whether the company performs repair, replacement, emergency, inspection, insurance-related, or restoration work and whether public categories match those services.",
      },
      {
        title: "Entity and location consistency",
        body:
          "Compare the legal name, public brand, contact information, locations, and structured data so an AI answer is not combining separate companies or outdated records.",
      },
      {
        title: "Repeated local observations",
        body:
          "Use a frozen Colorado Springs question panel and retain both appearances and misses. Record the answer, sources, date, product, and geography without calling the observation a lead.",
      },
    ],
    questions: [
      "Which Colorado Springs home service marketing agencies specialize in AI search visibility?",
      "How can a Colorado Springs contractor check whether ChatGPT describes its license and services correctly?",
      "What sources influence contractor recommendations in Colorado Springs AI search results?",
      "How should an HVAC company serving Colorado Springs measure AI referrals separately from ordinary organic traffic?",
      "What public contradictions can keep a Colorado Springs roofer from being understood correctly by AI search?",
    ],
    officialSources: [
      {
        label: "Pikes Peak Regional Building Department contractor search",
        href: "https://account.pprbd.org/publicaccess/contractors.aspx",
        note: "Official regional contractor information and search. Read August 29, 2026.",
      },
    ],
    faqs: [
      {
        question: "Does Sequoia GEO have an office in Colorado Springs?",
        answer:
          "No. Sequoia is based in Fresno and works with companies nationally. This page addresses AI search visibility for businesses serving Colorado Springs and does not represent a local Sequoia office.",
      },
      {
        question: "Why include regional contractor records in an AI SEO review?",
        answer:
          "Official records can confirm or contradict public claims about a business entity and its credentials. They are one evidence source, not a quality rating, endorsement, or guarantee that an AI product will recommend the company.",
      },
      {
        question: "How is Colorado Springs AI visibility measured?",
        answer:
          "Sequoia uses a dated, fixed question panel and records mentions, citations, recommendations, referral visits, inquiries, and qualified leads separately. Misses remain in the record so the result does not depend on selecting favorable answers.",
      },
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    stateAbbr: "ID",
    indexDescription:
      "A service and entity consistency test using Idaho's official occupational and professional license sources where they apply.",
    relationship:
      "Sequoia GEO serves companies nationally and does not claim a Boise office. This page covers businesses that serve Boise and the surrounding market.",
    scope:
      "A Boise AI search assessment tests whether the services a company performs match the website, public profiles, categories, credentials, and locations that search systems can retrieve. Coverage in Boise, Meridian, Nampa, or another community is verified from the company's current operation rather than inferred from a list of city pages.",
    verificationFocus: {
      title: "Separate services offered from services merely listed",
      body:
        "Home service businesses often accumulate old service pages, broad profile categories, and vendor descriptions that outlive the work they actually dispatch. Idaho's Division of Occupational and Professional Licenses also provides public search resources for regulated boards. The assessment matches each relevant fact to the correct source and labels what remains unverified.",
    },
    verificationChecks: [
      {
        title: "Idaho credential source",
        body:
          "Use the official state search for the relevant board when licensing applies. Match the result to the correct business and trade instead of treating any similarly named record as confirmation.",
      },
      {
        title: "Boise-area coverage",
        body:
          "Compare the website, public profiles, and intake path to determine where the company accepts work. A location mentioned in copy is not automatically an active service area.",
      },
      {
        title: "Service and category match",
        body:
          "Reconcile the services on the website with profile categories, booking options, and current operating scope so generated answers do not repeat obsolete or incomplete information.",
      },
      {
        title: "Brand and entity clarity",
        body:
          "Check business names, contact information, locations, and ownership language for conflicts that could split the entity or combine it with another provider.",
      },
      {
        title: "Question-level evidence",
        body:
          "Record how the business appears for distinct repair, replacement, emergency, and marketing questions. Keep citations and recommendations separate from visits and inquiries.",
      },
    ],
    questions: [
      "Who helps Boise home service companies improve visibility in ChatGPT and Gemini?",
      "How can a Boise plumber find conflicting service information across its website and public profiles?",
      "Which sources should support an AI recommendation for an HVAC company serving Boise and Meridian?",
      "How should a Boise contractor test whether AI search recognizes its current service area?",
      "What is the difference between being cited and being recommended in Boise AI search results?",
    ],
    officialSources: [
      {
        label: "Idaho Division of Occupational and Professional Licenses search",
        href: "https://dopl.idaho.gov/search/",
        note: "Official Idaho search covering regulated professions and boards, including contractor-related boards. Read August 29, 2026.",
      },
    ],
    faqs: [
      {
        question: "Does Sequoia GEO have a Boise office?",
        answer:
          "No. Sequoia is based in Fresno and serves companies nationally. This Boise page explains how the AI search method applies to businesses serving the market without claiming a local Sequoia location.",
      },
      {
        question: "What makes a Boise AI search assessment locally relevant?",
        answer:
          "The question panel, service-area checks, public profiles, and applicable Idaho credential sources are specific to the business and its market. The measurement method remains consistent so the observations can be compared over time.",
      },
      {
        question: "Can Sequoia make a Boise company appear in every AI answer?",
        answer:
          "No. Sequoia can identify factual conflicts, improve useful pages, document relevant sources, and observe repeated answers. It cannot control the answer selected by ChatGPT, Gemini, Google AI, or another product.",
      },
    ],
  },
  {
    slug: "chattanooga-tn",
    city: "Chattanooga",
    state: "Tennessee",
    stateAbbr: "TN",
    indexDescription:
      "A cross-state service-area test that distinguishes Tennessee and Georgia credentials, entities, and operating claims.",
    relationship:
      "Sequoia GEO serves companies nationally and does not claim a Chattanooga office. This page covers businesses that serve the Chattanooga market.",
    scope:
      "A Chattanooga assessment pays particular attention to companies that claim service on both the Tennessee and Georgia sides of the market. State credentials, business entities, service areas, and public profiles may need to be checked separately. The page does not assume a contractor is authorized or available across a state line simply because the market name appears in its copy.",
    verificationFocus: {
      title: "Treat cross-state coverage as a fact to verify",
      body:
        "Tennessee and Georgia maintain separate official sources for contractor and business information. When a company says it serves customers across the state line, the assessment checks which entity, credentials, services, and locations support that statement. The result is a source map with unresolved items left visible, not a broad claim inferred from one profile.",
    },
    verificationChecks: [
      {
        title: "Tennessee license and entity record",
        body:
          "Use Tennessee's official contractor and professional-license resources when the work and project require them. Match the public record to the correct operating business and current website.",
      },
      {
        title: "Georgia-side verification",
        body:
          "When Georgia service is claimed, inspect the relevant Georgia professional-license and business sources rather than assuming a Tennessee record establishes the same authority across the state line.",
      },
      {
        title: "Cross-state intake path",
        body:
          "Confirm that booking forms, phone handling, and service-area language accept the locations the marketing copy names. A page should not promise coverage the operation declines.",
      },
      {
        title: "Trade-specific public facts",
        body:
          "Separate HVAC, plumbing, roofing, restoration, and other regulated or specialty work so an answer does not transfer one credential or capability to another service.",
      },
      {
        title: "Geographic answer testing",
        body:
          "Run distinct Tennessee and North Georgia question variants, record the cited sources, and preserve when the business is absent or described differently across the boundary.",
      },
    ],
    questions: [
      "Which Chattanooga marketing agencies help home service businesses improve AI search visibility?",
      "How can a Chattanooga contractor verify AI answers when it serves customers in Tennessee and Georgia?",
      "What sources should confirm whether a restoration company serves the full Chattanooga market?",
      "How do licensing and business-entity differences affect Chattanooga contractor recommendations in AI search?",
      "How should a Chattanooga home service company measure cross-state AI referrals and inquiries?",
    ],
    officialSources: [
      {
        label: "Tennessee Board for Licensing Contractors",
        href: "https://www.tn.gov/commerce/regboards/contractors.html.html",
        note: "Official Tennessee contractor board with license-verification resources. Read August 29, 2026.",
      },
      {
        label: "Georgia Secretary of State licensing services",
        href: "https://sos.ga.gov/goals",
        note: "Official Georgia professional-licensing portal with license-search services. Read August 29, 2026.",
      },
    ],
    faqs: [
      {
        question: "Does Sequoia GEO have an office in Chattanooga?",
        answer:
          "No. Sequoia is based in Fresno and serves companies nationally. This page applies Sequoia's AI search method to businesses serving Chattanooga without representing a local Sequoia location.",
      },
      {
        question: "Why does a Chattanooga assessment check two states?",
        answer:
          "When a company claims coverage in Tennessee and Georgia, the public evidence may come from separate state licensing, business, profile, and website sources. The assessment verifies each relevant claim instead of assuming one state's record answers every question.",
      },
      {
        question: "Does a verified license mean an AI system will recommend the contractor?",
        answer:
          "No. A license can support a specific public fact when it applies. It is not an endorsement, quality score, ranking factor guarantee, or proof that an AI product will select the business in an answer.",
      },
    ],
  },
  {
    slug: "reno-nv",
    city: "Reno",
    state: "Nevada",
    stateAbbr: "NV",
    indexDescription:
      "A service-area and license-identity test built around Reno, Sparks, surrounding coverage, and Nevada's official contractor records.",
    relationship:
      "Sequoia GEO serves companies nationally and does not claim a Reno office. This page covers businesses that serve Reno and nearby communities.",
    scope:
      "A Reno assessment verifies whether the company serves Reno, Sparks, both cities, or a different set of communities and whether its public profiles and website agree. Nevada contractor records can support licensing facts when they apply, but the result must be matched to the correct entity, classification, status, and customer-facing brand.",
    verificationFocus: {
      title: "Define the operating boundary before testing recommendations",
      body:
        "A locally framed AI question can produce a misleading result when the website names Reno but the business actually dispatches to a narrower or broader area. Sequoia first documents the service boundary and official entity evidence. It then tests generated answers using the same geographic language the business can support operationally.",
    },
    verificationChecks: [
      {
        title: "Nevada contractor identity",
        body:
          "Use the Nevada State Contractors Board search when the service requires a contractor license. Compare business name, principal or qualifier, classification, and status to the public brand without treating the record as an endorsement.",
      },
      {
        title: "Reno and Sparks coverage",
        body:
          "Verify where the company accepts work and ensure the website, public profiles, booking path, and generated answers do not substitute one city for the other without support.",
      },
      {
        title: "Current trade scope",
        body:
          "Distinguish installation, repair, inspection, emergency, insurance-related, and restoration services so old pages or broad categories do not define the company incorrectly.",
      },
      {
        title: "Public-source agreement",
        body:
          "Compare official records, website copy, profiles, reviews, and independent sources for conflicts in names, locations, credentials, and services. Keep unknown items labeled as unknown.",
      },
      {
        title: "Reno question observations",
        body:
          "Test a frozen panel across dated sessions, preserve misses, and separate the answer stage from referral traffic, inquiries, qualification, and jobs booked.",
      },
    ],
    questions: [
      "Who provides AI SEO for home service companies serving Reno, Nevada?",
      "How can a Reno contractor check whether AI search combines it with a similarly named company?",
      "Which sources should verify that a plumbing company serves both Reno and Sparks?",
      "How should a Reno roofer measure citations, recommendations, and qualified inquiries separately?",
      "What public information should be corrected before a Reno home service company invests in AI SEO?",
    ],
    officialSources: [
      {
        label: "Nevada State Contractors Board license search",
        href: "https://app.nvcontractorsboard.com/Clients/NVSCB/Public/ContractorLicenseSearch/ContractorLicenseSearch.aspx",
        note: "Official Nevada contractor search by license, company, principal, or qualified individual. Read August 29, 2026.",
      },
    ],
    faqs: [
      {
        question: "Does Sequoia GEO have a Reno office?",
        answer:
          "No. Sequoia is based in Fresno and works with companies nationally. This page addresses businesses serving Reno and does not represent a local Sequoia office or address.",
      },
      {
        question: "What does the Nevada contractor search establish?",
        answer:
          "The official search can support specific license facts when matched to the correct entity and classification. It does not establish customer satisfaction, availability, service area, AI visibility, or whether the business should be recommended.",
      },
      {
        question: "How does Sequoia test Reno AI search questions?",
        answer:
          "Sequoia freezes the questions, records the product, date, geography, answer, and sources, then keeps mentions, citations, recommendations, referral visits, inquiries, and qualified leads as separate observations.",
      },
    ],
  },
];

export function getAiSearchCity(slug: string): CityAiSearchSurface | undefined {
  return aiSearchCities.find((city) => city.slug === slug);
}
