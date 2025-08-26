// Friend's info data
const friends = [
  {
    key: "rakib",
    name: "Rakib",
    age: "১৪",
    description: "চালাক শয়তান 😄"
  },
  {
    key: "hafizur1",
    name: "Hafizur 1",
    age: "১৫",
    description: "স্ট্রং কিন্তু খারাপ দিক থাকলে ইগনোর মারে"
  },
  {
    key: "hafizur2",
    name: "Hafizur 2",
    age: "১৫",
    description: "শান্ত, শিষ্ট, কিন্তু বদমাশ"
  },
  {
    key: "sipon",
    name: "Sipon",
    age: "১৫",
    description: "শান্ত, কিন্তু রাগে উঠলে সবাই হাসে ওর কাণ্ড দেখে"
  },
  {
    key: "hassan",
    name: "Hassan",
    age: "১৩",
    description: "পড়ালেখায় ভালো, দেখতে ক্লাস ৩ এর বাচ্চার মতো 😄"
  },
  {
    key: "tahsin",
    name: "Tahsin",
    age: "১৪",
    description: "পড়ালেখা ঠিকঠাক, সবদিক দিয়েই ব্যালান্সড"
  },
  {
    key: "nurul",
    name: "Nurul Amin",
    age: "১৫",
    description: "“স্নেক চিনি ভাই আমি দেখছি” 🤣"
  },
  {
    key: "kaku",
    name: "Kaku",
    age: "১৫",
    description: "ভালো কিন্তু বদমাশির প্রবণতা আছে"
  },
  // 9, 10, 11 — শুধু নাম
  {
    key: "dipo",
    name: "Dipo"
  },
  {
    key: "adib",
    name: "Adib"
  },
  {
    key: "sahin",
    name: "Sahin"
  }
];

// For extra-box: "আজকে বা কালকে কে কে ভাগা মারছে?" — শুধু Adib আর Kaku
const bhagaMarseList = [
  { name: "Adib" },
  { name: "Kaku" }
];

// Render friend boxes
function renderFriendList() {
  const list = document.querySelector('.friend-list');
  list.innerHTML = '';
  friends.forEach((f, idx) => {
    let card = document.createElement('div');
    card.className = 'friend-card';
    card.setAttribute('data-key', f.key);
    card.textContent = `${idx+1}. ${f.name}`;
    // Badge if no details
    if(!f.age && !f.description) {
      let badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = "তথ্য নেই";
      card.appendChild(badge);
    }
    card.onclick = () => openModal(f);
    list.appendChild(card);
  });
}

// Modal for friend details
function openModal(friend) {
  document.getElementById('modalDetails').innerHTML = '';
  let html = `<div class="modal-details">`;
  html += `<div><span class="detail-label">নাম:</span> <span class="detail-value">${friend.name}</span></div>`;
  if(friend.age)
    html += `<div><span class="detail-label">বয়স:</span> <span class="detail-value">${friend.age}</span></div>`;
  if(friend.description)
    html += `<div><span class="detail-label">বিবরণ:</span> <span class="detail-value">${friend.description}</span></div>`;
  html += `</div>`;
  document.getElementById('modalDetails').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Modal for bhaga marse
function showBhagaMarse() {
  let html = `<div class="modal-details">`;
  html += `<div><span class="detail-label">আজকে/কালকে কে কে ভাগা মারছে:</span></div>`;
  bhagaMarseList.forEach(f => {
    html += `<div style="margin-left:18px; margin-top:9px;">
      <span class="detail-value">${f.name}</span>
    </div>`;
  });
  html += `</div>`;
  document.getElementById('modalDetails').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function goMarsi() {
  window.location.href = "marsi.html";
}

// Close modal on overlay click (not modal-content)
document.getElementById('modalOverlay').addEventListener('click', function(e){
  if(e.target === this) closeModal();
});


// LOGIN LOGIC
document.getElementById('loginBtn').onclick = function() {
  let name = document.getElementById('loginName').value.trim();
  if(!name) {
    document.getElementById('loginName').placeholder = "Please enter your name!";
    document.getElementById('loginName').focus();
    return;
  }
  document.getElementById('loginOverlay').style.display = "none";
  document.getElementById('mainContent').style.display = "block";
  document.getElementById('greeting').textContent =
    `স্বাগতম, ${name}!`;
};

// Enter key for login
document.getElementById('loginName').addEventListener('keyup', function(e){
  if(e.key === "Enter") document.getElementById('loginBtn').click();
});

// Render list after DOM loaded
document.addEventListener('DOMContentLoaded', renderFriendList);
