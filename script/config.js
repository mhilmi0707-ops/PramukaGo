// ==========================================
// 1. QUIZ SIAGA
// ==========================================
const quizBank1 = [
  {
    q: 'Apa kepanjangan dari Pramuka?',
    a: ['Praja Muda Karana','Pemuda Rakyat Mandiri','Praktik Muda Berkarya','Praja Muda Karya'],
    c: 0
  },
  {
    q: 'Berapa jumlah Dwi Darma Pramuka Siaga?',
    a: ['1', '2', '5','10'],
    c: 1
  },
  {
    q: 'Apa warna dasar lambang Gerakan Pramuka?',
    a: ['Merah', 'Biru','Cokelat','Hijau'],
    c: 2
  },
  {
    q: 'Pramuka Siaga adalah tingkatan dalam gerakan Pramuka yang diperuntukkan bagi anak-anak berusia?',
    a: ['5 hingga 7 tahun','7 hingga 10 tahun','11 hingga 15 tahun','16 hingga 20 tahun'],
    c: 1
  },
  {
    q: 'Apa nama lambang Gerakan Pramuka?',
    a: ['Bunga Melati', 'Tunas Kelapa', 'Pohon Beringin', 'Bunga Mawar'],
    c: 1
  },
  {
    q: 'Nama-nama barung dalam Pramuka Siaga biasanya menggunakan identitas berupa',
    a: ['Nama pahlawan nasional','Nama hewan buas','Warna (misalnya Merah, Hijau, Putih)','Nama bunga'],
    c: 2
  },
  {
    q: 'Siapa yang harus kita hormati di sekolah?',
    a: ['Hanya teman dekat', 'Guru dan orang lain', 'Hanya ketua kelas', 'Tidak perlu siapa pun'],
    c: 1
  },
  {
    q: 'Barung dipimpin oleh seorang Pemimpin Barung yang biasa disingkat dengan sebutan',
    a: ['Pradana',' Pinrung','Wapinrung','Sulung'],
    c: 1
  },
  {
    q: 'Wakil dari Pemimpin Barung dalam Pramuka Siaga disebut dengan singkatan...',
    a: ['Pinrung','Wapinrung','Sulung','Pradana'],
    c: 1
  },
  {
    q: 'Apa nama kelompok kecil dalam Pramuka Siaga?',
    a: ['Barung', 'Regu', 'Sangga', 'Racana'],
    c: 0
  },
  {
    q: 'Warna seragam Pramuka Indonesia adalah...',
    a: ['Merah putih', 'Cokelat muda dan cokelat tua', 'Biru putih', 'Hijau kuning'],
    c: 1
  },
  {
    q: 'Sikap yang baik saat mengikuti upacara adalah...',
    a: ['Bercanda', 'Berbicara sendiri', 'Tertib dan khidmat', 'Bermain'],
    c: 2
  },
  {
    q: 'Gabungan dari beberapa Barung (biasanya 3 hingga 4 barung) dalam Pramuka Siaga dinamakan...',
    a: ['Perindukan','Regu','Sangga','Gugus Depan'],
    c: 0
  },
  {
    q: 'Panggilan untuk Pembina Pramuka Siaga putra adalah...',
    a: ['Yanda','Bunda','Pakcik','Bucik'],
    c: 0
  },
  {
    q: 'Hari Pramuka diperingati setiap tanggal...',
    a: ['17 Agustus', '14 Agustus', '2 Mei', '10 November'],
    c: 1
  },
  {
    q: 'Panggilan untuk Pembina Pramuka Siaga putri adalah...',
    a: ['Yanda','Bunda','Pakcik','Bucik'],
    c: 1
  },
  {
    q: 'Janji seorang Pramuka Siaga dikenal dengan sebutan...',
    a: ['Dwisatya','Dwidarma','Dasadarma','Trisatya'],
    c: 0
  },
  {
    q: 'Bunyi Dwidarma Pramuka Siaga yang pertama adalah...',
    a: ['Siaga itu berani dan tidak putus asa','Siaga itu patuh pada ayah dan ibundanya','Siaga itu rajin, tabah, dan gembira','Siaga itu hemat, cermat, dan bersahaja'],
    c: 0
  },
  {
    q: 'Tingkatan utama dalam Pramuka Siaga terdiri dari tiga jenjang, yaitu...',
    a: [' Mula, Bantu, Tata','Purwa, Madya, Utama','Siaga, Penggalang, Penegak','Perintis, Penegak, Pandega'],
    c: 0
  },
  {
    q: 'Syarat Kecakapan Umum (SKU) dalam Pramuka Siaga harus dipenuhi sesuai dengan...',
    a: ['Tingkatan usia dan golongannya','Keinginan orang tua','Biaya yang dikeluarkan','Sekolah masing-masing'],
    c: 0
  },
  {
    q: 'Alat utama yang dapat digunakan untuk mengetahui arah mata angin adalah...',
    a: ['Termometer','Kompas','Barometer','Stopwatch'],
    c: 1
  },
  {
    q: 'Sistem komunikasi dalam kepramukaan menggunakan kombinasi titik (.) dan garis (-) disebut...',
    a: [' Semaphore','Morse','Sandi Rumput','Sandi Kotak'],
    c: 1
  },
  {
    q: 'Sistem komunikasi dalam kepramukaan menggunakan gerakan atau posisi dari dua buah bendera dinamakan...',
    a: ['Morse','Semaphore','Sandi Kimia','Sandi Angka'],
    c: 1
  },
  {
    q: 'Kegiatan kelompok dalam Pramuka Siaga yang dirancang menyenangkan untuk melatih kerja sama, kejujuran, dan ketangkasan adalah...',
    a: [' Perkemahan bakti','Permainan','Lomba baris-berbaris','Musyawarah besar'],
    c: 1
  },
  {
    q: 'Berikut ini yang bukan merupakan bagian dari dasar-dasar sikap yang diharapkan dari seorang Pramuka Siaga adalah...',
    a: ['Disiplin dan jujur','Mandiri dan suka menolong','Sombong dan egois','Bertanggung jawab dan berani'],
    c: 2
  },
];


// ==========================================
// 2. QUIZ PENGGALANG
// ==========================================
const quizBank2 = [
  {
    q: 'Apa kepanjangan dari Pramuka?',
    a: ['Praja Muda Karana', 'Pemuda Rakyat Mandiri', 'Praktik Muda Berkarya', 'Praja Muda Karya'],
    c: 0
  },
  {
    q: 'Berapa jumlah Dasa Dharma Pramuka?',
    a: ['5', '8', '10', '12'],
    c: 2
  },
  {
    q: 'Sandi yang menggunakan titik dan garis disebut...',
    a: ['Semaphore', 'Morse', 'Kotak', 'Angka'],
    c: 1
  },
  {
    q: 'Apa nama kelompok kecil dalam Pramuka Penggalang?',
    a: ['Barung', 'Regu', 'Sangga', 'Racana'],
    c: 1
  },
  {
    q: 'Apa alat yang digunakan untuk membuat simpul dan ikatan?',
    a: ['Kompas', 'Peluit', 'Tali', 'Bendera'],
    c: 2
  },
  {
    q: 'Apa kepanjangan dari P3K?',
    a: ['Pertolongan Pertama Pada Kecelakaan', 'Persatuan Pemuda Peduli Kesehatan', 'Perawatan Pribadi dan Kesehatan', 'Pertolongan Pasien Pada Klinik'],
    c: 0
  },
  {
    q: 'Pramuka Penggalang adalah anggota Gerakan Pramuka yang umumnya berusia...',
    a: ['7 hingga 10 tahun','11 hingga 15 tahun','16 hingga 20 tahun','21 hingga 25 tahun'],
    c: 1
  },
  {
    q: 'Apa nama aba-aba untuk memulai gerakan dalam baris-berbaris?',
    a: ['Istirahat di tempat', 'Bubar jalan', 'Mulai', 'Laksanakan'],
    c: 3
  },
  {
    q: 'Semaphore menggunakan alat utama berupa...',
    a: ['Dua bendera', 'Kompas', 'Peluit', 'Tongkat panjang'],
    c: 0
  },
  {
    q: 'Apa tujuan utama kegiatan berkemah?',
    a: ['Hanya bermain', 'Melatih kemandirian dan kerja sama', 'Menghindari tugas', 'Berlomba makan'],
    c: 1
  },
  {
    q: 'Apa yang dimaksud dengan regu dalam Pramuka Penggalang?',
    a: ['Kelompok peserta didik', 'Tempat menyimpan peralatan', 'Nama upacara', 'Jenis sandi'],
    c: 0
  },
  {
    q: 'Jika tersesat saat penjelajahan, tindakan yang tepat adalah...',
    a: ['Berjalan semakin jauh tanpa arah', 'Memisahkan diri dari kelompok', 'Tetap tenang dan mengikuti prosedur keselamatan', 'Membuang perlengkapan'],
    c: 2
  },
  {
    q: 'Apa arti dari Dasa Darma yang pertama?',
    a: ['Cinta alam dan kasih sayang sesama manusia', 'Takwa kepada Tuhan Yang Maha Esa', 'Patuh dan suka bermusyawarah', 'Rajin, terampil, dan gembira'],
    c: 1
  },
  {
    q: 'Apa fungsi utama kompas dalam penjelajahan?',
    a: ['Mengukur suhu', 'Menentukan arah', 'Mengukur berat', 'Mengirim pesan'],
    c: 1
  },
  {
    q: 'Siapa yang memimpin regu Penggalang?',
    a: ['Pratama', 'Pimpinan regu', 'Pemimpin Sangga', 'Ketua Racana'],
    c: 1
  },
  {
    q: 'Urutan tingkatan kecakapan umum dalam Pramuka Penggalang dari yang terkecil hingga tertinggi adalah...',
    a: ['Mula, Bantu, Tata','Ramu, Rakit, Terap','Purwa, Madya, Utama','Bantara, Laksana, Garuda'],
    c: 1
  },
  {
    q: 'Kode kehormatan Pramuka Penggalang terdiri dari...',
    a: ['Dwisatya dan Dwidarma','Trisatya dan Dasadarma','Dwisatya dan Dasadarma','Trisatya dan Dwidarma'],
    c: 1
  },
  {
    q: 'Patriot yang sopan dan kesatria" merupakan bunyi Dasadarma yang ke-...',
    a: ['2','3','4','5'],
    c: 1
  },
  {
    q: 'Janji seorang anggota Pramuka Penggalang disebut...',
    a: ['Dasadarma','Dwidarma','Trisatya','Dwisatya'],
    c: 2
  },
  {
    q: 'Bunyi Dasadarma yang ke-10 adalah...',
    a: [' Suci dalam pikiran, perkataan, dan perbuatan','Disiplin, berani, dan setia','Bertanggung jawab dan dapat dipercaya','Hemat, cermat, dan bersahaja'],
    c: 0
  },
  {
    q: 'Gerakan Pramuka secara resmi diperkenalkan kepada masyarakat Indonesia pada tahun...',
    a: ['1928','1945','1961','1998'],
    c: 2
  },
  {
    q: 'Kegiatan menyusuri suatu rute sambil menyelesaikan berbagai tugas atau tantangan disebut...',
    a: ['Perkemahan','Penjelajahan','Pionering','Upacara'],
    c: 2
  },
  {
    q: 'Tindakan awal untuk membantu korban dalam keadaan darurat sambil menunggu bantuan medis disebut...',
    a: ['Bantuan Bencana','Pertolongan Pertama','Penyelamatan Darurat','Evakuasi Medis'],
    c: 1
  },
  { 
    q: 'Syarat yang harus dipenuhi anggota Pramuka untuk mendapatkan tingkatan kecakapan umum adalah...',
    a: ['SKKB','TKKC','SKUD','SPG'],
    c: 2
  },
  {
    q: 'Tanda yang diberikan kepada anggota Pramuka setelah memenuhi syarat kecakapan khusus tertentu dinamakan...',
    a: ['TKKB','SKUC','KTAD','TKU'],
    c: 0
  }
];


// ==========================================
// 3. QUIZ PENEGAK
// ==========================================
const quizBank3 = [ 
  {
    q: 'Anggota Gerakan Pramuka yang berada pada rentang usia 16 sampai 20 tahun dikategorikan sebagai Pramuka...',
    a: ['Siaga', 'Penggalang', 'Penegak', 'Pandega'],
    c: 2
  },
  {
    q: 'Istilah "Penegak" dalam Gerakan Pramuka diambil dari kiasan sejarah perjuangan bangsa Indonesia pada masa...',
    a: ['Menggalang persatuan bangsa', 'Menegakkan kemerdekaan Indonesia', 'Mememangkan perjuangan fisik', 'Menyiagakan kekuatan rakyat'],
    c: 1
  },
  {
    q: 'Satuan terkecil dalam Ambalan Pramuka Penegak disebut...',
    a: ['Barung', 'Regu', 'Sangga', 'Reka'],
    c: 2
  },
  {
    q: 'Pemimpin utama dalam struktur organisasi Ambalan Penegak disebut...',
    a: ['Pratama', 'Pradana', 'Sulung', 'Kerani'],
    c: 1
  },
  {
    q: 'Tingkatan kecakapan umum pertama yang harus dicapai oleh seorang anggota Pramuka Penegak adalah Penegak...',
    a: ['Bantara', 'Laksana', 'Garuda', 'Mula'],
    c: 0
  },
  {
    q: 'Janji yang diucapkan oleh seorang Pramuka Penegak dinamakan...',
    a: ['Dasadarma', 'Dwisatya', 'Trisatya', 'Dwidarma'],
    c: 2
  },
  {
    q: 'Ketentuan moral Pramuka Penegak yang terdiri dari sepuluh poin dinamakan...',
    a: ['Trisatya', 'Dasadarma', 'Pancasila', 'Sandi Ambalan'],
    c: 1
  },
  {
    q: 'Butir Dasadarma ke-8 bagi anggota Pramuka berbunyi...',
    a: ['Hemat, cermat, dan bersahaja', 'Disiplin, berani, dan setia', 'Patriot yang sopan dan kesatria', 'Suci dalam pikiran, perkataan, dan perbuatan'],
    c: 1
  },
  {
    q: 'Persyaratan yang harus dipenuhi oleh anggota Pramuka untuk memperoleh kecakapan khusus sesuai minat dan bakatnya disebut...',
    a: ['SKU', 'SKK', 'TKK', 'TKU'],
    c: 1
  },
  {
    q: 'Tanda yang diberikan kepada anggota Pramuka sebagai bukti bahwa ia telah menguasai keterampilan tertentu dinamakan...',
    a: ['TKK', 'TKU', 'Ring', 'Lencana'],
    c: 2
  },
  {
    q: 'Untuk menyambung dua tongkat yang sejajar agar menjadi lebih panjang, jenis ikatan yang tepat digunakan adalah...',
    a: ['Ikatan palang', 'Ikatan silang', 'Ikatan kaki tiga', 'Simpul mati'],
    c: 0
  },
  {
    q: 'Sistem komunikasi visual yang menggunakan dua buah bendera dengan posisi sudut tangan tertentu dinamakan...',
    a: ['Morse', 'Semaphore', 'Sandi Rumput', 'Sandi Kotak'],
    c: 1
  },
  {
    q: 'Kombinasi titik dan garis untuk huruf "A" dalam kode Morse adalah...',
    a: ['- .', '. -', '- . . .', '- . - .'],
    c: 1
  },
  {
    q: 'Arah mata angin yang berada di antara utara dan timur adalah...',
    a: ['Tenggara', 'Barat daya', 'Timur laut', 'Barat laut'],
    c: 2
  },
  {
    q: 'Komponen pada peta yang berfungsi untuk menjelaskan arti dari simbol-simbol yang ada pada peta dinamakan...',
    a: ['Judul peta', 'Skala', 'Legenda', 'Koordinat'],
    c: 2
  },
  {
    q: 'Tindakan pertama yang paling tepat saat memberikan pertolongan pertama pada korban yang mengalami luka ringan adalah...',
    a: ['Memberikan obat bius', 'Membersihkan luka dengan air bersih atau cairan antiseptik', 'Langsung membalut luka rapat-rapat', 'Memindahkan korban secara tergesa-gesa'],
    c: 1
  },
  {
    q: 'Tujuan utama pelaksanaan latihan Baris-Berbaris (PBB) dalam Gerakan Pramuka adalah untuk melatih...',
    a: ['Kekuatan fisik semata', 'Kedisiplinan, kekompakan, dan kepemimpinan', 'Kecepatan berlari', 'Keterampilan bertarung'],
    c: 1
  },
  {
    q: 'Kegiatan perjalanan di alam terbuka yang membutuhkan kemampuan menggunakan kompas, membaca peta, dan memecahkan masalah dinamakan...',
    a: ['Bakti sosial', 'Perkemahan', 'Penjelajahan', 'Bazzar'],
    c: 2
  },
  {
    q: 'Pengurus Ambalan yang bertugas mencatat administrasi dan keorganisasian disebut...',
    a: ['Pradana', 'Kerani', 'Bendahara', 'Pemangku adat'],
    c: 1
  },
  {
    q: 'Tahapan awal yang benar dalam merencanakan kegiatan kewirausahaan sederhana bagi Pramuka Penegak adalah...',
    a: ['Penjualan', 'Promosi', 'Ide/Perencanaan', 'Evaluasi'],
    c: 2
  },
  {
    q: 'Salah satu bentuk kepedulian Pramuka Penegak terhadap kelestarian lingkungan hidup adalah...',
    a: ['Menebang pohon sembarangan', 'Membuang sampah di sungai', 'Kegiatan penanaman pohon dan pemilahan sampah', 'Membakar sampah plastik di area pemukiman'],
    c: 2
  },
  {
    q: 'Mengapa tunas kelapa dipilih sebagai lambang Gerakan Pramuka...',
    a: ['Karena kelapa mudah beradaptasi dan semua bagian pohonnya bermanfaat', 'Karena pohon kelapa hanya tumbuh di daerah pantai', 'Karena buah kelapa rasanya manis', 'Karena daun kelapa berwarna hijau'],
    c: 0
  },
  {
    q: 'Tokoh pendiri gerakan kepanduan yang diakui sebagai Bapak Pandu Dunia adalah...',
    a: ['Ir. Soekarno', 'Robert Baden-Powell', 'Sultan Hamengkubuwono IX', 'Ki Hajar Dewantara'],
    c: 1
  },
  {
    q: 'Pada intinya, kegiatan Pramuka Penegak difokuskan untuk membentuk anggota menjadi pribadi yang...',
    a: ['Bergantung pada orang tua', 'Hanya menguasai teori kepramukaan', 'Mandiri, bertanggung jawab, berjiwa pemimpin, dan bermanfaat bagi masyarakat', 'Berfokus pada kompetisi antar individu saja'],
    c: 2
  },
  {
    q: 'Apa nama satuan organisasi Pramuka Penegak dan Pandega di tingkat kwartir?',
    a: ['Dewan Kerja', 'Dewan Guru', 'Dewan Regu', 'Dewan Barung'],
    c: 0
  },
];
  
// ==========================================
// BANK SOAL BERDASARKAN GOLONGAN
// ==========================================
window.quizBank = {
  1: quizBank1, // Siaga
  2: quizBank2, // Penggalang
  3: quizBank3  // Penegak
};

console.log('config.js berhasil:', window.quizBank);

const KEY='pramukago_demo_v1';
const defaultState={users:[],current:null,xp:0,streak:1,completed:[],createdGames:[]};
let db=JSON.parse(localStorage.getItem(KEY)||JSON.stringify(defaultState));
let selectedQuiz=null, quizIndex=0, quizScore=0, quizAnswered=false;

const levels={
 siaga:{name:'Siaga',icon:'🟩',color:'green',premium:false,desc:'Masih Baru?Coba Siaga Aja Dulu.'},
 penggalang:{name:'Penggalang',icon:'🟥',color:'red',premium:false,desc:'Sudah Tau?Ayo Lanjut Coba Yang Lebih Seru.'},
 penegak:{name:'Penegak',icon:'🟨',color:'yellow',premium:false,desc:'Masih Mampu?Asah Strategi dan Tunjukan Asksimu'},
};
const lessons={
 siaga:[
  ['🧭',
  'Mengenal Pramuka Siaga',
  'Tentang Seputar Pramuka Siaga',
  `Pengertian: Pramuka Siaga adalah tingkatan awal Pramuka untuk anak usia 7–10 tahun (kelas 1–4 SD). Karakteristiknya disesuaikan dengan perkembangan anak yang lincah, penuh imajinasi, senang bermain, dan berpusat pada keluarga.
​Sejarah Nama: Kata "Siaga" diambil dari sejarah perjuangan bangsa Indonesia, yaitu masa "menyiagakan rakyat" saat berdirinya Boedi Oetomo tahun 1908.
​Struktur Satuan:
​Barung: Satuan terkecil beranggotakan 5–6 orang yang dipimpin Pemimpin Barung (Pinrung) dan Wakil Pemimpin Barung (Wapinrung). Identitasnya menggunakan warna (contoh: Barung Merah, Kuning, Hijau, Biru, dll).
​Perindukan: Gabungan 3–4 Barung (maksimal 24 anak). Kata "Perindukan" berasal dari kata "induk" yang mencerminkan tempat berkumpul bersama ibu.
​Sulung: Pemimpin utama dari seluruh Barung dalam satu Perindukan yang dipilih dari para Pemimpin Barung.
​Panggilan Pembina: Panggilan bernuansa kekeluargaan agar anak merasa aman dan nyaman seperti di rumah:
​Pembina Putra: Yanda | Pembina Putri: Bunda
​Pembantu Pembina Putra: Pakcik | Pembantu Pembina Putri: Bucik
​Seragam & Lambang:
​Seragam: Berwarna dasar cokelat muda dan cokelat tua untuk menumbuhkan rasa persatuan, disiplin, kebersamaan, dan kebanggaan.
​Lambang: Tunas Kelapa, yang bermakna anggota Pramuka diharapkan mampu menyesuaikan diri, bercita-cita tinggi, berguna bagi masyarakat, serta memiliki daya tahan dan semangat.'],
  ['📜',
  'Kode Kehormatan, Sikap, dan Jenjang Tingkatan',
  'Mengenal janji Pramuka Siaga',
  'Kode Kehormatan:
​Dwisatya: Janji seorang Pramuka Siaga.
​Dwidarma: Ketentuan moral dan pedoman perilaku Pramuka Siaga, yang berbunyi:
​Siaga itu patuh pada ayah dan ibundanya.
​Siaga itu berani dan tidak putus asa.
​Dasar-Dasar Sikap: Diharapkan memiliki sikap disiplin, jujur, berani, mandiri, bertanggung jawab, suka menolong, rukun dengan teman, menghormati orang tua dan guru, serta menjaga lingkungan.
​Tingkatan Kecakapan:
​Tingkatan Utama (SKU - Syarat Kecakapan Umum):
​Siaga Mula
​Siaga Bantu
​Siaga Tata
​Syarat Kecakapan Khusus (SKK): Wadah pengembangan minat dan kemampuan. Contohnya: Pertolongan pertama, menabung, memasak, berkebun, berkemah, menjaga lingkungan, kesenian, dan olahraga.`],
  ['🌟',
  'Pengetahuan Dasar Kepramukaan Siaga',
  'Nilai-nilai karakter dalam Pramuka',
  `Pengetahuan Dasar dan Keterampilan Kepramukaan
​Arah Mata Angin & Navigasi: Empat arah utama meliputi Utara, Timur, Selatan, dan Barat. Alat bantu yang digunakan adalah kompas.
​Tali-temali (Simpul Dasar): Mengenal Simpul Mati, Simpul Hidup, Simpul Pangkal, dan Simpul Tiang.
​Sistem Komunikasi:
​Morse: Sistem komunikasi menggunakan kombinasi titik (.) dan garis (-).
​Semaphore: Sistem komunikasi menggunakan gerakan/posisi dari dua buah bendera.
​Keterampilan Praktis: Membuat kerajinan tangan, menyusun tali, serta membaca tanda atau sandi sederhana.`],
  ['⛺','Kegiatan',
  'Mengenal dasar kegiatan siaga',
  `Bentuk Kegiatan Edukatif:
​Permainan Kelompok: Mendidik dan menyenangkan untuk melatih kerja sama, kejujuran, ketangkasan, keberanian, dan kekompakan.
​Perkemahan: Disesuaikan dengan usia dan kemampuan anak.
​Kegiatan Alam: Mengenal lingkungan, menanam tanaman, membersihkan lingkungan, serta mengenal hewan dan tumbuhan.
​Kegiatan Keterampilan: Pembuatan kerajinan dan latihan ketangkasan.
​Tujuan Utama Pramuka Siaga: Membantu anak berkembang menjadi pribadi yang mandiri, disiplin, bertanggung jawab, berani, memiliki keterampilan, mampu bekerja sama, serta memiliki kepedulian terhadap sesama dan lingkungan.`],
 ],
 
 penggalang:[ 
  ['📜',
  'Mengenalkan Pramuka Penggalang',
  'Pengertian, Satuan, Tingkatan, dan Kode Kehormatan Pramuka Penggalang',
  `Pramuka Penggalang
Pramuka Penggalang adalah anggota Gerakan Pramuka yang umumnya berusia 11–15 tahun. Istilah Penggalang berkaitan dengan masa perjuangan bangsa Indonesia ketika rakyat menggalang persatuan untuk mencapai kemerdekaan.
Kegiatan Penggalang menekankan kemandirian, kerja sama, kepemimpinan, kedisiplinan, keterampilan, keberanian, dan tanggung jawab.
A. Satuan Pramuka Penggalang
Satuan terkecil dalam Pramuka Penggalang disebut Regu. Struktur satuannya adalah Regu → Pasukan Penggalang.
* Regu: kelompok kecil anggota Penggalang yang biasanya memiliki nama dan identitas tersendiri.
* Pemimpin Regu (Pinru): bertugas membantu mengatur anggota dan memimpin kegiatan regunya.
* Pasukan Penggalang: kumpulan beberapa regu Penggalang.
* Pratama: pemimpin utama pasukan yang berasal dari peserta didik.
B. Tingkatan Pramuka Penggalang
Pramuka Penggalang memiliki tiga tingkatan, yaitu:
* Penggalang Ramu: tingkat awal Penggalang.
* Penggalang Rakit: tingkat setelah Ramu.
* Penggalang Terap: tingkat tertinggi Penggalang.
Untuk mencapai setiap tingkatan, anggota harus memenuhi Syarat Kecakapan Umum (SKU).
C. Kode Kehormatan Penggalang
Kode kehormatan Pramuka Penggalang terdiri atas Trisatya dan Dasadarma.
Trisatya merupakan janji seorang Pramuka yang berisi komitmen untuk:
* Menjalankan kewajiban kepada Tuhan dan Negara Kesatuan Republik Indonesia.
* Mengamalkan Pancasila
* Menolong sesama hidup dan ikut membangun masyarakat.
* Menepati Dasadarma.
Dasadarma merupakan ketentuan moral Pramuka yang terdiri atas 10 butir:
* Takwa kepada Tuhan Yang Maha Esa.
* Cinta alam dan kasih sayang sesama manusia.
* Patriot yang sopan dan kesatria.
* Patuh dan suka bermusyawarah.
* Rela menolong dan tabah.
* Rajin, terampil, dan gembira.
* Hemat, cermat, dan bersahaja.
* Disiplin, berani, dan setia.
* Bertanggung jawab dan dapat dipercaya.
* Suci dalam pikiran, perkataan, dan perbuatan.
D. Syarat Kecakapan Umum (SKU)
SKU adalah syarat yang harus dipenuhi anggota Pramuka untuk mendapatkan tingkatan tertentu. SKU Penggalang terdiri atas Penggalang Ramu, Rakit, dan Terap.
Materinya mencakup:
* Keagamaan.
* Pancasila.
* Kewarganegaraan.
* Keterampilan kepramukaan.
* Kesehatan.
* Lingkungan.
* Kepemimpinan.
* Kerja sama.
E. Syarat Kecakapan Khusus (SKK)
SKK adalah syarat untuk memperoleh kecakapan khusus sesuai minat dan kemampuan anggota.
Contohnya:
* Pertolongan pertama.
* Memasak
* Berkemah.
* Menabung.
* Berkebun.
* Menjahit.
* Fotografi.
* Olahraga
* Seni.
* Teknologi informasi.
F. Tanda Kecakapan Khusus (TKK)
TKK merupakan tanda yang diperoleh setelah anggota memenuhi persyaratan kecakapan khusus tertentu. TKK menunjukkan bahwa seorang anggota memiliki keterampilan atau kemampuan tertentu.`],
  ['🪢',
  'Keterampilan Dasar dan Teknik Kepramukaan',
  'Simpul dan ikatan dasar',
  `A. Tali-temali
Tali-temali merupakan salah satu keterampilan dasar dalam Pramuka. Beberapa simpul yang perlu diketahui adalah:
* Simpul Mati: digunakan untuk menyambung dua tali yang sama besar dalam kondisi tertentu.
* Simpul Hidup: simpul yang mudah dilepas kembali.
* Simpul Pangkal: sering digunakan untuk mengawali ikatan pada tongkat.
* Simpul Tiang: digunakan untuk membuat lingkaran tetap yang tidak mudah berubah ukuran.
B. Pionering
Pionering adalah keterampilan membuat berbagai bentuk menggunakan tongkat dan tali dengan teknik simpul dan ikatan.
Contoh hasil pionering:
* Tiang bendera.
* Rak sederhana.
* Menara
* Jembatan sederhana.
Jenis ikatan yang umum dipelajari:
* Ikatan palang.
* Ikatan silang.
* Ikatan kaki tiga.
Pionering melatih ketelitian, kerja sama, kreativitas, dan kemampuan memecahkan masalah.
C. Semaphore
Semaphore adalah cara berkomunikasi menggunakan dua buah bendera dengan posisi tertentu untuk mewakili huruf atau angka. Semaphore biasanya digunakan dalam permainan atau latihan komunikasi Pramuka.
D. Morse
Morse merupakan sistem komunikasi yang menggunakan kombinasi titik (.) dan garis (-)
Contoh:
* A = .-
* B = -...
* C = -.-.
Morse dapat disampaikan melalui suara, cahaya, tulisan, atau media lainnya.
E. Kompas dan Arah Mata Angin
Kompas digunakan untuk menentukan arah.
Empat arah utama:
* Utara.
* Timur.
* Selatan.
* Barat.
Arah antara:
* Timur Laut.
* Tenggara.
* Barat Daya.
* Barat Laut.
Kemampuan membaca arah penting dalam kegiatan penjelajahan dan navigasi darat.
F. Peta dan Navigasi
Pramuka Penggalang juga mempelajari cara membaca peta. Hal-hal yang perlu dipahami meliputi:
* Simbol peta.
* Legenda.
* Skala.
* Arah utara.
* Rute perjalanan.
* Posisi atau lokasi.
Navigasi digunakan agar peserta dapat menentukan arah dan mengikuti rute dengan tepat.
G. Pertolongan Pertama
Pertolongan pertama merupakan pengetahuan dasar untuk membantu seseorang dalam keadaan darurat sambil menunggu bantuan yang sesuai.
Contohnya:
* Menangani luka ringan.
* Membantu orang yang mengalami keseleo dengan cara yang tepat.
* Menjaga korban tetap aman.
* Memanggil bantuan.
* Tidak melakukan tindakan yang berisiko memperparah keadaan.
H. Baris-Berbaris
Latihan baris-berbaris bertujuan melatih kedisiplinan, kekompakan, ketepatan, konsentrasi, dan kepemimpinan.
Contoh gerakan:7
* Sikap sempurna.
* Istirahat di tempat.
* Hadap kanan atau kiri.
* Balik kanan.
* Jalan di tempat.
* Penghormatan.
* Berjalan maju.`],
  ['🧭','Kegiatan, Kepemimpinan, dan Pembentukan Karakter Penggalang','Macam Macam nya',`Kegiatan Penggalang cukup beragam, antara lain:
*Perkemahan
Melatih kemandirian, kerja sama, tanggung jawab, dan kedisiplinan.
*Penjelajahan
Kegiatan berjalan menyusuri suatu rute dengan menyelesaikan berbagai tugas atau tantangan
*Pionering
Kegiatan membuat suatu bentuk atau bangunan menggunakan tongkat dan tali, seperti tiang bendera, rak sederhana, menara, dan jembatan sederhana.
*Hiking
Kegiatan berjalan kaki menjelajahi lingkungan atau alam dengan memperhatikan keselamatan.
Permainan Pramuka
*Digunakan untuk melatih kekompakan, strategi, kecepatan, ketelitian, dan kepemimpinan.
  Upacara Pramuka
Upacara dalam Pramuka bertujuan membentuk sikap disiplin, tanggung jawab, nasionalisme, dan kekompakan.
Dalam kegiatan upacara biasanya terdapat:
* Pemimpin upacara.
* Pembina upacara.
* Peserta upacara.
* Pengibaran bendera.
* Amanat.
* Doa.
  Kegiatan Alam dan Lingkungan
Pramuka Penggalang diajarkan untuk mencintai dan menjaga alam.
Contoh kegiatannya:
* Menanam pohon.
* Membersihkan lingkungan.
* Mengelola sampah.
* Menghemat air.
* Menjaga kebersihan tempat berkemah.
* Tidak merusak tumbuhan dan habitat hewan.
Kegiatan ini sesuai dengan nilai cinta alam dan kasih sayang sesama manusia.
D. Sikap yang Harus Dimiliki Penggalang
Seorang Pramuka Penggalang diharapkan memiliki sikap:
*Jujur
* Disiplin.
* Bertanggung jawab.
* Mandiri.
* Berani.
* Sopan.
* Peduli.
* Suka menolong.
* Dapat bekerja sama.
* Menghargai orang lain.
* Menjaga lingkungan.`],
  ['🔤','Sejarah, Identitas, dan Lambang Gerakan Pramuka','Mengenal Terkait Isinya',`Lambang Gerakan Pramuka adalah tunas kelapa.
Makna tunas kelapa antara lain menggambarkan anggota Pramuka yang diharapkan:*
 Mampu beradaptasi.*
 Memiliki cita-cita tinggi.* Berguna        bagi masyarakat.*
 Memiliki daya tahan.* Mampu   tumbuh dan berkembang.
  Hari Pramuka
Hari Pramuka Indonesia diperingati setiap tanggal 14 Agustus.
Gerakan Pramuka secara resmi diperkenalkan kepada masyarakat Indonesia pada 14 Agustus 1961.
  Bapak Pandu Dunia
Tokoh yang dikenal sebagai Bapak Pandu Dunia adalah Robert Baden-Powell. Ia merupakan tokoh penting dalam perkembangan gerakan kepanduan dunia.`],
 ],
 penegak:[
  ['🏕️','Pramuka Penegak','Pengertian Pramuka Penegak','A. Pengertian Pramuka Penegak Pramuka Penegak adalah anggota Gerakan Pramuka yang berusia sekitar 16–20 tahun. Istilah Penegak diambil dari masa perjuangan bangsa Indonesia, yaitu ketika rakyat menegakkan kemerdekaan. Pada tingkat ini, kegiatan Pramuka lebih menekankan pada kepemimpinan, kemandirian, tanggung jawab, keterampilan, kerja sama, pengabdian kepada masyarakat, dan pengembangan diri. B. Satuan Pramuka Penegak Satuan terkecil dalam Pramuka Penegak disebut Sangga. Beberapa Sangga membentuk Ambalan. Sangga merupakan kelompok kecil yang terdiri dari beberapa Pramuka Penegak. Nama Sangga dapat menggunakan nama tokoh atau simbol tertentu, misalnya Sangga Perintis, Pencoba, Pendobrak, Penegas, dan Pelaksana. Ambalan merupakan satuan Pramuka Penegak yang terdiri dari beberapa Sangga. Ambalan biasanya memiliki nama, lambang, adat ambalan, Dewan Ambalan, dan struktur kepengurusan. C. Pemimpin dalam Pramuka Penegak Pemimpin utama dalam Ambalan disebut Pradana. Pradana bersama pengurus lainnya membantu mengatur kegiatan Ambalan. Dewan Ambalan merupakan organisasi kepemimpinan peserta didik di Ambalan. Contoh strukturnya meliputi Pradana, Kerani, Bendahara, Pemangku Adat, dan seksi-seksi sesuai kebutuhan. Struktur dapat disesuaikan dengan organisasi Ambalan masing-masing. D. Tingkatan Pramuka Penegak Pramuka Penegak memiliki dua tingkatan, yaitu: 1. Penegak Bantara: tingkat pertama dalam Pramuka Penegak. Untuk mendapatkannya, anggota harus memenuhi SKU Penegak Bantara. 2. Penegak Laksana: tingkat setelah Bantara. Anggota harus memenuhi persyaratan SKU Penegak Laksana untuk mencapai tingkat ini. E. Kode Kehormatan Penegak Kode kehormatan Pramuka Penegak terdiri atas Trisatya dan Dasadarma. Trisatya merupakan janji seorang Pramuka yang mencakup kewajiban kepada Tuhan dan negara, mengamalkan Pancasila, menolong sesama, membangun masyarakat, serta menepati Dasadarma. Dasadarma terdiri atas 10 ketentuan moral: 1. Takwa kepada Tuhan Yang Maha Esa. 2. Cinta alam dan kasih sayang sesama manusia. 3. Patriot yang sopan dan kesatria. 4. Patuh dan suka bermusyawarah. 5. Rela menolong dan tabah. 6. Rajin, terampil, dan gembira. 7. Hemat, cermat, dan bersahaja. 8. Disiplin, berani, dan setia. 9. Bertanggung jawab dan dapat dipercaya. 10. Suci dalam pikiran, perkataan, dan perbuatan. F. Syarat Kecakapan Umum (SKU) SKU merupakan syarat yang harus dipenuhi untuk mencapai tingkatan tertentu dalam Pramuka. Pada Penegak terdapat SKU Penegak Bantara dan SKU Penegak Laksana. Materinya meliputi keagamaan, Pancasila, kewarganegaraan, kepemimpinan, keterampilan, kesehatan, lingkungan, kegiatan sosial, dan pengembangan diri. G. Syarat Kecakapan Khusus (SKK) SKK merupakan persyaratan untuk memperoleh kecakapan khusus sesuai minat dan kemampuan. Contohnya pertolongan pertama, jurnalistik, fotografi, memasak, berkebun, menjahit, komputer, olahraga, kesenian, bahasa, dan kewirausahaan. H. Tanda Kecakapan Khusus (TKK) TKK merupakan tanda yang diberikan kepada anggota Pramuka setelah memenuhi persyaratan kecakapan khusus tertentu. TKK menunjukkan bahwa seorang Pramuka mempunyai keterampilan atau kemampuan khusus.'],
  ['🗺️','Keterampilan Dasar, Teknik Kepramukaan, dan Keselamatan','Macam Macam Isinya','A. Pionering Pionering adalah keterampilan membuat konstruksi menggunakan tongkat dan tali. Contohnya menara, jembatan, tiang bendera, rak, gapura, dan tandu. Pionering melatih kreativitas, ketelitian, kepemimpinan, dan kerja sama. B. Tali-temali Beberapa simpul dan ikatan yang dipelajari antara lain simpul mati, simpul hidup, simpul pangkal, simpul tiang, ikatan palang, ikatan silang, dan ikatan kaki tiga. Kemampuan tali-temali sangat berguna dalam kegiatan pionering dan perkemahan. C. Semaphore Semaphore merupakan sistem komunikasi menggunakan dua bendera dengan posisi tertentu untuk menunjukkan huruf atau angka. Semaphore dapat digunakan dalam permainan, perlombaan, latihan komunikasi, dan penjelajahan. D. Morse Morse merupakan sistem komunikasi menggunakan kombinasi titik (.) dan garis (-). Contoh: A = .-, B = -..., C = -.-. Morse dapat dikirim menggunakan suara, cahaya, tulisan, atau media lainnya. E. Kompas dan Navigasi Kompas digunakan untuk mengetahui arah. Arah utama meliputi utara, timur, selatan, dan barat. Arah antara meliputi timur laut, tenggara, barat daya, dan barat laut. Pengetahuan navigasi penting ketika melakukan penjelajahan atau kegiatan di alam terbuka. F. Peta Dalam kegiatan Pramuka Penegak, anggota dapat belajar membaca dan menggunakan peta. Hal yang perlu dipahami meliputi judul peta, legenda, simbol, skala, arah utara, koordinat, dan rute perjalanan. G. Pertolongan Pertama Pramuka Penegak perlu memiliki pengetahuan dasar pertolongan pertama untuk membantu seseorang dalam keadaan darurat. Contohnya menangani luka ringan, membantu korban dalam kondisi darurat, membuat lingkungan sekitar korban aman, memanggil bantuan, menenangkan korban, dan menggunakan peralatan P3K dengan benar. Untuk kondisi serius, bantuan tenaga medis tetap diperlukan. H. Baris-Berbaris Baris-berbaris digunakan untuk melatih disiplin, kekompakan, konsentrasi, ketepatan, dan kepemimpinan. Contohnya sikap sempurna, istirahat, hadap kanan, hadap kiri, balik kanan, jalan di tempat, penghormatan, dan berjalan maju.'],
  ['🩹','Kegiatan Pramuka, Kepemimpinan, Pengabdian, dan Pengembangan Diri','Contoh Penerapannya','A. Kegiatan Pramuka Penegak Kegiatan Penegak lebih banyak melibatkan anggota dalam merencanakan, melaksanakan, dan mengevaluasi kegiatan. 1\. Perkemahan: melatih kemandirian, kepemimpinan, kerja sama, tanggung jawab, dan ketahanan diri. 2\. Penjelajahan: kegiatan perjalanan dengan menggunakan kemampuan navigasi, membaca peta, menggunakan kompas, bekerja sama, dan memecahkan masalah. 3\. Bakti Masyarakat: contohnya kerja bakti, penghijauan, kegiatan sosial, bantuan kemanusiaan, dan edukasi masyarakat. 4\. Kegiatan Wirausaha: Penegak dapat belajar membuat produk, menentukan harga, melakukan promosi, menjual produk, dan mengelola keuangan. B. Upacara Pramuka Upacara bertujuan membentuk sikap disiplin, nasionalisme, tanggung jawab, kekompakan, dan kepemimpinan. Dalam upacara dapat terdapat pemimpin upacara, pembina upacara, pengibaran bendera, amanat, doa, dan peserta upacara. C. Musyawarah dan Pengambilan Keputusan Penegak dilatih untuk menyelesaikan masalah melalui musyawarah. Prinsip-prinsipnya meliputi: 1. Menyampaikan pendapat dengan sopan. 2. Mendengarkan pendapat orang lain. 3. Tidak memaksakan kehendak. 4. Mencari kesepakatan. 5. Bertanggung jawab terhadap keputusan bersama. Hal ini berkaitan dengan nilai Pancasila, khususnya sila ke-4. D. Kepemimpinan Kepemimpinan merupakan salah satu kemampuan penting bagi Pramuka Penegak. Seorang pemimpin perlu bertanggung jawab, adil, disiplin, mampu berkomunikasi, mampu mengambil keputusan, menghargai anggota, dan menjadi teladan. E. Kegiatan Alam dan Lingkungan Penegak didorong untuk ikut menjaga lingkungan. Contoh kegiatan meliputi menanam pohon, membersihkan lingkungan, mengurangi sampah, memilah sampah, menjaga kebersihan sungai, menghemat air dan energi, serta melakukan kegiatan penghijauan. F. Kewirausahaan Pramuka Penegak dapat belajar berwirausaha melalui kegiatan sederhana. Tahapannya adalah Ide → Perencanaan → Produksi → Promosi → Penjualan → Evaluasi. Contohnya menjual makanan ringan, membuat kerajinan, menjual perlengkapan Pramuka, dan membuat jasa atau produk kreatif. Tujuannya melatih kreativitas, tanggung jawab, kerja sama, dan kemampuan mengelola usaha. G. Kegiatan Sosial Pramuka Penegak juga dapat melakukan kegiatan sosial, seperti bakti sosial, donasi, kerja bakti, penggalangan bantuan kemanusiaan, kegiatan lingkungan, dan membantu masyarakat. Kegiatan ini mengajarkan kepedulian terhadap sesama. H. Sikap yang Harus Dimiliki Pramuka Penegak Seorang Penegak diharapkan memiliki sikap jujur, disiplin, mandiri, bertanggung jawab, berani, sopan, peduli, suka menolong, dapat dipercaya, mampu bekerja sama, mampu memimpin, menghargai perbedaan, dan menjaga lingkungan.'],
  ['🏆','Sejarah, Identitas, Lambang, dan Ringkasan Gerakan Pramuka','Isi Materi Nya','A. Lambang Gerakan Pramuka Lambang Gerakan Pramuka adalah tunas kelapa. Maknanya menggambarkan anggota Pramuka yang diharapkan mampu beradaptasi, memiliki cita-cita, berguna bagi masyarakat, memiliki ketahanan, serta mampu tumbuh dan berkembang. B. Hari Pramuka Hari Pramuka diperingati setiap tanggal 14 Agustus. Gerakan Pramuka diperkenalkan secara resmi kepada masyarakat Indonesia pada 14 Agustus 1961. C. Bapak Pandu Dunia Tokoh yang dikenal sebagai Bapak Pandu Dunia adalah Robert Baden-Powell. Ia merupakan tokoh penting dalam perkembangan gerakan kepanduan dunia. D. Ringkasan Materi Penegak Usia: 16–20 tahun. Satuan: Sangga. Kumpulan Sangga: Ambalan. Pemimpin Ambalan: Pradana. Tingkatan: Bantara dan Laksana. Kode Kehormatan: Trisatya dan Dasadarma. Kecakapan: SKU, SKK, TKK. Komunikasi: Morse dan Semaphore. Keterampilan: Tali-temali dan Pionering. Navigasi: Kompas dan Peta. Kegiatan: Perkemahan dan Penjelajahan. Kepemimpinan: Musyawarah dan organisasi. Sosial: Bakti masyarakat. Lingkungan: Pelestarian alam. Wirausaha: Produksi, promosi, dan penjualan. E. Inti Materi Pramuka Penegak Pramuka Penegak bukan hanya belajar keterampilan kepramukaan, tetapi juga dilatih menjadi pribadi yang mandiri, bertanggung jawab, mampu memimpin, bekerja sama, berkarya, dan bermanfaat bagi masyarakat.'],
 
 ]
};