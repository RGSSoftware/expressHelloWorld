node {
    dir("${pwd()}@script"){

        sh('docker build -t rgsoftware/expresshelloworld .')
        //sh('docker push rgsoftware/expresshelloworld')

        try {
            sh('docker rm -f expresshelloworld')
        } catch () {
            echo 'There\s no container by :expresshelloworld'
        }
        
        sh('docker run -e VIRTUAL_HOST=api.pixeljaw.com -e VIRTUAL_PORT=3000 -p 3000 --name expresshelloworld -d rgsoftware/expresshelloworld')
        
    }
}
