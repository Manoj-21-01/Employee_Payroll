// alert("Hello");

function register_employee() {
    let name = document.getElementById("name").value;
    let notes = document.getElementById("notes").value;

    console.log("Name: ",name);
    console.log("Notes: ",notes);
    
    const obj = {
        Name: "name",
        Notes: "notes"
    }
}
document.getElementById("submit").addEventListener("click",function(){
    register_employee();
});

let radioButtons = document.querySelectorAll("input[name='gender']");
let findSelected = () => {
    let selected = document.querySelector("input[name='gender']:checked");
    if (selected) {
        return selected.value;
    }
    return null;
}

radioButtons.forEach(radioButtons => {
    radioButtons.addEventListener("click",() => {
        console.log("Gender: ", findSelected());
    });
});

// let profileIcon = document.querySelectorAll("input[name='profile']");
// let iconSelected = () => {
//     let icon = document.querySelector("input[name='gender']:checked");
//     if (icon) {
//         return icon.value;
//     }
//     return null;
// }

// profileIcon.forEach(profileIcon => {
//     profileIcon.addEventListener("clilck",() => {
//         console.log("Profile Icon: ", profileIcon.alt);
//     });
// });

const images = document.querySelectorAll('profile');
images.forEach(profile => {
    profile.addEventListener('click', () => {
        console.log(profile);
    });
});