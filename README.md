#k8s-hello

## Installing

1. Create registry in k8s


    kubectl create -f registry.yml 

1. Build jenkins custom image
        
       cd jenkins/
       docker build -t rafaelszp/jenkins .
        
1. Enable your registry in /etc/docker/daemon.json

**Example:**

        { "insecure-registries":["10.21.154.64:30400"] }


1. Push jenkins image to registry


    docker tag rafaelszp/jenkins registry_host:registry_port/jenkins
    docker push registry_host:registry_port/jenkins 
    
1. Set permissions on node(_until I find a better way_)

    
    chmod 777 /var/run/docker.sock