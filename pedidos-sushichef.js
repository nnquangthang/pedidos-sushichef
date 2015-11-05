Pedidos = new Mongo.Collection("pedidos");
AdminConfig = {
  name: 'Pedidos online',
  adminEmails: ['francofadini@gmail.com','florenciapetrone95@gmail.com'],
  collections: {
    Pedidos: {
        extraFields:['fecha','esterilla'],
        tableColumns: [
           { label: 'Cantidad', name: 'cantidad' },
           { label: 'Pescados', name: 'pescados' },
           { label: 'Esterilla', name: 'displayEsterilla()' },
           { label: 'Fecha', name: 'displayFecha()'},
           { label: 'Usuario', name: 'usuario'},
           { label: 'Direccion', name: 'direccionUsuario()'},
        ],
        color: 'green'
    }
  }
};

var Schemas = {};

Schemas.Pedidos = new SimpleSchema({
       "cantidad": {
          type: Number,
          allowedValues: [
             32,
             64,
             96,
             128,
          ],
          defaultValue: 32,
          label: "Elegir la cantidad!"
       },
       "pescados": {
        type: [String],
        optional: true,
        autoform: {
          type: "select-checkbox",
          options: function () {
            return [
              {label: "Salmon", value: "Salmon"},
              {label: "Kanicama", value: "Kanicama"},
              {label: "Langostinos", value: "Langostinos"}
            ];
          }
        }
      },
      "esterilla": {
        type: Boolean,
        defaultValue: true,
        label: "Llevas esterilla?"
      },
      "fecha": {
            type: Date,
            min: new Date(moment().add(4,'h').startOf('day')),
              autoform: {
                value: new Date(moment()),
            },
      },
      "usuario": {
          type:String,
          autoValue:function(){ return this.userId },
          autoform: {
            afFieldInput: {
              type: "hidden"
            }
          }
      }


});

Pedidos.attachSchema(Schemas.Pedidos);

Router.route('/', {
    template: 'home'
});
Router.route('/index.html', {
    template: 'home'
});
Router.route('/editarPerfil');
Router.route('/pedidos');
Router.route('/usuarios');
Router.configure({
    layoutTemplate:"main",
});

Pedidos.helpers({
  displayFecha: function() {
    var fecha = new Date(this.fecha);
    return moment(fecha).format("DD/MM")
  },
  displayEsterilla: function(){
    if (this.esterilla) {
      return "Si"
    } else {
      return "No"
    }
  },
  direccionUsuario: function(){
    return "direccion";
  }
});
Meteor.users.helpers({
//
});

if (Meteor.isClient) {
accountsUIBootstrap3.setLanguage('es'); // for Spanish
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'nombre',
        fieldLabel: 'Nombre',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Porfavor ingresa tu nombre");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'apellido',
        fieldLabel: 'Apellido',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Porfavor ingresa tu apellido");
            return false;
          } else {
            return true;
          }
        }
    },
        {
            fieldName: 'celular',
            fieldLabel: 'Celular',
            inputType: 'phone',
            visible: true,
            validate: function(value, errorFunction)
            {
                if (value.length == 10)
                {
                    return true;
                } else
                {
                    errorFunction('Ingresar celular sin el 0 y sin el 15. Ej: 3512123456');
                    return false;
                }
            }
        }, {
            fieldName: 'direccion',
            fieldLabel: 'Direccion',
            inputType: 'adress',
            visible: true,
            validate: function(value, errorFunction) {
              if (!value) {
                errorFunction("Porfavor ingresa tu direccion");
                return false;
              } else {
                return true;
              }
            }
        }]
});

Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('editarPerfil');
    }
});
/*Template.formulariopedido.events({
    'submit form': function(e){
        e.preventDefault();
        Pedidos.insert({
            idpedido:e.target.id.value
        });
    }
});*/

Template.usuarios.helpers({
    users: function(){
        return Meteor.users.find();
    }
});

Template.pedidos.helpers({
    pedidosUsuario: function(){
        return Pedidos.find({usuario:Meteor.userId()});
    }
});


}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Pedidos.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
})
}
