## DevOps Assessment
### First Task
Create an Azure VM with Terraform. Ensure you have [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli) and [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed

- Create the VM by running:
```bash
$ az login
$ terraform init
$ terraform plan
$ terraform apply
```

<img width="1027" alt="image" src="https://user-images.githubusercontent.com/49791498/194077730-48b43aeb-6712-43d4-90a9-3aabace00473.png">


### Second Task
- Run the project locally
```bash
npm install -g @angular/cli
npm install 
ng build
ng serve 
```

<img width="1151" alt="image" src="https://user-images.githubusercontent.com/49791498/194074211-ea792967-9488-47ae-897f-457001ea56f5.png">


- Setup CI/CD Pipeline using Azure DevOps Pipelines
