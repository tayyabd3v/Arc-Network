const websitesContainer = document.getElementById('websitesContainer')

let otherWebCardHTML = `
<article class="web-card {currentWeb.stateClass}" onclick="window.location.href = './WebCard.html?id={currentWeb.id}'" tabindex="0" role="link" aria-label="{currentWeb.name}">
    <div class="web-card-visual"><img class="web-card-logo" src="{currentWeb.logoURL}" alt="{currentWeb.name} logo"></div>
    <div class="web-card-body">
        <div class="web-card-meta"><span>TOOL<!-- / {currentWeb.id}--></span><span class="web-card-status">{currentWeb.statusLabel}</span></div>
        <h3>{currentWeb.name}</h3>
        <p class="web-card-purpose">{currentWeb.webPurpose}</p>
        <p class="web-card-description">{currentWeb.webDescription}</p>
    </div>
</article>
`

WebsitesData.forEach((currentWeb) => {
    console.log(currentWeb)
    let currentTemplate = otherWebCardHTML
    if (currentWeb.isActive == false) currentTemplate = currentTemplate.replace(` onclick="window.location.href = './WebCard.html?id={currentWeb.id}'"`, '')
    currentTemplate = currentTemplate.replaceAll('{currentWeb.name}', currentWeb.name)
    currentTemplate = currentTemplate.replace('{currentWeb.webPurpose}', currentWeb.webPurpose)
    currentTemplate = currentTemplate.replace('{currentWeb.webDescription}', currentWeb.webDescription)
    currentTemplate = currentTemplate.replace('{currentWeb.logoURL}', currentWeb.logoURL)
    if (currentWeb.isActive == true) currentTemplate = currentTemplate.replaceAll('{currentWeb.id}', currentWeb.id)
    currentTemplate = currentTemplate.replace('{currentWeb.stateClass}', currentWeb.isActive ? 'is-live' : 'is-locked')
    currentTemplate = currentTemplate.replace('{currentWeb.statusLabel}', currentWeb.isActive ? 'LIVE' : 'SOON')
    if (currentWeb.id == '2') {
        currentTemplate = currentTemplate.replace('SOON', currentWeb.isActive ? 'Live' : 'Available in 28 Days')
    }
    console.log(currentTemplate)
    websitesContainer.innerHTML += currentTemplate
})

document.querySelectorAll('.web-card').forEach((card) => {
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') card.click()
    })
})