CreateProductElements();

function CreateProductElements ()
{
    containers = document.getElementsByClassName("product");

    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        
        const titleData = container.dataset.title;
        const descriptionData = container.dataset.description;
        const urlData = container.dataset.url;
        const imgsrcData = container.dataset.imgsrc;
        const tagsData = container.dataset.tags;
        const tagsList = tagsData.split(',').map(element => element.trim());

        const element = document.createElement('div');
        element.classList.add('gamesItem');
        element.id = container.id;
        container.id = "";

        const a = document.createElement('a');
        a.href = urlData;
        a.target = "_blank";

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('product-icon');

        const iconImg = document.createElement('img');
        iconImg.src = imgsrcData;
        iconImg.width = 100;
        iconImg.height = 150;

        const gameInfo = document.createElement('div');
        gameInfo.classList.add('product-info');

        const title = document.createElement('h3');
        title.textContent = titleData;

        const tags = document.createElement('div');
        tags.classList.add('contributions');

        for (let i = 0; i < tagsList.length; i++) {
            const tag = tagsList[i];
            
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');

            const p = document.createElement('p');
            p.textContent = tag;

            tagElement.appendChild(p);

            tags.appendChild(tagElement);
        }

        const description = document.createElement('p');
        description.textContent = descriptionData;

        element.appendChild(a);
        a.appendChild(iconSpan);
        a.appendChild(gameInfo);
        iconSpan.appendChild(iconImg);
        gameInfo.appendChild(title);
        gameInfo.appendChild(tags);
        gameInfo.appendChild(description);

        container.appendChild(element);
    }
}