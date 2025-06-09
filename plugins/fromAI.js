exports.run = {
   usage: [ fromai ],
   category:  example ,
   async: async (m, {
      client,
      Func
   }) => {
      try {
         // only work in private chat
         client.sendFromAI(m.chat,  اهلاً! , m)
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   private: true,
   cache: true,
   location: __filename
}