export interface CityData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  population: string;
  metroPopulation?: string;
  climate: string;
  climateDetail: string;
  housingNote: string;
  marketOpportunity: string;
  agencyLandscape: string;
  existingClient?: string;
  keyStats: Array<{ label: string; value: string }>;
}

export const cities: CityData[] = [
  {
    slug: "fresno-ca",
    city: "Fresno",
    state: "California",
    stateAbbr: "CA",
    population: "545,000",
    metroPopulation: "811,000",
    climate: "Extreme heat, cooling-dominant",
    climateDetail:
      "Fresno summers routinely reach 105 to 110°F from June through September, with cooling loads among the highest in California outside the desert. Tule fog winters are cold enough to drive heating demand but the real demand driver is the summer heat. AC units run hard for five to six months per year, compressing equipment lifespan and driving replacement cycles faster than the national average.",
    housingNote:
      "A large inventory of 1960s through 1990s tract housing with sustained heat stress means replacement demand is steady. Median home values have risen, but Fresno remains more affordable than coastal California, and homeowners do invest in systems rather than deferring.",
    marketOpportunity:
      "Fresno is the ninth-largest city in California and one of the highest-volume HVAC markets in the state by service call frequency. National agencies focused on LA and the Bay Area consistently underinvest in Fresno-specific campaigns, leaving contractors competing in a market where local SEO authority and targeted paid media can still be won.",
    agencyLandscape:
      "The Fresno market has a handful of generalist digital agencies but very few with genuine HVAC or plumbing marketing depth. Contractors here frequently work with agencies based in LA or Sacramento who do not understand the local market dynamics or the seasonal demand patterns.",
    existingClient:
      "Sequoia GEO is based in Fresno. This is our home market and we understand the local contractor landscape, seasonal demand cycles, and what it actually takes to win new customers here.",
    keyStats: [
      { label: "Summer peak temp", value: "105–110°F" },
      { label: "City population", value: "545,000" },
      { label: "Metro population", value: "811,000" },
      { label: "HVAC demand profile", value: "Extreme cooling" },
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    stateAbbr: "ID",
    population: "237,000",
    metroPopulation: "482,000",
    climate: "Balanced four-season",
    climateDetail:
      "Boise runs hot and dry in summer (95 to 100°F regularly) and cold in winter with meaningful snowfall. The market sells twice: summer drives AC sales hard, and winter drives furnace and heat pump demand. Idaho was the second-fastest-growing state in 2025, and Boise has absorbed significant remote worker and tech migration, meaning many new residents are navigating their first high-desert HVAC decision.",
    housingNote:
      "A significant wave of new construction from the 2017 through 2022 population surge means a large inventory of homes now in the 5 to 12 year range approaching first equipment replacement cycles. Median home prices have risen substantially, meaning homeowners are more likely to invest in professional repair and replacement rather than deferred maintenance.",
    marketOpportunity:
      "Boise's rapid growth creates ongoing demand for HVAC installation in new builds and first-replacement in the population boom housing stock. National agencies focus on the larger West Coast markets. Contractors who establish strong local SEO and paid media presence in Boise now are building authority in a market that will only get more competitive.",
    agencyLandscape:
      "Boise has fewer established contractor marketing agencies than markets its size typically would. Most HVAC marketing agencies serving Idaho are headquartered in Seattle, Portland, or Salt Lake City and do not have deep local market knowledge.",
    existingClient:
      "Sequoia GEO has an active client in the Boise market and understands local contractor dynamics, seasonal demand peaks, and how homeowners in this market make HVAC decisions.",
    keyStats: [
      { label: "Summer peak temp", value: "95–100°F" },
      { label: "City population", value: "237,000" },
      { label: "Metro growth rate", value: "2.2% annually" },
      { label: "HVAC demand profile", value: "Balanced four-season" },
    ],
  },
  {
    slug: "colorado-springs-co",
    city: "Colorado Springs",
    state: "Colorado",
    stateAbbr: "CO",
    population: "502,000",
    metroPopulation: "709,000",
    climate: "Extreme four-season, highest stress market",
    climateDetail:
      "Colorado Springs is a true four-season extreme: summers push into the 90s, winters bring regular sub-freezing temperatures and heavy snow. HVAC equipment here works twice as hard as equipment in mild climates. The dual-season stress compresses equipment lifespan and drives a replacement cycle that is shorter than national averages. A home that might run its system for 15 years elsewhere may need replacement in 10 here.",
    housingNote:
      "Massive growth since the 1990s means a large inventory of 25 to 35-year-old homes where the original HVAC equipment is entering replacement cycles simultaneously. The city faces a documented housing shortage of 27,000 units, meaning active new construction is adding to the base of homes requiring service as well.",
    marketOpportunity:
      "Colorado Springs has a large, stable homeowner population anchored by military installations (Peterson, Schriever, Fort Carson, NORAD) and a growing tech sector. The military demographic is disproportionately likely to call a professional rather than DIY. Denver-focused agencies largely ignore the Springs even though it is the state's second-largest city.",
    agencyLandscape:
      "Most Colorado contractor marketing agencies concentrate their effort and case studies on the Denver metro. Colorado Springs contractors often work with Denver-based agencies that do not build Springs-specific local authority or understand the differences in seasonal demand and competitive dynamics between the two markets.",
    keyStats: [
      { label: "Summer peak temp", value: "90s+°F" },
      { label: "Winter lows", value: "Sub-freezing, heavy snow" },
      { label: "City population", value: "502,000" },
      { label: "HVAC demand profile", value: "Balanced extreme" },
    ],
  },
  {
    slug: "knoxville-tn",
    city: "Knoxville",
    state: "Tennessee",
    stateAbbr: "TN",
    population: "195,000",
    metroPopulation: "950,000",
    climate: "Hot humid summers, cold winters, balanced demand",
    climateDetail:
      "Knoxville summers are hot and humid, regularly pushing into the 90s with humidity that makes cooling loads significant. Winters bring ice storms and sub-freezing temperatures that drive genuine heating demand. The balanced climate means HVAC contractors here have year-round revenue potential rather than a single dominant season. TVA's electric rates make heat pump adoption an active conversation in this market.",
    housingNote:
      "Knoxville has a median home build year of 1974, meaning a large share of the housing inventory is over 50 years old. Older single-family detached homes dominate the established neighborhoods, with significant equipment replacement demand and ductwork upgrade opportunities. Knox County ranked second in Tennessee for net new residents, and NAR named the Knoxville area a top 10 housing hot spot for 2025.",
    marketOpportunity:
      "The city proper is under 200,000 people, which means most national agency attention goes to Nashville and Memphis first. The broader metro is large, growing, and economically diverse. Older housing stock combined with population growth creates a consistent combination of replacement demand and new homeowner acquisition.",
    agencyLandscape:
      "Nashville dominates contractor marketing agency attention in Tennessee. Knoxville contractors work with Nashville-based agencies or generalist Knoxville firms that lack contractor-specific depth. HVAC marketing built specifically for the Knoxville market is nearly nonexistent.",
    keyStats: [
      { label: "Summer peak temp", value: "90s°F, high humidity" },
      { label: "City population", value: "195,000" },
      { label: "Median home age", value: "1974 (50+ years)" },
      { label: "HVAC demand profile", value: "Balanced year-round" },
    ],
  },
  {
    slug: "bakersfield-ca",
    city: "Bakersfield",
    state: "California",
    stateAbbr: "CA",
    population: "419,000",
    climate: "Extreme heat, cooling-dominant",
    climateDetail:
      "Bakersfield summers regularly hit 105 to 110°F, with AC units running continuously from May through September. Equipment degrades faster under sustained heat load than in mild climates. The Central Valley heat profile means cooling is not optional and replacement cycles are shorter than the national average. This is one of the highest per-household HVAC demand markets in California.",
    housingNote:
      "A mix of 1970s through 1990s tract housing plus newer growth. Older equipment stock is significant given the climate stress on units. Bakersfield is the ninth-largest city in California by population and has been growing at 1.2% annually, the fastest of any major California city.",
    marketOpportunity:
      "Agencies focused on coastal California largely pass over Bakersfield. The agricultural economy base and large blue-collar homeowner population generate consistent HVAC demand with fewer agencies competing for local SEO authority than you would find in LA, San Diego, or the Bay Area. Central Valley market knowledge from the Fresno market transfers directly.",
    agencyLandscape:
      "Bakersfield's marketing agency ecosystem skews toward generalists. Very few agencies with contractor-specific HVAC marketing depth are actively building local authority in this market. Most contractors here work with LA-based or Sacramento-based agencies that do not understand the local climate-driven demand profile.",
    keyStats: [
      { label: "Summer peak temp", value: "105–110°F" },
      { label: "City population", value: "419,000" },
      { label: "Growth rate", value: "1.2% annually" },
      { label: "HVAC demand profile", value: "Extreme cooling" },
    ],
  },
  {
    slug: "spokane-wa",
    city: "Spokane",
    state: "Washington",
    stateAbbr: "WA",
    population: "230,000",
    metroPopulation: "600,000",
    climate: "Four-season with growing cooling demand",
    climateDetail:
      "Spokane's dry inland climate means winters are cold with regular sub-freezing temperatures and snowfall, while summers push 90 to 100°F. Eastern Washington's historically dry climate meant evaporative coolers were common, but the shift to refrigerated central air is ongoing, creating a significant new installation market alongside the existing furnace and heat pump service base. This is a market that sells twice: once in summer, once in winter.",
    housingNote:
      "Significant inventory of older homes with active housing market growth. Home inventory was up 33% year-over-year in early 2025, and median sale prices around $390,000 mean homeowners are investing in their properties. The transition from swamp coolers to central AC is creating a defined installation opportunity that most agencies are not actively targeting.",
    marketOpportunity:
      "Spokane is Eastern Washington's largest city and is consistently overlooked by Seattle-centric Pacific Northwest agencies. The city has its own media market, its own contractor ecosystem, and its own homeowner decision-making patterns that Seattle agencies do not understand or build content for.",
    agencyLandscape:
      "Seattle agencies dominate contractor marketing in Washington state but provide minimal Spokane-specific content or local SEO investment. The competitive gap between what Seattle agencies invest in Seattle versus what they invest in Spokane creates a real local authority opportunity for contractors willing to build it.",
    keyStats: [
      { label: "Summer peak temp", value: "90–100°F" },
      { label: "Winter profile", value: "Sub-freezing, snowfall" },
      { label: "City population", value: "230,000" },
      { label: "HVAC demand profile", value: "Balanced, growing AC" },
    ],
  },
  {
    slug: "chattanooga-tn",
    city: "Chattanooga",
    state: "Tennessee",
    stateAbbr: "TN",
    population: "185,000",
    metroPopulation: "588,000",
    climate: "Hot humid summers, cold wet winters",
    climateDetail:
      "Chattanooga summers reach into the 90s with significant humidity, amplifying cooling loads beyond what temperature alone suggests. Mountain geography creates variable conditions across the metro. Winters are cold and wet with meaningful heating demand. Both cooling and heating revenue are real in this market, and the combination creates year-round service opportunities for HVAC contractors.",
    housingNote:
      "Chattanooga has reinvented itself from a rust belt city to a tech and manufacturing hub. Major employers including Volkswagen, Amazon, and other recent relocations have driven 5% metro growth over the past four years. That level of growth means new residents buying homes and immediately needing reliable HVAC service providers they do not yet have a relationship with.",
    marketOpportunity:
      "One of the fastest-growing Tennessee metros, yet Nashville agencies dominate contractor marketing attention statewide. Chattanooga contractors are a natural market for content and paid media built specifically for the city's climate, housing stock, and homeowner profile.",
    agencyLandscape:
      "Chattanooga has local marketing agencies but very few with contractor-specific HVAC marketing depth. Nashville agencies extend their services to Chattanooga clients without Chattanooga-specific SEO investment. The gap between what Nashville agencies invest in Nashville versus Chattanooga creates a local authority opportunity.",
    keyStats: [
      { label: "Summer profile", value: "90s°F, humid" },
      { label: "Metro growth", value: "5% since 2020" },
      { label: "City population", value: "185,000" },
      { label: "HVAC demand profile", value: "Balanced year-round" },
    ],
  },
  {
    slug: "wichita-ks",
    city: "Wichita",
    state: "Kansas",
    stateAbbr: "KS",
    population: "395,000",
    metroPopulation: "548,000",
    climate: "Extreme two-way, tornado country",
    climateDetail:
      "Wichita runs 95 to 105°F in summer with real humidity and -10 to 20°F cold snaps in winter. It is a market that needs both AC and a reliable furnace, and homeowners know it. Tornado season creates additional HVAC replacement demand from storm damage to ductwork, outdoor units, and rooftop equipment. Wichita homeowners cannot treat HVAC as optional the way homeowners in mild markets can.",
    housingNote:
      "Wichita grew heavily in the 1950s through 1970s as an aviation manufacturing center (Spirit AeroSystems, Textron Aviation, Cessna are headquartered here). The result is a large inventory of older single-family homes where replacement demand is significant and steady. One of the most affordable major cities in the US means homeowners have budget for professional service rather than deferred maintenance.",
    marketOpportunity:
      "National agencies almost entirely ignore Wichita. The combination of an extreme climate, older housing stock, affordable market, stable industrial employment, and near-zero agency competition for local SEO authority in the contractor marketing niche makes this a high-return market to enter before competitors discover it.",
    agencyLandscape:
      "Wichita has almost no contractors working with agencies that have specific HVAC marketing depth. The dominant pattern is either national agencies treating Wichita as an afterthought or local generalist agencies with no trade-specific methodology.",
    keyStats: [
      { label: "Summer peak temp", value: "95–105°F" },
      { label: "Winter lows", value: "-10 to 20°F" },
      { label: "City population", value: "395,000" },
      { label: "HVAC demand profile", value: "Extreme balanced" },
    ],
  },
  {
    slug: "tucson-az",
    city: "Tucson",
    state: "Arizona",
    stateAbbr: "AZ",
    population: "548,000",
    climate: "Extreme desert heat, cooling-dominant",
    climateDetail:
      "Tucson summers regularly hit 105 to 110°F, with AC units running continuously from May through October. Equipment failure rates in extreme heat markets are higher than the national average, and the replacement cycle is accelerated by sustained thermal stress. The University of Arizona's large student population creates a significant rental property market where landlords need contractors they can rely on without being on-site.",
    housingNote:
      "A large inventory of pre-1990 housing, plus university-adjacent rental stock, plus suburban growth. Humidity from monsoon season adds complexity to HVAC performance that is specific to the Sonoran desert climate and not well understood by agencies without local market knowledge.",
    marketOpportunity:
      "Tucson sits in the shadow of Phoenix from a marketing perspective. National agencies concentrate resources on the Phoenix metro and consistently underinvest in Tucson-specific campaigns, local SEO, and content. The city has 548,000 people and one of the highest HVAC demand profiles in the country. The opportunity gap is real.",
    agencyLandscape:
      "Phoenix agencies serve Tucson clients as an extension of their Phoenix operations, without Tucson-specific content or local SEO investment. The market is large enough to support dedicated contractor marketing but has almost none. Contractors who build local authority here face less entrenched competition than they would in Phoenix.",
    keyStats: [
      { label: "Summer peak temp", value: "105–110°F" },
      { label: "Season length", value: "5–6 months above 100°F" },
      { label: "City population", value: "548,000" },
      { label: "HVAC demand profile", value: "Extreme cooling" },
    ],
  },
  {
    slug: "reno-nv",
    city: "Reno",
    state: "Nevada",
    stateAbbr: "NV",
    population: "270,000",
    metroPopulation: "814,000",
    climate: "Hot summers, cold winters, high elevation",
    climateDetail:
      "Reno at 4,500 feet elevation runs 95 to 100°F in summer and drops to genuine sub-freezing in winter. High elevation accelerates equipment wear beyond what temperature data alone suggests. The market sells in both directions: summer AC demand is significant, and winter furnace demand at altitude is real. In-migration from California has brought homeowners accustomed to higher service standards.",
    housingNote:
      "Amazon, Tesla, Apple, and Google all have major facilities in the Reno metro, driving income growth and rising homeownership rates. Median home prices have risen to around $547,000. Rising incomes mean homeowners invest in professional HVAC service rather than the cheapest option available.",
    marketOpportunity:
      "National agencies focus on Las Vegas when thinking about Nevada. Reno is consistently underserved relative to its economic activity, population, and growth rate. The 2.7% annual metro growth rate is among the highest in the country, meaning the contractor customer base is expanding rapidly.",
    agencyLandscape:
      "Las Vegas agencies do not serve Reno well. Local Reno marketing agencies are generalists. Contractors who build local SEO authority and targeted paid media specifically for the Reno market are building a position in a growing market before it becomes contested.",
    keyStats: [
      { label: "Summer peak temp", value: "95–100°F" },
      { label: "Metro growth", value: "2.7% annually" },
      { label: "Median home price", value: "$547,000" },
      { label: "HVAC demand profile", value: "Balanced four-season" },
    ],
  },
];

export function getCityData(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
