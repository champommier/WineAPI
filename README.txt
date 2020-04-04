lancement du dashboard Kubernetes:
    kubectl proxy
puis url:
    http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login

lancement de l'agent local DevOps
    /Users/emmanuelchampommier/Documents/Développement/deploymentAgent/run.sh
url:
    http://devops.azure.com

lancement du dashboard Istio (kiali)
    /Users/emmanuelchampommier/Documents/Développement/istio-1.5.1/bin/istioctl dashboard kiali
puis url:
    http://localhost:20001