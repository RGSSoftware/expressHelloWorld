node {
    dir("${pwd()}@script"){
    
        docker build -t rgsoftware/expresshelloworld .
        docker push rgsoftware/expresshelloworld

        docker rm -f expresshelloworld
        docker run -e VIRTUAL_HOST=api.pixeljaw.com -e VIRTUAL_PORT=3000 -p 3000 --name expresshelloworld rgsoftware/expresshelloworld
        
    }
}