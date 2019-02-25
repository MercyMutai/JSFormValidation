const dropdowns = document.querySelectorAll('header ul li ul');

dropdowns.forEach(target => {

    let parent = target.parentElement;

    parent.addEventListener('mouseover', function() {
        target.style.display = "block"
    })

    parent.addEventListener('mouseout', function() {
        target.style.display = "none"
    })

});