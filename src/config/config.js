import QRHai from "@/assets/qr_hai.jpg";
import QRNhu from "@/assets/qr_nhu.jpg";
const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Thư mời cưới Trung Hải & Quỳnh Như",
    // Opening message/description of the invitation
    description:
      "Chúng mình sắp kết hôn và trân trọng kính mời bạn cùng chung vui trong khoảnh khắc đặc biệt này", // Nanti ini dibikin random
    // Groom's name
    groomName: "Trung Hải",
    // Bride's name
    brideName: "Quỳnh Như",
    // Groom's parents names
    parentGroom: "Bapak Groom & Ibu Groom",
    // Bride's parents names
    parentBride: "Bapak Bride & Ibu Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-30",
    // Google Maps link for location (short clickable link)
    maps_url: "https://www.google.com/maps/place/13%C2%B006'40.8%22N+107%C2%B051'21.7%22E/@13.1113333,107.8560278,848m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d13.1113333!4d107.8560278?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    // maps_embed:
    //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.8270733147699!3d-6.175392995514422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1b6d7b1e7%3A0x2e69f4f1b6d7b1e7!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1633666820004!5m2!1sid!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    maps_embed:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.8083715798857!2d107.8534400748439!3d13.11132298721704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzQwLjgiTiAxMDfCsDUxJzIxLjciRQ!5e0!3m2!1svi!2shk!4v1762015292069!5m2!1svi!2shk",
    
    time: "11h00",
    // Venue/building name
    location: "Tiệc cưới được tổ chức tại tư gia nhà trai",
    // Full address of the wedding venue
    address: "Số 57 - Xã Ea Súp - Tỉnh Đắk Lắk",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Lễ Thành Hôn",
        // Event date (format: YYYY-MM-DD)
        date: "2025-11-30",
        // Start time (format: HH:MM)
        startTime: "09:00 AM",
        // End time (format: HH:MM)
        endTime: "17:30",
        // Event venue
        location: "Grand Ballroom, Hotel Majesty",
        // Full address
        address: "Jl. Jend. Sudirman No.1, Jakarta",
      },
      {
        // Second event name
        title: "Tiệc cưới",
        date: "2025-11-30",
        startTime: "11:00 AM",
        location: "Grand Ballroom, Hotel Majesty",
        address: "Jl. Jend. Sudirman No.1, Jakarta",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/Golden_Hour.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Golden Hour", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "VietcomBank",
        // Account number
        accountNumber: "1047012633",
        // Account holder name (all uppercase)
        accountName: "LY TRUNG HAI",
        qrImage: QRHai,

      },
      {
        bank: "VietcomBank",
        accountNumber: "9375224867",
        accountName: "NGUYEN THI QUYNH NHU",
        qrImage: QRNhu,
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;