(function(window){
    'user strict';
    var App = window.App || {};
    var $ = window.jQuery;
    class RemoteDataStore{
        constructor(url){
            if(!url){
                throw new Error("No remote url supplied!");
            }
            this.serverUrl = url;
        }
        add(key,val){
            return $.post(this.serverUrl, val, function (response){
                console.log(response);
            });
        }
        getAll(cb){
            return $.get(this.serverUrl, function(response){
                if(cb){
                    console.log(response);
                    cb(response);
                }
            })
        }
        get(key, cb){
            return $.get(this.serverUrl + '/' + key, function(response){
                if(cb){
                    console.log(response);
                    cb(response);
                }
            });
        }
        remove(key){
            return $.ajax(this.serverUrl+'/'+key, {type: 'DELETE'});
        }
    }
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);