export TF_VAR_db_service_account_file=/tmp/db-service-account.json

terraform_init:
	cd terraform; \
	terraform init

terraform_plan: 
	cd terraform; \
	terraform plan -out "planfile"

terraform_apply: terraform_plan
	cd terraform; \
	terraform apply -input=false -auto-approve "planfile"

terraform_destroy: 
	cd terraform; \
	terraform destroy
