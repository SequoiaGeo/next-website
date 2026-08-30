import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const cityModule = await import(pathToFileURL(path.join(root, "src/lib/ai-search-cities.ts")));
const { aiSearchCities } = cityModule;

test("the AI city pilot contains the five approved markets and no matrix", () => {
  assert.deepEqual(
    aiSearchCities.map((city) => city.slug),
    ["fresno-ca", "colorado-springs-co", "boise-id", "chattanooga-tn", "reno-nv"],
  );
  assert.equal(new Set(aiSearchCities.map((city) => city.slug)).size, 5);
  assert.equal(fs.existsSync(path.join(root, "src/app/geo-agency/[city]/[trade]")), false);
});

test("the national hub owns city discovery and city pages do not link laterally", () => {
  const hub = read("src/app/geo-agency/page.tsx");
  const index = read("src/components/CityAiSearchIndex.tsx");
  const cityPage = read("src/components/CityAiSearchHub.tsx");

  assert.match(hub, /CityAiSearchIndex/);
  assert.match(index, /id="markets"/);
  assert.match(index, /geo-agency\/\$\{city\.slug\}/);
  assert.doesNotMatch(cityPage, /CityAiSearchIndex|aiSearchCities\.map/);
  assert.match(cityPage, /href="\/geo-agency"/);
  assert.match(cityPage, /href="\/ai-search-assessment"/);
  assert.match(cityPage, /href="\/ai-search-methodology"/);
  assert.match(cityPage, /href="\/proof-system"/);
});

test("all city pages use nationwide Service schema and a visible presence disclosure", () => {
  const cityPage = read("src/components/CityAiSearchHub.tsx");
  const route = read("src/app/geo-agency/[city]/page.tsx");
  const data = read("src/lib/ai-search-cities.ts");

  assert.match(cityPage, /ServiceJsonLd/);
  assert.doesNotMatch(cityPage, /areaServed=/);
  assert.doesNotMatch([cityPage, route, data].join("\n"), /LocalBusiness/);
  assert.match(cityPage, /Local-presence disclosure/);
  assert.match(data, /does not claim a Colorado Springs office/);
  assert.match(data, /does not claim a Boise office/);
  assert.match(data, /does not claim a Chattanooga office/);
  assert.match(data, /does not claim a Reno office/);
  assert.match(data, /based in Fresno/);
});

test("official verification links use the verified primary-source domains", () => {
  const hrefs = aiSearchCities.flatMap((city) => city.officialSources.map((source) => source.href));
  const requiredDomains = ["cslb.ca.gov", "pprbd.org", "dopl.idaho.gov", "tn.gov", "sos.ga.gov", "nvcontractorsboard.com"];

  for (const domain of requiredDomains) {
    assert.ok(hrefs.some((href) => new URL(href).hostname.endsWith(domain)), `missing ${domain}`);
  }
  for (const city of aiSearchCities) {
    assert.ok(city.officialSources.length >= 1);
    for (const source of city.officialSources) assert.match(source.note, /Read August 29, 2026/);
  }
});

test("each market has a distinct question panel and enough unique source copy", () => {
  const questions = aiSearchCities.flatMap((city) => city.questions);
  assert.equal(new Set(questions).size, questions.length);

  for (const city of aiSearchCities) {
    assert.ok(city.questions.length >= 5, `${city.slug} needs five questions`);
    assert.ok(city.verificationChecks.length >= 5, `${city.slug} needs five verification checks`);
    assert.ok(city.faqs.length >= 3, `${city.slug} needs three FAQs`);

    const uniqueCopy = [
      city.indexDescription,
      city.relationship,
      city.scope,
      city.verificationFocus.title,
      city.verificationFocus.body,
      ...city.verificationChecks.flatMap((item) => [item.title, item.body]),
      ...city.questions,
      ...city.faqs.flatMap((item) => [item.question, item.answer]),
    ].join(" ");
    const wordCount = uniqueCopy.trim().split(/\s+/).length;
    assert.ok(wordCount >= 300, `${city.slug} has only ${wordCount} unique-source words`);
  }
});

test("city pages avoid prohibited old-market claims and Sequoia language violations", () => {
  const source = [
    read("src/lib/ai-search-cities.ts"),
    read("src/components/CityAiSearchIndex.tsx"),
    read("src/components/CityAiSearchHub.tsx"),
    read("src/app/geo-agency/[city]/page.tsx"),
  ].join("\n");

  assert.doesNotMatch(source, /[\u2013\u2014]/);
  assert.doesNotMatch(source, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
  assert.doesNotMatch(source, /\$\d|\d+(?:\.\d+)?%|\d+\s*(?:to|through|-)\s*\d+\s*°F/i);
  assert.doesNotMatch(source, /agency landscape|market opportunity|first mover|before competitors discover/i);
  assert.doesNotMatch(source, /active client in the|more likely to call a professional|higher service standards/i);
  assert.doesNotMatch(source, /guarantee(?:d|s)? (?:a |an )?(?:ranking|recommendation|citation|lead|job)/i);
});

test("all five city routes are in the sitemap", () => {
  const sitemap = read("src/app/sitemap.ts");
  for (const city of aiSearchCities) {
    assert.match(sitemap, new RegExp(`/geo-agency/${city.slug}`));
  }
});
