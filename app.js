const btns=document.querySelectorAll('.tab-btn');
const about=document.querySelector('.about');
const articles= document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    // console.log(e.currentTarget);
    // console.log(e.target);
    const id= e.target.dataset.id;
    if(id)
    {
        // Removing active class from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // Hiding the other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        const element=document.querySelector('#' + id);
        element.classList.add('active');
    }
});
