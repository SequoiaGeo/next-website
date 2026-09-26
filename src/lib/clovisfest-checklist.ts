export const checklist = [
  { title: "Say exactly what you do", detail: "Describe your products or services in plain language. Include who they are for, where you work, and how someone can buy or contact you." },
  { title: "Answer questions before customers ask", detail: "Add useful answers about pricing factors, options, timing, delivery, service areas and what makes your work different. Use real customer questions rather than invented search-volume claims." },
  { title: "Show evidence of your work", detail: "Share original examples, captioned photos and customer reviews you have permission to publish. Explain the work behind the photo. Keep customer addresses and private details out." },
  { title: "Keep your business details consistent", detail: "Check your business name, contact details, hours and website link across your site and public business profiles. Correct outdated information." },
  { title: "Put important information in readable text", detail: "Do not leave your services, prices or contact details only inside an image. Use descriptive headings and working links, and check that the mobile version is usable." },
  { title: "Check, record and repeat", detail: "Try a customer-style question about your service and area in an AI search tool. Save the exact question, platform, date and answer. A single answer is a snapshot, not a ranking or proof of what all customers see." },
];

export const checklistText = `Your AI Search Website Checklist\n\n${checklist.map((item, i) => `${i + 1}. ${item.title}\n${item.detail}`).join("\n\n")}\n\nThese steps improve clarity and search readiness. They do not guarantee AI recommendations.\n\nWant a second opinion on your website? Reply with the link.\n\nAaron Husak | Sequoia GEO\nAaron@sequoiageo.com\n(559) 521-3122\nhttps://www.sequoiageo.com/card\n\nYou requested this checklist through our ClovisFest page. This is not a newsletter subscription.`;
