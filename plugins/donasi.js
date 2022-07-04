let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [085838225041]
╰────
╭─「 Donasi • Gopay 」
│ •  [085838225041]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler