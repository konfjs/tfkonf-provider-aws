import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSecurityGroupArgs {
  description?: string;
  revoke_rules_on_delete?: boolean;
  tags?: { [key: string]: string };
  timeouts?: AwsSecurityGroupArgsTimeouts;
}

export class aws_security_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_security_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
