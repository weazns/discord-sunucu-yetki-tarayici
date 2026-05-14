const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const chalk = require('chalk');

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(chalk.magentaBright('============================================='));
    console.log(chalk.cyan(`Giriş Yapıldı: ${client.user.tag}`));
    console.log(chalk.magentaBright('============================================='));
    
    console.log(chalk.yellow('Tüm sunucular taranıyor ve yetki hiyerarşisine göre sıralanıyor...\n'));

    // Yetki kategorileri
    const categories = {
        owned: [],
        admin: [],
        mod: [],
        member: []
    };

    // Tüm sunucuları döngüye sokalım
    for (const guild of client.guilds.cache.values()) {
        // 1. Kategori: Sunucu Sahibi
        if (guild.ownerId === client.user.id) {
            categories.owned.push(guild);
            continue;
        }

        // Kendi üye nesnemizi alıyoruz (Selfbot'ta guild.me genellikle hazırdır)
        const me = guild.me;
        
        if (!me) {
            // Eğer üye verisi çekilemediyse varsayılan olarak normal üye sayalım
            categories.member.push(guild);
            continue;
        }

        // 2. Kategori: Yönetici (Administrator) yetkisi var mı?
        if (me.permissions.has('ADMINISTRATOR')) {
            categories.admin.push(guild);
        } 
        // 3. Kategori: Moderatör (Sunucuyu Yönet, Üyeleri At/Banla, Rolleri Yönet vb.)
        else if (
            me.permissions.has('MANAGE_GUILD') || 
            me.permissions.has('BAN_MEMBERS') || 
            me.permissions.has('KICK_MEMBERS') || 
            me.permissions.has('MANAGE_ROLES')
        ) {
            categories.mod.push(guild);
        } 
        // 4. Kategori: Normal Üye (Özel bir yetkisi yok)
        else {
            categories.member.push(guild);
        }
    }

    // --- SONUÇLARI EKRANA YAZDIRMA ---

    if (categories.owned.length > 0) {
        console.log(chalk.redBright(`👑 SAHİBİ OLDUĞUN SUNUCULAR (${categories.owned.length})`));
        categories.owned.forEach(g => console.log(`  ${chalk.gray('-')} ${chalk.whiteBright(g.name)} ${chalk.gray(`(ID: ${g.id})`)}`));
        console.log('');
    }

    if (categories.admin.length > 0) {
        console.log(chalk.yellowBright(`🛡️ YÖNETİCİ (ADMIN) OLDUĞUN SUNUCULAR (${categories.admin.length})`));
        categories.admin.forEach(g => console.log(`  ${chalk.gray('-')} ${chalk.whiteBright(g.name)} ${chalk.gray(`(ID: ${g.id})`)}`));
        console.log('');
    }

    if (categories.mod.length > 0) {
        console.log(chalk.blueBright(`🛠️ MODERATÖR OLDUĞUN SUNUCULAR (${categories.mod.length})`));
        categories.mod.forEach(g => console.log(`  ${chalk.gray('-')} ${chalk.whiteBright(g.name)} ${chalk.gray(`(ID: ${g.id})`)}`));
        console.log('');
    }

    if (categories.member.length > 0) {
        console.log(chalk.greenBright(`👤 NORMAL ÜYE OLDUĞUN SUNUCULAR (${categories.member.length})`));
        categories.member.forEach(g => console.log(`  ${chalk.gray('-')} ${chalk.whiteBright(g.name)} ${chalk.gray(`(ID: ${g.id})`)}`));
        console.log('');
    }

    console.log(chalk.magentaBright('============================================='));
    console.log(chalk.cyan(`Özet: Toplam ${client.guilds.cache.size} sunucu tarandı.`));
    
    // İşlem bitince scripti kapatmak istersen:
    // process.exit();
});

// tokens.txt dosyasından güncel tokenı okur
try {
    const token = fs.readFileSync('tokens.txt', 'utf8').split('\n')[0].trim();
    client.login(token);
} catch (err) {
    console.log(chalk.red("HATA: tokens.txt okunamadı veya token geçersiz."));
}