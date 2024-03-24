node {
    def app
    def packageJson 

    stage('Clone repository') {
        checkout scm
    }

    stage('Set the build tag') {
        script {
            packageJson = readJSON file: 'package.json'
            env.APP_VERSION = packageJson.version
        }
    }

    stage('Build image') {
       app = docker.build("jeanfelixsagno/k8s-web-hello:${env.APP_VERSION}")
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.APP_VERSION}")
        }
    }
    
    stage('Trigger ManifestUpdate') {
        echo "triggering k8s-updating-manifest job"
        build job: 'k8s-updating-manifest', parameters: [string(name: 'DOCKERTAG', value: env.APP_VERSION)]
    }
}