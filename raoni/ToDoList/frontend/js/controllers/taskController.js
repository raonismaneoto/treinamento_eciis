/**
 * Created by raoni on 08/05/17.
 */
var vm;
(function() {
    angular.module('todoList').config(function($mdIconProvider){
        $mdIconProvider.fontSet('md', 'material-icons');
    });
    angular.module('todoList').controller('taskController', function (requestService) {
        vm = this;
        vm.tasks = [];
        vm.task_name = '';
        vm.task_description = '';


        vm.createTask = function(name, description){
          task = new Task({name: name, description: description});
          vm.task_name = '';
          vm.task_description = '';
          vm.putTask(task);
        };

        vm.loadTasks = function(){
            requestService.fetchTasks().then(function (response) {
                vm.tasks = response.data;
            }, function(err){
                if( err.status == 401 ){
                   requestService.login();
                };
            });
        };

        vm.putTask = function(data){
            requestService.putTask(data).then(function (response) {
            }, function(err){
                if( err.status == 401 ){
                    requestService.login();
                };
            });
        };

        vm.deleteTasks = function(id){
            requestService.deleteTasks(id).then(function(response) {
                if(response.status === 204){
                    alert('Essa tarefa não existe');
                }
            }, function (err) {
                if( err.status == 401 ){
                    requestService.login();
                };
            });
        };
    });
})();
