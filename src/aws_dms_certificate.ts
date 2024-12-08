import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsCertificateArgs {
  certificate_id: string;
  certificate_pem?: string;
  certificate_wallet?: string;
  tags?: { [key: string]: string };
}

export class aws_dms_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDmsCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dms_certificate", resourceName);
  }

  get certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
