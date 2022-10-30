let handler = function (m) {
  // this.sendContact(m.chat, '6287785175535', 'OwnerKu', m)
  conn.sendContact(m.chat, '6287785175535', 'OWNER STORE', m)
  m.reply('wa.me/6287785175535u?text=Banh+Order+Kuy')
}

handler.command = /^ownerlink$/i

module.exports = handler
