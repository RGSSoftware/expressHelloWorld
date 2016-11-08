node {
    dir("${pwd()}@script"){

        sh('docker build -t rgsoftware/expresshelloworld .')
        sh('docker push rgsoftware/expresshelloworld')

        sh('docker rm -f expresshelloworld')
        sh('docker run -e VIRTUAL_HOST=api.pixeljaw.com -e VIRTUAL_PORT=3000 -p 3000 --name expresshelloworld rgsoftware/expresshelloworld')
        
    }
}