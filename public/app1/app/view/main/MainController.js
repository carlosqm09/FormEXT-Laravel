/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('App1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    config:{
        stores: ['getApi','Personnel'],
    },

    requires: [
        'App1.model.Personnel',
        'App1.view.main.Edit',
        'App1.store.getApi',
        'App1.store.Personnel'
    ],

    // onItemSelected: function (sender, record) {
      
    //     var form = Ext.create('App1.view.main.Edit');

    //     Ext.getCmp('upd_id').setValue(record.data.id);
    //     Ext.getCmp('upd_name').setValue(record.data.name);
    //     Ext.getCmp('upd_email').setValue(record.data.email);

    //     form.show();

    // },

    onCancel: function() {
        this.getView().destroy();
    },

    onDelete: function() {

        var id = Ext.getCmp('upd_id').getValue();
        var store = Ext.getStore('personnel');
        var record = store.getById(id);

        Ext.MessageBox.confirm('Confirm','Are you sure?',function(btn){
            if (btn == 'yes'){

                record.erase({
                    success: function() {
                        store.remove(record);
                        store.sync();
                    }
                });        

            }
        });

        this.getView().destroy();
    },

    onUpdate: function(record) {

        var rec_id, store, record, name_, email_;

        rec_id = Ext.getCmp('upd_id').getValue();
        name_  = Ext.getCmp('upd_name').getValue();
        email_ = Ext.getCmp('upd_email').getValue();

        store = Ext.getStore('personnel');
        record = store.getById(rec_id);

        record.data.name = name_;
        record.data.email  = email_;
        store.sync();

        Ext.getCmp('dataList').getView().refresh();

        this.getView().destroy();
        //console.log('store: ', store);

    },

    onAdd: function() {

        var name_, lname1_, lname2_, addr_, nbhd_, post_, cel_, email_, store;

        name_  = Ext.getCmp('name').getValue();
        lname1_ = Ext.getCmp('lname1').getValue();
        lname2_ = Ext.getCmp('lname2').getValue();
        addr_ = Ext.getCmp('addr').getValue();
        nbhd_ = Ext.getCmp('nbhd').getValue();
        post_ = Ext.getCmp('post').getValue();
        cel_ = Ext.getCmp('cel').getValue();
        email_ = Ext.getCmp('mail').getValue();
        console.log(name_ , lname1_,lname2_,cel_)

        var user = Ext.create('App1.model.Personnel',{
            name: name_,
            lname1: lname1_,
            lname2: lname2_,
            addr: addr_,
            nbhd: nbhd_,
            post: post_,
            cel: cel_,
            mail: email_,
    });
        user.save(); //POST /users
        store = Ext.getStore('getApi');
        // store.load()
        

        Ext.getCmp('addUserRec').reset();

        Ext.Msg.alert('Success', 'New user has been added.', Ext.emptyFn);

        console.log('store: ', store);
        store.load();
        store.sync();
    }

});
