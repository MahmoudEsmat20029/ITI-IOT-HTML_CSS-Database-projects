const articles = [
    {
        imgSrc: "pic_1.png",
        link: "https://techcrunch.com/2024/08/31/grammy-ceo-says-music-industry-also-has-ai-concerns/",
        title: "Grammy CEO says music industry also has AI concerns",
        description: "The rise of AI has consumed the arts, just as it has Silicon Valley."
    },{
        imgSrc: "pic_2.png",
        link: "https://techcrunch.com/2024/08/31/before-midjourney-there-was-nightcafe-and-its-still-kicking/",
        title: "AI brings a whole new dimension to the challenge of organizational transformation",
        description: "Learn about NightCafe's origins, some of the challenges the platform faces, and where NighCafe will evolve from here"
    },{
        imgSrc: "pic_3.png",
        link: "https://techcrunch.com/2024/08/31/ai-brings-a-whole-new-dimension-to-the-challenge-of-organizational-transformation/",
        title: "Apple finally allows Spotify to show pricing info to EU users on iOS",
        description: "Organizations are people and people are messy, and you have to look beyond the tech to the end goal implementing new software that could transform the business"
    },{
        imgSrc: "pic_4.png",
        link: "https://techcrunch.com/2024/08/30/dailyhunt-parent-verses-valuation-gets-slashed-42-to-2-9b-investor-note/",
        title: "Dailyhunt parent VerSe’s valuation gets slashed 42% to $2.9B: investor 360 One note",
        description: "Indian tech and media startup VerSe, which operates popular news aggregator Dailyhunt, is worth about 42% below its last private valuation, according to estimates by its investor 360 One."
    },{
        imgSrc: "pic_5.png",
        link: "https://techcrunch.com/2024/08/30/last-day-exhibit-your-startup-with-big-savings-at-techcrunch-disrupt-2024/",
        title: "Last Day: Exhibit your startup with big savings at TechCrunch Disrupt 2024",
        description: "Today is the last day to apply and scale your Series A to B startup at a significantly reduced exhibit cost with the ScaleUp Startup Exhibitor Package."
    },{
        imgSrc: "pic_6.png",
        link: "https://techcrunch.com/2024/08/30/be-a-volunteer-at-techcrunch-disrupt-2024/",
        title: "Be a volunteer at TechCrunch Disrupt 2024",
        description: "TechCrunch Disrupt 2024 in San Francisco is just two months away, and we’re still looking for enthusiastic and driven volunteers to assist our events team. Don’t miss this opportunity to be part of something big!"
    },{
        imgSrc: "pic_7.png",
        link: "https://techcrunch.com/2024/08/30/elle-family-office-and-keebeck-wealth-management-are-coming-to-techcrunch-disrupt-2024/",
        title: "Elle Family Office and Keebeck Wealth Management are coming to TechCrunch Disrupt 2024",
        description: "Traditionally seen as private financial entities, family offices are key players in the supply of venture capital, using startup investments as a way to diversify their portfolios and engage with groundbreaking technologies."
    },{
        imgSrc: "pic_8.png",
        link: "https://techcrunch.com/2024/08/30/cartas-ill-fated-secondaries-business-finally-found-a-buyer/",
        title: "Watch out for these 10 hot startups from South Korea",
        description: "Most of the biggest South Korean tech startups intend to pursue public offerings in either South Korea or the United States as part of their exit strategy"
    },{
        imgSrc: "pic_9.png",
        link: "https://techcrunch.com/2024/08/30/cartas-ill-fated-secondaries-business-finally-found-a-buyer/",
        title: "Former Riot Games employees leverage generative AI to power NPCs in new video game",
        description: "Jam & Tea Studios is the latest gaming startup implementing generative AI to transform the way players interact with non-playable characters (NPCs) in video games."
    },{
        imgSrc: "pic_10.png",
        link: "https://techcrunch.com/2024/08/30/hello-wonder-is-building-an-ai-powered-browser-for-kids/",
        title: "Hello Wonder is building an AI-powered browser for kids",
        description: "Across the world, regulators have ramped up their efforts to try and increase the safety of kids on the internet. Major social networks are facing scrutiny, and as a countermeasure, trying to roll out tools to protect kids. The core issue in the focus is the content that shows up on children’s screens and how to make it safe."
    },{
        imgSrc: "pic_11.png",
        link: "https://techcrunch.com/2024/08/30/google-rolls-out-safeguards-for-more-of-its-ai-products-ahead-of-the-us-presidential-election/",
        title: "Google rolls out safeguards for more of its AI products ahead of the US presidential election",
        description: "Google is gearing up for the upcoming U.S. presidential election by rolling out safeguards for more of its generative AI products. Although the company already previously announced that it would restrict Gemini queries related to the election, it’s now applying additional restrictions to its other generative AI products."
    },{
        imgSrc: "pic_12.png",
        link: "https://techcrunch.com/2024/08/30/fundraising-is-a-lot-easier-when-you-have-traction/",
        title: "Fundraising is a lot easier when you have traction",
        description: "This week was a bit of a carryover from the one before as Bolt’s drama keeps unfolding — another story to be continued. But capital also flew to startups with traction, VC funds with track records, and worthy theses."
    },{
        imgSrc: "pic_13.png",
        link: "https://techcrunch.com/2024/08/30/north-korean-hackers-exploited-chrome-zero-day-to-steal-crypto/",
        title: "North Korean hackers exploited Chrome zero-day to steal crypto",
        description: "A North Korean hacking group earlier in August exploited a previously unknown bug in Chrome-based browsers to target organizations with the goal of stealing cryptocurrency, according to Microsoft."
    },{
        imgSrc: "pic_14.png",
        link: "https://techcrunch.com/2024/08/30/the-org-behind-the-data-set-used-to-train-stable-diffusion-claims-it-has-removed-csam/",
        title: "The org behind the dataset used to train Stable Diffusion claims it has removed CSAM",
        description: "LAION, the German research org that created the data used to train Stable Diffusion, among other generative AI models, has released a new dataset that it claims has been “thoroughly cleaned of known links to suspected child sexual abuse material (CSAM)"
    },{
        imgSrc: "pic_15.png",
        link: "https://techcrunch.com/2024/08/30/airbnb-and-fashion-app-by-rotation-partner-for-free-destination-wedding-outfits/",
        title: "Airbnb and fashion app By Rotation partner for free destination wedding outfits",
        description: "Eshita Kabra always knew she wanted to work with Airbnb. When she first came up with the idea for her company By Rotation a few years ago, a fashion-sharing platform, she looked to other gig economy businesses like Airbnb as inspiration."
    },{
        imgSrc: "pic_16.png",
        link: "https://techcrunch.com/2024/08/30/apple-stands-by-decision-to-terminate-account-belonging-to-wwdc-student-winner/",
        title: "Apple stands by decision to terminate account belonging to WWDC student winner",
        description: "Apple is standing by its decision to terminate the Apple Developer Account of Appstun, a mobile app company created by one of Apple’s own Worldwide Developer Conference 2021 student winners. According to an announcement published on Appstun’s website, Apple moved to terminate the developer’s account after multiple rejections of its app that Apple says violates its App Store guidelines."
    }
];

const container = document.getElementById('articles-container');

// إنشاء عناصر HTML كقوالب في مصفوفة
const elements = articles.map(({ imgSrc, link, title, description }) => {
    return `
        <div class="col-md-3 mb-5">
            <div class="item text-center">
                <img src="${imgSrc}" alt="Thumbnail" class="img-fluid">
                <a href="${link}" class="link-text">${title}</a>
                <p class="views" title="${description}">${description}</p>
            </div>
        </div>
    `;
});

elements.forEach(element => {
    container.innerHTML += element;
});
