import json

def get_extracted_news():
    # These items were extracted via browser analysis of hsgatelangana.com/news
    # and hindustanscoutsandguidesassociation.com/notices/
    news_items = [
        {
            "id": 1,
            "title": "Formation of HSGA Telangana State Executive Committee",
            "date": "Feb 02, 2026",
            "category": "Official",
            "excerpt": "The state committee has been formally established with new leadership appointments to drive scouting initiatives across all districts of Telangana.",
            "image": "https://hsgatelangana.com/assets/img/news/10_ixidnt.jpg" # Using real paths from the site
        },
        {
            "id": 2,
            "title": "HMTV Coverage: HSGA Telangana Youth Empowerment",
            "date": "Jan 20, 2026",
            "category": "Media",
            "excerpt": "Watch the special segment on HMTV featuring the impact of Hindustan Scouts and Guides on youth discipline and leadership development.",
            "image": "https://hsgatelangana.com/assets/img/news/9_zvecgp.jpg"
        },
        {
            "id": 3,
            "title": "National Science Day Celebration & Innovation Fair",
            "date": "Feb 19, 2025",
            "category": "Events",
            "excerpt": "Telangana scouts participated in a grand exhibition showcasing innovative projects in renewable energy and sustainable scouting.",
            "image": "https://hsgatelangana.com/assets/img/news/12_arasnk.jpg"
        },
        {
            "id": 4,
            "title": "Praveshika Program: Enabling Digital Citizenship",
            "date": "Dec 15, 2025",
            "category": "Training",
            "excerpt": "A new module focusing on digital literacy and online safety for junior scouts was launched during the winter camp session.",
            "image": "https://hsgatelangana.com/assets/img/news/11_v6xnwa.jpg"
        }
    ]
    return news_items

if __name__ == "__main__":
    news = get_extracted_news()
    print(json.dumps(news, indent=2))
