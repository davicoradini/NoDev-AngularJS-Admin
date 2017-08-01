from fabric.api import task, run, local

VERSION = '1.4.0'
CONTAINER_NAME = 'nodev_angularjs'
IMAGE_NAME = 'nodev/%s' % CONTAINER_NAME

@task
def build():
    local('docker build -t %s:%s --rm .' % (IMAGE_NAME, VERSION))
    local('docker tag %s:%s %s:latest' % (IMAGE_NAME, VERSION, IMAGE_NAME))


@task
def push():
    build()

    # Cria uma tag de backup para facilmente voltar o backup
    local('git push --all')
    local('git push --tags')

    local('docker pull docker.nao_tenho_ainda.com/%s:latest' % (IMAGE_NAME))
    local('docker tag docker.nao_tenho_ainda.com/%s:latest docker.nao_tenho_ainda.com/%s:backup' % (IMAGE_NAME, IMAGE_NAME))
    local('docker tag %s:%s docker.nao_tenho_ainda.com/%s:%s' % (IMAGE_NAME, VERSION, IMAGE_NAME, VERSION))
    local('docker tag %s:%s docker.nao_tenho_ainda.com/%s:latest' % (IMAGE_NAME, VERSION, IMAGE_NAME))
    local('docker push docker.nao_tenho_ainda.com/%s:backup' % IMAGE_NAME)
    local('docker push docker.nao_tenho_ainda.com/%s:%s' % (IMAGE_NAME, VERSION))
    local('docker push docker.nao_tenho_ainda.com/%s:latest' % IMAGE_NAME)