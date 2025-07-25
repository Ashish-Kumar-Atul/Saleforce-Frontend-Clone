document.addEventListener('DOMContentLoaded', () => {

    const loadingpage = document.getElementById('loadingpage');
    const channeldetails = document.getElementById('channeldetails');
    const bannerimg = document.getElementById('bannerimg');
    const channeldescr = document.getElementById('channeldescr');
    const subscount = document.getElementById('subscount');
    const channelname = document.getElementById('channelname');
    const totalvideos = document.getElementById('totalvideos');
    const totalviews = document.getElementById('totalviews');
    const searchbox = document.getElementById('Searchbox');

    searchbox.addEventListener('keydown',(e)=>{
        if(e.key==="ENTER"){
            fetchapi();
        }
    })

    async function fetchapi(){
        const url = 'https://api.freeapi.app/api/v1/public/youtube/channel';
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
});


// const url = 'https://api.freeapi.app/api/v1/public/youtube/channel';
// const options = { method: 'GET', headers: { accept: 'application/json' } };


