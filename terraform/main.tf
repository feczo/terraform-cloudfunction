provider "google" {
  project = var.project
  region  = var.region
}

module "my_function" {
   source               = "./modules/function"
   project              = var.project
   function_name        = "my-function"
   function_entry_point = "app"
   db_service_account_file = var.db_service_account_file
}

resource "google_project_service" "firestore" {
  project = var.firebase_project
  service = "firestore.googleapis.com"

  disable_dependent_services = true
}
