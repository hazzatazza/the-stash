(() => {
    const handleStoreButtonClick = (event) => {
        event.preventDefault()
        
        const utmCampaign = event.target.dataset.utmCampaign
        const isIos = event.target.dataset.store === 'apple-app-store'

        let link = isIos
            ? 'https://apps.apple.com/us/app/stacky-bird-fun-no-wifi-games/id1499304256?utm_campaign='
            : 'https://play.google.com/store/apps/details?id=com.kooapps.stackybirdandroid&utm_campaign='
        link += utmCampaign

        window.open(link)
    }

    const storeButtons = document.querySelectorAll('#storeLinks a')
    storeButtons.forEach((btn) => {
        btn.addEventListener('click', handleStoreButtonClick)
    })
})()
