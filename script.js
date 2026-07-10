const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
const params=new URLSearchParams(location.search);const packageField=document.querySelector('#package');if(packageField&&params.get('package'))packageField.value=params.get('package');

const serviceField=document.querySelector('#service');if(serviceField&&params.get('service'))serviceField.value=params.get('service')==='Commercial'?'Commercial services':params.get('service');
