(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var FIREBASE_SERVER_URL = 'http://coffeerun-1e7e3.firebaseapp.com';
    var App = window.App;
    var Truck = App.Truck;
    var Validation = App.Validation;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var RemoteDataStore = App.RemoteDataStore;
    var FirebaseDataStore = App.FirebaseDataStore
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    //var remoteDS = new RemoteDataStore(SERVER_URL);
    var truck = new Truck('ncc-1701', datastore);
    window.truck = truck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data) { 
        return truck.createOrder.call(truck, data)
            .then(function () {
                checkList.addRow.call(checkList, data);
            });
    });
    console.log(formHandler);

    formHandler.addInputHandler(Validation.isCompanyEmail);
    truck.printOrders(checkList.addRow.bind(checkList));
})(window);