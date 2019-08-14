Ext.ns('HelloWorld.CustomizeComponent');
HelloWorld.CustomizeComponent.CancelButton = Ext.extend(Ext.Button, {
    text : 'Cancel',
    initComponent : function() {
        HelloWorld.CustomizeComponent.CancelButton.superclass.initComponent.call(this);
        this.on('click', this.onButtonClick, this);
    },
    onButtonClick : function(oEvent) {
        Ext.Msg.alert('Cancel Button', 'This is customized cancel button, you clicked me. ');
    }
});
Ext.reg('HelloWorld.CustomizeComponent.CancelButton', HelloWorld.CustomizeComponent.CancelButton);
