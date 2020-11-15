const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();


var arr = [
    "Feelings of helplessness and hopelessness. A bleak outlook—nothing will ever get better and there’s nothing you can do to improve your situation.",
    "Loss of interest in daily activities. You don’t care anymore about former hobbies, pastimes, social activities, or sex. You’ve lost your ability to feel joy and pleasure.",
    "Appetite or weight changes. Significant weight loss or weight gain—a change of more than 5% of body weight in a month.",
    "Sleep changes. Either insomnia, especially waking in the early hours of the morning, or oversleeping.",
    "Anger or irritability. Feeling agitated, restless, or even violent. Your tolerance level is low, your temper short, and everything and everyone gets on your nerves."
]