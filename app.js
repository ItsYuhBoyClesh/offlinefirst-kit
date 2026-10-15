'use strict';
const KEY='open-heightz-offlinefirst-notes-v1';
const list=document.getElementById('notes');
const form=document.getElementById('form');
const input=document.getElementById('note');
const status=document.getElementById('network');
function read(){try{const data=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(data)?data.filter(x=>typeof x==='string'):[]}catch{return []}}
function save(notes){try{localStorage.setItem(KEY,JSON.stringify(notes));return true}catch{return false}}
function render(){const notes=read();list.replaceChildren();if(!notes.length){const li=document.createElement('li');li.textContent='No notes yet.';list.append(li);return}notes.forEach((entry,index)=>{const li=document.createElement('li');const text=document.createElement('span');text.textContent=entry;const remove=document.createElement('button');remove.textContent='Delete';remove.setAttribute('aria-label','Delete note '+(index+1));remove.addEventListener('click',()=>{const all=read();all.splice(index,1);if(save(all))render();else alert('Unable to save changes in this browser.')});li.append(text,document.createTextNode(' '),remove);list.append(li)})}
function showNetwork(){status.textContent=navigator.onLine?'Browser reports online.':'Browser reports offline. Saved notes remain available.'}
form.addEventListener('submit',event=>{event.preventDefault();const note=input.value.trim();if(!note)return;const all=read();all.unshift(note);if(!save(all)){alert('This browser cannot save the note. Storage may be full or blocked.');return}input.value='';render();input.focus()});
window.addEventListener('online',showNetwork);window.addEventListener('offline',showNetwork);
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(()=>{})}
showNetwork();render();
