const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Paulo:34984c27@cluster0-6ha0s.mongodb.net/udemydb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
 console.log('Conexão com MongoDB realizada com sucesso');
}).catch((erro) => {
 console.log('Erro: Conexão com MongoDB não realizado com sucesso' + erro);
})