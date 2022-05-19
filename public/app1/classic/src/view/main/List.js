/**
 * This view is an example list of people.
 */
Ext.define('App1.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: 'dataList',

    requires: [
        'App1.store.getApi',
        'App1.view.main.Edit'
    ],

    title: 'Personas',

    store: {
        type: 'getApi'
    },

    columns: [
        { text: 'Nombre',  dataIndex: 'name',flex: 1 },
        { text: 'Apellido paterno',  dataIndex: 'lname1',flex: 1 },
        { text: 'Apellido materno',  dataIndex: 'lname2',flex: 1 },
        { text: 'Direccion', dataIndex: 'addr', flex: 1 },
        { text: 'Colonia', dataIndex: 'nbhd', flex: 1 },
        { text: 'Codigo postal', dataIndex: 'post', flex: .5 },
        { text: 'Celular', dataIndex: 'cel', flex: .5 },
        { text: 'Email', dataIndex: 'mail', flex: 1 },
    ],

    listeners: {
        
        itemdblclick: 'onItemSelected' 
        //select: 'onItemSelected'
        // itemdblclick: function(dv, record, item, index, e) {
        //     //alert('working');
        //     console.log('>>',record);
        // }

    }
});
