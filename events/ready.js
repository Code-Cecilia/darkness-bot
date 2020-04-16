module.exports = (client) => {
    client.user.setActivity('slow dancing in the     d a r k', {type: 'STREAMING'})
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);
console.log('no.')
    };

