export interface ZikirWord {
  arab: string;
  latin: string;
  arti: string;
}

export interface Zikir {
  judul: string;
  kata: ZikirWord[];
  arti_keseluruhan: string;
  dalil: string;
  tadabbur: string;
  motivasi_emosional: string; // Added emotional motivation
}

export const zikirData: Zikir[] = [
  {
    "judul": "Ya Hayyu Ya Qayyum",
    "kata": [
      {"arab": "يَا", "latin": "yaa", "arti": "wahai"},
      {"arab": "حَيُّ", "latin": "hayyu", "arti": "Yang Maha Hidup"},
      {"arab": "يَا", "latin": "yaa", "arti": "wahai"},
      {"arab": "قَيُّومُ", "latin": "qayyum", "arti": "Yang Maha Berdiri Sendiri"},
      {"arab": "بِرَحْمَتِكَ", "latin": "bi rahmatika", "arti": "dengan rahmat-Mu"},
      {"arab": "أَسْتَغِيثُ", "latin": "astaghits", "arti": "aku memohon pertolongan"},
      {"arab": "أَصْلِحْ", "latin": "aslih", "arti": "perbaikilah"},
      {"arab": "لِي", "latin": "lii", "arti": "bagiku"},
      {"arab": "شَأْنِي", "latin": "sya'ni", "arti": "urusanku"},
      {"arab": "كُلَّهُ", "latin": "kullahu", "arti": "seluruhnya"},
      {"arab": "وَلَا", "latin": "walaa", "arti": "dan jangan"},
      {"arab": "تَكِلْنِي", "latin": "takilni", "arti": "Engkau serahkan aku"},
      {"arab": "إِلَى", "latin": "ila", "arti": "kepada"},
      {"arab": "نَفْسِي", "latin": "nafsi", "arti": "diriku sendiri"},
      {"arab": "طَرْفَةَ", "latin": "torfata", "arti": "sekejap"},
      {"arab": "عَيْنٍ", "latin": "'ain", "arti": "mata"}
    ],
    "arti_keseluruhan": "Wahai Yang Maha Hidup, Wahai Yang Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah seluruh urusanku dan jangan Engkau serahkan aku kepada diriku sendiri walau sekejap mata.",
    "dalil": "HR. An-Nasa'i dan Al-Hakim (dishahihkan Al-Albani)",
    "tadabbur": "Ini doa tauhid dan ketergantungan total. Bahkan satu kedipan mata tanpa pertolongan Allah bisa menjerumuskan manusia.",
    "motivasi_emosional": "Bayangkan lelahmu mengejar rezeki hari ini. Tanpa Allah yang memegang kendali, lelahmu hanya akan jadi letih tanpa makna. Bisikkan ini untuk mengundang belas kasih Sang Pemilik Segala Urusan."
  },
  {
    "judul": "Allahumma Ilman Nafian",
    "kata": [
      {"arab": "اللَّهُمَّ", "latin": "allahumma", "arti": "ya Allah"},
      {"arab": "إِنِّي", "latin": "inni", "arti": "sesungguhnya aku"},
      {"arab": "أَسْأَلُكَ", "latin": "as'aluka", "arti": "memohon kepada-Mu"},
      {"arab": "عِلْمًا", "latin": "ilman", "arti": "ilmu"},
      {"arab": "نَافِعًا", "latin": "nafi'an", "arti": "yang bermanfaat"},
      {"arab": "وَرِزْقًا", "latin": "wa rizqan", "arti": "dan rezeki"},
      {"arab": "طَيِّبًا", "latin": "tayyiban", "arti": "yang baik"},
      {"arab": "وَعَمَلًا", "latin": "wa 'amalan", "arti": "dan amal"},
      {"arab": "مُتَقَبَّلًا", "latin": "mutaqabbalan", "arti": "yang diterima"}
    ],
    "arti_keseluruhan": "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.",
    "dalil": "HR. Ibnu Majah no. 925 (shahih)",
    "tadabbur": "Fokus hidup diringkas jadi tiga: ilmu → rezeki → amal. Tanpa keberkahan, semuanya bisa sia-sia.",
    "motivasi_emosional": "Untukmu pejuang rupiah, mintalah rezeki yang 'Tayyiban' (baik & berkah), bukan cuma banyak. Karena rezeki berkah menenangkan hati, rezeki panas hanya akan menambah beban pikiran."
  },
  {
    "judul": "Allahumma Afini Fi Badani",
    "kata": [
      {"arab": "اللَّهُمَّ", "latin": "allahumma", "arti": "ya Allah"},
      {"arab": "عَافِنِي", "latin": "'afini", "arti": "sehatkanlah aku"},
      {"arab": "فِي", "latin": "fi", "arti": "pada"},
      {"arab": "بَدَنِي", "latin": "badani", "arti": "tubuhku"},
      {"arab": "اللَّهُمَّ", "latin": "allahumma", "arti": "ya Allah"},
      {"arab": "عَافِنِي", "latin": "'afini", "arti": "sehatkanlah aku"},
      {"arab": "فِي", "latin": "fi", "arti": "pada"},
      {"arab": "سَمْعِي", "latin": "sam'i", "arti": "pendengaranku"},
      {"arab": "اللَّهُمَّ", "latin": "allahumma", "arti": "ya Allah"},
      {"arab": "عَافِنِي", "latin": "'afini", "arti": "sehatkanlah aku"},
      {"arab": "فِي", "latin": "fi", "arti": "pada"},
      {"arab": "بَصَرِي", "latin": "basari", "arti": "penglihatanku"},
      {"arab": "لَا", "latin": "laa", "arti": "tidak ada"},
      {"arab": "إِلَهَ", "latin": "ilaha", "arti": "tuhan"},
      {"arab": "إِلَّا", "latin": "illa", "arti": "selain"},
      {"arab": "أَنْتَ", "latin": "anta", "arti": "Engkau"}
    ],
    "arti_keseluruhan": "Ya Allah, sehatkanlah badanku, pendengaranku, dan penglihatanku. Tidak ada Tuhan selain Engkau.",
    "dalil": "HR. Abu Dawud no. 5090 (hasan)",
    "tadabbur": "Kesehatan bukan hanya fisik, tapi alat ibadah. Pendengaran & penglihatan akan dimintai pertanggungjawaban.",
    "motivasi_emosional": "Tubuhmu adalah kendaraan ibadahmu. Di tengah kerasnya dunia mencari ilmu dan nafkah, jangan biarkan kendaraan ini rusak. Syukuri mata dan telingamu dengan doa ini sebelum mereka lelah oleh gadget dan bisingnya dunia."
  }
];
