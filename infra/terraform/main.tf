provider "aws" {
  region = var.region
}

resource "aws_db_instance" "web4_db" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "15"
  instance_class       = "db.t3.micro"
  name                 = "web4"
  username             = var.db_user
  password             = var.db_password
  skip_final_snapshot  = true
}
