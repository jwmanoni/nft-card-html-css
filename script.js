let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}

// document.getElementById('owner').innerText = dog['otherData']['owner'];
// document.getElementById('profile_picture').src = dog.otherData.profileImg
// document.getElementById('duration').innerText = dog.otherData.daysLeft
// document.body.style.backgroundColor = dog.backgroundColor;
// document.getElementById('price').innerText = dog.price;
// document.getElementById('name').innerText = dog.name
// document.getElementById('description').innerText = dog.description
// document.getElementById('nft').src = dog.nft
// document.getElementById('container').style.backgroundColor = dog.cardColor

document.getElementById('toggle_nft').addEventListener('click', function () {
    if(document.getElementById('owner').innerText == 'Jacob Manoni') {
        document.getElementById('owner').innerText = dog['otherData']['owner'];
        document.getElementById('profile_picture').src = dog.otherData.profileImg
        document.getElementById('duration').innerText = dog.otherData.daysLeft
        document.body.style.backgroundColor = dog.backgroundColor;
        document.getElementById('price').innerText = dog.price;
        document.getElementById('name').innerText = dog.name
        document.getElementById('description').innerText = dog.description
        document.getElementById('nft').src = dog.nft
        document.getElementById('container').style.backgroundColor = dog.cardColor

    }
    else {
        document.getElementById('owner').innerText = 'Jacob Manoni';
        document.getElementById('profile_picture').src = "https://media-exp1.licdn.com/dms/image/C4E03AQGwWAemmwiHJQ/profile-displayphoto-shrink_800_800/0/1603032046413?e=1648684800&v=beta&t=28QzxrP_k7MzfO2PnO_sWJ32VJBvcpkV-_2FpGNGZQY";
        document.getElementById('duration').innerText = '3 Days left'
        document.body.style.backgroundColor = "#190933";
        document.getElementById('price').innerText = "49.07ETH";
        document.getElementById('name').innerText = "Perception #3333"
        document.getElementById('description').innerText = "Our Perception collection promotes discipline, control, and focus";
        document.getElementById('nft').src = "https://image.freepik.com/free-photo/colorful-3d-shapes-vaporwave-style_23-2148981126.jpg"
        document.getElementById('container').style.backgroundColor = "#476C9B"
    }
})

// document.getElementById('name').addEventListener('click', function () {
//     if(document.getElementById('name').style.color == 'white'){
//         document.getElementById('name').style.color = 'green'
//     } else {
//         document.getElementById('name').style.color = 'white'
//     }
// })









