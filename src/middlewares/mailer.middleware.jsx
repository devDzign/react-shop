const mail = (store) => (next) => (action) => {
    console.log('Envoie de mail in middleware :', action);
    next(action);
}

export default mail;