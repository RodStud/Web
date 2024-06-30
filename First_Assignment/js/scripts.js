window.onload = () => {
    fetch("./data/therapy_page.json")
    .then(response => response.json())
    .then(data => Page_Init(data));
}

function Page_Init(data) {
    console.log(data);
}