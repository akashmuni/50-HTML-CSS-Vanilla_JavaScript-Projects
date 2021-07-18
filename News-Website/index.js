console.log("Welcome to Bookyberg News");

//Initalize the news Api parameters
let source = 'bbc-news';
let apikey = '4fec9d028b3046668860886e30483530';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                        <b>Breaking News ${index +1}:</b>  ${element["title"]}
                        </button>
                    </h2>
                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body">
                        ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here </a>
                        </div>
                    </div>
                    </div>`
             newsHtml += news;
            });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }

}
xhr.send();



