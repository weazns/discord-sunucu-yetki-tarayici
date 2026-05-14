# Discord Sunucu Yetki Tarayıcı 🔍

Bu proje, Discord hesabınızın bulunduğu tüm sunucuları tarayarak sahip olduğunuz yetkilere göre sizi hiyerarşik bir düzende listeler. Hesabınızın hangi sunucularda ne kadar güce sahip olduğunu tek bir ekranda, renkli ve düzenli bir şekilde görebilirsiniz.

## 🌟 Özellikler

- **Sunucu Sahipliği:** Kurucusu olduğunuz sunucuları tespit eder.
- **Yönetici (Admin) Yetkisi:** `Administrator` yetkisine sahip olduğunuz sunucuları listeler.
- **Moderatör Yetkisi:** `Manage Guild`, `Ban Members`, `Kick Members` veya `Manage Roles` gibi kritik yetkilere sahip olduğunuz sunucuları gruplar.
- **Normal Üye:** Özel bir yetkinizin olmadığı standart sunucuları ayırır.
- **Renkli Çıktı:** Terminal üzerinde `chalk` modülü kullanılarak göz yormayan, okunaklı bir arayüz sunar.

## 🛠️ Kurulum ve Kullanım

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Bu depoyu bilgisayarınıza indirin (Klonlayın):
`git clone https://github.com/weazns/PROJE_ADINIZ.git`

2. Gerekli modülleri yükleyin:
`npm install discord.js-selfbot-v13 chalk fs`

3. Proje dizininde `tokens.txt` adında bir dosya oluşturun ve içine Discord hesap token'ınızı yapıştırın. (Token dosyanızı asla kimseyle paylaşmayın!)

4. Scripti başlatın:
`node index.js`

## ⚠️ Önemli Uyarı (Disclaimer)

**Bu proje eğitim ve kişisel hesap analizi amacıyla yazılmıştır.**
Discord Hizmet Şartları'na (ToS) göre "Self-bot" kullanımı (kullanıcı hesaplarının API üzerinden bot gibi kullanılması) yasaktır. Bu scripti kullanırken API'ye aşırı yük bindirecek işlemler yapmaktan kaçının. Hesabınızın askıya alınma riski tamamen size aittir.

---
*Geliştirici: [weazns]*