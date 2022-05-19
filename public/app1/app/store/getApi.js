Ext.define('App1.store.getApi', {
    extend: 'Ext.data.Store',
    alias:'store.getApi',
    storeId: 'getApi', 
    proxy: {
        type: 'ajax',
        url: 'https://safe-woodland-83012.herokuapp.com/person',
    },
    autoLoad : true
});
