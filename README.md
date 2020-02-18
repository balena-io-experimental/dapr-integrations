# DAPR integration experiments
A repo that started out as a DAPR Pub/Sub experiment, and has extended to investigating the usage of DAPR with Balena in general.

# Introduction to Dapr
[Dapr](https://dapr.io/) is an open-source, portable runtime used to build event-driven microservices. It allows developers to use any language to and abstracts the implementation of common distributed system components away from the code being developed. It does this by providing a set of standard components to use via API calls or (some) language SDKs, in the following categories:

 - Resource Bindings: use cloud services such as MQTT, Kafka, Azure EventHubs...etc
 - Distributed Tracing: add telemetry to apps and trace runtime traces
 - Publish/Subscribe: use services such as RabbitMQ to implement pub/sub
 - Service Invocation: perform RPC calls on your (micro)services
 - State Management: use services such as Azure Cosmos or Redis to store application state
 - Actors: use the actor software paradigm in the cloud and at the Edge!!!
 - Secrets: Dapr provides an API for secrets manipulation, integrates with cloud services such as Azure KeyVault and Kubernetes secret stores, and provides an interface to implement custom stores.

The components are configured with YAML files and called either via HTTP, gRPC or via a subset of Language SDKs (.NET, Python, JS, GO). This abstraction removes the need to add/maintain code to a developers solution to handle these external services, and also allows them to swap which service is used with no code changes.

# Architecture (for Balena Integration)
Dapr can run in a Stand-alone or Kubernetes environment. In order to integrate with Balena, Dapr will need to run as a stand-alone sidecar executable in each container of an application

![Dapr overview](https://github.com/dapr/docs/raw/master/images/overview-sidecar.png)

 or across applications:
![DaprSideCar](https://i.ibb.co/XxnrNbs/Dapr-Sidecar.png)
