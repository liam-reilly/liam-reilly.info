resource "aws_s3_bucket" "website_bucket" {
  bucket = var.bucket_name
  acl    = "public-read"

  tags = {
    Owner       = var.app_owner
    Environment = terraform.workspace
  }

  policy = data.aws_iam_policy_document.bucket_policy.json

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    sid    = "Allow-Web-Access"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions   = [
      "s3:GetObject",
      "s3:GetObjectVersion"
    ]
    resources = ["arn:aws:s3:::${var.dns_zone}/*"]
  }
}
