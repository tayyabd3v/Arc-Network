const webLogoContainer = document.getElementById('webLogoContainer')
const webNameContainer = document.getElementById('webNameContainer')
const webPurposeContainer = document.getElementById('webPurposeContainer')
const webDescriptionContainer = document.getElementById('webDescriptionContainer')
const webAuthorContainer = document.getElementById('webAuthorContainer')
const webAuthorEmailContainer = document.getElementById('webAuthorEmailContainer')
const webLastUpdatedContainer = document.getElementById('webLastUpdatedContainer')
const webBuildedContainer = document.getElementById('webBuildedContainer')
const webURLButtonRedirect = document.getElementById('webURLButtonRedirect')
const titleOfWebCardHTML = document.getElementById('titleOfWebCardHTML')

let params = '';
let id = '';
let currentWeb = '';

function updateData() {
    params = new URLSearchParams(window.location.search)
    id = params.get('id')
}

function getCurrentWebsite() {
    currentWeb = WebsitesData.find((pt) => pt.id === id && pt.isActive) || null
}

function updateAll() {
    updateData()
    getCurrentWebsite()
}

function getAndShowImage() {
    if (currentWeb) {
        let img = document.createElement('img')
        img.src = currentWeb.logoURL
        img.id = 'webLogoContainerImage'
        webLogoContainer.appendChild(img)
    }
    else window.location.replace('./index.html')
}

function writeWebData() {
    if (currentWeb) {
        webNameContainer.innerHTML = currentWeb.name
        webAuthorContainer.innerHTML = currentWeb.author
        webAuthorEmailContainer.innerHTML = currentWeb.authorEmail
        webDescriptionContainer.innerHTML = currentWeb.webDescription
        webPurposeContainer.innerHTML = currentWeb.webPurpose
        webBuildedContainer.innerHTML = currentWeb.buildedAt
        webLastUpdatedContainer.innerHTML = currentWeb.updatedAT
        webURLButtonRedirect.addEventListener('click', () => {
            redirectToWeb()
        })
    }
    else window.location.replace('./index.html')
}

function redirectToWeb() {
    window.location.href = currentWeb.webURL
}

function VerifyIsActive() {
    if (currentWeb && currentWeb.isActive == false) currentWeb = null;
}

function handlePageTitle() {
    if (currentWeb) {
        titleOfWebCardHTML.textContent = `${currentWeb.name}, About || Powered By MoonTech`
    }
}

function hanlderOfAll() {
    updateAll()
    VerifyIsActive()
    getAndShowImage()
    writeWebData()
    handlePageTitle()
}

hanlderOfAll()