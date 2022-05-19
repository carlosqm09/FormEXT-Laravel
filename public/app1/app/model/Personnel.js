Ext.define('App1.model.Personnel', {
    extend: 'App1.model.Base',

    fields: [
        'name', 'lname1', 'lname2', 'addr', 'nbhd', 'post', 'cel', 'mail'
    ],
    proxy: {
        type: 'rest',
        url : 'https://safe-woodland-83012.herokuapp.com/person'
    }
});
