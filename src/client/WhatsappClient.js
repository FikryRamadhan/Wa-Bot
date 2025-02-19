const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

let whatsappClient = null;

const createClient = () => {
  const client = new Client();

  const initializeEvents = () => {
    client.on("qr", (qr) => qrcode.generate(qr, { small: true }));
    client.on("ready", () => {
      console.log("Client is ready!");
    });
  };


  const sendPersonalMessage = (number, date, time) => {
    const message = `*📢 PENGUMUMAN JADWAL POSYANDU DESA MUNCANGELA 📢*\n\nKepada seluruh warga Desa Muncangela,\nKami ingin menginformasikan jadwal pelaksanaan Posyandu untuk bulan ini. Mari hadiri dan manfaatkan layanan kesehatan yang disediakan untuk balita, ibu hamil, dan lansia.\n\n📅 Hari/Tanggal: ${date}\n⏰ Waktu: ${time}\n📍 Tempat: Di Posyandu Dusun Masing-Masing\n\nLayanan yang tersedia:\nPemeriksaan kesehatan balita (timbang berat badan, ukur tinggi badan, dll.)\n- Imunisasi\n- Pemeriksaan kesehatan ibu hamil\n- Konsultasi gizi dan kesehatan\n- Layanan kesehatan lansia\n\nAyo, datang tepat waktu dan jangan lewatkan kesempatan ini untuk menjaga kesehatan keluarga kita!\nUntuk informasi lebih lanjut, silakan hubungi:\n📞 [+62xxxxxxxxx]\nTerima kasih atas perhatian dan partisipasinya.\nSalam sehat,\nTim Posyandu Desa Muncangela\n`; // Pesan lengkap
    client
      .sendMessage(number, message)
      .then(() => console.log(`Sent to ${number} Success`))
      .catch((err) => console.error("Send error:", err));
  };

  const initialize = () => {
    initializeEvents();
    client.initialize();
  };

  return {
    initialize,
    sendPersonalMessage,
  };
};

const getWhatsappClient = () => {
  if (!whatsappClient) {
    whatsappClient = createClient()
    whatsappClient.initialize();
  }
  return whatsappClient;
};

module.exports = { getWhatsappClient };
