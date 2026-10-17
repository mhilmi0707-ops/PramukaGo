function dashboard(){
 const u=currentUser(), page=document.getElementById('page');
 page.innerHTML=`
 <section class="hero">
  <div><span class="badge" style="background:#d9efd8;color:#27733a">PERJALANAN PRAMUKA DIGITAL</span>
   <h1>Belajar Pramuka.<br><span style="color:var(--green)">Naik Level.</span></h1>
   <p>Selamat datang, <b>${esc(u.name)}</b>! Selesaikan materi, kumpulkan XP, dan tantang temanmu.</p>
   <button class="primary" onclick="openLevel('${u.level}')">Lanjut Belajar →</button>
  </div><div class="hero-icon">⚜️</div>
 </section>
 <div class="stats">
  <div class="stat">⭐ XP<b>${u.xp}</b></div>
  <div class="stat">🔥 Streak<b>${u.streak} hari</b></div>
  <div class="stat">🏅 Badge<b>${u.badges.length}</b></div>
 </div>
 <div class="section-title"><h2>🎮 Game & Challenge</h2><button class="secondary" onclick="showGames()">Lihat Semua</button></div>
 <div class="card"><h3>Quiz Challenge Pramuka</h3><p>Buat kuis sendiri, bagikan kode game, lalu lihat leaderboard siswa secara langsung.</p><button class="primary" onclick="showCreateGame()">Buat Game →</button></div>`;
}
function catatan(){
	 page.innerHTML=`<div class="section-title"><h2>Pilih Perjalananmu</h2><small>3 Golongan</small></div>
 <div class="grid">${Object.entries(levels).map(([k,l])=>`
  <div class="level ${l.color}">
   <div class="big">${l.icon}</div><span class="badge">${l.premium?'PREMIUM':'GRATIS'}</span>
   <h3>${l.name}</h3><p>${l.desc}</p>
   <button onclick="openLevel('${k}')">${l.premium?'🔒 Lihat Premium':'Mulai Belajar'}</button>
  </div>`).join('')}</div>`;
}

function profile(){
 const u=currentUser();
 document.getElementById('page').innerHTML=`
 <div class="section-title"><h2>👤 Profil Saya</h2><button class="secondary" onclick="dashboard()">← Kembali</button></div>
 <div class="card" style="max-width:700px">
  <div style="font-size:60px">🧑‍🚀</div><h2>${esc(u.name)}</h2><p>@${esc(u.username)}</p>
  <p>Golongan: <b>${levels[u.level].icon} ${levels[u.level].name}</b></p>
  <hr style="border:0;border-top:1px solid #e5ece5;margin:20px 0">
  <div class="stats"><div class="stat">⭐ XP<b>${u.xp}</b></div><div class="stat">🔥 Streak<b>${u.streak}</b></div><div class="stat">🏅 Badge<b>${u.badges.length}</b></div></div>
 </div>`;
}

function sejarah(){ 
 const u=currentUser();
 document.getElementById('page').innerHTML=`
 <div class="section-title"><h2>⚜ Sejarah Pramuka</h2><button class="secondary" onclick="dashboard()">← Kembali</button></div>
 <div class="card">
 
 <h3>A. Sejarah Kepramukaan Dunia</h3>
 <p class="paragraph"><b>1. Tokoh Pendiri:</b> Robert Stephenson Smyth Baden-Powell (dikenal sebagai Chief Scout of the World atau Bapak Pandu Sedunia) yang lahir di London pada 22 Februari 1857 dan wafat pada 8 Januari 1941.</p>
 <p class="paragraph"><b>2. Latar Belakang:</b> Berawal dari pengalaman militernya (terutama saat Perang Boer dan pengepungan Mafeking 1899–1900 di Afrika Selatan), Baden-Powell melihat pentingnya melatih kemandirian, keterampilan lapangan, kedisiplinan, dan kerja sama bagi kaum muda.</p>
 <p class="paragraph"><b>3. Perkemahan Pertama (1907):</b> Perkemahan percobaan diadakan pada 1–8 Agustus 1907 di Pulau Brownsea, Inggris, yang diikuti sekitar 20 anak laki-laki. Peristiwa ini menjadi tonggak lahirnya gerakan kepanduan dunia.</p>
 <p class="paragraph"><b>4. Buku Scouting for Boys (1908):</b> Buku panduan yang ditulis oleh Baden-Powell yang memuat prinsip dasar kepanduan dan memicu penyebaran gerakan kepanduan secara cepat ke seluruh dunia.</p>
 <p class="paragraph"><b>5. Jambore Dunia Pertama (1920):</b> Diselenggarakan di Olympia, London, Inggris, mempertemukan ribuan anggota kepanduan dari berbagai negara dan meneguhkan posisi Baden-Powell sebagai Bapak Pandu Sedunia.</p>
 <p class="paragraph"><b>6. Organisasi Dunia:</b> Terbentuknya organisasi internasional, yang saat ini dikenal sebagai WOSM (World Organization of the Scout Movement), untuk mengoordinasikan gerakan kepanduan secara global.</p>
 
 <h3>B. Sejarah Kepramukaan di Indonesia</h3>
 <p class="paragraph"><b>1. Masa Penjajahan Belanda:</b> Kepanduan masuk ke Indonesia (dulu Hindia Belanda) melalui organisasi bentukan Belanda seperti NIPV (Nederlandsch-Indische Padvinders Vereeniging). Istilah kepanduan saat itu disebut padvinderij.</p>
 <p class="paragraph"><b>2. Kepanduan Kebangsaan (Pribumi):</b> Tokoh dan pemuda Indonesia kemudian mendirikan organisasi mandiri untuk menanamkan nasionalisme, seperti:
 • NPO (Nationale Padvinderij Organisatie) di Bandung (1912).
 • JPO (Javaansche Padvinders Organisatie) di Surakarta (1916) oleh Mangkunegara VII.</p>
 <p class="paragraph"><b>3. Peran dalam Pergerakan Nasional:</b> Kepanduan menjadi wadah penting pemuda untuk menumbuhkan rasa cinta tanah air, persatuan, dan berkontribusi menjelang Sumpah Pemuda (28 Oktober 1928).</p>
 <p class="paragraph"><b>4. Masa Pendudukan Jepang:</b> Kegiatan kepanduan sempat dilarang dan dibatasi secara ketat oleh pemerintah militer Jepang.</p>
 <p class="paragraph"><b>5. Masa Kemerdekaan & Tantangan:</b> Setelah Proklamasi 1945, lahir Pandu Rakyat Indonesia (PRI) (28 Desember 1945). Namun, pada 1950-an, muncul terlalu banyak organisasi kepanduan terpecah (seperti IPINDO, POPPINDO, PKPI, dan PERKINDO) sehingga sulit dikoordinasikan.</p>
 
 <h3>C. Berdirinya Gerakan Pramuka Indonesia (1961)</h3>
 <p class="paragraph"><b>1. Penyatuan Organisasi:</b> Pemerintah memandang perlu menyatukan puluhan organisasi kepanduan yang ada ke dalam satu wadah tunggal nasional demi efektivitas pendidikan karakter dan persatuan bangsa.</p>
 <p class="paragraph"><b>2. Hari Tunas (9 Maret 1961):</b> Presiden Soekarno mengumpulkan tokoh-tokoh kepanduan untuk mencetuskan gagasan penyatuan kepanduan.</p>
 <p class="paragraph"><b>3. Keputusan Presiden No. 238 Tahun 1961:</b> Diterbitkan pada 20 Mei 1961 (diperingati sebagai Hari Permulaan Tahun Kerja) yang resmi menetapkan Gerakan Pramuka sebagai satu-satunya organisasi kepanduan di Indonesia.</p>
 <p class="paragraph"><b>4. Hari Pramuka (14 Agustus 1961):</b> Gerakan Pramuka diperkenalkan secara resmi kepada masyarakat ditandai dengan penyerahan Panji Gerakan Pramuka oleh Presiden Soekarno kepada Sri Sultan Hamengkubuwono IX. Tanggal ini diperingati setiap tahun sebagai Hari Pramuka.</p>
 <p class="paragraph"><b>5. Bapak Pramuka Indonesia:</b> Sri Sultan Hamengkubuwono IX dianugerahi gelar sebagai Bapak Pramuka Indonesia atas jasanya dalam menyatukan dan mengembangkan Gerakan Pramuka.</p>
 
 </div>`;
} 

function tokenCreateGame(){
	const code=prompt('Masukkan token yang didapatkan dari administrator');
	if(code)showCreateGame(code.trim().toUpperCase());
}
function showCreateGame(code){
	const g=(code==='000012');
	if(!g)return toast('Token  tidak sesuai, silahkan menghubung administratorgame tidak ditemukan.');
 document.getElementById('page').innerHTML=`
 <div class="section-title">
   <div>
     <h2>➕ Buat Game</h2>
     <p>Buat game yang bisa dibagikan kepada siswa hanya dengan ⭐25</p>
   </div>
   <button class="secondary" onclick="dashboard()">← Kembali</button>
 </div>

 <div class="card">
   <div class="field">
     <label>JUDUL GAME</label>
     <input id="gameTitle" value="Quiz Pramuka">
   </div>

   <div class="field">
     <label>TOPIK</label>
     <select id="gameTopic">
       <option>Dasa Dharma</option>
       <option>Tri Satya</option>
       <option>Tali-Temali</option>
       <option>Semaphore & Morse</option>
       <option>Pengetahuan Umum Pramuka</option>
     </select>
   </div>

   <div class="field">
     <label>JUMLAH SOAL</label>
     <select id="gameCount">
       <option value="1">1</option>
       <option value="5">5</option>
       <option value="10">10</option>
       <option value="15">15</option>
       <option value="20">20</option>
     </select>
   </div>

   <button class="primary" onclick="startCreateQuestions()">
     ✏️ Buat Soal
   </button>
 </div>

 <div id="questionBuilder"></div>

 <div class="section-title">
   <h2>Game yang Dibuat</h2>
 </div>

 <div id="myGames"></div>
 `;

 renderMyGames();
}

function showGames(){
	const u=currentUser();
	const golongan = String(u?.level || u?.u || u || '')
        .trim()
        .toLowerCase();

    const cardSiaga = golongan === 'siaga' ? `
        <div class="card">
            <div style="font-size:40px">🟢</div>
            <h3>SIAGA</h3>
            <p>Siap Mencoba? Ayo Mulai Langkah Pertamamu</p>
            <button class="primary" onclick="startQuiz(1)">Main Sekarang</button>
        </div>` : '';

    const cardPenggalang = golongan === 'penggalang' ? `
        <div class="card">
            <div style="font-size:40px">🔴</div>
            <h3>PENGGALANG</h3>
            <p>Suka Tantangan? Buktikanlah Di Sini</p>
            <button class="primary" onclick="startQuiz(2)">Main Sekarang</button>
        </div>` : '';

    const cardPenegak = golongan === 'penegak' ? `
        <div class="card">
            <div style="font-size:40px">🟡</div>
            <h3>PENEGAK</h3>
            <p>Siap Lanjut? Tunjukkan Aksimu</p>
            <button class="primary" onclick="startQuiz(3)">Main Sekarang</button>
        </div>` : '';
	const golonganID = {
    siaga: 1,
    penggalang: 2,
    penegak: 3
	};

	const golonganNumber = golonganID[golongan] || 0;
	document.getElementById('page').innerHTML=`
	<div class="section-title"><div><h2>🎮 Game Pramuka</h2><p>Belajar sambil bermain dan berkompetisi.</p></div><button class="primary" onclick="showCreateGame()">+ Buat Game</button></div>
	<div class="grid">
	${cardSiaga}
	${cardPenggalang}
	${cardPenegak}
  
  <div class="card"><div style="font-size:40px">🏆</div><h3>Quiz Challenge</h3><p>Masukkan kode game dari guru/pembina.</p><button class="secondary" onclick="joinGame()">Masukkan Kode</button></div>
  <div class="card"><div style="font-size:40px">⚡</div><h3>Speed Challenge</h3><p>Jawab cepat untuk mengumpulkan XP.</p><button class="secondary" onclick="startTimedQuiz(${golonganNumber})">Mulai</button></div>
 </div>
 
 <div class="section-title"><div><h2>🏆 Leaderboard</h2><p>Ayo tingkatkan ranking kamu.</p></div></div>
 <div id="leaderboard"></div>
`;

leaderboard();
}

function showCreatedGame(){
 document.getElementById('page').innerHTML=`
 <div id="questionBuilder"></div>

 <div class="section-title">
   <h2>Game yang Dibuat</h2>
 </div>

 <div id="myGames"></div>
 `;

 renderMyGames();
}

