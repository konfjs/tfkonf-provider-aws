import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamSigningCertificateArgs {
  certificate_body: string;
  status?: string;
  user_name: string;
}

export class aws_iam_signing_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamSigningCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_signing_certificate", resourceName);
  }

  get certificate_body(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_body`;
  }

  get certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
