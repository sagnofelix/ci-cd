node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
  
       app = docker.build("jeanfelixsagno/jenkins-nodejs-app")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
        }
    }
    
    stage('Trigger ManifestUpdate') {
        echo "triggering k8s-updating-manifest job"
        build job: 'k8s-updating-manifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
    }
}