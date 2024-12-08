import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsCertificateArgs {
  latest_valid_till?: boolean;
}

export class data_aws_rds_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRdsCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_rds_certificate", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_type`;
  }

  get customer_override(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_override`;
  }

  get customer_override_valid_till(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_override_valid_till`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get thumbprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.thumbprint`;
  }

  get valid_from(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_from`;
  }

  get valid_till(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_till`;
  }
}
