const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
         console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // entry.target.classList.remove('but');
        }
                
 });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

const hiddenElements2 = document.querySelectorAll('.hid');
hiddenElements2.forEach(element => {
    observer.observe(element);
});