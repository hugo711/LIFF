function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            sendLiff();
        })
        .catch((err) => {
            console.log(err);
        });
}

function sendLiff(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text'),
            sentBy: {
                label: "© SUPERGO BOTLINE",
                iconUrl: "https://media.giphy.com/media/7XPvE1Qt1Ec9sOWoG6/giphy.gif",
                linkUrl: "http://line.me/ti/p/~coa10995"
            }
        }]).then(function () {
            liff.closeWindow();
        });
    } else if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img'),
            sentBy: {
                label: "© SUPERGO BOTLINE",
                iconUrl: "https://media.giphy.com/media/7XPvE1Qt1Ec9sOWoG6/giphy.gif",
                linkUrl: "http://line.me/ti/p/~coa10995"
            }
        }]).then(function () {
            liff.closeWindow();
        });
    } else if (tipe === 'video') {
        prev = getParameterByName('piu');
        if(prev !== null && prev !== '') {
            dura = prev;
        } else {
            dura = "https://media.giphy.com/media/7XPvE1Qt1Ec9sOWoG6/giphy.gif";
        }
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: dura
        }]).then(function () {
            liff.closeWindow();
        });
    } else if (tipe === 'audio') {
        duration = getParameterByName('duration');
        if(duration !== null && duration !== '') {
            dura = parseInt(duration);
        } else {
            dura = 60000;
        }
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: dura
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}