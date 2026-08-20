from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "ai-website-seo-guide.pdf"

GREEN_DARK = colors.HexColor("#0D2318")
GREEN = colors.HexColor("#1A5C3A")
GREEN_MID = colors.HexColor("#3A9E6A")
GREEN_LIGHT = colors.HexColor("#C8EDD2")
GREEN_PALE = colors.HexColor("#F5FAF7")
INK = colors.HexColor("#1A1A1A")
GRAY = colors.HexColor("#5F6368")
LINE = colors.HexColor("#DDE3DF")
WHITE = colors.white


def register_fonts():
    candidates = [
        Path("C:/Windows/Fonts/arial.ttf"),
        Path("C:/Windows/Fonts/calibri.ttf"),
    ]
    bold_candidates = [
        Path("C:/Windows/Fonts/arialbd.ttf"),
        Path("C:/Windows/Fonts/calibrib.ttf"),
    ]
    regular = next((path for path in candidates if path.exists()), None)
    bold = next((path for path in bold_candidates if path.exists()), None)
    if regular and bold:
        pdfmetrics.registerFont(TTFont("SequoiaSans", str(regular)))
        pdfmetrics.registerFont(TTFont("SequoiaSans-Bold", str(bold)))
        return "SequoiaSans", "SequoiaSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


class GuideDocTemplate(BaseDocTemplate):
    pass


def page_footer(canvas, doc):
    canvas.saveState()
    width, _ = letter
    canvas.setStrokeColor(LINE)
    canvas.line(0.72 * inch, 0.55 * inch, width - 0.72 * inch, 0.55 * inch)
    canvas.setFont(FONT, 8)
    canvas.setFillColor(GRAY)
    canvas.drawString(0.72 * inch, 0.34 * inch, "Sequoia GEO | sequoiageo.com")
    canvas.drawRightString(width - 0.72 * inch, 0.34 * inch, f"{doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
TITLE = ParagraphStyle(
    "Title",
    parent=styles["Title"],
    fontName=FONT_BOLD,
    fontSize=30,
    leading=34,
    textColor=WHITE,
    alignment=TA_LEFT,
    spaceAfter=16,
)
SUBTITLE = ParagraphStyle(
    "Subtitle",
    parent=styles["BodyText"],
    fontName=FONT,
    fontSize=14,
    leading=20,
    textColor=GREEN_LIGHT,
    spaceAfter=16,
)
EYEBROW = ParagraphStyle(
    "Eyebrow",
    parent=styles["BodyText"],
    fontName=FONT_BOLD,
    fontSize=9,
    leading=11,
    textColor=GREEN_MID,
    spaceAfter=10,
)
H1 = ParagraphStyle(
    "H1",
    parent=styles["Heading1"],
    fontName=FONT_BOLD,
    fontSize=22,
    leading=27,
    textColor=GREEN_DARK,
    spaceBefore=6,
    spaceAfter=13,
)
H2 = ParagraphStyle(
    "H2",
    parent=styles["Heading2"],
    fontName=FONT_BOLD,
    fontSize=14,
    leading=18,
    textColor=GREEN,
    spaceBefore=10,
    spaceAfter=7,
)
BODY = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName=FONT,
    fontSize=10.2,
    leading=15.2,
    textColor=INK,
    spaceAfter=8,
)
SMALL = ParagraphStyle(
    "Small",
    parent=BODY,
    fontSize=8.5,
    leading=12,
    textColor=GRAY,
)
BULLET = ParagraphStyle(
    "Bullet",
    parent=BODY,
    leftIndent=15,
    firstLineIndent=-9,
    bulletIndent=3,
    spaceAfter=5,
)
CALLOUT = ParagraphStyle(
    "Callout",
    parent=BODY,
    fontName=FONT_BOLD,
    fontSize=11.5,
    leading=17,
    textColor=GREEN_DARK,
    spaceAfter=0,
)
CENTER = ParagraphStyle(
    "Center",
    parent=BODY,
    alignment=TA_CENTER,
)
TABLE_HEADER = ParagraphStyle(
    "TableHeader",
    parent=BODY,
    fontName=FONT_BOLD,
    fontSize=10.2,
    leading=12,
    textColor=WHITE,
    spaceAfter=0,
)


def P(text, style=BODY):
    return Paragraph(text, style)


def bullets(items):
    return [P(f"- {item}", BULLET) for item in items]


def callout(text):
    table = Table([[P(text, CALLOUT)]], colWidths=[6.55 * inch])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), GREEN_PALE),
                ("BOX", (0, 0), (-1, -1), 0.8, GREEN_LIGHT),
                ("LEFTPADDING", (0, 0), (-1, -1), 16),
                ("RIGHTPADDING", (0, 0), (-1, -1), 16),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
            ]
        )
    )
    return table


def two_column_cards(rows):
    data = []
    for left, right in rows:
        data.append([P(left, BODY), P(right, BODY)])
    table = Table(data, colWidths=[3.2 * inch, 3.2 * inch], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
                ("BACKGROUND", (0, 0), (-1, -1), WHITE),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 11),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
            ]
        )
    )
    return table


def build_story():
    story = []

    cover = Table(
        [[
            [
                P("SEQUOIA GEO FIELD GUIDE", EYEBROW),
                P("Can AI Search Understand and Verify Your Business?", TITLE),
                P(
                    "A source-backed guide to crawl access, entity clarity, public corroboration, useful content, and honest recommendation measurement for contractors.",
                    SUBTITLE,
                ),
                Spacer(1, 0.23 * inch),
                P("By Aaron Husak", ParagraphStyle("CoverBy", parent=BODY, fontName=FONT_BOLD, textColor=WHITE, fontSize=11)),
                P("13-year home services operator and founder of Sequoia GEO", ParagraphStyle("CoverMeta", parent=SMALL, textColor=GREEN_LIGHT)),
                Spacer(1, 1.5 * inch),
                P("Updated August 20, 2026", ParagraphStyle("CoverDate", parent=SMALL, textColor=GREEN_LIGHT)),
            ]
        ]],
        colWidths=[6.75 * inch],
        rowHeights=[9.25 * inch],
    )
    cover.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), GREEN_DARK),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 34),
                ("RIGHTPADDING", (0, 0), (-1, -1), 34),
                ("TOPPADDING", (0, 0), (-1, -1), 58),
            ]
        )
    )
    story.extend([cover, PageBreak()])

    story.extend(
        [
            P("The short version", H1),
            callout(
                "Strong GEO work makes a business clear and credible across the sources an assistant can access, then measures whether that visibility creates qualified demand. It does not promise control over an AI answer."
            ),
            Spacer(1, 0.2 * inch),
            P(
                "AI search is already producing calls for Sequoia GEO. The useful lesson is not that every contractor needs a new acronym. A prospect who asks an assistant for a provider can arrive with more trust than a prospect who clicked a conventional list of links.",
                BODY,
            ),
            P(
                "GEO adds recommendation and citation measurement to strong SEO foundations. The website still needs to be crawlable, indexable, useful, locally relevant, and technically sound. GEO also examines the sources assistants cite and the consistency of the business entity across the public web.",
                BODY,
            ),
            P("What this guide does not claim", H2),
            *bullets(
                [
                    "No agency can guarantee that an assistant will recommend a business.",
                    "One favorable answer is not a stable ranking position.",
                    "A cited URL, an AI-referred visit, and a qualified lead are different outcomes.",
                    "Structured data can reduce ambiguity, but it is not an AI recommendation switch.",
                    "More pages do not help when they add no first-hand value.",
                ]
            ),
            Spacer(1, 0.14 * inch),
            P("Contents", H2),
            two_column_cards(
                [
                    ("1. How AI-assisted search differs", "2. Five controllable surfaces"),
                    ("3. The thin website problem", "4. Structured data without myths"),
                    ("5. Content worth retrieving", "6. A 30-day foundation plan"),
                    ("7. Recommendation measurement", "8. Official sources"),
                ]
            ),
            PageBreak(),
        ]
    )

    story.extend(
        [
            P("1. How AI-assisted search differs", H1),
            P(
                "Conventional search often presents ranked links, maps, and other search features. AI-assisted search can synthesize an answer and cite selected sources. Some answers name businesses, while others provide information without recommending a provider.",
                BODY,
            ),
            P(
                "A recommendation answer can change with the assistant, prompt wording, date, available search index, user context, and sources retrieved. That makes one prompt run an observation, not a result.",
                BODY,
            ),
            P("The controllable foundation", H2),
            *bullets(
                [
                    "Important pages can be fetched by the relevant crawlers.",
                    "The pages are indexed where the assistant relies on a search index.",
                    "The business entity is explicit and consistent.",
                    "The public web supports the claims made on the website.",
                    "The page answers a real buyer question with first-hand detail.",
                ]
            ),
            P("A useful distinction", H2),
            callout(
                "Visibility means the page or business appeared. Recommendation means the response presented the business as a provider the user should consider. Preserve that distinction in every report."
            ),
            Spacer(1, 0.2 * inch),
            P("2. Five surfaces an audit reviews", H1),
            two_column_cards(
                [
                    ("<b>Crawl and index access</b><br/>Can the relevant search crawlers fetch the important pages, and are those pages indexed?", "<b>Entity clarity</b><br/>Are the name, operator, services, locations, contact details, and relationships explicit?"),
                    ("<b>First-hand evidence</b><br/>Does the site include original process, pricing factors, project documentation, and experience?", "<b>Public corroboration</b><br/>Do profiles, licenses, reviews, associations, directories, and coverage support the website?"),
                    ("<b>Answer usefulness</b><br/>Does the page state the conclusion, explain the factors, name the limits, and show why the writer knows?", "<b>Measurement discipline</b><br/>Are mentions, citations, referrals, inquiries, qualified leads, and jobs booked separate stages?"),
                ]
            ),
            PageBreak(),
        ]
    )

    story.extend(
        [
            P("3. The thin website problem", H1),
            P(
                "Page count and word count are weak substitutes for usefulness. Inventory the pages that help a customer make a decision. For each important service, ask whether the page answers cost factors, options, process, timing, risks, and what is different about the company's approach.",
                BODY,
            ),
            P("Start with questions heard in the business", H2),
            *bullets(
                [
                    "Who should I call for this problem in my city, and why?",
                    "What should this repair or replacement cost in this market?",
                    "Should I repair or replace the equipment?",
                    "Which option fits my home, climate, or budget?",
                    "What licenses, warranties, reviews, and insurance should I verify?",
                    "How long should the work take, and what happens before the crew arrives?",
                    "What is different about this company's process?",
                ]
            ),
            P(
                "Use real calls, estimates, customer emails, Search Console, and People Also Ask to build the question set. Do not generate dozens of location or prompt pages because a template can produce them.",
                BODY,
            ),
            P("4. Structured data without myths", H1),
            P(
                "Accurate Organization, LocalBusiness, Person, Service, and Article structured data can reduce ambiguity when it matches the visible page. Google says no special schema markup is required for its generative AI features.",
                BODY,
            ),
            *bullets(
                [
                    "Use the most accurate business subtype available.",
                    "Add only facts a visitor can verify on the page.",
                    "Keep the markup synchronized with public profiles.",
                    "Validate the markup before publishing.",
                    "Do not expect FAQ markup to force an assistant to cite an answer.",
                ]
            ),
            callout(
                "Structured data is a machine-readable version of supported facts. It is not a place to add reviews, locations, services, awards, or relationships that are missing from the public page."
            ),
            PageBreak(),
        ]
    )

    story.extend(
        [
            P("5. Content worth retrieving", H1),
            P(
                "No content format is reliably cited by every assistant. Useful sources often share three characteristics that also help human buyers evaluate the answer.",
                BODY,
            ),
            P("It answers a specific question", H2),
            P(
                "Give the conclusion, a useful range where appropriate, the factors that change the answer, and the limit of what can be known without an inspection or conversation.",
                BODY,
            ),
            P("It includes verifiable details", H2),
            P(
                "Use supported service areas, process steps, brands, certifications, pricing factors, named operators, project examples, and dates. Specificity helps only when the details are current and true.",
                BODY,
            ),
            P("It includes first-hand experience", H2),
            P(
                "Explain real trade decisions, operating constraints, and what changed the company's recommendation. That gives the page information a generic summary cannot supply.",
                BODY,
            ),
            P("A practical page brief", H2),
            two_column_cards(
                [
                    ("<b>Decision</b><br/>What question is the buyer trying to resolve?", "<b>Direct answer</b><br/>What conclusion can the operator support?"),
                    ("<b>Factors</b><br/>What changes the price, timing, or recommendation?", "<b>Evidence</b><br/>What first-hand proof belongs on this page?"),
                    ("<b>Entity facts</b><br/>Which service, location, and provider facts must be explicit?", "<b>Next step</b><br/>What should the visitor do if the page fits the need?"),
                ]
            ),
            Spacer(1, 0.16 * inch),
            P(
                "After publishing, verify crawl and index status. Then record citations and recommendations over time. Do not label the page a success because it exists.",
                BODY,
            ),
            PageBreak(),
        ]
    )

    plan_rows = [
        [P("Week", TABLE_HEADER), P("Focus", TABLE_HEADER), P("Actions", TABLE_HEADER)],
        [P("1", BODY), P("Crawl, index, entity", BODY), P("Test crawler access. Inspect Google and Bing coverage. Compare website and profile facts. Validate core structured data.", SMALL)],
        [P("2", BODY), P("Buyer questions", BODY), P("Collect real questions. Select three service pages. Add pricing factors, process, timing, alternatives, proof, and operator experience.", SMALL)],
        [P("3", BODY), P("Recommendation baseline", BODY), P("Freeze a prompt set. Run repeated controlled observations. Record mentions, recommendations, citations, date, and wording.", SMALL)],
        [P("4", BODY), P("Demand measurement", BODY), P("Verify conversions. Preserve voluntarily reported AI evidence. Separate visibility, referral, inquiry, qualification, and jobs booked.", SMALL)],
    ]
    plan_table = Table(plan_rows, colWidths=[0.7 * inch, 1.55 * inch, 4.2 * inch], repeatRows=1)
    plan_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), GREEN_DARK),
                ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("GRID", (0, 0), (-1, -1), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("BACKGROUND", (0, 1), (-1, -1), WHITE),
            ]
        )
    )
    story.extend(
        [
            P("6. A 30-day foundation plan", H1),
            P(
                "The first 30 days establish access, facts, evidence, and measurement. Recommendation change should be evaluated over a longer 60 to 90 day post-index window.",
                BODY,
            ),
            plan_table,
            Spacer(1, 0.22 * inch),
            P("7. Recommendation measurement", H1),
            P(
                "Freeze a small prompt set by buyer problem, industry, and geography. Run each prompt repeatedly in a controlled environment. Keep platforms separate, preserve the exact wording, and archive cited sources.",
                BODY,
            ),
        ]
    )

    metric_rows = [
        [P("Stage", TABLE_HEADER), P("What counts", TABLE_HEADER)],
        [P("Visibility", BODY), P("A page or business is crawled, indexed, cited, or shown in a platform visibility report.", SMALL)],
        [P("Recommendation", BODY), P("The answer presents the business as a provider the user should consider.", SMALL)],
        [P("Referral", BODY), P("A visit arrives from a known assistant referral, or the prospect voluntarily reports the source.", SMALL)],
        [P("Inquiry", BODY), P("A form, call, email, or completed booking request is captured.", SMALL)],
        [P("Qualified lead", BODY), P("A real business has an addressable need, decision authority, and a viable service fit.", SMALL)],
        [P("Outcome", BODY), P("The lead holds a meeting, accepts an engagement, or produces a job booked.", SMALL)],
    ]
    metric_table = Table(metric_rows, colWidths=[1.35 * inch, 5.1 * inch], repeatRows=1)
    metric_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), GREEN_DARK),
                ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("GRID", (0, 0), (-1, -1), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.extend([metric_table, PageBreak()])

    story.extend(
        [
            P("8. Common GEO and AI SEO questions", H1),
            P("Why does an assistant recommend a competitor instead of my company?", H2),
            P(
                "The answer may draw from a different mix of sources, locations, wording, freshness, and trust evidence. Test the same prompt repeatedly, record the cited sources, and inspect whether the business is understandable and supported on those surfaces.",
                BODY,
            ),
            P("Can an agency guarantee that an assistant will recommend me?", H2),
            P(
                "No. The work can improve crawlability, entity clarity, source coverage, factual consistency, and measurement, but a recommendation cannot be guaranteed.",
                BODY,
            ),
            P("How long does it take to know whether the work helped?", H2),
            P(
                "Technical corrections can be verified after deployment. Recommendation visibility is more variable, so compare a frozen prompt set over 60 to 90 days rather than treating one answer as proof.",
                BODY,
            ),
            P("What should be measured?", H2),
            P(
                "Track mentions, recommendations, primary position, and citations. Then separately track referred sessions, inquiries, qualified leads, held meetings, and jobs booked.",
                BODY,
            ),
            Spacer(1, 0.12 * inch),
            callout(
                "When a prospect voluntarily says an AI assistant recommended the business, preserve the assistant, approximate date, exact wording, prompt, response, citations, and source artifact when available. Never represent a recalled or reconstructed answer as the original event."
            ),
            PageBreak(),
        ]
    )

    story.extend(
        [
            P("Official sources", H1),
            P(
                "Platform guidance changes. Use first-party documentation as the foundation, and treat social posts as discovery rather than proof.",
                BODY,
            ),
            P("Google Search Central", H2),
            P(
                '<link href="https://developers.google.com/search/docs/appearance/ai-features" color="#1A5C3A">Read Google Search Central guidance</link><br/>Google explains that its established SEO fundamentals apply to AI features and that no special AI schema is required.',
                BODY,
            ),
            P("OpenAI publisher and developer FAQ", H2),
            P(
                '<link href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" color="#1A5C3A">Read the OpenAI publisher FAQ</link><br/>OpenAI explains how public pages can appear in ChatGPT search and how referral traffic is identified.',
                BODY,
            ),
            P("Bing Webmaster Tools AI Performance", H2),
            P(
                '<link href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" color="#1A5C3A">Read the Bing AI Performance announcement</link><br/>Bing connects citations, cited pages, and sampled grounding queries in its AI performance reporting.',
                BODY,
            ),
            Spacer(1, 0.25 * inch),
            P("About Aaron Husak", H1),
            P(
                "Aaron spent 13 years operating and scaling a home services company to more than 130 employees and four Inc. 5000 appearances. Sequoia GEO clients work directly with Aaron, not an account manager.",
                BODY,
            ),
            Spacer(1, 0.15 * inch),
            callout(
                "Request a public-surface audit at sequoiageo.com/audit, review transparent GEO pricing at sequoiageo.com/ai-seo-pricing, or call (559) 521-3122."
            ),
            Spacer(1, 0.25 * inch),
            P("Last reviewed August 20, 2026", CENTER),
        ]
    )

    return story


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    frame = Frame(
        0.72 * inch,
        0.72 * inch,
        letter[0] - 1.44 * inch,
        letter[1] - 1.35 * inch,
        leftPadding=0,
        bottomPadding=0,
        rightPadding=0,
        topPadding=0,
    )
    doc = GuideDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.72 * inch,
        rightMargin=0.72 * inch,
        topMargin=0.72 * inch,
        bottomMargin=0.72 * inch,
        title="Can AI Search Understand and Verify Your Business?",
        author="Aaron Husak, Sequoia GEO",
        subject="AI search visibility guide for contractors",
    )
    doc.addPageTemplates([PageTemplate(id="guide", frames=[frame], onPage=page_footer)])
    doc.build(build_story())
    print(OUTPUT)


if __name__ == "__main__":
    main()
