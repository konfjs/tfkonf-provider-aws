import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultSecurityGroupArgs {
  revoke_rules_on_delete?: boolean;
  tags?: { [key: string]: string };
}

export class aws_default_security_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDefaultSecurityGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_default_security_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get egress(): string {
    return `${this.resourceType}.${this.resourceName}.egress`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress(): string {
    return `${this.resourceType}.${this.resourceName}.ingress`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
