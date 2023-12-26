function formatedDate() {
    return moment().format("DD.MM.YYYY");
}

document.getElementById('date').innerHTML = formatedDate();
console.log(formatedDate());