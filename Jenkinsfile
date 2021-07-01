pipeline{
    agent any

    stages{
        stage("SCM"){
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/elena-altuhova/cypress-presentation.git'
            }
        }
        stage("build image"){
            steps{
                powershell "docker.exe build -t cypress_presentation:${env.GIT_COMMIT[0..7]} ."
            }
        }
        stage("run tests"){
            steps{
                powershell "docker.exe run cypress_presentation:${env.GIT_COMMIT[0..7]}"
            }
        }
    }
}