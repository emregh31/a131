var search = document.getElementById("search");

const fruits = [
    { "title": "Nektarin", "code": "2920 925" },
    { "title": "Şeftali", "code": "2920 830" },
    { "title": "Üzüm Red Globe", "code": "2921 179" },
    { "title": "Kavun", "code": "2920 833" },
    { "title": "Karpuz", "code": "2920 832" },
    { "title": "Mango", "code": "2000 343" },
    { "title": "Armut Santa Maria", "code": "2920 813" },
    { "title": "Armut Deveci", "code": "2920 812" },
    { "title": "Muz Yerli", "code": "2920 804" },
    { "title": "Muz İthal", "code": "2920 802" },
    { "title": "Ayva", "code": "2920 815" },
    { "title": "Nar", "code": "2920 815" },
    { "title": "Elma Starking", "code": "2920 805" },
    { "title": "Elma Golden", "code": "2920 807" },
    { "title": "Elma Granny Smith", "code": "2920 809" },
    { "title": "Mandalina", "code": "2920 820" },
    { "title": "Portakal", "code": "2920 816" },
    { "title": "Greyfurt", "code": "2920 824" },
    { "title": "Limon", "code": "2920 800" },
    { "title": "Kivi", "code": "2920 834" },
    { "title": "Ananas", "code": "2001 807" },
    { "title": "Avakado", "code": "2000 329" },
    { "title": "Hindistan Cevizi", "code": "2000 237" },
    { "title": "Açık Ceviz", "code": "2915 887" },
    { "title": "Taze Fasulye", "code": "2920 790" },
    { "title": "Pırasa", "code": "2920 787" },
    { "title": "Dere Otu", "code": "200 00 91" },
    { "title": "Nane", "code": "200 00 60" },
    { "title": "Roka", "code": "200 00 46" },
    { "title": "Domates", "code": "2920 761" },
    { "title": "Çarliston Biber", "code": "2920 768" },
    { "title": "Sivri Biber", "code": "2920 767" },
    { "title": "Dolma Biber", "code": "2920 769" },
    { "title": "Kırmızı Biber", "code": "2920 770" },
    { "title": "Kereviz", "code": "2920 783" },
    { "title": "Salatalık", "code": "2920 764" },
    { "title": "Patlıcan", "code": "2920 772" },
    { "title": "Kabak", "code": "2920 773" },
    { "title": "Havuç", "code": "2920 765" },
    { "title": "Patates", "code": "2920 794" },
    { "title": "Kızartmalık Patates", "code": "2921 013" },
    { "title": "Soğan", "code": "2920 796" },
    { "title": "Mor Soğan", "code": "2921 117" },
    { "title": "Kırmızı Turp", "code": "2920 789" },
    { "title": "Kayısı", "code": "2920 897" },
    { "title": "Kestane", "code": "2921 042" },
    { "title": "Beyaz Üzüm", "code": "2920 828" },
    { "title": "Siyah Üzüm", "code": "2920 829" },
    { "title": "Karpuz Çekirdeksiz", "code": "2920 892" }
];


fruits.sort((a, b) => a.title.localeCompare(b.title));

displayFruits(fruits);

function displayFruits(fruits) {
    var container = document.getElementById("product_list");
    container.innerHTML = "";

    for (let i = 0; i < fruits.length; i++) {
        container.innerHTML += `<div id="product${i}" class="product">
                                    <div id="colum_1">
                                        <h2>${fruits[i].title}</h2>
                                    </div>
                                    <div id="column_2">
                                        <h3>${fruits[i].code}</h3>
                                    </div>
                                </div>`;
    }

    search.addEventListener("input", function() {
        for (let i = 0; i < fruits.length; i++) {
            var product = document.getElementById("product" + i);
            var item = product.querySelector("h2");

            if (item.textContent.trim().toLowerCase().includes(search.value.trim().toLowerCase())) {
                product.classList.remove("remove");
            } else {
                product.classList.add("remove");
            }
        }
    });

    
}
document.getElementById('clear_button').addEventListener('click', function() {
    search.value = ''; // Inputu temizle
    search.dispatchEvent(new Event('input')); // input olayını tetikle
});
