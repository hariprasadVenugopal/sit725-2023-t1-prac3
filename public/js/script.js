const cardList = [
    {
        title: "sit725-2023-t1-prac2",
        image: "images/gitp2.png",
        link: "OnTrack task 2.2P ",
        description: "EXPRESS WEB SERVERS"
    },
    {
        title: "sit725-2023-t1-prac3",
        image: "images/gitp3.jpg",
        link: "OnTrack task 3.2P",
        description: "GETTING GRAPHICAL"
    }
];


const submitForm = () => {
    M.AutoInit();
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form data is submitted: ", formData);
    alert("Details are submitted. Thanks for clicking me. Hope you have a nice day!");
    const modal = document.getElementById('modal1');
    const instance = M.Modal.getInstance(modal);
    instance.close();
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text card-desc-color">' + item.description + '</p>' +
            '</div></div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});