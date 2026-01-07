document.addEventListener('DOMContentLoaded', () => {
    let isFrameLoaded = false;
    const changelogUrl = 'https://alysum.promokit.eu/promokit/alysum-changelog.html';
    const pkAside = document.querySelector('.pk-front-panel'),
        pkSpace = document.querySelector('.pk-front-space'),
        hidePanel = document.querySelector('.pk-hide-panel'),
        showPanel = document.querySelector('.pk-show-panel'),
        activeClass = 'active',
        bodyclass = 'display-shadow';

    const activate = () => {
        pkAside.classList.add(activeClass);
        document.body.classList.add(bodyclass, 'oh');
    };
    const deactivate = () => {
        pkAside.classList.remove(activeClass);
        document.body.classList.remove(bodyclass, 'oh');
    };

    hidePanel.onclick = () => deactivate();
    showPanel.onclick = () => {
        if (!isFrameLoaded) {
            const iframe = document.createElement('iframe');
            iframe.src = changelogUrl;
            pkSpace.appendChild(iframe);
            isFrameLoaded = true;
        }

        const shadow = document.querySelector('.pk-shadow');
        shadow.addEventListener('click', deactivate);

        activate();
    };
});
