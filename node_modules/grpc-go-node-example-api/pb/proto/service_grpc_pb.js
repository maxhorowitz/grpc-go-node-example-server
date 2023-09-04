// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_service_pb = require('../proto/service_pb.js');

function serialize_registry_FirstName(arg) {
  if (!(arg instanceof proto_service_pb.FirstName)) {
    throw new Error('Expected argument of type registry.FirstName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_FirstName(buffer_arg) {
  return proto_service_pb.FirstName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_LastName(arg) {
  if (!(arg instanceof proto_service_pb.LastName)) {
    throw new Error('Expected argument of type registry.LastName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_LastName(buffer_arg) {
  return proto_service_pb.LastName.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryService = exports.RegistryService = {
  getLast: {
    path: '/registry.Registry/GetLast',
    requestStream: false,
    responseStream: false,
    requestType: proto_service_pb.FirstName,
    responseType: proto_service_pb.LastName,
    requestSerialize: serialize_registry_FirstName,
    requestDeserialize: deserialize_registry_FirstName,
    responseSerialize: serialize_registry_LastName,
    responseDeserialize: deserialize_registry_LastName,
  },
};

exports.RegistryClient = grpc.makeGenericClientConstructor(RegistryService);
