function insert(btn) {
    document.querySelector('.output').innerHTML += btn;
}

function hasil() {
    let value = document.querySelector('.output').innerHTML;
    document.querySelector('.output').innerHTML = eval(value);

    if (value == "") {
    document.querySelector('.output').innerHTML = "Masukan Angka!"
    }
}

function reset() {
    document.querySelector('.output').innerHTML = "";
}

function hapus() {
    let value = document.querySelector('.output').innerHTML;
    document.querySelector('.output').innerHTML = value.substring(0,value.length-1);

}