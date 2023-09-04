const EventEmitter = require('events');

var messages = require('grpc-go-node-example-api/pb/proto/service_pb');
var services = require('grpc-go-node-example-api/pb/proto/service_grpc_pb');
var grpc = require('@grpc/grpc-js');

/**
 * @param {firstName} first Request object for the handler to process
 * @return {lastName}
 */
function checkLast(first) {
    console.log("recieved "+first.getName());
    console.log("sending horowitz");
    last = new messages.LastName();
    last.setName("horowitz")
    return last;
}

/**
 * @param {EventEmitter} call Call object for the handler to process
 * @param {function(Error, lastName)} callback Response callback
 */
function implementationGetLast(call, callback){
    callback(null, checkLast(call.request));
}

var server = new grpc.Server();
server.addService(services.RegistryService, {
    getLast: implementationGetLast,
});
server.bindAsync('localhost:8080', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});