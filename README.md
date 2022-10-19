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
#### Run the project locally
```bash
npm install -g @angular/cli
npm install 
ng build
ng serve 
```

<img width="1151" alt="image" src="https://user-images.githubusercontent.com/49791498/194074211-ea792967-9488-47ae-897f-457001ea56f5.png">


#### Setup CI/CD Pipeline using Azure DevOps Pipelines
- Import the repository from Github into Azure DevOps
<img width="1027" alt="image" src="https://user-images.githubusercontent.com/49791498/194114623-e85a8417-36cc-4a9e-9e0a-6c3b8eb90023.png">

- Clone the repository to my local machine (set up a personal token and use that as your password when prompted by Visual Studio Code).

- Set up CI Pipeline using Azure Pipelines
-- Create branch policies for your main branch, to prevent direct merging of PRs to the branch.
In the policy, allow for at least one person to review the PR before it is merged and ```allow for requestors to approve their change```.
<img width="1345" alt="image" src="https://user-images.githubusercontent.com/49791498/194151506-69c1a7f3-93e8-4b5f-82e2-b7acbcdadff6.png">

-- Write out your pipeline code in a YAML file and check the file into source control (Azure DevOps).
```bash
git push origin main 
```
--- Back in Azure Pipelines, create a new pipeline.
<img width="1345" alt="image" src="https://user-images.githubusercontent.com/49791498/194385651-82e97681-60fc-4c4a-ab87-39be31a9232c.png">
--- Save the pipeline.

--- Any push to the ```main``` branch, will trigger the pipeline and a build will be deployed.

- Create a service connection under Project settings. This to allow the pipeline upload our build files to the storage blob attached to the VM above.
-- The resource type is ```Azure Resource Manager```.

- Create ```variable groups``` to store the sensitive information such as the storage account and subscription names.
-- Set up Azure secrets, and store the value of storage account key there. Ensure to toggle on the option that says ```Link secrets from an Azure key as variables ```, this is to import the secret you created in Azure secrets.

<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195693544-e5b5507d-b00f-41e1-afa5-c7b03749da4f.png">

- Since we want to host the website on the Virtual machine, enable the Storage blob container to host its content as a static website.
<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195695578-1d023c2f-c37f-4e5a-b2ad-ea65d6d0d3dd.png">

- Create an environement called ```DEV```.
<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195697159-c945c925-0d30-4c20-90be-a84ad5947180.png">

- Add variables to the pipeline. 
-- Edit the pipeline to set triggers
<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195722824-454221e6-fc68-44a2-b0ad-6c58658b681c.png">

<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195722872-0b1f8f20-ecf0-4dc8-9a2e-345d3db426d6.png">


### Submission Details
- Resource Group and Resources
<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195707248-a798e48c-0d79-4499-bf1e-34569c150c23.png">

<img width="1389" alt="image" src="https://user-images.githubusercontent.com/49791498/195707306-79e965a0-3848-4fed-ad22-613e86b6a6a4.png">

- [Repo Link](https://github.com/Mbaoma/cicd-with-azure-pipelines)

- [Website Link](https://vxdio738db3399247899b.z13.web.core.windows.net/dashboard)

