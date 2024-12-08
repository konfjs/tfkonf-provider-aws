import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmpcaPermissionArgs {
  actions: string[];
  certificate_authority_arn: string;
  principal: string;
}

export class aws_acmpca_permission extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmpcaPermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_acmpca_permission", resourceName);
  }

  get actions(): string {
    return `${this.resourceType}.${this.resourceName}.actions`;
  }

  get certificate_authority_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_authority_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get source_account(): string {
    return `${this.resourceType}.${this.resourceName}.source_account`;
  }
}
