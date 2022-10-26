
let siteNameInput = document.getElementById('siteNameInput');

let siteUrlInput = document.getElementById('siteUrlInput');

let bookmarkContainer = [];

if (localStorage.getItem("bookmarks") != null) {
    bookmarkContainer = JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark();
}

function addBookmark() {

    if (validateBookmarkName() == true) {
        let bookmark = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value,
        }
        bookmarkContainer.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarkContainer));
        clearBookmark();
        displayBookmark();
    }
    else {
        window.alert("invalid bookmarkName");
    }
};


function clearBookmark() {
    (siteNameInput.value = ""),
        (siteUrlInput.value = "");
}


function displayBookmark() {
    let bookmarkBox = ''

    for (let i = 0; i < bookmarkContainer.length; i++) {
        bookmarkBox += `<div class="row" >
        <div class="col-md-12 d-flex p-4 mb-4">
            <h2 class="w-25">${bookmarkContainer[i].siteName}</h2>
            <a href="https://${bookmarkContainer[i].siteUrl}" target="_blank" class="btn btn-primary ms-5 me-2 d-flex align-items-center">Visit</a>
            <button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button>
        </div>
    </div>`
    }
    document.getElementById('bookMarkerList').innerHTML = bookmarkBox;
}

function deleteBookmark(deleteIndex) {
    bookmarkContainer.splice(deleteIndex, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkContainer));
    displayBookmark();
}

function validateBookmarkName() {
    let regex = /^[a-z]{3,15}$/;
    if (regex.test(siteNameInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}