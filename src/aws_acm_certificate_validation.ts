import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmCertificateValidationArgsTimeouts {
  create?: string;
}

export interface AwsAcmCertificateValidationArgs {
  certificate_arn: string;
  validation_record_fqdns?: string[];
  timeouts?: AwsAcmCertificateValidationArgsTimeouts;
}

export class aws_acm_certificate_validation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAcmCertificateValidationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_acm_certificate_validation", resourceName);
  }

  get certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
