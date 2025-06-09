// plugins/verifiedReply.js
export default function setupVerifiedReply(conn) {
  let active = true;

  conn.ev.on( messages.upsert , async mUp => {
    const msgs = mUp.messages;
    for (const m of msgs) {
      if (!m.key.fromMe && m.message?.conversation) {
        const text = m.message.conversation;
        const jid = m.key.remoteJid;

        // أوامر التشغيل/الإيقاف
        if (text ===  .autoverify on ) {
          active = true;
          return conn.sendMessage(jid, { text:  ✅ تم تفعيل الرد التلقائي الموَّقق.  }, { quoted: m });
        }
        if (text ===  .autoverify off ) {
          active = false;
          return conn.sendMessage(jid, { text:  ❌ تم إيقاف الرد التلقائي الموَّقق.  }, { quoted: m });
        }

        // الرد التلقائي الموَّقق
        if (active) {
          const now = new Date();
          const time = now.toLocaleTimeString( ar-EG , { hour:  2-digit , minute:  2-digit  });
          const replyText =
            `*واتساب* ✅\n` +
            `*VERIFIED BUSINESS ACCOUNT*\n\n` +
            `الذكاء الاصطناعي 💠 ${time}\n` +
            `*${text}*`;

          await conn.sendMessage(jid, { text: replyText }, { quoted: m });
        }
      }
    }
  });
}